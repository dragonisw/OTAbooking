var e = `bottom`, t = `right`, n = `left`, r = `auto`, i = [`top`, e, t, n], a = `start`, o = `clippingParents`, s = `viewport`, c = `popper`, l = `reference`, u = i.reduce(function(e2, t2) {
  return e2.concat([t2 + `-` + a, t2 + `-end`]);
}, []), d = [].concat(i, [r]).reduce(function(e2, t2) {
  return e2.concat([t2, t2 + `-` + a, t2 + `-end`]);
}, []), f = [`beforeRead`, `read`, `afterRead`, `beforeMain`, `main`, `afterMain`, `beforeWrite`, `write`, `afterWrite`];
function p(e2) {
  return e2 ? (e2.nodeName || ``).toLowerCase() : null;
}
function m(e2) {
  if (e2 == null) return window;
  if (e2.toString() !== `[object Window]`) {
    var t2 = e2.ownerDocument;
    return t2 && t2.defaultView || window;
  }
  return e2;
}
function h(e2) {
  return e2 instanceof m(e2).Element || e2 instanceof Element;
}
function g(e2) {
  return e2 instanceof m(e2).HTMLElement || e2 instanceof HTMLElement;
}
function _(e2) {
  return typeof ShadowRoot > `u` ? false : e2 instanceof m(e2).ShadowRoot || e2 instanceof ShadowRoot;
}
function v(e2) {
  var t2 = e2.state;
  Object.keys(t2.elements).forEach(function(e3) {
    var n2 = t2.styles[e3] || {}, r2 = t2.attributes[e3] || {}, i2 = t2.elements[e3];
    !g(i2) || !p(i2) || (Object.assign(i2.style, n2), Object.keys(r2).forEach(function(e4) {
      var t3 = r2[e4];
      t3 === false ? i2.removeAttribute(e4) : i2.setAttribute(e4, t3 === true ? `` : t3);
    }));
  });
}
function y(e2) {
  var t2 = e2.state, n2 = { popper: { position: t2.options.strategy, left: `0`, top: `0`, margin: `0` }, arrow: { position: `absolute` }, reference: {} };
  return Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow), function() {
    Object.keys(t2.elements).forEach(function(e3) {
      var r2 = t2.elements[e3], i2 = t2.attributes[e3] || {}, a2 = Object.keys(t2.styles.hasOwnProperty(e3) ? t2.styles[e3] : n2[e3]).reduce(function(e4, t3) {
        return e4[t3] = ``, e4;
      }, {});
      !g(r2) || !p(r2) || (Object.assign(r2.style, a2), Object.keys(i2).forEach(function(e4) {
        r2.removeAttribute(e4);
      }));
    });
  };
}
var b = { name: `applyStyles`, enabled: true, phase: `write`, fn: v, effect: y, requires: [`computeStyles`] };
function x(e2) {
  return e2.split(`-`)[0];
}
var S = Math.max, C = Math.min, w = Math.round;
function T() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(e3) {
    return e3.brand + `/` + e3.version;
  }).join(` `) : navigator.userAgent;
}
function E() {
  return !/^((?!chrome|android).)*safari/i.test(T());
}
function D(e2, t2, n2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  var r2 = e2.getBoundingClientRect(), i2 = 1, a2 = 1;
  t2 && g(e2) && (i2 = e2.offsetWidth > 0 && w(r2.width) / e2.offsetWidth || 1, a2 = e2.offsetHeight > 0 && w(r2.height) / e2.offsetHeight || 1);
  var o2 = (h(e2) ? m(e2) : window).visualViewport, s2 = !E() && n2, c2 = (r2.left + (s2 && o2 ? o2.offsetLeft : 0)) / i2, l2 = (r2.top + (s2 && o2 ? o2.offsetTop : 0)) / a2, u2 = r2.width / i2, d2 = r2.height / a2;
  return { width: u2, height: d2, top: l2, right: c2 + u2, bottom: l2 + d2, left: c2, x: c2, y: l2 };
}
function O(e2) {
  var t2 = D(e2), n2 = e2.offsetWidth, r2 = e2.offsetHeight;
  return Math.abs(t2.width - n2) <= 1 && (n2 = t2.width), Math.abs(t2.height - r2) <= 1 && (r2 = t2.height), { x: e2.offsetLeft, y: e2.offsetTop, width: n2, height: r2 };
}
function k(e2, t2) {
  var n2 = t2.getRootNode && t2.getRootNode();
  if (e2.contains(t2)) return true;
  if (n2 && _(n2)) {
    var r2 = t2;
    do {
      if (r2 && e2.isSameNode(r2)) return true;
      r2 = r2.parentNode || r2.host;
    } while (r2);
  }
  return false;
}
function A(e2) {
  return m(e2).getComputedStyle(e2);
}
function j(e2) {
  return [`table`, `td`, `th`].indexOf(p(e2)) >= 0;
}
function M(e2) {
  return ((h(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
}
function N(e2) {
  return p(e2) === `html` ? e2 : e2.assignedSlot || e2.parentNode || (_(e2) ? e2.host : null) || M(e2);
}
function P(e2) {
  return !g(e2) || A(e2).position === `fixed` ? null : e2.offsetParent;
}
function F(e2) {
  var t2 = /firefox/i.test(T());
  if (/Trident/i.test(T()) && g(e2) && A(e2).position === `fixed`) return null;
  var n2 = N(e2);
  for (_(n2) && (n2 = n2.host); g(n2) && [`html`, `body`].indexOf(p(n2)) < 0; ) {
    var r2 = A(n2);
    if (r2.transform !== `none` || r2.perspective !== `none` || r2.contain === `paint` || [`transform`, `perspective`].indexOf(r2.willChange) !== -1 || t2 && r2.willChange === `filter` || t2 && r2.filter && r2.filter !== `none`) return n2;
    n2 = n2.parentNode;
  }
  return null;
}
function I(e2) {
  for (var t2 = m(e2), n2 = P(e2); n2 && j(n2) && A(n2).position === `static`; ) n2 = P(n2);
  return n2 && (p(n2) === `html` || p(n2) === `body` && A(n2).position === `static`) ? t2 : n2 || F(e2) || t2;
}
function L(e2) {
  return [`top`, `bottom`].indexOf(e2) >= 0 ? `x` : `y`;
}
function R(e2, t2, n2) {
  return S(e2, C(t2, n2));
}
function z(e2, t2, n2) {
  var r2 = R(e2, t2, n2);
  return r2 > n2 ? n2 : r2;
}
function ee() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function B(e2) {
  return Object.assign({}, ee(), e2);
}
function V(e2, t2) {
  return t2.reduce(function(t3, n2) {
    return t3[n2] = e2, t3;
  }, {});
}
var H = function(e2, t2) {
  return e2 = typeof e2 == `function` ? e2(Object.assign({}, t2.rects, { placement: t2.placement })) : e2, B(typeof e2 == `number` ? V(e2, i) : e2);
};
function U(r2) {
  var i2, a2 = r2.state, o2 = r2.name, s2 = r2.options, c2 = a2.elements.arrow, l2 = a2.modifiersData.popperOffsets, u2 = x(a2.placement), d2 = L(u2), f2 = [`left`, `right`].indexOf(u2) >= 0 ? `height` : `width`;
  if (!(!c2 || !l2)) {
    var p2 = H(s2.padding, a2), m2 = O(c2), h2 = d2 === `y` ? `top` : n, g2 = d2 === `y` ? e : t, _2 = a2.rects.reference[f2] + a2.rects.reference[d2] - l2[d2] - a2.rects.popper[f2], v2 = l2[d2] - a2.rects.reference[d2], y2 = I(c2), b2 = y2 ? d2 === `y` ? y2.clientHeight || 0 : y2.clientWidth || 0 : 0, S2 = _2 / 2 - v2 / 2, C2 = p2[h2], w2 = b2 - m2[f2] - p2[g2], T2 = b2 / 2 - m2[f2] / 2 + S2, E2 = R(C2, T2, w2), D2 = d2;
    a2.modifiersData[o2] = (i2 = {}, i2[D2] = E2, i2.centerOffset = E2 - T2, i2);
  }
}
function W(e2) {
  var t2 = e2.state, n2 = e2.options.element, r2 = n2 === void 0 ? `[data-popper-arrow]` : n2;
  r2 != null && (typeof r2 == `string` && (r2 = t2.elements.popper.querySelector(r2), !r2) || k(t2.elements.popper, r2) && (t2.elements.arrow = r2));
}
var te = { name: `arrow`, enabled: true, phase: `main`, fn: U, effect: W, requires: [`popperOffsets`], requiresIfExists: [`preventOverflow`] };
function G(e2) {
  return e2.split(`-`)[1];
}
var ne = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function re(e2, t2) {
  var n2 = e2.x, r2 = e2.y, i2 = t2.devicePixelRatio || 1;
  return { x: w(n2 * i2) / i2 || 0, y: w(r2 * i2) / i2 || 0 };
}
function ie(r2) {
  var i2, a2 = r2.popper, o2 = r2.popperRect, s2 = r2.placement, c2 = r2.variation, l2 = r2.offsets, u2 = r2.position, d2 = r2.gpuAcceleration, f2 = r2.adaptive, p2 = r2.roundOffsets, h2 = r2.isFixed, g2 = l2.x, _2 = g2 === void 0 ? 0 : g2, v2 = l2.y, y2 = v2 === void 0 ? 0 : v2, b2 = typeof p2 == `function` ? p2({ x: _2, y: y2 }) : { x: _2, y: y2 };
  _2 = b2.x, y2 = b2.y;
  var x2 = l2.hasOwnProperty(`x`), S2 = l2.hasOwnProperty(`y`), C2 = n, w2 = `top`, T2 = window;
  if (f2) {
    var E2 = I(a2), D2 = `clientHeight`, O2 = `clientWidth`;
    if (E2 === m(a2) && (E2 = M(a2), A(E2).position !== `static` && u2 === `absolute` && (D2 = `scrollHeight`, O2 = `scrollWidth`)), E2 = E2, s2 === `top` || (s2 === `left` || s2 === `right`) && c2 === `end`) {
      w2 = e;
      var k2 = h2 && E2 === T2 && T2.visualViewport ? T2.visualViewport.height : E2[D2];
      y2 -= k2 - o2.height, y2 *= d2 ? 1 : -1;
    }
    if (s2 === `left` || (s2 === `top` || s2 === `bottom`) && c2 === `end`) {
      C2 = t;
      var j2 = h2 && E2 === T2 && T2.visualViewport ? T2.visualViewport.width : E2[O2];
      _2 -= j2 - o2.width, _2 *= d2 ? 1 : -1;
    }
  }
  var N2 = Object.assign({ position: u2 }, f2 && ne), P2 = p2 === true ? re({ x: _2, y: y2 }, m(a2)) : { x: _2, y: y2 };
  if (_2 = P2.x, y2 = P2.y, d2) {
    var F2;
    return Object.assign({}, N2, (F2 = {}, F2[w2] = S2 ? `0` : ``, F2[C2] = x2 ? `0` : ``, F2.transform = (T2.devicePixelRatio || 1) <= 1 ? `translate(` + _2 + `px, ` + y2 + `px)` : `translate3d(` + _2 + `px, ` + y2 + `px, 0)`, F2));
  }
  return Object.assign({}, N2, (i2 = {}, i2[w2] = S2 ? y2 + `px` : ``, i2[C2] = x2 ? _2 + `px` : ``, i2.transform = ``, i2));
}
function ae(e2) {
  var t2 = e2.state, n2 = e2.options, r2 = n2.gpuAcceleration, i2 = r2 === void 0 ? true : r2, a2 = n2.adaptive, o2 = a2 === void 0 ? true : a2, s2 = n2.roundOffsets, c2 = s2 === void 0 ? true : s2, l2 = { placement: x(t2.placement), variation: G(t2.placement), popper: t2.elements.popper, popperRect: t2.rects.popper, gpuAcceleration: i2, isFixed: t2.options.strategy === `fixed` };
  t2.modifiersData.popperOffsets != null && (t2.styles.popper = Object.assign({}, t2.styles.popper, ie(Object.assign({}, l2, { offsets: t2.modifiersData.popperOffsets, position: t2.options.strategy, adaptive: o2, roundOffsets: c2 })))), t2.modifiersData.arrow != null && (t2.styles.arrow = Object.assign({}, t2.styles.arrow, ie(Object.assign({}, l2, { offsets: t2.modifiersData.arrow, position: `absolute`, adaptive: false, roundOffsets: c2 })))), t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-placement": t2.placement });
}
var oe = { name: `computeStyles`, enabled: true, phase: `beforeWrite`, fn: ae, data: {} }, K = { passive: true };
function se(e2) {
  var t2 = e2.state, n2 = e2.instance, r2 = e2.options, i2 = r2.scroll, a2 = i2 === void 0 ? true : i2, o2 = r2.resize, s2 = o2 === void 0 ? true : o2, c2 = m(t2.elements.popper), l2 = [].concat(t2.scrollParents.reference, t2.scrollParents.popper);
  return a2 && l2.forEach(function(e3) {
    e3.addEventListener(`scroll`, n2.update, K);
  }), s2 && c2.addEventListener(`resize`, n2.update, K), function() {
    a2 && l2.forEach(function(e3) {
      e3.removeEventListener(`scroll`, n2.update, K);
    }), s2 && c2.removeEventListener(`resize`, n2.update, K);
  };
}
var ce = { name: `eventListeners`, enabled: true, phase: `write`, fn: function() {
}, effect: se, data: {} }, q = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function J(e2) {
  return e2.replace(/left|right|bottom|top/g, function(e3) {
    return q[e3];
  });
}
var le = { start: `end`, end: `start` };
function ue(e2) {
  return e2.replace(/start|end/g, function(e3) {
    return le[e3];
  });
}
function de(e2) {
  var t2 = m(e2);
  return { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function fe(e2) {
  return D(M(e2)).left + de(e2).scrollLeft;
}
function pe(e2, t2) {
  var n2 = m(e2), r2 = M(e2), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    var l2 = E();
    (l2 || !l2 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  return { width: a2, height: o2, x: s2 + fe(e2), y: c2 };
}
function me(e2) {
  var t2 = M(e2), n2 = de(e2), r2 = e2.ownerDocument?.body, i2 = S(t2.scrollWidth, t2.clientWidth, r2 ? r2.scrollWidth : 0, r2 ? r2.clientWidth : 0), a2 = S(t2.scrollHeight, t2.clientHeight, r2 ? r2.scrollHeight : 0, r2 ? r2.clientHeight : 0), o2 = -n2.scrollLeft + fe(e2), s2 = -n2.scrollTop;
  return A(r2 || t2).direction === `rtl` && (o2 += S(t2.clientWidth, r2 ? r2.clientWidth : 0) - i2), { width: i2, height: a2, x: o2, y: s2 };
}
function he(e2) {
  var t2 = A(e2), n2 = t2.overflow, r2 = t2.overflowX, i2 = t2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + i2 + r2);
}
function ge(e2) {
  return [`html`, `body`, `#document`].indexOf(p(e2)) >= 0 ? e2.ownerDocument.body : g(e2) && he(e2) ? e2 : ge(N(e2));
}
function Y(e2, t2) {
  t2 === void 0 && (t2 = []);
  var n2 = ge(e2), r2 = n2 === e2.ownerDocument?.body, i2 = m(n2), a2 = r2 ? [i2].concat(i2.visualViewport || [], he(n2) ? n2 : []) : n2, o2 = t2.concat(a2);
  return r2 ? o2 : o2.concat(Y(N(a2)));
}
function X(e2) {
  return Object.assign({}, e2, { left: e2.x, top: e2.y, right: e2.x + e2.width, bottom: e2.y + e2.height });
}
function _e(e2, t2) {
  var n2 = D(e2, false, t2 === `fixed`);
  return n2.top += e2.clientTop, n2.left += e2.clientLeft, n2.bottom = n2.top + e2.clientHeight, n2.right = n2.left + e2.clientWidth, n2.width = e2.clientWidth, n2.height = e2.clientHeight, n2.x = n2.left, n2.y = n2.top, n2;
}
function ve(e2, t2, n2) {
  return t2 === `viewport` ? X(pe(e2, n2)) : h(t2) ? _e(t2, n2) : X(me(M(e2)));
}
function ye(e2) {
  var t2 = Y(N(e2)), n2 = [`absolute`, `fixed`].indexOf(A(e2).position) >= 0 && g(e2) ? I(e2) : e2;
  return h(n2) ? t2.filter(function(e3) {
    return h(e3) && k(e3, n2) && p(e3) !== `body`;
  }) : [];
}
function be(e2, t2, n2, r2) {
  var i2 = t2 === `clippingParents` ? ye(e2) : [].concat(t2), a2 = [].concat(i2, [n2]), o2 = a2[0], s2 = a2.reduce(function(t3, n3) {
    var i3 = ve(e2, n3, r2);
    return t3.top = S(i3.top, t3.top), t3.right = C(i3.right, t3.right), t3.bottom = C(i3.bottom, t3.bottom), t3.left = S(i3.left, t3.left), t3;
  }, ve(e2, o2, r2));
  return s2.width = s2.right - s2.left, s2.height = s2.bottom - s2.top, s2.x = s2.left, s2.y = s2.top, s2;
}
function xe(r2) {
  var i2 = r2.reference, o2 = r2.element, s2 = r2.placement, c2 = s2 ? x(s2) : null, l2 = s2 ? G(s2) : null, u2 = i2.x + i2.width / 2 - o2.width / 2, d2 = i2.y + i2.height / 2 - o2.height / 2, f2;
  switch (c2) {
    case `top`:
      f2 = { x: u2, y: i2.y - o2.height };
      break;
    case e:
      f2 = { x: u2, y: i2.y + i2.height };
      break;
    case t:
      f2 = { x: i2.x + i2.width, y: d2 };
      break;
    case n:
      f2 = { x: i2.x - o2.width, y: d2 };
      break;
    default:
      f2 = { x: i2.x, y: i2.y };
  }
  var p2 = c2 ? L(c2) : null;
  if (p2 != null) {
    var m2 = p2 === `y` ? `height` : `width`;
    switch (l2) {
      case a:
        f2[p2] = f2[p2] - (i2[m2] / 2 - o2[m2] / 2);
        break;
      case `end`:
        f2[p2] = f2[p2] + (i2[m2] / 2 - o2[m2] / 2);
        break;
      default:
    }
  }
  return f2;
}
function Se(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, a2 = r2 === void 0 ? e2.placement : r2, u2 = n2.strategy, d2 = u2 === void 0 ? e2.strategy : u2, f2 = n2.boundary, p2 = f2 === void 0 ? o : f2, m2 = n2.rootBoundary, g2 = m2 === void 0 ? s : m2, _2 = n2.elementContext, v2 = _2 === void 0 ? c : _2, y2 = n2.altBoundary, b2 = y2 === void 0 ? false : y2, x2 = n2.padding, S2 = x2 === void 0 ? 0 : x2, C2 = B(typeof S2 == `number` ? V(S2, i) : S2), w2 = v2 === `popper` ? l : c, T2 = e2.rects.popper, E2 = e2.elements[b2 ? w2 : v2], O2 = be(h(E2) ? E2 : E2.contextElement || M(e2.elements.popper), p2, g2, d2), k2 = D(e2.elements.reference), A2 = xe({ reference: k2, element: T2, strategy: `absolute`, placement: a2 }), j2 = X(Object.assign({}, T2, A2)), N2 = v2 === `popper` ? j2 : k2, P2 = { top: O2.top - N2.top + C2.top, bottom: N2.bottom - O2.bottom + C2.bottom, left: O2.left - N2.left + C2.left, right: N2.right - O2.right + C2.right }, F2 = e2.modifiersData.offset;
  if (v2 === `popper` && F2) {
    var I2 = F2[a2];
    Object.keys(P2).forEach(function(e3) {
      var t3 = [`right`, `bottom`].indexOf(e3) >= 0 ? 1 : -1, n3 = [`top`, `bottom`].indexOf(e3) >= 0 ? `y` : `x`;
      P2[e3] += I2[n3] * t3;
    });
  }
  return P2;
}
function Ce(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, a2 = n2.boundary, o2 = n2.rootBoundary, s2 = n2.padding, c2 = n2.flipVariations, l2 = n2.allowedAutoPlacements, f2 = l2 === void 0 ? d : l2, p2 = G(r2), m2 = p2 ? c2 ? u : u.filter(function(e3) {
    return G(e3) === p2;
  }) : i, h2 = m2.filter(function(e3) {
    return f2.indexOf(e3) >= 0;
  });
  h2.length === 0 && (h2 = m2);
  var g2 = h2.reduce(function(t3, n3) {
    return t3[n3] = Se(e2, { placement: n3, boundary: a2, rootBoundary: o2, padding: s2 })[x(n3)], t3;
  }, {});
  return Object.keys(g2).sort(function(e3, t3) {
    return g2[e3] - g2[t3];
  });
}
function we(e2) {
  if (x(e2) === `auto`) return [];
  var t2 = J(e2);
  return [ue(e2), t2, ue(t2)];
}
function Te(r2) {
  var i2 = r2.state, o2 = r2.options, s2 = r2.name;
  if (!i2.modifiersData[s2]._skip) {
    for (var c2 = o2.mainAxis, l2 = c2 === void 0 ? true : c2, u2 = o2.altAxis, d2 = u2 === void 0 ? true : u2, f2 = o2.fallbackPlacements, p2 = o2.padding, m2 = o2.boundary, h2 = o2.rootBoundary, g2 = o2.altBoundary, _2 = o2.flipVariations, v2 = _2 === void 0 ? true : _2, y2 = o2.allowedAutoPlacements, b2 = i2.options.placement, S2 = x(b2) === b2, C2 = f2 || (S2 || !v2 ? [J(b2)] : we(b2)), w2 = [b2].concat(C2).reduce(function(e2, t2) {
      return e2.concat(x(t2) === `auto` ? Ce(i2, { placement: t2, boundary: m2, rootBoundary: h2, padding: p2, flipVariations: v2, allowedAutoPlacements: y2 }) : t2);
    }, []), T2 = i2.rects.reference, E2 = i2.rects.popper, D2 = /* @__PURE__ */ new Map(), O2 = true, k2 = w2[0], A2 = 0; A2 < w2.length; A2++) {
      var j2 = w2[A2], M2 = x(j2), N2 = G(j2) === a, P2 = [`top`, e].indexOf(M2) >= 0, F2 = P2 ? `width` : `height`, I2 = Se(i2, { placement: j2, boundary: m2, rootBoundary: h2, altBoundary: g2, padding: p2 }), L2 = P2 ? N2 ? t : n : N2 ? e : `top`;
      T2[F2] > E2[F2] && (L2 = J(L2));
      var R2 = J(L2), z2 = [];
      if (l2 && z2.push(I2[M2] <= 0), d2 && z2.push(I2[L2] <= 0, I2[R2] <= 0), z2.every(function(e2) {
        return e2;
      })) {
        k2 = j2, O2 = false;
        break;
      }
      D2.set(j2, z2);
    }
    if (O2) for (var ee2 = v2 ? 3 : 1, B2 = function(e2) {
      var t2 = w2.find(function(t3) {
        var n2 = D2.get(t3);
        if (n2) return n2.slice(0, e2).every(function(e3) {
          return e3;
        });
      });
      if (t2) return k2 = t2, `break`;
    }, V2 = ee2; V2 > 0 && B2(V2) !== `break`; V2--) ;
    i2.placement !== k2 && (i2.modifiersData[s2]._skip = true, i2.placement = k2, i2.reset = true);
  }
}
var Ee = { name: `flip`, enabled: true, phase: `main`, fn: Te, requiresIfExists: [`offset`], data: { _skip: false } };
function De(e2, t2, n2) {
  return n2 === void 0 && (n2 = { x: 0, y: 0 }), { top: e2.top - t2.height - n2.y, right: e2.right - t2.width + n2.x, bottom: e2.bottom - t2.height + n2.y, left: e2.left - t2.width - n2.x };
}
function Oe(r2) {
  return [`top`, t, e, n].some(function(e2) {
    return r2[e2] >= 0;
  });
}
function ke(e2) {
  var t2 = e2.state, n2 = e2.name, r2 = t2.rects.reference, i2 = t2.rects.popper, a2 = t2.modifiersData.preventOverflow, o2 = Se(t2, { elementContext: `reference` }), s2 = Se(t2, { altBoundary: true }), c2 = De(o2, r2), l2 = De(s2, i2, a2), u2 = Oe(c2), d2 = Oe(l2);
  t2.modifiersData[n2] = { referenceClippingOffsets: c2, popperEscapeOffsets: l2, isReferenceHidden: u2, hasPopperEscaped: d2 }, t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-reference-hidden": u2, "data-popper-escaped": d2 });
}
var Ae = { name: `hide`, enabled: true, phase: `main`, requiresIfExists: [`preventOverflow`], fn: ke };
function je(e2, t2, n2) {
  var r2 = x(e2), i2 = [`left`, `top`].indexOf(r2) >= 0 ? -1 : 1, a2 = typeof n2 == `function` ? n2(Object.assign({}, t2, { placement: e2 })) : n2, o2 = a2[0], s2 = a2[1];
  return o2 || (o2 = 0), s2 = (s2 || 0) * i2, [`left`, `right`].indexOf(r2) >= 0 ? { x: s2, y: o2 } : { x: o2, y: s2 };
}
function Me(e2) {
  var t2 = e2.state, n2 = e2.options, r2 = e2.name, i2 = n2.offset, a2 = i2 === void 0 ? [0, 0] : i2, o2 = d.reduce(function(e3, n3) {
    return e3[n3] = je(n3, t2.rects, a2), e3;
  }, {}), s2 = o2[t2.placement], c2 = s2.x, l2 = s2.y;
  t2.modifiersData.popperOffsets != null && (t2.modifiersData.popperOffsets.x += c2, t2.modifiersData.popperOffsets.y += l2), t2.modifiersData[r2] = o2;
}
var Ne = { name: `offset`, enabled: true, phase: `main`, requires: [`popperOffsets`], fn: Me };
function Pe(e2) {
  var t2 = e2.state, n2 = e2.name;
  t2.modifiersData[n2] = xe({ reference: t2.rects.reference, element: t2.rects.popper, strategy: `absolute`, placement: t2.placement });
}
var Fe = { name: `popperOffsets`, enabled: true, phase: `read`, fn: Pe, data: {} };
function Ie(e2) {
  return e2 === `x` ? `y` : `x`;
}
function Le(r2) {
  var i2 = r2.state, a2 = r2.options, o2 = r2.name, s2 = a2.mainAxis, c2 = s2 === void 0 ? true : s2, l2 = a2.altAxis, u2 = l2 === void 0 ? false : l2, d2 = a2.boundary, f2 = a2.rootBoundary, p2 = a2.altBoundary, m2 = a2.padding, h2 = a2.tether, g2 = h2 === void 0 ? true : h2, _2 = a2.tetherOffset, v2 = _2 === void 0 ? 0 : _2, y2 = Se(i2, { boundary: d2, rootBoundary: f2, padding: m2, altBoundary: p2 }), b2 = x(i2.placement), w2 = G(i2.placement), T2 = !w2, E2 = L(b2), D2 = Ie(E2), k2 = i2.modifiersData.popperOffsets, A2 = i2.rects.reference, j2 = i2.rects.popper, M2 = typeof v2 == `function` ? v2(Object.assign({}, i2.rects, { placement: i2.placement })) : v2, N2 = typeof M2 == `number` ? { mainAxis: M2, altAxis: M2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, M2), P2 = i2.modifiersData.offset ? i2.modifiersData.offset[i2.placement] : null, F2 = { x: 0, y: 0 };
  if (k2) {
    if (c2) {
      var B2 = E2 === `y` ? `top` : n, V2 = E2 === `y` ? e : t, H2 = E2 === `y` ? `height` : `width`, U2 = k2[E2], W2 = U2 + y2[B2], te2 = U2 - y2[V2], ne2 = g2 ? -j2[H2] / 2 : 0, re2 = w2 === `start` ? A2[H2] : j2[H2], ie2 = w2 === `start` ? -j2[H2] : -A2[H2], ae2 = i2.elements.arrow, oe2 = g2 && ae2 ? O(ae2) : { width: 0, height: 0 }, K2 = i2.modifiersData[`arrow#persistent`] ? i2.modifiersData[`arrow#persistent`].padding : ee(), se2 = K2[B2], ce2 = K2[V2], q2 = R(0, A2[H2], oe2[H2]), J2 = T2 ? A2[H2] / 2 - ne2 - q2 - se2 - N2.mainAxis : re2 - q2 - se2 - N2.mainAxis, le2 = T2 ? -A2[H2] / 2 + ne2 + q2 + ce2 + N2.mainAxis : ie2 + q2 + ce2 + N2.mainAxis, ue2 = i2.elements.arrow && I(i2.elements.arrow), de2 = ue2 ? E2 === `y` ? ue2.clientTop || 0 : ue2.clientLeft || 0 : 0, fe2 = P2?.[E2] ?? 0, pe2 = U2 + J2 - fe2 - de2, me2 = U2 + le2 - fe2, he2 = R(g2 ? C(W2, pe2) : W2, U2, g2 ? S(te2, me2) : te2);
      k2[E2] = he2, F2[E2] = he2 - U2;
    }
    if (u2) {
      var ge2 = E2 === `x` ? `top` : n, Y2 = E2 === `x` ? e : t, X2 = k2[D2], _e2 = D2 === `y` ? `height` : `width`, ve2 = X2 + y2[ge2], ye2 = X2 - y2[Y2], be2 = [`top`, n].indexOf(b2) !== -1, xe2 = P2?.[D2] ?? 0, Ce2 = be2 ? ve2 : X2 - A2[_e2] - j2[_e2] - xe2 + N2.altAxis, we2 = be2 ? X2 + A2[_e2] + j2[_e2] - xe2 - N2.altAxis : ye2, Te2 = g2 && be2 ? z(Ce2, X2, we2) : R(g2 ? Ce2 : ve2, X2, g2 ? we2 : ye2);
      k2[D2] = Te2, F2[D2] = Te2 - X2;
    }
    i2.modifiersData[o2] = F2;
  }
}
var Re = { name: `preventOverflow`, enabled: true, phase: `main`, fn: Le, requiresIfExists: [`offset`] };
function ze(e2) {
  return { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop };
}
function Be(e2) {
  return e2 === m(e2) || !g(e2) ? de(e2) : ze(e2);
}
function Ve(e2) {
  var t2 = e2.getBoundingClientRect(), n2 = w(t2.width) / e2.offsetWidth || 1, r2 = w(t2.height) / e2.offsetHeight || 1;
  return n2 !== 1 || r2 !== 1;
}
function He(e2, t2, n2) {
  n2 === void 0 && (n2 = false);
  var r2 = g(t2), i2 = g(t2) && Ve(t2), a2 = M(t2), o2 = D(e2, i2, n2), s2 = { scrollLeft: 0, scrollTop: 0 }, c2 = { x: 0, y: 0 };
  return (r2 || !r2 && !n2) && ((p(t2) !== `body` || he(a2)) && (s2 = Be(t2)), g(t2) ? (c2 = D(t2, true), c2.x += t2.clientLeft, c2.y += t2.clientTop) : a2 && (c2.x = fe(a2))), { x: o2.left + s2.scrollLeft - c2.x, y: o2.top + s2.scrollTop - c2.y, width: o2.width, height: o2.height };
}
function Ue(e2) {
  var t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), r2 = [];
  e2.forEach(function(e3) {
    t2.set(e3.name, e3);
  });
  function i2(e3) {
    n2.add(e3.name), [].concat(e3.requires || [], e3.requiresIfExists || []).forEach(function(e4) {
      if (!n2.has(e4)) {
        var r3 = t2.get(e4);
        r3 && i2(r3);
      }
    }), r2.push(e3);
  }
  return e2.forEach(function(e3) {
    n2.has(e3.name) || i2(e3);
  }), r2;
}
function We(e2) {
  var t2 = Ue(e2);
  return f.reduce(function(e3, n2) {
    return e3.concat(t2.filter(function(e4) {
      return e4.phase === n2;
    }));
  }, []);
}
function Ge(e2) {
  var t2;
  return function() {
    return t2 || (t2 = new Promise(function(n2) {
      Promise.resolve().then(function() {
        t2 = void 0, n2(e2());
      });
    })), t2;
  };
}
function Ke(e2) {
  var t2 = e2.reduce(function(e3, t3) {
    var n2 = e3[t3.name];
    return e3[t3.name] = n2 ? Object.assign({}, n2, t3, { options: Object.assign({}, n2.options, t3.options), data: Object.assign({}, n2.data, t3.data) }) : t3, e3;
  }, {});
  return Object.keys(t2).map(function(e3) {
    return t2[e3];
  });
}
var qe = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function Je() {
  return ![...arguments].some(function(e2) {
    return !(e2 && typeof e2.getBoundingClientRect == `function`);
  });
}
function Ye(e2) {
  e2 === void 0 && (e2 = {});
  var t2 = e2, n2 = t2.defaultModifiers, r2 = n2 === void 0 ? [] : n2, i2 = t2.defaultOptions, a2 = i2 === void 0 ? qe : i2;
  return function(e3, t3, n3) {
    n3 === void 0 && (n3 = a2);
    var i3 = { placement: `bottom`, orderedModifiers: [], options: Object.assign({}, qe, a2), modifiersData: {}, elements: { reference: e3, popper: t3 }, attributes: {}, styles: {} }, o2 = [], s2 = false, c2 = { state: i3, setOptions: function(n4) {
      var o3 = typeof n4 == `function` ? n4(i3.options) : n4;
      u2(), i3.options = Object.assign({}, a2, i3.options, o3), i3.scrollParents = { reference: h(e3) ? Y(e3) : e3.contextElement ? Y(e3.contextElement) : [], popper: Y(t3) };
      var s3 = We(Ke([].concat(r2, i3.options.modifiers)));
      return i3.orderedModifiers = s3.filter(function(e4) {
        return e4.enabled;
      }), l2(), c2.update();
    }, forceUpdate: function() {
      if (!s2) {
        var e4 = i3.elements, t4 = e4.reference, n4 = e4.popper;
        if (Je(t4, n4)) {
          i3.rects = { reference: He(t4, I(n4), i3.options.strategy === `fixed`), popper: O(n4) }, i3.reset = false, i3.placement = i3.options.placement, i3.orderedModifiers.forEach(function(e5) {
            return i3.modifiersData[e5.name] = Object.assign({}, e5.data);
          });
          for (var r3 = 0; r3 < i3.orderedModifiers.length; r3++) {
            if (i3.reset === true) {
              i3.reset = false, r3 = -1;
              continue;
            }
            var a3 = i3.orderedModifiers[r3], o3 = a3.fn, l3 = a3.options, u3 = l3 === void 0 ? {} : l3, d2 = a3.name;
            typeof o3 == `function` && (i3 = o3({ state: i3, options: u3, name: d2, instance: c2 }) || i3);
          }
        }
      }
    }, update: Ge(function() {
      return new Promise(function(e4) {
        c2.forceUpdate(), e4(i3);
      });
    }), destroy: function() {
      u2(), s2 = true;
    } };
    if (!Je(e3, t3)) return c2;
    c2.setOptions(n3).then(function(e4) {
      !s2 && n3.onFirstUpdate && n3.onFirstUpdate(e4);
    });
    function l2() {
      i3.orderedModifiers.forEach(function(e4) {
        var t4 = e4.name, n4 = e4.options, r3 = n4 === void 0 ? {} : n4, a3 = e4.effect;
        if (typeof a3 == `function`) {
          var s3 = a3({ state: i3, name: t4, instance: c2, options: r3 });
          o2.push(s3 || function() {
          });
        }
      });
    }
    function u2() {
      o2.forEach(function(e4) {
        return e4();
      }), o2 = [];
    }
    return c2;
  };
}
var Xe = Ye({ defaultModifiers: [ce, Fe, oe, b, Ne, Ee, Re, te, Ae] }), Ze = `tippy-box`, Qe = `tippy-content`, $e = `tippy-backdrop`, et = `tippy-arrow`, tt = `tippy-svg-arrow`, Z = { passive: true, capture: true }, nt = function() {
  return document.body;
};
function rt(e2, t2, n2) {
  return Array.isArray(e2) ? e2[t2] ?? (Array.isArray(n2) ? n2[t2] : n2) : e2;
}
function it(e2, t2) {
  var n2 = {}.toString.call(e2);
  return n2.indexOf(`[object`) === 0 && n2.indexOf(t2 + `]`) > -1;
}
function at(e2, t2) {
  return typeof e2 == `function` ? e2.apply(void 0, t2) : e2;
}
function ot(e2, t2) {
  if (t2 === 0) return e2;
  var n2;
  return function(r2) {
    clearTimeout(n2), n2 = setTimeout(function() {
      e2(r2);
    }, t2);
  };
}
function st(e2) {
  return e2.split(/\s+/).filter(Boolean);
}
function ct(e2) {
  return [].concat(e2);
}
function lt(e2, t2) {
  e2.indexOf(t2) === -1 && e2.push(t2);
}
function ut(e2) {
  return e2.filter(function(t2, n2) {
    return e2.indexOf(t2) === n2;
  });
}
function dt(e2) {
  return e2.split(`-`)[0];
}
function ft(e2) {
  return [].slice.call(e2);
}
function pt(e2) {
  return Object.keys(e2).reduce(function(t2, n2) {
    return e2[n2] !== void 0 && (t2[n2] = e2[n2]), t2;
  }, {});
}
function mt() {
  return document.createElement(`div`);
}
function ht(e2) {
  return [`Element`, `Fragment`].some(function(t2) {
    return it(e2, t2);
  });
}
function gt(e2) {
  return it(e2, `NodeList`);
}
function _t(e2) {
  return it(e2, `MouseEvent`);
}
function vt(e2) {
  return !!(e2 && e2._tippy && e2._tippy.reference === e2);
}
function yt(e2) {
  return ht(e2) ? [e2] : gt(e2) ? ft(e2) : Array.isArray(e2) ? e2 : ft(document.querySelectorAll(e2));
}
function bt(e2, t2) {
  e2.forEach(function(e3) {
    e3 && (e3.style.transitionDuration = t2 + `ms`);
  });
}
function xt(e2, t2) {
  e2.forEach(function(e3) {
    e3 && e3.setAttribute(`data-state`, t2);
  });
}
function St(e2) {
  var t2, n2 = ct(e2)[0];
  return n2 != null && (t2 = n2.ownerDocument) != null && t2.body ? n2.ownerDocument : document;
}
function Ct(e2, t2) {
  var n2 = t2.clientX, r2 = t2.clientY;
  return e2.every(function(e3) {
    var t3 = e3.popperRect, i2 = e3.popperState, a2 = e3.props.interactiveBorder, o2 = dt(i2.placement), s2 = i2.modifiersData.offset;
    if (!s2) return true;
    var c2 = o2 === `bottom` ? s2.top.y : 0, l2 = o2 === `top` ? s2.bottom.y : 0, u2 = o2 === `right` ? s2.left.x : 0, d2 = o2 === `left` ? s2.right.x : 0, f2 = t3.top - r2 + c2 > a2, p2 = r2 - t3.bottom - l2 > a2, m2 = t3.left - n2 + u2 > a2, h2 = n2 - t3.right - d2 > a2;
    return f2 || p2 || m2 || h2;
  });
}
function wt(e2, t2, n2) {
  var r2 = t2 + `EventListener`;
  [`transitionend`, `webkitTransitionEnd`].forEach(function(t3) {
    e2[r2](t3, n2);
  });
}
function Tt(e2, t2) {
  for (var n2 = t2; n2; ) {
    if (e2.contains(n2)) return true;
    n2 = n2.getRootNode == null ? void 0 : n2.getRootNode()?.host;
  }
  return false;
}
var Q = { isTouch: false }, Et = 0;
function Dt() {
  Q.isTouch || (Q.isTouch = true, window.performance && document.addEventListener(`mousemove`, Ot));
}
function Ot() {
  var e2 = performance.now();
  e2 - Et < 20 && (Q.isTouch = false, document.removeEventListener(`mousemove`, Ot)), Et = e2;
}
function kt() {
  var e2 = document.activeElement;
  if (vt(e2)) {
    var t2 = e2._tippy;
    e2.blur && !t2.state.isVisible && e2.blur();
  }
}
function At() {
  document.addEventListener(`touchstart`, Dt, Z), window.addEventListener(`blur`, kt);
}
var jt = typeof window < `u` && typeof document < `u` ? !!window.msCrypto : false, $ = Object.assign({ appendTo: nt, aria: { content: `auto`, expanded: `auto` }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: ``, offset: [0, 10], onAfterUpdate: function() {
}, onBeforeUpdate: function() {
}, onCreate: function() {
}, onDestroy: function() {
}, onHidden: function() {
}, onHide: function() {
}, onMount: function() {
}, onShow: function() {
}, onShown: function() {
}, onTrigger: function() {
}, onUntrigger: function() {
}, onClickOutside: function() {
}, placement: `top`, plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: `mouseenter focus`, triggerTarget: null }, { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false }, { allowHTML: false, animation: `fade`, arrow: true, content: ``, inertia: false, maxWidth: 350, role: `tooltip`, theme: ``, zIndex: 9999 }), Mt = Object.keys($), Nt = function(e2) {
  Object.keys(e2).forEach(function(t2) {
    $[t2] = e2[t2];
  });
};
function Pt(e2) {
  var t2 = (e2.plugins || []).reduce(function(t3, n2) {
    var r2 = n2.name, i2 = n2.defaultValue;
    return r2 && (t3[r2] = e2[r2] === void 0 ? $[r2] ?? i2 : e2[r2]), t3;
  }, {});
  return Object.assign({}, e2, t2);
}
function Ft(e2, t2) {
  return (t2 ? Object.keys(Pt(Object.assign({}, $, { plugins: t2 }))) : Mt).reduce(function(t3, n2) {
    var r2 = (e2.getAttribute(`data-tippy-` + n2) || ``).trim();
    if (!r2) return t3;
    if (n2 === `content`) t3[n2] = r2;
    else try {
      t3[n2] = JSON.parse(r2);
    } catch {
      t3[n2] = r2;
    }
    return t3;
  }, {});
}
function It(e2, t2) {
  var n2 = Object.assign({}, t2, { content: at(t2.content, [e2]) }, t2.ignoreAttributes ? {} : Ft(e2, t2.plugins));
  return n2.aria = Object.assign({}, $.aria, n2.aria), n2.aria = { expanded: n2.aria.expanded === `auto` ? t2.interactive : n2.aria.expanded, content: n2.aria.content === `auto` ? t2.interactive ? null : `describedby` : n2.aria.content }, n2;
}
var Lt = function() {
  return `innerHTML`;
};
function Rt(e2, t2) {
  e2[Lt()] = t2;
}
function zt(e2) {
  var t2 = mt();
  return e2 === true ? t2.className = et : (t2.className = tt, ht(e2) ? t2.appendChild(e2) : Rt(t2, e2)), t2;
}
function Bt(e2, t2) {
  ht(t2.content) ? (Rt(e2, ``), e2.appendChild(t2.content)) : typeof t2.content != `function` && (t2.allowHTML ? Rt(e2, t2.content) : e2.textContent = t2.content);
}
function Vt(e2) {
  var t2 = e2.firstElementChild, n2 = ft(t2.children);
  return { box: t2, content: n2.find(function(e3) {
    return e3.classList.contains(Qe);
  }), arrow: n2.find(function(e3) {
    return e3.classList.contains(et) || e3.classList.contains(tt);
  }), backdrop: n2.find(function(e3) {
    return e3.classList.contains($e);
  }) };
}
function Ht(e2) {
  var t2 = mt(), n2 = mt();
  n2.className = Ze, n2.setAttribute(`data-state`, `hidden`), n2.setAttribute(`tabindex`, `-1`);
  var r2 = mt();
  r2.className = Qe, r2.setAttribute(`data-state`, `hidden`), Bt(r2, e2.props), t2.appendChild(n2), n2.appendChild(r2), i2(e2.props, e2.props);
  function i2(n3, r3) {
    var i3 = Vt(t2), a2 = i3.box, o2 = i3.content, s2 = i3.arrow;
    r3.theme ? a2.setAttribute(`data-theme`, r3.theme) : a2.removeAttribute(`data-theme`), typeof r3.animation == `string` ? a2.setAttribute(`data-animation`, r3.animation) : a2.removeAttribute(`data-animation`), r3.inertia ? a2.setAttribute(`data-inertia`, ``) : a2.removeAttribute(`data-inertia`), a2.style.maxWidth = typeof r3.maxWidth == `number` ? r3.maxWidth + `px` : r3.maxWidth, r3.role ? a2.setAttribute(`role`, r3.role) : a2.removeAttribute(`role`), (n3.content !== r3.content || n3.allowHTML !== r3.allowHTML) && Bt(o2, e2.props), r3.arrow ? s2 ? n3.arrow !== r3.arrow && (a2.removeChild(s2), a2.appendChild(zt(r3.arrow))) : a2.appendChild(zt(r3.arrow)) : s2 && a2.removeChild(s2);
  }
  return { popper: t2, onUpdate: i2 };
}
Ht.$$tippy = true;
var Ut = 1, Wt = [], Gt = [];
function Kt(e2, t2) {
  var n2 = It(e2, Object.assign({}, $, Pt(pt(t2)))), r2, i2, a2, o2 = false, s2 = false, c2 = false, l2 = false, u2, d2, f2, p2 = [], m2 = ot(re2, n2.interactiveDebounce), h2, g2 = Ut++, _2 = null, v2 = ut(n2.plugins), y2 = { id: g2, reference: e2, popper: mt(), popperInstance: _2, props: n2, state: { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, plugins: v2, clearDelayTimeouts: fe2, setProps: pe2, setContent: me2, show: he2, hide: ge2, hideWithInteractivity: Y2, enable: ue2, disable: de2, unmount: X2, destroy: _e2 };
  if (!n2.render) return y2;
  var b2 = n2.render(y2), x2 = b2.popper, S2 = b2.onUpdate;
  x2.setAttribute(`data-tippy-root`, ``), x2.id = `tippy-` + y2.id, y2.popper = x2, e2._tippy = y2, x2._tippy = y2;
  var C2 = v2.map(function(e3) {
    return e3.fn(y2);
  }), w2 = e2.hasAttribute(`aria-expanded`);
  return te2(), F2(), M2(), N2(`onCreate`, [y2]), n2.showOnCreate && J2(), x2.addEventListener(`mouseenter`, function() {
    y2.props.interactive && y2.state.isVisible && y2.clearDelayTimeouts();
  }), x2.addEventListener(`mouseleave`, function() {
    y2.props.interactive && y2.props.trigger.indexOf(`mouseenter`) >= 0 && k2().addEventListener(`mousemove`, m2);
  }), y2;
  function T2() {
    var e3 = y2.props.touch;
    return Array.isArray(e3) ? e3 : [e3, 0];
  }
  function E2() {
    return T2()[0] === `hold`;
  }
  function D2() {
    var e3;
    return !!((e3 = y2.props.render) != null && e3.$$tippy);
  }
  function O2() {
    return h2 || e2;
  }
  function k2() {
    var e3 = O2().parentNode;
    return e3 ? St(e3) : document;
  }
  function A2() {
    return Vt(x2);
  }
  function j2(e3) {
    return y2.state.isMounted && !y2.state.isVisible || Q.isTouch || u2 && u2.type === `focus` ? 0 : rt(y2.props.delay, +!e3, $.delay);
  }
  function M2(e3) {
    e3 === void 0 && (e3 = false), x2.style.pointerEvents = y2.props.interactive && !e3 ? `` : `none`, x2.style.zIndex = `` + y2.props.zIndex;
  }
  function N2(e3, t3, n3) {
    if (n3 === void 0 && (n3 = true), C2.forEach(function(n4) {
      n4[e3] && n4[e3].apply(n4, t3);
    }), n3) {
      var r3;
      (r3 = y2.props)[e3].apply(r3, t3);
    }
  }
  function P2() {
    var t3 = y2.props.aria;
    if (t3.content) {
      var n3 = `aria-` + t3.content, r3 = x2.id;
      ct(y2.props.triggerTarget || e2).forEach(function(e3) {
        var t4 = e3.getAttribute(n3);
        if (y2.state.isVisible) e3.setAttribute(n3, t4 ? t4 + ` ` + r3 : r3);
        else {
          var i3 = t4 && t4.replace(r3, ``).trim();
          i3 ? e3.setAttribute(n3, i3) : e3.removeAttribute(n3);
        }
      });
    }
  }
  function F2() {
    w2 || !y2.props.aria.expanded || ct(y2.props.triggerTarget || e2).forEach(function(e3) {
      y2.props.interactive ? e3.setAttribute(`aria-expanded`, y2.state.isVisible && e3 === O2() ? `true` : `false`) : e3.removeAttribute(`aria-expanded`);
    });
  }
  function I2() {
    k2().removeEventListener(`mousemove`, m2), Wt = Wt.filter(function(e3) {
      return e3 !== m2;
    });
  }
  function L2(t3) {
    if (!(Q.isTouch && (c2 || t3.type === `mousedown`))) {
      var n3 = t3.composedPath && t3.composedPath()[0] || t3.target;
      if (!(y2.props.interactive && Tt(x2, n3))) {
        if (ct(y2.props.triggerTarget || e2).some(function(e3) {
          return Tt(e3, n3);
        })) {
          if (Q.isTouch || y2.state.isVisible && y2.props.trigger.indexOf(`click`) >= 0) return;
        } else N2(`onClickOutside`, [y2, t3]);
        y2.props.hideOnClick === true && (y2.clearDelayTimeouts(), y2.hide(), s2 = true, setTimeout(function() {
          s2 = false;
        }), y2.state.isMounted || B2());
      }
    }
  }
  function R2() {
    c2 = true;
  }
  function z2() {
    c2 = false;
  }
  function ee2() {
    var e3 = k2();
    e3.addEventListener(`mousedown`, L2, true), e3.addEventListener(`touchend`, L2, Z), e3.addEventListener(`touchstart`, z2, Z), e3.addEventListener(`touchmove`, R2, Z);
  }
  function B2() {
    var e3 = k2();
    e3.removeEventListener(`mousedown`, L2, true), e3.removeEventListener(`touchend`, L2, Z), e3.removeEventListener(`touchstart`, z2, Z), e3.removeEventListener(`touchmove`, R2, Z);
  }
  function V2(e3, t3) {
    U2(e3, function() {
      !y2.state.isVisible && x2.parentNode && x2.parentNode.contains(x2) && t3();
    });
  }
  function H2(e3, t3) {
    U2(e3, t3);
  }
  function U2(e3, t3) {
    var n3 = A2().box;
    function r3(e4) {
      e4.target === n3 && (wt(n3, `remove`, r3), t3());
    }
    if (e3 === 0) return t3();
    wt(n3, `remove`, d2), wt(n3, `add`, r3), d2 = r3;
  }
  function W2(t3, n3, r3) {
    r3 === void 0 && (r3 = false), ct(y2.props.triggerTarget || e2).forEach(function(e3) {
      e3.addEventListener(t3, n3, r3), p2.push({ node: e3, eventType: t3, handler: n3, options: r3 });
    });
  }
  function te2() {
    E2() && (W2(`touchstart`, ne2, { passive: true }), W2(`touchend`, ie2, { passive: true })), st(y2.props.trigger).forEach(function(e3) {
      if (e3 !== `manual`) switch (W2(e3, ne2), e3) {
        case `mouseenter`:
          W2(`mouseleave`, ie2);
          break;
        case `focus`:
          W2(jt ? `focusout` : `blur`, ae2);
          break;
        case `focusin`:
          W2(`focusout`, ae2);
          break;
      }
    });
  }
  function G2() {
    p2.forEach(function(e3) {
      var t3 = e3.node, n3 = e3.eventType, r3 = e3.handler, i3 = e3.options;
      t3.removeEventListener(n3, r3, i3);
    }), p2 = [];
  }
  function ne2(e3) {
    var t3 = false;
    if (!(!y2.state.isEnabled || oe2(e3) || s2)) {
      var n3 = u2?.type === `focus`;
      u2 = e3, h2 = e3.currentTarget, F2(), !y2.state.isVisible && _t(e3) && Wt.forEach(function(t4) {
        return t4(e3);
      }), e3.type === `click` && (y2.props.trigger.indexOf(`mouseenter`) < 0 || o2) && y2.props.hideOnClick !== false && y2.state.isVisible ? t3 = true : J2(e3), e3.type === `click` && (o2 = !t3), t3 && !n3 && le2(e3);
    }
  }
  function re2(e3) {
    var t3 = e3.target, r3 = O2().contains(t3) || x2.contains(t3);
    e3.type === `mousemove` && r3 || Ct(q2().concat(x2).map(function(e4) {
      var t4 = e4._tippy.popperInstance?.state;
      return t4 ? { popperRect: e4.getBoundingClientRect(), popperState: t4, props: n2 } : null;
    }).filter(Boolean), e3) && (I2(), le2(e3));
  }
  function ie2(e3) {
    if (!(oe2(e3) || y2.props.trigger.indexOf(`click`) >= 0 && o2)) {
      if (y2.props.interactive) {
        y2.hideWithInteractivity(e3);
        return;
      }
      le2(e3);
    }
  }
  function ae2(e3) {
    y2.props.trigger.indexOf(`focusin`) < 0 && e3.target !== O2() || y2.props.interactive && e3.relatedTarget && x2.contains(e3.relatedTarget) || le2(e3);
  }
  function oe2(e3) {
    return Q.isTouch ? E2() !== e3.type.indexOf(`touch`) >= 0 : false;
  }
  function K2() {
    se2();
    var t3 = y2.props, n3 = t3.popperOptions, r3 = t3.placement, i3 = t3.offset, a3 = t3.getReferenceClientRect, o3 = t3.moveTransition, s3 = D2() ? Vt(x2).arrow : null, c3 = a3 ? { getBoundingClientRect: a3, contextElement: a3.contextElement || O2() } : e2, l3 = [{ name: `offset`, options: { offset: i3 } }, { name: `preventOverflow`, options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: `flip`, options: { padding: 5 } }, { name: `computeStyles`, options: { adaptive: !o3 } }, { name: `$$tippy`, enabled: true, phase: `beforeWrite`, requires: [`computeStyles`], fn: function(e3) {
      var t4 = e3.state;
      if (D2()) {
        var n4 = A2().box;
        [`placement`, `reference-hidden`, `escaped`].forEach(function(e4) {
          e4 === `placement` ? n4.setAttribute(`data-placement`, t4.placement) : t4.attributes.popper[`data-popper-` + e4] ? n4.setAttribute(`data-` + e4, ``) : n4.removeAttribute(`data-` + e4);
        }), t4.attributes.popper = {};
      }
    } }];
    D2() && s3 && l3.push({ name: `arrow`, options: { element: s3, padding: 3 } }), l3.push.apply(l3, n3?.modifiers || []), y2.popperInstance = Xe(c3, x2, Object.assign({}, n3, { placement: r3, onFirstUpdate: f2, modifiers: l3 }));
  }
  function se2() {
    y2.popperInstance && (y2.popperInstance = (y2.popperInstance.destroy(), null));
  }
  function ce2() {
    var e3 = y2.props.appendTo, t3, n3 = O2();
    t3 = y2.props.interactive && e3 === nt || e3 === `parent` ? n3.parentNode : at(e3, [n3]), t3.contains(x2) || t3.appendChild(x2), y2.state.isMounted = true, K2();
  }
  function q2() {
    return ft(x2.querySelectorAll(`[data-tippy-root]`));
  }
  function J2(e3) {
    y2.clearDelayTimeouts(), e3 && N2(`onTrigger`, [y2, e3]), ee2();
    var t3 = j2(true), n3 = T2(), i3 = n3[0], a3 = n3[1];
    Q.isTouch && i3 === `hold` && a3 && (t3 = a3), t3 ? r2 = setTimeout(function() {
      y2.show();
    }, t3) : y2.show();
  }
  function le2(e3) {
    if (y2.clearDelayTimeouts(), N2(`onUntrigger`, [y2, e3]), !y2.state.isVisible) {
      B2();
      return;
    }
    if (!(y2.props.trigger.indexOf(`mouseenter`) >= 0 && y2.props.trigger.indexOf(`click`) >= 0 && [`mouseleave`, `mousemove`].indexOf(e3.type) >= 0 && o2)) {
      var t3 = j2(false);
      t3 ? i2 = setTimeout(function() {
        y2.state.isVisible && y2.hide();
      }, t3) : a2 = requestAnimationFrame(function() {
        y2.hide();
      });
    }
  }
  function ue2() {
    y2.state.isEnabled = true;
  }
  function de2() {
    y2.hide(), y2.state.isEnabled = false;
  }
  function fe2() {
    clearTimeout(r2), clearTimeout(i2), cancelAnimationFrame(a2);
  }
  function pe2(t3) {
    if (!y2.state.isDestroyed) {
      N2(`onBeforeUpdate`, [y2, t3]), G2();
      var n3 = y2.props, r3 = It(e2, Object.assign({}, n3, pt(t3), { ignoreAttributes: true }));
      y2.props = r3, te2(), n3.interactiveDebounce !== r3.interactiveDebounce && (I2(), m2 = ot(re2, r3.interactiveDebounce)), n3.triggerTarget && !r3.triggerTarget ? ct(n3.triggerTarget).forEach(function(e3) {
        e3.removeAttribute(`aria-expanded`);
      }) : r3.triggerTarget && e2.removeAttribute(`aria-expanded`), F2(), M2(), S2 && S2(n3, r3), y2.popperInstance && (K2(), q2().forEach(function(e3) {
        requestAnimationFrame(e3._tippy.popperInstance.forceUpdate);
      })), N2(`onAfterUpdate`, [y2, t3]);
    }
  }
  function me2(e3) {
    y2.setProps({ content: e3 });
  }
  function he2() {
    var e3 = y2.state.isVisible, t3 = y2.state.isDestroyed, n3 = !y2.state.isEnabled, r3 = Q.isTouch && !y2.props.touch, i3 = rt(y2.props.duration, 0, $.duration);
    if (!(e3 || t3 || n3 || r3) && !O2().hasAttribute(`disabled`) && (N2(`onShow`, [y2], false), y2.props.onShow(y2) !== false)) {
      if (y2.state.isVisible = true, D2() && (x2.style.visibility = `visible`), M2(), ee2(), y2.state.isMounted || (x2.style.transition = `none`), D2()) {
        var a3 = A2(), o3 = a3.box, s3 = a3.content;
        bt([o3, s3], 0);
      }
      f2 = function() {
        var e4;
        if (!(!y2.state.isVisible || l2)) {
          if (l2 = true, x2.offsetHeight, x2.style.transition = y2.props.moveTransition, D2() && y2.props.animation) {
            var t4 = A2(), n4 = t4.box, r4 = t4.content;
            bt([n4, r4], i3), xt([n4, r4], `visible`);
          }
          P2(), F2(), lt(Gt, y2), (e4 = y2.popperInstance) == null || e4.forceUpdate(), N2(`onMount`, [y2]), y2.props.animation && D2() && H2(i3, function() {
            y2.state.isShown = true, N2(`onShown`, [y2]);
          });
        }
      }, ce2();
    }
  }
  function ge2() {
    var e3 = !y2.state.isVisible, t3 = y2.state.isDestroyed, n3 = !y2.state.isEnabled, r3 = rt(y2.props.duration, 1, $.duration);
    if (!(e3 || t3 || n3) && (N2(`onHide`, [y2], false), y2.props.onHide(y2) !== false)) {
      if (y2.state.isVisible = false, y2.state.isShown = false, l2 = false, o2 = false, D2() && (x2.style.visibility = `hidden`), I2(), B2(), M2(true), D2()) {
        var i3 = A2(), a3 = i3.box, s3 = i3.content;
        y2.props.animation && (bt([a3, s3], r3), xt([a3, s3], `hidden`));
      }
      P2(), F2(), y2.props.animation ? D2() && V2(r3, y2.unmount) : y2.unmount();
    }
  }
  function Y2(e3) {
    k2().addEventListener(`mousemove`, m2), lt(Wt, m2), m2(e3);
  }
  function X2() {
    y2.state.isVisible && y2.hide(), y2.state.isMounted && (se2(), q2().forEach(function(e3) {
      e3._tippy.unmount();
    }), x2.parentNode && x2.parentNode.removeChild(x2), Gt = Gt.filter(function(e3) {
      return e3 !== y2;
    }), y2.state.isMounted = false, N2(`onHidden`, [y2]));
  }
  function _e2() {
    y2.state.isDestroyed || (y2.clearDelayTimeouts(), y2.unmount(), G2(), delete e2._tippy, y2.state.isDestroyed = true, N2(`onDestroy`, [y2]));
  }
}
function qt(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = $.plugins.concat(t2.plugins || []);
  At();
  var r2 = Object.assign({}, t2, { plugins: n2 }), i2 = yt(e2).reduce(function(e3, t3) {
    var n3 = t3 && Kt(t3, r2);
    return n3 && e3.push(n3), e3;
  }, []);
  return ht(e2) ? i2[0] : i2;
}
qt.defaultProps = $, qt.setDefaultProps = Nt, qt.currentInput = Q, Object.assign({}, b, { effect: function(e2) {
  var t2 = e2.state, n2 = { popper: { position: t2.options.strategy, left: `0`, top: `0`, margin: `0` }, arrow: { position: `absolute` }, reference: {} };
  Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow);
} });
var Jt = { clientX: 0, clientY: 0 }, Yt = [];
function Xt(e2) {
  Jt = { clientX: e2.clientX, clientY: e2.clientY };
}
function Zt(e2) {
  e2.addEventListener(`mousemove`, Xt);
}
function Qt(e2) {
  e2.removeEventListener(`mousemove`, Xt);
}
var $t = { name: `followCursor`, defaultValue: false, fn: function(e2) {
  var t2 = e2.reference, n2 = St(e2.props.triggerTarget || t2), r2 = false, i2 = false, a2 = true, o2 = e2.props;
  function s2() {
    return e2.props.followCursor === `initial` && e2.state.isVisible;
  }
  function c2() {
    n2.addEventListener(`mousemove`, d2);
  }
  function l2() {
    n2.removeEventListener(`mousemove`, d2);
  }
  function u2() {
    r2 = true, e2.setProps({ getReferenceClientRect: null }), r2 = false;
  }
  function d2(n3) {
    var r3 = n3.target ? t2.contains(n3.target) : true, i3 = e2.props.followCursor, a3 = n3.clientX, o3 = n3.clientY, s3 = t2.getBoundingClientRect(), c3 = a3 - s3.left, l3 = o3 - s3.top;
    (r3 || !e2.props.interactive) && e2.setProps({ getReferenceClientRect: function() {
      var e3 = t2.getBoundingClientRect(), n4 = a3, r4 = o3;
      i3 === `initial` && (n4 = e3.left + c3, r4 = e3.top + l3);
      var s4 = i3 === `horizontal` ? e3.top : r4, u3 = i3 === `vertical` ? e3.right : n4, d3 = i3 === `horizontal` ? e3.bottom : r4, f3 = i3 === `vertical` ? e3.left : n4;
      return { width: u3 - f3, height: d3 - s4, top: s4, right: u3, bottom: d3, left: f3 };
    } });
  }
  function f2() {
    e2.props.followCursor && (Yt.push({ instance: e2, doc: n2 }), Zt(n2));
  }
  function p2() {
    Yt = Yt.filter(function(t3) {
      return t3.instance !== e2;
    }), Yt.filter(function(e3) {
      return e3.doc === n2;
    }).length === 0 && Qt(n2);
  }
  return { onCreate: f2, onDestroy: p2, onBeforeUpdate: function() {
    o2 = e2.props;
  }, onAfterUpdate: function(t3, n3) {
    var a3 = n3.followCursor;
    r2 || a3 !== void 0 && o2.followCursor !== a3 && (p2(), a3 ? (f2(), e2.state.isMounted && !i2 && !s2() && c2()) : (l2(), u2()));
  }, onMount: function() {
    e2.props.followCursor && !i2 && (a2 && (a2 = (d2(Jt), false)), s2() || c2());
  }, onTrigger: function(e3, t3) {
    _t(t3) && (Jt = { clientX: t3.clientX, clientY: t3.clientY }), i2 = t3.type === `focus`;
  }, onHidden: function() {
    e2.props.followCursor && (u2(), l2(), a2 = true);
  } };
} };
qt.setDefaultProps({ render: Ht });
export {
  qt as n,
  $t as t
};
