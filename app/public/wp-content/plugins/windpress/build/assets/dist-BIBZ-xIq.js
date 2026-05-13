var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { r as e } from "./chunk-DcEfI0Mx.js";
import { n as t, t as n } from "./dist-CansbW7y.js";
import { n as r, t as i } from "./dist-UMash2f5.js";
var a = class extends Error {
  constructor(e12) {
    super(e12), this.name = `ShikiError`;
  }
};
i();
function o(e12) {
  return s(e12);
}
function s(e12) {
  return Array.isArray(e12) ? c(e12) : e12 instanceof RegExp ? e12 : typeof e12 == `object` ? l(e12) : e12;
}
function c(e12) {
  let t2 = [];
  for (let n2 = 0, r2 = e12.length; n2 < r2; n2++) t2[n2] = s(e12[n2]);
  return t2;
}
function l(e12) {
  let t2 = {};
  for (let n2 in e12) t2[n2] = s(e12[n2]);
  return t2;
}
function u(e12, ...t2) {
  return t2.forEach((t3) => {
    for (let n2 in t3) e12[n2] = t3[n2];
  }), e12;
}
function d(e12) {
  let t2 = ~e12.lastIndexOf(`/`) || ~e12.lastIndexOf(`\\`);
  return t2 === 0 ? e12 : ~t2 === e12.length - 1 ? d(e12.substring(0, e12.length - 1)) : e12.substr(~t2 + 1);
}
var f = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, p = class {
  static hasCaptures(e12) {
    return e12 === null ? false : (f.lastIndex = 0, f.test(e12));
  }
  static replaceCaptures(e12, t2, n2) {
    return e12.replace(f, (e13, r2, i2, a2) => {
      let o2 = n2[parseInt(r2 || i2, 10)];
      if (o2) {
        let e14 = t2.substring(o2.start, o2.end);
        for (; e14[0] === `.`; ) e14 = e14.substring(1);
        switch (a2) {
          case `downcase`:
            return e14.toLowerCase();
          case `upcase`:
            return e14.toUpperCase();
          default:
            return e14;
        }
      } else return e13;
    });
  }
};
function m(e12, t2) {
  return e12 < t2 ? -1 : +(e12 > t2);
}
function h(e12, t2) {
  if (e12 === null && t2 === null) return 0;
  if (!e12) return -1;
  if (!t2) return 1;
  let n2 = e12.length, r2 = t2.length;
  if (n2 === r2) {
    for (let r3 = 0; r3 < n2; r3++) {
      let n3 = m(e12[r3], t2[r3]);
      if (n3 !== 0) return n3;
    }
    return 0;
  }
  return n2 - r2;
}
function g(e12) {
  return !!(/^#[0-9a-f]{6}$/i.test(e12) || /^#[0-9a-f]{8}$/i.test(e12) || /^#[0-9a-f]{3}$/i.test(e12) || /^#[0-9a-f]{4}$/i.test(e12));
}
function _(e12) {
  return e12.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, `\\$&`);
}
var v = class {
  constructor(e12) {
    __publicField(this, "cache", /* @__PURE__ */ new Map());
    this.fn = e12;
  }
  get(e12) {
    if (this.cache.has(e12)) return this.cache.get(e12);
    let t2 = this.fn(e12);
    return this.cache.set(e12, t2), t2;
  }
}, ee = class {
  constructor(e12, t2, n2) {
    __publicField(this, "_cachedMatchRoot", new v((e12) => this._root.match(e12)));
    this._colorMap = e12, this._defaults = t2, this._root = n2;
  }
  static createFromRawTheme(e12, t2) {
    return this.createFromParsedTheme(ae(e12), t2);
  }
  static createFromParsedTheme(e12, t2) {
    return se(e12, t2);
  }
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(e12) {
    if (e12 === null) return this._defaults;
    let t2 = e12.scopeName, n2 = this._cachedMatchRoot.get(t2).find((t3) => ne(e12.parent, t3.parentScopes));
    return n2 ? new ie(n2.fontStyle, n2.foreground, n2.background) : null;
  }
}, te = class e2 {
  constructor(e12, t2) {
    this.parent = e12, this.scopeName = t2;
  }
  static push(t2, n2) {
    for (let r2 of n2) t2 = new e2(t2, r2);
    return t2;
  }
  static from(...t2) {
    let n2 = null;
    for (let r2 = 0; r2 < t2.length; r2++) n2 = new e2(n2, t2[r2]);
    return n2;
  }
  push(t2) {
    return new e2(this, t2);
  }
  getSegments() {
    let e12 = this, t2 = [];
    for (; e12; ) t2.push(e12.scopeName), e12 = e12.parent;
    return t2.reverse(), t2;
  }
  toString() {
    return this.getSegments().join(` `);
  }
  extends(e12) {
    return this === e12 ? true : this.parent === null ? false : this.parent.extends(e12);
  }
  getExtensionIfDefined(e12) {
    let t2 = [], n2 = this;
    for (; n2 && n2 !== e12; ) t2.push(n2.scopeName), n2 = n2.parent;
    return n2 === e12 ? t2.reverse() : void 0;
  }
};
function ne(e12, t2) {
  if (t2.length === 0) return true;
  for (let n2 = 0; n2 < t2.length; n2++) {
    let r2 = t2[n2], i2 = false;
    if (r2 === `>`) {
      if (n2 === t2.length - 1) return false;
      r2 = t2[++n2], i2 = true;
    }
    for (; e12 && !re(e12.scopeName, r2); ) {
      if (i2) return false;
      e12 = e12.parent;
    }
    if (!e12) return false;
    e12 = e12.parent;
  }
  return true;
}
function re(e12, t2) {
  return t2 === e12 || e12.startsWith(t2) && e12[t2.length] === `.`;
}
var ie = class {
  constructor(e12, t2, n2) {
    this.fontStyle = e12, this.foregroundId = t2, this.backgroundId = n2;
  }
};
function ae(e12) {
  if (!e12 || !e12.settings || !Array.isArray(e12.settings)) return [];
  let t2 = e12.settings, n2 = [], r2 = 0;
  for (let e13 = 0, i2 = t2.length; e13 < i2; e13++) {
    let i3 = t2[e13];
    if (!i3.settings) continue;
    let a2;
    if (typeof i3.scope == `string`) {
      let e14 = i3.scope;
      e14 = e14.replace(/^[,]+/, ``), e14 = e14.replace(/[,]+$/, ``), a2 = e14.split(`,`);
    } else a2 = Array.isArray(i3.scope) ? i3.scope : [``];
    let o2 = -1;
    if (typeof i3.settings.fontStyle == `string`) {
      o2 = 0;
      let e14 = i3.settings.fontStyle.split(` `);
      for (let t3 = 0, n3 = e14.length; t3 < n3; t3++) switch (e14[t3]) {
        case `italic`:
          o2 |= 1;
          break;
        case `bold`:
          o2 |= 2;
          break;
        case `underline`:
          o2 |= 4;
          break;
        case `strikethrough`:
          o2 |= 8;
          break;
      }
    }
    let s2 = null;
    typeof i3.settings.foreground == `string` && g(i3.settings.foreground) && (s2 = i3.settings.foreground);
    let c2 = null;
    typeof i3.settings.background == `string` && g(i3.settings.background) && (c2 = i3.settings.background);
    for (let t3 = 0, i4 = a2.length; t3 < i4; t3++) {
      let i5 = a2[t3].trim().split(` `), l2 = i5[i5.length - 1], u2 = null;
      i5.length > 1 && (u2 = i5.slice(0, i5.length - 1), u2.reverse()), n2[r2++] = new oe(l2, u2, e13, o2, s2, c2);
    }
  }
  return n2;
}
var oe = class {
  constructor(e12, t2, n2, r2, i2, a2) {
    this.scope = e12, this.parentScopes = t2, this.index = n2, this.fontStyle = r2, this.foreground = i2, this.background = a2;
  }
}, y = ((e12) => (e12[e12.NotSet = -1] = `NotSet`, e12[e12.None = 0] = `None`, e12[e12.Italic = 1] = `Italic`, e12[e12.Bold = 2] = `Bold`, e12[e12.Underline = 4] = `Underline`, e12[e12.Strikethrough = 8] = `Strikethrough`, e12))(y || {});
function se(e12, t2) {
  e12.sort((e13, t3) => {
    let n3 = m(e13.scope, t3.scope);
    return n3 !== 0 || (n3 = h(e13.parentScopes, t3.parentScopes), n3 !== 0) ? n3 : e13.index - t3.index;
  });
  let n2 = 0, r2 = `#000000`, i2 = `#ffffff`;
  for (; e12.length >= 1 && e12[0].scope === ``; ) {
    let t3 = e12.shift();
    t3.fontStyle !== -1 && (n2 = t3.fontStyle), t3.foreground !== null && (r2 = t3.foreground), t3.background !== null && (i2 = t3.background);
  }
  let a2 = new ce(t2), o2 = new ie(n2, a2.getId(r2), a2.getId(i2)), s2 = new de(new ue(0, null, -1, 0, 0), []);
  for (let t3 = 0, n3 = e12.length; t3 < n3; t3++) {
    let n4 = e12[t3];
    s2.insert(0, n4.scope, n4.parentScopes, n4.fontStyle, a2.getId(n4.foreground), a2.getId(n4.background));
  }
  return new ee(a2, o2, s2);
}
var ce = class {
  constructor(e12) {
    __publicField(this, "_isFrozen");
    __publicField(this, "_lastColorId");
    __publicField(this, "_id2color");
    __publicField(this, "_color2id");
    if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(e12)) {
      this._isFrozen = true;
      for (let t2 = 0, n2 = e12.length; t2 < n2; t2++) this._color2id[e12[t2]] = t2, this._id2color[t2] = e12[t2];
    } else this._isFrozen = false;
  }
  getId(e12) {
    if (e12 === null) return 0;
    e12 = e12.toUpperCase();
    let t2 = this._color2id[e12];
    if (t2) return t2;
    if (this._isFrozen) throw Error(`Missing color in color map - ${e12}`);
    return t2 = ++this._lastColorId, this._color2id[e12] = t2, this._id2color[t2] = e12, t2;
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
}, le = Object.freeze([]), ue = class e3 {
  constructor(e12, t2, n2, r2, i2) {
    __publicField(this, "scopeDepth");
    __publicField(this, "parentScopes");
    __publicField(this, "fontStyle");
    __publicField(this, "foreground");
    __publicField(this, "background");
    this.scopeDepth = e12, this.parentScopes = t2 || le, this.fontStyle = n2, this.foreground = r2, this.background = i2;
  }
  clone() {
    return new e3(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
  }
  static cloneArr(e12) {
    let t2 = [];
    for (let n2 = 0, r2 = e12.length; n2 < r2; n2++) t2[n2] = e12[n2].clone();
    return t2;
  }
  acceptOverwrite(e12, t2, n2, r2) {
    this.scopeDepth > e12 ? console.log(`how did this happen?`) : this.scopeDepth = e12, t2 !== -1 && (this.fontStyle = t2), n2 !== 0 && (this.foreground = n2), r2 !== 0 && (this.background = r2);
  }
}, de = class e4 {
  constructor(e12, t2 = [], n2 = {}) {
    __publicField(this, "_rulesWithParentScopes");
    this._mainRule = e12, this._children = n2, this._rulesWithParentScopes = t2;
  }
  static _cmpBySpecificity(e12, t2) {
    if (e12.scopeDepth !== t2.scopeDepth) return t2.scopeDepth - e12.scopeDepth;
    let n2 = 0, r2 = 0;
    for (; e12.parentScopes[n2] === `>` && n2++, t2.parentScopes[r2] === `>` && r2++, !(n2 >= e12.parentScopes.length || r2 >= t2.parentScopes.length); ) {
      let i2 = t2.parentScopes[r2].length - e12.parentScopes[n2].length;
      if (i2 !== 0) return i2;
      n2++, r2++;
    }
    return t2.parentScopes.length - e12.parentScopes.length;
  }
  match(t2) {
    if (t2 !== ``) {
      let e12 = t2.indexOf(`.`), n3, r2;
      if (e12 === -1 ? (n3 = t2, r2 = ``) : (n3 = t2.substring(0, e12), r2 = t2.substring(e12 + 1)), this._children.hasOwnProperty(n3)) return this._children[n3].match(r2);
    }
    let n2 = this._rulesWithParentScopes.concat(this._mainRule);
    return n2.sort(e4._cmpBySpecificity), n2;
  }
  insert(t2, n2, r2, i2, a2, o2) {
    if (n2 === ``) {
      this._doInsertHere(t2, r2, i2, a2, o2);
      return;
    }
    let s2 = n2.indexOf(`.`), c2, l2;
    s2 === -1 ? (c2 = n2, l2 = ``) : (c2 = n2.substring(0, s2), l2 = n2.substring(s2 + 1));
    let u2;
    this._children.hasOwnProperty(c2) ? u2 = this._children[c2] : (u2 = new e4(this._mainRule.clone(), ue.cloneArr(this._rulesWithParentScopes)), this._children[c2] = u2), u2.insert(t2 + 1, l2, r2, i2, a2, o2);
  }
  _doInsertHere(e12, t2, n2, r2, i2) {
    if (t2 === null) {
      this._mainRule.acceptOverwrite(e12, n2, r2, i2);
      return;
    }
    for (let a2 = 0, o2 = this._rulesWithParentScopes.length; a2 < o2; a2++) {
      let o3 = this._rulesWithParentScopes[a2];
      if (h(o3.parentScopes, t2) === 0) {
        o3.acceptOverwrite(e12, n2, r2, i2);
        return;
      }
    }
    n2 === -1 && (n2 = this._mainRule.fontStyle), r2 === 0 && (r2 = this._mainRule.foreground), i2 === 0 && (i2 = this._mainRule.background), this._rulesWithParentScopes.push(new ue(e12, t2, n2, r2, i2));
  }
}, b = class e5 {
  static toBinaryStr(e12) {
    return e12.toString(2).padStart(32, `0`);
  }
  static print(t2) {
    let n2 = e5.getLanguageId(t2), r2 = e5.getTokenType(t2), i2 = e5.getFontStyle(t2), a2 = e5.getForeground(t2), o2 = e5.getBackground(t2);
    console.log({ languageId: n2, tokenType: r2, fontStyle: i2, foreground: a2, background: o2 });
  }
  static getLanguageId(e12) {
    return (e12 & 255) >>> 0;
  }
  static getTokenType(e12) {
    return (e12 & 768) >>> 8;
  }
  static containsBalancedBrackets(e12) {
    return (e12 & 1024) != 0;
  }
  static getFontStyle(e12) {
    return (e12 & 30720) >>> 11;
  }
  static getForeground(e12) {
    return (e12 & 16744448) >>> 15;
  }
  static getBackground(e12) {
    return (e12 & 4278190080) >>> 24;
  }
  static set(t2, n2, r2, i2, a2, o2, s2) {
    let c2 = e5.getLanguageId(t2), l2 = e5.getTokenType(t2), u2 = +!!e5.containsBalancedBrackets(t2), d2 = e5.getFontStyle(t2), f2 = e5.getForeground(t2), p2 = e5.getBackground(t2);
    return n2 !== 0 && (c2 = n2), r2 !== 8 && (l2 = pe(r2)), i2 !== null && (u2 = +!!i2), a2 !== -1 && (d2 = a2), o2 !== 0 && (f2 = o2), s2 !== 0 && (p2 = s2), (c2 << 0 | l2 << 8 | u2 << 10 | d2 << 11 | f2 << 15 | p2 << 24) >>> 0;
  }
};
function fe(e12) {
  return e12;
}
function pe(e12) {
  return e12;
}
function x(e12, t2) {
  let n2 = [], r2 = he(e12), i2 = r2.next();
  for (; i2 !== null; ) {
    let e13 = 0;
    if (i2.length === 2 && i2.charAt(1) === `:`) {
      switch (i2.charAt(0)) {
        case `R`:
          e13 = 1;
          break;
        case `L`:
          e13 = -1;
          break;
        default:
          console.log(`Unknown priority ${i2} in scope selector`);
      }
      i2 = r2.next();
    }
    let t3 = o2();
    if (n2.push({ matcher: t3, priority: e13 }), i2 !== `,`) break;
    i2 = r2.next();
  }
  return n2;
  function a2() {
    if (i2 === `-`) {
      i2 = r2.next();
      let e13 = a2();
      return (t3) => !!e13 && !e13(t3);
    }
    if (i2 === `(`) {
      i2 = r2.next();
      let e13 = s2();
      return i2 === `)` && (i2 = r2.next()), e13;
    }
    if (me(i2)) {
      let e13 = [];
      do
        e13.push(i2), i2 = r2.next();
      while (me(i2));
      return (n3) => t2(e13, n3);
    }
    return null;
  }
  function o2() {
    let e13 = [], t3 = a2();
    for (; t3; ) e13.push(t3), t3 = a2();
    return (t4) => e13.every((e14) => e14(t4));
  }
  function s2() {
    let e13 = [], t3 = o2();
    for (; t3 && (e13.push(t3), i2 === `|` || i2 === `,`); ) {
      do
        i2 = r2.next();
      while (i2 === `|` || i2 === `,`);
      t3 = o2();
    }
    return (t4) => e13.some((e14) => e14(t4));
  }
}
function me(e12) {
  return !!e12 && !!e12.match(/[\w\.:]+/);
}
function he(e12) {
  let t2 = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n2 = t2.exec(e12);
  return { next: () => {
    if (!n2) return null;
    let r2 = n2[0];
    return n2 = t2.exec(e12), r2;
  } };
}
function ge(e12) {
  typeof e12.dispose == `function` && e12.dispose();
}
var S = class {
  constructor(e12) {
    this.scopeName = e12;
  }
  toKey() {
    return this.scopeName;
  }
}, _e = class {
  constructor(e12, t2) {
    this.scopeName = e12, this.ruleName = t2;
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
}, ve = class {
  constructor() {
    __publicField(this, "_references", []);
    __publicField(this, "_seenReferenceKeys", /* @__PURE__ */ new Set());
    __publicField(this, "visitedRule", /* @__PURE__ */ new Set());
  }
  get references() {
    return this._references;
  }
  add(e12) {
    let t2 = e12.toKey();
    this._seenReferenceKeys.has(t2) || (this._seenReferenceKeys.add(t2), this._references.push(e12));
  }
}, ye = class {
  constructor(e12, t2) {
    __publicField(this, "seenFullScopeRequests", /* @__PURE__ */ new Set());
    __publicField(this, "seenPartialScopeRequests", /* @__PURE__ */ new Set());
    __publicField(this, "Q");
    this.repo = e12, this.initialScopeName = t2, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new S(this.initialScopeName)];
  }
  processQueue() {
    let e12 = this.Q;
    this.Q = [];
    let t2 = new ve();
    for (let n2 of e12) be(n2, this.initialScopeName, this.repo, t2);
    for (let e13 of t2.references) if (e13 instanceof S) {
      if (this.seenFullScopeRequests.has(e13.scopeName)) continue;
      this.seenFullScopeRequests.add(e13.scopeName), this.Q.push(e13);
    } else {
      if (this.seenFullScopeRequests.has(e13.scopeName) || this.seenPartialScopeRequests.has(e13.toKey())) continue;
      this.seenPartialScopeRequests.add(e13.toKey()), this.Q.push(e13);
    }
  }
};
function be(e12, t2, n2, r2) {
  let i2 = n2.lookup(e12.scopeName);
  if (!i2) {
    if (e12.scopeName === t2) throw Error(`No grammar provided for <${t2}>`);
    return;
  }
  let a2 = n2.lookup(t2);
  e12 instanceof S ? Se({ baseGrammar: a2, selfGrammar: i2 }, r2) : xe(e12.ruleName, { baseGrammar: a2, selfGrammar: i2, repository: i2.repository }, r2);
  let o2 = n2.injections(e12.scopeName);
  if (o2) for (let e13 of o2) r2.add(new S(e13));
}
function xe(e12, t2, n2) {
  if (t2.repository && t2.repository[e12]) {
    let r2 = t2.repository[e12];
    Ce([r2], t2, n2);
  }
}
function Se(e12, t2) {
  e12.selfGrammar.patterns && Array.isArray(e12.selfGrammar.patterns) && Ce(e12.selfGrammar.patterns, { ...e12, repository: e12.selfGrammar.repository }, t2), e12.selfGrammar.injections && Ce(Object.values(e12.selfGrammar.injections), { ...e12, repository: e12.selfGrammar.repository }, t2);
}
function Ce(e12, t2, n2) {
  for (let r2 of e12) {
    if (n2.visitedRule.has(r2)) continue;
    n2.visitedRule.add(r2);
    let e13 = r2.repository ? u({}, t2.repository, r2.repository) : t2.repository;
    Array.isArray(r2.patterns) && Ce(r2.patterns, { ...t2, repository: e13 }, n2);
    let i2 = r2.include;
    if (!i2) continue;
    let a2 = ke(i2);
    switch (a2.kind) {
      case 0:
        Se({ ...t2, selfGrammar: t2.baseGrammar }, n2);
        break;
      case 1:
        Se(t2, n2);
        break;
      case 2:
        xe(a2.ruleName, { ...t2, repository: e13 }, n2);
        break;
      case 3:
      case 4:
        let r3 = a2.scopeName === t2.selfGrammar.scopeName ? t2.selfGrammar : a2.scopeName === t2.baseGrammar.scopeName ? t2.baseGrammar : void 0;
        if (r3) {
          let i3 = { baseGrammar: t2.baseGrammar, selfGrammar: r3, repository: e13 };
          a2.kind === 4 ? xe(a2.ruleName, i3, n2) : Se(i3, n2);
        } else a2.kind === 4 ? n2.add(new _e(a2.scopeName, a2.ruleName)) : n2.add(new S(a2.scopeName));
        break;
    }
  }
}
var we = class {
  constructor() {
    __publicField(this, "kind", 0);
  }
}, Te = class {
  constructor() {
    __publicField(this, "kind", 1);
  }
}, Ee = class {
  constructor(e12) {
    __publicField(this, "kind", 2);
    this.ruleName = e12;
  }
}, De = class {
  constructor(e12) {
    __publicField(this, "kind", 3);
    this.scopeName = e12;
  }
}, Oe = class {
  constructor(e12, t2) {
    __publicField(this, "kind", 4);
    this.scopeName = e12, this.ruleName = t2;
  }
};
function ke(e12) {
  if (e12 === `$base`) return new we();
  if (e12 === `$self`) return new Te();
  let t2 = e12.indexOf(`#`);
  return t2 === -1 ? new De(e12) : t2 === 0 ? new Ee(e12.substring(1)) : new Oe(e12.substring(0, t2), e12.substring(t2 + 1));
}
var Ae = /\\(\d+)/, je = /\\(\d+)/g, Me = -1, Ne = -2;
function Pe(e12) {
  return e12;
}
function Fe(e12) {
  return e12;
}
var C = class {
  constructor(e12, t2, n2, r2) {
    __publicField(this, "$location");
    __publicField(this, "id");
    __publicField(this, "_nameIsCapturing");
    __publicField(this, "_name");
    __publicField(this, "_contentNameIsCapturing");
    __publicField(this, "_contentName");
    this.$location = e12, this.id = t2, this._name = n2 || null, this._nameIsCapturing = p.hasCaptures(this._name), this._contentName = r2 || null, this._contentNameIsCapturing = p.hasCaptures(this._contentName);
  }
  get debugName() {
    let e12 = this.$location ? `${d(this.$location.filename)}:${this.$location.line}` : `unknown`;
    return `${this.constructor.name}#${this.id} @ ${e12}`;
  }
  getName(e12, t2) {
    return !this._nameIsCapturing || this._name === null || e12 === null || t2 === null ? this._name : p.replaceCaptures(this._name, e12, t2);
  }
  getContentName(e12, t2) {
    return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : p.replaceCaptures(this._contentName, e12, t2);
  }
}, Ie = class extends C {
  constructor(e12, t2, n2, r2, i2) {
    super(e12, t2, n2, r2);
    __publicField(this, "retokenizeCapturedWithRuleId");
    this.retokenizeCapturedWithRuleId = i2;
  }
  dispose() {
  }
  collectPatterns(e12, t2) {
    throw Error(`Not supported!`);
  }
  compile(e12, t2) {
    throw Error(`Not supported!`);
  }
  compileAG(e12, t2, n2, r2) {
    throw Error(`Not supported!`);
  }
}, Le = class extends C {
  constructor(e12, t2, n2, r2, i2) {
    super(e12, t2, n2, null);
    __publicField(this, "_match");
    __publicField(this, "captures");
    __publicField(this, "_cachedCompiledPatterns");
    this._match = new w(r2, this.id), this.captures = i2, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null));
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(e12, t2) {
    t2.push(this._match);
  }
  compile(e12, t2) {
    return this._getCachedCompiledPatterns(e12).compile(e12);
  }
  compileAG(e12, t2, n2, r2) {
    return this._getCachedCompiledPatterns(e12).compileAG(e12, n2, r2);
  }
  _getCachedCompiledPatterns(e12) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new T(), this.collectPatterns(e12, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
}, Re = class extends C {
  constructor(e12, t2, n2, r2, i2) {
    super(e12, t2, n2, r2);
    __publicField(this, "hasMissingPatterns");
    __publicField(this, "patterns");
    __publicField(this, "_cachedCompiledPatterns");
    this.patterns = i2.patterns, this.hasMissingPatterns = i2.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null));
  }
  collectPatterns(e12, t2) {
    for (let n2 of this.patterns) e12.getRule(n2).collectPatterns(e12, t2);
  }
  compile(e12, t2) {
    return this._getCachedCompiledPatterns(e12).compile(e12);
  }
  compileAG(e12, t2, n2, r2) {
    return this._getCachedCompiledPatterns(e12).compileAG(e12, n2, r2);
  }
  _getCachedCompiledPatterns(e12) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new T(), this.collectPatterns(e12, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
}, ze = class extends C {
  constructor(e12, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    super(e12, t2, n2, r2);
    __publicField(this, "_begin");
    __publicField(this, "beginCaptures");
    __publicField(this, "_end");
    __publicField(this, "endHasBackReferences");
    __publicField(this, "endCaptures");
    __publicField(this, "applyEndPatternLast");
    __publicField(this, "hasMissingPatterns");
    __publicField(this, "patterns");
    __publicField(this, "_cachedCompiledPatterns");
    this._begin = new w(i2, this.id), this.beginCaptures = a2, this._end = new w(o2 || `\uFFFF`, -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = s2, this.applyEndPatternLast = c2 || false, this.patterns = l2.patterns, this.hasMissingPatterns = l2.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null));
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(e12, t2) {
    return this._end.resolveBackReferences(e12, t2);
  }
  collectPatterns(e12, t2) {
    t2.push(this._begin);
  }
  compile(e12, t2) {
    return this._getCachedCompiledPatterns(e12, t2).compile(e12);
  }
  compileAG(e12, t2, n2, r2) {
    return this._getCachedCompiledPatterns(e12, t2).compileAG(e12, n2, r2);
  }
  _getCachedCompiledPatterns(e12, t2) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new T();
      for (let t3 of this.patterns) e12.getRule(t3).collectPatterns(e12, this._cachedCompiledPatterns);
      this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
    }
    return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t2) : this._cachedCompiledPatterns.setSource(0, t2)), this._cachedCompiledPatterns;
  }
}, Be = class extends C {
  constructor(e12, t2, n2, r2, i2, a2, o2, s2, c2) {
    super(e12, t2, n2, r2);
    __publicField(this, "_begin");
    __publicField(this, "beginCaptures");
    __publicField(this, "whileCaptures");
    __publicField(this, "_while");
    __publicField(this, "whileHasBackReferences");
    __publicField(this, "hasMissingPatterns");
    __publicField(this, "patterns");
    __publicField(this, "_cachedCompiledPatterns");
    __publicField(this, "_cachedCompiledWhilePatterns");
    this._begin = new w(i2, this.id), this.beginCaptures = a2, this.whileCaptures = s2, this._while = new w(o2, Ne), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = c2.patterns, this.hasMissingPatterns = c2.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null)), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns = (this._cachedCompiledWhilePatterns.dispose(), null));
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(e12, t2) {
    return this._while.resolveBackReferences(e12, t2);
  }
  collectPatterns(e12, t2) {
    t2.push(this._begin);
  }
  compile(e12, t2) {
    return this._getCachedCompiledPatterns(e12).compile(e12);
  }
  compileAG(e12, t2, n2, r2) {
    return this._getCachedCompiledPatterns(e12).compileAG(e12, n2, r2);
  }
  _getCachedCompiledPatterns(e12) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new T();
      for (let t2 of this.patterns) e12.getRule(t2).collectPatterns(e12, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(e12, t2) {
    return this._getCachedCompiledWhilePatterns(e12, t2).compile(e12);
  }
  compileWhileAG(e12, t2, n2, r2) {
    return this._getCachedCompiledWhilePatterns(e12, t2).compileAG(e12, n2, r2);
  }
  _getCachedCompiledWhilePatterns(e12, t2) {
    return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new T(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t2 || `\uFFFF`), this._cachedCompiledWhilePatterns;
  }
}, Ve = class e6 {
  static createCaptureRule(e12, t2, n2, r2, i2) {
    return e12.registerRule((e13) => new Ie(t2, e13, n2, r2, i2));
  }
  static getCompiledRuleId(t2, n2, r2) {
    return t2.id || n2.registerRule((i2) => {
      if (t2.id = i2, t2.match) return new Le(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.match, e6._compileCaptures(t2.captures, n2, r2));
      if (t2.begin === void 0) {
        t2.repository && (r2 = u({}, r2, t2.repository));
        let i3 = t2.patterns;
        return i3 === void 0 && t2.include && (i3 = [{ include: t2.include }]), new Re(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.contentName, e6._compilePatterns(i3, n2, r2));
      }
      return t2.while ? new Be(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.contentName, t2.begin, e6._compileCaptures(t2.beginCaptures || t2.captures, n2, r2), t2.while, e6._compileCaptures(t2.whileCaptures || t2.captures, n2, r2), e6._compilePatterns(t2.patterns, n2, r2)) : new ze(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.contentName, t2.begin, e6._compileCaptures(t2.beginCaptures || t2.captures, n2, r2), t2.end, e6._compileCaptures(t2.endCaptures || t2.captures, n2, r2), t2.applyEndPatternLast, e6._compilePatterns(t2.patterns, n2, r2));
    }), t2.id;
  }
  static _compileCaptures(t2, n2, r2) {
    let i2 = [];
    if (t2) {
      let a2 = 0;
      for (let e12 in t2) {
        if (e12 === `$vscodeTextmateLocation`) continue;
        let t3 = parseInt(e12, 10);
        t3 > a2 && (a2 = t3);
      }
      for (let e12 = 0; e12 <= a2; e12++) i2[e12] = null;
      for (let a3 in t2) {
        if (a3 === `$vscodeTextmateLocation`) continue;
        let o2 = parseInt(a3, 10), s2 = 0;
        t2[a3].patterns && (s2 = e6.getCompiledRuleId(t2[a3], n2, r2)), i2[o2] = e6.createCaptureRule(n2, t2[a3].$vscodeTextmateLocation, t2[a3].name, t2[a3].contentName, s2);
      }
    }
    return i2;
  }
  static _compilePatterns(t2, n2, r2) {
    let i2 = [];
    if (t2) for (let a2 = 0, o2 = t2.length; a2 < o2; a2++) {
      let o3 = t2[a2], s2 = -1;
      if (o3.include) {
        let t3 = ke(o3.include);
        switch (t3.kind) {
          case 0:
          case 1:
            s2 = e6.getCompiledRuleId(r2[o3.include], n2, r2);
            break;
          case 2:
            let i3 = r2[t3.ruleName];
            i3 && (s2 = e6.getCompiledRuleId(i3, n2, r2));
            break;
          case 3:
          case 4:
            let a3 = t3.scopeName, c2 = t3.kind === 4 ? t3.ruleName : null, l2 = n2.getExternalGrammar(a3, r2);
            if (l2) if (c2) {
              let t4 = l2.repository[c2];
              t4 && (s2 = e6.getCompiledRuleId(t4, n2, l2.repository));
            } else s2 = e6.getCompiledRuleId(l2.repository.$self, n2, l2.repository);
            break;
        }
      } else s2 = e6.getCompiledRuleId(o3, n2, r2);
      if (s2 !== -1) {
        let e12 = n2.getRule(s2), t3 = false;
        if ((e12 instanceof Re || e12 instanceof ze || e12 instanceof Be) && e12.hasMissingPatterns && e12.patterns.length === 0 && (t3 = true), t3) continue;
        i2.push(s2);
      }
    }
    return { patterns: i2, hasMissingPatterns: (t2 ? t2.length : 0) !== i2.length };
  }
}, w = class e7 {
  constructor(e12, t2) {
    __publicField(this, "source");
    __publicField(this, "ruleId");
    __publicField(this, "hasAnchor");
    __publicField(this, "hasBackReferences");
    __publicField(this, "_anchorCache");
    if (e12 && typeof e12 == `string`) {
      let t3 = e12.length, n2 = 0, r2 = [], i2 = false;
      for (let a2 = 0; a2 < t3; a2++) if (e12.charAt(a2) === `\\` && a2 + 1 < t3) {
        let t4 = e12.charAt(a2 + 1);
        t4 === `z` ? (r2.push(e12.substring(n2, a2)), r2.push(`$(?!\\n)(?<!\\n)`), n2 = a2 + 2) : (t4 === `A` || t4 === `G`) && (i2 = true), a2++;
      }
      this.hasAnchor = i2, n2 === 0 ? this.source = e12 : (r2.push(e12.substring(n2, t3)), this.source = r2.join(``));
    } else this.hasAnchor = false, this.source = e12;
    this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t2, typeof this.source == `string` ? this.hasBackReferences = Ae.test(this.source) : this.hasBackReferences = false;
  }
  clone() {
    return new e7(this.source, this.ruleId);
  }
  setSource(e12) {
    this.source !== e12 && (this.source = e12, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
  }
  resolveBackReferences(e12, t2) {
    if (typeof this.source != `string`) throw Error(`This method should only be called if the source is a string`);
    let n2 = t2.map((t3) => e12.substring(t3.start, t3.end));
    return je.lastIndex = 0, this.source.replace(je, (e13, t3) => _(n2[parseInt(t3, 10)] || ``));
  }
  _buildAnchorCache() {
    if (typeof this.source != `string`) throw Error(`This method should only be called if the source is a string`);
    let e12 = [], t2 = [], n2 = [], r2 = [], i2, a2, o2, s2;
    for (i2 = 0, a2 = this.source.length; i2 < a2; i2++) o2 = this.source.charAt(i2), e12[i2] = o2, t2[i2] = o2, n2[i2] = o2, r2[i2] = o2, o2 === `\\` && i2 + 1 < a2 && (s2 = this.source.charAt(i2 + 1), s2 === `A` ? (e12[i2 + 1] = `\uFFFF`, t2[i2 + 1] = `\uFFFF`, n2[i2 + 1] = `A`, r2[i2 + 1] = `A`) : s2 === `G` ? (e12[i2 + 1] = `\uFFFF`, t2[i2 + 1] = `G`, n2[i2 + 1] = `\uFFFF`, r2[i2 + 1] = `G`) : (e12[i2 + 1] = s2, t2[i2 + 1] = s2, n2[i2 + 1] = s2, r2[i2 + 1] = s2), i2++);
    return { A0_G0: e12.join(``), A0_G1: t2.join(``), A1_G0: n2.join(``), A1_G1: r2.join(``) };
  }
  resolveAnchors(e12, t2) {
    return !this.hasAnchor || !this._anchorCache || typeof this.source != `string` ? this.source : e12 ? t2 ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t2 ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
  }
}, T = class {
  constructor() {
    __publicField(this, "_items");
    __publicField(this, "_hasAnchors");
    __publicField(this, "_cached");
    __publicField(this, "_anchorCache");
    this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null };
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    this._cached && (this._cached = (this._cached.dispose(), null)), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
  }
  push(e12) {
    this._items.push(e12), this._hasAnchors = this._hasAnchors || e12.hasAnchor;
  }
  unshift(e12) {
    this._items.unshift(e12), this._hasAnchors = this._hasAnchors || e12.hasAnchor;
  }
  length() {
    return this._items.length;
  }
  setSource(e12, t2) {
    this._items[e12].source !== t2 && (this._disposeCaches(), this._items[e12].setSource(t2));
  }
  compile(e12) {
    if (!this._cached) {
      let t2 = this._items.map((e13) => e13.source);
      this._cached = new He(e12, t2, this._items.map((e13) => e13.ruleId));
    }
    return this._cached;
  }
  compileAG(e12, t2, n2) {
    return this._hasAnchors ? t2 ? n2 ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e12, t2, n2)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e12, t2, n2)), this._anchorCache.A1_G0) : n2 ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e12, t2, n2)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e12, t2, n2)), this._anchorCache.A0_G0) : this.compile(e12);
  }
  _resolveAnchors(e12, t2, n2) {
    return new He(e12, this._items.map((e13) => e13.resolveAnchors(t2, n2)), this._items.map((e13) => e13.ruleId));
  }
}, He = class {
  constructor(e12, t2, n2) {
    __publicField(this, "scanner");
    this.regExps = t2, this.rules = n2, this.scanner = e12.createOnigScanner(t2);
  }
  dispose() {
    typeof this.scanner.dispose == `function` && this.scanner.dispose();
  }
  toString() {
    let e12 = [];
    for (let t2 = 0, n2 = this.rules.length; t2 < n2; t2++) e12.push(`   - ` + this.rules[t2] + `: ` + this.regExps[t2]);
    return e12.join(`
`);
  }
  findNextMatchSync(e12, t2, n2) {
    let r2 = this.scanner.findNextMatchSync(e12, t2, n2);
    return r2 ? { ruleId: this.rules[r2.index], captureIndices: r2.captureIndices } : null;
  }
}, Ue = class {
  constructor(e12, t2) {
    this.languageId = e12, this.tokenType = t2;
  }
}, We = (_a = class {
  constructor(e12, t2) {
    __publicField(this, "_defaultAttributes");
    __publicField(this, "_embeddedLanguagesMatcher");
    __publicField(this, "_getBasicScopeAttributes", new v((e12) => new Ue(this._scopeToLanguage(e12), this._toStandardTokenType(e12))));
    this._defaultAttributes = new Ue(e12, 8), this._embeddedLanguagesMatcher = new Ge(Object.entries(t2 || {}));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(t2) {
    return t2 === null ? _a._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t2);
  }
  _scopeToLanguage(e12) {
    return this._embeddedLanguagesMatcher.match(e12) || 0;
  }
  _toStandardTokenType(t2) {
    let n2 = t2.match(_a.STANDARD_TOKEN_TYPE_REGEXP);
    if (!n2) return 8;
    switch (n2[1]) {
      case `comment`:
        return 1;
      case `string`:
        return 2;
      case `regex`:
        return 3;
      case `meta.embedded`:
        return 0;
    }
    throw Error(`Unexpected match for standard token type!`);
  }
}, __publicField(_a, "_NULL_SCOPE_METADATA", new Ue(0, 0)), __publicField(_a, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), _a), Ge = class {
  constructor(e12) {
    __publicField(this, "values");
    __publicField(this, "scopesRegExp");
    if (e12.length === 0) this.values = null, this.scopesRegExp = null;
    else {
      this.values = new Map(e12);
      let t2 = e12.map(([e13, t3]) => _(e13));
      t2.sort(), t2.reverse(), this.scopesRegExp = RegExp(`^((${t2.join(`)|(`)}))($|\\.)`, ``);
    }
  }
  match(e12) {
    if (!this.scopesRegExp) return;
    let t2 = e12.match(this.scopesRegExp);
    if (t2) return this.values.get(t2[1]);
  }
};
r !== void 0 && {}.VSCODE_TEXTMATE_DEBUG;
var Ke = false, qe = class {
  constructor(e12, t2) {
    this.stack = e12, this.stoppedEarly = t2;
  }
};
function Je(e12, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = t2.content.length, l2 = false, u2 = -1;
  if (o2) {
    let o3 = Ye(e12, t2, n2, r2, i2, a2);
    i2 = o3.stack, r2 = o3.linePos, n2 = o3.isFirstLine, u2 = o3.anchorPosition;
  }
  let d2 = Date.now();
  for (; !l2; ) {
    if (s2 !== 0 && Date.now() - d2 > s2) return new qe(i2, true);
    f2();
  }
  return new qe(i2, false);
  function f2() {
    let o3 = Xe(e12, t2, n2, r2, i2, u2);
    if (!o3) {
      a2.produce(i2, c2), l2 = true;
      return;
    }
    let s3 = o3.captureIndices, d3 = o3.matchedRuleId, f3 = s3 && s3.length > 0 ? s3[0].end > r2 : false;
    if (d3 === Me) {
      let o4 = i2.getRule(e12);
      a2.produce(i2, s3[0].start), i2 = i2.withContentNameScopesList(i2.nameScopesList), E(e12, t2, n2, i2, a2, o4.endCaptures, s3), a2.produce(i2, s3[0].end);
      let d4 = i2;
      if (i2 = i2.parent, u2 = d4.getAnchorPos(), !f3 && d4.getEnterPos() === r2) {
        i2 = d4, a2.produce(i2, c2), l2 = true;
        return;
      }
    } else {
      let o4 = e12.getRule(d3);
      a2.produce(i2, s3[0].start);
      let p2 = i2, m2 = o4.getName(t2.content, s3), h2 = i2.contentNameScopesList.pushAttributed(m2, e12);
      if (i2 = i2.push(d3, r2, u2, s3[0].end === c2, null, h2, h2), o4 instanceof ze) {
        let r3 = o4;
        E(e12, t2, n2, i2, a2, r3.beginCaptures, s3), a2.produce(i2, s3[0].end), u2 = s3[0].end;
        let d4 = r3.getContentName(t2.content, s3), m3 = h2.pushAttributed(d4, e12);
        if (i2 = i2.withContentNameScopesList(m3), r3.endHasBackReferences && (i2 = i2.withEndRule(r3.getEndWithResolvedBackReferences(t2.content, s3))), !f3 && p2.hasSameRuleAs(i2)) {
          i2 = i2.pop(), a2.produce(i2, c2), l2 = true;
          return;
        }
      } else if (o4 instanceof Be) {
        let r3 = o4;
        E(e12, t2, n2, i2, a2, r3.beginCaptures, s3), a2.produce(i2, s3[0].end), u2 = s3[0].end;
        let d4 = r3.getContentName(t2.content, s3), m3 = h2.pushAttributed(d4, e12);
        if (i2 = i2.withContentNameScopesList(m3), r3.whileHasBackReferences && (i2 = i2.withEndRule(r3.getWhileWithResolvedBackReferences(t2.content, s3))), !f3 && p2.hasSameRuleAs(i2)) {
          i2 = i2.pop(), a2.produce(i2, c2), l2 = true;
          return;
        }
      } else if (E(e12, t2, n2, i2, a2, o4.captures, s3), a2.produce(i2, s3[0].end), i2 = i2.pop(), !f3) {
        i2 = i2.safePop(), a2.produce(i2, c2), l2 = true;
        return;
      }
    }
    s3[0].end > r2 && (r2 = s3[0].end, n2 = false);
  }
}
function Ye(e12, t2, n2, r2, i2, a2) {
  let o2 = i2.beginRuleCapturedEOL ? 0 : -1, s2 = [];
  for (let t3 = i2; t3; t3 = t3.pop()) {
    let n3 = t3.getRule(e12);
    n3 instanceof Be && s2.push({ rule: n3, stack: t3 });
  }
  for (let c2 = s2.pop(); c2; c2 = s2.pop()) {
    let { ruleScanner: s3, findOptions: l2 } = et(c2.rule, e12, c2.stack.endRule, n2, r2 === o2), u2 = s3.findNextMatchSync(t2, r2, l2);
    if (u2) {
      if (u2.ruleId !== Ne) {
        i2 = c2.stack.pop();
        break;
      }
      u2.captureIndices && u2.captureIndices.length && (a2.produce(c2.stack, u2.captureIndices[0].start), E(e12, t2, n2, c2.stack, a2, c2.rule.whileCaptures, u2.captureIndices), a2.produce(c2.stack, u2.captureIndices[0].end), o2 = u2.captureIndices[0].end, u2.captureIndices[0].end > r2 && (r2 = u2.captureIndices[0].end, n2 = false));
    } else {
      i2 = c2.stack.pop();
      break;
    }
  }
  return { stack: i2, linePos: r2, anchorPosition: o2, isFirstLine: n2 };
}
function Xe(e12, t2, n2, r2, i2, a2) {
  let o2 = Ze(e12, t2, n2, r2, i2, a2), s2 = e12.getInjections();
  if (s2.length === 0) return o2;
  let c2 = Qe(s2, e12, t2, n2, r2, i2, a2);
  if (!c2) return o2;
  if (!o2) return c2;
  let l2 = o2.captureIndices[0].start, u2 = c2.captureIndices[0].start;
  return u2 < l2 || c2.priorityMatch && u2 === l2 ? c2 : o2;
}
function Ze(e12, t2, n2, r2, i2, a2) {
  let { ruleScanner: o2, findOptions: s2 } = $e(i2.getRule(e12), e12, i2.endRule, n2, r2 === a2), c2 = o2.findNextMatchSync(t2, r2, s2);
  return c2 ? { captureIndices: c2.captureIndices, matchedRuleId: c2.ruleId } : null;
}
function Qe(e12, t2, n2, r2, i2, a2, o2) {
  let s2 = Number.MAX_VALUE, c2 = null, l2, u2 = 0, d2 = a2.contentNameScopesList.getScopeNames();
  for (let a3 = 0, f2 = e12.length; a3 < f2; a3++) {
    let f3 = e12[a3];
    if (!f3.matcher(d2)) continue;
    let { ruleScanner: p2, findOptions: m2 } = $e(t2.getRule(f3.ruleId), t2, null, r2, i2 === o2), h2 = p2.findNextMatchSync(n2, i2, m2);
    if (!h2) continue;
    let g2 = h2.captureIndices[0].start;
    if (!(g2 >= s2) && (s2 = g2, c2 = h2.captureIndices, l2 = h2.ruleId, u2 = f3.priority, s2 === i2)) break;
  }
  return c2 ? { priorityMatch: u2 === -1, captureIndices: c2, matchedRuleId: l2 } : null;
}
function $e(e12, t2, n2, r2, i2) {
  return Ke ? { ruleScanner: e12.compile(t2, n2), findOptions: tt(r2, i2) } : { ruleScanner: e12.compileAG(t2, n2, r2, i2), findOptions: 0 };
}
function et(e12, t2, n2, r2, i2) {
  return Ke ? { ruleScanner: e12.compileWhile(t2, n2), findOptions: tt(r2, i2) } : { ruleScanner: e12.compileWhileAG(t2, n2, r2, i2), findOptions: 0 };
}
function tt(e12, t2) {
  let n2 = 0;
  return e12 || (n2 |= 1), t2 || (n2 |= 4), n2;
}
function E(e12, t2, n2, r2, i2, a2, o2) {
  if (a2.length === 0) return;
  let s2 = t2.content, c2 = Math.min(a2.length, o2.length), l2 = [], u2 = o2[0].end;
  for (let t3 = 0; t3 < c2; t3++) {
    let c3 = a2[t3];
    if (c3 === null) continue;
    let d2 = o2[t3];
    if (d2.length === 0) continue;
    if (d2.start > u2) break;
    for (; l2.length > 0 && l2[l2.length - 1].endPos <= d2.start; ) i2.produceFromScopes(l2[l2.length - 1].scopes, l2[l2.length - 1].endPos), l2.pop();
    if (l2.length > 0 ? i2.produceFromScopes(l2[l2.length - 1].scopes, d2.start) : i2.produce(r2, d2.start), c3.retokenizeCapturedWithRuleId) {
      let t4 = c3.getName(s2, o2), a3 = r2.contentNameScopesList.pushAttributed(t4, e12), l3 = c3.getContentName(s2, o2), u3 = a3.pushAttributed(l3, e12), f3 = r2.push(c3.retokenizeCapturedWithRuleId, d2.start, -1, false, null, a3, u3), p2 = e12.createOnigString(s2.substring(0, d2.end));
      Je(e12, p2, n2 && d2.start === 0, d2.start, f3, i2, false, 0), ge(p2);
      continue;
    }
    let f2 = c3.getName(s2, o2);
    if (f2 !== null) {
      let t4 = (l2.length > 0 ? l2[l2.length - 1].scopes : r2.contentNameScopesList).pushAttributed(f2, e12);
      l2.push(new nt(t4, d2.end));
    }
  }
  for (; l2.length > 0; ) i2.produceFromScopes(l2[l2.length - 1].scopes, l2[l2.length - 1].endPos), l2.pop();
}
var nt = class {
  constructor(e12, t2) {
    __publicField(this, "scopes");
    __publicField(this, "endPos");
    this.scopes = e12, this.endPos = t2;
  }
};
function rt(e12, t2, n2, r2, i2, a2, o2, s2) {
  return new ot(e12, t2, n2, r2, i2, a2, o2, s2);
}
function it(e12, t2, n2, r2, i2) {
  let a2 = x(t2, D), o2 = Ve.getCompiledRuleId(n2, r2, i2.repository);
  for (let n3 of a2) e12.push({ debugSelector: t2, matcher: n3.matcher, ruleId: o2, grammar: i2, priority: n3.priority });
}
function D(e12, t2) {
  if (t2.length < e12.length) return false;
  let n2 = 0;
  return e12.every((e13) => {
    for (let r2 = n2; r2 < t2.length; r2++) if (at(t2[r2], e13)) return n2 = r2 + 1, true;
    return false;
  });
}
function at(e12, t2) {
  if (!e12) return false;
  if (e12 === t2) return true;
  let n2 = t2.length;
  return e12.length > n2 && e12.substr(0, n2) === t2 && e12[n2] === `.`;
}
var ot = class {
  constructor(e12, t2, n2, r2, i2, a2, o2, s2) {
    __publicField(this, "_rootId");
    __publicField(this, "_lastRuleId");
    __publicField(this, "_ruleId2desc");
    __publicField(this, "_includedGrammars");
    __publicField(this, "_grammarRepository");
    __publicField(this, "_grammar");
    __publicField(this, "_injections");
    __publicField(this, "_basicScopeAttributesProvider");
    __publicField(this, "_tokenTypeMatchers");
    if (this._rootScopeName = e12, this.balancedBracketSelectors = a2, this._onigLib = s2, this._basicScopeAttributesProvider = new We(n2, r2), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = o2, this._grammar = st(t2, null), this._injections = null, this._tokenTypeMatchers = [], i2) for (let e13 of Object.keys(i2)) {
      let t3 = x(e13, D);
      for (let n3 of t3) this._tokenTypeMatchers.push({ matcher: n3.matcher, type: i2[e13] });
    }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (let e12 of this._ruleId2desc) e12 && e12.dispose();
  }
  createOnigScanner(e12) {
    return this._onigLib.createOnigScanner(e12);
  }
  createOnigString(e12) {
    return this._onigLib.createOnigString(e12);
  }
  getMetadataForScope(e12) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(e12);
  }
  _collectInjections() {
    let e12 = { lookup: (e13) => e13 === this._rootScopeName ? this._grammar : this.getExternalGrammar(e13), injections: (e13) => this._grammarRepository.injections(e13) }, t2 = [], n2 = this._rootScopeName, r2 = e12.lookup(n2);
    if (r2) {
      let e13 = r2.injections;
      if (e13) for (let n3 in e13) it(t2, n3, e13[n3], this, r2);
      let i2 = this._grammarRepository.injections(n2);
      i2 && i2.forEach((e14) => {
        let n3 = this.getExternalGrammar(e14);
        if (n3) {
          let e15 = n3.injectionSelector;
          e15 && it(t2, e15, n3, this, n3);
        }
      });
    }
    return t2.sort((e13, t3) => e13.priority - t3.priority), t2;
  }
  getInjections() {
    return this._injections === null && (this._injections = this._collectInjections()), this._injections;
  }
  registerRule(e12) {
    let t2 = ++this._lastRuleId, n2 = e12(Pe(t2));
    return this._ruleId2desc[t2] = n2, n2;
  }
  getRule(e12) {
    return this._ruleId2desc[Fe(e12)];
  }
  getExternalGrammar(e12, t2) {
    if (this._includedGrammars[e12]) return this._includedGrammars[e12];
    if (this._grammarRepository) {
      let n2 = this._grammarRepository.lookup(e12);
      if (n2) return this._includedGrammars[e12] = st(n2, t2 && t2.$base), this._includedGrammars[e12];
    }
  }
  tokenizeLine(e12, t2, n2 = 0) {
    let r2 = this._tokenize(e12, t2, false, n2);
    return { tokens: r2.lineTokens.getResult(r2.ruleStack, r2.lineLength), ruleStack: r2.ruleStack, stoppedEarly: r2.stoppedEarly };
  }
  tokenizeLine2(e12, t2, n2 = 0) {
    let r2 = this._tokenize(e12, t2, true, n2);
    return { tokens: r2.lineTokens.getBinaryResult(r2.ruleStack, r2.lineLength), ruleStack: r2.ruleStack, stoppedEarly: r2.stoppedEarly };
  }
  _tokenize(e12, t2, n2, r2) {
    this._rootId === -1 && (this._rootId = Ve.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
    let i2;
    if (!t2 || t2 === ct.NULL) {
      i2 = true;
      let e13 = this._basicScopeAttributesProvider.getDefaultAttributes(), n3 = this.themeProvider.getDefaults(), r3 = b.set(0, e13.languageId, e13.tokenType, null, n3.fontStyle, n3.foregroundId, n3.backgroundId), a3 = this.getRule(this._rootId).getName(null, null), o3;
      o3 = a3 ? O.createRootAndLookUpScopeName(a3, r3, this) : O.createRoot(`unknown`, r3), t2 = new ct(null, this._rootId, -1, -1, false, null, o3, o3);
    } else i2 = false, t2.reset();
    e12 += `
`;
    let a2 = this.createOnigString(e12), o2 = a2.content.length, s2 = new ut(n2, e12, this._tokenTypeMatchers, this.balancedBracketSelectors), c2 = Je(this, a2, i2, 0, t2, s2, true, r2);
    return ge(a2), { lineLength: o2, lineTokens: s2, ruleStack: c2.stack, stoppedEarly: c2.stoppedEarly };
  }
};
function st(e12, t2) {
  return e12 = o(e12), e12.repository = e12.repository || {}, e12.repository.$self = { $vscodeTextmateLocation: e12.$vscodeTextmateLocation, patterns: e12.patterns, name: e12.scopeName }, e12.repository.$base = t2 || e12.repository.$self, e12;
}
var O = class e8 {
  constructor(e12, t2, n2) {
    this.parent = e12, this.scopePath = t2, this.tokenAttributes = n2;
  }
  static fromExtension(t2, n2) {
    let r2 = t2, i2 = t2?.scopePath ?? null;
    for (let t3 of n2) i2 = te.push(i2, t3.scopeNames), r2 = new e8(r2, i2, t3.encodedTokenAttributes);
    return r2;
  }
  static createRoot(t2, n2) {
    return new e8(null, new te(null, t2), n2);
  }
  static createRootAndLookUpScopeName(t2, n2, r2) {
    let i2 = r2.getMetadataForScope(t2), a2 = new te(null, t2), o2 = r2.themeProvider.themeMatch(a2);
    return new e8(null, a2, e8.mergeAttributes(n2, i2, o2));
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(` `);
  }
  equals(t2) {
    return e8.equals(this, t2);
  }
  static equals(e12, t2) {
    do {
      if (e12 === t2 || !e12 && !t2) return true;
      if (!e12 || !t2 || e12.scopeName !== t2.scopeName || e12.tokenAttributes !== t2.tokenAttributes) return false;
      e12 = e12.parent, t2 = t2.parent;
    } while (true);
  }
  static mergeAttributes(e12, t2, n2) {
    let r2 = -1, i2 = 0, a2 = 0;
    return n2 !== null && (r2 = n2.fontStyle, i2 = n2.foregroundId, a2 = n2.backgroundId), b.set(e12, t2.languageId, t2.tokenType, null, r2, i2, a2);
  }
  pushAttributed(t2, n2) {
    if (t2 === null) return this;
    if (t2.indexOf(` `) === -1) return e8._pushAttributed(this, t2, n2);
    let r2 = t2.split(/ /g), i2 = this;
    for (let t3 of r2) i2 = e8._pushAttributed(i2, t3, n2);
    return i2;
  }
  static _pushAttributed(t2, n2, r2) {
    let i2 = r2.getMetadataForScope(n2), a2 = t2.scopePath.push(n2), o2 = r2.themeProvider.themeMatch(a2);
    return new e8(t2, a2, e8.mergeAttributes(t2.tokenAttributes, i2, o2));
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(e12) {
    let t2 = [], n2 = this;
    for (; n2 && n2 !== e12; ) t2.push({ encodedTokenAttributes: n2.tokenAttributes, scopeNames: n2.scopePath.getExtensionIfDefined(n2.parent?.scopePath ?? null) }), n2 = n2.parent;
    return n2 === e12 ? t2.reverse() : void 0;
  }
}, ct = (_b = class {
  constructor(e12, t2, n2, r2, i2, a2, o2, s2) {
    __publicField(this, "_stackElementBrand");
    __publicField(this, "_enterPos");
    __publicField(this, "_anchorPos");
    __publicField(this, "depth");
    this.parent = e12, this.ruleId = t2, this.beginRuleCapturedEOL = i2, this.endRule = a2, this.nameScopesList = o2, this.contentNameScopesList = s2, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n2, this._anchorPos = r2;
  }
  equals(t2) {
    return t2 === null ? false : _b._equals(this, t2);
  }
  static _equals(e12, t2) {
    return e12 === t2 ? true : this._structuralEquals(e12, t2) ? O.equals(e12.contentNameScopesList, t2.contentNameScopesList) : false;
  }
  static _structuralEquals(e12, t2) {
    do {
      if (e12 === t2 || !e12 && !t2) return true;
      if (!e12 || !t2 || e12.depth !== t2.depth || e12.ruleId !== t2.ruleId || e12.endRule !== t2.endRule) return false;
      e12 = e12.parent, t2 = t2.parent;
    } while (true);
  }
  clone() {
    return this;
  }
  static _reset(e12) {
    for (; e12; ) e12._enterPos = -1, e12._anchorPos = -1, e12 = e12.parent;
  }
  reset() {
    _b._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    return this.parent ? this.parent : this;
  }
  push(t2, n2, r2, i2, a2, o2, s2) {
    return new _b(this, t2, n2, r2, i2, a2, o2, s2);
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(e12) {
    return e12.getRule(this.ruleId);
  }
  toString() {
    let e12 = [];
    return this._writeString(e12, 0), `[` + e12.join(`,`) + `]`;
  }
  _writeString(e12, t2) {
    return this.parent && (t2 = this.parent._writeString(e12, t2)), e12[t2++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, t2;
  }
  withContentNameScopesList(e12) {
    return this.contentNameScopesList === e12 ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e12);
  }
  withEndRule(t2) {
    return this.endRule === t2 ? this : new _b(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t2, this.nameScopesList, this.contentNameScopesList);
  }
  hasSameRuleAs(e12) {
    let t2 = this;
    for (; t2 && t2._enterPos === e12._enterPos; ) {
      if (t2.ruleId === e12.ruleId) return true;
      t2 = t2.parent;
    }
    return false;
  }
  toStateStackFrame() {
    return { ruleId: Fe(this.ruleId), beginRuleCapturedEOL: this.beginRuleCapturedEOL, endRule: this.endRule, nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [], contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? [] };
  }
  static pushFrame(t2, n2) {
    let r2 = O.fromExtension(t2?.nameScopesList ?? null, n2.nameScopesList);
    return new _b(t2, Pe(n2.ruleId), n2.enterPos ?? -1, n2.anchorPos ?? -1, n2.beginRuleCapturedEOL, n2.endRule, r2, O.fromExtension(r2, n2.contentNameScopesList));
  }
}, __publicField(_b, "NULL", new _b(null, 0, 0, 0, false, null, null, null)), _b), lt = class {
  constructor(e12, t2) {
    __publicField(this, "balancedBracketScopes");
    __publicField(this, "unbalancedBracketScopes");
    __publicField(this, "allowAny", false);
    this.balancedBracketScopes = e12.flatMap((e13) => e13 === `*` ? (this.allowAny = true, []) : x(e13, D).map((e14) => e14.matcher)), this.unbalancedBracketScopes = t2.flatMap((e13) => x(e13, D).map((e14) => e14.matcher));
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(e12) {
    for (let t2 of this.unbalancedBracketScopes) if (t2(e12)) return false;
    for (let t2 of this.balancedBracketScopes) if (t2(e12)) return true;
    return this.allowAny;
  }
}, ut = class {
  constructor(e12, t2, n2, r2) {
    __publicField(this, "_emitBinaryTokens");
    __publicField(this, "_lineText");
    __publicField(this, "_tokens");
    __publicField(this, "_binaryTokens");
    __publicField(this, "_lastTokenEndIndex");
    __publicField(this, "_tokenTypeOverrides");
    this.balancedBracketSelectors = r2, this._emitBinaryTokens = e12, this._tokenTypeOverrides = n2, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
  }
  produce(e12, t2) {
    this.produceFromScopes(e12.contentNameScopesList, t2);
  }
  produceFromScopes(e12, t2) {
    if (this._lastTokenEndIndex >= t2) return;
    if (this._emitBinaryTokens) {
      let n3 = e12?.tokenAttributes ?? 0, r2 = false;
      if (this.balancedBracketSelectors?.matchesAlways && (r2 = true), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
        let t3 = e12?.getScopeNames() ?? [];
        for (let e13 of this._tokenTypeOverrides) e13.matcher(t3) && (n3 = b.set(n3, 0, fe(e13.type), null, -1, 0, 0));
        this.balancedBracketSelectors && (r2 = this.balancedBracketSelectors.match(t3));
      }
      if (r2 && (n3 = b.set(n3, 0, 8, r2, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n3) {
        this._lastTokenEndIndex = t2;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n3), this._lastTokenEndIndex = t2;
      return;
    }
    let n2 = e12?.getScopeNames() ?? [];
    this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t2, scopes: n2 }), this._lastTokenEndIndex = t2;
  }
  getResult(e12, t2) {
    return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t2 - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e12, t2), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
  }
  getBinaryResult(e12, t2) {
    this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t2 - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e12, t2), this._binaryTokens[this._binaryTokens.length - 2] = 0);
    let n2 = new Uint32Array(this._binaryTokens.length);
    for (let e13 = 0, t3 = this._binaryTokens.length; e13 < t3; e13++) n2[e13] = this._binaryTokens[e13];
    return n2;
  }
}, dt = class {
  constructor(e12, t2) {
    __publicField(this, "_grammars", /* @__PURE__ */ new Map());
    __publicField(this, "_rawGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_injectionGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_theme");
    this._onigLib = t2, this._theme = e12;
  }
  dispose() {
    for (let e12 of this._grammars.values()) e12.dispose();
  }
  setTheme(e12) {
    this._theme = e12;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  addGrammar(e12, t2) {
    this._rawGrammars.set(e12.scopeName, e12), t2 && this._injectionGrammars.set(e12.scopeName, t2);
  }
  lookup(e12) {
    return this._rawGrammars.get(e12);
  }
  injections(e12) {
    return this._injectionGrammars.get(e12);
  }
  getDefaults() {
    return this._theme.getDefaults();
  }
  themeMatch(e12) {
    return this._theme.match(e12);
  }
  grammarForScopeName(e12, t2, n2, r2, i2) {
    if (!this._grammars.has(e12)) {
      let a2 = this._rawGrammars.get(e12);
      if (!a2) return null;
      this._grammars.set(e12, rt(e12, a2, t2, n2, r2, i2, this, this._onigLib));
    }
    return this._grammars.get(e12);
  }
}, ft = class {
  constructor(e12) {
    __publicField(this, "_options");
    __publicField(this, "_syncRegistry");
    __publicField(this, "_ensureGrammarCache");
    this._options = e12, this._syncRegistry = new dt(ee.createFromRawTheme(e12.theme, e12.colorMap), e12.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  setTheme(e12, t2) {
    this._syncRegistry.setTheme(ee.createFromRawTheme(e12, t2));
  }
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  loadGrammarWithEmbeddedLanguages(e12, t2, n2) {
    return this.loadGrammarWithConfiguration(e12, t2, { embeddedLanguages: n2 });
  }
  loadGrammarWithConfiguration(e12, t2, n2) {
    return this._loadGrammar(e12, t2, n2.embeddedLanguages, n2.tokenTypes, new lt(n2.balancedBracketSelectors || [], n2.unbalancedBracketSelectors || []));
  }
  loadGrammar(e12) {
    return this._loadGrammar(e12, 0, null, null, null);
  }
  _loadGrammar(e12, t2, n2, r2, i2) {
    let a2 = new ye(this._syncRegistry, e12);
    for (; a2.Q.length > 0; ) a2.Q.map((e13) => this._loadSingleGrammar(e13.scopeName)), a2.processQueue();
    return this._grammarForScopeName(e12, t2, n2, r2, i2);
  }
  _loadSingleGrammar(e12) {
    this._ensureGrammarCache.has(e12) || (this._doLoadSingleGrammar(e12), this._ensureGrammarCache.set(e12, true));
  }
  _doLoadSingleGrammar(e12) {
    let t2 = this._options.loadGrammar(e12);
    if (t2) {
      let n2 = typeof this._options.getInjections == `function` ? this._options.getInjections(e12) : void 0;
      this._syncRegistry.addGrammar(t2, n2);
    }
  }
  addGrammar(e12, t2 = [], n2 = 0, r2 = null) {
    return this._syncRegistry.addGrammar(e12, t2), this._grammarForScopeName(e12.scopeName, n2, r2);
  }
  _grammarForScopeName(e12, t2 = 0, n2 = null, r2 = null, i2 = null) {
    return this._syncRegistry.grammarForScopeName(e12, t2, n2, r2, i2);
  }
}, pt = ct.NULL;
function k(e12, t2) {
  let n2 = typeof e12 == `string` ? {} : { ...e12.colorReplacements }, r2 = typeof e12 == `string` ? e12 : e12.name;
  for (let [e13, i2] of Object.entries(t2?.colorReplacements || {})) typeof i2 == `string` ? n2[e13] = i2 : e13 === r2 && Object.assign(n2, i2);
  return n2;
}
function A(e12, t2) {
  return e12 && (t2?.[e12?.toLowerCase()] || e12);
}
function mt(e12) {
  return Array.isArray(e12) ? e12 : [e12];
}
async function ht(e12) {
  return Promise.resolve(typeof e12 == `function` ? e12() : e12).then((e13) => e13.default || e13);
}
function j(e12) {
  return !e12 || [`plaintext`, `txt`, `text`, `plain`].includes(e12);
}
function gt(e12) {
  return e12 === `ansi` || j(e12);
}
function M(e12) {
  return e12 === `none`;
}
function _t(e12) {
  return M(e12);
}
function N(e12, t2 = false) {
  if (e12.length === 0) return [[``, 0]];
  let n2 = e12.split(/(\r?\n)/g), r2 = 0, i2 = [];
  for (let e13 = 0; e13 < n2.length; e13 += 2) {
    let a2 = t2 ? n2[e13] + (n2[e13 + 1] || ``) : n2[e13];
    i2.push([a2, r2]), r2 += n2[e13].length, r2 += n2[e13 + 1]?.length || 0;
  }
  return i2;
}
var vt = { light: `#333333`, dark: `#bbbbbb` }, yt = { light: `#fffffe`, dark: `#1e1e1e` }, bt = `__shiki_resolved`;
function xt(e12) {
  if (e12?.[bt]) return e12;
  let t2 = { ...e12 };
  t2.tokenColors && !t2.settings && (t2.settings = t2.tokenColors, delete t2.tokenColors), t2.type || (t2.type = `dark`), t2.colorReplacements = { ...t2.colorReplacements }, t2.settings || (t2.settings = []);
  let { bg: n2, fg: r2 } = t2;
  if (!n2 || !r2) {
    let e13 = t2.settings ? t2.settings.find((e14) => !e14.name && !e14.scope) : void 0;
    e13?.settings?.foreground && (r2 = e13.settings.foreground), e13?.settings?.background && (n2 = e13.settings.background), !r2 && t2?.colors?.[`editor.foreground`] && (r2 = t2.colors[`editor.foreground`]), !n2 && t2?.colors?.[`editor.background`] && (n2 = t2.colors[`editor.background`]), r2 || (r2 = t2.type === `light` ? vt.light : vt.dark), n2 || (n2 = t2.type === `light` ? yt.light : yt.dark), t2.fg = r2, t2.bg = n2;
  }
  t2.settings[0] && t2.settings[0].settings && !t2.settings[0].scope || t2.settings.unshift({ settings: { foreground: t2.fg, background: t2.bg } });
  let i2 = 0, a2 = /* @__PURE__ */ new Map();
  function o2(e13) {
    if (a2.has(e13)) return a2.get(e13);
    i2 += 1;
    let n3 = `#${i2.toString(16).padStart(8, `0`).toLowerCase()}`;
    return t2.colorReplacements?.[`#${n3}`] ? o2(e13) : (a2.set(e13, n3), n3);
  }
  t2.settings = t2.settings.map((e13) => {
    let n3 = e13.settings?.foreground && !e13.settings.foreground.startsWith(`#`), r3 = e13.settings?.background && !e13.settings.background.startsWith(`#`);
    if (!n3 && !r3) return e13;
    let i3 = { ...e13, settings: { ...e13.settings } };
    if (n3) {
      let n4 = o2(e13.settings.foreground);
      t2.colorReplacements[n4] = e13.settings.foreground, i3.settings.foreground = n4;
    }
    if (r3) {
      let n4 = o2(e13.settings.background);
      t2.colorReplacements[n4] = e13.settings.background, i3.settings.background = n4;
    }
    return i3;
  });
  for (let e13 of Object.keys(t2.colors || {})) if ((e13 === `editor.foreground` || e13 === `editor.background` || e13.startsWith(`terminal.ansi`)) && !t2.colors[e13]?.startsWith(`#`)) {
    let n3 = o2(t2.colors[e13]);
    t2.colorReplacements[n3] = t2.colors[e13], t2.colors[e13] = n3;
  }
  return Object.defineProperty(t2, bt, { enumerable: false, writable: false, value: true }), t2;
}
async function St(e12) {
  return Array.from(new Set((await Promise.all(e12.filter((e13) => !gt(e13)).map(async (e13) => await ht(e13).then((e14) => Array.isArray(e14) ? e14 : [e14])))).flat()));
}
async function Ct(e12) {
  return (await Promise.all(e12.map(async (e13) => _t(e13) ? null : xt(await ht(e13))))).filter((e13) => !!e13);
}
function wt(e12, t2) {
  if (!t2) return e12;
  if (t2[e12]) {
    let n2 = /* @__PURE__ */ new Set([e12]);
    for (; t2[e12]; ) {
      if (e12 = t2[e12], n2.has(e12)) throw new a(`Circular alias \`${Array.from(n2).join(` -> `)} -> ${e12}\``);
      n2.add(e12);
    }
  }
  return e12;
}
var Tt = class extends ft {
  constructor(e12, t2, n2, r2 = {}) {
    super(e12);
    __publicField(this, "_resolvedThemes", /* @__PURE__ */ new Map());
    __publicField(this, "_resolvedGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_langMap", /* @__PURE__ */ new Map());
    __publicField(this, "_langGraph", /* @__PURE__ */ new Map());
    __publicField(this, "_textmateThemeCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "_loadedThemesCache", null);
    __publicField(this, "_loadedLanguagesCache", null);
    this._resolver = e12, this._themes = t2, this._langs = n2, this._alias = r2, this._themes.map((e13) => this.loadTheme(e13)), this.loadLanguages(this._langs);
  }
  getTheme(e12) {
    return typeof e12 == `string` ? this._resolvedThemes.get(e12) : this.loadTheme(e12);
  }
  loadTheme(e12) {
    let t2 = xt(e12);
    return t2.name && (this._resolvedThemes.set(t2.name, t2), this._loadedThemesCache = null), t2;
  }
  getLoadedThemes() {
    return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
  }
  setTheme(e12) {
    let t2 = this._textmateThemeCache.get(e12);
    t2 || (t2 = ee.createFromRawTheme(e12), this._textmateThemeCache.set(e12, t2)), this._syncRegistry.setTheme(t2);
  }
  getGrammar(e12) {
    return e12 = wt(e12, this._alias), this._resolvedGrammars.get(e12);
  }
  loadLanguage(e12) {
    if (this.getGrammar(e12.name)) return;
    let t2 = new Set([...this._langMap.values()].filter((t3) => t3.embeddedLangsLazy?.includes(e12.name)));
    this._resolver.addLanguage(e12);
    let n2 = { balancedBracketSelectors: e12.balancedBracketSelectors || [`*`], unbalancedBracketSelectors: e12.unbalancedBracketSelectors || [] };
    this._syncRegistry._rawGrammars.set(e12.scopeName, e12);
    let r2 = this.loadGrammarWithConfiguration(e12.scopeName, 1, n2);
    if (r2.name = e12.name, this._resolvedGrammars.set(e12.name, r2), e12.aliases && e12.aliases.forEach((t3) => {
      this._alias[t3] = e12.name;
    }), this._loadedLanguagesCache = null, t2.size) for (let e13 of t2) this._resolvedGrammars.delete(e13.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(e13.scopeName), this._syncRegistry?._grammars?.delete(e13.scopeName), this.loadLanguage(this._langMap.get(e13.name));
  }
  dispose() {
    super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
  }
  loadLanguages(e12) {
    for (let t3 of e12) this.resolveEmbeddedLanguages(t3);
    let t2 = Array.from(this._langGraph.entries()), n2 = t2.filter(([e13, t3]) => !t3);
    if (n2.length) {
      let e13 = t2.filter(([e14, t3]) => t3 ? (t3.embeddedLanguages || t3.embeddedLangs)?.some((e15) => n2.map(([e16]) => e16).includes(e15)) : false).filter((e14) => !n2.includes(e14));
      throw new a(`Missing languages ${n2.map(([e14]) => `\`${e14}\``).join(`, `)}, required by ${e13.map(([e14]) => `\`${e14}\``).join(`, `)}`);
    }
    for (let [e13, n3] of t2) this._resolver.addLanguage(n3);
    for (let [e13, n3] of t2) this.loadLanguage(n3);
  }
  getLoadedLanguages() {
    return this._loadedLanguagesCache || (this._loadedLanguagesCache = [.../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])]), this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(e12) {
    this._langMap.set(e12.name, e12), this._langGraph.set(e12.name, e12);
    let t2 = e12.embeddedLanguages ?? e12.embeddedLangs;
    if (t2) for (let e13 of t2) this._langGraph.set(e13, this._langMap.get(e13));
  }
}, Et = class {
  constructor(e12, t2) {
    __publicField(this, "_langs", /* @__PURE__ */ new Map());
    __publicField(this, "_scopeToLang", /* @__PURE__ */ new Map());
    __publicField(this, "_injections", /* @__PURE__ */ new Map());
    __publicField(this, "_onigLib");
    this._onigLib = { createOnigScanner: (t3) => e12.createScanner(t3), createOnigString: (t3) => e12.createString(t3) }, t2.forEach((e13) => this.addLanguage(e13));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(e12) {
    return this._langs.get(e12);
  }
  loadGrammar(e12) {
    return this._scopeToLang.get(e12);
  }
  addLanguage(e12) {
    this._langs.set(e12.name, e12), e12.aliases && e12.aliases.forEach((t2) => {
      this._langs.set(t2, e12);
    }), this._scopeToLang.set(e12.scopeName, e12), e12.injectTo && e12.injectTo.forEach((t2) => {
      this._injections.get(t2) || this._injections.set(t2, []), this._injections.get(t2).push(e12.scopeName);
    });
  }
  getInjections(e12) {
    let t2 = e12.split(`.`), n2 = [];
    for (let e13 = 1; e13 <= t2.length; e13++) {
      let r2 = t2.slice(0, e13).join(`.`);
      n2 = [...n2, ...this._injections.get(r2) || []];
    }
    return n2;
  }
}, P = 0;
function Dt(e12) {
  P += 1, e12.warnings !== false && P >= 10 && P % 10 == 0 && console.warn(`[Shiki] ${P} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let t2 = false;
  if (!e12.engine) throw new a("`engine` option is required for synchronous mode");
  let n2 = (e12.langs || []).flat(1), r2 = (e12.themes || []).flat(1).map(xt), i2 = new Tt(new Et(e12.engine, n2), r2, n2, e12.langAlias), o2;
  function s2(t3) {
    return wt(t3, e12.langAlias);
  }
  function c2(e13) {
    _2();
    let t3 = i2.getGrammar(typeof e13 == `string` ? e13 : e13.name);
    if (!t3) throw new a(`Language \`${e13}\` not found, you may need to load it first`);
    return t3;
  }
  function l2(e13) {
    if (e13 === `none`) return { bg: ``, fg: ``, name: `none`, settings: [], type: `dark` };
    _2();
    let t3 = i2.getTheme(e13);
    if (!t3) throw new a(`Theme \`${e13}\` not found, you may need to load it first`);
    return t3;
  }
  function u2(e13) {
    _2();
    let t3 = l2(e13);
    return o2 !== e13 && (i2.setTheme(t3), o2 = e13), { theme: t3, colorMap: i2.getColorMap() };
  }
  function d2() {
    return _2(), i2.getLoadedThemes();
  }
  function f2() {
    return _2(), i2.getLoadedLanguages();
  }
  function p2(...e13) {
    _2(), i2.loadLanguages(e13.flat(1));
  }
  async function m2(...e13) {
    return p2(await St(e13));
  }
  function h2(...e13) {
    _2();
    for (let t3 of e13.flat(1)) i2.loadTheme(t3);
  }
  async function g2(...e13) {
    return _2(), h2(await Ct(e13));
  }
  function _2() {
    if (t2) throw new a(`Shiki instance has been disposed`);
  }
  function v2() {
    t2 || (t2 = true, i2.dispose(), --P);
  }
  return { setTheme: u2, getTheme: l2, getLanguage: c2, getLoadedThemes: d2, getLoadedLanguages: f2, resolveLangAlias: s2, loadLanguage: m2, loadLanguageSync: p2, loadTheme: g2, loadThemeSync: h2, dispose: v2, [Symbol.dispose]: v2 };
}
async function Ot(e12) {
  e12.engine || console.warn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  let [t2, n2, r2] = await Promise.all([Ct(e12.themes || []), St(e12.langs || []), e12.engine]);
  return Dt({ ...e12, themes: t2, langs: n2, engine: r2 });
}
var kt = /* @__PURE__ */ new WeakMap();
function F(e12, t2) {
  kt.set(e12, t2);
}
function I(e12) {
  return kt.get(e12);
}
var L = class e9 {
  constructor(...e12) {
    __publicField(this, "_stacks", {});
    __publicField(this, "lang");
    if (e12.length === 2) {
      let [t2, n2] = e12;
      this.lang = n2, this._stacks = t2;
    } else {
      let [t2, n2, r2] = e12;
      this.lang = n2, this._stacks = { [r2]: t2 };
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  static initial(t2, n2) {
    return new e9(Object.fromEntries(mt(n2).map((e12) => [e12, pt])), t2);
  }
  getInternalStack(e12 = this.theme) {
    return this._stacks[e12];
  }
  getScopes(e12 = this.theme) {
    return At(this._stacks[e12]);
  }
  toJSON() {
    return { lang: this.lang, theme: this.theme, themes: this.themes, scopes: this.getScopes() };
  }
};
function At(e12) {
  let t2 = [], n2 = /* @__PURE__ */ new Set();
  function r2(e13) {
    if (n2.has(e13)) return;
    n2.add(e13);
    let i2 = e13?.nameScopesList?.scopeName;
    i2 && t2.push(i2), e13.parent && r2(e13.parent);
  }
  return r2(e12), t2;
}
function jt(e12, t2) {
  if (!(e12 instanceof L)) throw new a(`Invalid grammar state`);
  return e12.getInternalStack(t2);
}
function Mt(e12, t2, n2 = {}) {
  let { theme: r2 = e12.getLoadedThemes()[0] } = n2;
  if (j(e12.resolveLangAlias(n2.lang || `text`)) || M(r2)) return N(t2).map((e13) => [{ content: e13[0], offset: e13[1] }]);
  let { theme: i2, colorMap: o2 } = e12.setTheme(r2), s2 = e12.getLanguage(n2.lang || `text`);
  if (n2.grammarState) {
    if (n2.grammarState.lang !== s2.name) throw new a(`Grammar state language "${n2.grammarState.lang}" does not match highlight language "${s2.name}"`);
    if (!n2.grammarState.themes.includes(i2.name)) throw new a(`Grammar state themes "${n2.grammarState.themes}" do not contain highlight theme "${i2.name}"`);
  }
  return Pt(t2, s2, i2, o2, n2);
}
function Nt(...e12) {
  if (e12.length === 2) return I(e12[1]);
  let [t2, n2, r2 = {}] = e12, { lang: i2 = `text`, theme: o2 = t2.getLoadedThemes()[0] } = r2;
  if (j(i2) || M(o2)) throw new a(`Plain language does not have grammar state`);
  if (i2 === `ansi`) throw new a(`ANSI language does not have grammar state`);
  let { theme: s2, colorMap: c2 } = t2.setTheme(o2), l2 = t2.getLanguage(i2);
  return new L(Ft(n2, l2, s2, c2, r2).stateStack, l2.name, s2.name);
}
function Pt(e12, t2, n2, r2, i2) {
  let a2 = Ft(e12, t2, n2, r2, i2), o2 = new L(a2.stateStack, t2.name, n2.name);
  return F(a2.tokens, o2), a2.tokens;
}
function Ft(e12, t2, n2, r2, i2) {
  let a2 = k(n2, i2), { tokenizeMaxLineLength: o2 = 0, tokenizeTimeLimit: s2 = 500 } = i2, c2 = N(e12), l2 = i2.grammarState ? jt(i2.grammarState, n2.name) ?? pt : i2.grammarContextCode == null ? pt : Ft(i2.grammarContextCode, t2, n2, r2, { ...i2, grammarState: void 0, grammarContextCode: void 0 }).stateStack, u2 = [], d2 = [];
  for (let e13 = 0, f2 = c2.length; e13 < f2; e13++) {
    let [f3, p2] = c2[e13];
    if (f3 === ``) {
      u2 = [], d2.push([]);
      continue;
    }
    if (o2 > 0 && f3.length >= o2) {
      u2 = [], d2.push([{ content: f3, offset: p2, color: ``, fontStyle: 0 }]);
      continue;
    }
    let m2, h2, g2;
    i2.includeExplanation && (m2 = t2.tokenizeLine(f3, l2, s2), h2 = m2.tokens, g2 = 0);
    let _2 = t2.tokenizeLine2(f3, l2, s2), v2 = _2.tokens.length / 2;
    for (let e14 = 0; e14 < v2; e14++) {
      let t3 = _2.tokens[2 * e14], o3 = e14 + 1 < v2 ? _2.tokens[2 * e14 + 2] : f3.length;
      if (t3 === o3) continue;
      let s3 = _2.tokens[2 * e14 + 1], c3 = A(r2[b.getForeground(s3)], a2), l3 = b.getFontStyle(s3), d3 = { content: f3.substring(t3, o3), offset: p2 + t3, color: c3, fontStyle: l3 };
      if (i2.includeExplanation) {
        let e15 = [];
        if (i2.includeExplanation !== `scopeName`) for (let t4 of n2.settings) {
          let n3;
          switch (typeof t4.scope) {
            case `string`:
              n3 = t4.scope.split(/,/).map((e16) => e16.trim());
              break;
            case `object`:
              n3 = t4.scope;
              break;
            default:
              continue;
          }
          e15.push({ settings: t4, selectors: n3.map((e16) => e16.split(/ /)) });
        }
        d3.explanation = [];
        let r3 = 0;
        for (; t3 + r3 < o3; ) {
          let t4 = h2[g2], n3 = f3.substring(t4.startIndex, t4.endIndex);
          r3 += n3.length, d3.explanation.push({ content: n3, scopes: i2.includeExplanation === `scopeName` ? It(t4.scopes) : Lt(e15, t4.scopes) }), g2 += 1;
        }
      }
      u2.push(d3);
    }
    d2.push(u2), u2 = [], l2 = _2.ruleStack;
  }
  return { tokens: d2, stateStack: l2 };
}
function It(e12) {
  return e12.map((e13) => ({ scopeName: e13 }));
}
function Lt(e12, t2) {
  let n2 = [];
  for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) {
    let i3 = t2[r2];
    n2[r2] = { scopeName: i3, themeMatches: Bt(e12, i3, t2.slice(0, r2)) };
  }
  return n2;
}
function Rt(e12, t2) {
  return e12 === t2 || t2.substring(0, e12.length) === e12 && t2[e12.length] === `.`;
}
function zt(e12, t2, n2) {
  if (!Rt(e12[e12.length - 1], t2)) return false;
  let r2 = e12.length - 2, i2 = n2.length - 1;
  for (; r2 >= 0 && i2 >= 0; ) Rt(e12[r2], n2[i2]) && --r2, --i2;
  return r2 === -1;
}
function Bt(e12, t2, n2) {
  let r2 = [];
  for (let { selectors: i2, settings: a2 } of e12) for (let e13 of i2) if (zt(e13, t2, n2)) {
    r2.push(a2);
    break;
  }
  return r2;
}
function Vt(e12, t2, n2, r2 = Mt) {
  let i2 = Object.entries(n2.themes).filter((e13) => e13[1]).map((e13) => ({ color: e13[0], theme: e13[1] })), a2 = i2.map((i3) => {
    let a3 = r2(e12, t2, { ...n2, theme: i3.theme });
    return { tokens: a3, state: I(a3), theme: typeof i3.theme == `string` ? i3.theme : i3.theme.name };
  }), o2 = Ht(...a2.map((e13) => e13.tokens)), s2 = o2[0].map((e13, t3) => e13.map((e14, r3) => {
    let a3 = { content: e14.content, variants: {}, offset: e14.offset };
    return `includeExplanation` in n2 && n2.includeExplanation && (a3.explanation = e14.explanation), o2.forEach((e15, n3) => {
      let { content: o3, explanation: s3, offset: c3, ...l2 } = e15[t3][r3];
      a3.variants[i2[n3].color] = l2;
    }), a3;
  })), c2 = a2[0].state ? new L(Object.fromEntries(a2.map((e13) => [e13.theme, e13.state?.getInternalStack(e13.theme)])), a2[0].state.lang) : void 0;
  return c2 && F(s2, c2), s2;
}
function Ht(...e12) {
  let t2 = e12.map(() => []), n2 = e12.length;
  for (let r2 = 0; r2 < e12[0].length; r2++) {
    let i2 = e12.map((e13) => e13[r2]), a2 = t2.map(() => []);
    t2.forEach((e13, t3) => e13.push(a2[t3]));
    let o2 = i2.map(() => 0), s2 = i2.map((e13) => e13[0]);
    for (; s2.every((e13) => e13); ) {
      let e13 = Math.min(...s2.map((e14) => e14.content.length));
      for (let t3 = 0; t3 < n2; t3++) {
        let n3 = s2[t3];
        n3.content.length === e13 ? (a2[t3].push(n3), o2[t3] += 1, s2[t3] = i2[t3][o2[t3]]) : (a2[t3].push({ ...n3, content: n3.content.slice(0, e13) }), s2[t3] = { ...n3, content: n3.content.slice(e13), offset: n3.offset + e13 });
      }
    }
  }
  return t2;
}
var Ut = [`area`, `base`, `basefont`, `bgsound`, `br`, `col`, `command`, `embed`, `frame`, `hr`, `image`, `img`, `input`, `keygen`, `link`, `meta`, `param`, `source`, `track`, `wbr`], R = class {
  constructor(e12, t2, n2) {
    this.normal = t2, this.property = e12, n2 && (this.space = n2);
  }
};
R.prototype.normal = {}, R.prototype.property = {}, R.prototype.space = void 0;
function Wt(e12, t2) {
  let n2 = {}, r2 = {};
  for (let t3 of e12) Object.assign(n2, t3.property), Object.assign(r2, t3.normal);
  return new R(n2, r2, t2);
}
function Gt(e12) {
  return e12.toLowerCase();
}
var z = class {
  constructor(e12, t2) {
    this.attribute = t2, this.property = e12;
  }
};
z.prototype.attribute = ``, z.prototype.booleanish = false, z.prototype.boolean = false, z.prototype.commaOrSpaceSeparated = false, z.prototype.commaSeparated = false, z.prototype.defined = false, z.prototype.mustUseProperty = false, z.prototype.number = false, z.prototype.overloadedBoolean = false, z.prototype.property = ``, z.prototype.spaceSeparated = false, z.prototype.space = void 0;
var Kt = e({ boolean: () => B, booleanish: () => V, commaOrSpaceSeparated: () => G, commaSeparated: () => W, number: () => H, overloadedBoolean: () => Jt, spaceSeparated: () => U }), qt = 0, B = K(), V = K(), Jt = K(), H = K(), U = K(), W = K(), G = K();
function K() {
  return 2 ** ++qt;
}
var Yt = Object.keys(Kt), Xt = class extends z {
  constructor(e12, t2, n2, r2) {
    let i2 = -1;
    if (super(e12, t2), Zt(this, `space`, r2), typeof n2 == `number`) for (; ++i2 < Yt.length; ) {
      let e13 = Yt[i2];
      Zt(this, Yt[i2], (n2 & Kt[e13]) === Kt[e13]);
    }
  }
};
Xt.prototype.defined = true;
function Zt(e12, t2, n2) {
  n2 && (e12[t2] = n2);
}
function q(e12) {
  let t2 = {}, n2 = {};
  for (let [r2, i2] of Object.entries(e12.properties)) {
    let a2 = new Xt(r2, e12.transform(e12.attributes || {}, r2), i2, e12.space);
    e12.mustUseProperty && e12.mustUseProperty.includes(r2) && (a2.mustUseProperty = true), t2[r2] = a2, n2[Gt(r2)] = r2, n2[Gt(a2.attribute)] = r2;
  }
  return new R(t2, n2, e12.space);
}
var Qt = q({ properties: { ariaActiveDescendant: null, ariaAtomic: V, ariaAutoComplete: null, ariaBusy: V, ariaChecked: V, ariaColCount: H, ariaColIndex: H, ariaColSpan: H, ariaControls: U, ariaCurrent: null, ariaDescribedBy: U, ariaDetails: null, ariaDisabled: V, ariaDropEffect: U, ariaErrorMessage: null, ariaExpanded: V, ariaFlowTo: U, ariaGrabbed: V, ariaHasPopup: null, ariaHidden: V, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: U, ariaLevel: H, ariaLive: null, ariaModal: V, ariaMultiLine: V, ariaMultiSelectable: V, ariaOrientation: null, ariaOwns: U, ariaPlaceholder: null, ariaPosInSet: H, ariaPressed: V, ariaReadOnly: V, ariaRelevant: null, ariaRequired: V, ariaRoleDescription: U, ariaRowCount: H, ariaRowIndex: H, ariaRowSpan: H, ariaSelected: V, ariaSetSize: H, ariaSort: null, ariaValueMax: H, ariaValueMin: H, ariaValueNow: H, ariaValueText: null, role: null }, transform(e12, t2) {
  return t2 === `role` ? t2 : `aria-` + t2.slice(4).toLowerCase();
} });
function $t(e12, t2) {
  return t2 in e12 ? e12[t2] : t2;
}
function en(e12, t2) {
  return $t(e12, t2.toLowerCase());
}
var tn = q({ attributes: { acceptcharset: `accept-charset`, classname: `class`, htmlfor: `for`, httpequiv: `http-equiv` }, mustUseProperty: [`checked`, `multiple`, `muted`, `selected`], properties: { abbr: null, accept: W, acceptCharset: U, accessKey: U, action: null, allow: null, allowFullScreen: B, allowPaymentRequest: B, allowUserMedia: B, alt: null, as: null, async: B, autoCapitalize: null, autoComplete: U, autoFocus: B, autoPlay: B, blocking: U, capture: null, charSet: null, checked: B, cite: null, className: U, cols: H, colSpan: null, content: null, contentEditable: V, controls: B, controlsList: U, coords: H | W, crossOrigin: null, data: null, dateTime: null, decoding: null, default: B, defer: B, dir: null, dirName: null, disabled: B, download: Jt, draggable: V, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: B, formTarget: null, headers: U, height: H, hidden: Jt, high: H, href: null, hrefLang: null, htmlFor: U, httpEquiv: U, id: null, imageSizes: null, imageSrcSet: null, inert: B, inputMode: null, integrity: null, is: null, isMap: B, itemId: null, itemProp: U, itemRef: U, itemScope: B, itemType: U, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: B, low: H, manifest: null, max: null, maxLength: H, media: null, method: null, min: null, minLength: H, multiple: B, muted: B, name: null, nonce: null, noModule: B, noValidate: B, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: B, optimum: H, pattern: null, ping: U, placeholder: null, playsInline: B, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: B, referrerPolicy: null, rel: U, required: B, reversed: B, rows: H, rowSpan: H, sandbox: U, scope: null, scoped: B, seamless: B, selected: B, shadowRootClonable: B, shadowRootDelegatesFocus: B, shadowRootMode: null, shape: null, size: H, sizes: null, slot: null, span: H, spellCheck: V, src: null, srcDoc: null, srcLang: null, srcSet: null, start: H, step: null, style: null, tabIndex: H, target: null, title: null, translate: null, type: null, typeMustMatch: B, useMap: null, value: V, width: H, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: U, axis: null, background: null, bgColor: null, border: H, borderColor: null, bottomMargin: H, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: B, declare: B, event: null, face: null, frame: null, frameBorder: null, hSpace: H, leftMargin: H, link: null, longDesc: null, lowSrc: null, marginHeight: H, marginWidth: H, noResize: B, noHref: B, noShade: B, noWrap: B, object: null, profile: null, prompt: null, rev: null, rightMargin: H, rules: null, scheme: null, scrolling: V, standby: null, summary: null, text: null, topMargin: H, valueType: null, version: null, vAlign: null, vLink: null, vSpace: H, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: B, disableRemotePlayback: B, prefix: null, property: null, results: H, security: null, unselectable: null }, space: `html`, transform: en }), nn = q({ attributes: { accentHeight: `accent-height`, alignmentBaseline: `alignment-baseline`, arabicForm: `arabic-form`, baselineShift: `baseline-shift`, capHeight: `cap-height`, className: `class`, clipPath: `clip-path`, clipRule: `clip-rule`, colorInterpolation: `color-interpolation`, colorInterpolationFilters: `color-interpolation-filters`, colorProfile: `color-profile`, colorRendering: `color-rendering`, crossOrigin: `crossorigin`, dataType: `datatype`, dominantBaseline: `dominant-baseline`, enableBackground: `enable-background`, fillOpacity: `fill-opacity`, fillRule: `fill-rule`, floodColor: `flood-color`, floodOpacity: `flood-opacity`, fontFamily: `font-family`, fontSize: `font-size`, fontSizeAdjust: `font-size-adjust`, fontStretch: `font-stretch`, fontStyle: `font-style`, fontVariant: `font-variant`, fontWeight: `font-weight`, glyphName: `glyph-name`, glyphOrientationHorizontal: `glyph-orientation-horizontal`, glyphOrientationVertical: `glyph-orientation-vertical`, hrefLang: `hreflang`, horizAdvX: `horiz-adv-x`, horizOriginX: `horiz-origin-x`, horizOriginY: `horiz-origin-y`, imageRendering: `image-rendering`, letterSpacing: `letter-spacing`, lightingColor: `lighting-color`, markerEnd: `marker-end`, markerMid: `marker-mid`, markerStart: `marker-start`, navDown: `nav-down`, navDownLeft: `nav-down-left`, navDownRight: `nav-down-right`, navLeft: `nav-left`, navNext: `nav-next`, navPrev: `nav-prev`, navRight: `nav-right`, navUp: `nav-up`, navUpLeft: `nav-up-left`, navUpRight: `nav-up-right`, onAbort: `onabort`, onActivate: `onactivate`, onAfterPrint: `onafterprint`, onBeforePrint: `onbeforeprint`, onBegin: `onbegin`, onCancel: `oncancel`, onCanPlay: `oncanplay`, onCanPlayThrough: `oncanplaythrough`, onChange: `onchange`, onClick: `onclick`, onClose: `onclose`, onCopy: `oncopy`, onCueChange: `oncuechange`, onCut: `oncut`, onDblClick: `ondblclick`, onDrag: `ondrag`, onDragEnd: `ondragend`, onDragEnter: `ondragenter`, onDragExit: `ondragexit`, onDragLeave: `ondragleave`, onDragOver: `ondragover`, onDragStart: `ondragstart`, onDrop: `ondrop`, onDurationChange: `ondurationchange`, onEmptied: `onemptied`, onEnd: `onend`, onEnded: `onended`, onError: `onerror`, onFocus: `onfocus`, onFocusIn: `onfocusin`, onFocusOut: `onfocusout`, onHashChange: `onhashchange`, onInput: `oninput`, onInvalid: `oninvalid`, onKeyDown: `onkeydown`, onKeyPress: `onkeypress`, onKeyUp: `onkeyup`, onLoad: `onload`, onLoadedData: `onloadeddata`, onLoadedMetadata: `onloadedmetadata`, onLoadStart: `onloadstart`, onMessage: `onmessage`, onMouseDown: `onmousedown`, onMouseEnter: `onmouseenter`, onMouseLeave: `onmouseleave`, onMouseMove: `onmousemove`, onMouseOut: `onmouseout`, onMouseOver: `onmouseover`, onMouseUp: `onmouseup`, onMouseWheel: `onmousewheel`, onOffline: `onoffline`, onOnline: `ononline`, onPageHide: `onpagehide`, onPageShow: `onpageshow`, onPaste: `onpaste`, onPause: `onpause`, onPlay: `onplay`, onPlaying: `onplaying`, onPopState: `onpopstate`, onProgress: `onprogress`, onRateChange: `onratechange`, onRepeat: `onrepeat`, onReset: `onreset`, onResize: `onresize`, onScroll: `onscroll`, onSeeked: `onseeked`, onSeeking: `onseeking`, onSelect: `onselect`, onShow: `onshow`, onStalled: `onstalled`, onStorage: `onstorage`, onSubmit: `onsubmit`, onSuspend: `onsuspend`, onTimeUpdate: `ontimeupdate`, onToggle: `ontoggle`, onUnload: `onunload`, onVolumeChange: `onvolumechange`, onWaiting: `onwaiting`, onZoom: `onzoom`, overlinePosition: `overline-position`, overlineThickness: `overline-thickness`, paintOrder: `paint-order`, panose1: `panose-1`, pointerEvents: `pointer-events`, referrerPolicy: `referrerpolicy`, renderingIntent: `rendering-intent`, shapeRendering: `shape-rendering`, stopColor: `stop-color`, stopOpacity: `stop-opacity`, strikethroughPosition: `strikethrough-position`, strikethroughThickness: `strikethrough-thickness`, strokeDashArray: `stroke-dasharray`, strokeDashOffset: `stroke-dashoffset`, strokeLineCap: `stroke-linecap`, strokeLineJoin: `stroke-linejoin`, strokeMiterLimit: `stroke-miterlimit`, strokeOpacity: `stroke-opacity`, strokeWidth: `stroke-width`, tabIndex: `tabindex`, textAnchor: `text-anchor`, textDecoration: `text-decoration`, textRendering: `text-rendering`, transformOrigin: `transform-origin`, typeOf: `typeof`, underlinePosition: `underline-position`, underlineThickness: `underline-thickness`, unicodeBidi: `unicode-bidi`, unicodeRange: `unicode-range`, unitsPerEm: `units-per-em`, vAlphabetic: `v-alphabetic`, vHanging: `v-hanging`, vIdeographic: `v-ideographic`, vMathematical: `v-mathematical`, vectorEffect: `vector-effect`, vertAdvY: `vert-adv-y`, vertOriginX: `vert-origin-x`, vertOriginY: `vert-origin-y`, wordSpacing: `word-spacing`, writingMode: `writing-mode`, xHeight: `x-height`, playbackOrder: `playbackorder`, timelineBegin: `timelinebegin` }, properties: { about: G, accentHeight: H, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: H, amplitude: H, arabicForm: null, ascent: H, attributeName: null, attributeType: null, azimuth: H, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: H, by: null, calcMode: null, capHeight: H, className: U, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: H, diffuseConstant: H, direction: null, display: null, dur: null, divisor: H, dominantBaseline: null, download: B, dx: null, dy: null, edgeMode: null, editable: null, elevation: H, enableBackground: null, end: null, event: null, exponent: H, externalResourcesRequired: null, fill: null, fillOpacity: H, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: W, g2: W, glyphName: W, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: H, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: H, horizOriginX: H, horizOriginY: H, id: null, ideographic: H, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: H, k: H, k1: H, k2: H, k3: H, k4: H, kernelMatrix: G, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: H, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: H, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: H, overlineThickness: H, paintOrder: null, panose1: null, path: null, pathLength: H, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: U, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: H, pointsAtY: H, pointsAtZ: H, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: G, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: G, rev: G, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: G, requiredFeatures: G, requiredFonts: G, requiredFormats: G, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: H, specularExponent: H, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: H, strikethroughThickness: H, string: null, stroke: null, strokeDashArray: G, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: H, strokeOpacity: H, strokeWidth: null, style: null, surfaceScale: H, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: G, tabIndex: H, tableValues: null, target: null, targetX: H, targetY: H, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: G, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: H, underlineThickness: H, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: H, values: null, vAlphabetic: H, vMathematical: H, vectorEffect: null, vHanging: H, vIdeographic: H, version: null, vertAdvY: H, vertOriginX: H, vertOriginY: H, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: H, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null }, space: `svg`, transform: $t }), rn = q({ properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null }, space: `xlink`, transform(e12, t2) {
  return `xlink:` + t2.slice(5).toLowerCase();
} }), an = q({ attributes: { xmlnsxlink: `xmlns:xlink` }, properties: { xmlnsXLink: null, xmlns: null }, space: `xmlns`, transform: en }), on = q({ properties: { xmlBase: null, xmlLang: null, xmlSpace: null }, space: `xml`, transform(e12, t2) {
  return `xml:` + t2.slice(3).toLowerCase();
} }), sn = /[A-Z]/g, cn = /-[a-z]/g, ln = /^data[-\w.:]+$/i;
function un(e12, t2) {
  let n2 = Gt(t2), r2 = t2, i2 = z;
  if (n2 in e12.normal) return e12.property[e12.normal[n2]];
  if (n2.length > 4 && n2.slice(0, 4) === `data` && ln.test(t2)) {
    if (t2.charAt(4) === `-`) {
      let e13 = t2.slice(5).replace(cn, fn);
      r2 = `data` + e13.charAt(0).toUpperCase() + e13.slice(1);
    } else {
      let e13 = t2.slice(4);
      if (!cn.test(e13)) {
        let n3 = e13.replace(sn, dn);
        n3.charAt(0) !== `-` && (n3 = `-` + n3), t2 = `data` + n3;
      }
    }
    i2 = Xt;
  }
  return new i2(r2, t2);
}
function dn(e12) {
  return `-` + e12.toLowerCase();
}
function fn(e12) {
  return e12.charAt(1).toUpperCase();
}
var pn = Wt([Qt, tn, rn, an, on], `html`), mn = Wt([Qt, nn, rn, an, on], `svg`), hn = {}.hasOwnProperty;
function gn(e12, t2) {
  let n2 = t2 || {};
  function r2(t3, ...n3) {
    let i2 = r2.invalid, a2 = r2.handlers;
    if (t3 && hn.call(t3, e12)) {
      let n4 = String(t3[e12]);
      i2 = hn.call(a2, n4) ? a2[n4] : r2.unknown;
    }
    if (i2) return i2.call(this, t3, ...n3);
  }
  return r2.handlers = n2.handlers || {}, r2.invalid = n2.invalid, r2.unknown = n2.unknown, r2;
}
var _n = /["&'<>`]/g, vn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, yn = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, bn = /[|\\{}()[\]^$+*?.]/g, xn = /* @__PURE__ */ new WeakMap();
function Sn(e12, t2) {
  if (e12 = e12.replace(t2.subset ? Cn(t2.subset) : _n, r2), t2.subset || t2.escapeOnly) return e12;
  return e12.replace(vn, n2).replace(yn, r2);
  function n2(e13, n3, r3) {
    return t2.format((e13.charCodeAt(0) - 55296) * 1024 + e13.charCodeAt(1) - 56320 + 65536, r3.charCodeAt(n3 + 2), t2);
  }
  function r2(e13, n3, r3) {
    return t2.format(e13.charCodeAt(0), r3.charCodeAt(n3 + 1), t2);
  }
}
function Cn(e12) {
  let t2 = xn.get(e12);
  return t2 || (t2 = wn(e12), xn.set(e12, t2)), t2;
}
function wn(e12) {
  let t2 = [], n2 = -1;
  for (; ++n2 < e12.length; ) t2.push(e12[n2].replace(bn, `\\$&`));
  return RegExp(`(?:` + t2.join(`|`) + `)`, `g`);
}
var Tn = /[\dA-Fa-f]/;
function En(e12, t2, n2) {
  let r2 = `&#x` + e12.toString(16).toUpperCase();
  return n2 && t2 && !Tn.test(String.fromCharCode(t2)) ? r2 : r2 + `;`;
}
var Dn = /\d/;
function On(e12, t2, n2) {
  let r2 = `&#` + String(e12);
  return n2 && t2 && !Dn.test(String.fromCharCode(t2)) ? r2 : r2 + `;`;
}
var kn = `AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml`.split(`.`), An = { nbsp: `\xA0`, iexcl: `\xA1`, cent: `\xA2`, pound: `\xA3`, curren: `\xA4`, yen: `\xA5`, brvbar: `\xA6`, sect: `\xA7`, uml: `\xA8`, copy: `\xA9`, ordf: `\xAA`, laquo: `\xAB`, not: `\xAC`, shy: `\xAD`, reg: `\xAE`, macr: `\xAF`, deg: `\xB0`, plusmn: `\xB1`, sup2: `\xB2`, sup3: `\xB3`, acute: `\xB4`, micro: `\xB5`, para: `\xB6`, middot: `\xB7`, cedil: `\xB8`, sup1: `\xB9`, ordm: `\xBA`, raquo: `\xBB`, frac14: `\xBC`, frac12: `\xBD`, frac34: `\xBE`, iquest: `\xBF`, Agrave: `\xC0`, Aacute: `\xC1`, Acirc: `\xC2`, Atilde: `\xC3`, Auml: `\xC4`, Aring: `\xC5`, AElig: `\xC6`, Ccedil: `\xC7`, Egrave: `\xC8`, Eacute: `\xC9`, Ecirc: `\xCA`, Euml: `\xCB`, Igrave: `\xCC`, Iacute: `\xCD`, Icirc: `\xCE`, Iuml: `\xCF`, ETH: `\xD0`, Ntilde: `\xD1`, Ograve: `\xD2`, Oacute: `\xD3`, Ocirc: `\xD4`, Otilde: `\xD5`, Ouml: `\xD6`, times: `\xD7`, Oslash: `\xD8`, Ugrave: `\xD9`, Uacute: `\xDA`, Ucirc: `\xDB`, Uuml: `\xDC`, Yacute: `\xDD`, THORN: `\xDE`, szlig: `\xDF`, agrave: `\xE0`, aacute: `\xE1`, acirc: `\xE2`, atilde: `\xE3`, auml: `\xE4`, aring: `\xE5`, aelig: `\xE6`, ccedil: `\xE7`, egrave: `\xE8`, eacute: `\xE9`, ecirc: `\xEA`, euml: `\xEB`, igrave: `\xEC`, iacute: `\xED`, icirc: `\xEE`, iuml: `\xEF`, eth: `\xF0`, ntilde: `\xF1`, ograve: `\xF2`, oacute: `\xF3`, ocirc: `\xF4`, otilde: `\xF5`, ouml: `\xF6`, divide: `\xF7`, oslash: `\xF8`, ugrave: `\xF9`, uacute: `\xFA`, ucirc: `\xFB`, uuml: `\xFC`, yacute: `\xFD`, thorn: `\xFE`, yuml: `\xFF`, fnof: `\u0192`, Alpha: `\u0391`, Beta: `\u0392`, Gamma: `\u0393`, Delta: `\u0394`, Epsilon: `\u0395`, Zeta: `\u0396`, Eta: `\u0397`, Theta: `\u0398`, Iota: `\u0399`, Kappa: `\u039A`, Lambda: `\u039B`, Mu: `\u039C`, Nu: `\u039D`, Xi: `\u039E`, Omicron: `\u039F`, Pi: `\u03A0`, Rho: `\u03A1`, Sigma: `\u03A3`, Tau: `\u03A4`, Upsilon: `\u03A5`, Phi: `\u03A6`, Chi: `\u03A7`, Psi: `\u03A8`, Omega: `\u03A9`, alpha: `\u03B1`, beta: `\u03B2`, gamma: `\u03B3`, delta: `\u03B4`, epsilon: `\u03B5`, zeta: `\u03B6`, eta: `\u03B7`, theta: `\u03B8`, iota: `\u03B9`, kappa: `\u03BA`, lambda: `\u03BB`, mu: `\u03BC`, nu: `\u03BD`, xi: `\u03BE`, omicron: `\u03BF`, pi: `\u03C0`, rho: `\u03C1`, sigmaf: `\u03C2`, sigma: `\u03C3`, tau: `\u03C4`, upsilon: `\u03C5`, phi: `\u03C6`, chi: `\u03C7`, psi: `\u03C8`, omega: `\u03C9`, thetasym: `\u03D1`, upsih: `\u03D2`, piv: `\u03D6`, bull: `\u2022`, hellip: `\u2026`, prime: `\u2032`, Prime: `\u2033`, oline: `\u203E`, frasl: `\u2044`, weierp: `\u2118`, image: `\u2111`, real: `\u211C`, trade: `\u2122`, alefsym: `\u2135`, larr: `\u2190`, uarr: `\u2191`, rarr: `\u2192`, darr: `\u2193`, harr: `\u2194`, crarr: `\u21B5`, lArr: `\u21D0`, uArr: `\u21D1`, rArr: `\u21D2`, dArr: `\u21D3`, hArr: `\u21D4`, forall: `\u2200`, part: `\u2202`, exist: `\u2203`, empty: `\u2205`, nabla: `\u2207`, isin: `\u2208`, notin: `\u2209`, ni: `\u220B`, prod: `\u220F`, sum: `\u2211`, minus: `\u2212`, lowast: `\u2217`, radic: `\u221A`, prop: `\u221D`, infin: `\u221E`, ang: `\u2220`, and: `\u2227`, or: `\u2228`, cap: `\u2229`, cup: `\u222A`, int: `\u222B`, there4: `\u2234`, sim: `\u223C`, cong: `\u2245`, asymp: `\u2248`, ne: `\u2260`, equiv: `\u2261`, le: `\u2264`, ge: `\u2265`, sub: `\u2282`, sup: `\u2283`, nsub: `\u2284`, sube: `\u2286`, supe: `\u2287`, oplus: `\u2295`, otimes: `\u2297`, perp: `\u22A5`, sdot: `\u22C5`, lceil: `\u2308`, rceil: `\u2309`, lfloor: `\u230A`, rfloor: `\u230B`, lang: `\u2329`, rang: `\u232A`, loz: `\u25CA`, spades: `\u2660`, clubs: `\u2663`, hearts: `\u2665`, diams: `\u2666`, quot: `"`, amp: `&`, lt: `<`, gt: `>`, OElig: `\u0152`, oelig: `\u0153`, Scaron: `\u0160`, scaron: `\u0161`, Yuml: `\u0178`, circ: `\u02C6`, tilde: `\u02DC`, ensp: `\u2002`, emsp: `\u2003`, thinsp: `\u2009`, zwnj: `\u200C`, zwj: `\u200D`, lrm: `\u200E`, rlm: `\u200F`, ndash: `\u2013`, mdash: `\u2014`, lsquo: `\u2018`, rsquo: `\u2019`, sbquo: `\u201A`, ldquo: `\u201C`, rdquo: `\u201D`, bdquo: `\u201E`, dagger: `\u2020`, Dagger: `\u2021`, permil: `\u2030`, lsaquo: `\u2039`, rsaquo: `\u203A`, euro: `\u20AC` }, jn = [`cent`, `copy`, `divide`, `gt`, `lt`, `not`, `para`, `times`], Mn = {}.hasOwnProperty, Nn = {}, Pn;
for (Pn in An) Mn.call(An, Pn) && (Nn[An[Pn]] = Pn);
var Fn = /[^\dA-Za-z]/;
function In(e12, t2, n2, r2) {
  let i2 = String.fromCharCode(e12);
  if (Mn.call(Nn, i2)) {
    let e13 = Nn[i2], a2 = `&` + e13;
    return n2 && kn.includes(e13) && !jn.includes(e13) && (!r2 || t2 && t2 !== 61 && Fn.test(String.fromCharCode(t2))) ? a2 : a2 + `;`;
  }
  return ``;
}
function Ln(e12, t2, n2) {
  let r2 = En(e12, t2, n2.omitOptionalSemicolons), i2;
  if ((n2.useNamedReferences || n2.useShortestReferences) && (i2 = In(e12, t2, n2.omitOptionalSemicolons, n2.attribute)), (n2.useShortestReferences || !i2) && n2.useShortestReferences) {
    let i3 = On(e12, t2, n2.omitOptionalSemicolons);
    i3.length < r2.length && (r2 = i3);
  }
  return i2 && (!n2.useShortestReferences || i2.length < r2.length) ? i2 : r2;
}
function J(e12, t2) {
  return Sn(e12, Object.assign({ format: Ln }, t2));
}
var Rn = /^>|^->|<!--|-->|--!>|<!-$/g, zn = [`>`], Bn = [`<`, `>`];
function Vn(e12, t2, n2, r2) {
  return r2.settings.bogusComments ? `<?` + J(e12.value, Object.assign({}, r2.settings.characterReferences, { subset: zn })) + `>` : `<!--` + e12.value.replace(Rn, i2) + `-->`;
  function i2(e13) {
    return J(e13, Object.assign({}, r2.settings.characterReferences, { subset: Bn }));
  }
}
function Hn(e12, t2, n2, r2) {
  return `<!` + (r2.settings.upperDoctype ? `DOCTYPE` : `doctype`) + (r2.settings.tightDoctype ? `` : ` `) + `html>`;
}
function Un(e12, t2) {
  let n2 = String(e12);
  if (typeof t2 != `string`) throw TypeError(`Expected character`);
  let r2 = 0, i2 = n2.indexOf(t2);
  for (; i2 !== -1; ) r2++, i2 = n2.indexOf(t2, i2 + t2.length);
  return r2;
}
function Wn(e12, t2) {
  let n2 = t2 || {};
  return (e12[e12.length - 1] === `` ? [...e12, ``] : e12).join((n2.padRight ? ` ` : ``) + `,` + (n2.padLeft === false ? `` : ` `)).trim();
}
function Gn(e12) {
  return e12.join(` `).trim();
}
var Kn = /[ \t\n\f\r]/g;
function qn(e12) {
  return typeof e12 == `object` ? e12.type === `text` ? Jn(e12.value) : false : Jn(e12);
}
function Jn(e12) {
  return e12.replace(Kn, ``) === ``;
}
var Y = Zn(1), Yn = Zn(-1), Xn = [];
function Zn(e12) {
  return t2;
  function t2(t3, n2, r2) {
    let i2 = t3 ? t3.children : Xn, a2 = (n2 || 0) + e12, o2 = i2[a2];
    if (!r2) for (; o2 && qn(o2); ) a2 += e12, o2 = i2[a2];
    return o2;
  }
}
var Qn = {}.hasOwnProperty;
function $n(e12) {
  return t2;
  function t2(t3, n2, r2) {
    return Qn.call(e12, t3.tagName) && e12[t3.tagName](t3, n2, r2);
  }
}
var er = $n({ body: rr, caption: tr, colgroup: tr, dd: sr, dt: or, head: tr, html: nr, li: ar, optgroup: lr, option: ur, p: ir, rp: cr, rt: cr, tbody: fr, td: hr, tfoot: pr, th: hr, thead: dr, tr: mr });
function tr(e12, t2, n2) {
  let r2 = Y(n2, t2, true);
  return !r2 || r2.type !== `comment` && !(r2.type === `text` && qn(r2.value.charAt(0)));
}
function nr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type !== `comment`;
}
function rr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type !== `comment`;
}
function ir(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return r2 ? r2.type === `element` && (r2.tagName === `address` || r2.tagName === `article` || r2.tagName === `aside` || r2.tagName === `blockquote` || r2.tagName === `details` || r2.tagName === `div` || r2.tagName === `dl` || r2.tagName === `fieldset` || r2.tagName === `figcaption` || r2.tagName === `figure` || r2.tagName === `footer` || r2.tagName === `form` || r2.tagName === `h1` || r2.tagName === `h2` || r2.tagName === `h3` || r2.tagName === `h4` || r2.tagName === `h5` || r2.tagName === `h6` || r2.tagName === `header` || r2.tagName === `hgroup` || r2.tagName === `hr` || r2.tagName === `main` || r2.tagName === `menu` || r2.tagName === `nav` || r2.tagName === `ol` || r2.tagName === `p` || r2.tagName === `pre` || r2.tagName === `section` || r2.tagName === `table` || r2.tagName === `ul`) : !n2 || !(n2.type === `element` && (n2.tagName === `a` || n2.tagName === `audio` || n2.tagName === `del` || n2.tagName === `ins` || n2.tagName === `map` || n2.tagName === `noscript` || n2.tagName === `video`));
}
function ar(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && r2.tagName === `li`;
}
function or(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !!(r2 && r2.type === `element` && (r2.tagName === `dt` || r2.tagName === `dd`));
}
function sr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && (r2.tagName === `dt` || r2.tagName === `dd`);
}
function cr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && (r2.tagName === `rp` || r2.tagName === `rt`);
}
function lr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && r2.tagName === `optgroup`;
}
function ur(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && (r2.tagName === `option` || r2.tagName === `optgroup`);
}
function dr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !!(r2 && r2.type === `element` && (r2.tagName === `tbody` || r2.tagName === `tfoot`));
}
function fr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && (r2.tagName === `tbody` || r2.tagName === `tfoot`);
}
function pr(e12, t2, n2) {
  return !Y(n2, t2);
}
function mr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && r2.tagName === `tr`;
}
function hr(e12, t2, n2) {
  let r2 = Y(n2, t2);
  return !r2 || r2.type === `element` && (r2.tagName === `td` || r2.tagName === `th`);
}
var gr = $n({ body: yr, colgroup: br, head: vr, html: _r, tbody: xr });
function _r(e12) {
  let t2 = Y(e12, -1);
  return !t2 || t2.type !== `comment`;
}
function vr(e12) {
  let t2 = /* @__PURE__ */ new Set();
  for (let n3 of e12.children) if (n3.type === `element` && (n3.tagName === `base` || n3.tagName === `title`)) {
    if (t2.has(n3.tagName)) return false;
    t2.add(n3.tagName);
  }
  let n2 = e12.children[0];
  return !n2 || n2.type === `element`;
}
function yr(e12) {
  let t2 = Y(e12, -1, true);
  return !t2 || t2.type !== `comment` && !(t2.type === `text` && qn(t2.value.charAt(0))) && !(t2.type === `element` && (t2.tagName === `meta` || t2.tagName === `link` || t2.tagName === `script` || t2.tagName === `style` || t2.tagName === `template`));
}
function br(e12, t2, n2) {
  let r2 = Yn(n2, t2), i2 = Y(e12, -1, true);
  return n2 && r2 && r2.type === `element` && r2.tagName === `colgroup` && er(r2, n2.children.indexOf(r2), n2) ? false : !!(i2 && i2.type === `element` && i2.tagName === `col`);
}
function xr(e12, t2, n2) {
  let r2 = Yn(n2, t2), i2 = Y(e12, -1);
  return n2 && r2 && r2.type === `element` && (r2.tagName === `thead` || r2.tagName === `tbody`) && er(r2, n2.children.indexOf(r2), n2) ? false : !!(i2 && i2.type === `element` && i2.tagName === `tr`);
}
var Sr = { name: [[`	
\f\r &/=>`.split(``), `	
\f\r "&'/=>\``.split(``)], [`\0	
\f\r "&'/<=>`.split(``), `\0	
\f\r "&'/<=>\``.split(``)]], unquoted: [[`	
\f\r &>`.split(``), `\0	
\f\r "&'<=>\``.split(``)], [`\0	
\f\r "&'<=>\``.split(``), `\0	
\f\r "&'<=>\``.split(``)]], single: [[`&'`.split(``), `"&'\``.split(``)], [`\0&'`.split(``), `\0"&'\``.split(``)]], double: [[`"&`.split(``), `"&'\``.split(``)], [`\0"&`.split(``), `\0"&'\``.split(``)]] };
function Cr(e12, t2, n2, r2) {
  let i2 = r2.schema, a2 = i2.space === `svg` ? false : r2.settings.omitOptionalTags, o2 = i2.space === `svg` ? r2.settings.closeEmptyElements : r2.settings.voids.includes(e12.tagName.toLowerCase()), s2 = [], c2;
  i2.space === `html` && e12.tagName === `svg` && (r2.schema = mn);
  let l2 = wr(r2, e12.properties), u2 = r2.all(i2.space === `html` && e12.tagName === `template` ? e12.content : e12);
  return r2.schema = i2, u2 && (o2 = false), (l2 || !a2 || !gr(e12, t2, n2)) && (s2.push(`<`, e12.tagName, l2 ? ` ` + l2 : ``), o2 && (i2.space === `svg` || r2.settings.closeSelfClosing) && (c2 = l2.charAt(l2.length - 1), (!r2.settings.tightSelfClosing || c2 === `/` || c2 && c2 !== `"` && c2 !== `'`) && s2.push(` `), s2.push(`/`)), s2.push(`>`)), s2.push(u2), !o2 && (!a2 || !er(e12, t2, n2)) && s2.push(`</` + e12.tagName + `>`), s2.join(``);
}
function wr(e12, t2) {
  let n2 = [], r2 = -1, i2;
  if (t2) {
    for (i2 in t2) if (t2[i2] !== null && t2[i2] !== void 0) {
      let r3 = Tr(e12, i2, t2[i2]);
      r3 && n2.push(r3);
    }
  }
  for (; ++r2 < n2.length; ) {
    let t3 = e12.settings.tightAttributes ? n2[r2].charAt(n2[r2].length - 1) : void 0;
    r2 !== n2.length - 1 && t3 !== `"` && t3 !== `'` && (n2[r2] += ` `);
  }
  return n2.join(``);
}
function Tr(e12, t2, n2) {
  let r2 = un(e12.schema, t2), i2 = e12.settings.allowParseErrors && e12.schema.space === `html` ? 0 : 1, a2 = +!e12.settings.allowDangerousCharacters, o2 = e12.quote, s2;
  if (r2.overloadedBoolean && (n2 === r2.attribute || n2 === ``) ? n2 = true : (r2.boolean || r2.overloadedBoolean) && (typeof n2 != `string` || n2 === r2.attribute || n2 === ``) && (n2 = !!n2), n2 == null || n2 === false || typeof n2 == `number` && Number.isNaN(n2)) return ``;
  let c2 = J(r2.attribute, Object.assign({}, e12.settings.characterReferences, { subset: Sr.name[i2][a2] }));
  return n2 === true || (n2 = Array.isArray(n2) ? (r2.commaSeparated ? Wn : Gn)(n2, { padLeft: !e12.settings.tightCommaSeparatedLists }) : String(n2), e12.settings.collapseEmptyAttributes && !n2) ? c2 : (e12.settings.preferUnquoted && (s2 = J(n2, Object.assign({}, e12.settings.characterReferences, { attribute: true, subset: Sr.unquoted[i2][a2] }))), s2 !== n2 && (e12.settings.quoteSmart && Un(n2, o2) > Un(n2, e12.alternative) && (o2 = e12.alternative), s2 = o2 + J(n2, Object.assign({}, e12.settings.characterReferences, { subset: (o2 === `'` ? Sr.single : Sr.double)[i2][a2], attribute: true })) + o2), c2 + (s2 && `=` + s2));
}
var Er = [`<`, `&`];
function Dr(e12, t2, n2, r2) {
  return n2 && n2.type === `element` && (n2.tagName === `script` || n2.tagName === `style`) ? e12.value : J(e12.value, Object.assign({}, r2.settings.characterReferences, { subset: Er }));
}
function Or(e12, t2, n2, r2) {
  return r2.settings.allowDangerousHtml ? e12.value : Dr(e12, t2, n2, r2);
}
function kr(e12, t2, n2, r2) {
  return r2.all(e12);
}
var Ar = gn(`type`, { invalid: jr, unknown: Mr, handlers: { comment: Vn, doctype: Hn, element: Cr, raw: Or, root: kr, text: Dr } });
function jr(e12) {
  throw Error("Expected node, not `" + e12 + "`");
}
function Mr(e12) {
  throw Error("Cannot compile unknown node `" + e12.type + "`");
}
var Nr = {}, Pr = {}, Fr = [];
function Ir(e12, t2) {
  let n2 = t2 || Nr, r2 = n2.quote || `"`, i2 = r2 === `"` ? `'` : `"`;
  if (r2 !== `"` && r2 !== `'`) throw Error("Invalid quote `" + r2 + "`, expected `'` or `\"`");
  return { one: Lr, all: Rr, settings: { omitOptionalTags: n2.omitOptionalTags || false, allowParseErrors: n2.allowParseErrors || false, allowDangerousCharacters: n2.allowDangerousCharacters || false, quoteSmart: n2.quoteSmart || false, preferUnquoted: n2.preferUnquoted || false, tightAttributes: n2.tightAttributes || false, upperDoctype: n2.upperDoctype || false, tightDoctype: n2.tightDoctype || false, bogusComments: n2.bogusComments || false, tightCommaSeparatedLists: n2.tightCommaSeparatedLists || false, tightSelfClosing: n2.tightSelfClosing || false, collapseEmptyAttributes: n2.collapseEmptyAttributes || false, allowDangerousHtml: n2.allowDangerousHtml || false, voids: n2.voids || Ut, characterReferences: n2.characterReferences || Pr, closeSelfClosing: n2.closeSelfClosing || false, closeEmptyElements: n2.closeEmptyElements || false }, schema: n2.space === `svg` ? mn : pn, quote: r2, alternative: i2 }.one(Array.isArray(e12) ? { type: `root`, children: e12 } : e12, void 0, void 0);
}
function Lr(e12, t2, n2) {
  return Ar(e12, t2, n2, this);
}
function Rr(e12) {
  let t2 = [], n2 = e12 && e12.children || Fr, r2 = -1;
  for (; ++r2 < n2.length; ) t2[r2] = this.one(n2[r2], r2, e12);
  return t2.join(``);
}
function zr(e12, t2) {
  var _a2;
  if (!t2) return e12;
  e12.properties || (e12.properties = {}), (_a2 = e12.properties).class || (_a2.class = []), typeof e12.properties.class == `string` && (e12.properties.class = e12.properties.class.split(/\s+/g)), Array.isArray(e12.properties.class) || (e12.properties.class = []);
  let n2 = Array.isArray(t2) ? t2 : t2.split(/\s+/g);
  for (let t3 of n2) t3 && !e12.properties.class.includes(t3) && e12.properties.class.push(t3);
  return e12;
}
function Br(e12) {
  let t2 = N(e12, true).map(([e13]) => e13);
  function n2(n3) {
    if (n3 === e12.length) return { line: t2.length - 1, character: t2[t2.length - 1].length };
    let r3 = n3, i2 = 0;
    for (let e13 of t2) {
      if (r3 < e13.length) break;
      r3 -= e13.length, i2++;
    }
    return { line: i2, character: r3 };
  }
  function r2(e13, n3) {
    let r3 = 0;
    for (let n4 = 0; n4 < e13; n4++) r3 += t2[n4].length;
    return r3 += n3, r3;
  }
  return { lines: t2, indexToPos: n2, posToIndex: r2 };
}
var Vr = `light-dark()`, Hr = [`color`, `background-color`];
function Ur(e12, t2) {
  let n2 = 0, r2 = [];
  for (let i2 of t2) i2 > n2 && r2.push({ ...e12, content: e12.content.slice(n2, i2), offset: e12.offset + n2 }), n2 = i2;
  return n2 < e12.content.length && r2.push({ ...e12, content: e12.content.slice(n2), offset: e12.offset + n2 }), r2;
}
function Wr(e12, t2) {
  let n2 = Array.from(t2 instanceof Set ? t2 : new Set(t2)).sort((e13, t3) => e13 - t3);
  return n2.length ? e12.map((e13) => e13.flatMap((e14) => {
    let t3 = n2.filter((t4) => e14.offset < t4 && t4 < e14.offset + e14.content.length).map((t4) => t4 - e14.offset).sort((e15, t4) => e15 - t4);
    return t3.length ? Ur(e14, t3) : e14;
  })) : e12;
}
function Gr(e12, t2, n2, r2, i2 = `css-vars`) {
  let o2 = { content: e12.content, explanation: e12.explanation, offset: e12.offset }, s2 = t2.map((t3) => Kr(e12.variants[t3])), c2 = new Set(s2.flatMap((e13) => Object.keys(e13))), l2 = {}, u2 = (e13, r3) => {
    let i3 = r3 === `color` ? `` : r3 === `background-color` ? `-bg` : `-${r3}`;
    return n2 + t2[e13] + (r3 === `color` ? `` : i3);
  };
  return s2.forEach((e13, n3) => {
    for (let o3 of c2) {
      let c3 = e13[o3] || `inherit`;
      if (n3 === 0 && r2 && Hr.includes(o3)) if (r2 === Vr && s2.length > 1) {
        let e14 = t2.findIndex((e15) => e15 === `light`), r3 = t2.findIndex((e15) => e15 === `dark`);
        if (e14 === -1 || r3 === -1) throw new a('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        l2[o3] = `light-dark(${s2[e14][o3] || `inherit`}, ${s2[r3][o3] || `inherit`})`, i2 === `css-vars` && (l2[u2(n3, o3)] = c3);
      } else l2[o3] = c3;
      else i2 === `css-vars` && (l2[u2(n3, o3)] = c3);
    }
  }), o2.htmlStyle = l2, o2;
}
function Kr(e12) {
  let t2 = {};
  if (e12.color && (t2.color = e12.color), e12.bgColor && (t2[`background-color`] = e12.bgColor), e12.fontStyle) {
    e12.fontStyle & y.Italic && (t2[`font-style`] = `italic`), e12.fontStyle & y.Bold && (t2[`font-weight`] = `bold`);
    let n2 = [];
    e12.fontStyle & y.Underline && n2.push(`underline`), e12.fontStyle & y.Strikethrough && n2.push(`line-through`), n2.length && (t2[`text-decoration`] = n2.join(` `));
  }
  return t2;
}
function qr(e12) {
  return typeof e12 == `string` ? e12 : Object.entries(e12).map(([e13, t2]) => `${e13}:${t2}`).join(`;`);
}
function Jr() {
  let e12 = /* @__PURE__ */ new WeakMap();
  function t2(t3) {
    if (!e12.has(t3.meta)) {
      let r2 = function(e13) {
        if (typeof e13 == `number`) {
          if (e13 < 0 || e13 > t3.source.length) throw new a(`Invalid decoration offset: ${e13}. Code length: ${t3.source.length}`);
          return { ...n2.indexToPos(e13), offset: e13 };
        } else {
          let t4 = n2.lines[e13.line];
          if (t4 === void 0) throw new a(`Invalid decoration position ${JSON.stringify(e13)}. Lines length: ${n2.lines.length}`);
          let r3 = e13.character;
          if (r3 < 0 && (r3 = t4.length + r3), r3 < 0 || r3 > t4.length) throw new a(`Invalid decoration position ${JSON.stringify(e13)}. Line ${e13.line} length: ${t4.length}`);
          return { ...e13, character: r3, offset: n2.posToIndex(e13.line, r3) };
        }
      };
      let n2 = Br(t3.source);
      let i2 = (t3.options.decorations || []).map((e13) => ({ ...e13, start: r2(e13.start), end: r2(e13.end) }));
      Yr(i2), e12.set(t3.meta, { decorations: i2, converter: n2, source: t3.source });
    }
    return e12.get(t3.meta);
  }
  return { name: `shiki:decorations`, tokens(e13) {
    if (this.options.decorations?.length) return Wr(e13, t2(this).decorations.flatMap((e14) => [e14.start.offset, e14.end.offset]));
  }, code(e13) {
    if (!this.options.decorations?.length) return;
    let n2 = t2(this), r2 = Array.from(e13.children).filter((e14) => e14.type === `element` && e14.tagName === `span`);
    if (r2.length !== n2.converter.lines.length) throw new a(`Number of lines in code element (${r2.length}) does not match the number of lines in the source (${n2.converter.lines.length}). Failed to apply decorations.`);
    function i2(e14, t3, n3, i3) {
      let o3 = r2[e14], c3 = ``, l3 = -1, u2 = -1;
      if (t3 === 0 && (l3 = 0), n3 === 0 && (u2 = 0), n3 === 1 / 0 && (u2 = o3.children.length), l3 === -1 || u2 === -1) for (let e15 = 0; e15 < o3.children.length; e15++) c3 += Xr(o3.children[e15]), l3 === -1 && c3.length === t3 && (l3 = e15 + 1), u2 === -1 && c3.length === n3 && (u2 = e15 + 1);
      if (l3 === -1) throw new a(`Failed to find start index for decoration ${JSON.stringify(i3.start)}`);
      if (u2 === -1) throw new a(`Failed to find end index for decoration ${JSON.stringify(i3.end)}`);
      let d2 = o3.children.slice(l3, u2);
      if (!i3.alwaysWrap && d2.length === o3.children.length) s2(o3, i3, `line`);
      else if (!i3.alwaysWrap && d2.length === 1 && d2[0].type === `element`) s2(d2[0], i3, `token`);
      else {
        let e15 = { type: `element`, tagName: `span`, properties: {}, children: d2 };
        s2(e15, i3, `wrapper`), o3.children.splice(l3, d2.length, e15);
      }
    }
    function o2(e14, t3) {
      r2[e14] = s2(r2[e14], t3, `line`);
    }
    function s2(e14, t3, n3) {
      let r3 = t3.properties || {}, i3 = t3.transform || ((e15) => e15);
      return e14.tagName = t3.tagName || `span`, e14.properties = { ...e14.properties, ...r3, class: e14.properties.class }, t3.properties?.class && zr(e14, t3.properties.class), e14 = i3(e14, n3) || e14, e14;
    }
    let c2 = [], l2 = n2.decorations.sort((e14, t3) => t3.start.offset - e14.start.offset || e14.end.offset - t3.end.offset);
    for (let e14 of l2) {
      let { start: t3, end: n3 } = e14;
      if (t3.line === n3.line) i2(t3.line, t3.character, n3.character, e14);
      else if (t3.line < n3.line) {
        i2(t3.line, t3.character, 1 / 0, e14);
        for (let r3 = t3.line + 1; r3 < n3.line; r3++) c2.unshift(() => o2(r3, e14));
        i2(n3.line, 0, n3.character, e14);
      }
    }
    c2.forEach((e14) => e14());
  } };
}
function Yr(e12) {
  for (let t2 = 0; t2 < e12.length; t2++) {
    let n2 = e12[t2];
    if (n2.start.offset > n2.end.offset) throw new a(`Invalid decoration range: ${JSON.stringify(n2.start)} - ${JSON.stringify(n2.end)}`);
    for (let r2 = t2 + 1; r2 < e12.length; r2++) {
      let t3 = e12[r2], i2 = n2.start.offset <= t3.start.offset && t3.start.offset < n2.end.offset, o2 = n2.start.offset < t3.end.offset && t3.end.offset <= n2.end.offset, s2 = t3.start.offset <= n2.start.offset && n2.start.offset < t3.end.offset, c2 = t3.start.offset < n2.end.offset && n2.end.offset <= t3.end.offset;
      if (i2 || o2 || s2 || c2) {
        if (i2 && o2 || s2 && c2 || s2 && n2.start.offset === n2.end.offset || o2 && t3.start.offset === t3.end.offset) continue;
        throw new a(`Decorations ${JSON.stringify(n2.start)} and ${JSON.stringify(t3.start)} intersect.`);
      }
    }
  }
}
function Xr(e12) {
  return e12.type === `text` ? e12.value : e12.type === `element` ? e12.children.map(Xr).join(``) : ``;
}
var Zr = [Jr()];
function Qr(e12) {
  let t2 = $r(e12.transformers || []);
  return [...t2.pre, ...t2.normal, ...t2.post, ...Zr];
}
function $r(e12) {
  let t2 = [], n2 = [], r2 = [];
  for (let i2 of e12) switch (i2.enforce) {
    case `pre`:
      t2.push(i2);
      break;
    case `post`:
      n2.push(i2);
      break;
    default:
      r2.push(i2);
  }
  return { pre: t2, post: n2, normal: r2 };
}
var X = [`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`], ei = { 1: `bold`, 2: `dim`, 3: `italic`, 4: `underline`, 7: `reverse`, 8: `hidden`, 9: `strikethrough` };
function ti(e12, t2) {
  let n2 = e12.indexOf(`\x1B`, t2);
  if (n2 !== -1 && e12[n2 + 1] === `[`) {
    let t3 = e12.indexOf(`m`, n2);
    if (t3 !== -1) return { sequence: e12.substring(n2 + 2, t3).split(`;`), startPosition: n2, position: t3 + 1 };
  }
  return { position: e12.length };
}
function ni(e12) {
  let t2 = e12.shift();
  if (t2 === `2`) {
    let t3 = e12.splice(0, 3).map((e13) => Number.parseInt(e13));
    return t3.length !== 3 || t3.some((e13) => Number.isNaN(e13)) ? void 0 : { type: `rgb`, rgb: t3 };
  } else if (t2 === `5`) {
    let t3 = e12.shift();
    if (t3) return { type: `table`, index: Number(t3) };
  }
}
function ri(e12) {
  let t2 = [];
  for (; e12.length > 0; ) {
    let n2 = e12.shift();
    if (!n2) continue;
    let r2 = Number.parseInt(n2);
    if (!Number.isNaN(r2)) if (r2 === 0) t2.push({ type: `resetAll` });
    else if (r2 <= 9) ei[r2] && t2.push({ type: `setDecoration`, value: ei[r2] });
    else if (r2 <= 29) {
      let e13 = ei[r2 - 20];
      e13 && (t2.push({ type: `resetDecoration`, value: e13 }), e13 === `dim` && t2.push({ type: `resetDecoration`, value: `bold` }));
    } else if (r2 <= 37) t2.push({ type: `setForegroundColor`, value: { type: `named`, name: X[r2 - 30] } });
    else if (r2 === 38) {
      let n3 = ni(e12);
      n3 && t2.push({ type: `setForegroundColor`, value: n3 });
    } else if (r2 === 39) t2.push({ type: `resetForegroundColor` });
    else if (r2 <= 47) t2.push({ type: `setBackgroundColor`, value: { type: `named`, name: X[r2 - 40] } });
    else if (r2 === 48) {
      let n3 = ni(e12);
      n3 && t2.push({ type: `setBackgroundColor`, value: n3 });
    } else r2 === 49 ? t2.push({ type: `resetBackgroundColor` }) : r2 === 53 ? t2.push({ type: `setDecoration`, value: `overline` }) : r2 === 55 ? t2.push({ type: `resetDecoration`, value: `overline` }) : r2 >= 90 && r2 <= 97 ? t2.push({ type: `setForegroundColor`, value: { type: `named`, name: X[r2 - 90 + 8] } }) : r2 >= 100 && r2 <= 107 && t2.push({ type: `setBackgroundColor`, value: { type: `named`, name: X[r2 - 100 + 8] } });
  }
  return t2;
}
function ii() {
  let e12 = null, t2 = null, n2 = /* @__PURE__ */ new Set();
  return { parse(r2) {
    let i2 = [], a2 = 0;
    do {
      let o2 = ti(r2, a2), s2 = o2.sequence ? r2.substring(a2, o2.startPosition) : r2.substring(a2);
      if (s2.length > 0 && i2.push({ value: s2, foreground: e12, background: t2, decorations: new Set(n2) }), o2.sequence) {
        let r3 = ri(o2.sequence);
        for (let i3 of r3) i3.type === `resetAll` ? (e12 = null, t2 = null, n2.clear()) : i3.type === `resetForegroundColor` ? e12 = null : i3.type === `resetBackgroundColor` ? t2 = null : i3.type === `resetDecoration` && n2.delete(i3.value);
        for (let i3 of r3) i3.type === `setForegroundColor` ? e12 = i3.value : i3.type === `setBackgroundColor` ? t2 = i3.value : i3.type === `setDecoration` && n2.add(i3.value);
      }
      a2 = o2.position;
    } while (a2 < r2.length);
    return i2;
  } };
}
var ai = { black: `#000000`, red: `#bb0000`, green: `#00bb00`, yellow: `#bbbb00`, blue: `#0000bb`, magenta: `#ff00ff`, cyan: `#00bbbb`, white: `#eeeeee`, brightBlack: `#555555`, brightRed: `#ff5555`, brightGreen: `#00ff00`, brightYellow: `#ffff55`, brightBlue: `#5555ff`, brightMagenta: `#ff55ff`, brightCyan: `#55ffff`, brightWhite: `#ffffff` };
function oi(e12 = ai) {
  function t2(t3) {
    return e12[t3];
  }
  function n2(e13) {
    return `#${e13.map((e14) => Math.max(0, Math.min(e14, 255)).toString(16).padStart(2, `0`)).join(``)}`;
  }
  let r2;
  function i2() {
    if (r2) return r2;
    r2 = [];
    for (let e14 = 0; e14 < X.length; e14++) r2.push(t2(X[e14]));
    let e13 = [0, 95, 135, 175, 215, 255];
    for (let t3 = 0; t3 < 6; t3++) for (let i4 = 0; i4 < 6; i4++) for (let a3 = 0; a3 < 6; a3++) r2.push(n2([e13[t3], e13[i4], e13[a3]]));
    let i3 = 8;
    for (let e14 = 0; e14 < 24; e14++, i3 += 10) r2.push(n2([i3, i3, i3]));
    return r2;
  }
  function a2(e13) {
    return i2()[e13];
  }
  function o2(e13) {
    switch (e13.type) {
      case `named`:
        return t2(e13.name);
      case `rgb`:
        return n2(e13.rgb);
      case `table`:
        return a2(e13.index);
    }
  }
  return { value: o2 };
}
var si = { black: `#000000`, red: `#cd3131`, green: `#0DBC79`, yellow: `#E5E510`, blue: `#2472C8`, magenta: `#BC3FBC`, cyan: `#11A8CD`, white: `#E5E5E5`, brightBlack: `#666666`, brightRed: `#F14C4C`, brightGreen: `#23D18B`, brightYellow: `#F5F543`, brightBlue: `#3B8EEA`, brightMagenta: `#D670D6`, brightCyan: `#29B8DB`, brightWhite: `#FFFFFF` };
function ci(e12, t2, n2) {
  let r2 = k(e12, n2), i2 = N(t2), a2 = oi(Object.fromEntries(X.map((t3) => {
    let n3 = `terminal.ansi${t3[0].toUpperCase()}${t3.substring(1)}`;
    return [t3, e12.colors?.[n3] || si[t3]];
  }))), o2 = ii();
  return i2.map((t3) => o2.parse(t3[0]).map((n3) => {
    let i3, o3;
    n3.decorations.has(`reverse`) ? (i3 = n3.background ? a2.value(n3.background) : e12.bg, o3 = n3.foreground ? a2.value(n3.foreground) : e12.fg) : (i3 = n3.foreground ? a2.value(n3.foreground) : e12.fg, o3 = n3.background ? a2.value(n3.background) : void 0), i3 = A(i3, r2), o3 = A(o3, r2), n3.decorations.has(`dim`) && (i3 = li(i3));
    let s2 = y.None;
    return n3.decorations.has(`bold`) && (s2 |= y.Bold), n3.decorations.has(`italic`) && (s2 |= y.Italic), n3.decorations.has(`underline`) && (s2 |= y.Underline), n3.decorations.has(`strikethrough`) && (s2 |= y.Strikethrough), { content: n3.value, offset: t3[1], color: i3, bgColor: o3, fontStyle: s2 };
  }));
}
function li(e12) {
  let t2 = e12.match(/#([0-9a-f]{3,8})/i);
  if (t2) {
    let e13 = t2[1];
    if (e13.length === 8) {
      let t3 = Math.round(Number.parseInt(e13.slice(6, 8), 16) / 2).toString(16).padStart(2, `0`);
      return `#${e13.slice(0, 6)}${t3}`;
    } else if (e13.length === 6) return `#${e13}80`;
    else if (e13.length === 4) {
      let t3 = e13[0], n3 = e13[1], r2 = e13[2], i2 = e13[3];
      return `#${t3}${t3}${n3}${n3}${r2}${r2}${Math.round(Number.parseInt(`${i2}${i2}`, 16) / 2).toString(16).padStart(2, `0`)}`;
    } else if (e13.length === 3) {
      let t3 = e13[0], n3 = e13[1], r2 = e13[2];
      return `#${t3}${t3}${n3}${n3}${r2}${r2}80`;
    }
  }
  let n2 = e12.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return n2 ? `var(${n2[1]}-dim)` : e12;
}
function ui(e12, t2, n2 = {}) {
  let r2 = e12.resolveLangAlias(n2.lang || `text`), { theme: i2 = e12.getLoadedThemes()[0] } = n2;
  if (!j(r2) && !M(i2) && r2 === `ansi`) {
    let { theme: r3 } = e12.setTheme(i2);
    return ci(r3, t2, n2);
  }
  return Mt(e12, t2, n2);
}
function Z(e12, t2, n2) {
  let r2, i2, o2, s2, c2, l2;
  if (`themes` in n2) {
    let { defaultColor: u2 = `light`, cssVariablePrefix: d2 = `--shiki-`, colorsRendering: f2 = `css-vars` } = n2, p2 = Object.entries(n2.themes).filter((e13) => e13[1]).map((e13) => ({ color: e13[0], theme: e13[1] })).sort((e13, t3) => e13.color === u2 ? -1 : +(t3.color === u2));
    if (p2.length === 0) throw new a("`themes` option must not be empty");
    let m2 = Vt(e12, t2, n2, ui);
    if (l2 = I(m2), u2 && Vr !== u2 && !p2.find((e13) => e13.color === u2)) throw new a(`\`themes\` option must contain the defaultColor key \`${u2}\``);
    let h2 = p2.map((t3) => e12.getTheme(t3.theme)), g2 = p2.map((e13) => e13.color);
    o2 = m2.map((e13) => e13.map((e14) => Gr(e14, g2, d2, u2, f2))), l2 && F(o2, l2);
    let _2 = p2.map((e13) => k(e13.theme, n2));
    i2 = di(p2, h2, _2, d2, u2, `fg`, f2), r2 = di(p2, h2, _2, d2, u2, `bg`, f2), s2 = `shiki-themes ${h2.map((e13) => e13.name).join(` `)}`, c2 = u2 ? void 0 : [i2, r2].join(`;`);
  } else if (`theme` in n2) {
    let a2 = k(n2.theme, n2);
    o2 = ui(e12, t2, n2);
    let c3 = e12.getTheme(n2.theme);
    r2 = A(c3.bg, a2), i2 = A(c3.fg, a2), s2 = c3.name, l2 = I(o2);
  } else throw new a("Invalid options, either `theme` or `themes` must be provided");
  return { tokens: o2, fg: i2, bg: r2, themeName: s2, rootStyle: c2, grammarState: l2 };
}
function di(e12, t2, n2, r2, i2, o2, s2) {
  return e12.map((c2, l2) => {
    let u2 = A(t2[l2][o2], n2[l2]) || `inherit`, d2 = `${r2 + c2.color}${o2 === `bg` ? `-bg` : ``}:${u2}`;
    if (l2 === 0 && i2) {
      if (i2 === Vr && e12.length > 1) {
        let r3 = e12.findIndex((e13) => e13.color === `light`), i3 = e12.findIndex((e13) => e13.color === `dark`);
        if (r3 === -1 || i3 === -1) throw new a('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        return `light-dark(${A(t2[r3][o2], n2[r3]) || `inherit`}, ${A(t2[i3][o2], n2[i3]) || `inherit`});${d2}`;
      }
      return u2;
    }
    return s2 === `css-vars` ? d2 : null;
  }).filter((e13) => !!e13).join(`;`);
}
function fi(e12, t2, n2, r2 = { meta: {}, options: n2, codeToHast: (t3, n3) => fi(e12, t3, n3), codeToTokens: (t3, n3) => Z(e12, t3, n3) }) {
  let i2 = t2;
  for (let e13 of Qr(n2)) i2 = e13.preprocess?.call(r2, i2, n2) || i2;
  let { tokens: a2, fg: o2, bg: s2, themeName: c2, rootStyle: l2, grammarState: u2 } = Z(e12, i2, n2), { mergeWhitespaces: d2 = true, mergeSameStyleTokens: f2 = false } = n2;
  d2 === true ? a2 = mi(a2) : d2 === `never` && (a2 = hi(a2)), f2 && (a2 = gi(a2));
  let p2 = { ...r2, get source() {
    return i2;
  } };
  for (let e13 of Qr(n2)) a2 = e13.tokens?.call(p2, a2) || a2;
  return pi(a2, { ...n2, fg: o2, bg: s2, themeName: c2, rootStyle: n2.rootStyle === false ? false : n2.rootStyle ?? l2 }, p2, u2);
}
function pi(e12, t2, n2, r2 = I(e12)) {
  let i2 = Qr(t2), a2 = [], o2 = { type: `root`, children: [] }, { structure: s2 = `classic`, tabindex: c2 = `0` } = t2, l2 = { class: `shiki ${t2.themeName || ``}` };
  t2.rootStyle !== false && (t2.rootStyle == null ? l2.style = `background-color:${t2.bg};color:${t2.fg}` : l2.style = t2.rootStyle), c2 !== false && c2 != null && (l2.tabindex = c2.toString());
  for (let [e13, n3] of Object.entries(t2.meta || {})) e13.startsWith(`_`) || (l2[e13] = n3);
  let u2 = { type: `element`, tagName: `pre`, properties: l2, children: [], data: t2.data }, d2 = { type: `element`, tagName: `code`, properties: {}, children: a2 }, f2 = [], p2 = { ...n2, structure: s2, addClassToHast: zr, get source() {
    return n2.source;
  }, get tokens() {
    return e12;
  }, get options() {
    return t2;
  }, get root() {
    return o2;
  }, get pre() {
    return u2;
  }, get code() {
    return d2;
  }, get lines() {
    return f2;
  } };
  if (e12.forEach((e13, t3) => {
    t3 && (s2 === `inline` ? o2.children.push({ type: `element`, tagName: `br`, properties: {}, children: [] }) : s2 === `classic` && a2.push({ type: `text`, value: `
` }));
    let n3 = { type: `element`, tagName: `span`, properties: { class: `line` }, children: [] }, r3 = 0;
    for (let a3 of e13) {
      let e14 = { type: `element`, tagName: `span`, properties: { ...a3.htmlAttrs }, children: [{ type: `text`, value: a3.content }] }, c3 = qr(a3.htmlStyle || Kr(a3));
      c3 && (e14.properties.style = c3);
      for (let o3 of i2) e14 = o3?.span?.call(p2, e14, t3 + 1, r3, n3, a3) || e14;
      s2 === `inline` ? o2.children.push(e14) : s2 === `classic` && n3.children.push(e14), r3 += a3.content.length;
    }
    if (s2 === `classic`) {
      for (let e14 of i2) n3 = e14?.line?.call(p2, n3, t3 + 1) || n3;
      f2.push(n3), a2.push(n3);
    } else s2 === `inline` && f2.push(n3);
  }), s2 === `classic`) {
    for (let e13 of i2) d2 = e13?.code?.call(p2, d2) || d2;
    u2.children.push(d2);
    for (let e13 of i2) u2 = e13?.pre?.call(p2, u2) || u2;
    o2.children.push(u2);
  } else if (s2 === `inline`) {
    let e13 = [], t3 = { type: `element`, tagName: `span`, properties: { class: `line` }, children: [] };
    for (let n4 of o2.children) n4.type === `element` && n4.tagName === `br` ? (e13.push(t3), t3 = { type: `element`, tagName: `span`, properties: { class: `line` }, children: [] }) : (n4.type === `element` || n4.type === `text`) && t3.children.push(n4);
    e13.push(t3);
    let n3 = { type: `element`, tagName: `code`, properties: {}, children: e13 };
    for (let e14 of i2) n3 = e14?.code?.call(p2, n3) || n3;
    o2.children = [];
    for (let e14 = 0; e14 < n3.children.length; e14++) {
      e14 > 0 && o2.children.push({ type: `element`, tagName: `br`, properties: {}, children: [] });
      let t4 = n3.children[e14];
      t4.type === `element` && o2.children.push(...t4.children);
    }
  }
  let m2 = o2;
  for (let e13 of i2) m2 = e13?.root?.call(p2, m2) || m2;
  return r2 && F(m2, r2), m2;
}
function mi(e12) {
  return e12.map((e13) => {
    let t2 = [], n2 = ``, r2;
    return e13.forEach((i2, a2) => {
      let o2 = !(i2.fontStyle && (i2.fontStyle & y.Underline || i2.fontStyle & y.Strikethrough));
      o2 && i2.content.match(/^\s+$/) && e13[a2 + 1] ? (r2 === void 0 && (r2 = i2.offset), n2 += i2.content) : n2 ? (o2 ? t2.push({ ...i2, offset: r2, content: n2 + i2.content }) : t2.push({ content: n2, offset: r2 }, i2), r2 = void 0, n2 = ``) : t2.push(i2);
    }), t2;
  });
}
function hi(e12) {
  return e12.map((e13) => e13.flatMap((e14) => {
    if (e14.content.match(/^\s+$/)) return e14;
    let t2 = e14.content.match(/^(\s*)(.*?)(\s*)$/);
    if (!t2) return e14;
    let [, n2, r2, i2] = t2;
    if (!n2 && !i2) return e14;
    let a2 = [{ ...e14, offset: e14.offset + n2.length, content: r2 }];
    return n2 && a2.unshift({ content: n2, offset: e14.offset }), i2 && a2.push({ content: i2, offset: e14.offset + n2.length + r2.length }), a2;
  }));
}
function gi(e12) {
  return e12.map((e13) => {
    let t2 = [];
    for (let n2 of e13) {
      if (t2.length === 0) {
        t2.push({ ...n2 });
        continue;
      }
      let e14 = t2[t2.length - 1], r2 = qr(e14.htmlStyle || Kr(e14)), i2 = qr(n2.htmlStyle || Kr(n2)), a2 = e14.fontStyle && (e14.fontStyle & y.Underline || e14.fontStyle & y.Strikethrough), o2 = n2.fontStyle && (n2.fontStyle & y.Underline || n2.fontStyle & y.Strikethrough);
      !a2 && !o2 && r2 === i2 ? e14.content += n2.content : t2.push({ ...n2 });
    }
    return t2;
  });
}
var _i = Ir;
function vi(e12, t2, n2) {
  let r2 = { meta: {}, options: n2, codeToHast: (t3, n3) => fi(e12, t3, n3), codeToTokens: (t3, n3) => Z(e12, t3, n3) }, i2 = _i(fi(e12, t2, n2, r2));
  for (let e13 of Qr(n2)) i2 = e13.postprocess?.call(r2, i2, n2) || i2;
  return i2;
}
async function yi(e12) {
  let t2 = await Ot(e12);
  return { getLastGrammarState: (...e13) => Nt(t2, ...e13), codeToTokensBase: (e13, n2) => ui(t2, e13, n2), codeToTokensWithThemes: (e13, n2) => Vt(t2, e13, n2), codeToTokens: (e13, n2) => Z(t2, e13, n2), codeToHast: (e13, n2) => fi(t2, e13, n2), codeToHtml: (e13, n2) => vi(t2, e13, n2), getBundledLanguages: () => ({}), getBundledThemes: () => ({}), ...t2, getInternalContext: () => t2 };
}
t();
var bi = class extends Error {
  constructor(e12) {
    super(e12), this.name = `ShikiError`;
  }
};
function xi() {
  return 2147483648;
}
function Si() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
var Ci = (e12, t2) => e12 + (t2 - e12 % t2) % t2;
async function wi(e12) {
  let t2, n2, r2 = {};
  function i2(e13) {
    n2 = e13, r2.HEAPU8 = new Uint8Array(e13), r2.HEAPU32 = new Uint32Array(e13);
  }
  function a2(e13, t3, n3) {
    r2.HEAPU8.copyWithin(e13, t3, t3 + n3);
  }
  function o2(e13) {
    try {
      return t2.grow(e13 - n2.byteLength + 65535 >>> 16), i2(t2.buffer), 1;
    } catch {
    }
  }
  function s2(e13) {
    let t3 = r2.HEAPU8.length;
    e13 >>>= 0;
    let n3 = xi();
    if (e13 > n3) return false;
    for (let r3 = 1; r3 <= 4; r3 *= 2) {
      let i3 = t3 * (1 + 0.2 / r3);
      if (i3 = Math.min(i3, e13 + 100663296), o2(Math.min(n3, Ci(Math.max(e13, i3), 65536)))) return true;
    }
    return false;
  }
  let c2 = typeof TextDecoder < `u` ? new TextDecoder(`utf8`) : void 0;
  function l2(e13, t3, n3 = 1024) {
    let r3 = t3 + n3, i3 = t3;
    for (; e13[i3] && !(i3 >= r3); ) ++i3;
    if (i3 - t3 > 16 && e13.buffer && c2) return c2.decode(e13.subarray(t3, i3));
    let a3 = ``;
    for (; t3 < i3; ) {
      let n4 = e13[t3++];
      if (!(n4 & 128)) {
        a3 += String.fromCharCode(n4);
        continue;
      }
      let r4 = e13[t3++] & 63;
      if ((n4 & 224) == 192) {
        a3 += String.fromCharCode((n4 & 31) << 6 | r4);
        continue;
      }
      let i4 = e13[t3++] & 63;
      if (n4 = (n4 & 240) == 224 ? (n4 & 15) << 12 | r4 << 6 | i4 : (n4 & 7) << 18 | r4 << 12 | i4 << 6 | e13[t3++] & 63, n4 < 65536) a3 += String.fromCharCode(n4);
      else {
        let e14 = n4 - 65536;
        a3 += String.fromCharCode(55296 | e14 >> 10, 56320 | e14 & 1023);
      }
    }
    return a3;
  }
  function u2(e13, t3) {
    return e13 ? l2(r2.HEAPU8, e13, t3) : ``;
  }
  let d2 = { emscripten_get_now: Si, emscripten_memcpy_big: a2, emscripten_resize_heap: s2, fd_write: () => 0 };
  async function f2() {
    let n3 = await e12({ env: d2, wasi_snapshot_preview1: d2 });
    t2 = n3.memory, i2(t2.buffer), Object.assign(r2, n3), r2.UTF8ToString = u2;
  }
  return await f2(), r2;
}
var Ti = Object.defineProperty, Ei = (e12, t2, n2) => t2 in e12 ? Ti(e12, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e12[t2] = n2, Q = (e12, t2, n2) => Ei(e12, typeof t2 == `symbol` ? t2 : t2 + ``, n2), $ = null;
function Di(e12) {
  throw new bi(e12.UTF8ToString(e12.getLastOnigError()));
}
var Oi = class e10 {
  constructor(t2) {
    Q(this, `utf16Length`), Q(this, `utf8Length`), Q(this, `utf16Value`), Q(this, `utf8Value`), Q(this, `utf16OffsetToUtf8`), Q(this, `utf8OffsetToUtf16`);
    let n2 = t2.length, r2 = e10._utf8ByteLength(t2), i2 = r2 !== n2, a2 = i2 ? new Uint32Array(n2 + 1) : null;
    i2 && (a2[n2] = r2);
    let o2 = i2 ? new Uint32Array(r2 + 1) : null;
    i2 && (o2[r2] = n2);
    let s2 = new Uint8Array(r2), c2 = 0;
    for (let e12 = 0; e12 < n2; e12++) {
      let r3 = t2.charCodeAt(e12), l2 = r3, u2 = false;
      if (r3 >= 55296 && r3 <= 56319 && e12 + 1 < n2) {
        let n3 = t2.charCodeAt(e12 + 1);
        n3 >= 56320 && n3 <= 57343 && (l2 = (r3 - 55296 << 10) + 65536 | n3 - 56320, u2 = true);
      }
      i2 && (a2[e12] = c2, u2 && (a2[e12 + 1] = c2), l2 <= 127 ? o2[c2 + 0] = e12 : l2 <= 2047 ? (o2[c2 + 0] = e12, o2[c2 + 1] = e12) : l2 <= 65535 ? (o2[c2 + 0] = e12, o2[c2 + 1] = e12, o2[c2 + 2] = e12) : (o2[c2 + 0] = e12, o2[c2 + 1] = e12, o2[c2 + 2] = e12, o2[c2 + 3] = e12)), l2 <= 127 ? s2[c2++] = l2 : l2 <= 2047 ? (s2[c2++] = 192 | (l2 & 1984) >>> 6, s2[c2++] = 128 | (l2 & 63) >>> 0) : l2 <= 65535 ? (s2[c2++] = 224 | (l2 & 61440) >>> 12, s2[c2++] = 128 | (l2 & 4032) >>> 6, s2[c2++] = 128 | (l2 & 63) >>> 0) : (s2[c2++] = 240 | (l2 & 1835008) >>> 18, s2[c2++] = 128 | (l2 & 258048) >>> 12, s2[c2++] = 128 | (l2 & 4032) >>> 6, s2[c2++] = 128 | (l2 & 63) >>> 0), u2 && e12++;
    }
    this.utf16Length = n2, this.utf8Length = r2, this.utf16Value = t2, this.utf8Value = s2, this.utf16OffsetToUtf8 = a2, this.utf8OffsetToUtf16 = o2;
  }
  static _utf8ByteLength(e12) {
    let t2 = 0;
    for (let n2 = 0, r2 = e12.length; n2 < r2; n2++) {
      let i2 = e12.charCodeAt(n2), a2 = i2, o2 = false;
      if (i2 >= 55296 && i2 <= 56319 && n2 + 1 < r2) {
        let t3 = e12.charCodeAt(n2 + 1);
        t3 >= 56320 && t3 <= 57343 && (a2 = (i2 - 55296 << 10) + 65536 | t3 - 56320, o2 = true);
      }
      a2 <= 127 ? t2 += 1 : a2 <= 2047 ? t2 += 2 : a2 <= 65535 ? t2 += 3 : t2 += 4, o2 && n2++;
    }
    return t2;
  }
  createString(e12) {
    let t2 = e12.omalloc(this.utf8Length);
    return e12.HEAPU8.set(this.utf8Value, t2), t2;
  }
}, ki = class e11 {
  constructor(t2) {
    if (Q(this, `id`, ++e11.LAST_ID), Q(this, `_onigBinding`), Q(this, `content`), Q(this, `utf16Length`), Q(this, `utf8Length`), Q(this, `utf16OffsetToUtf8`), Q(this, `utf8OffsetToUtf16`), Q(this, `ptr`), !$) throw new bi(`Must invoke loadWasm first.`);
    this._onigBinding = $, this.content = t2;
    let n2 = new Oi(t2);
    this.utf16Length = n2.utf16Length, this.utf8Length = n2.utf8Length, this.utf16OffsetToUtf8 = n2.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = n2.utf8OffsetToUtf16, this.utf8Length < 1e4 && !e11._sharedPtrInUse ? (e11._sharedPtr || (e11._sharedPtr = $.omalloc(1e4)), e11._sharedPtrInUse = true, $.HEAPU8.set(n2.utf8Value, e11._sharedPtr), this.ptr = e11._sharedPtr) : this.ptr = n2.createString($);
  }
  convertUtf8OffsetToUtf16(e12) {
    return this.utf8OffsetToUtf16 ? e12 < 0 ? 0 : e12 > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e12] : e12;
  }
  convertUtf16OffsetToUtf8(e12) {
    return this.utf16OffsetToUtf8 ? e12 < 0 ? 0 : e12 > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e12] : e12;
  }
  dispose() {
    this.ptr === e11._sharedPtr ? e11._sharedPtrInUse = false : this._onigBinding.ofree(this.ptr);
  }
};
Q(ki, `LAST_ID`, 0), Q(ki, `_sharedPtr`, 0), Q(ki, `_sharedPtrInUse`, false);
var Ai = ki, ji = class {
  constructor(e12) {
    if (Q(this, `_onigBinding`), Q(this, `_ptr`), !$) throw new bi(`Must invoke loadWasm first.`);
    let t2 = [], n2 = [];
    for (let r3 = 0, i3 = e12.length; r3 < i3; r3++) {
      let i4 = new Oi(e12[r3]);
      t2[r3] = i4.createString($), n2[r3] = i4.utf8Length;
    }
    let r2 = $.omalloc(4 * e12.length);
    $.HEAPU32.set(t2, r2 / 4);
    let i2 = $.omalloc(4 * e12.length);
    $.HEAPU32.set(n2, i2 / 4);
    let a2 = $.createOnigScanner(r2, i2, e12.length);
    for (let n3 = 0, r3 = e12.length; n3 < r3; n3++) $.ofree(t2[n3]);
    $.ofree(i2), $.ofree(r2), a2 === 0 && Di($), this._onigBinding = $, this._ptr = a2;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(e12, t2, n2) {
    let r2 = 0;
    if (typeof n2 == `number` && (r2 = n2), typeof e12 == `string`) {
      e12 = new Ai(e12);
      let n3 = this._findNextMatchSync(e12, t2, false, r2);
      return e12.dispose(), n3;
    }
    return this._findNextMatchSync(e12, t2, false, r2);
  }
  _findNextMatchSync(e12, t2, n2, r2) {
    let i2 = this._onigBinding, a2 = i2.findNextOnigScannerMatch(this._ptr, e12.id, e12.ptr, e12.utf8Length, e12.convertUtf16OffsetToUtf8(t2), r2);
    if (a2 === 0) return null;
    let o2 = i2.HEAPU32, s2 = a2 / 4, c2 = o2[s2++], l2 = o2[s2++], u2 = [];
    for (let t3 = 0; t3 < l2; t3++) {
      let n3 = e12.convertUtf8OffsetToUtf16(o2[s2++]), r3 = e12.convertUtf8OffsetToUtf16(o2[s2++]);
      u2[t3] = { start: n3, end: r3, length: r3 - n3 };
    }
    return { index: c2, captureIndices: u2 };
  }
};
function Mi(e12) {
  return typeof e12.instantiator == `function`;
}
function Ni(e12) {
  return typeof e12.default == `function`;
}
function Pi(e12) {
  return e12.data !== void 0;
}
function Fi(e12) {
  return typeof Response < `u` && e12 instanceof Response;
}
function Ii(e12) {
  return typeof ArrayBuffer < `u` && (e12 instanceof ArrayBuffer || ArrayBuffer.isView(e12)) || n !== void 0 && n.isBuffer?.(e12) || typeof SharedArrayBuffer < `u` && e12 instanceof SharedArrayBuffer || typeof Uint32Array < `u` && e12 instanceof Uint32Array;
}
var Li;
function Ri(e12) {
  if (Li) return Li;
  async function t2() {
    $ = await wi(async (t3) => {
      let n2 = e12;
      return n2 = await n2, typeof n2 == `function` && (n2 = await n2(t3)), typeof n2 == `function` && (n2 = await n2(t3)), Mi(n2) ? n2 = await n2.instantiator(t3) : Ni(n2) ? n2 = await n2.default(t3) : (Pi(n2) && (n2 = n2.data), Fi(n2) ? n2 = typeof WebAssembly.instantiateStreaming == `function` ? await Bi(n2)(t3) : await Vi(n2)(t3) : Ii(n2) || n2 instanceof WebAssembly.Module ? n2 = await zi(n2)(t3) : `default` in n2 && n2.default instanceof WebAssembly.Module && (n2 = await zi(n2.default)(t3))), `instance` in n2 && (n2 = n2.instance), `exports` in n2 && (n2 = n2.exports), n2;
    });
  }
  return Li = t2(), Li;
}
function zi(e12) {
  return (t2) => WebAssembly.instantiate(e12, t2);
}
function Bi(e12) {
  return (t2) => WebAssembly.instantiateStreaming(e12, t2);
}
function Vi(e12) {
  return async (t2) => {
    let n2 = await e12.arrayBuffer();
    return WebAssembly.instantiate(n2, t2);
  };
}
async function Hi(e12) {
  return e12 && await Ri(e12), { createScanner(e13) {
    return new ji(e13.map((e14) => typeof e14 == `string` ? e14 : e14.source));
  }, createString(e13) {
    return new Ai(e13);
  } };
}
export {
  yi as n,
  Hi as t
};
