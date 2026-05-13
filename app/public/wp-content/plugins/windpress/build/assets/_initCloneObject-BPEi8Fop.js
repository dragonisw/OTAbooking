import { o as e, t } from "./isObject-DdF6vEWQ.js";
import { n, r } from "./set-Bnp0_Ia6.js";
import { d as i, i as a, r as o, t as s, u as c } from "./_Uint8Array-BaxPSAhP.js";
var l = Object.create, u = /* @__PURE__ */ (function() {
  function e2() {
  }
  return function(n2) {
    if (!t(n2)) return {};
    if (l) return l(n2);
    e2.prototype = n2;
    var r2 = new e2();
    return e2.prototype = void 0, r2;
  };
})();
function d(e2, t2) {
  var n2 = -1, r2 = e2.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e2[n2];
  return t2;
}
function f(e2, t2, i2, a2) {
  var o2 = !i2;
  i2 || (i2 = {});
  for (var s2 = -1, c2 = t2.length; ++s2 < c2; ) {
    var l2 = t2[s2], u2 = a2 ? a2(i2[l2], e2[l2], l2, i2, e2) : void 0;
    u2 === void 0 && (u2 = e2[l2]), o2 ? r(i2, l2, u2) : n(i2, l2, u2);
  }
  return i2;
}
function p(e2) {
  var t2 = [];
  if (e2 != null) for (var n2 in Object(e2)) t2.push(n2);
  return t2;
}
var m = Object.prototype.hasOwnProperty;
function h(e2) {
  if (!t(e2)) return p(e2);
  var n2 = c(e2), r2 = [];
  for (var i2 in e2) i2 == `constructor` && (n2 || !m.call(e2, i2)) || r2.push(i2);
  return r2;
}
function g(e2) {
  return i(e2) ? a(e2, true) : h(e2);
}
var _ = o(Object.getPrototypeOf, Object), v = typeof exports == `object` && exports && !exports.nodeType && exports, y = v && typeof module == `object` && module && !module.nodeType && module, b = y && y.exports === v ? e.Buffer : void 0, x = b ? b.allocUnsafe : void 0;
function S(e2, t2) {
  if (t2) return e2.slice();
  var n2 = e2.length, r2 = x ? x(n2) : new e2.constructor(n2);
  return e2.copy(r2), r2;
}
function C(e2) {
  var t2 = new e2.constructor(e2.byteLength);
  return new s(t2).set(new s(e2)), t2;
}
function w(e2, t2) {
  var n2 = t2 ? C(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.length);
}
function T(e2) {
  return typeof e2.constructor == `function` && !c(e2) ? u(_(e2)) : {};
}
export {
  _ as a,
  d as c,
  S as i,
  w as n,
  g as o,
  C as r,
  f as s,
  T as t
};
