var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
import { t as e } from "./log-BcOb3xTO.js";
import { t } from "./api-3yDUayxW.js";
import { t as n } from "./preload-helper-Cb81DA_d.js";
import { n as r, t as i } from "./dist-UMash2f5.js";
import { __tla as __tla_0 } from "./cssesc-DEUDTBaR.js";
import "./build-DTrDue3H.js";
import "./vfs-DziqLF6T.js";
import "./intellisense-iY_xPBd-.js";
let l, c, Je;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _e2, _t, _n, _r, _i, _a, _o, _s, _c, _l, _u, _H_instances, d_fn, _H_static, _a2, f_fn, p_fn, m_fn, h_fn, g_fn, __fn, v_fn, y_fn, b_fn, x_fn, S_fn, C_fn, _$_instances, e_fn, t_fn, n_fn, _b;
  var a = null, o = false, s = null;
  c = async function(e2) {
    if (!o) return s || (s = (async () => {
      try {
        let t2 = await n(() => import("./oxide_parser-_sTCyEH9-Ba28uM0R.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url);
        e2 ? await t2.default(e2) : await t2.default(), a = t2, o = true;
      } catch (e3) {
        throw s = null, Error(`Failed to initialize WASM module: ${e3 instanceof Error ? e3.message : `Unknown error`}`);
      }
    })(), s);
  };
  l = async function(e2) {
    return o || await c(), a.getCandidates(e2);
  };
  i();
  var u = (e2, t2, n2) => {
    let r2 = e2 instanceof RegExp ? d(e2, n2) : e2, i2 = t2 instanceof RegExp ? d(t2, n2) : t2, a2 = r2 !== null && i2 != null && f(r2, i2, n2);
    return a2 && {
      start: a2[0],
      end: a2[1],
      pre: n2.slice(0, a2[0]),
      body: n2.slice(a2[0] + r2.length, a2[1]),
      post: n2.slice(a2[1] + i2.length)
    };
  }, d = (e2, t2) => {
    let n2 = t2.match(e2);
    return n2 ? n2[0] : null;
  }, f = (e2, t2, n2) => {
    let r2, i2, a2, o2, s2, c2 = n2.indexOf(e2), l2 = n2.indexOf(t2, c2 + 1), u2 = c2;
    if (c2 >= 0 && l2 > 0) {
      if (e2 === t2) return [
        c2,
        l2
      ];
      for (r2 = [], a2 = n2.length; u2 >= 0 && !s2; ) {
        if (u2 === c2) r2.push(u2), c2 = n2.indexOf(e2, u2 + 1);
        else if (r2.length === 1) {
          let e3 = r2.pop();
          e3 !== void 0 && (s2 = [
            e3,
            l2
          ]);
        } else i2 = r2.pop(), i2 !== void 0 && i2 < a2 && (a2 = i2, o2 = l2), l2 = n2.indexOf(t2, u2 + 1);
        u2 = c2 < l2 && c2 >= 0 ? c2 : l2;
      }
      r2.length && o2 !== void 0 && (s2 = [
        a2,
        o2
      ]);
    }
    return s2;
  }, p = `\0SLASH` + Math.random() + `\0`, m = `\0OPEN` + Math.random() + `\0`, h = `\0CLOSE` + Math.random() + `\0`, g = `\0COMMA` + Math.random() + `\0`, _ = `\0PERIOD` + Math.random() + `\0`, ee = new RegExp(p, `g`), te = new RegExp(m, `g`), ne = new RegExp(h, `g`), v = new RegExp(g, `g`), y = new RegExp(_, `g`), b = /\\\\/g, re = /\\{/g, ie = /\\}/g, ae = /\\,/g, oe = /\\\./g, se = 1e5;
  function x(e2) {
    return isNaN(e2) ? e2.charCodeAt(0) : parseInt(e2, 10);
  }
  function ce(e2) {
    return e2.replace(b, p).replace(re, m).replace(ie, h).replace(ae, g).replace(oe, _);
  }
  function le(e2) {
    return e2.replace(ee, `\\`).replace(te, `{`).replace(ne, `}`).replace(v, `,`).replace(y, `.`);
  }
  function S(e2) {
    if (!e2) return [
      ``
    ];
    let t2 = [], n2 = u(`{`, `}`, e2);
    if (!n2) return e2.split(`,`);
    let { pre: r2, body: i2, post: a2 } = n2, o2 = r2.split(`,`);
    o2[o2.length - 1] += `{` + i2 + `}`;
    let s2 = S(a2);
    return a2.length && (o2[o2.length - 1] += s2.shift(), o2.push.apply(o2, s2)), t2.push.apply(t2, o2), t2;
  }
  function ue(e2, t2 = {}) {
    if (!e2) return [];
    let { max: n2 = se } = t2;
    return e2.slice(0, 2) === `{}` && (e2 = `\\{\\}` + e2.slice(2)), T(ce(e2), n2, true).map(le);
  }
  function de(e2) {
    return `{` + e2 + `}`;
  }
  function C(e2) {
    return /^-?0\d/.test(e2);
  }
  function w(e2, t2) {
    return e2 <= t2;
  }
  function fe(e2, t2) {
    return e2 >= t2;
  }
  function T(e2, t2, n2) {
    let r2 = [], i2 = u(`{`, `}`, e2);
    if (!i2) return [
      e2
    ];
    let a2 = i2.pre, o2 = i2.post.length ? T(i2.post, t2, false) : [
      ``
    ];
    if (/\$$/.test(i2.pre)) for (let e3 = 0; e3 < o2.length && e3 < t2; e3++) {
      let t3 = a2 + `{` + i2.body + `}` + o2[e3];
      r2.push(t3);
    }
    else {
      let s2 = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i2.body), c2 = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i2.body), l2 = s2 || c2, u2 = i2.body.indexOf(`,`) >= 0;
      if (!l2 && !u2) return i2.post.match(/,(?!,).*\}/) ? (e2 = i2.pre + `{` + i2.body + h + i2.post, T(e2, t2, true)) : [
        e2
      ];
      let d2;
      if (l2) d2 = i2.body.split(/\.\./);
      else if (d2 = S(i2.body), d2.length === 1 && d2[0] !== void 0 && (d2 = T(d2[0], t2, false).map(de), d2.length === 1)) return o2.map((e3) => i2.pre + d2[0] + e3);
      let f2;
      if (l2 && d2[0] !== void 0 && d2[1] !== void 0) {
        let e3 = x(d2[0]), t3 = x(d2[1]), n3 = Math.max(d2[0].length, d2[1].length), r3 = d2.length === 3 && d2[2] !== void 0 ? Math.max(Math.abs(x(d2[2])), 1) : 1, i3 = w;
        t3 < e3 && (r3 *= -1, i3 = fe);
        let a3 = d2.some(C);
        f2 = [];
        for (let o3 = e3; i3(o3, t3); o3 += r3) {
          let e4;
          if (c2) e4 = String.fromCharCode(o3), e4 === `\\` && (e4 = ``);
          else if (e4 = String(o3), a3) {
            let t4 = n3 - e4.length;
            if (t4 > 0) {
              let n4 = Array(t4 + 1).join(`0`);
              e4 = o3 < 0 ? `-` + n4 + e4.slice(1) : n4 + e4;
            }
          }
          f2.push(e4);
        }
      } else {
        f2 = [];
        for (let e3 = 0; e3 < d2.length; e3++) f2.push.apply(f2, T(d2[e3], t2, false));
      }
      for (let e3 = 0; e3 < f2.length; e3++) for (let i3 = 0; i3 < o2.length && r2.length < t2; i3++) {
        let t3 = a2 + f2[e3] + o2[i3];
        (!n2 || l2 || t3) && r2.push(t3);
      }
    }
    return r2;
  }
  var pe = 1024 * 64, E = (e2) => {
    if (typeof e2 != `string`) throw TypeError(`invalid pattern`);
    if (e2.length > pe) throw TypeError(`pattern is too long`);
  }, me = {
    "[:alnum:]": [
      `\\p{L}\\p{Nl}\\p{Nd}`,
      true
    ],
    "[:alpha:]": [
      `\\p{L}\\p{Nl}`,
      true
    ],
    "[:ascii:]": [
      `\\x00-\\x7f`,
      false
    ],
    "[:blank:]": [
      `\\p{Zs}\\t`,
      true
    ],
    "[:cntrl:]": [
      `\\p{Cc}`,
      true
    ],
    "[:digit:]": [
      `\\p{Nd}`,
      true
    ],
    "[:graph:]": [
      `\\p{Z}\\p{C}`,
      true,
      true
    ],
    "[:lower:]": [
      `\\p{Ll}`,
      true
    ],
    "[:print:]": [
      `\\p{C}`,
      true
    ],
    "[:punct:]": [
      `\\p{P}`,
      true
    ],
    "[:space:]": [
      `\\p{Z}\\t\\r\\n\\v\\f`,
      true
    ],
    "[:upper:]": [
      `\\p{Lu}`,
      true
    ],
    "[:word:]": [
      `\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}`,
      true
    ],
    "[:xdigit:]": [
      `A-Fa-f0-9`,
      false
    ]
  }, D = (e2) => e2.replace(/[[\]\\-]/g, `\\$&`), he = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`), O = (e2) => e2.join(``), ge = (e2, t2) => {
    let n2 = t2;
    if (e2.charAt(n2) !== `[`) throw Error(`not in a brace expression`);
    let r2 = [], i2 = [], a2 = n2 + 1, o2 = false, s2 = false, c2 = false, l2 = false, u2 = n2, d2 = ``;
    WHILE: for (; a2 < e2.length; ) {
      let t3 = e2.charAt(a2);
      if ((t3 === `!` || t3 === `^`) && a2 === n2 + 1) {
        l2 = true, a2++;
        continue;
      }
      if (t3 === `]` && o2 && !c2) {
        u2 = a2 + 1;
        break;
      }
      if (o2 = true, t3 === `\\` && !c2) {
        c2 = true, a2++;
        continue;
      }
      if (t3 === `[` && !c2) {
        for (let [t4, [o3, c3, l3]] of Object.entries(me)) if (e2.startsWith(t4, a2)) {
          if (d2) return [
            `$.`,
            false,
            e2.length - n2,
            true
          ];
          a2 += t4.length, l3 ? i2.push(o3) : r2.push(o3), s2 || (s2 = c3);
          continue WHILE;
        }
      }
      if (c2 = false, d2) {
        t3 > d2 ? r2.push(D(d2) + `-` + D(t3)) : t3 === d2 && r2.push(D(t3)), d2 = ``, a2++;
        continue;
      }
      if (e2.startsWith(`-]`, a2 + 1)) {
        r2.push(D(t3 + `-`)), a2 += 2;
        continue;
      }
      if (e2.startsWith(`-`, a2 + 1)) {
        d2 = t3, a2 += 2;
        continue;
      }
      r2.push(D(t3)), a2++;
    }
    if (u2 < a2) return [
      ``,
      false,
      0,
      false
    ];
    if (!r2.length && !i2.length) return [
      `$.`,
      false,
      e2.length - n2,
      true
    ];
    if (i2.length === 0 && r2.length === 1 && /^\\?.$/.test(r2[0]) && !l2) return [
      he(r2[0].length === 2 ? r2[0].slice(-1) : r2[0]),
      false,
      u2 - n2,
      false
    ];
    let f2 = `[` + (l2 ? `^` : ``) + O(r2) + `]`, p2 = `[` + (l2 ? `` : `^`) + O(i2) + `]`;
    return [
      r2.length && i2.length ? `(` + f2 + `|` + p2 + `)` : r2.length ? f2 : p2,
      s2,
      u2 - n2,
      true
    ];
  }, k = (e2, { windowsPathsNoEscape: t2 = false, magicalBraces: n2 = true } = {}) => n2 ? t2 ? e2.replace(/\[([^/\\])\]/g, `$1`) : e2.replace(/((?!\\).|^)\[([^/\\])\]/g, `$1$2`).replace(/\\([^/])/g, `$1`) : t2 ? e2.replace(/\[([^/\\{}])\]/g, `$1`) : e2.replace(/((?!\\).|^)\[([^/\\{}])\]/g, `$1$2`).replace(/\\([^/{}])/g, `$1`), A, j = /* @__PURE__ */ new Set([
    `!`,
    `?`,
    `+`,
    `*`,
    `@`
  ]), M = (e2) => j.has(e2), N = (e2) => M(e2.type), P = /* @__PURE__ */ new Map([
    [
      `!`,
      [
        `@`
      ]
    ],
    [
      `?`,
      [
        `?`,
        `@`
      ]
    ],
    [
      `@`,
      [
        `@`
      ]
    ],
    [
      `*`,
      [
        `*`,
        `+`,
        `?`,
        `@`
      ]
    ],
    [
      `+`,
      [
        `+`,
        `@`
      ]
    ]
  ]), F = /* @__PURE__ */ new Map([
    [
      `!`,
      [
        `?`
      ]
    ],
    [
      `@`,
      [
        `?`
      ]
    ],
    [
      `+`,
      [
        `?`,
        `*`
      ]
    ]
  ]), I = /* @__PURE__ */ new Map([
    [
      `!`,
      [
        `?`,
        `@`
      ]
    ],
    [
      `?`,
      [
        `?`,
        `@`
      ]
    ],
    [
      `@`,
      [
        `?`,
        `@`
      ]
    ],
    [
      `*`,
      [
        `*`,
        `+`,
        `?`,
        `@`
      ]
    ],
    [
      `+`,
      [
        `+`,
        `@`,
        `?`,
        `*`
      ]
    ]
  ]), L = /* @__PURE__ */ new Map([
    [
      `!`,
      /* @__PURE__ */ new Map([
        [
          `!`,
          `@`
        ]
      ])
    ],
    [
      `?`,
      /* @__PURE__ */ new Map([
        [
          `*`,
          `*`
        ],
        [
          `+`,
          `*`
        ]
      ])
    ],
    [
      `@`,
      /* @__PURE__ */ new Map([
        [
          `!`,
          `!`
        ],
        [
          `?`,
          `?`
        ],
        [
          `@`,
          `@`
        ],
        [
          `*`,
          `*`
        ],
        [
          `+`,
          `+`
        ]
      ])
    ],
    [
      `+`,
      /* @__PURE__ */ new Map([
        [
          `?`,
          `*`
        ],
        [
          `*`,
          `*`
        ]
      ])
    ]
  ]), _e = `(?!(?:^|/)\\.\\.?(?:$|/))`, R = `(?!\\.)`, ve = /* @__PURE__ */ new Set([
    `[`,
    `.`
  ]), ye = /* @__PURE__ */ new Set([
    `..`,
    `.`
  ]), be = new Set(`().*{}+?[]^$\\!`), xe = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`), z = `[^/]`, B = z + `*?`, V = z + `+?`, Se = 0, H = (_a2 = class {
    constructor(e2, t2, n2 = {}) {
      __privateAdd(this, _H_instances);
      __publicField(this, "type");
      __privateAdd(this, _e2);
      __privateAdd(this, _t);
      __privateAdd(this, _n, false);
      __privateAdd(this, _r, []);
      __privateAdd(this, _i);
      __privateAdd(this, _a);
      __privateAdd(this, _o);
      __privateAdd(this, _s, false);
      __privateAdd(this, _c);
      __privateAdd(this, _l);
      __privateAdd(this, _u, false);
      __publicField(this, "id", ++Se);
      this.type = e2, e2 && __privateSet(this, _t, true), __privateSet(this, _i, t2), __privateSet(this, _e2, __privateGet(this, _i) ? __privateGet(__privateGet(this, _i), _e2) : this), __privateSet(this, _c, __privateGet(this, _e2) === this ? n2 : __privateGet(__privateGet(this, _e2), _c)), __privateSet(this, _o, __privateGet(this, _e2) === this ? [] : __privateGet(__privateGet(this, _e2), _o)), e2 === `!` && !__privateGet(__privateGet(this, _e2), _s) && __privateGet(this, _o).push(this), __privateSet(this, _a, __privateGet(this, _i) ? __privateGet(__privateGet(this, _i), _r).length : 0);
    }
    get depth() {
      return (__privateGet(this, _i)?.depth ?? -1) + 1;
    }
    [/* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`)]() {
      return {
        "@@type": `AST`,
        id: this.id,
        type: this.type,
        root: __privateGet(this, _e2).id,
        parent: __privateGet(this, _i)?.id,
        depth: this.depth,
        partsLength: __privateGet(this, _r).length,
        parts: __privateGet(this, _r)
      };
    }
    get hasMagic() {
      if (__privateGet(this, _t) !== void 0) return __privateGet(this, _t);
      for (let e2 of __privateGet(this, _r)) if (typeof e2 != `string` && (e2.type || e2.hasMagic)) return __privateSet(this, _t, true);
      return __privateGet(this, _t);
    }
    toString() {
      return __privateGet(this, _l) === void 0 ? this.type ? __privateSet(this, _l, this.type + `(` + __privateGet(this, _r).map((e2) => String(e2)).join(`|`) + `)`) : __privateSet(this, _l, __privateGet(this, _r).map((e2) => String(e2)).join(``)) : __privateGet(this, _l);
    }
    push(...e2) {
      for (let t2 of e2) if (t2 !== ``) {
        if (typeof t2 != `string` && !(t2 instanceof A && __privateGet(t2, _i) === this)) throw Error(`invalid part: ` + t2);
        __privateGet(this, _r).push(t2);
      }
    }
    toJSON() {
      let e2 = this.type === null ? __privateGet(this, _r).slice().map((e3) => typeof e3 == `string` ? e3 : e3.toJSON()) : [
        this.type,
        ...__privateGet(this, _r).map((e3) => e3.toJSON())
      ];
      return this.isStart() && !this.type && e2.unshift([]), this.isEnd() && (this === __privateGet(this, _e2) || __privateGet(__privateGet(this, _e2), _s) && __privateGet(this, _i)?.type === `!`) && e2.push({}), e2;
    }
    isStart() {
      if (__privateGet(this, _e2) === this) return true;
      if (!__privateGet(this, _i)?.isStart()) return false;
      if (__privateGet(this, _a) === 0) return true;
      let e2 = __privateGet(this, _i);
      for (let t2 = 0; t2 < __privateGet(this, _a); t2++) {
        let n2 = __privateGet(e2, _r)[t2];
        if (!(n2 instanceof A && n2.type === `!`)) return false;
      }
      return true;
    }
    isEnd() {
      if (__privateGet(this, _e2) === this || __privateGet(this, _i)?.type === `!`) return true;
      if (!__privateGet(this, _i)?.isEnd()) return false;
      if (!this.type) return __privateGet(this, _i)?.isEnd();
      let e2 = __privateGet(this, _i) ? __privateGet(__privateGet(this, _i), _r).length : 0;
      return __privateGet(this, _a) === e2 - 1;
    }
    copyIn(e2) {
      typeof e2 == `string` ? this.push(e2) : this.push(e2.clone(this));
    }
    clone(e2) {
      let t2 = new A(this.type, e2);
      for (let e3 of __privateGet(this, _r)) t2.copyIn(e3);
      return t2;
    }
    static fromGlob(e2, t2 = {}) {
      var _a3;
      let n2 = new A(null, void 0, t2);
      return __privateMethod(_a3 = A, _H_static, f_fn).call(_a3, e2, n2, 0, t2, 0), n2;
    }
    toMMPattern() {
      if (this !== __privateGet(this, _e2)) return __privateGet(this, _e2).toMMPattern();
      let e2 = this.toString(), [t2, n2, r2, i2] = this.toRegExpSource();
      if (!(r2 || __privateGet(this, _t) || __privateGet(this, _c).nocase && !__privateGet(this, _c).nocaseMagicOnly && e2.toUpperCase() !== e2.toLowerCase())) return n2;
      let a2 = (__privateGet(this, _c).nocase ? `i` : ``) + (i2 ? `u` : ``);
      return Object.assign(RegExp(`^${t2}$`, a2), {
        _src: t2,
        _glob: e2
      });
    }
    get options() {
      return __privateGet(this, _c);
    }
    toRegExpSource(e2) {
      let t2 = e2 ?? !!__privateGet(this, _c).dot;
      if (__privateGet(this, _e2) === this && (__privateMethod(this, _H_instances, x_fn).call(this), __privateMethod(this, _H_instances, d_fn).call(this)), !N(this)) {
        let n3 = this.isStart() && this.isEnd() && !__privateGet(this, _r).some((e3) => typeof e3 != `string`), r3 = __privateGet(this, _r).map((t3) => {
          var _a3;
          let [r4, i4, a4, o3] = typeof t3 == `string` ? __privateMethod(_a3 = A, _H_static, C_fn).call(_a3, t3, __privateGet(this, _t), n3) : t3.toRegExpSource(e2);
          return __privateSet(this, _t, __privateGet(this, _t) || a4), __privateSet(this, _n, __privateGet(this, _n) || o3), r4;
        }).join(``), i3 = ``;
        if (this.isStart() && typeof __privateGet(this, _r)[0] == `string` && !(__privateGet(this, _r).length === 1 && ye.has(__privateGet(this, _r)[0]))) {
          let n4 = ve, a4 = t2 && n4.has(r3.charAt(0)) || r3.startsWith(`\\.`) && n4.has(r3.charAt(2)) || r3.startsWith(`\\.\\.`) && n4.has(r3.charAt(4)), o3 = !t2 && !e2 && n4.has(r3.charAt(0));
          i3 = a4 ? _e : o3 ? R : ``;
        }
        let a3 = ``;
        return this.isEnd() && __privateGet(__privateGet(this, _e2), _s) && __privateGet(this, _i)?.type === `!` && (a3 = `(?:$|\\/)`), [
          i3 + r3 + a3,
          k(r3),
          __privateSet(this, _t, !!__privateGet(this, _t)),
          __privateGet(this, _n)
        ];
      }
      let n2 = this.type === `*` || this.type === `+`, r2 = this.type === `!` ? `(?:(?!(?:` : `(?:`, i2 = __privateMethod(this, _H_instances, S_fn).call(this, t2);
      if (this.isStart() && this.isEnd() && !i2 && this.type !== `!`) {
        let e3 = this.toString(), t3 = this;
        return __privateSet(t3, _r, [
          e3
        ]), t3.type = null, __privateSet(t3, _t, void 0), [
          e3,
          k(this.toString()),
          false,
          false
        ];
      }
      let a2 = !n2 || e2 || t2 ? `` : __privateMethod(this, _H_instances, S_fn).call(this, true);
      a2 === i2 && (a2 = ``), a2 && (i2 = `(?:${i2})(?:${a2})*?`);
      let o2 = ``;
      if (this.type === `!` && __privateGet(this, _u)) o2 = (this.isStart() && !t2 ? R : ``) + V;
      else {
        let n3 = this.type === `!` ? `))` + (this.isStart() && !t2 && !e2 ? R : ``) + B + `)` : this.type === `@` ? `)` : this.type === `?` ? `)?` : this.type === `+` && a2 ? `)` : this.type === `*` && a2 ? `)?` : `)${this.type}`;
        o2 = r2 + i2 + n3;
      }
      return [
        o2,
        k(i2),
        __privateSet(this, _t, !!__privateGet(this, _t)),
        __privateGet(this, _n)
      ];
    }
  }, _e2 = new WeakMap(), _t = new WeakMap(), _n = new WeakMap(), _r = new WeakMap(), _i = new WeakMap(), _a = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _c = new WeakMap(), _l = new WeakMap(), _u = new WeakMap(), _H_instances = new WeakSet(), d_fn = function() {
    if (this !== __privateGet(this, _e2)) throw Error(`should only call on root`);
    if (__privateGet(this, _s)) return this;
    this.toString(), __privateSet(this, _s, true);
    let e2;
    for (; e2 = __privateGet(this, _o).pop(); ) {
      if (e2.type !== `!`) continue;
      let t2 = e2, n2 = __privateGet(t2, _i);
      for (; n2; ) {
        for (let r2 = __privateGet(t2, _a) + 1; !n2.type && r2 < __privateGet(n2, _r).length; r2++) for (let t3 of __privateGet(e2, _r)) {
          if (typeof t3 == `string`) throw Error(`string part in extglob AST??`);
          t3.copyIn(__privateGet(n2, _r)[r2]);
        }
        t2 = n2, n2 = __privateGet(t2, _i);
      }
    }
    return this;
  }, _H_static = new WeakSet(), f_fn = function(e2, t2, n2, r2, i2) {
    var _a3, _b2, _c2, _d;
    let a2 = r2.maxExtglobRecursion ?? 2, o2 = false, s2 = false, c2 = -1, l2 = false;
    if (t2.type === null) {
      let u3 = n2, d3 = ``;
      for (; u3 < e2.length; ) {
        let n3 = e2.charAt(u3++);
        if (o2 || n3 === `\\`) {
          o2 = !o2, d3 += n3;
          continue;
        }
        if (s2) {
          u3 === c2 + 1 ? (n3 === `^` || n3 === `!`) && (l2 = true) : n3 === `]` && !(u3 === c2 + 2 && l2) && (s2 = false), d3 += n3;
          continue;
        } else if (n3 === `[`) {
          s2 = true, c2 = u3, l2 = false, d3 += n3;
          continue;
        }
        if (!r2.noext && M(n3) && e2.charAt(u3) === `(` && i2 <= a2) {
          t2.push(d3), d3 = ``;
          let a3 = new A(n3, t2);
          u3 = __privateMethod(_a3 = A, _H_static, f_fn).call(_a3, e2, a3, u3, r2, i2 + 1), t2.push(a3);
          continue;
        }
        d3 += n3;
      }
      return t2.push(d3), u3;
    }
    let u2 = n2 + 1, d2 = new A(null, t2), f2 = [], p2 = ``;
    for (; u2 < e2.length; ) {
      let n3 = e2.charAt(u2++);
      if (o2 || n3 === `\\`) {
        o2 = !o2, p2 += n3;
        continue;
      }
      if (s2) {
        u2 === c2 + 1 ? (n3 === `^` || n3 === `!`) && (l2 = true) : n3 === `]` && !(u2 === c2 + 2 && l2) && (s2 = false), p2 += n3;
        continue;
      } else if (n3 === `[`) {
        s2 = true, c2 = u2, l2 = false, p2 += n3;
        continue;
      }
      if (!r2.noext && M(n3) && e2.charAt(u2) === `(` && (i2 <= a2 || t2 && __privateMethod(_b2 = t2, _H_instances, h_fn).call(_b2, n3))) {
        let a3 = t2 && __privateMethod(_c2 = t2, _H_instances, h_fn).call(_c2, n3) ? 0 : 1;
        d2.push(p2), p2 = ``;
        let o3 = new A(n3, d2);
        d2.push(o3), u2 = __privateMethod(_d = A, _H_static, f_fn).call(_d, e2, o3, u2, r2, i2 + a3);
        continue;
      }
      if (n3 === `|`) {
        d2.push(p2), p2 = ``, f2.push(d2), d2 = new A(null, t2);
        continue;
      }
      if (n3 === `)`) return p2 === `` && __privateGet(t2, _r).length === 0 && __privateSet(t2, _u, true), d2.push(p2), p2 = ``, t2.push(...f2, d2), u2;
      p2 += n3;
    }
    return t2.type = null, __privateSet(t2, _t, void 0), __privateSet(t2, _r, [
      e2.substring(n2 - 1)
    ]), u2;
  }, p_fn = function(e2) {
    return __privateMethod(this, _H_instances, m_fn).call(this, e2, F);
  }, m_fn = function(e2, t2 = P) {
    if (!e2 || typeof e2 != `object` || e2.type !== null || __privateGet(e2, _r).length !== 1 || this.type === null) return false;
    let n2 = __privateGet(e2, _r)[0];
    return !n2 || typeof n2 != `object` || n2.type === null ? false : __privateMethod(this, _H_instances, h_fn).call(this, n2.type, t2);
  }, h_fn = function(e2, t2 = I) {
    return !!t2.get(this.type)?.includes(e2);
  }, g_fn = function(e2, t2) {
    let n2 = __privateGet(e2, _r)[0], r2 = new A(null, n2, this.options);
    __privateGet(r2, _r).push(``), n2.push(r2), __privateMethod(this, _H_instances, __fn).call(this, e2, t2);
  }, __fn = function(e2, t2) {
    let n2 = __privateGet(e2, _r)[0];
    __privateGet(this, _r).splice(t2, 1, ...__privateGet(n2, _r));
    for (let e3 of __privateGet(n2, _r)) typeof e3 == `object` && __privateSet(e3, _i, this);
    __privateSet(this, _l, void 0);
  }, v_fn = function(e2) {
    return !!L.get(this.type)?.has(e2);
  }, y_fn = function(e2) {
    if (!e2 || typeof e2 != `object` || e2.type !== null || __privateGet(e2, _r).length !== 1 || this.type === null || __privateGet(this, _r).length !== 1) return false;
    let t2 = __privateGet(e2, _r)[0];
    return !t2 || typeof t2 != `object` || t2.type === null ? false : __privateMethod(this, _H_instances, v_fn).call(this, t2.type);
  }, b_fn = function(e2) {
    let t2 = L.get(this.type), n2 = __privateGet(e2, _r)[0], r2 = t2?.get(n2.type);
    if (!r2) return false;
    __privateSet(this, _r, __privateGet(n2, _r));
    for (let e3 of __privateGet(this, _r)) typeof e3 == `object` && __privateSet(e3, _i, this);
    this.type = r2, __privateSet(this, _l, void 0), __privateSet(this, _u, false);
  }, x_fn = function() {
    var _a3, _b2;
    if (N(this)) {
      let e2 = 0, t2 = false;
      do {
        t2 = true;
        for (let e3 = 0; e3 < __privateGet(this, _r).length; e3++) {
          let n2 = __privateGet(this, _r)[e3];
          typeof n2 == `object` && (__privateMethod(_a3 = n2, _H_instances, x_fn).call(_a3), __privateMethod(this, _H_instances, m_fn).call(this, n2) ? (t2 = false, __privateMethod(this, _H_instances, __fn).call(this, n2, e3)) : __privateMethod(this, _H_instances, p_fn).call(this, n2) ? (t2 = false, __privateMethod(this, _H_instances, g_fn).call(this, n2, e3)) : __privateMethod(this, _H_instances, y_fn).call(this, n2) && (t2 = false, __privateMethod(this, _H_instances, b_fn).call(this, n2)));
        }
      } while (!t2 && ++e2 < 10);
    } else for (let e2 of __privateGet(this, _r)) typeof e2 == `object` && __privateMethod(_b2 = e2, _H_instances, x_fn).call(_b2);
    __privateSet(this, _l, void 0);
  }, S_fn = function(e2) {
    return __privateGet(this, _r).map((t2) => {
      if (typeof t2 == `string`) throw Error(`string type in extglob ast??`);
      let [n2, r2, i2, a2] = t2.toRegExpSource(e2);
      return __privateSet(this, _n, __privateGet(this, _n) || a2), n2;
    }).filter((e3) => !(this.isStart() && this.isEnd()) || !!e3).join(`|`);
  }, C_fn = function(e2, t2, n2 = false) {
    let r2 = false, i2 = ``, a2 = false, o2 = false;
    for (let s2 = 0; s2 < e2.length; s2++) {
      let c2 = e2.charAt(s2);
      if (r2) {
        r2 = false, i2 += (be.has(c2) ? `\\` : ``) + c2;
        continue;
      }
      if (c2 === `*`) {
        if (o2) continue;
        o2 = true, i2 += n2 && /^[*]+$/.test(e2) ? V : B, t2 = true;
        continue;
      } else o2 = false;
      if (c2 === `\\`) {
        s2 === e2.length - 1 ? i2 += `\\\\` : r2 = true;
        continue;
      }
      if (c2 === `[`) {
        let [n3, r3, o3, c3] = ge(e2, s2);
        if (o3) {
          i2 += n3, a2 || (a2 = r3), s2 += o3 - 1, t2 || (t2 = c3);
          continue;
        }
      }
      if (c2 === `?`) {
        i2 += z, t2 = true;
        continue;
      }
      i2 += xe(c2);
    }
    return [
      i2,
      k(e2),
      !!t2,
      a2
    ];
  }, __privateAdd(_a2, _H_static), _a2);
  A = H;
  var Ce = (e2, { windowsPathsNoEscape: t2 = false, magicalBraces: n2 = false } = {}) => n2 ? t2 ? e2.replace(/[?*()[\]{}]/g, `[$&]`) : e2.replace(/[?*()[\]\\{}]/g, `\\$&`) : t2 ? e2.replace(/[?*()[\]]/g, `[$&]`) : e2.replace(/[?*()[\]\\]/g, `\\$&`), U = (e2, t2, n2 = {}) => (E(t2), !n2.nocomment && t2.charAt(0) === `#` ? false : new $(t2, n2).match(e2)), we = /^\*+([^+@!?*[(]*)$/, Te = (e2) => (t2) => !t2.startsWith(`.`) && t2.endsWith(e2), Ee = (e2) => (t2) => t2.endsWith(e2), De = (e2) => (e2 = e2.toLowerCase(), (t2) => !t2.startsWith(`.`) && t2.toLowerCase().endsWith(e2)), W = (e2) => (e2 = e2.toLowerCase(), (t2) => t2.toLowerCase().endsWith(e2)), Oe = /^\*+\.\*+$/, ke = (e2) => !e2.startsWith(`.`) && e2.includes(`.`), Ae = (e2) => e2 !== `.` && e2 !== `..` && e2.includes(`.`), je = /^\.\*+$/, Me = (e2) => e2 !== `.` && e2 !== `..` && e2.startsWith(`.`), Ne = /^\*+$/, Pe = (e2) => e2.length !== 0 && !e2.startsWith(`.`), Fe = (e2) => e2.length !== 0 && e2 !== `.` && e2 !== `..`, Ie = /^\?+([^+@!?*[(]*)?$/, Le = ([e2, t2 = ``]) => {
    let n2 = G([
      e2
    ]);
    return t2 ? (t2 = t2.toLowerCase(), (e3) => n2(e3) && e3.toLowerCase().endsWith(t2)) : n2;
  }, Re = ([e2, t2 = ``]) => {
    let n2 = K([
      e2
    ]);
    return t2 ? (t2 = t2.toLowerCase(), (e3) => n2(e3) && e3.toLowerCase().endsWith(t2)) : n2;
  }, ze = ([e2, t2 = ``]) => {
    let n2 = K([
      e2
    ]);
    return t2 ? (e3) => n2(e3) && e3.endsWith(t2) : n2;
  }, Be = ([e2, t2 = ``]) => {
    let n2 = G([
      e2
    ]);
    return t2 ? (e3) => n2(e3) && e3.endsWith(t2) : n2;
  }, G = ([e2]) => {
    let t2 = e2.length;
    return (e3) => e3.length === t2 && !e3.startsWith(`.`);
  }, K = ([e2]) => {
    let t2 = e2.length;
    return (e3) => e3.length === t2 && e3 !== `.` && e3 !== `..`;
  }, q = typeof r == `object` && r ? {}.__MINIMATCH_TESTING_PLATFORM__ || r.platform : `posix`, J = {
    win32: {
      sep: `\\`
    },
    posix: {
      sep: `/`
    }
  };
  U.sep = q === `win32` ? J.win32.sep : J.posix.sep;
  var Y = /* @__PURE__ */ Symbol(`globstar **`);
  U.GLOBSTAR = Y;
  var Ve = `[^/]*?`, He = `(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?`, Ue = `(?:(?!(?:\\/|^)\\.).)*?`;
  U.filter = (e2, t2 = {}) => (n2) => U(n2, e2, t2);
  var X = (e2, t2 = {}) => Object.assign({}, e2, t2);
  U.defaults = (e2) => {
    if (!e2 || typeof e2 != `object` || !Object.keys(e2).length) return U;
    let t2 = U;
    return Object.assign((n2, r2, i2 = {}) => t2(n2, r2, X(e2, i2)), {
      Minimatch: class extends t2.Minimatch {
        constructor(t3, n2 = {}) {
          super(t3, X(e2, n2));
        }
        static defaults(n2) {
          return t2.defaults(X(e2, n2)).Minimatch;
        }
      },
      AST: class extends t2.AST {
        constructor(t3, n2, r2 = {}) {
          super(t3, n2, X(e2, r2));
        }
        static fromGlob(n2, r2 = {}) {
          return t2.AST.fromGlob(n2, X(e2, r2));
        }
      },
      unescape: (n2, r2 = {}) => t2.unescape(n2, X(e2, r2)),
      escape: (n2, r2 = {}) => t2.escape(n2, X(e2, r2)),
      filter: (n2, r2 = {}) => t2.filter(n2, X(e2, r2)),
      defaults: (n2) => t2.defaults(X(e2, n2)),
      makeRe: (n2, r2 = {}) => t2.makeRe(n2, X(e2, r2)),
      braceExpand: (n2, r2 = {}) => t2.braceExpand(n2, X(e2, r2)),
      match: (n2, r2, i2 = {}) => t2.match(n2, r2, X(e2, i2)),
      sep: t2.sep,
      GLOBSTAR: Y
    });
  };
  var Z = (e2, t2 = {}) => (E(e2), t2.nobrace || !/\{(?:(?!\{).)*\}/.test(e2) ? [
    e2
  ] : ue(e2, {
    max: t2.braceExpandMax
  }));
  U.braceExpand = Z, U.makeRe = (e2, t2 = {}) => new $(e2, t2).makeRe(), U.match = (e2, t2, n2 = {}) => {
    let r2 = new $(t2, n2);
    return e2 = e2.filter((e3) => r2.match(e3)), r2.options.nonull && !e2.length && e2.push(t2), e2;
  };
  var Q = /[?*]|[+@!]\(.*?\)|\[|\]/, We = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`), $ = (_b = class {
    constructor(e2, t2 = {}) {
      __privateAdd(this, _$_instances);
      __publicField(this, "options");
      __publicField(this, "set");
      __publicField(this, "pattern");
      __publicField(this, "windowsPathsNoEscape");
      __publicField(this, "nonegate");
      __publicField(this, "negate");
      __publicField(this, "comment");
      __publicField(this, "empty");
      __publicField(this, "preserveMultipleSlashes");
      __publicField(this, "partial");
      __publicField(this, "globSet");
      __publicField(this, "globParts");
      __publicField(this, "nocase");
      __publicField(this, "isWindows");
      __publicField(this, "platform");
      __publicField(this, "windowsNoMagicRoot");
      __publicField(this, "maxGlobstarRecursion");
      __publicField(this, "regexp");
      E(e2), t2 || (t2 = {}), this.options = t2, this.maxGlobstarRecursion = t2.maxGlobstarRecursion ?? 200, this.pattern = e2, this.platform = t2.platform || q, this.isWindows = this.platform === `win32`, this.windowsPathsNoEscape = !!t2.windowsPathsNoEscape || t2.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, `/`)), this.preserveMultipleSlashes = !!t2.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!t2.nonegate, this.comment = false, this.empty = false, this.partial = !!t2.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = t2.windowsNoMagicRoot === void 0 ? !!(this.isWindows && this.nocase) : t2.windowsNoMagicRoot, this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1) return true;
      for (let e2 of this.set) for (let t2 of e2) if (typeof t2 != `string`) return true;
      return false;
    }
    debug(...e2) {
    }
    make() {
      let e2 = this.pattern, t2 = this.options;
      if (!t2.nocomment && e2.charAt(0) === `#`) {
        this.comment = true;
        return;
      }
      if (!e2) {
        this.empty = true;
        return;
      }
      this.parseNegate(), this.globSet = [
        ...new Set(this.braceExpand())
      ], t2.debug && (this.debug = (...e3) => console.error(...e3)), this.debug(this.pattern, this.globSet);
      let n2 = this.globSet.map((e3) => this.slashSplit(e3));
      this.globParts = this.preprocess(n2), this.debug(this.pattern, this.globParts);
      let r2 = this.globParts.map((e3, t3, n3) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          let t4 = e3[0] === `` && e3[1] === `` && (e3[2] === `?` || !Q.test(e3[2])) && !Q.test(e3[3]), n4 = /^[a-z]:/i.test(e3[0]);
          if (t4) return [
            ...e3.slice(0, 4),
            ...e3.slice(4).map((e4) => this.parse(e4))
          ];
          if (n4) return [
            e3[0],
            ...e3.slice(1).map((e4) => this.parse(e4))
          ];
        }
        return e3.map((e4) => this.parse(e4));
      });
      if (this.debug(this.pattern, r2), this.set = r2.filter((e3) => e3.indexOf(false) === -1), this.isWindows) for (let e3 = 0; e3 < this.set.length; e3++) {
        let t3 = this.set[e3];
        t3[0] === `` && t3[1] === `` && this.globParts[e3][2] === `?` && typeof t3[3] == `string` && /^[a-z]:$/i.test(t3[3]) && (t3[2] = `?`);
      }
      this.debug(this.pattern, this.set);
    }
    preprocess(e2) {
      if (this.options.noglobstar) for (let t3 of e2) for (let e3 = 0; e3 < t3.length; e3++) t3[e3] === `**` && (t3[e3] = `*`);
      let { optimizationLevel: t2 = 1 } = this.options;
      return t2 >= 2 ? (e2 = this.firstPhasePreProcess(e2), e2 = this.secondPhasePreProcess(e2)) : e2 = t2 >= 1 ? this.levelOneOptimize(e2) : this.adjascentGlobstarOptimize(e2), e2;
    }
    adjascentGlobstarOptimize(e2) {
      return e2.map((e3) => {
        let t2 = -1;
        for (; (t2 = e3.indexOf(`**`, t2 + 1)) !== -1; ) {
          let n2 = t2;
          for (; e3[n2 + 1] === `**`; ) n2++;
          n2 !== t2 && e3.splice(t2, n2 - t2);
        }
        return e3;
      });
    }
    levelOneOptimize(e2) {
      return e2.map((e3) => (e3 = e3.reduce((e4, t2) => {
        let n2 = e4[e4.length - 1];
        return t2 === `**` && n2 === `**` ? e4 : t2 === `..` && n2 && n2 !== `..` && n2 !== `.` && n2 !== `**` ? (e4.pop(), e4) : (e4.push(t2), e4);
      }, []), e3.length === 0 ? [
        ``
      ] : e3));
    }
    levelTwoFileOptimize(e2) {
      Array.isArray(e2) || (e2 = this.slashSplit(e2));
      let t2 = false;
      do {
        if (t2 = false, !this.preserveMultipleSlashes) {
          for (let n3 = 1; n3 < e2.length - 1; n3++) {
            let r2 = e2[n3];
            n3 === 1 && r2 === `` && e2[0] === `` || (r2 === `.` || r2 === ``) && (t2 = true, e2.splice(n3, 1), n3--);
          }
          e2[0] === `.` && e2.length === 2 && (e2[1] === `.` || e2[1] === ``) && (t2 = true, e2.pop());
        }
        let n2 = 0;
        for (; (n2 = e2.indexOf(`..`, n2 + 1)) !== -1; ) {
          let r2 = e2[n2 - 1];
          r2 && r2 !== `.` && r2 !== `..` && r2 !== `**` && !(this.isWindows && /^[a-z]:$/i.test(r2)) && (t2 = true, e2.splice(n2 - 1, 2), n2 -= 2);
        }
      } while (t2);
      return e2.length === 0 ? [
        ``
      ] : e2;
    }
    firstPhasePreProcess(e2) {
      let t2 = false;
      do {
        t2 = false;
        for (let n2 of e2) {
          let r2 = -1;
          for (; (r2 = n2.indexOf(`**`, r2 + 1)) !== -1; ) {
            let i3 = r2;
            for (; n2[i3 + 1] === `**`; ) i3++;
            i3 > r2 && n2.splice(r2 + 1, i3 - r2);
            let a2 = n2[r2 + 1], o2 = n2[r2 + 2], s2 = n2[r2 + 3];
            if (a2 !== `..` || !o2 || o2 === `.` || o2 === `..` || !s2 || s2 === `.` || s2 === `..`) continue;
            t2 = true, n2.splice(r2, 1);
            let c2 = n2.slice(0);
            c2[r2] = `**`, e2.push(c2), r2--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let e3 = 1; e3 < n2.length - 1; e3++) {
              let r3 = n2[e3];
              e3 === 1 && r3 === `` && n2[0] === `` || (r3 === `.` || r3 === ``) && (t2 = true, n2.splice(e3, 1), e3--);
            }
            n2[0] === `.` && n2.length === 2 && (n2[1] === `.` || n2[1] === ``) && (t2 = true, n2.pop());
          }
          let i2 = 0;
          for (; (i2 = n2.indexOf(`..`, i2 + 1)) !== -1; ) {
            let e3 = n2[i2 - 1];
            if (e3 && e3 !== `.` && e3 !== `..` && e3 !== `**`) {
              t2 = true;
              let e4 = i2 === 1 && n2[i2 + 1] === `**` ? [
                `.`
              ] : [];
              n2.splice(i2 - 1, 2, ...e4), n2.length === 0 && n2.push(``), i2 -= 2;
            }
          }
        }
      } while (t2);
      return e2;
    }
    secondPhasePreProcess(e2) {
      for (let t2 = 0; t2 < e2.length - 1; t2++) for (let n2 = t2 + 1; n2 < e2.length; n2++) {
        let r2 = this.partsMatch(e2[t2], e2[n2], !this.preserveMultipleSlashes);
        if (r2) {
          e2[t2] = [], e2[n2] = r2;
          break;
        }
      }
      return e2.filter((e3) => e3.length);
    }
    partsMatch(e2, t2, n2 = false) {
      let r2 = 0, i2 = 0, a2 = [], o2 = ``;
      for (; r2 < e2.length && i2 < t2.length; ) if (e2[r2] === t2[i2]) a2.push(o2 === `b` ? t2[i2] : e2[r2]), r2++, i2++;
      else if (n2 && e2[r2] === `**` && t2[i2] === e2[r2 + 1]) a2.push(e2[r2]), r2++;
      else if (n2 && t2[i2] === `**` && e2[r2] === t2[i2 + 1]) a2.push(t2[i2]), i2++;
      else if (e2[r2] === `*` && t2[i2] && (this.options.dot || !t2[i2].startsWith(`.`)) && t2[i2] !== `**`) {
        if (o2 === `b`) return false;
        o2 = `a`, a2.push(e2[r2]), r2++, i2++;
      } else if (t2[i2] === `*` && e2[r2] && (this.options.dot || !e2[r2].startsWith(`.`)) && e2[r2] !== `**`) {
        if (o2 === `a`) return false;
        o2 = `b`, a2.push(t2[i2]), r2++, i2++;
      } else return false;
      return e2.length === t2.length && a2;
    }
    parseNegate() {
      if (this.nonegate) return;
      let e2 = this.pattern, t2 = false, n2 = 0;
      for (let r2 = 0; r2 < e2.length && e2.charAt(r2) === `!`; r2++) t2 = !t2, n2++;
      n2 && (this.pattern = e2.slice(n2)), this.negate = t2;
    }
    matchOne(e2, t2, n2 = false) {
      let r2 = 0, i2 = 0;
      if (this.isWindows) {
        let n3 = typeof e2[0] == `string` && /^[a-z]:$/i.test(e2[0]), a3 = !n3 && e2[0] === `` && e2[1] === `` && e2[2] === `?` && /^[a-z]:$/i.test(e2[3]), o2 = typeof t2[0] == `string` && /^[a-z]:$/i.test(t2[0]), s2 = !o2 && t2[0] === `` && t2[1] === `` && t2[2] === `?` && typeof t2[3] == `string` && /^[a-z]:$/i.test(t2[3]), c2 = a3 ? 3 : n3 ? 0 : void 0, l2 = s2 ? 3 : o2 ? 0 : void 0;
        if (typeof c2 == `number` && typeof l2 == `number`) {
          let [n4, a4] = [
            e2[c2],
            t2[l2]
          ];
          n4.toLowerCase() === a4.toLowerCase() && (t2[l2] = n4, i2 = l2, r2 = c2);
        }
      }
      let { optimizationLevel: a2 = 1 } = this.options;
      return a2 >= 2 && (e2 = this.levelTwoFileOptimize(e2)), t2.includes(Y) ? __privateMethod(this, _$_instances, e_fn).call(this, e2, t2, n2, r2, i2) : __privateMethod(this, _$_instances, n_fn).call(this, e2, t2, n2, r2, i2);
    }
    braceExpand() {
      return Z(this.pattern, this.options);
    }
    parse(e2) {
      E(e2);
      let t2 = this.options;
      if (e2 === `**`) return Y;
      if (e2 === ``) return ``;
      let n2, r2 = null;
      (n2 = e2.match(Ne)) ? r2 = t2.dot ? Fe : Pe : (n2 = e2.match(we)) ? r2 = (t2.nocase ? t2.dot ? W : De : t2.dot ? Ee : Te)(n2[1]) : (n2 = e2.match(Ie)) ? r2 = (t2.nocase ? t2.dot ? Re : Le : t2.dot ? ze : Be)(n2) : (n2 = e2.match(Oe)) ? r2 = t2.dot ? Ae : ke : (n2 = e2.match(je)) && (r2 = Me);
      let i2 = H.fromGlob(e2, this.options).toMMPattern();
      return r2 && typeof i2 == `object` && Reflect.defineProperty(i2, `test`, {
        value: r2
      }), i2;
    }
    makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      let e2 = this.set;
      if (!e2.length) return this.regexp = false, this.regexp;
      let t2 = this.options, n2 = t2.noglobstar ? Ve : t2.dot ? He : Ue, r2 = new Set(t2.nocase ? [
        `i`
      ] : []), i2 = e2.map((e3) => {
        let t3 = e3.map((e4) => {
          if (e4 instanceof RegExp) for (let t4 of e4.flags.split(``)) r2.add(t4);
          return typeof e4 == `string` ? We(e4) : e4 === Y ? Y : e4._src;
        });
        t3.forEach((e4, r3) => {
          let i4 = t3[r3 + 1], a3 = t3[r3 - 1];
          e4 !== Y || a3 === Y || (a3 === void 0 ? i4 !== void 0 && i4 !== Y ? t3[r3 + 1] = `(?:\\/|` + n2 + `\\/)?` + i4 : t3[r3] = n2 : i4 === void 0 ? t3[r3 - 1] = a3 + `(?:\\/|\\/` + n2 + `)?` : i4 !== Y && (t3[r3 - 1] = a3 + `(?:\\/|\\/` + n2 + `\\/)` + i4, t3[r3 + 1] = Y));
        });
        let i3 = t3.filter((e4) => e4 !== Y);
        if (this.partial && i3.length >= 1) {
          let e4 = [];
          for (let t4 = 1; t4 <= i3.length; t4++) e4.push(i3.slice(0, t4).join(`/`));
          return `(?:` + e4.join(`|`) + `)`;
        }
        return i3.join(`/`);
      }).join(`|`), [a2, o2] = e2.length > 1 ? [
        `(?:`,
        `)`
      ] : [
        ``,
        ``
      ];
      i2 = `^` + a2 + i2 + o2 + `$`, this.partial && (i2 = `^(?:\\/|` + a2 + i2.slice(1, -1) + o2 + `)$`), this.negate && (i2 = `^(?!` + i2 + `).+$`);
      try {
        this.regexp = new RegExp(i2, [
          ...r2
        ].join(``));
      } catch {
        this.regexp = false;
      }
      return this.regexp;
    }
    slashSplit(e2) {
      return this.preserveMultipleSlashes ? e2.split(`/`) : this.isWindows && /^\/\/[^/]+/.test(e2) ? [
        ``,
        ...e2.split(/\/+/)
      ] : e2.split(/\/+/);
    }
    match(e2, t2 = this.partial) {
      if (this.debug(`match`, e2, this.pattern), this.comment) return false;
      if (this.empty) return e2 === ``;
      if (e2 === `/` && t2) return true;
      let n2 = this.options;
      this.isWindows && (e2 = e2.split(`\\`).join(`/`));
      let r2 = this.slashSplit(e2);
      this.debug(this.pattern, `split`, r2);
      let i2 = this.set;
      this.debug(this.pattern, `set`, i2);
      let a2 = r2[r2.length - 1];
      if (!a2) for (let e3 = r2.length - 2; !a2 && e3 >= 0; e3--) a2 = r2[e3];
      for (let e3 of i2) {
        let i3 = r2;
        if (n2.matchBase && e3.length === 1 && (i3 = [
          a2
        ]), this.matchOne(i3, e3, t2)) return n2.flipNegate ? true : !this.negate;
      }
      return n2.flipNegate ? false : this.negate;
    }
    static defaults(e2) {
      return U.defaults(e2).Minimatch;
    }
  }, _$_instances = new WeakSet(), e_fn = function(e2, t2, n2, r2, i2) {
    let a2 = t2.indexOf(Y, i2), o2 = t2.lastIndexOf(Y), [s2, c2, l2] = n2 ? [
      t2.slice(i2, a2),
      t2.slice(a2 + 1),
      []
    ] : [
      t2.slice(i2, a2),
      t2.slice(a2 + 1, o2),
      t2.slice(o2 + 1)
    ];
    if (s2.length) {
      let t3 = e2.slice(r2, r2 + s2.length);
      if (!__privateMethod(this, _$_instances, n_fn).call(this, t3, s2, n2, 0, 0)) return false;
      r2 += s2.length, i2 += s2.length;
    }
    let u2 = 0;
    if (l2.length) {
      if (l2.length + r2 > e2.length) return false;
      let t3 = e2.length - l2.length;
      if (__privateMethod(this, _$_instances, n_fn).call(this, e2, l2, n2, t3, 0)) u2 = l2.length;
      else {
        if (e2[e2.length - 1] !== `` || r2 + l2.length === e2.length || (t3--, !__privateMethod(this, _$_instances, n_fn).call(this, e2, l2, n2, t3, 0))) return false;
        u2 = l2.length + 1;
      }
    }
    if (!c2.length) {
      let t3 = !!u2;
      for (let n3 = r2; n3 < e2.length - u2; n3++) {
        let r3 = String(e2[n3]);
        if (t3 = true, r3 === `.` || r3 === `..` || !this.options.dot && r3.startsWith(`.`)) return false;
      }
      return n2 || t3;
    }
    let d2 = [
      [
        [],
        0
      ]
    ], f2 = d2[0], p2 = 0, m2 = [
      0
    ];
    for (let e3 of c2) e3 === Y ? (m2.push(p2), f2 = [
      [],
      0
    ], d2.push(f2)) : (f2[0].push(e3), p2++);
    let h2 = d2.length - 1, g2 = e2.length - u2;
    for (let e3 of d2) e3[1] = g2 - (m2[h2--] + e3[0].length);
    return !!__privateMethod(this, _$_instances, t_fn).call(this, e2, d2, r2, 0, n2, 0, !!u2);
  }, t_fn = function(e2, t2, n2, r2, i2, a2, o2) {
    let s2 = t2[r2];
    if (!s2) {
      for (let t3 = n2; t3 < e2.length; t3++) {
        o2 = true;
        let n3 = e2[t3];
        if (n3 === `.` || n3 === `..` || !this.options.dot && n3.startsWith(`.`)) return false;
      }
      return o2;
    }
    let [c2, l2] = s2;
    for (; n2 <= l2; ) {
      if (__privateMethod(this, _$_instances, n_fn).call(this, e2.slice(0, n2 + c2.length), c2, i2, n2, 0) && a2 < this.maxGlobstarRecursion) {
        let s4 = __privateMethod(this, _$_instances, t_fn).call(this, e2, t2, n2 + c2.length, r2 + 1, i2, a2 + 1, o2);
        if (s4 !== false) return s4;
      }
      let s3 = e2[n2];
      if (s3 === `.` || s3 === `..` || !this.options.dot && s3.startsWith(`.`)) return false;
      n2++;
    }
    return i2 || null;
  }, n_fn = function(e2, t2, n2, r2, i2) {
    let a2, o2, s2, c2;
    for (a2 = r2, o2 = i2, c2 = e2.length, s2 = t2.length; a2 < c2 && o2 < s2; a2++, o2++) {
      this.debug(`matchOne loop`);
      let n3 = t2[o2], r3 = e2[a2];
      if (this.debug(t2, n3, r3), n3 === false || n3 === Y) return false;
      let i3;
      if (typeof n3 == `string` ? (i3 = r3 === n3, this.debug(`string match`, n3, r3, i3)) : (i3 = n3.test(r3), this.debug(`pattern match`, n3, r3, i3)), !i3) return false;
    }
    if (a2 === c2 && o2 === s2) return true;
    if (a2 === c2) return n2;
    if (o2 === s2) return a2 === c2 - 1 && e2[a2] === ``;
    throw Error(`wtf?`);
  }, _b);
  U.AST = H, U.Minimatch = $, U.escape = Ce, U.unescape = k;
  var Ge = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/, Ke = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
  function qe(e2) {
    let t2 = Ge.exec(e2) || Ke.exec(e2);
    if (!t2) throw Error(`[parse-package-name] invalid package name: ${e2}`);
    return {
      name: t2[1] || ``,
      version: t2[2] || `latest`,
      path: t2[3] || ``
    };
  }
  Je = async function(t2) {
    let n2 = e(), r2 = [], i2 = t2.map(async (e2) => {
      if (e2.negated) return;
      let t3;
      if (e2.pattern.startsWith(`jsdelivr:`) ? (t3 = n2.add({
        message: `Loading source: jsDelivr (${e2.pattern})`,
        type: `info`,
        group: `source`
      }), r2.push(...await Ye(e2))) : e2.pattern.startsWith(`http`) ? (t3 = n2.add({
        message: `Loading source: Network (${e2.pattern})`,
        type: `info`,
        group: `source`
      }), r2.push(...await Xe(e2))) : e2.pattern.startsWith(`wp-content:`) && (t3 = n2.add({
        message: `Loading source: WP Content (${e2.pattern})`,
        type: `info`,
        group: `source`
      }), r2.push(...await Ze(e2))), t3) {
        let e3 = n2.logs.value.find((e4) => e4.id === t3);
        e3 && (e3.message += ` - done`);
      }
    });
    return await Promise.all(i2), r2;
  };
  async function Ye(e2) {
    let t2 = [], { name: n2, version: r2, path: i2 } = qe(e2.pattern.slice(9)), a2 = (await fetch(`https://data.jsdelivr.com/v1/packages/npm/${n2}@${r2}?structure=flat`).then((e3) => e3.json()).then((e3) => e3.files).then((e3) => e3.map((e4) => e4.name)).then((e3) => e3.filter((e4) => U(e4, i2)))).map(async (e3) => {
      let i3 = await fetch(`https://cdn.jsdelivr.net/npm/${n2}@${r2}${e3}`).then((e4) => e4.text());
      t2.push(i3);
    });
    return await Promise.all(a2), t2;
  }
  async function Xe(e2) {
    return [
      await fetch(e2.pattern).then((e3) => e3.text())
    ];
  }
  async function Ze(e2) {
    let n2 = e2.pattern.slice(11);
    return (await t().post(`admin/local-file-provider/scan`, {
      path: n2
    }).then((e3) => e3.data)).contents.map((e3) => e3.content);
  }
});
export {
  __tla,
  l as n,
  c as r,
  Je as t
};
