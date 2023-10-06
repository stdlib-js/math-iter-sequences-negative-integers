// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function d(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0aJ2t,G9","iter",t.iter)):null:new TypeError(o("0aJ2V,FD",t))}function m(n){var s,i,o,l,p;if(s={iter:r},arguments.length&&(l=d(s,n)))throw l;return p=0,e(i={},"next",j),e(i,"return",a),t&&e(i,t,f),i;function j(){return p+=1,o||p>s.iter?{done:!0}:{value:-p,done:!1}}function a(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return m(s)}}export{m as default};
//# sourceMappingURL=index.mjs.map
