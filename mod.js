// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(u.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),l="get"in e,p="set"in e,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var f=t;function s(r,t,e){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function l(r){return""===r?"":r.charAt(0).toUpperCase()+r.slice(1)}function p(r){return r.toLowerCase()}function g(r,t,e){return r.replace(t,e)}var h=void 0!==String.prototype.trim,v=String.prototype.trim;var d=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var y=h&&""===v.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===v.call("᠎")?function(r){return v.call(r)}:function(r){return g(r,d,"$1")},b=/\s+/g,w=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,m=/(?:\s|^)([^\s]+)(?=\s|$)/g,_=/([a-z0-9])([A-Z])/g;function S(r,t,e){return t=p(t),0===e?t:l(t)}function j(r){return r=g(r,w," "),r=g(r,b," "),r=g(r,_,"$1 $2"),g(r=y(r),m,S)}function A(r,t,e){var n,i,o;return t<0&&(t+=r.length),(n=r.charCodeAt(t))>=55296&&n<=56319&&t<r.length-1?(o=n,56320<=(i=r.charCodeAt(t+1))&&i<=57343?1024*(o-55296)+(i-56320)+65536:o):e&&n>=56320&&n<=57343&&t>=1?(i=n,55296<=(o=r.charCodeAt(t-1))&&o<=56319?1024*(o-55296)+(i-56320)+65536:i):n}function E(r){return r.toUpperCase()}var $=/\s+/g,C=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,O=/([a-z0-9])([A-Z])/g;function k(r){return r=g(r,C," "),r=g(r,O,"$1 $2"),E(r=g(r=y(r),$,"_"))}var x=void 0!==String.prototype.endsWith;var T=String.prototype.endsWith;var F=x?function(r,t,e){var n,i;return i=t.length,0===e?0===i:(n=e<0?r.length+e:e,0===i||!(n-i<0||n>r.length)&&T.call(r,t,n))}:function(r,t,e){var n,i,o;if(i=t.length,0===e)return 0===i;if(n=e<0?r.length+e:e,0===i)return!0;if((n-=i)<0)return!1;for(o=0;o<i;o++)if(r.charCodeAt(n+o)!==t.charCodeAt(o))return!1;return!0};function P(r){return"number"==typeof r}function V(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function R(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+V(i):V(i)+r,n&&(r="-"+r)),r}var W=String.prototype.toLowerCase,I=String.prototype.toUpperCase;function L(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!P(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=R(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=R(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===I.call(r.specifier)?I.call(e):W.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Z(r){return"string"==typeof r}var z=Math.abs,B=String.prototype.toLowerCase,U=String.prototype.toUpperCase,G=String.prototype.replace,M=/e\+(\d)$/,X=/e-(\d)$/,N=/^(\d+)$/,D=/^(\d+)e/,q=/\.0$/,H=/\.0*e/,J=/(\..*[^0])0*e/;function K(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!P(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":z(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=G.call(e,J,"$1e"),e=G.call(e,H,"e"),e=G.call(e,q,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=G.call(e,M,"e+0$1"),e=G.call(e,X,"e-0$1"),r.alternate&&(e=G.call(e,N,"$1."),e=G.call(e,D,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===U.call(r.specifier)?U.call(e):B.call(e)}function Q(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Y(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Q(n):Q(n)+r}var rr=String.fromCharCode,tr=isNaN,er=Array.isArray;function nr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function ir(r){var t,e,n,i,o,a,u,c,f;if(!er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Z(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=nr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,tr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,tr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=L(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!tr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tr(o)?String(n.arg):rr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=K(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=R(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Y(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ar(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ur(r){var t,e,n,i;for(e=[],i=0,n=or.exec(r);n;)(t=r.slice(i,or.lastIndex-n[0].length)).length&&e.push(t),e.push(ar(n)),i=or.lastIndex,n=or.exec(r);return(t=r.slice(i)).length&&e.push(t),e}var cr=/\s+/g,fr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,sr=/([a-z0-9])([A-Z])/g;function lr(r){return r=g(r,fr," "),r=g(r,sr,"$1 $2"),p(r=g(r=y(r),cr,"-"))}var pr=void 0!==String.prototype.repeat;var gr=String.prototype.repeat;var hr=pr?function(r,t){return gr.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},vr=Math.ceil;function dr(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=vr(n),hr(e,n)+r)}var yr=void 0!==String.prototype.trimLeft,br=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;var wr=String.prototype.trimLeft;var mr=yr?function(r){return wr.call(r)}:function(r){return g(r,br,"")},_r=/\s+/g,Sr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,jr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Ar=/([a-z0-9])([A-Z])/g;function Er(r,t){return l(p(t))}function $r(r){return r=g(r,Sr," "),r=g(r,_r," "),r=g(r,Ar,"$1 $2"),g(r=y(r),jr,Er)}function Cr(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Or(r){return"string"==typeof r}var kr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function xr(){return kr&&"symbol"==typeof Symbol.toStringTag}var Tr=Object.prototype.toString;var Fr=Object.prototype.hasOwnProperty;function Pr(r,t){return null!=r&&Fr.call(r,t)}var Vr="function"==typeof Symbol?Symbol.toStringTag:"";var Rr=xr()?function(r){var t,e,n;if(null==r)return Tr.call(r);e=r[Vr],t=Pr(r,Vr);try{r[Vr]=void 0}catch(t){return Tr.call(r)}return n=Tr.call(r),t?r[Vr]=e:delete r[Vr],n}:function(r){return Tr.call(r)},Wr=String.prototype.valueOf;var Ir=xr();function Lr(r){return"object"==typeof r&&(r instanceof String||(Ir?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Rr(r)))}function Zr(r){return Or(r)||Lr(r)}function zr(r){return"string"==typeof r}function Br(r){var t,e,n;if(!zr(r))throw new TypeError(Br("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=ur(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return ir.apply(null,e)}Cr(Zr,"isPrimitive",Or),Cr(Zr,"isObject",Lr);function Ur(r){var t,e,n,i;if(!Or(r))throw new TypeError(Br("invalid argument. Must provide a string. Value: `%s`.",r));for(n=r.length,e=[],i=0;i<n;i++)(t=r.charCodeAt(i))<128?e.push(t):t<2048?(e.push(192|t>>6),e.push(128|63&t)):t<55296||t>=57344?(e.push(224|t>>12),e.push(128|t>>6&63),e.push(128|63&t)):(i+=1,t=65536+((1023&t)<<10|1023&r.charCodeAt(i)),e.push(240|t>>18),e.push(128|t>>12&63),e.push(128|t>>6&63),e.push(128|63&t));return e}function Gr(r){var t,e,n,i,o;for(n=(i=Ur(r)).length,e="",o=0;o<n;o++)e+=(t=i[o])>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||45===t||46===t||95===t||126===t?r.charAt(o):"%"+t.toString(16).toUpperCase();return e}var Mr=void 0!==String.prototype.trimRight,Xr=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var Nr=String.prototype.trimRight;var Dr=Mr?function(r){return Nr.call(r)}:function(r){return g(r,Xr,"")},qr=/\s+/g,Hr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Jr=/([a-z0-9])([A-Z])/g;function Kr(r){return r=g(r,Hr," "),r=g(r,Jr,"$1 $2"),p(r=g(r=y(r),qr,"_"))}var Qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Rr(r)};var Yr=/./;function rt(r){return"boolean"==typeof r}var tt=Boolean.prototype.toString;var et=xr();function nt(r){return"object"==typeof r&&(r instanceof Boolean||(et?function(r){try{return tt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Rr(r)))}function it(r){return rt(r)||nt(r)}function ot(){return new Function("return this;")()}Cr(it,"isPrimitive",rt),Cr(it,"isObject",nt);var at="object"==typeof self?self:null,ut="object"==typeof window?window:null,ct="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ft="object"==typeof ct?ct:null;var st=function(r){if(arguments.length){if(!rt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ot()}if(at)return at;if(ut)return ut;if(ft)return ft;throw new Error("unexpected error. Unable to resolve global object.")}(),lt=st.document&&st.document.childNodes,pt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function vt(r){return null!==r&&"object"==typeof r}function dt(r){var t,e,n,i;if(("Object"===(e=Rr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ht.exec(n.toString()))return t[1]}return vt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Cr(gt,"REGEXP",ht),Cr(vt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!Qr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vt));var yt="function"==typeof Yr||"object"==typeof pt||"function"==typeof lt?function(r){return dt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dt(r).toLowerCase():t};function bt(r){return"function"===yt(r)}var wt,mt=Object.getPrototypeOf;wt=bt(Object.getPrototypeOf)?mt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _t=wt;var St=Object.prototype;function jt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Qr(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),_t(r))}(r),!t||!Pr(r,"constructor")&&Pr(t,"constructor")&&bt(t.constructor)&&"[object Function]"===Rr(t.constructor)&&Pr(t,"isPrototypeOf")&&bt(t.isPrototypeOf)&&(t===St||function(r){var t;for(t in r)if(!Pr(r,t))return!1;return!0}(r)))}function At(r,t){return jt(t)?Pr(t,"flags")&&(r.flags=t.flags,!Or(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):Pr(t,"capture")&&(r.capture=t.capture,!rt(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var Et="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function $t(r){var t,e;if(arguments.length>0){if(e=At(t={},r))throw e;return t.capture?new RegExp("("+Et+")",t.flags):new RegExp(Et,t.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Ct=$t({capture:!0}),Ot=$t();function kt(r){var t,e,n,i;for(t=!0,e="",i=0;i<r.length;i++)n=r.charAt(i),Ot.test(n)?t=!0:t&&(n=n.toUpperCase(),t=!1),e+=n;return e}Cr($t,"REGEXP",Ot),Cr($t,"REGEXP_CAPTURE",Ct);var xt=void 0!==String.prototype.startsWith;var Tt=String.prototype.startsWith;var Ft=xt?function(r,t,e){var n;return n=e<0?r.length+e:e,0===t.length||!(n<0||n+t.length>r.length)&&Tt.call(r,t,n)}:function(r,t,e){var n,i;if(n=e<0?r.length+e:e,0===t.length)return!0;if(n<0||n+t.length>r.length)return!1;for(i=0;i<t.length;i++)if(r.charCodeAt(n+i)!==t.charCodeAt(i))return!1;return!0};function Pt(r){return""===r?"":r.charAt(0).toLowerCase()+r.slice(1)}var Vt={};s(Vt,"camelcase",j),s(Vt,"capitalize",l),s(Vt,"codePointAt",A),s(Vt,"constantcase",k),s(Vt,"endsWith",F),s(Vt,"formatInterpolate",ir),s(Vt,"formatTokenize",ur),s(Vt,"kebabcase",lr),s(Vt,"lpad",dr),s(Vt,"ltrim",mr),s(Vt,"lowercase",p),s(Vt,"pascalcase",$r),s(Vt,"percentEncode",Gr),s(Vt,"repeat",hr),s(Vt,"replace",g),s(Vt,"rtrim",Dr),s(Vt,"snakecase",Kr),s(Vt,"startcase",kt),s(Vt,"startsWith",Ft),s(Vt,"trim",y),s(Vt,"uncapitalize",Pt),s(Vt,"uppercase",E);export{j as camelcase,l as capitalize,A as codePointAt,k as constantcase,Vt as default,F as endsWith,ir as formatInterpolate,ur as formatTokenize,lr as kebabcase,p as lowercase,dr as lpad,mr as ltrim,$r as pascalcase,Gr as percentEncode,hr as repeat,g as replace,Dr as rtrim,Kr as snakecase,kt as startcase,Ft as startsWith,y as trim,Pt as uncapitalize,E as uppercase};
//# sourceMappingURL=mod.js.map
