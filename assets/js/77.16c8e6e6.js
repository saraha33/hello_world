(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{986:function(t,e,o){"use strict";o.r(e);var a=o(11),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"baseloader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#baseloader"}},[t._v("#")]),t._v(" BaseLoader")]),t._v(" "),e("blockquote",[e("p",[t._v("Minimal loader component to be reused in other components")])]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("loaderColor")]),t._v(" "),e("td",[t._v("define a color for the loader")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("add positional properties like for a style object")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("{}")])]),t._v(" "),e("tr",[e("td",[t._v("hide")]),t._v(" "),e("td",[t._v("set this to "),e("code",[t._v("true")]),t._v(" if you want to keep element (with height and width) but dont"),e("br"),t._v("want the loader to show")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("no-ssr",[e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div class="container">\n    <BaseLoader v-if="showLoader" loader-color="red" class="loader" />\n    <BaseButton text="Toggle Loader!" @clicked="showLoader = !showLoader" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      showLoader: false\n    };\n  }\n};\n<\/script>\n\n<style lang="scss">\n.container {\n  position: relative;\n  height: 100px;\n}\n.loader {\n  top: 50%;\n  transform: translateY(-50%);\n}\n</style>\n',requires:{}}})],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);