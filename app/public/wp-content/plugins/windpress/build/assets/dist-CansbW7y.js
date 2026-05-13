import { n as e } from "./chunk-DcEfI0Mx.js";
function t(e2) {
  var t2 = e2.length;
  if (t2 % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
  var n2 = e2.indexOf(`=`);
  n2 === -1 && (n2 = t2);
  var r2 = n2 === t2 ? 0 : 4 - n2 % 4;
  return [n2, r2];
}
function n(e2) {
  var n2 = t(e2), r2 = n2[0], i2 = n2[1];
  return (r2 + i2) * 3 / 4 - i2;
}
function r(e2, t2, n2) {
  return (t2 + n2) * 3 / 4 - n2;
}
function i(e2) {
  var n2, i2 = t(e2), a2 = i2[0], o2 = i2[1], s2 = new f(r(e2, a2, o2)), c2 = 0, l2 = o2 > 0 ? a2 - 4 : a2, u2;
  for (u2 = 0; u2 < l2; u2 += 4) n2 = d[e2.charCodeAt(u2)] << 18 | d[e2.charCodeAt(u2 + 1)] << 12 | d[e2.charCodeAt(u2 + 2)] << 6 | d[e2.charCodeAt(u2 + 3)], s2[c2++] = n2 >> 16 & 255, s2[c2++] = n2 >> 8 & 255, s2[c2++] = n2 & 255;
  return o2 === 2 && (n2 = d[e2.charCodeAt(u2)] << 2 | d[e2.charCodeAt(u2 + 1)] >> 4, s2[c2++] = n2 & 255), o2 === 1 && (n2 = d[e2.charCodeAt(u2)] << 10 | d[e2.charCodeAt(u2 + 1)] << 4 | d[e2.charCodeAt(u2 + 2)] >> 2, s2[c2++] = n2 >> 8 & 255, s2[c2++] = n2 & 255), s2;
}
function a(e2) {
  return u[e2 >> 18 & 63] + u[e2 >> 12 & 63] + u[e2 >> 6 & 63] + u[e2 & 63];
}
function o(e2, t2, n2) {
  for (var r2, i2 = [], o2 = t2; o2 < n2; o2 += 3) r2 = (e2[o2] << 16 & 16711680) + (e2[o2 + 1] << 8 & 65280) + (e2[o2 + 2] & 255), i2.push(a(r2));
  return i2.join(``);
}
function s(e2) {
  for (var t2, n2 = e2.length, r2 = n2 % 3, i2 = [], a2 = 16383, s2 = 0, c2 = n2 - r2; s2 < c2; s2 += a2) i2.push(o(e2, s2, s2 + a2 > c2 ? c2 : s2 + a2));
  return r2 === 1 ? (t2 = e2[n2 - 1], i2.push(u[t2 >> 2] + u[t2 << 4 & 63] + `==`)) : r2 === 2 && (t2 = (e2[n2 - 2] << 8) + e2[n2 - 1], i2.push(u[t2 >> 10] + u[t2 >> 4 & 63] + u[t2 << 2 & 63] + `=`)), i2.join(``);
}
var c, l, u, d, f, p, m, h, g, _, v = e((() => {
  for (c = {}, l = {}, l.byteLength = n, l.toByteArray = i, l.fromByteArray = s, u = [], d = [], f = typeof Uint8Array < `u` ? Uint8Array : Array, p = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, m = 0, h = p.length; m < h; ++m) u[m] = p[m], d[p.charCodeAt(m)] = m;
  d[45] = 62, d[95] = 63, g = {}, g.read = function(e2, t2, n2, r2, i2) {
    var a2, o2, s2 = i2 * 8 - r2 - 1, c2 = (1 << s2) - 1, l2 = c2 >> 1, u2 = -7, d2 = n2 ? i2 - 1 : 0, f2 = n2 ? -1 : 1, p2 = e2[t2 + d2];
    for (d2 += f2, a2 = p2 & (1 << -u2) - 1, p2 >>= -u2, u2 += s2; u2 > 0; a2 = a2 * 256 + e2[t2 + d2], d2 += f2, u2 -= 8) ;
    for (o2 = a2 & (1 << -u2) - 1, a2 >>= -u2, u2 += r2; u2 > 0; o2 = o2 * 256 + e2[t2 + d2], d2 += f2, u2 -= 8) ;
    if (a2 === 0) a2 = 1 - l2;
    else if (a2 === c2) return o2 ? NaN : (p2 ? -1 : 1) * (1 / 0);
    else o2 += 2 ** r2, a2 -= l2;
    return (p2 ? -1 : 1) * o2 * 2 ** (a2 - r2);
  }, g.write = function(e2, t2, n2, r2, i2, a2) {
    var o2, s2, c2, l2 = a2 * 8 - i2 - 1, u2 = (1 << l2) - 1, d2 = u2 >> 1, f2 = i2 === 23 ? 2 ** -24 - 2 ** -77 : 0, p2 = r2 ? 0 : a2 - 1, m2 = r2 ? 1 : -1, h2 = +(t2 < 0 || t2 === 0 && 1 / t2 < 0);
    for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (s2 = +!!isNaN(t2), o2 = u2) : (o2 = Math.floor(Math.log(t2) / Math.LN2), t2 * (c2 = 2 ** -o2) < 1 && (o2--, c2 *= 2), o2 + d2 >= 1 ? t2 += f2 / c2 : t2 += f2 * 2 ** (1 - d2), t2 * c2 >= 2 && (o2++, c2 /= 2), o2 + d2 >= u2 ? (s2 = 0, o2 = u2) : o2 + d2 >= 1 ? (s2 = (t2 * c2 - 1) * 2 ** i2, o2 += d2) : (s2 = t2 * 2 ** (d2 - 1) * 2 ** i2, o2 = 0)); i2 >= 8; e2[n2 + p2] = s2 & 255, p2 += m2, s2 /= 256, i2 -= 8) ;
    for (o2 = o2 << i2 | s2, l2 += i2; l2 > 0; e2[n2 + p2] = o2 & 255, p2 += m2, o2 /= 256, l2 -= 8) ;
    e2[n2 + p2 - m2] |= h2 * 128;
  }, (function(e2) {
    let t2 = l, n2 = g, r2 = typeof Symbol == `function` && typeof Symbol.for == `function` ? /* @__PURE__ */ Symbol.for(`nodejs.util.inspect.custom`) : null;
    e2.Buffer = d2, e2.SlowBuffer = te, e2.INSPECT_MAX_BYTES = 50;
    let i2 = 2147483647;
    e2.kMaxLength = i2;
    let { Uint8Array: a2, ArrayBuffer: o2, SharedArrayBuffer: s2 } = globalThis;
    d2.TYPED_ARRAY_SUPPORT = c2(), !d2.TYPED_ARRAY_SUPPORT && typeof console < `u` && typeof console.error == `function` && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function c2() {
      try {
        let e3 = new a2(1), t3 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t3, a2.prototype), Object.setPrototypeOf(e3, t3), e3.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(d2.prototype, `parent`, { enumerable: true, get: function() {
      if (d2.isBuffer(this)) return this.buffer;
    } }), Object.defineProperty(d2.prototype, `offset`, { enumerable: true, get: function() {
      if (d2.isBuffer(this)) return this.byteOffset;
    } });
    function u2(e3) {
      if (e3 > i2) throw RangeError(`The value "` + e3 + `" is invalid for option "size"`);
      let t3 = new a2(e3);
      return Object.setPrototypeOf(t3, d2.prototype), t3;
    }
    function d2(e3, t3, n3) {
      if (typeof e3 == `number`) {
        if (typeof t3 == `string`) throw TypeError(`The "string" argument must be of type string. Received type number`);
        return h2(e3);
      }
      return f2(e3, t3, n3);
    }
    d2.poolSize = 8192;
    function f2(e3, t3, n3) {
      if (typeof e3 == `string`) return _2(e3, t3);
      if (o2.isView(e3)) return y(e3);
      if (e3 == null) throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e3);
      if (Z(e3, o2) || e3 && Z(e3.buffer, o2) || s2 !== void 0 && (Z(e3, s2) || e3 && Z(e3.buffer, s2))) return b(e3, t3, n3);
      if (typeof e3 == `number`) throw TypeError(`The "value" argument must not be of type number. Received type number`);
      let r3 = e3.valueOf && e3.valueOf();
      if (r3 != null && r3 !== e3) return d2.from(r3, t3, n3);
      let i3 = ee(e3);
      if (i3) return i3;
      if (typeof Symbol < `u` && Symbol.toPrimitive != null && typeof e3[Symbol.toPrimitive] == `function`) return d2.from(e3[Symbol.toPrimitive](`string`), t3, n3);
      throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ` + typeof e3);
    }
    d2.from = function(e3, t3, n3) {
      return f2(e3, t3, n3);
    }, Object.setPrototypeOf(d2.prototype, a2.prototype), Object.setPrototypeOf(d2, a2);
    function p2(e3) {
      if (typeof e3 != `number`) throw TypeError(`"size" argument must be of type number`);
      if (e3 < 0) throw RangeError(`The value "` + e3 + `" is invalid for option "size"`);
    }
    function m2(e3, t3, n3) {
      return p2(e3), e3 <= 0 || t3 === void 0 ? u2(e3) : typeof n3 == `string` ? u2(e3).fill(t3, n3) : u2(e3).fill(t3);
    }
    d2.alloc = function(e3, t3, n3) {
      return m2(e3, t3, n3);
    };
    function h2(e3) {
      return p2(e3), u2(e3 < 0 ? 0 : x(e3) | 0);
    }
    d2.allocUnsafe = function(e3) {
      return h2(e3);
    }, d2.allocUnsafeSlow = function(e3) {
      return h2(e3);
    };
    function _2(e3, t3) {
      if ((typeof t3 != `string` || t3 === ``) && (t3 = `utf8`), !d2.isEncoding(t3)) throw TypeError(`Unknown encoding: ` + t3);
      let n3 = S(e3, t3) | 0, r3 = u2(n3), i3 = r3.write(e3, t3);
      return i3 !== n3 && (r3 = r3.slice(0, i3)), r3;
    }
    function v2(e3) {
      let t3 = e3.length < 0 ? 0 : x(e3.length) | 0, n3 = u2(t3);
      for (let r3 = 0; r3 < t3; r3 += 1) n3[r3] = e3[r3] & 255;
      return n3;
    }
    function y(e3) {
      if (Z(e3, a2)) {
        let t3 = new a2(e3);
        return b(t3.buffer, t3.byteOffset, t3.byteLength);
      }
      return v2(e3);
    }
    function b(e3, t3, n3) {
      if (t3 < 0 || e3.byteLength < t3) throw RangeError(`"offset" is outside of buffer bounds`);
      if (e3.byteLength < t3 + (n3 || 0)) throw RangeError(`"length" is outside of buffer bounds`);
      let r3;
      return r3 = t3 === void 0 && n3 === void 0 ? new a2(e3) : n3 === void 0 ? new a2(e3, t3) : new a2(e3, t3, n3), Object.setPrototypeOf(r3, d2.prototype), r3;
    }
    function ee(e3) {
      if (d2.isBuffer(e3)) {
        let t3 = x(e3.length) | 0, n3 = u2(t3);
        return n3.length === 0 || e3.copy(n3, 0, 0, t3), n3;
      }
      if (e3.length !== void 0) return typeof e3.length != `number` || Q(e3.length) ? u2(0) : v2(e3);
      if (e3.type === `Buffer` && Array.isArray(e3.data)) return v2(e3.data);
    }
    function x(e3) {
      if (e3 >= i2) throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x` + i2.toString(16) + ` bytes`);
      return e3 | 0;
    }
    function te(e3) {
      return +e3 != e3 && (e3 = 0), d2.alloc(+e3);
    }
    d2.isBuffer = function(e3) {
      return e3 != null && e3._isBuffer === true && e3 !== d2.prototype;
    }, d2.compare = function(e3, t3) {
      if (Z(e3, a2) && (e3 = d2.from(e3, e3.offset, e3.byteLength)), Z(t3, a2) && (t3 = d2.from(t3, t3.offset, t3.byteLength)), !d2.isBuffer(e3) || !d2.isBuffer(t3)) throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);
      if (e3 === t3) return 0;
      let n3 = e3.length, r3 = t3.length;
      for (let i3 = 0, a3 = Math.min(n3, r3); i3 < a3; ++i3) if (e3[i3] !== t3[i3]) {
        n3 = e3[i3], r3 = t3[i3];
        break;
      }
      return n3 < r3 ? -1 : +(r3 < n3);
    }, d2.isEncoding = function(e3) {
      switch (String(e3).toLowerCase()) {
        case `hex`:
        case `utf8`:
        case `utf-8`:
        case `ascii`:
        case `latin1`:
        case `binary`:
        case `base64`:
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return true;
        default:
          return false;
      }
    }, d2.concat = function(e3, t3) {
      if (!Array.isArray(e3)) throw TypeError(`"list" argument must be an Array of Buffers`);
      if (e3.length === 0) return d2.alloc(0);
      let n3;
      if (t3 === void 0) for (t3 = 0, n3 = 0; n3 < e3.length; ++n3) t3 += e3[n3].length;
      let r3 = d2.allocUnsafe(t3), i3 = 0;
      for (n3 = 0; n3 < e3.length; ++n3) {
        let t4 = e3[n3];
        if (Z(t4, a2)) i3 + t4.length > r3.length ? (d2.isBuffer(t4) || (t4 = d2.from(t4)), t4.copy(r3, i3)) : a2.prototype.set.call(r3, t4, i3);
        else if (d2.isBuffer(t4)) t4.copy(r3, i3);
        else throw TypeError(`"list" argument must be an Array of Buffers`);
        i3 += t4.length;
      }
      return r3;
    };
    function S(e3, t3) {
      if (d2.isBuffer(e3)) return e3.length;
      if (o2.isView(e3) || Z(e3, o2)) return e3.byteLength;
      if (typeof e3 != `string`) throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ` + typeof e3);
      let n3 = e3.length, r3 = arguments.length > 2 && arguments[2] === true;
      if (!r3 && n3 === 0) return 0;
      let i3 = false;
      for (; ; ) switch (t3) {
        case `ascii`:
        case `latin1`:
        case `binary`:
          return n3;
        case `utf8`:
        case `utf-8`:
          return q(e3).length;
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return n3 * 2;
        case `hex`:
          return n3 >>> 1;
        case `base64`:
          return Y(e3).length;
        default:
          if (i3) return r3 ? -1 : q(e3).length;
          t3 = (`` + t3).toLowerCase(), i3 = true;
      }
    }
    d2.byteLength = S;
    function C(e3, t3, n3) {
      let r3 = false;
      if ((t3 === void 0 || t3 < 0) && (t3 = 0), t3 > this.length || ((n3 === void 0 || n3 > this.length) && (n3 = this.length), n3 <= 0) || (n3 >>>= 0, t3 >>>= 0, n3 <= t3)) return ``;
      for (e3 || (e3 = `utf8`); ; ) switch (e3) {
        case `hex`:
          return se(this, t3, n3);
        case `utf8`:
        case `utf-8`:
          return A(this, t3, n3);
        case `ascii`:
          return ae(this, t3, n3);
        case `latin1`:
        case `binary`:
          return oe(this, t3, n3);
        case `base64`:
          return k(this, t3, n3);
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return ce(this, t3, n3);
        default:
          if (r3) throw TypeError(`Unknown encoding: ` + e3);
          e3 = (e3 + ``).toLowerCase(), r3 = true;
      }
    }
    d2.prototype._isBuffer = true;
    function w(e3, t3, n3) {
      let r3 = e3[t3];
      e3[t3] = e3[n3], e3[n3] = r3;
    }
    d2.prototype.swap16 = function() {
      let e3 = this.length;
      if (e3 % 2 != 0) throw RangeError(`Buffer size must be a multiple of 16-bits`);
      for (let t3 = 0; t3 < e3; t3 += 2) w(this, t3, t3 + 1);
      return this;
    }, d2.prototype.swap32 = function() {
      let e3 = this.length;
      if (e3 % 4 != 0) throw RangeError(`Buffer size must be a multiple of 32-bits`);
      for (let t3 = 0; t3 < e3; t3 += 4) w(this, t3, t3 + 3), w(this, t3 + 1, t3 + 2);
      return this;
    }, d2.prototype.swap64 = function() {
      let e3 = this.length;
      if (e3 % 8 != 0) throw RangeError(`Buffer size must be a multiple of 64-bits`);
      for (let t3 = 0; t3 < e3; t3 += 8) w(this, t3, t3 + 7), w(this, t3 + 1, t3 + 6), w(this, t3 + 2, t3 + 5), w(this, t3 + 3, t3 + 4);
      return this;
    }, d2.prototype.toString = function() {
      let e3 = this.length;
      return e3 === 0 ? `` : arguments.length === 0 ? A(this, 0, e3) : C.apply(this, arguments);
    }, d2.prototype.toLocaleString = d2.prototype.toString, d2.prototype.equals = function(e3) {
      if (!d2.isBuffer(e3)) throw TypeError(`Argument must be a Buffer`);
      return this === e3 ? true : d2.compare(this, e3) === 0;
    }, d2.prototype.inspect = function() {
      let t3 = ``, n3 = e2.INSPECT_MAX_BYTES;
      return t3 = this.toString(`hex`, 0, n3).replace(/(.{2})/g, `$1 `).trim(), this.length > n3 && (t3 += ` ... `), `<Buffer ` + t3 + `>`;
    }, r2 && (d2.prototype[r2] = d2.prototype.inspect), d2.prototype.compare = function(e3, t3, n3, r3, i3) {
      if (Z(e3, a2) && (e3 = d2.from(e3, e3.offset, e3.byteLength)), !d2.isBuffer(e3)) throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type ` + typeof e3);
      if (t3 === void 0 && (t3 = 0), n3 === void 0 && (n3 = e3 ? e3.length : 0), r3 === void 0 && (r3 = 0), i3 === void 0 && (i3 = this.length), t3 < 0 || n3 > e3.length || r3 < 0 || i3 > this.length) throw RangeError(`out of range index`);
      if (r3 >= i3 && t3 >= n3) return 0;
      if (r3 >= i3) return -1;
      if (t3 >= n3) return 1;
      if (t3 >>>= 0, n3 >>>= 0, r3 >>>= 0, i3 >>>= 0, this === e3) return 0;
      let o3 = i3 - r3, s3 = n3 - t3, c3 = Math.min(o3, s3), l2 = this.slice(r3, i3), u3 = e3.slice(t3, n3);
      for (let e4 = 0; e4 < c3; ++e4) if (l2[e4] !== u3[e4]) {
        o3 = l2[e4], s3 = u3[e4];
        break;
      }
      return o3 < s3 ? -1 : +(s3 < o3);
    };
    function T(e3, t3, n3, r3, i3) {
      if (e3.length === 0) return -1;
      if (typeof n3 == `string` ? (r3 = n3, n3 = 0) : n3 > 2147483647 ? n3 = 2147483647 : n3 < -2147483648 && (n3 = -2147483648), n3 = +n3, Q(n3) && (n3 = i3 ? 0 : e3.length - 1), n3 < 0 && (n3 = e3.length + n3), n3 >= e3.length) {
        if (i3) return -1;
        n3 = e3.length - 1;
      } else if (n3 < 0) if (i3) n3 = 0;
      else return -1;
      if (typeof t3 == `string` && (t3 = d2.from(t3, r3)), d2.isBuffer(t3)) return t3.length === 0 ? -1 : E(e3, t3, n3, r3, i3);
      if (typeof t3 == `number`) return t3 &= 255, typeof a2.prototype.indexOf == `function` ? i3 ? a2.prototype.indexOf.call(e3, t3, n3) : a2.prototype.lastIndexOf.call(e3, t3, n3) : E(e3, [t3], n3, r3, i3);
      throw TypeError(`val must be string, number or Buffer`);
    }
    function E(e3, t3, n3, r3, i3) {
      let a3 = 1, o3 = e3.length, s3 = t3.length;
      if (r3 !== void 0 && (r3 = String(r3).toLowerCase(), r3 === `ucs2` || r3 === `ucs-2` || r3 === `utf16le` || r3 === `utf-16le`)) {
        if (e3.length < 2 || t3.length < 2) return -1;
        a3 = 2, o3 /= 2, s3 /= 2, n3 /= 2;
      }
      function c3(e4, t4) {
        return a3 === 1 ? e4[t4] : e4.readUInt16BE(t4 * a3);
      }
      let l2;
      if (i3) {
        let r4 = -1;
        for (l2 = n3; l2 < o3; l2++) if (c3(e3, l2) === c3(t3, r4 === -1 ? 0 : l2 - r4)) {
          if (r4 === -1 && (r4 = l2), l2 - r4 + 1 === s3) return r4 * a3;
        } else r4 !== -1 && (l2 -= l2 - r4), r4 = -1;
      } else for (n3 + s3 > o3 && (n3 = o3 - s3), l2 = n3; l2 >= 0; l2--) {
        let n4 = true;
        for (let r4 = 0; r4 < s3; r4++) if (c3(e3, l2 + r4) !== c3(t3, r4)) {
          n4 = false;
          break;
        }
        if (n4) return l2;
      }
      return -1;
    }
    d2.prototype.includes = function(e3, t3, n3) {
      return this.indexOf(e3, t3, n3) !== -1;
    }, d2.prototype.indexOf = function(e3, t3, n3) {
      return T(this, e3, t3, n3, true);
    }, d2.prototype.lastIndexOf = function(e3, t3, n3) {
      return T(this, e3, t3, n3, false);
    };
    function ne(e3, t3, n3, r3) {
      n3 = Number(n3) || 0;
      let i3 = e3.length - n3;
      r3 ? (r3 = Number(r3), r3 > i3 && (r3 = i3)) : r3 = i3;
      let a3 = t3.length;
      r3 > a3 / 2 && (r3 = a3 / 2);
      let o3;
      for (o3 = 0; o3 < r3; ++o3) {
        let r4 = parseInt(t3.substr(o3 * 2, 2), 16);
        if (Q(r4)) return o3;
        e3[n3 + o3] = r4;
      }
      return o3;
    }
    function re(e3, t3, n3, r3) {
      return X(q(t3, e3.length - n3), e3, n3, r3);
    }
    function ie(e3, t3, n3, r3) {
      return X(de(t3), e3, n3, r3);
    }
    function D(e3, t3, n3, r3) {
      return X(Y(t3), e3, n3, r3);
    }
    function O(e3, t3, n3, r3) {
      return X(J(t3, e3.length - n3), e3, n3, r3);
    }
    d2.prototype.write = function(e3, t3, n3, r3) {
      if (t3 === void 0) r3 = `utf8`, n3 = this.length, t3 = 0;
      else if (n3 === void 0 && typeof t3 == `string`) r3 = t3, n3 = this.length, t3 = 0;
      else if (isFinite(t3)) t3 >>>= 0, isFinite(n3) ? (n3 >>>= 0, r3 === void 0 && (r3 = `utf8`)) : (r3 = n3, n3 = void 0);
      else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);
      let i3 = this.length - t3;
      if ((n3 === void 0 || n3 > i3) && (n3 = i3), e3.length > 0 && (n3 < 0 || t3 < 0) || t3 > this.length) throw RangeError(`Attempt to write outside buffer bounds`);
      r3 || (r3 = `utf8`);
      let a3 = false;
      for (; ; ) switch (r3) {
        case `hex`:
          return ne(this, e3, t3, n3);
        case `utf8`:
        case `utf-8`:
          return re(this, e3, t3, n3);
        case `ascii`:
        case `latin1`:
        case `binary`:
          return ie(this, e3, t3, n3);
        case `base64`:
          return D(this, e3, t3, n3);
        case `ucs2`:
        case `ucs-2`:
        case `utf16le`:
        case `utf-16le`:
          return O(this, e3, t3, n3);
        default:
          if (a3) throw TypeError(`Unknown encoding: ` + r3);
          r3 = (`` + r3).toLowerCase(), a3 = true;
      }
    }, d2.prototype.toJSON = function() {
      return { type: `Buffer`, data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function k(e3, n3, r3) {
      return n3 === 0 && r3 === e3.length ? t2.fromByteArray(e3) : t2.fromByteArray(e3.slice(n3, r3));
    }
    function A(e3, t3, n3) {
      n3 = Math.min(e3.length, n3);
      let r3 = [], i3 = t3;
      for (; i3 < n3; ) {
        let t4 = e3[i3], a3 = null, o3 = t4 > 239 ? 4 : t4 > 223 ? 3 : t4 > 191 ? 2 : 1;
        if (i3 + o3 <= n3) {
          let n4, r4, s3, c3;
          switch (o3) {
            case 1:
              t4 < 128 && (a3 = t4);
              break;
            case 2:
              n4 = e3[i3 + 1], (n4 & 192) == 128 && (c3 = (t4 & 31) << 6 | n4 & 63, c3 > 127 && (a3 = c3));
              break;
            case 3:
              n4 = e3[i3 + 1], r4 = e3[i3 + 2], (n4 & 192) == 128 && (r4 & 192) == 128 && (c3 = (t4 & 15) << 12 | (n4 & 63) << 6 | r4 & 63, c3 > 2047 && (c3 < 55296 || c3 > 57343) && (a3 = c3));
              break;
            case 4:
              n4 = e3[i3 + 1], r4 = e3[i3 + 2], s3 = e3[i3 + 3], (n4 & 192) == 128 && (r4 & 192) == 128 && (s3 & 192) == 128 && (c3 = (t4 & 15) << 18 | (n4 & 63) << 12 | (r4 & 63) << 6 | s3 & 63, c3 > 65535 && c3 < 1114112 && (a3 = c3));
          }
        }
        a3 === null ? (a3 = 65533, o3 = 1) : a3 > 65535 && (a3 -= 65536, r3.push(a3 >>> 10 & 1023 | 55296), a3 = 56320 | a3 & 1023), r3.push(a3), i3 += o3;
      }
      return M(r3);
    }
    let j = 4096;
    function M(e3) {
      let t3 = e3.length;
      if (t3 <= j) return String.fromCharCode.apply(String, e3);
      let n3 = ``, r3 = 0;
      for (; r3 < t3; ) n3 += String.fromCharCode.apply(String, e3.slice(r3, r3 += j));
      return n3;
    }
    function ae(e3, t3, n3) {
      let r3 = ``;
      n3 = Math.min(e3.length, n3);
      for (let i3 = t3; i3 < n3; ++i3) r3 += String.fromCharCode(e3[i3] & 127);
      return r3;
    }
    function oe(e3, t3, n3) {
      let r3 = ``;
      n3 = Math.min(e3.length, n3);
      for (let i3 = t3; i3 < n3; ++i3) r3 += String.fromCharCode(e3[i3]);
      return r3;
    }
    function se(e3, t3, n3) {
      let r3 = e3.length;
      (!t3 || t3 < 0) && (t3 = 0), (!n3 || n3 < 0 || n3 > r3) && (n3 = r3);
      let i3 = ``;
      for (let r4 = t3; r4 < n3; ++r4) i3 += fe[e3[r4]];
      return i3;
    }
    function ce(e3, t3, n3) {
      let r3 = e3.slice(t3, n3), i3 = ``;
      for (let e4 = 0; e4 < r3.length - 1; e4 += 2) i3 += String.fromCharCode(r3[e4] + r3[e4 + 1] * 256);
      return i3;
    }
    d2.prototype.slice = function(e3, t3) {
      let n3 = this.length;
      e3 = ~~e3, t3 = t3 === void 0 ? n3 : ~~t3, e3 < 0 ? (e3 += n3, e3 < 0 && (e3 = 0)) : e3 > n3 && (e3 = n3), t3 < 0 ? (t3 += n3, t3 < 0 && (t3 = 0)) : t3 > n3 && (t3 = n3), t3 < e3 && (t3 = e3);
      let r3 = this.subarray(e3, t3);
      return Object.setPrototypeOf(r3, d2.prototype), r3;
    };
    function N(e3, t3, n3) {
      if (e3 % 1 != 0 || e3 < 0) throw RangeError(`offset is not uint`);
      if (e3 + t3 > n3) throw RangeError(`Trying to access beyond buffer length`);
    }
    d2.prototype.readUintLE = d2.prototype.readUIntLE = function(e3, t3, n3) {
      e3 >>>= 0, t3 >>>= 0, n3 || N(e3, t3, this.length);
      let r3 = this[e3], i3 = 1, a3 = 0;
      for (; ++a3 < t3 && (i3 *= 256); ) r3 += this[e3 + a3] * i3;
      return r3;
    }, d2.prototype.readUintBE = d2.prototype.readUIntBE = function(e3, t3, n3) {
      e3 >>>= 0, t3 >>>= 0, n3 || N(e3, t3, this.length);
      let r3 = this[e3 + --t3], i3 = 1;
      for (; t3 > 0 && (i3 *= 256); ) r3 += this[e3 + --t3] * i3;
      return r3;
    }, d2.prototype.readUint8 = d2.prototype.readUInt8 = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 1, this.length), this[e3];
    }, d2.prototype.readUint16LE = d2.prototype.readUInt16LE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
    }, d2.prototype.readUint16BE = d2.prototype.readUInt16BE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
    }, d2.prototype.readUint32LE = d2.prototype.readUInt32LE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + this[e3 + 3] * 16777216;
    }, d2.prototype.readUint32BE = d2.prototype.readUInt32BE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 4, this.length), this[e3] * 16777216 + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
    }, d2.prototype.readBigUInt64LE = $(function(e3) {
      e3 >>>= 0, G(e3, `offset`);
      let t3 = this[e3], n3 = this[e3 + 7];
      (t3 === void 0 || n3 === void 0) && K(e3, this.length - 8);
      let r3 = t3 + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 24, i3 = this[++e3] + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + n3 * 2 ** 24;
      return BigInt(r3) + (BigInt(i3) << BigInt(32));
    }), d2.prototype.readBigUInt64BE = $(function(e3) {
      e3 >>>= 0, G(e3, `offset`);
      let t3 = this[e3], n3 = this[e3 + 7];
      (t3 === void 0 || n3 === void 0) && K(e3, this.length - 8);
      let r3 = t3 * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + this[++e3], i3 = this[++e3] * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + n3;
      return (BigInt(r3) << BigInt(32)) + BigInt(i3);
    }), d2.prototype.readIntLE = function(e3, t3, n3) {
      e3 >>>= 0, t3 >>>= 0, n3 || N(e3, t3, this.length);
      let r3 = this[e3], i3 = 1, a3 = 0;
      for (; ++a3 < t3 && (i3 *= 256); ) r3 += this[e3 + a3] * i3;
      return i3 *= 128, r3 >= i3 && (r3 -= 2 ** (8 * t3)), r3;
    }, d2.prototype.readIntBE = function(e3, t3, n3) {
      e3 >>>= 0, t3 >>>= 0, n3 || N(e3, t3, this.length);
      let r3 = t3, i3 = 1, a3 = this[e3 + --r3];
      for (; r3 > 0 && (i3 *= 256); ) a3 += this[e3 + --r3] * i3;
      return i3 *= 128, a3 >= i3 && (a3 -= 2 ** (8 * t3)), a3;
    }, d2.prototype.readInt8 = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 1, this.length), this[e3] & 128 ? (255 - this[e3] + 1) * -1 : this[e3];
    }, d2.prototype.readInt16LE = function(e3, t3) {
      e3 >>>= 0, t3 || N(e3, 2, this.length);
      let n3 = this[e3] | this[e3 + 1] << 8;
      return n3 & 32768 ? n3 | 4294901760 : n3;
    }, d2.prototype.readInt16BE = function(e3, t3) {
      e3 >>>= 0, t3 || N(e3, 2, this.length);
      let n3 = this[e3 + 1] | this[e3] << 8;
      return n3 & 32768 ? n3 | 4294901760 : n3;
    }, d2.prototype.readInt32LE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
    }, d2.prototype.readInt32BE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
    }, d2.prototype.readBigInt64LE = $(function(e3) {
      e3 >>>= 0, G(e3, `offset`);
      let t3 = this[e3], n3 = this[e3 + 7];
      (t3 === void 0 || n3 === void 0) && K(e3, this.length - 8);
      let r3 = this[e3 + 4] + this[e3 + 5] * 2 ** 8 + this[e3 + 6] * 2 ** 16 + (n3 << 24);
      return (BigInt(r3) << BigInt(32)) + BigInt(t3 + this[++e3] * 2 ** 8 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 24);
    }), d2.prototype.readBigInt64BE = $(function(e3) {
      e3 >>>= 0, G(e3, `offset`);
      let t3 = this[e3], n3 = this[e3 + 7];
      (t3 === void 0 || n3 === void 0) && K(e3, this.length - 8);
      let r3 = (t3 << 24) + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + this[++e3];
      return (BigInt(r3) << BigInt(32)) + BigInt(this[++e3] * 2 ** 24 + this[++e3] * 2 ** 16 + this[++e3] * 2 ** 8 + n3);
    }), d2.prototype.readFloatLE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 4, this.length), n2.read(this, e3, true, 23, 4);
    }, d2.prototype.readFloatBE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 4, this.length), n2.read(this, e3, false, 23, 4);
    }, d2.prototype.readDoubleLE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 8, this.length), n2.read(this, e3, true, 52, 8);
    }, d2.prototype.readDoubleBE = function(e3, t3) {
      return e3 >>>= 0, t3 || N(e3, 8, this.length), n2.read(this, e3, false, 52, 8);
    };
    function P(e3, t3, n3, r3, i3, a3) {
      if (!d2.isBuffer(e3)) throw TypeError(`"buffer" argument must be a Buffer instance`);
      if (t3 > i3 || t3 < a3) throw RangeError(`"value" argument is out of bounds`);
      if (n3 + r3 > e3.length) throw RangeError(`Index out of range`);
    }
    d2.prototype.writeUintLE = d2.prototype.writeUIntLE = function(e3, t3, n3, r3) {
      if (e3 = +e3, t3 >>>= 0, n3 >>>= 0, !r3) {
        let r4 = 2 ** (8 * n3) - 1;
        P(this, e3, t3, n3, r4, 0);
      }
      let i3 = 1, a3 = 0;
      for (this[t3] = e3 & 255; ++a3 < n3 && (i3 *= 256); ) this[t3 + a3] = e3 / i3 & 255;
      return t3 + n3;
    }, d2.prototype.writeUintBE = d2.prototype.writeUIntBE = function(e3, t3, n3, r3) {
      if (e3 = +e3, t3 >>>= 0, n3 >>>= 0, !r3) {
        let r4 = 2 ** (8 * n3) - 1;
        P(this, e3, t3, n3, r4, 0);
      }
      let i3 = n3 - 1, a3 = 1;
      for (this[t3 + i3] = e3 & 255; --i3 >= 0 && (a3 *= 256); ) this[t3 + i3] = e3 / a3 & 255;
      return t3 + n3;
    }, d2.prototype.writeUint8 = d2.prototype.writeUInt8 = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 1, 255, 0), this[t3] = e3 & 255, t3 + 1;
    }, d2.prototype.writeUint16LE = d2.prototype.writeUInt16LE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 2, 65535, 0), this[t3] = e3 & 255, this[t3 + 1] = e3 >>> 8, t3 + 2;
    }, d2.prototype.writeUint16BE = d2.prototype.writeUInt16BE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 2, 65535, 0), this[t3] = e3 >>> 8, this[t3 + 1] = e3 & 255, t3 + 2;
    }, d2.prototype.writeUint32LE = d2.prototype.writeUInt32LE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 4, 4294967295, 0), this[t3 + 3] = e3 >>> 24, this[t3 + 2] = e3 >>> 16, this[t3 + 1] = e3 >>> 8, this[t3] = e3 & 255, t3 + 4;
    }, d2.prototype.writeUint32BE = d2.prototype.writeUInt32BE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 4, 4294967295, 0), this[t3] = e3 >>> 24, this[t3 + 1] = e3 >>> 16, this[t3 + 2] = e3 >>> 8, this[t3 + 3] = e3 & 255, t3 + 4;
    };
    function F(e3, t3, n3, r3, i3) {
      W(t3, r3, i3, e3, n3, 7);
      let a3 = Number(t3 & BigInt(4294967295));
      e3[n3++] = a3, a3 >>= 8, e3[n3++] = a3, a3 >>= 8, e3[n3++] = a3, a3 >>= 8, e3[n3++] = a3;
      let o3 = Number(t3 >> BigInt(32) & BigInt(4294967295));
      return e3[n3++] = o3, o3 >>= 8, e3[n3++] = o3, o3 >>= 8, e3[n3++] = o3, o3 >>= 8, e3[n3++] = o3, n3;
    }
    function I(e3, t3, n3, r3, i3) {
      W(t3, r3, i3, e3, n3, 7);
      let a3 = Number(t3 & BigInt(4294967295));
      e3[n3 + 7] = a3, a3 >>= 8, e3[n3 + 6] = a3, a3 >>= 8, e3[n3 + 5] = a3, a3 >>= 8, e3[n3 + 4] = a3;
      let o3 = Number(t3 >> BigInt(32) & BigInt(4294967295));
      return e3[n3 + 3] = o3, o3 >>= 8, e3[n3 + 2] = o3, o3 >>= 8, e3[n3 + 1] = o3, o3 >>= 8, e3[n3] = o3, n3 + 8;
    }
    d2.prototype.writeBigUInt64LE = $(function(e3, t3 = 0) {
      return F(this, e3, t3, BigInt(0), BigInt(`0xffffffffffffffff`));
    }), d2.prototype.writeBigUInt64BE = $(function(e3, t3 = 0) {
      return I(this, e3, t3, BigInt(0), BigInt(`0xffffffffffffffff`));
    }), d2.prototype.writeIntLE = function(e3, t3, n3, r3) {
      if (e3 = +e3, t3 >>>= 0, !r3) {
        let r4 = 2 ** (8 * n3 - 1);
        P(this, e3, t3, n3, r4 - 1, -r4);
      }
      let i3 = 0, a3 = 1, o3 = 0;
      for (this[t3] = e3 & 255; ++i3 < n3 && (a3 *= 256); ) e3 < 0 && o3 === 0 && this[t3 + i3 - 1] !== 0 && (o3 = 1), this[t3 + i3] = (e3 / a3 >> 0) - o3 & 255;
      return t3 + n3;
    }, d2.prototype.writeIntBE = function(e3, t3, n3, r3) {
      if (e3 = +e3, t3 >>>= 0, !r3) {
        let r4 = 2 ** (8 * n3 - 1);
        P(this, e3, t3, n3, r4 - 1, -r4);
      }
      let i3 = n3 - 1, a3 = 1, o3 = 0;
      for (this[t3 + i3] = e3 & 255; --i3 >= 0 && (a3 *= 256); ) e3 < 0 && o3 === 0 && this[t3 + i3 + 1] !== 0 && (o3 = 1), this[t3 + i3] = (e3 / a3 >> 0) - o3 & 255;
      return t3 + n3;
    }, d2.prototype.writeInt8 = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 1, 127, -128), e3 < 0 && (e3 = 255 + e3 + 1), this[t3] = e3 & 255, t3 + 1;
    }, d2.prototype.writeInt16LE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 2, 32767, -32768), this[t3] = e3 & 255, this[t3 + 1] = e3 >>> 8, t3 + 2;
    }, d2.prototype.writeInt16BE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 2, 32767, -32768), this[t3] = e3 >>> 8, this[t3 + 1] = e3 & 255, t3 + 2;
    }, d2.prototype.writeInt32LE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 4, 2147483647, -2147483648), this[t3] = e3 & 255, this[t3 + 1] = e3 >>> 8, this[t3 + 2] = e3 >>> 16, this[t3 + 3] = e3 >>> 24, t3 + 4;
    }, d2.prototype.writeInt32BE = function(e3, t3, n3) {
      return e3 = +e3, t3 >>>= 0, n3 || P(this, e3, t3, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), this[t3] = e3 >>> 24, this[t3 + 1] = e3 >>> 16, this[t3 + 2] = e3 >>> 8, this[t3 + 3] = e3 & 255, t3 + 4;
    }, d2.prototype.writeBigInt64LE = $(function(e3, t3 = 0) {
      return F(this, e3, t3, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
    }), d2.prototype.writeBigInt64BE = $(function(e3, t3 = 0) {
      return I(this, e3, t3, -BigInt(`0x8000000000000000`), BigInt(`0x7fffffffffffffff`));
    });
    function L(e3, t3, n3, r3, i3, a3) {
      if (n3 + r3 > e3.length || n3 < 0) throw RangeError(`Index out of range`);
    }
    function R(e3, t3, r3, i3, a3) {
      return t3 = +t3, r3 >>>= 0, a3 || L(e3, t3, r3, 4), n2.write(e3, t3, r3, i3, 23, 4), r3 + 4;
    }
    d2.prototype.writeFloatLE = function(e3, t3, n3) {
      return R(this, e3, t3, true, n3);
    }, d2.prototype.writeFloatBE = function(e3, t3, n3) {
      return R(this, e3, t3, false, n3);
    };
    function z(e3, t3, r3, i3, a3) {
      return t3 = +t3, r3 >>>= 0, a3 || L(e3, t3, r3, 8), n2.write(e3, t3, r3, i3, 52, 8), r3 + 8;
    }
    d2.prototype.writeDoubleLE = function(e3, t3, n3) {
      return z(this, e3, t3, true, n3);
    }, d2.prototype.writeDoubleBE = function(e3, t3, n3) {
      return z(this, e3, t3, false, n3);
    }, d2.prototype.copy = function(e3, t3, n3, r3) {
      if (!d2.isBuffer(e3)) throw TypeError(`argument should be a Buffer`);
      if (n3 || (n3 = 0), !r3 && r3 !== 0 && (r3 = this.length), t3 >= e3.length && (t3 = e3.length), t3 || (t3 = 0), r3 > 0 && r3 < n3 && (r3 = n3), r3 === n3 || e3.length === 0 || this.length === 0) return 0;
      if (t3 < 0) throw RangeError(`targetStart out of bounds`);
      if (n3 < 0 || n3 >= this.length) throw RangeError(`Index out of range`);
      if (r3 < 0) throw RangeError(`sourceEnd out of bounds`);
      r3 > this.length && (r3 = this.length), e3.length - t3 < r3 - n3 && (r3 = e3.length - t3 + n3);
      let i3 = r3 - n3;
      return this === e3 && typeof a2.prototype.copyWithin == `function` ? this.copyWithin(t3, n3, r3) : a2.prototype.set.call(e3, this.subarray(n3, r3), t3), i3;
    }, d2.prototype.fill = function(e3, t3, n3, r3) {
      if (typeof e3 == `string`) {
        if (typeof t3 == `string` ? (r3 = t3, t3 = 0, n3 = this.length) : typeof n3 == `string` && (r3 = n3, n3 = this.length), r3 !== void 0 && typeof r3 != `string`) throw TypeError(`encoding must be a string`);
        if (typeof r3 == `string` && !d2.isEncoding(r3)) throw TypeError(`Unknown encoding: ` + r3);
        if (e3.length === 1) {
          let t4 = e3.charCodeAt(0);
          (r3 === `utf8` && t4 < 128 || r3 === `latin1`) && (e3 = t4);
        }
      } else typeof e3 == `number` ? e3 &= 255 : typeof e3 == `boolean` && (e3 = Number(e3));
      if (t3 < 0 || this.length < t3 || this.length < n3) throw RangeError(`Out of range index`);
      if (n3 <= t3) return this;
      t3 >>>= 0, n3 = n3 === void 0 ? this.length : n3 >>> 0, e3 || (e3 = 0);
      let i3;
      if (typeof e3 == `number`) for (i3 = t3; i3 < n3; ++i3) this[i3] = e3;
      else {
        let a3 = d2.isBuffer(e3) ? e3 : d2.from(e3, r3), o3 = a3.length;
        if (o3 === 0) throw TypeError(`The value "` + e3 + `" is invalid for argument "value"`);
        for (i3 = 0; i3 < n3 - t3; ++i3) this[i3 + t3] = a3[i3 % o3];
      }
      return this;
    };
    let B = {};
    function V(e3, t3, n3) {
      B[e3] = class extends n3 {
        constructor() {
          super(), Object.defineProperty(this, `message`, { value: t3.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e3}]`, this.stack, delete this.name;
        }
        get code() {
          return e3;
        }
        set code(e4) {
          Object.defineProperty(this, `code`, { configurable: true, enumerable: true, value: e4, writable: true });
        }
        toString() {
          return `${this.name} [${e3}]: ${this.message}`;
        }
      };
    }
    V(`ERR_BUFFER_OUT_OF_BOUNDS`, function(e3) {
      return e3 ? `${e3} is outside of buffer bounds` : `Attempt to access memory outside buffer bounds`;
    }, RangeError), V(`ERR_INVALID_ARG_TYPE`, function(e3, t3) {
      return `The "${e3}" argument must be of type number. Received type ${typeof t3}`;
    }, TypeError), V(`ERR_OUT_OF_RANGE`, function(e3, t3, n3) {
      let r3 = `The value of "${e3}" is out of range.`, i3 = n3;
      return Number.isInteger(n3) && Math.abs(n3) > 2 ** 32 ? i3 = H(String(n3)) : typeof n3 == `bigint` && (i3 = String(n3), (n3 > BigInt(2) ** BigInt(32) || n3 < -(BigInt(2) ** BigInt(32))) && (i3 = H(i3)), i3 += `n`), r3 += ` It must be ${t3}. Received ${i3}`, r3;
    }, RangeError);
    function H(e3) {
      let t3 = ``, n3 = e3.length, r3 = +(e3[0] === `-`);
      for (; n3 >= r3 + 4; n3 -= 3) t3 = `_${e3.slice(n3 - 3, n3)}${t3}`;
      return `${e3.slice(0, n3)}${t3}`;
    }
    function U(e3, t3, n3) {
      G(t3, `offset`), (e3[t3] === void 0 || e3[t3 + n3] === void 0) && K(t3, e3.length - (n3 + 1));
    }
    function W(e3, t3, n3, r3, i3, a3) {
      if (e3 > n3 || e3 < t3) {
        let r4 = typeof t3 == `bigint` ? `n` : ``, i4;
        throw i4 = a3 > 3 ? t3 === 0 || t3 === BigInt(0) ? `>= 0${r4} and < 2${r4} ** ${(a3 + 1) * 8}${r4}` : `>= -(2${r4} ** ${(a3 + 1) * 8 - 1}${r4}) and < 2 ** ${(a3 + 1) * 8 - 1}${r4}` : `>= ${t3}${r4} and <= ${n3}${r4}`, new B.ERR_OUT_OF_RANGE(`value`, i4, e3);
      }
      U(r3, i3, a3);
    }
    function G(e3, t3) {
      if (typeof e3 != `number`) throw new B.ERR_INVALID_ARG_TYPE(t3, `number`, e3);
    }
    function K(e3, t3, n3) {
      throw Math.floor(e3) === e3 ? t3 < 0 ? new B.ERR_BUFFER_OUT_OF_BOUNDS() : new B.ERR_OUT_OF_RANGE(n3 || `offset`, `>= ${+!!n3} and <= ${t3}`, e3) : (G(e3, n3), new B.ERR_OUT_OF_RANGE(n3 || `offset`, `an integer`, e3));
    }
    let le = /[^+/0-9A-Za-z-_]/g;
    function ue(e3) {
      if (e3 = e3.split(`=`)[0], e3 = e3.trim().replace(le, ``), e3.length < 2) return ``;
      for (; e3.length % 4 != 0; ) e3 += `=`;
      return e3;
    }
    function q(e3, t3) {
      t3 || (t3 = 1 / 0);
      let n3, r3 = e3.length, i3 = null, a3 = [];
      for (let o3 = 0; o3 < r3; ++o3) {
        if (n3 = e3.charCodeAt(o3), n3 > 55295 && n3 < 57344) {
          if (!i3) {
            if (n3 > 56319) {
              (t3 -= 3) > -1 && a3.push(239, 191, 189);
              continue;
            } else if (o3 + 1 === r3) {
              (t3 -= 3) > -1 && a3.push(239, 191, 189);
              continue;
            }
            i3 = n3;
            continue;
          }
          if (n3 < 56320) {
            (t3 -= 3) > -1 && a3.push(239, 191, 189), i3 = n3;
            continue;
          }
          n3 = (i3 - 55296 << 10 | n3 - 56320) + 65536;
        } else i3 && (t3 -= 3) > -1 && a3.push(239, 191, 189);
        if (i3 = null, n3 < 128) {
          if (--t3 < 0) break;
          a3.push(n3);
        } else if (n3 < 2048) {
          if ((t3 -= 2) < 0) break;
          a3.push(n3 >> 6 | 192, n3 & 63 | 128);
        } else if (n3 < 65536) {
          if ((t3 -= 3) < 0) break;
          a3.push(n3 >> 12 | 224, n3 >> 6 & 63 | 128, n3 & 63 | 128);
        } else if (n3 < 1114112) {
          if ((t3 -= 4) < 0) break;
          a3.push(n3 >> 18 | 240, n3 >> 12 & 63 | 128, n3 >> 6 & 63 | 128, n3 & 63 | 128);
        } else throw Error(`Invalid code point`);
      }
      return a3;
    }
    function de(e3) {
      let t3 = [];
      for (let n3 = 0; n3 < e3.length; ++n3) t3.push(e3.charCodeAt(n3) & 255);
      return t3;
    }
    function J(e3, t3) {
      let n3, r3, i3, a3 = [];
      for (let o3 = 0; o3 < e3.length && !((t3 -= 2) < 0); ++o3) n3 = e3.charCodeAt(o3), r3 = n3 >> 8, i3 = n3 % 256, a3.push(i3), a3.push(r3);
      return a3;
    }
    function Y(e3) {
      return t2.toByteArray(ue(e3));
    }
    function X(e3, t3, n3, r3) {
      let i3;
      for (i3 = 0; i3 < r3 && !(i3 + n3 >= t3.length || i3 >= e3.length); ++i3) t3[i3 + n3] = e3[i3];
      return i3;
    }
    function Z(e3, t3) {
      return e3 instanceof t3 || e3 != null && e3.constructor != null && e3.constructor.name != null && e3.constructor.name === t3.name;
    }
    function Q(e3) {
      return e3 !== e3;
    }
    let fe = (function() {
      let e3 = `0123456789abcdef`, t3 = Array(256);
      for (let n3 = 0; n3 < 16; ++n3) {
        let r3 = n3 * 16;
        for (let i3 = 0; i3 < 16; ++i3) t3[r3 + i3] = e3[n3] + e3[i3];
      }
      return t3;
    })();
    function $(e3) {
      return typeof BigInt > `u` ? pe : e3;
    }
    function pe() {
      throw Error(`BigInt not supported`);
    }
  })(c), _ = c.Buffer, c.Blob, c.BlobOptions, c.Buffer, c.File, c.FileOptions, c.INSPECT_MAX_BYTES, c.SlowBuffer, c.TranscodeEncoding, c.atob, c.btoa, c.constants, c.isAscii, c.isUtf8, c.kMaxLength, c.kStringMaxLength, c.resolveObjectURL, c.transcode;
}));
export {
  v as n,
  _ as t
};
