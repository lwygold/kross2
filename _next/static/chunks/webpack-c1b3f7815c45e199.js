!function(){"use strict";var e,t,r,n,o,u,c,f,i,a={},d={};function l(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={exports:{}},n=!0;try{a[e](r,r.exports,l),n=!1}finally{n&&delete d[e]}return r.exports}l.m=a,e=[],l.O=function(t,r,n,o){if(r){o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o];return}for(var c=1/0,u=0;u<e.length;u++){for(var r=e[u][0],n=e[u][1],o=e[u][2],f=!0,i=0;i<r.length;i++)c>=o&&Object.keys(l.O).every(function(e){return l.O[e](r[i])})?r.splice(i--,1):(f=!1,o<c&&(c=o));if(f){e.splice(u--,1);var a=n();void 0!==a&&(t=a)}}return t},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l.t=function(e,n){if(1&n&&(e=this(e)),8&n||"object"==typeof e&&e&&(4&n&&e.__esModule||16&n&&"function"==typeof e.then))return e;var o=Object.create(null);l.r(o);var u={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach(function(t){u[t]=function(){return e[t]}});return u.default=function(){return e},l.d(o,u),o},l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce(function(t,r){return l.f[r](e,t),t},[]))},l.u=function(e){},l.miniCssF=function(e){return"static/css/"+({43:"f3a1631c298ed824",81:"862492ba715891f3",130:"1c3ed1b9e93f4279",160:"320844cad918f610",166:"d98c87eeb83afde5",185:"8c50b2ec15ec422e",188:"3ef9d2a89889b19a",196:"d98c87eeb83afde5",198:"d98c87eeb83afde5",231:"d95f6e21bdcac954",250:"b018a3a7562fb094",265:"5da4be8672055f9d",296:"2c6e01ef36137692",451:"a5e6816b2acb9884",544:"2c6e01ef36137692",545:"862492ba715891f3",751:"f4f913af83c8f8eb",791:"3ef9d2a89889b19a",813:"4458c48786374c6f",818:"a5e6816b2acb9884",843:"3ef9d2a89889b19a",931:"575070fb91e0df61",932:"320844cad918f610"})[e]+".css"},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="_N_E:",l.l=function(e,t,r,u){if(n[e]){n[e].push(t);return}if(void 0!==r)for(var c,f,i=document.getElementsByTagName("script"),a=0;a<i.length;a++){var d=i[a];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+r){c=d;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.setAttribute("data-webpack",o+r),c.src=l.tu(e)),n[e]=[t];var s=function(t,r){c.onerror=c.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach(function(e){return e(r)}),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),f&&document.head.appendChild(c)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.tt=function(){return void 0===u&&(u={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(u=trustedTypes.createPolicy("nextjs#bundler",u))),u},l.tu=function(e){return l.tt().createScriptURL(e)},l.p="https://lwygold.github.io/kross2/_next/",c={272:0,813:0,231:0},l.f.j=function(e,t){var r=l.o(c,e)?c[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(/^(231|272|813)$/.test(e))c[e]=0;else{var n=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=n);var o=l.p+l.u(e),u=Error();l.l(o,function(t){if(l.o(c,e)&&(0!==(r=c[e])&&(c[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}},"chunk-"+e,e)}}},l.O.j=function(e){return 0===c[e]},f=function(e,t){var r,n,o=t[0],u=t[1],f=t[2],i=0;if(o.some(function(e){return 0!==c[e]})){for(r in u)l.o(u,r)&&(l.m[r]=u[r]);if(f)var a=f(l)}for(e&&e(t);i<o.length;i++)n=o[i],l.o(c,n)&&c[n]&&c[n][0](),c[n]=0;return l.O(a)},(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(f.bind(null,0)),i.push=f.bind(null,i.push.bind(i))}();