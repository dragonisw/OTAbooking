import { o as e } from "./chunk-DcEfI0Mx.js";
import { Ht as t, tt as n, vn as r } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as i } from "./debounce-B--MR6Mm.js";
import { t as a } from "./preload-helper-Cb81DA_d.js";
import { t as o } from "./logger-BvowV9fY.js";
import { n as s, t as c } from "./tippy.esm-D2-E1MIu.js";
import { n as l, t as u } from "./dist-BIBZ-xIq.js";
import { n as d, t as f } from "./highlight-in-textarea-DSKu_7Fz.js";
import { t as p } from "./tribute.min-CwfJCww4.js";
import { t as m } from "./constant-DBJJvG33.js";
(async () => {
  var h = e(p(), 1), g = null;
  (async () => {
    g = await l({
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
  var _ = document.querySelector(`div#sidepanel>section[item-type="edit-properties"]>form>div.common-form-fields>div.common-form-fields-content textarea[attribute-name="class"]`), v = new f(_, {
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
  v.handleInput(), d(_);
  var y = [];
  wp.hooks.addAction(`windpresslivecanvas-autocomplete-items-refresh`, `windpresslivecanvas`, () => {
    y = wp.hooks.applyFilters(`windpresslivecanvas-autocomplete-items`, [], _.value);
  }), wp.hooks.doAction(`windpresslivecanvas-autocomplete-items-refresh`);
  var b = new h.default({
    containerClass: `windpresslivecanvas-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      t2(await wp.hooks.applyFilters(`windpresslivecanvas-autocomplete-items-query`, e2, y));
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
  b.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  var x = b.events.callbacks;
  b.events.callbacks = function() {
    return {
      ...x.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight);
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0);
        }
      }
    };
  }, b.attach(_);
  var S = r(``);
  function C() {
    n(() => {
      try {
        v.handleInput();
      } catch {
      }
      d.update(_), b.hideMenu();
    });
  }
  new MutationObserver((e2) => {
    e2.forEach((e3) => {
      e3.type === `attributes` && e3.attributeName === `selector` && (S.value = e3.target.getAttribute(`selector`));
    });
  }).observe(document.querySelector(`div#sidepanel>section[item-type="edit-properties"]`), {
    attributes: true,
    attributeFilter: [
      `selector`
    ]
  }), t(S, (e2, t2) => {
    e2 !== t2 && C();
  }), _.addEventListener(`highlights-updated`, function(e2) {
    T();
  });
  var w = s(document.createElement(`div`), {
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
  function T() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    w.reference = e2;
    async function n2(e3) {
      let t2 = e3.textContent, n3 = await m.contentWindow.windpress.module.classnameToCss.generate(t2);
      if (n3 === null || n3.trim() === ``) return null;
      w.setContent(g.codeToHtml(n3, {
        lang: `css`,
        theme: `dark-plus`
      })), w.show();
    }
    let a2 = r(null), o2 = i(function(e3) {
      let t2 = e3.clientX, n3 = e3.clientY;
      a2.value = document.elementsFromPoint(t2, n3).find((e4) => e4.matches(`mark[class="word"]`)) || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), t(a2, (e3, t2) => {
      e3 && e3 !== t2 ? n2(e3) : w.hide();
    });
  }
  o(`Module loaded!`, {
    module: `plain-classes`
  });
})();
