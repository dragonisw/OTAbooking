function e(e2, t2 = -1 / 0, n2 = 1 / 0) {
  return Math.min(n2, Math.max(t2, e2));
}
function t(e2, t2) {
  let n2 = e2, r = t2.toString(), i = r.indexOf(`.`), a = i >= 0 ? r.length - i : 0;
  if (a > 0) {
    let e3 = 10 ** a;
    n2 = Math.round(n2 * e3) / e3;
  }
  return n2;
}
function n(e2, n2, r, i) {
  n2 = Number(n2), r = Number(r);
  let a = (e2 - (Number.isNaN(n2) ? 0 : n2)) % i, o = t(Math.abs(a) * 2 >= i ? e2 + Math.sign(a) * (i - Math.abs(a)) : e2 - a, i);
  return Number.isNaN(n2) ? !Number.isNaN(r) && o > r && (o = Math.floor(t(r / i, i)) * i) : o < n2 ? o = n2 : !Number.isNaN(r) && o > r && (o = n2 + Math.floor(t((r - n2) / i, i)) * i), o = t(o, i), o;
}
export {
  n,
  e as t
};
