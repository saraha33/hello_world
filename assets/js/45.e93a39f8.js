(window.webpackJsonp=window.webpackJsonp||[]).push([[45,100,101],{245:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l}));i(92);const n=()=>Math.random().toString(36).substr(2,9),s=(t,e)=>t.split(".").reduce((t,e)=>t[e],e),a=t=>{const e=t.replace(/,? [0-9-]+/g,"");if(e.includes(",")){const t=e.split(", ");return[t[0],t.splice(1).join()]}return[e.split(" ").pop(),e]},l=(t,e="",i=!1,n=null)=>t.sort((t,s)=>{let l=t,p=s;if(e&&(l=l[e],p=p[e]),n&&(l=n(l),p=n(p)),i){let t="",e="";[l,t]=a(l),[p,e]=a(p),l.toLowerCase()===p.toLowerCase()&&(l=t,p=e)}return l.toLowerCase()>p.toLowerCase()?1:-1})},346:function(t,e,i){},347:function(t,e,i){},427:function(t,e,i){"use strict";i(346)},428:function(t,e,i){"use strict";i(347)},962:function(t,e,i){"use strict";i.r(e);var n=i(245),s={name:"BaseSearch",components:{BaseIcon:()=>Promise.all([i.e(0),i.e(1)]).then(i.bind(null,243)),BaseChipsInputField:()=>Promise.all([i.e(0),i.e(4),i.e(8)]).then(i.bind(null,951)),BaseInput:()=>Promise.all([i.e(0),i.e(33)]).then(i.bind(null,273)),BaseDateInput:()=>Promise.all([i.e(0),i.e(10),i.e(9)]).then(i.bind(null,952))},model:{prop:"input",event:"input"},props:{input:{type:[String,Object],default:""},selectedChips:{type:Array,default:()=>[]},placeholder:{type:[String,Object],default:"Search your works and events"},label:{type:String,default:"Search"},showPreInputIcon:{type:Boolean,default:!0},dropDownListId:{type:String,default:""},id:{type:String,default:""},type:{type:String,default:"text",validator:t=>["text","chips","controlled","date","daterange"].includes(t)},linkedListOption:{type:String,default:null},loadable:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},language:{type:String,default:"en",validator:t=>!t||2===t.length},identifierPropertyName:{type:String,default:"id"},labelPropertyName:{type:String,default:"label"},invalid:{type:Boolean,default:!1},showErrorIcon:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},isActive:{type:Boolean,default:!1},setFocusOnActive:{type:Boolean,default:!0},assistiveText:{type:Object,default:()=>({})},dateFieldDelay:{type:Number,default:0}},data:()=>({isActiveInt:!1,textInputInt:"",dateInputInt:"",selectedChipsInt:[]}),computed:{inputComponent(){return"text"===this.type?"BaseInput":this.isFieldTypeChips?"BaseChipsInputField":"date"===this.type||"daterange"===this.type?"BaseDateInput":null},inputInt:{set(t){"date"===this.type?(this.dateInputInt=t,this.$emit("input",this.dateInputInt)):"daterange"===this.type?(this.dateInputInt={...t},this.$emit("input",this.dateInputInt)):(this.textInputInt=t,this.$emit("input",this.textInputInt))},get(){return"date"===this.type?this.dateInputInt.date_from||this.dateInputInt:"daterange"===this.type?"object"==typeof this.dateInputInt?this.dateInputInt:{date_from:this.dateInputInt,date_to:""}:this.textInputInt}},dateFieldType(){return"date"===this.type?"single":"daterange"===this.type&&"daterange"},languageInt(){return"date"===this.type||"daterange"===this.type?["de","en","fr"].includes(this.language)?this.language:"en":this.language},isFieldTypeChips(){return"chips"===this.type||"controlled"===this.type},idInt(){return this.id||Object(n.a)()},placeholderInt(){return"string"==typeof this.placeholder?this.placeholder:this.type.includes("date")?this.placeholder.date:"controlled"===this.type?this.placeholder.chips:this.placeholder[this.type]}},watch:{input:{handler(t){t?t!==this.inputInt&&(this.inputInt=t):(this.textInputInt="",this.dateInputInt="daterange"===this.type?{date_from:"",date_to:""}:"")},immediate:!0},inputInt(t){t!==this.input&&this.$emit("input",t)},selectedChips:{handler(t){JSON.stringify(t)!==JSON.stringify(this.selectedChipsInt)&&(this.selectedChipsInt=[...t])},immediate:!0},selectedChipsInt(t){JSON.stringify(t)!==JSON.stringify(this.selectedChips)&&this.$emit("update:selected-chips",t)},isActive:{handler(t){t!==this.isActiveInt&&(this.isActiveInt=t)},immediate:!0},isActiveInt(t){t!==this.isActive&&this.$emit("update:is-active",t)}}},a=(i(427),i(428),i(11)),l=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-search"},[e(t.inputComponent,t._g({tag:"component",staticClass:"base-search__input",attrs:{id:t.idInt,"selected-list":t.selectedChipsInt,"is-active":t.isActiveInt,type:t.dateFieldType,"show-label":!1,"use-form-field-styling":!1,"show-input-border":!1,label:t.label,placeholder:t.placeholderInt,"linked-list-option":t.linkedListOption,"drop-down-list-id":t.dropDownListId||(!1).toString(),"is-loading":t.isLoading,clearable:t.clearable,invalid:t.invalid,"show-error-icon":t.showErrorIcon,language:t.languageInt,"allow-unknown-entries":"chips"===t.type,loadable:t.loadable,"chips-editable":"chips"===t.type,"label-property-name":!!t.isFieldTypeChips&&t.labelPropertyName,"identifier-property-name":!!t.isFieldTypeChips&&t.identifierPropertyName,"set-focus-on-active":t.setFocusOnActive,"add-selected-entry-directly":!0,"assistive-text":!!t.isFieldTypeChips&&t.assistiveText,"is-active-delay":t.dateFieldDelay,"input-class":"base-search__input-field","field-type":"search"},on:{"update:selectedList":function(e){t.selectedChipsInt=e},"update:selected-list":function(e){t.selectedChipsInt=e},"update:isActive":function(e){t.isActiveInt=e},"update:is-active":function(e){t.isActiveInt=e}},scopedSlots:t._u([{key:"pre-input-field",fn:function(){return[t._t("pre-input-field")]},proxy:!0},{key:"input-field-addition-before",fn:function(){return[t._t("input-field-addition-before")]},proxy:!0},{key:"input-field-inline-before",fn:function(){return[e("div",{class:[t.dateFieldType&&t.showPreInputIcon?"base-search__spacing-date":"base-search__spacing"]}),t._v(" "),t._t("input-field-inline-before",(function(){return[t.showPreInputIcon?e("BaseIcon",{class:["base-search__magnifier-icon",{"base-search__magnifier-icon__date":!!t.dateFieldType},{"base-search__magnifier-icon__active":t.isActiveInt}],attrs:{name:"magnifier"}}):t._e()]}))]},proxy:!0},{key:"input-field-addition-after",fn:function(){return[t._t("input-field-addition-after")]},proxy:!0},{key:"post-input-field",fn:function(){return[t._t("post-input-field"),t._v(" "),e("div",{class:{"base-search__spacing":t.dateFieldType}})]},proxy:!0},{key:"error-icon",fn:function(){return[t._t("error-icon")]},proxy:!0},{key:"remove-icon",fn:function(){return[t._t("remove-icon")]},proxy:!0},{key:"below-input",fn:function(){return[t._t("below-input")]},proxy:!0}],null,!0),model:{value:t.inputInt,callback:function(e){t.inputInt=e},expression:"inputInt"}},t.$listeners))],1)}),[],!1,null,"4bf228dc",null);e.default=l.exports}}]);