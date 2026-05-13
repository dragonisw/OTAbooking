import { o as e } from "./chunk-DcEfI0Mx.js";
import { Ht as t, tt as n, vn as r } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as i } from "./debounce-B--MR6Mm.js";
import { t as a } from "./preload-helper-Cb81DA_d.js";
import { t as o } from "./logger-BvowV9fY.js";
import { n as s, t as c } from "./tippy.esm-D2-E1MIu.js";
import { n as l, t as u } from "./dist-BIBZ-xIq.js";
import { n as d, t as f } from "./highlight-in-textarea-DSKu_7Fz.js";
import { t as p } from "./tribute.min-CwfJCww4.js";
import { n as m, r as h, t as g } from "./constant-BV9AjptB.js";
(async () => {
  var _ = e(p(), 1), v = null;
  (async () => {
    v = await l({
      themes: [
        a(() => import("./dark-plus-Ckwk5c-G.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        a(() => import("./light-plus-DwL9ko6V.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        a(() => import("./css-BdG0pVBb.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: u(a(() => import("./wasm-XUuNH_hH.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  var y = document.createRange().createContextualFragment(`
    <textarea id="windpressoxygen-plc-input" class="windpressoxygen-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressoxygen-plc-input`), b = document.createRange().createContextualFragment(`
    <div class="windpressoxygen-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressoxygen-plc-action-container`), x = b.querySelector(`.actions`), S = document.createRange().createContextualFragment(`
        <span id="windpressoxygen-plc-class-sort" class="oxygen-svg-wrapper windpressoxygen-plc-class-sort">
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="oxygen-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
        </span>
`).querySelector(`#windpressoxygen-plc-class-sort`);
  x.appendChild(S);
  var C = r(false), w = r(null), T = null;
  d(y);
  var E = [];
  wp.hooks.addAction(`windpressoxygen-autocomplete-items-refresh`, `windpressoxygen`, () => {
    E = wp.hooks.applyFilters(`windpressoxygen-autocomplete-items`, [], y.value);
  }), wp.hooks.doAction(`windpressoxygen-autocomplete-items-refresh`);
  var D = new _.default({
    containerClass: `windpressoxygen-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 40,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      t2(await wp.hooks.applyFilters(`windpressoxygen-autocomplete-items-query`, E, e2));
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
  D.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  var O = D.events.callbacks;
  D.events.callbacks = function() {
    return {
      ...O.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), R();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), R();
        }
      }
    };
  }, D.attach(y), new MutationObserver(function(e2) {
    C.value = !e2[0].target.classList.contains(`ng-hide`);
  }).observe(document.querySelector(`.oxygen-sidebar-currently-editing`), {
    attributes: true,
    attributeFilter: [
      `class`
    ]
  });
  var k = g.activateComponent;
  g.activateComponent = function(e2, t2, n2) {
    k(e2, t2, n2), w.value = g.component.active.id;
  };
  function A(e2) {
    let t2 = g.component.active.id, n2 = g.component.active.name;
    if (t2 === 0) return;
    let r2 = g.component.options[t2];
    if (r2.model === void 0) return;
    r2.model[`custom-attributes`] === void 0 && h.addCustomAttribute(`plainclass`, e2);
    let i2 = r2.model[`custom-attributes`], a2 = i2.find((e3) => e3.name === `plainclass`);
    a2 ? a2.value = e2 : i2.push({
      name: `plainclass`,
      value: e2
    }), g.component.options[t2].model[`custom-attributes`] = i2, g.setOption(t2, n2, `custom-attributes`), g.applyCustomAttributes(t2);
  }
  t([
    w,
    C
  ], (e2, t2) => {
    e2[0] !== t2[0] && n(() => {
      let e3 = g.component.active.id;
      if (e3 === 0) return;
      let t3 = g.component.options[e3];
      t3.model !== void 0 && (t3.model[`custom-attributes`] === void 0 && h.addCustomAttribute(`plainclass`, ``), y.value = t3.model[`custom-attributes`]?.find((e4) => e4.name === `plainclass`)?.value || ``, j());
    }), e2[0] && e2[1] && n(() => {
      let e3 = document.querySelector(`.oxygen-sidebar-currently-editing`);
      e3.querySelector(`.windpressoxygen-plc-input`) === null && (e3.appendChild(b), window.tippy(`.windpressoxygen-plc-class-sort`, {
        content: `Automatic Class Sorting`,
        animation: `shift-toward`,
        placement: `right`
      }), e3.appendChild(y), T = new f(y, {
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
      }), d.update(y));
    });
  }), y.addEventListener(`input`, function(e2) {
    A(e2.target.value);
  });
  function j() {
    n(() => {
      try {
        T.handleInput();
      } catch {
      }
      d.update(y), D.hideMenu();
    });
  }
  y.addEventListener(`highlights-updated`, function(e2) {
    N();
  });
  var M = s(document.createElement(`div`), {
    plugins: [
      c
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
  function N() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    M.reference = e2;
    async function n2(e3) {
      let t2 = e3.textContent, n3 = await m.contentWindow.windpress.module.classnameToCss.generate(t2);
      if (n3 === null || n3.trim() === ``) return null;
      M.setContent(v.codeToHtml(n3, {
        lang: `css`,
        theme: `dark-plus`
      })), M.show();
    }
    let a2 = r(null), o2 = i(function(e3) {
      let t2 = e3.clientX, n3 = e3.clientY;
      a2.value = document.elementsFromPoint(t2, n3).find((e4) => e4.matches(`mark[class="word"]`)) || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), t(a2, (e3, t2) => {
      e3 && e3 !== t2 ? n2(e3) : M.hide();
    });
  }
  var P = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        e4.addEventListener(`mouseenter`, (t2) => {
          let n2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
          I(n2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          L();
        }), e4.addEventListener(`click`, (e5) => {
          L();
        });
      });
    });
  }), F = null;
  y.addEventListener(`tribute-active-true`, function(e2) {
    F === null && (F = document.querySelector(`.windpressoxygen-tribute-container>ul`)), n(() => {
      F && P.observe(F, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  }), S.addEventListener(`click`, async function(e2) {
    y.value = await m.contentWindow.windpress.module.classSorter.sort(y.value), A(y.value), j();
  });
  function I(e2) {
    z({
      action: `windpressoxygen-preview-class`,
      do: `add`,
      elementId: w.value,
      className: e2
    });
  }
  function L() {
    z({
      action: `windpressoxygen-preview-class`,
      do: `remove`
    });
  }
  function R() {
    n(() => {
      I(D.menu.querySelector(`li.highlight>span.class-name`).dataset.tributeClassName);
    });
  }
  function z(e2) {
    m.contentWindow.postMessage(e2, `*`);
  }
  o(`Module loaded!`, {
    module: `plain-classes`
  });
})();
