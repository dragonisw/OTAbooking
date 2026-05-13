import { D as e, E as t, Ht as n, J as r, Lt as i, On as a, Tn as o, Wt as s, Zn as c, _ as l, b as u, bt as d, ct as f, er as p, et as m, g as h, it as g, k as _, mt as v, o as y, qt as b, rt as x, tr as S, v as C, vn as w, xn as T, xt as E, y as D } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as O, l as k } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { E as A, I as j, J as M, S as N, _ as P, b as F, t as ee, x as I, y as L } from "./Button-BArxwKIq.js";
import { A as te, b as R, v as ne } from "./dist-BY3QSpe-.js";
import { i as re } from "./vue-router-BY1VLoSx.js";
import { f as z, z as B } from "./namespaced-DHs_Dn1j.js";
import { g as V, h as H, t as ie, v as U, y as W } from "./Tooltip-DkuatXWt.js";
import { n as G, t as ae } from "./FluidCalculatorSlideover-BFyumpjW.js";
import { n as K, t as oe } from "./Tree-D7mU_mDV.js";
import { t as se } from "./useOverlay-C2LwRyT9.js";
import { n as ce } from "./useToast-pUqC-jjk.js";
import { t as q } from "./Badge-BtUXFb0u.js";
import { n as le } from "./index.browser-DTH_RVqO.js";
import { n as ue, t as de } from "./DashboardNavbar-BDcOUCmr.js";
import { n as J, r as Y, t as X } from "./WizardTreeItem-0TZxtfy4.js";
var [Z, fe] = A(`TabsRoot`), pe = _({ __name: `TabsRoot`, props: { defaultValue: { type: null, required: false }, orientation: { type: String, required: false, default: `horizontal` }, dir: { type: String, required: false }, activationMode: { type: String, required: false, default: `automatic` }, modelValue: { type: null, required: false }, unmountOnHide: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { orientation: i2, unmountOnHide: s2, dir: c2 } = o(n2), l2 = B(c2);
  W();
  let u2 = R(n2, `modelValue`, r2, { defaultValue: n2.defaultValue, passive: n2.modelValue === void 0 }), d2 = w(), f2 = T(/* @__PURE__ */ new Set());
  return fe({ modelValue: u2, changeModelValue: (e3) => {
    u2.value = e3;
  }, orientation: i2, dir: l2, unmountOnHide: s2, activationMode: n2.activationMode, baseId: V(void 0, `reka-tabs`), tabsList: d2, contentIds: f2, registerContent: (e3) => {
    f2.value = /* @__PURE__ */ new Set([...f2.value, e3]);
  }, unregisterContent: (e3) => {
    let t3 = new Set(f2.value);
    t3.delete(e3), f2.value = t3;
  } }), (e3, t3) => (v(), C(a(N), { dir: a(l2), "data-orientation": a(i2), "as-child": e3.asChild, as: e3.as }, { default: b(() => [E(e3.$slots, `default`, { modelValue: a(u2) })]), _: 3 }, 8, [`dir`, `data-orientation`, `as-child`, `as`]));
} });
function Q(e2, t2) {
  return `${e2}-trigger-${t2}`;
}
function $(e2, t2) {
  return `${e2}-content-${t2}`;
}
var me = _({ __name: `TabsContent`, props: { value: { type: [String, Number], required: true }, forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2, { forwardRef: r2 } = W(), i2 = Z(), o2 = h(() => Q(i2.baseId, n2.value)), s2 = h(() => $(i2.baseId, n2.value)), c2 = h(() => n2.value === i2.modelValue.value), l2 = w(c2.value);
  return f(() => {
    i2.registerContent(n2.value), requestAnimationFrame(() => {
      l2.value = false;
    });
  }), g(() => {
    i2.unregisterContent(n2.value);
  }), (t3, n3) => (v(), C(a(H), { present: t3.forceMount || c2.value, "force-mount": `` }, { default: b(({ present: n4 }) => [e(a(N), { id: s2.value, ref: a(r2), "as-child": t3.asChild, as: t3.as, role: `tabpanel`, "data-state": c2.value ? `active` : `inactive`, "data-orientation": a(i2).orientation.value, "aria-labelledby": o2.value, hidden: !n4, tabindex: `0`, style: p({ animationDuration: l2.value ? `0s` : void 0 }) }, { default: b(() => [!a(i2).unmountOnHide.value || n4 ? E(t3.$slots, `default`, { key: 0 }) : D(`v-if`, true)]), _: 2 }, 1032, [`id`, `as-child`, `as`, `data-state`, `data-orientation`, `aria-labelledby`, `hidden`, `style`])]), _: 3 }, 8, [`present`]));
} }), he = _({ __name: `TabsIndicator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2, { expose: t2 }) {
  let r2 = e2, i2 = Z();
  t2({ updateIndicatorStyle: l2 }), W();
  let o2 = w({ size: null, position: null }), c2 = w([]);
  n(() => [i2.modelValue.value, i2?.dir.value], () => {
    l2();
  }, { immediate: true, flush: `post` }), s(() => {
    c2.value = Array.from(i2.tabsList.value?.querySelectorAll(`[role="tab"]`) || []);
  }), ne(h(() => [i2.tabsList.value, ...c2.value]), l2);
  function l2() {
    let e3 = i2.tabsList.value?.querySelector(`[role="tab"][data-state="active"]`);
    e3 && (i2.orientation.value === `horizontal` ? o2.value = { size: e3.offsetWidth, position: e3.offsetLeft } : o2.value = { size: e3.offsetHeight, position: e3.offsetTop });
  }
  return (e3, t3) => typeof o2.value.size == `number` ? (v(), C(a(N), m({ key: 0 }, r2, { style: { "--reka-tabs-indicator-size": `${o2.value.size}px`, "--reka-tabs-indicator-position": `${o2.value.position}px` } }), { default: b(() => [E(e3.$slots, `default`)]), _: 3 }, 16, [`style`])) : D(`v-if`, true);
} }), ge = _({ __name: `TabsList`, props: { loop: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let { loop: n2 } = o(t2), { forwardRef: r2, currentElement: i2 } = W(), s2 = Z();
  return s2.tabsList = i2, (t3, i3) => (v(), C(a(z), { "as-child": ``, orientation: a(s2).orientation.value, dir: a(s2).dir.value, loop: a(n2) }, { default: b(() => [e(a(N), { ref: a(r2), role: `tablist`, "as-child": t3.asChild, as: t3.as, "aria-orientation": a(s2).orientation.value }, { default: b(() => [E(t3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`, `aria-orientation`])]), _: 3 }, 8, [`orientation`, `dir`, `loop`]));
} }), _e = _({ __name: `TabsTrigger`, props: { value: { type: [String, Number], required: true }, disabled: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(t2) {
  let n2 = t2, { forwardRef: r2 } = W(), i2 = Z(), o2 = h(() => Q(i2.baseId, n2.value)), s2 = h(() => i2.contentIds.value.has(n2.value) ? $(i2.baseId, n2.value) : void 0), c2 = h(() => n2.value === i2.modelValue.value);
  return (t3, n3) => (v(), C(a(K), { "as-child": ``, focusable: !t3.disabled, active: c2.value }, { default: b(() => [e(a(N), { id: o2.value, ref: a(r2), role: `tab`, type: t3.as === `button` ? `button` : void 0, as: t3.as, "as-child": t3.asChild, "aria-selected": c2.value ? `true` : `false`, "aria-controls": s2.value, "data-state": c2.value ? `active` : `inactive`, disabled: t3.disabled, "data-disabled": t3.disabled ? `` : void 0, "data-orientation": a(i2).orientation.value, onMousedown: n3[0] || (n3[0] = k((e2) => {
    !t3.disabled && e2.ctrlKey === false ? a(i2).changeModelValue(t3.value) : e2.preventDefault();
  }, [`left`])), onKeydown: n3[1] || (n3[1] = O((e2) => a(i2).changeModelValue(t3.value), [`enter`, `space`])), onFocus: n3[2] || (n3[2] = () => {
    let e2 = a(i2).activationMode !== `manual`;
    !c2.value && !t3.disabled && e2 && a(i2).changeModelValue(t3.value);
  }) }, { default: b(() => [E(t3.$slots, `default`)]), _: 3 }, 8, [`id`, `type`, `as`, `as-child`, `aria-selected`, `aria-controls`, `data-state`, `disabled`, `data-disabled`, `data-orientation`])]), _: 3 }, 8, [`focusable`, `active`]));
} }), ve = { slots: { root: `flex items-center gap-2`, list: `relative flex p-1 group`, indicator: `absolute transition-[translate,width] duration-200`, trigger: [`group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75`, `transition-colors`], leadingIcon: `shrink-0`, leadingAvatar: `shrink-0`, leadingAvatarSize: ``, label: `truncate`, trailingBadge: `shrink-0`, trailingBadgeSize: `sm`, content: `focus:outline-none w-full` }, variants: { color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, variant: { pill: { list: `bg-elevated rounded-lg`, trigger: `grow`, indicator: `rounded-md shadow-xs` }, link: { list: `border-default`, indicator: `rounded-full`, trigger: `focus:outline-none` } }, orientation: { horizontal: { root: `flex-col`, list: `w-full`, indicator: `left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)`, trigger: `justify-center` }, vertical: { list: `flex-col`, indicator: `top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)` } }, size: { xs: { trigger: `px-2 py-1 text-xs gap-1`, leadingIcon: `size-4`, leadingAvatarSize: `3xs` }, sm: { trigger: `px-2.5 py-1.5 text-xs gap-1.5`, leadingIcon: `size-4`, leadingAvatarSize: `3xs` }, md: { trigger: `px-3 py-1.5 text-sm gap-1.5`, leadingIcon: `size-5`, leadingAvatarSize: `2xs` }, lg: { trigger: `px-3 py-2 text-sm gap-2`, leadingIcon: `size-5`, leadingAvatarSize: `2xs` }, xl: { trigger: `px-3 py-2 text-base gap-2`, leadingIcon: `size-6`, leadingAvatarSize: `xs` } } }, compoundVariants: [{ orientation: `horizontal`, variant: `pill`, class: { indicator: `inset-y-1` } }, { orientation: `horizontal`, variant: `link`, class: { list: `border-b -mb-px`, indicator: `-bottom-px h-px` } }, { orientation: `vertical`, variant: `pill`, class: { indicator: `inset-x-1`, list: `items-center` } }, { orientation: `vertical`, variant: `link`, class: { list: `border-s -ms-px`, indicator: `-start-px w-px` } }, { color: `primary`, variant: `pill`, class: { indicator: `bg-primary`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary` } }, { color: `secondary`, variant: `pill`, class: { indicator: `bg-secondary`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary` } }, { color: `success`, variant: `pill`, class: { indicator: `bg-success`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success` } }, { color: `info`, variant: `pill`, class: { indicator: `bg-info`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info` } }, { color: `warning`, variant: `pill`, class: { indicator: `bg-warning`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning` } }, { color: `error`, variant: `pill`, class: { indicator: `bg-error`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error` } }, { color: `neutral`, variant: `pill`, class: { indicator: `bg-inverted`, trigger: `data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted` } }, { color: `primary`, variant: `link`, class: { indicator: `bg-primary`, trigger: `data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary` } }, { color: `secondary`, variant: `link`, class: { indicator: `bg-secondary`, trigger: `data-[state=active]:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary` } }, { color: `success`, variant: `link`, class: { indicator: `bg-success`, trigger: `data-[state=active]:text-success focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success` } }, { color: `info`, variant: `link`, class: { indicator: `bg-info`, trigger: `data-[state=active]:text-info focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info` } }, { color: `warning`, variant: `link`, class: { indicator: `bg-warning`, trigger: `data-[state=active]:text-warning focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning` } }, { color: `error`, variant: `link`, class: { indicator: `bg-error`, trigger: `data-[state=active]:text-error focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error` } }, { color: `neutral`, variant: `link`, class: { indicator: `bg-inverted`, trigger: `data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted` } }], defaultVariants: { color: `primary`, variant: `pill`, size: `md` } }, ye = { __name: `Tabs`, props: { as: { type: null, required: false }, items: { type: Array, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, orientation: { type: null, required: false, default: `horizontal` }, content: { type: Boolean, required: false, default: true }, valueKey: { type: null, required: false, default: `value` }, labelKey: { type: null, required: false, default: `label` }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultValue: { type: [String, Number], required: false, default: `0` }, modelValue: { type: [String, Number], required: false }, activationMode: { type: String, required: false }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: [`update:modelValue`], setup(n2, { expose: r2, emit: o2 }) {
  let s2 = n2, l2 = o2, f2 = i(), p2 = M(), g2 = I(`tabs`, s2), _2 = U(te(s2, `as`, `unmountOnHide`), l2), x2 = h(() => F({ extend: F(ve), ...p2.ui?.tabs || {} })({ color: s2.color, variant: s2.variant, size: s2.size, orientation: s2.orientation })), T2 = w([]);
  function O2(e2, t2) {
    T2.value[e2] = t2;
  }
  return r2({ triggersRef: T2 }), (r3, i2) => (v(), C(a(pe), m(a(_2), { "model-value": n2.modelValue, "default-value": n2.defaultValue, orientation: n2.orientation, "activation-mode": n2.activationMode, "data-slot": `root`, class: x2.value.root({ class: [a(g2)?.root, s2.class] }) }), { default: b(() => [e(a(ge), { "data-slot": `list`, class: c(x2.value.list({ class: a(g2)?.list })) }, { default: b(() => [e(a(he), { "data-slot": `indicator`, class: c(x2.value.indicator({ class: a(g2)?.indicator })) }, null, 8, [`class`]), E(r3.$slots, `list-leading`), (v(true), u(y, null, d(n2.items, (e2, n3) => (v(), C(a(_e), { key: a(j)(e2, s2.valueKey) ?? n3, ref_for: true, ref: (e3) => O2(n3, e3), value: a(j)(e2, s2.valueKey) ?? String(n3), disabled: e2.disabled, "data-slot": `trigger`, class: c(x2.value.trigger({ class: [a(g2)?.trigger, e2.ui?.trigger] })) }, { default: b(() => [E(r3.$slots, `leading`, { item: e2, index: n3, ui: x2.value }, () => [e2.icon ? (v(), C(L, { key: 0, name: e2.icon, "data-slot": `leadingIcon`, class: c(x2.value.leadingIcon({ class: [a(g2)?.leadingIcon, e2.ui?.leadingIcon] })) }, null, 8, [`name`, `class`])) : e2.avatar ? (v(), C(P, m({ key: 1, size: e2.ui?.leadingAvatarSize || a(g2)?.leadingAvatarSize || x2.value.leadingAvatarSize() }, { ref_for: true }, e2.avatar, { "data-slot": `leadingAvatar`, class: x2.value.leadingAvatar({ class: [a(g2)?.leadingAvatar, e2.ui?.leadingAvatar] }) }), null, 16, [`size`, `class`])) : D(``, true)]), a(j)(e2, s2.labelKey) || f2.default ? (v(), u(`span`, { key: 0, "data-slot": `label`, class: c(x2.value.label({ class: [a(g2)?.label, e2.ui?.label] })) }, [E(r3.$slots, `default`, { item: e2, index: n3 }, () => [t(S(a(j)(e2, s2.labelKey)), 1)])], 2)) : D(``, true), E(r3.$slots, `trailing`, { item: e2, index: n3, ui: x2.value }, () => [e2.badge || e2.badge === 0 ? (v(), C(q, m({ key: 0, color: `neutral`, variant: `outline`, size: e2.ui?.trailingBadgeSize || a(g2)?.trailingBadgeSize || x2.value.trailingBadgeSize() }, { ref_for: true }, typeof e2.badge == `string` || typeof e2.badge == `number` ? { label: e2.badge } : e2.badge, { "data-slot": `trailingBadge`, class: x2.value.trailingBadge({ class: [a(g2)?.trailingBadge, e2.ui?.trailingBadge] }) }), null, 16, [`size`, `class`])) : D(``, true)])]), _: 2 }, 1032, [`value`, `disabled`, `class`]))), 128)), E(r3.$slots, `list-trailing`)]), _: 3 }, 8, [`class`]), n2.content ? (v(true), u(y, { key: 0 }, d(n2.items, (e2, n3) => (v(), C(a(me), { key: a(j)(e2, s2.valueKey) ?? n3, value: a(j)(e2, s2.valueKey) ?? String(n3), "data-slot": `content`, class: c(x2.value.content({ class: [a(g2)?.content, e2.ui?.content, e2.class] })) }, { default: b(() => [E(r3.$slots, e2.slot || `content`, { item: e2, index: n3, ui: x2.value }, () => [t(S(e2.content), 1)])]), _: 2 }, 1032, [`value`, `class`]))), 128)) : D(``, true)]), _: 3 }, 16, [`model-value`, `default-value`, `orientation`, `activation-mode`, `class`]));
} }, be = { class: `text-xs opacity-60 font-normal` }, xe = { key: 0, class: `flex-1 overflow-y-auto p-4` }, Se = { key: 0, class: `flex flex-col items-center justify-center h-full text-center` }, Ce = { class: `text-lg font-semibold text-highlighted mb-2` }, we = { class: `text-dimmed mb-6 max-w-sm` }, Te = { class: `flex gap-2` }, Ee = { key: 1, class: `flex-1 overflow-y-auto p-4` }, De = { key: 0, class: `flex flex-col items-center justify-center h-full text-center` }, Oe = { class: `text-lg font-semibold text-highlighted mb-2` }, ke = { class: `text-dimmed mb-6 max-w-sm` }, Ae = { class: `flex gap-2` }, je = _({ __name: `Typography`, setup(i2) {
  let o2 = se(), s2 = ce(), c2 = r(`theme`), d2 = w(`text`), { expandedTree: f2, items: p2, updateThemeFromItems: m2, findItemByUid: h2, addChild: g2, addNext: _2, deleteItem: y2, initializeItems: T2, findOrCreateItemByKey: E2 } = Y(`text`, c2), { shouldBeDimmed: O2, wasRecentlyMoved: k2, isDescendantOf: A2 } = J(p2, m2, h2), { expandedTree: j2, items: M2, updateThemeFromItems: N2, findItemByUid: P2, addChild: F2, addNext: I2, deleteItem: te2, initializeItems: R2 } = Y(`font`, c2), { shouldBeDimmed: ne2, wasRecentlyMoved: z2, isDescendantOf: B2 } = J(M2, N2, P2);
  n(() => c2.value.namespaces.text, () => {
    T2();
  }, { deep: true }), n(() => c2.value.namespaces.font, () => {
    R2();
  }, { deep: true });
  let V2 = w([{ label: wp.i18n.__(`Text Size`, `windpress`), icon: `lucide:a-large-small`, value: `text` }, { label: wp.i18n.__(`Font Family`, `windpress`), icon: `lucide:type`, value: `font` }]);
  function H2(e2) {
    g2(e2);
  }
  function U2(e2) {
    _2(e2);
  }
  function W2(e2) {
    F2(e2);
  }
  function K2(e2) {
    I2(e2);
  }
  function Z2(e2) {
    y2(e2);
  }
  function fe2(e2) {
    te2(e2);
  }
  function pe2() {
    d2.value === `text` ? _2() : d2.value === `font` && I2();
  }
  function Q2(e2) {
    let t2 = null, n2 = [], r2 = e2.miscPrefix.trim().replace(/^[\s-]+|[\s-]+$/g, ``).replace(/[^a-zA-Z0-9-]/g, `_`);
    r2 && (t2 = E2(r2));
    for (let t3 = 1; t3 <= e2.stepsSmaller; t3++) {
      let r3 = ``;
      t3 === e2.stepsSmaller ? r3 += `sm` : t3 === e2.stepsSmaller - 1 ? r3 += `xs` : r3 += `${e2.stepsSmaller - t3}xs`;
      let i4 = e2.minSize, a2 = e2.maxSize;
      for (let n3 = 0; n3 < e2.stepsSmaller + 1 - t3; n3++) i4 /= e2.minScale, a2 /= e2.maxScale;
      n2.push({ key: r3, value: G(i4, a2, e2.minViewport, e2.maxViewport) });
    }
    n2.push({ key: `base`, value: G(e2.minSize, e2.maxSize, e2.minViewport, e2.maxViewport) });
    for (let t3 = 1; t3 <= e2.stepsLarger; t3++) {
      let r3 = ``;
      t3 === 1 ? r3 += `lg` : t3 === 2 ? r3 += `xl` : r3 += `${t3 - 1}xl`;
      let i4 = e2.minSize, a2 = e2.maxSize;
      for (let n3 = 0; n3 < t3; n3++) i4 *= e2.minScale, a2 *= e2.maxScale;
      n2.push({ key: r3, value: G(i4, a2, e2.minViewport, e2.maxViewport) });
    }
    let i3 = n2.map((e3) => ({ value: le(7), var: { key: e3.key, value: e3.value }, defaultExpanded: true, onToggle: (e4) => {
      e4.preventDefault();
    } }));
    t2 ? (t2.children || (t2.children = []), i3.forEach((e3) => {
      let n3 = t2.children.find((t3) => t3.var.key === e3.var.key);
      n3 ? n3.var.value = e3.var.value : t2.children.push(e3);
    })) : i3.forEach((e3) => {
      let t3 = p2.value.find((t4) => t4.var.key === e3.var.key);
      t3 ? t3.var.value = e3.var.value : p2.value.push(e3);
    });
  }
  async function $2() {
    let e2 = await o2.create(ae, { destroyOnClose: true }).open().result;
    if (!e2) {
      s2.add({ title: wp.i18n.__(`Cancelled`, `windpress`), description: wp.i18n.__(`Fluid spacing generation was cancelled.`, `windpress`), icon: `lucide:wand-sparkles`, color: `info` });
      return;
    }
    Q2(e2), s2.add({ title: wp.i18n.__(`Generated`, `windpress`), description: wp.i18n.__(`Fluid spacing have been generated successfully.`, `windpress`), icon: `lucide:wand-sparkles`, color: `success` });
  }
  return x(() => {
    T2(), R2();
  }), re((e2, t2, n2) => {
    m2(), N2(), n2();
  }), (n2, r2) => {
    let i3 = L, o3 = q, s3 = ie, c3 = ee, m3 = de, h3 = ye, g3 = oe, y3 = ue;
    return v(), C(y3, { id: `wizard-typography`, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: b(() => [e(m3, { title: a(wp.i18n.__)(`Typography`, `wizard`), toggle: false, ui: { title: `text-sm` } }, { title: b(() => [e(i3, { name: `lucide:a-large-small`, class: `size-5` }), t(` ` + S(a(wp.i18n.__)(`Typography`, `wizard`)) + ` `, 1), e(o3, { variant: `soft`, color: `neutral` }, { default: b(() => [...r2[4] || (r2[4] = [t(`--text-* / --font-*`, -1)])]), _: 1 }), e(s3, { text: a(wp.i18n.__)(`Font size utilities like text-xl and font family utilities like font-sans`, `windpress`) }, { default: b(() => [l(`span`, be, S(a(wp.i18n.__)(`Font size utilities like text-xl and font family utilities like font-sans`, `windpress`)), 1)]), _: 1 }, 8, [`text`])]), right: b(() => [d2.value === `text` ? (v(), C(s3, { key: 0, text: n2.i18n.__(`Fluid generator`, `windpress`) }, { default: b(() => [e(c3, { icon: `lucide:wand-sparkles`, color: `neutral`, variant: `subtle`, onClick: $2 })]), _: 1 }, 8, [`text`])) : D(``, true), e(s3, { "delay-duration": 0, text: n2.i18n.__(`Add new item`, `windpress`) }, { default: b(() => [e(c3, { color: `neutral`, variant: `subtle`, icon: `i-lucide-plus`, onClick: r2[0] || (r2[0] = (e2) => pe2()) })]), _: 1 }, 8, [`text`]), e(s3, { text: a(wp.i18n.__)(`Help`, `windpress`) }, { default: b(() => [e(c3, { icon: `i-lucide-circle-help`, color: `neutral`, variant: `soft`, to: `https://tailwindcss.com/docs/theme#theme-variable-namespaces`, target: `_blank` })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), e(h3, { variant: `link`, content: false, modelValue: d2.value, "onUpdate:modelValue": r2[1] || (r2[1] = (e2) => d2.value = e2), items: V2.value, class: ``, ui: { list: `px-4 sm:px-6  zzzzzzzzz` } }, null, 8, [`modelValue`, `items`]), d2.value === `text` ? (v(), u(`div`, xe, [a(p2).length === 0 ? (v(), u(`div`, Se, [e(i3, { name: `lucide:a-large-small`, class: `size-12 text-primary/50 mb-4` }), l(`h3`, Ce, S(a(wp.i18n.__)(`No text sizes defined`, `windpress`)), 1), l(`p`, we, S(a(wp.i18n.__)(`Start building your text size system by adding individual text sizes or generating fluid text scales.`, `windpress`)), 1), l(`div`, Te, [e(c3, { label: a(wp.i18n.__)(`Add Text Size`, `windpress`), icon: `lucide:plus`, color: `primary`, variant: `subtle`, onClick: r2[2] || (r2[2] = (e2) => a(_2)()) }, null, 8, [`label`]), e(c3, { label: a(wp.i18n.__)(`Generate Fluid`, `windpress`), icon: `lucide:wand-sparkles`, variant: `ghost`, onClick: $2 }, null, 8, [`label`])])])) : (v(), C(g3, { key: 1, items: a(p2), "get-key": (e2) => String(e2.value), ui: { link: `p-0` }, expanded: a(f2) }, { item: b(({ item: t2, level: n3 }) => [e(X, { item: t2, level: n3 || 0, "should-be-dimmed": a(O2), "was-recently-moved": a(k2), "is-descendant-of": a(A2), "on-add-next": U2, "on-add-child": H2, "on-delete": Z2 }, null, 8, [`item`, `level`, `should-be-dimmed`, `was-recently-moved`, `is-descendant-of`])]), _: 1 }, 8, [`items`, `get-key`, `expanded`]))])) : D(``, true), d2.value === `font` ? (v(), u(`div`, Ee, [a(M2).length === 0 ? (v(), u(`div`, De, [e(i3, { name: `lucide:type`, class: `size-12 text-primary/50 mb-4` }), l(`h3`, Oe, S(a(wp.i18n.__)(`No font families defined`, `windpress`)), 1), l(`p`, ke, S(a(wp.i18n.__)(`Start building your font family system by adding individual font families for your typography.`, `windpress`)), 1), l(`div`, Ae, [e(c3, { label: a(wp.i18n.__)(`Add Font Family`, `windpress`), icon: `lucide:plus`, color: `primary`, variant: `subtle`, onClick: r2[3] || (r2[3] = (e2) => a(I2)()) }, null, 8, [`label`])])])) : (v(), C(g3, { key: 1, items: a(M2), ui: { link: `p-0` }, expanded: a(j2) }, { item: b(({ item: t2, level: n3 }) => [e(X, { item: t2, level: n3 || 0, "should-be-dimmed": a(ne2), "was-recently-moved": a(z2), "is-descendant-of": a(B2), "on-add-next": K2, "on-add-child": W2, "on-delete": fe2 }, null, 8, [`item`, `level`, `should-be-dimmed`, `was-recently-moved`, `is-descendant-of`])]), _: 1 }, 8, [`items`, `expanded`]))])) : D(``, true)]), _: 1 });
  };
} });
export {
  je as default
};
