(window.webpackJsonp=window.webpackJsonp||[]).push([[41,3,47,48,79,80,134,135,136,137,138,139,140],{242:function(e,t,i){},243:function(e,t,i){"use strict";i.r(t);i(93);var n={name:"BaseIcon",props:{name:{type:String,default:null,validator:e=>["add-existing-collection","add-existing-object","add-new-collection","add-new-object","archive-arrow","archive-empty","archive-sheets","arrow-left","attachment","attention","audio-object","calendar-many","calendar-number","camera","check-mark","clock","collection","download","drag-lines","drag-n-drop","drop-down","duplicate","edit","eye-hide","eye","file-object","forbidden","home","image-object","information","licence","logo","magnifier","next","options-menu","people","play","plus","prev","print","refresh","remove","save-file","share","sort","subscribe","success","text","unsubscribe","video-object","waste-bin"].includes(e)},title:{type:String,default:""},desc:{type:String,default:""}},data:()=>({baseIcons:null}),computed:{icon(){return`${this.baseIcons}#${this.name}`},id(){return this._uid},ariaAttribute(){const e=[];return this.title&&e.push("title_"+this.id),this.desc&&e.push("desc_"+this.id),e.join(" ")}},mounted(){window.base_ui_icons?this.baseIcons=window.base_ui_icons:this.baseIcons="/base-ui-icons.svg"}},a=(i(244),i(11)),s=Object(a.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{staticClass:"base-icon",attrs:{"aria-labelledby":!(!e.title&&!e.desc)&&e.ariaAttribute}},[e.title?t("title",{attrs:{id:"title_"+e.id}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.desc?t("desc",{attrs:{id:"desc_"+e.id}},[e._v(e._s(e.desc))]):e._e(),e._v(" "),e.baseIcons?t("use",{attrs:{href:e.icon}}):e._e()])}),[],!1,null,"33254aaa",null);t.default=s.exports},244:function(e,t,i){"use strict";i(242)},245:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r}));i(92);const n=()=>Math.random().toString(36).substr(2,9),a=(e,t)=>e.split(".").reduce((e,t)=>e[t],t),s=e=>{const t=e.replace(/,? [0-9-]+/g,"");if(t.includes(",")){const e=t.split(", ");return[e[0],e.splice(1).join()]}return[t.split(" ").pop(),t]},r=(e,t="",i=!1,n=null)=>e.sort((e,a)=>{let r=e,u=a;if(t&&(r=r[t],u=u[t]),n&&(r=n(r),u=n(u)),i){let e="",t="";[r,e]=s(r),[u,t]=s(u),r.toLowerCase()===u.toLowerCase()&&(r=e,u=t)}return r.toLowerCase()>u.toLowerCase()?1:-1})},246:function(e,t,i){"use strict";i(92);t.a={computed:{hasI18n(){return Boolean(this.$i18n)}},methods:{getI18nTerm(e,t=-1,i={}){if(this.hasI18n&&this.$te(e))return t>=0?this.$tc(e,t,i):this.$t(e,i);return e.split(".").pop()||e},setLangLabels(e,t){return t.reduce((t,i)=>(this.$set(t,i,this.$i18n?this.$t(e,i):e.split(".").pop()),t),{})},getLangLabel(e,t=!1){const i=this.hasI18n?this.language||this.$i18n.locale:this.language;if("string"==typeof e)return e;if(e&&i&&e[i])return e[i];if(e&&i&&t){const t=Object.keys(e).find(t=>!!e[t]);return e[t]||e[i]||""}return e}}}},252:function(e,t){function i(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,a){if(!i(t))return;function s(t){if(a.context){var i=t.path||t.composedPath&&t.composedPath();i&&i.length>0&&i.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var i=0,n=t.length;i<n;i++)try{if(e.contains(t[i]))return!0;if(t[i].contains(e))return!1}catch(e){return!1}return!1}(a.context.popupItem,i)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:s,callback:t.value};const r="ontouchstart"in document.documentElement?"touchstart":"click";!n(a)&&document.addEventListener(r,s)},update:function(e,t){i(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,i){const a="ontouchstart"in document.documentElement?"touchstart":"click";!n(i)&&e.__vueClickOutside__&&document.removeEventListener(a,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},255:function(e,t,i){},261:function(e,t,i){"use strict";i(255)},266:function(e,t,i){"use strict";i.r(t);var n=i(252),a=i.n(n),s=i(243),r=i(245),u=i(246),l={name:"BaseInput",directives:{ClickOutside:a.a},components:{BaseIcon:s.default,BaseLoader:()=>Promise.all([i.e(0),i.e(4)]).then(i.bind(null,274))},mixins:[u.a],model:{prop:"input",event:"input"},props:{input:{type:[String,Number],default:""},label:{type:String,required:!0},showLabel:{type:Boolean,default:!0},id:{type:String,default:""},placeholder:{type:String,default:"Enter Text Here"},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{type:String,default:""},showErrorIcon:{type:Boolean,default:!0},fieldType:{type:String,default:"text",validator:e=>["text","number","password","email","url","search"].includes(e)},dropDownListId:{type:String,default:""},linkedListOption:{type:String,default:null},hideInputField:{type:Boolean,default:!1},isActive:{type:Boolean,default:null},showInputBorder:{type:Boolean,default:!0},useFormFieldStyling:{type:Boolean,default:!0},clearable:{type:Boolean,default:!1},loadable:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},useFadeOut:{type:Boolean,default:!0},inputClass:{type:String,default:""},language:{type:String,default:"",validator:e=>!e||2===e.length},setFocusOnActive:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:()=>({isActiveInt:!1,inputInt:""}),computed:{idInt(){return this.id||Object(r.a)()},showLabelRow(){const e=this.$slots["label-addition"],t=!!e&&!!e.length&&e.some(e=>e.tag);return this.showLabel||t},showRemoveIcon(){return this.clearable&&!!this.inputInt},inputListeners(){return{...this.$listeners,keydown:e=>{"number"===this.fieldType&&Number.isNaN(Number(e.key))&&!["e","ArrowLeft","ArrowRight","Backspace","Delete","Tab"].includes(e.key)?e.preventDefault():this.$emit("keydown",e)},input:e=>{this.$emit("input","number"===this.fieldType?Number(e.target.value):e.target.value)}}},inputElement(){if(window){if(this.$refs&&this.$refs.input)return this.$refs.input;const e=document.getElementById(this.idInt);if(e)return e;console.warn("BaseInput: you did not assign the same id to the BaseInputComponent and the input element!")}return null}},watch:{input:{handler(e){e!==this.inputInt&&(this.inputInt=e)},immediate:!0},inputInt(e){e!==this.input&&this.$emit("input",e)},isActive(e){e!==this.isActiveInt&&(this.isActiveInt=e)},isActiveInt(e){this.inputElement&&e&&this.setFocusOnActive&&this.inputElement.focus(),e!==this.isActive&&this.$emit("update:is-active",e)}},methods:{blurInput(e){this.setFieldState(!1),this.$emit("keydown",e)},clickedInside(e){this.disabled||(this.setFieldState(!0),this.$emit("click-input-field",e))},clickedOutsideInput(e){this.setFieldState(!1),this.$emit("clicked-outside",e)},removeInput(){this.inputInt="",this.inputElement&&this.inputElement.focus()},setFieldState(e){this.isActiveInt=e},handleInputTab(e){this.showRemoveIcon&&!e.shiftKey||this.setFieldState(!1),this.$emit("keydown",e)}}},o=(i(261),i(11)),d=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-input"},[t("div",{class:["base-input__label-row",{hide:!e.showLabelRow}]},[t("label",{class:["base-input__label",{hide:!e.showLabel}],attrs:{for:e.idInt}},[e._v("\n      "+e._s(e.getLangLabel(e.label))+"\n    ")]),e._v(" "),t("div",{staticClass:"base-input__label-spacer"}),e._v(" "),e._t("label-addition")],2),e._v(" "),t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutsideInput,expression:"clickedOutsideInput"}],class:["base-input__input-frame",{"base-input__input-frame__border":e.showInputBorder},{"base-input__input-frame__disabled":e.disabled},{"base-input__input-frame__invalid":e.invalid}],on:{focusin:e.clickedInside,click:e.clickedInside}},[t("div",{class:["base-input__input-container",{"base-input__input-container__is-active":e.isActiveInt&&e.useFormFieldStyling}]},[e._t("pre-input-field"),e._v(" "),t("div",{class:["base-input__input-line-container",{"base-input__input-line-container__wrap":!e.hideInputField}]},[e._t("input-field-addition-before"),e._v(" "),t("div",{staticClass:"base-input__input-line"},[e._t("input-field-inline-before"),e._v(" "),t("div",{class:["base-input__input-wrapper",{"base-input__input-wrapper__fade-out":e.useFadeOut&&!e.isActiveInt&&!e.hideInputField}]},[e._t("input",(function(){return["checkbox"===e.fieldType?t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.inputInt,expression:"inputInt"}],ref:"input",class:[e.inputClass,"base-input__input",{"base-input__input__hidden":e.hideInputField}],attrs:{id:e.idInt,placeholder:e.placeholder,list:e.dropDownListId||!1,disabled:e.disabled,"aria-disabled":e.disabled.toString(),"aria-activedescendant":e.linkedListOption,"aria-describedby":e.idInt,"aria-required":e.required.toString(),required:e.required.toString(),"aria-invalid":e.invalid.toString(),autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.inputInt)?e._i(e.inputInt,null)>-1:e.inputInt},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleInputTab.apply(null,arguments)},change:function(t){var i=e.inputInt,n=t.target,a=!!n.checked;if(Array.isArray(i)){var s=e._i(i,null);n.checked?s<0&&(e.inputInt=i.concat([null])):s>-1&&(e.inputInt=i.slice(0,s).concat(i.slice(s+1)))}else e.inputInt=a}}},e.inputListeners)):"radio"===e.fieldType?t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.inputInt,expression:"inputInt"}],ref:"input",class:[e.inputClass,"base-input__input",{"base-input__input__hidden":e.hideInputField}],attrs:{id:e.idInt,placeholder:e.placeholder,list:e.dropDownListId||!1,disabled:e.disabled,"aria-disabled":e.disabled.toString(),"aria-activedescendant":e.linkedListOption,"aria-describedby":e.idInt,"aria-required":e.required.toString(),required:e.required.toString(),"aria-invalid":e.invalid.toString(),autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.inputInt,null)},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleInputTab.apply(null,arguments)},change:function(t){e.inputInt=null}}},e.inputListeners)):t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.inputInt,expression:"inputInt"}],ref:"input",class:[e.inputClass,"base-input__input",{"base-input__input__hidden":e.hideInputField}],attrs:{id:e.idInt,placeholder:e.placeholder,list:e.dropDownListId||!1,disabled:e.disabled,"aria-disabled":e.disabled.toString(),"aria-activedescendant":e.linkedListOption,"aria-describedby":e.idInt,"aria-required":e.required.toString(),required:e.required.toString(),"aria-invalid":e.invalid.toString(),autocomplete:"off",type:e.fieldType},domProps:{value:e.inputInt},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleInputTab.apply(null,arguments)},input:function(t){t.target.composing||(e.inputInt=t.target.value)}}},e.inputListeners))]}),null,{id:e.idInt})],2),e._v(" "),e.showRemoveIcon?t("button",{staticClass:"base-input__remove-icon-wrapper",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.blurInput.apply(null,arguments)},click:function(t){return t.stopPropagation(),e.removeInput.apply(null,arguments)}}},[e._t("remove-icon",(function(){return[t("BaseIcon",{staticClass:"base-input__remove-icon",attrs:{name:"remove",title:"Clear input"}})]}))],2):e._e(),e._v(" "),e.loadable?t("div",{staticClass:"base-input__loader"},[t("BaseLoader",{attrs:{hide:!e.isLoading}})],1):e._e(),e._v(" "),e._t("input-field-addition-after")],2)],2),e._v(" "),e.showErrorIcon&&e.invalid?t("div",{staticClass:"base-input__error-icon-wrapper"},[e._t("error-icon",(function(){return[t("BaseIcon",{staticClass:"base-input__error-icon",attrs:{name:"attention"}})]}))],2):e._e(),e._v(" "),e._t("post-input-field")],2)]),e._v(" "),t("div",[e._t("below-input")],2),e._v(" "),e.invalid&&e.errorMessage?t("div",{staticClass:"base-input__invalid-message"},[e._v("\n    "+e._s(e.getLangLabel(e.errorMessage))+"\n  ")]):e._e()])}),[],!1,null,"66d31d63",null);t.default=d.exports}}]);