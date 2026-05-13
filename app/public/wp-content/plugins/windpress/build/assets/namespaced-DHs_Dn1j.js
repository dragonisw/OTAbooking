import { $n as e, B as t, D as n, Dn as r, E as i, Gt as a, Ht as o, J as s, L as c, Lt as l, On as u, Q as d, Tn as f, Ut as p, Xt as m, b as h, bt as g, ct as _, er as v, et as y, fn as b, ft as x, g as S, gn as C, gt as w, h as T, k as E, mt as D, o as O, pn as k, qt as A, rt as j, tr as M, tt as N, un as P, v as F, vn as I, wt as L, xn as R, xt as z, y as B, z as V } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as H, l as U } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { C as ee, E as W, S as G, U as te, W as ne, w as K } from "./Button-BArxwKIq.js";
import { C as re, E as ie, F as ae, P as oe, S as se, T as ce, b as q, f as le, g as ue, j as de, k as fe, o as pe, w as me } from "./dist-BY3QSpe-.js";
import { S as he, _ as ge, b as _e, c as ve, f as ye, g as J, h as be, l as xe, o as Se, p as Ce, s as we, u as Te, v as Y, w as Ee, y as X } from "./Tooltip-DkuatXWt.js";
import { n as Z, r as De, t as Oe } from "./VisuallyHiddenInput-Dr3Nvdqq.js";
function ke(e2, t2, n2) {
  let r2 = e2.findIndex((e3) => te(e3, t2)), i2 = e2.findIndex((e3) => te(e3, n2));
  if (r2 === -1 || i2 === -1) return [];
  let [a2, o2] = [r2, i2].sort((e3, t3) => e3 - t3);
  return e2.slice(a2, o2 + 1);
}
function Q() {
  let e2 = document.activeElement;
  if (e2 == null) return null;
  for (; e2 != null && e2.shadowRoot != null && e2.shadowRoot.activeElement != null; ) e2 = e2.shadowRoot.activeElement;
  return e2;
}
var Ae = [`INPUT`, `TEXTAREA`];
function je(e2, t2, n2, r2 = {}) {
  if (!t2 || r2.enableIgnoredElement && Ae.includes(t2.nodeName)) return null;
  let { arrowKeyOptions: i2 = `both`, attributeName: a2 = `[data-reka-collection-item]`, itemsArray: o2 = [], loop: s2 = true, dir: c2 = `ltr`, preventScroll: l2 = true, focus: u2 = false } = r2, [d2, f2, p2, m2, h2, g2] = [e2.key === `ArrowRight`, e2.key === `ArrowLeft`, e2.key === `ArrowUp`, e2.key === `ArrowDown`, e2.key === `Home`, e2.key === `End`], _2 = p2 || m2, v2 = d2 || f2;
  if (!h2 && !g2 && (!_2 && !v2 || i2 === `vertical` && v2 || i2 === `horizontal` && _2)) return null;
  let y2 = n2 ? Array.from(n2.querySelectorAll(a2)) : o2;
  if (!y2.length) return null;
  l2 && e2.preventDefault();
  let b2 = null;
  return v2 || _2 ? b2 = Me(y2, t2, { goForward: _2 ? m2 : c2 === `ltr` ? d2 : f2, loop: s2 }) : h2 ? b2 = y2.at(0) || null : g2 && (b2 = y2.at(-1) || null), u2 && b2?.focus(), b2;
}
function Me(e2, t2, n2, r2 = e2.includes(t2) ? e2.length : e2.length + 1) {
  if (--r2 === 0) return null;
  let i2 = e2.indexOf(t2), a2;
  if (a2 = i2 === -1 ? n2.goForward ? 0 : e2.length - 1 : n2.goForward ? i2 + 1 : i2 - 1, !n2.loop && (a2 < 0 || a2 >= e2.length)) return null;
  let o2 = e2[(a2 + e2.length) % e2.length];
  return o2 ? o2.hasAttribute(`disabled`) && o2.getAttribute(`disabled`) !== `false` ? Me(e2, o2, n2, r2) : o2 : null;
}
var Ne = me(() => {
  let e2 = I(/* @__PURE__ */ new Map()), t2 = I(), n2 = S(() => {
    for (let t3 of e2.value.values()) if (t3) return true;
    return false;
  }), r2 = he({ scrollBody: I(true) }), i2 = null, a2 = () => {
    document.body.style.paddingRight = ``, document.body.style.marginRight = ``, document.body.style.pointerEvents = ``, document.documentElement.style.removeProperty(`--scrollbar-width`), document.body.style.overflow = t2.value ?? ``, ie && i2?.(), t2.value = void 0;
  };
  return o(n2, (e3, o2) => {
    if (!ce) return;
    if (!e3) {
      o2 && a2();
      return;
    }
    t2.value === void 0 && (t2.value = document.body.style.overflow);
    let s2 = window.innerWidth - document.documentElement.clientWidth, c2 = { padding: s2, margin: 0 }, l2 = r2.scrollBody?.value ? typeof r2.scrollBody.value == `object` ? ne({ padding: r2.scrollBody.value.padding === true ? s2 : r2.scrollBody.value.padding, margin: r2.scrollBody.value.margin === true ? s2 : r2.scrollBody.value.margin }, c2) : c2 : { padding: 0, margin: 0 };
    s2 > 0 && (document.body.style.paddingRight = typeof l2.padding == `number` ? `${l2.padding}px` : String(l2.padding), document.body.style.marginRight = typeof l2.margin == `number` ? `${l2.margin}px` : String(l2.margin), document.documentElement.style.setProperty(`--scrollbar-width`, `${s2}px`), document.body.style.overflow = `hidden`), ie && (i2 = le(document, `touchmove`, (e4) => Ie(e4), { passive: false })), N(() => {
      n2.value && (document.body.style.pointerEvents = `none`, document.body.style.overflow = `hidden`);
    });
  }, { immediate: true, flush: `sync` }), e2;
});
function Pe(e2) {
  let t2 = Math.random().toString(36).substring(2, 7), n2 = Ne();
  n2.value.set(t2, e2 ?? false);
  let r2 = S({ get: () => n2.value.get(t2) ?? false, set: (e3) => n2.value.set(t2, e3) });
  return ae(() => {
    n2.value.delete(t2);
  }), r2;
}
function Fe(e2) {
  let t2 = window.getComputedStyle(e2);
  if (t2.overflowX === `scroll` || t2.overflowY === `scroll` || t2.overflowX === `auto` && e2.clientWidth < e2.scrollWidth || t2.overflowY === `auto` && e2.clientHeight < e2.scrollHeight) return true;
  {
    let t3 = e2.parentNode;
    return !(t3 instanceof Element) || t3.tagName === `BODY` ? false : Fe(t3);
  }
}
function Ie(e2) {
  let t2 = e2 || window.event, n2 = t2.target;
  return n2 instanceof Element && Fe(n2) ? false : t2.touches.length > 1 ? true : (t2.preventDefault && t2.cancelable && t2.preventDefault(), false);
}
function Le(e2) {
  let t2 = he({ dir: I(`ltr`) });
  return S(() => e2?.value || t2.dir?.value || `ltr`);
}
function Re(e2) {
  let t2 = S(() => u(e2)), n2 = S(() => new Intl.Collator(`en`, { usage: `search`, ...t2.value }));
  return { startsWith: (e3, t3) => t3.length === 0 ? true : (e3 = e3.normalize(`NFC`), t3 = t3.normalize(`NFC`), n2.value.compare(e3.slice(0, t3.length), t3) === 0), endsWith: (e3, t3) => t3.length === 0 ? true : (e3 = e3.normalize(`NFC`), t3 = t3.normalize(`NFC`), n2.value.compare(e3.slice(-t3.length), t3) === 0), contains: (e3, t3) => {
    if (t3.length === 0) return true;
    e3 = e3.normalize(`NFC`), t3 = t3.normalize(`NFC`);
    let r2 = 0, i2 = t3.length;
    for (; r2 + i2 <= e3.length; r2++) {
      let a2 = e3.slice(r2, r2 + i2);
      if (n2.value.compare(t3, a2) === 0) return true;
    }
    return false;
  } };
}
var ze = 0;
function Be() {
  p((e2) => {
    if (!ce) return;
    let t2 = document.querySelectorAll(`[data-reka-focus-guard]`);
    document.body.insertAdjacentElement(`afterbegin`, t2[0] ?? Ve()), document.body.insertAdjacentElement(`beforeend`, t2[1] ?? Ve()), ze++, e2(() => {
      ze === 1 && document.querySelectorAll(`[data-reka-focus-guard]`).forEach((e3) => e3.remove()), ze--;
    });
  });
}
function Ve() {
  let e2 = document.createElement(`span`);
  return e2.setAttribute(`data-reka-focus-guard`, ``), e2.tabIndex = 0, e2.style.outline = `none`, e2.style.opacity = `0`, e2.style.position = `fixed`, e2.style.pointerEvents = `none`, e2;
}
var He = function(e2) {
  return typeof document > `u` ? null : (Array.isArray(e2) ? e2[0] : e2).ownerDocument.body;
}, Ue = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Ge = {}, Ke = 0, qe = function(e2) {
  return e2 && (e2.host || qe(e2.parentNode));
}, Je = function(e2, t2) {
  return t2.map(function(t3) {
    if (e2.contains(t3)) return t3;
    var n2 = qe(t3);
    return n2 && e2.contains(n2) ? n2 : (console.error(`aria-hidden`, t3, `in not contained inside`, e2, `. Doing nothing`), null);
  }).filter(function(e3) {
    return !!e3;
  });
}, Ye = function(e2, t2, n2, r2) {
  var i2 = Je(t2, Array.isArray(e2) ? e2 : [e2]);
  Ge[n2] || (Ge[n2] = /* @__PURE__ */ new WeakMap());
  var a2 = Ge[n2], o2 = [], s2 = /* @__PURE__ */ new Set(), c2 = new Set(i2), l2 = function(e3) {
    !e3 || s2.has(e3) || (s2.add(e3), l2(e3.parentNode));
  };
  i2.forEach(l2);
  var u2 = function(e3) {
    !e3 || c2.has(e3) || Array.prototype.forEach.call(e3.children, function(e4) {
      if (s2.has(e4)) u2(e4);
      else try {
        var t3 = e4.getAttribute(r2), i3 = t3 !== null && t3 !== `false`, c3 = (Ue.get(e4) || 0) + 1, l3 = (a2.get(e4) || 0) + 1;
        Ue.set(e4, c3), a2.set(e4, l3), o2.push(e4), c3 === 1 && i3 && We.set(e4, true), l3 === 1 && e4.setAttribute(n2, `true`), i3 || e4.setAttribute(r2, `true`);
      } catch (t4) {
        console.error(`aria-hidden: cannot operate on `, e4, t4);
      }
    });
  };
  return u2(t2), s2.clear(), Ke++, function() {
    o2.forEach(function(e3) {
      var t3 = Ue.get(e3) - 1, i3 = a2.get(e3) - 1;
      Ue.set(e3, t3), a2.set(e3, i3), t3 || (We.has(e3) || e3.removeAttribute(r2), We.delete(e3)), i3 || e3.removeAttribute(n2);
    }), Ke--, Ke || (Ue = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Ge = {});
  };
}, Xe = function(e2, t2, n2) {
  n2 === void 0 && (n2 = `data-aria-hidden`);
  var r2 = Array.from(Array.isArray(e2) ? e2 : [e2]), i2 = t2 || He(e2);
  return i2 ? (r2.push.apply(r2, Array.from(i2.querySelectorAll(`[aria-live], script`))), Ye(r2, i2, n2, `aria-hidden`)) : function() {
    return null;
  };
};
function Ze(e2) {
  let t2;
  o(() => pe(e2), (e3) => {
    let n2 = false;
    try {
      n2 = !!e3?.closest(`[popover]:not(:popover-open)`);
    } catch {
    }
    e3 && !n2 ? t2 = Xe(e3) : t2 && t2();
  }), x(() => {
    t2 && t2();
  });
}
function Qe() {
  return { ALT: `Alt`, ARROW_DOWN: `ArrowDown`, ARROW_LEFT: `ArrowLeft`, ARROW_RIGHT: `ArrowRight`, ARROW_UP: `ArrowUp`, BACKSPACE: `Backspace`, CAPS_LOCK: `CapsLock`, CONTROL: `Control`, DELETE: `Delete`, END: `End`, ENTER: `Enter`, ESCAPE: `Escape`, F1: `F1`, F10: `F10`, F11: `F11`, F12: `F12`, F2: `F2`, F3: `F3`, F4: `F4`, F5: `F5`, F6: `F6`, F7: `F7`, F8: `F8`, F9: `F9`, HOME: `Home`, META: `Meta`, PAGE_DOWN: `PageDown`, PAGE_UP: `PageUp`, SHIFT: `Shift`, SPACE: ` `, TAB: `Tab`, CTRL: `Control`, ASTERISK: `*`, SPACE_CODE: `Space` };
}
function $e(e2) {
  let t2 = de(``, 1e3);
  return { search: t2, handleTypeaheadSearch: (n2, r2) => {
    if (t2.value += n2, e2) e2(n2);
    else {
      let e3 = Q(), n3 = r2.map((e4) => ({ ...e4, textValue: e4.value?.textValue ?? e4.ref.textContent?.trim() ?? `` })), i2 = n3.find((t3) => t3.ref === e3), a2 = tt(n3.map((e4) => e4.textValue), t2.value, i2?.textValue), o2 = n3.find((e4) => e4.textValue === a2);
      return o2 && o2.ref.focus(), o2?.ref;
    }
  }, resetTypeahead: () => {
    t2.value = ``;
  } };
}
function et(e2, t2) {
  return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
}
function tt(e2, t2, n2) {
  let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, i2 = n2 ? e2.indexOf(n2) : -1, a2 = et(e2, Math.max(i2, 0));
  r2.length === 1 && (a2 = a2.filter((e3) => e3 !== n2));
  let o2 = a2.find((e3) => e3.toLowerCase().startsWith(r2.toLowerCase()));
  return o2 === n2 ? void 0 : o2;
}
var nt = re(() => I([]));
function rt() {
  let e2 = nt();
  return { add(t2) {
    let n2 = e2.value[0];
    t2 !== n2 && n2?.pause(), e2.value = it(e2.value, t2), e2.value.unshift(t2);
  }, remove(t2) {
    e2.value = it(e2.value, t2), e2.value[0]?.resume();
  } };
}
function it(e2, t2) {
  let n2 = [...e2], r2 = n2.indexOf(t2);
  return r2 !== -1 && n2.splice(r2, 1), n2;
}
var at = `focusScope.autoFocusOnMount`, ot = `focusScope.autoFocusOnUnmount`, st = { bubbles: false, cancelable: true };
function ct(e2, { select: t2 = false } = {}) {
  let n2 = Q();
  for (let r2 of e2) if (mt(r2, { select: t2 }), Q() !== n2) return true;
}
function lt(e2) {
  let t2 = ut(e2);
  return [dt(t2, e2), dt(t2.reverse(), e2)];
}
function ut(e2) {
  let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
    let t3 = e3.tagName === `INPUT` && e3.type === `hidden`;
    return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
function dt(e2, t2) {
  for (let n2 of e2) if (!ft(n2, { upTo: t2 })) return n2;
}
function ft(e2, { upTo: t2 }) {
  if (getComputedStyle(e2).visibility === `hidden`) return true;
  for (; e2; ) {
    if (t2 !== void 0 && e2 === t2) return false;
    if (getComputedStyle(e2).display === `none`) return true;
    e2 = e2.parentElement;
  }
  return false;
}
function pt(e2) {
  return e2 instanceof HTMLInputElement && `select` in e2;
}
function mt(e2, { select: t2 = false } = {}) {
  if (e2 && e2.focus) {
    let n2 = Q();
    e2.focus({ preventScroll: true }), e2 !== n2 && pt(e2) && t2 && e2.select();
  }
}
var ht = E({ __name: `FocusScope`, props: { loop: { type: Boolean, required: false, default: false }, trapped: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`mountAutoFocus`, `unmountAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { currentRef: i2, currentElement: a2 } = X(), o2 = I(null), s2 = rt(), c2 = C({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } });
  p((e3) => {
    if (!ce) return;
    let t3 = a2.value;
    if (!n2.trapped) return;
    function r3(e4) {
      if (c2.paused || !t3) return;
      let n3 = e4.target;
      t3.contains(n3) ? o2.value = n3 : mt(o2.value, { select: true });
    }
    function i3(e4) {
      if (c2.paused || !t3) return;
      let n3 = e4.relatedTarget;
      n3 !== null && (t3.contains(n3) || mt(o2.value, { select: true }));
    }
    function s3(e4) {
      let n3 = o2.value;
      n3 !== null && e4.some((e5) => e5.removedNodes.length > 0) && (t3.contains(n3) || mt(t3));
    }
    document.addEventListener(`focusin`, r3), document.addEventListener(`focusout`, i3);
    let l3 = new MutationObserver(s3);
    t3 && l3.observe(t3, { childList: true, subtree: true }), e3(() => {
      document.removeEventListener(`focusin`, r3), document.removeEventListener(`focusout`, i3), l3.disconnect();
    });
  }), p(async (e3) => {
    let t3 = a2.value;
    if (await N(), !t3) return;
    s2.add(c2);
    let n3 = Q();
    if (!t3.contains(n3)) {
      let e4 = new CustomEvent(at, st);
      t3.addEventListener(at, (e5) => r2(`mountAutoFocus`, e5)), t3.dispatchEvent(e4), e4.defaultPrevented || (ct(ut(t3), { select: true }), Q() === n3 && mt(t3));
    }
    e3(() => {
      t3.removeEventListener(at, (e5) => r2(`mountAutoFocus`, e5));
      let e4 = new CustomEvent(ot, st), i3 = (e5) => {
        r2(`unmountAutoFocus`, e5);
      };
      t3.addEventListener(ot, i3), t3.dispatchEvent(e4), setTimeout(() => {
        e4.defaultPrevented || mt(n3 ?? document.body, { select: true }), t3.removeEventListener(ot, i3), s2.remove(c2);
      }, 0);
    });
  });
  function l2(e3) {
    if (!n2.loop && !n2.trapped || c2.paused) return;
    let t3 = e3.key === `Tab` && !e3.altKey && !e3.ctrlKey && !e3.metaKey, r3 = Q();
    if (t3 && r3) {
      let t4 = e3.currentTarget, [i3, a3] = lt(t4);
      i3 && a3 ? !e3.shiftKey && r3 === a3 ? (e3.preventDefault(), n2.loop && mt(i3, { select: true })) : e3.shiftKey && r3 === i3 && (e3.preventDefault(), n2.loop && mt(a3, { select: true })) : r3 === t4 && e3.preventDefault();
    }
  }
  return (e3, t3) => (D(), F(u(G), { ref_key: `currentRef`, ref: i2, tabindex: `-1`, "as-child": e3.asChild, as: e3.as, onKeydown: l2 }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`]));
} }), gt = `menu.itemSelect`, _t = [`Enter`, ` `], vt = [`ArrowDown`, `PageUp`, `Home`], yt = [`ArrowUp`, `PageDown`, `End`], bt = [...vt, ...yt], xt = { ltr: [..._t, `ArrowRight`], rtl: [..._t, `ArrowLeft`] }, St = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] };
function Ct(e2) {
  return e2 ? `open` : `closed`;
}
function wt(e2) {
  return e2 === `indeterminate`;
}
function Tt(e2) {
  return wt(e2) ? `indeterminate` : e2 ? `checked` : `unchecked`;
}
function Et(e2) {
  let t2 = Q();
  for (let n2 of e2) if (n2 === t2 || (n2.focus(), Q() !== t2)) return;
}
function Dt(e2, t2) {
  let { x: n2, y: r2 } = e2, i2 = false;
  for (let e3 = 0, a2 = t2.length - 1; e3 < t2.length; a2 = e3++) {
    let o2 = t2[e3].x, s2 = t2[e3].y, c2 = t2[a2].x, l2 = t2[a2].y;
    s2 > r2 != l2 > r2 && n2 < (c2 - o2) * (r2 - s2) / (l2 - s2) + o2 && (i2 = !i2);
  }
  return i2;
}
function Ot(e2, t2) {
  return t2 ? Dt({ x: e2.clientX, y: e2.clientY }, t2) : false;
}
function kt(e2) {
  return e2.pointerType === `mouse`;
}
var At = `data-reka-collection-item`;
function jt(e2 = {}) {
  let { key: n2 = ``, isProvider: r2 = false } = e2, i2 = `${n2}CollectionProvider`, a2;
  if (r2) {
    let e3 = I(/* @__PURE__ */ new Map());
    a2 = { collectionRef: I(), itemMap: e3 }, w(i2, a2);
  } else a2 = s(i2);
  let c2 = (e3 = false) => {
    let t2 = a2.collectionRef.value;
    if (!t2) return [];
    let n3 = Array.from(t2.querySelectorAll(`[${At}]`)), r3 = Array.from(a2.itemMap.value.values()).sort((e4, t3) => n3.indexOf(e4.ref) - n3.indexOf(t3.ref));
    return e3 ? r3 : r3.filter((e4) => e4.ref.dataset.disabled !== ``);
  }, l2 = E({ name: `CollectionSlot`, inheritAttrs: false, setup(e3, { slots: n3, attrs: r3 }) {
    let { primitiveElement: i3, currentElement: s2 } = Z();
    return o(s2, () => {
      a2.collectionRef.value = s2.value;
    }), () => t(ee, { ref: i3, ...r3 }, n3);
  } }), u2 = E({ name: `CollectionItem`, inheritAttrs: false, props: { value: { validator: () => true } }, setup(e3, { slots: n3, attrs: r3 }) {
    let { primitiveElement: i3, currentElement: o2 } = Z();
    return p((t2) => {
      if (o2.value) {
        let n4 = b(o2.value);
        a2.itemMap.value.set(n4, { ref: o2.value, value: e3.value }), t2(() => a2.itemMap.value.delete(n4));
      }
    }), () => t(ee, { ...r3, [At]: ``, ref: i3 }, n3);
  } });
  return { getItems: c2, reactiveItems: S(() => Array.from(a2.itemMap.value.values())), itemMapSize: S(() => a2.itemMap.value.size), CollectionSlot: l2, CollectionItem: u2 };
}
function Mt(e2) {
  return e2?.querySelector(`[data-state=checked]`);
}
function Nt(e2, t2, n2) {
  return e2 === void 0 ? false : Array.isArray(e2) ? e2.some((e3) => Pt(e3, t2, n2)) : Pt(e2, t2, n2);
}
function Pt(e2, t2, n2) {
  return e2 === void 0 || t2 === void 0 ? false : typeof e2 == `string` ? e2 === t2 : typeof n2 == `function` ? n2(e2, t2) : typeof n2 == `string` ? e2?.[n2] === t2?.[n2] : te(e2, t2);
}
var Ft = `rovingFocusGroup.onEntryFocus`, It = { bubbles: false, cancelable: true }, Lt = { ArrowLeft: `prev`, ArrowUp: `prev`, ArrowRight: `next`, ArrowDown: `next`, PageUp: `first`, Home: `first`, PageDown: `last`, End: `last` };
function Rt(e2, t2) {
  return t2 === `rtl` ? e2 === `ArrowLeft` ? `ArrowRight` : e2 === `ArrowRight` ? `ArrowLeft` : e2 : e2;
}
function zt(e2, t2, n2) {
  let r2 = Rt(e2.key, n2);
  if (!(t2 === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r2)) && !(t2 === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r2))) return Lt[r2];
}
function Bt(e2, t2 = false) {
  let n2 = Q();
  for (let r2 of e2) if (r2 === n2 || (r2.focus({ preventScroll: t2 }), Q() !== n2)) return;
}
function Vt(e2, t2) {
  return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
}
var [Ht, Ut] = W(`ListboxRoot`), Wt = E({ __name: `ListboxRoot`, props: { modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, orientation: { type: String, required: false, default: `vertical` }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, selectionBehavior: { type: String, required: false, default: `toggle` }, highlightOnHover: { type: Boolean, required: false }, by: { type: [String, Function], required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`, `highlight`, `entryFocus`, `leave`], setup(e2, { expose: t2, emit: n2 }) {
  let r2 = e2, i2 = n2, { multiple: a2, highlightOnHover: s2, orientation: c2, disabled: l2, selectionBehavior: d2, dir: p2 } = f(r2), { getItems: m2 } = jt({ isProvider: true }), { handleTypeaheadSearch: h2 } = $e(), { primitiveElement: g2, currentElement: _2 } = Z(), v2 = Qe(), y2 = Le(p2), b2 = De(_2), x2 = I(), S2 = I(false), C2 = I(true), w2 = q(r2, `modelValue`, i2, { defaultValue: r2.defaultValue ?? (a2.value ? [] : void 0), passive: r2.modelValue === void 0, deep: true });
  function T2(e3) {
    if (S2.value = true, r2.multiple) {
      let t3 = Array.isArray(w2.value) ? [...w2.value] : [], n3 = t3.findIndex((t4) => Pt(t4, e3, r2.by));
      r2.selectionBehavior === `toggle` ? (n3 === -1 ? t3.push(e3) : t3.splice(n3, 1), w2.value = t3) : (w2.value = [e3], x2.value = e3);
    } else r2.selectionBehavior === `toggle` && Pt(w2.value, e3, r2.by) ? w2.value = void 0 : w2.value = e3;
    setTimeout(() => {
      S2.value = false;
    }, 1);
  }
  let E2 = I(null), O2 = I(null), k2 = I(false), j2 = I(false), M2 = se(), P2 = se(), L2 = se();
  function R2() {
    return m2().map((e3) => e3.ref).filter((e3) => e3.dataset.disabled !== ``);
  }
  function V2(e3, t3 = true, n3) {
    e3 && (E2.value = e3, (n3 ?? C2.value) && E2.value.focus(), t3 && E2.value.scrollIntoView({ block: `nearest` }), i2(`highlight`, m2().find((t4) => t4.ref === e3)));
  }
  function H2(e3) {
    if (k2.value) L2.trigger(e3);
    else {
      let t3 = m2().find((t4) => Pt(t4.value, e3, r2.by));
      t3 && (E2.value = t3.ref, V2(t3.ref));
    }
  }
  function U2(e3) {
    E2.value && E2.value.isConnected && (e3.preventDefault(), e3.stopPropagation(), j2.value || E2.value.click());
  }
  function ee2(e3) {
    if (C2.value) {
      if (S2.value = true, k2.value) P2.trigger(e3);
      else {
        let t3 = e3.altKey || e3.ctrlKey || e3.metaKey;
        if (t3 && e3.key === `a` && a2.value) {
          let t4 = m2();
          w2.value = [...t4.map((e4) => e4.value)], e3.preventDefault();
          let n3 = t4.at(-1);
          n3 && V2(n3.ref);
        } else if (!t3) {
          let t4 = h2(e3.key, m2());
          t4 && V2(t4);
        }
      }
      setTimeout(() => {
        S2.value = false;
      }, 1);
    }
  }
  function W2() {
    j2.value = true;
  }
  function te2() {
    N(() => {
      j2.value = false;
    });
  }
  function ne2() {
    N(() => {
      ie2(new KeyboardEvent(`keydown`, { key: `PageUp` }));
    });
  }
  function K2(e3) {
    let t3 = E2.value;
    t3?.isConnected && (O2.value = t3), E2.value = null, i2(`leave`, e3);
  }
  function re2(e3) {
    let t3 = new CustomEvent(`listbox.entryFocus`, { bubbles: false, cancelable: true });
    if (e3.currentTarget?.dispatchEvent(t3), i2(`entryFocus`, t3), !t3.defaultPrevented) if (O2.value) V2(O2.value);
    else {
      let e4 = R2()?.[0];
      V2(e4);
    }
  }
  function ie2(e3) {
    let t3 = zt(e3, c2.value, y2.value);
    if (!t3) return;
    let n3 = R2();
    if (E2.value) {
      if (t3 === `last`) n3.reverse();
      else if (t3 === `prev` || t3 === `next`) {
        t3 === `prev` && n3.reverse();
        let e4 = n3.indexOf(E2.value);
        n3 = n3.slice(e4 + 1);
      }
      ae2(e3, n3[0]);
    }
    if (n3.length) {
      let e4 = !E2.value && t3 === `prev` ? n3.length - 1 : 0;
      V2(n3[e4]);
    }
    if (k2.value) return P2.trigger(e3);
  }
  function ae2(e3, t3) {
    if (!(k2.value || r2.selectionBehavior !== `replace` || !a2.value || !Array.isArray(w2.value)) && !((e3.altKey || e3.ctrlKey || e3.metaKey) && !e3.shiftKey) && e3.shiftKey) {
      let n3 = m2().filter((e4) => e4.ref.dataset.disabled !== ``), r3 = n3.find((e4) => e4.ref === t3)?.value;
      if (e3.key === v2.END ? r3 = n3.at(-1)?.value : e3.key === v2.HOME && (r3 = n3[0]?.value), !r3 || !x2.value) return;
      w2.value = ke(n3.map((e4) => e4.value), x2.value, r3);
    }
  }
  async function oe2(e3) {
    if (await N(), k2.value) M2.trigger(e3);
    else {
      let e4 = R2(), t3 = e4.find((e5) => e5.dataset.state === `checked`);
      t3 ? V2(t3) : e4.length && V2(e4[0]);
    }
  }
  return o(w2, () => {
    S2.value || N(() => {
      oe2();
    });
  }, { immediate: true, deep: true }), t2({ highlightedElement: E2, highlightItem: H2, highlightFirstItem: ne2, highlightSelected: oe2, getItems: m2 }), Ut({ modelValue: w2, onValueChange: T2, multiple: a2, orientation: c2, dir: y2, disabled: l2, highlightOnHover: s2, highlightedElement: E2, isVirtual: k2, virtualFocusHook: M2, virtualKeydownHook: P2, virtualHighlightHook: L2, by: r2.by, firstValue: x2, selectionBehavior: d2, focusable: C2, onLeave: K2, onEnter: re2, changeHighlight: V2, onKeydownEnter: U2, onKeydownNavigation: ie2, onKeydownTypeAhead: ee2, onCompositionStart: W2, onCompositionEnd: te2, highlightFirstItem: ne2 }), (e3, t3) => (D(), F(u(G), { ref_key: `primitiveElement`, ref: g2, as: e3.as, "as-child": e3.asChild, dir: u(y2), "data-disabled": u(l2) ? `` : void 0, onPointerleave: K2, onFocusout: t3[0] || (t3[0] = async (e4) => {
    let t4 = e4.relatedTarget || e4.target;
    await N(), E2.value && u(_2) && !u(_2).contains(t4) && K2(e4);
  }) }, { default: A(() => [z(e3.$slots, `default`, { modelValue: u(w2) }), u(b2) && e3.name ? (D(), F(u(Oe), { key: 0, name: e3.name, value: u(w2), disabled: u(l2), required: e3.required }, null, 8, [`name`, `value`, `disabled`, `required`])) : B(`v-if`, true)]), _: 3 }, 8, [`as`, `as-child`, `dir`, `data-disabled`]));
} }), Gt = E({ __name: `ListboxContent`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let { CollectionSlot: t2 } = jt(), r2 = Ht(), i2 = de(false, 10);
  return (e3, a2) => (D(), F(u(t2), null, { default: A(() => [n(u(G), { role: `listbox`, as: e3.as, "as-child": e3.asChild, tabindex: u(r2).focusable.value ? u(r2).highlightedElement.value ? `-1` : `0` : `-1`, "aria-orientation": u(r2).orientation.value, "aria-multiselectable": !!u(r2).multiple.value, "data-orientation": u(r2).orientation.value, onMousedown: a2[0] || (a2[0] = U((e4) => i2.value = true, [`left`])), onFocus: a2[1] || (a2[1] = (e4) => {
    u(i2) || u(r2).onEnter(e4);
  }), onKeydown: [a2[2] || (a2[2] = H((e4) => {
    u(r2).orientation.value === `vertical` && (e4.key === `ArrowLeft` || e4.key === `ArrowRight`) || u(r2).orientation.value === `horizontal` && (e4.key === `ArrowUp` || e4.key === `ArrowDown`) || (e4.preventDefault(), u(r2).focusable.value && u(r2).onKeydownNavigation(e4));
  }, [`down`, `up`, `left`, `right`, `home`, `end`])), H(u(r2).onKeydownEnter, [`enter`]), u(r2).onKeydownTypeAhead] }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `tabindex`, `aria-orientation`, `aria-multiselectable`, `data-orientation`, `onKeydown`])]), _: 3 }));
} }), Kt = E({ __name: `ListboxFilter`, props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = q(n2, `modelValue`, t2, { defaultValue: ``, passive: n2.modelValue === void 0 }), i2 = Ht(), { primitiveElement: o2, currentElement: s2 } = Z(), c2 = S(() => n2.disabled || i2.disabled.value || false), l2 = I();
  return a(() => l2.value = i2.highlightedElement.value?.id), _(() => {
    i2.focusable.value = false, setTimeout(() => {
      n2.autoFocus && s2.value?.focus();
    }, 1);
  }), x(() => {
    i2.focusable.value = true;
  }), (e3, t3) => (D(), F(u(G), { ref_key: `primitiveElement`, ref: o2, as: e3.as, "as-child": e3.asChild, value: u(r2), disabled: c2.value ? `` : void 0, "data-disabled": c2.value ? `` : void 0, "aria-disabled": c2.value ?? void 0, "aria-activedescendant": l2.value, type: `text`, onKeydown: [H(U(u(i2).onKeydownNavigation, [`prevent`]), [`down`, `up`, `home`, `end`]), H(u(i2).onKeydownEnter, [`enter`])], onInput: t3[0] || (t3[0] = (e4) => {
    r2.value = e4.target.value, u(i2).highlightFirstItem();
  }), onCompositionstart: u(i2).onCompositionStart, onCompositionend: u(i2).onCompositionEnd }, { default: A(() => [z(e3.$slots, `default`, { modelValue: u(r2) })]), _: 3 }, 8, [`as`, `as-child`, `value`, `disabled`, `data-disabled`, `aria-disabled`, `aria-activedescendant`, `onKeydown`, `onCompositionstart`, `onCompositionend`]));
} }), [qt, Jt] = W(`ListboxGroup`), Yt = E({ __name: `ListboxGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = J(void 0, `reka-listbox-group`);
  return Jt({ id: n2 }), (e3, r2) => (D(), F(u(G), y({ role: `group` }, t2, { "aria-labelledby": u(n2) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`aria-labelledby`]));
} }), Xt = `listbox.select`, [Zt, Qt] = W(`ListboxItem`), $t = E({ __name: `ListboxItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = J(void 0, `reka-listbox-item`), { CollectionItem: o2 } = jt(), { forwardRef: s2, currentElement: c2 } = X(), l2 = Ht(), d2 = S(() => c2.value === l2.highlightedElement.value), f2 = S(() => Nt(l2.modelValue.value, r2.value, l2.by)), p2 = S(() => l2.disabled.value || r2.disabled);
  async function h2(e3) {
    i2(`select`, e3), !e3?.defaultPrevented && !p2.value && e3 && (l2.onValueChange(r2.value), l2.changeHighlight(c2.value));
  }
  function g2(e3) {
    Ee(Xt, h2, { originalEvent: e3, value: r2.value });
  }
  return Qt({ isSelected: f2 }), (e3, t3) => (D(), F(u(o2), { value: e3.value }, { default: A(() => [m([d2.value, f2.value], () => n(u(G), y({ id: u(a2) }, e3.$attrs, { ref: u(s2), role: `option`, tabindex: u(l2).focusable.value ? d2.value ? `0` : `-1` : -1, "aria-selected": f2.value, as: e3.as, "as-child": e3.asChild, disabled: p2.value ? `` : void 0, "data-disabled": p2.value ? `` : void 0, "data-highlighted": d2.value ? `` : void 0, "data-state": f2.value ? `checked` : `unchecked`, onClick: g2, onKeydown: H(U(g2, [`prevent`]), [`space`]), onPointermove: t3[0] || (t3[0] = () => {
    u(l2).highlightedElement.value !== u(c2) && u(l2).highlightOnHover.value && u(l2).changeHighlight(u(c2), false, false);
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `tabindex`, `aria-selected`, `as`, `as-child`, `disabled`, `data-disabled`, `data-highlighted`, `data-state`, `onKeydown`]), t3, 1)]), _: 3 }, 8, [`value`]));
} }), en = E({ __name: `ListboxItemIndicator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let t2 = e2;
  X();
  let n2 = Zt();
  return (e3, r2) => u(n2).isSelected.value ? (D(), F(u(G), y({ key: 0, "aria-hidden": `true` }, t2), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16)) : B(`v-if`, true);
} });
function tn(e2, t2, n2) {
  let r2 = n2.initialDeps ?? [], i2, a2 = true;
  function o2() {
    let o3;
    n2.key && n2.debug?.call(n2) && (o3 = Date.now());
    let s2 = e2();
    if (!(s2.length !== r2.length || s2.some((e3, t3) => r2[t3] !== e3))) return i2;
    r2 = s2;
    let c2;
    if (n2.key && n2.debug?.call(n2) && (c2 = Date.now()), i2 = t2(...s2), n2.key && n2.debug?.call(n2)) {
      let e3 = Math.round((Date.now() - o3) * 100) / 100, t3 = Math.round((Date.now() - c2) * 100) / 100, r3 = t3 / 16, i3 = (e4, t4) => {
        for (e4 = String(e4); e4.length < t4; ) e4 = ` ` + e4;
        return e4;
      };
      console.info(`%c\u23F1 ${i3(t3, 5)} /${i3(e3, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r3, 120))}deg 100% 31%);`, n2?.key);
    }
    return n2?.onChange && !(a2 && n2.skipInitialOnChange) && n2.onChange(i2), a2 = false, i2;
  }
  return o2.updateDeps = (e3) => {
    r2 = e3;
  }, o2;
}
function nn(e2, t2) {
  if (e2 === void 0) throw Error(`Unexpected undefined${t2 ? `: ${t2}` : ``}`);
  return e2;
}
var rn = (e2, t2) => Math.abs(e2 - t2) < 1.01, an = (e2, t2, n2) => {
  let r2;
  return function(...i2) {
    e2.clearTimeout(r2), r2 = e2.setTimeout(() => t2.apply(this, i2), n2);
  };
}, on = (e2) => {
  let { offsetWidth: t2, offsetHeight: n2 } = e2;
  return { width: t2, height: n2 };
}, sn = (e2) => e2, cn = (e2) => {
  let t2 = Math.max(e2.startIndex - e2.overscan, 0), n2 = Math.min(e2.endIndex + e2.overscan, e2.count - 1), r2 = [];
  for (let e3 = t2; e3 <= n2; e3++) r2.push(e3);
  return r2;
}, ln = (e2, t2) => {
  let n2 = e2.scrollElement;
  if (!n2) return;
  let r2 = e2.targetWindow;
  if (!r2) return;
  let i2 = (e3) => {
    let { width: n3, height: r3 } = e3;
    t2({ width: Math.round(n3), height: Math.round(r3) });
  };
  if (i2(on(n2)), !r2.ResizeObserver) return () => {
  };
  let a2 = new r2.ResizeObserver((t3) => {
    let r3 = () => {
      let e3 = t3[0];
      if (e3?.borderBoxSize) {
        let t4 = e3.borderBoxSize[0];
        if (t4) {
          i2({ width: t4.inlineSize, height: t4.blockSize });
          return;
        }
      }
      i2(on(n2));
    };
    e2.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r3) : r3();
  });
  return a2.observe(n2, { box: `border-box` }), () => {
    a2.unobserve(n2);
  };
}, un = { passive: true }, dn = typeof window > `u` ? true : `onscrollend` in window, fn = (e2, t2) => {
  let n2 = e2.scrollElement;
  if (!n2) return;
  let r2 = e2.targetWindow;
  if (!r2) return;
  let i2 = 0, a2 = e2.options.useScrollendEvent && dn ? () => void 0 : an(r2, () => {
    t2(i2, false);
  }, e2.options.isScrollingResetDelay), o2 = (r3) => () => {
    let { horizontal: o3, isRtl: s3 } = e2.options;
    i2 = o3 ? n2.scrollLeft * (s3 && -1 || 1) : n2.scrollTop, a2(), t2(i2, r3);
  }, s2 = o2(true), c2 = o2(false);
  n2.addEventListener(`scroll`, s2, un);
  let l2 = e2.options.useScrollendEvent && dn;
  return l2 && n2.addEventListener(`scrollend`, c2, un), () => {
    n2.removeEventListener(`scroll`, s2), l2 && n2.removeEventListener(`scrollend`, c2);
  };
}, pn = (e2, t2, n2) => {
  if (t2?.borderBoxSize) {
    let e3 = t2.borderBoxSize[0];
    if (e3) return Math.round(e3[n2.options.horizontal ? `inlineSize` : `blockSize`]);
  }
  return e2[n2.options.horizontal ? `offsetWidth` : `offsetHeight`];
}, mn = (e2, { adjustments: t2 = 0, behavior: n2 }, r2) => {
  var i2, a2;
  let o2 = e2 + t2;
  (a2 = (i2 = r2.scrollElement)?.scrollTo) == null || a2.call(i2, { [r2.options.horizontal ? `left` : `top`]: o2, behavior: n2 });
}, hn = class {
  constructor(e2) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var e3;
      return (e3 = this.targetWindow?.performance)?.now?.call(e3) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let e3 = null, t2 = () => e3 || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e3 = new this.targetWindow.ResizeObserver((e4) => {
        e4.forEach((e5) => {
          let t3 = () => {
            let t4 = e5.target, n2 = this.indexFromElement(t4);
            if (!t4.isConnected) {
              this.observer.unobserve(t4);
              return;
            }
            this.shouldMeasureDuringScroll(n2) && this.resizeItem(n2, this.options.measureElement(t4, e5, this));
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t3) : t3();
        });
      }));
      return { disconnect: () => {
        var n2;
        (n2 = t2()) == null || n2.disconnect(), e3 = null;
      }, observe: (e4) => t2()?.observe(e4, { box: `border-box` }), unobserve: (e4) => t2()?.unobserve(e4) };
    })(), this.range = null, this.setOptions = (e3) => {
      Object.entries(e3).forEach(([t2, n2]) => {
        n2 === void 0 && delete e3[t2];
      }), this.options = { debug: false, initialOffset: 0, overscan: 1, paddingStart: 0, paddingEnd: 0, scrollPaddingStart: 0, scrollPaddingEnd: 0, horizontal: false, getItemKey: sn, rangeExtractor: cn, onChange: () => {
      }, measureElement: pn, initialRect: { width: 0, height: 0 }, scrollMargin: 0, gap: 0, indexAttribute: `data-index`, initialMeasurementsCache: [], lanes: 1, isScrollingResetDelay: 150, enabled: true, isRtl: false, useScrollendEvent: false, useAnimationFrameWithResizeObserver: false, laneAssignmentMode: `estimate`, ...e3 };
    }, this.notify = (e3) => {
      var t2, n2;
      (n2 = (t2 = this.options).onChange) == null || n2.call(t2, this, e3);
    }, this.maybeNotify = tn(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), (e3) => {
      this.notify(e3);
    }, { key: false, debug: () => this.options.debug, initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null] }), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e3) => e3()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      let e3 = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== e3) {
        if (this.cleanup(), !e3) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = e3, this.scrollElement && `ownerDocument` in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((e4) => {
          this.observer.observe(e4);
        }), this.unsubs.push(this.options.observeElementRect(this, (e4) => {
          this.scrollRect = e4, this.maybeNotify();
        })), this.unsubs.push(this.options.observeElementOffset(this, (e4, t2) => {
          this.scrollAdjustments = 0, this.scrollDirection = t2 ? this.getScrollOffset() < e4 ? `forward` : `backward` : null, this.scrollOffset = e4, this.isScrolling = t2, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
        })), this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? `width` : `height`]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == `function` ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e3, t2) => {
      let n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map();
      for (let i2 = t2 - 1; i2 >= 0; i2--) {
        let t3 = e3[i2];
        if (n2.has(t3.lane)) continue;
        let a2 = r2.get(t3.lane);
        if (a2 == null || t3.end > a2.end ? r2.set(t3.lane, t3) : t3.end < a2.end && n2.set(t3.lane, true), n2.size === this.options.lanes) break;
      }
      return r2.size === this.options.lanes ? Array.from(r2.values()).sort((e4, t3) => e4.end === t3.end ? e4.index - t3.index : e4.end - t3.end)[0] : void 0;
    }, this.getMeasurementOptions = tn(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes, this.options.laneAssignmentMode], (e3, t2, n2, r2, i2, a2, o2) => (this.prevLanes !== void 0 && this.prevLanes !== a2 && (this.lanesChangedFlag = true), this.prevLanes = a2, this.pendingMeasuredCacheIndexes = [], { count: e3, paddingStart: t2, scrollMargin: n2, getItemKey: r2, enabled: i2, lanes: a2, laneAssignmentMode: o2 }), { key: false }), this.getMeasurements = tn(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: e3, paddingStart: t2, scrollMargin: n2, getItemKey: r2, enabled: i2, lanes: a2, laneAssignmentMode: o2 }, s2) => {
      if (!i2) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
      if (this.laneAssignments.size > e3) for (let t3 of this.laneAssignments.keys()) t3 >= e3 && this.laneAssignments.delete(t3);
      this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e4) => {
        this.itemSizeCache.set(e4.key, e4.size);
      }));
      let c2 = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e3 && (this.lanesSettling = false);
      let l2 = this.measurementsCache.slice(0, c2), u2 = Array(a2).fill(void 0);
      for (let e4 = 0; e4 < c2; e4++) {
        let t3 = l2[e4];
        t3 && (u2[t3.lane] = e4);
      }
      for (let i3 = c2; i3 < e3; i3++) {
        let e4 = r2(i3), a3 = this.laneAssignments.get(i3), c3, d2, f2 = o2 === `estimate` || s2.has(e4);
        if (a3 !== void 0 && this.options.lanes > 1) {
          c3 = a3;
          let e5 = u2[c3], r3 = e5 === void 0 ? void 0 : l2[e5];
          d2 = r3 ? r3.end + this.options.gap : t2 + n2;
        } else {
          let e5 = this.options.lanes === 1 ? l2[i3 - 1] : this.getFurthestMeasurement(l2, i3);
          d2 = e5 ? e5.end + this.options.gap : t2 + n2, c3 = e5 ? e5.lane : i3 % this.options.lanes, this.options.lanes > 1 && f2 && this.laneAssignments.set(i3, c3);
        }
        let p2 = s2.get(e4), m2 = typeof p2 == `number` ? p2 : this.options.estimateSize(i3), h2 = d2 + m2;
        l2[i3] = { index: i3, start: d2, size: m2, end: h2, key: e4, lane: c3 }, u2[c3] = i3;
      }
      return this.measurementsCache = l2, l2;
    }, { key: false, debug: () => this.options.debug }), this.calculateRange = tn(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (e3, t2, n2, r2) => this.range = e3.length > 0 && t2 > 0 ? _n({ measurements: e3, outerSize: t2, scrollOffset: n2, lanes: r2 }) : null, { key: false, debug: () => this.options.debug }), this.getVirtualIndexes = tn(() => {
      let e3 = null, t2 = null, n2 = this.calculateRange();
      return n2 && (e3 = n2.startIndex, t2 = n2.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e3, t2]), [this.options.rangeExtractor, this.options.overscan, this.options.count, e3, t2];
    }, (e3, t2, n2, r2, i2) => r2 === null || i2 === null ? [] : e3({ startIndex: r2, endIndex: i2, overscan: t2, count: n2 }), { key: false, debug: () => this.options.debug }), this.indexFromElement = (e3) => {
      let t2 = this.options.indexAttribute, n2 = e3.getAttribute(t2);
      return n2 ? parseInt(n2, 10) : (console.warn(`Missing attribute name '${t2}={index}' on measured element.`), -1);
    }, this.shouldMeasureDuringScroll = (e3) => {
      if (!this.scrollState || this.scrollState.behavior !== `smooth`) return true;
      let t2 = this.scrollState.index ?? this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;
      if (t2 !== void 0 && this.range) {
        let n2 = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), r2 = Math.max(0, t2 - n2), i2 = Math.min(this.options.count - 1, t2 + n2);
        return e3 >= r2 && e3 <= i2;
      }
      return true;
    }, this.measureElement = (e3) => {
      if (!e3) {
        this.elementsCache.forEach((e4, t3) => {
          e4.isConnected || (this.observer.unobserve(e4), this.elementsCache.delete(t3));
        });
        return;
      }
      let t2 = this.indexFromElement(e3), n2 = this.options.getItemKey(t2), r2 = this.elementsCache.get(n2);
      r2 !== e3 && (r2 && this.observer.unobserve(r2), this.observer.observe(e3), this.elementsCache.set(n2, e3)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t2) && this.resizeItem(t2, this.options.measureElement(e3, void 0, this));
    }, this.resizeItem = (e3, t2) => {
      let n2 = this.measurementsCache[e3];
      if (!n2) return;
      let r2 = t2 - (this.itemSizeCache.get(n2.key) ?? n2.size);
      r2 !== 0 && (this.scrollState?.behavior !== `smooth` && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? n2.start < this.getScrollOffset() + this.scrollAdjustments : this.shouldAdjustScrollPositionOnItemSizeChange(n2, r2, this)) && this._scrollToOffset(this.getScrollOffset(), { adjustments: this.scrollAdjustments += r2, behavior: void 0 }), this.pendingMeasuredCacheIndexes.push(n2.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n2.key, t2)), this.notify(false));
    }, this.getVirtualItems = tn(() => [this.getVirtualIndexes(), this.getMeasurements()], (e3, t2) => {
      let n2 = [];
      for (let r2 = 0, i2 = e3.length; r2 < i2; r2++) {
        let i3 = t2[e3[r2]];
        n2.push(i3);
      }
      return n2;
    }, { key: false, debug: () => this.options.debug }), this.getVirtualItemForOffset = (e3) => {
      let t2 = this.getMeasurements();
      if (t2.length !== 0) return nn(t2[gn(0, t2.length - 1, (e4) => nn(t2[e4]).start, e3)]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if (`scrollHeight` in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        let e3 = this.scrollElement.document.documentElement;
        return this.options.horizontal ? e3.scrollWidth - this.scrollElement.innerWidth : e3.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (e3, t2, n2 = 0) => {
      if (!this.scrollElement) return 0;
      let r2 = this.getSize(), i2 = this.getScrollOffset();
      t2 === `auto` && (t2 = e3 >= i2 + r2 ? `end` : `start`), t2 === `center` ? e3 += (n2 - r2) / 2 : t2 === `end` && (e3 -= r2);
      let a2 = this.getMaxScrollOffset();
      return Math.max(Math.min(a2, e3), 0);
    }, this.getOffsetForIndex = (e3, t2 = `auto`) => {
      e3 = Math.max(0, Math.min(e3, this.options.count - 1));
      let n2 = this.getSize(), r2 = this.getScrollOffset(), i2 = this.measurementsCache[e3];
      if (!i2) return;
      if (t2 === `auto`) if (i2.end >= r2 + n2 - this.options.scrollPaddingEnd) t2 = `end`;
      else if (i2.start <= r2 + this.options.scrollPaddingStart) t2 = `start`;
      else return [r2, t2];
      if (t2 === `end` && e3 === this.options.count - 1) return [this.getMaxScrollOffset(), t2];
      let a2 = t2 === `end` ? i2.end + this.options.scrollPaddingEnd : i2.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(a2, t2, i2.size), t2];
    }, this.scrollToOffset = (e3, { align: t2 = `start`, behavior: n2 = `auto` } = {}) => {
      let r2 = this.getOffsetForAlignment(e3, t2), i2 = this.now();
      this.scrollState = { index: null, align: t2, behavior: n2, startedAt: i2, lastTargetOffset: r2, stableFrames: 0 }, this._scrollToOffset(r2, { adjustments: void 0, behavior: n2 }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (e3, { align: t2 = `auto`, behavior: n2 = `auto` } = {}) => {
      e3 = Math.max(0, Math.min(e3, this.options.count - 1));
      let r2 = this.getOffsetForIndex(e3, t2);
      if (!r2) return;
      let [i2, a2] = r2, o2 = this.now();
      this.scrollState = { index: e3, align: a2, behavior: n2, startedAt: o2, lastTargetOffset: i2, stableFrames: 0 }, this._scrollToOffset(i2, { adjustments: void 0, behavior: n2 }), this.scheduleScrollReconcile();
    }, this.scrollBy = (e3, { behavior: t2 = `auto` } = {}) => {
      let n2 = this.getScrollOffset() + e3, r2 = this.now();
      this.scrollState = { index: null, align: `start`, behavior: t2, startedAt: r2, lastTargetOffset: n2, stableFrames: 0 }, this._scrollToOffset(n2, { adjustments: void 0, behavior: t2 }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      let e3 = this.getMeasurements(), t2;
      if (e3.length === 0) t2 = this.options.paddingStart;
      else if (this.options.lanes === 1) t2 = e3[e3.length - 1]?.end ?? 0;
      else {
        let n2 = Array(this.options.lanes).fill(null), r2 = e3.length - 1;
        for (; r2 >= 0 && n2.some((e4) => e4 === null); ) {
          let t3 = e3[r2];
          n2[t3.lane] === null && (n2[t3.lane] = t3.end), r2--;
        }
        t2 = Math.max(...n2.filter((e4) => e4 !== null));
      }
      return Math.max(t2 - this.options.scrollMargin + this.options.paddingEnd, 0);
    }, this._scrollToOffset = (e3, { adjustments: t2, behavior: n2 }) => {
      this.options.scrollToFn(e3, { behavior: n2, adjustments: t2 }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
    }, this.setOptions(e2);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId ?? (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    let e2 = this.scrollState.index == null ? void 0 : this.getOffsetForIndex(this.scrollState.index, this.scrollState.align), t2 = e2 ? e2[0] : this.scrollState.lastTargetOffset, n2 = t2 !== this.scrollState.lastTargetOffset;
    if (!n2 && rn(t2, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
        this.scrollState = null;
        return;
      }
    } else this.scrollState.stableFrames = 0, n2 && (this.scrollState.lastTargetOffset = t2, this.scrollState.behavior = `auto`, this._scrollToOffset(t2, { adjustments: void 0, behavior: `auto` }));
    this.scheduleScrollReconcile();
  }
}, gn = (e2, t2, n2, r2) => {
  for (; e2 <= t2; ) {
    let i2 = (e2 + t2) / 2 | 0, a2 = n2(i2);
    if (a2 < r2) e2 = i2 + 1;
    else if (a2 > r2) t2 = i2 - 1;
    else return i2;
  }
  return e2 > 0 ? e2 - 1 : 0;
};
function _n({ measurements: e2, outerSize: t2, scrollOffset: n2, lanes: r2 }) {
  let i2 = e2.length - 1, a2 = (t3) => e2[t3].start;
  if (e2.length <= r2) return { startIndex: 0, endIndex: i2 };
  let o2 = gn(0, i2, a2, n2), s2 = o2;
  if (r2 === 1) for (; s2 < i2 && e2[s2].end < n2 + t2; ) s2++;
  else if (r2 > 1) {
    let a3 = Array(r2).fill(0);
    for (; s2 < i2 && a3.some((e3) => e3 < n2 + t2); ) {
      let t3 = e2[s2];
      a3[t3.lane] = t3.end, s2++;
    }
    let c2 = Array(r2).fill(n2 + t2);
    for (; o2 >= 0 && c2.some((e3) => e3 >= n2); ) {
      let t3 = e2[o2];
      c2[t3.lane] = t3.start, o2--;
    }
    o2 = Math.max(0, o2 - o2 % r2), s2 = Math.min(i2, s2 + (r2 - 1 - s2 % r2));
  }
  return { startIndex: o2, endIndex: s2 };
}
function vn(e2) {
  let t2 = new hn(u(e2)), n2 = R(t2), i2 = t2._didMount();
  return o(() => u(e2).getScrollElement(), (e3) => {
    e3 && t2._willUpdate();
  }, { immediate: true }), o(() => u(e2), (e3) => {
    t2.setOptions({ ...e3, onChange: (t3, i3) => {
      var a2;
      r(n2), (a2 = e3.onChange) == null || a2.call(e3, t3, i3);
    } }), t2._willUpdate(), r(n2);
  }, { immediate: true }), k(i2), n2;
}
function yn(e2) {
  return vn(S(() => ({ observeElementRect: ln, observeElementOffset: fn, scrollToFn: mn, ...u(e2) })));
}
var bn = E({ __name: `ListboxVirtualizer`, props: { options: { type: Array, required: true }, overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(e2) {
  let t2 = e2, n2 = l(), r2 = Ht(), i2 = ue(), { getItems: a2 } = jt();
  r2.isVirtual.value = true;
  let o2 = S(() => {
    let e3 = i2.value;
    if (e3) {
      let t3 = window.getComputedStyle(e3);
      return { start: Number.parseFloat(t3.paddingBlockStart || t3.paddingTop), end: Number.parseFloat(t3.paddingBlockEnd || t3.paddingBottom) };
    } else return { start: 0, end: 0 };
  }), s2 = yn({ get scrollPaddingStart() {
    return o2.value.start;
  }, get scrollPaddingEnd() {
    return o2.value.end;
  }, get count() {
    return t2.options.length;
  }, get horizontal() {
    return r2.orientation.value === `horizontal`;
  }, estimateSize(e3) {
    return typeof t2.estimateSize == `function` ? t2.estimateSize(e3) : t2.estimateSize ?? 28;
  }, getScrollElement() {
    return i2.value;
  }, overscan: t2.overscan ?? 12 }), c2 = S(() => s2.value.getVirtualItems().map((e3) => {
    let r3 = n2.default({ option: t2.options[e3.index], virtualizer: s2.value, virtualItem: e3 })[0];
    return { item: e3, is: T(r3.type === O && Array.isArray(r3.children) ? r3.children.find((e4) => typeof e4.type != `symbol`) : r3, { key: `${e3.key}`, "data-index": e3.index, "aria-setsize": t2.options.length, "aria-posinset": e3.index + 1, style: { position: `absolute`, top: 0, left: 0, transform: `translateY(${e3.start}px)`, overflowAnchor: `none` } }) };
  }));
  r2.virtualFocusHook.on((e3) => {
    let n3 = t2.options.findIndex((e4) => Array.isArray(r2.modelValue.value) ? Pt(e4, r2.modelValue.value[0], r2.by) : Pt(e4, r2.modelValue.value, r2.by));
    n3 === -1 ? r2.highlightFirstItem() : (e3?.preventDefault(), s2.value.scrollToIndex(n3, { align: `start` }), requestAnimationFrame(() => {
      let t3 = Mt(i2.value);
      t3 && (r2.changeHighlight(t3), e3 && t3?.focus());
    }));
  }), r2.virtualHighlightHook.on((e3) => {
    let n3 = t2.options.findIndex((t3) => Pt(t3, e3, r2.by));
    s2.value.scrollToIndex(n3, { align: `start` }), requestAnimationFrame(() => {
      let e4 = Mt(i2.value);
      e4 && r2.changeHighlight(e4);
    });
  });
  let d2 = de(``, 1e3), f2 = S(() => {
    let e3 = (e4) => t2.textContent ? t2.textContent(e4) : e4?.toString().toLowerCase();
    return t2.options.map((t3, n3) => ({ index: n3, textContent: e3(t3) }));
  });
  function p2(e3, n3) {
    if (!r2.firstValue?.value || !r2.multiple.value || !Array.isArray(r2.modelValue.value)) return;
    let i3 = a2().filter((e4) => e4.ref.dataset.disabled !== ``).find((e4) => e4.ref === r2.highlightedElement.value)?.value;
    if (!i3) return;
    let o3 = null;
    switch (n3) {
      case `prev`:
      case `next`:
        o3 = ke(t2.options, r2.firstValue.value, i3);
        break;
      case `first`:
        o3 = ke(t2.options, r2.firstValue.value, t2.options?.[0]);
        break;
      case `last`:
        o3 = ke(t2.options, r2.firstValue.value, t2.options.at(-1));
        break;
    }
    r2.modelValue.value = o3;
  }
  return r2.virtualKeydownHook.on((e3) => {
    let n3 = e3.altKey || e3.ctrlKey || e3.metaKey;
    if (e3.key === `Tab` && !n3) return;
    let o3 = Lt[e3.key];
    if (n3 && e3.key === `a` && r2.multiple.value ? (e3.preventDefault(), r2.modelValue.value = [...t2.options], o3 = `last`) : e3.shiftKey && o3 && p2(e3, o3), [`first`, `last`].includes(o3)) {
      e3.preventDefault();
      let n4 = o3 === `first` ? 0 : t2.options.length - 1;
      s2.value.scrollToIndex(n4), requestAnimationFrame(() => {
        let e4 = a2(), t3 = o3 === `first` ? e4[0] : e4.at(-1);
        t3 && r2.changeHighlight(t3.ref);
      });
    } else if (!o3 && !n3) {
      d2.value += e3.key;
      let t3 = Number(Q()?.getAttribute(`data-index`)), n4 = f2.value[t3].textContent, a3 = tt(f2.value.map((e4) => e4.textContent ?? ``), d2.value, n4), o4 = f2.value.find((e4) => e4.textContent === a3);
      o4 && (s2.value.scrollToIndex(o4.index, { align: `start` }), requestAnimationFrame(() => {
        let e4 = i2.value.querySelector(`[data-index="${o4.index}"]`);
        e4 instanceof HTMLElement && r2.changeHighlight(e4);
      }));
    }
  }), (e3, t3) => (D(), h(`div`, { "data-reka-virtualizer": ``, style: v({ position: `relative`, width: `100%`, height: `${u(s2).getTotalSize()}px` }) }, [(D(true), h(O, null, g(c2.value, ({ is: e4, item: t4 }) => (D(), F(L(e4), { key: t4.index }))), 128))], 4));
} }), [$, xn] = W(`ComboboxRoot`), Sn = E({ __name: `ComboboxRoot`, props: { open: { type: Boolean, required: false, default: void 0 }, defaultOpen: { type: Boolean, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, openOnFocus: { type: Boolean, required: false, default: false }, openOnClick: { type: Boolean, required: false, default: false }, ignoreFilter: { type: Boolean, required: false }, resetModelValueOnClear: { type: Boolean, required: false, default: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, highlightOnHover: { type: Boolean, required: false, default: true }, by: { type: [String, Function], required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`, `highlight`, `update:open`], setup(e2, { expose: t2, emit: r2 }) {
  let i2 = e2, a2 = r2, { primitiveElement: o2, currentElement: s2 } = Z(), { multiple: l2, disabled: d2, ignoreFilter: p2, resetSearchTermOnSelect: m2, openOnFocus: h2, openOnClick: g2, dir: v2, resetModelValueOnClear: b2, highlightOnHover: x2 } = f(i2), C2 = Le(v2), w2 = q(i2, `modelValue`, a2, { defaultValue: i2.defaultValue ?? (l2.value ? [] : void 0), passive: i2.modelValue === void 0, deep: true }), T2 = q(i2, `open`, a2, { defaultValue: i2.defaultOpen, passive: i2.open === void 0 });
  async function E2(e3) {
    T2.value = e3, U2.value = ``, e3 ? (await N(), o2.value?.highlightSelected(), k2.value = true, M2.value?.focus()) : (k2.value = false, setTimeout(() => {
      !e3 && i2.resetSearchTermOnBlur && O2.trigger();
    }, 1));
  }
  let O2 = se(), k2 = I(false), j2 = I(false), M2 = I(), L2 = I(), R2 = S(() => o2.value?.highlightedElement ?? void 0), B2 = I(/* @__PURE__ */ new Map()), V2 = I(/* @__PURE__ */ new Map()), { contains: H2 } = Re({ sensitivity: `base` }), U2 = I(``), ee2 = S((e3) => {
    if (!U2.value || i2.ignoreFilter || j2.value) return { count: B2.value.size, items: e3?.items ?? /* @__PURE__ */ new Map(), groups: e3?.groups ?? new Set(V2.value.keys()) };
    let t3 = 0, n2 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set();
    for (let [e4, r4] of B2.value) {
      let i3 = H2(r4, U2.value);
      n2.set(e4, +!!i3), i3 && t3++;
    }
    for (let [e4, t4] of V2.value) for (let i3 of t4) if (n2.get(i3) > 0) {
      r3.add(e4);
      break;
    }
    return { count: t3, items: n2, groups: r3 };
  }), W2 = c();
  return _(() => {
    W2?.exposed && (W2.exposed.highlightItem = o2.value?.highlightItem, W2.exposed.highlightFirstItem = o2.value?.highlightFirstItem, W2.exposed.highlightSelected = o2.value?.highlightSelected);
  }), t2({ filtered: ee2, highlightedElement: R2, highlightItem: o2.value?.highlightItem, highlightFirstItem: o2.value?.highlightFirstItem, highlightSelected: o2.value?.highlightSelected }), xn({ modelValue: w2, multiple: l2, disabled: d2, open: T2, onOpenChange: E2, contentId: ``, isUserInputted: k2, isVirtual: j2, inputElement: M2, highlightedElement: R2, onInputElementChange: (e3) => M2.value = e3, triggerElement: L2, onTriggerElementChange: (e3) => L2.value = e3, parentElement: s2, resetSearchTermOnSelect: m2, onResetSearchTerm: O2.on, allItems: B2, allGroups: V2, filterSearch: U2, filterState: ee2, ignoreFilter: p2, openOnFocus: h2, openOnClick: g2, resetModelValueOnClear: b2 }), (e3, t3) => (D(), F(u(Te), null, { default: A(() => [n(u(Wt), y({ ref_key: `primitiveElement`, ref: o2 }, e3.$attrs, { modelValue: u(w2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => P(w2) ? w2.value = e4 : null), style: { pointerEvents: u(T2) ? `auto` : void 0 }, as: e3.as, "as-child": e3.asChild, dir: u(C2), multiple: u(l2), name: e3.name, required: e3.required, disabled: u(d2), "highlight-on-hover": u(x2), by: i2.by, onHighlight: t3[1] || (t3[1] = (e4) => a2(`highlight`, e4)) }), { default: A(() => [z(e3.$slots, `default`, { open: u(T2), modelValue: u(w2) })]), _: 3 }, 16, [`modelValue`, `style`, `as`, `as-child`, `dir`, `multiple`, `name`, `required`, `disabled`, `highlight-on-hover`, `by`])]), _: 3 }));
} }), [Cn, wn] = W(`AutocompleteRoot`), Tn = E({ __name: `AutocompleteRoot`, props: { modelValue: { type: String, required: false }, defaultValue: { type: String, required: false }, open: { type: Boolean, required: false, default: void 0 }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, dir: { type: String, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: false }, openOnFocus: { type: Boolean, required: false, default: false }, openOnClick: { type: Boolean, required: false, default: false }, ignoreFilter: { type: Boolean, required: false }, highlightOnHover: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`, `highlight`, `update:open`], setup(e2, { expose: t2, emit: r2 }) {
  let i2 = e2, a2 = r2, { primitiveElement: o2, currentElement: s2 } = Z(), { disabled: l2, ignoreFilter: d2, openOnFocus: p2, openOnClick: m2, dir: h2, highlightOnHover: g2 } = f(i2), v2 = Le(h2), b2 = q(i2, `modelValue`, a2, { defaultValue: i2.defaultValue ?? ``, passive: i2.modelValue === void 0 }), x2 = q(i2, `open`, a2, { defaultValue: i2.defaultOpen, passive: i2.open === void 0 }), C2 = S({ get: () => b2.value, set: (e3) => {
    e3 == null ? b2.value = `` : b2.value = String(e3);
  } });
  async function w2(e3) {
    x2.value = e3, e3 ? (B2.value = b2.value || ``, await N(), o2.value?.highlightSelected(), E2.value = true, k2.value?.focus()) : (E2.value = false, B2.value = ``, setTimeout(() => {
      !e3 && i2.resetSearchTermOnBlur && T2.trigger();
    }, 1));
  }
  let T2 = se(), E2 = I(false), O2 = I(false), k2 = I(), j2 = I(), M2 = S(() => o2.value?.highlightedElement ?? void 0), P2 = I(/* @__PURE__ */ new Map()), L2 = I(/* @__PURE__ */ new Map()), { contains: R2 } = Re({ sensitivity: `base` }), B2 = I(``), V2 = S((e3) => {
    if (!B2.value || i2.ignoreFilter || O2.value) return { count: P2.value.size, items: e3?.items ?? /* @__PURE__ */ new Map(), groups: e3?.groups ?? new Set(L2.value.keys()) };
    let t3 = 0, n2 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set();
    for (let [e4, r4] of P2.value) {
      let i3 = R2(r4, B2.value);
      n2.set(e4, +!!i3), i3 && t3++;
    }
    for (let [e4, t4] of L2.value) for (let i3 of t4) if (n2.get(i3) > 0) {
      r3.add(e4);
      break;
    }
    return { count: t3, items: n2, groups: r3 };
  }), H2 = c();
  return _(() => {
    H2?.exposed && (H2.exposed.highlightItem = o2.value?.highlightItem, H2.exposed.highlightFirstItem = o2.value?.highlightFirstItem, H2.exposed.highlightSelected = o2.value?.highlightSelected);
  }), t2({ filtered: V2, highlightedElement: M2, highlightItem: o2.value?.highlightItem, highlightFirstItem: o2.value?.highlightFirstItem, highlightSelected: o2.value?.highlightSelected }), xn({ modelValue: C2, multiple: I(false), disabled: l2, open: x2, onOpenChange: w2, contentId: ``, isUserInputted: E2, isVirtual: O2, inputElement: k2, highlightedElement: M2, onInputElementChange: (e3) => k2.value = e3, triggerElement: j2, onTriggerElementChange: (e3) => j2.value = e3, parentElement: s2, resetSearchTermOnSelect: I(false), onResetSearchTerm: T2.on, allItems: P2, allGroups: L2, filterSearch: B2, filterState: V2, ignoreFilter: d2, openOnFocus: p2, openOnClick: m2, resetModelValueOnClear: I(true) }), wn({ modelValue: b2 }), (e3, t3) => (D(), F(u(Te), null, { default: A(() => [n(u(Wt), y({ ref_key: `primitiveElement`, ref: o2 }, e3.$attrs, { modelValue: C2.value, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => C2.value = e4), style: { pointerEvents: u(x2) ? `auto` : void 0 }, as: e3.as, "as-child": e3.asChild, dir: u(v2), name: e3.name, required: e3.required, disabled: u(l2), "highlight-on-hover": u(g2), onHighlight: t3[1] || (t3[1] = (e4) => a2(`highlight`, e4)) }), { default: A(() => [z(e3.$slots, `default`, { open: u(x2), modelValue: u(b2) })]), _: 3 }, 16, [`modelValue`, `style`, `as`, `as-child`, `dir`, `name`, `required`, `disabled`, `highlight-on-hover`])]), _: 3 }));
} }), En = E({ __name: `AutocompleteInput`, props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = $(), a2 = Cn(), s2 = Ht(), { primitiveElement: c2, currentElement: l2 } = Z(), d2 = q(n2, `modelValue`, r2, { passive: n2.modelValue === void 0 });
  a2.modelValue.value && (d2.value = a2.modelValue.value), _(() => {
    l2.value && i2.onInputElementChange(l2.value);
  });
  let f2 = I(false);
  function p2() {
    f2.value = true;
  }
  function m2() {
    N(() => {
      f2.value = false;
      let e3 = l2.value;
      e3 && g2(e3.value);
    });
  }
  function h2(e3) {
    f2.value || i2.open.value || i2.onOpenChange(true);
  }
  function g2(e3) {
    i2.open.value ? i2.filterSearch.value = e3 : (i2.onOpenChange(true), N(() => {
      e3 && (i2.filterSearch.value = e3, s2.highlightFirstItem());
    })), a2.modelValue.value = e3;
  }
  function v2(e3) {
    f2.value || g2(e3.target.value);
  }
  function y2() {
    i2.openOnFocus.value && !i2.open.value && i2.onOpenChange(true);
  }
  function b2() {
    i2.openOnClick.value && !i2.open.value && i2.onOpenChange(true);
  }
  return o(a2.modelValue, (e3) => {
    let t3 = e3 ?? ``;
    d2.value !== t3 && (d2.value = t3);
  }), i2.onResetSearchTerm(() => {
    d2.value = a2.modelValue.value ?? ``;
  }), o(i2.filterState, (e3, t3) => {
    !i2.isVirtual.value && t3.count === 0 && s2.highlightFirstItem();
  }), (e3, t3) => (D(), F(u(Kt), { ref_key: `primitiveElement`, ref: c2, modelValue: u(d2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => P(d2) ? d2.value = e4 : null), as: e3.as, "as-child": e3.asChild, "auto-focus": e3.autoFocus, disabled: e3.disabled, "aria-expanded": u(i2).open.value, "aria-controls": u(i2).contentId, "aria-autocomplete": `list`, role: `combobox`, autocomplete: `off`, onClick: b2, onInput: v2, onKeydown: H(U(h2, [`prevent`]), [`down`, `up`]), onFocus: y2, onCompositionstart: p2, onCompositionend: m2 }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`modelValue`, `as`, `as-child`, `auto-focus`, `disabled`, `aria-expanded`, `aria-controls`, `onKeydown`]));
} }), Dn = E({ __name: `ComboboxAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let { forwardRef: t2 } = X();
  return (e3, r2) => (D(), F(u(xe), { "as-child": ``, reference: e3.reference }, { default: A(() => [n(u(G), y({ ref: u(t2), "as-child": e3.asChild, as: e3.as }, e3.$attrs), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`as-child`, `as`])]), _: 3 }, 8, [`reference`]));
} }), [On, kn] = W(`ComboboxContent`), An = E({ __name: `ComboboxContentImpl`, props: { position: { type: String, required: false, default: `inline` }, bodyLock: { type: Boolean, required: false }, hideWhenEmpty: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, { position: a2 } = f(r2), o2 = $(), s2 = S(() => o2.ignoreFilter.value ? o2.allItems.value.size === 0 : o2.filterState.value.count === 0), { forwardRef: c2, currentElement: l2 } = X();
  Pe(r2.bodyLock), Be(), Ze(o2.parentElement);
  let d2 = K(S(() => r2.position === `popper` ? r2 : {}).value), p2 = { boxSizing: `border-box`, "--reka-combobox-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-combobox-content-available-width": `var(--reka-popper-available-width)`, "--reka-combobox-content-available-height": `var(--reka-popper-available-height)`, "--reka-combobox-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-combobox-trigger-height": `var(--reka-popper-anchor-height)` };
  kn({ position: a2 });
  let m2 = I(false);
  return _(() => {
    o2.inputElement.value && (m2.value = l2.value.contains(o2.inputElement.value), m2.value && o2.inputElement.value.focus());
  }), x(() => {
    let e3 = Q();
    m2.value && (!e3 || e3 === document.body) && o2.triggerElement.value?.focus();
  }), (e3, t3) => (D(), F(u(Gt), { "as-child": `` }, { default: A(() => [n(u(ht), { "as-child": ``, onMountAutoFocus: t3[5] || (t3[5] = U(() => {
  }, [`prevent`])), onUnmountAutoFocus: t3[6] || (t3[6] = U(() => {
  }, [`prevent`])) }, { default: A(() => [n(u(Ce), { "as-child": ``, "disable-outside-pointer-events": e3.disableOutsidePointerEvents, onDismiss: t3[0] || (t3[0] = (e4) => u(o2).onOpenChange(false)), onFocusOutside: t3[1] || (t3[1] = (e4) => {
    u(o2).parentElement.value?.contains(e4.target) && e4.preventDefault(), i2(`focusOutside`, e4);
  }), onInteractOutside: t3[2] || (t3[2] = (e4) => i2(`interactOutside`, e4)), onEscapeKeyDown: t3[3] || (t3[3] = (e4) => i2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[4] || (t3[4] = (e4) => {
    u(o2).parentElement.value?.contains(e4.target) && e4.preventDefault(), i2(`pointerDownOutside`, e4);
  }) }, { default: A(() => [(D(), F(L(u(a2) === `popper` ? u(ve) : u(G)), y({ ...e3.$attrs, ...u(d2) }, { id: u(o2).contentId, ref: u(c2), "data-state": u(o2).open.value ? `open` : `closed`, "data-empty": s2.value ? `` : void 0, style: { display: r2.hideWhenEmpty && s2.value ? `none` : `flex`, flexDirection: `column`, outline: `none`, ...u(a2) === `popper` ? p2 : {} } }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `data-state`, `data-empty`, `style`]))]), _: 3 }, 8, [`disable-outside-pointer-events`])]), _: 3 })]), _: 3 }));
} }), jn = E({ __name: `ComboboxArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2, r2 = $(), i2 = On();
  return X(), (t3, a2) => u(r2).open.value && u(i2).position.value === `popper` ? (D(), F(u(Se), e(y({ key: 0 }, n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16)) : B(`v-if`, true);
} }), Mn = E({ __name: `ComboboxCancel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  X();
  let n2 = $();
  function r2() {
    n2.filterSearch.value = ``, n2.inputElement.value && (n2.inputElement.value.value = ``, n2.inputElement.value.focus()), n2.resetModelValueOnClear?.value && (n2.modelValue.value = n2.multiple.value ? [] : null);
  }
  return (e3, n3) => (D(), F(u(G), y({ type: e3.as === `button` ? `button` : void 0 }, t2, { tabindex: `-1`, onClick: r2 }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`type`]));
} }), Nn = E({ __name: `ComboboxContent`, props: { forceMount: { type: Boolean, required: false }, position: { type: String, required: false }, bodyLock: { type: Boolean, required: false }, hideWhenEmpty: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = Y(e2, t2), { forwardRef: i2 } = X(), a2 = $();
  return a2.contentId || (a2.contentId = J(void 0, `reka-combobox-content`)), (e3, t3) => (D(), F(u(be), { present: e3.forceMount || u(a2).open.value }, { default: A(() => [n(An, y({ ...u(r2), ...e3.$attrs }, { ref: u(i2) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16)]), _: 3 }, 8, [`present`]));
} }), Pn = E({ __name: `ComboboxEmpty`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2, r2 = $(), a2 = S(() => r2.ignoreFilter.value ? r2.allItems.value.size === 0 : r2.filterState.value.count === 0);
  return (t3, r3) => a2.value ? (D(), F(u(G), e(y({ key: 0 }, n2)), { default: A(() => [z(t3.$slots, `default`, {}, () => [r3[0] || (r3[0] = i(`No options`))])]), _: 3 }, 16)) : B(`v-if`, true);
} }), [Fn, In] = W(`ComboboxGroup`), Ln = E({ __name: `ComboboxGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = J(void 0, `reka-combobox-group`), r2 = $(), i2 = S(() => r2.ignoreFilter.value ? true : r2.filterSearch.value ? r2.filterState.value.groups.has(n2) : true), a2 = In({ id: n2, labelId: `` });
  return _(() => {
    r2.allGroups.value.has(n2) || r2.allGroups.value.set(n2, /* @__PURE__ */ new Set());
  }), x(() => {
    r2.allGroups.value.delete(n2);
  }), (e3, r3) => (D(), F(u(Yt), y({ id: u(n2), "aria-labelledby": u(a2).labelId }, t2, { hidden: i2.value ? void 0 : true }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`, `hidden`]));
} }), Rn = E({ __name: `ComboboxInput`, props: { displayValue: { type: Function, required: false }, modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = $(), a2 = Ht(), { primitiveElement: s2, currentElement: c2 } = Z(), l2 = q(n2, `modelValue`, r2, { passive: n2.modelValue === void 0 });
  _(() => {
    c2.value && i2.onInputElementChange(c2.value);
  });
  function d2(e3) {
    i2.open.value || i2.onOpenChange(true);
  }
  function f2(e3) {
    let t3 = e3.target;
    i2.open.value ? i2.filterSearch.value = t3.value : (i2.onOpenChange(true), N(() => {
      t3.value && (i2.filterSearch.value = t3.value, a2.highlightFirstItem());
    }));
  }
  function p2() {
    i2.openOnFocus.value && !i2.open.value && i2.onOpenChange(true);
  }
  function m2(e3) {
    if (!i2.open.value) return;
    let t3 = e3.relatedTarget;
    if (!t3) return;
    let n3 = i2.parentElement.value?.contains(t3), r3 = document.getElementById(i2.contentId)?.contains(t3);
    !n3 && !r3 && i2.onOpenChange(false);
  }
  function h2() {
    i2.openOnClick.value && !i2.open.value && i2.onOpenChange(true);
  }
  function g2() {
    let e3 = i2.modelValue.value;
    n2.displayValue ? l2.value = n2.displayValue(e3) : !i2.multiple.value && e3 && !Array.isArray(e3) ? typeof e3 == `object` ? l2.value = `` : l2.value = e3.toString() : l2.value = ``, N(() => {
      l2.value = l2.value;
    });
  }
  return i2.onResetSearchTerm(() => {
    g2();
  }), o(i2.modelValue, async () => {
    !i2.isUserInputted.value && i2.resetSearchTermOnSelect.value && g2();
  }, { immediate: true, deep: true }), o(i2.filterState, (e3, t3) => {
    !i2.isVirtual.value && t3.count === 0 && a2.highlightFirstItem();
  }), (e3, t3) => (D(), F(u(Kt), { ref_key: `primitiveElement`, ref: s2, modelValue: u(l2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => P(l2) ? l2.value = e4 : null), as: e3.as, "as-child": e3.asChild, "auto-focus": e3.autoFocus, disabled: e3.disabled, "aria-expanded": u(i2).open.value, "aria-controls": u(i2).contentId, "aria-autocomplete": `list`, role: `combobox`, autocomplete: `off`, onClick: h2, onInput: f2, onKeydown: H(U(d2, [`prevent`]), [`down`, `up`]), onFocus: p2, onBlur: m2 }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`modelValue`, `as`, `as-child`, `auto-focus`, `disabled`, `aria-expanded`, `aria-controls`, `onKeydown`]));
} }), zn = E({ __name: `ComboboxItem`, props: { textValue: { type: String, required: false }, value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, a2 = J(void 0, `reka-combobox-item`), o2 = $(), s2 = Fn(null), { primitiveElement: c2, currentElement: l2 } = Z();
  if (n2.value === ``) throw Error(`A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.`);
  let d2 = S(() => {
    if (o2.isVirtual.value || o2.ignoreFilter.value || !o2.filterSearch.value) return true;
    {
      let e3 = o2.filterState.value.items.get(a2);
      return e3 === void 0 ? true : e3 > 0;
    }
  });
  return _(() => {
    o2.allItems.value.set(a2, n2.textValue || l2.value.textContent || l2.value.innerText);
    let e3 = s2?.id;
    e3 && (o2.allGroups.value.has(e3) ? o2.allGroups.value.get(e3)?.add(a2) : o2.allGroups.value.set(e3, /* @__PURE__ */ new Set([a2])));
  }), x(() => {
    o2.allItems.value.delete(a2);
  }), (e3, t3) => d2.value ? (D(), F(u($t), y({ key: 0 }, n2, { id: u(a2), ref_key: `primitiveElement`, ref: c2, disabled: u(o2).disabled.value || e3.disabled, onSelect: t3[0] || (t3[0] = (t4) => {
    r2(`select`, t4), !t4.defaultPrevented && (!u(o2).multiple.value && !e3.disabled && !u(o2).disabled.value ? (t4.preventDefault(), u(o2).onOpenChange(false), u(o2).modelValue.value = n2.value) : u(o2).multiple.value && u(o2).inputElement.value?.focus());
  }) }), { default: A(() => [z(e3.$slots, `default`, {}, () => [i(M(e3.value), 1)])]), _: 3 }, 16, [`id`, `disabled`])) : B(`v-if`, true);
} }), Bn = E({ __name: `ComboboxItemIndicator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(en), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Vn = E({ __name: `ComboboxLabel`, props: { for: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` } }, setup(e2) {
  let t2 = e2;
  X();
  let n2 = Fn({ id: ``, labelId: `` });
  return n2.labelId || (n2.labelId = J(void 0, `reka-combobox-group-label`)), (e3, r2) => (D(), F(u(G), y(t2, { id: u(n2).labelId }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), Hn = E({ __name: `ComboboxPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(ye), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Un = E({ __name: `ComboboxSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2;
  return X(), (e3, n2) => (D(), F(u(G), y(t2, { "aria-hidden": `true` }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), Wn = E({ __name: `ComboboxTrigger`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, { forwardRef: n2, currentElement: r2 } = X(), i2 = $(), a2 = S(() => t2.disabled || i2.disabled.value || false);
  return _(() => {
    r2.value && i2.onTriggerElementChange(r2.value);
  }), (e3, r3) => (D(), F(u(G), y(t2, { ref: u(n2), type: e3.as === `button` ? `button` : void 0, tabindex: `-1`, "aria-label": `Show popup`, "aria-haspopup": `listbox`, "aria-expanded": u(i2).open.value, "aria-controls": u(i2).contentId, "data-state": u(i2).open.value ? `open` : `closed`, disabled: a2.value, "data-disabled": a2.value ? `` : void 0, "aria-disabled": a2.value ?? void 0, onClick: r3[0] || (r3[0] = (e4) => u(i2).onOpenChange(!u(i2).open.value)) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `aria-expanded`, `aria-controls`, `data-state`, `disabled`, `data-disabled`, `aria-disabled`]));
} });
function Gn(e2) {
  let t2 = he({ nonce: I() });
  return S(() => e2?.value || t2.nonce?.value);
}
var Kn = E({ __name: `ComboboxViewport`, props: { nonce: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, { forwardRef: r2 } = X(), { nonce: a2 } = f(t2), o2 = Gn(a2), s2 = $();
  return (e3, a3) => (D(), h(O, null, [n(u(G), y({ ...e3.$attrs, ...t2 }, { ref: u(r2), "data-reka-combobox-viewport": ``, role: `presentation`, style: { position: `relative`, flex: u(s2).isVirtual.value ? void 0 : 1, overflow: `auto` } }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`style`]), n(u(G), { as: `style`, nonce: u(o2) }, { default: A(() => a3[0] || (a3[0] = [i(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } `)])), _: 1, __: [0] }, 8, [`nonce`])], 64));
} }), qn = E({ __name: `ComboboxVirtualizer`, props: { options: { type: Array, required: true }, overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(t2) {
  let n2 = t2, r2 = $();
  return r2.isVirtual.value = true, (t3, r3) => (D(), F(bn, e(V(n2)), { default: A((n3) => [z(t3.$slots, `default`, e(V(n3)))]), _: 3 }, 16));
} }), [Jn, Yn] = W(`RovingFocusGroup`), Xn = E({ __name: `RovingFocusGroup`, props: { orientation: { type: String, required: false, default: void 0 }, dir: { type: String, required: false }, loop: { type: Boolean, required: false, default: false }, currentTabStopId: { type: [String, null], required: false }, defaultCurrentTabStopId: { type: String, required: false }, preventScrollOnEntryFocus: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`entryFocus`, `update:currentTabStopId`], setup(e2, { expose: t2, emit: r2 }) {
  let i2 = e2, a2 = r2, { loop: o2, orientation: s2, dir: c2 } = f(i2), l2 = Le(c2), d2 = q(i2, `currentTabStopId`, a2, { defaultValue: i2.defaultCurrentTabStopId, passive: i2.currentTabStopId === void 0 }), p2 = I(false), m2 = I(false), h2 = I(0), { getItems: g2, CollectionSlot: _2 } = jt({ isProvider: true });
  function v2(e3) {
    let t3 = !m2.value;
    if (e3.currentTarget && e3.target === e3.currentTarget && t3 && !p2.value) {
      let t4 = new CustomEvent(Ft, It);
      if (e3.currentTarget.dispatchEvent(t4), a2(`entryFocus`, t4), !t4.defaultPrevented) {
        let e4 = g2().map((e5) => e5.ref).filter((e5) => e5.dataset.disabled !== ``);
        Bt([e4.find((e5) => e5.getAttribute(`data-active`) === ``), e4.find((e5) => e5.getAttribute(`data-highlighted`) === ``), e4.find((e5) => e5.id === d2.value), ...e4].filter(Boolean), i2.preventScrollOnEntryFocus);
      }
    }
    m2.value = false;
  }
  function y2() {
    setTimeout(() => {
      m2.value = false;
    }, 1);
  }
  return t2({ getItems: g2 }), Yn({ loop: o2, dir: l2, orientation: s2, currentTabStopId: d2, onItemFocus: (e3) => {
    d2.value = e3;
  }, onItemShiftTab: () => {
    p2.value = true;
  }, onFocusableItemAdd: () => {
    h2.value++;
  }, onFocusableItemRemove: () => {
    h2.value--;
  } }), (e3, t3) => (D(), F(u(_2), null, { default: A(() => [n(u(G), { tabindex: p2.value || h2.value === 0 ? -1 : 0, "data-orientation": u(s2), as: e3.as, "as-child": e3.asChild, dir: u(l2), style: { outline: `none` }, onMousedown: t3[0] || (t3[0] = (e4) => m2.value = true), onMouseup: y2, onFocus: v2, onBlur: t3[1] || (t3[1] = (e4) => p2.value = false) }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`tabindex`, `data-orientation`, `as`, `as-child`, `dir`])]), _: 3 }));
} }), Zn = E({ __name: `MenuAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(xe), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Qn = E({ __name: `MenuArrow`, props: { width: { type: Number, required: false }, height: { type: Number, required: false }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Se), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} });
function $n() {
  let e2 = I(false);
  return _(() => {
    le(`keydown`, () => {
      e2.value = true;
    }, { capture: true, passive: true }), le([`pointerdown`, `pointermove`], () => {
      e2.value = false;
    }, { capture: true, passive: true });
  }), e2;
}
var er = me($n), [tr, nr] = W([`MenuRoot`, `MenuSub`], `MenuContext`), [rr, ir] = W(`MenuRoot`), ar = E({ __name: `MenuRoot`, props: { open: { type: Boolean, required: false, default: false }, dir: { type: String, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { modal: i2, dir: a2 } = f(n2), o2 = Le(a2), s2 = q(n2, `open`, r2), c2 = I(), l2 = er();
  return nr({ open: s2, onOpenChange: (e3) => {
    s2.value = e3;
  }, content: c2, onContentChange: (e3) => {
    c2.value = e3;
  } }), ir({ onClose: () => {
    s2.value = false;
  }, isUsingKeyboardRef: l2, dir: o2, modal: i2 }), (e3, t3) => (D(), F(u(Te), null, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }));
} }), [or, sr] = W(`MenuContent`), cr = E({ __name: `MenuContentImpl`, props: d({ loop: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, disableOutsideScroll: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, { ...we }), emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`, `dismiss`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = tr(), s2 = rr(), { trapFocus: c2, disableOutsidePointerEvents: l2, loop: d2 } = f(r2);
  Be(), Pe(l2.value);
  let p2 = I(``), m2 = I(0), h2 = I(0), g2 = I(null), _2 = I(`right`), v2 = I(0), y2 = I(null), b2 = I(), { forwardRef: S2, currentElement: C2 } = X(), { handleTypeaheadSearch: w2 } = $e(), T2 = I();
  function E2(e3) {
    let t3 = je(e3, T2.value || Q(), C2.value, { loop: d2.value, arrowKeyOptions: `vertical`, dir: s2?.dir.value, focus: false, attributeName: `[data-reka-collection-item]:not([data-disabled])` });
    t3 && (T2.value = t3, t3.scrollIntoView({ block: `nearest` }));
  }
  function O2() {
    T2.value && T2.value.click();
  }
  let k2 = I(), j2 = I();
  o(T2, (e3) => {
    j2.value && (e3 === void 0 || e3 !== j2.value.trigger.value) && (j2.value.onOpenChange(false), j2.value = void 0);
  }), o(C2, (e3) => {
    a2.onContentChange(e3);
  }), x(() => {
    window.clearTimeout(m2.value);
  });
  function M2(e3) {
    return _2.value === g2.value?.side && Ot(e3, g2.value?.area);
  }
  async function N2(e3) {
    i2(`openAutoFocus`, e3), !e3.defaultPrevented && (e3.preventDefault(), C2.value?.focus({ preventScroll: true }));
  }
  function P2(e3) {
    if (e3.defaultPrevented) return;
    let t3 = e3.target, n2 = t3.closest(`[data-reka-menu-content]`) === e3.currentTarget, r3 = [`input`, `textarea`].includes(t3.tagName.toLowerCase()), i3 = e3.ctrlKey || e3.altKey || e3.metaKey, a3 = e3.key.length === 1, o2 = je(e3, Q(), C2.value, { loop: d2.value, arrowKeyOptions: `vertical`, dir: s2?.dir.value, focus: true, attributeName: `[data-reka-collection-item]:not([data-disabled])` });
    if (o2) return o2?.focus();
    if (e3.code === `Space`) return;
    let c3 = b2.value?.getItems() ?? [];
    if (n2 && (e3.key === `Tab` && e3.preventDefault(), !i3 && a3 && !r3 && w2(e3.key, c3)), e3.target !== C2.value || !bt.includes(e3.key)) return;
    e3.preventDefault();
    let l3 = [...c3.map((e4) => e4.ref)];
    yt.includes(e3.key) && l3.reverse(), Et(l3);
  }
  function L2(e3) {
    e3?.currentTarget?.contains?.(e3.target) || (window.clearTimeout(m2.value), p2.value = ``);
  }
  function R2(e3) {
    if (!kt(e3)) return;
    let t3 = e3.target, n2 = v2.value !== e3.clientX;
    e3?.currentTarget?.contains(t3) && n2 && (_2.value = e3.clientX > v2.value ? `right` : `left`, v2.value = e3.clientX);
  }
  function B2(e3) {
    kt(e3) && k2.value && k2.value.focus();
  }
  return sr({ onItemEnter: (e3) => !!M2(e3), onItemLeave: (e3) => {
    M2(e3) || ([`INPUT`, `TEXTAREA`].includes(Q()?.tagName || ``) || C2.value?.focus(), y2.value = null);
  }, onTriggerLeave: (e3) => !!M2(e3), searchRef: p2, highlightedElement: T2, onKeydownNavigation: E2, onKeydownEnter: O2, filterElement: k2, onFilterElementChange: (e3) => {
    k2.value = e3;
  }, activeSubmenuContext: j2, pointerGraceTimerRef: h2, onPointerGraceIntentChange: (e3) => {
    g2.value = e3;
  } }), (e3, t3) => (D(), F(u(ht), { "as-child": ``, trapped: u(c2), onMountAutoFocus: N2, onUnmountAutoFocus: t3[7] || (t3[7] = (e4) => i2(`closeAutoFocus`, e4)) }, { default: A(() => [n(u(Ce), { "as-child": ``, "disable-outside-pointer-events": u(l2), onEscapeKeyDown: t3[2] || (t3[2] = (e4) => i2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[3] || (t3[3] = (e4) => i2(`pointerDownOutside`, e4)), onFocusOutside: t3[4] || (t3[4] = (e4) => i2(`focusOutside`, e4)), onInteractOutside: t3[5] || (t3[5] = (e4) => i2(`interactOutside`, e4)), onDismiss: t3[6] || (t3[6] = (e4) => i2(`dismiss`)) }, { default: A(() => [n(u(Xn), { ref_key: `rovingFocusGroupRef`, ref: b2, "current-tab-stop-id": y2.value, "onUpdate:currentTabStopId": t3[0] || (t3[0] = (e4) => y2.value = e4), "as-child": ``, orientation: `vertical`, dir: u(s2).dir.value, loop: u(d2), onEntryFocus: t3[1] || (t3[1] = (e4) => {
    i2(`entryFocus`, e4), u(s2).isUsingKeyboardRef.value || e4.preventDefault();
  }) }, { default: A(() => [n(u(ve), { ref: u(S2), role: `menu`, as: e3.as, "as-child": e3.asChild, "aria-orientation": `vertical`, "data-reka-menu-content": ``, "data-state": u(Ct)(u(a2).open.value), dir: u(s2).dir.value, side: e3.side, "side-offset": e3.sideOffset, align: e3.align, "align-offset": e3.alignOffset, "avoid-collisions": e3.avoidCollisions, "collision-boundary": e3.collisionBoundary, "collision-padding": e3.collisionPadding, "arrow-padding": e3.arrowPadding, "prioritize-position": e3.prioritizePosition, "position-strategy": e3.positionStrategy, "update-position-strategy": e3.updatePositionStrategy, sticky: e3.sticky, "hide-when-detached": e3.hideWhenDetached, reference: e3.reference, onKeydown: P2, onBlur: L2, onPointermove: R2, onPointerenter: B2 }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `data-state`, `dir`, `side`, `side-offset`, `align`, `align-offset`, `avoid-collisions`, `collision-boundary`, `collision-padding`, `arrow-padding`, `prioritize-position`, `position-strategy`, `update-position-strategy`, `sticky`, `hide-when-detached`, `reference`])]), _: 3 }, 8, [`current-tab-stop-id`, `dir`, `loop`])]), _: 3 }, 8, [`disable-outside-pointer-events`])]), _: 3 }, 8, [`trapped`]));
} }), lr = E({ inheritAttrs: false, __name: `MenuItemImpl`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, r2 = or(), { forwardRef: i2, currentElement: a2 } = X(), { CollectionItem: o2 } = jt(), s2 = I(false), c2 = S(() => s2.value || r2.highlightedElement.value === a2.value);
  async function l2(e3) {
    if (!(e3.defaultPrevented || !kt(e3))) {
      if (t2.disabled) r2.onItemLeave(e3);
      else if (!r2.onItemEnter(e3)) {
        let t3 = e3.currentTarget;
        r2.highlightedElement.value = t3, [`INPUT`, `TEXTAREA`].includes(Q()?.tagName || ``) || t3.focus({ preventScroll: true });
      }
    }
  }
  async function d2(e3) {
    await N(), !e3.defaultPrevented && kt(e3) && r2.onItemLeave(e3);
  }
  return (e3, t3) => (D(), F(u(o2), { value: { textValue: e3.textValue } }, { default: A(() => [n(u(G), y({ ref: u(i2), role: `menuitem`, tabindex: `-1` }, e3.$attrs, { as: e3.as, "as-child": e3.asChild, "aria-disabled": e3.disabled || void 0, "data-disabled": e3.disabled ? `` : void 0, "data-highlighted": c2.value ? `` : void 0, onPointermove: l2, onPointerleave: d2, onFocus: t3[0] || (t3[0] = async (t4) => {
    await N(), !(t4.defaultPrevented || e3.disabled) && (s2.value = true, u(r2).highlightedElement.value = t4.currentTarget);
  }), onBlur: t3[1] || (t3[1] = async (e4) => {
    await N(), !e4.defaultPrevented && (s2.value = false);
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`as`, `as-child`, `aria-disabled`, `data-disabled`, `data-highlighted`])]), _: 3 }, 8, [`value`]));
} }), ur = E({ __name: `MenuItem`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { forwardRef: i2, currentElement: a2 } = X(), o2 = rr(), s2 = or(), c2 = I(false);
  async function l2() {
    let e3 = a2.value;
    if (!n2.disabled && e3) {
      let e4 = new CustomEvent(gt, { bubbles: true, cancelable: true });
      r2(`select`, e4), await N(), e4.defaultPrevented ? c2.value = false : o2.onClose();
    }
  }
  return (e3, t3) => (D(), F(lr, y(n2, { ref: u(i2), onClick: l2, onPointerdown: t3[0] || (t3[0] = () => {
    c2.value = true;
  }), onPointerup: t3[1] || (t3[1] = async (e4) => {
    await N(), !e4.defaultPrevented && (c2.value || e4.currentTarget?.click());
  }), onKeydown: t3[2] || (t3[2] = async (t4) => {
    let n3 = u(s2).searchRef.value !== ``;
    e3.disabled || n3 && t4.key === ` ` || u(_t).includes(t4.key) && (t4.currentTarget?.click(), t4.preventDefault());
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), [dr, fr] = W([`MenuCheckboxItem`, `MenuRadioItem`], `MenuItemIndicatorContext`), pr = E({ __name: `MenuItemIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let t2 = dr({ modelValue: I(false) });
  return (e3, r2) => (D(), F(u(be), { present: e3.forceMount || u(wt)(u(t2).modelValue.value) || u(t2).modelValue.value === true }, { default: A(() => [n(u(G), { as: e3.as, "as-child": e3.asChild, "data-state": u(Tt)(u(t2).modelValue.value) }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `data-state`])]), _: 3 }, 8, [`present`]));
} }), mr = E({ __name: `MenuCheckboxItem`, props: { modelValue: { type: [Boolean, String], required: false, default: false }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`, `update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = K(fe(n2, [`modelValue`])), a2 = q(n2, `modelValue`, r2);
  return fr({ modelValue: a2 }), (e3, t3) => (D(), F(ur, y({ role: `menuitemcheckbox` }, u(i2), { "aria-checked": u(wt)(u(a2)) ? `mixed` : u(a2), "data-state": u(Tt)(u(a2)), onSelect: t3[0] || (t3[0] = async (e4) => {
    r2(`select`, e4), u(wt)(u(a2)) ? a2.value = true : a2.value = !u(a2);
  }) }), { default: A(() => [z(e3.$slots, `default`, { modelValue: u(a2) })]), _: 3 }, 16, [`aria-checked`, `data-state`]));
} }), hr = E({ __name: `MenuRootContentModal`, props: { loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = Y(n2, r2), a2 = tr(), { forwardRef: o2, currentElement: s2 } = X();
  return Ze(s2), (e3, t3) => (D(), F(cr, y(u(i2), { ref: u(o2), "trap-focus": u(a2).open.value, "disable-outside-pointer-events": u(a2).open.value, "disable-outside-scroll": true, onDismiss: t3[0] || (t3[0] = (e4) => u(a2).onOpenChange(false)), onFocusOutside: t3[1] || (t3[1] = U((e4) => r2(`focusOutside`, e4), [`prevent`])) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`trap-focus`, `disable-outside-pointer-events`]));
} }), gr = E({ __name: `MenuRootContentNonModal`, props: { loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = Y(e2, t2), r2 = tr();
  return (e3, t3) => (D(), F(cr, y(u(n2), { "trap-focus": false, "disable-outside-pointer-events": false, "disable-outside-scroll": false, onDismiss: t3[0] || (t3[0] = (e4) => u(r2).onOpenChange(false)) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), _r = E({ __name: `MenuContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(t2, { emit: n2 }) {
  let r2 = Y(t2, n2), i2 = tr(), a2 = rr();
  return (t3, n3) => (D(), F(u(be), { present: t3.forceMount || u(i2).open.value }, { default: A(() => [u(a2).modal.value ? (D(), F(hr, e(y({ key: 0 }, { ...t3.$attrs, ...u(r2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16)) : (D(), F(gr, e(y({ key: 1 }, { ...t3.$attrs, ...u(r2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16))]), _: 3 }, 8, [`present`]));
} }), [vr, yr] = W(`MenuGroup`), br = E({ __name: `MenuGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = J(void 0, `reka-menu-group`);
  return yr({ id: n2 }), (e3, r2) => (D(), F(u(G), y({ role: `group` }, t2, { "aria-labelledby": u(n2) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`aria-labelledby`]));
} }), xr = E({ __name: `MenuLabel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` } }, setup(e2) {
  let t2 = e2, n2 = vr({ id: `` });
  return (e3, r2) => (D(), F(u(G), y(t2, { id: u(n2).id || void 0 }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), Sr = E({ __name: `MenuPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(ye), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), [Cr, wr] = W(`MenuRadioGroup`), Tr = E({ __name: `MenuRadioGroup`, props: { modelValue: { type: null, required: false, default: `` }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = n2, a2 = K(fe(r2, [`modelValue`])), o2 = q(r2, `modelValue`, i2);
  return wr({ modelValue: o2, onValueChange: (e2) => {
    o2.value = e2;
  } }), (t3, n3) => (D(), F(br, e(V(u(a2))), { default: A(() => [z(t3.$slots, `default`, { modelValue: u(o2) })]), _: 3 }, 16));
} }), Er = E({ __name: `MenuRadioItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = K(fe(n2, [`value`])), { value: a2 } = f(n2), o2 = Cr(), s2 = S(() => o2.modelValue.value === a2?.value);
  return fr({ modelValue: s2 }), (e3, t3) => (D(), F(ur, y({ role: `menuitemradio` }, u(i2), { "aria-checked": s2.value, "data-state": u(Tt)(s2.value), onSelect: t3[0] || (t3[0] = async (e4) => {
    r2(`select`, e4), u(o2).onValueChange(u(a2));
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`aria-checked`, `data-state`]));
} }), Dr = E({ __name: `MenuSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2;
  return (e3, n2) => (D(), F(u(G), y(t2, { role: `separator`, "aria-orientation": `horizontal` }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), [Or, kr] = W(`MenuSub`), Ar = E({ __name: `MenuSub`, props: { open: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = q(n2, `open`, t2, { defaultValue: false, passive: n2.open === void 0 }), i2 = tr(), a2 = I(), o2 = I();
  return p((e3) => {
    i2?.open.value === false && (r2.value = false), e3(() => r2.value = false);
  }), nr({ open: r2, onOpenChange: (e3) => {
    r2.value = e3;
  }, content: o2, onContentChange: (e3) => {
    o2.value = e3;
  } }), kr({ triggerId: ``, contentId: ``, trigger: a2, onTriggerChange: (e3) => {
    a2.value = e3;
  } }), (e3, t3) => (D(), F(u(Te), null, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }));
} }), jr = E({ __name: `MenuSubContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false, default: true }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = Y(e2, t2), i2 = tr(), a2 = rr(), o2 = Or(), s2 = or(), { forwardRef: c2, currentElement: l2 } = X();
  return o2.contentId || (o2.contentId = J(void 0, `reka-menu-sub-content`)), (e3, t3) => (D(), F(u(be), { present: e3.forceMount || u(i2).open.value }, { default: A(() => [n(cr, y(u(r2), { id: u(o2).contentId, ref: u(c2), "aria-labelledby": u(o2).triggerId, align: `start`, side: u(a2).dir.value === `rtl` ? `left` : `right`, "disable-outside-pointer-events": false, "disable-outside-scroll": false, "trap-focus": false, onOpenAutoFocus: t3[0] || (t3[0] = U((e4) => {
    u(a2).isUsingKeyboardRef.value && u(l2)?.focus();
  }, [`prevent`])), onCloseAutoFocus: t3[1] || (t3[1] = U(() => {
  }, [`prevent`])), onFocusOutside: t3[2] || (t3[2] = (e4) => {
    if (e4.defaultPrevented) return;
    let t4 = u(s2).filterElement.value?.contains(e4.target);
    e4.target !== u(o2).trigger.value && !t4 && u(i2).onOpenChange(false);
  }), onEscapeKeyDown: t3[3] || (t3[3] = (e4) => {
    u(a2).onClose(), e4.preventDefault();
  }), onKeydown: t3[4] || (t3[4] = (e4) => {
    let t4 = e4.currentTarget?.contains(e4.target), n2 = u(St)[u(a2).dir.value].includes(e4.key);
    t4 && n2 && (u(i2).onOpenChange(false), u(s2).filterElement.value ? (u(s2).filterElement.value.focus(), u(s2).highlightedElement.value = u(o2).trigger.value, u(o2).trigger.value?.scrollIntoView({ block: `nearest` })) : u(o2).trigger.value?.focus(), e4.preventDefault());
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`, `side`])]), _: 3 }, 8, [`present`]));
} }), Mr = E({ __name: `MenuSubTrigger`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, r2 = tr(), i2 = rr(), a2 = Or(), s2 = or();
  o(r2.open, (e3) => {
    e3 ? s2.activeSubmenuContext.value = { onOpenChange: r2.onOpenChange, trigger: a2.trigger } : s2.activeSubmenuContext.value?.trigger.value === a2.trigger.value && (s2.activeSubmenuContext.value = void 0);
  });
  let c2 = I(null);
  a2.triggerId || (a2.triggerId = J(void 0, `reka-menu-sub-trigger`));
  function l2() {
    c2.value && window.clearTimeout(c2.value), c2.value = null;
  }
  x(() => {
    l2();
  });
  function d2(e3) {
    kt(e3) && (s2.onItemEnter(e3) || !t2.disabled && !r2.open.value && !c2.value && (s2.onPointerGraceIntentChange(null), c2.value = window.setTimeout(() => {
      r2.onOpenChange(true), l2();
    }, 100)));
  }
  async function f2(e3) {
    if (!kt(e3)) return;
    l2();
    let t3 = r2.content.value?.getBoundingClientRect();
    if (t3?.width) {
      let n2 = r2.content.value?.dataset.side, i3 = n2 === `right`, a3 = i3 ? -5 : 5, o2 = t3[i3 ? `left` : `right`], c3 = t3[i3 ? `right` : `left`];
      s2.onPointerGraceIntentChange({ area: [{ x: e3.clientX + a3, y: e3.clientY }, { x: o2, y: t3.top }, { x: c3, y: t3.top }, { x: c3, y: t3.bottom }, { x: o2, y: t3.bottom }], side: n2 }), window.clearTimeout(s2.pointerGraceTimerRef.value), s2.pointerGraceTimerRef.value = window.setTimeout(() => s2.onPointerGraceIntentChange(null), 300);
    } else {
      if (s2.onTriggerLeave(e3)) return;
      s2.onPointerGraceIntentChange(null);
    }
  }
  async function p2(e3) {
    let n2 = s2.searchRef.value !== ``;
    t2.disabled || n2 && e3.key === ` ` || xt[i2.dir.value].includes(e3.key) && (r2.onOpenChange(true), await N(), r2.content.value?.focus(), e3.preventDefault());
  }
  return (e3, i3) => (D(), F(Zn, { "as-child": `` }, { default: A(() => [n(lr, y(t2, { id: u(a2).triggerId, ref: (e4) => {
    e4 && u(a2)?.onTriggerChange(e4?.$el);
  }, "aria-haspopup": `menu`, "aria-expanded": u(r2).open.value, "aria-controls": u(a2).contentId, "data-state": u(Ct)(u(r2).open.value), onClick: i3[0] || (i3[0] = async (e4) => {
    t2.disabled || e4.defaultPrevented || (e4.currentTarget?.focus(), u(r2).open.value || u(r2).onOpenChange(true));
  }), onPointermove: d2, onPointerleave: f2, onKeydown: p2 }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-expanded`, `aria-controls`, `data-state`])]), _: 3 }));
} }), Nr = E({ __name: `ContextMenuArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Qn), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Pr = E({ __name: `ContextMenuCheckboxItem`, props: { modelValue: { type: [Boolean, String], required: false }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`, `update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(mr), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), [Fr, Ir] = W(`ContextMenuRoot`), Lr = E({ inheritAttrs: false, __name: `ContextMenuRoot`, props: { pressOpenDelay: { type: Number, required: false, default: 700 }, dir: { type: String, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { dir: i2, modal: a2, pressOpenDelay: s2 } = f(n2);
  X();
  let c2 = Le(i2), l2 = I(false);
  return Ir({ open: l2, onOpenChange: (e3) => {
    l2.value = e3;
  }, dir: c2, modal: a2, triggerElement: I(), pressOpenDelay: s2 }), o(l2, (e3) => {
    r2(`update:open`, e3);
  }), (e3, t3) => (D(), F(u(ar), { open: l2.value, "onUpdate:open": t3[0] || (t3[0] = (e4) => l2.value = e4), dir: u(c2), modal: u(a2) }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`open`, `dir`, `modal`]));
} }), Rr = E({ __name: `ContextMenuContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false, default: 0 }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false, default: true }, collisionBoundary: { type: null, required: false, default: () => [] }, collisionPadding: { type: [Number, Object], required: false, default: 0 }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false, default: `partial` }, hideWhenDetached: { type: Boolean, required: false, default: false }, positionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = Y(e2, t2);
  X();
  let r2 = Fr(), i2 = I(false);
  return (e3, t3) => (D(), F(u(_r), y(u(n2), { side: `right`, "side-offset": 2, align: `start`, "update-position-strategy": `always`, style: { "--reka-context-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-context-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-context-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-context-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-context-menu-trigger-height": `var(--reka-popper-anchor-height)` }, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    !e4.defaultPrevented && i2.value && e4.preventDefault(), i2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = (e4) => {
    e4.detail.originalEvent.button === 2 && e4.target === u(r2).triggerElement.value && e4.preventDefault(), !e4.defaultPrevented && !u(r2).modal.value && (i2.value = true);
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), zr = E({ __name: `ContextMenuGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(br), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Br = E({ __name: `ContextMenuItem`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(ur), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Vr = E({ __name: `ContextMenuItemIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(pr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Hr = E({ __name: `ContextMenuLabel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(xr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ur = E({ __name: `ContextMenuPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Sr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Wr = E({ __name: `ContextMenuRadioGroup`, props: { modelValue: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(Tr), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Gr = E({ __name: `ContextMenuRadioItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(Er), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Kr = E({ __name: `ContextMenuSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Dr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), qr = E({ __name: `ContextMenuSub`, props: { defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2;
  X();
  let i2 = q(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 });
  return (e3, t3) => (D(), F(u(Ar), { open: u(i2), "onUpdate:open": t3[0] || (t3[0] = (e4) => P(i2) ? i2.value = e4 : null) }, { default: A(() => [z(e3.$slots, `default`, { open: u(i2) })]), _: 3 }, 8, [`open`]));
} }), Jr = E({ __name: `ContextMenuSubContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = Y(e2, t2);
  return X(), (e3, t3) => (D(), F(u(jr), y(u(n2), { style: { "--reka-context-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-context-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-context-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-context-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-context-menu-trigger-height": `var(--reka-popper-anchor-height)` } }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), Yr = E({ __name: `ContextMenuSubTrigger`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Mr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} });
function Xr(e2) {
  return e2.pointerType !== `mouse`;
}
var Zr = E({ inheritAttrs: false, __name: `ContextMenuTrigger`, props: { disabled: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let { disabled: t2 } = f(e2), { forwardRef: r2, currentElement: i2 } = X(), a2 = Fr(), o2 = I({ x: 0, y: 0 }), s2 = S(() => ({ getBoundingClientRect: () => ({ width: 0, height: 0, left: o2.value.x, right: o2.value.x, top: o2.value.y, bottom: o2.value.y, ...o2.value }) })), c2 = I(0);
  function l2() {
    window.clearTimeout(c2.value);
  }
  function d2(e3) {
    o2.value = { x: e3.clientX, y: e3.clientY }, a2.onOpenChange(true);
  }
  async function p2(e3) {
    t2.value || (await N(), e3.defaultPrevented || (l2(), d2(e3), e3.preventDefault()));
  }
  async function m2(e3) {
    t2.value || (await N(), Xr(e3) && !e3.defaultPrevented && (l2(), c2.value = window.setTimeout(d2, a2.pressOpenDelay.value, e3)));
  }
  async function g2(e3) {
    t2.value || (await N(), Xr(e3) && !e3.defaultPrevented && l2());
  }
  return _(() => {
    i2.value && (a2.triggerElement.value = i2.value);
  }), (e3, i3) => (D(), h(O, null, [n(u(Zn), { as: `template`, reference: s2.value }, null, 8, [`reference`]), n(u(G), y({ ref: u(r2), as: e3.as, "as-child": e3.asChild, "data-state": u(a2).open.value ? `open` : `closed`, "data-disabled": u(t2) ? `` : void 0, style: { WebkitTouchCallout: `none`, pointerEvents: `auto` } }, e3.$attrs, { onContextmenu: p2, onPointerdown: m2, onPointermove: g2, onPointercancel: g2, onPointerup: g2 }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`as`, `as-child`, `data-state`, `data-disabled`])], 64));
} }), [Qr, $r] = W(`PopoverRoot`), ei = E({ __name: `PopoverRoot`, props: { defaultOpen: { type: Boolean, required: false, default: false }, open: { type: Boolean, required: false, default: void 0 }, modal: { type: Boolean, required: false, default: false } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { modal: i2 } = f(n2), a2 = q(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 });
  return $r({ contentId: ``, triggerId: ``, modal: i2, open: a2, onOpenChange: (e3) => {
    a2.value = e3;
  }, onOpenToggle: () => {
    a2.value = !a2.value;
  }, triggerElement: I(), hasCustomAnchor: I(false) }), (e3, t3) => (D(), F(u(Te), null, { default: A(() => [z(e3.$slots, `default`, { open: u(a2), close: () => a2.value = false })]), _: 3 }));
} }), ti = E({ __name: `PopoverAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  X();
  let r2 = Qr();
  return j(() => {
    r2.hasCustomAnchor.value = true;
  }), x(() => {
    r2.hasCustomAnchor.value = false;
  }), (t3, r3) => (D(), F(u(xe), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), ni = E({ __name: `PopoverArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Se), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), ri = E({ __name: `PopoverClose`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  X();
  let n2 = Qr();
  return (e3, r2) => (D(), F(u(G), { type: e3.as === `button` ? `button` : void 0, as: e3.as, "as-child": t2.asChild, onClick: r2[0] || (r2[0] = (e4) => u(n2).onOpenChange(false)) }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`type`, `as`, `as-child`]));
} }), ii = E({ __name: `PopoverContentImpl`, props: { trapFocus: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = K(fe(r2, `trapFocus`, `disableOutsidePointerEvents`)), { forwardRef: o2 } = X(), s2 = Qr();
  return Be(), (e3, t3) => (D(), F(u(ht), { "as-child": ``, loop: ``, trapped: e3.trapFocus, onMountAutoFocus: t3[5] || (t3[5] = (e4) => i2(`openAutoFocus`, e4)), onUnmountAutoFocus: t3[6] || (t3[6] = (e4) => i2(`closeAutoFocus`, e4)) }, { default: A(() => [n(u(Ce), { "as-child": ``, "disable-outside-pointer-events": e3.disableOutsidePointerEvents, onPointerDownOutside: t3[0] || (t3[0] = (e4) => i2(`pointerDownOutside`, e4)), onInteractOutside: t3[1] || (t3[1] = (e4) => i2(`interactOutside`, e4)), onEscapeKeyDown: t3[2] || (t3[2] = (e4) => i2(`escapeKeyDown`, e4)), onFocusOutside: t3[3] || (t3[3] = (e4) => i2(`focusOutside`, e4)), onDismiss: t3[4] || (t3[4] = (e4) => u(s2).onOpenChange(false)) }, { default: A(() => [n(u(ve), y(u(a2), { id: u(s2).contentId, ref: u(o2), "data-state": u(s2).open.value ? `open` : `closed`, "aria-labelledby": u(s2).triggerId, style: { "--reka-popover-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-popover-content-available-width": `var(--reka-popper-available-width)`, "--reka-popover-content-available-height": `var(--reka-popper-available-height)`, "--reka-popover-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-popover-trigger-height": `var(--reka-popper-anchor-height)` }, role: `dialog` }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `data-state`, `aria-labelledby`])]), _: 3 }, 8, [`disable-outside-pointer-events`])]), _: 3 }, 8, [`trapped`]));
} }), ai = E({ __name: `PopoverContentModal`, props: { side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = Qr(), a2 = I(false);
  Pe(true);
  let o2 = Y(n2, r2), { forwardRef: s2, currentElement: c2 } = X();
  return Ze(c2), (e3, t3) => (D(), F(ii, y(u(o2), { ref: u(s2), "trap-focus": u(i2).open.value, "disable-outside-pointer-events": ``, onCloseAutoFocus: t3[0] || (t3[0] = U((e4) => {
    r2(`closeAutoFocus`, e4), a2.value || u(i2).triggerElement.value?.focus();
  }, [`prevent`])), onPointerDownOutside: t3[1] || (t3[1] = (e4) => {
    r2(`pointerDownOutside`, e4);
    let t4 = e4.detail.originalEvent, n3 = t4.button === 0 && t4.ctrlKey === true;
    a2.value = t4.button === 2 || n3;
  }), onFocusOutside: t3[2] || (t3[2] = U(() => {
  }, [`prevent`])) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`trap-focus`]));
} }), oi = E({ __name: `PopoverContentNonModal`, props: { side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = Qr(), a2 = I(false), o2 = I(false), s2 = Y(n2, r2);
  return (e3, t3) => (D(), F(ii, y(u(s2), { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    r2(`closeAutoFocus`, e4), e4.defaultPrevented || (a2.value || u(i2).triggerElement.value?.focus(), e4.preventDefault()), a2.value = false, o2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = async (e4) => {
    r2(`interactOutside`, e4), e4.defaultPrevented || (a2.value = true, e4.detail.originalEvent.type === `pointerdown` && (o2.value = true));
    let t4 = e4.target;
    u(i2).triggerElement.value?.contains(t4) && e4.preventDefault(), e4.detail.originalEvent.type === `focusin` && o2.value && e4.preventDefault();
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), si = E({ __name: `PopoverContent`, props: { forceMount: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = Qr(), a2 = Y(n2, r2), { forwardRef: o2 } = X();
  return i2.contentId || (i2.contentId = J(void 0, `reka-popover-content`)), (e3, t3) => (D(), F(u(be), { present: e3.forceMount || u(i2).open.value }, { default: A(() => [u(i2).modal.value ? (D(), F(ai, y({ key: 0 }, u(a2), { ref: u(o2) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16)) : (D(), F(oi, y({ key: 1 }, u(a2), { ref: u(o2) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16))]), _: 3 }, 8, [`present`]));
} }), ci = E({ __name: `PopoverPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(ye), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), li = E({ __name: `PopoverTrigger`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, r2 = Qr(), { forwardRef: i2, currentElement: a2 } = X();
  return r2.triggerId || (r2.triggerId = J(void 0, `reka-popover-trigger`)), _(() => {
    r2.triggerElement.value = a2.value;
  }), (e3, a3) => (D(), F(L(u(r2).hasCustomAnchor.value ? u(G) : u(xe)), { "as-child": `` }, { default: A(() => [n(u(G), { id: u(r2).triggerId, ref: u(i2), type: e3.as === `button` ? `button` : void 0, "aria-haspopup": `dialog`, "aria-expanded": u(r2).open.value, "aria-controls": u(r2).contentId, "data-state": u(r2).open.value ? `open` : `closed`, as: e3.as, "as-child": t2.asChild, onClick: u(r2).onOpenToggle }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `type`, `aria-expanded`, `aria-controls`, `data-state`, `as`, `as-child`, `onClick`])]), _: 3 }));
} }), ui = E({ __name: `DropdownMenuArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Qn), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), di = E({ __name: `DropdownMenuCheckboxItem`, props: { modelValue: { type: [Boolean, String], required: false }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`, `update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(mr), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), [fi, pi] = W(`DropdownMenuRoot`), mi = E({ __name: `DropdownMenuRoot`, props: { defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false, default: void 0 }, dir: { type: String, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2;
  X();
  let i2 = q(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 }), a2 = I(), { modal: o2, dir: s2 } = f(n2), c2 = Le(s2);
  return pi({ open: i2, onOpenChange: (e3) => {
    i2.value = e3;
  }, onOpenToggle: () => {
    i2.value = !i2.value;
  }, triggerId: ``, triggerElement: a2, contentId: ``, modal: o2, dir: c2 }), (e3, t3) => (D(), F(u(ar), { open: u(i2), "onUpdate:open": t3[0] || (t3[0] = (e4) => P(i2) ? i2.value = e4 : null), dir: u(c2), modal: u(o2) }, { default: A(() => [z(e3.$slots, `default`, { open: u(i2) })]), _: 3 }, 8, [`open`, `dir`, `modal`]));
} }), hi = E({ __name: `DropdownMenuContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = Y(e2, t2);
  X();
  let r2 = fi(), i2 = I(false);
  function a2(e3) {
    e3.defaultPrevented || (i2.value || setTimeout(() => {
      r2.triggerElement.value?.focus();
    }, 0), i2.value = false, e3.preventDefault());
  }
  return r2.contentId || (r2.contentId = J(void 0, `reka-dropdown-menu-content`)), (e3, t3) => (D(), F(u(_r), y(u(n2), { id: u(r2).contentId, "aria-labelledby": u(r2)?.triggerId, style: { "--reka-dropdown-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-dropdown-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-dropdown-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-dropdown-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-dropdown-menu-trigger-height": `var(--reka-popper-anchor-height)` }, onCloseAutoFocus: a2, onInteractOutside: t3[0] || (t3[0] = (e4) => {
    if (e4.defaultPrevented) return;
    let t4 = e4.detail.originalEvent, n3 = t4.button === 0 && t4.ctrlKey === true, a3 = t4.button === 2 || n3;
    (!u(r2).modal.value || a3) && (i2.value = true), u(r2).triggerElement.value?.contains(e4.target) && e4.preventDefault();
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`]));
} }), gi = E({ __name: `DropdownMenuFilter`, props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = q(n2, `modelValue`, t2, { defaultValue: ``, passive: n2.modelValue === void 0 }), i2 = rr(), s2 = or(), c2 = Or(null);
  o(r2, (e3) => {
    s2.searchRef.value = e3 ?? ``;
  }, { immediate: true });
  let { primitiveElement: l2, currentElement: d2 } = Z(), f2 = S(() => n2.disabled || false), p2 = I();
  a(() => p2.value = s2.highlightedElement.value?.id), _(() => {
    s2.onFilterElementChange(d2.value), setTimeout(() => {
      n2.autoFocus && (!c2 || i2.isUsingKeyboardRef.value) && d2.value?.focus();
    }, 1);
  }), x(() => {
    s2.onFilterElementChange(void 0), s2.searchRef.value = ``;
  });
  function m2(e3) {
    if (f2.value) return;
    let t3 = e3.target;
    r2.value = t3.value, s2.searchRef.value = t3.value;
  }
  function h2(e3) {
    f2.value || ([`ArrowDown`, `ArrowUp`, `Home`, `End`].includes(e3.key) ? (e3.preventDefault(), s2.onKeydownNavigation(e3)) : e3.key === `Enter` ? (e3.preventDefault(), s2.onKeydownEnter(e3)) : e3.key === `Escape` && r2.value && (e3.stopPropagation(), r2.value = ``, s2.searchRef.value = ``));
  }
  return (e3, t3) => (D(), F(u(G), { ref_key: `primitiveElement`, ref: l2, as: e3.as, "as-child": e3.asChild, value: u(r2), disabled: f2.value ? `` : void 0, "data-disabled": f2.value ? `` : void 0, "aria-disabled": f2.value ? true : void 0, "aria-activedescendant": p2.value, type: `text`, role: `searchbox`, onInput: m2, onKeydown: h2 }, { default: A(() => [z(e3.$slots, `default`, { modelValue: u(r2) })]), _: 3 }, 8, [`as`, `as-child`, `value`, `disabled`, `data-disabled`, `aria-disabled`, `aria-activedescendant`]));
} }), _i = E({ __name: `DropdownMenuGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(br), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), vi = E({ __name: `DropdownMenuItem`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(ur), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), yi = E({ __name: `DropdownMenuItemIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(pr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), bi = E({ __name: `DropdownMenuLabel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(xr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), xi = E({ __name: `DropdownMenuPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Sr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Si = E({ __name: `DropdownMenuRadioGroup`, props: { modelValue: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = _e(n2);
  return X(), (t3, n3) => (D(), F(u(Tr), e(V({ ...r2, ...u(i2) })), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ci = E({ __name: `DropdownMenuRadioItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = Y(t2, n2);
  return X(), (t3, n3) => (D(), F(u(Er), e(V(u(r2))), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), wi = E({ __name: `DropdownMenuSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Dr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ti = E({ __name: `DropdownMenuSub`, props: { defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = q(n2, `open`, t2, { passive: n2.open === void 0, defaultValue: n2.defaultOpen ?? false });
  return X(), (e3, t3) => (D(), F(u(Ar), { open: u(r2), "onUpdate:open": t3[0] || (t3[0] = (e4) => P(r2) ? r2.value = e4 : null) }, { default: A(() => [z(e3.$slots, `default`, { open: u(r2) })]), _: 3 }, 8, [`open`]));
} }), Ei = E({ __name: `DropdownMenuSubContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = Y(e2, t2);
  return X(), (e3, t3) => (D(), F(u(jr), y(u(n2), { style: { "--reka-dropdown-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-dropdown-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-dropdown-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-dropdown-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-dropdown-menu-trigger-height": `var(--reka-popper-anchor-height)` } }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16));
} }), Di = E({ __name: `DropdownMenuSubTrigger`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Mr), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Oi = E({ __name: `DropdownMenuTrigger`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, r2 = fi(), { forwardRef: i2, currentElement: a2 } = X();
  return _(() => {
    r2.triggerElement = a2;
  }), r2.triggerId || (r2.triggerId = J(void 0, `reka-dropdown-menu-trigger`)), (e3, a3) => (D(), F(u(Zn), { "as-child": `` }, { default: A(() => [n(u(G), { id: u(r2).triggerId, ref: u(i2), type: e3.as === `button` ? `button` : void 0, "as-child": t2.asChild, as: e3.as, "aria-haspopup": `menu`, "aria-expanded": u(r2).open.value, "aria-controls": u(r2).open.value ? u(r2).contentId : void 0, "data-disabled": e3.disabled ? `` : void 0, disabled: e3.disabled, "data-state": u(r2).open.value ? `open` : `closed`, onClick: a3[0] || (a3[0] = async (t3) => {
    !e3.disabled && t3.button === 0 && t3.ctrlKey === false && (u(r2)?.onOpenToggle(), await N(), u(r2).open.value && t3.preventDefault());
  }), onKeydown: a3[1] || (a3[1] = H((t3) => {
    e3.disabled || ([`Enter`, ` `].includes(t3.key) && u(r2).onOpenToggle(), t3.key === `ArrowDown` && u(r2).onOpenChange(true), [`Enter`, ` `, `ArrowDown`].includes(t3.key) && t3.preventDefault());
  }, [`enter`, `space`, `arrow-down`])) }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `type`, `as-child`, `as`, `aria-expanded`, `aria-controls`, `data-disabled`, `disabled`, `data-state`])]), _: 3 }));
} }), ki = E({ __name: `HoverCardArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return X(), (t3, r2) => (D(), F(u(Se), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), [Ai, ji] = W(`HoverCardRoot`), Mi = E({ __name: `HoverCardRoot`, props: { defaultOpen: { type: Boolean, required: false, default: false }, open: { type: Boolean, required: false, default: void 0 }, openDelay: { type: Number, required: false, default: 700 }, closeDelay: { type: Number, required: false, default: 300 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { openDelay: i2, closeDelay: a2 } = f(n2);
  X();
  let o2 = q(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 }), s2 = I(0), c2 = I(0), l2 = I(false), d2 = I(false), p2 = I(false), m2 = I();
  function h2() {
    clearTimeout(c2.value), s2.value = window.setTimeout(() => o2.value = true, i2.value);
  }
  function g2() {
    clearTimeout(s2.value), !l2.value && !d2.value && (c2.value = window.setTimeout(() => o2.value = false, a2.value));
  }
  function _2() {
    o2.value = false;
  }
  return ji({ open: o2, onOpenChange(e3) {
    o2.value = e3;
  }, onOpen: h2, onClose: g2, onDismiss: _2, hasSelectionRef: l2, isPointerDownOnContentRef: d2, isPointerInTransitRef: p2, triggerElement: m2 }), (e3, t3) => (D(), F(u(Te), null, { default: A(() => [z(e3.$slots, `default`, { open: u(o2) })]), _: 3 }));
} });
function Ni(e2) {
  return (t2) => t2.pointerType === `touch` ? void 0 : e2();
}
function Pi(e2) {
  let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
var Fi = E({ __name: `HoverCardContentImpl`, props: { side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = K(r2), { forwardRef: o2, currentElement: s2 } = X(), c2 = Ai(), { isPointerInTransit: l2, onPointerExit: d2 } = ge(c2.triggerElement, s2);
  oe(c2.isPointerInTransitRef, l2, { direction: `rtl` }), d2(() => {
    c2.onClose();
  });
  let f2 = I(false), m2;
  p((e3) => {
    if (f2.value) {
      let t3 = document.body;
      m2 = t3.style.userSelect || t3.style.webkitUserSelect, t3.style.userSelect = `none`, t3.style.webkitUserSelect = `none`, e3(() => {
        t3.style.userSelect = m2, t3.style.webkitUserSelect = m2;
      });
    }
  });
  function h2() {
    f2.value = false, c2.isPointerDownOnContentRef.value = false, N(() => {
      document.getSelection()?.toString() !== `` && (c2.hasSelectionRef.value = true);
    });
  }
  return _(() => {
    s2.value && (document.addEventListener(`pointerup`, h2), Pi(s2.value).forEach((e3) => e3.setAttribute(`tabindex`, `-1`))), le(window, `scroll`, (e3) => {
      e3.target?.contains(c2.triggerElement.value) && c2.onDismiss();
    }, { capture: true });
  }), x(() => {
    document.removeEventListener(`pointerup`, h2), c2.hasSelectionRef.value = false, c2.isPointerDownOnContentRef.value = false;
  }), (e3, t3) => (D(), F(u(Ce), { "as-child": ``, "disable-outside-pointer-events": false, onEscapeKeyDown: t3[1] || (t3[1] = (e4) => i2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[2] || (t3[2] = (e4) => i2(`pointerDownOutside`, e4)), onFocusOutside: t3[3] || (t3[3] = U((e4) => i2(`focusOutside`, e4), [`prevent`])), onDismiss: u(c2).onDismiss }, { default: A(() => [n(u(ve), y({ ...u(a2), ...e3.$attrs }, { ref: u(o2), "data-state": u(c2).open.value ? `open` : `closed`, style: { userSelect: f2.value ? `text` : void 0, WebkitUserSelect: f2.value ? `text` : void 0, "--reka-hover-card-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-hover-card-content-available-width": `var(--reka-popper-available-width)`, "--reka-hover-card-content-available-height": `var(--reka-popper-available-height)`, "--reka-hover-card-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-hover-card-trigger-height": `var(--reka-popper-anchor-height)` }, onPointerdown: t3[0] || (t3[0] = (e4) => {
    e4.currentTarget.contains(e4.target) && (f2.value = true), u(c2).hasSelectionRef.value = false, u(c2).isPointerDownOnContentRef.value = true;
  }) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16, [`data-state`, `style`])]), _: 3 }, 8, [`onDismiss`]));
} }), Ii = E({ __name: `HoverCardContent`, props: { forceMount: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = Y(e2, t2), { forwardRef: i2 } = X(), a2 = Ai();
  return (e3, t3) => (D(), F(u(be), { present: e3.forceMount || u(a2).open.value }, { default: A(() => [n(Fi, y(u(r2), { ref: u(i2), onPointerenter: t3[0] || (t3[0] = (e4) => u(Ni)(u(a2).onOpen)(e4)) }), { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 16)]), _: 3 }, 8, [`present`]));
} }), Li = E({ __name: `HoverCardPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(ye), e(V(n2)), { default: A(() => [z(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ri = E({ __name: `HoverCardTrigger`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `a` } }, setup(e2) {
  let { forwardRef: t2, currentElement: r2 } = X(), i2 = Ai();
  i2.triggerElement = r2;
  function a2() {
    setTimeout(() => {
      !i2.isPointerInTransitRef.value && !i2.open.value && i2.onClose();
    }, 0);
  }
  return (e3, r3) => (D(), F(u(xe), { "as-child": ``, reference: e3.reference }, { default: A(() => [n(u(G), { ref: u(t2), "as-child": e3.asChild, as: e3.as, "data-state": u(i2).open.value ? `open` : `closed`, "data-grace-area-trigger": ``, onPointerenter: r3[0] || (r3[0] = (e4) => u(Ni)(u(i2).onOpen)(e4)), onPointerleave: r3[1] || (r3[1] = (e4) => u(Ni)(a2)(e4)), onFocus: r3[2] || (r3[2] = (e4) => u(i2).onOpen()), onBlur: r3[3] || (r3[3] = (e4) => u(i2).onClose()) }, { default: A(() => [z(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`, `data-state`])]), _: 3 }, 8, [`reference`]));
} }), zi = { Root: Tn, Input: En, Anchor: Dn, Empty: Pn, Trigger: Wn, Cancel: Mn, Group: Ln, Label: Vn, Content: Nn, Viewport: Kn, Virtualizer: qn, Item: zn, ItemIndicator: Bn, Separator: Un, Arrow: jn, Portal: Hn }, Bi = { Root: Sn, Input: Rn, Anchor: Dn, Empty: Pn, Trigger: Wn, Cancel: Mn, Group: Ln, Label: Vn, Content: Nn, Viewport: Kn, Virtualizer: qn, Item: zn, ItemIndicator: Bn, Separator: Un, Arrow: jn, Portal: Hn }, Vi = { Root: Lr, Trigger: Zr, Portal: Ur, Content: Rr, Arrow: Nr, Item: Br, Group: zr, Separator: Kr, CheckboxItem: Pr, ItemIndicator: Vr, Label: Hr, RadioGroup: Wr, RadioItem: Gr, Sub: qr, SubContent: Jr, SubTrigger: Yr }, Hi = { Root: mi, Trigger: Oi, Portal: xi, Content: hi, Arrow: ui, Item: vi, Group: _i, Separator: wi, CheckboxItem: di, ItemIndicator: yi, Label: bi, RadioGroup: Si, RadioItem: Ci, Sub: Ti, SubContent: Ei, SubTrigger: Di, Filter: gi }, Ui = { Root: Mi, Trigger: Ri, Portal: Li, Content: Ii, Arrow: ki }, Wi = { Root: ei, Trigger: li, Portal: ci, Content: si, Arrow: ni, Close: ri, Anchor: ti };
export {
  Ct as A,
  Pe as B,
  Wt as C,
  Vt as D,
  zt as E,
  $e as F,
  Q as H,
  Ze as I,
  Be as L,
  ct as M,
  ut as N,
  jt as O,
  tt as P,
  Re as R,
  Gt as S,
  Bt as T,
  ke as U,
  je as V,
  en as _,
  Ui as a,
  qt as b,
  mi as c,
  Lr as d,
  Xn as f,
  yn as g,
  bn as h,
  Hi as i,
  ht as j,
  Et as k,
  ui as l,
  Gn as m,
  Bi as n,
  Wi as o,
  Jn as p,
  Vi as r,
  Oi as s,
  zi as t,
  Zr as u,
  $t as v,
  Lt as w,
  Kt as x,
  Yt as y,
  Le as z
};
