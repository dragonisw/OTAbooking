import { t as e } from "./isObject-DdF6vEWQ.js";
import { n as t, t as n } from "./_toKey-FKS-lGKv.js";
import { a as r, i } from "./_MapCache-YhmtHl4K.js";
import { t as a } from "./_isIndex-Bbyz4ars.js";
var o = (function() {
  try {
    var e2 = r(Object, `defineProperty`);
    return e2({}, ``, {}), e2;
  } catch {
  }
})();
function s(e2, t2, n2) {
  t2 == `__proto__` && o ? o(e2, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e2[t2] = n2;
}
var c = Object.prototype.hasOwnProperty;
function l(e2, t2, n2) {
  var r2 = e2[t2];
  (!(c.call(e2, t2) && i(r2, n2)) || n2 === void 0 && !(t2 in e2)) && s(e2, t2, n2);
}
function u(r2, i2, o2, s2) {
  if (!e(r2)) return r2;
  i2 = t(i2, r2);
  for (var c2 = -1, u2 = i2.length, d2 = u2 - 1, f = r2; f != null && ++c2 < u2; ) {
    var p = n(i2[c2]), m = o2;
    if (p === `__proto__` || p === `constructor` || p === `prototype`) return r2;
    if (c2 != d2) {
      var h = f[p];
      m = s2 ? s2(h, p, f) : void 0, m === void 0 && (m = e(h) ? h : a(i2[c2 + 1]) ? [] : {});
    }
    l(f, p, m), f = f[p];
  }
  return r2;
}
function d(e2, t2, n2) {
  return e2 == null ? e2 : u(e2, t2, n2);
}
export {
  o as i,
  l as n,
  s as r,
  d as t
};
