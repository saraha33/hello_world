(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1002:function(e,t,i){"use strict";i.r(t);var o={name:"BaseHoverBox",components:{BaseImageBox:i(408).default},props:{title:{type:String,default:"No title"},subtext:{type:String,default:""},showTitle:{type:Boolean,default:!0},boxText:{type:Array,default:()=>[]},imageUrl:{type:String,default:null},description:{type:String,default:null},selectable:{type:Boolean,default:!1},boxSize:{type:Object,default:()=>({width:"212px",height:"212px"})}},data:()=>({boxPosition:{top:0,left:0}}),methods:{setPosition(e){let t=e.layerX,i=e.layerY;const o=parseInt(this.boxSize.width.replace("px",""),10),l=this.$el,n=window.getComputedStyle(l,null).getPropertyValue("margin").replace("px","");e.clientX+3*n+o>window.innerWidth&&(t=e.layerX-o-2*n),e.clientY+2*n+o>window.innerHeight&&(i=e.layerY-o-n),this.boxPosition={top:i+"px",left:t+"px"}}}},l=(i(456),i(11)),n=Object(l.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"base-hover-box",style:[this.boxSize,this.boxPosition]},[e("base-image-box",this._b({},"base-image-box",this.$props,!1))],1)}),[],!1,null,"29568992",null);t.default=n.exports},366:function(e,t,i){},456:function(e,t,i){"use strict";i(366)}}]);