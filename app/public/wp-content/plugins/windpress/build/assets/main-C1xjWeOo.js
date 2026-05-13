import { t as e } from "./logger-BvowV9fY.js";
import { a as t } from "./constant-BJspwAtg.js";
var n = new BroadcastChannel(`windpress`);
(function() {
  let e2 = window.XMLHttpRequest;
  function r() {
    let r2 = new e2();
    if (!t(`module.generate-cache.on-save`, true).value) return r2;
    let i = r2.open;
    return r2.open = function(e3, t2) {
      if (e3 === `POST` && t2.includes(`admin-ajax.php`)) {
        let e4 = r2.onreadystatechange;
        r2.onreadystatechange = function() {
          if (r2.readyState === 4 && r2.status === 200) {
            let e5 = JSON.parse(r2.responseText);
            e5.data && e5.data.action && e5.data.action === `bricks_save_post` && n.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`bricks`] } } });
          }
          e4 && e4.apply(this, arguments);
        };
      }
      i.apply(this, arguments);
    }, r2;
  }
  window.XMLHttpRequest = r;
})(), e(`Module loaded!`, { module: `generate-cache` });
