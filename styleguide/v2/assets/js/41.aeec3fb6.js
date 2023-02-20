(window.webpackJsonp=window.webpackJsonp||[]).push([[41,1],{242:function(t,e,i){},243:function(t,e,i){"use strict";i.r(e);i(93);var s={name:"BaseIcon",props:{name:{type:String,default:null,validator:t=>["add-existing-collection","add-existing-object","add-new-collection","add-new-object","archive-arrow","archive-empty","archive-sheets","arrow-left","attachment","attention","audio-object","calendar-many","calendar-number","camera","check-mark","clock","collection","download","drag-lines","drag-n-drop","drop-down","duplicate","edit","eye-hide","eye","file-object","forbidden","home","image-object","information","licence","logo","magnifier","next","options-menu","people","play","plus","prev","print","refresh","remove","save-file","share","sort","subscribe","success","text","unsubscribe","video-object","waste-bin"].includes(t)},title:{type:String,default:""},desc:{type:String,default:""}},data:()=>({baseIcons:null}),computed:{icon(){return`${this.baseIcons}#${this.name}`},id(){return this._uid},ariaAttribute(){const t=[];return this.title&&t.push("title_"+this.id),this.desc&&t.push("desc_"+this.id),t.join(" ")}},mounted(){window.base_ui_icons?this.baseIcons=window.base_ui_icons:this.baseIcons="/base-ui-icons.svg"}},a=(i(244),i(11)),o=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("svg",{staticClass:"base-icon",attrs:{"aria-labelledby":!(!t.title&&!t.desc)&&t.ariaAttribute}},[t.title?e("title",{attrs:{id:"title_"+t.id}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.desc?e("desc",{attrs:{id:"desc_"+t.id}},[t._v(t._s(t.desc))]):t._e(),t._v(" "),t.baseIcons?e("use",{attrs:{href:t.icon}}):t._e()])}),[],!1,null,"33254aaa",null);e.default=o.exports},244:function(t,e,i){"use strict";i(242)},279:function(t,e,i){},297:function(t,e,i){"use strict";i(279)},935:function(t,e,i){"use strict";i.r(e);var s=i(335),a=i.n(s),o=i(243),n=i(248),d={name:"BaseHlsVideo",components:{BaseIcon:o.default},mixins:[n.a],props:{mediaUrl:{type:String,default:""},mediaPosterUrl:{type:String,default:""},displaySize:{type:Object,default:()=>({height:"720px",width:"1280px"})},autoplay:{type:Boolean,default:!1},buttonTitle:{type:String,default:"Play"},hlsStartLevel:{type:Number,default:void 0}},data:()=>({hsl:()=>{},video:null,playButton:!0}),mounted(){this.video=this.$refs.videoPlayer,this.autoplay&&this.play()},destroyed(){this.hls&&this.hls.destroy()},methods:{init(){this.video&&(a.a.isSupported()?this.hls||(this.hls=new a.a({startLevel:this.hlsStartLevel}),this.hls.loadSource(this.mediaUrl),this.hls.attachMedia(this.video),this.hls.on(a.a.Events.MANIFEST_PARSED,()=>{this.play(),this.playButton=!1,this.video.controls=!0,this.video.focus()})):(this.video.canPlayType("application/vnd.apple.mpegurl")||"maybe"===this.video.canPlayType("application/vnd.apple.mpegurl"))&&(this.hls=!1,this.video.src=this.mediaUrl,this.video.addEventListener("loadedmetadata",()=>{this.video.play(),this.video.focus()})),this.video.addEventListener("pause",()=>{this.playButton=!0}),this.video.addEventListener("play",()=>{this.playButton=!1}))},play(){if(this.video){if(this.hls||this.video.src)return void this.video.play();this.init()}},pause(){this.video&&this.video.pause()}}},l=(i(297),i(11)),r=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-media-video"},[t.playButton?e("button",{ref:"playButton",staticClass:"base-media-video__control",attrs:{title:t.getI18nTerm(t.buttonTitle)+" Video"},on:{click:t.play}},[e("base-icon",{staticClass:"base-media-video__icon",attrs:{name:"play"}})],1):t._e(),t._v(" "),e("video",{ref:"videoPlayer",staticClass:"base-media-video__video",style:t.displaySize,attrs:{poster:t.mediaPosterUrl,tabindex:t.playButton?"-1":"1"}},[t._v("\n    Your browser does not support the video tag.\n  ")])])}),[],!1,null,"41f6ccba",null);e.default=r.exports}}]);