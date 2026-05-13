var e = [`top`, `right`, `bottom`, `left`], t = [`start`, `end`], n = e.reduce((e2, n2) => e2.concat(n2, n2 + `-` + t[0], n2 + `-` + t[1]), []), r = Math.min, i = Math.max, a = Math.round, o = Math.floor, s = (e2) => ({ x: e2, y: e2 }), c = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function l(e2, t2, n2) {
  return i(e2, r(t2, n2));
}
function u(e2, t2) {
  return typeof e2 == `function` ? e2(t2) : e2;
}
function d(e2) {
  return e2.split(`-`)[0];
}
function f(e2) {
  return e2.split(`-`)[1];
}
function p(e2) {
  return e2 === `x` ? `y` : `x`;
}
function m(e2) {
  return e2 === `y` ? `height` : `width`;
}
function h(e2) {
  let t2 = e2[0];
  return t2 === `t` || t2 === `b` ? `y` : `x`;
}
function g(e2) {
  return p(h(e2));
}
function _(e2, t2, n2) {
  n2 === void 0 && (n2 = false);
  let r2 = f(e2), i2 = g(e2), a2 = m(i2), o2 = i2 === `x` ? r2 === (n2 ? `end` : `start`) ? `right` : `left` : r2 === `start` ? `bottom` : `top`;
  return t2.reference[a2] > t2.floating[a2] && (o2 = E(o2)), [o2, E(o2)];
}
function v(e2) {
  let t2 = E(e2);
  return [y(e2), t2, y(t2)];
}
function y(e2) {
  return e2.includes(`start`) ? e2.replace(`start`, `end`) : e2.replace(`end`, `start`);
}
var b = [`left`, `right`], x = [`right`, `left`], S = [`top`, `bottom`], C = [`bottom`, `top`];
function w(e2, t2, n2) {
  switch (e2) {
    case `top`:
    case `bottom`:
      return n2 ? t2 ? x : b : t2 ? b : x;
    case `left`:
    case `right`:
      return t2 ? S : C;
    default:
      return [];
  }
}
function T(e2, t2, n2, r2) {
  let i2 = f(e2), a2 = w(d(e2), n2 === `start`, r2);
  return i2 && (a2 = a2.map((e3) => e3 + `-` + i2), t2 && (a2 = a2.concat(a2.map(y)))), a2;
}
function E(e2) {
  let t2 = d(e2);
  return c[t2] + e2.slice(t2.length);
}
function D(e2) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e2 };
}
function O(e2) {
  return typeof e2 == `number` ? { top: e2, right: e2, bottom: e2, left: e2 } : D(e2);
}
function k(e2) {
  let { x: t2, y: n2, width: r2, height: i2 } = e2;
  return { width: r2, height: i2, top: n2, left: t2, right: t2 + r2, bottom: n2 + i2, x: t2, y: n2 };
}
function A(e2, t2, n2) {
  let { reference: r2, floating: i2 } = e2, a2 = h(t2), o2 = g(t2), s2 = m(o2), c2 = d(t2), l2 = a2 === `y`, u2 = r2.x + r2.width / 2 - i2.width / 2, p2 = r2.y + r2.height / 2 - i2.height / 2, _2 = r2[s2] / 2 - i2[s2] / 2, v2;
  switch (c2) {
    case `top`:
      v2 = { x: u2, y: r2.y - i2.height };
      break;
    case `bottom`:
      v2 = { x: u2, y: r2.y + r2.height };
      break;
    case `right`:
      v2 = { x: r2.x + r2.width, y: p2 };
      break;
    case `left`:
      v2 = { x: r2.x - i2.width, y: p2 };
      break;
    default:
      v2 = { x: r2.x, y: r2.y };
  }
  switch (f(t2)) {
    case `start`:
      v2[o2] -= _2 * (n2 && l2 ? -1 : 1);
      break;
    case `end`:
      v2[o2] += _2 * (n2 && l2 ? -1 : 1);
      break;
  }
  return v2;
}
async function j(e2, t2) {
  t2 === void 0 && (t2 = {});
  let { x: n2, y: r2, platform: i2, rects: a2, elements: o2, strategy: s2 } = e2, { boundary: c2 = `clippingAncestors`, rootBoundary: l2 = `viewport`, elementContext: d2 = `floating`, altBoundary: f2 = false, padding: p2 = 0 } = u(t2, e2), m2 = O(p2), h2 = o2[f2 ? d2 === `floating` ? `reference` : `floating` : d2], g2 = k(await i2.getClippingRect({ element: await (i2.isElement == null ? void 0 : i2.isElement(h2)) ?? true ? h2 : h2.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(o2.floating)), boundary: c2, rootBoundary: l2, strategy: s2 })), _2 = d2 === `floating` ? { x: n2, y: r2, width: a2.floating.width, height: a2.floating.height } : a2.reference, v2 = await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(o2.floating)), y2 = await (i2.isElement == null ? void 0 : i2.isElement(v2)) && await (i2.getScale == null ? void 0 : i2.getScale(v2)) || { x: 1, y: 1 }, b2 = k(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o2, rect: _2, offsetParent: v2, strategy: s2 }) : _2);
  return { top: (g2.top - b2.top + m2.top) / y2.y, bottom: (b2.bottom - g2.bottom + m2.bottom) / y2.y, left: (g2.left - b2.left + m2.left) / y2.x, right: (b2.right - g2.right + m2.right) / y2.x };
}
var M = 50, N = async (e2, t2, n2) => {
  let { placement: r2 = `bottom`, strategy: i2 = `absolute`, middleware: a2 = [], platform: o2 } = n2, s2 = o2.detectOverflow ? o2 : { ...o2, detectOverflow: j }, c2 = await (o2.isRTL == null ? void 0 : o2.isRTL(t2)), l2 = await o2.getElementRects({ reference: e2, floating: t2, strategy: i2 }), { x: u2, y: d2 } = A(l2, r2, c2), f2 = r2, p2 = 0, m2 = {};
  for (let n3 = 0; n3 < a2.length; n3++) {
    let h2 = a2[n3];
    if (!h2) continue;
    let { name: g2, fn: _2 } = h2, { x: v2, y: y2, data: b2, reset: x2 } = await _2({ x: u2, y: d2, initialPlacement: r2, placement: f2, strategy: i2, middlewareData: m2, rects: l2, platform: s2, elements: { reference: e2, floating: t2 } });
    u2 = v2 ?? u2, d2 = y2 ?? d2, m2[g2] = { ...m2[g2], ...b2 }, x2 && p2 < M && (p2++, typeof x2 == `object` && (x2.placement && (f2 = x2.placement), x2.rects && (l2 = x2.rects === true ? await o2.getElementRects({ reference: e2, floating: t2, strategy: i2 }) : x2.rects), { x: u2, y: d2 } = A(l2, f2, c2)), n3 = -1);
  }
  return { x: u2, y: d2, placement: f2, strategy: i2, middlewareData: m2 };
}, P = (e2) => ({ name: `arrow`, options: e2, async fn(t2) {
  let { x: n2, y: i2, placement: a2, rects: o2, platform: s2, elements: c2, middlewareData: d2 } = t2, { element: p2, padding: h2 = 0 } = u(e2, t2) || {};
  if (p2 == null) return {};
  let _2 = O(h2), v2 = { x: n2, y: i2 }, y2 = g(a2), b2 = m(y2), x2 = await s2.getDimensions(p2), S2 = y2 === `y`, C2 = S2 ? `top` : `left`, w2 = S2 ? `bottom` : `right`, T2 = S2 ? `clientHeight` : `clientWidth`, E2 = o2.reference[b2] + o2.reference[y2] - v2[y2] - o2.floating[b2], D2 = v2[y2] - o2.reference[y2], k2 = await (s2.getOffsetParent == null ? void 0 : s2.getOffsetParent(p2)), A2 = k2 ? k2[T2] : 0;
  (!A2 || !await (s2.isElement == null ? void 0 : s2.isElement(k2))) && (A2 = c2.floating[T2] || o2.floating[b2]);
  let j2 = E2 / 2 - D2 / 2, M2 = A2 / 2 - x2[b2] / 2 - 1, N2 = r(_2[C2], M2), P2 = r(_2[w2], M2), F2 = N2, I2 = A2 - x2[b2] - P2, L2 = A2 / 2 - x2[b2] / 2 + j2, R2 = l(F2, L2, I2), z2 = !d2.arrow && f(a2) != null && L2 !== R2 && o2.reference[b2] / 2 - (L2 < F2 ? N2 : P2) - x2[b2] / 2 < 0, B2 = z2 ? L2 < F2 ? L2 - F2 : L2 - I2 : 0;
  return { [y2]: v2[y2] + B2, data: { [y2]: R2, centerOffset: L2 - R2 - B2, ...z2 && { alignmentOffset: B2 } }, reset: z2 };
} });
function F(e2, t2, n2) {
  return (e2 ? [...n2.filter((t3) => f(t3) === e2), ...n2.filter((t3) => f(t3) !== e2)] : n2.filter((e3) => d(e3) === e3)).filter((n3) => e2 ? f(n3) === e2 || (t2 ? y(n3) !== n3 : false) : true);
}
var I = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `autoPlacement`, options: e2, async fn(t2) {
    let { rects: r2, middlewareData: i2, placement: a2, platform: o2, elements: s2 } = t2, { crossAxis: c2 = false, alignment: l2, allowedPlacements: p2 = n, autoAlignment: m2 = true, ...h2 } = u(e2, t2), g2 = l2 !== void 0 || p2 === n ? F(l2 || null, m2, p2) : p2, v2 = await o2.detectOverflow(t2, h2), y2 = i2.autoPlacement?.index || 0, b2 = g2[y2];
    if (b2 == null) return {};
    let x2 = _(b2, r2, await (o2.isRTL == null ? void 0 : o2.isRTL(s2.floating)));
    if (a2 !== b2) return { reset: { placement: g2[0] } };
    let S2 = [v2[d(b2)], v2[x2[0]], v2[x2[1]]], C2 = [...i2.autoPlacement?.overflows || [], { placement: b2, overflows: S2 }], w2 = g2[y2 + 1];
    if (w2) return { data: { index: y2 + 1, overflows: C2 }, reset: { placement: w2 } };
    let T2 = C2.map((e3) => {
      let t3 = f(e3.placement);
      return [e3.placement, t3 && c2 ? e3.overflows.slice(0, 2).reduce((e4, t4) => e4 + t4, 0) : e3.overflows[0], e3.overflows];
    }).sort((e3, t3) => e3[1] - t3[1]), E2 = T2.filter((e3) => e3[2].slice(0, f(e3[0]) ? 2 : 3).every((e4) => e4 <= 0))[0]?.[0] || T2[0][0];
    return E2 === a2 ? {} : { data: { index: y2 + 1, overflows: C2 }, reset: { placement: E2 } };
  } };
}, L = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `flip`, options: e2, async fn(t2) {
    var n2;
    let { placement: r2, middlewareData: i2, rects: a2, initialPlacement: o2, platform: s2, elements: c2 } = t2, { mainAxis: l2 = true, crossAxis: f2 = true, fallbackPlacements: p2, fallbackStrategy: m2 = `bestFit`, fallbackAxisSideDirection: g2 = `none`, flipAlignment: y2 = true, ...b2 } = u(e2, t2);
    if ((n2 = i2.arrow) != null && n2.alignmentOffset) return {};
    let x2 = d(r2), S2 = h(o2), C2 = d(o2) === o2, w2 = await (s2.isRTL == null ? void 0 : s2.isRTL(c2.floating)), D2 = p2 || (C2 || !y2 ? [E(o2)] : v(o2)), O2 = g2 !== `none`;
    !p2 && O2 && D2.push(...T(o2, y2, g2, w2));
    let k2 = [o2, ...D2], A2 = await s2.detectOverflow(t2, b2), j2 = [], M2 = i2.flip?.overflows || [];
    if (l2 && j2.push(A2[x2]), f2) {
      let e3 = _(r2, a2, w2);
      j2.push(A2[e3[0]], A2[e3[1]]);
    }
    if (M2 = [...M2, { placement: r2, overflows: j2 }], !j2.every((e3) => e3 <= 0)) {
      let e3 = (i2.flip?.index || 0) + 1, t3 = k2[e3];
      if (t3 && (!(f2 === `alignment` && S2 !== h(t3)) || M2.every((e4) => h(e4.placement) === S2 ? e4.overflows[0] > 0 : true))) return { data: { index: e3, overflows: M2 }, reset: { placement: t3 } };
      let n3 = M2.filter((e4) => e4.overflows[0] <= 0).sort((e4, t4) => e4.overflows[1] - t4.overflows[1])[0]?.placement;
      if (!n3) switch (m2) {
        case `bestFit`: {
          let e4 = M2.filter((e5) => {
            if (O2) {
              let t4 = h(e5.placement);
              return t4 === S2 || t4 === `y`;
            }
            return true;
          }).map((e5) => [e5.placement, e5.overflows.filter((e6) => e6 > 0).reduce((e6, t4) => e6 + t4, 0)]).sort((e5, t4) => e5[1] - t4[1])[0]?.[0];
          e4 && (n3 = e4);
          break;
        }
        case `initialPlacement`:
          n3 = o2;
          break;
      }
      if (r2 !== n3) return { reset: { placement: n3 } };
    }
    return {};
  } };
};
function R(e2, t2) {
  return { top: e2.top - t2.height, right: e2.right - t2.width, bottom: e2.bottom - t2.height, left: e2.left - t2.width };
}
function z(t2) {
  return e.some((e2) => t2[e2] >= 0);
}
var B = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `hide`, options: e2, async fn(t2) {
    let { rects: n2, platform: r2 } = t2, { strategy: i2 = `referenceHidden`, ...a2 } = u(e2, t2);
    switch (i2) {
      case `referenceHidden`: {
        let e3 = R(await r2.detectOverflow(t2, { ...a2, elementContext: `reference` }), n2.reference);
        return { data: { referenceHiddenOffsets: e3, referenceHidden: z(e3) } };
      }
      case `escaped`: {
        let e3 = R(await r2.detectOverflow(t2, { ...a2, altBoundary: true }), n2.floating);
        return { data: { escapedOffsets: e3, escaped: z(e3) } };
      }
      default:
        return {};
    }
  } };
}, V = /* @__PURE__ */ new Set([`left`, `top`]);
async function H(e2, t2) {
  let { placement: n2, platform: r2, elements: i2 } = e2, a2 = await (r2.isRTL == null ? void 0 : r2.isRTL(i2.floating)), o2 = d(n2), s2 = f(n2), c2 = h(n2) === `y`, l2 = V.has(o2) ? -1 : 1, p2 = a2 && c2 ? -1 : 1, m2 = u(t2, e2), { mainAxis: g2, crossAxis: _2, alignmentAxis: v2 } = typeof m2 == `number` ? { mainAxis: m2, crossAxis: 0, alignmentAxis: null } : { mainAxis: m2.mainAxis || 0, crossAxis: m2.crossAxis || 0, alignmentAxis: m2.alignmentAxis };
  return s2 && typeof v2 == `number` && (_2 = s2 === `end` ? v2 * -1 : v2), c2 ? { x: _2 * p2, y: g2 * l2 } : { x: g2 * l2, y: _2 * p2 };
}
var U = function(e2) {
  return e2 === void 0 && (e2 = 0), { name: `offset`, options: e2, async fn(t2) {
    var n2;
    let { x: r2, y: i2, placement: a2, middlewareData: o2 } = t2, s2 = await H(t2, e2);
    return a2 === o2.offset?.placement && (n2 = o2.arrow) != null && n2.alignmentOffset ? {} : { x: r2 + s2.x, y: i2 + s2.y, data: { ...s2, placement: a2 } };
  } };
}, W = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `shift`, options: e2, async fn(t2) {
    let { x: n2, y: r2, placement: i2, platform: a2 } = t2, { mainAxis: o2 = true, crossAxis: s2 = false, limiter: c2 = { fn: (e3) => {
      let { x: t3, y: n3 } = e3;
      return { x: t3, y: n3 };
    } }, ...f2 } = u(e2, t2), m2 = { x: n2, y: r2 }, g2 = await a2.detectOverflow(t2, f2), _2 = h(d(i2)), v2 = p(_2), y2 = m2[v2], b2 = m2[_2];
    if (o2) {
      let e3 = v2 === `y` ? `top` : `left`, t3 = v2 === `y` ? `bottom` : `right`, n3 = y2 + g2[e3], r3 = y2 - g2[t3];
      y2 = l(n3, y2, r3);
    }
    if (s2) {
      let e3 = _2 === `y` ? `top` : `left`, t3 = _2 === `y` ? `bottom` : `right`, n3 = b2 + g2[e3], r3 = b2 - g2[t3];
      b2 = l(n3, b2, r3);
    }
    let x2 = c2.fn({ ...t2, [v2]: y2, [_2]: b2 });
    return { ...x2, data: { x: x2.x - n2, y: x2.y - r2, enabled: { [v2]: o2, [_2]: s2 } } };
  } };
}, G = function(e2) {
  return e2 === void 0 && (e2 = {}), { options: e2, fn(t2) {
    let { x: n2, y: r2, placement: i2, rects: a2, middlewareData: o2 } = t2, { offset: s2 = 0, mainAxis: c2 = true, crossAxis: l2 = true } = u(e2, t2), f2 = { x: n2, y: r2 }, m2 = h(i2), g2 = p(m2), _2 = f2[g2], v2 = f2[m2], y2 = u(s2, t2), b2 = typeof y2 == `number` ? { mainAxis: y2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y2 };
    if (c2) {
      let e3 = g2 === `y` ? `height` : `width`, t3 = a2.reference[g2] - a2.floating[e3] + b2.mainAxis, n3 = a2.reference[g2] + a2.reference[e3] - b2.mainAxis;
      _2 < t3 ? _2 = t3 : _2 > n3 && (_2 = n3);
    }
    if (l2) {
      let e3 = g2 === `y` ? `width` : `height`, t3 = V.has(d(i2)), n3 = a2.reference[m2] - a2.floating[e3] + (t3 && o2.offset?.[m2] || 0) + (t3 ? 0 : b2.crossAxis), r3 = a2.reference[m2] + a2.reference[e3] + (t3 ? 0 : o2.offset?.[m2] || 0) - (t3 ? b2.crossAxis : 0);
      v2 < n3 ? v2 = n3 : v2 > r3 && (v2 = r3);
    }
    return { [g2]: _2, [m2]: v2 };
  } };
}, K = function(e2) {
  return e2 === void 0 && (e2 = {}), { name: `size`, options: e2, async fn(t2) {
    var n2, a2;
    let { placement: o2, rects: s2, platform: c2, elements: l2 } = t2, { apply: p2 = () => {
    }, ...m2 } = u(e2, t2), g2 = await c2.detectOverflow(t2, m2), _2 = d(o2), v2 = f(o2), y2 = h(o2) === `y`, { width: b2, height: x2 } = s2.floating, S2, C2;
    _2 === `top` || _2 === `bottom` ? (S2 = _2, C2 = v2 === (await (c2.isRTL == null ? void 0 : c2.isRTL(l2.floating)) ? `start` : `end`) ? `left` : `right`) : (C2 = _2, S2 = v2 === `end` ? `top` : `bottom`);
    let w2 = x2 - g2.top - g2.bottom, T2 = b2 - g2.left - g2.right, E2 = r(x2 - g2[S2], w2), D2 = r(b2 - g2[C2], T2), O2 = !t2.middlewareData.shift, k2 = E2, A2 = D2;
    if ((n2 = t2.middlewareData.shift) != null && n2.enabled.x && (A2 = T2), (a2 = t2.middlewareData.shift) != null && a2.enabled.y && (k2 = w2), O2 && !v2) {
      let e3 = i(g2.left, 0), t3 = i(g2.right, 0), n3 = i(g2.top, 0), r2 = i(g2.bottom, 0);
      y2 ? A2 = b2 - 2 * (e3 !== 0 || t3 !== 0 ? e3 + t3 : i(g2.left, g2.right)) : k2 = x2 - 2 * (n3 !== 0 || r2 !== 0 ? n3 + r2 : i(g2.top, g2.bottom));
    }
    await p2({ ...t2, availableWidth: A2, availableHeight: k2 });
    let j2 = await c2.getDimensions(l2.floating);
    return b2 !== j2.width || x2 !== j2.height ? { reset: { rects: true } } : {};
  } };
};
export {
  B as a,
  W as c,
  o as d,
  i as f,
  a as h,
  L as i,
  K as l,
  k as m,
  I as n,
  G as o,
  r as p,
  N as r,
  U as s,
  P as t,
  s as u
};
