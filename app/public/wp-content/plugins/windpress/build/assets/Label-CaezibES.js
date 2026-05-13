import { On as e, et as t, k as n, mt as r, qt as i, v as a, xt as o } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { S as s } from "./Button-BArxwKIq.js";
import { y as c } from "./Tooltip-DkuatXWt.js";
var l = n({ __name: `Label`, props: { for: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `label` } }, setup(n2) {
  let l2 = n2;
  return c(), (n3, c2) => (r(), a(e(s), t(l2, { onMousedown: c2[0] || (c2[0] = (e2) => {
    !e2.defaultPrevented && e2.detail > 1 && e2.preventDefault();
  }) }), { default: i(() => [o(n3.$slots, `default`)]), _: 3 }, 16));
} });
export {
  l as t
};
