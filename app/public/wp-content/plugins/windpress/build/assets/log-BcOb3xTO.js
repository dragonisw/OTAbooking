import { n as e, t } from "./dist-CFDaZ429.js";
import { Cn as n, H as r, Ht as i, J as a, Tn as o, an as s, cn as c, fn as l, g as u, gn as d, in as f, pn as p, tt as m, un as h, vn as g } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { y as _ } from "./dist-BY3QSpe-.js";
import { n as v } from "./index.browser-DTH_RVqO.js";
e();
var y = typeof window < `u`, b, x = (e2) => b = e2, S = /* @__PURE__ */ Symbol();
function C(e2) {
  return e2 && typeof e2 == `object` && Object.prototype.toString.call(e2) === `[object Object]` && typeof e2.toJSON != `function`;
}
var w;
(function(e2) {
  e2.direct = `direct`, e2.patchObject = `patch object`, e2.patchFunction = `patch function`;
})(w || (w = {}));
var T = typeof window == `object` && window.window === window ? window : typeof self == `object` && self.self === self ? self : typeof t == `object` && t.global === t ? t : typeof globalThis == `object` ? globalThis : { HTMLElement: null };
function E(e2, { autoBom: t2 = false } = {}) {
  return t2 && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e2.type) ? new Blob([`\uFEFF`, e2], { type: e2.type }) : e2;
}
function D(e2, t2, n2) {
  let r2 = new XMLHttpRequest();
  r2.open(`GET`, e2), r2.responseType = `blob`, r2.onload = function() {
    M(r2.response, t2, n2);
  }, r2.onerror = function() {
    console.error(`could not download file`);
  }, r2.send();
}
function O(e2) {
  let t2 = new XMLHttpRequest();
  t2.open(`HEAD`, e2, false);
  try {
    t2.send();
  } catch {
  }
  return t2.status >= 200 && t2.status <= 299;
}
function k(e2) {
  try {
    e2.dispatchEvent(new MouseEvent(`click`));
  } catch {
    let t2 = new MouseEvent(`click`, { bubbles: true, cancelable: true, view: window, detail: 0, screenX: 80, screenY: 20, clientX: 80, clientY: 20, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null });
    e2.dispatchEvent(t2);
  }
}
var A = typeof navigator == `object` ? navigator : { userAgent: `` }, j = /Macintosh/.test(A.userAgent) && /AppleWebKit/.test(A.userAgent) && !/Safari/.test(A.userAgent), M = y ? typeof HTMLAnchorElement < `u` && `download` in HTMLAnchorElement.prototype && !j ? N : `msSaveOrOpenBlob` in A ? P : F : () => {
};
function N(e2, t2 = `download`, n2) {
  let r2 = document.createElement(`a`);
  r2.download = t2, r2.rel = `noopener`, typeof e2 == `string` ? (r2.href = e2, r2.origin === location.origin ? k(r2) : O(r2.href) ? D(e2, t2, n2) : (r2.target = `_blank`, k(r2))) : (r2.href = URL.createObjectURL(e2), setTimeout(function() {
    URL.revokeObjectURL(r2.href);
  }, 4e4), setTimeout(function() {
    k(r2);
  }, 0));
}
function P(e2, t2 = `download`, n2) {
  if (typeof e2 == `string`) if (O(e2)) D(e2, t2, n2);
  else {
    let t3 = document.createElement(`a`);
    t3.href = e2, t3.target = `_blank`, setTimeout(function() {
      k(t3);
    });
  }
  else navigator.msSaveOrOpenBlob(E(e2, n2), t2);
}
function F(e2, t2, n2, r2) {
  if (r2 || (r2 = open(``, `_blank`)), r2 && (r2.document.title = r2.document.body.innerText = `downloading...`), typeof e2 == `string`) return D(e2, t2, n2);
  let i2 = e2.type === `application/octet-stream`, a2 = /constructor/i.test(String(T.HTMLElement)) || `safari` in T, o2 = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((o2 || i2 && a2 || j) && typeof FileReader < `u`) {
    let t3 = new FileReader();
    t3.onloadend = function() {
      let e3 = t3.result;
      if (typeof e3 != `string`) throw r2 = null, Error(`Wrong reader.result type`);
      e3 = o2 ? e3 : e3.replace(/^data:[^;]*;/, `data:attachment/file;`), r2 ? r2.location.href = e3 : location.assign(e3), r2 = null;
    }, t3.readAsDataURL(e2);
  } else {
    let t3 = URL.createObjectURL(e2);
    r2 ? r2.location.assign(t3) : location.href = t3, r2 = null, setTimeout(function() {
      URL.revokeObjectURL(t3);
    }, 4e4);
  }
}
var { assign: I } = Object;
function L() {
  let e2 = f(true), t2 = e2.run(() => g({})), n2 = [], r2 = [], i2 = l({ install(e3) {
    x(i2), i2._a = e3, e3.provide(S, i2), e3.config.globalProperties.$pinia = i2, r2.forEach((e4) => n2.push(e4)), r2 = [];
  }, use(e3) {
    return this._a ? n2.push(e3) : r2.push(e3), this;
  }, _p: n2, _a: null, _e: e2, _s: /* @__PURE__ */ new Map(), state: t2 });
  return i2;
}
var R = () => {
};
function z(e2, t2, n2, r2 = R) {
  e2.add(t2);
  let i2 = () => {
    e2.delete(t2) && r2();
  };
  return !n2 && s() && p(i2), i2;
}
function B(e2, ...t2) {
  e2.forEach((e3) => {
    e3(...t2);
  });
}
var V = (e2) => e2(), H = /* @__PURE__ */ Symbol(), U = /* @__PURE__ */ Symbol();
function W(e2, t2) {
  e2 instanceof Map && t2 instanceof Map ? t2.forEach((t3, n2) => e2.set(n2, t3)) : e2 instanceof Set && t2 instanceof Set && t2.forEach(e2.add, e2);
  for (let n2 in t2) {
    if (!t2.hasOwnProperty(n2)) continue;
    let r2 = t2[n2], i2 = e2[n2];
    C(i2) && C(r2) && e2.hasOwnProperty(n2) && !h(r2) && !c(r2) ? e2[n2] = W(i2, r2) : e2[n2] = r2;
  }
  return e2;
}
var G = /* @__PURE__ */ Symbol();
function K(e2) {
  return !C(e2) || !Object.prototype.hasOwnProperty.call(e2, G);
}
var { assign: q } = Object;
function J(e2) {
  return !!(h(e2) && e2.effect);
}
function Y(e2, t2, n2, r2) {
  let { state: i2, actions: a2, getters: s2 } = t2, c2 = n2.state.value[e2], d2;
  function f2() {
    return c2 || (n2.state.value[e2] = i2 ? i2() : {}), q(o(n2.state.value[e2]), a2, Object.keys(s2 || {}).reduce((t3, r3) => (t3[r3] = l(u(() => {
      x(n2);
      let t4 = n2._s.get(e2);
      return s2[r3].call(t4, t4);
    })), t3), {}));
  }
  return d2 = X(e2, f2, t2, n2, r2, true), d2;
}
function X(e2, t2, r2 = {}, a2, o2, s2) {
  let l2, u2 = q({ actions: {} }, r2), p2 = { deep: true }, _2, v2, y2 = /* @__PURE__ */ new Set(), b2 = /* @__PURE__ */ new Set(), S2 = a2.state.value[e2];
  !s2 && !S2 && (a2.state.value[e2] = {}), g({});
  let C2;
  function T2(t3) {
    let n2;
    _2 = v2 = false, typeof t3 == `function` ? (t3(a2.state.value[e2]), n2 = { type: w.patchFunction, storeId: e2, events: void 0 }) : (W(a2.state.value[e2], t3), n2 = { type: w.patchObject, payload: t3, storeId: e2, events: void 0 });
    let r3 = C2 = /* @__PURE__ */ Symbol();
    m().then(() => {
      C2 === r3 && (_2 = true);
    }), v2 = true, B(y2, n2, a2.state.value[e2]);
  }
  let E2 = s2 ? function() {
    let { state: e3 } = r2, t3 = e3 ? e3() : {};
    this.$patch((e4) => {
      q(e4, t3);
    });
  } : R;
  function D2() {
    l2.stop(), y2.clear(), b2.clear(), a2._s.delete(e2);
  }
  let O2 = (t3, n2 = ``) => {
    if (H in t3) return t3[U] = n2, t3;
    let r3 = function() {
      x(a2);
      let n3 = Array.from(arguments), i2 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set();
      function s3(e3) {
        i2.add(e3);
      }
      function c2(e3) {
        o3.add(e3);
      }
      B(b2, { args: n3, name: r3[U], store: k2, after: s3, onError: c2 });
      let l3;
      try {
        l3 = t3.apply(this && this.$id === e2 ? this : k2, n3);
      } catch (e3) {
        throw B(o3, e3), e3;
      }
      return l3 instanceof Promise ? l3.then((e3) => (B(i2, e3), e3)).catch((e3) => (B(o3, e3), Promise.reject(e3))) : (B(i2, l3), l3);
    };
    return r3[H] = true, r3[U] = n2, r3;
  }, k2 = d({ _p: a2, $id: e2, $onAction: z.bind(null, b2), $patch: T2, $reset: E2, $subscribe(t3, n2 = {}) {
    let r3 = z(y2, t3, n2.detached, () => o3()), o3 = l2.run(() => i(() => a2.state.value[e2], (r4) => {
      (n2.flush === `sync` ? v2 : _2) && t3({ storeId: e2, type: w.direct, events: void 0 }, r4);
    }, q({}, p2, n2)));
    return r3;
  }, $dispose: D2 });
  a2._s.set(e2, k2);
  let A2 = (a2._a && a2._a.runWithContext || V)(() => a2._e.run(() => (l2 = f()).run(() => t2({ action: O2 }))));
  for (let t3 in A2) {
    let n2 = A2[t3];
    h(n2) && !J(n2) || c(n2) ? s2 || (S2 && K(n2) && (h(n2) ? n2.value = S2[t3] : W(n2, S2[t3])), a2.state.value[e2][t3] = n2) : typeof n2 == `function` && (A2[t3] = O2(n2, t3), u2.actions[t3] = n2);
  }
  return q(k2, A2), q(n(k2), A2), Object.defineProperty(k2, `$state`, { get: () => a2.state.value[e2], set: (e3) => {
    T2((t3) => {
      q(t3, e3);
    });
  } }), a2._p.forEach((e3) => {
    q(k2, l2.run(() => e3({ store: k2, app: a2._a, pinia: a2, options: u2 })));
  }), S2 && s2 && r2.hydrate && r2.hydrate(k2.$state, S2), _2 = true, v2 = true, k2;
}
function Z(e2, t2, n2) {
  let i2, o2 = typeof t2 == `function`;
  i2 = o2 ? n2 : t2;
  function s2(n3, s3) {
    let c2 = r();
    return n3 || (n3 = c2 ? a(S, null) : null), n3 && x(n3), n3 = b, n3._s.has(e2) || (o2 ? X(e2, t2, i2, n3) : Y(e2, i2, n3)), n3._s.get(e2);
  }
  return s2.$id = e2, s2;
}
function Q() {
  let e2 = { id: `JqhEkI6VK0`, timestamp: 1742407548572, type: `debug`, message: `Thank you for using WindPress! Join us on the Facebook Group: <a href="https://wind.press/go/facebook" target="_blank" class="underline">https://wind.press/go/facebook</a>`, options: { raw: true } }, t2 = _(`windpress.dashboard.store.logs`, [e2]);
  function n2(e3) {
    let n3 = v(10);
    return t2.value.push({ id: n3, timestamp: Date.now(), ...e3 }), n3;
  }
  function r2(e3, n3) {
    let r3 = t2.value.find((t3) => t3.id === e3);
    r3 && Object.assign(r3, n3);
  }
  function i2(e3, n3 = `id`) {
    switch (n3) {
      case `message`:
        t2.value = t2.value.filter((t3) => !t3.message.includes(e3));
        break;
      case `type`:
        t2.value = t2.value.filter((t3) => t3.type !== e3);
        break;
      case `group`:
        t2.value = t2.value.filter((t3) => t3.group !== e3);
        break;
      default:
        t2.value = t2.value.filter((t3) => t3.id !== e3);
        break;
    }
  }
  function a2() {
    t2.value = [], t2.value.push(e2);
  }
  return { logs: t2, add: n2, update: r2, remove: i2, clear: a2 };
}
var $ = Z(`log`, () => ({ ...Q() }));
export {
  Z as i,
  $ as n,
  L as r,
  Q as t
};
