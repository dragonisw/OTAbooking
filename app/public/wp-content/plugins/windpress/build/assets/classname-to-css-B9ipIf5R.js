import { t as e } from "./preload-helper-Cb81DA_d.js";
import { t } from "./logger-BvowV9fY.js";
import { n, t as r } from "./tippy.esm-D2-E1MIu.js";
import { n as i, t as a } from "./dist-BIBZ-xIq.js";
import { t as o } from "./constant-DsPlz14O2.js";
(async () => {
  var s = null;
  (async () => {
    s = await i({
      themes: [
        e(() => import("./dark-plus-Ckwk5c-G.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url),
        e(() => import("./light-plus-DwL9ko6V.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url)
      ],
      langs: [
        e(() => import("./css-BdG0pVBb.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url)
      ],
      engine: a(e(() => import("./wasm-XUuNH_hH.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url))
    });
  })();
  var c = n(document.createElement(`div`), {
    plugins: [
      r
    ],
    allowHTML: true,
    arrow: false,
    duration: [
      500,
      0
    ],
    followCursor: true,
    trigger: `manual`
  });
  async function l(e2) {
    let t2 = await o().contentWindow.windpress.module.classnameToCss.generate(e2);
    if (t2 === null || t2.trim() === ``) return null;
    c.setContent(s.codeToHtml(t2, {
      lang: `css`,
      theme: `dark-plus`
    })), c.show();
  }
  new MutationObserver(() => {
    document.querySelectorAll(`.cm-etch-selector:not([data-windpressInjected])`).forEach((e2) => {
      e2.addEventListener(`mouseover`, () => {
        let t2 = e2.firstChild?.textContent;
        t2 && l(t2);
      }), e2.addEventListener(`mouseout`, () => {
        c.hide();
      }), e2.setAttribute(`data-windpressInjected`, `true`);
    });
  }).observe(document, {
    subtree: true,
    childList: true
  }), t(`Intellisense: classname-to-css.ts loaded`);
})();
