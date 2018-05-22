var version = detectIE();

if (version === false) {
//   do nothing
} else if (version >= 12) {
//   do nothing -- this is Edge
} else {
    // polyfills
    // foreach
    Array.prototype.forEach||(Array.prototype.forEach=function(r,o){var t,n;if(null==this)throw new TypeError(" this is null or not defined");var e=Object(this),i=e.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(t=o),n=0;n<i;){var f;n in e&&(f=e[n],r.call(t,f,n,e)),n++}});
    // array-from
    Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){return"function"==typeof n||"[object Function]"===r.call(n)},t=Math.pow(2,53)-1,e=function(r){var n=function(r){var n=Number(r);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n}(r);return Math.min(Math.max(n,0),t)};return function(r){var t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!n(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var i,u=e(t.length),f=n(this)?Object(new this(u)):new Array(u),c=0;c<u;)i=t[c],f[c]=a?void 0===o?a(i,c):a.call(o,i,c):i,c+=1;return f.length=u,f}}());
    // svg bg
    !function(e){"use strict";function t(){function t(e){return(e+"").replace(i,function(e,t,n){return t=t.split(";"),t.indexOf("image/svg+xml")>-1&&-1===t.indexOf("base64")&&/^<svg\b/i.test(n)&&(t=t.filter(function(e){return"utf8"!==e&&"charset=utf-8"!==e}),c?(n=encodeURIComponent(decodeURIComponent(n)),t.push("charset=utf-8")):(n=n.replace(/#/g,"%23"),t.push("utf8"))),"data:"+t.join(";")+","+n})}function n(e){return(e+"").replace(l,function(e,n,o,r){return n=n||"","url("+n+t(o||r)+n+")"})}function o(t){var o,r,c,u;for(u=t.length-1;u>=0;u--)if(o=t[u],(r=t.getPropertyValue(o))&&(c=n(r))!==r)try{t.setProperty(o,c,t.getPropertyPriority(o))}catch(i){e.console.warn("Couldn't set property.",i,o)}}function r(e){e.style&&o(e.style),e.cssRules&&u(e.cssRules).forEach(r),e.styleSheet&&r(e.styleSheet)}var c=!!document.uniqueID,u=Function.prototype.call.bind(Array.prototype.slice),i=new RegExp("^data:(.+?),(.*)$"),l=new RegExp("\\burl\\((?:('|\")(.*?)\\1|(.*?))\\)","g");u(document.styleSheets).forEach(r),["src","data"].forEach(function(e){u(document.querySelectorAll("["+e+'^="data:"]')).forEach(function(n){n[e]=t(n[e])})}),u(document.querySelectorAll("[style]")).forEach(function(e){o(e.style)}),function(t){var o,r,c,u;t&&(!function(e){e&&(t.setProperty=function(t,o,r){e.call(this,t,n(o),r||"")})}(t.setProperty),(o=(Object.prototype.toString.call(document.body.style)||"").replace(/^\[object (.+?)\]$/,"$1"))&&("CSS2Properties"===o||"CSS3Properties"===o||"CSSProperties"===o?(r=e[o].prototype,c=Object.keys(r)):"MSStyleCSSProperties"===o?(r=t,c=Object.keys(r)):(r=t,c=Object.keys(r),-1===c.indexOf("color")&&(c=Object.keys(document.body.style),u=document.body.style,-1===c.indexOf("color")&&(c=Object.keys(e.getComputedStyle(document.body,""))))),c.forEach(function(e){var t=Object.getOwnPropertyDescriptor(u||r,e);t&&t.enumerable&&(u||t.set)&&(u?Object.defineProperty(r,e,{configurable:!0,enumerable:!0,get:function(){return r.getPropertyValue.call(this,e)},set:function(t){r.setProperty.call(this,e,t,"")}}):!function(o){Object.defineProperty(r,e,{configurable:t.configurable,enumerable:t.enumerable,get:t.get,set:function(e){o.call(this,n(e))}})}(t.set))})),c&&-1!==c.indexOf("cssText")||!function(e){e&&e.set&&!function(o){Object.defineProperty(t,"cssText",{configurable:e.configurable,enumerable:e.enumerable,get:e.get,set:function(e){o.call(this,n(e))}})}(e.set)}(Object.getOwnPropertyDescriptor(t,"cssText")))}(e.CSSStyleDeclaration&&e.CSSStyleDeclaration.prototype),function(e){e&&(!function(t){t&&(e.insertRule=function(e,o){t.call(this,n(e),o)})}(e.insertRule),function(t){t&&(e.addRule=function(e,o,r){t.call(this,e,n(o),r)})}(e.addRule))}(e.CSSStyleSheet&&e.CSSStyleSheet.prototype),function(n){n&&Object.getOwnPropertyNames(e).forEach(function(o){var r;try{r=e[o]&&e[o].prototype}catch(c){return void e.console.warn("Couldn't get prototype.",c,o)}r&&n.prototype.isPrototypeOf(r)&&["src","data"].forEach(function(e){!function(n){n&&n.set&&!function(o){Object.defineProperty(r,e,{configurable:n.configurable,enumerable:n.enumerable,get:n.get,set:function(e){o.call(this,t(e))}})}(n.set)}(Object.getOwnPropertyDescriptor(r,e))})})}(e.HTMLElement)}"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t,!1)}(Function("return this")());
}

// this shit from codepen
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  // other browser
  return false;
}
