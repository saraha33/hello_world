(window.webpackJsonp=window.webpackJsonp||[]).push([[136,134,135,137,138],{246:function(t,e,n){"use strict";n(92);e.a={computed:{hasI18n(){return Boolean(this.$i18n)}},methods:{getI18nTerm(t,e=-1,n={}){if(this.hasI18n&&this.$te(t))return e>=0?this.$tc(t,e,n):this.$t(t,n);return t.split(".").pop()||t},setLangLabels(t,e){return e.reduce((e,n)=>(this.$set(e,n,this.$i18n?this.$t(t,n):t.split(".").pop()),e),{})},getLangLabel(t,e=!1){const n=this.hasI18n?this.language||this.$i18n.locale:this.language;if("string"==typeof t)return t;if(t&&n&&t[n])return t[n];if(t&&n&&e){const e=Object.keys(t).find(e=>!!t[e]);return t[e]||t[n]||""}return t}}}}}]);