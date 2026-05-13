import { $n as e, D as t, On as n, Tn as r, ct as i, et as a, fn as o, gn as s, k as c, mt as l, qt as u, v as d, vn as f, xt as p, y as m, yn as h, z as g } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { E as _, S as v } from "./Button-BArxwKIq.js";
import { b as y, w as b } from "./dist-BY3QSpe-.js";
import { A as x, B as S, H as C, I as w, j as T } from "./namespaced-DHs_Dn1j.js";
import { b as E, f as D, g as O, h as k, p as A, y as j } from "./Tooltip-DkuatXWt.js";
var [M, N] = _(`DialogRoot`), P = c({ inheritAttrs: false, __name: `DialogRoot`, props: { open: { type: Boolean, required: false, default: void 0 }, defaultOpen: { type: Boolean, required: false, default: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let i2 = e2, a2 = y(i2, `open`, t2, { defaultValue: i2.defaultOpen, passive: i2.open === void 0 }), o2 = f(), s2 = f(), { modal: c2 } = r(i2);
  return N({ open: a2, modal: c2, openModal: () => {
    a2.value = true;
  }, onOpenChange: (e3) => {
    a2.value = e3;
  }, onOpenToggle: () => {
    a2.value = !a2.value;
  }, contentId: ``, titleId: ``, descriptionId: ``, triggerElement: o2, contentElement: s2 }), (e3, t3) => p(e3.$slots, `default`, { open: n(a2), close: () => a2.value = false });
} }), F = c({ __name: `DialogClose`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  j();
  let r2 = M();
  return (e3, i2) => (l(), d(n(v), a(t2, { type: e3.as === `button` ? `button` : void 0, onClick: i2[0] || (i2[0] = (e4) => n(r2).onOpenChange(false)) }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`type`]));
} }), I = c({ __name: `DialogContentImpl`, props: { forceMount: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: r2 }) {
  let o2 = e2, s2 = r2, c2 = M(), { forwardRef: f2, currentElement: m2 } = j();
  return c2.titleId || (c2.titleId = O(void 0, `reka-dialog-title`)), c2.descriptionId || (c2.descriptionId = O(void 0, `reka-dialog-description`)), i(() => {
    c2.contentElement = m2, C() !== document.body && (c2.triggerElement.value = C());
  }), (e3, r3) => (l(), d(n(T), { "as-child": ``, loop: ``, trapped: o2.trapFocus, onMountAutoFocus: r3[5] || (r3[5] = (e4) => s2(`openAutoFocus`, e4)), onUnmountAutoFocus: r3[6] || (r3[6] = (e4) => s2(`closeAutoFocus`, e4)) }, { default: u(() => [t(n(A), a({ id: n(c2).contentId, ref: n(f2), as: e3.as, "as-child": e3.asChild, "disable-outside-pointer-events": e3.disableOutsidePointerEvents, role: `dialog`, "aria-describedby": n(c2).descriptionId, "aria-labelledby": n(c2).titleId, "data-state": n(x)(n(c2).open.value) }, e3.$attrs, { onDismiss: r3[0] || (r3[0] = (e4) => n(c2).onOpenChange(false)), onEscapeKeyDown: r3[1] || (r3[1] = (e4) => s2(`escapeKeyDown`, e4)), onFocusOutside: r3[2] || (r3[2] = (e4) => s2(`focusOutside`, e4)), onInteractOutside: r3[3] || (r3[3] = (e4) => s2(`interactOutside`, e4)), onPointerDownOutside: r3[4] || (r3[4] = (e4) => s2(`pointerDownOutside`, e4)) }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `as`, `as-child`, `disable-outside-pointer-events`, `aria-describedby`, `aria-labelledby`, `data-state`])]), _: 3 }, 8, [`trapped`]));
} }), L = c({ __name: `DialogContentModal`, props: { forceMount: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, o2 = M(), s2 = E(i2), { forwardRef: c2, currentElement: f2 } = j();
  return w(f2), (e3, t3) => (l(), d(I, a({ ...r2, ...n(s2) }, { ref: n(c2), "trap-focus": n(o2).open.value, "disable-outside-pointer-events": true, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    e4.defaultPrevented || (e4.preventDefault(), n(o2).triggerElement.value?.focus());
  }), onPointerDownOutside: t3[1] || (t3[1] = (e4) => {
    let t4 = e4.detail.originalEvent, n2 = t4.button === 0 && t4.ctrlKey === true;
    (t4.button === 2 || n2) && e4.preventDefault();
  }), onFocusOutside: t3[2] || (t3[2] = (e4) => {
    e4.preventDefault();
  }) }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`trap-focus`]));
} }), R = c({ __name: `DialogContentNonModal`, props: { forceMount: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = E(t2);
  j();
  let o2 = M(), s2 = f(false), c2 = f(false);
  return (e3, t3) => (l(), d(I, a({ ...r2, ...n(i2) }, { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    e4.defaultPrevented || (s2.value || n(o2).triggerElement.value?.focus(), e4.preventDefault()), s2.value = false, c2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = (e4) => {
    e4.defaultPrevented || (s2.value = true, e4.detail.originalEvent.type === `pointerdown` && (c2.value = true));
    let t4 = e4.target;
    n(o2).triggerElement.value?.contains(t4) && e4.preventDefault(), e4.detail.originalEvent.type === `focusin` && c2.value && e4.preventDefault();
  }) }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16));
} }), z = c({ __name: `DialogContent`, props: { forceMount: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, o2 = M(), s2 = E(i2), { forwardRef: c2 } = j();
  return (e3, t3) => (l(), d(n(k), { present: e3.forceMount || n(o2).open.value }, { default: u(() => [n(o2).modal.value ? (l(), d(L, a({ key: 0, ref: n(c2) }, { ...r2, ...n(s2), ...e3.$attrs }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16)) : (l(), d(R, a({ key: 1, ref: n(c2) }, { ...r2, ...n(s2), ...e3.$attrs }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16))]), _: 3 }, 8, [`present`]));
} }), B = c({ __name: `DialogDescription`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `p` } }, setup(e2) {
  let t2 = e2;
  j();
  let r2 = M();
  return (e3, i2) => (l(), d(n(v), a(t2, { id: n(r2).descriptionId }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), V = c({ __name: `DialogOverlayImpl`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = M();
  return S(true), j(), (e3, r2) => (l(), d(n(v), { as: e3.as, "as-child": e3.asChild, "data-state": n(t2).open.value ? `open` : `closed`, style: { "pointer-events": `auto` } }, { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `data-state`]));
} }), H = c({ __name: `DialogOverlay`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let r2 = M(), { forwardRef: i2 } = j();
  return (e3, o2) => n(r2)?.modal.value ? (l(), d(n(k), { key: 0, present: e3.forceMount || n(r2).open.value }, { default: u(() => [t(V, a(e3.$attrs, { ref: n(i2), as: e3.as, "as-child": e3.asChild }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`as`, `as-child`])]), _: 3 }, 8, [`present`])) : m(`v-if`, true);
} }), U = c({ __name: `DialogPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let r2 = t2;
  return (t3, i2) => (l(), d(n(D), e(g(r2)), { default: u(() => [p(t3.$slots, `default`)]), _: 3 }, 16));
} }), W = c({ __name: `DialogTitle`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `h2` } }, setup(e2) {
  let t2 = e2, r2 = M();
  return j(), (e3, i2) => (l(), d(n(v), a(t2, { id: n(r2).titleId }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), G = c({ __name: `DialogTrigger`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, r2 = M(), { forwardRef: o2, currentElement: s2 } = j();
  return r2.contentId || (r2.contentId = O(void 0, `reka-dialog-content`)), i(() => {
    r2.triggerElement.value = s2.value;
  }), (e3, i2) => (l(), d(n(v), a(t2, { ref: n(o2), type: e3.as === `button` ? `button` : void 0, "aria-haspopup": `dialog`, "aria-expanded": n(r2).open.value || false, "aria-controls": n(r2).open.value ? n(r2).contentId : void 0, "data-state": n(r2).open.value ? `open` : `closed`, onClick: n(r2).onOpenToggle }), { default: u(() => [p(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `aria-expanded`, `aria-controls`, `data-state`, `onClick`]));
} });
function K() {
  let e2 = h([]), t2 = (t3, i3) => {
    let { props: a3, defaultOpen: l3, destroyOnClose: u2 } = i3 || {}, d2 = s({ id: /* @__PURE__ */ Symbol(import.meta.dev ? `useOverlay` : ``), isOpen: !!l3, component: o(t3), isMounted: !!l3, destroyOnClose: !!u2, originalProps: a3 || {}, props: { ...a3 } });
    return e2.push(d2), { ...d2, open: (e3) => n2(d2.id, e3), close: (e3) => r2(d2.id, e3), patch: (e3) => c2(d2.id, e3) };
  }, n2 = (e3, t3) => {
    let n3 = l2(e3);
    t3 ? n3.props = { ...n3.originalProps, ...t3 } : n3.props = { ...n3.originalProps }, n3.isOpen = true, n3.isMounted = true;
    let r3 = new Promise((e4) => n3.resolvePromise = e4);
    return Object.assign(r3, { id: e3, isMounted: n3.isMounted, isOpen: n3.isOpen, result: r3 });
  }, r2 = (e3, t3) => {
    let n3 = l2(e3);
    n3.isOpen = false, n3.resolvePromise && (n3.resolvePromise = (n3.resolvePromise(t3), void 0));
  }, i2 = () => {
    e2.forEach((e3) => r2(e3.id));
  }, a2 = (t3) => {
    let n3 = l2(t3);
    if (n3.isMounted = false, n3.destroyOnClose) {
      let n4 = e2.findIndex((e3) => e3.id === t3);
      e2.splice(n4, 1);
    }
  }, c2 = (e3, t3) => {
    let n3 = l2(e3);
    n3.props = { ...n3.props, ...t3 };
  }, l2 = (t3) => {
    let n3 = e2.find((e3) => e3.id === t3);
    if (!n3) throw Error(`Overlay not found`);
    return n3;
  };
  return { overlays: e2, open: n2, close: r2, closeAll: i2, create: t2, patch: c2, unmount: a2, isOpen: (e3) => l2(e3).isOpen };
}
var q = b(K);
export {
  H as a,
  F as c,
  U as i,
  P as l,
  G as n,
  B as o,
  W as r,
  z as s,
  q as t
};
