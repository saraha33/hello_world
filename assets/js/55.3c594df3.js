(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{265:function(e,t,o){},276:function(e,t,o){"use strict";o(265)},290:function(e,t,o){"use strict";o.r(t);var a={name:"BaseBox",props:{renderElementAs:{type:String,default:"div"},boxSize:{type:Object,default:()=>({width:"200px"})},boxRatio:{type:String,default:"100"},boxHover:{type:Boolean,default:!0},boxShadowSize:{type:String,default:"small",validator:e=>["small","large"].includes(e)},disabled:{type:Boolean,default:!1},additionalAttributes:{type:Object,default:()=>({})}},methods:{clicked(e){this.$emit("clicked",e)}}},i=(o(276),o(11)),l=Object(i.a)(a,(function(){var e=this;return(0,e._self._c)(e.renderElementAs,e._b({tag:"compontent",class:["base-box","base-box-"+e.$props.boxRatio,"base-box-shadow-"+e.boxShadowSize,{"base-box-hover":e.boxHover&&!e.disabled}],style:e.boxSize,attrs:{disabled:e.disabled,type:"button"===e.renderElementAs?"button":""},on:{click:e.clicked}},"compontent",e.additionalAttributes,!1),[e._t("default")],2)}),[],!1,null,"0ef284a3",null);t.default=l.exports}}]);