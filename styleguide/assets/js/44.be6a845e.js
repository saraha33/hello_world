(window.webpackJsonp=window.webpackJsonp||[]).push([[44,100,101],{245:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r}));i(92);const s=()=>Math.random().toString(36).substr(2,9),n=(e,t)=>e.split(".").reduce((e,t)=>e[t],t),o=e=>{const t=e.replace(/,? [0-9-]+/g,"");if(t.includes(",")){const e=t.split(", ");return[e[0],e.splice(1).join()]}return[t.split(" ").pop(),t]},r=(e,t="",i=!1,s=null)=>e.sort((e,n)=>{let r=e,a=n;if(t&&(r=r[t],a=a[t]),s&&(r=s(r),a=s(a)),i){let e="",t="";[r,e]=o(r),[a,t]=o(a),r.toLowerCase()===a.toLowerCase()&&(r=e,a=t)}return r.toLowerCase()>a.toLowerCase()?1:-1})},248:function(e,t,i){"use strict";i(92);t.a={computed:{hasI18n(){return Boolean(this.$i18n)}},methods:{getI18nTerm(e,t=-1,i={}){if(this.hasI18n&&this.$te(e))return t>=0?this.$tc(e,t,i):this.$t(e,i);return e.split(".").pop()||e},setLangLabels(e,t){return t.reduce((t,i)=>(this.$set(t,i,this.$i18n?this.$t(e,i):e.split(".").pop()),t),{})},getLangLabel(e,t=!1){const i=this.hasI18n?this.language||this.$i18n.locale:this.language;if("string"==typeof e)return e;if(e&&i&&e[i])return e[i];if(e&&i&&t){const t=Object.keys(e).find(t=>!!e[t]);return e[t]||e[i]||""}return e}}}},296:function(e,t,i){"use strict";t.a={methods:{navigate(e,t,i,s=!1,n=!1){const o=t?1:-1;return this.isWithinArrayLimit(e,t,i+o)?e[i+o]:i>=0&&n?null:s?e[t?0:e.length-1]:e[i]},isWithinArrayLimit(e,t,i){const s=t?e.length:0;return{">=":(e,t)=>e>=t,"<":(e,t)=>e<t}[t?"<":">="](i,s)}}}},345:function(e,t,i){},426:function(e,t,i){"use strict";i(345)},961:function(e,t,i){"use strict";i.r(t);i(93),i(92);var s=i(245),n=i(296),o=i(377),r=i(248),a={name:"BaseResultBoxSection",components:{BaseImageBox:o.default,BaseLoader:()=>Promise.all([i.e(0),i.e(2)]).then(i.bind(null,275)),BaseOptions:()=>Promise.all([i.e(0),i.e(27)]).then(i.bind(null,936)),BaseButton:()=>Promise.all([i.e(0),i.e(39)]).then(i.bind(null,259)),BasePagination:()=>Promise.all([i.e(0),i.e(57)]).then(i.bind(null,937)),BaseBoxButton:()=>Promise.all([i.e(0),i.e(38)]).then(i.bind(null,933)),BaseSelectOptions:()=>Promise.all([i.e(0),i.e(28)]).then(i.bind(null,938))},mixins:[r.a,n.a],model:{prop:"entryList",event:"entries-changed"},props:{entryList:{type:Array,default:()=>[]},showHeader:{type:Boolean,default:!0},headerText:{type:String,default:""},showOptions:{type:Boolean,default:!0},optionsButtonText:{type:Object,default:()=>({show:"edit",hide:"editReturn"}),validator:e=>["show","hide"].every(t=>Object.keys(e).includes(t))},optionsButtonIcon:{type:Object,default:()=>({show:"edit",hide:"remove"}),validator:e=>["show","hide"].every(t=>Object.keys(e).includes(t))},boxBreakpoints:{type:Array,default:()=>[[0,2],[640,4],[1024,6]],validator:e=>e.every(e=>"object"==typeof e&&2===e.length&&e.every(e=>"number"==typeof e))},isLoading:{type:Boolean,default:!1},editMode:{type:Boolean,default:!1},editModeWhiteBackground:{type:Boolean,default:!1},selectedList:{type:Array,default:()=>[]},selectOptionsText:{type:Object,default:()=>({selectAll:"select all",selectNone:"select none",entriesSelected:"entries selected"})},messageText:{type:String,default:"Drag or Select"},messageSubtext:{type:String,default:"Drag'n Drop to reorder or select the relevant items and choose an action"},draggable:{type:Boolean,default:!1},usePagination:{type:Boolean,default:!1},maxRows:{type:Number,default:5},useExpandMode:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},expandText:{type:Object,default:()=>({expand:"more objects",collapse:"collapse"})},total:{type:Number,default:null},currentPageNumber:{type:Number,default:null},maxShowMoreRows:{type:Number,default:1},jumpToTop:{type:Boolean,default:!1},showActionButtonBoxes:{type:Boolean,default:!1},actionButtonsConfig:{type:Array,default:()=>[{text:"delete",icon:"waste-bin",value:"delete",display:"all",disabled:!1}],validator:e=>e.every(e=>{const t=Object.keys(e);return["text","icon","value"].every(e=>t.includes(e))&&(["all","top","bottom"].includes(e.display)||!e.display)})},identifierPropertyName:{type:String,default:"id"},titlePropertyName:{type:String,default:"title"},usePaginationLinkElement:{type:[String,Boolean],default:!1,validator:e=>"boolean"==typeof e&&!e||"string"==typeof e&&e},fetchDataExternally:{type:Boolean,default:!1},scrollToOffset:{type:Number,default:0},initialItemsPerRow:{type:Number,default:6},supportiveText:{type:Object,default:()=>({description:"Select items via space bar to carry out actions or use enter key to select an item for reordering. Use Tab key to navigate between items.",activated:"Item at position {pos} selected for reordering. Use arrow keys to order item.",moved:"Item moved to position {pos} of {total}"})},disableListElementFocus:{type:Boolean,default:!1}},data:()=>({entryListInt:[],editModeActive:!1,currentPageNumberInt:1,expandedInt:!1,wasExpanded:!1,itemsPerRow:null,initialBoxCalcDone:!1,selectedListInt:[],imageBoxesSelectable:!1,elementId:null,initialized:!1,movableElementId:null,currentSupportiveText:""}),computed:{draggableComponent(){return this.draggable?()=>i.e(4).then(i.t.bind(null,330,7)).then(e=>e.default||e):"ul"},visibleBoxes:{get(){return!this.editModeActive||!this.draggable&&this.usePagination?!this.editModeActive&&this.useExpandMode&&!this.expandedInt&&this.expandNeeded?this.entryListInt.slice(0,this.itemsPerRow*this.maxShowMoreRows-1):this.usePagination&&!this.fetchDataExternally?this.entryListInt.slice((this.currentPageNumberInt-1)*this.visibleNumberOfItems,this.currentPageNumberInt*this.visibleNumberOfItems):this.fetchDataExternally?this.entryList.slice(0,this.visibleNumberOfItems):this.entryListInt:[...this.entryListInt]},set(e){this.entryListInt=[...e]}},visibleNumberOfItems(){const e=this.itemsPerRow*this.maxRows;return this.editModeActive&&this.showActionButtonBoxes?e-this.actionButtonsConfig.length:!this.editModeActive&&this.useExpandMode?e-1:e},pages(){return(this.total||this.entryListInt.length)&&this.visibleNumberOfItems>=0?Math.ceil((this.total||this.entryListInt.length)/this.visibleNumberOfItems):1},expandNeeded(){return this.itemsPerRow*this.maxShowMoreRows<this.entryList.length}},watch:{entryList:{handler(e){JSON.stringify(e)!==JSON.stringify(this.entryListInt)&&(this.entryListInt=[...e])},immediate:!0,deep:!0},entryListInt:{handler(e){JSON.stringify(e)!==JSON.stringify(this.entryList)&&this.$emit("entries-changed",e)},deep:!0},selectedList:{handler(e){JSON.stringify(e)!==JSON.stringify(this.selectedListInt)&&(this.selectedListInt=JSON.parse(JSON.stringify(e)))},immediate:!0},selectedListInt(e){JSON.stringify(e)!==JSON.stringify(this.selectedList)&&this.$emit("update:selected-list",e)},pages:{handler(e){this.currentPageNumberInt>e&&(this.currentPageNumberInt=e)},immediate:!0},currentPageNumber:{handler(e){e!==this.currentPageNumberInt&&(this.currentPageNumberInt=e>this.pages&&!this.fetchDataExternally?this.pages:e)},immediate:!0},currentPageNumberInt:{handler(e){e!==this.currentPageNumber&&this.$emit("update:current-page-number",this.currentPageNumberInt)},immediate:!0},expanded:{handler(e){e!==this.expandedInt&&(this.expandedInt=e)},immediate:!0},expandedInt(e){e||(this.currentPageNumberInt=1),e!==this.expanded&&this.$emit("update:expanded",e)},editModeActive(e){setTimeout(()=>{this.imageBoxesSelectable=e},50),setTimeout(()=>{e&&this.$nextTick(()=>{if(this.$refs.resultBoxItem&&this.$refs.resultBoxItem.length){this.$refs.resultBoxItem.forEach(e=>{e.getElementsByTagName("input")[0].setAttribute("tabindex","-1")});this.$refs.resultBoxItem.find(e=>e.id.includes(this.visibleBoxes[0].id)).focus({preventScroll:!0})}})},500),e?this.currentSupportiveText=this.supportiveText.description:(this.movableElementId=null,this.currentSupportiveText=""),e!==this.editMode&&this.$emit("update:edit-mode",e),this.initialized&&(e?window.addEventListener("keyup",this.escEventHandler):window.removeEventListener("keyup",this.escEventHandler))},editMode:{handler(e){e!==this.editModeActive&&(this.editModeActive=e&&this.showOptions&&this.showHeader)},immediate:!0},showOptions(e){e||(this.editModeActive=!1)},showHeader(e){e||(this.editModeActive=!1)}},created(){this.useExpandMode||(this.expandedInt=!0),this.itemsPerRow=this.initialItemsPerRow},mounted(){this.elementId=this._uid,!this.initialBoxCalcDone&&this.$refs.resultBoxesArea&&this.calcBoxNumber(),window.addEventListener("resize",this.resizeBoxes),this.initialized=!0},updated(){!this.initialBoxCalcDone&&this.$refs.resultBoxesArea&&this.calcBoxNumber()},methods:{optionsToggle(e){this.editModeActive=e,e?this.wasExpanded=this.expandedInt:(this.expandedInt=this.wasExpanded,this.selectedListInt=[])},selectAllTriggered(e){if(e)this.selectedListInt=[...new Set([...this.selectedListInt,...this.visibleBoxes.map(e=>this.getPropValue(this.identifierPropertyName,e))])];else{const e=this.visibleBoxes.map(e=>this.getPropValue(this.identifierPropertyName,e));this.selectedListInt=this.selectedListInt.filter(t=>!e.includes(this.getPropValue(this.identifierPropertyName,t)||t))}},entrySelected(e,t){t&&!this.selectedListInt.includes(e)?this.selectedListInt.push(e):t||(this.selectedListInt=this.selectedListInt.filter(t=>t!==e))},isEntrySelected(e){return this.selectedListInt.map(e=>this.getPropValue(this.identifierPropertyName,e)||e).includes(this.getPropValue(this.identifierPropertyName,e))},submitAction(e){this.$emit("submit-action",e)},escEventHandler(e){"Escape"===e.key&&(this.movableElementId?this.cancelDragMode():(this.editModeActive=!1,this.currentSupportiveText=""))},onEnterKey(e,t,i){this.editModeActive&&this.draggable?(e.preventDefault(),this.movableElementId?this.cancelDragMode():(this.movableElementId=t.id,this.currentSupportiveText=this.supportiveText.activated.replace("{pos}",(i+1).toString()))):this.entryClicked(this.getPropValue(this.identifierPropertyName,t))},moveEntry(e,t){this.currentSupportiveText="";const{key:i}=e,s=["ArrowRight","ArrowDown"].includes(i),n=t+(s?1:-1);if(this.isWithinArrayLimit(this.visibleBoxes,s,n)){const e=this.visibleBoxes;[e[t],e[n]]=[e[n],e[t]],this.visibleBoxes=e,this.$nextTick(()=>{document.getElementById("li-"+this.movableElementId).focus()}),this.currentSupportiveText=this.supportiveText.moved.replace("{pos}",n+1).replace("{total}",this.visibleBoxes.length)}},cancelDragMode(){this.movableElementId=null,this.currentSupportiveText=""},resizeBoxes(){this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=setTimeout(()=>{this.calcBoxNumber()},300)},calcBoxNumber(){const e=this.$refs.resultBoxesArea&&this.$refs.resultBoxesArea.$el?this.$refs.resultBoxesArea.$el:this.$refs.resultBoxesArea;if(e){const t=e.clientWidth;this.itemsPerRow=this.boxBreakpoints.sort((e,t)=>e[0]>t[0]).reduce((e,[i,s])=>t>i?s:e,0),this.$el.style.setProperty("--items-per-row",this.itemsPerRow);const i="base-result-box-section__box-style-"+this.elementId;let s=document.getElementById(i);s||(s=document.createElement("style"),s.id=i,this.$el.appendChild(s)),s.innerHTML=`\n          .base-result-box-section__box-item-${this.elementId}:nth-child(n + ${this.itemsPerRow+1}) {\n            margin-top: var(--spacing-regular);\n          }\n          .base-result-box-section__box-item-${this.elementId}:not(:nth-child(${this.itemsPerRow}n)) {\n            margin-right: var(--spacing-regular);\n          }`,this.initialBoxCalcDone=!0,this.$emit("items-per-row-changed",this.itemsPerRow)}},setPage(e){this.currentPageNumberInt=e,this.jumpToTop&&window.scrollTo(0,this.$el.offsetTop-this.scrollToOffset)},entryClicked(e){this.$emit("entry-clicked",{entryId:e})},getI18nString(e){if("string"==typeof e)return this.getI18nTerm(e);const{string:t,count:i,variables:s}={...e};return this.getI18nTerm(t,i,s)},getPropValue:(e,t)=>Object(s.b)(e,t)}},l=(i(426),i(11)),d=Object(l.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-result-box-section"},[e.isLoading?t("div",{staticClass:"base-result-box-section__loading"},[t("BaseLoader",{staticClass:"base-result-box-section__loader"})],1):e._e(),e._v(" "),t("div",{staticClass:"base-result-box-section__container"},[e.showHeader?t("div",{staticClass:"base-result-box-section__header-row"},[e.showOptions?t("BaseOptions",{attrs:{"show-options":e.editModeActive,"options-button-icon":e.optionsButtonIcon,"options-button-text":e.optionsButtonText,"use-options-button-on":"always"},on:{"update:show-options":e.optionsToggle},scopedSlots:e._u([{key:"beforeOptions",fn:function(){return[e._t("header",(function(){return[e.headerText?t("h3",{staticClass:"base-result-box-section__header"},[e._v("\n              "+e._s(e.headerText)+"\n            ")]):e._e()]}))]},proxy:!0},{key:"options",fn:function(){return[e._t("optionButtons",(function(){return[e._l(e.actionButtonsConfig,(function(i){return["top"!==i.display&&"all"!==i.display&&i.display?e._e():t("BaseButton",{key:i.text,attrs:{text:e.getI18nString(i.text),icon:i.icon,"has-background-color":!1,disabled:i.disabled,"icon-size":"large","button-style":"single"},on:{clicked:function(t){return e.submitAction(i.value)}}})]}))]}),{submitAction:e.submitAction})]},proxy:!0}],null,!0)}):[e._t("header",(function(){return[e.headerText?t("h3",{staticClass:"base-result-box-section__header"},[e._v("\n            "+e._s(e.headerText)+"\n          ")]):e._e()]}))]],2):e._e(),e._v(" "),t("div",{class:["base-result-box-section__background",{"base-result-box-section__background--white":e.editModeWhiteBackground&&e.editModeActive}]},[e.editModeActive?t("div",{key:e.headerText+"_messageArea",staticClass:"base-result-box-section__message-area"},[t("div",{staticClass:"base-result-box-section__message-area-text"},[e._v("\n          "+e._s(e.messageText)+"\n        ")]),e._v(" "),t("span",{staticClass:"base-result-box-section__message-area-subtext"},[e._v(e._s(e.messageSubtext))]),e._v(" "),e._t("optionsMessageAreaAfter")],2):e._e(),e._v(" "),e.editModeActive?t("BaseSelectOptions",{key:e.headerText+"_selectOptions",attrs:{"selected-number-text":e.getI18nString(e.selectOptionsText.entriesSelected),"select-text":e.getI18nString(e.selectOptionsText.selectAll),"deselect-text":e.getI18nString(e.selectOptionsText.selectNone),list:e.visibleBoxes,"selected-list":e.selectedListInt},on:{selected:e.selectAllTriggered}}):e._e(),e._v(" "),t("span",{staticClass:"supportive-text",attrs:{"aria-live":"assertive"}},[e._v("\n        "+e._s(e.currentSupportiveText)+"\n      ")]),e._v(" "),e.entryListInt.length?[t(e.draggableComponent,{ref:"resultBoxesArea",tag:"component",staticClass:"base-result-box-section__boxes-container",attrs:{animation:!!e.draggable&&150,tag:!!e.draggable&&"ul",draggable:!!e.editModeActive&&".base-result-box-section__result-box-item","aria-label":e.headerText,tabindex:"0",handle:".base-result-box-section__result-box-item__draggable .base-image-box-content","force-fallback":"true",role:"list"},model:{value:e.visibleBoxes,callback:function(t){e.visibleBoxes=t},expression:"visibleBoxes"}},[e._l(e.visibleBoxes,(function(i,s){return t("li",{key:e.getPropValue(e.identifierPropertyName,i),ref:"resultBoxItem",refInFor:!0,class:["base-result-box-section__box-item","base-result-box-section__result-box-item",{"base-result-box-section__box-item__hidden":!e.initialBoxCalcDone},"base-result-box-section__box-item-"+e.elementId,{"base-result-box-section__result-box-item__draggable":e.draggable&&e.editModeActive},{"base-result-box-section__result-box-item__dragging":e.movableElementId===i.id}],attrs:{id:"li-"+i.id,tabindex:e.editModeActive||!e.disableListElementFocus?0:-1,"aria-label":e.getPropValue(e.titlePropertyName,i),"aria-grabbed":(e.movableElementId===i.id).toString(),"aria-selected":!!e.editModeActive&&e.isEntrySelected(i).toString(),role:"listitem"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnterKey(t,i,s)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&0!==t.button||"button"in t&&2!==t.button?null:(t.preventDefault(),void(e.editModeActive&&e.draggable&&e.movableElementId&&e.moveEntry(t,s)))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault(),e.editModeActive&&e.entrySelected(e.getPropValue(e.identifierPropertyName,i),!e.isEntrySelected(i))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.cancelDragMode.apply(null,arguments)}]}},[e._t("resultBox",(function(){return[t("BaseImageBox",{key:e.getPropValue(e.identifierPropertyName,i),attrs:{selectable:e.imageBoxesSelectable,draggable:e.editModeActive&&e.draggable,selected:e.isEntrySelected(i),"box-size":{width:"auto"},"box-ratio":100,title:e.getPropValue(e.titlePropertyName,i),subtext:i.subtext,description:i.description,"image-url":i.imageUrl,"box-text":i.text,lazyload:!0},on:{"select-triggered":function(t){e.entrySelected(e.getPropValue(e.identifierPropertyName,i),t)},clicked:function(t){e.entryClicked(e.getPropValue(e.identifierPropertyName,i))}}})]}),{item:i,index:s,selectActive:e.editModeActive,isEntrySelected:e.isEntrySelected,entrySelected:e.entrySelected})],2)})),e._v(" "),e.showActionButtonBoxes&&e.editModeActive?e._t("actionButtons",(function(){return[e._l(e.actionButtonsConfig,(function(i){return["bottom"!==i.display&&"all"!==i.display&&i.display?e._e():t("BaseBoxButton",{key:i.value,class:["base-result-box-section__box-item","base-result-box-section__box-item-"+e.elementId],attrs:{text:e.getI18nString(i.text),"box-size":{width:"calc(25% - 8rem/19 - (8rem/19/2))",height:"100%"},icon:i.icon,"box-style":"small","box-type":"button"},on:{clicked:function(t){return e.submitAction(i.value)}}})]}))]}),{itemsPerRow:e.itemsPerRow,elementId:e.elementId}):e.useExpandMode&&!e.editModeActive&&e.expandNeeded&&e.initialBoxCalcDone?t("BaseBoxButton",{class:["base-result-box-section__box-item","base-result-box-section__box-item-"+e.elementId],attrs:{"box-size":{width:"calc(25% - 8rem/19 - (8rem/19/2))",height:"100%"},icon:"",text:"","box-type":"button"},on:{clicked:function(t){e.expandedInt=!e.expandedInt}},scopedSlots:e._u([{key:"default",fn:function(){return[e.editModeActive?e._e():t("div",{staticClass:"base-result-box-section__expand-button__content"},[e.expandedInt?e._e():t("span",{staticClass:"base-result-box-section__expand-button__content-number"},[e._v("\n                  "+e._s("+"+((e.total||e.entryList.length)-e.visibleBoxes.length))+"\n                ")]),e._v(" "),t("span",{class:[e.expandedInt?"base-result-box-section__expand-button__content-text-expanded":"base-result-box-section__expand-button__content-text-collapsed"]},[e._v("\n                  "+e._s(e.expandedInt?e.expandText.collapse:e.expandText.expand)+"\n                ")])])]},proxy:!0}],null,!1,902529970)}):e._e()],2),e._v(" "),e.usePagination&&e.pages>1&&(e.editModeActive&&!e.draggable||!e.editModeActive&&e.expandedInt)?t("BasePagination",{key:"pagination-"+e.elementId,attrs:{total:e.pages,current:e.currentPageNumberInt,"use-link-element":e.usePaginationLinkElement},on:{"set-page":e.setPage}}):e._e()]:e._e()],2)])])}),[],!1,null,"611bc1fa",null);t.default=d.exports}}]);