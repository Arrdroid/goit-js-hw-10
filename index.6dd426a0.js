function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in l)return l[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var d=o("gUcIm"),r=o("lewhg");document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),l=document.querySelector(".error");t.style.display="block",e.style.display="none",l.style.display="none";try{(0,d.fetchBreeds)();t.style.display="none",e.style.display="block",e.addEventListener("change",(e=>{e.target.value;t.style.display="block"}))}catch(e){t.style.display="none",l.style.display="block"}}));const s=document.querySelector(".breed-select"),a=document.querySelector(".loader");try{(0,d.fetchBreeds)().then((t=>{const l=t.map((e=>`<option value= ${e.id}>${e.name}</option>`)).join("");a.style.display="none",s.style.display="block",s.insertAdjacentHTML("beforeend",l);new(e(r))({select:".breed-select"});s.addEventListener("change",(e=>{e.target.value;a.style.display="block"}))}))}catch(e){a.style.display="none",e.style.display="block"}
//# sourceMappingURL=index.6dd426a0.js.map
