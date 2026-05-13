var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
import { $ as e, $n as t, B as n, D as r, E as i, En as a, Ft as o, Ht as s, J as c, L as l, Lt as u, On as d, Zn as f, b as p, ct as m, et as h, ft as g, g as _, gn as v, gt as y, h as b, jn as x, k as S, mt as C, o as w, pn as T, qt as E, r as ee, tr as D, tt as te, un as ne, v as O, vn as k, wn as A, wt as j, xn as re, xt as M, y as ie, z as ae } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { A as oe, L as se, f as N, k as P, l as ce, s as le, w as F } from "./dist-BY3QSpe-.js";
import { a as ue, t as de } from "./vue-router-BY1VLoSx.js";
function I(e2, t2 = {}, n2) {
  for (let r2 in e2) {
    let i2 = e2[r2], a2 = n2 ? `${n2}:${r2}` : r2;
    typeof i2 == `object` && i2 ? I(i2, t2, a2) : typeof i2 == `function` && (t2[a2] = i2);
  }
  return t2;
}
var fe = (() => {
  if (console.createTask) return console.createTask;
  let e2 = { run: (e3) => e3() };
  return () => e2;
})();
function L(e2, t2, n2, r2) {
  for (let i2 = n2; i2 < e2.length; i2 += 1) try {
    let n3 = r2 ? r2.run(() => e2[i2](...t2)) : e2[i2](...t2);
    if (n3 && typeof n3.then == `function`) return Promise.resolve(n3).then(() => L(e2, t2, i2 + 1, r2));
  } catch (e3) {
    return Promise.reject(e3);
  }
}
function pe(e2, t2, n2) {
  if (e2.length > 0) return L(e2, t2, 0, fe(n2));
}
function me(e2, t2, n2) {
  if (e2.length > 0) {
    let r2 = fe(n2);
    return Promise.all(e2.map((e3) => r2.run(() => e3(...t2))));
  }
}
function he(e2, t2) {
  for (let n2 of [...e2]) n2(t2);
}
var ge = class {
  constructor() {
    __publicField(this, "_hooks");
    __publicField(this, "_before");
    __publicField(this, "_after");
    __publicField(this, "_deprecatedHooks");
    __publicField(this, "_deprecatedMessages");
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(e2, t2, n2 = {}) {
    if (!e2 || typeof t2 != `function`) return () => {
    };
    let r2 = e2, i2;
    for (; this._deprecatedHooks[e2]; ) i2 = this._deprecatedHooks[e2], e2 = i2.to;
    if (i2 && !n2.allowDeprecated) {
      let e3 = i2.message;
      e3 || (e3 = `${r2} hook has been deprecated` + (i2.to ? `, please use ${i2.to}` : ``)), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e3) || (console.warn(e3), this._deprecatedMessages.add(e3));
    }
    if (!t2.name) try {
      Object.defineProperty(t2, `name`, { get: () => `_` + e2.replace(/\W+/g, `_`) + `_hook_cb`, configurable: true });
    } catch {
    }
    return this._hooks[e2] = this._hooks[e2] || [], this._hooks[e2].push(t2), () => {
      t2 && (t2 = (this.removeHook(e2, t2), void 0));
    };
  }
  hookOnce(e2, t2) {
    let n2, r2 = (...e3) => (typeof n2 == `function` && n2(), n2 = void 0, r2 = void 0, t2(...e3));
    return n2 = this.hook(e2, r2), n2;
  }
  removeHook(e2, t2) {
    let n2 = this._hooks[e2];
    if (n2) {
      let r2 = n2.indexOf(t2);
      r2 !== -1 && n2.splice(r2, 1), n2.length === 0 && (this._hooks[e2] = void 0);
    }
  }
  clearHook(e2) {
    this._hooks[e2] = void 0;
  }
  deprecateHook(e2, t2) {
    this._deprecatedHooks[e2] = typeof t2 == `string` ? { to: t2 } : t2;
    let n2 = this._hooks[e2] || [];
    this._hooks[e2] = void 0;
    for (let t3 of n2) this.hook(e2, t3);
  }
  deprecateHooks(e2) {
    for (let t2 in e2) this.deprecateHook(t2, e2[t2]);
  }
  addHooks(e2) {
    let t2 = I(e2), n2 = Object.keys(t2).map((e3) => this.hook(e3, t2[e3]));
    return () => {
      for (let e3 of n2) e3();
      n2.length = 0;
    };
  }
  removeHooks(e2) {
    let t2 = I(e2);
    for (let e3 in t2) this.removeHook(e3, t2[e3]);
  }
  removeAllHooks() {
    this._hooks = {};
  }
  callHook(e2, ...t2) {
    return this.callHookWith(pe, e2, t2);
  }
  callHookParallel(e2, ...t2) {
    return this.callHookWith(me, e2, t2);
  }
  callHookWith(e2, t2, n2) {
    let r2 = this._before || this._after ? { name: t2, args: n2, context: {} } : void 0;
    this._before && he(this._before, r2);
    let i2 = e2(this._hooks[t2] ? [...this._hooks[t2]] : [], n2, t2);
    return i2 instanceof Promise ? i2.finally(() => {
      this._after && r2 && he(this._after, r2);
    }) : (this._after && r2 && he(this._after, r2), i2);
  }
  beforeEach(e2) {
    return this._before = this._before || [], this._before.push(e2), () => {
      if (this._before !== void 0) {
        let t2 = this._before.indexOf(e2);
        t2 !== -1 && this._before.splice(t2, 1);
      }
    };
  }
  afterEach(e2) {
    return this._after = this._after || [], this._after.push(e2), () => {
      if (this._after !== void 0) {
        let t2 = this._after.indexOf(e2);
        t2 !== -1 && this._after.splice(t2, 1);
      }
    };
  }
};
function _e() {
  return new ge();
}
var ve = { ui: { colors: { primary: `indigo`, secondary: `blue`, success: `green`, info: `blue`, warning: `yellow`, error: `red`, neutral: `zinc` }, icons: { arrowDown: `i-lucide-arrow-down`, arrowLeft: `i-lucide-arrow-left`, arrowRight: `i-lucide-arrow-right`, arrowUp: `i-lucide-arrow-up`, caution: `i-lucide-circle-alert`, check: `i-lucide-check`, chevronDoubleLeft: `i-lucide-chevrons-left`, chevronDoubleRight: `i-lucide-chevrons-right`, chevronDown: `i-lucide-chevron-down`, chevronLeft: `i-lucide-chevron-left`, chevronRight: `i-lucide-chevron-right`, chevronUp: `i-lucide-chevron-up`, close: `i-lucide-x`, copy: `i-lucide-copy`, copyCheck: `i-lucide-copy-check`, dark: `i-lucide-moon`, drag: `i-lucide-grip-vertical`, ellipsis: `i-lucide-ellipsis`, error: `i-lucide-circle-x`, external: `i-lucide-arrow-up-right`, eye: `i-lucide-eye`, eyeOff: `i-lucide-eye-off`, file: `i-lucide-file`, folder: `i-lucide-folder`, folderOpen: `i-lucide-folder-open`, hash: `i-lucide-hash`, info: `i-lucide-info`, light: `i-lucide-sun`, loading: `i-lucide-loader-circle`, menu: `i-lucide-menu`, minus: `i-lucide-minus`, panelClose: `i-lucide-panel-left-close`, panelOpen: `i-lucide-panel-left-open`, plus: `i-lucide-plus`, reload: `i-lucide-rotate-ccw`, search: `i-lucide-search`, stop: `i-lucide-square`, success: `i-lucide-circle-check`, system: `i-lucide-monitor`, tip: `i-lucide-lightbulb`, upload: `i-lucide-upload`, warning: `i-lucide-triangle-alert` }, tv: { twMergeConfig: {} }, commandPalette: { slots: { root: `z-[10001]` } } }, colorMode: true }, ye = v(ve), R = () => ye, be = { meta: ``, ctrl: ``, alt: ``, win: `\u229E`, command: `\u2318`, shift: `\u21E7`, control: `\u2303`, option: `\u2325`, enter: `\u21B5`, delete: `\u2326`, backspace: `\u232B`, escape: `Esc`, tab: `\u21E5`, capslock: `\u21EA`, arrowup: `\u2191`, arrowright: `\u2192`, arrowdown: `\u2193`, arrowleft: `\u2190`, pageup: `\u21DE`, pagedown: `\u21DF`, home: `\u2196`, end: `\u2198` }, xe = F(() => {
  let e2 = _(() => navigator && navigator.userAgent && navigator.userAgent.match(/Macintosh;/)), t2 = v({ meta: ` `, alt: ` `, ctrl: ` ` });
  m(() => {
    t2.meta = e2.value ? be.command : `Ctrl`, t2.ctrl = e2.value ? be.control : `Ctrl`, t2.alt = e2.value ? be.option : `Alt`;
  });
  function n2(e3) {
    if (e3) return [`meta`, `alt`, `ctrl`].includes(e3) ? t2[e3] : be[e3] || e3;
  }
  return { macOS: e2, getKbdKey: n2 };
}), Se = /^[^-]+.*-.*[^-]+$/, Ce = /^[^_]+.*_.*[^_]+$/, we = [`arrowleft`, `arrowright`, `arrowup`, `arrowright`, `tab`, `escape`, `enter`, `backspace`];
function Te(e2) {
  return /^[a-z]$/i.test(e2) ? `Key${e2.toUpperCase()}` : /^\d$/.test(e2) ? `Digit${e2}` : /^f\d+$/i.test(e2) ? e2.toUpperCase() : { space: `Space`, enter: `Enter`, escape: `Escape`, tab: `Tab`, backspace: `Backspace`, delete: `Delete`, arrowup: `ArrowUp`, arrowdown: `ArrowDown`, arrowleft: `ArrowLeft`, arrowright: `ArrowRight` }[e2.toLowerCase()] || e2;
}
function Ee(e2, t2 = `_`) {
  let n2 = {};
  function r2(e3) {
    e3.forEach((e4) => {
      if (e4.kbds?.length && (e4.onSelect || e4.onClick)) {
        let r3 = e4.kbds.join(t2);
        n2[r3] = e4.onSelect || e4.onClick;
      }
      e4.children && r2(e4.children.flat()), e4.items && r2(e4.items.flat());
    });
  }
  return r2(e2.flat()), n2;
}
function De(e2, t2 = {}) {
  let n2 = k([]), r2 = () => {
    n2.value.splice(0, n2.value.length);
  }, i2 = se(r2, t2.chainDelay ?? 800), { macOS: o2 } = xe(), s2 = le(), c2 = t2.layoutIndependent ?? false, l2 = we.map((e3) => Te(e3)), u2 = (e3) => {
    if (!e3.key) return;
    let t3 = c2 ? /^Key[A-Z]$/i.test(e3.code) : /^[a-z]{1}$/i.test(e3.key), a2 = c2 ? l2.includes(e3.code) : we.includes(e3.key.toLowerCase()), o3;
    if (n2.value.push(c2 ? e3.code : e3.key), n2.value.length >= 2) {
      o3 = n2.value.slice(-2).join(`-`);
      for (let t4 of f2.value.filter((e4) => e4.chained)) if (t4.key === o3) {
        t4.enabled && (e3.preventDefault(), t4.handler(e3)), r2();
        return;
      }
    }
    for (let n3 of f2.value.filter((e4) => !e4.chained)) {
      if (c2) {
        if (e3.code !== n3.key) continue;
      } else if (e3.key.toLowerCase() !== n3.key) continue;
      if (e3.metaKey === n3.metaKey && e3.ctrlKey === n3.ctrlKey && e3.altKey === n3.altKey && !((t3 || a2 || n3.shiftKey || e3.shiftKey && (e3.metaKey || e3.ctrlKey)) && e3.shiftKey !== n3.shiftKey)) {
        n3.enabled && (e3.preventDefault(), n3.handler(e3)), r2();
        return;
      }
    }
    i2();
  }, d2 = _(() => {
    let e3 = s2.value?.tagName, t3 = s2.value?.contentEditable;
    return e3 === `INPUT` || e3 === `TEXTAREA` || t3 === `true` || t3 === `plaintext-only` ? s2.value?.name || true : false;
  }), f2 = _(() => Object.entries(a(e2)).map(([e3, t3]) => {
    if (!t3) return null;
    let n3;
    e3.includes(`-`) && e3 !== `-` && !e3.includes(`_`) && !e3.match(Se)?.length && console.trace(`[Shortcut] Invalid key: "${e3}"`), e3.includes(`_`) && e3 !== `_` && !e3.match(Ce)?.length && console.trace(`[Shortcut] Invalid key: "${e3}"`);
    let r3 = e3.includes(`-`) && e3 !== `-` && !e3.includes(`_`);
    if (r3) n3 = c2 ? { key: e3.split(`-`).map((e4) => Te(e4)).join(`-`), metaKey: false, ctrlKey: false, shiftKey: false, altKey: false } : { key: e3.toLowerCase(), metaKey: false, ctrlKey: false, shiftKey: false, altKey: false };
    else {
      let t4 = e3.toLowerCase().split(`_`).map((e4) => e4), r4 = t4.filter((e4) => ![`meta`, `command`, `ctrl`, `shift`, `alt`, `option`].includes(e4)).join(`_`);
      c2 && (r4 = Te(r4)), n3 = { key: r4, metaKey: t4.includes(`meta`) || t4.includes(`command`), ctrlKey: t4.includes(`ctrl`), shiftKey: t4.includes(`shift`), altKey: t4.includes(`alt`) || t4.includes(`option`) };
    }
    if (n3.chained = r3, !o2.value && n3.metaKey && !n3.ctrlKey && (n3.metaKey = false, n3.ctrlKey = true), typeof t3 == `function` ? n3.handler = t3 : typeof t3 == `object` && (n3 = { ...n3, handler: t3.handler }), !n3.handler) return console.trace(`[Shortcut] Invalid value`), null;
    let i3 = true;
    return t3.usingInput ? typeof t3.usingInput == `string` && (i3 = d2.value === t3.usingInput) : i3 = !d2.value, n3.enabled = i3, n3;
  }).filter(Boolean));
  return N(`keydown`, u2);
}
function Oe(e2) {
  if (typeof e2 != `object` || !e2) return false;
  let t2 = Object.getPrototypeOf(e2);
  return t2 !== null && t2 !== Object.prototype && Object.getPrototypeOf(t2) !== null || Symbol.iterator in e2 ? false : Symbol.toStringTag in e2 ? Object.prototype.toString.call(e2) === `[object Module]` : true;
}
function ke(e2, t2, n2 = `.`, r2) {
  if (!Oe(t2)) return ke(e2, {}, n2, r2);
  let i2 = { ...t2 };
  for (let t3 of Object.keys(e2)) {
    if (t3 === `__proto__` || t3 === `constructor`) continue;
    let a2 = e2[t3];
    a2 != null && (r2 && r2(i2, t3, a2, n2) || (Array.isArray(a2) && Array.isArray(i2[t3]) ? i2[t3] = [...a2, ...i2[t3]] : Oe(a2) && Oe(i2[t3]) ? i2[t3] = ke(a2, i2[t3], (n2 ? `${n2}.` : ``) + t3.toString(), r2) : i2[t3] = a2));
  }
  return i2;
}
function Ae(e2) {
  return (...t2) => t2.reduce((t3, n2) => ke(t3, n2, ``, e2), {});
}
var z = Ae();
function je(e2) {
  return z(e2, { dir: `ltr` });
}
function Me(e2) {
  return typeof e2 == `string` ? `'${e2}'` : new Ne().serialize(e2);
}
var Ne = (function() {
  var _e2;
  class e2 {
    constructor() {
      __privateAdd(this, _e2, /* @__PURE__ */ new Map());
    }
    compare(e3, t2) {
      let n2 = typeof e3, r2 = typeof t2;
      return n2 === `string` && r2 === `string` ? e3.localeCompare(t2) : n2 === `number` && r2 === `number` ? e3 - t2 : String.prototype.localeCompare.call(this.serialize(e3, true), this.serialize(t2, true));
    }
    serialize(e3, t2) {
      if (e3 === null) return `null`;
      switch (typeof e3) {
        case `string`:
          return t2 ? e3 : `'${e3}'`;
        case `bigint`:
          return `${e3}n`;
        case `object`:
          return this.$object(e3);
        case `function`:
          return this.$function(e3);
      }
      return String(e3);
    }
    serializeObject(e3) {
      let t2 = Object.prototype.toString.call(e3);
      if (t2 !== `[object Object]`) return this.serializeBuiltInType(t2.length < 10 ? `unknown:${t2}` : t2.slice(8, -1), e3);
      let n2 = e3.constructor, r2 = n2 === Object || n2 === void 0 ? `` : n2.name;
      if (r2 !== `` && globalThis[r2] === n2) return this.serializeBuiltInType(r2, e3);
      if (typeof e3.toJSON == `function`) {
        let t3 = e3.toJSON();
        return r2 + (typeof t3 == `object` && t3 ? this.$object(t3) : `(${this.serialize(t3)})`);
      }
      return this.serializeObjectEntries(r2, Object.entries(e3));
    }
    serializeBuiltInType(e3, t2) {
      let n2 = this[`$` + e3];
      if (n2) return n2.call(this, t2);
      if (typeof t2?.entries == `function`) return this.serializeObjectEntries(e3, t2.entries());
      throw Error(`Cannot serialize ${e3}`);
    }
    serializeObjectEntries(e3, t2) {
      let n2 = Array.from(t2).sort((e4, t3) => this.compare(e4[0], t3[0])), r2 = `${e3}{`;
      for (let e4 = 0; e4 < n2.length; e4++) {
        let [t3, i2] = n2[e4];
        r2 += `${this.serialize(t3, true)}:${this.serialize(i2)}`, e4 < n2.length - 1 && (r2 += `,`);
      }
      return r2 + `}`;
    }
    $object(e3) {
      let t2 = __privateGet(this, _e2).get(e3);
      return t2 === void 0 && (__privateGet(this, _e2).set(e3, `#${__privateGet(this, _e2).size}`), t2 = this.serializeObject(e3), __privateGet(this, _e2).set(e3, t2)), t2;
    }
    $function(e3) {
      let t2 = Function.prototype.toString.call(e3);
      return t2.slice(-15) === `[native code] }` ? `${e3.name || ``}()[native]` : `${e3.name}(${e3.length})${t2.replace(/\s*\n\s*/g, ``)}`;
    }
    $Array(e3) {
      let t2 = `[`;
      for (let n2 = 0; n2 < e3.length; n2++) t2 += this.serialize(e3[n2]), n2 < e3.length - 1 && (t2 += `,`);
      return t2 + `]`;
    }
    $Date(e3) {
      try {
        return `Date(${e3.toISOString()})`;
      } catch {
        return `Date(null)`;
      }
    }
    $ArrayBuffer(e3) {
      return `ArrayBuffer[${new Uint8Array(e3).join(`,`)}]`;
    }
    $Set(e3) {
      return `Set${this.$Array(Array.from(e3).sort((e4, t2) => this.compare(e4, t2)))}`;
    }
    $Map(e3) {
      return this.serializeObjectEntries(`Map`, e3.entries());
    }
  }
  _e2 = new WeakMap();
  for (let t2 of [`Error`, `RegExp`, `URL`]) e2.prototype[`$` + t2] = function(e3) {
    return `${t2}(${e3})`;
  };
  for (let t2 of [`Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`]) e2.prototype[`$` + t2] = function(e3) {
    return `${t2}[${e3.join(`,`)}]`;
  };
  for (let t2 of [`BigInt64Array`, `BigUint64Array`]) e2.prototype[`$` + t2] = function(e3) {
    return `${t2}[${e3.join(`n,`)}${e3.length > 0 ? `n` : ``}]`;
  };
  return e2;
})();
function Pe(e2, t2) {
  return e2 === t2 || Me(e2) === Me(t2);
}
function Fe(e2, t2) {
  return Ie(Le(e2), Le(t2));
}
function Ie(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Set([...Object.keys(e2.props || {}), ...Object.keys(t2.props || {})]);
  if (e2.props && t2.props) for (let i2 of r2) {
    let r3 = e2.props[i2], a2 = t2.props[i2];
    r3 && a2 ? n2.push(...Ie(e2.props?.[i2], t2.props?.[i2])) : (r3 || a2) && n2.push(new Re((a2 || r3).key, r3 ? `removed` : `added`, a2, r3));
  }
  return r2.size === 0 && e2.hash !== t2.hash && n2.push(new Re((t2 || e2).key, `changed`, t2, e2)), n2;
}
function Le(e2, t2 = ``) {
  if (e2 && typeof e2 != `object`) return new ze(t2, e2, Me(e2));
  let n2 = {}, r2 = [];
  for (let i2 in e2) n2[i2] = Le(e2[i2], t2 ? `${t2}.${i2}` : i2), r2.push(n2[i2].hash);
  return new ze(t2, e2, `{${r2.join(`:`)}}`, n2);
}
var Re = class {
  constructor(e2, t2, n2, r2) {
    this.key = e2, this.type = t2, this.newValue = n2, this.oldValue = r2;
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case `added`:
        return `Added   \`${this.key}\``;
      case `removed`:
        return `Removed \`${this.key}\``;
      case `changed`:
        return `Changed \`${this.key}\` from \`${this.oldValue?.toString() || `-`}\` to \`${this.newValue.toString()}\``;
    }
  }
}, ze = class {
  constructor(e2, t2, n2, r2) {
    this.key = e2, this.value = t2, this.hash = n2, this.props = r2;
  }
  toString() {
    return this.props ? `{${Object.keys(this.props).join(`,`)}}` : JSON.stringify(this.value);
  }
  toJSON() {
    let e2 = this.key || `.`;
    return this.props ? `${e2}({${Object.keys(this.props).join(`,`)}})` : `${e2}(${this.value})`;
  }
};
String.fromCharCode;
var Be = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, Ve = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, He = /^([/\\]\s*){2,}[^/\\]/;
function Ue(e2, t2 = {}) {
  return typeof t2 == `boolean` && (t2 = { acceptRelative: t2 }), t2.strict ? Be.test(e2) : Ve.test(e2) || (t2.acceptRelative ? He.test(e2) : false);
}
function We(e2, t2) {
  let n2 = { ...e2 };
  for (let e3 of t2) delete n2[e3];
  return n2;
}
function B(e2, t2, n2) {
  typeof t2 == `string` && (t2 = t2.split(`.`).map((e3) => {
    let t3 = Number(e3);
    return Number.isNaN(t3) ? e3 : t3;
  }));
  let r2 = e2;
  for (let e3 of t2) {
    if (r2 == null) return n2;
    r2 = r2[e3];
  }
  return r2 === void 0 ? n2 : r2;
}
function Ge(e2) {
  let t2 = Number.parseFloat(e2);
  return Number.isNaN(t2) ? e2 : t2;
}
function Ke(e2, t2, n2) {
  return e2 === void 0 || t2 === void 0 ? false : typeof e2 == `string` ? e2 === t2 : typeof n2 == `function` ? n2(e2, t2) : typeof n2 == `string` ? B(e2, n2) === B(t2, n2) : Pe(e2, t2);
}
function qe(e2) {
  if (e2 == null) return true;
  if (typeof e2 == `boolean` || typeof e2 == `number`) return false;
  if (typeof e2 == `string`) return e2.trim().length === 0;
  if (Array.isArray(e2)) return e2.length === 0;
  if (e2 instanceof Map || e2 instanceof Set) return e2.size === 0;
  if (e2 instanceof Date || e2 instanceof RegExp || typeof e2 == `function`) return false;
  if (typeof e2 == `object`) {
    for (let t2 in e2) if (Object.prototype.hasOwnProperty.call(e2, t2)) return false;
    return true;
  }
  return false;
}
function Je(e2, t2, n2 = {}) {
  let { valueKey: r2, labelKey: i2, by: a2 } = n2, o2 = e2.find((e3) => Ke(typeof e3 == `object` && e3 && r2 ? B(e3, r2) : e3, t2, a2));
  if (qe(t2) && o2) return i2 ? B(o2, i2) : void 0;
  if (qe(t2)) return;
  let s2 = o2 ?? t2;
  if (s2 != null) return typeof s2 == `object` ? i2 ? B(s2, i2) : void 0 : String(s2);
}
function Ye(e2) {
  return Array.isArray(e2[0]);
}
function Xe(e2, t2) {
  return !e2 && !t2 ? `` : [...Array.isArray(e2) ? e2 : [e2], t2].filter(Boolean);
}
function Ze(e2) {
  return e2.map((e3) => {
    if (!e3.children || typeof e3.children == `string`) return e3.children || ``;
    if (Array.isArray(e3.children)) return Ze(e3.children);
    if (e3.children.default) return Ze(e3.children.default());
  }).join(``);
}
function Qe(e2, t2) {
  return Object.entries(e2).reduce((e3, [n2, r2]) => (e3[n2] = typeof r2 == `function` ? r2({ class: t2?.[n2] }) : r2, e3), { ...t2 || {} });
}
function $e(e2) {
  return (t2, n2) => et(t2, n2, d(e2));
}
function et(e2, t2, n2) {
  return B(n2, `messages.${e2}`, e2).replace(/\{(\w+)\}/g, (e3, n3) => `${t2?.[n3] ?? `{${n3}}`}`);
}
function tt(e2) {
  return { lang: _(() => d(e2).name), code: _(() => d(e2).code), dir: _(() => d(e2).dir), locale: ne(e2) ? e2 : k(e2), t: $e(e2) };
}
var nt = je({ name: `English`, code: `en`, messages: { alert: { close: `Close` }, authForm: { hidePassword: `Hide password`, showPassword: `Show password`, submit: `Continue` }, banner: { close: `Close` }, calendar: { nextMonth: `Next month`, nextYear: `Next year`, prevMonth: `Previous month`, prevYear: `Previous year` }, carousel: { dots: `Choose slide to display`, goto: `Go to slide {slide}`, next: `Next`, prev: `Prev` }, chatPrompt: { placeholder: `Type your message here\u2026` }, chatPromptSubmit: { label: `Send prompt` }, colorMode: { dark: `Dark`, light: `Light`, switchToDark: `Switch to dark mode`, switchToLight: `Switch to light mode`, system: `System` }, commandPalette: { back: `Back`, close: `Close`, noData: `No data`, noMatch: `No matching data`, placeholder: `Type a command or search\u2026` }, contentSearch: { links: `Links`, theme: `Theme` }, contentSearchButton: { label: `Search\u2026` }, contentToc: { title: `On this page` }, dropdownMenu: { noMatch: `No matching data`, search: `Search\u2026` }, dashboardSearch: { theme: `Theme` }, dashboardSearchButton: { label: `Search\u2026` }, dashboardSidebarCollapse: { collapse: `Collapse sidebar`, expand: `Expand sidebar` }, dashboardSidebarToggle: { close: `Close sidebar`, open: `Open sidebar` }, error: { clear: `Back to home` }, fileUpload: { removeFile: `Remove {filename}` }, header: { close: `Close menu`, open: `Open menu` }, inputMenu: { create: `Create "{label}"`, noData: `No data`, noMatch: `No matching data` }, inputNumber: { decrement: `Decrement`, increment: `Increment` }, listbox: { noData: `No data`, noMatch: `No matching data`, search: `Search\u2026` }, modal: { close: `Close` }, pricingTable: { caption: `Pricing plan comparison` }, prose: { codeCollapse: { closeText: `Collapse`, name: `code`, openText: `Expand` }, collapsible: { closeText: `Hide`, name: `properties`, openText: `Show` }, pre: { copy: `Copy code to clipboard` }, prompt: { copy: `Copy prompt`, openIn: `Open in {name}` } }, chatReasoning: { thinking: `Thinking\u2026`, thought: `Thought`, thoughtFor: `Thought for {duration}` }, sidebar: { close: `Close`, toggle: `Toggle` }, selectMenu: { create: `Create "{label}"`, noData: `No data`, noMatch: `No matching data`, search: `Search\u2026` }, slideover: { close: `Close` }, table: { noData: `No data` }, toast: { close: `Close` } } }), rt = /* @__PURE__ */ Symbol.for(`nuxt-ui.locale-context`), it = F((e2) => {
  let t2 = e2 || A(c(rt, nt));
  return tt(_(() => t2.value || nt));
}), at = () => {
  if (!ve.colorMode) return { forced: true };
  let { store: e2, system: t2 } = ce();
  return { get preference() {
    return e2.value === `auto` ? `system` : e2.value;
  }, set preference(t3) {
    e2.value = t3 === `system` ? `auto` : t3;
  }, get value() {
    return e2.value === `auto` ? t2.value : e2.value;
  }, forced: false };
}, ot = (e2, t2 = {}) => {
  let n2 = k(t2?.default?.() ?? null);
  return { value: n2.value, get: () => n2.value, set: () => {
  }, update: () => {
  }, refresh: () => Promise.resolve(n2.value), remove: () => {
  } };
}, st = {}, ct = (e2, t2) => {
  if (st[e2]) return st[e2];
  let n2 = k(t2());
  return st[e2] = n2, n2;
}, lt = _e();
function ut() {
  return { isHydrating: true, payload: { serverRendered: false }, hooks: lt, hook: lt.hook };
}
function dt(e2, t2) {
  T(ut().hook(e2, t2));
}
function ft(e2) {
  return { install(t2) {
    t2.runWithContext(() => e2({ vueApp: t2 }));
  } };
}
function pt(e2, t2) {
  let n2 = typeof e2 == `string` && !t2 ? `${e2}Context` : t2, r2 = Symbol(n2);
  return [(t3) => {
    let n3 = c(r2, t3);
    if (n3 || n3 === null) return n3;
    throw Error(`Injection \`${r2.toString()}\` not found. Component must be used within ${Array.isArray(e2) ? `one of the following components: ${e2.join(`, `)}` : `\`${e2}\``}`);
  }, (e3) => (y(r2, e3), e3)];
}
function mt(e2) {
  return e2 ? e2.flatMap((e3) => e3.type === w ? mt(e3.children) : [e3]) : [];
}
function ht(e2) {
  let t2 = l(), n2 = Object.keys(t2?.type.props ?? {}).reduce((e3, n3) => {
    let r3 = (t2?.type.props[n3]).default;
    return r3 !== void 0 && (e3[n3] = r3), e3;
  }, {}), r2 = A(e2);
  return _(() => {
    let e3 = {}, i2 = t2?.vnode.props ?? {};
    return Object.keys(i2).forEach((t3) => {
      e3[x(t3)] = i2[t3];
    }), Object.keys({ ...n2, ...e3 }).reduce((e4, t3) => (r2.value[t3] !== void 0 && (e4[t3] = r2.value[t3]), e4), {});
  });
}
var gt = S({ name: `PrimitiveSlot`, inheritAttrs: false, setup(e2, { attrs: t2, slots: n2 }) {
  return () => {
    if (!n2.default) return null;
    let e3 = mt(n2.default()), r2 = e3.findIndex((e4) => e4.type !== ee);
    if (r2 === -1) return e3;
    let i2 = e3[r2];
    delete i2.props?.ref;
    let a2 = i2.props ? h(t2, i2.props) : t2, o2 = b({ ...i2, props: {} }, a2);
    return e3.length === 1 ? o2 : (e3[r2] = o2, e3);
  };
} }), _t = [`area`, `img`, `input`], vt = S({ name: `Primitive`, inheritAttrs: false, props: { asChild: { type: Boolean, default: false }, as: { type: [String, Object], default: `div` } }, setup(e2, { attrs: t2, slots: r2 }) {
  let i2 = e2.asChild ? `template` : e2.as;
  return typeof i2 == `string` && _t.includes(i2) ? () => n(i2, t2) : i2 === `template` ? () => n(gt, t2, { default: r2.default }) : () => n(e2.as, t2, { default: r2.default });
} }), [yt, bt] = pt(`UTheme`, `RootContext`);
function xt(e2, t2) {
  let { ui: n2 } = yt({ ui: _(() => ({})) });
  return _(() => {
    let r2 = B(n2.value, e2) || {};
    return z(t2.ui ?? {}, r2);
  });
}
var St = /\s+/g, Ct = (e2) => typeof e2 != `string` || !e2 ? e2 : e2.replace(St, ` `).trim(), wt = (...e2) => {
  let t2 = [], n2 = (e3) => {
    if (!e3 && e3 !== 0 && e3 !== 0n) return;
    if (Array.isArray(e3)) {
      for (let t3 = 0, r3 = e3.length; t3 < r3; t3++) n2(e3[t3]);
      return;
    }
    let r2 = typeof e3;
    if (r2 === `string` || r2 === `number` || r2 === `bigint`) {
      if (r2 === `number` && e3 !== e3) return;
      t2.push(String(e3));
    } else if (r2 === `object`) {
      let n3 = Object.keys(e3);
      for (let r3 = 0, i2 = n3.length; r3 < i2; r3++) {
        let i3 = n3[r3];
        e3[i3] && t2.push(i3);
      }
    }
  };
  for (let t3 = 0, r2 = e2.length; t3 < r2; t3++) {
    let r3 = e2[t3];
    r3 != null && n2(r3);
  }
  return t2.length > 0 ? Ct(t2.join(` `)) : void 0;
}, Tt = (e2) => e2 === false ? `false` : e2 === true ? `true` : e2 === 0 ? `0` : e2, V = (e2) => {
  if (!e2 || typeof e2 != `object`) return true;
  for (let t2 in e2) return false;
  return true;
}, Et = (e2, t2) => {
  if (e2 === t2) return true;
  if (!e2 || !t2) return false;
  let n2 = Object.keys(e2), r2 = Object.keys(t2);
  if (n2.length !== r2.length) return false;
  for (let i2 = 0; i2 < n2.length; i2++) {
    let a2 = n2[i2];
    if (!r2.includes(a2) || e2[a2] !== t2[a2]) return false;
  }
  return true;
}, Dt = (e2, t2) => {
  for (let n2 in t2) if (Object.prototype.hasOwnProperty.call(t2, n2)) {
    let r2 = t2[n2];
    n2 in e2 ? e2[n2] = wt(e2[n2], r2) : e2[n2] = r2;
  }
  return e2;
}, Ot = (e2, t2) => {
  for (let n2 = 0; n2 < e2.length; n2++) {
    let r2 = e2[n2];
    Array.isArray(r2) ? Ot(r2, t2) : r2 && t2.push(r2);
  }
}, kt = (...e2) => {
  let t2 = [];
  Ot(e2, t2);
  let n2 = [];
  for (let e3 = 0; e3 < t2.length; e3++) t2[e3] && n2.push(t2[e3]);
  return n2;
}, At = (e2, t2) => {
  let n2 = {};
  for (let r2 in e2) {
    let i2 = e2[r2];
    if (r2 in t2) {
      let e3 = t2[r2];
      Array.isArray(i2) || Array.isArray(e3) ? n2[r2] = kt(e3, i2) : typeof i2 == `object` && typeof e3 == `object` && i2 && e3 ? n2[r2] = At(i2, e3) : n2[r2] = e3 + ` ` + i2;
    } else n2[r2] = i2;
  }
  for (let r2 in t2) r2 in e2 || (n2[r2] = t2[r2]);
  return n2;
}, jt = { twMerge: true, twMergeConfig: {} };
function Mt() {
  let e2 = null, t2 = {}, n2 = false;
  return { get cachedTwMerge() {
    return e2;
  }, set cachedTwMerge(t3) {
    e2 = t3;
  }, get cachedTwMergeConfig() {
    return t2;
  }, set cachedTwMergeConfig(e3) {
    t2 = e3;
  }, get didTwMergeConfigChange() {
    return n2;
  }, set didTwMergeConfigChange(e3) {
    n2 = e3;
  }, reset() {
    e2 = null, t2 = {}, n2 = false;
  } };
}
var H = Mt(), Nt = (e2) => {
  let t2 = (t3, n2) => {
    let { extend: r2 = null, slots: i2 = {}, variants: a2 = {}, compoundVariants: o2 = [], compoundSlots: s2 = [], defaultVariants: c2 = {} } = t3, l2 = { ...jt, ...n2 }, u2 = r2?.base ? wt(r2.base, t3?.base) : t3?.base, d2 = r2?.variants && !V(r2.variants) ? At(a2, r2.variants) : a2, f2 = r2?.defaultVariants && !V(r2.defaultVariants) ? { ...r2.defaultVariants, ...c2 } : c2;
    !V(l2.twMergeConfig) && !Et(l2.twMergeConfig, H.cachedTwMergeConfig) && (H.didTwMergeConfigChange = true, H.cachedTwMergeConfig = l2.twMergeConfig);
    let p2 = V(r2?.slots), m2 = V(i2) ? {} : { base: wt(t3?.base, p2 && r2?.base), ...i2 }, h2 = p2 ? m2 : Dt({ ...r2?.slots }, V(m2) ? { base: t3?.base } : m2), g2 = V(r2?.compoundVariants) ? o2 : kt(r2?.compoundVariants, o2), _2 = (t4) => {
      if (V(d2) && V(i2) && p2) return e2(u2, t4?.class, t4?.className)(l2);
      if (g2 && !Array.isArray(g2)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g2}`);
      if (s2 && !Array.isArray(s2)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s2}`);
      let n3 = (e3, n4 = d2, r4 = null, i3 = null) => {
        let a4 = n4[e3];
        if (!a4 || V(a4)) return null;
        let o4 = i3?.[e3] ?? t4?.[e3];
        if (o4 === null) return null;
        let s3 = Tt(o4);
        if (typeof s3 == `object`) return null;
        let c4 = f2?.[e3];
        return a4[(s3 ?? Tt(c4)) || `false`];
      }, r3 = () => {
        if (!d2) return null;
        let e3 = Object.keys(d2), t5 = [];
        for (let r4 = 0; r4 < e3.length; r4++) {
          let i3 = n3(e3[r4], d2);
          i3 && t5.push(i3);
        }
        return t5;
      }, a3 = (e3, t5) => {
        if (!d2 || typeof d2 != `object`) return null;
        let r4 = [];
        for (let i3 in d2) {
          let a4 = n3(i3, d2, e3, t5), o4 = e3 === `base` && typeof a4 == `string` ? a4 : a4 && a4[e3];
          o4 && r4.push(o4);
        }
        return r4;
      }, o3 = {};
      for (let e3 in t4) {
        let n4 = t4[e3];
        n4 !== void 0 && (o3[e3] = n4);
      }
      let c3 = (e3, n4) => {
        let r4 = typeof t4?.[e3] == `object` ? { [e3]: t4[e3]?.initial } : {};
        return { ...f2, ...o3, ...r4, ...n4 };
      }, m3 = (e3 = [], t5) => {
        let n4 = [], r4 = e3.length;
        for (let i3 = 0; i3 < r4; i3++) {
          let { class: r5, className: a4, ...o4 } = e3[i3], s3 = true, l3 = c3(null, t5);
          for (let e4 in o4) {
            let t6 = o4[e4], n5 = l3[e4];
            if (Array.isArray(t6)) {
              if (!t6.includes(n5)) {
                s3 = false;
                break;
              }
            } else {
              if ((t6 == null || t6 === false) && (n5 == null || n5 === false)) continue;
              if (n5 !== t6) {
                s3 = false;
                break;
              }
            }
          }
          s3 && (r5 && n4.push(r5), a4 && n4.push(a4));
        }
        return n4;
      }, _3 = (t5) => {
        let n4 = m3(g2, t5);
        if (!Array.isArray(n4)) return n4;
        let r4 = {}, i3 = e2;
        for (let e3 = 0; e3 < n4.length; e3++) {
          let t6 = n4[e3];
          if (typeof t6 == `string`) r4.base = i3(r4.base, t6)(l2);
          else if (typeof t6 == `object`) for (let e4 in t6) r4[e4] = i3(r4[e4], t6[e4])(l2);
        }
        return r4;
      }, v2 = (e3) => {
        if (s2.length < 1) return null;
        let t5 = {}, n4 = c3(null, e3);
        for (let e4 = 0; e4 < s2.length; e4++) {
          let { slots: r4 = [], class: i3, className: a4, ...o4 } = s2[e4];
          if (!V(o4)) {
            let e5 = true;
            for (let t6 in o4) {
              let r5 = n4[t6], i4 = o4[t6];
              if (r5 === void 0 || (Array.isArray(i4) ? !i4.includes(r5) : i4 !== r5)) {
                e5 = false;
                break;
              }
            }
            if (!e5) continue;
          }
          for (let e5 = 0; e5 < r4.length; e5++) {
            let n5 = r4[e5];
            t5[n5] || (t5[n5] = []), t5[n5].push([i3, a4]);
          }
        }
        return t5;
      };
      if (!V(i2) || !p2) {
        let t5 = {};
        if (typeof h2 == `object` && !V(h2)) {
          let n4 = e2;
          for (let e3 in h2) t5[e3] = (t6) => {
            let r4 = _3(t6), i3 = v2(t6);
            return n4(h2[e3], a3(e3, t6), r4 ? r4[e3] : void 0, i3 ? i3[e3] : void 0, t6?.class, t6?.className)(l2);
          };
        }
        return t5;
      }
      return e2(u2, r3(), m3(g2), t4?.class, t4?.className)(l2);
    };
    return _2.variantKeys = (() => {
      if (!(!d2 || typeof d2 != `object`)) return Object.keys(d2);
    })(), _2.extend = r2, _2.base = u2, _2.slots = h2, _2.variants = d2, _2.defaultVariants = f2, _2.compoundSlots = s2, _2.compoundVariants = g2, _2;
  };
  return { tv: t2, createTV: (e3) => (n2, r2) => t2(n2, r2 ? At(e3, r2) : e3) };
}, Pt = (e2, t2) => {
  let n2 = Array(e2.length + t2.length);
  for (let t3 = 0; t3 < e2.length; t3++) n2[t3] = e2[t3];
  for (let r2 = 0; r2 < t2.length; r2++) n2[e2.length + r2] = t2[r2];
  return n2;
}, Ft = (e2, t2) => ({ classGroupId: e2, validator: t2 }), It = (e2 = /* @__PURE__ */ new Map(), t2 = null, n2) => ({ nextPart: e2, validators: t2, classGroupId: n2 }), Lt = `-`, Rt = [], zt = `arbitrary..`, Bt = (e2) => {
  let t2 = Ut(e2), { conflictingClassGroups: n2, conflictingClassGroupModifiers: r2 } = e2;
  return { getClassGroupId: (e3) => {
    if (e3.startsWith(`[`) && e3.endsWith(`]`)) return Ht(e3);
    let n3 = e3.split(Lt);
    return Vt(n3, +(n3[0] === `` && n3.length > 1), t2);
  }, getConflictingClassGroupIds: (e3, t3) => {
    if (t3) {
      let t4 = r2[e3], i2 = n2[e3];
      return t4 ? i2 ? Pt(i2, t4) : t4 : i2 || Rt;
    }
    return n2[e3] || Rt;
  } };
}, Vt = (e2, t2, n2) => {
  if (e2.length - t2 === 0) return n2.classGroupId;
  let r2 = e2[t2], i2 = n2.nextPart.get(r2);
  if (i2) {
    let n3 = Vt(e2, t2 + 1, i2);
    if (n3) return n3;
  }
  let a2 = n2.validators;
  if (a2 === null) return;
  let o2 = t2 === 0 ? e2.join(Lt) : e2.slice(t2).join(Lt), s2 = a2.length;
  for (let e3 = 0; e3 < s2; e3++) {
    let t3 = a2[e3];
    if (t3.validator(o2)) return t3.classGroupId;
  }
}, Ht = (e2) => e2.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
  let t2 = e2.slice(1, -1), n2 = t2.indexOf(`:`), r2 = t2.slice(0, n2);
  return r2 ? zt + r2 : void 0;
})(), Ut = (e2) => {
  let { theme: t2, classGroups: n2 } = e2;
  return Wt(n2, t2);
}, Wt = (e2, t2) => {
  let n2 = It();
  for (let r2 in e2) {
    let i2 = e2[r2];
    Gt(i2, n2, r2, t2);
  }
  return n2;
}, Gt = (e2, t2, n2, r2) => {
  let i2 = e2.length;
  for (let a2 = 0; a2 < i2; a2++) {
    let i3 = e2[a2];
    Kt(i3, t2, n2, r2);
  }
}, Kt = (e2, t2, n2, r2) => {
  if (typeof e2 == `string`) {
    qt(e2, t2, n2);
    return;
  }
  if (typeof e2 == `function`) {
    Jt(e2, t2, n2, r2);
    return;
  }
  Yt(e2, t2, n2, r2);
}, qt = (e2, t2, n2) => {
  let r2 = e2 === `` ? t2 : Xt(t2, e2);
  r2.classGroupId = n2;
}, Jt = (e2, t2, n2, r2) => {
  if (Zt(e2)) {
    Gt(e2(r2), t2, n2, r2);
    return;
  }
  t2.validators === null && (t2.validators = []), t2.validators.push(Ft(n2, e2));
}, Yt = (e2, t2, n2, r2) => {
  let i2 = Object.entries(e2), a2 = i2.length;
  for (let e3 = 0; e3 < a2; e3++) {
    let [a3, o2] = i2[e3];
    Gt(o2, Xt(t2, a3), n2, r2);
  }
}, Xt = (e2, t2) => {
  let n2 = e2, r2 = t2.split(Lt), i2 = r2.length;
  for (let e3 = 0; e3 < i2; e3++) {
    let t3 = r2[e3], i3 = n2.nextPart.get(t3);
    i3 || (i3 = It(), n2.nextPart.set(t3, i3)), n2 = i3;
  }
  return n2;
}, Zt = (e2) => `isThemeGetter` in e2 && e2.isThemeGetter === true, Qt = (e2) => {
  if (e2 < 1) return { get: () => void 0, set: () => {
  } };
  let t2 = 0, n2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), i2 = (i3, a2) => {
    n2[i3] = a2, t2++, t2 > e2 && (t2 = 0, r2 = n2, n2 = /* @__PURE__ */ Object.create(null));
  };
  return { get(e3) {
    let t3 = n2[e3];
    if (t3 !== void 0) return t3;
    if ((t3 = r2[e3]) !== void 0) return i2(e3, t3), t3;
  }, set(e3, t3) {
    e3 in n2 ? n2[e3] = t3 : i2(e3, t3);
  } };
}, $t = `!`, en = `:`, tn = [], nn = (e2, t2, n2, r2, i2) => ({ modifiers: e2, hasImportantModifier: t2, baseClassName: n2, maybePostfixModifierPosition: r2, isExternal: i2 }), rn = (e2) => {
  let { prefix: t2, experimentalParseClassName: n2 } = e2, r2 = (e3) => {
    let t3 = [], n3 = 0, r3 = 0, i2 = 0, a2, o2 = e3.length;
    for (let s3 = 0; s3 < o2; s3++) {
      let o3 = e3[s3];
      if (n3 === 0 && r3 === 0) {
        if (o3 === en) {
          t3.push(e3.slice(i2, s3)), i2 = s3 + 1;
          continue;
        }
        if (o3 === `/`) {
          a2 = s3;
          continue;
        }
      }
      o3 === `[` ? n3++ : o3 === `]` ? n3-- : o3 === `(` ? r3++ : o3 === `)` && r3--;
    }
    let s2 = t3.length === 0 ? e3 : e3.slice(i2), c2 = s2, l2 = false;
    s2.endsWith($t) ? (c2 = s2.slice(0, -1), l2 = true) : s2.startsWith($t) && (c2 = s2.slice(1), l2 = true);
    let u2 = a2 && a2 > i2 ? a2 - i2 : void 0;
    return nn(t3, l2, c2, u2);
  };
  if (t2) {
    let e3 = t2 + en, n3 = r2;
    r2 = (t3) => t3.startsWith(e3) ? n3(t3.slice(e3.length)) : nn(tn, false, t3, void 0, true);
  }
  if (n2) {
    let e3 = r2;
    r2 = (t3) => n2({ className: t3, parseClassName: e3 });
  }
  return r2;
}, an = (e2) => {
  let t2 = /* @__PURE__ */ new Map();
  return e2.orderSensitiveModifiers.forEach((e3, n2) => {
    t2.set(e3, 1e6 + n2);
  }), (e3) => {
    let n2 = [], r2 = [];
    for (let i2 = 0; i2 < e3.length; i2++) {
      let a2 = e3[i2], o2 = a2[0] === `[`, s2 = t2.has(a2);
      o2 || s2 ? (r2.length > 0 && (r2.sort(), n2.push(...r2), r2 = []), n2.push(a2)) : r2.push(a2);
    }
    return r2.length > 0 && (r2.sort(), n2.push(...r2)), n2;
  };
}, on = (e2) => ({ cache: Qt(e2.cacheSize), parseClassName: rn(e2), sortModifiers: an(e2), ...Bt(e2) }), sn = /\s+/, cn = (e2, t2) => {
  let { parseClassName: n2, getClassGroupId: r2, getConflictingClassGroupIds: i2, sortModifiers: a2 } = t2, o2 = [], s2 = e2.trim().split(sn), c2 = ``;
  for (let e3 = s2.length - 1; e3 >= 0; --e3) {
    let t3 = s2[e3], { isExternal: l2, modifiers: u2, hasImportantModifier: d2, baseClassName: f2, maybePostfixModifierPosition: p2 } = n2(t3);
    if (l2) {
      c2 = t3 + (c2.length > 0 ? ` ` + c2 : c2);
      continue;
    }
    let m2 = !!p2, h2 = r2(m2 ? f2.substring(0, p2) : f2);
    if (!h2) {
      if (!m2) {
        c2 = t3 + (c2.length > 0 ? ` ` + c2 : c2);
        continue;
      }
      if (h2 = r2(f2), !h2) {
        c2 = t3 + (c2.length > 0 ? ` ` + c2 : c2);
        continue;
      }
      m2 = false;
    }
    let g2 = u2.length === 0 ? `` : u2.length === 1 ? u2[0] : a2(u2).join(`:`), _2 = d2 ? g2 + $t : g2, v2 = _2 + h2;
    if (o2.indexOf(v2) > -1) continue;
    o2.push(v2);
    let y2 = i2(h2, m2);
    for (let e4 = 0; e4 < y2.length; ++e4) {
      let t4 = y2[e4];
      o2.push(_2 + t4);
    }
    c2 = t3 + (c2.length > 0 ? ` ` + c2 : c2);
  }
  return c2;
}, ln = (...e2) => {
  let t2 = 0, n2, r2, i2 = ``;
  for (; t2 < e2.length; ) (n2 = e2[t2++]) && (r2 = un(n2)) && (i2 && (i2 += ` `), i2 += r2);
  return i2;
}, un = (e2) => {
  if (typeof e2 == `string`) return e2;
  let t2, n2 = ``;
  for (let r2 = 0; r2 < e2.length; r2++) e2[r2] && (t2 = un(e2[r2])) && (n2 && (n2 += ` `), n2 += t2);
  return n2;
}, dn = (e2, ...t2) => {
  let n2, r2, i2, a2, o2 = (o3) => (n2 = on(t2.reduce((e3, t3) => t3(e3), e2())), r2 = n2.cache.get, i2 = n2.cache.set, a2 = s2, s2(o3)), s2 = (e3) => {
    let t3 = r2(e3);
    if (t3) return t3;
    let a3 = cn(e3, n2);
    return i2(e3, a3), a3;
  };
  return a2 = o2, (...e3) => a2(ln(...e3));
}, fn = [], U = (e2) => {
  let t2 = (t3) => t3[e2] || fn;
  return t2.isThemeGetter = true, t2;
}, pn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, hn = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, gn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _n = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, yn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (e2) => hn.test(e2), G = (e2) => !!e2 && !Number.isNaN(Number(e2)), K = (e2) => !!e2 && Number.isInteger(Number(e2)), xn = (e2) => e2.endsWith(`%`) && G(e2.slice(0, -1)), q = (e2) => gn.test(e2), Sn = () => true, Cn = (e2) => _n.test(e2) && !vn.test(e2), wn = () => false, Tn = (e2) => yn.test(e2), En = (e2) => bn.test(e2), Dn = (e2) => !J(e2) && !X(e2), On = (e2) => Z(e2, Wn, wn), J = (e2) => pn.test(e2), Y = (e2) => Z(e2, Gn, Cn), kn = (e2) => Z(e2, Kn, G), An = (e2) => Z(e2, Jn, Sn), jn = (e2) => Z(e2, qn, wn), Mn = (e2) => Z(e2, Hn, wn), Nn = (e2) => Z(e2, Un, En), Pn = (e2) => Z(e2, Yn, Tn), X = (e2) => mn.test(e2), Fn = (e2) => Q(e2, Gn), In = (e2) => Q(e2, qn), Ln = (e2) => Q(e2, Hn), Rn = (e2) => Q(e2, Wn), zn = (e2) => Q(e2, Un), Bn = (e2) => Q(e2, Yn, true), Vn = (e2) => Q(e2, Jn, true), Z = (e2, t2, n2) => {
  let r2 = pn.exec(e2);
  return r2 ? r2[1] ? t2(r2[1]) : n2(r2[2]) : false;
}, Q = (e2, t2, n2 = false) => {
  let r2 = mn.exec(e2);
  return r2 ? r2[1] ? t2(r2[1]) : n2 : false;
}, Hn = (e2) => e2 === `position` || e2 === `percentage`, Un = (e2) => e2 === `image` || e2 === `url`, Wn = (e2) => e2 === `length` || e2 === `size` || e2 === `bg-size`, Gn = (e2) => e2 === `length`, Kn = (e2) => e2 === `number`, qn = (e2) => e2 === `family-name`, Jn = (e2) => e2 === `number` || e2 === `weight`, Yn = (e2) => e2 === `shadow`, Xn = () => {
  let e2 = U(`color`), t2 = U(`font`), n2 = U(`text`), r2 = U(`font-weight`), i2 = U(`tracking`), a2 = U(`leading`), o2 = U(`breakpoint`), s2 = U(`container`), c2 = U(`spacing`), l2 = U(`radius`), u2 = U(`shadow`), d2 = U(`inset-shadow`), f2 = U(`text-shadow`), p2 = U(`drop-shadow`), m2 = U(`blur`), h2 = U(`perspective`), g2 = U(`aspect`), _2 = U(`ease`), v2 = U(`animate`), y2 = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`], b2 = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`], x2 = () => [...b2(), X, J], S2 = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`], C2 = () => [`auto`, `contain`, `none`], w2 = () => [X, J, c2], T2 = () => [W, `full`, `auto`, ...w2()], E2 = () => [K, `none`, `subgrid`, X, J], ee2 = () => [`auto`, { span: [`full`, K, X, J] }, K, X, J], D2 = () => [K, `auto`, X, J], te2 = () => [`auto`, `min`, `max`, `fr`, X, J], ne2 = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`], O2 = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`], k2 = () => [`auto`, ...w2()], A2 = () => [W, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...w2()], j2 = () => [W, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...w2()], re2 = () => [W, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...w2()], M2 = () => [e2, X, J], ie2 = () => [...b2(), Ln, Mn, { position: [X, J] }], ae2 = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }], oe2 = () => [`auto`, `cover`, `contain`, Rn, On, { size: [X, J] }], se2 = () => [xn, Fn, Y], N2 = () => [``, `none`, `full`, l2, X, J], P2 = () => [``, G, Fn, Y], ce2 = () => [`solid`, `dashed`, `dotted`, `double`], le2 = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`], F2 = () => [G, xn, Ln, Mn], ue2 = () => [``, `none`, m2, X, J], de2 = () => [`none`, G, X, J], I2 = () => [`none`, G, X, J], fe2 = () => [G, X, J], L2 = () => [W, `full`, ...w2()];
  return { cacheSize: 500, theme: { animate: [`spin`, `ping`, `pulse`, `bounce`], aspect: [`video`], blur: [q], breakpoint: [q], color: [Sn], container: [q], "drop-shadow": [q], ease: [`in`, `out`, `in-out`], font: [Dn], "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`], "inset-shadow": [q], leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`], perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`], radius: [q], shadow: [q], spacing: [`px`, G], text: [q], "text-shadow": [q], tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`] }, classGroups: { aspect: [{ aspect: [`auto`, `square`, W, J, X, g2] }], container: [`container`], columns: [{ columns: [G, J, X, s2] }], "break-after": [{ "break-after": y2() }], "break-before": [{ "break-before": y2() }], "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }], "box-decoration": [{ "box-decoration": [`slice`, `clone`] }], box: [{ box: [`border`, `content`] }], display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`], sr: [`sr-only`, `not-sr-only`], float: [{ float: [`right`, `left`, `none`, `start`, `end`] }], clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }], isolation: [`isolate`, `isolation-auto`], "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }], "object-position": [{ object: x2() }], overflow: [{ overflow: S2() }], "overflow-x": [{ "overflow-x": S2() }], "overflow-y": [{ "overflow-y": S2() }], overscroll: [{ overscroll: C2() }], "overscroll-x": [{ "overscroll-x": C2() }], "overscroll-y": [{ "overscroll-y": C2() }], position: [`static`, `fixed`, `absolute`, `relative`, `sticky`], inset: [{ inset: T2() }], "inset-x": [{ "inset-x": T2() }], "inset-y": [{ "inset-y": T2() }], start: [{ "inset-s": T2(), start: T2() }], end: [{ "inset-e": T2(), end: T2() }], "inset-bs": [{ "inset-bs": T2() }], "inset-be": [{ "inset-be": T2() }], top: [{ top: T2() }], right: [{ right: T2() }], bottom: [{ bottom: T2() }], left: [{ left: T2() }], visibility: [`visible`, `invisible`, `collapse`], z: [{ z: [K, `auto`, X, J] }], basis: [{ basis: [W, `full`, `auto`, s2, ...w2()] }], "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }], "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }], flex: [{ flex: [G, W, `auto`, `initial`, `none`, J] }], grow: [{ grow: [``, G, X, J] }], shrink: [{ shrink: [``, G, X, J] }], order: [{ order: [K, `first`, `last`, `none`, X, J] }], "grid-cols": [{ "grid-cols": E2() }], "col-start-end": [{ col: ee2() }], "col-start": [{ "col-start": D2() }], "col-end": [{ "col-end": D2() }], "grid-rows": [{ "grid-rows": E2() }], "row-start-end": [{ row: ee2() }], "row-start": [{ "row-start": D2() }], "row-end": [{ "row-end": D2() }], "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }], "auto-cols": [{ "auto-cols": te2() }], "auto-rows": [{ "auto-rows": te2() }], gap: [{ gap: w2() }], "gap-x": [{ "gap-x": w2() }], "gap-y": [{ "gap-y": w2() }], "justify-content": [{ justify: [...ne2(), `normal`] }], "justify-items": [{ "justify-items": [...O2(), `normal`] }], "justify-self": [{ "justify-self": [`auto`, ...O2()] }], "align-content": [{ content: [`normal`, ...ne2()] }], "align-items": [{ items: [...O2(), { baseline: [``, `last`] }] }], "align-self": [{ self: [`auto`, ...O2(), { baseline: [``, `last`] }] }], "place-content": [{ "place-content": ne2() }], "place-items": [{ "place-items": [...O2(), `baseline`] }], "place-self": [{ "place-self": [`auto`, ...O2()] }], p: [{ p: w2() }], px: [{ px: w2() }], py: [{ py: w2() }], ps: [{ ps: w2() }], pe: [{ pe: w2() }], pbs: [{ pbs: w2() }], pbe: [{ pbe: w2() }], pt: [{ pt: w2() }], pr: [{ pr: w2() }], pb: [{ pb: w2() }], pl: [{ pl: w2() }], m: [{ m: k2() }], mx: [{ mx: k2() }], my: [{ my: k2() }], ms: [{ ms: k2() }], me: [{ me: k2() }], mbs: [{ mbs: k2() }], mbe: [{ mbe: k2() }], mt: [{ mt: k2() }], mr: [{ mr: k2() }], mb: [{ mb: k2() }], ml: [{ ml: k2() }], "space-x": [{ "space-x": w2() }], "space-x-reverse": [`space-x-reverse`], "space-y": [{ "space-y": w2() }], "space-y-reverse": [`space-y-reverse`], size: [{ size: A2() }], "inline-size": [{ inline: [`auto`, ...j2()] }], "min-inline-size": [{ "min-inline": [`auto`, ...j2()] }], "max-inline-size": [{ "max-inline": [`none`, ...j2()] }], "block-size": [{ block: [`auto`, ...re2()] }], "min-block-size": [{ "min-block": [`auto`, ...re2()] }], "max-block-size": [{ "max-block": [`none`, ...re2()] }], w: [{ w: [s2, `screen`, ...A2()] }], "min-w": [{ "min-w": [s2, `screen`, `none`, ...A2()] }], "max-w": [{ "max-w": [s2, `screen`, `none`, `prose`, { screen: [o2] }, ...A2()] }], h: [{ h: [`screen`, `lh`, ...A2()] }], "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...A2()] }], "max-h": [{ "max-h": [`screen`, `lh`, ...A2()] }], "font-size": [{ text: [`base`, n2, Fn, Y] }], "font-smoothing": [`antialiased`, `subpixel-antialiased`], "font-style": [`italic`, `not-italic`], "font-weight": [{ font: [r2, Vn, An] }], "font-stretch": [{ "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, xn, J] }], "font-family": [{ font: [In, jn, t2] }], "font-features": [{ "font-features": [J] }], "fvn-normal": [`normal-nums`], "fvn-ordinal": [`ordinal`], "fvn-slashed-zero": [`slashed-zero`], "fvn-figure": [`lining-nums`, `oldstyle-nums`], "fvn-spacing": [`proportional-nums`, `tabular-nums`], "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`], tracking: [{ tracking: [i2, X, J] }], "line-clamp": [{ "line-clamp": [G, `none`, X, kn] }], leading: [{ leading: [a2, ...w2()] }], "list-image": [{ "list-image": [`none`, X, J] }], "list-style-position": [{ list: [`inside`, `outside`] }], "list-style-type": [{ list: [`disc`, `decimal`, `none`, X, J] }], "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }], "placeholder-color": [{ placeholder: M2() }], "text-color": [{ text: M2() }], "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`], "text-decoration-style": [{ decoration: [...ce2(), `wavy`] }], "text-decoration-thickness": [{ decoration: [G, `from-font`, `auto`, X, Y] }], "text-decoration-color": [{ decoration: M2() }], "underline-offset": [{ "underline-offset": [G, `auto`, X, J] }], "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`], "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`], "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }], indent: [{ indent: w2() }], "vertical-align": [{ align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, X, J] }], whitespace: [{ whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] }], break: [{ break: [`normal`, `words`, `all`, `keep`] }], wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }], hyphens: [{ hyphens: [`none`, `manual`, `auto`] }], content: [{ content: [`none`, X, J] }], "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }], "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }], "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }], "bg-position": [{ bg: ie2() }], "bg-repeat": [{ bg: ae2() }], "bg-size": [{ bg: oe2() }], "bg-image": [{ bg: [`none`, { linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, K, X, J], radial: [``, X, J], conic: [K, X, J] }, zn, Nn] }], "bg-color": [{ bg: M2() }], "gradient-from-pos": [{ from: se2() }], "gradient-via-pos": [{ via: se2() }], "gradient-to-pos": [{ to: se2() }], "gradient-from": [{ from: M2() }], "gradient-via": [{ via: M2() }], "gradient-to": [{ to: M2() }], rounded: [{ rounded: N2() }], "rounded-s": [{ "rounded-s": N2() }], "rounded-e": [{ "rounded-e": N2() }], "rounded-t": [{ "rounded-t": N2() }], "rounded-r": [{ "rounded-r": N2() }], "rounded-b": [{ "rounded-b": N2() }], "rounded-l": [{ "rounded-l": N2() }], "rounded-ss": [{ "rounded-ss": N2() }], "rounded-se": [{ "rounded-se": N2() }], "rounded-ee": [{ "rounded-ee": N2() }], "rounded-es": [{ "rounded-es": N2() }], "rounded-tl": [{ "rounded-tl": N2() }], "rounded-tr": [{ "rounded-tr": N2() }], "rounded-br": [{ "rounded-br": N2() }], "rounded-bl": [{ "rounded-bl": N2() }], "border-w": [{ border: P2() }], "border-w-x": [{ "border-x": P2() }], "border-w-y": [{ "border-y": P2() }], "border-w-s": [{ "border-s": P2() }], "border-w-e": [{ "border-e": P2() }], "border-w-bs": [{ "border-bs": P2() }], "border-w-be": [{ "border-be": P2() }], "border-w-t": [{ "border-t": P2() }], "border-w-r": [{ "border-r": P2() }], "border-w-b": [{ "border-b": P2() }], "border-w-l": [{ "border-l": P2() }], "divide-x": [{ "divide-x": P2() }], "divide-x-reverse": [`divide-x-reverse`], "divide-y": [{ "divide-y": P2() }], "divide-y-reverse": [`divide-y-reverse`], "border-style": [{ border: [...ce2(), `hidden`, `none`] }], "divide-style": [{ divide: [...ce2(), `hidden`, `none`] }], "border-color": [{ border: M2() }], "border-color-x": [{ "border-x": M2() }], "border-color-y": [{ "border-y": M2() }], "border-color-s": [{ "border-s": M2() }], "border-color-e": [{ "border-e": M2() }], "border-color-bs": [{ "border-bs": M2() }], "border-color-be": [{ "border-be": M2() }], "border-color-t": [{ "border-t": M2() }], "border-color-r": [{ "border-r": M2() }], "border-color-b": [{ "border-b": M2() }], "border-color-l": [{ "border-l": M2() }], "divide-color": [{ divide: M2() }], "outline-style": [{ outline: [...ce2(), `none`, `hidden`] }], "outline-offset": [{ "outline-offset": [G, X, J] }], "outline-w": [{ outline: [``, G, Fn, Y] }], "outline-color": [{ outline: M2() }], shadow: [{ shadow: [``, `none`, u2, Bn, Pn] }], "shadow-color": [{ shadow: M2() }], "inset-shadow": [{ "inset-shadow": [`none`, d2, Bn, Pn] }], "inset-shadow-color": [{ "inset-shadow": M2() }], "ring-w": [{ ring: P2() }], "ring-w-inset": [`ring-inset`], "ring-color": [{ ring: M2() }], "ring-offset-w": [{ "ring-offset": [G, Y] }], "ring-offset-color": [{ "ring-offset": M2() }], "inset-ring-w": [{ "inset-ring": P2() }], "inset-ring-color": [{ "inset-ring": M2() }], "text-shadow": [{ "text-shadow": [`none`, f2, Bn, Pn] }], "text-shadow-color": [{ "text-shadow": M2() }], opacity: [{ opacity: [G, X, J] }], "mix-blend": [{ "mix-blend": [...le2(), `plus-darker`, `plus-lighter`] }], "bg-blend": [{ "bg-blend": le2() }], "mask-clip": [{ "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }, `mask-no-clip`], "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }], "mask-image-linear-pos": [{ "mask-linear": [G] }], "mask-image-linear-from-pos": [{ "mask-linear-from": F2() }], "mask-image-linear-to-pos": [{ "mask-linear-to": F2() }], "mask-image-linear-from-color": [{ "mask-linear-from": M2() }], "mask-image-linear-to-color": [{ "mask-linear-to": M2() }], "mask-image-t-from-pos": [{ "mask-t-from": F2() }], "mask-image-t-to-pos": [{ "mask-t-to": F2() }], "mask-image-t-from-color": [{ "mask-t-from": M2() }], "mask-image-t-to-color": [{ "mask-t-to": M2() }], "mask-image-r-from-pos": [{ "mask-r-from": F2() }], "mask-image-r-to-pos": [{ "mask-r-to": F2() }], "mask-image-r-from-color": [{ "mask-r-from": M2() }], "mask-image-r-to-color": [{ "mask-r-to": M2() }], "mask-image-b-from-pos": [{ "mask-b-from": F2() }], "mask-image-b-to-pos": [{ "mask-b-to": F2() }], "mask-image-b-from-color": [{ "mask-b-from": M2() }], "mask-image-b-to-color": [{ "mask-b-to": M2() }], "mask-image-l-from-pos": [{ "mask-l-from": F2() }], "mask-image-l-to-pos": [{ "mask-l-to": F2() }], "mask-image-l-from-color": [{ "mask-l-from": M2() }], "mask-image-l-to-color": [{ "mask-l-to": M2() }], "mask-image-x-from-pos": [{ "mask-x-from": F2() }], "mask-image-x-to-pos": [{ "mask-x-to": F2() }], "mask-image-x-from-color": [{ "mask-x-from": M2() }], "mask-image-x-to-color": [{ "mask-x-to": M2() }], "mask-image-y-from-pos": [{ "mask-y-from": F2() }], "mask-image-y-to-pos": [{ "mask-y-to": F2() }], "mask-image-y-from-color": [{ "mask-y-from": M2() }], "mask-image-y-to-color": [{ "mask-y-to": M2() }], "mask-image-radial": [{ "mask-radial": [X, J] }], "mask-image-radial-from-pos": [{ "mask-radial-from": F2() }], "mask-image-radial-to-pos": [{ "mask-radial-to": F2() }], "mask-image-radial-from-color": [{ "mask-radial-from": M2() }], "mask-image-radial-to-color": [{ "mask-radial-to": M2() }], "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] }], "mask-image-radial-pos": [{ "mask-radial-at": b2() }], "mask-image-conic-pos": [{ "mask-conic": [G] }], "mask-image-conic-from-pos": [{ "mask-conic-from": F2() }], "mask-image-conic-to-pos": [{ "mask-conic-to": F2() }], "mask-image-conic-from-color": [{ "mask-conic-from": M2() }], "mask-image-conic-to-color": [{ "mask-conic-to": M2() }], "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }], "mask-origin": [{ "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }], "mask-position": [{ mask: ie2() }], "mask-repeat": [{ mask: ae2() }], "mask-size": [{ mask: oe2() }], "mask-type": [{ "mask-type": [`alpha`, `luminance`] }], "mask-image": [{ mask: [`none`, X, J] }], filter: [{ filter: [``, `none`, X, J] }], blur: [{ blur: ue2() }], brightness: [{ brightness: [G, X, J] }], contrast: [{ contrast: [G, X, J] }], "drop-shadow": [{ "drop-shadow": [``, `none`, p2, Bn, Pn] }], "drop-shadow-color": [{ "drop-shadow": M2() }], grayscale: [{ grayscale: [``, G, X, J] }], "hue-rotate": [{ "hue-rotate": [G, X, J] }], invert: [{ invert: [``, G, X, J] }], saturate: [{ saturate: [G, X, J] }], sepia: [{ sepia: [``, G, X, J] }], "backdrop-filter": [{ "backdrop-filter": [``, `none`, X, J] }], "backdrop-blur": [{ "backdrop-blur": ue2() }], "backdrop-brightness": [{ "backdrop-brightness": [G, X, J] }], "backdrop-contrast": [{ "backdrop-contrast": [G, X, J] }], "backdrop-grayscale": [{ "backdrop-grayscale": [``, G, X, J] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [G, X, J] }], "backdrop-invert": [{ "backdrop-invert": [``, G, X, J] }], "backdrop-opacity": [{ "backdrop-opacity": [G, X, J] }], "backdrop-saturate": [{ "backdrop-saturate": [G, X, J] }], "backdrop-sepia": [{ "backdrop-sepia": [``, G, X, J] }], "border-collapse": [{ border: [`collapse`, `separate`] }], "border-spacing": [{ "border-spacing": w2() }], "border-spacing-x": [{ "border-spacing-x": w2() }], "border-spacing-y": [{ "border-spacing-y": w2() }], "table-layout": [{ table: [`auto`, `fixed`] }], caption: [{ caption: [`top`, `bottom`] }], transition: [{ transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, X, J] }], "transition-behavior": [{ transition: [`normal`, `discrete`] }], duration: [{ duration: [G, `initial`, X, J] }], ease: [{ ease: [`linear`, `initial`, _2, X, J] }], delay: [{ delay: [G, X, J] }], animate: [{ animate: [`none`, v2, X, J] }], backface: [{ backface: [`hidden`, `visible`] }], perspective: [{ perspective: [h2, X, J] }], "perspective-origin": [{ "perspective-origin": x2() }], rotate: [{ rotate: de2() }], "rotate-x": [{ "rotate-x": de2() }], "rotate-y": [{ "rotate-y": de2() }], "rotate-z": [{ "rotate-z": de2() }], scale: [{ scale: I2() }], "scale-x": [{ "scale-x": I2() }], "scale-y": [{ "scale-y": I2() }], "scale-z": [{ "scale-z": I2() }], "scale-3d": [`scale-3d`], skew: [{ skew: fe2() }], "skew-x": [{ "skew-x": fe2() }], "skew-y": [{ "skew-y": fe2() }], transform: [{ transform: [X, J, ``, `none`, `gpu`, `cpu`] }], "transform-origin": [{ origin: x2() }], "transform-style": [{ transform: [`3d`, `flat`] }], translate: [{ translate: L2() }], "translate-x": [{ "translate-x": L2() }], "translate-y": [{ "translate-y": L2() }], "translate-z": [{ "translate-z": L2() }], "translate-none": [`translate-none`], accent: [{ accent: M2() }], appearance: [{ appearance: [`none`, `auto`] }], "caret-color": [{ caret: M2() }], "color-scheme": [{ scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] }], cursor: [{ cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, X, J] }], "field-sizing": [{ "field-sizing": [`fixed`, `content`] }], "pointer-events": [{ "pointer-events": [`auto`, `none`] }], resize: [{ resize: [`none`, ``, `y`, `x`] }], "scroll-behavior": [{ scroll: [`auto`, `smooth`] }], "scroll-m": [{ "scroll-m": w2() }], "scroll-mx": [{ "scroll-mx": w2() }], "scroll-my": [{ "scroll-my": w2() }], "scroll-ms": [{ "scroll-ms": w2() }], "scroll-me": [{ "scroll-me": w2() }], "scroll-mbs": [{ "scroll-mbs": w2() }], "scroll-mbe": [{ "scroll-mbe": w2() }], "scroll-mt": [{ "scroll-mt": w2() }], "scroll-mr": [{ "scroll-mr": w2() }], "scroll-mb": [{ "scroll-mb": w2() }], "scroll-ml": [{ "scroll-ml": w2() }], "scroll-p": [{ "scroll-p": w2() }], "scroll-px": [{ "scroll-px": w2() }], "scroll-py": [{ "scroll-py": w2() }], "scroll-ps": [{ "scroll-ps": w2() }], "scroll-pe": [{ "scroll-pe": w2() }], "scroll-pbs": [{ "scroll-pbs": w2() }], "scroll-pbe": [{ "scroll-pbe": w2() }], "scroll-pt": [{ "scroll-pt": w2() }], "scroll-pr": [{ "scroll-pr": w2() }], "scroll-pb": [{ "scroll-pb": w2() }], "scroll-pl": [{ "scroll-pl": w2() }], "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }], "snap-stop": [{ snap: [`normal`, `always`] }], "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }], "snap-strictness": [{ snap: [`mandatory`, `proximity`] }], touch: [{ touch: [`auto`, `none`, `manipulation`] }], "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }], "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }], "touch-pz": [`touch-pinch-zoom`], select: [{ select: [`none`, `text`, `all`, `auto`] }], "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, X, J] }], fill: [{ fill: [`none`, ...M2()] }], "stroke-w": [{ stroke: [G, Fn, Y, kn] }], stroke: [{ stroke: [`none`, ...M2()] }], "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }] }, conflictingClassGroups: { overflow: [`overflow-x`, `overflow-y`], overscroll: [`overscroll-x`, `overscroll-y`], inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`], "inset-x": [`right`, `left`], "inset-y": [`top`, `bottom`], flex: [`basis`, `grow`, `shrink`], gap: [`gap-x`, `gap-y`], p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`], px: [`pr`, `pl`], py: [`pt`, `pb`], m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`], mx: [`mr`, `ml`], my: [`mt`, `mb`], size: [`w`, `h`], "font-size": [`leading`], "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`], "fvn-ordinal": [`fvn-normal`], "fvn-slashed-zero": [`fvn-normal`], "fvn-figure": [`fvn-normal`], "fvn-spacing": [`fvn-normal`], "fvn-fraction": [`fvn-normal`], "line-clamp": [`display`, `overflow`], rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`], "rounded-s": [`rounded-ss`, `rounded-es`], "rounded-e": [`rounded-se`, `rounded-ee`], "rounded-t": [`rounded-tl`, `rounded-tr`], "rounded-r": [`rounded-tr`, `rounded-br`], "rounded-b": [`rounded-br`, `rounded-bl`], "rounded-l": [`rounded-tl`, `rounded-bl`], "border-spacing": [`border-spacing-x`, `border-spacing-y`], "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`], "border-w-x": [`border-w-r`, `border-w-l`], "border-w-y": [`border-w-t`, `border-w-b`], "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`], "border-color-x": [`border-color-r`, `border-color-l`], "border-color-y": [`border-color-t`, `border-color-b`], translate: [`translate-x`, `translate-y`, `translate-none`], "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`], "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`], "scroll-mx": [`scroll-mr`, `scroll-ml`], "scroll-my": [`scroll-mt`, `scroll-mb`], "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`], "scroll-px": [`scroll-pr`, `scroll-pl`], "scroll-py": [`scroll-pt`, `scroll-pb`], touch: [`touch-x`, `touch-y`, `touch-pz`], "touch-x": [`touch`], "touch-y": [`touch`], "touch-pz": [`touch`] }, conflictingClassGroupModifiers: { "font-size": [`leading`] }, orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`] };
}, Zn = (e2, { cacheSize: t2, prefix: n2, experimentalParseClassName: r2, extend: i2 = {}, override: a2 = {} }) => (Qn(e2, `cacheSize`, t2), Qn(e2, `prefix`, n2), Qn(e2, `experimentalParseClassName`, r2), $n(e2.theme, a2.theme), $n(e2.classGroups, a2.classGroups), $n(e2.conflictingClassGroups, a2.conflictingClassGroups), $n(e2.conflictingClassGroupModifiers, a2.conflictingClassGroupModifiers), Qn(e2, `orderSensitiveModifiers`, a2.orderSensitiveModifiers), er(e2.theme, i2.theme), er(e2.classGroups, i2.classGroups), er(e2.conflictingClassGroups, i2.conflictingClassGroups), er(e2.conflictingClassGroupModifiers, i2.conflictingClassGroupModifiers), tr(e2, i2, `orderSensitiveModifiers`), e2), Qn = (e2, t2, n2) => {
  n2 !== void 0 && (e2[t2] = n2);
}, $n = (e2, t2) => {
  if (t2) for (let n2 in t2) Qn(e2, n2, t2[n2]);
}, er = (e2, t2) => {
  if (t2) for (let n2 in t2) tr(e2, t2, n2);
}, tr = (e2, t2, n2) => {
  let r2 = t2[n2];
  r2 !== void 0 && (e2[n2] = e2[n2] ? e2[n2].concat(r2) : r2);
}, nr = (e2, ...t2) => typeof e2 == `function` ? dn(Xn, e2, ...t2) : dn(() => Zn(Xn(), e2), ...t2), rr = dn(Xn), ir = (e2) => V(e2) ? rr : nr({ ...e2, extend: { theme: e2.theme, classGroups: e2.classGroups, conflictingClassGroupModifiers: e2.conflictingClassGroupModifiers, conflictingClassGroups: e2.conflictingClassGroups, ...e2.extend } }), ar = (e2, t2) => {
  let n2 = wt(e2);
  return !n2 || !(t2?.twMerge ?? true) ? n2 : ((!H.cachedTwMerge || H.didTwMergeConfigChange) && (H.didTwMergeConfigChange = false, H.cachedTwMerge = ir(H.cachedTwMergeConfig)), H.cachedTwMerge(n2) || void 0);
}, { createTV: or, tv: sr } = Nt((...e2) => (t2) => ar(e2, t2)), $ = or(ve.ui?.tv), cr = /^[a-z0-9]+(-[a-z0-9]+)*$/, lr = (e2, t2, n2, r2 = ``) => {
  let i2 = e2.split(`:`);
  if (e2.slice(0, 1) === `@`) {
    if (i2.length < 2 || i2.length > 3) return null;
    r2 = i2.shift().slice(1);
  }
  if (i2.length > 3 || !i2.length) return null;
  if (i2.length > 1) {
    let e3 = i2.pop(), n3 = i2.pop(), a3 = { provider: i2.length > 0 ? i2[0] : r2, prefix: n3, name: e3 };
    return t2 && !ur(a3) ? null : a3;
  }
  let a2 = i2[0], o2 = a2.split(`-`);
  if (o2.length > 1) {
    let e3 = { provider: r2, prefix: o2.shift(), name: o2.join(`-`) };
    return t2 && !ur(e3) ? null : e3;
  }
  if (n2 && r2 === ``) {
    let e3 = { provider: r2, prefix: ``, name: a2 };
    return t2 && !ur(e3, n2) ? null : e3;
  }
  return null;
}, ur = (e2, t2) => e2 ? !!((t2 && e2.prefix === `` || e2.prefix) && e2.name) : false, dr = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), fr = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), pr = Object.freeze({ ...dr, ...fr }), mr = Object.freeze({ ...pr, body: ``, hidden: false });
function hr(e2, t2) {
  let n2 = {};
  !e2.hFlip != !t2.hFlip && (n2.hFlip = true), !e2.vFlip != !t2.vFlip && (n2.vFlip = true);
  let r2 = ((e2.rotate || 0) + (t2.rotate || 0)) % 4;
  return r2 && (n2.rotate = r2), n2;
}
function gr(e2, t2) {
  let n2 = hr(e2, t2);
  for (let r2 in mr) r2 in fr ? r2 in e2 && !(r2 in n2) && (n2[r2] = fr[r2]) : r2 in t2 ? n2[r2] = t2[r2] : r2 in e2 && (n2[r2] = e2[r2]);
  return n2;
}
function _r(e2, t2) {
  let n2 = e2.icons, r2 = e2.aliases || /* @__PURE__ */ Object.create(null), i2 = /* @__PURE__ */ Object.create(null);
  function a2(e3) {
    if (n2[e3]) return i2[e3] = [];
    if (!(e3 in i2)) {
      i2[e3] = null;
      let t3 = r2[e3] && r2[e3].parent, n3 = t3 && a2(t3);
      n3 && (i2[e3] = [t3].concat(n3));
    }
    return i2[e3];
  }
  return Object.keys(n2).concat(Object.keys(r2)).forEach(a2), i2;
}
function vr(e2, t2, n2) {
  let r2 = e2.icons, i2 = e2.aliases || /* @__PURE__ */ Object.create(null), a2 = {};
  function o2(e3) {
    a2 = gr(r2[e3] || i2[e3], a2);
  }
  return o2(t2), n2.forEach(o2), gr(e2, a2);
}
function yr(e2, t2) {
  let n2 = [];
  if (typeof e2 != `object` || typeof e2.icons != `object`) return n2;
  e2.not_found instanceof Array && e2.not_found.forEach((e3) => {
    t2(e3, null), n2.push(e3);
  });
  let r2 = _r(e2);
  for (let i2 in r2) {
    let a2 = r2[i2];
    a2 && (t2(i2, vr(e2, i2, a2)), n2.push(i2));
  }
  return n2;
}
var br = { provider: ``, aliases: {}, not_found: {}, ...dr };
function xr(e2, t2) {
  for (let n2 in t2) if (n2 in e2 && typeof e2[n2] != typeof t2[n2]) return false;
  return true;
}
function Sr(e2) {
  if (typeof e2 != `object` || !e2) return null;
  let t2 = e2;
  if (typeof t2.prefix != `string` || !e2.icons || typeof e2.icons != `object` || !xr(e2, br)) return null;
  let n2 = t2.icons;
  for (let e3 in n2) {
    let t3 = n2[e3];
    if (!e3 || typeof t3.body != `string` || !xr(t3, mr)) return null;
  }
  let r2 = t2.aliases || /* @__PURE__ */ Object.create(null);
  for (let e3 in r2) {
    let t3 = r2[e3], i2 = t3.parent;
    if (!e3 || typeof i2 != `string` || !n2[i2] && !r2[i2] || !xr(t3, mr)) return null;
  }
  return t2;
}
var Cr = /* @__PURE__ */ Object.create(null);
function wr(e2, t2) {
  return { provider: e2, prefix: t2, icons: /* @__PURE__ */ Object.create(null), missing: /* @__PURE__ */ new Set() };
}
function Tr(e2, t2) {
  let n2 = Cr[e2] || (Cr[e2] = /* @__PURE__ */ Object.create(null));
  return n2[t2] || (n2[t2] = wr(e2, t2));
}
function Er(e2, t2) {
  return Sr(t2) ? yr(t2, (t3, n2) => {
    n2 ? e2.icons[t3] = n2 : e2.missing.add(t3);
  }) : [];
}
function Dr(e2, t2, n2) {
  try {
    if (typeof n2.body == `string`) return e2.icons[t2] = { ...n2 }, true;
  } catch {
  }
  return false;
}
var Or = false;
function kr(e2) {
  return typeof e2 == `boolean` && (Or = e2), Or;
}
function Ar(e2) {
  let t2 = typeof e2 == `string` ? lr(e2, true, Or) : e2;
  if (t2) {
    let e3 = Tr(t2.provider, t2.prefix), n2 = t2.name;
    return e3.icons[n2] || (e3.missing.has(n2) ? null : void 0);
  }
}
function jr(e2, t2) {
  let n2 = lr(e2, true, Or);
  if (!n2) return false;
  let r2 = Tr(n2.provider, n2.prefix);
  return t2 ? Dr(r2, n2.name, t2) : (r2.missing.add(n2.name), true);
}
function Mr(e2, t2) {
  if (typeof e2 != `object`) return false;
  if (typeof t2 != `string` && (t2 = e2.provider || ``), Or && !t2 && !e2.prefix) {
    let t3 = false;
    return Sr(e2) && (e2.prefix = ``, yr(e2, (e3, n3) => {
      jr(e3, n3) && (t3 = true);
    })), t3;
  }
  let n2 = e2.prefix;
  return ur({ prefix: n2, name: `a` }) ? !!Er(Tr(t2, n2), e2) : false;
}
var Nr = Object.freeze({ width: null, height: null }), Pr = Object.freeze({ ...Nr, ...fr }), Fr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ir = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Lr(e2, t2, n2) {
  if (t2 === 1) return e2;
  if (n2 || (n2 = 100), typeof e2 == `number`) return Math.ceil(e2 * t2 * n2) / n2;
  if (typeof e2 != `string`) return e2;
  let r2 = e2.split(Fr);
  if (r2 === null || !r2.length) return e2;
  let i2 = [], a2 = r2.shift(), o2 = Ir.test(a2);
  for (; ; ) {
    if (o2) {
      let e3 = parseFloat(a2);
      isNaN(e3) ? i2.push(a2) : i2.push(Math.ceil(e3 * t2 * n2) / n2);
    } else i2.push(a2);
    if (a2 = r2.shift(), a2 === void 0) return i2.join(``);
    o2 = !o2;
  }
}
function Rr(e2, t2 = `defs`) {
  let n2 = ``, r2 = e2.indexOf(`<` + t2);
  for (; r2 >= 0; ) {
    let i2 = e2.indexOf(`>`, r2), a2 = e2.indexOf(`</` + t2);
    if (i2 === -1 || a2 === -1) break;
    let o2 = e2.indexOf(`>`, a2);
    if (o2 === -1) break;
    n2 += e2.slice(i2 + 1, a2).trim(), e2 = e2.slice(0, r2).trim() + e2.slice(o2 + 1);
  }
  return { defs: n2, content: e2 };
}
function zr(e2, t2) {
  return e2 ? `<defs>` + e2 + `</defs>` + t2 : t2;
}
function Br(e2, t2, n2) {
  let r2 = Rr(e2);
  return zr(r2.defs, t2 + r2.content + n2);
}
var Vr = (e2) => e2 === `unset` || e2 === `undefined` || e2 === `none`;
function Hr(e2, t2) {
  let n2 = { ...pr, ...e2 }, r2 = { ...Pr, ...t2 }, i2 = { left: n2.left, top: n2.top, width: n2.width, height: n2.height }, a2 = n2.body;
  [n2, r2].forEach((e3) => {
    let t3 = [], n3 = e3.hFlip, r3 = e3.vFlip, o3 = e3.rotate;
    n3 ? r3 ? o3 += 2 : (t3.push(`translate(` + (i2.width + i2.left).toString() + ` ` + (0 - i2.top).toString() + `)`), t3.push(`scale(-1 1)`), i2.top = i2.left = 0) : r3 && (t3.push(`translate(` + (0 - i2.left).toString() + ` ` + (i2.height + i2.top).toString() + `)`), t3.push(`scale(1 -1)`), i2.top = i2.left = 0);
    let s3;
    switch (o3 < 0 && (o3 -= Math.floor(o3 / 4) * 4), o3 %= 4, o3) {
      case 1:
        s3 = i2.height / 2 + i2.top, t3.unshift(`rotate(90 ` + s3.toString() + ` ` + s3.toString() + `)`);
        break;
      case 2:
        t3.unshift(`rotate(180 ` + (i2.width / 2 + i2.left).toString() + ` ` + (i2.height / 2 + i2.top).toString() + `)`);
        break;
      case 3:
        s3 = i2.width / 2 + i2.left, t3.unshift(`rotate(-90 ` + s3.toString() + ` ` + s3.toString() + `)`);
        break;
    }
    o3 % 2 == 1 && (i2.left !== i2.top && (s3 = i2.left, i2.left = i2.top, i2.top = s3), i2.width !== i2.height && (s3 = i2.width, i2.width = i2.height, i2.height = s3)), t3.length && (a2 = Br(a2, `<g transform="` + t3.join(` `) + `">`, `</g>`));
  });
  let o2 = r2.width, s2 = r2.height, c2 = i2.width, l2 = i2.height, u2, d2;
  o2 === null ? (d2 = s2 === null ? `1em` : s2 === `auto` ? l2 : s2, u2 = Lr(d2, c2 / l2)) : (u2 = o2 === `auto` ? c2 : o2, d2 = s2 === null ? Lr(u2, l2 / c2) : s2 === `auto` ? l2 : s2);
  let f2 = {}, p2 = (e3, t3) => {
    Vr(t3) || (f2[e3] = t3.toString());
  };
  p2(`width`, u2), p2(`height`, d2);
  let m2 = [i2.left, i2.top, c2, l2];
  return f2.viewBox = m2.join(` `), { attributes: f2, viewBox: m2, body: a2 };
}
var Ur = /\sid="(\S+)"/g, Wr = `IconifyId` + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16), Gr = 0;
function Kr(e2, t2 = Wr) {
  let n2 = [], r2;
  for (; r2 = Ur.exec(e2); ) n2.push(r2[1]);
  if (!n2.length) return e2;
  let i2 = `suffix` + (Math.random() * 16777216 | Date.now()).toString(16);
  return n2.forEach((n3) => {
    let r3 = typeof t2 == `function` ? t2(n3) : t2 + (Gr++).toString(), a2 = n3.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    e2 = e2.replace(RegExp(`([#;"])(` + a2 + `)([")]|\\.[a-z])`, `g`), `$1` + r3 + i2 + `$3`);
  }), e2 = e2.replace(new RegExp(i2, `g`), ``), e2;
}
var qr = /* @__PURE__ */ Object.create(null);
function Jr(e2, t2) {
  qr[e2] = t2;
}
function Yr(e2) {
  return qr[e2] || qr[``];
}
function Xr(e2) {
  let t2;
  if (typeof e2.resources == `string`) t2 = [e2.resources];
  else if (t2 = e2.resources, !(t2 instanceof Array) || !t2.length) return null;
  return { resources: t2, path: e2.path || `/`, maxURL: e2.maxURL || 500, rotate: e2.rotate || 750, timeout: e2.timeout || 5e3, random: e2.random === true, index: e2.index || 0, dataAfterTimeout: e2.dataAfterTimeout !== false };
}
for (var Zr = /* @__PURE__ */ Object.create(null), Qr = [`https://api.simplesvg.com`, `https://api.unisvg.com`], $r = []; Qr.length > 0; ) Qr.length === 1 || Math.random() > 0.5 ? $r.push(Qr.shift()) : $r.push(Qr.pop());
Zr[``] = Xr({ resources: [`https://api.iconify.design`].concat($r) });
function ei(e2, t2) {
  let n2 = Xr(t2);
  return n2 === null ? false : (Zr[e2] = n2, true);
}
function ti(e2) {
  return Zr[e2];
}
var ni = (() => {
  let e2;
  try {
    if (e2 = fetch, typeof e2 == `function`) return e2;
  } catch {
  }
})();
function ri(e2, t2) {
  let n2 = ti(e2);
  if (!n2) return 0;
  let r2;
  if (!n2.maxURL) r2 = 0;
  else {
    let e3 = 0;
    n2.resources.forEach((t3) => {
      e3 = Math.max(e3, t3.length);
    });
    let i2 = t2 + `.json?icons=`;
    r2 = n2.maxURL - e3 - n2.path.length - i2.length;
  }
  return r2;
}
function ii(e2) {
  return e2 === 404;
}
var ai = (e2, t2, n2) => {
  let r2 = [], i2 = ri(e2, t2), a2 = `icons`, o2 = { type: a2, provider: e2, prefix: t2, icons: [] }, s2 = 0;
  return n2.forEach((n3, c2) => {
    s2 += n3.length + 1, s2 >= i2 && c2 > 0 && (r2.push(o2), o2 = { type: a2, provider: e2, prefix: t2, icons: [] }, s2 = n3.length), o2.icons.push(n3);
  }), r2.push(o2), r2;
};
function oi(e2) {
  if (typeof e2 == `string`) {
    let t2 = ti(e2);
    if (t2) return t2.path;
  }
  return `/`;
}
var si = { prepare: ai, send: (e2, t2, n2) => {
  if (!ni) {
    n2(`abort`, 424);
    return;
  }
  let r2 = oi(t2.provider);
  switch (t2.type) {
    case `icons`: {
      let e3 = t2.prefix, n3 = t2.icons.join(`,`), i3 = new URLSearchParams({ icons: n3 });
      r2 += e3 + `.json?` + i3.toString();
      break;
    }
    case `custom`: {
      let e3 = t2.uri;
      r2 += e3.slice(0, 1) === `/` ? e3.slice(1) : e3;
      break;
    }
    default:
      n2(`abort`, 400);
      return;
  }
  let i2 = 503;
  ni(e2 + r2).then((e3) => {
    let t3 = e3.status;
    if (t3 !== 200) {
      setTimeout(() => {
        n2(ii(t3) ? `abort` : `next`, t3);
      });
      return;
    }
    return i2 = 501, e3.json();
  }).then((e3) => {
    if (typeof e3 != `object` || !e3) {
      setTimeout(() => {
        e3 === 404 ? n2(`abort`, e3) : n2(`next`, i2);
      });
      return;
    }
    setTimeout(() => {
      n2(`success`, e3);
    });
  }).catch(() => {
    n2(`next`, i2);
  });
} };
function ci(e2) {
  let t2 = { loaded: [], missing: [], pending: [] }, n2 = /* @__PURE__ */ Object.create(null);
  e2.sort((e3, t3) => e3.provider === t3.provider ? e3.prefix === t3.prefix ? e3.name.localeCompare(t3.name) : e3.prefix.localeCompare(t3.prefix) : e3.provider.localeCompare(t3.provider));
  let r2 = { provider: ``, prefix: ``, name: `` };
  return e2.forEach((e3) => {
    if (r2.name === e3.name && r2.prefix === e3.prefix && r2.provider === e3.provider) return;
    r2 = e3;
    let i2 = e3.provider, a2 = e3.prefix, o2 = e3.name, s2 = n2[i2] || (n2[i2] = /* @__PURE__ */ Object.create(null)), c2 = s2[a2] || (s2[a2] = Tr(i2, a2)), l2;
    l2 = o2 in c2.icons ? t2.loaded : a2 === `` || c2.missing.has(o2) ? t2.missing : t2.pending;
    let u2 = { provider: i2, prefix: a2, name: o2 };
    l2.push(u2);
  }), t2;
}
function li(e2, t2) {
  e2.forEach((e3) => {
    let n2 = e3.loaderCallbacks;
    n2 && (e3.loaderCallbacks = n2.filter((e4) => e4.id !== t2));
  });
}
function ui(e2) {
  e2.pendingCallbacksFlag || (e2.pendingCallbacksFlag = true, setTimeout(() => {
    e2.pendingCallbacksFlag = false;
    let t2 = e2.loaderCallbacks ? e2.loaderCallbacks.slice(0) : [];
    if (!t2.length) return;
    let n2 = false, r2 = e2.provider, i2 = e2.prefix;
    t2.forEach((t3) => {
      let a2 = t3.icons, o2 = a2.pending.length;
      a2.pending = a2.pending.filter((t4) => {
        if (t4.prefix !== i2) return true;
        let o3 = t4.name;
        if (e2.icons[o3]) a2.loaded.push({ provider: r2, prefix: i2, name: o3 });
        else if (e2.missing.has(o3)) a2.missing.push({ provider: r2, prefix: i2, name: o3 });
        else return n2 = true, true;
        return false;
      }), a2.pending.length !== o2 && (n2 || li([e2], t3.id), t3.callback(a2.loaded.slice(0), a2.missing.slice(0), a2.pending.slice(0), t3.abort));
    });
  }));
}
var di = 0;
function fi(e2, t2, n2) {
  let r2 = di++, i2 = li.bind(null, n2, r2);
  if (!t2.pending.length) return i2;
  let a2 = { id: r2, icons: t2, callback: e2, abort: i2 };
  return n2.forEach((e3) => {
    (e3.loaderCallbacks || (e3.loaderCallbacks = [])).push(a2);
  }), i2;
}
function pi(e2, t2 = true, n2 = false) {
  let r2 = [];
  return e2.forEach((e3) => {
    let i2 = typeof e3 == `string` ? lr(e3, t2, n2) : e3;
    i2 && r2.push(i2);
  }), r2;
}
var mi = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: false, dataAfterTimeout: false };
function hi(e2, t2, n2, r2) {
  let i2 = e2.resources.length, a2 = e2.random ? Math.floor(Math.random() * i2) : e2.index, o2;
  if (e2.random) {
    let t3 = e2.resources.slice(0);
    for (o2 = []; t3.length > 1; ) {
      let e3 = Math.floor(Math.random() * t3.length);
      o2.push(t3[e3]), t3 = t3.slice(0, e3).concat(t3.slice(e3 + 1));
    }
    o2 = o2.concat(t3);
  } else o2 = e2.resources.slice(a2).concat(e2.resources.slice(0, a2));
  let s2 = Date.now(), c2 = `pending`, l2 = 0, u2, d2 = null, f2 = [], p2 = [];
  typeof r2 == `function` && p2.push(r2);
  function m2() {
    d2 && (d2 = (clearTimeout(d2), null));
  }
  function h2() {
    c2 === `pending` && (c2 = `aborted`), m2(), f2.forEach((e3) => {
      e3.status === `pending` && (e3.status = `aborted`);
    }), f2 = [];
  }
  function g2(e3, t3) {
    t3 && (p2 = []), typeof e3 == `function` && p2.push(e3);
  }
  function _2() {
    return { startTime: s2, payload: t2, status: c2, queriesSent: l2, queriesPending: f2.length, subscribe: g2, abort: h2 };
  }
  function v2() {
    c2 = `failed`, p2.forEach((e3) => {
      e3(void 0, u2);
    });
  }
  function y2() {
    f2.forEach((e3) => {
      e3.status === `pending` && (e3.status = `aborted`);
    }), f2 = [];
  }
  function b2(t3, n3, r3) {
    let i3 = n3 !== `success`;
    switch (f2 = f2.filter((e3) => e3 !== t3), c2) {
      case `pending`:
        break;
      case `failed`:
        if (i3 || !e2.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (n3 === `abort`) {
      u2 = r3, v2();
      return;
    }
    if (i3) {
      u2 = r3, f2.length || (o2.length ? x2() : v2());
      return;
    }
    if (m2(), y2(), !e2.random) {
      let n4 = e2.resources.indexOf(t3.resource);
      n4 !== -1 && n4 !== e2.index && (e2.index = n4);
    }
    c2 = `completed`, p2.forEach((e3) => {
      e3(r3);
    });
  }
  function x2() {
    if (c2 !== `pending`) return;
    m2();
    let r3 = o2.shift();
    if (r3 === void 0) {
      if (f2.length) {
        d2 = setTimeout(() => {
          m2(), c2 === `pending` && (y2(), v2());
        }, e2.timeout);
        return;
      }
      v2();
      return;
    }
    let i3 = { status: `pending`, resource: r3, callback: (e3, t3) => {
      b2(i3, e3, t3);
    } };
    f2.push(i3), l2++, d2 = setTimeout(x2, e2.rotate), n2(r3, t2, i3.callback);
  }
  return setTimeout(x2), _2;
}
function gi(e2) {
  let t2 = { ...mi, ...e2 }, n2 = [];
  function r2() {
    n2 = n2.filter((e3) => e3().status === `pending`);
  }
  function i2(e3, i3, a3) {
    let o2 = hi(t2, e3, i3, (e4, t3) => {
      r2(), a3 && a3(e4, t3);
    });
    return n2.push(o2), o2;
  }
  function a2(e3) {
    return n2.find((t3) => e3(t3)) || null;
  }
  return { query: i2, find: a2, setIndex: (e3) => {
    t2.index = e3;
  }, getIndex: () => t2.index, cleanup: r2 };
}
function _i() {
}
var vi = /* @__PURE__ */ Object.create(null);
function yi(e2) {
  if (!vi[e2]) {
    let t2 = ti(e2);
    if (!t2) return;
    vi[e2] = { config: t2, redundancy: gi(t2) };
  }
  return vi[e2];
}
function bi(e2, t2, n2) {
  let r2, i2;
  if (typeof e2 == `string`) {
    let t3 = Yr(e2);
    if (!t3) return n2(void 0, 424), _i;
    i2 = t3.send;
    let a2 = yi(e2);
    a2 && (r2 = a2.redundancy);
  } else {
    let t3 = Xr(e2);
    if (t3) {
      r2 = gi(t3);
      let n3 = Yr(e2.resources ? e2.resources[0] : ``);
      n3 && (i2 = n3.send);
    }
  }
  return !r2 || !i2 ? (n2(void 0, 424), _i) : r2.query(t2, i2, n2)().abort;
}
function xi() {
}
function Si(e2) {
  e2.iconsLoaderFlag || (e2.iconsLoaderFlag = true, setTimeout(() => {
    e2.iconsLoaderFlag = false, ui(e2);
  }));
}
function Ci(e2) {
  let t2 = [], n2 = [];
  return e2.forEach((e3) => {
    (e3.match(cr) ? t2 : n2).push(e3);
  }), { valid: t2, invalid: n2 };
}
function wi(e2, t2, n2) {
  function r2() {
    let n3 = e2.pendingIcons;
    t2.forEach((t3) => {
      n3 && n3.delete(t3), e2.icons[t3] || e2.missing.add(t3);
    });
  }
  if (n2 && typeof n2 == `object`) try {
    if (!Er(e2, n2).length) {
      r2();
      return;
    }
  } catch (e3) {
    console.error(e3);
  }
  r2(), Si(e2);
}
function Ti(e2, t2) {
  e2 instanceof Promise ? e2.then((e3) => {
    t2(e3);
  }).catch(() => {
    t2(null);
  }) : t2(e2);
}
function Ei(e2, t2) {
  e2.iconsToLoad ? e2.iconsToLoad = e2.iconsToLoad.concat(t2).sort() : e2.iconsToLoad = t2, e2.iconsQueueFlag || (e2.iconsQueueFlag = true, setTimeout(() => {
    e2.iconsQueueFlag = false;
    let { provider: t3, prefix: n2 } = e2, r2 = e2.iconsToLoad;
    if (delete e2.iconsToLoad, !r2 || !r2.length) return;
    let i2 = e2.loadIcon;
    if (e2.loadIcons && (r2.length > 1 || !i2)) {
      Ti(e2.loadIcons(r2, n2, t3), (t4) => {
        wi(e2, r2, t4);
      });
      return;
    }
    if (i2) {
      r2.forEach((r3) => {
        Ti(i2(r3, n2, t3), (t4) => {
          wi(e2, [r3], t4 ? { prefix: n2, icons: { [r3]: t4 } } : null);
        });
      });
      return;
    }
    let { valid: a2, invalid: o2 } = Ci(r2);
    if (o2.length && wi(e2, o2, null), !a2.length) return;
    let s2 = n2.match(cr) ? Yr(t3) : null;
    if (!s2) {
      wi(e2, a2, null);
      return;
    }
    s2.prepare(t3, n2, a2).forEach((n3) => {
      bi(t3, n3, (t4) => {
        wi(e2, n3.icons, t4);
      });
    });
  }));
}
var Di = (e2, t2) => {
  let n2 = ci(pi(e2, true, kr()));
  if (!n2.pending.length) {
    let e3 = true;
    return t2 && setTimeout(() => {
      e3 && t2(n2.loaded, n2.missing, n2.pending, xi);
    }), () => {
      e3 = false;
    };
  }
  let r2 = /* @__PURE__ */ Object.create(null), i2 = [], a2, o2;
  return n2.pending.forEach((e3) => {
    let { provider: t3, prefix: n3 } = e3;
    if (n3 === o2 && t3 === a2) return;
    a2 = t3, o2 = n3, i2.push(Tr(t3, n3));
    let s2 = r2[t3] || (r2[t3] = /* @__PURE__ */ Object.create(null));
    s2[n3] || (s2[n3] = []);
  }), n2.pending.forEach((e3) => {
    let { provider: t3, prefix: n3, name: i3 } = e3, a3 = Tr(t3, n3), o3 = a3.pendingIcons || (a3.pendingIcons = /* @__PURE__ */ new Set());
    o3.has(i3) || (o3.add(i3), r2[t3][n3].push(i3));
  }), i2.forEach((e3) => {
    let t3 = r2[e3.provider][e3.prefix];
    t3.length && Ei(e3, t3);
  }), t2 ? fi(t2, n2, i2) : xi;
};
function Oi(e2, t2) {
  let n2 = { ...e2 };
  for (let e3 in t2) {
    let r2 = t2[e3], i2 = typeof r2;
    e3 in Nr ? (r2 === null || r2 && (i2 === `string` || i2 === `number`)) && (n2[e3] = r2) : i2 === typeof n2[e3] && (n2[e3] = e3 === `rotate` ? r2 % 4 : r2);
  }
  return n2;
}
var ki = /[\s,]+/;
function Ai(e2, t2) {
  t2.split(ki).forEach((t3) => {
    switch (t3.trim()) {
      case `horizontal`:
        e2.hFlip = true;
        break;
      case `vertical`:
        e2.vFlip = true;
        break;
    }
  });
}
function ji(e2, t2 = 0) {
  let n2 = e2.replace(/^-?[0-9.]*/, ``);
  function r2(e3) {
    for (; e3 < 0; ) e3 += 4;
    return e3 % 4;
  }
  if (n2 === ``) {
    let t3 = parseInt(e2);
    return isNaN(t3) ? 0 : r2(t3);
  } else if (n2 !== e2) {
    let t3 = 0;
    switch (n2) {
      case `%`:
        t3 = 25;
        break;
      case `deg`:
        t3 = 90;
    }
    if (t3) {
      let i2 = parseFloat(e2.slice(0, e2.length - n2.length));
      return isNaN(i2) ? 0 : (i2 /= t3, i2 % 1 == 0 ? r2(i2) : 0);
    }
  }
  return t2;
}
function Mi(e2, t2) {
  let n2 = e2.indexOf(`xlink:`) === -1 ? `` : ` xmlns:xlink="http://www.w3.org/1999/xlink"`;
  for (let e3 in t2) n2 += ` ` + e3 + `="` + t2[e3] + `"`;
  return `<svg xmlns="http://www.w3.org/2000/svg"` + n2 + `>` + e2 + `</svg>`;
}
function Ni(e2) {
  return e2.replace(/"/g, `'`).replace(/%/g, `%25`).replace(/#/g, `%23`).replace(/</g, `%3C`).replace(/>/g, `%3E`).replace(/\s+/g, ` `);
}
function Pi(e2) {
  return `data:image/svg+xml,` + Ni(e2);
}
function Fi(e2) {
  return `url("` + Pi(e2) + `")`;
}
var Ii = { ...Pr, inline: false }, Li = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, "aria-hidden": true, role: `img` }, Ri = { display: `inline-block` }, zi = { backgroundColor: `currentColor` }, Bi = { backgroundColor: `transparent` }, Vi = { Image: `var(--svg)`, Repeat: `no-repeat`, Size: `100% 100%` }, Hi = { webkitMask: zi, mask: zi, background: Bi };
for (let e2 in Hi) {
  let t2 = Hi[e2];
  for (let n2 in Vi) t2[e2 + n2] = Vi[n2];
}
var Ui = {};
[`horizontal`, `vertical`].forEach((e2) => {
  let t2 = e2.slice(0, 1) + `Flip`;
  Ui[e2 + `-flip`] = t2, Ui[e2.slice(0, 1) + `-flip`] = t2, Ui[e2 + `Flip`] = t2;
});
function Wi(e2) {
  return e2 + (e2.match(/^[-0-9.]+$/) ? `px` : ``);
}
var Gi = (e2, t2) => {
  let r2 = Oi(Ii, t2), i2 = { ...Li }, a2 = t2.mode || `svg`, o2 = {}, s2 = t2.style, c2 = typeof s2 == `object` && !(s2 instanceof Array) ? s2 : {};
  for (let e3 in t2) {
    let n2 = t2[e3];
    if (n2 !== void 0) switch (e3) {
      case `icon`:
      case `style`:
      case `onLoad`:
      case `mode`:
      case `ssr`:
        break;
      case `inline`:
      case `hFlip`:
      case `vFlip`:
        r2[e3] = n2 === true || n2 === `true` || n2 === 1;
        break;
      case `flip`:
        typeof n2 == `string` && Ai(r2, n2);
        break;
      case `color`:
        o2.color = n2;
        break;
      case `rotate`:
        typeof n2 == `string` ? r2[e3] = ji(n2) : typeof n2 == `number` && (r2[e3] = n2);
        break;
      case `ariaHidden`:
      case `aria-hidden`:
        n2 !== true && n2 !== `true` && delete i2[`aria-hidden`];
        break;
      default: {
        let t3 = Ui[e3];
        t3 ? (n2 === true || n2 === `true` || n2 === 1) && (r2[t3] = true) : Ii[e3] === void 0 && (i2[e3] = n2);
      }
    }
  }
  let l2 = Hr(e2, r2), u2 = l2.attributes;
  if (r2.inline && (o2.verticalAlign = `-0.125em`), a2 === `svg`) {
    i2.style = { ...o2, ...c2 }, Object.assign(i2, u2);
    let e3 = 0, r3 = t2.id;
    return typeof r3 == `string` && (r3 = r3.replace(/-/g, `_`)), i2.innerHTML = Kr(l2.body, r3 ? () => r3 + `ID` + e3++ : `iconifyVue`), n(`svg`, i2);
  }
  let { body: d2, width: f2, height: p2 } = e2, m2 = a2 === `mask` || (a2 === `bg` ? false : d2.indexOf(`currentColor`) !== -1), h2 = Mi(d2, { ...u2, width: f2 + ``, height: p2 + `` });
  return i2.style = { ...o2, "--svg": Fi(h2), width: Wi(u2.width), height: Wi(u2.height), ...Ri, ...m2 ? zi : Bi, ...c2 }, n(`span`, i2);
};
if (kr(true), Jr(``, si), typeof document < `u` && typeof window < `u`) {
  let e2 = window;
  if (e2.IconifyPreload !== void 0) {
    let t2 = e2.IconifyPreload, n2 = `Invalid IconifyPreload syntax.`;
    typeof t2 == `object` && t2 && (t2 instanceof Array ? t2 : [t2]).forEach((e3) => {
      try {
        (typeof e3 != `object` || !e3 || e3 instanceof Array || typeof e3.icons != `object` || typeof e3.prefix != `string` || !Mr(e3)) && console.error(n2);
      } catch {
        console.error(n2);
      }
    });
  }
  if (e2.IconifyProviders !== void 0) {
    let t2 = e2.IconifyProviders;
    if (typeof t2 == `object` && t2) for (let e3 in t2) {
      let n2 = `IconifyProviders[` + e3 + `] is invalid.`;
      try {
        let r2 = t2[e3];
        if (typeof r2 != `object` || !r2 || r2.resources === void 0) continue;
        ei(e3, r2) || console.error(n2);
      } catch {
        console.error(n2);
      }
    }
  }
}
var Ki = { ...pr, body: `` }, qi = S((e2, { emit: t2 }) => {
  let n2 = k(null);
  function r2() {
    n2.value && (n2.value = (n2.value.abort?.(), null));
  }
  let i2 = k(!!e2.ssr), a2 = k(``), o2 = re(null);
  function c2() {
    let i3 = e2.icon;
    if (typeof i3 == `object` && i3 && typeof i3.body == `string`) return a2.value = ``, { data: i3 };
    let o3;
    if (typeof i3 != `string` || (o3 = lr(i3, false, true)) === null) return null;
    let s2 = Ar(o3);
    if (!s2) {
      let e3 = n2.value;
      return (!e3 || e3.name !== i3) && (s2 === null ? n2.value = { name: i3 } : n2.value = { name: i3, abort: Di([o3], l2) }), null;
    }
    r2(), a2.value !== i3 && (a2.value = i3, te(() => {
      t2(`load`, i3);
    }));
    let c3 = e2.customise;
    if (c3) {
      s2 = Object.assign({}, s2);
      let e3 = c3(s2.body, o3.name, o3.prefix, o3.provider);
      typeof e3 == `string` && (s2.body = e3);
    }
    let u2 = [`iconify`];
    return o3.prefix !== `` && u2.push(`iconify--` + o3.prefix), o3.provider !== `` && u2.push(`iconify--` + o3.provider), { data: s2, classes: u2 };
  }
  function l2() {
    let e3 = c2();
    e3 ? e3.data !== o2.value?.data && (o2.value = e3) : o2.value = null;
  }
  return i2.value ? l2() : m(() => {
    i2.value = true, l2();
  }), s(() => e2.icon, l2), g(r2), () => {
    let t3 = o2.value;
    if (!t3) return Gi(Ki, e2);
    let n3 = e2;
    return t3.classes && (n3 = { ...e2, class: t3.classes.join(` `) }), Gi({ ...pr, ...t3.data }, n3);
  };
}, { props: [`icon`, `mode`, `ssr`, `width`, `height`, `style`, `color`, `inline`, `rotate`, `hFlip`, `horizontalFlip`, `vFlip`, `verticalFlip`, `flip`, `id`, `ariaHidden`, `customise`, `title`], emits: [`load`] }), Ji = { __name: `Icon`, props: { name: { type: null, required: true }, mode: { type: String, required: false }, size: { type: [String, Number], required: false }, customize: { type: [Function, Boolean, null], required: false } }, setup(e2) {
  let t2 = e2, n2 = R();
  function r2(e3, t3) {
    if (e3 !== false) return e3 === true || e3 === null ? t3 : e3;
  }
  let i2 = _(() => {
    let e3 = t2.mode || n2.icon?.mode;
    return e3 === `css` ? `style` : e3;
  }), a2 = _(() => t2.size || n2.icon?.size), o2 = _(() => r2(t2.customize, n2.icon?.customize));
  return (t3, n3) => typeof e2.name == `string` ? (C(), O(d(qi), { key: 0, icon: e2.name.replace(/^i-/, ``), mode: i2.value, width: a2.value, height: a2.value, customise: o2.value }, null, 8, [`icon`, `mode`, `width`, `height`, `customise`])) : (C(), O(j(e2.name), { key: 1 }));
} }, Yi = /* @__PURE__ */ Symbol(`nuxt-ui.avatar-group`);
function Xi(e2) {
  let t2 = c(Yi, void 0), n2 = _(() => e2.size ?? t2?.value.size);
  return y(Yi, _(() => ({ size: n2.value }))), { size: n2 };
}
var Zi = { slots: { root: `relative inline-flex items-center justify-center shrink-0`, base: `rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap` }, variants: { color: { primary: `bg-primary`, secondary: `bg-secondary`, success: `bg-success`, info: `bg-info`, warning: `bg-warning`, error: `bg-error`, neutral: `bg-inverted` }, size: { "3xs": `h-[4px] min-w-[4px] text-[4px]`, "2xs": `h-[5px] min-w-[5px] text-[5px]`, xs: `h-[6px] min-w-[6px] text-[6px]`, sm: `h-[7px] min-w-[7px] text-[7px]`, md: `h-[8px] min-w-[8px] text-[8px]`, lg: `h-[9px] min-w-[9px] text-[9px]`, xl: `h-[10px] min-w-[10px] text-[10px]`, "2xl": `h-[11px] min-w-[11px] text-[11px]`, "3xl": `h-[12px] min-w-[12px] text-[12px]` }, position: { "top-right": `top-0 right-0`, "bottom-right": `bottom-0 right-0`, "top-left": `top-0 left-0`, "bottom-left": `bottom-0 left-0` }, inset: { false: `` }, standalone: { false: `absolute` } }, compoundVariants: [{ position: `top-right`, inset: false, class: `-translate-y-1/2 translate-x-1/2 transform` }, { position: `bottom-right`, inset: false, class: `translate-y-1/2 translate-x-1/2 transform` }, { position: `top-left`, inset: false, class: `-translate-y-1/2 -translate-x-1/2 transform` }, { position: `bottom-left`, inset: false, class: `translate-y-1/2 -translate-x-1/2 transform` }], defaultVariants: { size: `md`, color: `primary`, position: `top-right` } }, Qi = Object.assign({ inheritAttrs: false }, { __name: `Chip`, props: e({ as: { type: null, required: false }, text: { type: [String, Number], required: false }, color: { type: null, required: false }, size: { type: null, required: false }, position: { type: null, required: false }, inset: { type: Boolean, required: false, default: false }, standalone: { type: Boolean, required: false, default: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, { show: { type: Boolean, default: true }, showModifiers: {} }), emits: [`update:show`], setup(e2) {
  let n2 = e2, a2 = o(e2, `show`, { type: Boolean, default: true }), { size: s2 } = Xi(n2), c2 = R(), l2 = xt(`chip`, n2), u2 = _(() => $({ extend: $(Zi), ...c2.ui?.chip || {} })({ color: n2.color, size: s2.value, position: n2.position, inset: n2.inset, standalone: n2.standalone }));
  return (o2, s3) => (C(), O(d(vt), { as: e2.as, "data-slot": `root`, class: f(u2.value.root({ class: [d(l2)?.root, n2.class] })) }, { default: E(() => [r(d(gt), t(ae(o2.$attrs)), { default: E(() => [M(o2.$slots, `default`)]), _: 3 }, 16), a2.value ? (C(), p(`span`, { key: 0, "data-slot": `base`, class: f(u2.value.base({ class: d(l2)?.base })) }, [M(o2.$slots, `content`, {}, () => [i(D(e2.text), 1)])], 2)) : ie(``, true)]), _: 3 }, 8, [`as`, `class`]));
} }), $i = { slots: { root: `inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated`, image: `h-full w-full rounded-[inherit] object-cover`, fallback: `font-medium text-muted truncate`, icon: `text-muted shrink-0` }, variants: { size: { "3xs": { root: `size-4 text-[8px]` }, "2xs": { root: `size-5 text-[10px]` }, xs: { root: `size-6 text-xs` }, sm: { root: `size-7 text-sm` }, md: { root: `size-8 text-base` }, lg: { root: `size-9 text-lg` }, xl: { root: `size-10 text-xl` }, "2xl": { root: `size-11 text-[22px]` }, "3xl": { root: `size-12 text-2xl` } } }, defaultVariants: { size: `md` } }, ea = Object.assign({ inheritAttrs: false }, { __name: `Avatar`, props: { as: { type: null, required: false }, src: { type: String, required: false }, alt: { type: String, required: false }, icon: { type: null, required: false }, text: { type: String, required: false }, size: { type: null, required: false }, chip: { type: [Boolean, Object], required: false }, class: { type: null, required: false }, style: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let n2 = e2, r2 = _(() => typeof n2.as == `string` || typeof n2.as?.render == `function` ? { root: n2.as } : z(n2.as, { root: `span` })), i2 = _(() => n2.text || (n2.alt || ``).split(` `).map((e3) => e3.charAt(0)).join(``).substring(0, 2)), a2 = R(), o2 = xt(`avatar`, n2), { size: c2 } = Xi(n2), l2 = _(() => $({ extend: $($i), ...a2.ui?.avatar || {} })({ size: c2.value })), u2 = _(() => l2.value.root({ class: [o2.value?.root, n2.class] })), m2 = _(() => {
    let e3 = u2.value.split(` `).find((e4) => /^size-\d+$/.test(e4));
    if (e3) {
      let t2 = Number.parseFloat(e3.split(`-`)[1] ?? ``);
      if (!Number.isNaN(t2)) return t2 * 4;
    }
    return null;
  }), g2 = k(false);
  s(() => n2.src, () => {
    g2.value && (g2.value = false);
  });
  function v2() {
    g2.value = true;
  }
  return (a3, s2) => (C(), O(j(n2.chip ? Qi : d(vt)), h({ as: r2.value.root }, n2.chip ? typeof n2.chip == `object` ? { inset: true, ...n2.chip } : { inset: true } : {}, { "data-slot": `root`, class: u2.value, style: n2.style }), { default: E(() => [e2.src && !g2.value ? (C(), O(j(r2.value.img || d(`img`)), h({ key: 0, src: e2.src, alt: e2.alt, width: m2.value, height: m2.value }, a3.$attrs, { "data-slot": `image`, class: l2.value.image({ class: d(o2)?.image }), onError: v2 }), null, 16, [`src`, `alt`, `width`, `height`, `class`])) : (C(), O(d(gt), t(h({ key: 1 }, a3.$attrs)), { default: E(() => [M(a3.$slots, `default`, {}, () => [e2.icon ? (C(), O(Ji, { key: 0, name: e2.icon, "data-slot": `icon`, class: f(l2.value.icon({ class: d(o2)?.icon })) }, null, 8, [`name`, `class`])) : (C(), p(`span`, { key: 1, "data-slot": `fallback`, class: f(l2.value.fallback({ class: d(o2)?.fallback })) }, D(i2.value || `\xA0`), 3))])]), _: 3 }, 16))]), _: 3 }, 16, [`as`, `class`, `style`]));
} });
function ta(e2) {
  let t2 = R(), n2 = _(() => a(e2)), r2 = _(() => n2.value.icon && n2.value.leading || n2.value.icon && !n2.value.trailing || n2.value.loading && !n2.value.trailing || !!n2.value.leadingIcon);
  return { isLeading: r2, isTrailing: _(() => n2.value.icon && n2.value.trailing || n2.value.loading && n2.value.trailing || !!n2.value.trailingIcon), leadingIconName: _(() => n2.value.loading ? n2.value.loadingIcon || t2.ui.icons.loading : n2.value.leadingIcon || n2.value.icon), trailingIconName: _(() => n2.value.loading && !r2.value ? n2.value.loadingIcon || t2.ui.icons.loading : n2.value.trailingIcon || n2.value.icon) };
}
var na = /* @__PURE__ */ Symbol(`nuxt-ui.field-group`);
function ra(e2) {
  let t2 = c(na, void 0);
  return { orientation: _(() => t2?.value.orientation), size: _(() => e2?.size ?? t2?.value.size) };
}
var ia = S({ name: `FieldGroupReset`, setup(e2, { slots: t2 }) {
  return y(na, _(() => ({ size: void 0, orientation: void 0 }))), () => t2.default?.();
} }), aa = /* @__PURE__ */ Symbol(`nuxt-ui.form-options`), oa = /* @__PURE__ */ Symbol(`nuxt-ui.form-events`), sa = /* @__PURE__ */ Symbol(`nuxt-ui.form-state`), ca = /* @__PURE__ */ Symbol(`nuxt-ui.form-field`), la = /* @__PURE__ */ Symbol(`nuxt-ui.input-id`), ua = /* @__PURE__ */ Symbol(`nuxt-ui.form-inputs`), da = /* @__PURE__ */ Symbol(`nuxt-ui.form-loading`), fa = /* @__PURE__ */ Symbol(`nuxt-ui.form-errors`);
function pa(e2, t2) {
  let n2 = c(aa, void 0), r2 = c(oa, void 0), i2 = c(ca, void 0), a2 = c(la, void 0);
  y(ca, void 0), i2 && a2 && (t2?.bind === false ? a2.value = void 0 : e2?.id && (a2.value = e2?.id));
  function o2(e3, t3, n3) {
    r2 && i2 && t3 && r2.emit({ type: e3, name: t3, eager: n3 });
  }
  function s2() {
    o2(`blur`, i2?.value.name);
  }
  function l2() {
    o2(`focus`, i2?.value.name);
  }
  function u2() {
    o2(`change`, i2?.value.name);
  }
  let d2 = se(() => {
    o2(`input`, i2?.value.name, !t2?.deferInputValidation || i2?.value.eagerValidation);
  }, i2?.value.validateOnInputDelay ?? n2?.value.validateOnInputDelay ?? 0);
  return { id: _(() => e2?.id ?? a2?.value), name: _(() => e2?.name ?? i2?.value.name), size: _(() => e2?.size ?? i2?.value.size), color: _(() => i2?.value.error ? `error` : e2?.color), highlight: _(() => i2?.value.error ? true : e2?.highlight), disabled: _(() => n2?.value.disabled || e2?.disabled), emitFormBlur: s2, emitFormInput: d2, emitFormChange: u2, emitFormFocus: l2, ariaAttrs: _(() => {
    if (!i2?.value) return;
    let e3 = [`error`, `hint`, `description`, `help`].filter((e4) => i2?.value?.[e4]).map((e4) => `${i2?.value.ariaId}-${e4}`) || [], t3 = { "aria-invalid": !!i2?.value.error };
    return e3.length > 0 && (t3[`aria-describedby`] = e3.join(` `)), t3;
  }) };
}
var ma = `active.activeClass.ariaCurrentValue.as.disabled.download.exact.exactActiveClass.exactHash.exactQuery.external.form.formaction.formenctype.formmethod.formnovalidate.formtarget.href.hreflang.inactiveClass.locale.media.noPrefetch.noRel.onClick.ping.prefetch.prefetchOn.prefetchedClass.referrerpolicy.rel.replace.target.title.to.trailingSlash.type.viewTransition`.split(`.`);
function ha(e2) {
  let t2 = Object.keys(e2), n2 = t2.filter((e3) => e3.startsWith(`aria-`)), r2 = t2.filter((e3) => e3.startsWith(`data-`));
  return oe(e2, ...ma, ...n2, ...r2);
}
function ga(e2, t2) {
  let n2 = Fe(e2, t2).reduce((e3, t3) => (t3.type === `added` && e3.add(t3.key), e3), /* @__PURE__ */ new Set());
  return Pe(Object.fromEntries(Object.entries(e2).filter(([e3]) => !n2.has(e3))), Object.fromEntries(Object.entries(t2).filter(([e3]) => !n2.has(e3))));
}
var _a = { __name: `LinkBase`, props: { as: { type: String, required: false, default: `button` }, type: { type: String, required: false, default: `button` }, disabled: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, href: { type: String, required: false }, navigate: { type: Function, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, active: { type: Boolean, required: false }, isExternal: { type: Boolean, required: false } }, setup(e2) {
  let t2 = e2;
  function n2(e3) {
    if (t2.disabled) {
      e3.stopPropagation(), e3.preventDefault();
      return;
    }
    if (t2.onClick) for (let n3 of Array.isArray(t2.onClick) ? t2.onClick : [t2.onClick]) n3(e3);
    t2.href && t2.navigate && !t2.isExternal && t2.navigate(e3);
  }
  return (t3, r2) => (C(), O(d(vt), h(e2.href ? { as: `a`, href: e2.disabled ? void 0 : e2.href, "aria-disabled": e2.disabled ? `true` : void 0, role: e2.disabled ? `link` : void 0, tabindex: e2.disabled ? -1 : void 0 } : e2.as === `button` ? { as: e2.as, type: e2.type, disabled: e2.disabled } : { as: e2.as }, { rel: e2.rel, target: e2.target, onClick: n2 }), { default: E(() => [M(t3.$slots, `default`)]), _: 3 }, 16, [`rel`, `target`]));
} }, va = { base: `focus-visible:outline-primary`, variants: { active: { true: `text-primary`, false: `text-muted` }, disabled: { true: `cursor-not-allowed opacity-75` } }, compoundVariants: [{ active: false, disabled: false, class: [`hover:text-default`, `transition-colors`] }] }, ya = Object.assign({ inheritAttrs: false }, { __name: `Link`, props: { as: { type: null, required: false, default: `button` }, href: { type: null, required: false }, external: { type: Boolean, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, noRel: { type: Boolean, required: false }, type: { type: null, required: false, default: `button` }, disabled: { type: Boolean, required: false }, active: { type: Boolean, required: false, default: void 0 }, exact: { type: Boolean, required: false }, exactQuery: { type: [Boolean, String], required: false }, exactHash: { type: Boolean, required: false }, inactiveClass: { type: String, required: false }, custom: { type: Boolean, required: false }, raw: { type: Boolean, required: false }, class: { type: null, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, ariaCurrentValue: { type: String, required: false, default: `page` }, viewTransition: { type: Boolean, required: false }, to: { type: null, required: false }, replace: { type: Boolean, required: false } }, setup(e2) {
  let n2 = e2, r2 = ue(), i2 = R(), a2 = ht(P(n2, `as`, `type`, `disabled`, `active`, `exact`, `exactQuery`, `exactHash`, `activeClass`, `inactiveClass`, `to`, `href`, `raw`, `custom`, `class`, `noRel`)), o2 = _(() => $({ extend: $(va), ...z({ variants: { active: { true: Xe(i2.ui?.link?.variants?.active?.true, n2.activeClass), false: Xe(i2.ui?.link?.variants?.active?.false, n2.inactiveClass) } } }, i2.ui?.link || {}) })), s2 = _(() => n2.to ?? n2.href), c2 = _(() => n2.external ? true : s2.value ? typeof s2.value == `string` && Ue(s2.value, { acceptRelative: true }) : false), l2 = _(() => !!n2.target && n2.target !== `_self`), u2 = _(() => n2.noRel ? null : n2.rel === void 0 ? c2.value || l2.value ? `noopener noreferrer` : null : n2.rel || null);
  function f2({ route: e3, isActive: t2, isExactActive: i3 }) {
    if (n2.active !== void 0) return n2.active;
    if (!s2.value) return false;
    if (n2.exactQuery === `partial`) {
      if (!ga(e3.query, r2.query)) return false;
    } else if (n2.exactQuery === true && !Pe(e3.query, r2.query)) return false;
    return n2.exactHash && e3.hash !== r2.hash ? false : !!(n2.exact && i3 || !n2.exact && t2);
  }
  function p2({ route: e3, isActive: t2, isExactActive: r3 } = {}) {
    let i3 = f2({ route: e3, isActive: t2, isExactActive: r3 });
    return n2.raw ? [n2.class, i3 ? n2.activeClass : n2.inactiveClass] : o2.value({ class: n2.class, active: i3, disabled: n2.disabled });
  }
  return (r3, i3) => !c2.value && s2.value ? (C(), O(d(de), h({ key: 0 }, d(a2), { to: s2.value, custom: `` }), { default: E(({ href: i4, navigate: a3, route: o3, isActive: s3, isExactActive: l3 }) => [e2.custom ? (C(), O(d(gt), { key: 0 }, { default: E(() => [M(r3.$slots, `default`, t(ae({ ...r3.$attrs, ...e2.exact && l3 ? { "aria-current": n2.ariaCurrentValue } : {}, as: e2.as, type: e2.type, disabled: e2.disabled, href: i4, navigate: a3, rel: u2.value, target: e2.target, isExternal: c2.value, active: f2({ route: o3, isActive: s3, isExactActive: l3 }) })))]), _: 2 }, 1024)) : (C(), O(_a, h({ key: 1 }, { ...r3.$attrs, ...e2.exact && l3 ? { "aria-current": n2.ariaCurrentValue } : {}, as: e2.as, type: e2.type, disabled: e2.disabled, href: i4, navigate: a3, rel: u2.value, target: e2.target, isExternal: c2.value }, { class: p2({ route: o3, isActive: s3, isExactActive: l3 }) }), { default: E(() => [M(r3.$slots, `default`, { active: f2({ route: o3, isActive: s3, isExactActive: l3 }) })]), _: 2 }, 1040, [`class`]))]), _: 3 }, 16, [`to`])) : e2.custom ? (C(), O(d(gt), { key: 1 }, { default: E(() => [M(r3.$slots, `default`, t(ae({ ...r3.$attrs, as: e2.as, type: e2.type, disabled: e2.disabled, href: s2.value, rel: u2.value, target: e2.target, active: e2.active ?? false, isExternal: c2.value })))]), _: 3 })) : (C(), O(_a, h({ key: 2 }, { ...r3.$attrs, as: e2.as, type: e2.type, disabled: e2.disabled, href: s2.value, rel: u2.value, target: e2.target, isExternal: c2.value }, { class: p2() }), { default: E(() => [M(r3.$slots, `default`, { active: e2.active ?? false })]), _: 3 }, 16, [`class`]));
} }), ba = { slots: { base: [`rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75`, `transition-colors`], label: `truncate`, leadingIcon: `shrink-0`, leadingAvatar: `shrink-0`, leadingAvatarSize: ``, trailingIcon: `shrink-0` }, variants: { fieldGroup: { horizontal: `not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]`, vertical: `not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]` }, color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, variant: { solid: ``, outline: ``, soft: ``, subtle: ``, ghost: ``, link: `` }, size: { xs: { base: `px-2 py-1 text-xs gap-1`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4` }, sm: { base: `px-2.5 py-1.5 text-xs gap-1.5`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4` }, md: { base: `px-2.5 py-1.5 text-sm gap-1.5`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5` }, lg: { base: `px-3 py-2 text-sm gap-2`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5` }, xl: { base: `px-3 py-2 text-base gap-2`, leadingIcon: `size-6`, leadingAvatarSize: `xs`, trailingIcon: `size-6` } }, block: { true: { base: `w-full justify-center`, trailingIcon: `ms-auto` } }, square: { true: `` }, leading: { true: `` }, trailing: { true: `` }, loading: { true: `` }, active: { true: { base: `` }, false: { base: `` } } }, compoundVariants: [{ color: `primary`, variant: `solid`, class: `text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary` }, { color: `secondary`, variant: `solid`, class: `text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary` }, { color: `success`, variant: `solid`, class: `text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success` }, { color: `info`, variant: `solid`, class: `text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info` }, { color: `warning`, variant: `solid`, class: `text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning` }, { color: `error`, variant: `solid`, class: `text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error` }, { color: `primary`, variant: `outline`, class: `ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary` }, { color: `secondary`, variant: `outline`, class: `ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary` }, { color: `success`, variant: `outline`, class: `ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success` }, { color: `info`, variant: `outline`, class: `ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info` }, { color: `warning`, variant: `outline`, class: `ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning` }, { color: `error`, variant: `outline`, class: `ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error` }, { color: `primary`, variant: `soft`, class: `text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10` }, { color: `secondary`, variant: `soft`, class: `text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10` }, { color: `success`, variant: `soft`, class: `text-success bg-success/10 hover:bg-success/15 active:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10` }, { color: `info`, variant: `soft`, class: `text-info bg-info/10 hover:bg-info/15 active:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10` }, { color: `warning`, variant: `soft`, class: `text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10` }, { color: `error`, variant: `soft`, class: `text-error bg-error/10 hover:bg-error/15 active:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10` }, { color: `primary`, variant: `subtle`, class: `text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary` }, { color: `secondary`, variant: `subtle`, class: `text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary` }, { color: `success`, variant: `subtle`, class: `text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success` }, { color: `info`, variant: `subtle`, class: `text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info` }, { color: `warning`, variant: `subtle`, class: `text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning` }, { color: `error`, variant: `subtle`, class: `text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error` }, { color: `primary`, variant: `ghost`, class: `text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `secondary`, variant: `ghost`, class: `text-secondary hover:bg-secondary/10 active:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `success`, variant: `ghost`, class: `text-success hover:bg-success/10 active:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `info`, variant: `ghost`, class: `text-info hover:bg-info/10 active:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `warning`, variant: `ghost`, class: `text-warning hover:bg-warning/10 active:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `error`, variant: `ghost`, class: `text-error hover:bg-error/10 active:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `primary`, variant: `link`, class: `text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary` }, { color: `secondary`, variant: `link`, class: `text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary` }, { color: `success`, variant: `link`, class: `text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success` }, { color: `info`, variant: `link`, class: `text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info` }, { color: `warning`, variant: `link`, class: `text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning` }, { color: `error`, variant: `link`, class: `text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error` }, { color: `neutral`, variant: `solid`, class: `text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted` }, { color: `neutral`, variant: `outline`, class: `ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted` }, { color: `neutral`, variant: `soft`, class: `text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated` }, { color: `neutral`, variant: `subtle`, class: `ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted` }, { color: `neutral`, variant: `ghost`, class: `text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent` }, { color: `neutral`, variant: `link`, class: `text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted` }, { size: `xs`, square: true, class: `p-1` }, { size: `sm`, square: true, class: `p-1.5` }, { size: `md`, square: true, class: `p-1.5` }, { size: `lg`, square: true, class: `p-2` }, { size: `xl`, square: true, class: `p-2` }, { loading: true, leading: true, class: { leadingIcon: `animate-spin` } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: `animate-spin` } }], defaultVariants: { color: `primary`, variant: `solid`, size: `md` } }, xa = { __name: `Button`, props: { label: { type: String, required: false }, color: { type: null, required: false }, activeColor: { type: null, required: false }, variant: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, active: { type: Boolean, required: false }, exact: { type: Boolean, required: false }, exactQuery: { type: [Boolean, String], required: false }, exactHash: { type: Boolean, required: false }, inactiveClass: { type: String, required: false }, locale: { type: [Boolean, String], required: false }, to: { type: null, required: false }, href: { type: null, required: false }, external: { type: Boolean, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, noRel: { type: Boolean, required: false }, prefetchedClass: { type: String, required: false }, prefetch: { type: Boolean, required: false }, prefetchOn: { type: [String, Object], required: false }, noPrefetch: { type: Boolean, required: false }, trailingSlash: { type: String, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, ariaCurrentValue: { type: String, required: false }, viewTransition: { type: Boolean, required: false }, replace: { type: Boolean, required: false } }, setup(e2) {
  let t2 = e2, n2 = u(), i2 = R(), a2 = xt(`button`, t2), { orientation: o2, size: s2 } = ra(t2), l2 = ht(ha(t2)), m2 = k(false), g2 = c(da, void 0);
  async function v2(e3) {
    m2.value = true;
    let n3 = Array.isArray(t2.onClick) ? t2.onClick : [t2.onClick];
    try {
      await Promise.all(n3.map((t3) => t3?.(e3)));
    } finally {
      m2.value = false;
    }
  }
  let y2 = _(() => t2.loading || t2.loadingAuto && (m2.value || g2?.value && t2.type === `submit`)), { isLeading: b2, isTrailing: x2, leadingIconName: S2, trailingIconName: w2 } = ta(_(() => ({ ...t2, loading: y2.value }))), T2 = _(() => $({ extend: $(ba), ...z({ variants: { active: { true: { base: Xe(i2.ui?.button?.variants?.active?.true?.base, t2.activeClass) }, false: { base: Xe(i2.ui?.button?.variants?.active?.false?.base, t2.inactiveClass) } } } }, i2.ui?.button || {}) })({ color: t2.color, variant: t2.variant, size: s2.value, loading: y2.value, block: t2.block, square: t2.square || !n2.default && !t2.label, leading: b2.value, trailing: x2.value, fieldGroup: o2.value }));
  return (n3, i3) => (C(), O(ya, h({ type: e2.type, disabled: e2.disabled || y2.value }, d(We)(d(l2), [`type`, `disabled`, `onClick`]), { custom: `` }), { default: E(({ active: i4, ...o3 }) => [r(_a, h(o3, { "data-slot": `base`, class: T2.value.base({ class: [d(a2)?.base, t2.class], active: i4, ...i4 && e2.activeVariant ? { variant: e2.activeVariant } : {}, ...i4 && e2.activeColor ? { color: e2.activeColor } : {} }), onClick: v2 }), { default: E(() => [M(n3.$slots, `leading`, { ui: T2.value }, () => [d(b2) && d(S2) ? (C(), O(Ji, { key: 0, name: d(S2), "data-slot": `leadingIcon`, class: f(T2.value.leadingIcon({ class: d(a2)?.leadingIcon, active: i4 })) }, null, 8, [`name`, `class`])) : e2.avatar ? (C(), O(ea, h({ key: 1, size: d(a2)?.leadingAvatarSize || T2.value.leadingAvatarSize() }, e2.avatar, { "data-slot": `leadingAvatar`, class: T2.value.leadingAvatar({ class: d(a2)?.leadingAvatar, active: i4 }) }), null, 16, [`size`, `class`])) : ie(``, true)]), M(n3.$slots, `default`, { ui: T2.value }, () => [e2.label !== void 0 && e2.label !== null ? (C(), p(`span`, { key: 0, "data-slot": `label`, class: f(T2.value.label({ class: d(a2)?.label, active: i4 })) }, D(e2.label), 3)) : ie(``, true)]), M(n3.$slots, `trailing`, { ui: T2.value }, () => [d(x2) && d(w2) ? (C(), O(Ji, { key: 0, name: d(w2), "data-slot": `trailingIcon`, class: f(T2.value.trailingIcon({ class: d(a2)?.trailingIcon, active: i4 })) }, null, 8, [`name`, `class`])) : ie(``, true)])]), _: 2 }, 1040, [`class`])]), _: 3 }, 16, [`type`, `disabled`]));
} };
export {
  ut as A,
  Ge as B,
  gt as C,
  ft as D,
  pt as E,
  Ke as F,
  De as G,
  Qe as H,
  B as I,
  R as J,
  Ee as K,
  Je as L,
  ct as M,
  rt as N,
  at as O,
  it as P,
  Ze as R,
  vt as S,
  mt as T,
  Pe as U,
  We as V,
  z as W,
  _e as Y,
  ea as _,
  oa as a,
  $ as b,
  ua as c,
  sa as d,
  la as f,
  ta as g,
  ra as h,
  ha as i,
  dt as j,
  ot as k,
  da as l,
  ia as m,
  ya as n,
  fa as o,
  pa as p,
  xe as q,
  _a as r,
  ca as s,
  xa as t,
  aa as u,
  Qi as v,
  ht as w,
  xt as x,
  Ji as y,
  Ye as z
};
