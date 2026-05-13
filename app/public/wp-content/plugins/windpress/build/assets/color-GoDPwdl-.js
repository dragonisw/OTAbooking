var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
function e(e4, t2) {
  let n2 = e4.length, r2, i2, a2 = false, o2 = false;
  Array.isArray(e4[0]) ? r2 = e4 : (r2 = [e4], n2 = r2.length, a2 = true), Array.isArray(t2[0]) ? i2 = t2 : (i2 = t2.length > 0 ? t2.map((e5) => [e5]) : [[]], o2 = true);
  let s2 = i2[0].length, c2 = i2[0].map((e5, t3) => i2.map((e6) => e6[t3])), l2 = r2.map((e5) => c2.map((t3) => {
    let n3 = 0;
    if (!Array.isArray(e5)) {
      for (let r3 of t3) n3 += e5 * r3;
      return n3;
    }
    for (let r3 = 0; r3 < e5.length; r3++) n3 += e5[r3] * (t3[r3] || 0);
    return n3;
  }));
  return n2 === 1 && a2 && (l2 = l2[0]), s2 === 1 && o2 ? n2 === 1 && a2 ? l2[0] : l2.map((e5) => e5[0]) : l2;
}
function t(e4, t2) {
  return e4[0] * t2[0] + e4[1] * t2[1] + e4[2] * t2[2];
}
function n(e4, n2, r2 = [0, 0, 0]) {
  let i2 = t(e4, n2[0]), a2 = t(e4, n2[1]), o2 = t(e4, n2[2]);
  return r2[0] = i2, r2[1] = a2, r2[2] = o2, r2;
}
function r(e4) {
  return i(e4) === `string`;
}
function i(e4) {
  return (Object.prototype.toString.call(e4).match(/^\[object\s+(.*?)\]$/)[1] || ``).toLowerCase();
}
function a(e4, { precision: t2 = 16, unit: n2 }) {
  return o(e4) ? `none` : (e4 = +c(e4, t2), e4 + (n2 ?? ``));
}
function o(e4) {
  return e4 === null;
}
function s(e4) {
  return o(e4) ? 0 : e4;
}
function c(e4, t2) {
  if (e4 === 0) return 0;
  let n2 = ~~e4, r2 = 0;
  n2 && t2 && (r2 = ~~Math.log10(Math.abs(n2)) + 1);
  let i2 = 10 ** (t2 - r2);
  return Math.floor(e4 * i2 + 0.5) / i2;
}
function l(e4, t2, n2) {
  return isNaN(e4) ? t2 : isNaN(t2) ? e4 : e4 + (t2 - e4) * n2;
}
function u(e4, t2, n2) {
  return (n2 - e4) / (t2 - e4);
}
function d(e4, t2, n2) {
  return !e4 || !t2 || e4 === t2 || e4[0] === t2[0] && e4[1] === t2[1] || isNaN(n2) || n2 === null ? n2 : l(t2[0], t2[1], u(e4[0], e4[1], n2));
}
function f(e4, t2, n2) {
  return Math.max(Math.min(n2, t2), e4);
}
function p(e4, t2) {
  return Math.sign(e4) === Math.sign(t2) ? e4 : -e4;
}
function m(e4, t2) {
  return p(Math.abs(e4) ** t2, e4);
}
function h(e4, t2) {
  return t2 === 0 ? 0 : e4 / t2;
}
function g(e4, t2, n2 = 0, r2 = e4.length) {
  for (; n2 < r2; ) {
    let i2 = n2 + r2 >> 1;
    e4[i2] < t2 ? n2 = i2 + 1 : r2 = i2;
  }
  return n2;
}
function _(e4, t2) {
  if (e4 instanceof t2) return true;
  let n2 = t2.name;
  for (; e4; ) {
    let t3 = Object.getPrototypeOf(e4), r2 = t3?.constructor?.name;
    if (r2 === n2) return true;
    if (!r2 || r2 === `Object`) return false;
    e4 = t3;
  }
  return false;
}
var v = Object.freeze({ __proto__: null, bisectLeft: g, clamp: f, copySign: p, interpolate: l, interpolateInv: u, isInstance: _, isNone: o, isString: r, mapRange: d, multiplyMatrices: e, multiply_v3_m3x3: n, serializeNumber: a, skipNone: s, spow: m, toPrecision: c, type: i, zdiv: h }), y = new class {
  add(e4, t2, n2) {
    if (typeof arguments[0] != `string`) {
      for (var e4 in arguments[0]) this.add(e4, arguments[0][e4], arguments[1]);
      return;
    }
    (Array.isArray(e4) ? e4 : [e4]).forEach(function(e5) {
      this[e5] = this[e5] || [], t2 && this[e5][n2 ? `unshift` : `push`](t2);
    }, this);
  }
  run(e4, t2) {
    this[e4] = this[e4] || [], this[e4].forEach(function(e5) {
      e5.call(t2 && t2.context ? t2.context : t2, t2);
    });
  }
}(), b = { gamut_mapping: `css`, precision: 5, deltaE: `76`, verbose: `production`?.toLowerCase() !== `test`, warn: function(e4) {
  this.verbose && globalThis?.console?.warn?.(e4);
} }, x = class {
  constructor(e4, t2) {
    __publicField(this, "type");
    __publicField(this, "coordMeta");
    __publicField(this, "coordRange");
    __publicField(this, "range");
    if (typeof e4 == `object` && (this.coordMeta = e4), t2 && (this.coordMeta = t2, this.coordRange = t2.range ?? t2.refRange), typeof e4 == `string`) {
      let t3 = e4.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);
      if (!t3) throw TypeError(`Cannot parse ${e4} as a type definition.`);
      this.type = t3.groups.type;
      let { min: n2, max: r2 } = t3.groups;
      (n2 || r2) && (this.range = [+n2, +r2]);
    }
  }
  get computedRange() {
    return this.range ? this.range : this.type === `<percentage>` ? this.percentageRange() : this.type === `<angle>` ? [0, 360] : null;
  }
  get unit() {
    return this.type === `<percentage>` ? `%` : this.type === `<angle>` ? `deg` : ``;
  }
  resolve(e4) {
    if (this.type === `<angle>`) return e4;
    let t2 = this.computedRange, n2 = this.coordRange;
    return this.type === `<percentage>` && (n2 ?? (n2 = this.percentageRange())), d(t2, n2, e4);
  }
  serialize(e4, t2) {
    let n2 = this.type === `<percentage>` ? this.percentageRange(100) : this.computedRange, r2 = this.unit;
    return e4 = d(this.coordRange, n2, e4), a(e4, { unit: r2, precision: t2 });
  }
  toString() {
    let e4 = this.type;
    if (this.range) {
      let [t2 = ``, n2 = ``] = this.range;
      e4 += `[${t2},${n2}]`;
    }
    return e4;
  }
  percentageRange(e4 = 1) {
    let t2;
    return t2 = this.coordMeta && this.coordMeta.range || this.coordRange && this.coordRange[0] >= 0 ? [0, 1] : [-1, 1], [t2[0] * e4, t2[1] * e4];
  }
  static get(e4, t2) {
    return _(e4, this) ? e4 : new this(e4, t2);
  }
}, S = /* @__PURE__ */ Symbol(`instance`), C = class e2 {
  constructor(e4, t2 = e4.space) {
    __publicField(this, "type");
    __publicField(this, "name");
    __publicField(this, "spaceCoords");
    __publicField(this, "coords");
    __publicField(this, "id");
    __publicField(this, "alpha");
    e4[S] = this, this.type = `function`, this.name = `color`, Object.assign(this, e4), this.space = t2, this.type !== `custom` && (this.spaceCoords = Object.values(t2.coords), this.coords || (this.coords = this.spaceCoords.map((e5) => {
      let t3 = [`<number>`, `<percentage>`];
      return e5.type === `angle` && t3.push(`<angle>`), t3;
    })), this.coords = this.coords.map((e5, t3) => {
      let n2 = this.spaceCoords[t3];
      return typeof e5 == `string` && (e5 = e5.trim().split(/\s*\|\s*/)), e5.map((e6) => x.get(e6, n2));
    }));
  }
  serializeCoords(e4, t2, n2) {
    return n2 = e4.map((e5, t3) => x.get(n2?.[t3] ?? this.coords[t3][0], this.spaceCoords[t3])), e4.map((e5, r2) => n2[r2].serialize(e5, t2));
  }
  coerceCoords(e4, t2) {
    return Object.entries(this.space.coords).map(([n2, r2], i2) => {
      let a2 = e4[i2];
      if (o(a2) || isNaN(a2)) return a2;
      let s2 = t2[i2], c2 = this.coords[i2].find((e5) => e5.type == s2);
      if (!c2) {
        let e5 = r2.name || n2;
        throw TypeError(`${s2 ?? a2?.raw ?? a2} not allowed for ${e5} in ${this.name}()`);
      }
      return a2 = c2.resolve(a2), c2.range && (t2[i2] = c2.toString()), a2;
    });
  }
  canSerialize() {
    return this.type === `function` || this.serialize;
  }
  parse(e4) {
    return null;
  }
  static get(t2, ...n2) {
    return !t2 || _(t2, this) ? t2 : t2[S] ? t2[S] : new e2(t2, ...n2);
  }
}, w = { D50: [0.3457 / 0.3585, 1, 0.2958 / 0.3585], D65: [0.3127 / 0.329, 1, 0.3583 / 0.329] };
function T(e4) {
  return Array.isArray(e4) ? e4 : w[e4];
}
function E(e4, t2, r2, i2 = {}) {
  if (e4 = T(e4), t2 = T(t2), !e4 || !t2) throw TypeError(`Missing white point to convert ${e4 ? `` : `from`}${!e4 && !t2 ? `/` : ``}${t2 ? `` : `to`}`);
  if (e4 === t2) return r2;
  let a2 = { W1: e4, W2: t2, XYZ: r2, options: i2 };
  if (y.run(`chromatic-adaptation-start`, a2), a2.M || (a2.W1 === w.D65 && a2.W2 === w.D50 ? a2.M = [[1.0479297925449969, 0.022946870601609652, -0.05019226628920524], [0.02962780877005599, 0.9904344267538799, -0.017073799063418826], [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]] : a2.W1 === w.D50 && a2.W2 === w.D65 && (a2.M = [[0.955473421488075, -0.02309845494876471, 0.06325924320057072], [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323], [0.012314014864481998, -0.020507649298898964, 1.330365926242124]])), y.run(`chromatic-adaptation-end`, a2), a2.M) return n(a2.XYZ, a2.M);
  throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`);
}
function D(e4, t2) {
  let n2 = { str: String(e4)?.trim(), options: t2 };
  if (y.run(`parse-start`, n2), n2.color) return n2.color;
  n2.parsed = ee(n2.str);
  let r2, i2 = n2.options ? n2.options.parseMeta ?? n2.options.meta : null;
  if (n2.parsed) {
    let t3 = n2.parsed.name, a2, o2, s2 = n2.parsed.args, c2 = s2.map((e5, t4) => n2.parsed.argMeta[t4]?.type);
    if (t3 === `color`) {
      let r3 = s2.shift();
      c2.shift();
      let i3 = r3.startsWith(`--`) ? r3.substring(2) : `--${r3}`, l3 = [r3, i3];
      if (a2 = N.findFormat({ name: t3, id: l3, type: `function` }), !a2) {
        let t4, a3 = r3 in N.registry ? r3 : i3;
        if (a3 in N.registry) {
          let n3 = N.registry[a3].formats?.color?.id;
          n3 && (t4 = `Did you mean ${e4.replace(`color(` + r3, `color(` + n3)}?`);
        }
        throw TypeError(`Cannot parse ${n2.str}. ` + (t4 ?? `Missing a plugin?`));
      }
      o2 = a2.space, a2.id.startsWith(`--`) && !r3.startsWith(`--`) && b.warn(`${o2.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a2.id}) instead of color(${r3}).`), r3.startsWith(`--`) && !a2.id.startsWith(`--`) && b.warn(`${o2.name} is a standard space and supported in the CSS spec. Use color(${a2.id}) instead of prefixed color(${r3}).`);
    } else a2 = N.findFormat({ name: t3, type: `function` }), o2 = a2.space;
    i2 && Object.assign(i2, { format: a2, formatId: a2.name, types: c2, commas: n2.parsed.commas });
    let l2 = 1;
    n2.parsed.lastAlpha && (l2 = n2.parsed.args.pop(), i2 && (i2.alphaType = c2.pop()));
    let u2 = a2.coords.length;
    if (s2.length !== u2) throw TypeError(`Expected ${u2} coordinates for ${o2.id} in ${n2.str}), got ${s2.length}`);
    s2 = a2.coerceCoords(s2, c2), r2 = { spaceId: o2.id, coords: s2, alpha: l2 };
  } else spaceloop: for (let e5 of N.all) for (let t3 in e5.formats) {
    let a2 = e5.formats[t3];
    if (a2.type !== `custom` || a2.test && !a2.test(n2.str)) continue;
    let o2 = e5.getFormat(a2), s2 = o2.parse(n2.str);
    if (s2) {
      i2 && Object.assign(i2, { format: o2, formatId: t3 }), r2 = s2;
      break spaceloop;
    }
  }
  if (!r2) throw TypeError(`Could not parse ${e4} as a color. Missing a plugin?`);
  return r2.alpha = o(r2.alpha) ? r2.alpha : r2.alpha === void 0 ? 1 : f(0, r2.alpha, 1), r2;
}
var O = { "%": 0.01, deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 }, k = { function: /^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i, number: /^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i, unitValue: RegExp(`(${Object.keys(O).join(`|`)})$`), singleArgument: /\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g };
function A(e4) {
  let t2 = {}, n2 = e4.match(k.unitValue)?.[0], r2 = t2.raw = e4;
  return n2 ? (t2.type = n2 === `%` ? `<percentage>` : `<angle>`, t2.unit = n2, t2.unitless = Number(r2.slice(0, -n2.length)), r2 = t2.unitless * O[n2]) : k.number.test(r2) ? (r2 = Number(r2), t2.type = `<number>`) : r2 === `none` ? r2 = null : r2 === `NaN` || r2 === `calc(NaN)` ? (r2 = NaN, t2.type = `<number>`) : t2.type = `<ident>`, { value: r2, meta: t2 };
}
function ee(e4) {
  if (!e4) return;
  e4 = e4.trim();
  let t2 = e4.match(k.function);
  if (t2) {
    let e5 = [], n2 = [], r2 = false, i2 = t2[1].toLowerCase(), a2 = t2[2].replace(k.singleArgument, (t3, a3) => {
      let { value: o2, meta: s2 } = A(a3);
      return (t3.startsWith(`/`) || i2 !== `color` && e5.length === 3) && (r2 = true), e5.push(o2), n2.push(s2), ``;
    });
    return { name: i2, args: e5, argMeta: n2, lastAlpha: r2, commas: a2.includes(`,`), rawName: t2[1], rawArgs: t2[2] };
  }
}
function j(e4, t2) {
  if (Array.isArray(e4)) return e4.map((e5) => j(e5, t2));
  if (!e4) throw TypeError(`Empty color reference`);
  r(e4) && (e4 = D(e4, t2));
  let n2 = e4.space || e4.spaceId;
  return typeof n2 == `string` && (e4.space = N.get(n2)), e4.alpha === void 0 && (e4.alpha = 1), e4;
}
var M = 75e-6, N = (_a = class {
  constructor(t2) {
    this.id = t2.id, this.name = t2.name, this.base = t2.base ? _a.get(t2.base) : null, this.aliases = t2.aliases, this.base && (this.fromBase = t2.fromBase, this.toBase = t2.toBase);
    let n2 = t2.coords ?? this.base.coords;
    for (let e4 in n2) `name` in n2[e4] || (n2[e4].name = e4);
    this.coords = n2;
    let r2 = t2.white ?? this.base.white ?? `D65`;
    this.white = T(r2), this.formats = t2.formats ?? {};
    for (let e4 in this.formats) {
      let t3 = this.formats[e4];
      t3.type || (t3.type = `function`), t3.name || (t3.name = e4);
    }
    this.formats.color?.id || (this.formats.color = { ...this.formats.color ?? {}, id: t2.cssId || this.id }), t2.gamutSpace ? this.gamutSpace = t2.gamutSpace === `self` ? this : _a.get(t2.gamutSpace) : this.isPolar ? this.gamutSpace = this.base : this.gamutSpace = this, this.gamutSpace.isUnbounded && (this.inGamut = (e4, t3) => true), this.referred = t2.referred, Object.defineProperty(this, `path`, { value: te(this).reverse(), writable: false, enumerable: true, configurable: true }), y.run(`colorspace-init-end`, this);
  }
  inGamut(e4, { epsilon: t2 = M } = {}) {
    if (!this.equals(this.gamutSpace)) return e4 = this.to(this.gamutSpace, e4), this.gamutSpace.inGamut(e4, { epsilon: t2 });
    let n2 = Object.values(this.coords);
    return e4.every((e5, r2) => {
      let i2 = n2[r2];
      if (i2.type !== `angle` && i2.range) {
        if (o(e5)) return true;
        let [n3, r3] = i2.range;
        return (n3 === void 0 || e5 >= n3 - t2) && (r3 === void 0 || e5 <= r3 + t2);
      }
      return true;
    });
  }
  get isUnbounded() {
    return Object.values(this.coords).every((e4) => !(`range` in e4));
  }
  get cssId() {
    return this.formats?.color?.id || this.id;
  }
  get isPolar() {
    for (let e4 in this.coords) if (this.coords[e4].type === `angle`) return true;
    return false;
  }
  getFormat(e4) {
    if (!e4) return null;
    e4 === `default` ? e4 = Object.values(this.formats)[0] : typeof e4 == `string` && (e4 = this.formats[e4]);
    let t2 = C.get(e4, this);
    return t2 !== e4 && e4.name in this.formats && (this.formats[e4.name] = t2), t2;
  }
  equals(e4) {
    return e4 ? this === e4 || this.id === e4 || this.id === e4.id : false;
  }
  to(t2, n2) {
    if (arguments.length === 1) {
      let e4 = j(t2);
      [t2, n2] = [e4.space, e4.coords];
    }
    if (t2 = _a.get(t2), this.equals(t2)) return n2;
    n2 = n2.map((e4) => o(e4) ? 0 : e4);
    let r2 = this.path, i2 = t2.path, a2, s2;
    for (let e4 = 0; e4 < r2.length && r2[e4].equals(i2[e4]); e4++) a2 = r2[e4], s2 = e4;
    if (!a2) throw Error(`Cannot convert between color spaces ${this} and ${t2}: no connection space was found`);
    for (let e4 = r2.length - 1; e4 > s2; e4--) n2 = r2[e4].toBase(n2);
    for (let e4 = s2 + 1; e4 < i2.length; e4++) n2 = i2[e4].fromBase(n2);
    return n2;
  }
  from(t2, n2) {
    if (arguments.length === 1) {
      let e4 = j(t2);
      [t2, n2] = [e4.space, e4.coords];
    }
    return t2 = _a.get(t2), t2.to(this, n2);
  }
  toString() {
    return `${this.name} (${this.id})`;
  }
  getMinCoords() {
    let e4 = [];
    for (let t2 in this.coords) {
      let n2 = this.coords[t2], r2 = n2.range || n2.refRange;
      e4.push(r2?.min ?? 0);
    }
    return e4;
  }
  static get all() {
    return [...new Set(Object.values(_a.registry))];
  }
  static register(e4, t2) {
    if (arguments.length === 1 && (t2 = arguments[0], e4 = t2.id), t2 = this.get(t2), this.registry[e4] && this.registry[e4] !== t2) throw Error(`Duplicate color space registration: '${e4}'`);
    if (this.registry[e4] = t2, arguments.length === 1 && t2.aliases) for (let e5 of t2.aliases) this.register(e5, t2);
    return t2;
  }
  static get(t2, ...n2) {
    if (!t2 || _(t2, this)) return t2;
    if (i(t2) === `string`) {
      let n3 = _a.registry[t2.toLowerCase()];
      if (!n3) throw TypeError(`No color space found with id = "${t2}"`);
      return n3;
    }
    if (n2.length) return _a.get(...n2);
    throw TypeError(`${t2} is not a valid color space`);
  }
  static findFormat(t2, n2 = _a.all) {
    if (!t2) return null;
    typeof t2 == `string` && (t2 = { name: t2 });
    for (let e4 of n2) for (let [n3, r2] of Object.entries(e4.formats)) {
      r2.name ?? (r2.name = n3), r2.type ?? (r2.type = `function`);
      let i2 = (!t2.name || r2.name === t2.name) && (!t2.type || r2.type === t2.type);
      if (t2.id) {
        let e5 = r2.ids || [r2.id], n4 = Array.isArray(t2.id) ? t2.id : [t2.id];
        i2 && (i2 = n4.some((t3) => e5.includes(t3)));
      }
      if (i2) {
        let t3 = C.get(r2, e4);
        return t3 !== r2 && (e4.formats[r2.name] = t3), t3;
      }
    }
    return null;
  }
  static resolveCoord(t2, n2) {
    let r2 = i(t2), a2, o2;
    if (r2 === `string` ? t2.includes(`.`) ? [a2, o2] = t2.split(`.`) : [a2, o2] = [, t2] : Array.isArray(t2) ? [a2, o2] = t2 : (a2 = t2.space, o2 = t2.coordId), a2 = _a.get(a2), a2 || (a2 = n2), !a2) throw TypeError(`Cannot resolve coordinate reference ${t2}: No color space specified and relative references are not allowed here`);
    if (r2 = i(o2), r2 === `number` || r2 === `string` && o2 >= 0) {
      let e4 = Object.entries(a2.coords)[o2];
      if (e4) return { space: a2, id: e4[0], index: o2, ...e4[1] };
    }
    a2 = _a.get(a2);
    let s2 = o2.toLowerCase(), c2 = 0;
    for (let e4 in a2.coords) {
      let t3 = a2.coords[e4];
      if (e4.toLowerCase() === s2 || t3.name?.toLowerCase() === s2) return { space: a2, id: e4, index: c2, ...t3 };
      c2++;
    }
    throw TypeError(`No "${o2}" coordinate found in ${a2.name}. Its coordinates are: ${Object.keys(a2.coords).join(`, `)}`);
  }
}, __publicField(_a, "registry", {}), __publicField(_a, "DEFAULT_FORMAT", { type: `functions`, name: `color` }), _a);
function te(e4) {
  let t2 = [e4];
  for (let n2 = e4; n2 = n2.base; ) t2.push(n2);
  return t2;
}
var P = new N({ id: `xyz-d65`, name: `XYZ D65`, coords: { x: { refRange: [0, 1], name: `X` }, y: { refRange: [0, 1], name: `Y` }, z: { refRange: [0, 1], name: `Z` } }, white: `D65`, formats: { color: { ids: [`xyz-d65`, `xyz`] } }, aliases: [`xyz`] }), F = class extends N {
  constructor(e4) {
    e4.coords || (e4.coords = { r: { range: [0, 1], name: `Red` }, g: { range: [0, 1], name: `Green` }, b: { range: [0, 1], name: `Blue` } }), e4.base || (e4.base = P), e4.toXYZ_M && e4.fromXYZ_M && (e4.toBase ?? (e4.toBase = (t2) => {
      let r2 = n(t2, e4.toXYZ_M);
      return this.white !== this.base.white && (r2 = E(this.white, this.base.white, r2)), r2;
    }), e4.fromBase ?? (e4.fromBase = (t2) => (t2 = E(this.base.white, this.white, t2), n(t2, e4.fromXYZ_M)))), e4.referred ?? (e4.referred = `display`), super(e4);
  }
};
function ne(e4, t2 = {}) {
  if (Array.isArray(e4)) return e4.map((e5) => ne(e5, t2));
  let { cssProperty: n2 = `background-color`, element: i2, ...a2 } = t2, o2 = null;
  try {
    return j(e4, a2);
  } catch (e5) {
    o2 = e5;
  }
  let { CSS: s2, getComputedStyle: c2 } = globalThis;
  if (r(e4) && i2 && s2 && c2 && s2.supports(n2, e4)) {
    let t3 = i2.style[n2];
    e4 !== t3 && (i2.style[n2] = e4);
    let r2 = c2(i2).getPropertyValue(n2);
    if (e4 !== t3 && (i2.style[n2] = t3), r2 !== e4) try {
      return j(r2, a2);
    } catch (e5) {
      o2 = e5;
    }
    else o2 = { message: `Color value is a valid CSS color, but it could not be resolved :(` };
  }
  return t2.errorMeta && (t2.errorMeta.error = o2), null;
}
function I(e4, t2) {
  e4 = j(e4);
  let n2 = N.get(t2, t2?.space), r2 = t2?.precision, i2;
  return i2 = !n2 || e4.space.equals(n2) ? e4.coords.slice() : n2.from(e4), r2 === void 0 ? i2 : i2.map((e5) => c(e5, r2));
}
function L(e4, t2) {
  if (e4 = j(e4), t2 === `alpha`) return e4.alpha ?? 1;
  let { space: n2, index: r2 } = N.resolveCoord(t2, e4.space);
  return I(e4, n2)[r2];
}
function R(e4, t2, n2, r2) {
  return e4 = j(e4), Array.isArray(t2) && ([t2, n2, r2] = [e4.space, t2, n2]), t2 = N.get(t2), e4.coords = t2 === e4.space ? n2.slice() : t2.to(e4.space, n2), r2 !== void 0 && (e4.alpha = r2), e4;
}
R.returns = `color`;
function z(e4, t2, n2) {
  if (e4 = j(e4), arguments.length === 2 && i(arguments[1]) === `object`) {
    let t3 = arguments[1];
    for (let n3 in t3) z(e4, n3, t3[n3]);
  } else if (typeof n2 == `function` && (n2 = n2(L(e4, t2))), t2 === `alpha`) e4.alpha = n2;
  else {
    let { space: r2, index: i2 } = N.resolveCoord(t2, e4.space), a2 = I(e4, r2);
    a2[i2] = n2, R(e4, r2, a2);
  }
  return e4;
}
z.returns = `color`;
var re = new N({ id: `xyz-d50`, name: `XYZ D50`, white: `D50`, base: P, fromBase: (e4) => E(P.white, `D50`, e4), toBase: (e4) => E(`D50`, P.white, e4) }), ie = 216 / 24389, ae = 24 / 116, oe = 24389 / 27, se = w.D50, B = new N({ id: `lab`, name: `Lab`, coords: { l: { refRange: [0, 100], name: `Lightness` }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: se, base: re, fromBase(e4) {
  let t2 = e4.map((e5, t3) => e5 / se[t3]).map((e5) => e5 > ie ? Math.cbrt(e5) : (oe * e5 + 16) / 116);
  return [116 * t2[1] - 16, 500 * (t2[0] - t2[1]), 200 * (t2[1] - t2[2])];
}, toBase(e4) {
  let [t2, n2, r2] = e4, i2 = [];
  return i2[1] = (t2 + 16) / 116, i2[0] = n2 / 500 + i2[1], i2[2] = i2[1] - r2 / 200, [i2[0] > ae ? i2[0] ** 3 : (116 * i2[0] - 16) / oe, e4[0] > 8 ? ((e4[0] + 16) / 116) ** 3 : e4[0] / oe, i2[2] > ae ? i2[2] ** 3 : (116 * i2[2] - 16) / oe].map((e5, t3) => e5 * se[t3]);
}, formats: { lab: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } });
function V(e4) {
  return typeof e4 == `number` ? (e4 % 360 + 360) % 360 : e4;
}
function ce(e4, t2) {
  let [n2, r2] = t2, i2 = o(n2), a2 = o(r2);
  if (i2 && a2) return [n2, r2];
  if (i2 ? n2 = r2 : a2 && (r2 = n2), e4 === `raw`) return t2;
  n2 = V(n2), r2 = V(r2);
  let s2 = r2 - n2;
  return e4 === `increasing` ? s2 < 0 && (r2 += 360) : e4 === `decreasing` ? s2 > 0 && (n2 += 360) : e4 === `longer` ? -180 < s2 && s2 < 180 && (s2 > 0 ? n2 += 360 : r2 += 360) : e4 === `shorter` && (s2 > 180 ? n2 += 360 : s2 < -180 && (r2 += 360)), [n2, r2];
}
var H = new N({ id: `lch`, name: `LCH`, coords: { l: { refRange: [0, 100], name: `Lightness` }, c: { refRange: [0, 150], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: B, fromBase(e4) {
  if (this.\u03B5 === void 0) {
    let e5 = Object.values(this.base.coords)[1].refRange, t3 = e5[1] - e5[0];
    this.\u03B5 = t3 / 1e5;
  }
  let [t2, n2, r2] = e4, i2 = Math.abs(n2) < this.\u03B5 && Math.abs(r2) < this.\u03B5, a2 = i2 ? null : V(Math.atan2(r2, n2) * 180 / Math.PI);
  return [t2, i2 ? 0 : Math.sqrt(n2 ** 2 + r2 ** 2), a2];
}, toBase(e4) {
  let [t2, n2, r2] = e4, i2 = null, a2 = null;
  return o(r2) || (n2 = n2 < 0 ? 0 : n2, i2 = n2 * Math.cos(r2 * Math.PI / 180), a2 = n2 * Math.sin(r2 * Math.PI / 180)), [t2, i2, a2];
}, formats: { lch: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <angle>`] } } }), le = 25 ** 7, ue = Math.PI, de = 180 / ue, fe = ue / 180;
function pe(e4) {
  let t2 = e4 * e4;
  return t2 * t2 * t2 * e4;
}
function me(e4, t2, { kL: n2 = 1, kC: r2 = 1, kH: i2 = 1 } = {}) {
  [e4, t2] = j([e4, t2]);
  let [a2, o2, s2] = B.from(e4), c2 = H.from(B, [a2, o2, s2])[1], [l2, u2, d2] = B.from(t2), f2 = H.from(B, [l2, u2, d2])[1];
  c2 < 0 && (c2 = 0), f2 < 0 && (f2 = 0);
  let p2 = pe((c2 + f2) / 2), m2 = 0.5 * (1 - Math.sqrt(p2 / (p2 + le))), h2 = (1 + m2) * o2, g2 = (1 + m2) * u2, _2 = Math.sqrt(h2 ** 2 + s2 ** 2), v2 = Math.sqrt(g2 ** 2 + d2 ** 2), y2 = h2 === 0 && s2 === 0 ? 0 : Math.atan2(s2, h2), x2 = g2 === 0 && d2 === 0 ? 0 : Math.atan2(d2, g2);
  y2 < 0 && (y2 += 2 * ue), x2 < 0 && (x2 += 2 * ue), y2 *= de, x2 *= de;
  let S2 = l2 - a2, C2 = v2 - _2, w2 = x2 - y2, T2 = y2 + x2, E2 = Math.abs(w2), D2;
  _2 * v2 === 0 ? D2 = 0 : E2 <= 180 ? D2 = w2 : w2 > 180 ? D2 = w2 - 360 : w2 < -180 ? D2 = w2 + 360 : b.warn(`the unthinkable has happened`);
  let O2 = 2 * Math.sqrt(v2 * _2) * Math.sin(D2 * fe / 2), k2 = (a2 + l2) / 2, A2 = (_2 + v2) / 2, ee2 = pe(A2), M2;
  M2 = _2 * v2 === 0 ? T2 : E2 <= 180 ? T2 / 2 : T2 < 360 ? (T2 + 360) / 2 : (T2 - 360) / 2;
  let N2 = (k2 - 50) ** 2, te2 = 1 + 0.015 * N2 / Math.sqrt(20 + N2), P2 = 1 + 0.045 * A2, F2 = 1;
  F2 -= 0.17 * Math.cos((M2 - 30) * fe), F2 += 0.24 * Math.cos(2 * M2 * fe), F2 += 0.32 * Math.cos((3 * M2 + 6) * fe), F2 -= 0.2 * Math.cos((4 * M2 - 63) * fe);
  let ne2 = 1 + 0.015 * A2 * F2, I2 = 30 * Math.exp(-1 * ((M2 - 275) / 25) ** 2), L2 = 2 * Math.sqrt(ee2 / (ee2 + le)), R2 = -1 * Math.sin(2 * I2 * fe) * L2, z2 = (S2 / (n2 * te2)) ** 2;
  return z2 += (C2 / (r2 * P2)) ** 2, z2 += (O2 / (i2 * ne2)) ** 2, z2 += R2 * (C2 / (r2 * P2)) * (O2 / (i2 * ne2)), Math.sqrt(z2);
}
var he = [[0.819022437996703, 0.3619062600528904, -0.1288737815209879], [0.0329836539323885, 0.9292868615863434, 0.0361446663506424], [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]], ge = [[1.2268798758459243, -0.5578149944602171, 0.2813910456659647], [-0.0405757452148008, 1.112286803280317, -0.0717110580655164], [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]], _e = [[0.210454268309314, 0.7936177747023054, -0.0040720430116193], [1.9779985324311684, -2.42859224204858, 0.450593709617411], [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]], U = [[1, 0.3963377773761749, 0.2158037573099136], [1, -0.1055613458156586, -0.0638541728258133], [1, -0.0894841775298119, -1.2914855480194092]], W = new N({ id: `oklab`, name: `Oklab`, coords: { l: { refRange: [0, 1], name: `Lightness` }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: `D65`, base: P, fromBase(e4) {
  let t2 = n(e4, he);
  return t2[0] = Math.cbrt(t2[0]), t2[1] = Math.cbrt(t2[1]), t2[2] = Math.cbrt(t2[2]), n(t2, _e, t2);
}, toBase(e4) {
  let t2 = n(e4, U);
  return t2[0] **= 3, t2[1] **= 3, t2[2] **= 3, n(t2, ge, t2);
}, formats: { oklab: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } });
function ve(e4, t2) {
  [e4, t2] = j([e4, t2]);
  let [n2, r2, i2] = W.from(e4), [a2, o2, s2] = W.from(t2), c2 = n2 - a2, l2 = r2 - o2, u2 = i2 - s2;
  return Math.sqrt(c2 ** 2 + l2 ** 2 + u2 ** 2);
}
var ye = 75e-6;
function G(e4, t2, { epsilon: n2 = ye } = {}) {
  e4 = j(e4), t2 || (t2 = e4.space), t2 = N.get(t2);
  let r2 = e4.coords;
  return t2 !== e4.space && (r2 = t2.from(e4)), t2.inGamut(r2, { epsilon: n2 });
}
function be(e4) {
  return { space: e4.space, coords: e4.coords.slice(), alpha: e4.alpha };
}
function xe(e4, t2, n2 = `lab`) {
  n2 = N.get(n2);
  let r2 = n2.from(e4), i2 = n2.from(t2);
  return Math.sqrt(r2.reduce((e5, t3, n3) => {
    let r3 = i2[n3];
    return o(t3) || o(r3) ? e5 : e5 + (r3 - t3) ** 2;
  }, 0));
}
function Se(e4, t2) {
  return xe(e4, t2, `lab`);
}
var Ce = Math.PI / 180;
function we(e4, t2, { l: n2 = 2, c: r2 = 1 } = {}) {
  [e4, t2] = j([e4, t2]);
  let [i2, a2, s2] = B.from(e4), [, c2, l2] = H.from(B, [i2, a2, s2]), [u2, d2, f2] = B.from(t2), p2 = H.from(B, [u2, d2, f2])[1];
  c2 < 0 && (c2 = 0), p2 < 0 && (p2 = 0);
  let m2 = i2 - u2, h2 = c2 - p2, g2 = a2 - d2, _2 = s2 - f2, v2 = g2 ** 2 + _2 ** 2 - h2 ** 2, y2 = 0.511;
  i2 >= 16 && (y2 = 0.040975 * i2 / (1 + 0.01765 * i2));
  let b2 = 0.0638 * c2 / (1 + 0.0131 * c2) + 0.638, x2;
  o(l2) && (l2 = 0), x2 = l2 >= 164 && l2 <= 345 ? 0.56 + Math.abs(0.2 * Math.cos((l2 + 168) * Ce)) : 0.36 + Math.abs(0.4 * Math.cos((l2 + 35) * Ce));
  let S2 = c2 ** 4, C2 = Math.sqrt(S2 / (S2 + 1900)), w2 = b2 * (C2 * x2 + 1 - C2), T2 = (m2 / (n2 * y2)) ** 2;
  return T2 += (h2 / (r2 * b2)) ** 2, T2 += v2 / w2 ** 2, Math.sqrt(T2);
}
var Te = 203, Ee = new N({ id: `xyz-abs-d65`, cssId: `--xyz-abs-d65`, name: `Absolute XYZ D65`, coords: { x: { refRange: [0, 9504.7], name: `Xa` }, y: { refRange: [0, 1e4], name: `Ya` }, z: { refRange: [0, 10888.3], name: `Za` } }, base: P, fromBase(e4) {
  return e4.map((e5) => e5 * Te);
}, toBase(e4) {
  return e4.map((e5) => e5 / Te);
} }), De = 1.15, Oe = 0.66, ke = 2610 / 2 ** 14, Ae = 2 ** 14 / 2610, je = 3424 / 2 ** 12, Me = 2413 / 2 ** 7, Ne = 2392 / 2 ** 7, Pe = 1.7 * 2523 / 2 ** 5, Fe = 2 ** 5 / (1.7 * 2523), Ie = -0.56, Le = 16295499532821565e-27, Re = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], ze = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], Be = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], Ve = [[1, 0.13860504327153927, 0.05804731615611883], [1, -0.1386050432715393, -0.058047316156118904], [1, -0.09601924202631895, -0.811891896056039]], He = new N({ id: `jzazbz`, name: `Jzazbz`, coords: { jz: { refRange: [0, 1], name: `Jz` }, az: { refRange: [-0.21, 0.21] }, bz: { refRange: [-0.21, 0.21] } }, base: Ee, fromBase(e4) {
  let [t2, r2, i2] = e4, [a2, o2, s2] = n(n([De * t2 - (De - 1) * i2, Oe * r2 - (Oe - 1) * t2, i2], Re).map(function(e5) {
    return m((je + Me * m(e5 / 1e4, ke)) / (1 + Ne * m(e5 / 1e4, ke)), Pe);
  }), Be);
  return [(1 + Ie) * a2 / (1 + Ie * a2) - Le, o2, s2];
}, toBase(e4) {
  let [t2, r2, i2] = e4, [a2, o2, s2] = n(n([(t2 + Le) / (1 + Ie - Ie * (t2 + Le)), r2, i2], Ve).map(function(e5) {
    return 1e4 * m((je - m(e5, Fe)) / (Ne * m(e5, Fe) - Me), Ae);
  }), ze), c2 = (a2 + (De - 1) * s2) / De;
  return [c2, (o2 + (Oe - 1) * c2) / Oe, s2];
}, formats: { jzazbz: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } }), Ue = new N({ id: `jzczhz`, name: `JzCzHz`, coords: { jz: { refRange: [0, 1], name: `Jz` }, cz: { refRange: [0, 0.26], name: `Chroma` }, hz: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: He, fromBase: H.fromBase, toBase: H.toBase, formats: { jzczhz: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <angle>`] } } });
function We(e4, t2) {
  [e4, t2] = j([e4, t2]);
  let [n2, r2, i2] = Ue.from(e4), [a2, s2, c2] = Ue.from(t2), l2 = n2 - a2, u2 = r2 - s2;
  o(i2) && o(c2) ? (i2 = 0, c2 = 0) : o(i2) ? i2 = c2 : o(c2) && (c2 = i2);
  let d2 = i2 - c2, f2 = 2 * Math.sqrt(r2 * s2) * Math.sin(d2 / 2 * (Math.PI / 180));
  return Math.sqrt(l2 ** 2 + u2 ** 2 + f2 ** 2);
}
var Ge = 3424 / 4096, Ke = 2413 / 128, qe = 2392 / 128, Je = 2610 / 16384, Ye = 2523 / 32, Xe = 16384 / 2610, Ze = 32 / 2523, Qe = [[0.3592832590121217, 0.6976051147779502, -0.035891593232029], [-0.1920808463704993, 1.100476797037432, 0.0753748658519118], [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]], $e = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], et = [[0.9999999999999998, 0.0086090370379328, 0.111029625003026], [0.9999999999999998, -0.0086090370379328, -0.1110296250030259], [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]], tt = [[2.0701522183894223, -1.3263473389671563, 0.2066510476294053], [0.3647385209748072, 0.6805660249472273, -0.0453045459220347], [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]], nt = new N({ id: `ictcp`, name: `ICTCP`, coords: { i: { refRange: [0, 1], name: `I` }, ct: { refRange: [-0.5, 0.5], name: `CT` }, cp: { refRange: [-0.5, 0.5], name: `CP` } }, base: Ee, fromBase(e4) {
  return rt(n(e4, Qe));
}, toBase(e4) {
  return n(it(e4), tt);
}, formats: { ictcp: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } });
function rt(e4) {
  return n(e4.map(function(e5) {
    return ((Ge + Ke * (e5 / 1e4) ** Je) / (1 + qe * (e5 / 1e4) ** Je)) ** Ye;
  }), $e);
}
function it(e4) {
  return n(e4, et).map(function(e5) {
    return 1e4 * (Math.max(e5 ** Ze - Ge, 0) / (Ke - qe * e5 ** Ze)) ** Xe;
  });
}
function at(e4, t2) {
  [e4, t2] = j([e4, t2]);
  let [n2, r2, i2] = nt.from(e4), [a2, o2, s2] = nt.from(t2);
  return 720 * Math.sqrt((n2 - a2) ** 2 + 0.25 * (r2 - o2) ** 2 + (i2 - s2) ** 2);
}
function ot(e4, t2) {
  [e4, t2] = j([e4, t2]);
  let [n2, r2, i2] = W.from(e4), [a2, o2, s2] = W.from(t2), c2 = n2 - a2, l2 = 2 * (r2 - o2), u2 = 2 * (i2 - s2);
  return Math.sqrt(c2 ** 2 + l2 ** 2 + u2 ** 2);
}
var st = w.D65, ct = 0.42, lt = 1 / ct, ut = 2 * Math.PI, dt = [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], ft = [[1.8620678550872327, -1.0112546305316843, 0.14918677544445175], [0.38752654323613717, 0.6214474419314753, -0.008973985167612518], [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]], pt = [[460, 451, 288], [460, -891, -261], [460, -220, -6300]], mt = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] }, K = { h: [20.14, 90, 164.25, 237.53, 380.14], e: [0.8, 0.7, 1, 1.2, 0.8], H: [0, 100, 200, 300, 400] }, ht = 180 / Math.PI, gt = Math.PI / 180;
function _t(e4, t2) {
  return e4.map((e5) => {
    let n2 = m(t2 * Math.abs(e5) * 0.01, ct);
    return 400 * p(n2, e5) / (n2 + 27.13);
  });
}
function vt(e4, t2) {
  let n2 = 100 / t2 * 27.13 ** lt;
  return e4.map((e5) => {
    let t3 = Math.abs(e5);
    return p(n2 * m(t3 / (400 - t3), lt), e5);
  });
}
function yt(e4) {
  let t2 = V(e4);
  t2 <= K.h[0] && (t2 += 360);
  let n2 = g(K.h, t2) - 1, [r2, i2] = K.h.slice(n2, n2 + 2), [a2, o2] = K.e.slice(n2, n2 + 2), s2 = K.H[n2], c2 = (t2 - r2) / a2;
  return s2 + 100 * c2 / (c2 + (i2 - t2) / o2);
}
function bt(e4) {
  let t2 = (e4 % 400 + 400) % 400, n2 = Math.floor(0.01 * t2);
  t2 %= 100;
  let [r2, i2] = K.h.slice(n2, n2 + 2), [a2, o2] = K.e.slice(n2, n2 + 2);
  return V((t2 * (o2 * r2 - a2 * i2) - 100 * r2 * o2) / (t2 * (o2 - a2) - 100 * o2));
}
function xt(e4, t2, r2, i2, a2) {
  let o2 = {};
  o2.discounting = a2, o2.refWhite = e4, o2.surround = i2;
  let s2 = e4.map((e5) => e5 * 100);
  o2.la = t2, o2.yb = r2;
  let c2 = s2[1], u2 = n(s2, dt), d2 = mt[o2.surround], f2 = d2[0];
  o2.c = d2[1], o2.nc = d2[2];
  let p2 = (1 / (5 * o2.la + 1)) ** 4;
  o2.fl = p2 * o2.la + 0.1 * (1 - p2) * (1 - p2) * Math.cbrt(5 * o2.la), o2.flRoot = o2.fl ** 0.25, o2.n = o2.yb / c2, o2.z = 1.48 + Math.sqrt(o2.n), o2.nbb = 0.725 * o2.n ** -0.2, o2.ncb = o2.nbb;
  let m2 = Math.max(Math.min(f2 * (1 - 1 / 3.6 * Math.exp((-o2.la - 42) / 92)), 1), 0);
  o2.dRgb = u2.map((e5) => l(1, c2 / e5, m2)), o2.dRgbInv = o2.dRgb.map((e5) => 1 / e5);
  let h2 = _t(u2.map((e5, t3) => e5 * o2.dRgb[t3]), o2.fl);
  return o2.aW = o2.nbb * (2 * h2[0] + h2[1] + 0.05 * h2[2]), o2;
}
var St = xt(st, 64 / Math.PI * 0.2, 20, `average`, false);
function Ct(e4, t2) {
  if (!(e4.J !== void 0 ^ e4.Q !== void 0)) throw Error(`Conversion requires one and only one: 'J' or 'Q'`);
  if (!(e4.C !== void 0 ^ e4.M !== void 0 ^ e4.s !== void 0)) throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);
  if (!(e4.h !== void 0 ^ e4.H !== void 0)) throw Error(`Conversion requires one and only one: 'h' or 'H'`);
  if (e4.J === 0 || e4.Q === 0) return [0, 0, 0];
  let r2 = 0;
  r2 = e4.h === void 0 ? bt(e4.H) * gt : V(e4.h) * gt;
  let i2 = Math.cos(r2), a2 = Math.sin(r2), o2 = 0;
  e4.J === void 0 ? e4.Q !== void 0 && (o2 = 0.25 * t2.c * e4.Q / ((t2.aW + 4) * t2.flRoot)) : o2 = m(e4.J, 1 / 2) * 0.1;
  let s2 = 0;
  e4.C === void 0 ? e4.M === void 0 ? e4.s !== void 0 && (s2 = 4e-4 * e4.s ** 2 * (t2.aW + 4) / t2.c) : s2 = e4.M / t2.flRoot / o2 : s2 = e4.C / o2;
  let c2 = m(s2 * (1.64 - 0.29 ** t2.n) ** -0.73, 10 / 9), l2 = 0.25 * (Math.cos(r2 + 2) + 3.8), u2 = t2.aW * m(o2, 2 / t2.c / t2.z), d2 = 5e4 / 13 * t2.nc * t2.ncb * l2, f2 = u2 / t2.nbb, p2 = 23 * (f2 + 0.305) * h(c2, 23 * d2 + c2 * (11 * i2 + 108 * a2));
  return n(vt(n([f2, p2 * i2, p2 * a2], pt).map((e5) => e5 * 1 / 1403), t2.fl).map((e5, n2) => e5 * t2.dRgbInv[n2]), ft).map((e5) => e5 / 100);
}
function wt(e4, t2) {
  let r2 = _t(n(e4.map((e5) => e5 * 100), dt).map((e5, n2) => e5 * t2.dRgb[n2]), t2.fl), i2 = r2[0] + (-12 * r2[1] + r2[2]) / 11, a2 = (r2[0] + r2[1] - 2 * r2[2]) / 9, o2 = (Math.atan2(a2, i2) % ut + ut) % ut, s2 = 0.25 * (Math.cos(o2 + 2) + 3.8), c2 = m(5e4 / 13 * t2.nc * t2.ncb * h(s2 * Math.sqrt(i2 ** 2 + a2 ** 2), r2[0] + r2[1] + 1.05 * r2[2] + 0.305), 0.9) * (1.64 - 0.29 ** t2.n) ** 0.73, l2 = m(t2.nbb * (2 * r2[0] + r2[1] + 0.05 * r2[2]) / t2.aW, 0.5 * t2.c * t2.z), u2 = 100 * m(l2, 2), d2 = 4 / t2.c * l2 * (t2.aW + 4) * t2.flRoot, f2 = c2 * l2, p2 = f2 * t2.flRoot, g2 = V(o2 * ht), _2 = yt(g2);
  return { J: u2, C: f2, h: g2, s: 50 * m(t2.c * c2 / (t2.aW + 4), 1 / 2), Q: d2, M: p2, H: _2 };
}
var Tt = new N({ id: `cam16-jmh`, cssId: `--cam16-jmh`, name: `CAM16-JMh`, coords: { j: { refRange: [0, 100], name: `J` }, m: { refRange: [0, 105], name: `Colorfulness` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: P, fromBase(e4) {
  this.\u03B5 === void 0 && (this.\u03B5 = Object.values(this.coords)[1].refRange[1] / 1e5);
  let t2 = wt(e4, St), n2 = Math.abs(t2.M) < this.\u03B5;
  return [t2.J, n2 ? 0 : t2.M, n2 ? null : t2.h];
}, toBase(e4) {
  return Ct({ J: e4[0], M: e4[1], h: e4[2] }, St);
} }), Et = w.D65, Dt = 216 / 24389, Ot = 24389 / 27;
function kt(e4) {
  return 116 * (e4 > Dt ? Math.cbrt(e4) : (Ot * e4 + 16) / 116) - 16;
}
function At(e4) {
  return e4 > 8 ? ((e4 + 16) / 116) ** 3 : e4 / Ot;
}
function jt(e4, t2) {
  let [n2, r2, i2] = e4, a2 = [], o2 = 0;
  if (i2 === 0) return [0, 0, 0];
  let s2 = At(i2);
  o2 = i2 > 0 ? 0.00379058511492914 * i2 ** 2 + 0.608983189401032 * i2 + 0.9155088574762233 : 9514440756550361e-21 * i2 ** 2 + 0.08693057439788597 * i2 - 21.928975842194614;
  let c2 = 0, l2 = 1 / 0;
  for (; c2 <= 15; ) {
    a2 = Ct({ J: o2, C: r2, h: n2 }, t2);
    let e5 = Math.abs(a2[1] - s2);
    if (e5 < l2) {
      if (e5 <= 2e-12) return a2;
      l2 = e5;
    }
    o2 -= (a2[1] - s2) * o2 / (2 * a2[1]), c2 += 1;
  }
  return Ct({ J: o2, C: r2, h: n2 }, t2);
}
function Mt(e4, t2) {
  let n2 = kt(e4[1]);
  if (n2 === 0) return [0, 0, 0];
  let r2 = wt(e4, Nt);
  return [V(r2.h), r2.C, n2];
}
var Nt = xt(Et, 200 / Math.PI * At(50), At(50) * 100, `average`, false), Pt = new N({ id: `hct`, name: `HCT`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, c: { refRange: [0, 145], name: `Colorfulness` }, t: { refRange: [0, 100], name: `Tone` } }, base: P, fromBase(e4) {
  this.\u03B5 === void 0 && (this.\u03B5 = Object.values(this.coords)[1].refRange[1] / 1e5);
  let t2 = Mt(e4);
  return t2[1] < this.\u03B5 && (t2[1] = 0, t2[0] = null), t2;
}, toBase(e4) {
  return jt(e4, Nt);
}, formats: { color: { id: `--hct`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), Ft = Math.PI / 180, It = [1, 7e-3, 0.0228];
function Lt(e4) {
  e4[1] < 0 && (e4 = Pt.fromBase(Pt.toBase(e4)));
  let t2 = Math.log(Math.max(1 + It[2] * e4[1] * Nt.flRoot, 1)) / It[2], n2 = e4[0] * Ft, r2 = t2 * Math.cos(n2), i2 = t2 * Math.sin(n2);
  return [e4[2], r2, i2];
}
function Rt(e4, t2) {
  [e4, t2] = j([e4, t2]);
  let [n2, r2, i2] = Lt(Pt.from(e4)), [a2, o2, s2] = Lt(Pt.from(t2));
  return Math.sqrt((n2 - a2) ** 2 + (r2 - o2) ** 2 + (i2 - s2) ** 2);
}
var zt = { deltaE76: Se, deltaECMC: we, deltaE2000: me, deltaEJz: We, deltaEITP: at, deltaEOK: ve, deltaEOK2: ot, deltaEHCT: Rt };
function Bt(e4) {
  return Math.max(parseFloat(`1e${(e4 ? Math.floor(Math.log10(Math.abs(e4))) : 0) - 2}`), 1e-6);
}
var Vt = { hct: { method: `hct.c`, jnd: 2, deltaEMethod: `hct`, blackWhiteClamp: {} }, "hct-tonal": { method: `hct.c`, jnd: 0, deltaEMethod: `hct`, blackWhiteClamp: { channel: `hct.t`, min: 0, max: 100 } } };
function q(e4, { method: t2 = b.gamut_mapping, space: n2 = void 0, deltaEMethod: i2 = ``, jnd: a2 = 2, blackWhiteClamp: s2 = void 0 } = {}) {
  if (e4 = j(e4), r(arguments[1]) ? n2 = arguments[1] : n2 || (n2 = e4.space), n2 = N.get(n2), G(e4, n2, { epsilon: 0 })) return e4;
  let c2;
  if (t2 === `css`) c2 = Ut(e4, { space: n2 });
  else {
    if (t2 !== `clip` && !G(e4, n2)) {
      Object.prototype.hasOwnProperty.call(Vt, t2) && ({ method: t2, jnd: a2, deltaEMethod: i2, blackWhiteClamp: s2 } = Vt[t2]);
      let r2 = me;
      if (i2 !== ``) {
        for (let e5 in zt) if (`deltae` + i2.toLowerCase() === e5.toLowerCase()) {
          r2 = zt[e5];
          break;
        }
      }
      a2 === 0 && (a2 = 1e-16);
      let l2 = q(J(e4, n2), { method: `clip`, space: n2 });
      if (r2(e4, l2) > a2) {
        if (s2 && Object.keys(s2).length === 3) {
          let t3 = N.resolveCoord(s2.channel), n3 = L(J(e4, t3.space), t3.id);
          if (o(n3) && (n3 = 0), n3 >= s2.max) return J({ space: `xyz-d65`, coords: w.D65 }, e4.space);
          if (n3 <= s2.min) return J({ space: `xyz-d65`, coords: [0, 0, 0] }, e4.space);
        }
        let i3 = N.resolveCoord(t2), l3 = i3.space, u2 = i3.id, d2 = J(e4, l3);
        d2.coords.forEach((e5, t3) => {
          o(e5) && (d2.coords[t3] = 0);
        });
        let f2 = (i3.range || i3.refRange)[0], p2 = Bt(a2), m2 = f2, h2 = L(d2, u2);
        for (; h2 - m2 > p2; ) {
          let e5 = be(d2);
          e5 = q(e5, { space: n2, method: `clip` }), r2(d2, e5) - a2 < p2 ? m2 = L(d2, u2) : h2 = L(d2, u2), z(d2, u2, (m2 + h2) / 2);
        }
        c2 = J(d2, n2);
      } else c2 = l2;
    } else c2 = J(e4, n2);
    if (t2 === `clip` || !G(c2, n2, { epsilon: 0 })) {
      let e5 = Object.values(n2.coords).map((e6) => e6.range || []);
      c2.coords = c2.coords.map((t3, n3) => {
        let [r2, i3] = e5[n3];
        return r2 !== void 0 && (t3 = Math.max(r2, t3)), i3 !== void 0 && (t3 = Math.min(t3, i3)), t3;
      });
    }
  }
  return n2 !== e4.space && (c2 = J(c2, e4.space)), e4.coords = c2.coords, e4;
}
q.returns = `color`;
var Ht = { WHITE: { space: W, coords: [1, 0, 0], alpha: 1 }, BLACK: { space: W, coords: [0, 0, 0], alpha: 1 } };
function Ut(e4, { space: t2 } = {}) {
  let n2 = 0.02, r2 = 1e-4;
  e4 = j(e4), t2 || (t2 = e4.space), t2 = N.get(t2);
  let i2 = N.get(`oklch`);
  if (t2.isUnbounded) return J(e4, t2);
  let a2 = J(e4, i2), o2 = a2.coords[0];
  if (o2 >= 1) {
    let n3 = J(Ht.WHITE, t2);
    return n3.alpha = e4.alpha, J(n3, t2);
  }
  if (o2 <= 0) {
    let n3 = J(Ht.BLACK, t2);
    return n3.alpha = e4.alpha, J(n3, t2);
  }
  if (G(a2, t2, { epsilon: 0 })) return J(a2, t2);
  function s2(e5) {
    let n3 = J(e5, t2), r3 = Object.values(t2.coords);
    return n3.coords = n3.coords.map((e6, t3) => {
      if (`range` in r3[t3]) {
        let [n4, i3] = r3[t3].range;
        return f(n4, e6, i3);
      }
      return e6;
    }), n3;
  }
  let c2 = 0, l2 = a2.coords[1], u2 = true, d2 = be(a2), p2 = s2(d2), m2 = ve(p2, d2);
  if (m2 < n2) return p2;
  for (; l2 - c2 > r2; ) {
    let e5 = (c2 + l2) / 2;
    if (d2.coords[1] = e5, u2 && G(d2, t2, { epsilon: 0 })) c2 = e5;
    else if (p2 = s2(d2), m2 = ve(p2, d2), m2 < n2) {
      if (n2 - m2 < r2) break;
      u2 = false, c2 = e5;
    } else l2 = e5;
  }
  return p2;
}
function J(e4, t2, { inGamut: n2 } = {}) {
  e4 = j(e4), t2 = N.get(t2);
  let r2 = t2.from(e4), i2 = { space: t2, coords: r2, alpha: e4.alpha };
  return n2 && (i2 = q(i2, n2 === true ? void 0 : n2)), i2;
}
J.returns = `color`;
function Wt(e4, t2 = {}) {
  let { precision: n2 = b.precision, format: r2, inGamut: i2 = true, coords: o2, alpha: s2, commas: c2 } = t2, l2, u2 = j(e4), d2 = r2, f2 = u2.parseMeta;
  f2 && !r2 && (f2.format.canSerialize() && (r2 = f2.format, d2 = f2.formatId), o2 ?? (o2 = f2.types), s2 ?? (s2 = f2.alphaType), c2 ?? (c2 = f2.commas)), d2 && (r2 = u2.space.getFormat(r2) ?? N.findFormat(d2)), r2 || (r2 = u2.space.getFormat(`default`) ?? N.DEFAULT_FORMAT, d2 = r2.name), r2 && r2.space && r2.space !== u2.space && (u2 = J(u2, r2.space));
  let p2 = u2.coords.slice();
  if (i2 || (i2 = r2.toGamut), i2 && !G(u2) && (p2 = q(be(u2), i2 === true ? void 0 : i2).coords), r2.type === `custom`) if (r2.serialize) l2 = r2.serialize(p2, u2.alpha, t2);
  else throw TypeError(`format ${d2} can only be used to parse colors, not for serialization`);
  else {
    let e5 = r2.name || `color`, t3 = r2.serializeCoords(p2, n2, o2);
    if (e5 === `color`) {
      let e6 = r2.id || r2.ids?.[0] || u2.space.cssId || u2.space.id;
      t3.unshift(e6);
    }
    let i3 = u2.alpha;
    s2 !== void 0 && typeof s2 != `object` && (s2 = typeof s2 == `string` ? { type: s2 } : { include: s2 });
    let d3 = s2?.type ?? `<number>`, f3 = s2?.include === true || r2.alpha === true || s2?.include !== false && r2.alpha !== false && i3 < 1, m2 = ``;
    if (c2 ?? (c2 = r2.commas), f3) {
      if (n2 !== null) {
        let e6;
        d3 === `<percentage>` && (e6 = `%`, i3 *= 100), i3 = a(i3, { precision: n2, unit: e6 });
      }
      m2 = `${c2 ? `,` : ` /`} ${i3}`;
    }
    l2 = `${e5}(${t3.join(c2 ? `, ` : ` `)}${m2})`;
  }
  return l2;
}
var Gt = new F({ id: `rec2020-linear`, cssId: `--rec2020-linear`, name: `Linear REC.2020`, white: `D65`, toXYZ_M: [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], fromXYZ_M: [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]] }), Kt = new F({ id: `rec2020`, name: `REC.2020`, base: Gt, toBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1;
    return t2 * (e5 * t2) ** 2.4;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1;
    return t2 * (e5 * t2) ** (1 / 2.4);
  });
} }), qt = new F({ id: `p3-linear`, cssId: `display-p3-linear`, name: `Linear P3`, white: `D65`, toXYZ_M: [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], fromXYZ_M: [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]] }), Jt = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], Y = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]], Yt = new F({ id: `srgb-linear`, name: `Linear sRGB`, white: `D65`, toXYZ_M: Jt, fromXYZ_M: Y }), Xt = { aliceblue: [240 / 255, 248 / 255, 1], antiquewhite: [250 / 255, 235 / 255, 215 / 255], aqua: [0, 1, 1], aquamarine: [127 / 255, 1, 212 / 255], azure: [240 / 255, 1, 1], beige: [245 / 255, 245 / 255, 220 / 255], bisque: [1, 228 / 255, 196 / 255], black: [0, 0, 0], blanchedalmond: [1, 235 / 255, 205 / 255], blue: [0, 0, 1], blueviolet: [138 / 255, 43 / 255, 226 / 255], brown: [165 / 255, 42 / 255, 42 / 255], burlywood: [222 / 255, 184 / 255, 135 / 255], cadetblue: [95 / 255, 158 / 255, 160 / 255], chartreuse: [127 / 255, 1, 0], chocolate: [210 / 255, 105 / 255, 30 / 255], coral: [1, 127 / 255, 80 / 255], cornflowerblue: [100 / 255, 149 / 255, 237 / 255], cornsilk: [1, 248 / 255, 220 / 255], crimson: [220 / 255, 20 / 255, 60 / 255], cyan: [0, 1, 1], darkblue: [0, 0, 139 / 255], darkcyan: [0, 139 / 255, 139 / 255], darkgoldenrod: [184 / 255, 134 / 255, 11 / 255], darkgray: [169 / 255, 169 / 255, 169 / 255], darkgreen: [0, 100 / 255, 0], darkgrey: [169 / 255, 169 / 255, 169 / 255], darkkhaki: [189 / 255, 183 / 255, 107 / 255], darkmagenta: [139 / 255, 0, 139 / 255], darkolivegreen: [85 / 255, 107 / 255, 47 / 255], darkorange: [1, 140 / 255, 0], darkorchid: [153 / 255, 50 / 255, 204 / 255], darkred: [139 / 255, 0, 0], darksalmon: [233 / 255, 150 / 255, 122 / 255], darkseagreen: [143 / 255, 188 / 255, 143 / 255], darkslateblue: [72 / 255, 61 / 255, 139 / 255], darkslategray: [47 / 255, 79 / 255, 79 / 255], darkslategrey: [47 / 255, 79 / 255, 79 / 255], darkturquoise: [0, 206 / 255, 209 / 255], darkviolet: [148 / 255, 0, 211 / 255], deeppink: [1, 20 / 255, 147 / 255], deepskyblue: [0, 191 / 255, 1], dimgray: [105 / 255, 105 / 255, 105 / 255], dimgrey: [105 / 255, 105 / 255, 105 / 255], dodgerblue: [30 / 255, 144 / 255, 1], firebrick: [178 / 255, 34 / 255, 34 / 255], floralwhite: [1, 250 / 255, 240 / 255], forestgreen: [34 / 255, 139 / 255, 34 / 255], fuchsia: [1, 0, 1], gainsboro: [220 / 255, 220 / 255, 220 / 255], ghostwhite: [248 / 255, 248 / 255, 1], gold: [1, 215 / 255, 0], goldenrod: [218 / 255, 165 / 255, 32 / 255], gray: [128 / 255, 128 / 255, 128 / 255], green: [0, 128 / 255, 0], greenyellow: [173 / 255, 1, 47 / 255], grey: [128 / 255, 128 / 255, 128 / 255], honeydew: [240 / 255, 1, 240 / 255], hotpink: [1, 105 / 255, 180 / 255], indianred: [205 / 255, 92 / 255, 92 / 255], indigo: [75 / 255, 0, 130 / 255], ivory: [1, 1, 240 / 255], khaki: [240 / 255, 230 / 255, 140 / 255], lavender: [230 / 255, 230 / 255, 250 / 255], lavenderblush: [1, 240 / 255, 245 / 255], lawngreen: [124 / 255, 252 / 255, 0], lemonchiffon: [1, 250 / 255, 205 / 255], lightblue: [173 / 255, 216 / 255, 230 / 255], lightcoral: [240 / 255, 128 / 255, 128 / 255], lightcyan: [224 / 255, 1, 1], lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255], lightgray: [211 / 255, 211 / 255, 211 / 255], lightgreen: [144 / 255, 238 / 255, 144 / 255], lightgrey: [211 / 255, 211 / 255, 211 / 255], lightpink: [1, 182 / 255, 193 / 255], lightsalmon: [1, 160 / 255, 122 / 255], lightseagreen: [32 / 255, 178 / 255, 170 / 255], lightskyblue: [135 / 255, 206 / 255, 250 / 255], lightslategray: [119 / 255, 136 / 255, 153 / 255], lightslategrey: [119 / 255, 136 / 255, 153 / 255], lightsteelblue: [176 / 255, 196 / 255, 222 / 255], lightyellow: [1, 1, 224 / 255], lime: [0, 1, 0], limegreen: [50 / 255, 205 / 255, 50 / 255], linen: [250 / 255, 240 / 255, 230 / 255], magenta: [1, 0, 1], maroon: [128 / 255, 0, 0], mediumaquamarine: [102 / 255, 205 / 255, 170 / 255], mediumblue: [0, 0, 205 / 255], mediumorchid: [186 / 255, 85 / 255, 211 / 255], mediumpurple: [147 / 255, 112 / 255, 219 / 255], mediumseagreen: [60 / 255, 179 / 255, 113 / 255], mediumslateblue: [123 / 255, 104 / 255, 238 / 255], mediumspringgreen: [0, 250 / 255, 154 / 255], mediumturquoise: [72 / 255, 209 / 255, 204 / 255], mediumvioletred: [199 / 255, 21 / 255, 133 / 255], midnightblue: [25 / 255, 25 / 255, 112 / 255], mintcream: [245 / 255, 1, 250 / 255], mistyrose: [1, 228 / 255, 225 / 255], moccasin: [1, 228 / 255, 181 / 255], navajowhite: [1, 222 / 255, 173 / 255], navy: [0, 0, 128 / 255], oldlace: [253 / 255, 245 / 255, 230 / 255], olive: [128 / 255, 128 / 255, 0], olivedrab: [107 / 255, 142 / 255, 35 / 255], orange: [1, 165 / 255, 0], orangered: [1, 69 / 255, 0], orchid: [218 / 255, 112 / 255, 214 / 255], palegoldenrod: [238 / 255, 232 / 255, 170 / 255], palegreen: [152 / 255, 251 / 255, 152 / 255], paleturquoise: [175 / 255, 238 / 255, 238 / 255], palevioletred: [219 / 255, 112 / 255, 147 / 255], papayawhip: [1, 239 / 255, 213 / 255], peachpuff: [1, 218 / 255, 185 / 255], peru: [205 / 255, 133 / 255, 63 / 255], pink: [1, 192 / 255, 203 / 255], plum: [221 / 255, 160 / 255, 221 / 255], powderblue: [176 / 255, 224 / 255, 230 / 255], purple: [128 / 255, 0, 128 / 255], rebeccapurple: [102 / 255, 51 / 255, 153 / 255], red: [1, 0, 0], rosybrown: [188 / 255, 143 / 255, 143 / 255], royalblue: [65 / 255, 105 / 255, 225 / 255], saddlebrown: [139 / 255, 69 / 255, 19 / 255], salmon: [250 / 255, 128 / 255, 114 / 255], sandybrown: [244 / 255, 164 / 255, 96 / 255], seagreen: [46 / 255, 139 / 255, 87 / 255], seashell: [1, 245 / 255, 238 / 255], sienna: [160 / 255, 82 / 255, 45 / 255], silver: [192 / 255, 192 / 255, 192 / 255], skyblue: [135 / 255, 206 / 255, 235 / 255], slateblue: [106 / 255, 90 / 255, 205 / 255], slategray: [112 / 255, 128 / 255, 144 / 255], slategrey: [112 / 255, 128 / 255, 144 / 255], snow: [1, 250 / 255, 250 / 255], springgreen: [0, 1, 127 / 255], steelblue: [70 / 255, 130 / 255, 180 / 255], tan: [210 / 255, 180 / 255, 140 / 255], teal: [0, 128 / 255, 128 / 255], thistle: [216 / 255, 191 / 255, 216 / 255], tomato: [1, 99 / 255, 71 / 255], turquoise: [64 / 255, 224 / 255, 208 / 255], violet: [238 / 255, 130 / 255, 238 / 255], wheat: [245 / 255, 222 / 255, 179 / 255], white: [1, 1, 1], whitesmoke: [245 / 255, 245 / 255, 245 / 255], yellow: [1, 1, 0], yellowgreen: [154 / 255, 205 / 255, 50 / 255] }, Zt = [, , ,].fill(`<percentage> | <number>[0, 255]`), Qt = [, , ,].fill(`<number>[0, 255]`), X = new F({ id: `srgb`, name: `sRGB`, base: Yt, fromBase: (e4) => e4.map((e5) => {
  let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
  return n2 > 31308e-7 ? t2 * (1.055 * n2 ** (1 / 2.4) - 0.055) : 12.92 * e5;
}), toBase: (e4) => e4.map((e5) => {
  let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
  return n2 <= 0.04045 ? e5 / 12.92 : t2 * ((n2 + 0.055) / 1.055) ** 2.4;
}), formats: { rgb: { coords: Zt }, rgb_number: { name: `rgb`, commas: true, coords: Qt, alpha: false }, color: {}, rgba: { coords: Zt, commas: true, alpha: true }, rgba_number: { name: `rgba`, commas: true, coords: Qt }, hex: { type: `custom`, toGamut: true, test: (e4) => /^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e4), parse(e4) {
  e4.length <= 5 && (e4 = e4.replace(/[a-f0-9]/gi, `$&$&`));
  let t2 = [];
  return e4.replace(/[a-f0-9]{2}/gi, (e5) => {
    t2.push(parseInt(e5, 16) / 255);
  }), { spaceId: `srgb`, coords: t2.slice(0, 3), alpha: t2.slice(3)[0] };
}, serialize: (e4, t2, { collapse: n2 = true, alpha: r2 } = {}) => {
  (r2 !== false && t2 < 1 || r2 === true) && e4.push(t2), e4 = e4.map((e5) => Math.round(e5 * 255));
  let i2 = n2 && e4.every((e5) => e5 % 17 == 0);
  return `#` + e4.map((e5) => i2 ? (e5 / 17).toString(16) : e5.toString(16).padStart(2, `0`)).join(``);
} }, keyword: { type: `custom`, test: (e4) => /^[a-z]+$/i.test(e4), parse(e4) {
  e4 = e4.toLowerCase();
  let t2 = { spaceId: `srgb`, coords: null, alpha: 1 };
  if (e4 === `transparent` ? (t2.coords = Xt.black, t2.alpha = 0) : t2.coords = Xt[e4], t2.coords) return t2;
} } } }), $t = new F({ id: `p3`, cssId: `display-p3`, name: `P3`, base: qt, fromBase: X.fromBase, toBase: X.toBase });
b.display_space = X;
var en;
if (typeof CSS < `u` && CSS.supports) for (let e4 of [B, Kt, $t]) {
  let t2 = Wt({ space: e4, coords: e4.getMinCoords(), alpha: 1 });
  if (CSS.supports(`color`, t2)) {
    b.display_space = e4;
    break;
  }
}
function tn(e4, { space: t2 = b.display_space, ...n2 } = {}) {
  e4 = j(e4);
  let r2 = Wt(e4, n2);
  if (typeof CSS > `u` || CSS.supports(`color`, r2) || !b.display_space) r2 = new String(r2), r2.color = e4;
  else {
    let i2 = e4;
    if ((e4.coords.some(o) || o(e4.alpha)) && !(en ?? (en = CSS.supports(`color`, `hsl(none 50% 50%)`))) && (i2 = be(e4), i2.coords = i2.coords.map(s), i2.alpha = s(i2.alpha), r2 = Wt(i2, n2), CSS.supports(`color`, r2))) return r2 = new String(r2), r2.color = i2, r2;
    i2 = J(i2, t2), r2 = new String(Wt(i2, n2)), r2.color = i2;
  }
  return r2;
}
function nn(e4, t2, { space: n2, hue: r2 = `shorter` } = {}) {
  e4 = j(e4), n2 || (n2 = e4.space), n2 = N.get(n2);
  let i2 = Object.values(n2.coords);
  [e4, t2] = [e4, t2].map((e5) => J(e5, n2));
  let [a2, o2] = [e4, t2].map((e5) => e5.coords), s2 = a2.map((e5, t3) => {
    let n3 = i2[t3], a3 = o2[t3];
    return n3.type === `angle` && ([e5, a3] = ce(r2, [e5, a3])), rn(e5, a3);
  }), c2 = rn(e4.alpha, t2.alpha);
  return { space: n2, coords: s2, alpha: c2 };
}
function rn(e4, t2) {
  return o(e4) || o(t2) ? e4 === t2 ? null : 0 : e4 - t2;
}
function an(e4, t2) {
  return e4 = j(e4), t2 = j(t2), e4.space === t2.space && e4.alpha === t2.alpha && e4.coords.every((e5, n2) => e5 === t2.coords[n2]);
}
function Z(e4) {
  return L(e4, [P, `y`]);
}
function on(e4, t2) {
  z(e4, [P, `y`], t2);
}
function sn(e4) {
  Object.defineProperty(e4.prototype, `luminance`, { get() {
    return Z(this);
  }, set(e5) {
    on(this, e5);
  } });
}
var cn = Object.freeze({ __proto__: null, getLuminance: Z, register: sn, setLuminance: on });
function ln(e4, t2) {
  e4 = j(e4), t2 = j(t2);
  let n2 = Math.max(Z(e4), 0), r2 = Math.max(Z(t2), 0);
  return r2 > n2 && ([n2, r2] = [r2, n2]), (n2 + 0.05) / (r2 + 0.05);
}
var un = 0.56, dn = 0.57, fn = 0.62, pn = 0.65, mn = 0.022, hn = 1.414, gn = 0.1, _n = 5e-4, vn = 1.14, yn = 0.027, bn = 1.14;
function xn(e4) {
  return e4 >= mn ? e4 : e4 + (mn - e4) ** hn;
}
function Sn(e4) {
  return (e4 < 0 ? -1 : 1) * Math.abs(e4) ** 2.4;
}
function Cn(e4, t2) {
  t2 = j(t2), e4 = j(e4);
  let n2, r2, i2, a2, s2, c2;
  t2 = J(t2, `srgb`), [a2, s2, c2] = t2.coords.map((e5) => o(e5) ? 0 : e5);
  let l2 = Sn(a2) * 0.2126729 + Sn(s2) * 0.7151522 + Sn(c2) * 0.072175;
  e4 = J(e4, `srgb`), [a2, s2, c2] = e4.coords.map((e5) => o(e5) ? 0 : e5);
  let u2 = Sn(a2) * 0.2126729 + Sn(s2) * 0.7151522 + Sn(c2) * 0.072175, d2 = xn(l2), f2 = xn(u2), p2 = f2 > d2;
  return Math.abs(f2 - d2) < _n ? r2 = 0 : p2 ? (n2 = f2 ** un - d2 ** dn, r2 = n2 * vn) : (n2 = f2 ** pn - d2 ** fn, r2 = n2 * bn), i2 = Math.abs(r2) < gn ? 0 : r2 > 0 ? r2 - yn : r2 + yn, i2 * 100;
}
function wn(e4, t2) {
  e4 = j(e4), t2 = j(t2);
  let n2 = Math.max(Z(e4), 0), r2 = Math.max(Z(t2), 0);
  r2 > n2 && ([n2, r2] = [r2, n2]);
  let i2 = n2 + r2;
  return i2 === 0 ? 0 : (n2 - r2) / i2;
}
var Tn = 5e4;
function En(e4, t2) {
  e4 = j(e4), t2 = j(t2);
  let n2 = Math.max(Z(e4), 0), r2 = Math.max(Z(t2), 0);
  return r2 > n2 && ([n2, r2] = [r2, n2]), r2 === 0 ? Tn : (n2 - r2) / r2;
}
function Dn(e4, t2) {
  e4 = j(e4), t2 = j(t2);
  let n2 = L(e4, [B, `l`]), r2 = L(t2, [B, `l`]);
  return Math.abs(n2 - r2);
}
var On = 216 / 24389, kn = 24 / 116, An = 24389 / 27, jn = w.D65, Mn = new N({ id: `lab-d65`, name: `Lab D65`, coords: { l: { refRange: [0, 100], name: `Lightness` }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: jn, base: P, fromBase(e4) {
  let t2 = e4.map((e5, t3) => e5 / jn[t3]).map((e5) => e5 > On ? Math.cbrt(e5) : (An * e5 + 16) / 116);
  return [116 * t2[1] - 16, 500 * (t2[0] - t2[1]), 200 * (t2[1] - t2[2])];
}, toBase(e4) {
  let t2 = [];
  return t2[1] = (e4[0] + 16) / 116, t2[0] = e4[1] / 500 + t2[1], t2[2] = t2[1] - e4[2] / 200, [t2[0] > kn ? t2[0] ** 3 : (116 * t2[0] - 16) / An, e4[0] > 8 ? ((e4[0] + 16) / 116) ** 3 : e4[0] / An, t2[2] > kn ? t2[2] ** 3 : (116 * t2[2] - 16) / An].map((e5, t3) => e5 * jn[t3]);
}, formats: { "lab-d65": { coords: [`<number> | <percentage>`, `<number> | <percentage>`, `<number> | <percentage>`] } } }), Nn = 5 ** 0.5 * 0.5 + 0.5;
function Pn(e4, t2) {
  e4 = j(e4), t2 = j(t2);
  let n2 = L(e4, [Mn, `l`]), r2 = L(t2, [Mn, `l`]), i2 = Math.abs(n2 ** +Nn - r2 ** +Nn) ** (1 / Nn) * Math.SQRT2 - 40;
  return i2 < 7.5 ? 0 : i2;
}
var Fn = Object.freeze({ __proto__: null, contrastAPCA: Cn, contrastDeltaPhi: Pn, contrastLstar: Dn, contrastMichelson: wn, contrastWCAG21: ln, contrastWeber: En });
function In(e4, t2, n2) {
  r(n2) && (n2 = { algorithm: n2 });
  let { algorithm: i2, ...a2 } = n2 || {};
  if (!i2) {
    let e5 = Object.keys(Fn).map((e6) => e6.replace(/^contrast/, ``)).join(`, `);
    throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e5}`);
  }
  e4 = j(e4), t2 = j(t2);
  for (let n3 in Fn) if (`contrast` + i2.toLowerCase() === n3.toLowerCase()) return Fn[n3](e4, t2, a2);
  throw TypeError(`Unknown contrast algorithm: ${i2}`);
}
function Ln(e4) {
  let [t2, n2, r2] = I(e4, P), i2 = t2 + 15 * n2 + 3 * r2;
  return [4 * t2 / i2, 9 * n2 / i2];
}
function Rn(e4) {
  let [t2, n2, r2] = I(e4, P), i2 = t2 + n2 + r2;
  return [t2 / i2, n2 / i2];
}
function zn(e4) {
  Object.defineProperty(e4.prototype, `uv`, { get() {
    return Ln(this);
  } }), Object.defineProperty(e4.prototype, `xy`, { get() {
    return Rn(this);
  } });
}
var Bn = Object.freeze({ __proto__: null, register: zn, uv: Ln, xy: Rn });
function Vn(e4, t2, n2 = {}) {
  r(n2) && (n2 = { method: n2 });
  let { method: i2 = b.deltaE, ...a2 } = n2;
  for (let n3 in zt) if (`deltae` + i2.toLowerCase() === n3.toLowerCase()) return zt[n3](e4, t2, a2);
  throw TypeError(`Unknown deltaE method: ${i2}`);
}
function Hn(e4, t2 = 0.25) {
  return z(e4, [N.get(`oklch`, `lch`), `l`], (e5) => e5 * (1 + t2));
}
function Un(e4, t2 = 0.25) {
  return z(e4, [N.get(`oklch`, `lch`), `l`], (e5) => e5 * (1 - t2));
}
Hn.returns = `color`, Un.returns = `color`;
var Wn = Object.freeze({ __proto__: null, darken: Un, lighten: Hn });
function Gn(e4, t2, n2, r2 = {}) {
  return [e4, t2] = [j(e4), j(t2)], i(n2) === `object` && ([n2, r2] = [0.5, n2]), qn(e4, t2, r2)(n2 ?? 0.5);
}
function Kn(e4, t2, n2 = {}) {
  let r2;
  Jn(e4) && ([r2, n2] = [e4, t2], [e4, t2] = r2.rangeArgs.colors);
  let { maxDeltaE: i2, deltaEMethod: a2, steps: o2 = 2, maxSteps: s2 = 1e3, ...c2 } = n2;
  r2 || (r2 = ([e4, t2] = [j(e4), j(t2)], qn(e4, t2, c2)));
  let l2 = Vn(e4, t2), u2 = i2 > 0 ? Math.max(o2, Math.ceil(l2 / i2) + 1) : o2, d2 = [];
  if (s2 !== void 0 && (u2 = Math.min(u2, s2)), u2 === 1) d2 = [{ p: 0.5, color: r2(0.5) }];
  else {
    let e5 = 1 / (u2 - 1);
    d2 = Array.from({ length: u2 }, (t3, n3) => {
      let i3 = n3 * e5;
      return { p: i3, color: r2(i3) };
    });
  }
  if (i2 > 0) {
    let e5 = d2.reduce((e6, t3, n3) => {
      if (n3 === 0) return 0;
      let r3 = Vn(t3.color, d2[n3 - 1].color, a2);
      return Math.max(e6, r3);
    }, 0);
    for (; e5 > i2; ) {
      e5 = 0;
      for (let t3 = 1; t3 < d2.length && d2.length < s2; t3++) {
        let n3 = d2[t3 - 1], i3 = d2[t3], a3 = (i3.p + n3.p) / 2, o3 = r2(a3);
        e5 = Math.max(e5, Vn(o3, n3.color), Vn(o3, i3.color)), d2.splice(t3, 0, { p: a3, color: r2(a3) }), t3++;
      }
    }
  }
  return d2 = d2.map((e5) => e5.color), d2;
}
function qn(e4, t2, n2 = {}) {
  if (Jn(e4)) {
    let [n3, r3] = [e4, t2];
    return qn(...n3.rangeArgs.colors, { ...n3.rangeArgs.options, ...r3 });
  }
  let { space: r2, outputSpace: i2, progression: a2, premultiplied: s2 } = n2;
  e4 = j(e4), t2 = j(t2), e4 = be(e4), t2 = be(t2);
  let c2 = { colors: [e4, t2], options: n2 };
  if (r2 = r2 ? N.get(r2) : N.registry[b.interpolationSpace] || e4.space, i2 = i2 ? N.get(i2) : r2, e4 = J(e4, r2), t2 = J(t2, r2), e4 = q(e4), t2 = q(t2), r2.coords.h && r2.coords.h.type === `angle`) {
    let i3 = n2.hue = n2.hue || `shorter`, a3 = [r2, `h`], [s3, c3] = [L(e4, a3), L(t2, a3)];
    o(s3) && !o(c3) ? s3 = c3 : o(c3) && !o(s3) && (c3 = s3), [s3, c3] = ce(i3, [s3, c3]), z(e4, a3, s3), z(t2, a3, c3);
  }
  return s2 && (e4.coords = e4.coords.map((t3) => t3 * e4.alpha), t2.coords = t2.coords.map((e5) => e5 * t2.alpha)), Object.assign((n3) => {
    n3 = a2 ? a2(n3) : n3;
    let o2 = e4.coords.map((e5, r3) => {
      let i3 = t2.coords[r3];
      return l(e5, i3, n3);
    }), c3 = l(e4.alpha, t2.alpha, n3), u2 = { space: r2, coords: o2, alpha: c3 };
    return s2 && (u2.coords = u2.coords.map((e5) => e5 / c3)), i2 !== r2 && (u2 = J(u2, i2)), u2;
  }, { rangeArgs: c2 });
}
function Jn(e4) {
  return i(e4) === `function` && !!e4.rangeArgs;
}
b.interpolationSpace = `lab`;
function Yn(e4) {
  e4.defineFunction(`mix`, Gn, { returns: `color` }), e4.defineFunction(`range`, qn, { returns: `function<color>` }), e4.defineFunction(`steps`, Kn, { returns: `array<color>` });
}
var Xn = Object.freeze({ __proto__: null, isRange: Jn, mix: Gn, range: qn, register: Yn, steps: Kn }), Zn = new N({ id: `hsl`, name: `HSL`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: X, fromBase: (e4) => {
  let t2 = Math.max(...e4), n2 = Math.min(...e4), [r2, i2, a2] = e4, [o2, s2, c2] = [null, 0, (n2 + t2) / 2], l2 = t2 - n2;
  if (l2 !== 0) {
    switch (s2 = c2 === 0 || c2 === 1 ? 0 : (t2 - c2) / Math.min(c2, 1 - c2), t2) {
      case r2:
        o2 = (i2 - a2) / l2 + (i2 < a2 ? 6 : 0);
        break;
      case i2:
        o2 = (a2 - r2) / l2 + 2;
        break;
      case a2:
        o2 = (r2 - i2) / l2 + 4;
    }
    o2 *= 60;
  }
  return s2 < 0 && (o2 += 180, s2 = Math.abs(s2)), o2 >= 360 && (o2 -= 360), [o2, s2 * 100, c2 * 100];
}, toBase: (e4) => {
  let [t2, n2, r2] = e4;
  t2 %= 360, t2 < 0 && (t2 += 360), n2 /= 100, r2 /= 100;
  function i2(e5) {
    let i3 = (e5 + t2 / 30) % 12, a2 = n2 * Math.min(r2, 1 - r2);
    return r2 - a2 * Math.max(-1, Math.min(i3 - 3, 9 - i3, 1));
  }
  return [i2(0), i2(8), i2(4)];
}, formats: { hsl: { coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] }, hsla: { coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`], commas: true, alpha: true } } }), Qn = new N({ id: `hsv`, name: `HSV`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, v: { range: [0, 100], name: `Value` } }, base: X, fromBase(e4) {
  let t2 = Math.max(...e4), n2 = Math.min(...e4), [r2, i2, a2] = e4, [o2, s2, c2] = [null, 0, t2], l2 = t2 - n2;
  if (l2 !== 0) {
    switch (t2) {
      case r2:
        o2 = (i2 - a2) / l2 + (i2 < a2 ? 6 : 0);
        break;
      case i2:
        o2 = (a2 - r2) / l2 + 2;
        break;
      case a2:
        o2 = (r2 - i2) / l2 + 4;
    }
    o2 *= 60;
  }
  return c2 && (s2 = l2 / c2), o2 >= 360 && (o2 -= 360), [o2, s2 * 100, c2 * 100];
}, toBase(e4) {
  let [t2, n2, r2] = e4;
  t2 %= 360, t2 < 0 && (t2 += 360), n2 /= 100, r2 /= 100;
  function i2(e5) {
    let i3 = (e5 + t2 / 60) % 6;
    return r2 - r2 * n2 * Math.max(0, Math.min(i3, 4 - i3, 1));
  }
  return [i2(5), i2(3), i2(1)];
}, formats: { color: { id: `--hsv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), $n = new N({ id: `hwb`, name: `HWB`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, w: { range: [0, 100], name: `Whiteness` }, b: { range: [0, 100], name: `Blackness` } }, base: Qn, fromBase(e4) {
  let [t2, n2, r2] = e4;
  return [t2, r2 * (100 - n2) / 100, 100 - r2];
}, toBase(e4) {
  let [t2, n2, r2] = e4;
  n2 /= 100, r2 /= 100;
  let i2 = n2 + r2;
  if (i2 >= 1) return [t2, 0, n2 / i2 * 100];
  let a2 = 1 - r2;
  return [t2, (a2 === 0 ? 0 : 1 - n2 / a2) * 100, a2 * 100];
}, formats: { hwb: { coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), er = new F({ id: `a98rgb-linear`, cssId: `--a98-rgb-linear`, name: `Linear Adobe\xAE 98 RGB compatible`, white: `D65`, toXYZ_M: [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], fromXYZ_M: [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]] }), tr = new F({ id: `a98rgb`, cssId: `a98-rgb`, name: `Adobe\xAE 98 RGB compatible`, base: er, toBase: (e4) => e4.map((e5) => Math.abs(e5) ** (563 / 256) * Math.sign(e5)), fromBase: (e4) => e4.map((e5) => Math.abs(e5) ** (256 / 563) * Math.sign(e5)) }), nr = new F({ id: `prophoto-linear`, cssId: `--prophoto-rgb-linear`, name: `Linear ProPhoto`, white: `D50`, base: re, toXYZ_M: [[0.7977666449006423, 0.13518129740053308, 0.0313477341283922], [0.2880748288194013, 0.711835234241873, 8993693872564e-17], [0, 0, 0.8251046025104602]], fromXYZ_M: [[1.3457868816471583, -0.25557208737979464, -0.05110186497554526], [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139], [0, 0, 1.2119675456389452]] }), rr = 1 / 512, ir = 16 / 512, ar = new F({ id: `prophoto`, cssId: `prophoto-rgb`, name: `ProPhoto`, base: nr, toBase(e4) {
  return e4.map((e5) => {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 < ir ? e5 / 16 : t2 * n2 ** 1.8;
  });
}, fromBase(e4) {
  return e4.map((e5) => {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 >= rr ? t2 * n2 ** (1 / 1.8) : 16 * e5;
  });
} }), or = 1.09929682680944, sr = 0.018053968510807, cr = new F({ id: `--rec2020-oetf`, name: `REC.2020_Scene_Referred`, base: Gt, referred: `scene`, toBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 < sr * 4.5 ? e5 / 4.5 : t2 * ((n2 + or - 1) / or) ** (1 / 0.45);
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 >= sr ? t2 * (or * n2 ** 0.45 - (or - 1)) : 4.5 * e5;
  });
} }), lr = new N({ id: `oklch`, name: `OkLCh`, coords: { l: { refRange: [0, 1], name: `Lightness` }, c: { refRange: [0, 0.4], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, white: `D65`, base: W, fromBase: H.fromBase, toBase: H.toBase, formats: { oklch: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <angle>`] } } }), ur = 2 * Math.PI, dr = [[4.076741636075958, -3.307711539258063, 0.2309699031821043], [-1.2684379732850315, 2.609757349287688, -0.341319376002657], [-0.0041960761386756, -0.7034186179359362, 1.7076146940746117]], fr = [[[-1.8817031, -0.80936501], [1.19086277, 1.76576728, 0.59662641, 0.75515197, 0.56771245]], [[1.8144408, -1.19445267], [0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204]], [[0.13110758, 1.81333971], [1.35733652, -915799e-8, -1.1513021, -0.50559606, 692167e-8]]], pr = Number.MAX_VALUE, mr = 0.206, hr = 0.03, gr = (1 + mr) / (1 + hr);
function Q(e4, t2) {
  let n2 = e4.length;
  if (n2 !== t2.length) throw Error(`Vectors of size ${n2} and ${t2.length} are not aligned`);
  let r2 = 0;
  return e4.forEach((e5, n3) => {
    r2 += e5 * t2[n3];
  }), r2;
}
function _r(e4) {
  return 0.5 * (gr * e4 - mr + Math.sqrt((gr * e4 - mr) * (gr * e4 - mr) + 4 * hr * gr * e4));
}
function vr(e4) {
  return (e4 ** 2 + mr * e4) / (gr * (e4 + hr));
}
function yr(e4) {
  let [t2, n2] = e4;
  return [n2 / t2, n2 / (1 - t2)];
}
function br(e4, t2) {
  return [0.11516993 + 1 / (7.4477897 + 4.1590124 * t2 + e4 * (-2.19557347 + 1.75198401 * t2 + e4 * (-2.13704948 - 10.02301043 * t2 + e4 * (-4.24894561 + 5.38770819 * t2 + 4.69891013 * e4)))), 0.11239642 + 1 / (1.6132032 - 0.68124379 * t2 + e4 * (0.40370612 + 0.90148123 * t2 + e4 * (-0.27087943 + 0.6122399 * t2 + e4 * (299215e-8 - 0.45399568 * t2 - 0.14661872 * e4))))];
}
function xr(e4, t2) {
  let r2 = n(e4, U);
  return r2[0] **= 3, r2[1] **= 3, r2[2] **= 3, n(r2, t2, r2);
}
function Sr(e4, t2, n2, r2) {
  let i2 = Tr(e4, t2, n2, r2), a2 = xr([1, i2 * e4, i2 * t2], n2), o2 = m(1 / Math.max(...a2), 1 / 3);
  return [o2, o2 * i2];
}
function Cr(e4, t2, n2, r2, i2, a2, o2, s2) {
  let c2;
  if (s2 === void 0 && (s2 = Sr(e4, t2, a2, o2)), (n2 - i2) * s2[1] - (s2[0] - i2) * r2 <= 0) c2 = s2[1] * i2 / (r2 * s2[0] + s2[1] * (i2 - n2));
  else {
    c2 = s2[1] * (i2 - 1) / (r2 * (s2[0] - 1) + s2[1] * (i2 - n2));
    let o3 = n2 - i2, l2 = r2, u2 = Q(U[0].slice(1), [e4, t2]), d2 = Q(U[1].slice(1), [e4, t2]), f2 = Q(U[2].slice(1), [e4, t2]), p2 = o3 + l2 * u2, m2 = o3 + l2 * d2, h2 = o3 + l2 * f2, g2 = i2 * (1 - c2) + c2 * n2, _2 = c2 * r2, v2 = g2 + _2 * u2, y2 = g2 + _2 * d2, b2 = g2 + _2 * f2, x2 = v2 ** 3, S2 = y2 ** 3, C2 = b2 ** 3, w2 = 3 * p2 * v2 ** 2, T2 = 3 * m2 * y2 ** 2, E2 = 3 * h2 * b2 ** 2, D2 = 6 * p2 ** 2 * v2, O2 = 6 * m2 ** 2 * y2, k2 = 6 * h2 ** 2 * b2, A2 = Q(a2[0], [x2, S2, C2]) - 1, ee2 = Q(a2[0], [w2, T2, E2]), j2 = Q(a2[0], [D2, O2, k2]), M2 = ee2 / (ee2 * ee2 - 0.5 * A2 * j2), N2 = -A2 * M2, te2 = Q(a2[1], [x2, S2, C2]) - 1, P2 = Q(a2[1], [w2, T2, E2]), F2 = Q(a2[1], [D2, O2, k2]), ne2 = P2 / (P2 * P2 - 0.5 * te2 * F2), I2 = -te2 * ne2, L2 = Q(a2[2], [x2, S2, C2]) - 1, R2 = Q(a2[2], [w2, T2, E2]), z2 = Q(a2[2], [D2, O2, k2]), re2 = R2 / (R2 * R2 - 0.5 * L2 * z2), ie2 = -L2 * re2;
    N2 = M2 >= 0 ? N2 : pr, I2 = ne2 >= 0 ? I2 : pr, ie2 = re2 >= 0 ? ie2 : pr, c2 += Math.min(N2, Math.min(I2, ie2));
  }
  return c2;
}
function wr(e4, t2, n2) {
  let [r2, i2, a2] = e4, o2 = Sr(i2, a2, t2, n2), s2 = Cr(i2, a2, r2, 1, r2, t2, n2, o2), c2 = yr(o2), l2 = s2 / Math.min(r2 * c2[0], (1 - r2) * c2[1]), u2 = br(i2, a2), d2 = r2 * u2[0], f2 = (1 - r2) * u2[1], p2 = 0.9 * l2 * Math.sqrt(Math.sqrt(1 / (1 / d2 ** 4 + 1 / f2 ** 4)));
  return d2 = r2 * 0.4, f2 = (1 - r2) * 0.8, [Math.sqrt(1 / (1 / d2 ** 2 + 1 / f2 ** 2)), p2, s2];
}
function Tr(e4, t2, n2, r2) {
  let i2, a2, o2, s2, c2, l2, u2, d2;
  Q(r2[0][0], [e4, t2]) > 1 ? ([i2, a2, o2, s2, c2] = r2[0][1], [l2, u2, d2] = n2[0]) : Q(r2[1][0], [e4, t2]) > 1 ? ([i2, a2, o2, s2, c2] = r2[1][1], [l2, u2, d2] = n2[1]) : ([i2, a2, o2, s2, c2] = r2[2][1], [l2, u2, d2] = n2[2]);
  let f2 = i2 + a2 * e4 + o2 * t2 + s2 * e4 ** 2 + c2 * e4 * t2, p2 = Q(U[0].slice(1), [e4, t2]), m2 = Q(U[1].slice(1), [e4, t2]), h2 = Q(U[2].slice(1), [e4, t2]), g2 = 1 + f2 * p2, _2 = 1 + f2 * m2, v2 = 1 + f2 * h2, y2 = g2 ** 3, b2 = _2 ** 3, x2 = v2 ** 3, S2 = 3 * p2 * g2 ** 2, C2 = 3 * m2 * _2 ** 2, w2 = 3 * h2 * v2 ** 2, T2 = 6 * p2 ** 2 * g2, E2 = 6 * m2 ** 2 * _2, D2 = 6 * h2 ** 2 * v2, O2 = l2 * y2 + u2 * b2 + d2 * x2, k2 = l2 * S2 + u2 * C2 + d2 * w2, A2 = l2 * T2 + u2 * E2 + d2 * D2;
  return f2 -= O2 * k2 / (k2 ** 2 - 0.5 * O2 * A2), f2;
}
function Er(e4, t2, n2) {
  let [r2, i2, a2] = e4, o2 = vr(a2), s2 = null, c2 = null;
  if (r2 = V(r2) / 360, o2 !== 0 && o2 !== 1 && i2 !== 0) {
    let e5 = Math.cos(ur * r2), a3 = Math.sin(ur * r2), [l2, u2, d2] = wr([o2, e5, a3], t2, n2), f2 = 0.8, p2, m2, h2, g2;
    i2 < f2 ? (p2 = 1.25 * i2, m2 = 0, h2 = f2 * l2, g2 = 1 - h2 / u2) : (p2 = 5 * (i2 - 0.8), m2 = u2, h2 = 0.2 * u2 ** 2 * 1.25 ** 2 / l2, g2 = 1 - h2 / (d2 - u2));
    let _2 = m2 + p2 * h2 / (1 - g2 * p2);
    s2 = _2 * e5, c2 = _2 * a3;
  }
  return [o2, s2, c2];
}
function Dr(e4, t2, n2) {
  let r2 = e4[0], i2 = 0, a2 = _r(r2), o2 = Math.sqrt(e4[1] ** 2 + e4[2] ** 2), s2 = 0.5 + Math.atan2(-e4[2], -e4[1]) / ur;
  if (a2 !== 0 && a2 !== 1 && o2 !== 0) {
    let [a3, s3, c3] = wr([r2, e4[1] / o2, e4[2] / o2], t2, n2), l2 = 0.8, u2, d2, f2, p2;
    o2 < s3 ? (d2 = l2 * a3, f2 = 1 - d2 / s3, p2 = o2 / (d2 + f2 * o2), i2 = p2 * l2) : (u2 = s3, d2 = 0.2 * s3 ** 2 * 1.25 ** 2 / a3, f2 = 1 - d2 / (c3 - s3), p2 = (o2 - u2) / (d2 + f2 * (o2 - u2)), i2 = l2 + 0.2 * p2);
  }
  let c2 = Math.abs(i2) < 1e-4;
  return c2 || a2 === 0 || Math.abs(1 - a2) < 1e-7 ? (s2 = null, c2 || (i2 = 0)) : s2 = V(s2 * 360), [s2, i2, a2];
}
var Or = new N({ id: `okhsl`, name: `Okhsl`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 1], name: `Saturation` }, l: { range: [0, 1], name: `Lightness` } }, base: W, gamutSpace: `self`, fromBase(e4) {
  return Dr(e4, dr, fr);
}, toBase(e4) {
  return Er(e4, dr, fr);
}, formats: { color: { id: `--okhsl`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), kr = new N({ id: `oklrab`, name: `Oklrab`, coords: { l: { refRange: [0, 1], name: `Lightness` }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: `D65`, base: W, fromBase(e4) {
  return [_r(e4[0]), e4[1], e4[2]];
}, toBase(e4) {
  return [vr(e4[0]), e4[1], e4[2]];
}, formats: { color: { coords: [`<percentage> | <number>`, `<number> | <percentage>[-1,1]`, `<number> | <percentage>[-1,1]`] } } }), Ar = new N({ id: `oklrch`, name: `Oklrch`, coords: { l: { refRange: [0, 1], name: `Lightness` }, c: { refRange: [0, 0.4], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, white: `D65`, base: kr, fromBase: H.fromBase, toBase: H.toBase, formats: { color: { coords: [`<percentage> | <number>`, `<number> | <percentage>[0,1]`, `<number> | <angle>`] } } });
function jr(e4, t2, n2) {
  let [r2, i2, a2] = e4;
  r2 = V(r2) / 360;
  let o2 = vr(a2), s2 = null, c2 = null;
  if (o2 !== 0 && i2 !== 0) {
    let e5 = Math.cos(ur * r2), l2 = Math.sin(ur * r2), [u2, d2] = yr(Sr(e5, l2, t2, n2)), f2 = 0.5, p2 = 1 - f2 / u2, h2 = 1 - i2 * f2 / (f2 + d2 - d2 * p2 * i2), g2 = i2 * d2 * f2 / (f2 + d2 - d2 * p2 * i2);
    o2 = a2 * h2;
    let _2 = a2 * g2, v2 = vr(h2), y2 = g2 * v2 / h2, b2 = vr(o2);
    _2 = _2 * b2 / o2, o2 = b2;
    let [x2, S2, C2] = xr([v2, e5 * y2, l2 * y2], t2), w2 = m(1 / Math.max(Math.max(x2, S2), Math.max(C2, 0)), 1 / 3);
    o2 *= w2, _2 *= w2, s2 = _2 * e5, c2 = _2 * l2;
  }
  return [o2, s2, c2];
}
function Mr(e4, t2, n2) {
  let r2 = e4[0], i2 = 0, a2 = _r(r2), o2 = Math.sqrt(e4[1] ** 2 + e4[2] ** 2), s2 = 0.5 + Math.atan2(-e4[2], -e4[1]) / ur;
  if (r2 !== 0 && r2 !== 1 && o2 !== 0) {
    let s3 = e4[1] / o2, c2 = e4[2] / o2, [l2, u2] = yr(Sr(s3, c2, t2, n2)), d2 = 0.5, f2 = 1 - d2 / l2, p2 = u2 / (o2 + r2 * u2), h2 = p2 * r2, g2 = p2 * o2, _2 = vr(h2), v2 = g2 * _2 / h2, [y2, b2, x2] = xr([_2, s3 * v2, c2 * v2], t2), S2 = m(1 / Math.max(Math.max(y2, b2), Math.max(x2, 0)), 1 / 3);
    r2 /= S2, o2 /= S2, o2 = o2 * _r(r2) / r2, r2 = _r(r2), a2 = r2 / h2, i2 = (d2 + u2) * g2 / (u2 * d2 + u2 * f2 * g2);
  }
  return s2 = Math.abs(i2) < 1e-4 || a2 === 0 ? null : V(s2 * 360), [s2, i2, a2];
}
var Nr = new N({ id: `okhsv`, name: `Okhsv`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 1], name: `Saturation` }, v: { range: [0, 1], name: `Value` } }, base: W, gamutSpace: `self`, fromBase(e4) {
  return Mr(e4, dr, fr);
}, toBase(e4) {
  return jr(e4, dr, fr);
}, formats: { color: { id: `--okhsv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), Pr = w.D65, Fr = 216 / 24389, Ir = 24389 / 27, [Lr, Rr] = Ln({ space: P, coords: Pr }), zr = new N({ id: `luv`, name: `Luv`, coords: { l: { refRange: [0, 100], name: `Lightness` }, u: { refRange: [-215, 215] }, v: { refRange: [-215, 215] } }, white: Pr, base: P, fromBase(e4) {
  let t2 = [s(e4[0]), s(e4[1]), s(e4[2])], n2 = t2[1], [r2, i2] = Ln({ space: P, coords: t2 });
  if (!Number.isFinite(r2) || !Number.isFinite(i2)) return [0, 0, 0];
  let a2 = n2 <= Fr ? Ir * n2 : 116 * Math.cbrt(n2) - 16;
  return [a2, 13 * a2 * (r2 - Lr), 13 * a2 * (i2 - Rr)];
}, toBase(e4) {
  let [t2, n2, r2] = e4;
  if (t2 === 0 || o(t2)) return [0, 0, 0];
  n2 = s(n2), r2 = s(r2);
  let i2 = n2 / (13 * t2) + Lr, a2 = r2 / (13 * t2) + Rr, c2 = t2 <= 8 ? t2 / Ir : ((t2 + 16) / 116) ** 3;
  return [c2 * (9 * i2 / (4 * a2)), c2, c2 * ((12 - 3 * i2 - 20 * a2) / (4 * a2))];
}, formats: { color: { id: `--luv`, coords: [`<number> | <percentage>`, `<number> | <percentage>`, `<number> | <percentage>`] } } }), Br = new N({ id: `lchuv`, name: `LChuv`, coords: { l: { refRange: [0, 100], name: `Lightness` }, c: { refRange: [0, 220], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: zr, fromBase: H.fromBase, toBase: H.toBase, formats: { color: { id: `--lchuv`, coords: [`<number> | <percentage>`, `<number> | <percentage>`, `<number> | <angle>`] } } }), Vr = 216 / 24389, Hr = 24389 / 27, Ur = Y[0][0], Wr = Y[0][1], Gr = Y[0][2], Kr = Y[1][0], qr = Y[1][1], Jr = Y[1][2], Yr = Y[2][0], Xr = Y[2][1], Zr = Y[2][2];
function Qr(e4, t2, n2) {
  let r2 = t2 / (Math.sin(n2) - e4 * Math.cos(n2));
  return r2 < 0 ? 1 / 0 : r2;
}
function $r(e4) {
  let t2 = (e4 + 16) ** 3 / 1560896, n2 = t2 > Vr ? t2 : e4 / Hr, r2 = n2 * (284517 * Ur - 94839 * Gr), i2 = n2 * (838422 * Gr + 769860 * Wr + 731718 * Ur), a2 = n2 * (632260 * Gr - 126452 * Wr), o2 = n2 * (284517 * Kr - 94839 * Jr), s2 = n2 * (838422 * Jr + 769860 * qr + 731718 * Kr), c2 = n2 * (632260 * Jr - 126452 * qr), l2 = n2 * (284517 * Yr - 94839 * Zr), u2 = n2 * (838422 * Zr + 769860 * Xr + 731718 * Yr), d2 = n2 * (632260 * Zr - 126452 * Xr);
  return { r0s: r2 / a2, r0i: i2 * e4 / a2, r1s: r2 / (a2 + 126452), r1i: (i2 - 769860) * e4 / (a2 + 126452), g0s: o2 / c2, g0i: s2 * e4 / c2, g1s: o2 / (c2 + 126452), g1i: (s2 - 769860) * e4 / (c2 + 126452), b0s: l2 / d2, b0i: u2 * e4 / d2, b1s: l2 / (d2 + 126452), b1i: (u2 - 769860) * e4 / (d2 + 126452) };
}
function ei(e4, t2) {
  let n2 = t2 / 360 * Math.PI * 2, r2 = Qr(e4.r0s, e4.r0i, n2), i2 = Qr(e4.r1s, e4.r1i, n2), a2 = Qr(e4.g0s, e4.g0i, n2), o2 = Qr(e4.g1s, e4.g1i, n2), s2 = Qr(e4.b0s, e4.b0i, n2), c2 = Qr(e4.b1s, e4.b1i, n2);
  return Math.min(r2, i2, a2, o2, s2, c2);
}
var ti = new N({ id: `hsluv`, name: `HSLuv`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: Br, gamutSpace: X, fromBase(e4) {
  let [t2, n2, r2] = [s(e4[0]), s(e4[1]), s(e4[2])], i2;
  return t2 > 99.9999999 ? (i2 = 0, t2 = 100) : t2 < 1e-8 ? (i2 = 0, t2 = 0) : i2 = n2 / ei($r(t2), r2) * 100, [r2, i2, t2];
}, toBase(e4) {
  let [t2, n2, r2] = [s(e4[0]), s(e4[1]), s(e4[2])], i2;
  return r2 > 99.9999999 ? (r2 = 100, i2 = 0) : r2 < 1e-8 ? (r2 = 0, i2 = 0) : i2 = ei($r(r2), t2) / 100 * n2, [r2, i2, t2];
}, formats: { color: { id: `--hsluv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } });
Y[0][0], Y[0][1], Y[0][2], Y[1][0], Y[1][1], Y[1][2], Y[2][0], Y[2][1], Y[2][2];
function ni(e4, t2) {
  return Math.abs(t2) / Math.sqrt(e4 ** 2 + 1);
}
function ri(e4) {
  let t2 = ni(e4.r0s, e4.r0i), n2 = ni(e4.r1s, e4.r1i), r2 = ni(e4.g0s, e4.g0i), i2 = ni(e4.g1s, e4.g1i), a2 = ni(e4.b0s, e4.b0i), o2 = ni(e4.b1s, e4.b1i);
  return Math.min(t2, n2, r2, i2, a2, o2);
}
var ii = new N({ id: `hpluv`, name: `HPLuv`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: Br, gamutSpace: `self`, fromBase(e4) {
  let [t2, n2, r2] = [s(e4[0]), s(e4[1]), s(e4[2])], i2;
  return t2 > 99.9999999 ? (i2 = 0, t2 = 100) : t2 < 1e-8 ? (i2 = 0, t2 = 0) : i2 = n2 / ri($r(t2)) * 100, [r2, i2, t2];
}, toBase(e4) {
  let [t2, n2, r2] = [s(e4[0]), s(e4[1]), s(e4[2])], i2;
  return r2 > 99.9999999 ? (r2 = 100, i2 = 0) : r2 < 1e-8 ? (r2 = 0, i2 = 0) : i2 = ri($r(r2)) / 100 * n2, [r2, i2, t2];
}, formats: { color: { id: `--hpluv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), ai = new F({ id: `rec2100-linear`, name: `Linear REC.2100`, white: `D65`, toBase: Gt.toBase, fromBase: Gt.fromBase }), oi = 203, si = 2610 / 2 ** 14, ci = 2 ** 14 / 2610, li = 2523 / 2 ** 5, ui = 2 ** 5 / 2523, di = 3424 / 2 ** 12, fi = 2413 / 2 ** 7, pi = 2392 / 2 ** 7, mi = new F({ id: `rec2100pq`, cssId: `rec2100-pq`, name: `REC.2100-PQ`, base: ai, toBase(e4) {
  return e4.map(function(e5) {
    return (Math.max(e5 ** ui - di, 0) / (fi - pi * e5 ** ui)) ** ci * 1e4 / oi;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    let t2 = Math.max(e5 * oi / 1e4, 0);
    return ((di + fi * t2 ** si) / (1 + pi * t2 ** si)) ** li;
  });
} }), hi = 0.17883277, gi = 0.28466892, _i = 0.55991073, vi = 3.7743, yi = new F({ id: `rec2100hlg`, cssId: `rec2100-hlg`, name: `REC.2100-HLG`, referred: `scene`, base: ai, toBase(e4) {
  return e4.map(function(e5) {
    return e5 <= 0.5 ? e5 ** 2 / 3 * vi : (Math.exp((e5 - _i) / hi) + gi) / 12 * vi;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    return e5 /= vi, e5 <= 1 / 12 ? m(3 * e5, 0.5) : hi * Math.log(12 * e5 - gi) + _i;
  });
} }), bi = {};
y.add(`chromatic-adaptation-start`, (e4) => {
  e4.options.method && (e4.M = Si(e4.W1, e4.W2, e4.options.method));
}), y.add(`chromatic-adaptation-end`, (e4) => {
  e4.M || (e4.M = Si(e4.W1, e4.W2, e4.options.method));
});
function xi({ id: e4, toCone_M: t2, fromCone_M: n2 }) {
  bi[e4] = arguments[0];
}
function Si(t2, n2, r2 = `Bradford`) {
  let i2 = bi[r2], [a2, o2, s2] = e(i2.toCone_M, t2), [c2, l2, u2] = e(i2.toCone_M, n2), d2 = e([[c2 / a2, 0, 0], [0, l2 / o2, 0], [0, 0, u2 / s2]], i2.toCone_M);
  return e(i2.fromCone_M, d2);
}
xi({ id: `von Kries`, toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]], fromCone_M: [[1.8599363874558397, -1.1293816185800916, 0.21989740959619328], [0.3611914362417676, 0.6388124632850422, -6370596838649899e-21], [0, 0, 1.0890636230968613]] }), xi({ id: `Bradford`, toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]], fromCone_M: [[0.9869929054667121, -0.14705425642099013, 0.15996265166373122], [0.4323052697233945, 0.5183602715367774, 0.049291228212855594], [-0.00852866457517732, 0.04004282165408486, 0.96848669578755]] }), xi({ id: `CAT02`, toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]], fromCone_M: [[1.0961238208355142, -0.27886900021828726, 0.18274517938277307], [0.4543690419753592, 0.4735331543074117, 0.07209780371722911], [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427]] }), xi({ id: `CAT16`, toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], fromCone_M: [[1.862067855087233, -1.0112546305316845, 0.14918677544445172], [0.3875265432361372, 0.6214474419314753, -0.008973985167612521], [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496]] }), Object.assign(w, { A: [1.0985, 1, 0.35585], C: [0.98074, 1, 1.18232], D55: [0.95682, 1, 0.92149], D75: [0.94972, 1, 1.22638], E: [1, 1, 1], F2: [0.99186, 1, 0.67393], F7: [0.95041, 1, 1.08747], F11: [1.00962, 1, 0.6435] }), w.ACES = [0.32168 / 0.33767, 1, 0.34065 / 0.33767];
var Ci = new F({ id: `acescg`, cssId: `--acescg`, name: `ACEScg`, coords: { r: { range: [0, 65504], name: `Red` }, g: { range: [0, 65504], name: `Green` }, b: { range: [0, 65504], name: `Blue` } }, referred: `scene`, white: w.ACES, toXYZ_M: [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], fromXYZ_M: [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]] }), wi = 2 ** -16, Ti = -0.35828683, Ei = (Math.log2(65504) + 9.72) / 17.52, Di = new F({ id: `acescc`, cssId: `--acescc`, name: `ACEScc`, coords: { r: { range: [Ti, Ei], name: `Red` }, g: { range: [Ti, Ei], name: `Green` }, b: { range: [Ti, Ei], name: `Blue` } }, referred: `scene`, base: Ci, toBase(e4) {
  return e4.map(function(e5) {
    return e5 <= -0.3013698630136986 ? (2 ** (e5 * 17.52 - 9.72) - wi) * 2 : e5 < Ei ? 2 ** (e5 * 17.52 - 9.72) : 65504;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    return e5 <= 0 ? (Math.log2(wi) + 9.72) / 17.52 : e5 < wi ? (Math.log2(wi + e5 * 0.5) + 9.72) / 17.52 : (Math.log2(e5) + 9.72) / 17.52;
  });
} }), Oi = Object.freeze({ __proto__: null, A98RGB: tr, A98RGB_Linear: er, ACEScc: Di, ACEScg: Ci, CAM16_JMh: Tt, HCT: Pt, HPLuv: ii, HSL: Zn, HSLuv: ti, HSV: Qn, HWB: $n, ICTCP: nt, JzCzHz: Ue, Jzazbz: He, LCH: H, LCHuv: Br, Lab: B, Lab_D65: Mn, Luv: zr, OKLCH: lr, OKLab: W, OKLrCH: Ar, OKLrab: kr, Okhsl: Or, Okhsv: Nr, P3: $t, P3_Linear: qt, ProPhoto: ar, ProPhoto_Linear: nr, REC_2020: Kt, REC_2020_Linear: Gt, REC_2020_Scene_Referred: cr, REC_2100_HLG: yi, REC_2100_Linear: ai, REC_2100_PQ: mi, XYZ_ABS_D65: Ee, XYZ_D50: re, XYZ_D65: P, sRGB: X, sRGB_Linear: Yt }), $ = class e3 {
  constructor(...e4) {
    let t2;
    if (e4.length === 1) {
      let n3 = {};
      typeof e4[0] == `object` && Object.getPrototypeOf(e4[0]).constructor === Object && (e4[0] = { ...e4[0] }), t2 = j(e4[0], { parseMeta: n3 }), n3.format && (this.parseMeta = n3);
    }
    let n2, r2, i2;
    t2 ? (n2 = t2.space || t2.spaceId, r2 = t2.coords, i2 = t2.alpha) : [n2, r2, i2] = e4, Object.defineProperty(this, `space`, { value: N.get(n2), writable: false, enumerable: true, configurable: true }), this.coords = r2 ? r2.slice() : [0, 0, 0], this.alpha = o(i2) ? i2 : i2 === void 0 ? 1 : f(0, i2, 1);
    for (let e5 in this.space.coords) Object.defineProperty(this, e5, { get: () => this.get(e5), set: (t3) => this.set(e5, t3) });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new e3(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
  }
  display(...t2) {
    let n2 = tn(this, ...t2);
    return n2.color = new e3(n2.color), n2;
  }
  static get(t2, ...n2) {
    return _(t2, this) ? t2 : new e3(t2, ...n2);
  }
  static try(t2, n2) {
    if (_(t2, this)) return t2;
    let r2 = ne(t2, n2);
    return r2 ? new e3(r2) : null;
  }
  static defineFunction(t2, n2, r2 = n2) {
    let { instance: i2 = true, returns: a2 } = r2, o2 = function(...t3) {
      let r3 = n2(...t3);
      if (a2 === `color`) r3 = e3.get(r3);
      else if (a2 === `function<color>`) {
        let t4 = r3;
        r3 = function(...n3) {
          let r4 = t4(...n3);
          return e3.get(r4);
        }, Object.assign(r3, t4);
      } else a2 === `array<color>` && (r3 = r3.map((t4) => e3.get(t4)));
      return r3;
    };
    t2 in e3 || (e3[t2] = o2), i2 && (e3.prototype[t2] = function(...e4) {
      return o2(this, ...e4);
    });
  }
  static defineFunctions(t2) {
    for (let n2 in t2) e3.defineFunction(n2, t2[n2], t2[n2]);
  }
  static extend(t2) {
    if (t2.register) t2.register(e3);
    else for (let n2 in t2) e3.defineFunction(n2, t2[n2]);
  }
};
$.defineFunctions({ get: L, getAll: I, set: z, setAll: R, to: J, equals: an, inGamut: G, toGamut: q, distance: xe, deltas: nn, toString: Wt }), Object.assign($, { util: v, hooks: y, WHITES: w, Space: N, spaces: N.registry, parse: D, defaults: b });
for (let e4 of Object.keys(Oi)) N.register(Oi[e4]);
for (let e4 in N.registry) ki(e4, N.registry[e4]);
y.add(`colorspace-init-end`, (e4) => {
  ki(e4.id, e4), e4.aliases?.forEach((t2) => {
    ki(t2, e4);
  });
});
function ki(e4, t2) {
  let n2 = e4.replace(/-/g, `_`);
  Object.defineProperty($.prototype, n2, { get() {
    let n3 = this.getAll(e4);
    if (typeof Proxy > `u`) return n3;
    let r2 = new Proxy(n3, { has: (e5, n4) => {
      try {
        return N.resolveCoord([t2, n4]), true;
      } catch {
      }
      return Reflect.has(e5, n4);
    }, get: (e5, n4, i2) => {
      if (n4 && typeof n4 != `symbol` && !(n4 in e5) && n4 in r2) {
        let { index: r3 } = N.resolveCoord([t2, n4]);
        if (r3 >= 0) return e5[r3];
      }
      return Reflect.get(e5, n4, i2);
    }, set: (n4, r3, i2, a2) => {
      if (r3 && typeof r3 != `symbol` && !(r3 in n4) || Number(r3) >= 0) {
        let { index: a3 } = N.resolveCoord([t2, r3]);
        if (a3 >= 0) return n4[a3] = i2, this.setAll(e4, n4), true;
      }
      return Reflect.set(n4, r3, i2, a2);
    } });
    return r2;
  }, set(t3) {
    this.setAll(e4, t3);
  }, configurable: true, enumerable: true });
}
$.extend(zt), $.extend({ deltaE: Vn }), Object.assign($, { deltaEMethods: zt }), $.extend(Wn), $.extend({ contrast: In }), $.extend(Bn), $.extend(cn), $.extend(Xn), $.extend(Fn);
export {
  $ as t
};
