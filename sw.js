if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let l={};const o=e=>s(e,a),d={module:{uri:a},exports:l,require:o};i[a]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/android-chrome-192x192.27625990.png",revision:null},{url:"assets/android-chrome-512x512.749a4ecf.png",revision:null},{url:"assets/favicon.0dea14b4.ico",revision:null},{url:"assets/index.78a59145.js",revision:null},{url:"assets/index.9b7cd237.css",revision:null},{url:"assets/ListView.16d57f67.css",revision:null},{url:"assets/ListView.c7c8991d.js",revision:null},{url:"assets/materialdesignicons-webfont.48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont.861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont.bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont.e52d60f6.woff2",revision:null},{url:"assets/SettingsView.0e97f3fa.js",revision:null},{url:"assets/SettingsView.8b736ac7.css",revision:null},{url:"assets/VTable.41a8559d.css",revision:null},{url:"assets/VTable.c264549e.js",revision:null},{url:"assets/webfontloader.b777d690.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"assets/寶可夢中心手機鈴聲.f0e2aebf.mp4",revision:null},{url:"favicon.ico",revision:"25e23892d1b98272cdeb2d655319c3eb"},{url:"img/android-chrome-192x192.png",revision:"6992a028c78551fb46d5055476fbe029"},{url:"img/android-chrome-512x512.png",revision:"9b2fe94d16714dd3748b134698ed4e92"},{url:"img/apple-touch-icon.png",revision:"1199fc8fdb96358cfa10f44aa2d810b1"},{url:"img/favicon-16x16.png",revision:"385a02a41dbe44bba25b94506f271f10"},{url:"img/favicon-32x32.png",revision:"d6d48dd86f8d851f3a8b2b85133a4c5c"},{url:"img/favicon.ico",revision:"74da7a2f939cf0f0105b97079e533246"},{url:"img/ipad_splash.png",revision:"976406b1f3d1754b3886adb87055ae6e"},{url:"img/ipadpro1_splash.png",revision:"60c1f91969226549e863c196d7337033"},{url:"img/ipadpro2_splash.png",revision:"cc34b86ed04d92bacb0766347d596e9d"},{url:"img/ipadpro3_splash.png",revision:"1321035baaf31e912cfd3e590ad7400e"},{url:"img/iphone5_splash.png",revision:"0a8eb9fd181c90f9a05068943f7ee39d"},{url:"img/iphone6_splash.png",revision:"c71c884d6051d09fb16e76e95ae2658e"},{url:"img/iphoneplus_splash.png",revision:"e3481d7f909c804ca473123a91918fe1"},{url:"img/iphonex_splash.png",revision:"43fd31b815f837d81b73e0897ae8fe32"},{url:"img/iphonexr_splash.png",revision:"09b6abe3844784561234377f022c2122"},{url:"img/iphonexsmax_splash.png",revision:"34c84da1fdcbc0aca0ea13c9414f69d3"},{url:"img/mstile-150x150.png",revision:"74c940814783f8556153d82e4498c934"},{url:"img/safari-pinned-tab.svg",revision:"2d9a1dfef002e14577dc2d53b3a6e22b"},{url:"index.html",revision:"beeb5895f7a3126c26888818b8c55637"},{url:"./img/android-chrome-192x192.png",revision:"6992a028c78551fb46d5055476fbe029"},{url:"./img/android-chrome-512x512.png",revision:"9b2fe94d16714dd3748b134698ed4e92"},{url:"./img/favicon-16x16.png",revision:"385a02a41dbe44bba25b94506f271f10"},{url:"./img/favicon-32x32.png",revision:"d6d48dd86f8d851f3a8b2b85133a4c5c"},{url:"manifest.webmanifest",revision:"ba321769979e16cc7e81247d2aacb4d6"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));