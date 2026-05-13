import { Ht as e, On as t, Zn as n, et as r, g as i, mt as a, qt as o, un as s, v as c, vn as l, xt as u } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { E as d, J as f, P as p, S as m, b as h, k as g, t as _, w as v, x as y } from "./Button-BArxwKIq.js";
import { k as b, y as x } from "./dist-BY3QSpe-.js";
var [S, C] = d(`DashboardGroup`);
function w(n2, r2 = {}, { collapsed: a2 = l(false) } = {}) {
  let o2 = l(null), c2 = i(() => ({ side: `left`, minSize: 0, maxSize: 100, defaultSize: 0, storage: `cookie`, persistent: true, collapsible: false, collapsedSize: 0, resizable: true, unit: `%`, ...s(r2) ? r2.value : r2 })), { dir: u2 } = p(), d2 = { size: c2.value.defaultSize, collapsed: t(a2) ?? false }, f2 = c2.value.persistent && (c2.value.resizable || c2.value.collapsible) ? c2.value.storage === `cookie` ? g(n2, { default: () => d2 }) : x(n2, d2) : l(d2), m2 = i({ get: () => f2.value.collapsed, set: (e2) => {
    c2.value.collapsible && (s(a2) && (a2.value = e2), f2.value.collapsed = e2);
  } }), h2 = l(c2.value.defaultSize), _2 = i({ get: () => f2.value.size, set: (e2) => {
    f2.value.size = e2;
  } }), v2 = i(() => m2.value ? c2.value.collapsedSize : _2.value), y2 = l(false), b2 = (e2, t2, n3) => {
    if (!o2.value || !c2.value.resizable) return;
    let r3 = o2.value.parentElement?.offsetWidth || 1, i2 = u2.value === `rtl`, a3;
    a3 = i2 ? c2.value.side === `left` ? t2 - e2.clientX : e2.clientX - t2 : c2.value.side === `left` ? e2.clientX - t2 : t2 - e2.clientX;
    let s2 = n3 + a3, l2;
    if (l2 = c2.value.unit === `rem` ? s2 / Number.parseFloat(getComputedStyle(document.documentElement).fontSize) : c2.value.unit === `px` ? s2 : s2 / r3 * 100, c2.value.collapsible && l2 < c2.value.collapsedSize + 4) {
      E2(true);
      return;
    } else m2.value && E2(false);
    _2.value = Math.min(c2.value.maxSize, Math.max(c2.value.minSize, l2));
  }, S2 = (e2) => {
    if (!o2.value || !c2.value.resizable) return;
    e2.preventDefault(), e2.stopPropagation();
    let t2 = o2.value.getBoundingClientRect().width;
    if (!t2) return;
    let n3 = e2.clientX, r3 = t2;
    y2.value = true;
    let i2 = (e3) => {
      b2(e3, n3, r3);
    }, a3 = () => {
      y2.value = false, document.removeEventListener(`mousemove`, i2), document.removeEventListener(`mouseup`, a3);
    };
    document.addEventListener(`mousemove`, i2), document.addEventListener(`mouseup`, a3);
  }, C2 = (e2, t2, n3) => {
    if (!o2.value || !c2.value.resizable || !e2.touches[0]) return;
    let r3 = o2.value.parentElement?.offsetWidth || 1, i2 = u2.value === `rtl`, a3;
    a3 = i2 ? c2.value.side === `left` ? t2 - e2.touches[0].clientX : e2.touches[0].clientX - t2 : c2.value.side === `left` ? e2.touches[0].clientX - t2 : t2 - e2.touches[0].clientX;
    let s2 = n3 + a3, l2;
    if (l2 = c2.value.unit === `rem` ? s2 / Number.parseFloat(getComputedStyle(document.documentElement).fontSize) : c2.value.unit === `px` ? s2 : s2 / r3 * 100, c2.value.collapsible && l2 < c2.value.collapsedSize + 4) {
      E2(true);
      return;
    } else m2.value && E2(false);
    _2.value = Math.min(c2.value.maxSize, Math.max(c2.value.minSize, l2));
  }, w2 = (e2) => {
    if (!o2.value || !c2.value.resizable || !e2.touches[0]) return;
    e2.preventDefault(), e2.stopPropagation();
    let t2 = o2.value.getBoundingClientRect().width;
    if (!t2) return;
    let n3 = e2.touches[0].clientX, r3 = t2;
    y2.value = true;
    let i2 = (e3) => {
      C2(e3, n3, r3);
    }, a3 = () => {
      y2.value = false, document.removeEventListener(`touchmove`, i2), document.removeEventListener(`touchend`, a3), document.removeEventListener(`touchcancel`, a3);
    };
    document.addEventListener(`touchmove`, i2, { passive: false }), document.addEventListener(`touchend`, a3), document.addEventListener(`touchcancel`, a3);
  }, T2 = (e2) => {
    !o2.value || !c2.value.resizable || (e2.preventDefault(), e2.stopPropagation(), m2.value && E2(false), _2.value = c2.value.defaultSize);
  }, E2 = (e2) => {
    if (!c2.value.collapsible) return;
    let t2 = e2 ?? !m2.value;
    t2 && !m2.value ? h2.value = _2.value : !t2 && m2.value && (_2.value = h2.value), m2.value = t2;
  };
  return s(a2) && f2.value.collapsed && (a2.value = f2.value.collapsed), s(a2) && e(a2, (e2) => {
    c2.value.collapsible && f2.value.collapsed !== e2 && (f2.value.collapsed = e2);
  }), { el: o2, size: v2, isDragging: y2, isCollapsed: m2, onMouseDown: S2, onTouchStart: w2, onDoubleClick: T2, collapse: E2 };
}
var T = { base: `hidden lg:block touch-none select-none cursor-ew-resize relative before:absolute before:inset-y-0 before:-left-1.5 before:-right-1.5 before:z-1` }, E = { __name: `DashboardResizeHandle`, props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let r2 = e2, s2 = f(), l2 = y(`dashboardResizeHandle`, r2), d2 = i(() => h({ extend: h(T), ...s2.ui?.dashboardResizeHandle || {} }));
  return (i2, s3) => (a(), c(t(m), { as: e2.as, role: `separator`, class: n(d2.value({ class: [t(l2)?.base, r2.class] })) }, { default: o(() => [u(i2.$slots, `default`)]), _: 3 }, 8, [`as`, `class`]));
} }, D = { base: `lg:hidden`, variants: { side: { left: ``, right: `` } } }, O = Object.assign({ inheritAttrs: false }, { __name: `DashboardSidebarToggle`, props: { color: { type: null, required: false, default: `neutral` }, variant: { type: null, required: false, default: `ghost` }, side: { type: String, required: false, default: `left` }, ui: { type: Object, required: false }, label: { type: String, required: false }, activeColor: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, exactActiveClass: { type: String, required: false }, viewTransition: { type: Boolean, required: false } }, setup(e2) {
  let n2 = e2, o2 = v(b(n2, `icon`, `side`, `class`)), { t: s2 } = p(), u2 = f(), d2 = y(`dashboardSidebarToggle`, n2), { sidebarOpen: m2, toggleSidebar: g2 } = S({ sidebarOpen: l(false), toggleSidebar: () => {
  } }), x2 = i(() => h({ extend: h(D), ...u2.ui?.dashboardSidebarToggle || {} }));
  return (e3, i2) => (a(), c(_, r({ ...t(o2), icon: n2.icon || (t(m2) ? t(u2).ui.icons.close : t(u2).ui.icons.menu), "aria-label": t(m2) ? t(s2)(`dashboardSidebarToggle.close`) : t(s2)(`dashboardSidebarToggle.open`), ...e3.$attrs }, { class: x2.value({ class: [t(d2)?.base, n2.class], side: n2.side }), onClick: t(g2) }), null, 16, [`class`, `onClick`]));
} });
export {
  S as a,
  C as i,
  E as n,
  w as r,
  O as t
};
