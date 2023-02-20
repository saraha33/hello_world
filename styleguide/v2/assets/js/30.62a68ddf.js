(window.webpackJsonp=window.webpackJsonp||[]).push([[30,1],{242:function(t,e,o){},243:function(t,e,o){"use strict";o.r(e);o(93);var n={name:"BaseIcon",props:{name:{type:String,default:null,validator:t=>["add-existing-collection","add-existing-object","add-new-collection","add-new-object","archive-arrow","archive-empty","archive-sheets","arrow-left","attachment","attention","audio-object","calendar-many","calendar-number","camera","check-mark","clock","collection","download","drag-lines","drag-n-drop","drop-down","duplicate","edit","eye-hide","eye","file-object","forbidden","home","image-object","information","licence","logo","magnifier","next","options-menu","people","play","plus","prev","print","refresh","remove","save-file","share","sort","subscribe","success","text","unsubscribe","video-object","waste-bin"].includes(t)},title:{type:String,default:""},desc:{type:String,default:""}},data:()=>({baseIcons:null}),computed:{icon(){return`${this.baseIcons}#${this.name}`},id(){return this._uid},ariaAttribute(){const t=[];return this.title&&t.push("title_"+this.id),this.desc&&t.push("desc_"+this.id),t.join(" ")}},mounted(){window.base_ui_icons?this.baseIcons=window.base_ui_icons:this.baseIcons="/base-ui-icons.svg"}},i=(o(244),o(11)),s=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{staticClass:"base-icon",attrs:{"aria-labelledby":!(!t.title&&!t.desc)&&t.ariaAttribute}},[t.title?e("title",{attrs:{id:"title_"+t.id}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.desc?e("desc",{attrs:{id:"desc_"+t.id}},[t._v(t._s(t.desc))]):t._e(),t._v(" "),t.baseIcons?e("use",{attrs:{href:t.icon}}):t._e()])}),[],!1,null,"33254aaa",null);e.default=s.exports},244:function(t,e,o){"use strict";o(242)},271:function(t,e,o){"use strict";var n=o(272);e.a={data:()=>({targetElement:null}),watch:{showInt(t){t||Object(n.clearAllBodyScrollLocks)()}},updated(){this.targetElement=this.$refs[this.targetName],this.targetElement&&(this.showInt?Object(n.disableBodyScroll)(this.targetElement):Object(n.enableBodyScroll)(this.targetElement))},destroyed(){Object(n.clearAllBodyScrollLocks)()}}},272:function(t,e,o){var n,i,s;i=[e],void 0===(s="function"==typeof(n=function(t){"use strict";function e(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}Object.defineProperty(t,"__esModule",{value:!0});var o=!1;if("undefined"!=typeof window){var n={get passive(){o=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}function i(t){return r.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))}function s(t){var e=t||window.event;return!!i(e.target)||1<e.touches.length||(e.preventDefault&&e.preventDefault(),!1)}function a(){setTimeout((function(){void 0!==p&&(document.body.style.paddingRight=p,p=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)}))}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),r=[],c=!1,u=-1,d=void 0,p=void 0;t.disableBodyScroll=function(t,n){if(l){if(!t)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(t&&!r.some((function(e){return e.targetElement===t}))){var a={targetElement:t,options:n||{}};r=[].concat(e(r),[a]),t.ontouchstart=function(t){1===t.targetTouches.length&&(u=t.targetTouches[0].clientY)},t.ontouchmove=function(e){var o,n,a,l;1===e.targetTouches.length&&(n=t,l=(o=e).targetTouches[0].clientY-u,i(o.target)||(n&&0===n.scrollTop&&0<l||(a=n)&&a.scrollHeight-a.scrollTop<=a.clientHeight&&l<0?s(o):o.stopPropagation()))},c||(document.addEventListener("touchmove",s,o?{passive:!1}:void 0),c=!0)}}else{v=n,setTimeout((function(){if(void 0===p){var t=!!v&&!0===v.reserveScrollBarGap,e=window.innerWidth-document.documentElement.clientWidth;t&&0<e&&(p=document.body.style.paddingRight,document.body.style.paddingRight=e+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}));var h={targetElement:t,options:n||{}};r=[].concat(e(r),[h])}var v},t.clearAllBodyScrollLocks=function(){l?(r.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),c&&(document.removeEventListener("touchmove",s,o?{passive:!1}:void 0),c=!1),r=[],u=-1):(a(),r=[])},t.enableBodyScroll=function(t){if(l){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,r=r.filter((function(e){return e.targetElement!==t})),c&&0===r.length&&(document.removeEventListener("touchmove",s,o?{passive:!1}:void 0),c=!1)}else(r=r.filter((function(e){return e.targetElement!==t}))).length||a()}})?n.apply(e,i):n)||(t.exports=s)},285:function(t,e,o){},304:function(t,e,o){"use strict";o(285)},381:function(t,e,o){"use strict";o.r(e);var n=o(243),i=o(271),s={name:"BasePopUp",components:{BaseIcon:n.default,BaseButton:()=>Promise.all([o.e(0),o.e(34)]).then(o.bind(null,259)),BaseLoader:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,275))},mixins:[i.a],props:{show:{type:Boolean,default:!1},title:{type:String,default:"Pop Up"},descriptionElementId:{type:String,default:""},buttonLeftText:{type:String,default:"Cancel"},buttonRightText:{type:String,default:"Submit"},buttonLeftIcon:{type:String,default:"remove"},buttonRightIcon:{type:String,default:"check-mark"},buttonRightDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},isOpenFocus:{type:String,default:""},fullscreenOnMobile:{type:Boolean,default:!1}},data(){return{showInt:this.show,targetName:"popUpBody"}},watch:{show(t){this.showInt||this.prevActiveElement||(this.prevActiveElement=document.activeElement),this.showInt=t}},updated(){setTimeout(()=>{this.showInt?""!==this.isOpenFocus&&this.$el.querySelector(this.isOpenFocus)&&this.$el.querySelector(this.isOpenFocus).focus():this.prevActiveElement&&(this.prevActiveElement.focus(),this.prevActiveElement=!1)},250)},mounted(){document.onkeyup=t=>{const e=t||window.event;if(document.querySelector(".popup-box")&&(27===e.keyCode||"Escape"===e.key)){document.querySelector(".popup-box .base-popup__close-button").dispatchEvent(new Event("click"))}}},methods:{close(){this.$emit("close"),this.showInt=!1},buttonRight(){this.$emit("button-right")},buttonLeft(){this.$emit("button-left")}}},a=(o(304),o(11)),l=Object(a.a)(s,(function(){var t=this,e=t._self._c;return t.showInt?e("div",{class:["base-pop-up",{"base-pop-up--fullscreen-on-mobile":t.fullscreenOnMobile}]},[e("div",{staticClass:"base-pop-up-background"}),t._v(" "),e("div",{ref:"popUpBody",staticClass:"popup-box",attrs:{role:"alertdialog","aria-modal":"true","aria-labelledby":"popup-title","aria-describedby":"descriptionElementId"}},[e("div",{staticClass:"popup-header"},[e("div",{staticClass:"popup-title",attrs:{id:"popup-title"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("button",{staticClass:"base-popup__close-button",attrs:{type:"button","aria-label":"close pop up"},on:{click:t.close}},[e("base-icon",{staticClass:"popup-remove",attrs:{name:"remove"}})],1)]),t._v(" "),e("div",{staticClass:"popup-content"},[t._t("default"),t._v(" "),e("div",{staticClass:"popup-button-row"},[t._t("button-row",(function(){return[e("BaseButton",{staticClass:"base-popup-button",attrs:{id:"popup-left-button",text:t.buttonLeftText,icon:t.buttonLeftIcon,"icon-position":"right","icon-size":"small"},on:{clicked:t.buttonLeft}}),t._v(" "),e("BaseButton",{staticClass:"base-popup-button",attrs:{id:"popup-right-button",text:t.buttonRightText,icon:t.isLoading?"":t.buttonRightIcon,"icon-position":"right","icon-size":"small",disabled:t.buttonRightDisabled},on:{clicked:t.buttonRight},scopedSlots:t._u([{key:"right-of-text",fn:function(){return[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"base-popup-button-loader"},[e("BaseLoader")],1)]},proxy:!0}],null,!1,288902964)})]}))],2)],2)])]):t._e()}),[],!1,null,"8214d72e",null);e.default=l.exports}}]);