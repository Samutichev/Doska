/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/simplify-js@1.2.4/simplify.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(){"use strict";function n(n,e,f){var t=e.x,u=e.y,i=f.x-t,r=f.y-u;if(0!==i||0!==r){var o=((n.x-t)*i+(n.y-u)*r)/(i*i+r*r);o>1?(t=f.x,u=f.y):o>0&&(t+=i*o,u+=r*o)}return(i=n.x-t)*i+(r=n.y-u)*r}function e(e,f){var t=e.length-1,u=[e[0]];return function e(f,t,u,i,r){for(var o,d=i,s=t+1;s<u;s++){var y=n(f[s],f[t],f[u]);y>d&&(o=s,d=y)}d>i&&(o-t>1&&e(f,t,o,i,r),r.push(f[o]),u-o>1&&e(f,o,u,i,r))}(e,0,t,f,u),u.push(e[t]),u}function f(n,f,t){if(n.length<=2)return n;var u=void 0!==f?f*f:1;return n=e(n=t?n:function(n,e){for(var f,t,u,i,r,o=n[0],d=[o],s=1,y=n.length;s<y;s++)f=n[s],u=o,i=void 0,r=void 0,i=(t=f).x-u.x,r=t.y-u.y,i*i+r*r>e&&(d.push(f),o=f);return o!==f&&d.push(f),d}(n,u),u)}"function"==typeof define&&define.amd?define(function(){return f}):"undefined"!=typeof module?(module.exports=f,module.exports.default=f):"undefined"!=typeof self?self.simplify=f:window.simplify=f}();
//# sourceMappingURL=/sm/eca0f9334aa4defd09cf83dfc6d2cfe23f472e87984c4b6af46ebd122c29a43e.map