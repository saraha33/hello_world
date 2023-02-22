(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1007:function(e,t,i){"use strict";i.r(t);var o={name:"BaseMediaPreview",components:{BaseButton:()=>Promise.all([i.e(0),i.e(8)]).then(i.bind(null,256)),BaseIcon:()=>Promise.all([i.e(0),i.e(3)]).then(i.bind(null,243)),BaseImage:()=>Promise.all([i.e(0),i.e(20)]).then(i.bind(null,409)),BaseHlsVideo:()=>Promise.all([i.e(0),i.e(12),i.e(16)]).then(i.bind(null,979))},directives:{VueClickOutside:()=>i.e(140).then(i.t.bind(null,252,7))},mixins:[i(277).a],props:{showPreview:{type:Boolean,default:!1},mediaUrl:{type:String,default:""},mediaPosterUrl:{type:String,default:""},displayName:{type:String,default:""},downloadUrl:{type:String,default:""},mediaType:{type:String,default:"",validator:e=>["image","video","audio","pdf",""].includes(e)},displaySize:{type:Object,default:()=>({height:"720px",width:"1280px"})},allowDownload:{type:Boolean,default:!0},infoTexts:{type:Object,default:()=>({download:"Download",view:"View"})},orientation:{type:Number,default:0},previews:{type:Array,default:()=>[]},additionalInfo:{type:Array,default:()=>[]},hlsStartLevel:{type:Number,default:void 0}},data(){return{showInt:this.showPreview,displayImage:!0,targetName:"mediaStage",isMobile:!1}},computed:{fileType(){if(this.mediaType)return this.mediaType;const e=this.fileEnding;return["png","gif","jpeg","jpg"].includes(e.toLowerCase())?"image":["mp4","m3u8","ogg"].includes(e.toLowerCase())?"video":["mp3","wav","mpeg"].includes(e.toLowerCase())?"audio":["pdf"].includes(e.toLowerCase())?"document":""},fileName(){if(this.displayName)return this.displayName;const e=this.downloadUrl.match(/([^/]+)$/);return e?decodeURI(e[1]):""},fileEnding(){const e=this.sourceUrl.match(/\w+\.(\w{2,4})$/);return e?e[1]:""},formatNotSupported(){return!this.fileType},sourceUrl(){const e=this.previews.length-1;return this.previews&&this.previews[e]?Object.values(this.previews[e])[0]:this.mediaUrl}},watch:{showPreview(e){this.showInt=e,this.displayImage=!0}},mounted(){this.isMobile=window.innerWidth<=640},methods:{clickOutside(e){"base-media-preview-image-stage"===e.target.className&&this.$emit("hide-preview")},download(){this.allowDownload&&this.$emit("download",{url:this.downloadUrl||this.mediaUrl,name:this.fileName})},openPdf(){window.open(this.mediaUrl)}}},a=(i(465),i(11)),n=Object(a.a)(o,(function(){var e=this,t=e._self._c;return e.showInt?t("div",{staticClass:"base-media-preview-background"},[t("div",{staticClass:"base-media-preview-close",on:{click:function(t){return e.$emit("hide-preview")}}},[t("base-icon",{staticClass:"base-media-preview-close-icon",attrs:{name:"remove"}})],1),e._v(" "),t("transition",{attrs:{name:"grow"}},[t("div",{ref:"mediaStage",staticClass:"base-media-preview-image-stage"},[e.displayImage&&"image"===e.fileType?t("BaseImage",{directives:[{name:"vue-click-outside",rawName:"v-vue-click-outside.prevent",value:e.clickOutside,expression:"clickOutside",modifiers:{prevent:!0}}],class:["base-media-preview-image","base-media-preview-rotation-"+e.orientation.toString()],style:e.displaySize,attrs:{srcset:e.previews,src:e.sourceUrl},on:{error:function(t){e.displayImage=!1}}}):"image"!==e.fileType||e.displayImage?"video"===e.fileType?t("base-hls-video",{staticClass:"base-media-preview-video",attrs:{"display-size":e.displaySize,"media-url":e.mediaUrl,"start-level":e.hlsStartLevel,"media-poster-url":e.mediaPosterUrl}}):"audio"===e.fileType?t("audio",{staticClass:"base-media-preview__audio",attrs:{controls:""}},[e._v("\n        Your browser does not support the audio tag.\n        "),t("source",{attrs:{src:e.mediaUrl,type:"audio/mpeg"}})]):t("div",{staticClass:"base-media-preview-not-supported base-media-preview-error"},[t("p",{staticClass:"base-media-preview-not-supported-file-name"},[e._v("\n          "+e._s(e.fileName)+"\n        ")]),e._v(" "),t("div",{staticClass:"base-media-preview-not-supported-buttons"},[e.allowDownload?t("BaseButton",{staticClass:"base-media-preview__button base-media-preview-not-supported-button",attrs:{text:e.infoTexts.download,icon:"download","icon-position":"right","icon-size":"large"},on:{clicked:e.download}}):e._e(),e._v(" "),e.isMobile||"pdf"!==e.fileEnding?e._e():t("BaseButton",{staticClass:"base-media-preview__button base-media-preview-not-supported-button",attrs:{text:e.infoTexts.view,icon:"eye","icon-position":"right","icon-size":"large"},on:{clicked:function(t){return e.openPdf()}}})],1),e._v(" "),e._l(e.additionalInfo,(function(i){return t("p",{key:i,staticClass:"base-media-preview__not-supported-additional"},[e._v("\n          "+e._s(i)+"\n        ")])}))],2):t("div",{staticClass:"base-media-preview-error"},[e._v("\n        An error occurred displaying this image.\n      ")]),e._v(" "),"pdf"===e.fileEnding||e.formatNotSupported?e._e():t("div",{staticClass:"base-media-preview-info"},[t("div",{staticClass:"base-media-preview__info-text-wrapper"},[t("p",{staticClass:"base-media-preview-info-text"},[e._v("\n            "+e._s(e.fileName)+"\n          ")]),e._v(" "),e.additionalInfo.length?e._l(e.additionalInfo,(function(i){return t("p",{key:i,staticClass:"base-media-preview__info-text-additional"},[e._v("\n              "+e._s(i)+"\n            ")])})):e._e()],2),e._v(" "),e.allowDownload?t("BaseButton",{staticClass:"base-media-preview__button",attrs:{text:e.infoTexts.download,icon:"download","icon-position":"right","icon-size":"large"},on:{clicked:e.download}}):e._e()],1)],1)])],1):e._e()}),[],!1,null,"dcafb1c4",null);t.default=n.exports},277:function(e,t,i){"use strict";var o=i(278);t.a={data:()=>({targetElement:null}),watch:{showInt(e){e||Object(o.clearAllBodyScrollLocks)()}},updated(){this.targetElement=this.$refs[this.targetName],this.targetElement&&(this.showInt?Object(o.disableBodyScroll)(this.targetElement):Object(o.enableBodyScroll)(this.targetElement))},destroyed(){Object(o.clearAllBodyScrollLocks)()}}},278:function(e,t,i){var o,a,n;a=[t],void 0===(n="function"==typeof(o=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var i=!1;if("undefined"!=typeof window){var o={get passive(){i=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}function a(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function n(e){var t=e||window.event;return!!a(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function s(){setTimeout((function(){void 0!==p&&(document.body.style.paddingRight=p,p=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)}))}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),l=[],d=!1,c=-1,u=void 0,p=void 0;e.disableBodyScroll=function(e,o){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!l.some((function(t){return t.targetElement===e}))){var s={targetElement:e,options:o||{}};l=[].concat(t(l),[s]),e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var i,o,s,r;1===t.targetTouches.length&&(o=e,r=(i=t).targetTouches[0].clientY-c,a(i.target)||(o&&0===o.scrollTop&&0<r||(s=o)&&s.scrollHeight-s.scrollTop<=s.clientHeight&&r<0?n(i):i.stopPropagation()))},d||(document.addEventListener("touchmove",n,i?{passive:!1}:void 0),d=!0)}}else{m=o,setTimeout((function(){if(void 0===p){var e=!!m&&!0===m.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(p=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}));var v={targetElement:e,options:o||{}};l=[].concat(t(l),[v])}var m},e.clearAllBodyScrollLocks=function(){r?(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),d&&(document.removeEventListener("touchmove",n,i?{passive:!1}:void 0),d=!1),l=[],c=-1):(s(),l=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,l=l.filter((function(t){return t.targetElement!==e})),d&&0===l.length&&(document.removeEventListener("touchmove",n,i?{passive:!1}:void 0),d=!1)}else(l=l.filter((function(t){return t.targetElement!==e}))).length||s()}})?o.apply(t,a):o)||(e.exports=n)},372:function(e,t,i){},465:function(e,t,i){"use strict";i(372)}}]);