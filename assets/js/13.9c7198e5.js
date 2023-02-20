(window.webpackJsonp=window.webpackJsonp||[]).push([[13,102],{256:function(t,e){function i(t){return"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function o(t){return void 0!==t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,e,l){if(!i(e))return;function s(e){if(l.context){var i=e.path||e.composedPath&&e.composedPath();i&&i.length>0&&i.unshift(e.target),t.contains(e.target)||function(t,e){if(!t||!e)return!1;for(var i=0,o=e.length;i<o;i++)try{if(t.contains(e[i]))return!0;if(e[i].contains(t))return!1}catch(t){return!1}return!1}(l.context.popupItem,i)||t.__vueClickOutside__.callback(e)}}t.__vueClickOutside__={handler:s,callback:e.value};const n="ontouchstart"in document.documentElement?"touchstart":"click";!o(l)&&document.addEventListener(n,s)},update:function(t,e){i(e)&&(t.__vueClickOutside__.callback=e.value)},unbind:function(t,e,i){const l="ontouchstart"in document.documentElement?"touchstart":"click";!o(i)&&t.__vueClickOutside__&&document.removeEventListener(l,t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}},338:function(t,e,i){},416:function(t,e,i){"use strict";i(338)},955:function(t,e,i){"use strict";i.r(e);var o=i(256),l={name:"BaseLink",components:{BaseIcon:()=>Promise.all([i.e(0),i.e(1)]).then(i.bind(null,243)),BaseTooltip:()=>Promise.all([i.e(0),i.e(15)]).then(i.bind(null,966)),BaseLoader:()=>Promise.all([i.e(0),i.e(2)]).then(i.bind(null,275))},directives:{ClickOutside:i.n(o).a},props:{renderLinkAs:{type:String,default:"RouterLink"},externalLinkTarget:{type:String,default:"_blank",validator:t=>"_blank"===t||"_self"===t},tooltip:{type:Array,default:()=>[]},tooltipAsync:{type:Array,default:()=>[]},tooltipStyles:{type:Object,default:()=>({})},source:{type:String,default:""},url:{type:String,default:""},value:{type:String,default:""},type:{type:String,default:""},spaceAfter:{type:Boolean,default:!1}},data:()=>({isLoading:!1,scrollResizeTimeout:null,showTooltip:!1}),computed:{vueRouterAvailable(){return!!this.$router},renderAs(){let t="span";return this.hasValidUrl&&(t="a"),this.source&&(t=this.vueRouterAvailable?this.renderLinkAs:"a"),this.source&&this.type&&(t="button"),t},hasValidUrl(){return this.url&&(this.url.match(/^([a-z][a-z0-9+\-.]*:\/\/)/)||this.url.match(/^mailto:/)||this.url.match(/^tel:/))}},watch:{tooltip(t){t&&(this.isLoading=!1,this.showTooltip=!0)}},mounted(){window.addEventListener("scroll",this.scrollResize),window.addEventListener("resize",this.scrollResize)},destroyed(){window.removeEventListener("scroll",this.scrollResize),window.removeEventListener("resize",this.scrollResize)},methods:{chipClicked(){this.$emit("chip-clicked",{source:this.source,type:this.type})},async tooltipClicked(){this.tooltip.length?this.showTooltip=!this.showTooltip:this.tooltipAsync.length&&(this.isLoading=!0,this.$emit("tooltip-clicked",this.tooltipAsync))},closeTooltip(){this.showTooltip&&(this.showTooltip=!1)},scrollResize(){this.scrollResizeTimeout&&(clearTimeout(this.scrollResizeTimeout),this.scrollResizeTimeout=null),this.scrollResizeTimeout=setTimeout(()=>{this.showTooltip&&this.closeTooltip()},100)}}},s=(i(416),i(11)),n=Object(s.a)(l,(function(){var t=this,e=t._self._c;return e(t.renderAs,{directives:[{name:"click-outside",rawName:"v-click-outside",value:()=>t.closeTooltip(),expression:"() => closeTooltip()"}],tag:"component",class:["base-link",{"base-link--external":t.hasValidUrl,"base-link--internal":t.source&&!t.type,"base-link--chip":t.source&&t.type,"base-link--tooltip":t.tooltip.length||t.tooltipAsync.length,"base-link--active":t.showTooltip,"base-link--space-after":t.spaceAfter}],attrs:{tabindex:t.source||t.hasValidUrl||t.source&&t.type||t.tooltip.length?0:null,role:t.tooltip.length?"button":null,href:t.source||t.hasValidUrl?t.source||t.url:null,to:t.vueRouterAvailable&&t.source&&!t.type?"/"+t.source:null,target:t.hasValidUrl&&"_blank"===t.externalLinkTarget?"_blank":null,title:t.source||t.hasValidUrl||t.source&&t.type?t.value:null},on:{click:function(e){!t.source||!t.type||t.chipClicked}}},[t.tooltip.length||t.tooltipAsync.length?t._e():[t._v("\n    "+t._s(t.value)+"\n  ")],t._v(" "),t.tooltip.length&&!t.source||t.tooltipAsync.length&&!t.source?[e("span",{staticClass:"base-link__label",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault(),!t.tooltip.length||t.tooltipClicked},click:t.tooltipClicked}},[t._v("\n      "+t._s(t.value)+"\n      "),e("span",{ref:"icon",staticClass:"base-link__icon"},[e("BaseIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],attrs:{name:"information"}})],1),t._v(" "),t.isLoading?e("span",{staticClass:"base-link__loader"},[t.isLoading?e("BaseLoader"):t._e()],1):t._e()]),t._v(" "),t.showTooltip?e("BaseTooltip",{attrs:{"attach-to":t.$refs.icon,styles:t.tooltipStyles}},[t._t("tooltip",(function(){return[t.tooltip.label?e("span",{staticClass:"base-tooltip__label"},[t._v("\n          "+t._s(t.tooltip.label)+"\n        ")]):t._e(),t._v(" "),t._l(t.tooltip,(function(i,o){return e("div",{key:o,staticClass:"base-tooltip__row"},[t._v("\n          "+t._s(i.label)+":\n          "),i.url?[e("a",{staticClass:"base-link--external",attrs:{href:i.url,title:i.value}},[t._v("\n              "+t._s(i.value)+"\n            ")])]:[t._v(t._s(i.value))]],2)}))]}),{item:t.tooltip})],2):t._e()]:t._e()],2)}),[],!1,null,"c5f61312",null);e.default=n.exports}}]);