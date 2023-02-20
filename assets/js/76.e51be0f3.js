(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{984:function(t,e,n){"use strict";n.r(e);var v=n(11),l=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"baselink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#baselink"}},[t._v("#")]),t._v(" BaseLink")]),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("renderLinkAs")]),t._v(" "),e("td",[t._v("specify how link element should be rendered - this needs to be a"),e("br"),t._v("valid vue link component (e.g. "),e("code",[t._v("RouterLink")]),t._v(", "),e("code",[t._v("NuxtLink")]),t._v(") and vue-router"),e("br"),t._v("is necessary")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("'RouterLink'")])]),t._v(" "),e("tr",[e("td",[t._v("externalLinkTarget")]),t._v(" "),e("td",[t._v("specify external link target")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("_blank")]),t._v(", "),e("code",[t._v("_self")])]),t._v(" "),e("td",[t._v("'_blank'")])]),t._v(" "),e("tr",[e("td",[t._v("tooltip")]),t._v(" "),e("td",[t._v("tooltip content"),e("br"),t._v("by default a list (label: value) is rendered"),e("br"),t._v("structure:"),e("br"),e("code",[t._v("[{ label: 'label', value: 'value', url: '#' }]")]),e("br"),t._v("or use v-slot:tooltip to customize the content")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("[]")])]),t._v(" "),e("tr",[e("td",[t._v("tooltipAsync")]),t._v(" "),e("td",[t._v("async tooltip content"),e("br"),t._v("if set, event "),e("code",[t._v("@tooltip-clicked")]),t._v(" with this object will be emitted")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("[]")])]),t._v(" "),e("tr",[e("td",[t._v("tooltipStyles")]),t._v(" "),e("td",[t._v("additional tooltip styles"),e("br"),e("strong",[t._v("caveat")]),t._v(": properties "),e("code",[t._v("top")]),t._v(", "),e("code",[t._v("left")]),t._v(", "),e("code",[t._v("right")]),t._v(" will be overwritten due position calculation")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("{}")])]),t._v(" "),e("tr",[e("td",[t._v("source")]),t._v(" "),e("td",[t._v("internal identifier to route to")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("url")]),t._v(" "),e("td",[t._v("external url to link to")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("label of the entry")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("used in combination with property "),e("code",[t._v("source")]),t._v(" to render chip."),e("br"),e("code",[t._v("type")]),t._v(" identifies source type for chip click-event"),e("br"),t._v("eg: keyword | skill | object")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("''")])]),t._v(" "),e("tr",[e("td",[t._v("spaceAfter")]),t._v(" "),e("td",[t._v('add a space " " after element'),e("br"),t._v("useful for link-type tooltip in lists")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event name")]),t._v(" "),e("th",[t._v("Properties")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("chip-clicked")]),t._v(" "),e("td",[e("strong",[t._v("source")]),t._v(" "),e("code",[t._v("string")]),t._v(" - internal identifier"),e("br"),e("strong",[t._v("type")]),t._v(" "),e("code",[t._v("string")]),t._v(" - source type for chip click-event")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("tooltip-clicked")]),t._v(" "),e("td",[e("strong",[t._v("undefined")]),t._v(" "),e("code",[t._v("Array")]),t._v(" - async tooltip content")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Bindings")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("tooltip")]),t._v(" "),e("td",[t._v("slot to inject content")]),t._v(" "),e("td")])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("no-ssr",[e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div>\n    <h2>types</h2>\n    <template v-for="(link, index) in links">\n      <BaseLink\n        :key="index"\n        :source="link.source"\n        :tooltip="link.tooltip"\n        :tooltip-async="link.additional"\n        :tooltip-styles="{ \'min-width\': \'300px\', top: \'500px\' }"\n        :type="link.type"\n        :url="link.url"\n        :value="link.value"\n        @tooltipClicked="asyncTooltip($event, index)"\n      />\x3c!-- eslint-disable --\x3e<template v-if="index !== links.length - 1"\n        >, </template\n      >\x3c!-- eslint-enable --\x3e\n    </template>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      links: [\n        {\n          value: "text"\n        },\n        {\n          value: "external link",\n          url: "https://base.uni-ak.ac.at"\n        },\n        {\n          value: "email link",\n          url: "mailto:email@uni-ak.ac.at"\n        },\n        {\n          value: "internal link",\n          source: "internal.link"\n        },\n        {\n          value: "tooltip",\n          tooltip: [\n            {\n              label: "label",\n              value: "value"\n            },\n            {\n              label: "label",\n              value: "external link",\n              url: "https://base.uni-ak.ac.at"\n            }\n          ]\n        },\n        {\n          value: "aync tooltip",\n          additional: [\n            {\n              label: "label",\n              value: "value"\n            }\n          ]\n        },\n        {\n          value: "internal link (chips)",\n          source: "internal.link",\n          type: "activity"\n        }\n      ]\n    };\n  },\n  methods: {\n    asyncTooltip(value, index) {\n      setTimeout(() => {\n        this.$set(this.links[index], "tooltip", [\n          {\n            label: "label",\n            value: "value"\n          },\n          {\n            label: "label",\n            value: "external link",\n            url: "https://base.uni-ak.ac.at"\n          }\n        ]);\n      }, 500);\n    }\n  }\n};\n<\/script>\n',requires:{}}})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);