import { B as e, Ht as t, J as n, On as r, ft as i, g as a, gn as o, gt as s, k as c, nt as l, ot as u, tt as d, vn as f, xn as ee, yn as p } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
var m = typeof document < `u`;
function h(e2) {
  return typeof e2 == `object` || `displayName` in e2 || `props` in e2 || `__vccOpts` in e2;
}
function te(e2) {
  return e2.__esModule || e2[Symbol.toStringTag] === `Module` || e2.default && h(e2.default);
}
var g = Object.assign;
function _(e2, t2) {
  let n2 = {};
  for (let r2 in t2) {
    let i2 = t2[r2];
    n2[r2] = y(i2) ? i2.map(e2) : e2(i2);
  }
  return n2;
}
var v = () => {
}, y = Array.isArray;
function ne(e2, t2) {
  let n2 = {};
  for (let r2 in e2) n2[r2] = r2 in t2 ? t2[r2] : e2[r2];
  return n2;
}
var b = (function(e2) {
  return e2[e2.MATCHER_NOT_FOUND = 1] = `MATCHER_NOT_FOUND`, e2[e2.NAVIGATION_GUARD_REDIRECT = 2] = `NAVIGATION_GUARD_REDIRECT`, e2[e2.NAVIGATION_ABORTED = 4] = `NAVIGATION_ABORTED`, e2[e2.NAVIGATION_CANCELLED = 8] = `NAVIGATION_CANCELLED`, e2[e2.NAVIGATION_DUPLICATED = 16] = `NAVIGATION_DUPLICATED`, e2;
})({}), re = /* @__PURE__ */ Symbol(``);
b.MATCHER_NOT_FOUND, b.NAVIGATION_GUARD_REDIRECT, b.NAVIGATION_ABORTED, b.NAVIGATION_CANCELLED, b.NAVIGATION_DUPLICATED;
function x(e2, t2) {
  return g(Error(), { type: e2, [re]: true }, t2);
}
function S(e2, t2) {
  return e2 instanceof Error && re in e2 && (t2 == null || !!(e2.type & t2));
}
var ie = /* @__PURE__ */ Symbol(``), ae = /* @__PURE__ */ Symbol(``), C = /* @__PURE__ */ Symbol(``), w = /* @__PURE__ */ Symbol(``), oe = /* @__PURE__ */ Symbol(``);
function T() {
  return n(C);
}
function E(e2) {
  return n(w);
}
var D = /#/g, O = /&/g, se = /\//g, ce = /=/g, k = /\?/g, le = /\+/g, A = /%5B/g, j = /%5D/g, M = /%5E/g, N = /%60/g, P = /%7B/g, ue = /%7C/g, F = /%7D/g, I = /%20/g;
function L(e2) {
  return e2 == null ? `` : encodeURI(`` + e2).replace(ue, `|`).replace(A, `[`).replace(j, `]`);
}
function de(e2) {
  return L(e2).replace(P, `{`).replace(F, `}`).replace(M, `^`);
}
function R(e2) {
  return L(e2).replace(le, `%2B`).replace(I, `+`).replace(D, `%23`).replace(O, `%26`).replace(N, "`").replace(P, `{`).replace(F, `}`).replace(M, `^`);
}
function fe(e2) {
  return R(e2).replace(ce, `%3D`);
}
function z(e2) {
  return L(e2).replace(D, `%23`).replace(k, `%3F`);
}
function pe(e2) {
  return z(e2).replace(se, `%2F`);
}
function B(e2) {
  if (e2 == null) return null;
  try {
    return decodeURIComponent(`` + e2);
  } catch {
  }
  return `` + e2;
}
var V = /\/$/, H = (e2) => e2.replace(V, ``);
function me(e2, t2, n2 = `/`) {
  let r2, i2 = {}, a2 = ``, o2 = ``, s2 = t2.indexOf(`#`), c2 = t2.indexOf(`?`);
  return c2 = s2 >= 0 && c2 > s2 ? -1 : c2, c2 >= 0 && (r2 = t2.slice(0, c2), a2 = t2.slice(c2, s2 > 0 ? s2 : t2.length), i2 = e2(a2.slice(1))), s2 >= 0 && (r2 || (r2 = t2.slice(0, s2)), o2 = t2.slice(s2, t2.length)), r2 = ve(r2 ?? t2, n2), { fullPath: r2 + a2 + o2, path: r2, query: i2, hash: B(o2) };
}
function he(e2, t2) {
  let n2 = t2.query ? e2(t2.query) : ``;
  return t2.path + (n2 && `?`) + n2 + (t2.hash || ``);
}
function U(e2, t2) {
  return !t2 || !e2.toLowerCase().startsWith(t2.toLowerCase()) ? e2 : e2.slice(t2.length) || `/`;
}
function ge(e2, t2, n2) {
  let r2 = t2.matched.length - 1, i2 = n2.matched.length - 1;
  return r2 > -1 && r2 === i2 && W(t2.matched[r2], n2.matched[i2]) && G(t2.params, n2.params) && e2(t2.query) === e2(n2.query) && t2.hash === n2.hash;
}
function W(e2, t2) {
  return (e2.aliasOf || e2) === (t2.aliasOf || t2);
}
function G(e2, t2) {
  if (Object.keys(e2).length !== Object.keys(t2).length) return false;
  for (var n2 in e2) if (!K(e2[n2], t2[n2])) return false;
  return true;
}
function K(e2, t2) {
  return y(e2) ? _e(e2, t2) : y(t2) ? _e(t2, e2) : (e2 && e2.valueOf()) === (t2 && t2.valueOf());
}
function _e(e2, t2) {
  return y(t2) ? e2.length === t2.length && e2.every((e3, n2) => e3 === t2[n2]) : e2.length === 1 && e2[0] === t2;
}
function ve(e2, t2) {
  if (e2.startsWith(`/`)) return e2;
  if (!e2) return t2;
  let n2 = t2.split(`/`), r2 = e2.split(`/`), i2 = r2[r2.length - 1];
  (i2 === `..` || i2 === `.`) && r2.push(``);
  let a2 = n2.length - 1, o2, s2;
  for (o2 = 0; o2 < r2.length; o2++) if (s2 = r2[o2], s2 !== `.`) if (s2 === `..`) a2 > 1 && a2--;
  else break;
  return n2.slice(0, a2).join(`/`) + `/` + r2.slice(o2).join(`/`);
}
var q = { path: `/`, name: void 0, params: {}, query: {}, hash: ``, fullPath: `/`, matched: [], meta: {}, redirectedFrom: void 0 }, ye = (function(e2) {
  return e2.pop = `pop`, e2.push = `push`, e2;
})({}), be = (function(e2) {
  return e2.back = `back`, e2.forward = `forward`, e2.unknown = ``, e2;
})({});
function xe(e2) {
  if (!e2) if (m) {
    let t2 = document.querySelector(`base`);
    e2 = t2 && t2.getAttribute(`href`) || `/`, e2 = e2.replace(/^\w+:\/\/[^/]+/, ``);
  } else e2 = `/`;
  return e2[0] !== `/` && e2[0] !== `#` && (e2 = `/` + e2), H(e2);
}
var Se = /^[^#]+#/;
function Ce(e2, t2) {
  return e2.replace(Se, `#`) + t2;
}
function we(e2, t2) {
  let n2 = document.documentElement.getBoundingClientRect(), r2 = e2.getBoundingClientRect();
  return { behavior: t2.behavior, left: r2.left - n2.left - (t2.left || 0), top: r2.top - n2.top - (t2.top || 0) };
}
var J = () => ({ left: window.scrollX, top: window.scrollY });
function Te(e2) {
  let t2;
  if (`el` in e2) {
    let n2 = e2.el, r2 = typeof n2 == `string` && n2.startsWith(`#`), i2 = typeof n2 == `string` ? r2 ? document.getElementById(n2.slice(1)) : document.querySelector(n2) : n2;
    if (!i2) return;
    t2 = we(i2, e2);
  } else t2 = e2;
  `scrollBehavior` in document.documentElement.style ? window.scrollTo(t2) : window.scrollTo(t2.left == null ? window.scrollX : t2.left, t2.top == null ? window.scrollY : t2.top);
}
function Ee(e2, t2) {
  return (history.state ? history.state.position - t2 : -1) + e2;
}
var De = /* @__PURE__ */ new Map();
function Oe(e2, t2) {
  De.set(e2, t2);
}
function ke(e2) {
  let t2 = De.get(e2);
  return De.delete(e2), t2;
}
function Ae(e2) {
  return typeof e2 == `string` || e2 && typeof e2 == `object`;
}
function je(e2) {
  return typeof e2 == `string` || typeof e2 == `symbol`;
}
function Me(e2) {
  let t2 = {};
  if (e2 === `` || e2 === `?`) return t2;
  let n2 = (e2[0] === `?` ? e2.slice(1) : e2).split(`&`);
  for (let e3 = 0; e3 < n2.length; ++e3) {
    let r2 = n2[e3].replace(le, ` `), i2 = r2.indexOf(`=`), a2 = B(i2 < 0 ? r2 : r2.slice(0, i2)), o2 = i2 < 0 ? null : B(r2.slice(i2 + 1));
    if (a2 in t2) {
      let e4 = t2[a2];
      y(e4) || (e4 = t2[a2] = [e4]), e4.push(o2);
    } else t2[a2] = o2;
  }
  return t2;
}
function Ne(e2) {
  let t2 = ``;
  for (let n2 in e2) {
    let r2 = e2[n2];
    if (n2 = fe(n2), r2 == null) {
      r2 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2);
      continue;
    }
    (y(r2) ? r2.map((e3) => e3 && R(e3)) : [r2 && R(r2)]).forEach((e3) => {
      e3 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2, e3 != null && (t2 += `=` + e3));
    });
  }
  return t2;
}
function Pe(e2) {
  let t2 = {};
  for (let n2 in e2) {
    let r2 = e2[n2];
    r2 !== void 0 && (t2[n2] = y(r2) ? r2.map((e3) => e3 == null ? null : `` + e3) : r2 == null ? r2 : `` + r2);
  }
  return t2;
}
function Y() {
  let e2 = [];
  function t2(t3) {
    return e2.push(t3), () => {
      let n3 = e2.indexOf(t3);
      n3 > -1 && e2.splice(n3, 1);
    };
  }
  function n2() {
    e2 = [];
  }
  return { add: t2, list: () => e2.slice(), reset: n2 };
}
function Fe(e2, t2, n2) {
  let r2 = e2.value;
  if (!r2) return;
  let a2 = r2, o2 = () => {
    a2[t2].delete(n2);
  };
  i(o2), u(o2), l(() => {
    let r3 = e2.value;
    r3 && (a2 = r3), a2[t2].add(n2);
  }), a2[t2].add(n2);
}
function Ie(e2) {
  Fe(n(ie, {}), `leaveGuards`, e2);
}
function X(e2, t2, n2, r2, i2, a2 = (e3) => e3()) {
  let o2 = r2 && (r2.enterCallbacks[i2] = r2.enterCallbacks[i2] || []);
  return () => new Promise((s2, c2) => {
    let l2 = (e3) => {
      e3 === false ? c2(x(b.NAVIGATION_ABORTED, { from: n2, to: t2 })) : e3 instanceof Error ? c2(e3) : Ae(e3) ? c2(x(b.NAVIGATION_GUARD_REDIRECT, { from: t2, to: e3 })) : (o2 && r2.enterCallbacks[i2] === o2 && typeof e3 == `function` && o2.push(e3), s2());
    }, u2 = a2(() => e2.call(r2 && r2.instances[i2], t2, n2, l2)), d2 = Promise.resolve(u2);
    e2.length < 3 && (d2 = d2.then(l2)), d2.catch((e3) => c2(e3));
  });
}
function Le(e2, t2, n2, r2, i2 = (e3) => e3()) {
  let a2 = [];
  for (let o2 of e2) for (let e3 in o2.components) {
    let s2 = o2.components[e3];
    if (!(t2 !== `beforeRouteEnter` && !o2.instances[e3])) if (h(s2)) {
      let c2 = (s2.__vccOpts || s2)[t2];
      c2 && a2.push(X(c2, n2, r2, o2, e3, i2));
    } else {
      let c2 = s2();
      a2.push(() => c2.then((a3) => {
        if (!a3) throw Error(`Couldn't resolve component "${e3}" at "${o2.path}"`);
        let s3 = te(a3) ? a3.default : a3;
        o2.mods[e3] = a3, o2.components[e3] = s3;
        let c3 = (s3.__vccOpts || s3)[t2];
        return c3 && X(c3, n2, r2, o2, e3, i2)();
      }));
    }
  }
  return a2;
}
function Re(e2, t2) {
  let n2 = [], r2 = [], i2 = [], a2 = Math.max(t2.matched.length, e2.matched.length);
  for (let o2 = 0; o2 < a2; o2++) {
    let a3 = t2.matched[o2];
    a3 && (e2.matched.find((e3) => W(e3, a3)) ? r2.push(a3) : n2.push(a3));
    let s2 = e2.matched[o2];
    s2 && (t2.matched.find((e3) => W(e3, s2)) || i2.push(s2));
  }
  return [n2, r2, i2];
}
var ze = () => location.protocol + `//` + location.host;
function Be(e2, t2) {
  let { pathname: n2, search: r2, hash: i2 } = t2, a2 = e2.indexOf(`#`);
  if (a2 > -1) {
    let t3 = i2.includes(e2.slice(a2)) ? e2.slice(a2).length : 1, n3 = i2.slice(t3);
    return n3[0] !== `/` && (n3 = `/` + n3), U(n3, ``);
  }
  return U(n2, e2) + r2 + i2;
}
function Ve(e2, t2, n2, r2) {
  let i2 = [], a2 = [], o2 = null, s2 = ({ state: a3 }) => {
    let s3 = Be(e2, location), c3 = n2.value, l3 = t2.value, u3 = 0;
    if (a3) {
      if (n2.value = s3, t2.value = a3, o2 && o2 === c3) {
        o2 = null;
        return;
      }
      u3 = l3 ? a3.position - l3.position : 0;
    } else r2(s3);
    i2.forEach((e3) => {
      e3(n2.value, c3, { delta: u3, type: ye.pop, direction: u3 ? u3 > 0 ? be.forward : be.back : be.unknown });
    });
  };
  function c2() {
    o2 = n2.value;
  }
  function l2(e3) {
    i2.push(e3);
    let t3 = () => {
      let t4 = i2.indexOf(e3);
      t4 > -1 && i2.splice(t4, 1);
    };
    return a2.push(t3), t3;
  }
  function u2() {
    if (document.visibilityState === `hidden`) {
      let { history: e3 } = window;
      if (!e3.state) return;
      e3.replaceState(g({}, e3.state, { scroll: J() }), ``);
    }
  }
  function d2() {
    for (let e3 of a2) e3();
    a2 = [], window.removeEventListener(`popstate`, s2), window.removeEventListener(`pagehide`, u2), document.removeEventListener(`visibilitychange`, u2);
  }
  return window.addEventListener(`popstate`, s2), window.addEventListener(`pagehide`, u2), document.addEventListener(`visibilitychange`, u2), { pauseListeners: c2, listen: l2, destroy: d2 };
}
function He(e2, t2, n2, r2 = false, i2 = false) {
  return { back: e2, current: t2, forward: n2, replaced: r2, position: window.history.length, scroll: i2 ? J() : null };
}
function Ue(e2) {
  let { history: t2, location: n2 } = window, r2 = { value: Be(e2, n2) }, i2 = { value: t2.state };
  i2.value || a2(r2.value, { back: null, current: r2.value, forward: null, position: t2.length - 1, replaced: true, scroll: null }, true);
  function a2(r3, a3, o3) {
    let s3 = e2.indexOf(`#`), c2 = s3 > -1 ? (n2.host && document.querySelector(`base`) ? e2 : e2.slice(s3)) + r3 : ze() + e2 + r3;
    try {
      t2[o3 ? `replaceState` : `pushState`](a3, ``, c2), i2.value = a3;
    } catch (e3) {
      console.error(e3), n2[o3 ? `replace` : `assign`](c2);
    }
  }
  function o2(e3, n3) {
    a2(e3, g({}, t2.state, He(i2.value.back, e3, i2.value.forward, true), n3, { position: i2.value.position }), true), r2.value = e3;
  }
  function s2(e3, n3) {
    let o3 = g({}, i2.value, t2.state, { forward: e3, scroll: J() });
    a2(o3.current, o3, true), a2(e3, g({}, He(r2.value, e3, null), { position: o3.position + 1 }, n3), false), r2.value = e3;
  }
  return { location: r2, state: i2, push: s2, replace: o2 };
}
function We(e2) {
  e2 = xe(e2);
  let t2 = Ue(e2), n2 = Ve(e2, t2.state, t2.location, t2.replace);
  function r2(e3, t3 = true) {
    t3 || n2.pauseListeners(), history.go(e3);
  }
  let i2 = g({ location: ``, base: e2, go: r2, createHref: Ce.bind(null, e2) }, t2, n2);
  return Object.defineProperty(i2, `location`, { enumerable: true, get: () => t2.location.value }), Object.defineProperty(i2, `state`, { enumerable: true, get: () => t2.state.value }), i2;
}
var Z = (function(e2) {
  return e2[e2.Static = 0] = `Static`, e2[e2.Param = 1] = `Param`, e2[e2.Group = 2] = `Group`, e2;
})({}), Q = (function(e2) {
  return e2[e2.Static = 0] = `Static`, e2[e2.Param = 1] = `Param`, e2[e2.ParamRegExp = 2] = `ParamRegExp`, e2[e2.ParamRegExpEnd = 3] = `ParamRegExpEnd`, e2[e2.EscapeNext = 4] = `EscapeNext`, e2;
})(Q || {}), Ge = { type: Z.Static, value: `` }, Ke = /[a-zA-Z0-9_]/;
function qe(e2) {
  if (!e2) return [[]];
  if (e2 === `/`) return [[Ge]];
  if (!e2.startsWith(`/`)) throw Error(`Invalid path "${e2}"`);
  function t2(e3) {
    throw Error(`ERR (${n2})/"${l2}": ${e3}`);
  }
  let n2 = Q.Static, r2 = n2, i2 = [], a2;
  function o2() {
    a2 && i2.push(a2), a2 = [];
  }
  let s2 = 0, c2, l2 = ``, u2 = ``;
  function d2() {
    l2 && (l2 = (n2 === Q.Static ? a2.push({ type: Z.Static, value: l2 }) : n2 === Q.Param || n2 === Q.ParamRegExp || n2 === Q.ParamRegExpEnd ? (a2.length > 1 && (c2 === `*` || c2 === `+`) && t2(`A repeatable param (${l2}) must be alone in its segment. eg: '/:ids+.`), a2.push({ type: Z.Param, value: l2, regexp: u2, repeatable: c2 === `*` || c2 === `+`, optional: c2 === `*` || c2 === `?` })) : t2(`Invalid state to consume buffer`), ``));
  }
  function f2() {
    l2 += c2;
  }
  for (; s2 < e2.length; ) {
    if (c2 = e2[s2++], c2 === `\\` && n2 !== Q.ParamRegExp) {
      r2 = n2, n2 = Q.EscapeNext;
      continue;
    }
    switch (n2) {
      case Q.Static:
        c2 === `/` ? (l2 && d2(), o2()) : c2 === `:` ? (d2(), n2 = Q.Param) : f2();
        break;
      case Q.EscapeNext:
        f2(), n2 = r2;
        break;
      case Q.Param:
        c2 === `(` ? n2 = Q.ParamRegExp : Ke.test(c2) ? f2() : (d2(), n2 = Q.Static, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--);
        break;
      case Q.ParamRegExp:
        c2 === `)` ? u2[u2.length - 1] == `\\` ? u2 = u2.slice(0, -1) + c2 : n2 = Q.ParamRegExpEnd : u2 += c2;
        break;
      case Q.ParamRegExpEnd:
        d2(), n2 = Q.Static, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--, u2 = ``;
        break;
      default:
        t2(`Unknown state`);
        break;
    }
  }
  return n2 === Q.ParamRegExp && t2(`Unfinished custom RegExp for param "${l2}"`), d2(), o2(), i2;
}
var Je = `[^/]+?`, Ye = { sensitive: false, strict: false, start: true, end: true }, $ = (function(e2) {
  return e2[e2._multiplier = 10] = `_multiplier`, e2[e2.Root = 90] = `Root`, e2[e2.Segment = 40] = `Segment`, e2[e2.SubSegment = 30] = `SubSegment`, e2[e2.Static = 40] = `Static`, e2[e2.Dynamic = 20] = `Dynamic`, e2[e2.BonusCustomRegExp = 10] = `BonusCustomRegExp`, e2[e2.BonusWildcard = -50] = `BonusWildcard`, e2[e2.BonusRepeatable = -20] = `BonusRepeatable`, e2[e2.BonusOptional = -8] = `BonusOptional`, e2[e2.BonusStrict = 0.7000000000000001] = `BonusStrict`, e2[e2.BonusCaseSensitive = 0.25] = `BonusCaseSensitive`, e2;
})($ || {}), Xe = /[.+*?^${}()[\]/\\]/g;
function Ze(e2, t2) {
  let n2 = g({}, Ye, t2), r2 = [], i2 = n2.start ? `^` : ``, a2 = [];
  for (let t3 of e2) {
    let e3 = t3.length ? [] : [$.Root];
    n2.strict && !t3.length && (i2 += `/`);
    for (let r3 = 0; r3 < t3.length; r3++) {
      let o3 = t3[r3], s3 = $.Segment + (n2.sensitive ? $.BonusCaseSensitive : 0);
      if (o3.type === Z.Static) r3 || (i2 += `/`), i2 += o3.value.replace(Xe, `\\$&`), s3 += $.Static;
      else if (o3.type === Z.Param) {
        let { value: e4, repeatable: n3, optional: c3, regexp: l2 } = o3;
        a2.push({ name: e4, repeatable: n3, optional: c3 });
        let u2 = l2 || Je;
        if (u2 !== Je) {
          s3 += $.BonusCustomRegExp;
          try {
            RegExp(`(${u2})`);
          } catch (t4) {
            throw Error(`Invalid custom RegExp for param "${e4}" (${u2}): ` + t4.message);
          }
        }
        let d2 = n3 ? `((?:${u2})(?:/(?:${u2}))*)` : `(${u2})`;
        r3 || (d2 = c3 && t3.length < 2 ? `(?:/${d2})` : `/` + d2), c3 && (d2 += `?`), i2 += d2, s3 += $.Dynamic, c3 && (s3 += $.BonusOptional), n3 && (s3 += $.BonusRepeatable), u2 === `.*` && (s3 += $.BonusWildcard);
      }
      e3.push(s3);
    }
    r2.push(e3);
  }
  if (n2.strict && n2.end) {
    let e3 = r2.length - 1;
    r2[e3][r2[e3].length - 1] += $.BonusStrict;
  }
  n2.strict || (i2 += `/?`), n2.end ? i2 += `$` : n2.strict && !i2.endsWith(`/`) && (i2 += `(?:/|$)`);
  let o2 = new RegExp(i2, n2.sensitive ? `` : `i`);
  function s2(e3) {
    let t3 = e3.match(o2), n3 = {};
    if (!t3) return null;
    for (let e4 = 1; e4 < t3.length; e4++) {
      let r3 = t3[e4] || ``, i3 = a2[e4 - 1];
      n3[i3.name] = r3 && i3.repeatable ? r3.split(`/`) : r3;
    }
    return n3;
  }
  function c2(t3) {
    let n3 = ``, r3 = false;
    for (let i3 of e2) {
      (!r3 || !n3.endsWith(`/`)) && (n3 += `/`), r3 = false;
      for (let e3 of i3) if (e3.type === Z.Static) n3 += e3.value;
      else if (e3.type === Z.Param) {
        let { value: a3, repeatable: o3, optional: s3 } = e3, c3 = a3 in t3 ? t3[a3] : ``;
        if (y(c3) && !o3) throw Error(`Provided param "${a3}" is an array but it is not repeatable (* or + modifiers)`);
        let l2 = y(c3) ? c3.join(`/`) : c3;
        if (!l2) if (s3) i3.length < 2 && (n3.endsWith(`/`) ? n3 = n3.slice(0, -1) : r3 = true);
        else throw Error(`Missing required param "${a3}"`);
        n3 += l2;
      }
    }
    return n3 || `/`;
  }
  return { re: o2, score: r2, keys: a2, parse: s2, stringify: c2 };
}
function Qe(e2, t2) {
  let n2 = 0;
  for (; n2 < e2.length && n2 < t2.length; ) {
    let r2 = t2[n2] - e2[n2];
    if (r2) return r2;
    n2++;
  }
  return e2.length < t2.length ? e2.length === 1 && e2[0] === $.Static + $.Segment ? -1 : 1 : e2.length > t2.length ? t2.length === 1 && t2[0] === $.Static + $.Segment ? 1 : -1 : 0;
}
function $e(e2, t2) {
  let n2 = 0, r2 = e2.score, i2 = t2.score;
  for (; n2 < r2.length && n2 < i2.length; ) {
    let e3 = Qe(r2[n2], i2[n2]);
    if (e3) return e3;
    n2++;
  }
  if (Math.abs(i2.length - r2.length) === 1) {
    if (et(r2)) return 1;
    if (et(i2)) return -1;
  }
  return i2.length - r2.length;
}
function et(e2) {
  let t2 = e2[e2.length - 1];
  return e2.length > 0 && t2[t2.length - 1] < 0;
}
var tt = { strict: false, end: true, sensitive: false };
function nt(e2, t2, n2) {
  let r2 = g(Ze(qe(e2.path), n2), { record: e2, parent: t2, children: [], alias: [] });
  return t2 && !r2.record.aliasOf == !t2.record.aliasOf && t2.children.push(r2), r2;
}
function rt(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Map();
  t2 = ne(tt, t2);
  function i2(e3) {
    return r2.get(e3);
  }
  function a2(e3, n3, r3) {
    let i3 = !r3, s3 = at(e3);
    s3.aliasOf = r3 && r3.record;
    let l3 = ne(t2, e3), u3 = [s3];
    if (`alias` in e3) {
      let t3 = typeof e3.alias == `string` ? [e3.alias] : e3.alias;
      for (let e4 of t3) u3.push(at(g({}, s3, { components: r3 ? r3.record.components : s3.components, path: e4, aliasOf: r3 ? r3.record : s3 })));
    }
    let d2, f2;
    for (let t3 of u3) {
      let { path: u4 } = t3;
      if (n3 && u4[0] !== `/`) {
        let e4 = n3.record.path, r4 = e4[e4.length - 1] === `/` ? `` : `/`;
        t3.path = n3.record.path + (u4 && r4 + u4);
      }
      if (d2 = nt(t3, n3, l3), r3 ? r3.alias.push(d2) : (f2 || (f2 = d2), f2 !== d2 && f2.alias.push(d2), i3 && e3.name && !st(d2) && o2(e3.name)), dt(d2) && c2(d2), s3.children) {
        let e4 = s3.children;
        for (let t4 = 0; t4 < e4.length; t4++) a2(e4[t4], d2, r3 && r3.children[t4]);
      }
      r3 || (r3 = d2);
    }
    return f2 ? () => {
      o2(f2);
    } : v;
  }
  function o2(e3) {
    if (je(e3)) {
      let t3 = r2.get(e3);
      t3 && (r2.delete(e3), n2.splice(n2.indexOf(t3), 1), t3.children.forEach(o2), t3.alias.forEach(o2));
    } else {
      let t3 = n2.indexOf(e3);
      t3 > -1 && (n2.splice(t3, 1), e3.record.name && r2.delete(e3.record.name), e3.children.forEach(o2), e3.alias.forEach(o2));
    }
  }
  function s2() {
    return n2;
  }
  function c2(e3) {
    let t3 = lt(e3, n2);
    n2.splice(t3, 0, e3), e3.record.name && !st(e3) && r2.set(e3.record.name, e3);
  }
  function l2(e3, t3) {
    let i3, a3 = {}, o3, s3;
    if (`name` in e3 && e3.name) {
      if (i3 = r2.get(e3.name), !i3) throw x(b.MATCHER_NOT_FOUND, { location: e3 });
      s3 = i3.record.name, a3 = g(it(t3.params, i3.keys.filter((e4) => !e4.optional).concat(i3.parent ? i3.parent.keys.filter((e4) => e4.optional) : []).map((e4) => e4.name)), e3.params && it(e3.params, i3.keys.map((e4) => e4.name))), o3 = i3.stringify(a3);
    } else if (e3.path != null) o3 = e3.path, i3 = n2.find((e4) => e4.re.test(o3)), i3 && (a3 = i3.parse(o3), s3 = i3.record.name);
    else {
      if (i3 = t3.name ? r2.get(t3.name) : n2.find((e4) => e4.re.test(t3.path)), !i3) throw x(b.MATCHER_NOT_FOUND, { location: e3, currentLocation: t3 });
      s3 = i3.record.name, a3 = g({}, t3.params, e3.params), o3 = i3.stringify(a3);
    }
    let c3 = [], l3 = i3;
    for (; l3; ) c3.unshift(l3.record), l3 = l3.parent;
    return { name: s3, path: o3, params: a3, matched: c3, meta: ct(c3) };
  }
  e2.forEach((e3) => a2(e3));
  function u2() {
    n2.length = 0, r2.clear();
  }
  return { addRoute: a2, resolve: l2, removeRoute: o2, clearRoutes: u2, getRoutes: s2, getRecordMatcher: i2 };
}
function it(e2, t2) {
  let n2 = {};
  for (let r2 of t2) r2 in e2 && (n2[r2] = e2[r2]);
  return n2;
}
function at(e2) {
  let t2 = { path: e2.path, redirect: e2.redirect, name: e2.name, meta: e2.meta || {}, aliasOf: e2.aliasOf, beforeEnter: e2.beforeEnter, props: ot(e2), children: e2.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: `components` in e2 ? e2.components || null : e2.component && { default: e2.component } };
  return Object.defineProperty(t2, `mods`, { value: {} }), t2;
}
function ot(e2) {
  let t2 = {}, n2 = e2.props || false;
  if (`component` in e2) t2.default = n2;
  else for (let r2 in e2.components) t2[r2] = typeof n2 == `object` ? n2[r2] : n2;
  return t2;
}
function st(e2) {
  for (; e2; ) {
    if (e2.record.aliasOf) return true;
    e2 = e2.parent;
  }
  return false;
}
function ct(e2) {
  return e2.reduce((e3, t2) => g(e3, t2.meta), {});
}
function lt(e2, t2) {
  let n2 = 0, r2 = t2.length;
  for (; n2 !== r2; ) {
    let i3 = n2 + r2 >> 1;
    $e(e2, t2[i3]) < 0 ? r2 = i3 : n2 = i3 + 1;
  }
  let i2 = ut(e2);
  return i2 && (r2 = t2.lastIndexOf(i2, r2 - 1)), r2;
}
function ut(e2) {
  let t2 = e2;
  for (; t2 = t2.parent; ) if (dt(t2) && $e(e2, t2) === 0) return t2;
}
function dt({ record: e2 }) {
  return !!(e2.name || e2.components && Object.keys(e2.components).length || e2.redirect);
}
function ft(e2) {
  let t2 = n(C), i2 = n(w), o2 = a(() => {
    let n2 = r(e2.to);
    return t2.resolve(n2);
  }), s2 = a(() => {
    let { matched: e3 } = o2.value, { length: t3 } = e3, n2 = e3[t3 - 1], r2 = i2.matched;
    if (!n2 || !r2.length) return -1;
    let a2 = r2.findIndex(W.bind(null, n2));
    if (a2 > -1) return a2;
    let s3 = _t(e3[t3 - 2]);
    return t3 > 1 && _t(n2) === s3 && r2[r2.length - 1].path !== s3 ? r2.findIndex(W.bind(null, e3[t3 - 2])) : a2;
  }), c2 = a(() => s2.value > -1 && gt(i2.params, o2.value.params)), l2 = a(() => s2.value > -1 && s2.value === i2.matched.length - 1 && G(i2.params, o2.value.params));
  function u2(n2 = {}) {
    if (ht(n2)) {
      let n3 = t2[r(e2.replace) ? `replace` : `push`](r(e2.to)).catch(v);
      return e2.viewTransition && typeof document < `u` && `startViewTransition` in document && document.startViewTransition(() => n3), n3;
    }
    return Promise.resolve();
  }
  return { route: o2, href: a(() => o2.value.href), isActive: c2, isExactActive: l2, navigate: u2 };
}
function pt(e2) {
  return e2.length === 1 ? e2[0] : e2;
}
var mt = c({ name: `RouterLink`, compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: `page` }, viewTransition: Boolean }, useLink: ft, setup(t2, { slots: r2 }) {
  let i2 = o(ft(t2)), { options: s2 } = n(C), c2 = a(() => ({ [vt(t2.activeClass, s2.linkActiveClass, `router-link-active`)]: i2.isActive, [vt(t2.exactActiveClass, s2.linkExactActiveClass, `router-link-exact-active`)]: i2.isExactActive }));
  return () => {
    let n2 = r2.default && pt(r2.default(i2));
    return t2.custom ? n2 : e(`a`, { "aria-current": i2.isExactActive ? t2.ariaCurrentValue : null, href: i2.href, onClick: i2.navigate, class: c2.value }, n2);
  };
} });
function ht(e2) {
  if (!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey) && !e2.defaultPrevented && !(e2.button !== void 0 && e2.button !== 0)) {
    if (e2.currentTarget && e2.currentTarget.getAttribute) {
      let t2 = e2.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t2)) return;
    }
    return e2.preventDefault && e2.preventDefault(), true;
  }
}
function gt(e2, t2) {
  for (let n2 in t2) {
    let r2 = t2[n2], i2 = e2[n2];
    if (typeof r2 == `string`) {
      if (r2 !== i2) return false;
    } else if (!y(i2) || i2.length !== r2.length || r2.some((e3, t3) => e3.valueOf() !== i2[t3].valueOf())) return false;
  }
  return true;
}
function _t(e2) {
  return e2 ? e2.aliasOf ? e2.aliasOf.path : e2.path : ``;
}
var vt = (e2, t2, n2) => e2 ?? t2 ?? n2, yt = c({ name: `RouterView`, inheritAttrs: false, props: { name: { type: String, default: `default` }, route: Object }, compatConfig: { MODE: 3 }, setup(i2, { attrs: o2, slots: c2 }) {
  let l2 = n(oe), u2 = a(() => i2.route || l2.value), d2 = n(ae, 0), ee2 = a(() => {
    let e2 = r(d2), { matched: t2 } = u2.value, n2;
    for (; (n2 = t2[e2]) && !n2.components; ) e2++;
    return e2;
  }), p2 = a(() => u2.value.matched[ee2.value]);
  s(ae, a(() => ee2.value + 1)), s(ie, p2), s(oe, u2);
  let m2 = f();
  return t(() => [m2.value, p2.value, i2.name], ([e2, t2, n2], [r2, i3, a2]) => {
    t2 && (t2.instances[n2] = e2, i3 && i3 !== t2 && e2 && e2 === r2 && (t2.leaveGuards.size || (t2.leaveGuards = i3.leaveGuards), t2.updateGuards.size || (t2.updateGuards = i3.updateGuards))), e2 && t2 && (!i3 || !W(t2, i3) || !r2) && (t2.enterCallbacks[n2] || []).forEach((t3) => t3(e2));
  }, { flush: `post` }), () => {
    let t2 = u2.value, n2 = i2.name, r2 = p2.value, a2 = r2 && r2.components[n2];
    if (!a2) return bt(c2.default, { Component: a2, route: t2 });
    let s2 = r2.props[n2], l3 = e(a2, g({}, s2 ? s2 === true ? t2.params : typeof s2 == `function` ? s2(t2) : s2 : null, o2, { onVnodeUnmounted: (e2) => {
      e2.component.isUnmounted && (r2.instances[n2] = null);
    }, ref: m2 }));
    return bt(c2.default, { Component: l3, route: t2 }) || l3;
  };
} });
function bt(e2, t2) {
  if (!e2) return null;
  let n2 = e2(t2);
  return n2.length === 1 ? n2[0] : n2;
}
var xt = yt;
function St(e2) {
  let t2 = rt(e2.routes, e2), n2 = e2.parseQuery || Me, i2 = e2.stringifyQuery || Ne, a2 = e2.history, o2 = Y(), s2 = Y(), c2 = Y(), l2 = ee(q), u2 = q;
  m && e2.scrollBehavior && `scrollRestoration` in history && (history.scrollRestoration = `manual`);
  let f2 = _.bind(null, (e3) => `` + e3), h2 = _.bind(null, pe), te2 = _.bind(null, B);
  function ne2(e3, n3) {
    let r2, i3;
    return je(e3) ? (r2 = t2.getRecordMatcher(e3), i3 = n3) : i3 = e3, t2.addRoute(i3, r2);
  }
  function re2(e3) {
    let n3 = t2.getRecordMatcher(e3);
    n3 && t2.removeRoute(n3);
  }
  function ie2() {
    return t2.getRoutes().map((e3) => e3.record);
  }
  function ae2(e3) {
    return !!t2.getRecordMatcher(e3);
  }
  function T2(e3, r2) {
    if (r2 = g({}, r2 || l2.value), typeof e3 == `string`) {
      let i3 = me(n2, e3, r2.path), o4 = t2.resolve({ path: i3.path }, r2), s4 = a2.createHref(i3.fullPath);
      return g(i3, o4, { params: te2(o4.params), redirectedFrom: void 0, href: s4 });
    }
    let o3;
    if (e3.path != null) o3 = g({}, e3, { path: me(n2, e3.path, r2.path).path });
    else {
      let t3 = g({}, e3.params);
      for (let e4 in t3) t3[e4] ?? delete t3[e4];
      o3 = g({}, e3, { params: h2(t3) }), r2.params = h2(r2.params);
    }
    let s3 = t2.resolve(o3, r2), c3 = e3.hash || ``;
    s3.params = f2(te2(s3.params));
    let u3 = he(i2, g({}, e3, { hash: de(c3), path: s3.path })), d2 = a2.createHref(u3);
    return g({ fullPath: u3, hash: c3, query: i2 === Ne ? Pe(e3.query) : e3.query || {} }, s3, { redirectedFrom: void 0, href: d2 });
  }
  function E2(e3) {
    return typeof e3 == `string` ? me(n2, e3, l2.value.path) : g({}, e3);
  }
  function D2(e3, t3) {
    if (u2 !== e3) return x(b.NAVIGATION_CANCELLED, { from: t3, to: e3 });
  }
  function O2(e3) {
    return k2(e3);
  }
  function se2(e3) {
    return O2(g(E2(e3), { replace: true }));
  }
  function ce2(e3, t3) {
    let n3 = e3.matched[e3.matched.length - 1];
    if (n3 && n3.redirect) {
      let { redirect: r2 } = n3, i3 = typeof r2 == `function` ? r2(e3, t3) : r2;
      return typeof i3 == `string` && (i3 = i3.includes(`?`) || i3.includes(`#`) ? i3 = E2(i3) : { path: i3 }, i3.params = {}), g({ query: e3.query, hash: e3.hash, params: i3.path == null ? e3.params : {} }, i3);
    }
  }
  function k2(e3, t3) {
    let n3 = u2 = T2(e3), r2 = l2.value, a3 = e3.state, o3 = e3.force, s3 = e3.replace === true, c3 = ce2(n3, r2);
    if (c3) return k2(g(E2(c3), { state: typeof c3 == `object` ? g({}, a3, c3.state) : a3, force: o3, replace: s3 }), t3 || n3);
    let d2 = n3;
    d2.redirectedFrom = t3;
    let f3;
    return !o3 && ge(i2, r2, n3) && (f3 = x(b.NAVIGATION_DUPLICATED, { to: d2, from: r2 }), V2(r2, r2, true, false)), (f3 ? Promise.resolve(f3) : j2(d2, r2)).catch((e4) => S(e4) ? S(e4, b.NAVIGATION_GUARD_REDIRECT) ? e4 : z2(e4) : R2(e4, d2, r2)).then((e4) => {
      if (e4) {
        if (S(e4, b.NAVIGATION_GUARD_REDIRECT)) return k2(g({ replace: s3 }, E2(e4.to), { state: typeof e4.to == `object` ? g({}, a3, e4.to.state) : a3, force: o3 }), t3 || d2);
      } else e4 = N2(d2, r2, true, s3, a3);
      return M2(d2, r2, e4), e4;
    });
  }
  function le2(e3, t3) {
    let n3 = D2(e3, t3);
    return n3 ? Promise.reject(n3) : Promise.resolve();
  }
  function A2(e3) {
    let t3 = W2.values().next().value;
    return t3 && typeof t3.runWithContext == `function` ? t3.runWithContext(e3) : e3();
  }
  function j2(e3, t3) {
    let n3, [r2, i3, a3] = Re(e3, t3);
    n3 = Le(r2.reverse(), `beforeRouteLeave`, e3, t3);
    for (let i4 of r2) i4.leaveGuards.forEach((r3) => {
      n3.push(X(r3, e3, t3));
    });
    let c3 = le2.bind(null, e3, t3);
    return n3.push(c3), K2(n3).then(() => {
      n3 = [];
      for (let r3 of o2.list()) n3.push(X(r3, e3, t3));
      return n3.push(c3), K2(n3);
    }).then(() => {
      n3 = Le(i3, `beforeRouteUpdate`, e3, t3);
      for (let r3 of i3) r3.updateGuards.forEach((r4) => {
        n3.push(X(r4, e3, t3));
      });
      return n3.push(c3), K2(n3);
    }).then(() => {
      n3 = [];
      for (let r3 of a3) if (r3.beforeEnter) if (y(r3.beforeEnter)) for (let i4 of r3.beforeEnter) n3.push(X(i4, e3, t3));
      else n3.push(X(r3.beforeEnter, e3, t3));
      return n3.push(c3), K2(n3);
    }).then(() => (e3.matched.forEach((e4) => e4.enterCallbacks = {}), n3 = Le(a3, `beforeRouteEnter`, e3, t3, A2), n3.push(c3), K2(n3))).then(() => {
      n3 = [];
      for (let r3 of s2.list()) n3.push(X(r3, e3, t3));
      return n3.push(c3), K2(n3);
    }).catch((e4) => S(e4, b.NAVIGATION_CANCELLED) ? e4 : Promise.reject(e4));
  }
  function M2(e3, t3, n3) {
    c2.list().forEach((r2) => A2(() => r2(e3, t3, n3)));
  }
  function N2(e3, t3, n3, r2, i3) {
    let o3 = D2(e3, t3);
    if (o3) return o3;
    let s3 = t3 === q, c3 = m ? history.state : {};
    n3 && (r2 || s3 ? a2.replace(e3.fullPath, g({ scroll: s3 && c3 && c3.scroll }, i3)) : a2.push(e3.fullPath, i3)), l2.value = e3, V2(e3, t3, n3, s3), z2();
  }
  let P2;
  function ue2() {
    P2 || (P2 = a2.listen((e3, t3, n3) => {
      if (!G2.listening) return;
      let r2 = T2(e3), i3 = ce2(r2, G2.currentRoute.value);
      if (i3) {
        k2(g(i3, { replace: true, force: true }), r2).catch(v);
        return;
      }
      u2 = r2;
      let o3 = l2.value;
      m && Oe(Ee(o3.fullPath, n3.delta), J()), j2(r2, o3).catch((e4) => S(e4, b.NAVIGATION_ABORTED | b.NAVIGATION_CANCELLED) ? e4 : S(e4, b.NAVIGATION_GUARD_REDIRECT) ? (k2(g(E2(e4.to), { force: true }), r2).then((e5) => {
        S(e5, b.NAVIGATION_ABORTED | b.NAVIGATION_DUPLICATED) && !n3.delta && n3.type === ye.pop && a2.go(-1, false);
      }).catch(v), Promise.reject()) : (n3.delta && a2.go(-n3.delta, false), R2(e4, r2, o3))).then((e4) => {
        e4 || (e4 = N2(r2, o3, false)), e4 && (n3.delta && !S(e4, b.NAVIGATION_CANCELLED) ? a2.go(-n3.delta, false) : n3.type === ye.pop && S(e4, b.NAVIGATION_ABORTED | b.NAVIGATION_DUPLICATED) && a2.go(-1, false)), M2(r2, o3, e4);
      }).catch(v);
    }));
  }
  let F2 = Y(), I2 = Y(), L2;
  function R2(e3, t3, n3) {
    z2(e3);
    let r2 = I2.list();
    return r2.length ? r2.forEach((r3) => r3(e3, t3, n3)) : console.error(e3), Promise.reject(e3);
  }
  function fe2() {
    return L2 && l2.value !== q ? Promise.resolve() : new Promise((e3, t3) => {
      F2.add([e3, t3]);
    });
  }
  function z2(e3) {
    return L2 || (L2 = !e3, ue2(), F2.list().forEach(([t3, n3]) => e3 ? n3(e3) : t3()), F2.reset()), e3;
  }
  function V2(t3, n3, r2, i3) {
    let { scrollBehavior: a3 } = e2;
    if (!m || !a3) return Promise.resolve();
    let o3 = !r2 && ke(Ee(t3.fullPath, 0)) || (i3 || !r2) && history.state && history.state.scroll || null;
    return d().then(() => a3(t3, n3, o3)).then((e3) => e3 && Te(e3)).catch((e3) => R2(e3, t3, n3));
  }
  let H2 = (e3) => a2.go(e3), U2, W2 = /* @__PURE__ */ new Set(), G2 = { currentRoute: l2, listening: true, addRoute: ne2, removeRoute: re2, clearRoutes: t2.clearRoutes, hasRoute: ae2, getRoutes: ie2, resolve: T2, options: e2, push: O2, replace: se2, go: H2, back: () => H2(-1), forward: () => H2(1), beforeEach: o2.add, beforeResolve: s2.add, afterEach: c2.add, onError: I2.add, isReady: fe2, install(e3) {
    e3.component(`RouterLink`, mt), e3.component(`RouterView`, xt), e3.config.globalProperties.$router = G2, Object.defineProperty(e3.config.globalProperties, `$route`, { enumerable: true, get: () => r(l2) }), m && !U2 && l2.value === q && (U2 = true, O2(a2.location).catch((e4) => {
    }));
    let t3 = {};
    for (let e4 in q) Object.defineProperty(t3, e4, { get: () => l2.value[e4], enumerable: true });
    e3.provide(C, G2), e3.provide(w, p(t3)), e3.provide(oe, l2);
    let n3 = e3.unmount;
    W2.add(e3), e3.unmount = function() {
      W2.delete(e3), W2.size < 1 && (u2 = q, P2 && P2(), P2 = null, l2.value = q, U2 = false, L2 = false), n3();
    };
  } };
  function K2(e3) {
    return e3.reduce((e4, t3) => e4.then(() => A2(t3)), Promise.resolve());
  }
  return G2;
}
export {
  E as a,
  Ie as i,
  St as n,
  T as o,
  We as r,
  mt as t
};
