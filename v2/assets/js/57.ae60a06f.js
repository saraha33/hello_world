(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{284:function(e,t,n){},303:function(e,t,n){"use strict";n(284)},937:function(e,t,n){"use strict";n.r(t);var a={name:"BasePagination",components:{BaseIcon:n(243).default},model:{prop:"current",event:"set-page"},props:{total:{type:Number,default:null},current:{type:Number,default:1},useLinkElement:{type:[String,Boolean],default:!1,validator:e=>"boolean"==typeof e&&!e||"string"==typeof e&&e}},data(){return{active:this.current,start:null,end:null,subsetNumber:7,maxNumbers:10,resizeObserver:null}},computed:{subset(){const e=this.start+this.subsetNumber>this.total?this.total-this.subsetNumber+1:this.start;return Array.from({length:this.subsetNumber},(t,n)=>n+e)},numberElement(){return this.useLinkElement?this.useLinkElement:"div"}},watch:{$route(e){this.useLinkElement&&e&&e.query&&e.query.page&&e.query.page!==this.active&&(this.active=Number(e.query.page))},active(e){this.current!==e&&this.$emit("set-page",e),this.setStartEnd()},current(e){this.active=e}},mounted(){this.setStartEnd(),this.initObserver()},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},methods:{initObserver(){const e=new ResizeObserver(()=>{this.setStartEnd()});e.observe(this.$refs.pagination),this.resizeObserver=e},setStartEnd(){const e=this.$refs.pagination.clientWidth;e<400?(this.subsetNumber=1,this.maxNumbers=5):e<550?(this.subsetNumber=3,this.maxNumbers=8):e<700?(this.subsetNumber=5,this.maxNumbers=8):(this.subsetNumber=7,this.maxNumbers=10),this.start=this.active-this.subsetNumber/2>0?this.active-Math.floor(this.subsetNumber/2):1,this.end=this.active+this.subsetNumber/2<this.total?this.active+Math.floor(this.subsetNumber/2):this.total},setActivePage(e){this.useLinkElement||(this.active=e)},getLinkPath(e){return this.useLinkElement&&this.$route?{path:this.$route.fullPath,query:{page:e}}:""}}},i=(n(303),n(11)),s=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("nav",{ref:"pagination",staticClass:"base-pagination"},[t(e.numberElement,{tag:"component",class:["base-pagination__arrow",{"base-pagination__arrow-icon-inactive":e.active<=1}],attrs:{to:!!e.useLinkElement&&e.getLinkPath(e.active-1>0?e.active-1:1),"aria-disabled":e.active<=1,tabindex:e.active<=1?-1:0,"aria-label":"Go to previous page"},on:{click:function(t){t.preventDefault(),e.active-1>0&&!e.useLinkElement&&e.setActivePage(e.active-1)},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.active-1>0&&!e.useLinkElement&&e.setActivePage(e.active-1)}},nativeOn:{click:function(t){t.preventDefault(),e.active-1>0&&!e.useLinkElement&&e.setActivePage(e.active-1)}}},[t("base-icon",{staticClass:"base-pagination__arrow-icon base-pagination__arrow-icon-left",attrs:{name:"arrow-left"}})],1),e._v(" "),t("div",{staticClass:"base-pagination__row"},[e.total<=e.maxNumbers?e._l(e.total,(function(n){return t(e.numberElement,{key:n,tag:"component",class:["base-pagination__number",{"base-pagination__number-active":e.active===n}],attrs:{to:!!e.useLinkElement&&e.getLinkPath(n),tabindex:!e.useLinkElement&&0,"aria-current":e.active===n&&"true","aria-label":`${e.active===n?"Current Page, Page":"Go to page"} ${n}`},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setActivePage(n)},click:function(t){return t.preventDefault(),e.setActivePage(n)}},nativeOn:{click:function(t){return t.preventDefault(),e.setActivePage(n)}}},[e._v("\n        "+e._s(n)+"\n      ")])})):[1!==e.start?t(e.numberElement,{tag:"component",class:["base-pagination__number",{"base-pagination__number-active":1===e.active}],attrs:{to:!!e.useLinkElement&&e.getLinkPath(1),tabindex:!e.useLinkElement&&0,"aria-current":1===e.active&&"true","aria-label":(1===e.active?"Current Page, Page":"Go to page")+" 1"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setActivePage(1)},click:function(t){return t.preventDefault(),e.setActivePage(1)}},nativeOn:{click:function(t){return t.preventDefault(),e.setActivePage(1)}}},[e._v("\n        "+e._s(1)+"\n      ")]):e._e(),e._v(" "),e.start>2?t("span",{staticClass:"base-pagination__more"},[e._v("⋯")]):e._e(),e._v(" "),e._l(e.subset,(function(n){return t(e.numberElement,{key:n,tag:"component",class:["base-pagination__number",{"base-pagination__number-active":e.active===n}],attrs:{to:!!e.useLinkElement&&e.getLinkPath(n),tabindex:!e.useLinkElement&&0,"aria-current":e.active===n&&"true","aria-label":`${e.active===n?"Current Page, Page":"Go to page"} ${n}`},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setActivePage(n)},click:function(t){return t.preventDefault(),e.setActivePage(n)}},nativeOn:{click:function(t){return t.preventDefault(),e.setActivePage(n)}}},[e._v("\n        "+e._s(n)+"\n      ")])})),e._v(" "),e.end<e.total-1&&e.end!==e.total-1?t("span",{staticClass:"base-pagination__more"},[e._v("⋯")]):e._e(),e._v(" "),e.end-1<e.total-1&&e.end-1!=e.total-1?t(e.numberElement,{tag:"component",class:["base-pagination__number",{"base-pagination__number-active":e.active===e.total}],attrs:{to:!!e.useLinkElement&&e.getLinkPath(e.total),tabindex:!e.useLinkElement&&0,"aria-current":e.active===e.total&&"true","aria-label":`${e.active===e.total?"Current Page, Page":"Go to page"} ${e.total}`},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setActivePage(e.total)},click:function(t){return t.preventDefault(),e.setActivePage(e.total)}},nativeOn:{click:function(t){return t.preventDefault(),e.setActivePage(e.total)}}},[e._v("\n        "+e._s(e.total)+"\n      ")]):e._e()]],2),e._v(" "),t(e.numberElement,{tag:"component",class:["base-pagination__arrow",{"base-pagination__arrow-icon-inactive":e.active>=e.total}],attrs:{to:!!e.useLinkElement&&e.getLinkPath(e.active+1<=e.total?e.active+1:e.total),"aria-disabled":e.active>=e.total,tabindex:e.active>=e.total?-1:0,"aria-label":"Go to next Page"},on:{click:function(t){t.preventDefault(),e.active+1<=e.total&&!e.useLinkElement&&e.setActivePage(e.active+1)},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.active+1<=e.total&&!e.useLinkElement&&e.setActivePage(e.active+1)}},nativeOn:{click:function(t){t.preventDefault(),e.active+1<=e.total&&!e.useLinkElement&&e.setActivePage(e.active+1)}}},[t("base-icon",{staticClass:"base-pagination__arrow-icon base-pagination__arrow-icon-right",attrs:{name:"arrow-left"}})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);