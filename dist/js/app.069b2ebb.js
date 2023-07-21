(function(){"use strict";var e={2274:function(e,t,n){var o=n(9242),r=n(3396);const i=(0,r._)("h1",null,[(0,r._)("span",null,"Vue"),(0,r.Uk)("Movies")],-1);function a(e,t){const n=(0,r.up)("router-link"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1})]),(0,r._)("main",null,[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[(0,r.Wm)(a)])),_:1})])],64)}var l=n(89);const u={},c=(0,l.Z)(u,[["render",a]]);var s=c,f=n(2483),d=n(7139);const v={class:"home"},p={class:"feature-card"},h=(0,r._)("input",{type:"submit",value:"Search"},null,-1),m=(0,r._)("img",{src:"https://img.flawlessfiles.com/_r/1366x768/100/58/d0/58d0b99666b285d2c484fec5dfaa23f0/58d0b99666b285d2c484fec5dfaa23f0.jpg",alt:"Bleach Poster",class:"featured-img"},null,-1),g=(0,r._)("div",{class:"detail"},[(0,r._)("h3",null,"Bleach"),(0,r._)("p",null,"High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from Hollows.")],-1),w={key:0,class:"loader"},y={key:1,class:"loading"},b={key:2,class:"error"},_=(0,r._)("br",null,null,-1),k={key:3,class:"movies-list"},j={class:"product-image"},O=["src"],P={class:"type"},M={class:"detail"},D={class:"year"};function H(e,t,n,i,a,l){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",p,[(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,o.iM)((e=>i.searchMovies()),["prevent"])),class:"search-box"},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e)},null,512),[[o.nr,i.search]]),h],32),(0,r.Wm)(u,{to:"/movie/tt0434665",class:"featured-inner"},{default:(0,r.w5)((()=>[m,g])),_:1})]),i.loading?((0,r.wg)(),(0,r.iD)("div",w)):(0,r.kq)("",!0),i.loading?((0,r.wg)(),(0,r.iD)("div",y,"Loading...")):(0,r.kq)("",!0),null!=i.error?((0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("h1",null,[(0,r.Uk)("Sorry, can't get relevant data. "),_,(0,r.Uk)(" "+(0,d.zw)(i.error),1)])])):(0,r.kq)("",!0),i.loading||i.error?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"movie",key:e.imdbID},[(0,r.Wm)(u,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:(0,r.w5)((()=>[(0,r._)("div",j,[(0,r._)("img",{src:e.Poster,alt:"Movie Poster"},null,8,O),(0,r._)("div",P,(0,d.zw)(e.Type),1)]),(0,r._)("div",M,[(0,r._)("p",D,(0,d.zw)(e.Year),1),(0,r._)("h3",null,(0,d.zw)(e.Title),1)])])),_:2},1032,["to"])])))),128))]))])}var S=n(4870),T={api_key:"d9069f6d"},q={setup(){const e=(0,S.iH)(""),t=(0,S.iH)([]);let n=(0,S.iH)(!1);const o=(0,S.iH)(null),i=async()=>{try{if(""!=e.value){n.value=!0;const o=await fetch(`https://www.omdbapi.com/?apikey=${T.api_key}&s=${e.value}`);if(!o.ok)throw n.value=!1,new Error("Request failed");await o.json().then((o=>{n.value=!1,t.value=o.Search,e.value=""}))}}catch(r){o.value=r,console.log(r)}};return(0,r.wF)((async()=>{const r=["avatar","superman","batman","bleach","naruto","avengers"],i=Math.floor(Math.random()*r.length);try{n.value=!0;const o=await fetch(`https://www.omdbapi.com/?apikey=${T.api_key}&s=${r[i]}`);if(!o.ok)throw n.value=!1,new Error("Request failed");await o.json().then((o=>{n.value=!1,t.value=o.Search,e.value=""}))}catch(a){o.value=a,console.log(a)}})),{search:e,movies:t,loading:n,error:o,searchMovies:i}}};const x=(0,l.Z)(q,[["render",H]]);var E=x,z=n(9719),W=n(4336);const A={key:0,class:"movie-details"},C=(0,r._)("div",{class:"loader"},null,-1),R=(0,r._)("div",{class:"loading"},"Loading...",-1),$=[C,R],L={key:1,class:"movie-details"},Y={class:"d-flex align-center justify-center fill-height"};function F(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o.loading?((0,r.wg)(),(0,r.iD)("div",A,$)):(0,r.kq)("",!0),o.loading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("h2",null,(0,d.zw)(o.movie.Title),1),(0,r._)("p",null,(0,d.zw)(o.movie.Year),1),(0,r.Wm)(z.f,{class:"featured-img",width:"400",src:o.movie.Poster,alt:"Movie Poster"},{placeholder:(0,r.w5)((()=>[(0,r._)("div",Y,[(0,r.Wm)(W.L,{color:"grey-lighten-4",indeterminate:""})])])),_:1},8,["src"]),(0,r._)("p",null,(0,d.zw)(o.movie.Plot),1)]))],64)}var N={setup(){const e=(0,S.iH)({}),t=(0,f.yj)(),n=(0,S.iH)(!1),o=(0,S.iH)(null);return(0,r.wF)((async()=>{try{n.value=!0;const o=await fetch(`https://www.omdbapi.com/?apikey=${T.api_key}&i=${t.params.id}&plot=full`);if(!o.ok)throw n.value=!1,new Error("Request failed");await o.json().then((t=>{n.value=!1,e.value=t}))}catch(r){o.value=r,console.log(r)}})),{movie:e,loading:n,error:o}}};const U=(0,l.Z)(N,[["render",F]]);var B=U;const I=[{path:"/",name:"home",component:E},{path:"/movie/:id",name:"movie",component:B}],K=(0,f.p7)({history:(0,f.PO)("/Movie-App/"),routes:I});var Z=K,V=(n(9773),n(4038)),G=(0,V.Rd)();async function J(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}J(),(0,o.ri)(s).use(Z).use(G).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.e44874c4.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="movie-app:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var l,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[r];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(v);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Movie-App/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),l=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],u=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var s=u(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkmovie_app"]=self["webpackChunkmovie_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2274)}));o=n.O(o)})();
//# sourceMappingURL=app.069b2ebb.js.map