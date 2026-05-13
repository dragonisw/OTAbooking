import { o as e } from "./chunk-DcEfI0Mx.js";
import { t } from "./lib-BpYAc4ol.js";
function n(e2, t2, n2) {
  if (e2 == null) return ``;
  let r2, i2 = {}, a2 = {}, o2 = ``, s2 = ``, c2 = ``, l2 = 2, u2 = 3, d2 = 2, f2 = [], p2 = 0, m2 = 0;
  for (let h3 = 0; h3 < e2.length; h3 += 1) if (o2 = e2.charAt(h3), Object.prototype.hasOwnProperty.call(i2, o2) || (i2[o2] = u2++, a2[o2] = true), s2 = c2 + o2, Object.prototype.hasOwnProperty.call(i2, s2)) c2 = s2;
  else {
    if (Object.prototype.hasOwnProperty.call(a2, c2)) {
      if (c2.charCodeAt(0) < 256) {
        for (let e3 = 0; e3 < d2; e3++) p2 <<= 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++;
        r2 = c2.charCodeAt(0);
        for (let e3 = 0; e3 < 8; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
      } else {
        r2 = 1;
        for (let e3 = 0; e3 < d2; e3++) p2 = p2 << 1 | r2, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 = 0;
        r2 = c2.charCodeAt(0);
        for (let e3 = 0; e3 < 16; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
      }
      l2--, l2 == 0 && (l2 = 2 ** d2, d2++), delete a2[c2];
    } else {
      r2 = i2[c2];
      for (let e3 = 0; e3 < d2; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
    }
    l2--, l2 == 0 && (l2 = 2 ** d2, d2++), i2[s2] = u2++, c2 = String(o2);
  }
  if (c2 !== ``) {
    if (Object.prototype.hasOwnProperty.call(a2, c2)) {
      if (c2.charCodeAt(0) < 256) {
        for (let e3 = 0; e3 < d2; e3++) p2 <<= 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++;
        r2 = c2.charCodeAt(0);
        for (let e3 = 0; e3 < 8; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
      } else {
        r2 = 1;
        for (let e3 = 0; e3 < d2; e3++) p2 = p2 << 1 | r2, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 = 0;
        r2 = c2.charCodeAt(0);
        for (let e3 = 0; e3 < 16; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
      }
      l2--, l2 == 0 && (l2 = 2 ** d2, d2++), delete a2[c2];
    } else {
      r2 = i2[c2];
      for (let e3 = 0; e3 < d2; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
    }
    l2--, l2 == 0 && (l2 = 2 ** d2, d2++);
  }
  r2 = 2;
  for (let e3 = 0; e3 < d2; e3++) p2 = p2 << 1 | r2 & 1, m2 == t2 - 1 ? (m2 = 0, f2.push(n2(p2)), p2 = 0) : m2++, r2 >>= 1;
  let h2 = true;
  do
    p2 <<= 1, m2 == t2 - 1 ? (f2.push(n2(p2)), h2 = false) : m2++;
  while (h2);
  return f2.join(``);
}
function r(e2, t2, n2) {
  let r2 = [], i2 = [], a2 = { val: n2(0), position: t2, index: 1 }, o2 = 4, s2 = 4, c2 = 3, l2 = ``, u2, d2 = 0, f2 = 2 ** 2, p2 = 1;
  for (let e3 = 0; e3 < 3; e3 += 1) r2[e3] = String(e3);
  for (; p2 != f2; ) {
    let e3 = a2.val & a2.position;
    a2.position >>= 1, a2.position == 0 && (a2.position = t2, a2.val = n2(a2.index++)), d2 |= +(e3 > 0) * p2, p2 <<= 1;
  }
  switch (d2) {
    case 0:
      for (d2 = 0, f2 = 2 ** 8, p2 = 1; p2 != f2; ) {
        let e3 = a2.val & a2.position;
        a2.position >>= 1, a2.position == 0 && (a2.position = t2, a2.val = n2(a2.index++)), d2 |= +(e3 > 0) * p2, p2 <<= 1;
      }
      u2 = String.fromCharCode(d2);
      break;
    case 1:
      for (d2 = 0, f2 = 2 ** 16, p2 = 1; p2 != f2; ) {
        let e3 = a2.val & a2.position;
        a2.position >>= 1, a2.position == 0 && (a2.position = t2, a2.val = n2(a2.index++)), d2 |= +(e3 > 0) * p2, p2 <<= 1;
      }
      u2 = String.fromCharCode(d2);
      break;
    case 2:
      return ``;
  }
  if (u2 === void 0) throw Error(`No character found`);
  r2[3] = String(u2);
  let m2 = String(u2);
  for (i2.push(String(u2)); ; ) {
    if (a2.index > e2) return ``;
    for (d2 = 0, f2 = 2 ** c2, p2 = 1; p2 != f2; ) {
      let e3 = a2.val & a2.position;
      a2.position >>= 1, a2.position == 0 && (a2.position = t2, a2.val = n2(a2.index++)), d2 |= +(e3 > 0) * p2, p2 <<= 1;
    }
    switch (u2 = d2) {
      case 0:
        for (d2 = 0, f2 = 2 ** 8, p2 = 1; p2 != f2; ) {
          let e3 = a2.val & a2.position;
          a2.position >>= 1, a2.position == 0 && (a2.position = t2, a2.val = n2(a2.index++)), d2 |= +(e3 > 0) * p2, p2 <<= 1;
        }
        r2[s2++] = String.fromCharCode(d2), u2 = s2 - 1, o2--;
        break;
      case 1:
        for (d2 = 0, f2 = 2 ** 16, p2 = 1; p2 != f2; ) {
          let e3 = a2.val & a2.position;
          a2.position >>= 1, a2.position == 0 && (a2.position = t2, a2.val = n2(a2.index++)), d2 |= +(e3 > 0) * p2, p2 <<= 1;
        }
        r2[s2++] = String.fromCharCode(d2), u2 = s2 - 1, o2--;
        break;
      case 2:
        return i2.join(``);
    }
    if (o2 == 0 && (o2 = 2 ** c2, c2++), r2[u2]) l2 = String(r2[u2]);
    else if (u2 === s2) l2 = m2 + m2.charAt(0);
    else return null;
    i2.push(l2), r2[s2++] = m2 + l2.charAt(0), o2--, m2 = l2, o2 == 0 && (o2 = 2 ** c2, c2++);
  }
}
var i = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;
function a(e2) {
  if (e2 == null) return ``;
  let t2 = n(e2, 6, (e3) => i.charAt(e3));
  switch (t2.length % 4) {
    default:
    case 0:
      return t2;
    case 1:
      return t2 + `===`;
    case 2:
      return t2 + `==`;
    case 3:
      return t2 + `=`;
  }
}
var o = {};
function s(e2, t2) {
  if (!o[e2]) {
    o[e2] = {};
    for (let t3 = 0; t3 < e2.length; t3++) o[e2][e2.charAt(t3)] = t3;
  }
  return o[e2][t2];
}
function c(e2) {
  return e2 == null ? `` : e2 == `` ? null : r(e2.length, 32, (t2) => s(i, e2.charAt(t2)));
}
function l(e2) {
  return e2 == null ? `` : n(e2, 16, (e3) => String.fromCharCode(e3));
}
function u(e2, t2) {
  if (e2 == null) return ``;
  let n2 = l(e2), r2 = Math.ceil(Math.log(65536) / Math.log(t2.length)), i2 = ``;
  for (let e3 = 0, a2 = n2.length; e3 < a2; e3++) {
    let a3 = n2.charCodeAt(e3);
    for (let e4 = r2 - 1; e4 >= 0; e4--) {
      let n3 = Math.floor(a3 / t2.length ** +e4);
      a3 %= t2.length ** +e4, i2 += t2.charAt(n3);
    }
  }
  return i2;
}
function d(e2) {
  return e2 == null ? `` : e2 == `` ? null : r(e2.length, 32768, (t2) => e2.charCodeAt(t2));
}
function f(e2, t2) {
  if (e2 == null) return ``;
  if (e2 == `` || t2.length < 2) return null;
  let n2 = Math.ceil(Math.log(65536) / Math.log(t2.length));
  if (e2.length % n2 != 0) return null;
  let r2 = ``, i2, a2;
  for (let o2 = 0, s2 = e2.length; o2 < s2; o2 += n2) {
    i2 = 0;
    for (let r3 = 0; r3 < n2; r3++) a2 = t2.indexOf(e2[o2 + r3]), i2 += a2 * t2.length ** (n2 - 1 - r3);
    r2 += String.fromCharCode(i2);
  }
  return d(r2);
}
var p = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$`;
function m(e2) {
  return e2 == null ? `` : n(e2, 6, (e3) => p.charAt(e3));
}
function h(e2) {
  return e2 == null ? `` : e2 == `` ? null : (e2 = e2.replace(/ /g, `+`), r(e2.length, 32, (t2) => s(p, e2.charAt(t2))));
}
var g = e(t(), 1);
function _(e2, t2) {
  if (typeof e2 == `string`) {
    let n2 = !t2 && e2.charCodeAt(e2.length - 1) % 256 == 0, r2 = new Uint8Array(e2.length * 2 - !!n2);
    for (let t3 = 0; t3 < e2.length; t3++) {
      let i2 = e2.charCodeAt(t3);
      r2[t3 * 2] = i2 >>> 8, (!n2 || t3 < e2.length - 1) && (r2[t3 * 2 + 1] = i2 % 256);
    }
    return r2;
  }
  return e2;
}
function v(e2) {
  let t2 = Math.floor(e2.byteLength / 2), n2 = [];
  for (let r2 = 0; r2 < t2; r2++) n2.push(String.fromCharCode(e2[r2 * 2] * 256 + e2[r2 * 2 + 1]));
  return e2.byteLength & 1 && n2.push(String.fromCharCode(e2[e2.byteLength - 1] * 256)), n2.join(``);
}
function y(e2, t2) {
  (0, g.writeFileSync)(e2, typeof t2 == `string` ? _(t2) : t2, null);
}
function b(e2) {
  return v((0, g.readFileSync)(e2, null));
}
function x(e2) {
  let t2 = l(e2), n2 = new Uint8Array(t2.length * 2);
  for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) {
    let r3 = t2.charCodeAt(e3);
    n2[e3 * 2] = r3 >>> 8, n2[e3 * 2 + 1] = r3 % 256;
  }
  return n2;
}
function S(e2) {
  return d(e2 == null ? e2 : v(e2));
}
function C(e2) {
  return e2 == null ? `` : n(e2, 15, (e3) => String.fromCharCode(e3 + 32)) + ` `;
}
function w(e2) {
  return e2 == null ? `` : e2 == `` ? null : r(e2.length, 16384, (t2) => e2.charCodeAt(t2) - 32);
}
var T = { _compress: n, _decompress: r, compress: l, compressToBase64: a, compressToCustom: u, compressToEncodedURIComponent: m, compressToUint8Array: x, compressToUTF16: C, convertFromUint8Array: v, convertToUint8Array: _, decompress: d, decompressFromBase64: c, decompressFromCustom: f, decompressFromEncodedURIComponent: h, decompressFromUint8Array: S, decompressFromUTF16: w, loadBinaryFile: b, saveBinaryFile: y };
export {
  T as t
};
