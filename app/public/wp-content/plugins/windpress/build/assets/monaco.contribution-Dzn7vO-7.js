const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toggleHighContrast-Df6w4ag4.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-Cb81DA_d.js";
import { h as t, n } from "./toggleHighContrast-BVW2jQZl.js";
let a;
let __tla = (async () => {
  let r, i, o;
  r = class {
    constructor(e2, t2, r2, i2, a2) {
      this._onDidChange = new n(), this._onDidExtraLibsChange = new n(), this._extraLibs = /* @__PURE__ */ Object.create(null), this._removedExtraLibs = /* @__PURE__ */ Object.create(null), this._eagerModelSync = false, this.setCompilerOptions(e2), this.setDiagnosticsOptions(t2), this.setWorkerOptions(r2), this.setInlayHintsOptions(i2), this.setModeConfiguration(a2), this._onDidExtraLibsChangeTimeout = -1;
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    get onDidExtraLibsChange() {
      return this._onDidExtraLibsChange.event;
    }
    get modeConfiguration() {
      return this._modeConfiguration;
    }
    get workerOptions() {
      return this._workerOptions;
    }
    get inlayHintsOptions() {
      return this._inlayHintsOptions;
    }
    getExtraLibs() {
      return this._extraLibs;
    }
    addExtraLib(e2, t2) {
      let n2;
      if (n2 = t2 === void 0 ? `ts:extralib-${Math.random().toString(36).substring(2, 15)}` : t2, this._extraLibs[n2] && this._extraLibs[n2].content === e2) return {
        dispose: () => {
        }
      };
      let r2 = 1;
      return this._removedExtraLibs[n2] && (r2 = this._removedExtraLibs[n2] + 1), this._extraLibs[n2] && (r2 = this._extraLibs[n2].version + 1), this._extraLibs[n2] = {
        content: e2,
        version: r2
      }, this._fireOnDidExtraLibsChangeSoon(), {
        dispose: () => {
          let e3 = this._extraLibs[n2];
          e3 && e3.version === r2 && (delete this._extraLibs[n2], this._removedExtraLibs[n2] = r2, this._fireOnDidExtraLibsChangeSoon());
        }
      };
    }
    setExtraLibs(e2) {
      for (let e3 in this._extraLibs) this._removedExtraLibs[e3] = this._extraLibs[e3].version;
      if (this._extraLibs = /* @__PURE__ */ Object.create(null), e2 && e2.length > 0) for (let t2 of e2) {
        let e3 = t2.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`, n2 = t2.content, r2 = 1;
        this._removedExtraLibs[e3] && (r2 = this._removedExtraLibs[e3] + 1), this._extraLibs[e3] = {
          content: n2,
          version: r2
        };
      }
      this._fireOnDidExtraLibsChangeSoon();
    }
    _fireOnDidExtraLibsChangeSoon() {
      this._onDidExtraLibsChangeTimeout === -1 && (this._onDidExtraLibsChangeTimeout = window.setTimeout(() => {
        this._onDidExtraLibsChangeTimeout = -1, this._onDidExtraLibsChange.fire(void 0);
      }, 0));
    }
    getCompilerOptions() {
      return this._compilerOptions;
    }
    setCompilerOptions(e2) {
      this._compilerOptions = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
    }
    getDiagnosticsOptions() {
      return this._diagnosticsOptions;
    }
    setDiagnosticsOptions(e2) {
      this._diagnosticsOptions = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
    }
    setWorkerOptions(e2) {
      this._workerOptions = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
    }
    setInlayHintsOptions(e2) {
      this._inlayHintsOptions = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
    }
    setMaximumWorkerIdleTime(e2) {
    }
    setEagerModelSync(e2) {
      this._eagerModelSync = e2;
    }
    getEagerModelSync() {
      return this._eagerModelSync;
    }
    setModeConfiguration(e2) {
      this._modeConfiguration = e2 || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
    }
  };
  i = {
    completionItems: true,
    hovers: true,
    documentSymbols: true,
    definitions: true,
    references: true,
    documentHighlights: true,
    rename: true,
    diagnostics: true,
    documentRangeFormattingEdits: true,
    signatureHelp: true,
    onTypeFormattingEdits: true,
    codeActions: true,
    inlayHints: true
  };
  a = new r({
    allowNonTsExtensions: true,
    target: 99
  }, {
    noSemanticValidation: false,
    noSyntaxValidation: false,
    onlyVisible: false
  }, {}, {}, i);
  o = new r({
    allowNonTsExtensions: true,
    allowJs: true,
    target: 99
  }, {
    noSemanticValidation: true,
    noSyntaxValidation: false,
    onlyVisible: false
  }, {}, {}, i);
  function s() {
    return e(() => import("./tsMode-CNUwubpq.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url);
  }
  t.onLanguage(`typescript`, () => s().then((e2) => e2.setupTypeScript(a))), t.onLanguage(`javascript`, () => s().then((e2) => e2.setupJavaScript(o)));
})();
export {
  __tla,
  a as t
};
