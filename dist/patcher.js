// Vencord e99e89e9
// Standalone: false
// Platform: android
// Updater Disabled: false
"use strict";var Cr=Object.create;var be=Object.defineProperty;var wr=Object.getOwnPropertyDescriptor;var Sr=Object.getOwnPropertyNames;var Tr=Object.getPrototypeOf,xr=Object.prototype.hasOwnProperty;var m=(e,t)=>()=>(e&&(t=e(e=0)),t);var Y=(e,t)=>{for(var n in t)be(e,n,{get:t[n],enumerable:!0})},bt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Sr(t))!xr.call(e,r)&&r!==n&&be(e,r,{get:()=>t[r],enumerable:!(i=wr(t,r))||i.enumerable});return e};var Be=(e,t,n)=>(n=e!=null?Cr(Tr(e)):{},bt(t||!e||!e.__esModule?be(n,"default",{value:e,enumerable:!0}):n,e)),Et=e=>bt(be({},"__esModule",{value:!0}),e);var c=m(()=>{"use strict"});var ve=m(()=>{"use strict";c()});function ye(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var Dt=m(()=>{"use strict";c()});var Rr={};function se(...e){let t={cwd:Ot};return Fe?je("flatpak-spawn",["--host","git",...e],t):je("git",e,t)}async function br(){return(await se("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function Er(){await se("fetch");let e=(await se("branch","--show-current")).stdout.trim();if(!((await se("ls-remote","origin",e)).stdout.length>0))return[];let i=(await se("log",`HEAD...origin/${e}`,"--pretty=format:%an/%h/%s")).stdout.trim();return i?i.split(`
`).map(r=>{let[o,s,...a]=r.split("/");return{hash:s,author:o,message:a.join("/").split(`
`)[0]}}):[]}async function Dr(){return(await se("pull")).stdout.includes("Fast-forward")}async function Pr(){return!(await je(Fe?"flatpak-spawn":"node",Fe?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:Ot})).stderr.includes("Build failed")}var Pt,Ie,Rt,kt,Ot,je,Fe,_t=m(()=>{"use strict";c();ve();Pt=require("child_process"),Ie=require("electron"),Rt=require("path"),kt=require("util");Dt();Ot=(0,Rt.join)(__dirname,".."),je=(0,kt.promisify)(Pt.execFile),Fe=!1;Ie.ipcMain.handle("VencordGetRepo",ye(br));Ie.ipcMain.handle("VencordGetUpdates",ye(Er));Ie.ipcMain.handle("VencordUpdate",ye(Dr));Ie.ipcMain.handle("VencordBuild",ye(Pr))});var Mt=m(()=>{"use strict";c();_t()});function Gt(e,t,n,i){return BigInt(e)|BigInt(t)<<16n|BigInt(n)<<32n|BigInt(i)<<48n}function U(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function A(e,t){return e<<t&kr|e>>zt-t}function h(e){return BigInt.asUintN(64,e)}function Vt(e,t=0){return new We(t).update(e).digest()}var I,S,Lt,Ae,Nt,zt,kr,Or,We,Ut=m(()=>{c();I=11400714785074694791n,S=14029467366897019727n,Lt=1609587929392839161n,Ae=9650029242287828579n,Nt=2870177450012600261n,zt=64n,kr=2n**zt-1n,Or=new TextEncoder;We=class{#t;#n;#r;#i;#o;#s;#a;#e;constructor(t=0){this.reset(t)}reset(t=this.#t){return this.#t=BigInt.asUintN(32,BigInt(t)),this.#n=h(this.#t+I+S),this.#r=h(this.#t+S),this.#i=this.#t,this.#o=h(this.#t-I),this.#s=null,this.#a=0,this.#e=0,this}update(t){typeof t=="string"&&(t=Or.encode(t));let n=0,i=t.length,r=n+i;if(i===0)return this;if(this.#a+=i,this.#e===0&&(this.#s=new Uint8Array(32)),this.#e+i<32)return this.#s.set(t.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#s.set(t.subarray(0,32-this.#e),this.#e);let o=0,s;s=U(this.#s,o),this.#n=h(A(h(this.#n+s*S),31n)*I),o+=8,s=U(this.memory,o),this.#r=h(A(h(this.#r+s*S),31n)*I),o+=8,s=U(this.memory,o),this.#i=h(A(h(this.#i+s*S),31n)*I),o+=8,s=U(this.memory,o),this.#o=h(A(h(this.#o+s*S),31n)*I),n+=32-this.#e,this.#e=0}if(n<=r-32){let o=r-32;do{let s;s=U(t,n),this.#n=h(A(h(this.#n+s*S),31n)*I),n+=8,s=U(t,n),this.#r=h(A(h(this.#r+s*S),31n)*I),n+=8,s=U(t,n),this.#i=h(A(h(this.#i+s*S),31n)*I),n+=8,s=U(t,n),this.#o=h(A(h(this.#o+s*S),31n)*I),n+=8}while(n<=o)}return n<r&&(this.#s.set(t.subarray(n,r),this.#e),this.#e=r-n),this}digest(){let t=this.#s,n=this.#e,i=0,r=0n,o=0n,s=0n;for(this.#a>=32?(r=A(this.#n,1n)+A(this.#r,7n)+A(this.#i,12n)+A(this.#o,18n),r=h(r^A(h(this.#n*S),31n)*I),r=h(r*I+Ae),r=h(r^A(h(this.#r*S),31n)*I),r=h(r*I+Ae),r=h(r^A(h(this.#i*S),31n)*I),r=h(r*I+Ae),r=h(r^A(h(this.#o*S),31n)*I),r=h(r*I+Ae)):r=h(this.#t+Nt),r+=BigInt(this.#a);i<=n-8;)s=U(t,i),s=h(A(h(s*S),31n)*I),r=h(A(r^s,27n)*I+Ae),i+=8;for(i+4<=n&&(s=Gt(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),r=h(A(r^h(s*I),23n)*S+Lt),i+=4);i<n;)s=Gt(t[i++],0,0,0),r=h(A(r^h(s*Nt),11n)*I);return o=h(r>>33n),r=h((r^o)*S),o=h(r>>29n),r=h((r^o)*Lt),o=h(r>>32n),r=h(r^o),r}}});function Mr(e){e=BigInt(e);let t=[],n=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let r=0;r<n;r++)t.unshift(Number(e>>BigInt(8*r)&BigInt(255)));let i=new Uint8Array(t);return _r?i:i.reverse()}function Bt(e){let t=Vt(e,0),n=Mr(t);return[ae[n[0]>>2],ae[(n[0]&3)<<4|n[1]>>4],ae[(n[1]&15)<<2|n[2]>>6],ae[n[2]&63],ae[n[3]>>2],ae[(n[3]&3)<<4|n[3]>>4]].join("")}var ae,_r,jt=m(()=>{"use strict";c();Ut();ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),_r=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})()});function Ft(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(r,o,s)=>{let a=s==="raw"?o:Bt(o),l=typeof e=="string";return!Number.isNaN(Number(a[0]))||a.includes("+")||a.includes("/")?l?`["${a}"]`:String.raw`(?:\["${a}"\])`.replaceAll("+","\\+"):l?`.${a}`:String.raw`(?:\.${a})`}),typeof e=="string")return t;let n=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`),i=new RegExp(n,e.flags);return i.toString=e.toString.bind(e),i}var Zt=m(()=>{"use strict";c();jt()});var Ye={};Y(Ye,{fetchTrackData:()=>Vr});async function Ke(e){let{stdout:t}=await Ht("osascript",e.map(n=>["-e",n]).flat());return t}async function zr({id:e,name:t,artist:n,album:i}){if(e===_?.id){if("data"in _)return _.data;if("failures"in _&&_.failures>=5)return null}try{let r=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");r.searchParams.set("platform","web"),r.searchParams.set("l","en-US"),r.searchParams.set("limit","1"),r.searchParams.set("with","serverBubbles"),r.searchParams.set("types","songs"),r.searchParams.set("term",`${t} ${n} ${i}`),r.searchParams.set("include[songs]","artists");let o=await Gr(),s=await fetch(r,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${o}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(a=>a.json()).then(a=>a.results.song.data[0]);return _={id:e,data:{appleMusicLink:s.attributes.url,songLink:`https://song.link/i/${s.id}`,albumArtwork:s.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:s.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},_.data}catch(r){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",r),_={id:e,failures:(e===_?.id&&"failures"in _?_.failures:0)+1},null}}async function Vr(){try{await Ht("pgrep",["^Music$"])}catch{return null}if(await Ke(['tell application "Music"',"get player state","end tell"]).then(g=>g.trim())!=="playing")return null;let t=await Ke(['tell application "Music"',"get player position","end tell"]).then(g=>Number.parseFloat(g.trim())),n=await Ke(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,r,o,s,a]=n.split(`
`).filter(g=>!!g),l=Number.parseFloat(a),d=await zr({id:i,name:r,artist:s,album:o});return{name:r,album:o,artist:s,playerPosition:t,duration:l,...d}}var Wt,Kt,Ht,_,Lr,Nr,He,Gr,Yt=m(()=>{"use strict";c();Zt();Wt=require("child_process"),Kt=require("util"),Ht=(0,Kt.promisify)(Wt.execFile);_=null,Lr=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,Nr=Ft(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),Gr=async()=>{if(He)return He;let e=await fetch("https://music.apple.com/").then(r=>r.text()),t=new URL(e.match(Lr)[1],"https://music.apple.com/"),i=(await fetch(t).then(r=>r.text())).match(Nr)[1];return He=i,i}});var $e={};Y($e,{initDevtoolsOpenEagerLoad:()=>Ur});function Ur(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var $t=m(()=>{"use strict";c()});var Je,Jt,Ce,qt=m(()=>{"use strict";c();Je=Symbol("SettingsStore.isProxy"),Jt=Symbol("SettingsStore.getRawTarget"),Ce=class{pathListeners=new Map;globalListeners=new Set;proxyContexts=new WeakMap;proxyHandler=(()=>{let t=this;return{get(n,i,r){if(i===Je)return!0;if(i===Jt)return n;let o=Reflect.get(n,i,r),s=t.proxyContexts.get(n);if(s==null)return o;let{root:a,path:l}=s;if(!(i in n)&&t.getDefaultValue!=null&&(o=t.getDefaultValue({target:n,key:i,root:a,path:l})),typeof o=="object"&&o!==null&&!o[Je]){let d=`${l}${l&&"."}${i}`;return t.makeProxy(o,a,d)}return o},set(n,i,r){if(r?.[Je]&&(r=r[Jt]),n[i]===r)return!0;if(!Reflect.set(n,i,r))return!1;let o=t.proxyContexts.get(n);if(o==null)return!0;let{root:s,path:a}=o,l=`${a}${a&&"."}${i}`;return t.notifyListeners(l,r,s),!0},deleteProperty(n,i){if(!Reflect.deleteProperty(n,i))return!1;let r=t.proxyContexts.get(n);if(r==null)return!0;let{root:o,path:s}=r,a=`${s}${s&&"."}${i}`;return t.notifyListeners(a,void 0,o),!0}}})();constructor(t,n={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,n)}makeProxy(t,n=t,i=""){return this.proxyContexts.set(t,{root:n,path:i}),new Proxy(t,this.proxyHandler)}notifyListeners(t,n,i){let r=t.split(".");if(r.length>2&&r[0]==="plugins"){let o=r.slice(0,3),s=o.join("."),a=o.reduce((l,d)=>l[d],i);this.globalListeners.forEach(l=>l(i,s)),this.pathListeners.get(s)?.forEach(l=>l(a))}else this.globalListeners.forEach(o=>o(i,t));this.pathListeners.get(t)?.forEach(o=>o(n))}setData(t,n){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),n){let i=t,r=n.split(".");for(let o of r){if(!i){console.warn(`Settings#setData: Path ${n} does not exist in new data. Not dispatching update`);return}i=i[o]}this.pathListeners.get(n)?.forEach(o=>o(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,n){let i=this.pathListeners.get(t)??new Set;i.add(n),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,n){let i=this.pathListeners.get(t);i&&(i.delete(n),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function qe(e,t){for(let n in t){let i=t[n];typeof i=="object"&&!Array.isArray(i)?(e[n]??={},qe(e[n],i)):e[n]??=i}return e}var Xt=m(()=>{"use strict";c()});var Qt,Z,Ee,ce,W,le,Xe,Qe,en,De,ue=m(()=>{"use strict";c();Qt=require("electron"),Z=require("path"),Ee=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,Z.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,Z.join)(Qt.app.getPath("userData"),"..","Vencord")),ce=(0,Z.join)(Ee,"settings"),W=(0,Z.join)(Ee,"themes"),le=(0,Z.join)(ce,"quickCss.css"),Xe=(0,Z.join)(ce,"settings.json"),Qe=(0,Z.join)(ce,"native-settings.json"),en=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"],De=process.argv.includes("--vanilla")});function nn(e,t){try{return JSON.parse((0,$.readFileSync)(t,"utf-8"))}catch(n){return n?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,n),{}}}var Pe,$,E,Br,rn,tn,J=m(()=>{"use strict";c();ve();qt();Xt();Pe=require("electron"),$=require("fs");ue();(0,$.mkdirSync)(ce,{recursive:!0});E=new Ce(nn("renderer",Xe));E.addGlobalChangeListener(()=>{try{(0,$.writeFileSync)(Xe,JSON.stringify(E.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Pe.ipcMain.handle("VencordGetSettingsDir",()=>ce);Pe.ipcMain.on("VencordGetSettings",e=>e.returnValue=E.plain);Pe.ipcMain.handle("VencordSetSettings",(e,t,n)=>{E.setData(t,n)});Br={plugins:{}},rn=nn("native",Qe);qe(rn,Br);tn=new Ce(rn);tn.addGlobalChangeListener(()=>{try{(0,$.writeFileSync)(Qe,JSON.stringify(tn.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var sn={};var on,an=m(()=>{"use strict";c();J();on=require("electron");on.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let r=E.store.plugins?.FixSpotifyEmbeds;if(!r?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${r.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var ln={};var cn,un=m(()=>{"use strict";c();J();cn=require("electron");cn.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!E.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var et={};Y(et,{resolveRedirect:()=>Fr});function fn(e){return new Promise((t,n)=>{let i=(0,hn.request)(new URL(e),{method:"HEAD"},r=>{t(r.headers.location?fn(r.headers.location):e)});i.on("error",n),i.end()})}async function Fr(e,t){return jr.test(t)?fn(t):t}var hn,jr,pn=m(()=>{"use strict";c();hn=require("https"),jr=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var tt={};Y(tt,{makeDeeplTranslateRequest:()=>Zr});async function Zr(e,t,n,i){let r=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let o=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${n}`},body:i}),s=await o.text();return{status:o.status,data:s}}catch(o){return{status:-1,data:String(o)}}}var gn=m(()=>{"use strict";c()});var nt={};Y(nt,{readRecording:()=>Wr});async function Wr(e,t){t=(0,we.normalize)(t);let n=(0,we.basename)(t),i=(0,we.normalize)(dn.app.getPath("userData")+"/");if(console.log(n,i,t),n!=="recording.ogg"||!t.startsWith(i))return null;try{let r=await(0,mn.readFile)(t);return new Uint8Array(r.buffer)}catch{return null}}var dn,mn,we,vn=m(()=>{"use strict";c();dn=require("electron"),mn=require("fs/promises"),we=require("path")});var rt={};Y(rt,{sendToOverlay:()=>Kr});function Kr(e,t){t.messageType=t.type;let n=JSON.stringify(t);yn??=(0,In.createSocket)("udp4"),yn.send(n,42069,"127.0.0.1")}var In,yn,An=m(()=>{"use strict";c();In=require("dgram")});var Cn,wn=m(()=>{c();Cn=`/* eslint-disable */

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
});`});var Tn={};var Sn,xn=m(()=>{"use strict";c();J();Sn=require("electron");wn();Sn.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{E.store.plugins?.YoutubeAdblock?.enabled&&(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(Cn)})})})});var it={};Y(it,{downloadTheme:()=>$r,getThemesDir:()=>Yr,themeExists:()=>Hr});async function Hr(e,t,n){return(0,Re.existsSync)((0,ke.join)(t.toString(),`${n.name}.theme.css`))}function Yr(e,t,n){return(0,ke.join)(t.toString(),`${n.name}.theme.css`)}async function $r(e,t,n){if(!n.content||!n.name)return;let i=(0,ke.join)(t.toString(),`${n.name}.theme.css`),o=await(await fetch(`https://discord-themes.com/api/download/${n.id}`)).text();(0,Re.writeFileSync)(i,o)}var Re,ke,bn=m(()=>{"use strict";c();Re=require("fs"),ke=require("path")});var En,Dn=m(()=>{c();Yt();$t();an();un();pn();gn();vn();An();xn();bn();En={AppleMusicRichPresence:Ye,ConsoleShortcuts:$e,FixSpotifyEmbeds:sn,FixYoutubeEmbeds:ln,OpenInApp:et,Translate:tt,VoiceMessages:nt,XSOverlay:rt,YoutubeAdblock:Tn,ThemeLibrary:it}});var ot,Pn,Rn=m(()=>{"use strict";c();ve();ot=require("electron");Dn();Pn={};for(let[e,t]of Object.entries(En)){let n=Object.entries(t);if(!n.length)continue;let i=Pn[e]={};for(let[r,o]of n){let s=`VencordPluginNative_${e}_${r}`;ot.ipcMain.handle(s,o),i[r]=s}}ot.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Pn})});function st(e,t=300){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{e(...i)},t)}}var kn=m(()=>{"use strict";c()});var On,_n=m(()=>{c();On="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function at(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Mn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Ln(e,t){if(!e)return at(t);let n=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!n)return at(t);let i={},r="",o="";for(let s of n.split(Jr))if(s.length!==0)if(s.charAt(0)==="@"&&s.charAt(1)!==" "){i[r]=o.trim();let a=s.indexOf(" ");r=s.substring(1,a),o=s.substring(a+1)}else o+=" "+s.replace("\\n",`
`).replace(qr,"@");return i[r]=o.trim(),delete i[""],at(t,i)}var Jr,qr,Nn=m(()=>{"use strict";c();Jr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,qr=/^\\@/});function zn(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:n}=new URL(t)}catch{return{action:"deny"}}switch(n){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Gn.shell.openExternal(t)}return{action:"deny"}})}var Gn,Vn=m(()=>{"use strict";c();Gn=require("electron")});function ct(e,t){let n=(0,he.normalize)(e),i=(0,he.join)(e,t),r=(0,he.normalize)(i);return r.startsWith(n)?r:null}function Un(){return(0,X.readFile)(le,"utf-8").catch(()=>"")}async function Xr(){let e=await(0,X.readdir)(W).catch(()=>[]),t=[];for(let n of e){if(!n.endsWith(".css"))continue;let i=await Bn(n).then(Mn).catch(()=>null);i!=null&&t.push(Ln(i,n))}return t}function Bn(e){e=e.replace(/\?v=\d+$/,"");let t=ct(W,e);return t?(0,X.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function jn(e){let t;(0,X.open)(le,"a+").then(i=>{i.close(),t=(0,q.watch)(le,{persistent:!1},st(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Un())},50))}).catch(()=>{});let n=(0,q.watch)(W,{persistent:!1},st(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),n.close()})}var C,q,X,he,lt=m(()=>{"use strict";c();Mt();Rn();J();kn();ve();C=require("electron");_n();q=require("fs"),X=require("fs/promises"),he=require("path");Nn();ue();Vn();(0,q.mkdirSync)(W,{recursive:!0});C.ipcMain.handle("VencordOpenQuickCss",()=>C.shell.openPath(le));C.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:n}=new URL(t)}catch{throw"Malformed URL"}if(!en.includes(n))throw"Disallowed protocol.";C.shell.openExternal(t)});C.ipcMain.handle("VencordGetQuickCss",()=>Un());C.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,q.writeFileSync)(le,t));C.ipcMain.handle("VencordGetThemesDir",()=>W);C.ipcMain.handle("VencordGetThemesList",()=>Xr());C.ipcMain.handle("VencordGetThemeData",(e,t)=>Bn(t));C.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${C.systemPreferences.getAccentColor?.()||""}`}));C.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=C.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let n=new C.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,he.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});zn(n),await n.loadURL(`data:text/html;base64,${On}`)})});function fr(e,t,n){let i=t;if(t in e)return void n(e[i]);Object.defineProperty(e,t,{set(r){delete e[i],e[i]=r,n(r)},configurable:!0,enumerable:!1})}var pr=m(()=>{"use strict";c()});var Ci={};var O,K,yi,Ii,vt,Ai,gr=m(()=>{"use strict";c();pr();O=Be(require("electron")),K=require("path");lt();J();ue();console.log("[Vencord] Starting up...");yi=require.main.filename,Ii=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",vt=(0,K.join)((0,K.dirname)(yi),"..",Ii),Ai=require((0,K.join)(vt,"package.json"));require.main.filename=(0,K.join)(vt,Ai.main);O.app.setAppPath(vt);if(De)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=E.store;class t extends O.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let s=o.webPreferences.preload;o.webPreferences.preload=(0,K.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,o.webPreferences.backgroundThrottling=!1,e.frameless&&(o.frame=!1),e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),e.disableMinSize&&(o.minWidth=0,o.minHeight=0),!1&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=s,super(o),e.disableMinSize&&(this.setMinimumSize=(l,d)=>{}),jn(this)}else super(o)}}Object.assign(t,O.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let n=require.resolve("electron");delete require.cache[n].exports,require.cache[n].exports={...O.default,BrowserWindow:t},fr(global,"appSettings",r=>{r.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)}),process.env.DATA_DIR=(0,K.join)(O.app.getPath("userData"),"..","Vencord");let i=O.app.commandLine.appendSwitch;O.app.commandLine.appendSwitch=function(...r){if(r[0]==="disable-features"){let o=new Set((r[1]??"").split(","));o.add("WidgetLayering"),o.add("UseEcoQoSForBackgroundProcess"),r[1]+=[...o].join(",")}return i.apply(this,r)},O.app.commandLine.appendSwitch("disable-renderer-backgrounding"),O.app.commandLine.appendSwitch("disable-background-timer-throttling"),O.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var ee=require("electron"),dr=require("path");lt();J();ue();c();var lr=require("electron");c();var Wn=require("module"),Qr=(0,Wn.createRequire)("/"),_e,ei=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{_e=Qr("worker_threads").Worker}catch{}var ti=_e?function(e,t,n,i,r){var o=!1,s=new _e(e+ei,{eval:!0}).on("error",function(a){return r(a,null)}).on("message",function(a){return r(null,a)}).on("exit",function(a){a&&!o&&r(new Error("exited with code "+a),null)});return s.postMessage(n,i),s.terminate=function(){return o=!0,_e.prototype.terminate.call(s)},s}:function(e,t,n,i,r){setImmediate(function(){return r(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},b=Uint8Array,Q=Uint16Array,Kn=Int32Array,ft=new b([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pt=new b([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hn=new b([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yn=function(e,t){for(var n=new Q(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1];for(var r=new Kn(n[30]),i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i;return{b:n,r}},$n=Yn(ft,2),gt=$n.b,ni=$n.r;gt[28]=258,ni[258]=28;var Jn=Yn(pt,0),qn=Jn.b,Fo=Jn.r,Ne=new Q(32768);for(v=0;v<32768;++v)B=(v&43690)>>1|(v&21845)<<1,B=(B&52428)>>2|(B&13107)<<2,B=(B&61680)>>4|(B&3855)<<4,Ne[v]=((B&65280)>>8|(B&255)<<8)>>1;var B,v,fe=function(e,t,n){for(var i=e.length,r=0,o=new Q(t);r<i;++r)e[r]&&++o[e[r]-1];var s=new Q(t);for(r=1;r<t;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(n){a=new Q(1<<t);var l=15-t;for(r=0;r<i;++r)if(e[r])for(var d=r<<4|e[r],g=t-e[r],u=s[e[r]-1]++<<g,y=u|(1<<g)-1;u<=y;++u)a[Ne[u]>>l]=d}else for(a=new Q(i),r=0;r<i;++r)e[r]&&(a[r]=Ne[s[e[r]-1]++]>>15-e[r]);return a},Se=new b(288);for(v=0;v<144;++v)Se[v]=8;var v;for(v=144;v<256;++v)Se[v]=9;var v;for(v=256;v<280;++v)Se[v]=7;var v;for(v=280;v<288;++v)Se[v]=8;var v,Xn=new b(32);for(v=0;v<32;++v)Xn[v]=5;var v;var Qn=fe(Se,9,1);var er=fe(Xn,5,1),Me=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},k=function(e,t,n){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&n},Le=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},tr=function(e){return(e+7)/8|0},Ge=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new b(e.subarray(t,n))};var nr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],x=function(e,t,n){var i=new Error(t||nr[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,x),!n)throw i;return i},rr=function(e,t,n,i){var r=e.length,o=i?i.length:0;if(!r||t.f&&!t.l)return n||new b(0);var s=!n,a=s||t.i!=2,l=t.i;s&&(n=new b(r*3));var d=function(St){var Tt=n.length;if(St>Tt){var xt=new b(Math.max(Tt*2,St));xt.set(n),n=xt}},g=t.f||0,u=t.p||0,y=t.b||0,L=t.l,te=t.d,z=t.m,D=t.n,P=r*8;do{if(!L){g=k(e,u,1);var j=k(e,u+1,3);if(u+=3,j)if(j==1)L=Qn,te=er,z=9,D=5;else if(j==2){var ge=k(e,u,31)+257,Te=k(e,u+10,15)+4,H=ge+k(e,u+5,31)+1;u+=14;for(var R=new b(H),re=new b(19),w=0;w<Te;++w)re[Hn[w]]=k(e,u+w*3,7);u+=Te*3;for(var de=Me(re),mr=(1<<de)-1,vr=fe(re,de,1),w=0;w<H;){var yt=vr[k(e,u,mr)];u+=yt&15;var T=yt>>4;if(T<16)R[w++]=T;else{var ie=0,xe=0;for(T==16?(xe=3+k(e,u,3),u+=2,ie=R[w-1]):T==17?(xe=3+k(e,u,7),u+=3):T==18&&(xe=11+k(e,u,127),u+=7);xe--;)R[w++]=ie}}var It=R.subarray(0,ge),F=R.subarray(ge);z=Me(It),D=Me(F),L=fe(It,z,1),te=fe(F,D,1)}else x(1);else{var T=tr(u)+4,V=e[T-4]|e[T-3]<<8,ne=T+V;if(ne>r){l&&x(0);break}a&&d(y+V),n.set(e.subarray(T,ne),y),t.b=y+=V,t.p=u=ne*8,t.f=g;continue}if(u>P){l&&x(0);break}}a&&d(y+131072);for(var yr=(1<<z)-1,Ir=(1<<D)-1,ze=u;;ze=u){var ie=L[Le(e,u)&yr],oe=ie>>4;if(u+=ie&15,u>P){l&&x(0);break}if(ie||x(2),oe<256)n[y++]=oe;else if(oe==256){ze=u,L=null;break}else{var At=oe-254;if(oe>264){var w=oe-257,me=ft[w];At=k(e,u,(1<<me)-1)+gt[w],u+=me}var Ve=te[Le(e,u)&Ir],Ue=Ve>>4;Ve||x(3),u+=Ve&15;var F=qn[Ue];if(Ue>3){var me=pt[Ue];F+=Le(e,u)&(1<<me)-1,u+=me}if(u>P){l&&x(0);break}a&&d(y+131072);var Ct=y+At;if(y<F){var wt=o-F,Ar=Math.min(F,Ct);for(wt+y<0&&x(3);y<Ar;++y)n[y]=i[wt+y]}for(;y<Ct;++y)n[y]=n[y-F]}}t.l=L,t.p=ze,t.b=y,t.f=g,L&&(g=1,t.m=z,t.d=te,t.n=D)}while(!g);return y!=n.length&&s?Ge(n,0,y):n.subarray(0,y)};var ri=new b(0);var ii=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},Fn=function(e,t,n){for(var i=e(),r=e.toString(),o=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<i.length;++s){var a=i[s],l=o[s];if(typeof a=="function"){t+=";"+l+"=";var d=a.toString();if(a.prototype)if(d.indexOf("[native code]")!=-1){var g=d.indexOf(" ",8)+1;t+=d.slice(g,d.indexOf("(",g))}else{t+=d;for(var u in a.prototype)t+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else t+=d}else n[l]=a}return t},Oe=[],oi=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},si=function(e,t,n,i){if(!Oe[n]){for(var r="",o={},s=e.length-1,a=0;a<s;++a)r=Fn(e[a],r,o);Oe[n]={c:Fn(e[s],r,o),e:o}}var l=ii({},Oe[n].e);return ti(Oe[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",n,l,oi(l),i)},ai=function(){return[b,Q,Kn,ft,pt,Hn,gt,qn,Qn,er,Ne,nr,fe,Me,k,Le,tr,Ge,x,rr,dt,ir,or]};var ir=function(e){return postMessage(e,[e.buffer])},or=function(e){return e&&{out:e.size&&new b(e.size),dictionary:e.dictionary}},ci=function(e,t,n,i,r,o){var s=si(n,i,r,function(a,l){s.terminate(),o(a,l)});return s.postMessage([e,t],t.consume?[e.buffer]:[]),function(){s.terminate()}};var N=function(e,t){return e[t]|e[t+1]<<8},M=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},ut=function(e,t){return M(e,t)+M(e,t+4)*4294967296};function li(e,t,n){return n||(n=t,t={}),typeof n!="function"&&x(7),ci(e,t,[ai],function(i){return ir(dt(i.data[0],or(i.data[1])))},1,n)}function dt(e,t){return rr(e,{i:2},t&&t.out,t&&t.dictionary)}var ht=typeof TextDecoder<"u"&&new TextDecoder,ui=0;try{ht.decode(ri,{stream:!0}),ui=1}catch{}var hi=function(e){for(var t="",n=0;;){var i=e[n++],r=(i>127)+(i>223)+(i>239);if(n+r>e.length)return{s:t,r:Ge(e,n-1)};r?r==3?(i=((i&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?t+=String.fromCharCode((i&31)<<6|e[n++]&63):t+=String.fromCharCode((i&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(i)}};function fi(e,t){if(t){for(var n="",i=0;i<e.length;i+=16384)n+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return n}else{if(ht)return ht.decode(e);var r=hi(e),o=r.s,n=r.r;return n.length&&x(8),o}}var pi=function(e,t){return t+30+N(e,t+26)+N(e,t+28)},gi=function(e,t,n){var i=N(e,t+28),r=fi(e.subarray(t+46,t+46+i),!(N(e,t+8)&2048)),o=t+46+i,s=M(e,t+20),a=n&&s==4294967295?di(e,o):[s,M(e,t+24),M(e,t+42)],l=a[0],d=a[1],g=a[2];return[N(e,t+10),l,d,r,o+N(e,t+30)+N(e,t+32),g]},di=function(e,t){for(;N(e,t)!=1;t+=4+N(e,t+2));return[ut(e,t+12),ut(e,t+4),ut(e,t+20)]};var Zn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function sr(e,t,n){n||(n=t,t={}),typeof n!="function"&&x(7);var i=[],r=function(){for(var D=0;D<i.length;++D)i[D]()},o={},s=function(D,P){Zn(function(){n(D,P)})};Zn(function(){s=n});for(var a=e.length-22;M(e,a)!=101010256;--a)if(!a||e.length-a>65558)return s(x(13,0,1),null),r;var l=N(e,a+8);if(l){var d=l,g=M(e,a+16),u=g==4294967295||d==65535;if(u){var y=M(e,a-12);u=M(e,y)==101075792,u&&(d=l=M(e,y+32),g=M(e,y+48))}for(var L=t&&t.filter,te=function(D){var P=gi(e,g,u),j=P[0],T=P[1],V=P[2],ne=P[3],ge=P[4],Te=P[5],H=pi(e,Te);g=ge;var R=function(w,de){w?(r(),s(w,null)):(de&&(o[ne]=de),--l||s(null,o))};if(!L||L({name:ne,size:T,originalSize:V,compression:j}))if(!j)R(null,Ge(e,H,H+T));else if(j==8){var re=e.subarray(H,H+T);if(V<524288||T>.8*V)try{R(null,dt(re,{out:new b(V)}))}catch(w){R(w,null)}else i.push(li(re,{size:V},R))}else R(x(14,"unknown compression type "+j,1),null);else R(null,null)},z=0;z<d;++z)te(z)}else s(null,{});return r}var ur=require("fs"),G=require("fs/promises"),pe=require("path");ue();c();function ar(e){function t(s,a,l,d){let g=0;return g+=s<<0,g+=a<<8,g+=l<<16,g+=d<<24>>>0,g}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,i=e[4]===2;if(!i&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let s=t(e[8],e[9],e[10],e[11]),a=t(e[12],e[13],e[14],e[15]),l=16+s+a;return e.subarray(l,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}c();var cr=Be(require("https"));function mt(e,t={}){return new Promise((n,i)=>{cr.default.get(e,t,r=>{let{statusCode:o,statusMessage:s,headers:a}=r;if(o>=400)return void i(`${o}: ${s} - ${e}`);if(o>=300)return void n(mt(a.location,t));let l=[];r.on("error",i),r.on("data",d=>l.push(d)),r.once("end",()=>n(Buffer.concat(l)))})})}var mi=(0,pe.join)(Ee,"ExtensionCache");async function vi(e,t){return await(0,G.mkdir)(t,{recursive:!0}),new Promise((n,i)=>{sr(e,(r,o)=>{if(r)return void i(r);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,G.mkdir)((0,pe.join)(t,s),{recursive:!0});let a=s.split("/"),l=a.pop(),d=a.join("/"),g=(0,pe.join)(t,d);d&&await(0,G.mkdir)(g,{recursive:!0}),await(0,G.writeFile)((0,pe.join)(g,l),o[s])})).then(()=>n()).catch(s=>{(0,G.rm)(t,{recursive:!0,force:!0}),i(s)})})})}async function hr(e){let t=(0,pe.join)(mi,`${e}`);try{await(0,G.access)(t,ur.constants.F_OK)}catch{let i=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=${process.versions.chrome}`,r=await mt(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await vi(ar(r),t).catch(console.error)}lr.session.defaultSession.loadExtension(t)}De||ee.app.whenReady().then(()=>{ee.protocol.registerFileProtocol("vencord",({url:r},o)=>{let s=r.slice(10);if(s.endsWith("/")&&(s=s.slice(0,-1)),s.startsWith("/themes/")){let a=s.slice(8),l=ct(W,a);if(!l){o({statusCode:403});return}o(l.replace(/\?v=\d+$/,""));return}switch(s){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,dr.join)(__dirname,s));break;default:o({statusCode:403})}});try{E.store.enableReactDevtools&&hr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let e=(r,o)=>Object.keys(r).find(s=>s.toLowerCase()===o),t=r=>{let o={};return r.split(";").forEach(s=>{let[a,...l]=s.trim().split(/\s+/g);a&&!Object.prototype.hasOwnProperty.call(o,a)&&(o[a]=l)}),o},n=r=>Object.entries(r).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),i=r=>{let o=e(r,"content-security-policy");if(o){let s=t(r[o][0]);for(let a of["style-src","connect-src","img-src","font-src","media-src","worker-src"])s[a]??=[],s[a].push("*","blob:","data:","vencord:","'unsafe-inline'");s["script-src"]??=[],s["script-src"].push("'unsafe-eval'","https://cdn.jsdelivr.net","https://cdnjs.cloudflare.com"),r[o]=[n(s)]}};ee.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:o},s)=>{if(r&&(o==="mainFrame"&&i(r),o==="stylesheet")){let a=e(r,"content-type");a&&(r[a]=["text/css"])}s({cancel:!1,responseHeaders:r})}),ee.session.defaultSession.webRequest.onHeadersReceived=()=>{}});gr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
