import { a as e, c as t, f as n, h as r, o as i, p as a } from "./toggleHighContrast-BVW2jQZl.js";
import { t as o } from "./monaco.contribution-Dzn7vO-7.js";
import { t as s } from "./workers-DGmhRSWB.js";
var c = class {
  constructor(e4, t2) {
    this._modeId = e4, this._defaults = t2, this._worker = null, this._client = null, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker()), this._updateExtraLibsToken = 0, this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(() => this._updateExtraLibs());
  }
  dispose() {
    this._configChangeListener.dispose(), this._extraLibsChangeListener.dispose(), this._stopWorker();
  }
  _stopWorker() {
    this._worker && (this._worker = (this._worker.dispose(), null)), this._client = null;
  }
  async _updateExtraLibs() {
    if (!this._worker) return;
    let e4 = ++this._updateExtraLibsToken, t2 = await this._worker.getProxy();
    this._updateExtraLibsToken === e4 && t2.updateExtraLibs(this._defaults.getExtraLibs());
  }
  _getClient() {
    return this._client || (this._client = (async () => (this._worker = s({ moduleId: `vs/language/typescript/tsWorker`, createWorker: () => new Worker(new URL(`` + new URL(`ts.worker-METxwbDZ.js`, import.meta.url).href, `` + import.meta.url), { type: `module` }), label: this._modeId, keepIdleModels: true, createData: { compilerOptions: this._defaults.getCompilerOptions(), extraLibs: this._defaults.getExtraLibs(), customWorkerPath: this._defaults.workerOptions.customWorkerPath, inlayHintsOptions: this._defaults.inlayHintsOptions } }), this._defaults.getEagerModelSync() ? await this._worker.withSyncedResources(a.getModels().filter((e4) => e4.getLanguageId() === this._modeId).map((e4) => e4.uri)) : await this._worker.getProxy()))()), this._client;
  }
  async getLanguageServiceWorker(...e4) {
    let t2 = await this._getClient();
    return this._worker && await this._worker.withSyncedResources(e4), t2;
  }
}, l = {};
l[`lib.d.ts`] = true, l[`lib.decorators.d.ts`] = true, l[`lib.decorators.legacy.d.ts`] = true, l[`lib.dom.asynciterable.d.ts`] = true, l[`lib.dom.d.ts`] = true, l[`lib.dom.iterable.d.ts`] = true, l[`lib.es2015.collection.d.ts`] = true, l[`lib.es2015.core.d.ts`] = true, l[`lib.es2015.d.ts`] = true, l[`lib.es2015.generator.d.ts`] = true, l[`lib.es2015.iterable.d.ts`] = true, l[`lib.es2015.promise.d.ts`] = true, l[`lib.es2015.proxy.d.ts`] = true, l[`lib.es2015.reflect.d.ts`] = true, l[`lib.es2015.symbol.d.ts`] = true, l[`lib.es2015.symbol.wellknown.d.ts`] = true, l[`lib.es2016.array.include.d.ts`] = true, l[`lib.es2016.d.ts`] = true, l[`lib.es2016.full.d.ts`] = true, l[`lib.es2016.intl.d.ts`] = true, l[`lib.es2017.arraybuffer.d.ts`] = true, l[`lib.es2017.d.ts`] = true, l[`lib.es2017.date.d.ts`] = true, l[`lib.es2017.full.d.ts`] = true, l[`lib.es2017.intl.d.ts`] = true, l[`lib.es2017.object.d.ts`] = true, l[`lib.es2017.sharedmemory.d.ts`] = true, l[`lib.es2017.string.d.ts`] = true, l[`lib.es2017.typedarrays.d.ts`] = true, l[`lib.es2018.asyncgenerator.d.ts`] = true, l[`lib.es2018.asynciterable.d.ts`] = true, l[`lib.es2018.d.ts`] = true, l[`lib.es2018.full.d.ts`] = true, l[`lib.es2018.intl.d.ts`] = true, l[`lib.es2018.promise.d.ts`] = true, l[`lib.es2018.regexp.d.ts`] = true, l[`lib.es2019.array.d.ts`] = true, l[`lib.es2019.d.ts`] = true, l[`lib.es2019.full.d.ts`] = true, l[`lib.es2019.intl.d.ts`] = true, l[`lib.es2019.object.d.ts`] = true, l[`lib.es2019.string.d.ts`] = true, l[`lib.es2019.symbol.d.ts`] = true, l[`lib.es2020.bigint.d.ts`] = true, l[`lib.es2020.d.ts`] = true, l[`lib.es2020.date.d.ts`] = true, l[`lib.es2020.full.d.ts`] = true, l[`lib.es2020.intl.d.ts`] = true, l[`lib.es2020.number.d.ts`] = true, l[`lib.es2020.promise.d.ts`] = true, l[`lib.es2020.sharedmemory.d.ts`] = true, l[`lib.es2020.string.d.ts`] = true, l[`lib.es2020.symbol.wellknown.d.ts`] = true, l[`lib.es2021.d.ts`] = true, l[`lib.es2021.full.d.ts`] = true, l[`lib.es2021.intl.d.ts`] = true, l[`lib.es2021.promise.d.ts`] = true, l[`lib.es2021.string.d.ts`] = true, l[`lib.es2021.weakref.d.ts`] = true, l[`lib.es2022.array.d.ts`] = true, l[`lib.es2022.d.ts`] = true, l[`lib.es2022.error.d.ts`] = true, l[`lib.es2022.full.d.ts`] = true, l[`lib.es2022.intl.d.ts`] = true, l[`lib.es2022.object.d.ts`] = true, l[`lib.es2022.regexp.d.ts`] = true, l[`lib.es2022.string.d.ts`] = true, l[`lib.es2023.array.d.ts`] = true, l[`lib.es2023.collection.d.ts`] = true, l[`lib.es2023.d.ts`] = true, l[`lib.es2023.full.d.ts`] = true, l[`lib.es2023.intl.d.ts`] = true, l[`lib.es2024.arraybuffer.d.ts`] = true, l[`lib.es2024.collection.d.ts`] = true, l[`lib.es2024.d.ts`] = true, l[`lib.es2024.full.d.ts`] = true, l[`lib.es2024.object.d.ts`] = true, l[`lib.es2024.promise.d.ts`] = true, l[`lib.es2024.regexp.d.ts`] = true, l[`lib.es2024.sharedmemory.d.ts`] = true, l[`lib.es2024.string.d.ts`] = true, l[`lib.es5.d.ts`] = true, l[`lib.es6.d.ts`] = true, l[`lib.esnext.array.d.ts`] = true, l[`lib.esnext.collection.d.ts`] = true, l[`lib.esnext.d.ts`] = true, l[`lib.esnext.decorators.d.ts`] = true, l[`lib.esnext.disposable.d.ts`] = true, l[`lib.esnext.error.d.ts`] = true, l[`lib.esnext.float16.d.ts`] = true, l[`lib.esnext.full.d.ts`] = true, l[`lib.esnext.intl.d.ts`] = true, l[`lib.esnext.iterator.d.ts`] = true, l[`lib.esnext.promise.d.ts`] = true, l[`lib.esnext.sharedmemory.d.ts`] = true, l[`lib.scripthost.d.ts`] = true, l[`lib.webworker.asynciterable.d.ts`] = true, l[`lib.webworker.d.ts`] = true, l[`lib.webworker.importscripts.d.ts`] = true, l[`lib.webworker.iterable.d.ts`] = true;
function u(e4, t2, n2 = 0) {
  if (typeof e4 == `string`) return e4;
  if (e4 === void 0) return ``;
  let r2 = ``;
  if (n2) {
    r2 += t2;
    for (let e5 = 0; e5 < n2; e5++) r2 += `  `;
  }
  if (r2 += e4.messageText, n2++, e4.next) for (let i2 of e4.next) r2 += u(i2, t2, n2);
  return r2;
}
function d(e4) {
  return e4 ? e4.map((e5) => e5.text).join(``) : ``;
}
var f = class {
  constructor(e4) {
    this._worker = e4;
  }
  _textSpanToRange(e4, t2) {
    let n2 = e4.getPositionAt(t2.start), r2 = e4.getPositionAt(t2.start + t2.length), { lineNumber: i2, column: a2 } = n2, { lineNumber: o2, column: s2 } = r2;
    return { startLineNumber: i2, startColumn: a2, endLineNumber: o2, endColumn: s2 };
  }
}, p = class {
  constructor(e4) {
    this._worker = e4, this._libFiles = {}, this._hasFetchedLibFiles = false, this._fetchLibFilesPromise = null;
  }
  isLibFile(e4) {
    return e4 && e4.path.indexOf(`/lib.`) === 0 ? !!l[e4.path.slice(1)] : false;
  }
  getOrCreateModel(e4) {
    let t2 = n.parse(e4), r2 = a.getModel(t2);
    if (r2) return r2;
    if (this.isLibFile(t2) && this._hasFetchedLibFiles) return a.createModel(this._libFiles[t2.path.slice(1)], `typescript`, t2);
    let i2 = o.getExtraLibs()[e4];
    return i2 ? a.createModel(i2.content, `typescript`, t2) : null;
  }
  _containsLibFile(e4) {
    for (let t2 of e4) if (this.isLibFile(t2)) return true;
    return false;
  }
  async fetchLibFilesIfNecessary(e4) {
    this._containsLibFile(e4) && await this._fetchLibFiles();
  }
  _fetchLibFiles() {
    return this._fetchLibFilesPromise || (this._fetchLibFilesPromise = this._worker().then((e4) => e4.getLibFiles()).then((e4) => {
      this._hasFetchedLibFiles = true, this._libFiles = e4;
    })), this._fetchLibFilesPromise;
  }
}, m = class extends f {
  constructor(e4, t2, n2, r2) {
    super(r2), this._libFiles = e4, this._defaults = t2, this._selector = n2, this._disposables = [], this._listener = /* @__PURE__ */ Object.create(null);
    let i2 = (e5) => {
      if (e5.getLanguageId() !== n2) return;
      let t3 = () => {
        let { onlyVisible: t4 } = this._defaults.getDiagnosticsOptions();
        t4 ? e5.isAttachedToEditor() && this._doValidate(e5) : this._doValidate(e5);
      }, r3, i3 = e5.onDidChangeContent(() => {
        clearTimeout(r3), r3 = window.setTimeout(t3, 500);
      }), o3 = e5.onDidChangeAttached(() => {
        let { onlyVisible: n3 } = this._defaults.getDiagnosticsOptions();
        n3 && (e5.isAttachedToEditor() ? t3() : a.setModelMarkers(e5, this._selector, []));
      });
      this._listener[e5.uri.toString()] = { dispose() {
        i3.dispose(), o3.dispose(), clearTimeout(r3);
      } }, t3();
    }, o2 = (e5) => {
      a.setModelMarkers(e5, this._selector, []);
      let t3 = e5.uri.toString();
      this._listener[t3] && (this._listener[t3].dispose(), delete this._listener[t3]);
    };
    this._disposables.push(a.onDidCreateModel((e5) => i2(e5))), this._disposables.push(a.onWillDisposeModel(o2)), this._disposables.push(a.onDidChangeModelLanguage((e5) => {
      o2(e5.model), i2(e5.model);
    })), this._disposables.push({ dispose() {
      for (let e5 of a.getModels()) o2(e5);
    } });
    let s2 = () => {
      for (let e5 of a.getModels()) o2(e5), i2(e5);
    };
    this._disposables.push(this._defaults.onDidChange(s2)), this._disposables.push(this._defaults.onDidExtraLibsChange(s2)), a.getModels().forEach((e5) => i2(e5));
  }
  dispose() {
    this._disposables.forEach((e4) => e4 && e4.dispose()), this._disposables = [];
  }
  async _doValidate(e4) {
    let t2 = await this._worker(e4.uri);
    if (e4.isDisposed()) return;
    let r2 = [], { noSyntaxValidation: i2, noSemanticValidation: o2, noSuggestionDiagnostics: s2 } = this._defaults.getDiagnosticsOptions();
    i2 || r2.push(t2.getSyntacticDiagnostics(e4.uri.toString())), o2 || r2.push(t2.getSemanticDiagnostics(e4.uri.toString())), s2 || r2.push(t2.getSuggestionDiagnostics(e4.uri.toString()));
    let c2 = await Promise.all(r2);
    if (!c2 || e4.isDisposed()) return;
    let l2 = c2.reduce((e5, t3) => t3.concat(e5), []).filter((e5) => (this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(e5.code) === -1), u2 = l2.map((e5) => e5.relatedInformation || []).reduce((e5, t3) => t3.concat(e5), []).map((e5) => e5.file ? n.parse(e5.file.fileName) : null);
    await this._libFiles.fetchLibFilesIfNecessary(u2), !e4.isDisposed() && a.setModelMarkers(e4, this._selector, l2.map((t3) => this._convertDiagnostics(e4, t3)));
  }
  _convertDiagnostics(e4, t2) {
    let n2 = t2.start || 0, r2 = t2.length || 1, { lineNumber: a2, column: o2 } = e4.getPositionAt(n2), { lineNumber: s2, column: c2 } = e4.getPositionAt(n2 + r2), l2 = [];
    return t2.reportsUnnecessary && l2.push(i.Unnecessary), t2.reportsDeprecated && l2.push(i.Deprecated), { severity: this._tsDiagnosticCategoryToMarkerSeverity(t2.category), startLineNumber: a2, startColumn: o2, endLineNumber: s2, endColumn: c2, message: u(t2.messageText, `
`), code: t2.code.toString(), tags: l2, relatedInformation: this._convertRelatedInformation(e4, t2.relatedInformation) };
  }
  _convertRelatedInformation(e4, t2) {
    if (!t2) return [];
    let n2 = [];
    return t2.forEach((t3) => {
      let r2 = e4;
      if (t3.file && (r2 = this._libFiles.getOrCreateModel(t3.file.fileName)), !r2) return;
      let i2 = t3.start || 0, a2 = t3.length || 1, { lineNumber: o2, column: s2 } = r2.getPositionAt(i2), { lineNumber: c2, column: l2 } = r2.getPositionAt(i2 + a2);
      n2.push({ resource: r2.uri, startLineNumber: o2, startColumn: s2, endLineNumber: c2, endColumn: l2, message: u(t3.messageText, `
`) });
    }), n2;
  }
  _tsDiagnosticCategoryToMarkerSeverity(t2) {
    switch (t2) {
      case 1:
        return e.Error;
      case 3:
        return e.Info;
      case 0:
        return e.Warning;
      case 2:
        return e.Hint;
    }
    return e.Info;
  }
}, h = class e2 extends f {
  get triggerCharacters() {
    return [`.`];
  }
  async provideCompletionItems(n2, i2, a2, o2) {
    let s2 = n2.getWordUntilPosition(i2), c2 = new t(i2.lineNumber, s2.startColumn, i2.lineNumber, s2.endColumn), l2 = n2.uri, u2 = n2.getOffsetAt(i2), d2 = await this._worker(l2);
    if (n2.isDisposed()) return;
    let f2 = await d2.getCompletionsAtPosition(l2.toString(), u2);
    if (!(!f2 || n2.isDisposed())) return { suggestions: f2.entries.map((a3) => {
      let o3 = c2;
      if (a3.replacementSpan) {
        let e4 = n2.getPositionAt(a3.replacementSpan.start), r2 = n2.getPositionAt(a3.replacementSpan.start + a3.replacementSpan.length);
        o3 = new t(e4.lineNumber, e4.column, r2.lineNumber, r2.column);
      }
      let s3 = [];
      return a3.kindModifiers !== void 0 && a3.kindModifiers.indexOf(`deprecated`) !== -1 && s3.push(r.CompletionItemTag.Deprecated), { uri: l2, position: i2, offset: u2, range: o3, label: a3.name, insertText: a3.name, sortText: a3.sortText, kind: e2.convertKind(a3.kind), tags: s3 };
    }) };
  }
  async resolveCompletionItem(t2, n2) {
    let r2 = t2, i2 = r2.uri, a2 = r2.position, o2 = r2.offset, s2 = await (await this._worker(i2)).getCompletionEntryDetails(i2.toString(), o2, r2.label);
    return s2 ? { uri: i2, position: a2, label: s2.name, kind: e2.convertKind(s2.kind), detail: d(s2.displayParts), documentation: { value: e2.createDocumentationString(s2) } } : r2;
  }
  static convertKind(e4) {
    switch (e4) {
      case C.primitiveType:
      case C.keyword:
        return r.CompletionItemKind.Keyword;
      case C.variable:
      case C.localVariable:
        return r.CompletionItemKind.Variable;
      case C.memberVariable:
      case C.memberGetAccessor:
      case C.memberSetAccessor:
        return r.CompletionItemKind.Field;
      case C.function:
      case C.memberFunction:
      case C.constructSignature:
      case C.callSignature:
      case C.indexSignature:
        return r.CompletionItemKind.Function;
      case C.enum:
        return r.CompletionItemKind.Enum;
      case C.module:
        return r.CompletionItemKind.Module;
      case C.class:
        return r.CompletionItemKind.Class;
      case C.interface:
        return r.CompletionItemKind.Interface;
      case C.warning:
        return r.CompletionItemKind.File;
    }
    return r.CompletionItemKind.Property;
  }
  static createDocumentationString(e4) {
    let t2 = d(e4.documentation);
    if (e4.tags) for (let n2 of e4.tags) t2 += `

${g(n2)}`;
    return t2;
  }
};
function g(e4) {
  let t2 = `*@${e4.name}*`;
  if (e4.name === `param` && e4.text) {
    let [n2, ...r2] = e4.text;
    t2 += `\`${n2.text}\``, r2.length > 0 && (t2 += ` \u2014 ${r2.map((e5) => e5.text).join(` `)}`);
  } else Array.isArray(e4.text) ? t2 += ` \u2014 ${e4.text.map((e5) => e5.text).join(` `)}` : e4.text && (t2 += ` \u2014 ${e4.text}`);
  return t2;
}
var _ = class e3 extends f {
  constructor() {
    super(...arguments), this.signatureHelpTriggerCharacters = [`(`, `,`];
  }
  static _toSignatureHelpTriggerReason(e4) {
    switch (e4.triggerKind) {
      case r.SignatureHelpTriggerKind.TriggerCharacter:
        return e4.triggerCharacter ? e4.isRetrigger ? { kind: `retrigger`, triggerCharacter: e4.triggerCharacter } : { kind: `characterTyped`, triggerCharacter: e4.triggerCharacter } : { kind: `invoked` };
      case r.SignatureHelpTriggerKind.ContentChange:
        return e4.isRetrigger ? { kind: `retrigger` } : { kind: `invoked` };
      case r.SignatureHelpTriggerKind.Invoke:
      default:
        return { kind: `invoked` };
    }
  }
  async provideSignatureHelp(t2, n2, r2, i2) {
    let a2 = t2.uri, o2 = t2.getOffsetAt(n2), s2 = await this._worker(a2);
    if (t2.isDisposed()) return;
    let c2 = await s2.getSignatureHelpItems(a2.toString(), o2, { triggerReason: e3._toSignatureHelpTriggerReason(i2) });
    if (!c2 || t2.isDisposed()) return;
    let l2 = { activeSignature: c2.selectedItemIndex, activeParameter: c2.argumentIndex, signatures: [] };
    return c2.items.forEach((e4) => {
      let t3 = { label: ``, parameters: [] };
      t3.documentation = { value: d(e4.documentation) }, t3.label += d(e4.prefixDisplayParts), e4.parameters.forEach((n3, r3, i3) => {
        let a3 = d(n3.displayParts), o3 = { label: a3, documentation: { value: d(n3.documentation) } };
        t3.label += a3, t3.parameters.push(o3), r3 < i3.length - 1 && (t3.label += d(e4.separatorDisplayParts));
      }), t3.label += d(e4.suffixDisplayParts), l2.signatures.push(t3);
    }), { value: l2, dispose() {
    } };
  }
}, v = class extends f {
  async provideHover(e4, t2, n2) {
    let r2 = e4.uri, i2 = e4.getOffsetAt(t2), a2 = await this._worker(r2);
    if (e4.isDisposed()) return;
    let o2 = await a2.getQuickInfoAtPosition(r2.toString(), i2);
    if (!o2 || e4.isDisposed()) return;
    let s2 = d(o2.documentation), c2 = o2.tags ? o2.tags.map((e5) => g(e5)).join(`  

`) : ``, l2 = d(o2.displayParts);
    return { range: this._textSpanToRange(e4, o2.textSpan), contents: [{ value: "```typescript\n" + l2 + "\n```\n" }, { value: s2 + (c2 ? `

` + c2 : ``) }] };
  }
}, y = class extends f {
  async provideDocumentHighlights(e4, t2, n2) {
    let i2 = e4.uri, a2 = e4.getOffsetAt(t2), o2 = await this._worker(i2);
    if (e4.isDisposed()) return;
    let s2 = await o2.getDocumentHighlights(i2.toString(), a2, [i2.toString()]);
    if (!(!s2 || e4.isDisposed())) return s2.flatMap((t3) => t3.highlightSpans.map((t4) => ({ range: this._textSpanToRange(e4, t4.textSpan), kind: t4.kind === `writtenReference` ? r.DocumentHighlightKind.Write : r.DocumentHighlightKind.Text })));
  }
}, b = class extends f {
  constructor(e4, t2) {
    super(t2), this._libFiles = e4;
  }
  async provideDefinition(e4, t2, r2) {
    let i2 = e4.uri, a2 = e4.getOffsetAt(t2), o2 = await this._worker(i2);
    if (e4.isDisposed()) return;
    let s2 = await o2.getDefinitionAtPosition(i2.toString(), a2);
    if (!s2 || e4.isDisposed() || (await this._libFiles.fetchLibFilesIfNecessary(s2.map((e5) => n.parse(e5.fileName))), e4.isDisposed())) return;
    let c2 = [];
    for (let e5 of s2) {
      let t3 = this._libFiles.getOrCreateModel(e5.fileName);
      t3 && c2.push({ uri: t3.uri, range: this._textSpanToRange(t3, e5.textSpan) });
    }
    return c2;
  }
}, x = class extends f {
  constructor(e4, t2) {
    super(t2), this._libFiles = e4;
  }
  async provideReferences(e4, t2, r2, i2) {
    let a2 = e4.uri, o2 = e4.getOffsetAt(t2), s2 = await this._worker(a2);
    if (e4.isDisposed()) return;
    let c2 = await s2.getReferencesAtPosition(a2.toString(), o2);
    if (!c2 || e4.isDisposed() || (await this._libFiles.fetchLibFilesIfNecessary(c2.map((e5) => n.parse(e5.fileName))), e4.isDisposed())) return;
    let l2 = [];
    for (let e5 of c2) {
      let t3 = this._libFiles.getOrCreateModel(e5.fileName);
      t3 && l2.push({ uri: t3.uri, range: this._textSpanToRange(t3, e5.textSpan) });
    }
    return l2;
  }
}, S = class extends f {
  async provideDocumentSymbols(e4, t2) {
    let n2 = e4.uri, i2 = await this._worker(n2);
    if (e4.isDisposed()) return;
    let a2 = await i2.getNavigationTree(n2.toString());
    if (!a2 || e4.isDisposed()) return;
    let o2 = (t3, n3) => ({ name: t3.text, detail: ``, kind: w[t3.kind] || r.SymbolKind.Variable, range: this._textSpanToRange(e4, t3.spans[0]), selectionRange: this._textSpanToRange(e4, t3.spans[0]), tags: [], children: t3.childItems?.map((e5) => o2(e5, t3.text)), containerName: n3 });
    return a2.childItems ? a2.childItems.map((e5) => o2(e5)) : [];
  }
}, C = class {
};
C.unknown = ``, C.keyword = `keyword`, C.script = `script`, C.module = `module`, C.class = `class`, C.interface = `interface`, C.type = `type`, C.enum = `enum`, C.variable = `var`, C.localVariable = `local var`, C.function = `function`, C.localFunction = `local function`, C.memberFunction = `method`, C.memberGetAccessor = `getter`, C.memberSetAccessor = `setter`, C.memberVariable = `property`, C.constructorImplementation = `constructor`, C.callSignature = `call`, C.indexSignature = `index`, C.constructSignature = `construct`, C.parameter = `parameter`, C.typeParameter = `type parameter`, C.primitiveType = `primitive type`, C.label = `label`, C.alias = `alias`, C.const = `const`, C.let = `let`, C.warning = `warning`;
var w = /* @__PURE__ */ Object.create(null);
w[C.module] = r.SymbolKind.Module, w[C.class] = r.SymbolKind.Class, w[C.enum] = r.SymbolKind.Enum, w[C.interface] = r.SymbolKind.Interface, w[C.memberFunction] = r.SymbolKind.Method, w[C.memberVariable] = r.SymbolKind.Property, w[C.memberGetAccessor] = r.SymbolKind.Property, w[C.memberSetAccessor] = r.SymbolKind.Property, w[C.variable] = r.SymbolKind.Variable, w[C.const] = r.SymbolKind.Variable, w[C.localVariable] = r.SymbolKind.Variable, w[C.variable] = r.SymbolKind.Variable, w[C.function] = r.SymbolKind.Function, w[C.localFunction] = r.SymbolKind.Function;
var T = class extends f {
  static _convertOptions(e4) {
    return { ConvertTabsToSpaces: e4.insertSpaces, TabSize: e4.tabSize, IndentSize: e4.tabSize, IndentStyle: 2, NewLineCharacter: `
`, InsertSpaceAfterCommaDelimiter: true, InsertSpaceAfterSemicolonInForStatements: true, InsertSpaceBeforeAndAfterBinaryOperators: true, InsertSpaceAfterKeywordsInControlFlowStatements: true, InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true, InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false, InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false, InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false, PlaceOpenBraceOnNewLineForControlBlocks: false, PlaceOpenBraceOnNewLineForFunctions: false };
  }
  _convertTextChanges(e4, t2) {
    return { text: t2.newText, range: this._textSpanToRange(e4, t2.span) };
  }
}, E = class extends T {
  constructor() {
    super(...arguments), this.canFormatMultipleRanges = false;
  }
  async provideDocumentRangeFormattingEdits(e4, t2, n2, r2) {
    let i2 = e4.uri, a2 = e4.getOffsetAt({ lineNumber: t2.startLineNumber, column: t2.startColumn }), o2 = e4.getOffsetAt({ lineNumber: t2.endLineNumber, column: t2.endColumn }), s2 = await this._worker(i2);
    if (e4.isDisposed()) return;
    let c2 = await s2.getFormattingEditsForRange(i2.toString(), a2, o2, T._convertOptions(n2));
    if (!(!c2 || e4.isDisposed())) return c2.map((t3) => this._convertTextChanges(e4, t3));
  }
}, D = class extends T {
  get autoFormatTriggerCharacters() {
    return [`;`, `}`, `
`];
  }
  async provideOnTypeFormattingEdits(e4, t2, n2, r2, i2) {
    let a2 = e4.uri, o2 = e4.getOffsetAt(t2), s2 = await this._worker(a2);
    if (e4.isDisposed()) return;
    let c2 = await s2.getFormattingEditsAfterKeystroke(a2.toString(), o2, n2, T._convertOptions(r2));
    if (!(!c2 || e4.isDisposed())) return c2.map((t3) => this._convertTextChanges(e4, t3));
  }
}, O = class extends T {
  async provideCodeActions(e4, t2, n2, r2) {
    let i2 = e4.uri, a2 = e4.getOffsetAt({ lineNumber: t2.startLineNumber, column: t2.startColumn }), o2 = e4.getOffsetAt({ lineNumber: t2.endLineNumber, column: t2.endColumn }), s2 = T._convertOptions(e4.getOptions()), c2 = n2.markers.filter((e5) => e5.code).map((e5) => e5.code).map(Number), l2 = await this._worker(i2);
    if (e4.isDisposed()) return;
    let u2 = await l2.getCodeFixesAtPosition(i2.toString(), a2, o2, c2, s2);
    return !u2 || e4.isDisposed() ? { actions: [], dispose: () => {
    } } : { actions: u2.filter((e5) => e5.changes.filter((e6) => e6.isNewFile).length === 0).map((t3) => this._tsCodeFixActionToMonacoCodeAction(e4, n2, t3)), dispose: () => {
    } };
  }
  _tsCodeFixActionToMonacoCodeAction(e4, t2, n2) {
    let r2 = [];
    for (let t3 of n2.changes) for (let n3 of t3.textChanges) r2.push({ resource: e4.uri, versionId: void 0, textEdit: { range: this._textSpanToRange(e4, n3.span), text: n3.newText } });
    return { title: n2.description, edit: { edits: r2 }, diagnostics: t2.markers, kind: `quickfix` };
  }
}, k = class extends f {
  constructor(e4, t2) {
    super(t2), this._libFiles = e4;
  }
  async provideRenameEdits(e4, t2, n2, r2) {
    let i2 = e4.uri, a2 = i2.toString(), o2 = e4.getOffsetAt(t2), s2 = await this._worker(i2);
    if (e4.isDisposed()) return;
    let c2 = await s2.getRenameInfo(a2, o2, { allowRenameOfImportPath: false });
    if (c2.canRename === false) return { edits: [], rejectReason: c2.localizedErrorMessage };
    if (c2.fileToRename !== void 0) throw Error(`Renaming files is not supported.`);
    let l2 = await s2.findRenameLocations(a2, o2, false, false, false);
    if (!l2 || e4.isDisposed()) return;
    let u2 = [];
    for (let e5 of l2) {
      let t3 = this._libFiles.getOrCreateModel(e5.fileName);
      if (t3) u2.push({ resource: t3.uri, versionId: void 0, textEdit: { range: this._textSpanToRange(t3, e5.textSpan), text: n2 } });
      else throw Error(`Unknown file ${e5.fileName}.`);
    }
    return { edits: u2 };
  }
}, A = class extends f {
  async provideInlayHints(e4, t2, n2) {
    let r2 = e4.uri, i2 = r2.toString(), a2 = e4.getOffsetAt({ lineNumber: t2.startLineNumber, column: t2.startColumn }), o2 = e4.getOffsetAt({ lineNumber: t2.endLineNumber, column: t2.endColumn }), s2 = await this._worker(r2);
    return e4.isDisposed() ? null : { hints: (await s2.provideInlayHints(i2, a2, o2)).map((t3) => ({ ...t3, label: t3.text, position: e4.getPositionAt(t3.position), kind: this._convertHintKind(t3.kind) })), dispose: () => {
    } };
  }
  _convertHintKind(e4) {
    switch (e4) {
      case `Parameter`:
        return r.InlayHintKind.Parameter;
      case `Type`:
        return r.InlayHintKind.Type;
      default:
        return r.InlayHintKind.Type;
    }
  }
}, j, M;
function N(e4) {
  M = L(e4, `typescript`);
}
function P(e4) {
  j = L(e4, `javascript`);
}
function F() {
  return new Promise((e4, t2) => {
    if (!j) return t2(`JavaScript not registered!`);
    e4(j);
  });
}
function I() {
  return new Promise((e4, t2) => {
    if (!M) return t2(`TypeScript not registered!`);
    e4(M);
  });
}
function L(e4, t2) {
  let n2 = [], i2 = new c(t2, e4), a2 = (...e5) => i2.getLanguageServiceWorker(...e5), o2 = new p(a2);
  function s2() {
    let { modeConfiguration: i3 } = e4;
    R(n2), i3.completionItems && n2.push(r.registerCompletionItemProvider(t2, new h(a2))), i3.signatureHelp && n2.push(r.registerSignatureHelpProvider(t2, new _(a2))), i3.hovers && n2.push(r.registerHoverProvider(t2, new v(a2))), i3.documentHighlights && n2.push(r.registerDocumentHighlightProvider(t2, new y(a2))), i3.definitions && n2.push(r.registerDefinitionProvider(t2, new b(o2, a2))), i3.references && n2.push(r.registerReferenceProvider(t2, new x(o2, a2))), i3.documentSymbols && n2.push(r.registerDocumentSymbolProvider(t2, new S(a2))), i3.rename && n2.push(r.registerRenameProvider(t2, new k(o2, a2))), i3.documentRangeFormattingEdits && n2.push(r.registerDocumentRangeFormattingEditProvider(t2, new E(a2))), i3.onTypeFormattingEdits && n2.push(r.registerOnTypeFormattingEditProvider(t2, new D(a2))), i3.codeActions && n2.push(r.registerCodeActionProvider(t2, new O(a2))), i3.inlayHints && n2.push(r.registerInlayHintsProvider(t2, new A(a2))), i3.diagnostics && n2.push(new m(o2, e4, t2, a2));
  }
  return s2(), a2;
}
function R(e4) {
  for (; e4.length; ) e4.pop().dispose();
}
export {
  f as Adapter,
  O as CodeActionAdaptor,
  b as DefinitionAdapter,
  m as DiagnosticsAdapter,
  y as DocumentHighlightAdapter,
  E as FormatAdapter,
  T as FormatHelper,
  D as FormatOnTypeAdapter,
  A as InlayHintsAdapter,
  C as Kind,
  p as LibFiles,
  S as OutlineAdapter,
  v as QuickInfoAdapter,
  x as ReferenceAdapter,
  k as RenameAdapter,
  _ as SignatureHelpAdapter,
  h as SuggestAdapter,
  c as WorkerManager,
  u as flattenDiagnosticMessageText,
  F as getJavaScriptWorker,
  I as getTypeScriptWorker,
  P as setupJavaScript,
  N as setupTypeScript
};
