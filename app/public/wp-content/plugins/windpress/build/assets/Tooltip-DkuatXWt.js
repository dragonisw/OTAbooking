import { $n as e, B as t, D as n, Dn as r, E as i, En as a, Ht as o, J as s, L as c, Lt as l, On as u, Pt as d, Q as f, Tn as p, Ut as m, Wt as h, Zn as g, an as _, b as v, bn as y, bt as b, ct as x, er as S, et as C, ft as ee, g as w, gn as te, jn as ne, jt as T, k as E, mt as D, nr as re, o as ie, pn as ae, pt as oe, qt as O, tr as se, tt as ce, u as le, v as k, vn as A, wn as ue, wt as de, xn as fe, xt as j, y as M, z as pe } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { l as me, t as he } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { E as N, J as ge, S as P, T as _e, W as ve, b as ye, m as be, q as xe, w as Se, x as Ce } from "./Button-BArxwKIq.js";
import { A as we, I as Te, S as Ee, T as De, a as Oe, b as ke, f as Ae, i as je, j as Me, m as Ne, o as Pe, x as Fe, z as Ie } from "./dist-BY3QSpe-.js";
import { a as Le, c as Re, d as ze, f as F, h as Be, i as Ve, l as He, m as Ue, o as We, p as Ge, r as Ke, s as qe, t as Je, u as I } from "./floating-ui.core-ShRDH5Xp.js";
function Ye(e2, t2, n2) {
  let r2 = n2.originalEvent.target, i2 = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n2 });
  t2 && r2.addEventListener(e2, t2, { once: true }), r2.dispatchEvent(i2);
}
function Xe(e2) {
  return e2 == null;
}
var [Ze, Qe] = N(`ConfigProvider`), $e = E({ inheritAttrs: false, __name: `ConfigProvider`, props: { dir: { type: String, required: false, default: `ltr` }, locale: { type: String, required: false, default: `en` }, scrollBody: { type: [Boolean, Object], required: false, default: true }, nonce: { type: String, required: false, default: void 0 }, useId: { type: Function, required: false, default: void 0 } }, setup(e2) {
  let t2 = e2, { dir: n2, locale: r2, scrollBody: i2, nonce: a2 } = p(t2);
  return Qe({ dir: n2, locale: r2, scrollBody: i2, nonce: a2, useId: t2.useId }), (e3, t3) => j(e3.$slots, `default`);
} });
function et(e2) {
  let t2 = c(), n2 = t2?.type.emits, r2 = {};
  return n2?.length || console.warn(`No emitted event found. Please check component: ${t2?.type.__name}`), n2?.forEach((t3) => {
    r2[re(ne(t3))] = (...n3) => e2(t3, ...n3);
  }), r2;
}
function L() {
  let e2 = c(), t2 = A(), n2 = w(() => i2());
  oe(() => {
    n2.value !== i2() && r(t2);
  });
  function i2() {
    return t2.value && `$el` in t2.value && [`#text`, `#comment`].includes(t2.value.$el.nodeName) ? t2.value.$el.nextElementSibling : Pe(t2);
  }
  let a2 = Object.assign({}, e2.exposed), o2 = {};
  for (let t3 in e2.props) Object.defineProperty(o2, t3, { enumerable: true, configurable: true, get: () => e2.props[t3] });
  if (Object.keys(a2).length > 0) for (let e3 in a2) Object.defineProperty(o2, e3, { enumerable: true, configurable: true, get: () => a2[e3] });
  Object.defineProperty(o2, `$el`, { enumerable: true, configurable: true, get: () => e2.vnode.el }), e2.exposed = o2;
  function s2(n3) {
    if (t2.value = n3, n3 && (Object.defineProperty(o2, `$el`, { enumerable: true, configurable: true, get: () => n3 instanceof Element ? n3 : n3.$el }), !(n3 instanceof Element) && !Object.hasOwn(n3, `$el`))) {
      let t3 = n3.$.exposed, r2 = Object.assign({}, o2);
      for (let e3 in t3) Object.defineProperty(r2, e3, { enumerable: true, configurable: true, get: () => t3[e3] });
      e2.exposed = r2;
    }
  }
  return { forwardRef: s2, currentRef: t2, currentElement: n2 };
}
function tt(e2, t2) {
  let n2 = Se(e2), r2 = t2 ? et(t2) : {};
  return w(() => ({ ...n2.value, ...r2 }));
}
function nt(e2, t2) {
  let n2 = Me(false, 300);
  Te(() => {
    n2.value = false;
  });
  let r2 = A(null), i2 = Ee();
  function a2() {
    r2.value = null, n2.value = false;
  }
  function o2(e3, t3) {
    if (!t3) return;
    let i3 = e3.currentTarget, a3 = { x: e3.clientX, y: e3.clientY }, o3 = it(a3, rt(a3, i3.getBoundingClientRect()), 1), s2 = at(t3.getBoundingClientRect());
    r2.value = st([...o3, ...s2]), n2.value = true;
  }
  return m((n3) => {
    if (e2.value && t2.value) {
      let r3 = (e3) => o2(e3, t2.value), i3 = (t3) => o2(t3, e2.value);
      e2.value.addEventListener(`pointerleave`, r3), t2.value.addEventListener(`pointerleave`, i3), n3(() => {
        e2.value?.removeEventListener(`pointerleave`, r3), t2.value?.removeEventListener(`pointerleave`, i3);
      });
    }
  }), m((n3) => {
    if (r2.value) {
      let o3 = (n4) => {
        if (!r2.value || !(n4.target instanceof Element)) return;
        let o4 = n4.target, s2 = { x: n4.clientX, y: n4.clientY }, c2 = e2.value?.contains(o4) || t2.value?.contains(o4), l2 = !ot(s2, r2.value), u2 = !!o4.closest(`[data-grace-area-trigger]`);
        c2 ? a2() : (l2 || u2) && (a2(), i2.trigger());
      };
      e2.value?.ownerDocument.addEventListener(`pointermove`, o3), n3(() => e2.value?.ownerDocument.removeEventListener(`pointermove`, o3));
    }
  }), { isPointerInTransit: n2, onPointerExit: i2.on };
}
function rt(e2, t2) {
  let n2 = Math.abs(t2.top - e2.y), r2 = Math.abs(t2.bottom - e2.y), i2 = Math.abs(t2.right - e2.x), a2 = Math.abs(t2.left - e2.x);
  switch (Math.min(n2, r2, i2, a2)) {
    case a2:
      return `left`;
    case i2:
      return `right`;
    case n2:
      return `top`;
    case r2:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function it(e2, t2, n2 = 5) {
  let r2 = [];
  switch (t2) {
    case `top`:
      r2.push({ x: e2.x - n2, y: e2.y + n2 }, { x: e2.x + n2, y: e2.y + n2 });
      break;
    case `bottom`:
      r2.push({ x: e2.x - n2, y: e2.y - n2 }, { x: e2.x + n2, y: e2.y - n2 });
      break;
    case `left`:
      r2.push({ x: e2.x + n2, y: e2.y - n2 }, { x: e2.x + n2, y: e2.y + n2 });
      break;
    case `right`:
      r2.push({ x: e2.x - n2, y: e2.y - n2 }, { x: e2.x - n2, y: e2.y + n2 });
      break;
  }
  return r2;
}
function at(e2) {
  let { top: t2, right: n2, bottom: r2, left: i2 } = e2;
  return [{ x: i2, y: t2 }, { x: n2, y: t2 }, { x: n2, y: r2 }, { x: i2, y: r2 }];
}
function ot(e2, t2) {
  let { x: n2, y: r2 } = e2, i2 = false;
  for (let e3 = 0, a2 = t2.length - 1; e3 < t2.length; a2 = e3++) {
    let o2 = t2[e3].x, s2 = t2[e3].y, c2 = t2[a2].x, l2 = t2[a2].y;
    s2 > r2 != l2 > r2 && n2 < (c2 - o2) * (r2 - s2) / (l2 - s2) + o2 && (i2 = !i2);
  }
  return i2;
}
function st(e2) {
  let t2 = e2.slice();
  return t2.sort((e3, t3) => e3.x < t3.x ? -1 : e3.x > t3.x ? 1 : e3.y < t3.y ? -1 : +(e3.y > t3.y)), ct(t2);
}
function ct(e2) {
  if (e2.length <= 1) return e2.slice();
  let t2 = [];
  for (let n3 = 0; n3 < e2.length; n3++) {
    let r2 = e2[n3];
    for (; t2.length >= 2; ) {
      let e3 = t2.at(-1), n4 = t2[t2.length - 2];
      if ((e3.x - n4.x) * (r2.y - n4.y) >= (e3.y - n4.y) * (r2.x - n4.x)) t2.pop();
      else break;
    }
    t2.push(r2);
  }
  t2.pop();
  let n2 = [];
  for (let t3 = e2.length - 1; t3 >= 0; t3--) {
    let r2 = e2[t3];
    for (; n2.length >= 2; ) {
      let e3 = n2.at(-1), t4 = n2[n2.length - 2];
      if ((e3.x - t4.x) * (r2.y - t4.y) >= (e3.y - t4.y) * (r2.x - t4.x)) n2.pop();
      else break;
    }
    n2.push(r2);
  }
  return n2.pop(), t2.length === 1 && n2.length === 1 && t2[0].x === n2[0].x && t2[0].y === n2[0].y ? t2 : t2.concat(n2);
}
var lt = 0;
function ut(e2, t2 = `reka`) {
  if (e2) return e2;
  let n2;
  return n2 = `useId` in he ? d?.() : Ze({ useId: void 0 }).useId?.() ?? `${++lt}`, t2 ? `${t2}-${n2}` : n2;
}
function dt(e2) {
  let t2 = A(), n2 = w(() => t2.value?.width ?? 0), r2 = w(() => t2.value?.height ?? 0);
  return x(() => {
    let n3 = Pe(e2);
    if (n3) {
      t2.value = { width: n3.offsetWidth, height: n3.offsetHeight };
      let e3 = new ResizeObserver((e4) => {
        if (!Array.isArray(e4) || !e4.length) return;
        let r3 = e4[0], i2, a2;
        if (`borderBoxSize` in r3) {
          let e5 = r3.borderBoxSize, t3 = Array.isArray(e5) ? e5[0] : e5;
          i2 = t3.inlineSize, a2 = t3.blockSize;
        } else i2 = n3.offsetWidth, a2 = n3.offsetHeight;
        t2.value = { width: i2, height: a2 };
      });
      return e3.observe(n3, { box: `border-box` }), () => e3.unobserve(n3);
    } else t2.value = void 0;
  }), { width: n2, height: r2 };
}
function ft(e2, t2) {
  let n2 = A(e2);
  function r2(e3) {
    return t2[n2.value][e3] ?? n2.value;
  }
  return { state: n2, dispatch: (e3) => {
    n2.value = r2(e3);
  } };
}
function pt(e2, t2) {
  let n2 = A({}), r2 = A(`none`), i2 = A(e2), a2 = e2.value ? `mounted` : `unmounted`, s2, c2 = t2.value?.ownerDocument.defaultView ?? je, { state: l2, dispatch: u2 } = ft(a2, { mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` }, unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` }, unmounted: { MOUNT: `mounted` } }), d2 = (e3) => {
    if (De) {
      let n3 = new CustomEvent(e3, { bubbles: false, cancelable: false });
      t2.value?.dispatchEvent(n3);
    }
  };
  o(e2, async (e3, i3) => {
    let a3 = i3 !== e3;
    if (await ce(), a3) {
      let a4 = r2.value, o2 = mt(t2.value);
      e3 ? (u2(`MOUNT`), d2(`enter`), o2 === `none` && d2(`after-enter`)) : o2 === `none` || o2 === `undefined` || n2.value?.display === `none` ? (u2(`UNMOUNT`), d2(`leave`), d2(`after-leave`)) : i3 && a4 !== o2 ? (u2(`ANIMATION_OUT`), d2(`leave`)) : (u2(`UNMOUNT`), d2(`after-leave`));
    }
  }, { immediate: true });
  let f2 = (e3) => {
    let n3 = mt(t2.value), r3 = n3.includes(CSS.escape(e3.animationName)), a3 = l2.value === `mounted` ? `enter` : `leave`;
    if (e3.target === t2.value && r3 && (d2(`after-${a3}`), u2(`ANIMATION_END`), !i2.value)) {
      let e4 = t2.value.style.animationFillMode;
      t2.value.style.animationFillMode = `forwards`, s2 = c2?.setTimeout(() => {
        t2.value?.style.animationFillMode === `forwards` && (t2.value.style.animationFillMode = e4);
      });
    }
    e3.target === t2.value && n3 === `none` && u2(`ANIMATION_END`);
  }, p2 = (e3) => {
    e3.target === t2.value && (r2.value = mt(t2.value));
  }, m2 = o(t2, (e3, t3) => {
    e3 ? (n2.value = getComputedStyle(e3), e3.addEventListener(`animationstart`, p2), e3.addEventListener(`animationcancel`, f2), e3.addEventListener(`animationend`, f2)) : (u2(`ANIMATION_END`), s2 !== void 0 && c2?.clearTimeout(s2), t3?.removeEventListener(`animationstart`, p2), t3?.removeEventListener(`animationcancel`, f2), t3?.removeEventListener(`animationend`, f2));
  }, { immediate: true }), h2 = o(l2, () => {
    let e3 = mt(t2.value);
    r2.value = l2.value === `mounted` ? e3 : `none`;
  });
  return ee(() => {
    m2(), h2();
  }), { isPresent: w(() => [`mounted`, `unmountSuspended`].includes(l2.value)) };
}
function mt(e2) {
  return e2 && getComputedStyle(e2).animationName || `none`;
}
var ht = E({ name: `Presence`, props: { present: { type: Boolean, required: true }, forceMount: { type: Boolean } }, slots: {}, setup(e2, { slots: n2, expose: r2 }) {
  let { present: i2, forceMount: a2 } = p(e2), o2 = A(), { isPresent: s2 } = pt(i2, o2);
  r2({ present: s2 });
  let l2 = n2.default({ present: s2.value });
  l2 = _e(l2 || []);
  let u2 = c();
  if (l2 && l2?.length > 1) {
    let e3 = u2?.parent?.type.name ? `<${u2.parent.type.name} />` : `component`;
    throw Error([`Detected an invalid children for \`${e3}\` for  \`Presence\` component.`, ``, "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", `You can apply a few solutions:`, ["Provide a single child element so that `presence` directive attach correctly.", `Ensure the first child is an actual element instead of a raw text node or comment node.`].map((e4) => `  - ${e4}`).join(`
`)].join(`
`));
  }
  return () => a2.value || i2.value || s2.value ? t(n2.default({ present: s2.value })[0], { ref: (e3) => {
    let t2 = Pe(e3);
    return t2?.hasAttribute === void 0 || (t2?.hasAttribute(`data-reka-popper-content-wrapper`) ? o2.value = t2.firstElementChild : o2.value = t2), t2;
  } }) : null;
} }), gt = `dismissableLayer.pointerDownOutside`, _t = `dismissableLayer.focusOutside`;
function vt(e2, t2) {
  if (!(t2 instanceof Element)) return false;
  let n2 = t2.closest(`[data-dismissable-layer]`), r2 = e2.dataset.dismissableLayer === `` ? e2 : e2.querySelector(`[data-dismissable-layer]`), i2 = Array.from(e2.ownerDocument.querySelectorAll(`[data-dismissable-layer]`));
  return !!(n2 && (r2 === n2 || i2.indexOf(r2) < i2.indexOf(n2)));
}
function yt(e2, t2, n2 = true) {
  let r2 = t2?.value?.ownerDocument ?? globalThis?.document, i2 = A(false), o2 = A(() => {
  });
  return m((s2) => {
    if (!De || !a(n2)) return;
    let c2 = async (n3) => {
      let a2 = n3.target;
      if (!(!t2?.value || !a2)) {
        if (vt(t2.value, a2)) {
          i2.value = false;
          return;
        }
        if (n3.target && !i2.value) {
          let i3 = function() {
            Ye(gt, e2, t3);
          };
          let t3 = { originalEvent: n3 };
          n3.pointerType === `touch` ? (r2.removeEventListener(`click`, o2.value), o2.value = i3, r2.addEventListener(`click`, o2.value, { once: true })) : i3();
        } else r2.removeEventListener(`click`, o2.value);
        i2.value = false;
      }
    }, l2 = window.setTimeout(() => {
      r2.addEventListener(`pointerdown`, c2);
    }, 0);
    s2(() => {
      window.clearTimeout(l2), r2.removeEventListener(`pointerdown`, c2), r2.removeEventListener(`click`, o2.value);
    });
  }), { onPointerDownCapture: () => {
    a(n2) && (i2.value = true);
  } };
}
function bt(e2, t2, n2 = true) {
  let r2 = t2?.value?.ownerDocument ?? globalThis?.document, i2 = A(false);
  return m((o2) => {
    if (!De || !a(n2)) return;
    let s2 = async (n3) => {
      if (!t2?.value) return;
      await ce(), await ce();
      let r3 = n3.target;
      !t2.value || !r3 || vt(t2.value, r3) || n3.target && !i2.value && Ye(_t, e2, { originalEvent: n3 });
    };
    r2.addEventListener(`focusin`, s2), o2(() => r2.removeEventListener(`focusin`, s2));
  }), { onFocusCapture: () => {
    a(n2) && (i2.value = true);
  }, onBlurCapture: () => {
    a(n2) && (i2.value = false);
  } };
}
var R = te({ layersRoot: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), originalBodyPointerEvents: void 0, branches: /* @__PURE__ */ new Set() }), xt = E({ __name: `DismissableLayer`, props: { disableOutsidePointerEvents: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `dismiss`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { forwardRef: i2, currentElement: a2 } = L(), o2 = w(() => a2.value?.ownerDocument ?? globalThis.document), s2 = w(() => R.layersRoot), c2 = w(() => a2.value ? Array.from(s2.value).indexOf(a2.value) : -1), l2 = w(() => R.layersWithOutsidePointerEventsDisabled.size > 0), d2 = w(() => {
    let e3 = Array.from(s2.value), [t3] = [...R.layersWithOutsidePointerEventsDisabled].slice(-1), n3 = e3.indexOf(t3);
    return c2.value >= n3;
  }), f2 = yt(async (e3) => {
    let t3 = [...R.branches].some((t4) => t4?.contains(e3.target));
    !d2.value || t3 || (r2(`pointerDownOutside`, e3), r2(`interactOutside`, e3), await ce(), e3.defaultPrevented || r2(`dismiss`));
  }, a2), p2 = bt((e3) => {
    [...R.branches].some((t3) => t3?.contains(e3.target)) || (r2(`focusOutside`, e3), r2(`interactOutside`, e3), e3.defaultPrevented || r2(`dismiss`));
  }, a2);
  return Oe(`Escape`, (e3) => {
    c2.value === s2.value.size - 1 && (r2(`escapeKeyDown`, e3), e3.defaultPrevented || r2(`dismiss`));
  }), m((e3) => {
    a2.value && (n2.disableOutsidePointerEvents && (R.layersWithOutsidePointerEventsDisabled.size === 0 && (R.originalBodyPointerEvents = o2.value.body.style.pointerEvents, o2.value.body.style.pointerEvents = `none`), R.layersWithOutsidePointerEventsDisabled.add(a2.value)), s2.value.add(a2.value), e3(() => {
      n2.disableOutsidePointerEvents && R.layersWithOutsidePointerEventsDisabled.size === 1 && !Xe(R.originalBodyPointerEvents) && (o2.value.body.style.pointerEvents = R.originalBodyPointerEvents);
    }));
  }), m((e3) => {
    e3(() => {
      a2.value && (s2.value.delete(a2.value), R.layersWithOutsidePointerEventsDisabled.delete(a2.value));
    });
  }), (e3, t3) => (D(), k(u(P), { ref: u(i2), "as-child": e3.asChild, as: e3.as, "data-dismissable-layer": ``, style: S({ pointerEvents: l2.value ? d2.value ? `auto` : `none` : void 0 }), onFocusCapture: u(p2).onFocusCapture, onBlurCapture: u(p2).onBlurCapture, onPointerdownCapture: u(f2).onPointerDownCapture }, { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`, `style`, `onFocusCapture`, `onBlurCapture`, `onPointerdownCapture`]));
} }), St = E({ __name: `Teleport`, props: { to: { type: null, required: false, default: `body` }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(e2) {
  let t2 = Ne();
  return (e3, n2) => u(t2) || e3.forceMount ? (D(), k(le, { key: 0, to: e3.to, disabled: e3.disabled, defer: e3.defer }, [j(e3.$slots, `default`)], 8, [`to`, `disabled`, `defer`])) : M(`v-if`, true);
} }), Ct = E({ __name: `VisuallyHidden`, props: { feature: { type: String, required: false, default: `focusable` }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  return (e3, t2) => (D(), k(u(P), { as: e3.as, "as-child": e3.asChild, "aria-hidden": e3.feature === `focusable` ? `true` : void 0, "data-hidden": e3.feature === `fully-hidden` ? `` : void 0, tabindex: e3.feature === `fully-hidden` ? `-1` : void 0, style: { position: `absolute`, border: 0, width: `1px`, height: `1px`, padding: 0, margin: `-1px`, overflow: `hidden`, clip: `rect(0, 0, 0, 0)`, clipPath: `inset(50%)`, whiteSpace: `nowrap`, wordWrap: `normal`, top: `-1px`, left: `-1px` } }, { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `aria-hidden`, `data-hidden`, `tabindex`]));
} }), [wt, Tt] = N(`PopperRoot`), Et = E({ inheritAttrs: false, __name: `PopperRoot`, setup(e2) {
  let t2 = A();
  return Tt({ anchor: t2, onAnchorChange: (e3) => t2.value = e3 }), (e3, t3) => j(e3.$slots, `default`);
} }), Dt = E({ __name: `PopperAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, { forwardRef: n2, currentElement: r2 } = L(), i2 = wt();
  return h(() => {
    i2.onAnchorChange(t2.reference ?? r2.value);
  }), (e3, t3) => (D(), k(u(P), { ref: u(n2), as: e3.as, "as-child": e3.asChild }, { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`]));
} }), Ot = { key: 0, d: `M0 0L6 6L12 0` }, kt = { key: 1, d: `M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0` }, At = E({ __name: `Arrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(e2) {
  let t2 = e2;
  return L(), (e3, n2) => (D(), k(u(P), C(t2, { width: e3.width, height: e3.height, viewBox: e3.asChild ? void 0 : `0 0 12 6`, preserveAspectRatio: e3.asChild ? void 0 : `none` }), { default: O(() => [j(e3.$slots, `default`, {}, () => [e3.rounded ? (D(), v(`path`, kt)) : (D(), v(`path`, Ot))])]), _: 3 }, 16, [`width`, `height`, `viewBox`, `preserveAspectRatio`]));
} });
function jt(e2) {
  return e2 !== null;
}
function Mt(e2) {
  return { name: `transformOrigin`, options: e2, fn(t2) {
    let { placement: n2, rects: r2, middlewareData: i2 } = t2, a2 = i2.arrow?.centerOffset !== 0, o2 = a2 ? 0 : e2.arrowWidth, s2 = a2 ? 0 : e2.arrowHeight, [c2, l2] = Nt(n2), u2 = { start: `0%`, center: `50%`, end: `100%` }[l2], d2 = (i2.arrow?.x ?? 0) + o2 / 2, f2 = (i2.arrow?.y ?? 0) + s2 / 2, p2 = ``, m2 = ``;
    return c2 === `bottom` ? (p2 = a2 ? u2 : `${d2}px`, m2 = `${-s2}px`) : c2 === `top` ? (p2 = a2 ? u2 : `${d2}px`, m2 = `${r2.floating.height + s2}px`) : c2 === `right` ? (p2 = `${-s2}px`, m2 = a2 ? u2 : `${f2}px`) : c2 === `left` && (p2 = `${r2.floating.width + s2}px`, m2 = a2 ? u2 : `${f2}px`), { data: { x: p2, y: m2 } };
  } };
}
function Nt(e2) {
  let [t2, n2 = `center`] = e2.split(`-`);
  return [t2, n2];
}
function Pt() {
  return typeof window < `u`;
}
function z(e2) {
  return Ft(e2) ? (e2.nodeName || ``).toLowerCase() : `#document`;
}
function B(e2) {
  var t2;
  return (e2 == null || (t2 = e2.ownerDocument) == null ? void 0 : t2.defaultView) || window;
}
function V(e2) {
  return ((Ft(e2) ? e2.ownerDocument : e2.document) || window.document)?.documentElement;
}
function Ft(e2) {
  return Pt() ? e2 instanceof Node || e2 instanceof B(e2).Node : false;
}
function H(e2) {
  return Pt() ? e2 instanceof Element || e2 instanceof B(e2).Element : false;
}
function U(e2) {
  return Pt() ? e2 instanceof HTMLElement || e2 instanceof B(e2).HTMLElement : false;
}
function It(e2) {
  return !Pt() || typeof ShadowRoot > `u` ? false : e2 instanceof ShadowRoot || e2 instanceof B(e2).ShadowRoot;
}
function W(e2) {
  let { overflow: t2, overflowX: n2, overflowY: r2, display: i2 } = q(e2);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && i2 !== `inline` && i2 !== `contents`;
}
function Lt(e2) {
  return /^(table|td|th)$/.test(z(e2));
}
function Rt(e2) {
  try {
    if (e2.matches(`:popover-open`)) return true;
  } catch {
  }
  try {
    return e2.matches(`:modal`);
  } catch {
    return false;
  }
}
var zt = /transform|translate|scale|rotate|perspective|filter/, Bt = /paint|layout|strict|content/, G = (e2) => !!e2 && e2 !== `none`, Vt;
function Ht(e2) {
  let t2 = H(e2) ? q(e2) : e2;
  return G(t2.transform) || G(t2.translate) || G(t2.scale) || G(t2.rotate) || G(t2.perspective) || !Wt() && (G(t2.backdropFilter) || G(t2.filter)) || zt.test(t2.willChange || ``) || Bt.test(t2.contain || ``);
}
function Ut(e2) {
  let t2 = J(e2);
  for (; U(t2) && !K(t2); ) {
    if (Ht(t2)) return t2;
    if (Rt(t2)) return null;
    t2 = J(t2);
  }
  return null;
}
function Wt() {
  return Vt ?? (Vt = typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`)), Vt;
}
function K(e2) {
  return /^(html|body|#document)$/.test(z(e2));
}
function q(e2) {
  return B(e2).getComputedStyle(e2);
}
function Gt(e2) {
  return H(e2) ? { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop } : { scrollLeft: e2.scrollX, scrollTop: e2.scrollY };
}
function J(e2) {
  if (z(e2) === `html`) return e2;
  let t2 = e2.assignedSlot || e2.parentNode || It(e2) && e2.host || V(e2);
  return It(t2) ? t2.host : t2;
}
function Kt(e2) {
  let t2 = J(e2);
  return K(t2) ? e2.ownerDocument ? e2.ownerDocument.body : e2.body : U(t2) && W(t2) ? t2 : Kt(t2);
}
function Y(e2, t2, n2) {
  t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = true);
  let r2 = Kt(e2), i2 = r2 === e2.ownerDocument?.body, a2 = B(r2);
  if (i2) {
    let e3 = qt(a2);
    return t2.concat(a2, a2.visualViewport || [], W(r2) ? r2 : [], e3 && n2 ? Y(e3) : []);
  } else return t2.concat(r2, Y(r2, [], n2));
}
function qt(e2) {
  return e2.parent && Object.getPrototypeOf(e2.parent) ? e2.frameElement : null;
}
function Jt(e2) {
  let t2 = q(e2), n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0, i2 = U(e2), a2 = i2 ? e2.offsetWidth : n2, o2 = i2 ? e2.offsetHeight : r2, s2 = Be(n2) !== a2 || Be(r2) !== o2;
  return s2 && (n2 = a2, r2 = o2), { width: n2, height: r2, $: s2 };
}
function Yt(e2) {
  return H(e2) ? e2 : e2.contextElement;
}
function X(e2) {
  let t2 = Yt(e2);
  if (!U(t2)) return I(1);
  let n2 = t2.getBoundingClientRect(), { width: r2, height: i2, $: a2 } = Jt(t2), o2 = (a2 ? Be(n2.width) : n2.width) / r2, s2 = (a2 ? Be(n2.height) : n2.height) / i2;
  return (!o2 || !Number.isFinite(o2)) && (o2 = 1), (!s2 || !Number.isFinite(s2)) && (s2 = 1), { x: o2, y: s2 };
}
var Xt = I(0);
function Zt(e2) {
  let t2 = B(e2);
  return !Wt() || !t2.visualViewport ? Xt : { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop };
}
function Qt(e2, t2, n2) {
  return t2 === void 0 && (t2 = false), !n2 || t2 && n2 !== B(e2) ? false : t2;
}
function Z(e2, t2, n2, r2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  let i2 = e2.getBoundingClientRect(), a2 = Yt(e2), o2 = I(1);
  t2 && (r2 ? H(r2) && (o2 = X(r2)) : o2 = X(e2));
  let s2 = Qt(a2, n2, r2) ? Zt(a2) : I(0), c2 = (i2.left + s2.x) / o2.x, l2 = (i2.top + s2.y) / o2.y, u2 = i2.width / o2.x, d2 = i2.height / o2.y;
  if (a2) {
    let e3 = B(a2), t3 = r2 && H(r2) ? B(r2) : r2, n3 = e3, i3 = qt(n3);
    for (; i3 && r2 && t3 !== n3; ) {
      let e4 = X(i3), t4 = i3.getBoundingClientRect(), r3 = q(i3), a3 = t4.left + (i3.clientLeft + parseFloat(r3.paddingLeft)) * e4.x, o3 = t4.top + (i3.clientTop + parseFloat(r3.paddingTop)) * e4.y;
      c2 *= e4.x, l2 *= e4.y, u2 *= e4.x, d2 *= e4.y, c2 += a3, l2 += o3, n3 = B(i3), i3 = qt(n3);
    }
  }
  return Ue({ width: u2, height: d2, x: c2, y: l2 });
}
function $t(e2, t2) {
  let n2 = Gt(e2).scrollLeft;
  return t2 ? t2.left + n2 : Z(V(e2)).left + n2;
}
function en(e2, t2) {
  let n2 = e2.getBoundingClientRect();
  return { x: n2.left + t2.scrollLeft - $t(e2, n2), y: n2.top + t2.scrollTop };
}
function tn(e2) {
  let { elements: t2, rect: n2, offsetParent: r2, strategy: i2 } = e2, a2 = i2 === `fixed`, o2 = V(r2), s2 = t2 ? Rt(t2.floating) : false;
  if (r2 === o2 || s2 && a2) return n2;
  let c2 = { scrollLeft: 0, scrollTop: 0 }, l2 = I(1), u2 = I(0), d2 = U(r2);
  if ((d2 || !d2 && !a2) && ((z(r2) !== `body` || W(o2)) && (c2 = Gt(r2)), d2)) {
    let e3 = Z(r2);
    l2 = X(r2), u2.x = e3.x + r2.clientLeft, u2.y = e3.y + r2.clientTop;
  }
  let f2 = o2 && !d2 && !a2 ? en(o2, c2) : I(0);
  return { width: n2.width * l2.x, height: n2.height * l2.y, x: n2.x * l2.x - c2.scrollLeft * l2.x + u2.x + f2.x, y: n2.y * l2.y - c2.scrollTop * l2.y + u2.y + f2.y };
}
function nn(e2) {
  return Array.from(e2.getClientRects());
}
function rn(e2) {
  let t2 = V(e2), n2 = Gt(e2), r2 = e2.ownerDocument.body, i2 = F(t2.scrollWidth, t2.clientWidth, r2.scrollWidth, r2.clientWidth), a2 = F(t2.scrollHeight, t2.clientHeight, r2.scrollHeight, r2.clientHeight), o2 = -n2.scrollLeft + $t(e2), s2 = -n2.scrollTop;
  return q(r2).direction === `rtl` && (o2 += F(t2.clientWidth, r2.clientWidth) - i2), { width: i2, height: a2, x: o2, y: s2 };
}
var an = 25;
function on(e2, t2) {
  let n2 = B(e2), r2 = V(e2), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    let e3 = Wt();
    (!e3 || e3 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  let l2 = $t(r2);
  if (l2 <= 0) {
    let e3 = r2.ownerDocument, t3 = e3.body, n3 = getComputedStyle(t3), i3 = e3.compatMode === `CSS1Compat` && parseFloat(n3.marginLeft) + parseFloat(n3.marginRight) || 0, o3 = Math.abs(r2.clientWidth - t3.clientWidth - i3);
    o3 <= an && (a2 -= o3);
  } else l2 <= an && (a2 += l2);
  return { width: a2, height: o2, x: s2, y: c2 };
}
function sn(e2, t2) {
  let n2 = Z(e2, true, t2 === `fixed`), r2 = n2.top + e2.clientTop, i2 = n2.left + e2.clientLeft, a2 = U(e2) ? X(e2) : I(1);
  return { width: e2.clientWidth * a2.x, height: e2.clientHeight * a2.y, x: i2 * a2.x, y: r2 * a2.y };
}
function cn(e2, t2, n2) {
  let r2;
  if (t2 === `viewport`) r2 = on(e2, n2);
  else if (t2 === `document`) r2 = rn(V(e2));
  else if (H(t2)) r2 = sn(t2, n2);
  else {
    let n3 = Zt(e2);
    r2 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
  }
  return Ue(r2);
}
function ln(e2, t2) {
  let n2 = J(e2);
  return n2 === t2 || !H(n2) || K(n2) ? false : q(n2).position === `fixed` || ln(n2, t2);
}
function un(e2, t2) {
  let n2 = t2.get(e2);
  if (n2) return n2;
  let r2 = Y(e2, [], false).filter((e3) => H(e3) && z(e3) !== `body`), i2 = null, a2 = q(e2).position === `fixed`, o2 = a2 ? J(e2) : e2;
  for (; H(o2) && !K(o2); ) {
    let t3 = q(o2), n3 = Ht(o2);
    !n3 && t3.position === `fixed` && (i2 = null), (a2 ? !n3 && !i2 : !n3 && t3.position === `static` && i2 && (i2.position === `absolute` || i2.position === `fixed`) || W(o2) && !n3 && ln(e2, o2)) ? r2 = r2.filter((e3) => e3 !== o2) : i2 = t3, o2 = J(o2);
  }
  return t2.set(e2, r2), r2;
}
function dn(e2) {
  let { element: t2, boundary: n2, rootBoundary: r2, strategy: i2 } = e2, a2 = [...n2 === `clippingAncestors` ? Rt(t2) ? [] : un(t2, this._c) : [].concat(n2), r2], o2 = cn(t2, a2[0], i2), s2 = o2.top, c2 = o2.right, l2 = o2.bottom, u2 = o2.left;
  for (let e3 = 1; e3 < a2.length; e3++) {
    let n3 = cn(t2, a2[e3], i2);
    s2 = F(n3.top, s2), c2 = Ge(n3.right, c2), l2 = Ge(n3.bottom, l2), u2 = F(n3.left, u2);
  }
  return { width: c2 - u2, height: l2 - s2, x: u2, y: s2 };
}
function fn(e2) {
  let { width: t2, height: n2 } = Jt(e2);
  return { width: t2, height: n2 };
}
function pn(e2, t2, n2) {
  let r2 = U(t2), i2 = V(t2), a2 = n2 === `fixed`, o2 = Z(e2, true, a2, t2), s2 = { scrollLeft: 0, scrollTop: 0 }, c2 = I(0);
  function l2() {
    c2.x = $t(i2);
  }
  if (r2 || !r2 && !a2) if ((z(t2) !== `body` || W(i2)) && (s2 = Gt(t2)), r2) {
    let e3 = Z(t2, true, a2, t2);
    c2.x = e3.x + t2.clientLeft, c2.y = e3.y + t2.clientTop;
  } else i2 && l2();
  a2 && !r2 && i2 && l2();
  let u2 = i2 && !r2 && !a2 ? en(i2, s2) : I(0);
  return { x: o2.left + s2.scrollLeft - c2.x - u2.x, y: o2.top + s2.scrollTop - c2.y - u2.y, width: o2.width, height: o2.height };
}
function mn(e2) {
  return q(e2).position === `static`;
}
function hn(e2, t2) {
  if (!U(e2) || q(e2).position === `fixed`) return null;
  if (t2) return t2(e2);
  let n2 = e2.offsetParent;
  return V(e2) === n2 && (n2 = n2.ownerDocument.body), n2;
}
function gn(e2, t2) {
  let n2 = B(e2);
  if (Rt(e2)) return n2;
  if (!U(e2)) {
    let t3 = J(e2);
    for (; t3 && !K(t3); ) {
      if (H(t3) && !mn(t3)) return t3;
      t3 = J(t3);
    }
    return n2;
  }
  let r2 = hn(e2, t2);
  for (; r2 && Lt(r2) && mn(r2); ) r2 = hn(r2, t2);
  return r2 && K(r2) && mn(r2) && !Ht(r2) ? n2 : r2 || Ut(e2) || n2;
}
var _n = async function(e2) {
  let t2 = this.getOffsetParent || gn, n2 = this.getDimensions, r2 = await n2(e2.floating);
  return { reference: pn(e2.reference, await t2(e2.floating), e2.strategy), floating: { x: 0, y: 0, width: r2.width, height: r2.height } };
};
function vn(e2) {
  return q(e2).direction === `rtl`;
}
var yn = { convertOffsetParentRelativeRectToViewportRelativeRect: tn, getDocumentElement: V, getClippingRect: dn, getOffsetParent: gn, getElementRects: _n, getClientRects: nn, getDimensions: fn, getScale: X, isElement: H, isRTL: vn };
function bn(e2, t2) {
  return e2.x === t2.x && e2.y === t2.y && e2.width === t2.width && e2.height === t2.height;
}
function xn(e2, t2) {
  let n2 = null, r2, i2 = V(e2);
  function a2() {
    var e3;
    clearTimeout(r2), (e3 = n2) == null || e3.disconnect(), n2 = null;
  }
  function o2(s2, c2) {
    s2 === void 0 && (s2 = false), c2 === void 0 && (c2 = 1), a2();
    let l2 = e2.getBoundingClientRect(), { left: u2, top: d2, width: f2, height: p2 } = l2;
    if (s2 || t2(), !f2 || !p2) return;
    let m2 = ze(d2), h2 = ze(i2.clientWidth - (u2 + f2)), g2 = ze(i2.clientHeight - (d2 + p2)), _2 = ze(u2), v2 = { rootMargin: -m2 + `px ` + -h2 + `px ` + -g2 + `px ` + -_2 + `px`, threshold: F(0, Ge(1, c2)) || 1 }, y2 = true;
    function b2(t3) {
      let n3 = t3[0].intersectionRatio;
      if (n3 !== c2) {
        if (!y2) return o2();
        n3 ? o2(false, n3) : r2 = setTimeout(() => {
          o2(false, 1e-7);
        }, 1e3);
      }
      n3 === 1 && !bn(l2, e2.getBoundingClientRect()) && o2(), y2 = false;
    }
    try {
      n2 = new IntersectionObserver(b2, { ...v2, root: i2.ownerDocument });
    } catch {
      n2 = new IntersectionObserver(b2, v2);
    }
    n2.observe(e2);
  }
  return o2(true), a2;
}
function Sn(e2, t2, n2, r2) {
  r2 === void 0 && (r2 = {});
  let { ancestorScroll: i2 = true, ancestorResize: a2 = true, elementResize: o2 = typeof ResizeObserver == `function`, layoutShift: s2 = typeof IntersectionObserver == `function`, animationFrame: c2 = false } = r2, l2 = Yt(e2), u2 = i2 || a2 ? [...l2 ? Y(l2) : [], ...t2 ? Y(t2) : []] : [];
  u2.forEach((e3) => {
    i2 && e3.addEventListener(`scroll`, n2, { passive: true }), a2 && e3.addEventListener(`resize`, n2);
  });
  let d2 = l2 && s2 ? xn(l2, n2) : null, f2 = -1, p2 = null;
  o2 && (p2 = new ResizeObserver((e3) => {
    let [r3] = e3;
    r3 && r3.target === l2 && p2 && t2 && (p2.unobserve(t2), cancelAnimationFrame(f2), f2 = requestAnimationFrame(() => {
      var e4;
      (e4 = p2) == null || e4.observe(t2);
    })), n2();
  }), l2 && !c2 && p2.observe(l2), t2 && p2.observe(t2));
  let m2, h2 = c2 ? Z(e2) : null;
  c2 && g2();
  function g2() {
    let t3 = Z(e2);
    h2 && !bn(h2, t3) && n2(), h2 = t3, m2 = requestAnimationFrame(g2);
  }
  return n2(), () => {
    var e3;
    u2.forEach((e4) => {
      i2 && e4.removeEventListener(`scroll`, n2), a2 && e4.removeEventListener(`resize`, n2);
    }), d2?.(), (e3 = p2) == null || e3.disconnect(), p2 = null, c2 && cancelAnimationFrame(m2);
  };
}
var Cn = qe, wn = Re, Tn = Ve, En = He, Dn = Le, On = Je, kn = We, An = (e2, t2, n2) => {
  let r2 = /* @__PURE__ */ new Map(), i2 = { platform: yn, ...n2 }, a2 = { ...i2.platform, _c: r2 };
  return Ke(e2, t2, { ...i2, platform: a2 });
};
function jn(e2) {
  return typeof e2 == `object` && !!e2 && `$el` in e2;
}
function Mn(e2) {
  if (jn(e2)) {
    let t2 = e2.$el;
    return Ft(t2) && z(t2) === `#comment` ? null : t2;
  }
  return e2;
}
function Q(e2) {
  return typeof e2 == `function` ? e2() : u(e2);
}
function Nn(e2) {
  return { name: `arrow`, options: e2, fn(t2) {
    let n2 = Mn(Q(e2.element));
    return n2 == null ? {} : On({ element: n2, padding: e2.padding }).fn(t2);
  } };
}
function Pn(e2) {
  return typeof window > `u` ? 1 : (e2.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fn(e2, t2) {
  let n2 = Pn(e2);
  return Math.round(t2 * n2) / n2;
}
function In(e2, t2, n2) {
  n2 === void 0 && (n2 = {});
  let r2 = n2.whileElementsMounted, i2 = w(() => Q(n2.open) ?? true), a2 = w(() => Q(n2.middleware)), s2 = w(() => Q(n2.placement) ?? `bottom`), c2 = w(() => Q(n2.strategy) ?? `absolute`), l2 = w(() => Q(n2.transform) ?? true), u2 = w(() => Mn(e2.value)), d2 = w(() => Mn(t2.value)), f2 = A(0), p2 = A(0), m2 = A(c2.value), h2 = A(s2.value), g2 = fe({}), v2 = A(false), b2 = w(() => {
    let e3 = { position: m2.value, left: `0`, top: `0` };
    if (!d2.value) return e3;
    let t3 = Fn(d2.value, f2.value), n3 = Fn(d2.value, p2.value);
    return l2.value ? { ...e3, transform: `translate(` + t3 + `px, ` + n3 + `px)`, ...Pn(d2.value) >= 1.5 && { willChange: `transform` } } : { position: m2.value, left: t3 + `px`, top: n3 + `px` };
  }), x2;
  function S2() {
    if (u2.value == null || d2.value == null) return;
    let e3 = i2.value;
    An(u2.value, d2.value, { middleware: a2.value, placement: s2.value, strategy: c2.value }).then((t3) => {
      f2.value = t3.x, p2.value = t3.y, m2.value = t3.strategy, h2.value = t3.placement, g2.value = t3.middlewareData, v2.value = e3 !== false;
    });
  }
  function C2() {
    typeof x2 == `function` && (x2(), x2 = void 0);
  }
  function ee2() {
    if (C2(), r2 === void 0) {
      S2();
      return;
    }
    if (u2.value != null && d2.value != null) {
      x2 = r2(u2.value, d2.value, S2);
      return;
    }
  }
  function te2() {
    i2.value || (v2.value = false);
  }
  return o([a2, s2, c2, i2], S2, { flush: `sync` }), o([u2, d2], ee2, { flush: `sync` }), o(i2, te2, { flush: `sync` }), _() && ae(C2), { x: y(f2), y: y(p2), strategy: y(m2), placement: y(h2), middlewareData: y(g2), isPositioned: y(v2), floatingStyles: b2, update: S2 };
}
var Ln = { side: `bottom`, sideOffset: 0, sideFlip: true, align: `center`, alignOffset: 0, alignFlip: true, arrowPadding: 0, hideShiftedArrow: true, avoidCollisions: true, collisionBoundary: () => [], collisionPadding: 0, sticky: `partial`, hideWhenDetached: false, positionStrategy: `fixed`, updatePositionStrategy: `optimized`, prioritizePosition: false }, [Rn, zn] = N(`PopperContent`), Bn = E({ inheritAttrs: false, __name: `PopperContent`, props: f({ side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, { ...Ln }), emits: [`placed`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = wt(), { forwardRef: o2, currentElement: s2 } = L(), c2 = A(), l2 = A(), { width: d2, height: f2 } = dt(l2), p2 = w(() => r2.side + (r2.align === `center` ? `` : `-${r2.align}`)), g2 = w(() => typeof r2.collisionPadding == `number` ? r2.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...r2.collisionPadding }), _2 = w(() => Array.isArray(r2.collisionBoundary) ? r2.collisionBoundary : [r2.collisionBoundary]), y2 = w(() => ({ padding: g2.value, boundary: _2.value.filter(jt), altBoundary: _2.value.length > 0 })), b2 = w(() => ({ mainAxis: r2.sideFlip, crossAxis: r2.alignFlip })), x2 = Fe(() => [Cn({ mainAxis: r2.sideOffset + f2.value, alignmentAxis: r2.alignOffset }), r2.prioritizePosition && r2.avoidCollisions && Tn({ ...y2.value, ...b2.value }), r2.avoidCollisions && wn({ mainAxis: true, crossAxis: !!r2.prioritizePosition, limiter: r2.sticky === `partial` ? kn() : void 0, ...y2.value }), !r2.prioritizePosition && r2.avoidCollisions && Tn({ ...y2.value, ...b2.value }), En({ ...y2.value, apply: ({ elements: e3, rects: t3, availableWidth: n2, availableHeight: r3 }) => {
    let { width: i3, height: a3 } = t3.reference, o3 = e3.floating.style;
    o3.setProperty(`--reka-popper-available-width`, `${n2}px`), o3.setProperty(`--reka-popper-available-height`, `${r3}px`), o3.setProperty(`--reka-popper-anchor-width`, `${i3}px`), o3.setProperty(`--reka-popper-anchor-height`, `${a3}px`);
  } }), l2.value && Nn({ element: l2.value, padding: r2.arrowPadding }), Mt({ arrowWidth: d2.value, arrowHeight: f2.value }), r2.hideWhenDetached && Dn({ strategy: `referenceHidden`, ...y2.value })]), { floatingStyles: ee2, placement: te2, isPositioned: ne2, middlewareData: T2, update: E2 } = In(w(() => r2.reference ?? a2.anchor.value), c2, { strategy: r2.positionStrategy, placement: p2, whileElementsMounted: (...e3) => Sn(...e3, { layoutShift: !r2.disableUpdateOnLayoutShift, animationFrame: r2.updatePositionStrategy === `always` }), middleware: x2 }), re2 = w(() => Nt(te2.value)[0]), ie2 = w(() => Nt(te2.value)[1]);
  h(() => {
    ne2.value && i2(`placed`);
  });
  let ae2 = w(() => {
    let e3 = T2.value.arrow?.centerOffset !== 0;
    return r2.hideShiftedArrow && e3;
  }), oe2 = A(``);
  return m(() => {
    s2.value && (oe2.value = window.getComputedStyle(s2.value).zIndex);
  }), zn({ placedSide: re2, onArrowChange: (e3) => l2.value = e3, arrowX: w(() => T2.value.arrow?.x ?? 0), arrowY: w(() => T2.value.arrow?.y ?? 0), shouldHideArrow: ae2 }), (e3, t3) => (D(), v(`div`, { ref_key: `floatingRef`, ref: c2, "data-reka-popper-content-wrapper": ``, style: S({ ...u(ee2), transform: u(ne2) ? u(ee2).transform : `translate(0, -200%)`, minWidth: `max-content`, zIndex: oe2.value, "--reka-popper-transform-origin": [u(T2).transformOrigin?.x, u(T2).transformOrigin?.y].join(` `), ...u(T2).hide?.referenceHidden && { visibility: `hidden`, pointerEvents: `none` } }) }, [n(u(P), C({ ref: u(o2) }, e3.$attrs, { "as-child": r2.asChild, as: e3.as, "data-side": re2.value, "data-align": ie2.value, style: { animation: u(ne2) ? void 0 : `none` } }), { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 16, [`as-child`, `as`, `data-side`, `data-align`, `style`])], 4));
} }), Vn = { top: `bottom`, right: `left`, bottom: `top`, left: `right` }, Hn = E({ inheritAttrs: false, __name: `PopperArrow`, props: { width: { type: Number, required: false }, height: { type: Number, required: false }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(e2) {
  let { forwardRef: t2 } = L(), r2 = Rn(), i2 = w(() => Vn[r2.placedSide.value]);
  return (e3, a2) => (D(), v(`span`, { ref: (e4) => {
    u(r2).onArrowChange(e4 ?? void 0);
  }, style: S({ position: `absolute`, left: u(r2).arrowX?.value ? `${u(r2).arrowX?.value}px` : void 0, top: u(r2).arrowY?.value ? `${u(r2).arrowY?.value}px` : void 0, [i2.value]: 0, transformOrigin: { top: ``, right: `0 0`, bottom: `center 0`, left: `100% 0` }[u(r2).placedSide.value], transform: { top: `translateY(100%)`, right: `translateY(50%) rotate(90deg) translateX(-50%)`, bottom: `rotate(180deg)`, left: `translateY(50%) rotate(-90deg) translateX(50%)` }[u(r2).placedSide.value], visibility: u(r2).shouldHideArrow.value ? `hidden` : void 0 }) }, [n(At, C(e3.$attrs, { ref: u(t2), style: { display: `block` }, as: e3.as, "as-child": e3.asChild, rounded: e3.rounded, width: e3.width, height: e3.height }), { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 16, [`as`, `as-child`, `rounded`, `width`, `height`])], 4));
} }), Un = E({ __name: `TooltipArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return L(), (t3, r2) => (D(), k(u(Hn), e(pe(n2)), { default: O(() => [j(t3.$slots, `default`)]), _: 3 }, 16));
} }), [$, Wn] = N(`TooltipProvider`), Gn = E({ inheritAttrs: false, __name: `TooltipProvider`, props: { delayDuration: { type: Number, required: false, default: 700 }, skipDelayDuration: { type: Number, required: false, default: 300 }, disableHoverableContent: { type: Boolean, required: false, default: false }, disableClosingTrigger: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, ignoreNonKeyboardFocus: { type: Boolean, required: false, default: false }, content: { type: Object, required: false } }, setup(e2) {
  let { delayDuration: t2, skipDelayDuration: n2, disableHoverableContent: r2, disableClosingTrigger: i2, ignoreNonKeyboardFocus: a2, disabled: o2, content: s2 } = p(e2);
  L();
  let c2 = A(true), l2 = A(false), { start: u2, stop: d2 } = Ie(() => {
    c2.value = true;
  }, n2, { immediate: false });
  return Wn({ isOpenDelayed: c2, delayDuration: t2, onOpen() {
    d2(), c2.value = false;
  }, onClose() {
    u2();
  }, isPointerInTransitRef: l2, disableHoverableContent: r2, disableClosingTrigger: i2, disabled: o2, ignoreNonKeyboardFocus: a2, content: s2 }), (e3, t3) => j(e3.$slots, `default`);
} }), Kn = `tooltip.open`, [qn, Jn] = N(`TooltipRoot`), Yn = E({ __name: `TooltipRoot`, props: { defaultOpen: { type: Boolean, required: false, default: false }, open: { type: Boolean, required: false, default: void 0 }, delayDuration: { type: Number, required: false, default: void 0 }, disableHoverableContent: { type: Boolean, required: false, default: void 0 }, disableClosingTrigger: { type: Boolean, required: false, default: void 0 }, disabled: { type: Boolean, required: false, default: void 0 }, ignoreNonKeyboardFocus: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2;
  L();
  let i2 = $(), a2 = w(() => n2.disableHoverableContent ?? i2.disableHoverableContent.value), s2 = w(() => n2.disableClosingTrigger ?? i2.disableClosingTrigger.value), c2 = w(() => n2.disabled ?? i2.disabled.value), l2 = w(() => n2.delayDuration ?? i2.delayDuration.value), d2 = w(() => n2.ignoreNonKeyboardFocus ?? i2.ignoreNonKeyboardFocus.value), f2 = ke(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 });
  o(f2, (e3) => {
    i2.onClose && (e3 ? (i2.onOpen(), document.dispatchEvent(new CustomEvent(Kn))) : i2.onClose());
  });
  let p2 = A(false), m2 = A(), h2 = w(() => f2.value ? p2.value ? `delayed-open` : `instant-open` : `closed`), { start: g2, stop: _2 } = Ie(() => {
    p2.value = true, f2.value = true;
  }, l2, { immediate: false });
  function v2() {
    _2(), p2.value = false, f2.value = true;
  }
  function y2() {
    _2(), f2.value = false;
  }
  function b2() {
    g2();
  }
  return Jn({ contentId: ``, open: f2, stateAttribute: h2, trigger: m2, onTriggerChange(e3) {
    m2.value = e3;
  }, onTriggerEnter() {
    i2.isOpenDelayed.value ? b2() : v2();
  }, onTriggerLeave() {
    a2.value ? y2() : _2();
  }, onOpen: v2, onClose: y2, disableHoverableContent: a2, disableClosingTrigger: s2, disabled: c2, ignoreNonKeyboardFocus: d2 }), (e3, t3) => (D(), k(u(Et), null, { default: O(() => [j(e3.$slots, `default`, { open: u(f2) })]), _: 3 }));
} }), Xn = E({ __name: `TooltipContentImpl`, props: { ariaLabel: { type: String, required: false }, asChild: { type: Boolean, required: false, default: void 0 }, as: { type: null, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, avoidCollisions: { type: Boolean, required: false, default: void 0 }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false, default: void 0 }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`], setup(e2, { emit: t2 }) {
  let r2 = e2, a2 = t2, o2 = qn(), s2 = $(), { forwardRef: c2, currentElement: l2 } = L(), d2 = w(() => r2.ariaLabel || l2.value?.textContent), f2 = w(() => {
    let { ariaLabel: e3, ...t3 } = r2;
    return ve(t3, s2.content.value ?? {}, { side: `top`, sideOffset: 0, align: `center`, avoidCollisions: true, collisionBoundary: [], collisionPadding: 0, arrowPadding: 0, sticky: `partial`, hideWhenDetached: false });
  });
  return x(() => {
    Ae(window, `scroll`, (e3) => {
      e3.target?.contains(o2.trigger.value) && o2.onClose();
    }, { capture: true }), Ae(window, Kn, o2.onClose);
  }), (e3, t3) => (D(), k(u(xt), { "as-child": ``, "disable-outside-pointer-events": false, onEscapeKeyDown: t3[0] || (t3[0] = (e4) => a2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[1] || (t3[1] = (e4) => {
    u(o2).disableClosingTrigger.value && u(o2).trigger.value?.contains(e4.target) && e4.preventDefault(), a2(`pointerDownOutside`, e4);
  }), onFocusOutside: t3[2] || (t3[2] = me(() => {
  }, [`prevent`])), onDismiss: t3[3] || (t3[3] = (e4) => u(o2).onClose()) }, { default: O(() => [n(u(Bn), C({ ref: u(c2), "data-state": u(o2).stateAttribute.value }, { ...e3.$attrs, ...f2.value }, { style: { "--reka-tooltip-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-tooltip-content-available-width": `var(--reka-popper-available-width)`, "--reka-tooltip-content-available-height": `var(--reka-popper-available-height)`, "--reka-tooltip-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-tooltip-trigger-height": `var(--reka-popper-anchor-height)` } }), { default: O(() => [j(e3.$slots, `default`), n(u(Ct), { id: u(o2).contentId, role: `tooltip` }, { default: O(() => [i(se(d2.value), 1)]), _: 1 }, 8, [`id`])]), _: 3 }, 16, [`data-state`])]), _: 3 }));
} }), Zn = E({ __name: `TooltipContentHoverable`, props: { ariaLabel: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false } }, setup(e2) {
  let t2 = Se(e2), { forwardRef: n2, currentElement: r2 } = L(), { trigger: i2, onClose: a2 } = qn(), o2 = $(), { isPointerInTransit: s2, onPointerExit: c2 } = nt(i2, r2);
  return o2.isPointerInTransitRef = s2, c2(() => {
    a2();
  }), (e3, r3) => (D(), k(Xn, C({ ref: u(n2) }, u(t2)), { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 16));
} }), Qn = E({ __name: `TooltipContent`, props: { forceMount: { type: Boolean, required: false }, ariaLabel: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = qn(), a2 = tt(n2, r2), { forwardRef: o2 } = L();
  return (e3, t3) => (D(), k(u(ht), { present: e3.forceMount || u(i2).open.value }, { default: O(() => [(D(), k(de(u(i2).disableHoverableContent.value ? Xn : Zn), C({ ref: u(o2) }, u(a2)), { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 16))]), _: 3 }, 8, [`present`]));
} }), $n = E({ __name: `TooltipPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), k(u(St), e(pe(n2)), { default: O(() => [j(t3.$slots, `default`)]), _: 3 }, 16));
} }), er = E({ __name: `TooltipTrigger`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, r2 = qn(), i2 = $();
  r2.contentId || (r2.contentId = ut(void 0, `reka-tooltip-content`));
  let { forwardRef: a2, currentElement: o2 } = L(), s2 = A(false), c2 = A(false), l2 = w(() => r2.disabled.value ? {} : { click: _2, focus: h2, pointermove: p2, pointerleave: m2, pointerdown: f2, blur: g2 });
  x(() => {
    r2.onTriggerChange(o2.value);
  });
  function d2() {
    setTimeout(() => {
      s2.value = false;
    }, 1);
  }
  function f2() {
    r2.open && !r2.disableClosingTrigger.value && r2.onClose(), s2.value = true, document.addEventListener(`pointerup`, d2, { once: true });
  }
  function p2(e3) {
    e3.pointerType !== `touch` && !c2.value && !i2.isPointerInTransitRef.value && (r2.onTriggerEnter(), c2.value = true);
  }
  function m2() {
    r2.onTriggerLeave(), c2.value = false;
  }
  function h2(e3) {
    s2.value || r2.ignoreNonKeyboardFocus.value && !e3.target.matches?.(`:focus-visible`) || r2.onOpen();
  }
  function g2() {
    r2.onClose();
  }
  function _2() {
    r2.disableClosingTrigger.value || r2.onClose();
  }
  return (e3, i3) => (D(), k(u(Dt), { "as-child": ``, reference: e3.reference }, { default: O(() => [n(u(P), C({ ref: u(a2), "aria-describedby": u(r2).open.value ? u(r2).contentId : void 0, "data-state": u(r2).stateAttribute.value, as: e3.as, "as-child": t2.asChild, "data-grace-area-trigger": `` }, T(l2.value)), { default: O(() => [j(e3.$slots, `default`)]), _: 3 }, 16, [`aria-describedby`, `data-state`, `as`, `as-child`])]), _: 3 }, 8, [`reference`]));
} }), tr = /* @__PURE__ */ Symbol(`nuxt-ui.portal-target`);
function nr(e2) {
  let t2 = s(tr, void 0), n2 = w(() => e2.value === true ? t2?.value : e2.value), r2 = w(() => typeof n2.value == `boolean` ? !n2.value : false), i2 = w(() => typeof n2.value == `boolean` ? `body` : n2.value);
  return w(() => ({ to: i2.value, disabled: r2.value }));
}
var rr = { base: `inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase`, variants: { color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, variant: { solid: ``, outline: ``, soft: ``, subtle: `` }, size: { sm: `h-4 min-w-[16px] text-[10px]`, md: `h-5 min-w-[20px] text-[11px]`, lg: `h-6 min-w-[24px] text-[12px]` } }, compoundVariants: [{ color: `primary`, variant: `solid`, class: `text-inverted bg-primary` }, { color: `secondary`, variant: `solid`, class: `text-inverted bg-secondary` }, { color: `success`, variant: `solid`, class: `text-inverted bg-success` }, { color: `info`, variant: `solid`, class: `text-inverted bg-info` }, { color: `warning`, variant: `solid`, class: `text-inverted bg-warning` }, { color: `error`, variant: `solid`, class: `text-inverted bg-error` }, { color: `primary`, variant: `outline`, class: `ring ring-inset ring-primary/50 text-primary` }, { color: `secondary`, variant: `outline`, class: `ring ring-inset ring-secondary/50 text-secondary` }, { color: `success`, variant: `outline`, class: `ring ring-inset ring-success/50 text-success` }, { color: `info`, variant: `outline`, class: `ring ring-inset ring-info/50 text-info` }, { color: `warning`, variant: `outline`, class: `ring ring-inset ring-warning/50 text-warning` }, { color: `error`, variant: `outline`, class: `ring ring-inset ring-error/50 text-error` }, { color: `primary`, variant: `soft`, class: `text-primary bg-primary/10` }, { color: `secondary`, variant: `soft`, class: `text-secondary bg-secondary/10` }, { color: `success`, variant: `soft`, class: `text-success bg-success/10` }, { color: `info`, variant: `soft`, class: `text-info bg-info/10` }, { color: `warning`, variant: `soft`, class: `text-warning bg-warning/10` }, { color: `error`, variant: `soft`, class: `text-error bg-error/10` }, { color: `primary`, variant: `subtle`, class: `text-primary ring ring-inset ring-primary/25 bg-primary/10` }, { color: `secondary`, variant: `subtle`, class: `text-secondary ring ring-inset ring-secondary/25 bg-secondary/10` }, { color: `success`, variant: `subtle`, class: `text-success ring ring-inset ring-success/25 bg-success/10` }, { color: `info`, variant: `subtle`, class: `text-info ring ring-inset ring-info/25 bg-info/10` }, { color: `warning`, variant: `subtle`, class: `text-warning ring ring-inset ring-warning/25 bg-warning/10` }, { color: `error`, variant: `subtle`, class: `text-error ring ring-inset ring-error/25 bg-error/10` }, { color: `neutral`, variant: `solid`, class: `text-inverted bg-inverted` }, { color: `neutral`, variant: `outline`, class: `ring ring-inset ring-accented text-default bg-default` }, { color: `neutral`, variant: `soft`, class: `text-default bg-elevated` }, { color: `neutral`, variant: `subtle`, class: `ring ring-inset ring-accented text-default bg-elevated` }], defaultVariants: { variant: `outline`, color: `neutral`, size: `md` } }, ir = { __name: `Kbd`, props: { as: { type: null, required: false, default: `kbd` }, value: { type: null, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let t2 = e2, { getKbdKey: n2 } = xe(), r2 = ge(), a2 = Ce(`kbd`, t2), o2 = w(() => ye({ extend: ye(rr), ...r2.ui?.kbd || {} }));
  return (r3, s2) => (D(), k(u(P), { as: e2.as, class: g(o2.value({ class: [u(a2)?.base, t2.class], color: t2.color, variant: t2.variant, size: t2.size })) }, { default: O(() => [j(r3.$slots, `default`, {}, () => [i(se(u(n2)(e2.value)), 1)])]), _: 3 }, 8, [`as`, `class`]));
} }, ar = { slots: { content: `flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto`, arrow: `fill-bg stroke-default`, text: `truncate`, kbds: `hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['\xB7'] not-first-of-type:before:me-0.5`, kbdsSize: `sm` } }, or = { __name: `Tooltip`, props: { text: { type: String, required: false }, kbds: { type: Array, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, reference: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, delayDuration: { type: Number, required: false }, disableHoverableContent: { type: Boolean, required: false }, disableClosingTrigger: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, ignoreNonKeyboardFocus: { type: Boolean, required: false } }, emits: [`update:open`], setup(t2, { emit: r2 }) {
  let i2 = t2, a2 = r2, o2 = l(), s2 = ge(), c2 = Ce(`tooltip`, i2), d2 = $(), f2 = tt(we(i2, `defaultOpen`, `open`, `delayDuration`, `disableHoverableContent`, `disableClosingTrigger`, `ignoreNonKeyboardFocus`), a2), p2 = nr(ue(() => i2.portal)), m2 = ue(() => ve(i2.content, d2.content.value, { side: `bottom`, sideOffset: 8, collisionPadding: 8 })), h2 = ue(() => ve(i2.arrow, { rounded: true })), _2 = w(() => ye({ extend: ye(ar), ...s2.ui?.tooltip || {} })({ side: m2.value.side }));
  return (r3, a3) => (D(), k(u(Yn), C(u(f2), { disabled: !(t2.text || t2.kbds?.length || o2.content) || i2.disabled }), { default: O(({ open: a4 }) => [o2.default || t2.reference ? (D(), k(u(er), C({ key: 0 }, r3.$attrs, { "as-child": ``, reference: t2.reference, class: i2.class }), { default: O(() => [j(r3.$slots, `default`, { open: a4 })]), _: 2 }, 1040, [`reference`, `class`])) : M(``, true), n(u($n), e(pe(u(p2))), { default: O(() => [n(u(be), null, { default: O(() => [n(u(Qn), C(m2.value, { "data-slot": `content`, class: _2.value.content({ class: [!o2.default && i2.class, u(c2)?.content] }) }), { default: O(() => [j(r3.$slots, `content`, { ui: _2.value }, () => [t2.text ? (D(), v(`span`, { key: 0, "data-slot": `text`, class: g(_2.value.text({ class: u(c2)?.text })) }, se(t2.text), 3)) : M(``, true), t2.kbds?.length ? (D(), v(`span`, { key: 1, "data-slot": `kbds`, class: g(_2.value.kbds({ class: u(c2)?.kbds })) }, [(D(true), v(ie, null, b(t2.kbds, (e2, t3) => (D(), k(ir, C({ key: t3, size: u(c2)?.kbdsSize || _2.value.kbdsSize() }, { ref_for: true }, typeof e2 == `string` ? { value: e2 } : e2), null, 16, [`size`]))), 128))], 2)) : M(``, true)]), t2.arrow ? (D(), k(u(Un), C({ key: 0 }, h2.value, { "data-slot": `arrow`, class: _2.value.arrow({ class: u(c2)?.arrow }) }), null, 16, [`class`])) : M(``, true)]), _: 3 }, 16, [`class`])]), _: 3 })]), _: 3 }, 16)]), _: 3 }, 16, [`disabled`]));
} };
export {
  Xe as C,
  Ze as S,
  nt as _,
  Gn as a,
  et as b,
  Bn as c,
  Ct as d,
  St as f,
  ut as g,
  ht as h,
  nr as i,
  Dt as l,
  R as m,
  ir as n,
  Hn as o,
  xt as p,
  tr as r,
  Ln as s,
  or as t,
  Et as u,
  tt as v,
  Ye as w,
  $e as x,
  L as y
};
