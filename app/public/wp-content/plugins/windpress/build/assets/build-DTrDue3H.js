import { o as e, t } from "./chunk-DcEfI0Mx.js";
import { i as n, n as r, r as i, t as a } from "./source-map-generator-Bvx-3KHt.js";
import { n as o, t as s } from "./dist-CansbW7y.js";
import { i as c, n as l, o as u, t as d } from "./default-map-Cw3uSgAb.js";
import { l as f } from "./cssesc-DEUDTBaR.js";
import { a as p, n as m, r as h, t as g } from "./lightningcss-wasm-BhTiiZIU.js";
o();
var _ = 44, v = 59, y = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, b = new Uint8Array(64), x = new Uint8Array(128);
for (let e5 = 0; e5 < y.length; e5++) {
  let t2 = y.charCodeAt(e5);
  b[e5] = t2, x[t2] = e5;
}
function S(e5, t2) {
  let n2 = 0, r2 = 0, i2 = 0;
  do
    i2 = x[e5.next()], n2 |= (i2 & 31) << r2, r2 += 5;
  while (i2 & 32);
  let a2 = n2 & 1;
  return n2 >>>= 1, a2 && (n2 = -2147483648 | -n2), t2 + n2;
}
function C(e5, t2, n2) {
  let r2 = t2 - n2;
  r2 = r2 < 0 ? -r2 << 1 | 1 : r2 << 1;
  do {
    let t3 = r2 & 31;
    r2 >>>= 5, r2 > 0 && (t3 |= 32), e5.write(b[t3]);
  } while (r2 > 0);
  return t2;
}
function w(e5, t2) {
  return e5.pos >= t2 ? false : e5.peek() !== _;
}
var T = 1024 * 16, E = typeof TextDecoder < `u` ? new TextDecoder() : s === void 0 ? { decode(e5) {
  let t2 = ``;
  for (let n2 = 0; n2 < e5.length; n2++) t2 += String.fromCharCode(e5[n2]);
  return t2;
} } : { decode(e5) {
  return s.from(e5.buffer, e5.byteOffset, e5.byteLength).toString();
} }, ee = class {
  constructor() {
    this.pos = 0, this.out = ``, this.buffer = new Uint8Array(T);
  }
  write(e5) {
    let { buffer: t2 } = this;
    t2[this.pos++] = e5, this.pos === T && (this.out += E.decode(t2), this.pos = 0);
  }
  flush() {
    let { buffer: e5, out: t2, pos: n2 } = this;
    return n2 > 0 ? t2 + E.decode(e5.subarray(0, n2)) : t2;
  }
}, te = class {
  constructor(e5) {
    this.pos = 0, this.buffer = e5;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(e5) {
    let { buffer: t2, pos: n2 } = this, r2 = t2.indexOf(e5, n2);
    return r2 === -1 ? t2.length : r2;
  }
};
function ne(e5) {
  let { length: t2 } = e5, n2 = new te(e5), r2 = [], i2 = 0, a2 = 0, o2 = 0, s2 = 0, c2 = 0;
  do {
    let e6 = n2.indexOf(`;`), t3 = [], l2 = true, u2 = 0;
    for (i2 = 0; n2.pos < e6; ) {
      let r3;
      i2 = S(n2, i2), i2 < u2 && (l2 = false), u2 = i2, w(n2, e6) ? (a2 = S(n2, a2), o2 = S(n2, o2), s2 = S(n2, s2), w(n2, e6) ? (c2 = S(n2, c2), r3 = [i2, a2, o2, s2, c2]) : r3 = [i2, a2, o2, s2]) : r3 = [i2], t3.push(r3), n2.pos++;
    }
    l2 || re(t3), r2.push(t3), n2.pos = e6 + 1;
  } while (n2.pos <= t2);
  return r2;
}
function re(e5) {
  e5.sort(ie);
}
function ie(e5, t2) {
  return e5[0] - t2[0];
}
function D(e5) {
  let t2 = new ee(), n2 = 0, r2 = 0, i2 = 0, a2 = 0;
  for (let o2 = 0; o2 < e5.length; o2++) {
    let s2 = e5[o2];
    if (o2 > 0 && t2.write(v), s2.length === 0) continue;
    let c2 = 0;
    for (let e6 = 0; e6 < s2.length; e6++) {
      let o3 = s2[e6];
      e6 > 0 && t2.write(_), c2 = C(t2, o3[0], c2), o3.length !== 1 && (n2 = C(t2, o3[1], n2), r2 = C(t2, o3[2], r2), i2 = C(t2, o3[3], i2), o3.length !== 4 && (a2 = C(t2, o3[4], a2)));
    }
  }
  return t2.flush();
}
o();
var O = class e2 {
  constructor(t2) {
    this.bits = t2 instanceof e2 ? t2.bits.slice() : [];
  }
  add(e5) {
    this.bits[e5 >> 5] |= 1 << (e5 & 31);
  }
  has(e5) {
    return !!(this.bits[e5 >> 5] & 1 << (e5 & 31));
  }
}, k = class e3 {
  constructor(e5, t2, n2) {
    this.start = e5, this.end = t2, this.original = n2, this.intro = ``, this.outro = ``, this.content = n2, this.storeName = false, this.edited = false, this.previous = null, this.next = null;
  }
  appendLeft(e5) {
    this.outro += e5;
  }
  appendRight(e5) {
    this.intro += e5;
  }
  clone() {
    let t2 = new e3(this.start, this.end, this.original);
    return t2.intro = this.intro, t2.outro = this.outro, t2.content = this.content, t2.storeName = this.storeName, t2.edited = this.edited, t2;
  }
  contains(e5) {
    return this.start < e5 && e5 < this.end;
  }
  eachNext(e5) {
    let t2 = this;
    for (; t2; ) e5(t2), t2 = t2.next;
  }
  eachPrevious(e5) {
    let t2 = this;
    for (; t2; ) e5(t2), t2 = t2.previous;
  }
  edit(e5, t2, n2) {
    return this.content = e5, n2 || (this.intro = ``, this.outro = ``), this.storeName = t2, this.edited = true, this;
  }
  prependLeft(e5) {
    this.outro = e5 + this.outro;
  }
  prependRight(e5) {
    this.intro = e5 + this.intro;
  }
  reset() {
    this.intro = ``, this.outro = ``, this.edited && (this.edited = (this.content = this.original, this.storeName = false, false));
  }
  split(t2) {
    let n2 = t2 - this.start, r2 = this.original.slice(0, n2), i2 = this.original.slice(n2);
    this.original = r2;
    let a2 = new e3(t2, this.end, i2);
    return a2.outro = this.outro, this.outro = ``, this.end = t2, this.edited ? (a2.edit(``, false), this.content = ``) : this.content = r2, a2.next = this.next, a2.next && (a2.next.previous = a2), a2.previous = this, this.next = a2, a2;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(e5) {
    if (this.outro = this.outro.replace(e5, ``), this.outro.length) return true;
    let t2 = this.content.replace(e5, ``);
    if (t2.length) return t2 !== this.content && (this.split(this.start + t2.length).edit(``, void 0, true), this.edited && this.edit(t2, this.storeName, true)), true;
    if (this.edit(``, void 0, true), this.intro = this.intro.replace(e5, ``), this.intro.length) return true;
  }
  trimStart(e5) {
    if (this.intro = this.intro.replace(e5, ``), this.intro.length) return true;
    let t2 = this.content.replace(e5, ``);
    if (t2.length) {
      if (t2 !== this.content) {
        let e6 = this.split(this.end - t2.length);
        this.edited && e6.edit(t2, this.storeName, true), this.edit(``, void 0, true);
      }
      return true;
    } else if (this.edit(``, void 0, true), this.outro = this.outro.replace(e5, ``), this.outro.length) return true;
  }
};
function ae() {
  return typeof globalThis < `u` && typeof globalThis.btoa == `function` ? (e5) => globalThis.btoa(unescape(encodeURIComponent(e5))) : typeof s == `function` ? (e5) => s.from(e5, `utf-8`).toString(`base64`) : () => {
    throw Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
var oe = ae(), se = class {
  constructor(e5) {
    this.version = 3, this.file = e5.file, this.sources = e5.sources, this.sourcesContent = e5.sourcesContent, this.names = e5.names, this.mappings = D(e5.mappings), e5.x_google_ignoreList !== void 0 && (this.x_google_ignoreList = e5.x_google_ignoreList), e5.debugId !== void 0 && (this.debugId = e5.debugId);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return `data:application/json;charset=utf-8;base64,` + oe(this.toString());
  }
};
function ce(e5) {
  let t2 = e5.split(`
`), n2 = t2.filter((e6) => /^\t+/.test(e6)), r2 = t2.filter((e6) => /^ {2,}/.test(e6));
  if (n2.length === 0 && r2.length === 0) return null;
  if (n2.length >= r2.length) return `	`;
  let i2 = r2.reduce((e6, t3) => {
    let n3 = /^ +/.exec(t3)[0].length;
    return Math.min(n3, e6);
  }, 1 / 0);
  return Array(i2 + 1).join(` `);
}
function le(e5, t2) {
  let n2 = e5.split(/[/\\]/), r2 = t2.split(/[/\\]/);
  for (n2.pop(); n2[0] === r2[0]; ) n2.shift(), r2.shift();
  if (n2.length) {
    let e6 = n2.length;
    for (; e6--; ) n2[e6] = `..`;
  }
  return n2.concat(r2).join(`/`);
}
var ue = Object.prototype.toString;
function de(e5) {
  return ue.call(e5) === `[object Object]`;
}
function A(e5) {
  let t2 = e5.split(`
`), n2 = [];
  for (let e6 = 0, r2 = 0; e6 < t2.length; e6++) n2.push(r2), r2 += t2[e6].length + 1;
  return function(e6) {
    let t3 = 0, r2 = n2.length;
    for (; t3 < r2; ) {
      let i3 = t3 + r2 >> 1;
      e6 < n2[i3] ? r2 = i3 : t3 = i3 + 1;
    }
    let i2 = t3 - 1;
    return { line: i2, column: e6 - n2[i2] };
  };
}
var fe = /\w/, pe = class {
  constructor(e5) {
    this.hires = e5, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(e5, t2, n2, r2) {
    if (t2.length) {
      let i2 = t2.length - 1, a2 = t2.indexOf(`
`, 0), o2 = -1;
      for (; a2 >= 0 && i2 > a2; ) {
        let i3 = [this.generatedCodeColumn, e5, n2.line, n2.column];
        r2 >= 0 && i3.push(r2), this.rawSegments.push(i3), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o2 = a2, a2 = t2.indexOf(`
`, a2 + 1);
      }
      let s2 = [this.generatedCodeColumn, e5, n2.line, n2.column];
      r2 >= 0 && s2.push(r2), this.rawSegments.push(s2), this.advance(t2.slice(o2 + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(t2));
    this.pending = null;
  }
  addUneditedChunk(e5, t2, n2, r2, i2) {
    let a2 = t2.start, o2 = true, s2 = false;
    for (; a2 < t2.end; ) {
      if (n2[a2] === `
`) r2.line += 1, r2.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, o2 = true, s2 = false;
      else {
        if (this.hires || o2 || i2.has(a2)) {
          let t3 = [this.generatedCodeColumn, e5, r2.line, r2.column];
          this.hires === `boundary` ? fe.test(n2[a2]) ? s2 || (s2 = (this.rawSegments.push(t3), true)) : (this.rawSegments.push(t3), s2 = false) : this.rawSegments.push(t3);
        }
        r2.column += 1, this.generatedCodeColumn += 1, o2 = false;
      }
      a2 += 1;
    }
    this.pending = null;
  }
  advance(e5) {
    if (!e5) return;
    let t2 = e5.split(`
`);
    if (t2.length > 1) {
      for (let e6 = 0; e6 < t2.length - 1; e6++) this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += t2[t2.length - 1].length;
  }
}, j = `
`, M = { insertLeft: false, insertRight: false, storeName: false }, me = class e4 {
  constructor(e5, t2 = {}) {
    let n2 = new k(0, e5.length, e5);
    Object.defineProperties(this, { original: { writable: true, value: e5 }, outro: { writable: true, value: `` }, intro: { writable: true, value: `` }, firstChunk: { writable: true, value: n2 }, lastChunk: { writable: true, value: n2 }, lastSearchedChunk: { writable: true, value: n2 }, byStart: { writable: true, value: {} }, byEnd: { writable: true, value: {} }, filename: { writable: true, value: t2.filename }, indentExclusionRanges: { writable: true, value: t2.indentExclusionRanges }, sourcemapLocations: { writable: true, value: new O() }, storedNames: { writable: true, value: {} }, indentStr: { writable: true, value: void 0 }, ignoreList: { writable: true, value: t2.ignoreList }, offset: { writable: true, value: t2.offset || 0 } }), this.byStart[0] = n2, this.byEnd[e5.length] = n2;
  }
  addSourcemapLocation(e5) {
    this.sourcemapLocations.add(e5);
  }
  append(e5) {
    if (typeof e5 != `string`) throw TypeError(`outro content must be a string`);
    return this.outro += e5, this;
  }
  appendLeft(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byEnd[e5];
    return n2 ? n2.appendLeft(t2) : this.intro += t2, this;
  }
  appendRight(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byStart[e5];
    return n2 ? n2.appendRight(t2) : this.outro += t2, this;
  }
  clone() {
    let t2 = new e4(this.original, { filename: this.filename, offset: this.offset }), n2 = this.firstChunk, r2 = t2.firstChunk = t2.lastSearchedChunk = n2.clone();
    for (; n2; ) {
      t2.byStart[r2.start] = r2, t2.byEnd[r2.end] = r2;
      let e5 = n2.next, i2 = e5 && e5.clone();
      i2 && (r2.next = i2, i2.previous = r2, r2 = i2), n2 = e5;
    }
    return t2.lastChunk = r2, this.indentExclusionRanges && (t2.indentExclusionRanges = this.indentExclusionRanges.slice()), t2.sourcemapLocations = new O(this.sourcemapLocations), t2.intro = this.intro, t2.outro = this.outro, t2;
  }
  generateDecodedMap(e5) {
    e5 || (e5 = {});
    let t2 = Object.keys(this.storedNames), n2 = new pe(e5.hires), r2 = A(this.original);
    return this.intro && n2.advance(this.intro), this.firstChunk.eachNext((e6) => {
      let i2 = r2(e6.start);
      e6.intro.length && n2.advance(e6.intro), e6.edited ? n2.addEdit(0, e6.content, i2, e6.storeName ? t2.indexOf(e6.original) : -1) : n2.addUneditedChunk(0, e6, this.original, i2, this.sourcemapLocations), e6.outro.length && n2.advance(e6.outro);
    }), this.outro && n2.advance(this.outro), { file: e5.file ? e5.file.split(/[/\\]/).pop() : void 0, sources: [e5.source ? le(e5.file || ``, e5.source) : e5.file || ``], sourcesContent: e5.includeContent ? [this.original] : void 0, names: t2, mappings: n2.raw, x_google_ignoreList: this.ignoreList ? [0] : void 0 };
  }
  generateMap(e5) {
    return new se(this.generateDecodedMap(e5));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = ce(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? `	` : this.indentStr;
  }
  indent(e5, t2) {
    let n2 = /^[^\r\n]/gm;
    if (de(e5) && (t2 = e5, e5 = void 0), e5 === void 0 && (this._ensureindentStr(), e5 = this.indentStr || `	`), e5 === ``) return this;
    t2 || (t2 = {});
    let r2 = {};
    t2.exclude && (typeof t2.exclude[0] == `number` ? [t2.exclude] : t2.exclude).forEach((e6) => {
      for (let t3 = e6[0]; t3 < e6[1]; t3 += 1) r2[t3] = true;
    });
    let i2 = t2.indentStart !== false, a2 = (t3) => i2 ? `${e5}${t3}` : (i2 = true, t3);
    this.intro = this.intro.replace(n2, a2);
    let o2 = 0, s2 = this.firstChunk;
    for (; s2; ) {
      let t3 = s2.end;
      if (s2.edited) r2[o2] || (s2.content = s2.content.replace(n2, a2), s2.content.length && (i2 = s2.content[s2.content.length - 1] === `
`));
      else for (o2 = s2.start; o2 < t3; ) {
        if (!r2[o2]) {
          let t4 = this.original[o2];
          t4 === `
` ? i2 = true : t4 !== `\r` && i2 && (i2 = false, o2 === s2.start ? s2.prependRight(e5) : (this._splitChunk(s2, o2), s2 = s2.next, s2.prependRight(e5)));
        }
        o2 += 1;
      }
      o2 = s2.end, s2 = s2.next;
    }
    return this.outro = this.outro.replace(n2, a2), this;
  }
  insert() {
    throw Error(`magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)`);
  }
  insertLeft(e5, t2) {
    return M.insertLeft || (M.insertLeft = (console.warn(`magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead`), true)), this.appendLeft(e5, t2);
  }
  insertRight(e5, t2) {
    return M.insertRight || (M.insertRight = (console.warn(`magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead`), true)), this.prependRight(e5, t2);
  }
  move(e5, t2, n2) {
    if (e5 += this.offset, t2 += this.offset, n2 += this.offset, n2 >= e5 && n2 <= t2) throw Error(`Cannot move a selection inside itself`);
    this._split(e5), this._split(t2), this._split(n2);
    let r2 = this.byStart[e5], i2 = this.byEnd[t2], a2 = r2.previous, o2 = i2.next, s2 = this.byStart[n2];
    if (!s2 && i2 === this.lastChunk) return this;
    let c2 = s2 ? s2.previous : this.lastChunk;
    return a2 && (a2.next = o2), o2 && (o2.previous = a2), c2 && (c2.next = r2), s2 && (s2.previous = i2), r2.previous || (this.firstChunk = i2.next), i2.next || (this.lastChunk = r2.previous, this.lastChunk.next = null), r2.previous = c2, i2.next = s2 || null, c2 || (this.firstChunk = r2), s2 || (this.lastChunk = i2), this;
  }
  overwrite(e5, t2, n2, r2) {
    return r2 || (r2 = {}), this.update(e5, t2, n2, { ...r2, overwrite: !r2.contentOnly });
  }
  update(e5, t2, n2, r2) {
    if (e5 += this.offset, t2 += this.offset, typeof n2 != `string`) throw TypeError(`replacement content must be a string`);
    if (this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    if (t2 > this.original.length) throw Error(`end is out of bounds`);
    if (e5 === t2) throw Error(`Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead`);
    this._split(e5), this._split(t2), r2 === true && (M.storeName || (M.storeName = (console.warn(`The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string`), true)), r2 = { storeName: true });
    let i2 = r2 === void 0 ? false : r2.storeName, a2 = r2 === void 0 ? false : r2.overwrite;
    if (i2) {
      let n3 = this.original.slice(e5, t2);
      Object.defineProperty(this.storedNames, n3, { writable: true, value: true, enumerable: true });
    }
    let o2 = this.byStart[e5], s2 = this.byEnd[t2];
    if (o2) {
      let e6 = o2;
      for (; e6 !== s2; ) {
        if (e6.next !== this.byStart[e6.end]) throw Error(`Cannot overwrite across a split point`);
        e6 = e6.next, e6.edit(``, false);
      }
      o2.edit(n2, i2, !a2);
    } else {
      let r3 = new k(e5, t2, ``).edit(n2, i2);
      s2.next = r3, r3.previous = s2;
    }
    return this;
  }
  prepend(e5) {
    if (typeof e5 != `string`) throw TypeError(`outro content must be a string`);
    return this.intro = e5 + this.intro, this;
  }
  prependLeft(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byEnd[e5];
    return n2 ? n2.prependLeft(t2) : this.intro = t2 + this.intro, this;
  }
  prependRight(e5, t2) {
    if (e5 += this.offset, typeof t2 != `string`) throw TypeError(`inserted content must be a string`);
    this._split(e5);
    let n2 = this.byStart[e5];
    return n2 ? n2.prependRight(t2) : this.outro = t2 + this.outro, this;
  }
  remove(e5, t2) {
    if (e5 += this.offset, t2 += this.offset, this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    if (e5 === t2) return this;
    if (e5 < 0 || t2 > this.original.length) throw Error(`Character is out of bounds`);
    if (e5 > t2) throw Error(`end must be greater than start`);
    this._split(e5), this._split(t2);
    let n2 = this.byStart[e5];
    for (; n2; ) n2.intro = ``, n2.outro = ``, n2.edit(``), n2 = t2 > n2.end ? this.byStart[n2.end] : null;
    return this;
  }
  reset(e5, t2) {
    if (e5 += this.offset, t2 += this.offset, this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    if (e5 === t2) return this;
    if (e5 < 0 || t2 > this.original.length) throw Error(`Character is out of bounds`);
    if (e5 > t2) throw Error(`end must be greater than start`);
    this._split(e5), this._split(t2);
    let n2 = this.byStart[e5];
    for (; n2; ) n2.reset(), n2 = t2 > n2.end ? this.byStart[n2.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let e5 = this.lastChunk;
    do {
      if (e5.outro.length) return e5.outro[e5.outro.length - 1];
      if (e5.content.length) return e5.content[e5.content.length - 1];
      if (e5.intro.length) return e5.intro[e5.intro.length - 1];
    } while (e5 = e5.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : ``;
  }
  lastLine() {
    let e5 = this.outro.lastIndexOf(j);
    if (e5 !== -1) return this.outro.substr(e5 + 1);
    let t2 = this.outro, n2 = this.lastChunk;
    do {
      if (n2.outro.length > 0) {
        if (e5 = n2.outro.lastIndexOf(j), e5 !== -1) return n2.outro.substr(e5 + 1) + t2;
        t2 = n2.outro + t2;
      }
      if (n2.content.length > 0) {
        if (e5 = n2.content.lastIndexOf(j), e5 !== -1) return n2.content.substr(e5 + 1) + t2;
        t2 = n2.content + t2;
      }
      if (n2.intro.length > 0) {
        if (e5 = n2.intro.lastIndexOf(j), e5 !== -1) return n2.intro.substr(e5 + 1) + t2;
        t2 = n2.intro + t2;
      }
    } while (n2 = n2.previous);
    return e5 = this.intro.lastIndexOf(j), e5 === -1 ? this.intro + t2 : this.intro.substr(e5 + 1) + t2;
  }
  slice(e5 = 0, t2 = this.original.length - this.offset) {
    if (e5 += this.offset, t2 += this.offset, this.original.length !== 0) {
      for (; e5 < 0; ) e5 += this.original.length;
      for (; t2 < 0; ) t2 += this.original.length;
    }
    let n2 = ``, r2 = this.firstChunk;
    for (; r2 && (r2.start > e5 || r2.end <= e5); ) {
      if (r2.start < t2 && r2.end >= t2) return n2;
      r2 = r2.next;
    }
    if (r2 && r2.edited && r2.start !== e5) throw Error(`Cannot use replaced character ${e5} as slice start anchor.`);
    let i2 = r2;
    for (; r2; ) {
      r2.intro && (i2 !== r2 || r2.start === e5) && (n2 += r2.intro);
      let a2 = r2.start < t2 && r2.end >= t2;
      if (a2 && r2.edited && r2.end !== t2) throw Error(`Cannot use replaced character ${t2} as slice end anchor.`);
      let o2 = i2 === r2 ? e5 - r2.start : 0, s2 = a2 ? r2.content.length + t2 - r2.end : r2.content.length;
      if (n2 += r2.content.slice(o2, s2), r2.outro && (!a2 || r2.end === t2) && (n2 += r2.outro), a2) break;
      r2 = r2.next;
    }
    return n2;
  }
  snip(e5, t2) {
    let n2 = this.clone();
    return n2.remove(0, e5), n2.remove(t2, n2.original.length), n2;
  }
  _split(e5) {
    if (this.byStart[e5] || this.byEnd[e5]) return;
    let t2 = this.lastSearchedChunk, n2 = t2, r2 = e5 > t2.end;
    for (; t2; ) {
      if (t2.contains(e5)) return this._splitChunk(t2, e5);
      if (t2 = r2 ? this.byStart[t2.end] : this.byEnd[t2.start], t2 === n2) return;
      n2 = t2;
    }
  }
  _splitChunk(e5, t2) {
    if (e5.edited && e5.content.length) {
      let n3 = A(this.original)(t2);
      throw Error(`Cannot split a chunk that has already been edited (${n3.line}:${n3.column} \u2013 "${e5.original}")`);
    }
    let n2 = e5.split(t2);
    return this.byEnd[t2] = e5, this.byStart[t2] = n2, this.byEnd[n2.end] = n2, e5 === this.lastChunk && (this.lastChunk = n2), this.lastSearchedChunk = e5, true;
  }
  toString() {
    let e5 = this.intro, t2 = this.firstChunk;
    for (; t2; ) e5 += t2.toString(), t2 = t2.next;
    return e5 + this.outro;
  }
  isEmpty() {
    let e5 = this.firstChunk;
    do
      if (e5.intro.length && e5.intro.trim() || e5.content.length && e5.content.trim() || e5.outro.length && e5.outro.trim()) return false;
    while (e5 = e5.next);
    return true;
  }
  length() {
    let e5 = this.firstChunk, t2 = 0;
    do
      t2 += e5.intro.length + e5.content.length + e5.outro.length;
    while (e5 = e5.next);
    return t2;
  }
  trimLines() {
    return this.trim(`[\\r\\n]`);
  }
  trim(e5) {
    return this.trimStart(e5).trimEnd(e5);
  }
  trimEndAborted(e5) {
    let t2 = RegExp((e5 || `\\s`) + `+$`);
    if (this.outro = this.outro.replace(t2, ``), this.outro.length) return true;
    let n2 = this.lastChunk;
    do {
      let e6 = n2.end, r2 = n2.trimEnd(t2);
      if (n2.end !== e6 && (this.lastChunk === n2 && (this.lastChunk = n2.next), this.byEnd[n2.end] = n2, this.byStart[n2.next.start] = n2.next, this.byEnd[n2.next.end] = n2.next), r2) return true;
      n2 = n2.previous;
    } while (n2);
    return false;
  }
  trimEnd(e5) {
    return this.trimEndAborted(e5), this;
  }
  trimStartAborted(e5) {
    let t2 = RegExp(`^` + (e5 || `\\s`) + `+`);
    if (this.intro = this.intro.replace(t2, ``), this.intro.length) return true;
    let n2 = this.firstChunk;
    do {
      let e6 = n2.end, r2 = n2.trimStart(t2);
      if (n2.end !== e6 && (n2 === this.lastChunk && (this.lastChunk = n2.next), this.byEnd[n2.end] = n2, this.byStart[n2.next.start] = n2.next, this.byEnd[n2.next.end] = n2.next), r2) return true;
      n2 = n2.next;
    } while (n2);
    return false;
  }
  trimStart(e5) {
    return this.trimStartAborted(e5), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(e5, t2) {
    function n2(e6, n3) {
      return typeof t2 == `string` ? t2.replace(/\$(\$|&|\d+)/g, (t3, n4) => n4 === `$` ? `$` : n4 === `&` ? e6[0] : +n4 < e6.length ? e6[+n4] : `$${n4}`) : t2(...e6, e6.index, n3, e6.groups);
    }
    function r2(e6, t3) {
      let n3, r3 = [];
      for (; n3 = e6.exec(t3); ) r3.push(n3);
      return r3;
    }
    if (e5.global) r2(e5, this.original).forEach((e6) => {
      if (e6.index != null) {
        let t3 = n2(e6, this.original);
        t3 !== e6[0] && this.overwrite(e6.index, e6.index + e6[0].length, t3);
      }
    });
    else {
      let t3 = this.original.match(e5);
      if (t3 && t3.index != null) {
        let e6 = n2(t3, this.original);
        e6 !== t3[0] && this.overwrite(t3.index, t3.index + t3[0].length, e6);
      }
    }
    return this;
  }
  _replaceString(e5, t2) {
    let { original: n2 } = this, r2 = n2.indexOf(e5);
    return r2 !== -1 && (typeof t2 == `function` && (t2 = t2(e5, r2, n2)), e5 !== t2 && this.overwrite(r2, r2 + e5.length, t2)), this;
  }
  replace(e5, t2) {
    return typeof e5 == `string` ? this._replaceString(e5, t2) : this._replaceRegexp(e5, t2);
  }
  _replaceAllString(e5, t2) {
    let { original: n2 } = this, r2 = e5.length;
    for (let i2 = n2.indexOf(e5); i2 !== -1; i2 = n2.indexOf(e5, i2 + r2)) {
      let e6 = n2.slice(i2, i2 + r2), a2 = t2;
      typeof t2 == `function` && (a2 = t2(e6, i2, n2)), e6 !== a2 && this.overwrite(i2, i2 + r2, a2);
    }
    return this;
  }
  replaceAll(e5, t2) {
    if (typeof e5 == `string`) return this._replaceAllString(e5, t2);
    if (!e5.global) throw TypeError(`MagicString.prototype.replaceAll called with a non-global RegExp argument`);
    return this._replaceRegexp(e5, t2);
  }
}, he = e(t(((e5, t2) => {
  (function(n2, r2) {
    typeof e5 == `object` && t2 !== void 0 ? t2.exports = r2() : typeof define == `function` && define.amd ? define(r2) : (n2 = typeof globalThis < `u` ? globalThis : n2 || self, n2.resolveURI = r2());
  })(e5, (function() {
    let e6 = /^[\w+.-]+:\/\//, t3 = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, n2 = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    function r2(t4) {
      return e6.test(t4);
    }
    function i2(e7) {
      return e7.startsWith(`//`);
    }
    function a2(e7) {
      return e7.startsWith(`/`);
    }
    function o2(e7) {
      return e7.startsWith(`file:`);
    }
    function s2(e7) {
      return /^[.?#]/.test(e7);
    }
    function c2(e7) {
      let n3 = t3.exec(e7);
      return u2(n3[1], n3[2] || ``, n3[3], n3[4] || ``, n3[5] || `/`, n3[6] || ``, n3[7] || ``);
    }
    function l2(e7) {
      let t4 = n2.exec(e7), r3 = t4[2];
      return u2(`file:`, ``, t4[1] || ``, ``, a2(r3) ? r3 : `/` + r3, t4[3] || ``, t4[4] || ``);
    }
    function u2(e7, t4, n3, r3, i3, a3, o3) {
      return { scheme: e7, user: t4, host: n3, port: r3, path: i3, query: a3, hash: o3, type: 7 };
    }
    function d2(e7) {
      if (i2(e7)) {
        let t5 = c2(`http:` + e7);
        return t5.scheme = ``, t5.type = 6, t5;
      }
      if (a2(e7)) {
        let t5 = c2(`http://foo.com` + e7);
        return t5.scheme = ``, t5.host = ``, t5.type = 5, t5;
      }
      if (o2(e7)) return l2(e7);
      if (r2(e7)) return c2(e7);
      let t4 = c2(`http://foo.com/` + e7);
      return t4.scheme = ``, t4.host = ``, t4.type = e7 ? e7.startsWith(`?`) ? 3 : e7.startsWith(`#`) ? 2 : 4 : 1, t4;
    }
    function f2(e7) {
      if (e7.endsWith(`/..`)) return e7;
      let t4 = e7.lastIndexOf(`/`);
      return e7.slice(0, t4 + 1);
    }
    function p2(e7, t4) {
      m2(t4, t4.type), e7.path === `/` ? e7.path = t4.path : e7.path = f2(t4.path) + e7.path;
    }
    function m2(e7, t4) {
      let n3 = t4 <= 4, r3 = e7.path.split(`/`), i3 = 1, a3 = 0, o3 = false;
      for (let e8 = 1; e8 < r3.length; e8++) {
        let t5 = r3[e8];
        if (!t5) {
          o3 = true;
          continue;
        }
        if (o3 = false, t5 !== `.`) {
          if (t5 === `..`) {
            a3 ? (o3 = true, a3--, i3--) : n3 && (r3[i3++] = t5);
            continue;
          }
          r3[i3++] = t5, a3++;
        }
      }
      let s3 = ``;
      for (let e8 = 1; e8 < i3; e8++) s3 += `/` + r3[e8];
      (!s3 || o3 && !s3.endsWith(`/..`)) && (s3 += `/`), e7.path = s3;
    }
    function h2(e7, t4) {
      if (!e7 && !t4) return ``;
      let n3 = d2(e7), r3 = n3.type;
      if (t4 && r3 !== 7) {
        let e8 = d2(t4), i4 = e8.type;
        switch (r3) {
          case 1:
            n3.hash = e8.hash;
          case 2:
            n3.query = e8.query;
          case 3:
          case 4:
            p2(n3, e8);
          case 5:
            n3.user = e8.user, n3.host = e8.host, n3.port = e8.port;
          case 6:
            n3.scheme = e8.scheme;
        }
        i4 > r3 && (r3 = i4);
      }
      m2(n3, r3);
      let i3 = n3.query + n3.hash;
      switch (r3) {
        case 2:
        case 3:
          return i3;
        case 4: {
          let r4 = n3.path.slice(1);
          return r4 ? s2(t4 || e7) && !s2(r4) ? `./` + r4 + i3 : r4 + i3 : i3 || `.`;
        }
        case 5:
          return n3.path + i3;
        default:
          return n3.scheme + `//` + n3.user + n3.host + n3.port + n3.path + i3;
      }
    }
    return h2;
  }));
}))(), 1);
function ge(e5) {
  if (!e5) return ``;
  let t2 = e5.lastIndexOf(`/`);
  return e5.slice(0, t2 + 1);
}
function _e(e5, t2) {
  let n2 = ge(e5), r2 = t2 ? t2 + `/` : ``;
  return (e6) => (0, he.default)(r2 + (e6 || ``), n2);
}
var N = 0;
function ve(e5, t2) {
  let n2 = P(e5, 0);
  if (n2 === e5.length) return e5;
  t2 || (e5 = e5.slice());
  for (let r2 = n2; r2 < e5.length; r2 = P(e5, r2 + 1)) e5[r2] = be(e5[r2], t2);
  return e5;
}
function P(e5, t2) {
  for (let n2 = t2; n2 < e5.length; n2++) if (!ye(e5[n2])) return n2;
  return e5.length;
}
function ye(e5) {
  for (let t2 = 1; t2 < e5.length; t2++) if (e5[t2][N] < e5[t2 - 1][N]) return false;
  return true;
}
function be(e5, t2) {
  return t2 || (e5 = e5.slice()), e5.sort(xe);
}
function xe(e5, t2) {
  return e5[N] - t2[N];
}
var F = false;
function Se(e5, t2, n2, r2) {
  for (; n2 <= r2; ) {
    let i2 = n2 + (r2 - n2 >> 1), a2 = e5[i2][N] - t2;
    if (a2 === 0) return F = true, i2;
    a2 < 0 ? n2 = i2 + 1 : r2 = i2 - 1;
  }
  return F = false, n2 - 1;
}
function Ce(e5, t2, n2) {
  for (let r2 = n2 + 1; r2 < e5.length && e5[r2][N] === t2; n2 = r2++) ;
  return n2;
}
function we(e5, t2, n2) {
  for (let r2 = n2 - 1; r2 >= 0 && e5[r2][N] === t2; n2 = r2--) ;
  return n2;
}
function Te() {
  return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
}
function Ee(e5, t2, n2, r2) {
  let { lastKey: i2, lastNeedle: a2, lastIndex: o2 } = n2, s2 = 0, c2 = e5.length - 1;
  if (r2 === i2) {
    if (t2 === a2) return F = o2 !== -1 && e5[o2][N] === t2, o2;
    t2 >= a2 ? s2 = o2 === -1 ? 0 : o2 : c2 = o2;
  }
  return n2.lastKey = r2, n2.lastNeedle = t2, n2.lastIndex = Se(e5, t2, s2, c2);
}
function De(e5) {
  return typeof e5 == `string` ? JSON.parse(e5) : e5;
}
var I = class {
  constructor(e5, t2) {
    let n2 = typeof e5 == `string`;
    if (!n2 && e5._decodedMemo) return e5;
    let r2 = De(e5), { version: i2, file: a2, names: o2, sourceRoot: s2, sources: c2, sourcesContent: l2 } = r2;
    this.version = i2, this.file = a2, this.names = o2 || [], this.sourceRoot = s2, this.sources = c2, this.sourcesContent = l2, this.ignoreList = r2.ignoreList || r2.x_google_ignoreList || void 0;
    let u2 = _e(t2, s2);
    this.resolvedSources = c2.map(u2);
    let { mappings: d2 } = r2;
    if (typeof d2 == `string`) this._encoded = d2, this._decoded = void 0;
    else if (Array.isArray(d2)) this._encoded = void 0, this._decoded = ve(d2, n2);
    else if (r2.sections) throw Error(`TraceMap passed sectioned source map, please use FlattenMap export instead`);
    else throw Error(`invalid source map: ${JSON.stringify(r2)}`);
    this._decodedMemo = Te(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
};
function L(e5) {
  return e5;
}
function R(e5) {
  var t2;
  return (t2 = L(e5))._decoded || (t2._decoded = ne(L(e5)._encoded));
}
function Oe(e5, t2, n2) {
  let r2 = R(e5);
  if (t2 >= r2.length) return null;
  let i2 = r2[t2], a2 = ke(i2, L(e5)._decodedMemo, t2, n2, 1);
  return a2 === -1 ? null : i2[a2];
}
function ke(e5, t2, n2, r2, i2) {
  let a2 = Ee(e5, r2, t2, n2);
  return F ? a2 = (i2 === -1 ? Ce : we)(e5, r2, a2) : i2 === -1 && a2++, a2 === -1 || a2 === e5.length ? -1 : a2;
}
var z = class {
  constructor() {
    this._indexes = { __proto__: null }, this.array = [];
  }
};
function B(e5) {
  return e5;
}
function V(e5, t2) {
  return B(e5)._indexes[t2];
}
function H(e5, t2) {
  let n2 = V(e5, t2);
  if (n2 !== void 0) return n2;
  let { array: r2, _indexes: i2 } = B(e5);
  return i2[t2] = r2.push(t2) - 1;
}
function Ae(e5, t2) {
  let n2 = V(e5, t2);
  if (n2 === void 0) return;
  let { array: r2, _indexes: i2 } = B(e5);
  for (let e6 = n2 + 1; e6 < r2.length; e6++) {
    let t3 = r2[e6];
    r2[e6 - 1] = t3, i2[t3]--;
  }
  i2[t2] = void 0, r2.pop();
}
var je = 0, Me = 1, Ne = 2, Pe = 3, Fe = 4, U = -1, Ie = class {
  constructor({ file: e5, sourceRoot: t2 } = {}) {
    this._names = new z(), this._sources = new z(), this._sourcesContent = [], this._mappings = [], this.file = e5, this.sourceRoot = t2, this._ignoreList = new z();
  }
};
function W(e5) {
  return e5;
}
var Le = (e5, t2, n2, r2, i2, a2, o2, s2) => Ve(true, e5, t2, n2, r2, i2, a2, o2, s2);
function Re(e5, t2, n2) {
  let { _sources: r2, _sourcesContent: i2 } = W(e5), a2 = H(r2, t2);
  i2[a2] = n2;
}
function ze(e5, t2, n2 = true) {
  let { _sources: r2, _sourcesContent: i2, _ignoreList: a2 } = W(e5), o2 = H(r2, t2);
  o2 === i2.length && (i2[o2] = null), n2 ? H(a2, o2) : Ae(a2, o2);
}
function G(e5) {
  let { _mappings: t2, _sources: n2, _sourcesContent: r2, _names: i2, _ignoreList: a2 } = W(e5);
  return We(t2), { version: 3, file: e5.file || void 0, names: i2.array, sourceRoot: e5.sourceRoot || void 0, sources: n2.array, sourcesContent: r2, mappings: t2, ignoreList: a2.array };
}
function Be(e5) {
  let t2 = G(e5);
  return Object.assign({}, t2, { mappings: D(t2.mappings) });
}
function Ve(e5, t2, n2, r2, i2, a2, o2, s2, c2) {
  let { _mappings: l2, _sources: u2, _sourcesContent: d2, _names: f2 } = W(t2), p2 = He(l2, n2), m2 = Ue(p2, r2);
  if (!i2) return e5 && Ge(p2, m2) ? void 0 : K(p2, m2, [r2]);
  let h2 = H(u2, i2), g2 = s2 ? H(f2, s2) : U;
  if (h2 === d2.length && (d2[h2] = c2 ?? null), !(e5 && Ke(p2, m2, h2, a2, o2, g2))) return K(p2, m2, s2 ? [r2, h2, a2, o2, g2] : [r2, h2, a2, o2]);
}
function He(e5, t2) {
  for (let n2 = e5.length; n2 <= t2; n2++) e5[n2] = [];
  return e5[t2];
}
function Ue(e5, t2) {
  let n2 = e5.length;
  for (let r2 = n2 - 1; r2 >= 0 && !(t2 >= e5[r2][je]); n2 = r2--) ;
  return n2;
}
function K(e5, t2, n2) {
  for (let n3 = e5.length; n3 > t2; n3--) e5[n3] = e5[n3 - 1];
  e5[t2] = n2;
}
function We(e5) {
  let { length: t2 } = e5, n2 = t2;
  for (let t3 = n2 - 1; t3 >= 0 && !(e5[t3].length > 0); n2 = t3, t3--) ;
  n2 < t2 && (e5.length = n2);
}
function Ge(e5, t2) {
  return t2 === 0 ? true : e5[t2 - 1].length === 1;
}
function Ke(e5, t2, n2, r2, i2, a2) {
  if (t2 === 0) return false;
  let o2 = e5[t2 - 1];
  return o2.length === 1 ? false : n2 === o2[Me] && r2 === o2[Ne] && i2 === o2[Pe] && a2 === (o2.length === 5 ? o2[Fe] : U);
}
var q = J(``, -1, -1, ``, null, false), qe = [];
function J(e5, t2, n2, r2, i2, a2) {
  return { source: e5, line: t2, column: n2, name: r2, content: i2, ignore: a2 };
}
function Y(e5, t2, n2, r2, i2) {
  return { map: e5, sources: t2, source: n2, content: r2, ignore: i2 };
}
function X(e5, t2) {
  return Y(e5, t2, ``, null, false);
}
function Je(e5, t2, n2) {
  return Y(null, qe, e5, t2, n2);
}
function Ye(e5) {
  let t2 = new Ie({ file: e5.map.file }), { sources: n2, map: r2 } = e5, i2 = r2.names, a2 = R(r2);
  for (let e6 = 0; e6 < a2.length; e6++) {
    let r3 = a2[e6];
    for (let a3 = 0; a3 < r3.length; a3++) {
      let o2 = r3[a3], s2 = o2[0], c2 = q;
      if (o2.length !== 1) {
        let e7 = n2[o2[1]];
        if (c2 = Z(e7, o2[2], o2[3], o2.length === 5 ? i2[o2[4]] : ``), c2 == null) continue;
      }
      let { column: l2, line: u2, name: d2, content: f2, source: p2, ignore: m2 } = c2;
      Le(t2, e6, s2, p2, u2, l2, d2), p2 && f2 != null && Re(t2, p2, f2), m2 && ze(t2, p2, true);
    }
  }
  return t2;
}
function Z(e5, t2, n2, r2) {
  if (!e5.map) return J(e5.source, t2, n2, r2, e5.content, e5.ignore);
  let i2 = Oe(e5.map, t2, n2);
  return i2 == null ? null : i2.length === 1 ? q : Z(e5.sources[i2[1]], i2[2], i2[3], i2.length === 5 ? e5.map.names[i2[4]] : r2);
}
function Xe(e5) {
  return Array.isArray(e5) ? e5 : [e5];
}
function Ze(e5, t2) {
  let n2 = Xe(e5).map((e6) => new I(e6, ``)), r2 = n2.pop();
  for (let e6 = 0; e6 < n2.length; e6++) if (n2[e6].sources.length > 1) throw Error(`Transformation map ${e6} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
  let i2 = Q(r2, t2, ``, 0);
  for (let e6 = n2.length - 1; e6 >= 0; e6--) i2 = X(n2[e6], [i2]);
  return i2;
}
function Q(e5, t2, n2, r2) {
  let { resolvedSources: i2, sourcesContent: a2, ignoreList: o2 } = e5, s2 = r2 + 1;
  return X(e5, i2.map((e6, r3) => {
    let i3 = { importer: n2, depth: s2, source: e6 || ``, content: void 0, ignore: void 0 }, c2 = t2(i3.source, i3), { source: l2, content: u2, ignore: d2 } = i3;
    return c2 ? Q(new I(c2, l2), t2, l2, s2) : Je(l2, u2 === void 0 ? a2 ? a2[r3] : null : u2, d2 === void 0 ? o2 ? o2.includes(r3) : false : d2);
  }));
}
var Qe = class {
  constructor(e5, t2) {
    let n2 = t2.decodedMappings ? G(e5) : Be(e5);
    this.version = n2.version, this.file = n2.file, this.mappings = n2.mappings, this.names = n2.names, this.ignoreList = n2.ignoreList, this.sourceRoot = n2.sourceRoot, this.sources = n2.sources, t2.excludeContent || (this.sourcesContent = n2.sourcesContent);
  }
  toString() {
    return JSON.stringify(this);
  }
};
function $e(e5, t2, n2) {
  let r2 = typeof n2 == `object` ? n2 : { excludeContent: !!n2, decodedMappings: false };
  return new Qe(Ye(Ze(e5, t2)), r2);
}
var et = t(((e5) => {
  e5.GREATEST_LOWER_BOUND = 1, e5.LEAST_UPPER_BOUND = 2;
  function t2(n2, r2, i2, a2, o2, s2) {
    var c2 = Math.floor((r2 - n2) / 2) + n2, l2 = o2(i2, a2[c2], true);
    return l2 === 0 ? c2 : l2 > 0 ? r2 - c2 > 1 ? t2(c2, r2, i2, a2, o2, s2) : s2 == e5.LEAST_UPPER_BOUND ? r2 < a2.length ? r2 : -1 : c2 : c2 - n2 > 1 ? t2(n2, c2, i2, a2, o2, s2) : s2 == e5.LEAST_UPPER_BOUND ? c2 : n2 < 0 ? -1 : n2;
  }
  e5.search = function(n2, r2, i2, a2) {
    if (r2.length === 0) return -1;
    var o2 = t2(-1, r2.length, n2, r2, i2, a2 || e5.GREATEST_LOWER_BOUND);
    if (o2 < 0) return -1;
    for (; o2 - 1 >= 0 && i2(r2[o2], r2[o2 - 1], true) === 0; ) --o2;
    return o2;
  };
})), tt = t(((e5) => {
  function t2(e6) {
    function t3(e7, t4, n4) {
      var r4 = e7[t4];
      e7[t4] = e7[n4], e7[n4] = r4;
    }
    function n3(e7, t4) {
      return Math.round(e7 + Math.random() * (t4 - e7));
    }
    function r3(e7, i2, a2, o2) {
      if (a2 < o2) {
        var s2 = n3(a2, o2), c2 = a2 - 1;
        t3(e7, s2, o2);
        for (var l2 = e7[o2], u2 = a2; u2 < o2; u2++) i2(e7[u2], l2, false) <= 0 && (c2 += 1, t3(e7, c2, u2));
        t3(e7, c2 + 1, u2);
        var d2 = c2 + 1;
        r3(e7, i2, a2, d2 - 1), r3(e7, i2, d2 + 1, o2);
      }
    }
    return r3;
  }
  function n2(e6) {
    let n3 = t2.toString();
    return Function(`return ${n3}`)()(e6);
  }
  var r2 = /* @__PURE__ */ new WeakMap();
  e5.quickSort = function(e6, t3, i2 = 0) {
    let a2 = r2.get(t3);
    a2 === void 0 && (a2 = n2(t3), r2.set(t3, a2)), a2(e6, t3, i2, e6.length - 1);
  };
})), nt = t(((e5) => {
  var t2 = i(), a2 = et(), o2 = r().ArraySet, s2 = n(), c2 = tt().quickSort;
  function l2(e6, n2) {
    var r2 = e6;
    return typeof e6 == `string` && (r2 = t2.parseSourceMapInput(e6)), r2.sections == null ? new u2(r2, n2) : new m2(r2, n2);
  }
  l2.fromSourceMap = function(e6, t3) {
    return u2.fromSourceMap(e6, t3);
  }, l2.prototype._version = 3, l2.prototype.__generatedMappings = null, Object.defineProperty(l2.prototype, `_generatedMappings`, { configurable: true, enumerable: true, get: function() {
    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
  } }), l2.prototype.__originalMappings = null, Object.defineProperty(l2.prototype, `_originalMappings`, { configurable: true, enumerable: true, get: function() {
    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
  } }), l2.prototype._charIsMappingSeparator = function(e6, t3) {
    var n2 = e6.charAt(t3);
    return n2 === `;` || n2 === `,`;
  }, l2.prototype._parseMappings = function(e6, t3) {
    throw Error(`Subclasses must implement _parseMappings`);
  }, l2.GENERATED_ORDER = 1, l2.ORIGINAL_ORDER = 2, l2.GREATEST_LOWER_BOUND = 1, l2.LEAST_UPPER_BOUND = 2, l2.prototype.eachMapping = function(e6, n2, r2) {
    var i2 = n2 || null, a3 = r2 || l2.GENERATED_ORDER, o3;
    switch (a3) {
      case l2.GENERATED_ORDER:
        o3 = this._generatedMappings;
        break;
      case l2.ORIGINAL_ORDER:
        o3 = this._originalMappings;
        break;
      default:
        throw Error(`Unknown order of iteration.`);
    }
    for (var s3 = this.sourceRoot, c3 = e6.bind(i2), u3 = this._names, d3 = this._sources, f3 = this._sourceMapURL, p3 = 0, m3 = o3.length; p3 < m3; p3++) {
      var h2 = o3[p3], g2 = h2.source === null ? null : d3.at(h2.source);
      g2 !== null && (g2 = t2.computeSourceURL(s3, g2, f3)), c3({ source: g2, generatedLine: h2.generatedLine, generatedColumn: h2.generatedColumn, originalLine: h2.originalLine, originalColumn: h2.originalColumn, name: h2.name === null ? null : u3.at(h2.name) });
    }
  }, l2.prototype.allGeneratedPositionsFor = function(e6) {
    var n2 = t2.getArg(e6, `line`), r2 = { source: t2.getArg(e6, `source`), originalLine: n2, originalColumn: t2.getArg(e6, `column`, 0) };
    if (r2.source = this._findSourceIndex(r2.source), r2.source < 0) return [];
    var i2 = [], o3 = this._findMapping(r2, this._originalMappings, `originalLine`, `originalColumn`, t2.compareByOriginalPositions, a2.LEAST_UPPER_BOUND);
    if (o3 >= 0) {
      var s3 = this._originalMappings[o3];
      if (e6.column === void 0) for (var c3 = s3.originalLine; s3 && s3.originalLine === c3; ) i2.push({ line: t2.getArg(s3, `generatedLine`, null), column: t2.getArg(s3, `generatedColumn`, null), lastColumn: t2.getArg(s3, `lastGeneratedColumn`, null) }), s3 = this._originalMappings[++o3];
      else for (var l3 = s3.originalColumn; s3 && s3.originalLine === n2 && s3.originalColumn == l3; ) i2.push({ line: t2.getArg(s3, `generatedLine`, null), column: t2.getArg(s3, `generatedColumn`, null), lastColumn: t2.getArg(s3, `lastGeneratedColumn`, null) }), s3 = this._originalMappings[++o3];
    }
    return i2;
  }, e5.SourceMapConsumer = l2;
  function u2(e6, n2) {
    var r2 = e6;
    typeof e6 == `string` && (r2 = t2.parseSourceMapInput(e6));
    var i2 = t2.getArg(r2, `version`), a3 = t2.getArg(r2, `sources`), s3 = t2.getArg(r2, `names`, []), c3 = t2.getArg(r2, `sourceRoot`, null), l3 = t2.getArg(r2, `sourcesContent`, null), u3 = t2.getArg(r2, `mappings`), d3 = t2.getArg(r2, `file`, null);
    if (i2 != this._version) throw Error(`Unsupported version: ` + i2);
    c3 && (c3 = t2.normalize(c3)), a3 = a3.map(String).map(t2.normalize).map(function(e7) {
      return c3 && t2.isAbsolute(c3) && t2.isAbsolute(e7) ? t2.relative(c3, e7) : e7;
    }), this._names = o2.fromArray(s3.map(String), true), this._sources = o2.fromArray(a3, true), this._absoluteSources = this._sources.toArray().map(function(e7) {
      return t2.computeSourceURL(c3, e7, n2);
    }), this.sourceRoot = c3, this.sourcesContent = l3, this._mappings = u3, this._sourceMapURL = n2, this.file = d3;
  }
  u2.prototype = Object.create(l2.prototype), u2.prototype.consumer = l2, u2.prototype._findSourceIndex = function(e6) {
    var n2 = e6;
    if (this.sourceRoot != null && (n2 = t2.relative(this.sourceRoot, n2)), this._sources.has(n2)) return this._sources.indexOf(n2);
    var r2;
    for (r2 = 0; r2 < this._absoluteSources.length; ++r2) if (this._absoluteSources[r2] == e6) return r2;
    return -1;
  }, u2.fromSourceMap = function(e6, n2) {
    var r2 = Object.create(u2.prototype), i2 = r2._names = o2.fromArray(e6._names.toArray(), true), a3 = r2._sources = o2.fromArray(e6._sources.toArray(), true);
    r2.sourceRoot = e6._sourceRoot, r2.sourcesContent = e6._generateSourcesContent(r2._sources.toArray(), r2.sourceRoot), r2.file = e6._file, r2._sourceMapURL = n2, r2._absoluteSources = r2._sources.toArray().map(function(e7) {
      return t2.computeSourceURL(r2.sourceRoot, e7, n2);
    });
    for (var s3 = e6._mappings.toArray().slice(), l3 = r2.__generatedMappings = [], f3 = r2.__originalMappings = [], p3 = 0, m3 = s3.length; p3 < m3; p3++) {
      var h2 = s3[p3], g2 = new d2();
      g2.generatedLine = h2.generatedLine, g2.generatedColumn = h2.generatedColumn, h2.source && (g2.source = a3.indexOf(h2.source), g2.originalLine = h2.originalLine, g2.originalColumn = h2.originalColumn, h2.name && (g2.name = i2.indexOf(h2.name)), f3.push(g2)), l3.push(g2);
    }
    return c2(r2.__originalMappings, t2.compareByOriginalPositions), r2;
  }, u2.prototype._version = 3, Object.defineProperty(u2.prototype, `sources`, { get: function() {
    return this._absoluteSources.slice();
  } });
  function d2() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  var f2 = t2.compareByGeneratedPositionsDeflatedNoLine;
  function p2(e6, t3) {
    let n2 = e6.length, r2 = e6.length - t3;
    if (!(r2 <= 1)) if (r2 == 2) {
      let n3 = e6[t3], r3 = e6[t3 + 1];
      f2(n3, r3) > 0 && (e6[t3] = r3, e6[t3 + 1] = n3);
    } else if (r2 < 20) for (let r3 = t3; r3 < n2; r3++) for (let n3 = r3; n3 > t3; n3--) {
      let t4 = e6[n3 - 1], r4 = e6[n3];
      if (f2(t4, r4) <= 0) break;
      e6[n3 - 1] = r4, e6[n3] = t4;
    }
    else c2(e6, f2, t3);
  }
  u2.prototype._parseMappings = function(e6, n2) {
    var r2 = 1, i2 = 0, a3 = 0, o3 = 0, l3 = 0, u3 = 0, f3 = e6.length, m3 = 0, h2 = {}, g2 = [], _2 = [], v2, y2, b2, x2;
    let S2 = 0;
    for (; m3 < f3; ) if (e6.charAt(m3) === `;`) r2++, m3++, i2 = 0, p2(_2, S2), S2 = _2.length;
    else if (e6.charAt(m3) === `,`) m3++;
    else {
      for (v2 = new d2(), v2.generatedLine = r2, b2 = m3; b2 < f3 && !this._charIsMappingSeparator(e6, b2); b2++) ;
      for (e6.slice(m3, b2), y2 = []; m3 < b2; ) s2.decode(e6, m3, h2), x2 = h2.value, m3 = h2.rest, y2.push(x2);
      if (y2.length === 2) throw Error(`Found a source, but no line and column`);
      if (y2.length === 3) throw Error(`Found a source and line, but no column`);
      if (v2.generatedColumn = i2 + y2[0], i2 = v2.generatedColumn, y2.length > 1 && (v2.source = l3 + y2[1], l3 += y2[1], v2.originalLine = a3 + y2[2], a3 = v2.originalLine, v2.originalLine += 1, v2.originalColumn = o3 + y2[3], o3 = v2.originalColumn, y2.length > 4 && (v2.name = u3 + y2[4], u3 += y2[4])), _2.push(v2), typeof v2.originalLine == `number`) {
        let e7 = v2.source;
        for (; g2.length <= e7; ) g2.push(null);
        g2[e7] === null && (g2[e7] = []), g2[e7].push(v2);
      }
    }
    p2(_2, S2), this.__generatedMappings = _2;
    for (var C2 = 0; C2 < g2.length; C2++) g2[C2] != null && c2(g2[C2], t2.compareByOriginalPositionsNoSource);
    this.__originalMappings = [].concat(...g2);
  }, u2.prototype._findMapping = function(e6, t3, n2, r2, i2, o3) {
    if (e6[n2] <= 0) throw TypeError(`Line must be greater than or equal to 1, got ` + e6[n2]);
    if (e6[r2] < 0) throw TypeError(`Column must be greater than or equal to 0, got ` + e6[r2]);
    return a2.search(e6, t3, i2, o3);
  }, u2.prototype.computeColumnSpans = function() {
    for (var e6 = 0; e6 < this._generatedMappings.length; ++e6) {
      var t3 = this._generatedMappings[e6];
      if (e6 + 1 < this._generatedMappings.length) {
        var n2 = this._generatedMappings[e6 + 1];
        if (t3.generatedLine === n2.generatedLine) {
          t3.lastGeneratedColumn = n2.generatedColumn - 1;
          continue;
        }
      }
      t3.lastGeneratedColumn = 1 / 0;
    }
  }, u2.prototype.originalPositionFor = function(e6) {
    var n2 = { generatedLine: t2.getArg(e6, `line`), generatedColumn: t2.getArg(e6, `column`) }, r2 = this._findMapping(n2, this._generatedMappings, `generatedLine`, `generatedColumn`, t2.compareByGeneratedPositionsDeflated, t2.getArg(e6, `bias`, l2.GREATEST_LOWER_BOUND));
    if (r2 >= 0) {
      var i2 = this._generatedMappings[r2];
      if (i2.generatedLine === n2.generatedLine) {
        var a3 = t2.getArg(i2, `source`, null);
        a3 !== null && (a3 = this._sources.at(a3), a3 = t2.computeSourceURL(this.sourceRoot, a3, this._sourceMapURL));
        var o3 = t2.getArg(i2, `name`, null);
        return o3 !== null && (o3 = this._names.at(o3)), { source: a3, line: t2.getArg(i2, `originalLine`, null), column: t2.getArg(i2, `originalColumn`, null), name: o3 };
      }
    }
    return { source: null, line: null, column: null, name: null };
  }, u2.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e6) {
      return e6 == null;
    }) : false;
  }, u2.prototype.sourceContentFor = function(e6, n2) {
    if (!this.sourcesContent) return null;
    var r2 = this._findSourceIndex(e6);
    if (r2 >= 0) return this.sourcesContent[r2];
    var i2 = e6;
    this.sourceRoot != null && (i2 = t2.relative(this.sourceRoot, i2));
    var a3;
    if (this.sourceRoot != null && (a3 = t2.urlParse(this.sourceRoot))) {
      var o3 = i2.replace(/^file:\/\//, ``);
      if (a3.scheme == `file` && this._sources.has(o3)) return this.sourcesContent[this._sources.indexOf(o3)];
      if ((!a3.path || a3.path == `/`) && this._sources.has(`/` + i2)) return this.sourcesContent[this._sources.indexOf(`/` + i2)];
    }
    if (n2) return null;
    throw Error(`"` + i2 + `" is not in the SourceMap.`);
  }, u2.prototype.generatedPositionFor = function(e6) {
    var n2 = t2.getArg(e6, `source`);
    if (n2 = this._findSourceIndex(n2), n2 < 0) return { line: null, column: null, lastColumn: null };
    var r2 = { source: n2, originalLine: t2.getArg(e6, `line`), originalColumn: t2.getArg(e6, `column`) }, i2 = this._findMapping(r2, this._originalMappings, `originalLine`, `originalColumn`, t2.compareByOriginalPositions, t2.getArg(e6, `bias`, l2.GREATEST_LOWER_BOUND));
    if (i2 >= 0) {
      var a3 = this._originalMappings[i2];
      if (a3.source === r2.source) return { line: t2.getArg(a3, `generatedLine`, null), column: t2.getArg(a3, `generatedColumn`, null), lastColumn: t2.getArg(a3, `lastGeneratedColumn`, null) };
    }
    return { line: null, column: null, lastColumn: null };
  }, e5.BasicSourceMapConsumer = u2;
  function m2(e6, n2) {
    var r2 = e6;
    typeof e6 == `string` && (r2 = t2.parseSourceMapInput(e6));
    var i2 = t2.getArg(r2, `version`), a3 = t2.getArg(r2, `sections`);
    if (i2 != this._version) throw Error(`Unsupported version: ` + i2);
    this._sources = new o2(), this._names = new o2();
    var s3 = { line: -1, column: 0 };
    this._sections = a3.map(function(e7) {
      if (e7.url) throw Error(`Support for url field in sections not implemented.`);
      var r3 = t2.getArg(e7, `offset`), i3 = t2.getArg(r3, `line`), a4 = t2.getArg(r3, `column`);
      if (i3 < s3.line || i3 === s3.line && a4 < s3.column) throw Error(`Section offsets must be ordered and non-overlapping.`);
      return s3 = r3, { generatedOffset: { generatedLine: i3 + 1, generatedColumn: a4 + 1 }, consumer: new l2(t2.getArg(e7, `map`), n2) };
    });
  }
  m2.prototype = Object.create(l2.prototype), m2.prototype.constructor = l2, m2.prototype._version = 3, Object.defineProperty(m2.prototype, `sources`, { get: function() {
    for (var e6 = [], t3 = 0; t3 < this._sections.length; t3++) for (var n2 = 0; n2 < this._sections[t3].consumer.sources.length; n2++) e6.push(this._sections[t3].consumer.sources[n2]);
    return e6;
  } }), m2.prototype.originalPositionFor = function(e6) {
    var n2 = { generatedLine: t2.getArg(e6, `line`), generatedColumn: t2.getArg(e6, `column`) }, r2 = a2.search(n2, this._sections, function(e7, t3) {
      return e7.generatedLine - t3.generatedOffset.generatedLine || e7.generatedColumn - t3.generatedOffset.generatedColumn;
    }), i2 = this._sections[r2];
    return i2 ? i2.consumer.originalPositionFor({ line: n2.generatedLine - (i2.generatedOffset.generatedLine - 1), column: n2.generatedColumn - (i2.generatedOffset.generatedLine === n2.generatedLine ? i2.generatedOffset.generatedColumn - 1 : 0), bias: e6.bias }) : { source: null, line: null, column: null, name: null };
  }, m2.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(e6) {
      return e6.consumer.hasContentsOfAllSources();
    });
  }, m2.prototype.sourceContentFor = function(e6, t3) {
    for (var n2 = 0; n2 < this._sections.length; n2++) {
      var r2 = this._sections[n2].consumer.sourceContentFor(e6, true);
      if (r2 || r2 === ``) return r2;
    }
    if (t3) return null;
    throw Error(`"` + e6 + `" is not in the SourceMap.`);
  }, m2.prototype.generatedPositionFor = function(e6) {
    for (var n2 = 0; n2 < this._sections.length; n2++) {
      var r2 = this._sections[n2];
      if (r2.consumer._findSourceIndex(t2.getArg(e6, `source`)) !== -1) {
        var i2 = r2.consumer.generatedPositionFor(e6);
        if (i2) return { line: i2.line + (r2.generatedOffset.generatedLine - 1), column: i2.column + (r2.generatedOffset.generatedLine === i2.line ? r2.generatedOffset.generatedColumn - 1 : 0) };
      }
    }
    return { line: null, column: null };
  }, m2.prototype._parseMappings = function(e6, n2) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var r2 = 0; r2 < this._sections.length; r2++) for (var i2 = this._sections[r2], a3 = i2.consumer._generatedMappings, o3 = 0; o3 < a3.length; o3++) {
      var s3 = a3[o3], l3 = i2.consumer._sources.at(s3.source);
      l3 !== null && (l3 = t2.computeSourceURL(i2.consumer.sourceRoot, l3, this._sourceMapURL)), this._sources.add(l3), l3 = this._sources.indexOf(l3);
      var u3 = null;
      s3.name && (u3 = i2.consumer._names.at(s3.name), this._names.add(u3), u3 = this._names.indexOf(u3));
      var d3 = { source: l3, generatedLine: s3.generatedLine + (i2.generatedOffset.generatedLine - 1), generatedColumn: s3.generatedColumn + (i2.generatedOffset.generatedLine === s3.generatedLine ? i2.generatedOffset.generatedColumn - 1 : 0), originalLine: s3.originalLine, originalColumn: s3.originalColumn, name: u3 };
      this.__generatedMappings.push(d3), typeof d3.originalLine == `number` && this.__originalMappings.push(d3);
    }
    c2(this.__generatedMappings, t2.compareByGeneratedPositionsDeflated), c2(this.__originalMappings, t2.compareByOriginalPositions);
  }, e5.IndexedSourceMapConsumer = m2;
})), rt = t(((e5) => {
  var t2 = a().SourceMapGenerator, n2 = i(), r2 = /(\r?\n)/, o2 = 10, s2 = `$$$isSourceNode$$$`;
  function c2(e6, t3, n3, r3, i2) {
    this.children = [], this.sourceContents = {}, this.line = e6 ?? null, this.column = t3 ?? null, this.source = n3 ?? null, this.name = i2 ?? null, this[s2] = true, r3 != null && this.add(r3);
  }
  c2.fromStringWithSourceMap = function(e6, t3, i2) {
    var a2 = new c2(), o3 = e6.split(r2), s3 = 0, l2 = function() {
      return e7() + (e7() || ``);
      function e7() {
        return s3 < o3.length ? o3[s3++] : void 0;
      }
    }, u2 = 1, d2 = 0, f2 = null;
    return t3.eachMapping(function(e7) {
      if (f2 !== null) if (u2 < e7.generatedLine) p2(f2, l2()), u2++, d2 = 0;
      else {
        var t4 = o3[s3] || ``, n3 = t4.substr(0, e7.generatedColumn - d2);
        o3[s3] = t4.substr(e7.generatedColumn - d2), d2 = e7.generatedColumn, p2(f2, n3), f2 = e7;
        return;
      }
      for (; u2 < e7.generatedLine; ) a2.add(l2()), u2++;
      if (d2 < e7.generatedColumn) {
        var t4 = o3[s3] || ``;
        a2.add(t4.substr(0, e7.generatedColumn)), o3[s3] = t4.substr(e7.generatedColumn), d2 = e7.generatedColumn;
      }
      f2 = e7;
    }, this), s3 < o3.length && (f2 && p2(f2, l2()), a2.add(o3.splice(s3).join(``))), t3.sources.forEach(function(e7) {
      var r3 = t3.sourceContentFor(e7);
      r3 != null && (i2 != null && (e7 = n2.join(i2, e7)), a2.setSourceContent(e7, r3));
    }), a2;
    function p2(e7, t4) {
      if (e7 === null || e7.source === void 0) a2.add(t4);
      else {
        var r3 = i2 ? n2.join(i2, e7.source) : e7.source;
        a2.add(new c2(e7.originalLine, e7.originalColumn, r3, t4, e7.name));
      }
    }
  }, c2.prototype.add = function(e6) {
    if (Array.isArray(e6)) e6.forEach(function(e7) {
      this.add(e7);
    }, this);
    else if (e6[s2] || typeof e6 == `string`) e6 && this.children.push(e6);
    else throw TypeError(`Expected a SourceNode, string, or an array of SourceNodes and strings. Got ` + e6);
    return this;
  }, c2.prototype.prepend = function(e6) {
    if (Array.isArray(e6)) for (var t3 = e6.length - 1; t3 >= 0; t3--) this.prepend(e6[t3]);
    else if (e6[s2] || typeof e6 == `string`) this.children.unshift(e6);
    else throw TypeError(`Expected a SourceNode, string, or an array of SourceNodes and strings. Got ` + e6);
    return this;
  }, c2.prototype.walk = function(e6) {
    for (var t3, n3 = 0, r3 = this.children.length; n3 < r3; n3++) t3 = this.children[n3], t3[s2] ? t3.walk(e6) : t3 !== `` && e6(t3, { source: this.source, line: this.line, column: this.column, name: this.name });
  }, c2.prototype.join = function(e6) {
    var t3, n3, r3 = this.children.length;
    if (r3 > 0) {
      for (t3 = [], n3 = 0; n3 < r3 - 1; n3++) t3.push(this.children[n3]), t3.push(e6);
      t3.push(this.children[n3]), this.children = t3;
    }
    return this;
  }, c2.prototype.replaceRight = function(e6, t3) {
    var n3 = this.children[this.children.length - 1];
    return n3[s2] ? n3.replaceRight(e6, t3) : typeof n3 == `string` ? this.children[this.children.length - 1] = n3.replace(e6, t3) : this.children.push(``.replace(e6, t3)), this;
  }, c2.prototype.setSourceContent = function(e6, t3) {
    this.sourceContents[n2.toSetString(e6)] = t3;
  }, c2.prototype.walkSourceContents = function(e6) {
    for (var t3 = 0, r3 = this.children.length; t3 < r3; t3++) this.children[t3][s2] && this.children[t3].walkSourceContents(e6);
    for (var i2 = Object.keys(this.sourceContents), t3 = 0, r3 = i2.length; t3 < r3; t3++) e6(n2.fromSetString(i2[t3]), this.sourceContents[i2[t3]]);
  }, c2.prototype.toString = function() {
    var e6 = ``;
    return this.walk(function(t3) {
      e6 += t3;
    }), e6;
  }, c2.prototype.toStringWithSourceMap = function(e6) {
    var n3 = { code: ``, line: 1, column: 0 }, r3 = new t2(e6), i2 = false, a2 = null, s3 = null, c3 = null, l2 = null;
    return this.walk(function(e7, t3) {
      n3.code += e7, t3.source !== null && t3.line !== null && t3.column !== null ? ((a2 !== t3.source || s3 !== t3.line || c3 !== t3.column || l2 !== t3.name) && r3.addMapping({ source: t3.source, original: { line: t3.line, column: t3.column }, generated: { line: n3.line, column: n3.column }, name: t3.name }), a2 = t3.source, s3 = t3.line, c3 = t3.column, l2 = t3.name, i2 = true) : i2 && (i2 = (r3.addMapping({ generated: { line: n3.line, column: n3.column } }), a2 = null, false));
      for (var u2 = 0, d2 = e7.length; u2 < d2; u2++) e7.charCodeAt(u2) === o2 ? (n3.line++, n3.column = 0, u2 + 1 === d2 ? (a2 = null, i2 = false) : i2 && r3.addMapping({ source: t3.source, original: { line: t3.line, column: t3.column }, generated: { line: n3.line, column: n3.column }, name: t3.name })) : n3.column++;
    }), this.walkSourceContents(function(e7, t3) {
      r3.setSourceContent(e7, t3);
    }), { code: n3.code, map: r3 };
  }, e5.SourceNode = c2;
})), it = t(((e5) => {
  e5.SourceMapGenerator = a().SourceMapGenerator, e5.SourceMapConsumer = nt().SourceMapConsumer, e5.SourceNode = rt().SourceNode;
}));
o();
var at = it();
function ot(e5) {
  let t2 = new at.SourceMapGenerator(), n2 = 1, r2 = new d((e6) => ({ url: e6?.url ?? `<unknown ${n2++}>`, content: e6?.content ?? `<none>` }));
  for (let n3 of e5.mappings) {
    let e6 = r2.get(n3.originalPosition?.source ?? null);
    t2.addMapping({ generated: n3.generatedPosition, original: n3.originalPosition, source: e6.url, name: n3.name }), t2.setSourceContent(e6.url, e6.content);
  }
  return t2.toString();
}
function st(e5) {
  let t2 = typeof e5 == `string` ? e5 : ot(e5);
  function n2(e6) {
    return `/*# sourceMappingURL=${e6} */
`;
  }
  return { raw: t2, get inline() {
    return n2(`data:application/json;base64,${s.from(t2, `utf-8`).toString(`base64`)}`);
  }, comment: n2 };
}
async function ct({ candidates: e5 = [], entrypoint: t2 = `/main.css`, volume: n2 = {}, ...r2 }) {
  return r2 = { candidates: e5, entrypoint: t2, volume: n2, ...r2 }, r2.volume[r2.entrypoint] = (await l(r2)).css, await u(r2.volume[r2.entrypoint], { loadModule: async (e6, t3, n3) => f(e6, t3, n3, r2.volume), loadStylesheet: async (e6, t3) => c(e6, t3, r2.volume), from: r2.entrypoint });
}
async function lt(e5, { file: t2 = `main.css`, minify: n2 = false, map: r2 } = {}) {
  if (await g(p), r2 !== void 0) try {
    r2 = typeof r2 == `string` ? r2 : st(r2).raw;
  } catch {
    r2 = void 0;
  }
  function i2(e6, r3) {
    return m({ filename: t2, code: typeof e6 == `string` ? new TextEncoder().encode(e6) : e6, minify: n2, sourceMap: r3 !== void 0, inputSourceMap: r3, drafts: { customMedia: true }, nonStandard: { deepSelectorCombinator: true }, include: h.Nesting | h.MediaQueries, exclude: h.LogicalProperties | h.DirSelector | h.LightDark, targets: { safari: 1049600, ios_saf: 1049600, firefox: 8388608, chrome: 7274496 }, errorRecovery: true });
  }
  let a2 = i2(e5, r2);
  if (r2 = a2.map ? new TextDecoder().decode(a2.map) : void 0, a2.warnings = a2.warnings.filter((e6) => !/'(deep|slotted|global)' is not recognized as a valid pseudo-/.test(e6.message)), a2.warnings.length > 0) {
    let t3 = e5.split(`
`), n3 = [`Found ${a2.warnings.length} ${a2.warnings.length === 1 ? `warning` : `warnings`} while optimizing generated CSS:`];
    for (let [e6, r3] of a2.warnings.entries()) {
      n3.push(``), a2.warnings.length > 1 && n3.push(`Issue #${e6 + 1}:`);
      let i3 = Math.max(0, r3.loc.line - 2 - 1), o3 = Math.min(t3.length, r3.loc.line + 2), s3 = t3.slice(i3, o3).map((e7, t4) => i3 + t4 + 1 === r3.loc.line ? `${$(`\u2502`)} ${e7}` : $(`\u2502 ${e7}`));
      s3.splice(r3.loc.line - i3, 0, `${$(`\u2506`)}${` `.repeat(r3.loc.column - 1)} ${ut(`${$(`^--`)} ${r3.message}`)}`, `${$(`\u2506`)}`), n3.push(...s3);
    }
    n3.push(``), console.warn(n3.join(`
`));
  }
  a2 = i2(a2.code, r2), r2 = a2.map ? new TextDecoder().decode(a2.map) : void 0;
  let o2 = new TextDecoder().decode(a2.code), s2 = new me(o2);
  return s2.replaceAll(`@media not (`, `@media not all and (`), r2 !== void 0 && s2.hasChanged() && (r2 = $e([s2.generateMap({ source: `original`, hires: `boundary` }).toString(), r2], () => null).toString()), o2 = s2.toString(), { code: o2, map: r2 };
}
function $(e5) {
  return `\x1B[2m${e5}\x1B[22m`;
}
function ut(e5) {
  return `\x1B[33m${e5}\x1B[39m`;
}
export {
  lt as n,
  ct as t
};
