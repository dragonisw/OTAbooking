import { t as e } from "./logger-BvowV9fY.js";
import { t } from "./constant-BV9AjptB.js";
var n = new BroadcastChannel(`windpress`), r = t.allSaved;
t.allSaved = function() {
  r.apply(this, arguments), n.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`oxygen-classic`] } } });
}, e(`Module loaded!`, { module: `generate-cache` });
