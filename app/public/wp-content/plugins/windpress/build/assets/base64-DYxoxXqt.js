var e = { base64: new TextEncoder().encode(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`), base64url: new TextEncoder().encode(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`) }, t = { base64: new Uint8Array(128).fill(64), base64url: new Uint8Array(128).fill(64) };
e.base64.forEach((e2, n2) => t.base64[e2] = n2), e.base64url.forEach((e2, n2) => t.base64url[e2] = n2);
function n(e2) {
  return ((e2 + 2) / 3 | 0) * 4;
}
function r(e2, t2, n2, r2, i2) {
  for (t2 += 2; t2 < e2.length; t2 += 3) {
    let i3 = e2[t2 - 2] << 16 | e2[t2 - 1] << 8 | e2[t2];
    e2[n2++] = r2[i3 >> 18], e2[n2++] = r2[i3 >> 12 & 63], e2[n2++] = r2[i3 >> 6 & 63], e2[n2++] = r2[i3 & 63];
  }
  switch (t2) {
    case e2.length + 1: {
      let a2 = e2[t2 - 2] << 16;
      e2[n2++] = r2[a2 >> 18], e2[n2++] = r2[a2 >> 12 & 63], e2[n2++] = i2, e2[n2++] = i2;
      break;
    }
    case e2.length: {
      let a2 = e2[t2 - 2] << 16 | e2[t2 - 1] << 8;
      e2[n2++] = r2[a2 >> 18], e2[n2++] = r2[a2 >> 12 & 63], e2[n2++] = r2[a2 >> 6 & 63], e2[n2++] = i2;
      break;
    }
  }
  return n2;
}
function i(e2, t2, n2, r2, i2) {
  for (let t3 = e2.length - 2; t3 < e2.length; ++t3) if (e2[t3] === i2) {
    for (let n3 = t3 + 1; n3 < e2.length; ++n3) if (e2[n3] !== i2) throw TypeError(`Cannot decode input as base64: Invalid character (${String.fromCharCode(e2[n3])})`);
    e2 = e2.subarray(0, t3);
    break;
  }
  if ((e2.length - n2) % 4 == 1) throw RangeError(`Cannot decode input as base64: Length (${e2.length - n2}), excluding padding, must not have a remainder of 1 when divided by 4`);
  for (t2 += 3; t2 < e2.length; t2 += 4) {
    let i3 = a(e2[t2 - 3], r2) << 18 | a(e2[t2 - 2], r2) << 12 | a(e2[t2 - 1], r2) << 6 | a(e2[t2], r2);
    e2[n2++] = i3 >> 16, e2[n2++] = i3 >> 8 & 255, e2[n2++] = i3 & 255;
  }
  switch (t2) {
    case e2.length + 1: {
      let i3 = a(e2[t2 - 3], r2) << 18 | a(e2[t2 - 2], r2) << 12;
      e2[n2++] = i3 >> 16;
      break;
    }
    case e2.length: {
      let i3 = a(e2[t2 - 3], r2) << 18 | a(e2[t2 - 2], r2) << 12 | a(e2[t2 - 1], r2) << 6;
      e2[n2++] = i3 >> 16, e2[n2++] = i3 >> 8 & 255;
      break;
    }
  }
  return n2;
}
function a(e2, t2) {
  let n2 = t2[e2] ?? 64;
  if (n2 === 64) throw TypeError(`Cannot decode input as base64: Invalid character (${String.fromCharCode(e2)})`);
  return n2;
}
function o(e2, t2) {
  let n2 = e2.length;
  if (e2.byteOffset) {
    let t3 = new Uint8Array(e2.buffer);
    t3.set(e2), e2 = t3.subarray(0, n2);
  }
  return e2 = new Uint8Array(e2.buffer.transfer(t2)), e2.set(e2.subarray(0, n2), t2 - n2), [e2, t2 - n2];
}
var s = 61, c = new TextEncoder().encode(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`), l = new Uint8Array(128).fill(64);
c.forEach((e2, t2) => l[e2] = t2);
function u(e2) {
  e2 = typeof e2 == `string` ? new TextEncoder().encode(e2) : e2 instanceof ArrayBuffer ? new Uint8Array(e2).slice() : e2.slice();
  let [t2, i2] = o(e2, n(e2.length));
  return r(t2, i2, 0, c, s), new TextDecoder().decode(t2);
}
function d(e2) {
  let t2 = new TextEncoder().encode(e2);
  return new Uint8Array(t2.buffer.transfer(i(t2, 0, 0, l, s)));
}
export {
  u as n,
  d as t
};
