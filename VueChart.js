!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("chart.js")):"function"==typeof define&&define.amd?define(["chart.js"],e):t.VueChart=e(t.Chart)}(this,function(t){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var n=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,r=(n.clone,n.isArray),i=n.isObject,o=function(t,n){if(t===n)return t;if(r(n)){if(r(t)){for(var a=0,s=Math.min(t.length,n.length);a<s;++a)t[a]=o(t[a],n[a]);return t.length<n.length?t.push.apply(t,n.slice(t.length)):t.length>n.length&&t.splice(n.length),t}}else if(i(n)&&i(t)){for(var f in t)!f.startsWith("_")&&e(t,f)&&e(n,f)&&(t[f]=o(t[f],n[f]));for(var h in t)h.startsWith("_")||!e(t,h)||e(n,h)||delete t[h];for(var u in n)u.startsWith("_")||!e(n,u)||e(t,u)||(t[u]=n[u]);return t}return n},a=t.helpers.merge,s=t.helpers.clone,f={name:"VueChart",props:{type:String,data:Object,options:Object,updateConfig:Object},mounted:function(){var e=this;this.$watch(function(){var n=e.type,r=s(e.data),i=s(e.options),f=e.updateConfig,h=e.chart;if(h){if(h.config.type===n)return o(h.data,r),a(h.options,i),void h.update(f);h.destroy()}e.chart=new t(e.$refs.canvas,{type:n,data:r,options:i})})},beforeDestroy:function(){this.chart&&this.chart.destroy()},render:function(t){return t("div",{style:{position:"relative",width:"100%",height:"100%"}},[t("canvas",{ref:"canvas"})])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(f.name,f),f});
