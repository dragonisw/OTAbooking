import { D as e, E as t, Ht as n, J as r, On as i, Yt as a, Zn as o, _ as s, b as c, er as l, ft as u, g as d, k as f, mt as p, qt as m, rt as h, tr as g, un as _, v, vn as y, xt as b, y as x } from "./runtime-core.esm-bundler-DCPO6ZWt.js";
import { c as S, i as C, s as w } from "./vue.runtime.esm-bundler-COAiykEs.js";
import { t as T, y as E } from "./Button-BArxwKIq.js";
import { i as ee } from "./vue-router-BY1VLoSx.js";
import { t as D } from "./Tooltip-DkuatXWt.js";
import { t as te } from "./Tree-D7mU_mDV.js";
import { t as O } from "./DropdownMenu-D7g-btv3.js";
import { t as k } from "./Badge-BtUXFb0u.js";
import { t as ne } from "./Popover-B45T_X0m.js";
import { n as A } from "./index.browser-DTH_RVqO.js";
import { n as j, t as M } from "./DashboardNavbar-BDcOUCmr.js";
import { t as N } from "./color-GoDPwdl-.js";
import { n as P, r as re, t as ie } from "./WizardTreeItem-0TZxtfy4.js";
function F(e2) {
  "@babel/helpers - typeof";
  return F = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == `function` && e3.constructor === Symbol && e3 !== Symbol.prototype ? `symbol` : typeof e3;
  }, F(e2);
}
var ae = /^\s+/, oe = /\s+$/;
function I(e2, t2) {
  if (e2 || (e2 = ``), t2 || (t2 = {}), e2 instanceof I) return e2;
  if (!(this instanceof I)) return new I(e2, t2);
  var n2 = se(e2);
  this._originalInput = e2, this._r = n2.r, this._g = n2.g, this._b = n2.b, this._a = n2.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t2.format || n2.format, this._gradientType = t2.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = n2.ok;
}
I.prototype = { isDark: function() {
  return this.getBrightness() < 128;
}, isLight: function() {
  return !this.isDark();
}, isValid: function() {
  return this._ok;
}, getOriginalInput: function() {
  return this._originalInput;
}, getFormat: function() {
  return this._format;
}, getAlpha: function() {
  return this._a;
}, getBrightness: function() {
  var e2 = this.toRgb();
  return (e2.r * 299 + e2.g * 587 + e2.b * 114) / 1e3;
}, getLuminance: function() {
  var e2 = this.toRgb(), t2, n2, r2, i2, a2, o2;
  return t2 = e2.r / 255, n2 = e2.g / 255, r2 = e2.b / 255, i2 = t2 <= 0.03928 ? t2 / 12.92 : ((t2 + 0.055) / 1.055) ** 2.4, a2 = n2 <= 0.03928 ? n2 / 12.92 : ((n2 + 0.055) / 1.055) ** 2.4, o2 = r2 <= 0.03928 ? r2 / 12.92 : ((r2 + 0.055) / 1.055) ** 2.4, 0.2126 * i2 + 0.7152 * a2 + 0.0722 * o2;
}, setAlpha: function(e2) {
  return this._a = Oe(e2), this._roundA = Math.round(100 * this._a) / 100, this;
}, toHsv: function() {
  var e2 = le(this._r, this._g, this._b);
  return { h: e2.h * 360, s: e2.s, v: e2.v, a: this._a };
}, toHsvString: function() {
  var e2 = le(this._r, this._g, this._b), t2 = Math.round(e2.h * 360), n2 = Math.round(e2.s * 100), r2 = Math.round(e2.v * 100);
  return this._a == 1 ? `hsv(` + t2 + `, ` + n2 + `%, ` + r2 + `%)` : `hsva(` + t2 + `, ` + n2 + `%, ` + r2 + `%, ` + this._roundA + `)`;
}, toHsl: function() {
  var e2 = R(this._r, this._g, this._b);
  return { h: e2.h * 360, s: e2.s, l: e2.l, a: this._a };
}, toHslString: function() {
  var e2 = R(this._r, this._g, this._b), t2 = Math.round(e2.h * 360), n2 = Math.round(e2.s * 100), r2 = Math.round(e2.l * 100);
  return this._a == 1 ? `hsl(` + t2 + `, ` + n2 + `%, ` + r2 + `%)` : `hsla(` + t2 + `, ` + n2 + `%, ` + r2 + `%, ` + this._roundA + `)`;
}, toHex: function(e2) {
  return de(this._r, this._g, this._b, e2);
}, toHexString: function(e2) {
  return `#` + this.toHex(e2);
}, toHex8: function(e2) {
  return fe(this._r, this._g, this._b, this._a, e2);
}, toHex8String: function(e2) {
  return `#` + this.toHex8(e2);
}, toRgb: function() {
  return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
}, toRgbString: function() {
  return this._a == 1 ? `rgb(` + Math.round(this._r) + `, ` + Math.round(this._g) + `, ` + Math.round(this._b) + `)` : `rgba(` + Math.round(this._r) + `, ` + Math.round(this._g) + `, ` + Math.round(this._b) + `, ` + this._roundA + `)`;
}, toPercentageRgb: function() {
  return { r: Math.round(B(this._r, 255) * 100) + `%`, g: Math.round(B(this._g, 255) * 100) + `%`, b: Math.round(B(this._b, 255) * 100) + `%`, a: this._a };
}, toPercentageRgbString: function() {
  return this._a == 1 ? `rgb(` + Math.round(B(this._r, 255) * 100) + `%, ` + Math.round(B(this._g, 255) * 100) + `%, ` + Math.round(B(this._b, 255) * 100) + `%)` : `rgba(` + Math.round(B(this._r, 255) * 100) + `%, ` + Math.round(B(this._g, 255) * 100) + `%, ` + Math.round(B(this._b, 255) * 100) + `%, ` + this._roundA + `)`;
}, toName: function() {
  return this._a === 0 ? `transparent` : this._a < 1 ? false : Ee[de(this._r, this._g, this._b, true)] || false;
}, toFilter: function(e2) {
  var t2 = `#` + pe(this._r, this._g, this._b, this._a), n2 = t2, r2 = this._gradientType ? `GradientType = 1, ` : ``;
  if (e2) {
    var i2 = I(e2);
    n2 = `#` + pe(i2._r, i2._g, i2._b, i2._a);
  }
  return `progid:DXImageTransform.Microsoft.gradient(` + r2 + `startColorstr=` + t2 + `,endColorstr=` + n2 + `)`;
}, toString: function(e2) {
  var t2 = !!e2;
  e2 || (e2 = this._format);
  var n2 = false, r2 = this._a < 1 && this._a >= 0;
  return !t2 && r2 && (e2 === `hex` || e2 === `hex6` || e2 === `hex3` || e2 === `hex4` || e2 === `hex8` || e2 === `name`) ? e2 === `name` && this._a === 0 ? this.toName() : this.toRgbString() : (e2 === `rgb` && (n2 = this.toRgbString()), e2 === `prgb` && (n2 = this.toPercentageRgbString()), (e2 === `hex` || e2 === `hex6`) && (n2 = this.toHexString()), e2 === `hex3` && (n2 = this.toHexString(true)), e2 === `hex4` && (n2 = this.toHex8String(true)), e2 === `hex8` && (n2 = this.toHex8String()), e2 === `name` && (n2 = this.toName()), e2 === `hsl` && (n2 = this.toHslString()), e2 === `hsv` && (n2 = this.toHsvString()), n2 || this.toHexString());
}, clone: function() {
  return I(this.toString());
}, _applyModification: function(e2, t2) {
  var n2 = e2.apply(null, [this].concat([].slice.call(t2)));
  return this._r = n2._r, this._g = n2._g, this._b = n2._b, this.setAlpha(n2._a), this;
}, lighten: function() {
  return this._applyModification(_e, arguments);
}, brighten: function() {
  return this._applyModification(ve, arguments);
}, darken: function() {
  return this._applyModification(ye, arguments);
}, desaturate: function() {
  return this._applyModification(me, arguments);
}, saturate: function() {
  return this._applyModification(he, arguments);
}, greyscale: function() {
  return this._applyModification(ge, arguments);
}, spin: function() {
  return this._applyModification(be, arguments);
}, _applyCombination: function(e2, t2) {
  return e2.apply(null, [this].concat([].slice.call(t2)));
}, analogous: function() {
  return this._applyCombination(we, arguments);
}, complement: function() {
  return this._applyCombination(xe, arguments);
}, monochromatic: function() {
  return this._applyCombination(Te, arguments);
}, splitcomplement: function() {
  return this._applyCombination(Ce, arguments);
}, triad: function() {
  return this._applyCombination(Se, [3]);
}, tetrad: function() {
  return this._applyCombination(Se, [4]);
} }, I.fromRatio = function(e2, t2) {
  if (F(e2) == `object`) {
    var n2 = {};
    for (var r2 in e2) e2.hasOwnProperty(r2) && (r2 === `a` ? n2[r2] = e2[r2] : n2[r2] = W(e2[r2]));
    e2 = n2;
  }
  return I(e2, t2);
};
function se(e2) {
  var t2 = { r: 0, g: 0, b: 0 }, n2 = 1, r2 = null, i2 = null, a2 = null, o2 = false, s2 = false;
  return typeof e2 == `string` && (e2 = Ne(e2)), F(e2) == `object` && (K(e2.r) && K(e2.g) && K(e2.b) ? (t2 = L(e2.r, e2.g, e2.b), o2 = true, s2 = String(e2.r).substr(-1) === `%` ? `prgb` : `rgb`) : K(e2.h) && K(e2.s) && K(e2.v) ? (r2 = W(e2.s), i2 = W(e2.v), t2 = ue(e2.h, r2, i2), o2 = true, s2 = `hsv`) : K(e2.h) && K(e2.s) && K(e2.l) && (r2 = W(e2.s), a2 = W(e2.l), t2 = ce(e2.h, r2, a2), o2 = true, s2 = `hsl`), e2.hasOwnProperty(`a`) && (n2 = e2.a)), n2 = Oe(n2), { ok: o2, format: e2.format || s2, r: Math.min(255, Math.max(t2.r, 0)), g: Math.min(255, Math.max(t2.g, 0)), b: Math.min(255, Math.max(t2.b, 0)), a: n2 };
}
function L(e2, t2, n2) {
  return { r: B(e2, 255) * 255, g: B(t2, 255) * 255, b: B(n2, 255) * 255 };
}
function R(e2, t2, n2) {
  e2 = B(e2, 255), t2 = B(t2, 255), n2 = B(n2, 255);
  var r2 = Math.max(e2, t2, n2), i2 = Math.min(e2, t2, n2), a2, o2, s2 = (r2 + i2) / 2;
  if (r2 == i2) a2 = o2 = 0;
  else {
    var c2 = r2 - i2;
    switch (o2 = s2 > 0.5 ? c2 / (2 - r2 - i2) : c2 / (r2 + i2), r2) {
      case e2:
        a2 = (t2 - n2) / c2 + (t2 < n2 ? 6 : 0);
        break;
      case t2:
        a2 = (n2 - e2) / c2 + 2;
        break;
      case n2:
        a2 = (e2 - t2) / c2 + 4;
        break;
    }
    a2 /= 6;
  }
  return { h: a2, s: o2, l: s2 };
}
function ce(e2, t2, n2) {
  var r2, i2, a2;
  e2 = B(e2, 360), t2 = B(t2, 100), n2 = B(n2, 100);
  function o2(e3, t3, n3) {
    return n3 < 0 && (n3 += 1), n3 > 1 && --n3, n3 < 1 / 6 ? e3 + (t3 - e3) * 6 * n3 : n3 < 1 / 2 ? t3 : n3 < 2 / 3 ? e3 + (t3 - e3) * (2 / 3 - n3) * 6 : e3;
  }
  if (t2 === 0) r2 = i2 = a2 = n2;
  else {
    var s2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, c2 = 2 * n2 - s2;
    r2 = o2(c2, s2, e2 + 1 / 3), i2 = o2(c2, s2, e2), a2 = o2(c2, s2, e2 - 1 / 3);
  }
  return { r: r2 * 255, g: i2 * 255, b: a2 * 255 };
}
function le(e2, t2, n2) {
  e2 = B(e2, 255), t2 = B(t2, 255), n2 = B(n2, 255);
  var r2 = Math.max(e2, t2, n2), i2 = Math.min(e2, t2, n2), a2, o2, s2 = r2, c2 = r2 - i2;
  if (o2 = r2 === 0 ? 0 : c2 / r2, r2 == i2) a2 = 0;
  else {
    switch (r2) {
      case e2:
        a2 = (t2 - n2) / c2 + (t2 < n2 ? 6 : 0);
        break;
      case t2:
        a2 = (n2 - e2) / c2 + 2;
        break;
      case n2:
        a2 = (e2 - t2) / c2 + 4;
        break;
    }
    a2 /= 6;
  }
  return { h: a2, s: o2, v: s2 };
}
function ue(e2, t2, n2) {
  e2 = B(e2, 360) * 6, t2 = B(t2, 100), n2 = B(n2, 100);
  var r2 = Math.floor(e2), i2 = e2 - r2, a2 = n2 * (1 - t2), o2 = n2 * (1 - i2 * t2), s2 = n2 * (1 - (1 - i2) * t2), c2 = r2 % 6, l2 = [n2, o2, a2, a2, s2, n2][c2], u2 = [s2, n2, n2, o2, a2, a2][c2], d2 = [a2, a2, s2, n2, n2, o2][c2];
  return { r: l2 * 255, g: u2 * 255, b: d2 * 255 };
}
function de(e2, t2, n2, r2) {
  var i2 = [U(Math.round(e2).toString(16)), U(Math.round(t2).toString(16)), U(Math.round(n2).toString(16))];
  return r2 && i2[0].charAt(0) == i2[0].charAt(1) && i2[1].charAt(0) == i2[1].charAt(1) && i2[2].charAt(0) == i2[2].charAt(1) ? i2[0].charAt(0) + i2[1].charAt(0) + i2[2].charAt(0) : i2.join(``);
}
function fe(e2, t2, n2, r2, i2) {
  var a2 = [U(Math.round(e2).toString(16)), U(Math.round(t2).toString(16)), U(Math.round(n2).toString(16)), U(je(r2))];
  return i2 && a2[0].charAt(0) == a2[0].charAt(1) && a2[1].charAt(0) == a2[1].charAt(1) && a2[2].charAt(0) == a2[2].charAt(1) && a2[3].charAt(0) == a2[3].charAt(1) ? a2[0].charAt(0) + a2[1].charAt(0) + a2[2].charAt(0) + a2[3].charAt(0) : a2.join(``);
}
function pe(e2, t2, n2, r2) {
  return [U(je(r2)), U(Math.round(e2).toString(16)), U(Math.round(t2).toString(16)), U(Math.round(n2).toString(16))].join(``);
}
I.equals = function(e2, t2) {
  return !e2 || !t2 ? false : I(e2).toRgbString() == I(t2).toRgbString();
}, I.random = function() {
  return I.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
};
function me(e2, t2) {
  t2 = t2 === 0 ? 0 : t2 || 10;
  var n2 = I(e2).toHsl();
  return n2.s -= t2 / 100, n2.s = V(n2.s), I(n2);
}
function he(e2, t2) {
  t2 = t2 === 0 ? 0 : t2 || 10;
  var n2 = I(e2).toHsl();
  return n2.s += t2 / 100, n2.s = V(n2.s), I(n2);
}
function ge(e2) {
  return I(e2).desaturate(100);
}
function _e(e2, t2) {
  t2 = t2 === 0 ? 0 : t2 || 10;
  var n2 = I(e2).toHsl();
  return n2.l += t2 / 100, n2.l = V(n2.l), I(n2);
}
function ve(e2, t2) {
  t2 = t2 === 0 ? 0 : t2 || 10;
  var n2 = I(e2).toRgb();
  return n2.r = Math.max(0, Math.min(255, n2.r - Math.round(255 * -(t2 / 100)))), n2.g = Math.max(0, Math.min(255, n2.g - Math.round(255 * -(t2 / 100)))), n2.b = Math.max(0, Math.min(255, n2.b - Math.round(255 * -(t2 / 100)))), I(n2);
}
function ye(e2, t2) {
  t2 = t2 === 0 ? 0 : t2 || 10;
  var n2 = I(e2).toHsl();
  return n2.l -= t2 / 100, n2.l = V(n2.l), I(n2);
}
function be(e2, t2) {
  var n2 = I(e2).toHsl(), r2 = (n2.h + t2) % 360;
  return n2.h = r2 < 0 ? 360 + r2 : r2, I(n2);
}
function xe(e2) {
  var t2 = I(e2).toHsl();
  return t2.h = (t2.h + 180) % 360, I(t2);
}
function Se(e2, t2) {
  if (isNaN(t2) || t2 <= 0) throw Error(`Argument to polyad must be a positive number`);
  for (var n2 = I(e2).toHsl(), r2 = [I(e2)], i2 = 360 / t2, a2 = 1; a2 < t2; a2++) r2.push(I({ h: (n2.h + a2 * i2) % 360, s: n2.s, l: n2.l }));
  return r2;
}
function Ce(e2) {
  var t2 = I(e2).toHsl(), n2 = t2.h;
  return [I(e2), I({ h: (n2 + 72) % 360, s: t2.s, l: t2.l }), I({ h: (n2 + 216) % 360, s: t2.s, l: t2.l })];
}
function we(e2, t2, n2) {
  t2 || (t2 = 6), n2 || (n2 = 30);
  var r2 = I(e2).toHsl(), i2 = 360 / n2, a2 = [I(e2)];
  for (r2.h = (r2.h - (i2 * t2 >> 1) + 720) % 360; --t2; ) r2.h = (r2.h + i2) % 360, a2.push(I(r2));
  return a2;
}
function Te(e2, t2) {
  t2 || (t2 = 6);
  for (var n2 = I(e2).toHsv(), r2 = n2.h, i2 = n2.s, a2 = n2.v, o2 = [], s2 = 1 / t2; t2--; ) o2.push(I({ h: r2, s: i2, v: a2 })), a2 = (a2 + s2) % 1;
  return o2;
}
I.mix = function(e2, t2, n2) {
  n2 = n2 === 0 ? 0 : n2 || 50;
  var r2 = I(e2).toRgb(), i2 = I(t2).toRgb(), a2 = n2 / 100;
  return I({ r: (i2.r - r2.r) * a2 + r2.r, g: (i2.g - r2.g) * a2 + r2.g, b: (i2.b - r2.b) * a2 + r2.b, a: (i2.a - r2.a) * a2 + r2.a });
}, I.readability = function(e2, t2) {
  var n2 = I(e2), r2 = I(t2);
  return (Math.max(n2.getLuminance(), r2.getLuminance()) + 0.05) / (Math.min(n2.getLuminance(), r2.getLuminance()) + 0.05);
}, I.isReadable = function(e2, t2, n2) {
  var r2 = I.readability(e2, t2), i2, a2;
  switch (a2 = false, i2 = Pe(n2), i2.level + i2.size) {
    case `AAsmall`:
    case `AAAlarge`:
      a2 = r2 >= 4.5;
      break;
    case `AAlarge`:
      a2 = r2 >= 3;
      break;
    case `AAAsmall`:
      a2 = r2 >= 7;
      break;
  }
  return a2;
}, I.mostReadable = function(e2, t2, n2) {
  var r2 = null, i2 = 0, a2, o2, s2, c2;
  n2 || (n2 = {}), o2 = n2.includeFallbackColors, s2 = n2.level, c2 = n2.size;
  for (var l2 = 0; l2 < t2.length; l2++) a2 = I.readability(e2, t2[l2]), a2 > i2 && (i2 = a2, r2 = I(t2[l2]));
  return I.isReadable(e2, r2, { level: s2, size: c2 }) || !o2 ? r2 : (n2.includeFallbackColors = false, I.mostReadable(e2, [`#fff`, `#000`], n2));
};
var z = I.names = { aliceblue: `f0f8ff`, antiquewhite: `faebd7`, aqua: `0ff`, aquamarine: `7fffd4`, azure: `f0ffff`, beige: `f5f5dc`, bisque: `ffe4c4`, black: `000`, blanchedalmond: `ffebcd`, blue: `00f`, blueviolet: `8a2be2`, brown: `a52a2a`, burlywood: `deb887`, burntsienna: `ea7e5d`, cadetblue: `5f9ea0`, chartreuse: `7fff00`, chocolate: `d2691e`, coral: `ff7f50`, cornflowerblue: `6495ed`, cornsilk: `fff8dc`, crimson: `dc143c`, cyan: `0ff`, darkblue: `00008b`, darkcyan: `008b8b`, darkgoldenrod: `b8860b`, darkgray: `a9a9a9`, darkgreen: `006400`, darkgrey: `a9a9a9`, darkkhaki: `bdb76b`, darkmagenta: `8b008b`, darkolivegreen: `556b2f`, darkorange: `ff8c00`, darkorchid: `9932cc`, darkred: `8b0000`, darksalmon: `e9967a`, darkseagreen: `8fbc8f`, darkslateblue: `483d8b`, darkslategray: `2f4f4f`, darkslategrey: `2f4f4f`, darkturquoise: `00ced1`, darkviolet: `9400d3`, deeppink: `ff1493`, deepskyblue: `00bfff`, dimgray: `696969`, dimgrey: `696969`, dodgerblue: `1e90ff`, firebrick: `b22222`, floralwhite: `fffaf0`, forestgreen: `228b22`, fuchsia: `f0f`, gainsboro: `dcdcdc`, ghostwhite: `f8f8ff`, gold: `ffd700`, goldenrod: `daa520`, gray: `808080`, green: `008000`, greenyellow: `adff2f`, grey: `808080`, honeydew: `f0fff0`, hotpink: `ff69b4`, indianred: `cd5c5c`, indigo: `4b0082`, ivory: `fffff0`, khaki: `f0e68c`, lavender: `e6e6fa`, lavenderblush: `fff0f5`, lawngreen: `7cfc00`, lemonchiffon: `fffacd`, lightblue: `add8e6`, lightcoral: `f08080`, lightcyan: `e0ffff`, lightgoldenrodyellow: `fafad2`, lightgray: `d3d3d3`, lightgreen: `90ee90`, lightgrey: `d3d3d3`, lightpink: `ffb6c1`, lightsalmon: `ffa07a`, lightseagreen: `20b2aa`, lightskyblue: `87cefa`, lightslategray: `789`, lightslategrey: `789`, lightsteelblue: `b0c4de`, lightyellow: `ffffe0`, lime: `0f0`, limegreen: `32cd32`, linen: `faf0e6`, magenta: `f0f`, maroon: `800000`, mediumaquamarine: `66cdaa`, mediumblue: `0000cd`, mediumorchid: `ba55d3`, mediumpurple: `9370db`, mediumseagreen: `3cb371`, mediumslateblue: `7b68ee`, mediumspringgreen: `00fa9a`, mediumturquoise: `48d1cc`, mediumvioletred: `c71585`, midnightblue: `191970`, mintcream: `f5fffa`, mistyrose: `ffe4e1`, moccasin: `ffe4b5`, navajowhite: `ffdead`, navy: `000080`, oldlace: `fdf5e6`, olive: `808000`, olivedrab: `6b8e23`, orange: `ffa500`, orangered: `ff4500`, orchid: `da70d6`, palegoldenrod: `eee8aa`, palegreen: `98fb98`, paleturquoise: `afeeee`, palevioletred: `db7093`, papayawhip: `ffefd5`, peachpuff: `ffdab9`, peru: `cd853f`, pink: `ffc0cb`, plum: `dda0dd`, powderblue: `b0e0e6`, purple: `800080`, rebeccapurple: `663399`, red: `f00`, rosybrown: `bc8f8f`, royalblue: `4169e1`, saddlebrown: `8b4513`, salmon: `fa8072`, sandybrown: `f4a460`, seagreen: `2e8b57`, seashell: `fff5ee`, sienna: `a0522d`, silver: `c0c0c0`, skyblue: `87ceeb`, slateblue: `6a5acd`, slategray: `708090`, slategrey: `708090`, snow: `fffafa`, springgreen: `00ff7f`, steelblue: `4682b4`, tan: `d2b48c`, teal: `008080`, thistle: `d8bfd8`, tomato: `ff6347`, turquoise: `40e0d0`, violet: `ee82ee`, wheat: `f5deb3`, white: `fff`, whitesmoke: `f5f5f5`, yellow: `ff0`, yellowgreen: `9acd32` }, Ee = I.hexNames = De(z);
function De(e2) {
  var t2 = {};
  for (var n2 in e2) e2.hasOwnProperty(n2) && (t2[e2[n2]] = n2);
  return t2;
}
function Oe(e2) {
  return e2 = parseFloat(e2), (isNaN(e2) || e2 < 0 || e2 > 1) && (e2 = 1), e2;
}
function B(e2, t2) {
  ke(e2) && (e2 = `100%`);
  var n2 = Ae(e2);
  return e2 = Math.min(t2, Math.max(0, parseFloat(e2))), n2 && (e2 = parseInt(e2 * t2, 10) / 100), Math.abs(e2 - t2) < 1e-6 ? 1 : e2 % t2 / parseFloat(t2);
}
function V(e2) {
  return Math.min(1, Math.max(0, e2));
}
function H(e2) {
  return parseInt(e2, 16);
}
function ke(e2) {
  return typeof e2 == `string` && e2.indexOf(`.`) != -1 && parseFloat(e2) === 1;
}
function Ae(e2) {
  return typeof e2 == `string` && e2.indexOf(`%`) != -1;
}
function U(e2) {
  return e2.length == 1 ? `0` + e2 : `` + e2;
}
function W(e2) {
  return e2 <= 1 && (e2 = e2 * 100 + `%`), e2;
}
function je(e2) {
  return Math.round(parseFloat(e2) * 255).toString(16);
}
function Me(e2) {
  return H(e2) / 255;
}
var G = (function() {
  var e2 = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`, t2 = `[\\s|\\(]+(` + e2 + `)[,|\\s]+(` + e2 + `)[,|\\s]+(` + e2 + `)\\s*\\)?`, n2 = `[\\s|\\(]+(` + e2 + `)[,|\\s]+(` + e2 + `)[,|\\s]+(` + e2 + `)[,|\\s]+(` + e2 + `)\\s*\\)?`;
  return { CSS_UNIT: new RegExp(e2), rgb: RegExp(`rgb` + t2), rgba: RegExp(`rgba` + n2), hsl: RegExp(`hsl` + t2), hsla: RegExp(`hsla` + n2), hsv: RegExp(`hsv` + t2), hsva: RegExp(`hsva` + n2), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
})();
function K(e2) {
  return !!G.CSS_UNIT.exec(e2);
}
function Ne(e2) {
  e2 = e2.replace(ae, ``).replace(oe, ``).toLowerCase();
  var t2 = false;
  if (z[e2]) e2 = z[e2], t2 = true;
  else if (e2 == `transparent`) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  var n2;
  return (n2 = G.rgb.exec(e2)) ? { r: n2[1], g: n2[2], b: n2[3] } : (n2 = G.rgba.exec(e2)) ? { r: n2[1], g: n2[2], b: n2[3], a: n2[4] } : (n2 = G.hsl.exec(e2)) ? { h: n2[1], s: n2[2], l: n2[3] } : (n2 = G.hsla.exec(e2)) ? { h: n2[1], s: n2[2], l: n2[3], a: n2[4] } : (n2 = G.hsv.exec(e2)) ? { h: n2[1], s: n2[2], v: n2[3] } : (n2 = G.hsva.exec(e2)) ? { h: n2[1], s: n2[2], v: n2[3], a: n2[4] } : (n2 = G.hex8.exec(e2)) ? { r: H(n2[1]), g: H(n2[2]), b: H(n2[3]), a: Me(n2[4]), format: t2 ? `name` : `hex8` } : (n2 = G.hex6.exec(e2)) ? { r: H(n2[1]), g: H(n2[2]), b: H(n2[3]), format: t2 ? `name` : `hex` } : (n2 = G.hex4.exec(e2)) ? { r: H(n2[1] + `` + n2[1]), g: H(n2[2] + `` + n2[2]), b: H(n2[3] + `` + n2[3]), a: Me(n2[4] + `` + n2[4]), format: t2 ? `name` : `hex8` } : (n2 = G.hex3.exec(e2)) ? { r: H(n2[1] + `` + n2[1]), g: H(n2[2] + `` + n2[2]), b: H(n2[3] + `` + n2[3]), format: t2 ? `name` : `hex` } : false;
}
function Pe(e2) {
  var t2, n2;
  return e2 || (e2 = { level: `AA`, size: `small` }), t2 = (e2.level || `AA`).toUpperCase(), n2 = (e2.size || `small`).toLowerCase(), t2 !== `AA` && t2 !== `AAA` && (t2 = `AA`), n2 !== `small` && n2 !== `large` && (n2 = `small`), { level: t2, size: n2 };
}
var Fe = (e2, t2, n2 = false) => {
  if (n2) switch (t2) {
    case `rgb`:
      return e2.toRgb();
    case `prgb`:
      return e2.toPercentageRgb();
    case `hsl`:
      return e2.toHsl();
    case `hsv`:
      return e2.toHsv();
    default:
      return null;
  }
  else {
    let n3 = t2;
    t2 === `hex` && e2.getAlpha() < 1 && (n3 = `hex8`);
    let r2 = e2.toString(n3);
    try {
      r2 = JSON.parse(r2);
    } catch {
    }
    return r2;
  }
}, q = (e2, t2) => !!(Object.prototype.hasOwnProperty.call(e2, t2) && typeof e2[t2] < `u`), J = (e2) => typeof e2 > `u`, Y = [`update:tinyColor`, `update:modelValue`, `input`];
function X(e2, t2, n2) {
  let r2, i2, a2 = d({ get: () => {
    let { modelValue: t3, tinyColor: n3, value: a3 } = e2, o3 = n3 ?? t3 ?? a3;
    return J(i2) && (J(a3) || (i2 = I(a3).getFormat()), J(t3) || (i2 = I(t3).getFormat())), J(r2) && (typeof a3 == `object` && !(a3 instanceof I) && (r2 = true), typeof t3 == `object` && (r2 = true)), I(o3);
  }, set: (e3) => {
    o2(e3);
  } }), o2 = (n3) => {
    let a3 = I(n3);
    q(e2, `tinyColor`) && t2(`update:tinyColor`, a3), q(e2, `modelValue`) && t2(`update:modelValue`, Fe(a3, i2, r2)), q(e2, `value`) && t2(`input`, Fe(a3, i2, r2));
  };
  return a2;
}
var Ie = (e2) => {
  let t2 = { x: 0, y: 0 };
  return e2 instanceof MouseEvent && (t2.x = e2.pageX, t2.y = e2.pageY), typeof TouchEvent < `u` && e2 instanceof TouchEvent && (t2.x = e2.touches?.[0] ? e2.touches[0].pageX : e2.changedTouches?.[0] ? e2.changedTouches[0].pageX : 0, t2.y = e2.touches?.[0] ? e2.touches[0].pageY : e2.changedTouches?.[0] ? e2.changedTouches[0].pageY : 0), t2;
}, Le = () => ({ x: window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || 0, y: window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0 }), Re = (e2) => {
  let { x: t2, y: n2 } = Le(), r2 = e2.getBoundingClientRect();
  return { x: r2.left + t2, y: r2.top + n2 };
}, Z = (e2) => e2.code === `ArrowUp` || e2.keyCode === 38 ? `up` : e2.code === `ArrowDown` || e2.keyCode === 40 ? `down` : e2.code === `ArrowLeft` || e2.keyCode === 37 ? `left` : e2.code === `ArrowRight` || e2.keyCode === 39 ? `right` : null;
function ze(e2) {
  let t2 = e2.toString();
  return t2.indexOf(`.`) === -1 ? 0 : t2.split(`.`)[1].length;
}
function Be(e2, t2, n2) {
  return Math.min(Math.max(e2, t2), n2);
}
var Ve = (e2, t2 = 20) => {
  let n2, r2, i2;
  return (...a2) => {
    n2 ? (clearTimeout(r2), r2 = setTimeout(() => {
      Date.now() - i2 >= t2 && (e2(...a2), i2 = Date.now());
    }, Math.max(t2 - (Date.now() - i2), 0))) : (e2(...a2), i2 = Date.now(), n2 = true);
  };
}, He = [`aria-valuetext`], Ue = f({ __name: `SaturationSlider`, props: { hue: {}, tinyColor: {}, modelValue: {}, value: {} }, emits: [`change`].concat(Y), setup(e2, { emit: t2 }) {
  let n2 = t2, r2 = e2, i2 = y(0), a2 = X(r2, n2), o2 = d(() => a2.value.toHsv()), f2 = d(() => r2.hue ?? o2.value.h), m2 = d(() => `hsl(${f2.value}, 100%, 50%)`), h2 = d(() => -(o2.value.v * 100) + 1 + 100 + `%`), g2 = d(() => o2.value.v <= 0.01 ? i2.value * 100 + `%` : o2.value.s * 100 + `%`), _2 = y(null);
  function v2(e3) {
    let t3 = _2.value;
    if (!t3) return;
    let n3 = t3.clientWidth, r3 = t3.clientHeight, { x: a3, y: s2 } = Re(t3), { x: c2, y: l2 } = Ie(e3), u2 = Be(c2 - a3, 0, n3), d2 = Be(l2 - s2, 0, r3), p2 = u2 / n3, m3 = Be(1 - d2 / r3, 0, 1);
    i2.value = p2;
    let h3 = Math.round(p2 * 100), g3 = Math.round(m3 * 100);
    h3 === 1 && (h3 = 0.01), g3 === 1 && (g3 = 0.01), b2({ h: f2.value, s: h3, v: g3, a: o2.value.a });
  }
  function b2(e3) {
    a2.value = e3;
  }
  let x2 = Ve(v2, 20);
  function S2(e3) {
    e3.preventDefault(), e3.type.startsWith(`mouse`) ? (window.addEventListener(`mousemove`, x2), window.addEventListener(`mouseup`, x2), window.addEventListener(`mouseup`, C2)) : e3.type.startsWith(`touch`) && (window.addEventListener(`touchmove`, x2), window.addEventListener(`touchend`, x2), window.addEventListener(`touchend`, C2));
  }
  function C2() {
    w2();
  }
  function w2() {
    window.removeEventListener(`mousemove`, x2), window.removeEventListener(`mouseup`, x2), window.removeEventListener(`mouseup`, C2), window.removeEventListener(`touchmove`, x2), window.removeEventListener(`touchend`, x2), window.removeEventListener(`touchend`, C2);
  }
  function T2(e3) {
    switch (e3.preventDefault(), Z(e3)) {
      case `left`: {
        let e4 = o2.value.s - 0.01;
        b2({ ...o2.value, s: e4 >= 0 ? e4 : 0 });
        break;
      }
      case `right`: {
        let e4 = o2.value.s + 0.01;
        b2({ ...o2.value, s: e4 > 1 ? 1 : e4 });
        break;
      }
      case `up`: {
        let e4 = o2.value.v + 0.01;
        b2({ ...o2.value, v: e4 > 1 ? 1 : e4 });
        break;
      }
      case `down`: {
        let e4 = o2.value.v - 0.01;
        b2({ ...o2.value, v: e4 < 0 ? 0 : e4 });
        break;
      }
    }
  }
  return u(() => {
    w2();
  }), (e3, t3) => (p(), c(`div`, { class: `vc-saturation-slider bg`, style: l({ background: m2.value }), ref_key: `containerRef`, ref: _2, onMousedown: S2, onTouchstart: S2, role: `application`, "aria-label": `Saturation and brightness picker` }, [t3[1] || (t3[1] = s(`div`, { class: `bg white` }, null, -1)), t3[2] || (t3[2] = s(`div`, { class: `bg black` }, null, -1)), s(`div`, { class: `picker-wrap`, style: l({ top: h2.value, left: g2.value }), role: `slider`, tabindex: `0`, "aria-valuemin": `0`, "aria-valuemax": `1`, "aria-label": `press arrow to change saturation or brightness`, "aria-valuenow": `?`, "aria-valuetext": `saturation: ${o2.value.s.toFixed(0)}%, brightness: ${o2.value.v.toFixed(0)}%`, onKeydown: T2 }, t3[0] || (t3[0] = [s(`div`, { class: `picker` }, null, -1)]), 44, He)], 36));
} }), Q = (e2, t2) => {
  let n2 = e2.__vccOpts || e2;
  for (let [e3, r2] of t2) n2[e3] = r2;
  return n2;
}, We = Q(Ue, [[`__scopeId`, `data-v-4d048d6e`]]), Ge = (e2) => typeof e2 < `u`, Ke = { class: `vc-base-slider` }, qe = { key: 0, class: `background` }, Je = [`aria-label`, `aria-valuemax`, `aria-valuenow`], Ye = Q(f({ __name: `BaseSlider`, props: { direction: { default: `horizontal` }, modelValue: { default: 0 }, value: { default: 0 }, max: { default: 100 }, step: {}, ariaLabel: { default: `slider` } }, emits: [`input`, `update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = d(() => n2.modelValue ?? n2.value), a2 = d(() => {
    let e3 = i2.value / n2.max;
    return n2.direction === `vertical` && (e3 = 1 - e3), 100 * e3 + `%`;
  }), f2 = y(null);
  function m2(e3) {
    Ge(e3) && (r2(`input`, e3), r2(`update:modelValue`, e3));
  }
  function h2(e3) {
    let { direction: t3, max: r3 } = n2, i3 = f2.value;
    if (!i3) return;
    let a3 = i3.clientWidth, o2 = i3.clientHeight, { x: s2, y: c2 } = Re(i3), { x: l2, y: u2 } = Ie(e3), d2 = l2 - s2, p2 = u2 - c2, h3;
    h3 = t3 === `vertical` ? p2 < 0 ? r3 : p2 > o2 ? 0 : (1 - p2 / o2) * r3 : d2 < 0 ? 0 : d2 > a3 ? r3 : d2 / a3 * r3, m2(h3);
  }
  let g2 = Ve(h2);
  function _2(e3) {
    h2(e3), e3.type.startsWith(`mouse`) ? (window.addEventListener(`mousemove`, g2), window.addEventListener(`mouseup`, v2)) : (window.addEventListener(`touchmove`, g2), window.addEventListener(`touchend`, v2));
  }
  function v2() {
    S2();
  }
  function S2() {
    window.removeEventListener(`mousemove`, g2), window.removeEventListener(`mouseup`, v2), window.removeEventListener(`touchmove`, g2), window.removeEventListener(`touchend`, v2);
  }
  function C2(e3) {
    e3.preventDefault();
    let { direction: t3, max: r3 } = n2, a3 = Z(e3), o2 = n2.step ?? r3 / 100, s2 = i2.value, c2;
    switch (a3) {
      case `left`:
        if (t3 !== `horizontal`) return;
        c2 = s2 - o2 < 0 ? 0 : s2 - o2;
        break;
      case `right`:
        if (t3 !== `horizontal`) return;
        c2 = s2 + o2 > r3 ? r3 : s2 + o2;
        break;
      case `down`:
        if (t3 !== `vertical`) return;
        c2 = s2 - o2 < 0 ? 0 : s2 - o2;
        break;
      case `up`:
        if (t3 !== `vertical`) return;
        c2 = s2 + o2 > r3 ? r3 : s2 + o2;
        break;
    }
    m2(c2);
  }
  return u(() => {
    S2();
  }), (e3, t3) => (p(), c(`div`, Ke, [e3.$slots.background ? (p(), c(`div`, qe, [b(e3.$slots, `background`, {}, void 0, true)])) : x(``, true), s(`div`, { class: o({ slider: true, horizontal: e3.direction === `horizontal`, vertical: e3.direction === `vertical` }), ref_key: `containerRef`, ref: f2, onMousedown: _2, onTouchstart: _2, role: `slider`, "aria-label": e3.ariaLabel, "aria-valuemax": e3.max, "aria-valuemin": `0`, "aria-valuenow": i2.value.toFixed(1), tabindex: `0`, onKeydown: C2 }, [s(`div`, { class: `picker-wrap`, style: l({ left: e3.direction === `horizontal` ? a2.value : 0, top: e3.direction === `vertical` ? a2.value : 0 }), role: `presentation` }, [b(e3.$slots, `picker`, {}, () => [t3[0] || (t3[0] = s(`div`, { class: `picker` }, null, -1))], true)], 4)], 42, Je)]));
} }), [[`__scopeId`, `data-v-972b0fad`]]), Xe = Q(f({ __name: `HueSlider`, props: { direction: { default: `horizontal` }, modelValue: { default: 0 } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  C((e3) => ({ "2f44f39d": a2.value }));
  let r2 = e2, i2 = t2, a2 = d(() => `linear-gradient(to ${r2.direction === `horizontal` ? `right` : `top`}, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`), o2 = d(() => {
    let e3 = Number(r2.modelValue);
    return Number.isNaN(e3) ? 0 : e3;
  }), c2 = y();
  n(o2, (e3, t3) => {
    e3 !== 0 && e3 - t3 > 0 && (c2.value = `right`), e3 !== 0 && e3 - t3 < 0 && (c2.value = `left`);
  });
  let l2 = d(() => r2.direction === `vertical` ? o2.value === 0 && c2.value === `right` ? 0 : o2.value : r2.direction === `horizontal` ? o2.value === 0 && c2.value === `right` ? 360 : o2.value : 0);
  function u2(e3) {
    f2(Math.round(e3));
  }
  function f2(e3) {
    i2(`update:modelValue`, e3);
  }
  return (e3, t3) => (p(), v(Ye, { class: `vc-hue-slider`, max: 360, step: 1, modelValue: l2.value, direction: e3.direction, "onUpdate:modelValue": u2, "aria-label": `Hue` }, { background: m(() => t3[0] || (t3[0] = [s(`div`, { class: `gradient` }, null, -1)])), picker: m(() => [b(e3.$slots, `default`, {}, void 0, true)]), _: 3 }, 8, [`modelValue`, `direction`]));
} }), [[`__scopeId`, `data-v-5367c985`]]), Ze = Q(f({ __name: `CheckerboardBG`, props: { size: { default: 8 }, white: { default: `#fff` }, grey: { default: `#e6e6e6` } }, setup(e2) {
  let t2 = e2;
  function n2(e3, t3, n3) {
    if (typeof document > `u`) return null;
    var r3 = document.createElement(`canvas`);
    r3.width = r3.height = n3 * 2;
    var i3 = r3.getContext(`2d`);
    return i3 ? (i3.fillStyle = e3, i3.fillRect(0, 0, r3.width, r3.height), i3.fillStyle = t3, i3.fillRect(0, 0, n3, n3), i3.translate(n3, n3), i3.fillRect(0, 0, n3, n3), r3.toDataURL()) : null;
  }
  function r2(e3, t3, r3) {
    return n2(e3, t3, r3);
  }
  let i2 = d(() => `url(${r2(t2.white, t2.grey, t2.size)})`);
  return (e3, t3) => (p(), c(`div`, { class: `vc-checkerboard`, style: l({ backgroundImage: i2.value }) }, null, 4));
} }), [[`__scopeId`, `data-v-37d61ccd`]]), Qe = Q(f({ __name: `AlphaSlider`, props: { tinyColor: {}, modelValue: {}, value: {} }, emits: Y, setup(t2, { emit: n2 }) {
  let r2 = X(t2, n2), i2 = d(() => {
    let e2 = r2.value.toRgb(), t3 = [e2.r, e2.g, e2.b].join(`,`);
    return `linear-gradient(to right, rgba(` + t3 + `, 0) 0%, rgba(` + t3 + `, 1) 100%)`;
  }), a2 = d(() => r2.value.getAlpha());
  function o2(e2) {
    r2.value = r2.value.setAlpha(e2).clone();
  }
  return (t3, n3) => (p(), v(Ye, { class: `vc-alpha-slider`, modelValue: a2.value, max: 1, "aria-label": `Transparency`, "onUpdate:modelValue": o2 }, { background: m(() => [e(Ze), s(`div`, { class: `gradient`, style: l({ background: i2.value }) }, null, 4)]), _: 1 }, 8, [`modelValue`]));
} }), [[`__scopeId`, `data-v-07dd346b`]]), $e = { class: `vc-editable-input` }, et = [`value`, `aria-label`], tt = { key: 0, class: `vc-input-desc`, "aria-hidden": `true` }, $ = Q(f({ __name: `EditableInput`, props: { value: {}, label: {}, desc: {}, max: {}, min: {}, step: { default: 1 }, a11y: {} }, emits: [`change`, `blur`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, a2 = n2.a11y?.label ?? n2.label, o2 = `input__label__${a2}__${Math.random().toString().slice(2, 5)}`;
  function l2(e3) {
    let { min: t3, max: i2 } = n2;
    if (Ge(i2) && +e3 > i2) {
      r2(`change`, i2);
      return;
    }
    if (Ge(t3) && +e3 < t3) {
      r2(`change`, t3);
      return;
    }
    r2(`change`, e3);
  }
  function u2(e3) {
    l2(e3.target?.value);
  }
  function d2(e3) {
    r2(`blur`, e3);
  }
  function f2(e3) {
    let t3 = Number(n2.value);
    if (!isNaN(t3)) {
      let r3 = n2.step, i2 = ze(r3), a3 = Z(e3);
      a3 === `up` && (l2((t3 + r3).toFixed(i2)), e3.preventDefault()), a3 === `down` && (l2((t3 - r3).toFixed(i2)), e3.preventDefault());
    }
  }
  return (e3, t3) => (p(), c(`div`, $e, [s(`input`, { class: `vc-input-input`, value: n2.value, onKeydown: f2, onInput: u2, onBlur: d2, "aria-label": i(a2), id: o2 }, null, 40, et), s(`label`, { for: o2, class: `vc-input-label`, "aria-hidden": `true` }, g(n2.label), 1), e3.desc ? (p(), c(`span`, tt, g(e3.desc), 1)) : x(``, true)]));
} }), [[`__scopeId`, `data-v-9c267b2b`]]), nt = (e2) => I(e2).isValid(), rt = f({ __name: `HexInput`, props: { value: {}, label: {}, desc: {}, a11y: {}, type: { default: `hex` }, withHash: { type: Boolean, default: false } }, emits: [`change`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = { label: r2.type === `hex` ? `Hex` : `Hex with transparency`, ...r2.a11y }, o2 = (e3, t3 = `hex`) => {
    let n2 = ``;
    return t3 === `hex` && (n2 = I(e3).toHexString()), t3 === `hex8` && (n2 = I(e3).toHex8String()), r2.withHash !== true && (n2 = n2.replace(`#`, ``)), n2;
  }, s2 = y(o2(r2.value, r2.type));
  n(() => r2.value, (e3) => {
    I.equals(e3, s2.value) || (s2.value = o2(e3, r2.type));
  });
  let c2 = (e3) => {
    if (!e3) return;
    s2.value = e3;
    let t3 = e3.length;
    e3[0] === `#` && --t3, !(r2.type === `hex` && t3 % 3 != 0 && t3 !== 8) && (r2.type === `hex8` && t3 !== 8 || nt(e3) && i2(`change`, e3));
  }, l2 = () => {
    let e3 = s2.value.length;
    s2.value[0] === `#` && --e3, !(nt(s2.value) && (r2.type === `hex` && e3 === 6 || r2.type === `hex8` && e3 === 8)) && (s2.value = o2(r2.value, r2.type));
  };
  return (e3, t3) => (p(), v($, { label: r2.label, a11y: a2, value: s2.value, onChange: c2, onBlur: l2 }, null, 8, [`label`, `value`]));
} });
function it() {
  let e2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  return e2.charAt(Math.floor(Math.random() * 62)) + e2.charAt(Math.floor(Math.random() * 62));
}
var at = (e2) => {
  let t2 = y(0), r2 = `__from__vc__hue__${it()}`;
  return n(e2, (e3) => {
    if (e3[r2]) return;
    let n2 = e3.toHsl().h;
    n2 === 0 && t2.value !== 0 || (t2.value = n2);
  }, { immediate: true }), { hueRef: t2, updateHueRef: (n2) => {
    let i2 = I({ ...e2.value.toHsl(), h: n2 });
    i2[r2] = true, e2.value = i2, t2.value = n2;
  } };
}, ot = { class: `saturation` }, st = { class: `body` }, ct = { class: `controls` }, lt = { class: `color-wrap` }, ut = [`aria-label`], dt = { class: `sliders` }, ft = { class: `hue-wrap` }, pt = { key: 0, class: `alpha-wrap` }, mt = { key: 0, class: `fieldsWrap`, "data-testid": `fields` }, ht = { key: 0, class: `fields` }, gt = { class: `field` }, _t = { class: `field` }, vt = { class: `field` }, yt = { key: 0, class: `field` }, bt = { key: 1, class: `fields` }, xt = { class: `field` }, St = { key: 2, class: `fields` }, Ct = { class: `field` }, wt = { class: `field` }, Tt = { class: `field` }, Et = { key: 0, class: `field` }, Dt = { class: `toggle-icon`, role: `presentation` }, Ot = { style: { width: `24px`, height: `24px` }, viewBox: `0 0 24 24` }, kt = { class: `toggle-icon_highlighted`, role: `presentation` }, At = Q(f({ __name: `ChromePicker`, props: { disableAlpha: { type: Boolean }, disableFields: { type: Boolean }, formats: { default: () => [`rgb`, `hex`, `hsl`] }, tinyColor: {}, modelValue: {}, value: {} }, emits: Y, setup(t2, { emit: n2 }) {
  let r2 = t2, u2 = X(r2, n2), { hueRef: f2, updateHueRef: m2 } = at(u2), h2 = y(0), g2 = y(false), b2 = d(() => {
    let e2 = u2.value.toRgb();
    return `rgba(` + [e2.r, e2.g, e2.b, u2.value.getAlpha()].join(`,`) + `)`;
  }), C2 = d(() => {
    let { h: e2, s: t3, l: n3 } = u2.value.toHsl();
    return { h: e2.toFixed(), s: `${(t3 * 100).toFixed()}%`, l: `${(n3 * 100).toFixed()}%` };
  }), T2 = d(() => u2.value.toRgb()), E2 = d(() => Number(u2.value.getAlpha().toFixed(2))), ee2 = /* @__PURE__ */ new Set([`hex`, `hsl`, `rgb`]), D2 = d(() => {
    let e2 = /* @__PURE__ */ new Set(), t3 = [], n3 = r2.formats;
    for (let r3 of n3) if (ee2.has(r3)) {
      let n4 = r3;
      e2.has(n4) || (e2.add(n4), t3.push(n4));
    }
    return t3;
  }), te2 = d(() => {
    let { disableFields: e2, formats: t3 } = r2;
    return !(e2 === true || !Array.isArray(t3) || D2.value.length === 0);
  }), O2 = (e2) => D2.value.includes(e2), k2 = (e2) => D2.value.indexOf(e2), ne2 = (e2) => {
    u2.value = e2;
  }, A2 = (e2, t3) => {
    if (!t3 || isNaN(Number(t3))) return;
    let n3 = { [e2]: t3 };
    u2.value = { ...T2.value, a: E2.value, ...n3 };
  }, j2 = (e2, t3) => {
    if (!t3) return;
    let n3 = { [e2]: +t3 };
    (e2 === `s` || e2 === `l`) && (n3[e2] = t3.replace(`%`, ``) / 100), u2.value = { ...u2.value.toHsl(), a: E2.value, ...n3 };
  }, M2 = () => {
    if (h2.value === D2.value.length - 1) {
      h2.value = 0;
      return;
    }
    h2.value++;
  }, N2 = () => {
    g2.value = true;
  }, P2 = () => {
    g2.value = false;
  };
  return (t3, n3) => (p(), c(`div`, { role: `application`, "aria-label": `Chrome Color Picker`, class: o([`vc-chrome-picker`, t3.disableAlpha ? `alpha-disabled` : ``]) }, [s(`div`, ot, [e(We, { tinyColor: i(u2), "onUpdate:tinyColor": n3[0] || (n3[0] = (e2) => _(u2) ? u2.value = e2 : null), hue: i(f2) }, null, 8, [`tinyColor`, `hue`])]), s(`div`, st, [s(`div`, ct, [s(`div`, lt, [s(`div`, { class: `active-color`, style: l({ backgroundColor: b2.value }), role: `presentation`, "aria-live": `polite`, "aria-label": `Current color is ${b2.value}` }, null, 12, ut), r2.disableAlpha ? x(``, true) : (p(), v(Ze, { key: 0 }))]), s(`div`, dt, [s(`div`, ft, [e(Xe, { modelValue: i(f2), "onUpdate:modelValue": i(m2) }, null, 8, [`modelValue`, `onUpdate:modelValue`])]), r2.disableAlpha ? x(``, true) : (p(), c(`div`, pt, [e(Qe, { tinyColor: i(u2), "onUpdate:tinyColor": n3[1] || (n3[1] = (e2) => _(u2) ? u2.value = e2 : null) }, null, 8, [`tinyColor`])]))])]), te2.value ? (p(), c(`div`, mt, [O2(`rgb`) ? a((p(), c(`div`, ht, [s(`div`, gt, [e($, { label: `r`, value: T2.value.r, onChange: n3[2] || (n3[2] = (e2) => A2(`r`, e2)), a11y: { label: `Red` } }, null, 8, [`value`])]), s(`div`, _t, [e($, { label: `g`, value: T2.value.g, onChange: n3[3] || (n3[3] = (e2) => A2(`g`, e2)), a11y: { label: `Green` } }, null, 8, [`value`])]), s(`div`, vt, [e($, { label: `b`, value: T2.value.b, onChange: n3[4] || (n3[4] = (e2) => A2(`b`, e2)), a11y: { label: `Blue` } }, null, 8, [`value`])]), t3.disableAlpha ? x(``, true) : (p(), c(`div`, yt, [e($, { label: `a`, value: E2.value, step: 0.01, max: 1, onChange: n3[5] || (n3[5] = (e2) => A2(`a`, e2)), a11y: { label: `Transparency` } }, null, 8, [`value`])]))], 512)), [[w, h2.value === k2(`rgb`)]]) : x(``, true), O2(`hex`) ? a((p(), c(`div`, bt, [s(`div`, xt, [e(rt, { type: E2.value === 1 ? `hex` : `hex8`, label: `hex`, value: i(u2).toHex8String(), onChange: ne2, "with-hash": true }, null, 8, [`type`, `value`])])], 512)), [[w, h2.value === k2(`hex`)]]) : x(``, true), O2(`hsl`) ? a((p(), c(`div`, St, [s(`div`, Ct, [e($, { label: `h`, value: i(f2).toFixed(), onChange: n3[6] || (n3[6] = (e2) => j2(`h`, e2)), a11y: { label: `Hue` } }, null, 8, [`value`])]), s(`div`, wt, [e($, { label: `s`, value: C2.value.s, onChange: n3[7] || (n3[7] = (e2) => j2(`s`, e2)), a11y: { label: `Saturation` } }, null, 8, [`value`])]), s(`div`, Tt, [e($, { label: `l`, value: C2.value.l, onChange: n3[8] || (n3[8] = (e2) => j2(`l`, e2)), a11y: { label: `Lightness` } }, null, 8, [`value`])]), t3.disableAlpha ? x(``, true) : (p(), c(`div`, Et, [e($, { label: `a`, value: E2.value, step: 0.01, max: 1, onChange: n3[9] || (n3[9] = (e2) => j2(`a`, e2)), a11y: { label: `Transparency` } }, null, 8, [`value`])]))], 512)), [[w, h2.value === k2(`hsl`)]]) : x(``, true), D2.value.length > 1 ? (p(), c(`div`, { key: 3, class: `toggle-btn`, onClick: M2, onKeydown: [S(M2, [`enter`]), S(M2, [`space`])], onMouseover: N2, onMouseenter: N2, onMouseout: P2, onFocus: N2, onBlur: P2, role: `button`, "aria-label": `Change color format`, tabindex: `0` }, [s(`div`, Dt, [(p(), c(`svg`, Ot, n3[10] || (n3[10] = [s(`path`, { fill: `currentColor`, d: `M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z` }, null, -1)])))]), a(s(`div`, kt, null, 512), [[w, i(g2)]])], 32)) : x(``, true)])) : x(``, true)])], 2));
} }), [[`__scopeId`, `data-v-dfdde7e0`]]);
[`change`].concat(Y), [`change`].concat(Y), Y.concat([`ok`, `cancel`, `reset`]), [`change`].concat(Y);
var jt = { stone: { 0: `oklch(99% 0.0033 72)`, 5: `oklch(94.9% 0.0066 72)`, 10: `oklch(90.8% 0.0172 72)`, 20: `oklch(82.6% 0.0287 72)`, 30: `oklch(74.4% 0.04 72)`, 40: `oklch(66.2% 0.044 72)`, 50: `oklch(58% 0.045 72)`, 60: `oklch(49.8% 0.033 72)`, 70: `oklch(41.6% 0.0275 72)`, 80: `oklch(33.4% 0.022 72)`, 90: `oklch(25.2% 0.0105 72)`, 95: `oklch(21.1% 0.0079 72)`, 100: `oklch(17% 0.0053 72)` }, gray: { 0: `oklch(98.48% 0 none)`, 5: `oklch(96.5% 0 none)`, 10: `oklch(90% 0 none)`, 20: `oklch(82% 0 none)`, 30: `oklch(73.5% 0 none)`, 40: `oklch(65% 0 none)`, 50: `oklch(55.2% 0 none)`, 60: `oklch(48% 0 none)`, 70: `oklch(39.5% 0 none)`, 80: `oklch(31% 0 none)`, 90: `oklch(23.5% 0 none)`, 95: `oklch(18.5% 0 none)`, 100: `oklch(14.5% 0 none)` }, grey: { 0: `oklch(98.38% 0.0033 249.7)`, 5: `oklch(95.52% 0.0099 270)`, 10: `oklch(90% 0.014 272)`, 20: `oklch(82% 0.02 272)`, 30: `oklch(73.5% 0.027 272)`, 40: `oklch(65% 0.032 273)`, 50: `oklch(55.2% 0.035 273)`, 60: `oklch(48% 0.032 273)`, 70: `oklch(39.5% 0.027 273)`, 80: `oklch(31% 0.022 273)`, 90: `oklch(23.5% 0.016 273)`, 95: `oklch(18.5% 0.012 273)`, 100: `oklch(14.5% 0.009 273)` }, slate: { 0: `oklch(98.07% 0.0092 257.1)`, 5: `oklch(96.15% 0.0181 267.3)`, 10: `oklch(90.16% 0.0352 268.2)`, 20: `oklch(82.16% 0.045 268.2)`, 30: `oklch(74.16% 0.069 268.2)`, 40: `oklch(63.99% 0.0804 266.1)`, 50: `oklch(55.43% 0.0949 263.4)`, 60: `oklch(45.03% 0.0817 265.9)`, 70: `oklch(39% 0.0702 263.9)`, 80: `oklch(32.14% 0.0604 264.8)`, 90: `oklch(27.33% 0.0536 264.8)`, 95: `oklch(21.5% 0.0573 267.4)`, 100: `oklch(17.5% 0.0688 267.4)` }, brown: { 0: `oklch(97% 0.0161 47.15)`, 5: `oklch(95.48% 0.0229 34.84)`, 10: `oklch(88.65% 0.0606 33.36)`, 20: `oklch(81.37% 0.1065 33.59)`, 30: `oklch(74.39% 0.12 32.5)`, 40: `oklch(67.62% 0.12 32.5)`, 50: `oklch(61.9% 0.12 32.5)`, 60: `oklch(55.58% 0.12 32.5)`, 70: `oklch(49.11% 0.12 32.5)`, 80: `oklch(42.07% 0.12 32.5)`, 90: `oklch(35.11% 0.12 32.5)`, 95: `oklch(24.7% 0.0958 31.18)`, 100: `oklch(21.21% 0.0822 31.17)` }, orange: { 0: `oklch(96.76% 0.0337 84.59)`, 5: `oklch(94.78% 0.0521 82.97)`, 10: `oklch(89.94% 0.0852 75.65)`, 20: `oklch(82.86% 0.1343 69.21)`, 30: `oklch(75.09% 0.179 58.39)`, 40: `oklch(71.4% 0.1941 48.13)`, 50: `oklch(66.61% 0.2247 36.66)`, 60: `oklch(61.68% 0.2388 31.22)`, 70: `oklch(53.53% 0.2196 29.23)`, 80: `oklch(46.33% 0.1901 29.23)`, 90: `oklch(36.63% 0.1503 29.23)`, 95: `oklch(25.4% 0.1042 29.23)`, 100: `oklch(21.44% 0.088 29.23)` }, amber: { 0: `oklch(97.5% 0.051 98.98)`, 5: `oklch(96.24% 0.0716 98.08)`, 10: `oklch(93.46% 0.1082 95.78)`, 20: `oklch(88.25% 0.1592 91.33)`, 30: `oklch(86% 0.1633 86.92)`, 40: `oklch(83.04% 0.1701 81.13)`, 50: `oklch(79.4% 0.1709 71.06)`, 60: `oklch(73.31% 0.1784 56.52)`, 70: `oklch(63.23% 0.1757 46.71)`, 80: `oklch(53.09% 0.1677 39.66)`, 90: `oklch(42.68% 0.138 38.58)`, 95: `oklch(29.27% 0.0971 37.42)`, 100: `oklch(23.94% 0.0818 36.09)` }, yellow: { 0: `oklch(98.86% 0.0591 107.4)`, 5: `oklch(98.27% 0.0948 108)`, 10: `oklch(97.31% 0.1645 109.1)`, 20: `oklch(95.82% 0.207 108.4)`, 30: `oklch(93.51% 0.1981 104.7)`, 40: `oklch(91.5% 0.1909 101.1)`, 50: `oklch(87.52% 0.1796 94.59)`, 60: `oklch(82.02% 0.169 82.09)`, 70: `oklch(72.04% 0.1592 66.98)`, 80: `oklch(64.84% 0.1477 63.12)`, 90: `oklch(52.17% 0.1199 62.19)`, 95: `oklch(33.35% 0.083 54.56)`, 100: `oklch(26.22% 0.0646 55.44)` }, lime: { 0: `oklch(98.05% 0.0665 116)`, 5: `oklch(96.62% 0.1 121.2)`, 10: `oklch(95.06% 0.1566 121.5)`, 20: `oklch(92.45% 0.2251 126)`, 30: `oklch(87.79% 0.2261 126.9)`, 40: `oklch(82.22% 0.225 131.1)`, 50: `oklch(74.39% 0.2131 133.9)`, 60: `oklch(66.45% 0.195 135.3)`, 70: `oklch(58.7% 0.1769 136.7)`, 80: `oklch(51.46% 0.1612 138.7)`, 90: `oklch(44.54% 0.1437 140.1)`, 95: `oklch(29.84% 0.097 140.4)`, 100: `oklch(25.83% 0.0851 141.1)` }, green: { 0: `oklch(97% 0.0508 145.7)`, 5: `oklch(94.95% 0.0888 145.5)`, 10: `oklch(92.05% 0.1473 145.7)`, 20: `oklch(89.18% 0.2191 143.8)`, 30: `oklch(84.3% 0.24 143.9)`, 40: `oklch(77.68% 0.25 144.1)`, 50: `oklch(72.41% 0.2464 142.5)`, 60: `oklch(67.52% 0.2298 142.5)`, 70: `oklch(58.66% 0.1996 142.5)`, 80: `oklch(51.96% 0.1768 142.5)`, 90: `oklch(44.03% 0.1498 142.5)`, 95: `oklch(30.17% 0.1027 142.5)`, 100: `oklch(26.35% 0.0897 142.5)` }, beryl: { 0: `oklch(96.57% 0.05 163.7)`, 5: `oklch(94.71% 0.0792 163.5)`, 10: `oklch(91.87% 0.128 162.2)`, 20: `oklch(90.33% 0.1569 161.2)`, 30: `oklch(86.43% 0.2104 155.8)`, 40: `oklch(82.49% 0.1978 156.6)`, 50: `oklch(76.89% 0.1885 155.4)`, 60: `oklch(69.77% 0.1794 153.1)`, 70: `oklch(60.74% 0.1602 151.9)`, 80: `oklch(54.36% 0.1421 152.3)`, 90: `oklch(46.09% 0.1213 152)`, 95: `oklch(30.39% 0.0888 147.6)`, 100: `oklch(26.71% 0.0855 144.4)` }, teal: { 0: `oklch(97.24% 0.0384 179.8)`, 5: `oklch(94.3% 0.0826 180.5)`, 10: `oklch(92.33% 0.1148 181.5)`, 20: `oklch(91.3% 0.1327 183.1)`, 30: `oklch(90.52% 0.1472 184.8)`, 40: `oklch(89.99% 0.1577 186.3)`, 50: `oklch(86.13% 0.1485 190.5)`, 60: `oklch(79.38% 0.1355 194.8)`, 70: `oklch(67.86% 0.1154 199.2)`, 80: `oklch(60.62% 0.1033 203.7)`, 90: `oklch(52.19% 0.0898 208.3)`, 95: `oklch(31.94% 0.0584 220.7)`, 100: `oklch(28.34% 0.0534 224.3)` }, cyan: { 0: `oklch(97.47% 0.0367 196.6)`, 5: `oklch(95.05% 0.0748 196)`, 10: `oklch(92.28% 0.1122 196.9)`, 20: `oklch(89.98% 0.1264 200.1)`, 30: `oklch(87.28% 0.1376 204.3)`, 40: `oklch(84.82% 0.1408 209.5)`, 50: `oklch(81.54% 0.1453 216.7)`, 60: `oklch(77.57% 0.1494 226.7)`, 70: `oklch(70.27% 0.1509 235.9)`, 80: `oklch(63.25% 0.1493 241.7)`, 90: `oklch(52.16% 0.1354 246.4)`, 95: `oklch(35.21% 0.0976 249.2)`, 100: `oklch(30.27% 0.0847 249.6)` }, sky: { 0: `oklch(97.39% 0.0232 209.4)`, 5: `oklch(94.65% 0.0448 212.1)`, 10: `oklch(90.51% 0.0725 216.5)`, 20: `oklch(86.58% 0.0902 224)`, 30: `oklch(77.94% 0.1431 228.4)`, 40: `oklch(72.24% 0.1626 239)`, 50: `oklch(67.09% 0.1828 248.5)`, 60: `oklch(62.09% 0.2077 255.4)`, 70: `oklch(55.12% 0.2483 261.6)`, 80: `oklch(49.98% 0.2769 263.8)`, 90: `oklch(40.76% 0.2499 264.2)`, 95: `oklch(28.37% 0.1946 265.1)`, 100: `oklch(25.85% 0.1768 265.4)` }, blue: { 0: `oklch(97.5% 0.0175 219.7)`, 5: `oklch(93.53% 0.0381 231.3)`, 10: `oklch(90.01% 0.0564 236.1)`, 20: `oklch(81.69% 0.0975 246.5)`, 30: `oklch(72.87% 0.1468 249.3)`, 40: `oklch(64.31% 0.1921 258.5)`, 50: `oklch(58.22% 0.2279 263.9)`, 60: `oklch(51.83% 0.2687 266.1)`, 70: `oklch(46.26% 0.3057 266.7)`, 80: `oklch(42.89% 0.2907 266.3)`, 90: `oklch(39.4% 0.2629 268)`, 95: `oklch(28.64% 0.1893 269)`, 100: `oklch(25.46% 0.168 269.2)` }, indigo: { 0: `oklch(97.1% 0.0138 257.2)`, 5: `oklch(94.11% 0.0285 279.6)`, 10: `oklch(87.83% 0.0595 274.4)`, 20: `oklch(77.74% 0.1153 280.2)`, 30: `oklch(70.2% 0.1611 282.9)`, 40: `oklch(61.3% 0.218 284)`, 50: `oklch(56.78% 0.2478 284.1)`, 60: `oklch(50.06% 0.2906 282)`, 70: `oklch(48.74% 0.2963 279.3)`, 80: `oklch(48.25% 0.2976 277.4)`, 90: `oklch(41.46% 0.2571 276.7)`, 95: `oklch(29.36% 0.1799 278.3)`, 100: `oklch(25.28% 0.1551 278.1)` }, violet: { 0: `oklch(97.96% 0.0166 322.8)`, 5: `oklch(94.02% 0.0333 299.5)`, 10: `oklch(88.69% 0.0648 300.1)`, 20: `oklch(80.47% 0.113 297.7)`, 30: `oklch(71.63% 0.1722 298.7)`, 40: `oklch(62.1% 0.237 297.8)`, 50: `oklch(56.23% 0.2803 297.8)`, 60: `oklch(52.55% 0.293 292.4)`, 70: `oklch(51.12% 0.2931 287.9)`, 80: `oklch(48.43% 0.2798 286.7)`, 90: `oklch(40.64% 0.2331 287.9)`, 95: `oklch(28.51% 0.1631 288.3)`, 100: `oklch(24.44% 0.1403 287.8)` }, purple: { 0: `oklch(97.07% 0.0259 325.8)`, 5: `oklch(94.28% 0.0394 314.4)`, 10: `oklch(89.13% 0.0771 314.7)`, 20: `oklch(81.4% 0.1318 312.8)`, 30: `oklch(72.72% 0.2007 312.8)`, 40: `oklch(63.36% 0.2677 310)`, 50: `oklch(58.21% 0.2988 307.2)`, 60: `oklch(55.59% 0.2952 301)`, 70: `oklch(54.45% 0.294 297.9)`, 80: `oklch(48.76% 0.264 297.5)`, 90: `oklch(39.15% 0.2105 298.7)`, 95: `oklch(27.95% 0.1488 300.5)`, 100: `oklch(24.3% 0.128 302.4)` }, fuchsia: { 0: `oklch(97.07% 0.0259 325.8)`, 5: `oklch(94.57% 0.0472 324.9)`, 10: `oklch(89.9% 0.0935 326.3)`, 20: `oklch(81.84% 0.1554 322)`, 30: `oklch(74.78% 0.2085 319.1)`, 40: `oklch(67.61% 0.25 316.5)`, 50: `oklch(62.91% 0.25 316.7)`, 60: `oklch(58.72% 0.25 311.8)`, 70: `oklch(53.61% 0.25 312.8)`, 80: `oklch(47.9% 0.2382 313.2)`, 90: `oklch(38.62% 0.1895 315.8)`, 95: `oklch(27.75% 0.1357 316.4)`, 100: `oklch(23.7% 0.1162 315.9)` }, pink: { 0: `oklch(97.07% 0.0259 325.8)`, 5: `oklch(94.74% 0.0465 326.5)`, 10: `oklch(88.85% 0.0902 332.8)`, 20: `oklch(81.57% 0.1379 341.6)`, 30: `oklch(74.68% 0.2018 342.5)`, 40: `oklch(69.18% 0.2455 347.6)`, 50: `oklch(65.84% 0.25 350.7)`, 60: `oklch(63.54% 0.25 359.2)`, 70: `oklch(58.95% 0.2377 2.647)`, 80: `oklch(53% 0.2126 6.362)`, 90: `oklch(43.66% 0.1748 8.099)`, 95: `oklch(31.48% 0.1261 7.759)`, 100: `oklch(27.42% 0.1098 8.521)` }, crimson: { 0: `oklch(97.07% 0.0259 325.8)`, 5: `oklch(94.2% 0.0332 353.2)`, 10: `oklch(88.09% 0.0677 1.012)`, 20: `oklch(80.33% 0.1184 4.549)`, 30: `oklch(72.9% 0.1774 4.449)`, 40: `oklch(66.41% 0.2325 8.311)`, 50: `oklch(63.55% 0.25 15.3)`, 60: `oklch(62.66% 0.25 21.21)`, 70: `oklch(58.59% 0.2383 26.22)`, 80: `oklch(53.32% 0.2169 26.29)`, 90: `oklch(44.03% 0.1783 24.44)`, 95: `oklch(31.73% 0.1287 25.13)`, 100: `oklch(27.68% 0.1126 26.19)` }, red: { 0: `oklch(96.63% 0.0166 17.2)`, 5: `oklch(94.05% 0.0299 17.02)`, 10: `oklch(87.16% 0.0687 17.78)`, 20: `oklch(79.39% 0.119 18.78)`, 30: `oklch(72.94% 0.1679 17.49)`, 40: `oklch(64.7% 0.2399 19.91)`, 50: `oklch(62.82% 0.25 28.59)`, 60: `oklch(60.94% 0.2501 29.23)`, 70: `oklch(57.58% 0.2363 29.23)`, 80: `oklch(53.09% 0.2178 29.23)`, 90: `oklch(44.45% 0.1824 29.23)`, 95: `oklch(32.59% 0.1337 29.23)`, 100: `oklch(28.54% 0.1171 29.23)` } }, Mt = { class: `text-xs opacity-60 font-normal` }, Nt = { class: `flex-1 overflow-y-auto p-4` }, Pt = { key: 0, class: `flex flex-col items-center justify-center h-full text-center` }, Ft = { class: `text-lg font-semibold text-highlighted mb-2` }, It = { class: `text-dimmed mb-6 max-w-sm` }, Lt = { class: `flex gap-2` }, Rt = [`title`], zt = { class: `sr-only` }, Bt = f({ __name: `Colors`, setup(a2) {
  let o2 = r(`theme`), { expandedTree: u2, items: d2, updateThemeFromItems: f2, findItemByUid: _2, addChild: y2, addNext: b2, deleteItem: x2, initializeItems: S2, findOrCreateItemByKey: C2 } = re(`color`, o2), { shouldBeDimmed: w2, wasRecentlyMoved: F2, isDescendantOf: ae2 } = P(d2, f2, _2);
  n(() => o2.value.namespaces.color, () => {
    S2();
  }, { deep: true });
  function oe2(e2) {
    y2(e2);
  }
  function I2(e2) {
    b2(e2);
  }
  function se2(e2) {
    x2(e2);
  }
  let L2 = [{ name: wp.i18n.__(`Brand Colors`, `windpress`), description: wp.i18n.__(`Primary brand colors for your design system`, `windpress`), colors: { primary: `oklch(58.5% 0.233 277.117)`, secondary: `oklch(62.3% .214 259.815)`, neutral: `oklch(55.4% 0.046 257.417)` } }, { name: wp.i18n.__(`Semantic Colors`, `windpress`), description: wp.i18n.__(`Status and feedback colors`, `windpress`), colors: { success: `oklch(72.3% 0.219 149.579)`, warning: `oklch(79.5% 0.184 86.047)`, error: `oklch(63.7% 0.237 25.331)`, info: `oklch(62.3% 0.214 259.815)` } }, { name: wp.i18n.__(`Neutral Grayscale`, `windpress`), description: wp.i18n.__(`A neutral grayscale palette for backgrounds, text, etc`, `windpress`), colors: { "neutral-50": `oklch(0.985 0 0)`, "neutral-100": `oklch(0.97 0 0)`, "neutral-200": `oklch(0.922 0 0)`, "neutral-300": `oklch(0.87 0 0)`, "neutral-400": `oklch(0.708 0 0)`, "neutral-500": `oklch(0.556 0 0)`, "neutral-600": `oklch(0.439 0 0)`, "neutral-700": `oklch(0.371 0 0)`, "neutral-800": `oklch(0.269 0 0)`, "neutral-900": `oklch(0.205 0 0)`, "neutral-950": `oklch(0.145 0 0)` } }, { name: wp.i18n.__(`Material Design 3`, `windpress`), description: wp.i18n.__(`Material Design 3 color system`, `windpress`), colors: { "md3-primary": `rgb(101 85 143)`, "md3-surface-tint": `rgb(103 80 164)`, "md3-on_primary": `rgb(255 255 255)`, "md3-primary-container": `rgb(234 221 255)`, "md3-on_primary-container": `rgb(79 55 139)`, "md3-secondary": `rgb(98 91 113)`, "md3-on_secondary": `rgb(255 255 255)`, "md3-secondary-container": `rgb(232 222 248)`, "md3-on_secondary-container": `rgb(74 68 88)`, "md3-tertiary": `rgb(125 82 96)`, "md3-on_tertiary": `rgb(255 255 255)`, "md3-tertiary-container": `rgb(255 216 228)`, "md3-on_tertiary-container": `rgb(99 59 72)`, "md3-error": `rgb(179 38 30)`, "md3-on_error": `rgb(255 255 255)`, "md3-error-container": `rgb(249 222 220)`, "md3-on_error-container": `rgb(140 29 24)`, "md3-background": `rgb(254 247 255)`, "md3-on_background": `rgb(29 27 32)`, "md3-surface": `rgb(254 247 255)`, "md3-on_surface": `rgb(29 27 32)`, "md3-surface-variant": `rgb(231 224 236)`, "md3-on_surface-variant": `rgb(73 69 79)`, "md3-outline": `rgb(121 116 126)`, "md3-outline-variant": `rgb(202 196 208)`, "md3-shadow": `rgb(0 0 0)`, "md3-scrim": `rgb(0 0 0)`, "md3-inverse-surface": `rgb(50 47 53)`, "md3-inverse-on_surface": `rgb(245 239 247)`, "md3-inverse-primary": `rgb(208 188 255)`, "md3-primary-fixed": `rgb(234 221 255)`, "md3-on_primary-fixed": `rgb(33 0 93)`, "md3-primary-fixed-dim": `rgb(208 188 255)`, "md3-on_primary-fixed-variant": `rgb(79 55 139)`, "md3-secondary-fixed": `rgb(232 222 248)`, "md3-on_secondary-fixed": `rgb(29 25 43)`, "md3-secondary-fixed-dim": `rgb(204 194 220)`, "md3-on_secondary-fixed-variant": `rgb(74 68 88)`, "md3-tertiary-fixed": `rgb(255 216 228)`, "md3-on_tertiary-fixed": `rgb(49 17 29)`, "md3-tertiary-fixed-dim": `rgb(239 184 200)`, "md3-on_tertiary-fixed-variant": `rgb(99 59 72)`, "md3-surface-dim": `rgb(222 216 225)`, "md3-surface-bright": `rgb(254 247 255)`, "md3-surface-container-lowest": `rgb(255 255 255)`, "md3-surface-container-low": `rgb(247 242 250)`, "md3-surface-container": `rgb(243 237 247)`, "md3-surface-container-high": `rgb(236 230 240)`, "md3-surface-container-highest": `rgb(230 224 233)` } }, ...Object.entries(jt).map(([e2, t2]) => ({ name: `${e2} @ Master Colors v3`, description: `Master Colors v3 \u2014 A precision-crafted P3 color system designed for modern UIs`, colors: Object.fromEntries(Object.entries(t2).map(([t3, n2]) => [`${e2}-${t3}`, n2])) }))];
  function R2(e2) {
    let t2 = [];
    Object.entries(e2.colors).forEach(([e3, n3]) => {
      let r2 = ``, i2 = e3;
      if (e3.includes(`-`)) {
        let t3 = e3.split(`-`);
        t3.length >= 2 && (r2 = t3.slice(0, -1).join(`-`), i2 = t3[t3.length - 1]);
      }
      t2.push({ parentKey: r2 || null, key: i2, value: n3 });
    });
    let n2 = /* @__PURE__ */ new Map();
    t2.forEach((e3) => {
      let t3 = e3.parentKey || `__root__`;
      n2.has(t3) || n2.set(t3, []), n2.get(t3).push(e3);
    }), n2.forEach((e3, t3) => {
      if (t3 === `__root__`) e3.forEach((e4) => {
        let t4 = d2.value.find((t5) => t5.var.key === e4.key);
        if (t4) t4.var.value = e4.value;
        else {
          let t5 = { value: A(7), var: { key: e4.key, value: e4.value }, defaultExpanded: true, onToggle: (e5) => {
            e5.preventDefault();
          } };
          d2.value.push(t5);
        }
      });
      else {
        let n3 = C2(t3);
        n3.children || (n3.children = []), e3.forEach((e4) => {
          let t4 = n3.children.find((t5) => t5.var.key === e4.key);
          if (t4) t4.var.value = e4.value;
          else {
            let t5 = { value: A(7), var: { key: e4.key, value: e4.value }, defaultExpanded: true, onToggle: (e5) => {
              e5.preventDefault();
            } };
            n3.children.push(t5);
          }
        });
      }
    });
  }
  return h(() => {
    S2();
  }), ee((e2, t2, n2) => {
    f2(), n2();
  }), (n2, r2) => {
    let a3 = E, o3 = k, f3 = D, h2 = T, _3 = O, y3 = M, b3 = ne, x3 = te, S3 = j;
    return p(), v(S3, { id: `wizard-colors`, class: `min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]` }, { default: m(() => [e(y3, { title: n2.i18n.__(`Colors`, `windpress`), toggle: false, ui: { title: `text-sm` } }, { title: m(() => [e(a3, { name: `lucide:swatch-book`, class: `size-5` }), t(` ` + g(n2.i18n.__(`Colors`, `windpress`)) + ` `, 1), e(o3, { variant: `soft`, color: `neutral` }, { default: m(() => [...r2[2] || (r2[2] = [t(`--color-*`, -1)])]), _: 1 }), e(f3, { text: n2.i18n.__(`Color utilities like bg-primary, text-accent, and border-neutral`, `windpress`) }, { default: m(() => [s(`span`, Mt, g(n2.i18n.__(`Color utilities like bg-primary, text-accent, and border-neutral`, `windpress`)), 1)]), _: 1 }, 8, [`text`])]), right: m(() => [e(_3, { items: [{ label: n2.i18n.__(`Color Palettes`, `windpress`), type: `label` }, ...L2.map((e2) => ({ label: e2.name, description: e2.description, icon: `lucide:palette`, onSelect: () => R2(e2) }))], ui: { content: `w-64 max-h-80` } }, { default: m(() => [e(f3, { text: n2.i18n.__(`Add color palette`, `windpress`) }, { default: m(() => [e(h2, { icon: `lucide:palette`, color: `neutral`, variant: `subtle` })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`items`]), e(f3, { "delay-duration": 0, text: n2.i18n.__(`Add new color`, `windpress`) }, { default: m(() => [e(h2, { color: `neutral`, variant: `subtle`, icon: `i-lucide-plus`, onClick: r2[0] || (r2[0] = (e2) => I2()) })]), _: 1 }, 8, [`text`]), e(f3, { text: n2.i18n.__(`Help`, `windpress`) }, { default: m(() => [e(h2, { icon: `i-lucide-circle-help`, color: `neutral`, variant: `soft`, to: `https://tailwindcss.com/docs/customizing-colors`, target: `_blank` })]), _: 1 }, 8, [`text`])]), _: 1 }, 8, [`title`]), s(`div`, Nt, [i(d2).length === 0 ? (p(), c(`div`, Pt, [e(a3, { name: `lucide:palette`, class: `size-12 text-primary/50 mb-4` }), s(`h3`, Ft, g(n2.i18n.__(`No colors defined`, `windpress`)), 1), s(`p`, It, g(n2.i18n.__(`Start building your color system by adding individual colors or choosing from predefined palettes.`, `windpress`)), 1), s(`div`, Lt, [e(h2, { label: n2.i18n.__(`Add Color`, `windpress`), icon: `lucide:plus`, color: `primary`, variant: `subtle`, onClick: r2[1] || (r2[1] = (e2) => I2()) }, null, 8, [`label`]), e(_3, { items: L2.map((e2) => ({ label: e2.name, description: e2.description, icon: `lucide:palette`, onSelect: () => R2(e2) })), ui: { content: `w-64 max-h-80` } }, { default: m(() => [e(h2, { label: n2.i18n.__(`Choose Palette`, `windpress`), icon: `lucide:palette`, variant: `ghost` }, null, 8, [`label`])]), _: 1 }, 8, [`items`])])])) : (p(), v(x3, { key: 1, items: i(d2), "get-key": (e2) => String(e2.value), ui: { link: `p-0` }, expanded: i(u2) }, { item: m(({ item: t2, level: r3 }) => [e(ie, { item: t2, level: r3 || 0, "should-be-dimmed": i(w2), "was-recently-moved": i(F2), "is-descendant-of": i(ae2), "on-add-next": I2, "on-add-child": oe2, "on-delete": se2 }, { "before-value": m(({ item: t3 }) => [s(`div`, null, [e(f3, { text: t3.var.value }, { default: m(() => [s(`div`, { style: l({ backgroundColor: t3.var.value || `var(--ui-bg-elevated)` }), class: `h-8 w-8 rounded border border-gray-300 dark:border-gray-600` }, null, 4)]), _: 2 }, 1032, [`text`])])]), "value-leading": m(({ item: t3 }) => [e(b3, null, { content: m(() => [e(i(At), { value: new (i(N))(t3.var.value || `#ffffff00`).toString({ format: `hex` }), onInput: (e2) => {
      let n3 = new (i(N))(t3.var.value || `#ffffff00`), r4 = new (i(N))(e2).toString({ format: n3.parseMeta.formatId });
      t3.var.value = r4;
    } }, null, 8, [`value`, `onInput`])]), default: m(() => [s(`div`, { class: `h-4 w-4 rounded border border-gray-300 dark:border-gray-600`, style: l({ backgroundColor: t3.var.value || `var(--ui-bg-elevated)` }), title: n2.i18n.__(`Open color picker`, `windpress`) }, [s(`span`, zt, g(n2.i18n.__(`Open color picker`, `windpress`)), 1)], 12, Rt)]), _: 2 }, 1024)]), _: 2 }, 1032, [`item`, `level`, `should-be-dimmed`, `was-recently-moved`, `is-descendant-of`])]), _: 1 }, 8, [`items`, `get-key`, `expanded`]))])]), _: 1 });
  };
} });
export {
  Bt as default
};
