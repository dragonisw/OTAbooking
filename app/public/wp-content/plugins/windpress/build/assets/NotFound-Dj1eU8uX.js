import { D as e, On as t, _ as n, b as r, k as i, mt as a, tr as o } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as s } from "./Button-BArxwKIq.js";
import { o as c } from "./vue-router-BY1VLoSx.js";
var l = { class: `min-h-full w-full` }, u = { class: `h-full flex justify-center border border-b-0 border-(--ui-border-muted) relative p-4 z-[1]` }, d = { class: `h-full flex flex-col items-center justify-center text-center` }, f = { class: `mt-2 text-4xl sm:text-5xl font-bold text-(--ui-text-highlighted) text-balance` }, p = { class: `mt-4 text-lg text-(--ui-text-muted) text-balance` }, m = { class: `mt-8 flex items-center justify-center gap-6` }, h = i({ __name: `NotFound`, setup(i2) {
  let h2 = c().resolve({ name: `home` });
  return (i3, c2) => {
    let g = s;
    return a(), r(`div`, l, [n(`div`, u, [n(`div`, d, [c2[0] || (c2[0] = n(`p`, { class: `text-base font-semibold text-(--ui-primary)` }, `404`, -1)), n(`h1`, f, o(i3.i18n.__(`Page not found`, `windpress`)), 1), n(`p`, p, o(i3.i18n.__(`Sorry, we couldn\u2019t find the page you\u2019re looking for.`, `windpress`)), 1), n(`div`, m, [e(g, { to: t(h2), size: `lg`, color: `primary`, variant: `solid`, label: i3.i18n.__(`Back to home`, `windpress`) }, null, 8, [`to`, `label`])])])])]);
  };
} });
export {
  h as default
};
