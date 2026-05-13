import { n as e, o as t, t as n } from "./isObject-DdF6vEWQ.js";
var r = /\s/;
function i(e2) {
  for (var t2 = e2.length; t2-- && r.test(e2.charAt(t2)); ) ;
  return t2;
}
var a = /^\s+/;
function o(e2) {
  return e2 && e2.slice(0, i(e2) + 1).replace(a, ``);
}
var s = NaN, c = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, u = /^0o[0-7]+$/i, d = parseInt;
function f(t2) {
  if (typeof t2 == `number`) return t2;
  if (e(t2)) return s;
  if (n(t2)) {
    var r2 = typeof t2.valueOf == `function` ? t2.valueOf() : t2;
    t2 = n(r2) ? r2 + `` : r2;
  }
  if (typeof t2 != `string`) return t2 === 0 ? t2 : +t2;
  t2 = o(t2);
  var i2 = l.test(t2);
  return i2 || u.test(t2) ? d(t2.slice(2), i2 ? 2 : 8) : c.test(t2) ? s : +t2;
}
var p = function() {
  return t.Date.now();
}, m = `Expected a function`, h = Math.max, g = Math.min;
function _(e2, t2, r2) {
  var i2, a2, o2, s2, c2, l2, u2 = 0, d2 = false, _2 = false, v = true;
  if (typeof e2 != `function`) throw TypeError(m);
  t2 = f(t2) || 0, n(r2) && (d2 = !!r2.leading, _2 = `maxWait` in r2, o2 = _2 ? h(f(r2.maxWait) || 0, t2) : o2, v = `trailing` in r2 ? !!r2.trailing : v);
  function y(t3) {
    var n2 = i2, r3 = a2;
    return i2 = a2 = void 0, u2 = t3, s2 = e2.apply(r3, n2), s2;
  }
  function b(e3) {
    return u2 = e3, c2 = setTimeout(C, t2), d2 ? y(e3) : s2;
  }
  function x(e3) {
    var n2 = e3 - l2, r3 = e3 - u2, i3 = t2 - n2;
    return _2 ? g(i3, o2 - r3) : i3;
  }
  function S(e3) {
    var n2 = e3 - l2, r3 = e3 - u2;
    return l2 === void 0 || n2 >= t2 || n2 < 0 || _2 && r3 >= o2;
  }
  function C() {
    var e3 = p();
    if (S(e3)) return w(e3);
    c2 = setTimeout(C, x(e3));
  }
  function w(e3) {
    return c2 = void 0, v && i2 ? y(e3) : (i2 = a2 = void 0, s2);
  }
  function T() {
    c2 !== void 0 && clearTimeout(c2), u2 = 0, i2 = l2 = a2 = c2 = void 0;
  }
  function E() {
    return c2 === void 0 ? s2 : w(p());
  }
  function D() {
    var e3 = p(), n2 = S(e3);
    if (i2 = arguments, a2 = this, l2 = e3, n2) {
      if (c2 === void 0) return b(l2);
      if (_2) return clearTimeout(c2), c2 = setTimeout(C, t2), y(l2);
    }
    return c2 === void 0 && (c2 = setTimeout(C, t2)), s2;
  }
  return D.cancel = T, D.flush = E, D;
}
export {
  _ as t
};
