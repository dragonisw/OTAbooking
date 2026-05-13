var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
function n(n2, r) {
  var i = typeof n2;
  return r ?? (r = e), !!r && (i == `number` || i != `symbol` && t.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < r;
}
export {
  n as t
};
