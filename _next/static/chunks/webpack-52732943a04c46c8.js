!function(){"use strict";var e,t,r,n,o,u,a,c,f,i={},d={};function l(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={exports:{}},n=!0;try{i[e](r,r.exports,l),n=!1}finally{n&&delete d[e]}return r.exports}l.m=i,e=[],l.O=function(t,r,n,o){if(r){o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o];return}for(var a=1/0,u=0;u<e.length;u++){for(var r=e[u][0],n=e[u][1],o=e[u][2],c=!0,f=0;f<r.length;f++)a>=o&&Object.keys(l.O).every(function(e){return l.O[e](r[f])})?r.splice(f--,1):(c=!1,o<a&&(a=o));if(c){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l.t=function(e,n){if(1&n&&(e=this(e)),8&n||"object"==typeof e&&e&&(4&n&&e.__esModule||16&n&&"function"==typeof e.then))return e;var o=Object.create(null);l.r(o);var u={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach(function(t){u[t]=function(){return e[t]}});return u.default=function(){return e},l.d(o,u),o},l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce(function(t,r){return l.f[r](e,t),t},[]))},l.u=function(e){},l.miniCssF=function(e){return"static/css/"+({43:"f3a1631c298ed824",81:"862492ba715891f3",130:"1c3ed1b9e93f4279",160:"320844cad918f610",166:"d98c87eeb83afde5",185:"345f50d9adb76b45",188:"3ef9d2a89889b19a",196:"d98c87eeb83afde5",198:"d98c87eeb83afde5",231:"f352f613fd9eb1da",250:"b018a3a7562fb094",265:"5da4be8672055f9d",296:"2c6e01ef36137692",451:"a5e6816b2acb9884",544:"2c6e01ef36137692",545:"862492ba715891f3",751:"f4f913af83c8f8eb",791:"3ef9d2a89889b19a",813:"4458c48786374c6f",818:"a5e6816b2acb9884",843:"3ef9d2a89889b19a",931:"17a7cf011845c04c",932:"320844cad918f610"})[e]+".css"},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="_N_E:",l.l=function(e,t,r,u){if(n[e]){n[e].push(t);return}if(void 0!==r)for(var a,c,f=document.getElementsByTagName("script"),i=0;i<f.length;i++){var d=f[i];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",o+r),a.src=l.tu(e)),n[e]=[t];var s=function(t,r){a.onerror=a.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(function(e){return e(r)}),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.tt=function(){return void 0===u&&(u={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(u=trustedTypes.createPolicy("nextjs#bundler",u))),u},l.tu=function(e){return l.tt().createScriptURL(e)},l.p="https://lwygold.github.io/kross2/_next/",a={272:0,813:0,231:0},l.f.j=function(e,t){var r=l.o(a,e)?a[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(/^(231|272|813)$/.test(e))a[e]=0;else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o=l.p+l.u(e),u=Error();l.l(o,function(t){if(l.o(a,e)&&(0!==(r=a[e])&&(a[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}},"chunk-"+e,e)}}},l.O.j=function(e){return 0===a[e]},c=function(e,t){var r,n,o=t[0],u=t[1],c=t[2],f=0;if(o.some(function(e){return 0!==a[e]})){for(r in u)l.o(u,r)&&(l.m[r]=u[r]);if(c)var i=c(l)}for(e&&e(t);f<o.length;f++)n=o[f],l.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return l.O(i)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}();