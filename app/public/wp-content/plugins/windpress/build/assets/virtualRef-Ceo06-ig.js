import { nn as e, vn as t } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { y as n } from "./dist-BY3QSpe-.js";
import { t as r } from "./set-Bnp0_Ia6.js";
import { t as i } from "./get-CA0PtJWw.js";
function a(a2, o) {
  let s = o?.persist ? n(o.persist, a2) : t(a2), c = {};
  function l(t2, n2) {
    return c[t2] || (c[t2] = e((e2, a3) => ({ get() {
      return e2(), i(s.value, t2, n2);
    }, set(e3) {
      r(s.value, t2, e3), a3();
    } }))), c[t2];
  }
  return { state: s, getVirtualRef: l };
}
export {
  a as t
};
