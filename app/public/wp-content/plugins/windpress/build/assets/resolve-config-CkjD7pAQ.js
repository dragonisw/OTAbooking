import { o as e, t } from "./chunk-DcEfI0Mx.js";
import { t as n } from "./package-BsrS9kUU.js";
import { n as r, t as i } from "./lib-BpYAc4ol.js";
import { n as a, t as o } from "./dist-UMash2f5.js";
import { t as s } from "./path-browserify-4cnqpSC3.js";
import { c, n as l, r as u, s as d, t as f } from "./cssesc-DEUDTBaR.js";
import { t as p } from "./dlv.umd-BoFV71gt.js";
var m = t(((e2) => {
  e2.endianness = function() {
    return `LE`;
  }, e2.hostname = function() {
    return typeof location < `u` ? location.hostname : ``;
  }, e2.loadavg = function() {
    return [];
  }, e2.uptime = function() {
    return 0;
  }, e2.freemem = function() {
    return Number.MAX_VALUE;
  }, e2.totalmem = function() {
    return Number.MAX_VALUE;
  }, e2.cpus = function() {
    return [];
  }, e2.type = function() {
    return `Browser`;
  }, e2.release = function() {
    return typeof navigator < `u` ? navigator.appVersion : ``;
  }, e2.networkInterfaces = e2.getNetworkInterfaces = function() {
    return {};
  }, e2.arch = function() {
    return `javascript`;
  }, e2.platform = function() {
    return `browser`;
  }, e2.tmpdir = e2.tmpDir = function() {
    return `/tmp`;
  }, e2.EOL = `
`, e2.homedir = function() {
    return `/`;
  };
}));
o();
var h = e(d()), g = /* @__PURE__ */ new Set();
function _(e2, t2, n2) {
  a !== void 0 && {}.JEST_WORKER_ID || n2 && g.has(n2) || (n2 && g.add(n2), console.warn(``), t2.forEach((t3) => console.warn(e2, `-`, t3)));
}
function v(e2) {
  return h.default.dim(e2);
}
var y = { info(e2, t2) {
  _(h.default.bold(h.default.cyan(`info`)), ...Array.isArray(e2) ? [e2] : [t2, e2]);
}, warn(e2, t2) {
  _(h.default.bold(h.default.yellow(`warn`)), ...Array.isArray(e2) ? [e2] : [t2, e2]);
}, risk(e2, t2) {
  _(h.default.bold(h.default.magenta(`risk`)), ...Array.isArray(e2) ? [e2] : [t2, e2]);
} };
o();
var b = a === void 0 ? { NODE_ENV: `production`, DEBUG: false } : { NODE_ENV: `production`, DEBUG: w({}.DEBUG) }, x = /* @__PURE__ */ new Map(), S = new String(`*`), C = /* @__PURE__ */ Symbol(`__NONE__`);
function w(e2) {
  if (e2 === void 0) return false;
  if (e2 === `true` || e2 === `1`) return true;
  if (e2 === `false` || e2 === `0`) return false;
  if (e2 === `*`) return true;
  let t2 = e2.split(`,`).map((e3) => e3.split(`:`)[0]);
  return t2.includes(`-tailwindcss`) ? false : !!t2.includes(`tailwindcss`);
}
var T = t(((e2, t2) => {
  e2.__esModule = true, e2.default = i2;
  function n2(e3) {
    for (var t3 = e3.toLowerCase(), n3 = ``, r3 = false, i3 = 0; i3 < 6 && t3[i3] !== void 0; i3++) {
      var a2 = t3.charCodeAt(i3), o2 = a2 >= 97 && a2 <= 102 || a2 >= 48 && a2 <= 57;
      if (r3 = a2 === 32, !o2) break;
      n3 += t3[i3];
    }
    if (n3.length !== 0) {
      var s2 = parseInt(n3, 16);
      return s2 >= 55296 && s2 <= 57343 || s2 === 0 || s2 > 1114111 ? [`\uFFFD`, n3.length + +!!r3] : [String.fromCodePoint(s2), n3.length + +!!r3];
    }
  }
  var r2 = /\\/;
  function i2(e3) {
    if (!r2.test(e3)) return e3;
    for (var t3 = ``, i3 = 0; i3 < e3.length; i3++) {
      if (e3[i3] === `\\`) {
        var a2 = n2(e3.slice(i3 + 1, i3 + 7));
        if (a2 !== void 0) {
          t3 += a2[0], i3 += a2[1];
          continue;
        }
        if (e3[i3 + 1] === `\\`) {
          t3 += `\\`, i3++;
          continue;
        }
        e3.length === i3 + 1 && (t3 += e3[i3]);
        continue;
      }
      t3 += e3[i3];
    }
    return t3;
  }
  t2.exports = e2.default;
})), E = t(((e2, t2) => {
  e2.__esModule = true, e2.default = n2;
  function n2(e3) {
    for (var t3 = [...arguments].slice(1); t3.length > 0; ) {
      var n3 = t3.shift();
      if (!e3[n3]) return;
      e3 = e3[n3];
    }
    return e3;
  }
  t2.exports = e2.default;
})), D = t(((e2, t2) => {
  e2.__esModule = true, e2.default = n2;
  function n2(e3) {
    for (var t3 = [...arguments].slice(1); t3.length > 0; ) {
      var n3 = t3.shift();
      e3[n3] || (e3[n3] = {}), e3 = e3[n3];
    }
  }
  t2.exports = e2.default;
})), O = t(((e2, t2) => {
  e2.__esModule = true, e2.default = n2;
  function n2(e3) {
    for (var t3 = ``, n3 = e3.indexOf(`/*`), r2 = 0; n3 >= 0; ) {
      t3 += e3.slice(r2, n3);
      var i2 = e3.indexOf(`*/`, n3 + 2);
      if (i2 < 0) return t3;
      r2 = i2 + 2, n3 = e3.indexOf(`/*`, r2);
    }
    return t3 += e3.slice(r2), t3;
  }
  t2.exports = e2.default;
})), k = t(((e2) => {
  e2.__esModule = true, e2.unesc = e2.stripComments = e2.getProp = e2.ensureObject = void 0, e2.unesc = t2(T()).default, e2.getProp = t2(E()).default, e2.ensureObject = t2(D()).default, e2.stripComments = t2(O()).default;
  function t2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
})), A = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = k();
  function r2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function i2(e3, t3, n3) {
    return t3 && r2(e3.prototype, t3), n3 && r2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  var a2 = function e3(t3, n3) {
    if (typeof t3 != `object` || !t3) return t3;
    var r3 = new t3.constructor();
    for (var i3 in t3) if (t3.hasOwnProperty(i3)) {
      var a3 = t3[i3];
      i3 === `parent` && typeof a3 == `object` ? n3 && (r3[i3] = n3) : a3 instanceof Array ? r3[i3] = a3.map(function(t4) {
        return e3(t4, r3);
      }) : r3[i3] = e3(a3, r3);
    }
    return r3;
  };
  e2.default = (function() {
    function e3(e4) {
      e4 === void 0 && (e4 = {}), Object.assign(this, e4), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || ``, this.spaces.after = this.spaces.after || ``;
    }
    var t3 = e3.prototype;
    return t3.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t3.replaceWith = function() {
      if (this.parent) {
        for (var e4 in arguments) this.parent.insertBefore(this, arguments[e4]);
        this.remove();
      }
      return this;
    }, t3.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, t3.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, t3.clone = function(e4) {
      e4 === void 0 && (e4 = {});
      var t4 = a2(this);
      for (var n3 in e4) t4[n3] = e4[n3];
      return t4;
    }, t3.appendToPropertyAndEscape = function(e4, t4, n3) {
      this.raws || (this.raws = {});
      var r3 = this[e4], i3 = this.raws[e4];
      this[e4] = r3 + t4, i3 || n3 !== t4 ? this.raws[e4] = (i3 || r3) + n3 : delete this.raws[e4];
    }, t3.setPropertyAndEscape = function(e4, t4, n3) {
      this.raws || (this.raws = {}), this[e4] = t4, this.raws[e4] = n3;
    }, t3.setPropertyWithoutEscape = function(e4, t4) {
      this[e4] = t4, this.raws && delete this.raws[e4];
    }, t3.isAtPosition = function(e4, t4) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > e4 || this.source.end.line < e4 || this.source.start.line === e4 && this.source.start.column > t4 || this.source.end.line === e4 && this.source.end.column < t4);
    }, t3.stringifyProperty = function(e4) {
      return this.raws && this.raws[e4] || this[e4];
    }, t3.valueToString = function() {
      return String(this.stringifyProperty(`value`));
    }, t3.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join(``);
    }, i2(e3, [{ key: `rawSpaceBefore`, get: function() {
      var e4 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return e4 === void 0 && (e4 = this.spaces && this.spaces.before), e4 || ``;
    }, set: function(e4) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.before = e4;
    } }, { key: `rawSpaceAfter`, get: function() {
      var e4 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return e4 === void 0 && (e4 = this.spaces.after), e4 || ``;
    }, set: function(e4) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.after = e4;
    } }]), e3;
  })(), t2.exports = e2.default;
})), j = t(((e2) => {
  e2.__esModule = true, e2.UNIVERSAL = e2.TAG = e2.STRING = e2.SELECTOR = e2.ROOT = e2.PSEUDO = e2.NESTING = e2.ID = e2.COMMENT = e2.COMBINATOR = e2.CLASS = e2.ATTRIBUTE = void 0, e2.TAG = `tag`, e2.STRING = `string`, e2.SELECTOR = `selector`, e2.ROOT = `root`, e2.PSEUDO = `pseudo`, e2.NESTING = `nesting`, e2.ID = `id`, e2.COMMENT = `comment`, e2.COMBINATOR = `combinator`, e2.CLASS = `class`, e2.ATTRIBUTE = `attribute`, e2.UNIVERSAL = `universal`;
})), M = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = o2(A()), r2 = a2(j());
  function i2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function a2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = i2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e3) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e3, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e3[o3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  function o2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function s2(e3, t3) {
    var n3 = typeof Symbol < `u` && e3[Symbol.iterator] || e3[`@@iterator`];
    if (n3) return (n3 = n3.call(e3)).next.bind(n3);
    if (Array.isArray(e3) || (n3 = c2(e3)) || t3 && e3 && typeof e3.length == `number`) {
      n3 && (e3 = n3);
      var r3 = 0;
      return function() {
        return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c2(e3, t3) {
    if (e3) {
      if (typeof e3 == `string`) return l2(e3, t3);
      var n3 = Object.prototype.toString.call(e3).slice(8, -1);
      if (n3 === `Object` && e3.constructor && (n3 = e3.constructor.name), n3 === `Map` || n3 === `Set`) return Array.from(e3);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return l2(e3, t3);
    }
  }
  function l2(e3, t3) {
    (t3 == null || t3 > e3.length) && (t3 = e3.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++) r3[n3] = e3[n3];
    return r3;
  }
  function u2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function d2(e3, t3, n3) {
    return t3 && u2(e3.prototype, t3), n3 && u2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function f2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, p2(e3, t3);
  }
  function p2(e3, t3) {
    return p2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, p2(e3, t3);
  }
  e2.default = (function(e3) {
    f2(t3, e3);
    function t3(t4) {
      var n4 = e3.call(this, t4) || this;
      return n4.nodes || (n4.nodes = []), n4;
    }
    var n3 = t3.prototype;
    return n3.append = function(e4) {
      return e4.parent = this, this.nodes.push(e4), this;
    }, n3.prepend = function(e4) {
      return e4.parent = this, this.nodes.unshift(e4), this;
    }, n3.at = function(e4) {
      return this.nodes[e4];
    }, n3.index = function(e4) {
      return typeof e4 == `number` ? e4 : this.nodes.indexOf(e4);
    }, n3.removeChild = function(e4) {
      e4 = this.index(e4), this.at(e4).parent = void 0, this.nodes.splice(e4, 1);
      var t4;
      for (var n4 in this.indexes) t4 = this.indexes[n4], t4 >= e4 && (this.indexes[n4] = t4 - 1);
      return this;
    }, n3.removeAll = function() {
      for (var e4 = s2(this.nodes), t4; !(t4 = e4()).done; ) {
        var n4 = t4.value;
        n4.parent = void 0;
      }
      return this.nodes = [], this;
    }, n3.empty = function() {
      return this.removeAll();
    }, n3.insertAfter = function(e4, t4) {
      t4.parent = this;
      var n4 = this.index(e4);
      this.nodes.splice(n4 + 1, 0, t4), t4.parent = this;
      var r3;
      for (var i3 in this.indexes) r3 = this.indexes[i3], n4 <= r3 && (this.indexes[i3] = r3 + 1);
      return this;
    }, n3.insertBefore = function(e4, t4) {
      t4.parent = this;
      var n4 = this.index(e4);
      this.nodes.splice(n4, 0, t4), t4.parent = this;
      var r3;
      for (var i3 in this.indexes) r3 = this.indexes[i3], r3 <= n4 && (this.indexes[i3] = r3 + 1);
      return this;
    }, n3._findChildAtPosition = function(e4, t4) {
      var n4 = void 0;
      return this.each(function(r3) {
        if (r3.atPosition) {
          var i3 = r3.atPosition(e4, t4);
          if (i3) return n4 = i3, false;
        } else if (r3.isAtPosition(e4, t4)) return n4 = r3, false;
      }), n4;
    }, n3.atPosition = function(e4, t4) {
      if (this.isAtPosition(e4, t4)) return this._findChildAtPosition(e4, t4) || this;
    }, n3._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, n3.each = function(e4) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var t4 = this.lastEach;
      if (this.indexes[t4] = 0, this.length) {
        for (var n4, r3; this.indexes[t4] < this.length && (n4 = this.indexes[t4], r3 = e4(this.at(n4), n4), r3 !== false); ) this.indexes[t4] += 1;
        if (delete this.indexes[t4], r3 === false) return false;
      }
    }, n3.walk = function(e4) {
      return this.each(function(t4, n4) {
        var r3 = e4(t4, n4);
        if (r3 !== false && t4.length && (r3 = t4.walk(e4)), r3 === false) return false;
      });
    }, n3.walkAttributes = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ATTRIBUTE) return e4.call(t4, n4);
      });
    }, n3.walkClasses = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.CLASS) return e4.call(t4, n4);
      });
    }, n3.walkCombinators = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMBINATOR) return e4.call(t4, n4);
      });
    }, n3.walkComments = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMMENT) return e4.call(t4, n4);
      });
    }, n3.walkIds = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ID) return e4.call(t4, n4);
      });
    }, n3.walkNesting = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.NESTING) return e4.call(t4, n4);
      });
    }, n3.walkPseudos = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.PSEUDO) return e4.call(t4, n4);
      });
    }, n3.walkTags = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.TAG) return e4.call(t4, n4);
      });
    }, n3.walkUniversals = function(e4) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.UNIVERSAL) return e4.call(t4, n4);
      });
    }, n3.split = function(e4) {
      var t4 = this, n4 = [];
      return this.reduce(function(r3, i3, a3) {
        var o3 = e4.call(t4, i3);
        return n4.push(i3), o3 ? (r3.push(n4), n4 = []) : a3 === t4.length - 1 && r3.push(n4), r3;
      }, []);
    }, n3.map = function(e4) {
      return this.nodes.map(e4);
    }, n3.reduce = function(e4, t4) {
      return this.nodes.reduce(e4, t4);
    }, n3.every = function(e4) {
      return this.nodes.every(e4);
    }, n3.some = function(e4) {
      return this.nodes.some(e4);
    }, n3.filter = function(e4) {
      return this.nodes.filter(e4);
    }, n3.sort = function(e4) {
      return this.nodes.sort(e4);
    }, n3.toString = function() {
      return this.map(String).join(``);
    }, d2(t3, [{ key: `first`, get: function() {
      return this.at(0);
    } }, { key: `last`, get: function() {
      return this.at(this.length - 1);
    } }, { key: `length`, get: function() {
      return this.nodes.length;
    } }]), t3;
  })(n2.default), t2.exports = e2.default;
})), ee = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(M()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function o2(e3, t3, n3) {
    return t3 && a2(e3.prototype, t3), n3 && a2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function s2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, c2(e3, t3);
  }
  function c2(e3, t3) {
    return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, c2(e3, t3);
  }
  e2.default = (function(e3) {
    s2(t3, e3);
    function t3(t4) {
      var n4 = e3.call(this, t4) || this;
      return n4.type = r2.ROOT, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e4 = this.reduce(function(e5, t4) {
        return e5.push(String(t4)), e5;
      }, []).join(`,`);
      return this.trailingComma ? e4 + `,` : e4;
    }, n3.error = function(e4, t4) {
      return this._error ? this._error(e4, t4) : Error(e4);
    }, o2(t3, [{ key: `errorGenerator`, set: function(e4) {
      this._error = e4;
    } }]), t3;
  })(n2.default), t2.exports = e2.default;
})), te = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(M()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.SELECTOR, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), ne = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = o2(f()), r2 = k(), i2 = o2(A()), a2 = j();
  function o2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function s2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function c2(e3, t3, n3) {
    return t3 && s2(e3.prototype, t3), n3 && s2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function l2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, u2(e3, t3);
  }
  function u2(e3, t3) {
    return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, u2(e3, t3);
  }
  e2.default = (function(e3) {
    l2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = a2.CLASS, n3._constructed = true, n3;
    }
    var i3 = t3.prototype;
    return i3.valueToString = function() {
      return `.` + e3.prototype.valueToString.call(this);
    }, c2(t3, [{ key: `value`, get: function() {
      return this._value;
    }, set: function(e4) {
      if (this._constructed) {
        var t4 = (0, n2.default)(e4, { isIdentifier: true });
        t4 === e4 ? this.raws && delete this.raws.value : ((0, r2.ensureObject)(this, `raws`), this.raws.value = t4);
      }
      this._value = e4;
    } }]), t3;
  })(i2.default), t2.exports = e2.default;
})), re = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(A()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.COMMENT, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), ie = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(A()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n4 = e3.call(this, t4) || this;
      return n4.type = r2.ID, n4;
    }
    var n3 = t3.prototype;
    return n3.valueToString = function() {
      return `#` + e3.prototype.valueToString.call(this);
    }, t3;
  })(n2.default), t2.exports = e2.default;
})), N = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = a2(f()), r2 = k(), i2 = a2(A());
  function a2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function o2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function s2(e3, t3, n3) {
    return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function c2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, l2(e3, t3);
  }
  function l2(e3, t3) {
    return l2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, l2(e3, t3);
  }
  e2.default = (function(e3) {
    c2(t3, e3);
    function t3() {
      return e3.apply(this, arguments) || this;
    }
    var i3 = t3.prototype;
    return i3.qualifiedName = function(e4) {
      return this.namespace ? this.namespaceString + `|` + e4 : e4;
    }, i3.valueToString = function() {
      return this.qualifiedName(e3.prototype.valueToString.call(this));
    }, s2(t3, [{ key: `namespace`, get: function() {
      return this._namespace;
    }, set: function(e4) {
      if (e4 === true || e4 === `*` || e4 === `&`) {
        this._namespace = e4, this.raws && delete this.raws.namespace;
        return;
      }
      var t4 = (0, n2.default)(e4, { isIdentifier: true });
      this._namespace = e4, t4 === e4 ? this.raws && delete this.raws.namespace : ((0, r2.ensureObject)(this, `raws`), this.raws.namespace = t4);
    } }, { key: `ns`, get: function() {
      return this._namespace;
    }, set: function(e4) {
      this.namespace = e4;
    } }, { key: `namespaceString`, get: function() {
      if (this.namespace) {
        var e4 = this.stringifyProperty(`namespace`);
        return e4 === true ? `` : e4;
      } else return ``;
    } }]), t3;
  })(i2.default), t2.exports = e2.default;
})), ae = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(N()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.TAG, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), oe = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(A()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.STRING, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), se = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(M()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n4 = e3.call(this, t4) || this;
      return n4.type = r2.PSEUDO, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e4 = this.length ? `(` + this.map(String).join(`,`) + `)` : ``;
      return [this.rawSpaceBefore, this.stringifyProperty(`value`), e4, this.rawSpaceAfter].join(``);
    }, t3;
  })(n2.default), t2.exports = e2.default;
})), ce = t(((e2) => {
  e2.__esModule = true, e2.default = void 0, e2.unescapeValue = v2;
  var t2 = s2(f()), n2 = s2(T()), i2 = s2(N()), a2 = j(), o2;
  function s2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function c2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r2 = t3[n3];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
    }
  }
  function l2(e3, t3, n3) {
    return t3 && c2(e3.prototype, t3), n3 && c2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  function u2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, d2(e3, t3);
  }
  function d2(e3, t3) {
    return d2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, d2(e3, t3);
  }
  var p2 = r(), m2 = /^('|")([^]*)\1$/, h2 = p2(function() {
  }, `Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.`), g2 = p2(function() {
  }, `Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.`), _2 = p2(function() {
  }, `Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.`);
  function v2(e3) {
    var t3 = false, r2 = null, i3 = e3, a3 = i3.match(m2);
    return a3 && (r2 = a3[1], i3 = a3[2]), i3 = (0, n2.default)(i3), i3 !== e3 && (t3 = true), { deprecatedUsage: t3, unescaped: i3, quoteMark: r2 };
  }
  function y2(e3) {
    if (e3.quoteMark !== void 0 || e3.value === void 0) return e3;
    _2();
    var t3 = v2(e3.value), n3 = t3.quoteMark, r2 = t3.unescaped;
    return e3.raws || (e3.raws = {}), e3.raws.value === void 0 && (e3.raws.value = e3.value), e3.value = r2, e3.quoteMark = n3, e3;
  }
  var b2 = (function(e3) {
    u2(n3, e3);
    function n3(t3) {
      var n4;
      return t3 === void 0 && (t3 = {}), n4 = e3.call(this, y2(t3)) || this, n4.type = a2.ATTRIBUTE, n4.raws = n4.raws || {}, Object.defineProperty(n4.raws, `unquoted`, { get: p2(function() {
        return n4.value;
      }, `attr.raws.unquoted is deprecated. Call attr.value instead.`), set: p2(function() {
        return n4.value;
      }, `Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.`) }), n4._constructed = true, n4;
    }
    var r2 = n3.prototype;
    return r2.getQuotedValue = function(e4) {
      e4 === void 0 && (e4 = {});
      var n4 = x2[this._determineQuoteMark(e4)];
      return (0, t2.default)(this._value, n4);
    }, r2._determineQuoteMark = function(e4) {
      return e4.smart ? this.smartQuoteMark(e4) : this.preferredQuoteMark(e4);
    }, r2.setValue = function(e4, t3) {
      t3 === void 0 && (t3 = {}), this._value = e4, this._quoteMark = this._determineQuoteMark(t3), this._syncRawValue();
    }, r2.smartQuoteMark = function(e4) {
      var r3 = this.value, i3 = r3.replace(/[^']/g, ``).length, a3 = r3.replace(/[^"]/g, ``).length;
      if (i3 + a3 === 0) {
        var o3 = (0, t2.default)(r3, { isIdentifier: true });
        if (o3 === r3) return n3.NO_QUOTE;
        var s3 = this.preferredQuoteMark(e4);
        if (s3 === n3.NO_QUOTE) {
          var c3 = this.quoteMark || e4.quoteMark || n3.DOUBLE_QUOTE, l3 = x2[c3];
          if ((0, t2.default)(r3, l3).length < o3.length) return c3;
        }
        return s3;
      } else if (a3 === i3) return this.preferredQuoteMark(e4);
      else if (a3 < i3) return n3.DOUBLE_QUOTE;
      else return n3.SINGLE_QUOTE;
    }, r2.preferredQuoteMark = function(e4) {
      var t3 = e4.preferCurrentQuoteMark ? this.quoteMark : e4.quoteMark;
      return t3 === void 0 && (t3 = e4.preferCurrentQuoteMark ? e4.quoteMark : this.quoteMark), t3 === void 0 && (t3 = n3.DOUBLE_QUOTE), t3;
    }, r2._syncRawValue = function() {
      var e4 = (0, t2.default)(this._value, x2[this.quoteMark]);
      e4 === this._value ? this.raws && delete this.raws.value : this.raws.value = e4;
    }, r2._handleEscapes = function(e4, n4) {
      if (this._constructed) {
        var r3 = (0, t2.default)(n4, { isIdentifier: true });
        r3 === n4 ? delete this.raws[e4] : this.raws[e4] = r3;
      }
    }, r2._spacesFor = function(e4) {
      var t3 = { before: ``, after: `` }, n4 = this.spaces[e4] || {}, r3 = this.raws.spaces && this.raws.spaces[e4] || {};
      return Object.assign(t3, n4, r3);
    }, r2._stringFor = function(e4, t3, n4) {
      t3 === void 0 && (t3 = e4), n4 === void 0 && (n4 = S2);
      var r3 = this._spacesFor(t3);
      return n4(this.stringifyProperty(e4), r3);
    }, r2.offsetOf = function(e4) {
      var t3 = 1, n4 = this._spacesFor(`attribute`);
      if (t3 += n4.before.length, e4 === `namespace` || e4 === `ns`) return this.namespace ? t3 : -1;
      if (e4 === `attributeNS` || (t3 += this.namespaceString.length, this.namespace && (t3 += 1), e4 === `attribute`)) return t3;
      t3 += this.stringifyProperty(`attribute`).length, t3 += n4.after.length;
      var r3 = this._spacesFor(`operator`);
      t3 += r3.before.length;
      var i3 = this.stringifyProperty(`operator`);
      if (e4 === `operator`) return i3 ? t3 : -1;
      t3 += i3.length, t3 += r3.after.length;
      var a3 = this._spacesFor(`value`);
      t3 += a3.before.length;
      var o3 = this.stringifyProperty(`value`);
      if (e4 === `value`) return o3 ? t3 : -1;
      t3 += o3.length, t3 += a3.after.length;
      var s3 = this._spacesFor(`insensitive`);
      return t3 += s3.before.length, e4 === `insensitive` && this.insensitive ? t3 : -1;
    }, r2.toString = function() {
      var e4 = this, t3 = [this.rawSpaceBefore, `[`];
      return t3.push(this._stringFor(`qualifiedAttribute`, `attribute`)), this.operator && (this.value || this.value === ``) && (t3.push(this._stringFor(`operator`)), t3.push(this._stringFor(`value`)), t3.push(this._stringFor(`insensitiveFlag`, `insensitive`, function(t4, n4) {
        return t4.length > 0 && !e4.quoted && n4.before.length === 0 && !(e4.spaces.value && e4.spaces.value.after) && (n4.before = ` `), S2(t4, n4);
      }))), t3.push(`]`), t3.push(this.rawSpaceAfter), t3.join(``);
    }, l2(n3, [{ key: `quoted`, get: function() {
      var e4 = this.quoteMark;
      return e4 === `'` || e4 === `"`;
    }, set: function(e4) {
      g2();
    } }, { key: `quoteMark`, get: function() {
      return this._quoteMark;
    }, set: function(e4) {
      if (!this._constructed) {
        this._quoteMark = e4;
        return;
      }
      this._quoteMark !== e4 && (this._quoteMark = e4, this._syncRawValue());
    } }, { key: `qualifiedAttribute`, get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: `insensitiveFlag`, get: function() {
      return this.insensitive ? `i` : ``;
    } }, { key: `value`, get: function() {
      return this._value;
    }, set: function(e4) {
      if (this._constructed) {
        var t3 = v2(e4), n4 = t3.deprecatedUsage, r3 = t3.unescaped, i3 = t3.quoteMark;
        if (n4 && h2(), r3 === this._value && i3 === this._quoteMark) return;
        this._value = r3, this._quoteMark = i3, this._syncRawValue();
      } else this._value = e4;
    } }, { key: `insensitive`, get: function() {
      return this._insensitive;
    }, set: function(e4) {
      e4 || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === `I` || this.raws.insensitiveFlag === `i`) && (this.raws.insensitiveFlag = void 0)), this._insensitive = e4;
    } }, { key: `attribute`, get: function() {
      return this._attribute;
    }, set: function(e4) {
      this._handleEscapes(`attribute`, e4), this._attribute = e4;
    } }]), n3;
  })(i2.default);
  e2.default = b2, b2.NO_QUOTE = null, b2.SINGLE_QUOTE = `'`, b2.DOUBLE_QUOTE = `"`;
  var x2 = (o2 = { "'": { quotes: `single`, wrap: true }, '"': { quotes: `double`, wrap: true } }, o2[null] = { isIdentifier: true }, o2);
  function S2(e3, t3) {
    return `` + t3.before + e3 + t3.after;
  }
})), le = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(N()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.UNIVERSAL, n3.value = `*`, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), ue = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(A()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.COMBINATOR, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), de = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = i2(A()), r2 = j();
  function i2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function a2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, o2(e3, t3);
  }
  function o2(e3, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, o2(e3, t3);
  }
  e2.default = (function(e3) {
    a2(t3, e3);
    function t3(t4) {
      var n3 = e3.call(this, t4) || this;
      return n3.type = r2.NESTING, n3.value = `&`, n3;
    }
    return t3;
  })(n2.default), t2.exports = e2.default;
})), fe = t(((e2, t2) => {
  e2.__esModule = true, e2.default = n2;
  function n2(e3) {
    return e3.sort(function(e4, t3) {
      return e4 - t3;
    });
  }
  t2.exports = e2.default;
})), pe = t(((e2) => {
  e2.__esModule = true, e2.word = e2.tilde = e2.tab = e2.str = e2.space = e2.slash = e2.singleQuote = e2.semicolon = e2.plus = e2.pipe = e2.openSquare = e2.openParenthesis = e2.newline = e2.greaterThan = e2.feed = e2.equals = e2.doubleQuote = e2.dollar = e2.cr = e2.comment = e2.comma = e2.combinator = e2.colon = e2.closeSquare = e2.closeParenthesis = e2.caret = e2.bang = e2.backslash = e2.at = e2.asterisk = e2.ampersand = void 0, e2.ampersand = 38, e2.asterisk = 42, e2.at = 64, e2.comma = 44, e2.colon = 58, e2.semicolon = 59, e2.openParenthesis = 40, e2.closeParenthesis = 41, e2.openSquare = 91, e2.closeSquare = 93, e2.dollar = 36, e2.tilde = 126, e2.caret = 94, e2.plus = 43, e2.equals = 61, e2.pipe = 124, e2.greaterThan = 62, e2.space = 32;
  var t2 = 39;
  e2.singleQuote = t2, e2.doubleQuote = 34, e2.slash = 47, e2.bang = 33, e2.backslash = 92, e2.cr = 13, e2.feed = 12, e2.newline = 10, e2.tab = 9, e2.str = t2, e2.comment = -1, e2.word = -2, e2.combinator = -3;
})), me = t(((e2) => {
  e2.__esModule = true, e2.FIELDS = void 0, e2.default = p2;
  var t2 = a2(pe()), n2, r2;
  function i2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function a2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = i2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e3) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e3, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e3[o3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  for (var o2 = (n2 = {}, n2[t2.tab] = true, n2[t2.newline] = true, n2[t2.cr] = true, n2[t2.feed] = true, n2), s2 = (r2 = {}, r2[t2.space] = true, r2[t2.tab] = true, r2[t2.newline] = true, r2[t2.cr] = true, r2[t2.feed] = true, r2[t2.ampersand] = true, r2[t2.asterisk] = true, r2[t2.bang] = true, r2[t2.comma] = true, r2[t2.colon] = true, r2[t2.semicolon] = true, r2[t2.openParenthesis] = true, r2[t2.closeParenthesis] = true, r2[t2.openSquare] = true, r2[t2.closeSquare] = true, r2[t2.singleQuote] = true, r2[t2.doubleQuote] = true, r2[t2.plus] = true, r2[t2.pipe] = true, r2[t2.tilde] = true, r2[t2.greaterThan] = true, r2[t2.equals] = true, r2[t2.dollar] = true, r2[t2.caret] = true, r2[t2.slash] = true, r2), c2 = {}, l2 = `0123456789abcdefABCDEF`, u2 = 0; u2 < l2.length; u2++) c2[l2.charCodeAt(u2)] = true;
  function d2(e3, n3) {
    var r3 = n3, i3;
    do {
      if (i3 = e3.charCodeAt(r3), s2[i3]) return r3 - 1;
      i3 === t2.backslash ? r3 = f2(e3, r3) + 1 : r3++;
    } while (r3 < e3.length);
    return r3 - 1;
  }
  function f2(e3, n3) {
    var r3 = n3, i3 = e3.charCodeAt(r3 + 1);
    if (!o2[i3]) if (c2[i3]) {
      var a3 = 0;
      do
        r3++, a3++, i3 = e3.charCodeAt(r3 + 1);
      while (c2[i3] && a3 < 6);
      a3 < 6 && i3 === t2.space && r3++;
    } else r3++;
    return r3;
  }
  e2.FIELDS = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  function p2(e3) {
    var n3 = [], r3 = e3.css.valueOf(), i3 = r3.length, a3 = -1, o3 = 1, s3 = 0, c3 = 0, l3, u3, f3, p3, m2, h2, g2, _2, v2, y2, b2, x2, S2;
    function C2(t3, n4) {
      if (e3.safe) r3 += n4, v2 = r3.length - 1;
      else throw e3.error(`Unclosed ` + t3, o3, s3 - a3, s3);
    }
    for (; s3 < i3; ) {
      switch (l3 = r3.charCodeAt(s3), l3 === t2.newline && (a3 = s3, o3 += 1), l3) {
        case t2.space:
        case t2.tab:
        case t2.newline:
        case t2.cr:
        case t2.feed:
          v2 = s3;
          do
            v2 += 1, l3 = r3.charCodeAt(v2), l3 === t2.newline && (a3 = v2, o3 += 1);
          while (l3 === t2.space || l3 === t2.newline || l3 === t2.tab || l3 === t2.cr || l3 === t2.feed);
          S2 = t2.space, p3 = o3, f3 = v2 - a3 - 1, c3 = v2;
          break;
        case t2.plus:
        case t2.greaterThan:
        case t2.tilde:
        case t2.pipe:
          v2 = s3;
          do
            v2 += 1, l3 = r3.charCodeAt(v2);
          while (l3 === t2.plus || l3 === t2.greaterThan || l3 === t2.tilde || l3 === t2.pipe);
          S2 = t2.combinator, p3 = o3, f3 = s3 - a3, c3 = v2;
          break;
        case t2.asterisk:
        case t2.ampersand:
        case t2.bang:
        case t2.comma:
        case t2.equals:
        case t2.dollar:
        case t2.caret:
        case t2.openSquare:
        case t2.closeSquare:
        case t2.colon:
        case t2.semicolon:
        case t2.openParenthesis:
        case t2.closeParenthesis:
          v2 = s3, S2 = l3, p3 = o3, f3 = s3 - a3, c3 = v2 + 1;
          break;
        case t2.singleQuote:
        case t2.doubleQuote:
          x2 = l3 === t2.singleQuote ? `'` : `"`, v2 = s3;
          do
            for (m2 = false, v2 = r3.indexOf(x2, v2 + 1), v2 === -1 && C2(`quote`, x2), h2 = v2; r3.charCodeAt(h2 - 1) === t2.backslash; ) --h2, m2 = !m2;
          while (m2);
          S2 = t2.str, p3 = o3, f3 = s3 - a3, c3 = v2 + 1;
          break;
        default:
          l3 === t2.slash && r3.charCodeAt(s3 + 1) === t2.asterisk ? (v2 = r3.indexOf(`*/`, s3 + 2) + 1, v2 === 0 && C2(`comment`, `*/`), u3 = r3.slice(s3, v2 + 1), _2 = u3.split(`
`), g2 = _2.length - 1, g2 > 0 ? (y2 = o3 + g2, b2 = v2 - _2[g2].length) : (y2 = o3, b2 = a3), S2 = t2.comment, o3 = y2, p3 = y2, f3 = v2 - b2) : l3 === t2.slash ? (v2 = s3, S2 = l3, p3 = o3, f3 = s3 - a3, c3 = v2 + 1) : (v2 = d2(r3, s3), S2 = t2.word, p3 = o3, f3 = v2 - a3), c3 = v2 + 1;
          break;
      }
      n3.push([S2, o3, s3 - a3, p3, f3, s3, c3]), b2 && (b2 = (a3 = b2, null)), s3 = c3;
    }
    return n3;
  }
})), he = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = C2(ee()), r2 = C2(te()), i2 = C2(ne()), a2 = C2(re()), o2 = C2(ie()), s2 = C2(ae()), c2 = C2(oe()), l2 = C2(se()), u2 = S2(ce()), d2 = C2(le()), f2 = C2(ue()), p2 = C2(de()), m2 = C2(fe()), h2 = S2(me()), g2 = S2(pe()), _2 = S2(j()), v2 = k(), y2, b2;
  function x2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (x2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function S2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = x2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, i3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a3 in e3) if (a3 !== `default` && Object.prototype.hasOwnProperty.call(e3, a3)) {
      var o3 = i3 ? Object.getOwnPropertyDescriptor(e3, a3) : null;
      o3 && (o3.get || o3.set) ? Object.defineProperty(r3, a3, o3) : r3[a3] = e3[a3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  function C2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  function w2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function T2(e3, t3, n3) {
    return t3 && w2(e3.prototype, t3), n3 && w2(e3, n3), Object.defineProperty(e3, `prototype`, { writable: false }), e3;
  }
  var E2 = (y2 = {}, y2[g2.space] = true, y2[g2.cr] = true, y2[g2.feed] = true, y2[g2.newline] = true, y2[g2.tab] = true, y2), D2 = Object.assign({}, E2, (b2 = {}, b2[g2.comment] = true, b2));
  function O2(e3) {
    return { line: e3[h2.FIELDS.START_LINE], column: e3[h2.FIELDS.START_COL] };
  }
  function A2(e3) {
    return { line: e3[h2.FIELDS.END_LINE], column: e3[h2.FIELDS.END_COL] };
  }
  function M2(e3, t3, n3, r3) {
    return { start: { line: e3, column: t3 }, end: { line: n3, column: r3 } };
  }
  function N2(e3) {
    return M2(e3[h2.FIELDS.START_LINE], e3[h2.FIELDS.START_COL], e3[h2.FIELDS.END_LINE], e3[h2.FIELDS.END_COL]);
  }
  function he2(e3, t3) {
    if (e3) return M2(e3[h2.FIELDS.START_LINE], e3[h2.FIELDS.START_COL], t3[h2.FIELDS.END_LINE], t3[h2.FIELDS.END_COL]);
  }
  function P2(e3, t3) {
    var n3 = e3[t3];
    if (typeof n3 == `string`) return n3.indexOf(`\\`) !== -1 && ((0, v2.ensureObject)(e3, `raws`), e3[t3] = (0, v2.unesc)(n3), e3.raws[t3] === void 0 && (e3.raws[t3] = n3)), e3;
  }
  function ge2(e3, t3) {
    for (var n3 = -1, r3 = []; (n3 = e3.indexOf(t3, n3 + 1)) !== -1; ) r3.push(n3);
    return r3;
  }
  function _e2() {
    var e3 = Array.prototype.concat.apply([], arguments);
    return e3.filter(function(t3, n3) {
      return n3 === e3.indexOf(t3);
    });
  }
  e2.default = (function() {
    function e3(e4, t4) {
      t4 === void 0 && (t4 = {}), this.rule = e4, this.options = Object.assign({ lossy: false, safe: false }, t4), this.position = 0, this.css = typeof this.rule == `string` ? this.rule : this.rule.selector, this.tokens = (0, h2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var i3 = he2(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new n2.default({ source: i3 }), this.root.errorGenerator = this._errorGenerator();
      var a3 = new r2.default({ source: { start: { line: 1, column: 1 } }, sourceIndex: 0 });
      this.root.append(a3), this.current = a3, this.loop();
    }
    var t3 = e3.prototype;
    return t3._errorGenerator = function() {
      var e4 = this;
      return function(t4, n3) {
        return typeof e4.rule == `string` ? Error(t4) : e4.rule.error(t4, n3);
      };
    }, t3.attribute = function() {
      var e4 = [], t4 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare; ) e4.push(this.currToken), this.position++;
      if (this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare) return this.expected(`closing square bracket`, this.currToken[h2.FIELDS.START_POS]);
      var n3 = e4.length, r3 = { source: M2(t4[1], t4[2], this.currToken[3], this.currToken[4]), sourceIndex: t4[h2.FIELDS.START_POS] };
      if (n3 === 1 && !~[g2.word].indexOf(e4[0][h2.FIELDS.TYPE])) return this.expected(`attribute`, e4[0][h2.FIELDS.START_POS]);
      for (var i3 = 0, a3 = ``, o3 = ``, s3 = null, c3 = false; i3 < n3; ) {
        var l3 = e4[i3], d3 = this.content(l3), f3 = e4[i3 + 1];
        switch (l3[h2.FIELDS.TYPE]) {
          case g2.space:
            if (c3 = true, this.options.lossy) break;
            if (s3) {
              (0, v2.ensureObject)(r3, `spaces`, s3);
              var p3 = r3.spaces[s3].after || ``;
              r3.spaces[s3].after = p3 + d3;
              var m3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || null;
              m3 && (r3.raws.spaces[s3].after = m3 + d3);
            } else a3 += d3, o3 += d3;
            break;
          case g2.asterisk:
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : (!r3.namespace || s3 === `namespace` && !c3) && f3 && (a3 && (a3 = ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, ``)), o3 && (o3 = ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = a3, ``)), r3.namespace = (r3.namespace || ``) + d3, (0, v2.getProp)(r3, `raws`, `namespace`) && (r3.raws.namespace += d3), s3 = `namespace`), c3 = false;
            break;
          case g2.dollar:
            if (s3 === `value`) {
              var _3 = (0, v2.getProp)(r3, `raws`, `value`);
              r3.value += `$`, _3 && (r3.raws.value = _3 + `$`);
              break;
            }
          case g2.caret:
            f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), c3 = false;
            break;
          case g2.combinator:
            if (d3 === `~` && f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), d3 !== `|`) {
              c3 = false;
              break;
            }
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : !r3.namespace && !r3.attribute && (r3.namespace = true), c3 = false;
            break;
          case g2.word:
            if (f3 && this.content(f3) === `|` && e4[i3 + 2] && e4[i3 + 2][h2.FIELDS.TYPE] !== g2.equals && !r3.operator && !r3.namespace) r3.namespace = d3, s3 = `namespace`;
            else if (!r3.attribute || s3 === `attribute` && !c3) a3 && (a3 = ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, ``)), o3 && (o3 = ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = o3, ``)), r3.attribute = (r3.attribute || ``) + d3, (0, v2.getProp)(r3, `raws`, `attribute`) && (r3.raws.attribute += d3), s3 = `attribute`;
            else if (!r3.value && r3.value !== `` || s3 === `value` && !(c3 || r3.quoteMark)) {
              var y3 = (0, v2.unesc)(d3), b3 = (0, v2.getProp)(r3, `raws`, `value`) || ``, x3 = r3.value || ``;
              r3.value = x3 + y3, r3.quoteMark = null, (y3 !== d3 || b3) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.value = (b3 || x3) + d3), s3 = `value`;
            } else {
              var S3 = d3 === `i` || d3 === `I`;
              (r3.value || r3.value === ``) && (r3.quoteMark || c3) ? (r3.insensitive = S3, (!S3 || d3 === `I`) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.insensitiveFlag = d3), s3 = `insensitive`, a3 && (a3 = ((0, v2.ensureObject)(r3, `spaces`, `insensitive`), r3.spaces.insensitive.before = a3, ``)), o3 && (o3 = ((0, v2.ensureObject)(r3, `raws`, `spaces`, `insensitive`), r3.raws.spaces.insensitive.before = o3, ``))) : (r3.value || r3.value === ``) && (s3 = `value`, r3.value += d3, r3.raws.value && (r3.raws.value += d3));
            }
            c3 = false;
            break;
          case g2.str:
            if (!r3.attribute || !r3.operator) return this.error(`Expected an attribute followed by an operator preceding the string.`, { index: l3[h2.FIELDS.START_POS] });
            var C3 = (0, u2.unescapeValue)(d3), w3 = C3.unescaped, T3 = C3.quoteMark;
            r3.value = w3, r3.quoteMark = T3, s3 = `value`, (0, v2.ensureObject)(r3, `raws`), r3.raws.value = d3, c3 = false;
            break;
          case g2.equals:
            if (!r3.attribute) return this.expected(`attribute`, l3[h2.FIELDS.START_POS], d3);
            if (r3.value) return this.error(`Unexpected "=" found; an operator was already defined.`, { index: l3[h2.FIELDS.START_POS] });
            r3.operator = r3.operator ? r3.operator + d3 : d3, s3 = `operator`, c3 = false;
            break;
          case g2.comment:
            if (s3) if (c3 || f3 && f3[h2.FIELDS.TYPE] === g2.space || s3 === `insensitive`) {
              var E3 = (0, v2.getProp)(r3, `spaces`, s3, `after`) || ``, D3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || E3;
              (0, v2.ensureObject)(r3, `raws`, `spaces`, s3), r3.raws.spaces[s3].after = D3 + d3;
            } else {
              var O3 = r3[s3] || ``, k2 = (0, v2.getProp)(r3, `raws`, s3) || O3;
              (0, v2.ensureObject)(r3, `raws`), r3.raws[s3] = k2 + d3;
            }
            else o3 += d3;
            break;
          default:
            return this.error(`Unexpected "` + d3 + `" found.`, { index: l3[h2.FIELDS.START_POS] });
        }
        i3++;
      }
      P2(r3, `attribute`), P2(r3, `namespace`), this.newNode(new u2.default(r3)), this.position++;
    }, t3.parseWhitespaceEquivalentTokens = function(e4) {
      e4 < 0 && (e4 = this.tokens.length);
      var t4 = this.position, n3 = [], r3 = ``, i3 = void 0;
      do
        if (E2[this.currToken[h2.FIELDS.TYPE]]) this.options.lossy || (r3 += this.content());
        else if (this.currToken[h2.FIELDS.TYPE] === g2.comment) {
          var o3 = {};
          r3 && (r3 = (o3.before = r3, ``)), i3 = new a2.default({ value: this.content(), source: N2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS], spaces: o3 }), n3.push(i3);
        }
      while (++this.position < e4);
      if (r3) {
        if (i3) i3.spaces.after = r3;
        else if (!this.options.lossy) {
          var s3 = this.tokens[t4], l3 = this.tokens[this.position - 1];
          n3.push(new c2.default({ value: ``, source: M2(s3[h2.FIELDS.START_LINE], s3[h2.FIELDS.START_COL], l3[h2.FIELDS.END_LINE], l3[h2.FIELDS.END_COL]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: { before: r3, after: `` } }));
        }
      }
      return n3;
    }, t3.convertWhitespaceNodesToSpace = function(e4, t4) {
      var n3 = this;
      t4 === void 0 && (t4 = false);
      var r3 = ``, i3 = ``;
      return e4.forEach(function(e5) {
        var a3 = n3.lossySpace(e5.spaces.before, t4), o3 = n3.lossySpace(e5.rawSpaceBefore, t4);
        r3 += a3 + n3.lossySpace(e5.spaces.after, t4 && a3.length === 0), i3 += a3 + e5.value + n3.lossySpace(e5.rawSpaceAfter, t4 && o3.length === 0);
      }), i3 === r3 && (i3 = void 0), { space: r3, rawSpace: i3 };
    }, t3.isNamedCombinator = function(e4) {
      return e4 === void 0 && (e4 = this.position), this.tokens[e4 + 0] && this.tokens[e4 + 0][h2.FIELDS.TYPE] === g2.slash && this.tokens[e4 + 1] && this.tokens[e4 + 1][h2.FIELDS.TYPE] === g2.word && this.tokens[e4 + 2] && this.tokens[e4 + 2][h2.FIELDS.TYPE] === g2.slash;
    }, t3.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var e4 = this.content(this.tokens[this.position + 1]), t4 = (0, v2.unesc)(e4).toLowerCase(), n3 = {};
        t4 !== e4 && (n3.value = `/` + e4 + `/`);
        var r3 = new f2.default({ value: `/` + t4 + `/`, source: M2(this.currToken[h2.FIELDS.START_LINE], this.currToken[h2.FIELDS.START_COL], this.tokens[this.position + 2][h2.FIELDS.END_LINE], this.tokens[this.position + 2][h2.FIELDS.END_COL]), sourceIndex: this.currToken[h2.FIELDS.START_POS], raws: n3 });
        return this.position += 3, r3;
      } else this.unexpected();
    }, t3.combinator = function() {
      var e4 = this;
      if (this.content() === `|`) return this.namespace();
      var t4 = this.locateNextMeaningfulToken(this.position);
      if (t4 < 0 || this.tokens[t4][h2.FIELDS.TYPE] === g2.comma || this.tokens[t4][h2.FIELDS.TYPE] === g2.closeParenthesis) {
        var n3 = this.parseWhitespaceEquivalentTokens(t4);
        if (n3.length > 0) {
          var r3 = this.current.last;
          if (r3) {
            var i3 = this.convertWhitespaceNodesToSpace(n3), a3 = i3.space, o3 = i3.rawSpace;
            o3 !== void 0 && (r3.rawSpaceAfter += o3), r3.spaces.after += a3;
          } else n3.forEach(function(t5) {
            return e4.newNode(t5);
          });
        }
        return;
      }
      var s3 = this.currToken, c3 = void 0;
      t4 > this.position && (c3 = this.parseWhitespaceEquivalentTokens(t4));
      var l3;
      if (this.isNamedCombinator() ? l3 = this.namedCombinator() : this.currToken[h2.FIELDS.TYPE] === g2.combinator ? (l3 = new f2.default({ value: this.content(), source: N2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS] }), this.position++) : E2[this.currToken[h2.FIELDS.TYPE]] || c3 || this.unexpected(), l3) {
        if (c3) {
          var u3 = this.convertWhitespaceNodesToSpace(c3), d3 = u3.space, p3 = u3.rawSpace;
          l3.spaces.before = d3, l3.rawSpaceBefore = p3;
        }
      } else {
        var m3 = this.convertWhitespaceNodesToSpace(c3, true), _3 = m3.space, v3 = m3.rawSpace;
        v3 || (v3 = _3);
        var y3 = {}, b3 = { spaces: {} };
        _3.endsWith(` `) && v3.endsWith(` `) ? (y3.before = _3.slice(0, _3.length - 1), b3.spaces.before = v3.slice(0, v3.length - 1)) : _3.startsWith(` `) && v3.startsWith(` `) ? (y3.after = _3.slice(1), b3.spaces.after = v3.slice(1)) : b3.value = v3, l3 = new f2.default({ value: ` `, source: he2(s3, this.tokens[this.position - 1]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: y3, raws: b3 });
      }
      return this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.space && (l3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(l3);
    }, t3.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var e4 = new r2.default({ source: { start: O2(this.tokens[this.position + 1]) }, sourceIndex: this.tokens[this.position + 1][h2.FIELDS.START_POS] });
      this.current.parent.append(e4), this.current = e4, this.position++;
    }, t3.comment = function() {
      var e4 = this.currToken;
      this.newNode(new a2.default({ value: this.content(), source: N2(e4), sourceIndex: e4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.error = function(e4, t4) {
      throw this.root.error(e4, t4);
    }, t3.missingBackslash = function() {
      return this.error(`Expected a backslash preceding the semicolon.`, { index: this.currToken[h2.FIELDS.START_POS] });
    }, t3.missingParenthesis = function() {
      return this.expected(`opening parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.missingSquareBracket = function() {
      return this.expected(`opening square bracket`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpected = function() {
      return this.error(`Unexpected '` + this.content() + `'. Escaping special characters with \\ may help.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpectedPipe = function() {
      return this.error(`Unexpected '|'.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.namespace = function() {
      var e4 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[h2.FIELDS.TYPE] === g2.word) return this.position++, this.word(e4);
      if (this.nextToken[h2.FIELDS.TYPE] === g2.asterisk) return this.position++, this.universal(e4);
      this.unexpectedPipe();
    }, t3.nesting = function() {
      if (this.nextToken && this.content(this.nextToken) === `|`) {
        this.position++;
        return;
      }
      var e4 = this.currToken;
      this.newNode(new p2.default({ value: this.content(), source: N2(e4), sourceIndex: e4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.parentheses = function() {
      var e4 = this.current.last, t4 = 1;
      if (this.position++, e4 && e4.type === _2.PSEUDO) {
        var n3 = new r2.default({ source: { start: O2(this.tokens[this.position]) }, sourceIndex: this.tokens[this.position][h2.FIELDS.START_POS] }), i3 = this.current;
        for (e4.append(n3), this.current = n3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, t4 ? this.parse() : (this.current.source.end = A2(this.currToken), this.current.parent.source.end = A2(this.currToken), this.position++);
        this.current = i3;
      } else {
        for (var a3 = this.currToken, o3 = `(`, s3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, s3 = this.currToken, o3 += this.parseParenthesisToken(this.currToken), this.position++;
        e4 ? e4.appendToPropertyAndEscape(`value`, o3, o3) : this.newNode(new c2.default({ value: o3, source: M2(a3[h2.FIELDS.START_LINE], a3[h2.FIELDS.START_COL], s3[h2.FIELDS.END_LINE], s3[h2.FIELDS.END_COL]), sourceIndex: a3[h2.FIELDS.START_POS] }));
      }
      if (t4) return this.expected(`closing parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.pseudo = function() {
      for (var e4 = this, t4 = ``, n3 = this.currToken; this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.colon; ) t4 += this.content(), this.position++;
      if (!this.currToken) return this.expected([`pseudo-class`, `pseudo-element`], this.position - 1);
      if (this.currToken[h2.FIELDS.TYPE] === g2.word) this.splitWord(false, function(r3, i3) {
        t4 += r3, e4.newNode(new l2.default({ value: t4, source: he2(n3, e4.currToken), sourceIndex: n3[h2.FIELDS.START_POS] })), i3 > 1 && e4.nextToken && e4.nextToken[h2.FIELDS.TYPE] === g2.openParenthesis && e4.error(`Misplaced parenthesis.`, { index: e4.nextToken[h2.FIELDS.START_POS] });
      });
      else return this.expected([`pseudo-class`, `pseudo-element`], this.currToken[h2.FIELDS.START_POS]);
    }, t3.space = function() {
      var e4 = this.content();
      this.position === 0 || this.prevToken[h2.FIELDS.TYPE] === g2.comma || this.prevToken[h2.FIELDS.TYPE] === g2.openParenthesis || this.current.nodes.every(function(e5) {
        return e5.type === `comment`;
      }) ? (this.spaces = this.optionalSpace(e4), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h2.FIELDS.TYPE] === g2.comma || this.nextToken[h2.FIELDS.TYPE] === g2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(e4), this.position++) : this.combinator();
    }, t3.string = function() {
      var e4 = this.currToken;
      this.newNode(new c2.default({ value: this.content(), source: N2(e4), sourceIndex: e4[h2.FIELDS.START_POS] })), this.position++;
    }, t3.universal = function(e4) {
      var t4 = this.nextToken;
      if (t4 && this.content(t4) === `|`) return this.position++, this.namespace();
      var n3 = this.currToken;
      this.newNode(new d2.default({ value: this.content(), source: N2(n3), sourceIndex: n3[h2.FIELDS.START_POS] }), e4), this.position++;
    }, t3.splitWord = function(e4, t4) {
      for (var n3 = this, r3 = this.nextToken, a3 = this.content(); r3 && ~[g2.dollar, g2.caret, g2.equals, g2.word].indexOf(r3[h2.FIELDS.TYPE]); ) {
        this.position++;
        var c3 = this.content();
        if (a3 += c3, c3.lastIndexOf(`\\`) === c3.length - 1) {
          var l3 = this.nextToken;
          l3 && l3[h2.FIELDS.TYPE] === g2.space && (a3 += this.requiredSpace(this.content(l3)), this.position++);
        }
        r3 = this.nextToken;
      }
      var u3 = ge2(a3, `.`).filter(function(e5) {
        var t5 = a3[e5 - 1] === `\\`, n4 = /^\d+\.\d+%$/.test(a3);
        return !t5 && !n4;
      }), d3 = ge2(a3, `#`).filter(function(e5) {
        return a3[e5 - 1] !== `\\`;
      }), f3 = ge2(a3, `#{`);
      f3.length && (d3 = d3.filter(function(e5) {
        return !~f3.indexOf(e5);
      }));
      var p3 = (0, m2.default)(_e2([0].concat(u3, d3)));
      p3.forEach(function(r4, c4) {
        var l4 = p3[c4 + 1] || a3.length, f4 = a3.slice(r4, l4);
        if (c4 === 0 && t4) return t4.call(n3, f4, p3.length);
        var m3, g3 = n3.currToken, _3 = g3[h2.FIELDS.START_POS] + p3[c4], v3 = M2(g3[1], g3[2] + r4, g3[3], g3[2] + (l4 - 1));
        if (~u3.indexOf(r4)) {
          var y3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new i2.default(P2(y3, `value`));
        } else if (~d3.indexOf(r4)) {
          var b3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new o2.default(P2(b3, `value`));
        } else {
          var x3 = { value: f4, source: v3, sourceIndex: _3 };
          P2(x3, `value`), m3 = new s2.default(x3);
        }
        n3.newNode(m3, e4), e4 = null;
      }), this.position++;
    }, t3.word = function(e4) {
      var t4 = this.nextToken;
      return t4 && this.content(t4) === `|` ? (this.position++, this.namespace()) : this.splitWord(e4);
    }, t3.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, t3.parse = function(e4) {
      switch (this.currToken[h2.FIELDS.TYPE]) {
        case g2.space:
          this.space();
          break;
        case g2.comment:
          this.comment();
          break;
        case g2.openParenthesis:
          this.parentheses();
          break;
        case g2.closeParenthesis:
          e4 && this.missingParenthesis();
          break;
        case g2.openSquare:
          this.attribute();
          break;
        case g2.dollar:
        case g2.caret:
        case g2.equals:
        case g2.word:
          this.word();
          break;
        case g2.colon:
          this.pseudo();
          break;
        case g2.comma:
          this.comma();
          break;
        case g2.asterisk:
          this.universal();
          break;
        case g2.ampersand:
          this.nesting();
          break;
        case g2.slash:
        case g2.combinator:
          this.combinator();
          break;
        case g2.str:
          this.string();
          break;
        case g2.closeSquare:
          this.missingSquareBracket();
        case g2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, t3.expected = function(e4, t4, n3) {
      if (Array.isArray(e4)) {
        var r3 = e4.pop();
        e4 = e4.join(`, `) + ` or ` + r3;
      }
      var i3 = /^[aeiou]/.test(e4[0]) ? `an` : `a`;
      return n3 ? this.error(`Expected ` + i3 + ` ` + e4 + `, found "` + n3 + `" instead.`, { index: t4 }) : this.error(`Expected ` + i3 + ` ` + e4 + `.`, { index: t4 });
    }, t3.requiredSpace = function(e4) {
      return this.options.lossy ? ` ` : e4;
    }, t3.optionalSpace = function(e4) {
      return this.options.lossy ? `` : e4;
    }, t3.lossySpace = function(e4, t4) {
      return this.options.lossy ? t4 ? ` ` : `` : e4;
    }, t3.parseParenthesisToken = function(e4) {
      var t4 = this.content(e4);
      return e4[h2.FIELDS.TYPE] === g2.space ? this.requiredSpace(t4) : t4;
    }, t3.newNode = function(e4, t4) {
      return t4 && (/^ +$/.test(t4) && (this.options.lossy || (this.spaces = (this.spaces || ``) + t4), t4 = true), e4.namespace = t4, P2(e4, `namespace`)), this.spaces && (this.spaces = (e4.spaces.before = this.spaces, ``)), this.current.append(e4);
    }, t3.content = function(e4) {
      return e4 === void 0 && (e4 = this.currToken), this.css.slice(e4[h2.FIELDS.START_POS], e4[h2.FIELDS.END_POS]);
    }, t3.locateNextMeaningfulToken = function(e4) {
      e4 === void 0 && (e4 = this.position + 1);
      for (var t4 = e4; t4 < this.tokens.length; ) if (D2[this.tokens[t4][h2.FIELDS.TYPE]]) {
        t4++;
        continue;
      } else return t4;
      return -1;
    }, T2(e3, [{ key: `currToken`, get: function() {
      return this.tokens[this.position];
    } }, { key: `nextToken`, get: function() {
      return this.tokens[this.position + 1];
    } }, { key: `prevToken`, get: function() {
      return this.tokens[this.position - 1];
    } }]), e3;
  })(), t2.exports = e2.default;
})), P = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = r2(he());
  function r2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  e2.default = (function() {
    function e3(e4, t4) {
      this.func = e4 || function() {
      }, this.funcRes = null, this.options = t4;
    }
    var t3 = e3.prototype;
    return t3._shouldUpdateSelector = function(e4, t4) {
      return t4 === void 0 && (t4 = {}), Object.assign({}, this.options, t4).updateSelector === false ? false : typeof e4 != `string`;
    }, t3._isLossy = function(e4) {
      return e4 === void 0 && (e4 = {}), Object.assign({}, this.options, e4).lossless === false;
    }, t3._root = function(e4, t4) {
      return t4 === void 0 && (t4 = {}), new n2.default(e4, this._parseOptions(t4)).root;
    }, t3._parseOptions = function(e4) {
      return { lossy: this._isLossy(e4) };
    }, t3._run = function(e4, t4) {
      var n3 = this;
      return t4 === void 0 && (t4 = {}), new Promise(function(r3, i2) {
        try {
          var a2 = n3._root(e4, t4);
          Promise.resolve(n3.func(a2)).then(function(r4) {
            var i3 = void 0;
            return n3._shouldUpdateSelector(e4, t4) && (i3 = a2.toString(), e4.selector = i3), { transform: r4, root: a2, string: i3 };
          }).then(r3, i2);
        } catch (e5) {
          i2(e5);
          return;
        }
      });
    }, t3._runSync = function(e4, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = this._root(e4, t4), r3 = this.func(n3);
      if (r3 && typeof r3.then == `function`) throw Error(`Selector processor returned a promise to a synchronous call.`);
      var i2 = void 0;
      return t4.updateSelector && typeof e4 != `string` && (i2 = n3.toString(), e4.selector = i2), { transform: r3, root: n3, string: i2 };
    }, t3.ast = function(e4, t4) {
      return this._run(e4, t4).then(function(e5) {
        return e5.root;
      });
    }, t3.astSync = function(e4, t4) {
      return this._runSync(e4, t4).root;
    }, t3.transform = function(e4, t4) {
      return this._run(e4, t4).then(function(e5) {
        return e5.transform;
      });
    }, t3.transformSync = function(e4, t4) {
      return this._runSync(e4, t4).transform;
    }, t3.process = function(e4, t4) {
      return this._run(e4, t4).then(function(e5) {
        return e5.string || e5.root.toString();
      });
    }, t3.processSync = function(e4, t4) {
      var n3 = this._runSync(e4, t4);
      return n3.string || n3.root.toString();
    }, e3;
  })(), t2.exports = e2.default;
})), ge = t(((e2) => {
  e2.__esModule = true, e2.universal = e2.tag = e2.string = e2.selector = e2.root = e2.pseudo = e2.nesting = e2.id = e2.comment = e2.combinator = e2.className = e2.attribute = void 0;
  var t2 = p2(ce()), n2 = p2(ne()), r2 = p2(ue()), i2 = p2(re()), a2 = p2(ie()), o2 = p2(de()), s2 = p2(se()), c2 = p2(ee()), l2 = p2(te()), u2 = p2(oe()), d2 = p2(ae()), f2 = p2(le());
  function p2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  e2.attribute = function(e3) {
    return new t2.default(e3);
  }, e2.className = function(e3) {
    return new n2.default(e3);
  }, e2.combinator = function(e3) {
    return new r2.default(e3);
  }, e2.comment = function(e3) {
    return new i2.default(e3);
  }, e2.id = function(e3) {
    return new a2.default(e3);
  }, e2.nesting = function(e3) {
    return new o2.default(e3);
  }, e2.pseudo = function(e3) {
    return new s2.default(e3);
  }, e2.root = function(e3) {
    return new c2.default(e3);
  }, e2.selector = function(e3) {
    return new l2.default(e3);
  }, e2.string = function(e3) {
    return new u2.default(e3);
  }, e2.tag = function(e3) {
    return new d2.default(e3);
  }, e2.universal = function(e3) {
    return new f2.default(e3);
  };
})), _e = t(((e2) => {
  e2.__esModule = true, e2.isComment = e2.isCombinator = e2.isClassName = e2.isAttribute = void 0, e2.isContainer = d2, e2.isIdentifier = void 0, e2.isNamespace = f2, e2.isNesting = void 0, e2.isNode = i2, e2.isPseudo = void 0, e2.isPseudoClass = u2, e2.isPseudoElement = l2, e2.isUniversal = e2.isTag = e2.isString = e2.isSelector = e2.isRoot = void 0;
  var t2 = j(), n2, r2 = (n2 = {}, n2[t2.ATTRIBUTE] = true, n2[t2.CLASS] = true, n2[t2.COMBINATOR] = true, n2[t2.COMMENT] = true, n2[t2.ID] = true, n2[t2.NESTING] = true, n2[t2.PSEUDO] = true, n2[t2.ROOT] = true, n2[t2.SELECTOR] = true, n2[t2.STRING] = true, n2[t2.TAG] = true, n2[t2.UNIVERSAL] = true, n2);
  function i2(e3) {
    return typeof e3 == `object` && r2[e3.type];
  }
  function a2(e3, t3) {
    return i2(t3) && t3.type === e3;
  }
  var o2 = a2.bind(null, t2.ATTRIBUTE);
  e2.isAttribute = o2, e2.isClassName = a2.bind(null, t2.CLASS), e2.isCombinator = a2.bind(null, t2.COMBINATOR), e2.isComment = a2.bind(null, t2.COMMENT), e2.isIdentifier = a2.bind(null, t2.ID), e2.isNesting = a2.bind(null, t2.NESTING);
  var s2 = a2.bind(null, t2.PSEUDO);
  e2.isPseudo = s2, e2.isRoot = a2.bind(null, t2.ROOT), e2.isSelector = a2.bind(null, t2.SELECTOR), e2.isString = a2.bind(null, t2.STRING);
  var c2 = a2.bind(null, t2.TAG);
  e2.isTag = c2, e2.isUniversal = a2.bind(null, t2.UNIVERSAL);
  function l2(e3) {
    return s2(e3) && e3.value && (e3.value.startsWith(`::`) || e3.value.toLowerCase() === `:before` || e3.value.toLowerCase() === `:after` || e3.value.toLowerCase() === `:first-letter` || e3.value.toLowerCase() === `:first-line`);
  }
  function u2(e3) {
    return s2(e3) && !l2(e3);
  }
  function d2(e3) {
    return !!(i2(e3) && e3.walk);
  }
  function f2(e3) {
    return o2(e3) || c2(e3);
  }
})), ve = t(((e2) => {
  e2.__esModule = true;
  var t2 = j();
  Object.keys(t2).forEach(function(n3) {
    n3 === `default` || n3 === `__esModule` || n3 in e2 && e2[n3] === t2[n3] || (e2[n3] = t2[n3]);
  });
  var n2 = ge();
  Object.keys(n2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === n2[t3] || (e2[t3] = n2[t3]);
  });
  var r2 = _e();
  Object.keys(r2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e2 && e2[t3] === r2[t3] || (e2[t3] = r2[t3]);
  });
})), ye = t(((e2, t2) => {
  e2.__esModule = true, e2.default = void 0;
  var n2 = o2(P()), r2 = a2(ve());
  function i2(e3) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e4) {
      return e4 ? n3 : t3;
    })(e3);
  }
  function a2(e3, t3) {
    if (!t3 && e3 && e3.__esModule) return e3;
    if (e3 === null || typeof e3 != `object` && typeof e3 != `function`) return { default: e3 };
    var n3 = i2(t3);
    if (n3 && n3.has(e3)) return n3.get(e3);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e3) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e3, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e3[o3];
    }
    return r3.default = e3, n3 && n3.set(e3, r3), r3;
  }
  function o2(e3) {
    return e3 && e3.__esModule ? e3 : { default: e3 };
  }
  var s2 = function(e3) {
    return new n2.default(e3);
  };
  Object.assign(s2, r2), delete s2.__esModule, e2.default = s2, t2.exports = e2.default;
})), be = t(((e2, t2) => {
  var { AtRule: n2, Rule: r2 } = u(), i2 = ye();
  function a2(e3, t3) {
    let n3;
    try {
      i2((e4) => {
        n3 = e4;
      }).processSync(e3);
    } catch (n4) {
      throw e3.includes(`:`) ? t3 ? t3.error(`Missed semicolon`) : n4 : t3 ? t3.error(n4.message) : n4;
    }
    return n3.at(0);
  }
  function o2(e3, t3) {
    let n3 = false;
    return e3.each((e4) => {
      if (e4.type === `nesting`) {
        let r3 = t3.clone({});
        e4.value === `&` ? e4.replaceWith(r3) : e4.replaceWith(a2(e4.value.replace(`&`, r3.toString()))), n3 = true;
      } else `nodes` in e4 && e4.nodes && o2(e4, t3) && (n3 = true);
    }), n3;
  }
  function s2(e3, t3) {
    let n3 = [];
    return e3.selectors.forEach((r3) => {
      let s3 = a2(r3, e3);
      t3.selectors.forEach((e4) => {
        if (!e4) return;
        let r4 = a2(e4, t3);
        o2(r4, s3) || (r4.prepend(i2.combinator({ value: ` ` })), r4.prepend(s3.clone({}))), n3.push(r4.toString());
      });
    }), n3;
  }
  function c2(e3, t3) {
    let n3 = e3.prev();
    for (t3.after(e3); n3 && n3.type === `comment`; ) {
      let e4 = n3.prev();
      t3.after(n3), n3 = e4;
    }
    return e3;
  }
  function l2(e3) {
    return function t3(n3, r3, i3, a3 = i3) {
      let o3 = [];
      if (r3.each((c3) => {
        c3.type === `rule` && i3 ? a3 && (c3.selectors = s2(n3, c3)) : c3.type === `atrule` && c3.nodes ? e3[c3.name] ? t3(n3, c3, a3) : r3[g2] !== false && o3.push(c3) : o3.push(c3);
      }), i3 && o3.length) {
        let e4 = n3.clone({ nodes: [] });
        for (let t4 of o3) e4.append(t4);
        r3.prepend(e4);
      }
    };
  }
  function d2(e3, t3, n3) {
    let i3 = new r2({ nodes: [], selector: e3 });
    return i3.append(t3), n3.after(i3), i3;
  }
  function f2(e3, t3) {
    let n3 = {};
    for (let t4 of e3) n3[t4] = true;
    if (t3) for (let e4 of t3) n3[e4.replace(/^@/, ``)] = true;
    return n3;
  }
  function p2(e3) {
    e3 = e3.trim();
    let t3 = e3.match(/^\((.*)\)$/);
    if (!t3) return { selector: e3, type: `basic` };
    let n3 = t3[1].match(/^(with(?:out)?):(.+)$/);
    if (n3) {
      let e4 = n3[1] === `with`, t4 = Object.fromEntries(n3[2].trim().split(/\s+/).map((e5) => [e5, true]));
      if (e4 && t4.all) return { type: `noop` };
      let r3 = (e5) => !!t4[e5];
      return t4.all ? r3 = () => true : e4 && (r3 = (e5) => e5 === `all` ? false : !t4[e5]), { escapes: r3, type: `withrules` };
    }
    return { type: `unknown` };
  }
  function m2(e3) {
    let t3 = [], r3 = e3.parent;
    for (; r3 && r3 instanceof n2; ) t3.push(r3), r3 = r3.parent;
    return t3;
  }
  function h2(e3) {
    let t3 = e3[_2];
    if (!t3) e3.after(e3.nodes);
    else {
      let n3 = e3.nodes, r3, i3 = -1, a3, o3, s3, c3 = m2(e3);
      if (c3.forEach((e4, n4) => {
        if (t3(e4.name)) r3 = e4, i3 = n4, o3 = s3;
        else {
          let t4 = s3;
          s3 = e4.clone({ nodes: [] }), t4 && s3.append(t4), a3 || (a3 = s3);
        }
      }), r3 ? o3 ? (a3.append(n3), r3.after(o3)) : r3.after(n3) : e3.after(n3), e3.next() && r3) {
        let t4;
        c3.slice(0, i3 + 1).forEach((n4, r4, i4) => {
          let a4 = t4;
          t4 = n4.clone({ nodes: [] }), a4 && t4.append(a4);
          let o4 = [], s4 = (i4[r4 - 1] || e3).next();
          for (; s4; ) o4.push(s4), s4 = s4.next();
          t4.append(o4);
        }), t4 && (o3 || n3[n3.length - 1]).after(t4);
      }
    }
    e3.remove();
  }
  var g2 = /* @__PURE__ */ Symbol(`rootRuleMergeSel`), _2 = /* @__PURE__ */ Symbol(`rootRuleEscapes`);
  function v2(e3) {
    let { params: t3 } = e3, { escapes: n3, selector: i3, type: a3 } = p2(t3);
    if (a3 === `unknown`) throw e3.error(`Unknown @${e3.name} parameter ${JSON.stringify(t3)}`);
    if (a3 === `basic` && i3) {
      let t4 = new r2({ nodes: e3.nodes, selector: i3 });
      e3.removeAll(), e3.append(t4);
    }
    e3[_2] = n3, e3[g2] = n3 ? !n3(`all`) : a3 === `noop`;
  }
  var y2 = /* @__PURE__ */ Symbol(`hasRootRule`);
  t2.exports = (e3 = {}) => {
    let t3 = f2([`media`, `supports`, `layer`, `container`, `starting-style`], e3.bubble), n3 = l2(t3), r3 = f2([`document`, `font-face`, `keyframes`, `-webkit-keyframes`, `-moz-keyframes`], e3.unwrap), i3 = (e3.rootRuleName || `at-root`).replace(/^@/, ``), a3 = e3.preserveEmpty;
    return { Once(e4) {
      e4.walkAtRules(i3, (t4) => {
        v2(t4), e4[y2] = true;
      });
    }, postcssPlugin: `postcss-nested`, RootExit(e4) {
      e4[y2] && (e4.walkAtRules(i3, h2), e4[y2] = false);
    }, Rule(e4) {
      let o3 = false, l3 = e4, u2 = false, f3 = [];
      e4.each((a4) => {
        a4.type === `rule` ? (f3.length && (l3 = d2(e4.selector, f3, l3), f3 = []), u2 = true, o3 = true, a4.selectors = s2(e4, a4), l3 = c2(a4, l3)) : a4.type === `atrule` ? (f3.length && (l3 = d2(e4.selector, f3, l3), f3 = []), a4.name === i3 ? (o3 = true, n3(e4, a4, true, a4[g2]), l3 = c2(a4, l3)) : t3[a4.name] ? (u2 = true, o3 = true, n3(e4, a4, true), l3 = c2(a4, l3)) : r3[a4.name] ? (u2 = true, o3 = true, n3(e4, a4, false), l3 = c2(a4, l3)) : u2 && f3.push(a4)) : a4.type === `decl` && u2 && f3.push(a4);
      }), f3.length && (l3 = d2(e4.selector, f3, l3)), o3 && a3 !== true && (e4.raws.semicolon = true, e4.nodes.length === 0 && e4.remove());
    } };
  }, t2.exports.postcss = true;
})), xe = t(((e2, t2) => {
  var n2 = u(), r2 = /\s*!important\s*$/i, i2 = { "box-flex": true, "box-flex-group": true, "column-count": true, flex: true, "flex-grow": true, "flex-positive": true, "flex-shrink": true, "flex-negative": true, "font-weight": true, "line-clamp": true, "line-height": true, opacity: true, order: true, orphans: true, "tab-size": true, widows: true, "z-index": true, zoom: true, "fill-opacity": true, "stroke-dashoffset": true, "stroke-opacity": true, "stroke-width": true };
  function a2(e3) {
    return e3.replace(/([A-Z])/g, `-$1`).replace(/^ms-/, `-ms-`).toLowerCase();
  }
  function o2(e3, t3, o3) {
    o3 === false || o3 === null || (t3.startsWith(`--`) || (t3 = a2(t3)), typeof o3 == `number` && (o3 === 0 || i2[t3] ? o3 = o3.toString() : o3 += `px`), t3 === `css-float` && (t3 = `float`), r2.test(o3) ? (o3 = o3.replace(r2, ``), e3.push(n2.decl({ prop: t3, value: o3, important: true }))) : e3.push(n2.decl({ prop: t3, value: o3 })));
  }
  function s2(e3, t3, r3) {
    let i3 = n2.atRule({ name: t3[1], params: t3[3] || `` });
    typeof r3 == `object` && (i3.nodes = [], c2(r3, i3)), e3.push(i3);
  }
  function c2(e3, t3) {
    let r3, i3, a3;
    for (r3 in e3) if (a3 = e3[r3], a3 != null) if (r3[0] === `@`) {
      let e4 = r3.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
      if (Array.isArray(a3)) for (let n3 of a3) s2(t3, e4, n3);
      else s2(t3, e4, a3);
    } else if (Array.isArray(a3)) for (let e4 of a3) o2(t3, r3, e4);
    else typeof a3 == `object` ? (i3 = n2.rule({ selector: r3 }), c2(a3, i3), t3.push(i3)) : o2(t3, r3, a3);
  }
  t2.exports = function(e3) {
    let t3 = n2.root();
    return c2(e3, t3), t3;
  };
})), Se = t(((e2, t2) => {
  var n2 = /-(\w|$)/g, r2 = function(e3, t3) {
    return t3.toUpperCase();
  };
  t2.exports = function(e3) {
    return e3 = e3.toLowerCase(), e3 === `float` ? `cssFloat` : e3.charCodeAt(0) === 45 && e3.charCodeAt(1) === 109 && e3.charCodeAt(2) === 115 && e3.charCodeAt(3) === 45 ? e3.substr(1).replace(n2, r2) : e3.replace(n2, r2);
  };
})), Ce = t(((e2, t2) => {
  var n2 = Se(), r2 = { boxFlex: true, boxFlexGroup: true, columnCount: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, strokeDashoffset: true, strokeOpacity: true, strokeWidth: true };
  function i2(e3) {
    return e3.nodes === void 0 ? true : a2(e3);
  }
  function a2(e3, t3 = {}) {
    let o2, s2 = {}, { stringifyImportant: c2 } = t3;
    return e3.each((e4) => {
      if (e4.type === `atrule`) o2 = `@` + e4.name, e4.params && (o2 += ` ` + e4.params), s2[o2] === void 0 ? s2[o2] = i2(e4) : Array.isArray(s2[o2]) ? s2[o2].push(i2(e4)) : s2[o2] = [s2[o2], i2(e4)];
      else if (e4.type === `rule`) {
        let t4 = a2(e4);
        if (s2[e4.selector]) for (let n3 in t4) {
          let r3 = s2[e4.selector];
          c2 && r3[n3] && r3[n3].endsWith(`!important`) ? t4[n3].endsWith(`!important`) && (r3[n3] = t4[n3]) : r3[n3] = t4[n3];
        }
        else s2[e4.selector] = t4;
      } else if (e4.type === `decl`) {
        o2 = e4.prop[0] === `-` && e4.prop[1] === `-` || e4.parent && e4.parent.selector === `:export` ? e4.prop : n2(e4.prop);
        let t4 = e4.value;
        !isNaN(e4.value) && r2[o2] && (t4 = parseFloat(e4.value)), e4.important && (t4 += ` !important`), s2[o2] === void 0 ? s2[o2] = t4 : Array.isArray(s2[o2]) ? s2[o2].push(t4) : s2[o2] = [s2[o2], t4];
      }
    }), s2;
  }
  t2.exports = a2;
})), we = t(((e2, t2) => {
  var n2 = Ce();
  t2.exports = function(e3) {
    return console && console.warn && e3.warnings().forEach((e4) => {
      let t3 = e4.plugin || `PostCSS`;
      console.warn(t3 + `: ` + e4.text);
    }), n2(e3.root);
  };
})), Te = t(((e2, t2) => {
  var n2 = u(), r2 = xe(), i2 = we();
  t2.exports = function(e3) {
    let t3 = n2(e3);
    return async (e4) => i2(await t3.process(e4, { parser: r2, from: void 0 }));
  };
})), Ee = t(((e2, t2) => {
  var n2 = u(), r2 = xe(), i2 = we();
  t2.exports = function(e3) {
    let t3 = n2(e3);
    return (e4) => i2(t3.process(e4, { parser: r2, from: void 0 }));
  };
})), De = t(((e2, t2) => {
  var n2 = Te();
  t2.exports = { objectify: Ce(), parse: xe(), async: n2, sync: Ee() };
})), F = e(ye()), Oe = e(be()), ke = e(De(), 1), Ae = ke.default;
ke.default.objectify, ke.default.parse, ke.default.async, ke.default.sync;
function je(e2) {
  return Array.isArray(e2) ? e2.flatMap((e3) => l([(0, Oe.default)({ bubble: [`screen`] })]).process(e3, { parser: Ae }).root.nodes) : je([e2]);
}
function I(e2) {
  if (Object.prototype.toString.call(e2) !== `[object Object]`) return false;
  let t2 = Object.getPrototypeOf(e2);
  return t2 === null || Object.getPrototypeOf(t2) === null;
}
function Me(e2, t2, n2 = false) {
  if (e2 === ``) return t2;
  let r2 = typeof t2 == `string` ? (0, F.default)().astSync(t2) : t2;
  return r2.walkClasses((t3) => {
    let r3 = t3.value;
    t3.value = n2 && r3.startsWith(`-`) ? `-${e2}${r3.slice(1)}` : `${e2}${r3}`;
  }), typeof t2 == `string` ? r2.toString() : r2;
}
function Ne(e2) {
  return e2.replace(/\\,/g, `\\2c `);
}
var Pe = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Fe = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, Ie = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, L = /(?:\d+|\d*\.\d+)%?/, Le = /(?:\s*,\s*|\s+)/, Re = /\s*[,/]\s*/, R = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, ze = RegExp(`^(rgba?)\\(\\s*(${L.source}|${R.source})(?:${Le.source}(${L.source}|${R.source}))?(?:${Le.source}(${L.source}|${R.source}))?(?:${Re.source}(${L.source}|${R.source}))?\\s*\\)$`), Be = RegExp(`^(hsla?)\\(\\s*((?:${L.source})(?:deg|rad|grad|turn)?|${R.source})(?:${Le.source}(${L.source}|${R.source}))?(?:${Le.source}(${L.source}|${R.source}))?(?:${Re.source}(${L.source}|${R.source}))?\\s*\\)$`);
function Ve(e2, { loose: t2 = false } = {}) {
  if (typeof e2 != `string`) return null;
  if (e2 = e2.trim(), e2 === `transparent`) return { mode: `rgb`, color: [`0`, `0`, `0`], alpha: `0` };
  if (e2 in Pe) return { mode: `rgb`, color: Pe[e2].map((e3) => e3.toString()) };
  let n2 = e2.replace(Ie, (e3, t3, n3, r3, i3) => [`#`, t3, t3, n3, n3, r3, r3, i3 ? i3 + i3 : ``].join(``)).match(Fe);
  if (n2 !== null) return { mode: `rgb`, color: [parseInt(n2[1], 16), parseInt(n2[2], 16), parseInt(n2[3], 16)].map((e3) => e3.toString()), alpha: n2[4] ? (parseInt(n2[4], 16) / 255).toString() : void 0 };
  let r2 = e2.match(ze) ?? e2.match(Be);
  if (r2 === null) return null;
  let i2 = [r2[2], r2[3], r2[4]].filter(Boolean).map((e3) => e3.toString());
  return i2.length === 2 && i2[0].startsWith(`var(`) ? { mode: r2[1], color: [i2[0]], alpha: i2[1] } : !t2 && i2.length !== 3 || i2.length < 3 && !i2.some((e3) => /^var\(.*?\)$/.test(e3)) ? null : { mode: r2[1], color: i2, alpha: r2[5]?.toString?.() };
}
function He({ mode: e2, color: t2, alpha: n2 }) {
  let r2 = n2 !== void 0;
  return e2 === `rgba` || e2 === `hsla` ? `${e2}(${t2.join(`, `)}${r2 ? `, ${n2}` : ``})` : `${e2}(${t2.join(` `)}${r2 ? ` / ${n2}` : ``})`;
}
function Ue(e2, t2, n2) {
  if (typeof e2 == `function`) return e2({ opacityValue: t2 });
  let r2 = Ve(e2, { loose: true });
  return r2 === null ? n2 : He({ ...r2, alpha: t2 });
}
function z({ color: e2, property: t2, variable: n2 }) {
  let r2 = [].concat(t2);
  if (typeof e2 == `function`) return { [n2]: `1`, ...Object.fromEntries(r2.map((t3) => [t3, e2({ opacityVariable: n2, opacityValue: `var(${n2}, 1)` })])) };
  let i2 = Ve(e2);
  return i2 === null || i2.alpha !== void 0 ? Object.fromEntries(r2.map((t3) => [t3, e2])) : { [n2]: `1`, ...Object.fromEntries(r2.map((e3) => [e3, He({ ...i2, alpha: `var(${n2}, 1)` })])) };
}
var We = 97, Ge = 122, Ke = 65, qe = 90, Je = 101, Ye = 69, Xe = 48, Ze = 57, Qe = 43, $e = 45, et = 42, tt = 47, nt = 40, rt = 41, it = 44, at = 32, ot = 37, st = [`calc`, `min`, `max`, `clamp`, `mod`, `rem`, `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `atan2`, `pow`, `sqrt`, `hypot`, `log`, `exp`, `round`];
function ct(e2) {
  if (!st.some((t3) => e2.includes(t3))) return e2;
  let t2 = ``, n2 = [], r2 = null, i2 = null;
  for (let a2 = 0; a2 < e2.length; a2++) {
    let o2 = e2.charCodeAt(a2);
    if (o2 >= Xe && o2 <= Ze || r2 !== null && (o2 === ot || o2 >= We && o2 <= Ge || o2 >= Ke && o2 <= qe) ? r2 = a2 : (i2 = r2, r2 = null), o2 === nt) {
      t2 += e2[a2];
      let r3 = a2;
      for (let t3 = a2 - 1; t3 >= 0; t3--) {
        let n3 = e2.charCodeAt(t3);
        if (n3 >= Xe && n3 <= Ze) r3 = t3;
        else if (n3 >= We && n3 <= Ge) r3 = t3;
        else break;
      }
      let i3 = e2.slice(r3, a2);
      if (st.includes(i3)) {
        n2.unshift(true);
        continue;
      } else if (n2[0] && i3 === ``) {
        n2.unshift(true);
        continue;
      }
      n2.unshift(false);
      continue;
    } else if (o2 === rt) t2 += e2[a2], n2.shift();
    else if (o2 === it && n2[0]) {
      t2 += `, `;
      continue;
    } else if (o2 === at && n2[0] && t2.charCodeAt(t2.length - 1) === at) continue;
    else if ((o2 === Qe || o2 === et || o2 === tt || o2 === $e) && n2[0]) {
      let n3 = t2.trimEnd(), r3 = n3.charCodeAt(n3.length - 1), o3 = n3.charCodeAt(n3.length - 2), s2 = e2.charCodeAt(a2 + 1);
      if ((r3 === Je || r3 === Ye) && o3 >= Xe && o3 <= Ze) {
        t2 += e2[a2];
        continue;
      } else if (r3 === Qe || r3 === et || r3 === tt || r3 === $e) {
        t2 += e2[a2];
        continue;
      } else if (r3 === nt || r3 === it) {
        t2 += e2[a2];
        continue;
      } else e2.charCodeAt(a2 - 1) === at ? t2 += `${e2[a2]} ` : r3 >= Xe && r3 <= Ze || s2 >= Xe && s2 <= Ze || r3 === rt || s2 === nt || s2 === Qe || s2 === et || s2 === tt || s2 === $e || i2 !== null && i2 === a2 - 1 ? t2 += ` ${e2[a2]} ` : t2 += e2[a2];
    } else t2 += e2[a2];
  }
  return t2;
}
function B(e2, t2) {
  let n2 = [], r2 = [], i2 = 0, a2 = false;
  for (let o2 = 0; o2 < e2.length; o2++) {
    let s2 = e2[o2];
    n2.length === 0 && s2 === t2[0] && !a2 && (t2.length === 1 || e2.slice(o2, o2 + t2.length) === t2) && (r2.push(e2.slice(i2, o2)), i2 = o2 + t2.length), a2 = a2 ? false : s2 === `\\`, s2 === `(` || s2 === `[` || s2 === `{` ? n2.push(s2) : (s2 === `)` && n2[n2.length - 1] === `(` || s2 === `]` && n2[n2.length - 1] === `[` || s2 === `}` && n2[n2.length - 1] === `{`) && n2.pop();
  }
  return r2.push(e2.slice(i2)), r2;
}
var lt = /* @__PURE__ */ new Set([`inset`, `inherit`, `initial`, `revert`, `unset`]), ut = /\ +(?![^(]*\))/g, dt = /^-?(\d+|\.\d+)(.*?)$/g;
function ft(e2) {
  return B(e2, `,`).map((e3) => {
    let t2 = e3.trim(), n2 = { raw: t2 }, r2 = t2.split(ut), i2 = /* @__PURE__ */ new Set();
    for (let e4 of r2) dt.lastIndex = 0, !i2.has(`KEYWORD`) && lt.has(e4) ? (n2.keyword = e4, i2.add(`KEYWORD`)) : dt.test(e4) ? i2.has(`X`) ? i2.has(`Y`) ? i2.has(`BLUR`) ? i2.has(`SPREAD`) || (n2.spread = e4, i2.add(`SPREAD`)) : (n2.blur = e4, i2.add(`BLUR`)) : (n2.y = e4, i2.add(`Y`)) : (n2.x = e4, i2.add(`X`)) : n2.color ? (n2.unknown || (n2.unknown = []), n2.unknown.push(e4)) : n2.color = e4;
    return n2.valid = n2.x !== void 0 && n2.y !== void 0, n2;
  });
}
function pt(e2) {
  return e2.map((e3) => e3.valid ? [e3.keyword, e3.x, e3.y, e3.blur, e3.spread, e3.color].filter(Boolean).join(` `) : e3.raw).join(`, `);
}
var mt = [`min`, `max`, `clamp`, `calc`];
function ht(e2) {
  return mt.some((t2) => RegExp(`^${t2}\\(.*\\)`).test(e2));
}
var gt = /* @__PURE__ */ new Set([`scroll-timeline-name`, `timeline-scope`, `view-timeline-name`, `font-palette`, `anchor-name`, `anchor-scope`, `position-anchor`, `position-try-options`, `scroll-timeline`, `animation-timeline`, `view-timeline`, `position-try`]);
function V(e2, t2 = null, n2 = true) {
  let r2 = t2 && gt.has(t2.property);
  return e2.startsWith(`--`) && !r2 ? `var(${e2})` : e2.includes(`url(`) ? e2.split(/(url\(.*?\))/g).filter(Boolean).map((e3) => /^url\(.*?\)$/.test(e3) ? e3 : V(e3, t2, false)).join(``) : (e2 = e2.replace(/([^\\])_+/g, (e3, t3) => t3 + ` `.repeat(e3.length - 1)).replace(/^_/g, ` `).replace(/\\_/g, `_`), n2 && (e2 = e2.trim()), e2 = ct(e2), e2);
}
function H(e2) {
  return e2.includes(`=`) && (e2 = e2.replace(/(=.*)/g, (e3, t2) => {
    if (t2[1] === `'` || t2[1] === `"`) return t2;
    if (t2.length > 2) {
      let e4 = t2[t2.length - 1];
      if (t2[t2.length - 2] === ` ` && (e4 === `i` || e4 === `I` || e4 === `s` || e4 === `S`)) return `="${t2.slice(1, -2)}" ${t2[t2.length - 1]}`;
    }
    return `="${t2.slice(1)}"`;
  })), e2;
}
function _t(e2) {
  return e2.startsWith(`url(`);
}
function vt(e2) {
  return !isNaN(Number(e2)) || ht(e2);
}
function yt(e2) {
  return e2.endsWith(`%`) && vt(e2.slice(0, -1)) || ht(e2);
}
var bt = `(?:${`cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`).join(`|`)})`;
function xt(e2) {
  return e2 === `0` || RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${bt}$`).test(e2) || ht(e2);
}
var St = /* @__PURE__ */ new Set([`thin`, `medium`, `thick`]);
function Ct(e2) {
  return St.has(e2);
}
function wt(e2) {
  let t2 = ft(V(e2));
  for (let e3 of t2) if (!e3.valid) return false;
  return true;
}
function Tt(e2) {
  let t2 = 0;
  return B(e2, `_`).every((e3) => (e3 = V(e3), e3.startsWith(`var(`) ? true : Ve(e3, { loose: true }) === null ? false : (t2++, true))) ? t2 > 0 : false;
}
function Et(e2) {
  let t2 = 0;
  return B(e2, `,`).every((e3) => (e3 = V(e3), e3.startsWith(`var(`) ? true : _t(e3) || Ot(e3) || [`element(`, `image(`, `cross-fade(`, `image-set(`].some((t3) => e3.startsWith(t3)) ? (t2++, true) : false)) ? t2 > 0 : false;
}
var Dt = /* @__PURE__ */ new Set([`conic-gradient`, `linear-gradient`, `radial-gradient`, `repeating-conic-gradient`, `repeating-linear-gradient`, `repeating-radial-gradient`]);
function Ot(e2) {
  e2 = V(e2);
  for (let t2 of Dt) if (e2.startsWith(`${t2}(`)) return true;
  return false;
}
var kt = /* @__PURE__ */ new Set([`center`, `top`, `right`, `bottom`, `left`]);
function At(e2) {
  let t2 = 0;
  return B(e2, `_`).every((e3) => (e3 = V(e3), e3.startsWith(`var(`) ? true : kt.has(e3) || xt(e3) || yt(e3) ? (t2++, true) : false)) ? t2 > 0 : false;
}
function jt(e2) {
  let t2 = 0;
  return B(e2, `,`).every((e3) => (e3 = V(e3), e3.startsWith(`var(`) ? true : e3.includes(` `) && !/(['"])([^"']+)\1/g.test(e3) || /^\d/g.test(e3) ? false : (t2++, true))) ? t2 > 0 : false;
}
var Mt = /* @__PURE__ */ new Set([`serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, `system-ui`, `ui-serif`, `ui-sans-serif`, `ui-monospace`, `ui-rounded`, `math`, `emoji`, `fangsong`]);
function Nt(e2) {
  return Mt.has(e2);
}
var Pt = /* @__PURE__ */ new Set([`xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`]);
function Ft(e2) {
  return Pt.has(e2);
}
var It = /* @__PURE__ */ new Set([`larger`, `smaller`]);
function Lt(e2) {
  return It.has(e2);
}
function Rt(e2) {
  if (e2 = `${e2}`, e2 === `0`) return `0`;
  if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(e2)) return e2.replace(/^[+-]?/, (e3) => e3 === `-` ? `` : `-`);
  for (let t2 of [`var`, `calc`, `min`, `max`, `clamp`]) if (e2.includes(`${t2}(`)) return `calc(${e2} * -1)`;
}
function zt(e2) {
  let t2 = [`cover`, `contain`];
  return B(e2, `,`).every((e3) => {
    let n2 = B(e3, `_`).filter(Boolean);
    return n2.length === 1 && t2.includes(n2[0]) ? true : n2.length !== 1 && n2.length !== 2 ? false : n2.every((e4) => xt(e4) || yt(e4) || e4 === `auto`);
  });
}
var Bt = { optimizeUniversalDefaults: false, generalizedModifiers: true, disableColorOpacityUtilitiesByDefault: false, relativeContentPathsByDefault: false }, Vt = { future: [`hoverOnlyWhenSupported`, `respectDefaultRingColorOpacity`, `disableColorOpacityUtilitiesByDefault`, `relativeContentPathsByDefault`], experimental: [`optimizeUniversalDefaults`, `generalizedModifiers`] };
function U(e2, t2) {
  return Vt.future.includes(t2) ? e2.future === `all` || (e2?.future?.[t2] ?? Bt[t2] ?? false) : Vt.experimental.includes(t2) ? e2.experimental === `all` || (e2?.experimental?.[t2] ?? Bt[t2] ?? false) : false;
}
function Ht(e2) {
  return e2.experimental === `all` ? Vt.experimental : Object.keys(e2?.experimental ?? {}).filter((t2) => Vt.experimental.includes(t2) && e2.experimental[t2]);
}
function Ut(e2) {
  if ({}.JEST_WORKER_ID === void 0 && Ht(e2).length > 0) {
    let t2 = Ht(e2).map((e3) => h.default.yellow(e3)).join(`, `);
    y.warn(`experimental-flags-enabled`, [`You have enabled experimental features: ${t2}`, `Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time.`]);
  }
}
function Wt(e2, t2) {
  e2.walkClasses((e3) => {
    e3.value = t2(e3.value), e3.raws && e3.raws.value && (e3.raws.value = Ne(e3.raws.value));
  });
}
function Gt(e2, t2) {
  if (!W(e2)) return;
  let n2 = e2.slice(1, -1);
  if (t2(n2)) return V(n2);
}
function Kt(e2, t2 = {}, n2) {
  let r2 = t2[e2];
  if (r2 !== void 0) return Rt(r2);
  if (W(e2)) {
    let t3 = Gt(e2, n2);
    return t3 === void 0 ? void 0 : Rt(t3);
  }
}
function qt(e2, t2 = {}, { validate: n2 = () => true } = {}) {
  let r2 = t2.values?.[e2];
  return r2 === void 0 ? t2.supportsNegativeValues && e2.startsWith(`-`) ? Kt(e2.slice(1), t2.values, n2) : Gt(e2, n2) : r2;
}
function W(e2) {
  return e2.startsWith(`[`) && e2.endsWith(`]`);
}
function Jt(e2) {
  let t2 = e2.lastIndexOf(`/`), n2 = e2.lastIndexOf(`[`, t2), r2 = e2.indexOf(`]`, t2);
  return e2[t2 - 1] === `]` || e2[t2 + 1] === `[` || n2 !== -1 && r2 !== -1 && n2 < t2 && t2 < r2 && (t2 = e2.lastIndexOf(`/`, n2)), t2 === -1 || t2 === e2.length - 1 || W(e2) && !e2.includes(`]/[`) ? [e2, void 0] : [e2.slice(0, t2), e2.slice(t2 + 1)];
}
function Yt(e2) {
  if (typeof e2 == `string` && e2.includes(`<alpha-value>`)) {
    let t2 = e2;
    return ({ opacityValue: e3 = 1 }) => t2.replace(/<alpha-value>/g, e3);
  }
  return e2;
}
function Xt(e2) {
  return V(e2.slice(1, -1));
}
function Zt(e2, t2 = {}, { tailwindConfig: n2 = {} } = {}) {
  if (t2.values?.[e2] !== void 0) return Yt(t2.values?.[e2]);
  let [r2, i2] = Jt(e2);
  if (i2 !== void 0) {
    let e3 = t2.values?.[r2] ?? (W(r2) ? r2.slice(1, -1) : void 0);
    return e3 === void 0 ? void 0 : (e3 = Yt(e3), W(i2) ? Ue(e3, Xt(i2)) : n2.theme?.opacity?.[i2] === void 0 ? void 0 : Ue(e3, n2.theme.opacity[i2]));
  }
  return qt(e2, t2, { validate: Tt });
}
function Qt(e2, t2 = {}) {
  return t2.values?.[e2];
}
function G(e2) {
  return (t2, n2) => qt(t2, n2, { validate: e2 });
}
var $t = { any: qt, color: Zt, url: G(_t), image: G(Et), length: G(xt), percentage: G(yt), position: G(At), lookup: Qt, "generic-name": G(Nt), "family-name": G(jt), number: G(vt), "line-width": G(Ct), "absolute-size": G(Ft), "relative-size": G(Lt), shadow: G(wt), size: G(zt) }, en = Object.keys($t);
function tn(e2, t2) {
  let n2 = e2.indexOf(t2);
  return n2 === -1 ? [void 0, e2] : [e2.slice(0, n2), e2.slice(n2 + 1)];
}
function nn(e2, t2, n2, r2) {
  if (n2.values && t2 in n2.values) for (let { type: i3 } of e2 ?? []) {
    let e3 = $t[i3](t2, n2, { tailwindConfig: r2 });
    if (e3 !== void 0) return [e3, i3, null];
  }
  if (W(t2)) {
    let e3 = t2.slice(1, -1), [r3, i3] = tn(e3, `:`);
    if (!/^[\w-_]+$/g.test(r3)) i3 = e3;
    else if (r3 !== void 0 && !en.includes(r3)) return [];
    if (i3.length > 0 && en.includes(r3)) return [qt(`[${i3}]`, n2), r3, null];
  }
  let i2 = rn(e2, t2, n2, r2);
  for (let e3 of i2) return e3;
  return [];
}
function* rn(e2, t2, n2, r2) {
  let i2 = U(r2, `generalizedModifiers`), [a2, o2] = Jt(t2);
  if (i2 && n2.modifiers != null && (n2.modifiers === `any` || typeof n2.modifiers == `object` && (o2 && W(o2) || o2 in n2.modifiers)) || (a2 = t2, o2 = void 0), o2 !== void 0 && a2 === `` && (a2 = `DEFAULT`), o2 !== void 0 && typeof n2.modifiers == `object`) {
    let e3 = n2.modifiers?.[o2] ?? null;
    e3 === null ? W(o2) && (o2 = Xt(o2)) : o2 = e3;
  }
  for (let { type: t3 } of e2 ?? []) {
    let e3 = $t[t3](a2, n2, { tailwindConfig: r2 });
    e3 !== void 0 && (yield [e3, t3, o2 ?? null]);
  }
}
var an = e(T());
function K(e2) {
  let t2 = F.default.className();
  return t2.value = e2, Ne(t2?.raws?.value ?? t2.value);
}
var on = { "::after": [`terminal`, `jumpable`], "::backdrop": [`terminal`, `jumpable`], "::before": [`terminal`, `jumpable`], "::cue": [`terminal`], "::cue-region": [`terminal`], "::first-letter": [`terminal`, `jumpable`], "::first-line": [`terminal`, `jumpable`], "::grammar-error": [`terminal`], "::marker": [`terminal`, `jumpable`], "::part": [`terminal`, `actionable`], "::placeholder": [`terminal`, `jumpable`], "::selection": [`terminal`, `jumpable`], "::slotted": [`terminal`], "::spelling-error": [`terminal`], "::target-text": [`terminal`], "::file-selector-button": [`terminal`, `actionable`], "::deep": [`actionable`], "::v-deep": [`actionable`], "::ng-deep": [`actionable`], ":after": [`terminal`, `jumpable`], ":before": [`terminal`, `jumpable`], ":first-letter": [`terminal`, `jumpable`], ":first-line": [`terminal`, `jumpable`], ":where": [], ":is": [], ":has": [], __default__: [`terminal`, `actionable`] };
function sn(e2) {
  let [t2] = cn(e2);
  return t2.forEach(([e3, t3]) => e3.removeChild(t3)), e2.nodes.push(...t2.map(([, e3]) => e3)), e2;
}
function cn(e2) {
  let t2 = [], n2 = null;
  for (let r2 of e2.nodes) if (r2.type === `combinator`) t2 = t2.filter(([, e3]) => fn(e3).includes(`jumpable`)), n2 = null;
  else if (r2.type === `pseudo`) {
    un(r2) ? (n2 = r2, t2.push([e2, r2, null])) : n2 && dn(r2, n2) ? t2.push([e2, r2, n2]) : n2 = null;
    for (let e3 of r2.nodes ?? []) {
      let [r3, i2] = cn(e3);
      n2 = i2 || n2, t2.push(...r3);
    }
  }
  return [t2, n2];
}
function ln(e2) {
  return e2.value.startsWith(`::`) || on[e2.value] !== void 0;
}
function un(e2) {
  return ln(e2) && fn(e2).includes(`terminal`);
}
function dn(e2, t2) {
  return e2.type !== `pseudo` || ln(e2) ? false : fn(t2).includes(`actionable`);
}
function fn(e2) {
  return on[e2.value] ?? on.__default__;
}
var pn = `:merge`;
function mn(e2, { context: t2, candidate: n2 }) {
  let r2 = t2?.tailwindConfig.prefix ?? ``, i2 = e2.map((e3) => {
    let t3 = (0, F.default)().astSync(e3.format);
    return { ...e3, ast: e3.respectPrefix ? Me(r2, t3) : t3 };
  }), a2 = F.default.root({ nodes: [F.default.selector({ nodes: [F.default.className({ value: K(n2) })] })] });
  for (let { ast: e3 } of i2) [a2, e3] = yn(a2, e3), e3.walkNesting((e4) => e4.replaceWith(...a2.nodes[0].nodes)), a2 = e3;
  return a2;
}
function hn(e2) {
  let t2 = [];
  for (; e2.prev() && e2.prev().type !== `combinator`; ) e2 = e2.prev();
  for (; e2 && e2.type !== `combinator`; ) t2.push(e2), e2 = e2.next();
  return t2;
}
function gn(e2) {
  return e2.sort((t2, n2) => t2.type === `tag` && n2.type === `class` ? -1 : t2.type === `class` && n2.type === `tag` ? 1 : t2.type === `class` && n2.type === `pseudo` && n2.value.startsWith(`::`) ? -1 : t2.type === `pseudo` && t2.value.startsWith(`::`) && n2.type === `class` ? 1 : e2.index(t2) - e2.index(n2)), e2;
}
function _n(e2, t2) {
  let n2 = false;
  e2.walk((e3) => {
    if (e3.type === `class` && e3.value === t2) return n2 = true, false;
  }), n2 || e2.remove();
}
function vn(e2, t2, { context: n2, candidate: r2, base: i2 }) {
  let a2 = n2?.tailwindConfig?.separator ?? `:`;
  i2 ?? (i2 = B(r2, a2).pop());
  let o2 = (0, F.default)().astSync(e2);
  if (o2.walkClasses((e3) => {
    e3.raws && e3.value.includes(i2) && (e3.raws.value = K((0, an.default)(e3.raws.value)));
  }), o2.each((e3) => _n(e3, i2)), o2.length === 0) return null;
  let s2 = Array.isArray(t2) ? mn(t2, { context: n2, candidate: r2 }) : t2;
  if (s2 === null) return o2.toString();
  let c2 = F.default.comment({ value: `/*__simple__*/` }), l2 = F.default.comment({ value: `/*__simple__*/` });
  return o2.walkClasses((e3) => {
    if (e3.value !== i2) return;
    let t3 = e3.parent, n3 = s2.nodes[0].nodes;
    if (t3.nodes.length === 1) {
      e3.replaceWith(...n3);
      return;
    }
    let r3 = hn(e3);
    t3.insertBefore(r3[0], c2), t3.insertAfter(r3[r3.length - 1], l2);
    for (let e4 of n3) t3.insertBefore(r3[0], e4.clone());
    e3.remove(), r3 = hn(c2);
    let a3 = t3.index(c2);
    t3.nodes.splice(a3, r3.length, ...gn(F.default.selector({ nodes: r3 })).nodes), c2.remove(), l2.remove();
  }), o2.walkPseudos((e3) => {
    e3.value === pn && e3.replaceWith(e3.nodes);
  }), o2.each((e3) => sn(e3)), o2.toString();
}
function yn(e2, t2) {
  let n2 = [];
  return e2.walkPseudos((e3) => {
    e3.value === pn && n2.push({ pseudo: e3, value: e3.nodes[0].toString() });
  }), t2.walkPseudos((e3) => {
    if (e3.value !== pn) return;
    let t3 = e3.nodes[0].toString(), r2 = n2.find((e4) => e4.value === t3);
    if (!r2) return;
    let i2 = [], a2 = e3.next();
    for (; a2 && a2.type !== `combinator`; ) i2.push(a2), a2 = a2.next();
    let o2 = a2;
    r2.pseudo.parent.insertAfter(r2.pseudo, F.default.selector({ nodes: i2.map((e4) => e4.clone()) })), e3.remove(), i2.forEach((e4) => e4.remove()), o2 && o2.type === `combinator` && o2.remove();
  }), [e2, t2];
}
function bn(e2) {
  return Ne(`.${K(e2)}`);
}
function xn(e2, t2) {
  return bn(Sn(e2, t2));
}
function Sn(e2, t2) {
  return t2 === `DEFAULT` ? e2 : t2 === `-` || t2 === `-DEFAULT` ? `-${e2}` : t2.startsWith(`-`) ? `-${e2}${t2}` : t2.startsWith(`/`) ? `${e2}${t2}` : `${e2}-${t2}`;
}
var Cn = e(i()), wn = e(p());
function Tn(e2) {
  return [`fontSize`, `outline`].includes(e2) ? (e3) => (typeof e3 == `function` && (e3 = e3({})), Array.isArray(e3) && (e3 = e3[0]), e3) : e2 === `fontFamily` ? (e3) => {
    typeof e3 == `function` && (e3 = e3({}));
    let t2 = Array.isArray(e3) && I(e3[1]) ? e3[0] : e3;
    return Array.isArray(t2) ? t2.join(`, `) : t2;
  } : [`boxShadow`, `transitionProperty`, `transitionDuration`, `transitionDelay`, `transitionTimingFunction`, `backgroundImage`, `backgroundSize`, `backgroundColor`, `cursor`, `animation`].includes(e2) ? (e3) => (typeof e3 == `function` && (e3 = e3({})), Array.isArray(e3) && (e3 = e3.join(`, `)), e3) : [`gridTemplateColumns`, `gridTemplateRows`, `objectPosition`].includes(e2) ? (e3) => (typeof e3 == `function` && (e3 = e3({})), typeof e3 == `string` && (e3 = l.list.comma(e3).join(` `)), e3) : (e3, t2 = {}) => (typeof e3 == `function` && (e3 = e3(t2)), e3);
}
var En = e(s());
function q(e2, t2 = [[e2, [e2]]], { filterDefault: n2 = false, ...r2 } = {}) {
  let i2 = Tn(e2);
  return function({ matchUtilities: a2, theme: o2 }) {
    for (let s2 of t2) a2((Array.isArray(s2[0]) ? s2 : [s2]).reduce((e3, [t3, n3]) => Object.assign(e3, { [t3]: (e4) => n3.reduce((t4, n4) => Array.isArray(n4) ? Object.assign(t4, { [n4[0]]: n4[1] }) : Object.assign(t4, { [n4]: i2(e4) }), {}) }), {}), { ...r2, values: n2 ? Object.fromEntries(Object.entries(o2(e2) ?? {}).filter(([e3]) => e3 !== `DEFAULT`)) : o2(e2) });
  };
}
function Dn(e2) {
  return e2 = Array.isArray(e2) ? e2 : [e2], e2.map((e3) => {
    let t2 = e3.values.map((e4) => e4.raw === void 0 ? [e4.min && `(min-width: ${e4.min})`, e4.max && `(max-width: ${e4.max})`].filter(Boolean).join(` and `) : e4.raw);
    return e3.not ? `not all and ${t2}` : t2;
  }).join(`, `);
}
var On = /* @__PURE__ */ new Set([`normal`, `reverse`, `alternate`, `alternate-reverse`]), kn = /* @__PURE__ */ new Set([`running`, `paused`]), An = /* @__PURE__ */ new Set([`none`, `forwards`, `backwards`, `both`]), jn = /* @__PURE__ */ new Set([`infinite`]), Mn = /* @__PURE__ */ new Set([`linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end`]), Nn = [`cubic-bezier`, `steps`], Pn = /\,(?![^(]*\))/g, Fn = /\ +(?![^(]*\))/g, In = /^(-?[\d.]+m?s)$/, Ln = /^(\d+)$/;
function Rn(e2) {
  return e2.split(Pn).map((e3) => {
    let t2 = e3.trim(), n2 = { value: t2 }, r2 = t2.split(Fn), i2 = /* @__PURE__ */ new Set();
    for (let e4 of r2) !i2.has(`DIRECTIONS`) && On.has(e4) ? (n2.direction = e4, i2.add(`DIRECTIONS`)) : !i2.has(`PLAY_STATES`) && kn.has(e4) ? (n2.playState = e4, i2.add(`PLAY_STATES`)) : !i2.has(`FILL_MODES`) && An.has(e4) ? (n2.fillMode = e4, i2.add(`FILL_MODES`)) : !i2.has(`ITERATION_COUNTS`) && (jn.has(e4) || Ln.test(e4)) ? (n2.iterationCount = e4, i2.add(`ITERATION_COUNTS`)) : !i2.has(`TIMING_FUNCTION`) && Mn.has(e4) || !i2.has(`TIMING_FUNCTION`) && Nn.some((t3) => e4.startsWith(`${t3}(`)) ? (n2.timingFunction = e4, i2.add(`TIMING_FUNCTION`)) : !i2.has(`DURATION`) && In.test(e4) ? (n2.duration = e4, i2.add(`DURATION`)) : !i2.has(`DELAY`) && In.test(e4) ? (n2.delay = e4, i2.add(`DELAY`)) : i2.has(`NAME`) ? (n2.unknown || (n2.unknown = []), n2.unknown.push(e4)) : (n2.name = e4, i2.add(`NAME`));
    return n2;
  });
}
var J = (e2) => Object.assign({}, ...Object.entries(e2 ?? {}).flatMap(([e3, t2]) => typeof t2 == `object` ? Object.entries(J(t2)).map(([t3, n2]) => ({ [e3 + (t3 === `DEFAULT` ? `` : `-${t3}`)]: n2 })) : [{ [`${e3}`]: t2 }]));
function Y(e2) {
  return typeof e2 == `function` ? e2({}) : e2;
}
function zn(e2, t2 = true) {
  return Array.isArray(e2) ? e2.map((e3) => {
    if (t2 && Array.isArray(e3)) throw Error("The tuple syntax is not supported for `screens`.");
    if (typeof e3 == `string`) return { name: e3.toString(), not: false, values: [{ min: e3, max: void 0 }] };
    let [n2, r2] = e3;
    return n2 = n2.toString(), typeof r2 == `string` ? { name: n2, not: false, values: [{ min: r2, max: void 0 }] } : Array.isArray(r2) ? { name: n2, not: false, values: r2.map((e4) => Un(e4)) } : { name: n2, not: false, values: [Un(r2)] };
  }) : zn(Object.entries(e2 ?? {}), false);
}
function Bn(e2) {
  return e2.values.length === 1 ? e2.values[0].raw === void 0 ? e2.values[0].min !== void 0 && e2.values[0].max !== void 0 ? { result: false, reason: `min-and-max` } : { result: true, reason: null } : { result: false, reason: `raw-values` } : { result: false, reason: `multiple-values` };
}
function Vn(e2, t2, n2) {
  let r2 = Hn(t2, e2), i2 = Hn(n2, e2), a2 = Bn(r2), o2 = Bn(i2);
  if (a2.reason === `multiple-values` || o2.reason === `multiple-values`) throw Error(`Attempted to sort a screen with multiple values. This should never happen. Please open a bug report.`);
  if (a2.reason === `raw-values` || o2.reason === `raw-values`) throw Error(`Attempted to sort a screen with raw values. This should never happen. Please open a bug report.`);
  if (a2.reason === `min-and-max` || o2.reason === `min-and-max`) throw Error(`Attempted to sort a screen with both min and max values. This should never happen. Please open a bug report.`);
  let { min: s2, max: c2 } = r2.values[0], { min: l2, max: u2 } = i2.values[0];
  t2.not && ([s2, c2] = [c2, s2]), n2.not && ([l2, u2] = [u2, l2]), s2 = s2 === void 0 ? s2 : parseFloat(s2), c2 = c2 === void 0 ? c2 : parseFloat(c2), l2 = l2 === void 0 ? l2 : parseFloat(l2), u2 = u2 === void 0 ? u2 : parseFloat(u2);
  let [d2, f2] = e2 === `min` ? [s2, l2] : [u2, c2];
  return d2 - f2;
}
function Hn(e2, t2) {
  return typeof e2 == `object` ? e2 : { name: `arbitrary-screen`, values: [{ [t2]: e2 }] };
}
function Un({ "min-width": e2, min: t2 = e2, max: n2, raw: r2 } = {}) {
  return { min: t2, max: n2, raw: r2 };
}
function Wn(e2, t2) {
  e2.walkDecls((e3) => {
    if (t2.includes(e3.prop)) {
      e3.remove();
      return;
    }
    for (let n2 of t2) e3.value.includes(`/ var(${n2})`) ? e3.value = e3.value.replace(`/ var(${n2})`, ``) : e3.value.includes(`/ var(${n2}, 1)`) && (e3.value = e3.value.replace(`/ var(${n2}, 1)`, ``));
  });
}
var X = { childVariant: ({ addVariant: e2 }) => {
  e2(`*`, `& > *`);
}, pseudoElementVariants: ({ addVariant: e2 }) => {
  e2(`first-letter`, `&::first-letter`), e2(`first-line`, `&::first-line`), e2(`marker`, [({ container: e3 }) => (Wn(e3, [`--tw-text-opacity`]), `& *::marker`), ({ container: e3 }) => (Wn(e3, [`--tw-text-opacity`]), `&::marker`)]), e2(`selection`, [`& *::selection`, `&::selection`]), e2(`file`, `&::file-selector-button`), e2(`placeholder`, `&::placeholder`), e2(`backdrop`, `&::backdrop`), e2(`before`, ({ container: e3 }) => (e3.walkRules((e4) => {
    let t2 = false;
    e4.walkDecls(`content`, () => {
      t2 = true;
    }), t2 || e4.prepend(l.decl({ prop: `content`, value: `var(--tw-content)` }));
  }), `&::before`)), e2(`after`, ({ container: e3 }) => (e3.walkRules((e4) => {
    let t2 = false;
    e4.walkDecls(`content`, () => {
      t2 = true;
    }), t2 || e4.prepend(l.decl({ prop: `content`, value: `var(--tw-content)` }));
  }), `&::after`));
}, pseudoClassVariants: ({ addVariant: e2, matchVariant: t2, config: n2, prefix: r2 }) => {
  let i2 = [[`first`, `&:first-child`], [`last`, `&:last-child`], [`only`, `&:only-child`], [`odd`, `&:nth-child(odd)`], [`even`, `&:nth-child(even)`], `first-of-type`, `last-of-type`, `only-of-type`, [`visited`, ({ container: e3 }) => (Wn(e3, [`--tw-text-opacity`, `--tw-border-opacity`, `--tw-bg-opacity`]), `&:visited`)], `target`, [`open`, `&[open]`], `default`, `checked`, `indeterminate`, `placeholder-shown`, `autofill`, `optional`, `required`, `valid`, `invalid`, `in-range`, `out-of-range`, `read-only`, `empty`, `focus-within`, [`hover`, U(n2(), `hoverOnlyWhenSupported`) ? `@media (hover: hover) and (pointer: fine) { &:hover }` : `&:hover`], `focus`, `focus-visible`, `active`, `enabled`, `disabled`].map((e3) => Array.isArray(e3) ? e3 : [e3, `&:${e3}`]);
  for (let [t3, n3] of i2) e2(t3, (e3) => typeof n3 == `function` ? n3(e3) : n3);
  let a2 = { group: (e3, { modifier: t3 }) => t3 ? [`:merge(${r2(`.group`)}\\/${K(t3)})`, ` &`] : [`:merge(${r2(`.group`)})`, ` &`], peer: (e3, { modifier: t3 }) => t3 ? [`:merge(${r2(`.peer`)}\\/${K(t3)})`, ` ~ &`] : [`:merge(${r2(`.peer`)})`, ` ~ &`] };
  for (let [e3, n3] of Object.entries(a2)) t2(e3, (e4 = ``, t3) => {
    let r3 = V(typeof e4 == `function` ? e4(t3) : e4);
    r3.includes(`&`) || (r3 = `&` + r3);
    let [i3, a3] = n3(``, t3), o2 = null, s2 = null, c2 = 0;
    for (let e5 = 0; e5 < r3.length; ++e5) {
      let t4 = r3[e5];
      t4 === `&` ? o2 = e5 : t4 === `'` || t4 === `"` ? c2 += 1 : o2 !== null && t4 === ` ` && !c2 && (s2 = e5);
    }
    return o2 !== null && s2 === null && (s2 = r3.length), r3.slice(0, o2) + i3 + r3.slice(o2 + 1, s2) + a3 + r3.slice(s2);
  }, { values: Object.fromEntries(i2), [nr]: { respectPrefix: false } });
}, directionVariants: ({ addVariant: e2 }) => {
  e2(`ltr`, `&:where([dir="ltr"], [dir="ltr"] *)`), e2(`rtl`, `&:where([dir="rtl"], [dir="rtl"] *)`);
}, reducedMotionVariants: ({ addVariant: e2 }) => {
  e2(`motion-safe`, `@media (prefers-reduced-motion: no-preference)`), e2(`motion-reduce`, `@media (prefers-reduced-motion: reduce)`);
}, darkVariants: ({ config: e2, addVariant: t2 }) => {
  let [n2, r2 = `.dark`] = [].concat(e2(`darkMode`, `media`));
  if (n2 === false && (n2 = `media`, y.warn(`darkmode-false`, ["The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.", "Change `darkMode` to `media` or remove it entirely.", `https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration`])), n2 === `variant`) {
    let e3;
    if (Array.isArray(r2) || typeof r2 == `function` ? e3 = r2 : typeof r2 == `string` && (e3 = [r2]), Array.isArray(e3)) for (let t3 of e3) t3 === `.dark` ? (n2 = false, y.warn(`darkmode-variant-without-selector`, ["When using `variant` for `darkMode`, you must provide a selector.", 'Example: `darkMode: ["variant", ".your-selector &"]`'])) : t3.includes(`&`) || (n2 = false, y.warn(`darkmode-variant-without-ampersand`, ["When using `variant` for `darkMode`, your selector must contain `&`.", 'Example `darkMode: ["variant", ".your-selector &"]`']));
    r2 = e3;
  }
  n2 === `selector` ? t2(`dark`, `&:where(${r2}, ${r2} *)`) : n2 === `media` ? t2(`dark`, `@media (prefers-color-scheme: dark)`) : n2 === `variant` ? t2(`dark`, r2) : n2 === `class` && t2(`dark`, `&:is(${r2} *)`);
}, printVariant: ({ addVariant: e2 }) => {
  e2(`print`, `@media print`);
}, screenVariants: ({ theme: e2, addVariant: t2, matchVariant: n2 }) => {
  let r2 = e2(`screens`) ?? {}, i2 = Object.values(r2).every((e3) => typeof e3 == `string`), a2 = zn(e2(`screens`)), o2 = /* @__PURE__ */ new Set([]);
  function s2(e3) {
    return e3.match(/(\D+)$/)?.[1] ?? `(none)`;
  }
  function c2(e3) {
    e3 !== void 0 && o2.add(s2(e3));
  }
  function l2(e3) {
    return c2(e3), o2.size === 1;
  }
  for (let e3 of a2) for (let t3 of e3.values) c2(t3.min), c2(t3.max);
  let u2 = o2.size <= 1;
  function d2(e3) {
    return Object.fromEntries(a2.filter((e4) => Bn(e4).result).map((t3) => {
      let { min: n3, max: r3 } = t3.values[0];
      if (e3 === `min` && n3 !== void 0) return t3;
      if (e3 === `min` && r3 !== void 0) return { ...t3, not: !t3.not };
      if (e3 === `max` && r3 !== void 0) return t3;
      if (e3 === `max` && n3 !== void 0) return { ...t3, not: !t3.not };
    }).map((e4) => [e4.name, e4]));
  }
  function f2(e3) {
    return (t3, n3) => Vn(e3, t3.value, n3.value);
  }
  let p2 = f2(`max`), m2 = f2(`min`);
  function h2(e3) {
    return (t3) => i2 ? u2 ? typeof t3 == `string` && !l2(t3) ? (y.warn(`minmax-have-mixed-units`, ["The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."]), []) : [`@media ${Dn(Hn(t3, e3))}`] : (y.warn(`mixed-screen-units`, ["The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."]), []) : (y.warn(`complex-screen-config`, ["The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects."]), []);
  }
  n2(`max`, h2(`max`), { sort: p2, values: i2 ? d2(`max`) : {} });
  let g2 = `min-screens`;
  for (let e3 of a2) t2(e3.name, `@media ${Dn(e3)}`, { id: g2, sort: i2 && u2 ? m2 : void 0, value: e3 });
  n2(`min`, h2(`min`), { id: g2, sort: m2 });
}, supportsVariants: ({ matchVariant: e2, theme: t2 }) => {
  e2(`supports`, (e3 = ``) => {
    let t3 = e3.startsWith(`--`) ? e3 : V(e3), n2 = /^[\w-]*\s*\(/.test(t3);
    return t3 = n2 ? t3.replace(/\b(and|or|not)\b/g, ` $1 `) : t3, n2 ? `@supports ${t3}` : (t3.includes(`:`) || (t3 = `${t3}: var(--tw)`), t3.startsWith(`(`) && t3.endsWith(`)`) || (t3 = `(${t3})`), `@supports ${t3}`);
  }, { values: t2(`supports`) ?? {} });
}, hasVariants: ({ matchVariant: e2, prefix: t2 }) => {
  e2(`has`, (e3) => `&:has(${V(e3)})`, { values: {}, [nr]: { respectPrefix: false } }), e2(`group-has`, (e3, { modifier: n2 }) => n2 ? `:merge(${t2(`.group`)}\\/${n2}):has(${V(e3)}) &` : `:merge(${t2(`.group`)}):has(${V(e3)}) &`, { values: {}, [nr]: { respectPrefix: false } }), e2(`peer-has`, (e3, { modifier: n2 }) => n2 ? `:merge(${t2(`.peer`)}\\/${n2}):has(${V(e3)}) ~ &` : `:merge(${t2(`.peer`)}):has(${V(e3)}) ~ &`, { values: {}, [nr]: { respectPrefix: false } });
}, ariaVariants: ({ matchVariant: e2, theme: t2 }) => {
  e2(`aria`, (e3) => `&[aria-${H(V(e3))}]`, { values: t2(`aria`) ?? {} }), e2(`group-aria`, (e3, { modifier: t3 }) => t3 ? `:merge(.group\\/${t3})[aria-${H(V(e3))}] &` : `:merge(.group)[aria-${H(V(e3))}] &`, { values: t2(`aria`) ?? {} }), e2(`peer-aria`, (e3, { modifier: t3 }) => t3 ? `:merge(.peer\\/${t3})[aria-${H(V(e3))}] ~ &` : `:merge(.peer)[aria-${H(V(e3))}] ~ &`, { values: t2(`aria`) ?? {} });
}, dataVariants: ({ matchVariant: e2, theme: t2 }) => {
  e2(`data`, (e3) => `&[data-${H(V(e3))}]`, { values: t2(`data`) ?? {} }), e2(`group-data`, (e3, { modifier: t3 }) => t3 ? `:merge(.group\\/${t3})[data-${H(V(e3))}] &` : `:merge(.group)[data-${H(V(e3))}] &`, { values: t2(`data`) ?? {} }), e2(`peer-data`, (e3, { modifier: t3 }) => t3 ? `:merge(.peer\\/${t3})[data-${H(V(e3))}] ~ &` : `:merge(.peer)[data-${H(V(e3))}] ~ &`, { values: t2(`data`) ?? {} });
}, orientationVariants: ({ addVariant: e2 }) => {
  e2(`portrait`, `@media (orientation: portrait)`), e2(`landscape`, `@media (orientation: landscape)`);
}, prefersContrastVariants: ({ addVariant: e2 }) => {
  e2(`contrast-more`, `@media (prefers-contrast: more)`), e2(`contrast-less`, `@media (prefers-contrast: less)`);
}, forcedColorsVariants: ({ addVariant: e2 }) => {
  e2(`forced-colors`, `@media (forced-colors: active)`);
} }, Z = [`translate(var(--tw-translate-x), var(--tw-translate-y))`, `rotate(var(--tw-rotate))`, `skewX(var(--tw-skew-x))`, `skewY(var(--tw-skew-y))`, `scaleX(var(--tw-scale-x))`, `scaleY(var(--tw-scale-y))`].join(` `), Q = [`var(--tw-blur)`, `var(--tw-brightness)`, `var(--tw-contrast)`, `var(--tw-grayscale)`, `var(--tw-hue-rotate)`, `var(--tw-invert)`, `var(--tw-saturate)`, `var(--tw-sepia)`, `var(--tw-drop-shadow)`].join(` `), $ = [`var(--tw-backdrop-blur)`, `var(--tw-backdrop-brightness)`, `var(--tw-backdrop-contrast)`, `var(--tw-backdrop-grayscale)`, `var(--tw-backdrop-hue-rotate)`, `var(--tw-backdrop-invert)`, `var(--tw-backdrop-opacity)`, `var(--tw-backdrop-saturate)`, `var(--tw-backdrop-sepia)`].join(` `), Gn = { preflight: ({ addBase: e2 }) => {
  let t2 = l.parse(Cn.default.readFileSync(En.join(`/`, `./css/preflight.css`), `utf8`));
  e2([l.comment({ text: `! tailwindcss v${n} | MIT License | https://tailwindcss.com` }), ...t2.nodes]);
}, container: /* @__PURE__ */ (() => {
  function e2(e3 = []) {
    return e3.flatMap((e4) => e4.values.map((e5) => e5.min)).filter((e4) => e4 !== void 0);
  }
  function t2(e3, t3, n2) {
    if (n2 === void 0) return [];
    if (!(typeof n2 == `object` && n2)) return [{ screen: `DEFAULT`, minWidth: 0, padding: n2 }];
    let r2 = [];
    n2.DEFAULT && r2.push({ screen: `DEFAULT`, minWidth: 0, padding: n2.DEFAULT });
    for (let i2 of e3) for (let e4 of t3) for (let { min: t4 } of e4.values) t4 === i2 && r2.push({ minWidth: i2, padding: n2[e4.name] });
    return r2;
  }
  return function({ addComponents: n2, theme: r2 }) {
    let i2 = zn(r2(`container.screens`, r2(`screens`))), a2 = e2(i2), o2 = t2(a2, i2, r2(`container.padding`)), s2 = (e3) => {
      let t3 = o2.find((t4) => t4.minWidth === e3);
      return t3 ? { paddingRight: t3.padding, paddingLeft: t3.padding } : {};
    }, c2 = Array.from(new Set(a2.slice().sort((e3, t3) => parseInt(e3) - parseInt(t3)))).map((e3) => ({ [`@media (min-width: ${e3})`]: { ".container": { "max-width": e3, ...s2(e3) } } }));
    n2([{ ".container": Object.assign({ width: `100%` }, r2(`container.center`, false) ? { marginRight: `auto`, marginLeft: `auto` } : {}, s2(0)) }, ...c2]);
  };
})(), accessibility: ({ addUtilities: e2 }) => {
  e2({ ".sr-only": { position: `absolute`, width: `1px`, height: `1px`, padding: `0`, margin: `-1px`, overflow: `hidden`, clip: `rect(0, 0, 0, 0)`, whiteSpace: `nowrap`, borderWidth: `0` }, ".not-sr-only": { position: `static`, width: `auto`, height: `auto`, padding: `0`, margin: `0`, overflow: `visible`, clip: `auto`, whiteSpace: `normal` } });
}, pointerEvents: ({ addUtilities: e2 }) => {
  e2({ ".pointer-events-none": { "pointer-events": `none` }, ".pointer-events-auto": { "pointer-events": `auto` } });
}, visibility: ({ addUtilities: e2 }) => {
  e2({ ".visible": { visibility: `visible` }, ".invisible": { visibility: `hidden` }, ".collapse": { visibility: `collapse` } });
}, position: ({ addUtilities: e2 }) => {
  e2({ ".static": { position: `static` }, ".fixed": { position: `fixed` }, ".absolute": { position: `absolute` }, ".relative": { position: `relative` }, ".sticky": { position: `sticky` } });
}, inset: q(`inset`, [[`inset`, [`inset`]], [[`inset-x`, [`left`, `right`]], [`inset-y`, [`top`, `bottom`]]], [[`start`, [`inset-inline-start`]], [`end`, [`inset-inline-end`]], [`top`, [`top`]], [`right`, [`right`]], [`bottom`, [`bottom`]], [`left`, [`left`]]]], { supportsNegativeValues: true }), isolation: ({ addUtilities: e2 }) => {
  e2({ ".isolate": { isolation: `isolate` }, ".isolation-auto": { isolation: `auto` } });
}, zIndex: q(`zIndex`, [[`z`, [`zIndex`]]], { supportsNegativeValues: true }), order: q(`order`, void 0, { supportsNegativeValues: true }), gridColumn: q(`gridColumn`, [[`col`, [`gridColumn`]]]), gridColumnStart: q(`gridColumnStart`, [[`col-start`, [`gridColumnStart`]]], { supportsNegativeValues: true }), gridColumnEnd: q(`gridColumnEnd`, [[`col-end`, [`gridColumnEnd`]]], { supportsNegativeValues: true }), gridRow: q(`gridRow`, [[`row`, [`gridRow`]]]), gridRowStart: q(`gridRowStart`, [[`row-start`, [`gridRowStart`]]], { supportsNegativeValues: true }), gridRowEnd: q(`gridRowEnd`, [[`row-end`, [`gridRowEnd`]]], { supportsNegativeValues: true }), float: ({ addUtilities: e2 }) => {
  e2({ ".float-start": { float: `inline-start` }, ".float-end": { float: `inline-end` }, ".float-right": { float: `right` }, ".float-left": { float: `left` }, ".float-none": { float: `none` } });
}, clear: ({ addUtilities: e2 }) => {
  e2({ ".clear-start": { clear: `inline-start` }, ".clear-end": { clear: `inline-end` }, ".clear-left": { clear: `left` }, ".clear-right": { clear: `right` }, ".clear-both": { clear: `both` }, ".clear-none": { clear: `none` } });
}, margin: q(`margin`, [[`m`, [`margin`]], [[`mx`, [`margin-left`, `margin-right`]], [`my`, [`margin-top`, `margin-bottom`]]], [[`ms`, [`margin-inline-start`]], [`me`, [`margin-inline-end`]], [`mt`, [`margin-top`]], [`mr`, [`margin-right`]], [`mb`, [`margin-bottom`]], [`ml`, [`margin-left`]]]], { supportsNegativeValues: true }), boxSizing: ({ addUtilities: e2 }) => {
  e2({ ".box-border": { "box-sizing": `border-box` }, ".box-content": { "box-sizing": `content-box` } });
}, lineClamp: ({ matchUtilities: e2, addUtilities: t2, theme: n2 }) => {
  e2({ "line-clamp": (e3) => ({ overflow: `hidden`, display: `-webkit-box`, "-webkit-box-orient": `vertical`, "-webkit-line-clamp": `${e3}` }) }, { values: n2(`lineClamp`) }), t2({ ".line-clamp-none": { overflow: `visible`, display: `block`, "-webkit-box-orient": `horizontal`, "-webkit-line-clamp": `none` } });
}, display: ({ addUtilities: e2 }) => {
  e2({ ".block": { display: `block` }, ".inline-block": { display: `inline-block` }, ".inline": { display: `inline` }, ".flex": { display: `flex` }, ".inline-flex": { display: `inline-flex` }, ".table": { display: `table` }, ".inline-table": { display: `inline-table` }, ".table-caption": { display: `table-caption` }, ".table-cell": { display: `table-cell` }, ".table-column": { display: `table-column` }, ".table-column-group": { display: `table-column-group` }, ".table-footer-group": { display: `table-footer-group` }, ".table-header-group": { display: `table-header-group` }, ".table-row-group": { display: `table-row-group` }, ".table-row": { display: `table-row` }, ".flow-root": { display: `flow-root` }, ".grid": { display: `grid` }, ".inline-grid": { display: `inline-grid` }, ".contents": { display: `contents` }, ".list-item": { display: `list-item` }, ".hidden": { display: `none` } });
}, aspectRatio: q(`aspectRatio`, [[`aspect`, [`aspect-ratio`]]]), size: q(`size`, [[`size`, [`width`, `height`]]]), height: q(`height`, [[`h`, [`height`]]]), maxHeight: q(`maxHeight`, [[`max-h`, [`maxHeight`]]]), minHeight: q(`minHeight`, [[`min-h`, [`minHeight`]]]), width: q(`width`, [[`w`, [`width`]]]), minWidth: q(`minWidth`, [[`min-w`, [`minWidth`]]]), maxWidth: q(`maxWidth`, [[`max-w`, [`maxWidth`]]]), flex: q(`flex`), flexShrink: q(`flexShrink`, [[`flex-shrink`, [`flex-shrink`]], [`shrink`, [`flex-shrink`]]]), flexGrow: q(`flexGrow`, [[`flex-grow`, [`flex-grow`]], [`grow`, [`flex-grow`]]]), flexBasis: q(`flexBasis`, [[`basis`, [`flex-basis`]]]), tableLayout: ({ addUtilities: e2 }) => {
  e2({ ".table-auto": { "table-layout": `auto` }, ".table-fixed": { "table-layout": `fixed` } });
}, captionSide: ({ addUtilities: e2 }) => {
  e2({ ".caption-top": { "caption-side": `top` }, ".caption-bottom": { "caption-side": `bottom` } });
}, borderCollapse: ({ addUtilities: e2 }) => {
  e2({ ".border-collapse": { "border-collapse": `collapse` }, ".border-separate": { "border-collapse": `separate` } });
}, borderSpacing: ({ addDefaults: e2, matchUtilities: t2, theme: n2 }) => {
  e2(`border-spacing`, { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 }), t2({ "border-spacing": (e3) => ({ "--tw-border-spacing-x": e3, "--tw-border-spacing-y": e3, "@defaults border-spacing": {}, "border-spacing": `var(--tw-border-spacing-x) var(--tw-border-spacing-y)` }), "border-spacing-x": (e3) => ({ "--tw-border-spacing-x": e3, "@defaults border-spacing": {}, "border-spacing": `var(--tw-border-spacing-x) var(--tw-border-spacing-y)` }), "border-spacing-y": (e3) => ({ "--tw-border-spacing-y": e3, "@defaults border-spacing": {}, "border-spacing": `var(--tw-border-spacing-x) var(--tw-border-spacing-y)` }) }, { values: n2(`borderSpacing`) });
}, transformOrigin: q(`transformOrigin`, [[`origin`, [`transformOrigin`]]]), translate: q(`translate`, [[[`translate-x`, [[`@defaults transform`, {}], `--tw-translate-x`, [`transform`, Z]]], [`translate-y`, [[`@defaults transform`, {}], `--tw-translate-y`, [`transform`, Z]]]]], { supportsNegativeValues: true }), rotate: q(`rotate`, [[`rotate`, [[`@defaults transform`, {}], `--tw-rotate`, [`transform`, Z]]]], { supportsNegativeValues: true }), skew: q(`skew`, [[[`skew-x`, [[`@defaults transform`, {}], `--tw-skew-x`, [`transform`, Z]]], [`skew-y`, [[`@defaults transform`, {}], `--tw-skew-y`, [`transform`, Z]]]]], { supportsNegativeValues: true }), scale: q(`scale`, [[`scale`, [[`@defaults transform`, {}], `--tw-scale-x`, `--tw-scale-y`, [`transform`, Z]]], [[`scale-x`, [[`@defaults transform`, {}], `--tw-scale-x`, [`transform`, Z]]], [`scale-y`, [[`@defaults transform`, {}], `--tw-scale-y`, [`transform`, Z]]]]], { supportsNegativeValues: true }), transform: ({ addDefaults: e2, addUtilities: t2 }) => {
  e2(`transform`, { "--tw-translate-x": `0`, "--tw-translate-y": `0`, "--tw-rotate": `0`, "--tw-skew-x": `0`, "--tw-skew-y": `0`, "--tw-scale-x": `1`, "--tw-scale-y": `1` }), t2({ ".transform": { "@defaults transform": {}, transform: Z }, ".transform-cpu": { transform: Z }, ".transform-gpu": { transform: Z.replace(`translate(var(--tw-translate-x), var(--tw-translate-y))`, `translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)`) }, ".transform-none": { transform: `none` } });
}, animation: ({ matchUtilities: e2, theme: t2, config: n2 }) => {
  let r2 = (e3) => K(n2(`prefix`) + e3), i2 = Object.fromEntries(Object.entries(t2(`keyframes`) ?? {}).map(([e3, t3]) => [e3, { [`@keyframes ${r2(e3)}`]: t3 }]));
  e2({ animate: (e3) => {
    let t3 = Rn(e3);
    return [...t3.flatMap((e4) => i2[e4.name]), { animation: t3.map(({ name: e4, value: t4 }) => e4 === void 0 || i2[e4] === void 0 ? t4 : t4.replace(e4, r2(e4))).join(`, `) }];
  } }, { values: t2(`animation`) });
}, cursor: q(`cursor`), touchAction: ({ addDefaults: e2, addUtilities: t2 }) => {
  e2(`touch-action`, { "--tw-pan-x": ` `, "--tw-pan-y": ` `, "--tw-pinch-zoom": ` ` });
  let n2 = `var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)`;
  t2({ ".touch-auto": { "touch-action": `auto` }, ".touch-none": { "touch-action": `none` }, ".touch-pan-x": { "@defaults touch-action": {}, "--tw-pan-x": `pan-x`, "touch-action": n2 }, ".touch-pan-left": { "@defaults touch-action": {}, "--tw-pan-x": `pan-left`, "touch-action": n2 }, ".touch-pan-right": { "@defaults touch-action": {}, "--tw-pan-x": `pan-right`, "touch-action": n2 }, ".touch-pan-y": { "@defaults touch-action": {}, "--tw-pan-y": `pan-y`, "touch-action": n2 }, ".touch-pan-up": { "@defaults touch-action": {}, "--tw-pan-y": `pan-up`, "touch-action": n2 }, ".touch-pan-down": { "@defaults touch-action": {}, "--tw-pan-y": `pan-down`, "touch-action": n2 }, ".touch-pinch-zoom": { "@defaults touch-action": {}, "--tw-pinch-zoom": `pinch-zoom`, "touch-action": n2 }, ".touch-manipulation": { "touch-action": `manipulation` } });
}, userSelect: ({ addUtilities: e2 }) => {
  e2({ ".select-none": { "user-select": `none` }, ".select-text": { "user-select": `text` }, ".select-all": { "user-select": `all` }, ".select-auto": { "user-select": `auto` } });
}, resize: ({ addUtilities: e2 }) => {
  e2({ ".resize-none": { resize: `none` }, ".resize-y": { resize: `vertical` }, ".resize-x": { resize: `horizontal` }, ".resize": { resize: `both` } });
}, scrollSnapType: ({ addDefaults: e2, addUtilities: t2 }) => {
  e2(`scroll-snap-type`, { "--tw-scroll-snap-strictness": `proximity` }), t2({ ".snap-none": { "scroll-snap-type": `none` }, ".snap-x": { "@defaults scroll-snap-type": {}, "scroll-snap-type": `x var(--tw-scroll-snap-strictness)` }, ".snap-y": { "@defaults scroll-snap-type": {}, "scroll-snap-type": `y var(--tw-scroll-snap-strictness)` }, ".snap-both": { "@defaults scroll-snap-type": {}, "scroll-snap-type": `both var(--tw-scroll-snap-strictness)` }, ".snap-mandatory": { "--tw-scroll-snap-strictness": `mandatory` }, ".snap-proximity": { "--tw-scroll-snap-strictness": `proximity` } });
}, scrollSnapAlign: ({ addUtilities: e2 }) => {
  e2({ ".snap-start": { "scroll-snap-align": `start` }, ".snap-end": { "scroll-snap-align": `end` }, ".snap-center": { "scroll-snap-align": `center` }, ".snap-align-none": { "scroll-snap-align": `none` } });
}, scrollSnapStop: ({ addUtilities: e2 }) => {
  e2({ ".snap-normal": { "scroll-snap-stop": `normal` }, ".snap-always": { "scroll-snap-stop": `always` } });
}, scrollMargin: q(`scrollMargin`, [[`scroll-m`, [`scroll-margin`]], [[`scroll-mx`, [`scroll-margin-left`, `scroll-margin-right`]], [`scroll-my`, [`scroll-margin-top`, `scroll-margin-bottom`]]], [[`scroll-ms`, [`scroll-margin-inline-start`]], [`scroll-me`, [`scroll-margin-inline-end`]], [`scroll-mt`, [`scroll-margin-top`]], [`scroll-mr`, [`scroll-margin-right`]], [`scroll-mb`, [`scroll-margin-bottom`]], [`scroll-ml`, [`scroll-margin-left`]]]], { supportsNegativeValues: true }), scrollPadding: q(`scrollPadding`, [[`scroll-p`, [`scroll-padding`]], [[`scroll-px`, [`scroll-padding-left`, `scroll-padding-right`]], [`scroll-py`, [`scroll-padding-top`, `scroll-padding-bottom`]]], [[`scroll-ps`, [`scroll-padding-inline-start`]], [`scroll-pe`, [`scroll-padding-inline-end`]], [`scroll-pt`, [`scroll-padding-top`]], [`scroll-pr`, [`scroll-padding-right`]], [`scroll-pb`, [`scroll-padding-bottom`]], [`scroll-pl`, [`scroll-padding-left`]]]]), listStylePosition: ({ addUtilities: e2 }) => {
  e2({ ".list-inside": { "list-style-position": `inside` }, ".list-outside": { "list-style-position": `outside` } });
}, listStyleType: q(`listStyleType`, [[`list`, [`listStyleType`]]]), listStyleImage: q(`listStyleImage`, [[`list-image`, [`listStyleImage`]]]), appearance: ({ addUtilities: e2 }) => {
  e2({ ".appearance-none": { appearance: `none` }, ".appearance-auto": { appearance: `auto` } });
}, columns: q(`columns`, [[`columns`, [`columns`]]]), breakBefore: ({ addUtilities: e2 }) => {
  e2({ ".break-before-auto": { "break-before": `auto` }, ".break-before-avoid": { "break-before": `avoid` }, ".break-before-all": { "break-before": `all` }, ".break-before-avoid-page": { "break-before": `avoid-page` }, ".break-before-page": { "break-before": `page` }, ".break-before-left": { "break-before": `left` }, ".break-before-right": { "break-before": `right` }, ".break-before-column": { "break-before": `column` } });
}, breakInside: ({ addUtilities: e2 }) => {
  e2({ ".break-inside-auto": { "break-inside": `auto` }, ".break-inside-avoid": { "break-inside": `avoid` }, ".break-inside-avoid-page": { "break-inside": `avoid-page` }, ".break-inside-avoid-column": { "break-inside": `avoid-column` } });
}, breakAfter: ({ addUtilities: e2 }) => {
  e2({ ".break-after-auto": { "break-after": `auto` }, ".break-after-avoid": { "break-after": `avoid` }, ".break-after-all": { "break-after": `all` }, ".break-after-avoid-page": { "break-after": `avoid-page` }, ".break-after-page": { "break-after": `page` }, ".break-after-left": { "break-after": `left` }, ".break-after-right": { "break-after": `right` }, ".break-after-column": { "break-after": `column` } });
}, gridAutoColumns: q(`gridAutoColumns`, [[`auto-cols`, [`gridAutoColumns`]]]), gridAutoFlow: ({ addUtilities: e2 }) => {
  e2({ ".grid-flow-row": { gridAutoFlow: `row` }, ".grid-flow-col": { gridAutoFlow: `column` }, ".grid-flow-dense": { gridAutoFlow: `dense` }, ".grid-flow-row-dense": { gridAutoFlow: `row dense` }, ".grid-flow-col-dense": { gridAutoFlow: `column dense` } });
}, gridAutoRows: q(`gridAutoRows`, [[`auto-rows`, [`gridAutoRows`]]]), gridTemplateColumns: q(`gridTemplateColumns`, [[`grid-cols`, [`gridTemplateColumns`]]]), gridTemplateRows: q(`gridTemplateRows`, [[`grid-rows`, [`gridTemplateRows`]]]), flexDirection: ({ addUtilities: e2 }) => {
  e2({ ".flex-row": { "flex-direction": `row` }, ".flex-row-reverse": { "flex-direction": `row-reverse` }, ".flex-col": { "flex-direction": `column` }, ".flex-col-reverse": { "flex-direction": `column-reverse` } });
}, flexWrap: ({ addUtilities: e2 }) => {
  e2({ ".flex-wrap": { "flex-wrap": `wrap` }, ".flex-wrap-reverse": { "flex-wrap": `wrap-reverse` }, ".flex-nowrap": { "flex-wrap": `nowrap` } });
}, placeContent: ({ addUtilities: e2 }) => {
  e2({ ".place-content-center": { "place-content": `center` }, ".place-content-start": { "place-content": `start` }, ".place-content-end": { "place-content": `end` }, ".place-content-between": { "place-content": `space-between` }, ".place-content-around": { "place-content": `space-around` }, ".place-content-evenly": { "place-content": `space-evenly` }, ".place-content-baseline": { "place-content": `baseline` }, ".place-content-stretch": { "place-content": `stretch` } });
}, placeItems: ({ addUtilities: e2 }) => {
  e2({ ".place-items-start": { "place-items": `start` }, ".place-items-end": { "place-items": `end` }, ".place-items-center": { "place-items": `center` }, ".place-items-baseline": { "place-items": `baseline` }, ".place-items-stretch": { "place-items": `stretch` } });
}, alignContent: ({ addUtilities: e2 }) => {
  e2({ ".content-normal": { "align-content": `normal` }, ".content-center": { "align-content": `center` }, ".content-start": { "align-content": `flex-start` }, ".content-end": { "align-content": `flex-end` }, ".content-between": { "align-content": `space-between` }, ".content-around": { "align-content": `space-around` }, ".content-evenly": { "align-content": `space-evenly` }, ".content-baseline": { "align-content": `baseline` }, ".content-stretch": { "align-content": `stretch` } });
}, alignItems: ({ addUtilities: e2 }) => {
  e2({ ".items-start": { "align-items": `flex-start` }, ".items-end": { "align-items": `flex-end` }, ".items-center": { "align-items": `center` }, ".items-baseline": { "align-items": `baseline` }, ".items-stretch": { "align-items": `stretch` } });
}, justifyContent: ({ addUtilities: e2 }) => {
  e2({ ".justify-normal": { "justify-content": `normal` }, ".justify-start": { "justify-content": `flex-start` }, ".justify-end": { "justify-content": `flex-end` }, ".justify-center": { "justify-content": `center` }, ".justify-between": { "justify-content": `space-between` }, ".justify-around": { "justify-content": `space-around` }, ".justify-evenly": { "justify-content": `space-evenly` }, ".justify-stretch": { "justify-content": `stretch` } });
}, justifyItems: ({ addUtilities: e2 }) => {
  e2({ ".justify-items-start": { "justify-items": `start` }, ".justify-items-end": { "justify-items": `end` }, ".justify-items-center": { "justify-items": `center` }, ".justify-items-stretch": { "justify-items": `stretch` } });
}, gap: q(`gap`, [[`gap`, [`gap`]], [[`gap-x`, [`columnGap`]], [`gap-y`, [`rowGap`]]]]), space: ({ matchUtilities: e2, addUtilities: t2, theme: n2 }) => {
  e2({ "space-x": (e3) => (e3 = e3 === `0` ? `0px` : e3, { "& > :not([hidden]) ~ :not([hidden])": { "--tw-space-x-reverse": `0`, "margin-right": `calc(${e3} * var(--tw-space-x-reverse))`, "margin-left": `calc(${e3} * calc(1 - var(--tw-space-x-reverse)))` } }), "space-y": (e3) => (e3 = e3 === `0` ? `0px` : e3, { "& > :not([hidden]) ~ :not([hidden])": { "--tw-space-y-reverse": `0`, "margin-top": `calc(${e3} * calc(1 - var(--tw-space-y-reverse)))`, "margin-bottom": `calc(${e3} * var(--tw-space-y-reverse))` } }) }, { values: n2(`space`), supportsNegativeValues: true }), t2({ ".space-y-reverse > :not([hidden]) ~ :not([hidden])": { "--tw-space-y-reverse": `1` }, ".space-x-reverse > :not([hidden]) ~ :not([hidden])": { "--tw-space-x-reverse": `1` } });
}, divideWidth: ({ matchUtilities: e2, addUtilities: t2, theme: n2 }) => {
  e2({ "divide-x": (e3) => (e3 = e3 === `0` ? `0px` : e3, { "& > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-x-reverse": `0`, "border-right-width": `calc(${e3} * var(--tw-divide-x-reverse))`, "border-left-width": `calc(${e3} * calc(1 - var(--tw-divide-x-reverse)))` } }), "divide-y": (e3) => (e3 = e3 === `0` ? `0px` : e3, { "& > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-y-reverse": `0`, "border-top-width": `calc(${e3} * calc(1 - var(--tw-divide-y-reverse)))`, "border-bottom-width": `calc(${e3} * var(--tw-divide-y-reverse))` } }) }, { values: n2(`divideWidth`), type: [`line-width`, `length`, `any`] }), t2({ ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-y-reverse": `1` }, ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": { "@defaults border-width": {}, "--tw-divide-x-reverse": `1` } });
}, divideStyle: ({ addUtilities: e2 }) => {
  e2({ ".divide-solid > :not([hidden]) ~ :not([hidden])": { "border-style": `solid` }, ".divide-dashed > :not([hidden]) ~ :not([hidden])": { "border-style": `dashed` }, ".divide-dotted > :not([hidden]) ~ :not([hidden])": { "border-style": `dotted` }, ".divide-double > :not([hidden]) ~ :not([hidden])": { "border-style": `double` }, ".divide-none > :not([hidden]) ~ :not([hidden])": { "border-style": `none` } });
}, divideColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
  e2({ divide: (e3) => n2(`divideOpacity`) ? { "& > :not([hidden]) ~ :not([hidden])": z({ color: e3, property: `border-color`, variable: `--tw-divide-opacity` }) } : { "& > :not([hidden]) ~ :not([hidden])": { "border-color": Y(e3) } } }, { values: (({ DEFAULT: e3, ...t3 }) => t3)(J(t2(`divideColor`))), type: [`color`, `any`] });
}, divideOpacity: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "divide-opacity": (e3) => ({ "& > :not([hidden]) ~ :not([hidden])": { "--tw-divide-opacity": e3 } }) }, { values: t2(`divideOpacity`) });
}, placeSelf: ({ addUtilities: e2 }) => {
  e2({ ".place-self-auto": { "place-self": `auto` }, ".place-self-start": { "place-self": `start` }, ".place-self-end": { "place-self": `end` }, ".place-self-center": { "place-self": `center` }, ".place-self-stretch": { "place-self": `stretch` } });
}, alignSelf: ({ addUtilities: e2 }) => {
  e2({ ".self-auto": { "align-self": `auto` }, ".self-start": { "align-self": `flex-start` }, ".self-end": { "align-self": `flex-end` }, ".self-center": { "align-self": `center` }, ".self-stretch": { "align-self": `stretch` }, ".self-baseline": { "align-self": `baseline` } });
}, justifySelf: ({ addUtilities: e2 }) => {
  e2({ ".justify-self-auto": { "justify-self": `auto` }, ".justify-self-start": { "justify-self": `start` }, ".justify-self-end": { "justify-self": `end` }, ".justify-self-center": { "justify-self": `center` }, ".justify-self-stretch": { "justify-self": `stretch` } });
}, overflow: ({ addUtilities: e2 }) => {
  e2({ ".overflow-auto": { overflow: `auto` }, ".overflow-hidden": { overflow: `hidden` }, ".overflow-clip": { overflow: `clip` }, ".overflow-visible": { overflow: `visible` }, ".overflow-scroll": { overflow: `scroll` }, ".overflow-x-auto": { "overflow-x": `auto` }, ".overflow-y-auto": { "overflow-y": `auto` }, ".overflow-x-hidden": { "overflow-x": `hidden` }, ".overflow-y-hidden": { "overflow-y": `hidden` }, ".overflow-x-clip": { "overflow-x": `clip` }, ".overflow-y-clip": { "overflow-y": `clip` }, ".overflow-x-visible": { "overflow-x": `visible` }, ".overflow-y-visible": { "overflow-y": `visible` }, ".overflow-x-scroll": { "overflow-x": `scroll` }, ".overflow-y-scroll": { "overflow-y": `scroll` } });
}, overscrollBehavior: ({ addUtilities: e2 }) => {
  e2({ ".overscroll-auto": { "overscroll-behavior": `auto` }, ".overscroll-contain": { "overscroll-behavior": `contain` }, ".overscroll-none": { "overscroll-behavior": `none` }, ".overscroll-y-auto": { "overscroll-behavior-y": `auto` }, ".overscroll-y-contain": { "overscroll-behavior-y": `contain` }, ".overscroll-y-none": { "overscroll-behavior-y": `none` }, ".overscroll-x-auto": { "overscroll-behavior-x": `auto` }, ".overscroll-x-contain": { "overscroll-behavior-x": `contain` }, ".overscroll-x-none": { "overscroll-behavior-x": `none` } });
}, scrollBehavior: ({ addUtilities: e2 }) => {
  e2({ ".scroll-auto": { "scroll-behavior": `auto` }, ".scroll-smooth": { "scroll-behavior": `smooth` } });
}, textOverflow: ({ addUtilities: e2 }) => {
  e2({ ".truncate": { overflow: `hidden`, "text-overflow": `ellipsis`, "white-space": `nowrap` }, ".overflow-ellipsis": { "text-overflow": `ellipsis` }, ".text-ellipsis": { "text-overflow": `ellipsis` }, ".text-clip": { "text-overflow": `clip` } });
}, hyphens: ({ addUtilities: e2 }) => {
  e2({ ".hyphens-none": { hyphens: `none` }, ".hyphens-manual": { hyphens: `manual` }, ".hyphens-auto": { hyphens: `auto` } });
}, whitespace: ({ addUtilities: e2 }) => {
  e2({ ".whitespace-normal": { "white-space": `normal` }, ".whitespace-nowrap": { "white-space": `nowrap` }, ".whitespace-pre": { "white-space": `pre` }, ".whitespace-pre-line": { "white-space": `pre-line` }, ".whitespace-pre-wrap": { "white-space": `pre-wrap` }, ".whitespace-break-spaces": { "white-space": `break-spaces` } });
}, textWrap: ({ addUtilities: e2 }) => {
  e2({ ".text-wrap": { "text-wrap": `wrap` }, ".text-nowrap": { "text-wrap": `nowrap` }, ".text-balance": { "text-wrap": `balance` }, ".text-pretty": { "text-wrap": `pretty` } });
}, wordBreak: ({ addUtilities: e2 }) => {
  e2({ ".break-normal": { "overflow-wrap": `normal`, "word-break": `normal` }, ".break-words": { "overflow-wrap": `break-word` }, ".break-all": { "word-break": `break-all` }, ".break-keep": { "word-break": `keep-all` } });
}, borderRadius: q(`borderRadius`, [[`rounded`, [`border-radius`]], [[`rounded-s`, [`border-start-start-radius`, `border-end-start-radius`]], [`rounded-e`, [`border-start-end-radius`, `border-end-end-radius`]], [`rounded-t`, [`border-top-left-radius`, `border-top-right-radius`]], [`rounded-r`, [`border-top-right-radius`, `border-bottom-right-radius`]], [`rounded-b`, [`border-bottom-right-radius`, `border-bottom-left-radius`]], [`rounded-l`, [`border-top-left-radius`, `border-bottom-left-radius`]]], [[`rounded-ss`, [`border-start-start-radius`]], [`rounded-se`, [`border-start-end-radius`]], [`rounded-ee`, [`border-end-end-radius`]], [`rounded-es`, [`border-end-start-radius`]], [`rounded-tl`, [`border-top-left-radius`]], [`rounded-tr`, [`border-top-right-radius`]], [`rounded-br`, [`border-bottom-right-radius`]], [`rounded-bl`, [`border-bottom-left-radius`]]]]), borderWidth: q(`borderWidth`, [[`border`, [[`@defaults border-width`, {}], `border-width`]], [[`border-x`, [[`@defaults border-width`, {}], `border-left-width`, `border-right-width`]], [`border-y`, [[`@defaults border-width`, {}], `border-top-width`, `border-bottom-width`]]], [[`border-s`, [[`@defaults border-width`, {}], `border-inline-start-width`]], [`border-e`, [[`@defaults border-width`, {}], `border-inline-end-width`]], [`border-t`, [[`@defaults border-width`, {}], `border-top-width`]], [`border-r`, [[`@defaults border-width`, {}], `border-right-width`]], [`border-b`, [[`@defaults border-width`, {}], `border-bottom-width`]], [`border-l`, [[`@defaults border-width`, {}], `border-left-width`]]]], { type: [`line-width`, `length`] }), borderStyle: ({ addUtilities: e2 }) => {
  e2({ ".border-solid": { "border-style": `solid` }, ".border-dashed": { "border-style": `dashed` }, ".border-dotted": { "border-style": `dotted` }, ".border-double": { "border-style": `double` }, ".border-hidden": { "border-style": `hidden` }, ".border-none": { "border-style": `none` } });
}, borderColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
  e2({ border: (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-color`, variable: `--tw-border-opacity` }) : { "border-color": Y(e3) } }, { values: (({ DEFAULT: e3, ...t3 }) => t3)(J(t2(`borderColor`))), type: [`color`, `any`] }), e2({ "border-x": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: [`border-left-color`, `border-right-color`], variable: `--tw-border-opacity` }) : { "border-left-color": Y(e3), "border-right-color": Y(e3) }, "border-y": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: [`border-top-color`, `border-bottom-color`], variable: `--tw-border-opacity` }) : { "border-top-color": Y(e3), "border-bottom-color": Y(e3) } }, { values: (({ DEFAULT: e3, ...t3 }) => t3)(J(t2(`borderColor`))), type: [`color`, `any`] }), e2({ "border-s": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-inline-start-color`, variable: `--tw-border-opacity` }) : { "border-inline-start-color": Y(e3) }, "border-e": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-inline-end-color`, variable: `--tw-border-opacity` }) : { "border-inline-end-color": Y(e3) }, "border-t": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-top-color`, variable: `--tw-border-opacity` }) : { "border-top-color": Y(e3) }, "border-r": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-right-color`, variable: `--tw-border-opacity` }) : { "border-right-color": Y(e3) }, "border-b": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-bottom-color`, variable: `--tw-border-opacity` }) : { "border-bottom-color": Y(e3) }, "border-l": (e3) => n2(`borderOpacity`) ? z({ color: e3, property: `border-left-color`, variable: `--tw-border-opacity` }) : { "border-left-color": Y(e3) } }, { values: (({ DEFAULT: e3, ...t3 }) => t3)(J(t2(`borderColor`))), type: [`color`, `any`] });
}, borderOpacity: q(`borderOpacity`, [[`border-opacity`, [`--tw-border-opacity`]]]), backgroundColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
  e2({ bg: (e3) => n2(`backgroundOpacity`) ? z({ color: e3, property: `background-color`, variable: `--tw-bg-opacity` }) : { "background-color": Y(e3) } }, { values: J(t2(`backgroundColor`)), type: [`color`, `any`] });
}, backgroundOpacity: q(`backgroundOpacity`, [[`bg-opacity`, [`--tw-bg-opacity`]]]), backgroundImage: q(`backgroundImage`, [[`bg`, [`background-image`]]], { type: [`lookup`, `image`, `url`] }), gradientColorStops: /* @__PURE__ */ (() => {
  function e2(e3) {
    return Ue(e3, 0, `rgb(255 255 255 / 0)`);
  }
  return function({ matchUtilities: t2, theme: n2, addDefaults: r2 }) {
    r2(`gradient-color-stops`, { "--tw-gradient-from-position": ` `, "--tw-gradient-via-position": ` `, "--tw-gradient-to-position": ` ` });
    let i2 = { values: J(n2(`gradientColorStops`)), type: [`color`, `any`] }, a2 = { values: n2(`gradientColorStopPositions`), type: [`length`, `percentage`] };
    t2({ from: (t3) => {
      let n3 = e2(t3);
      return { "@defaults gradient-color-stops": {}, "--tw-gradient-from": `${Y(t3)} var(--tw-gradient-from-position)`, "--tw-gradient-to": `${n3} var(--tw-gradient-to-position)`, "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)` };
    } }, i2), t2({ from: (e3) => ({ "--tw-gradient-from-position": e3 }) }, a2), t2({ via: (t3) => ({ "@defaults gradient-color-stops": {}, "--tw-gradient-to": `${e2(t3)}  var(--tw-gradient-to-position)`, "--tw-gradient-stops": `var(--tw-gradient-from), ${Y(t3)} var(--tw-gradient-via-position), var(--tw-gradient-to)` }) }, i2), t2({ via: (e3) => ({ "--tw-gradient-via-position": e3 }) }, a2), t2({ to: (e3) => ({ "@defaults gradient-color-stops": {}, "--tw-gradient-to": `${Y(e3)} var(--tw-gradient-to-position)` }) }, i2), t2({ to: (e3) => ({ "--tw-gradient-to-position": e3 }) }, a2);
  };
})(), boxDecorationBreak: ({ addUtilities: e2 }) => {
  e2({ ".decoration-slice": { "box-decoration-break": `slice` }, ".decoration-clone": { "box-decoration-break": `clone` }, ".box-decoration-slice": { "box-decoration-break": `slice` }, ".box-decoration-clone": { "box-decoration-break": `clone` } });
}, backgroundSize: q(`backgroundSize`, [[`bg`, [`background-size`]]], { type: [`lookup`, `length`, `percentage`, `size`] }), backgroundAttachment: ({ addUtilities: e2 }) => {
  e2({ ".bg-fixed": { "background-attachment": `fixed` }, ".bg-local": { "background-attachment": `local` }, ".bg-scroll": { "background-attachment": `scroll` } });
}, backgroundClip: ({ addUtilities: e2 }) => {
  e2({ ".bg-clip-border": { "background-clip": `border-box` }, ".bg-clip-padding": { "background-clip": `padding-box` }, ".bg-clip-content": { "background-clip": `content-box` }, ".bg-clip-text": { "background-clip": `text` } });
}, backgroundPosition: q(`backgroundPosition`, [[`bg`, [`background-position`]]], { type: [`lookup`, [`position`, { preferOnConflict: true }]] }), backgroundRepeat: ({ addUtilities: e2 }) => {
  e2({ ".bg-repeat": { "background-repeat": `repeat` }, ".bg-no-repeat": { "background-repeat": `no-repeat` }, ".bg-repeat-x": { "background-repeat": `repeat-x` }, ".bg-repeat-y": { "background-repeat": `repeat-y` }, ".bg-repeat-round": { "background-repeat": `round` }, ".bg-repeat-space": { "background-repeat": `space` } });
}, backgroundOrigin: ({ addUtilities: e2 }) => {
  e2({ ".bg-origin-border": { "background-origin": `border-box` }, ".bg-origin-padding": { "background-origin": `padding-box` }, ".bg-origin-content": { "background-origin": `content-box` } });
}, fill: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ fill: (e3) => ({ fill: Y(e3) }) }, { values: J(t2(`fill`)), type: [`color`, `any`] });
}, stroke: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ stroke: (e3) => ({ stroke: Y(e3) }) }, { values: J(t2(`stroke`)), type: [`color`, `url`, `any`] });
}, strokeWidth: q(`strokeWidth`, [[`stroke`, [`stroke-width`]]], { type: [`length`, `number`, `percentage`] }), objectFit: ({ addUtilities: e2 }) => {
  e2({ ".object-contain": { "object-fit": `contain` }, ".object-cover": { "object-fit": `cover` }, ".object-fill": { "object-fit": `fill` }, ".object-none": { "object-fit": `none` }, ".object-scale-down": { "object-fit": `scale-down` } });
}, objectPosition: q(`objectPosition`, [[`object`, [`object-position`]]]), padding: q(`padding`, [[`p`, [`padding`]], [[`px`, [`padding-left`, `padding-right`]], [`py`, [`padding-top`, `padding-bottom`]]], [[`ps`, [`padding-inline-start`]], [`pe`, [`padding-inline-end`]], [`pt`, [`padding-top`]], [`pr`, [`padding-right`]], [`pb`, [`padding-bottom`]], [`pl`, [`padding-left`]]]]), textAlign: ({ addUtilities: e2 }) => {
  e2({ ".text-left": { "text-align": `left` }, ".text-center": { "text-align": `center` }, ".text-right": { "text-align": `right` }, ".text-justify": { "text-align": `justify` }, ".text-start": { "text-align": `start` }, ".text-end": { "text-align": `end` } });
}, textIndent: q(`textIndent`, [[`indent`, [`text-indent`]]], { supportsNegativeValues: true }), verticalAlign: ({ addUtilities: e2, matchUtilities: t2 }) => {
  e2({ ".align-baseline": { "vertical-align": `baseline` }, ".align-top": { "vertical-align": `top` }, ".align-middle": { "vertical-align": `middle` }, ".align-bottom": { "vertical-align": `bottom` }, ".align-text-top": { "vertical-align": `text-top` }, ".align-text-bottom": { "vertical-align": `text-bottom` }, ".align-sub": { "vertical-align": `sub` }, ".align-super": { "vertical-align": `super` } }), t2({ align: (e3) => ({ "vertical-align": e3 }) });
}, fontFamily: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ font: (e3) => {
    let [t3, n2 = {}] = Array.isArray(e3) && I(e3[1]) ? e3 : [e3], { fontFeatureSettings: r2, fontVariationSettings: i2 } = n2;
    return { "font-family": Array.isArray(t3) ? t3.join(`, `) : t3, ...r2 === void 0 ? {} : { "font-feature-settings": r2 }, ...i2 === void 0 ? {} : { "font-variation-settings": i2 } };
  } }, { values: t2(`fontFamily`), type: [`lookup`, `generic-name`, `family-name`] });
}, fontSize: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ text: (e3, { modifier: t3 }) => {
    let [n2, r2] = Array.isArray(e3) ? e3 : [e3];
    if (t3) return { "font-size": n2, "line-height": t3 };
    let { lineHeight: i2, letterSpacing: a2, fontWeight: o2 } = I(r2) ? r2 : { lineHeight: r2 };
    return { "font-size": n2, ...i2 === void 0 ? {} : { "line-height": i2 }, ...a2 === void 0 ? {} : { "letter-spacing": a2 }, ...o2 === void 0 ? {} : { "font-weight": o2 } };
  } }, { values: t2(`fontSize`), modifiers: t2(`lineHeight`), type: [`absolute-size`, `relative-size`, `length`, `percentage`] });
}, fontWeight: q(`fontWeight`, [[`font`, [`fontWeight`]]], { type: [`lookup`, `number`, `any`] }), textTransform: ({ addUtilities: e2 }) => {
  e2({ ".uppercase": { "text-transform": `uppercase` }, ".lowercase": { "text-transform": `lowercase` }, ".capitalize": { "text-transform": `capitalize` }, ".normal-case": { "text-transform": `none` } });
}, fontStyle: ({ addUtilities: e2 }) => {
  e2({ ".italic": { "font-style": `italic` }, ".not-italic": { "font-style": `normal` } });
}, fontVariantNumeric: ({ addDefaults: e2, addUtilities: t2 }) => {
  let n2 = `var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)`;
  e2(`font-variant-numeric`, { "--tw-ordinal": ` `, "--tw-slashed-zero": ` `, "--tw-numeric-figure": ` `, "--tw-numeric-spacing": ` `, "--tw-numeric-fraction": ` ` }), t2({ ".normal-nums": { "font-variant-numeric": `normal` }, ".ordinal": { "@defaults font-variant-numeric": {}, "--tw-ordinal": `ordinal`, "font-variant-numeric": n2 }, ".slashed-zero": { "@defaults font-variant-numeric": {}, "--tw-slashed-zero": `slashed-zero`, "font-variant-numeric": n2 }, ".lining-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-figure": `lining-nums`, "font-variant-numeric": n2 }, ".oldstyle-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-figure": `oldstyle-nums`, "font-variant-numeric": n2 }, ".proportional-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-spacing": `proportional-nums`, "font-variant-numeric": n2 }, ".tabular-nums": { "@defaults font-variant-numeric": {}, "--tw-numeric-spacing": `tabular-nums`, "font-variant-numeric": n2 }, ".diagonal-fractions": { "@defaults font-variant-numeric": {}, "--tw-numeric-fraction": `diagonal-fractions`, "font-variant-numeric": n2 }, ".stacked-fractions": { "@defaults font-variant-numeric": {}, "--tw-numeric-fraction": `stacked-fractions`, "font-variant-numeric": n2 } });
}, lineHeight: q(`lineHeight`, [[`leading`, [`lineHeight`]]]), letterSpacing: q(`letterSpacing`, [[`tracking`, [`letterSpacing`]]], { supportsNegativeValues: true }), textColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
  e2({ text: (e3) => n2(`textOpacity`) ? z({ color: e3, property: `color`, variable: `--tw-text-opacity` }) : { color: Y(e3) } }, { values: J(t2(`textColor`)), type: [`color`, `any`] });
}, textOpacity: q(`textOpacity`, [[`text-opacity`, [`--tw-text-opacity`]]]), textDecoration: ({ addUtilities: e2 }) => {
  e2({ ".underline": { "text-decoration-line": `underline` }, ".overline": { "text-decoration-line": `overline` }, ".line-through": { "text-decoration-line": `line-through` }, ".no-underline": { "text-decoration-line": `none` } });
}, textDecorationColor: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ decoration: (e3) => ({ "text-decoration-color": Y(e3) }) }, { values: J(t2(`textDecorationColor`)), type: [`color`, `any`] });
}, textDecorationStyle: ({ addUtilities: e2 }) => {
  e2({ ".decoration-solid": { "text-decoration-style": `solid` }, ".decoration-double": { "text-decoration-style": `double` }, ".decoration-dotted": { "text-decoration-style": `dotted` }, ".decoration-dashed": { "text-decoration-style": `dashed` }, ".decoration-wavy": { "text-decoration-style": `wavy` } });
}, textDecorationThickness: q(`textDecorationThickness`, [[`decoration`, [`text-decoration-thickness`]]], { type: [`length`, `percentage`] }), textUnderlineOffset: q(`textUnderlineOffset`, [[`underline-offset`, [`text-underline-offset`]]], { type: [`length`, `percentage`, `any`] }), fontSmoothing: ({ addUtilities: e2 }) => {
  e2({ ".antialiased": { "-webkit-font-smoothing": `antialiased`, "-moz-osx-font-smoothing": `grayscale` }, ".subpixel-antialiased": { "-webkit-font-smoothing": `auto`, "-moz-osx-font-smoothing": `auto` } });
}, placeholderColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
  e2({ placeholder: (e3) => n2(`placeholderOpacity`) ? { "&::placeholder": z({ color: e3, property: `color`, variable: `--tw-placeholder-opacity` }) } : { "&::placeholder": { color: Y(e3) } } }, { values: J(t2(`placeholderColor`)), type: [`color`, `any`] });
}, placeholderOpacity: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "placeholder-opacity": (e3) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } }) }, { values: t2(`placeholderOpacity`) });
}, caretColor: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ caret: (e3) => ({ "caret-color": Y(e3) }) }, { values: J(t2(`caretColor`)), type: [`color`, `any`] });
}, accentColor: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ accent: (e3) => ({ "accent-color": Y(e3) }) }, { values: J(t2(`accentColor`)), type: [`color`, `any`] });
}, opacity: q(`opacity`, [[`opacity`, [`opacity`]]]), backgroundBlendMode: ({ addUtilities: e2 }) => {
  e2({ ".bg-blend-normal": { "background-blend-mode": `normal` }, ".bg-blend-multiply": { "background-blend-mode": `multiply` }, ".bg-blend-screen": { "background-blend-mode": `screen` }, ".bg-blend-overlay": { "background-blend-mode": `overlay` }, ".bg-blend-darken": { "background-blend-mode": `darken` }, ".bg-blend-lighten": { "background-blend-mode": `lighten` }, ".bg-blend-color-dodge": { "background-blend-mode": `color-dodge` }, ".bg-blend-color-burn": { "background-blend-mode": `color-burn` }, ".bg-blend-hard-light": { "background-blend-mode": `hard-light` }, ".bg-blend-soft-light": { "background-blend-mode": `soft-light` }, ".bg-blend-difference": { "background-blend-mode": `difference` }, ".bg-blend-exclusion": { "background-blend-mode": `exclusion` }, ".bg-blend-hue": { "background-blend-mode": `hue` }, ".bg-blend-saturation": { "background-blend-mode": `saturation` }, ".bg-blend-color": { "background-blend-mode": `color` }, ".bg-blend-luminosity": { "background-blend-mode": `luminosity` } });
}, mixBlendMode: ({ addUtilities: e2 }) => {
  e2({ ".mix-blend-normal": { "mix-blend-mode": `normal` }, ".mix-blend-multiply": { "mix-blend-mode": `multiply` }, ".mix-blend-screen": { "mix-blend-mode": `screen` }, ".mix-blend-overlay": { "mix-blend-mode": `overlay` }, ".mix-blend-darken": { "mix-blend-mode": `darken` }, ".mix-blend-lighten": { "mix-blend-mode": `lighten` }, ".mix-blend-color-dodge": { "mix-blend-mode": `color-dodge` }, ".mix-blend-color-burn": { "mix-blend-mode": `color-burn` }, ".mix-blend-hard-light": { "mix-blend-mode": `hard-light` }, ".mix-blend-soft-light": { "mix-blend-mode": `soft-light` }, ".mix-blend-difference": { "mix-blend-mode": `difference` }, ".mix-blend-exclusion": { "mix-blend-mode": `exclusion` }, ".mix-blend-hue": { "mix-blend-mode": `hue` }, ".mix-blend-saturation": { "mix-blend-mode": `saturation` }, ".mix-blend-color": { "mix-blend-mode": `color` }, ".mix-blend-luminosity": { "mix-blend-mode": `luminosity` }, ".mix-blend-plus-darker": { "mix-blend-mode": `plus-darker` }, ".mix-blend-plus-lighter": { "mix-blend-mode": `plus-lighter` } });
}, boxShadow: (() => {
  let e2 = Tn(`boxShadow`), t2 = [`var(--tw-ring-offset-shadow, 0 0 #0000)`, `var(--tw-ring-shadow, 0 0 #0000)`, `var(--tw-shadow)`].join(`, `);
  return function({ matchUtilities: n2, addDefaults: r2, theme: i2 }) {
    r2(`box-shadow`, { "--tw-ring-offset-shadow": `0 0 #0000`, "--tw-ring-shadow": `0 0 #0000`, "--tw-shadow": `0 0 #0000`, "--tw-shadow-colored": `0 0 #0000` }), n2({ shadow: (n3) => {
      n3 = e2(n3);
      let r3 = ft(n3);
      for (let e3 of r3) e3.valid && (e3.color = `var(--tw-shadow-color)`);
      return { "@defaults box-shadow": {}, "--tw-shadow": n3 === `none` ? `0 0 #0000` : n3, "--tw-shadow-colored": n3 === `none` ? `0 0 #0000` : pt(r3), "box-shadow": t2 };
    } }, { values: i2(`boxShadow`), type: [`shadow`] });
  };
})(), boxShadowColor: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ shadow: (e3) => ({ "--tw-shadow-color": Y(e3), "--tw-shadow": `var(--tw-shadow-colored)` }) }, { values: J(t2(`boxShadowColor`)), type: [`color`, `any`] });
}, outlineStyle: ({ addUtilities: e2 }) => {
  e2({ ".outline-none": { outline: `2px solid transparent`, "outline-offset": `2px` }, ".outline": { "outline-style": `solid` }, ".outline-dashed": { "outline-style": `dashed` }, ".outline-dotted": { "outline-style": `dotted` }, ".outline-double": { "outline-style": `double` } });
}, outlineWidth: q(`outlineWidth`, [[`outline`, [`outline-width`]]], { type: [`length`, `number`, `percentage`] }), outlineOffset: q(`outlineOffset`, [[`outline-offset`, [`outline-offset`]]], { type: [`length`, `number`, `percentage`, `any`], supportsNegativeValues: true }), outlineColor: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ outline: (e3) => ({ "outline-color": Y(e3) }) }, { values: J(t2(`outlineColor`)), type: [`color`, `any`] });
}, ringWidth: ({ matchUtilities: e2, addDefaults: t2, addUtilities: n2, theme: r2, config: i2 }) => {
  let a2 = (() => {
    if (U(i2(), `respectDefaultRingColorOpacity`)) return r2(`ringColor.DEFAULT`);
    let e3 = r2(`ringOpacity.DEFAULT`, `0.5`);
    return r2(`ringColor`)?.DEFAULT ? Ue(r2(`ringColor`)?.DEFAULT, e3, `rgb(147 197 253 / ${e3})`) : `rgb(147 197 253 / ${e3})`;
  })();
  t2(`ring-width`, { "--tw-ring-inset": ` `, "--tw-ring-offset-width": r2(`ringOffsetWidth.DEFAULT`, `0px`), "--tw-ring-offset-color": r2(`ringOffsetColor.DEFAULT`, `#fff`), "--tw-ring-color": a2, "--tw-ring-offset-shadow": `0 0 #0000`, "--tw-ring-shadow": `0 0 #0000`, "--tw-shadow": `0 0 #0000`, "--tw-shadow-colored": `0 0 #0000` }), e2({ ring: (e3) => ({ "@defaults ring-width": {}, "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`, "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, "box-shadow": [`var(--tw-ring-offset-shadow)`, `var(--tw-ring-shadow)`, `var(--tw-shadow, 0 0 #0000)`].join(`, `) }) }, { values: r2(`ringWidth`), type: `length` }), n2({ ".ring-inset": { "@defaults ring-width": {}, "--tw-ring-inset": `inset` } });
}, ringColor: ({ matchUtilities: e2, theme: t2, corePlugins: n2 }) => {
  e2({ ring: (e3) => n2(`ringOpacity`) ? z({ color: e3, property: `--tw-ring-color`, variable: `--tw-ring-opacity` }) : { "--tw-ring-color": Y(e3) } }, { values: Object.fromEntries(Object.entries(J(t2(`ringColor`))).filter(([e3]) => e3 !== `DEFAULT`)), type: [`color`, `any`] });
}, ringOpacity: (e2) => {
  let { config: t2 } = e2;
  return q(`ringOpacity`, [[`ring-opacity`, [`--tw-ring-opacity`]]], { filterDefault: !U(t2(), `respectDefaultRingColorOpacity`) })(e2);
}, ringOffsetWidth: q(`ringOffsetWidth`, [[`ring-offset`, [`--tw-ring-offset-width`]]], { type: `length` }), ringOffsetColor: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "ring-offset": (e3) => ({ "--tw-ring-offset-color": Y(e3) }) }, { values: J(t2(`ringOffsetColor`)), type: [`color`, `any`] });
}, blur: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ blur: (e3) => ({ "--tw-blur": e3.trim() === `` ? ` ` : `blur(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`blur`) });
}, brightness: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ brightness: (e3) => ({ "--tw-brightness": `brightness(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`brightness`) });
}, contrast: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ contrast: (e3) => ({ "--tw-contrast": `contrast(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`contrast`) });
}, dropShadow: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "drop-shadow": (e3) => ({ "--tw-drop-shadow": Array.isArray(e3) ? e3.map((e4) => `drop-shadow(${e4})`).join(` `) : `drop-shadow(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`dropShadow`) });
}, grayscale: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ grayscale: (e3) => ({ "--tw-grayscale": `grayscale(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`grayscale`) });
}, hueRotate: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "hue-rotate": (e3) => ({ "--tw-hue-rotate": `hue-rotate(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`hueRotate`), supportsNegativeValues: true });
}, invert: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ invert: (e3) => ({ "--tw-invert": `invert(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`invert`) });
}, saturate: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ saturate: (e3) => ({ "--tw-saturate": `saturate(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`saturate`) });
}, sepia: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ sepia: (e3) => ({ "--tw-sepia": `sepia(${e3})`, "@defaults filter": {}, filter: Q }) }, { values: t2(`sepia`) });
}, filter: ({ addDefaults: e2, addUtilities: t2 }) => {
  e2(`filter`, { "--tw-blur": ` `, "--tw-brightness": ` `, "--tw-contrast": ` `, "--tw-grayscale": ` `, "--tw-hue-rotate": ` `, "--tw-invert": ` `, "--tw-saturate": ` `, "--tw-sepia": ` `, "--tw-drop-shadow": ` ` }), t2({ ".filter": { "@defaults filter": {}, filter: Q }, ".filter-none": { filter: `none` } });
}, backdropBlur: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-blur": (e3) => ({ "--tw-backdrop-blur": e3.trim() === `` ? ` ` : `blur(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropBlur`) });
}, backdropBrightness: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-brightness": (e3) => ({ "--tw-backdrop-brightness": `brightness(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropBrightness`) });
}, backdropContrast: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-contrast": (e3) => ({ "--tw-backdrop-contrast": `contrast(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropContrast`) });
}, backdropGrayscale: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-grayscale": (e3) => ({ "--tw-backdrop-grayscale": `grayscale(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropGrayscale`) });
}, backdropHueRotate: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-hue-rotate": (e3) => ({ "--tw-backdrop-hue-rotate": `hue-rotate(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropHueRotate`), supportsNegativeValues: true });
}, backdropInvert: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-invert": (e3) => ({ "--tw-backdrop-invert": `invert(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropInvert`) });
}, backdropOpacity: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-opacity": (e3) => ({ "--tw-backdrop-opacity": `opacity(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropOpacity`) });
}, backdropSaturate: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-saturate": (e3) => ({ "--tw-backdrop-saturate": `saturate(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropSaturate`) });
}, backdropSepia: ({ matchUtilities: e2, theme: t2 }) => {
  e2({ "backdrop-sepia": (e3) => ({ "--tw-backdrop-sepia": `sepia(${e3})`, "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }) }, { values: t2(`backdropSepia`) });
}, backdropFilter: ({ addDefaults: e2, addUtilities: t2 }) => {
  e2(`backdrop-filter`, { "--tw-backdrop-blur": ` `, "--tw-backdrop-brightness": ` `, "--tw-backdrop-contrast": ` `, "--tw-backdrop-grayscale": ` `, "--tw-backdrop-hue-rotate": ` `, "--tw-backdrop-invert": ` `, "--tw-backdrop-opacity": ` `, "--tw-backdrop-saturate": ` `, "--tw-backdrop-sepia": ` ` }), t2({ ".backdrop-filter": { "@defaults backdrop-filter": {}, "-webkit-backdrop-filter": $, "backdrop-filter": $ }, ".backdrop-filter-none": { "-webkit-backdrop-filter": `none`, "backdrop-filter": `none` } });
}, transitionProperty: ({ matchUtilities: e2, theme: t2 }) => {
  let n2 = t2(`transitionTimingFunction.DEFAULT`), r2 = t2(`transitionDuration.DEFAULT`);
  e2({ transition: (e3) => ({ "transition-property": e3, ...e3 === `none` ? {} : { "transition-timing-function": n2, "transition-duration": r2 } }) }, { values: t2(`transitionProperty`) });
}, transitionDelay: q(`transitionDelay`, [[`delay`, [`transitionDelay`]]]), transitionDuration: q(`transitionDuration`, [[`duration`, [`transitionDuration`]]], { filterDefault: true }), transitionTimingFunction: q(`transitionTimingFunction`, [[`ease`, [`transitionTimingFunction`]]], { filterDefault: true }), willChange: q(`willChange`, [[`will-change`, [`will-change`]]]), contain: ({ addDefaults: e2, addUtilities: t2 }) => {
  let n2 = `var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)`;
  e2(`contain`, { "--tw-contain-size": ` `, "--tw-contain-layout": ` `, "--tw-contain-paint": ` `, "--tw-contain-style": ` ` }), t2({ ".contain-none": { contain: `none` }, ".contain-content": { contain: `content` }, ".contain-strict": { contain: `strict` }, ".contain-size": { "@defaults contain": {}, "--tw-contain-size": `size`, contain: n2 }, ".contain-inline-size": { "@defaults contain": {}, "--tw-contain-size": `inline-size`, contain: n2 }, ".contain-layout": { "@defaults contain": {}, "--tw-contain-layout": `layout`, contain: n2 }, ".contain-paint": { "@defaults contain": {}, "--tw-contain-paint": `paint`, contain: n2 }, ".contain-style": { "@defaults contain": {}, "--tw-contain-style": `style`, contain: n2 } });
}, content: q(`content`, [[`content`, [`--tw-content`, [`content`, `var(--tw-content)`]]]]), forcedColorAdjust: ({ addUtilities: e2 }) => {
  e2({ ".forced-color-adjust-auto": { "forced-color-adjust": `auto` }, ".forced-color-adjust-none": { "forced-color-adjust": `none` } });
} };
function Kn(e2) {
  if (Array.isArray(e2)) return e2;
  if (e2.split(`[`).length - 1 != e2.split(`]`).length - 1) throw Error(`Path is invalid. Has unbalanced brackets: ${e2}`);
  return e2.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
}
var qn = /* @__PURE__ */ new Map([[`{`, `}`], [`[`, `]`], [`(`, `)`]]), Jn = new Map(Array.from(qn.entries()).map(([e2, t2]) => [t2, e2])), Yn = /* @__PURE__ */ new Set([`"`, `'`, "`"]);
function Xn(e2) {
  let t2 = [], n2 = false;
  for (let r2 = 0; r2 < e2.length; r2++) {
    let i2 = e2[r2];
    if (i2 === `:` && !n2 && t2.length === 0) return false;
    if (Yn.has(i2) && e2[r2 - 1] !== `\\` && (n2 = !n2), !n2 && e2[r2 - 1] !== `\\`) {
      if (qn.has(i2)) t2.push(i2);
      else if (Jn.has(i2)) {
        let e3 = Jn.get(i2);
        if (t2.length <= 0 || t2.pop() !== e3) return false;
      }
    }
  }
  return !(t2.length > 0);
}
function Zn(e2) {
  return (e2 > 0n) - (e2 < 0n);
}
function Qn(e2, t2) {
  let n2 = 0n, r2 = 0n;
  for (let [i2, a2] of t2) e2 & i2 && (n2 |= i2, r2 |= a2);
  return e2 & ~n2 | r2;
}
var $n = class {
  constructor() {
    this.offsets = { defaults: 0n, base: 0n, components: 0n, utilities: 0n, variants: 0n, user: 0n }, this.layerPositions = { defaults: 0n, base: 1n, components: 2n, utilities: 3n, user: 4n, variants: 5n }, this.reservedVariantBits = 0n, this.variantOffsets = /* @__PURE__ */ new Map();
  }
  create(e2) {
    return { layer: e2, parentLayer: e2, arbitrary: 0n, variants: 0n, parallelIndex: 0n, index: this.offsets[e2]++, propertyOffset: 0n, property: ``, options: [] };
  }
  arbitraryProperty(e2) {
    return { ...this.create(`utilities`), arbitrary: 1n, property: e2 };
  }
  forVariant(e2, t2 = 0) {
    let n2 = this.variantOffsets.get(e2);
    if (n2 === void 0) throw Error(`Cannot find offset for unknown variant ${e2}`);
    return { ...this.create(`variants`), variants: n2 << BigInt(t2) };
  }
  applyVariantOffset(e2, t2, n2) {
    return n2.variant = t2.variants, { ...e2, layer: `variants`, parentLayer: e2.layer === `variants` ? e2.parentLayer : e2.layer, variants: e2.variants | t2.variants, options: n2.sort ? [].concat(n2, e2.options) : e2.options, parallelIndex: er([e2.parallelIndex, t2.parallelIndex]) };
  }
  applyParallelOffset(e2, t2) {
    return { ...e2, parallelIndex: BigInt(t2) };
  }
  recordVariants(e2, t2) {
    for (let n2 of e2) this.recordVariant(n2, t2(n2));
  }
  recordVariant(e2, t2 = 1) {
    return this.variantOffsets.set(e2, 1n << this.reservedVariantBits), this.reservedVariantBits += BigInt(t2), { ...this.create(`variants`), variants: this.variantOffsets.get(e2) };
  }
  compare(e2, t2) {
    if (e2.layer !== t2.layer) return this.layerPositions[e2.layer] - this.layerPositions[t2.layer];
    if (e2.parentLayer !== t2.parentLayer) return this.layerPositions[e2.parentLayer] - this.layerPositions[t2.parentLayer];
    for (let n2 of e2.options) for (let r2 of t2.options) {
      if (n2.id !== r2.id || !n2.sort || !r2.sort) continue;
      let i2 = er([n2.variant, r2.variant]) ?? 0n, a2 = ~(i2 | i2 - 1n);
      if ((e2.variants & a2) !== (t2.variants & a2)) continue;
      let o2 = n2.sort({ value: n2.value, modifier: n2.modifier }, { value: r2.value, modifier: r2.modifier });
      if (o2 !== 0) return o2;
    }
    return e2.variants === t2.variants ? e2.parallelIndex === t2.parallelIndex ? e2.arbitrary === t2.arbitrary ? e2.propertyOffset === t2.propertyOffset ? e2.index - t2.index : e2.propertyOffset - t2.propertyOffset : e2.arbitrary - t2.arbitrary : e2.parallelIndex - t2.parallelIndex : e2.variants - t2.variants;
  }
  recalculateVariantOffsets() {
    let e2 = Array.from(this.variantOffsets.entries()).filter(([e3]) => e3.startsWith(`[`)).sort(([e3], [t3]) => tr(e3, t3)), t2 = e2.map(([, e3]) => e3).sort((e3, t3) => Zn(e3 - t3));
    return e2.map(([, e3], n2) => [e3, t2[n2]]).filter(([e3, t3]) => e3 !== t3);
  }
  remapArbitraryVariantOffsets(e2) {
    let t2 = this.recalculateVariantOffsets();
    return t2.length === 0 ? e2 : e2.map((e3) => {
      let [n2, r2] = e3;
      return n2 = { ...n2, variants: Qn(n2.variants, t2) }, [n2, r2];
    });
  }
  sortArbitraryProperties(e2) {
    let t2 = /* @__PURE__ */ new Set();
    for (let [n3] of e2) n3.arbitrary === 1n && t2.add(n3.property);
    if (t2.size === 0) return e2;
    let n2 = Array.from(t2).sort(), r2 = /* @__PURE__ */ new Map(), i2 = 1n;
    for (let e3 of n2) r2.set(e3, i2++);
    return e2.map((e3) => {
      let [t3, n3] = e3;
      return t3 = { ...t3, propertyOffset: r2.get(t3.property) ?? 0n }, [t3, n3];
    });
  }
  sort(e2) {
    return e2 = this.remapArbitraryVariantOffsets(e2), e2 = this.sortArbitraryProperties(e2), e2.sort(([e3], [t2]) => Zn(this.compare(e3, t2)));
  }
};
function er(e2) {
  let t2 = null;
  for (let n2 of e2) t2 ?? (t2 = n2), t2 = t2 > n2 ? t2 : n2;
  return t2;
}
function tr(e2, t2) {
  let n2 = e2.length, r2 = t2.length, i2 = n2 < r2 ? n2 : r2;
  for (let n3 = 0; n3 < i2; n3++) {
    let r3 = e2.charCodeAt(n3) - t2.charCodeAt(n3);
    if (r3 !== 0) return r3;
  }
  return n2 - r2;
}
var nr = /* @__PURE__ */ Symbol(), rr = { AddVariant: /* @__PURE__ */ Symbol.for(`ADD_VARIANT`), MatchVariant: /* @__PURE__ */ Symbol.for(`MATCH_VARIANT`) }, ir = { Base: 1, Dynamic: 2 };
function ar(e2, t2) {
  let n2 = e2.tailwindConfig.prefix;
  return typeof n2 == `function` ? n2(t2) : n2 + t2;
}
function or({ type: e2 = `any`, ...t2 }) {
  let n2 = [].concat(e2);
  return { ...t2, types: n2.map((e3) => Array.isArray(e3) ? { type: e3[0], ...e3[1] } : { type: e3, preferOnConflict: false }) };
}
function sr(e2) {
  let t2 = [], n2 = ``, r2 = 0;
  for (let i2 = 0; i2 < e2.length; i2++) {
    let a2 = e2[i2];
    if (a2 === `\\`) n2 += `\\` + e2[++i2];
    else if (a2 === `{`) ++r2, t2.push(n2.trim()), n2 = ``;
    else if (a2 === `}`) {
      if (--r2 < 0) throw Error(`Your { and } are unbalanced.`);
      t2.push(n2.trim()), n2 = ``;
    } else n2 += a2;
  }
  return n2.length > 0 && t2.push(n2.trim()), t2 = t2.filter((e3) => e3 !== ``), t2;
}
function cr(e2, t2, { before: n2 = [] } = {}) {
  if (n2 = [].concat(n2), n2.length <= 0) {
    e2.push(t2);
    return;
  }
  let r2 = e2.length - 1;
  for (let t3 of n2) {
    let n3 = e2.indexOf(t3);
    n3 !== -1 && (r2 = Math.min(r2, n3));
  }
  e2.splice(r2, 0, t2);
}
function lr(e2) {
  return Array.isArray(e2) ? e2.flatMap((e3) => !Array.isArray(e3) && !I(e3) ? e3 : je(e3)) : lr([e2]);
}
function ur(e2, t2) {
  return (0, F.default)((e3) => {
    let n2 = [];
    return t2 && t2(e3), e3.walkClasses((e4) => {
      n2.push(e4.value);
    }), n2;
  }).transformSync(e2);
}
function dr(e2) {
  e2.walkPseudos((e3) => {
    e3.value === `:not` && e3.remove();
  });
}
function fr(e2, t2 = { containsNonOnDemandable: false }, n2 = 0) {
  let r2 = [], i2 = [];
  e2.type === `rule` ? i2.push(...e2.selectors) : e2.type === `atrule` && e2.walkRules((e3) => i2.push(...e3.selectors));
  for (let e3 of i2) {
    let n3 = ur(e3, dr);
    n3.length === 0 && (t2.containsNonOnDemandable = true);
    for (let e4 of n3) r2.push(e4);
  }
  return n2 === 0 ? [t2.containsNonOnDemandable || r2.length === 0, r2] : r2;
}
function pr(e2) {
  return lr(e2).flatMap((e3) => {
    let t2 = /* @__PURE__ */ new Map(), [n2, r2] = fr(e3);
    return n2 && r2.unshift(S), r2.map((n3) => (t2.has(e3) || t2.set(e3, e3), [n3, t2.get(e3)]));
  });
}
function mr(e2) {
  return e2.startsWith(`@`) || e2.includes(`&`);
}
function hr(e2) {
  e2 = e2.replace(/\n+/g, ``).replace(/\s{1,}/g, ` `).trim();
  let t2 = sr(e2).map((e3) => {
    if (!e3.startsWith(`@`)) return ({ format: t4 }) => t4(e3);
    let [, t3, n2] = /@(\S*)( .+|[({].*)?/g.exec(e3);
    return ({ wrap: e4 }) => e4(l.atRule({ name: t3, params: n2?.trim() ?? `` }));
  }).reverse();
  return (e3) => {
    for (let n2 of t2) n2(e3);
  };
}
function gr(e2, t2, { variantList: n2, variantMap: r2, offsets: i2, classList: a2 }) {
  function o2(t3, n3) {
    return t3 ? (0, wn.default)(e2, t3, n3) : e2;
  }
  function s2(t3) {
    return Me(e2.prefix, t3);
  }
  function c2(e3, n3) {
    return e3 === S ? S : n3.respectPrefix ? t2.tailwindConfig.prefix + e3 : e3;
  }
  function u2(e3, t3, n3 = {}) {
    let r3 = Kn(e3), i3 = o2([`theme`, ...r3], t3);
    return Tn(r3[0])(i3, n3);
  }
  let d2 = 0, f2 = { postcss: l, prefix: s2, e: K, config: o2, theme: u2, corePlugins: (t3) => Array.isArray(e2.corePlugins) ? e2.corePlugins.includes(t3) : o2([`corePlugins`, t3], true), variants: () => [], addBase(e3) {
    for (let [n3, r3] of pr(e3)) {
      let e4 = c2(n3, {}), a3 = i2.create(`base`);
      t2.candidateRuleMap.has(e4) || t2.candidateRuleMap.set(e4, []), t2.candidateRuleMap.get(e4).push([{ sort: a3, layer: `base` }, r3]);
    }
  }, addDefaults(e3, n3) {
    let r3 = { [`@defaults ${e3}`]: n3 };
    for (let [e4, n4] of pr(r3)) {
      let r4 = c2(e4, {});
      t2.candidateRuleMap.has(r4) || t2.candidateRuleMap.set(r4, []), t2.candidateRuleMap.get(r4).push([{ sort: i2.create(`defaults`), layer: `defaults` }, n4]);
    }
  }, addComponents(e3, n3) {
    n3 = Object.assign({}, { preserveSource: false, respectPrefix: true, respectImportant: false }, Array.isArray(n3) ? {} : n3);
    for (let [r3, o3] of pr(e3)) {
      let e4 = c2(r3, n3);
      a2.add(e4), t2.candidateRuleMap.has(e4) || t2.candidateRuleMap.set(e4, []), t2.candidateRuleMap.get(e4).push([{ sort: i2.create(`components`), layer: `components`, options: n3 }, o3]);
    }
  }, addUtilities(e3, n3) {
    n3 = Object.assign({}, { preserveSource: false, respectPrefix: true, respectImportant: true }, Array.isArray(n3) ? {} : n3);
    for (let [r3, o3] of pr(e3)) {
      let e4 = c2(r3, n3);
      a2.add(e4), t2.candidateRuleMap.has(e4) || t2.candidateRuleMap.set(e4, []), t2.candidateRuleMap.get(e4).push([{ sort: i2.create(`utilities`), layer: `utilities`, options: n3 }, o3]);
    }
  }, matchUtilities: function(n3, r3) {
    r3 = or({ respectPrefix: true, respectImportant: true, modifiers: false, ...r3 });
    let o3 = i2.create(`utilities`);
    for (let i3 in n3) {
      let u3 = function(t3, { isOnlyPlugin: n4 }) {
        let [a3, o4, s4] = nn(r3.types, t3, r3, e2);
        if (a3 === void 0) return [];
        if (!r3.types.some(({ type: e3 }) => e3 === o4)) if (n4) y.warn([`Unnecessary typehint \`${o4}\` in \`${i3}-${t3}\`.`, `You can safely update it to \`${i3}-${t3.replace(o4 + `:`, ``)}\`.`]);
        else return [];
        if (!Xn(a3)) return [];
        let c3 = { get modifier() {
          return r3.modifiers || y.warn(`modifier-used-without-options-for-${i3}`, ["Your plugin must set `modifiers: true` in its options to support modifiers."]), s4;
        } }, u4 = U(e2, `generalizedModifiers`);
        return [].concat(u4 ? l2(a3, c3) : l2(a3)).filter(Boolean).map((e3) => ({ [xn(i3, t3)]: e3 }));
      };
      let s3 = c2(i3, r3), l2 = n3[i3];
      a2.add([s3, r3]);
      let d3 = [{ sort: o3, layer: `utilities`, options: r3 }, u3];
      t2.candidateRuleMap.has(s3) || t2.candidateRuleMap.set(s3, []), t2.candidateRuleMap.get(s3).push(d3);
    }
  }, matchComponents: function(n3, r3) {
    r3 = or({ respectPrefix: true, respectImportant: false, modifiers: false, ...r3 });
    let o3 = i2.create(`components`);
    for (let i3 in n3) {
      let u3 = function(t3, { isOnlyPlugin: n4 }) {
        let [a3, o4, s4] = nn(r3.types, t3, r3, e2);
        if (a3 === void 0) return [];
        if (!r3.types.some(({ type: e3 }) => e3 === o4)) if (n4) y.warn([`Unnecessary typehint \`${o4}\` in \`${i3}-${t3}\`.`, `You can safely update it to \`${i3}-${t3.replace(o4 + `:`, ``)}\`.`]);
        else return [];
        if (!Xn(a3)) return [];
        let c3 = { get modifier() {
          return r3.modifiers || y.warn(`modifier-used-without-options-for-${i3}`, ["Your plugin must set `modifiers: true` in its options to support modifiers."]), s4;
        } }, u4 = U(e2, `generalizedModifiers`);
        return [].concat(u4 ? l2(a3, c3) : l2(a3)).filter(Boolean).map((e3) => ({ [xn(i3, t3)]: e3 }));
      };
      let s3 = c2(i3, r3), l2 = n3[i3];
      a2.add([s3, r3]);
      let d3 = [{ sort: o3, layer: `components`, options: r3 }, u3];
      t2.candidateRuleMap.has(s3) || t2.candidateRuleMap.set(s3, []), t2.candidateRuleMap.get(s3).push(d3);
    }
  }, addVariant(e3, i3, a3 = {}) {
    i3 = [].concat(i3).map((t3) => {
      if (typeof t3 != `string`) return (n3 = {}) => {
        let { args: r3, modifySelectors: i4, container: o3, separator: s3, wrap: c3, format: l2 } = n3, u3 = t3(Object.assign({ modifySelectors: i4, container: o3, separator: s3 }, a3.type === rr.MatchVariant && { args: r3, wrap: c3, format: l2 }));
        if (typeof u3 == `string` && !mr(u3)) throw Error(`Your custom variant \`${e3}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
        return Array.isArray(u3) ? u3.filter((e4) => typeof e4 == `string`).map((e4) => hr(e4)) : u3 && typeof u3 == `string` && hr(u3)(n3);
      };
      if (!mr(t3)) throw Error(`Your custom variant \`${e3}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
      return hr(t3);
    }), cr(n2, e3, a3), r2.set(e3, i3), t2.variantOptions.set(e3, a3);
  }, matchVariant(t3, n3, r3) {
    let i3 = r3?.id ?? ++d2, a3 = t3 === `@`, o3 = U(e2, `generalizedModifiers`);
    for (let [e3, s4] of Object.entries(r3?.values ?? {})) e3 !== `DEFAULT` && f2.addVariant(a3 ? `${t3}${e3}` : `${t3}-${e3}`, ({ args: e4, container: t4 }) => n3(s4, o3 ? { modifier: e4?.modifier, container: t4 } : { container: t4 }), { ...r3, value: s4, id: i3, type: rr.MatchVariant, variantInfo: ir.Base });
    let s3 = `DEFAULT` in (r3?.values ?? {});
    f2.addVariant(t3, ({ args: e3, container: t4 }) => e3?.value === C && !s3 ? null : n3(e3?.value === C ? r3.values.DEFAULT : e3?.value ?? (typeof e3 == `string` ? e3 : ``), o3 ? { modifier: e3?.modifier, container: t4 } : { container: t4 }), { ...r3, id: i3, type: rr.MatchVariant, variantInfo: ir.Dynamic });
  } };
  return f2;
}
function _r(e2) {
  e2.walkAtRules((e3) => {
    [`responsive`, `variants`].includes(e3.name) && (_r(e3), e3.before(e3.nodes), e3.remove());
  });
}
function vr(e2) {
  let t2 = [];
  return e2.each((e3) => {
    e3.type === `atrule` && [`responsive`, `variants`].includes(e3.name) && (e3.name = `layer`, e3.params = `utilities`);
  }), e2.walkAtRules(`layer`, (e3) => {
    if (_r(e3), e3.params === `base`) {
      for (let n2 of e3.nodes) t2.push(function({ addBase: e4 }) {
        e4(n2, { respectPrefix: false });
      });
      e3.remove();
    } else if (e3.params === `components`) {
      for (let n2 of e3.nodes) t2.push(function({ addComponents: e4 }) {
        e4(n2, { respectPrefix: false, preserveSource: true });
      });
      e3.remove();
    } else if (e3.params === `utilities`) {
      for (let n2 of e3.nodes) t2.push(function({ addUtilities: e4 }) {
        e4(n2, { respectPrefix: false, preserveSource: true });
      });
      e3.remove();
    }
  }), t2;
}
function yr(e2, t2) {
  let n2 = Object.entries({ ...X, ...Gn }).map(([t3, n3]) => e2.tailwindConfig.corePlugins.includes(t3) ? n3 : null).filter(Boolean), r2 = e2.tailwindConfig.plugins.map((e3) => (e3.__isOptionsFunction && (e3 = e3()), typeof e3 == `function` ? e3 : e3.handler)), i2 = vr(t2), a2 = [X.childVariant, X.pseudoElementVariants, X.pseudoClassVariants, X.hasVariants, X.ariaVariants, X.dataVariants], o2 = [X.supportsVariants, X.reducedMotionVariants, X.prefersContrastVariants, X.screenVariants, X.orientationVariants, X.directionVariants, X.darkVariants, X.forcedColorsVariants, X.printVariant];
  return (e2.tailwindConfig.darkMode === `class` || Array.isArray(e2.tailwindConfig.darkMode) && e2.tailwindConfig.darkMode[0] === `class`) && (o2 = [X.supportsVariants, X.reducedMotionVariants, X.prefersContrastVariants, X.darkVariants, X.screenVariants, X.orientationVariants, X.directionVariants, X.forcedColorsVariants, X.printVariant]), [...n2, ...a2, ...r2, ...o2, ...i2];
}
function br(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Map();
  t2.variantMap = r2;
  let i2 = new $n();
  t2.offsets = i2;
  let a2 = /* @__PURE__ */ new Set(), o2 = gr(t2.tailwindConfig, t2, { variantList: n2, variantMap: r2, offsets: i2, classList: a2 });
  for (let t3 of e2) if (Array.isArray(t3)) for (let e3 of t3) e3(o2);
  else t3?.(o2);
  i2.recordVariants(n2, (e3) => r2.get(e3).length);
  for (let [e3, n3] of r2.entries()) t2.variantMap.set(e3, n3.map((t3, n4) => [i2.forVariant(e3, n4), t3]));
  let s2 = (t2.tailwindConfig.safelist ?? []).filter(Boolean);
  if (s2.length > 0) {
    let e3 = [];
    for (let n3 of s2) {
      if (typeof n3 == `string`) {
        t2.changedContent.push({ content: n3, extension: `html` });
        continue;
      }
      if (n3 instanceof RegExp) {
        y.warn(`root-regex`, ["Regular expressions in `safelist` work differently in Tailwind CSS v3.0.", "Update your `safelist` configuration to eliminate this warning.", `https://tailwindcss.com/docs/content-configuration#safelisting-classes`]);
        continue;
      }
      e3.push(n3);
    }
    if (e3.length > 0) {
      let n3 = /* @__PURE__ */ new Map(), r3 = t2.tailwindConfig.prefix.length, i3 = e3.some((e4) => e4.pattern.source.includes(`!`));
      for (let o3 of a2) {
        let a3 = Array.isArray(o3) ? (() => {
          let [e4, n4] = o3, a4 = Object.keys(n4?.values ?? {}).map((t3) => Sn(e4, t3));
          return n4?.supportsNegativeValues && (a4 = [...a4, ...a4.map((e5) => `-` + e5)], a4 = [...a4, ...a4.map((e5) => e5.slice(0, r3) + `-` + e5.slice(r3))]), n4.types.some(({ type: e5 }) => e5 === `color`) && (a4 = [...a4, ...a4.flatMap((e5) => Object.keys(t2.tailwindConfig.theme.opacity).map((t3) => `${e5}/${t3}`))]), i3 && n4?.respectImportant && (a4 = [...a4, ...a4.map((e5) => `!` + e5)]), a4;
        })() : [o3];
        for (let r4 of a3) for (let { pattern: i4, variants: a4 = [] } of e3) if (i4.lastIndex = 0, n3.has(i4) || n3.set(i4, 0), i4.test(r4)) {
          n3.set(i4, n3.get(i4) + 1), t2.changedContent.push({ content: r4, extension: `html` });
          for (let e4 of a4) t2.changedContent.push({ content: e4 + t2.tailwindConfig.separator + r4, extension: `html` });
        }
      }
      for (let [e4, t3] of n3.entries()) t3 === 0 && y.warn([`The safelist pattern \`${e4}\` doesn't match any Tailwind CSS classes.`, "Fix this pattern or remove it from your `safelist` configuration.", `https://tailwindcss.com/docs/content-configuration#safelisting-classes`]);
    }
  }
  let c2 = [ar(t2, [].concat(t2.tailwindConfig.darkMode ?? `media`)[1] ?? `dark`), ar(t2, `group`), ar(t2, `peer`)];
  t2.getClassOrder = function(e3) {
    let n3 = [...e3].sort((e4, t3) => e4 === t3 ? 0 : e4 < t3 ? -1 : 1), r3 = new Map(n3.map((e4) => [e4, null])), i3 = Gr(new Set(n3), t2, true);
    i3 = t2.offsets.sort(i3);
    let a3 = BigInt(c2.length);
    for (let [, e4] of i3) {
      let t3 = e4.raws.tailwind.candidate;
      r3.set(t3, r3.get(t3) ?? a3++);
    }
    return e3.map((e4) => {
      let t3 = r3.get(e4) ?? null, n4 = c2.indexOf(e4);
      return t3 === null && n4 !== -1 && (t3 = BigInt(n4)), [e4, t3];
    });
  }, t2.getClassList = function(e3 = {}) {
    let n3 = [];
    for (let r3 of a2) if (Array.isArray(r3)) {
      let [i3, a3] = r3, o3 = [], s3 = Object.keys(a3?.modifiers ?? {});
      a3?.types?.some(({ type: e4 }) => e4 === `color`) && s3.push(...Object.keys(t2.tailwindConfig.theme.opacity ?? {}));
      let c3 = { modifiers: s3 }, l2 = e3.includeMetadata && s3.length > 0;
      for (let [e4, t3] of Object.entries(a3?.values ?? {})) {
        if (t3 == null) continue;
        let r4 = Sn(i3, e4);
        if (n3.push(l2 ? [r4, c3] : r4), a3?.supportsNegativeValues && Rt(t3)) {
          let t4 = Sn(i3, `-${e4}`);
          o3.push(l2 ? [t4, c3] : t4);
        }
      }
      n3.push(...o3);
    } else n3.push(r3);
    return n3;
  }, t2.getVariants = function() {
    let e3 = Math.random().toString(36).substring(7).toUpperCase(), n3 = [];
    for (let [r3, i3] of t2.variantOptions.entries()) i3.variantInfo !== ir.Base && n3.push({ name: r3, isArbitrary: i3.type === /* @__PURE__ */ Symbol.for(`MATCH_VARIANT`), values: Object.keys(i3.values ?? {}), hasDash: r3 !== `@`, selectors({ modifier: n4, value: a3 } = {}) {
      let o3 = `TAILWINDPLACEHOLDER${e3}`, s3 = l.rule({ selector: `.${o3}` }), c3 = l.root({ nodes: [s3.clone()] }), u2 = c3.toString(), d2 = (t2.variantMap.get(r3) ?? []).flatMap(([e4, t3]) => t3), f2 = [];
      for (let e4 of d2) {
        let r4 = [], o4 = { args: { modifier: n4, value: i3.values?.[a3] ?? a3 }, separator: t2.tailwindConfig.separator, modifySelectors(e5) {
          return c3.each((t3) => {
            t3.type === `rule` && (t3.selectors = t3.selectors.map((t4) => e5({ get className() {
              return Er(t4);
            }, selector: t4 })));
          }), c3;
        }, format(e5) {
          r4.push(e5);
        }, wrap(e5) {
          r4.push(`@${e5.name} ${e5.params} { & }`);
        }, container: c3 }, s4 = e4(o4);
        if (r4.length > 0 && f2.push(r4), Array.isArray(s4)) for (let e5 of s4) r4 = [], e5(o4), f2.push(r4);
      }
      let p2 = [];
      u2 !== c3.toString() && (c3.walkRules((e4) => {
        let n5 = e4.selector, i4 = (0, F.default)((e5) => {
          e5.walkClasses((e6) => {
            e6.value = `${r3}${t2.tailwindConfig.separator}${e6.value}`;
          });
        }).processSync(n5);
        p2.push(n5.replace(i4, `&`).replace(o3, `&`));
      }), c3.walkAtRules((e4) => {
        p2.push(`@${e4.name} (${e4.params}) { & }`);
      }));
      let m2 = !(a3 in (i3.values ?? {})), h2 = i3[nr] ?? {}, g2 = !(m2 || h2.respectPrefix === false);
      f2 = f2.map((e4) => e4.map((e5) => ({ format: e5, respectPrefix: g2 }))), p2 = p2.map((e4) => ({ format: e4, respectPrefix: g2 }));
      let _2 = { candidate: o3, context: t2 }, v2 = f2.map((e4) => vn(`.${o3}`, mn(e4, _2), _2).replace(`.${o3}`, `&`).replace(`{ & }`, ``).trim());
      return p2.length > 0 && v2.push(mn(p2, _2).toString().replace(`.${o3}`, `&`)), v2;
    } });
    return n3;
  };
}
function xr(e2, t2) {
  e2.classCache.has(t2) && (e2.notClassCache.add(t2), e2.classCache.delete(t2), e2.applyClassCache.delete(t2), e2.candidateRuleMap.delete(t2), e2.candidateRuleCache.delete(t2), e2.stylesheetCache = null);
}
function Sr(e2, t2) {
  let n2 = t2.raws.tailwind.candidate;
  if (n2) {
    for (let t3 of e2.ruleCache) t3[1].raws.tailwind.candidate === n2 && e2.ruleCache.delete(t3);
    xr(e2, n2);
  }
}
function Cr(e2, t2 = [], n2 = l.root()) {
  let r2 = { disposables: [], ruleCache: /* @__PURE__ */ new Set(), candidateRuleCache: /* @__PURE__ */ new Map(), classCache: /* @__PURE__ */ new Map(), applyClassCache: /* @__PURE__ */ new Map(), notClassCache: new Set(e2.blocklist ?? []), postCssNodeCache: /* @__PURE__ */ new Map(), candidateRuleMap: /* @__PURE__ */ new Map(), tailwindConfig: e2, changedContent: t2, variantMap: /* @__PURE__ */ new Map(), stylesheetCache: null, variantOptions: /* @__PURE__ */ new Map(), markInvalidUtilityCandidate: (e3) => xr(r2, e3), markInvalidUtilityNode: (e3) => Sr(r2, e3) };
  return br(yr(r2, n2), r2), r2;
}
function wr(e2, t2) {
  let n2 = (0, F.default)().astSync(e2);
  return n2.each((e3) => {
    e3.nodes.some((e4) => e4.type === `combinator`) && (e3.nodes = [F.default.pseudo({ value: `:is`, nodes: [e3.clone()] })]), sn(e3);
  }), `${t2} ${n2.toString()}`;
}
var Tr = (0, F.default)((e2) => e2.first.filter(({ type: e3 }) => e3 === `class`).pop().value);
function Er(e2) {
  return Tr.transformSync(e2);
}
function* Dr(e2) {
  let t2 = 1 / 0;
  for (; t2 >= 0; ) {
    let n2, r2 = false;
    if (t2 === 1 / 0 && e2.endsWith(`]`)) {
      let t3 = e2.indexOf(`[`);
      e2[t3 - 1] === `-` ? n2 = t3 - 1 : e2[t3 - 1] === `/` ? (n2 = t3 - 1, r2 = true) : n2 = -1;
    } else t2 === 1 / 0 && e2.includes(`/`) ? (n2 = e2.lastIndexOf(`/`), r2 = true) : n2 = e2.lastIndexOf(`-`, t2);
    if (n2 < 0) break;
    let i2 = e2.slice(0, n2), a2 = e2.slice(r2 ? n2 : n2 + 1);
    t2 = n2 - 1, !(i2 === `` || a2 === `/`) && (yield [i2, a2]);
  }
}
function Or(e2, t2) {
  if (e2.length === 0 || t2.tailwindConfig.prefix === ``) return e2;
  for (let n2 of e2) {
    let [e3] = n2;
    if (e3.options.respectPrefix) {
      let e4 = l.root({ nodes: [n2[1].clone()] }), r2 = n2[1].raws.tailwind.classCandidate;
      e4.walkRules((e5) => {
        let n3 = r2.startsWith(`-`);
        e5.selector = Me(t2.tailwindConfig.prefix, e5.selector, n3);
      }), n2[1] = e4.nodes[0];
    }
  }
  return e2;
}
function kr(e2, t2) {
  if (e2.length === 0) return e2;
  let n2 = [];
  function r2(e3) {
    return e3.parent && e3.parent.type === `atrule` && e3.parent.name === `keyframes`;
  }
  for (let [i2, a2] of e2) {
    let e3 = l.root({ nodes: [a2.clone()] });
    e3.walkRules((e4) => {
      if (r2(e4)) return;
      let n3 = (0, F.default)().astSync(e4.selector);
      n3.each((e5) => _n(e5, t2)), Wt(n3, (e5) => e5 === t2 ? `!${e5}` : e5);
      let i3 = n3.toString();
      if (i3.trim() === ``) {
        e4.remove();
        return;
      }
      e4.selector = i3, e4.walkDecls((e5) => e5.important = true);
    }), n2.push([{ ...i2, important: true }, e3.nodes[0]]);
  }
  return n2;
}
function Ar(e2, t2, n2) {
  if (t2.length === 0) return t2;
  let r2 = { modifier: null, value: C };
  {
    let [t3, ...i2] = B(e2, `/`);
    if (i2.length > 1 && (t3 = t3 + `/` + i2.slice(0, -1).join(`/`), i2 = i2.slice(-1)), i2.length && !n2.variantMap.has(e2) && (e2 = t3, r2.modifier = i2[0], !U(n2.tailwindConfig, `generalizedModifiers`))) return [];
  }
  if (e2.endsWith(`]`) && !e2.startsWith(`[`)) {
    let t3 = /(.)(-?)\[(.*)\]/g.exec(e2);
    if (t3) {
      let [, n3, i2, a2] = t3;
      if (n3 === `@` && i2 === `-` || n3 !== `@` && i2 === ``) return [];
      e2 = e2.replace(`${i2}[${a2}]`, ``), r2.value = a2;
    }
  }
  if (Kr(e2) && !n2.variantMap.has(e2)) {
    let t3 = n2.offsets.recordVariant(e2), r3 = B(V(e2.slice(1, -1)), `,`);
    if (r3.length > 1 || !r3.every(mr)) return [];
    let i2 = r3.map((e3, r4) => [n2.offsets.applyParallelOffset(t3, r4), hr(e3.trim())]);
    n2.variantMap.set(e2, i2);
  }
  if (n2.variantMap.has(e2)) {
    let i2 = Kr(e2), a2 = n2.variantOptions.get(e2)?.[nr] ?? {}, o2 = n2.variantMap.get(e2).slice(), s2 = [], c2 = !(i2 || a2.respectPrefix === false);
    for (let [i3, a3] of t2) {
      if (i3.layer === `user`) continue;
      let t3 = l.root({ nodes: [a3.clone()] });
      for (let [a4, l2, u2] of o2) {
        let p2 = function() {
          d2.raws.neededBackup || (d2.raws.neededBackup = true, d2.walkRules((e3) => e3.raws.originalSelector = e3.selector));
        }, m2 = function(e3) {
          return p2(), d2.each((t4) => {
            t4.type === `rule` && (t4.selectors = t4.selectors.map((t5) => e3({ get className() {
              return Er(t5);
            }, selector: t5 })));
          }), d2;
        };
        let d2 = (u2 ?? t3).clone(), f2 = [];
        let h2 = l2({ get container() {
          return p2(), d2;
        }, separator: n2.tailwindConfig.separator, modifySelectors: m2, wrap(e3) {
          let t4 = d2.nodes;
          d2.removeAll(), e3.append(t4), d2.append(e3);
        }, format(e3) {
          f2.push({ format: e3, respectPrefix: c2 });
        }, args: r2 });
        if (Array.isArray(h2)) {
          for (let [e3, t4] of h2.entries()) o2.push([n2.offsets.applyParallelOffset(a4, e3), t4, d2.clone()]);
          continue;
        }
        if (typeof h2 == `string` && f2.push({ format: h2, respectPrefix: c2 }), h2 === null) continue;
        d2.raws.neededBackup && (delete d2.raws.neededBackup, d2.walkRules((t4) => {
          let r3 = t4.raws.originalSelector;
          if (!r3 || (delete t4.raws.originalSelector, r3 === t4.selector)) return;
          let i4 = t4.selector, a5 = (0, F.default)((t5) => {
            t5.walkClasses((t6) => {
              t6.value = `${e2}${n2.tailwindConfig.separator}${t6.value}`;
            });
          }).processSync(r3);
          f2.push({ format: i4.replace(a5, `&`), respectPrefix: c2 }), t4.selector = r3;
        })), d2.nodes[0].raws.tailwind = { ...d2.nodes[0].raws.tailwind, parentLayer: i3.layer };
        let g2 = [{ ...i3, sort: n2.offsets.applyVariantOffset(i3.sort, a4, Object.assign(r2, n2.variantOptions.get(e2))), collectedFormats: (i3.collectedFormats ?? []).concat(f2) }, d2.nodes[0]];
        s2.push(g2);
      }
    }
    return s2;
  }
  return [];
}
function jr(e2, t2, n2 = {}) {
  return !I(e2) && !Array.isArray(e2) ? [[e2], n2] : Array.isArray(e2) ? jr(e2[0], t2, e2[1]) : (t2.has(e2) || t2.set(e2, je(e2)), [t2.get(e2), n2]);
}
var Mr = /^[a-z_-]/;
function Nr(e2) {
  return Mr.test(e2);
}
function Pr(e2) {
  if (!e2.includes(`://`)) return false;
  try {
    let t2 = new URL(e2);
    return t2.scheme !== `` && t2.host !== ``;
  } catch {
    return false;
  }
}
function Fr(e2) {
  let t2 = true;
  return e2.walkDecls((e3) => {
    if (!Ir(e3.prop, e3.value)) return t2 = false, false;
  }), t2;
}
function Ir(e2, t2) {
  if (Pr(`${e2}:${t2}`)) return false;
  try {
    return l.parse(`a{${e2}:${t2}}`).toResult(), true;
  } catch {
    return false;
  }
}
function Lr(e2, t2) {
  let [, n2, r2] = e2.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/) ?? [];
  if (r2 === void 0 || !Nr(n2) || !Xn(r2)) return null;
  let i2 = V(r2, { property: n2 });
  return Ir(n2, i2) ? [[{ sort: t2.offsets.arbitraryProperty(e2), layer: `utilities`, options: { respectImportant: true } }, () => ({ [bn(e2)]: { [n2]: i2 } })]] : null;
}
function* Rr(e2, t2) {
  t2.candidateRuleMap.has(e2) && (yield [t2.candidateRuleMap.get(e2), `DEFAULT`]), yield* (function* (e3) {
    e3 !== null && (yield [e3, `DEFAULT`]);
  })(Lr(e2, t2));
  let n2 = e2, r2 = false, i2 = t2.tailwindConfig.prefix, a2 = i2.length, o2 = n2.startsWith(i2) || n2.startsWith(`-${i2}`);
  n2[a2] === `-` && o2 && (r2 = true, n2 = i2 + n2.slice(a2 + 1)), r2 && t2.candidateRuleMap.has(n2) && (yield [t2.candidateRuleMap.get(n2), `-DEFAULT`]);
  for (let [e3, i3] of Dr(n2)) t2.candidateRuleMap.has(e3) && (yield [t2.candidateRuleMap.get(e3), r2 ? `-${i3}` : i3]);
}
function zr(e2, t2) {
  return e2 === S ? [S] : B(e2, t2);
}
function* Br(e2, t2) {
  for (let n2 of e2) n2[1].raws.tailwind = { ...n2[1].raws.tailwind, classCandidate: t2, preserveSource: n2[0].options?.preserveSource ?? false }, yield n2;
}
function* Vr(e2, t2) {
  let n2 = t2.tailwindConfig.separator, [r2, ...i2] = zr(e2, n2).reverse(), a2 = false;
  r2.startsWith(`!`) && (a2 = true, r2 = r2.slice(1));
  for (let n3 of Rr(r2, t2)) {
    let o2 = [], s2 = /* @__PURE__ */ new Map(), [c2, l2] = n3, u2 = c2.length === 1;
    for (let [e3, n4] of c2) {
      let r3 = [];
      if (typeof n4 == `function`) for (let i3 of [].concat(n4(l2, { isOnlyPlugin: u2 }))) {
        let [n5, a3] = jr(i3, t2.postCssNodeCache);
        for (let t3 of n5) r3.push([{ ...e3, options: { ...e3.options, ...a3 } }, t3]);
      }
      else if (l2 === `DEFAULT` || l2 === `-DEFAULT`) {
        let [i3, a3] = jr(n4, t2.postCssNodeCache);
        for (let t3 of i3) r3.push([{ ...e3, options: { ...e3.options, ...a3 } }, t3]);
      }
      if (r3.length > 0) {
        let n5 = Array.from(rn(e3.options?.types ?? [], l2, e3.options ?? {}, t2.tailwindConfig)).map(([e4, t3]) => t3);
        n5.length > 0 && s2.set(r3, n5), o2.push(r3);
      }
    }
    if (Kr(l2)) {
      if (o2.length > 1) {
        let r3 = function(e3) {
          return e3.length === 1 ? e3[0] : e3.find((e4) => {
            let t4 = s2.get(e4);
            return e4.some(([{ options: e5 }, n5]) => Fr(n5) ? e5.types.some(({ type: e6, preferOnConflict: n6 }) => t4.includes(e6) && n6) : false);
          });
        };
        let [t3, n4] = o2.reduce((e3, t4) => (t4.some(([{ options: e4 }]) => e4.types.some(({ type: e5 }) => e5 === `any`)) ? e3[0].push(t4) : e3[1].push(t4), e3), [[], []]);
        let i3 = r3(n4) ?? r3(t3);
        if (i3) o2 = [i3];
        else {
          let t4 = o2.map((e3) => /* @__PURE__ */ new Set([...s2.get(e3) ?? []]));
          for (let e3 of t4) for (let n6 of e3) {
            let r4 = false;
            for (let i4 of t4) e3 !== i4 && i4.has(n6) && (i4.delete(n6), r4 = true);
            r4 && e3.delete(n6);
          }
          let n5 = [];
          for (let [r4, i4] of t4.entries()) for (let t5 of i4) {
            let i5 = o2[r4].map(([, e3]) => e3).flat().map((e3) => e3.toString().split(`
`).slice(1, -1).map((e4) => e4.trim()).map((e4) => `      ${e4}`).join(`
`)).join(`

`);
            n5.push(`  Use \`${e2.replace(`[`, `[${t5}:`)}\` for \`${i5.trim()}\``);
            break;
          }
          y.warn([`The class \`${e2}\` is ambiguous and matches multiple utilities.`, ...n5, `If this is content and not a class, replace it with \`${e2.replace(`[`, `&lsqb;`).replace(`]`, `&rsqb;`)}\` to silence this warning.`]);
          continue;
        }
      }
      o2 = o2.map((e3) => e3.filter((e4) => Fr(e4[1])));
    }
    o2 = o2.flat(), o2 = Array.from(Br(o2, r2)), o2 = Or(o2, t2), a2 && (o2 = kr(o2, r2));
    for (let e3 of i2) o2 = Ar(e3, o2, t2);
    for (let n4 of o2) n4[1].raws.tailwind = { ...n4[1].raws.tailwind, candidate: e2 }, n4 = Hr(n4, { context: t2, candidate: e2 }), n4 !== null && (yield n4);
  }
}
function Hr(e2, { context: t2, candidate: n2 }) {
  if (!e2[0].collectedFormats) return e2;
  let r2 = true, i2;
  try {
    i2 = mn(e2[0].collectedFormats, { context: t2, candidate: n2 });
  } catch {
    return null;
  }
  let a2 = l.root({ nodes: [e2[1].clone()] });
  return a2.walkRules((e3) => {
    if (!Ur(e3)) try {
      let r3 = vn(e3.selector, i2, { candidate: n2, context: t2 });
      if (r3 === null) {
        e3.remove();
        return;
      }
      e3.selector = r3;
    } catch {
      return r2 = false, false;
    }
  }), !r2 || a2.nodes.length === 0 ? null : (e2[1] = a2.nodes[0], e2);
}
function Ur(e2) {
  return e2.parent && e2.parent.type === `atrule` && e2.parent.name === `keyframes`;
}
function Wr(e2) {
  if (e2 === true) return (e3) => {
    Ur(e3) || e3.walkDecls((e4) => {
      e4.parent.type === `rule` && !Ur(e4.parent) && (e4.important = true);
    });
  };
  if (typeof e2 == `string`) return (t2) => {
    Ur(t2) || (t2.selectors = t2.selectors.map((t3) => wr(t3, e2)));
  };
}
function Gr(e2, t2, n2 = false) {
  let r2 = [], i2 = Wr(t2.tailwindConfig.important);
  for (let a2 of e2) {
    if (t2.notClassCache.has(a2)) continue;
    if (t2.candidateRuleCache.has(a2)) {
      r2 = r2.concat(Array.from(t2.candidateRuleCache.get(a2)));
      continue;
    }
    let e3 = Array.from(Vr(a2, t2));
    if (e3.length === 0) {
      t2.notClassCache.add(a2);
      continue;
    }
    t2.classCache.set(a2, e3);
    let o2 = t2.candidateRuleCache.get(a2) ?? /* @__PURE__ */ new Set();
    t2.candidateRuleCache.set(a2, o2);
    for (let a3 of e3) {
      let [{ sort: e4, options: s2 }, c2] = a3;
      if (s2.respectImportant && i2) {
        let e5 = l.root({ nodes: [c2.clone()] });
        e5.walkRules(i2), c2 = e5.nodes[0];
      }
      let u2 = [e4, n2 ? c2.clone() : c2];
      o2.add(u2), t2.ruleCache.add(u2), r2.push(u2);
    }
  }
  return r2;
}
function Kr(e2) {
  return e2.startsWith(`[`) && e2.endsWith(`]`);
}
function qr(e2) {
  let t2 = /* @__PURE__ */ new Map();
  l.root({ nodes: [e2.clone()] }).walkRules((e3) => {
    (0, F.default)((e4) => {
      e4.walkClasses((e5) => {
        let n3 = e5.parent.toString(), r3 = t2.get(n3);
        r3 || t2.set(n3, r3 = /* @__PURE__ */ new Set()), r3.add(e5.value);
      });
    }).processSync(e3.selector);
  });
  let n2 = Array.from(t2.values(), (e3) => Array.from(e3)), r2 = n2.flat();
  return Object.assign(r2, { groups: n2 });
}
var Jr = (0, F.default)();
function Yr(e2) {
  return Jr.astSync(e2);
}
function Xr(e2, t2) {
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of e2) n2.add(r2.split(t2).pop());
  return Array.from(n2);
}
function Zr(e2, t2) {
  let n2 = e2.tailwindConfig.prefix;
  return typeof n2 == `function` ? n2(t2) : n2 + t2;
}
function* Qr(e2) {
  for (yield e2; e2.parent; ) yield e2.parent, e2 = e2.parent;
}
function $r(e2, t2 = {}) {
  let n2 = e2.nodes;
  e2.nodes = [];
  let r2 = e2.clone(t2);
  return e2.nodes = n2, r2;
}
function ei(e2) {
  for (let t2 of Qr(e2)) if (e2 !== t2) {
    if (t2.type === `root`) break;
    e2 = $r(t2, { nodes: [e2] });
  }
  return e2;
}
function ti(e2, t2) {
  let n2 = /* @__PURE__ */ new Map();
  return e2.walkRules((e3) => {
    for (let t3 of Qr(e3)) if (t3.raws.tailwind?.layer !== void 0) return;
    let r2 = ei(e3), i2 = t2.offsets.create(`user`);
    for (let t3 of qr(e3)) {
      let e4 = n2.get(t3) || [];
      n2.set(t3, e4), e4.push([{ layer: `user`, sort: i2, important: false }, r2]);
    }
  }), n2;
}
function ni(e2, t2) {
  for (let n2 of e2) {
    if (t2.notClassCache.has(n2) || t2.applyClassCache.has(n2)) continue;
    if (t2.classCache.has(n2)) {
      t2.applyClassCache.set(n2, t2.classCache.get(n2).map(([e4, t3]) => [e4, t3.clone()]));
      continue;
    }
    let e3 = Array.from(Vr(n2, t2));
    if (e3.length === 0) {
      t2.notClassCache.add(n2);
      continue;
    }
    t2.applyClassCache.set(n2, e3);
  }
  return t2.applyClassCache;
}
function ri(e2) {
  let t2 = null;
  return { get: (n2) => (t2 || (t2 = e2()), t2.get(n2)), has: (n2) => (t2 || (t2 = e2()), t2.has(n2)) };
}
function ii(e2) {
  return { get: (t2) => e2.flatMap((e3) => e3.get(t2) || []), has: (t2) => e2.some((e3) => e3.has(t2)) };
}
function ai(e2) {
  let t2 = e2.split(/[\s\t\n]+/g);
  return t2[t2.length - 1] === `!important` ? [t2.slice(0, -1), true] : [t2, false];
}
function oi(e2, t2, n2) {
  let r2 = /* @__PURE__ */ new Set(), i2 = [];
  if (e2.walkAtRules(`apply`, (e3) => {
    let [t3] = ai(e3.params);
    for (let e4 of t3) r2.add(e4);
    i2.push(e3);
  }), i2.length === 0) return;
  let a2 = ii([n2, ni(r2, t2)]);
  function o2(e3, t3, n3) {
    let r3 = Yr(e3), i3 = Yr(t3), a3 = Yr(`.${K(n3)}`).nodes[0].nodes[0];
    return r3.each((e4) => {
      let t4 = /* @__PURE__ */ new Set();
      i3.each((n4) => {
        let r4 = false;
        n4 = n4.clone(), n4.walkClasses((i4) => {
          i4.value === a3.value && (r4 || (r4 = (i4.replaceWith(...e4.nodes.map((e5) => e5.clone())), t4.add(n4), true)));
        });
      });
      for (let e5 of t4) {
        let t5 = [[]];
        for (let n4 of e5.nodes) n4.type === `combinator` ? (t5.push(n4), t5.push([])) : t5[t5.length - 1].push(n4);
        e5.nodes = [];
        for (let n4 of t5) Array.isArray(n4) && n4.sort((e6, t6) => e6.type === `tag` && t6.type === `class` ? -1 : e6.type === `class` && t6.type === `tag` ? 1 : e6.type === `class` && t6.type === `pseudo` && t6.value.startsWith(`::`) ? -1 : e6.type === `pseudo` && e6.value.startsWith(`::`) && t6.type === `class` ? 1 : 0), e5.nodes = e5.nodes.concat(n4);
      }
      e4.replaceWith(...t4);
    }), r3.toString();
  }
  let s2 = /* @__PURE__ */ new Map();
  for (let e3 of i2) {
    let [n3] = s2.get(e3.parent) || [[], e3.source];
    s2.set(e3.parent, [n3, e3.source]);
    let [r3, i3] = ai(e3.params);
    if (e3.parent.type === `atrule`) {
      if (e3.parent.name === `screen`) {
        let t3 = e3.parent.params;
        throw e3.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${r3.map((e4) => `${t3}:${e4}`).join(` `)} instead.`);
      }
      throw e3.error(`@apply is not supported within nested at-rules like @${e3.parent.name}. You can fix this by un-nesting @${e3.parent.name}.`);
    }
    for (let o3 of r3) {
      if ([Zr(t2, `group`), Zr(t2, `peer`)].includes(o3)) throw e3.error(`@apply should not be used with the '${o3}' utility`);
      if (!a2.has(o3)) throw e3.error(`The \`${o3}\` class does not exist. If \`${o3}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
      let r4 = a2.get(o3);
      for (let [, t3] of r4) t3.type !== `atrule` && t3.walkRules(() => {
        throw e3.error([`The \`${o3}\` class cannot be used with \`@apply\` because \`@apply\` does not currently support nested CSS.`, "Rewrite the selector without nesting or configure the `tailwindcss/nesting` plugin:", `https://tailwindcss.com/docs/using-with-preprocessors#nesting`].join(`
`));
      });
      n3.push([o3, i3, r4]);
    }
  }
  for (let [e3, [n3, r3]] of s2) {
    let i3 = [];
    for (let [a4, s3, c2] of n3) {
      let n4 = [a4, ...Xr([a4], t2.tailwindConfig.separator)];
      for (let [u2, d2] of c2) {
        let c3 = qr(e3), f2 = qr(d2);
        if (f2 = f2.groups.filter((e4) => e4.some((e5) => n4.includes(e5))).flat(), f2 = f2.concat(Xr(f2, t2.tailwindConfig.separator)), c3.some((e4) => f2.includes(e4))) throw d2.error(`You cannot \`@apply\` the \`${a4}\` utility here because it creates a circular dependency.`);
        let p2 = l.root({ nodes: [d2.clone()] });
        p2.walk((e4) => {
          e4.source = r3;
        }), (d2.type !== `atrule` || d2.type === `atrule` && d2.name !== `keyframes`) && p2.walkRules((n5) => {
          if (!qr(n5).some((e4) => e4 === a4)) {
            n5.remove();
            return;
          }
          let r4 = typeof t2.tailwindConfig.important == `string` ? t2.tailwindConfig.important : null, i4 = e3.raws.tailwind !== void 0 && r4 && e3.selector.indexOf(r4) === 0 ? e3.selector.slice(r4.length) : e3.selector;
          i4 === `` && (i4 = e3.selector), n5.selector = o2(i4, n5.selector, a4), r4 && i4 !== e3.selector && (n5.selector = wr(n5.selector, r4)), n5.walkDecls((e4) => {
            e4.important = u2.important || s3;
          });
          let c4 = (0, F.default)().astSync(n5.selector);
          c4.each((e4) => sn(e4)), n5.selector = c4.toString();
        }), p2.nodes[0] && i3.push([u2.sort, p2.nodes[0]]);
      }
    }
    let a3 = t2.offsets.sort(i3).map((e4) => e4[1]);
    e3.after(a3);
  }
  for (let e3 of i2) e3.parent.nodes.length > 1 ? e3.remove() : e3.parent.remove();
  oi(e2, t2, n2);
}
function si(e2) {
  return (t2) => {
    oi(t2, e2, ri(() => ti(t2, e2)));
  };
}
var ci = t(((e2, t2) => {
  (function() {
    function e3(t3, n3, i2) {
      if (!t3) return null;
      e3.caseSensitive || (t3 = t3.toLowerCase());
      var a2 = e3.threshold === null ? null : e3.threshold * t3.length, o2 = e3.thresholdAbsolute, s2 = a2 !== null && o2 !== null ? Math.min(a2, o2) : a2 === null ? o2 === null ? null : o2 : a2, c2, l2, u2, d2, f2, p2 = n3.length;
      for (f2 = 0; f2 < p2; f2++) if (l2 = n3[f2], i2 && (l2 = l2[i2]), l2 && (u2 = e3.caseSensitive ? l2 : l2.toLowerCase(), d2 = r2(t3, u2, s2), (s2 === null || d2 < s2) && (s2 = d2, c2 = i2 && e3.returnWinningObject ? n3[f2] : l2, e3.returnFirstMatch))) return c2;
      return c2 || e3.nullResultValue;
    }
    e3.threshold = 0.4, e3.thresholdAbsolute = 20, e3.caseSensitive = false, e3.nullResultValue = null, e3.returnWinningObject = null, e3.returnFirstMatch = false, t2 !== void 0 && t2.exports ? t2.exports = e3 : window.didYouMean = e3;
    var n2 = 2 ** 32 - 1;
    function r2(e4, t3, r3) {
      r3 = r3 || r3 === 0 ? r3 : n2;
      var i2 = e4.length, a2 = t3.length;
      if (i2 === 0) return Math.min(r3 + 1, a2);
      if (a2 === 0) return Math.min(r3 + 1, i2);
      if (Math.abs(i2 - a2) > r3) return r3 + 1;
      var o2 = [], s2, c2, l2, u2, d2;
      for (s2 = 0; s2 <= a2; s2++) o2[s2] = [s2];
      for (c2 = 0; c2 <= i2; c2++) o2[0][c2] = c2;
      for (s2 = 1; s2 <= a2; s2++) {
        for (l2 = n2, u2 = 1, s2 > r3 && (u2 = s2 - r3), d2 = a2 + 1, d2 > r3 + s2 && (d2 = r3 + s2), c2 = 1; c2 <= i2; c2++) c2 < u2 || c2 > d2 ? o2[s2][c2] = r3 + 1 : t3.charAt(s2 - 1) === e4.charAt(c2 - 1) ? o2[s2][c2] = o2[s2 - 1][c2 - 1] : o2[s2][c2] = Math.min(o2[s2 - 1][c2 - 1] + 1, Math.min(o2[s2][c2 - 1] + 1, o2[s2 - 1][c2] + 1)), o2[s2][c2] < l2 && (l2 = o2[s2][c2]);
        if (l2 > r3) return r3 + 1;
      }
      return o2[a2][i2];
    }
  })();
})), li = t(((e2, t2) => {
  var n2 = 40, r2 = 41, i2 = 39, a2 = 34, o2 = 92, s2 = 47, c2 = 44, l2 = 58, u2 = 42, d2 = 117, f2 = 85, p2 = 43, m2 = /^[a-f0-9?-]+$/i;
  t2.exports = function(e3) {
    for (var t3 = [], h2 = e3, g2, _2, v2, y2, b2, x2, S2, C2, w2 = 0, T2 = h2.charCodeAt(w2), E2 = h2.length, D2 = [{ nodes: t3 }], O2 = 0, k2, A2 = ``, j2 = ``, M2 = ``; w2 < E2; ) if (T2 <= 32) {
      g2 = w2;
      do
        g2 += 1, T2 = h2.charCodeAt(g2);
      while (T2 <= 32);
      y2 = h2.slice(w2, g2), v2 = t3[t3.length - 1], T2 === r2 && O2 ? M2 = y2 : v2 && v2.type === `div` ? (v2.after = y2, v2.sourceEndIndex += y2.length) : T2 === c2 || T2 === l2 || T2 === s2 && h2.charCodeAt(g2 + 1) !== u2 && (!k2 || k2 && k2.type === `function` && false) ? j2 = y2 : t3.push({ type: `space`, sourceIndex: w2, sourceEndIndex: g2, value: y2 }), w2 = g2;
    } else if (T2 === i2 || T2 === a2) {
      g2 = w2, _2 = T2 === i2 ? `'` : `"`, y2 = { type: `string`, sourceIndex: w2, quote: _2 };
      do
        if (b2 = false, g2 = h2.indexOf(_2, g2 + 1), ~g2) for (x2 = g2; h2.charCodeAt(x2 - 1) === o2; ) --x2, b2 = !b2;
        else h2 += _2, g2 = h2.length - 1, y2.unclosed = true;
      while (b2);
      y2.value = h2.slice(w2 + 1, g2), y2.sourceEndIndex = y2.unclosed ? g2 : g2 + 1, t3.push(y2), w2 = g2 + 1, T2 = h2.charCodeAt(w2);
    } else if (T2 === s2 && h2.charCodeAt(w2 + 1) === u2) g2 = h2.indexOf(`*/`, w2), y2 = { type: `comment`, sourceIndex: w2, sourceEndIndex: g2 + 2 }, g2 === -1 && (y2.unclosed = true, g2 = h2.length, y2.sourceEndIndex = g2), y2.value = h2.slice(w2 + 2, g2), t3.push(y2), w2 = g2 + 2, T2 = h2.charCodeAt(w2);
    else if ((T2 === s2 || T2 === u2) && k2 && k2.type === `function`) y2 = h2[w2], t3.push({ type: `word`, sourceIndex: w2 - j2.length, sourceEndIndex: w2 + y2.length, value: y2 }), w2 += 1, T2 = h2.charCodeAt(w2);
    else if (T2 === s2 || T2 === c2 || T2 === l2) y2 = h2[w2], t3.push({ type: `div`, sourceIndex: w2 - j2.length, sourceEndIndex: w2 + y2.length, value: y2, before: j2, after: `` }), j2 = ``, w2 += 1, T2 = h2.charCodeAt(w2);
    else if (n2 === T2) {
      g2 = w2;
      do
        g2 += 1, T2 = h2.charCodeAt(g2);
      while (T2 <= 32);
      if (C2 = w2, y2 = { type: `function`, sourceIndex: w2 - A2.length, value: A2, before: h2.slice(C2 + 1, g2) }, w2 = g2, A2 === `url` && T2 !== i2 && T2 !== a2) {
        --g2;
        do
          if (b2 = false, g2 = h2.indexOf(`)`, g2 + 1), ~g2) for (x2 = g2; h2.charCodeAt(x2 - 1) === o2; ) --x2, b2 = !b2;
          else h2 += `)`, g2 = h2.length - 1, y2.unclosed = true;
        while (b2);
        S2 = g2;
        do
          --S2, T2 = h2.charCodeAt(S2);
        while (T2 <= 32);
        C2 < S2 ? (w2 === S2 + 1 ? y2.nodes = [] : y2.nodes = [{ type: `word`, sourceIndex: w2, sourceEndIndex: S2 + 1, value: h2.slice(w2, S2 + 1) }], y2.unclosed && S2 + 1 !== g2 ? (y2.after = ``, y2.nodes.push({ type: `space`, sourceIndex: S2 + 1, sourceEndIndex: g2, value: h2.slice(S2 + 1, g2) })) : (y2.after = h2.slice(S2 + 1, g2), y2.sourceEndIndex = g2)) : (y2.after = ``, y2.nodes = []), w2 = g2 + 1, y2.sourceEndIndex = y2.unclosed ? g2 : w2, T2 = h2.charCodeAt(w2), t3.push(y2);
      } else O2 += 1, y2.after = ``, y2.sourceEndIndex = w2 + 1, t3.push(y2), D2.push(y2), t3 = y2.nodes = [], k2 = y2;
      A2 = ``;
    } else if (r2 === T2 && O2) w2 += 1, T2 = h2.charCodeAt(w2), k2.after = M2, k2.sourceEndIndex += M2.length, M2 = ``, --O2, D2[D2.length - 1].sourceEndIndex = w2, D2.pop(), k2 = D2[O2], t3 = k2.nodes;
    else {
      g2 = w2;
      do
        T2 === o2 && (g2 += 1), g2 += 1, T2 = h2.charCodeAt(g2);
      while (g2 < E2 && !(T2 <= 32 || T2 === i2 || T2 === a2 || T2 === c2 || T2 === l2 || T2 === s2 || T2 === n2 || T2 === u2 && k2 && k2.type === `function` || T2 === s2 && k2.type === `function` || T2 === r2 && O2));
      y2 = h2.slice(w2, g2), n2 === T2 ? A2 = y2 : (d2 === y2.charCodeAt(0) || f2 === y2.charCodeAt(0)) && p2 === y2.charCodeAt(1) && m2.test(y2.slice(2)) ? t3.push({ type: `unicode-range`, sourceIndex: w2, sourceEndIndex: g2, value: y2 }) : t3.push({ type: `word`, sourceIndex: w2, sourceEndIndex: g2, value: y2 }), w2 = g2;
    }
    for (w2 = D2.length - 1; w2; --w2) D2[w2].unclosed = true, D2[w2].sourceEndIndex = h2.length;
    return D2[0].nodes;
  };
})), ui = t(((e2, t2) => {
  t2.exports = function e3(t3, n2, r2) {
    var i2, a2, o2, s2;
    for (i2 = 0, a2 = t3.length; i2 < a2; i2 += 1) o2 = t3[i2], r2 || (s2 = n2(o2, i2, t3)), s2 !== false && o2.type === `function` && Array.isArray(o2.nodes) && e3(o2.nodes, n2, r2), r2 && n2(o2, i2, t3);
  };
})), di = t(((e2, t2) => {
  function n2(e3, t3) {
    var n3 = e3.type, i2 = e3.value, a2, o2;
    return t3 && (o2 = t3(e3)) !== void 0 ? o2 : n3 === `word` || n3 === `space` ? i2 : n3 === `string` ? (a2 = e3.quote || ``, a2 + i2 + (e3.unclosed ? `` : a2)) : n3 === `comment` ? `/*` + i2 + (e3.unclosed ? `` : `*/`) : n3 === `div` ? (e3.before || ``) + i2 + (e3.after || ``) : Array.isArray(e3.nodes) ? (a2 = r2(e3.nodes, t3), n3 === `function` ? i2 + `(` + (e3.before || ``) + a2 + (e3.after || ``) + (e3.unclosed ? `` : `)`) : a2) : i2;
  }
  function r2(e3, t3) {
    var r3, i2;
    if (Array.isArray(e3)) {
      for (r3 = ``, i2 = e3.length - 1; ~i2; --i2) r3 = n2(e3[i2], t3) + r3;
      return r3;
    }
    return n2(e3, t3);
  }
  t2.exports = r2;
})), fi = t(((e2, t2) => {
  var n2 = 45, r2 = 43, i2 = 46, a2 = 101, o2 = 69;
  function s2(e3) {
    var t3 = e3.charCodeAt(0), a3;
    if (t3 === r2 || t3 === n2) {
      if (a3 = e3.charCodeAt(1), a3 >= 48 && a3 <= 57) return true;
      var o3 = e3.charCodeAt(2);
      return a3 === i2 && o3 >= 48 && o3 <= 57;
    }
    return t3 === i2 ? (a3 = e3.charCodeAt(1), a3 >= 48 && a3 <= 57) : t3 >= 48 && t3 <= 57;
  }
  t2.exports = function(e3) {
    var t3 = 0, c2 = e3.length, l2, u2, d2;
    if (c2 === 0 || !s2(e3)) return false;
    for (l2 = e3.charCodeAt(t3), (l2 === r2 || l2 === n2) && t3++; t3 < c2 && (l2 = e3.charCodeAt(t3), !(l2 < 48 || l2 > 57)); ) t3 += 1;
    if (l2 = e3.charCodeAt(t3), u2 = e3.charCodeAt(t3 + 1), l2 === i2 && u2 >= 48 && u2 <= 57) for (t3 += 2; t3 < c2 && (l2 = e3.charCodeAt(t3), !(l2 < 48 || l2 > 57)); ) t3 += 1;
    if (l2 = e3.charCodeAt(t3), u2 = e3.charCodeAt(t3 + 1), d2 = e3.charCodeAt(t3 + 2), (l2 === a2 || l2 === o2) && (u2 >= 48 && u2 <= 57 || (u2 === r2 || u2 === n2) && d2 >= 48 && d2 <= 57)) for (t3 += u2 === r2 || u2 === n2 ? 3 : 2; t3 < c2 && (l2 = e3.charCodeAt(t3), !(l2 < 48 || l2 > 57)); ) t3 += 1;
    return { number: e3.slice(0, t3), unit: e3.slice(t3) };
  };
})), pi = t(((e2, t2) => {
  var n2 = li(), r2 = ui(), i2 = di();
  function a2(e3) {
    return this instanceof a2 ? (this.nodes = n2(e3), this) : new a2(e3);
  }
  a2.prototype.toString = function() {
    return Array.isArray(this.nodes) ? i2(this.nodes) : ``;
  }, a2.prototype.walk = function(e3, t3) {
    return r2(this.nodes, e3, t3), this;
  }, a2.unit = fi(), a2.walk = r2, a2.stringify = i2, t2.exports = a2;
})), mi = e(ci()), hi = e(pi());
function gi(e2) {
  return typeof e2 == `object` && !!e2;
}
function _i(e2, t2) {
  let n2 = Kn(t2);
  do
    if (n2.pop(), (0, wn.default)(e2, n2) !== void 0) break;
  while (n2.length);
  return n2.length ? n2 : void 0;
}
function vi(e2) {
  return typeof e2 == `string` ? e2 : e2.reduce((e3, t2, n2) => t2.includes(`.`) ? `${e3}[${t2}]` : n2 === 0 ? t2 : `${e3}.${t2}`, ``);
}
function yi(e2) {
  return e2.map((e3) => `'${e3}'`).join(`, `);
}
function bi(e2) {
  return yi(Object.keys(e2));
}
function xi(e2, t2, n2, r2 = {}) {
  let i2 = Array.isArray(t2) ? vi(t2) : t2.replace(/^['"]+|['"]+$/g, ``), a2 = Array.isArray(t2) ? t2 : Kn(i2), o2 = (0, wn.default)(e2.theme, a2, n2);
  if (o2 === void 0) {
    let t3 = `'${i2}' does not exist in your theme config.`, n3 = a2.slice(0, -1), r3 = (0, wn.default)(e2.theme, n3);
    if (gi(r3)) {
      let i3 = Object.keys(r3).filter((t4) => xi(e2, [...n3, t4]).isValid), o3 = (0, mi.default)(a2[a2.length - 1], i3);
      o3 ? t3 += ` Did you mean '${vi([...n3, o3])}'?` : i3.length > 0 && (t3 += ` '${vi(n3)}' has the following valid keys: ${yi(i3)}`);
    } else {
      let n4 = _i(e2.theme, i2);
      if (n4) {
        let r4 = (0, wn.default)(e2.theme, n4);
        gi(r4) ? t3 += ` '${vi(n4)}' has the following keys: ${bi(r4)}` : t3 += ` '${vi(n4)}' is not an object.`;
      } else t3 += ` Your theme has the following top-level keys: ${bi(e2.theme)}`;
    }
    return { isValid: false, error: t3 };
  }
  if (!(typeof o2 == `string` || typeof o2 == `number` || typeof o2 == `function` || o2 instanceof String || o2 instanceof Number || Array.isArray(o2))) {
    let t3 = `'${i2}' was found but does not resolve to a string.`;
    if (gi(o2)) {
      let n3 = Object.keys(o2).filter((t4) => xi(e2, [...a2, t4]).isValid);
      n3.length && (t3 += ` Did you mean something like '${vi([...a2, n3[0]])}'?`);
    }
    return { isValid: false, error: t3 };
  }
  let [s2] = a2;
  return { isValid: true, value: Tn(s2)(o2, r2) };
}
function Si(e2, t2, n2) {
  t2 = t2.map((t3) => Ci(e2, t3, n2));
  let r2 = [``];
  for (let e3 of t2) e3.type === `div` && e3.value === `,` ? r2.push(``) : r2[r2.length - 1] += hi.default.stringify(e3);
  return r2;
}
function Ci(e2, t2, n2) {
  if (t2.type === `function` && n2[t2.value] !== void 0) {
    let r2 = Si(e2, t2.nodes, n2);
    t2.type = `word`, t2.value = n2[t2.value](e2, ...r2);
  }
  return t2;
}
function wi(e2, t2, n2) {
  return Object.keys(n2).some((e3) => t2.includes(`${e3}(`)) ? (0, hi.default)(t2).walk((t3) => {
    Ci(e2, t3, n2);
  }).toString() : t2;
}
var Ti = { atrule: `params`, decl: `value` };
function* Ei(e2) {
  e2 = e2.replace(/^['"]+|['"]+$/g, ``);
  let t2 = e2.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/), n2;
  yield [e2, void 0], t2 && (e2 = t2[1], n2 = t2[2], yield [e2, n2]);
}
function Di(e2, t2, n2) {
  let r2 = Array.from(Ei(t2)).map(([t3, r3]) => Object.assign(xi(e2, t3, n2, { opacityValue: r3 }), { resolvedPath: t3, alpha: r3 }));
  return r2.find((e3) => e3.isValid) ?? r2[0];
}
function Oi(e2) {
  let t2 = e2.tailwindConfig, n2 = { theme: (n3, r2, ...i2) => {
    let { isValid: a2, value: o2, error: s2, alpha: c2 } = Di(t2, r2, i2.length ? i2 : void 0);
    if (!a2) {
      let t3 = n3.parent, r3 = t3?.raws.tailwind?.candidate;
      if (t3 && r3 !== void 0) {
        e2.markInvalidUtilityNode(t3), t3.remove(), y.warn(`invalid-theme-key-in-class`, [`The utility \`${r3}\` contains an invalid theme value and was not generated.`]);
        return;
      }
      throw n3.error(s2);
    }
    let l2 = Yt(o2);
    return (c2 !== void 0 || l2 !== void 0 && typeof l2 == `function`) && (c2 === void 0 && (c2 = 1), o2 = Ue(l2, c2, l2)), o2;
  }, screen: (e3, n3) => {
    n3 = n3.replace(/^['"]+/g, ``).replace(/['"]+$/g, ``);
    let r2 = zn(t2.theme.screens).find(({ name: e4 }) => e4 === n3);
    if (!r2) throw e3.error(`The '${n3}' screen does not exist in your theme.`);
    return Dn(r2);
  } };
  return (e3) => {
    e3.walk((e4) => {
      let t3 = Ti[e4.type];
      t3 !== void 0 && (e4[t3] = wi(e4, e4[t3], n2));
    });
  };
}
var ki = `preflight.container.accessibility.pointerEvents.visibility.position.inset.isolation.zIndex.order.gridColumn.gridColumnStart.gridColumnEnd.gridRow.gridRowStart.gridRowEnd.float.clear.margin.boxSizing.lineClamp.display.aspectRatio.size.height.maxHeight.minHeight.width.minWidth.maxWidth.flex.flexShrink.flexGrow.flexBasis.tableLayout.captionSide.borderCollapse.borderSpacing.transformOrigin.translate.rotate.skew.scale.transform.animation.cursor.touchAction.userSelect.resize.scrollSnapType.scrollSnapAlign.scrollSnapStop.scrollMargin.scrollPadding.listStylePosition.listStyleType.listStyleImage.appearance.columns.breakBefore.breakInside.breakAfter.gridAutoColumns.gridAutoFlow.gridAutoRows.gridTemplateColumns.gridTemplateRows.flexDirection.flexWrap.placeContent.placeItems.alignContent.alignItems.justifyContent.justifyItems.gap.space.divideWidth.divideStyle.divideColor.divideOpacity.placeSelf.alignSelf.justifySelf.overflow.overscrollBehavior.scrollBehavior.textOverflow.hyphens.whitespace.textWrap.wordBreak.borderRadius.borderWidth.borderStyle.borderColor.borderOpacity.backgroundColor.backgroundOpacity.backgroundImage.gradientColorStops.boxDecorationBreak.backgroundSize.backgroundAttachment.backgroundClip.backgroundPosition.backgroundRepeat.backgroundOrigin.fill.stroke.strokeWidth.objectFit.objectPosition.padding.textAlign.textIndent.verticalAlign.fontFamily.fontSize.fontWeight.textTransform.fontStyle.fontVariantNumeric.lineHeight.letterSpacing.textColor.textOpacity.textDecoration.textDecorationColor.textDecorationStyle.textDecorationThickness.textUnderlineOffset.fontSmoothing.placeholderColor.placeholderOpacity.caretColor.accentColor.opacity.backgroundBlendMode.mixBlendMode.boxShadow.boxShadowColor.outlineStyle.outlineWidth.outlineOffset.outlineColor.ringWidth.ringColor.ringOpacity.ringOffsetWidth.ringOffsetColor.blur.brightness.contrast.dropShadow.grayscale.hueRotate.invert.saturate.sepia.filter.backdropBlur.backdropBrightness.backdropContrast.backdropGrayscale.backdropHueRotate.backdropInvert.backdropOpacity.backdropSaturate.backdropSepia.backdropFilter.transitionProperty.transitionDelay.transitionDuration.transitionTimingFunction.willChange.contain.content.forcedColorAdjust`.split(`.`);
function Ai(e2, t2) {
  return e2 === void 0 ? t2 : Array.isArray(e2) ? e2 : [...new Set(t2.filter((t3) => e2 !== false && e2[t3] !== false).concat(Object.keys(e2).filter((t3) => e2[t3] !== false)))];
}
function ji({ version: e2, from: t2, to: n2 }) {
  y.warn(`${t2}-color-renamed`, [`As of Tailwind CSS ${e2}, \`${t2}\` has been renamed to \`${n2}\`.`, `Update your configuration file to silence this warning.`]);
}
var Mi = { inherit: `inherit`, current: `currentColor`, transparent: `transparent`, black: `#000`, white: `#fff`, slate: { 50: `#f8fafc`, 100: `#f1f5f9`, 200: `#e2e8f0`, 300: `#cbd5e1`, 400: `#94a3b8`, 500: `#64748b`, 600: `#475569`, 700: `#334155`, 800: `#1e293b`, 900: `#0f172a`, 950: `#020617` }, gray: { 50: `#f9fafb`, 100: `#f3f4f6`, 200: `#e5e7eb`, 300: `#d1d5db`, 400: `#9ca3af`, 500: `#6b7280`, 600: `#4b5563`, 700: `#374151`, 800: `#1f2937`, 900: `#111827`, 950: `#030712` }, zinc: { 50: `#fafafa`, 100: `#f4f4f5`, 200: `#e4e4e7`, 300: `#d4d4d8`, 400: `#a1a1aa`, 500: `#71717a`, 600: `#52525b`, 700: `#3f3f46`, 800: `#27272a`, 900: `#18181b`, 950: `#09090b` }, neutral: { 50: `#fafafa`, 100: `#f5f5f5`, 200: `#e5e5e5`, 300: `#d4d4d4`, 400: `#a3a3a3`, 500: `#737373`, 600: `#525252`, 700: `#404040`, 800: `#262626`, 900: `#171717`, 950: `#0a0a0a` }, stone: { 50: `#fafaf9`, 100: `#f5f5f4`, 200: `#e7e5e4`, 300: `#d6d3d1`, 400: `#a8a29e`, 500: `#78716c`, 600: `#57534e`, 700: `#44403c`, 800: `#292524`, 900: `#1c1917`, 950: `#0c0a09` }, red: { 50: `#fef2f2`, 100: `#fee2e2`, 200: `#fecaca`, 300: `#fca5a5`, 400: `#f87171`, 500: `#ef4444`, 600: `#dc2626`, 700: `#b91c1c`, 800: `#991b1b`, 900: `#7f1d1d`, 950: `#450a0a` }, orange: { 50: `#fff7ed`, 100: `#ffedd5`, 200: `#fed7aa`, 300: `#fdba74`, 400: `#fb923c`, 500: `#f97316`, 600: `#ea580c`, 700: `#c2410c`, 800: `#9a3412`, 900: `#7c2d12`, 950: `#431407` }, amber: { 50: `#fffbeb`, 100: `#fef3c7`, 200: `#fde68a`, 300: `#fcd34d`, 400: `#fbbf24`, 500: `#f59e0b`, 600: `#d97706`, 700: `#b45309`, 800: `#92400e`, 900: `#78350f`, 950: `#451a03` }, yellow: { 50: `#fefce8`, 100: `#fef9c3`, 200: `#fef08a`, 300: `#fde047`, 400: `#facc15`, 500: `#eab308`, 600: `#ca8a04`, 700: `#a16207`, 800: `#854d0e`, 900: `#713f12`, 950: `#422006` }, lime: { 50: `#f7fee7`, 100: `#ecfccb`, 200: `#d9f99d`, 300: `#bef264`, 400: `#a3e635`, 500: `#84cc16`, 600: `#65a30d`, 700: `#4d7c0f`, 800: `#3f6212`, 900: `#365314`, 950: `#1a2e05` }, green: { 50: `#f0fdf4`, 100: `#dcfce7`, 200: `#bbf7d0`, 300: `#86efac`, 400: `#4ade80`, 500: `#22c55e`, 600: `#16a34a`, 700: `#15803d`, 800: `#166534`, 900: `#14532d`, 950: `#052e16` }, emerald: { 50: `#ecfdf5`, 100: `#d1fae5`, 200: `#a7f3d0`, 300: `#6ee7b7`, 400: `#34d399`, 500: `#10b981`, 600: `#059669`, 700: `#047857`, 800: `#065f46`, 900: `#064e3b`, 950: `#022c22` }, teal: { 50: `#f0fdfa`, 100: `#ccfbf1`, 200: `#99f6e4`, 300: `#5eead4`, 400: `#2dd4bf`, 500: `#14b8a6`, 600: `#0d9488`, 700: `#0f766e`, 800: `#115e59`, 900: `#134e4a`, 950: `#042f2e` }, cyan: { 50: `#ecfeff`, 100: `#cffafe`, 200: `#a5f3fc`, 300: `#67e8f9`, 400: `#22d3ee`, 500: `#06b6d4`, 600: `#0891b2`, 700: `#0e7490`, 800: `#155e75`, 900: `#164e63`, 950: `#083344` }, sky: { 50: `#f0f9ff`, 100: `#e0f2fe`, 200: `#bae6fd`, 300: `#7dd3fc`, 400: `#38bdf8`, 500: `#0ea5e9`, 600: `#0284c7`, 700: `#0369a1`, 800: `#075985`, 900: `#0c4a6e`, 950: `#082f49` }, blue: { 50: `#eff6ff`, 100: `#dbeafe`, 200: `#bfdbfe`, 300: `#93c5fd`, 400: `#60a5fa`, 500: `#3b82f6`, 600: `#2563eb`, 700: `#1d4ed8`, 800: `#1e40af`, 900: `#1e3a8a`, 950: `#172554` }, indigo: { 50: `#eef2ff`, 100: `#e0e7ff`, 200: `#c7d2fe`, 300: `#a5b4fc`, 400: `#818cf8`, 500: `#6366f1`, 600: `#4f46e5`, 700: `#4338ca`, 800: `#3730a3`, 900: `#312e81`, 950: `#1e1b4b` }, violet: { 50: `#f5f3ff`, 100: `#ede9fe`, 200: `#ddd6fe`, 300: `#c4b5fd`, 400: `#a78bfa`, 500: `#8b5cf6`, 600: `#7c3aed`, 700: `#6d28d9`, 800: `#5b21b6`, 900: `#4c1d95`, 950: `#2e1065` }, purple: { 50: `#faf5ff`, 100: `#f3e8ff`, 200: `#e9d5ff`, 300: `#d8b4fe`, 400: `#c084fc`, 500: `#a855f7`, 600: `#9333ea`, 700: `#7e22ce`, 800: `#6b21a8`, 900: `#581c87`, 950: `#3b0764` }, fuchsia: { 50: `#fdf4ff`, 100: `#fae8ff`, 200: `#f5d0fe`, 300: `#f0abfc`, 400: `#e879f9`, 500: `#d946ef`, 600: `#c026d3`, 700: `#a21caf`, 800: `#86198f`, 900: `#701a75`, 950: `#4a044e` }, pink: { 50: `#fdf2f8`, 100: `#fce7f3`, 200: `#fbcfe8`, 300: `#f9a8d4`, 400: `#f472b6`, 500: `#ec4899`, 600: `#db2777`, 700: `#be185d`, 800: `#9d174d`, 900: `#831843`, 950: `#500724` }, rose: { 50: `#fff1f2`, 100: `#ffe4e6`, 200: `#fecdd3`, 300: `#fda4af`, 400: `#fb7185`, 500: `#f43f5e`, 600: `#e11d48`, 700: `#be123c`, 800: `#9f1239`, 900: `#881337`, 950: `#4c0519` }, get lightBlue() {
  return ji({ version: `v2.2`, from: `lightBlue`, to: `sky` }), this.sky;
}, get warmGray() {
  return ji({ version: `v3.0`, from: `warmGray`, to: `stone` }), this.stone;
}, get trueGray() {
  return ji({ version: `v3.0`, from: `trueGray`, to: `neutral` }), this.neutral;
}, get coolGray() {
  return ji({ version: `v3.0`, from: `coolGray`, to: `gray` }), this.gray;
}, get blueGray() {
  return ji({ version: `v3.0`, from: `blueGray`, to: `slate` }), this.slate;
} };
function Ni(e2, ...t2) {
  for (let n2 of t2) {
    for (let t3 in n2) e2?.hasOwnProperty?.(t3) || (e2[t3] = n2[t3]);
    for (let t3 of Object.getOwnPropertySymbols(n2)) e2?.hasOwnProperty?.(t3) || (e2[t3] = n2[t3]);
  }
  return e2;
}
function Pi(e2) {
  (() => {
    if (e2.purge || !e2.content || !Array.isArray(e2.content) && !(typeof e2.content == `object` && e2.content !== null)) return false;
    if (Array.isArray(e2.content)) return e2.content.every((e3) => typeof e3 == `string` ? true : !(typeof e3?.raw != `string` || e3?.extension && typeof e3?.extension != `string`));
    if (typeof e2.content == `object` && e2.content !== null) {
      if (Object.keys(e2.content).some((e3) => ![`files`, `relative`, `extract`, `transform`].includes(e3))) return false;
      if (Array.isArray(e2.content.files)) {
        if (!e2.content.files.every((e3) => typeof e3 == `string` ? true : !(typeof e3?.raw != `string` || e3?.extension && typeof e3?.extension != `string`))) return false;
        if (typeof e2.content.extract == `object`) {
          for (let t2 of Object.values(e2.content.extract)) if (typeof t2 != `function`) return false;
        } else if (!(e2.content.extract === void 0 || typeof e2.content.extract == `function`)) return false;
        if (typeof e2.content.transform == `object`) {
          for (let t2 of Object.values(e2.content.transform)) if (typeof t2 != `function`) return false;
        } else if (!(e2.content.transform === void 0 || typeof e2.content.transform == `function`)) return false;
        if (typeof e2.content.relative != `boolean` && e2.content.relative !== void 0) return false;
      }
      return true;
    }
    return false;
  })() || y.warn(`purge-deprecation`, ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", `Update your configuration file to eliminate this warning.`, `https://tailwindcss.com/docs/upgrade-guide#configure-content-sources`]), e2.safelist = (() => {
    let { content: t2, purge: n2, safelist: r2 } = e2;
    return Array.isArray(r2) ? r2 : Array.isArray(t2?.safelist) ? t2.safelist : Array.isArray(n2?.safelist) ? n2.safelist : Array.isArray(n2?.options?.safelist) ? n2.options.safelist : [];
  })(), e2.blocklist = (() => {
    let { blocklist: t2 } = e2;
    if (Array.isArray(t2)) {
      if (t2.every((e3) => typeof e3 == `string`)) return t2;
      y.warn(`blocklist-invalid`, ["The `blocklist` option must be an array of strings.", `https://tailwindcss.com/docs/content-configuration#discarding-classes`]);
    }
    return [];
  })(), typeof e2.prefix == `function` ? (y.warn(`prefix-function`, ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", `https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function`]), e2.prefix = ``) : e2.prefix = e2.prefix ?? ``, e2.content = { relative: (() => {
    let { content: t2 } = e2;
    return t2?.relative ? t2.relative : U(e2, `relativeContentPathsByDefault`);
  })(), files: (() => {
    let { content: t2, purge: n2 } = e2;
    return Array.isArray(n2) ? n2 : Array.isArray(n2?.content) ? n2.content : Array.isArray(t2) ? t2 : Array.isArray(t2?.content) ? t2.content : Array.isArray(t2?.files) ? t2.files : [];
  })(), extract: (() => {
    let t2 = e2.purge?.extract ? e2.purge.extract : e2.content?.extract ? e2.content.extract : e2.purge?.extract?.DEFAULT ? e2.purge.extract.DEFAULT : e2.content?.extract?.DEFAULT ? e2.content.extract.DEFAULT : e2.purge?.options?.extractors ? e2.purge.options.extractors : e2.content?.options?.extractors ? e2.content.options.extractors : {}, n2 = {}, r2 = (() => {
      if (e2.purge?.options?.defaultExtractor) return e2.purge.options.defaultExtractor;
      if (e2.content?.options?.defaultExtractor) return e2.content.options.defaultExtractor;
    })();
    if (r2 !== void 0 && (n2.DEFAULT = r2), typeof t2 == `function`) n2.DEFAULT = t2;
    else if (Array.isArray(t2)) for (let { extensions: e3, extractor: r3 } of t2 ?? []) for (let t3 of e3) n2[t3] = r3;
    else typeof t2 == `object` && t2 && Object.assign(n2, t2);
    return n2;
  })(), transform: (() => {
    let t2 = e2.purge?.transform ? e2.purge.transform : e2.content?.transform ? e2.content.transform : e2.purge?.transform?.DEFAULT ? e2.purge.transform.DEFAULT : e2.content?.transform?.DEFAULT ? e2.content.transform.DEFAULT : {}, n2 = {};
    return typeof t2 == `function` ? n2.DEFAULT = t2 : typeof t2 == `object` && t2 && Object.assign(n2, t2), n2;
  })() };
  for (let t2 of e2.content.files) if (typeof t2 == `string` && /{([^,]*?)}/g.test(t2)) {
    y.warn(`invalid-glob-braces`, [`The glob pattern ${v(t2)} in your Tailwind CSS configuration is invalid.`, `Update it to ${v(t2.replace(/{([^,]*?)}/g, `$1`))} to silence this warning.`]);
    break;
  }
  return e2;
}
function Fi(e2) {
  return Array.isArray(e2) ? e2.map((e3) => Fi(e3)) : typeof e2 == `object` && e2 ? Object.fromEntries(Object.entries(e2).map(([e3, t2]) => [e3, Fi(t2)])) : e2;
}
function Ii(e2) {
  return typeof e2 == `function`;
}
function Li(e2, ...t2) {
  let n2 = t2.pop();
  for (let r2 of t2) for (let t3 in r2) {
    let i2 = n2(e2[t3], r2[t3]);
    i2 === void 0 ? I(e2[t3]) && I(r2[t3]) ? e2[t3] = Li({}, e2[t3], r2[t3], n2) : e2[t3] = r2[t3] : e2[t3] = i2;
  }
  return e2;
}
var Ri = { colors: Mi, negative(e2) {
  return Object.keys(e2).filter((t2) => e2[t2] !== `0`).reduce((t2, n2) => {
    let r2 = Rt(e2[n2]);
    return r2 !== void 0 && (t2[`-${n2}`] = r2), t2;
  }, {});
}, breakpoints(e2) {
  return Object.keys(e2).filter((t2) => typeof e2[t2] == `string`).reduce((t2, n2) => ({ ...t2, [`screen-${n2}`]: e2[n2] }), {});
} };
function zi(e2, ...t2) {
  return Ii(e2) ? e2(...t2) : e2;
}
function Bi(e2) {
  return e2.reduce((e3, { extend: t2 }) => Li(e3, t2, (e4, t3) => e4 === void 0 ? [t3] : Array.isArray(e4) ? [t3, ...e4] : [t3, e4]), {});
}
function Vi(e2) {
  return { ...e2.reduce((e3, t2) => Ni(e3, t2), {}), extend: Bi(e2) };
}
function Hi(e2, t2) {
  if (Array.isArray(e2) && I(e2[0])) return e2.concat(t2);
  if (Array.isArray(t2) && I(t2[0]) && I(e2)) return [e2, ...t2];
  if (Array.isArray(t2)) return t2;
}
function Ui({ extend: e2, ...t2 }) {
  return Li(t2, e2, (e3, t3) => !Ii(e3) && !t3.some(Ii) ? Li({}, e3, ...t3, Hi) : (n2, r2) => Li({}, ...[e3, ...t3].map((e4) => zi(e4, n2, r2)), Hi));
}
function* Wi(e2) {
  let t2 = Kn(e2);
  if (t2.length === 0 || (yield t2, Array.isArray(e2))) return;
  let n2 = e2.match(/^(.*?)\s*\/\s*([^/]+)$/);
  if (n2 !== null) {
    let [, e3, t3] = n2, r2 = Kn(e3);
    r2.alpha = t3, yield r2;
  }
}
function Gi(e2) {
  let t2 = (n2, r2) => {
    for (let r3 of Wi(n2)) {
      let n3 = 0, i2 = e2;
      for (; i2 != null && n3 < r3.length; ) i2 = i2[r3[n3++]], i2 = Ii(i2) && (r3.alpha === void 0 || n3 <= r3.length - 1) ? i2(t2, Ri) : i2;
      if (i2 !== void 0) {
        if (r3.alpha !== void 0) {
          let e3 = Yt(i2);
          return Ue(e3, r3.alpha, Y(e3));
        }
        return I(i2) ? Fi(i2) : i2;
      }
    }
    return r2;
  };
  return Object.assign(t2, { theme: t2, ...Ri }), Object.keys(e2).reduce((n2, r2) => (n2[r2] = Ii(e2[r2]) ? e2[r2](t2, Ri) : e2[r2], n2), {});
}
function Ki(e2) {
  let t2 = [];
  return e2.forEach((e3) => {
    t2 = [...t2, e3];
    let n2 = e3?.plugins ?? [];
    n2.length !== 0 && n2.forEach((e4) => {
      e4.__isOptionsFunction && (e4 = e4()), t2 = [...t2, ...Ki([e4?.config ?? {}])];
    });
  }), t2;
}
function qi(e2) {
  return [...e2].reduceRight((e3, t2) => Ii(t2) ? t2({ corePlugins: e3 }) : Ai(t2, e3), ki);
}
function Ji(e2) {
  return [...e2].reduceRight((e3, t2) => [...e3, ...t2], []);
}
function Yi(e2) {
  let t2 = [...Ki(e2), { prefix: ``, important: false, separator: `:` }];
  return Pi(Ni({ theme: Gi(Ui(Vi(t2.map((e3) => e3?.theme ?? {})))), corePlugins: qi(t2.map((e3) => e3.corePlugins)), plugins: Ji(e2.map((e3) => e3?.plugins ?? [])) }, ...t2));
}
var Xi = e(t(((e2, t2) => {
  t2.exports = { content: [], presets: [], darkMode: `media`, theme: { accentColor: ({ theme: e3 }) => ({ ...e3(`colors`), auto: `auto` }), animation: { none: `none`, spin: `spin 1s linear infinite`, ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`, pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, bounce: `bounce 1s infinite` }, aria: { busy: `busy="true"`, checked: `checked="true"`, disabled: `disabled="true"`, expanded: `expanded="true"`, hidden: `hidden="true"`, pressed: `pressed="true"`, readonly: `readonly="true"`, required: `required="true"`, selected: `selected="true"` }, aspectRatio: { auto: `auto`, square: `1 / 1`, video: `16 / 9` }, backdropBlur: ({ theme: e3 }) => e3(`blur`), backdropBrightness: ({ theme: e3 }) => e3(`brightness`), backdropContrast: ({ theme: e3 }) => e3(`contrast`), backdropGrayscale: ({ theme: e3 }) => e3(`grayscale`), backdropHueRotate: ({ theme: e3 }) => e3(`hueRotate`), backdropInvert: ({ theme: e3 }) => e3(`invert`), backdropOpacity: ({ theme: e3 }) => e3(`opacity`), backdropSaturate: ({ theme: e3 }) => e3(`saturate`), backdropSepia: ({ theme: e3 }) => e3(`sepia`), backgroundColor: ({ theme: e3 }) => e3(`colors`), backgroundImage: { none: `none`, "gradient-to-t": `linear-gradient(to top, var(--tw-gradient-stops))`, "gradient-to-tr": `linear-gradient(to top right, var(--tw-gradient-stops))`, "gradient-to-r": `linear-gradient(to right, var(--tw-gradient-stops))`, "gradient-to-br": `linear-gradient(to bottom right, var(--tw-gradient-stops))`, "gradient-to-b": `linear-gradient(to bottom, var(--tw-gradient-stops))`, "gradient-to-bl": `linear-gradient(to bottom left, var(--tw-gradient-stops))`, "gradient-to-l": `linear-gradient(to left, var(--tw-gradient-stops))`, "gradient-to-tl": `linear-gradient(to top left, var(--tw-gradient-stops))` }, backgroundOpacity: ({ theme: e3 }) => e3(`opacity`), backgroundPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, backgroundSize: { auto: `auto`, cover: `cover`, contain: `contain` }, blur: { 0: `0`, none: ``, sm: `4px`, DEFAULT: `8px`, md: `12px`, lg: `16px`, xl: `24px`, "2xl": `40px`, "3xl": `64px` }, borderColor: ({ theme: e3 }) => ({ ...e3(`colors`), DEFAULT: e3(`colors.gray.200`, `currentColor`) }), borderOpacity: ({ theme: e3 }) => e3(`opacity`), borderRadius: { none: `0px`, sm: `0.125rem`, DEFAULT: `0.25rem`, md: `0.375rem`, lg: `0.5rem`, xl: `0.75rem`, "2xl": `1rem`, "3xl": `1.5rem`, full: `9999px` }, borderSpacing: ({ theme: e3 }) => ({ ...e3(`spacing`) }), borderWidth: { DEFAULT: `1px`, 0: `0px`, 2: `2px`, 4: `4px`, 8: `8px` }, boxShadow: { sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`, DEFAULT: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`, md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`, lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`, xl: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`, "2xl": `0 25px 50px -12px rgb(0 0 0 / 0.25)`, inner: `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)`, none: `none` }, boxShadowColor: ({ theme: e3 }) => e3(`colors`), brightness: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, 200: `2` }, caretColor: ({ theme: e3 }) => e3(`colors`), colors: ({ colors: e3 }) => ({ inherit: e3.inherit, current: e3.current, transparent: e3.transparent, black: e3.black, white: e3.white, slate: e3.slate, gray: e3.gray, zinc: e3.zinc, neutral: e3.neutral, stone: e3.stone, red: e3.red, orange: e3.orange, amber: e3.amber, yellow: e3.yellow, lime: e3.lime, green: e3.green, emerald: e3.emerald, teal: e3.teal, cyan: e3.cyan, sky: e3.sky, blue: e3.blue, indigo: e3.indigo, violet: e3.violet, purple: e3.purple, fuchsia: e3.fuchsia, pink: e3.pink, rose: e3.rose }), columns: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, "3xs": `16rem`, "2xs": `18rem`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem` }, container: {}, content: { none: `none` }, contrast: { 0: `0`, 50: `.5`, 75: `.75`, 100: `1`, 125: `1.25`, 150: `1.5`, 200: `2` }, cursor: { auto: `auto`, default: `default`, pointer: `pointer`, wait: `wait`, text: `text`, move: `move`, help: `help`, "not-allowed": `not-allowed`, none: `none`, "context-menu": `context-menu`, progress: `progress`, cell: `cell`, crosshair: `crosshair`, "vertical-text": `vertical-text`, alias: `alias`, copy: `copy`, "no-drop": `no-drop`, grab: `grab`, grabbing: `grabbing`, "all-scroll": `all-scroll`, "col-resize": `col-resize`, "row-resize": `row-resize`, "n-resize": `n-resize`, "e-resize": `e-resize`, "s-resize": `s-resize`, "w-resize": `w-resize`, "ne-resize": `ne-resize`, "nw-resize": `nw-resize`, "se-resize": `se-resize`, "sw-resize": `sw-resize`, "ew-resize": `ew-resize`, "ns-resize": `ns-resize`, "nesw-resize": `nesw-resize`, "nwse-resize": `nwse-resize`, "zoom-in": `zoom-in`, "zoom-out": `zoom-out` }, divideColor: ({ theme: e3 }) => e3(`borderColor`), divideOpacity: ({ theme: e3 }) => e3(`borderOpacity`), divideWidth: ({ theme: e3 }) => e3(`borderWidth`), dropShadow: { sm: `0 1px 1px rgb(0 0 0 / 0.05)`, DEFAULT: [`0 1px 2px rgb(0 0 0 / 0.1)`, `0 1px 1px rgb(0 0 0 / 0.06)`], md: [`0 4px 3px rgb(0 0 0 / 0.07)`, `0 2px 2px rgb(0 0 0 / 0.06)`], lg: [`0 10px 8px rgb(0 0 0 / 0.04)`, `0 4px 3px rgb(0 0 0 / 0.1)`], xl: [`0 20px 13px rgb(0 0 0 / 0.03)`, `0 8px 5px rgb(0 0 0 / 0.08)`], "2xl": `0 25px 25px rgb(0 0 0 / 0.15)`, none: `0 0 #0000` }, fill: ({ theme: e3 }) => ({ none: `none`, ...e3(`colors`) }), flex: { 1: `1 1 0%`, auto: `1 1 auto`, initial: `0 1 auto`, none: `none` }, flexBasis: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%` }), flexGrow: { 0: `0`, DEFAULT: `1` }, flexShrink: { 0: `0`, DEFAULT: `1` }, fontFamily: { sans: [`ui-sans-serif`, `system-ui`, `sans-serif`, `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`], serif: [`ui-serif`, `Georgia`, `Cambria`, `"Times New Roman"`, `Times`, `serif`], mono: [`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `"Liberation Mono"`, `"Courier New"`, `monospace`] }, fontSize: { xs: [`0.75rem`, { lineHeight: `1rem` }], sm: [`0.875rem`, { lineHeight: `1.25rem` }], base: [`1rem`, { lineHeight: `1.5rem` }], lg: [`1.125rem`, { lineHeight: `1.75rem` }], xl: [`1.25rem`, { lineHeight: `1.75rem` }], "2xl": [`1.5rem`, { lineHeight: `2rem` }], "3xl": [`1.875rem`, { lineHeight: `2.25rem` }], "4xl": [`2.25rem`, { lineHeight: `2.5rem` }], "5xl": [`3rem`, { lineHeight: `1` }], "6xl": [`3.75rem`, { lineHeight: `1` }], "7xl": [`4.5rem`, { lineHeight: `1` }], "8xl": [`6rem`, { lineHeight: `1` }], "9xl": [`8rem`, { lineHeight: `1` }] }, fontWeight: { thin: `100`, extralight: `200`, light: `300`, normal: `400`, medium: `500`, semibold: `600`, bold: `700`, extrabold: `800`, black: `900` }, gap: ({ theme: e3 }) => e3(`spacing`), gradientColorStops: ({ theme: e3 }) => e3(`colors`), gradientColorStopPositions: { "0%": `0%`, "5%": `5%`, "10%": `10%`, "15%": `15%`, "20%": `20%`, "25%": `25%`, "30%": `30%`, "35%": `35%`, "40%": `40%`, "45%": `45%`, "50%": `50%`, "55%": `55%`, "60%": `60%`, "65%": `65%`, "70%": `70%`, "75%": `75%`, "80%": `80%`, "85%": `85%`, "90%": `90%`, "95%": `95%`, "100%": `100%` }, grayscale: { 0: `0`, DEFAULT: `100%` }, gridAutoColumns: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridAutoRows: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridColumn: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridColumnEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridColumnStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridRow: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridRowEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridRowStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13` }, gridTemplateColumns: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))` }, gridTemplateRows: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))` }, height: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content` }), hueRotate: { 0: `0deg`, 15: `15deg`, 30: `30deg`, 60: `60deg`, 90: `90deg`, 180: `180deg` }, inset: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%` }), invert: { 0: `0`, DEFAULT: `100%` }, keyframes: { spin: { to: { transform: `rotate(360deg)` } }, ping: { "75%, 100%": { transform: `scale(2)`, opacity: `0` } }, pulse: { "50%": { opacity: `.5` } }, bounce: { "0%, 100%": { transform: `translateY(-25%)`, animationTimingFunction: `cubic-bezier(0.8,0,1,1)` }, "50%": { transform: `none`, animationTimingFunction: `cubic-bezier(0,0,0.2,1)` } } }, letterSpacing: { tighter: `-0.05em`, tight: `-0.025em`, normal: `0em`, wide: `0.025em`, wider: `0.05em`, widest: `0.1em` }, lineHeight: { none: `1`, tight: `1.25`, snug: `1.375`, normal: `1.5`, relaxed: `1.625`, loose: `2`, 3: `.75rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem` }, listStyleType: { none: `none`, disc: `disc`, decimal: `decimal` }, listStyleImage: { none: `none` }, margin: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`) }), lineClamp: { 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6` }, maxHeight: ({ theme: e3 }) => ({ ...e3(`spacing`), none: `none`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content` }), maxWidth: ({ theme: e3, breakpoints: t3 }) => ({ ...e3(`spacing`), none: `none`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, prose: `65ch`, ...t3(e3(`screens`)) }), minHeight: ({ theme: e3 }) => ({ ...e3(`spacing`), full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content` }), minWidth: ({ theme: e3 }) => ({ ...e3(`spacing`), full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content` }), objectPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, opacity: { 0: `0`, 5: `0.05`, 10: `0.1`, 15: `0.15`, 20: `0.2`, 25: `0.25`, 30: `0.3`, 35: `0.35`, 40: `0.4`, 45: `0.45`, 50: `0.5`, 55: `0.55`, 60: `0.6`, 65: `0.65`, 70: `0.7`, 75: `0.75`, 80: `0.8`, 85: `0.85`, 90: `0.9`, 95: `0.95`, 100: `1` }, order: { first: `-9999`, last: `9999`, none: `0`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12` }, outlineColor: ({ theme: e3 }) => e3(`colors`), outlineOffset: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, outlineWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, padding: ({ theme: e3 }) => e3(`spacing`), placeholderColor: ({ theme: e3 }) => e3(`colors`), placeholderOpacity: ({ theme: e3 }) => e3(`opacity`), ringColor: ({ theme: e3 }) => ({ DEFAULT: e3(`colors.blue.500`, `#3b82f6`), ...e3(`colors`) }), ringOffsetColor: ({ theme: e3 }) => e3(`colors`), ringOffsetWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, ringOpacity: ({ theme: e3 }) => ({ DEFAULT: `0.5`, ...e3(`opacity`) }), ringWidth: { DEFAULT: `3px`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, rotate: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, 45: `45deg`, 90: `90deg`, 180: `180deg` }, saturate: { 0: `0`, 50: `.5`, 100: `1`, 150: `1.5`, 200: `2` }, scale: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5` }, screens: { sm: `640px`, md: `768px`, lg: `1024px`, xl: `1280px`, "2xl": `1536px` }, scrollMargin: ({ theme: e3 }) => ({ ...e3(`spacing`) }), scrollPadding: ({ theme: e3 }) => e3(`spacing`), sepia: { 0: `0`, DEFAULT: `100%` }, skew: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg` }, space: ({ theme: e3 }) => ({ ...e3(`spacing`) }), spacing: { px: `1px`, 0: `0px`, 0.5: `0.125rem`, 1: `0.25rem`, 1.5: `0.375rem`, 2: `0.5rem`, 2.5: `0.625rem`, 3: `0.75rem`, 3.5: `0.875rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem`, 11: `2.75rem`, 12: `3rem`, 14: `3.5rem`, 16: `4rem`, 20: `5rem`, 24: `6rem`, 28: `7rem`, 32: `8rem`, 36: `9rem`, 40: `10rem`, 44: `11rem`, 48: `12rem`, 52: `13rem`, 56: `14rem`, 60: `15rem`, 64: `16rem`, 72: `18rem`, 80: `20rem`, 96: `24rem` }, stroke: ({ theme: e3 }) => ({ none: `none`, ...e3(`colors`) }), strokeWidth: { 0: `0`, 1: `1`, 2: `2` }, supports: {}, data: {}, textColor: ({ theme: e3 }) => e3(`colors`), textDecorationColor: ({ theme: e3 }) => e3(`colors`), textDecorationThickness: { auto: `auto`, "from-font": `from-font`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, textIndent: ({ theme: e3 }) => ({ ...e3(`spacing`) }), textOpacity: ({ theme: e3 }) => e3(`opacity`), textUnderlineOffset: { auto: `auto`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px` }, transformOrigin: { center: `center`, top: `top`, "top-right": `top right`, right: `right`, "bottom-right": `bottom right`, bottom: `bottom`, "bottom-left": `bottom left`, left: `left`, "top-left": `top left` }, transitionDelay: { 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms` }, transitionDuration: { DEFAULT: `150ms`, 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms` }, transitionProperty: { none: `none`, all: `all`, DEFAULT: `color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`, colors: `color, background-color, border-color, text-decoration-color, fill, stroke`, opacity: `opacity`, shadow: `box-shadow`, transform: `transform` }, transitionTimingFunction: { DEFAULT: `cubic-bezier(0.4, 0, 0.2, 1)`, linear: `linear`, in: `cubic-bezier(0.4, 0, 1, 1)`, out: `cubic-bezier(0, 0, 0.2, 1)`, "in-out": `cubic-bezier(0.4, 0, 0.2, 1)` }, translate: ({ theme: e3 }) => ({ ...e3(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%` }), size: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content` }), width: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`), "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, screen: `100vw`, svw: `100svw`, lvw: `100lvw`, dvw: `100dvw`, min: `min-content`, max: `max-content`, fit: `fit-content` }), willChange: { auto: `auto`, scroll: `scroll-position`, contents: `contents`, transform: `transform` }, zIndex: { auto: `auto`, 0: `0`, 10: `10`, 20: `20`, 30: `30`, 40: `40`, 50: `50` } }, plugins: [] };
}))());
function Zi(e2) {
  let t2 = (e2?.presets ?? [Xi.default]).slice().reverse().flatMap((e3) => Zi(e3 instanceof Function ? e3() : e3)), n2 = { respectDefaultRingColorOpacity: { theme: { ringColor: ({ theme: e3 }) => ({ DEFAULT: `#3b82f67f`, ...e3(`colors`) }) } }, disableColorOpacityUtilitiesByDefault: { corePlugins: { backgroundOpacity: false, borderOpacity: false, divideOpacity: false, placeholderOpacity: false, ringOpacity: false, textOpacity: false } } };
  return [e2, ...Object.keys(n2).filter((t3) => U(e2, t3)).map((e3) => n2[e3]), ...t2];
}
function Qi(...e2) {
  let [, ...t2] = Zi(e2[0]);
  return Yi([...e2, ...t2]);
}
var $i = `/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"); /* 4 */
  font-feature-settings: theme('fontFamily.sans[1].fontFeatureSettings', normal); /* 5 */
  font-variation-settings: theme('fontFamily.sans[1].fontVariationSettings', normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace); /* 1 */
  font-feature-settings: theme('fontFamily.mono[1].fontFeatureSettings', normal); /* 2 */
  font-variation-settings: theme('fontFamily.mono[1].fontVariationSettings', normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: theme('colors.gray.400', #9ca3af); /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
`;
async function ea(e2 = {}, t2 = `/tailwind.config.js`) {
  let n2 = await c(t2, void 0, `config`, e2);
  return window.windpress && !window.windpress.__MEMFS_VOLUME__ && (window.windpress.__MEMFS_VOLUME__ = new Cn.Volume(), window.windpress.__MEMFS_VOLUME__.mkdirSync(`/css`, { recursive: true }), window.windpress.__MEMFS_VOLUME__.writeFileSync(`/css/preflight.css`, $i, `utf8`)), Qi(n2.module);
}
export {
  m as _,
  Cr as a,
  U as c,
  be as d,
  ye as f,
  y as g,
  b as h,
  Gr as i,
  Ut as l,
  x as m,
  Oi as n,
  zn as o,
  S as p,
  si as r,
  Dn as s,
  ea as t,
  B as u
};
