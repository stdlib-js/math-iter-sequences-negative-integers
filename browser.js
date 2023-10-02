// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=I.exec(r);n;)(e=r.slice(o,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=I.lastIndex,n=I.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function P(r){return"string"==typeof r}function V(r){var e,t,n;if(!P(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,C=N.toString,$=N.__defineGetter__,R=N.__defineSetter__,B=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=F;function Z(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object.prototype.hasOwnProperty;function U(r,e){return null!=r&&M.call(r,e)}var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W&&"symbol"==typeof W("foo")&&U(W,"iterator")&&"symbol"==typeof W.iterator?Symbol.iterator:null,J=9007199254740991,Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return Y&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,D="function"==typeof W?W.toStringTag:"",H=q()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[D],e=U(r,D);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)},K=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)},Q=/./;function rr(r){return"boolean"==typeof r}var er=Boolean,tr=Boolean.prototype.toString,nr=q();function or(r){return"object"==typeof r&&(r instanceof er||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function ir(r){return rr(r)||or(r)}function ar(){return new Function("return this;")()}Z(ir,"isPrimitive",rr),Z(ir,"isObject",or);var cr="object"==typeof self?self:null,ur="object"==typeof window?window:null,fr="object"==typeof globalThis?globalThis:null,lr=function(r){if(arguments.length){if(!rr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ar()}if(fr)return fr;if(cr)return cr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr=/^\s*function\s*([^(]*)/i;function yr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(gr,"REGEXP",dr),Z(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!K(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var hr="function"==typeof Q||"object"==typeof pr||"function"==typeof sr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?br(r).toLowerCase():e};function vr(r){return"function"===hr(r)}var wr,mr=Object,jr=Object.getPrototypeOf;wr=vr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!K(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!U(r,"constructor")&&U(e,"constructor")&&vr(e.constructor)&&"[object Function]"===H(e.constructor)&&U(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!U(r,e))return!1;return!0}(r)))}function Sr(r){return"number"==typeof r}var xr=Number,Tr=xr.prototype.toString,Ir=q();function kr(r){return"object"==typeof r&&(r instanceof xr||(Ir?function(r){try{return Tr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Ar(r){return Sr(r)||kr(r)}Z(Ar,"isPrimitive",Sr),Z(Ar,"isObject",kr);var Pr=Number.POSITIVE_INFINITY,Vr=xr.NEGATIVE_INFINITY,Fr=Math.floor;function Nr(r){return r<Pr&&r>Vr&&Fr(e=r)===e;var e}function Cr(r){return Sr(r)&&Nr(r)}function $r(r){return kr(r)&&Nr(r.valueOf())}function Rr(r){return Cr(r)||$r(r)}function Br(r){return Cr(r)&&r>=0}function Gr(r){return $r(r)&&r.valueOf()>=0}function Lr(r){return Br(r)||Gr(r)}function Zr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Mr(r,e){return Or(e)?U(e,"iter")&&(r.iter=e.iter,!Br(e.iter))?new TypeError(Zr("0aJ2t,G9","iter",e.iter)):null:new TypeError(Zr("0aJ2V,FD",e))}return Z(Rr,"isPrimitive",Cr),Z(Rr,"isObject",$r),Z(Lr,"isPrimitive",Br),Z(Lr,"isObject",Gr),function r(e){var t,n,o,i,a;if(t={iter:J},arguments.length&&(i=Mr(t,e)))throw i;return a=0,Z(n={},"next",c),Z(n,"return",u),X&&Z(n,X,f),n;function c(){return a+=1,o||a>t.iter?{done:!0}:{value:-a,done:!1}}function u(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return r(t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterNegativeIntegersSeq=e();
//# sourceMappingURL=browser.js.map
