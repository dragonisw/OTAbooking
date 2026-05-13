import { p as e } from "./toggleHighContrast-BVW2jQZl.js";
function t(e2, t2) {
  let n2 = globalThis.MonacoEnvironment;
  if (n2?.createTrustedTypesPolicy) try {
    return n2.createTrustedTypesPolicy(e2, t2);
  } catch (e3) {
    console.error(e3);
    return;
  }
  try {
    return globalThis.trustedTypes?.createPolicy(e2, t2);
  } catch (e3) {
    console.error(e3);
    return;
  }
}
var n = typeof self == `object` && self.constructor && self.constructor.name === `DedicatedWorkerGlobalScope` && globalThis.workerttPolicy !== void 0 ? globalThis.workerttPolicy : t(`defaultWorkerFactory`, { createScriptURL: (e2) => e2 });
function r(e2) {
  let t2 = e2.label, r2 = globalThis.MonacoEnvironment;
  if (r2) {
    if (typeof r2.getWorker == `function`) return r2.getWorker(`workerMain.js`, t2);
    if (typeof r2.getWorkerUrl == `function`) {
      let e3 = r2.getWorkerUrl(`workerMain.js`, t2);
      return new Worker(n ? n.createScriptURL(e3) : e3, { name: t2, type: `module` });
    }
  }
  if (e2.createWorker) return e2.createWorker();
  throw Error(`You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker`);
}
function i(t2) {
  let n2 = Promise.resolve(r({ label: t2.label ?? `monaco-editor-worker`, moduleId: t2.moduleId, createWorker: t2.createWorker })).then((e2) => (e2.postMessage(`ignore`), e2.postMessage(t2.createData), e2));
  return e.createWebWorker({ worker: n2, host: t2.host, keepIdleModels: t2.keepIdleModels });
}
export {
  i as t
};
