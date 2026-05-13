import { n as e, t } from "./_toKey-FKS-lGKv.js";
function n(n2, r2) {
  r2 = e(r2, n2);
  for (var i = 0, a = r2.length; n2 != null && i < a; ) n2 = n2[t(r2[i++])];
  return i && i == a ? n2 : void 0;
}
function r(e2, t2, r2) {
  var i = e2 == null ? void 0 : n(e2, t2);
  return i === void 0 ? r2 : i;
}
export {
  r as t
};
