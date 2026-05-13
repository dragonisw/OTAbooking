import { t as e } from "./chunk-DcEfI0Mx.js";
var t = e(((e2, t2) => {
  var n2 = 40, r2 = 41, i2 = 39, a2 = 34, o2 = 92, s = 47, c = 44, l = 58, u = 42, d = 117, f = 85, p = 43, m = /^[a-f0-9?-]+$/i;
  t2.exports = function(e3) {
    for (var t3 = [], h = e3, g, _, v, y, b, x, S, C, w = 0, T = h.charCodeAt(w), E = h.length, D = [{ nodes: t3 }], O = 0, k, A = ``, j = ``, M = ``; w < E; ) if (T <= 32) {
      g = w;
      do
        g += 1, T = h.charCodeAt(g);
      while (T <= 32);
      y = h.slice(w, g), v = t3[t3.length - 1], T === r2 && O ? M = y : v && v.type === `div` ? (v.after = y, v.sourceEndIndex += y.length) : T === c || T === l || T === s && h.charCodeAt(g + 1) !== u && (!k || k && k.type === `function` && k.value !== `calc`) ? j = y : t3.push({ type: `space`, sourceIndex: w, sourceEndIndex: g, value: y }), w = g;
    } else if (T === i2 || T === a2) {
      g = w, _ = T === i2 ? `'` : `"`, y = { type: `string`, sourceIndex: w, quote: _ };
      do
        if (b = false, g = h.indexOf(_, g + 1), ~g) for (x = g; h.charCodeAt(x - 1) === o2; ) --x, b = !b;
        else h += _, g = h.length - 1, y.unclosed = true;
      while (b);
      y.value = h.slice(w + 1, g), y.sourceEndIndex = y.unclosed ? g : g + 1, t3.push(y), w = g + 1, T = h.charCodeAt(w);
    } else if (T === s && h.charCodeAt(w + 1) === u) g = h.indexOf(`*/`, w), y = { type: `comment`, sourceIndex: w, sourceEndIndex: g + 2 }, g === -1 && (y.unclosed = true, g = h.length, y.sourceEndIndex = g), y.value = h.slice(w + 2, g), t3.push(y), w = g + 2, T = h.charCodeAt(w);
    else if ((T === s || T === u) && k && k.type === `function` && k.value === `calc`) y = h[w], t3.push({ type: `word`, sourceIndex: w - j.length, sourceEndIndex: w + y.length, value: y }), w += 1, T = h.charCodeAt(w);
    else if (T === s || T === c || T === l) y = h[w], t3.push({ type: `div`, sourceIndex: w - j.length, sourceEndIndex: w + y.length, value: y, before: j, after: `` }), j = ``, w += 1, T = h.charCodeAt(w);
    else if (n2 === T) {
      g = w;
      do
        g += 1, T = h.charCodeAt(g);
      while (T <= 32);
      if (C = w, y = { type: `function`, sourceIndex: w - A.length, value: A, before: h.slice(C + 1, g) }, w = g, A === `url` && T !== i2 && T !== a2) {
        --g;
        do
          if (b = false, g = h.indexOf(`)`, g + 1), ~g) for (x = g; h.charCodeAt(x - 1) === o2; ) --x, b = !b;
          else h += `)`, g = h.length - 1, y.unclosed = true;
        while (b);
        S = g;
        do
          --S, T = h.charCodeAt(S);
        while (T <= 32);
        C < S ? (w === S + 1 ? y.nodes = [] : y.nodes = [{ type: `word`, sourceIndex: w, sourceEndIndex: S + 1, value: h.slice(w, S + 1) }], y.unclosed && S + 1 !== g ? (y.after = ``, y.nodes.push({ type: `space`, sourceIndex: S + 1, sourceEndIndex: g, value: h.slice(S + 1, g) })) : (y.after = h.slice(S + 1, g), y.sourceEndIndex = g)) : (y.after = ``, y.nodes = []), w = g + 1, y.sourceEndIndex = y.unclosed ? g : w, T = h.charCodeAt(w), t3.push(y);
      } else O += 1, y.after = ``, y.sourceEndIndex = w + 1, t3.push(y), D.push(y), t3 = y.nodes = [], k = y;
      A = ``;
    } else if (r2 === T && O) w += 1, T = h.charCodeAt(w), k.after = M, k.sourceEndIndex += M.length, M = ``, --O, D[D.length - 1].sourceEndIndex = w, D.pop(), k = D[O], t3 = k.nodes;
    else {
      g = w;
      do
        T === o2 && (g += 1), g += 1, T = h.charCodeAt(g);
      while (g < E && !(T <= 32 || T === i2 || T === a2 || T === c || T === l || T === s || T === n2 || T === u && k && k.type === `function` && k.value === `calc` || T === s && k.type === `function` && k.value === `calc` || T === r2 && O));
      y = h.slice(w, g), n2 === T ? A = y : (d === y.charCodeAt(0) || f === y.charCodeAt(0)) && p === y.charCodeAt(1) && m.test(y.slice(2)) ? t3.push({ type: `unicode-range`, sourceIndex: w, sourceEndIndex: g, value: y }) : t3.push({ type: `word`, sourceIndex: w, sourceEndIndex: g, value: y }), w = g;
    }
    for (w = D.length - 1; w; --w) D[w].unclosed = true, D[w].sourceEndIndex = h.length;
    return D[0].nodes;
  };
})), n = e(((e2, t2) => {
  t2.exports = function e3(t3, n2, r2) {
    var i2, a2, o2, s;
    for (i2 = 0, a2 = t3.length; i2 < a2; i2 += 1) o2 = t3[i2], r2 || (s = n2(o2, i2, t3)), s !== false && o2.type === `function` && Array.isArray(o2.nodes) && e3(o2.nodes, n2, r2), r2 && n2(o2, i2, t3);
  };
})), r = e(((e2, t2) => {
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
})), i = e(((e2, t2) => {
  var n2 = 45, r2 = 43, i2 = 46, a2 = 101, o2 = 69;
  function s(e3) {
    var t3 = e3.charCodeAt(0), a3;
    if (t3 === r2 || t3 === n2) {
      if (a3 = e3.charCodeAt(1), a3 >= 48 && a3 <= 57) return true;
      var o3 = e3.charCodeAt(2);
      return a3 === i2 && o3 >= 48 && o3 <= 57;
    }
    return t3 === i2 ? (a3 = e3.charCodeAt(1), a3 >= 48 && a3 <= 57) : t3 >= 48 && t3 <= 57;
  }
  t2.exports = function(e3) {
    var t3 = 0, c = e3.length, l, u, d;
    if (c === 0 || !s(e3)) return false;
    for (l = e3.charCodeAt(t3), (l === r2 || l === n2) && t3++; t3 < c && (l = e3.charCodeAt(t3), !(l < 48 || l > 57)); ) t3 += 1;
    if (l = e3.charCodeAt(t3), u = e3.charCodeAt(t3 + 1), l === i2 && u >= 48 && u <= 57) for (t3 += 2; t3 < c && (l = e3.charCodeAt(t3), !(l < 48 || l > 57)); ) t3 += 1;
    if (l = e3.charCodeAt(t3), u = e3.charCodeAt(t3 + 1), d = e3.charCodeAt(t3 + 2), (l === a2 || l === o2) && (u >= 48 && u <= 57 || (u === r2 || u === n2) && d >= 48 && d <= 57)) for (t3 += u === r2 || u === n2 ? 3 : 2; t3 < c && (l = e3.charCodeAt(t3), !(l < 48 || l > 57)); ) t3 += 1;
    return { number: e3.slice(0, t3), unit: e3.slice(t3) };
  };
})), a = e(((e2, a2) => {
  var o2 = t(), s = n(), c = r();
  function l(e3) {
    return this instanceof l ? (this.nodes = o2(e3), this) : new l(e3);
  }
  l.prototype.toString = function() {
    return Array.isArray(this.nodes) ? c(this.nodes) : ``;
  }, l.prototype.walk = function(e3, t2) {
    return s(this.nodes, e3, t2), this;
  }, l.unit = i(), l.walk = s, l.stringify = c, a2.exports = l;
})), o = e(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = function(e3, t3, n3, r3, i2) {
      for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e3 = e3 ? e3[t3[r3]] : i2;
      return e3 === i2 ? n3 : e3;
    } : typeof define == `function` && define.amd ? define(function() {
      return function(e3, t3, n3, r3, i2) {
        for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e3 = e3 ? e3[t3[r3]] : i2;
        return e3 === i2 ? n3 : e3;
      };
    }) : n2.dlv = function(e3, t3, n3, r3, i2) {
      for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e3 = e3 ? e3[t3[r3]] : i2;
      return e3 === i2 ? n3 : e3;
    };
  })(e2);
}));
export {
  a as n,
  o as t
};
