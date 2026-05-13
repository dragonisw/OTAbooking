const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CtFFRAP_.css","../style-DadGt3jf.css","../main-Bs6rESXf.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-Cb81DA_d.js";
import { t } from "../logger-BvowV9fY.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.querySelector(`.brx-body`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    for (; document.getElementById(`bricks-preloader`); ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !document.getElementById(`bricks-builder-iframe`)?.contentDocument.querySelector(`.brx-body`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    let { brxIframe: n } = await e(async () => {
      let { brxIframe: e2 } = await import("../constant-BGS1xHYj.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        brxIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-DXv08IpI.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), window.bricksData.version.startsWith(`1`) ? await e(() => import("../main-1.x-Bt7o1U3i.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url) : await e(() => import("../main-x97VDLd8.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), await e(() => import("../main--bVejbF8.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-C1xjWeOo.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-DY8IN04g.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-D3JYZmmF.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-Bc1C5cW_.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([2]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
