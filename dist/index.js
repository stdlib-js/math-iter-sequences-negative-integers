"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(A,s){
var b=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function E(e,r){return b(r)?x(r,"iter")&&(e.iter=r.iter,!y(r.iter))?new TypeError(o('0aJ2t',"iter",r.iter)):null:new TypeError(o('0aJ2V',r));}s.exports=E
});var d=v(function(F,c){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),h=require('@stdlib/constants-float64-max-safe-integer/dist'),w=f();function g(e){var r,t,a,n,i;if(r={iter:h},arguments.length&&(n=w(r,e),n))throw n;return i=0,t={},u(t,"next",m),u(t,"return",q),l&&u(t,l,p),t;function m(){return i+=1,a||i>r.iter?{done:!0}:{value:-i,done:!1}}function q(O){return a=!0,arguments.length?{value:O,done:!0}:{done:!0}}function p(){return g(r)}}c.exports=g
});var N=d();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
