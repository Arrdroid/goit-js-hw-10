!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=l);var o=l("bpxeT"),a=l("2TvXO"),d=l("bOlkj");l("9RsV7"),document.addEventListener("DOMContentLoaded",e(o)(e(a).mark((function n(){var t,r,l;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".breed-select"),r=document.querySelector(".loader"),l=document.querySelector(".error"),r.style.display="block",t.style.display="none",l.style.display="none",e.prev=6,e.next=9,(0,d.fetchBreeds)();case 9:e.sent,r.style.display="none",t.style.display="block",t.addEventListener("change",(function(e){var n=e.target.value;r.style.display="block",(0,d.fetchCatByBreed)(n).finally((function(){r.style.display="none"}))})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),r.style.display="none",l.style.display="block";case 19:case"end":return e.stop()}}),n,null,[[6,15]])}))))}();
//# sourceMappingURL=index.d162d99a.js.map
