(window.webpackJsonp=window.webpackJsonp||[]).push([[8,1,33,102],{242:function(e,t,i){},243:function(e,t,i){"use strict";i.r(t);i(93);var n={name:"BaseIcon",props:{name:{type:String,default:null,validator:e=>["add-existing-collection","add-existing-object","add-new-collection","add-new-object","archive-arrow","archive-empty","archive-sheets","arrow-left","attachment","attention","audio-object","calendar-many","calendar-number","camera","check-mark","clock","collection","download","drag-lines","drag-n-drop","drop-down","duplicate","edit","eye-hide","eye","file-object","forbidden","home","image-object","information","licence","logo","magnifier","next","options-menu","people","play","plus","prev","print","refresh","remove","save-file","share","sort","subscribe","success","text","unsubscribe","video-object","waste-bin"].includes(e)},title:{type:String,default:""},desc:{type:String,default:""}},data:()=>({baseIcons:null}),computed:{icon(){return`${this.baseIcons}#${this.name}`},id(){return this._uid},ariaAttribute(){const e=[];return this.title&&e.push("title_"+this.id),this.desc&&e.push("desc_"+this.id),e.join(" ")}},mounted(){window.base_ui_icons?this.baseIcons=window.base_ui_icons:this.baseIcons="/base-ui-icons.svg"}},s=(i(244),i(11)),a=Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{staticClass:"base-icon",attrs:{"aria-labelledby":!(!e.title&&!e.desc)&&e.ariaAttribute}},[e.title?t("title",{attrs:{id:"title_"+e.id}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.desc?t("desc",{attrs:{id:"desc_"+e.id}},[e._v(e._s(e.desc))]):e._e(),e._v(" "),e.baseIcons?t("use",{attrs:{href:e.icon}}):e._e()])}),[],!1,null,"33254aaa",null);t.default=a.exports},244:function(e,t,i){"use strict";i(242)},248:function(e,t,i){"use strict";i(92);t.a={computed:{hasI18n(){return Boolean(this.$i18n)}},methods:{getI18nTerm(e,t=-1,i={}){if(this.hasI18n&&this.$te(e))return t>=0?this.$tc(e,t,i):this.$t(e,i);return e.split(".").pop()||e},setLangLabels(e,t){return t.reduce((t,i)=>(this.$set(t,i,this.$i18n?this.$t(e,i):e.split(".").pop()),t),{})},getLangLabel(e,t=!1){const i=this.hasI18n?this.language||this.$i18n.locale:this.language;if("string"==typeof e)return e;if(e&&i&&e[i])return e[i];if(e&&i&&t){const t=Object.keys(e).find(t=>!!e[t]);return e[t]||e[i]||""}return e}}}},256:function(e,t){function i(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,s){if(!i(t))return;function a(t){if(s.context){var i=t.path||t.composedPath&&t.composedPath();i&&i.length>0&&i.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var i=0,n=t.length;i<n;i++)try{if(e.contains(t[i]))return!0;if(t[i].contains(e))return!1}catch(e){return!1}return!1}(s.context.popupItem,i)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:a,callback:t.value};const l="ontouchstart"in document.documentElement?"touchstart":"click";!n(s)&&document.addEventListener(l,a)},update:function(e,t){i(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,i){const s="ontouchstart"in document.documentElement?"touchstart":"click";!n(i)&&e.__vueClickOutside__&&document.removeEventListener(s,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},257:function(e,t,i){},263:function(e,t,i){"use strict";i(257)},273:function(e,t,i){"use strict";i.r(t);var n=i(256),s=i.n(n),a=i(243),l=i(245),r=i(248),o={name:"BaseInput",directives:{ClickOutside:s.a},components:{BaseIcon:a.default,BaseLoader:()=>Promise.all([i.e(0),i.e(2)]).then(i.bind(null,275))},mixins:[r.a],model:{prop:"input",event:"input"},props:{input:{type:[String,Number],default:""},label:{type:String,required:!0},showLabel:{type:Boolean,default:!0},id:{type:String,default:""},placeholder:{type:String,default:"Enter Text Here"},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{type:String,default:""},showErrorIcon:{type:Boolean,default:!0},fieldType:{type:String,default:"text",validator:e=>["text","number","password","email","url","search"].includes(e)},dropDownListId:{type:String,default:""},linkedListOption:{type:String,default:null},hideInputField:{type:Boolean,default:!1},isActive:{type:Boolean,default:null},showInputBorder:{type:Boolean,default:!0},useFormFieldStyling:{type:Boolean,default:!0},clearable:{type:Boolean,default:!1},loadable:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},useFadeOut:{type:Boolean,default:!0},inputClass:{type:String,default:""},language:{type:String,default:"",validator:e=>!e||2===e.length},setFocusOnActive:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:()=>({isActiveInt:!1,inputInt:""}),computed:{idInt(){return this.id||Object(l.a)()},showLabelRow(){const e=this.$slots["label-addition"],t=!!e&&!!e.length&&e.some(e=>e.tag);return this.showLabel||t},showRemoveIcon(){return this.clearable&&!!this.inputInt},inputListeners(){return{...this.$listeners,keydown:e=>{"number"===this.fieldType&&Number.isNaN(Number(e.key))&&!["e","ArrowLeft","ArrowRight","Backspace","Delete","Tab"].includes(e.key)?e.preventDefault():this.$emit("keydown",e)},input:e=>{this.$emit("input","number"===this.fieldType?Number(e.target.value):e.target.value)}}},inputElement(){if(window){if(this.$refs&&this.$refs.input)return this.$refs.input;const e=document.getElementById(this.idInt);if(e)return e;console.warn("BaseInput: you did not assign the same id to the BaseInputComponent and the input element!")}return null}},watch:{input:{handler(e){e!==this.inputInt&&(this.inputInt=e)},immediate:!0},inputInt(e){e!==this.input&&this.$emit("input",e)},isActive(e){e!==this.isActiveInt&&(this.isActiveInt=e)},isActiveInt(e){this.inputElement&&e&&this.setFocusOnActive&&this.inputElement.focus(),e!==this.isActive&&this.$emit("update:is-active",e)}},methods:{blurInput(e){this.setFieldState(!1),this.$emit("keydown",e)},clickedInside(e){this.disabled||(this.setFieldState(!0),this.$emit("click-input-field",e))},clickedOutsideInput(e){this.setFieldState(!1),this.$emit("clicked-outside",e)},removeInput(){this.inputInt="",this.inputElement&&this.inputElement.focus()},setFieldState(e){this.isActiveInt=e},handleInputTab(e){this.showRemoveIcon&&!e.shiftKey||this.setFieldState(!1),this.$emit("keydown",e)}}},d=(i(263),i(11)),u=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-input"},[t("div",{class:["base-input__label-row",{hide:!e.showLabelRow}]},[t("label",{class:["base-input__label",{hide:!e.showLabel}],attrs:{for:e.idInt}},[e._v("\n      "+e._s(e.getLangLabel(e.label))+"\n    ")]),e._v(" "),t("div",{staticClass:"base-input__label-spacer"}),e._v(" "),e._t("label-addition")],2),e._v(" "),t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutsideInput,expression:"clickedOutsideInput"}],class:["base-input__input-frame",{"base-input__input-frame__border":e.showInputBorder},{"base-input__input-frame__disabled":e.disabled},{"base-input__input-frame__invalid":e.invalid}],on:{focusin:e.clickedInside,click:e.clickedInside}},[t("div",{class:["base-input__input-container",{"base-input__input-container__is-active":e.isActiveInt&&e.useFormFieldStyling}]},[e._t("pre-input-field"),e._v(" "),t("div",{class:["base-input__input-line-container",{"base-input__input-line-container__wrap":!e.hideInputField}]},[e._t("input-field-addition-before"),e._v(" "),t("div",{staticClass:"base-input__input-line"},[e._t("input-field-inline-before"),e._v(" "),t("div",{class:["base-input__input-wrapper",{"base-input__input-wrapper__fade-out":e.useFadeOut&&!e.isActiveInt&&!e.hideInputField}]},[e._t("input",(function(){return["checkbox"===e.fieldType?t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.inputInt,expression:"inputInt"}],ref:"input",class:[e.inputClass,"base-input__input",{"base-input__input__hidden":e.hideInputField}],attrs:{id:e.idInt,placeholder:e.placeholder,list:e.dropDownListId||!1,disabled:e.disabled,"aria-disabled":e.disabled.toString(),"aria-activedescendant":e.linkedListOption,"aria-describedby":e.idInt,"aria-required":e.required.toString(),required:e.required.toString(),"aria-invalid":e.invalid.toString(),autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.inputInt)?e._i(e.inputInt,null)>-1:e.inputInt},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleInputTab.apply(null,arguments)},change:function(t){var i=e.inputInt,n=t.target,s=!!n.checked;if(Array.isArray(i)){var a=e._i(i,null);n.checked?a<0&&(e.inputInt=i.concat([null])):a>-1&&(e.inputInt=i.slice(0,a).concat(i.slice(a+1)))}else e.inputInt=s}}},e.inputListeners)):"radio"===e.fieldType?t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.inputInt,expression:"inputInt"}],ref:"input",class:[e.inputClass,"base-input__input",{"base-input__input__hidden":e.hideInputField}],attrs:{id:e.idInt,placeholder:e.placeholder,list:e.dropDownListId||!1,disabled:e.disabled,"aria-disabled":e.disabled.toString(),"aria-activedescendant":e.linkedListOption,"aria-describedby":e.idInt,"aria-required":e.required.toString(),required:e.required.toString(),"aria-invalid":e.invalid.toString(),autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.inputInt,null)},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleInputTab.apply(null,arguments)},change:function(t){e.inputInt=null}}},e.inputListeners)):t("input",e._g({directives:[{name:"model",rawName:"v-model",value:e.inputInt,expression:"inputInt"}],ref:"input",class:[e.inputClass,"base-input__input",{"base-input__input__hidden":e.hideInputField}],attrs:{id:e.idInt,placeholder:e.placeholder,list:e.dropDownListId||!1,disabled:e.disabled,"aria-disabled":e.disabled.toString(),"aria-activedescendant":e.linkedListOption,"aria-describedby":e.idInt,"aria-required":e.required.toString(),required:e.required.toString(),"aria-invalid":e.invalid.toString(),autocomplete:"off",type:e.fieldType},domProps:{value:e.inputInt},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.handleInputTab.apply(null,arguments)},input:function(t){t.target.composing||(e.inputInt=t.target.value)}}},e.inputListeners))]}),null,{id:e.idInt})],2),e._v(" "),e.showRemoveIcon?t("button",{staticClass:"base-input__remove-icon-wrapper",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.blurInput.apply(null,arguments)},click:function(t){return t.stopPropagation(),e.removeInput.apply(null,arguments)}}},[e._t("remove-icon",(function(){return[t("BaseIcon",{staticClass:"base-input__remove-icon",attrs:{name:"remove",title:"Clear input"}})]}))],2):e._e(),e._v(" "),e.loadable?t("div",{staticClass:"base-input__loader"},[t("BaseLoader",{attrs:{hide:!e.isLoading}})],1):e._e(),e._v(" "),e._t("input-field-addition-after")],2)],2),e._v(" "),e.showErrorIcon&&e.invalid?t("div",{staticClass:"base-input__error-icon-wrapper"},[e._t("error-icon",(function(){return[t("BaseIcon",{staticClass:"base-input__error-icon",attrs:{name:"attention"}})]}))],2):e._e(),e._v(" "),e._t("post-input-field")],2)]),e._v(" "),t("div",[e._t("below-input")],2),e._v(" "),e.invalid&&e.errorMessage?t("div",{staticClass:"base-input__invalid-message"},[e._v("\n    "+e._s(e.getLangLabel(e.errorMessage))+"\n  ")]):e._e()])}),[],!1,null,"66d31d63",null);t.default=u.exports},296:function(e,t,i){"use strict";t.a={methods:{navigate(e,t,i,n=!1,s=!1){const a=t?1:-1;return this.isWithinArrayLimit(e,t,i+a)?e[i+a]:i>=0&&s?null:n?e[t?0:e.length-1]:e[i]},isWithinArrayLimit(e,t,i){const n=t?e.length:0;return{">=":(e,t)=>e>=t,"<":(e,t)=>e<t}[t?"<":">="](i,n)}}}},331:function(e,t,i){},402:function(e,t,i){"use strict";i(331)},951:function(e,t,i){"use strict";i.r(t);var n=i(245),s=i(273),a=i(330),l=i.n(a),r=i(248),o=i(296),d={name:"BaseChipsInputField",components:{BaseInput:s.default,BaseChip:()=>Promise.all([i.e(0),i.e(56)]).then(i.bind(null,934)),Draggable:l.a},mixins:[r.a,o.a],model:{prop:"input",event:"input"},props:{id:{type:String,default:""},selectedList:{type:Array,default:()=>[]},input:{type:String,default:""},label:{type:String,required:!0},showLabel:{type:Boolean,default:!0},placeholder:{type:String,default:null},allowUnknownEntries:{type:Boolean,default:!0},allowMultipleEntries:{type:Boolean,default:!0},addSelectedEntryDirectly:{type:Boolean,default:!1},sortable:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},alwaysLinked:{type:Boolean,default:!1},hoverboxContent:{type:Object,default:()=>({})},isLoading:{type:Boolean,default:!1},sortText:{type:String,default:"Sort A – Z"},sortName:{type:Boolean,default:!1},language:{type:String,default:""},showInputBorder:{type:Boolean,default:!0},useFormFieldStyling:{type:Boolean,default:!0},dropDownListId:{type:String,default:""},linkedListOption:{type:String,default:null},identifierPropertyName:{type:String,default:""},labelPropertyName:{type:String,default:"label"},isStringArray:{type:Boolean,default:!1},displayChipsInline:{type:Boolean,default:!0},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},errorMessage:{type:String,default:""},showErrorIcon:{type:Boolean,default:!0},clearable:{type:Boolean,default:!1},loadable:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},inputClass:{type:String,default:""},setFocusOnActive:{type:Boolean,default:!0},chipsEditable:{type:Boolean,default:!1},assistiveText:{type:Object,default:()=>({})}},data:()=>({selectedListInt:[],isActiveInt:!1,timeout:null,fired:!1,drag:!1,chipActiveForRemove:-1,inputInt:""}),watch:{selectedList:{handler(e){if(e){const t=e.map(e=>({...this.isStringArray?{[this.labelPropertyName]:e}:e,idInt:e[this.identifierPropertyName]||this.getIdInt(e)}));JSON.stringify(t)!==JSON.stringify(this.selectedListInt)&&(this.selectedListInt=t)}else this.selectedListInt=[]},deep:!0,immediate:!0},isActiveInt(e){e!==this.isActive&&this.$emit("update:is-active",e)},isActive(e){e!==this.isActiveInt&&(this.isActiveInt=e)},input:{handler(e){e!==this.inputInt&&(this.inputInt=e)},immediate:!0},inputInt:{handler(e){e!==this.input&&this.$emit("input",e)},immediate:!0}},methods:{checkKeyEvent(e){const{key:t}=e;if(("Tab"!==t||this.clearable&&this.inputInt)&&("Enter"!==t||this.allowMultipleEntries)||(this.isActiveInt=!1),"Backspace"===t||"Delete"===t)"Backspace"===t&&!this.fired&&!this.inputInt&&this.chipActiveForRemove<0?this.chipActiveForRemove=this.selectedListInt.length-1:this.chipActiveForRemove>=0&&!this.fired&&!this.inputInt&&(this.removeEntry(this.selectedListInt[this.chipActiveForRemove],this.chipActiveForRemove),this.chipActiveForRemove=-1),this.fired=!0,this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.timeout=setTimeout(()=>{this.fired=!1},200);else if(this.inputInt||"ArrowRight"!==e.key&&"ArrowLeft"!==e.key)this.chipActiveForRemove=-1;else{const t="ArrowRight"===e.key,i=this.navigate(this.selectedListInt,t,this.chipActiveForRemove,!0);this.chipActiveForRemove=this.selectedListInt.indexOf(i)}},removeEntry(e,t){this.selectedListInt.splice(t,1),this.updateParentList(this.selectedListInt),this.$emit("removed",e);const i=this.$refs.baseInput.$el.getElementsByTagName("input"),n=Array.from(i).find(e=>e.id===this.id);n&&n.focus()},addOption(){if(this.inputInt&&this.allowUnknownEntries&&this.addSelectedEntryDirectly){const e=this.selectedListInt.find(e=>e[this.labelPropertyName]===this.inputInt);if(e)this.$emit("duplicate",e);else{const e=this.allowMultipleEntries?this.selectedListInt.length:0,t={idInt:this.getIdInt(),[this.labelPropertyName]:this.inputInt};this.$set(this.selectedListInt,e,t),this.updateParentList(this.selectedListInt)}this.inputInt=""}},modifyListEntry(e,t){"object"==typeof this.selectedListInt[t][this.labelPropertyName]&&void 0!==this.selectedListInt[t][this.labelPropertyName][this.language]?this.selectedListInt[t]={[this.labelPropertyName]:{[this.language]:e}}:"string"==typeof this.selectedListInt[t][this.labelPropertyName]&&(this.selectedListInt[t]={[this.labelPropertyName]:e}),this.updateParentList(this.selectedListInt)},updateParentList(e){let t=JSON.parse(JSON.stringify(e));this.isStringArray?t=t.map(e=>e[this.labelPropertyName]):e.length&&(t=t.map(e=>(this.$delete(e,"idInt"),e))),this.$emit("update:selected-list",t)},getIdInt(e=null){if(e){const t=this.selectedListInt.find(t=>t[this.labelPropertyName]===e[this.labelPropertyName]||t[this.labelPropertyName]===e);if(t)return t.idInt}return Object(n.a)()},sortSelectedList(){this.isActiveInt=!1,Object(n.c)(this.selectedListInt,this.labelPropertyName,this.sortName,this.language?this.getLangLabel:null),this.updateParentList(this.selectedListInt)},setDragElement(e,t){const i=t.cloneNode(!0);i.id="chip-inline-drag",i.style.position="absolute",i.style.top="-99999px",i.style.left="-99999px",document.body.appendChild(i),e.setDragImage(i,0,0)},onDragEnd(){this.drag=!1;const e=document.getElementById("chip-inline-drag");e&&e.parentNode.removeChild(e),JSON.stringify(this.selectedList)!==JSON.stringify(this.selectedListInt)&&this.updateParentList(this.selectedListInt)},hoverBoxActive(e,t){this.$emit("hoverbox-active",{value:e,option:t})}}},u=(i(402),i(11)),c=Object(u.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-chips-input-field"},[t("BaseInput",e._g({ref:"baseInput",attrs:{id:e.id,placeholder:e.allowMultipleEntries||!e.selectedListInt.length?e.placeholder:"",label:e.label,"show-label":e.showLabel,"show-input-border":e.showInputBorder,"is-active":e.isActiveInt,"use-form-field-styling":e.useFormFieldStyling,"drop-down-list-id":e.dropDownListId,"linked-list-option":e.linkedListOption,"hide-input-field":!e.allowMultipleEntries&&!!e.selectedListInt.length,invalid:e.invalid,required:e.required,disabled:e.disabled,clearable:e.clearable,loadable:e.loadable,"error-message":e.errorMessage,"show-error-icon":e.showErrorIcon,"is-loading":e.isLoading,"input-class":e.inputClass,"set-focus-on-active":e.setFocusOnActive},on:{"update:isActive":function(t){e.isActiveInt=t},"update:is-active":function(t){e.isActiveInt=t},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.addOption.apply(null,arguments))},e.checkKeyEvent]},scopedSlots:e._u([{key:"label-addition",fn:function(){return[e._t("label-addition"),e._v(" "),e.sortable?t("button",{staticClass:"base-chips-input-field__sort",attrs:{"aria-label":`${e.label}. ${e.sortText.replace(/[—–-]/,"to")}`,type:"button"},on:{click:function(t){return e.sortSelectedList(e.selectedListInt)}}},[e._v("\n        "+e._s(e.sortText)+"\n      ")]):e._e()]},proxy:!0},{key:"pre-input-field",fn:function(){return[e._t("pre-input-field")]},proxy:!0},{key:"input-field-addition-before",fn:function(){return[e._t("input-field-addition-before"),e._v(" "),e.displayChipsInline?t("div",{staticClass:"base-chips-input-field__chips"},[e.draggable&&!e.chipsEditable?[t("draggable",{attrs:{"set-data":e.setDragElement,"force-fallback":!0,animation:200,handle:".base-chip__text"},on:{start:function(t){e.drag=!0},end:e.onDragEnd},model:{value:e.selectedListInt,callback:function(t){e.selectedListInt=t},expression:"selectedListInt"}},[t("transition-group",{staticClass:"base-chips-input-field__chips-transition",attrs:{name:e.drag?null:"flip-list",type:"transition"}},[e._l(e.selectedListInt,(function(i,n){return[e._t("chip",(function(){return[t("BaseChip",{key:e.allowMultipleEntries?"chip-"+i.idInt:n,attrs:{id:i.idInt,entry:e.getLangLabel(i[e.labelPropertyName],!0),"hover-box-content":e.hoverboxContent,"is-linked":e.alwaysLinked||0===i[e.identifierPropertyName]||!!i[e.identifierPropertyName],"chip-active":e.chipActiveForRemove===n},on:{"remove-entry":function(t){return e.removeEntry(i,n)},"hoverbox-active":function(t){return e.hoverBoxActive(t,i)}}})]}),null,{entry:i,index:n,chipActiveForRemove:e.chipActiveForRemove,removeEntry:e.removeEntry})]}))],2)],1)]:[e._l(e.selectedListInt,(function(i,n){return[e._t("chip",(function(){return[t("BaseChip",{key:e.allowMultipleEntries?"chip-"+i.idInt:n,attrs:{id:i.idInt,entry:e.getLangLabel(i[e.labelPropertyName],!0),"hover-box-content":e.hoverboxContent,editable:e.chipsEditable,"is-linked":e.alwaysLinked||0===i[e.identifierPropertyName]||!!i[e.identifierPropertyName],"chip-active":e.chipActiveForRemove===n,"assistive-text":e.assistiveText.selectedOption},on:{"remove-entry":function(t){return e.removeEntry(i,n)},"value-changed":function(t){return e.modifyListEntry(t,n)},"hoverbox-active":function(t){return e.hoverBoxActive(t,i)}}})]}),null,{entry:i,index:n,chipActiveForRemove:e.chipActiveForRemove,removeEntry:e.removeEntry})]}))]],2):e._e()]},proxy:!0},{key:"input-field-inline-before",fn:function(){return[e._t("input-field-inline-before")]},proxy:!0},{key:"input-field-addition-after",fn:function(){return[e._t("input-field-addition-after")]},proxy:!0},{key:"post-input-field",fn:function(){return[e._t("post-input-field")]},proxy:!0},{key:"error-icon",fn:function(){return[e._t("error-icon")]},proxy:!0},{key:"remove-icon",fn:function(){return[e._t("remove-icon")]},proxy:!0},{key:"below-input",fn:function(){return[e._t("below-input")]},proxy:!0}],null,!0),model:{value:e.inputInt,callback:function(t){e.inputInt=t},expression:"inputInt"}},e.$listeners))],1)}),[],!1,null,"2736a4d8",null);t.default=c.exports}}]);