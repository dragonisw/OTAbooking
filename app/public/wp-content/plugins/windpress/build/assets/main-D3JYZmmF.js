import { t as e } from "./index.browser-DTH_RVqO.js";
import { t } from "./vfs-DziqLF6T.js";
import { c as n, i as r } from "./intellisense-iY_xPBd-.js";
import "./tailwindcss-O_juf7r1.js";
import { t as i } from "./logger-BvowV9fY.js";
import { n as a, r as o } from "./constant-BJspwAtg.js";
var s = () => e(`1234567890abcdefghijklmnopqrstuvwxyz`, 6)();
function c() {
  let e2 = s();
  for (; e2.match(/^\d/); ) e2 = s();
  return `windpress${e2}`;
}
async function l() {
  a.$_state.globalVariables = a.$_state.globalVariables.filter((e2) => e2.category !== `windpress`), a.$_state.globalVariablesCategories.find((e2) => e2.id === `windpress`) || a.$_state.globalVariablesCategories.push({ id: `windpress`, name: `WindPress` }), (await r(await n({ volume: t(o.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent) }))).forEach((e2) => {
    e2.value?.includes(`--`) || a.$_state.globalVariables.push({ id: c(), name: e2.key.substring(2), value: e2.value, category: `windpress` });
  });
}
new BroadcastChannel(`windpress`).addEventListener(`message`, async (e2) => {
  let t2 = e2.data;
  t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
    l();
  }, 1e3);
}), l();
function u() {
  if (a.$_state.activePanel !== `element` || !a.$_state?.activeElement?.id || !o?.contentWindow) return;
  let e2 = document.querySelector(`.expand .options-wrapper`), t2 = e2?.querySelector(`.searchable`), n2 = e2?.querySelector(`.dropdown`), r2 = n2?.querySelectorAll(`.variable-picker-item:not(.title)`), i2 = document.querySelector(`.variable-picker-button.open`)?.previousElementSibling;
  if (!i2 || !r2?.length || !e2 || !n2 || !t2) return;
  let s2 = (e3) => {
    let t3 = e3.querySelector(`span:first-of-type`)?.textContent ?? ``;
    !i2 || !t3 || f(p(t3));
  }, c2 = (e3) => {
    let t3 = e3.querySelector(`span:first-of-type`)?.textContent ?? ``;
    !i2 || !t3 || (i2.value = p(t3), i2.click());
  }, l2 = (e3, t3) => {
    e3.forEach((e4) => {
      e4.isIntersecting && !e4.target.classList.contains(`open`) && e4.target.click();
    });
  }, u2 = () => {
    f(g);
    let t3 = i2.nextElementSibling;
    _.observe(t3), e2.removeEventListener(`mouseleave`, u2);
  }, d2 = (e3, t3) => {
    e3.forEach((e4) => {
      let [n3, r3] = Object.entries(e4)[0] || [];
      t3.insertAdjacentHTML(`beforeend`, `
                <li class="variable-picker-item">
                    <span>${n3}</span>
                    <span class="option-value">${r3}</span>
                </li>
            `);
    }), h.querySelectorAll(`.variable-picker-item`).forEach((e4) => {
      e4.addEventListener(`mouseenter`, () => s2(e4)), e4.addEventListener(`click`, () => c2(e4));
    });
  }, f = (e3) => {
    i2.value = e3, i2.dispatchEvent(new Event(`input`)), i2.focus();
  }, p = (e3) => `var(--${e3})`, m = [];
  n2.remove(), r2.forEach((e3) => {
    let t3 = e3.querySelector(`span:first-of-type`)?.textContent ?? ``, n3 = e3.querySelector(`span.option-value`)?.textContent ?? ``;
    m.push({ [t3]: n3 });
  });
  let h = document.createElement(`ul`);
  h.classList.add(`custom-dropdown`), h.setAttribute(`style`, `
        max-height: calc(32px * 10);
        overflow: hidden;
        overflow-y: auto;
        position: relative;
        scrollbar-color: rgba(0, 0, 0, .4) rgba(0, 0, 0, .2);
        scrollbar-width: thin;
    `), d2(m, h), e2.appendChild(h), t2.addEventListener(`click`, (e3) => {
    e3.preventDefault(), e3.stopPropagation();
  }), t2.addEventListener(`input`, (e3) => {
    let n3 = m.filter((e4) => (Object.keys(e4)[0]?.toLowerCase() ?? ``).includes(t2.value.toLowerCase()));
    h.innerHTML = ``, d2(n3, h);
  });
  let g = i2?.value ?? ` `, _ = new IntersectionObserver(l2, { root: i2.parentElement });
  e2.addEventListener(`mouseleave`, u2), _.disconnect();
}
var d = document.querySelector(`#bricks-panel-inner:not(div.bricks-control-popup *)`);
if (!d) throw i(`Inner panel not found, can't initialize preview of variables on hover`, { module: `variables`, type: `error` }), Error(`Inner panel not found, can't initialize preview of variables on hover`);
new MutationObserver(u).observe(d, { subtree: true, childList: true, attributes: true }), i(`Module loaded!`, { module: `variables` });
