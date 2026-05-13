function e(e2) {
  return Array.isArray ? Array.isArray(e2) : u(e2) === `[object Array]`;
}
function t(e2) {
  if (typeof e2 == `string`) return e2;
  if (typeof e2 == `bigint`) return e2.toString();
  let t2 = e2 + ``;
  return t2 == `0` && 1 / e2 == -1 / 0 ? `-0` : t2;
}
function n(e2) {
  return e2 == null ? `` : t(e2);
}
function r(e2) {
  return typeof e2 == `string`;
}
function i(e2) {
  return typeof e2 == `number`;
}
function a(e2) {
  return e2 === true || e2 === false || s(e2) && u(e2) == `[object Boolean]`;
}
function o(e2) {
  return typeof e2 == `object`;
}
function s(e2) {
  return o(e2) && e2 !== null;
}
function c(e2) {
  return e2 != null;
}
function l(e2) {
  return !e2.trim().length;
}
function u(e2) {
  return e2 == null ? e2 === void 0 ? `[object Undefined]` : `[object Null]` : Object.prototype.toString.call(e2);
}
var d = `Incorrect 'index' type`, f = (e2) => `Invalid value for key ${e2}`, p = (e2) => `Pattern length exceeds max of ${e2}.`, m = (e2) => `Missing ${e2} property in key`, h = (e2) => `Property 'weight' in key '${e2}' must be a positive integer`, g = Object.prototype.hasOwnProperty, _ = class {
  constructor(e2) {
    this._keys = [], this._keyMap = {};
    let t2 = 0;
    e2.forEach((e3) => {
      let n2 = v(e3);
      this._keys.push(n2), this._keyMap[n2.id] = n2, t2 += n2.weight;
    }), this._keys.forEach((e3) => {
      e3.weight /= t2;
    });
  }
  get(e2) {
    return this._keyMap[e2];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function v(t2) {
  let n2 = null, i2 = null, a2 = null, o2 = 1, s2 = null;
  if (r(t2) || e(t2)) a2 = t2, n2 = y(t2), i2 = b(t2);
  else {
    if (!g.call(t2, `name`)) throw Error(m(`name`));
    let e2 = t2.name;
    if (a2 = e2, g.call(t2, `weight`) && (o2 = t2.weight, o2 <= 0)) throw Error(h(e2));
    n2 = y(e2), i2 = b(e2), s2 = t2.getFn;
  }
  return { path: n2, id: i2, weight: o2, src: a2, getFn: s2 };
}
function y(t2) {
  return e(t2) ? t2 : t2.split(`.`);
}
function b(t2) {
  return e(t2) ? t2.join(`.`) : t2;
}
function x(t2, o2) {
  let s2 = [], l2 = false, u2 = (t3, o3, d2, f2) => {
    if (c(t3)) if (!o3[d2]) s2.push(f2 === void 0 ? t3 : { v: t3, i: f2 });
    else {
      let p2 = t3[o3[d2]];
      if (!c(p2)) return;
      if (d2 === o3.length - 1 && (r(p2) || i(p2) || a(p2) || typeof p2 == `bigint`)) s2.push(f2 === void 0 ? n(p2) : { v: n(p2), i: f2 });
      else if (e(p2)) {
        l2 = true;
        for (let e2 = 0, t4 = p2.length; e2 < t4; e2 += 1) u2(p2[e2], o3, d2 + 1, e2);
      } else o3.length && u2(p2, o3, d2 + 1, f2);
    }
  };
  return u2(t2, r(o2) ? o2.split(`.`) : o2, 0), l2 ? s2 : s2[0];
}
var S = { includeMatches: false, findAllMatches: false, minMatchCharLength: 1 }, C = { isCaseSensitive: false, ignoreDiacritics: false, includeScore: false, keys: [], shouldSort: true, sortFn: (e2, t2) => e2.score === t2.score ? e2.idx < t2.idx ? -1 : 1 : e2.score < t2.score ? -1 : 1 }, w = { location: 0, threshold: 0.6, distance: 100 }, ee = { useExtendedSearch: false, useTokenSearch: false, getFn: x, ignoreLocation: false, ignoreFieldNorm: false, fieldNormWeight: 1 }, T = Object.freeze({ ...C, ...S, ...w, ...ee }), te = /[^ ]+/g;
function ne(e2 = 1, t2 = 3) {
  let n2 = /* @__PURE__ */ new Map(), r2 = 10 ** t2;
  return { get(t3) {
    let i2 = t3.match(te).length;
    if (n2.has(i2)) return n2.get(i2);
    let a2 = 1 / i2 ** (0.5 * e2), o2 = parseFloat(Math.round(a2 * r2) / r2);
    return n2.set(i2, o2), o2;
  }, clear() {
    n2.clear();
  } };
}
var E = class {
  constructor({ getFn: e2 = T.getFn, fieldNormWeight: t2 = T.fieldNormWeight } = {}) {
    this.norm = ne(t2, 3), this.getFn = e2, this.isCreated = false, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
  }
  setSources(e2 = []) {
    this.docs = e2;
  }
  setIndexRecords(e2 = []) {
    this.records = e2;
  }
  setKeys(e2 = []) {
    this.keys = e2, this._keysMap = {}, e2.forEach((e3, t2) => {
      this._keysMap[e3.id] = t2;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = true, r(this.docs[0]) ? this.docs.forEach((e2, t2) => {
      this._addString(e2, t2);
    }) : this.docs.forEach((e2, t2) => {
      this._addObject(e2, t2);
    }), this.norm.clear());
  }
  add(e2) {
    let t2 = this.size();
    r(e2) ? this._addString(e2, t2) : this._addObject(e2, t2);
  }
  removeAt(e2) {
    this.records.splice(e2, 1);
    for (let t2 = e2, n2 = this.size(); t2 < n2; t2 += 1) --this.records[t2].i;
  }
  removeAll(e2) {
    for (let t2 = e2.length - 1; t2 >= 0; --t2) this.records.splice(e2[t2], 1);
    for (let e3 = 0, t2 = this.records.length; e3 < t2; e3 += 1) this.records[e3].i = e3;
  }
  getValueForItemAtKeyId(e2, t2) {
    return e2[this._keysMap[t2]];
  }
  size() {
    return this.records.length;
  }
  _addString(e2, t2) {
    if (!c(e2) || l(e2)) return;
    let n2 = { v: e2, i: t2, n: this.norm.get(e2) };
    this.records.push(n2);
  }
  _addObject(t2, i2) {
    let a2 = { i: i2, $: {} };
    this.keys.forEach((i3, o2) => {
      let s2 = i3.getFn ? i3.getFn(t2) : this.getFn(t2, i3.path);
      if (c(s2)) {
        if (e(s2)) {
          let e2 = [];
          for (let t3 = 0, i4 = s2.length; t3 < i4; t3 += 1) {
            let i5 = s2[t3];
            if (c(i5)) {
              if (r(i5)) {
                if (!l(i5)) {
                  let n2 = { v: i5, i: t3, n: this.norm.get(i5) };
                  e2.push(n2);
                }
              } else if (c(i5.v)) {
                let t4 = r(i5.v) ? i5.v : n(i5.v);
                if (!l(t4)) {
                  let n2 = { v: t4, i: i5.i, n: this.norm.get(t4) };
                  e2.push(n2);
                }
              }
            }
          }
          a2.$[o2] = e2;
        } else if (r(s2) && !l(s2)) {
          let e2 = { v: s2, n: this.norm.get(s2) };
          a2.$[o2] = e2;
        }
      }
    }), this.records.push(a2);
  }
  toJSON() {
    return { keys: this.keys.map(({ getFn: e2, ...t2 }) => t2), records: this.records };
  }
};
function D(e2, t2, { getFn: n2 = T.getFn, fieldNormWeight: r2 = T.fieldNormWeight } = {}) {
  let i2 = new E({ getFn: n2, fieldNormWeight: r2 });
  return i2.setKeys(e2.map(v)), i2.setSources(t2), i2.create(), i2;
}
function re(e2, { getFn: t2 = T.getFn, fieldNormWeight: n2 = T.fieldNormWeight } = {}) {
  let { keys: r2, records: i2 } = e2, a2 = new E({ getFn: t2, fieldNormWeight: n2 });
  return a2.setKeys(r2), a2.setIndexRecords(i2), a2;
}
function ie(e2 = [], t2 = T.minMatchCharLength) {
  let n2 = [], r2 = -1, i2 = -1, a2 = 0;
  for (let o2 = e2.length; a2 < o2; a2 += 1) {
    let o3 = e2[a2];
    o3 && r2 === -1 ? r2 = a2 : !o3 && r2 !== -1 && (i2 = a2 - 1, i2 - r2 + 1 >= t2 && n2.push([r2, i2]), r2 = -1);
  }
  return e2[a2 - 1] && a2 - r2 >= t2 && n2.push([r2, a2 - 1]), n2;
}
var O = 32;
function ae(e2, t2, n2, { location: r2 = T.location, distance: i2 = T.distance, threshold: a2 = T.threshold, findAllMatches: o2 = T.findAllMatches, minMatchCharLength: s2 = T.minMatchCharLength, includeMatches: c2 = T.includeMatches, ignoreLocation: l2 = T.ignoreLocation } = {}) {
  if (t2.length > O) throw Error(p(O));
  let u2 = t2.length, d2 = e2.length, f2 = Math.max(0, Math.min(r2, d2)), m2 = a2, h2 = f2, g2 = (e3, t3) => {
    let n3 = e3 / u2;
    if (l2) return n3;
    let r3 = Math.abs(f2 - t3);
    return i2 ? n3 + r3 / i2 : r3 ? 1 : n3;
  }, _2 = s2 > 1 || c2, v2 = _2 ? Array(d2) : [], y2;
  for (; (y2 = e2.indexOf(t2, h2)) > -1; ) {
    let e3 = g2(0, y2);
    if (m2 = Math.min(e3, m2), h2 = y2 + u2, _2) {
      let e4 = 0;
      for (; e4 < u2; ) v2[y2 + e4] = 1, e4 += 1;
    }
  }
  h2 = -1;
  let b2 = [], x2 = 1, S2 = u2 + d2, C2 = 1 << u2 - 1;
  for (let t3 = 0; t3 < u2; t3 += 1) {
    let r3 = 0, i3 = S2;
    for (; r3 < i3; ) g2(t3, f2 + i3) <= m2 ? r3 = i3 : S2 = i3, i3 = Math.floor((S2 - r3) / 2 + r3);
    S2 = i3;
    let a3 = Math.max(1, f2 - i3 + 1), s3 = o2 ? d2 : Math.min(f2 + i3, d2) + u2, c3 = Array(s3 + 2);
    c3[s3 + 1] = (1 << t3) - 1;
    for (let r4 = s3; r4 >= a3; --r4) {
      let i4 = r4 - 1, o3 = n2[e2[i4]];
      if (_2 && (v2[i4] = +!!o3), c3[r4] = (c3[r4 + 1] << 1 | 1) & o3, t3 && (c3[r4] |= (b2[r4 + 1] | b2[r4]) << 1 | 1 | b2[r4 + 1]), c3[r4] & C2 && (x2 = g2(t3, i4), x2 <= m2)) {
        if (m2 = x2, h2 = i4, h2 <= f2) break;
        a3 = Math.max(1, 2 * f2 - h2);
      }
    }
    if (g2(t3 + 1, f2) > m2) break;
    b2 = c3;
  }
  let w2 = { isMatch: h2 >= 0, score: Math.max(1e-3, x2) };
  if (_2) {
    let e3 = ie(v2, s2);
    e3.length ? c2 && (w2.indices = e3) : w2.isMatch = false;
  }
  return w2;
}
function oe(e2) {
  let t2 = {};
  for (let n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) {
    let i2 = e2.charAt(n2);
    t2[i2] = (t2[i2] || 0) | 1 << r2 - n2 - 1;
  }
  return t2;
}
function k(e2) {
  if (e2.length <= 1) return e2;
  e2.sort((e3, t3) => e3[0] - t3[0] || e3[1] - t3[1]);
  let t2 = [e2[0]];
  for (let n2 = 1, r2 = e2.length; n2 < r2; n2 += 1) {
    let r3 = t2[t2.length - 1], i2 = e2[n2];
    i2[0] <= r3[1] + 1 ? r3[1] = Math.max(r3[1], i2[1]) : t2.push(i2);
  }
  return t2;
}
var A = { \u0142: `l`, \u0141: `L`, \u0111: `d`, \u0110: `D`, \u00F8: `o`, \u00D8: `O`, \u0127: `h`, \u0126: `H`, \u0167: `t`, \u0166: `T`, \u0131: `i`, \u00DF: `ss` }, j = RegExp(`[` + Object.keys(A).join(``) + `]`, `g`), M = String.prototype.normalize ? (e2) => e2.normalize(`NFD`).replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, ``).replace(j, (e3) => A[e3]) : (e2) => e2, N = class {
  constructor(e2, { location: t2 = T.location, threshold: n2 = T.threshold, distance: r2 = T.distance, includeMatches: i2 = T.includeMatches, findAllMatches: a2 = T.findAllMatches, minMatchCharLength: o2 = T.minMatchCharLength, isCaseSensitive: s2 = T.isCaseSensitive, ignoreDiacritics: c2 = T.ignoreDiacritics, ignoreLocation: l2 = T.ignoreLocation } = {}) {
    if (this.options = { location: t2, threshold: n2, distance: r2, includeMatches: i2, findAllMatches: a2, minMatchCharLength: o2, isCaseSensitive: s2, ignoreDiacritics: c2, ignoreLocation: l2 }, e2 = s2 ? e2 : e2.toLowerCase(), e2 = c2 ? M(e2) : e2, this.pattern = e2, this.chunks = [], !this.pattern.length) return;
    let u2 = (e3, t3) => {
      this.chunks.push({ pattern: e3, alphabet: oe(e3), startIndex: t3 });
    }, d2 = this.pattern.length;
    if (d2 > O) {
      let e3 = 0, t3 = d2 % O, n3 = d2 - t3;
      for (; e3 < n3; ) u2(this.pattern.substr(e3, O), e3), e3 += O;
      if (t3) {
        let e4 = d2 - O;
        u2(this.pattern.substr(e4), e4);
      }
    } else u2(this.pattern, 0);
  }
  searchIn(e2) {
    let { isCaseSensitive: t2, ignoreDiacritics: n2, includeMatches: r2 } = this.options;
    if (e2 = t2 ? e2 : e2.toLowerCase(), e2 = n2 ? M(e2) : e2, this.pattern === e2) {
      let t3 = { isMatch: true, score: 0 };
      return r2 && (t3.indices = [[0, e2.length - 1]]), t3;
    }
    let { location: i2, distance: a2, threshold: o2, findAllMatches: s2, minMatchCharLength: c2, ignoreLocation: l2 } = this.options, u2 = [], d2 = 0, f2 = false;
    this.chunks.forEach(({ pattern: t3, alphabet: n3, startIndex: p3 }) => {
      let { isMatch: m2, score: h2, indices: g2 } = ae(e2, t3, n3, { location: i2 + p3, distance: a2, threshold: o2, findAllMatches: s2, minMatchCharLength: c2, includeMatches: r2, ignoreLocation: l2 });
      m2 && (f2 = true), d2 += h2, m2 && g2 && u2.push(...g2);
    });
    let p2 = { isMatch: f2, score: f2 ? d2 / this.chunks.length : 1 };
    return f2 && r2 && (p2.indices = k(u2)), p2;
  }
}, P = class {
  constructor(e2) {
    this.pattern = e2;
  }
  static isMultiMatch(e2) {
    return F(e2, this.multiRegex);
  }
  static isSingleMatch(e2) {
    return F(e2, this.singleRegex);
  }
  search(e2) {
    return { isMatch: false, score: 1 };
  }
};
function F(e2, t2) {
  let n2 = e2.match(t2);
  return n2 ? n2[1] : null;
}
var se = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `exact`;
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e2) {
    let t2 = e2 === this.pattern;
    return { isMatch: t2, score: +!t2, indices: [0, this.pattern.length - 1] };
  }
}, ce = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `inverse-exact`;
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e2) {
    let t2 = e2.indexOf(this.pattern) === -1;
    return { isMatch: t2, score: +!t2, indices: [0, e2.length - 1] };
  }
}, le = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `prefix-exact`;
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e2) {
    let t2 = e2.startsWith(this.pattern);
    return { isMatch: t2, score: +!t2, indices: [0, this.pattern.length - 1] };
  }
}, ue = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `inverse-prefix-exact`;
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e2) {
    let t2 = !e2.startsWith(this.pattern);
    return { isMatch: t2, score: +!t2, indices: [0, e2.length - 1] };
  }
}, de = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `suffix-exact`;
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e2) {
    let t2 = e2.endsWith(this.pattern);
    return { isMatch: t2, score: +!t2, indices: [e2.length - this.pattern.length, e2.length - 1] };
  }
}, fe = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `inverse-suffix-exact`;
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e2) {
    let t2 = !e2.endsWith(this.pattern);
    return { isMatch: t2, score: +!t2, indices: [0, e2.length - 1] };
  }
}, I = class extends P {
  constructor(e2, { location: t2 = T.location, threshold: n2 = T.threshold, distance: r2 = T.distance, includeMatches: i2 = T.includeMatches, findAllMatches: a2 = T.findAllMatches, minMatchCharLength: o2 = T.minMatchCharLength, isCaseSensitive: s2 = T.isCaseSensitive, ignoreDiacritics: c2 = T.ignoreDiacritics, ignoreLocation: l2 = T.ignoreLocation } = {}) {
    super(e2), this._bitapSearch = new N(e2, { location: t2, threshold: n2, distance: r2, includeMatches: i2, findAllMatches: a2, minMatchCharLength: o2, isCaseSensitive: s2, ignoreDiacritics: c2, ignoreLocation: l2 });
  }
  static get type() {
    return `fuzzy`;
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e2) {
    return this._bitapSearch.searchIn(e2);
  }
}, L = class extends P {
  constructor(e2) {
    super(e2);
  }
  static get type() {
    return `include`;
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e2) {
    let t2 = 0, n2, r2 = [], i2 = this.pattern.length;
    for (; (n2 = e2.indexOf(this.pattern, t2)) > -1; ) t2 = n2 + i2, r2.push([n2, t2 - 1]);
    let a2 = !!r2.length;
    return { isMatch: a2, score: +!a2, indices: r2 };
  }
}, R = [se, L, le, ue, fe, de, ce, I], z = R.length, B = `\0`, pe = `|`;
function me(e2) {
  let t2 = [], n2 = e2.length, r2 = 0;
  for (; r2 < n2; ) {
    for (; r2 < n2 && e2[r2] === ` `; ) r2++;
    if (r2 >= n2) break;
    let i2 = r2;
    for (; i2 < n2 && e2[i2] !== ` ` && e2[i2] !== `"`; ) i2++;
    if (i2 < n2 && e2[i2] === `"`) {
      for (i2++; i2 < n2; ) {
        if (e2[i2] === `"`) {
          let t3 = i2 + 1;
          if (t3 >= n2 || e2[t3] === ` `) {
            i2++;
            break;
          }
          if (e2[t3] === `$` && (t3 + 1 >= n2 || e2[t3 + 1] === ` `)) {
            i2 += 2;
            break;
          }
        }
        i2++;
      }
      t2.push(e2.substring(r2, i2)), r2 = i2;
    } else {
      for (; i2 < n2 && e2[i2] !== ` `; ) i2++;
      t2.push(e2.substring(r2, i2)), r2 = i2;
    }
  }
  return t2;
}
function he(e2, t2 = {}) {
  return e2.replace(/\\\|/g, B).split(pe).map((e3) => {
    let n2 = me(e3.replace(/\u0000/g, `|`).trim()).filter((e4) => e4 && !!e4.trim()), r2 = [];
    for (let e4 = 0, i2 = n2.length; e4 < i2; e4 += 1) {
      let i3 = n2[e4], a2 = false, o2 = -1;
      for (; !a2 && ++o2 < z; ) {
        let e5 = R[o2], n3 = e5.isMultiMatch(i3);
        n3 && (r2.push(new e5(n3, t2)), a2 = true);
      }
      if (!a2) for (o2 = -1; ++o2 < z; ) {
        let e5 = R[o2], n3 = e5.isSingleMatch(i3);
        if (n3) {
          r2.push(new e5(n3, t2));
          break;
        }
      }
    }
    return r2;
  });
}
var ge = /* @__PURE__ */ new Set([I.type, L.type]), _e = class {
  constructor(e2, { isCaseSensitive: t2 = T.isCaseSensitive, ignoreDiacritics: n2 = T.ignoreDiacritics, includeMatches: r2 = T.includeMatches, minMatchCharLength: i2 = T.minMatchCharLength, ignoreLocation: a2 = T.ignoreLocation, findAllMatches: o2 = T.findAllMatches, location: s2 = T.location, threshold: c2 = T.threshold, distance: l2 = T.distance } = {}) {
    this.query = null, this.options = { isCaseSensitive: t2, ignoreDiacritics: n2, includeMatches: r2, minMatchCharLength: i2, findAllMatches: o2, ignoreLocation: a2, location: s2, threshold: c2, distance: l2 }, e2 = t2 ? e2 : e2.toLowerCase(), e2 = n2 ? M(e2) : e2, this.pattern = e2, this.query = he(this.pattern, this.options);
  }
  static condition(e2, t2) {
    return t2.useExtendedSearch;
  }
  searchIn(e2) {
    let t2 = this.query;
    if (!t2) return { isMatch: false, score: 1 };
    let { includeMatches: n2, isCaseSensitive: r2, ignoreDiacritics: i2 } = this.options;
    e2 = r2 ? e2 : e2.toLowerCase(), e2 = i2 ? M(e2) : e2;
    let a2 = 0, o2 = [], s2 = 0, c2 = false;
    for (let r3 = 0, i3 = t2.length; r3 < i3; r3 += 1) {
      let i4 = t2[r3];
      o2.length = 0, a2 = 0, c2 = false;
      for (let t3 = 0, r4 = i4.length; t3 < r4; t3 += 1) {
        let r5 = i4[t3], { isMatch: l2, indices: u2, score: d2 } = r5.search(e2);
        if (l2) {
          a2 += 1, s2 += d2;
          let e3 = r5.constructor.type;
          e3.startsWith(`inverse`) && (c2 = true), n2 && (ge.has(e3) ? o2.push(...u2) : o2.push(u2));
        } else {
          s2 = 0, a2 = 0, o2.length = 0, c2 = false;
          break;
        }
      }
      if (a2) {
        let e3 = { isMatch: true, score: s2 / a2 };
        return c2 && (e3.hasInverse = true), n2 && (e3.indices = k(o2)), e3;
      }
    }
    return { isMatch: false, score: 1 };
  }
}, V = [];
function H(...e2) {
  V.push(...e2);
}
function U(e2, t2) {
  for (let n2 = 0, r2 = V.length; n2 < r2; n2 += 1) {
    let r3 = V[n2];
    if (r3.condition(e2, t2)) return new r3(e2, t2);
  }
  return new N(e2, t2);
}
var W = { AND: `$and`, OR: `$or` }, G = { PATH: `$path`, PATTERN: `$val` }, K = (e2) => !!(e2[W.AND] || e2[W.OR]), ve = (e2) => !!e2[G.PATH], ye = (t2) => !e(t2) && o(t2) && !K(t2), q = (e2) => ({ [W.AND]: Object.keys(e2).map((t2) => ({ [t2]: e2[t2] })) });
function J(t2, n2, { auto: i2 = true } = {}) {
  let a2 = (t3) => {
    if (r(t3)) {
      let e2 = { keyId: null, pattern: t3 };
      return i2 && (e2.searcher = U(t3, n2)), e2;
    }
    let o2 = Object.keys(t3), s2 = ve(t3);
    if (!s2 && o2.length > 1 && !K(t3)) return a2(q(t3));
    if (ye(t3)) {
      let e2 = s2 ? t3[G.PATH] : o2[0], a3 = s2 ? t3[G.PATTERN] : t3[e2];
      if (!r(a3)) throw Error(f(e2));
      let c3 = { keyId: b(e2), pattern: a3 };
      return i2 && (c3.searcher = U(a3, n2)), c3;
    }
    let c2 = { children: [], operator: o2[0] };
    return o2.forEach((n3) => {
      let r2 = t3[n3];
      e(r2) && r2.forEach((e2) => {
        c2.children.push(a2(e2));
      });
    }), c2;
  };
  return K(t2) || (t2 = q(t2)), a2(t2);
}
function Y(e2, { ignoreFieldNorm: t2 = T.ignoreFieldNorm }) {
  let n2 = 1;
  return e2.forEach(({ key: e3, norm: r2, score: i2 }) => {
    let a2 = e3 ? e3.weight : null;
    n2 *= (i2 === 0 && a2 ? 2 ** -52 : i2) ** +((a2 || 1) * (t2 ? 1 : r2));
  }), n2;
}
function be(e2, { ignoreFieldNorm: t2 = T.ignoreFieldNorm }) {
  e2.forEach((e3) => {
    e3.score = Y(e3.matches, { ignoreFieldNorm: t2 });
  });
}
var xe = class {
  constructor(e2) {
    this.limit = e2, this.heap = [];
  }
  get size() {
    return this.heap.length;
  }
  shouldInsert(e2) {
    return this.size < this.limit || e2 < this.heap[0].score;
  }
  insert(e2) {
    this.size < this.limit ? (this.heap.push(e2), this._bubbleUp(this.size - 1)) : e2.score < this.heap[0].score && (this.heap[0] = e2, this._sinkDown(0));
  }
  extractSorted(e2) {
    return this.heap.sort(e2);
  }
  _bubbleUp(e2) {
    let t2 = this.heap;
    for (; e2 > 0; ) {
      let n2 = e2 - 1 >> 1;
      if (t2[e2].score <= t2[n2].score) break;
      let r2 = t2[e2];
      t2[e2] = t2[n2], t2[n2] = r2, e2 = n2;
    }
  }
  _sinkDown(e2) {
    let t2 = this.heap, n2 = t2.length, r2 = e2;
    do {
      e2 = r2;
      let i2 = 2 * e2 + 1, a2 = 2 * e2 + 2;
      if (i2 < n2 && t2[i2].score > t2[r2].score && (r2 = i2), a2 < n2 && t2[a2].score > t2[r2].score && (r2 = a2), r2 !== e2) {
        let n3 = t2[e2];
        t2[e2] = t2[r2], t2[r2] = n3;
      }
    } while (r2 !== e2);
  }
};
function Se(e2, t2) {
  let n2 = e2.matches;
  t2.matches = [], c(n2) && n2.forEach((e3) => {
    if (!c(e3.indices) || !e3.indices.length) return;
    let { indices: n3, value: r2 } = e3, i2 = { indices: n3, value: r2 };
    e3.key && (i2.key = e3.key.src), e3.idx > -1 && (i2.refIndex = e3.idx), t2.matches.push(i2);
  });
}
function Ce(e2, t2) {
  t2.score = e2.score;
}
function X(e2, t2, { includeMatches: n2 = T.includeMatches, includeScore: r2 = T.includeScore } = {}) {
  let i2 = [];
  return n2 && i2.push(Se), r2 && i2.push(Ce), e2.map((e3) => {
    let { idx: n3 } = e3, r3 = { item: t2[n3], refIndex: n3 };
    return i2.length && i2.forEach((t3) => {
      t3(e3, r3);
    }), r3;
  });
}
var we = /\b\w+\b/g;
function Z({ isCaseSensitive: e2 = false, ignoreDiacritics: t2 = false } = {}) {
  return { tokenize(n2) {
    return e2 || (n2 = n2.toLowerCase()), t2 && (n2 = M(n2)), n2.match(we) || [];
  } };
}
function Te(e2, t2, n2) {
  let r2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), a2 = 0;
  function o2(e3, t3, o3, s2) {
    let c2 = n2.tokenize(e3);
    if (!c2.length) return;
    a2++;
    let l2 = /* @__PURE__ */ new Map();
    for (let e4 of c2) l2.set(e4, (l2.get(e4) || 0) + 1);
    for (let [e4, n3] of l2) {
      let a3 = { docIdx: t3, keyIdx: o3, subIdx: s2, tf: n3 }, c3 = r2.get(e4);
      c3 || (c3 = [], r2.set(e4, c3)), c3.push(a3), i2.set(e4, (i2.get(e4) || 0) + 1);
    }
  }
  for (let n3 of e2) {
    let { i: e3, v: r3, $: i3 } = n3;
    if (r3 !== void 0) {
      o2(r3, e3, -1, -1);
      continue;
    }
    if (i3) for (let n4 = 0; n4 < t2; n4++) {
      let t3 = i3[n4];
      if (t3) if (Array.isArray(t3)) for (let r4 of t3) o2(r4.v, e3, n4, r4.i ?? -1);
      else o2(t3.v, e3, n4, -1);
    }
  }
  return { terms: r2, fieldCount: a2, df: i2 };
}
function Ee(e2, t2, n2, r2) {
  let { i: i2, v: a2, $: o2 } = t2;
  function s2(t3, n3, a3) {
    let o3 = r2.tokenize(t3);
    if (!o3.length) return;
    e2.fieldCount++;
    let s3 = /* @__PURE__ */ new Map();
    for (let e3 of o3) s3.set(e3, (s3.get(e3) || 0) + 1);
    for (let [t4, r3] of s3) {
      let o4 = { docIdx: i2, keyIdx: n3, subIdx: a3, tf: r3 }, s4 = e2.terms.get(t4);
      s4 || (s4 = [], e2.terms.set(t4, s4)), s4.push(o4), e2.df.set(t4, (e2.df.get(t4) || 0) + 1);
    }
  }
  if (a2 !== void 0) {
    s2(a2, -1, -1);
    return;
  }
  if (o2) for (let e3 = 0; e3 < n2; e3++) {
    let t3 = o2[e3];
    if (t3) if (Array.isArray(t3)) for (let n3 of t3) s2(n3.v, e3, n3.i ?? -1);
    else s2(t3.v, e3, -1);
  }
}
function Q(e2, t2) {
  for (let [n2, r2] of e2.terms) {
    let i2 = r2.filter((e3) => e3.docIdx !== t2), a2 = r2.length - i2.length;
    a2 > 0 && (e2.fieldCount -= a2, e2.df.set(n2, (e2.df.get(n2) || 0) - a2), i2.length === 0 ? (e2.terms.delete(n2), e2.df.delete(n2)) : e2.terms.set(n2, i2));
  }
}
var $ = class {
  constructor(e2, t2, n2) {
    this.options = { ...T, ...t2 }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new _(this.options.keys), this._docs = e2, this._myIndex = null, this._invertedIndex = null, this.setCollection(e2, n2), this._lastQuery = null, this._lastSearcher = null;
  }
  _getSearcher(e2) {
    if (this._lastQuery === e2) return this._lastSearcher;
    let t2 = U(e2, this._invertedIndex ? { ...this.options, _invertedIndex: this._invertedIndex } : this.options);
    return this._lastQuery = e2, this._lastSearcher = t2, t2;
  }
  setCollection(e2, t2) {
    if (this._docs = e2, t2 && !(t2 instanceof E)) throw Error(d);
    if (this._myIndex = t2 || D(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight }), this.options.useTokenSearch) {
      let e3 = Z({ isCaseSensitive: this.options.isCaseSensitive, ignoreDiacritics: this.options.ignoreDiacritics });
      this._invertedIndex = Te(this._myIndex.records, this._myIndex.keys.length, e3);
    }
  }
  add(e2) {
    if (c(e2) && (this._docs.push(e2), this._myIndex.add(e2), this._invertedIndex)) {
      let e3 = this._myIndex.records[this._myIndex.records.length - 1], t2 = Z({ isCaseSensitive: this.options.isCaseSensitive, ignoreDiacritics: this.options.ignoreDiacritics });
      Ee(this._invertedIndex, e3, this._myIndex.keys.length, t2);
    }
  }
  remove(e2 = () => false) {
    let t2 = [], n2 = [];
    for (let r2 = 0, i2 = this._docs.length; r2 < i2; r2 += 1) e2(this._docs[r2], r2) && (t2.push(this._docs[r2]), n2.push(r2));
    if (n2.length) {
      if (this._invertedIndex) for (let e3 of n2) Q(this._invertedIndex, e3);
      for (let e3 = n2.length - 1; e3 >= 0; --e3) this._docs.splice(n2[e3], 1);
      this._myIndex.removeAll(n2);
    }
    return t2;
  }
  removeAt(e2) {
    this._invertedIndex && Q(this._invertedIndex, e2);
    let t2 = this._docs.splice(e2, 1)[0];
    return this._myIndex.removeAt(e2), t2;
  }
  getIndex() {
    return this._myIndex;
  }
  search(e2, t2) {
    let { limit: n2 = -1 } = t2 || {}, { includeMatches: a2, includeScore: o2, shouldSort: s2, sortFn: c2, ignoreFieldNorm: l2 } = this.options;
    if (r(e2) && !e2.trim()) {
      let e3 = this._docs.map((e4, t3) => ({ item: e4, refIndex: t3 }));
      return i(n2) && n2 > -1 && (e3 = e3.slice(0, n2)), e3;
    }
    let u2 = i(n2) && n2 > 0 && r(e2), d2;
    if (u2) {
      let t3 = new xe(n2);
      r(this._docs[0]) ? this._searchStringList(e2, { heap: t3, ignoreFieldNorm: l2 }) : this._searchObjectList(e2, { heap: t3, ignoreFieldNorm: l2 }), d2 = t3.extractSorted(c2);
    } else d2 = r(e2) ? r(this._docs[0]) ? this._searchStringList(e2) : this._searchObjectList(e2) : this._searchLogical(e2), be(d2, { ignoreFieldNorm: l2 }), s2 && d2.sort(c2), i(n2) && n2 > -1 && (d2 = d2.slice(0, n2));
    return X(d2, this._docs, { includeMatches: a2, includeScore: o2 });
  }
  _searchStringList(e2, { heap: t2, ignoreFieldNorm: n2 } = {}) {
    let r2 = this._getSearcher(e2), { records: i2 } = this._myIndex, a2 = t2 ? null : [];
    return i2.forEach(({ v: e3, i: i3, n: o2 }) => {
      if (!c(e3)) return;
      let { isMatch: s2, score: l2, indices: u2 } = r2.searchIn(e3);
      if (s2) {
        let r3 = { item: e3, idx: i3, matches: [{ score: l2, value: e3, norm: o2, indices: u2 }] };
        t2 ? (r3.score = Y(r3.matches, { ignoreFieldNorm: n2 }), t2.shouldInsert(r3.score) && t2.insert(r3)) : a2.push(r3);
      }
    }), a2;
  }
  _searchLogical(e2) {
    let t2 = J(e2, this.options), n2 = (e3, t3, r3) => {
      if (!(`children` in e3)) {
        let { keyId: n3, searcher: i4 } = e3, a4;
        return n3 === null ? (a4 = [], this._myIndex.keys.forEach((e4, n4) => {
          a4.push(...this._findMatches({ key: e4, value: t3[n4], searcher: i4 }));
        })) : a4 = this._findMatches({ key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(t3, n3), searcher: i4 }), a4 && a4.length ? [{ idx: r3, item: t3, matches: a4 }] : [];
      }
      let { children: i3, operator: a3 } = e3, o2 = [];
      for (let e4 = 0, s2 = i3.length; e4 < s2; e4 += 1) {
        let s3 = i3[e4], c2 = n2(s3, t3, r3);
        if (c2.length) o2.push(...c2);
        else if (a3 === W.AND) return [];
      }
      return o2;
    }, r2 = this._myIndex.records, i2 = /* @__PURE__ */ new Map(), a2 = [];
    return r2.forEach(({ $: e3, i: r3 }) => {
      if (c(e3)) {
        let o2 = n2(t2, e3, r3);
        o2.length && (i2.has(r3) || (i2.set(r3, { idx: r3, item: e3, matches: [] }), a2.push(i2.get(r3))), o2.forEach(({ matches: e4 }) => {
          i2.get(r3).matches.push(...e4);
        }));
      }
    }), a2;
  }
  _searchObjectList(e2, { heap: t2, ignoreFieldNorm: n2 } = {}) {
    let r2 = this._getSearcher(e2), { keys: i2, records: a2 } = this._myIndex, o2 = t2 ? null : [];
    return a2.forEach(({ $: e3, i: a3 }) => {
      if (!c(e3)) return;
      let s2 = [], l2 = false, u2 = false;
      if (i2.forEach((t3, n3) => {
        let i3 = this._findMatches({ key: t3, value: e3[n3], searcher: r2 });
        i3.length ? (s2.push(...i3), i3[0].hasInverse && (u2 = true)) : l2 = true;
      }), !(u2 && l2) && s2.length) {
        let r3 = { idx: a3, item: e3, matches: s2 };
        t2 ? (r3.score = Y(r3.matches, { ignoreFieldNorm: n2 }), t2.shouldInsert(r3.score) && t2.insert(r3)) : o2.push(r3);
      }
    }), o2;
  }
  _findMatches({ key: t2, value: n2, searcher: r2 }) {
    if (!c(n2)) return [];
    let i2 = [];
    if (e(n2)) n2.forEach(({ v: e2, i: n3, n: a2 }) => {
      if (!c(e2)) return;
      let { isMatch: o2, score: s2, indices: l2, hasInverse: u2 } = r2.searchIn(e2);
      o2 && i2.push({ score: s2, key: t2, value: e2, idx: n3, norm: a2, indices: l2, hasInverse: u2 });
    });
    else {
      let { v: e2, n: a2 } = n2, { isMatch: o2, score: s2, indices: c2, hasInverse: l2 } = r2.searchIn(e2);
      o2 && i2.push({ score: s2, key: t2, value: e2, norm: a2, indices: c2, hasInverse: l2 });
    }
    return i2;
  }
}, De = class {
  static condition(e2, t2) {
    return t2.useTokenSearch;
  }
  constructor(e2, t2) {
    this.options = t2, this.analyzer = Z({ isCaseSensitive: t2.isCaseSensitive, ignoreDiacritics: t2.ignoreDiacritics });
    let n2 = this.analyzer.tokenize(e2), { df: r2, fieldCount: i2 } = t2._invertedIndex;
    this.termSearchers = [], this.idfWeights = [];
    for (let e3 of n2) {
      this.termSearchers.push(new N(e3, { location: t2.location, threshold: t2.threshold, distance: t2.distance, includeMatches: t2.includeMatches, findAllMatches: t2.findAllMatches, minMatchCharLength: t2.minMatchCharLength, isCaseSensitive: t2.isCaseSensitive, ignoreDiacritics: t2.ignoreDiacritics, ignoreLocation: true }));
      let n3 = r2.get(e3) || 0, a2 = Math.log(1 + (i2 - n3 + 0.5) / (n3 + 0.5));
      this.idfWeights.push(a2);
    }
  }
  searchIn(e2) {
    if (!this.termSearchers.length) return { isMatch: false, score: 1 };
    let t2 = [], n2 = 0, r2 = 0, i2 = 0;
    for (let a3 = 0; a3 < this.termSearchers.length; a3++) {
      let o3 = this.termSearchers[a3].searchIn(e2), s2 = this.idfWeights[a3];
      r2 += s2, o3.isMatch && (i2++, n2 += s2 * (1 - o3.score), o3.indices && t2.push(...o3.indices));
    }
    if (i2 === 0) return { isMatch: false, score: 1 };
    let a2 = r2 > 0 ? 1 - n2 / r2 : 0, o2 = { isMatch: true, score: Math.max(1e-3, a2) };
    return this.options.includeMatches && t2.length && (o2.indices = k(t2)), o2;
  }
};
$.version = `7.3.0`, $.createIndex = D, $.parseIndex = re, $.config = T, $.match = function(e2, t2, n2) {
  return U(e2, { ...T, ...n2 }).searchIn(t2);
}, $.parseQuery = J, H(_e), H(De), $.use = function(...e2) {
  e2.forEach((e3) => H(e3));
};
export {
  $ as t
};
