import { o as e } from "./chunk-DcEfI0Mx.js";
import { $n as t, D as n, E as r, Ht as i, Lt as a, On as o, St as s, Zn as c, _ as l, b as u, bt as d, ct as f, et as p, g as m, it as h, k as g, mt as _, o as v, qt as y, tr as b, v as x, vn as S, w as C, wn as w, wt as T, xn as E, xt as D, y as O, z as k } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { n as A } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { I as j, J as ee, P as te, V as M, _ as ne, b as N, i as re, m as ie, n as ae, r as oe, t as P, v as F, x as I, y as L, z as se } from "./Button-BArxwKIq.js";
import { A as R, c as ce, k as le, l as ue, r as de, t as fe } from "./dist-BY3QSpe-.js";
import { d as pe, r as z, u as me } from "./namespaced-DHs_Dn1j.js";
import { i as he, n as ge, t as B, v as V } from "./Tooltip-DkuatXWt.js";
import { t as _e } from "./Tree-D7mU_mDV.js";
import { n as ve, r as H, t as ye } from "./useFileAction-D4gusgMy.js";
import { t as be } from "./Slideover-B5TMKu0c.js";
import { t as xe } from "./Badge-BtUXFb0u.js";
import { t as U } from "./settings-CIp0eD-X.js";
import { t as Se } from "./isObject-DdF6vEWQ.js";
import { t as W } from "./debounce-B--MR6Mm.js";
import { t as Ce } from "./path-browserify-4cnqpSC3.js";
import { a as G, c as K, i as we, n as q, r as Te } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as J } from "./monaco.contribution-CABeo5XZ.js";
import { n as Ee, t as De } from "./DashboardNavbar-BDcOUCmr.js";
import { t as Oe } from "./DashboardSidebarCollapse-BWDknqSG.js";
import { t as Y } from "./color-GoDPwdl-.js";
var ke = `Expected a function`;
function Ae(e2, t2, n2) {
  var r2 = true, i2 = true;
  if (typeof e2 != `function`) throw TypeError(ke);
  return Se(n2) && (r2 = `leading` in n2 ? !!n2.leading : r2, i2 = `trailing` in n2 ? !!n2.trailing : i2), W(e2, t2, { leading: r2, maxWait: t2, trailing: i2 });
}
var je = { __name: `ContextMenuContent`, props: { items: { type: null, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true }, sub: { type: Boolean, required: false }, labelKey: { type: null, required: true }, descriptionKey: { type: null, required: true }, checkedIcon: { type: null, required: false }, loadingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true }, class: { type: null, required: false }, ui: { type: null, required: true }, uiOverride: { type: null, required: false }, loop: { type: Boolean, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `closeAutoFocus`], setup(e2, { emit: i2 }) {
  let s2 = e2, f2 = i2, h2 = a(), { dir: g2 } = te(), S2 = ee(), E2 = he(w(() => s2.portal)), A2 = V(le(s2, `sub`, `items`, `portal`, `labelKey`, `descriptionKey`, `checkedIcon`, `loadingIcon`, `externalIcon`, `class`, `ui`, `uiOverride`), f2), N2 = () => M(h2, [`default`]), [P2, F2] = de(), I2 = m(() => g2.value === `rtl` ? S2.ui.icons.chevronLeft : S2.ui.icons.chevronRight), R2 = m(() => s2.items?.length ? se(s2.items) ? s2.items : [s2.items] : []);
  return (i3, a2) => (_(), u(v, null, [n(o(P2), null, { default: y(({ item: t2, active: a3, index: f3 }) => [D(i3.$slots, t2.slot || `item`, { item: t2, index: f3, ui: e2.ui }, () => [D(i3.$slots, t2.slot ? `${t2.slot}-leading` : `item-leading`, { item: t2, active: a3, index: f3, ui: e2.ui }, () => [t2.loading ? (_(), x(L, { key: 0, name: e2.loadingIcon || o(S2).ui.icons.loading, "data-slot": `itemLeadingIcon`, class: c(e2.ui.itemLeadingIcon({ class: [e2.uiOverride?.itemLeadingIcon, t2.ui?.itemLeadingIcon], color: t2?.color, loading: true })) }, null, 8, [`name`, `class`])) : t2.icon ? (_(), x(L, { key: 1, name: t2.icon, "data-slot": `itemLeadingIcon`, class: c(e2.ui.itemLeadingIcon({ class: [e2.uiOverride?.itemLeadingIcon, t2.ui?.itemLeadingIcon], color: t2?.color, active: a3 })) }, null, 8, [`name`, `class`])) : t2.avatar ? (_(), x(ne, p({ key: 2, size: t2.ui?.itemLeadingAvatarSize || e2.uiOverride?.itemLeadingAvatarSize || e2.ui.itemLeadingAvatarSize() }, t2.avatar, { "data-slot": `itemLeadingAvatar`, class: e2.ui.itemLeadingAvatar({ class: [e2.uiOverride?.itemLeadingAvatar, t2.ui?.itemLeadingAvatar], active: a3 }) }), null, 16, [`size`, `class`])) : O(``, true)]), o(j)(t2, s2.labelKey) || h2[t2.slot ? `${t2.slot}-label` : `item-label`] || o(j)(t2, s2.descriptionKey) || h2[t2.slot ? `${t2.slot}-description` : `item-description`] ? (_(), u(`span`, { key: 0, "data-slot": `itemWrapper`, class: c(e2.ui.itemWrapper({ class: [e2.uiOverride?.itemWrapper, t2.ui?.itemWrapper] })) }, [l(`span`, { "data-slot": `itemLabel`, class: c(e2.ui.itemLabel({ class: [e2.uiOverride?.itemLabel, t2.ui?.itemLabel], active: a3 })) }, [D(i3.$slots, t2.slot ? `${t2.slot}-label` : `item-label`, { item: t2, active: a3, index: f3 }, () => [r(b(o(j)(t2, s2.labelKey)), 1)]), t2.target === `_blank` && e2.externalIcon !== false ? (_(), x(L, { key: 0, name: typeof e2.externalIcon == `string` ? e2.externalIcon : o(S2).ui.icons.external, "data-slot": `itemLabelExternalIcon`, class: c(e2.ui.itemLabelExternalIcon({ class: [e2.uiOverride?.itemLabelExternalIcon, t2.ui?.itemLabelExternalIcon], color: t2?.color, active: a3 })) }, null, 8, [`name`, `class`])) : O(``, true)], 2), o(j)(t2, s2.descriptionKey) || h2[t2.slot ? `${t2.slot}-description` : `item-description`] ? (_(), u(`span`, { key: 0, "data-slot": `itemDescription`, class: c(e2.ui.itemDescription({ class: [e2.uiOverride?.itemDescription, t2.ui?.itemDescription] })) }, [D(i3.$slots, t2.slot ? `${t2.slot}-description` : `item-description`, { item: t2, active: a3, index: f3 }, () => [r(b(o(j)(t2, s2.descriptionKey)), 1)])], 2)) : O(``, true)], 2)) : O(``, true), l(`span`, { "data-slot": `itemTrailing`, class: c(e2.ui.itemTrailing({ class: [e2.uiOverride?.itemTrailing, t2.ui?.itemTrailing] })) }, [D(i3.$slots, t2.slot ? `${t2.slot}-trailing` : `item-trailing`, { item: t2, active: a3, index: f3, ui: e2.ui }, () => [t2.children?.length ? (_(), x(L, { key: 0, name: I2.value, "data-slot": `itemTrailingIcon`, class: c(e2.ui.itemTrailingIcon({ class: [e2.uiOverride?.itemTrailingIcon, t2.ui?.itemTrailingIcon], color: t2?.color, active: a3 })) }, null, 8, [`name`, `class`])) : t2.kbds?.length ? (_(), u(`span`, { key: 1, "data-slot": `itemTrailingKbds`, class: c(e2.ui.itemTrailingKbds({ class: [e2.uiOverride?.itemTrailingKbds, t2.ui?.itemTrailingKbds] })) }, [(_(true), u(v, null, d(t2.kbds, (n2, r2) => (_(), x(ge, p({ key: r2, size: t2.ui?.itemTrailingKbdsSize || e2.uiOverride?.itemTrailingKbdsSize || e2.ui.itemTrailingKbdsSize() }, { ref_for: true }, typeof n2 == `string` ? { value: n2 } : n2), null, 16, [`size`]))), 128))], 2)) : O(``, true)]), n(o(z).ItemIndicator, { "as-child": `` }, { default: y(() => [n(L, { name: e2.checkedIcon || o(S2).ui.icons.check, "data-slot": `itemTrailingIcon`, class: c(e2.ui.itemTrailingIcon({ class: [e2.uiOverride?.itemTrailingIcon, t2.ui?.itemTrailingIcon], color: t2?.color })) }, null, 8, [`name`, `class`])]), _: 2 }, 1024)], 2)])]), _: 3 }), n(o(z).Portal, t(k(o(E2))), { default: y(() => [n(o(ie), null, { default: y(() => [(_(), x(T(e2.sub ? o(z).SubContent : o(z).Content), p({ "data-slot": `content`, class: e2.ui.content({ class: [e2.uiOverride?.content, s2.class] }) }, o(A2)), { default: y(() => [D(i3.$slots, `content-top`, { sub: e2.sub ?? false }), l(`div`, { role: `presentation`, "data-slot": `viewport`, class: c(e2.ui.viewport({ class: e2.uiOverride?.viewport })) }, [(_(true), u(v, null, d(R2.value, (t2, r2) => (_(), x(o(z).Group, { key: `group-${r2}`, "data-slot": `group`, class: c(e2.ui.group({ class: e2.uiOverride?.group })) }, { default: y(() => [(_(true), u(v, null, d(t2, (t3, a3) => (_(), u(v, { key: `group-${r2}-${a3}` }, [t3.type === `label` ? (_(), x(o(z).Label, { key: 0, "data-slot": `label`, class: c(e2.ui.label({ class: [e2.uiOverride?.label, t3.ui?.label, t3.class] })) }, { default: y(() => [n(o(F2), { item: t3, index: a3 }, null, 8, [`item`, `index`])]), _: 2 }, 1032, [`class`])) : t3.type === `separator` ? (_(), x(o(z).Separator, { key: 1, "data-slot": `separator`, class: c(e2.ui.separator({ class: [e2.uiOverride?.separator, t3.ui?.separator, t3.class] })) }, null, 8, [`class`])) : t3?.children?.length ? (_(), x(o(z).Sub, { key: 2, open: t3.open, "default-open": t3.defaultOpen }, { default: y(() => [n(o(z).SubTrigger, { as: `button`, type: `button`, disabled: t3.disabled, "text-value": o(j)(t3, s2.labelKey), "data-slot": `item`, class: c(e2.ui.item({ class: [e2.uiOverride?.item, t3.ui?.item, t3.class], color: t3?.color })) }, { default: y(() => [n(o(F2), { item: t3, index: a3 }, null, 8, [`item`, `index`])]), _: 2 }, 1032, [`disabled`, `text-value`, `class`]), n(je, p({ sub: ``, class: t3.ui?.content, ui: e2.ui, "ui-override": e2.uiOverride, portal: e2.portal, items: t3.children, "align-offset": -4, "label-key": e2.labelKey, "description-key": e2.descriptionKey, "checked-icon": e2.checkedIcon, "loading-icon": e2.loadingIcon, "external-icon": e2.externalIcon }, { ref_for: true }, t3.content), C({ _: 2 }, [d(N2(), (e3, t4) => ({ name: t4, fn: y((e4) => [D(i3.$slots, t4, p({ ref_for: true }, e4))]) }))]), 1040, [`class`, `ui`, `ui-override`, `portal`, `items`, `label-key`, `description-key`, `checked-icon`, `loading-icon`, `external-icon`])]), _: 2 }, 1032, [`open`, `default-open`])) : t3.type === `checkbox` ? (_(), x(o(z).CheckboxItem, { key: 3, "model-value": t3.checked, disabled: t3.disabled, "text-value": o(j)(t3, s2.labelKey), "data-slot": `item`, class: c(e2.ui.item({ class: [e2.uiOverride?.item, t3.ui?.item, t3.class], color: t3?.color })), "onUpdate:modelValue": t3.onUpdateChecked, onSelect: t3.onSelect }, { default: y(() => [n(o(F2), { item: t3, index: a3 }, null, 8, [`item`, `index`])]), _: 2 }, 1032, [`model-value`, `disabled`, `text-value`, `class`, `onUpdate:modelValue`, `onSelect`])) : (_(), x(ae, p({ key: 4, ref_for: true }, o(re)(t3), { custom: `` }), { default: y(({ active: r3, ...i4 }) => [n(o(z).Item, { "as-child": ``, disabled: t3.disabled, "text-value": o(j)(t3, s2.labelKey), onSelect: t3.onSelect }, { default: y(() => [n(oe, p({ ref_for: true }, i4, { "data-slot": `item`, class: e2.ui.item({ class: [e2.uiOverride?.item, t3.ui?.item, t3.class], active: r3, color: t3?.color }) }), { default: y(() => [n(o(F2), { item: t3, active: r3, index: a3 }, null, 8, [`item`, `active`, `index`])]), _: 2 }, 1040, [`class`])]), _: 2 }, 1032, [`disabled`, `text-value`, `onSelect`])]), _: 2 }, 1040))], 64))), 128))]), _: 2 }, 1032, [`class`]))), 128))], 2), D(i3.$slots, `default`), D(i3.$slots, `content-bottom`, { sub: e2.sub ?? false })]), _: 3 }, 16, [`class`]))]), _: 3 })]), _: 3 }, 16)], 64));
} }, Me = { slots: { content: `min-w-32 bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-context-menu-content-transform-origin) flex flex-col`, viewport: `relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1`, group: `p-1 isolate`, label: `w-full flex items-center font-semibold text-highlighted`, separator: `-mx-1 my-1 h-px bg-border`, item: `group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75`, itemLeadingIcon: `shrink-0`, itemLeadingAvatar: `shrink-0`, itemLeadingAvatarSize: ``, itemTrailing: `ms-auto inline-flex gap-1.5 items-center`, itemTrailingIcon: `shrink-0`, itemTrailingKbds: `hidden lg:inline-flex items-center shrink-0`, itemTrailingKbdsSize: ``, itemWrapper: `flex-1 flex flex-col text-start min-w-0`, itemLabel: `truncate`, itemDescription: `truncate text-muted`, itemLabelExternalIcon: `inline-block size-3 align-top text-dimmed` }, variants: { color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, active: { true: { item: `text-highlighted before:bg-elevated`, itemLeadingIcon: `text-default` }, false: { item: [`text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50`, `transition-colors before:transition-colors`], itemLeadingIcon: [`text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default`, `transition-colors`] } }, loading: { true: { itemLeadingIcon: `animate-spin` } }, size: { xs: { label: `p-1 text-xs gap-1`, item: `p-1 text-xs gap-1`, itemLeadingIcon: `size-4`, itemLeadingAvatarSize: `3xs`, itemTrailingIcon: `size-4`, itemTrailingKbds: `gap-0.5`, itemTrailingKbdsSize: `sm` }, sm: { label: `p-1.5 text-xs gap-1.5`, item: `p-1.5 text-xs gap-1.5`, itemLeadingIcon: `size-4`, itemLeadingAvatarSize: `3xs`, itemTrailingIcon: `size-4`, itemTrailingKbds: `gap-0.5`, itemTrailingKbdsSize: `sm` }, md: { label: `p-1.5 text-sm gap-1.5`, item: `p-1.5 text-sm gap-1.5`, itemLeadingIcon: `size-5`, itemLeadingAvatarSize: `2xs`, itemTrailingIcon: `size-5`, itemTrailingKbds: `gap-0.5`, itemTrailingKbdsSize: `md` }, lg: { label: `p-2 text-sm gap-2`, item: `p-2 text-sm gap-2`, itemLeadingIcon: `size-5`, itemLeadingAvatarSize: `2xs`, itemTrailingIcon: `size-5`, itemTrailingKbds: `gap-1`, itemTrailingKbdsSize: `md` }, xl: { label: `p-2 text-base gap-2`, item: `p-2 text-base gap-2`, itemLeadingIcon: `size-6`, itemLeadingAvatarSize: `xs`, itemTrailingIcon: `size-6`, itemTrailingKbds: `gap-1`, itemTrailingKbdsSize: `lg` } } }, compoundVariants: [{ color: `primary`, active: false, class: { item: `text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10`, itemLeadingIcon: `text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary` } }, { color: `secondary`, active: false, class: { item: `text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10`, itemLeadingIcon: `text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary` } }, { color: `success`, active: false, class: { item: `text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10`, itemLeadingIcon: `text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success` } }, { color: `info`, active: false, class: { item: `text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10`, itemLeadingIcon: `text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info` } }, { color: `warning`, active: false, class: { item: `text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10`, itemLeadingIcon: `text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning` } }, { color: `error`, active: false, class: { item: `text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10`, itemLeadingIcon: `text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error` } }, { color: `primary`, active: true, class: { item: `text-primary before:bg-primary/10`, itemLeadingIcon: `text-primary` } }, { color: `secondary`, active: true, class: { item: `text-secondary before:bg-secondary/10`, itemLeadingIcon: `text-secondary` } }, { color: `success`, active: true, class: { item: `text-success before:bg-success/10`, itemLeadingIcon: `text-success` } }, { color: `info`, active: true, class: { item: `text-info before:bg-info/10`, itemLeadingIcon: `text-info` } }, { color: `warning`, active: true, class: { item: `text-warning before:bg-warning/10`, itemLeadingIcon: `text-warning` } }, { color: `error`, active: true, class: { item: `text-error before:bg-error/10`, itemLeadingIcon: `text-error` } }], defaultVariants: { size: `md` } }, Ne = { __name: `ContextMenu`, props: { size: { type: null, required: false }, items: { type: null, required: false }, checkedIcon: { type: null, required: false }, loadingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true }, content: { type: Object, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, labelKey: { type: null, required: false, default: `label` }, descriptionKey: { type: null, required: false, default: `description` }, disabled: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, pressOpenDelay: { type: Number, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: r2 }) {
  let i2 = e2, s2 = r2, l2 = a(), u2 = ee(), f2 = I(`contextMenu`, i2), h2 = V(R(i2, `modal`), s2), g2 = w(() => i2.content), v2 = () => M(l2, [`default`]), b2 = m(() => N({ extend: N(Me), ...u2.ui?.contextMenu || {} })({ size: i2.size }));
  return (r3, a2) => (_(), x(o(pe), t(k(o(h2))), { default: y(() => [l2.default ? (_(), x(o(me), { key: 0, "as-child": ``, disabled: e2.disabled, class: c(i2.class) }, { default: y(() => [D(r3.$slots, `default`)]), _: 3 }, 8, [`disabled`, `class`])) : O(``, true), n(je, p({ class: b2.value.content({ class: [!l2.default && i2.class, o(f2)?.content] }), ui: b2.value, "ui-override": o(f2) }, g2.value, { items: e2.items, portal: e2.portal, "label-key": e2.labelKey, "description-key": e2.descriptionKey, "checked-icon": e2.checkedIcon, "loading-icon": e2.loadingIcon, "external-icon": e2.externalIcon }), C({ _: 2 }, [d(v2(), (e3, n2) => ({ name: n2, fn: y((e4) => [D(r3.$slots, n2, t(k(e4)))]) }))]), 1040, [`class`, `ui`, `ui-override`, `items`, `portal`, `label-key`, `description-key`, `checked-icon`, `loading-icon`, `external-icon`])]), _: 3 }, 16));
} }, X = e(Ce(), 1), Pe = { class: `overflow-y-auto divide-y divide-(--ui-border)` }, Fe = { class: `flex items-center gap-1.5 w-full` }, Ie = g({ __name: `FileExplorer`, emits: [`delete`, `rename`, `reset`], setup(e2, { emit: t2 }) {
  let a2 = H(), s2 = U(), c2 = t2, d2 = S(void 0);
  i(d2, (e3) => {
    a2.activeViewEntryRelativePath = e3?.value ?? null;
  });
  function p2(e3, t3, n2) {
    let r2 = (n2 ? X.default.relative(n2, t3.relative_path) : t3.relative_path).split(`/`), i2 = r2.shift();
    if (r2.length === 0) {
      e3.push({ label: i2, value: t3.relative_path, icon: `vscode-icons:file-type-${t3.relative_path === `main.css` ? `tailwind` : X.default.extname(t3.relative_path).replace(`.`, ``)}`, slot: `tree-file`, entry: t3 });
      return;
    }
    let a3 = e3.find((e4) => e4.label === i2);
    a3 || (a3 = { label: i2, children: [], onSelect: (e4) => {
      e4.preventDefault();
    } }, e3.push(a3)), p2(a3.children || (a3.children = []), t3, n2 ? X.default.join(n2, i2 || ``) : i2 || ``);
  }
  let h2 = m(() => {
    let e3 = [];
    return a2.data.entries.forEach((t3) => {
      t3.hidden || p2(e3, t3);
    }), e3.sort((e4, t3) => e4.children && !t3.children ? -1 : !e4.children && t3.children ? 1 : e4.label && t3.label ? e4.label.localeCompare(t3.label) : 0), e3;
  });
  i(() => a2.activeViewEntryRelativePath, (e3) => {
    if (!e3) {
      d2.value = void 0;
      return;
    }
    g2(e3);
  });
  function g2(e3) {
    let t3 = (n2) => {
      if (n2.value === e3) return d2.value = n2, true;
      if (n2.children) {
        for (let e4 of n2.children) if (t3(e4)) return true;
      }
      return false;
    };
    for (let e4 of h2.value) if (t3(e4)) break;
  }
  return f(() => {
    a2.activeViewEntryRelativePath && g2(a2.activeViewEntryRelativePath);
  }), (e3, t3) => {
    let i2 = L, a3 = Ne, f2 = _e;
    return _(), u(`div`, Pe, [n(f2, { items: h2.value, modelValue: d2.value, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => d2.value = e4), "get-key": (e4) => e4.value ?? e4.label }, { "tree-file": y(({ item: e4 }) => [n(a3, { items: [{ label: `Reset`, icon: `lucide:file-minus-2`, disabled: e4.entry.relative_path !== `main.css` && !(Number(o(s2).virtualOptions(`general.tailwindcss.version`, 4).value) === 4 && e4.entry.relative_path === `wizard.css`), onSelect: () => {
      c2(`reset`, e4.entry);
    } }, { label: `Rename`, icon: `i-lucide-edit`, disabled: e4.entry.relative_path === `main.css`, onSelect: () => {
      c2(`rename`, e4.entry);
    } }, { label: `Delete`, icon: `i-lucide-trash-2`, disabled: e4.entry.relative_path === `main.css`, onSelect: () => {
      c2(`delete`, e4.entry);
    } }] }, { default: y(() => [l(`div`, Fe, [e4.icon ? (_(), x(i2, { key: 0, name: e4.icon, class: `shrink-0 size-5` }, null, 8, [`name`])) : O(``, true), r(` ` + b(e4.label), 1)])]), _: 2 }, 1032, [`items`])]), _: 1 }, 8, [`items`, `modelValue`, `get-key`])]);
  };
} }), Le = { $schema: `https://schemas.wp.org/trunk/theme.json`, version: 3, settings: { color: {}, typography: {}, border: {}, shadow: {}, spacing: {} } }, Z = { COLOR: `--color-`, FONT_FAMILY: `--font-`, FONT_SIZE: `--text-`, BORDER_RADIUS: `--radius-`, SHADOW: `--shadow-`, INSET_SHADOW: `--inset-shadow-`, DROP_SHADOW: `--drop-shadow-`, SPACING: `--spacing-` }, Re = [`feature-settings`, `variation-settings`, `family`, `size`, `smoothing`, `style`, `weight`, `stretch`], ze = [`line-height`, `letter-spacing`, `font-weight`, `shadow`];
function Q(e2) {
  return `[tw] ` + e2.replace(/[-_]/g, ` `).trim();
}
function $(e2) {
  return e2.toLowerCase().replace(/[^a-z0-9]/g, `-`);
}
function Be(e2, t2) {
  return !t2.some((t3) => e2.includes(t3));
}
function Ve(e2) {
  return e2.sort((e3, t2) => parseFloat(e3.size) - parseFloat(t2.size));
}
function He(e2, t2) {
  let n2 = e2.replace(Z.COLOR, ``);
  return { name: Q(n2), slug: $(n2), color: t2.trim() };
}
function Ue(e2, t2) {
  let n2 = e2.replace(Z.FONT_FAMILY, ``);
  return Be(n2, Re) ? { name: Q(n2), slug: $(n2), fontFamily: t2.trim().replace(/['"]/g, ``) } : null;
}
function We(e2, t2) {
  let n2 = e2.replace(Z.FONT_SIZE, ``);
  return Be(n2, ze) ? { name: Q(n2), slug: $(n2), size: t2.trim() } : null;
}
function Ge(e2, t2) {
  let n2 = e2.replace(Z.BORDER_RADIUS, ``);
  return { name: Q(n2), slug: $(n2), size: t2.trim() };
}
function Ke(e2, t2) {
  let n2, r2 = ``;
  return e2.startsWith(Z.INSET_SHADOW) ? (n2 = e2.replace(Z.INSET_SHADOW, ``), r2 = `inset-`) : e2.startsWith(Z.DROP_SHADOW) ? (n2 = e2.replace(Z.DROP_SHADOW, ``), r2 = `drop-`) : n2 = e2.replace(Z.SHADOW, ``), { name: Q(`${r2}${n2}`), slug: $(`${r2}${n2}`), shadow: t2.trim() };
}
function qe(e2, t2) {
  let n2 = e2.replace(Z.SPACING, ``);
  return { name: Q(n2), slug: $(n2), size: t2.trim() };
}
function Je(e2) {
  let t2 = { ...Le, settings: { color: { palette: [] }, typography: { fontSizes: [], fontFamilies: [] }, border: { radiusSizes: [] }, shadow: { presets: [] }, spacing: { spacingSizes: [] } } };
  return e2.forEach(({ key: e3, value: n2 }) => {
    if (n2) {
      if (e3.startsWith(Z.COLOR)) {
        let r2 = He(e3, n2);
        t2.settings.color.palette.push(r2);
      } else if (e3.startsWith(Z.FONT_FAMILY)) {
        let r2 = Ue(e3, n2);
        r2 && t2.settings.typography.fontFamilies.push(r2);
      } else if (e3.startsWith(Z.FONT_SIZE)) {
        let r2 = We(e3, n2);
        r2 && t2.settings.typography.fontSizes.push(r2);
      } else if (e3.startsWith(Z.BORDER_RADIUS)) {
        let r2 = Ge(e3, n2);
        t2.settings.border.radiusSizes.push(r2);
      } else if (e3.startsWith(Z.INSET_SHADOW) || e3.startsWith(Z.DROP_SHADOW) || e3.startsWith(Z.SHADOW)) {
        let r2 = Ke(e3, n2);
        t2.settings.shadow.presets.push(r2);
      } else if (e3.startsWith(Z.SPACING)) {
        let r2 = qe(e3, n2);
        t2.settings.spacing.spacingSizes.push(r2);
      }
    }
  }), t2.settings.typography.fontSizes = Ve(t2.settings.typography.fontSizes), t2;
}
var Ye = { class: `text-xs opacity-60 font-normal` }, Xe = { class: `flex-1 overflow-y-auto relative` }, Ze = { key: 0, class: `absolute bottom-5 left-5 z-50` }, Qe = { key: `panel`, class: `bg-(--ui-bg)/30 backdrop-blur-md border border-error/20 rounded-lg p-4 shadow-xl min-w-80 max-w-96 origin-bottom-left` }, $e = { class: `flex items-start gap-3` }, et = { class: `flex-1` }, tt = { class: `flex items-center justify-between mb-2` }, nt = { class: `font-medium text-error text-sm` }, rt = { class: `text-sm mb-2` }, it = { key: 0, class: `text-xs text-muted` }, at = g({ __name: `FileEditor`, props: { entry: {} }, emits: [`close`, `save`, `delete`, `reset`], setup(e2, { emit: t2 }) {
  let i2 = H(), a2 = U(), c2 = ue(), d2 = ve(), f2 = e2, p2 = t2, m2 = { automaticLayout: true, formatOnType: false, formatOnPaste: false, fontSize: 14 }, g2 = E(), v2 = S(false), C2 = S([]), w2 = null, T2 = /* @__PURE__ */ new Set(), D2 = S({ hasErrors: false, errors: [] }), k2 = S(false);
  async function j2(e3, t3) {
    if (g2.value = e3, v2.value = true, Number(a2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4) {
      let n2 = null, r2 = null, a3 = 0, o2 = 3e4, s2 = async () => {
        let e4 = Date.now();
        return n2 && e4 - a3 < o2 ? n2 : n2 && e4 - a3 >= o2 ? (r2 || (r2 = c3()), n2) : r2 || (r2 = c3(), r2);
      }, c3 = async () => {
        try {
          let e4 = await K({ volume: i2.getKVEntries() }), t4 = await we(e4);
          n2 = { designSystem: e4, variablesList: t4, classList: Te(e4) }, d2.themeJson = Je(t4), a3 = Date.now();
        } catch (e4) {
          console.warn(`Failed to load design system:`, e4), n2 || (n2 = { designSystem: null, variablesList: [], classList: [] });
        } finally {
          r2 = null;
        }
        return n2;
      }, l2 = W(async () => {
        try {
          await K({ volume: i2.getKVEntries(), strict: true }), D2.value = { hasErrors: false, errors: [] };
        } catch (e4) {
          D2.value = { hasErrors: true, errors: [{ message: e4.message || `Unknown CSS error`, line: e4.line, column: e4.column, file: e4.input?.from || `main.css` }] };
        }
      }, 750), u2 = /* @__PURE__ */ new Map(), f3 = 1e4, p3 = () => {
        if (u2.size > 50) {
          let e4 = Array.from(u2.entries()).sort((e5, t4) => e5[1].timestamp - t4[1].timestamp).slice(0, 35);
          u2.clear(), e4.forEach(([e5, t4]) => u2.set(e5, t4));
        }
      }, m3 = (e4, t4) => new Promise((n3) => {
        let r3 = u2.get(e4), i3 = Date.now();
        if (r3 && i3 - r3.timestamp < f3) {
          r3.hits++, n3(r3.items);
          return;
        }
        if (r3 && i3 - r3.timestamp < f3 * 2) {
          r3.hits++, n3(r3.items), t4().then((t5) => {
            u2.set(e4, { items: t5, timestamp: i3, hits: r3.hits }), p3();
          }).catch(() => {
          });
          return;
        }
        t4().then((t5) => {
          u2.set(e4, { items: t5, timestamp: i3, hits: 1 }), p3(), n3(t5);
        }).catch((e5) => {
          console.warn(`Failed to generate autocomplete items:`, e5), n3([]);
        });
      }), h2 = W(() => {
        a3 = 0, u2.clear(), l2();
      }, 1e3), g3 = Ae(() => {
        h2();
      }, 500, { leading: true, trailing: true });
      C2.value.push(e3.onDidChangeModelContent(g3));
      let _2 = () => {
        t3.languages.registerCompletionItemProvider(`css`, { async provideCompletionItems(e4, n3) {
          try {
            let r3 = e4.getWordUntilPosition(n3), i3 = Math.max(n3.lineNumber - 30, 1), a4 = [...e4.getValueInRange({ startLineNumber: i3, startColumn: 1, endLineNumber: n3.lineNumber, endColumn: n3.column }).matchAll(/@apply\s+(?<classList>[^;}]*)$/gi)], o3 = a4[a4.length - 1];
            if (o3 && o3.groups) {
              let e5 = o3.groups.classList || ``, r4 = e5.split(/\s+/), i4 = r4[r4.length - 1] || ``, a5 = `apply_${i4}_${e5.length}`;
              try {
                return { suggestions: await m3(a5, async () => {
                  let { classList: e6, variablesList: r5 } = await s2();
                  if (!e6 || e6.length === 0) return [];
                  let a6 = (e7) => e7?.find((e8) => e8.property && e8.property.includes(`color`))?.value || null;
                  return e6.filter((e7) => !(e7.kind !== `utility` || e7.selector.includes(`:`))).map((e7, o4) => {
                    let s3 = a6(e7.declarations), c4 = t3.languages.CompletionItemKind.Property;
                    s3 && (c4 = t3.languages.CompletionItemKind.Color);
                    let l3 = { label: e7.selector, kind: c4, insertText: e7.selector, range: { startLineNumber: n3.lineNumber, startColumn: Math.max(1, n3.column - i4.length), endLineNumber: n3.lineNumber, endColumn: n3.column }, sortText: G(o4), documentation: s3 ? `Color: ${s3}` : e7.css || void 0, detail: e7.css || void 0 };
                    if (s3) try {
                      let t4 = s3, n4 = s3.match(/var\((--[^)]+)\)/);
                      if (n4) {
                        let e8 = n4[1], i6 = r5.find((t5) => t5.key === e8);
                        if (i6 && i6.value) t4 = i6.value;
                        else return l3;
                      }
                      let i5 = new Y(t4), a7;
                      if (i5.alpha < 1) {
                        let e8 = i5.to(`srgb`), [t5, n5, r6] = e8.coords;
                        a7 = `rgba(${Math.round((t5 ?? 0) * 255)}, ${Math.round((n5 ?? 0) * 255)}, ${Math.round((r6 ?? 0) * 255)}, ${e8.alpha ?? 1})`;
                      } else a7 = i5.toString({ format: `hex` });
                      l3.documentation = `${a7}

${e7.css || ``}`;
                    } catch {
                    }
                    return l3;
                  });
                }) };
              } catch (e6) {
                return console.warn(`Error fetching @apply autocomplete suggestions:`, e6), { suggestions: [] };
              }
            } else try {
              let { variablesList: e5 } = await s2();
              return !e5 || e5.length === 0 ? { suggestions: [] } : { suggestions: e5.map((e6, i4) => ({ kind: e6.key.includes(`--color`) ? t3.languages.CompletionItemKind.Color : t3.languages.CompletionItemKind.Variable, label: e6.key, insertText: e6.key, detail: e6.value, range: { startLineNumber: n3.lineNumber, startColumn: r3.startColumn, endLineNumber: n3.lineNumber, endColumn: r3.endColumn }, sortText: G(i4) })) };
            } catch (e5) {
              return console.warn(`Error fetching CSS variable suggestions:`, e5), { suggestions: [] };
            }
          } catch (e5) {
            return console.warn(`Error in completion provider:`, e5), { suggestions: [] };
          }
        } }), t3.languages.registerHoverProvider(`css`, { async provideHover(e4, t4) {
          let n3 = e4.getLineContent(t4.lineNumber), r3 = [...n3.matchAll(/@import\s+[^;]*\btheme\s*\(\s*([-\w]+)\s*\)/g)];
          for (let e5 of r3) {
            if (e5.index === void 0) continue;
            let n4 = e5[0], r4 = /\btheme\s*\(\s*([-\w]+)\s*\)/.exec(n4);
            if (!r4 || r4.index === void 0) continue;
            let i4 = r4[1], a5 = r4[0].indexOf(i4);
            if (a5 === -1) continue;
            let o4 = e5.index + r4.index + a5, s3 = o4 + i4.length;
            if (!(!(t4.column >= o4 + 1 && t4.column <= s3 + 1) || i4 !== `static`)) return { range: { startLineNumber: t4.lineNumber, startColumn: o4 + 1, endLineNumber: t4.lineNumber, endColumn: s3 + 1 }, contents: [{ value: `\`static\`

${wp.i18n.__(`Always emit imported theme values into the CSS file instead of only when used.`, `windpress`)}` }] };
          }
          let { designSystem: i3 } = await s2();
          if (!i3) return null;
          let a4 = Math.max(t4.lineNumber - 30, 1), o3 = Math.min(t4.lineNumber + 30, e4.getLineCount()), c4 = e4.getValueInRange({ startLineNumber: a4, startColumn: 1, endLineNumber: o3, endColumn: e4.getLineMaxColumn(o3) }), l3 = [...c4.matchAll(/@apply\s+([\s\S]*?)(?=\s*[;}]|@apply|\s*$)/g)];
          if (l3.length === 0) return null;
          let u3 = null, d3 = t4.lineNumber - a4;
          for (let e5 of l3) {
            let t5 = e5.index, n4 = c4.substring(0, t5).split(`
`).length - 1, r4 = n4 + e5[0].split(`
`).length - 1;
            if (d3 >= n4 && d3 <= r4) {
              u3 = e5;
              break;
            }
          }
          if (!u3 || !u3[1]) return null;
          let f4 = u3[1].split(/\s+/).filter(Boolean);
          if (f4.length === 0) return null;
          let p4 = [...n3.matchAll(/@apply\s+([^;}@]+)/g)], m4 = null, h3 = -1;
          for (let e5 of p4) {
            let n4 = e5.index, r4 = n4 + e5[0].length;
            if (t4.column >= n4 + 1 && t4.column <= r4 + 1) {
              m4 = e5, h3 = n4;
              break;
            }
          }
          if (h3 !== -1 && m4) {
            let e5 = m4[1].split(/\s+/).filter(Boolean), r4 = h3 + 6, a5 = null, o4 = null;
            for (let i4 of e5) {
              for (; r4 < n3.length && /\s/.test(n3[r4]); ) r4++;
              let e6 = r4, s3 = r4 + i4.length;
              if (t4.column >= e6 + 1 && t4.column <= s3 + 1) {
                a5 = i4, o4 = { startLineNumber: t4.lineNumber, startColumn: e6 + 1, endLineNumber: t4.lineNumber, endColumn: s3 + 1 };
                break;
              }
              r4 = s3;
            }
            if (a5 && o4) try {
              let e6 = await q(i3, [a5]);
              if (e6 && e6.length > 0 && e6[0]) {
                let t5 = e6[0];
                return { range: o4, contents: [{ value: `\`\`\`css
${t5}
\`\`\`` }] };
              }
            } catch (e6) {
              console.warn(`Error generating hover information for class:`, a5, e6);
            }
            return null;
          } else {
            let e5 = n3.trim().split(/\s+/).filter(Boolean).map((e6) => e6.replace(/[;}]+$/, ``)), r4 = null, a5 = null;
            for (let i4 of e5) {
              if (!f4.includes(i4)) continue;
              let e6 = n3.indexOf(i4);
              if (e6 === -1) continue;
              let o4 = e6 + i4.length;
              if (t4.column >= e6 + 1 && t4.column <= o4 + 1) {
                r4 = i4, a5 = { startLineNumber: t4.lineNumber, startColumn: e6 + 1, endLineNumber: t4.lineNumber, endColumn: o4 + 1 };
                break;
              }
            }
            if (r4 && a5) try {
              let e6 = await q(i3, [r4]);
              if (e6 && e6.length > 0 && e6[0]) {
                let t5 = e6[0];
                return { range: a5, contents: [{ value: `\`\`\`css
${t5}
\`\`\`` }] };
              }
            } catch (e6) {
              console.warn(`Error generating hover information for class:`, r4, e6);
            }
            return null;
          }
        } }), t3.languages.registerColorProvider(`css`, { provideColorPresentations(e4, t4) {
          let { red: n3, green: r3, blue: i3, alpha: a4 } = t4.color, o3 = new Y(`srgb`, [n3, r3, i3], a4), s3 = e4.getLineContent(t4.range.startLineNumber), c4 = s3.match(/@apply\s+([^;}]+)/);
          if (c4) {
            let e5 = c4[1], l3 = [], u3 = ``, d3 = 0;
            for (let t5 = 0; t5 < e5.length; t5++) {
              let n4 = e5[t5];
              n4 === `[` ? (d3++, u3 += n4) : n4 === `]` ? (d3--, u3 += n4) : n4 === ` ` && d3 === 0 ? u3.trim() && (l3.push(u3.trim()), u3 = ``) : u3 += n4;
            }
            u3.trim() && l3.push(u3.trim());
            for (let e6 of l3) {
              let c5 = s3.indexOf(`@apply`) + 6;
              for (; c5 < s3.length && /\s/.test(s3[c5]); ) c5++;
              let u4 = -1;
              for (let t5 of l3) {
                if (t5 === e6) {
                  u4 = c5;
                  break;
                }
                for (c5 += t5.length; c5 < s3.length && /\s/.test(s3[c5]); ) c5++;
              }
              if (u4 === -1) continue;
              let d4 = u4 + 1, f4 = d4 + e6.length;
              if (t4.range.startColumn === d4 && t4.range.endColumn === f4 && /\[([#].+|rgb.+|rgba.+|hsl.+|hsla.+|lch.+|oklch.+|lab.+|oklab.+|hwb.+|color-mix.+)\]/.test(e6)) {
                let s4 = e6.match(/^([^[]+)\[([^\]]+)\]$/);
                if (s4) {
                  let e7 = s4[1], c6 = (e8) => {
                    let t5 = e8.replace(/\s*,\s*/g, `,`);
                    return t5 = t5.replace(/\s+/g, `_`), t5;
                  };
                  return [{ label: `${e7}[${o3.toString({ format: `hex` })}]` }, { label: `${e7}[rgb(${Math.round(n3 * 255)},${Math.round(r3 * 255)},${Math.round(i3 * 255)})]` }, { label: `${e7}[rgba(${Math.round(n3 * 255)},${Math.round(r3 * 255)},${Math.round(i3 * 255)},${a4})]` }, { label: `${e7}[${c6(o3.to(`hsl`).toString({ format: `hsl` }))}]` }, { label: `${e7}[${c6(o3.to(`hwb`).toString({ format: `hwb` }))}]` }, { label: `${e7}[${c6(o3.to(`lch`).toString({ format: `lch` }))}]` }, { label: `${e7}[${c6(o3.to(`oklch`).toString({ format: `oklch` }))}]` }, { label: `${e7}[${c6(o3.to(`lab`).toString({ format: `lab` }))}]` }, { label: `${e7}[${c6(o3.to(`oklab`).toString({ format: `oklab` }))}]` }].map((e8) => ({ ...e8, range: { startLineNumber: t4.range.startLineNumber, startColumn: d4, endLineNumber: t4.range.endLineNumber, endColumn: f4 } }));
                }
              }
            }
          }
          return [{ label: o3.toString({ format: `hex` }) }, { label: `rgb(${Math.round(n3 * 255)}, ${Math.round(r3 * 255)}, ${Math.round(i3 * 255)})` }, { label: `rgba(${Math.round(n3 * 255)}, ${Math.round(r3 * 255)}, ${Math.round(i3 * 255)}, ${a4})` }, { label: o3.to(`hsl`).toString({ format: `hsl` }) }, { label: o3.to(`hwb`).toString({ format: `hwb` }) }, { label: o3.to(`lch`).toString({ format: `lch` }) }, { label: o3.to(`oklch`).toString({ format: `oklch` }) }, { label: o3.to(`lab`).toString({ format: `lab` }) }, { label: o3.to(`oklab`).toString({ format: `oklab` }) }];
        }, async provideDocumentColors(e4) {
          let t4 = [], n3 = [], r3 = e4.getValue(), i3 = /* @__PURE__ */ new Set(), a4 = (e5) => /\[([#].+|rgb.+|rgba.+|hsl.+|hsla.+|lch.+|oklch.+|lab.+|oklab.+|hwb.+|color-mix.+)\]/.test(e5), o3 = (e5) => `windpress-color-decoration-${new Y(`srgb`, [e5.red, e5.green, e5.blue], e5.alpha).toString({ format: `hex` }).replace(`#`, ``)}`, c4 = (r4, a5, s3, c5) => {
            let l4 = `${a5}-${s3}`;
            if (!i3.has(l4)) try {
              let u4 = r4.replace(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, ``).trim();
              if (u4.startsWith(`color-mix(`)) return;
              let d4 = new Y(u4).to(`srgb`), [f5, p5, m5] = d4.coords, h4 = e4.getPositionAt(a5), g5 = e4.getPositionAt(s3), _4 = { red: Math.max(0, Math.min(1, f5 ?? 0)), green: Math.max(0, Math.min(1, p5 ?? 0)), blue: Math.max(0, Math.min(1, m5 ?? 0)), alpha: d4.alpha ?? 1 }, v5 = { startLineNumber: h4.lineNumber, startColumn: h4.column, endLineNumber: g5.lineNumber, endColumn: g5.column };
              if (c5) t4.push({ color: _4, range: v5 });
              else {
                let e5 = o3(_4), t5 = new Y(`srgb`, [_4.red, _4.green, _4.blue], _4.alpha).toString({ format: `hex` });
                T2.has(e5) || (w2 || (w2 = document.createElement(`style`), w2.setAttribute(`data-windpress-colors`, `true`), document.head.appendChild(w2)), T2.add(e5), w2.textContent += `.${e5} { background-color: ${t5}; }
`), n3.push({ range: v5, options: { before: { content: `\xA0`, inlineClassName: `${e5} colorpicker-color-decoration`, inlineClassNameAffectsLetterSpacing: true } } });
              }
              i3.add(l4);
            } catch (e5) {
              console.warn(`Invalid color format:`, r4, e5);
            }
          }, { designSystem: l3, variablesList: u3 } = await s2();
          if (!l3 || !u3) return t4;
          let d3 = /@apply\s+([^;}]+)/g, f4;
          for (; (f4 = d3.exec(r3)) !== null; ) {
            let e5 = f4[1], t5 = e5.split(/\s+/).filter(Boolean);
            for (let n4 of t5) try {
              let r4 = a4(n4), i4 = await q(l3, [n4]);
              if (i4 && i4.length > 0) {
                let a5 = i4.join(`
`), o4 = null;
                if (r4) {
                  let e6 = a5.match(/(background-color|color|border-color|fill|stroke|border-top-color|border-right-color|border-bottom-color|border-left-color):\s*([^;]+)/);
                  if (e6) {
                    let t6 = e6[2].trim();
                    !t6.startsWith(`var(`) && !t6.includes(`transparent`) && t6 !== `currentColor` && (o4 = t6);
                  }
                } else {
                  let e6 = a5.match(/var\((--[^)]*color[^)]*)\)/);
                  if (e6) {
                    let t6 = e6[1], n5 = u3.find((e7) => e7.key === t6);
                    n5 && n5.value && (o4 = n5.value);
                  }
                }
                if (o4) {
                  let i5 = f4.index + f4[0].indexOf(e5), a6 = 0, s3 = -1;
                  for (let r5 of t5) {
                    for (; a6 < e5.length && /\s/.test(e5[a6]); ) a6++;
                    if (r5 === n4) {
                      s3 = a6;
                      break;
                    }
                    a6 += r5.length;
                  }
                  if (s3 !== -1) {
                    let e6 = i5 + s3, t6 = e6 + n4.length;
                    c4(o4, e6, t6, r4);
                  }
                }
              }
            } catch (e6) {
              console.warn(`Error processing class for color preview:`, n4, e6);
            }
          }
          let p4 = /@theme\s*\{([^}]*)\}/gs, m4;
          for (; (m4 = p4.exec(r3)) !== null; ) {
            let e5 = m4[1], t5 = m4.index + m4[0].indexOf(`{`) + 1, n4 = /--color-(?!\*)[^:]+:\s*([^;]+);/g, r4;
            for (; (r4 = n4.exec(e5)) !== null; ) {
              let e6 = r4[0], n5 = r4[1].trim(), i4 = r4.index, a5 = e6.indexOf(`:`), o4 = e6.substring(a5 + 1).search(/\S/), s3 = t5 + (i4 + a5 + 1 + o4);
              c4(n5, s3, s3 + n5.length, true);
            }
          }
          let h3 = [/\b(oklch|oklab|lch|lab)\(([^)]*(?!\bvar\b|\benv\b|\bcalc\b)[^)]*)\)/gi], g4 = [], _3 = /@theme\s*\{([^}]*)\}/gs, v4;
          for (; (v4 = _3.exec(r3)) !== null; ) {
            let e5 = v4.index, t5 = v4.index + v4[0].length;
            g4.push({ start: e5, end: t5 });
          }
          let y3 = /@apply\s+([^;}]+)/g, b3;
          for (; (b3 = y3.exec(r3)) !== null; ) {
            let e5 = b3.index, t5 = b3.index + b3[0].length;
            g4.push({ start: e5, end: t5 });
          }
          if (h3.forEach((e5) => {
            let t5;
            for (; (t5 = e5.exec(r3)) !== null; ) t5[0].includes(`var(`) || t5[0].includes(`env(`) || t5[0].includes(`calc(`) || g4.some((e6) => t5.index >= e6.start && t5.index + t5[0].length <= e6.end) || c4(t5[0], t5.index, t5.index + t5[0].length, true);
            e5.lastIndex = 0;
          }), n3.length > 0) {
            let t5 = e4.__windpressColorDecorations || [];
            e4.__windpressColorDecorations = e4.deltaDecorations(t5, n3);
          }
          return t4;
        } });
      }, v3 = (e4) => {
        let t4 = e4.getValue(), n3 = [], r3 = /@import\s+[^;]*\btheme\s*\(\s*[-\w]+\s*\)\s*;/g, i3;
        for (; (i3 = r3.exec(t4)) !== null; ) {
          let e5 = /\btheme\s*\(\s*[-\w]+\s*\)/.exec(i3[0]);
          if (!e5 || e5.index === void 0) continue;
          let t5 = i3.index + e5.index;
          n3.push({ start: t5, end: t5 + e5[0].length });
        }
        return n3;
      }, y2 = (e4) => ({ severity: e4.severity, startLineNumber: e4.startLineNumber, startColumn: e4.startColumn, endLineNumber: e4.endLineNumber, endColumn: e4.endColumn, message: e4.message, source: e4.source, code: e4.code, tags: e4.tags, relatedInformation: e4.relatedInformation }), b2 = () => {
        let n3 = e3.getModel();
        if (!n3 || n3.getLanguageId() !== `css`) return;
        let r3 = v3(n3);
        if (r3.length === 0) return;
        let i3 = t3.editor.getModelMarkers({ owner: `css`, resource: n3.uri });
        if (i3.length === 0) return;
        let a4 = false, o3 = i3.filter((e4) => {
          let t4 = typeof e4.code == `string` ? e4.code : e4.code?.value;
          if (t4 !== `css-semicolonexpected` && t4 !== `css-lcurlyexpected`) return true;
          let i4 = n3.getOffsetAt({ lineNumber: e4.startLineNumber, column: e4.startColumn }), o4 = n3.getOffsetAt({ lineNumber: e4.endLineNumber, column: e4.endColumn });
          return r3.some((e5) => i4 >= e5.start && o4 <= e5.end) ? (a4 = true, false) : true;
        });
        a4 && t3.editor.setModelMarkers(n3, `css`, o3.map(y2));
      };
      window.__windpressMonacoInstantiated || (J.setOptions(Object.assign(J.options, { data: { useDefaultDataProvider: true, dataProviders: { tailwindcss: { version: 1.1, atDirectives: [{ name: `@theme`, status: `standard`, description: wp.i18n.__("Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Theme variables`, `windpress`), url: `https://tailwindcss.com/docs/theme` }] }, { name: `@plugin`, status: `standard`, description: wp.i18n.__("Use the `@plugin` directive to load a legacy JavaScript-based plugin.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Functions & Directives`, `windpress`), url: `https://tailwindcss.com/docs/functions-and-directives#plugin-directive` }, { name: wp.i18n.__(`Docs: Tailwind CSS plugins`, `windpress`), url: `https://wind.press/docs/configuration/file-main-css#tailwind-css-plugins` }] }, { name: `@config`, status: `standard`, description: wp.i18n.__("Use the `@config` directive to load a legacy JavaScript-based configuration file.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Functions & Directives`, `windpress`), url: `https://tailwindcss.com/docs/functions-and-directives#config-directive` }, { name: wp.i18n.__(`Docs: Tailwind CSS configuration`, `windpress`), url: `https://wind.press/docs/configuration/file-main-css#tailwind-css-configuration` }] }, { name: `@tailwind`, status: `standard`, description: wp.i18n.__("Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `variants` styles into your CSS.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`), url: `https://v3.tailwindcss.com/docs/functions-and-directives#tailwind` }] }, { name: `@apply`, status: `standard`, description: wp.i18n.__("Use the `@apply` directive to inline any existing utility classes into your own custom CSS.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`), url: `https://tailwindcss.com/docs/functions-and-directives#apply-directive` }] }, { name: `@utility`, status: `standard`, description: wp.i18n.__("Use the `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg``.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`), url: `https://tailwindcss.com/docs/functions-and-directives#utility-directive` }] }, { name: `@custom-variant`, status: `standard`, description: wp.i18n.__("Use the `@custom-variant` directive to add a custom variant in your project.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`), url: `https://tailwindcss.com/docs/functions-and-directives#custom-variant-directive` }] }, { name: `@variant`, status: `standard`, description: wp.i18n.__("Use the `@variant` directive to apply a Tailwind variant to styles in your CSS.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Tailwind CSS functions & directives`, `windpress`), url: `https://tailwindcss.com/docs/functions-and-directives#variant-directive` }] }, { name: `@source`, status: `standard`, description: wp.i18n.__("Use the `@source` directive to scan additional source files.", `windpress`), references: [{ name: wp.i18n.__(`Docs: Scanning additional Sources`, `windpress`), url: `https://wind.press/docs/configuration/file-main-css#scanning-additional-sources` }] }, { name: `@layer`, status: `standard`, description: wp.i18n.__("Use the `@layer` directive to tell Tailwind which \u201Cbucket\u201D a set of custom styles belong to. Valid layers are `base`, `components`, and `utilities`."), references: [{ name: wp.i18n.__(`Docs: Functions & Directives`, `windpress`), url: `https://v3.tailwindcss.com/docs/functions-and-directives#layer` }] }] } } } })), setTimeout(_2, 100), window.__windpressMonacoInstantiated = true);
      let x2 = e3.getModel();
      x2 && x2.getLanguageId() === `css` && (C2.value.push(t3.editor.onDidChangeMarkers((e4) => {
        e4.some((e5) => e5.toString() === x2.uri.toString()) && b2();
      })), b2()), h2();
    }
    C2.value.push(t3.editor.addEditorAction({ id: `windpress-save-` + Date.now(), label: wp.i18n.__(`Save`, `windpress`), keybindings: [t3.KeyMod.CtrlCmd | t3.KeyCode.KeyS], run: () => {
      p2(`save`);
    } }));
  }
  return h(() => {
    if (C2.value.forEach((e3) => {
      try {
        e3.dispose();
      } catch (e4) {
        console.warn(`Error disposing Monaco disposable:`, e4);
      }
    }), C2.value = [], w2 && (w2 = (w2.remove(), null)), T2.clear(), g2.value) {
      let e3 = g2.value.getModel();
      e3 && e3.__windpressColorDecorations && (e3.deltaDecorations(e3.__windpressColorDecorations, []), delete e3.__windpressColorDecorations);
    }
  }), (t3, d3) => {
    let h2 = P, g3 = B, v3 = L, S2 = xe, C3 = F, w3 = De, T3 = s(`vue-monaco-editor`), E2 = Ee;
    return _(), x(E2, { id: `explorer-2`, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: y(() => [n(w3, { title: e2.entry?.relative_path, toggle: false, ui: { title: `text-sm` } }, { leading: y(() => [n(g3, { text: t3.i18n.__(`Close`, `windpress`) }, { default: y(() => [n(h2, { icon: `i-lucide-x`, color: `neutral`, variant: `ghost`, class: `-ms-1.5`, onClick: d3[0] || (d3[0] = (e3) => p2(`close`)) })]), _: 1 }, 8, [`text`])]), title: y(() => [n(v3, { name: `vscode-icons:file-type-${e2.entry?.relative_path === `main.css` ? `tailwind` : o(X.default).extname(e2.entry?.relative_path ?? ``).replace(`.`, ``)}`, class: `size-5` }, null, 8, [`name`]), r(` ` + b(e2.entry?.relative_path) + ` `, 1), f2.entry.readonly ? (_(), x(S2, { key: 0, label: t3.i18n.__(`read-only`, `windpress`), color: `warning`, variant: `outline` }, null, 8, [`label`])) : O(``, true), e2.entry?.path_on_disk ? (_(), x(g3, { key: 1, text: `${t3.i18n.__(`Path on disk`, `windpress`)}: ${e2.entry?.path_on_disk}` }, { default: y(() => [l(`span`, Ye, [d3[8] || (d3[8] = r(` [ `, -1)), n(v3, { name: `i-lucide-hard-drive`, class: `inline-block align-middle me-1` }), r(` ` + b(e2.entry?.path_on_disk) + ` ] `, 1)])]), _: 1 }, 8, [`text`])) : O(``, true)]), right: y(() => [e2.entry?.relative_path !== `main.css` && !(Number(o(a2).virtualOptions(`general.tailwindcss.version`, 4).value) === 3 && (e2.entry?.relative_path === `tailwind.config.js` || e2.entry?.relative_path === `wizard.js`)) ? (_(), x(g3, { key: 0, text: t3.i18n.__(`Delete`, `windpress`) }, { default: y(() => [n(h2, { icon: `i-lucide-trash`, color: `neutral`, variant: `ghost`, onClick: d3[1] || (d3[1] = (t4) => p2(`delete`, e2.entry)) })]), _: 1 }, 8, [`text`])) : O(``, true), e2.entry?.relative_path === `main.css` || e2.entry?.relative_path === `wizard.css` || Number(o(a2).virtualOptions(`general.tailwindcss.version`, 4).value) === 3 && (e2.entry?.relative_path === `tailwind.config.js` || e2.entry?.relative_path === `wizard.js`) ? (_(), x(g3, { key: 1, text: t3.i18n.__(`Reset to default`, `windpress`) }, { default: y(() => [n(h2, { icon: `lucide:file-minus-2`, color: `neutral`, variant: `ghost`, onClick: d3[2] || (d3[2] = (t4) => p2(`reset`, e2.entry)) })]), _: 1 }, 8, [`text`])) : O(``, true), n(g3, { text: t3.i18n.__(`Save`, `windpress`) }, { default: y(() => [o(i2).entryHasChanged(e2.entry?.relative_path) ? (_(), x(C3, { key: 0, color: `warning`, size: `md` }, { default: y(() => [n(h2, { icon: `i-lucide-save`, color: `primary`, variant: `subtle`, onClick: d3[3] || (d3[3] = (e3) => p2(`save`)) })]), _: 1 })) : (_(), x(h2, { key: 1, icon: `i-lucide-save`, color: `primary`, variant: `subtle`, onClick: d3[4] || (d3[4] = (e3) => p2(`save`)) }))]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), l(`div`, Xe, [n(A, { "enter-active-class": `transition-all duration-500 ease-out`, "leave-active-class": `transition-all duration-300 ease-in`, "enter-from-class": `scale-50 opacity-0 translate-y-4`, "enter-to-class": `scale-100 opacity-100 translate-y-0`, "leave-from-class": `scale-100 opacity-100 translate-y-0`, "leave-to-class": `scale-50 opacity-0 translate-y-4` }, { default: y(() => [D2.value.hasErrors ? (_(), u(`div`, Ze, [n(A, { "enter-active-class": `transition-all duration-300 ease-out`, "leave-active-class": `transition-all duration-200 ease-in`, "enter-from-class": `scale-75 opacity-0`, "enter-to-class": `scale-100 opacity-100`, "leave-from-class": `scale-100 opacity-100`, "leave-to-class": `scale-75 opacity-0`, mode: `out-in` }, { default: y(() => [k2.value ? (_(), u(`div`, Qe, [l(`div`, $e, [n(v3, { name: `lucide:alert-triangle`, class: `size-4 text-error mt-0.5 flex-shrink-0` }), l(`div`, et, [l(`div`, tt, [l(`p`, nt, b(t3.i18n.__(`CSS Validation Error`, `windpress`)), 1), n(h2, { variant: `ghost`, size: `xs`, icon: `i-lucide-x`, color: `neutral`, onClick: d3[6] || (d3[6] = (e3) => k2.value = false) })]), l(`p`, rt, b(D2.value.errors[0]?.message), 1), D2.value.errors[0]?.line ? (_(), u(`div`, it, b(t3.i18n.__(`Line`, `windpress`)) + ` ` + b(D2.value.errors[0].line) + b(D2.value.errors[0]?.column ? `, ${t3.i18n.__(`Column`, `windpress`)} ${D2.value.errors[0].column}` : ``), 1)) : O(``, true)])])])) : (_(), u(`div`, { key: `icon`, class: `bg-(--ui-bg)/30 backdrop-blur-md border border-error/20 rounded-lg p-3 shadow-xl hover:scale-110 transition-transform origin-bottom-left cursor-pointer`, onClick: d3[5] || (d3[5] = (e3) => k2.value = true) }, [n(v3, { name: `lucide:alert-triangle`, class: `size-4 text-error flex-shrink-0` })]))]), _: 1 })])) : O(``, true)]), _: 1 }), n(T3, { value: f2.entry.content, "onUpdate:value": d3[7] || (d3[7] = (e3) => f2.entry.content = e3), language: f2.entry.relative_path.endsWith(`.css`) ? `css` : `javascript`, saveViewState: false, options: { ...m2, readOnly: f2.entry.readonly }, onMount: j2, theme: o(c2) === `dark` ? `vs-dark` : `vs` }, null, 8, [`value`, `language`, `options`, `theme`])])]), _: 1 });
  };
} }), ot = { key: 1, class: `hidden lg:flex flex-1 items-center justify-center` }, st = g({ __name: `File`, setup(e2) {
  let t2 = H(), r2 = ye(), i2 = S(null), a2 = m({ get() {
    return !!t2.activeViewEntryRelativePath;
  }, set(e3) {
    e3 || (t2.activeViewEntryRelativePath = null);
  } }), s2 = m(() => t2.data.entries.find((e3) => e3.relative_path === t2.activeViewEntryRelativePath) || (console.error(wp.i18n.__(`Entry not found: `, `windpress`), t2.activeViewEntryRelativePath), t2.activeViewEntryRelativePath = `main.css`, t2.data.entries.find((e3) => e3.relative_path === t2.activeViewEntryRelativePath))), c2 = ce(fe).smaller(`lg`);
  return (e3, d2) => {
    let f2 = Oe, p2 = P, m2 = B, h2 = De, g2 = Ee, b2 = L, S2 = be;
    return _(), u(v, null, [n(g2, { id: `explorer-1`, "default-size": 25, "min-size": 20, "max-size": 30, resizable: ``, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: y(() => [n(h2, { title: e3.i18n.__(`Explorer`, `windpress`), class: `text-sm` }, { leading: y(() => [n(f2)]), right: y(() => [n(m2, { "delay-duration": 0, text: e3.i18n.__(`Add new file`, `windpress`) }, { default: y(() => [n(p2, { color: `primary`, variant: `subtle`, icon: `i-lucide-plus`, onClick: d2[0] || (d2[0] = (e4) => o(r2).addNewFile()) })]), _: 1 }, 8, [`text`]), n(m2, { "delay-duration": 0, text: e3.i18n.__(`Export SFS volume`, `windpress`) }, { default: y(() => [n(p2, { color: `neutral`, variant: `outline`, icon: `i-lucide-download`, onClick: d2[1] || (d2[1] = (e4) => o(r2).exportVolume()) })]), _: 1 }, 8, [`text`]), n(m2, { "delay-duration": 0, text: e3.i18n.__(`Import SFS volume`, `windpress`) }, { default: y(() => [n(p2, { color: `neutral`, variant: `outline`, icon: `i-lucide-upload`, onClick: d2[2] || (d2[2] = (e4) => i2.value?.click()) }), l(`input`, { ref_key: `importFileField`, ref: i2, type: `file`, onChange: d2[3] || (d2[3] = (...e4) => o(r2).importVolume && o(r2).importVolume(...e4)), style: { display: `none` }, accept: `.windpress` }, null, 544)]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), n(Ie, { onRename: d2[4] || (d2[4] = (e4) => o(r2).renameFile(e4)), onDelete: d2[5] || (d2[5] = (e4) => o(r2).deleteFile(e4)), onReset: d2[6] || (d2[6] = (e4) => o(r2).resetFile(e4)) })]), _: 1 }), o(t2).activeViewEntryRelativePath ? (_(), x(at, { key: 0, onClose: d2[7] || (d2[7] = (e4) => o(t2).activeViewEntryRelativePath = null), entry: s2.value, onDelete: d2[8] || (d2[8] = (e4) => o(r2).deleteFile(e4)), onSave: d2[9] || (d2[9] = (e4) => o(r2).save()), onReset: d2[10] || (d2[10] = (e4) => o(r2).resetFile(e4)) }, null, 8, [`entry`])) : (_(), u(`div`, ot, [n(b2, { name: `lucide:file-pen`, class: `size-32 text-(--ui-text-dimmed)` })])), o(c2) ? (_(), x(S2, { key: 2, open: a2.value, "onUpdate:open": d2[11] || (d2[11] = (e4) => a2.value = e4) }, { content: y(() => [n(Ie)]), _: 1 }, 8, [`open`])) : O(``, true)], 64);
  };
} });
export {
  st as default
};
