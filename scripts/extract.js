const { statSync, readdirSync, readFileSync, writeFileSync } = require("fs");
const { extname, basename, join, dirname } = require("path");
const markdownit = require("markdown-it");
const html2md = require("html-to-md");

const md = markdownit({
  // Enable HTML tags in source
  html: true,

  // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  xhtmlOut: false,

  // Convert '\n' in paragraphs into <br>
  breaks: false,

  // CSS language prefix for fenced blocks. Can be
  // useful for external highlighters.
  langPrefix: "language-",

  // Autoconvert URL-like text to links
  linkify: false,

  // Enable some language-neutral replacement + quotes beautification
  // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
  typographer: true,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: "“”‘’",

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) {
    return "";
  },
});

const packages = {
  functions: "aoi.js",
  music: "aoi.music",
  canvas: "aoi.canvas",
};

const missingExamples = [];

function parseHTMLContent(html, path) {
  const functionMatch = html.match(/title:\s*(\S+)/);
  const functionName = functionMatch ? functionMatch[1].trim() : "";

  const descriptionMatch = html.match(/<p[^>]*>(.*?)<\/p>/);
  const description = descriptionMatch ? descriptionMatch[1].trim() : "";

  const usageMatch = html.match(
    /<h2[^>]*>Usage<\/h2>\s*<pre[^>]*>(.*?)<\/pre>/s
  );
  const usage = usageMatch ? usageMatch[1].trim() : "";
  const exampleMatch = html.match(
    /<h2>Example\(s\)<\/h2>\s*(?:<blockquote>.*?<\/blockquote>\s*)?(?:<p>.*?<\/p>\s*)*<pre><code[^>]*>(.*?)<\/code><\/pre>(?:\s*<p>.*?<\/p>\s*<pre><code[^>]*>(.*?)<\/code><\/pre>)*/gs
  );

  const example = exampleMatch
    ? exampleMatch[0].replace("<h2>Example(s)</h2>", "")
    : "";

  if (!example) {
    missingExamples.push(functionName);
  }

  const table = extractTable(html);
  const packageName = packages[basename(dirname(path))] ?? "aoi.js";

  const documentation = ["aoi.music", "aoi.canvas"].includes(packageName)
    ? `https://aoi.js.org/extensions/${packageName}/${functionName
        .toLowerCase()
        .replace("$", "")}`
    : `https://aoi.js.org/functions/${functionName
        .toLowerCase()
        .replace("$", "")}`;

  const sourceCode = ["aoi.music", "aoi.canvas"].includes(packageName)
    ? `https://github.com/aoijs/${packageName}`
    : `https://github.com/aoijs/aoi.js/tree/v6/src/functions/${basename(
        path,
        extname(path)
      )}.js`;

  return {
    function: functionName,
    description: html2md(description),
    usage: html2md(usage),
    example: html2md(example),
    table,
    package: packageName,
    documentation,
    "source-code": sourceCode,
  };
}

function extractTable(html) {
  const tableMatch = html.match(/<h2[^>]*>Parameters<\/h2>([\s\S]*?)<\/table>/);
  if (!tableMatch) return [];

  const tableContent = tableMatch[1].trim();

  const headersMatch = tableContent.match(/<th[^>]*>(.*?)<\/th>/g);
  if (!headersMatch) return [];
  const headers = headersMatch.map((header) =>
    header.replace(/<\/?th[^>]*>/g, "").trim()
  );

  const rowsMatch = tableContent.match(/<tr[^>]*>([\s\S]*?)<\/tr>/g);
  if (!rowsMatch) return [];
  const rows = rowsMatch.map((row) => {
    const cellsMatch = row.match(/<td[^>]*>(.*?)<\/td>/g);
    if (!cellsMatch) return [];
    return cellsMatch.map((cell) => cell.replace(/<\/?td[^>]*>/g, "").trim());
  });

  const filteredRows = rows.filter((row) => row.length > 0);

  const table = filteredRows.map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.toLowerCase()] = html2md(row[index]);
    });
    return obj;
  });

  return table;
}

function measureExecutionTime(fn, ...args) {
  const start = process.hrtime.bigint();
  const result = fn(...args);
  const end = process.hrtime.bigint();
  const duration = Number(end - start) / 1e6;
  return { result, duration };
}

function parseFiles(directoryPath) {
  const result = [];
  const folders = readdirSync(directoryPath);

  folders.forEach((folder) => {
    const folderPath = join(directoryPath, folder);
    if (statSync(folderPath).isDirectory() && packages[folder]) {
      const files = readdirSync(folderPath);

      files.forEach((file) => {
        if (extname(file) === ".md" || extname(file) === ".mdx") {
          const path = join(folderPath, file);
          let content = readFileSync(path, "utf-8");

          // this is a HORRIBLE way to handle mdx but who cares lol
          if (extname(file) === ".mdx") {
            // split <Example> ... </Example>
            const example = content.match(/<Example>([\s\S]*?)<\/Example>/);
            // match <div slot="default"> ... </div>
            if (!example) {
              content = content.replace(
                /## Example\(s\)([\s\S]*)/,
                `## Example(s)\n No example provided`
              );
            } else {
              const defaultExample = example?.[1].match(
                /<div slot="default">([\s\S]*?)<\/div>/
              );
              // replace everything below ## Examples(s) with extracted example
              content = content.replace(
                /## Example\(s\)([\s\S]*)/,
                `## Example(s)\n${defaultExample[1]}`
              );
            }
          }
          const { result: html, duration: render } =
            measureExecutionTime(md.render.bind(md), content);
          const { result: object, duration: parse } =
            measureExecutionTime(parseHTMLContent, html, path);

          result.push({ ...object, render, parse });
        }
      });
    }
  });

  return result;
}

const docs = join(__dirname, "docs");
writeFileSync("functions.json", JSON.stringify(docsResult, null, 2));

console.table(
  docsResult.map(
    ({ function: functionName }) => ({
      functionName: functionName,
      missing: missingExamples.includes(functionName) ? "✅" : "❌",
    })
  )
);

console.log(`Done!`);
