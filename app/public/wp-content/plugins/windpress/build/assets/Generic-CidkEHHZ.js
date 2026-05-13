import { D as e, _ as t, b as n, g as r, k as i, mt as a, qt as o, tr as s } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as c, y as l } from "./Button-BArxwKIq.js";
import { a as u } from "./vue-router-BY1VLoSx.js";
import { t as d } from "./Tooltip-DkuatXWt.js";
import { t as f } from "./Card-DTJ8l01P.js";
var p = { class: `space-y-6` }, m = { class: `flex items-center justify-between` }, h = { class: `flex items-center gap-3` }, g = { class: `flex items-center gap-2` }, _ = { class: `text-xl font-semibold` }, v = { class: `flex items-center gap-2` }, y = { class: `text-sm font-medium` }, b = { class: `space-y-3` }, x = { class: `text-sm text-muted` }, S = i({ __name: `Generic`, setup(i2) {
  let S2 = u();
  return r(() => S2.params.integration), (r2, i3) => {
    let u2 = c, S3 = d, C = l, w = f;
    return a(), n(`div`, p, [t(`div`, m, [t(`div`, h, [e(S3, { text: r2.i18n.__(`Back to Integrations`, `windpress`) }, { default: o(() => [e(u2, { icon: `i-lucide-arrow-left`, color: `neutral`, variant: `ghost`, size: `sm`, to: { name: `settings.integrations` } })]), _: 1 }, 8, [`text`]), t(`div`, g, [e(C, { name: `i-lucide-package`, class: `size-5` }), t(`h2`, _, s(r2.i18n.__(`Unknown Integration`, `windpress`)), 1)])]), e(S3, { text: r2.i18n.__(`Help`, `windpress`) }, { default: o(() => [e(u2, { icon: `i-lucide-circle-help`, color: `neutral`, variant: `soft`, to: `https://wind.press/docs`, target: `_blank` })]), _: 1 }, 8, [`text`])]), e(w, null, { header: o(() => [t(`div`, v, [e(C, { name: `i-lucide-construction`, class: `size-5 text-warning` }), t(`h3`, y, s(r2.i18n.__(`Settings Coming Soon`, `windpress`)), 1)])]), default: o(() => [t(`div`, b, [t(`p`, x, s(r2.i18n.__(`Settings for this integration are currently being developed and will be available in a future update.`, `windpress`)), 1)])]), _: 1 })]);
  };
} });
export {
  S as default
};
