(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],p=0,u=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"07a6":function(t,e,a){t.exports=a.p+"img/login.8cc5a43c.png"},1:function(t,e){},"39fa":function(t,e,a){"use strict";a("5a22")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{staticStyle:{"z-index":"3"},attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[s("v-img",{staticClass:"shrink mt-1",attrs:{alt:"Vuetify Name",contain:"","min-width":"200",src:a("9b19"),width:"350"}})],1)]),s("v-main",[s("TestComponent")],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",[s("v-tabs",{attrs:{"background-color":"primary",centered:"",dark:"","icons-and-text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tabs-slider"),s("v-tab",{attrs:{href:"#tab-1"}},[t._v(" PII "),s("v-icon",[t._v("mdi-card-account-details-outline")])],1)],1),s("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab-item",{key:1,attrs:{value:"tab-1"}},[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"100px",src:a("07a6")}},[s("v-card-title",[t._v("Example Form")])],1),s("v-card-subtitle",[t._v(" This form is for checking for PII in the posted request. All values are transmitted in plaintext or base64 encoded to a 3rd party test server!"),s("br"),s("b",{staticStyle:{color:"red","font-family":"'source-sans-pro'"}},[t._v("Make up the PII - Do not use your own - Do not submit anything you wouldn't want emailed to your worst enemy.")]),t.buttonClicked?s("div",[s("v-chip",{staticClass:"ma-2",attrs:{color:"blue",label:"","text-color":"white"}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-shield-account ")]),t._v(" "+t._s(t.email)+" ")],1),s("v-chip",{staticClass:"ma-2",attrs:{color:"red",label:"","text-color":"white"}},[s("v-icon",{attrs:{left:""}},[t._v(" mdi-form-textbox-password ")]),t._v(" "+t._s(t.password)+" ")],1)],1):t._e()]),s("v-card-text",{staticClass:"text--primary"},[s("v-text-field",{attrs:{label:"Email",clearable:"",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",clearable:"",solo:"",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-textarea",{attrs:{solo:"","append-icon":"mdi-account-plus","auto-grow":"",name:"bodyText",label:"Enter Some PII here"},on:{"click:append":function(e){return t.populateWithPii()}},model:{value:t.bodyText,callback:function(e){t.bodyText=e},expression:"bodyText"}})],1),s("v-card-actions",[s("v-spacer"),s("v-spacer"),s("v-btn",{attrs:{color:"orange"},on:{click:t.postPii}},[t._v(" Login ")])],1)],1)],1)],1)],1)],1)],1),s("v-row",{staticClass:"text-center"},[s("v-col",{attrs:{cols:"12"}},[s("v-img",{staticClass:"my-3",attrs:{src:a("cf05"),contain:"",height:"80","max-height":"80"}})],1),s("v-col",{staticClass:"mb-12"},[s("div",{staticClass:"mb-5"},[s("vue-core-video-player",{staticStyle:{"z-index":"0"},attrs:{autoplay:!1,src:"https://cdn.jsdelivr.net/npm/video-media-samples@1.0.0/big-buck-bunny-480p-30sec.mp4",cover:t.publicPath+"/bbb.jpg"}})],1),s("iframe",{staticClass:"mr-1",attrs:{src:"https://player.vimeo.com/video/516791730",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}}),s("iframe",{attrs:{width:"640",height:"360",src:"https://www.youtube.com/embed/zp-mlmwhA40",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.28539568221!2d-93.33151838074892!3d44.97079704367975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1617917373103!5m2!1sen!2sus",width:"600",height:"450",allowfullscreen:"",loading:"lazy"}}),s("iframe",{attrs:{height:"498",width:"510",src:"https://player.youku.com/embed/XNDk5MjM3ODQxMg==",frameborder:"0",allowfullscreen:""}}),s("v-row",{staticClass:"text-left"},[s("v-col",{attrs:{cols:"12"}},[s("v-img",{staticClass:"ma-1",attrs:{src:"https://qzonestyle.gtimg.cn/qz-proj/wy-pc-v3/static/img/web/slide-1.png",contain:"",height:"150","max-height":"150"}}),s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},t._l(this.badSSL,(function(e){return s("v-col",{key:e,attrs:{cols:"12",md:"4"}},[s("v-img",{staticClass:"ma-0 mr-2",staticStyle:{display:"inline-flex"},attrs:{src:e+"/icons/icon-red.png",contain:"",height:"15",title:""+e,"max-height":"15","max-width":"15"}}),s("a",{attrs:{href:e}},[t._v(t._s(e)+" ")])],1)})),1)],1)],1)],1)],1)],1),s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},t._l(20,(function(e,a){return s("v-col",{key:a,attrs:{cols:"12",md:"4"}},[s("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[s("template",{slot:"progress"},[s("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),s("v-img",{attrs:{height:"250",src:"https://via.placeholder.com/500x500.png?text="+(a+1)}}),s("v-card-title",{style:t.getFont()},[t._v(t._s(a+1)+". Test Title")]),s("v-card-text",[s("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[s("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}})],1),s("div",{staticClass:"my-4 subtitle-1"},[s("a",{attrs:{href:"http://www.lokker.com"}},[t._v("Lokker")])]),s("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],1)],2)],1)})),1)],1),s("blockquote",{staticClass:"twitter-tweet",attrs:{"data-lang":"en"}},[s("p",{attrs:{lang:"en",dir:"ltr"}},[t._v(" I'm noticing more and more JS injections that steal credentials from WordPress login forms. They resemble typical "),s("a",{attrs:{href:"https://twitter.com/hashtag/Magecart?src=hash&ref_src=twsrc%5Etfw"}},[t._v("#Magecart")]),t._v(" scripts: e.g RegExp test for the page URL, use of WebSockets, domain names that mimic Google domains. H/t "),s("a",{attrs:{href:"https://twitter.com/_jamsec?ref_src=twsrc%5Etfw"}},[t._v("@_jamsec")]),t._v(" for this sample. "),s("a",{attrs:{href:"https://t.co/8DXRiV97q3"}},[t._v("pic.twitter.com/8DXRiV97q3")])]),t._v(" — Denis (@unmaskparasites) "),s("a",{attrs:{href:"https://twitter.com/unmaskparasites/status/1378065215565168641?ref_src=twsrc%5Etfw"}},[t._v("April 2, 2021")])])],1)],1),s("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v(" reCaptcha Token ")]),s("v-card-text",[t._v(t._s(t.token))]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},i=[],c=a("1da1"),l=(a("99af"),a("96cf"),a("db82")),d=0,p={name:"TestComponent",data:function(){return{contents:[],email:"",password:"",bodyText:"",tab:"",token:"",dialog:!1,buttonClicked:!1,show1:!1,publicPath:"",fonts:["source-sans-pro","postino-std","zebrawood-std","copal-std-outline"],badSSL:["http://http.badssl.com","https://cbc.badssl.com","https://expired.badssl.com","https://incomplete-chain.badssl.com","https://invalid-expected-sct.badssl.com","https://mozilla-intermediate.badssl.com","https://self-signed.badssl.com","https://sha1-2016.badssl.com","https://sha1-2017.badssl.com","https://sha1-intermediate.badssl.com","https://superfish.badssl.com","https://tls-v1-1.badssl.com:1011"]}},created:function(){var t=["https://platform.twitter.com/widgets.js"];t.forEach((function(t){var e=document.createElement("script");e.setAttribute("src",t),document.head.appendChild(e)}))},mounted:function(){for(var t=function(t){l.get("https://jsonplaceholder.typicode.com/posts/"+t).set("Accept","application/json").then((function(e){console.log(t+": AJAX Request Response » ",e.body.body)}))},e=1;e<10;e++)t(e)},computed:{},methods:{recaptcha:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$recaptchaLoaded();case 2:return e.next=4,t.$recaptcha("login");case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()},populateWithPii:function(){this.bodyText='"Please call me. My phone number is (555) 253-0000."\n\nMore examples:\n    Email address: foo@example.com\n    Credit card number: 4012-8888-8888-1881\n    National Provider Identifier: 1245319599\n    Driver\'s license: AC333991\n    My SSN is: 078-05-1120\n    David Adams @ https://mysite.com\n    password: 1234567'},postPii:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dialog=!0,t.buttonClicked=!0,a={email:t.email,password:t.password,body:t.bodyText,emailBase64:btoa(t.email),passwordBase64:btoa(t.password),bodyBase64:btoa(t.bodyText)},l.post("https://httpbin.org/anything?email=".concat(encodeURIComponent(t.email),"&password=").concat(encodeURIComponent(t.password),"&body=").concat(encodeURIComponent(t.bodyText))).set("Content-Type","application/json").set("My-Secret-Header-Key",encodeURIComponent("email: ".concat(t.email," password: ").concat(t.password," body: ").concat(t.bodyText))).set("My-Secret-Header-Key-base64encoded",btoa("email: ".concat(t.email," password: ").concat(t.password," body: ").concat(t.bodyText))).send(a).then((function(t){console.log("Echoed Response:",t.body)})),e.next=6,t.recaptcha();case 6:t.token=e.sent,t.dialog=!0;case 8:case"end":return e.stop()}}),e)})))()},getFont:function(){return d<4?d+=1:d=0,"font-family: '".concat(this.fonts[d],"', 'Roboto'")},getPost:function(t){return this.contents[t]}}},u=p,m=(a("39fa"),a("2877")),f=a("6544"),b=a.n(f),h=a("8336"),v=a("b0af"),g=a("99d9"),w=a("cc20"),y=a("62ad"),x=a("a523"),_=a("169a"),C=a("132d"),k=a("adda"),T=a("8e36"),V=a("1d4d"),S=a("0fd9"),j=a("2fa4"),P=a("71a3"),A=a("c671"),R=a("fe57"),I=a("aac8"),M=a("9a96"),O=a("8654"),q=a("a844"),E=Object(m["a"])(u,n,i,!1,null,null,null),D=E.exports;b()(E,{VBtn:h["a"],VCard:v["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCardTitle:g["d"],VChip:w["a"],VCol:y["a"],VContainer:x["a"],VDialog:_["a"],VIcon:C["a"],VImg:k["a"],VProgressLinear:T["a"],VRating:V["a"],VRow:S["a"],VSpacer:j["a"],VTab:P["a"],VTabItem:A["a"],VTabs:R["a"],VTabsItems:I["a"],VTabsSlider:M["a"],VTextField:O["a"],VTextarea:q["a"]});var z={name:"App",components:{TestComponent:D},data:function(){return{}}},L=z,B=(a("034f"),a("7496")),H=a("40dc"),U=a("f6c4"),X=Object(m["a"])(L,o,r,!1,null,null,null),F=X.exports;b()(X,{VApp:B["a"],VAppBar:H["a"],VImg:k["a"],VMain:U["a"]});var N=a("f309");s["default"].use(N["a"]);var $=new N["a"]({}),J=a("42ab"),W=a.n(J),G=a("8a39"),K=a("688d"),Q=a("760d");s["default"].use(Q["VueReCaptcha"],{siteKey:"6LcqXqcaAAAAAHGXD0GCQ9Bw3nnxPqHzHOruFAwH"}),G["a"]({Vue:s["default"],dsn:"https://6bbd8679fedb4053bd485b510f6e557a@o567556.ingest.sentry.io/5711635",integrations:[new K["a"].BrowserTracing],tracesSampleRate:1}),s["default"].config.productionTip=!1,s["default"].use(W.a),new s["default"]({vuetify:$,render:function(t){return t(F)}}).$mount("#app")},"5a22":function(t,e,a){},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.23976b10.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.e52b6fcb.png"}});