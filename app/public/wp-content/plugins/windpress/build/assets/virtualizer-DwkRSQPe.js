import { I as e } from "./Button-BArxwKIq.js";
function t(t2, n2) {
  if (typeof t2 != `object` || !t2) return false;
  let r2 = e(t2, n2);
  return r2 != null && r2 !== ``;
}
function n(e2, t2) {
  return t2 ? { xs: 44, sm: 48, md: 52, lg: 56, xl: 60 }[e2] : { xs: 24, sm: 28, md: 32, lg: 36, xl: 40 }[e2];
}
function r(e2, r2, i, a) {
  let o = n(r2, true), s = n(r2, false);
  return a ? () => o : i ? (n2) => t(e2[n2], i) ? o : s : () => s;
}
export {
  r as t
};
