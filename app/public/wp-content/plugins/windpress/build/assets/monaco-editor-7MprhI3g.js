const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toggleHighContrast-Df6w4ag4.css"])))=>i.map(i=>d[i]);
import { r as e } from "./chunk-DcEfI0Mx.js";
import { n as t } from "./es-MnqOf9qc.js";
import { t as n } from "./preload-helper-Cb81DA_d.js";
import { a as r, c as i, d as a, f as o, h as s, i as c, l, n as u, o as d, p as f, r as p, s as m, t as h, u as g } from "./toggleHighContrast-BVW2jQZl.js";
import { n as _, t as v } from "./editor.worker-adzrAvXA.js";
import { __tla as __tla_0 } from "./monaco.contribution-CABeo5XZ.js";
import { __tla as __tla_1 } from "./monaco.contribution-Dzn7vO-7.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  _({
    id: `css`,
    extensions: [
      `.css`
    ],
    aliases: [
      `CSS`,
      `css`
    ],
    mimetypes: [
      `text/css`
    ],
    loader: () => n(() => import("./css-C1_eeVAc.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [], import.meta.url)
  }), _({
    id: `javascript`,
    extensions: [
      `.js`,
      `.es6`,
      `.jsx`,
      `.mjs`,
      `.cjs`
    ],
    firstLine: `^#!.*\\bnode`,
    filenames: [
      `jakefile`
    ],
    aliases: [
      `JavaScript`,
      `javascript`,
      `js`
    ],
    mimetypes: [
      `text/javascript`
    ],
    loader: () => n(() => import("./javascript-DGixoLYy.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0]), import.meta.url)
  });
  var y = e({
    CancellationTokenSource: () => h,
    Emitter: () => u,
    KeyCode: () => p,
    KeyMod: () => c,
    MarkerSeverity: () => r,
    MarkerTag: () => d,
    Position: () => m,
    Range: () => i,
    Selection: () => l,
    SelectionDirection: () => g,
    Token: () => a,
    Uri: () => o,
    editor: () => f,
    languages: () => s
  }), b = `` + new URL(`css.worker-Wv5dxAWO.js`, import.meta.url).href, x = `` + new URL(`ts.worker-METxwbDZ.js`, import.meta.url).href;
  function S(e2) {
    let t2 = `import ${JSON.stringify(new URL(e2, import.meta.url))}`, n2 = new Blob([
      t2
    ], {
      type: `application/javascript`
    });
    return URL.createObjectURL(n2);
  }
  function C(e2, t2 = {}) {
    let n2 = S(e2), r2 = new Worker(n2, {
      type: `module`,
      name: t2?.name
    });
    return r2.addEventListener(`error`, (e3) => {
      URL.revokeObjectURL(n2);
    }), r2;
  }
  self.MonacoEnvironment = {
    async getWorker(e2, t2) {
      return C(t2 === `css` || t2 === `scss` || t2 === `less` ? b : t2 === `javascript` || t2 === `typescript` ? x : v);
    }
  }, t.config({
    monaco: y
  });
});
