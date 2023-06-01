// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(u.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),l="get"in e,p="set"in e,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var f=t;function s(r,t,e){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function l(r){return""===r?"":r.charAt(0).toUpperCase()+r.slice(1)}function p(r,t,e){return r.replace(t,e)}var g=void 0!==String.prototype.trim,h=String.prototype.trim;var v=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var d=g&&""===h.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===h.call("᠎")?function(r){return h.call(r)}:function(r){return p(r,v,"$1")},y=/\s+/g,b=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,w=/(?:\s|^)([^\s]+)(?=\s|$)/g,m=/([a-z0-9])([A-Z])/g;function _(r,t,e){return t=t.toLowerCase(),0===e?t:l(t)}function j(r){return r=p(r,b," "),r=p(r,y," "),r=p(r,m,"$1 $2"),p(r=d(r),w,_)}function S(r,t,e){var n,o,i;return t<0&&(t+=r.length),(n=r.charCodeAt(t))>=55296&&n<=56319&&t<r.length-1?(i=n,56320<=(o=r.charCodeAt(t+1))&&o<=57343?1024*(i-55296)+(o-56320)+65536:i):e&&n>=56320&&n<=57343&&t>=1?(o=n,55296<=(i=r.charCodeAt(t-1))&&i<=56319?1024*(i-55296)+(o-56320)+65536:o):n}function A(r){return r.toUpperCase()}var E=/\s+/g,C=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,$=/([a-z0-9])([A-Z])/g;function O(r){return r=p(r,C," "),r=p(r,$,"$1 $2"),A(r=p(r=d(r),E,"_"))}var k=void 0!==String.prototype.endsWith;var x=String.prototype.endsWith;var T=k?function(r,t,e){var n,o;return o=t.length,0===e?0===o:(n=e<0?r.length+e:e,0===o||!(n-o<0||n>r.length)&&x.call(r,t,n))}:function(r,t,e){var n,o,i;if(o=t.length,0===e)return 0===o;if(n=e<0?r.length+e:e,0===o)return!0;if((n-=o)<0)return!1;for(i=0;i<o;i++)if(r.charCodeAt(n+i)!==t.charCodeAt(i))return!1;return!0};function F(r){return"number"==typeof r}function P(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function V(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+P(o):P(o)+r,n&&(r="-"+r)),r}var L=String.prototype.toLowerCase,R=String.prototype.toUpperCase;function W(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!F(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=V(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=V(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===R.call(r.specifier)?R.call(e):L.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function I(r){return"string"==typeof r}var Z=Math.abs,z=String.prototype.toLowerCase,B=String.prototype.toUpperCase,U=String.prototype.replace,G=/e\+(\d)$/,M=/e-(\d)$/,X=/^(\d+)$/,N=/^(\d+)e/,D=/\.0$/,q=/\.0*e/,H=/(\..*[^0])0*e/;function J(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!F(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Z(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=U.call(e,H,"$1e"),e=U.call(e,q,"e"),e=U.call(e,D,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=U.call(e,G,"e+0$1"),e=U.call(e,M,"e-0$1"),r.alternate&&(e=U.call(e,X,"$1."),e=U.call(e,N,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===B.call(r.specifier)?B.call(e):z.call(e)}function K(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Q(r,t,e){var n=t-r.length;return n<0?r:r=e?r+K(n):K(n)+r}var Y=String.fromCharCode,rr=isNaN,tr=Array.isArray;function er(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function nr(r){var t,e,n,o,i,a,u,c,f;if(!tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(I(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=er(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,rr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,rr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=W(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!rr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=rr(i)?String(n.arg):Y(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=J(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=V(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Q(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ir(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ar(r){var t,e,n,o;for(e=[],o=0,n=or.exec(r);n;)(t=r.slice(o,or.lastIndex-n[0].length)).length&&e.push(t),e.push(ir(n)),o=or.lastIndex,n=or.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function ur(r){return r.toLowerCase()}function cr(r){var t,e,n,o;for(t=[],o=0;o<r.length;o++)(n=A(e=r[o]))===e&&(n=ur(e)),t.push(n);return t.join("")}var fr=/\s+/g,sr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,lr=/([a-z0-9])([A-Z])/g;function pr(r){return r=p(r,sr," "),r=p(r,lr,"$1 $2"),function(r){return r.toLowerCase()}(r=p(r=d(r),fr,"-"))}var gr=void 0!==String.prototype.repeat;var hr=String.prototype.repeat;var vr=gr?function(r,t){return hr.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},dr=Math.ceil;function yr(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=dr(n),vr(e,n)+r)}var br=void 0!==String.prototype.trimLeft,wr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;var mr=String.prototype.trimLeft;var _r=br?function(r){return mr.call(r)}:function(r){return p(r,wr,"")};var jr=/\s+/g,Sr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ar=/(?:\s|^)([^\s]+)(?=\s|$)/g,Er=/([a-z0-9])([A-Z])/g;function Cr(r,t){return l(t.toLowerCase())}function $r(r){return r=p(r,Sr," "),r=p(r,jr," "),r=p(r,Er,"$1 $2"),p(r=d(r),Ar,Cr)}function Or(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kr(r){return"string"==typeof r}var xr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Tr(){return xr&&"symbol"==typeof Symbol.toStringTag}var Fr=Object.prototype.toString;var Pr=Object.prototype.hasOwnProperty;function Vr(r,t){return null!=r&&Pr.call(r,t)}var Lr="function"==typeof Symbol?Symbol.toStringTag:"";var Rr=Tr()?function(r){var t,e,n;if(null==r)return Fr.call(r);e=r[Lr],t=Vr(r,Lr);try{r[Lr]=void 0}catch(t){return Fr.call(r)}return n=Fr.call(r),t?r[Lr]=e:delete r[Lr],n}:function(r){return Fr.call(r)},Wr=String.prototype.valueOf;var Ir=Tr();function Zr(r){return"object"==typeof r&&(r instanceof String||(Ir?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Rr(r)))}function zr(r){return kr(r)||Zr(r)}function Br(r){return"string"==typeof r}function Ur(r){var t,e,n;if(!Br(r))throw new TypeError(Ur("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=ar(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return nr.apply(null,e)}Or(zr,"isPrimitive",kr),Or(zr,"isObject",Zr);function Gr(r){var t,e,n,o;if(!kr(r))throw new TypeError(Ur("invalid argument. Must provide a string. Value: `%s`.",r));for(n=r.length,e=[],o=0;o<n;o++)(t=r.charCodeAt(o))<128?e.push(t):t<2048?(e.push(192|t>>6),e.push(128|63&t)):t<55296||t>=57344?(e.push(224|t>>12),e.push(128|t>>6&63),e.push(128|63&t)):(o+=1,t=65536+((1023&t)<<10|1023&r.charCodeAt(o)),e.push(240|t>>18),e.push(128|t>>12&63),e.push(128|t>>6&63),e.push(128|63&t));return e}function Mr(r){var t,e,n,o,i;for(n=(o=Gr(r)).length,e="",i=0;i<n;i++)e+=(t=o[i])>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||45===t||46===t||95===t||126===t?r.charAt(i):"%"+t.toString(16).toUpperCase();return e}function Xr(r,t,e){var n=r.indexOf(t);return""===r||""===t||""===e||n<0?r:e+r.substring(n)}var Nr=void 0!==String.prototype.trimRight,Dr=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var qr=String.prototype.trimRight;var Hr=Nr?function(r){return qr.call(r)}:function(r){return p(r,Dr,"")};var Jr=/\s+/g,Kr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Qr=/([a-z0-9])([A-Z])/g;function Yr(r){return r=p(r,Kr," "),r=p(r,Qr,"$1 $2"),function(r){return r.toLowerCase()}(r=p(r=d(r),Jr,"_"))}var rt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Rr(r)};var tt=/./;function et(r){return"boolean"==typeof r}var nt=Boolean.prototype.toString;var ot=Tr();function it(r){return"object"==typeof r&&(r instanceof Boolean||(ot?function(r){try{return nt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Rr(r)))}function at(r){return et(r)||it(r)}function ut(){return new Function("return this;")()}Or(at,"isPrimitive",et),Or(at,"isObject",it);var ct="object"==typeof self?self:null,ft="object"==typeof window?window:null,st="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},lt="object"==typeof st?st:null;var pt=function(r){if(arguments.length){if(!et(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ut()}if(ct)return ct;if(ft)return ft;if(lt)return lt;throw new Error("unexpected error. Unable to resolve global object.")}(),gt=pt.document&&pt.document.childNodes,ht=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function yt(r){return null!==r&&"object"==typeof r}function bt(r){var t,e,n,o;if(("Object"===(e=Rr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=dt.exec(n.toString()))return t[1]}return yt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Or(vt,"REGEXP",dt),Or(yt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!rt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yt));var wt="function"==typeof tt||"object"==typeof ht||"function"==typeof gt?function(r){return bt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?bt(r).toLowerCase():t};function mt(r){return"function"===wt(r)}var _t,jt=Object.getPrototypeOf;_t=mt(Object.getPrototypeOf)?jt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var St=_t;var At=Object.prototype;function Et(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!rt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),St(r))}(r),!t||!Vr(r,"constructor")&&Vr(t,"constructor")&&mt(t.constructor)&&"[object Function]"===Rr(t.constructor)&&Vr(t,"isPrototypeOf")&&mt(t.isPrototypeOf)&&(t===At||function(r){var t;for(t in r)if(!Vr(r,t))return!1;return!0}(r)))}function Ct(r,t){return Et(t)?Vr(t,"flags")&&(r.flags=t.flags,!kr(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):Vr(t,"capture")&&(r.capture=t.capture,!et(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var $t="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Ot(r){var t,e;if(arguments.length>0){if(e=Ct(t={},r))throw e;return t.capture?new RegExp("("+$t+")",t.flags):new RegExp($t,t.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var kt=Ot({capture:!0}),xt=Ot();function Tt(r){var t,e,n,o;for(t=!0,e="",o=0;o<r.length;o++)n=r.charAt(o),xt.test(n)?t=!0:t&&(n=n.toUpperCase(),t=!1),e+=n;return e}Or(Ot,"REGEXP",xt),Or(Ot,"REGEXP_CAPTURE",kt);var Ft=void 0!==String.prototype.startsWith;var Pt=String.prototype.startsWith;var Vt=Ft?function(r,t,e){var n;return n=e<0?r.length+e:e,0===t.length||!(n<0||n+t.length>r.length)&&Pt.call(r,t,n)}:function(r,t,e){var n,o;if(n=e<0?r.length+e:e,0===t.length)return!0;if(n<0||n+t.length>r.length)return!1;for(o=0;o<t.length;o++)if(r.charCodeAt(n+o)!==t.charCodeAt(o))return!1;return!0};function Lt(r){return""===r?"":r.charAt(0).toLowerCase()+r.slice(1)}var Rt={};s(Rt,"camelcase",j),s(Rt,"capitalize",l),s(Rt,"codePointAt",S),s(Rt,"constantcase",O),s(Rt,"endsWith",T),s(Rt,"formatInterpolate",nr),s(Rt,"formatTokenize",ar),s(Rt,"invcase",cr),s(Rt,"kebabcase",pr),s(Rt,"lpad",yr),s(Rt,"ltrim",_r),s(Rt,"lowercase",ur),s(Rt,"pascalcase",$r),s(Rt,"percentEncode",Mr),s(Rt,"repeat",vr),s(Rt,"replace",p),s(Rt,"replaceBefore",Xr),s(Rt,"rtrim",Hr),s(Rt,"snakecase",Yr),s(Rt,"startcase",Tt),s(Rt,"startsWith",Vt),s(Rt,"trim",d),s(Rt,"uncapitalize",Lt),s(Rt,"uppercase",A);export{j as camelcase,l as capitalize,S as codePointAt,O as constantcase,Rt as default,T as endsWith,nr as formatInterpolate,ar as formatTokenize,cr as invcase,pr as kebabcase,ur as lowercase,yr as lpad,_r as ltrim,$r as pascalcase,Mr as percentEncode,vr as repeat,p as replace,Xr as replaceBefore,Hr as rtrim,Yr as snakecase,Tt as startcase,Vt as startsWith,d as trim,Lt as uncapitalize,A as uppercase};
//# sourceMappingURL=mod.js.map