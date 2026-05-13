const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../../main-DdsYRvJh.css","../../main-CCFdKby_.css","../../main-DZBQxE2Q.css"])))=>i.map(i=>d[i]);
import { t as e } from "../../preload-helper-Cb81DA_d.js";
import { t } from "../../logger-BvowV9fY.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; angular.element(window.top.document.body).scope() === void 0 || angular.element(window.top.document.body).scope().iframeScope === false; ) await new Promise((e2) => setTimeout(e2, 100));
    let { oxyIframe: n } = await e(async () => {
      let { oxyIframe: e2 } = await import("../../constant-C5LOQKZj.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        oxyIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../../main-C6nin6dY2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../../main-DYVMEcEV.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), await e(() => import("../../main-DyzRPiYz.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../../main-BmrFbjkp2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../../main-Cy6evo0T.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([2]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
