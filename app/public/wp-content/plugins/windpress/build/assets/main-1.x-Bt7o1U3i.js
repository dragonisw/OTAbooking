import { o as e } from "./chunk-DcEfI0Mx.js";
import { Ht as t, tt as n, vn as r } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { t as i } from "./debounce-B--MR6Mm.js";
import { t as a } from "./preload-helper-Cb81DA_d.js";
import { t as o } from "./logger-BvowV9fY.js";
import { n as s, t as c } from "./tippy.esm-D2-E1MIu.js";
import { n as l, t as u } from "./dist-BIBZ-xIq.js";
import { n as d, t as f } from "./highlight-in-textarea-DSKu_7Fz.js";
import { t as p } from "./tribute.min-CwfJCww4.js";
import { a as m, i as h, n as g, r as _ } from "./constant-BJspwAtg.js";
(async () => {
  var v = e(p(), 1), y = null;
  (async () => {
    y = await l({
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
  var b = document.createRange().createContextualFragment(`
    <textarea id="windpressbricks-plc-input" class="windpressbricks-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressbricks-plc-input`), x = document.createRange().createContextualFragment(`
    <div class="windpressbricks-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressbricks-plc-action-container`), S = x.querySelector(`.actions`), C = document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-sort" class="bricks-svg-wrapper windpressbricks-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector(`#windpressbricks-plc-class-sort`), w = document.createRange().createContextualFragment(`
    <span id="windpressbricks-plc-class-down" class="bricks-svg-wrapper windpressbricks-plc-class-down" data-balloon="Move Classes to Plain Classes" data-balloon-pos="bottom-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 13h6M2 16l4.5-9l4.5 9m7-9v9m-4-4l4 4l4-4"/></svg>    
    </span>
`).querySelector(`#windpressbricks-plc-class-down`);
  S.appendChild(w), S.appendChild(C);
  var T = r(false), E = r(null), D = null;
  d(b);
  var O = [];
  wp.hooks.addAction(`windpressbricks-autocomplete-items-refresh`, `windpressbricks`, () => {
    O = wp.hooks.applyFilters(`windpressbricks-autocomplete-items`, [], b.value);
  }), wp.hooks.doAction(`windpressbricks-autocomplete-items-refresh`);
  var k = new v.default({
    containerClass: `windpressbricks-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      if (!m(`module.plain-classes.autocomplete`, true).value) {
        t2([]);
        return;
      }
      t2(await wp.hooks.applyFilters(`windpressbricks-autocomplete-items-query`, O, e2));
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
  }, k.attach(b), new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `attributes` ? e3.target.id === `bricks-panel-element` && e3.attributeName === `style` ? e3.target.style.display === `none` ? T.value = false : T.value = true : e3.attributeName === `placeholder` && e3.target.tagName === `INPUT` && e3.target.classList.contains(`placeholder`) && (E.value = g.$_activeElement.value.id) : e3.type === `childList` && e3.addedNodes.length > 0 && (e3.target.id === `bricks-panel-sticky` && e3.addedNodes[0].id === `bricks-panel-element-classes` ? E.value = g.$_activeElement.value.id : e3.target.dataset && e3.target.dataset.controlkey === `_cssClasses` && e3.addedNodes[0].childNodes.length > 0 && document.querySelector(`#_cssClasses`).addEventListener(`input`, function(e4) {
        n(() => {
          b.value = e4.target.value, j();
        });
      }));
    });
  }).observe(document.getElementById(`bricks-panel-element`), {
    subtree: true,
    attributes: true,
    childList: true
  }), t([
    E,
    T
  ], (e2, t2) => {
    e2[0] !== t2[0] && n(() => {
      b.value = g.$_activeElement.value?.settings?._cssClasses || ``, j();
    }), e2[0] && e2[1] && n(() => {
      let e3 = document.querySelector(`#bricks-panel-element-classes`);
      m(`module.plain-classes.input-field`, true).value && e3.querySelector(`.windpressbricks-plc-input`) === null && (e3.appendChild(x), e3.appendChild(b), D = new f(b, {
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
      }), d.update(b));
    });
  }), b.addEventListener(`input`, function(e2) {
    g.$_activeElement.value.settings._cssClasses = e2.target.value;
  });
  function j() {
    n(() => {
      try {
        D.handleInput();
      } catch {
      }
      d.update(b), k.hideMenu();
    });
  }
  b.addEventListener(`highlights-updated`, function(e2) {
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
      let t2 = e3.textContent, n3 = await _.contentWindow.windpress.module.classnameToCss.generate(t2);
      if (n3 === null || n3.trim() === ``) return null;
      M.setContent(y.codeToHtml(n3, {
        lang: `css`,
        theme: `dark-plus`
      })), M.show();
    }
    let a2 = r(null), o2 = i(function(e3) {
      if (!m(`module.plain-classes.hover-preview-classes`, true).value) return;
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
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          I(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          L();
        }), e4.addEventListener(`click`, (e5) => {
          L();
        });
      });
    });
  }), F = null;
  b.addEventListener(`tribute-active-true`, function(e2) {
    F === null && (F = document.querySelector(`.windpressbricks-tribute-container>ul`)), n(() => {
      F && P.observe(F, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  }), C.addEventListener(`click`, async function(e2) {
    b.value = await _.contentWindow.windpress.module.classSorter.sort(b.value), g.$_activeElement.value.settings._cssClasses = b.value, j();
  }), w.addEventListener(`click`, async function(e2) {
    let t2 = g.$_activeElement.value, n2 = b.value.split(` `);
    (t2.settings?._cssGlobalClasses ? [
      ...t2.settings._cssGlobalClasses
    ] : []).forEach((e3) => {
      let t3 = g.$_getGlobalClassName(e3);
      n2.includes(t3) || n2.push(t3);
    }), b.value = n2.join(` `), g.$_activeElement.value.settings._cssClasses = b.value, g.$_activeElement.value.settings._cssGlobalClasses = [], j();
  });
  function I(e2) {
    h.$_getElementNode(h.$_activeElement.value).classList.add(e2);
  }
  function L() {
    let e2 = h.$_activeElement.value, t2 = h.$_getElementNode(e2), n2 = h.$_getElementClasses(e2);
    t2.classList.value = n2.join(` `);
  }
  function R() {
    let e2 = k.menu.querySelector(`li.highlight>span.class-name`), t2 = h.$_activeElement.value, n2 = h.$_getElementNode(t2), r2 = h.$_getElementClasses(t2);
    n2.classList.value = r2.join(` `) + ` ` + e2.dataset.tributeClassName;
  }
  o(`Module loaded!`, {
    module: `plain-classes`
  });
})();
