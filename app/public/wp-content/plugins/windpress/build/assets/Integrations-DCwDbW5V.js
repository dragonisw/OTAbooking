import { D as e, E as t, On as n, St as r, _ as i, b as a, bt as o, k as s, mt as c, o as l, qt as u, rt as d, tr as f, v as p, vn as m, wt as h, y as g } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { n as _, t as v, y } from "./Button-BArxwKIq.js";
import { t as b } from "./Tooltip-DkuatXWt.js";
import { t as x } from "./Switch-Dlxj2aIM.js";
import { t as S } from "./Badge-BtUXFb0u.js";
import { t as C } from "./api-3yDUayxW.js";
import { t as w } from "./settings-CIp0eD-X.js";
import { t as T } from "./FormField-B4xYJKfX.js";
import { n as E, t as D } from "./PageCard-B1KDlc5P.js";
var O = { class: `flex items-center gap-2` }, k = { class: `flex flex-col gap-1` }, A = { class: `flex items-center gap-2` }, j = { key: 2, class: `flex items-center gap-1` }, M = { class: `flex items-center gap-2` }, N = s({ __name: `Integrations`, setup(s2) {
  let N2 = w(), P = C(), F = m([]);
  async function I() {
    await P.get(`admin/settings/cache/providers`).then((e2) => {
      F.value = e2.data.providers.sort((e3, t2) => e3.id.localeCompare(t2.id));
    });
  }
  return d(() => {
    I();
  }), (s3, d2) => {
    let m2 = D, C2 = S, w2 = y, P2 = _, I2 = v, L = b, R = x, z = T, B = E, V = r(`router-view`);
    return c(), p(V, null, { default: u(({ Component: r2, route: d3 }) => [r2 && d3.name !== `settings.integrations` ? (c(), p(h(r2), { key: 0 })) : (c(), p(B, { key: 1, id: `integrations`, state: {} }, { default: u(() => [e(m2, { title: s3.i18n.__(`Integrations`, `windpress`), description: s3.i18n.__(`Enable or disable integrations with other services.`, `windpress`), variant: `naked`, class: `mb-4` }, null, 8, [`title`, `description`]), e(m2, { variant: `subtle`, ui: { container: `divide-y divide-(--ui-border)` } }, { default: u(() => [(c(true), a(l, null, o(F.value, (r3) => (c(), p(z, { key: r3.id, name: r3.id, class: `flex items-center justify-between not-last:pb-4 gap-4` }, { label: u(() => [i(`div`, O, [i(`span`, null, f(r3.name), 1)])]), description: u(() => [i(`div`, k, [i(`span`, null, f(r3.description), 1), i(`div`, A, [r3.type ? (c(), p(C2, { key: 0, label: r3.type, size: `sm`, variant: `outline` }, null, 8, [`label`])) : g(``, true), r3.is_installed_active === void 0 ? g(``, true) : (c(), p(C2, { key: 1, label: r3.is_installed_active === 1 ? s3.i18n.__(`Activated`, `windpress`) : r3.is_installed_active === 0 ? s3.i18n.__(`Installed`, `windpress`) : s3.i18n.__(`Not Installed`, `windpress`), color: r3.is_installed_active === 1 ? `success` : r3.is_installed_active === 0 ? `info` : `neutral`, size: `sm`, variant: `subtle` }, null, 8, [`label`, `color`])), r3.homepage ? (c(), a(`div`, j, [e(w2, { name: `i-lucide-external-link`, class: `size-3` }), e(P2, { to: r3.homepage, target: `_blank`, class: `text-xs` }, { default: u(() => [t(f(s3.i18n.__(`Visit homepage`, `windpress`)), 1)]), _: 1 }, 8, [`to`])])) : g(``, true), e(L, { text: s3.i18n.__(`Integration Settings`, `windpress`) }, { default: u(() => [e(I2, { icon: `i-lucide-settings`, color: `neutral`, variant: `ghost`, size: `xs`, to: { name: `settings.integrations.detail`, params: { integration: r3.id } } }, null, 8, [`to`])]), _: 2 }, 1032, [`text`])])])]), default: u(() => [i(`div`, M, [e(R, { modelValue: n(N2).virtualOptions(`integration.${r3.id}.enabled`, true).value, "onUpdate:modelValue": (e2) => n(N2).virtualOptions(`integration.${r3.id}.enabled`, true).value = e2, label: `[${r3.id}]`, ui: { label: `whitespace-nowrap text-(--ui-text-muted) font-normal` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `onUpdate:modelValue`, `label`])])]), _: 2 }, 1032, [`name`]))), 128))]), _: 1 })]), _: 1 }))]), _: 1 });
  };
} });
export {
  N as default
};
