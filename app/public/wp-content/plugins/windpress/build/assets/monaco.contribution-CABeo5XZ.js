const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toggleHighContrast-Df6w4ag4.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-Cb81DA_d.js";
import { h as t, n } from "./toggleHighContrast-BVW2jQZl.js";
let o;
let __tla = (async () => {
  let r, i, a, s, c;
  r = class {
    constructor(e2, t2, r2) {
      this._onDidChange = new n(), this._languageId = e2, this.setOptions(t2), this.setModeConfiguration(r2);
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    get languageId() {
      return this._languageId;
    }
    get modeConfiguration() {
      return this._modeConfiguration;
    }
    get diagnosticsOptions() {
      return this.options;
    }
    get options() {
      return this._options;
    }
    setOptions(e2) {
      this._options = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
    }
    setDiagnosticsOptions(e2) {
      this.setOptions(e2);
    }
    setModeConfiguration(e2) {
      this._modeConfiguration = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
    }
  };
  i = {
    validate: true,
    lint: {
      compatibleVendorPrefixes: `ignore`,
      vendorPrefix: `warning`,
      duplicateProperties: `warning`,
      emptyRules: `warning`,
      importStatement: `ignore`,
      boxModel: `ignore`,
      universalSelector: `ignore`,
      zeroUnits: `ignore`,
      fontFaceProperties: `warning`,
      hexColorLength: `error`,
      argumentsInColorFunction: `error`,
      unknownProperties: `warning`,
      ieHack: `ignore`,
      unknownVendorSpecificProperties: `ignore`,
      propertyIgnoredDueToDisplay: `warning`,
      important: `ignore`,
      float: `ignore`,
      idSelector: `ignore`
    },
    data: {
      useDefaultDataProvider: true
    },
    format: {
      newlineBetweenSelectors: true,
      newlineBetweenRules: true,
      spaceAroundSelectorSeparator: false,
      braceStyle: `collapse`,
      maxPreserveNewLines: void 0,
      preserveNewLines: true
    }
  };
  a = {
    completionItems: true,
    hovers: true,
    documentSymbols: true,
    definitions: true,
    references: true,
    documentHighlights: true,
    rename: true,
    colors: true,
    foldingRanges: true,
    diagnostics: true,
    selectionRanges: true,
    documentFormattingEdits: true,
    documentRangeFormattingEdits: true
  };
  o = new r(`css`, i, a);
  s = new r(`scss`, i, a);
  c = new r(`less`, i, a);
  function l() {
    return e(() => import("./cssMode-C0bXDS6x.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url);
  }
  t.onLanguage(`less`, () => {
    l().then((e2) => e2.setupMode(c));
  }), t.onLanguage(`scss`, () => {
    l().then((e2) => e2.setupMode(s));
  }), t.onLanguage(`css`, () => {
    l().then((e2) => e2.setupMode(o));
  });
})();
export {
  __tla,
  o as t
};
