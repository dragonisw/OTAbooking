import { t as e } from "./chunk-DcEfI0Mx.js";
var t = e(((e2) => {
  var t2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.split(``);
  e2.encode = function(e3) {
    if (0 <= e3 && e3 < t2.length) return t2[e3];
    throw TypeError(`Must be between 0 and 63: ` + e3);
  }, e2.decode = function(e3) {
    var t3 = 65, n2 = 90, r2 = 97, i2 = 122, a2 = 48;
    return t3 <= e3 && e3 <= n2 ? e3 - t3 : r2 <= e3 && e3 <= i2 ? e3 - r2 + 26 : a2 <= e3 && e3 <= 57 ? e3 - a2 + 52 : e3 == 43 ? 62 : e3 == 47 ? 63 : -1;
  };
})), n = e(((e2) => {
  var n2 = t(), r2 = 5, i2 = 1 << r2, a2 = i2 - 1, o2 = i2;
  function s(e3) {
    return e3 < 0 ? (-e3 << 1) + 1 : (e3 << 1) + 0;
  }
  function c(e3) {
    var t2 = (e3 & 1) == 1, n3 = e3 >> 1;
    return t2 ? -n3 : n3;
  }
  e2.encode = function(e3) {
    var t2 = ``, i3, c2 = s(e3);
    do
      i3 = c2 & a2, c2 >>>= r2, c2 > 0 && (i3 |= o2), t2 += n2.encode(i3);
    while (c2 > 0);
    return t2;
  }, e2.decode = function(e3, t2, i3) {
    var s2 = e3.length, l = 0, u = 0, d, f;
    do {
      if (t2 >= s2) throw Error(`Expected more digits in base 64 VLQ value.`);
      if (f = n2.decode(e3.charCodeAt(t2++)), f === -1) throw Error(`Invalid base64 digit: ` + e3.charAt(t2 - 1));
      d = !!(f & o2), f &= a2, l += f << u, u += r2;
    } while (d);
    i3.value = c(l), i3.rest = t2;
  };
})), r = e(((e2) => {
  function t2(e3, t3, n3) {
    if (t3 in e3) return e3[t3];
    if (arguments.length === 3) return n3;
    throw Error(`"` + t3 + `" is a required argument.`);
  }
  e2.getArg = t2;
  var n2 = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r2 = /^data:.+\,.+$/;
  function i2(e3) {
    var t3 = e3.match(n2);
    return t3 ? { scheme: t3[1], auth: t3[2], host: t3[3], port: t3[4], path: t3[5] } : null;
  }
  e2.urlParse = i2;
  function a2(e3) {
    var t3 = ``;
    return e3.scheme && (t3 += e3.scheme + `:`), t3 += `//`, e3.auth && (t3 += e3.auth + `@`), e3.host && (t3 += e3.host), e3.port && (t3 += `:` + e3.port), e3.path && (t3 += e3.path), t3;
  }
  e2.urlGenerate = a2;
  var o2 = 32;
  function s(e3) {
    var t3 = [];
    return function(n3) {
      for (var r3 = 0; r3 < t3.length; r3++) if (t3[r3].input === n3) {
        var i3 = t3[0];
        return t3[0] = t3[r3], t3[r3] = i3, t3[0].result;
      }
      var a3 = e3(n3);
      return t3.unshift({ input: n3, result: a3 }), t3.length > o2 && t3.pop(), a3;
    };
  }
  var c = s(function(t3) {
    var n3 = t3, r3 = i2(t3);
    if (r3) {
      if (!r3.path) return t3;
      n3 = r3.path;
    }
    for (var o3 = e2.isAbsolute(n3), s2 = [], c2 = 0, l2 = 0; ; ) if (c2 = l2, l2 = n3.indexOf(`/`, c2), l2 === -1) {
      s2.push(n3.slice(c2));
      break;
    } else for (s2.push(n3.slice(c2, l2)); l2 < n3.length && n3[l2] === `/`; ) l2++;
    for (var u2, d2 = 0, l2 = s2.length - 1; l2 >= 0; l2--) u2 = s2[l2], u2 === `.` ? s2.splice(l2, 1) : u2 === `..` ? d2++ : d2 > 0 && (u2 === `` ? (s2.splice(l2 + 1, d2), d2 = 0) : (s2.splice(l2, 2), d2--));
    return n3 = s2.join(`/`), n3 === `` && (n3 = o3 ? `/` : `.`), r3 ? (r3.path = n3, a2(r3)) : n3;
  });
  e2.normalize = c;
  function l(e3, t3) {
    e3 === `` && (e3 = `.`), t3 === `` && (t3 = `.`);
    var n3 = i2(t3), o3 = i2(e3);
    if (o3 && (e3 = o3.path || `/`), n3 && !n3.scheme) return o3 && (n3.scheme = o3.scheme), a2(n3);
    if (n3 || t3.match(r2)) return t3;
    if (o3 && !o3.host && !o3.path) return o3.host = t3, a2(o3);
    var s2 = t3.charAt(0) === `/` ? t3 : c(e3.replace(/\/+$/, ``) + `/` + t3);
    return o3 ? (o3.path = s2, a2(o3)) : s2;
  }
  e2.join = l, e2.isAbsolute = function(e3) {
    return e3.charAt(0) === `/` || n2.test(e3);
  };
  function u(e3, t3) {
    e3 === `` && (e3 = `.`), e3 = e3.replace(/\/$/, ``);
    for (var n3 = 0; t3.indexOf(e3 + `/`) !== 0; ) {
      var r3 = e3.lastIndexOf(`/`);
      if (r3 < 0 || (e3 = e3.slice(0, r3), e3.match(/^([^\/]+:\/)?\/*$/))) return t3;
      ++n3;
    }
    return Array(n3 + 1).join(`../`) + t3.substr(e3.length + 1);
  }
  e2.relative = u;
  var d = (function() {
    return !(`__proto__` in /* @__PURE__ */ Object.create(null));
  })();
  function f(e3) {
    return e3;
  }
  function p(e3) {
    return h(e3) ? `$` + e3 : e3;
  }
  e2.toSetString = d ? f : p;
  function m(e3) {
    return h(e3) ? e3.slice(1) : e3;
  }
  e2.fromSetString = d ? f : m;
  function h(e3) {
    if (!e3) return false;
    var t3 = e3.length;
    if (t3 < 9 || e3.charCodeAt(t3 - 1) !== 95 || e3.charCodeAt(t3 - 2) !== 95 || e3.charCodeAt(t3 - 3) !== 111 || e3.charCodeAt(t3 - 4) !== 116 || e3.charCodeAt(t3 - 5) !== 111 || e3.charCodeAt(t3 - 6) !== 114 || e3.charCodeAt(t3 - 7) !== 112 || e3.charCodeAt(t3 - 8) !== 95 || e3.charCodeAt(t3 - 9) !== 95) return false;
    for (var n3 = t3 - 10; n3 >= 0; n3--) if (e3.charCodeAt(n3) !== 36) return false;
    return true;
  }
  function g(e3, t3, n3) {
    var r3 = b(e3.source, t3.source);
    return r3 !== 0 || (r3 = e3.originalLine - t3.originalLine, r3 !== 0) || (r3 = e3.originalColumn - t3.originalColumn, r3 !== 0 || n3) || (r3 = e3.generatedColumn - t3.generatedColumn, r3 !== 0) || (r3 = e3.generatedLine - t3.generatedLine, r3 !== 0) ? r3 : b(e3.name, t3.name);
  }
  e2.compareByOriginalPositions = g;
  function _(e3, t3, n3) {
    var r3 = e3.originalLine - t3.originalLine;
    return r3 !== 0 || (r3 = e3.originalColumn - t3.originalColumn, r3 !== 0 || n3) || (r3 = e3.generatedColumn - t3.generatedColumn, r3 !== 0) || (r3 = e3.generatedLine - t3.generatedLine, r3 !== 0) ? r3 : b(e3.name, t3.name);
  }
  e2.compareByOriginalPositionsNoSource = _;
  function v(e3, t3, n3) {
    var r3 = e3.generatedLine - t3.generatedLine;
    return r3 !== 0 || (r3 = e3.generatedColumn - t3.generatedColumn, r3 !== 0 || n3) || (r3 = b(e3.source, t3.source), r3 !== 0) || (r3 = e3.originalLine - t3.originalLine, r3 !== 0) || (r3 = e3.originalColumn - t3.originalColumn, r3 !== 0) ? r3 : b(e3.name, t3.name);
  }
  e2.compareByGeneratedPositionsDeflated = v;
  function y(e3, t3, n3) {
    var r3 = e3.generatedColumn - t3.generatedColumn;
    return r3 !== 0 || n3 || (r3 = b(e3.source, t3.source), r3 !== 0) || (r3 = e3.originalLine - t3.originalLine, r3 !== 0) || (r3 = e3.originalColumn - t3.originalColumn, r3 !== 0) ? r3 : b(e3.name, t3.name);
  }
  e2.compareByGeneratedPositionsDeflatedNoLine = y;
  function b(e3, t3) {
    return e3 === t3 ? 0 : e3 === null ? 1 : t3 === null ? -1 : e3 > t3 ? 1 : -1;
  }
  function x(e3, t3) {
    var n3 = e3.generatedLine - t3.generatedLine;
    return n3 !== 0 || (n3 = e3.generatedColumn - t3.generatedColumn, n3 !== 0) || (n3 = b(e3.source, t3.source), n3 !== 0) || (n3 = e3.originalLine - t3.originalLine, n3 !== 0) || (n3 = e3.originalColumn - t3.originalColumn, n3 !== 0) ? n3 : b(e3.name, t3.name);
  }
  e2.compareByGeneratedPositionsInflated = x;
  function S(e3) {
    return JSON.parse(e3.replace(/^\)]}'[^\n]*\n/, ``));
  }
  e2.parseSourceMapInput = S;
  function C(e3, t3, n3) {
    if (t3 || (t3 = ``), e3 && (e3[e3.length - 1] !== `/` && t3[0] !== `/` && (e3 += `/`), t3 = e3 + t3), n3) {
      var r3 = i2(n3);
      if (!r3) throw Error(`sourceMapURL could not be parsed`);
      if (r3.path) {
        var o3 = r3.path.lastIndexOf(`/`);
        o3 >= 0 && (r3.path = r3.path.substring(0, o3 + 1));
      }
      t3 = l(a2(r3), t3);
    }
    return c(t3);
  }
  e2.computeSourceURL = C;
})), i = e(((e2) => {
  var t2 = r(), n2 = Object.prototype.hasOwnProperty, i2 = typeof Map < `u`;
  function a2() {
    this._array = [], this._set = i2 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  a2.fromArray = function(e3, t3) {
    for (var n3 = new a2(), r2 = 0, i3 = e3.length; r2 < i3; r2++) n3.add(e3[r2], t3);
    return n3;
  }, a2.prototype.size = function() {
    return i2 ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a2.prototype.add = function(e3, r2) {
    var a3 = i2 ? e3 : t2.toSetString(e3), o2 = i2 ? this.has(e3) : n2.call(this._set, a3), s = this._array.length;
    (!o2 || r2) && this._array.push(e3), o2 || (i2 ? this._set.set(e3, s) : this._set[a3] = s);
  }, a2.prototype.has = function(e3) {
    if (i2) return this._set.has(e3);
    var r2 = t2.toSetString(e3);
    return n2.call(this._set, r2);
  }, a2.prototype.indexOf = function(e3) {
    if (i2) {
      var r2 = this._set.get(e3);
      if (r2 >= 0) return r2;
    } else {
      var a3 = t2.toSetString(e3);
      if (n2.call(this._set, a3)) return this._set[a3];
    }
    throw Error(`"` + e3 + `" is not in the set.`);
  }, a2.prototype.at = function(e3) {
    if (e3 >= 0 && e3 < this._array.length) return this._array[e3];
    throw Error(`No element indexed by ` + e3);
  }, a2.prototype.toArray = function() {
    return this._array.slice();
  }, e2.ArraySet = a2;
})), a = e(((e2) => {
  var t2 = r();
  function n2(e3, n3) {
    var r2 = e3.generatedLine, i3 = n3.generatedLine, a2 = e3.generatedColumn, o2 = n3.generatedColumn;
    return i3 > r2 || i3 == r2 && o2 >= a2 || t2.compareByGeneratedPositionsInflated(e3, n3) <= 0;
  }
  function i2() {
    this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  i2.prototype.unsortedForEach = function(e3, t3) {
    this._array.forEach(e3, t3);
  }, i2.prototype.add = function(e3) {
    n2(this._last, e3) ? (this._last = e3, this._array.push(e3)) : (this._sorted = false, this._array.push(e3));
  }, i2.prototype.toArray = function() {
    return this._sorted || (this._sorted = (this._array.sort(t2.compareByGeneratedPositionsInflated), true)), this._array;
  }, e2.MappingList = i2;
})), o = e(((e2) => {
  var t2 = n(), o2 = r(), s = i().ArraySet, c = a().MappingList;
  function l(e3) {
    e3 || (e3 = {}), this._file = o2.getArg(e3, `file`, null), this._sourceRoot = o2.getArg(e3, `sourceRoot`, null), this._skipValidation = o2.getArg(e3, `skipValidation`, false), this._ignoreInvalidMapping = o2.getArg(e3, `ignoreInvalidMapping`, false), this._sources = new s(), this._names = new s(), this._mappings = new c(), this._sourcesContents = null;
  }
  l.prototype._version = 3, l.fromSourceMap = function(e3, t3) {
    var n2 = e3.sourceRoot, r2 = new l(Object.assign(t3 || {}, { file: e3.file, sourceRoot: n2 }));
    return e3.eachMapping(function(e4) {
      var t4 = { generated: { line: e4.generatedLine, column: e4.generatedColumn } };
      e4.source != null && (t4.source = e4.source, n2 != null && (t4.source = o2.relative(n2, t4.source)), t4.original = { line: e4.originalLine, column: e4.originalColumn }, e4.name != null && (t4.name = e4.name)), r2.addMapping(t4);
    }), e3.sources.forEach(function(t4) {
      var i2 = t4;
      n2 !== null && (i2 = o2.relative(n2, t4)), r2._sources.has(i2) || r2._sources.add(i2);
      var a2 = e3.sourceContentFor(t4);
      a2 != null && r2.setSourceContent(t4, a2);
    }), r2;
  }, l.prototype.addMapping = function(e3) {
    var t3 = o2.getArg(e3, `generated`), n2 = o2.getArg(e3, `original`, null), r2 = o2.getArg(e3, `source`, null), i2 = o2.getArg(e3, `name`, null);
    !this._skipValidation && this._validateMapping(t3, n2, r2, i2) === false || (r2 != null && (r2 = String(r2), this._sources.has(r2) || this._sources.add(r2)), i2 != null && (i2 = String(i2), this._names.has(i2) || this._names.add(i2)), this._mappings.add({ generatedLine: t3.line, generatedColumn: t3.column, originalLine: n2 != null && n2.line, originalColumn: n2 != null && n2.column, source: r2, name: i2 }));
  }, l.prototype.setSourceContent = function(e3, t3) {
    var n2 = e3;
    this._sourceRoot != null && (n2 = o2.relative(this._sourceRoot, n2)), t3 == null ? this._sourcesContents && (delete this._sourcesContents[o2.toSetString(n2)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null)) : (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[o2.toSetString(n2)] = t3);
  }, l.prototype.applySourceMap = function(e3, t3, n2) {
    var r2 = t3;
    if (t3 == null) {
      if (e3.file == null) throw Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
      r2 = e3.file;
    }
    var i2 = this._sourceRoot;
    i2 != null && (r2 = o2.relative(i2, r2));
    var a2 = new s(), c2 = new s();
    this._mappings.unsortedForEach(function(t4) {
      if (t4.source === r2 && t4.originalLine != null) {
        var s2 = e3.originalPositionFor({ line: t4.originalLine, column: t4.originalColumn });
        s2.source != null && (t4.source = s2.source, n2 != null && (t4.source = o2.join(n2, t4.source)), i2 != null && (t4.source = o2.relative(i2, t4.source)), t4.originalLine = s2.line, t4.originalColumn = s2.column, s2.name != null && (t4.name = s2.name));
      }
      var l2 = t4.source;
      l2 != null && !a2.has(l2) && a2.add(l2);
      var u = t4.name;
      u != null && !c2.has(u) && c2.add(u);
    }, this), this._sources = a2, this._names = c2, e3.sources.forEach(function(t4) {
      var r3 = e3.sourceContentFor(t4);
      r3 != null && (n2 != null && (t4 = o2.join(n2, t4)), i2 != null && (t4 = o2.relative(i2, t4)), this.setSourceContent(t4, r3));
    }, this);
  }, l.prototype._validateMapping = function(e3, t3, n2, r2) {
    if (t3 && typeof t3.line != `number` && typeof t3.column != `number`) {
      var i2 = `original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.`;
      if (this._ignoreInvalidMapping) return typeof console < `u` && console.warn && console.warn(i2), false;
      throw Error(i2);
    }
    if (!(e3 && `line` in e3 && `column` in e3 && e3.line > 0 && e3.column >= 0 && !t3 && !n2 && !r2) && !(e3 && `line` in e3 && `column` in e3 && t3 && `line` in t3 && `column` in t3 && e3.line > 0 && e3.column >= 0 && t3.line > 0 && t3.column >= 0 && n2)) {
      var i2 = `Invalid mapping: ` + JSON.stringify({ generated: e3, source: n2, original: t3, name: r2 });
      if (this._ignoreInvalidMapping) return typeof console < `u` && console.warn && console.warn(i2), false;
      throw Error(i2);
    }
  }, l.prototype._serializeMappings = function() {
    for (var e3 = 0, n2 = 1, r2 = 0, i2 = 0, a2 = 0, s2 = 0, c2 = ``, l2, u, d, f, p = this._mappings.toArray(), m = 0, h = p.length; m < h; m++) {
      if (u = p[m], l2 = ``, u.generatedLine !== n2) for (e3 = 0; u.generatedLine !== n2; ) l2 += `;`, n2++;
      else if (m > 0) {
        if (!o2.compareByGeneratedPositionsInflated(u, p[m - 1])) continue;
        l2 += `,`;
      }
      l2 += t2.encode(u.generatedColumn - e3), e3 = u.generatedColumn, u.source != null && (f = this._sources.indexOf(u.source), l2 += t2.encode(f - s2), s2 = f, l2 += t2.encode(u.originalLine - 1 - i2), i2 = u.originalLine - 1, l2 += t2.encode(u.originalColumn - r2), r2 = u.originalColumn, u.name != null && (d = this._names.indexOf(u.name), l2 += t2.encode(d - a2), a2 = d)), c2 += l2;
    }
    return c2;
  }, l.prototype._generateSourcesContent = function(e3, t3) {
    return e3.map(function(e4) {
      if (!this._sourcesContents) return null;
      t3 != null && (e4 = o2.relative(t3, e4));
      var n2 = o2.toSetString(e4);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, n2) ? this._sourcesContents[n2] : null;
    }, this);
  }, l.prototype.toJSON = function() {
    var e3 = { version: this._version, sources: this._sources.toArray(), names: this._names.toArray(), mappings: this._serializeMappings() };
    return this._file != null && (e3.file = this._file), this._sourceRoot != null && (e3.sourceRoot = this._sourceRoot), this._sourcesContents && (e3.sourcesContent = this._generateSourcesContent(e3.sources, e3.sourceRoot)), e3;
  }, l.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, e2.SourceMapGenerator = l;
}));
export {
  n as i,
  i as n,
  r,
  o as t
};
