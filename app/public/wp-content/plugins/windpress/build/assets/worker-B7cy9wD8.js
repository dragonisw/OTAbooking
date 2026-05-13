import { t as e } from "./log-BcOb3xTO.js";
import { t } from "./api-3yDUayxW.js";
import { n } from "./index.browser-DTH_RVqO.js";
import { t as r } from "./get-CA0PtJWw.js";
import { t as i } from "./preload-helper-Cb81DA_d.js";
import { n as a } from "./base64-DYxoxXqt.js";
import { t as o } from "./dist-DRk9LJ9_.js";
let hn;
let __tla = (async () => {
  var s = [
    [
      `&`,
      `&amp;`
    ],
    [
      `<`,
      `&lt;`
    ],
    [
      `>`,
      `&gt;`
    ],
    [
      `"`,
      `&quot;`
    ],
    [
      `'`,
      `&#39;`
    ]
  ], c = Object.fromEntries([
    ...s.map(([e2, t2]) => [
      t2,
      e2
    ]),
    [
      `&apos;`,
      `'`
    ],
    [
      `&nbsp;`,
      `\xA0`
    ]
  ]), l = new Map(s);
  RegExp(`[${[
    ...l.keys()
  ].join(``)}]`, `g`);
  var u = {
    entityList: c
  }, d = 1114111, f = /&#([0-9]+);/g, p = /&#x(\p{AHex}+);/gu, m = /* @__PURE__ */ new WeakMap();
  function h(e2, t2 = {}) {
    let { entityList: n2 } = {
      ...u,
      ...t2
    }, r2 = m.get(n2);
    return r2 || (r2 = RegExp(`(${Object.keys(n2).sort((e3, t3) => t3.length - e3.length).join(`|`)})`, `g`), m.set(n2, r2)), e2.replaceAll(r2, (e3) => n2[e3]).replaceAll(f, (e3, t3) => g(t3, 10)).replaceAll(p, (e3, t3) => g(t3, 16));
  }
  function g(e2, t2) {
    let n2 = parseInt(e2, t2);
    return n2 > d ? `\uFFFD` : String.fromCodePoint(n2);
  }
  var _ = /* @__PURE__ */ Symbol.for(`yaml.alias`), v = /* @__PURE__ */ Symbol.for(`yaml.document`), y = /* @__PURE__ */ Symbol.for(`yaml.map`), b = /* @__PURE__ */ Symbol.for(`yaml.pair`), x = /* @__PURE__ */ Symbol.for(`yaml.scalar`), S = /* @__PURE__ */ Symbol.for(`yaml.seq`), C = /* @__PURE__ */ Symbol.for(`yaml.node.type`), w = (e2) => !!e2 && typeof e2 == `object` && e2[C] === _, T = (e2) => !!e2 && typeof e2 == `object` && e2[C] === v, ee = (e2) => !!e2 && typeof e2 == `object` && e2[C] === y, E = (e2) => !!e2 && typeof e2 == `object` && e2[C] === b, D = (e2) => !!e2 && typeof e2 == `object` && e2[C] === x, O = (e2) => !!e2 && typeof e2 == `object` && e2[C] === S;
  function k(e2) {
    if (e2 && typeof e2 == `object`) switch (e2[C]) {
      case y:
      case S:
        return true;
    }
    return false;
  }
  function A(e2) {
    if (e2 && typeof e2 == `object`) switch (e2[C]) {
      case _:
      case y:
      case x:
      case S:
        return true;
    }
    return false;
  }
  var te = (e2) => (D(e2) || k(e2)) && !!e2.anchor, j = /* @__PURE__ */ Symbol(`break visit`), ne = /* @__PURE__ */ Symbol(`skip children`), M = /* @__PURE__ */ Symbol(`remove node`);
  function N(e2, t2) {
    let n2 = ie(t2);
    T(e2) ? P(null, e2.contents, n2, Object.freeze([
      e2
    ])) === M && (e2.contents = null) : P(null, e2, n2, Object.freeze([]));
  }
  N.BREAK = j, N.SKIP = ne, N.REMOVE = M;
  function P(e2, t2, n2, r2) {
    let i2 = ae(e2, t2, n2, r2);
    if (A(i2) || E(i2)) return oe(e2, r2, i2), P(e2, i2, n2, r2);
    if (typeof i2 != `symbol`) {
      if (k(t2)) {
        r2 = Object.freeze(r2.concat(t2));
        for (let e3 = 0; e3 < t2.items.length; ++e3) {
          let i3 = P(e3, t2.items[e3], n2, r2);
          if (typeof i3 == `number`) e3 = i3 - 1;
          else if (i3 === j) return j;
          else i3 === M && (t2.items.splice(e3, 1), --e3);
        }
      } else if (E(t2)) {
        r2 = Object.freeze(r2.concat(t2));
        let e3 = P(`key`, t2.key, n2, r2);
        if (e3 === j) return j;
        e3 === M && (t2.key = null);
        let i3 = P(`value`, t2.value, n2, r2);
        if (i3 === j) return j;
        i3 === M && (t2.value = null);
      }
    }
    return i2;
  }
  async function re(e2, t2) {
    let n2 = ie(t2);
    T(e2) ? await F(null, e2.contents, n2, Object.freeze([
      e2
    ])) === M && (e2.contents = null) : await F(null, e2, n2, Object.freeze([]));
  }
  re.BREAK = j, re.SKIP = ne, re.REMOVE = M;
  async function F(e2, t2, n2, r2) {
    let i2 = await ae(e2, t2, n2, r2);
    if (A(i2) || E(i2)) return oe(e2, r2, i2), F(e2, i2, n2, r2);
    if (typeof i2 != `symbol`) {
      if (k(t2)) {
        r2 = Object.freeze(r2.concat(t2));
        for (let e3 = 0; e3 < t2.items.length; ++e3) {
          let i3 = await F(e3, t2.items[e3], n2, r2);
          if (typeof i3 == `number`) e3 = i3 - 1;
          else if (i3 === j) return j;
          else i3 === M && (t2.items.splice(e3, 1), --e3);
        }
      } else if (E(t2)) {
        r2 = Object.freeze(r2.concat(t2));
        let e3 = await F(`key`, t2.key, n2, r2);
        if (e3 === j) return j;
        e3 === M && (t2.key = null);
        let i3 = await F(`value`, t2.value, n2, r2);
        if (i3 === j) return j;
        i3 === M && (t2.value = null);
      }
    }
    return i2;
  }
  function ie(e2) {
    return typeof e2 == `object` && (e2.Collection || e2.Node || e2.Value) ? Object.assign({
      Alias: e2.Node,
      Map: e2.Node,
      Scalar: e2.Node,
      Seq: e2.Node
    }, e2.Value && {
      Map: e2.Value,
      Scalar: e2.Value,
      Seq: e2.Value
    }, e2.Collection && {
      Map: e2.Collection,
      Seq: e2.Collection
    }, e2) : e2;
  }
  function ae(e2, t2, n2, r2) {
    if (typeof n2 == `function`) return n2(e2, t2, r2);
    if (ee(t2)) return n2.Map?.(e2, t2, r2);
    if (O(t2)) return n2.Seq?.(e2, t2, r2);
    if (E(t2)) return n2.Pair?.(e2, t2, r2);
    if (D(t2)) return n2.Scalar?.(e2, t2, r2);
    if (w(t2)) return n2.Alias?.(e2, t2, r2);
  }
  function oe(e2, t2, n2) {
    let r2 = t2[t2.length - 1];
    if (k(r2)) r2.items[e2] = n2;
    else if (E(r2)) e2 === `key` ? r2.key = n2 : r2.value = n2;
    else if (T(r2)) r2.contents = n2;
    else {
      let e3 = w(r2) ? `alias` : `scalar`;
      throw Error(`Cannot replace node with ${e3} parent`);
    }
  }
  var se = {
    "!": `%21`,
    ",": `%2C`,
    "[": `%5B`,
    "]": `%5D`,
    "{": `%7B`,
    "}": `%7D`
  }, ce = (e2) => e2.replace(/[!,[\]{}]/g, (e3) => se[e3]), I = class e2 {
    constructor(t2, n2) {
      this.docStart = null, this.docEnd = false, this.yaml = Object.assign({}, e2.defaultYaml, t2), this.tags = Object.assign({}, e2.defaultTags, n2);
    }
    clone() {
      let t2 = new e2(this.yaml, this.tags);
      return t2.docStart = this.docStart, t2;
    }
    atDocument() {
      let t2 = new e2(this.yaml, this.tags);
      switch (this.yaml.version) {
        case `1.1`:
          this.atNextDocument = true;
          break;
        case `1.2`:
          this.atNextDocument = false, this.yaml = {
            explicit: e2.defaultYaml.explicit,
            version: `1.2`
          }, this.tags = Object.assign({}, e2.defaultTags);
          break;
      }
      return t2;
    }
    add(t2, n2) {
      this.atNextDocument && (this.atNextDocument = (this.yaml = {
        explicit: e2.defaultYaml.explicit,
        version: `1.1`
      }, this.tags = Object.assign({}, e2.defaultTags), false));
      let r2 = t2.trim().split(/[ \t]+/), i2 = r2.shift();
      switch (i2) {
        case `%TAG`: {
          if (r2.length !== 2 && (n2(0, `%TAG directive should contain exactly two parts`), r2.length < 2)) return false;
          let [e3, t3] = r2;
          return this.tags[e3] = t3, true;
        }
        case `%YAML`: {
          if (this.yaml.explicit = true, r2.length !== 1) return n2(0, `%YAML directive should contain exactly one part`), false;
          let [e3] = r2;
          if (e3 === `1.1` || e3 === `1.2`) return this.yaml.version = e3, true;
          {
            let t3 = /^\d+\.\d+$/.test(e3);
            return n2(6, `Unsupported YAML version ${e3}`, t3), false;
          }
        }
        default:
          return n2(0, `Unknown directive ${i2}`, true), false;
      }
    }
    tagName(e3, t2) {
      if (e3 === `!`) return `!`;
      if (e3[0] !== `!`) return t2(`Not a valid tag: ${e3}`), null;
      if (e3[1] === `<`) {
        let n3 = e3.slice(2, -1);
        return n3 === `!` || n3 === `!!` ? (t2(`Verbatim tags aren't resolved, so ${e3} is invalid.`), null) : (e3[e3.length - 1] !== `>` && t2(`Verbatim tags must end with a >`), n3);
      }
      let [, n2, r2] = e3.match(/^(.*!)([^!]*)$/s);
      r2 || t2(`The ${e3} tag has no suffix`);
      let i2 = this.tags[n2];
      if (i2) try {
        return i2 + decodeURIComponent(r2);
      } catch (e4) {
        return t2(String(e4)), null;
      }
      return n2 === `!` ? e3 : (t2(`Could not resolve tag: ${e3}`), null);
    }
    tagString(e3) {
      for (let [t2, n2] of Object.entries(this.tags)) if (e3.startsWith(n2)) return t2 + ce(e3.substring(n2.length));
      return e3[0] === `!` ? e3 : `!<${e3}>`;
    }
    toString(e3) {
      let t2 = this.yaml.explicit ? [
        `%YAML ${this.yaml.version || `1.2`}`
      ] : [], n2 = Object.entries(this.tags), r2;
      if (e3 && n2.length > 0 && A(e3.contents)) {
        let t3 = {};
        N(e3.contents, (e4, n3) => {
          A(n3) && n3.tag && (t3[n3.tag] = true);
        }), r2 = Object.keys(t3);
      } else r2 = [];
      for (let [i2, a2] of n2) i2 === `!!` && a2 === `tag:yaml.org,2002:` || (!e3 || r2.some((e4) => e4.startsWith(a2))) && t2.push(`%TAG ${i2} ${a2}`);
      return t2.join(`
`);
    }
  };
  I.defaultYaml = {
    explicit: false,
    version: `1.2`
  }, I.defaultTags = {
    "!!": `tag:yaml.org,2002:`
  };
  function le(e2) {
    if (/[\x00-\x19\s,[\]{}]/.test(e2)) {
      let t2 = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e2)}`;
      throw Error(t2);
    }
    return true;
  }
  function ue(e2) {
    let t2 = /* @__PURE__ */ new Set();
    return N(e2, {
      Value(e3, n2) {
        n2.anchor && t2.add(n2.anchor);
      }
    }), t2;
  }
  function de(e2, t2) {
    for (let n2 = 1; ; ++n2) {
      let r2 = `${e2}${n2}`;
      if (!t2.has(r2)) return r2;
    }
  }
  function fe(e2, t2) {
    let n2 = [], r2 = /* @__PURE__ */ new Map(), i2 = null;
    return {
      onAnchor: (r3) => {
        n2.push(r3), i2 ?? (i2 = ue(e2));
        let a2 = de(t2, i2);
        return i2.add(a2), a2;
      },
      setAnchors: () => {
        for (let e3 of n2) {
          let t3 = r2.get(e3);
          if (typeof t3 == `object` && t3.anchor && (D(t3.node) || k(t3.node))) t3.node.anchor = t3.anchor;
          else {
            let t4 = Error(`Failed to resolve repeated object (this should not happen)`);
            throw t4.source = e3, t4;
          }
        }
      },
      sourceObjects: r2
    };
  }
  function L(e2, t2, n2, r2) {
    if (r2 && typeof r2 == `object`) if (Array.isArray(r2)) for (let t3 = 0, n3 = r2.length; t3 < n3; ++t3) {
      let n4 = r2[t3], i2 = L(e2, r2, String(t3), n4);
      i2 === void 0 ? delete r2[t3] : i2 !== n4 && (r2[t3] = i2);
    }
    else if (r2 instanceof Map) for (let t3 of Array.from(r2.keys())) {
      let n3 = r2.get(t3), i2 = L(e2, r2, t3, n3);
      i2 === void 0 ? r2.delete(t3) : i2 !== n3 && r2.set(t3, i2);
    }
    else if (r2 instanceof Set) for (let t3 of Array.from(r2)) {
      let n3 = L(e2, r2, t3, t3);
      n3 === void 0 ? r2.delete(t3) : n3 !== t3 && (r2.delete(t3), r2.add(n3));
    }
    else for (let [t3, n3] of Object.entries(r2)) {
      let i2 = L(e2, r2, t3, n3);
      i2 === void 0 ? delete r2[t3] : i2 !== n3 && (r2[t3] = i2);
    }
    return e2.call(t2, n2, r2);
  }
  function R(e2, t2, n2) {
    if (Array.isArray(e2)) return e2.map((e3, t3) => R(e3, String(t3), n2));
    if (e2 && typeof e2.toJSON == `function`) {
      if (!n2 || !te(e2)) return e2.toJSON(t2, n2);
      let r2 = {
        aliasCount: 0,
        count: 1,
        res: void 0
      };
      n2.anchors.set(e2, r2), n2.onCreate = (e3) => {
        r2.res = e3, delete n2.onCreate;
      };
      let i2 = e2.toJSON(t2, n2);
      return n2.onCreate && n2.onCreate(i2), i2;
    }
    return typeof e2 == `bigint` && !n2?.keep ? Number(e2) : e2;
  }
  var pe = class {
    constructor(e2) {
      Object.defineProperty(this, C, {
        value: e2
      });
    }
    clone() {
      let e2 = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return this.range && (e2.range = this.range.slice()), e2;
    }
    toJS(e2, { mapAsMap: t2, maxAliasCount: n2, onAnchor: r2, reviver: i2 } = {}) {
      if (!T(e2)) throw TypeError(`A document argument is required`);
      let a2 = {
        anchors: /* @__PURE__ */ new Map(),
        doc: e2,
        keep: true,
        mapAsMap: t2 === true,
        mapKeyWarned: false,
        maxAliasCount: typeof n2 == `number` ? n2 : 100
      }, o2 = R(this, ``, a2);
      if (typeof r2 == `function`) for (let { count: e3, res: t3 } of a2.anchors.values()) r2(t3, e3);
      return typeof i2 == `function` ? L(i2, {
        "": o2
      }, ``, o2) : o2;
    }
  }, me = class extends pe {
    constructor(e2) {
      super(_), this.source = e2, Object.defineProperty(this, `tag`, {
        set() {
          throw Error(`Alias nodes cannot have tags`);
        }
      });
    }
    resolve(e2, t2) {
      if (t2?.maxAliasCount === 0) throw ReferenceError(`Alias resolution is disabled`);
      let n2;
      t2?.aliasResolveCache ? n2 = t2.aliasResolveCache : (n2 = [], N(e2, {
        Node: (e3, t3) => {
          (w(t3) || te(t3)) && n2.push(t3);
        }
      }), t2 && (t2.aliasResolveCache = n2));
      let r2;
      for (let e3 of n2) {
        if (e3 === this) break;
        e3.anchor === this.source && (r2 = e3);
      }
      return r2;
    }
    toJSON(e2, t2) {
      if (!t2) return {
        source: this.source
      };
      let { anchors: n2, doc: r2, maxAliasCount: i2 } = t2, a2 = this.resolve(r2, t2);
      if (!a2) {
        let e3 = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw ReferenceError(e3);
      }
      let o2 = n2.get(a2);
      if (o2 || (o2 = (R(a2, null, t2), n2.get(a2))), o2?.res === void 0) throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);
      if (i2 >= 0 && (o2.count += 1, o2.aliasCount === 0 && (o2.aliasCount = he(r2, a2, n2)), o2.count * o2.aliasCount > i2)) throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`);
      return o2.res;
    }
    toString(e2, t2, n2) {
      let r2 = `*${this.source}`;
      if (e2) {
        if (le(this.source), e2.options.verifyAliasOrder && !e2.anchors.has(this.source)) {
          let e3 = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw Error(e3);
        }
        if (e2.implicitKey) return `${r2} `;
      }
      return r2;
    }
  };
  function he(e2, t2, n2) {
    if (w(t2)) {
      let r2 = t2.resolve(e2), i2 = n2 && r2 && n2.get(r2);
      return i2 ? i2.count * i2.aliasCount : 0;
    } else if (k(t2)) {
      let r2 = 0;
      for (let i2 of t2.items) {
        let t3 = he(e2, i2, n2);
        t3 > r2 && (r2 = t3);
      }
      return r2;
    } else if (E(t2)) {
      let r2 = he(e2, t2.key, n2), i2 = he(e2, t2.value, n2);
      return Math.max(r2, i2);
    }
    return 1;
  }
  var ge = (e2) => !e2 || typeof e2 != `function` && typeof e2 != `object`, z = class extends pe {
    constructor(e2) {
      super(x), this.value = e2;
    }
    toJSON(e2, t2) {
      return t2?.keep ? this.value : R(this.value, e2, t2);
    }
    toString() {
      return String(this.value);
    }
  };
  z.BLOCK_FOLDED = `BLOCK_FOLDED`, z.BLOCK_LITERAL = `BLOCK_LITERAL`, z.PLAIN = `PLAIN`, z.QUOTE_DOUBLE = `QUOTE_DOUBLE`, z.QUOTE_SINGLE = `QUOTE_SINGLE`;
  var _e = `tag:yaml.org,2002:`;
  function ve(e2, t2, n2) {
    if (t2) {
      let e3 = n2.filter((e4) => e4.tag === t2), r2 = e3.find((e4) => !e4.format) ?? e3[0];
      if (!r2) throw Error(`Tag ${t2} not found`);
      return r2;
    }
    return n2.find((t3) => t3.identify?.(e2) && !t3.format);
  }
  function ye(e2, t2, n2) {
    if (T(e2) && (e2 = e2.contents), A(e2)) return e2;
    if (E(e2)) {
      let t3 = n2.schema[y].createNode?.(n2.schema, null, n2);
      return t3.items.push(e2), t3;
    }
    (e2 instanceof String || e2 instanceof Number || e2 instanceof Boolean || typeof BigInt < `u` && e2 instanceof BigInt) && (e2 = e2.valueOf());
    let { aliasDuplicateObjects: r2, onAnchor: i2, onTagObj: a2, schema: o2, sourceObjects: s2 } = n2, c2;
    if (r2 && e2 && typeof e2 == `object`) {
      if (c2 = s2.get(e2), c2) return c2.anchor ?? (c2.anchor = i2(e2)), new me(c2.anchor);
      c2 = {
        anchor: null,
        node: null
      }, s2.set(e2, c2);
    }
    t2?.startsWith(`!!`) && (t2 = _e + t2.slice(2));
    let l2 = ve(e2, t2, o2.tags);
    if (!l2) {
      if (e2 && typeof e2.toJSON == `function` && (e2 = e2.toJSON()), !e2 || typeof e2 != `object`) {
        let t3 = new z(e2);
        return c2 && (c2.node = t3), t3;
      }
      l2 = e2 instanceof Map ? o2[y] : Symbol.iterator in Object(e2) ? o2[S] : o2[y];
    }
    a2 && (a2(l2), delete n2.onTagObj);
    let u2 = l2?.createNode ? l2.createNode(n2.schema, e2, n2) : typeof l2?.nodeClass?.from == `function` ? l2.nodeClass.from(n2.schema, e2, n2) : new z(e2);
    return t2 ? u2.tag = t2 : l2.default || (u2.tag = l2.tag), c2 && (c2.node = u2), u2;
  }
  function be(e2, t2, n2) {
    let r2 = n2;
    for (let e3 = t2.length - 1; e3 >= 0; --e3) {
      let n3 = t2[e3];
      if (typeof n3 == `number` && Number.isInteger(n3) && n3 >= 0) {
        let e4 = [];
        e4[n3] = r2, r2 = e4;
      } else r2 = /* @__PURE__ */ new Map([
        [
          n3,
          r2
        ]
      ]);
    }
    return ye(r2, void 0, {
      aliasDuplicateObjects: false,
      keepUndefined: false,
      onAnchor: () => {
        throw Error(`This should not happen, please report a bug.`);
      },
      schema: e2,
      sourceObjects: /* @__PURE__ */ new Map()
    });
  }
  var B = (e2) => e2 == null || typeof e2 == `object` && !!e2[Symbol.iterator]().next().done, xe = class extends pe {
    constructor(e2, t2) {
      super(e2), Object.defineProperty(this, `schema`, {
        value: t2,
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
    clone(e2) {
      let t2 = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return e2 && (t2.schema = e2), t2.items = t2.items.map((t3) => A(t3) || E(t3) ? t3.clone(e2) : t3), this.range && (t2.range = this.range.slice()), t2;
    }
    addIn(e2, t2) {
      if (B(e2)) this.add(t2);
      else {
        let [n2, ...r2] = e2, i2 = this.get(n2, true);
        if (k(i2)) i2.addIn(r2, t2);
        else if (i2 === void 0 && this.schema) this.set(n2, be(this.schema, r2, t2));
        else throw Error(`Expected YAML collection at ${n2}. Remaining path: ${r2}`);
      }
    }
    deleteIn(e2) {
      let [t2, ...n2] = e2;
      if (n2.length === 0) return this.delete(t2);
      let r2 = this.get(t2, true);
      if (k(r2)) return r2.deleteIn(n2);
      throw Error(`Expected YAML collection at ${t2}. Remaining path: ${n2}`);
    }
    getIn(e2, t2) {
      let [n2, ...r2] = e2, i2 = this.get(n2, true);
      return r2.length === 0 ? !t2 && D(i2) ? i2.value : i2 : k(i2) ? i2.getIn(r2, t2) : void 0;
    }
    hasAllNullValues(e2) {
      return this.items.every((t2) => {
        if (!E(t2)) return false;
        let n2 = t2.value;
        return n2 == null || e2 && D(n2) && n2.value == null && !n2.commentBefore && !n2.comment && !n2.tag;
      });
    }
    hasIn(e2) {
      let [t2, ...n2] = e2;
      if (n2.length === 0) return this.has(t2);
      let r2 = this.get(t2, true);
      return k(r2) ? r2.hasIn(n2) : false;
    }
    setIn(e2, t2) {
      let [n2, ...r2] = e2;
      if (r2.length === 0) this.set(n2, t2);
      else {
        let e3 = this.get(n2, true);
        if (k(e3)) e3.setIn(r2, t2);
        else if (e3 === void 0 && this.schema) this.set(n2, be(this.schema, r2, t2));
        else throw Error(`Expected YAML collection at ${n2}. Remaining path: ${r2}`);
      }
    }
  }, Se = (e2) => e2.replace(/^(?!$)(?: $)?/gm, `#`);
  function V(e2, t2) {
    return /^\n+$/.test(e2) ? e2.substring(1) : t2 ? e2.replace(/^(?! *$)/gm, t2) : e2;
  }
  var H = (e2, t2, n2) => e2.endsWith(`
`) ? V(n2, t2) : n2.includes(`
`) ? `
` + V(n2, t2) : (e2.endsWith(` `) ? `` : ` `) + n2, Ce = `flow`, we = `block`, Te = `quoted`;
  function Ee(e2, t2, n2 = `flow`, { indentAtStart: r2, lineWidth: i2 = 80, minContentWidth: a2 = 20, onFold: o2, onOverflow: s2 } = {}) {
    if (!i2 || i2 < 0) return e2;
    i2 < a2 && (a2 = 0);
    let c2 = Math.max(1 + a2, 1 + i2 - t2.length);
    if (e2.length <= c2) return e2;
    let l2 = [], u2 = {}, d2 = i2 - t2.length;
    typeof r2 == `number` && (r2 > i2 - Math.max(2, a2) ? l2.push(0) : d2 = i2 - r2);
    let f2, p2, m2 = false, h2 = -1, g2 = -1, _2 = -1;
    n2 === `block` && (h2 = De(e2, h2, t2.length), h2 !== -1 && (d2 = h2 + c2));
    for (let r3; r3 = e2[h2 += 1]; ) {
      if (n2 === `quoted` && r3 === `\\`) {
        switch (g2 = h2, e2[h2 + 1]) {
          case `x`:
            h2 += 3;
            break;
          case `u`:
            h2 += 5;
            break;
          case `U`:
            h2 += 9;
            break;
          default:
            h2 += 1;
        }
        _2 = h2;
      }
      if (r3 === `
`) n2 === `block` && (h2 = De(e2, h2, t2.length)), d2 = h2 + t2.length + c2, f2 = void 0;
      else {
        if (r3 === ` ` && p2 && p2 !== ` ` && p2 !== `
` && p2 !== `	`) {
          let t3 = e2[h2 + 1];
          t3 && t3 !== ` ` && t3 !== `
` && t3 !== `	` && (f2 = h2);
        }
        if (h2 >= d2) if (f2) l2.push(f2), d2 = f2 + c2, f2 = void 0;
        else if (n2 === `quoted`) {
          for (; p2 === ` ` || p2 === `	`; ) p2 = r3, r3 = e2[h2 += 1], m2 = true;
          let t3 = h2 > _2 + 1 ? h2 - 2 : g2 - 1;
          if (u2[t3]) return e2;
          l2.push(t3), u2[t3] = true, d2 = t3 + c2, f2 = void 0;
        } else m2 = true;
      }
      p2 = r3;
    }
    if (m2 && s2 && s2(), l2.length === 0) return e2;
    o2 && o2();
    let v2 = e2.slice(0, l2[0]);
    for (let r3 = 0; r3 < l2.length; ++r3) {
      let i3 = l2[r3], a3 = l2[r3 + 1] || e2.length;
      i3 === 0 ? v2 = `
${t2}${e2.slice(0, a3)}` : (n2 === `quoted` && u2[i3] && (v2 += `${e2[i3]}\\`), v2 += `
${t2}${e2.slice(i3 + 1, a3)}`);
    }
    return v2;
  }
  function De(e2, t2, n2) {
    let r2 = t2, i2 = t2 + 1, a2 = e2[i2];
    for (; a2 === ` ` || a2 === `	`; ) if (t2 < i2 + n2) a2 = e2[++t2];
    else {
      do
        a2 = e2[++t2];
      while (a2 && a2 !== `
`);
      r2 = t2, i2 = t2 + 1, a2 = e2[i2];
    }
    return r2;
  }
  var Oe = (e2, t2) => ({
    indentAtStart: t2 ? e2.indent.length : e2.indentAtStart,
    lineWidth: e2.options.lineWidth,
    minContentWidth: e2.options.minContentWidth
  }), ke = (e2) => /^(%|---|\.\.\.)/m.test(e2);
  function Ae(e2, t2, n2) {
    if (!t2 || t2 < 0) return false;
    let r2 = t2 - n2, i2 = e2.length;
    if (i2 <= r2) return false;
    for (let t3 = 0, n3 = 0; t3 < i2; ++t3) if (e2[t3] === `
`) {
      if (t3 - n3 > r2) return true;
      if (n3 = t3 + 1, i2 - n3 <= r2) return false;
    }
    return true;
  }
  function je(e2, t2) {
    let n2 = JSON.stringify(e2);
    if (t2.options.doubleQuotedAsJSON) return n2;
    let { implicitKey: r2 } = t2, i2 = t2.options.doubleQuotedMinMultiLineLength, a2 = t2.indent || (ke(e2) ? `  ` : ``), o2 = ``, s2 = 0;
    for (let e3 = 0, t3 = n2[e3]; t3; t3 = n2[++e3]) if (t3 === ` ` && n2[e3 + 1] === `\\` && n2[e3 + 2] === `n` && (o2 += n2.slice(s2, e3) + `\\ `, e3 += 1, s2 = e3, t3 = `\\`), t3 === `\\`) switch (n2[e3 + 1]) {
      case `u`:
        {
          o2 += n2.slice(s2, e3);
          let t4 = n2.substr(e3 + 2, 4);
          switch (t4) {
            case `0000`:
              o2 += `\\0`;
              break;
            case `0007`:
              o2 += `\\a`;
              break;
            case `000b`:
              o2 += `\\v`;
              break;
            case `001b`:
              o2 += `\\e`;
              break;
            case `0085`:
              o2 += `\\N`;
              break;
            case `00a0`:
              o2 += `\\_`;
              break;
            case `2028`:
              o2 += `\\L`;
              break;
            case `2029`:
              o2 += `\\P`;
              break;
            default:
              t4.substr(0, 2) === `00` ? o2 += `\\x` + t4.substr(2) : o2 += n2.substr(e3, 6);
          }
          e3 += 5, s2 = e3 + 1;
        }
        break;
      case `n`:
        if (r2 || n2[e3 + 2] === `"` || n2.length < i2) e3 += 1;
        else {
          for (o2 += n2.slice(s2, e3) + `

`; n2[e3 + 2] === `\\` && n2[e3 + 3] === `n` && n2[e3 + 4] !== `"`; ) o2 += `
`, e3 += 2;
          o2 += a2, n2[e3 + 2] === ` ` && (o2 += `\\`), e3 += 1, s2 = e3 + 1;
        }
        break;
      default:
        e3 += 1;
    }
    return o2 = s2 ? o2 + n2.slice(s2) : n2, r2 ? o2 : Ee(o2, a2, Te, Oe(t2, false));
  }
  function Me(e2, t2) {
    if (t2.options.singleQuote === false || t2.implicitKey && e2.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e2)) return je(e2, t2);
    let n2 = t2.indent || (ke(e2) ? `  ` : ``), r2 = `'` + e2.replace(/'/g, `''`).replace(/\n+/g, `$&
${n2}`) + `'`;
    return t2.implicitKey ? r2 : Ee(r2, n2, Ce, Oe(t2, false));
  }
  function U(e2, t2) {
    let { singleQuote: n2 } = t2.options, r2;
    if (n2 === false) r2 = je;
    else {
      let t3 = e2.includes(`"`), i2 = e2.includes(`'`);
      r2 = t3 && !i2 ? Me : i2 && !t3 ? je : n2 ? Me : je;
    }
    return r2(e2, t2);
  }
  var Ne;
  try {
    Ne = RegExp(`(^|(?<!
))
+(?!
|$)`, `g`);
  } catch {
    Ne = /\n+(?!\n|$)/g;
  }
  function Pe({ comment: e2, type: t2, value: n2 }, r2, i2, a2) {
    let { blockQuote: o2, commentString: s2, lineWidth: c2 } = r2.options;
    if (!o2 || /\n[\t ]+$/.test(n2)) return U(n2, r2);
    let l2 = r2.indent || (r2.forceBlockIndent || ke(n2) ? `  ` : ``), u2 = o2 === `literal` ? true : o2 === `folded` || t2 === z.BLOCK_FOLDED ? false : t2 === z.BLOCK_LITERAL ? true : !Ae(n2, c2, l2.length);
    if (!n2) return u2 ? `|
` : `>
`;
    let d2, f2;
    for (f2 = n2.length; f2 > 0; --f2) {
      let e3 = n2[f2 - 1];
      if (e3 !== `
` && e3 !== `	` && e3 !== ` `) break;
    }
    let p2 = n2.substring(f2), m2 = p2.indexOf(`
`);
    m2 === -1 ? d2 = `-` : n2 === p2 || m2 !== p2.length - 1 ? (d2 = `+`, a2 && a2()) : d2 = ``, p2 && (p2 = (n2 = n2.slice(0, -p2.length), p2[p2.length - 1] === `
` && (p2 = p2.slice(0, -1)), p2.replace(Ne, `$&${l2}`)));
    let h2 = false, g2, _2 = -1;
    for (g2 = 0; g2 < n2.length; ++g2) {
      let e3 = n2[g2];
      if (e3 === ` `) h2 = true;
      else if (e3 === `
`) _2 = g2;
      else break;
    }
    let v2 = n2.substring(0, _2 < g2 ? _2 + 1 : g2);
    v2 && (v2 = (n2 = n2.substring(v2.length), v2.replace(/\n+/g, `$&${l2}`)));
    let y2 = (h2 ? l2 ? `2` : `1` : ``) + d2;
    if (e2 && (y2 += ` ` + s2(e2.replace(/ ?[\r\n]+/g, ` `)), i2 && i2()), !u2) {
      let e3 = n2.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, `$1$2`).replace(/\n+/g, `$&${l2}`), i3 = false, a3 = Oe(r2, true);
      o2 !== `folded` && t2 !== z.BLOCK_FOLDED && (a3.onOverflow = () => {
        i3 = true;
      });
      let s3 = Ee(`${v2}${e3}${p2}`, l2, we, a3);
      if (!i3) return `>${y2}
${l2}${s3}`;
    }
    return n2 = n2.replace(/\n+/g, `$&${l2}`), `|${y2}
${l2}${v2}${n2}${p2}`;
  }
  function Fe(e2, t2, n2, r2) {
    let { type: i2, value: a2 } = e2, { actualString: o2, implicitKey: s2, indent: c2, indentStep: l2, inFlow: u2 } = t2;
    if (s2 && a2.includes(`
`) || u2 && /[[\]{},]/.test(a2)) return U(a2, t2);
    if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a2)) return s2 || u2 || !a2.includes(`
`) ? U(a2, t2) : Pe(e2, t2, n2, r2);
    if (!s2 && !u2 && i2 !== z.PLAIN && a2.includes(`
`)) return Pe(e2, t2, n2, r2);
    if (ke(a2)) {
      if (c2 === ``) return t2.forceBlockIndent = true, Pe(e2, t2, n2, r2);
      if (s2 && c2 === l2) return U(a2, t2);
    }
    let d2 = a2.replace(/\n+/g, `$&
${c2}`);
    if (o2) {
      let e3 = (e4) => e4.default && e4.tag !== `tag:yaml.org,2002:str` && e4.test?.test(d2), { compat: n3, tags: r3 } = t2.doc.schema;
      if (r3.some(e3) || n3?.some(e3)) return U(a2, t2);
    }
    return s2 ? d2 : Ee(d2, c2, Ce, Oe(t2, false));
  }
  function Ie(e2, t2, n2, r2) {
    let { implicitKey: i2, inFlow: a2 } = t2, o2 = typeof e2.value == `string` ? e2 : Object.assign({}, e2, {
      value: String(e2.value)
    }), { type: s2 } = e2;
    s2 !== z.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o2.value) && (s2 = z.QUOTE_DOUBLE);
    let c2 = (e3) => {
      switch (e3) {
        case z.BLOCK_FOLDED:
        case z.BLOCK_LITERAL:
          return i2 || a2 ? U(o2.value, t2) : Pe(o2, t2, n2, r2);
        case z.QUOTE_DOUBLE:
          return je(o2.value, t2);
        case z.QUOTE_SINGLE:
          return Me(o2.value, t2);
        case z.PLAIN:
          return Fe(o2, t2, n2, r2);
        default:
          return null;
      }
    }, l2 = c2(s2);
    if (l2 === null) {
      let { defaultKeyType: e3, defaultStringType: n3 } = t2.options, r3 = i2 && e3 || n3;
      if (l2 = c2(r3), l2 === null) throw Error(`Unsupported default string type ${r3}`);
    }
    return l2;
  }
  function Le(e2, t2) {
    let n2 = Object.assign({
      blockQuote: true,
      commentString: Se,
      defaultKeyType: null,
      defaultStringType: `PLAIN`,
      directives: null,
      doubleQuotedAsJSON: false,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: `false`,
      flowCollectionPadding: true,
      indentSeq: true,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: `null`,
      simpleKeys: false,
      singleQuote: null,
      trailingComma: false,
      trueStr: `true`,
      verifyAliasOrder: true
    }, e2.schema.toStringOptions, t2), r2;
    switch (n2.collectionStyle) {
      case `block`:
        r2 = false;
        break;
      case `flow`:
        r2 = true;
        break;
      default:
        r2 = null;
    }
    return {
      anchors: /* @__PURE__ */ new Set(),
      doc: e2,
      flowCollectionPadding: n2.flowCollectionPadding ? ` ` : ``,
      indent: ``,
      indentStep: typeof n2.indent == `number` ? ` `.repeat(n2.indent) : `  `,
      inFlow: r2,
      options: n2
    };
  }
  function Re(e2, t2) {
    if (t2.tag) {
      let n3 = e2.filter((e3) => e3.tag === t2.tag);
      if (n3.length > 0) return n3.find((e3) => e3.format === t2.format) ?? n3[0];
    }
    let n2, r2;
    if (D(t2)) {
      r2 = t2.value;
      let i2 = e2.filter((e3) => e3.identify?.(r2));
      if (i2.length > 1) {
        let e3 = i2.filter((e4) => e4.test);
        e3.length > 0 && (i2 = e3);
      }
      n2 = i2.find((e3) => e3.format === t2.format) ?? i2.find((e3) => !e3.format);
    } else r2 = t2, n2 = e2.find((e3) => e3.nodeClass && r2 instanceof e3.nodeClass);
    if (!n2) {
      let e3 = r2?.constructor?.name ?? (r2 === null ? `null` : typeof r2);
      throw Error(`Tag not resolved for ${e3} value`);
    }
    return n2;
  }
  function ze(e2, t2, { anchors: n2, doc: r2 }) {
    if (!r2.directives) return ``;
    let i2 = [], a2 = (D(e2) || k(e2)) && e2.anchor;
    a2 && le(a2) && (n2.add(a2), i2.push(`&${a2}`));
    let o2 = e2.tag ?? (t2.default ? null : t2.tag);
    return o2 && i2.push(r2.directives.tagString(o2)), i2.join(` `);
  }
  function W(e2, t2, n2, r2) {
    if (E(e2)) return e2.toString(t2, n2, r2);
    if (w(e2)) {
      if (t2.doc.directives) return e2.toString(t2);
      if (t2.resolvedAliases?.has(e2)) throw TypeError(`Cannot stringify circular structure without alias nodes`);
      t2.resolvedAliases ? t2.resolvedAliases.add(e2) : t2.resolvedAliases = /* @__PURE__ */ new Set([
        e2
      ]), e2 = e2.resolve(t2.doc);
    }
    let i2, a2 = A(e2) ? e2 : t2.doc.createNode(e2, {
      onTagObj: (e3) => i2 = e3
    });
    i2 ?? (i2 = Re(t2.doc.schema.tags, a2));
    let o2 = ze(a2, i2, t2);
    o2.length > 0 && (t2.indentAtStart = (t2.indentAtStart ?? 0) + o2.length + 1);
    let s2 = typeof i2.stringify == `function` ? i2.stringify(a2, t2, n2, r2) : D(a2) ? Ie(a2, t2, n2, r2) : a2.toString(t2, n2, r2);
    return o2 ? D(a2) || s2[0] === `{` || s2[0] === `[` ? `${o2} ${s2}` : `${o2}
${t2.indent}${s2}` : s2;
  }
  function Be({ key: e2, value: t2 }, n2, r2, i2) {
    let { allNullValues: a2, doc: o2, indent: s2, indentStep: c2, options: { commentString: l2, indentSeq: u2, simpleKeys: d2 } } = n2, f2 = A(e2) && e2.comment || null;
    if (d2) {
      if (f2) throw Error(`With simple keys, key nodes cannot have comments`);
      if (k(e2) || !A(e2) && typeof e2 == `object`) throw Error(`With simple keys, collection cannot be used as a key value`);
    }
    let p2 = !d2 && (!e2 || f2 && t2 == null && !n2.inFlow || k(e2) || (D(e2) ? e2.type === z.BLOCK_FOLDED || e2.type === z.BLOCK_LITERAL : typeof e2 == `object`));
    n2 = Object.assign({}, n2, {
      allNullValues: false,
      implicitKey: !p2 && (d2 || !a2),
      indent: s2 + c2
    });
    let m2 = false, h2 = false, g2 = W(e2, n2, () => m2 = true, () => h2 = true);
    if (!p2 && !n2.inFlow && g2.length > 1024) {
      if (d2) throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);
      p2 = true;
    }
    if (n2.inFlow) {
      if (a2 || t2 == null) return m2 && r2 && r2(), g2 === `` ? `?` : p2 ? `? ${g2}` : g2;
    } else if (a2 && !d2 || t2 == null && p2) return g2 = `? ${g2}`, f2 && !m2 ? g2 += H(g2, n2.indent, l2(f2)) : h2 && i2 && i2(), g2;
    m2 && (f2 = null), p2 ? (f2 && (g2 += H(g2, n2.indent, l2(f2))), g2 = `? ${g2}
${s2}:`) : (g2 = `${g2}:`, f2 && (g2 += H(g2, n2.indent, l2(f2))));
    let _2, v2, y2;
    A(t2) ? (_2 = !!t2.spaceBefore, v2 = t2.commentBefore, y2 = t2.comment) : (_2 = false, v2 = null, y2 = null, t2 && typeof t2 == `object` && (t2 = o2.createNode(t2))), n2.implicitKey = false, !p2 && !f2 && D(t2) && (n2.indentAtStart = g2.length + 1), h2 = false, !u2 && c2.length >= 2 && !n2.inFlow && !p2 && O(t2) && !t2.flow && !t2.tag && !t2.anchor && (n2.indent = n2.indent.substring(2));
    let b2 = false, x2 = W(t2, n2, () => b2 = true, () => h2 = true), S2 = ` `;
    if (f2 || _2 || v2) {
      if (S2 = _2 ? `
` : ``, v2) {
        let e3 = l2(v2);
        S2 += `
${V(e3, n2.indent)}`;
      }
      x2 === `` && !n2.inFlow ? S2 === `
` && y2 && (S2 = `

`) : S2 += `
${n2.indent}`;
    } else if (!p2 && k(t2)) {
      let e3 = x2[0], r3 = x2.indexOf(`
`), i3 = r3 !== -1, a3 = n2.inFlow ?? t2.flow ?? t2.items.length === 0;
      if (i3 || !a3) {
        let t3 = false;
        if (i3 && (e3 === `&` || e3 === `!`)) {
          let n3 = x2.indexOf(` `);
          e3 === `&` && n3 !== -1 && n3 < r3 && x2[n3 + 1] === `!` && (n3 = x2.indexOf(` `, n3 + 1)), (n3 === -1 || r3 < n3) && (t3 = true);
        }
        t3 || (S2 = `
${n2.indent}`);
      }
    } else (x2 === `` || x2[0] === `
`) && (S2 = ``);
    return g2 += S2 + x2, n2.inFlow ? b2 && r2 && r2() : y2 && !b2 ? g2 += H(g2, n2.indent, l2(y2)) : h2 && i2 && i2(), g2;
  }
  function Ve(e2, t2) {
    (e2 === `debug` || e2 === `warn`) && console.warn(t2);
  }
  var He = `<<`, G = {
    identify: (e2) => e2 === He || typeof e2 == `symbol` && e2.description === He,
    default: `key`,
    tag: `tag:yaml.org,2002:merge`,
    test: /^<<$/,
    resolve: () => Object.assign(new z(Symbol(He)), {
      addToJSMap: We
    }),
    stringify: () => He
  }, Ue = (e2, t2) => (G.identify(t2) || D(t2) && (!t2.type || t2.type === z.PLAIN) && G.identify(t2.value)) && e2?.doc.schema.tags.some((e3) => e3.tag === G.tag && e3.default);
  function We(e2, t2, n2) {
    let r2 = Ke(e2, n2);
    if (O(r2)) for (let n3 of r2.items) Ge(e2, t2, n3);
    else if (Array.isArray(r2)) for (let n3 of r2) Ge(e2, t2, n3);
    else Ge(e2, t2, r2);
  }
  function Ge(e2, t2, n2) {
    let r2 = Ke(e2, n2);
    if (!ee(r2)) throw Error(`Merge sources must be maps or map aliases`);
    let i2 = r2.toJSON(null, e2, Map);
    for (let [e3, n3] of i2) t2 instanceof Map ? t2.has(e3) || t2.set(e3, n3) : t2 instanceof Set ? t2.add(e3) : Object.prototype.hasOwnProperty.call(t2, e3) || Object.defineProperty(t2, e3, {
      value: n3,
      writable: true,
      enumerable: true,
      configurable: true
    });
    return t2;
  }
  function Ke(e2, t2) {
    return e2 && w(t2) ? t2.resolve(e2.doc, e2) : t2;
  }
  function qe(e2, t2, { key: n2, value: r2 }) {
    if (A(n2) && n2.addToJSMap) n2.addToJSMap(e2, t2, r2);
    else if (Ue(e2, n2)) We(e2, t2, r2);
    else {
      let i2 = R(n2, ``, e2);
      if (t2 instanceof Map) t2.set(i2, R(r2, i2, e2));
      else if (t2 instanceof Set) t2.add(i2);
      else {
        let a2 = Je(n2, i2, e2), o2 = R(r2, a2, e2);
        a2 in t2 ? Object.defineProperty(t2, a2, {
          value: o2,
          writable: true,
          enumerable: true,
          configurable: true
        }) : t2[a2] = o2;
      }
    }
    return t2;
  }
  function Je(e2, t2, n2) {
    if (t2 === null) return ``;
    if (typeof t2 != `object`) return String(t2);
    if (A(e2) && n2?.doc) {
      let t3 = Le(n2.doc, {});
      t3.anchors = /* @__PURE__ */ new Set();
      for (let e3 of n2.anchors.keys()) t3.anchors.add(e3.anchor);
      t3.inFlow = true, t3.inStringifyKey = true;
      let r2 = e2.toString(t3);
      if (!n2.mapKeyWarned) {
        let e3 = JSON.stringify(r2);
        e3.length > 40 && (e3 = e3.substring(0, 36) + `..."`), Ve(n2.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e3}. Set mapAsMap: true to use object keys.`), n2.mapKeyWarned = true;
      }
      return r2;
    }
    return JSON.stringify(t2);
  }
  function Ye(e2, t2, n2) {
    return new K(ye(e2, void 0, n2), ye(t2, void 0, n2));
  }
  var K = class e2 {
    constructor(e3, t2 = null) {
      Object.defineProperty(this, C, {
        value: b
      }), this.key = e3, this.value = t2;
    }
    clone(t2) {
      let { key: n2, value: r2 } = this;
      return A(n2) && (n2 = n2.clone(t2)), A(r2) && (r2 = r2.clone(t2)), new e2(n2, r2);
    }
    toJSON(e3, t2) {
      return qe(t2, t2?.mapAsMap ? /* @__PURE__ */ new Map() : {}, this);
    }
    toString(e3, t2, n2) {
      return e3?.doc ? Be(this, e3, t2, n2) : JSON.stringify(this);
    }
  };
  function Xe(e2, t2, n2) {
    return (t2.inFlow ?? e2.flow ? Qe : Ze)(e2, t2, n2);
  }
  function Ze({ comment: e2, items: t2 }, n2, { blockItemPrefix: r2, flowChars: i2, itemIndent: a2, onChompKeep: o2, onComment: s2 }) {
    let { indent: c2, options: { commentString: l2 } } = n2, u2 = Object.assign({}, n2, {
      indent: a2,
      type: null
    }), d2 = false, f2 = [];
    for (let e3 = 0; e3 < t2.length; ++e3) {
      let i3 = t2[e3], o3 = null;
      if (A(i3)) !d2 && i3.spaceBefore && f2.push(``), $e(n2, f2, i3.commentBefore, d2), i3.comment && (o3 = i3.comment);
      else if (E(i3)) {
        let e4 = A(i3.key) ? i3.key : null;
        e4 && (!d2 && e4.spaceBefore && f2.push(``), $e(n2, f2, e4.commentBefore, d2));
      }
      d2 = false;
      let s3 = W(i3, u2, () => o3 = null, () => d2 = true);
      o3 && (s3 += H(s3, a2, l2(o3))), d2 && o3 && (d2 = false), f2.push(r2 + s3);
    }
    let p2;
    if (f2.length === 0) p2 = i2.start + i2.end;
    else {
      p2 = f2[0];
      for (let e3 = 1; e3 < f2.length; ++e3) {
        let t3 = f2[e3];
        p2 += t3 ? `
${c2}${t3}` : `
`;
      }
    }
    return e2 ? (p2 += `
` + V(l2(e2), c2), s2 && s2()) : d2 && o2 && o2(), p2;
  }
  function Qe({ items: e2 }, t2, { flowChars: n2, itemIndent: r2 }) {
    let { indent: i2, indentStep: a2, flowCollectionPadding: o2, options: { commentString: s2 } } = t2;
    r2 += a2;
    let c2 = Object.assign({}, t2, {
      indent: r2,
      inFlow: true,
      type: null
    }), l2 = false, u2 = 0, d2 = [];
    for (let n3 = 0; n3 < e2.length; ++n3) {
      let i3 = e2[n3], a3 = null;
      if (A(i3)) i3.spaceBefore && d2.push(``), $e(t2, d2, i3.commentBefore, false), i3.comment && (a3 = i3.comment);
      else if (E(i3)) {
        let e3 = A(i3.key) ? i3.key : null;
        e3 && (e3.spaceBefore && d2.push(``), $e(t2, d2, e3.commentBefore, false), e3.comment && (l2 = true));
        let n4 = A(i3.value) ? i3.value : null;
        n4 ? (n4.comment && (a3 = n4.comment), n4.commentBefore && (l2 = true)) : i3.value == null && e3?.comment && (a3 = e3.comment);
      }
      a3 && (l2 = true);
      let o3 = W(i3, c2, () => a3 = null);
      l2 || (l2 = d2.length > u2 || o3.includes(`
`)), n3 < e2.length - 1 ? o3 += `,` : t2.options.trailingComma && (t2.options.lineWidth > 0 && (l2 || (l2 = d2.reduce((e3, t3) => e3 + t3.length + 2, 2) + (o3.length + 2) > t2.options.lineWidth)), l2 && (o3 += `,`)), a3 && (o3 += H(o3, r2, s2(a3))), d2.push(o3), u2 = d2.length;
    }
    let { start: f2, end: p2 } = n2;
    if (d2.length === 0) return f2 + p2;
    if (!l2) {
      let e3 = d2.reduce((e4, t3) => e4 + t3.length + 2, 2);
      l2 = t2.options.lineWidth > 0 && e3 > t2.options.lineWidth;
    }
    if (l2) {
      let e3 = f2;
      for (let t3 of d2) e3 += t3 ? `
${a2}${i2}${t3}` : `
`;
      return `${e3}
${i2}${p2}`;
    } else return `${f2}${o2}${d2.join(` `)}${o2}${p2}`;
  }
  function $e({ indent: e2, options: { commentString: t2 } }, n2, r2, i2) {
    if (r2 && i2 && (r2 = r2.replace(/^\n+/, ``)), r2) {
      let i3 = V(t2(r2), e2);
      n2.push(i3.trimStart());
    }
  }
  function q(e2, t2) {
    let n2 = D(t2) ? t2.value : t2;
    for (let r2 of e2) if (E(r2) && (r2.key === t2 || r2.key === n2 || D(r2.key) && r2.key.value === n2)) return r2;
  }
  var J = class extends xe {
    static get tagName() {
      return `tag:yaml.org,2002:map`;
    }
    constructor(e2) {
      super(y, e2), this.items = [];
    }
    static from(e2, t2, n2) {
      let { keepUndefined: r2, replacer: i2 } = n2, a2 = new this(e2), o2 = (e3, o3) => {
        if (typeof i2 == `function`) o3 = i2.call(t2, e3, o3);
        else if (Array.isArray(i2) && !i2.includes(e3)) return;
        (o3 !== void 0 || r2) && a2.items.push(Ye(e3, o3, n2));
      };
      if (t2 instanceof Map) for (let [e3, n3] of t2) o2(e3, n3);
      else if (t2 && typeof t2 == `object`) for (let e3 of Object.keys(t2)) o2(e3, t2[e3]);
      return typeof e2.sortMapEntries == `function` && a2.items.sort(e2.sortMapEntries), a2;
    }
    add(e2, t2) {
      let n2;
      n2 = E(e2) ? e2 : !e2 || typeof e2 != `object` || !(`key` in e2) ? new K(e2, e2?.value) : new K(e2.key, e2.value);
      let r2 = q(this.items, n2.key), i2 = this.schema?.sortMapEntries;
      if (r2) {
        if (!t2) throw Error(`Key ${n2.key} already set`);
        D(r2.value) && ge(n2.value) ? r2.value.value = n2.value : r2.value = n2.value;
      } else if (i2) {
        let e3 = this.items.findIndex((e4) => i2(n2, e4) < 0);
        e3 === -1 ? this.items.push(n2) : this.items.splice(e3, 0, n2);
      } else this.items.push(n2);
    }
    delete(e2) {
      let t2 = q(this.items, e2);
      return t2 ? this.items.splice(this.items.indexOf(t2), 1).length > 0 : false;
    }
    get(e2, t2) {
      let n2 = q(this.items, e2)?.value;
      return (!t2 && D(n2) ? n2.value : n2) ?? void 0;
    }
    has(e2) {
      return !!q(this.items, e2);
    }
    set(e2, t2) {
      this.add(new K(e2, t2), true);
    }
    toJSON(e2, t2, n2) {
      let r2 = n2 ? new n2() : t2?.mapAsMap ? /* @__PURE__ */ new Map() : {};
      t2?.onCreate && t2.onCreate(r2);
      for (let e3 of this.items) qe(t2, r2, e3);
      return r2;
    }
    toString(e2, t2, n2) {
      if (!e2) return JSON.stringify(this);
      for (let e3 of this.items) if (!E(e3)) throw Error(`Map items must all be pairs; found ${JSON.stringify(e3)} instead`);
      return !e2.allNullValues && this.hasAllNullValues(false) && (e2 = Object.assign({}, e2, {
        allNullValues: true
      })), Xe(this, e2, {
        blockItemPrefix: ``,
        flowChars: {
          start: `{`,
          end: `}`
        },
        itemIndent: e2.indent || ``,
        onChompKeep: n2,
        onComment: t2
      });
    }
  }, Y = {
    collection: `map`,
    default: true,
    nodeClass: J,
    tag: `tag:yaml.org,2002:map`,
    resolve(e2, t2) {
      return ee(e2) || t2(`Expected a mapping for this tag`), e2;
    },
    createNode: (e2, t2, n2) => J.from(e2, t2, n2)
  }, et = class extends xe {
    static get tagName() {
      return `tag:yaml.org,2002:seq`;
    }
    constructor(e2) {
      super(S, e2), this.items = [];
    }
    add(e2) {
      this.items.push(e2);
    }
    delete(e2) {
      let t2 = tt(e2);
      return typeof t2 == `number` ? this.items.splice(t2, 1).length > 0 : false;
    }
    get(e2, t2) {
      let n2 = tt(e2);
      if (typeof n2 != `number`) return;
      let r2 = this.items[n2];
      return !t2 && D(r2) ? r2.value : r2;
    }
    has(e2) {
      let t2 = tt(e2);
      return typeof t2 == `number` && t2 < this.items.length;
    }
    set(e2, t2) {
      let n2 = tt(e2);
      if (typeof n2 != `number`) throw Error(`Expected a valid index, not ${e2}.`);
      let r2 = this.items[n2];
      D(r2) && ge(t2) ? r2.value = t2 : this.items[n2] = t2;
    }
    toJSON(e2, t2) {
      let n2 = [];
      t2?.onCreate && t2.onCreate(n2);
      let r2 = 0;
      for (let e3 of this.items) n2.push(R(e3, String(r2++), t2));
      return n2;
    }
    toString(e2, t2, n2) {
      return e2 ? Xe(this, e2, {
        blockItemPrefix: `- `,
        flowChars: {
          start: `[`,
          end: `]`
        },
        itemIndent: (e2.indent || ``) + `  `,
        onChompKeep: n2,
        onComment: t2
      }) : JSON.stringify(this);
    }
    static from(e2, t2, n2) {
      let { replacer: r2 } = n2, i2 = new this(e2);
      if (t2 && Symbol.iterator in Object(t2)) {
        let e3 = 0;
        for (let a2 of t2) {
          if (typeof r2 == `function`) {
            let n3 = t2 instanceof Set ? a2 : String(e3++);
            a2 = r2.call(t2, n3, a2);
          }
          i2.items.push(ye(a2, void 0, n2));
        }
      }
      return i2;
    }
  };
  function tt(e2) {
    let t2 = D(e2) ? e2.value : e2;
    return t2 && typeof t2 == `string` && (t2 = Number(t2)), typeof t2 == `number` && Number.isInteger(t2) && t2 >= 0 ? t2 : null;
  }
  var X = {
    collection: `seq`,
    default: true,
    nodeClass: et,
    tag: `tag:yaml.org,2002:seq`,
    resolve(e2, t2) {
      return O(e2) || t2(`Expected a sequence for this tag`), e2;
    },
    createNode: (e2, t2, n2) => et.from(e2, t2, n2)
  }, nt = {
    identify: (e2) => typeof e2 == `string`,
    default: true,
    tag: `tag:yaml.org,2002:str`,
    resolve: (e2) => e2,
    stringify(e2, t2, n2, r2) {
      return t2 = Object.assign({
        actualString: true
      }, t2), Ie(e2, t2, n2, r2);
    }
  }, rt = {
    identify: (e2) => e2 == null,
    createNode: () => new z(null),
    default: true,
    tag: `tag:yaml.org,2002:null`,
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new z(null),
    stringify: ({ source: e2 }, t2) => typeof e2 == `string` && rt.test.test(e2) ? e2 : t2.options.nullStr
  }, it = {
    identify: (e2) => typeof e2 == `boolean`,
    default: true,
    tag: `tag:yaml.org,2002:bool`,
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (e2) => new z(e2[0] === `t` || e2[0] === `T`),
    stringify({ source: e2, value: t2 }, n2) {
      return e2 && it.test.test(e2) && t2 === (e2[0] === `t` || e2[0] === `T`) ? e2 : t2 ? n2.options.trueStr : n2.options.falseStr;
    }
  };
  function Z({ format: e2, minFractionDigits: t2, tag: n2, value: r2 }) {
    if (typeof r2 == `bigint`) return String(r2);
    let i2 = typeof r2 == `number` ? r2 : Number(r2);
    if (!isFinite(i2)) return isNaN(i2) ? `.nan` : i2 < 0 ? `-.inf` : `.inf`;
    let a2 = Object.is(r2, -0) ? `-0` : JSON.stringify(r2);
    if (!e2 && t2 && (!n2 || n2 === `tag:yaml.org,2002:float`) && /^-?\d/.test(a2) && !a2.includes(`e`)) {
      let e3 = a2.indexOf(`.`);
      e3 < 0 && (e3 = a2.length, a2 += `.`);
      let n3 = t2 - (a2.length - e3 - 1);
      for (; n3-- > 0; ) a2 += `0`;
    }
    return a2;
  }
  var at = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (e2) => e2.slice(-3).toLowerCase() === `nan` ? NaN : e2[0] === `-` ? -1 / 0 : 1 / 0,
    stringify: Z
  }, ot = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    format: `EXP`,
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (e2) => parseFloat(e2),
    stringify(e2) {
      let t2 = Number(e2.value);
      return isFinite(t2) ? t2.toExponential() : Z(e2);
    }
  }, st = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(e2) {
      let t2 = new z(parseFloat(e2)), n2 = e2.indexOf(`.`);
      return n2 !== -1 && e2[e2.length - 1] === `0` && (t2.minFractionDigits = e2.length - n2 - 1), t2;
    },
    stringify: Z
  }, ct = (e2) => typeof e2 == `bigint` || Number.isInteger(e2), lt = (e2, t2, n2, { intAsBigInt: r2 }) => r2 ? BigInt(e2) : parseInt(e2.substring(t2), n2);
  function ut(e2, t2, n2) {
    let { value: r2 } = e2;
    return ct(r2) && r2 >= 0 ? n2 + r2.toString(t2) : Z(e2);
  }
  var dt = {
    identify: (e2) => ct(e2) && e2 >= 0,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    format: `OCT`,
    test: /^0o[0-7]+$/,
    resolve: (e2, t2, n2) => lt(e2, 2, 8, n2),
    stringify: (e2) => ut(e2, 8, `0o`)
  }, ft = {
    identify: ct,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    test: /^[-+]?[0-9]+$/,
    resolve: (e2, t2, n2) => lt(e2, 0, 10, n2),
    stringify: Z
  }, pt = {
    identify: (e2) => ct(e2) && e2 >= 0,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    format: `HEX`,
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (e2, t2, n2) => lt(e2, 2, 16, n2),
    stringify: (e2) => ut(e2, 16, `0x`)
  }, mt = [
    Y,
    X,
    nt,
    rt,
    it,
    dt,
    ft,
    pt,
    at,
    ot,
    st
  ];
  function ht(e2) {
    return typeof e2 == `bigint` || Number.isInteger(e2);
  }
  var gt = ({ value: e2 }) => JSON.stringify(e2), _t = [
    {
      identify: (e2) => typeof e2 == `string`,
      default: true,
      tag: `tag:yaml.org,2002:str`,
      resolve: (e2) => e2,
      stringify: gt
    },
    {
      identify: (e2) => e2 == null,
      createNode: () => new z(null),
      default: true,
      tag: `tag:yaml.org,2002:null`,
      test: /^null$/,
      resolve: () => null,
      stringify: gt
    },
    {
      identify: (e2) => typeof e2 == `boolean`,
      default: true,
      tag: `tag:yaml.org,2002:bool`,
      test: /^true$|^false$/,
      resolve: (e2) => e2 === `true`,
      stringify: gt
    },
    {
      identify: ht,
      default: true,
      tag: `tag:yaml.org,2002:int`,
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (e2, t2, { intAsBigInt: n2 }) => n2 ? BigInt(e2) : parseInt(e2, 10),
      stringify: ({ value: e2 }) => ht(e2) ? e2.toString() : JSON.stringify(e2)
    },
    {
      identify: (e2) => typeof e2 == `number`,
      default: true,
      tag: `tag:yaml.org,2002:float`,
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (e2) => parseFloat(e2),
      stringify: gt
    }
  ], vt = [
    Y,
    X
  ].concat(_t, {
    default: true,
    tag: ``,
    test: /^/,
    resolve(e2, t2) {
      return t2(`Unresolved plain scalar ${JSON.stringify(e2)}`), e2;
    }
  }), yt = {
    identify: (e2) => e2 instanceof Uint8Array,
    default: false,
    tag: `tag:yaml.org,2002:binary`,
    resolve(e2, t2) {
      if (typeof atob == `function`) {
        let t3 = atob(e2.replace(/[\n\r]/g, ``)), n2 = new Uint8Array(t3.length);
        for (let e3 = 0; e3 < t3.length; ++e3) n2[e3] = t3.charCodeAt(e3);
        return n2;
      } else return t2(`This environment does not support reading binary tags; either Buffer or atob is required`), e2;
    },
    stringify({ comment: e2, type: t2, value: n2 }, r2, i2, a2) {
      if (!n2) return ``;
      let o2 = n2, s2;
      if (typeof btoa == `function`) {
        let e3 = ``;
        for (let t3 = 0; t3 < o2.length; ++t3) e3 += String.fromCharCode(o2[t3]);
        s2 = btoa(e3);
      } else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);
      if (t2 ?? (t2 = z.BLOCK_LITERAL), t2 !== z.QUOTE_DOUBLE) {
        let e3 = Math.max(r2.options.lineWidth - r2.indent.length, r2.options.minContentWidth), n3 = Math.ceil(s2.length / e3), i3 = Array(n3);
        for (let t3 = 0, r3 = 0; t3 < n3; ++t3, r3 += e3) i3[t3] = s2.substr(r3, e3);
        s2 = i3.join(t2 === z.BLOCK_LITERAL ? `
` : ` `);
      }
      return Ie({
        comment: e2,
        type: t2,
        value: s2
      }, r2, i2, a2);
    }
  };
  function bt(e2, t2) {
    if (O(e2)) for (let n2 = 0; n2 < e2.items.length; ++n2) {
      let r2 = e2.items[n2];
      if (!E(r2)) {
        if (ee(r2)) {
          r2.items.length > 1 && t2(`Each pair must have its own sequence indicator`);
          let e3 = r2.items[0] || new K(new z(null));
          if (r2.commentBefore && (e3.key.commentBefore = e3.key.commentBefore ? `${r2.commentBefore}
${e3.key.commentBefore}` : r2.commentBefore), r2.comment) {
            let t3 = e3.value ?? e3.key;
            t3.comment = t3.comment ? `${r2.comment}
${t3.comment}` : r2.comment;
          }
          r2 = e3;
        }
        e2.items[n2] = E(r2) ? r2 : new K(r2);
      }
    }
    else t2(`Expected a sequence for this tag`);
    return e2;
  }
  function xt(e2, t2, n2) {
    let { replacer: r2 } = n2, i2 = new et(e2);
    i2.tag = `tag:yaml.org,2002:pairs`;
    let a2 = 0;
    if (t2 && Symbol.iterator in Object(t2)) for (let e3 of t2) {
      typeof r2 == `function` && (e3 = r2.call(t2, String(a2++), e3));
      let o2, s2;
      if (Array.isArray(e3)) if (e3.length === 2) o2 = e3[0], s2 = e3[1];
      else throw TypeError(`Expected [key, value] tuple: ${e3}`);
      else if (e3 && e3 instanceof Object) {
        let t3 = Object.keys(e3);
        if (t3.length === 1) o2 = t3[0], s2 = e3[o2];
        else throw TypeError(`Expected tuple with one key, not ${t3.length} keys`);
      } else o2 = e3;
      i2.items.push(Ye(o2, s2, n2));
    }
    return i2;
  }
  var St = {
    collection: `seq`,
    default: false,
    tag: `tag:yaml.org,2002:pairs`,
    resolve: bt,
    createNode: xt
  }, Ct = class e2 extends et {
    constructor() {
      super(), this.add = J.prototype.add.bind(this), this.delete = J.prototype.delete.bind(this), this.get = J.prototype.get.bind(this), this.has = J.prototype.has.bind(this), this.set = J.prototype.set.bind(this), this.tag = e2.tag;
    }
    toJSON(e3, t2) {
      if (!t2) return super.toJSON(e3);
      let n2 = /* @__PURE__ */ new Map();
      t2?.onCreate && t2.onCreate(n2);
      for (let e4 of this.items) {
        let r2, i2;
        if (E(e4) ? (r2 = R(e4.key, ``, t2), i2 = R(e4.value, r2, t2)) : r2 = R(e4, ``, t2), n2.has(r2)) throw Error(`Ordered maps must not include duplicate keys`);
        n2.set(r2, i2);
      }
      return n2;
    }
    static from(e3, t2, n2) {
      let r2 = xt(e3, t2, n2), i2 = new this();
      return i2.items = r2.items, i2;
    }
  };
  Ct.tag = `tag:yaml.org,2002:omap`;
  var wt = {
    collection: `seq`,
    identify: (e2) => e2 instanceof Map,
    nodeClass: Ct,
    default: false,
    tag: `tag:yaml.org,2002:omap`,
    resolve(e2, t2) {
      let n2 = bt(e2, t2), r2 = [];
      for (let { key: e3 } of n2.items) D(e3) && (r2.includes(e3.value) ? t2(`Ordered maps must not include duplicate keys: ${e3.value}`) : r2.push(e3.value));
      return Object.assign(new Ct(), n2);
    },
    createNode: (e2, t2, n2) => Ct.from(e2, t2, n2)
  };
  function Tt({ value: e2, source: t2 }, n2) {
    return t2 && (e2 ? Et : Dt).test.test(t2) ? t2 : e2 ? n2.options.trueStr : n2.options.falseStr;
  }
  var Et = {
    identify: (e2) => e2 === true,
    default: true,
    tag: `tag:yaml.org,2002:bool`,
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new z(true),
    stringify: Tt
  }, Dt = {
    identify: (e2) => e2 === false,
    default: true,
    tag: `tag:yaml.org,2002:bool`,
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new z(false),
    stringify: Tt
  }, Ot = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (e2) => e2.slice(-3).toLowerCase() === `nan` ? NaN : e2[0] === `-` ? -1 / 0 : 1 / 0,
    stringify: Z
  }, kt = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    format: `EXP`,
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (e2) => parseFloat(e2.replace(/_/g, ``)),
    stringify(e2) {
      let t2 = Number(e2.value);
      return isFinite(t2) ? t2.toExponential() : Z(e2);
    }
  }, At = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(e2) {
      let t2 = new z(parseFloat(e2.replace(/_/g, ``))), n2 = e2.indexOf(`.`);
      if (n2 !== -1) {
        let r2 = e2.substring(n2 + 1).replace(/_/g, ``);
        r2[r2.length - 1] === `0` && (t2.minFractionDigits = r2.length);
      }
      return t2;
    },
    stringify: Z
  }, jt = (e2) => typeof e2 == `bigint` || Number.isInteger(e2);
  function Mt(e2, t2, n2, { intAsBigInt: r2 }) {
    let i2 = e2[0];
    if ((i2 === `-` || i2 === `+`) && (t2 += 1), e2 = e2.substring(t2).replace(/_/g, ``), r2) {
      switch (n2) {
        case 2:
          e2 = `0b${e2}`;
          break;
        case 8:
          e2 = `0o${e2}`;
          break;
        case 16:
          e2 = `0x${e2}`;
          break;
      }
      let t3 = BigInt(e2);
      return i2 === `-` ? BigInt(-1) * t3 : t3;
    }
    let a2 = parseInt(e2, n2);
    return i2 === `-` ? -1 * a2 : a2;
  }
  function Nt(e2, t2, n2) {
    let { value: r2 } = e2;
    if (jt(r2)) {
      let e3 = r2.toString(t2);
      return r2 < 0 ? `-` + n2 + e3.substr(1) : n2 + e3;
    }
    return Z(e2);
  }
  var Pt = {
    identify: jt,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    format: `BIN`,
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (e2, t2, n2) => Mt(e2, 2, 2, n2),
    stringify: (e2) => Nt(e2, 2, `0b`)
  }, Ft = {
    identify: jt,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    format: `OCT`,
    test: /^[-+]?0[0-7_]+$/,
    resolve: (e2, t2, n2) => Mt(e2, 1, 8, n2),
    stringify: (e2) => Nt(e2, 8, `0`)
  }, It = {
    identify: jt,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (e2, t2, n2) => Mt(e2, 0, 10, n2),
    stringify: Z
  }, Lt = {
    identify: jt,
    default: true,
    tag: `tag:yaml.org,2002:int`,
    format: `HEX`,
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (e2, t2, n2) => Mt(e2, 2, 16, n2),
    stringify: (e2) => Nt(e2, 16, `0x`)
  }, Rt = class e2 extends J {
    constructor(t2) {
      super(t2), this.tag = e2.tag;
    }
    add(e3) {
      let t2;
      t2 = E(e3) ? e3 : e3 && typeof e3 == `object` && `key` in e3 && `value` in e3 && e3.value === null ? new K(e3.key, null) : new K(e3, null), q(this.items, t2.key) || this.items.push(t2);
    }
    get(e3, t2) {
      let n2 = q(this.items, e3);
      return !t2 && E(n2) ? D(n2.key) ? n2.key.value : n2.key : n2;
    }
    set(e3, t2) {
      if (typeof t2 != `boolean`) throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t2}`);
      let n2 = q(this.items, e3);
      n2 && !t2 ? this.items.splice(this.items.indexOf(n2), 1) : !n2 && t2 && this.items.push(new K(e3));
    }
    toJSON(e3, t2) {
      return super.toJSON(e3, t2, Set);
    }
    toString(e3, t2, n2) {
      if (!e3) return JSON.stringify(this);
      if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, e3, {
        allNullValues: true
      }), t2, n2);
      throw Error(`Set items must all have null values`);
    }
    static from(e3, t2, n2) {
      let { replacer: r2 } = n2, i2 = new this(e3);
      if (t2 && Symbol.iterator in Object(t2)) for (let e4 of t2) typeof r2 == `function` && (e4 = r2.call(t2, e4, e4)), i2.items.push(Ye(e4, null, n2));
      return i2;
    }
  };
  Rt.tag = `tag:yaml.org,2002:set`;
  var zt = {
    collection: `map`,
    identify: (e2) => e2 instanceof Set,
    nodeClass: Rt,
    default: false,
    tag: `tag:yaml.org,2002:set`,
    createNode: (e2, t2, n2) => Rt.from(e2, t2, n2),
    resolve(e2, t2) {
      if (ee(e2)) {
        if (e2.hasAllNullValues(true)) return Object.assign(new Rt(), e2);
        t2(`Set items must all have null values`);
      } else t2(`Expected a mapping for this tag`);
      return e2;
    }
  };
  function Bt(e2, t2) {
    let n2 = e2[0], r2 = n2 === `-` || n2 === `+` ? e2.substring(1) : e2, i2 = (e3) => t2 ? BigInt(e3) : Number(e3), a2 = r2.replace(/_/g, ``).split(`:`).reduce((e3, t3) => e3 * i2(60) + i2(t3), i2(0));
    return n2 === `-` ? i2(-1) * a2 : a2;
  }
  function Vt(e2) {
    let { value: t2 } = e2, n2 = (e3) => e3;
    if (typeof t2 == `bigint`) n2 = (e3) => BigInt(e3);
    else if (isNaN(t2) || !isFinite(t2)) return Z(e2);
    let r2 = ``;
    t2 < 0 && (r2 = `-`, t2 *= n2(-1));
    let i2 = n2(60), a2 = [
      t2 % i2
    ];
    return t2 < 60 ? a2.unshift(0) : (t2 = (t2 - a2[0]) / i2, a2.unshift(t2 % i2), t2 >= 60 && (t2 = (t2 - a2[0]) / i2, a2.unshift(t2))), r2 + a2.map((e3) => String(e3).padStart(2, `0`)).join(`:`).replace(/000000\d*$/, ``);
  }
  var Ht = {
    identify: (e2) => typeof e2 == `bigint` || Number.isInteger(e2),
    default: true,
    tag: `tag:yaml.org,2002:int`,
    format: `TIME`,
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (e2, t2, { intAsBigInt: n2 }) => Bt(e2, n2),
    stringify: Vt
  }, Ut = {
    identify: (e2) => typeof e2 == `number`,
    default: true,
    tag: `tag:yaml.org,2002:float`,
    format: `TIME`,
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (e2) => Bt(e2, false),
    stringify: Vt
  }, Wt = {
    identify: (e2) => e2 instanceof Date,
    default: true,
    tag: `tag:yaml.org,2002:timestamp`,
    test: RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),
    resolve(e2) {
      let t2 = e2.match(Wt.test);
      if (!t2) throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);
      let [, n2, r2, i2, a2, o2, s2] = t2.map(Number), c2 = t2[7] ? Number((t2[7] + `00`).substr(1, 3)) : 0, l2 = Date.UTC(n2, r2 - 1, i2, a2 || 0, o2 || 0, s2 || 0, c2), u2 = t2[8];
      if (u2 && u2 !== `Z`) {
        let e3 = Bt(u2, false);
        Math.abs(e3) < 30 && (e3 *= 60), l2 -= 6e4 * e3;
      }
      return new Date(l2);
    },
    stringify: ({ value: e2 }) => e2?.toISOString().replace(/(T00:00:00)?\.000Z$/, ``) ?? ``
  }, Gt = [
    Y,
    X,
    nt,
    rt,
    Et,
    Dt,
    Pt,
    Ft,
    It,
    Lt,
    Ot,
    kt,
    At,
    yt,
    G,
    wt,
    St,
    zt,
    Ht,
    Ut,
    Wt
  ], Kt = /* @__PURE__ */ new Map([
    [
      `core`,
      mt
    ],
    [
      `failsafe`,
      [
        Y,
        X,
        nt
      ]
    ],
    [
      `json`,
      vt
    ],
    [
      `yaml11`,
      Gt
    ],
    [
      `yaml-1.1`,
      Gt
    ]
  ]), qt = {
    binary: yt,
    bool: it,
    float: st,
    floatExp: ot,
    floatNaN: at,
    floatTime: Ut,
    int: ft,
    intHex: pt,
    intOct: dt,
    intTime: Ht,
    map: Y,
    merge: G,
    null: rt,
    omap: wt,
    pairs: St,
    seq: X,
    set: zt,
    timestamp: Wt
  }, Jt = {
    "tag:yaml.org,2002:binary": yt,
    "tag:yaml.org,2002:merge": G,
    "tag:yaml.org,2002:omap": wt,
    "tag:yaml.org,2002:pairs": St,
    "tag:yaml.org,2002:set": zt,
    "tag:yaml.org,2002:timestamp": Wt
  };
  function Yt(e2, t2, n2) {
    let r2 = Kt.get(t2);
    if (r2 && !e2) return n2 && !r2.includes(G) ? r2.concat(G) : r2.slice();
    let i2 = r2;
    if (!i2) if (Array.isArray(e2)) i2 = [];
    else {
      let e3 = Array.from(Kt.keys()).filter((e4) => e4 !== `yaml11`).map((e4) => JSON.stringify(e4)).join(`, `);
      throw Error(`Unknown schema "${t2}"; use one of ${e3} or define customTags array`);
    }
    if (Array.isArray(e2)) for (let t3 of e2) i2 = i2.concat(t3);
    else typeof e2 == `function` && (i2 = e2(i2.slice()));
    return n2 && (i2 = i2.concat(G)), i2.reduce((e3, t3) => {
      let n3 = typeof t3 == `string` ? qt[t3] : t3;
      if (!n3) {
        let e4 = JSON.stringify(t3), n4 = Object.keys(qt).map((e5) => JSON.stringify(e5)).join(`, `);
        throw Error(`Unknown custom tag ${e4}; use one of ${n4}`);
      }
      return e3.includes(n3) || e3.push(n3), e3;
    }, []);
  }
  var Xt = (e2, t2) => e2.key < t2.key ? -1 : +(e2.key > t2.key), Zt = class e2 {
    constructor({ compat: e3, customTags: t2, merge: n2, resolveKnownTags: r2, schema: i2, sortMapEntries: a2, toStringDefaults: o2 }) {
      this.compat = Array.isArray(e3) ? Yt(e3, `compat`) : e3 ? Yt(null, e3) : null, this.name = typeof i2 == `string` && i2 || `core`, this.knownTags = r2 ? Jt : {}, this.tags = Yt(t2, this.name, n2), this.toStringOptions = o2 ?? null, Object.defineProperty(this, y, {
        value: Y
      }), Object.defineProperty(this, x, {
        value: nt
      }), Object.defineProperty(this, S, {
        value: X
      }), this.sortMapEntries = typeof a2 == `function` ? a2 : a2 === true ? Xt : null;
    }
    clone() {
      let t2 = Object.create(e2.prototype, Object.getOwnPropertyDescriptors(this));
      return t2.tags = this.tags.slice(), t2;
    }
  };
  function Qt(e2, t2) {
    let n2 = [], r2 = t2.directives === true;
    if (t2.directives !== false && e2.directives) {
      let t3 = e2.directives.toString(e2);
      t3 ? (n2.push(t3), r2 = true) : e2.directives.docStart && (r2 = true);
    }
    r2 && n2.push(`---`);
    let i2 = Le(e2, t2), { commentString: a2 } = i2.options;
    if (e2.commentBefore) {
      n2.length !== 1 && n2.unshift(``);
      let t3 = a2(e2.commentBefore);
      n2.unshift(V(t3, ``));
    }
    let o2 = false, s2 = null;
    if (e2.contents) {
      if (A(e2.contents)) {
        if (e2.contents.spaceBefore && r2 && n2.push(``), e2.contents.commentBefore) {
          let t4 = a2(e2.contents.commentBefore);
          n2.push(V(t4, ``));
        }
        i2.forceBlockIndent = !!e2.comment, s2 = e2.contents.comment;
      }
      let t3 = s2 ? void 0 : () => o2 = true, c2 = W(e2.contents, i2, () => s2 = null, t3);
      s2 && (c2 += H(c2, ``, a2(s2))), (c2[0] === `|` || c2[0] === `>`) && n2[n2.length - 1] === `---` ? n2[n2.length - 1] = `--- ${c2}` : n2.push(c2);
    } else n2.push(W(e2.contents, i2));
    if (e2.directives?.docEnd) if (e2.comment) {
      let t3 = a2(e2.comment);
      t3.includes(`
`) ? (n2.push(`...`), n2.push(V(t3, ``))) : n2.push(`... ${t3}`);
    } else n2.push(`...`);
    else {
      let t3 = e2.comment;
      t3 && o2 && (t3 = t3.replace(/^\n+/, ``)), t3 && ((!o2 || s2) && n2[n2.length - 1] !== `` && n2.push(``), n2.push(V(a2(t3), ``)));
    }
    return n2.join(`
`) + `
`;
  }
  var $t = class e2 {
    constructor(e3, t2, n2) {
      this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, C, {
        value: v
      });
      let r2 = null;
      typeof t2 == `function` || Array.isArray(t2) ? r2 = t2 : n2 === void 0 && t2 && (n2 = t2, t2 = void 0);
      let i2 = Object.assign({
        intAsBigInt: false,
        keepSourceTokens: false,
        logLevel: `warn`,
        prettyErrors: true,
        strict: true,
        stringKeys: false,
        uniqueKeys: true,
        version: `1.2`
      }, n2);
      this.options = i2;
      let { version: a2 } = i2;
      n2?._directives ? (this.directives = n2._directives.atDocument(), this.directives.yaml.explicit && (a2 = this.directives.yaml.version)) : this.directives = new I({
        version: a2
      }), this.setSchema(a2, n2), this.contents = e3 === void 0 ? null : this.createNode(e3, r2, n2);
    }
    clone() {
      let t2 = Object.create(e2.prototype, {
        [C]: {
          value: v
        }
      });
      return t2.commentBefore = this.commentBefore, t2.comment = this.comment, t2.errors = this.errors.slice(), t2.warnings = this.warnings.slice(), t2.options = Object.assign({}, this.options), this.directives && (t2.directives = this.directives.clone()), t2.schema = this.schema.clone(), t2.contents = A(this.contents) ? this.contents.clone(t2.schema) : this.contents, this.range && (t2.range = this.range.slice()), t2;
    }
    add(e3) {
      Q(this.contents) && this.contents.add(e3);
    }
    addIn(e3, t2) {
      Q(this.contents) && this.contents.addIn(e3, t2);
    }
    createAlias(e3, t2) {
      if (!e3.anchor) {
        let n2 = ue(this);
        e3.anchor = !t2 || n2.has(t2) ? de(t2 || `a`, n2) : t2;
      }
      return new me(e3.anchor);
    }
    createNode(e3, t2, n2) {
      let r2;
      if (typeof t2 == `function`) e3 = t2.call({
        "": e3
      }, ``, e3), r2 = t2;
      else if (Array.isArray(t2)) {
        let e4 = t2.filter((e5) => typeof e5 == `number` || e5 instanceof String || e5 instanceof Number).map(String);
        e4.length > 0 && (t2 = t2.concat(e4)), r2 = t2;
      } else n2 === void 0 && t2 && (n2 = t2, t2 = void 0);
      let { aliasDuplicateObjects: i2, anchorPrefix: a2, flow: o2, keepUndefined: s2, onTagObj: c2, tag: l2 } = n2 ?? {}, { onAnchor: u2, setAnchors: d2, sourceObjects: f2 } = fe(this, a2 || `a`), p2 = {
        aliasDuplicateObjects: i2 ?? true,
        keepUndefined: s2 ?? false,
        onAnchor: u2,
        onTagObj: c2,
        replacer: r2,
        schema: this.schema,
        sourceObjects: f2
      }, m2 = ye(e3, l2, p2);
      return o2 && k(m2) && (m2.flow = true), d2(), m2;
    }
    createPair(e3, t2, n2 = {}) {
      return new K(this.createNode(e3, null, n2), this.createNode(t2, null, n2));
    }
    delete(e3) {
      return Q(this.contents) ? this.contents.delete(e3) : false;
    }
    deleteIn(e3) {
      return B(e3) ? this.contents == null ? false : (this.contents = null, true) : Q(this.contents) ? this.contents.deleteIn(e3) : false;
    }
    get(e3, t2) {
      return k(this.contents) ? this.contents.get(e3, t2) : void 0;
    }
    getIn(e3, t2) {
      return B(e3) ? !t2 && D(this.contents) ? this.contents.value : this.contents : k(this.contents) ? this.contents.getIn(e3, t2) : void 0;
    }
    has(e3) {
      return k(this.contents) ? this.contents.has(e3) : false;
    }
    hasIn(e3) {
      return B(e3) ? this.contents !== void 0 : k(this.contents) ? this.contents.hasIn(e3) : false;
    }
    set(e3, t2) {
      this.contents == null ? this.contents = be(this.schema, [
        e3
      ], t2) : Q(this.contents) && this.contents.set(e3, t2);
    }
    setIn(e3, t2) {
      B(e3) ? this.contents = t2 : this.contents == null ? this.contents = be(this.schema, Array.from(e3), t2) : Q(this.contents) && this.contents.setIn(e3, t2);
    }
    setSchema(e3, t2 = {}) {
      typeof e3 == `number` && (e3 = String(e3));
      let n2;
      switch (e3) {
        case `1.1`:
          this.directives ? this.directives.yaml.version = `1.1` : this.directives = new I({
            version: `1.1`
          }), n2 = {
            resolveKnownTags: false,
            schema: `yaml-1.1`
          };
          break;
        case `1.2`:
        case `next`:
          this.directives ? this.directives.yaml.version = e3 : this.directives = new I({
            version: e3
          }), n2 = {
            resolveKnownTags: true,
            schema: `core`
          };
          break;
        case null:
          this.directives && delete this.directives, n2 = null;
          break;
        default: {
          let t3 = JSON.stringify(e3);
          throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t3}`);
        }
      }
      if (t2.schema instanceof Object) this.schema = t2.schema;
      else if (n2) this.schema = new Zt(Object.assign(n2, t2));
      else throw Error(`With a null YAML version, the { schema: Schema } option is required`);
    }
    toJS({ json: e3, jsonArg: t2, mapAsMap: n2, maxAliasCount: r2, onAnchor: i2, reviver: a2 } = {}) {
      let o2 = {
        anchors: /* @__PURE__ */ new Map(),
        doc: this,
        keep: !e3,
        mapAsMap: n2 === true,
        mapKeyWarned: false,
        maxAliasCount: typeof r2 == `number` ? r2 : 100
      }, s2 = R(this.contents, t2 ?? ``, o2);
      if (typeof i2 == `function`) for (let { count: e4, res: t3 } of o2.anchors.values()) i2(t3, e4);
      return typeof a2 == `function` ? L(a2, {
        "": s2
      }, ``, s2) : s2;
    }
    toJSON(e3, t2) {
      return this.toJS({
        json: true,
        jsonArg: e3,
        mapAsMap: false,
        onAnchor: t2
      });
    }
    toString(e3 = {}) {
      if (this.errors.length > 0) throw Error(`Document with errors cannot be stringified`);
      if (`indent` in e3 && (!Number.isInteger(e3.indent) || Number(e3.indent) <= 0)) {
        let t2 = JSON.stringify(e3.indent);
        throw Error(`"indent" option must be a positive integer, not ${t2}`);
      }
      return Qt(this, e3);
    }
  };
  function Q(e2) {
    if (k(e2)) return true;
    throw Error(`Expected a YAML collection as document contents`);
  }
  var en = /* @__PURE__ */ Symbol(`break visit`), tn = /* @__PURE__ */ Symbol(`skip children`), nn = /* @__PURE__ */ Symbol(`remove item`);
  function $(e2, t2) {
    `type` in e2 && e2.type === `document` && (e2 = {
      start: e2.start,
      value: e2.value
    }), rn(Object.freeze([]), e2, t2);
  }
  $.BREAK = en, $.SKIP = tn, $.REMOVE = nn, $.itemAtPath = (e2, t2) => {
    let n2 = e2;
    for (let [e3, r2] of t2) {
      let t3 = n2?.[e3];
      if (t3 && `items` in t3) n2 = t3.items[r2];
      else return;
    }
    return n2;
  }, $.parentCollection = (e2, t2) => {
    let n2 = $.itemAtPath(e2, t2.slice(0, -1)), r2 = t2[t2.length - 1][0], i2 = n2?.[r2];
    if (i2 && `items` in i2) return i2;
    throw Error(`Parent collection not found`);
  };
  function rn(e2, t2, n2) {
    let r2 = n2(t2, e2);
    if (typeof r2 == `symbol`) return r2;
    for (let i2 of [
      `key`,
      `value`
    ]) {
      let a2 = t2[i2];
      if (a2 && `items` in a2) {
        for (let t3 = 0; t3 < a2.items.length; ++t3) {
          let r3 = rn(Object.freeze(e2.concat([
            [
              i2,
              t3
            ]
          ])), a2.items[t3], n2);
          if (typeof r3 == `number`) t3 = r3 - 1;
          else if (r3 === en) return en;
          else r3 === nn && (a2.items.splice(t3, 1), --t3);
        }
        typeof r2 == `function` && i2 === `key` && (r2 = r2(t2, e2));
      }
    }
    return typeof r2 == `function` ? r2(t2, e2) : r2;
  }
  function an(e2, t2, n2) {
    let r2 = null;
    if (typeof t2 == `function` || Array.isArray(t2) ? r2 = t2 : n2 === void 0 && t2 && (n2 = t2), typeof n2 == `string` && (n2 = n2.length), typeof n2 == `number`) {
      let e3 = Math.round(n2);
      n2 = e3 < 1 ? void 0 : e3 > 8 ? {
        indent: 8
      } : {
        indent: e3
      };
    }
    if (e2 === void 0) {
      let { keepUndefined: e3 } = n2 ?? t2 ?? {};
      if (!e3) return;
    }
    return T(e2) && !r2 ? e2.toString(n2) : new $t(e2, r2, n2).toString(n2);
  }
  function on(e2) {
    return new Promise((t2, n2) => {
      e2.oncomplete = e2.onsuccess = () => t2(e2.result), e2.onabort = e2.onerror = () => n2(e2.error);
    });
  }
  function sn(e2, t2) {
    let n2, r2 = () => {
      if (n2) return n2;
      let r3 = indexedDB.open(e2);
      return r3.onupgradeneeded = () => r3.result.createObjectStore(t2), n2 = on(r3), n2.then((e3) => {
        e3.onclose = () => n2 = void 0;
      }, () => {
      }), n2;
    };
    return (e3, n3) => r2().then((r3) => n3(r3.transaction(t2, e3).objectStore(t2)));
  }
  var cn;
  function ln() {
    return cn || (cn = sn(`keyval-store`, `keyval`)), cn;
  }
  function un(e2, t2 = ln()) {
    return t2(`readonly`, (t3) => on(t3.get(e2)));
  }
  function dn(e2, t2, n2 = ln()) {
    return n2(`readwrite`, (n3) => (n3.put(t2, e2), on(n3.transaction)));
  }
  var fn = sn(`windpress-cache-store`, `provider-cache`);
  async function pn(s2 = {}) {
    let c2 = t(), l2 = e();
    l2.add({
      message: `Starting cache build...`,
      type: `info`
    });
    let u2 = Object.assign({
      store: true,
      kind: `full`
    }, s2), d2 = [], f2 = {}, p2 = {
      last_generated: null,
      last_full_build: null,
      file_url: null,
      file_size: 0
    }, m2 = false;
    async function g2(e2) {
      try {
        return await un(e2, fn);
      } catch {
        return m2 || (m2 = (l2.add({
          message: `IndexedDB cache is unavailable. Falling back to provider scanning.`,
          type: `warning`
        }), true)), null;
      }
    }
    function _2(e2, t2) {
      dn(e2, t2, fn).catch(() => {
        m2 || (m2 = (l2.add({
          message: `IndexedDB cache is unavailable. Falling back to provider scanning.`,
          type: `warning`
        }), true));
      });
    }
    l2.add({
      message: `Getting the latest Simple File System data...`,
      type: `info`
    }), await c2.get(`admin/settings/cache/providers`).then((e2) => {
      d2 = e2.data.providers;
    }), await c2.get(`admin/settings/cache/index`).then((e2) => {
      p2 = e2.data.cache;
    }), await c2.request(`/admin/volume/index`, {
      method: `GET`
    }).then((e2) => e2.data).then((e2) => {
      f2 = e2.entries.reduce((e3, t2) => (e3[`/${t2.relative_path}`] = t2.content, e3), {});
    }), (!u2.tailwindcss_version || typeof u2.sourcemap != `boolean`) && await c2.request(`/admin/settings/options/index`, {
      method: `GET`
    }).then((e2) => {
      let t2 = Number(r(e2.data.options, `general.tailwindcss.version`, 4)), n2 = !!r(e2.data.options, `performance.cache.source_map`, false);
      t2 === 3 || t2 === 4 ? (u2.tailwindcss_version = t2, u2.sourcemap = n2) : (u2.tailwindcss_version = 4, u2.sourcemap = false);
    }), (d2.length === 0 || d2.filter((e2) => e2.enabled).length === 0) && l2.add({
      message: `No scanner provider found. If this is unexpected, please check the integrations setting page.`,
      type: `warning`
    });
    let v2 = [];
    async function y2(e2) {
      let t2 = false, r2 = [];
      if (u2.kind === `incremental` && u2.incremental?.providers && !u2.incremental.providers.includes(e2.id)) {
        let t3 = await g2(`windpress.cache.provider.${e2.id}`);
        if (t3) {
          let n2 = o.decompressFromUTF16(t3), r3 = n2 ? JSON.parse(n2) : null;
          if (r3 && !(p2.last_full_build !== null && Number(r3.timestamp) < Number(p2.last_full_build))) return v2.push(...r3.contents), l2.add({
            message: `Using cached sources for provider: ${e2.name}`,
            type: `info`
          }), Promise.resolve();
        }
      }
      try {
        do {
          let i2 = n(10), a2 = `Scanning provider: ${e2.name}... (${t2 === false ? `initial` : t2})`;
          l2.add({
            message: a2,
            type: `info`,
            id: i2
          });
          let o2 = await c2.post(`admin/settings/cache/providers/scan`, {
            provider_id: e2.id,
            metadata: {
              next_batch: t2
            }
          }).then((e3) => e3.data).catch((e3) => {
            throw l2.update(i2, {
              type: `error`,
              message: `${a2} - failed: ${e3.statusText} -> ${e3.data.message}`
            }), e3;
          });
          r2.push(...o2.contents), t2 = o2.metadata?.next_batch || false, l2.update(i2, {
            type: `info`,
            message: `${a2} - done`
          });
        } while (t2 !== false);
      } catch (e3) {
        throw l2.add({
          message: `Canceling cache build...`,
          type: `info`
        }), e3;
      }
      return v2.push(...r2), _2(`windpress.cache.provider.${e2.id}`, o.compressToUTF16(JSON.stringify({
        contents: r2,
        timestamp: Date.now()
      }))), Promise.resolve();
    }
    let b2 = d2.filter((e2) => e2.enabled).map((e2) => y2(e2));
    await Promise.all(b2);
    let x2 = v2.map((e2) => {
      let t2 = atob(e2.content);
      return e2.type === `json` && (t2 = an(JSON.parse(t2))), h(t2);
    }), S2 = null, C2 = null, w2 = null;
    if (u2.tailwindcss_version === 4) {
      let { compile: e2, getCandidates: t2, optimize: n2, loadSource: r2 } = await i(async () => {
        let { compile: e3, getCandidates: t3, optimize: n3, loadSource: r3 } = await import("./tailwindcss-FR8VGY_0.js").then(async (m3) => {
          await m3.__tla;
          return m3;
        });
        return {
          compile: e3,
          getCandidates: t3,
          optimize: n3,
          loadSource: r3
        };
      }, [], import.meta.url), a2 = await e2({
        entrypoint: `/main.css`,
        volume: f2
      }), o2 = await t2([
        ...x2,
        ...await r2(a2.sources)
      ]);
      l2.add({
        message: `Scanning complete`,
        type: `success`
      }), l2.add({
        message: `Found ${o2.length} candidates`,
        type: `info`,
        options: {
          raw: true,
          candidates: o2.sort()
        }
      }), l2.add({
        message: `Building cache...`,
        type: `info`
      });
      let s3 = a2.build(o2), c3 = null;
      u2.sourcemap === true && (c3 = a2.buildSourceMap());
      let d3 = await n2(s3, {
        file: `main.css`,
        map: c3 ?? void 0
      }), p3 = await n2(s3, {
        file: `main.css`,
        map: c3 ?? void 0,
        minify: true
      });
      S2 = d3.code, w2 = d3.map, C2 = p3.code;
    } else if (u2.tailwindcss_version === 3) {
      let { build: e2, optimize: t2 } = await i(async () => {
        let { build: e3, optimize: t3 } = await import("./tailwindcss-v3-hsqee7ay.js").then(async (m3) => {
          await m3.__tla;
          return m3;
        });
        return {
          build: e3,
          optimize: t3
        };
      }, [], import.meta.url);
      l2.add({
        message: `Scanning complete`,
        type: `success`
      }), l2.add({
        message: `Building cache...`,
        type: `info`
      });
      let n2 = await e2({
        entrypoint: {
          css: `/main.css`,
          config: `/tailwind.config.js`
        },
        contents: x2,
        volume: f2
      });
      S2 = (await t2(n2)).css, C2 = (await t2(n2, true)).css;
    }
    return l2.add({
      message: `Cache built`,
      type: `success`
    }), p2.last_generated = Date.now(), p2.last_full_build = u2.kind === `full` ? Date.now() : p2.last_full_build, u2.store === true && await c2.post(`admin/settings/cache/store`, {
      content: a((w2 ? S2 : C2) || ``),
      sourcemap: w2 ? a(w2) : null,
      full_build: u2.kind === `full` ? p2.last_full_build : null
    }).then((e2) => {
      p2 = e2.data.cache, l2.add({
        message: `Cache stored`,
        type: `success`
      });
    }), {
      normal: S2,
      sourcemap: w2,
      minified: C2,
      css_cache: p2
    };
  }
  function mn() {
    let e2 = new BroadcastChannel(`windpress`), t2 = Promise.resolve();
    e2.addEventListener(`message`, async (n2) => {
      let r2 = n2.data;
      [
        `windpress/dashboard`,
        `windpress/integration`
      ].includes(r2.source) && r2.target === `windpress/compiler` && r2.task === `generate-cache` && (t2 = t2.then(async () => {
        await pn(r2.data).then(() => {
          e2.postMessage({
            source: `windpress/compiler`,
            target: `windpress/dashboard`,
            task: `generate-cache.response`,
            data: {
              status: `success`
            }
          });
        }).catch((t3) => {
          e2.postMessage({
            source: `windpress/compiler`,
            target: `windpress/dashboard`,
            task: `generate-cache.response`,
            data: {
              status: `error`
            }
          }), console.error(t3);
        });
      }).catch((e3) => {
        console.error(e3);
      }));
    });
  }
  hn = async function() {
    `locks` in navigator ? navigator.locks.request(`task_lock`, {
      mode: `exclusive`
    }, (e2) => (console.log(`Lock acquired. Starting worker.`), mn(), new Promise(() => {
    }))).catch(() => {
      console.log(`Failed to acquire lock. Worker already running in another tab.`);
    }) : (console.log(`Locks API not supported in this browser. Starting worker without lock.`), mn());
  };
})();
export {
  __tla,
  hn as t
};
