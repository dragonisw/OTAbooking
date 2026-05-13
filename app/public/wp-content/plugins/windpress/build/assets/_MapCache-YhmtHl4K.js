import { i as e, o as t, t as n } from "./isObject-DdF6vEWQ.js";
var r = Array.isArray, i = `[object AsyncFunction]`, a = `[object Function]`, o = `[object GeneratorFunction]`, s = `[object Proxy]`;
function c(t2) {
  if (!n(t2)) return false;
  var r2 = e(t2);
  return r2 == a || r2 == o || r2 == i || r2 == s;
}
var l = t[`__core-js_shared__`], u = (function() {
  var e2 = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || ``);
  return e2 ? `Symbol(src)_1.` + e2 : ``;
})();
function d(e2) {
  return !!u && u in e2;
}
var f = Function.prototype.toString;
function p(e2) {
  if (e2 != null) {
    try {
      return f.call(e2);
    } catch {
    }
    try {
      return e2 + ``;
    } catch {
    }
  }
  return ``;
}
var m = /[\\^$.*+?()[\]{}|]/g, h = /^\[object .+?Constructor\]$/, g = Function.prototype, _ = Object.prototype, v = g.toString, y = _.hasOwnProperty, b = RegExp(`^` + v.call(y).replace(m, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function x(e2) {
  return !n(e2) || d(e2) ? false : (c(e2) ? b : h).test(p(e2));
}
function S(e2, t2) {
  return e2?.[t2];
}
function C(e2, t2) {
  var n2 = S(e2, t2);
  return x(n2) ? n2 : void 0;
}
function w(e2, t2) {
  return e2 === t2 || e2 !== e2 && t2 !== t2;
}
var T = C(Object, `create`);
function E() {
  this.__data__ = T ? T(null) : {}, this.size = 0;
}
function D(e2) {
  var t2 = this.has(e2) && delete this.__data__[e2];
  return this.size -= +!!t2, t2;
}
var O = `__lodash_hash_undefined__`, k = Object.prototype.hasOwnProperty;
function A(e2) {
  var t2 = this.__data__;
  if (T) {
    var n2 = t2[e2];
    return n2 === O ? void 0 : n2;
  }
  return k.call(t2, e2) ? t2[e2] : void 0;
}
var j = Object.prototype.hasOwnProperty;
function M(e2) {
  var t2 = this.__data__;
  return T ? t2[e2] !== void 0 : j.call(t2, e2);
}
var N = `__lodash_hash_undefined__`;
function P(e2, t2) {
  var n2 = this.__data__;
  return this.size += +!this.has(e2), n2[e2] = T && t2 === void 0 ? N : t2, this;
}
function F(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
F.prototype.clear = E, F.prototype.delete = D, F.prototype.get = A, F.prototype.has = M, F.prototype.set = P;
function I() {
  this.__data__ = [], this.size = 0;
}
function L(e2, t2) {
  for (var n2 = e2.length; n2--; ) if (w(e2[n2][0], t2)) return n2;
  return -1;
}
var R = Array.prototype.splice;
function z(e2) {
  var t2 = this.__data__, n2 = L(t2, e2);
  return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : R.call(t2, n2, 1), --this.size, true);
}
function B(e2) {
  var t2 = this.__data__, n2 = L(t2, e2);
  return n2 < 0 ? void 0 : t2[n2][1];
}
function V(e2) {
  return L(this.__data__, e2) > -1;
}
function H(e2, t2) {
  var n2 = this.__data__, r2 = L(n2, e2);
  return r2 < 0 ? (++this.size, n2.push([e2, t2])) : n2[r2][1] = t2, this;
}
function U(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
U.prototype.clear = I, U.prototype.delete = z, U.prototype.get = B, U.prototype.has = V, U.prototype.set = H;
var W = C(t, `Map`);
function G() {
  this.size = 0, this.__data__ = { hash: new F(), map: new (W || U)(), string: new F() };
}
function K(e2) {
  var t2 = typeof e2;
  return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e2 !== `__proto__` : e2 === null;
}
function q(e2, t2) {
  var n2 = e2.__data__;
  return K(t2) ? n2[typeof t2 == `string` ? `string` : `hash`] : n2.map;
}
function J(e2) {
  var t2 = q(this, e2).delete(e2);
  return this.size -= +!!t2, t2;
}
function Y(e2) {
  return q(this, e2).get(e2);
}
function X(e2) {
  return q(this, e2).has(e2);
}
function Z(e2, t2) {
  var n2 = q(this, e2), r2 = n2.size;
  return n2.set(e2, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
function Q(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
Q.prototype.clear = G, Q.prototype.delete = J, Q.prototype.get = Y, Q.prototype.has = X, Q.prototype.set = Z;
export {
  C as a,
  r as c,
  w as i,
  W as n,
  p as o,
  U as r,
  c as s,
  Q as t
};
