import { a as e, c as t, f as n, h as r, p as i } from "./toggleHighContrast-BVW2jQZl.js";
import { t as a } from "./workers-DGmhRSWB.js";
var o = 120 * 1e3, s = class {
  constructor(e2) {
    this._defaults = e2, this._worker = null, this._client = null, this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3), this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
  }
  _stopWorker() {
    this._worker && (this._worker = (this._worker.dispose(), null)), this._client = null;
  }
  dispose() {
    clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), this._stopWorker();
  }
  _checkIfIdle() {
    this._worker && Date.now() - this._lastUsedTime > o && this._stopWorker();
  }
  _getClient() {
    return this._lastUsedTime = Date.now(), this._client || (this._client = (this._worker = a({ moduleId: `vs/language/css/cssWorker`, createWorker: () => new Worker(new URL(`` + new URL(`css.worker-Wv5dxAWO.js`, import.meta.url).href, `` + import.meta.url), { type: `module` }), label: this._defaults.languageId, createData: { options: this._defaults.options, languageId: this._defaults.languageId } }), this._worker.getProxy())), this._client;
  }
  getLanguageServiceWorker(...e2) {
    let t2;
    return this._getClient().then((e3) => {
      t2 = e3;
    }).then((t3) => {
      if (this._worker) return this._worker.withSyncedResources(e2);
    }).then((e3) => t2);
  }
}, c;
(function(e2) {
  function t2(e3) {
    return typeof e3 == `string`;
  }
  e2.is = t2;
})(c || (c = {}));
var l;
(function(e2) {
  function t2(e3) {
    return typeof e3 == `string`;
  }
  e2.is = t2;
})(l || (l = {}));
var u;
(function(e2) {
  e2.MIN_VALUE = -2147483648, e2.MAX_VALUE = 2147483647;
  function t2(t3) {
    return typeof t3 == `number` && e2.MIN_VALUE <= t3 && t3 <= e2.MAX_VALUE;
  }
  e2.is = t2;
})(u || (u = {}));
var d;
(function(e2) {
  e2.MIN_VALUE = 0, e2.MAX_VALUE = 2147483647;
  function t2(t3) {
    return typeof t3 == `number` && e2.MIN_VALUE <= t3 && t3 <= e2.MAX_VALUE;
  }
  e2.is = t2;
})(d || (d = {}));
var f;
(function(e2) {
  function t2(e3, t3) {
    return e3 === Number.MAX_VALUE && (e3 = d.MAX_VALUE), t3 === Number.MAX_VALUE && (t3 = d.MAX_VALUE), { line: e3, character: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.uinteger(t3.line) && B.uinteger(t3.character);
  }
  e2.is = n2;
})(f || (f = {}));
var p;
(function(e2) {
  function t2(e3, t3, n3, r2) {
    if (B.uinteger(e3) && B.uinteger(t3) && B.uinteger(n3) && B.uinteger(r2)) return { start: f.create(e3, t3), end: f.create(n3, r2) };
    if (f.is(e3) && f.is(t3)) return { start: e3, end: t3 };
    throw Error(`Range#create called with invalid arguments[${e3}, ${t3}, ${n3}, ${r2}]`);
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && f.is(t3.start) && f.is(t3.end);
  }
  e2.is = n2;
})(p || (p = {}));
var m;
(function(e2) {
  function t2(e3, t3) {
    return { uri: e3, range: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && p.is(t3.range) && (B.string(t3.uri) || B.undefined(t3.uri));
  }
  e2.is = n2;
})(m || (m = {}));
var ee;
(function(e2) {
  function t2(e3, t3, n3, r2) {
    return { targetUri: e3, targetRange: t3, targetSelectionRange: n3, originSelectionRange: r2 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && p.is(t3.targetRange) && B.string(t3.targetUri) && p.is(t3.targetSelectionRange) && (p.is(t3.originSelectionRange) || B.undefined(t3.originSelectionRange));
  }
  e2.is = n2;
})(ee || (ee = {}));
var h;
(function(e2) {
  function t2(e3, t3, n3, r2) {
    return { red: e3, green: t3, blue: n3, alpha: r2 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.numberRange(t3.red, 0, 1) && B.numberRange(t3.green, 0, 1) && B.numberRange(t3.blue, 0, 1) && B.numberRange(t3.alpha, 0, 1);
  }
  e2.is = n2;
})(h || (h = {}));
var te;
(function(e2) {
  function t2(e3, t3) {
    return { range: e3, color: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && p.is(t3.range) && h.is(t3.color);
  }
  e2.is = n2;
})(te || (te = {}));
var ne;
(function(e2) {
  function t2(e3, t3, n3) {
    return { label: e3, textEdit: t3, additionalTextEdits: n3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.string(t3.label) && (B.undefined(t3.textEdit) || x.is(t3)) && (B.undefined(t3.additionalTextEdits) || B.typedArray(t3.additionalTextEdits, x.is));
  }
  e2.is = n2;
})(ne || (ne = {}));
var g;
(function(e2) {
  e2.Comment = `comment`, e2.Imports = `imports`, e2.Region = `region`;
})(g || (g = {}));
var re;
(function(e2) {
  function t2(e3, t3, n3, r2, i2, a2) {
    let o2 = { startLine: e3, endLine: t3 };
    return B.defined(n3) && (o2.startCharacter = n3), B.defined(r2) && (o2.endCharacter = r2), B.defined(i2) && (o2.kind = i2), B.defined(a2) && (o2.collapsedText = a2), o2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.uinteger(t3.startLine) && B.uinteger(t3.startLine) && (B.undefined(t3.startCharacter) || B.uinteger(t3.startCharacter)) && (B.undefined(t3.endCharacter) || B.uinteger(t3.endCharacter)) && (B.undefined(t3.kind) || B.string(t3.kind));
  }
  e2.is = n2;
})(re || (re = {}));
var _;
(function(e2) {
  function t2(e3, t3) {
    return { location: e3, message: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && m.is(t3.location) && B.string(t3.message);
  }
  e2.is = n2;
})(_ || (_ = {}));
var v;
(function(e2) {
  e2.Error = 1, e2.Warning = 2, e2.Information = 3, e2.Hint = 4;
})(v || (v = {}));
var ie;
(function(e2) {
  e2.Unnecessary = 1, e2.Deprecated = 2;
})(ie || (ie = {}));
var ae;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.string(t3.href);
  }
  e2.is = t2;
})(ae || (ae = {}));
var y;
(function(e2) {
  function t2(e3, t3, n3, r2, i2, a2) {
    let o2 = { range: e3, message: t3 };
    return B.defined(n3) && (o2.severity = n3), B.defined(r2) && (o2.code = r2), B.defined(i2) && (o2.source = i2), B.defined(a2) && (o2.relatedInformation = a2), o2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && p.is(t3.range) && B.string(t3.message) && (B.number(t3.severity) || B.undefined(t3.severity)) && (B.integer(t3.code) || B.string(t3.code) || B.undefined(t3.code)) && (B.undefined(t3.codeDescription) || B.string(t3.codeDescription?.href)) && (B.string(t3.source) || B.undefined(t3.source)) && (B.undefined(t3.relatedInformation) || B.typedArray(t3.relatedInformation, _.is));
  }
  e2.is = n2;
})(y || (y = {}));
var b;
(function(e2) {
  function t2(e3, t3, ...n3) {
    let r2 = { title: e3, command: t3 };
    return B.defined(n3) && n3.length > 0 && (r2.arguments = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.string(t3.title) && B.string(t3.command);
  }
  e2.is = n2;
})(b || (b = {}));
var x;
(function(e2) {
  function t2(e3, t3) {
    return { range: e3, newText: t3 };
  }
  e2.replace = t2;
  function n2(e3, t3) {
    return { range: { start: e3, end: e3 }, newText: t3 };
  }
  e2.insert = n2;
  function r2(e3) {
    return { range: e3, newText: `` };
  }
  e2.del = r2;
  function i2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.string(t3.newText) && p.is(t3.range);
  }
  e2.is = i2;
})(x || (x = {}));
var S;
(function(e2) {
  function t2(e3, t3, n3) {
    let r2 = { label: e3 };
    return t3 !== void 0 && (r2.needsConfirmation = t3), n3 !== void 0 && (r2.description = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && B.string(t3.label) && (B.boolean(t3.needsConfirmation) || t3.needsConfirmation === void 0) && (B.string(t3.description) || t3.description === void 0);
  }
  e2.is = n2;
})(S || (S = {}));
var C;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return B.string(t3);
  }
  e2.is = t2;
})(C || (C = {}));
var oe;
(function(e2) {
  function t2(e3, t3, n3) {
    return { range: e3, newText: t3, annotationId: n3 };
  }
  e2.replace = t2;
  function n2(e3, t3, n3) {
    return { range: { start: e3, end: e3 }, newText: t3, annotationId: n3 };
  }
  e2.insert = n2;
  function r2(e3, t3) {
    return { range: e3, newText: ``, annotationId: t3 };
  }
  e2.del = r2;
  function i2(e3) {
    let t3 = e3;
    return x.is(t3) && (S.is(t3.annotationId) || C.is(t3.annotationId));
  }
  e2.is = i2;
})(oe || (oe = {}));
var w;
(function(e2) {
  function t2(e3, t3) {
    return { textDocument: e3, edits: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && k.is(t3.textDocument) && Array.isArray(t3.edits);
  }
  e2.is = n2;
})(w || (w = {}));
var T;
(function(e2) {
  function t2(e3, t3, n3) {
    let r2 = { kind: `create`, uri: e3 };
    return t3 !== void 0 && (t3.overwrite !== void 0 || t3.ignoreIfExists !== void 0) && (r2.options = t3), n3 !== void 0 && (r2.annotationId = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 && t3.kind === `create` && B.string(t3.uri) && (t3.options === void 0 || (t3.options.overwrite === void 0 || B.boolean(t3.options.overwrite)) && (t3.options.ignoreIfExists === void 0 || B.boolean(t3.options.ignoreIfExists))) && (t3.annotationId === void 0 || C.is(t3.annotationId));
  }
  e2.is = n2;
})(T || (T = {}));
var E;
(function(e2) {
  function t2(e3, t3, n3, r2) {
    let i2 = { kind: `rename`, oldUri: e3, newUri: t3 };
    return n3 !== void 0 && (n3.overwrite !== void 0 || n3.ignoreIfExists !== void 0) && (i2.options = n3), r2 !== void 0 && (i2.annotationId = r2), i2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 && t3.kind === `rename` && B.string(t3.oldUri) && B.string(t3.newUri) && (t3.options === void 0 || (t3.options.overwrite === void 0 || B.boolean(t3.options.overwrite)) && (t3.options.ignoreIfExists === void 0 || B.boolean(t3.options.ignoreIfExists))) && (t3.annotationId === void 0 || C.is(t3.annotationId));
  }
  e2.is = n2;
})(E || (E = {}));
var D;
(function(e2) {
  function t2(e3, t3, n3) {
    let r2 = { kind: `delete`, uri: e3 };
    return t3 !== void 0 && (t3.recursive !== void 0 || t3.ignoreIfNotExists !== void 0) && (r2.options = t3), n3 !== void 0 && (r2.annotationId = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 && t3.kind === `delete` && B.string(t3.uri) && (t3.options === void 0 || (t3.options.recursive === void 0 || B.boolean(t3.options.recursive)) && (t3.options.ignoreIfNotExists === void 0 || B.boolean(t3.options.ignoreIfNotExists))) && (t3.annotationId === void 0 || C.is(t3.annotationId));
  }
  e2.is = n2;
})(D || (D = {}));
var O;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return t3 && (t3.changes !== void 0 || t3.documentChanges !== void 0) && (t3.documentChanges === void 0 || t3.documentChanges.every((e4) => B.string(e4.kind) ? T.is(e4) || E.is(e4) || D.is(e4) : w.is(e4)));
  }
  e2.is = t2;
})(O || (O = {}));
var se;
(function(e2) {
  function t2(e3) {
    return { uri: e3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.string(t3.uri);
  }
  e2.is = n2;
})(se || (se = {}));
var ce;
(function(e2) {
  function t2(e3, t3) {
    return { uri: e3, version: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.string(t3.uri) && B.integer(t3.version);
  }
  e2.is = n2;
})(ce || (ce = {}));
var k;
(function(e2) {
  function t2(e3, t3) {
    return { uri: e3, version: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.string(t3.uri) && (t3.version === null || B.integer(t3.version));
  }
  e2.is = n2;
})(k || (k = {}));
var le;
(function(e2) {
  function t2(e3, t3, n3, r2) {
    return { uri: e3, languageId: t3, version: n3, text: r2 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.string(t3.uri) && B.string(t3.languageId) && B.integer(t3.version) && B.string(t3.text);
  }
  e2.is = n2;
})(le || (le = {}));
var A;
(function(e2) {
  e2.PlainText = `plaintext`, e2.Markdown = `markdown`;
  function t2(t3) {
    let n2 = t3;
    return n2 === e2.PlainText || n2 === e2.Markdown;
  }
  e2.is = t2;
})(A || (A = {}));
var j;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return B.objectLiteral(e3) && A.is(t3.kind) && B.string(t3.value);
  }
  e2.is = t2;
})(j || (j = {}));
var M;
(function(e2) {
  e2.Text = 1, e2.Method = 2, e2.Function = 3, e2.Constructor = 4, e2.Field = 5, e2.Variable = 6, e2.Class = 7, e2.Interface = 8, e2.Module = 9, e2.Property = 10, e2.Unit = 11, e2.Value = 12, e2.Enum = 13, e2.Keyword = 14, e2.Snippet = 15, e2.Color = 16, e2.File = 17, e2.Reference = 18, e2.Folder = 19, e2.EnumMember = 20, e2.Constant = 21, e2.Struct = 22, e2.Event = 23, e2.Operator = 24, e2.TypeParameter = 25;
})(M || (M = {}));
var N;
(function(e2) {
  e2.PlainText = 1, e2.Snippet = 2;
})(N || (N = {}));
var ue;
(function(e2) {
  e2.Deprecated = 1;
})(ue || (ue = {}));
var de;
(function(e2) {
  function t2(e3, t3, n3) {
    return { newText: e3, insert: t3, replace: n3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 && B.string(t3.newText) && p.is(t3.insert) && p.is(t3.replace);
  }
  e2.is = n2;
})(de || (de = {}));
var fe;
(function(e2) {
  e2.asIs = 1, e2.adjustIndentation = 2;
})(fe || (fe = {}));
var pe;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return t3 && (B.string(t3.detail) || t3.detail === void 0) && (B.string(t3.description) || t3.description === void 0);
  }
  e2.is = t2;
})(pe || (pe = {}));
var me;
(function(e2) {
  function t2(e3) {
    return { label: e3 };
  }
  e2.create = t2;
})(me || (me = {}));
var he;
(function(e2) {
  function t2(e3, t3) {
    return { items: e3 || [], isIncomplete: !!t3 };
  }
  e2.create = t2;
})(he || (he = {}));
var P;
(function(e2) {
  function t2(e3) {
    return e3.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`);
  }
  e2.fromPlainText = t2;
  function n2(e3) {
    let t3 = e3;
    return B.string(t3) || B.objectLiteral(t3) && B.string(t3.language) && B.string(t3.value);
  }
  e2.is = n2;
})(P || (P = {}));
var ge;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return !!t3 && B.objectLiteral(t3) && (j.is(t3.contents) || P.is(t3.contents) || B.typedArray(t3.contents, P.is)) && (e3.range === void 0 || p.is(e3.range));
  }
  e2.is = t2;
})(ge || (ge = {}));
var _e;
(function(e2) {
  function t2(e3, t3) {
    return t3 ? { label: e3, documentation: t3 } : { label: e3 };
  }
  e2.create = t2;
})(_e || (_e = {}));
var ve;
(function(e2) {
  function t2(e3, t3, ...n2) {
    let r2 = { label: e3 };
    return B.defined(t3) && (r2.documentation = t3), B.defined(n2) ? r2.parameters = n2 : r2.parameters = [], r2;
  }
  e2.create = t2;
})(ve || (ve = {}));
var F;
(function(e2) {
  e2.Text = 1, e2.Read = 2, e2.Write = 3;
})(F || (F = {}));
var ye;
(function(e2) {
  function t2(e3, t3) {
    let n2 = { range: e3 };
    return B.number(t3) && (n2.kind = t3), n2;
  }
  e2.create = t2;
})(ye || (ye = {}));
var I;
(function(e2) {
  e2.File = 1, e2.Module = 2, e2.Namespace = 3, e2.Package = 4, e2.Class = 5, e2.Method = 6, e2.Property = 7, e2.Field = 8, e2.Constructor = 9, e2.Enum = 10, e2.Interface = 11, e2.Function = 12, e2.Variable = 13, e2.Constant = 14, e2.String = 15, e2.Number = 16, e2.Boolean = 17, e2.Array = 18, e2.Object = 19, e2.Key = 20, e2.Null = 21, e2.EnumMember = 22, e2.Struct = 23, e2.Event = 24, e2.Operator = 25, e2.TypeParameter = 26;
})(I || (I = {}));
var be;
(function(e2) {
  e2.Deprecated = 1;
})(be || (be = {}));
var xe;
(function(e2) {
  function t2(e3, t3, n2, r2, i2) {
    let a2 = { name: e3, kind: t3, location: { uri: r2, range: n2 } };
    return i2 && (a2.containerName = i2), a2;
  }
  e2.create = t2;
})(xe || (xe = {}));
var Se;
(function(e2) {
  function t2(e3, t3, n2, r2) {
    return r2 === void 0 ? { name: e3, kind: t3, location: { uri: n2 } } : { name: e3, kind: t3, location: { uri: n2, range: r2 } };
  }
  e2.create = t2;
})(Se || (Se = {}));
var Ce;
(function(e2) {
  function t2(e3, t3, n3, r2, i2, a2) {
    let o2 = { name: e3, detail: t3, kind: n3, range: r2, selectionRange: i2 };
    return a2 !== void 0 && (o2.children = a2), o2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 && B.string(t3.name) && B.number(t3.kind) && p.is(t3.range) && p.is(t3.selectionRange) && (t3.detail === void 0 || B.string(t3.detail)) && (t3.deprecated === void 0 || B.boolean(t3.deprecated)) && (t3.children === void 0 || Array.isArray(t3.children)) && (t3.tags === void 0 || Array.isArray(t3.tags));
  }
  e2.is = n2;
})(Ce || (Ce = {}));
var we;
(function(e2) {
  e2.Empty = ``, e2.QuickFix = `quickfix`, e2.Refactor = `refactor`, e2.RefactorExtract = `refactor.extract`, e2.RefactorInline = `refactor.inline`, e2.RefactorRewrite = `refactor.rewrite`, e2.Source = `source`, e2.SourceOrganizeImports = `source.organizeImports`, e2.SourceFixAll = `source.fixAll`;
})(we || (we = {}));
var L;
(function(e2) {
  e2.Invoked = 1, e2.Automatic = 2;
})(L || (L = {}));
var Te;
(function(e2) {
  function t2(e3, t3, n3) {
    let r2 = { diagnostics: e3 };
    return t3 != null && (r2.only = t3), n3 != null && (r2.triggerKind = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.typedArray(t3.diagnostics, y.is) && (t3.only === void 0 || B.typedArray(t3.only, B.string)) && (t3.triggerKind === void 0 || t3.triggerKind === L.Invoked || t3.triggerKind === L.Automatic);
  }
  e2.is = n2;
})(Te || (Te = {}));
var Ee;
(function(e2) {
  function t2(e3, t3, n3) {
    let r2 = { title: e3 }, i2 = true;
    return typeof t3 == `string` ? (i2 = false, r2.kind = t3) : b.is(t3) ? r2.command = t3 : r2.edit = t3, i2 && n3 !== void 0 && (r2.kind = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 && B.string(t3.title) && (t3.diagnostics === void 0 || B.typedArray(t3.diagnostics, y.is)) && (t3.kind === void 0 || B.string(t3.kind)) && (t3.edit !== void 0 || t3.command !== void 0) && (t3.command === void 0 || b.is(t3.command)) && (t3.isPreferred === void 0 || B.boolean(t3.isPreferred)) && (t3.edit === void 0 || O.is(t3.edit));
  }
  e2.is = n2;
})(Ee || (Ee = {}));
var De;
(function(e2) {
  function t2(e3, t3) {
    let n3 = { range: e3 };
    return B.defined(t3) && (n3.data = t3), n3;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && p.is(t3.range) && (B.undefined(t3.command) || b.is(t3.command));
  }
  e2.is = n2;
})(De || (De = {}));
var Oe;
(function(e2) {
  function t2(e3, t3) {
    return { tabSize: e3, insertSpaces: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && B.uinteger(t3.tabSize) && B.boolean(t3.insertSpaces);
  }
  e2.is = n2;
})(Oe || (Oe = {}));
var ke;
(function(e2) {
  function t2(e3, t3, n3) {
    return { range: e3, target: t3, data: n3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && p.is(t3.range) && (B.undefined(t3.target) || B.string(t3.target));
  }
  e2.is = n2;
})(ke || (ke = {}));
var Ae;
(function(e2) {
  function t2(e3, t3) {
    return { range: e3, parent: t3 };
  }
  e2.create = t2;
  function n2(t3) {
    let n3 = t3;
    return B.objectLiteral(n3) && p.is(n3.range) && (n3.parent === void 0 || e2.is(n3.parent));
  }
  e2.is = n2;
})(Ae || (Ae = {}));
var je;
(function(e2) {
  e2.namespace = `namespace`, e2.type = `type`, e2.class = `class`, e2.enum = `enum`, e2.interface = `interface`, e2.struct = `struct`, e2.typeParameter = `typeParameter`, e2.parameter = `parameter`, e2.variable = `variable`, e2.property = `property`, e2.enumMember = `enumMember`, e2.event = `event`, e2.function = `function`, e2.method = `method`, e2.macro = `macro`, e2.keyword = `keyword`, e2.modifier = `modifier`, e2.comment = `comment`, e2.string = `string`, e2.number = `number`, e2.regexp = `regexp`, e2.operator = `operator`, e2.decorator = `decorator`;
})(je || (je = {}));
var Me;
(function(e2) {
  e2.declaration = `declaration`, e2.definition = `definition`, e2.readonly = `readonly`, e2.static = `static`, e2.deprecated = `deprecated`, e2.abstract = `abstract`, e2.async = `async`, e2.modification = `modification`, e2.documentation = `documentation`, e2.defaultLibrary = `defaultLibrary`;
})(Me || (Me = {}));
var Ne;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && (t3.resultId === void 0 || typeof t3.resultId == `string`) && Array.isArray(t3.data) && (t3.data.length === 0 || typeof t3.data[0] == `number`);
  }
  e2.is = t2;
})(Ne || (Ne = {}));
var Pe;
(function(e2) {
  function t2(e3, t3) {
    return { range: e3, text: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 != null && p.is(t3.range) && B.string(t3.text);
  }
  e2.is = n2;
})(Pe || (Pe = {}));
var Fe;
(function(e2) {
  function t2(e3, t3, n3) {
    return { range: e3, variableName: t3, caseSensitiveLookup: n3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 != null && p.is(t3.range) && B.boolean(t3.caseSensitiveLookup) && (B.string(t3.variableName) || t3.variableName === void 0);
  }
  e2.is = n2;
})(Fe || (Fe = {}));
var Ie;
(function(e2) {
  function t2(e3, t3) {
    return { range: e3, expression: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return t3 != null && p.is(t3.range) && (B.string(t3.expression) || t3.expression === void 0);
  }
  e2.is = n2;
})(Ie || (Ie = {}));
var Le;
(function(e2) {
  function t2(e3, t3) {
    return { frameId: e3, stoppedLocation: t3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.defined(t3) && p.is(e3.stoppedLocation);
  }
  e2.is = n2;
})(Le || (Le = {}));
var R;
(function(e2) {
  e2.Type = 1, e2.Parameter = 2;
  function t2(e3) {
    return e3 === 1 || e3 === 2;
  }
  e2.is = t2;
})(R || (R = {}));
var z;
(function(e2) {
  function t2(e3) {
    return { value: e3 };
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && (t3.tooltip === void 0 || B.string(t3.tooltip) || j.is(t3.tooltip)) && (t3.location === void 0 || m.is(t3.location)) && (t3.command === void 0 || b.is(t3.command));
  }
  e2.is = n2;
})(z || (z = {}));
var Re;
(function(e2) {
  function t2(e3, t3, n3) {
    let r2 = { position: e3, label: t3 };
    return n3 !== void 0 && (r2.kind = n3), r2;
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && f.is(t3.position) && (B.string(t3.label) || B.typedArray(t3.label, z.is)) && (t3.kind === void 0 || R.is(t3.kind)) && t3.textEdits === void 0 || B.typedArray(t3.textEdits, x.is) && (t3.tooltip === void 0 || B.string(t3.tooltip) || j.is(t3.tooltip)) && (t3.paddingLeft === void 0 || B.boolean(t3.paddingLeft)) && (t3.paddingRight === void 0 || B.boolean(t3.paddingRight));
  }
  e2.is = n2;
})(Re || (Re = {}));
var ze;
(function(e2) {
  function t2(e3) {
    return { kind: `snippet`, value: e3 };
  }
  e2.createSnippet = t2;
})(ze || (ze = {}));
var Be;
(function(e2) {
  function t2(e3, t3, n2, r2) {
    return { insertText: e3, filterText: t3, range: n2, command: r2 };
  }
  e2.create = t2;
})(Be || (Be = {}));
var Ve;
(function(e2) {
  function t2(e3) {
    return { items: e3 };
  }
  e2.create = t2;
})(Ve || (Ve = {}));
var He;
(function(e2) {
  e2.Invoked = 0, e2.Automatic = 1;
})(He || (He = {}));
var Ue;
(function(e2) {
  function t2(e3, t3) {
    return { range: e3, text: t3 };
  }
  e2.create = t2;
})(Ue || (Ue = {}));
var We;
(function(e2) {
  function t2(e3, t3) {
    return { triggerKind: e3, selectedCompletionInfo: t3 };
  }
  e2.create = t2;
})(We || (We = {}));
var Ge;
(function(e2) {
  function t2(e3) {
    let t3 = e3;
    return B.objectLiteral(t3) && l.is(t3.uri) && B.string(t3.name);
  }
  e2.is = t2;
})(Ge || (Ge = {}));
var Ke;
(function(e2) {
  function t2(e3, t3, n3, r3) {
    return new qe(e3, t3, n3, r3);
  }
  e2.create = t2;
  function n2(e3) {
    let t3 = e3;
    return !!(B.defined(t3) && B.string(t3.uri) && (B.undefined(t3.languageId) || B.string(t3.languageId)) && B.uinteger(t3.lineCount) && B.func(t3.getText) && B.func(t3.positionAt) && B.func(t3.offsetAt));
  }
  e2.is = n2;
  function r2(e3, t3) {
    let n3 = e3.getText(), r3 = i2(t3, (e4, t4) => {
      let n4 = e4.range.start.line - t4.range.start.line;
      return n4 === 0 ? e4.range.start.character - t4.range.start.character : n4;
    }), a2 = n3.length;
    for (let t4 = r3.length - 1; t4 >= 0; t4--) {
      let i3 = r3[t4], o2 = e3.offsetAt(i3.range.start), s2 = e3.offsetAt(i3.range.end);
      if (s2 <= a2) n3 = n3.substring(0, o2) + i3.newText + n3.substring(s2, n3.length);
      else throw Error(`Overlapping edit`);
      a2 = o2;
    }
    return n3;
  }
  e2.applyEdits = r2;
  function i2(e3, t3) {
    if (e3.length <= 1) return e3;
    let n3 = e3.length / 2 | 0, r3 = e3.slice(0, n3), a2 = e3.slice(n3);
    i2(r3, t3), i2(a2, t3);
    let o2 = 0, s2 = 0, c2 = 0;
    for (; o2 < r3.length && s2 < a2.length; ) t3(r3[o2], a2[s2]) <= 0 ? e3[c2++] = r3[o2++] : e3[c2++] = a2[s2++];
    for (; o2 < r3.length; ) e3[c2++] = r3[o2++];
    for (; s2 < a2.length; ) e3[c2++] = a2[s2++];
    return e3;
  }
})(Ke || (Ke = {}));
var qe = class {
  constructor(e2, t2, n2, r2) {
    this._uri = e2, this._languageId = t2, this._version = n2, this._content = r2, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e2) {
    if (e2) {
      let t2 = this.offsetAt(e2.start), n2 = this.offsetAt(e2.end);
      return this._content.substring(t2, n2);
    }
    return this._content;
  }
  update(e2, t2) {
    this._content = e2.text, this._version = t2, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e2 = [], t2 = this._content, n2 = true;
      for (let r2 = 0; r2 < t2.length; r2++) {
        n2 && (n2 = (e2.push(r2), false));
        let i2 = t2.charAt(r2);
        n2 = i2 === `\r` || i2 === `
`, i2 === `\r` && r2 + 1 < t2.length && t2.charAt(r2 + 1) === `
` && r2++;
      }
      n2 && t2.length > 0 && e2.push(t2.length), this._lineOffsets = e2;
    }
    return this._lineOffsets;
  }
  positionAt(e2) {
    e2 = Math.max(Math.min(e2, this._content.length), 0);
    let t2 = this.getLineOffsets(), n2 = 0, r2 = t2.length;
    if (r2 === 0) return f.create(0, e2);
    for (; n2 < r2; ) {
      let i3 = Math.floor((n2 + r2) / 2);
      t2[i3] > e2 ? r2 = i3 : n2 = i3 + 1;
    }
    let i2 = n2 - 1;
    return f.create(i2, e2 - t2[i2]);
  }
  offsetAt(e2) {
    let t2 = this.getLineOffsets();
    if (e2.line >= t2.length) return this._content.length;
    if (e2.line < 0) return 0;
    let n2 = t2[e2.line], r2 = e2.line + 1 < t2.length ? t2[e2.line + 1] : this._content.length;
    return Math.max(Math.min(n2 + e2.character, r2), n2);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
}, B;
(function(e2) {
  let t2 = Object.prototype.toString;
  function n2(e3) {
    return e3 !== void 0;
  }
  e2.defined = n2;
  function r2(e3) {
    return e3 === void 0;
  }
  e2.undefined = r2;
  function i2(e3) {
    return e3 === true || e3 === false;
  }
  e2.boolean = i2;
  function a2(e3) {
    return t2.call(e3) === `[object String]`;
  }
  e2.string = a2;
  function o2(e3) {
    return t2.call(e3) === `[object Number]`;
  }
  e2.number = o2;
  function s2(e3, n3, r3) {
    return t2.call(e3) === `[object Number]` && n3 <= e3 && e3 <= r3;
  }
  e2.numberRange = s2;
  function c2(e3) {
    return t2.call(e3) === `[object Number]` && -2147483648 <= e3 && e3 <= 2147483647;
  }
  e2.integer = c2;
  function l2(e3) {
    return t2.call(e3) === `[object Number]` && 0 <= e3 && e3 <= 2147483647;
  }
  e2.uinteger = l2;
  function u2(e3) {
    return t2.call(e3) === `[object Function]`;
  }
  e2.func = u2;
  function d2(e3) {
    return typeof e3 == `object` && !!e3;
  }
  e2.objectLiteral = d2;
  function f2(e3, t3) {
    return Array.isArray(e3) && e3.every(t3);
  }
  e2.typedArray = f2;
})(B || (B = {}));
var V = class {
  constructor(e2, t2, n2) {
    this._languageId = e2, this._worker = t2, this._disposables = [], this._listener = /* @__PURE__ */ Object.create(null);
    let r2 = (e3) => {
      let t3 = e3.getLanguageId();
      if (t3 !== this._languageId) return;
      let n3;
      this._listener[e3.uri.toString()] = e3.onDidChangeContent(() => {
        window.clearTimeout(n3), n3 = window.setTimeout(() => this._doValidate(e3.uri, t3), 500);
      }), this._doValidate(e3.uri, t3);
    }, a2 = (e3) => {
      i.setModelMarkers(e3, this._languageId, []);
      let t3 = e3.uri.toString(), n3 = this._listener[t3];
      n3 && (n3.dispose(), delete this._listener[t3]);
    };
    this._disposables.push(i.onDidCreateModel(r2)), this._disposables.push(i.onWillDisposeModel(a2)), this._disposables.push(i.onDidChangeModelLanguage((e3) => {
      a2(e3.model), r2(e3.model);
    })), this._disposables.push(n2((e3) => {
      i.getModels().forEach((e4) => {
        e4.getLanguageId() === this._languageId && (a2(e4), r2(e4));
      });
    })), this._disposables.push({ dispose: () => {
      i.getModels().forEach(a2);
      for (let e3 in this._listener) this._listener[e3].dispose();
    } }), i.getModels().forEach(r2);
  }
  dispose() {
    this._disposables.forEach((e2) => e2 && e2.dispose()), this._disposables.length = 0;
  }
  _doValidate(e2, t2) {
    this._worker(e2).then((t3) => t3.doValidation(e2.toString())).then((n2) => {
      let r2 = n2.map((t3) => Ye(e2, t3)), a2 = i.getModel(e2);
      a2 && a2.getLanguageId() === t2 && i.setModelMarkers(a2, t2, r2);
    }).then(void 0, (e3) => {
      console.error(e3);
    });
  }
};
function Je(t2) {
  switch (t2) {
    case v.Error:
      return e.Error;
    case v.Warning:
      return e.Warning;
    case v.Information:
      return e.Info;
    case v.Hint:
      return e.Hint;
    default:
      return e.Info;
  }
}
function Ye(e2, t2) {
  let n2 = typeof t2.code == `number` ? String(t2.code) : t2.code;
  return { severity: Je(t2.severity), startLineNumber: t2.range.start.line + 1, startColumn: t2.range.start.character + 1, endLineNumber: t2.range.end.line + 1, endColumn: t2.range.end.character + 1, message: t2.message, code: n2, source: t2.source };
}
var H = class {
  constructor(e2, t2) {
    this._worker = e2, this._triggerCharacters = t2;
  }
  get triggerCharacters() {
    return this._triggerCharacters;
  }
  provideCompletionItems(e2, n2, i2, a2) {
    let o2 = e2.uri;
    return this._worker(o2).then((e3) => e3.doComplete(o2.toString(), U(n2))).then((i3) => {
      if (!i3) return;
      let a3 = e2.getWordUntilPosition(n2), o3 = new t(n2.lineNumber, a3.startColumn, n2.lineNumber, a3.endColumn), s2 = i3.items.map((e3) => {
        let t2 = { label: e3.label, insertText: e3.insertText || e3.label, sortText: e3.sortText, filterText: e3.filterText, documentation: e3.documentation, detail: e3.detail, command: Qe(e3.command), range: o3, kind: Ze(e3.kind) };
        return e3.textEdit && (Xe(e3.textEdit) ? t2.range = { insert: G(e3.textEdit.insert), replace: G(e3.textEdit.replace) } : t2.range = G(e3.textEdit.range), t2.insertText = e3.textEdit.newText), e3.additionalTextEdits && (t2.additionalTextEdits = e3.additionalTextEdits.map(K)), e3.insertTextFormat === N.Snippet && (t2.insertTextRules = r.CompletionItemInsertTextRule.InsertAsSnippet), t2;
      });
      return { isIncomplete: i3.isIncomplete, suggestions: s2 };
    });
  }
};
function U(e2) {
  if (e2) return { character: e2.column - 1, line: e2.lineNumber - 1 };
}
function W(e2) {
  if (e2) return { start: { line: e2.startLineNumber - 1, character: e2.startColumn - 1 }, end: { line: e2.endLineNumber - 1, character: e2.endColumn - 1 } };
}
function G(e2) {
  if (e2) return new t(e2.start.line + 1, e2.start.character + 1, e2.end.line + 1, e2.end.character + 1);
}
function Xe(e2) {
  return e2.insert !== void 0 && e2.replace !== void 0;
}
function Ze(e2) {
  let t2 = r.CompletionItemKind;
  switch (e2) {
    case M.Text:
      return t2.Text;
    case M.Method:
      return t2.Method;
    case M.Function:
      return t2.Function;
    case M.Constructor:
      return t2.Constructor;
    case M.Field:
      return t2.Field;
    case M.Variable:
      return t2.Variable;
    case M.Class:
      return t2.Class;
    case M.Interface:
      return t2.Interface;
    case M.Module:
      return t2.Module;
    case M.Property:
      return t2.Property;
    case M.Unit:
      return t2.Unit;
    case M.Value:
      return t2.Value;
    case M.Enum:
      return t2.Enum;
    case M.Keyword:
      return t2.Keyword;
    case M.Snippet:
      return t2.Snippet;
    case M.Color:
      return t2.Color;
    case M.File:
      return t2.File;
    case M.Reference:
      return t2.Reference;
  }
  return t2.Property;
}
function K(e2) {
  if (e2) return { range: G(e2.range), text: e2.newText };
}
function Qe(e2) {
  return e2 && e2.command === `editor.action.triggerSuggest` ? { id: e2.command, title: e2.title, arguments: e2.arguments } : void 0;
}
var q = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideHover(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.doHover(r2.toString(), U(t2))).then((e3) => {
      if (e3) return { range: G(e3.range), contents: et(e3.contents) };
    });
  }
};
function $e(e2) {
  return e2 && typeof e2 == `object` && typeof e2.kind == `string`;
}
function J(e2) {
  return typeof e2 == `string` ? { value: e2 } : $e(e2) ? e2.kind === `plaintext` ? { value: e2.value.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`) } : { value: e2.value } : { value: "```" + e2.language + `
` + e2.value + "\n```\n" };
}
function et(e2) {
  if (e2) return Array.isArray(e2) ? e2.map(J) : [J(e2)];
}
var tt = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideDocumentHighlights(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.findDocumentHighlights(r2.toString(), U(t2))).then((e3) => {
      if (e3) return e3.map((e4) => ({ range: G(e4.range), kind: nt(e4.kind) }));
    });
  }
};
function nt(e2) {
  switch (e2) {
    case F.Read:
      return r.DocumentHighlightKind.Read;
    case F.Write:
      return r.DocumentHighlightKind.Write;
    case F.Text:
      return r.DocumentHighlightKind.Text;
  }
  return r.DocumentHighlightKind.Text;
}
var Y = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideDefinition(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.findDefinition(r2.toString(), U(t2))).then((e3) => {
      if (e3) return [X(e3)];
    });
  }
};
function X(e2) {
  return { uri: n.parse(e2.uri), range: G(e2.range) };
}
var Z = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideReferences(e2, t2, n2, r2) {
    let i2 = e2.uri;
    return this._worker(i2).then((e3) => e3.findReferences(i2.toString(), U(t2))).then((e3) => {
      if (e3) return e3.map(X);
    });
  }
}, Q = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideRenameEdits(e2, t2, n2, r2) {
    let i2 = e2.uri;
    return this._worker(i2).then((e3) => e3.doRename(i2.toString(), U(t2), n2)).then((e3) => rt(e3));
  }
};
function rt(e2) {
  if (!e2 || !e2.changes) return;
  let t2 = [];
  for (let r2 in e2.changes) {
    let i2 = n.parse(r2);
    for (let n2 of e2.changes[r2]) t2.push({ resource: i2, versionId: void 0, textEdit: { range: G(n2.range), text: n2.newText } });
  }
  return { edits: t2 };
}
var $ = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideDocumentSymbols(e2, t2) {
    let n2 = e2.uri;
    return this._worker(n2).then((e3) => e3.findDocumentSymbols(n2.toString())).then((e3) => {
      if (e3) return e3.map((e4) => it(e4) ? at(e4) : { name: e4.name, detail: ``, containerName: e4.containerName, kind: ot(e4.kind), range: G(e4.location.range), selectionRange: G(e4.location.range), tags: [] });
    });
  }
};
function it(e2) {
  return `children` in e2;
}
function at(e2) {
  return { name: e2.name, detail: e2.detail ?? ``, kind: ot(e2.kind), range: G(e2.range), selectionRange: G(e2.selectionRange), tags: e2.tags ?? [], children: (e2.children ?? []).map((e3) => at(e3)) };
}
function ot(e2) {
  let t2 = r.SymbolKind;
  switch (e2) {
    case I.File:
      return t2.File;
    case I.Module:
      return t2.Module;
    case I.Namespace:
      return t2.Namespace;
    case I.Package:
      return t2.Package;
    case I.Class:
      return t2.Class;
    case I.Method:
      return t2.Method;
    case I.Property:
      return t2.Property;
    case I.Field:
      return t2.Field;
    case I.Constructor:
      return t2.Constructor;
    case I.Enum:
      return t2.Enum;
    case I.Interface:
      return t2.Interface;
    case I.Function:
      return t2.Function;
    case I.Variable:
      return t2.Variable;
    case I.Constant:
      return t2.Constant;
    case I.String:
      return t2.String;
    case I.Number:
      return t2.Number;
    case I.Boolean:
      return t2.Boolean;
    case I.Array:
      return t2.Array;
  }
  return t2.Function;
}
var st = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideLinks(e2, t2) {
    let n2 = e2.uri;
    return this._worker(n2).then((e3) => e3.findDocumentLinks(n2.toString())).then((e3) => {
      if (e3) return { links: e3.map((e4) => ({ range: G(e4.range), url: e4.target })) };
    });
  }
}, ct = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideDocumentFormattingEdits(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.format(r2.toString(), null, ut(t2)).then((e4) => {
      if (!(!e4 || e4.length === 0)) return e4.map(K);
    }));
  }
}, lt = class {
  constructor(e2) {
    this._worker = e2, this.canFormatMultipleRanges = false;
  }
  provideDocumentRangeFormattingEdits(e2, t2, n2, r2) {
    let i2 = e2.uri;
    return this._worker(i2).then((e3) => e3.format(i2.toString(), W(t2), ut(n2)).then((e4) => {
      if (!(!e4 || e4.length === 0)) return e4.map(K);
    }));
  }
};
function ut(e2) {
  return { tabSize: e2.tabSize, insertSpaces: e2.insertSpaces };
}
var dt = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideDocumentColors(e2, t2) {
    let n2 = e2.uri;
    return this._worker(n2).then((e3) => e3.findDocumentColors(n2.toString())).then((e3) => {
      if (e3) return e3.map((e4) => ({ color: e4.color, range: G(e4.range) }));
    });
  }
  provideColorPresentations(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.getColorPresentations(r2.toString(), t2.color, W(t2.range))).then((e3) => {
      if (e3) return e3.map((e4) => {
        let t3 = { label: e4.label };
        return e4.textEdit && (t3.textEdit = K(e4.textEdit)), e4.additionalTextEdits && (t3.additionalTextEdits = e4.additionalTextEdits.map(K)), t3;
      });
    });
  }
}, ft = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideFoldingRanges(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.getFoldingRanges(r2.toString(), t2)).then((e3) => {
      if (e3) return e3.map((e4) => {
        let t3 = { start: e4.startLine + 1, end: e4.endLine + 1 };
        return e4.kind !== void 0 && (t3.kind = pt(e4.kind)), t3;
      });
    });
  }
};
function pt(e2) {
  switch (e2) {
    case g.Comment:
      return r.FoldingRangeKind.Comment;
    case g.Imports:
      return r.FoldingRangeKind.Imports;
    case g.Region:
      return r.FoldingRangeKind.Region;
  }
}
var mt = class {
  constructor(e2) {
    this._worker = e2;
  }
  provideSelectionRanges(e2, t2, n2) {
    let r2 = e2.uri;
    return this._worker(r2).then((e3) => e3.getSelectionRanges(r2.toString(), t2.map(U))).then((e3) => {
      if (e3) return e3.map((e4) => {
        let t3 = [];
        for (; e4; ) t3.push({ range: G(e4.range) }), e4 = e4.parent;
        return t3;
      });
    });
  }
};
function ht(e2) {
  let t2 = [], n2 = [], i2 = new s(e2);
  t2.push(i2);
  let a2 = (...e3) => i2.getLanguageServiceWorker(...e3);
  function o2() {
    let { languageId: t3, modeConfiguration: i3 } = e2;
    _t(n2), i3.completionItems && n2.push(r.registerCompletionItemProvider(t3, new H(a2, [`/`, `-`, `:`]))), i3.hovers && n2.push(r.registerHoverProvider(t3, new q(a2))), i3.documentHighlights && n2.push(r.registerDocumentHighlightProvider(t3, new tt(a2))), i3.definitions && n2.push(r.registerDefinitionProvider(t3, new Y(a2))), i3.references && n2.push(r.registerReferenceProvider(t3, new Z(a2))), i3.documentSymbols && n2.push(r.registerDocumentSymbolProvider(t3, new $(a2))), i3.rename && n2.push(r.registerRenameProvider(t3, new Q(a2))), i3.colors && n2.push(r.registerColorProvider(t3, new dt(a2))), i3.foldingRanges && n2.push(r.registerFoldingRangeProvider(t3, new ft(a2))), i3.diagnostics && n2.push(new V(t3, a2, e2.onDidChange)), i3.selectionRanges && n2.push(r.registerSelectionRangeProvider(t3, new mt(a2))), i3.documentFormattingEdits && n2.push(r.registerDocumentFormattingEditProvider(t3, new ct(a2))), i3.documentRangeFormattingEdits && n2.push(r.registerDocumentRangeFormattingEditProvider(t3, new lt(a2)));
  }
  return o2(), t2.push(gt(n2)), gt(t2);
}
function gt(e2) {
  return { dispose: () => _t(e2) };
}
function _t(e2) {
  for (; e2.length; ) e2.pop().dispose();
}
export {
  H as CompletionAdapter,
  Y as DefinitionAdapter,
  V as DiagnosticsAdapter,
  dt as DocumentColorAdapter,
  ct as DocumentFormattingEditProvider,
  tt as DocumentHighlightAdapter,
  st as DocumentLinkAdapter,
  lt as DocumentRangeFormattingEditProvider,
  $ as DocumentSymbolAdapter,
  ft as FoldingRangeAdapter,
  q as HoverAdapter,
  Z as ReferenceAdapter,
  Q as RenameAdapter,
  mt as SelectionRangeAdapter,
  s as WorkerManager,
  U as fromPosition,
  W as fromRange,
  ht as setupMode,
  G as toRange,
  K as toTextEdit
};
