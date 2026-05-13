import { t as e } from "./logger-BvowV9fY.js";
var t = new BroadcastChannel(`windpress`);
(function() {
  let e2 = window.XMLHttpRequest;
  function n() {
    let n2 = new e2(), r = n2.open;
    return n2.open = function(e3, i) {
      if (e3 === `POST` && i.includes(`admin-ajax.php`)) {
        let e4 = n2.onreadystatechange;
        n2.onreadystatechange = function() {
          n2.readyState === 4 && n2.status === 200 && n2.responseText === `Save` && t.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`livecanvas`] } } }), e4 && e4.apply(this, arguments);
        };
      }
      r.apply(this, arguments);
    }, n2;
  }
  window.XMLHttpRequest = n;
})(), e(`Module loaded!`, { module: `generate-cache` });
