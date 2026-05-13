import { D as e, E as t, Ht as n, J as r, On as i, _ as a, b as o, k as s, mt as c, qt as l, rt as u, tr as d, v as f } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as p, y as m } from "./Button-BArxwKIq.js";
import { i as h } from "./vue-router-BY1VLoSx.js";
import { t as g } from "./Tooltip-DkuatXWt.js";
import { t as _ } from "./Tree-D7mU_mDV.js";
import { t as v } from "./Badge-BtUXFb0u.js";
import { n as y, t as b } from "./DashboardNavbar-BDcOUCmr.js";
import { n as x, r as S, t as C } from "./WizardTreeItem-0TZxtfy4.js";
var w = { class: `text-xs opacity-60 font-normal` }, T = { class: `flex-1 overflow-y-auto p-4` }, E = { key: 0, class: `flex flex-col items-center justify-center h-full text-center` }, D = { class: `text-lg font-semibold text-highlighted mb-2` }, O = { class: `text-dimmed mb-6 max-w-sm` }, k = { class: `flex gap-2` }, A = s({ __name: `Screens`, setup(s2) {
  let A2 = r(`theme`), { expandedTree: j, items: M, updateThemeFromItems: N, findItemByUid: P, addChild: F, addNext: I, deleteItem: L, initializeItems: R } = S(`breakpoint`, A2), { shouldBeDimmed: z, wasRecentlyMoved: B, isDescendantOf: V } = x(M, N, P);
  n(() => A2.value.namespaces.breakpoint, () => {
    R();
  }, { deep: true });
  function H(e2) {
    F(e2);
  }
  function U(e2) {
    I(e2);
  }
  function W(e2) {
    L(e2);
  }
  return u(() => {
    R();
  }), h((e2, t2, n2) => {
    N(), n2();
  }), (n2, r2) => {
    let s3 = m, u2 = v, h2 = g, x2 = p, S2 = b, A3 = _, N2 = y;
    return c(), f(N2, { id: `wizard-screens`, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: l(() => [e(S2, { title: n2.i18n.__(`Screens`, `wizard`), toggle: false, ui: { title: `text-sm` } }, { title: l(() => [e(s3, { name: `lucide:monitor-smartphone`, class: `size-5` }), t(` ` + d(n2.i18n.__(`Screens`, `wizard`)) + ` `, 1), e(u2, { variant: `soft`, color: `neutral` }, { default: l(() => [...r2[2] || (r2[2] = [t(`--breakpoint-*`, -1)])]), _: 1 }), e(h2, { text: n2.i18n.__(`Responsive breakpoint variants like sm:*`, `windpress`) }, { default: l(() => [a(`span`, w, d(n2.i18n.__(`Responsive breakpoint variants like sm:*`, `windpress`)), 1)]), _: 1 }, 8, [`text`])]), right: l(() => [e(h2, { "delay-duration": 0, text: n2.i18n.__(`Add new item`, `windpress`) }, { default: l(() => [e(x2, { color: `neutral`, variant: `subtle`, icon: `i-lucide-plus`, onClick: r2[0] || (r2[0] = (e2) => i(I)()) })]), _: 1 }, 8, [`text`]), e(h2, { text: n2.i18n.__(`Help`, `windpress`) }, { default: l(() => [e(x2, { icon: `i-lucide-circle-help`, color: `neutral`, variant: `soft`, to: `https://tailwindcss.com/docs/responsive-design#customizing-your-theme`, target: `_blank` })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), a(`div`, T, [i(M).length === 0 ? (c(), o(`div`, E, [e(s3, { name: `lucide:monitor-smartphone`, class: `size-12 text-primary/50 mb-4` }), a(`h3`, D, d(n2.i18n.__(`No breakpoints defined`, `windpress`)), 1), a(`p`, O, d(n2.i18n.__(`Start building your responsive design system by adding custom breakpoints for different screen sizes.`, `windpress`)), 1), a(`div`, k, [e(x2, { label: n2.i18n.__(`Add Breakpoint`, `windpress`), icon: `lucide:plus`, color: `primary`, variant: `subtle`, onClick: r2[1] || (r2[1] = (e2) => i(I)()) }, null, 8, [`label`])])])) : (c(), f(A3, { key: 1, items: i(M), "get-key": (e2) => String(e2.value), ui: { link: `p-0` }, expanded: i(j) }, { item: l(({ item: t2, level: n3 }) => [e(C, { item: t2, level: n3 || 0, "should-be-dimmed": i(z), "was-recently-moved": i(B), "is-descendant-of": i(V), "on-add-next": U, "on-add-child": H, "on-delete": W }, null, 8, [`item`, `level`, `should-be-dimmed`, `was-recently-moved`, `is-descendant-of`])]), _: 1 }, 8, [`items`, `get-key`, `expanded`]))])]), _: 1 });
  };
} });
export {
  A as default
};
