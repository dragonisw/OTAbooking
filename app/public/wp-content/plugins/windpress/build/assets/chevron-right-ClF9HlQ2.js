import { $n as e, B as t, D as n, Ht as r, Nt as i, St as a, Zn as o, Zt as s, _ as c, _t as l, b as u, er as d, et as f, fn as p, ht as m, k as h, mt as g, o as ee, qt as _, tr as te, tt as ne, v, vn as y, xt as b, y as re, z as ie } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as ae, r as oe } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { c as se, i as ce, l as le, m as ue, n as de, r as fe, s as pe, t as me } from "./floating-ui.core-ShRDH5Xp.js";
var x = {};
function he(e2) {
  return e2.getIsPending !== void 0;
}
function ge(e2) {
  if (he(e2)) return e2;
  let t2 = true, n2 = e2.then((e3) => (t2 = false, e3), (e3) => {
    throw t2 = false, e3;
  });
  return n2.getIsPending = function() {
    return t2;
  }, n2;
}
function _e(e2) {
  let t2 = {}, n2 = e2.attributes;
  if (!n2) return t2;
  for (let e3 = n2.length - 1; e3 >= 0; e3--) t2[n2[e3].name] = n2[e3].value;
  return t2;
}
function ve(e2) {
  return Object.keys(e2).reduce((t2, n2) => (e2[n2] !== false && e2[n2] !== null && e2[n2] !== void 0 && (t2[n2] = e2[n2]), t2), {});
}
function ye(e2, t2) {
  let { class: n2, style: r2, ...i2 } = _e(e2), { class: a2, style: o2, ...s2 } = ve(t2);
  return { class: [n2, a2], style: [r2, o2], ...i2, ...s2 };
}
var be = h({ inheritAttrs: false, __name: `InlineSvg`, props: { src: {}, title: { default: void 0 }, transformSource: { type: Function, default: (e2) => e2 }, keepDuringLoading: { type: Boolean, default: true }, uniqueIds: { type: [Boolean, String], default: false }, uniqueIdsBase: { default: `` } }, emits: [`loaded`, `unloaded`, `error`], setup(e2, { expose: n2, emit: a2 }) {
  let o2 = e2, s2 = a2, c2 = i(), l2 = y(), u2 = y(), d2 = y(), f2 = Math.random().toString(36).substring(2);
  n2({ svgElSource: l2, request: d2 }), r(() => o2.src, (e3) => {
    m2(e3);
  }), m2(o2.src);
  function p2(e3) {
    if (e3 = e3.cloneNode(true), o2.uniqueIds) {
      let t2 = typeof o2.uniqueIds == `string` ? o2.uniqueIds : f2;
      e3 = te2(e3, t2, o2.uniqueIdsBase);
    }
    return e3 = o2.transformSource(e3), o2.title && _2(e3, o2.title), e3.innerHTML;
  }
  function m2(e3) {
    x[e3] || (x[e3] = h2(e3)), l2.value && x[e3].getIsPending() && !o2.keepDuringLoading && (l2.value = null, s2(`unloaded`)), x[e3].then((e4) => {
      l2.value = e4, ne(() => {
        s2(`loaded`, u2.value);
      });
    }).catch((t2) => {
      l2.value && (l2.value = void 0, s2(`unloaded`)), delete x[e3], s2(`error`, t2);
    });
  }
  function h2(e3) {
    return ge(new Promise((t2, n3) => {
      let r2 = new XMLHttpRequest();
      r2.open(`GET`, e3, true), d2.value = r2, r2.onload = () => {
        if (r2.status >= 200 && r2.status < 400) try {
          let e4 = new DOMParser().parseFromString(r2.responseText, `text/xml`).getElementsByTagName(`svg`)[0];
          e4 ? t2(e4) : n3(Error(`Loaded file is not valid SVG"`));
        } catch (e4) {
          n3(e4);
        }
        else n3(Error(`Error loading SVG`));
      }, r2.onerror = n3, r2.send();
    }));
  }
  let ee2 = () => l2.value ? t(`svg`, { ...ye(l2.value, c2), innerHTML: p2(l2.value), ref: u2 }) : null;
  function _2(e3, t2) {
    let n3 = e3.getElementsByTagName(`title`);
    if (n3.length) n3[0].textContent = t2;
    else {
      let n4 = document.createElementNS(`http://www.w3.org/2000/svg`, `title`);
      n4.textContent = t2, e3.insertBefore(n4, e3.firstChild);
    }
  }
  function te2(e3, t2, n3 = ``) {
    let r2 = [`id`, `href`, `xlink:href`, `xlink:role`, `xlink:arcrole`], i2 = [`href`, `xlink:href`], a3 = (e4, t3) => i2.includes(e4) && (t3 ? !t3.includes(`#`) : false);
    return [...e3.children].forEach((e4) => {
      var i3;
      if ((i3 = e4.attributes) != null && i3.length) {
        let i4 = Object.values(e4.attributes).map((e5) => {
          let r3 = /url\((.*?)\)/.exec(e5.value);
          return r3 != null && r3[1] && (e5.value = e5.value.replace(r3[0], `url(${n3}${r3[1]}_${t2})`)), e5;
        });
        r2.forEach((e5) => {
          let n4 = i4.find((t3) => t3.name === e5);
          n4 && !a3(e5, n4.value) && (n4.value = `${n4.value}_${t2}`);
        });
      }
      return e4.children.length ? te2(e4, t2, n3) : e4;
    }), e3;
  }
  return (e3, t2) => (g(), v(ee2));
} });
function S(e2) {
  return e2.ownerDocument?.defaultView || window;
}
function C(e2) {
  return S(e2).getComputedStyle(e2);
}
var xe = Math.min, w = Math.max, T = Math.round;
function Se(e2) {
  let t2 = C(e2), n2 = parseFloat(t2.width), r2 = parseFloat(t2.height), i2 = e2.offsetWidth, a2 = e2.offsetHeight, o2 = T(n2) !== i2 || T(r2) !== a2;
  return o2 && (n2 = i2, r2 = a2), { width: n2, height: r2, fallback: o2 };
}
function E(e2) {
  return we(e2) ? (e2.nodeName || ``).toLowerCase() : ``;
}
var D;
function Ce() {
  if (D) return D;
  let e2 = navigator.userAgentData;
  return e2 && Array.isArray(e2.brands) ? (D = e2.brands.map(((e3) => e3.brand + `/` + e3.version)).join(` `), D) : navigator.userAgent;
}
function O(e2) {
  return e2 instanceof S(e2).HTMLElement;
}
function k(e2) {
  return e2 instanceof S(e2).Element;
}
function we(e2) {
  return e2 instanceof S(e2).Node;
}
function Te(e2) {
  return typeof ShadowRoot > `u` ? false : e2 instanceof S(e2).ShadowRoot || e2 instanceof ShadowRoot;
}
function A(e2) {
  let { overflow: t2, overflowX: n2, overflowY: r2, display: i2 } = C(e2);
  return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && ![`inline`, `contents`].includes(i2);
}
function Ee(e2) {
  return [`table`, `td`, `th`].includes(E(e2));
}
function De(e2) {
  let t2 = /firefox/i.test(Ce()), n2 = C(e2), r2 = n2.backdropFilter || n2.WebkitBackdropFilter;
  return n2.transform !== `none` || n2.perspective !== `none` || !!r2 && r2 !== `none` || t2 && n2.willChange === `filter` || t2 && !!n2.filter && n2.filter !== `none` || [`transform`, `perspective`].some(((e3) => n2.willChange.includes(e3))) || [`paint`, `layout`, `strict`, `content`].some(((e3) => {
    let t3 = n2.contain;
    return t3 != null && t3.includes(e3);
  }));
}
function Oe() {
  return !/^((?!chrome|android).)*safari/i.test(Ce());
}
function ke(e2) {
  return [`html`, `body`, `#document`].includes(E(e2));
}
function Ae(e2) {
  return k(e2) ? e2 : e2.contextElement;
}
var je = { x: 1, y: 1 };
function j(e2) {
  let t2 = Ae(e2);
  if (!O(t2)) return je;
  let n2 = t2.getBoundingClientRect(), { width: r2, height: i2, fallback: a2 } = Se(t2), o2 = (a2 ? T(n2.width) : n2.width) / r2, s2 = (a2 ? T(n2.height) : n2.height) / i2;
  return o2 && Number.isFinite(o2) || (o2 = 1), s2 && Number.isFinite(s2) || (s2 = 1), { x: o2, y: s2 };
}
function M(e2, t2, n2, r2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  let i2 = e2.getBoundingClientRect(), a2 = Ae(e2), o2 = je;
  t2 && (r2 ? k(r2) && (o2 = j(r2)) : o2 = j(e2));
  let s2 = a2 ? S(a2) : window, c2 = !Oe() && n2, l2 = (i2.left + (c2 && s2.visualViewport?.offsetLeft || 0)) / o2.x, u2 = (i2.top + (c2 && s2.visualViewport?.offsetTop || 0)) / o2.y, d2 = i2.width / o2.x, f2 = i2.height / o2.y;
  if (a2) {
    let e3 = S(a2), t3 = r2 && k(r2) ? S(r2) : r2, n3 = e3.frameElement;
    for (; n3 && r2 && t3 !== e3; ) {
      let e4 = j(n3), t4 = n3.getBoundingClientRect(), r3 = getComputedStyle(n3);
      t4.x += (n3.clientLeft + parseFloat(r3.paddingLeft)) * e4.x, t4.y += (n3.clientTop + parseFloat(r3.paddingTop)) * e4.y, l2 *= e4.x, u2 *= e4.y, d2 *= e4.x, f2 *= e4.y, l2 += t4.x, u2 += t4.y, n3 = S(n3).frameElement;
    }
  }
  return { width: d2, height: f2, top: u2, right: l2 + d2, bottom: u2 + f2, left: l2, x: l2, y: u2 };
}
function N(e2) {
  return ((we(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
}
function P(e2) {
  return k(e2) ? { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop } : { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
}
function Me(e2) {
  return M(N(e2)).left + P(e2).scrollLeft;
}
function F(e2) {
  if (E(e2) === `html`) return e2;
  let t2 = e2.assignedSlot || e2.parentNode || Te(e2) && e2.host || N(e2);
  return Te(t2) ? t2.host : t2;
}
function Ne(e2) {
  let t2 = F(e2);
  return ke(t2) ? t2.ownerDocument.body : O(t2) && A(t2) ? t2 : Ne(t2);
}
function I(e2, t2) {
  t2 === void 0 && (t2 = []);
  let n2 = Ne(e2), r2 = n2 === e2.ownerDocument?.body, i2 = S(n2);
  return r2 ? t2.concat(i2, i2.visualViewport || [], A(n2) ? n2 : []) : t2.concat(n2, I(n2));
}
function Pe(e2, t2, n2) {
  return t2 === `viewport` ? ue((function(e3, t3) {
    let n3 = S(e3), r2 = N(e3), i2 = n3.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
    if (i2) {
      a2 = i2.width, o2 = i2.height;
      let e4 = Oe();
      (e4 || !e4 && t3 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
    }
    return { width: a2, height: o2, x: s2, y: c2 };
  })(e2, n2)) : k(t2) ? ue((function(e3, t3) {
    let n3 = M(e3, true, t3 === `fixed`), r2 = n3.top + e3.clientTop, i2 = n3.left + e3.clientLeft, a2 = O(e3) ? j(e3) : { x: 1, y: 1 };
    return { width: e3.clientWidth * a2.x, height: e3.clientHeight * a2.y, x: i2 * a2.x, y: r2 * a2.y };
  })(t2, n2)) : ue((function(e3) {
    let t3 = N(e3), n3 = P(e3), r2 = e3.ownerDocument.body, i2 = w(t3.scrollWidth, t3.clientWidth, r2.scrollWidth, r2.clientWidth), a2 = w(t3.scrollHeight, t3.clientHeight, r2.scrollHeight, r2.clientHeight), o2 = -n3.scrollLeft + Me(e3), s2 = -n3.scrollTop;
    return C(r2).direction === `rtl` && (o2 += w(t3.clientWidth, r2.clientWidth) - i2), { width: i2, height: a2, x: o2, y: s2 };
  })(N(e2)));
}
function Fe(e2) {
  return O(e2) && C(e2).position !== `fixed` ? e2.offsetParent : null;
}
function Ie(e2) {
  let t2 = S(e2), n2 = Fe(e2);
  for (; n2 && Ee(n2) && C(n2).position === `static`; ) n2 = Fe(n2);
  return n2 && (E(n2) === `html` || E(n2) === `body` && C(n2).position === `static` && !De(n2)) ? t2 : n2 || (function(e3) {
    let t3 = F(e3);
    for (; O(t3) && !ke(t3); ) {
      if (De(t3)) return t3;
      t3 = F(t3);
    }
    return null;
  })(e2) || t2;
}
function Le(e2, t2, n2) {
  let r2 = O(t2), i2 = N(t2), a2 = M(e2, true, n2 === `fixed`, t2), o2 = { scrollLeft: 0, scrollTop: 0 }, s2 = { x: 0, y: 0 };
  if (r2 || !r2 && n2 !== `fixed`) if ((E(t2) !== `body` || A(i2)) && (o2 = P(t2)), O(t2)) {
    let e3 = M(t2, true);
    s2.x = e3.x + t2.clientLeft, s2.y = e3.y + t2.clientTop;
  } else i2 && (s2.x = Me(i2));
  return { x: a2.left + o2.scrollLeft - s2.x, y: a2.top + o2.scrollTop - s2.y, width: a2.width, height: a2.height };
}
var Re = { getClippingRect: function(e2) {
  let { element: t2, boundary: n2, rootBoundary: r2, strategy: i2 } = e2, a2 = [...n2 === `clippingAncestors` ? (function(e3, t3) {
    let n3 = t3.get(e3);
    if (n3) return n3;
    let r3 = I(e3).filter(((e4) => k(e4) && E(e4) !== `body`)), i3 = null, a3 = C(e3).position === `fixed`, o3 = a3 ? F(e3) : e3;
    for (; k(o3) && !ke(o3); ) {
      let e4 = C(o3), t4 = De(o3);
      (a3 ? t4 || i3 : t4 || e4.position !== `static` || !i3 || ![`absolute`, `fixed`].includes(i3.position)) ? i3 = e4 : r3 = r3.filter(((e5) => e5 !== o3)), o3 = F(o3);
    }
    return t3.set(e3, r3), r3;
  })(t2, this._c) : [].concat(n2), r2], o2 = a2[0], s2 = a2.reduce(((e3, n3) => {
    let r3 = Pe(t2, n3, i2);
    return e3.top = w(r3.top, e3.top), e3.right = xe(r3.right, e3.right), e3.bottom = xe(r3.bottom, e3.bottom), e3.left = w(r3.left, e3.left), e3;
  }), Pe(t2, o2, i2));
  return { width: s2.right - s2.left, height: s2.bottom - s2.top, x: s2.left, y: s2.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e2) {
  let { rect: t2, offsetParent: n2, strategy: r2 } = e2, i2 = O(n2), a2 = N(n2);
  if (n2 === a2) return t2;
  let o2 = { scrollLeft: 0, scrollTop: 0 }, s2 = { x: 1, y: 1 }, c2 = { x: 0, y: 0 };
  if ((i2 || !i2 && r2 !== `fixed`) && ((E(n2) !== `body` || A(a2)) && (o2 = P(n2)), O(n2))) {
    let e3 = M(n2);
    s2 = j(n2), c2.x = e3.x + n2.clientLeft, c2.y = e3.y + n2.clientTop;
  }
  return { width: t2.width * s2.x, height: t2.height * s2.y, x: t2.x * s2.x - o2.scrollLeft * s2.x + c2.x, y: t2.y * s2.y - o2.scrollTop * s2.y + c2.y };
}, isElement: k, getDimensions: function(e2) {
  return O(e2) ? Se(e2) : e2.getBoundingClientRect();
}, getOffsetParent: Ie, getDocumentElement: N, getScale: j, async getElementRects(e2) {
  let { reference: t2, floating: n2, strategy: r2 } = e2, i2 = this.getOffsetParent || Ie, a2 = this.getDimensions;
  return { reference: Le(t2, await i2(n2), r2), floating: { x: 0, y: 0, ...await a2(n2) } };
}, getClientRects: (e2) => Array.from(e2.getClientRects()), isRTL: (e2) => C(e2).direction === `rtl` }, ze = (e2, t2, n2) => {
  let r2 = /* @__PURE__ */ new Map(), i2 = { platform: Re, ...n2 }, a2 = { ...i2.platform, _c: r2 };
  return fe(e2, t2, { ...i2, platform: a2 });
};
function Be(e2, t2) {
  for (let n2 in t2) Object.prototype.hasOwnProperty.call(t2, n2) && (typeof t2[n2] == `object` && e2[n2] ? Be(e2[n2], t2[n2]) : e2[n2] = t2[n2]);
}
var L = { disabled: false, distance: 5, skidding: 0, container: `body`, boundary: void 0, instantMove: false, disposeTimeout: 150, popperTriggers: [], strategy: `absolute`, preventOverflow: true, flip: true, shift: true, overflowPadding: 0, arrowPadding: 0, arrowOverflow: true, autoHideOnMousedown: false, themes: { tooltip: { placement: `top`, triggers: [`hover`, `focus`, `touch`], hideTriggers: (e2) => [...e2, `click`], delay: { show: 200, hide: 0 }, handleResize: false, html: false, loadingContent: `...` }, dropdown: { placement: `bottom`, triggers: [`click`], delay: 0, handleResize: true, autoHide: true }, menu: { $extend: `dropdown`, triggers: [`hover`, `focus`], popperTriggers: [`hover`], delay: { show: 0, hide: 400 } } } };
function R(e2, t2) {
  let n2 = L.themes[e2] || {}, r2;
  do
    r2 = n2[t2], typeof r2 > `u` ? n2.$extend ? n2 = L.themes[n2.$extend] || {} : (n2 = null, r2 = L[t2]) : n2 = null;
  while (n2);
  return r2;
}
function Ve(e2) {
  let t2 = [e2], n2 = L.themes[e2] || {};
  do
    n2.$extend && !n2.$resetCss ? (t2.push(n2.$extend), n2 = L.themes[n2.$extend] || {}) : n2 = null;
  while (n2);
  return t2.map((e3) => `v-popper--theme-${e3}`);
}
function He(e2) {
  let t2 = [e2], n2 = L.themes[e2] || {};
  do
    n2.$extend ? (t2.push(n2.$extend), n2 = L.themes[n2.$extend] || {}) : n2 = null;
  while (n2);
  return t2;
}
var z = false;
if (typeof window < `u`) {
  z = false;
  try {
    let e2 = Object.defineProperty({}, `passive`, { get() {
      z = true;
    } });
    window.addEventListener(`test`, null, e2);
  } catch {
  }
}
var Ue = false;
typeof window < `u` && typeof navigator < `u` && (Ue = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var We = [`auto`, `top`, `bottom`, `left`, `right`].reduce((e2, t2) => e2.concat([t2, `${t2}-start`, `${t2}-end`]), []), Ge = { hover: `mouseenter`, focus: `focus`, click: `click`, touch: `touchstart`, pointer: `pointerdown` }, Ke = { hover: `mouseleave`, focus: `blur`, click: `click`, touch: `touchend`, pointer: `pointerup` };
function qe(e2, t2) {
  let n2 = e2.indexOf(t2);
  n2 !== -1 && e2.splice(n2, 1);
}
function B() {
  return new Promise((e2) => requestAnimationFrame(() => {
    requestAnimationFrame(e2);
  }));
}
var V = [], H = null, Je = {};
function Ye(e2) {
  let t2 = Je[e2];
  return t2 || (t2 = Je[e2] = []), t2;
}
var Xe = function() {
};
typeof window < `u` && (Xe = window.Element);
function U(e2) {
  return function(t2) {
    return R(t2.theme, e2);
  };
}
var Ze = `__floating-vue__popper`, Qe = () => h({ name: `VPopper`, provide() {
  return { [Ze]: { parentPopper: this } };
}, inject: { [Ze]: { default: null } }, props: { theme: { type: String, required: true }, targetNodes: { type: Function, required: true }, referenceNode: { type: Function, default: null }, popperNode: { type: Function, required: true }, shown: { type: Boolean, default: false }, showGroup: { type: String, default: null }, ariaId: { default: null }, disabled: { type: Boolean, default: U(`disabled`) }, positioningDisabled: { type: Boolean, default: U(`positioningDisabled`) }, placement: { type: String, default: U(`placement`), validator: (e2) => We.includes(e2) }, delay: { type: [String, Number, Object], default: U(`delay`) }, distance: { type: [Number, String], default: U(`distance`) }, skidding: { type: [Number, String], default: U(`skidding`) }, triggers: { type: Array, default: U(`triggers`) }, showTriggers: { type: [Array, Function], default: U(`showTriggers`) }, hideTriggers: { type: [Array, Function], default: U(`hideTriggers`) }, popperTriggers: { type: Array, default: U(`popperTriggers`) }, popperShowTriggers: { type: [Array, Function], default: U(`popperShowTriggers`) }, popperHideTriggers: { type: [Array, Function], default: U(`popperHideTriggers`) }, container: { type: [String, Object, Xe, Boolean], default: U(`container`) }, boundary: { type: [String, Xe], default: U(`boundary`) }, strategy: { type: String, validator: (e2) => [`absolute`, `fixed`].includes(e2), default: U(`strategy`) }, autoHide: { type: [Boolean, Function], default: U(`autoHide`) }, handleResize: { type: Boolean, default: U(`handleResize`) }, instantMove: { type: Boolean, default: U(`instantMove`) }, eagerMount: { type: Boolean, default: U(`eagerMount`) }, popperClass: { type: [String, Array, Object], default: U(`popperClass`) }, computeTransformOrigin: { type: Boolean, default: U(`computeTransformOrigin`) }, autoMinSize: { type: Boolean, default: U(`autoMinSize`) }, autoSize: { type: [Boolean, String], default: U(`autoSize`) }, autoMaxSize: { type: Boolean, default: U(`autoMaxSize`) }, autoBoundaryMaxSize: { type: Boolean, default: U(`autoBoundaryMaxSize`) }, preventOverflow: { type: Boolean, default: U(`preventOverflow`) }, overflowPadding: { type: [Number, String], default: U(`overflowPadding`) }, arrowPadding: { type: [Number, String], default: U(`arrowPadding`) }, arrowOverflow: { type: Boolean, default: U(`arrowOverflow`) }, flip: { type: Boolean, default: U(`flip`) }, shift: { type: Boolean, default: U(`shift`) }, shiftCrossAxis: { type: Boolean, default: U(`shiftCrossAxis`) }, noAutoFocus: { type: Boolean, default: U(`noAutoFocus`) }, disposeTimeout: { type: Number, default: U(`disposeTimeout`) } }, emits: { show: () => true, hide: () => true, "update:shown": (e2) => true, "apply-show": () => true, "apply-hide": () => true, "close-group": () => true, "close-directive": () => true, "auto-hide": () => true, resize: () => true }, data() {
  return { isShown: false, isMounted: false, skipTransition: false, classes: { showFrom: false, showTo: false, hideFrom: false, hideTo: true }, result: { x: 0, y: 0, placement: ``, strategy: this.strategy, arrow: { x: 0, y: 0, centerOffset: 0 }, transformOrigin: null }, randomId: `popper_${[Math.random(), Date.now()].map((e2) => e2.toString(36).substring(2, 10)).join(`_`)}`, shownChildren: /* @__PURE__ */ new Set(), lastAutoHide: true, pendingHide: false, containsGlobalTarget: false, isDisposed: true, mouseDownContains: false };
}, computed: { popperId() {
  return this.ariaId == null ? this.randomId : this.ariaId;
}, shouldMountContent() {
  return this.eagerMount || this.isMounted;
}, slotData() {
  return { popperId: this.popperId, isShown: this.isShown, shouldMountContent: this.shouldMountContent, skipTransition: this.skipTransition, autoHide: typeof this.autoHide == `function` ? this.lastAutoHide : this.autoHide, show: this.show, hide: this.hide, handleResize: this.handleResize, onResize: this.onResize, classes: { ...this.classes, popperClass: this.popperClass }, result: this.positioningDisabled ? null : this.result, attrs: this.$attrs };
}, parentPopper() {
  return this[Ze]?.parentPopper;
}, hasPopperShowTriggerHover() {
  return this.popperTriggers?.includes(`hover`) || this.popperShowTriggers?.includes(`hover`);
} }, watch: { shown: `$_autoShowHide`, disabled(e2) {
  e2 ? this.dispose() : this.init();
}, async container() {
  this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
}, triggers: { handler: `$_refreshListeners`, deep: true }, positioningDisabled: `$_refreshListeners`, ...[`placement`, `distance`, `skidding`, `boundary`, `strategy`, `overflowPadding`, `arrowPadding`, `preventOverflow`, `shift`, `shiftCrossAxis`, `flip`].reduce((e2, t2) => (e2[t2] = `$_computePosition`, e2), {}) }, created() {
  this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
}, mounted() {
  this.init(), this.$_detachPopperNode();
}, activated() {
  this.$_autoShowHide();
}, deactivated() {
  this.hide();
}, beforeUnmount() {
  this.dispose();
}, methods: { show({ event: e2 = null, skipDelay: t2 = false, force: n2 = false } = {}) {
  var r2;
  (r2 = this.parentPopper) != null && r2.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = false, (n2 || !this.disabled) && (this.parentPopper?.lockedChild === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e2, t2), this.$emit(`show`), this.$_showFrameLocked = true, requestAnimationFrame(() => {
    this.$_showFrameLocked = false;
  })), this.$emit(`update:shown`, true));
}, hide({ event: e2 = null, skipDelay: t2 = false } = {}) {
  if (!this.$_hideInProgress) {
    if (this.shownChildren.size > 0) {
      this.pendingHide = true;
      return;
    }
    if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
      this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
        this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t2 }), this.parentPopper.lockedChild = null);
      }, 1e3));
      return;
    }
    this.parentPopper?.lockedChild === this && (this.parentPopper.lockedChild = null), this.pendingHide = false, this.$_scheduleHide(e2, t2), this.$emit(`hide`), this.$emit(`update:shown`, false);
  }
}, init() {
  this.isDisposed && (this.isDisposed = false, this.isMounted = false, this.$_events = [], this.$_preventShow = false, this.$_referenceNode = this.referenceNode?.call(this) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((e2) => e2.nodeType === e2.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(`.v-popper__inner`), this.$_arrowNode = this.$_popperNode.querySelector(`.v-popper__arrow-container`), this.$_swapTargetAttrs(`title`, `data-original-title`), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
}, dispose() {
  this.isDisposed || (this.isDisposed = true, this.$_removeEventListeners(), this.hide({ skipDelay: true }), this.$_detachPopperNode(), this.isMounted = false, this.isShown = false, this.$_updateParentShownChildren(false), this.$_swapTargetAttrs(`data-original-title`, `title`));
}, async onResize() {
  this.isShown && (await this.$_computePosition(), this.$emit(`resize`));
}, async $_computePosition() {
  if (this.isDisposed || this.positioningDisabled) return;
  let e2 = { strategy: this.strategy, middleware: [] };
  (this.distance || this.skidding) && e2.middleware.push(pe({ mainAxis: this.distance, crossAxis: this.skidding }));
  let t2 = this.placement.startsWith(`auto`);
  if (t2 ? e2.middleware.push(de({ alignment: this.placement.split(`-`)[1] ?? `` })) : e2.placement = this.placement, this.preventOverflow && (this.shift && e2.middleware.push(se({ padding: this.overflowPadding, boundary: this.boundary, crossAxis: this.shiftCrossAxis })), !t2 && this.flip && e2.middleware.push(ce({ padding: this.overflowPadding, boundary: this.boundary }))), e2.middleware.push(me({ element: this.$_arrowNode, padding: this.arrowPadding })), this.arrowOverflow && e2.middleware.push({ name: `arrowOverflow`, fn: ({ placement: e3, rects: t3, middlewareData: n3 }) => {
    let r2, { centerOffset: i2 } = n3.arrow;
    return r2 = e3.startsWith(`top`) || e3.startsWith(`bottom`) ? Math.abs(i2) > t3.reference.width / 2 : Math.abs(i2) > t3.reference.height / 2, { data: { overflow: r2 } };
  } }), this.autoMinSize || this.autoSize) {
    let t3 = this.autoSize ? this.autoSize : this.autoMinSize ? `min` : null;
    e2.middleware.push({ name: `autoSize`, fn: ({ rects: e3, placement: n3, middlewareData: r2 }) => {
      var i2;
      if ((i2 = r2.autoSize) != null && i2.skip) return {};
      let a2, o2;
      return n3.startsWith(`top`) || n3.startsWith(`bottom`) ? a2 = e3.reference.width : o2 = e3.reference.height, this.$_innerNode.style[t3 === `min` ? `minWidth` : t3 === `max` ? `maxWidth` : `width`] = a2 == null ? null : `${a2}px`, this.$_innerNode.style[t3 === `min` ? `minHeight` : t3 === `max` ? `maxHeight` : `height`] = o2 == null ? null : `${o2}px`, { data: { skip: true }, reset: { rects: true } };
    } });
  }
  (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e2.middleware.push(le({ boundary: this.boundary, padding: this.overflowPadding, apply: ({ availableWidth: e3, availableHeight: t3 }) => {
    this.$_innerNode.style.maxWidth = e3 == null ? null : `${e3}px`, this.$_innerNode.style.maxHeight = t3 == null ? null : `${t3}px`;
  } })));
  let n2 = await ze(this.$_referenceNode, this.$_popperNode, e2);
  Object.assign(this.result, { x: n2.x, y: n2.y, placement: n2.placement, strategy: n2.strategy, arrow: { ...n2.middlewareData.arrow, ...n2.middlewareData.arrowOverflow } });
}, $_scheduleShow(e2, t2 = false) {
  if (this.$_updateParentShownChildren(true), this.$_hideInProgress = false, clearTimeout(this.$_scheduleTimer), H && this.instantMove && H.instantMove && H !== this.parentPopper) {
    H.$_applyHide(true), this.$_applyShow(true);
    return;
  }
  t2 ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay(`show`));
}, $_scheduleHide(e2, t2 = false) {
  if (this.shownChildren.size > 0) {
    this.pendingHide = true;
    return;
  }
  this.$_updateParentShownChildren(false), this.$_hideInProgress = true, clearTimeout(this.$_scheduleTimer), this.isShown && (H = this), t2 ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay(`hide`));
}, $_computeDelay(e2) {
  let t2 = this.delay;
  return parseInt(t2 && t2[e2] || t2 || 0);
}, async $_applyShow(e2 = false) {
  clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e2, !this.isShown && (this.$_ensureTeleport(), await B(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([...I(this.$_referenceNode), ...I(this.$_popperNode)], `scroll`, () => {
    this.$_computePosition();
  }));
}, async $_applyShowEffect() {
  if (this.$_hideInProgress) return;
  if (this.computeTransformOrigin) {
    let e3 = this.$_referenceNode.getBoundingClientRect(), t2 = this.$_popperNode.querySelector(`.v-popper__wrapper`), n2 = t2.parentNode.getBoundingClientRect(), r2 = e3.x + e3.width / 2 - (n2.left + t2.offsetLeft), i2 = e3.y + e3.height / 2 - (n2.top + t2.offsetTop);
    this.result.transformOrigin = `${r2}px ${i2}px`;
  }
  this.isShown = true, this.$_applyAttrsToTarget({ "aria-describedby": this.popperId, "data-popper-shown": `` });
  let e2 = this.showGroup;
  if (e2) {
    let t2;
    for (let n2 = 0; n2 < V.length; n2++) t2 = V[n2], t2.showGroup !== e2 && (t2.hide(), t2.$emit(`close-group`));
  }
  V.push(this), document.body.classList.add(`v-popper--some-open`);
  for (let e3 of He(this.theme)) Ye(e3).push(this), document.body.classList.add(`v-popper--some-open--${e3}`);
  this.$emit(`apply-show`), this.classes.showFrom = true, this.classes.showTo = false, this.classes.hideFrom = false, this.classes.hideTo = false, await B(), this.classes.showFrom = false, this.classes.showTo = true, this.noAutoFocus || this.$_popperNode.focus();
}, async $_applyHide(e2 = false) {
  if (this.shownChildren.size > 0) {
    this.pendingHide = true, this.$_hideInProgress = false;
    return;
  }
  if (clearTimeout(this.$_scheduleTimer), !this.isShown) return;
  this.skipTransition = e2, qe(V, this), V.length === 0 && document.body.classList.remove(`v-popper--some-open`);
  for (let e3 of He(this.theme)) {
    let t3 = Ye(e3);
    qe(t3, this), t3.length === 0 && document.body.classList.remove(`v-popper--some-open--${e3}`);
  }
  H === this && (H = null), this.isShown = false, this.$_applyAttrsToTarget({ "aria-describedby": void 0, "data-popper-shown": void 0 }), clearTimeout(this.$_disposeTimer);
  let t2 = this.disposeTimeout;
  t2 !== null && (this.$_disposeTimer = setTimeout(() => {
    this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = false);
  }, t2)), this.$_removeEventListeners(`scroll`), this.$emit(`apply-hide`), this.classes.showFrom = false, this.classes.showTo = false, this.classes.hideFrom = true, this.classes.hideTo = false, await B(), this.classes.hideFrom = false, this.classes.hideTo = true;
}, $_autoShowHide() {
  this.shown ? this.show() : this.hide();
}, $_ensureTeleport() {
  if (this.isDisposed) return;
  let e2 = this.container;
  if (typeof e2 == `string` ? e2 = window.document.querySelector(e2) : e2 === false && (e2 = this.$_targetNodes[0].parentNode), !e2) throw Error(`No container for popover: ` + this.container);
  e2.appendChild(this.$_popperNode), this.isMounted = true;
}, $_addEventListeners() {
  let e2 = (e3) => {
    this.isShown && !this.$_hideInProgress || (e3.usedByTooltip = true, !this.$_preventShow && this.show({ event: e3 }));
  };
  this.$_registerTriggerListeners(this.$_targetNodes, Ge, this.triggers, this.showTriggers, e2), this.$_registerTriggerListeners([this.$_popperNode], Ge, this.popperTriggers, this.popperShowTriggers, e2);
  let t2 = (e3) => {
    e3.usedByTooltip || this.hide({ event: e3 });
  };
  this.$_registerTriggerListeners(this.$_targetNodes, Ke, this.triggers, this.hideTriggers, t2), this.$_registerTriggerListeners([this.$_popperNode], Ke, this.popperTriggers, this.popperHideTriggers, t2);
}, $_registerEventListeners(e2, t2, n2) {
  this.$_events.push({ targetNodes: e2, eventType: t2, handler: n2 }), e2.forEach((e3) => e3.addEventListener(t2, n2, z ? { passive: true } : void 0));
}, $_registerTriggerListeners(e2, t2, n2, r2, i2) {
  let a2 = n2;
  r2 != null && (a2 = typeof r2 == `function` ? r2(a2) : r2), a2.forEach((n3) => {
    let r3 = t2[n3];
    r3 && this.$_registerEventListeners(e2, r3, i2);
  });
}, $_removeEventListeners(e2) {
  let t2 = [];
  this.$_events.forEach((n2) => {
    let { targetNodes: r2, eventType: i2, handler: a2 } = n2;
    !e2 || e2 === i2 ? r2.forEach((e3) => e3.removeEventListener(i2, a2)) : t2.push(n2);
  }), this.$_events = t2;
}, $_refreshListeners() {
  this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
}, $_handleGlobalClose(e2, t2 = false) {
  this.$_showFrameLocked || (this.hide({ event: e2 }), e2.closePopover ? this.$emit(`close-directive`) : this.$emit(`auto-hide`), t2 && (this.$_preventShow = true, setTimeout(() => {
    this.$_preventShow = false;
  }, 300)));
}, $_detachPopperNode() {
  this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
}, $_swapTargetAttrs(e2, t2) {
  for (let n2 of this.$_targetNodes) {
    let r2 = n2.getAttribute(e2);
    r2 && (n2.removeAttribute(e2), n2.setAttribute(t2, r2));
  }
}, $_applyAttrsToTarget(e2) {
  for (let t2 of this.$_targetNodes) for (let n2 in e2) {
    let r2 = e2[n2];
    r2 == null ? t2.removeAttribute(n2) : t2.setAttribute(n2, r2);
  }
}, $_updateParentShownChildren(e2) {
  let t2 = this.parentPopper;
  for (; t2; ) e2 ? t2.shownChildren.add(this.randomId) : (t2.shownChildren.delete(this.randomId), t2.pendingHide && t2.hide()), t2 = t2.parentPopper;
}, $_isAimingPopper() {
  let e2 = this.$_referenceNode.getBoundingClientRect();
  if (K >= e2.left && K <= e2.right && q >= e2.top && q <= e2.bottom) {
    let e3 = this.$_popperNode.getBoundingClientRect(), t2 = K - W, n2 = q - G, r2 = e3.left + e3.width / 2 - W + (e3.top + e3.height / 2) - G + e3.width + e3.height, i2 = W + t2 * r2, a2 = G + n2 * r2;
    return J(W, G, i2, a2, e3.left, e3.top, e3.left, e3.bottom) || J(W, G, i2, a2, e3.left, e3.top, e3.right, e3.top) || J(W, G, i2, a2, e3.right, e3.top, e3.right, e3.bottom) || J(W, G, i2, a2, e3.left, e3.bottom, e3.right, e3.bottom);
  }
  return false;
} }, render() {
  return this.$slots.default(this.slotData);
} });
if (typeof document < `u` && typeof window < `u`) {
  if (Ue) {
    let e2 = z ? { passive: true, capture: true } : true;
    document.addEventListener(`touchstart`, (e3) => $e(e3, true), e2), document.addEventListener(`touchend`, (e3) => et(e3, true), e2);
  } else window.addEventListener(`mousedown`, (e2) => $e(e2, false), true), window.addEventListener(`click`, (e2) => et(e2, false), true);
  window.addEventListener(`resize`, it);
}
function $e(e2, t2) {
  if (L.autoHideOnMousedown) tt(e2, t2);
  else for (let t3 = 0; t3 < V.length; t3++) {
    let n2 = V[t3];
    try {
      n2.mouseDownContains = n2.popperNode().contains(e2.target);
    } catch {
    }
  }
}
function et(e2, t2) {
  L.autoHideOnMousedown || tt(e2, t2);
}
function tt(e2, t2) {
  let n2 = {};
  for (let r2 = V.length - 1; r2 >= 0; r2--) {
    let i2 = V[r2];
    try {
      let r3 = i2.containsGlobalTarget = i2.mouseDownContains || i2.popperNode().contains(e2.target);
      i2.pendingHide = false, requestAnimationFrame(() => {
        if (i2.pendingHide = false, !n2[i2.randomId] && nt(i2, r3, e2)) {
          if (i2.$_handleGlobalClose(e2, t2), !e2.closeAllPopover && e2.closePopover && r3) {
            let e3 = i2.parentPopper;
            for (; e3; ) n2[e3.randomId] = true, e3 = e3.parentPopper;
            return;
          }
          let a2 = i2.parentPopper;
          for (; a2 && nt(a2, a2.containsGlobalTarget, e2); ) a2.$_handleGlobalClose(e2, t2), a2 = a2.parentPopper;
        }
      });
    } catch {
    }
  }
}
function nt(e2, t2, n2) {
  return n2.closeAllPopover || n2.closePopover && t2 || rt(e2, n2) && !t2;
}
function rt(e2, t2) {
  if (typeof e2.autoHide == `function`) {
    let n2 = e2.autoHide(t2);
    return e2.lastAutoHide = n2, n2;
  }
  return e2.autoHide;
}
function it() {
  for (let e2 = 0; e2 < V.length; e2++) V[e2].$_computePosition();
}
var W = 0, G = 0, K = 0, q = 0;
typeof window < `u` && window.addEventListener(`mousemove`, (e2) => {
  W = K, G = q, K = e2.clientX, q = e2.clientY;
}, z ? { passive: true } : void 0);
function J(e2, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = ((o2 - i2) * (t2 - a2) - (s2 - a2) * (e2 - i2)) / ((s2 - a2) * (n2 - e2) - (o2 - i2) * (r2 - t2)), l2 = ((n2 - e2) * (t2 - a2) - (r2 - t2) * (e2 - i2)) / ((s2 - a2) * (n2 - e2) - (o2 - i2) * (r2 - t2));
  return c2 >= 0 && c2 <= 1 && l2 >= 0 && l2 <= 1;
}
var at = { extends: Qe() }, Y = (e2, t2) => {
  let n2 = e2.__vccOpts || e2;
  for (let [e3, r2] of t2) n2[e3] = r2;
  return n2;
};
function ot(t2, n2, r2, i2, a2, s2) {
  return g(), u(`div`, { ref: `reference`, class: o([`v-popper`, { "v-popper--shown": t2.slotData.isShown }]) }, [b(t2.$slots, `default`, e(ie(t2.slotData)))], 2);
}
var st = Y(at, [[`render`, ot]]);
function ct() {
  var e2 = window.navigator.userAgent, t2 = e2.indexOf(`MSIE `);
  if (t2 > 0) return parseInt(e2.substring(t2 + 5, e2.indexOf(`.`, t2)), 10);
  if (e2.indexOf(`Trident/`) > 0) {
    var n2 = e2.indexOf(`rv:`);
    return parseInt(e2.substring(n2 + 3, e2.indexOf(`.`, n2)), 10);
  }
  var r2 = e2.indexOf(`Edge/`);
  return r2 > 0 ? parseInt(e2.substring(r2 + 5, e2.indexOf(`.`, r2)), 10) : -1;
}
var X;
function lt() {
  lt.init || (lt.init = true, X = ct() !== -1);
}
var Z = { name: `ResizeObserver`, props: { emitOnMount: { type: Boolean, default: false }, ignoreWidth: { type: Boolean, default: false }, ignoreHeight: { type: Boolean, default: false } }, emits: [`notify`], mounted() {
  lt(), ne(() => {
    this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
  });
  let e2 = document.createElement(`object`);
  this._resizeObject = e2, e2.setAttribute(`aria-hidden`, `true`), e2.setAttribute(`tabindex`, -1), e2.onload = this.addResizeHandlers, e2.type = `text/html`, X && this.$el.appendChild(e2), e2.data = `about:blank`, X || this.$el.appendChild(e2);
}, beforeUnmount() {
  this.removeResizeHandlers();
}, methods: { compareAndNotify() {
  (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
}, emitSize() {
  this.$emit(`notify`, { width: this._w, height: this._h });
}, addResizeHandlers() {
  this._resizeObject.contentDocument.defaultView.addEventListener(`resize`, this.compareAndNotify), this.compareAndNotify();
}, removeResizeHandlers() {
  this._resizeObject && this._resizeObject.onload && (!X && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener(`resize`, this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
} } }, ut = s(`data-v-b329ee4c`);
l(`data-v-b329ee4c`);
var dt = { class: `resize-observer`, tabindex: `-1` };
m(), Z.render = ut((e2, t2, n2, r2, i2, a2) => (g(), v(`div`, dt))), Z.__scopeId = `data-v-b329ee4c`, Z.__file = `src/components/ResizeObserver.vue`;
var ft = (e2 = `theme`) => ({ computed: { themeClass() {
  return Ve(this[e2]);
} } }), pt = h({ name: `VPopperContent`, components: { ResizeObserver: Z }, mixins: [ft()], props: { popperId: String, theme: String, shown: Boolean, mounted: Boolean, skipTransition: Boolean, autoHide: Boolean, handleResize: Boolean, classes: Object, result: Object }, emits: [`hide`, `resize`], methods: { toPx(e2) {
  return e2 != null && !isNaN(e2) ? `${e2}px` : null;
} } }), mt = [`id`, `aria-hidden`, `tabindex`, `data-popper-placement`], ht = { ref: `inner`, class: `v-popper__inner` }, gt = [c(`div`, { class: `v-popper__arrow-outer` }, null, -1), c(`div`, { class: `v-popper__arrow-inner` }, null, -1)];
function _t(e2, t2, n2, r2, i2, s2) {
  let l2 = a(`ResizeObserver`);
  return g(), u(`div`, { id: e2.popperId, ref: `popover`, class: o([`v-popper__popper`, [e2.themeClass, e2.classes.popperClass, { "v-popper__popper--shown": e2.shown, "v-popper__popper--hidden": !e2.shown, "v-popper__popper--show-from": e2.classes.showFrom, "v-popper__popper--show-to": e2.classes.showTo, "v-popper__popper--hide-from": e2.classes.hideFrom, "v-popper__popper--hide-to": e2.classes.hideTo, "v-popper__popper--skip-transition": e2.skipTransition, "v-popper__popper--arrow-overflow": e2.result && e2.result.arrow.overflow, "v-popper__popper--no-positioning": !e2.result }]]), style: d(e2.result ? { position: e2.result.strategy, transform: `translate3d(${Math.round(e2.result.x)}px,${Math.round(e2.result.y)}px,0)` } : void 0), "aria-hidden": e2.shown ? `false` : `true`, tabindex: e2.autoHide ? 0 : void 0, "data-popper-placement": e2.result ? e2.result.placement : void 0, onKeyup: t2[2] || (t2[2] = ae((t3) => e2.autoHide && e2.$emit(`hide`), [`esc`])) }, [c(`div`, { class: `v-popper__backdrop`, onClick: t2[0] || (t2[0] = (t3) => e2.autoHide && e2.$emit(`hide`)) }), c(`div`, { class: `v-popper__wrapper`, style: d(e2.result ? { transformOrigin: e2.result.transformOrigin } : void 0) }, [c(`div`, ht, [e2.mounted ? (g(), u(ee, { key: 0 }, [c(`div`, null, [b(e2.$slots, `default`)]), e2.handleResize ? (g(), v(l2, { key: 0, onNotify: t2[1] || (t2[1] = (t3) => e2.$emit(`resize`, t3)) })) : re(``, true)], 64)) : re(``, true)], 512), c(`div`, { ref: `arrow`, class: `v-popper__arrow-container`, style: d(e2.result ? { left: e2.toPx(e2.result.arrow.x), top: e2.toPx(e2.result.arrow.y) } : void 0) }, gt, 4)], 4)], 46, mt);
}
var vt = Y(pt, [[`render`, _t]]), yt = { methods: { show(...e2) {
  return this.$refs.popper.show(...e2);
}, hide(...e2) {
  return this.$refs.popper.hide(...e2);
}, dispose(...e2) {
  return this.$refs.popper.dispose(...e2);
}, onResize(...e2) {
  return this.$refs.popper.onResize(...e2);
} } }, bt = function() {
};
typeof window < `u` && (bt = window.Element);
var xt = h({ name: `VPopperWrapper`, components: { Popper: st, PopperContent: vt }, mixins: [yt, ft(`finalTheme`)], props: { theme: { type: String, default: null }, referenceNode: { type: Function, default: null }, shown: { type: Boolean, default: false }, showGroup: { type: String, default: null }, ariaId: { default: null }, disabled: { type: Boolean, default: void 0 }, positioningDisabled: { type: Boolean, default: void 0 }, placement: { type: String, default: void 0 }, delay: { type: [String, Number, Object], default: void 0 }, distance: { type: [Number, String], default: void 0 }, skidding: { type: [Number, String], default: void 0 }, triggers: { type: Array, default: void 0 }, showTriggers: { type: [Array, Function], default: void 0 }, hideTriggers: { type: [Array, Function], default: void 0 }, popperTriggers: { type: Array, default: void 0 }, popperShowTriggers: { type: [Array, Function], default: void 0 }, popperHideTriggers: { type: [Array, Function], default: void 0 }, container: { type: [String, Object, bt, Boolean], default: void 0 }, boundary: { type: [String, bt], default: void 0 }, strategy: { type: String, default: void 0 }, autoHide: { type: [Boolean, Function], default: void 0 }, handleResize: { type: Boolean, default: void 0 }, instantMove: { type: Boolean, default: void 0 }, eagerMount: { type: Boolean, default: void 0 }, popperClass: { type: [String, Array, Object], default: void 0 }, computeTransformOrigin: { type: Boolean, default: void 0 }, autoMinSize: { type: Boolean, default: void 0 }, autoSize: { type: [Boolean, String], default: void 0 }, autoMaxSize: { type: Boolean, default: void 0 }, autoBoundaryMaxSize: { type: Boolean, default: void 0 }, preventOverflow: { type: Boolean, default: void 0 }, overflowPadding: { type: [Number, String], default: void 0 }, arrowPadding: { type: [Number, String], default: void 0 }, arrowOverflow: { type: Boolean, default: void 0 }, flip: { type: Boolean, default: void 0 }, shift: { type: Boolean, default: void 0 }, shiftCrossAxis: { type: Boolean, default: void 0 }, noAutoFocus: { type: Boolean, default: void 0 }, disposeTimeout: { type: Number, default: void 0 } }, emits: { show: () => true, hide: () => true, "update:shown": (e2) => true, "apply-show": () => true, "apply-hide": () => true, "close-group": () => true, "close-directive": () => true, "auto-hide": () => true, resize: () => true }, computed: { finalTheme() {
  return this.theme ?? this.$options.vPopperTheme;
} }, methods: { getTargetNodes() {
  return Array.from(this.$el.children).filter((e2) => e2 !== this.$refs.popperContent.$el);
} } });
function St(e2, t2, r2, i2, o2, s2) {
  let c2 = a(`PopperContent`), l2 = a(`Popper`);
  return g(), v(l2, f({ ref: `popper` }, e2.$props, { theme: e2.finalTheme, "target-nodes": e2.getTargetNodes, "popper-node": () => e2.$refs.popperContent.$el, class: [e2.themeClass], onShow: t2[0] || (t2[0] = () => e2.$emit(`show`)), onHide: t2[1] || (t2[1] = () => e2.$emit(`hide`)), "onUpdate:shown": t2[2] || (t2[2] = (t3) => e2.$emit(`update:shown`, t3)), onApplyShow: t2[3] || (t2[3] = () => e2.$emit(`apply-show`)), onApplyHide: t2[4] || (t2[4] = () => e2.$emit(`apply-hide`)), onCloseGroup: t2[5] || (t2[5] = () => e2.$emit(`close-group`)), onCloseDirective: t2[6] || (t2[6] = () => e2.$emit(`close-directive`)), onAutoHide: t2[7] || (t2[7] = () => e2.$emit(`auto-hide`)), onResize: t2[8] || (t2[8] = () => e2.$emit(`resize`)) }), { default: _(({ popperId: t3, isShown: r3, shouldMountContent: i3, skipTransition: a2, autoHide: o3, show: s3, hide: l3, handleResize: u2, onResize: d2, classes: f2, result: p2 }) => [b(e2.$slots, `default`, { shown: r3, show: s3, hide: l3 }), n(c2, { ref: `popperContent`, "popper-id": t3, theme: e2.finalTheme, shown: r3, mounted: i3, "skip-transition": a2, "auto-hide": o3, "handle-resize": u2, classes: f2, result: p2, onHide: l3, onResize: d2 }, { default: _(() => [b(e2.$slots, `popper`, { shown: r3, hide: l3 })]), _: 2 }, 1032, [`popper-id`, `theme`, `shown`, `mounted`, `skip-transition`, `auto-hide`, `handle-resize`, `classes`, `result`, `onHide`, `onResize`])]), _: 3 }, 16, [`theme`, `target-nodes`, `popper-node`, `class`]);
}
var Ct = Y(xt, [[`render`, St]]), wt = { ...Ct, name: `VDropdown`, vPopperTheme: `dropdown` }, Tt = { ...Ct, name: `VMenu`, vPopperTheme: `menu` }, Et = { ...Ct, name: `VTooltip`, vPopperTheme: `tooltip` }, Dt = h({ name: `VTooltipDirective`, components: { Popper: Qe(), PopperContent: vt }, mixins: [yt], inheritAttrs: false, props: { theme: { type: String, default: `tooltip` }, html: { type: Boolean, default: (e2) => R(e2.theme, `html`) }, content: { type: [String, Number, Function], default: null }, loadingContent: { type: String, default: (e2) => R(e2.theme, `loadingContent`) }, targetNodes: { type: Function, required: true } }, data() {
  return { asyncContent: null };
}, computed: { isContentAsync() {
  return typeof this.content == `function`;
}, loading() {
  return this.isContentAsync && this.asyncContent == null;
}, finalContent() {
  return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
} }, watch: { content: { handler() {
  this.fetchContent(true);
}, immediate: true }, async finalContent() {
  await this.$nextTick(), this.$refs.popper.onResize();
} }, created() {
  this.$_fetchId = 0;
}, methods: { fetchContent(e2) {
  if (typeof this.content == `function` && this.$_isShown && (e2 || !this.$_loading && this.asyncContent == null)) {
    this.asyncContent = null, this.$_loading = true;
    let e3 = ++this.$_fetchId, t2 = this.content(this);
    t2.then ? t2.then((t3) => this.onResult(e3, t3)) : this.onResult(e3, t2);
  }
}, onResult(e2, t2) {
  e2 === this.$_fetchId && (this.$_loading = false, this.asyncContent = t2);
}, onShow() {
  this.$_isShown = true, this.fetchContent();
}, onHide() {
  this.$_isShown = false;
} } }), Ot = [`innerHTML`], kt = [`textContent`];
function At(e2, t2, r2, i2, s2, c2) {
  let l2 = a(`PopperContent`), d2 = a(`Popper`);
  return g(), v(d2, f({ ref: `popper` }, e2.$attrs, { theme: e2.theme, "target-nodes": e2.targetNodes, "popper-node": () => e2.$refs.popperContent.$el, onApplyShow: e2.onShow, onApplyHide: e2.onHide }), { default: _(({ popperId: t3, isShown: r3, shouldMountContent: i3, skipTransition: a2, autoHide: s3, hide: c3, handleResize: d3, onResize: f2, classes: p2, result: m2 }) => [n(l2, { ref: `popperContent`, class: o({ "v-popper--tooltip-loading": e2.loading }), "popper-id": t3, theme: e2.theme, shown: r3, mounted: i3, "skip-transition": a2, "auto-hide": s3, "handle-resize": d3, classes: p2, result: m2, onHide: c3, onResize: f2 }, { default: _(() => [e2.html ? (g(), u(`div`, { key: 0, innerHTML: e2.finalContent }, null, 8, Ot)) : (g(), u(`div`, { key: 1, textContent: te(e2.finalContent) }, null, 8, kt))]), _: 2 }, 1032, [`class`, `popper-id`, `theme`, `shown`, `mounted`, `skip-transition`, `auto-hide`, `handle-resize`, `classes`, `result`, `onHide`, `onResize`])]), _: 1 }, 16, [`theme`, `target-nodes`, `popper-node`, `onApplyShow`, `onApplyHide`]);
}
var jt = Y(Dt, [[`render`, At]]), Mt = `v-popper--has-tooltip`;
function Nt(e2, t2) {
  let n2 = e2.placement;
  if (!n2 && t2) for (let e3 of We) t2[e3] && (n2 = e3);
  return n2 || (n2 = R(e2.theme || `tooltip`, `placement`)), n2;
}
function Pt(e2, t2, n2) {
  let r2, i2 = typeof t2;
  return r2 = i2 === `string` ? { content: t2 } : t2 && i2 === `object` ? t2 : { content: false }, r2.placement = Nt(r2, n2), r2.targetNodes = () => [e2], r2.referenceNode = () => e2, r2;
}
var Ft, Q, It = 0;
function Lt() {
  if (Ft) return;
  Q = y([]), Ft = oe({ name: `VTooltipDirectiveApp`, setup() {
    return { directives: Q };
  }, render() {
    return this.directives.map((e3) => t(jt, { ...e3.options, shown: e3.shown || e3.options.shown, key: e3.id }));
  }, devtools: { hide: true } });
  let e2 = document.createElement(`div`);
  document.body.appendChild(e2), Ft.mount(e2);
}
function Rt(e2, t2, n2) {
  Lt();
  let r2 = y(Pt(e2, t2, n2)), i2 = y(false), a2 = { id: It++, options: r2, shown: i2 };
  return Q.value.push(a2), e2.classList && e2.classList.add(Mt), e2.$_popper = { options: r2, item: a2, show() {
    i2.value = true;
  }, hide() {
    i2.value = false;
  } };
}
function zt(e2) {
  if (e2.$_popper) {
    let t2 = Q.value.indexOf(e2.$_popper.item);
    t2 !== -1 && Q.value.splice(t2, 1), delete e2.$_popper, delete e2.$_popperOldShown, delete e2.$_popperMountTarget;
  }
  e2.classList && e2.classList.remove(Mt);
}
function Bt(e2, { value: t2, modifiers: n2 }) {
  let r2 = Pt(e2, t2, n2);
  if (!r2.content || R(r2.theme || `tooltip`, `disabled`)) zt(e2);
  else {
    let i2;
    e2.$_popper ? (i2 = e2.$_popper, i2.options.value = r2) : i2 = Rt(e2, t2, n2), typeof t2.shown < `u` && t2.shown !== e2.$_popperOldShown && (e2.$_popperOldShown = t2.shown, t2.shown ? i2.show() : i2.hide());
  }
}
var Vt = { beforeMount: Bt, updated: Bt, beforeUnmount(e2) {
  zt(e2);
} };
function Ht(e2) {
  e2.addEventListener(`mousedown`, $), e2.addEventListener(`click`, $), e2.addEventListener(`touchstart`, Wt, z ? { passive: true } : false);
}
function Ut(e2) {
  e2.removeEventListener(`mousedown`, $), e2.removeEventListener(`click`, $), e2.removeEventListener(`touchstart`, Wt), e2.removeEventListener(`touchend`, Gt), e2.removeEventListener(`touchcancel`, Kt);
}
function $(e2) {
  let t2 = e2.currentTarget;
  e2.closePopover = !t2.$_vclosepopover_touch, e2.closeAllPopover = t2.$_closePopoverModifiers && !!t2.$_closePopoverModifiers.all;
}
function Wt(e2) {
  if (e2.changedTouches.length === 1) {
    let t2 = e2.currentTarget;
    t2.$_vclosepopover_touch = true, t2.$_vclosepopover_touchPoint = e2.changedTouches[0], t2.addEventListener(`touchend`, Gt), t2.addEventListener(`touchcancel`, Kt);
  }
}
function Gt(e2) {
  let t2 = e2.currentTarget;
  if (t2.$_vclosepopover_touch = false, e2.changedTouches.length === 1) {
    let n2 = e2.changedTouches[0], r2 = t2.$_vclosepopover_touchPoint;
    e2.closePopover = Math.abs(n2.screenY - r2.screenY) < 20 && Math.abs(n2.screenX - r2.screenX) < 20, e2.closeAllPopover = t2.$_closePopoverModifiers && !!t2.$_closePopoverModifiers.all;
  }
}
function Kt(e2) {
  let t2 = e2.currentTarget;
  t2.$_vclosepopover_touch = false;
}
var qt = { beforeMount(e2, { value: t2, modifiers: n2 }) {
  e2.$_closePopoverModifiers = n2, (typeof t2 > `u` || t2) && Ht(e2);
}, updated(e2, { value: t2, oldValue: n2, modifiers: r2 }) {
  e2.$_closePopoverModifiers = r2, t2 !== n2 && (typeof t2 > `u` || t2 ? Ht(e2) : Ut(e2));
}, beforeUnmount(e2) {
  Ut(e2);
} };
function Jt(e2, t2 = {}) {
  e2.$_vTooltipInstalled || (e2.$_vTooltipInstalled = true, Be(L, t2), e2.directive(`tooltip`, Vt), e2.directive(`close-popper`, qt), e2.component(`VTooltip`, Et), e2.component(`VDropdown`, wt), e2.component(`VMenu`, Tt));
}
var Yt = { version: `5.2.2`, install: Jt, options: L }, Xt = { viewBox: `0 0 384 512`, width: `0.75em`, height: `1em` };
function Zt(e2, t2) {
  return g(), u(`svg`, Xt, [...t2[0] || (t2[0] = [c(`path`, { fill: `currentColor`, d: `M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z` }, null, -1)])]);
}
var Qt = p({ name: `fa6-solid-xmark`, render: Zt }), $t = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='currentColor'%20d='M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16%20c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432%20c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z'%20/%3e%3c/g%3e%3c/svg%3e`, en = { viewBox: `0 0 320 512`, width: `0.63em`, height: `1em` };
function tn(e2, t2) {
  return g(), u(`svg`, en, [...t2[0] || (t2[0] = [c(`path`, { fill: `currentColor`, d: `M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256L73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z` }, null, -1)])]);
}
var nn = p({ name: `fa6-solid-chevron-right`, render: tn });
export {
  be as a,
  Yt as i,
  $t as n,
  Qt as r,
  nn as t
};
