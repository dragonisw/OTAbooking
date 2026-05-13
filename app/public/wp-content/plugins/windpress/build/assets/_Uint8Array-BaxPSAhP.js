import { i as e, o as t, r as n, s as r } from "./isObject-DdF6vEWQ.js";
import { c as i, n as a, r as o, s, t as c } from "./_MapCache-YhmtHl4K.js";
import { t as l } from "./_isIndex-Bbyz4ars.js";
var u = 9007199254740991;
function d(e2) {
  return typeof e2 == `number` && e2 > -1 && e2 % 1 == 0 && e2 <= u;
}
function ee(e2) {
  return e2 != null && d(e2.length) && !s(e2);
}
var te = Object.prototype;
function ne(e2) {
  var t2 = e2 && e2.constructor;
  return e2 === (typeof t2 == `function` && t2.prototype || te);
}
function re(e2, t2) {
  for (var n2 = -1, r2 = Array(e2); ++n2 < e2; ) r2[n2] = t2(n2);
  return r2;
}
var ie = `[object Arguments]`;
function f(t2) {
  return n(t2) && e(t2) == ie;
}
var p = Object.prototype, m = p.hasOwnProperty, ae = p.propertyIsEnumerable, h = f(/* @__PURE__ */ (function() {
  return arguments;
})()) ? f : function(e2) {
  return n(e2) && m.call(e2, `callee`) && !ae.call(e2, `callee`);
};
function oe() {
  return false;
}
var g = typeof exports == `object` && exports && !exports.nodeType && exports, _ = g && typeof module == `object` && module && !module.nodeType && module, v = _ && _.exports === g ? t.Buffer : void 0, y = (v ? v.isBuffer : void 0) || oe, b = `[object Arguments]`, x = `[object Array]`, S = `[object Boolean]`, C = `[object Date]`, w = `[object Error]`, T = `[object Function]`, E = `[object Map]`, D = `[object Number]`, O = `[object Object]`, k = `[object RegExp]`, A = `[object Set]`, j = `[object String]`, M = `[object WeakMap]`, N = `[object ArrayBuffer]`, P = `[object DataView]`, F = `[object Float32Array]`, I = `[object Float64Array]`, L = `[object Int8Array]`, R = `[object Int16Array]`, z = `[object Int32Array]`, se = `[object Uint8Array]`, B = `[object Uint8ClampedArray]`, V = `[object Uint16Array]`, H = `[object Uint32Array]`, U = {};
U[F] = U[I] = U[L] = U[R] = U[z] = U[se] = U[B] = U[V] = U[H] = true, U[b] = U[x] = U[N] = U[S] = U[P] = U[C] = U[w] = U[T] = U[E] = U[D] = U[O] = U[k] = U[A] = U[j] = U[M] = false;
function W(t2) {
  return n(t2) && d(t2.length) && !!U[e(t2)];
}
function G(e2) {
  return function(t2) {
    return e2(t2);
  };
}
var K = typeof exports == `object` && exports && !exports.nodeType && exports, q = K && typeof module == `object` && module && !module.nodeType && module, J = q && q.exports === K && r.process, Y = (function() {
  try {
    return q && q.require && q.require(`util`).types || J && J.binding && J.binding(`util`);
  } catch {
  }
})(), X = Y && Y.isTypedArray, Z = X ? G(X) : W, ce = Object.prototype.hasOwnProperty;
function le(e2, t2) {
  var n2 = i(e2), r2 = !n2 && h(e2), a2 = !n2 && !r2 && y(e2), o2 = !n2 && !r2 && !a2 && Z(e2), s2 = n2 || r2 || a2 || o2, c2 = s2 ? re(e2.length, String) : [], u2 = c2.length;
  for (var d2 in e2) (t2 || ce.call(e2, d2)) && !(s2 && (d2 == `length` || a2 && (d2 == `offset` || d2 == `parent`) || o2 && (d2 == `buffer` || d2 == `byteLength` || d2 == `byteOffset`) || l(d2, u2))) && c2.push(d2);
  return c2;
}
function ue(e2, t2) {
  return function(n2) {
    return e2(t2(n2));
  };
}
function Q() {
  this.__data__ = new o(), this.size = 0;
}
function de(e2) {
  var t2 = this.__data__, n2 = t2.delete(e2);
  return this.size = t2.size, n2;
}
function fe(e2) {
  return this.__data__.get(e2);
}
function pe(e2) {
  return this.__data__.has(e2);
}
var me = 200;
function he(e2, t2) {
  var n2 = this.__data__;
  if (n2 instanceof o) {
    var r2 = n2.__data__;
    if (!a || r2.length < me - 1) return r2.push([e2, t2]), this.size = ++n2.size, this;
    n2 = this.__data__ = new c(r2);
  }
  return n2.set(e2, t2), this.size = n2.size, this;
}
function $(e2) {
  var t2 = this.__data__ = new o(e2);
  this.size = t2.size;
}
$.prototype.clear = Q, $.prototype.delete = de, $.prototype.get = fe, $.prototype.has = pe, $.prototype.set = he;
var ge = t.Uint8Array;
export {
  Z as a,
  y as c,
  ee as d,
  le as i,
  h as l,
  $ as n,
  Y as o,
  ue as r,
  G as s,
  ge as t,
  ne as u
};
