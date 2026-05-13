var e = `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`, t = (e2) => crypto.getRandomValues(new Uint8Array(e2)), n = (e2, t2, n2) => {
  let r2 = 256 - 256 % e2.length;
  if (r2 === 256) {
    let r3 = e2.length - 1;
    return (i3 = t2) => {
      if (!i3) return ``;
      let a = ``;
      for (; ; ) {
        let t3 = n2(i3), o = i3;
        for (; o--; ) if (a += e2[t3[o] & r3], a.length >= i3) return a;
      }
    };
  }
  let i2 = Math.ceil(1.6 * 256 * t2 / r2);
  return (a = t2) => {
    if (!a) return ``;
    let o = ``;
    for (; ; ) {
      let t3 = n2(i2), s = i2;
      for (; s--; ) if (t3[s] < r2 && (o += e2[t3[s] % e2.length], o.length >= a)) return o;
    }
  };
}, r = (e2, r2 = 21) => n(e2, r2 | 0, t), i = (t2 = 21) => {
  let n2 = ``, r2 = crypto.getRandomValues(new Uint8Array(t2 |= 0));
  for (; t2--; ) n2 += e[r2[t2] & 63];
  return n2;
};
export {
  i as n,
  r as t
};
