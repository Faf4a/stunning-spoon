// Vencord e99e89e9
// Standalone: false
// Platform: android
// Updater Disabled: false
"use strict";var zn=Object.create;var Ae=Object.defineProperty;var Nn=Object.getOwnPropertyDescriptor;var Un=Object.getOwnPropertyNames;var Vn=Object.getPrototypeOf,Bn=Object.prototype.hasOwnProperty;var Ce=(t,e)=>()=>(t&&(e=t(t=0)),e);var Z=(t,e)=>{for(var n in e)Ae(t,n,{get:e[n],enumerable:!0})},mt=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Un(e))!Bn.call(t,r)&&r!==n&&Ae(t,r,{get:()=>e[r],enumerable:!(i=Nn(e,r))||i.enumerable});return t};var jn=(t,e,n)=>(n=t!=null?zn(Vn(t)):{},mt(e||!t||!t.__esModule?Ae(n,"default",{value:t,enumerable:!0}):n,t)),Fn=t=>mt(Ae({},"__esModule",{value:!0}),t);var c=Ce(()=>{"use strict"});var ue=Ce(()=>{"use strict";c()});function he(t){return async function(){try{return{ok:!0,value:await t(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var It=Ce(()=>{"use strict";c()});var Yn={};function ee(...t){let e={cwd:wt};return ze?Le("flatpak-spawn",["--host","git",...t],e):Le("git",t,e)}async function Zn(){return(await ee("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function Kn(){await ee("fetch");let t=(await ee("branch","--show-current")).stdout.trim();if(!((await ee("ls-remote","origin",t)).stdout.length>0))return[];let i=(await ee("log",`HEAD...origin/${t}`,"--pretty=format:%an/%h/%s")).stdout.trim();return i?i.split(`
`).map(r=>{let[s,o,...a]=r.split("/");return{hash:o,author:s,message:a.join("/").split(`
`)[0]}}):[]}async function Wn(){return(await ee("pull")).stdout.includes("Fast-forward")}async function Hn(){return!(await Le(ze?"flatpak-spawn":"node",ze?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:wt})).stderr.includes("Build failed")}var yt,fe,At,Ct,wt,Le,ze,St=Ce(()=>{"use strict";c();ue();yt=require("child_process"),fe=require("electron"),At=require("path"),Ct=require("util");It();wt=(0,At.join)(__dirname,".."),Le=(0,Ct.promisify)(yt.execFile),ze=!1;fe.ipcMain.handle("VencordGetRepo",he(Zn));fe.ipcMain.handle("VencordGetUpdates",he(Kn));fe.ipcMain.handle("VencordUpdate",he(Wn));fe.ipcMain.handle("VencordBuild",he(Hn))});c();var Y=require("electron"),kn=require("path");c();c();St();c();ue();var Qe=require("electron");c();var je={};Z(je,{fetchTrackData:()=>rr});c();c();c();c();var I=11400714785074694791n,w=14029467366897019727n,Tt=1609587929392839161n,pe=9650029242287828579n,xt=2870177450012600261n,Et=64n,$n=2n**Et-1n,Jn=new TextEncoder;function bt(t,e,n,i){return BigInt(t)|BigInt(e)<<16n|BigInt(n)<<32n|BigInt(i)<<48n}function N(t,e){return BigInt(t[e])|BigInt(t[e+1])<<8n|BigInt(t[e+2])<<16n|BigInt(t[e+3])<<24n|BigInt(t[e+4])<<32n|BigInt(t[e+5])<<40n|BigInt(t[e+6])<<48n|BigInt(t[e+7])<<56n}function y(t,e){return t<<e&$n|t>>Et-e}function h(t){return BigInt.asUintN(64,t)}var Ue=class{#t;#n;#r;#i;#o;#s;#a;#e;constructor(e=0){this.reset(e)}reset(e=this.#t){return this.#t=BigInt.asUintN(32,BigInt(e)),this.#n=h(this.#t+I+w),this.#r=h(this.#t+w),this.#i=this.#t,this.#o=h(this.#t-I),this.#s=null,this.#a=0,this.#e=0,this}update(e){typeof e=="string"&&(e=Jn.encode(e));let n=0,i=e.length,r=n+i;if(i===0)return this;if(this.#a+=i,this.#e===0&&(this.#s=new Uint8Array(32)),this.#e+i<32)return this.#s.set(e.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#s.set(e.subarray(0,32-this.#e),this.#e);let s=0,o;o=N(this.#s,s),this.#n=h(y(h(this.#n+o*w),31n)*I),s+=8,o=N(this.memory,s),this.#r=h(y(h(this.#r+o*w),31n)*I),s+=8,o=N(this.memory,s),this.#i=h(y(h(this.#i+o*w),31n)*I),s+=8,o=N(this.memory,s),this.#o=h(y(h(this.#o+o*w),31n)*I),n+=32-this.#e,this.#e=0}if(n<=r-32){let s=r-32;do{let o;o=N(e,n),this.#n=h(y(h(this.#n+o*w),31n)*I),n+=8,o=N(e,n),this.#r=h(y(h(this.#r+o*w),31n)*I),n+=8,o=N(e,n),this.#i=h(y(h(this.#i+o*w),31n)*I),n+=8,o=N(e,n),this.#o=h(y(h(this.#o+o*w),31n)*I),n+=8}while(n<=s)}return n<r&&(this.#s.set(e.subarray(n,r),this.#e),this.#e=r-n),this}digest(){let e=this.#s,n=this.#e,i=0,r=0n,s=0n,o=0n;for(this.#a>=32?(r=y(this.#n,1n)+y(this.#r,7n)+y(this.#i,12n)+y(this.#o,18n),r=h(r^y(h(this.#n*w),31n)*I),r=h(r*I+pe),r=h(r^y(h(this.#r*w),31n)*I),r=h(r*I+pe),r=h(r^y(h(this.#i*w),31n)*I),r=h(r*I+pe),r=h(r^y(h(this.#o*w),31n)*I),r=h(r*I+pe)):r=h(this.#t+xt),r+=BigInt(this.#a);i<=n-8;)o=N(e,i),o=h(y(h(o*w),31n)*I),r=h(y(r^o,27n)*I+pe),i+=8;for(i+4<=n&&(o=bt(e[i+1]<<8|e[i],e[i+3]<<8|e[i+2],0,0),r=h(y(r^h(o*I),23n)*w+Tt),i+=4);i<n;)o=bt(e[i++],0,0,0),r=h(y(r^h(o*xt),11n)*I);return s=h(r>>33n),r=h((r^s)*w),s=h(r>>29n),r=h((r^s)*Tt),s=h(r>>32n),r=h(r^s),r}};function Dt(t,e=0){return new Ue(e).update(t).digest()}var te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),Xn=(()=>{let t=new Uint8Array(4),e=new Uint32Array(t.buffer);return!((e[0]=1)&t[0])})();function qn(t){t=BigInt(t);let e=[],n=Math.ceil(Math.floor(Math.log2(Number(t))+1)/8);for(let r=0;r<n;r++)e.unshift(Number(t>>BigInt(8*r)&BigInt(255)));let i=new Uint8Array(e);return Xn?i:i.reverse()}function Pt(t){let e=Dt(t,0),n=qn(e);return[te[n[0]>>2],te[(n[0]&3)<<4|n[1]>>4],te[(n[1]&15)<<2|n[2]>>6],te[n[2]&63],te[n[3]>>2],te[(n[3]&3)<<4|n[3]>>4]].join("")}function Rt(t){let e=typeof t=="string"?t:t.source;if(e=e.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(r,s,o)=>{let a=o==="raw"?s:Pt(s),l=typeof t=="string";return!Number.isNaN(Number(a[0]))||a.includes("+")||a.includes("/")?l?`["${a}"]`:String.raw`(?:\["${a}"\])`.replaceAll("+","\\+"):l?`.${a}`:String.raw`(?:\.${a})`}),typeof t=="string")return e;let n=e.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`),i=new RegExp(n,t.flags);return i.toString=t.toString.bind(t),i}var kt=require("child_process"),Mt=require("util"),Ot=(0,Mt.promisify)(kt.execFile);async function Ve(t){let{stdout:e}=await Ot("osascript",t.map(n=>["-e",n]).flat());return e}var k=null,Qn=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,er=Rt(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),Be,tr=async()=>{if(Be)return Be;let t=await fetch("https://music.apple.com/").then(r=>r.text()),e=new URL(t.match(Qn)[1],"https://music.apple.com/"),i=(await fetch(e).then(r=>r.text())).match(er)[1];return Be=i,i};async function nr({id:t,name:e,artist:n,album:i}){if(t===k?.id){if("data"in k)return k.data;if("failures"in k&&k.failures>=5)return null}try{let r=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");r.searchParams.set("platform","web"),r.searchParams.set("l","en-US"),r.searchParams.set("limit","1"),r.searchParams.set("with","serverBubbles"),r.searchParams.set("types","songs"),r.searchParams.set("term",`${e} ${n} ${i}`),r.searchParams.set("include[songs]","artists");let s=await tr(),o=await fetch(r,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${s}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(a=>a.json()).then(a=>a.results.song.data[0]);return k={id:t,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},k.data}catch(r){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",r),k={id:t,failures:(t===k?.id&&"failures"in k?k.failures:0)+1},null}}async function rr(){try{await Ot("pgrep",["^Music$"])}catch{return null}if(await Ve(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let e=await Ve(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),n=await Ve(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,r,s,o,a]=n.split(`
`).filter(f=>!!f),l=Number.parseFloat(a),d=await nr({id:i,name:r,artist:o,album:s});return{name:r,album:s,artist:o,playerPosition:e,duration:l,...d}}var Fe={};Z(Fe,{initDevtoolsOpenEagerLoad:()=>ir});c();function ir(t){let e=()=>t.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");t.sender.isDevToolsOpened()?e():t.sender.once("devtools-opened",()=>e())}var Bt={};c();c();ue();c();var Ze=Symbol("SettingsStore.isProxy"),_t=Symbol("SettingsStore.getRawTarget"),ge=class{pathListeners=new Map;globalListeners=new Set;proxyContexts=new WeakMap;proxyHandler=(()=>{let e=this;return{get(n,i,r){if(i===Ze)return!0;if(i===_t)return n;let s=Reflect.get(n,i,r),o=e.proxyContexts.get(n);if(o==null)return s;let{root:a,path:l}=o;if(!(i in n)&&e.getDefaultValue!=null&&(s=e.getDefaultValue({target:n,key:i,root:a,path:l})),typeof s=="object"&&s!==null&&!s[Ze]){let d=`${l}${l&&"."}${i}`;return e.makeProxy(s,a,d)}return s},set(n,i,r){if(r?.[Ze]&&(r=r[_t]),n[i]===r)return!0;if(!Reflect.set(n,i,r))return!1;let s=e.proxyContexts.get(n);if(s==null)return!0;let{root:o,path:a}=s,l=`${a}${a&&"."}${i}`;return e.notifyListeners(l,r,o),!0},deleteProperty(n,i){if(!Reflect.deleteProperty(n,i))return!1;let r=e.proxyContexts.get(n);if(r==null)return!0;let{root:s,path:o}=r,a=`${o}${o&&"."}${i}`;return e.notifyListeners(a,void 0,s),!0}}})();constructor(e,n={}){this.plain=e,this.store=this.makeProxy(e),Object.assign(this,n)}makeProxy(e,n=e,i=""){return this.proxyContexts.set(e,{root:n,path:i}),new Proxy(e,this.proxyHandler)}notifyListeners(e,n,i){let r=e.split(".");if(r.length>2&&r[0]==="plugins"){let s=r.slice(0,3),o=s.join("."),a=s.reduce((l,d)=>l[d],i);this.globalListeners.forEach(l=>l(i,o)),this.pathListeners.get(o)?.forEach(l=>l(a))}else this.globalListeners.forEach(s=>s(i,e));this.pathListeners.get(e)?.forEach(s=>s(n))}setData(e,n){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=e,this.store=this.makeProxy(e),n){let i=e,r=n.split(".");for(let s of r){if(!i){console.warn(`Settings#setData: Path ${n} does not exist in new data. Not dispatching update`);return}i=i[s]}this.pathListeners.get(n)?.forEach(s=>s(i))}this.markAsChanged()}addGlobalChangeListener(e){this.globalListeners.add(e)}addChangeListener(e,n){let i=this.pathListeners.get(e)??new Set;i.add(n),this.pathListeners.set(e,i)}removeGlobalChangeListener(e){this.globalListeners.delete(e)}removeChangeListener(e,n){let i=this.pathListeners.get(e);i&&(i.delete(n),i.size||this.pathListeners.delete(e))}markAsChanged(){this.globalListeners.forEach(e=>e(this.plain,""))}};c();function Ke(t,e){for(let n in e){let i=e[n];typeof i=="object"&&!Array.isArray(i)?(t[n]??={},Ke(t[n],i)):t[n]??=i}return t}var Te=require("electron"),W=require("fs");c();var Gt=require("electron"),j=require("path"),we=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,j.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,j.join)(Gt.app.getPath("userData"),"..","Vencord")),ne=(0,j.join)(we,"settings"),K=(0,j.join)(we,"themes"),Se=(0,j.join)(ne,"quickCss.css"),We=(0,j.join)(ne,"settings.json"),He=(0,j.join)(ne,"native-settings.json"),Lt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"];(0,W.mkdirSync)(ne,{recursive:!0});function Nt(t,e){try{return JSON.parse((0,W.readFileSync)(e,"utf-8"))}catch(n){return n?.code!=="ENOENT"&&console.error(`Failed to read ${t} settings`,n),{}}}var P=new ge(Nt("renderer",We));P.addGlobalChangeListener(()=>{try{(0,W.writeFileSync)(We,JSON.stringify(P.plain,null,4))}catch(t){console.error("Failed to write renderer settings",t)}});Te.ipcMain.handle("VencordGetSettingsDir",()=>ne);Te.ipcMain.on("VencordGetSettings",t=>t.returnValue=P.plain);Te.ipcMain.handle("VencordSetSettings",(t,e,n)=>{P.setData(e,n)});var or={plugins:{}},Ut=Nt("native",He);Ke(Ut,or);var zt=new ge(Ut);zt.addGlobalChangeListener(()=>{try{(0,W.writeFileSync)(He,JSON.stringify(zt.plain,null,4))}catch(t){console.error("Failed to write native settings",t)}});var Vt=require("electron");Vt.app.on("browser-window-created",(t,e)=>{e.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let r=P.store.plugins?.FixSpotifyEmbeds;if(!r?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${r.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Ft={};c();var jt=require("electron");jt.app.on("browser-window-created",(t,e)=>{e.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!P.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var Ye={};Z(Ye,{resolveRedirect:()=>ar});c();var Zt=require("https"),sr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function Kt(t){return new Promise((e,n)=>{let i=(0,Zt.request)(new URL(t),{method:"HEAD"},r=>{e(r.headers.location?Kt(r.headers.location):t)});i.on("error",n),i.end()})}async function ar(t,e){return sr.test(e)?Kt(e):e}var $e={};Z($e,{makeDeeplTranslateRequest:()=>cr});c();async function cr(t,e,n,i){let r=e?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${n}`},body:i}),o=await s.text();return{status:s.status,data:o}}catch(s){return{status:-1,data:String(s)}}}var Je={};Z(Je,{readRecording:()=>lr});c();var Wt=require("electron"),Ht=require("fs/promises"),de=require("path");async function lr(t,e){e=(0,de.normalize)(e);let n=(0,de.basename)(e),i=(0,de.normalize)(Wt.app.getPath("userData")+"/");if(console.log(n,i,e),n!=="recording.ogg"||!e.startsWith(i))return null;try{let r=await(0,Ht.readFile)(e);return new Uint8Array(r.buffer)}catch{return null}}var Xe={};Z(Xe,{sendToOverlay:()=>ur});c();var $t=require("dgram"),Yt;function ur(t,e){e.messageType=e.type;let n=JSON.stringify(e);Yt??=(0,$t.createSocket)("udp4"),Yt.send(n,42069,"127.0.0.1")}var qt={};c();var Xt=require("electron");c();var Jt=`/* eslint-disable */

/**
 * This file is part of AdGuard's Block YouTube Ads (https://github.com/AdguardTeam/BlockYouTubeAdsShortcut).
 *
 * Copyright (C) AdGuard Team
 *
 * AdGuard's Block YouTube Ads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard's Block YouTube Ads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard's Block YouTube Ads.  If not, see <http://www.gnu.org/licenses/>.
 */

const hiddenCSS = [
    "#__ffYoutube1",
    "#__ffYoutube2",
    "#__ffYoutube3",
    "#__ffYoutube4",
    "#feed-pyv-container",
    "#feedmodule-PRO",
    "#homepage-chrome-side-promo",
    "#merch-shelf",
    "#offer-module",
    '#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
    "#pla-shelf",
    "#premium-yva",
    "#promo-info",
    "#promo-list",
    "#promotion-shelf",
    "#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer",
    "#search-pva",
    "#shelf-pyv-container",
    "#video-masthead",
    "#watch-branded-actions",
    "#watch-buy-urls",
    "#watch-channel-brand-div",
    "#watch7-branded-banner",
    "#YtKevlarVisibilityIdentifier",
    "#YtSparklesVisibilityIdentifier",
    ".carousel-offer-url-container",
    ".companion-ad-container",
    ".GoogleActiveViewElement",
    '.list-view[style="margin: 7px 0pt;"]',
    ".promoted-sparkles-text-search-root-container",
    ".promoted-videos",
    ".searchView.list-view",
    ".sparkles-light-cta",
    ".watch-extra-info-column",
    ".watch-extra-info-right",
    ".ytd-carousel-ad-renderer",
    ".ytd-compact-promoted-video-renderer",
    ".ytd-companion-slot-renderer",
    ".ytd-merch-shelf-renderer",
    ".ytd-player-legacy-desktop-watch-ads-renderer",
    ".ytd-promoted-sparkles-text-search-renderer",
    ".ytd-promoted-video-renderer",
    ".ytd-search-pyv-renderer",
    ".ytd-video-masthead-ad-v3-renderer",
    ".ytp-ad-action-interstitial-background-container",
    ".ytp-ad-action-interstitial-slot",
    ".ytp-ad-image-overlay",
    ".ytp-ad-overlay-container",
    ".ytp-ad-progress",
    ".ytp-ad-progress-list",
    '[class*="ytd-display-ad-"]',
    '[layout*="display-ad-"]',
    'a[href^="http://www.youtube.com/cthru?"]',
    'a[href^="https://www.youtube.com/cthru?"]',
    "ytd-action-companion-ad-renderer",
    "ytd-banner-promo-renderer",
    "ytd-compact-promoted-video-renderer",
    "ytd-companion-slot-renderer",
    "ytd-display-ad-renderer",
    "ytd-promoted-sparkles-text-search-renderer",
    "ytd-promoted-sparkles-web-renderer",
    "ytd-search-pyv-renderer",
    "ytd-single-option-survey-renderer",
    "ytd-video-masthead-ad-advertiser-info-renderer",
    "ytd-video-masthead-ad-v3-renderer",
    "YTM-PROMOTED-VIDEO-RENDERER",
];
/**
* Adds CSS to the page
*/
const hideElements = () => {
    const selectors = hiddenCSS;
    if (!selectors) {
        return;
    }
    const rule = selectors.join(", ") + " { display: none!important; }";
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
};
/**
* Calls the "callback" function on every DOM change, but not for the tracked events
* @param {Function} callback callback function
*/
const observeDomChanges = callback => {
    const domMutationObserver = new MutationObserver(mutations => {
        callback(mutations);
    });
    domMutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
};
/**
* This function is supposed to be called on every DOM change
*/
const hideDynamicAds = () => {
    const elements = document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");
    if (elements.length === 0) {
        return;
    }
    elements.forEach(el => {
        if (el.parentNode && el.parentNode.parentNode) {
            const parent = el.parentNode.parentNode;
            if (parent.localName === "ytd-rich-item-renderer") {
                parent.style.display = "none";
            }
        }
    });
};
/**
* This function checks if the video ads are currently running
* and auto-clicks the skip button.
*/
const autoSkipAds = () => {
    // If there's a video that plays the ad at this moment, scroll this ad
    if (document.querySelector(".ad-showing")) {
        const video = document.querySelector("video");
        if (video && video.duration) {
            video.currentTime = video.duration;
            // Skip button should appear after that,
            // now simply click it automatically
            setTimeout(() => {
                const skipBtn = document.querySelector("button.ytp-ad-skip-button");
                if (skipBtn) {
                    skipBtn.click();
                }
            }, 100);
        }
    }
};
/**
* This function overrides a property on the specified object.
*
* @param {object} obj object to look for properties in
* @param {string} propertyName property to override
* @param {*} overrideValue value to set
*/
const overrideObject = (obj, propertyName, overrideValue) => {
    if (!obj) {
        return false;
    }
    let overriden = false;
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key === propertyName) {
            obj[key] = overrideValue;
            overriden = true;
        } else if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
            if (overrideObject(obj[key], propertyName, overrideValue)) {
                overriden = true;
            }
        }
    }
    return overriden;
};
/**
* Overrides JSON.parse and Response.json functions.
* Examines these functions arguments, looks for properties with the specified name there
* and if it exists, changes it's value to what was specified.
*
* @param {string} propertyName name of the property
* @param {*} overrideValue new value for the property
*/
const jsonOverride = (propertyName, overrideValue) => {
    const nativeJSONParse = JSON.parse;
    JSON.parse = (...args) => {
        const obj = nativeJSONParse.apply(this, args);
        // Override it's props and return back to the caller
        overrideObject(obj, propertyName, overrideValue);
        return obj;
    };
    // Override Response.prototype.json
    Response.prototype.json = new Proxy(Response.prototype.json, {
        async apply(...args) {
            // Call the target function, get the original Promise
            const result = await Reflect.apply(...args);
            // Create a new one and override the JSON inside
            overrideObject(result, propertyName, overrideValue);
            return result;
        },
    });
};
// Removes ads metadata from YouTube XHR requests
jsonOverride("adPlacements", []);
jsonOverride("playerAds", []);
// Applies CSS that hides YouTube ad elements
hideElements();
// Some changes should be re-evaluated on every page change
hideDynamicAds();
autoSkipAds();
observeDomChanges(() => {
    hideDynamicAds();
    autoSkipAds();
});`;Xt.app.on("browser-window-created",(t,e)=>{e.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{P.store.plugins?.YoutubeAdblock?.enabled&&(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(Jt)})})});var qe={};Z(qe,{downloadTheme:()=>pr,getThemesDir:()=>fr,themeExists:()=>hr});c();var xe=require("fs"),be=require("path");async function hr(t,e,n){return(0,xe.existsSync)((0,be.join)(e.toString(),`${n.name}.theme.css`))}function fr(t,e,n){return(0,be.join)(e.toString(),`${n.name}.theme.css`)}async function pr(t,e,n){if(!n.content||!n.name)return;let i=(0,be.join)(e.toString(),`${n.name}.theme.css`),s=await(await fetch(`https://discord-themes.com/api/download/${n.id}`)).text();(0,xe.writeFileSync)(i,s)}var Qt={AppleMusicRichPresence:je,ConsoleShortcuts:Fe,FixSpotifyEmbeds:Bt,FixYoutubeEmbeds:Ft,OpenInApp:Ye,Translate:$e,VoiceMessages:Je,XSOverlay:Xe,YoutubeAdblock:qt,ThemeLibrary:qe};var en={};for(let[t,e]of Object.entries(Qt)){let n=Object.entries(e);if(!n.length)continue;let i=en[t]={};for(let[r,s]of n){let o=`VencordPluginNative_${t}_${r}`;Qe.ipcMain.handle(o,s),i[r]=o}}Qe.ipcMain.on("VencordGetPluginIpcMethodMap",t=>{t.returnValue=en});c();ue();var A=require("electron");c();var tn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";var ve=require("fs"),ie=require("fs/promises"),re=require("path");c();var gr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,dr=/^\\@/;function et(t,e={}){return{fileName:t,name:e.name??t.replace(/\.css$/i,""),author:e.author??"Unknown Author",description:e.description??"A Discord Theme.",version:e.version,license:e.license,source:e.source,website:e.website,invite:e.invite}}function nn(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function rn(t,e){if(!t)return et(e);let n=t.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!n)return et(e);let i={},r="",s="";for(let o of n.split(gr))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[r]=s.trim();let a=o.indexOf(" ");r=o.substring(1,a),s=o.substring(a+1)}else s+=" "+o.replace("\\n",`
`).replace(dr,"@");return i[r]=s.trim(),delete i[""],et(e,i)}c();var on=require("electron");function sn(t){t.webContents.setWindowOpenHandler(({url:e})=>{switch(e){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:n}=new URL(e)}catch{return{action:"deny"}}switch(n){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":on.shell.openExternal(e)}return{action:"deny"}})}(0,ve.mkdirSync)(K,{recursive:!0});function tt(t,e){let n=(0,re.normalize)(t),i=(0,re.join)(t,e),r=(0,re.normalize)(i);return r.startsWith(n)?r:null}function vr(){return(0,ie.readFile)(Se,"utf-8").catch(()=>"")}async function mr(){let t=await(0,ie.readdir)(K).catch(()=>[]),e=[];for(let n of t){if(!n.endsWith(".css"))continue;let i=await an(n).then(nn).catch(()=>null);i!=null&&e.push(rn(i,n))}return e}function an(t){t=t.replace(/\?v=\d+$/,"");let e=tt(K,t);return e?(0,ie.readFile)(e,"utf-8"):Promise.reject(`Unsafe path ${t}`)}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(Se));A.ipcMain.handle("VencordOpenExternal",(t,e)=>{try{var{protocol:n}=new URL(e)}catch{throw"Malformed URL"}if(!Lt.includes(n))throw"Disallowed protocol.";A.shell.openExternal(e)});A.ipcMain.handle("VencordGetQuickCss",()=>vr());A.ipcMain.handle("VencordSetQuickCss",(t,e)=>(0,ve.writeFileSync)(Se,e));A.ipcMain.handle("VencordGetThemesDir",()=>K);A.ipcMain.handle("VencordGetThemesList",()=>mr());A.ipcMain.handle("VencordGetThemeData",(t,e)=>an(e));A.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${A.systemPreferences.getAccentColor?.()||""}`}));A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let t="Vencord QuickCSS Editor",e=A.BrowserWindow.getAllWindows().find(i=>i.title===t);if(e&&!e.isDestroyed()){e.focus();return}let n=new A.BrowserWindow({title:t,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,re.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});sn(n),await n.loadURL(`data:text/html;base64,${tn}`)});c();var Dn=require("electron");c();var un=require("module"),Ir=(0,un.createRequire)("/"),De,yr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{De=Ir("worker_threads").Worker}catch{}var Ar=De?function(t,e,n,i,r){var s=!1,o=new De(t+yr,{eval:!0}).on("error",function(a){return r(a,null)}).on("message",function(a){return r(null,a)}).on("exit",function(a){a&&!s&&r(new Error("exited with code "+a),null)});return o.postMessage(n,i),o.terminate=function(){return s=!0,De.prototype.terminate.call(o)},o}:function(t,e,n,i,r){setImmediate(function(){return r(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var s=function(){};return{terminate:s,postMessage:s}},x=Uint8Array,H=Uint16Array,hn=Int32Array,it=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ot=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fn=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pn=function(t,e){for(var n=new H(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new hn(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},gn=pn(it,2),st=gn.b,Cr=gn.r;st[28]=258,Cr[258]=28;var dn=pn(ot,0),vn=dn.b,io=dn.r,ke=new H(32768);for(v=0;v<32768;++v)U=(v&43690)>>1|(v&21845)<<1,U=(U&52428)>>2|(U&13107)<<2,U=(U&61680)>>4|(U&3855)<<4,ke[v]=((U&65280)>>8|(U&255)<<8)>>1;var U,v,oe=function(t,e,n){for(var i=t.length,r=0,s=new H(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new H(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new H(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var d=r<<4|t[r],f=e-t[r],u=o[t[r]-1]++<<f,m=u|(1<<f)-1;u<=m;++u)a[ke[u]>>l]=d}else for(a=new H(i),r=0;r<i;++r)t[r]&&(a[r]=ke[o[t[r]-1]++]>>15-t[r]);return a},me=new x(288);for(v=0;v<144;++v)me[v]=8;var v;for(v=144;v<256;++v)me[v]=9;var v;for(v=256;v<280;++v)me[v]=7;var v;for(v=280;v<288;++v)me[v]=8;var v,mn=new x(32);for(v=0;v<32;++v)mn[v]=5;var v;var In=oe(me,9,1);var yn=oe(mn,5,1),Pe=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},R=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},Re=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},An=function(t){return(t+7)/8|0},Me=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new x(t.subarray(e,n))};var Cn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(t,e,n){var i=new Error(e||Cn[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,T),!n)throw i;return i},wn=function(t,e,n,i){var r=t.length,s=i?i.length:0;if(!r||e.f&&!e.l)return n||new x(0);var o=!n,a=o||e.i!=2,l=e.i;o&&(n=new x(r*3));var d=function(gt){var dt=n.length;if(gt>dt){var vt=new x(Math.max(dt*2,gt));vt.set(n),n=vt}},f=e.f||0,u=e.p||0,m=e.b||0,O=e.l,$=e.d,L=e.m,b=e.n,E=r*8;do{if(!O){f=R(t,u,1);var V=R(t,u+1,3);if(u+=3,V)if(V==1)O=In,$=yn,L=9,b=5;else if(V==2){var ae=R(t,u,31)+257,Ie=R(t,u+10,15)+4,F=ae+R(t,u+5,31)+1;u+=14;for(var D=new x(F),X=new x(19),C=0;C<Ie;++C)X[fn[C]]=R(t,u+C*3,7);u+=Ie*3;for(var ce=Pe(X),Mn=(1<<ce)-1,On=oe(X,ce,1),C=0;C<F;){var lt=On[R(t,u,Mn)];u+=lt&15;var S=lt>>4;if(S<16)D[C++]=S;else{var q=0,ye=0;for(S==16?(ye=3+R(t,u,3),u+=2,q=D[C-1]):S==17?(ye=3+R(t,u,7),u+=3):S==18&&(ye=11+R(t,u,127),u+=7);ye--;)D[C++]=q}}var ut=D.subarray(0,ae),B=D.subarray(ae);L=Pe(ut),b=Pe(B),O=oe(ut,L,1),$=oe(B,b,1)}else T(1);else{var S=An(u)+4,z=t[S-4]|t[S-3]<<8,J=S+z;if(J>r){l&&T(0);break}a&&d(m+z),n.set(t.subarray(S,J),m),e.b=m+=z,e.p=u=J*8,e.f=f;continue}if(u>E){l&&T(0);break}}a&&d(m+131072);for(var _n=(1<<L)-1,Gn=(1<<b)-1,Oe=u;;Oe=u){var q=O[Re(t,u)&_n],Q=q>>4;if(u+=q&15,u>E){l&&T(0);break}if(q||T(2),Q<256)n[m++]=Q;else if(Q==256){Oe=u,O=null;break}else{var ht=Q-254;if(Q>264){var C=Q-257,le=it[C];ht=R(t,u,(1<<le)-1)+st[C],u+=le}var _e=$[Re(t,u)&Gn],Ge=_e>>4;_e||T(3),u+=_e&15;var B=vn[Ge];if(Ge>3){var le=ot[Ge];B+=Re(t,u)&(1<<le)-1,u+=le}if(u>E){l&&T(0);break}a&&d(m+131072);var ft=m+ht;if(m<B){var pt=s-B,Ln=Math.min(B,ft);for(pt+m<0&&T(3);m<Ln;++m)n[m]=i[pt+m]}for(;m<ft;++m)n[m]=n[m-B]}}e.l=O,e.p=Oe,e.b=m,e.f=f,O&&(f=1,e.m=L,e.d=$,e.n=b)}while(!f);return m!=n.length&&o?Me(n,0,m):n.subarray(0,m)};var wr=new x(0);var Sr=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},cn=function(t,e,n){for(var i=t(),r=t.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var a=i[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var d=a.toString();if(a.prototype)if(d.indexOf("[native code]")!=-1){var f=d.indexOf(" ",8)+1;e+=d.slice(f,d.indexOf("(",f))}else{e+=d;for(var u in a.prototype)e+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else e+=d}else n[l]=a}return e},Ee=[],Tr=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},xr=function(t,e,n,i){if(!Ee[n]){for(var r="",s={},o=t.length-1,a=0;a<o;++a)r=cn(t[a],r,s);Ee[n]={c:cn(t[o],r,s),e:s}}var l=Sr({},Ee[n].e);return Ar(Ee[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,l,Tr(l),i)},br=function(){return[x,H,hn,it,ot,fn,st,vn,In,yn,ke,Cn,oe,Pe,R,Re,An,Me,T,wn,at,Sn,Tn]};var Sn=function(t){return postMessage(t,[t.buffer])},Tn=function(t){return t&&{out:t.size&&new x(t.size),dictionary:t.dictionary}},Er=function(t,e,n,i,r,s){var o=xr(n,i,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([t,e],e.consume?[t.buffer]:[]),function(){o.terminate()}};var _=function(t,e){return t[e]|t[e+1]<<8},M=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},nt=function(t,e){return M(t,e)+M(t,e+4)*4294967296};function Dr(t,e,n){return n||(n=e,e={}),typeof n!="function"&&T(7),Er(t,e,[br],function(i){return Sn(at(i.data[0],Tn(i.data[1])))},1,n)}function at(t,e){return wn(t,{i:2},e&&e.out,e&&e.dictionary)}var rt=typeof TextDecoder<"u"&&new TextDecoder,Pr=0;try{rt.decode(wr,{stream:!0}),Pr=1}catch{}var Rr=function(t){for(var e="",n=0;;){var i=t[n++],r=(i>127)+(i>223)+(i>239);if(n+r>t.length)return{s:e,r:Me(t,n-1)};r?r==3?(i=((i&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|t[n++]&63):e+=String.fromCharCode((i&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(i)}};function kr(t,e){if(e){for(var n="",i=0;i<t.length;i+=16384)n+=String.fromCharCode.apply(null,t.subarray(i,i+16384));return n}else{if(rt)return rt.decode(t);var r=Rr(t),s=r.s,n=r.r;return n.length&&T(8),s}}var Mr=function(t,e){return e+30+_(t,e+26)+_(t,e+28)},Or=function(t,e,n){var i=_(t,e+28),r=kr(t.subarray(e+46,e+46+i),!(_(t,e+8)&2048)),s=e+46+i,o=M(t,e+20),a=n&&o==4294967295?_r(t,s):[o,M(t,e+24),M(t,e+42)],l=a[0],d=a[1],f=a[2];return[_(t,e+10),l,d,r,s+_(t,e+30)+_(t,e+32),f]},_r=function(t,e){for(;_(t,e)!=1;e+=4+_(t,e+2));return[nt(t,e+12),nt(t,e+4),nt(t,e+20)]};var ln=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function xn(t,e,n){n||(n=e,e={}),typeof n!="function"&&T(7);var i=[],r=function(){for(var b=0;b<i.length;++b)i[b]()},s={},o=function(b,E){ln(function(){n(b,E)})};ln(function(){o=n});for(var a=t.length-22;M(t,a)!=101010256;--a)if(!a||t.length-a>65558)return o(T(13,0,1),null),r;var l=_(t,a+8);if(l){var d=l,f=M(t,a+16),u=f==4294967295||d==65535;if(u){var m=M(t,a-12);u=M(t,m)==101075792,u&&(d=l=M(t,m+32),f=M(t,m+48))}for(var O=e&&e.filter,$=function(b){var E=Or(t,f,u),V=E[0],S=E[1],z=E[2],J=E[3],ae=E[4],Ie=E[5],F=Mr(t,Ie);f=ae;var D=function(C,ce){C?(r(),o(C,null)):(ce&&(s[J]=ce),--l||o(null,s))};if(!O||O({name:J,size:S,originalSize:z,compression:V}))if(!V)D(null,Me(t,F,F+S));else if(V==8){var X=t.subarray(F,F+S);if(z<524288||S>.8*z)try{D(null,at(X,{out:new x(z)}))}catch(C){D(C,null)}else i.push(Dr(X,{size:z},D))}else D(T(14,"unknown compression type "+V,1),null);else D(null,null)},L=0;L<d;++L)$(L)}else o(null,{});return r}var Pn=require("fs"),G=require("fs/promises"),se=require("path");c();function bn(t){function e(o,a,l,d){let f=0;return f+=o<<0,f+=a<<8,f+=l<<16,f+=d<<24>>>0,f}if(t[0]===80&&t[1]===75&&t[2]===3&&t[3]===4)return t;if(t[0]!==67||t[1]!==114||t[2]!==50||t[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=t[4]===3,i=t[4]===2;if(!i&&!n||t[5]||t[6]||t[7])throw new Error("Unexpected crx format version number.");if(i){let o=e(t[8],t[9],t[10],t[11]),a=e(t[12],t[13],t[14],t[15]),l=16+o+a;return t.subarray(l,t.length)}let s=12+e(t[8],t[9],t[10],t[11]);return t.subarray(s,t.length)}c();var En=jn(require("https"));function ct(t,e={}){return new Promise((n,i)=>{En.default.get(t,e,r=>{let{statusCode:s,statusMessage:o,headers:a}=r;if(s>=400)return void i(`${s}: ${o} - ${t}`);if(s>=300)return void n(ct(a.location,e));let l=[];r.on("error",i),r.on("data",d=>l.push(d)),r.once("end",()=>n(Buffer.concat(l)))})})}var Gr=(0,se.join)(we,"ExtensionCache");async function Lr(t,e){return await(0,G.mkdir)(e,{recursive:!0}),new Promise((n,i)=>{xn(t,(r,s)=>{if(r)return void i(r);Promise.all(Object.keys(s).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,G.mkdir)((0,se.join)(e,o),{recursive:!0});let a=o.split("/"),l=a.pop(),d=a.join("/"),f=(0,se.join)(e,d);d&&await(0,G.mkdir)(f,{recursive:!0}),await(0,G.writeFile)((0,se.join)(f,l),s[o])})).then(()=>n()).catch(o=>{(0,G.rm)(e,{recursive:!0,force:!0}),i(o)})})})}async function Rn(t){let e=(0,se.join)(Gr,`${t}`);try{await(0,G.access)(e,Pn.constants.F_OK)}catch{let i=t==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${t}%26uc&prodversion=${process.versions.chrome}`,r=await ct(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await Lr(bn(r),e).catch(console.error)}Dn.session.defaultSession.loadExtension(e)}Y.app.whenReady().then(()=>{Y.protocol.registerFileProtocol("vencord",({url:r},s)=>{let o=r.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let a=o.slice(8),l=tt(K,a);if(!l){s({statusCode:403});return}s(l.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":s((0,kn.join)(__dirname,o));break;default:s({statusCode:403})}});try{P.store.enableReactDevtools&&Rn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let t=(r,s)=>Object.keys(r).find(o=>o.toLowerCase()===s),e=r=>{let s={};return r.split(";").forEach(o=>{let[a,...l]=o.trim().split(/\s+/g);a&&!Object.prototype.hasOwnProperty.call(s,a)&&(s[a]=l)}),s},n=r=>Object.entries(r).filter(([,s])=>s?.length).map(s=>s.flat().join(" ")).join("; "),i=r=>{let s=t(r,"content-security-policy");if(s){let o=e(r[s][0]);for(let a of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[a]??=[],o[a].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://cdn.jsdelivr.net","https://cdnjs.cloudflare.com"),r[s]=[n(o)]}};Y.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:s},o)=>{if(r&&(s==="mainFrame"&&i(r),s==="stylesheet")){let a=t(r,"content-type");a&&(r[a]=["text/css"])}o({cancel:!1,responseHeaders:r})}),Y.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
