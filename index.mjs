// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function d(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0I435","iter",t.iter)):null:new TypeError(o("0I42h",t))}function m(n){var s,i,o,l,p;if(s={iter:r},arguments.length&&(l=d(s,n)))throw l;return p=0,e(i={},"next",j),e(i,"return",h),t&&e(i,t,a),i;function j(){return p+=1,o||p>s.iter?{done:!0}:{value:-p,done:!1}}function h(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function a(){return m(s)}}export{m as default};
//# sourceMappingURL=index.mjs.map
