import { o as e } from "./chunk-DcEfI0Mx.js";
import { D as t, E as n, On as r, Yt as i, _ as a, b as o, g as s, k as c, mt as l, o as u, qt as d, rt as f, tr as p, v as m, vn as h, w as g, y as _ } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { o as v } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { n as y, t as b, y as x } from "./Button-BArxwKIq.js";
import { t as S } from "./Tooltip-DkuatXWt.js";
import { t as C } from "./Separator-BlrUxn6N.js";
import { t as w } from "./Switch-Dlxj2aIM.js";
import { t as T } from "./Badge-BtUXFb0u.js";
import { t as E } from "./api-3yDUayxW.js";
import { r as D, t as O } from "./settings-CIp0eD-X.js";
import { t as k } from "./useGenerateCache-DLebHQlz.js";
import { t as A } from "./dayjs.min-Cl8Nnywg.js";
import { t as j } from "./FormField-B4xYJKfX.js";
import { n as M, t as N } from "./PageCard-B1KDlc5P.js";
var P = e(A(), 1), F = [`B`, `kB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`], I = [`B`, `KiB`, `MiB`, `GiB`, `TiB`, `PiB`, `EiB`, `ZiB`, `YiB`], L = [`b`, `kbit`, `Mbit`, `Gbit`, `Tbit`, `Pbit`, `Ebit`, `Zbit`, `Ybit`], R = [`b`, `kibit`, `Mibit`, `Gibit`, `Tibit`, `Pibit`, `Eibit`, `Zibit`, `Yibit`], z = (e2, t2, n2) => {
  let r2 = e2;
  return typeof t2 == `string` || Array.isArray(t2) ? r2 = e2.toLocaleString(t2, n2) : (t2 === true || n2 !== void 0) && (r2 = e2.toLocaleString(void 0, n2)), r2;
}, B = (e2) => {
  if (typeof e2 == `number`) return Math.log10(e2);
  let t2 = e2.toString(10);
  return t2.length + Math.log10(`0.${t2.slice(0, 15)}`);
}, V = (e2) => typeof e2 == `number` ? Math.log(e2) : B(e2) * Math.log(10), H = (e2, t2) => {
  if (typeof e2 == `number`) return e2 / t2;
  let n2 = e2 / BigInt(t2), r2 = e2 % BigInt(t2);
  return Number(n2) + Number(r2) / t2;
}, U = (e2, t2) => {
  if (t2 === void 0) return e2;
  if (typeof t2 != `number` || !Number.isSafeInteger(t2) || t2 < 0) throw TypeError(`Expected fixedWidth to be a non-negative integer, got ${typeof t2}: ${t2}`);
  return t2 === 0 ? e2 : e2.length < t2 ? e2.padStart(t2, ` `) : e2;
}, W = (e2) => {
  let { minimumFractionDigits: t2, maximumFractionDigits: n2 } = e2;
  if (!(t2 === void 0 && n2 === void 0)) return { ...t2 !== void 0 && { minimumFractionDigits: t2 }, ...n2 !== void 0 && { maximumFractionDigits: n2 }, roundingMode: `trunc` };
};
function G(e2, t2) {
  if (typeof e2 != `bigint` && !Number.isFinite(e2)) throw TypeError(`Expected a finite number, got ${typeof e2}: ${e2}`);
  t2 = { bits: false, binary: false, space: true, nonBreakingSpace: false, ...t2 };
  let n2 = t2.bits ? t2.binary ? R : L : t2.binary ? I : F, r2 = t2.space ? t2.nonBreakingSpace ? `\xA0` : ` ` : ``, i2 = typeof e2 == `number` ? e2 === 0 : e2 === 0n;
  if (t2.signed && i2) return U(` 0${r2}${n2[0]}`, t2.fixedWidth);
  let a2 = e2 < 0, o2 = a2 ? `-` : t2.signed ? `+` : ``;
  a2 && (e2 = -e2);
  let s2 = W(t2), c2;
  if (e2 < 1) c2 = o2 + z(e2, t2.locale, s2) + r2 + n2[0];
  else {
    let i3 = Math.min(Math.floor(t2.binary ? V(e2) / Math.log(1024) : B(e2) / 3), n2.length - 1);
    if (e2 = H(e2, (t2.binary ? 1024 : 1e3) ** i3), !s2) {
      let t3 = Math.max(3, Math.floor(e2).toString().length);
      e2 = e2.toPrecision(t3);
    }
    let a3 = z(Number(e2), t2.locale, s2), l2 = n2[i3];
    c2 = o2 + a3 + r2 + l2;
  }
  return U(c2, t2.fixedWidth);
}
var K = { class: `shrink grid grid-cols-3 gap-3` }, q = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` }, J = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` }, Y = { class: `flex items-center justify-center rounded-md p-3 font-semibold flex-1 bg-(--ui-bg-accented) hover:ring-(--ui-text)/50 hover:ring-1 has-checked:bg-[#0073e0] has-checked:text-white` }, X = { class: `bg-muted/50 border border-default rounded-lg p-3` }, Z = { class: `flex items-start gap-2` }, Q = { class: `text-xs text-muted` }, $ = { class: `font-medium mb-1` }, ee = { class: `space-y-1` }, te = { class: `text-xs bg-elevated px-1 py-0.5 rounded font-semibold` }, ne = { class: `text-xs bg-elevated px-1 py-0.5 rounded font-semibold` }, re = { class: `text-xs bg-elevated px-1 py-0.5 rounded font-semibold` }, ie = { class: `flex gap-2 items-center` }, ae = { class: `flex gap-2 items-center` }, oe = { class: `font-semibold` }, se = { key: 0, class: `flex gap-1` }, ce = c({ __name: `Performance`, setup(e2) {
  let c2 = E(), { generateCache: A2 } = k(), F2 = O(), I2 = D(), L2 = h({ last_generated: null, last_full_build: null, file_url: null, file_size: null });
  function R2() {
    c2.get(`admin/settings/cache/index`).then((e3) => {
      L2.value = e3.data.cache;
    });
  }
  async function z2() {
    A2(() => {
      R2();
    });
  }
  f(() => {
    R2();
  });
  let B2 = s(() => F2.virtualOptions(`performance.mode`, `hybrid`).value === `cached`);
  return (e3, s2) => {
    let c3 = N, f2 = j, h2 = x, E2 = C, D2 = w, O2 = y, k2 = T, A3 = b, R3 = S, V2 = M;
    return l(), m(V2, { id: `performance`, state: {} }, { default: d(() => [t(c3, { title: e3.i18n.__(`Performance`, `windpress`), variant: `naked`, orientation: `horizontal`, class: `mb-4` }, null, 8, [`title`]), t(c3, { variant: `subtle` }, { default: d(() => [t(f2, { label: e3.i18n.__(`Rendering modes`, `windpress`), class: `flex max-sm:flex-col justify-between items-start gap-4`, ui: { container: `flex-1`, wrapper: `flex-1`, root: `rootzzz` } }, { description: d(() => [a(`p`, null, p(e3.i18n.__(`Choose the rendering strategy based on your needs.`, `windpress`)), 1)]), default: d(() => [a(`div`, K, [a(`label`, q, [i(a(`input`, { "onUpdate:modelValue": s2[0] || (s2[0] = (e4) => r(F2).virtualOptions(`performance.mode`, `hybrid`).value = e4), type: `radio`, name: `performance_mode`, value: `cached`, class: `sr-only` }, null, 512), [[v, r(F2).virtualOptions(`performance.mode`, `hybrid`).value]]), a(`span`, null, p(e3.i18n.__(`Cached`, `windpress`)), 1)]), a(`label`, J, [i(a(`input`, { "onUpdate:modelValue": s2[1] || (s2[1] = (e4) => r(F2).virtualOptions(`performance.mode`, `hybrid`).value = e4), type: `radio`, name: `performance_mode`, value: `hybrid`, class: `sr-only` }, null, 512), [[v, r(F2).virtualOptions(`performance.mode`, `hybrid`).value]]), a(`span`, null, p(e3.i18n.__(`Hybrid`, `windpress`)), 1)]), a(`label`, Y, [i(a(`input`, { "onUpdate:modelValue": s2[2] || (s2[2] = (e4) => r(F2).virtualOptions(`performance.mode`, `hybrid`).value = e4), type: `radio`, name: `performance_mode`, value: `compiler`, class: `sr-only` }, null, 512), [[v, r(F2).virtualOptions(`performance.mode`, `hybrid`).value]]), a(`span`, null, p(e3.i18n.__(`Compiler`, `windpress`)), 1)])])]), _: 1 }, 8, [`label`]), a(`div`, X, [a(`div`, Z, [t(h2, { name: `lucide:lightbulb`, class: `size-4 text-info mt-0.5 flex-shrink-0` }), a(`div`, Q, [a(`p`, $, p(r(wp.i18n.__)(`Available modes:`, `windpress`)), 1), a(`div`, ee, [a(`p`, null, [a(`code`, te, p(e3.i18n.__(`Cached`)), 1), n(` - ` + p(e3.i18n.__(`Load cached CSS when available, otherwise fallback to Compiler.`, `windpress`)), 1)]), a(`p`, null, [a(`code`, ne, p(e3.i18n.__(`Hybrid`)), 1), n(` - ` + p(e3.i18n.__(`Inline cached CSS when available, then run the Compiler to regenerate the style.`, `windpress`)), 1)]), a(`p`, null, [a(`code`, re, p(e3.i18n.__(`Compiler`)), 1), n(` - ` + p(e3.i18n.__(`Always use the Compiler to generate the style.`, `windpress`)), 1)])])])])]), t(E2), B2.value ? (l(), o(u, { key: 0 }, [t(f2, { label: e3.i18n.__(`Cached CSS loading method`, `windpress`), description: e3.i18n.__(`Load cached CSS as an inline instead of an external file.`, `windpress`), class: `flex items-center justify-between gap-4` }, { default: d(() => [t(D2, { modelValue: r(F2).virtualOptions(`performance.cache.inline_load`, false).value, "onUpdate:modelValue": s2[3] || (s2[3] = (e4) => r(F2).virtualOptions(`performance.cache.inline_load`, false).value = e4), label: e3.i18n.__(`Inline Cached CSS`, `windpress`), ui: { label: `whitespace-nowrap` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `label`])]), _: 1 }, 8, [`label`, `description`]), t(E2)], 64)) : _(``, true), r(F2).virtualOptions(`general.tailwindcss.version`, 4).value === 4 ? (l(), o(u, { key: 1 }, [t(f2, { label: e3.i18n.__(`Generate source map`, `windpress`), description: e3.i18n.__(`Generate the source map for the cached CSS file.`, `windpress`), class: `flex items-center justify-between gap-4` }, { default: d(() => [t(D2, { modelValue: r(F2).virtualOptions(`performance.cache.source_map`, false).value, "onUpdate:modelValue": s2[4] || (s2[4] = (e4) => r(F2).virtualOptions(`performance.cache.source_map`, false).value = e4), label: e3.i18n.__(`Enable Source Map`, `windpress`), ui: { label: `whitespace-nowrap` }, class: `flex-row-reverse gap-2` }, null, 8, [`modelValue`, `label`])]), _: 1 }, 8, [`label`, `description`]), t(E2)], 64)) : _(``, true), t(f2, { label: e3.i18n.__(`Generate the cached CSS`, `windpress`), class: `flex items-center justify-between gap-4` }, g({ default: d(() => [t(R3, { "delay-duration": 0, text: e3.i18n.__(`Generate the cached CSS file`, `windpress`) }, { default: d(() => [t(A3, { color: `primary`, variant: `subtle`, onClick: z2, disabled: r(I2).isBusy, loading: r(I2).isBusy && r(I2).hasTask(`settings.performance.cached_css.generate`) }, { default: d(() => [n(p(r(I2).isBusy && r(I2).hasTask(`settings.performance.cached_css.generate`) ? e3.i18n.__(`Generating...`, `windpress`) : e3.i18n.__(`Generate`, `windpress`)), 1)]), _: 1 }, 8, [`disabled`, `loading`])]), _: 1 }, 8, [`text`])]), _: 2 }, [L2.value.last_generated ? { name: `description`, fn: d(() => [a(`div`, ie, [a(`div`, ae, [a(`span`, oe, p(e3.i18n.__(`Last Generated`, `windpress`)) + `: `, 1), L2.value.file_size ? (l(), o(`span`, se, [n(p(r(P.default)(L2.value.last_generated * 1e3).format(`YYYY-MM-DD HH:mm:ss`)) + ` `, 1), t(O2, { to: L2.value.file_url, target: `_blank`, class: `underline` }, { default: d(() => [t(h2, { name: `lucide:external-link` })]), _: 1 }, 8, [`to`])])) : _(``, true)]), L2.value.file_size ? (l(), m(k2, { key: 0, color: `success`, variant: `subtle` }, { default: d(() => [n(p(r(G)(L2.value.file_size, { maximumFractionDigits: 2, space: true })), 1)]), _: 1 })) : _(``, true)])]), key: `0` } : void 0]), 1032, [`label`])]), _: 1 })]), _: 1 });
  };
} });
export {
  ce as default
};
