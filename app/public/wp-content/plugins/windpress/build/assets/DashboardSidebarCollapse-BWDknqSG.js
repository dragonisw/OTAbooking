import { On as e, et as t, g as n, mt as r, v as i, vn as a } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { J as o, P as s, b as c, t as l, w as u, x as d } from "./Button-BArxwKIq.js";
import { k as f } from "./dist-BY3QSpe-.js";
import { a as p } from "./DashboardSidebarToggle-C6Ui5J7p.js";
var m = { base: `hidden lg:flex`, variants: { side: { left: ``, right: `` } } }, h = { __name: `DashboardSidebarCollapse`, props: { color: { type: null, required: false, default: `neutral` }, variant: { type: null, required: false, default: `ghost` }, side: { type: String, required: false, default: `left` }, ui: { type: Object, required: false }, label: { type: String, required: false }, activeColor: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, exactActiveClass: { type: String, required: false }, viewTransition: { type: Boolean, required: false } }, setup(h2) {
  let g = h2, _ = u(f(g, `icon`, `side`, `class`)), { t: v } = s(), y = o(), b = d(`dashboardSidebarCollapse`, g), { sidebarCollapsed: x, collapseSidebar: S } = p({ sidebarCollapsed: a(false), collapseSidebar: () => {
  } }), C = n(() => c({ extend: c(m), ...y.ui?.dashboardSidebarCollapse || {} }));
  return (n2, a2) => (r(), i(l, t({ ...e(_), icon: g.icon || (e(x) ? e(y).ui.icons.panelOpen : e(y).ui.icons.panelClose), "aria-label": e(x) ? e(v)(`dashboardSidebarCollapse.expand`) : e(v)(`dashboardSidebarCollapse.collapse`), ...n2.$attrs }, { class: C.value({ class: [e(b)?.base, g.class], side: g.side }), onClick: a2[0] || (a2[0] = (t2) => e(S)?.(!e(x))) }), null, 16, [`class`]));
} };
export {
  h as t
};
