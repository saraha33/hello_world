(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1059:function(t,e,v){"use strict";v.r(e);var a=v(11),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"baseswitchbutton"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#baseswitchbutton"}},[t._v("#")]),t._v(" BaseSwitchButton")]),t._v(" "),e("blockquote",[e("p",[t._v("accessible tab switch buttons")])]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("specify the tabs as array of object with "),e("code",[t._v("value")]),t._v(" and "),e("code",[t._v("label")]),t._v(" properties")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("[{ label: 'tab', value: 'tab' }]")])]),t._v(" "),e("tr",[e("td",[t._v("v-model")]),t._v(" "),e("td",[t._v("set the currently active tab (specify the value of the object not the label)")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("function() {"),e("br"),t._v(" return this.options[0] ? this.options[0].value : 'tab';"),e("br"),t._v("}")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[t._v("set a label for the switches, not visible but needed for accessibility")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event name")]),t._v(" "),e("th",[t._v("Properties")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("switch")]),t._v(" "),e("td",[e("strong",[t._v("undefined")]),t._v(" "),e("code",[t._v("string")]),t._v(" - the "),e("code",[t._v("value")]),t._v(" of the selected option object")]),t._v(" "),e("td",[t._v("Event emitted on options switch, value of options object is emitted")])])])]),t._v(" "),e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Bindings")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("right-of-text")]),t._v(" "),e("td",[t._v("slot to display something right of text (e.g. icon)")]),t._v(" "),e("td",[e("strong",[t._v("value")]),t._v(" "),e("code",[t._v("string")]),t._v(" - the value of the option object")])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("no-ssr",[e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div>\n    <BaseSwitchButton\n      :options="[\n        { label: \'German\', value: \'de\' },\n        { label: \'English\', value: \'en\' }\n      ]"\n      v-model="activeLang"\n      label="Select Language"\n    />\n    <div>{{ "active lang: " + activeLang }}</div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    activeLang: "en"\n  })\n};\n<\/script>\n',requires:{}}})],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);