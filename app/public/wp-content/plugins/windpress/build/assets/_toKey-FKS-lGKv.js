import { a as e, n as t } from "./isObject-DdF6vEWQ.js";
import { c as n, t as r } from "./_MapCache-YhmtHl4K.js";
function i(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e2[n2], n2, e2);
  return i2;
}
var a = 1 / 0, o = e ? e.prototype : void 0, s = o ? o.toString : void 0;
function c(e2) {
  if (typeof e2 == `string`) return e2;
  if (n(e2)) return i(e2, c) + ``;
  if (t(e2)) return s ? s.call(e2) : ``;
  var r2 = e2 + ``;
  return r2 == `0` && 1 / e2 == -a ? `-0` : r2;
}
var l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u = /^\w*$/;
function d(e2, r2) {
  if (n(e2)) return false;
  var i2 = typeof e2;
  return i2 == `number` || i2 == `symbol` || i2 == `boolean` || e2 == null || t(e2) ? true : u.test(e2) || !l.test(e2) || r2 != null && e2 in Object(r2);
}
var f = `Expected a function`;
function p(e2, t2) {
  if (typeof e2 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(f);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e2.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (p.Cache || r)(), n2;
}
p.Cache = r;
var m = 500;
function h(e2) {
  var t2 = p(e2, function(e3) {
    return n2.size === m && n2.clear(), e3;
  }), n2 = t2.cache;
  return t2;
}
var g = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _ = /\\(\\)?/g, v = h(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(``), e2.replace(g, function(e3, n2, r2, i2) {
    t2.push(r2 ? i2.replace(_, `$1`) : n2 || e3);
  }), t2;
});
function y(e2) {
  return e2 == null ? `` : c(e2);
}
function b(e2, t2) {
  return n(e2) ? e2 : d(e2, t2) ? [e2] : v(y(e2));
}
var x = 1 / 0;
function S(e2) {
  if (typeof e2 == `string` || t(e2)) return e2;
  var n2 = e2 + ``;
  return n2 == `0` && 1 / e2 == -x ? `-0` : n2;
}
export {
  b as n,
  S as t
};
