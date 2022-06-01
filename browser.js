// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).string=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},i=Object.defineProperty,t=Object.prototype,n=t.toString,a=t.__defineGetter__,o=t.__defineSetter__,c=t.__lookupGetter__,s=t.__lookupSetter__;var p,u,l,f,g,d,h,w,b,v,m,y,_,k,x,E,S,j,T,V,$=i,I=function(e,r,i){var p,u,l,f;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((u="value"in i)&&(c.call(e,r)||s.call(e,r)?(p=e.__proto__,e.__proto__=t,delete e[r],e[r]=i.value,e.__proto__=p):e[r]=i.value),l="get"in i,f="set"in i,u&&(l||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(e,r,i.get),f&&o&&o.call(e,r,i.set),e},F=r()?$:I;function A(){if(u)return p;return u=1,p=function(e){return"number"==typeof e}}function C(){if(f)return l;function e(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}return f=1,l=function(r,i,t){var n=!1,a=i-r.length;return a<0||(function(e){return"-"===e[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,n&&(r="-"+r)),r}}function R(){if(k)return _;k=1;var e=function(){if(d)return g;d=1;var e=A(),r=C(),i=String.prototype.toLowerCase,t=String.prototype.toUpperCase;return g=function(n){var a,o,c;switch(n.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;default:a=10}if(o=n.arg,c=parseInt(o,10),!isFinite(c)){if(!e(o))throw new Error("invalid integer. Value: "+o);c=0}return c<0&&("u"===n.specifier||10!==a)&&(c=4294967295+c+1),c<0?(o=(-c).toString(a),n.precision&&(o=r(o,n.precision,n.padRight)),o="-"+o):(o=c.toString(a),c||n.precision?n.precision&&(o=r(o,n.precision,n.padRight)):o="",n.sign&&(o=n.sign+o)),16===a&&(n.alternate&&(o="0x"+o),o=n.specifier===t.call(n.specifier)?t.call(o):i.call(o)),8===a&&n.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}}(),r=w?h:(w=1,h=function(e){return"string"==typeof e}),i=function(){if(v)return b;v=1;var e=A(),r=Math.abs,i=String.prototype.toLowerCase,t=String.prototype.toUpperCase,n=String.prototype.replace,a=/e\+(\d)$/,o=/e-(\d)$/,c=/^(\d+)$/,s=/^(\d+)e/,p=/\.0$/,u=/\.0*e/,l=/(\..*[^0])0*e/;return b=function(f){var g,d,h=parseFloat(f.arg);if(!isFinite(h)){if(!e(f.arg))throw new Error("invalid floating-point number. Value: "+d);h=f.arg}switch(f.specifier){case"e":case"E":d=h.toExponential(f.precision);break;case"f":case"F":d=h.toFixed(f.precision);break;case"g":case"G":r(h)<1e-4?((g=f.precision)>0&&(g-=1),d=h.toExponential(g)):d=h.toPrecision(f.precision),f.alternate||(d=n.call(d,l,"$1e"),d=n.call(d,u,"e"),d=n.call(d,p,""));break;default:throw new Error("invalid double notation. Value: "+f.specifier)}return d=n.call(d,a,"e+0$1"),d=n.call(d,o,"e-0$1"),f.alternate&&(d=n.call(d,c,"$1."),d=n.call(d,s,"$1.e")),h>=0&&f.sign&&(d=f.sign+d),f.specifier===t.call(f.specifier)?t.call(d):i.call(d)}}(),t=function(){if(y)return m;function e(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}return y=1,m=function(r,i,t){var n=i-r.length;return n<0?r:r=t?r+e(n):e(n)+r}}(),n=C(),a=String.fromCharCode,o=isNaN,c=Array.isArray;function s(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}return _=function(p){var u,l,f,g,d,h,w,b,v;if(!c(p))throw new TypeError("invalid argument. First argument must be an array. Value: `"+p+"`.");for(h="",w=1,b=0;b<p.length;b++)if(f=p[b],r(f))h+=f;else{if(u=void 0!==f.precision,!(f=s(f)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+b+"`. Value: `"+f+"`.");for(f.mapping&&(w=f.mapping),l=f.flags,v=0;v<l.length;v++)switch(g=l.charAt(v)){case" ":f.sign=" ";break;case"+":f.sign="+";break;case"-":f.padRight=!0,f.padZeros=!1;break;case"0":f.padZeros=l.indexOf("-")<0;break;case"#":f.alternate=!0;break;default:throw new Error("invalid flag: "+g)}if("*"===f.width){if(f.width=parseInt(arguments[w],10),w+=1,o(f.width))throw new TypeError("the argument for * width at position "+w+" is not a number. Value: `"+f.width+"`.");f.width<0&&(f.padRight=!0,f.width=-f.width)}if(u&&"*"===f.precision){if(f.precision=parseInt(arguments[w],10),w+=1,o(f.precision))throw new TypeError("the argument for * precision at position "+w+" is not a number. Value: `"+f.precision+"`.");f.precision<0&&(f.precision=1,u=!1)}switch(f.arg=arguments[w],f.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":u&&(f.padZeros=!1),f.arg=e(f);break;case"s":f.maxWidth=u?f.precision:-1;break;case"c":if(!o(f.arg)){if((d=parseInt(f.arg,10))<0||d>127)throw new Error("invalid character code. Value: "+f.arg);f.arg=o(d)?String(f.arg):a(d)}break;case"e":case"E":case"f":case"F":case"g":case"G":u||(f.precision=6),f.arg=i(f);break;default:throw new Error("invalid specifier: "+f.specifier)}f.maxWidth>=0&&f.arg.length>f.maxWidth&&(f.arg=f.arg.substring(0,f.maxWidth)),f.padZeros?f.arg=n(f.arg,f.width||f.precision,f.padRight):f.width&&(f.arg=t(f.arg,f.width,f.padRight)),h+=f.arg||"",w+=1}return h},_}var O=function(e,r,i){F(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})},P={};return O(P,"formatInterpolate",function(){if(E)return x;E=1;var e=R();return x=e}()),O(P,"formatTokenize",function(){if(V)return T;V=1;var e=function(){if(j)return S;j=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function r(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}return S=function(i){var t,n,a,o;for(n=[],o=0,a=e.exec(i);a;)(t=i.slice(o,e.lastIndex-a[0].length)).length&&n.push(t),n.push(r(a)),o=e.lastIndex,a=e.exec(i);return(t=i.slice(o)).length&&n.push(t),n}}();return T=e}()),P}));
//# sourceMappingURL=browser.js.map
