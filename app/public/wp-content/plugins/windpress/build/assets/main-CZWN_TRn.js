import { t as e } from "./preload-helper-Cb81DA_d.js";
import { t } from "./logger-BvowV9fY.js";
import { n, t as r } from "./dist-BIBZ-xIq.js";
import { t as i } from "./constant-DBJJvG33.js";
(async () => {
  var a = null, o = /* @__PURE__ */ new Map(), s = 3e5, c = 500;
  function l(e2) {
    let t2 = o.get(e2);
    return t2 && Date.now() - t2.timestamp < s ? t2.value : null;
  }
  function u(e2, t2) {
    if (o.size >= c) {
      let e3 = Array.from(o.entries());
      e3.sort((e4, t4) => e4[1].timestamp - t4[1].timestamp);
      let t3 = Math.floor(c * 0.7);
      for (let n2 = 0; n2 < e3.length - t3; n2++) o.delete(e3[n2][0]);
    }
    o.set(e2, {
      value: t2,
      timestamp: Date.now()
    });
  }
  (async () => {
    a = await n({
      themes: [
        e(() => import("./dark-plus-Ckwk5c-G.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        e(() => import("./light-plus-DwL9ko6V.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        e(() => import("./css-BdG0pVBb.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: r(e(() => import("./wasm-XUuNH_hH.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  async function d(e2) {
    return (await wp.hooks.applyFilters(`windpresslivecanvas-autocomplete-items-query`, e2)).map((e3) => ({
      value: e3.value,
      meta: `TW`,
      caption: e3.value,
      score: 1e3,
      docHTML: e3.color ? `<div style="display: flex; align-items: center; gap: 8px;"><div style="width:16px; height:16px; background:${e3.color}; border:1px solid #ccc;"></div><span>${e3.color}</span></div>` : void 0
    }));
  }
  ace.require(`ace/ext/language_tools`).addCompleter({
    getCompletions: function(e2, t2, n2, r2, i2) {
      let a2 = t2.getDocument().getLine(n2.row).substring(0, n2.column);
      /class=["|'][^"']*$/i.test(a2) || /@apply\s+[^;]*$/i.test(a2) ? d(r2).then((e3) => {
        i2(null, e3);
      }).catch((e3) => {
        console.error(`Error fetching autocomplete suggestions:`, e3), i2(e3, []);
      }) : i2(null, []);
    }
  });
  var f = ace.require(`ace/tooltip`).Tooltip, p = new f(document.body);
  p.setText(``), p.hide();
  async function m(e2) {
    let t2 = e2.getDocumentPosition(), n2 = lc_html_editor.getSession(), r2 = n2.getTokenAt(t2.row, t2.column);
    if (!r2 || !/attribute-value/.test(r2.type)) {
      p.hide();
      return;
    }
    let o2 = n2.getLine(t2.row), s2 = o2.match(/class\s*=\s*["']([^"']*)["']/);
    if (!s2) {
      p.hide();
      return;
    }
    let c2 = s2[1], d2 = o2.indexOf(c2), f2 = t2.column - d2;
    if (f2 < 0 || f2 > c2.length) {
      p.hide();
      return;
    }
    let m2 = c2.split(/\s+/), h = null, g = 0;
    for (let e3 of m2) {
      let t3 = g, n3 = g + e3.length;
      if (f2 >= t3 && f2 <= n3) {
        h = e3;
        break;
      }
      g = n3 + 1;
    }
    let _ = l(h);
    _ === null && (_ = await i.contentWindow.windpress.module.classnameToCss.generate(h), u(h, _)), _ === null || _.trim() === `` ? p.hide() : (p.setHtml(a.codeToHtml(_, {
      lang: `css`,
      theme: `dark-plus`
    })), p.setPosition(e2.domEvent.clientX + 10, e2.domEvent.clientY + 10), p.show());
  }
  lc_html_editor.addEventListener(`mousemove`, m), lc_html_editor.container.addEventListener(`mouseleave`, function() {
    p.hide();
  }), t(`Module loaded!`, {
    module: `htmleditor`
  });
})();
