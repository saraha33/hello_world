(window.webpackJsonp=window.webpackJsonp||[]).push([[46,3,45],{242:function(e,t,i){},243:function(e,t,i){"use strict";i.r(t);i(93);var n={name:"BaseIcon",props:{name:{type:String,default:null,validator:e=>["add-existing-collection","add-existing-object","add-new-collection","add-new-object","archive-arrow","archive-empty","archive-sheets","arrow-left","attachment","attention","audio-object","calendar-many","calendar-number","camera","check-mark","clock","collection","download","drag-lines","drag-n-drop","drop-down","duplicate","edit","eye-hide","eye","file-object","forbidden","home","image-object","information","licence","logo","magnifier","next","options-menu","people","play","plus","prev","print","refresh","remove","save-file","share","sort","subscribe","success","text","unsubscribe","video-object","waste-bin"].includes(e)},title:{type:String,default:""},desc:{type:String,default:""}},data:()=>({baseIcons:null}),computed:{icon(){return`${this.baseIcons}#${this.name}`},id(){return this._uid},ariaAttribute(){const e=[];return this.title&&e.push("title_"+this.id),this.desc&&e.push("desc_"+this.id),e.join(" ")}},mounted(){window.base_ui_icons?this.baseIcons=window.base_ui_icons:this.baseIcons="/base-ui-icons.svg"}},l=(i(244),i(11)),a=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{staticClass:"base-icon",attrs:{"aria-labelledby":!(!e.title&&!e.desc)&&e.ariaAttribute}},[e.title?t("title",{attrs:{id:"title_"+e.id}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.desc?t("desc",{attrs:{id:"desc_"+e.id}},[e._v(e._s(e.desc))]):e._e(),e._v(" "),e.baseIcons?t("use",{attrs:{href:e.icon}}):e._e()])}),[],!1,null,"33254aaa",null);t.default=a.exports},244:function(e,t,i){"use strict";i(242)},290:function(e,t,i){},291:function(e,t,i){},315:function(e,t,i){"use strict";i(290)},316:function(e,t,i){"use strict";i(291)},978:function(e,t,i){"use strict";i.r(t);i(93);var n=i(243),l=i(407),a=i(246),s={name:"BaseForm",components:{BaseFormFieldCreator:l.default,BaseIcon:n.default},mixins:[a.a],props:{formFieldJson:{type:Object,required:!0},valueList:{type:Object,default:()=>({})},language:{type:String,default:"en"},availableLocales:{type:Array,default:()=>[]},formId:{type:String,default:""},formStyle:{type:Object,default:()=>({})},fieldsWithTabs:{type:Array,default:()=>[]},fieldIsLoading:{type:String,default:""},dropDownLists:{type:Object,default:()=>({})},showErrorIcon:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},fieldProps:{type:Object,default:()=>({}),validator:e=>0===Object.keys(e).length||Object.values(e).every(e=>Object.keys(e))}},data:()=>({multiplyParams:null,fetchingAutocompleteFor:"",currentInputString:"",valueListInt:{}}),computed:{formFieldsHalf(){return this.formFieldListInt.filter(e=>e["x-attrs"]&&"half"===e["x-attrs"].field_format)},formFieldListInt(){return Object.keys(this.formFieldJson).filter(e=>!(this.formFieldJson[e].$ref||this.formFieldJson[e]["x-attrs"]&&this.formFieldJson[e]["x-attrs"].hidden)).map(e=>({name:e,...this.formFieldJson[e]})).sort((e,t)=>e["x-attrs"]&&t["x-attrs"]&&e["x-attrs"].order>t["x-attrs"].order?1:-1)}},watch:{valueList:{handler(e){Object.keys(this.valueListInt).some(t=>JSON.stringify(this.valueListInt[t])!==JSON.stringify(e[t]))&&this.initializeValueObject()},deep:!0},formFieldJson:{handler(){this.valueListInt={},this.initializeValueObject()},immediate:!0}},updated(){if(this.multiplyParams&&this.multiplyParams.name){const e=this.$refs[this.multiplyParams.name];e.length&&setTimeout(t=>{const i=e[t.index].getElementsByTagName("textarea").length?e[t.index].getElementsByTagName("textarea"):e[t.index].getElementsByTagName("input");i.length&&i[0].focus()},50,this.multiplyParams),this.multiplyParams=null}},methods:{fetchAutocomplete(e){this.currentInputString=e.value,this.fetchingAutocompleteFor=e.name,this.$emit("fetch-autocomplete",e)},allowMultiply:e=>"array"===e.type&&(!e["x-attrs"]||!e["x-attrs"].field_type||e["x-attrs"]&&!["chips","chips-below"].includes(e["x-attrs"].field_type)),multiplyButtonsInline:e=>!["group","multiline"].includes(e["x-attrs"].field_type),multiplyField(e,t){const i=this.getInitialFieldValue(e.items);t||0===t?this.valueListInt[e.name].splice(t+1,0,i):this.valueListInt[e.name].push(i),this.multiplyParams={index:t||0===t?t+1:this.valueListInt[e.name].length-1,name:e.name},this.propagateValueListChanges()},removeField(e,t){const i=this.valueListInt[e.name];i&&i.length>1?i.splice(t,1):this.$set(i,t,this.getInitialFieldValue(e.items)),this.propagateValueListChanges()},propagateValueListChanges(){this.$emit("values-changed",this.valueListInt)},isHalfFieldSecond(e){const t=this.formFieldsHalf.indexOf(e);return t>0&&!!(t%2)},getFieldName(e){return e.title||this.getI18nTerm("form."+e.name||e.name)},formFieldComponentProps(e,t,i){const n=i>=0?`${t}_${i}`:t;return{field:e,label:this.fieldProps[e.name]&&this.fieldProps[e.name].label?this.fieldProps[e.name].label:this.getFieldName(e),fieldProps:this.fieldProps[e.name]||{},showLabel:!this.allowMultiply(e)||!this.multiplyButtonsInline(e)||0===i,dropDownList:this.dropDownLists[e.name],secondaryDropdown:this.dropDownLists[e.name+"_secondary"],language:this.language,availableLocales:this.availableLocales,sortText:this.getI18nTerm("form.sort")||"Sort",fieldKey:`${e.name}_${n}_${this.formId}`,fieldValue:i>=0?this.valueListInt[e.name][i]:this.valueListInt[e.name],autocompleteLoading:this.fieldIsLoading===e.name,fieldGroupParams:this.formFieldListInt.some(e=>e["x-attrs"]&&"group"===e["x-attrs"].field_type)?this.$props:null,clearable:this.clearable,showErrorIcon:this.showErrorIcon}},setFieldValue(e,t,i){this.currentInputString="",i>=0?this.$set(this.valueListInt[t],i,JSON.parse(JSON.stringify(e))):this.$set(this.valueListInt,t,e?JSON.parse(JSON.stringify(e)):e),this.$emit("values-changed",this.valueListInt)},initializeValueObject(){this.formFieldListInt.forEach(e=>{this.$set(this.valueListInt,e.name,this.getInitialFieldValue(e))})},getInitialFieldValue(e){const t=this.valueList[e.name];if("integer"===e.type)return t?t.toString():"";if(e["x-attrs"]&&e["x-attrs"].field_type&&e["x-attrs"].field_type.includes("chips")&&"object"===e.type)return t&&Object.keys(t).length?[].concat(t):[];if("array"===e.type)return"object"==typeof t&&t&&t.length?[].concat(t):!e["x-attrs"]||!e["x-attrs"].field_type||e["x-attrs"]&&e["x-attrs"].field_type&&!e["x-attrs"].field_type.includes("chips")?[].concat(this.getInitialFieldValue(e.items)):[];if("object"===e.type){const i={};return Object.keys(e.properties).forEach(t=>{this.$set(i,t,this.getInitialFieldValue(e.properties[t]))}),{...i,...t}}return"boolean"===e.type?t||!1:"string"==typeof t?t:""},checkFieldContent(e){let t=!1;if(e&&"object"==typeof e)if(e.length>=0)e.forEach(e=>{t=this.checkFieldContent(e)||t});else{Object.keys(e).forEach(i=>{t=this.checkFieldContent(e[i])||t})}else t=0===e||!!e||t;return t}}},r=(i(315),i(316),i(11)),o=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-form",style:e.formStyle},[e._l(e.formFieldListInt,(function(i,n){return[e.allowMultiply(i)?[e._l(e.valueListInt[i.name],(function(l,a){return t("div",{key:`${i.name}_${n}_${a}_${e.formId}_wrapper`,ref:i.name,refInFor:!0,class:["base-form-field",{"base-form-field__multiple__inline":e.multiplyButtonsInline(i)},e.formFieldsHalf.indexOf(i)>=0?"base-form-field-half":"base-form-field-full",{"base-form-field-left-margin":e.isHalfFieldSecond(i)}]},[t("BaseFormFieldCreator",e._b({key:`${i.name}_${n}_${a}_${e.formId}`,staticClass:"base-form-field__multiple__inline-element",on:{"field-value-changed":function(t){e.setFieldValue(t,i.name,a,i["x-attrs"]?i["x-attrs"].equivalent:"")},"fetch-autocomplete":e.fetchAutocomplete,"subform-input":function(t){return e.setFieldValue(t,i.name,a)}}},"BaseFormFieldCreator",e.formFieldComponentProps(i,n,a),!1)),e._v(" "),!e.multiplyButtonsInline&&(e.checkFieldContent(e.valueList[i.name])||e.valueListInt[i.name].length>1)?t("div",{key:`${n}_button_${a}_${e.formId}`,staticClass:"group-add"},[t("button",{staticClass:"field-group-button",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.removeField(i,a)}}},[t("span",[e._v("\n              "+e._s(1===e.valueListInt[i.name].length?e.getI18nTerm("form.clearField")||"Clear":e.getI18nTerm("form.removeField",-1,{fieldType:e.getFieldName(i)}))+"\n            ")]),e._v(" "),t("span",[t("base-icon",{staticClass:"field-group-icon",attrs:{name:"remove"}})],1)])]):e._e(),e._v(" "),e.multiplyButtonsInline(i)?[t("div",{staticClass:"base-form__inline-icons"},[e.checkFieldContent(e.valueList[i.name])||e.valueListInt[i.name].length>1?t("base-icon",{staticClass:"base-form__inline-icon",attrs:{title:1===e.valueListInt[i.name].length?e.getI18nTerm("form.clearField")||"Clear":e.getI18nTerm("form.removeField",-1,{fieldType:e.getFieldName(i)}),role:"button",tabindex:"0",name:"remove"},nativeOn:{click:function(t){return e.removeField(i,a)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.removeField(i,a)}}}):e._e(),e._v(" "),t("base-icon",{staticClass:"base-form__inline-icon",attrs:{title:a!==e.valueListInt[i.name].length-1?e.getI18nTerm("form.addGroupBelow",-1,{fieldType:e.getFieldName(i)}):e.getI18nTerm("form.addGroup",-1,{fieldType:e.getFieldName(i)}),role:"button",tabindex:"0",name:"plus"},nativeOn:{click:function(t){return e.multiplyField(i,a)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.multiplyField(i,a)}}})],1)]:e._e()],2)})),e._v(" "),e.multiplyButtonsInline(i)?e._e():t("div",{key:"multiplyButton"+n,staticClass:"group-multiply"},[t("button",{staticClass:"field-group-button",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.multiplyField(i)}}},[t("span",[e._v("\n            "+e._s(e.getI18nTerm("form.addGroup",-1,{fieldType:e.getFieldName(i)}))+"\n          ")]),e._v(" "),t("span",[t("base-icon",{staticClass:"field-group-icon",attrs:{name:"plus"}})],1)])])]:t("BaseFormFieldCreator",e._b({key:`${i.name}_${n}_${e.formId}`,class:["base-form-field",e.formFieldsHalf.indexOf(i)>=0?"base-form-field-half":"base-form-field-full",{"base-form-field-left-margin":e.isHalfFieldSecond(i)}],on:{"field-value-changed":function(t){return e.setFieldValue(t,i.name)},"fetch-autocomplete":e.fetchAutocomplete},scopedSlots:e._u([{key:"label-addition",fn:function({fieldName:t}){return[e._t("label-addition",null,{fieldName:t})]}},{key:"pre-input-field",fn:function({fieldName:t}){return[e._t("pre-input-field",null,{fieldName:t})]}},{key:"input-field-addition-before",fn:function({fieldName:t}){return[e._t("input-field-addition-before",null,{fieldName:t})]}},{key:"input-field-inline-before",fn:function({fieldName:t}){return[e._t("input-field-inline-before",null,{fieldName:t})]}},{key:"input-field-addition-after",fn:function({fieldName:t}){return[e._t("input-field-addition-after",null,{fieldName:t})]}},{key:"post-input-field",fn:function({fieldName:t}){return[e._t("post-input-field",null,{fieldName:t})]}},{key:"error-icon",fn:function({fieldName:t}){return[e._t("error-icon")]}},{key:"remove-icon",fn:function({fieldName:t}){return[e._t("remove-icon")]}},{key:"below-input",fn:function({fieldName:t}){return[e._t("below-input",null,{fieldName:t})]}}],null,!0)},"BaseFormFieldCreator",e.formFieldComponentProps(i,n),!1))]}))],2)}),[],!1,null,"5b6a1e12",null);t.default=o.exports}}]);