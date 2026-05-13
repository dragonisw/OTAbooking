import { o as e } from "../../chunk-DcEfI0Mx.js";
import { Ht as t, tt as n, vn as r } from "../../runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as i } from "../../debounce-B--MR6Mm.js";
import { t as a } from "../../preload-helper-Cb81DA_d.js";
import { t as o } from "../../windpress-anR1TjG4.js";
import { n as s, t as c } from "../../tippy.esm-D2-E1MIu.js";
import { n as l, t as u } from "../../dist-BIBZ-xIq.js";
import { n as d, t as f } from "../../highlight-in-textarea-DSKu_7Fz.js";
import { t as p } from "../../tribute.min-CwfJCww4.js";
(async () => {
  var m = e(p(), 1), h = null, g = (e2) => React.createElement(o, {
    ...e2,
    width: 20,
    height: 20,
    "aria-hidden": `true`,
    focusable: `false`
  });
  (async () => {
    h = await l({
      themes: [
        a(() => import("../../dark-plus-Ckwk5c-G.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        a(() => import("../../light-plus-DwL9ko6V.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        a(() => import("../../css-BdG0pVBb.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: u(a(() => import("../../wasm-XUuNH_hH.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  var _ = r(null), v = null, y = [];
  wp.hooks.addAction(`windpressgutenberg-autocomplete-items-refresh`, `windpressgutenberg`, () => {
    y = wp.hooks.applyFilters(`windpressgutenberg-autocomplete-items`, [], ``);
  }), wp.hooks.doAction(`windpressgutenberg-autocomplete-items-refresh`);
  var b = new m.default({
    containerClass: `windpressgutenberg-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      t2(await wp.hooks.applyFilters(`windpressgutenberg-autocomplete-items-query`, y, e2));
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
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), D();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), D();
        }
      }
    };
  };
  var S = s(document.createElement(`div`), {
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
  function C() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    S.reference = e2;
    async function n2(e3) {
      let t2 = e3.textContent, n3 = await window.windpress.module.classnameToCss.generate(t2);
      if (n3 === null || n3.trim() === ``) return null;
      S.setContent(h.codeToHtml(n3, {
        lang: `css`,
        theme: `dark-plus`
      })), S.show();
    }
    let a2 = r(null), o2 = i(function(e3) {
      let t2 = e3.clientX, n3 = e3.clientY;
      a2.value = document.elementsFromPoint(t2, n3).find((e4) => e4.matches(`mark[class="word"]`)) || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), t(a2, (e3, t2) => {
      e3 && e3 !== t2 ? n2(e3) : S.hide();
    });
  }
  var w = r(null), T = r(null), E = r(null);
  function D() {
    let e2 = b.menu.querySelector(`li.highlight>span.class-name`);
    E.value && M(E.value), E.value = e2.dataset.tributeClassName, j(e2.dataset.tributeClassName);
  }
  var O = null, k = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          j(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          M(t2);
        }), e4.addEventListener(`click`, (e5) => {
        }, {
          capture: true
        });
      });
    });
  });
  function A() {
    let e2 = document.querySelector(`iframe[name="editor-canvas"]`), t2 = e2?.contentWindow || e2;
    return e2?.contentDocument || t2?.document;
  }
  function j(e2) {
    let t2 = A();
    if (!t2) return;
    let n2 = t2.getElementById(`block-${w.value}`);
    n2 && n2.classList.add(e2);
  }
  function M(e2) {
    let t2 = A();
    if (!t2) return;
    let n2 = t2.getElementById(`block-${w.value}`);
    n2 && T.value && !T.value.includes(e2) && n2.classList.remove(e2);
  }
  t(_, (e2, t2) => {
    e2 && (d(_.value), b.attach(_.value), setTimeout(() => {
      v = new f(_.value, {
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
      }), C(), _.value.addEventListener(`highlights-updated`, function(e3) {
        C();
      }), _.value.addEventListener(`tribute-active-true`, function(e3) {
        O === null && (O = document.querySelector(`.windpressgutenberg-tribute-container>ul`)), n(() => {
          O && k.observe(O, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
              `class`
            ]
          });
        });
      }), _.value.addEventListener(`tribute-active-false`, function(e3) {
        E.value && M(E.value);
      }), n(() => {
        N();
      });
    }, 10));
  });
  function N() {
    n(() => {
      try {
        v.handleInput();
      } catch {
      }
      d.update(_.value), b.hideMenu();
    });
  }
  function P(e2) {
    return (t2) => {
      let { name: n2, clientId: r2, attributes: i2, setAttributes: a2 } = t2;
      React.useEffect(() => {
        w.value = r2, T.value = i2.className;
      });
      function o2(e3) {
        a2({
          className: e3
        }), T.value = e3;
      }
      async function s2() {
        let e3 = await windpress.module.classSorter.sort(i2.className);
        a2({
          className: e3
        }), T.value = e3, N();
      }
      return React.createElement(React.Fragment, null, React.createElement(e2, t2), React.createElement(wp.blockEditor.InspectorControls, null, React.createElement(wp.components.PanelBody, {
        title: wp.i18n.__(`WindPress`, `windpress`),
        icon: g,
        initialOpen: true
      }, React.createElement(wp.components.PanelRow, {
        className: `windpressgutenberg-actions`
      }, React.createElement(`div`, null, React.createElement(wp.components.Button, {
        showTooltip: true,
        variant: `secondary`,
        label: wp.i18n.__(`Automatic Class Sorting`, `windpress`),
        onClick: s2
      }, React.createElement(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `24`,
        height: `24`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        "stroke-linecap": `round`,
        "stroke-linejoin": `round`,
        class: `tabler-icon tabler-icon-reorder icon icon-tabler icons-tabler-outline icon-tabler-reorder`
      }, React.createElement(`path`, {
        d: `M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z`
      }), React.createElement(`path`, {
        d: `M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z`
      }), React.createElement(`path`, {
        d: `M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z`
      }), React.createElement(`path`, {
        d: `M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3`
      }), React.createElement(`path`, {
        d: `M16.5 8.5l2.5 2.5l2.5 -2.5`
      }))))), React.createElement(wp.components.TextareaControl, {
        __nextHasNoMarginBottom: true,
        value: i2.className,
        onChange: (e3) => o2(e3),
        onInput: (e3) => o2(e3.target.value),
        ref: (e3) => _.value = e3
      }))));
    };
  }
  wp.hooks.addFilter(`editor.BlockEdit`, `windpress/add-class-inspector-controls`, P);
})();
