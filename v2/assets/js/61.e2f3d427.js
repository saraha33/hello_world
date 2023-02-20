(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{968:function(t,e,v){"use strict";v.r(e);var _=v(11),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"basebox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basebox"}},[t._v("#")]),t._v(" BaseBox")]),t._v(" "),e("blockquote",[e("p",[t._v("Base Component for everything Box shaped")])]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("renderElementAs")]),t._v(" "),e("td",[t._v("specify the tag type of the box")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("'div'")])]),t._v(" "),e("tr",[e("td",[t._v("boxSize")]),t._v(" "),e("td",[t._v("define the size of the box"),e("br"),t._v("should be an object with width and / or height")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("{"),e("br"),t._v(" width: '200px'"),e("br"),t._v("}")])]),t._v(" "),e("tr",[e("td",[t._v("boxRatio")]),t._v(" "),e("td",[t._v("define the ratio of width and height of the box"),e("br"),t._v("(in percent string, e.g. 1:1 --\x3e '100', 1:2 --\x3e '50')")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("'100'")])]),t._v(" "),e("tr",[e("td",[t._v("boxHover")]),t._v(" "),e("td",[t._v("enable or disable hover")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("boxShadowSize")]),t._v(" "),e("td",[t._v("set boxShadow size")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("large")]),t._v(", "),e("code",[t._v("small")])]),t._v(" "),e("td",[t._v("'small'")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("set disabled attribute (e.g. for button elements)")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("additionalAttributes")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("{}")])])])]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event name")]),t._v(" "),e("th",[t._v("Properties")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("clicked")]),t._v(" "),e("td",[e("strong",[t._v("undefined")]),t._v(" "),e("code",[t._v("MouseEvent")]),t._v(" - the native mouse event")]),t._v(" "),e("td",[t._v("event emitted upon box click")])])])]),t._v(" "),e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Bindings")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("slot for box contents")]),t._v(" "),e("td")])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("no-ssr",[e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div class="background">\n    <base-box :box-size="{ width: \'calc(25% - 12px)\' }">\n      <p class="example-text">Example Content</p>\n    </base-box>\n    <base-box :box-size="{ width: \'calc(25% - 12px)\' }" />\n    <base-box :box-size="{ width: \'calc(25% - 12px)\' }" :disabled="true">\n      <p class="example-text">Box disabled</p>\n    </base-box>\n    <base-box :box-hover="false" :box-size="{ width: \'calc(25% - 12px)\' }">\n      <p class="example-text">Hover styling disabled</p>\n    </base-box>\n  </div>\n</template>\n\n<script>\nexport default {};\n<\/script>\n<style>\n.background {\n  display: flex;\n  flex-wrap: wrap;\n  background-color: rgb(240, 240, 240);\n  padding: 16px;\n}\n\n.base-box {\n  margin-right: 16px;\n}\n\n.base-box:nth-of-type(4n) {\n  margin-right: 0;\n}\n\n.example-text {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n</style>\n',requires:{}}})],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);