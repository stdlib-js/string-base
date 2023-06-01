// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).string=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(u.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),l="get"in e,p="set"in e,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var f=t;function s(r,t,e){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function l(r){return""===r?"":r.charAt(0).toUpperCase()+r.slice(1)}function p(r,t,e){return r.replace(t,e)}var g=void 0!==String.prototype.trim,h=String.prototype.trim;var v=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var d=g&&""===h.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===h.call("᠎")?function(r){return h.call(r)}:function(r){return p(r,v,"$1")},y=/\s+/g,b=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,w=/(?:\s|^)([^\s]+)(?=\s|$)/g,m=/([a-z0-9])([A-Z])/g;function _(r,t,e){return t=t.toLowerCase(),0===e?t:l(t)}var j=55296,S=56320;function A(r){return r.toUpperCase()}var E=/\s+/g,C=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,$=/([a-z0-9])([A-Z])/g;var O=void 0!==String.prototype.endsWith;var x=String.prototype.endsWith;var k=O?function(r,t,e){var n,o;return o=t.length,0===e?0===o:(n=e<0?r.length+e:e,0===o||!(n-o<0||n>r.length)&&x.call(r,t,n))}:function(r,t,e){var n,o,i;if(o=t.length,0===e)return 0===o;if(n=e<0?r.length+e:e,0===o)return!0;if((n-=o)<0)return!1;for(i=0;i<o;i++)if(r.charCodeAt(n+i)!==t.charCodeAt(i))return!1;return!0};function T(r){return"number"==typeof r}function F(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function P(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+F(o):F(o)+r,n&&(r="-"+r)),r}var V=String.prototype.toLowerCase,L=String.prototype.toUpperCase;function R(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!T(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=P(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=P(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===L.call(r.specifier)?L.call(e):V.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function I(r){return"string"==typeof r}var W=Math.abs,Z=String.prototype.toLowerCase,z=String.prototype.toUpperCase,B=String.prototype.replace,U=/e\+(\d)$/,G=/e-(\d)$/,M=/^(\d+)$/,X=/^(\d+)e/,N=/\.0$/,D=/\.0*e/,q=/(\..*[^0])0*e/;function H(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!T(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":W(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=B.call(e,q,"$1e"),e=B.call(e,D,"e"),e=B.call(e,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=B.call(e,U,"e+0$1"),e=B.call(e,G,"e-0$1"),r.alternate&&(e=B.call(e,M,"$1."),e=B.call(e,X,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===z.call(r.specifier)?z.call(e):Z.call(e)}function J(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function K(r,t,e){var n=t-r.length;return n<0?r:r=e?r+J(n):J(n)+r}var Q=String.fromCharCode,Y=isNaN,rr=Array.isArray;function tr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function er(r){var t,e,n,o,i,a,u,c,f;if(!rr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(I(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=tr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Y(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Y(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=R(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Y(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Y(i)?String(n.arg):Q(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=H(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=P(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=K(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var nr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function or(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ir(r){var t,e,n,o;for(e=[],o=0,n=nr.exec(r);n;)(t=r.slice(o,nr.lastIndex-n[0].length)).length&&e.push(t),e.push(or(n)),o=nr.lastIndex,n=nr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function ar(r){return r.toLowerCase()}var ur=/\s+/g,cr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,fr=/([a-z0-9])([A-Z])/g;var sr=void 0!==String.prototype.repeat;var lr=String.prototype.repeat;var pr=sr?function(r,t){return lr.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},gr=Math.ceil;var hr=void 0!==String.prototype.trimLeft,vr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;var dr=String.prototype.trimLeft;var yr=hr?function(r){return dr.call(r)}:function(r){return p(r,vr,"")};var br=/\s+/g,wr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,mr=/(?:\s|^)([^\s]+)(?=\s|$)/g,_r=/([a-z0-9])([A-Z])/g;function jr(r,t){return l(t.toLowerCase())}function Sr(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ar(r){return"string"==typeof r}var Er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Cr(){return Er&&"symbol"==typeof Symbol.toStringTag}var $r=Object.prototype.toString;var Or=Object.prototype.hasOwnProperty;function xr(r,t){return null!=r&&Or.call(r,t)}var kr="function"==typeof Symbol?Symbol.toStringTag:"";var Tr=Cr()?function(r){var t,e,n;if(null==r)return $r.call(r);e=r[kr],t=xr(r,kr);try{r[kr]=void 0}catch(t){return $r.call(r)}return n=$r.call(r),t?r[kr]=e:delete r[kr],n}:function(r){return $r.call(r)},Fr=String.prototype.valueOf;var Pr=Cr();function Vr(r){return"object"==typeof r&&(r instanceof String||(Pr?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Tr(r)))}function Lr(r){return Ar(r)||Vr(r)}function Rr(r){return"string"==typeof r}function Ir(r){var t,e,n;if(!Rr(r))throw new TypeError(Ir("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=ir(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return er.apply(null,e)}Sr(Lr,"isPrimitive",Ar),Sr(Lr,"isObject",Vr);var Wr=63,Zr=128;function zr(r){var t,e,n,o;if(!Ar(r))throw new TypeError(Ir("invalid argument. Must provide a string. Value: `%s`.",r));for(n=r.length,e=[],o=0;o<n;o++)(t=r.charCodeAt(o))<Zr?e.push(t):t<2048?(e.push(192|t>>6),e.push(Zr|t&Wr)):t<55296||t>=57344?(e.push(224|t>>12),e.push(Zr|t>>6&Wr),e.push(Zr|t&Wr)):(o+=1,t=65536+((1023&t)<<10|1023&r.charCodeAt(o)),e.push(240|t>>18),e.push(Zr|t>>12&Wr),e.push(Zr|t>>6&Wr),e.push(Zr|t&Wr));return e}var Br=void 0!==String.prototype.trimRight,Ur=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var Gr=String.prototype.trimRight;var Mr=Br?function(r){return Gr.call(r)}:function(r){return p(r,Ur,"")};var Xr=/\s+/g,Nr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Dr=/([a-z0-9])([A-Z])/g;var qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Tr(r)};var Hr=/./;function Jr(r){return"boolean"==typeof r}var Kr=Boolean.prototype.toString;var Qr=Cr();function Yr(r){return"object"==typeof r&&(r instanceof Boolean||(Qr?function(r){try{return Kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Tr(r)))}function rt(r){return Jr(r)||Yr(r)}function tt(){return new Function("return this;")()}Sr(rt,"isPrimitive",Jr),Sr(rt,"isObject",Yr);var et="object"==typeof self?self:null,nt="object"==typeof window?window:null,ot="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},it="object"==typeof ot?ot:null;var at=function(r){if(arguments.length){if(!Jr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return tt()}if(et)return et;if(nt)return nt;if(it)return it;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=at.document&&at.document.childNodes,ct=Int8Array;function ft(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;function lt(r){return null!==r&&"object"==typeof r}function pt(r){var t,e,n,o;if(("Object"===(e=Tr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=st.exec(n.toString()))return t[1]}return lt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Sr(ft,"REGEXP",st),Sr(lt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!qr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lt));var gt="function"==typeof Hr||"object"==typeof ct||"function"==typeof ut?function(r){return pt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pt(r).toLowerCase():t};function ht(r){return"function"===gt(r)}var vt,dt=Object.getPrototypeOf;vt=ht(Object.getPrototypeOf)?dt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var yt=vt;var bt=Object.prototype;function wt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!qr(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),yt(r))}(r),!t||!xr(r,"constructor")&&xr(t,"constructor")&&ht(t.constructor)&&"[object Function]"===Tr(t.constructor)&&xr(t,"isPrototypeOf")&&ht(t.isPrototypeOf)&&(t===bt||function(r){var t;for(t in r)if(!xr(r,t))return!1;return!0}(r)))}function mt(r,t){return wt(t)?xr(t,"flags")&&(r.flags=t.flags,!Ar(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):xr(t,"capture")&&(r.capture=t.capture,!Jr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var _t="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function jt(r){var t,e;if(arguments.length>0){if(e=mt(t={},r))throw e;return t.capture?new RegExp("("+_t+")",t.flags):new RegExp(_t,t.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var St=jt({capture:!0}),At=jt();Sr(jt,"REGEXP",At),Sr(jt,"REGEXP_CAPTURE",St);var Et=void 0!==String.prototype.startsWith;var Ct=String.prototype.startsWith;var $t=Et?function(r,t,e){var n;return n=e<0?r.length+e:e,0===t.length||!(n<0||n+t.length>r.length)&&Ct.call(r,t,n)}:function(r,t,e){var n,o;if(n=e<0?r.length+e:e,0===t.length)return!0;if(n<0||n+t.length>r.length)return!1;for(o=0;o<t.length;o++)if(r.charCodeAt(n+o)!==t.charCodeAt(o))return!1;return!0};var Ot={};return s(Ot,"camelcase",(function(r){return r=p(r,b," "),r=p(r,y," "),r=p(r,m,"$1 $2"),p(r=d(r),w,_)})),s(Ot,"capitalize",l),s(Ot,"codePointAt",(function(r,t,e){var n,o,i;return t<0&&(t+=r.length),(n=r.charCodeAt(t))>=j&&n<=56319&&t<r.length-1?(i=n,o=r.charCodeAt(t+1),S<=o&&o<=57343?1024*(i-j)+(o-S)+65536:i):e&&n>=S&&n<=57343&&t>=1?(i=r.charCodeAt(t-1),o=n,j<=i&&i<=56319?1024*(i-j)+(o-S)+65536:o):n})),s(Ot,"constantcase",(function(r){return r=p(r,C," "),r=p(r,$,"$1 $2"),A(r=p(r=d(r),E,"_"))})),s(Ot,"endsWith",k),s(Ot,"formatInterpolate",er),s(Ot,"formatTokenize",ir),s(Ot,"invcase",(function(r){var t,e,n,o;for(t=[],o=0;o<r.length;o++)(n=A(e=r[o]))===e&&(n=ar(e)),t.push(n);return t.join("")})),s(Ot,"kebabcase",(function(r){return r=p(r,cr," "),r=p(r,fr,"$1 $2"),function(r){return r.toLowerCase()}(r=p(r=d(r),ur,"-"))})),s(Ot,"lpad",(function(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=gr(n),pr(e,n)+r)})),s(Ot,"ltrim",yr),s(Ot,"lowercase",ar),s(Ot,"pascalcase",(function(r){return r=p(r,wr," "),r=p(r,br," "),r=p(r,_r,"$1 $2"),p(r=d(r),mr,jr)})),s(Ot,"percentEncode",(function(r){var t,e,n,o,i;for(n=(o=zr(r)).length,e="",i=0;i<n;i++)e+=(t=o[i])>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||45===t||46===t||95===t||126===t?r.charAt(i):"%"+t.toString(16).toUpperCase();return e})),s(Ot,"repeat",pr),s(Ot,"replace",p),s(Ot,"replaceBefore",(function(r,t,e){var n=r.indexOf(t);return""===r||""===t||""===e||n<0?r:e+r.substring(n)})),s(Ot,"rtrim",Mr),s(Ot,"snakecase",(function(r){return r=p(r,Nr," "),r=p(r,Dr,"$1 $2"),function(r){return r.toLowerCase()}(r=p(r=d(r),Xr,"_"))})),s(Ot,"startcase",(function(r){var t,e,n,o;for(t=!0,e="",o=0;o<r.length;o++)n=r.charAt(o),At.test(n)?t=!0:t&&(n=n.toUpperCase(),t=!1),e+=n;return e})),s(Ot,"startsWith",$t),s(Ot,"trim",d),s(Ot,"uncapitalize",(function(r){return""===r?"":r.charAt(0).toLowerCase()+r.slice(1)})),s(Ot,"uppercase",A),Ot}));
//# sourceMappingURL=browser.js.map
