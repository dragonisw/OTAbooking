import { h as e, m as t } from "./toggleHighContrast-BVW2jQZl.js";
function n() {
  return t;
}
globalThis.MonacoEnvironment?.globalAPI && (globalThis.monaco = n());
var r = {}, i = {}, a = class e2 {
  static getOrCreate(t2) {
    return i[t2] || (i[t2] = new e2(t2)), i[t2];
  }
  constructor(e3) {
    this._languageId = e3, this._loadingTriggered = false, this._lazyLoadPromise = new Promise((e4, t2) => {
      this._lazyLoadPromiseResolve = e4, this._lazyLoadPromiseReject = t2;
    });
  }
  load() {
    return this._loadingTriggered || (this._loadingTriggered = true, r[this._languageId].loader().then((e3) => this._lazyLoadPromiseResolve(e3), (e3) => this._lazyLoadPromiseReject(e3))), this._lazyLoadPromise;
  }
};
function o(t2) {
  let n2 = t2.id;
  r[n2] = t2, e.register(t2);
  let i2 = a.getOrCreate(n2);
  e.registerTokensProviderFactory(n2, { create: async () => (await i2.load()).language }), e.onLanguageEncountered(n2, async () => {
    let t3 = await i2.load();
    e.setLanguageConfiguration(n2, t3.conf);
  });
}
var s = `` + new URL(`editor.worker-Bd9IXS8d.js`, import.meta.url).href;
export {
  o as n,
  s as t
};
