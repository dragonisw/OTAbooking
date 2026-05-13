import { D as e, On as t, St as n, Zn as r, _ as i, g as a, k as o, mt as s, qt as c, v as l, xt as u } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { J as d, S as f, b as p, t as m, v as h, x as g } from "./Button-BArxwKIq.js";
import { o as _ } from "./vue-router-BY1VLoSx.js";
import { t as v } from "./Tooltip-DkuatXWt.js";
import { t as y } from "./NavigationMenu-AjThmsBG.js";
import { n as b } from "./useToast-pUqC-jjk.js";
import { r as x, t as S } from "./settings-CIp0eD-X.js";
import { n as C, t as w } from "./DashboardNavbar-BDcOUCmr.js";
import { t as T } from "./DashboardSidebarCollapse-BWDknqSG.js";
var E = { slots: { root: `shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]`, left: `flex items-center gap-1.5`, right: `flex items-center gap-1.5` } }, D = { __name: `DashboardToolbar`, props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let n2 = e2, o2 = d(), m2 = g(`dashboardToolbar`, n2), h2 = a(() => p({ extend: p(E), ...o2.ui?.dashboardToolbar || {} })());
  return (a2, o3) => (s(), l(t(f), { as: e2.as, "data-slot": `root`, class: r(h2.value.root({ class: [t(m2)?.root, n2.class] })) }, { default: c(() => [u(a2.$slots, `default`, {}, () => [i(`div`, { "data-slot": `left`, class: r(h2.value.left({ class: [t(m2)?.left] })) }, [u(a2.$slots, `left`)], 2), i(`div`, { "data-slot": `right`, class: r(h2.value.right({ class: [t(m2)?.right] })) }, [u(a2.$slots, `right`)], 2)])]), _: 3 }, 8, [`as`, `class`]));
} }, O = { class: `flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto` }, k = { class: `flex justify-end` }, A = o({ __name: `Settings`, setup(r2) {
  let o2 = _(), u2 = b(), d2 = S(), f2 = x();
  async function p2() {
    let e2 = { title: wp.i18n.__(`Saving...`, `windpress`), description: wp.i18n.__(`Please wait while we save your changes.`, `windpress`), duration: 0, icon: `lucide:loader-circle`, close: false, color: `neutral`, ui: { icon: `animate-spin` } };
    return u2.toasts.value.find((e3) => e3.id === `settings.doSave`) ? u2.update(`settings.doSave`, { ...e2 }) : u2.add({ id: `settings.doSave`, ...e2 }), d2.doPush().then(() => {
      u2.update(`settings.doSave`, { title: wp.i18n.__(`Saved`, `windpress`), description: wp.i18n.__(`Your changes have been saved.`, `windpress`), icon: `i-lucide-save`, color: `success`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).catch((e3) => {
      u2.update(`settings.doSave`, { title: wp.i18n.__(`Error`, `windpress`), description: wp.i18n.__(`An error occurred while saving your changes.`, `windpress`), icon: `i-lucide-save`, color: `error`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).finally(() => {
    });
  }
  let g2 = a(() => [[{ label: wp.i18n.__(`General`, `windpress`), to: o2.resolve({ name: `settings.general` }), icon: `lucide:settings`, exact: true }, { label: wp.i18n.__(`Performance`, `windpress`), to: o2.resolve({ name: `settings.performance` }), icon: `lucide:rocket`, exact: true }, { label: wp.i18n.__(`Integrations`, `windpress`), to: o2.resolve({ name: `settings.integrations` }), icon: `lucide:package` }], [{ label: wp.i18n.__(`Save`, `windpress`), icon: `lucide:save`, color: `primary`, onSelect: p2, disabled: f2.isBusy, badge: d2.hasChanged ? { color: `warning`, variant: `solid` } : void 0 }]]);
  return (r3, a2) => {
    let o3 = T, u3 = w, _2 = y, b2 = D, x2 = n(`RouterView`), S2 = m, E2 = h, A2 = v, j = C;
    return s(), l(j, { id: `settings`, ui: { body: `lg:py-12` } }, { header: c(() => [e(u3, { title: r3.i18n.__(`Settings`, `windpress`) }, { leading: c(() => [e(o3)]), _: 1 }, 8, [`title`]), e(b2, null, { default: c(() => [e(_2, { items: g2.value, highlight: ``, class: `-mx-1 flex-1` }, null, 8, [`items`])]), _: 1 })]), body: c(() => [i(`div`, O, [e(x2), i(`div`, k, [e(A2, { text: r3.i18n.__(`Save`, `windpress`) }, { default: c(() => [t(d2).hasChanged ? (s(), l(E2, { key: 0, color: `warning`, size: `md` }, { default: c(() => [e(S2, { icon: `i-lucide-save`, color: `primary`, label: r3.i18n.__(`Save`, `windpress`), onClick: p2, disabled: t(f2).isBusy }, null, 8, [`label`, `disabled`])]), _: 1 })) : (s(), l(S2, { key: 1, icon: `i-lucide-save`, color: `primary`, label: r3.i18n.__(`Save`, `windpress`), onClick: p2, disabled: t(f2).isBusy }, null, 8, [`label`, `disabled`]))]), _: 1 }, 8, [`text`])])])]), _: 1 });
  };
} });
export {
  A as default
};
