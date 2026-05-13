import { n as e, t } from "./dist-CFDaZ429.js";
e();
var n = typeof t == `object` && t && t.Object === Object && t, r = typeof self == `object` && self && self.Object === Object && self, i = n || r || Function(`return this`)(), a = i.Symbol, o = Object.prototype, s = o.hasOwnProperty, c = o.toString, l = a ? a.toStringTag : void 0;
function u(e2) {
  var t2 = s.call(e2, l), n2 = e2[l];
  try {
    e2[l] = void 0;
    var r2 = true;
  } catch {
  }
  var i2 = c.call(e2);
  return r2 && (t2 ? e2[l] = n2 : delete e2[l]), i2;
}
var d = Object.prototype.toString;
function f(e2) {
  return d.call(e2);
}
var p = `[object Null]`, m = `[object Undefined]`, h = a ? a.toStringTag : void 0;
function g(e2) {
  return e2 == null ? e2 === void 0 ? m : p : h && h in Object(e2) ? u(e2) : f(e2);
}
function _(e2) {
  return typeof e2 == `object` && !!e2;
}
var v = `[object Symbol]`;
function y(e2) {
  return typeof e2 == `symbol` || _(e2) && g(e2) == v;
}
function b(e2) {
  var t2 = typeof e2;
  return e2 != null && (t2 == `object` || t2 == `function`);
}
export {
  a,
  g as i,
  y as n,
  i as o,
  _ as r,
  n as s,
  b as t
};
