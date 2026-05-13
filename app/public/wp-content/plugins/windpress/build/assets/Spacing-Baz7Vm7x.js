import { D as e, E as t, Ht as n, J as r, On as i, _ as a, b as o, k as s, mt as c, qt as l, rt as u, tr as d, v as f } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as p, y as m } from "./Button-BArxwKIq.js";
import { i as h } from "./vue-router-BY1VLoSx.js";
import { t as g } from "./Tooltip-DkuatXWt.js";
import { n as _, t as v } from "./FluidCalculatorSlideover-BFyumpjW.js";
import { t as y } from "./Tree-D7mU_mDV.js";
import { t as b } from "./useOverlay-C2LwRyT9.js";
import { n as x } from "./useToast-pUqC-jjk.js";
import { t as S } from "./Badge-BtUXFb0u.js";
import { n as C } from "./index.browser-DTH_RVqO.js";
import { n as w, t as ee } from "./DashboardNavbar-BDcOUCmr.js";
import { n as T, r as E, t as D } from "./WizardTreeItem-0TZxtfy4.js";
var O = { class: `text-xs opacity-60 font-normal` }, k = { class: `flex-1 overflow-y-auto p-4` }, A = { key: 0, class: `flex flex-col items-center justify-center h-full text-center` }, j = { class: `text-lg font-semibold text-highlighted mb-2` }, M = { class: `text-dimmed mb-6 max-w-sm` }, N = { class: `flex gap-2` }, P = s({ __name: `Spacing`, setup(s2) {
  let P2 = b(), F = x(), I = r(`theme`), { expandedTree: L, items: R, updateThemeFromItems: z, findItemByUid: B, addChild: V, addNext: H, deleteItem: U, initializeItems: W, findOrCreateItemByKey: G } = E(`spacing`, I), { shouldBeDimmed: K, wasRecentlyMoved: q, isDescendantOf: J } = T(R, z, B);
  n(() => I.value.namespaces.spacing, () => {
    W();
  }, { deep: true });
  function Y(e2) {
    V(e2, ``, `calc(var(--spacing) * VALUE_HERE)`);
  }
  function X(e2) {
    H(e2, ``, `calc(var(--spacing) * VALUE_HERE)`);
  }
  function Z(e2) {
    U(e2);
  }
  function Q(e2) {
    let t2 = null, n2 = [], r2 = e2.miscPrefix.trim().replace(/^[\s-]+|[\s-]+$/g, ``).replace(/[^a-zA-Z0-9-]/g, `_`);
    r2 && (t2 = G(r2));
    for (let t3 = 1; t3 <= e2.stepsSmaller; t3++) {
      let r3 = ``;
      t3 === e2.stepsSmaller ? r3 += `sm` : t3 === e2.stepsSmaller - 1 ? r3 += `xs` : r3 += `${e2.stepsSmaller - t3}xs`;
      let i3 = e2.minSize, a2 = e2.maxSize;
      for (let n3 = 0; n3 < e2.stepsSmaller + 1 - t3; n3++) i3 /= e2.minScale, a2 /= e2.maxScale;
      n2.push({ key: r3, value: _(i3, a2, e2.minViewport, e2.maxViewport) });
    }
    n2.push({ key: `base`, value: _(e2.minSize, e2.maxSize, e2.minViewport, e2.maxViewport) });
    for (let t3 = 1; t3 <= e2.stepsLarger; t3++) {
      let r3 = ``;
      t3 === 1 ? r3 += `lg` : t3 === 2 ? r3 += `xl` : r3 += `${t3 - 1}xl`;
      let i3 = e2.minSize, a2 = e2.maxSize;
      for (let n3 = 0; n3 < t3; n3++) i3 *= e2.minScale, a2 *= e2.maxScale;
      n2.push({ key: r3, value: _(i3, a2, e2.minViewport, e2.maxViewport) });
    }
    let i2 = n2.map((e3) => ({ value: C(7), var: { key: e3.key, value: e3.value }, defaultExpanded: true, onToggle: (e4) => {
      e4.preventDefault();
    } }));
    t2 ? (t2.children || (t2.children = []), i2.forEach((e3) => {
      let n3 = t2.children.find((t3) => t3.var.key === e3.var.key);
      n3 ? n3.var.value = e3.var.value : t2.children.push(e3);
    })) : i2.forEach((e3) => {
      let t3 = R.value.find((t4) => t4.var.key === e3.var.key);
      t3 ? t3.var.value = e3.var.value : R.value.push(e3);
    });
  }
  async function $() {
    let e2 = await P2.create(v, { destroyOnClose: true }).open().result;
    if (!e2) {
      F.add({ title: wp.i18n.__(`Cancelled`, `windpress`), description: wp.i18n.__(`Fluid spacing generation was cancelled.`, `windpress`), icon: `lucide:wand-sparkles`, color: `info` });
      return;
    }
    Q(e2), F.add({ title: wp.i18n.__(`Generated`, `windpress`), description: wp.i18n.__(`Fluid spacing have been generated successfully.`, `windpress`), icon: `lucide:wand-sparkles`, color: `success` });
  }
  return u(() => {
    W();
  }), h((e2, t2, n2) => {
    z(), n2();
  }), (n2, r2) => {
    let s3 = m, u2 = S, h2 = g, _2 = p, v2 = ee, b2 = y, x2 = w;
    return c(), f(x2, { id: `wizard-spacing`, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: l(() => [e(v2, { title: n2.i18n.__(`Spacing`, `wizard`), toggle: false, ui: { title: `text-sm` } }, { title: l(() => [e(s3, { name: `lucide:align-horizontal-space-around`, class: `size-5` }), t(` ` + d(n2.i18n.__(`Spacing`, `wizard`)) + ` `, 1), e(u2, { variant: `soft`, color: `neutral` }, { default: l(() => [...r2[2] || (r2[2] = [t(`--spacing-*`, -1)])]), _: 1 }), e(h2, { text: n2.i18n.__(`Spacing and sizing utilities like px-4, max-h-16, and many more`, `windpress`) }, { default: l(() => [a(`span`, O, d(n2.i18n.__(`Spacing and sizing utilities like px-4, max-h-16, and many more`, `windpress`)), 1)]), _: 1 }, 8, [`text`])]), right: l(() => [e(h2, { text: n2.i18n.__(`Fluid generator`, `windpress`) }, { default: l(() => [e(_2, { icon: `lucide:wand-sparkles`, color: `neutral`, variant: `subtle`, onClick: $ })]), _: 1 }, 8, [`text`]), e(h2, { "delay-duration": 0, text: n2.i18n.__(`Add new item`, `windpress`) }, { default: l(() => [e(_2, { color: `neutral`, variant: `subtle`, icon: `i-lucide-plus`, onClick: r2[0] || (r2[0] = (e2) => X()) })]), _: 1 }, 8, [`text`]), e(h2, { text: n2.i18n.__(`Help`, `windpress`) }, { default: l(() => [e(_2, { icon: `i-lucide-circle-help`, color: `neutral`, variant: `soft`, to: `https://tailwindcss.com/docs/theme#theme-variable-namespaces`, target: `_blank` })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), a(`div`, k, [i(R).length === 0 ? (c(), o(`div`, A, [e(s3, { name: `lucide:align-horizontal-space-around`, class: `size-12 text-primary/50 mb-4` }), a(`h3`, j, d(n2.i18n.__(`No spacing defined`, `windpress`)), 1), a(`p`, M, d(n2.i18n.__(`Start building your spacing system by adding individual spacing values or generating fluid spacing scales.`, `windpress`)), 1), a(`div`, N, [e(_2, { label: n2.i18n.__(`Add Spacing`, `windpress`), icon: `lucide:plus`, color: `primary`, variant: `subtle`, onClick: r2[1] || (r2[1] = (e2) => X()) }, null, 8, [`label`]), e(_2, { label: n2.i18n.__(`Generate Fluid`, `windpress`), icon: `lucide:wand-sparkles`, variant: `ghost`, onClick: $ }, null, 8, [`label`])])])) : (c(), f(b2, { key: 1, items: i(R), "get-key": (e2) => String(e2.value), ui: { link: `p-0` }, expanded: i(L) }, { item: l(({ item: t2, level: n3 }) => [e(D, { item: t2, level: n3 || 0, "should-be-dimmed": i(K), "was-recently-moved": i(q), "is-descendant-of": i(J), "on-add-next": X, "on-add-child": Y, "on-delete": Z }, null, 8, [`item`, `level`, `should-be-dimmed`, `was-recently-moved`, `is-descendant-of`])]), _: 1 }, 8, [`items`, `get-key`, `expanded`]))])]), _: 1 });
  };
} });
export {
  P as default
};
