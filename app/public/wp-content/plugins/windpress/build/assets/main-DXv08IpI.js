import { Ht as e, J as t, On as n, Yt as r, _ as i, b as a, mt as o, vn as s } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { a as c, r as l, s as u } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { t as d } from "./logger-BvowV9fY.js";
import { t as f } from "./_plugin-vue_export-helper-4qEyeFbT.js";
import { a as p } from "./constant-BJspwAtg.js";
import { t as m } from "./windpress-LvZ2N0sE.js";
var h = { class: `w:full` }, g = { class: `buttons` }, _ = { "data-control": `checkbox`, type: `checkbox` }, v = { class: `buttons` }, y = { "data-control": `checkbox`, type: `checkbox` }, b = { class: `buttons` }, x = { "data-control": `checkbox`, type: `checkbox` }, S = { class: `buttons` }, C = { "data-control": `checkbox`, type: `checkbox` }, w = { class: `buttons` }, T = { "data-control": `checkbox`, type: `checkbox` }, E = f({ __name: `App`, setup(l2) {
  let d2 = t(`isOpen`), f2 = t(`mousePosition`), m2 = s(null);
  return e(d2, (e2) => {
    e2 && (m2.value.style.top = `${f2.value.y}px`, m2.value.style.left = `${f2.value.x}px`);
  }), (e2, t2) => r((o(), a(`div`, { id: `windpressbricks-settings-app-container`, ref_key: `containerEl`, ref: m2, class: `flex flex:column` }, [i(`ul`, h, [t2[10] || (t2[10] = i(`li`, { class: `disabled`, style: { color: `var(--bricks-text-dark)` } }, `Module: Plain Classes`, -1)), i(`li`, null, [t2[5] || (t2[5] = i(`span`, { class: `label` }, [i(`label`, { for: `cb-settings-plain-classes-input-field` }, `Input Field`)], -1)), i(`span`, g, [i(`div`, null, [i(`div`, _, [r(i(`input`, { id: `cb-settings-plain-classes-input-field`, "onUpdate:modelValue": t2[0] || (t2[0] = (e3) => n(p)(`module.plain-classes.input-field`, true).value = e3), type: `checkbox` }, null, 512), [[c, n(p)(`module.plain-classes.input-field`, true).value]])])])])]), i(`li`, null, [t2[6] || (t2[6] = i(`span`, { class: `label` }, [i(`label`, { for: `cb-settings-plain-classes-autocomplete` }, `Autocomplete`)], -1)), i(`span`, v, [i(`div`, null, [i(`div`, y, [r(i(`input`, { id: `cb-settings-plain-classes-autocomplete`, "onUpdate:modelValue": t2[1] || (t2[1] = (e3) => n(p)(`module.plain-classes.autocomplete`, true).value = e3), type: `checkbox` }, null, 512), [[c, n(p)(`module.plain-classes.autocomplete`, true).value]])])])])]), i(`li`, null, [t2[7] || (t2[7] = i(`span`, { class: `label` }, [i(`label`, { for: `cb-settings-plain-classes-hover-preview-classes` }, `Hover Preview`)], -1)), i(`span`, b, [i(`div`, null, [i(`div`, x, [r(i(`input`, { id: `cb-settings-plain-classes-hover-preview-classes`, "onUpdate:modelValue": t2[2] || (t2[2] = (e3) => n(p)(`module.plain-classes.hover-preview-classes`, true).value = e3), type: `checkbox` }, null, 512), [[c, n(p)(`module.plain-classes.hover-preview-classes`, true).value]])])])])]), t2[11] || (t2[11] = i(`li`, { class: `disabled sep-t`, style: { color: `var(--bricks-text-dark)` } }, `Module: Generate Cache`, -1)), i(`li`, null, [t2[8] || (t2[8] = i(`span`, { class: `label` }, [i(`label`, { for: `cb-settings-generate-cache-on-save` }, `On Save`)], -1)), i(`span`, S, [i(`div`, null, [i(`div`, C, [r(i(`input`, { id: `cb-settings-generate-cache-on-save`, "onUpdate:modelValue": t2[3] || (t2[3] = (e3) => n(p)(`module.generate-cache.on-save`, true).value = e3), type: `checkbox` }, null, 512), [[c, n(p)(`module.generate-cache.on-save`, true).value]])])])])]), t2[12] || (t2[12] = i(`li`, { class: `disabled sep-t`, style: { color: `var(--bricks-text-dark)` } }, `Module: HTML2Bricks`, -1)), i(`li`, null, [t2[9] || (t2[9] = i(`span`, { class: `label` }, [i(`label`, { for: `cb-settings-html2bricks-copy-paste` }, `Copy-Paste`)], -1)), i(`span`, w, [i(`div`, null, [i(`div`, T, [r(i(`input`, { id: `cb-settings-html2bricks-copy-paste`, "onUpdate:modelValue": t2[4] || (t2[4] = (e3) => n(p)(`module.html2bricks.copy-paste`, true).value = e3), type: `checkbox` }, null, 512), [[c, n(p)(`module.html2bricks.copy-paste`, true).value]])])])])])])], 512)), [[u, n(d2)]]);
} }, [[`__scopeId`, `data-v-d63aa5be`]]), D = `#bricks-toolbar ul.group-wrapper.end, #bricks-toolbar ul.group-wrapper.right`, O = document.createRange().createContextualFragment(`
    <li id="windpressbricks-settings-navbar" data-balloon="WindPress \u2014 Bricks settings" data-balloon-pos="bottom">
        <span class="bricks-svg-wrapper">
            ${m}
        </span>
    </li>
`), k = document.querySelector(D);
k.insertBefore(O, k.firstChild);
var A = document.querySelector(`#windpressbricks-settings-navbar`), j = s(false), M = s({ x: null, y: null }), N = document.createElement(`windpressbricks-settings-app`);
N.id = `windpressbricks-settings-app`, N.classList.add(`master-css`), document.querySelector(`div.brx-body.main`).appendChild(N), A.addEventListener(`click`, (e2) => {
  e2.preventDefault(), e2.stopPropagation(), j.value = !j.value, M.value = { x: e2.clientX, y: e2.clientY };
});
function P(e2) {
  e2.target.closest(`#windpressbricks-settings-app`) || (j.value = false);
}
e(j, (e2) => {
  e2 ? document.addEventListener(`click`, P, { once: true }) : document.removeEventListener(`click`, P);
});
var F = l(E);
F.provide(`isOpen`, j), F.provide(`mousePosition`, M), F.mount(`#windpressbricks-settings-app`), d(`Module loaded!`, { module: `settings` });
