"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_profile_edit-social-account_ts-app_assets_modules_github_settings_p-5bf121"],{17906:(e,t,n)=>{var i=n(39595),o=n(78350);function r(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l}let l=class WaitingFormElement extends HTMLElement{async submitPolitely(){this.submit.disabled=!0;try{this.prerequisites.length>0&&await Promise.all(this.prerequisites.map(e=>this.getPrerequisitePromise(e))),(0,o.k_)(this.form)}finally{this.submit.disabled=!1}}getPrerequisitePromise(e){let t=e.getAttribute("data-waiting-form-method")||"getPromise";return e[t]()}};r([i.aC],l.prototype,"form",void 0),r([i.zV],l.prototype,"prerequisites",void 0),r([i.aC],l.prototype,"submit",void 0),l=r([i.p_],l);let SocialAccountEditorElement=class SocialAccountEditorElement extends HTMLElement{recognizeUrl(){this.recognitionPromise=new Promise(async e=>{this.preprocessUrl();let t=await this.findMatchingSocialAccountIconOption(this.urlField.value);this.setChosenSocialIcon(t),e()})}resetToDefault(){this.urlField.value!==this.urlField.defaultValue&&(0,o.m$)(this.urlField,this.urlField.defaultValue)}waitForRecognition(){return this.recognitionPromise}preprocessUrl(){let e=this.urlField.value.trim();0===e.length||/^https?:\/\//.test(e)||(this.urlField.value=`https://${e}`)}setChosenSocialIcon(e){let t=e.getAttribute("data-provider-key")||"generic";for(let t of this.iconOptions)t.hidden=t!==e;this.iconSpinner.hidden=!0,this.iconField.value=t}async findMatchingSocialAccountIconOption(e){for(let t of this.iconOptions)for(let n of t.querySelectorAll("[data-provider-pattern]"))if(RegExp(n.getAttribute("data-provider-pattern"),"i").test(e))return t;return await this.findNodeInfoIconOption(e)||this.iconGeneric}async findNodeInfoIconOption(e){if(0===this.nodeinfoSoftwareUrl.trim().length)return null;let t=new Map;for(let n of this.iconOptions)for(let i of n.querySelectorAll("[data-try-nodeinfo-pattern]")){let o=RegExp(i.getAttribute("data-try-nodeinfo-pattern"),"i"),r=i.getAttribute("data-nodeinfo-software");e.match(o)&&r&&t.set(r,n)}if(0===t.size)return null;let n=null;try{n=new URL(e,window.location.origin)}catch{return null}this.showSpinner();let i=new URL(this.nodeinfoSoftwareUrl,window.location.origin);i.searchParams.set("host",n.host);let o=await fetch(i,{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}}),r=await o.json(),l=r?.software_name;return l&&t.get(l)||null}showSpinner(){for(let e of this.iconOptions)e.hidden=!0;this.iconSpinner.hidden=!1}constructor(...e){super(...e),this.nodeinfoSoftwareUrl="",this.recognitionPromise=Promise.resolve()}};r([i.aC],SocialAccountEditorElement.prototype,"urlField",void 0),r([i.aC],SocialAccountEditorElement.prototype,"iconField",void 0),r([i.zV],SocialAccountEditorElement.prototype,"iconOptions",void 0),r([i.aC],SocialAccountEditorElement.prototype,"iconGeneric",void 0),r([i.aC],SocialAccountEditorElement.prototype,"iconSpinner",void 0),r([i.CF],SocialAccountEditorElement.prototype,"nodeinfoSoftwareUrl",void 0),SocialAccountEditorElement=r([i.p_],SocialAccountEditorElement)},72747:(e,t,n)=>{(0,n(97797).on)("change",".js-profile-editable-pronouns-select",function(){let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom"),n=t.getAttribute("data-initial-value");"Custom"===e.value?([...e.options].find(e=>e.value===n)?t.value="":t.value=n,t.hidden=!1,t.focus()):(t.value=e.value,t.hidden=!0)})},7572:(e,t,n)=>{n.d(t,{C:()=>l,i:()=>a});var i=n(97156),o=n(97564),r=n(46493);function l(e,t){(0,o.G7)("arianotify_comprehensive_migration")?a(s(e),{...t,element:t?.element??e}):(0,o.G7)("primer_live_region_element")&&t?.element===void 0?(0,r.Cj)(e,{politeness:t?.assertive?"assertive":"polite"}):a(s(e),t)}function a(e,t){let{assertive:n,element:l}=t??{};(0,o.G7)("arianotify_comprehensive_migration")&&"ariaNotify"in Element.prototype?(l||document.body).ariaNotify(e,{interrupt:t?.assertive?"all":"none"}):(0,o.G7)("primer_live_region_element")&&void 0===l?(0,r.iP)(e,{politeness:n?"assertive":"polite"}):function(e,t,n){let o=n??i.XC?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");o&&(o.textContent===e?o.textContent=`${e}\u00A0`:o.textContent=e)}(e,n,l)}function s(e){return(e.getAttribute("aria-label")||e.innerText||"").trim()}},8968:(e,t,n)=>{let i,o;n.d(t,{Gu:()=>s,c8:()=>f,g5:()=>p});var r=n(97156);let l=[],a=0;function s(){return i}function c(){try{return Math.min(Math.max(0,r.Kn?.length||0)||0,9007199254740991)}catch{return 0}}function u(e){i=e;let t=r.fV?.href;l[c()-1+a]={url:t,state:i},l.length=c(),r.cg?.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function d(){return Date.now()}function f(e,t,n){a=0;let i={_id:d(),...e};r.Kn?.pushState(i,t,n),u(i)}function p(e,t,n){let o={...i,...e};r.Kn?.replaceState(o,t,n),u(o)}i=function(){let e={_id:Date.now(),...r.Kn?.state};return u(e),e}(),r.cg?.addEventListener("popstate",function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier;l[c()-1+a-1]?.state?.turbo?.restorationIdentifier===n?a--:a++,u(t)},!0),r.cg?.addEventListener("turbo:visit",e=>{e instanceof CustomEvent&&(o=e.detail.action)}),r.cg?.addEventListener("turbo:load",()=>{"restore"!==o&&(a=0,p(r.Kn?.state,"",""))}),r.cg?.addEventListener("hashchange",function(){if(c()>l.length){let e={_id:d()};r.Kn?.replaceState(e,"",r.fV.href),u(e)}},!0),r.cg?.addEventListener("pageshow",()=>{l=[],a=0})},78350:(e,t,n)=>{n.d(t,{Cy:()=>a,K3:()=>u,Z8:()=>s,k_:()=>r,lK:()=>d,m$:()=>l});var i=n(41695);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function r(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,i.A)(t)),o(e,"submit",!0)&&e.submit()}function l(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function a(e,t){for(let n in t){let i=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=i:o instanceof HTMLTextAreaElement&&(o.value=i)}}function s(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search);for(let[e,i]of c(t))n.append(e,i);return n.toString()}function d(e){return c(new FormData(e)).toString()}},41695:(e,t,n)=>{function i(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let i=e.matches("input[type=submit]")?"Submit":"",o=e.value||i;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{A:()=>i,C:()=>o})}}]);
//# sourceMappingURL=app_assets_modules_github_profile_edit-social-account_ts-app_assets_modules_github_settings_p-5bf121-258eff4b30b2.js.map