!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(6)},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"body {\n  color: orange; }\n\n.carousel_section {\n  position: relative; }\n  .carousel_section ul {\n    display: flex;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    height: 500px; }\n    @media (max-width: 420px) {\n      .carousel_section ul {\n        display: inline-block; } }\n    .carousel_section ul li {\n      display: inline-block;\n      list-style: none;\n      width: 100%;\n      height: inherit; }\n      .carousel_section ul li img {\n        object-fit: contain; }\n        @media (max-width: 420px) {\n          .carousel_section ul li img {\n            width: 100% !important; } }\n  .carousel_section #dots {\n    text-align: center;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    z-index: 999; }\n  .carousel_section button.prev, .carousel_section button.next {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n    color: #FFF;\n    background-color: #333;\n    border-radius: 50%;\n    width: 44px;\n    height: 44px; }\n  .carousel_section button.prev {\n    position: absolute;\n    left: 0;\n    top: 50%; }\n  .carousel_section button.next {\n    position: absolute;\n    right: 0;\n    top: 50%; }\n\nbody {\n  font-family: Verdana, sans-serif;\n  margin: 0; }\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease; }\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,u=0,d=[],f=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function b(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),b(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=l||(l=m(e)),r=j.bind(null,n,s,!1),o=j.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),b(t,e),e}(e),r=O.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=U.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&p(h(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function j(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function U(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function O(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e){var n=[{url:"../../assets/covid.jpg",id:"image1",title:"covid-19"},{url:"../../assets/covid3.jpg",id:"image2",title:"covid-19"},{url:"../../assets/covid1.jpg",id:"image3",title:"covid-19"},{url:"../../assets/covid2.jpg",id:"image4",title:"covid-19"},{url:"../../assets/covid8.jpg",id:"image5",title:"covid-19"}],r=document.getElementsByClassName("lists"),o=0;window.onload=function(){for(var t=document.getElementById("items"),e=document.getElementById("dots"),r=0;r<n.length;r++){var o=document.createElement("li");o.setAttribute("class","lists");var i=document.createElement("img");i.setAttribute("src",n[r].url),i.setAttribute("title",n[r].title),i.style.width=window.screen.width+"px",window.screen.width<421&&(i.style.width=""),o.appendChild(i),t.appendChild(o);var s=document.createElement("span");s.setAttribute("class","dot"),s.setAttribute("id",r),e.appendChild(s),e.children[0].style.background="white"}},currentSlide=t=>{var e=Number(t.target.id);show(e,!0)},show=(t,e=!1)=>{if(!isNaN(o)){var n=document.getElementById("dots");n.children[o].style.background="#bbb",o+=t,o=Math.min(Math.max(o,0),r.length-1),e&&(o=t),o>-1&&(n.children[o].style.background="white"),r[o].scrollIntoView({behavior:"smooth"})}}}]);