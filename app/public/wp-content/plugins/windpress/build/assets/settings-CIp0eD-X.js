import { g as e, vn as t } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { i as n, n as r } from "./log-BcOb3xTO.js";
import { t as i } from "./api-3yDUayxW.js";
import { a, r as o, t as s } from "./isObject-DdF6vEWQ.js";
import { c } from "./_MapCache-YhmtHl4K.js";
import { a as l, c as u, i as d, n as f, o as p, r as ee, s as m, t as h } from "./isEqual-i1JvoB7a.js";
import { a as g, c as te, i as ne, n as _, o as v, r as y, s as b, t as re } from "./_initCloneObject-BPEi8Fop.js";
import { n as x } from "./set-Bnp0_Ia6.js";
import { c as S, n as ie, o as C, s as w } from "./_Uint8Array-BaxPSAhP.js";
import { t as ae } from "./virtualRef-Ceo06-ig.js";
var T = n(`busy`, () => {
  let n2 = r(), i2 = t([]), a2 = e(() => i2.value.length > 0), o2 = e(() => (e2) => i2.value.some((t2) => t2.task === e2));
  function s2(e2, t2) {
    i2.value.unshift({ timestamp: Date.now(), task: e2 }), t2 != null && (typeof t2 == `string` ? n2.add({ message: t2, type: `info`, group: `busy` }) : typeof t2 == `object` && n2.add(Object.assign({ type: `info`, group: `busy` }, t2)));
  }
  function c2(e2) {
    let t2 = false;
    i2.value = i2.value.filter((n3) => t2 ? true : n3.task === e2 ? (t2 = true, false) : true);
  }
  function l2() {
    i2.value = [];
  }
  return { tasks: i2, isBusy: a2, hasTask: o2, add: s2, remove: c2, reset: l2 };
});
function oe(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length; ++n2 < r2 && t2(e2[n2], n2, e2) !== false; ) ;
  return e2;
}
function se(e2, t2) {
  return e2 && b(t2, u(t2), e2);
}
function ce(e2, t2) {
  return e2 && b(t2, v(t2), e2);
}
function le(e2, t2) {
  return b(e2, l(e2), t2);
}
var E = Object.getOwnPropertySymbols ? function(e2) {
  for (var t2 = []; e2; ) m(t2, l(e2)), e2 = g(e2);
  return t2;
} : p;
function D(e2, t2) {
  return b(e2, E(e2), t2);
}
function O(e2) {
  return d(e2, v, E);
}
var k = Object.prototype.hasOwnProperty;
function A(e2) {
  var t2 = e2.length, n2 = new e2.constructor(t2);
  return t2 && typeof e2[0] == `string` && k.call(e2, `index`) && (n2.index = e2.index, n2.input = e2.input), n2;
}
function j(e2, t2) {
  var n2 = t2 ? y(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.byteLength);
}
var M = /\w*$/;
function N(e2) {
  var t2 = new e2.constructor(e2.source, M.exec(e2));
  return t2.lastIndex = e2.lastIndex, t2;
}
var P = a ? a.prototype : void 0, F = P ? P.valueOf : void 0;
function I(e2) {
  return F ? Object(F.call(e2)) : {};
}
var L = `[object Boolean]`, R = `[object Date]`, z = `[object Map]`, B = `[object Number]`, V = `[object RegExp]`, H = `[object Set]`, U = `[object String]`, W = `[object Symbol]`, ue = `[object ArrayBuffer]`, de = `[object DataView]`, fe = `[object Float32Array]`, pe = `[object Float64Array]`, me = `[object Int8Array]`, he = `[object Int16Array]`, ge = `[object Int32Array]`, _e = `[object Uint8Array]`, ve = `[object Uint8ClampedArray]`, ye = `[object Uint16Array]`, be = `[object Uint32Array]`;
function xe(e2, t2, n2) {
  var r2 = e2.constructor;
  switch (t2) {
    case ue:
      return y(e2);
    case L:
    case R:
      return new r2(+e2);
    case de:
      return j(e2, n2);
    case fe:
    case pe:
    case me:
    case he:
    case ge:
    case _e:
    case ve:
    case ye:
    case be:
      return _(e2, n2);
    case z:
      return new r2();
    case B:
    case U:
      return new r2(e2);
    case V:
      return N(e2);
    case H:
      return new r2();
    case W:
      return I(e2);
  }
}
var Se = `[object Map]`;
function Ce(e2) {
  return o(e2) && f(e2) == Se;
}
var G = C && C.isMap, we = G ? w(G) : Ce, Te = `[object Set]`;
function Ee(e2) {
  return o(e2) && f(e2) == Te;
}
var K = C && C.isSet, De = K ? w(K) : Ee, Oe = 1, ke = 2, Ae = 4, q = `[object Arguments]`, je = `[object Array]`, Me = `[object Boolean]`, Ne = `[object Date]`, Pe = `[object Error]`, J = `[object Function]`, Fe = `[object GeneratorFunction]`, Ie = `[object Map]`, Le = `[object Number]`, Y = `[object Object]`, Re = `[object RegExp]`, ze = `[object Set]`, Be = `[object String]`, Ve = `[object Symbol]`, He = `[object WeakMap]`, Ue = `[object ArrayBuffer]`, We = `[object DataView]`, X = `[object Float32Array]`, Ge = `[object Float64Array]`, Ke = `[object Int8Array]`, qe = `[object Int16Array]`, Je = `[object Int32Array]`, Ye = `[object Uint8Array]`, Xe = `[object Uint8ClampedArray]`, Ze = `[object Uint16Array]`, Qe = `[object Uint32Array]`, Z = {};
Z[q] = Z[je] = Z[Ue] = Z[We] = Z[Me] = Z[Ne] = Z[X] = Z[Ge] = Z[Ke] = Z[qe] = Z[Je] = Z[Ie] = Z[Le] = Z[Y] = Z[Re] = Z[ze] = Z[Be] = Z[Ve] = Z[Ye] = Z[Xe] = Z[Ze] = Z[Qe] = true, Z[Pe] = Z[J] = Z[He] = false;
function Q(e2, t2, n2, r2, i2, a2) {
  var o2, l2 = t2 & Oe, d2 = t2 & ke, p2 = t2 & Ae;
  if (n2 && (o2 = i2 ? n2(e2, r2, i2, a2) : n2(e2)), o2 !== void 0) return o2;
  if (!s(e2)) return e2;
  var m2 = c(e2);
  if (m2) {
    if (o2 = A(e2), !l2) return te(e2, o2);
  } else {
    var h2 = f(e2), g2 = h2 == J || h2 == Fe;
    if (S(e2)) return ne(e2, l2);
    if (h2 == Y || h2 == q || g2 && !i2) {
      if (o2 = d2 || g2 ? {} : re(e2), !l2) return d2 ? D(e2, ce(o2, e2)) : le(e2, se(o2, e2));
    } else {
      if (!Z[h2]) return i2 ? e2 : {};
      o2 = xe(e2, h2, l2);
    }
  }
  a2 || (a2 = new ie());
  var _2 = a2.get(e2);
  if (_2) return _2;
  a2.set(e2, o2), De(e2) ? e2.forEach(function(r3) {
    o2.add(Q(r3, t2, n2, r3, e2, a2));
  }) : we(e2) && e2.forEach(function(r3, i3) {
    o2.set(i3, Q(r3, t2, n2, i3, e2, a2));
  });
  var y2 = m2 ? void 0 : (p2 ? d2 ? O : ee : d2 ? v : u)(e2);
  return oe(y2 || e2, function(r3, i3) {
    y2 && (i3 = r3, r3 = e2[i3]), x(o2, i3, Q(r3, t2, n2, i3, e2, a2));
  }), o2;
}
var $e = 1, et = 4;
function $(e2) {
  return Q(e2, $e | et);
}
var tt = n(`settings`, () => {
  let n2 = T(), r2 = i(), { state: a2, getVirtualRef: o2 } = ae({}), s2 = t({});
  async function c2() {
    return n2.add(`settings.doPull`), await r2.request(`/admin/settings/options/index`, { method: `GET` }).then((e2) => (a2.value = $(e2.data.options), s2.value = $(e2.data.options), { message: e2.data.message, success: true })).catch((e2) => {
    }).finally(() => {
      n2.remove(`settings.doPull`);
    });
  }
  async function l2() {
    return n2.add(`settings.doPush`), r2.request(`/admin/settings/options/store`, { method: `POST`, data: { options: a2.value } }).then((e2) => (s2.value = $(a2.value), { message: e2.data.message, success: true })).catch((e2) => {
      throw Error(e2.response ? e2.response.data.message : e2.message);
    }).finally(() => {
      n2.remove(`settings.doPush`);
    });
  }
  function u2() {
    Object.keys(a2.value).length === 0 && c2();
  }
  return { options: a2, virtualOptions: o2, doPull: c2, doPush: l2, initPull: u2, hasChanged: e(() => !h(a2.value, s2.value)) };
});
export {
  $ as n,
  T as r,
  tt as t
};
