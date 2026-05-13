import { o as e } from "./chunk-DcEfI0Mx.js";
import { Ht as t, tt as n, vn as r } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as i } from "./debounce-B--MR6Mm.js";
import { t as a } from "./set-Bnp0_Ia6.js";
import { t as o } from "./preload-helper-Cb81DA_d.js";
import { t as s } from "./logger-BvowV9fY.js";
import { n as c, t as l } from "./tippy.esm-D2-E1MIu.js";
import { n as u, t as d } from "./dist-BIBZ-xIq.js";
import { n as f, t as p } from "./highlight-in-textarea-DSKu_7Fz.js";
import { t as m } from "./tribute.min-CwfJCww4.js";
import { a as h, i as g, n as _, r as v } from "./constant-C_wfKur4.js";
(async () => {
  var y = e(m(), 1), b = null;
  (async () => {
    b = await u({
      themes: [
        o(() => import("./dark-plus-Ckwk5c-G.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        o(() => import("./light-plus-DwL9ko6V.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        o(() => import("./css-BdG0pVBb.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: d(o(() => import("./wasm-XUuNH_hH.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  var x = document.createRange().createContextualFragment(`
    <textarea id="windpressbreakdance-plc-input" class="windpressbreakdance-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressbreakdance-plc-input`), S = document.createElement(`div`);
  S.classList.add(`windpressbreakdance-plc-input-container`), S.appendChild(x);
  var C = document.createRange().createContextualFragment(`
    <div class="windpressbreakdance-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressbreakdance-plc-action-container`).querySelector(`.actions`), w = document.createRange().createContextualFragment(`
    <span id="windpressbreakdance-plc-class-sort" class="bricks-svg-wrapper windpressbreakdance-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector(`#windpressbreakdance-plc-class-sort`);
  C.appendChild(w);
  var T = r(false), E = r(null), D = null;
  f(x);
  var O = [];
  wp.hooks.addAction(`windpressbreakdance-autocomplete-items-refresh`, `windpressbreakdance`, () => {
    O = wp.hooks.applyFilters(`windpressbreakdance-autocomplete-items`, [], x.value);
  }), wp.hooks.doAction(`windpressbreakdance-autocomplete-items-refresh`);
  var k = new y.default({
    menuContainer: document.querySelector(`#app`),
    containerClass: `windpressbreakdance-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      t2(await wp.hooks.applyFilters(`windpressbreakdance-autocomplete-items-query`, O, e2));
    },
    lookup: `value`,
    itemClass: `class-item`,
    menuItemTemplate: function(e2) {
      let t2 = ``;
      return e2.original.color !== void 0 && (t2 += `background-color: ${e2.original.color};`), e2.original.fontWeight !== void 0 && (t2 += `font-weight: ${e2.original.fontWeight};`), `
            <span class="class-name" data-tribute-class-name="${e2.original.value}">${e2.string}</span>
            <span class="class-hint" style="${t2}"></span>
        `;
    }
  });
  k.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  var A = k.events.callbacks;
  k.events.callbacks = function() {
    return {
      ...A.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), B();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), B();
        }
      }
    };
  }, k.attach(x), h.$store.subscribeAction((e2, t2) => {
    e2.type === `ui/activateElement` && (E.value = e2.payload), e2.type === `ui/setLeftSidebarState` && (T.value = e2.payload === `elementproperties`);
  }), t([
    E,
    T
  ], (e2, t2) => {
    e2[0] !== t2[0] && n(() => {
      j(), F();
    }), e2[0] && e2[1] && n(() => {
      let e3 = document.querySelector(`.breakdance-element-properties-panel .vscroll-scroll .vscroll-scroll`);
      e3 && e3.querySelector(`.windpressbreakdance-plc-input`) === null && e3.insertBefore(S, e3.firstChild);
    });
  }), D = new p(x, {
    highlight: [
      {
        highlight: /(?<=\s|^)(?:(?!\s).)+(?=\s|$)/g,
        className: `word`
      },
      {
        highlight: /(?<=\s)\s/g,
        className: `multispace`,
        blank: true
      }
    ]
  });
  async function j() {
    x.value = h.$store.getters[`ui/activeElement`].data?.properties?.settings?.advanced?.classes?.join(` `) || ``;
  }
  async function M() {
    if (h.$store.getters[`ui/activeElement`].data?.properties?.settings?.advanced?.classes) return true;
    document.querySelector(`.properties-panel-tab.breakdance-tab.breakdance-tab--id-settings`).click();
    let e2 = document.querySelector(`#settings .properties-panel-accordion.conditional-control-display-visible>div`);
    for (; e2 === null; ) e2 = document.querySelector(`#settings .properties-panel-accordion.conditional-control-display-visible>div`), await new Promise((e3) => setTimeout(e3, 100));
    e2.parentElement.classList.contains(`expanded`) || e2.click();
    let t2 = document.querySelector(`#breakdance-class-input-search input[placeholder=".my-cool-class"]`);
    for (; t2 === null; ) t2 = document.querySelector(`#breakdance-class-input-search input[placeholder=".my-cool-class"]`), await new Promise((e3) => setTimeout(e3, 100));
    return t2.focus(), t2.value = `windpressbreakdance`, t2.dispatchEvent(new Event(`input`, {
      bubbles: true
    })), await new Promise((e3) => setTimeout(e3, 100)), document.querySelector(`#breakdance-class-input-search>button`).click(), true;
  }
  var N = i(P, 50);
  async function P() {
    if (!await M()) {
      s(`Upstream path not found!`, {
        module: `plain-classes`,
        type: `error`
      });
      return;
    }
    x.focus(), a(h.$store.getters[`ui/activeElement`].data, `properties.settings.advanced.classes`, x.value.trim().split(` `).filter((e2) => e2.trim() !== ``) || []);
  }
  x.addEventListener(`input`, function(e2) {
    N();
  });
  function F() {
    n(() => {
      try {
        D.handleInput();
      } catch {
      }
      f.update(x), k.hideMenu();
    });
  }
  var I = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          R(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          z();
        }), e4.addEventListener(`click`, (e5) => {
          z(), R(t2);
        });
      });
    });
  }), L = null;
  x.addEventListener(`tribute-active-true`, function(e2) {
    L === null && (L = document.querySelector(`.windpressbreakdance-tribute-container>ul`)), n(() => {
      L && I.observe(L, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  });
  function R(e2) {
    let t2 = g.$store.getters[`ui/activeElement`].id, n2 = v.querySelector(`[data-node-id="${t2}"]`);
    n2.classList.add(e2), n2.dataset.tributeClassName = e2;
  }
  function z() {
    V();
  }
  function B() {
    let e2 = k.menu.querySelector(`li.highlight>span.class-name`);
    z(), R(e2.dataset.tributeClassName);
  }
  function V() {
    let e2 = g.$store.getters[`ui/activeElement`].id, t2 = v.querySelector(`[data-node-id="${e2}"]`);
    t2.dataset.tributeClassName && (t2.classList.remove(t2.dataset.tributeClassName), t2.dataset.tributeClassName = ``);
  }
  x.addEventListener(`highlights-updated`, function(e2) {
    U();
  });
  var H = c(document.createElement(`div`), {
    plugins: [
      l
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
  function U() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    H.reference = e2;
    async function n2(e3) {
      let t2 = e3.textContent, n3 = await _.contentWindow.windpress.module.classnameToCss.generate(t2);
      if (n3 === null || n3.trim() === ``) return null;
      H.setContent(b.codeToHtml(n3, {
        lang: `css`,
        theme: document.querySelector(`div#app.theme--light`) === null ? `dark-plus` : `light-plus`
      })), H.show();
    }
    let a2 = r(null), o2 = i(function(e3) {
      let t2 = e3.clientX, n3 = e3.clientY;
      a2.value = document.elementsFromPoint(t2, n3).find((e4) => e4.matches(`mark[class="word"]`)) || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), t(a2, (e3, t2) => {
      e3 && e3 !== t2 ? n2(e3) : H.hide();
    });
  }
  s(`Module loaded!`, {
    module: `plain-classes`
  });
})();
