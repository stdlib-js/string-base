// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@stdlib/string-base-replace-before")):"function"==typeof define&&define.amd?define(["@stdlib/string-base-replace-before"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).string=e(r.replaceBefore)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,p="set"in t,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r};var l=t;function s(r,e,t){l(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function p(r){return""===r?"":r.charAt(0).toUpperCase()+r.slice(1)}function g(r,e,t){return r.replace(e,t)}var h=void 0!==String.prototype.trim,d=String.prototype.trim;var v=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var y=h&&""===d.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===d.call("᠎")?function(r){return d.call(r)}:function(r){return g(r,v,"$1")},b=/\s+/g,w=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,m=/(?:\s|^)([^\s]+)(?=\s|$)/g,_=/([a-z0-9])([A-Z])/g;function j(r,e,t){return e=e.toLowerCase(),0===t?e:p(e)}var S=55296,A=56320;function E(r){return r.toUpperCase()}var C=/\s+/g,$=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,O=/([a-z0-9])([A-Z])/g;var x=void 0!==String.prototype.endsWith;var k=String.prototype.endsWith;var T=x?function(r,e,t){var n,o;return o=e.length,0===t?0===o:(n=t<0?r.length+t:t,0===o||!(n-o<0||n>r.length)&&k.call(r,e,n))}:function(r,e,t){var n,o,i;if(o=e.length,0===t)return 0===o;if(n=t<0?r.length+t:t,0===o)return!0;if((n-=o)<0)return!1;for(i=0;i<o;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};function F(r){return"number"==typeof r}function P(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function V(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+P(o):P(o)+r,n&&(r="-"+r)),r}var L=String.prototype.toLowerCase,R=String.prototype.toUpperCase;function B(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!F(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=V(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=V(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===R.call(r.specifier)?R.call(t):L.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function I(r){return"string"==typeof r}var W=Math.abs,Z=String.prototype.toLowerCase,z=String.prototype.toUpperCase,U=String.prototype.replace,G=/e\+(\d)$/,M=/e-(\d)$/,X=/^(\d+)$/,N=/^(\d+)e/,q=/\.0$/,D=/\.0*e/,H=/(\..*[^0])0*e/;function J(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!F(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":W(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=U.call(t,H,"$1e"),t=U.call(t,D,"e"),t=U.call(t,q,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=U.call(t,G,"e+0$1"),t=U.call(t,M,"e-0$1"),r.alternate&&(t=U.call(t,X,"$1."),t=U.call(t,N,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===z.call(r.specifier)?z.call(t):Z.call(t)}function K(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Q(r,e,t){var n=e-r.length;return n<0?r:r=t?r+K(n):K(n)+r}var Y=String.fromCharCode,rr=isNaN,er=Array.isArray;function tr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function nr(r){var e,t,n,o,i,a,u,c,f;if(!er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(I(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=tr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,rr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,rr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=B(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!rr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=rr(i)?String(n.arg):Y(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=J(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=V(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Q(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ar(r){var e,t,n,o;for(t=[],o=0,n=or.exec(r);n;)(e=r.slice(o,or.lastIndex-n[0].length)).length&&t.push(e),t.push(ir(n)),o=or.lastIndex,n=or.exec(r);return(e=r.slice(o)).length&&t.push(e),t}var ur=/\s+/g,cr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,fr=/([a-z0-9])([A-Z])/g;var lr=void 0!==String.prototype.repeat;var sr=String.prototype.repeat;var pr=lr?function(r,e){return sr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},gr=Math.ceil;var hr=void 0!==String.prototype.trimLeft,dr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;var vr=String.prototype.trimLeft;var yr=hr?function(r){return vr.call(r)}:function(r){return g(r,dr,"")};var br=/\s+/g,wr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,mr=/(?:\s|^)([^\s]+)(?=\s|$)/g,_r=/([a-z0-9])([A-Z])/g;function jr(r,e){return p(e.toLowerCase())}function Sr(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ar(r){return"string"==typeof r}var Er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Cr(){return Er&&"symbol"==typeof Symbol.toStringTag}var $r=Object.prototype.toString;var Or=Object.prototype.hasOwnProperty;function xr(r,e){return null!=r&&Or.call(r,e)}var kr="function"==typeof Symbol?Symbol.toStringTag:"";var Tr=Cr()?function(r){var e,t,n;if(null==r)return $r.call(r);t=r[kr],e=xr(r,kr);try{r[kr]=void 0}catch(e){return $r.call(r)}return n=$r.call(r),e?r[kr]=t:delete r[kr],n}:function(r){return $r.call(r)},Fr=String.prototype.valueOf;var Pr=Cr();function Vr(r){return"object"==typeof r&&(r instanceof String||(Pr?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Tr(r)))}function Lr(r){return Ar(r)||Vr(r)}function Rr(r){return"string"==typeof r}function Br(r){var e,t,n;if(!Rr(r))throw new TypeError(Br("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ar(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return nr.apply(null,t)}Sr(Lr,"isPrimitive",Ar),Sr(Lr,"isObject",Vr);var Ir=63,Wr=128;function Zr(r){var e,t,n,o;if(!Ar(r))throw new TypeError(Br("invalid argument. Must provide a string. Value: `%s`.",r));for(n=r.length,t=[],o=0;o<n;o++)(e=r.charCodeAt(o))<Wr?t.push(e):e<2048?(t.push(192|e>>6),t.push(Wr|e&Ir)):e<55296||e>=57344?(t.push(224|e>>12),t.push(Wr|e>>6&Ir),t.push(Wr|e&Ir)):(o+=1,e=65536+((1023&e)<<10|1023&r.charCodeAt(o)),t.push(240|e>>18),t.push(Wr|e>>12&Ir),t.push(Wr|e>>6&Ir),t.push(Wr|e&Ir));return t}var zr=void 0!==String.prototype.trimRight,Ur=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var Gr=String.prototype.trimRight;var Mr=zr?function(r){return Gr.call(r)}:function(r){return g(r,Ur,"")};var Xr=/\s+/g,Nr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,qr=/([a-z0-9])([A-Z])/g;var Dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Tr(r)};var Hr=/./;function Jr(r){return"boolean"==typeof r}var Kr=Boolean.prototype.toString;var Qr=Cr();function Yr(r){return"object"==typeof r&&(r instanceof Boolean||(Qr?function(r){try{return Kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Tr(r)))}function re(r){return Jr(r)||Yr(r)}function ee(){return new Function("return this;")()}Sr(re,"isPrimitive",Jr),Sr(re,"isObject",Yr);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ie="object"==typeof oe?oe:null;var ae=function(r){if(arguments.length){if(!Jr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ee()}if(te)return te;if(ne)return ne;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ae.document&&ae.document.childNodes,ce=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var le=/^\s*function\s*([^(]*)/i;function se(r){return null!==r&&"object"==typeof r}function pe(r){var e,t,n,o;if(("Object"===(t=Tr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=le.exec(n.toString()))return e[1]}return se(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Sr(fe,"REGEXP",le),Sr(se,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(se));var ge="function"==typeof Hr||"object"==typeof ce||"function"==typeof ue?function(r){return pe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pe(r).toLowerCase():e};function he(r){return"function"===ge(r)}var de,ve=Object.getPrototypeOf;de=he(Object.getPrototypeOf)?ve:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ye=de;var be=Object.prototype;function we(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Dr(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),ye(r))}(r),!e||!xr(r,"constructor")&&xr(e,"constructor")&&he(e.constructor)&&"[object Function]"===Tr(e.constructor)&&xr(e,"isPrototypeOf")&&he(e.isPrototypeOf)&&(e===be||function(r){var e;for(e in r)if(!xr(r,e))return!1;return!0}(r)))}function me(r,e){return we(e)?xr(e,"flags")&&(r.flags=e.flags,!Ar(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):xr(e,"capture")&&(r.capture=e.capture,!Jr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}var _e="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function je(r){var e,t;if(arguments.length>0){if(t=me(e={},r))throw t;return e.capture?new RegExp("("+_e+")",e.flags):new RegExp(_e,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Se=je({capture:!0}),Ae=je();Sr(je,"REGEXP",Ae),Sr(je,"REGEXP_CAPTURE",Se);var Ee=void 0!==String.prototype.startsWith;var Ce=String.prototype.startsWith;var $e=Ee?function(r,e,t){var n;return n=t<0?r.length+t:t,0===e.length||!(n<0||n+e.length>r.length)&&Ce.call(r,e,n)}:function(r,e,t){var n,o;if(n=t<0?r.length+t:t,0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(o=0;o<e.length;o++)if(r.charCodeAt(n+o)!==e.charCodeAt(o))return!1;return!0};var Oe={};return s(Oe,"camelcase",(function(r){return r=g(r,w," "),r=g(r,b," "),r=g(r,_,"$1 $2"),g(r=y(r),m,j)})),s(Oe,"capitalize",p),s(Oe,"codePointAt",(function(r,e,t){var n,o,i;return e<0&&(e+=r.length),(n=r.charCodeAt(e))>=S&&n<=56319&&e<r.length-1?(i=n,o=r.charCodeAt(e+1),A<=o&&o<=57343?1024*(i-S)+(o-A)+65536:i):t&&n>=A&&n<=57343&&e>=1?(i=r.charCodeAt(e-1),o=n,S<=i&&i<=56319?1024*(i-S)+(o-A)+65536:o):n})),s(Oe,"constantcase",(function(r){return r=g(r,$," "),r=g(r,O,"$1 $2"),E(r=g(r=y(r),C,"_"))})),s(Oe,"endsWith",T),s(Oe,"formatInterpolate",nr),s(Oe,"formatTokenize",ar),s(Oe,"kebabcase",(function(r){return r=g(r,cr," "),r=g(r,fr,"$1 $2"),function(r){return r.toLowerCase()}(r=g(r=y(r),ur,"-"))})),s(Oe,"lpad",(function(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=gr(n),pr(t,n)+r)})),s(Oe,"ltrim",yr),s(Oe,"lowercase",(function(r){return r.toLowerCase()})),s(Oe,"pascalcase",(function(r){return r=g(r,wr," "),r=g(r,br," "),r=g(r,_r,"$1 $2"),g(r=y(r),mr,jr)})),s(Oe,"percentEncode",(function(r){var e,t,n,o,i;for(n=(o=Zr(r)).length,t="",i=0;i<n;i++)t+=(e=o[i])>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122||45===e||46===e||95===e||126===e?r.charAt(i):"%"+e.toString(16).toUpperCase();return t})),s(Oe,"repeat",pr),s(Oe,"replace",g),s(Oe,"replaceBefore",r),s(Oe,"rtrim",Mr),s(Oe,"snakecase",(function(r){return r=g(r,Nr," "),r=g(r,qr,"$1 $2"),function(r){return r.toLowerCase()}(r=g(r=y(r),Xr,"_"))})),s(Oe,"startcase",(function(r){var e,t,n,o;for(e=!0,t="",o=0;o<r.length;o++)n=r.charAt(o),Ae.test(n)?e=!0:e&&(n=n.toUpperCase(),e=!1),t+=n;return t})),s(Oe,"startsWith",$e),s(Oe,"trim",y),s(Oe,"uncapitalize",(function(r){return""===r?"":r.charAt(0).toLowerCase()+r.slice(1)})),s(Oe,"uppercase",E),Oe}));
//# sourceMappingURL=browser.js.map
