import { o as e } from "./chunk-DcEfI0Mx.js";
import { t } from "./logger-BvowV9fY.js";
import { t as n } from "./tribute.min-CwfJCww4.js";
import { t as r } from "./constant-DsPlz14O2.js";
var i = e(n(), 1), a = [];
async function o(e2) {
  let t2 = e2.querySelector(`input[type="text"]`);
  if (!t2) return;
  let n2 = document.createRange().createContextualFragment(`
        <button id="windpressetch-sort-css-attr-action" title="[WindPress] Sort Class" type="button" class="etch-builder-button etch-builder-button--icon-placement-before etch-builder-button--variant-icon" style="--button-font-size: 13px; --e-icon-padding: 0; margin-left: auto;">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="etch-icon iconify iconify--hugeicons-stroke" width="12px" height="12px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" />
                    <path d="M16.5 8.5l2.5 2.5l2.5 -2.5" />
                </svg>
            </div>
        </button>
    `).querySelector(`#windpressetch-sort-css-attr-action`);
  wp.hooks.addAction(`windpressetch-autocomplete-items-refresh`, `windpressetch`, () => {
  }), wp.hooks.doAction(`windpressetch-autocomplete-items-refresh`);
  let o2 = new i.default({ containerClass: `windpressetch-tribute-container`, autocompleteMode: true, menuItemLimit: 50, noMatchTemplate: ``, values: async function(e3, t3) {
    t3(await wp.hooks.applyFilters(`windpressetch-autocomplete-items-query`, a, e3));
  }, lookup: `value`, itemClass: `class-item`, menuItemTemplate: function(e3) {
    let t3 = ``;
    return e3.original.color !== void 0 && (t3 += `background-color: ${e3.original.color};`), e3.original.fontWeight !== void 0 && (t3 += `font-weight: ${e3.original.fontWeight};`), `
                <span class="class-name" data-tribute-class-name="${e3.original.value}">${e3.string}</span>
                <span class="class-hint" style="${t3}"></span>
            `;
  } });
  o2.setMenuContainer = function(e3) {
    this.menuContainer = e3;
  }, o2.events.callbacks, o2.attach(t2);
  let s = e2.querySelector(`:scope > span`);
  s instanceof HTMLElement && n2 && (s.style.display = `flex`, s.appendChild(n2), n2.querySelector(`div.icon-wrapper`).addEventListener(`click`, async () => {
    t2.value = await r().contentWindow.windpress.module.classSorter.sort(t2.value), t2.dispatchEvent(new Event(`input`, { bubbles: true }));
  })), e2.dataset.windpressInjected = `true`;
}
new MutationObserver(() => {
  let e2 = document.evaluate(`//div[contains(@class, 'etch-html-block-properties-wrapper')]//label[contains(@class, 'etch-label')]/span[text()='class']`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.parentElement;
  e2 && !e2.dataset.windpressInjected && setTimeout(() => {
    e2.dataset.windpressInjected || o(e2);
  }, 100);
}).observe(document, { subtree: true, childList: true }), t(`Intellisense: element-attribute-panel.ts module loaded`);
