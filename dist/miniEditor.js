!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MiniEditor=e():n.MiniEditor=e()}(this,function(){return function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){"use strict";e.e=function(n){return document.querySelector(n)},e.f=function(n){return document.querySelectorAll(n)},e.c=function(n){return document.getElementById(n)},e.d=function(n,e){n.appendChild(e)},e.b=function(n){return document.createElement(n)},e.a=function(){return document.createDocumentFragment()},e.g=function(n,e,t){document.execCommand(n,e,t)}},function(n,e,t){"use strict";e.d=function(n){return"[object Array]"===Object.prototype.toString.call(n)},e.a=function(n){console.error(n)},e.c=function(){return!!window.getSelection().toString().trim().length},e.b=function(n,e){return(" "+n.className+" ").indexOf(" "+e+" ")>-1},e.e=function(){var n=o.e(".m-n-dropdown-List");document.body.removeChild(n)};var o=t(0)},function(n,e,t){"use strict";e.a=function(n,e){var t=o.b("button");return t.onclick=function(){if(e.isExtenal&&!e.callback)console.error("外置组件需要传入callback");else{if("dropDown"===e.openType&&e.dropDownList){var n=t.getBoundingClientRect(),o=t.offsetHeight;r.a(e,n,o)}e.callback(t)}},t.classList.add("m-n-toolbar-item"),t.innerHTML='<i class="m-n-icon"></i>',t.getElementsByClassName("m-n-icon")[0].classList.add(""+e.iconName),t};var o=t(0),r=t(10)},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],s=e.base?a[0]+e.base:a[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:b(f,e),references:1}),o.push(u)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach(function(n){e.setAttribute(n,o[n])}),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}var p=null,m=0;function b(n,e){var t,o,r;if(e.singleton){var a=m++;t=p||(p=l(e)),o=f.bind(null,t,a,!1),r=f.bind(null,t,a,!0)}else t=l(e),o=function(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<n.length;i++){var c=n[i];null!=c[0]&&o[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(0),r=t(6),a=t(13),i=t(14);t(15),t(17);e.default=function(n,e){e=e||{},this.options=e,this.el=n,i.a(this,e);var t=o.a(),c=r.a(this,e),s=a.a(this),l=o.b("div");l.appendChild(c),this.toolbarDom=c,this.savedRange=null,l.appendChild(s),this.container=s,l.style.width=e.width?e.width+"px":"300px",l.classList.add("m-n-editor"),t.appendChild(l),o.d(o.c(n),t)}},function(n,e,t){"use strict";e.a=function(n,e){var t=o.b("div");return t.classList.add("m-n-toolbar"),r.a(n,e.internalToolbar,e.expandToolbar).map(function(n){t.appendChild(n)}),t};var o=t(0),r=t(7)},function(n,e,t){"use strict";e.a=function(n,e,t){var c=[],s=[];if(e)r.d(e)?e.map(function(e){o.a[e]&&c.push(o.a[e](n))}):r.a("内置组件需要传入数组");else for(var l in o.a)c.push(o.a[l](n));t&&(r.d(t)?t.map(function(e){s.push(a.a(n,e))}):r.a("外置组件需要传入数组"));return i(c,s)};var o=t(8),r=t(1),a=t(2),i=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;var o=Array(n),r=0;for(e=0;e<t;e++)for(var a=arguments[e],i=0,c=a.length;i<c;i++,r++)o[r]=a[i];return o}},function(n,e,t){"use strict";var o=t(9),r=t(11),a=t(12);e.a={bold:o.a,color:r.a,header:a.a}},function(n,e,t){"use strict";var o=t(2),r=t(1),a=t(0);e.a=function(n){var e={name:"bold",openType:"click",iconName:"icon-bold",callback:function(n){r.c()&&(r.b(n,"m-n-toolbar-active")?n.classList.remove("m-n-toolbar-active"):n.classList.add("m-n-toolbar-active"),a.g("Bold"))}};return o.a(n,e)}},function(n,e,t){"use strict";e.a=function(n,e,t){var a=r.b("div");n.dropDownList&&(n.dropDownList.map(function(n,e){var t=r.b("button");t.classList.add("m-n-dropdown-item"),t.setAttribute("index",""+e),t.innerHTML=n.label,a.appendChild(t)}),a.onclick=function(e){var t=e.target,r=t.getAttribute("index");n.dropDownCallback&&(n.dropDownCallback(t,n.dropDownList[r]),o.e())},a.style.left=e.left+"px",a.style.top=e.top+t+"px",a.classList.add("m-n-dropdown-List"),a.style.display="block",r.e("body").appendChild(a))};var o=t(1),r=t(0)},function(n,e,t){"use strict";var o=t(2),r=t(1),a=t(0);e.a=function(n){var e={name:"color",openType:"dropDown",iconName:"icon-ColorLens",dropDownList:[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}],dropDownCallback:function(e,t){if(n.savedRange){var o=n.savedRange.toString(),r='<font color="'+t.value+'">'+o+"</font>";a.g("insertHTML",!1,r)}},callback:function(n){r.b(n,"m-n-toolbar-active")?n.classList.remove("m-n-toolbar-active"):n.classList.add("m-n-toolbar-active")}};return o.a(n,e)}},function(n,e,t){"use strict";var o=t(2),r=t(1),a=t(0);e.a=function(n){var e={name:"color",openType:"dropDown",iconName:"icon-header",dropDownList:[{label:"H1",value:"red"},{label:"H2",value:"green"},{label:"正文",value:"blue"}],dropDownCallback:function(e,t){if(n.savedRange){var o=n.savedRange.toString(),r="";switch(t.label){case"H1":r="<h1>"+o+"</h1>";break;case"H2":r="<h2>"+o+"</h2>";break;case"正文":r="<span>"+o+"</span>"}a.g("insertHTML",!1,r)}},callback:function(n){r.b(n,"m-n-toolbar-active")?n.classList.remove("m-n-toolbar-active"):n.classList.add("m-n-toolbar-active")}};return o.a(n,e)}},function(n,e,t){"use strict";e.a=function(n){var e=r.b("div");return e.innerHTML="这里是可编辑区域",e.setAttribute("contenteditable","true"),e.classList.add("m-n-container"),e.onblur=function(){o.c()&&(n.savedRange=window.getSelection().getRangeAt(0))},e.onkeyup=function(){o.c()&&(n.savedRange=window.getSelection().getRangeAt(0))},e.click=function(){o.c()&&(n.savedRange=window.getSelection().getRangeAt(0))},e};var o=t(1),r=t(0)},function(n,e,t){"use strict";function o(){return this.container.innerHTML}function r(){return this.savedRange}e.a=function(n,e){n.getHtml=o,n.getSavedRange=r}},function(n,e,t){"use strict";var o=t(3),r=t.n(o),a=t(16),i=t.n(a),c={insert:"head",singleton:!1};r.a(i.a,c),i.a.locals},function(n,e,t){(n.exports=t(4)(!1)).push([n.i,".m-n-container {\n  padding: 10px;\n  min-height: 200px;\n}\n.m-n-container:focus {\n  outline: none;\n}\n.m-n-dropdown-List {\n  display: none;\n  border: #eee;\n  position: fixed;\n  border: 1px solid #8c9bcc;\n}\n.m-n-dropdown-List .m-n-dropdown-item {\n  background: #fff;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: 22px;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid #8c9bcc;\n  display: block;\n  cursor: pointer;\n}\n.m-n-dropdown-List .m-n-dropdown-item:hover {\n  background: #eee;\n  cursor: pointer;\n}\n.m-n-dropdown-List .m-n-dropdown-item:last-child {\n  border: none;\n}\n.m-n-dropdown-List .m-n-dropdown-item:focus {\n  outline: none;\n}\n.m-n-toolbar {\n  border-bottom: 1px solid #cbe1ff;\n  display: flex;\n}\n.m-n-toolbar .m-n-toolbar-item {\n  cursor: pointer;\n  border: none;\n  background: #fff;\n  padding: 0;\n}\n.m-n-toolbar .m-n-toolbar-item:hover {\n  background: #eee;\n}\n.m-n-toolbar .m-n-toolbar-item:focus {\n  outline: none;\n}\n.m-n-toolbar .m-n-toolbar-item i {\n  display: inline-block;\n  padding: 10px;\n}\n.m-n-toolbar .m-n-toolbar-active {\n  color: #1296db;\n}\n.m-n-editor {\n  border: 1px solid #8c9bcc;\n}\n",""])},function(n,e,t){"use strict";var o=t(3),r=t.n(o),a=t(18),i=t.n(a),c={insert:"head",singleton:!1};r.a(i.a,c),i.a.locals},function(n,e,t){e=n.exports=t(4)(!1);var o=t(19),r=t(20),a=t(21),i=t(22),c=t(23),s=o(r),l=o(r,{hash:"#iefix"}),u=o(a),d=o(i),f=o(c,{hash:"#iconfont"});e.push([n.i,'@font-face {font-family: "iconfont";\n  src: url('+s+"); /* IE9 */\n  src: url("+l+") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAR4AAsAAAAACPwAAAQqAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqFPIRtATYCJAMQCwoABCAFhG0HQxvaBxHVm7fJfhyUG88UbWmw5FvPOFGM+PnivoMAdebJkvN+RJi4gDB1qlMghjn/N6e/Y9L39nzSVnYWUCEE/iV8ORgwqqkJtwkzYZMA+J/L6d01NbD5Lctljq1RL8BoAgW0ty9KcJAk5D3Asxp0TNBlCMCBEEgCUdU/OgEGCnWWAMQgzzHAiOhRBRSBobJkbFSIWegY2mTtGsBM5/viK8WcARq6RL2qsU+fDWUfaj+mSNNmdpImZndWgN8GEkgCUCD6Zdp7IL14EkgcPtmKHABDe0eDD/YfAj6m2GwkXIrcoL88EEg0EBZUuRMRshISPtgbLAj4EMCChI8pejTEqekG4AD8AEQyqIO6qRJYXA37cfbqIlffkTsfigcPphoszg8fTrvDaP3+++a9LIf2dZL72fBV90ZdPZhyz2HKEmHduvGg70YhrD4LHJymeM0DM3r+/vXrMRc5FGMbF0jr0gVLl1gX+Cw4MGWD+Fscp97XkYeexZjr1Cu81tHaZL6j81Rfq2h7GLPgACNm0X3yzm1jm2f0/TlhPTn1uHmsu0tsQ2wl7TwDrnhalk2m6dTf/Tavvj4LAgKWiLUPq7NZHTaVphNZ9v+1O7QlVRt0P3OQVnZgmhx3sDYIair4dj/9zqsbpA9c1WfF6JWsPFVYp+tGBUUtuf69ZCa+2t/5o4tHmFWfF1j1qkHv3jnGp7vudK9p9LRi11AP10cugf1lRnfp5/zQxd2tx/uT4KrwW1r75Z6RPtc9xrsHNORXOgf2k4F+XaWff4ire+mwP+MLGzjgZDeseabLsGonqG4onP/6WpfrJ5festJ7SD+XT2WWzNLGFdcT0Js4PnJVmnsLeXhNrMrM1ZyH2eWRl2xGcziG8xercGB92j7165/6Vft+/QKuIPmFN6D32jVLYtzyT46pMWfbOVYtdHtF1GUXd/Yb0R4atFmnTj2YEo3j4oLZp89BAoDtlCzTuA7tsnwlc5O35FaZ+OpM4mS73JauzUX/jfpL1/J0z4gd5LOdUjQT3H9BZcGLIqhYp74i1aCUIjb4v4BiHG9CVAMcNDfY0O0BL7pQeleOgsCICHjQsCMYJAZRqCIkgY4jWWDBoBQcSITa7Y54wggkQtkDCTAeQOAGO0HDhZMgcYPrqCI8Bx0f+A4W3HISHGgjPA90JCaHe3WVAg2FNjE3iWexmOomVeeWjqGzGhoiLHKoUyikFyIFLR9PDWCMooslcs0pKkUJFSwi/XAdhiEjiWA+WkpzlUpKuk6znqRZLII6KgUaCm1ibhLPYjG1mqu6xOfH0FkNDVFQ88M+hUJ6/ZOClq+ADsjjSjWnMlyuOUWlKDONChaRfrRiqMUZSbLH+WgpzW0QTUo6NaJV5drwyugM9wAOqA9QoixXnqvIVYLqwUK7qh8aNoraShYyMYqxBAAAAA==') format('woff2'),\n  url("+u+") format('woff'),\n  url("+d+") format('truetype'), \n  url("+f+') format(\'svg\'); /* iOS 4.1- */\n}\n[class^=\'m-n-icon\'],\n[class^=\'m-n-icon\']\n.iconfont {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-bold:before {\n  content: "\\e609";\n}\n\n.icon-header:before {\n  content: "\\e72e";\n}\n\n.icon-ColorLens:before {\n  content: "\\e61a";\n}\n\n',""])},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.p+"ee02b1dc94a8806e69c099abc5fe20f5.eot"},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.p+"7ba6bd29a7a9787d9ed4eb860451b987.woff"},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.p+"df6a7ccd5102322dcb4951383523eecc.ttf"},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.p+"51a9edeaaa4f30656c32a573d7324ad7.svg"}]).default});