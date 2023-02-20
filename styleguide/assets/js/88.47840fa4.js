(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{994:function(e,s,t){"use strict";t.r(s);var r=t(11),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"baseprogressbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baseprogressbar"}},[e._v("#")]),e._v(" BaseProgressBar")]),e._v(" "),s("blockquote",[s("p",[e._v("Progress bar including file upload features (display filename or file size)\nand remove functionality")])]),e._v(" "),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("#")]),e._v(" Props")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Prop name")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Values")]),e._v(" "),s("th",[e._v("Default")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("errorMessage")]),e._v(" "),s("td",[e._v("additional error message")]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("''")])]),e._v(" "),s("tr",[s("td",[e._v("fileName")]),e._v(" "),s("td",[e._v("filename that will be displayed in the bar")]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("''")])]),e._v(" "),s("tr",[s("td",[e._v("fileSize")]),e._v(" "),s("td",[e._v("filesize that will be displayed in the bar")]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("''")])]),e._v(" "),s("tr",[s("td",[e._v("progress")]),e._v(" "),s("td",[e._v("progress of the upload (percentage)")]),e._v(" "),s("td",[e._v("number|string")]),e._v(" "),s("td",[s("code",[e._v("0-100")])]),e._v(" "),s("td",[e._v("0")])]),e._v(" "),s("tr",[s("td",[e._v("status")]),e._v(" "),s("td",[e._v("indicate the success or fail of an upload")]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",[s("code",[e._v("success")]),e._v(", "),s("code",[e._v("fail")]),e._v(", "),s("code",[e._v("''")])]),e._v(" "),s("td",[e._v("''")])]),e._v(" "),s("tr",[s("td",[e._v("showRemove")]),e._v(" "),s("td",[e._v("show an remove icon")]),e._v(" "),s("td",[e._v("boolean")]),e._v(" "),s("td",[e._v("-")]),e._v(" "),s("td",[e._v("false")])])])]),e._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Event name")]),e._v(" "),s("th",[e._v("Properties")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("remove-item")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("event triggered on remove icon click")])])])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),s("p",[e._v("A simple progress bar")]),e._v(" "),s("no-ssr",[s("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div>\n    <BaseProgressBar :progress="progress" />\n    <div class="spacer"></div>\n    <BaseButton text="Change Upload State" @clicked="changeProgress" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      progress: 0\n    };\n  },\n  methods: {\n    changeProgress() {\n      // simply switch between complete upload and zero upload\n      this.progress = this.progress === 0 ? 100 : 0;\n    }\n  }\n};\n<\/script>\n<style lang="scss" scoped>\n.spacer {\n  height: 20px;\n}\n</style>\n',requires:{}}})],1),s("p",[e._v("A file upload bar")]),e._v(" "),s("no-ssr",[s("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n  <div>\n    <BaseProgressBar\n      :progress="100"\n      :show-remove="false"\n      status="success"\n      file-name="myFileToUploadSucceeded.txt"\n      file-size="22kB"\n    />\n    <div class="spacer" />\n    <BaseProgressBar\n      :progress="0"\n      :show-remove="false"\n      status="fail"\n      error-message="Unfortunately an error has occurred."\n      file-name="myFileToUploadFailed.txt"\n      file-size="22kB"\n    />\n    <div v-if="showSecondBar" class="spacer" />\n    <BaseProgressBar\n      v-if="showSecondBar"\n      :progress="progress"\n      :show-remove="progress === 0"\n      file-name="myFileToUploadWithAReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongFileName.txt"\n      file-size="22kB"\n      @remove-item="showSecondBar = false"\n    />\n    <div class="spacer" />\n    <BaseButton\n      v-if="showSecondBar"\n      text="Change Upload State"\n      @clicked="changeProgress"\n    />\n    <BaseButton\n      v-if="!showSecondBar"\n      text="Reappear second bar"\n      @clicked="showSecondBar = true"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      progress: 0,\n      showSecondBar: true\n    };\n  },\n  methods: {\n    changeProgress() {\n      // simply switch between complete upload and zero upload\n      this.progress = this.progress === 0 ? 100 : 0;\n    }\n  }\n};\n<\/script>\n<style lang="scss" scoped>\n.spacer {\n  height: 20px;\n}\n</style>\n',requires:{}}})],1)],1)}),[],!1,null,null,null);s.default=a.exports}}]);