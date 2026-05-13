import { D as e, E as t, Ht as n, Lt as r, On as i, Tn as a, Ut as o, Zn as s, _ as c, b as l, bt as u, ct as d, et as f, g as p, k as m, mt as h, o as g, qt as _, tr as v, tt as y, u as b, v as x, vn as S, wn as C, wt as w, xt as T, y as E } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as D } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { E as O, I as k, J as A, S as j, U as M, W as ee, _ as te, b as ne, i as N, n as P, r as F, v as re, x as ie, y as I, z as ae } from "./Button-BArxwKIq.js";
import { A as oe, L as se, T as L, b as R, f as z, j as B, k as V, o as H, r as ce, v as U } from "./dist-BY3QSpe-.js";
import { H as W, O as G, V as K, z as le } from "./namespaced-DHs_Dn1j.js";
import { C as ue, d as de, g as q, h as J, p as fe, t as pe, v as Y, y as X } from "./Tooltip-DkuatXWt.js";
import { t as me } from "./Badge-BtUXFb0u.js";
import { t as he } from "./Popover-B45T_X0m.js";
function ge(e2, t2) {
  return ue(e2) ? false : Array.isArray(e2) ? e2.some((e3) => M(e3, t2)) : M(e2, t2);
}
var [_e, ve] = O(`CollapsibleRoot`), ye = m({ __name: `CollapsibleRoot`, props: { defaultOpen: { type: Boolean, required: false, default: false }, open: { type: Boolean, required: false, default: void 0 }, disabled: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:open`], setup(e2, { expose: t2, emit: n2 }) {
  let r2 = e2, o2 = R(r2, `open`, n2, { defaultValue: r2.defaultOpen, passive: r2.open === void 0 }), { disabled: s2, unmountOnHide: c2 } = a(r2);
  return ve({ contentId: ``, disabled: s2, open: o2, unmountOnHide: c2, onOpenToggle: () => {
    s2.value || (o2.value = !o2.value);
  } }), t2({ open: o2 }), X(), (e3, t3) => (h(), x(i(j), { as: e3.as, "as-child": r2.asChild, "data-state": i(o2) ? `open` : `closed`, "data-disabled": i(s2) ? `` : void 0 }, { default: _(() => [T(e3.$slots, `default`, { open: i(o2) })]), _: 3 }, 8, [`as`, `as-child`, `data-state`, `data-disabled`]));
} }), be = m({ inheritAttrs: false, __name: `CollapsibleContent`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`contentFound`], setup(t2, { emit: r2 }) {
  let a2 = t2, o2 = r2, s2 = _e();
  s2.contentId || (s2.contentId = q(void 0, `reka-collapsible-content`));
  let c2 = S(), { forwardRef: l2, currentElement: u2 } = X(), m2 = S(0), g2 = S(0), v2 = p(() => s2.open.value), b2 = S(v2.value), C2 = S();
  n(() => [v2.value, c2.value?.present], async () => {
    await y();
    let e2 = u2.value;
    if (!e2) return;
    C2.value = C2.value || { transitionDuration: e2.style.transitionDuration, animationName: e2.style.animationName }, e2.style.transitionDuration = `0s`, e2.style.animationName = `none`;
    let t3 = e2.getBoundingClientRect();
    g2.value = t3.height, m2.value = t3.width, b2.value || (e2.style.transitionDuration = C2.value.transitionDuration, e2.style.animationName = C2.value.animationName);
  }, { immediate: true });
  let w2 = p(() => b2.value && s2.open.value);
  return d(() => {
    requestAnimationFrame(() => {
      b2.value = false;
    });
  }), z(u2, `beforematch`, (e2) => {
    requestAnimationFrame(() => {
      s2.onOpenToggle(), o2(`contentFound`);
    });
  }), (t3, n2) => (h(), x(i(J), { ref_key: `presentRef`, ref: c2, present: t3.forceMount || i(s2).open.value, "force-mount": true }, { default: _(({ present: n3 }) => [e(i(j), f(t3.$attrs, { id: i(s2).contentId, ref: i(l2), "as-child": a2.asChild, as: t3.as, hidden: n3 ? void 0 : i(s2).unmountOnHide.value ? `` : `until-found`, "data-state": w2.value ? void 0 : i(s2).open.value ? `open` : `closed`, "data-disabled": i(s2).disabled?.value ? `` : void 0, style: { "--reka-collapsible-content-height": `${g2.value}px`, "--reka-collapsible-content-width": `${m2.value}px` } }), { default: _(() => [!i(s2).unmountOnHide.value || n3 ? T(t3.$slots, `default`, { key: 0 }) : E(`v-if`, true)]), _: 2 }, 1040, [`id`, `as-child`, `as`, `hidden`, `data-state`, `data-disabled`, `style`])]), _: 3 }, 8, [`present`]));
} }), xe = m({ __name: `CollapsibleTrigger`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  X();
  let n2 = _e();
  return (e3, r2) => (h(), x(i(j), { type: e3.as === `button` ? `button` : void 0, as: e3.as, "as-child": t2.asChild, "aria-controls": i(n2).contentId, "aria-expanded": i(n2).open.value, "data-state": i(n2).open.value ? `open` : `closed`, "data-disabled": i(n2).disabled?.value ? `` : void 0, disabled: i(n2).disabled?.value, onClick: i(n2).onOpenToggle }, { default: _(() => [T(e3.$slots, `default`)]), _: 3 }, 8, [`type`, `as`, `as-child`, `aria-controls`, `aria-expanded`, `data-state`, `data-disabled`, `disabled`, `onClick`]));
} });
function Se({ type: e2, defaultValue: t2, modelValue: n2 }) {
  let r2 = n2 || t2;
  return n2 !== void 0 || t2 !== void 0 ? Array.isArray(r2) ? `multiple` : `single` : e2 ?? `single`;
}
function Ce({ type: e2, defaultValue: t2, modelValue: n2 }) {
  return e2 || Se({ type: e2, defaultValue: t2, modelValue: n2 });
}
function we({ type: e2, defaultValue: t2 }) {
  return t2 === void 0 ? e2 === `single` ? void 0 : [] : t2;
}
function Te(e2, t2) {
  let n2 = p(() => Ce(e2)), r2 = R(e2, `modelValue`, t2, { defaultValue: we(e2), passive: e2.modelValue === void 0, deep: true });
  function i2(e3) {
    if (n2.value === `single`) r2.value = M(e3, r2.value) ? void 0 : e3;
    else {
      let t3 = Array.isArray(r2.value) ? [...r2.value || []] : [r2.value].filter(Boolean);
      if (ge(t3, e3)) {
        let n3 = t3.findIndex((t4) => M(t4, e3));
        t3.splice(n3, 1);
      } else t3.push(e3);
      r2.value = t3;
    }
  }
  return { modelValue: r2, changeModelValue: i2, isSingle: p(() => n2.value === `single`) };
}
var [Ee, De] = O(`AccordionRoot`), Oe = m({ __name: `AccordionRoot`, props: { collapsible: { type: Boolean, required: false, default: false }, disabled: { type: Boolean, required: false, default: false }, dir: { type: String, required: false }, orientation: { type: String, required: false, default: `vertical` }, unmountOnHide: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, type: { type: String, required: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { dir: o2, disabled: s2, unmountOnHide: c2 } = a(n2), l2 = le(o2), { modelValue: u2, changeModelValue: d2, isSingle: f2 } = Te(n2, r2), { forwardRef: p2, currentElement: m2 } = X();
  return De({ disabled: s2, direction: l2, orientation: n2.orientation, parentElement: m2, isSingle: f2, collapsible: n2.collapsible, modelValue: u2, changeModelValue: d2, unmountOnHide: c2 }), (e3, t3) => (h(), x(i(j), { ref: i(p2), "as-child": e3.asChild, as: e3.as }, { default: _(() => [T(e3.$slots, `default`, { modelValue: i(u2) })]), _: 3 }, 8, [`as-child`, `as`]));
} }), ke = (function(e2) {
  return e2.Open = `open`, e2.Closed = `closed`, e2;
})(ke || {}), [Ae, je] = O(`AccordionItem`), Me = m({ __name: `AccordionItem`, props: { disabled: { type: Boolean, required: false }, value: { type: String, required: true }, unmountOnHide: { type: Boolean, required: false, default: void 0 }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2, { expose: t2 }) {
  let n2 = e2, r2 = Ee(), a2 = p(() => r2.isSingle.value ? n2.value === r2.modelValue.value : Array.isArray(r2.modelValue.value) && r2.modelValue.value.includes(n2.value)), o2 = p(() => r2.disabled.value || n2.disabled), s2 = p(() => o2.value ? `` : void 0), c2 = p(() => a2.value ? ke.Open : ke.Closed);
  t2({ open: a2, dataDisabled: s2 });
  let { currentRef: l2, currentElement: u2 } = X();
  je({ open: a2, dataState: c2, disabled: o2, dataDisabled: s2, triggerId: ``, currentRef: l2, currentElement: u2, value: p(() => n2.value) });
  function d2(e3) {
    let t3 = e3.target;
    if (Array.from(r2.parentElement.value?.querySelectorAll(`[data-reka-collection-item]`) ?? []).findIndex((e4) => e4 === t3) === -1) return null;
    K(e3, t3, r2.parentElement.value, { arrowKeyOptions: r2.orientation, dir: r2.direction.value, focus: true });
  }
  return (e3, t3) => (h(), x(i(ye), { "data-orientation": i(r2).orientation, "data-disabled": s2.value, "data-state": c2.value, disabled: o2.value, open: a2.value, as: n2.as, "as-child": n2.asChild, "unmount-on-hide": n2.unmountOnHide ?? i(r2).unmountOnHide.value, onKeydown: D(d2, [`up`, `down`, `left`, `right`, `home`, `end`]) }, { default: _(() => [T(e3.$slots, `default`, { open: a2.value })]), _: 3 }, 8, [`data-orientation`, `data-disabled`, `data-state`, `disabled`, `open`, `as`, `as-child`, `unmount-on-hide`]));
} }), Ne = m({ __name: `AccordionContent`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = Ee(), r2 = Ae();
  return X(), (e3, a2) => (h(), x(i(be), { role: `region`, "as-child": t2.asChild, as: e3.as, "force-mount": t2.forceMount, "aria-labelledby": i(r2).triggerId, "data-state": i(r2).dataState.value, "data-disabled": i(r2).dataDisabled.value, "data-orientation": i(n2).orientation, style: { "--reka-accordion-content-width": `var(--reka-collapsible-content-width)`, "--reka-accordion-content-height": `var(--reka-collapsible-content-height)` }, onContentFound: a2[0] || (a2[0] = (e4) => i(n2).changeModelValue(i(r2).value.value)) }, { default: _(() => [T(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`, `force-mount`, `aria-labelledby`, `data-state`, `data-disabled`, `data-orientation`]));
} }), Pe = m({ __name: `AccordionTrigger`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = Ee(), r2 = Ae();
  r2.triggerId || (r2.triggerId = q(void 0, `reka-accordion-trigger`));
  function a2() {
    let e3 = n2.isSingle.value && r2.open.value && !n2.collapsible;
    r2.disabled.value || e3 || n2.changeModelValue(r2.value.value);
  }
  return (e3, o2) => (h(), x(i(xe), { id: i(r2).triggerId, ref: i(r2).currentRef, "data-reka-collection-item": ``, as: t2.as, "as-child": t2.asChild, "aria-disabled": i(r2).disabled.value || void 0, "aria-expanded": i(r2).open.value || false, "data-disabled": i(r2).dataDisabled.value, "data-orientation": i(n2).orientation, "data-state": i(r2).dataState.value, disabled: i(r2).disabled.value, onClick: a2 }, { default: _(() => [T(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `as`, `as-child`, `aria-disabled`, `aria-expanded`, `data-disabled`, `data-orientation`, `data-state`, `disabled`]));
} });
function Z(e2) {
  return e2 ? `open` : `closed`;
}
function Fe(e2, t2) {
  return `${e2}-trigger-${t2}`;
}
function Ie(e2, t2) {
  return `${e2}-content-${t2}`;
}
var Le = `navigationMenu.linkSelect`, Q = `navigationMenu.rootContentDismiss`;
function Re(e2) {
  let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
    let t3 = e3.tagName === `INPUT` && e3.type === `hidden`;
    return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
function ze(e2) {
  let t2 = W();
  return e2.some((e3) => e3 === t2 ? true : (e3.focus(), W() !== t2));
}
function Be(e2) {
  return e2.forEach((e3) => {
    e3.dataset.tabindex = e3.getAttribute(`tabindex`) || ``, e3.setAttribute(`tabindex`, `-1`);
  }), () => {
    e2.forEach((e3) => {
      let t2 = e3.dataset.tabindex;
      e3.setAttribute(`tabindex`, t2);
    });
  };
}
function Ve(e2) {
  return (t2) => t2.pointerType === `mouse` ? e2(t2) : void 0;
}
var [$, He] = O([`NavigationMenuRoot`, `NavigationMenuSub`], `NavigationMenuContext`), Ue = m({ __name: `NavigationMenuRoot`, props: { modelValue: { type: String, required: false, default: void 0 }, defaultValue: { type: String, required: false }, dir: { type: String, required: false }, orientation: { type: String, required: false, default: `horizontal` }, delayDuration: { type: Number, required: false, default: 200 }, skipDelayDuration: { type: Number, required: false, default: 300 }, disableClickTrigger: { type: Boolean, required: false, default: false }, disableHoverTrigger: { type: Boolean, required: false, default: false }, disablePointerLeaveClose: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `nav` } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, s2 = R(r2, `modelValue`, n2, { defaultValue: r2.defaultValue ?? ``, passive: r2.modelValue === void 0 }), c2 = S(``), { forwardRef: l2, currentElement: u2 } = X(), d2 = S(), f2 = S(), m2 = S(), { getItems: g2, CollectionSlot: v2 } = G({ key: `NavigationMenu`, isProvider: true }), { delayDuration: y2, skipDelayDuration: b2, dir: C2, disableClickTrigger: w2, disableHoverTrigger: E2, unmountOnHide: D2 } = a(r2), O2 = le(C2), k2 = B(false, b2), A2 = se((e2) => {
    typeof e2 == `string` && (c2.value = s2.value, s2.value = e2);
  }, p(() => s2.value !== `` || k2.value ? 150 : y2.value));
  o(() => {
    s2.value && (m2.value = g2().map((e2) => e2.ref).find((e2) => e2.id.includes(s2.value)));
  }), z(u2, Q, M2), He({ isRootMenu: true, modelValue: s2, previousValue: c2, baseId: q(void 0, `reka-navigation-menu`), disableClickTrigger: w2, disableHoverTrigger: E2, dir: O2, unmountOnHide: D2, orientation: r2.orientation, rootNavigationMenu: u2, indicatorTrack: d2, activeTrigger: m2, onIndicatorTrackChange: (e2) => {
    d2.value = e2;
  }, viewport: f2, onViewportChange: (e2) => {
    f2.value = e2;
  }, onTriggerEnter: (e2) => {
    A2(e2);
  }, onTriggerLeave: () => {
    k2.value = true, A2(``);
  }, onContentEnter: () => {
    A2();
  }, onContentLeave: () => {
    r2.disablePointerLeaveClose || A2(``);
  }, onItemSelect: (e2) => {
    c2.value = s2.value, s2.value = e2;
  }, onItemDismiss: M2 });
  function M2() {
    c2.value = s2.value, s2.value = ``;
  }
  return (t3, n3) => (h(), x(i(v2), null, { default: _(() => [e(i(j), { ref: i(l2), as: t3.as, "as-child": t3.asChild, "data-orientation": t3.orientation, dir: i(O2), "data-reka-navigation-menu": `` }, { default: _(() => [T(t3.$slots, `default`, { modelValue: i(s2) })]), _: 3 }, 8, [`as`, `as-child`, `data-orientation`, `dir`])]), _: 3 }));
} }), [We, Ge] = O(`NavigationMenuItem`), Ke = m({ __name: `NavigationMenuItem`, props: { value: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `li` } }, setup(e2) {
  let t2 = e2;
  X();
  let { getItems: n2 } = G({ key: `NavigationMenu` }), r2 = $(), a2 = q(t2.value), o2 = S(), s2 = S(), c2 = Ie(r2.baseId, a2), l2 = () => ({}), u2 = S(false);
  async function d2(e3 = `start`) {
    let t3 = document.getElementById(c2);
    if (t3) {
      l2();
      let n3 = Re(t3);
      n3.length && ze(e3 === `start` ? n3 : n3.reverse());
    }
  }
  function f2() {
    let e3 = document.getElementById(c2);
    if (e3) {
      let t3 = Re(e3);
      t3.length && (l2 = Be(t3));
    }
  }
  Ge({ value: a2, contentId: c2, triggerRef: o2, focusProxyRef: s2, wasEscapeCloseRef: u2, onEntryKeyDown: d2, onFocusProxyEnter: d2, onContentFocusOutside: f2, onRootContentClose: f2 });
  function p2() {
    r2.onItemDismiss(), o2.value?.focus();
  }
  function m2(e3) {
    let t3 = W();
    if (e3.keyCode === 32 || e3.key === `Enter`) if (r2.modelValue.value === a2) {
      p2(), e3.preventDefault();
      return;
    } else {
      e3.target.click(), e3.preventDefault();
      return;
    }
    let i2 = n2().filter((e4) => e4.ref.parentElement?.hasAttribute(`data-menu-item`)).map((e4) => e4.ref);
    if (!i2.includes(t3)) return;
    let o3 = K(e3, t3, void 0, { itemsArray: i2, loop: false });
    o3 && o3?.focus(), e3.preventDefault(), e3.stopPropagation();
  }
  return (e3, t3) => (h(), x(i(j), { "as-child": e3.asChild, as: e3.as, "data-menu-item": ``, onKeydown: D(m2, [`up`, `down`, `left`, `right`, `home`, `end`, `space`]) }, { default: _(() => [T(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`]));
} }), qe = m({ __name: `NavigationMenuContentImpl`, props: { disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { getItems: a2 } = G({ key: `NavigationMenu` }), { forwardRef: s2, currentElement: c2 } = X(), l2 = $(), u2 = We(), d2 = Fe(l2.baseId, u2.value), m2 = Ie(l2.baseId, u2.value), g2 = S(null), v2 = p(() => {
    let e3 = a2().map((e4) => e4.ref.id.split(`trigger-`)[1]);
    l2.dir.value === `rtl` && e3.reverse();
    let t3 = e3.indexOf(l2.modelValue.value), n3 = e3.indexOf(l2.previousValue.value), r3 = u2.value === l2.modelValue.value, i2 = n3 === e3.indexOf(u2.value);
    if (!r3 && !i2) return g2.value;
    let o2 = (() => {
      if (t3 !== n3) {
        if (r3 && n3 !== -1) return t3 > n3 ? `from-end` : `from-start`;
        if (i2 && t3 !== -1) return t3 > n3 ? `to-start` : `to-end`;
      }
      return null;
    })();
    return g2.value = o2, o2;
  });
  function y2(e3) {
    if (r2(`focusOutside`, e3), r2(`interactOutside`, e3), e3.detail.originalEvent.target.hasAttribute(`data-navigation-menu-trigger`) && e3.preventDefault(), !e3.defaultPrevented) {
      u2.onContentFocusOutside();
      let t3 = e3.target;
      l2.rootNavigationMenu?.value?.contains(t3) && e3.preventDefault();
    }
  }
  function b2(e3) {
    if (r2(`pointerDownOutside`, e3), !e3.defaultPrevented) {
      let t3 = e3.target, n3 = a2().some((e4) => e4.ref.contains(t3)), r3 = l2.isRootMenu && l2.viewport.value?.contains(t3);
      (n3 || r3 || !l2.isRootMenu) && e3.preventDefault();
    }
  }
  o((e3) => {
    let t3 = c2.value;
    if (l2.isRootMenu && t3) {
      let n3 = () => {
        l2.onItemDismiss(), u2.onRootContentClose(), t3.contains(W()) && u2.triggerRef.value?.focus();
      };
      t3.addEventListener(Q, n3), e3(() => t3.removeEventListener(Q, n3));
    }
  });
  function C2(e3) {
    r2(`escapeKeyDown`, e3), e3.defaultPrevented || (l2.onItemDismiss(), u2.triggerRef?.value?.focus(), u2.wasEscapeCloseRef.value = true);
  }
  function w2(e3) {
    if (e3.target.closest(`[data-reka-navigation-menu]`) !== l2.rootNavigationMenu.value) return;
    let t3 = e3.altKey || e3.ctrlKey || e3.metaKey, n3 = e3.key === `Tab` && !t3, r3 = Re(e3.currentTarget);
    if (n3) {
      let t4 = W(), n4 = r3.findIndex((e4) => e4 === t4);
      if (ze(e3.shiftKey ? r3.slice(0, n4).reverse() : r3.slice(n4 + 1, r3.length))) e3.preventDefault();
      else {
        u2.focusProxyRef.value?.focus();
        return;
      }
    }
    K(e3, W(), void 0, { itemsArray: r3, loop: false, enableIgnoredElement: true })?.focus();
  }
  function E2() {
    let e3 = new Event(Q, { bubbles: true, cancelable: true });
    c2.value?.dispatchEvent(e3);
  }
  return (e3, t3) => (h(), x(i(fe), f({ id: i(m2), ref: i(s2), "aria-labelledby": i(d2), "data-motion": v2.value, "data-state": i(Z)(i(l2).modelValue.value === i(u2).value), "data-orientation": i(l2).orientation }, n2, { onKeydown: w2, onEscapeKeyDown: C2, onPointerDownOutside: b2, onFocusOutside: y2, onDismiss: E2 }), { default: _(() => [T(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`, `data-motion`, `data-state`, `data-orientation`]));
} }), Je = m({ inheritAttrs: false, __name: `NavigationMenuContent`, props: { forceMount: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(t2, { emit: n2 }) {
  let r2 = t2, a2 = n2, o2 = Y(V(r2, `forceMount`), a2), { forwardRef: s2 } = X(), c2 = $(), l2 = We(), u2 = p(() => l2.value === c2.modelValue.value), d2 = p(() => c2.viewport.value && !c2.modelValue.value && c2.previousValue.value ? c2.previousValue.value === l2.value : false);
  return (t3, n3) => (h(), x(b, { to: i(L) && i(c2).viewport.value ? i(c2).viewport.value : `body`, disabled: i(L) && i(c2).viewport.value ? !i(c2).viewport.value : true }, [e(i(J), { present: t3.forceMount || u2.value || d2.value, "force-mount": !i(c2).unmountOnHide.value }, { default: _(({ present: r3 }) => [e(qe, f({ ref: i(s2), "data-state": i(Z)(u2.value), style: { pointerEvents: !u2.value && i(c2).isRootMenu ? `none` : void 0 } }, { ...t3.$attrs, ...i(o2) }, { hidden: !r3, onPointerenter: n3[0] || (n3[0] = (e2) => i(c2).onContentEnter(i(l2).value)), onPointerleave: n3[1] || (n3[1] = (e2) => i(Ve)(() => i(c2).onContentLeave())(e2)), onPointerDownOutside: n3[2] || (n3[2] = (e2) => a2(`pointerDownOutside`, e2)), onFocusOutside: n3[3] || (n3[3] = (e2) => a2(`focusOutside`, e2)), onInteractOutside: n3[4] || (n3[4] = (e2) => a2(`interactOutside`, e2)) }), { default: _(() => [T(t3.$slots, `default`)]), _: 2 }, 1040, [`data-state`, `style`, `hidden`])]), _: 3 }, 8, [`present`, `force-mount`])], 8, [`to`, `disabled`]));
} }), Ye = m({ inheritAttrs: false, __name: `NavigationMenuIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2, { forwardRef: r2 } = X(), a2 = $(), s2 = S(), c2 = p(() => a2.orientation === `horizontal`), l2 = p(() => !!a2.modelValue.value), { activeTrigger: u2 } = a2;
  function d2() {
    u2.value && (s2.value = { size: c2.value ? u2.value.offsetWidth : u2.value.offsetHeight, position: c2.value ? u2.value.offsetLeft : u2.value.offsetTop });
  }
  return o(() => {
    a2.modelValue.value && d2();
  }), U(u2, d2), U(a2.indicatorTrack, d2), (t3, o2) => i(a2).indicatorTrack.value ? (h(), x(b, { key: 0, to: i(a2).indicatorTrack.value }, [e(i(J), { present: t3.forceMount || l2.value }, { default: _(() => [e(i(j), f({ ref: i(r2), "aria-hidden": `true`, "data-state": l2.value ? `visible` : `hidden`, "data-orientation": i(a2).orientation, "as-child": n2.asChild, as: t3.as, style: { ...s2.value ? { "--reka-navigation-menu-indicator-size": `${s2.value.size}px`, "--reka-navigation-menu-indicator-position": `${s2.value.position}px` } : {} } }, t3.$attrs), { default: _(() => [T(t3.$slots, `default`)]), _: 3 }, 16, [`data-state`, `data-orientation`, `as-child`, `as`, `style`])]), _: 3 }, 8, [`present`])], 8, [`to`])) : E(`v-if`, true);
} }), Xe = m({ __name: `NavigationMenuLink`, props: { active: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `a` } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, a2 = n2, { CollectionItem: o2 } = G({ key: `NavigationMenu` });
  X();
  async function s2(e2) {
    let t3 = new CustomEvent(Le, { bubbles: true, cancelable: true, detail: { originalEvent: e2 } });
    if (a2(`select`, t3), !t3.defaultPrevented && !e2.metaKey) {
      let t4 = new CustomEvent(Q, { bubbles: true, cancelable: true });
      e2.target?.dispatchEvent(t4);
    }
  }
  return (t3, n3) => (h(), x(i(o2), null, { default: _(() => [e(i(j), { as: t3.as, "data-active": t3.active ? `` : void 0, "aria-current": t3.active ? `page` : void 0, "as-child": r2.asChild, onClick: s2 }, { default: _(() => [T(t3.$slots, `default`)]), _: 3 }, 8, [`as`, `data-active`, `aria-current`, `as-child`])]), _: 3 }));
} }), Ze = m({ inheritAttrs: false, __name: `NavigationMenuList`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `ul` } }, setup(t2) {
  let n2 = t2, r2 = $(), { forwardRef: a2, currentElement: o2 } = X();
  return d(() => {
    r2.onIndicatorTrackChange(o2.value);
  }), (t3, o3) => (h(), x(i(j), { ref: i(a2), style: { position: `relative` } }, { default: _(() => [e(i(j), f(t3.$attrs, { "as-child": n2.asChild, as: t3.as, "data-orientation": i(r2).orientation }), { default: _(() => [T(t3.$slots, `default`)]), _: 3 }, 16, [`as-child`, `as`, `data-orientation`])]), _: 3 }, 512));
} }), Qe = [`aria-owns`], $e = m({ inheritAttrs: false, __name: `NavigationMenuTrigger`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(t2) {
  let n2 = t2, r2 = $(), a2 = We(), { CollectionItem: o2 } = G({ key: `NavigationMenu` }), { forwardRef: s2, currentElement: c2 } = X(), u2 = S(``), m2 = S(``), v2 = B(false, 300), y2 = S(false), b2 = p(() => a2.value === r2.modelValue.value);
  d(() => {
    a2.triggerRef = c2, u2.value = Fe(r2.baseId, a2.value), m2.value = Ie(r2.baseId, a2.value);
  });
  function x2() {
    r2.disableHoverTrigger.value || (y2.value = false, a2.wasEscapeCloseRef.value = false);
  }
  function C2(e2) {
    if (!r2.disableHoverTrigger.value && e2.pointerType === `mouse`) {
      if (n2.disabled || y2.value || a2.wasEscapeCloseRef.value || v2.value) return;
      r2.onTriggerEnter(a2.value), v2.value = true;
    }
  }
  function w2(e2) {
    if (!r2.disableHoverTrigger.value && e2.pointerType === `mouse`) {
      if (n2.disabled) return;
      r2.onTriggerLeave(), v2.value = false;
    }
  }
  function D2(e2) {
    (!(`pointerType` in e2) || e2.pointerType === `mouse`) && r2.disableClickTrigger.value || v2.value || (b2.value ? r2.onItemSelect(``) : r2.onItemSelect(a2.value), y2.value = b2.value);
  }
  function O2(e2) {
    let t3 = { horizontal: `ArrowDown`, vertical: r2.dir.value === `rtl` ? `ArrowLeft` : `ArrowRight` }[r2.orientation];
    b2.value && e2.key === t3 && (a2.onEntryKeyDown(), e2.preventDefault(), e2.stopPropagation());
  }
  function k2(e2) {
    e2 && (a2.focusProxyRef.value = H(e2));
  }
  function A2(e2) {
    let t3 = document.getElementById(a2.contentId), n3 = e2.relatedTarget, r3 = n3 === c2.value, i2 = t3?.contains(n3);
    (r3 || !i2) && a2.onFocusProxyEnter(r3 ? `start` : `end`);
  }
  return (t3, a3) => (h(), l(g, null, [e(i(o2), null, { default: _(() => [e(i(j), f({ id: u2.value, ref: i(s2), disabled: t3.disabled, "data-disabled": t3.disabled ? `` : void 0, "data-state": i(Z)(b2.value), "data-navigation-menu-trigger": ``, "aria-expanded": b2.value, "aria-controls": m2.value, "as-child": n2.asChild, as: t3.as }, t3.$attrs, { onPointerenter: x2, onPointermove: C2, onPointerleave: w2, onClick: D2, onKeydown: O2 }), { default: _(() => [T(t3.$slots, `default`)]), _: 3 }, 16, [`id`, `disabled`, `data-disabled`, `data-state`, `aria-expanded`, `aria-controls`, `as-child`, `as`])]), _: 3 }), b2.value ? (h(), l(g, { key: 0 }, [e(i(de), { ref: k2, "aria-hidden": `true`, tabindex: 0, onFocus: A2 }), i(r2).viewport ? (h(), l(`span`, { key: 0, "aria-owns": m2.value }, null, 8, Qe)) : E(`v-if`, true)], 64)) : E(`v-if`, true)], 64));
} }), et = m({ inheritAttrs: false, __name: `NavigationMenuViewport`, props: { forceMount: { type: Boolean, required: false }, align: { type: String, required: false, default: `center` }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let r2 = t2, { forwardRef: a2, currentElement: o2 } = X(), s2 = $(), { activeTrigger: c2, rootNavigationMenu: l2, modelValue: u2 } = s2, d2 = S(), m2 = S(), g2 = p(() => !!s2.modelValue.value);
  n(o2, () => {
    s2.onViewportChange(o2.value);
  });
  let v2 = S();
  n([u2, g2], () => {
    y(() => {
      o2.value && requestAnimationFrame(() => {
        v2.value = o2.value?.querySelector(`[data-state=open]`);
      });
    });
  }, { immediate: true });
  function b2() {
    if (v2.value && c2.value && l2.value) {
      let e2 = document.documentElement.offsetWidth, t3 = document.documentElement.offsetHeight, n2 = l2.value.getBoundingClientRect(), i2 = c2.value.getBoundingClientRect(), { offsetWidth: a3, offsetHeight: o3 } = v2.value, s3 = i2.left - n2.left, u3 = i2.top - n2.top, d3 = null, f2 = null;
      switch (r2.align) {
        case `start`:
          d3 = s3, f2 = u3;
          break;
        case `end`:
          d3 = s3 - a3 + i2.width, f2 = u3 - o3 + i2.height;
          break;
        default:
          d3 = s3 - a3 / 2 + i2.width / 2, f2 = u3 - o3 / 2 + i2.height / 2;
      }
      d3 + n2.left < 10 && (d3 = 10 - n2.left);
      let p2 = d3 + n2.left + a3;
      p2 > e2 - 10 && (d3 -= p2 - e2 + 10, d3 < 10 - n2.left && (d3 = 10 - n2.left)), f2 + n2.top < 10 && (f2 = 10 - n2.top);
      let h2 = f2 + n2.top + o3;
      h2 > t3 - 10 && (f2 -= h2 - t3 + 10, f2 < 10 - n2.top && (f2 = 10 - n2.top)), d3 = Math.round(d3), f2 = Math.round(f2), m2.value = { left: d3, top: f2 };
    }
  }
  return U(v2, () => {
    v2.value && (d2.value = { width: v2.value.offsetWidth, height: v2.value.offsetHeight }, b2());
  }), U([globalThis.document?.body, l2], () => {
    b2();
  }), (t3, n2) => (h(), x(i(J), { present: t3.forceMount || g2.value, "force-mount": !i(s2).unmountOnHide.value, onAfterLeave: n2[2] || (n2[2] = () => {
    d2.value = void 0, m2.value = void 0;
  }) }, { default: _(({ present: r3 }) => [e(i(j), f(t3.$attrs, { ref: i(a2), as: t3.as, "as-child": t3.asChild, "data-state": i(Z)(g2.value), "data-orientation": i(s2).orientation, style: { pointerEvents: !g2.value && i(s2).isRootMenu ? `none` : void 0, "--reka-navigation-menu-viewport-width": d2.value ? `${d2.value?.width}px` : void 0, "--reka-navigation-menu-viewport-height": d2.value ? `${d2.value?.height}px` : void 0, "--reka-navigation-menu-viewport-left": m2.value ? `${m2.value?.left}px` : void 0, "--reka-navigation-menu-viewport-top": m2.value ? `${m2.value?.top}px` : void 0 }, hidden: !r3, onPointerenter: n2[0] || (n2[0] = (e2) => i(s2).onContentEnter(i(s2).modelValue.value)), onPointerleave: n2[1] || (n2[1] = (e2) => i(Ve)(() => i(s2).onContentLeave())(e2)) }), { default: _(() => [T(t3.$slots, `default`)]), _: 2 }, 1040, [`as`, `as-child`, `data-state`, `data-orientation`, `style`, `hidden`])]), _: 3 }, 8, [`present`, `force-mount`]));
} }), tt = { slots: { root: `relative flex gap-1.5 [&>div]:min-w-0`, list: `isolate min-w-0`, label: `w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5`, item: `min-w-0`, link: `group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2`, linkLeadingIcon: `shrink-0 size-5`, linkLeadingAvatar: `shrink-0`, linkLeadingAvatarSize: `2xs`, linkLeadingChipSize: `sm`, linkTrailing: `group ms-auto inline-flex gap-1.5 items-center`, linkTrailingBadge: `shrink-0`, linkTrailingBadgeSize: `sm`, linkTrailingIcon: `size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200`, linkLabel: `truncate`, linkLabelExternalIcon: `inline-block size-3 align-top text-dimmed`, childList: `isolate`, childLabel: `text-xs text-highlighted`, childItem: ``, childLink: `group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2`, childLinkWrapper: `min-w-0`, childLinkIcon: `size-5 shrink-0`, childLinkLabel: `truncate`, childLinkLabelExternalIcon: `inline-block size-3 align-top text-dimmed`, childLinkDescription: `text-muted`, separator: `px-2 h-px bg-border`, viewportWrapper: `absolute top-full left-0 flex w-full`, viewport: `relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left,right] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-1`, content: ``, indicator: `absolute left-0 data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-2 w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200`, arrow: `relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-1 rounded-xs` }, variants: { color: { primary: { link: `focus-visible:before:ring-primary`, childLink: `focus-visible:before:ring-primary` }, secondary: { link: `focus-visible:before:ring-secondary`, childLink: `focus-visible:before:ring-secondary` }, success: { link: `focus-visible:before:ring-success`, childLink: `focus-visible:before:ring-success` }, info: { link: `focus-visible:before:ring-info`, childLink: `focus-visible:before:ring-info` }, warning: { link: `focus-visible:before:ring-warning`, childLink: `focus-visible:before:ring-warning` }, error: { link: `focus-visible:before:ring-error`, childLink: `focus-visible:before:ring-error` }, neutral: { link: `focus-visible:before:ring-inverted`, childLink: `focus-visible:before:ring-inverted` } }, highlightColor: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, variant: { pill: ``, link: `` }, orientation: { horizontal: { root: `items-center justify-between`, list: `flex items-center`, item: `py-2`, link: `px-2.5 py-1.5 before:inset-x-px before:inset-y-0`, childList: `grid p-2`, childLink: `px-3 py-2 gap-2 before:inset-x-px before:inset-y-0`, childLinkLabel: `font-medium`, content: `absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto` }, vertical: { root: `flex-col`, link: `flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0`, childLabel: `px-1.5 py-0.5`, childLink: `p-1.5 gap-1.5 before:inset-y-px before:inset-x-0` } }, contentOrientation: { horizontal: { viewportWrapper: `justify-center`, content: `data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]` }, vertical: { viewport: `sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left) rtl:left-auto rtl:right-[calc(100%-var(--reka-navigation-menu-viewport-left)-var(--reka-navigation-menu-viewport-width))]` } }, active: { true: { childLink: `before:bg-elevated text-highlighted`, childLinkIcon: `text-default` }, false: { link: `text-muted`, linkLeadingIcon: `text-dimmed`, childLink: [`hover:before:bg-elevated/50 text-default hover:text-highlighted`, `transition-colors before:transition-colors`], childLinkIcon: [`text-dimmed group-hover:text-default`, `transition-colors`] } }, disabled: { true: { link: `cursor-not-allowed opacity-75` } }, highlight: { true: `` }, level: { true: `` }, collapsed: { true: `` } }, compoundVariants: [{ orientation: `horizontal`, contentOrientation: `horizontal`, class: { childList: `grid-cols-2 gap-2` } }, { orientation: `horizontal`, contentOrientation: `vertical`, class: { childList: `gap-1`, content: `w-60` } }, { orientation: `vertical`, collapsed: false, class: { childList: `ms-5 border-s border-default`, childItem: `ps-1.5 -ms-px`, content: `data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden` } }, { orientation: `vertical`, collapsed: true, class: { link: `px-1.5`, linkLabel: `hidden`, linkTrailing: `hidden`, content: `shadow-sm rounded-sm min-h-6 p-1` } }, { orientation: `horizontal`, highlight: true, class: { link: [`after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full`, `after:transition-colors`] } }, { orientation: `vertical`, highlight: true, level: true, class: { link: [`after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full`, `after:transition-colors`] } }, { disabled: false, active: false, variant: `pill`, class: { link: [`hover:text-highlighted hover:before:bg-elevated/50`, `transition-colors before:transition-colors`], linkLeadingIcon: [`group-hover:text-default`, `transition-colors`] } }, { disabled: false, active: false, variant: `pill`, orientation: `horizontal`, class: { link: `data-[state=open]:text-highlighted`, linkLeadingIcon: `group-data-[state=open]:text-default` } }, { disabled: false, variant: `pill`, highlight: true, orientation: `horizontal`, class: { link: `data-[state=open]:before:bg-elevated/50` } }, { disabled: false, variant: `pill`, highlight: false, active: false, orientation: `horizontal`, class: { link: `data-[state=open]:before:bg-elevated/50` } }, { color: `primary`, variant: `pill`, active: true, class: { link: `text-primary`, linkLeadingIcon: `text-primary group-data-[state=open]:text-primary` } }, { color: `secondary`, variant: `pill`, active: true, class: { link: `text-secondary`, linkLeadingIcon: `text-secondary group-data-[state=open]:text-secondary` } }, { color: `success`, variant: `pill`, active: true, class: { link: `text-success`, linkLeadingIcon: `text-success group-data-[state=open]:text-success` } }, { color: `info`, variant: `pill`, active: true, class: { link: `text-info`, linkLeadingIcon: `text-info group-data-[state=open]:text-info` } }, { color: `warning`, variant: `pill`, active: true, class: { link: `text-warning`, linkLeadingIcon: `text-warning group-data-[state=open]:text-warning` } }, { color: `error`, variant: `pill`, active: true, class: { link: `text-error`, linkLeadingIcon: `text-error group-data-[state=open]:text-error` } }, { color: `neutral`, variant: `pill`, active: true, class: { link: `text-highlighted`, linkLeadingIcon: `text-highlighted group-data-[state=open]:text-highlighted` } }, { variant: `pill`, active: true, highlight: false, class: { link: `before:bg-elevated` } }, { variant: `pill`, active: true, highlight: true, disabled: false, class: { link: [`hover:before:bg-elevated/50`, `before:transition-colors`] } }, { disabled: false, active: false, variant: `link`, class: { link: [`hover:text-highlighted`, `transition-colors`], linkLeadingIcon: [`group-hover:text-default`, `transition-colors`] } }, { disabled: false, active: false, variant: `link`, orientation: `horizontal`, class: { link: `data-[state=open]:text-highlighted`, linkLeadingIcon: `group-data-[state=open]:text-default` } }, { color: `primary`, variant: `link`, active: true, class: { link: `text-primary`, linkLeadingIcon: `text-primary group-data-[state=open]:text-primary` } }, { color: `secondary`, variant: `link`, active: true, class: { link: `text-secondary`, linkLeadingIcon: `text-secondary group-data-[state=open]:text-secondary` } }, { color: `success`, variant: `link`, active: true, class: { link: `text-success`, linkLeadingIcon: `text-success group-data-[state=open]:text-success` } }, { color: `info`, variant: `link`, active: true, class: { link: `text-info`, linkLeadingIcon: `text-info group-data-[state=open]:text-info` } }, { color: `warning`, variant: `link`, active: true, class: { link: `text-warning`, linkLeadingIcon: `text-warning group-data-[state=open]:text-warning` } }, { color: `error`, variant: `link`, active: true, class: { link: `text-error`, linkLeadingIcon: `text-error group-data-[state=open]:text-error` } }, { color: `neutral`, variant: `link`, active: true, class: { link: `text-highlighted`, linkLeadingIcon: `text-highlighted group-data-[state=open]:text-highlighted` } }, { highlightColor: `primary`, highlight: true, level: true, active: true, class: { link: `after:bg-primary` } }, { highlightColor: `secondary`, highlight: true, level: true, active: true, class: { link: `after:bg-secondary` } }, { highlightColor: `success`, highlight: true, level: true, active: true, class: { link: `after:bg-success` } }, { highlightColor: `info`, highlight: true, level: true, active: true, class: { link: `after:bg-info` } }, { highlightColor: `warning`, highlight: true, level: true, active: true, class: { link: `after:bg-warning` } }, { highlightColor: `error`, highlight: true, level: true, active: true, class: { link: `after:bg-error` } }, { highlightColor: `neutral`, highlight: true, level: true, active: true, class: { link: `after:bg-inverted` } }], defaultVariants: { color: `primary`, highlightColor: `primary`, variant: `pill` } }, nt = Object.assign({ inheritAttrs: false }, { __name: `NavigationMenu`, props: { as: { type: null, required: false }, type: { type: null, required: false, default: `multiple` }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, trailingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true }, items: { type: null, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, orientation: { type: null, required: false, default: `horizontal` }, collapsed: { type: Boolean, required: false }, tooltip: { type: [Boolean, Object], required: false }, popover: { type: [Boolean, Object], required: false }, highlight: { type: Boolean, required: false }, highlightColor: { type: null, required: false }, content: { type: Object, required: false }, contentOrientation: { type: null, required: false, default: `horizontal` }, arrow: { type: Boolean, required: false }, valueKey: { type: null, required: false, default: `value` }, labelKey: { type: null, required: false, default: `label` }, class: { type: null, required: false }, ui: { type: Object, required: false }, delayDuration: { type: Number, required: false, default: 0 }, disableClickTrigger: { type: Boolean, required: false }, disableHoverTrigger: { type: Boolean, required: false }, skipDelayDuration: { type: Number, required: false }, disablePointerLeaveClose: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true }, disabled: { type: Boolean, required: false }, collapsible: { type: Boolean, required: false, default: true } }, emits: [`update:modelValue`], setup(n2, { emit: a2 }) {
  let o2 = n2, d2 = a2, m2 = r(), y2 = A(), b2 = ie(`navigationMenu`, o2), S2 = Y(p(() => ({ as: o2.as, delayDuration: o2.delayDuration, skipDelayDuration: o2.skipDelayDuration, orientation: o2.orientation, disableClickTrigger: o2.disableClickTrigger, disableHoverTrigger: o2.disableHoverTrigger, disablePointerLeaveClose: o2.disablePointerLeaveClose, unmountOnHide: o2.unmountOnHide })), d2), D2 = Y(oe(o2, `collapsible`, `disabled`, `type`, `unmountOnHide`), d2), O2 = C(() => o2.content), j2 = C(() => ee(typeof o2.tooltip == `boolean` ? {} : o2.tooltip, { ...o2.orientation === `vertical` && { delayDuration: 0, content: { side: `right` } } })), M2 = C(() => ee(typeof o2.popover == `boolean` ? {} : o2.popover, { mode: `hover`, content: { side: `right`, align: `start`, alignOffset: 2 } })), [se2, L2] = ce(), [R2, z2] = ce({ props: { item: Object, index: Number, level: Number, listIndex: Number } }), B2 = p(() => ne({ extend: ne(tt), ...y2.ui?.navigationMenu || {} })({ orientation: o2.orientation, contentOrientation: o2.orientation === `vertical` ? void 0 : o2.contentOrientation, collapsed: o2.collapsed, color: o2.color, variant: o2.variant, highlight: o2.highlight, highlightColor: o2.highlightColor || o2.color })), V2 = p(() => o2.items?.length ? ae(o2.items) ? o2.items : [o2.items] : []);
  function H2(e2, t2, n3, r2) {
    let i2 = V2.value.length > 1 ? `group-${r2}-` : ``;
    return k(e2, o2.valueKey) ?? (n3 > 0 ? `${i2}item-${n3}-${t2}` : `${i2}item-${t2}`);
  }
  function U2(e2, t2 = 0, n3 = 0) {
    let r2 = e2.reduce((e3, r3, i2) => ((r3.defaultOpen || r3.open) && e3.push(H2(r3, i2, t2, n3)), e3), []);
    return o2.type === `single` ? r2[0] : r2;
  }
  function W2(e2, t2) {
    t2.children?.length && (o2.orientation === `horizontal` ? e2.preventDefault() : o2.orientation === `vertical` && !o2.collapsed && (e2.preventDefault(), e2.stopPropagation()));
  }
  return (r2, a3) => (h(), l(g, null, [e(i(se2), null, { default: _(({ item: a4, active: c2, index: u2 }) => [T(r2.$slots, a4.slot || `item`, { item: a4, index: u2, active: c2, ui: B2.value }, () => [T(r2.$slots, a4.slot ? `${a4.slot}-leading` : `item-leading`, { item: a4, active: c2, index: u2, ui: B2.value }, () => [a4.avatar ? (h(), x(te, f({ key: 0, size: a4.ui?.linkLeadingAvatarSize || i(b2)?.linkLeadingAvatarSize || B2.value.linkLeadingAvatarSize() }, a4.avatar, { "data-slot": `linkLeadingAvatar`, class: B2.value.linkLeadingAvatar({ class: [i(b2)?.linkLeadingAvatar, a4.ui?.linkLeadingAvatar], active: c2, disabled: !!a4.disabled }) }), null, 16, [`size`, `class`])) : a4.icon && a4.chip ? (h(), x(re, f({ key: 1, size: a4.ui?.linkLeadingChipSize || i(b2)?.linkLeadingChipSize || B2.value.linkLeadingChipSize(), inset: `` }, typeof a4.chip == `object` ? a4.chip : {}, { "data-slot": `linkLeadingChip` }), { default: _(() => [e(I, { name: a4.icon, "data-slot": `linkLeadingIcon`, class: s(B2.value.linkLeadingIcon({ class: [i(b2)?.linkLeadingIcon, a4.ui?.linkLeadingIcon], active: c2, disabled: !!a4.disabled })) }, null, 8, [`name`, `class`])]), _: 2 }, 1040, [`size`])) : a4.icon ? (h(), x(I, { key: 2, name: a4.icon, "data-slot": `linkLeadingIcon`, class: s(B2.value.linkLeadingIcon({ class: [i(b2)?.linkLeadingIcon, a4.ui?.linkLeadingIcon], active: c2, disabled: !!a4.disabled })) }, null, 8, [`name`, `class`])) : E(``, true)]), i(k)(a4, o2.labelKey) || m2[a4.slot ? `${a4.slot}-label` : `item-label`] ? (h(), l(`span`, { key: 0, "data-slot": `linkLabel`, class: s(B2.value.linkLabel({ class: [i(b2)?.linkLabel, a4.ui?.linkLabel] })) }, [T(r2.$slots, a4.slot ? `${a4.slot}-label` : `item-label`, { item: a4, active: c2, index: u2 }, () => [t(v(i(k)(a4, o2.labelKey)), 1)]), a4.target === `_blank` && n2.externalIcon !== false ? (h(), x(I, { key: 0, name: typeof n2.externalIcon == `string` ? n2.externalIcon : i(y2).ui.icons.external, "data-slot": `linkLabelExternalIcon`, class: s(B2.value.linkLabelExternalIcon({ class: [i(b2)?.linkLabelExternalIcon, a4.ui?.linkLabelExternalIcon], active: c2 })) }, null, 8, [`name`, `class`])) : E(``, true)], 2)) : E(``, true), a4.badge || a4.badge === 0 || n2.orientation === `horizontal` && (a4.children?.length || m2[a4.slot ? `${a4.slot}-content` : `item-content`]) || n2.orientation === `vertical` && a4.children?.length || a4.trailingIcon || m2[a4.slot ? `${a4.slot}-trailing` : `item-trailing`] ? (h(), x(w(n2.orientation === `vertical` && a4.children?.length && !n2.collapsed ? i(Pe) : `span`), { key: 1, as: n2.orientation === `vertical` && a4.children?.length && !n2.collapsed ? `span` : void 0, "data-slot": `linkTrailing`, class: s(B2.value.linkTrailing({ class: [i(b2)?.linkTrailing, a4.ui?.linkTrailing] })), onClick: (e2) => W2(e2, a4) }, { default: _(() => [T(r2.$slots, a4.slot ? `${a4.slot}-trailing` : `item-trailing`, { item: a4, active: c2, index: u2, ui: B2.value }, () => [a4.badge || a4.badge === 0 ? (h(), x(me, f({ key: 0, color: `neutral`, variant: `outline`, size: a4.ui?.linkTrailingBadgeSize || i(b2)?.linkTrailingBadgeSize || B2.value.linkTrailingBadgeSize() }, typeof a4.badge == `string` || typeof a4.badge == `number` ? { label: a4.badge } : a4.badge, { "data-slot": `linkTrailingBadge`, class: B2.value.linkTrailingBadge({ class: [i(b2)?.linkTrailingBadge, a4.ui?.linkTrailingBadge] }) }), null, 16, [`size`, `class`])) : E(``, true), n2.orientation === `horizontal` && (a4.children?.length || m2[a4.slot ? `${a4.slot}-content` : `item-content`]) || n2.orientation === `vertical` && a4.children?.length ? (h(), x(I, { key: 1, name: a4.trailingIcon || n2.trailingIcon || i(y2).ui.icons.chevronDown, "data-slot": `linkTrailingIcon`, class: s(B2.value.linkTrailingIcon({ class: [i(b2)?.linkTrailingIcon, a4.ui?.linkTrailingIcon], active: c2 })) }, null, 8, [`name`, `class`])) : a4.trailingIcon ? (h(), x(I, { key: 2, name: a4.trailingIcon, "data-slot": `linkTrailingIcon`, class: s(B2.value.linkTrailingIcon({ class: [i(b2)?.linkTrailingIcon, a4.ui?.linkTrailingIcon], active: c2 })) }, null, 8, [`name`, `class`])) : E(``, true)])]), _: 2 }, 1032, [`as`, `class`, `onClick`])) : E(``, true)])]), _: 3 }), e(i(R2), null, { default: _(({ item: a4, index: d3, level: p2 = 0, listIndex: S3 = 0 }) => [(h(), x(w(n2.orientation === `vertical` && !n2.collapsed ? i(Me) : i(Ke)), f({ as: `li` }, n2.orientation === `vertical` && !n2.collapsed ? { disabled: !!a4.disabled } : {}, { value: H2(a4, d3, p2, S3) }), { default: _(() => [n2.orientation === `vertical` && a4.type === `label` && !n2.collapsed ? (h(), l(`div`, { key: 0, "data-slot": `label`, class: s(B2.value.label({ class: [i(b2)?.label, a4.ui?.label, a4.class] })) }, [e(i(L2), { item: a4, index: d3 }, null, 8, [`item`, `index`])], 2)) : a4.type === `label` ? E(``, true) : (h(), x(P, f({ key: 1 }, n2.orientation === `vertical` && a4.children?.length && !n2.collapsed && a4.type === `trigger` ? {} : i(N)(a4), { custom: `` }), { default: _(({ active: S4, ...C2 }) => [(h(), x(w(n2.orientation === `horizontal` && (a4.children?.length || m2[a4.slot ? `${a4.slot}-content` : `item-content`]) ? i($e) : n2.orientation === `vertical` && a4.children?.length && !n2.collapsed && !C2.href ? i(Pe) : i(Xe)), { "as-child": ``, active: S4 || a4.active, disabled: a4.disabled, onSelect: a4.onSelect }, { default: _(() => [n2.orientation === `vertical` && n2.collapsed && a4.children?.length && (o2.popover || a4.popover) ? (h(), x(he, f({ key: 0 }, { ...M2.value, ...typeof a4.popover == `boolean` ? {} : a4.popover || {} }, { ui: { content: B2.value.content({ class: [i(b2)?.content, a4.ui?.content] }) } }), { content: _(({ close: p3 }) => [T(r2.$slots, a4.slot ? `${a4.slot}-content` : `item-content`, { item: a4, active: S4 || a4.active, index: d3, ui: B2.value, close: p3 }, () => [c(`ul`, { "data-slot": `childList`, class: s(B2.value.childList({ class: [i(b2)?.childList, a4.ui?.childList] })) }, [c(`li`, { "data-slot": `childLabel`, class: s(B2.value.childLabel({ class: [i(b2)?.childLabel, a4.ui?.childLabel] })) }, v(i(k)(a4, o2.labelKey)), 3), (h(true), l(g, null, u(a4.children, (r3, u2) => (h(), l(`li`, { key: u2, "data-slot": `childItem`, class: s(B2.value.childItem({ class: [i(b2)?.childItem, a4.ui?.childItem] })) }, [e(P, f({ ref_for: true }, i(N)(r3), { custom: `` }), { default: _(({ active: l2, ...u3 }) => [e(i(Xe), { "as-child": ``, active: l2, onSelect: r3.onSelect }, { default: _(() => [e(F, f({ ref_for: true }, u3, { "data-slot": `childLink`, class: B2.value.childLink({ class: [i(b2)?.childLink, a4.ui?.childLink, r3.class], active: l2 }) }), { default: _(() => [r3.icon ? (h(), x(I, { key: 0, name: r3.icon, "data-slot": `childLinkIcon`, class: s(B2.value.childLinkIcon({ class: [i(b2)?.childLinkIcon, a4.ui?.childLinkIcon], active: l2 })) }, null, 8, [`name`, `class`])) : E(``, true), c(`span`, { "data-slot": `childLinkLabel`, class: s(B2.value.childLinkLabel({ class: [i(b2)?.childLinkLabel, a4.ui?.childLinkLabel], active: l2 })) }, [t(v(i(k)(r3, o2.labelKey)) + ` `, 1), r3.target === `_blank` && n2.externalIcon !== false ? (h(), x(I, { key: 0, name: typeof n2.externalIcon == `string` ? n2.externalIcon : i(y2).ui.icons.external, "data-slot": `childLinkLabelExternalIcon`, class: s(B2.value.childLinkLabelExternalIcon({ class: [i(b2)?.childLinkLabelExternalIcon, a4.ui?.childLinkLabelExternalIcon], active: l2 })) }, null, 8, [`name`, `class`])) : E(``, true)], 2)]), _: 2 }, 1040, [`class`])]), _: 2 }, 1032, [`active`, `onSelect`])]), _: 2 }, 1040)], 2))), 128))], 2)])]), default: _(() => [e(F, f(C2, { "data-slot": `link`, class: B2.value.link({ class: [i(b2)?.link, a4.ui?.link, a4.class], active: S4 || a4.active, disabled: !!a4.disabled, level: p2 > 0 }) }), { default: _(() => [e(i(L2), { item: a4, active: S4 || a4.active, index: d3 }, null, 8, [`item`, `active`, `index`])]), _: 2 }, 1040, [`class`])]), _: 2 }, 1040, [`ui`])) : n2.orientation === `vertical` && n2.collapsed && (o2.tooltip || a4.tooltip) || n2.orientation === `horizontal` && a4.tooltip ? (h(), x(pe, f({ key: 1, text: i(k)(a4, o2.labelKey) }, { ...j2.value, ...typeof a4.tooltip == `boolean` ? {} : a4.tooltip || {} }), { default: _(() => [e(F, f(C2, { "data-slot": `link`, class: B2.value.link({ class: [i(b2)?.link, a4.ui?.link, a4.class], active: S4 || a4.active, disabled: !!a4.disabled, level: p2 > 0 }) }), { default: _(() => [e(i(L2), { item: a4, active: S4 || a4.active, index: d3 }, null, 8, [`item`, `active`, `index`])]), _: 2 }, 1040, [`class`])]), _: 2 }, 1040, [`text`])) : (h(), x(F, f({ key: 2 }, C2, { "data-slot": `link`, class: B2.value.link({ class: [i(b2)?.link, a4.ui?.link, a4.class], active: S4 || a4.active, disabled: !!a4.disabled, level: n2.orientation === `horizontal` || p2 > 0 }) }), { default: _(() => [e(i(L2), { item: a4, active: S4 || a4.active, index: d3 }, null, 8, [`item`, `active`, `index`])]), _: 2 }, 1040, [`class`]))]), _: 2 }, 1064, [`active`, `disabled`, `onSelect`])), n2.orientation === `horizontal` && (a4.children?.length || m2[a4.slot ? `${a4.slot}-content` : `item-content`]) ? (h(), x(i(Je), f({ key: 0 }, O2.value, { "data-slot": `content`, class: B2.value.content({ class: [i(b2)?.content, a4.ui?.content] }) }), { default: _(() => [T(r2.$slots, a4.slot ? `${a4.slot}-content` : `item-content`, { item: a4, active: S4 || a4.active, index: d3, ui: B2.value }, () => [c(`ul`, { "data-slot": `childList`, class: s(B2.value.childList({ class: [i(b2)?.childList, a4.ui?.childList] })) }, [(h(true), l(g, null, u(a4.children, (r3, u2) => (h(), l(`li`, { key: u2, "data-slot": `childItem`, class: s(B2.value.childItem({ class: [i(b2)?.childItem, a4.ui?.childItem] })) }, [e(P, f({ ref_for: true }, i(N)(r3), { custom: `` }), { default: _(({ active: u3, ...d4 }) => [e(i(Xe), { "as-child": ``, active: u3, onSelect: r3.onSelect }, { default: _(() => [e(F, f({ ref_for: true }, d4, { "data-slot": `childLink`, class: B2.value.childLink({ class: [i(b2)?.childLink, a4.ui?.childLink, r3.class], active: u3 }) }), { default: _(() => [r3.icon ? (h(), x(I, { key: 0, name: r3.icon, "data-slot": `childLinkIcon`, class: s(B2.value.childLinkIcon({ class: [i(b2)?.childLinkIcon, a4.ui?.childLinkIcon], active: u3 })) }, null, 8, [`name`, `class`])) : E(``, true), c(`div`, { "data-slot": `childLinkWrapper`, class: s(B2.value.childLinkWrapper({ class: [i(b2)?.childLinkWrapper, a4.ui?.childLinkWrapper] })) }, [c(`p`, { "data-slot": `childLinkLabel`, class: s(B2.value.childLinkLabel({ class: [i(b2)?.childLinkLabel, a4.ui?.childLinkLabel], active: u3 })) }, [t(v(i(k)(r3, o2.labelKey)) + ` `, 1), r3.target === `_blank` && n2.externalIcon !== false ? (h(), x(I, { key: 0, name: typeof n2.externalIcon == `string` ? n2.externalIcon : i(y2).ui.icons.external, "data-slot": `childLinkLabelExternalIcon`, class: s(B2.value.childLinkLabelExternalIcon({ class: [i(b2)?.childLinkLabelExternalIcon, a4.ui?.childLinkLabelExternalIcon], active: u3 })) }, null, 8, [`name`, `class`])) : E(``, true)], 2), r3.description ? (h(), l(`p`, { key: 0, "data-slot": `childLinkDescription`, class: s(B2.value.childLinkDescription({ class: [i(b2)?.childLinkDescription, a4.ui?.childLinkDescription], active: u3 })) }, v(r3.description), 3)) : E(``, true)], 2)]), _: 2 }, 1040, [`class`])]), _: 2 }, 1032, [`active`, `onSelect`])]), _: 2 }, 1040)], 2))), 128))], 2)])]), _: 2 }, 1040, [`class`])) : E(``, true)]), _: 2 }, 1040)), n2.orientation === `vertical` && a4.children?.length && !n2.collapsed ? (h(), x(i(Ne), { key: 2, "data-slot": `content`, class: s(B2.value.content({ class: [i(b2)?.content, a4.ui?.content] })) }, { default: _(() => [e(i(Oe), f({ ...i(D2), defaultValue: U2(a4.children, p2 + 1, S3) }, { as: `ul`, "data-slot": `childList`, class: B2.value.childList({ class: [i(b2)?.childList, a4.ui?.childList] }) }), { default: _(() => [(h(true), l(g, null, u(a4.children, (e2, t2) => (h(), x(i(z2), { key: t2, item: e2, index: t2, level: p2 + 1, "list-index": S3, "data-slot": `childItem`, class: s(B2.value.childItem({ class: [i(b2)?.childItem, e2.ui?.childItem] })) }, null, 8, [`item`, `index`, `level`, `list-index`, `class`]))), 128))]), _: 2 }, 1040, [`class`])]), _: 2 }, 1032, [`class`])) : E(``, true)]), _: 2 }, 1040, [`value`]))]), _: 3 }), e(i(Ue), f({ ...i(S2), ...n2.orientation === `horizontal` ? { modelValue: n2.modelValue, defaultValue: n2.defaultValue } : {}, ...r2.$attrs }, { "data-collapsed": n2.collapsed, "data-slot": `root`, class: B2.value.root({ class: [i(b2)?.root, o2.class] }) }), { default: _(() => [T(r2.$slots, `list-leading`), (h(true), l(g, null, u(V2.value, (e2, t2) => (h(), l(g, { key: `list-${t2}` }, [(h(), x(w(n2.orientation === `vertical` ? i(Oe) : i(Ze)), f({ ref_for: true }, n2.orientation === `vertical` && !n2.collapsed ? { ...i(D2), modelValue: n2.modelValue, defaultValue: n2.defaultValue ?? U2(e2, 0, t2) } : {}, { as: `ul`, "data-slot": `list`, class: B2.value.list({ class: i(b2)?.list }) }), { default: _(() => [(h(true), l(g, null, u(e2, (e3, n3) => (h(), x(i(z2), { key: `list-${t2}-${n3}`, item: e3, index: n3, "list-index": t2, "data-slot": `item`, class: s(B2.value.item({ class: [i(b2)?.item, e3.ui?.item] })) }, null, 8, [`item`, `index`, `list-index`, `class`]))), 128))]), _: 2 }, 1040, [`class`])), n2.orientation === `vertical` && t2 < V2.value.length - 1 ? (h(), l(`div`, { key: 0, "data-slot": `separator`, class: s(B2.value.separator({ class: i(b2)?.separator })) }, null, 2)) : E(``, true)], 64))), 128)), T(r2.$slots, `list-trailing`), n2.orientation === `horizontal` ? (h(), l(`div`, { key: 0, "data-slot": `viewportWrapper`, class: s(B2.value.viewportWrapper({ class: i(b2)?.viewportWrapper })) }, [n2.arrow ? (h(), x(i(Ye), { key: 0, "data-slot": `indicator`, class: s(B2.value.indicator({ class: i(b2)?.indicator })) }, { default: _(() => [c(`div`, { "data-slot": `arrow`, class: s(B2.value.arrow({ class: i(b2)?.arrow })) }, null, 2)]), _: 1 }, 8, [`class`])) : E(``, true), e(i(et), { "data-slot": `viewport`, class: s(B2.value.viewport({ class: i(b2)?.viewport })) }, null, 8, [`class`])], 2)) : E(``, true)]), _: 3 }, 16, [`data-collapsed`, `class`])], 64));
} });
export {
  nt as t
};
