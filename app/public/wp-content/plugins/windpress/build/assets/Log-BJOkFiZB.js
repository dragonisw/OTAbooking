import { o as e } from "./chunk-DcEfI0Mx.js";
import { D as t, E as n, Ht as r, On as i, _ as a, b as o, bt as s, k as c, mt as l, o as u, qt as d, tr as f, tt as p, v as m, vn as h, y as g } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { n as _ } from "./log-BcOb3xTO.js";
import { t as v } from "./Button-BArxwKIq.js";
import { t as y } from "./Tooltip-DkuatXWt.js";
import { t as b } from "./Badge-BtUXFb0u.js";
import { t as x } from "./Popover-B45T_X0m.js";
import { n as S, t as C } from "./DashboardNavbar-BDcOUCmr.js";
import { t as w } from "./DashboardSidebarCollapse-BWDknqSG.js";
import { t as T } from "./dayjs.min-Cl8Nnywg.js";
var E = e(T(), 1), D = { class: `whitespace-nowrap logs-container` }, O = { class: `flex flex-col gap-4 sm:gap-6 lg:gap-12 mx-auto` }, k = { key: 0, role: `group`, class: `flex flex-col` }, A = [`title`], j = { class: `hidden group-hover:inline-block` }, M = { class: `mr-4` }, N = { key: 0, class: `text-(--ui-error)` }, P = { key: 1, class: `text-(--ui-warning)` }, F = { key: 2, class: `text-(--ui-info)` }, I = { key: 3, class: `text-(--ui-success)` }, L = { key: 4, class: `` }, R = [`innerHTML`], z = { class: `p-6 max-w-[800px] max-h-[400px] overflow-auto` }, B = { class: `gap-2 flex flex-wrap` }, V = { class: `` }, H = [`innerHTML`], U = c({ __name: `Log`, setup(e2) {
  let c2 = _(), T2 = h(null);
  return r(c2.logs, () => {
    if (!T2.value) {
      let e4 = document.querySelector(`.logs-container`);
      if (e4) T2.value = e4.parentElement;
      else return;
    }
    let e3 = T2.value && T2.value.scrollHeight - T2.value.clientHeight <= T2.value.scrollTop + 1;
    p(() => {
      e3 && T2.value && (T2.value.scrollTop = T2.value.scrollHeight - T2.value.clientHeight);
    });
  }), (e3, r2) => {
    let p2 = w, h2 = v, _2 = y, T3 = C, U2 = b, W = x, G = S;
    return l(), m(G, { id: `logs`, ui: { root: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]`, body: `bg-(--ui-text) text-(--ui-bg) dark:text-(--ui-text) dark:bg-(--ui-bg)` } }, { header: d(() => [t(T3, { title: e3.i18n.__(`Logs`, `windpress`) }, { leading: d(() => [t(p2)]), right: d(() => [t(_2, { text: e3.i18n.__(`Clear logs`, `windpress`) }, { default: d(() => [t(h2, { icon: `lucide:paintbrush`, color: `neutral`, variant: `ghost`, onClick: r2[0] || (r2[0] = (e4) => i(c2).clear()) })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`])]), body: d(() => [a(`div`, D, [a(`div`, O, [i(c2).logs.length > 0 ? (l(), o(`div`, k, [(l(true), o(u, null, s(i(c2).logs, (e4) => (l(), o(`div`, { key: e4.id, class: `font-mono` }, [a(`span`, { title: e4.id, class: `text-(--ui-bg)/50 dark:text-(--ui-text)/50 group` }, [r2[1] || (r2[1] = n(`[`, -1)), a(`span`, j, f(i(E.default)(e4.timestamp).format(`YYYY/MM/DD_`)), 1), n(f(i(E.default)(e4.timestamp).format(`HH:mm:ss.SSS`)) + `]`, 1)], 8, A), a(`span`, M, [e4.type === `error` ? (l(), o(`span`, N, `[ERROR]`)) : e4.type === `warning` ? (l(), o(`span`, P, `[WARNING]`)) : e4.type === `info` ? (l(), o(`span`, F, `[INFO]`)) : e4.type === `success` ? (l(), o(`span`, I, `[SUCCESS]`)) : e4.type === `debug` ? (l(), o(`span`, L, `[DEBUG]`)) : g(``, true)]), e4.options?.raw ? (l(), o(u, { key: 0 }, [e4.options?.candidates && e4.options?.candidates.length > 0 ? (l(), m(W, { key: 0, mode: `hover` }, { content: d(() => [a(`div`, z, [a(`div`, B, [(l(true), o(u, null, s(e4.options?.candidates, (e5) => (l(), o(`div`, V, [t(U2, { color: `neutral`, variant: `outline` }, { default: d(() => [n(f(e5), 1)]), _: 2 }, 1024)]))), 256))])])]), default: d(() => [a(`span`, { innerHTML: e4.message }, null, 8, R)]), _: 2 }, 1024)) : (l(), o(`span`, { key: 1, innerHTML: e4.message }, null, 8, H))], 64)) : (l(), o(u, { key: 1 }, [n(f(e4.message), 1)], 64))]))), 128))])) : g(``, true)])])]), _: 1 });
  };
} });
export {
  U as default
};
