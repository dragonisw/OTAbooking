import { D as e, E as t, Ht as n, On as r, Yt as i, Zn as a, _ as o, b as s, g as c, gn as l, k as u, mt as d, o as f, qt as p, rt as m, tr as h, v as g, vn as _, w as v } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { o as y } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { i as b } from "./log-BcOb3xTO.js";
import { J as x, n as S, t as C } from "./Button-BArxwKIq.js";
import { t as w } from "./Tooltip-DkuatXWt.js";
import { n as T } from "./useToast-pUqC-jjk.js";
import { t as E } from "./Input-CxsBLKN7.js";
import { t as D } from "./Badge-BtUXFb0u.js";
import { t as O } from "./api-3yDUayxW.js";
import { n as k, r as A, t as j } from "./settings-CIp0eD-X.js";
import { t as M } from "./get-CA0PtJWw.js";
import { t as N } from "./package-DltdqWRC.js";
import { t as P } from "./package-BsrS9kUU.js";
import { t as F } from "./FormField-B4xYJKfX.js";
import { n as I, t as L } from "./PageCard-B1KDlc5P.js";
var R = b(`license`, () => {
  let e2 = A(), t2 = O(), n2 = _({ key: `` }), r2 = c(() => M(n2.value, `is_activated`, false));
  async function i2() {
    return e2.add(`settings.license.doPull`), await t2.request(`/admin/settings/license/index`, { method: `GET` }).then((e3) => {
      n2.value = k(e3.data.license);
    }).catch((e3) => {
    }).finally(() => {
      e2.remove(`settings.license.doPull`);
    });
  }
  async function a2(r3) {
    return e2.add(`settings.license.activate`), t2.request(`/admin/settings/license/activate`, { method: `POST`, data: { license: r3 } }).then((e3) => (n2.value = k(e3.data.license), { message: e3.data.message, success: true })).catch((e3) => {
      throw Error(e3.data ? e3.data.message : e3.message);
    }).finally(() => {
      e2.remove(`settings.license.activate`);
    });
  }
  async function o2() {
    return e2.add(`settings.license.deactivate`), t2.request(`/admin/settings/license/deactivate`, { method: `POST`, data: { license: n2.value } }).then((e3) => (n2.value = k(e3.data.license), { message: e3.data.message, success: true })).catch((e3) => {
      throw Error(e3.response ? e3.response.data.message : e3.message);
    }).finally(() => {
      e2.remove(`settings.license.deactivate`);
    });
  }
  return { license: n2, isActivated: r2, doPull: i2, doActivate: a2, doDeactivate: o2 };
}), z = { class: `flex flex-row gap-4 my-2` }, B = { class: `flex items-center gap-2` }, V = { class: `text-(--ui-text-muted)` }, H = { class: `grid grid-cols-2 gap-3` }, U = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` }, W = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` }, G = u({ __name: `General`, setup(c2) {
  let u2 = x(), b2 = T(), O2 = R(), k2 = j(), M2 = A(), G2 = _(false), K = l({ key: `` });
  n(() => K.key, () => {
    G2.value = false;
  });
  function q() {
    G2.value = false, b2.add({ id: `license.change`, title: O2.license.key && O2.isActivated ? wp.i18n.__(`Deactivating license...`, `windprees`) : wp.i18n.__(`Activating license...`, `windpress`), description: O2.license.key && O2.isActivated ? wp.i18n.__(`Please wait while we deactivate your license key.`, `windpress`) : wp.i18n.__(`Please wait while we activate your license key.`, `windpress`), icon: `lucide:loader-circle`, close: false, duration: 0, color: `neutral`, ui: { icon: `animate-spin` } }), (O2.license.key && O2.isActivated ? O2.doDeactivate() : O2.doActivate(K.key)).then(() => {
      K.key = O2.license.key, b2.update(`license.change`, { title: wp.i18n.__(`License updated`, `windpress`), description: O2.isActivated ? wp.i18n.__(`Your license key has been activated.`, `windpress`) : wp.i18n.__(`Your license key has been deactivated.`, `windpress`), icon: `lucide:key-round`, color: `success`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).catch((e2) => {
      b2.update(`license.change`, { title: wp.i18n.__(`License update failed`, `windpress`), description: e2 instanceof Error ? e2.message : wp.i18n.__(`An unknown error occurred`, `windpress`), icon: `lucide:key-round`, color: `error`, close: true, duration: void 0, ui: { icon: void 0 } }), G2.value = wp.i18n.__(`Invalid license key`, `windpress`);
    });
  }
  return m(() => {
    O2.doPull().then(() => {
      K.key = O2.license.key;
    });
  }), (n2, c3) => {
    let l2 = C, m2 = L, _2 = E, b3 = w, x2 = D, T2 = F, A2 = I, j2 = S;
    return d(), s(f, null, [n2.window.windpress._via_wp_org ? (d(), g(m2, { key: 0, title: n2.i18n.__(`License`, `windpress`), class: `bg-gradient-to-tl from-(--ui-primary)/10 from-5% to-(--ui-bg)` }, { description: p(() => [t(h(n2.i18n.__(`You are using the WordPress.org edition.`, `windpress`)), 1)]), footer: p(() => [e(l2, { label: n2.i18n.__(`Upgrade to Pro`, `windpress`), color: `primary`, "trailing-icon": r(u2).ui.icons.external, ui: { trailingIcon: `inline-block size-3 align-top`, base: `gap-[normal] items-start` }, to: `https://wind.press/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${n2.window.windpress._version}#pricing`, target: `_blank` }, null, 8, [`label`, `trailing-icon`, `to`])]), _: 1 }, 8, [`title`])) : (d(), g(m2, { key: 1, title: `License`, description: ``, class: a([r(O2).isActivated ? `from-(--ui-primary)/10` : `from-(--ui-warning)/10`, `bg-gradient-to-tl from-5% to-(--ui-bg)`]) }, { default: p(() => [e(A2, { state: K, onSubmit: q }, { default: p(() => [e(T2, { label: n2.i18n.__(`License key`, `windpress`), required: ``, error: G2.value, help: n2.i18n.__(`To access updates when they are available, please provide your license key.`, `windpress`) }, v({ default: p(() => [o(`div`, z, [e(_2, { modelValue: K.key, "onUpdate:modelValue": c3[0] || (c3[0] = (e2) => K.key = e2), type: `password`, placeholder: `WIND-12345-67890-PRESS`, class: `w-full`, "data-1p-ignore": `` }, null, 8, [`modelValue`]), e(b3, { "delay-duration": 0, text: r(O2).isActivated ? n2.i18n.__(`Unregister your WindPress setup`, `windpress`) : n2.i18n.__(`Register your WindPress setup`, `windpress`) }, { default: p(() => [e(l2, { type: `submit`, color: `primary`, variant: `subtle`, "leading-icon": r(M2).isBusy && r(M2).tasks.some((e2) => e2.task === `settings.license.activate` || e2.task === `settings.license.deactivate`) ? `lucide:loader-circle` : void 0, disabled: !K.key || r(M2).isBusy, ui: { leadingIcon: `animate-spin` } }, { default: p(() => [r(O2).isActivated ? (d(), s(f, { key: 0 }, [t(h(r(M2).isBusy && r(M2).tasks.some((e2) => e2.task === `settings.license.deactivate`) ? n2.i18n.__(`Deactivating`, `windpress`) : n2.i18n.__(`Deactivate`, `windpress`)), 1)], 64)) : (d(), s(f, { key: 1 }, [t(h(r(M2).isBusy && r(M2).tasks.some((e2) => e2.task === `settings.license.activate`) ? n2.i18n.__(`Activating`, `windpress`) : n2.i18n.__(`Activate`, `windpress`)), 1)], 64))]), _: 1 }, 8, [`leading-icon`, `disabled`])]), _: 1 }, 8, [`text`])])]), _: 2 }, [r(O2).license.key ? { name: `hint`, fn: p(() => [o(`div`, B, [o(`span`, V, h(n2.i18n.__(`Status`, `windpress`)) + ` :`, 1), e(x2, { color: r(O2).isActivated ? `success` : `error`, variant: `subtle` }, { default: p(() => [t(h(r(O2).isActivated ? n2.i18n.__(`Active`, `windpress`) : n2.i18n.__(`Inactive`, `windpress`)), 1)]), _: 1 }, 8, [`color`])])]), key: `0` } : void 0]), 1032, [`label`, `error`, `help`])]), _: 1 }, 8, [`state`])]), _: 1 }, 8, [`class`])), e(A2, { id: `general`, state: {} }, { default: p(() => [e(m2, { title: n2.i18n.__(`General`, `windpress`), description: n2.i18n.__(`General settings for WindPress.`, `windpress`), variant: `naked`, orientation: `horizontal`, class: `mb-4` }, null, 8, [`title`, `description`]), e(m2, { variant: `subtle` }, { default: p(() => [e(T2, { label: n2.i18n.__(`Tailwind CSS version`, `windpress`), description: n2.i18n.__("You must update the `main.css` file accordingly.", `windpress`), class: `flex max-sm:flex-col justify-between items-start gap-4`, ui: { container: `flex-1` } }, { hint: p(() => [e(j2, { to: `https://github.com/tailwindlabs/tailwindcss/releases`, target: `_blank`, class: `underline` }, { default: p(() => [t(h(n2.i18n.__(`See release notes`, `windpress`)), 1)]), _: 1 })]), default: p(() => [o(`div`, H, [o(`label`, U, [i(o(`input`, { "onUpdate:modelValue": c3[1] || (c3[1] = (e2) => r(k2).virtualOptions(`general.tailwindcss.version`, 4).value = e2), type: `radio`, name: `tailwindcss_version`, value: 3, class: `sr-only` }, null, 512), [[y, r(k2).virtualOptions(`general.tailwindcss.version`, 4).value]]), o(`span`, null, h(r(P)), 1)]), o(`label`, W, [i(o(`input`, { "onUpdate:modelValue": c3[2] || (c3[2] = (e2) => r(k2).virtualOptions(`general.tailwindcss.version`, 4).value = e2), type: `radio`, name: `tailwindcss_version`, value: 4, class: `sr-only` }, null, 512), [[y, r(k2).virtualOptions(`general.tailwindcss.version`, 4).value]]), o(`span`, null, h(r(N)), 1)])])]), _: 1 }, 8, [`label`, `description`])]), _: 1 })]), _: 1 })], 64);
  };
} });
export {
  G as default
};
