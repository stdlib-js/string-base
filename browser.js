// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).string=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(u.call(r,t)||c.call(r,t)?(f=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var f=t;function l(r,t,e){f(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function s(r){return""===r?"":r.charAt(0).toUpperCase()+r.slice(1)}function p(r){return r.toLowerCase()}function g(r,t,e){return r.replace(t,e)}var h=void 0!==String.prototype.trim,d=String.prototype.trim;var v=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var y=h&&""===d.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===d.call("᠎")?function(r){return d.call(r)}:function(r){return g(r,v,"$1")},b=/\s+/g,w=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,m=/(?:\s|^)([^\s]+)(?=\s|$)/g,_=/([a-z0-9])([A-Z])/g;function j(r,t,e){return t=p(t),0===e?t:s(t)}var S=55296,A=56320;function E(r){return r.toUpperCase()}var $=/\s+/g,C=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,O=/([a-z0-9])([A-Z])/g;var x=void 0!==String.prototype.endsWith;var k=String.prototype.endsWith;var T=x?function(r,t,e){var n,i;return i=t.length,0===e?0===i:(n=e<0?r.length+e:e,0===i||!(n-i<0||n>r.length)&&k.call(r,t,n))}:function(r,t,e){var n,i,o;if(i=t.length,0===e)return 0===i;if(n=e<0?r.length+e:e,0===i)return!0;if((n-=i)<0)return!1;for(o=0;o<i;o++)if(r.charCodeAt(n+o)!==t.charCodeAt(o))return!1;return!0};function F(r){return"number"==typeof r}function P(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function V(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+P(i):P(i)+r,n&&(r="-"+r)),r}var R=String.prototype.toLowerCase,I=String.prototype.toUpperCase;function L(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!F(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=V(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=V(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===I.call(r.specifier)?I.call(e):R.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function W(r){return"string"==typeof r}var Z=Math.abs,z=String.prototype.toLowerCase,B=String.prototype.toUpperCase,U=String.prototype.replace,G=/e\+(\d)$/,M=/e-(\d)$/,X=/^(\d+)$/,N=/^(\d+)e/,D=/\.0$/,q=/\.0*e/,H=/(\..*[^0])0*e/;function J(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!F(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Z(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=U.call(e,H,"$1e"),e=U.call(e,q,"e"),e=U.call(e,D,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=U.call(e,G,"e+0$1"),e=U.call(e,M,"e-0$1"),r.alternate&&(e=U.call(e,X,"$1."),e=U.call(e,N,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===B.call(r.specifier)?B.call(e):z.call(e)}function K(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Q(r,t,e){var n=t-r.length;return n<0?r:r=e?r+K(n):K(n)+r}var Y=String.fromCharCode,rr=isNaN,tr=Array.isArray;function er(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function nr(r){var t,e,n,i,o,a,u,c,f;if(!tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(W(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=er(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,rr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,rr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=L(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!rr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=rr(o)?String(n.arg):Y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=J(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=V(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Q(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function or(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ar(r){var t,e,n,i;for(e=[],i=0,n=ir.exec(r);n;)(t=r.slice(i,ir.lastIndex-n[0].length)).length&&e.push(t),e.push(or(n)),i=ir.lastIndex,n=ir.exec(r);return(t=r.slice(i)).length&&e.push(t),e}var ur=/\s+/g,cr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,fr=/([a-z0-9])([A-Z])/g;var lr=void 0!==String.prototype.repeat;var sr=String.prototype.repeat;var pr=lr?function(r,t){return sr.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},gr=Math.ceil;var hr=void 0!==String.prototype.trimLeft,dr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;var vr=String.prototype.trimLeft;var yr=hr?function(r){return vr.call(r)}:function(r){return g(r,dr,"")},br=/\s+/g,wr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,mr=/(?:\s|^)([^\s]+)(?=\s|$)/g,_r=/([a-z0-9])([A-Z])/g;function jr(r,t){return s(p(t))}function Sr(r,t,e){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ar(r){return"string"==typeof r}var Er="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $r(){return Er&&"symbol"==typeof Symbol.toStringTag}var Cr=Object.prototype.toString;var Or=Object.prototype.hasOwnProperty;function xr(r,t){return null!=r&&Or.call(r,t)}var kr="function"==typeof Symbol?Symbol.toStringTag:"";var Tr=$r()?function(r){var t,e,n;if(null==r)return Cr.call(r);e=r[kr],t=xr(r,kr);try{r[kr]=void 0}catch(t){return Cr.call(r)}return n=Cr.call(r),t?r[kr]=e:delete r[kr],n}:function(r){return Cr.call(r)},Fr=String.prototype.valueOf;var Pr=$r();function Vr(r){return"object"==typeof r&&(r instanceof String||(Pr?function(r){try{return Fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Tr(r)))}function Rr(r){return Ar(r)||Vr(r)}function Ir(r){return"string"==typeof r}function Lr(r){var t,e,n;if(!Ir(r))throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=ar(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return nr.apply(null,e)}Sr(Rr,"isPrimitive",Ar),Sr(Rr,"isObject",Vr);var Wr=63,Zr=128;function zr(r){var t,e,n,i;if(!Ar(r))throw new TypeError(Lr("invalid argument. Must provide a string. Value: `%s`.",r));for(n=r.length,e=[],i=0;i<n;i++)(t=r.charCodeAt(i))<Zr?e.push(t):t<2048?(e.push(192|t>>6),e.push(Zr|t&Wr)):t<55296||t>=57344?(e.push(224|t>>12),e.push(Zr|t>>6&Wr),e.push(Zr|t&Wr)):(i+=1,t=65536+((1023&t)<<10|1023&r.charCodeAt(i)),e.push(240|t>>18),e.push(Zr|t>>12&Wr),e.push(Zr|t>>6&Wr),e.push(Zr|t&Wr));return e}var Br=void 0!==String.prototype.trimRight,Ur=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var Gr=String.prototype.trimRight;var Mr=Br?function(r){return Gr.call(r)}:function(r){return g(r,Ur,"")},Xr=/\s+/g,Nr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Dr=/([a-z0-9])([A-Z])/g;var qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Tr(r)};var Hr=/./;function Jr(r){return"boolean"==typeof r}var Kr=Boolean.prototype.toString;var Qr=$r();function Yr(r){return"object"==typeof r&&(r instanceof Boolean||(Qr?function(r){try{return Kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Tr(r)))}function rt(r){return Jr(r)||Yr(r)}function tt(){return new Function("return this;")()}Sr(rt,"isPrimitive",Jr),Sr(rt,"isObject",Yr);var et="object"==typeof self?self:null,nt="object"==typeof window?window:null,it="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ot="object"==typeof it?it:null;var at=function(r){if(arguments.length){if(!Jr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return tt()}if(et)return et;if(nt)return nt;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=at.document&&at.document.childNodes,ct=Int8Array;function ft(){return/^\s*function\s*([^(]*)/i}var lt=/^\s*function\s*([^(]*)/i;function st(r){return null!==r&&"object"==typeof r}function pt(r){var t,e,n,i;if(("Object"===(e=Tr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=lt.exec(n.toString()))return t[1]}return st(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Sr(ft,"REGEXP",lt),Sr(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!qr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(st));var gt="function"==typeof Hr||"object"==typeof ct||"function"==typeof ut?function(r){return pt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pt(r).toLowerCase():t};function ht(r){return"function"===gt(r)}var dt,vt=Object.getPrototypeOf;dt=ht(Object.getPrototypeOf)?vt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var yt=dt;var bt=Object.prototype;function wt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!qr(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),yt(r))}(r),!t||!xr(r,"constructor")&&xr(t,"constructor")&&ht(t.constructor)&&"[object Function]"===Tr(t.constructor)&&xr(t,"isPrototypeOf")&&ht(t.isPrototypeOf)&&(t===bt||function(r){var t;for(t in r)if(!xr(r,t))return!1;return!0}(r)))}function mt(r,t){return wt(t)?xr(t,"flags")&&(r.flags=t.flags,!Ar(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):xr(t,"capture")&&(r.capture=t.capture,!Jr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var _t="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function jt(r){var t,e;if(arguments.length>0){if(e=mt(t={},r))throw e;return t.capture?new RegExp("("+_t+")",t.flags):new RegExp(_t,t.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var St=jt({capture:!0}),At=jt();Sr(jt,"REGEXP",At),Sr(jt,"REGEXP_CAPTURE",St);var Et=void 0!==String.prototype.startsWith;var $t=String.prototype.startsWith;var Ct=Et?function(r,t,e){var n;return n=e<0?r.length+e:e,0===t.length||!(n<0||n+t.length>r.length)&&$t.call(r,t,n)}:function(r,t,e){var n,i;if(n=e<0?r.length+e:e,0===t.length)return!0;if(n<0||n+t.length>r.length)return!1;for(i=0;i<t.length;i++)if(r.charCodeAt(n+i)!==t.charCodeAt(i))return!1;return!0};var Ot={};return l(Ot,"camelcase",(function(r){return r=g(r,w," "),r=g(r,b," "),r=g(r,_,"$1 $2"),g(r=y(r),m,j)})),l(Ot,"capitalize",s),l(Ot,"codePointAt",(function(r,t,e){var n,i,o;return t<0&&(t+=r.length),(n=r.charCodeAt(t))>=S&&n<=56319&&t<r.length-1?(o=n,i=r.charCodeAt(t+1),A<=i&&i<=57343?1024*(o-S)+(i-A)+65536:o):e&&n>=A&&n<=57343&&t>=1?(o=r.charCodeAt(t-1),i=n,S<=o&&o<=56319?1024*(o-S)+(i-A)+65536:i):n})),l(Ot,"constantcase",(function(r){return r=g(r,C," "),r=g(r,O,"$1 $2"),E(r=g(r=y(r),$,"_"))})),l(Ot,"endsWith",T),l(Ot,"formatInterpolate",nr),l(Ot,"formatTokenize",ar),l(Ot,"kebabcase",(function(r){return r=g(r,cr," "),r=g(r,fr,"$1 $2"),p(r=g(r=y(r),ur,"-"))})),l(Ot,"lpad",(function(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=gr(n),pr(e,n)+r)})),l(Ot,"ltrim",yr),l(Ot,"lowercase",p),l(Ot,"pascalcase",(function(r){return r=g(r,wr," "),r=g(r,br," "),r=g(r,_r,"$1 $2"),g(r=y(r),mr,jr)})),l(Ot,"percentEncode",(function(r){var t,e,n,i,o;for(n=(i=zr(r)).length,e="",o=0;o<n;o++)e+=(t=i[o])>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122||45===t||46===t||95===t||126===t?r.charAt(o):"%"+t.toString(16).toUpperCase();return e})),l(Ot,"repeat",pr),l(Ot,"replace",g),l(Ot,"rtrim",Mr),l(Ot,"snakecase",(function(r){return r=g(r,Nr," "),r=g(r,Dr,"$1 $2"),p(r=g(r=y(r),Xr,"_"))})),l(Ot,"startcase",(function(r){var t,e,n,i;for(t=!0,e="",i=0;i<r.length;i++)n=r.charAt(i),At.test(n)?t=!0:t&&(n=n.toUpperCase(),t=!1),e+=n;return e})),l(Ot,"startsWith",Ct),l(Ot,"trim",y),l(Ot,"uncapitalize",(function(r){return""===r?"":r.charAt(0).toLowerCase()+r.slice(1)})),l(Ot,"uppercase",E),Ot}));
//# sourceMappingURL=browser.js.map
