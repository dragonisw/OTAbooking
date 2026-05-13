import { t as e } from "./chunk-DcEfI0Mx.js";
import { n as t, t as n } from "./dist-UMash2f5.js";
var r = e(((e2, r2) => {
  n();
  function i(e3) {
    if (typeof e3 != `string`) throw TypeError(`Path must be a string. Received ` + JSON.stringify(e3));
  }
  function a(e3, t2) {
    for (var n2 = ``, r3 = 0, i2 = -1, a2 = 0, o2, s2 = 0; s2 <= e3.length; ++s2) {
      if (s2 < e3.length) o2 = e3.charCodeAt(s2);
      else if (o2 === 47) break;
      else o2 = 47;
      if (o2 === 47) {
        if (!(i2 === s2 - 1 || a2 === 1)) if (i2 !== s2 - 1 && a2 === 2) {
          if (n2.length < 2 || r3 !== 2 || n2.charCodeAt(n2.length - 1) !== 46 || n2.charCodeAt(n2.length - 2) !== 46) {
            if (n2.length > 2) {
              var c = n2.lastIndexOf(`/`);
              if (c !== n2.length - 1) {
                c === -1 ? (n2 = ``, r3 = 0) : (n2 = n2.slice(0, c), r3 = n2.length - 1 - n2.lastIndexOf(`/`)), i2 = s2, a2 = 0;
                continue;
              }
            } else if (n2.length === 2 || n2.length === 1) {
              n2 = ``, r3 = 0, i2 = s2, a2 = 0;
              continue;
            }
          }
          t2 && (n2.length > 0 ? n2 += `/..` : n2 = `..`, r3 = 2);
        } else n2.length > 0 ? n2 += `/` + e3.slice(i2 + 1, s2) : n2 = e3.slice(i2 + 1, s2), r3 = s2 - i2 - 1;
        i2 = s2, a2 = 0;
      } else o2 === 46 && a2 !== -1 ? ++a2 : a2 = -1;
    }
    return n2;
  }
  function o(e3, t2) {
    var n2 = t2.dir || t2.root, r3 = t2.base || (t2.name || ``) + (t2.ext || ``);
    return n2 ? n2 === t2.root ? n2 + r3 : n2 + e3 + r3 : r3;
  }
  var s = { resolve: function() {
    for (var e3 = ``, n2 = false, r3, o2 = arguments.length - 1; o2 >= -1 && !n2; o2--) {
      var s2;
      o2 >= 0 ? s2 = arguments[o2] : (r3 === void 0 && (r3 = t.cwd()), s2 = r3), i(s2), s2.length !== 0 && (e3 = s2 + `/` + e3, n2 = s2.charCodeAt(0) === 47);
    }
    return e3 = a(e3, !n2), n2 ? e3.length > 0 ? `/` + e3 : `/` : e3.length > 0 ? e3 : `.`;
  }, normalize: function(e3) {
    if (i(e3), e3.length === 0) return `.`;
    var t2 = e3.charCodeAt(0) === 47, n2 = e3.charCodeAt(e3.length - 1) === 47;
    return e3 = a(e3, !t2), e3.length === 0 && !t2 && (e3 = `.`), e3.length > 0 && n2 && (e3 += `/`), t2 ? `/` + e3 : e3;
  }, isAbsolute: function(e3) {
    return i(e3), e3.length > 0 && e3.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return `.`;
    for (var e3, t2 = 0; t2 < arguments.length; ++t2) {
      var n2 = arguments[t2];
      i(n2), n2.length > 0 && (e3 === void 0 ? e3 = n2 : e3 += `/` + n2);
    }
    return e3 === void 0 ? `.` : s.normalize(e3);
  }, relative: function(e3, t2) {
    if (i(e3), i(t2), e3 === t2 || (e3 = s.resolve(e3), t2 = s.resolve(t2), e3 === t2)) return ``;
    for (var n2 = 1; n2 < e3.length && e3.charCodeAt(n2) === 47; ++n2) ;
    for (var r3 = e3.length, a2 = r3 - n2, o2 = 1; o2 < t2.length && t2.charCodeAt(o2) === 47; ++o2) ;
    for (var c = t2.length - o2, l = a2 < c ? a2 : c, u = -1, d = 0; d <= l; ++d) {
      if (d === l) {
        if (c > l) {
          if (t2.charCodeAt(o2 + d) === 47) return t2.slice(o2 + d + 1);
          if (d === 0) return t2.slice(o2 + d);
        } else a2 > l && (e3.charCodeAt(n2 + d) === 47 ? u = d : d === 0 && (u = 0));
        break;
      }
      var f = e3.charCodeAt(n2 + d);
      if (f !== t2.charCodeAt(o2 + d)) break;
      f === 47 && (u = d);
    }
    var p = ``;
    for (d = n2 + u + 1; d <= r3; ++d) (d === r3 || e3.charCodeAt(d) === 47) && (p.length === 0 ? p += `..` : p += `/..`);
    return p.length > 0 ? p + t2.slice(o2 + u) : (o2 += u, t2.charCodeAt(o2) === 47 && ++o2, t2.slice(o2));
  }, _makeLong: function(e3) {
    return e3;
  }, dirname: function(e3) {
    if (i(e3), e3.length === 0) return `.`;
    for (var t2 = e3.charCodeAt(0), n2 = t2 === 47, r3 = -1, a2 = true, o2 = e3.length - 1; o2 >= 1; --o2) if (t2 = e3.charCodeAt(o2), t2 === 47) {
      if (!a2) {
        r3 = o2;
        break;
      }
    } else a2 = false;
    return r3 === -1 ? n2 ? `/` : `.` : n2 && r3 === 1 ? `//` : e3.slice(0, r3);
  }, basename: function(e3, t2) {
    if (t2 !== void 0 && typeof t2 != `string`) throw TypeError(`"ext" argument must be a string`);
    i(e3);
    var n2 = 0, r3 = -1, a2 = true, o2;
    if (t2 !== void 0 && t2.length > 0 && t2.length <= e3.length) {
      if (t2.length === e3.length && t2 === e3) return ``;
      var s2 = t2.length - 1, c = -1;
      for (o2 = e3.length - 1; o2 >= 0; --o2) {
        var l = e3.charCodeAt(o2);
        if (l === 47) {
          if (!a2) {
            n2 = o2 + 1;
            break;
          }
        } else c === -1 && (a2 = false, c = o2 + 1), s2 >= 0 && (l === t2.charCodeAt(s2) ? --s2 === -1 && (r3 = o2) : (s2 = -1, r3 = c));
      }
      return n2 === r3 ? r3 = c : r3 === -1 && (r3 = e3.length), e3.slice(n2, r3);
    } else {
      for (o2 = e3.length - 1; o2 >= 0; --o2) if (e3.charCodeAt(o2) === 47) {
        if (!a2) {
          n2 = o2 + 1;
          break;
        }
      } else r3 === -1 && (a2 = false, r3 = o2 + 1);
      return r3 === -1 ? `` : e3.slice(n2, r3);
    }
  }, extname: function(e3) {
    i(e3);
    for (var t2 = -1, n2 = 0, r3 = -1, a2 = true, o2 = 0, s2 = e3.length - 1; s2 >= 0; --s2) {
      var c = e3.charCodeAt(s2);
      if (c === 47) {
        if (!a2) {
          n2 = s2 + 1;
          break;
        }
        continue;
      }
      r3 === -1 && (a2 = false, r3 = s2 + 1), c === 46 ? t2 === -1 ? t2 = s2 : o2 !== 1 && (o2 = 1) : t2 !== -1 && (o2 = -1);
    }
    return t2 === -1 || r3 === -1 || o2 === 0 || o2 === 1 && t2 === r3 - 1 && t2 === n2 + 1 ? `` : e3.slice(t2, r3);
  }, format: function(e3) {
    if (typeof e3 != `object` || !e3) throw TypeError(`The "pathObject" argument must be of type Object. Received type ` + typeof e3);
    return o(`/`, e3);
  }, parse: function(e3) {
    i(e3);
    var t2 = { root: ``, dir: ``, base: ``, ext: ``, name: `` };
    if (e3.length === 0) return t2;
    var n2 = e3.charCodeAt(0), r3 = n2 === 47, a2;
    r3 ? (t2.root = `/`, a2 = 1) : a2 = 0;
    for (var o2 = -1, s2 = 0, c = -1, l = true, u = e3.length - 1, d = 0; u >= a2; --u) {
      if (n2 = e3.charCodeAt(u), n2 === 47) {
        if (!l) {
          s2 = u + 1;
          break;
        }
        continue;
      }
      c === -1 && (l = false, c = u + 1), n2 === 46 ? o2 === -1 ? o2 = u : d !== 1 && (d = 1) : o2 !== -1 && (d = -1);
    }
    return o2 === -1 || c === -1 || d === 0 || d === 1 && o2 === c - 1 && o2 === s2 + 1 ? c !== -1 && (s2 === 0 && r3 ? t2.base = t2.name = e3.slice(1, c) : t2.base = t2.name = e3.slice(s2, c)) : (s2 === 0 && r3 ? (t2.name = e3.slice(1, o2), t2.base = e3.slice(1, c)) : (t2.name = e3.slice(s2, o2), t2.base = e3.slice(s2, c)), t2.ext = e3.slice(o2, c)), s2 > 0 ? t2.dir = e3.slice(0, s2 - 1) : r3 && (t2.dir = `/`), t2;
  }, sep: `/`, delimiter: `:`, win32: null, posix: null };
  s.posix = s, r2.exports = s;
}));
export {
  r as t
};
