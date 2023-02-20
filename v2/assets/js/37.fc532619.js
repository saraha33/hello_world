(window.webpackJsonp=window.webpackJsonp||[]).push([[37,2],{248:function(e,t,i){"use strict";i(92);t.a={computed:{hasI18n(){return Boolean(this.$i18n)}},methods:{getI18nTerm(e,t=-1,i={}){if(this.hasI18n&&this.$te(e))return t>=0?this.$tc(e,t,i):this.$t(e,i);return e.split(".").pop()||e},setLangLabels(e,t){return t.reduce((t,i)=>(this.$set(t,i,this.$i18n?this.$t(e,i):e.split(".").pop()),t),{})},getLangLabel(e,t=!1){const i=this.hasI18n?this.language||this.$i18n.locale:this.language;if("string"==typeof e)return e;if(e&&i&&e[i])return e[i];if(e&&i&&t){const t=Object.keys(e).find(t=>!!e[t]);return e[t]||e[i]||""}return e}}}},261:function(e,t,i){},270:function(e,t,i){"use strict";i(261)},275:function(e,t,i){"use strict";i.r(t);var a={name:"BaseLoader",props:{loaderColor:{type:String,default:""},position:{type:Object,default:()=>({})},hide:{type:Boolean,default:!1}}},s=(i(270),i(11)),o=Object(s.a)(a,(function(){var e=this._self._c;return e("div",{staticClass:"base-loader",style:{...this.position,"--loader-color":this.loaderColor}},[this.hide?this._e():e("svg",{staticClass:"base-loader-circular"},[e("circle",{staticClass:"base-loader-path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"4","stroke-miterlimit":"10"}})])])}),[],!1,null,"46e8ae7c",null);t.default=o.exports},281:function(e,t,i){},300:function(e,t,i){"use strict";i(281)},379:function(e,t,i){"use strict";i.r(t);var a=i(275),s=i(248),o={name:"BaseMedia",components:{BaseLoader:a.default,BaseButton:()=>Promise.all([i.e(0),i.e(5)]).then(i.bind(null,259)),BaseHlsVideo:()=>Promise.all([i.e(0),i.e(7),i.e(41)]).then(i.bind(null,935))},mixins:[s.a],props:{mediaUrl:{type:String,default:""},mediaPosterUrl:{type:String,default:""},displayName:{type:String,default:""},downloadUrl:{type:String,default:""},mediaType:{type:String,default:"",validator:e=>["image","video","audio","pdf",""].includes(e)},displaySize:{type:Object,default:()=>({})},allowDownload:{type:Boolean,default:!0},infoTexts:{type:Object,default:()=>({download:"Download",view:"View"})},orientation:{type:Number,default:0},previews:{type:Array,default:()=>[]},additionalInfo:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1},currentSlideInfo:{type:String,default:""},hlsStartLevel:{type:Number,default:void 0}},data:()=>({displayImage:!0,isMobile:!1,footerHeight:null}),computed:{fileType(){if(this.mediaType)return this.mediaType;const e=this.fileEnding;return["png","gif","jpeg","jpg"].includes(e.toLowerCase())?"image":["mp4","m3u8","ogg"].includes(e.toLowerCase())?"video":["mp3","wav","mpeg"].includes(e.toLowerCase())?"audio":["pdf"].includes(e.toLowerCase())?"document":""},fileName(){const e=this.sourceUrl.match(/([^/]+)$/);return e?decodeURI(e[1]):""},fileEnding(){const e=this.sourceUrl.match(/\w+\.(\w{2,4})$/);return e?e[1]:""},formatNotSupported(){return!this.fileType},imageSourceSet(){return this.previews.length?this.previews.map(e=>Object.keys(e).map(t=>`${e[t]} ${t}`)).join(", "):""},sourceUrl(){const e=this.previews.length-1;return this.previews&&this.previews[e]?Object.values(this.previews[e])[0]:this.mediaUrl}},mounted(){this.isMobile=window.innerWidth<=640,this.setFooterHeight(),this.resizeObserver().observe(document.body)},beforeDestroy(){this.resizeObserver().unobserve(document.body)},methods:{download(){(this.allowDownload||!this.allowDownload&&""===this.fileType)&&this.$emit("download",{url:this.downloadUrl||this.mediaUrl,name:this.fileName})},openPdf(){window.open(this.mediaUrl)},setFooterHeight(){this.$refs.footer&&(this.footerHeight=this.$refs.footer.offsetHeight)},resizeObserver(){return new ResizeObserver(this.throttle(()=>this.setFooterHeight(),500))},throttle(e,t){let i=0;return(...a)=>{clearTimeout(i),i=setTimeout(()=>e.apply(this,a),t)}}}},r=(i(300),i(11)),n=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-media-preview-image-stage",style:{"--footer-height":e.footerHeight+"px"}},[e.displayImage&&"image"===e.fileType?t("div",{staticClass:"base-media-preview-preloader"},[t("base-loader",{staticClass:"base-media-preview-preloader-loader"})],1):e._e(),e._v(" "),e.displayImage&&"image"===e.fileType?t("img",{class:["swiper-lazy","base-media-preview-image","base-media-preview-rotation-"+e.orientation.toString()],style:e.displaySize,attrs:{"data-srcset":e.imageSourceSet,"data-src":e.sourceUrl},on:{error:function(t){e.displayImage=!1}}}):"image"!==e.fileType||e.displayImage?"video"===e.fileType?t("base-hls-video",{ref:"baseMediaVideo",staticClass:"base-media-preview-image base-media-preview-video",attrs:{"display-size":e.displaySize,"media-url":e.mediaUrl,"media-poster-url":e.mediaPosterUrl,autoplay:e.autoplay,"hls-start-level":e.hlsStartLevel}}):"audio"===e.fileType?t("audio",{ref:"baseMediaAudio",staticClass:"base-media-preview__audio",attrs:{controls:""}},[e._v("\n    Your browser does not support the audio tag.\n    "),t("source",{attrs:{src:e.mediaUrl,type:"audio/mpeg"}})]):t("div",{staticClass:"base-media-preview-not-supported base-media-preview-error"},[t("p",{staticClass:"base-media-preview-not-supported-file-name"},[e._v("\n      "+e._s(e.fileName)+"\n    ")]),e._v(" "),t("div",{staticClass:"base-media-preview-not-supported-buttons"},[e.allowDownload||!e.allowDownload&&""===e.fileType?t("BaseButton",{staticClass:"base-media-preview__button base-media-preview-not-supported-button",attrs:{text:e.getI18nTerm(e.infoTexts.download),icon:"download","icon-position":"right","icon-size":"large"},on:{clicked:e.download}}):e._e(),e._v(" "),!e.isMobile&&"pdf"===e.fileEnding||!e.allowDownload&&"pdf"===e.fileEnding?t("BaseButton",{staticClass:"base-media-preview__button base-media-preview-not-supported-button",attrs:{text:e.getI18nTerm(e.infoTexts.view),icon:"eye","icon-position":"right","icon-size":"large"},on:{clicked:function(t){return e.openPdf()}}}):e._e()],1),e._v(" "),e._l(e.additionalInfo,(function(i){return t("p",{key:i,staticClass:"base-media-preview__not-supported-additional"},[e._v("\n      "+e._s(i)+"\n    ")])}))],2):t("div",{staticClass:"base-media-preview-not-supported base-media-preview-error"},[t("p",{staticClass:"base-media-preview-not-supported-file-name"},[e._v("\n      An error occurred displaying this image.\n    ")])]),e._v(" "),t("div",{ref:"footer",staticClass:"base-media-preview-info"},[t("div",{staticClass:"base-media-preview__info__col base-media-preview__info__col1 base-media-preview__info-text-wrapper"},[t("p",{staticClass:"base-media-preview-info-text"},[e._v("\n        "+e._s(e.displayName)+"\n      ")]),e._v(" "),e.additionalInfo.length?e._l(e.additionalInfo,(function(i){return t("p",{key:i,staticClass:"base-media-preview__info-text-additional"},[e._v("\n          "+e._s(i)+"\n        ")])})):e._e()],2),e._v(" "),e.currentSlideInfo?t("div",{staticClass:"base-media-preview__info__col base-media-preview__info__col2",attrs:{"aria-hidden":"true"}},[t("p",[e._v("\n        "+e._s(e.currentSlideInfo)+"\n      ")])]):e._e(),e._v(" "),e.allowDownload?t("div",{staticClass:"base-media-preview__info__col base-media-preview__info__col3"},[t("BaseButton",{staticClass:"base-media-preview__button",attrs:{text:e.infoTexts.download,icon:"download","icon-position":"right","icon-size":"large"},on:{clicked:e.download}})],1):e._e()])],1)}),[],!1,null,"1a14cd68",null);t.default=n.exports}}]);