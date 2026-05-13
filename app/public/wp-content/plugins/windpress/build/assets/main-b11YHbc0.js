import { t as e } from "./logger-BvowV9fY.js";
var t = new BroadcastChannel(`windpress`);
(function() {
  let { fetch: e2 } = window;
  window.fetch = async (...n) => {
    let r = await e2(...n);
    if (new URL(n[0]).searchParams.get(`_breakdance_doing_ajax`) === `yes`) {
      let e3 = Object.fromEntries(n[1].body.entries());
      r.ok && r.status === 200 && e3.action === `breakdance_save` && t.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`breakdance`] } } });
    }
    return r;
  };
})(), e(`Module loaded!`, { module: `generate-cache` });
