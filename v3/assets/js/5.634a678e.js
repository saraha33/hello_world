(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,20,74],{242:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);a(93);var i={name:"BaseIcon",props:{name:{type:String,default:null,validator:e=>["add-existing-collection","add-existing-object","add-new-collection","add-new-object","archive-arrow","archive-empty","archive-sheets","arrow-left","attachment","attention","audio-object","calendar-many","calendar-number","camera","check-mark","clock","collection","download","drag-lines","drag-n-drop","drop-down","duplicate","edit","eye-hide","eye","file-object","forbidden","home","image-object","information","licence","logo","magnifier","next","options-menu","people","play","plus","prev","print","refresh","remove","save-file","share","sort","subscribe","success","text","unsubscribe","video-object","waste-bin"].includes(e)},title:{type:String,default:""},desc:{type:String,default:""}},data:()=>({baseIcons:null}),computed:{icon(){return`${this.baseIcons}#${this.name}`},id(){return this._uid},ariaAttribute(){const e=[];return this.title&&e.push("title_"+this.id),this.desc&&e.push("desc_"+this.id),e.join(" ")}},mounted(){window.base_ui_icons?this.baseIcons=window.base_ui_icons:this.baseIcons="/base-ui-icons.svg"}},s=(a(244),a(11)),o=Object(s.a)(i,(function(){var e=this,t=e._self._c;return t("svg",{staticClass:"base-icon",attrs:{"aria-labelledby":!(!e.title&&!e.desc)&&e.ariaAttribute}},[e.title?t("title",{attrs:{id:"title_"+e.id}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.desc?t("desc",{attrs:{id:"desc_"+e.id}},[e._v(e._s(e.desc))]):e._e(),e._v(" "),e.baseIcons?t("use",{attrs:{href:e.icon}}):e._e()])}),[],!1,null,"33254aaa",null);t.default=o.exports},244:function(e,t,a){"use strict";a(242)},263:function(e,t,a){},275:function(e,t,a){"use strict";a(263)},279:function(e,t,a){"use strict";a.r(t);var i={name:"BaseBox",props:{renderElementAs:{type:String,default:"div"},boxSize:{type:Object,default:()=>({width:"200px"})},boxRatio:{type:String,default:"100"},boxHover:{type:Boolean,default:!0},boxShadowSize:{type:String,default:"small",validator:e=>["small","large"].includes(e)},disabled:{type:Boolean,default:!1},additionalAttributes:{type:Object,default:()=>({})}},methods:{clicked(e){this.$emit("clicked",e)}}},s=(a(275),a(11)),o=Object(s.a)(i,(function(){var e=this;return(0,e._self._c)(e.renderElementAs,e._b({tag:"compontent",class:["base-box","base-box-"+e.$props.boxRatio,"base-box-shadow-"+e.boxShadowSize,{"base-box-hover":e.boxHover&&!e.disabled}],style:e.boxSize,attrs:{disabled:e.disabled,type:"button"===e.renderElementAs?"button":""},on:{click:e.clicked}},"compontent",e.additionalAttributes,!1),[e._t("default")],2)}),[],!1,null,"0ef284a3",null);t.default=o.exports},293:function(e,t,a){},318:function(e,t,a){!function(t,a){var i=function(e,t,a){"use strict";var i,s;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in s=e.lazySizesConfig||e.lazysizesConfig||{},a)t in s||(s[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:s,noSupport:!0};var o=t.documentElement,n=e.HTMLPictureElement,l=e.addEventListener.bind(e),r=e.setTimeout,c=e.requestAnimationFrame||r,d=e.requestIdleCallback,u=/^picture$/i,b=["load","error","lazyincluded","_lazyloaded"],f={},g=Array.prototype.forEach,m=function(e,t){return f[t]||(f[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),f[t].test(e.getAttribute("class")||"")&&f[t]},h=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},p=function(e,t){var a;(a=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(a," "))},x=function(e,t,a){var i=a?"addEventListener":"removeEventListener";a&&x(e,t),b.forEach((function(a){e[i](a,t)}))},y=function(e,a,s,o,n){var l=t.createEvent("Event");return s||(s={}),s.instance=i,l.initEvent(a,!o,!n),l.detail=s,e.dispatchEvent(l),l},v=function(t,a){var i;!n&&(i=e.picturefill||s.pf)?(a&&a.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},_=function(e,t){return(getComputedStyle(e,null)||{})[t]},z=function(e,t,a){for(a=a||e.offsetWidth;a<s.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},A=(fe=[],ge=[],me=fe,he=function(){var e=me;for(me=fe.length?ge:fe,ue=!0,be=!1;e.length;)e.shift()();ue=!1},pe=function(e,a){ue&&!a?e.apply(this,arguments):(me.push(e),be||(be=!0,(t.hidden?r:c)(he)))},pe._lsFlush=he,pe),w=function(e,t){return t?function(){A(e)}:function(){var t=this,a=arguments;A((function(){e.apply(t,a)}))}},C=function(e){var t,i,s=function(){t=null,e()},o=function(){var e=a.now()-i;e<99?r(o,99-e):(d||s)(s)};return function(){i=a.now(),t||(t=r(o,99))}},S=(J=/^img$/i,V=/^iframe$/i,q="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),Q=0,G=0,K=-1,Y=function(e){G--,(!e||G<0||!e.target)&&(G=0)},X=function(e){return null==D&&(D="hidden"==_(t.body,"visibility")),D||!("hidden"==_(e.parentNode,"visibility")&&"hidden"==_(e,"visibility"))},Z=function(e,a){var i,s=e,n=X(e);for(R-=a,W+=a,P-=a,U+=a;n&&(s=s.offsetParent)&&s!=t.body&&s!=o;)(n=(_(s,"opacity")||1)>0)&&"visible"!=_(s,"overflow")&&(i=s.getBoundingClientRect(),n=U>i.left&&P<i.right&&W>i.top-1&&R<i.bottom+1);return n},ee=function(){var e,a,n,l,r,c,d,u,b,f,g,m,h=i.elements;if((j=s.loadMode)&&G<8&&(e=h.length)){for(a=0,K++;a<e;a++)if(h[a]&&!h[a]._lazyRace)if(!q||i.prematureUnveil&&i.prematureUnveil(h[a]))le(h[a]);else if((u=h[a].getAttribute("data-expand"))&&(c=1*u)||(c=Q),f||(f=!s.expand||s.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:s.expand,i._defEx=f,g=f*s.expFactor,m=s.hFac,D=null,Q<g&&G<1&&K>2&&j>2&&!t.hidden?(Q=g,K=0):Q=j>1&&K>1&&G<6?f:0),b!==c&&(M=innerWidth+c*m,F=innerHeight+c,d=-1*c,b=c),n=h[a].getBoundingClientRect(),(W=n.bottom)>=d&&(R=n.top)<=F&&(U=n.right)>=d*m&&(P=n.left)<=M&&(W||U||P||R)&&(s.loadHidden||X(h[a]))&&(L&&G<3&&!u&&(j<3||K<4)||Z(h[a],c))){if(le(h[a]),r=!0,G>9)break}else!r&&L&&!l&&G<4&&K<4&&j>2&&(O[0]||s.preloadAfterLoad)&&(O[0]||!u&&(W||U||P||R||"auto"!=h[a].getAttribute(s.sizesAttr)))&&(l=O[0]||h[a]);l&&!r&&le(l)}},te=function(e){var t,i=0,o=s.throttleDelay,n=s.ricTimeout,l=function(){t=!1,i=a.now(),e()},c=d&&n>49?function(){d(l,{timeout:n}),n!==s.ricTimeout&&(n=s.ricTimeout)}:w((function(){r(l)}),!0);return function(e){var s;(e=!0===e)&&(n=33),t||(t=!0,(s=o-(a.now()-i))<0&&(s=0),e||s<9?c():r(c,s))}}(ee),ae=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(Y(e),h(t,s.loadedClass),p(t,s.loadingClass),x(t,se),y(t,"lazyloaded"))},ie=w(ae),se=function(e){ie({target:e.target})},oe=function(e){var t,a=e.getAttribute(s.srcsetAttr);(t=s.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},ne=w((function(e,t,a,i,o){var n,l,c,d,b,f;(b=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(a?h(e,s.autosizesClass):e.setAttribute("sizes",i)),l=e.getAttribute(s.srcsetAttr),n=e.getAttribute(s.srcAttr),o&&(d=(c=e.parentNode)&&u.test(c.nodeName||"")),f=t.firesLoad||"src"in e&&(l||n||d),b={target:e},h(e,s.loadingClass),f&&(clearTimeout(H),H=r(Y,2500),x(e,se,!0)),d&&g.call(c.getElementsByTagName("source"),oe),l?e.setAttribute("srcset",l):n&&!d&&(V.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||s.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,n):e.src=n),o&&(l||d)&&v(e,{src:n})),e._lazyRace&&delete e._lazyRace,p(e,s.lazyClass),A((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&h(e,s.fastLoadedClass),ae(b),e._lazyCache=!0,r((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&G--}),!0)})),le=function(e){if(!e._lazyRace){var t,a=J.test(e.nodeName),i=a&&(e.getAttribute(s.sizesAttr)||e.getAttribute("sizes")),o="auto"==i;(!o&&L||!a||!e.getAttribute("src")&&!e.srcset||e.complete||m(e,s.errorClass)||!m(e,s.lazyClass))&&(t=y(e,"lazyunveilread").detail,o&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,G++,ne(e,t,o,i,a))}},re=C((function(){s.loadMode=3,te()})),ce=function(){3==s.loadMode&&(s.loadMode=2),re()},de=function(){L||(a.now()-N<999?r(de,999):(L=!0,s.loadMode=3,te(),l("scroll",ce,!0)))},{_:function(){N=a.now(),i.elements=t.getElementsByClassName(s.lazyClass),O=t.getElementsByClassName(s.lazyClass+" "+s.preloadClass),l("scroll",te,!0),l("resize",te,!0),l("pageshow",(function(e){if(e.persisted){var a=t.querySelectorAll("."+s.loadingClass);a.length&&a.forEach&&c((function(){a.forEach((function(e){e.complete&&le(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o.addEventListener("DOMNodeInserted",te,!0),o.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),l("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?de():(l("load",de),t.addEventListener("DOMContentLoaded",te),r(de,2e4)),i.elements.length?(ee(),A._lsFlush()):te()},checkElems:te,unveil:le,_aLSL:ce}),T=(I=w((function(e,t,a,i){var s,o,n;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),u.test(t.nodeName||""))for(o=0,n=(s=t.getElementsByTagName("source")).length;o<n;o++)s[o].setAttribute("sizes",i);a.detail.dataAttr||v(e,a.detail)})),k=function(e,t,a){var i,s=e.parentNode;s&&(a=z(e,s,a),(i=y(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=i.detail.width)&&a!==e._lazysizesWidth&&I(e,s,i,a))},$=C((function(){var e,t=E.length;if(t)for(e=0;e<t;e++)k(E[e])})),{_:function(){E=t.getElementsByClassName(s.autosizesClass),l("resize",$)},checkElems:$,updateElem:k}),B=function(){!B.i&&t.getElementsByClassName&&(B.i=!0,T._(),S._())};var E,I,k,$;var O,L,H,j,N,M,F,R,P,U,W,D,J,V,q,Q,G,K,Y,X,Z,ee,te,ae,ie,se,oe,ne,le,re,ce,de;var ue,be,fe,ge,me,he,pe;return r((function(){s.init&&B()})),i={cfg:s,autoSizer:T,loader:S,init:B,uP:v,aC:h,rC:p,hC:m,fire:y,gW:z,rAF:A}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},319:function(e,t,a){"use strict";a(293)},365:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var i=a(279),s=a(243),o=a(409),n={name:"BaseImageBox",components:{BaseCheckmark:()=>Promise.all([a.e(0),a.e(65)]).then(a.bind(null,280)),BaseIcon:s.default,BaseBox:i.default,BaseImage:o.default},props:{title:{type:String,default:"No title"},subtext:{type:String,default:""},showTitle:{type:Boolean,default:!0},showTitleOnHover:{type:Boolean,default:!1},imageUrl:{type:String,default:null},description:{type:String,default:null},additional:{type:String,default:null},icon:{type:String,default:""},iconSize:{type:String,default:"xxlarge",validator:e=>["small","medium","large","xlarge","xxlarge"].includes(e)},playIcon:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},boxSize:{type:Object,default:()=>({width:"auto",height:"auto"})},boxText:{type:Array,default:()=>[]},lazyload:{type:Boolean,default:!1},imageFirst:{type:Boolean,default:!1},centerHeader:{type:Boolean,default:!1},renderElementAs:{type:String,default:"div"},linkTo:{type:[String,Object],default:"",validator:e=>"string"==typeof e||e instanceof Object&&Object.keys(e).includes("path")}},data:()=>({selectedInt:!1,boxTextStyle:{},displayImage:!0,resizeTimeout:null}),computed:{imageShadowClass(){return this.imageFirst?"base-image-box-img-third":"base-image-box-img-half"}},watch:{selectedInt(e){e!==this.selected&&this.$emit("select-triggered",e)},selected(e){this.selectedInt!==e&&(this.selectedInt=e)},boxText(){this.calcTextHeight()}},mounted(){this.selectedInt=this.selected,window&&window.addEventListener("resize",this.resizeTriggered),this.$nextTick(()=>{this.calcTextHeight()})},destroyed(){window.removeEventListener("resize",this.resizeTriggered)},methods:{boxSelect(){this.selectable?this.selectedInt=!this.selectedInt:this.$emit("clicked")},resizeTriggered(){this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=setTimeout(()=>{this.calcTextHeight()},500)},calcTextHeight(){if(!this.imageUrl&&this.boxText.length&&this.$refs.baseBox&&this.$refs.boxText){let e=0;if(this.$refs.headerBox){const t=this.$refs.headerBox;e=t.clientHeight+2*t.offsetTop}const t=this.$refs.boxText,a=this.$refs.boxTextInner[0]||this.$refs.boxTextInner,i=this.$refs.baseBox.$el.clientHeight,s=window.getComputedStyle(a,null).getPropertyValue("line-height").replace("px","");let o=i-e-window.getComputedStyle(t,null).getPropertyValue("margin-bottom").replace("px","");this.description&&(o-=s);const n=Math.floor(o/s);this.boxTextStyle={height:s*n+"px","-webkit-line-clamp":n}}}}},l=(a(455),a(11)),r=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("BaseBox",{ref:"baseBox",attrs:{"box-size":e.boxSize,"render-element-as":e.renderElementAs,"additional-attributes":e.linkTo?{to:e.linkTo}:{},"box-ratio":"100"},on:{clicked:e.boxSelect}},[t("div",{class:["base-image-box-content-wrapper",{"base-image-box-hover":(e.playIcon||e.showTitleOnHover)&&!e.selectable},{"base-image-box-hover-show-title":e.showTitleOnHover&&!e.selectable},{"base-image-box-selectable":e.selectable},{"base-image-box-draggable":e.draggable},{"base-image-box-selected":e.selectable&&e.selectedInt}]},[t("div",{staticClass:"base-image-box-content"},[e.showTitle?t("div",{ref:"headerBox",class:["base-image-box-header",{"base-image-box-header-centered":e.centerHeader}]},[t("div",{class:["base-image-box-title",{"base-image-box-header-2-lines":!e.subtext}],attrs:{title:e.title}},[e._v("\n          "+e._s(e.title)+"\n        ")]),e._v(" "),e.subtext?t("div",{staticClass:"base-image-box-subtext",attrs:{title:e.subtext}},[e._v("\n          "+e._s(e.subtext)+"\n        ")]):e._e()]):e._e(),e._v(" "),t("div",{class:["base-image-box-body",{"base-image-box-inner-shadow-bottom-top":e.selectable&&e.imageUrl&&!e.showTitle},{"base-image-box-inner-shadow-bottom":!e.icon&&(!e.showTitleOnHover||e.showTitleOnHover&&e.additional)},{"base-image-box-order-first":e.imageFirst},e.imageShadowClass]},[e.imageUrl&&e.displayImage?t("div",{class:["base-image-box-img-wrapper"]},[t("BaseImage",{ref:"image",class:["base-image-box-image",{"base-image-box__image-second":!e.imageFirst},{"base-image-box-no-title":!e.showTitle}],attrs:{alt:e.title,lazyload:e.lazyload,src:e.imageUrl},on:{error:function(t){e.displayImage=!1}}})],1):e._e(),e._v(" "),e.icon?t("BaseIcon",{class:["base-image-box-icon","base-image-box-icon--"+e.iconSize],attrs:{name:e.icon}}):e._e(),e._v(" "),e.playIcon?t("BaseIcon",{class:["base-image-box-icon-play","base-image-box-icon--"+e.iconSize],attrs:{name:"play"}}):e._e(),e._v(" "),e.imageUrl&&e.displayImage?e._e():t("div",{ref:"boxText",staticClass:"base-image-box__text-wrapper"},[e._t("text",(function(){return[t("div",{ref:"boxTextInner",staticClass:"base-image-box-text",style:e.boxTextStyle},e._l(e.boxText,(function(a,i){return t("div",{key:i},[e._v("\n                "+e._s(a)+"\n              ")])})),0)]}),{text:e.boxText})],2),e._v(" "),t("div",{class:["base-image-box-footer",{"base-image-box-footer-invert":e.icon}]},[e.$slots.footerLeft?t("div",{staticClass:"base-image-box-footer-left"},[e._t("footerLeft")],2):e._e(),e._v(" "),t("div",{staticClass:"base-image-box-footer-body"},[e.showTitleOnHover?t("div",{staticClass:"base-image-box-footer-title bold",attrs:{title:e.title}},[e._v("\n              "+e._s(e.title)+"\n            ")]):e._e(),e._v(" "),e.description?t("div",{class:["base-image-box-footer-text",{bold:!e.additional}],attrs:{title:e.description}},[e._v("\n              "+e._s(e.description)+"\n            ")]):e._e(),e._v(" "),e.additional?t("div",{staticClass:"base-image-box-footer-text bold",attrs:{title:e.additional}},[e._v("\n              "+e._s(e.additional)+"\n            ")]):e._e()]),e._v(" "),e.$slots.footer||e.playIcon?t("div",{staticClass:"base-image-box-footer-right"},[e.playIcon?t("BaseIcon",{staticClass:"base-image-box-icon-play-small",attrs:{name:"play"}}):e._e(),e._v(" "),e._t("footer")],2):e._e()])],1)]),e._v(" "),t("div",{staticClass:"base-image-box-features"},[t("transition",{attrs:{name:"slide-fade"}},[e.selectable?t("BaseCheckmark",{staticClass:"base-image-box-checkbox",attrs:{checked:e.selectedInt,label:e.title,"mark-style":"checkbox","check-box-size":"large"},on:{clicked:e.boxSelect}}):e._e()],1)],1)])])}),[],!1,null,"0a651a7f",null);t.default=r.exports},409:function(e,t,a){"use strict";a.r(t);a(318);var i={name:"BaseImage",props:{alt:{type:String,default:""},lazyload:{type:Boolean,default:!1},src:{type:String,default:""},srcset:{type:Array,default:()=>[]}},computed:{clearPng:()=>"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8//t3PQAJbAN2AyakNQAAAABJRU5ErkJggg==",source(){const e=this.srcset.length-1;return this.srcset[e]?Object.values(this.srcset[e])[0]:this.src},sourceSet(){return this.srcset.length?this.srcset.map(e=>Object.keys(e).map(t=>`${e[t]} ${t}`)).join(", "):null}},methods:{emitError(e){this.$emit("error",e)}}},s=(a(319),a(11)),o=Object(s.a)(i,(function(){var e=this;return(0,e._self._c)("img",{class:["base-image",{lazyload:e.lazyload}],attrs:{alt:e.alt,"data-src":e.lazyload?e.source:null,"data-srcset":e.lazyload?e.sourceSet:null,src:e.lazyload?e.clearPng:e.source,srcset:e.lazyload?null:e.sourceSet},on:{error:e.emitError}})}),[],!1,null,"1d4c3ede",null);t.default=o.exports},455:function(e,t,a){"use strict";a(365)}}]);