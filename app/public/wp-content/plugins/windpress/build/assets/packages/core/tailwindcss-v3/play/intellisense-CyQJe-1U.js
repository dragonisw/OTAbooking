import { i as e, o as t, t as n } from "../../../../chunk-DcEfI0Mx.js";
import { n as r, t as i } from "../../../../dist-CFDaZ429.js";
import { t as a } from "../../../../set-Bnp0_Ia6.js";
import { t as o } from "../../../../fuse-B1xTA2op.js";
import { r as s, t as c } from "../../../../lib-BpYAc4ol.js";
import { n as l, t as u } from "../../../../dist-UMash2f5.js";
import { t as d } from "../../../../path-browserify-4cnqpSC3.js";
import { r as f } from "../../../../default-map-Cw3uSgAb.js";
import { n as p, t as m, __tla as __tla_0 } from "../../../../cssesc-DEUDTBaR.js";
import { t as h } from "../../../../vfs-DziqLF6T.js";
import { s as g, t as _ } from "../../../../intellisense-iY_xPBd-.js";
import { n as v, t as y } from "../../../../dlv.umd-BoFV71gt.js";
import { _ as b, a as x, i as S, n as C, r as w, t as T } from "../../../../resolve-config-CkjD7pAQ.js";
import { __tla as __tla_1 } from "../../../../tailwindcss-O_juf7r1.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  var E = n(((e2, t2) => {
    var n2 = {}.toString;
    t2.exports = Array.isArray || function(e3) {
      return n2.call(e3) == `[object Array]`;
    };
  })), D = n(((e2, t2) => {
    (function(n2, r2) {
      typeof e2 == `object` && t2 !== void 0 ? r2(e2) : typeof define == `function` && define.amd ? define([
        `exports`
      ], r2) : r2((n2 = typeof globalThis < `u` ? globalThis : n2 || self).culori = {});
    })(e2, (function(e3) {
      var t3 = function(e4, t4) {
        if (typeof e4 == `number`) return t4 === 3 ? {
          mode: `rgb`,
          r: (e4 >> 8 & 15 | e4 >> 4 & 240) / 255,
          g: (e4 >> 4 & 15 | 240 & e4) / 255,
          b: (15 & e4 | e4 << 4 & 240) / 255
        } : t4 === 4 ? {
          mode: `rgb`,
          r: (e4 >> 12 & 15 | e4 >> 8 & 240) / 255,
          g: (e4 >> 8 & 15 | e4 >> 4 & 240) / 255,
          b: (e4 >> 4 & 15 | 240 & e4) / 255,
          alpha: (15 & e4 | e4 << 4 & 240) / 255
        } : t4 === 6 ? {
          mode: `rgb`,
          r: (e4 >> 16 & 255) / 255,
          g: (e4 >> 8 & 255) / 255,
          b: (255 & e4) / 255
        } : t4 === 8 ? {
          mode: `rgb`,
          r: (e4 >> 24 & 255) / 255,
          g: (e4 >> 16 & 255) / 255,
          b: (e4 >> 8 & 255) / 255,
          alpha: (255 & e4) / 255
        } : void 0;
      }, n2 = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      }, r2 = `/([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)/`.replace(/^\/|\/$/g, ``), i2 = r2 + `%`, a2 = `(?:` + r2 + `%|` + r2 + `)`, o2 = `(?:` + r2 + `(deg|grad|rad|turn)|` + r2 + `)`, s2 = `\\s*,\\s*`, c2 = `\\s*`, l2 = `\\s+`, u2 = RegExp(`^rgba?\\(\\s*` + r2 + s2 + r2 + s2 + r2 + `\\s*(?:,\\s*` + a2 + `\\s*)?\\)$`), d2 = RegExp(`^rgba?\\(\\s*` + i2 + s2 + i2 + s2 + i2 + `\\s*(?:,\\s*` + a2 + `\\s*)?\\)$`), f2 = RegExp(`^rgba?\\(\\s*` + r2 + l2 + r2 + l2 + r2 + `\\s*(?:\\/\\s*` + a2 + `\\s*)?\\)$`), p2 = RegExp(`^rgba?\\(\\s*` + i2 + l2 + i2 + l2 + i2 + `\\s*(?:\\/\\s*` + a2 + `\\s*)?\\)$`), m2 = RegExp(`^hsla?\\(\\s*` + o2 + s2 + i2 + s2 + i2 + `\\s*(?:,\\s*` + a2 + `\\s*)?\\)$`), h2 = RegExp(`^hsla?\\(\\s*` + o2 + l2 + i2 + l2 + i2 + `\\s*(?:\\/\\s*` + a2 + `\\s*)?\\)$`), g2 = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, _2 = RegExp(`^hwb\\(\\s*` + o2 + l2 + i2 + l2 + i2 + `\\s*(?:\\/\\s*` + a2 + `\\s*)?\\)$`), v2 = RegExp(`^lab\\(\\s*` + r2 + `%?` + l2 + r2 + l2 + r2 + `\\s*(?:\\/\\s*` + a2 + `\\s*)?\\)$`), y2 = RegExp(`^lch\\(\\s*` + r2 + `%?` + l2 + r2 + l2 + o2 + `\\s*(?:\\/\\s*` + a2 + `\\s*)?\\)$`), b2 = RegExp(`^color\\(\\s*([a-z0-9\\-]+)` + l2 + a2 + l2 + a2 + l2 + a2 + `\\s*(?:\\/` + c2 + a2 + `\\s*)?\\)$`), x2 = function(e4, t4, n3) {
        return e4 + n3 * (t4 - e4);
      }, S2 = function(e4) {
        return e4 === void 0 && (e4 = 1), e4 === 1 ? function(e5) {
          return e5;
        } : function(t4) {
          return t4 ** +e4;
        };
      }, C2 = function(e4) {
        return function(t4) {
          var n3 = (function(e5) {
            for (var t5 = [], n4 = 0; n4 < e5.length - 1; n4++) {
              var r3 = e5[n4], i3 = e5[n4 + 1];
              r3 === void 0 && i3 === void 0 ? t5.push(void 0) : r3 !== void 0 && i3 !== void 0 ? t5.push([
                r3,
                i3
              ]) : t5.push(r3 === void 0 ? [
                i3,
                i3
              ] : [
                r3,
                r3
              ]);
            }
            return t5;
          })(t4);
          return function(t5) {
            var r3 = t5 * n3.length, i3 = t5 >= 1 ? n3.length - 1 : Math.max(Math.floor(r3), 0), a3 = n3[i3];
            return a3 === void 0 ? void 0 : e4(a3[0], a3[1], r3 - i3);
          };
        };
      }, w2 = C2(x2), T2 = function(e4) {
        var t4 = false, n3 = e4.map((function(e5) {
          return e5 === void 0 ? 1 : (t4 = true, e5);
        }));
        return t4 ? n3 : e4;
      }, E2 = {
        mode: `rgb`,
        channels: [
          `r`,
          `g`,
          `b`,
          `alpha`
        ],
        parsers: [
          function(e4) {
            var n3;
            return (n3 = e4.match(g2)) ? t3(parseInt(n3[1], 16), n3[1].length) : void 0;
          },
          function(e4) {
            var t4, n3;
            if (t4 = e4.match(u2) || e4.match(f2)) n3 = {
              mode: `rgb`,
              r: t4[1] / 255,
              g: t4[2] / 255,
              b: t4[3] / 255
            };
            else {
              if (!(t4 = e4.match(d2) || e4.match(p2))) return;
              n3 = {
                mode: `rgb`,
                r: t4[1] / 100,
                g: t4[2] / 100,
                b: t4[3] / 100
              };
            }
            return t4[4] === void 0 ? t4[5] !== void 0 && (n3.alpha = +t4[5]) : n3.alpha = t4[4] / 100, n3;
          },
          function(e4) {
            return t3(n2[e4.toLowerCase()], 6);
          },
          function(e4) {
            return e4 === `transparent` ? t3(0, 8) : void 0;
          },
          `srgb`
        ],
        serialize: `color(srgb `,
        interpolate: {
          r: w2,
          g: w2,
          b: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, D2 = function(e4) {
        var t4 = Math.abs(e4);
        return t4 < 0.04045 ? e4 / 12.92 : (Math.sign(e4) || 1) * ((t4 + 0.055) / 1.055) ** 2.4;
      }, O2 = function(e4) {
        var t4 = e4.r, n3 = e4.g, r3 = e4.b, i3 = e4.alpha, a3 = {
          mode: `lrgb`,
          r: D2(t4),
          g: D2(n3),
          b: D2(r3)
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, k2 = function(e4) {
        var t4 = Math.abs(e4);
        return t4 > 31308e-7 ? (Math.sign(e4) || 1) * (1.055 * t4 ** (1 / 2.4) - 0.055) : 12.92 * e4;
      }, A2 = function(e4, t4) {
        var n3 = e4.r, r3 = e4.g, i3 = e4.b, a3 = e4.alpha;
        t4 === void 0 && (t4 = `rgb`);
        var o3 = {
          mode: t4,
          r: k2(n3),
          g: k2(r3),
          b: k2(i3)
        };
        return a3 !== void 0 && (o3.alpha = a3), o3;
      }, j2 = Object.assign({}, E2, {
        mode: `lrgb`,
        output: {
          rgb: A2
        },
        input: {
          rgb: O2
        },
        parsers: [
          `--srgb-linear`
        ],
        serialize: `color(--srgb-linear `
      }), M2 = function(e4) {
        return Math.abs(e4) ** (563 / 256) * Math.sign(e4);
      }, N2 = function(e4) {
        var t4 = M2(e4.r), n3 = M2(e4.g), r3 = M2(e4.b), i3 = {
          mode: `xyz65`,
          x: 0.5766690429101305 * t4 + 0.1855582379065463 * n3 + 0.1882286462349947 * r3,
          y: 0.29734497525053605 * t4 + 0.6273635662554661 * n3 + 0.07529145849399788 * r3,
          z: 0.02703136138641234 * t4 + 0.07068885253582723 * n3 + 0.9913375368376388 * r3
        };
        return e4.alpha !== void 0 && (i3.alpha = e4.alpha), i3;
      }, P2 = function(e4) {
        return Math.abs(e4) ** (256 / 563) * Math.sign(e4);
      }, ee2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = {
          mode: `a98`,
          r: P2(2.0415879038107465 * t4 - 0.5650069742788596 * n3 - 0.34473135077832956 * r3),
          g: P2(-0.9692436362808795 * t4 + 1.8759675015077202 * n3 + 0.04155505740717557 * r3),
          b: P2(0.013444280632031142 * t4 - 0.11836239223101838 * n3 + 1.0151749943912054 * r3)
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, te2 = function(e4) {
        var t4 = O2(e4), n3 = t4.r, r3 = t4.g, i3 = t4.b, a3 = t4.alpha, o3 = {
          mode: `xyz65`,
          x: 0.4124564 * n3 + 0.3575761 * r3 + 0.1804375 * i3,
          y: 0.2126729 * n3 + 0.7151522 * r3 + 0.072175 * i3,
          z: 0.0193339 * n3 + 0.119192 * r3 + 0.9503041 * i3
        };
        return a3 !== void 0 && (o3.alpha = a3), o3;
      }, ne2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = A2({
          r: 3.2404542 * t4 - 1.5371385 * n3 - 0.4985314 * r3,
          g: -0.969266 * t4 + 1.8760108 * n3 + 0.041556 * r3,
          b: 0.0556434 * t4 - 0.2040259 * n3 + 1.0572252 * r3
        });
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, re2 = Object.assign({}, E2, {
        mode: `a98`,
        parsers: [
          `a98-rgb`
        ],
        serialize: `color(a98-rgb `,
        input: {
          rgb: function(e4) {
            return ee2(te2(e4));
          },
          xyz65: ee2
        },
        output: {
          rgb: function(e4) {
            return ne2(N2(e4));
          },
          xyz65: N2
        }
      }), F2 = function(e4) {
        var t4 = O2(e4), n3 = t4.r, r3 = t4.g, i3 = t4.b, a3 = t4.alpha, o3 = {
          mode: `xyz65`,
          x: 0.4865709 * n3 + 0.2656676 * r3 + 0.1982172 * i3,
          y: 0.2289745 * n3 + 0.6917385 * r3 + 0.0792869 * i3,
          z: 0 * n3 + 0.0451133 * r3 + 1.0439443 * i3
        };
        return a3 !== void 0 && (o3.alpha = a3), o3;
      }, ie2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = A2({
          r: 2.4934969 * t4 - 0.9313836 * n3 - 0.4027107 * r3,
          g: -0.8294889 * t4 + 1.762664 * n3 + 0.0236246 * r3,
          b: 0.0358458 * t4 - 0.0761723 * n3 + 0.9568845 * r3
        }, `p3`);
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, ae2 = Object.assign({}, E2, {
        mode: `p3`,
        parsers: [
          `display-p3`
        ],
        serialize: `color(display-p3 `,
        input: {
          rgb: function(e4) {
            return ie2(te2(e4));
          },
          xyz65: ie2
        },
        output: {
          rgb: function(e4) {
            return ne2(F2(e4));
          },
          xyz65: F2
        }
      }), oe2 = function(e4) {
        var t4 = Math.abs(e4);
        return t4 >= 1 / 512 ? Math.sign(e4) * t4 ** (1 / 1.8) : 16 * e4;
      }, se2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = {
          mode: `prophoto`,
          r: oe2(1.3457989731028281 * t4 - 0.25558010007997534 * n3 - 0.05110628506753401 * r3),
          g: oe2(-0.5446224939028347 * t4 + 1.5082327413132781 * n3 + 0.02053603239147973 * r3),
          b: oe2(0 * t4 + 0 * n3 + 1.2119675456389454 * r3)
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, ce2 = function(e4) {
        var t4 = Math.abs(e4);
        return t4 >= 16 / 512 ? Math.sign(e4) * t4 ** 1.8 : e4 / 16;
      }, le2 = function(e4) {
        var t4 = ce2(e4.r), n3 = ce2(e4.g), r3 = ce2(e4.b), i3 = {
          mode: `xyz65`,
          x: 0.7977604896723027 * t4 + 0.13518583717574031 * n3 + 0.0313493495815248 * r3,
          y: 0.2880711282292934 * t4 + 0.7118432178101014 * n3 + 8565396060525902e-20 * r3,
          z: 0 * t4 + 0 * n3 + 0.8251046025104601 * r3
        };
        return e4.alpha !== void 0 && (i3.alpha = e4.alpha), i3;
      }, ue2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = A2({
          r: 3.1338561 * t4 - 1.6168667 * n3 - 0.4906146 * r3,
          g: -0.9787684 * t4 + 1.9161415 * n3 + 0.033454 * r3,
          b: 0.0719453 * t4 - 0.2289914 * n3 + 1.4052427 * r3
        });
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, de2 = function(e4) {
        var t4 = O2(e4), n3 = t4.r, r3 = t4.g, i3 = t4.b, a3 = t4.alpha, o3 = {
          mode: `xyz`,
          x: 0.4360747 * n3 + 0.3850649 * r3 + 0.1430804 * i3,
          y: 0.2225045 * n3 + 0.7168786 * r3 + 0.0606169 * i3,
          z: 0.0139322 * n3 + 0.0971045 * r3 + 0.7141733 * i3
        };
        return a3 !== void 0 && (o3.alpha = a3), o3;
      }, fe2 = Object.assign({}, E2, {
        mode: `prophoto`,
        parsers: [
          `prophoto-rgb`
        ],
        serialize: `color(prophoto-rgb `,
        input: {
          xyz: se2,
          rgb: function(e4) {
            return se2(de2(e4));
          }
        },
        output: {
          xyz: le2,
          rgb: function(e4) {
            return ue2(le2(e4));
          }
        }
      }), pe2 = 1.09929682680944, me2 = function(e4) {
        var t4 = Math.abs(e4);
        return t4 > 0.018053968510807 ? (Math.sign(e4) || 1) * (pe2 * t4 ** 0.45 - (pe2 - 1)) : 4.5 * e4;
      }, he2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = {
          mode: `rec2020`,
          r: me2(1.7166511879712674 * t4 - 0.35567078377639233 * n3 - 0.25336628137365974 * r3),
          g: me2(-0.6666843518324892 * t4 + 1.6164812366349395 * n3 + 0.01576854581391113 * r3),
          b: me2(0.017639857445310783 * t4 - 0.042770613257808524 * n3 + 0.9421031212354738 * r3)
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, ge2 = 1.09929682680944, _e2 = function(e4) {
        var t4 = Math.abs(e4);
        return t4 < 0.08124285829863151 ? e4 / 4.5 : (Math.sign(e4) || 1) * ((t4 + ge2 - 1) / ge2) ** (1 / 0.45);
      }, ve2 = function(e4) {
        var t4 = _e2(e4.r), n3 = _e2(e4.g), r3 = _e2(e4.b), i3 = {
          mode: `xyz65`,
          x: 0.6369580483012914 * t4 + 0.14461690358620832 * n3 + 0.1688809751641721 * r3,
          y: 0.2627002120112671 * t4 + 0.6779980715188708 * n3 + 0.05930171646986196 * r3,
          z: 0 * t4 + 0.028072693049087428 * n3 + 1.060985057710791 * r3
        };
        return e4.alpha !== void 0 && (i3.alpha = e4.alpha), i3;
      }, ye2 = Object.assign({}, E2, {
        mode: `rec2020`,
        input: {
          xyz: he2,
          rgb: function(e4) {
            return he2(te2(e4));
          }
        },
        output: {
          xyz: ve2,
          rgb: function(e4) {
            return ne2(ve2(e4));
          }
        },
        parsers: [
          `rec2020`
        ],
        serialize: `color(rec2020 `
      }), I2 = function(e4) {
        return (e4 %= 360) < 0 ? e4 + 360 : e4;
      }, be2 = function(e4, t4) {
        switch (t4) {
          case `deg`:
            return +e4;
          case `rad`:
            return e4 / Math.PI * 180;
          case `grad`:
            return e4 / 10 * 9;
          case `turn`:
            return 360 * e4;
        }
      }, L2 = function(e4, t4) {
        return e4.map((function(n3, r3, i3) {
          if (n3 === void 0) return n3;
          var a3 = I2(n3);
          return r3 === 0 || e4[r3 - 1] === void 0 ? a3 : t4(a3 - I2(i3[r3 - 1]));
        })).reduce((function(e5, t5) {
          return e5.length && t5 !== void 0 && e5[e5.length - 1] !== void 0 ? (e5.push(t5 + e5[e5.length - 1]), e5) : (e5.push(t5), e5);
        }), []);
      }, R2 = function(e4) {
        return L2(e4, (function(e5) {
          return Math.abs(e5) <= 180 ? e5 : e5 - 360 * Math.sign(e5);
        }));
      }, z2 = {}, xe2 = {}, Se2 = [], B2 = {}, Ce2 = function(e4) {
        return e4;
      }, V2 = function(e4) {
        z2[e4.mode] = Object.assign(z2[e4.mode] || {}, e4.output), Object.keys(e4.input || {}).forEach((function(t4) {
          z2[t4] || (z2[t4] = {}), z2[t4][e4.mode] = e4.input[t4];
        })), e4.ranges || (e4.ranges = {}), e4.difference || (e4.difference = {}), e4.channels.forEach((function(t4) {
          if (e4.ranges[t4] === void 0 && (e4.ranges[t4] = [
            0,
            1
          ]), !e4.interpolate[t4]) throw Error(`Missing interpolator for: ` + t4);
          typeof e4.interpolate[t4] == `function` && (e4.interpolate[t4] = {
            use: e4.interpolate[t4]
          }), e4.interpolate[t4].fixup || (e4.interpolate[t4].fixup = Ce2);
        })), xe2[e4.mode] = e4, (e4.parsers || []).forEach((function(t4) {
          typeof t4 == `function` ? Se2.push(t4) : typeof t4 == `string` && (B2[t4] = e4.mode);
        }));
      }, H2 = function(e4) {
        return xe2[e4];
      }, we2 = function(e4) {
        if (typeof e4 == `string`) {
          for (var t4 = void 0, n3 = 0, r3 = Se2.length; n3 < r3 && (t4 = Se2[n3++](e4)) === void 0; ) ;
          return t4 || (function(e5) {
            var t5 = e5.match(b2);
            if (t5) {
              var n4 = B2[t5[1]];
              if (n4) {
                var r4 = {
                  mode: n4
                }, i3 = 2;
                return H2(n4).channels.forEach((function(e6) {
                  t5[i3] === void 0 && t5[i3 + 1] === void 0 || (r4[e6] = t5[i3] === void 0 ? +t5[i3 + 1] : t5[i3] / 100), i3 += 2;
                })), r4;
              }
            }
          })(e4);
        }
      }, Te2 = function(e4, t4) {
        return e4 === void 0 ? void 0 : typeof e4 == `object` ? e4.mode === void 0 ? t4 ? Object.assign({}, e4, {
          mode: t4
        }) : void 0 : e4 : we2(e4);
      }, U2 = function(e4) {
        return e4 === void 0 && (e4 = `rgb`), function(t4) {
          return (t4 = Te2(t4, e4)) === void 0 ? void 0 : t4.mode === e4 ? t4 : z2[t4.mode][e4] ? z2[t4.mode][e4](t4) : e4 === `rgb` ? z2[t4.mode].rgb(t4) : z2.rgb[e4](z2[t4.mode].rgb(t4));
        };
      }, W2 = function(e4, t4) {
        if (e4.h === void 0 || t4.h === void 0 || !e4.s || !t4.s) return 0;
        var n3 = I2(e4.h), r3 = I2(t4.h), i3 = Math.sin((r3 - n3 + 360) / 2 * Math.PI / 180);
        return 2 * Math.sqrt(e4.s * t4.s) * i3;
      }, Ee2 = function(e4, t4) {
        if (e4.h === void 0 || t4.h === void 0) return 0;
        var n3 = I2(e4.h), r3 = I2(t4.h);
        return Math.abs(r3 - n3) > 180 ? n3 - (r3 - 360 * Math.sign(r3 - n3)) : r3 - n3;
      }, De2 = function(e4, t4) {
        if (e4.h === void 0 || t4.h === void 0 || !e4.c || !t4.c) return 0;
        var n3 = I2(e4.h), r3 = I2(t4.h), i3 = Math.sin((r3 - n3 + 360) / 2 * Math.PI / 180);
        return 2 * Math.sqrt(e4.c * t4.c) * i3;
      }, G2 = function(e4, t4) {
        e4 === void 0 && (e4 = `rgb`), t4 === void 0 && (t4 = [
          1,
          1,
          1,
          0
        ]);
        var n3 = H2(e4), r3 = n3.channels, i3 = n3.difference, a3 = U2(e4);
        return function(e5, n4) {
          var o3 = a3(e5), s3 = a3(n4);
          return Math.sqrt(r3.reduce((function(e6, n5, r4) {
            var a4 = i3[n5] ? i3[n5](o3, s3) : o3[n5] - s3[n5];
            return e6 + (t4[r4] || 0) * (isNaN(a4) ? 0 : a4) ** 2;
          }), 0));
        };
      }, K2 = function(e4) {
        var t4 = e4.reduce((function(e5, t5) {
          if (t5 !== void 0) {
            var n3 = t5 * Math.PI / 180;
            e5.sin += Math.sin(n3), e5.cos += Math.cos(n3);
          }
          return e5;
        }), {
          sin: 0,
          cos: 0
        });
        return 180 * Math.atan2(t4.sin, t4.cos) / Math.PI;
      }, Oe2 = function(e4) {
        var t4 = e4.filter((function(e5) {
          return e5 !== void 0;
        }));
        return t4.length ? t4.reduce((function(e5, t5) {
          return e5 + t5;
        }), 0) / t4.length : void 0;
      }, ke2 = function(e4) {
        return typeof e4 == `function`;
      }, Ae2 = {
        mode: `hsl`,
        output: {
          rgb: function(e4) {
            var t4 = e4.h, n3 = e4.s, r3 = e4.l, i3 = e4.alpha;
            t4 = I2(t4);
            var a3, o3 = r3 + n3 * (r3 < 0.5 ? r3 : 1 - r3), s3 = o3 - 2 * (o3 - r3) * Math.abs(t4 / 60 % 2 - 1);
            switch (Math.floor(t4 / 60)) {
              case 0:
                a3 = {
                  r: o3,
                  g: s3,
                  b: 2 * r3 - o3
                };
                break;
              case 1:
                a3 = {
                  r: s3,
                  g: o3,
                  b: 2 * r3 - o3
                };
                break;
              case 2:
                a3 = {
                  r: 2 * r3 - o3,
                  g: o3,
                  b: s3
                };
                break;
              case 3:
                a3 = {
                  r: 2 * r3 - o3,
                  g: s3,
                  b: o3
                };
                break;
              case 4:
                a3 = {
                  r: s3,
                  g: 2 * r3 - o3,
                  b: o3
                };
                break;
              case 5:
                a3 = {
                  r: o3,
                  g: 2 * r3 - o3,
                  b: s3
                };
                break;
              default:
                a3 = {
                  r: 2 * r3 - o3,
                  g: 2 * r3 - o3,
                  b: 2 * r3 - o3
                };
            }
            return a3.mode = `rgb`, i3 !== void 0 && (a3.alpha = i3), a3;
          }
        },
        input: {
          rgb: function(e4) {
            var t4 = e4.r, n3 = e4.g, r3 = e4.b, i3 = e4.alpha, a3 = Math.max(t4, n3, r3), o3 = Math.min(t4, n3, r3), s3 = {
              mode: `hsl`,
              s: a3 === o3 ? 0 : (a3 - o3) / (1 - Math.abs(a3 + o3 - 1)),
              l: 0.5 * (a3 + o3)
            };
            return a3 - o3 != 0 && (s3.h = 60 * (a3 === t4 ? (n3 - r3) / (a3 - o3) + 6 * (n3 < r3) : a3 === n3 ? (r3 - t4) / (a3 - o3) + 2 : (t4 - n3) / (a3 - o3) + 4)), i3 !== void 0 && (s3.alpha = i3), s3;
          }
        },
        channels: [
          `h`,
          `s`,
          `l`,
          `alpha`
        ],
        ranges: {
          h: [
            0,
            360
          ]
        },
        parsers: [
          function(e4) {
            var t4 = e4.match(m2) || e4.match(h2);
            if (t4) {
              var n3 = {
                mode: `hsl`,
                h: t4[3] === void 0 ? be2(t4[1], t4[2]) : +t4[3],
                s: Math.min(Math.max(0, t4[4] / 100), 1),
                l: Math.min(Math.max(0, t4[5] / 100), 1)
              };
              return t4[6] === void 0 ? t4[7] !== void 0 && (n3.alpha = +t4[7]) : n3.alpha = t4[6] / 100, n3;
            }
          }
        ],
        serialize: function(e4) {
          return `hsl(` + (e4.h || 0) + ` ` + 100 * e4.s + `% ` + 100 * e4.l + `%` + (e4.alpha < 1 ? ` / ` + e4.alpha : ``) + `)`;
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          s: w2,
          l: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: W2
        },
        average: {
          h: K2
        }
      };
      function je2(e4) {
        var t4 = e4.h, n3 = e4.s, r3 = e4.v, i3 = e4.alpha;
        t4 = I2(t4);
        var a3, o3 = Math.abs(t4 / 60 % 2 - 1);
        switch (Math.floor(t4 / 60)) {
          case 0:
            a3 = {
              r: r3,
              g: r3 * (1 - n3 * o3),
              b: r3 * (1 - n3)
            };
            break;
          case 1:
            a3 = {
              r: r3 * (1 - n3 * o3),
              g: r3,
              b: r3 * (1 - n3)
            };
            break;
          case 2:
            a3 = {
              r: r3 * (1 - n3),
              g: r3,
              b: r3 * (1 - n3 * o3)
            };
            break;
          case 3:
            a3 = {
              r: r3 * (1 - n3),
              g: r3 * (1 - n3 * o3),
              b: r3
            };
            break;
          case 4:
            a3 = {
              r: r3 * (1 - n3 * o3),
              g: r3 * (1 - n3),
              b: r3
            };
            break;
          case 5:
            a3 = {
              r: r3,
              g: r3 * (1 - n3),
              b: r3 * (1 - n3 * o3)
            };
            break;
          default:
            a3 = {
              r: r3 * (1 - n3),
              g: r3 * (1 - n3),
              b: r3 * (1 - n3)
            };
        }
        return a3.mode = `rgb`, i3 !== void 0 && (a3.alpha = i3), a3;
      }
      function Me2(e4) {
        var t4 = e4.r, n3 = e4.g, r3 = e4.b, i3 = e4.alpha, a3 = Math.max(t4, n3, r3), o3 = Math.min(t4, n3, r3), s3 = {
          mode: `hsv`,
          s: a3 === 0 ? 0 : 1 - o3 / a3,
          v: a3
        };
        return a3 - o3 != 0 && (s3.h = 60 * (a3 === t4 ? (n3 - r3) / (a3 - o3) + 6 * (n3 < r3) : a3 === n3 ? (r3 - t4) / (a3 - o3) + 2 : (t4 - n3) / (a3 - o3) + 4)), i3 !== void 0 && (s3.alpha = i3), s3;
      }
      var Ne2 = {
        mode: `hsv`,
        output: {
          rgb: je2
        },
        parsers: [
          `--hsv`
        ],
        serialize: `color(--hsv `,
        input: {
          rgb: Me2
        },
        channels: [
          `h`,
          `s`,
          `v`,
          `alpha`
        ],
        ranges: {
          h: [
            0,
            360
          ]
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          s: w2,
          v: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: W2
        },
        average: {
          h: K2
        }
      }, Pe2 = {
        mode: `hsi`,
        output: {
          rgb: function(e4) {
            var t4 = e4.h, n3 = e4.s, r3 = e4.i, i3 = e4.alpha;
            t4 = I2(t4);
            var a3, o3 = Math.abs(t4 / 60 % 2 - 1);
            switch (Math.floor(t4 / 60)) {
              case 0:
                a3 = {
                  r: r3 * (1 + n3 * (3 / (2 - o3) - 1)),
                  g: r3 * (1 + n3 * (3 * (1 - o3) / (2 - o3) - 1)),
                  b: r3 * (1 - n3)
                };
                break;
              case 1:
                a3 = {
                  r: r3 * (1 + n3 * (3 * (1 - o3) / (2 - o3) - 1)),
                  g: r3 * (1 + n3 * (3 / (2 - o3) - 1)),
                  b: r3 * (1 - n3)
                };
                break;
              case 2:
                a3 = {
                  r: r3 * (1 - n3),
                  g: r3 * (1 + n3 * (3 / (2 - o3) - 1)),
                  b: r3 * (1 + n3 * (3 * (1 - o3) / (2 - o3) - 1))
                };
                break;
              case 3:
                a3 = {
                  r: r3 * (1 - n3),
                  g: r3 * (1 + n3 * (3 * (1 - o3) / (2 - o3) - 1)),
                  b: r3 * (1 + n3 * (3 / (2 - o3) - 1))
                };
                break;
              case 4:
                a3 = {
                  r: r3 * (1 + n3 * (3 * (1 - o3) / (2 - o3) - 1)),
                  g: r3 * (1 - n3),
                  b: r3 * (1 + n3 * (3 / (2 - o3) - 1))
                };
                break;
              case 5:
                a3 = {
                  r: r3 * (1 + n3 * (3 / (2 - o3) - 1)),
                  g: r3 * (1 - n3),
                  b: r3 * (1 + n3 * (3 * (1 - o3) / (2 - o3) - 1))
                };
                break;
              default:
                a3 = {
                  r: r3 * (1 - n3),
                  g: r3 * (1 - n3),
                  b: r3 * (1 - n3)
                };
            }
            return a3.mode = `rgb`, i3 !== void 0 && (a3.alpha = i3), a3;
          }
        },
        parsers: [
          `--hsi`
        ],
        serialize: `color(--hsi `,
        input: {
          rgb: function(e4) {
            var t4 = e4.r, n3 = e4.g, r3 = e4.b, i3 = e4.alpha, a3 = Math.max(t4, n3, r3), o3 = Math.min(t4, n3, r3), s3 = {
              mode: `hsi`,
              s: t4 + n3 + r3 === 0 ? 0 : 1 - 3 * o3 / (t4 + n3 + r3),
              i: (t4 + n3 + r3) / 3
            };
            return a3 - o3 != 0 && (s3.h = 60 * (a3 === t4 ? (n3 - r3) / (a3 - o3) + 6 * (n3 < r3) : a3 === n3 ? (r3 - t4) / (a3 - o3) + 2 : (t4 - n3) / (a3 - o3) + 4)), i3 !== void 0 && (s3.alpha = i3), s3;
          }
        },
        channels: [
          `h`,
          `s`,
          `i`,
          `alpha`
        ],
        ranges: {
          h: [
            0,
            360
          ]
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          s: w2,
          i: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: W2
        },
        average: {
          h: K2
        }
      }, Fe2, Ie2 = {
        mode: `hwb`,
        output: {
          rgb: function(e4) {
            var t4 = e4.h, n3 = e4.w, r3 = e4.b;
            if (n3 + r3 > 1) {
              var i3 = n3 + r3;
              n3 /= i3, r3 /= i3;
            }
            return je2({
              h: t4,
              s: r3 === 1 ? 1 : 1 - n3 / (1 - r3),
              v: 1 - r3,
              alpha: e4.alpha
            });
          }
        },
        input: {
          rgb: function(e4) {
            var t4 = Me2(e4);
            if (t4 !== void 0) {
              var n3 = {
                mode: `hwb`,
                w: (1 - t4.s) * t4.v,
                b: 1 - t4.v
              };
              return t4.h !== void 0 && (n3.h = t4.h), t4.alpha !== void 0 && (n3.alpha = t4.alpha), n3;
            }
          }
        },
        channels: [
          `h`,
          `w`,
          `b`,
          `alpha`
        ],
        ranges: {
          h: [
            0,
            360
          ]
        },
        parsers: [
          function(e4) {
            var t4 = e4.match(_2);
            if (t4) {
              var n3 = {
                mode: `hwb`,
                h: t4[3] === void 0 ? be2(t4[1], t4[2]) : +t4[3],
                w: t4[4] / 100,
                b: t4[5] / 100
              };
              return t4[6] === void 0 ? t4[7] !== void 0 && (n3.alpha = +t4[7]) : n3.alpha = t4[6] / 100, n3;
            }
          }
        ],
        serialize: function(e4) {
          return `hwb(` + (e4.h || 0) + ` ` + 100 * e4.w + `% ` + 100 * e4.b + `%` + (e4.alpha < 1 ? ` / ` + e4.alpha : ``) + `)`;
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          w: w2,
          b: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: Ee2
        },
        average: {
          h: K2
        }
      }, q2 = function(e4) {
        var t4 = (e4 / 1e4) ** 0.1593017578125;
        return ((0.8359375 + 18.8515625 * t4) / (1 + 18.6875 * t4)) ** 134.03437499999998 || 0;
      }, Le2 = function(e4) {
        return Math.max(203 * e4, 0);
      }, J2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha;
        t4 = Le2(t4), n3 = Le2(n3);
        var a3 = 1.15 * t4 - 0.15 * (r3 = Le2(r3)), o3 = 0.66 * n3 + 0.34 * t4, s3 = q2(0.41478972 * a3 + 0.579999 * o3 + 0.014648 * r3), c3 = q2(-0.20151 * a3 + 1.120649 * o3 + 0.0531008 * r3), l3 = q2(-0.0166008 * a3 + 0.2648 * o3 + 0.6684799 * r3), u3 = (s3 + c3) / 2, d3 = {
          mode: `jab`,
          j: 0.44 * u3 / (1 - 0.56 * u3) - 16295499532821565e-27,
          a: 3.524 * s3 - 4.066708 * c3 + 0.542708 * l3,
          b: 0.199076 * s3 + 1.096799 * c3 - 1.295875 * l3
        };
        return i3 !== void 0 && (d3.alpha = i3), d3;
      }, Re2 = 16295499532821565e-27, ze2 = function(e4) {
        var t4 = e4 ** 0.007460772656268216;
        return 1e4 * ((0.8359375 - t4) / (18.6875 * t4 - 18.8515625)) ** 6.277394636015326 || 0;
      }, Be2 = function(e4) {
        return e4 / 203;
      }, Ve2 = function(e4) {
        var t4 = e4.j, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = (t4 + Re2) / (0.44 + 0.56 * (t4 + Re2)), o3 = ze2(a3 + 0.13860504 * n3 + 0.058047316 * r3), s3 = ze2(a3 - 0.13860504 * n3 - 0.058047316 * r3), c3 = ze2(a3 - 0.096019242 * n3 - 0.8118919 * r3), l3 = {
          mode: `xyz65`,
          x: Be2(1.661373024652174 * o3 - 0.914523081304348 * s3 + 0.23136208173913045 * c3),
          y: Be2(-0.3250758611844533 * o3 + 1.571847026732543 * s3 - 0.21825383453227928 * c3),
          z: Be2(-0.090982811 * o3 - 0.31272829 * s3 + 1.5227666 * c3)
        };
        return i3 !== void 0 && (l3.alpha = i3), l3;
      }, He2 = function(e4) {
        var t4 = J2(te2(e4));
        return e4.r === e4.b && e4.b === e4.g && (t4.a = t4.b = 0), t4;
      }, Y2 = function(e4) {
        return ne2(Ve2(e4));
      }, Ue2 = {
        mode: `jab`,
        channels: [
          `j`,
          `a`,
          `b`,
          `alpha`
        ],
        parsers: [
          `--jzazbz`
        ],
        serialize: `color(--jzazbz `,
        input: {
          rgb: He2,
          xyz65: J2
        },
        output: {
          rgb: Y2,
          xyz65: Ve2
        },
        ranges: {
          j: [
            0,
            0.222
          ],
          a: [
            -0.109,
            0.129
          ],
          b: [
            -0.185,
            0.134
          ]
        },
        interpolate: {
          j: w2,
          a: w2,
          b: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, We2 = function(e4) {
        var t4 = e4.j, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = Math.sqrt(n3 * n3 + r3 * r3), o3 = {
          mode: `jch`,
          j: t4,
          c: a3
        };
        return a3 && (o3.h = I2(180 * Math.atan2(r3, n3) / Math.PI)), i3 !== void 0 && (o3.alpha = i3), o3;
      }, Ge2 = function(e4) {
        var t4 = e4.j, n3 = e4.c, r3 = e4.h, i3 = e4.alpha, a3 = {
          mode: `jab`,
          j: t4,
          a: n3 ? n3 * Math.cos(r3 / 180 * Math.PI) : 0,
          b: n3 ? n3 * Math.sin(r3 / 180 * Math.PI) : 0
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, Ke2 = {
        mode: `jch`,
        parsers: [
          `--jzczhz`
        ],
        serialize: `color(--jzczhz `,
        output: {
          jab: Ge2,
          rgb: function(e4) {
            return Y2(Ge2(e4));
          }
        },
        input: {
          rgb: function(e4) {
            return We2(He2(e4));
          },
          jab: We2
        },
        channels: [
          `j`,
          `c`,
          `h`,
          `alpha`
        ],
        ranges: {
          j: [
            0,
            0.221
          ],
          c: [
            0,
            0.19
          ],
          h: [
            0,
            360
          ]
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          c: w2,
          j: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: De2
        },
        average: {
          h: K2
        }
      }, qe2 = 0.96422, Je2 = 0.82521, X2 = 29 ** 3 / 3 ** 3, Z2 = 6 ** 3 / 29 ** 3, Q2 = function(e4) {
        return e4 ** 3 > Z2 ? e4 ** 3 : (116 * e4 - 16) / X2;
      }, Ye2 = function(e4) {
        var t4 = e4.l, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = (t4 + 16) / 116, o3 = a3 - r3 / 200, s3 = {
          mode: `xyz`,
          x: Q2(n3 / 500 + a3) * qe2,
          y: 1 * Q2(a3),
          z: Q2(o3) * Je2
        };
        return i3 !== void 0 && (s3.alpha = i3), s3;
      }, Xe2 = function(e4) {
        return ue2(Ye2(e4));
      }, Ze2 = function(e4) {
        return e4 > Z2 ? Math.cbrt(e4) : (X2 * e4 + 16) / 116;
      }, Qe2 = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = Ze2(t4 / qe2), o3 = Ze2(n3 / 1), s3 = {
          mode: `lab`,
          l: 116 * o3 - 16,
          a: 500 * (a3 - o3),
          b: 200 * (o3 - Ze2(r3 / Je2))
        };
        return i3 !== void 0 && (s3.alpha = i3), s3;
      }, $e2 = function(e4) {
        var t4 = Qe2(de2(e4));
        return e4.r === e4.b && e4.b === e4.g && (t4.a = t4.b = 0), t4;
      }, et2 = {
        mode: `lab`,
        output: {
          xyz: Ye2,
          rgb: Xe2
        },
        input: {
          xyz: Qe2,
          rgb: $e2
        },
        channels: [
          `l`,
          `a`,
          `b`,
          `alpha`
        ],
        ranges: {
          l: [
            0,
            100
          ],
          a: [
            -79.287,
            93.55
          ],
          b: [
            -112.029,
            93.388
          ]
        },
        parsers: [
          function(e4) {
            var t4 = e4.match(v2);
            if (t4) {
              var n3 = {
                mode: `lab`,
                l: +t4[1],
                a: +t4[2],
                b: +t4[3]
              };
              return t4[4] === void 0 ? t4[5] !== void 0 && (n3.alpha = +t4[5]) : n3.alpha = t4[4] / 100, n3;
            }
          }
        ],
        serialize: function(e4) {
          return `lab(` + e4.l + `% ` + e4.a + ` ` + e4.b + (e4.alpha < 1 ? ` / ` + e4.alpha : ``) + `)`;
        },
        interpolate: {
          l: w2,
          a: w2,
          b: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, tt2 = 0.95047, nt2 = 1.08883, rt2 = 29 ** 3 / 3 ** 3, it2 = 6 ** 3 / 29 ** 3, at2 = function(e4) {
        return e4 ** 3 > it2 ? e4 ** 3 : (116 * e4 - 16) / rt2;
      }, ot = function(e4) {
        var t4 = e4.l, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = (t4 + 16) / 116, o3 = a3 - r3 / 200, s3 = {
          mode: `xyz65`,
          x: at2(n3 / 500 + a3) * tt2,
          y: 1 * at2(a3),
          z: at2(o3) * nt2
        };
        return i3 !== void 0 && (s3.alpha = i3), s3;
      }, st = function(e4) {
        return ne2(ot(e4));
      }, ct = function(e4) {
        return e4 > it2 ? Math.cbrt(e4) : (rt2 * e4 + 16) / 116;
      }, lt = function(e4) {
        var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = ct(t4 / tt2), o3 = ct(n3 / 1), s3 = {
          mode: `lab65`,
          l: 116 * o3 - 16,
          a: 500 * (a3 - o3),
          b: 200 * (o3 - ct(r3 / nt2))
        };
        return i3 !== void 0 && (s3.alpha = i3), s3;
      }, ut = function(e4) {
        var t4 = lt(te2(e4));
        return e4.r === e4.b && e4.b === e4.g && (t4.a = t4.b = 0), t4;
      }, dt = Object.assign({}, et2, {
        mode: `lab65`,
        parsers: [
          `--lab-d65`
        ],
        serialize: `color(--lab-d65 `,
        output: {
          xyz65: ot,
          rgb: st
        },
        input: {
          xyz65: lt,
          rgb: ut
        },
        ranges: {
          l: [
            0,
            100
          ],
          a: [
            -86.182,
            98.234
          ],
          b: [
            -107.86,
            94.477
          ]
        }
      }), ft = function(e4, t4) {
        var n3 = e4.l, r3 = e4.a, i3 = e4.b, a3 = e4.alpha;
        t4 === void 0 && (t4 = `lch`);
        var o3 = Math.sqrt(r3 * r3 + i3 * i3), s3 = {
          mode: t4,
          l: n3,
          c: o3
        };
        return o3 && (s3.h = I2(180 * Math.atan2(i3, r3) / Math.PI)), a3 !== void 0 && (s3.alpha = a3), s3;
      }, pt = function(e4, t4) {
        var n3 = e4.l, r3 = e4.c, i3 = e4.h, a3 = e4.alpha;
        t4 === void 0 && (t4 = `lab`);
        var o3 = {
          mode: t4,
          l: n3,
          a: r3 ? r3 * Math.cos(i3 / 180 * Math.PI) : 0,
          b: r3 ? r3 * Math.sin(i3 / 180 * Math.PI) : 0
        };
        return a3 !== void 0 && (o3.alpha = a3), o3;
      }, mt = {
        mode: `lch`,
        output: {
          lab: pt,
          rgb: function(e4) {
            return Xe2(pt(e4));
          }
        },
        input: {
          rgb: function(e4) {
            return ft($e2(e4));
          },
          lab: ft
        },
        channels: [
          `l`,
          `c`,
          `h`,
          `alpha`
        ],
        ranges: {
          l: [
            0,
            100
          ],
          c: [
            0,
            131.207
          ],
          h: [
            0,
            360
          ]
        },
        parsers: [
          function(e4) {
            var t4 = e4.match(y2);
            if (t4) {
              var n3 = {
                mode: `lch`,
                l: +t4[1],
                c: Math.max(0, +t4[2]),
                h: t4[5] === void 0 ? be2(t4[3], t4[4]) : +t4[5]
              };
              return t4[6] === void 0 ? t4[7] !== void 0 && (n3.alpha = +t4[7]) : n3.alpha = t4[6] / 100, n3;
            }
          }
        ],
        serialize: function(e4) {
          return `lch(` + e4.l + `% ` + e4.c + ` ` + (e4.h || 0) + (e4.alpha < 1 ? ` / ` + e4.alpha : ``) + `)`;
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          c: w2,
          l: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: De2
        },
        average: {
          h: K2
        }
      }, ht = Object.assign({}, mt, {
        mode: `lch65`,
        parsers: [
          `--lch-d65`
        ],
        serialize: `color(--lch-d65 `,
        output: {
          lab65: function(e4) {
            return pt(e4, `lab65`);
          },
          rgb: function(e4) {
            return st(pt(e4, `lab65`));
          }
        },
        input: {
          rgb: function(e4) {
            return ft(ut(e4), `lch65`);
          },
          lab65: function(e4) {
            return ft(e4, `lch65`);
          }
        },
        ranges: {
          l: [
            0,
            100
          ],
          c: [
            0,
            133.807
          ],
          h: [
            0,
            360
          ]
        }
      }), gt = function(e4, t4, n3) {
        return 4 * e4 / (e4 + 15 * t4 + 3 * n3);
      }, _t = function(e4, t4, n3) {
        return 9 * t4 / (e4 + 15 * t4 + 3 * n3);
      }, vt = gt(qe2, 1, Je2), yt = _t(qe2, 1, Je2), bt = function(e4) {
        var t4, n3 = e4.x, r3 = e4.y, i3 = e4.z, a3 = e4.alpha, o3 = (t4 = r3 / 1) <= Z2 ? X2 * t4 : 116 * Math.cbrt(t4) - 16, s3 = gt(n3, r3, i3), c3 = _t(n3, r3, i3);
        isFinite(s3) && isFinite(c3) ? (s3 = 13 * o3 * (s3 - vt), c3 = 13 * o3 * (c3 - yt)) : o3 = s3 = c3 = 0;
        var l3 = {
          mode: `luv`,
          l: o3,
          u: s3,
          v: c3
        };
        return a3 !== void 0 && (l3.alpha = a3), l3;
      }, xt = function(e4) {
        return bt(de2(e4));
      }, St = 4 * (Fe2 = qe2) / (Fe2 + 15 + 3 * Je2), Ct = (function(e4, t4, n3) {
        return 9 * t4 / (e4 + 15 * t4 + 3 * n3);
      })(qe2, 1, Je2), wt = function(e4) {
        var t4 = e4.l, n3 = e4.u, r3 = e4.v, i3 = e4.alpha, a3 = n3 / (13 * t4) + St, o3 = r3 / (13 * t4) + Ct, s3 = 1 * (t4 <= 8 ? t4 / X2 : ((t4 + 16) / 116) ** 3), c3 = {
          mode: `xyz`,
          x: 9 * a3 * s3 / (4 * o3),
          y: s3,
          z: s3 * (12 - 3 * a3 - 20 * o3) / (4 * o3)
        };
        return i3 !== void 0 && (c3.alpha = i3), c3;
      }, Tt = function(e4) {
        return ue2(wt(e4));
      }, Et = {
        mode: `luv`,
        output: {
          xyz: wt,
          rgb: Tt
        },
        input: {
          xyz: bt,
          rgb: xt
        },
        channels: [
          `l`,
          `u`,
          `v`,
          `alpha`
        ],
        parsers: [
          `--luv`
        ],
        serialize: `color(--luv `,
        ranges: {
          l: [
            0,
            100
          ],
          u: [
            -84.936,
            175.042
          ],
          v: [
            -125.882,
            87.243
          ]
        },
        interpolate: {
          l: w2,
          u: w2,
          v: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, Dt = function(e4) {
        var t4 = e4.l, n3 = e4.u, r3 = e4.v, i3 = e4.alpha, a3 = Math.sqrt(n3 * n3 + r3 * r3), o3 = {
          mode: `lchuv`,
          l: t4,
          c: a3
        };
        return a3 && (o3.h = I2(180 * Math.atan2(r3, n3) / Math.PI)), i3 !== void 0 && (o3.alpha = i3), o3;
      }, Ot = function(e4) {
        var t4 = e4.l, n3 = e4.c, r3 = e4.h, i3 = e4.alpha, a3 = {
          mode: `luv`,
          l: t4,
          u: n3 ? n3 * Math.cos(r3 / 180 * Math.PI) : 0,
          v: n3 ? n3 * Math.sin(r3 / 180 * Math.PI) : 0
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, kt = {
        mode: `lchuv`,
        output: {
          luv: Ot,
          rgb: function(e4) {
            return Tt(Ot(e4));
          }
        },
        input: {
          rgb: function(e4) {
            return Dt(xt(e4));
          },
          luv: Dt
        },
        channels: [
          `l`,
          `c`,
          `h`,
          `alpha`
        ],
        parsers: [
          `--lchuv`
        ],
        serialize: `color(--lchuv `,
        ranges: {
          l: [
            0,
            100
          ],
          c: [
            0,
            176.956
          ],
          h: [
            0,
            360
          ]
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          c: w2,
          l: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: De2
        },
        average: {
          h: K2
        }
      }, $ = [
        -0.14861,
        1.78277,
        -0.29227,
        -0.90649,
        1.97294,
        0
      ], At = Math.PI / 180, jt = 180 / Math.PI, Mt = $[3] * $[4], Nt = $[1] * $[4], Pt = $[1] * $[2] - $[0] * $[3], Ft = {
        mode: `cubehelix`,
        channels: [
          `h`,
          `s`,
          `l`,
          `alpha`
        ],
        parsers: [
          `--cubehelix`
        ],
        serialize: `color(--cubehelix `,
        ranges: {
          h: [
            0,
            360
          ],
          s: [
            0,
            4.614
          ],
          l: [
            0,
            1
          ]
        },
        input: {
          rgb: function(e4) {
            var t4 = e4.r, n3 = e4.g, r3 = e4.b, i3 = e4.alpha, a3 = (Pt * r3 + t4 * Mt - n3 * Nt) / (Pt + Mt - Nt), o3 = r3 - a3, s3 = ($[4] * (n3 - a3) - $[2] * o3) / $[3], c3 = {
              mode: `cubehelix`,
              l: a3,
              s: a3 === 0 || a3 === 1 ? void 0 : Math.sqrt(o3 * o3 + s3 * s3) / ($[4] * a3 * (1 - a3))
            };
            return c3.s && (c3.h = Math.atan2(s3, o3) * jt - 120), i3 !== void 0 && (c3.alpha = i3), c3;
          }
        },
        output: {
          rgb: function(e4) {
            var t4 = e4.h, n3 = e4.s, r3 = e4.l, i3 = e4.alpha, a3 = {
              mode: `rgb`
            };
            t4 = (t4 === void 0 ? 0 : t4 + 120) * At;
            var o3 = n3 === void 0 ? 0 : n3 * r3 * (1 - r3), s3 = Math.cos(t4), c3 = Math.sin(t4);
            return a3.r = r3 + o3 * ($[0] * s3 + $[1] * c3), a3.g = r3 + o3 * ($[2] * s3 + $[3] * c3), a3.b = r3 + o3 * ($[4] * s3 + $[5] * c3), i3 !== void 0 && (a3.alpha = i3), a3;
          }
        },
        interpolate: {
          h: {
            use: w2,
            fixup: R2
          },
          s: w2,
          l: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: W2
        },
        average: {
          h: K2
        }
      }, It = function(e4) {
        var t4 = e4.l, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = Math.sqrt(n3 * n3 + r3 * r3), o3 = {
          mode: `dlch`,
          l: t4,
          c: a3
        };
        return a3 && (o3.h = I2(180 * Math.atan2(r3, n3) / Math.PI)), i3 !== void 0 && (o3.alpha = i3), o3;
      }, Lt = 26 / 180 * Math.PI, Rt = Math.cos(Lt), zt = Math.sin(Lt), Bt = 100 / Math.log(1.39), Vt = function(e4) {
        var t4 = e4.l, n3 = e4.c, r3 = e4.h, i3 = e4.alpha, a3 = {
          mode: `lab65`,
          l: (Math.exp(1 * t4 / Bt) - 1) / 39e-4
        };
        if (r3 === void 0) a3.a = a3.b = 0;
        else {
          var o3 = (Math.exp(0.0435 * n3 * 1 * 1) - 1) / 0.075, s3 = o3 * Math.cos(r3 / 180 * Math.PI - Lt), c3 = o3 * Math.sin(r3 / 180 * Math.PI - Lt);
          a3.a = s3 * Rt - c3 / 0.83 * zt, a3.b = s3 * zt + c3 / 0.83 * Rt;
        }
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, Ht = function(e4) {
        return Vt(It(e4));
      }, Ut = function(e4) {
        var t4 = e4.l, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = n3 * Rt + r3 * zt, o3 = 0.83 * (r3 * Rt - n3 * zt), s3 = Math.sqrt(a3 * a3 + o3 * o3), c3 = {
          mode: `dlch`,
          l: Bt / 1 * Math.log(1 + 39e-4 * t4),
          c: Math.log(1 + 0.075 * s3) / 0.0435
        };
        return c3.c && (c3.h = I2((Math.atan2(o3, a3) + Lt) / Math.PI * 180)), i3 !== void 0 && (c3.alpha = i3), c3;
      }, Wt = function(e4) {
        var t4 = e4.l, n3 = e4.c, r3 = e4.h, i3 = e4.alpha, a3 = {
          mode: `dlab`,
          l: t4,
          a: n3 === 0 ? 0 : n3 * Math.cos(r3 / 180 * Math.PI),
          b: n3 === 0 ? 0 : n3 * Math.sin(r3 / 180 * Math.PI)
        };
        return i3 !== void 0 && (a3.alpha = i3), a3;
      }, Gt = function(e4) {
        return Wt(Ut(e4));
      }, Kt = {
        mode: `dlab`,
        parsers: [
          `--din99o-lab`
        ],
        serialize: `color(--din99o-lab `,
        output: {
          lab65: Ht,
          rgb: function(e4) {
            return st(Ht(e4));
          }
        },
        input: {
          lab65: Gt,
          rgb: function(e4) {
            return Gt(ut(e4));
          }
        },
        channels: [
          `l`,
          `a`,
          `b`,
          `alpha`
        ],
        ranges: {
          l: [
            0,
            100
          ],
          a: [
            -40.09,
            45.501
          ],
          b: [
            -40.469,
            44.344
          ]
        },
        interpolate: {
          l: w2,
          a: w2,
          b: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, qt = {
        mode: `dlch`,
        parsers: [
          `--din99o-lch`
        ],
        serialize: `color(--din99o-lch `,
        output: {
          lab65: Vt,
          dlab: Wt,
          rgb: function(e4) {
            return st(Vt(e4));
          }
        },
        input: {
          lab65: Ut,
          dlab: It,
          rgb: function(e4) {
            return Ut(ut(e4));
          }
        },
        channels: [
          `l`,
          `c`,
          `h`,
          `alpha`
        ],
        ranges: {
          l: [
            0,
            100
          ],
          c: [
            0,
            51.484
          ],
          h: [
            0,
            360
          ]
        },
        interpolate: {
          l: w2,
          c: w2,
          h: {
            use: w2,
            fixup: R2
          },
          alpha: {
            use: w2,
            fixup: T2
          }
        },
        difference: {
          h: De2
        },
        average: {
          h: K2
        }
      }, Jt = {
        mode: `xyz`,
        parsers: [
          `xyz`,
          `--xyz-d50`
        ],
        serialize: `color(--xyz-d50 `,
        output: {
          rgb: ue2,
          lab: Qe2
        },
        input: {
          rgb: de2,
          lab: Ye2
        },
        channels: [
          `x`,
          `y`,
          `z`,
          `alpha`
        ],
        ranges: {
          x: [
            0,
            0.964
          ],
          y: [
            0,
            0.999
          ],
          z: [
            0,
            0.825
          ]
        },
        interpolate: {
          x: w2,
          y: w2,
          z: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, Yt = {
        mode: `xyz65`,
        serialize: `color(--xyz-d65 `,
        output: {
          rgb: ne2,
          xyz: function(e4) {
            var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = {
              mode: `xyz`,
              x: 1.0478112 * t4 + 0.0228866 * n3 - 0.050127 * r3,
              y: 0.0295424 * t4 + 0.9904844 * n3 - 0.0170491 * r3,
              z: -92345e-7 * t4 + 0.0150436 * n3 + 0.7521316 * r3
            };
            return i3 !== void 0 && (a3.alpha = i3), a3;
          }
        },
        input: {
          rgb: te2,
          xyz: function(e4) {
            var t4 = e4.x, n3 = e4.y, r3 = e4.z, i3 = e4.alpha, a3 = {
              mode: `xyz65`,
              x: 0.9555766 * t4 - 0.0230393 * n3 + 0.0631636 * r3,
              y: -0.0282895 * t4 + 1.0099416 * n3 + 0.0210077 * r3,
              z: 0.0122982 * t4 - 0.020483 * n3 + 1.3299098 * r3
            };
            return i3 !== void 0 && (a3.alpha = i3), a3;
          }
        },
        ranges: {
          x: [
            0,
            0.95
          ],
          y: [
            0,
            1
          ],
          z: [
            0,
            1.088
          ]
        },
        channels: [
          `x`,
          `y`,
          `z`,
          `alpha`
        ],
        parsers: [
          `--xyz-d65`
        ],
        interpolate: {
          x: w2,
          y: w2,
          z: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, Xt = {
        mode: `yiq`,
        output: {
          rgb: function(e4) {
            var t4 = e4.y, n3 = e4.i, r3 = e4.q, i3 = e4.alpha;
            return A2({
              r: t4 + 0.95608445 * n3 + 0.6208885 * r3,
              g: t4 - 0.27137664 * n3 - 0.6486059 * r3,
              b: t4 - 1.10561724 * n3 + 1.70250126 * r3,
              alpha: i3
            });
          }
        },
        input: {
          rgb: function(e4) {
            var t4 = O2(e4), n3 = t4.r, r3 = t4.g, i3 = t4.b, a3 = t4.alpha, o3 = {
              mode: `yiq`,
              y: 0.29889531 * n3 + 0.58662247 * r3 + 0.11448223 * i3,
              i: 0.59597799 * n3 - 0.2741761 * r3 - 0.32180189 * i3,
              q: 0.21147017 * n3 - 0.52261711 * r3 + 0.31114694 * i3
            };
            return a3 !== void 0 && (o3.alpha = a3), o3;
          }
        },
        channels: [
          `y`,
          `i`,
          `q`,
          `alpha`
        ],
        parsers: [
          `--yiq`
        ],
        serialize: `color(--yiq `,
        ranges: {
          i: [
            -0.595,
            0.595
          ],
          q: [
            -0.522,
            0.522
          ]
        },
        interpolate: {
          y: w2,
          i: w2,
          q: w2,
          alpha: {
            use: w2,
            fixup: T2
          }
        }
      }, Zt = function(e4) {
        var t4 = e4.l, n3 = e4.a, r3 = e4.b, i3 = e4.alpha, a3 = (t4 + 0.3963377774 * n3 + 0.2158037573 * r3) ** 3, o3 = (t4 - 0.1055613458 * n3 - 0.0638541728 * r3) ** 3, s3 = (t4 - 0.0894841775 * n3 - 1.291485548 * r3) ** 3, c3 = {
          mode: `lrgb`,
          r: 4.0767416621 * a3 - 3.3077115913 * o3 + 0.2309699292 * s3,
          g: -1.2684380046 * a3 + 2.6097574011 * o3 - 0.3413193965 * s3,
          b: -0.0041960863 * a3 - 0.7034186147 * o3 + 1.707614701 * s3
        };
        return i3 !== void 0 && (c3.alpha = i3), c3;
      }, Qt = function(e4) {
        var t4 = e4.r, n3 = e4.g, r3 = e4.b, i3 = e4.alpha, a3 = Math.cbrt(0.4122214708 * t4 + 0.5363325363 * n3 + 0.0514459929 * r3), o3 = Math.cbrt(0.2119034982 * t4 + 0.6806995451 * n3 + 0.1073969566 * r3), s3 = Math.cbrt(0.0883024619 * t4 + 0.2817188376 * n3 + 0.6299787005 * r3), c3 = {
          mode: `oklab`,
          l: 0.2104542553 * a3 + 0.793617785 * o3 - 0.0040720468 * s3,
          a: 1.9779984951 * a3 - 2.428592205 * o3 + 0.4505937099 * s3,
          b: 0.0259040371 * a3 + 0.7827717662 * o3 - 0.808675766 * s3
        };
        return i3 !== void 0 && (c3.alpha = i3), c3;
      }, $t = function(e4) {
        var t4 = Qt(O2(e4));
        return e4.r === e4.b && e4.b === e4.g && (t4.a = t4.b = 0), t4;
      }, en = function(e4) {
        return A2(Zt(e4));
      }, tn = Object.assign({}, et2, {
        mode: `oklab`,
        output: {
          lrgb: Zt,
          rgb: en
        },
        input: {
          lrgb: Qt,
          rgb: $t
        },
        ranges: {
          l: [
            0,
            0.999
          ],
          a: [
            -0.233,
            0.276
          ],
          b: [
            -0.311,
            0.198
          ]
        },
        parsers: [
          `--oklab`
        ],
        serialize: `color(--oklab `
      }), nn = Object.assign({}, mt, {
        mode: `oklch`,
        output: {
          oklab: function(e4) {
            return pt(e4, `oklab`);
          },
          rgb: function(e4) {
            return en(pt(e4, `oklab`));
          }
        },
        input: {
          rgb: function(e4) {
            return ft($t(e4), `oklch`);
          },
          oklab: function(e4) {
            return ft(e4, `oklch`);
          }
        },
        parsers: [
          `--oklch`
        ],
        serialize: `color(--oklch `,
        ranges: {
          l: [
            0,
            0.999
          ],
          c: [
            0,
            0.322
          ],
          h: [
            0,
            360
          ]
        }
      }), rn = function(e4) {
        return e4 === void 0 && (e4 = 4), function(t4) {
          return typeof t4 == `number` ? (function(e5, t5) {
            return Math.round(e5 * (t5 = 10 ** t5)) / t5;
          })(t4, e4) : t4;
        };
      }, an = U2(`rgb`), on = U2(`hsl`), sn = rn(2), cn = function(e4) {
        return Math.max(0, Math.min(1, e4));
      }, ln = function(e4) {
        return Math.round(255 * cn(e4));
      }, un = function(e4) {
        var t4 = an(e4);
        if (t4 !== void 0) return `#` + (1 << 24 | ln(t4.r) << 16 | ln(t4.g) << 8 | ln(t4.b)).toString(16).slice(1);
      }, dn = function(e4) {
        var t4 = an(e4);
        if (t4 !== void 0) {
          var n3 = ln(t4.r), r3 = ln(t4.g), i3 = ln(t4.b);
          return t4.alpha === void 0 || t4.alpha === 1 ? `rgb(` + n3 + `, ` + r3 + `, ` + i3 + `)` : `rgba(` + n3 + `, ` + r3 + `, ` + i3 + `, ` + sn(cn(t4.alpha)) + `)`;
        }
      }, fn = function(e4) {
        return e4 === void 0 && (e4 = 0.5), function(t4) {
          return e4 <= 0 ? 1 : e4 >= 1 ? 0 : t4 ** +(Math.log(0.5) / Math.log(e4));
        };
      }, pn = function(e4, t4, n3) {
        t4 === void 0 && (t4 = `rgb`), n3 === void 0 && (n3 = false);
        var r3 = t4 ? H2(t4).channels : null, i3 = t4 ? U2(t4) : Te2;
        return function(a3) {
          var o3 = i3(a3), s3 = (r3 || H2(a3.mode).channels).reduce((function(n4, r4) {
            var i4 = e4(o3[r4], r4, o3, t4);
            return i4 === void 0 || isNaN(i4) || (n4[r4] = i4), n4;
          }), {
            mode: t4
          });
          if (!n3) return s3;
          var c3 = Te2(a3);
          return c3 && c3.mode !== s3.mode ? U2(c3.mode)(s3) : s3;
        };
      }, mn = function(e4, t4, n3) {
        return t4 === `alpha` ? e4 : (e4 || 0) * (n3.alpha === void 0 ? 1 : n3.alpha);
      }, hn = function(e4, t4, n3) {
        return t4 !== `alpha` && n3.alpha !== 0 ? (e4 || 0) / (n3.alpha === void 0 ? 1 : n3.alpha) : e4;
      }, gn = function(e4, t4) {
        return e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = 0), function(n3, r3) {
          return r3 === `alpha` ? n3 : n3 * e4 + t4;
        };
      }, _n = function(e4) {
        return typeof e4 == `function`;
      }, vn = function(e4) {
        return e4 && typeof e4 == `object`;
      }, yn = function(e4) {
        return typeof e4 == `number`;
      }, bn = function(e4, t4, n3, r3) {
        t4 === void 0 && (t4 = `rgb`);
        var i3 = H2(t4), a3 = U2(t4), o3 = [], s3 = [], c3 = {};
        e4.forEach((function(e5) {
          Array.isArray(e5) ? (o3.push(a3(e5[0])), s3.push(e5[1])) : yn(e5) || _n(e5) ? c3[s3.length] = e5 : (o3.push(a3(e5)), s3.push(void 0));
        })), (function(e5) {
          e5[0] === void 0 && (e5[0] = 0), e5[e5.length - 1] === void 0 && (e5[e5.length - 1] = 1);
          for (var t5, n4, r4, i4, a4 = 1; a4 < e5.length; ) {
            if (e5[a4] === void 0) {
              for (n4 = a4, r4 = e5[a4 - 1], t5 = a4; e5[t5] === void 0; ) t5++;
              for (i4 = (e5[t5] - r4) / (t5 - a4 + 1); a4 < t5; ) e5[a4] = r4 + (a4 + 1 - n4) * i4, a4++;
            } else e5[a4] < e5[a4 - 1] && (e5[a4] = e5[a4 - 1]);
            a4++;
          }
        })(s3);
        var l3 = i3.channels.reduce((function(e5, t5) {
          var r4;
          return r4 = vn(n3) && vn(n3[t5]) && n3[t5].fixup ? n3[t5].fixup : vn(i3.interpolate[t5]) && i3.interpolate[t5].fixup ? i3.interpolate[t5].fixup : function(e6) {
            return e6;
          }, e5[t5] = r4(o3.map((function(e6) {
            return e6[t5];
          }))), e5;
        }), {});
        if (r3) {
          var u3 = o3.map((function(e5, n4) {
            return i3.channels.reduce((function(e6, t5) {
              return e6[t5] = l3[t5][n4], e6;
            }), {
              mode: t4
            });
          }));
          l3 = i3.channels.reduce((function(e5, n4) {
            return e5[n4] = u3.map((function(e6) {
              var i4 = r3(e6[n4], n4, e6, t4);
              return isNaN(i4) ? void 0 : i4;
            })), e5;
          }), {});
        }
        var d3 = i3.channels.reduce((function(e5, t5) {
          var r4;
          return _n(n3) ? r4 = n3 : vn(n3) && _n(n3[t5]) ? r4 = n3[t5] : vn(n3) && vn(n3[t5]) && n3[t5].use ? r4 = n3[t5].use : _n(i3.interpolate[t5]) ? r4 = i3.interpolate[t5] : vn(i3.interpolate[t5]) && (r4 = i3.interpolate[t5].use), e5[t5] = r4(l3[t5]), e5;
        }), {}), f3 = o3.length - 1;
        return function(e5) {
          if ((e5 = Math.min(Math.max(0, e5), 1)) <= s3[0]) return o3[0];
          if (e5 > s3[f3]) return o3[f3];
          for (var n4 = 0; s3[n4] < e5; ) n4++;
          var r4 = s3[n4 - 1], a4 = s3[n4] - r4, l4 = (e5 - r4) / a4, u4 = c3[n4] || c3[0];
          u4 !== void 0 && (yn(u4) && (u4 = fn((u4 - r4) / a4)), l4 = u4(l4));
          var p3 = (n4 - 1 + l4) / f3;
          return i3.channels.reduce((function(e6, t5) {
            var n5 = d3[t5](p3);
            return n5 !== void 0 && (e6[t5] = n5), e6;
          }), {
            mode: t4
          });
        };
      }, xn = function(e4, t4) {
        return function(n3, r3, i3) {
          r3 === void 0 && (r3 = `rgb`);
          var a3 = t4 ? pn(t4, r3) : void 0, o3 = bn(n3, r3, i3, e4);
          return a3 ? function(e5) {
            return a3(o3(e5));
          } : o3;
        };
      }, Sn = xn(mn, hn), Cn = function(e4) {
        return (1 - Math.cos(e4 * Math.PI)) / 2;
      }, wn = function(e4, t4) {
        return (e4 + t4) % t4;
      }, Tn = function(e4, t4, n3, r3, i3) {
        var a3 = i3 * i3, o3 = a3 * i3;
        return ((1 - 3 * i3 + 3 * a3 - o3) * e4 + (4 - 6 * a3 + 3 * o3) * t4 + (1 + 3 * i3 + 3 * a3 - 3 * o3) * n3 + o3 * r3) / 6;
      }, En = function(e4) {
        return function(t4) {
          var n3 = e4.length - 1, r3 = t4 >= 1 ? n3 - 1 : Math.max(0, Math.floor(t4 * n3));
          return Tn(r3 > 0 ? e4[r3 - 1] : 2 * e4[r3] - e4[r3 + 1], e4[r3], e4[r3 + 1], r3 < n3 - 1 ? e4[r3 + 2] : 2 * e4[r3 + 1] - e4[r3], (t4 - r3 / n3) * n3);
        };
      }, Dn = function(e4) {
        return function(t4) {
          var n3 = e4.length - 1, r3 = Math.floor(t4 * n3);
          return Tn(e4[wn(r3 - 1, e4.length)], e4[wn(r3, e4.length)], e4[wn(r3 + 1, e4.length)], e4[wn(r3 + 2, e4.length)], (t4 - r3 / n3) * n3);
        };
      }, On = function(e4) {
        var t4, n3 = e4.length - 1, r3 = Array(n3), i3 = Array(n3), a3 = Array(n3);
        for (r3[1] = 1 / 4, i3[1] = (6 * e4[1] - e4[0]) / 4, t4 = 2; t4 < n3; ++t4) r3[t4] = 1 / (4 - r3[t4 - 1]), i3[t4] = (6 * e4[t4] - (t4 == n3 - 1 ? e4[n3] : 0) - i3[t4 - 1]) * r3[t4];
        for (a3[0] = e4[0], a3[n3] = e4[n3], n3 - 1 > 0 && (a3[n3 - 1] = i3[n3 - 1]), t4 = n3 - 2; t4 > 0; --t4) a3[t4] = i3[t4] - r3[t4] * a3[t4 + 1];
        return a3;
      }, kn = function(e4) {
        return En(On(e4));
      }, An = function(e4) {
        return Dn(On(e4));
      }, jn = Math.sign, Mn = Math.min, Nn = Math.abs, Pn = function(e4) {
        for (var t4 = e4.length - 1, n3 = [], r3 = [], i3 = [], a3 = 0; a3 < t4; a3++) n3.push((e4[a3 + 1] - e4[a3]) * t4), r3.push(a3 > 0 ? 0.5 * (e4[a3 + 1] - e4[a3 - 1]) * t4 : void 0), i3.push(a3 > 0 ? (jn(n3[a3 - 1]) + jn(n3[a3])) * Mn(Nn(n3[a3 - 1]), Nn(n3[a3]), 0.5 * Nn(r3[a3])) : void 0);
        return [
          n3,
          r3,
          i3
        ];
      }, Fn = function(e4, t4, n3) {
        var r3 = e4.length - 1, i3 = r3 * r3;
        return function(a3) {
          var o3, s3 = a3 - (o3 = a3 >= 1 ? r3 - 1 : Math.max(0, Math.floor(a3 * r3))) / r3, c3 = s3 * s3, l3 = c3 * s3;
          return (t4[o3] + t4[o3 + 1] - 2 * n3[o3]) * i3 * l3 + (3 * n3[o3] - 2 * t4[o3] - t4[o3 + 1]) * r3 * c3 + t4[o3] * s3 + e4[o3];
        };
      }, In = function(e4) {
        if (e4.length < 3) return w2(e4);
        var t4 = e4.length - 1, n3 = Pn(e4), r3 = n3[0], i3 = n3[2];
        return i3[0] = r3[0], i3[t4] = r3[t4 - 1], Fn(e4, i3, r3);
      }, Ln = function(e4) {
        var t4 = e4.length - 1, n3 = Pn(e4), r3 = n3[0], i3 = n3[1], a3 = n3[2];
        i3[0] = 0.5 * (e4[1] - e4[t4]) * t4, i3[t4] = 0.5 * (e4[0] - e4[t4 - 1]) * t4;
        var o3 = (e4[0] - e4[t4]) * t4, s3 = o3;
        return a3[0] = (jn(o3) + jn(r3[0])) * Mn(Nn(o3), Nn(r3[0]), 0.5 * Nn(i3[0])), a3[t4] = (jn(r3[t4 - 1]) + jn(s3)) * Mn(Nn(r3[t4 - 1]), Nn(s3), 0.5 * Nn(i3[t4])), Fn(e4, a3, r3);
      }, Rn = U2(`rgb`), zn = function(e4) {
        var t4 = Rn(e4);
        return t4 !== void 0 && t4.r >= 0 && t4.r <= 1 && t4.g >= 0 && t4.g <= 1 && t4.b >= 0 && t4.b <= 1;
      }, Bn = U2(`rgb`), Vn = function(e4) {
        var t4 = Bn(e4);
        return t4.r = Math.max(0, Math.min(t4.r, 1)), t4.g = Math.max(0, Math.min(t4.g, 1)), t4.b = Math.max(0, Math.min(t4.b, 1)), t4;
      }, Hn = function(e4) {
        return (e4 = Te2(e4)) === void 0 || zn(e4) ? e4 : U2(e4.mode)(Vn(e4));
      }, Un = function(e4, t4) {
        if (t4 === void 0 && (t4 = `lch`), (e4 = Te2(e4)) === void 0 || zn(e4)) return e4;
        var n3 = U2(e4.mode);
        e4 = U2(t4)(e4);
        var r3 = Object.assign({}, e4, {
          c: 0
        });
        if (!zn(r3)) return n3(Vn(r3));
        for (var i3, a3 = 0, o3 = e4.c, s3 = H2(t4).ranges.c, c3 = (s3[1] - s3[0]) / 2 ** 13; o3 - a3 > c3; ) r3.c = a3 + 0.5 * (o3 - a3), zn(r3) ? (i3 = r3.c, a3 = r3.c) : o3 = r3.c;
        return n3(zn(r3) ? r3 : Object.assign({}, r3, {
          c: i3
        }));
      }, Wn = {
        normal: function(e4, t4) {
          return t4;
        },
        multiply: function(e4, t4) {
          return e4 * t4;
        },
        screen: function(e4, t4) {
          return e4 + t4 - e4 * t4;
        },
        "hard-light": function(e4, t4) {
          return t4 < 0.5 ? 2 * e4 * t4 : 2 * t4 * (1 - e4) - 1;
        },
        overlay: function(e4, t4) {
          return e4 < 0.5 ? 2 * t4 * e4 : 2 * e4 * (1 - t4) - 1;
        },
        darken: function(e4, t4) {
          return Math.min(e4, t4);
        },
        lighten: function(e4, t4) {
          return Math.max(e4, t4);
        },
        "color-dodge": function(e4, t4) {
          return e4 === 0 ? 0 : t4 === 1 ? 1 : Math.min(1, e4 / (1 - t4));
        },
        "color-burn": function(e4, t4) {
          return e4 === 1 ? 1 : t4 === 0 ? 0 : 1 - Math.min(1, (1 - e4) / t4);
        },
        "soft-light": function(e4, t4) {
          return t4 < 0.5 ? e4 - (1 - 2 * t4) * e4 * (1 - e4) : e4 + (2 * t4 - 1) * ((e4 < 0.25 ? ((16 * e4 - 12) * e4 + 4) * e4 : Math.sqrt(e4)) - e4);
        },
        difference: function(e4, t4) {
          return Math.abs(e4 - t4);
        },
        exclusion: function(e4, t4) {
          return e4 + t4 - 2 * e4 * t4;
        }
      };
      function Gn(e4) {
        var t4 = U2(`lrgb`)(e4);
        return 0.2126 * t4.r + 0.7152 * t4.g + 0.0722 * t4.b;
      }
      var Kn = U2(`rgb`), qn = [
        [
          1,
          0,
          -0,
          0,
          1,
          0,
          -0,
          -0,
          1
        ],
        [
          0.856167,
          0.182038,
          -0.038205,
          0.029342,
          0.955115,
          0.015544,
          -288e-5,
          -1563e-6,
          1.004443
        ],
        [
          0.734766,
          0.334872,
          -0.069637,
          0.05184,
          0.919198,
          0.028963,
          -4928e-6,
          -4209e-6,
          1.009137
        ],
        [
          0.630323,
          0.465641,
          -0.095964,
          0.069181,
          0.890046,
          0.040773,
          -6308e-6,
          -7724e-6,
          1.014032
        ],
        [
          0.539009,
          0.579343,
          -0.118352,
          0.082546,
          0.866121,
          0.051332,
          -7136e-6,
          -0.011959,
          1.019095
        ],
        [
          0.458064,
          0.679578,
          -0.137642,
          0.092785,
          0.846313,
          0.060902,
          -7494e-6,
          -0.016807,
          1.024301
        ],
        [
          0.38545,
          0.769005,
          -0.154455,
          0.100526,
          0.829802,
          0.069673,
          -7442e-6,
          -0.02219,
          1.029632
        ],
        [
          0.319627,
          0.849633,
          -0.169261,
          0.106241,
          0.815969,
          0.07779,
          -7025e-6,
          -0.028051,
          1.035076
        ],
        [
          0.259411,
          0.923008,
          -0.18242,
          0.110296,
          0.80434,
          0.085364,
          -6276e-6,
          -0.034346,
          1.040622
        ],
        [
          0.203876,
          0.990338,
          -0.194214,
          0.112975,
          0.794542,
          0.092483,
          -5222e-6,
          -0.041043,
          1.046265
        ],
        [
          0.152286,
          1.052583,
          -0.204868,
          0.114503,
          0.786281,
          0.099216,
          -3882e-6,
          -0.048116,
          1.051998
        ]
      ], Jn = [
        [
          1,
          0,
          -0,
          0,
          1,
          0,
          -0,
          -0,
          1
        ],
        [
          0.866435,
          0.177704,
          -0.044139,
          0.049567,
          0.939063,
          0.01137,
          -3453e-6,
          7233e-6,
          0.99622
        ],
        [
          0.760729,
          0.319078,
          -0.079807,
          0.090568,
          0.889315,
          0.020117,
          -6027e-6,
          0.013325,
          0.992702
        ],
        [
          0.675425,
          0.43385,
          -0.109275,
          0.125303,
          0.847755,
          0.026942,
          -795e-5,
          0.018572,
          0.989378
        ],
        [
          0.605511,
          0.52856,
          -0.134071,
          0.155318,
          0.812366,
          0.032316,
          -9376e-6,
          0.023176,
          0.9862
        ],
        [
          0.547494,
          0.607765,
          -0.155259,
          0.181692,
          0.781742,
          0.036566,
          -0.01041,
          0.027275,
          0.983136
        ],
        [
          0.498864,
          0.674741,
          -0.173604,
          0.205199,
          0.754872,
          0.039929,
          -0.011131,
          0.030969,
          0.980162
        ],
        [
          0.457771,
          0.731899,
          -0.18967,
          0.226409,
          0.731012,
          0.042579,
          -0.011595,
          0.034333,
          0.977261
        ],
        [
          0.422823,
          0.781057,
          -0.203881,
          0.245752,
          0.709602,
          0.044646,
          -0.011843,
          0.037423,
          0.974421
        ],
        [
          0.392952,
          0.82361,
          -0.216562,
          0.263559,
          0.69021,
          0.046232,
          -0.01191,
          0.040281,
          0.97163
        ],
        [
          0.367322,
          0.860646,
          -0.227968,
          0.280085,
          0.672501,
          0.047413,
          -0.01182,
          0.04294,
          0.968881
        ]
      ], Yn = [
        [
          1,
          0,
          -0,
          0,
          1,
          0,
          -0,
          -0,
          1
        ],
        [
          0.92667,
          0.092514,
          -0.019184,
          0.021191,
          0.964503,
          0.014306,
          8437e-6,
          0.054813,
          0.93675
        ],
        [
          0.89572,
          0.13333,
          -0.02905,
          0.029997,
          0.9454,
          0.024603,
          0.013027,
          0.104707,
          0.882266
        ],
        [
          0.905871,
          0.127791,
          -0.033662,
          0.026856,
          0.941251,
          0.031893,
          0.01341,
          0.148296,
          0.838294
        ],
        [
          0.948035,
          0.08949,
          -0.037526,
          0.014364,
          0.946792,
          0.038844,
          0.010853,
          0.193991,
          0.795156
        ],
        [
          1.017277,
          0.027029,
          -0.044306,
          -6113e-6,
          0.958479,
          0.047634,
          6379e-6,
          0.248708,
          0.744913
        ],
        [
          1.104996,
          -0.046633,
          -0.058363,
          -0.032137,
          0.971635,
          0.060503,
          1336e-6,
          0.317922,
          0.680742
        ],
        [
          1.193214,
          -0.109812,
          -0.083402,
          -0.058496,
          0.97941,
          0.079086,
          -2346e-6,
          0.403492,
          0.598854
        ],
        [
          1.257728,
          -0.139648,
          -0.118081,
          -0.078003,
          0.975409,
          0.102594,
          -3316e-6,
          0.501214,
          0.502102
        ],
        [
          1.278864,
          -0.125333,
          -0.153531,
          -0.084748,
          0.957674,
          0.127074,
          -989e-6,
          0.601151,
          0.399838
        ],
        [
          1.255528,
          -0.076749,
          -0.178779,
          -0.078411,
          0.930809,
          0.147602,
          4733e-6,
          0.691367,
          0.3039
        ]
      ], Xn = function(e4, t4) {
        var n3 = Math.max(0, Math.min(1, t4)), r3 = Math.round(n3 / 0.1), i3 = Math.round(n3 % 0.1), a3 = e4[r3];
        if (i3 > 0 && r3 < e4.length - 1) {
          var o3 = e4[r3 + 1];
          a3 = a3.map((function(e5, t5) {
            return x2(a3[t5], o3[t5], i3);
          }));
        }
        return function(e5) {
          var t5 = Te2(e5);
          if (t5 !== void 0) {
            var n4 = Kn(t5), r4 = n4.r, i4 = n4.g, o4 = n4.b, s3 = {
              mode: `rgb`,
              r: a3[0] * r4 + a3[1] * i4 + a3[2] * o4,
              g: a3[3] * r4 + a3[4] * i4 + a3[5] * o4,
              b: a3[6] * r4 + a3[7] * i4 + a3[8] * o4
            };
            return t5.alpha !== void 0 && (s3.alpha = t5.alpha), U2(t5.mode)(s3);
          }
        };
      }, Zn = function(e4) {
        return e4 === void 0 && (e4 = 1), Xn(qn, e4);
      }, Qn = function(e4) {
        return e4 === void 0 && (e4 = 1), Xn(Jn, e4);
      }, $n = function(e4) {
        return e4 === void 0 && (e4 = 1), Xn(Yn, e4);
      }, er = function(e4) {
        return Math.max(e4, 0);
      }, tr = function(e4) {
        return Math.max(Math.min(e4, 1), 0);
      }, nr = function(e4, t4, n3) {
        n3 === void 0 && (n3 = false);
        var r3 = U2(t4), i3 = H2(t4).channels;
        return function(a3) {
          var o3 = r3(a3);
          if (o3) {
            for (var s3, c3 = {
              mode: t4
            }, l3 = i3.length, u3 = 0; u3 < e4.length; u3++) o3[s3 = i3[Math.floor(u3 / l3)]] !== void 0 && (c3[s3] = (c3[s3] || 0) + e4[u3] * (o3[i3[u3 % l3]] || 0));
            if (!n3) return c3;
            var d3 = Te2(a3);
            return d3 && c3.mode !== d3.mode ? U2(d3.mode)(c3) : c3;
          }
        };
      };
      V2(re2), V2(Ft), V2(Kt), V2(qt), V2(Pe2), V2(Ae2), V2(Ne2), V2(Ie2), V2(Ue2), V2(Ke2), V2(et2), V2(dt), V2(mt), V2(ht), V2(kt), V2(j2), V2(Et), V2(ae2), V2(fe2), V2(ye2), V2(E2), V2(Yt), V2(Jt), V2(Xt), V2(tn), V2(nn);
      var rr = U2(`a98`), ir = U2(`cubehelix`), ar = U2(`dlab`), or = U2(`dlch`), sr = U2(`hsi`), cr = U2(`hsl`), lr = U2(`hsv`), ur = U2(`hwb`), dr = U2(`jab`), fr = U2(`jch`), pr = U2(`lab`), mr = U2(`lab65`), hr = U2(`lch`), gr = U2(`lch65`), _r = U2(`lchuv`), vr = U2(`lrgb`), yr = U2(`luv`), br = U2(`p3`), xr = U2(`prophoto`), Sr = U2(`rec2020`), Cr = U2(`rgb`), wr = U2(`xyz`), Tr = U2(`xyz65`), Er = U2(`yiq`), Dr = U2(`oklab`), Or = U2(`oklch`);
      e3.a98 = rr, e3.average = function(e4, t4, n3) {
        t4 === void 0 && (t4 = `rgb`);
        var r3 = H2(t4), i3 = e4.map(U2(t4));
        return r3.channels.reduce((function(e5, t5) {
          var a3, o3 = i3.map((function(e6) {
            return e6[t5];
          })).filter((function(e6) {
            return e6 !== void 0;
          }));
          return o3.length && (a3 = ke2(n3) ? n3 : n3 && ke2(n3[t5]) ? n3[t5] : r3.average && ke2(r3.average[t5]) ? r3.average[t5] : Oe2, e5[t5] = a3(o3, t5)), e5;
        }), {
          mode: t4
        });
      }, e3.averageAngle = K2, e3.averageNumber = Oe2, e3.blend = function(e4, t4, n3) {
        t4 === void 0 && (t4 = `normal`), n3 === void 0 && (n3 = `rgb`);
        var r3 = typeof t4 == `function` ? t4 : Wn[t4], i3 = U2(n3), a3 = H2(n3).channels;
        return e4.map((function(e5) {
          var t5 = i3(e5);
          return t5.alpha === void 0 && (t5.alpha = 1), t5;
        })).reduce((function(e5, t5) {
          if (e5 === void 0) return t5;
          var i4 = t5.alpha + e5.alpha * (1 - t5.alpha);
          return a3.reduce((function(n4, a4) {
            return a4 !== `alpha` && (i4 === 0 ? n4[a4] = 0 : (n4[a4] = t5.alpha * (1 - e5.alpha) * t5[a4] + t5.alpha * e5.alpha * r3(e5[a4], t5[a4]) + (1 - t5.alpha) * e5.alpha * e5[a4], n4[a4] = Math.max(0, Math.min(1, n4[a4] / i4)))), n4;
          }), {
            mode: n3,
            alpha: i4
          });
        }));
      }, e3.clamp = function(e4) {
        switch (e4 === void 0 && (e4 = `rgb`), e4) {
          case `rgb`:
            return Hn;
          case `lch`:
            return Un;
        }
      }, e3.clampChroma = Un, e3.clampRgb = Hn, e3.colorsNamed = n2, e3.converter = U2, e3.cubehelix = ir, e3.deficiencyDeuter = Qn, e3.deficiencyProt = Zn, e3.deficiencyTrit = $n, e3.defineMode = V2, e3.differenceCie76 = function() {
        return G2(`lab65`);
      }, e3.differenceCie94 = function(e4, t4, n3) {
        e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = 0.045), n3 === void 0 && (n3 = 0.015);
        var r3 = U2(`lab65`);
        return function(i3, a3) {
          var o3 = r3(i3), s3 = r3(a3), c3 = o3.l, l3 = o3.a, u3 = o3.b, d3 = Math.sqrt(l3 * l3 + u3 * u3), f3 = s3.l, p3 = s3.a, m3 = s3.b, h3 = Math.sqrt(p3 * p3 + m3 * m3), g3 = (c3 - f3) ** 2, _3 = (d3 - h3) ** 2, v3 = (l3 - p3) ** 2 + (u3 - m3) ** 2 - _3;
          return Math.sqrt(g3 / e4 ** 2 + _3 / (1 + t4 * d3) ** 2 + v3 / (1 + n3 * d3) ** 2);
        };
      }, e3.differenceCiede2000 = function(e4, t4, n3) {
        e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = 1), n3 === void 0 && (n3 = 1);
        var r3 = U2(`lab65`);
        return function(i3, a3) {
          var o3 = r3(i3), s3 = r3(a3), c3 = o3.l, l3 = o3.a, u3 = o3.b, d3 = Math.sqrt(l3 * l3 + u3 * u3), f3 = s3.l, p3 = s3.a, m3 = s3.b, h3 = (d3 + Math.sqrt(p3 * p3 + m3 * m3)) / 2, g3 = 0.5 * (1 - Math.sqrt(h3 ** 7 / (h3 ** 7 + 25 ** 7))), _3 = l3 * (1 + g3), v3 = p3 * (1 + g3), y3 = Math.sqrt(_3 * _3 + u3 * u3), b3 = Math.sqrt(v3 * v3 + m3 * m3), x3 = Math.abs(_3) + Math.abs(u3) === 0 ? 0 : Math.atan2(u3, _3);
          x3 += 2 * (x3 < 0) * Math.PI;
          var S3 = Math.abs(v3) + Math.abs(m3) === 0 ? 0 : Math.atan2(m3, v3);
          S3 += 2 * (S3 < 0) * Math.PI;
          var C3 = f3 - c3, w3 = b3 - y3, T3 = y3 * b3 == 0 ? 0 : S3 - x3;
          T3 -= 2 * (T3 > Math.PI) * Math.PI, T3 += 2 * (T3 < -Math.PI) * Math.PI;
          var E3, D3 = 2 * Math.sqrt(y3 * b3) * Math.sin(T3 / 2), O3 = (c3 + f3) / 2, k3 = (y3 + b3) / 2;
          y3 * b3 == 0 ? E3 = x3 + S3 : (E3 = (x3 + S3) / 2, E3 -= (Math.abs(x3 - S3) > Math.PI) * Math.PI, E3 += 2 * (E3 < 0) * Math.PI);
          var A3 = (O3 - 50) ** 2, j3 = 1 - 0.17 * Math.cos(E3 - Math.PI / 6) + 0.24 * Math.cos(2 * E3) + 0.32 * Math.cos(3 * E3 + Math.PI / 30) - 0.2 * Math.cos(4 * E3 - 63 * Math.PI / 180), M3 = 1 + 0.015 * A3 / Math.sqrt(20 + A3), N3 = 1 + 0.045 * k3, P3 = 1 + 0.015 * k3 * j3, ee3 = 30 * Math.PI / 180 * Math.exp(-1 * ((180 / Math.PI * E3 - 275) / 25) ** 2), te3 = 2 * Math.sqrt(k3 ** 7 / (k3 ** 7 + 25 ** 7)), ne3 = -1 * Math.sin(2 * ee3) * te3;
          return Math.sqrt((C3 / (e4 * M3)) ** 2 + (w3 / (t4 * N3)) ** 2 + (D3 / (n3 * P3)) ** 2 + ne3 * w3 / (t4 * N3) * D3 / (n3 * P3));
        };
      }, e3.differenceCmc = function(e4, t4) {
        e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = 1);
        var n3 = U2(`lab65`);
        return function(r3, i3) {
          var a3 = n3(r3), o3 = a3.l, s3 = a3.a, c3 = a3.b, l3 = Math.sqrt(s3 * s3 + c3 * c3), u3 = Math.atan2(c3, s3);
          u3 += 2 * Math.PI * (u3 < 0);
          var d3 = n3(i3), f3 = d3.l, p3 = d3.a, m3 = d3.b, h3 = Math.sqrt(p3 * p3 + m3 * m3), g3 = (o3 - f3) ** 2, _3 = (l3 - h3) ** 2, v3 = (s3 - p3) ** 2 + (c3 - m3) ** 2 - _3, y3 = Math.sqrt(l3 ** 4 / (l3 ** 4 + 1900)), b3 = o3 < 16 ? 0.511 : 0.040975 * o3 / (1 + 0.01765 * o3), x3 = 0.0638 * l3 / (1 + 0.0131 * l3) + 0.638, S3 = x3 * (y3 * (u3 >= 164 / 180 * Math.PI && u3 <= 345 / 180 * Math.PI ? 0.56 + Math.abs(0.2 * Math.cos(u3 + 168 / 180 * Math.PI)) : 0.36 + Math.abs(0.4 * Math.cos(u3 + 35 / 180 * Math.PI))) + 1 - y3);
          return Math.sqrt(g3 / (e4 * b3) ** 2 + _3 / (t4 * x3) ** 2 + v3 / S3 ** 2);
        };
      }, e3.differenceDin99o = function() {
        return G2(`dlab`);
      }, e3.differenceEuclidean = G2, e3.differenceHueChroma = De2, e3.differenceHueNaive = Ee2, e3.differenceHueSaturation = W2, e3.differenceHyab = function() {
        var e4 = U2(`lab65`);
        return function(t4, n3) {
          var r3 = e4(t4), i3 = e4(n3), a3 = r3.l - i3.l, o3 = r3.a - i3.a, s3 = r3.b - i3.b;
          return Math.abs(a3) + Math.sqrt(o3 * o3 + s3 * s3);
        };
      }, e3.differenceKotsarenkoRamos = function() {
        return G2(`yiq`, [
          0.5053,
          0.299,
          0.1957
        ]);
      }, e3.displayable = zn, e3.dlab = ar, e3.dlch = or, e3.easingGamma = S2, e3.easingInOutSine = Cn, e3.easingMidpoint = fn, e3.easingSmootherstep = function(e4) {
        return e4 * e4 * e4 * (e4 * (6 * e4 - 15) + 10);
      }, e3.easingSmoothstep = function(e4) {
        return e4 * e4 * (3 - 2 * e4);
      }, e3.filterBrightness = function(e4, t4) {
        return e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = `rgb`), pn(gn(er(e4)), t4, true);
      }, e3.filterContrast = function(e4, t4) {
        e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = `rgb`);
        var n3 = er(e4);
        return pn(gn(n3, (1 - n3) / 2), t4, true);
      }, e3.filterDeficiencyDeuter = Qn, e3.filterDeficiencyProt = Zn, e3.filterDeficiencyTrit = $n, e3.filterGrayscale = function(e4, t4) {
        return e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = `rgb`), nr([
          0.2126 + 0.7874 * (n3 = 1 - tr(e4)),
          0.7152 - 0.7152 * n3,
          0.0722 - 0.0722 * n3,
          0,
          0.2126 - 0.2126 * n3,
          0.7152 + 0.2848 * n3,
          0.0722 - 0.0722 * n3,
          0,
          0.2126 - 0.2126 * n3,
          0.7152 - 0.7152 * n3,
          0.0722 + 0.9278 * n3,
          0,
          0,
          0,
          0,
          1
        ], t4, true);
        var n3;
      }, e3.filterHueRotate = function(e4, t4) {
        return e4 === void 0 && (e4 = 0), t4 === void 0 && (t4 = `rgb`), nr((function(e5) {
          var t5 = Math.PI * e5 / 180, n3 = Math.cos(t5), r3 = Math.sin(t5);
          return [
            0.213 + 0.787 * n3 - 0.213 * r3,
            0.715 - 0.715 * n3 - 0.715 * r3,
            0.072 - 0.072 * n3 + 0.928 * r3,
            0,
            0.213 - 0.213 * n3 + 0.143 * r3,
            0.715 + 0.285 * n3 + 0.14 * r3,
            0.072 - 0.072 * n3 - 0.283 * r3,
            0,
            0.213 - 0.213 * n3 - 0.787 * r3,
            0.715 - 0.715 * n3 + 0.715 * r3,
            0.072 + 0.928 * n3 + 0.072 * r3,
            0,
            0,
            0,
            0,
            1
          ];
        })(e4), t4, true);
      }, e3.filterInvert = function(e4, t4) {
        e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = `rgb`);
        var n3 = tr(e4);
        return pn((function(e5, t5) {
          return t5 === `alpha` ? e5 : (function(e6, t6, n4) {
            return e6 === void 0 || t6 === void 0 ? void 0 : e6 + n4 * (t6 - e6);
          })(n3, 1 - n3, e5);
        }), t4, true);
      }, e3.filterSaturate = function(e4, t4) {
        return e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = `rgb`), nr((function(e5) {
          var t5 = er(e5);
          return [
            0.213 + 0.787 * t5,
            0.715 - 0.715 * t5,
            0.072 - 0.072 * t5,
            0,
            0.213 - 0.213 * t5,
            0.715 + 0.285 * t5,
            0.072 - 0.072 * t5,
            0,
            0.213 - 0.213 * t5,
            0.715 - 0.715 * t5,
            0.072 + 0.928 * t5,
            0,
            0,
            0,
            0,
            1
          ];
        })(e4), t4, true);
      }, e3.filterSepia = function(e4, t4) {
        return e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = `rgb`), nr([
          0.393 + 0.607 * (n3 = 1 - tr(e4)),
          0.769 - 0.769 * n3,
          0.189 - 0.189 * n3,
          0,
          0.349 - 0.349 * n3,
          0.686 + 0.314 * n3,
          0.168 - 0.168 * n3,
          0,
          0.272 - 0.272 * n3,
          0.534 - 0.534 * n3,
          0.131 + 0.869 * n3,
          0,
          0,
          0,
          0,
          1
        ], t4, true);
        var n3;
      }, e3.fixupAlpha = T2, e3.fixupHueDecreasing = function(e4) {
        return L2(e4, (function(e5) {
          return e5 <= 0 ? e5 : e5 - 360;
        }));
      }, e3.fixupHueIncreasing = function(e4) {
        return L2(e4, (function(e5) {
          return e5 >= 0 ? e5 : e5 + 360;
        }));
      }, e3.fixupHueLonger = function(e4) {
        return L2(e4, (function(e5) {
          return Math.abs(e5) >= 180 || e5 === 0 ? e5 : e5 - 360 * Math.sign(e5);
        }));
      }, e3.fixupHueShorter = R2, e3.formatCss = function(e4) {
        var t4 = Te2(e4);
        if (t4) {
          var n3 = H2(t4.mode);
          if (!n3.serialize || typeof n3.serialize == `string`) {
            var r3 = n3.serialize || `color(--` + t4.mode + ` `;
            return n3.channels.forEach((function(e5, n4) {
              e5 !== `alpha` && (r3 += (n4 ? ` ` : ``) + (t4[e5] || 0));
            })), t4.alpha !== void 0 && t4.alpha < 1 && (r3 += ` / ` + t4.alpha), r3 + `)`;
          }
          return typeof n3.serialize == `function` ? n3.serialize(t4) : void 0;
        }
      }, e3.formatHex = un, e3.formatHex8 = function(e4) {
        var t4 = an(e4);
        if (t4 !== void 0) {
          var n3 = ln(t4.alpha === void 0 ? 1 : t4.alpha);
          return un(t4) + (256 | n3).toString(16).slice(1);
        }
      }, e3.formatHsl = function(e4) {
        var t4 = on(e4);
        if (t4 !== void 0) {
          var n3 = sn(t4.h || 0), r3 = sn(100 * cn(t4.s)), i3 = sn(100 * cn(t4.l));
          return t4.alpha === void 0 || t4.alpha === 1 ? `hsl(` + n3 + `, ` + r3 + `%, ` + i3 + `%)` : `hsla(` + n3 + `, ` + r3 + `%, ` + i3 + `%, ` + sn(cn(t4.alpha)) + `)`;
        }
      }, e3.formatRgb = dn, e3.formatter = function(e4) {
        switch (e4 === void 0 && (e4 = `rgb`), e4) {
          case `rgb`:
            return dn;
          case `hex`:
            return un;
        }
      }, e3.getModeDefinition = H2, e3.hsi = sr, e3.hsl = cr, e3.hsv = lr, e3.hwb = ur, e3.interpolate = function(e4, t4, n3) {
        return t4 === void 0 && (t4 = `rgb`), bn(e4, t4, n3);
      }, e3.interpolateAlpha = T2, e3.interpolateCosine = function(e4, t4) {
        return t4 === void 0 && (t4 = 1), function(n3) {
          var r3 = S2(t4), i3 = C2((function(e5, t5, n4) {
            return x2(e5, t5, Cn(n4));
          }))((e4 || function(e5) {
            return e5;
          })(n3));
          return function(e5) {
            return i3(r3(e5));
          };
        };
      }, e3.interpolateHue = R2, e3.interpolateLinear = function(e4, t4) {
        return t4 === void 0 && (t4 = 1), function(n3) {
          var r3 = S2(t4);
          return function(t5) {
            return w2((e4 || function(e5) {
              return e5;
            })(n3))(r3(t5));
          };
        };
      }, e3.interpolateSplineBasis = function(e4, t4, n3) {
        return t4 === void 0 && (t4 = `default`), n3 === void 0 && (n3 = 1), function(r3) {
          var i3 = S2(n3);
          return t4 === `default` ? function(t5) {
            return En((e4 || function(e5) {
              return e5;
            })(r3))(i3(t5));
          } : t4 === `closed` ? function(t5) {
            return Dn((e4 || function(e5) {
              return e5;
            })(r3))(i3(t5));
          } : void 0;
        };
      }, e3.interpolateSplineMonotone = function(e4, t4, n3) {
        return t4 === void 0 && (t4 = `default`), n3 === void 0 && (n3 = 1), function(r3) {
          var i3 = S2(n3);
          return t4 === `closed` ? function(t5) {
            return Ln((e4 || function(e5) {
              return e5;
            })(r3))(i3(t5));
          } : t4 === `default` ? function(t5) {
            return In((e4 || function(e5) {
              return e5;
            })(r3))(i3(t5));
          } : void 0;
        };
      }, e3.interpolateSplineNatural = function(e4, t4, n3) {
        return t4 === void 0 && (t4 = `default`), n3 === void 0 && (n3 = 1), function(r3) {
          var i3 = S2(n3);
          return t4 === `default` ? function(t5) {
            return kn((e4 || function(e5) {
              return e5;
            })(r3))(i3(t5));
          } : t4 === `closed` ? function(t5) {
            return An((e4 || function(e5) {
              return e5;
            })(r3))(i3(t5));
          } : void 0;
        };
      }, e3.interpolateWith = xn, e3.interpolateWithPremultipliedAlpha = Sn, e3.interpolatorLinear = w2, e3.interpolatorPiecewise = C2, e3.interpolatorSplineBasis = En, e3.interpolatorSplineBasisClosed = Dn, e3.interpolatorSplineMonotone = In, e3.interpolatorSplineMonotone2 = function(e4) {
        if (e4.length < 3) return w2(e4);
        var t4 = e4.length - 1, n3 = Pn(e4), r3 = n3[0], i3 = n3[1], a3 = n3[2];
        return i3[0] = (2 * e4[1] - 1.5 * e4[0] - 0.5 * e4[2]) * t4, i3[t4] = (1.5 * e4[t4] - 2 * e4[t4 - 1] + 0.5 * e4[t4 - 2]) * t4, a3[0] = i3[0] * r3[0] <= 0 ? 0 : Nn(i3[0]) > 2 * Nn(r3[0]) ? 2 * r3[0] : i3[0], a3[t4] = i3[t4] * r3[t4 - 1] <= 0 ? 0 : Nn(i3[t4]) > 2 * Nn(r3[t4 - 1]) ? 2 * r3[t4 - 1] : i3[t4], Fn(e4, a3, r3);
      }, e3.interpolatorSplineMonotoneClosed = Ln, e3.interpolatorSplineNatural = kn, e3.interpolatorSplineNaturalClosed = An, e3.jab = dr, e3.jch = fr, e3.lab = pr, e3.lab65 = mr, e3.lch = hr, e3.lch65 = gr, e3.lchuv = _r, e3.lerp = x2, e3.lrgb = vr, e3.luv = yr, e3.mapAlphaDivide = hn, e3.mapAlphaMultiply = mn, e3.mapTransferGamma = function(e4, t4, n3) {
        return e4 === void 0 && (e4 = 1), t4 === void 0 && (t4 = 1), n3 === void 0 && (n3 = 0), function(r3, i3) {
          return i3 === `alpha` ? r3 : e4 * r3 ** +t4 + n3;
        };
      }, e3.mapTransferLinear = gn, e3.mapper = pn, e3.nearest = function(e4, t4, n3) {
        t4 === void 0 && (t4 = G2()), n3 === void 0 && (n3 = function(e5) {
          return e5;
        });
        var r3 = e4.map((function(e5, t5) {
          return {
            color: n3(e5),
            i: t5
          };
        }));
        return function(n4, i3, a3) {
          return i3 === void 0 && (i3 = 1), a3 === void 0 && (a3 = 1 / 0), isFinite(i3) && (i3 = Math.max(1, Math.min(i3, r3.length - 1))), r3.forEach((function(e5) {
            e5.d = t4(n4, e5.color);
          })), r3.sort((function(e5, t5) {
            return e5.d - t5.d;
          })).slice(0, i3).filter((function(e5) {
            return e5.d < a3;
          })).map((function(t5) {
            return e4[t5.i];
          }));
        };
      }, e3.oklab = Dr, e3.oklch = Or, e3.p3 = br, e3.parse = we2, e3.prophoto = xr, e3.random = function(e4, t4) {
        e4 === void 0 && (e4 = `rgb`), t4 === void 0 && (t4 = {});
        var n3 = H2(e4), r3 = (function(e5) {
          return Object.keys(e5).reduce((function(t5, n4) {
            var r4 = e5[n4];
            return t5[n4] = Array.isArray(r4) ? r4 : [
              r4,
              r4
            ], t5;
          }), {});
        })(t4);
        return n3.channels.reduce((function(e5, t5) {
          return (r3.alpha || t5 !== `alpha`) && (e5[t5] = (function(e6) {
            var t6 = e6[0], n4 = e6[1];
            return t6 + Math.random() * (n4 - t6);
          })(r3[t5] || n3.ranges[t5])), e5;
        }), {
          mode: e4
        });
      }, e3.rec2020 = Sr, e3.rgb = Cr, e3.round = rn, e3.samples = function(e4, t4) {
        e4 === void 0 && (e4 = 2), t4 === void 0 && (t4 = 1);
        var n3 = S2(t4);
        if (e4 < 2) return e4 < 1 ? [] : [
          n3(0.5)
        ];
        for (var r3 = [], i3 = 0; i3 < e4; i3++) r3.push(n3(i3 / (e4 - 1)));
        return r3;
      }, e3.wcagContrast = function(e4, t4) {
        var n3 = Gn(e4), r3 = Gn(t4);
        return (Math.max(n3, r3) + 0.05) / (Math.min(n3, r3) + 0.05);
      }, e3.wcagLuminance = Gn, e3.xyz = wr, e3.xyz65 = Tr, e3.yiq = Er, Object.defineProperty(e3, `__esModule`, {
        value: true
      });
    }));
  })), O = n(((e2, t2) => {
    var n2 = E();
    t2.exports = function(e3) {
      return typeof e3 == `object` && !!e3 && n2(e3) === false;
    };
  })), k = n(((e2, t2) => {
    var n2 = E(), r2 = O();
    Array.prototype.slice, t2.exports = i2;
    function i2(e3, t3) {
      if (!(this instanceof i2)) return typeof t3 == `number` ? new i2(e3).fromIndex(t3) : new i2(e3, t3);
      this.str = e3 || ``, this.lineToIndex = a2(this.str), t3 || (t3 = {}), this.origin = t3.origin === void 0 ? 1 : t3.origin;
    }
    i2.prototype.fromIndex = function(e3) {
      if (e3 < 0 || e3 >= this.str.length || isNaN(e3)) return null;
      var t3 = o2(e3, this.lineToIndex);
      return {
        line: t3 + this.origin,
        col: e3 - this.lineToIndex[t3] + this.origin
      };
    }, i2.prototype.toIndex = function(e3, t3) {
      if (t3 === void 0) return n2(e3) && e3.length >= 2 ? this.toIndex(e3[0], e3[1]) : r2(e3) && `line` in e3 && (`col` in e3 || `column` in e3) ? this.toIndex(e3.line, `col` in e3 ? e3.col : e3.column) : -1;
      if (isNaN(e3) || isNaN(t3)) return -1;
      if (e3 -= this.origin, t3 -= this.origin, e3 >= 0 && t3 >= 0 && e3 < this.lineToIndex.length) {
        var i3 = this.lineToIndex[e3], a3 = e3 === this.lineToIndex.length - 1 ? this.str.length : this.lineToIndex[e3 + 1];
        if (t3 < a3 - i3) return i3 + t3;
      }
      return -1;
    };
    function a2(e3) {
      for (var t3 = e3.split(`
`), n3 = Array(t3.length), r3 = 0, i3 = 0, a3 = t3.length; i3 < a3; i3++) n3[i3] = r3, r3 += t3[i3].length + 1;
      return n3;
    }
    function o2(e3, t3) {
      if (e3 >= t3[t3.length - 1]) return t3.length - 1;
      for (var n3 = 0, r3 = t3.length - 2, i3; n3 < r3; ) if (i3 = n3 + (r3 - n3 >> 1), e3 < t3[i3]) r3 = i3 - 1;
      else if (e3 >= t3[i3 + 1]) n3 = i3 + 1;
      else {
        n3 = i3;
        break;
      }
      return n3;
    }
  })), A = n(((e2, t2) => {
    (function(e3, n2) {
      typeof define == `function` && define.amd ? define([], n2) : typeof t2 == `object` && t2.exports ? t2.exports = n2() : e3.moo = n2();
    })(e2, function() {
      var e3 = Object.prototype.hasOwnProperty, t3 = Object.prototype.toString, n2 = typeof RegExp().sticky == `boolean`;
      function r2(e4) {
        return e4 && t3.call(e4) === `[object RegExp]`;
      }
      function i2(e4) {
        return e4 && typeof e4 == `object` && !r2(e4) && !Array.isArray(e4);
      }
      function a2(e4) {
        return e4.replace(/[-\/\\^$*+?.()|[\]{}]/g, `\\$&`);
      }
      function o2(e4) {
        return RegExp(`|` + e4).exec(``).length - 1;
      }
      function s2(e4) {
        return `(` + e4 + `)`;
      }
      function c2(e4) {
        return e4.length ? `(?:` + e4.map(function(e5) {
          return `(?:` + e5 + `)`;
        }).join(`|`) + `)` : `(?!)`;
      }
      function l2(e4) {
        if (typeof e4 == `string`) return `(?:` + a2(e4) + `)`;
        if (r2(e4)) {
          if (e4.ignoreCase) throw Error(`RegExp /i flag not allowed`);
          if (e4.global) throw Error(`RegExp /g flag is implied`);
          if (e4.sticky) throw Error(`RegExp /y flag is implied`);
          if (e4.multiline) throw Error(`RegExp /m flag is implied`);
          return e4.source;
        } else throw Error(`Not a pattern: ` + e4);
      }
      function u2(e4) {
        for (var t4 = Object.getOwnPropertyNames(e4), n3 = [], r3 = 0; r3 < t4.length; r3++) {
          var a3 = t4[r3], o3 = e4[a3], s3 = [].concat(o3);
          if (a3 === `include`) {
            for (var c3 = 0; c3 < s3.length; c3++) n3.push({
              include: s3[c3]
            });
            continue;
          }
          var l3 = [];
          s3.forEach(function(e5) {
            i2(e5) ? (l3.length && n3.push(f2(a3, l3)), n3.push(f2(a3, e5)), l3 = []) : l3.push(e5);
          }), l3.length && n3.push(f2(a3, l3));
        }
        return n3;
      }
      function d2(e4) {
        for (var t4 = [], n3 = 0; n3 < e4.length; n3++) {
          var r3 = e4[n3];
          if (r3.include) {
            for (var i3 = [].concat(r3.include), a3 = 0; a3 < i3.length; a3++) t4.push({
              include: i3[a3]
            });
            continue;
          }
          if (!r3.type) throw Error(`Rule has no type: ` + JSON.stringify(r3));
          t4.push(f2(r3.type, r3));
        }
        return t4;
      }
      function f2(t4, n3) {
        if (i2(n3) || (n3 = {
          match: n3
        }), n3.include) throw Error(`Matching rules cannot also include states`);
        var a3 = {
          defaultType: t4,
          lineBreaks: !!n3.error || !!n3.fallback,
          pop: false,
          next: null,
          push: null,
          error: false,
          fallback: false,
          value: null,
          type: null,
          shouldThrow: false
        };
        for (var o3 in n3) e3.call(n3, o3) && (a3[o3] = n3[o3]);
        if (typeof a3.type == `string` && t4 !== a3.type) throw Error(`Type transform cannot be a string (type '` + a3.type + `' for token '` + t4 + `')`);
        var s3 = a3.match;
        return a3.match = Array.isArray(s3) ? s3 : s3 ? [
          s3
        ] : [], a3.match.sort(function(e4, t5) {
          return r2(e4) && r2(t5) ? 0 : r2(t5) ? -1 : r2(e4) ? 1 : t5.length - e4.length;
        }), a3;
      }
      function p2(e4) {
        return Array.isArray(e4) ? d2(e4) : u2(e4);
      }
      var m2 = f2(`error`, {
        lineBreaks: true,
        shouldThrow: true
      });
      function h2(e4, t4) {
        for (var i3 = null, a3 = /* @__PURE__ */ Object.create(null), u3 = true, d3 = null, f3 = [], p3 = [], h3 = 0; h3 < e4.length; h3++) e4[h3].fallback && (u3 = false);
        for (var h3 = 0; h3 < e4.length; h3++) {
          var g3 = e4[h3];
          if (g3.include) throw Error(`Inheritance is not allowed in stateless lexers`);
          if (g3.error || g3.fallback) {
            if (i3) throw !g3.fallback == !i3.fallback ? Error(`Multiple ` + (g3.fallback ? `fallback` : `error`) + ` rules not allowed (for token '` + g3.defaultType + `')`) : Error(`fallback and error are mutually exclusive (for token '` + g3.defaultType + `')`);
            i3 = g3;
          }
          var _3 = g3.match.slice();
          if (u3) for (; _3.length && typeof _3[0] == `string` && _3[0].length === 1; ) {
            var v3 = _3.shift();
            a3[v3.charCodeAt(0)] = g3;
          }
          if (g3.pop || g3.push || g3.next) {
            if (!t4) throw Error(`State-switching options are not allowed in stateless lexers (for token '` + g3.defaultType + `')`);
            if (g3.fallback) throw Error(`State-switching options are not allowed on fallback tokens (for token '` + g3.defaultType + `')`);
          }
          if (_3.length !== 0) {
            u3 = false, f3.push(g3);
            for (var y3 = 0; y3 < _3.length; y3++) {
              var b3 = _3[y3];
              if (r2(b3)) {
                if (d3 === null) d3 = b3.unicode;
                else if (d3 !== b3.unicode && g3.fallback === false) throw Error(`If one rule is /u then all must be`);
              }
            }
            var x3 = c2(_3.map(l2)), S3 = new RegExp(x3);
            if (S3.test(``)) throw Error(`RegExp matches empty string: ` + S3);
            if (o2(x3) > 0) throw Error(`RegExp has capture groups: ` + S3 + `
Use (?: \u2026 ) instead`);
            if (!g3.lineBreaks && S3.test(`
`)) throw Error(`Rule should declare lineBreaks: ` + S3);
            p3.push(s2(x3));
          }
        }
        var C3 = i3 && i3.fallback, w2 = n2 && !C3 ? `ym` : `gm`, T2 = n2 || C3 ? `` : `|`;
        return d3 === true && (w2 += `u`), {
          regexp: new RegExp(c2(p3) + T2, w2),
          groups: f3,
          fast: a3,
          error: i3 || m2
        };
      }
      function g2(e4) {
        return new b2({
          start: h2(p2(e4))
        }, `start`);
      }
      function _2(e4, t4, n3) {
        var r3 = e4 && (e4.push || e4.next);
        if (r3 && !n3[r3]) throw Error(`Missing state '` + r3 + `' (in token '` + e4.defaultType + `' of state '` + t4 + `')`);
        if (e4 && e4.pop && +e4.pop != 1) throw Error(`pop must be 1 (in token '` + e4.defaultType + `' of state '` + t4 + `')`);
      }
      function v2(e4, t4) {
        var n3 = e4.$all ? p2(e4.$all) : [];
        delete e4.$all;
        var r3 = Object.getOwnPropertyNames(e4);
        t4 || (t4 = r3[0]);
        for (var i3 = /* @__PURE__ */ Object.create(null), a3 = 0; a3 < r3.length; a3++) {
          var o3 = r3[a3];
          i3[o3] = p2(e4[o3]).concat(n3);
        }
        for (var a3 = 0; a3 < r3.length; a3++) for (var o3 = r3[a3], s3 = i3[o3], c3 = /* @__PURE__ */ Object.create(null), l3 = 0; l3 < s3.length; l3++) {
          var u3 = s3[l3];
          if (u3.include) {
            var d3 = [
              l3,
              1
            ];
            if (u3.include !== o3 && !c3[u3.include]) {
              c3[u3.include] = true;
              var f3 = i3[u3.include];
              if (!f3) throw Error(`Cannot include nonexistent state '` + u3.include + `' (in state '` + o3 + `')`);
              for (var m3 = 0; m3 < f3.length; m3++) {
                var g3 = f3[m3];
                s3.indexOf(g3) === -1 && d3.push(g3);
              }
            }
            s3.splice.apply(s3, d3), l3--;
          }
        }
        for (var v3 = /* @__PURE__ */ Object.create(null), a3 = 0; a3 < r3.length; a3++) {
          var o3 = r3[a3];
          v3[o3] = h2(i3[o3], true);
        }
        for (var a3 = 0; a3 < r3.length; a3++) {
          for (var y3 = r3[a3], x3 = v3[y3], S3 = x3.groups, l3 = 0; l3 < S3.length; l3++) _2(S3[l3], y3, v3);
          for (var C3 = Object.getOwnPropertyNames(x3.fast), l3 = 0; l3 < C3.length; l3++) _2(x3.fast[C3[l3]], y3, v3);
        }
        return new b2(v3, t4);
      }
      function y2(e4) {
        for (var t4 = /* @__PURE__ */ Object.create(null), n3 = /* @__PURE__ */ Object.create(null), r3 = Object.getOwnPropertyNames(e4), i3 = 0; i3 < r3.length; i3++) {
          var a3 = r3[i3], o3 = e4[a3];
          (Array.isArray(o3) ? o3 : [
            o3
          ]).forEach(function(e5) {
            if ((n3[e5.length] = n3[e5.length] || []).push(e5), typeof e5 != `string`) throw Error(`keyword must be string (in keyword '` + a3 + `')`);
            t4[e5] = a3;
          });
        }
        function s3(e5) {
          return JSON.stringify(e5);
        }
        var c3 = ``;
        for (var l3 in c3 += `switch (value.length) {
`, n3) {
          var u3 = n3[l3];
          c3 += `case ` + l3 + `:
`, c3 += `switch (value) {
`, u3.forEach(function(e5) {
            var n4 = t4[e5];
            c3 += `case ` + s3(e5) + `: return ` + s3(n4) + `
`;
          }), c3 += `}
`;
        }
        return c3 += `}
`, Function(`value`, c3);
      }
      var b2 = function(e4, t4) {
        this.startState = t4, this.states = e4, this.buffer = ``, this.stack = [], this.reset();
      };
      b2.prototype.reset = function(e4, t4) {
        return this.buffer = e4 || ``, this.index = 0, this.line = t4 ? t4.line : 1, this.col = t4 ? t4.col : 1, this.queuedToken = t4 ? t4.queuedToken : null, this.queuedThrow = t4 ? t4.queuedThrow : null, this.setState(t4 ? t4.state : this.startState), this.stack = t4 && t4.stack ? t4.stack.slice() : [], this;
      }, b2.prototype.save = function() {
        return {
          line: this.line,
          col: this.col,
          state: this.state,
          stack: this.stack.slice(),
          queuedToken: this.queuedToken,
          queuedThrow: this.queuedThrow
        };
      }, b2.prototype.setState = function(e4) {
        if (!(!e4 || this.state === e4)) {
          this.state = e4;
          var t4 = this.states[e4];
          this.groups = t4.groups, this.error = t4.error, this.re = t4.regexp, this.fast = t4.fast;
        }
      }, b2.prototype.popState = function() {
        this.setState(this.stack.pop());
      }, b2.prototype.pushState = function(e4) {
        this.stack.push(this.state), this.setState(e4);
      };
      var x2 = n2 ? function(e4, t4) {
        return e4.exec(t4);
      } : function(e4, t4) {
        var n3 = e4.exec(t4);
        return n3[0].length === 0 ? null : n3;
      };
      b2.prototype._getGroup = function(e4) {
        for (var t4 = this.groups.length, n3 = 0; n3 < t4; n3++) if (e4[n3 + 1] !== void 0) return this.groups[n3];
        throw Error(`Cannot find token type for matched text`);
      };
      function S2() {
        return this.value;
      }
      if (b2.prototype.next = function() {
        var e4 = this.index;
        if (this.queuedGroup) {
          var t4 = this._token(this.queuedGroup, this.queuedText, e4);
          return this.queuedGroup = null, this.queuedText = ``, t4;
        }
        var n3 = this.buffer;
        if (e4 !== n3.length) {
          var r3 = this.fast[n3.charCodeAt(e4)];
          if (r3) return this._token(r3, n3.charAt(e4), e4);
          var i3 = this.re;
          i3.lastIndex = e4;
          var a3 = x2(i3, n3), o3 = this.error;
          if (a3 == null) return this._token(o3, n3.slice(e4, n3.length), e4);
          var r3 = this._getGroup(a3), s3 = a3[0];
          return o3.fallback && a3.index !== e4 ? (this.queuedGroup = r3, this.queuedText = s3, this._token(o3, n3.slice(e4, a3.index), e4)) : this._token(r3, s3, e4);
        }
      }, b2.prototype._token = function(e4, t4, n3) {
        var r3 = 0;
        if (e4.lineBreaks) {
          var i3 = /\n/g, a3 = 1;
          if (t4 === `
`) r3 = 1;
          else for (; i3.exec(t4); ) r3++, a3 = i3.lastIndex;
        }
        var o3 = {
          type: typeof e4.type == `function` && e4.type(t4) || e4.defaultType,
          value: typeof e4.value == `function` ? e4.value(t4) : t4,
          text: t4,
          toString: S2,
          offset: n3,
          lineBreaks: r3,
          line: this.line,
          col: this.col
        }, s3 = t4.length;
        if (this.index += s3, this.line += r3, r3 === 0 ? this.col += s3 : this.col = s3 - a3 + 1, e4.shouldThrow) throw Error(this.formatError(o3, `invalid syntax`));
        return e4.pop ? this.popState() : e4.push ? this.pushState(e4.push) : e4.next && this.setState(e4.next), o3;
      }, typeof Symbol < `u` && Symbol.iterator) {
        var C2 = function(e4) {
          this.lexer = e4;
        };
        C2.prototype.next = function() {
          var e4 = this.lexer.next();
          return {
            value: e4,
            done: !e4
          };
        }, C2.prototype[Symbol.iterator] = function() {
          return this;
        }, b2.prototype[Symbol.iterator] = function() {
          return new C2(this);
        };
      }
      return b2.prototype.formatError = function(e4, t4) {
        if (e4 == null) var n3 = this.buffer.slice(this.index), e4 = {
          text: n3,
          offset: this.index,
          lineBreaks: n3.indexOf(`
`) === -1 ? 0 : 1,
          line: this.line,
          col: this.col
        };
        var r3 = Math.max(0, e4.offset - e4.col + 1), i3 = e4.lineBreaks ? e4.text.indexOf(`
`) : e4.text.length, a3 = this.buffer.substring(r3, e4.offset + i3);
        return t4 += ` at line ` + e4.line + ` col ` + e4.col + `:

`, t4 += `  ` + a3 + `
`, t4 += `  ` + Array(e4.col).join(` `) + `^`, t4;
      }, b2.prototype.clone = function() {
        return new b2(this.states, this.state);
      }, b2.prototype.has = function(e4) {
        return true;
      }, {
        compile: g2,
        states: v2,
        error: Object.freeze({
          error: true
        }),
        fallback: Object.freeze({
          fallback: true
        }),
        keywords: y2
      };
    });
  })), j = n(((e2, t2) => {
    Symbol = typeof Symbol > `u` ? [] : Symbol;
    function n2(e3, t3) {
      var n3 = false;
      if (e3 instanceof RegExp && (e3 = e3.source, n3 = true), e3) {
        this.regexGroupStructure = r2(e3), n3 ? this.source = e3 : this.source = this.regexGroupStructure[2][0];
        try {
          this.regex = new RegExp(this.regexGroupStructure[0][2], t3);
        } catch {
          new RegExp(e3, t3);
        }
      } else this.regex = new RegExp(e3, t3), this.source = this.regex.source;
      this.flags = this.regex.flags, this.global = this.regex.global, this.ignoreCase = this.regex.ignoreCase, this.multiline = this.regex.multiline, this.sticky = this.regex.sticky, this.unicode = this.regex.unicode, this.lastIndex = this.regex.lastIndex;
    }
    n2.prototype = Object.create(RegExp.prototype, {
      flags: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      },
      global: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      },
      ignoreCase: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      },
      multiline: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      },
      source: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      },
      sticky: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      },
      unicode: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      }
    }), n2.prototype.constructor = n2, n2.prototype.toString = function() {
      return `/` + this.source + `/` + this.flags;
    }, n2.prototype.test = function(e3) {
      return this.regex.test(e3);
    }, n2.prototype[Symbol.search] = function(e3) {
      return this.regex[Symbol.search](e3);
    }, n2.prototype[Symbol.split] = function(e3, t3) {
      return this.regex[Symbol.split](e3);
    }, n2.prototype.exec = function(e3) {
      var t3 = [];
      t3.index = [];
      var n3 = this.regex.exec(e3);
      if (this.lastIndex = this.regex.lastIndex, !n3) return n3;
      t3[0] = n3[0], t3.index[0] = n3.index, t3.input = e3;
      var r3 = function(e4, i3) {
        for (var a3 = e4, o3 = 0; o3 < i3.length; o3++) {
          var s2 = i3[o3][0], c2 = i3[o3][1];
          c2 && (t3[c2] = n3[s2], t3[c2] === void 0 ? t3.index[c2] = void 0 : t3.index[c2] = a3), i3[o3][3] && r3(a3, i3[o3][3]), n3[s2] !== void 0 && (a3 += n3[s2].length);
        }
      };
      return this.regexGroupStructure && this.regexGroupStructure[0][3] && r3(n3.index, this.regexGroupStructure[0][3]), t3;
    }, n2.prototype[Symbol.match] = function(e3) {
      this.lastIndex = 0, this.regex.lastIndex = 0;
      var t3 = this.exec(e3);
      if (!t3) return null;
      for (var n3 = []; t3 && (n3.push(t3), t3[0].length === 0 && this.regex.lastIndex++, this.global); ) t3 = this.exec(e3);
      return this.lastIndex = 0, this.regex.lastIndex = 0, n3;
    }, n2.prototype[Symbol.replace] = function(e3, t3) {
      if (this.lastIndex = 0, this.regex.lastIndex = 0, !e3) return e3;
      var n3 = this.exec(e3);
      if (!n3) return e3;
      t3 instanceof Array || (t3 = [
        t3
      ]);
      for (var r3 = ``, i3 = 0, a3 = function(r4) {
        var i4 = ``, a4 = ``, o4 = t3[r4];
        if (typeof o4 == `string`) for (var s2 = 0; s2 < o4.length; s2++) if (a4 = o4.charAt(s2), a4 === `$`) if (s2++, a4 = o4.charAt(s2), a4 === `$`) i4 += `$`;
        else if (a4 === `&`) i4 += n3[r4];
        else if (a4 === "`") i4 += e3.substring(0, n3.index[r4]);
        else if (a4 === `'`) i4 += e3.substring(n3.index[r4] + n3[r4].length);
        else if (a4 >= `0` && a4 <= `9`) {
          var c2 = a4;
          for (s2++, a4 = o4.charAt(s2); a4 >= `0` && a4 <= `9`; ) c2 += a4, s2++, a4 = o4.charAt(s2);
          s2--, n3[c2] ? i4 += n3[c2] : i4 += `$` + c2;
        } else i4 += `$` + a4;
        else i4 += a4;
        else if (o4 instanceof Function) {
          for (var l2 = [
            n3[r4]
          ], u2 = 0; u2 < n3.length; u2++) l2.push(n3[u2]);
          for (var d2 = 0; u2 < n3.index.length; d2++) l2.push(n3.index[d2]);
          l2.push(e3), i4 += o4.apply(this, l2);
        }
        return i4;
      }, o3 = function(s2) {
        for (var c2 = 0; c2 < s2.length; c2++) {
          var l2 = s2[c2][1];
          l2 ? t3[l2] || t3[l2] === `` ? (n3[l2] || n3[l2] === ``) && (r3 += e3.substring(i3, n3.index[l2]) + a3(l2), i3 = n3.index[l2] + n3[l2].length) : s2[c2][3] && o3(s2[c2][3]) : o3(s2[c2][3]);
        }
      }; n3 && (t3[0] || t3[0] === `` ? (r3 += e3.substring(i3, n3.index[0]) + a3(0), i3 = n3.index[0] + n3[0].length) : this.regexGroupStructure && this.regexGroupStructure[0][3] && o3(this.regexGroupStructure[0][3]), n3[0].length === 0 && this.regex.lastIndex++, this.global); ) n3 = this.exec(e3);
      return this.lastIndex = 0, this.regex.lastIndex = 0, r3 + e3.substring(i3, e3.length);
    };
    function r2(e3) {
      if (!e3) return console.error(`The "regex" is empty! Returning empty array!`), [];
      var t3 = [], n3 = [
        ``
      ], r3 = [];
      r3[0] = false;
      var a3 = i2(e3, [
        0,
        0,
        0
      ], true, t3, n3, r3);
      if (r3[0]) {
        var o3 = function(e4) {
          for (var n4 = ``, r4, i3 = 0; i3 < e4[2].length; i3++) {
            if (r4 = e4[2].charAt(i3), n4 += r4, r4 === `\\`) {
              if (i3 + 1 === e4[2].length) continue;
              i3++, r4 = e4[2].charAt(i3);
              for (var a4 = ``; r4 >= `0` && r4 <= `9`; ) a4 += r4, i3++, r4 = e4[2].charAt(i3);
              a4 ? (n4 += t3[a4], i3--) : n4 += r4;
              continue;
            }
            if (r4 === `[`) {
              if (i3 + 1 === e4[2].length) continue;
              for (i3++, r4 = e4[2].charAt(i3); (r4 !== `]` || e4[2].charAt(i3 - 1) === `\\` && e4[2].charAt(i3 - 2) !== `\\`) && i3 < e4[2].length; ) n4 += r4, i3++, r4 = e4[2].charAt(i3);
              n4 += r4;
              continue;
            }
          }
          e4[2] = n4;
          for (var s2 = 0; s2 < e4[3].length; s2++) o3(e4[3][s2]);
        };
        o3(a3);
      }
      return [
        a3,
        t3,
        n3
      ];
    }
    function i2(e3, t3, n3, r3, o3, s2) {
      var c2;
      n3 ? (c2 = [
        t3[1],
        t3[2],
        ``,
        []
      ], r3[t3[2]] = t3[1]) : c2 = [
        void 0,
        void 0,
        ``,
        []
      ];
      var l2 = ``, u2;
      for (t3[0]; t3[0] < e3.length; t3[0]++) {
        if (u2 = e3.charAt(t3[0]), u2 === `\\`) {
          if (t3[0] + 1 === e3.length) {
            l2 += `\\`, o3[0] += `\\`;
            continue;
          }
          t3[0]++, u2 = e3.charAt(t3[0]);
          for (var d2 = ``; u2 >= `0` && u2 <= `9`; ) d2 += u2, t3[0]++, u2 = e3.charAt(t3[0]);
          d2 ? (r3[d2] ? (l2 += `\\` + d2, s2[0] = true) : d2.indexOf(`8`) >= 0 || d2.indexOf(`9`) >= 0 ? l2 += d2 : l2 += `\\x` + (`0` + parseInt(d2, 8).toString(16)).slice(-2).toUpperCase(), o3[0] += `\\` + d2, t3[0]--) : (l2 += `\\` + u2, o3[0] += `\\` + u2);
          continue;
        }
        if (u2 === `[`) {
          if (l2 += `[`, o3[0] += `[`, t3[0] + 1 === e3.length) continue;
          for (t3[0]++, u2 = e3.charAt(t3[0]); (u2 !== `]` || e3.charAt(t3[0] - 1) === `\\` && e3.charAt(t3[0] - 2) !== `\\`) && t3[0] < e3.length; ) l2 += u2, o3[0] += u2, t3[0]++, u2 = e3.charAt(t3[0]);
          l2 += u2, o3[0] += u2;
          continue;
        }
        if (u2 === `|`) {
          c2[2] += l2 + `|`, l2 = ``, o3[0] += `|`;
          continue;
        }
        if (u2 === `)`) return c2[2] += l2 + `)`, o3[0] += `)`, c2;
        if (u2 === `(`) {
          l2 && (t3[1]++, l2 = `(` + l2 + `)`, c2[3].push([
            t3[1],
            void 0,
            l2,
            []
          ])), t3[0]++;
          var f2, p2 = t3[1] + 1;
          if (n3 = true, e3.charAt(t3[0]) === `?` && t3[0] + 1 < e3.length && (e3.charAt(t3[0] + 1) === `=` || e3.charAt(t3[0] + 1) === `!` || e3.charAt(t3[0] + 1) === `:`)) {
            t3[0]++;
            var m2 = e3.charAt(t3[0]);
            t3[0]++, m2 === `:` && (n3 = false), o3[0] += `(?` + m2, f2 = i2(e3, t3, false, r3, o3, s2), f2[2] = `(?` + m2 + f2[2];
          } else t3[1]++, t3[2]++, o3[0] += `(`, f2 = i2(e3, t3, true, r3, o3, s2), f2[2] = `(` + f2[2];
          var h2 = t3[0], g2 = ``;
          if (t3[0] + 1 < e3.length) {
            if (u2 = e3.charAt(t3[0] + 1), u2 === `*`) t3[0]++, g2 = `*`;
            else if (u2 === `+`) t3[0]++, g2 = `+`;
            else if (u2 === `?`) t3[0]++, g2 = `?`;
            else if (u2 === `{`) {
              for (t3[0]++, g2 = `{`, t3[0]++, u2 = e3.charAt(t3[0]); u2 >= `0` && u2 <= `9` && t3[0] < e3.length; ) g2 += u2, t3[0]++, u2 = e3.charAt(t3[0]);
              if (u2 === `}`) g2 += `}`;
              else if (u2 === `,`) {
                for (g2 += `,`, t3[0]++, u2 = e3.charAt(t3[0]); u2 >= `0` && u2 <= `9` && t3[0] < e3.length; ) g2 += u2, t3[0]++, u2 = e3.charAt(t3[0]);
                u2 === `}` ? g2 += `}` : g2 = ``;
              } else g2 = ``;
            }
            g2.length > 0 ? (f2[2] += g2, o3[0] += g2, e3.charAt(t3[0] + 1) === `?` && (t3[0]++, f2[2] += `?`, o3[0] += `?`)) : t3[0] = h2;
          }
          (g2.length > 0 || !n3) && (a2(f2, r3), f2 = [
            p2,
            void 0,
            `(` + f2[2] + `)`,
            [
              f2
            ]
          ], t3[1]++), c2[2] += l2 + f2[2], c2[3].push(f2), l2 = ``;
        } else u2 = e3.charAt(t3[0]), l2 += u2, u2 === `/` ? o3[0] += `\\` + u2 : o3[0] += u2;
      }
      return c2[2] += l2, c2;
    }
    function a2(e3, t3) {
      e3[0] && (e3[0]++, e3[1] && (t3[e3[1]] = e3[0]));
      for (var n3 = 0; n3 < e3[3].length; n3++) a2(e3[3][n3], t3);
    }
    function o2() {
      t2 !== void 0 && (t2.exports = n2);
    }
    o2();
  })), M = n(((e2, t2) => {
    t2.exports = class extends Map {
      constructor(e3 = {}) {
        super(), typeof e3 == `number` && (e3 = {
          max: e3
        });
        let { max: t3, maxAge: n2 } = e3;
        this.max = t3 > 0 && t3 || 1 / 0, this.maxAge = n2 === void 0 ? -1 : n2, this.stale = !!e3.stale;
      }
      peek(e3) {
        return this.get(e3, false);
      }
      set(e3, t3, n2 = this.maxAge) {
        this.has(e3) && this.delete(e3), this.size + 1 > this.max && this.delete(this.keys().next().value);
        let r2 = n2 > -1 && n2 + Date.now();
        return super.set(e3, {
          expires: r2,
          content: t3
        });
      }
      get(e3, t3 = true) {
        let n2 = super.get(e3);
        if (n2 === void 0) return n2;
        let { expires: r2, content: i2 } = n2;
        return r2 !== false && Date.now() >= r2 ? (this.delete(e3), this.stale ? i2 : void 0) : (t3 && this.set(e3, i2), i2);
      }
    };
  })), N = n(((e2, t2) => {
    r(), (function(n2, r2) {
      typeof e2 == `object` ? t2.exports = r2(n2) : typeof define == `function` && define.amd ? define([], r2.bind(n2, n2)) : r2(n2);
    })(i === void 0 ? e2 : i, function(e3) {
      if (e3.CSS && e3.CSS.escape) return e3.CSS.escape;
      var t3 = function(e4) {
        if (arguments.length == 0) throw TypeError("`CSS.escape` requires an argument.");
        for (var t4 = String(e4), n2 = t4.length, r2 = -1, i2, a2 = ``, o2 = t4.charCodeAt(0); ++r2 < n2; ) {
          if (i2 = t4.charCodeAt(r2), i2 == 0) {
            a2 += `\uFFFD`;
            continue;
          }
          if (i2 >= 1 && i2 <= 31 || i2 == 127 || r2 == 0 && i2 >= 48 && i2 <= 57 || r2 == 1 && i2 >= 48 && i2 <= 57 && o2 == 45) {
            a2 += `\\` + i2.toString(16) + ` `;
            continue;
          }
          if (r2 == 0 && n2 == 1 && i2 == 45) {
            a2 += `\\` + t4.charAt(r2);
            continue;
          }
          if (i2 >= 128 || i2 == 45 || i2 == 95 || i2 >= 48 && i2 <= 57 || i2 >= 65 && i2 <= 90 || i2 >= 97 && i2 <= 122) {
            a2 += t4.charAt(r2);
            continue;
          }
          a2 += `\\` + t4.charAt(r2);
        }
        return a2;
      };
      return e3.CSS || (e3.CSS = {}), e3.CSS.escape = t3, t3;
    });
  })), P = n(((e2, t2) => {
    t2.exports = function(e3) {
      return Object.prototype.toString.call(e3) === `[object RegExp]`;
    };
  })), ee = n(((e2, t2) => {
    t2.exports = function(e3) {
      var t3 = typeof e3;
      return e3 !== null && (t3 === `object` || t3 === `function`);
    };
  })), te = n(((e2) => {
    Object.defineProperty(e2, `__esModule`, {
      value: true
    }), e2.default = (e3) => Object.getOwnPropertySymbols(e3).filter((t2) => Object.prototype.propertyIsEnumerable.call(e3, t2));
  })), ne = n(((e2, t2) => {
    var n2 = P(), r2 = ee(), i2 = te().default;
    t2.exports = (e3, t3, a2) => {
      let o2 = [];
      return (function e4(t4, a3, s2) {
        a3 || (a3 = {}), a3.indent = a3.indent || `	`, s2 || (s2 = ``);
        let c2;
        c2 = a3.inlineCharacterLimit === void 0 ? {
          newLine: `
`,
          newLineOrSpace: `
`,
          pad: s2,
          indent: s2 + a3.indent
        } : {
          newLine: `@@__STRINGIFY_OBJECT_NEW_LINE__@@`,
          newLineOrSpace: `@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@`,
          pad: `@@__STRINGIFY_OBJECT_PAD__@@`,
          indent: `@@__STRINGIFY_OBJECT_INDENT__@@`
        };
        let l2 = (e5) => {
          if (a3.inlineCharacterLimit === void 0) return e5;
          let t5 = e5.replace(new RegExp(c2.newLine, `g`), ``).replace(new RegExp(c2.newLineOrSpace, `g`), ` `).replace(RegExp(c2.pad + `|` + c2.indent, `g`), ``);
          return t5.length <= a3.inlineCharacterLimit ? t5 : e5.replace(RegExp(c2.newLine + `|` + c2.newLineOrSpace, `g`), `
`).replace(new RegExp(c2.pad, `g`), s2).replace(new RegExp(c2.indent, `g`), s2 + a3.indent);
        };
        if (o2.indexOf(t4) !== -1) return `"[Circular]"`;
        if (t4 == null || typeof t4 == `number` || typeof t4 == `boolean` || typeof t4 == `function` || typeof t4 == `symbol` || n2(t4)) return String(t4);
        if (t4 instanceof Date) return `new Date('${t4.toISOString()}')`;
        if (Array.isArray(t4)) {
          if (t4.length === 0) return `[]`;
          o2.push(t4);
          let n3 = `[` + c2.newLine + t4.map((n4, r3) => {
            let i3 = t4.length - 1 === r3 ? c2.newLine : `,` + c2.newLineOrSpace, o3 = e4(n4, a3, s2 + a3.indent);
            return a3.transform && (o3 = a3.transform(t4, r3, o3)), c2.indent + o3 + i3;
          }).join(``) + c2.pad + `]`;
          return o2.pop(), l2(n3);
        }
        if (r2(t4)) {
          let n3 = Object.keys(t4).concat(i2(t4));
          if (a3.filter && (n3 = n3.filter((e5) => a3.filter(t4, e5))), n3.length === 0) return `{}`;
          o2.push(t4);
          let r3 = `{` + c2.newLine + n3.map((r4, i3) => {
            let o3 = n3.length - 1 === i3 ? c2.newLine : `,` + c2.newLineOrSpace, l3 = typeof r4 == `symbol`, u2 = !l3 && /^[a-z$_][a-z$_0-9]*$/i.test(r4), d2 = l3 || u2 ? r4 : e4(r4, a3), f2 = e4(t4[r4], a3, s2 + a3.indent);
            return a3.transform && (f2 = a3.transform(t4, r4, f2)), c2.indent + String(d2) + `: ` + f2 + o3;
          }).join(``) + c2.pad + `}`;
          return o2.pop(), l2(r3);
        }
        return t4 = String(t4).replace(/[\r\n]/g, (e5) => e5 === `
` ? `\\n` : `\\r`), a3.singleQuotes === false ? (t4 = t4.replace(/"/g, `\\"`), `"${t4}"`) : (t4 = t4.replace(/\\?'/g, `\\'`), `'${t4}'`);
      })(e3, t3, a2);
    };
  })), re = n(((t2, n2) => {
    n2.exports = (function(e2, t3) {
      var n3 = {};
      function r2(t4) {
        if (n3[t4]) return n3[t4].exports;
        var i3 = n3[t4] = {
          i: t4,
          l: false,
          exports: {}
        };
        return e2[t4].call(i3.exports, i3, i3.exports, r2), i3.l = true, i3.exports;
      }
      r2.ab = `//`;
      function i2() {
        return r2(104);
      }
      return t3(r2), i2();
    })({
      34: function(e2, t3) {
        (function(e3, n3) {
          n3(t3);
        })(this, function(e3) {
          var t4 = {
            indent: `	`,
            tagCase: ``,
            attributeCase: ``,
            attributeQuotes: `double`,
            format: true,
            formatSkip: [
              `html`
            ],
            formatForce: [
              `body`
            ],
            inlineBreak: 3,
            compactBooleanAttributes: false,
            booleanAttributes: [
              `contenteditable`,
              `seamless`,
              `async`,
              `autofocus`,
              `autoplay`,
              `checked`,
              `controls`,
              `defer`,
              `disabled`,
              `formnovalidate`,
              `hidden`,
              `ismap`,
              `loop`,
              `multiple`,
              `muted`,
              `novalidate`,
              `readonly`,
              `required`,
              `reversed`,
              `selected`,
              `typemustmatch`
            ],
            selfClosingStyle: `html`,
            inlineElements: `a.abbr.acronym.applet.b.basefont.bdo.big.br.button.cite.code.del.dfn.em.font.i.iframe.img.input.ins.kbd.label.map.object.q.s.samp.select.small.span.strike.strong.sub.sup.textarea.tt.u.var`.split(`.`)
          };
          class n3 {
            constructor(e4) {
              this.options = Object.assign({}, t4, e4), this.quoteChar = this.options.attributeQuotes === `single` ? `'` : `"`;
            }
            get(e4) {
              return this.options[e4];
            }
            quote(e4) {
              return `${this.quoteChar}${e4 ?? ``}${this.quoteChar}`;
            }
            name(e4) {
              return r2(e4, this.options.tagCase);
            }
            attribute(e4) {
              return r2(e4, this.options.attributeCase);
            }
            isBooleanAttribute(e4) {
              return e4.options.boolean || this.get(`booleanAttributes`).indexOf((e4.name || ``).toLowerCase()) !== -1;
            }
            selfClose() {
              switch (this.options.selfClosingStyle) {
                case `xhtml`:
                  return ` /`;
                case `xml`:
                  return `/`;
                default:
                  return ``;
              }
            }
            indent(e4) {
              e4 || (e4 = 0);
              let t5 = ``;
              for (; e4--; ) t5 += this.options.indent;
              return t5;
            }
            isInline(e4) {
              return typeof e4 == `string` ? this.get(`inlineElements`).indexOf(e4.toLowerCase()) !== -1 : e4.name == null ? e4.isTextOnly : this.isInline(e4.name);
            }
            field(e4, t5) {
              return this.options.field(e4, t5);
            }
          }
          function r2(e4, t5) {
            return t5 && (e4 = t5 === `upper` ? e4.toUpperCase() : e4.toLowerCase()), e4;
          }
          class i2 {
            constructor(e4, t5) {
              this.key = e4, this.value = t5;
            }
          }
          class a2 {
            constructor(e4) {
              this._string = /* @__PURE__ */ new Map(), this._regexp = /* @__PURE__ */ new Map(), this._disabled = false, this.load(e4);
            }
            get disabled() {
              return this._disabled;
            }
            disable() {
              this._disabled = true;
            }
            enable() {
              this._disabled = false;
            }
            set(e4, t5) {
              if (typeof e4 == `string`) e4.split(`|`).forEach((e5) => this._string.set(e5, new i2(e5, t5)));
              else if (e4 instanceof RegExp) this._regexp.set(e4, new i2(e4, t5));
              else throw Error(`Unknow snippet key: ` + e4);
              return this;
            }
            get(e4) {
              if (this.disabled) return;
              if (this._string.has(e4)) return this._string.get(e4);
              let t5 = Array.from(this._regexp.keys());
              for (let n4 = 0, r3 = t5.length; n4 < r3; n4++) if (t5[n4].test(e4)) return this._regexp.get(t5[n4]);
            }
            load(e4) {
              this.reset(), e4 instanceof Map ? e4.forEach((e5, t5) => this.set(t5, e5)) : e4 && typeof e4 == `object` && Object.keys(e4).forEach((t5) => this.set(t5, e4[t5]));
            }
            reset() {
              this._string.clear(), this._regexp.clear();
            }
            values() {
              if (this.disabled) return [];
              let e4 = Array.from(this._string.values()), t5 = Array.from(this._regexp.values());
              return e4.concat(t5);
            }
          }
          class o2 {
            constructor(e4) {
              this._registry = [], Array.isArray(e4) ? e4.forEach((e5, t5) => this.add(t5, e5)) : typeof e4 == `object` && this.add(e4);
            }
            get(e4) {
              for (let t5 = 0; t5 < this._registry.length; t5++) {
                let n4 = this._registry[t5];
                if (n4.level === e4) return n4.store;
              }
            }
            add(e4, t5) {
              typeof e4 == `object` && e4 && (t5 = e4, e4 = 0);
              let n4 = new a2(t5);
              return this.remove(e4), this._registry.push({
                level: e4,
                store: n4
              }), this._registry.sort((e5, t6) => t6.level - e5.level), n4;
            }
            remove(e4) {
              this._registry = this._registry.filter((t5) => t5.level !== e4 && t5.store !== e4);
            }
            resolve(e4) {
              for (let t5 = 0; t5 < this._registry.length; t5++) {
                let n4 = this._registry[t5].store.get(e4);
                if (n4) return n4;
              }
            }
            all(e4) {
              e4 || (e4 = {});
              let t5 = /* @__PURE__ */ new Map(), n4 = (n5) => {
                let r3 = n5.key instanceof RegExp ? `regexp` : `string`;
                (!e4.type || e4.type === r3) && !t5.has(n5.key) && t5.set(n5.key, n5);
              };
              return this._registry.forEach((e5) => {
                e5.store.values().forEach(n4);
              }), Array.from(t5.values());
            }
            clear() {
              this._registry.length = 0;
            }
          }
          let s2 = {
            escape: 92,
            throws: false
          };
          var c2 = function(e4, t5) {
            t5 = t5 ? Object.assign({}, s2, t5) : s2;
            let n4 = e4.pos, r3 = e4.peek();
            if (e4.eat(l2)) {
              for (; !e4.eof(); ) switch (e4.next()) {
                case r3:
                  return e4.start = n4, true;
                case t5.escape:
                  e4.next();
                  break;
              }
              if (e4.pos = n4, t5.throws) throw e4.error(`Unable to consume quoted string`);
            }
            return false;
          };
          function l2(e4) {
            return e4 === 39 || e4 === 34;
          }
          function u2(e4) {
            return e4 > 47 && e4 < 58;
          }
          function d2(e4, t5, n4) {
            return t5 || (t5 = 65), n4 || (n4 = 90), e4 &= -33, e4 >= t5 && e4 <= n4;
          }
          function f2(e4) {
            return u2(e4) || d2(e4);
          }
          function p2(e4) {
            return e4 === 32 || e4 === 9 || e4 === 160;
          }
          function m2(e4) {
            return p2(e4) || e4 === 10 || e4 === 13;
          }
          class h2 {
            constructor(e4, t5, n4) {
              this.name = e4, this.value = t5 ?? null, this.options = n4 || {};
            }
            clone() {
              return new h2(this.name, this.value, Object.assign({}, this.options));
            }
            valueOf() {
              return `${this.name}="${this.value}"`;
            }
          }
          class g2 {
            constructor(e4, t5) {
              this.name = e4 || null, this.value = null, this.repeat = null, this.selfClosing = false, this.children = [], this.parent = null, this.next = null, this.previous = null, this._attributes = [], Array.isArray(t5) && t5.forEach((e5) => this.setAttribute(e5));
            }
            get attributes() {
              return this._attributes;
            }
            get attributesMap() {
              return this.attributes.reduce((e4, t5) => (e4[t5.name] = t5.options.boolean ? t5.name : t5.value, e4), {});
            }
            get isGroup() {
              return !this.name && !this.value && !this._attributes.length;
            }
            get isTextOnly() {
              return !this.name && !!this.value && !this._attributes.length;
            }
            get firstChild() {
              return this.children[0];
            }
            get lastChild() {
              return this.children[this.children.length - 1];
            }
            get childIndex() {
              return this.parent ? this.parent.children.indexOf(this) : -1;
            }
            get nextSibling() {
              return this.next;
            }
            get previousSibling() {
              return this.previous;
            }
            get classList() {
              let e4 = this.getAttribute(`class`);
              return e4 && e4.value ? e4.value.split(/\s+/g).filter(y2) : [];
            }
            create(e4, t5) {
              return new g2(e4, t5);
            }
            setAttribute(e4, t5) {
              let n4 = _2(e4, t5), r3 = this.getAttribute(e4);
              r3 ? this.replaceAttribute(r3, n4) : this._attributes.push(n4);
            }
            hasAttribute(e4) {
              return !!this.getAttribute(e4);
            }
            getAttribute(e4) {
              typeof e4 == `object` && (e4 = e4.name);
              for (var t5 = 0; t5 < this._attributes.length; t5++) {
                let n4 = this._attributes[t5];
                if (n4.name === e4) return n4;
              }
            }
            replaceAttribute(e4, t5, n4) {
              typeof e4 == `string` && (e4 = this.getAttribute(e4));
              let r3 = this._attributes.indexOf(e4);
              r3 !== -1 && this._attributes.splice(r3, 1, _2(t5, n4));
            }
            removeAttribute(e4) {
              typeof e4 == `string` && (e4 = this.getAttribute(e4));
              let t5 = this._attributes.indexOf(e4);
              t5 !== -1 && this._attributes.splice(t5, 1);
            }
            clearAttributes() {
              this._attributes.length = 0;
            }
            addClass(e4) {
              e4 = v2(e4), this.hasAttribute(`class`) ? e4 && !this.hasClass(e4) && this.setAttribute(`class`, this.classList.concat(e4).join(` `)) : this.setAttribute(`class`, e4);
            }
            hasClass(e4) {
              return this.classList.indexOf(v2(e4)) !== -1;
            }
            removeClass(e4) {
              e4 = v2(e4), this.hasClass(e4) && this.setAttribute(`class`, this.classList.filter((t5) => t5 !== e4).join(` `));
            }
            appendChild(e4) {
              this.insertAt(e4, this.children.length);
            }
            insertBefore(e4, t5) {
              this.insertAt(e4, this.children.indexOf(t5));
            }
            insertAt(e4, t5) {
              if (t5 < 0 || t5 > this.children.length) throw Error(`Unable to insert node: position is out of child list range`);
              let n4 = this.children[t5 - 1], r3 = this.children[t5];
              e4.remove(), e4.parent = this, this.children.splice(t5, 0, e4), n4 && (e4.previous = n4, n4.next = e4), r3 && (e4.next = r3, r3.previous = e4);
            }
            removeChild(e4) {
              let t5 = this.children.indexOf(e4);
              t5 !== -1 && (this.children.splice(t5, 1), e4.previous && (e4.previous.next = e4.next), e4.next && (e4.next.previous = e4.previous), e4.parent = e4.next = e4.previous = null);
            }
            remove() {
              this.parent && this.parent.removeChild(this);
            }
            clone(e4) {
              let t5 = new g2(this.name);
              return t5.value = this.value, t5.selfClosing = this.selfClosing, this.repeat && (t5.repeat = Object.assign({}, this.repeat)), this._attributes.forEach((e5) => t5.setAttribute(e5.clone())), e4 && this.children.forEach((e5) => t5.appendChild(e5.clone(true))), t5;
            }
            walk(e4, t5) {
              t5 || (t5 = 0);
              let n4 = this.firstChild;
              for (; n4; ) {
                let r3 = n4.next;
                if (e4(n4, t5) === false || n4.walk(e4, t5 + 1) === false) return false;
                n4 = r3;
              }
            }
            use(e4) {
              let t5 = [
                this
              ];
              for (var n4 = 1; n4 < arguments.length; n4++) t5.push(arguments[n4]);
              return e4.apply(null, t5), this;
            }
            toString() {
              let e4 = this.attributes.map((e5) => {
                e5 = this.getAttribute(e5.name);
                let t6 = e5.options, n4 = `${t6 && t6.implied ? `!` : ``}${e5.name || ``}`;
                return t6 && t6.boolean ? n4 += `.` : e5.value != null && (n4 += `="${e5.value}"`), n4;
              }), t5 = `${this.name || ``}`;
              return e4.length && (t5 += `[${e4.join(` `)}]`), this.value != null && (t5 += `{${this.value}}`), this.selfClosing && (t5 += `/`), this.repeat && (t5 += `*${this.repeat.count ? this.repeat.count : ``}`, this.repeat.value != null && (t5 += `@${this.repeat.value}`)), t5;
            }
          }
          function _2(e4, t5) {
            if (e4 instanceof h2) return e4;
            if (typeof e4 == `string`) return new h2(e4, t5);
            if (e4 && typeof e4 == `object`) return new h2(e4.name, e4.value, e4.options);
          }
          function v2(e4) {
            return String(e4).trim();
          }
          function y2(e4, t5, n4) {
            return e4 && n4.indexOf(e4) === t5;
          }
          class b2 {
            constructor(e4, t5, n4) {
              n4 == null && typeof e4 == `string` && (n4 = e4.length), this.string = e4, this.pos = this.start = t5 || 0, this.end = n4;
            }
            eof() {
              return this.pos >= this.end;
            }
            limit(e4, t5) {
              return new this.constructor(this.string, e4, t5);
            }
            peek() {
              return this.string.charCodeAt(this.pos);
            }
            next() {
              if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
            }
            eat(e4) {
              let t5 = this.peek(), n4 = typeof e4 == `function` ? e4(t5) : t5 === e4;
              return n4 && this.next(), n4;
            }
            eatWhile(e4) {
              let t5 = this.pos;
              for (; !this.eof() && this.eat(e4); ) ;
              return this.pos !== t5;
            }
            backUp(e4) {
              this.pos -= e4 || 1;
            }
            current() {
              return this.substring(this.start, this.pos);
            }
            substring(e4, t5) {
              return this.string.slice(e4, t5);
            }
            error(e4) {
              let t5 = Error(`${e4} at char ${this.pos + 1}`);
              return t5.originalMessage = e4, t5.pos = this.pos, t5.string = this.string, t5;
            }
          }
          function x2(e4) {
            if (e4.eat(42)) return e4.start = e4.pos, {
              count: e4.eatWhile(u2) ? +e4.current() : null
            };
          }
          let S2 = {
            throws: true
          };
          function C2(e4) {
            if (c2(e4, S2)) return e4.current().slice(1, -1);
          }
          function w2(e4) {
            let t5 = e4.pos;
            if (e4.eat(123)) {
              let n4 = 1, r3, i3 = ``, a3 = e4.pos;
              for (; !e4.eof(); ) if (r3 = e4.next(), r3 === 123) n4++;
              else if (r3 === 125) {
                if (n4--, !n4) return e4.start = t5, i3 + e4.substring(a3, e4.pos - 1);
              } else r3 === 92 && (r3 = e4.next(), (r3 === 123 || r3 === 125) && (i3 += e4.substring(a3, e4.pos - 2) + String.fromCharCode(r3), a3 = e4.pos));
              throw e4.pos = t5, e4.error(`Unable to find closing } for text start`);
            }
            return null;
          }
          let T2 = /^\!?[\w\-:\$@]+\.?$|^\!?\[[\w\-:\$@]+\]\.?$/;
          function E2(e4) {
            if (!e4.eat(91)) return null;
            let t5 = [], n4, r3;
            for (; !e4.eof(); ) {
              if (e4.eatWhile(p2), e4.eat(93)) return t5;
              if ((n4 = C2(e4)) != null) t5.push({
                name: null,
                value: n4
              });
              else if (O2(e4)) n4 = e4.current(), n4[0] === `[` && e4.peek() === 93 && (e4.next(), n4 = e4.current()), T2.test(n4) ? (r3 = D2(n4), t5.push(r3), e4.eat(61) && ((n4 = C2(e4)) == null ? (n4 = w2(e4)) == null ? O2(e4) && (r3.value = e4.current()) : (r3.value = n4, r3.options = {
                before: `{`,
                after: `}`
              }) : r3.value = n4)) : t5.push({
                name: null,
                value: n4
              });
              else throw e4.error(`Expected attribute name`);
            }
            throw e4.error(`Expected closing "]" brace`);
          }
          function D2(e4) {
            let t5 = {};
            e4.charCodeAt(0) === 33 && (e4 = e4.slice(1), t5.implied = true), e4.charCodeAt(e4.length - 1) === 46 && (e4 = e4.slice(0, e4.length - 1), t5.boolean = true);
            let n4 = {
              name: e4
            };
            return Object.keys(t5).length && (n4.options = t5), n4;
          }
          function O2(e4) {
            let t5 = e4.pos;
            if (e4.eatWhile(k2)) return e4.start = t5, true;
          }
          function k2(e4) {
            return !m2(e4) && !l2(e4) && e4 !== 93 && e4 !== 61;
          }
          function A2(e4) {
            let t5 = e4.pos, n4 = new g2(j2(e4)), r3;
            for (; !e4.eof(); ) if (e4.eat(46)) n4.addClass(j2(e4));
            else if (e4.eat(35)) n4.setAttribute(`id`, j2(e4));
            else if (e4.eat(47)) {
              if (n4.isGroup) throw e4.backUp(1), e4.error(`Unexpected self-closing indicator`);
              n4.selfClosing = true, (r3 = x2(e4)) && (n4.repeat = r3);
              break;
            } else if (r3 = E2(e4)) for (let e5 = 0, t6 = r3.length; e5 < t6; e5++) n4.setAttribute(r3[e5]);
            else if ((r3 = w2(e4)) !== null) n4.value = r3;
            else if (r3 = x2(e4)) n4.repeat = r3;
            else break;
            if (t5 === e4.pos) throw e4.error(`Unable to consume abbreviation node, unexpected ${e4.peek()}`);
            return n4;
          }
          function j2(e4) {
            return e4.start = e4.pos, e4.eatWhile(M2), e4.current();
          }
          function M2(e4) {
            return f2(e4) || e4 === 45 || e4 === 58 || e4 === 36 || e4 === 64 || e4 === 33 || e4 === 95 || e4 === 37;
          }
          function N2(e4) {
            let t5 = new b2(e4.trim()), n4 = new g2(), r3 = n4, i3 = [], a3;
            for (; !t5.eof(); ) {
              if (a3 = t5.peek(), a3 === 40) {
                let e6 = new g2();
                i3.push([
                  e6,
                  r3,
                  t5.pos
                ]), r3 = e6, t5.next();
                continue;
              } else if (a3 === 41) {
                let e6 = i3.pop();
                if (!e6) throw t5.error(`Unexpected ")" group end`);
                let n5 = e6[0];
                if (r3 = e6[1], t5.next(), n5.repeat = x2(t5)) r3.appendChild(n5);
                else for (; n5.firstChild; ) r3.appendChild(n5.firstChild);
                t5.eat(43);
                continue;
              }
              let e5 = A2(t5);
              if (r3.appendChild(e5), t5.eof()) break;
              switch (t5.peek()) {
                case 43:
                  t5.next();
                  continue;
                case 62:
                  t5.next(), r3 = e5;
                  continue;
                case 94:
                  for (; t5.eat(94); ) r3 = r3.parent || r3;
                  continue;
              }
            }
            if (i3.length) throw t5.pos = i3.pop()[2], t5.error(`Expected group close`);
            return n4;
          }
          function P2(e4) {
            let t5 = N2(e4);
            return t5.walk(ee2), t5;
          }
          function ee2(e4) {
            if (!e4.repeat || !e4.repeat.count) return;
            let t5 = e4.parent, n4 = t5.children.indexOf(e4);
            for (let r3 = 0; r3 < e4.repeat.count; r3++) {
              let i3 = e4.clone(true);
              if (i3.repeat.value = r3 + 1, i3.walk(ee2), i3.isGroup) for (; i3.children.length > 0; ) i3.firstChild.repeat = i3.repeat, t5.insertAt(i3.firstChild, n4++);
              else t5.insertAt(i3, n4++);
            }
            e4.parent.removeChild(e4);
          }
          var te2 = function(e4, t5) {
            return e4.walk((e5) => ne2(e5, t5)), e4;
          };
          function ne2(e4, t5) {
            let n4 = /* @__PURE__ */ new Set(), r3 = (e5) => {
              let i3 = t5.resolve(e5.name);
              if (!i3 || n4.has(i3)) return;
              if (typeof i3.value == `function`) return i3.value(e5, t5, r3);
              let a3 = P2(i3.value);
              n4.add(i3), a3.walk(r3), n4.delete(i3);
              let o3 = ae2(a3);
              for (re2(o3, e5); a3.firstChild; ) e5.parent.insertBefore(a3.firstChild, e5);
              o3.parent.insertBefore(e5, o3), o3.remove();
            };
            r3(e4);
          }
          function re2(e4, t5) {
            return t5.name = e4.name, e4.selfClosing && (t5.selfClosing = true), e4.value != null && (t5.value = e4.value), e4.repeat && (t5.repeat = Object.assign({}, e4.repeat)), F2(e4, t5);
          }
          function F2(e4, t5) {
            ie2(e4, t5);
            let n4 = /* @__PURE__ */ new Map(), r3 = e4.attributes;
            for (let e5 = 0; e5 < r3.length; e5++) n4.set(r3[e5].name, r3[e5].clone());
            r3 = t5.attributes.slice();
            for (let e5 = 0, i4, a3; e5 < r3.length; e5++) i4 = r3[e5], n4.has(i4.name) ? (a3 = n4.get(i4.name), a3.value = i4.value, a3.options.implied && (a3.options.implied = false)) : n4.set(i4.name, i4), t5.removeAttribute(i4);
            let i3 = Array.from(n4.values());
            for (let e5 = 0; e5 < i3.length; e5++) t5.setAttribute(i3[e5]);
            return t5;
          }
          function ie2(e4, t5) {
            let n4 = e4.classList;
            for (let e5 = 0; e5 < n4.length; e5++) t5.addClass(n4[e5]);
            return t5;
          }
          function ae2(e4) {
            for (; e4.children.length; ) e4 = e4.children[e4.children.length - 1];
            return e4;
          }
          let oe2 = new Set(`a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var`.split(`,`)), se2 = {
            p: `span`,
            ul: `li`,
            ol: `li`,
            table: `tr`,
            tr: `td`,
            tbody: `tr`,
            thead: `tr`,
            tfoot: `tr`,
            colgroup: `col`,
            select: `option`,
            optgroup: `option`,
            audio: `source`,
            video: `source`,
            object: `param`,
            map: `area`
          };
          function ce2(e4) {
            return e4 = (e4 || ``).toLowerCase(), se2[e4] || (oe2.has(e4) ? `span` : `div`);
          }
          var le2 = function(e4) {
            return e4.walk((e5) => {
              e5.name == null && e5.attributes.length && (e5.name = ce2(e5.parent.name));
            }), e4;
          };
          function ue2(e4, t5) {
            let n4 = /* @__PURE__ */ new Set(), r3 = t5.length, i3 = 0;
            for (; (i3 = e4.indexOf(t5, i3)) !== -1; ) n4.add(i3), i3 += r3;
            if (n4.size) {
              let t6 = 0, r4 = e4.length;
              for (; t6 < r4; ) e4[t6++] === `\\` && n4.delete(t6++);
            }
            return Array.from(n4).map((e5) => fe2(e5, r3));
          }
          function de2(e4, t5, n4) {
            for (let r3 = t5.length - 1; r3 >= 0; r3--) {
              let i3 = t5[r3], a3 = 0, o3 = 0;
              if (e4.substr(i3[0] + i3[1], 1) === `@`) {
                let t6 = e4.substr(i3[0] + i3[1] + 1).match(/^(\d+)/);
                t6 && (o3 = t6[1].length + 1, a3 = parseInt(t6[1]) - 1);
              }
              e4 = e4.substring(0, i3[0]) + (typeof n4 == `function` ? n4(e4.substr(i3[0], i3[1]), a3) : n4) + e4.substring(i3[0] + i3[1] + o3);
            }
            return e4;
          }
          function fe2(e4, t5) {
            return [
              e4,
              t5
            ];
          }
          var pe2 = function(e4) {
            return e4.walk(me2), e4;
          };
          function me2(e4) {
            let t5 = he2(e4);
            if (t5 && t5.value != null) {
              let n4 = t5.value;
              e4.name = ge2(e4.name, n4), e4.value = ge2(e4.value, n4), e4.attributes.forEach((t6) => {
                let r3 = e4.getAttribute(t6.name).clone();
                r3.name = ge2(t6.name, n4), r3.value = ge2(t6.value, n4), e4.replaceAttribute(t6.name, r3);
              });
            }
            return e4;
          }
          function he2(e4) {
            for (; e4; ) {
              if (e4.repeat) return e4.repeat;
              e4 = e4.parent;
            }
          }
          function ge2(e4, t5) {
            return typeof e4 == `string` ? ve2(e4, _e2(e4), t5) : e4;
          }
          function _e2(e4) {
            return ue2(e4 || ``, `$`).reduce((t5, n4) => {
              if (!/[#{]/.test(e4[n4[0] + 1] || ``)) {
                let e5 = t5[t5.length - 1];
                e5 && e5[0] + e5[1] === n4[0] ? e5[1] += n4[1] : t5.push(n4);
              }
              return t5;
            }, []);
          }
          function ve2(e4, t5, n4) {
            return ye2(de2(e4, t5, (e5, t6) => {
              let r3 = String(n4 + t6);
              for (; r3.length < e5.length; ) r3 = `0` + r3;
              return r3;
            }));
          }
          function ye2(e4) {
            let t5 = 0, n4 = ``, r3 = e4.length;
            for (; t5 < r3; ) {
              let r4 = e4[t5++];
              n4 += r4 === `\\` ? e4[t5++] || `` : r4;
            }
            return n4;
          }
          let I2 = /^((?:https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, be2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, L2 = /^([a-z]+:)?\/\//i;
          function R2(e4, t5) {
            return t5 || (t5 = 1), e4.walk((e5) => {
              if (e5.repeat && e5.repeat.count === null) {
                for (let n4 = 0; n4 < t5; n4++) {
                  let r3 = e5.clone(true);
                  r3.repeat.implicit = true, r3.repeat.count = t5, r3.repeat.value = n4 + 1, r3.repeat.index = n4, e5.parent.insertBefore(r3, e5);
                }
                e5.remove();
              }
            }), e4;
          }
          function z2(e4, t5) {
            if (Array.isArray(t5) && t5.length) {
              let n4 = false;
              e4.walk((e5) => {
                e5.repeat && e5.repeat.implicit && (n4 = true, xe2(e5, t5[e5.repeat.index]));
              }), n4 || V2(Ce2(e4), t5.join(`
`));
            }
            return e4;
          }
          function xe2(e4, t5) {
            let n4 = Se2(e4, t5);
            return e4.walk((e5) => n4 |= Se2(e5, t5)), n4 || V2(Ce2(e4), t5), e4;
          }
          function Se2(e4, t5) {
            let n4 = {
              replaced: false
            };
            return e4.value = B2(e4.value, t5, n4), e4.attributes.forEach((r3) => {
              r3.value && e4.setAttribute(r3.name, B2(r3.value, t5, n4));
            }), n4.replaced;
          }
          function B2(e4, t5, n4) {
            if (typeof e4 == `string`) {
              let r3 = ue2(e4, `$#`);
              r3.length && (n4 && (n4.replaced = true), e4 = de2(e4, r3, t5));
            }
            return e4;
          }
          function Ce2(e4) {
            for (; e4.children.length; ) e4 = e4.children[e4.children.length - 1];
            return e4;
          }
          function V2(e4, t5) {
            if (e4.value) {
              let n4 = ue2(e4.value, `|`);
              if (n4.length) {
                e4.value = de2(e4.value, n4, t5);
                return;
              }
            }
            (e4.name.toLowerCase() === `a` || e4.hasAttribute(`href`)) && (I2.test(t5) ? e4.setAttribute(`href`, (L2.test(t5) ? `` : `http://`) + t5) : be2.test(t5) && e4.setAttribute(`href`, `mailto:` + t5)), e4.value = t5;
          }
          let H2 = {
            element: `__`,
            modifier: `_`
          }, we2 = /^(-+)([a-z0-9]+[a-z0-9-]*)/i, Te2 = /^(_+)([a-z0-9]+[a-z0-9-]*)/i, U2 = (e4) => /^[a-z]\-/i.test(e4), W2 = (e4) => /^[a-z]/i.test(e4);
          var Ee2 = function(e4, t5) {
            t5 = Object.assign({}, H2, t5), e4.walk((e5) => De2(e5, t5));
            let n4 = K2(e4);
            return e4.walk((e5) => G2(e5, n4, t5)), e4;
          };
          function De2(e4, t5) {
            let n4 = e4.classList.reduce((e5, t6) => {
              let n5 = t6.indexOf(`_`);
              return n5 > 0 && !t6.startsWith(`-`) ? (e5.add(t6.slice(0, n5)), e5.add(t6.slice(n5)), e5) : e5.add(t6);
            }, /* @__PURE__ */ new Set());
            n4.size && e4.setAttribute(`class`, Array.from(n4).join(` `));
          }
          function G2(e4, t5, n4) {
            let r3 = e4.classList.reduce((r4, i4) => {
              let a3, o3, s3 = i4;
              for ((o3 = i4.match(we2)) && (a3 = Oe2(e4, t5, o3[1]) + n4.element + o3[2], r4.add(a3), i4 = i4.slice(o3[0].length)); o3 = i4.match(Te2); ) a3 || (a3 = Oe2(e4, t5, o3[1]), r4.add(a3)), r4.add(`${a3}${n4.modifier}${o3[2]}`), i4 = i4.slice(o3[0].length);
              return i4 === s3 && r4.add(s3), r4;
            }, /* @__PURE__ */ new Set()), i3 = Array.from(r3).filter(Boolean);
            i3.length && e4.setAttribute(`class`, i3.join(` `));
          }
          function K2(e4) {
            let t5 = /* @__PURE__ */ new Map();
            return e4.walk((e5) => {
              let n4 = e5.classList;
              n4.length && t5.set(e5, ke2(n4, U2) || ke2(n4, W2) || t5.get(e5.parent));
            }), t5;
          }
          function Oe2(e4, t5, n4) {
            let r3 = n4.length > 1 ? n4.length : 0;
            for (; e4.parent && e4.parent.parent && r3--; ) e4 = e4.parent;
            return t5.get(e4) || ``;
          }
          function ke2(e4, t5) {
            return e4.filter(t5)[0];
          }
          var Ae2 = function(e4) {
            return e4.walk((e5) => {
              je2(e5, `class`, `className`), je2(e5, `for`, `htmlFor`);
            }), e4;
          };
          function je2(e4, t5, n4) {
            let r3 = e4.getAttribute(t5);
            r3 && (r3.name = n4);
          }
          let Me2 = /^xsl:(variable|with\-param)$/i, Ne2 = {
            bem: Ee2,
            jsx: Ae2,
            xsl: function(e4) {
              return e4.walk((e5) => {
                Me2.test(e5.name || ``) && (e5.children.length || e5.value) && e5.removeAttribute(`select`);
              }), e4;
            }
          };
          var Pe2 = function(e4, t5) {
            return Object.keys(t5 || {}).forEach((n4) => {
              if (n4 in Ne2) {
                let r3 = typeof t5[n4] == `object` ? t5[n4] : null;
                e4 = e4.use(Ne2[n4], r3);
              }
            }), e4;
          }, Fe2 = function(e4, t5, n4) {
            return typeof t5 == `string` ? t5 = [
              t5
            ] : t5 && typeof t5 == `object` && !Array.isArray(t5) && (n4 = t5, t5 = null), e4.use(le2).use(R2, Array.isArray(t5) ? t5.length : null).use(pe2).use(z2, t5).use(Pe2, n4);
          };
          function Ie2(e4, t5) {
            return t5 || (t5 = {}), e4.walk((e5) => q2(e5, t5)), e4;
          }
          function q2(e4, t5) {
            let n4 = e4.attributes;
            for (let r3 = 0, i3 = n4.length; r3 < i3; r3++) {
              let i4 = n4[r3];
              typeof i4.value == `string` && e4.setAttribute(i4.name, Le2(i4.value, t5));
            }
            return e4.value != null && (e4.value = Le2(e4.value, t5)), e4;
          }
          function Le2(e4, t5) {
            let n4 = J2(e4), r3 = 0, i3 = ``;
            for (let e5 = 0, a3 = n4.variables.length; e5 < a3; e5++) {
              let a4 = n4.variables[e5], o3 = a4.name in t5 ? t5[a4.name] : a4.name;
              typeof o3 == `function` && (o3 = o3(n4.string, a4, r3 + a4.location)), i3 += n4.string.slice(r3, a4.location) + o3, r3 = a4.location + a4.length;
            }
            return i3 + n4.string.slice(r3);
          }
          function J2(e4) {
            let t5 = /\$\{([a-z][\w\-]*)\}/gi, n4 = [], r3 = /* @__PURE__ */ new Map(), i3;
            for (; i3 = t5.exec(e4); ) r3.set(i3.index, i3);
            if (r3.size) {
              let t6 = 0, i4 = 0, a3 = e4.length, o3 = ``;
              for (; i4 < a3; ) {
                if (e4.charCodeAt(i4) === 92 && r3.has(i4 + 1)) {
                  let n5 = r3.get(i4 + 1);
                  o3 += e4.slice(t6, i4) + n5[0], t6 = i4 = n5.index + n5[0].length, r3.delete(i4 + 1);
                  continue;
                }
                i4++;
              }
              e4 = o3 + e4.slice(t6);
              let s3 = Array.from(r3.values());
              for (let e5 = 0, t7 = s3.length; e5 < t7; e5++) {
                let t8 = s3[e5];
                n4.push({
                  name: t8[1],
                  location: t8.index,
                  length: t8[0].length
                });
              }
            }
            return {
              string: e4,
              variables: n4
            };
          }
          function Re2(e4) {
            let t5 = new b2(e4), n4 = [], r3 = ``, i3 = 0, a3 = 0, o3, s3;
            for (; !t5.eof(); ) o3 = t5.peek(), a3 = t5.pos, o3 === 92 ? (t5.next(), t5.next()) : (s3 = Ve2(t5, r3.length + a3 - i3)) ? (n4.push(s3), r3 += t5.string.slice(i3, a3) + s3.placeholder, i3 = t5.pos) : t5.next();
            return new We2(r3 + t5.string.slice(i3), n4);
          }
          function ze2(e4, t5, n4) {
            n4 || (n4 = Be2);
            let r3 = t5.map((e5, t6) => ({
              order: t6,
              field: e5,
              end: e5.location + e5.length
            })).sort((e5, t6) => e5.end - t6.end || e5.order - t6.order), i3 = 0;
            return r3.map((t6) => {
              let r4 = e4.substr(t6.field.location, t6.field.length), a3 = e4.slice(i3, t6.field.location);
              return i3 = t6.end, a3 + n4(t6.field.index, r4);
            }).join(``) + e4.slice(i3);
          }
          function Be2(e4, t5) {
            return t5 ? `\${${e4}:${t5}}` : `\${${e4}}`;
          }
          function Ve2(e4, t5) {
            let n4 = e4.pos;
            if (e4.eat(36)) {
              let n5 = Y2(e4), r3 = ``;
              if (n5 != null || e4.eat(123) && (n5 = Y2(e4), n5 != null && (e4.eat(58) && (r3 = He2(e4)), e4.eat(125)))) return new Ue2(n5, r3, t5);
            }
            e4.pos = n4;
          }
          function He2(e4) {
            let t5, n4 = [];
            for (e4.start = e4.pos; !e4.eof(); ) {
              if (t5 = e4.peek(), t5 === 123) n4.push(e4.pos);
              else if (t5 === 125) {
                if (!n4.length) break;
                n4.pop();
              }
              e4.next();
            }
            if (n4.length) throw e4.error(`Unable to find matching "}" for curly brace at ` + n4.pop());
            return e4.current();
          }
          function Y2(e4) {
            if (e4.start = e4.pos, e4.eatWhile(u2)) return Number(e4.current());
          }
          class Ue2 {
            constructor(e4, t5, n4) {
              this.index = e4, this.placeholder = t5, this.location = n4, this.length = this.placeholder.length;
            }
          }
          class We2 {
            constructor(e4, t5) {
              this.string = e4, this.fields = t5;
            }
            mark(e4) {
              return ze2(this.string, this.fields, e4);
            }
            toString() {
              return string;
            }
          }
          let Ge2 = (e4) => e4;
          class Ke2 {
            constructor(e4, t5, n4) {
              typeof t5 == `object` && (n4 = t5, t5 = null), this.node = e4, this._fieldsRenderer = t5 || Ge2, this.open = null, this.beforeOpen = ``, this.afterOpen = ``, this.close = null, this.beforeClose = ``, this.afterClose = ``, this.text = null, this.beforeText = ``, this.afterText = ``, this.indent = ``, this.newline = ``, n4 && Object.assign(this, n4);
            }
            clone() {
              return new this.constructor(this.node, this);
            }
            indentText(e4) {
              let t5 = qe2(e4);
              if (t5.length === 1) return e4;
              let n4 = !this.newline && !this.indent ? ` ` : this.newline;
              return t5.map((e5, t6) => t6 ? this.indent + e5 : e5).join(n4);
            }
            renderFields(e4) {
              return this._fieldsRenderer(e4);
            }
            toString(e4) {
              let t5 = this._wrap(this.open, this.beforeOpen, this.afterOpen), n4 = this._wrap(this.close, this.beforeClose, this.afterClose);
              return t5 + this._wrap(this.text, this.beforeText, this.afterText) + (e4 ?? ``) + n4;
            }
            _wrap(e4, t5, n4) {
              return t5 ?? (t5 = ``), n4 ?? (n4 = ``), e4 == null ? `` : (e4 = t5 ? e4.replace(/^\s+/, ``) : e4, e4 = n4 ? e4.replace(/\s+$/, ``) : e4, t5 + this.indentText(e4) + n4);
            }
          }
          function qe2(e4) {
            return (e4 || ``).split(/\r\n|\r|\n/g);
          }
          let Je2 = (e4, t5) => t5 || ``;
          function X2(e4, t5, n4) {
            n4 === void 0 && (n4 = t5, t5 = null), t5 || (t5 = Je2);
            let r3 = {
              index: 1
            };
            return Z2(e4.children, n4, (e5) => e5 == null ? t5(r3.index++) : Q2(e5, r3).mark(t5));
          }
          function Z2(e4, t5, n4) {
            return e4.map((e5) => {
              let r3 = t5(new Ke2(e5, n4));
              return r3 ? r3.toString(Z2(e5.children, t5, n4)) : ``;
            }).join(``);
          }
          function Q2(e4, t5) {
            let n4 = typeof e4 == `object` ? e4 : Re2(e4), r3 = -1;
            return n4.fields.forEach((e5) => {
              e5.index += t5.index, e5.index > r3 && (r3 = e5.index);
            }), r3 !== -1 && (t5.index = r3 + 1), n4;
          }
          let Ye2 = /^(.*?)([A-Z_]+)(.*?)$/;
          function Xe2(e4, t5) {
            if (e4 == null) return e4;
            let n4 = [], r3 = (e5, n5, r4, i4) => t5[r4] == null ? `` : n5 + t5[r4] + i4, i3 = ``, a3 = 0, o3 = 0, s3, c3;
            for (; o3 < e4.length; ) s3 = e4.charCodeAt(o3), s3 === 91 ? n4.push(o3) : s3 === 93 && (c3 = n4.pop(), n4.length || (i3 += e4.slice(a3, c3) + e4.slice(c3 + 1, o3).replace(Ye2, r3), a3 = o3 + 1)), o3++;
            return i3 + e4.slice(a3);
          }
          function Ze2(e4) {
            return (e4 || ``).split(/\r\n|\r|\n/g);
          }
          function Qe2(e4) {
            return e4.parent.firstChild === e4;
          }
          function $e2(e4) {
            return e4 && !e4.parent;
          }
          function et2(e4) {
            return e4.isTextOnly && !!e4.children.length;
          }
          function tt2(e4) {
            let t5 = e4.node;
            if (et2(t5)) {
              let n4 = Re2(t5.value), r3 = nt2(n4);
              if (r3) {
                let t6 = rt2(n4, r3);
                e4.open = e4.renderFields(t6[0]), e4.close = e4.renderFields(t6[1]);
              } else e4.text = e4.renderFields(n4);
              return true;
            }
            return false;
          }
          function nt2(e4) {
            return e4.fields.reduce((e5, t5) => !e5 || t5.index < e5.index ? t5 : e5, null);
          }
          function rt2(e4, t5) {
            let n4 = e4.fields.indexOf(t5);
            return [
              new e4.constructor(e4.string.slice(0, t5.location), e4.fields.slice(0, n4)),
              new e4.constructor(e4.string.slice(t5.location + t5.length), e4.fields.slice(n4 + 1))
            ];
          }
          let it2 = {
            enabled: false,
            trigger: [
              `id`,
              `class`
            ],
            before: ``,
            after: `
<!-- /[#ID][.CLASS] -->`
          };
          function at2(e4, t5, n4) {
            return n4 = Object.assign({}, n4), n4.comment = Object.assign({}, it2, n4.comment), X2(e4, n4.field, (e5) => {
              if (e5 = ot(e5, t5), !tt2(e5)) {
                let r3 = e5.node;
                if (r3.name) {
                  let i3 = t5.name(r3.name), a3 = ut(e5, t5);
                  e5.open = `<${i3}${a3}${r3.selfClosing ? t5.selfClose() : ``}>`, r3.selfClosing || (e5.close = `</${i3}>`), mt(e5, n4.comment);
                }
                (r3.value || !r3.children.length && !r3.selfClosing) && (e5.text = e5.renderFields(r3.value));
              }
              return e5;
            });
          }
          function ot(e4, t5) {
            let n4 = e4.node;
            if (st(n4, t5)) {
              e4.indent = t5.indent(pt(n4, t5)), e4.newline = `
`;
              let r3 = e4.newline + e4.indent;
              (!$e2(n4.parent) || !Qe2(n4)) && (e4.beforeOpen = r3, n4.isTextOnly && (e4.beforeText = r3)), lt(n4, t5) && (n4.isTextOnly || (e4.beforeText = r3 + t5.indent(1)), e4.beforeClose = r3);
            }
            return e4;
          }
          function st(e4, t5) {
            return !t5.get(`format`) || e4.parent.isTextOnly && e4.parent.children.length === 1 && Re2(e4.parent.value).fields.length ? false : dt(e4, t5) ? ct(e4, t5) : true;
          }
          function ct(e4, t5) {
            if (!dt(e4, t5)) return false;
            if (et2(e4)) return true;
            if (e4.childIndex === 0) {
              let n4 = e4;
              for (; n4 = n4.nextSibling; ) if (!dt(n4, t5)) return true;
            } else if (!dt(e4.previousSibling, t5)) return true;
            if (t5.get(`inlineBreak`)) {
              let n4 = 1, r3 = e4, i3 = e4;
              for (; ft(r3 = r3.previousSibling, t5); ) n4++;
              for (; ft(i3 = i3.nextSibling, t5); ) n4++;
              if (n4 >= t5.get(`inlineBreak`)) return true;
            }
            for (let n4 = 0, r3 = e4.children.length; n4 < r3; n4++) if (st(e4.children[n4], t5)) return true;
            return false;
          }
          function lt(e4, t5) {
            let n4 = (e4.name || ``).toLowerCase();
            if (t5.get(`formatForce`).indexOf(n4) !== -1) return true;
            for (let n5 = 0; n5 < e4.children.length; n5++) if (st(e4.children[n5], t5)) return true;
            return false;
          }
          function ut(e4, t5) {
            return e4.node.attributes.map((n4) => {
              if (n4.options.implied && n4.value == null) return null;
              let r3 = t5.attribute(n4.name), i3 = null;
              if (n4.options.boolean || t5.get(`booleanAttributes`).indexOf(r3.toLowerCase()) !== -1) {
                if (t5.get(`compactBooleanAttributes`) && n4.value == null) return ` ${r3}`;
                n4.value ?? (i3 = r3);
              }
              return i3 ?? (i3 = e4.renderFields(n4.value)), n4.options.before && n4.options.after ? ` ${r3}=${n4.options.before + i3 + n4.options.after}` : ` ${r3}=${t5.quote(i3)}`;
            }).join(``);
          }
          function dt(e4, t5) {
            return e4 && e4.isTextOnly || ft(e4, t5);
          }
          function ft(e4, t5) {
            return e4 && t5.isInline(e4);
          }
          function pt(e4, t5) {
            let n4 = t5.get(`formatSkip`) || [], r3 = e4.parent.isTextOnly ? -2 : -1, i3 = e4;
            for (; i3 = i3.parent; ) n4.indexOf((i3.name || ``).toLowerCase()) === -1 && r3++;
            return r3 < 0 ? 0 : r3;
          }
          function mt(e4, t5) {
            let n4 = e4.node;
            if (!t5.enabled || !t5.trigger || !n4.name) return;
            let r3 = e4.node.attributes.reduce((e5, t6) => (t6.name && t6.value != null && (e5[t6.name.toUpperCase().replace(/-/g, `_`)] = t6.value), e5), {});
            for (let n5 = 0, i3 = t5.trigger.length; n5 < i3; n5++) if (t5.trigger[n5].toUpperCase() in r3) {
              e4.open = Xe2(t5.before, r3) + e4.open, e4.close && (e4.close += Xe2(t5.after, r3));
              break;
            }
          }
          let ht = /^id$/i, gt = /^class$/i, _t = {
            primary: (e4) => e4.join(``),
            secondary: (e4) => e4.map((e5) => e5.isBoolean ? e5.name : `${e5.name}=${e5.value}`).join(`, `)
          }, vt = {
            open: null,
            close: null,
            omitName: /^div$/i,
            attributes: _t
          };
          function yt(e4, t5, n4) {
            n4 = Object.assign({}, vt, n4);
            let r3 = e4.node;
            if (e4.indent = t5.indent(xt(r3, t5)), e4.newline = `
`, (!$e2(r3.parent) || !Qe2(r3)) && (e4.beforeOpen = e4.newline + e4.indent), r3.name) {
              let i3 = Object.assign({
                NAME: t5.name(r3.name),
                SELF_CLOSE: r3.selfClosing ? n4.selfClose : null
              }, bt(e4, t5, n4.attributes));
              n4.omitName && n4.omitName.test(i3.NAME) && i3.PRIMARY_ATTRS && (i3.NAME = null), n4.open != null && (e4.open = Xe2(n4.open, i3)), n4.close != null && (e4.close = Xe2(n4.close, i3));
            }
            return e4;
          }
          function bt(e4, t5, n4) {
            n4 = Object.assign({}, _t, n4);
            let r3 = [], i3 = [];
            return e4.node.attributes.forEach((n5) => {
              if (n5.options.implied && n5.value == null) return null;
              let a3 = t5.attribute(n5.name), o3 = e4.renderFields(n5.value);
              if (ht.test(a3)) o3 && r3.push(`#${o3}`);
              else if (gt.test(a3)) o3 && r3.push(`.${o3.replace(/\s+/g, `.`)}`);
              else {
                let e5 = n5.value == null && (n5.options.boolean || t5.get(`booleanAttributes`).indexOf(a3.toLowerCase()) !== -1);
                i3.push({
                  name: a3,
                  value: o3,
                  isBoolean: e5
                });
              }
            }), {
              PRIMARY_ATTRS: n4.primary(r3) || null,
              SECONDARY_ATTRS: n4.secondary(i3) || null
            };
          }
          function xt(e4, t5) {
            let n4 = e4.parent.isTextOnly ? -2 : -1, r3 = e4;
            for (; r3 = r3.parent; ) n4++;
            return n4 < 0 ? 0 : n4;
          }
          let St = /\n|\r/;
          function Ct(e4, t5, n4) {
            n4 || (n4 = {});
            let r3 = {
              open: `[%NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)][SELF_CLOSE]`,
              selfClose: `/`,
              attributes: {
                secondary(e5) {
                  return e5.map((e6) => e6.isBoolean ? `${e6.name}${t5.get(`compactBooleanAttributes`) ? `` : `=true`}` : `${e6.name}=${t5.quote(e6.value)}`).join(` `);
                }
              }
            };
            return X2(e4, n4.field, (e5) => {
              if (e5 = yt(e5, t5, r3), e5 = wt(e5, t5), !tt2(e5)) {
                let n5 = e5.node;
                (n5.value || !n5.children.length && !n5.selfClosing) && (e5.text = e5.renderFields(Tt(n5, t5)));
              }
              return e5;
            });
          }
          function wt(e4, t5) {
            let n4 = e4.node;
            return !n4.isTextOnly && n4.value && (e4.beforeText = St.test(n4.value) ? e4.newline + e4.indent + t5.indent(1) : ` `), e4;
          }
          function Tt(e4, t5) {
            if (e4.value != null && St.test(e4.value)) {
              let n4 = Ze2(e4.value), r3 = t5.indent(1), i3 = n4.reduce((e5, t6) => Math.max(e5, t6.length), 0);
              return n4.map((e5, t6) => `${t6 ? r3 : ``}${Et(e5, i3)} |`).join(`
`);
            }
            return e4.value;
          }
          function Et(e4, t5) {
            for (; e4.length < t5; ) e4 += ` `;
            return e4;
          }
          let Dt = /\n|\r/, Ot = {
            none: `[ SECONDARY_ATTRS]`,
            round: `[(SECONDARY_ATTRS)]`,
            curly: `[{SECONDARY_ATTRS}]`,
            square: `[[SECONDARY_ATTRS]`
          };
          function kt(e4, t5, n4) {
            n4 || (n4 = {});
            let r3 = n4.attributeWrap && Ot[n4.attributeWrap] || Ot.none, i3 = r3 === Ot.none ? (e5) => `${e5.name}=true` : (e5) => e5.name, a3 = {
              open: `[NAME][PRIMARY_ATTRS]${r3}[SELF_CLOSE]`,
              selfClose: `/`,
              attributes: {
                secondary(e5) {
                  return e5.map((e6) => e6.isBoolean ? i3(e6) : `${e6.name}=${t5.quote(e6.value)}`).join(` `);
                }
              }
            };
            return X2(e4, n4.field, (e5, n5) => {
              if (e5 = yt(e5, t5, a3), e5 = $(e5, t5), !tt2(e5)) {
                let n6 = e5.node;
                (n6.value || !n6.children.length && !n6.selfClosing) && (e5.text = e5.renderFields(At(n6, t5)));
              }
              return e5;
            });
          }
          function $(e4, t5) {
            let n4 = e4.node, r3 = n4.parent;
            return t5.get(`inlineBreak`) === 0 && jt(n4, t5) && !$e2(r3) && r3.value == null && r3.children.length === 1 && (e4.beforeOpen = `: `), !n4.isTextOnly && n4.value && (e4.beforeText = Dt.test(n4.value) ? e4.newline + e4.indent + t5.indent(1) : ` `), e4;
          }
          function At(e4, t5) {
            if (e4.value != null && Dt.test(e4.value)) {
              let n4 = t5.indent(1);
              return Ze2(e4.value).map((e5, t6) => `${n4}${t6 ? ` ` : `|`} ${e5}`).join(`
`);
            }
            return e4.value;
          }
          function jt(e4, t5) {
            return e4 && (e4.isTextOnly || t5.isInline(e4));
          }
          let Mt = /\n|\r/;
          function Nt(e4, t5, n4) {
            n4 || (n4 = {});
            let r3 = {
              open: `[NAME][PRIMARY_ATTRS][(SECONDARY_ATTRS)]`,
              attributes: {
                secondary(e5) {
                  return e5.map((e6) => e6.isBoolean ? e6.name : `${e6.name}=${t5.quote(e6.value)}`).join(`, `);
                }
              }
            };
            return X2(e4, n4.field, (e5) => {
              if (e5 = yt(e5, t5, r3), e5 = Pt(e5, t5), !tt2(e5)) {
                let n5 = e5.node;
                (n5.value || !n5.children.length && !n5.selfClosing) && (e5.text = e5.renderFields(Ft(n5, t5)));
              }
              return e5;
            });
          }
          function Pt(e4, t5) {
            let n4 = e4.node;
            return !n4.isTextOnly && n4.value && (e4.beforeText = Mt.test(n4.value) ? e4.newline + e4.indent + t5.indent(1) : ` `), e4;
          }
          function Ft(e4, t5) {
            if (e4.value != null && Mt.test(e4.value)) {
              let n4 = t5.indent(1);
              return Ze2(e4.value).map((e5) => `${n4}| ${e5}`).join(`
`);
            }
            return e4.value;
          }
          let It = {
            html: at2,
            haml: Ct,
            slim: kt,
            pug: Nt
          };
          var Lt = function(e4, t5, n4, r3) {
            return typeof n4 == `object` && (r3 = n4, n4 = null), Rt(n4) || (n4 = `html`), It[n4](e4, t5, r3);
          };
          function Rt(e4) {
            return !!e4 && e4 in It;
          }
          function zt(e4, t5) {
            return t5 || (t5 = {}), typeof e4 == `string` && (e4 = Bt(e4, t5)), Lt(e4, t5.profile, t5.syntax, t5.format);
          }
          function Bt(e4, t5) {
            return P2(e4).use(te2, t5.snippets).use(Ie2, t5.variables).use(Fe2, t5.text, t5.addons);
          }
          class Vt {
            constructor() {
              this.type = `css-value`, this.value = [];
            }
            get size() {
              return this.value.length;
            }
            add(e4) {
              this.value.push(e4);
            }
            has(e4) {
              return this.value.indexOf(e4) !== -1;
            }
            toString() {
              return this.value.join(` `);
            }
          }
          var Ht = function(e4) {
            if (e4.peek() === 35) {
              e4.start = e4.pos, e4.next(), e4.eat(116) || e4.eatWhile(Wt);
              let t5 = e4.current();
              if (e4.start = e4.pos, e4.eat(46) && !e4.eatWhile(u2)) throw e4.error(`Unexpected character for alpha value of color`);
              return new Ut(t5, e4.current());
            }
          };
          class Ut {
            constructor(e4, t5) {
              this.type = `color`, this.raw = e4, this.alpha = Number(t5 != null && t5 !== `` ? t5 : 1), e4 = e4.slice(1);
              let n4 = 0, r3 = 0, i3 = 0;
              if (e4 === `t`) this.alpha = 0;
              else switch (e4.length) {
                case 0:
                  break;
                case 1:
                  n4 = r3 = i3 = e4 + e4;
                  break;
                case 2:
                  n4 = r3 = i3 = e4;
                  break;
                case 3:
                  n4 = e4[0] + e4[0], r3 = e4[1] + e4[1], i3 = e4[2] + e4[2];
                  break;
                default:
                  e4 += e4, n4 = e4.slice(0, 2), r3 = e4.slice(2, 4), i3 = e4.slice(4, 6);
              }
              this.r = parseInt(n4, 16), this.g = parseInt(r3, 16), this.b = parseInt(i3, 16);
            }
            toHex(e4) {
              let t5 = e4 && Gt(this.r) && Gt(this.g) && Gt(this.b) ? Kt : qt;
              return `#` + t5(this.r) + t5(this.g) + t5(this.b);
            }
            toRGB() {
              let e4 = [
                this.r,
                this.g,
                this.b
              ];
              return this.alpha !== 1 && e4.push(this.alpha.toFixed(8).replace(/\.?0+$/, ``)), `${e4.length === 3 ? `rgb` : `rgba`}(${e4.join(`, `)})`;
            }
            toString(e4) {
              return !this.r && !this.g && !this.b && !this.alpha ? `transparent` : this.alpha === 1 ? this.toHex(e4) : this.toRGB();
            }
          }
          function Wt(e4) {
            return u2(e4) || d2(e4, 65, 70);
          }
          function Gt(e4) {
            return !(e4 % 17);
          }
          function Kt(e4) {
            return (e4 >> 4).toString(16);
          }
          function qt(e4) {
            return Jt(e4.toString(16), 2);
          }
          function Jt(e4, t5) {
            for (; e4.length < t5; ) e4 = `0` + e4;
            return e4;
          }
          function Yt(e4) {
            return u2(e4) || Xt(e4);
          }
          function Xt(e4) {
            return e4 === 95 || d2(e4);
          }
          var Zt = function(e4) {
            if (e4.start = e4.pos, $t(e4)) {
              let t5 = e4.current();
              return e4.start = e4.pos, e4.eat(37) || e4.eatWhile(Xt), new Qt(t5, e4.current());
            }
          };
          class Qt {
            constructor(e4, t5) {
              this.type = `numeric`, this.value = Number(e4), this.unit = t5 || ``;
            }
            toString() {
              return `${this.value}${this.unit}`;
            }
          }
          function $t(e4) {
            let t5 = e4.pos, n4 = e4.eat(45), r3 = false, i3 = false, a3;
            for (; !e4.eof() && (a3 = e4.peek(), !(a3 === 46 ? r3 : !u2(a3))); ) i3 = true, a3 === 46 && (r3 = true), e4.next();
            return n4 && !i3 && (e4.pos = t5), t5 !== e4.pos;
          }
          var en = function(e4, t5) {
            return e4.start = e4.pos, e4.eat(36) || e4.eat(64) ? e4.eatWhile(rn) : t5 ? e4.eatWhile(Xt) : e4.eatWhile(nn), e4.start === e4.pos ? null : new tn(e4.current());
          };
          class tn {
            constructor(e4) {
              this.type = `keyword`, this.value = e4;
            }
            toString() {
              return this.value;
            }
          }
          function nn(e4) {
            return Yt(e4) || e4 === 45;
          }
          function rn(e4) {
            return e4 === 45 || Yt(e4);
          }
          let an = {
            throws: true
          };
          var on = function(e4) {
            if (c2(e4, an)) return new sn(e4.current());
          };
          class sn {
            constructor(e4) {
              this.type = `string`, this.value = e4;
            }
            toString() {
              return this.value;
            }
          }
          function cn(e4) {
            if (!e4.eat(40)) return null;
            let t5, n4 = [];
            for (; !e4.eof(); ) if (t5 = ln(e4)) n4.push(t5);
            else {
              if (e4.eatWhile(p2), e4.eat(41)) break;
              if (!e4.eat(44)) throw e4.error(`Expected , or )`);
            }
            return n4;
          }
          function ln(e4) {
            let t5 = new Vt(), n4;
            for (; !e4.eof() && (e4.eatWhile(p2), n4 = Zt(e4) || Ht(e4) || on(e4) || un(e4), n4); ) t5.add(n4);
            return t5.size ? t5 : null;
          }
          function un(e4) {
            let t5 = en(e4);
            if (t5) {
              let n4 = cn(e4);
              return n4 ? new dn(t5.toString(), n4) : t5;
            }
          }
          class dn {
            constructor(e4, t5) {
              this.type = `function`, this.name = e4, this.args = t5 || [];
            }
            toString() {
              return `${this.name}(${this.args.join(`, `)})`;
            }
          }
          var fn = function(e4) {
            let t5 = new g2(), n4 = new b2(e4);
            for (; !n4.eof(); ) {
              let e5 = new g2(pn(n4));
              e5.value = mn(n4);
              let r3 = cn(n4);
              if (r3) for (let t6 = 0; t6 < r3.length; t6++) e5.setAttribute(String(t6), r3[t6]);
              if (n4.eat(33) && e5.value.add(`!`), t5.appendChild(e5), !n4.eat(43)) break;
            }
            if (!n4.eof()) throw n4.error(`Unexpected character`);
            return t5;
          };
          function pn(e4) {
            return e4.start = e4.pos, e4.eatWhile(gn), e4.eatWhile(hn), e4.start === e4.pos ? null : e4.current();
          }
          function mn(e4) {
            let t5 = new Vt(), n4;
            for (; !e4.eof() && (e4.eat(58), (n4 = Zt(e4) || Ht(e4)) ? n4.unit || e4.eat(45) : (e4.eat(45), n4 = en(e4, true)), n4); ) t5.add(n4);
            return t5;
          }
          function hn(e4) {
            return Xt(e4);
          }
          function gn(e4) {
            return e4 === 64 || e4 === 36 || e4 === 33;
          }
          var _n = function(e4, t5) {
            if (e4 = e4.toLowerCase(), t5 = t5.toLowerCase(), e4 === t5) return 1;
            if (!t5 || e4.charCodeAt(0) !== t5.charCodeAt(0)) return 0;
            let n4 = e4.length, r3 = t5.length, i3 = 1, a3 = 1, o3 = r3, s3, c3, l3, u3;
            for (; i3 < n4; ) {
              for (s3 = e4.charCodeAt(i3), l3 = false, u3 = false; a3 < r3; ) {
                if (c3 = t5.charCodeAt(a3), s3 === c3) {
                  l3 = true, o3 += (r3 - a3) * (u3 ? 2 : 1);
                  break;
                }
                u3 = c3 === 45, a3++;
              }
              if (!l3) break;
              i3++;
            }
            return o3 && i3 / n4 * o3 / vn(r3);
          };
          function vn(e4) {
            return e4 * (e4 + 1) / 2;
          }
          let yn = /^([a-z\-]+)(?:\s*:\s*([^\n\r]+))?$/;
          var bn = function(e4) {
            return Sn(e4.map((e5) => new xn(e5.key, e5.value)));
          };
          class xn {
            constructor(e4, t5) {
              this.key = e4, this.value = t5, this.property = null;
              let n4 = t5 && t5.match(yn);
              n4 && (this.property = n4[1], this.value = n4[2]), this.dependencies = [];
            }
            addDependency(e4) {
              this.dependencies.push(e4);
            }
            get defaulValue() {
              return this.value == null ? null : Tn(this.value)[0];
            }
            keywords() {
              let e4 = [], t5 = /* @__PURE__ */ new Set(), n4 = 0, r3, i3;
              for (this.property && e4.push(this); n4 < e4.length; ) if (r3 = e4[n4++], r3.value) {
                i3 = Tn(r3.value).filter(wn);
                for (let e5 = 0; e5 < i3.length; e5++) t5.add(i3[e5].trim());
                for (let t6 = 0, n5 = r3.dependencies; t6 < n5.length; t6++) e4.indexOf(n5[t6]) === -1 && e4.push(n5[t6]);
              }
              return Array.from(t5);
            }
          }
          function Sn(e4) {
            e4 = e4.sort(Cn);
            let t5 = [];
            for (let n4 = 0, r3, i3; n4 < e4.length; n4++) if (r3 = e4[n4], r3.property) {
              for (; t5.length; ) {
                if (i3 = t5[t5.length - 1], r3.property.indexOf(i3.property) === 0 && r3.property.charCodeAt(i3.property.length) === 45) {
                  i3.addDependency(r3), t5.push(r3);
                  break;
                }
                t5.pop();
              }
              t5.length || t5.push(r3);
            }
            return e4;
          }
          function Cn(e4, t5) {
            return e4.key === t5.key ? 0 : e4.key < t5.key ? -1 : 1;
          }
          function wn(e4) {
            return /^\s*[\w\-]+/.test(e4);
          }
          function Tn(e4) {
            return String(e4).split(`|`);
          }
          let En = [
            `auto`,
            `inherit`,
            `unset`
          ], Dn = [
            `z-index`,
            `line-height`,
            `opacity`,
            `font-weight`,
            `zoom`,
            `flex`,
            `flex-grow`,
            `flex-shrink`
          ], On = {
            intUnit: `px`,
            floatUnit: `em`,
            unitAliases: {
              e: `em`,
              p: `%`,
              x: `ex`,
              r: `rem`
            },
            fuzzySearchMinScore: 0
          };
          var kn = function(e4, t5, n4) {
            let r3 = An(t5);
            return n4 = {
              intUnit: n4 && n4.intUnit || On.intUnit,
              floatUnit: n4 && n4.floatUnit || On.floatUnit,
              unitAliases: Object.assign({}, On.unitAliases, n4 && n4.unitAliases),
              fuzzySearchMinScore: n4 && n4.fuzzySearchMinScore || On.fuzzySearchMinScore
            }, e4.walk((e5) => jn(e5, r3, n4)), e4;
          };
          function An(e4) {
            return bn(e4.all({
              type: `string`
            }));
          }
          function jn(e4, t5, n4) {
            let r3 = Fn(e4.name, t5, `key`, n4.fuzzySearchMinScore);
            return r3 ? r3.property ? Mn(e4, r3, n4) : Nn(e4, r3) : e4.name === `!` ? Pn(e4, `!important`) : e4;
          }
          function Mn(e4, t5, n4) {
            let r3 = e4.name;
            if (e4.name = t5.property, e4.value && typeof e4.value == `object`) {
              let i3 = t5.keywords();
              if (e4.value.size) for (let t6 = 0, r4; t6 < e4.value.value.length; t6++) r4 = e4.value.value[t6], r4 === `!` ? r4 = `${t6 ? `` : "${1} "}!important` : Rn(r4) ? r4 = Fn(r4.value, i3) || Fn(r4.value, En) || r4 : zn(r4) && (r4 = Vn(e4.name, r4, n4)), e4.value.value[t6] = r4;
              else {
                let n5 = Fn(Ln(r3, t5.key), i3);
                n5 || (n5 = t5.defaulValue, n5 && n5.indexOf("${") === -1 && (n5 = `\${1:${n5}}`)), n5 && e4.value.add(n5);
              }
            }
            return e4;
          }
          function Nn(e4, t5) {
            return Pn(e4, t5.value);
          }
          function Pn(e4, t5) {
            return e4.name = null, e4.value = t5, e4;
          }
          function Fn(e4, t5, n4, r3) {
            if (!e4) return null;
            let i3 = null, a3 = 0;
            r3 || (r3 = 0);
            for (let r4 = 0, o3; r4 < t5.length; r4++) {
              o3 = t5[r4];
              let s3 = _n(e4, In(o3, n4));
              if (s3 === 1) return o3;
              s3 && s3 >= a3 && (a3 = s3, i3 = o3);
            }
            return a3 >= r3 ? i3 : null;
          }
          function In(e4, t5) {
            let n4 = e4 && typeof e4 == `object` ? e4[t5] : e4, r3 = (n4 || ``).match(/^[\w-@]+/);
            return r3 ? r3[0] : n4;
          }
          function Ln(e4, t5) {
            for (let n4 = 0, r3 = 0; n4 < e4.length; n4++) {
              if (r3 = t5.indexOf(e4[n4], r3), r3 === -1) return e4.slice(n4);
              r3++;
            }
            return ``;
          }
          function Rn(e4) {
            return Bn(e4, `keyword`);
          }
          function zn(e4) {
            return Bn(e4, `numeric`);
          }
          function Bn(e4, t5) {
            return e4 && typeof e4 == `object` && e4.type === t5;
          }
          function Vn(e4, t5, n4) {
            return t5.unit ? t5.unit = n4.unitAliases[t5.unit] || t5.unit : t5.value !== 0 && Dn.indexOf(e4) === -1 && (t5.unit = t5.value === (t5.value | 0) ? n4.intUnit : n4.floatUnit), t5;
          }
          let Hn = {
            shortHex: true,
            format: {
              between: `: `,
              after: `;`
            }
          };
          function Un(e4, t5, n4) {
            return n4 = Object.assign({}, Hn, n4), X2(e4, n4.field, (r3) => {
              let i3 = r3.node, a3 = String(i3.value || ``);
              if (i3.attributes.length) {
                let e5 = i3.attributes.map((e6) => Gn(e6, n4));
                a3 = Wn(a3, e5);
              }
              return r3.open = i3.name && t5.name(i3.name), r3.afterOpen = n4.format.between, r3.text = r3.renderFields(a3 || null), r3.open && (!r3.text || !r3.text.endsWith(`;`)) && (r3.afterText = n4.format.after), t5.get(`format`) && (r3.newline = `
`, e4.lastChild !== i3 && (r3.afterText += r3.newline)), r3;
            });
          }
          function Wn(e4, t5) {
            let n4 = Re2(e4), r3 = n4.fields.length;
            if (r3) for (t5 = t5.slice(), t5.length > r3 && (t5 = t5.slice(0, r3 - 1).concat(t5.slice(r3 - 1).join(`, `))); t5.length; ) {
              let e5 = t5.shift(), r4 = n4.fields.shift(), i3 = e5.length - r4.length;
              n4.string = n4.string.slice(0, r4.location) + e5 + n4.string.slice(r4.location + r4.length);
              for (let e6 = 0, t6 = n4.fields.length; e6 < t6; e6++) n4.fields[e6].location += i3;
            }
            return n4;
          }
          function Gn(e4, t5) {
            return e4.value && typeof e4.value == `object` && e4.value.type === `css-value` ? e4.value.value.map((e5) => e5 && typeof e5 == `object` ? e5.type === `color` ? e5.toString(t5.shortHex) : e5.toString() : String(e5)).join(` `) : e4.value == null ? `` : String(e4.value);
          }
          let Kn = {
            css: {
              between: `: `,
              after: `;`
            },
            scss: `css`,
            less: `css`,
            sass: {
              between: `: `,
              after: ``
            },
            stylus: {
              between: ` `,
              after: ``
            }
          };
          var qn = function(e4, t5, n4, r3) {
            return typeof n4 == `object` && (r3 = n4, n4 = null), Jn(n4) || (n4 = `css`), r3 = Object.assign({}, r3, {
              format: Yn(n4, r3)
            }), Un(e4, t5, r3);
          };
          function Jn(e4) {
            return !!e4 && e4 in Kn;
          }
          function Yn(e4, t5) {
            let n4 = Kn[e4];
            return typeof n4 == `string` && (n4 = Kn[n4]), Object.assign({}, n4, t5 && t5.stylesheet);
          }
          function Xn(e4, t5) {
            return t5 || (t5 = {}), typeof e4 == `string` && (e4 = Zn(e4, t5)), qn(e4, t5.profile, t5.syntax, t5.format);
          }
          function Zn(e4, t5) {
            return typeof e4 == `string` && (e4 = fn(e4)), e4.use(kn, t5.snippets, t5.format ? t5.format.stylesheet : {});
          }
          var Qn = {
            html: {
              a: `a[href]`,
              "a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
              "a:link": "a[href='http://${0}']",
              "a:mail": "a[href='mailto:${0}']",
              "a:tel": "a[href='tel:+${0}']",
              abbr: `abbr[title]`,
              "acr|acronym": `acronym[title]`,
              base: `base[href]/`,
              basefont: `basefont/`,
              br: `br/`,
              frame: `frame/`,
              hr: `hr/`,
              bdo: `bdo[dir]`,
              "bdo:r": `bdo[dir=rtl]`,
              "bdo:l": `bdo[dir=ltr]`,
              col: `col/`,
              link: `link[rel=stylesheet href]/`,
              "link:css": "link[href='${1:style}.css']",
              "link:print": "link[href='${1:print}.css' media=print]",
              "link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
              "link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']",
              "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
              "link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
              "link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
              "link:im|link:import": "link[rel=import href='${1:component}.html']",
              meta: `meta/`,
              "meta:utf": `meta[http-equiv=Content-Type content='text/html;charset=UTF-8']`,
              "meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
              "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
              "meta:edge": "meta:compat[content='${1:ie=edge}']",
              "meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
              "meta:kw": `meta[name=keywords content]`,
              "meta:desc": `meta[name=description content]`,
              style: `style`,
              script: `script`,
              "script:src": `script[src]`,
              img: `img[src alt]/`,
              "img:s|img:srcset": `img[srcset src alt]`,
              "img:z|img:sizes": `img[sizes srcset src alt]`,
              picture: `picture`,
              "src|source": `source/`,
              "src:sc|source:src": `source[src type]`,
              "src:s|source:srcset": `source[srcset]`,
              "src:t|source:type": "source[srcset type='${1:image/}']",
              "src:z|source:sizes": `source[sizes srcset]`,
              "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
              "src:mt|source:media:type": "source:media[type='${2:image/}']",
              "src:mz|source:media:sizes": `source:media[sizes srcset]`,
              "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
              iframe: `iframe[src frameborder=0]`,
              embed: `embed[src type]/`,
              object: `object[data type]`,
              param: `param[name value]/`,
              map: `map[name]`,
              area: `area[shape coords href alt]/`,
              "area:d": `area[shape=default]`,
              "area:c": `area[shape=circle]`,
              "area:r": `area[shape=rect]`,
              "area:p": `area[shape=poly]`,
              form: `form[action]`,
              "form:get": `form[method=get]`,
              "form:post": `form[method=post]`,
              label: `label[for]`,
              input: "input[type=${1:text}]/",
              inp: "input[name=${1} id=${1}]",
              "input:h|input:hidden": `input[type=hidden name]`,
              "input:t|input:text": `inp[type=text]`,
              "input:search": `inp[type=search]`,
              "input:email": `inp[type=email]`,
              "input:url": `inp[type=url]`,
              "input:p|input:password": `inp[type=password]`,
              "input:datetime": `inp[type=datetime]`,
              "input:date": `inp[type=date]`,
              "input:datetime-local": `inp[type=datetime-local]`,
              "input:month": `inp[type=month]`,
              "input:week": `inp[type=week]`,
              "input:time": `inp[type=time]`,
              "input:tel": `inp[type=tel]`,
              "input:number": `inp[type=number]`,
              "input:color": `inp[type=color]`,
              "input:c|input:checkbox": `inp[type=checkbox]`,
              "input:r|input:radio": `inp[type=radio]`,
              "input:range": `inp[type=range]`,
              "input:f|input:file": `inp[type=file]`,
              "input:s|input:submit": `input[type=submit value]`,
              "input:i|input:image": `input[type=image src alt]`,
              "input:b|input:button": `input[type=button value]`,
              "input:reset": `input:button[type=reset]`,
              isindex: `isindex/`,
              select: "select[name=${1} id=${1}]",
              "select:d|select:disabled": `select[disabled.]`,
              "opt|option": `option[value]`,
              textarea: "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
              marquee: `marquee[behavior direction]`,
              "menu:c|menu:context": `menu[type=context]`,
              "menu:t|menu:toolbar": `menu[type=toolbar]`,
              video: `video[src]`,
              audio: `audio[src]`,
              "html:xml": `html[xmlns=http://www.w3.org/1999/xhtml]`,
              keygen: `keygen/`,
              command: `command/`,
              "btn:s|button:s|button:submit": `button[type=submit]`,
              "btn:r|button:r|button:reset": `button[type=reset]`,
              "btn:d|button:d|button:disabled": `button[disabled.]`,
              "fst:d|fset:d|fieldset:d|fieldset:disabled": `fieldset[disabled.]`,
              bq: `blockquote`,
              fig: `figure`,
              figc: `figcaption`,
              pic: `picture`,
              ifr: `iframe`,
              emb: `embed`,
              obj: `object`,
              cap: `caption`,
              colg: `colgroup`,
              fst: `fieldset`,
              btn: `button`,
              optg: `optgroup`,
              tarea: `textarea`,
              leg: `legend`,
              sect: `section`,
              art: `article`,
              hdr: `header`,
              ftr: `footer`,
              adr: `address`,
              dlg: `dialog`,
              str: `strong`,
              prog: `progress`,
              mn: `main`,
              tem: `template`,
              fset: `fieldset`,
              datag: `datagrid`,
              datal: `datalist`,
              kg: `keygen`,
              out: `output`,
              det: `details`,
              cmd: `command`,
              "ri:d|ri:dpr": `img:s`,
              "ri:v|ri:viewport": `img:z`,
              "ri:a|ri:art": `pic>src:m+img`,
              "ri:t|ri:type": `pic>src:t+img`,
              "!!!": `{<!DOCTYPE html>}`,
              doc: "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
              "!|html:5": `!!!+doc`,
              c: "{<!-- ${0} -->}",
              "cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
              "cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}"
            },
            css: {
              "@f": `@font-face {
	font-family: \${1};
	src: url(\${1});
}`,
              "@ff": `@font-face {
	font-family: '\${1:FontName}';
	src: url('\${2:FileName}.eot');
	src: url('\${2:FileName}.eot?#iefix') format('embedded-opentype'),
		 url('\${2:FileName}.woff') format('woff'),
		 url('\${2:FileName}.ttf') format('truetype'),
		 url('\${2:FileName}.svg#\${1:FontName}') format('svg');
	font-style: \${3:normal};
	font-weight: \${4:normal};
}`,
              "@i|@import": "@import url(${0});",
              "@kf": `@keyframes \${1:identifier} {
	\${2}
}`,
              "@m|@media": `@media \${1:screen} {
	\${0}
}`,
              ac: `align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly`,
              ai: `align-items:start|end|flex-start|flex-end|center|baseline|stretch`,
              anim: "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
              animdel: `animation-delay:time`,
              animdir: `animation-direction:normal|reverse|alternate|alternate-reverse`,
              animdur: "animation-duration:${1:0}s",
              animfm: `animation-fill-mode:both|forwards|backwards`,
              animic: `animation-iteration-count:1|infinite`,
              animn: `animation-name`,
              animps: `animation-play-state:running|paused`,
              animtf: "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
              ap: `appearance:none`,
              as: `align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch`,
              b: `bottom`,
              bd: "border:${1:1px} ${2:solid} ${3:#000}",
              bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}",
              bdbc: "border-bottom-color:${1:#000}",
              bdbi: "border-bottom-image:url(${0})",
              bdbk: `border-break:close`,
              bdbli: "border-bottom-left-image:url(${0})|continue",
              bdblrs: `border-bottom-left-radius`,
              bdbri: "border-bottom-right-image:url(${0})|continue",
              bdbrrs: `border-bottom-right-radius`,
              bdbs: `border-bottom-style`,
              bdbw: `border-bottom-width`,
              bdc: "border-color:${1:#000}",
              bdci: "border-corner-image:url(${0})|continue",
              bdcl: `border-collapse:collapse|separate`,
              bdf: `border-fit:repeat|clip|scale|stretch|overwrite|overflow|space`,
              bdi: "border-image:url(${0})",
              bdl: "border-left:${1:1px} ${2:solid} ${3:#000}",
              bdlc: "border-left-color:${1:#000}",
              bdlen: `border-length`,
              bdli: "border-left-image:url(${0})",
              bdls: `border-left-style`,
              bdlw: `border-left-width`,
              bdr: "border-right:${1:1px} ${2:solid} ${3:#000}",
              bdrc: "border-right-color:${1:#000}",
              bdri: "border-right-image:url(${0})",
              bdrs: `border-radius`,
              bdrst: `border-right-style`,
              bdrw: `border-right-width`,
              bds: `border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset`,
              bdsp: `border-spacing`,
              bdt: "border-top:${1:1px} ${2:solid} ${3:#000}",
              bdtc: "border-top-color:${1:#000}",
              bdti: "border-top-image:url(${0})",
              bdtli: "border-top-left-image:url(${0})|continue",
              bdtlrs: `border-top-left-radius`,
              bdtri: "border-top-right-image:url(${0})|continue",
              bdtrrs: `border-top-right-radius`,
              bdts: `border-top-style`,
              bdtw: `border-top-width`,
              bdw: `border-width`,
              bfv: `backface-visibility:hidden|visible`,
              bg: "background:${1:#000}",
              bga: `background-attachment:fixed|scroll`,
              bgbk: `background-break:bounding-box|each-box|continuous`,
              bgc: "background-color:#${1:fff}",
              bgcp: `background-clip:padding-box|border-box|content-box|no-clip`,
              bgi: "background-image:url(${0})",
              bgo: `background-origin:padding-box|border-box|content-box`,
              bgp: "background-position:${1:0} ${2:0}",
              bgpx: `background-position-x`,
              bgpy: `background-position-y`,
              bgr: `background-repeat:no-repeat|repeat-x|repeat-y|space|round`,
              bgsz: `background-size:contain|cover`,
              bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
              bxsz: `box-sizing:border-box|content-box|border-box`,
              c: "color:${1:#000}",
              cl: `clear:both|left|right|none`,
              cm: "/* ${0} */",
              cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})",
              coi: `counter-increment`,
              colm: `columns`,
              colmc: `column-count`,
              colmf: `column-fill`,
              colmg: `column-gap`,
              colmr: `column-rule`,
              colmrc: `column-rule-color`,
              colmrs: `column-rule-style`,
              colmrw: `column-rule-width`,
              colms: `column-span`,
              colmw: `column-width`,
              cor: `counter-reset`,
              cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
              cps: `caption-side:top|bottom`,
              cur: `cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text`,
              d: `display:grid|inline-grid|subgrid|block|none|flex|inline-flex|inline|inline-block|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group`,
              ec: `empty-cells:show|hide`,
              f: "font:${1:1em} ${2:sans-serif}",
              fd: `font-display:auto|block|swap|fallback|optional`,
              fef: `font-effect:none|engrave|emboss|outline`,
              fem: `font-emphasize`,
              femp: `font-emphasize-position:before|after`,
              fems: `font-emphasize-style:none|accent|dot|circle|disc`,
              ff: `font-family:serif|sans-serif|cursive|fantasy|monospace`,
              fft: `font-family:"Times New Roman", Times, Baskerville, Georgia, serif`,
              ffa: `font-family:Arial, "Helvetica Neue", Helvetica, sans-serif`,
              ffv: `font-family:Verdana, Geneva, sans-serif`,
              fl: `float:left|right|none`,
              fs: `font-style:italic|normal|oblique`,
              fsm: `font-smoothing:antialiased|subpixel-antialiased|none`,
              fst: `font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded`,
              fv: `font-variant:normal|small-caps`,
              fvs: `font-variation-settings:normal|inherit|initial|unset`,
              fw: `font-weight:normal|bold|bolder|lighter`,
              fx: `flex`,
              fxb: `flex-basis:fill|max-content|min-content|fit-content|content`,
              fxd: `flex-direction:row|row-reverse|column|column-reverse`,
              fxf: `flex-flow`,
              fxg: `flex-grow`,
              fxsh: `flex-shrink`,
              fxw: `flex-wrap:nowrap|wrap|wrap-reverse`,
              fsz: `font-size`,
              fsza: `font-size-adjust`,
              gtc: `grid-template-columns:repeat()|minmax()`,
              gtr: `grid-template-rows:repeat()|minmax()`,
              gta: `grid-template-areas`,
              gt: `grid-template`,
              gg: `grid-gap`,
              gcg: `grid-column-gap`,
              grg: `grid-row-gap`,
              gac: `grid-auto-columns:auto|minmax()`,
              gar: `grid-auto-rows:auto|minmax()`,
              gaf: `grid-auto-flow:row|column|dense|inherit|initial|unset`,
              gd: `grid`,
              gc: `grid-column`,
              gcs: `grid-column-start`,
              gce: `grid-column-end`,
              gr: `grid-row`,
              grs: `grid-row-start`,
              gre: `grid-row-end`,
              ga: `grid-area`,
              h: `height`,
              jc: `justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly`,
              ji: `justify-items:start|end|center|stretch`,
              js: `justify-self:start|end|center|stretch`,
              l: `left`,
              lg: "background-image:linear-gradient(${1})",
              lh: `line-height`,
              lis: `list-style`,
              lisi: `list-style-image`,
              lisp: `list-style-position:inside|outside`,
              list: `list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman`,
              lts: `letter-spacing:normal`,
              m: `margin`,
              mah: `max-height`,
              mar: `max-resolution`,
              maw: `max-width`,
              mb: `margin-bottom`,
              mih: `min-height`,
              mir: `min-resolution`,
              miw: `min-width`,
              ml: `margin-left`,
              mr: `margin-right`,
              mt: `margin-top`,
              ol: `outline`,
              olc: "outline-color:${1:#000}|invert",
              olo: `outline-offset`,
              ols: `outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset`,
              olw: `outline-width|thin|medium|thick`,
              op: `opacity`,
              ord: `order`,
              ori: `orientation:landscape|portrait`,
              orp: `orphans`,
              ov: `overflow:hidden|visible|hidden|scroll|auto`,
              ovs: `overflow-style:scrollbar|auto|scrollbar|panner|move|marquee`,
              ovx: `overflow-x:hidden|visible|hidden|scroll|auto`,
              ovy: `overflow-y:hidden|visible|hidden|scroll|auto`,
              p: `padding`,
              pb: `padding-bottom`,
              pgba: `page-break-after:auto|always|left|right`,
              pgbb: `page-break-before:auto|always|left|right`,
              pgbi: `page-break-inside:auto|avoid`,
              pl: `padding-left`,
              pos: `position:relative|absolute|relative|fixed|static`,
              pr: `padding-right`,
              pt: `padding-top`,
              q: `quotes`,
              qen: `quotes:'\\201C' '\\201D' '\\2018' '\\2019'`,
              qru: `quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'`,
              r: `right`,
              rsz: `resize:none|both|horizontal|vertical`,
              t: `top`,
              ta: `text-align:left|center|right|justify`,
              tal: `text-align-last:left|center|right`,
              tbl: `table-layout:fixed`,
              td: `text-decoration:none|underline|overline|line-through`,
              te: `text-emphasis:none|accent|dot|circle|disc|before|after`,
              th: `text-height:auto|font-size|text-size|max-size`,
              ti: `text-indent`,
              tj: `text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan`,
              to: "text-outline:${1:0} ${2:0} ${3:#000}",
              tov: `text-overflow:ellipsis|clip`,
              tr: `text-replace`,
              trf: "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
              trfo: `transform-origin`,
              trfs: `transform-style:preserve-3d`,
              trs: "transition:${1:prop} ${2:time}",
              trsde: "transition-delay:${1:time}",
              trsdu: "transition-duration:${1:time}",
              trsp: "transition-property:${1:prop}",
              trstf: "transition-timing-function:${1:fn}",
              tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
              tt: `text-transform:uppercase|lowercase|capitalize|none`,
              tw: `text-wrap:none|normal|unrestricted|suppress`,
              us: `user-select:none`,
              v: `visibility:hidden|visible|collapse`,
              va: `vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub`,
              w: `width`,
              whs: `white-space:nowrap|pre|pre-wrap|pre-line|normal`,
              whsc: `white-space-collapse:normal|keep-all|loose|break-strict|break-all`,
              wid: `widows`,
              wm: `writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl`,
              wob: `word-break:normal|keep-all|break-all`,
              wos: `word-spacing`,
              wow: `word-wrap:none|unrestricted|suppress|break-word|normal`,
              z: `z-index`,
              zom: `zoom:1`
            },
            xsl: {
              "tm|tmatch": `xsl:template[match mode]`,
              "tn|tname": `xsl:template[name]`,
              call: `xsl:call-template[name]`,
              ap: `xsl:apply-templates[select mode]`,
              api: `xsl:apply-imports`,
              imp: `xsl:import[href]`,
              inc: `xsl:include[href]`,
              ch: `xsl:choose`,
              "wh|xsl:when": `xsl:when[test]`,
              ot: `xsl:otherwise`,
              if: `xsl:if[test]`,
              par: `xsl:param[name]`,
              pare: `xsl:param[name select]`,
              var: `xsl:variable[name]`,
              vare: `xsl:variable[name select]`,
              wp: `xsl:with-param[name select]`,
              key: `xsl:key[name match use]`,
              elem: `xsl:element[name]`,
              attr: `xsl:attribute[name]`,
              attrs: `xsl:attribute-set[name]`,
              cp: `xsl:copy[select]`,
              co: `xsl:copy-of[select]`,
              val: `xsl:value-of[select]`,
              "for|each": `xsl:for-each[select]`,
              tex: `xsl:text`,
              com: `xsl:comment`,
              msg: `xsl:message[terminate=no]`,
              fall: `xsl:fallback`,
              num: `xsl:number[value]`,
              nam: `namespace-alias[stylesheet-prefix result-prefix]`,
              pres: `xsl:preserve-space[elements]`,
              strip: `xsl:strip-space[elements]`,
              proc: `xsl:processing-instruction[name]`,
              sort: `xsl:sort[select order]`,
              choose: `xsl:choose>xsl:when+xsl:otherwise`,
              xsl: `!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{
|}`,
              "!!!": `{<?xml version="1.0" encoding="UTF-8"?>}`
            }
          };
          let $n = {
            latin: {
              common: [
                `lorem`,
                `ipsum`,
                `dolor`,
                `sit`,
                `amet`,
                `consectetur`,
                `adipisicing`,
                `elit`
              ],
              words: `exercitationem.perferendis.perspiciatis.laborum.eveniet.sunt.iure.nam.nobis.eum.cum.officiis.excepturi.odio.consectetur.quasi.aut.quisquam.vel.eligendi.itaque.non.odit.tempore.quaerat.dignissimos.facilis.neque.nihil.expedita.vitae.vero.ipsum.nisi.animi.cumque.pariatur.velit.modi.natus.iusto.eaque.sequi.illo.sed.ex.et.voluptatibus.tempora.veritatis.ratione.assumenda.incidunt.nostrum.placeat.aliquid.fuga.provident.praesentium.rem.necessitatibus.suscipit.adipisci.quidem.possimus.voluptas.debitis.sint.accusantium.unde.sapiente.voluptate.qui.aspernatur.laudantium.soluta.amet.quo.aliquam.saepe.culpa.libero.ipsa.dicta.reiciendis.nesciunt.doloribus.autem.impedit.minima.maiores.repudiandae.ipsam.obcaecati.ullam.enim.totam.delectus.ducimus.quis.voluptates.dolores.molestiae.harum.dolorem.quia.voluptatem.molestias.magni.distinctio.omnis.illum.dolorum.voluptatum.ea.quas.quam.corporis.quae.blanditiis.atque.deserunt.laboriosam.earum.consequuntur.hic.cupiditate.quibusdam.accusamus.ut.rerum.error.minus.eius.ab.ad.nemo.fugit.officia.at.in.id.quos.reprehenderit.numquam.iste.fugiat.sit.inventore.beatae.repellendus.magnam.recusandae.quod.explicabo.doloremque.aperiam.consequatur.asperiores.commodi.optio.dolor.labore.temporibus.repellat.veniam.architecto.est.esse.mollitia.nulla.a.similique.eos.alias.dolore.tenetur.deleniti.porro.facere.maxime.corrupti`.split(`.`)
            },
            ru: {
              common: [
                `\u0434\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E`,
                `\u0437\u0430`,
                `\u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438`,
                `\u0433\u043E\u0440\u0430\u043C\u0438`,
                `\u0432 \u0441\u0442\u0440\u0430\u043D\u0435`,
                `\u0433\u043B\u0430\u0441\u043D\u044B\u0445`,
                `\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445`,
                `\u0436\u0438\u0432\u0443\u0442`,
                `\u0440\u044B\u0431\u043D\u044B\u0435`,
                `\u0442\u0435\u043A\u0441\u0442\u044B`
              ],
              words: `\u0432\u0434\u0430\u043B\u0438.\u043E\u0442 \u0432\u0441\u0435\u0445.\u043E\u043D\u0438.\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0445.\u0434\u043E\u043C\u0430\u0445.\u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443.\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430.\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E.\u044F\u0437\u044B\u043A\u043E\u0432\u043E\u0433\u043E.\u043E\u043A\u0435\u0430\u043D\u0430.\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439.\u0440\u0443\u0447\u0435\u0435\u043A.\u0434\u0430\u043B\u044C.\u0436\u0443\u0440\u0447\u0438\u0442.\u043F\u043E \u0432\u0441\u0435\u0439.\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442.\u0435\u0435.\u0432\u0441\u0435\u043C\u0438.\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438.\u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438.\u044D\u0442\u0430.\u043F\u0430\u0440\u0430\u0434\u0438\u0433\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F.\u0441\u0442\u0440\u0430\u043D\u0430.\u043A\u043E\u0442\u043E\u0440\u043E\u0439.\u0436\u0430\u0440\u0435\u043D\u043D\u044B\u0435.\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F.\u0437\u0430\u043B\u0435\u0442\u0430\u044E\u0442.\u043F\u0440\u044F\u043C\u043E.\u0440\u043E\u0442.\u0434\u0430\u0436\u0435.\u0432\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0430\u044F.\u043F\u0443\u043D\u043A\u0442\u0443\u0430\u0446\u0438\u044F.\u043D\u0435.\u0438\u043C\u0435\u0435\u0442.\u0432\u043B\u0430\u0441\u0442\u0438.\u043D\u0430\u0434.\u0440\u044B\u0431\u043D\u044B\u043C\u0438.\u0442\u0435\u043A\u0441\u0442\u0430\u043C\u0438.\u0432\u0435\u0434\u0443\u0449\u0438\u043C\u0438.\u0431\u0435\u0437\u043E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u043D\u044B\u0439.\u043E\u0431\u0440\u0430\u0437.\u0436\u0438\u0437\u043D\u0438.\u043E\u0434\u043D\u0430\u0436\u0434\u044B.\u043E\u0434\u043D\u0430.\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F.\u0441\u0442\u0440\u043E\u0447\u043A\u0430.\u0440\u044B\u0431\u043D\u043E\u0433\u043E.\u0442\u0435\u043A\u0441\u0442\u0430.\u0438\u043C\u0435\u043D\u0438.lorem.ipsum.\u0440\u0435\u0448\u0438\u043B\u0430.\u0432\u044B\u0439\u0442\u0438.\u0431\u043E\u043B\u044C\u0448\u043E\u0439.\u043C\u0438\u0440.\u0433\u0440\u0430\u043C\u043C\u0430\u0442\u0438\u043A\u0438.\u0432\u0435\u043B\u0438\u043A\u0438\u0439.\u043E\u043A\u0441\u043C\u043E\u043A\u0441.\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u043B.\u043E.\u0437\u043B\u044B\u0445.\u0437\u0430\u043F\u044F\u0442\u044B\u0445.\u0434\u0438\u043A\u0438\u0445.\u0437\u043D\u0430\u043A\u0430\u0445.\u0432\u043E\u043F\u0440\u043E\u0441\u0430.\u043A\u043E\u0432\u0430\u0440\u043D\u044B\u0445.\u0442\u043E\u0447\u043A\u0430\u0445.\u0437\u0430\u043F\u044F\u0442\u043E\u0439.\u043D\u043E.\u0442\u0435\u043A\u0441\u0442.\u0434\u0430\u043B.\u0441\u0431\u0438\u0442\u044C.\u0441\u0435\u0431\u044F.\u0442\u043E\u043B\u043A\u0443.\u043E\u043D.\u0441\u043E\u0431\u0440\u0430\u043B.\u0441\u0435\u043C\u044C.\u0441\u0432\u043E\u0438\u0445.\u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445.\u0431\u0443\u043A\u0432.\u043F\u043E\u0434\u043F\u043E\u044F\u0441\u0430\u043B.\u0438\u043D\u0438\u0446\u0438\u0430\u043B.\u0437\u0430.\u043F\u043E\u044F\u0441.\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F.\u0434\u043E\u0440\u043E\u0433\u0443.\u0432\u0437\u043E\u0431\u0440\u0430\u0432\u0448\u0438\u0441\u044C.\u043F\u0435\u0440\u0432\u0443\u044E.\u0432\u0435\u0440\u0448\u0438\u043D\u0443.\u043A\u0443\u0440\u0441\u0438\u0432\u043D\u044B\u0445.\u0433\u043E\u0440.\u0431\u0440\u043E\u0441\u0438\u043B.\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439.\u0432\u0437\u0433\u043B\u044F\u0434.\u043D\u0430\u0437\u0430\u0434.\u0441\u0438\u043B\u0443\u044D\u0442.\u0441\u0432\u043E\u0435\u0433\u043E.\u0440\u043E\u0434\u043D\u043E\u0433\u043E.\u0433\u043E\u0440\u043E\u0434\u0430.\u0431\u0443\u043A\u0432\u043E\u0433\u0440\u0430\u0434.\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.\u0434\u0435\u0440\u0435\u0432\u043D\u0438.\u0430\u043B\u0444\u0430\u0432\u0438\u0442.\u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.\u0441\u0432\u043E\u0435\u0433\u043E.\u043F\u0435\u0440\u0435\u0443\u043B\u043A\u0430.\u0433\u0440\u0443\u0441\u0442\u043D\u044B\u0439.\u0440\u0435\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439.\u0432\u043E\u043F\u0440\u043E\u0441.\u0441\u043A\u0430\u0442\u0438\u043B\u0441\u044F.\u0435\u0433\u043E.\u0449\u0435\u043A\u0435.\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B.\u0441\u0432\u043E\u0439.\u043F\u0443\u0442\u044C.\u0434\u043E\u0440\u043E\u0433\u0435.\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B.\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u044C.\u043E\u043D\u0430.\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0434\u0438\u043B\u0430.\u043C\u043E\u0435\u0439.\u0432\u0441\u0435.\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F.\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E.\u0440\u0430\u0437.\u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435.\u0447\u0442\u043E.\u043C\u0435\u043D\u044F.\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C.\u044D\u0442\u043E.\u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430.\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044F.\u0442\u044B.\u043B\u0443\u0447\u0448\u0435.\u0441\u0432\u043E\u044E.\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0443\u044E.\u0441\u0442\u0440\u0430\u043D\u0443.\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u0432\u0448\u0438\u0441\u044C.\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u0438.\u043D\u0430\u0448.\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B.\u0441\u0432\u043E\u0439.\u043F\u0443\u0442\u044C.\u0432\u0441\u043A\u043E\u0440\u0435.\u0435\u043C\u0443.\u043F\u043E\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043B\u0441\u044F.\u043A\u043E\u0432\u0430\u0440\u043D\u044B\u0439.\u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C.\u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445.\u0442\u0435\u043A\u0441\u0442\u043E\u0432.\u043D\u0430\u043F\u043E\u0438\u0432\u0448\u0438\u0439.\u044F\u0437\u044B\u043A\u043E\u043C.\u0440\u0435\u0447\u044C\u044E.\u0437\u0430\u043C\u0430\u043D\u0438\u0432\u0448\u0438\u0439.\u0441\u0432\u043E\u0435.\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E.\u043A\u043E\u0442\u043E\u0440\u043E\u0435.\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u043E.\u0441\u043D\u043E\u0432\u0430.\u0441\u043D\u043E\u0432\u0430.\u0441\u0432\u043E\u0438\u0445.\u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445.\u0435\u0441\u043B\u0438.\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043B\u0438.\u0442\u043E.\u0436\u0438\u0432\u0435\u0442.\u0442\u0430\u043C.\u0434\u043E.\u0441\u0438\u0445.\u043F\u043E\u0440`.split(`.`)
            },
            sp: {
              common: [
                `mujer`,
                `uno`,
                `dolor`,
                `m\xE1s`,
                `de`,
                `poder`,
                `mismo`,
                `si`
              ],
              words: `ejercicio.preferencia.perspicacia.laboral.pa\xF1o.suntuoso.molde.namibia.planeador.mirar.dem\xE1s.oficinista.excepci\xF3n.odio.consecuencia.casi.auto.chicharra.velo.elixir.ataque.no.odio.temporal.cu\xF3rum.dign\xEDsimo.facilismo.letra.nihilista.expedici\xF3n.alma.alveolar.aparte.le\xF3n.animal.como.paria.belleza.modo.natividad.justo.ataque.s\xE9quito.pillo.sed.ex.y.voluminoso.temporalidad.verdades.racional.asunci\xF3n.incidente.marejada.placenta.amanecer.fuga.previsor.presentaci\xF3n.lejos.necesariamente.sospechoso.adiposidad.quind\xEDo.p\xF3cima.voluble.d\xE9bito.sinti\xF3.accesorio.falda.sapiencia.volutas.queso.permacultura.laudo.soluciones.entero.pan.litro.tonelada.culpa.libertario.mosca.dictado.reincidente.nascimiento.dolor.escolar.impedimento.m\xEDnima.mayores.repugnante.dulce.obcecado.monta\xF1a.enigma.total.delet\xE9reo.d\xE9cima.c\xE1bala.fotograf\xEDa.dolores.molesto.olvido.paciencia.resiliencia.voluntad.molestias.magn\xEDfico.distinci\xF3n.ovni.marejada.cerro.torre.y.abogada.manantial.corporal.agua.crep\xFAsculo.ataque.desierto.laboriosamente.angustia.afortunado.alma.encefalograma.materialidad.cosas.o.renuncia.error.menos.conejo.abad\xEDa.analfabeto.remo.fugacidad.oficio.en.alm\xE1cigo.vos.pan.represi\xF3n.n\xFAmeros.triste.refugiado.trote.inventor.corchea.repelente.magma.recusado.patr\xF3n.expl\xEDcito.paloma.s\xEDndrome.inmune.autoinmune.comodidad.ley.vietnamita.demonio.tasmania.repeler.ap\xE9ndice.arquitecto.columna.yugo.computador.mula.a.prop\xF3sito.fantas\xEDa.alias.rayo.tenedor.deleznable.ventana.cara.anemia.corrupto`.split(`.`)
            }
          }, er = {
            wordCount: 30,
            skipCommon: false,
            lang: `latin`
          };
          var tr = function(e4, t5) {
            t5 = Object.assign({}, er, t5);
            let n4 = $n[t5.lang] || $n.latin, r3 = !t5.skipCommon && !ur(e4);
            return !e4.repeat && !nr(e4.parent) ? (e4.parent.value = lr(n4, t5.wordCount, r3), e4.remove()) : (e4.value = lr(n4, t5.wordCount, r3), e4.name = e4.parent.name ? ce2(e4.parent.name) : null), e4;
          };
          function nr(e4) {
            return !e4.parent;
          }
          function rr(e4, t5) {
            return Math.floor(Math.random() * (t5 - e4) + e4);
          }
          function ir(e4, t5) {
            let n4 = e4.length, r3 = Math.min(n4, t5), i3 = /* @__PURE__ */ new Set();
            for (; i3.size < r3; ) i3.add(e4[rr(0, n4)]);
            return Array.from(i3);
          }
          function ar(e4) {
            return e4[rr(0, e4.length - 1)];
          }
          function or(e4, t5) {
            return e4.length && (e4 = [
              sr(e4[0])
            ].concat(e4.slice(1))), e4.join(` `) + (t5 || ar(`?!...`));
          }
          function sr(e4) {
            return e4[0].toUpperCase() + e4.slice(1);
          }
          function cr(e4) {
            if (e4.length < 2) return e4;
            e4 = e4.slice();
            let t5 = e4.length, n4 = /,$/, r3 = 0;
            r3 = t5 > 3 && t5 <= 6 ? rr(0, 1) : t5 > 6 && t5 <= 12 ? rr(0, 2) : rr(1, 4);
            for (let i3 = 0, a3; i3 < r3; i3++) a3 = rr(0, t5 - 2), n4.test(e4[a3]) || (e4[a3] += `,`);
            return e4;
          }
          function lr(e4, t5, n4) {
            let r3 = [], i3 = 0, a3;
            for (n4 && e4.common && (a3 = e4.common.slice(0, t5), i3 += a3.length, r3.push(or(cr(a3), `.`))); i3 < t5; ) a3 = ir(e4.words, Math.min(rr(2, 30), t5 - i3)), i3 += a3.length, r3.push(or(cr(a3)));
            return r3.join(` `);
          }
          function ur(e4) {
            for (; e4.parent; ) {
              if (e4.repeat && e4.repeat.value && e4.repeat.value > 1) return true;
              e4 = e4.parent;
            }
            return false;
          }
          let dr = /^lorem([a-z]*)(\d*)$/i;
          function fr(e4, t5) {
            let n4 = [
              Qn[e4] || Qn.html
            ];
            Array.isArray(t5) ? t5.forEach((e5) => {
              n4.push(typeof e5 == `string` ? Qn[e5] : e5);
            }) : typeof t5 == `object` && n4.push(t5);
            let r3 = new o2(n4.filter(Boolean));
            return e4 !== `css` && r3.get(0).set(dr, pr), r3;
          }
          function pr(e4) {
            let t5 = {}, n4 = e4.name.match(dr);
            return n4[1] && (t5.lang = n4[1]), n4[2] && (t5.wordCount = +n4[2]), tr(e4, t5);
          }
          let mr = {
            lang: `en`,
            locale: `en-US`,
            charset: `UTF-8`
          }, hr = /* @__PURE__ */ new Set([
            `css`,
            `sass`,
            `scss`,
            `less`,
            `stylus`,
            `sss`
          ]), gr = {
            syntax: `html`,
            field: (e4, t5) => t5 || ``,
            text: null,
            profile: null,
            variables: {},
            snippets: {},
            addons: null,
            format: null
          };
          function _r(e4, t5) {
            return t5 = br(t5), xr(t5.syntax) ? Xn(e4, t5) : zt(e4, t5);
          }
          function vr(e4, t5) {
            return t5 = br(t5), xr(t5.syntax) ? Zn(e4, t5) : Bt(e4, t5);
          }
          function yr(e4, t5) {
            return t5 instanceof o2 ? t5 : fr(xr(e4) ? `css` : e4, t5);
          }
          function br(e4) {
            return typeof e4 == `string` && (e4 = {
              syntax: e4
            }), e4 = Object.assign({}, gr, e4), e4.format = Object.assign({
              field: e4.field
            }, e4.format), e4.profile = Sr(e4), e4.variables = Object.assign({}, mr, e4.variables), e4.snippets = yr(xr(e4.syntax) ? `css` : e4.syntax, e4.snippets), e4;
          }
          function xr(e4) {
            return hr.has(e4);
          }
          function Sr(e4) {
            return e4.profile instanceof n3 ? e4.profile : new n3(e4.profile);
          }
          e3.expand = _r, e3.parse = vr, e3.createSnippetsRegistry = yr, e3.createOptions = br, e3.isStylesheet = xr, e3.createProfile = Sr, Object.defineProperty(e3, `__esModule`, {
            value: true
          });
        });
      },
      87: function(e2) {
        e2.exports = b();
      },
      104: function(e2, t3, n3) {
        n3.r(t3);
        var r2 = n3(183);
        for (var i2 in n3.n(r2), r2) i2 !== `default` && n3.d(t3, i2, function(e3) {
          return r2[e3];
        }.bind(0, i2));
      },
      183: function(e2, t3, n3) {
        Object.defineProperty(t3, `__esModule`, {
          value: true
        });
        let r2 = n3(280), i2 = n3(34), a2 = n3(234), o2 = n3(622), s2 = n3(747), c2 = n3(762), l2 = n3(87), u2 = n3(233), d2 = /* @__PURE__ */ new Map(), f2, p2, m2 = /* @__PURE__ */ new Map(), h2 = /^[a-z,A-Z,!,(,[,#,\.]/, g2 = /^-?[a-z,A-Z,!,@,#]/, _2 = /[a-z,A-Z\.]/, v2 = [
          `html`,
          `pug`,
          `slim`,
          `haml`,
          `xml`,
          `xsl`,
          `jsx`,
          `css`,
          `scss`,
          `sass`,
          `less`,
          `stylus`
        ], y2 = [
          ...u2.htmlData.tags,
          `lorem`
        ], b2 = {
          w: `webkit`,
          m: `moz`,
          s: `ms`,
          o: `o`
        }, x2 = {
          w: `animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-clip, background-composite, background-origin, background-size, border-fit, border-horizontal-spacing, border-image, border-vertical-spacing, box-align, box-direction, box-flex, box-flex-group, box-lines, box-ordinal-group, box-orient, box-pack, box-reflect, box-shadow, color-correction, column-break-after, column-break-before, column-break-inside, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-span, column-width, dashboard-region, font-smoothing, highlight, hyphenate-character, hyphenate-limit-after, hyphenate-limit-before, hyphens, line-box-contain, line-break, line-clamp, locale, margin-before-collapse, margin-after-collapse, marquee-direction, marquee-increment, marquee-repetition, marquee-style, mask-attachment, mask-box-image, mask-box-image-outset, mask-box-image-repeat, mask-box-image-slice, mask-box-image-source, mask-box-image-width, mask-clip, mask-composite, mask-image, mask-origin, mask-position, mask-repeat, mask-size, nbsp-mode, perspective, perspective-origin, rtl-ordering, text-combine, text-decorations-in-effect, text-emphasis-color, text-emphasis-position, text-emphasis-style, text-fill-color, text-orientation, text-security, text-stroke-color, text-stroke-width, transform, transition, transform-origin, transform-style, transition-delay, transition-duration, transition-property, transition-timing-function, user-drag, user-modify, user-select, writing-mode, svg-shadow, box-sizing, border-radius`,
          m: `animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-inline-policy, binding, border-bottom-colors, border-image, border-left-colors, border-right-colors, border-top-colors, box-align, box-direction, box-flex, box-ordinal-group, box-orient, box-pack, box-shadow, box-sizing, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-width, float-edge, font-feature-settings, font-language-override, force-broken-image-icon, hyphens, image-region, orient, outline-radius-bottomleft, outline-radius-bottomright, outline-radius-topleft, outline-radius-topright, perspective, perspective-origin, stack-sizing, tab-size, text-blink, text-decoration-color, text-decoration-line, text-decoration-style, text-size-adjust, transform, transform-origin, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-focus, user-input, user-modify, user-select, window-shadow, background-clip, border-radius`,
          s: `accelerator, backface-visibility, background-position-x, background-position-y, behavior, block-progression, box-align, box-direction, box-flex, box-line-progression, box-lines, box-ordinal-group, box-orient, box-pack, content-zoom-boundary, content-zoom-boundary-max, content-zoom-boundary-min, content-zoom-chaining, content-zoom-snap, content-zoom-snap-points, content-zoom-snap-type, content-zooming, filter, flow-from, flow-into, font-feature-settings, grid-column, grid-column-align, grid-column-span, grid-columns, grid-layer, grid-row, grid-row-align, grid-row-span, grid-rows, high-contrast-adjust, hyphenate-limit-chars, hyphenate-limit-lines, hyphenate-limit-zone, hyphens, ime-mode, interpolation-mode, layout-flow, layout-grid, layout-grid-char, layout-grid-line, layout-grid-mode, layout-grid-type, line-break, overflow-style, perspective, perspective-origin, perspective-origin-x, perspective-origin-y, scroll-boundary, scroll-boundary-bottom, scroll-boundary-left, scroll-boundary-right, scroll-boundary-top, scroll-chaining, scroll-rails, scroll-snap-points-x, scroll-snap-points-y, scroll-snap-type, scroll-snap-x, scroll-snap-y, scrollbar-arrow-color, scrollbar-base-color, scrollbar-darkshadow-color, scrollbar-face-color, scrollbar-highlight-color, scrollbar-shadow-color, scrollbar-track-color, text-align-last, text-autospace, text-justify, text-kashida-space, text-overflow, text-size-adjust, text-underline-position, touch-action, transform, transform-origin, transform-origin-x, transform-origin-y, transform-origin-z, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-select, word-break, wrap-flow, wrap-margin, wrap-through, writing-mode`,
          o: `dashboard-region, animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, border-image, link, link-source, object-fit, object-position, tab-size, table-baseline, transform, transform-origin, transition, transition-delay, transition-duration, transition-property, transition-timing-function, accesskey, input-format, input-required, marquee-dir, marquee-loop, marquee-speed, marquee-style`
        };
        function S2(e3, t4, n4, a3) {
          if (a3.showExpandedAbbreviation === `never` || !me2(n4, a3.excludeLanguages)) return;
          if (!N2(n4)) {
            if (!d2.has(n4) || !p2 || p2.length === 0) {
              let e4 = A2[n4] ? A2[n4] : i2.createSnippetsRegistry(n4);
              d2.has(n4) || d2.set(n4, e4.all({
                type: `string`
              }).map((e5) => e5.key)), p2 = e4.all({
                type: `regexp`
              }).map((e5) => e5.key);
            }
            f2 = d2.get(n4);
          }
          let o3 = ee2(e3, t4, {
            syntax: n4,
            lookAhead: !N2(n4)
          });
          if (!o3) return;
          let { abbreviationRange: s3, abbreviation: c3, filter: l3 } = o3, h3 = k2(e3, t4).substr(0, t4.character);
          if (w2(h3) === c3 && h3.endsWith(`<${c3}`) && (n4 === `html` || n4 === `xml` || n4 === `xsl` || n4 === `jsx`)) return;
          let g3 = F2(n4, a3, l3), _3 = g3.preferences;
          delete g3.preferences;
          let v3, b3, x3 = [], S3 = (e4, t5) => {
            if (ne2(e4, c3)) {
              try {
                v3 = i2.expand(t5, g3);
              } catch {
              }
              !v3 || re2(e4, t5, v3) || (b3 = r2.CompletionItem.create(t5), b3.textEdit = r2.TextEdit.replace(s3, D2(O2(v3))), b3.documentation = T2(v3), b3.insertTextFormat = r2.InsertTextFormat.Snippet, b3.detail = `Emmet Abbreviation`, b3.label = c3, b3.label += l3 ? `|` + l3.replace(`,`, `|`) : ``, x3 = [
                b3
              ]);
            }
          };
          if (N2(n4)) {
            let { prefixOptions: e4, abbreviationWithoutPrefix: t5 } = ie2(c3);
            if (S3(n4, t5), t5.length > 4 && u2.cssData.properties.find((e5) => e5.startsWith(t5))) return r2.CompletionList.create([], true);
            if (b3) {
              let i3 = ae2(v3, e4, _3);
              if (b3.textEdit = r2.TextEdit.replace(s3, D2(O2(i3))), b3.documentation = T2(i3), b3.label = E2(v3), b3.filterText = c3, x3 = C2(m2.has(n4) ? m2.get(n4) : m2.get(`css`), c3, c3, s3, g3, `Emmet Custom Snippet`, false), !x3.find((e5) => e5.textEdit.newText === b3.textEdit.newText)) {
                let e5 = RegExp(`.*` + t5.split(``).map((e6) => e6 === `$` || e6 === `+` ? `\\` + e6 : e6).join(`.*`) + `.*`, `i`);
                (/\d/.test(c3) || e5.test(b3.label)) && x3.push(b3);
              }
            }
            if (!x3.length && (c3 === `-` || /^-[wmso]{1,4}-?$/.test(c3))) return r2.CompletionList.create([], true);
          } else {
            S3(n4, c3);
            let e4 = c3, t5 = c3.match(/(>|\+)([\w:-]+)$/);
            t5 && t5.length === 3 && (e4 = t5[2]);
            let r3 = C2(y2, e4, c3, s3, g3, `Emmet Abbreviation`);
            if (x3 = x3.concat(r3), a3.showAbbreviationSuggestions === true) {
              let t6 = C2(f2.filter((e5) => !y2.includes(e5)), e4, c3, s3, g3, `Emmet Abbreviation`);
              b3 && t6.length > 0 && e4 !== c3 && (b3.sortText = `0` + b3.label, t6.forEach((e5) => {
                e5.filterText = c3, e5.sortText = `9` + c3;
              })), x3 = x3.concat(t6);
            }
          }
          return a3.showSuggestionsAsSnippets === true && x3.forEach((e4) => e4.kind = r2.CompletionItemKind.Snippet), x3.length ? r2.CompletionList.create(x3, true) : void 0;
        }
        t3.doComplete = S2;
        function C2(e3, t4, n4, a3, o3, s3, c3 = true) {
          if (!t4 || !e3) return [];
          let l3 = [];
          return e3.forEach((e4) => {
            if (!e4.startsWith(t4.toLowerCase()) || c3 && e4 === t4.toLowerCase()) return;
            let u3 = n4 + e4.substr(t4.length), d3;
            try {
              d3 = i2.expand(u3, o3);
            } catch {
            }
            if (!d3) return;
            let f3 = r2.CompletionItem.create(t4 + e4.substr(t4.length));
            f3.documentation = T2(d3), f3.detail = s3, f3.textEdit = r2.TextEdit.replace(a3, D2(O2(d3))), f3.insertTextFormat = r2.InsertTextFormat.Snippet, l3.push(f3);
          }), l3;
        }
        function w2(e3) {
          if (e3) {
            let t4 = e3.match(/[\w,:,-,\.]*$/);
            if (t4) return t4[0];
          }
        }
        function T2(e3) {
          return e3.replace(/([^\\])\$\{\d+\}/g, `$1|`).replace(/\$\{\d+:([^\}]+)\}/g, `$1`);
        }
        function E2(e3) {
          return e3.replace(/([^\\])\$\{\d+\}/g, `$1`).replace(/\$\{\d+:([^\}]+)\}/g, `$1`);
        }
        function D2(e3) {
          return e3 && e3.replace(/([^\\])(\$)([^\{])/g, `$1\\$2$3`);
        }
        function O2(e3) {
          if (!e3 || !e3.trim()) return e3;
          let t4 = -1, n4 = [], r3 = false, i3 = false, a3 = 0, o3 = e3.length;
          try {
            for (; a3 < o3 && !r3; ) {
              if (e3[a3++] != `$` || e3[a3++] != `{`) continue;
              let s3 = -1, c3 = -1;
              for (; a3 < o3 && /\d/.test(e3[a3]); ) s3 = s3 < 0 ? a3 : s3, c3 = a3 + 1, a3++;
              if (s3 === -1 || c3 === -1 || a3 >= o3 || e3[a3] != `}` && e3[a3] != `:`) continue;
              let l3 = e3.substring(s3, c3);
              if (r3 = l3 === `0`, r3) break;
              let u3 = false;
              if (e3[a3++] == `:`) for (; a3 < o3; ) {
                if (e3[a3] == `}`) {
                  u3 = true;
                  break;
                }
                a3++;
              }
              Number(l3) > Number(t4) ? (t4 = l3, n4 = [
                {
                  numberStart: s3,
                  numberEnd: c3
                }
              ], i3 = !u3) : l3 == t4 && n4.push({
                numberStart: s3,
                numberEnd: c3
              });
            }
          } catch {
          }
          if (i3 && !r3) for (let t5 = 0; t5 < n4.length; t5++) {
            let r4 = n4[t5].numberStart, i4 = n4[t5].numberEnd;
            e3 = e3.substr(0, r4) + `0` + e3.substr(i4);
          }
          return e3;
        }
        function k2(e3, t4) {
          let n4 = e3.offsetAt(t4), r3 = e3.getText(), i3 = 0, a3 = r3.length;
          for (let e4 = n4 - 1; e4 >= 0; e4--) if (r3[e4] === `
`) {
            i3 = e4 + 1;
            break;
          }
          for (let e4 = n4; e4 < r3.length; e4++) if (r3[e4] === `
`) {
            a3 = e4;
            break;
          }
          return r3.substring(i3, a3);
        }
        let A2 = {}, j2 = {}, M2 = {};
        t3.emmetSnippetField = ((e3, t4) => `\${${e3}${t4 ? `:` + t4 : ``}}`);
        function N2(e3) {
          return [
            `css`,
            `scss`,
            `sass`,
            `less`,
            `stylus`
          ].indexOf(e3) > -1;
        }
        t3.isStyleSheet = N2;
        function P2(e3, t4) {
          let n4;
          for (let r3 = 0; r3 < 3; r3++) if (e3.endsWith(`|bem`, t4)) t4 -= 4, n4 = n4 ? `bem,` + n4 : `bem`;
          else if (e3.endsWith(`|c`, t4)) t4 -= 2, n4 = n4 ? `c,` + n4 : `c`;
          else if (e3.endsWith(`|t`, t4)) t4 -= 2, n4 = n4 ? `t,` + n4 : `t`;
          else break;
          return {
            pos: t4,
            filter: n4
          };
        }
        function ee2(e3, t4, n4) {
          let i3 = k2(e3, t4), { pos: o3, filter: s3 } = P2(i3.substr(0, t4.character), t4.character), c3 = s3 ? s3.length + 1 : 0;
          try {
            let e4 = n4;
            typeof e4 != `boolean` && (e4 || (e4 = {}), e4 = {
              syntax: N2(e4.syntax) || e4.syntax === `stylesheet` ? `stylesheet` : `markup`,
              lookAhead: e4.lookAhead
            });
            let l3 = a2(i3, o3, e4);
            return {
              abbreviationRange: r2.Range.create(t4.line, l3.location, t4.line, l3.location + l3.abbreviation.length + c3),
              abbreviation: l3.abbreviation,
              filter: s3
            };
          } catch {
          }
        }
        t3.extractAbbreviation = ee2;
        function te2(e3, t4) {
          if (!e3) return;
          let { pos: n4, filter: r3 } = P2(e3, e3.length);
          try {
            return {
              abbreviation: a2(e3, n4, N2(t4) || t4 === `stylesheet` ? {
                syntax: `stylesheet`,
                lookAhead: false
              } : true).abbreviation,
              filter: r3
            };
          } catch {
          }
        }
        t3.extractAbbreviationFromText = te2;
        function ne2(e3, t4) {
          if (!t4) return false;
          if (N2(e3)) return t4.endsWith(`:`) ? false : t4.indexOf(`#`) > -1 ? ge2.test(t4) || he2.test(t4) : g2.test(t4);
          if (t4.startsWith(`!`)) return !/[^!]/.test(t4);
          let n4 = t4.match(/\*(\d+)$/);
          return n4 ? parseInt(n4[1], 10) <= 100 : (/\(/.test(t4) || /\)/.test(t4)) && !/\{[^\}\{]*[\(\)]+[^\}\{]*\}(?:[>\+\*\^]|$)/.test(t4) && !/\(.*\)[>\+\*\^]/.test(t4) && !/[>\+\*\^]\(.*\)/.test(t4) ? false : h2.test(t4) && _2.test(t4);
        }
        t3.isAbbreviationValid = ne2;
        function re2(e3, t4, n4) {
          if (N2(e3)) {
            let r4 = e3 === `sass` || e3 === `stylus` ? `` : `;`;
            return n4 === `${t4}: \${1}${r4}` || n4.replace(/\s/g, ``) === t4.replace(/\s/g, ``) + r4;
          }
          if (y2.indexOf(t4.toLowerCase()) > -1 || f2.indexOf(t4) > -1 || /[-,:]/.test(t4) && !/--|::/.test(t4) && !t4.endsWith(`:`) || t4 === `.`) return false;
          let r3 = t4.match(/^([a-z,A-Z,\d]*)\.$/);
          return r3 ? !(r3[1] && u2.htmlData.tags.includes(r3[1])) : n4.toLowerCase() === `<${t4.toLowerCase()}>\${1}</${t4.toLowerCase()}>`;
        }
        function F2(e3, n4, r3) {
          n4 || (n4 = {}), n4.preferences = n4.preferences || {};
          let i3 = N2(e3) ? `css` : `html`;
          !A2[e3] && A2[i3] && (A2[e3] = A2[i3]);
          let a3 = ce2(e3, n4.syntaxProfiles), o3 = a3 && a3.filters ? a3.filters.split(`,`) : [];
          o3 = o3.map((e4) => e4.trim()), n4.preferences[`format.noIndentTags`] && (Array.isArray(n4.preferences[`format.noIndentTags`]) ? a3.formatSkip = n4.preferences[`format.noIndentTags`] : typeof n4.preferences[`format.noIndentTags`] == `string` && (a3.formatSkip = n4.preferences[`format.noIndentTags`].split(`,`))), n4.preferences[`format.forceIndentationForTags`] && (Array.isArray(n4.preferences[`format.forceIndentationForTags`]) ? a3.formatForce = n4.preferences[`format.forceIndentationForTags`] : typeof n4.preferences[`format.forceIndentationForTags`] == `string` && (a3.formatForce = n4.preferences[`format.forceIndentationForTags`].split(`,`))), n4.preferences[`profile.allowCompactBoolean`] && typeof n4.preferences[`profile.allowCompactBoolean`] == `boolean` && (a3.compactBooleanAttributes = n4.preferences[`profile.allowCompactBoolean`]);
          let s3 = {};
          (r3 && r3.split(`,`).find((e4) => e4.trim() === `bem`) || o3.indexOf(`bem`) > -1) && (s3.bem = {
            element: `__`
          }, n4.preferences[`bem.elementSeparator`] && (s3.bem.element = n4.preferences[`bem.elementSeparator`]), n4.preferences[`bem.modifierSeparator`] && (s3.bem.modifier = n4.preferences[`bem.modifierSeparator`])), e3 === `jsx` && (s3.jsx = true);
          let c3 = ue2(e3, n4.preferences);
          (r3 && r3.split(`,`).find((e4) => e4.trim() === `c`) || o3.indexOf(`c`) > -1) && (c3.comment ? c3.comment.enabled = true : c3.comment = {
            enabled: true
          });
          let l3 = n4.preferences;
          for (let e4 in b2) l3[`css.` + b2[e4] + `Properties`] ?? (l3[`css.` + b2[e4] + `Properties`] = x2[e4]);
          return {
            field: t3.emmetSnippetField,
            syntax: e3,
            profile: a3,
            addons: s3,
            variables: le2(n4.variables),
            snippets: A2[e3],
            format: c3,
            preferences: l3
          };
        }
        t3.getExpandOptions = F2;
        function ie2(e3) {
          if (e3 || (e3 = ``), e3[0] != `-`) return {
            prefixOptions: ``,
            abbreviationWithoutPrefix: e3
          };
          {
            e3 = e3.substr(1);
            let t4 = `-`;
            if (/^[wmso]*-./.test(e3)) {
              let n4 = e3.indexOf(`-`);
              n4 > -1 && (t4 += e3.substr(0, n4 + 1), e3 = e3.substr(n4 + 1));
            }
            return {
              prefixOptions: t4,
              abbreviationWithoutPrefix: e3
            };
          }
        }
        function ae2(e3, t4, n4) {
          if (n4 || (n4 = {}), e3 || (e3 = ``), t4 || (t4 = ``), t4[0] !== `-`) return e3;
          if (t4 == `-`) {
            let r4 = `-`, i3 = e3.substr(0, e3.indexOf(`:`));
            if (!i3) return e3;
            for (let e4 in b2) {
              let t5 = n4[`css.` + b2[e4] + `Properties`];
              t5 && t5.split(`,`).find((e5) => e5.trim() === i3) && (r4 += e4);
            }
            t4 = r4 == `-` ? `-wmso` : r4, t4 += `-`;
          }
          t4 = t4.substr(1);
          let r3 = ``;
          for (let n5 = 0; n5 < t4.length - 1; n5++) r3 += `-` + b2[t4[n5]] + `-` + e3 + `
`;
          return r3 + e3;
        }
        function oe2(e3, t4) {
          return i2.parse(e3, t4);
        }
        t3.parseAbbreviation = oe2;
        function se2(e3, t4) {
          let n4, r3 = t4.preferences;
          if (delete t4.preferences, N2(t4.syntax) && typeof e3 == `string`) {
            let { prefixOptions: a3, abbreviationWithoutPrefix: o3 } = ie2(e3);
            n4 = i2.expand(o3, t4), n4 = ae2(n4, a3, r3);
          } else n4 = i2.expand(e3, t4);
          return D2(O2(n4));
        }
        t3.expandAbbreviation = se2;
        function ce2(e3, t4) {
          t4 || (t4 = {});
          let n4 = Object.assign({}, M2, t4)[e3];
          if (!n4 || typeof n4 == `string`) return n4 === `xhtml` ? {
            selfClosingStyle: `xhtml`
          } : {};
          let r3 = {};
          for (let e4 in n4) switch (e4) {
            case `tag_case`:
              r3.tagCase = n4[e4] === `lower` || n4[e4] === `upper` ? n4[e4] : ``;
              break;
            case `attr_case`:
              r3.attributeCase = n4[e4] === `lower` || n4[e4] === `upper` ? n4[e4] : ``;
              break;
            case `attr_quotes`:
              r3.attributeQuotes = n4[e4];
              break;
            case `tag_nl`:
              r3.format = n4[e4] === true || n4[e4] === false ? n4[e4] : true;
              break;
            case `inline_break`:
              r3.inlineBreak = n4[e4];
              break;
            case `self_closing_tag`:
              if (n4[e4] === true) {
                r3.selfClosingStyle = `xml`;
                break;
              }
              if (n4[e4] === false) {
                r3.selfClosingStyle = `html`;
                break;
              }
              r3.selfClosingStyle = n4[e4];
              break;
            case `compact_bool`:
              r3.compactBooleanAttributes = n4[e4];
              break;
            default:
              r3[e4] = n4[e4];
              break;
          }
          return r3;
        }
        function le2(e3) {
          return e3 ? Object.assign({}, j2, e3) : j2;
        }
        function ue2(e3, t4) {
          if (!t4) return {};
          if (!N2(e3)) {
            let e4 = {};
            for (let n5 in t4) switch (n5) {
              case `filter.commentAfter`:
                e4.after = t4[n5];
                break;
              case `filter.commentBefore`:
                e4.before = t4[n5];
                break;
              case `filter.commentTrigger`:
                e4.trigger = t4[n5];
                break;
              default:
                break;
            }
            return {
              comment: e4
            };
          }
          let n4 = typeof t4[`css.fuzzySearchMinScore`] == `number` ? t4[`css.fuzzySearchMinScore`] : 0.3;
          n4 > 1 ? n4 = 1 : n4 < 0 && (n4 = 0);
          let r3 = {
            fuzzySearchMinScore: n4
          };
          for (let n5 in t4) switch (n5) {
            case `css.floatUnit`:
              r3.floatUnit = t4[n5];
              break;
            case `css.intUnit`:
              r3.intUnit = t4[n5];
              break;
            case `css.unitAliases`:
              let i3 = {};
              t4[n5].split(`,`).forEach((e4) => {
                if (!e4 || !e4.trim() || e4.indexOf(`:`) === -1) return;
                let t5 = e4.substr(0, e4.indexOf(`:`)), n6 = e4.substr(t5.length + 1);
                !t5.trim() || !n6 || (i3[t5.trim()] = n6);
              }), r3.unitAliases = i3;
              break;
            case `${e3}.valueSeparator`:
              r3.between = t4[n5];
              break;
            case `${e3}.propertyEnd`:
              r3.after = t4[n5];
              break;
            default:
              break;
          }
          return {
            stylesheet: r3
          };
        }
        function de2(e3, t4) {
          if (!e3 || !e3.trim()) return pe2(), Promise.resolve();
          if (e3 = e3.trim(), t4 = t4 ? t4.trim() : ``, e3[0] === `~` ? e3 = o2.join(l2.homedir(), e3.substr(1)) : !o2.isAbsolute(e3) && t4 && (e3 = o2.join(t4, e3)), !o2.isAbsolute(e3)) return pe2(), Promise.reject(`The path provided in emmet.extensionsPath setting should be absoulte path`);
          if (!fe2(e3)) return pe2(), Promise.reject(`The directory ${e3} doesnt exist. Update emmet.extensionsPath setting`);
          let n4 = e3, r3 = o2.join(n4, `snippets.json`), a3 = o2.join(n4, `syntaxProfiles.json`), u3 = new Promise((e4, t5) => {
            s2.readFile(r3, (n5, a4) => {
              if (n5) return t5(`Error while fetching the file ${r3}`);
              try {
                let e5 = [], n6 = c2.parse(a4.toString(), e5);
                if (e5.length > 0) return t5(`Found error ${c2.ScanError[e5[0].error]} while parsing the file ${r3} at offset ${e5[0].offset}`);
                j2 = n6.variables, A2 = {}, d2.clear(), Object.keys(n6).forEach((e6) => {
                  if (!n6[e6].snippets) return;
                  let t6 = N2(e6) ? `css` : `html`, r4 = n6[e6].snippets;
                  if (n6[t6] && n6[t6].snippets && t6 !== e6 && (r4 = Object.assign({}, n6[t6].snippets, n6[e6].snippets)), N2(e6)) m2.set(e6, Object.keys(r4));
                  else for (let e7 in r4) r4.hasOwnProperty(e7) && r4[e7].startsWith(`<`) && r4[e7].endsWith(`>`) && (r4[e7] = `{${r4[e7]}}`);
                  A2[e6] = i2.createSnippetsRegistry(e6, r4);
                  let a5 = A2[e6].all({
                    type: `string`
                  }).map((e7) => e7.key);
                  d2.set(e6, a5);
                });
              } catch {
                return t5(`Error while parsing the file ${r3}`);
              }
              return e4();
            });
          });
          return new Promise((e4, t5) => {
            s2.readFile(a3, (t6, n5) => {
              try {
                t6 || (M2 = JSON.parse(n5.toString()));
              } catch {
              }
              return e4();
            });
          }), Promise.all([
            u3,
            j2
          ]).then(() => Promise.resolve());
        }
        t3.updateExtensionsPath = de2;
        function fe2(e3) {
          try {
            return s2.statSync(e3).isDirectory();
          } catch {
            return false;
          }
        }
        function pe2() {
          A2 = {}, d2.clear(), m2.clear(), M2 = {}, j2 = {};
        }
        function me2(e3, t4 = []) {
          if (!(!e3 || t4.indexOf(e3) > -1)) {
            if (/\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(e3)) return `jsx`;
            if (e3 === `sass-indented`) return `sass`;
            if (e3 === `jade`) return `pug`;
            if (v2.indexOf(e3) > -1) return e3;
          }
        }
        t3.getEmmetMode = me2;
        let he2 = /^[a-zA-Z]+:?#[\d.a-fA-F]{0,6}$/, ge2 = /^#[\d,a-f,A-F]{1,6}$/, _e2 = /^[a-z,A-Z]+$/;
        function ve2(e3, t4, n4, r3, i3) {
          return {
            getId: () => `emmet`,
            onCssProperty: (a3) => {
              if (a3 && a3.propertyName) {
                let a4 = S2(e3, t4, n4, r3);
                i3 && a4 && (i3.items = a4.items, i3.isIncomplete = true);
              }
            },
            onCssPropertyValue: (a3) => {
              if (a3 && a3.propertyValue) {
                let o3 = ee2(e3, t4, {
                  syntax: `css`,
                  lookAhead: false
                });
                if (!o3) return;
                if (o3.abbreviation === `${a3.propertyName}:${a3.propertyValue}` && _e2.test(a3.propertyValue) || ge2.test(o3.abbreviation) || o3.abbreviation === `!`) {
                  let a4 = S2(e3, t4, n4, r3);
                  i3 && a4 && (i3.items = a4.items, i3.isIncomplete = true);
                }
              }
            },
            onHtmlContent: () => {
              let a3 = S2(e3, t4, n4, r3);
              i3 && a3 && (i3.items = a3.items, i3.isIncomplete = true);
            }
          };
        }
        t3.getEmmetCompletionParticipants = ve2;
      },
      233: function(e2, t3) {
        Object.defineProperty(t3, `__esModule`, {
          value: true
        }), t3.cssData = {
          properties: `additive-symbols.align-content.align-items.justify-items.justify-self.justify-items.align-self.all.alt.animation.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-timing-function.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.behavior.block-size.border.border-block-end.border-block-start.border-block-end-color.border-block-start-color.border-block-end-style.border-block-start-style.border-block-end-width.border-block-start-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline-end.border-inline-start.border-inline-end-color.border-inline-start-color.border-inline-end-style.border-inline-start-style.border-inline-end-width.border-inline-start-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-decoration-break.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation-filters.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.columns.column-span.column-width.contain.content.counter-increment.counter-reset.cursor.direction.display.empty-cells.enable-background.fallback.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.font.font-family.font-feature-settings.font-kerning.font-language-override.font-size.font-size-adjust.font-stretch.font-style.font-synthesis.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-ligatures.font-variant-numeric.font-variant-position.font-weight.glyph-orientation-horizontal.glyph-orientation-vertical.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-gap.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-gap.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.height.hyphens.image-orientation.image-rendering.ime-mode.inline-size.isolation.justify-content.kerning.left.letter-spacing.lighting-color.line-break.line-height.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block-end.margin-block-start.margin-bottom.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.marker.marker-end.marker-mid.marker-start.mask-type.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.motion.motion-offset.motion-path.motion-rotation.-moz-animation.-moz-animation-delay.-moz-animation-direction.-moz-animation-duration.-moz-animation-iteration-count.-moz-animation-name.-moz-animation-play-state.-moz-animation-timing-function.-moz-appearance.-moz-backface-visibility.-moz-background-clip.-moz-background-inline-policy.-moz-background-origin.-moz-border-bottom-colors.-moz-border-image.-moz-border-left-colors.-moz-border-right-colors.-moz-border-top-colors.-moz-box-align.-moz-box-direction.-moz-box-flex.-moz-box-flexgroup.-moz-box-ordinal-group.-moz-box-orient.-moz-box-pack.-moz-box-sizing.-moz-column-count.-moz-column-gap.-moz-column-rule.-moz-column-rule-color.-moz-column-rule-style.-moz-column-rule-width.-moz-columns.-moz-column-width.-moz-font-feature-settings.-moz-hyphens.-moz-perspective.-moz-perspective-origin.-moz-text-align-last.-moz-text-decoration-color.-moz-text-decoration-line.-moz-text-decoration-style.-moz-text-size-adjust.-moz-transform.-moz-transform-origin.-moz-transition.-moz-transition-delay.-moz-transition-duration.-moz-transition-property.-moz-transition-timing-function.-moz-user-focus.-moz-user-select.-ms-accelerator.-ms-behavior.-ms-block-progression.-ms-content-zoom-chaining.-ms-content-zooming.-ms-content-zoom-limit.-ms-content-zoom-limit-max.-ms-content-zoom-limit-min.-ms-content-zoom-snap.-ms-content-zoom-snap-points.-ms-content-zoom-snap-type.-ms-filter.-ms-flex.-ms-flex-align.-ms-flex-direction.-ms-flex-flow.-ms-flex-item-align.-ms-flex-line-pack.-ms-flex-order.-ms-flex-pack.-ms-flex-wrap.-ms-flow-from.-ms-flow-into.-ms-grid-column.-ms-grid-column-align.-ms-grid-columns.-ms-grid-column-span.-ms-grid-layer.-ms-grid-row.-ms-grid-row-align.-ms-grid-rows.-ms-grid-row-span.-ms-high-contrast-adjust.-ms-hyphenate-limit-chars.-ms-hyphenate-limit-lines.-ms-hyphenate-limit-zone.-ms-hyphens.-ms-ime-mode.-ms-interpolation-mode.-ms-layout-grid.-ms-layout-grid-char.-ms-layout-grid-line.-ms-layout-grid-mode.-ms-layout-grid-type.-ms-line-break.-ms-overflow-style.-ms-perspective.-ms-perspective-origin.-ms-perspective-origin-x.-ms-perspective-origin-y.-ms-progress-appearance.-ms-scrollbar-3dlight-color.-ms-scrollbar-arrow-color.-ms-scrollbar-base-color.-ms-scrollbar-darkshadow-color.-ms-scrollbar-face-color.-ms-scrollbar-highlight-color.-ms-scrollbar-shadow-color.-ms-scrollbar-track-color.-ms-scroll-chaining.-ms-scroll-limit.-ms-scroll-limit-x-max.-ms-scroll-limit-x-min.-ms-scroll-limit-y-max.-ms-scroll-limit-y-min.-ms-scroll-rails.-ms-scroll-snap-points-x.-ms-scroll-snap-points-y.-ms-scroll-snap-type.-ms-scroll-snap-x.-ms-scroll-snap-y.-ms-scroll-translation.-ms-text-align-last.-ms-text-autospace.-ms-text-combine-horizontal.-ms-text-justify.-ms-text-kashida-space.-ms-text-overflow.-ms-text-size-adjust.-ms-text-underline-position.-ms-touch-action.-ms-touch-select.-ms-transform.-ms-transform-origin.-ms-transform-origin-x.-ms-transform-origin-y.-ms-transform-origin-z.-ms-user-select.-ms-word-break.-ms-word-wrap.-ms-wrap-flow.-ms-wrap-margin.-ms-wrap-through.-ms-writing-mode.-ms-zoom.-ms-zoom-animation.nav-down.nav-index.nav-left.nav-right.nav-up.negative.-o-animation.-o-animation-delay.-o-animation-direction.-o-animation-duration.-o-animation-fill-mode.-o-animation-iteration-count.-o-animation-name.-o-animation-play-state.-o-animation-timing-function.object-fit.object-position.-o-border-image.-o-object-fit.-o-object-position.opacity.order.orphans.-o-table-baseline.-o-tab-size.-o-text-overflow.-o-transform.-o-transform-origin.-o-transition.-o-transition-delay.-o-transition-duration.-o-transition-property.-o-transition-timing-function.offset-block-end.offset-block-start.offset-inline-end.offset-inline-start.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-wrap.overflow-x.overflow-y.pad.padding.padding-bottom.padding-block-end.padding-block-start.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page-break-after.page-break-before.page-break-inside.paint-order.perspective.perspective-origin.pointer-events.position.prefix.quotes.range.resize.right.ruby-align.ruby-overhang.ruby-position.ruby-span.scrollbar-3dlight-color.scrollbar-arrow-color.scrollbar-base-color.scrollbar-darkshadow-color.scrollbar-face-color.scrollbar-highlight-color.scrollbar-shadow-color.scrollbar-track-color.scroll-behavior.scroll-snap-coordinate.scroll-snap-destination.scroll-snap-points-x.scroll-snap-points-y.scroll-snap-type.shape-image-threshold.shape-margin.shape-outside.shape-rendering.size.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.suffix.system.symbols.table-layout.tab-size.text-align.text-align-last.text-anchor.text-decoration.text-decoration-color.text-decoration-line.text-decoration-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-transform.text-underline-position.top.touch-action.transform.transform-origin.transform-style.transition.transition-delay.transition-duration.transition-property.transition-timing-function.unicode-bidi.unicode-range.user-select.vertical-align.visibility.-webkit-animation.-webkit-animation-delay.-webkit-animation-direction.-webkit-animation-duration.-webkit-animation-fill-mode.-webkit-animation-iteration-count.-webkit-animation-name.-webkit-animation-play-state.-webkit-animation-timing-function.-webkit-appearance.-webkit-backdrop-filter.-webkit-backface-visibility.-webkit-background-clip.-webkit-background-composite.-webkit-background-origin.-webkit-border-image.-webkit-box-align.-webkit-box-direction.-webkit-box-flex.-webkit-box-flex-group.-webkit-box-ordinal-group.-webkit-box-orient.-webkit-box-pack.-webkit-box-reflect.-webkit-box-sizing.-webkit-break-after.-webkit-break-before.-webkit-break-inside.-webkit-column-break-after.-webkit-column-break-before.-webkit-column-break-inside.-webkit-column-count.-webkit-column-gap.-webkit-column-rule.-webkit-column-rule-color.-webkit-column-rule-style.-webkit-column-rule-width.-webkit-columns.-webkit-column-span.-webkit-column-width.-webkit-filter.-webkit-flow-from.-webkit-flow-into.-webkit-font-feature-settings.-webkit-hyphens.-webkit-line-break.-webkit-margin-bottom-collapse.-webkit-margin-collapse.-webkit-margin-start.-webkit-margin-top-collapse.-webkit-mask-clip.-webkit-mask-image.-webkit-mask-origin.-webkit-mask-repeat.-webkit-mask-size.-webkit-nbsp-mode.-webkit-overflow-scrolling.-webkit-padding-start.-webkit-perspective.-webkit-perspective-origin.-webkit-region-fragment.-webkit-tap-highlight-color.-webkit-text-fill-color.-webkit-text-size-adjust.-webkit-text-stroke.-webkit-text-stroke-color.-webkit-text-stroke-width.-webkit-touch-callout.-webkit-transform.-webkit-transform-origin.-webkit-transform-origin-x.-webkit-transform-origin-y.-webkit-transform-origin-z.-webkit-transform-style.-webkit-transition.-webkit-transition-delay.-webkit-transition-duration.-webkit-transition-property.-webkit-transition-timing-function.-webkit-user-drag.-webkit-user-modify.-webkit-user-select.white-space.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.z-index.zoom`.split(`.`)
        }, t3.htmlData = {
          tags: `body.head.html.address.blockquote.dd.div.section.article.aside.header.footer.nav.menu.dl.dt.fieldset.form.frame.frameset.h1.h2.h3.h4.h5.h6.iframe.noframes.object.ol.p.ul.applet.center.dir.hr.pre.a.abbr.acronym.area.b.base.basefont.bdo.big.br.button.caption.cite.code.col.colgroup.del.dfn.em.font.head.html.i.img.input.ins.isindex.kbd.label.legend.li.link.map.meta.noscript.optgroup.option.param.q.s.samp.script.select.small.span.strike.strong.style.sub.sup.table.tbody.td.textarea.tfoot.th.thead.title.tr.tt.u.var.canvas.main.figure.plaintext`.split(`.`)
        };
      },
      234: function(e2) {
        class t3 {
          constructor(e3) {
            this.string = e3, this.pos = this.string.length;
          }
          sol() {
            return this.pos === 0;
          }
          peek(e3) {
            return this.string.charCodeAt(this.pos - 1 + (e3 || 0));
          }
          prev() {
            if (!this.sol()) return this.string.charCodeAt(--this.pos);
          }
          eat(e3) {
            let t4 = typeof e3 == `function` ? e3(this.peek()) : e3 === this.peek();
            return t4 && this.pos--, t4;
          }
          eatWhile(e3) {
            let t4 = this.pos;
            for (; this.eat(e3); ) ;
            return this.pos < t4;
          }
        }
        function n3(e3) {
          return e3 === 39 || e3 === 34;
        }
        function r2(e3) {
          let t4 = e3.pos, r3 = e3.prev();
          if (n3(r3)) {
            for (; !e3.sol(); ) if (e3.prev() === r3 && e3.peek() !== 92) return true;
          }
          return e3.pos = t4, false;
        }
        var i2 = function(e3) {
          let t4 = e3.pos;
          if (!e3.eat(62)) return false;
          let n4 = false;
          for (e3.eat(47); !e3.sol(); ) {
            if (e3.eatWhile(f2), c2(e3)) {
              if (e3.eat(47)) {
                n4 = e3.eat(60);
                break;
              } else if (e3.eat(60)) {
                n4 = true;
                break;
              } else if (e3.eat(f2)) continue;
              else if (e3.eat(61)) {
                if (c2(e3)) continue;
                break;
              } else if (s2(e3)) {
                n4 = true;
                break;
              }
              break;
            }
            if (!a2(e3)) break;
          }
          return e3.pos = t4, n4;
        };
        function a2(e3) {
          return o2(e3) || s2(e3);
        }
        function o2(e3) {
          let t4 = e3.pos;
          return r2(e3) && e3.eat(61) && c2(e3) ? true : (e3.pos = t4, false);
        }
        function s2(e3) {
          let t4 = e3.pos;
          return e3.eatWhile(p2) && e3.eat(61) && c2(e3) ? true : (e3.pos = t4, false);
        }
        function c2(e3) {
          return e3.eatWhile(l2);
        }
        function l2(e3) {
          return e3 === 58 || e3 === 45 || u2(e3) || d2(e3);
        }
        function u2(e3) {
          return e3 &= -33, e3 >= 65 && e3 <= 90;
        }
        function d2(e3) {
          return e3 > 47 && e3 < 58;
        }
        function f2(e3) {
          return e3 === 32 || e3 === 9;
        }
        function p2(e3) {
          return e3 && e3 !== 61 && !f2(e3) && !n3(e3);
        }
        let m2 = (e3) => e3.charCodeAt(0), h2 = m2(`[`), g2 = m2(`]`), _2 = m2(`(`), v2 = m2(`)`), y2 = m2(`{`), b2 = m2(`}`), x2 = new Set(`#.*:$-_!@%^+>/`.split(``).map(m2)), S2 = (/* @__PURE__ */ new Map()).set(h2, g2).set(_2, v2).set(y2, b2), C2 = {
          syntax: `markup`,
          lookAhead: null
        };
        function w2(e3, n4, r3) {
          n4 = Math.min(e3.length, Math.max(0, n4 ?? e3.length)), r3 = typeof r3 == `boolean` ? Object.assign(C2, {
            lookAhead: r3
          }) : Object.assign(C2, r3), (r3.lookAhead == null || r3.lookAhead === true) && (n4 = T2(e3, n4, r3));
          let a3, o3 = new t3(e3);
          o3.pos = n4;
          let s3 = [];
          for (; !o3.sol(); ) {
            if (a3 = o3.peek(), k2(a3, r3.syntax)) s3.push(a3);
            else if (O2(a3, r3.syntax)) {
              if (s3.pop() !== S2.get(a3)) break;
            } else if (E2(s3, g2) || E2(s3, b2)) {
              o3.pos--;
              continue;
            } else if (i2(o3) || !D2(a3)) break;
            o3.pos--;
          }
          if (!s3.length && o3.pos !== n4) {
            let t4 = e3.slice(o3.pos, n4).replace(/^[*+>^]+/, ``);
            return {
              abbreviation: t4,
              location: n4 - t4.length
            };
          }
        }
        function T2(e3, t4, r3) {
          for (n3(e3.charCodeAt(t4)) && t4++; k2(e3.charCodeAt(t4), r3.syntax); ) t4++;
          return t4;
        }
        function E2(e3, t4) {
          return e3.indexOf(t4) !== -1;
        }
        function D2(e3) {
          return e3 > 64 && e3 < 91 || e3 > 96 && e3 < 123 || e3 > 47 && e3 < 58 || x2.has(e3);
        }
        function O2(e3, t4) {
          return e3 === _2 || t4 === `markup` && (e3 === h2 || e3 === y2);
        }
        function k2(e3, t4) {
          return e3 === v2 || t4 === `markup` && (e3 === g2 || e3 === b2);
        }
        e2.exports = w2;
      },
      280: function(t3, n3) {
        (function(r2) {
          if (typeof t3.exports == `object`) {
            var i2 = r2(e, n3);
            i2 !== void 0 && (t3.exports = i2);
          } else typeof define == `function` && define.amd && define([
            `require`,
            `exports`
          ], r2);
        })(function(e2, t4) {
          Object.defineProperty(t4, `__esModule`, {
            value: true
          });
          var n4;
          (function(e3) {
            function t5(e4, t6) {
              return {
                line: e4,
                character: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.objectLiteral(t6) && x2.number(t6.line) && x2.number(t6.character);
            }
            e3.is = n5;
          })(n4 = t4.Position || (t4.Position = {}));
          var r2;
          (function(e3) {
            function t5(e4, t6, r4, i3) {
              if (x2.number(e4) && x2.number(t6) && x2.number(r4) && x2.number(i3)) return {
                start: n4.create(e4, t6),
                end: n4.create(r4, i3)
              };
              if (n4.is(e4) && n4.is(t6)) return {
                start: e4,
                end: t6
              };
              throw Error(`Range#create called with invalid arguments[` + e4 + `, ` + t6 + `, ` + r4 + `, ` + i3 + `]`);
            }
            e3.create = t5;
            function r3(e4) {
              var t6 = e4;
              return x2.objectLiteral(t6) && n4.is(t6.start) && n4.is(t6.end);
            }
            e3.is = r3;
          })(r2 = t4.Range || (t4.Range = {}));
          var i2;
          (function(e3) {
            function t5(e4, t6) {
              return {
                uri: e4,
                range: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && r2.is(t6.range) && (x2.string(t6.uri) || x2.undefined(t6.uri));
            }
            e3.is = n5;
          })(i2 = t4.Location || (t4.Location = {})), (function(e3) {
            function t5(e4, t6, n6, r3) {
              return {
                targetUri: e4,
                targetRange: t6,
                targetSelectionRange: n6,
                originSelectionRange: r3
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && r2.is(t6.targetRange) && x2.string(t6.targetUri) && (r2.is(t6.targetSelectionRange) || x2.undefined(t6.targetSelectionRange)) && (r2.is(t6.originSelectionRange) || x2.undefined(t6.originSelectionRange));
            }
            e3.is = n5;
          })(t4.LocationLink || (t4.LocationLink = {}));
          var a2;
          (function(e3) {
            function t5(e4, t6, n6, r3) {
              return {
                red: e4,
                green: t6,
                blue: n6,
                alpha: r3
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.number(t6.red) && x2.number(t6.green) && x2.number(t6.blue) && x2.number(t6.alpha);
            }
            e3.is = n5;
          })(a2 = t4.Color || (t4.Color = {})), (function(e3) {
            function t5(e4, t6) {
              return {
                range: e4,
                color: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return r2.is(t6.range) && a2.is(t6.color);
            }
            e3.is = n5;
          })(t4.ColorInformation || (t4.ColorInformation = {})), (function(e3) {
            function t5(e4, t6, n6) {
              return {
                label: e4,
                textEdit: t6,
                additionalTextEdits: n6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.string(t6.label) && (x2.undefined(t6.textEdit) || l2.is(t6)) && (x2.undefined(t6.additionalTextEdits) || x2.typedArray(t6.additionalTextEdits, l2.is));
            }
            e3.is = n5;
          })(t4.ColorPresentation || (t4.ColorPresentation = {})), (function(e3) {
            e3.Comment = `comment`, e3.Imports = `imports`, e3.Region = `region`;
          })(t4.FoldingRangeKind || (t4.FoldingRangeKind = {})), (function(e3) {
            function t5(e4, t6, n6, r3, i3) {
              var a3 = {
                startLine: e4,
                endLine: t6
              };
              return x2.defined(n6) && (a3.startCharacter = n6), x2.defined(r3) && (a3.endCharacter = r3), x2.defined(i3) && (a3.kind = i3), a3;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.number(t6.startLine) && x2.number(t6.startLine) && (x2.undefined(t6.startCharacter) || x2.number(t6.startCharacter)) && (x2.undefined(t6.endCharacter) || x2.number(t6.endCharacter)) && (x2.undefined(t6.kind) || x2.string(t6.kind));
            }
            e3.is = n5;
          })(t4.FoldingRange || (t4.FoldingRange = {}));
          var o2;
          (function(e3) {
            function t5(e4, t6) {
              return {
                location: e4,
                message: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && i2.is(t6.location) && x2.string(t6.message);
            }
            e3.is = n5;
          })(o2 = t4.DiagnosticRelatedInformation || (t4.DiagnosticRelatedInformation = {})), (function(e3) {
            e3.Error = 1, e3.Warning = 2, e3.Information = 3, e3.Hint = 4;
          })(t4.DiagnosticSeverity || (t4.DiagnosticSeverity = {})), (function(e3) {
            e3.Unnecessary = 1, e3.Deprecated = 2;
          })(t4.DiagnosticTag || (t4.DiagnosticTag = {}));
          var s2;
          (function(e3) {
            function t5(e4, t6, n6, r3, i3, a3) {
              var o3 = {
                range: e4,
                message: t6
              };
              return x2.defined(n6) && (o3.severity = n6), x2.defined(r3) && (o3.code = r3), x2.defined(i3) && (o3.source = i3), x2.defined(a3) && (o3.relatedInformation = a3), o3;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && r2.is(t6.range) && x2.string(t6.message) && (x2.number(t6.severity) || x2.undefined(t6.severity)) && (x2.number(t6.code) || x2.string(t6.code) || x2.undefined(t6.code)) && (x2.string(t6.source) || x2.undefined(t6.source)) && (x2.undefined(t6.relatedInformation) || x2.typedArray(t6.relatedInformation, o2.is));
            }
            e3.is = n5;
          })(s2 = t4.Diagnostic || (t4.Diagnostic = {}));
          var c2;
          (function(e3) {
            function t5(e4, t6) {
              var n6 = [
                ...arguments
              ].slice(2), r3 = {
                title: e4,
                command: t6
              };
              return x2.defined(n6) && n6.length > 0 && (r3.arguments = n6), r3;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && x2.string(t6.title) && x2.string(t6.command);
            }
            e3.is = n5;
          })(c2 = t4.Command || (t4.Command = {}));
          var l2;
          (function(e3) {
            function t5(e4, t6) {
              return {
                range: e4,
                newText: t6
              };
            }
            e3.replace = t5;
            function n5(e4, t6) {
              return {
                range: {
                  start: e4,
                  end: e4
                },
                newText: t6
              };
            }
            e3.insert = n5;
            function i3(e4) {
              return {
                range: e4,
                newText: ``
              };
            }
            e3.del = i3;
            function a3(e4) {
              var t6 = e4;
              return x2.objectLiteral(t6) && x2.string(t6.newText) && r2.is(t6.range);
            }
            e3.is = a3;
          })(l2 = t4.TextEdit || (t4.TextEdit = {}));
          var u2;
          (function(e3) {
            function t5(e4, t6) {
              return {
                textDocument: e4,
                edits: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && g2.is(t6.textDocument) && Array.isArray(t6.edits);
            }
            e3.is = n5;
          })(u2 = t4.TextDocumentEdit || (t4.TextDocumentEdit = {}));
          var d2;
          (function(e3) {
            function t5(e4, t6) {
              var n6 = {
                kind: `create`,
                uri: e4
              };
              return t6 !== void 0 && (t6.overwrite !== void 0 || t6.ignoreIfExists !== void 0) && (n6.options = t6), n6;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return t6 && t6.kind === `create` && x2.string(t6.uri) && (t6.options === void 0 || (t6.options.overwrite === void 0 || x2.boolean(t6.options.overwrite)) && (t6.options.ignoreIfExists === void 0 || x2.boolean(t6.options.ignoreIfExists)));
            }
            e3.is = n5;
          })(d2 = t4.CreateFile || (t4.CreateFile = {}));
          var f2;
          (function(e3) {
            function t5(e4, t6, n6) {
              var r3 = {
                kind: `rename`,
                oldUri: e4,
                newUri: t6
              };
              return n6 !== void 0 && (n6.overwrite !== void 0 || n6.ignoreIfExists !== void 0) && (r3.options = n6), r3;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return t6 && t6.kind === `rename` && x2.string(t6.oldUri) && x2.string(t6.newUri) && (t6.options === void 0 || (t6.options.overwrite === void 0 || x2.boolean(t6.options.overwrite)) && (t6.options.ignoreIfExists === void 0 || x2.boolean(t6.options.ignoreIfExists)));
            }
            e3.is = n5;
          })(f2 = t4.RenameFile || (t4.RenameFile = {}));
          var p2;
          (function(e3) {
            function t5(e4, t6) {
              var n6 = {
                kind: `delete`,
                uri: e4
              };
              return t6 !== void 0 && (t6.recursive !== void 0 || t6.ignoreIfNotExists !== void 0) && (n6.options = t6), n6;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return t6 && t6.kind === `delete` && x2.string(t6.uri) && (t6.options === void 0 || (t6.options.recursive === void 0 || x2.boolean(t6.options.recursive)) && (t6.options.ignoreIfNotExists === void 0 || x2.boolean(t6.options.ignoreIfNotExists)));
            }
            e3.is = n5;
          })(p2 = t4.DeleteFile || (t4.DeleteFile = {}));
          var m2;
          (function(e3) {
            function t5(e4) {
              var t6 = e4;
              return t6 && (t6.changes !== void 0 || t6.documentChanges !== void 0) && (t6.documentChanges === void 0 || t6.documentChanges.every(function(e5) {
                return x2.string(e5.kind) ? d2.is(e5) || f2.is(e5) || p2.is(e5) : u2.is(e5);
              }));
            }
            e3.is = t5;
          })(m2 = t4.WorkspaceEdit || (t4.WorkspaceEdit = {}));
          var h2 = (function() {
            function e3(e4) {
              this.edits = e4;
            }
            return e3.prototype.insert = function(e4, t5) {
              this.edits.push(l2.insert(e4, t5));
            }, e3.prototype.replace = function(e4, t5) {
              this.edits.push(l2.replace(e4, t5));
            }, e3.prototype.delete = function(e4) {
              this.edits.push(l2.del(e4));
            }, e3.prototype.add = function(e4) {
              this.edits.push(e4);
            }, e3.prototype.all = function() {
              return this.edits;
            }, e3.prototype.clear = function() {
              this.edits.splice(0, this.edits.length);
            }, e3;
          })();
          t4.WorkspaceChange = (function() {
            function e3(e4) {
              var t5 = this;
              this._textEditChanges = /* @__PURE__ */ Object.create(null), e4 && (this._workspaceEdit = e4, e4.documentChanges ? e4.documentChanges.forEach(function(e5) {
                if (u2.is(e5)) {
                  var n5 = new h2(e5.edits);
                  t5._textEditChanges[e5.textDocument.uri] = n5;
                }
              }) : e4.changes && Object.keys(e4.changes).forEach(function(n5) {
                var r3 = new h2(e4.changes[n5]);
                t5._textEditChanges[n5] = r3;
              }));
            }
            return Object.defineProperty(e3.prototype, `edit`, {
              get: function() {
                return this._workspaceEdit;
              },
              enumerable: true,
              configurable: true
            }), e3.prototype.getTextEditChange = function(e4) {
              if (g2.is(e4)) {
                if (this._workspaceEdit || (this._workspaceEdit = {
                  documentChanges: []
                }), !this._workspaceEdit.documentChanges) throw Error(`Workspace edit is not configured for document changes.`);
                var t5 = e4, n5 = this._textEditChanges[t5.uri];
                if (!n5) {
                  var r3 = [], i3 = {
                    textDocument: t5,
                    edits: r3
                  };
                  this._workspaceEdit.documentChanges.push(i3), n5 = new h2(r3), this._textEditChanges[t5.uri] = n5;
                }
                return n5;
              } else {
                if (this._workspaceEdit || (this._workspaceEdit = {
                  changes: /* @__PURE__ */ Object.create(null)
                }), !this._workspaceEdit.changes) throw Error(`Workspace edit is not configured for normal text edit changes.`);
                var n5 = this._textEditChanges[e4];
                if (!n5) {
                  var r3 = [];
                  this._workspaceEdit.changes[e4] = r3, n5 = new h2(r3), this._textEditChanges[e4] = n5;
                }
                return n5;
              }
            }, e3.prototype.createFile = function(e4, t5) {
              this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(d2.create(e4, t5));
            }, e3.prototype.renameFile = function(e4, t5, n5) {
              this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(f2.create(e4, t5, n5));
            }, e3.prototype.deleteFile = function(e4, t5) {
              this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(p2.create(e4, t5));
            }, e3.prototype.checkDocumentChanges = function() {
              if (!this._workspaceEdit || !this._workspaceEdit.documentChanges) throw Error(`Workspace edit is not configured for document changes.`);
            }, e3;
          })(), (function(e3) {
            function t5(e4) {
              return {
                uri: e4
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && x2.string(t6.uri);
            }
            e3.is = n5;
          })(t4.TextDocumentIdentifier || (t4.TextDocumentIdentifier = {}));
          var g2;
          (function(e3) {
            function t5(e4, t6) {
              return {
                uri: e4,
                version: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && x2.string(t6.uri) && (t6.version === null || x2.number(t6.version));
            }
            e3.is = n5;
          })(g2 = t4.VersionedTextDocumentIdentifier || (t4.VersionedTextDocumentIdentifier = {})), (function(e3) {
            function t5(e4, t6, n6, r3) {
              return {
                uri: e4,
                languageId: t6,
                version: n6,
                text: r3
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && x2.string(t6.uri) && x2.string(t6.languageId) && x2.number(t6.version) && x2.string(t6.text);
            }
            e3.is = n5;
          })(t4.TextDocumentItem || (t4.TextDocumentItem = {}));
          var _2;
          (function(e3) {
            e3.PlainText = `plaintext`, e3.Markdown = `markdown`;
          })(_2 = t4.MarkupKind || (t4.MarkupKind = {})), (function(e3) {
            function t5(t6) {
              var n5 = t6;
              return n5 === e3.PlainText || n5 === e3.Markdown;
            }
            e3.is = t5;
          })(_2 = t4.MarkupKind || (t4.MarkupKind = {}));
          var v2;
          (function(e3) {
            function t5(e4) {
              var t6 = e4;
              return x2.objectLiteral(e4) && _2.is(t6.kind) && x2.string(t6.value);
            }
            e3.is = t5;
          })(v2 = t4.MarkupContent || (t4.MarkupContent = {})), (function(e3) {
            e3.Text = 1, e3.Method = 2, e3.Function = 3, e3.Constructor = 4, e3.Field = 5, e3.Variable = 6, e3.Class = 7, e3.Interface = 8, e3.Module = 9, e3.Property = 10, e3.Unit = 11, e3.Value = 12, e3.Enum = 13, e3.Keyword = 14, e3.Snippet = 15, e3.Color = 16, e3.File = 17, e3.Reference = 18, e3.Folder = 19, e3.EnumMember = 20, e3.Constant = 21, e3.Struct = 22, e3.Event = 23, e3.Operator = 24, e3.TypeParameter = 25;
          })(t4.CompletionItemKind || (t4.CompletionItemKind = {})), (function(e3) {
            e3.PlainText = 1, e3.Snippet = 2;
          })(t4.InsertTextFormat || (t4.InsertTextFormat = {})), (function(e3) {
            e3.Deprecated = 1;
          })(t4.CompletionItemTag || (t4.CompletionItemTag = {})), (function(e3) {
            function t5(e4) {
              return {
                label: e4
              };
            }
            e3.create = t5;
          })(t4.CompletionItem || (t4.CompletionItem = {})), (function(e3) {
            function t5(e4, t6) {
              return {
                items: e4 || [],
                isIncomplete: !!t6
              };
            }
            e3.create = t5;
          })(t4.CompletionList || (t4.CompletionList = {}));
          var y2;
          (function(e3) {
            function t5(e4) {
              return e4.replace(/[\\`*_{}[\]()#+\-.!]/g, `\\$&`);
            }
            e3.fromPlainText = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.string(t6) || x2.objectLiteral(t6) && x2.string(t6.language) && x2.string(t6.value);
            }
            e3.is = n5;
          })(y2 = t4.MarkedString || (t4.MarkedString = {})), (function(e3) {
            function t5(e4) {
              var t6 = e4;
              return !!t6 && x2.objectLiteral(t6) && (v2.is(t6.contents) || y2.is(t6.contents) || x2.typedArray(t6.contents, y2.is)) && (e4.range === void 0 || r2.is(e4.range));
            }
            e3.is = t5;
          })(t4.Hover || (t4.Hover = {})), (function(e3) {
            function t5(e4, t6) {
              return t6 ? {
                label: e4,
                documentation: t6
              } : {
                label: e4
              };
            }
            e3.create = t5;
          })(t4.ParameterInformation || (t4.ParameterInformation = {})), (function(e3) {
            function t5(e4, t6) {
              var n5 = [
                ...arguments
              ].slice(2), r3 = {
                label: e4
              };
              return x2.defined(t6) && (r3.documentation = t6), x2.defined(n5) ? r3.parameters = n5 : r3.parameters = [], r3;
            }
            e3.create = t5;
          })(t4.SignatureInformation || (t4.SignatureInformation = {})), (function(e3) {
            e3.Text = 1, e3.Read = 2, e3.Write = 3;
          })(t4.DocumentHighlightKind || (t4.DocumentHighlightKind = {})), (function(e3) {
            function t5(e4, t6) {
              var n5 = {
                range: e4
              };
              return x2.number(t6) && (n5.kind = t6), n5;
            }
            e3.create = t5;
          })(t4.DocumentHighlight || (t4.DocumentHighlight = {})), (function(e3) {
            e3.File = 1, e3.Module = 2, e3.Namespace = 3, e3.Package = 4, e3.Class = 5, e3.Method = 6, e3.Property = 7, e3.Field = 8, e3.Constructor = 9, e3.Enum = 10, e3.Interface = 11, e3.Function = 12, e3.Variable = 13, e3.Constant = 14, e3.String = 15, e3.Number = 16, e3.Boolean = 17, e3.Array = 18, e3.Object = 19, e3.Key = 20, e3.Null = 21, e3.EnumMember = 22, e3.Struct = 23, e3.Event = 24, e3.Operator = 25, e3.TypeParameter = 26;
          })(t4.SymbolKind || (t4.SymbolKind = {})), (function(e3) {
            e3.Deprecated = 1;
          })(t4.SymbolTag || (t4.SymbolTag = {})), (function(e3) {
            function t5(e4, t6, n5, r3, i3) {
              var a3 = {
                name: e4,
                kind: t6,
                location: {
                  uri: r3,
                  range: n5
                }
              };
              return i3 && (a3.containerName = i3), a3;
            }
            e3.create = t5;
          })(t4.SymbolInformation || (t4.SymbolInformation = {})), (function(e3) {
            function t5(e4, t6, n6, r3, i3, a3) {
              var o3 = {
                name: e4,
                detail: t6,
                kind: n6,
                range: r3,
                selectionRange: i3
              };
              return a3 !== void 0 && (o3.children = a3), o3;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return t6 && x2.string(t6.name) && x2.number(t6.kind) && r2.is(t6.range) && r2.is(t6.selectionRange) && (t6.detail === void 0 || x2.string(t6.detail)) && (t6.deprecated === void 0 || x2.boolean(t6.deprecated)) && (t6.children === void 0 || Array.isArray(t6.children));
            }
            e3.is = n5;
          })(t4.DocumentSymbol || (t4.DocumentSymbol = {})), (function(e3) {
            e3.Empty = ``, e3.QuickFix = `quickfix`, e3.Refactor = `refactor`, e3.RefactorExtract = `refactor.extract`, e3.RefactorInline = `refactor.inline`, e3.RefactorRewrite = `refactor.rewrite`, e3.Source = `source`, e3.SourceOrganizeImports = `source.organizeImports`, e3.SourceFixAll = `source.fixAll`;
          })(t4.CodeActionKind || (t4.CodeActionKind = {})), (function(e3) {
            function t5(e4, t6) {
              var n6 = {
                diagnostics: e4
              };
              return t6 != null && (n6.only = t6), n6;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && x2.typedArray(t6.diagnostics, s2.is) && (t6.only === void 0 || x2.typedArray(t6.only, x2.string));
            }
            e3.is = n5;
          })(t4.CodeActionContext || (t4.CodeActionContext = {})), (function(e3) {
            function t5(e4, t6, n6) {
              var r3 = {
                title: e4
              };
              return c2.is(t6) ? r3.command = t6 : r3.edit = t6, n6 !== void 0 && (r3.kind = n6), r3;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return t6 && x2.string(t6.title) && (t6.diagnostics === void 0 || x2.typedArray(t6.diagnostics, s2.is)) && (t6.kind === void 0 || x2.string(t6.kind)) && (t6.edit !== void 0 || t6.command !== void 0) && (t6.command === void 0 || c2.is(t6.command)) && (t6.isPreferred === void 0 || x2.boolean(t6.isPreferred)) && (t6.edit === void 0 || m2.is(t6.edit));
            }
            e3.is = n5;
          })(t4.CodeAction || (t4.CodeAction = {})), (function(e3) {
            function t5(e4, t6) {
              var n6 = {
                range: e4
              };
              return x2.defined(t6) && (n6.data = t6), n6;
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && r2.is(t6.range) && (x2.undefined(t6.command) || c2.is(t6.command));
            }
            e3.is = n5;
          })(t4.CodeLens || (t4.CodeLens = {})), (function(e3) {
            function t5(e4, t6) {
              return {
                tabSize: e4,
                insertSpaces: t6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && x2.number(t6.tabSize) && x2.boolean(t6.insertSpaces);
            }
            e3.is = n5;
          })(t4.FormattingOptions || (t4.FormattingOptions = {})), (function(e3) {
            function t5(e4, t6, n6) {
              return {
                range: e4,
                target: t6,
                data: n6
              };
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return x2.defined(t6) && r2.is(t6.range) && (x2.undefined(t6.target) || x2.string(t6.target));
            }
            e3.is = n5;
          })(t4.DocumentLink || (t4.DocumentLink = {})), (function(e3) {
            function t5(e4, t6) {
              return {
                range: e4,
                parent: t6
              };
            }
            e3.create = t5;
            function n5(t6) {
              var n6 = t6;
              return n6 !== void 0 && r2.is(n6.range) && (n6.parent === void 0 || e3.is(n6.parent));
            }
            e3.is = n5;
          })(t4.SelectionRange || (t4.SelectionRange = {})), t4.EOL = [
            `
`,
            `\r
`,
            `\r`
          ], (function(e3) {
            function t5(e4, t6, n6, r4) {
              return new b2(e4, t6, n6, r4);
            }
            e3.create = t5;
            function n5(e4) {
              var t6 = e4;
              return !!(x2.defined(t6) && x2.string(t6.uri) && (x2.undefined(t6.languageId) || x2.string(t6.languageId)) && x2.number(t6.lineCount) && x2.func(t6.getText) && x2.func(t6.positionAt) && x2.func(t6.offsetAt));
            }
            e3.is = n5;
            function r3(e4, t6) {
              for (var n6 = e4.getText(), r4 = i3(t6, function(e5, t7) {
                var n7 = e5.range.start.line - t7.range.start.line;
                return n7 === 0 ? e5.range.start.character - t7.range.start.character : n7;
              }), a3 = n6.length, o3 = r4.length - 1; o3 >= 0; o3--) {
                var s3 = r4[o3], c3 = e4.offsetAt(s3.range.start), l3 = e4.offsetAt(s3.range.end);
                if (l3 <= a3) n6 = n6.substring(0, c3) + s3.newText + n6.substring(l3, n6.length);
                else throw Error(`Overlapping edit`);
                a3 = c3;
              }
              return n6;
            }
            e3.applyEdits = r3;
            function i3(e4, t6) {
              if (e4.length <= 1) return e4;
              var n6 = e4.length / 2 | 0, r4 = e4.slice(0, n6), a3 = e4.slice(n6);
              i3(r4, t6), i3(a3, t6);
              for (var o3 = 0, s3 = 0, c3 = 0; o3 < r4.length && s3 < a3.length; ) t6(r4[o3], a3[s3]) <= 0 ? e4[c3++] = r4[o3++] : e4[c3++] = a3[s3++];
              for (; o3 < r4.length; ) e4[c3++] = r4[o3++];
              for (; s3 < a3.length; ) e4[c3++] = a3[s3++];
              return e4;
            }
          })(t4.TextDocument || (t4.TextDocument = {}));
          var b2 = (function() {
            function e3(e4, t5, n5, r3) {
              this._uri = e4, this._languageId = t5, this._version = n5, this._content = r3, this._lineOffsets = void 0;
            }
            return Object.defineProperty(e3.prototype, `uri`, {
              get: function() {
                return this._uri;
              },
              enumerable: true,
              configurable: true
            }), Object.defineProperty(e3.prototype, `languageId`, {
              get: function() {
                return this._languageId;
              },
              enumerable: true,
              configurable: true
            }), Object.defineProperty(e3.prototype, `version`, {
              get: function() {
                return this._version;
              },
              enumerable: true,
              configurable: true
            }), e3.prototype.getText = function(e4) {
              if (e4) {
                var t5 = this.offsetAt(e4.start), n5 = this.offsetAt(e4.end);
                return this._content.substring(t5, n5);
              }
              return this._content;
            }, e3.prototype.update = function(e4, t5) {
              this._content = e4.text, this._version = t5, this._lineOffsets = void 0;
            }, e3.prototype.getLineOffsets = function() {
              if (this._lineOffsets === void 0) {
                for (var e4 = [], t5 = this._content, n5 = true, r3 = 0; r3 < t5.length; r3++) {
                  n5 && (n5 = (e4.push(r3), false));
                  var i3 = t5.charAt(r3);
                  n5 = i3 === `\r` || i3 === `
`, i3 === `\r` && r3 + 1 < t5.length && t5.charAt(r3 + 1) === `
` && r3++;
                }
                n5 && t5.length > 0 && e4.push(t5.length), this._lineOffsets = e4;
              }
              return this._lineOffsets;
            }, e3.prototype.positionAt = function(e4) {
              e4 = Math.max(Math.min(e4, this._content.length), 0);
              var t5 = this.getLineOffsets(), r3 = 0, i3 = t5.length;
              if (i3 === 0) return n4.create(0, e4);
              for (; r3 < i3; ) {
                var a3 = Math.floor((r3 + i3) / 2);
                t5[a3] > e4 ? i3 = a3 : r3 = a3 + 1;
              }
              var o3 = r3 - 1;
              return n4.create(o3, e4 - t5[o3]);
            }, e3.prototype.offsetAt = function(e4) {
              var t5 = this.getLineOffsets();
              if (e4.line >= t5.length) return this._content.length;
              if (e4.line < 0) return 0;
              var n5 = t5[e4.line], r3 = e4.line + 1 < t5.length ? t5[e4.line + 1] : this._content.length;
              return Math.max(Math.min(n5 + e4.character, r3), n5);
            }, Object.defineProperty(e3.prototype, `lineCount`, {
              get: function() {
                return this.getLineOffsets().length;
              },
              enumerable: true,
              configurable: true
            }), e3;
          })(), x2;
          (function(e3) {
            var t5 = Object.prototype.toString;
            function n5(e4) {
              return e4 !== void 0;
            }
            e3.defined = n5;
            function r3(e4) {
              return e4 === void 0;
            }
            e3.undefined = r3;
            function i3(e4) {
              return e4 === true || e4 === false;
            }
            e3.boolean = i3;
            function a3(e4) {
              return t5.call(e4) === `[object String]`;
            }
            e3.string = a3;
            function o3(e4) {
              return t5.call(e4) === `[object Number]`;
            }
            e3.number = o3;
            function s3(e4) {
              return t5.call(e4) === `[object Function]`;
            }
            e3.func = s3;
            function c3(e4) {
              return typeof e4 == `object` && !!e4;
            }
            e3.objectLiteral = c3;
            function l3(e4, t6) {
              return Array.isArray(e4) && e4.every(t6);
            }
            e3.typedArray = l3;
          })(x2 || (x2 = {}));
        });
      },
      622: function(e2) {
        e2.exports = d();
      },
      747: function(e2) {
        e2.exports = c();
      },
      762: function(t3, n3) {
        (function(r2) {
          if (typeof t3.exports == `object`) {
            var i2 = r2(e, n3);
            i2 !== void 0 && (t3.exports = i2);
          } else typeof define == `function` && define.amd && define([
            `require`,
            `exports`,
            `./format`,
            `./edit`
          ], r2);
        })(function(e2, t4) {
          Object.defineProperty(t4, `__esModule`, {
            value: true
          });
          var n4 = void 0, r2 = void 0, i2;
          (function(e3) {
            e3[e3.None = 0] = `None`, e3[e3.UnexpectedEndOfComment = 1] = `UnexpectedEndOfComment`, e3[e3.UnexpectedEndOfString = 2] = `UnexpectedEndOfString`, e3[e3.UnexpectedEndOfNumber = 3] = `UnexpectedEndOfNumber`, e3[e3.InvalidUnicode = 4] = `InvalidUnicode`, e3[e3.InvalidEscapeCharacter = 5] = `InvalidEscapeCharacter`, e3[e3.InvalidCharacter = 6] = `InvalidCharacter`;
          })(i2 = t4.ScanError || (t4.ScanError = {}));
          var a2;
          (function(e3) {
            e3[e3.Unknown = 0] = `Unknown`, e3[e3.OpenBraceToken = 1] = `OpenBraceToken`, e3[e3.CloseBraceToken = 2] = `CloseBraceToken`, e3[e3.OpenBracketToken = 3] = `OpenBracketToken`, e3[e3.CloseBracketToken = 4] = `CloseBracketToken`, e3[e3.CommaToken = 5] = `CommaToken`, e3[e3.ColonToken = 6] = `ColonToken`, e3[e3.NullKeyword = 7] = `NullKeyword`, e3[e3.TrueKeyword = 8] = `TrueKeyword`, e3[e3.FalseKeyword = 9] = `FalseKeyword`, e3[e3.StringLiteral = 10] = `StringLiteral`, e3[e3.NumericLiteral = 11] = `NumericLiteral`, e3[e3.LineCommentTrivia = 12] = `LineCommentTrivia`, e3[e3.BlockCommentTrivia = 13] = `BlockCommentTrivia`, e3[e3.LineBreakTrivia = 14] = `LineBreakTrivia`, e3[e3.Trivia = 15] = `Trivia`, e3[e3.EOF = 16] = `EOF`;
          })(a2 = t4.SyntaxKind || (t4.SyntaxKind = {}));
          function o2(e3, t5) {
            t5 === void 0 && (t5 = false);
            var n5 = 0, r3 = e3.length, o3 = ``, u3 = 0, d3 = a2.Unknown, f3 = i2.None;
            function p3(t6, r4) {
              for (var i3 = 0, a3 = 0; i3 < t6 || !r4; ) {
                var o4 = e3.charCodeAt(n5);
                if (o4 >= 48 && o4 <= 57) a3 = a3 * 16 + o4 - 48;
                else if (o4 >= 65 && o4 <= 70) a3 = a3 * 16 + o4 - 65 + 10;
                else if (o4 >= 97 && o4 <= 102) a3 = a3 * 16 + o4 - 97 + 10;
                else break;
                n5++, i3++;
              }
              return i3 < t6 && (a3 = -1), a3;
            }
            function m3(e4) {
              n5 = e4, o3 = ``, u3 = 0, d3 = a2.Unknown, f3 = i2.None;
            }
            function h3() {
              var t6 = n5;
              if (e3.charCodeAt(n5) === 48) n5++;
              else for (n5++; n5 < e3.length && l2(e3.charCodeAt(n5)); ) n5++;
              if (n5 < e3.length && e3.charCodeAt(n5) === 46) if (n5++, n5 < e3.length && l2(e3.charCodeAt(n5))) for (n5++; n5 < e3.length && l2(e3.charCodeAt(n5)); ) n5++;
              else return f3 = i2.UnexpectedEndOfNumber, e3.substring(t6, n5);
              var r4 = n5;
              if (n5 < e3.length && (e3.charCodeAt(n5) === 69 || e3.charCodeAt(n5) === 101)) if (n5++, (n5 < e3.length && e3.charCodeAt(n5) === 43 || e3.charCodeAt(n5) === 45) && n5++, n5 < e3.length && l2(e3.charCodeAt(n5))) {
                for (n5++; n5 < e3.length && l2(e3.charCodeAt(n5)); ) n5++;
                r4 = n5;
              } else f3 = i2.UnexpectedEndOfNumber;
              return e3.substring(t6, r4);
            }
            function g3() {
              for (var t6 = ``, a3 = n5; ; ) {
                if (n5 >= r3) {
                  t6 += e3.substring(a3, n5), f3 = i2.UnexpectedEndOfString;
                  break;
                }
                var o4 = e3.charCodeAt(n5);
                if (o4 === 34) {
                  t6 += e3.substring(a3, n5), n5++;
                  break;
                }
                if (o4 === 92) {
                  if (t6 += e3.substring(a3, n5), n5++, n5 >= r3) {
                    f3 = i2.UnexpectedEndOfString;
                    break;
                  }
                  switch (o4 = e3.charCodeAt(n5++), o4) {
                    case 34:
                      t6 += `"`;
                      break;
                    case 92:
                      t6 += `\\`;
                      break;
                    case 47:
                      t6 += `/`;
                      break;
                    case 98:
                      t6 += `\b`;
                      break;
                    case 102:
                      t6 += `\f`;
                      break;
                    case 110:
                      t6 += `
`;
                      break;
                    case 114:
                      t6 += `\r`;
                      break;
                    case 116:
                      t6 += `	`;
                      break;
                    case 117:
                      var s3 = p3(4, true);
                      s3 >= 0 ? t6 += String.fromCharCode(s3) : f3 = i2.InvalidUnicode;
                      break;
                    default:
                      f3 = i2.InvalidEscapeCharacter;
                  }
                  a3 = n5;
                  continue;
                }
                if (o4 >= 0 && o4 <= 31) if (c2(o4)) {
                  t6 += e3.substring(a3, n5), f3 = i2.UnexpectedEndOfString;
                  break;
                } else f3 = i2.InvalidCharacter;
                n5++;
              }
              return t6;
            }
            function _3() {
              if (o3 = ``, f3 = i2.None, u3 = n5, n5 >= r3) return u3 = r3, d3 = a2.EOF;
              var t6 = e3.charCodeAt(n5);
              if (s2(t6)) {
                do
                  n5++, o3 += String.fromCharCode(t6), t6 = e3.charCodeAt(n5);
                while (s2(t6));
                return d3 = a2.Trivia;
              }
              if (c2(t6)) return n5++, o3 += String.fromCharCode(t6), t6 === 13 && e3.charCodeAt(n5) === 10 && (n5++, o3 += `
`), d3 = a2.LineBreakTrivia;
              switch (t6) {
                case 123:
                  return n5++, d3 = a2.OpenBraceToken;
                case 125:
                  return n5++, d3 = a2.CloseBraceToken;
                case 91:
                  return n5++, d3 = a2.OpenBracketToken;
                case 93:
                  return n5++, d3 = a2.CloseBracketToken;
                case 58:
                  return n5++, d3 = a2.ColonToken;
                case 44:
                  return n5++, d3 = a2.CommaToken;
                case 34:
                  return n5++, o3 = g3(), d3 = a2.StringLiteral;
                case 47:
                  var p4 = n5 - 1;
                  if (e3.charCodeAt(n5 + 1) === 47) {
                    for (n5 += 2; n5 < r3 && !c2(e3.charCodeAt(n5)); ) n5++;
                    return o3 = e3.substring(p4, n5), d3 = a2.LineCommentTrivia;
                  }
                  if (e3.charCodeAt(n5 + 1) === 42) {
                    n5 += 2;
                    for (var m4 = false; n5 < r3; ) {
                      if (e3.charCodeAt(n5) === 42 && n5 + 1 < r3 && e3.charCodeAt(n5 + 1) === 47) {
                        n5 += 2, m4 = true;
                        break;
                      }
                      n5++;
                    }
                    return m4 || (n5++, f3 = i2.UnexpectedEndOfComment), o3 = e3.substring(p4, n5), d3 = a2.BlockCommentTrivia;
                  }
                  return o3 += String.fromCharCode(t6), n5++, d3 = a2.Unknown;
                case 45:
                  if (o3 += String.fromCharCode(t6), n5++, n5 === r3 || !l2(e3.charCodeAt(n5))) return d3 = a2.Unknown;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  return o3 += h3(), d3 = a2.NumericLiteral;
                default:
                  for (; n5 < r3 && v3(t6); ) n5++, t6 = e3.charCodeAt(n5);
                  if (u3 !== n5) {
                    switch (o3 = e3.substring(u3, n5), o3) {
                      case `true`:
                        return d3 = a2.TrueKeyword;
                      case `false`:
                        return d3 = a2.FalseKeyword;
                      case `null`:
                        return d3 = a2.NullKeyword;
                    }
                    return d3 = a2.Unknown;
                  }
                  return o3 += String.fromCharCode(t6), n5++, d3 = a2.Unknown;
              }
            }
            function v3(e4) {
              if (s2(e4) || c2(e4)) return false;
              switch (e4) {
                case 125:
                case 93:
                case 123:
                case 91:
                case 34:
                case 58:
                case 44:
                  return false;
              }
              return true;
            }
            function y3() {
              var e4;
              do
                e4 = _3();
              while (e4 >= a2.LineCommentTrivia && e4 <= a2.Trivia);
              return e4;
            }
            return {
              setPosition: m3,
              getPosition: function() {
                return n5;
              },
              scan: t5 ? y3 : _3,
              getToken: function() {
                return d3;
              },
              getTokenValue: function() {
                return o3;
              },
              getTokenOffset: function() {
                return u3;
              },
              getTokenLength: function() {
                return n5 - u3;
              },
              getTokenError: function() {
                return f3;
              }
            };
          }
          t4.createScanner = o2;
          function s2(e3) {
            return e3 === 32 || e3 === 9 || e3 === 11 || e3 === 12 || e3 === 160 || e3 === 5760 || e3 >= 8192 && e3 <= 8203 || e3 === 8239 || e3 === 8287 || e3 === 12288 || e3 === 65279;
          }
          function c2(e3) {
            return e3 === 10 || e3 === 13 || e3 === 8232 || e3 === 8233;
          }
          function l2(e3) {
            return e3 >= 48 && e3 <= 57;
          }
          function u2(e3, t5) {
            var n5 = o2(e3), r3 = [], i3, s3 = 0, c3;
            do
              switch (c3 = n5.getPosition(), i3 = n5.scan(), i3) {
                case a2.LineCommentTrivia:
                case a2.BlockCommentTrivia:
                case a2.EOF:
                  s3 !== c3 && r3.push(e3.substring(s3, c3)), t5 !== void 0 && r3.push(n5.getTokenValue().replace(/[^\r\n]/g, t5)), s3 = n5.getPosition();
                  break;
              }
            while (i3 !== a2.EOF);
            return r3.join(``);
          }
          t4.stripComments = u2;
          var d2;
          (function(e3) {
            e3[e3.InvalidSymbol = 0] = `InvalidSymbol`, e3[e3.InvalidNumberFormat = 1] = `InvalidNumberFormat`, e3[e3.PropertyNameExpected = 2] = `PropertyNameExpected`, e3[e3.ValueExpected = 3] = `ValueExpected`, e3[e3.ColonExpected = 4] = `ColonExpected`, e3[e3.CommaExpected = 5] = `CommaExpected`, e3[e3.CloseBraceExpected = 6] = `CloseBraceExpected`, e3[e3.CloseBracketExpected = 7] = `CloseBracketExpected`, e3[e3.EndOfFileExpected = 8] = `EndOfFileExpected`, e3[e3.InvalidCommentToken = 9] = `InvalidCommentToken`, e3[e3.UnexpectedEndOfComment = 10] = `UnexpectedEndOfComment`, e3[e3.UnexpectedEndOfString = 11] = `UnexpectedEndOfString`, e3[e3.UnexpectedEndOfNumber = 12] = `UnexpectedEndOfNumber`, e3[e3.InvalidUnicode = 13] = `InvalidUnicode`, e3[e3.InvalidEscapeCharacter = 14] = `InvalidEscapeCharacter`, e3[e3.InvalidCharacter = 15] = `InvalidCharacter`;
          })(d2 = t4.ParseErrorCode || (t4.ParseErrorCode = {}));
          function f2(e3) {
            switch (typeof e3) {
              case `boolean`:
                return `boolean`;
              case `number`:
                return `number`;
              case `string`:
                return `string`;
              default:
                return `null`;
            }
          }
          function p2(e3, t5) {
            var n5 = [], r3 = {}, i3 = void 0, a3 = {
              value: {},
              offset: 0,
              length: 0,
              type: `object`
            }, o3 = false;
            function s3(e4, t6, n6, r4) {
              a3.value = e4, a3.offset = t6, a3.length = n6, a3.type = r4, a3.columnOffset = void 0, i3 = a3;
            }
            try {
              v2(e3, {
                onObjectBegin: function(e4, a4) {
                  if (t5 <= e4) throw r3;
                  i3 = void 0, o3 = t5 > e4, n5.push(``);
                },
                onObjectProperty: function(e4, i4, a4) {
                  if (t5 < i4 || (s3(e4, i4, a4, `property`), n5[n5.length - 1] = e4, t5 <= i4 + a4)) throw r3;
                },
                onObjectEnd: function(e4, a4) {
                  if (t5 <= e4) throw r3;
                  i3 = void 0, n5.pop();
                },
                onArrayBegin: function(e4, a4) {
                  if (t5 <= e4) throw r3;
                  i3 = void 0, n5.push(0);
                },
                onArrayEnd: function(e4, a4) {
                  if (t5 <= e4) throw r3;
                  i3 = void 0, n5.pop();
                },
                onLiteralValue: function(e4, n6, i4) {
                  if (t5 < n6 || (s3(e4, n6, i4, f2(e4)), t5 <= n6 + i4)) throw r3;
                },
                onSeparator: function(e4, a4, s4) {
                  if (t5 <= a4) throw r3;
                  if (e4 === `:` && i3 && i3.type === `property`) i3.columnOffset = a4, o3 = false, i3 = void 0;
                  else if (e4 === `,`) {
                    var c3 = n5[n5.length - 1];
                    typeof c3 == `number` ? n5[n5.length - 1] = c3 + 1 : (o3 = true, n5[n5.length - 1] = ``), i3 = void 0;
                  }
                }
              });
            } catch (e4) {
              if (e4 !== r3) throw e4;
            }
            return {
              path: n5,
              previousNode: i3,
              isAtPropertyKey: o3,
              matches: function(e4) {
                for (var t6 = 0, r4 = 0; t6 < e4.length && r4 < n5.length; r4++) if (e4[t6] === n5[r4] || e4[t6] === `*`) t6++;
                else if (e4[t6] !== `**`) return false;
                return t6 === e4.length;
              }
            };
          }
          t4.getLocation = p2;
          function m2(e3, t5, n5) {
            t5 === void 0 && (t5 = []);
            var r3 = null, i3 = [], a3 = [];
            function o3(e4) {
              Array.isArray(i3) ? i3.push(e4) : r3 && (i3[r3] = e4);
            }
            return v2(e3, {
              onObjectBegin: function() {
                var e4 = {};
                o3(e4), a3.push(i3), i3 = e4, r3 = null;
              },
              onObjectProperty: function(e4) {
                r3 = e4;
              },
              onObjectEnd: function() {
                i3 = a3.pop();
              },
              onArrayBegin: function() {
                var e4 = [];
                o3(e4), a3.push(i3), i3 = e4, r3 = null;
              },
              onArrayEnd: function() {
                i3 = a3.pop();
              },
              onLiteralValue: o3,
              onError: function(e4, n6, r4) {
                t5.push({
                  error: e4,
                  offset: n6,
                  length: r4
                });
              }
            }, n5), i3[0];
          }
          t4.parse = m2;
          function h2(e3, t5, n5) {
            t5 === void 0 && (t5 = []);
            var r3 = {
              type: `array`,
              offset: -1,
              length: -1,
              children: []
            };
            function i3(e4) {
              r3.type === `property` && (r3.length = e4 - r3.offset, r3 = r3.parent);
            }
            function a3(e4) {
              return r3.children.push(e4), e4;
            }
            v2(e3, {
              onObjectBegin: function(e4) {
                r3 = a3({
                  type: `object`,
                  offset: e4,
                  length: -1,
                  parent: r3,
                  children: []
                });
              },
              onObjectProperty: function(e4, t6, n6) {
                r3 = a3({
                  type: `property`,
                  offset: t6,
                  length: -1,
                  parent: r3,
                  children: []
                }), r3.children.push({
                  type: `string`,
                  value: e4,
                  offset: t6,
                  length: n6,
                  parent: r3
                });
              },
              onObjectEnd: function(e4, t6) {
                r3.length = e4 + t6 - r3.offset, r3 = r3.parent, i3(e4 + t6);
              },
              onArrayBegin: function(e4, t6) {
                r3 = a3({
                  type: `array`,
                  offset: e4,
                  length: -1,
                  parent: r3,
                  children: []
                });
              },
              onArrayEnd: function(e4, t6) {
                r3.length = e4 + t6 - r3.offset, r3 = r3.parent, i3(e4 + t6);
              },
              onLiteralValue: function(e4, t6, n6) {
                a3({
                  type: f2(e4),
                  offset: t6,
                  length: n6,
                  parent: r3,
                  value: e4
                }), i3(t6 + n6);
              },
              onSeparator: function(e4, t6, n6) {
                r3.type === `property` && (e4 === `:` ? r3.columnOffset = t6 : e4 === `,` && i3(t6));
              },
              onError: function(e4, n6, r4) {
                t5.push({
                  error: e4,
                  offset: n6,
                  length: r4
                });
              }
            }, n5);
            var o3 = r3.children[0];
            return o3 && delete o3.parent, o3;
          }
          t4.parseTree = h2;
          function g2(e3, t5) {
            if (e3) {
              for (var n5 = e3, r3 = 0, i3 = t5; r3 < i3.length; r3++) {
                var a3 = i3[r3];
                if (typeof a3 == `string`) {
                  if (n5.type !== `object` || !Array.isArray(n5.children)) return;
                  for (var o3 = false, s3 = 0, c3 = n5.children; s3 < c3.length; s3++) {
                    var l3 = c3[s3];
                    if (Array.isArray(l3.children) && l3.children[0].value === a3) {
                      n5 = l3.children[1], o3 = true;
                      break;
                    }
                  }
                  if (!o3) return;
                } else {
                  var u3 = a3;
                  if (n5.type !== `array` || u3 < 0 || !Array.isArray(n5.children) || u3 >= n5.children.length) return;
                  n5 = n5.children[u3];
                }
              }
              return n5;
            }
          }
          t4.findNodeAtLocation = g2;
          function _2(e3) {
            if (e3.type === `array`) return e3.children.map(_2);
            if (e3.type === `object`) {
              for (var t5 = /* @__PURE__ */ Object.create(null), n5 = 0, r3 = e3.children; n5 < r3.length; n5++) {
                var i3 = r3[n5];
                t5[i3.children[0].value] = _2(i3.children[1]);
              }
              return t5;
            }
            return e3.value;
          }
          t4.getNodeValue = _2;
          function v2(e3, t5, n5) {
            var r3 = o2(e3, false);
            function s3(e4) {
              return e4 ? function() {
                return e4(r3.getTokenOffset(), r3.getTokenLength());
              } : function() {
                return true;
              };
            }
            function c3(e4) {
              return e4 ? function(t6) {
                return e4(t6, r3.getTokenOffset(), r3.getTokenLength());
              } : function() {
                return true;
              };
            }
            var l3 = s3(t5.onObjectBegin), u3 = c3(t5.onObjectProperty), f3 = s3(t5.onObjectEnd), p3 = s3(t5.onArrayBegin), m3 = s3(t5.onArrayEnd), h3 = c3(t5.onLiteralValue), g3 = c3(t5.onSeparator), _3 = s3(t5.onComment), v3 = c3(t5.onError), y3 = n5 && n5.disallowComments, b3 = n5 && n5.allowTrailingComma;
            function x3() {
              for (; ; ) {
                var e4 = r3.scan();
                switch (r3.getTokenError()) {
                  case i2.InvalidUnicode:
                    S2(d2.InvalidUnicode);
                    break;
                  case i2.InvalidEscapeCharacter:
                    S2(d2.InvalidEscapeCharacter);
                    break;
                  case i2.UnexpectedEndOfNumber:
                    S2(d2.UnexpectedEndOfNumber);
                    break;
                  case i2.UnexpectedEndOfComment:
                    y3 || S2(d2.UnexpectedEndOfComment);
                    break;
                  case i2.UnexpectedEndOfString:
                    S2(d2.UnexpectedEndOfString);
                    break;
                  case i2.InvalidCharacter:
                    S2(d2.InvalidCharacter);
                    break;
                }
                switch (e4) {
                  case a2.LineCommentTrivia:
                  case a2.BlockCommentTrivia:
                    y3 ? S2(d2.InvalidCommentToken) : _3();
                    break;
                  case a2.Unknown:
                    S2(d2.InvalidSymbol);
                    break;
                  case a2.Trivia:
                  case a2.LineBreakTrivia:
                    break;
                  default:
                    return e4;
                }
              }
            }
            function S2(e4, t6, n6) {
              if (t6 === void 0 && (t6 = []), n6 === void 0 && (n6 = []), v3(e4), t6.length + n6.length > 0) for (var i3 = r3.getToken(); i3 !== a2.EOF; ) {
                if (t6.indexOf(i3) !== -1) {
                  x3();
                  break;
                } else if (n6.indexOf(i3) !== -1) break;
                i3 = x3();
              }
            }
            function C2(e4) {
              var t6 = r3.getTokenValue();
              return e4 ? h3(t6) : u3(t6), x3(), true;
            }
            function w2() {
              switch (r3.getToken()) {
                case a2.NumericLiteral:
                  var e4 = 0;
                  try {
                    e4 = JSON.parse(r3.getTokenValue()), typeof e4 != `number` && (S2(d2.InvalidNumberFormat), e4 = 0);
                  } catch {
                    S2(d2.InvalidNumberFormat);
                  }
                  h3(e4);
                  break;
                case a2.NullKeyword:
                  h3(null);
                  break;
                case a2.TrueKeyword:
                  h3(true);
                  break;
                case a2.FalseKeyword:
                  h3(false);
                  break;
                default:
                  return false;
              }
              return x3(), true;
            }
            function T2() {
              return r3.getToken() === a2.StringLiteral ? (C2(false), r3.getToken() === a2.ColonToken ? (g3(`:`), x3(), O2() || S2(d2.ValueExpected, [], [
                a2.CloseBraceToken,
                a2.CommaToken
              ])) : S2(d2.ColonExpected, [], [
                a2.CloseBraceToken,
                a2.CommaToken
              ]), true) : (S2(d2.PropertyNameExpected, [], [
                a2.CloseBraceToken,
                a2.CommaToken
              ]), false);
            }
            function E2() {
              l3(), x3();
              for (var e4 = false; r3.getToken() !== a2.CloseBraceToken && r3.getToken() !== a2.EOF; ) {
                if (r3.getToken() === a2.CommaToken) {
                  if (e4 || S2(d2.ValueExpected, [], []), g3(`,`), x3(), r3.getToken() === a2.CloseBraceToken && b3) break;
                } else e4 && S2(d2.CommaExpected, [], []);
                T2() || S2(d2.ValueExpected, [], [
                  a2.CloseBraceToken,
                  a2.CommaToken
                ]), e4 = true;
              }
              return f3(), r3.getToken() === a2.CloseBraceToken ? x3() : S2(d2.CloseBraceExpected, [
                a2.CloseBraceToken
              ], []), true;
            }
            function D2() {
              p3(), x3();
              for (var e4 = false; r3.getToken() !== a2.CloseBracketToken && r3.getToken() !== a2.EOF; ) {
                if (r3.getToken() === a2.CommaToken) {
                  if (e4 || S2(d2.ValueExpected, [], []), g3(`,`), x3(), r3.getToken() === a2.CloseBracketToken && b3) break;
                } else e4 && S2(d2.CommaExpected, [], []);
                O2() || S2(d2.ValueExpected, [], [
                  a2.CloseBracketToken,
                  a2.CommaToken
                ]), e4 = true;
              }
              return m3(), r3.getToken() === a2.CloseBracketToken ? x3() : S2(d2.CloseBracketExpected, [
                a2.CloseBracketToken
              ], []), true;
            }
            function O2() {
              switch (r3.getToken()) {
                case a2.OpenBracketToken:
                  return D2();
                case a2.OpenBraceToken:
                  return E2();
                case a2.StringLiteral:
                  return C2(true);
                default:
                  return w2();
              }
            }
            return x3(), r3.getToken() === a2.EOF ? true : O2() ? (r3.getToken() !== a2.EOF && S2(d2.EndOfFileExpected, [], []), true) : (S2(d2.ValueExpected, [], []), false);
          }
          t4.visit = v2;
          function y2(e3, t5, r3) {
            return n4.format(e3, t5, r3);
          }
          t4.format = y2;
          function b2(e3, t5, n5, i3) {
            return r2.setProperty(e3, t5, n5, i3.formattingOptions, i3.getInsertionIndex);
          }
          t4.modify = b2;
          function x2(e3, t5) {
            for (var n5 = t5.length - 1; n5 >= 0; n5--) e3 = r2.applyEdit(e3, t5[n5]);
            return e3;
          }
          t4.applyEdits = x2;
        });
      }
    }, function(e2) {
      (function() {
        e2.r = function(e3) {
          typeof Symbol < `u` && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, {
            value: `Module`
          }), Object.defineProperty(e3, `__esModule`, {
            value: true
          });
        };
      })(), (function() {
        e2.n = function(t3) {
          var n3 = t3 && t3.__esModule ? function() {
            return t3.default;
          } : function() {
            return t3;
          };
          return e2.d(n3, `a`, n3), n3;
        };
      })(), (function() {
        var t3 = Object.prototype.hasOwnProperty;
        e2.d = function(e3, n3, r2) {
          t3.call(e3, n3) || Object.defineProperty(e3, n3, {
            enumerable: true,
            get: r2
          });
        };
      })();
    });
  })), F = n(((e2, t2) => {
    u(), t2.exports = typeof l == `object` && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...e3) => console.error(`SEMVER`, ...e3) : () => {
    };
  })), ie = n(((e2, t2) => {
    t2.exports = {
      SEMVER_SPEC_VERSION: `2.0.0`,
      MAX_LENGTH: 256,
      MAX_SAFE_INTEGER: 2 ** 53 - 1 || 9007199254740991,
      MAX_SAFE_COMPONENT_LENGTH: 16
    };
  })), ae = n(((e2, t2) => {
    var { MAX_SAFE_COMPONENT_LENGTH: n2 } = ie(), r2 = F();
    e2 = t2.exports = {};
    var i2 = e2.re = [], a2 = e2.src = [], o2 = e2.t = {}, s2 = 0, c2 = (e3, t3, n3) => {
      let c3 = s2++;
      r2(e3, c3, t3), o2[e3] = c3, a2[c3] = t3, i2[c3] = new RegExp(t3, n3 ? `g` : void 0);
    };
    c2(`NUMERICIDENTIFIER`, `0|[1-9]\\d*`), c2(`NUMERICIDENTIFIERLOOSE`, `[0-9]+`), c2(`NONNUMERICIDENTIFIER`, `\\d*[a-zA-Z-][a-zA-Z0-9-]*`), c2(`MAINVERSION`, `(${a2[o2.NUMERICIDENTIFIER]})\\.(${a2[o2.NUMERICIDENTIFIER]})\\.(${a2[o2.NUMERICIDENTIFIER]})`), c2(`MAINVERSIONLOOSE`, `(${a2[o2.NUMERICIDENTIFIERLOOSE]})\\.(${a2[o2.NUMERICIDENTIFIERLOOSE]})\\.(${a2[o2.NUMERICIDENTIFIERLOOSE]})`), c2(`PRERELEASEIDENTIFIER`, `(?:${a2[o2.NUMERICIDENTIFIER]}|${a2[o2.NONNUMERICIDENTIFIER]})`), c2(`PRERELEASEIDENTIFIERLOOSE`, `(?:${a2[o2.NUMERICIDENTIFIERLOOSE]}|${a2[o2.NONNUMERICIDENTIFIER]})`), c2(`PRERELEASE`, `(?:-(${a2[o2.PRERELEASEIDENTIFIER]}(?:\\.${a2[o2.PRERELEASEIDENTIFIER]})*))`), c2(`PRERELEASELOOSE`, `(?:-?(${a2[o2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a2[o2.PRERELEASEIDENTIFIERLOOSE]})*))`), c2(`BUILDIDENTIFIER`, `[0-9A-Za-z-]+`), c2(`BUILD`, `(?:\\+(${a2[o2.BUILDIDENTIFIER]}(?:\\.${a2[o2.BUILDIDENTIFIER]})*))`), c2(`FULLPLAIN`, `v?${a2[o2.MAINVERSION]}${a2[o2.PRERELEASE]}?${a2[o2.BUILD]}?`), c2(`FULL`, `^${a2[o2.FULLPLAIN]}$`), c2(`LOOSEPLAIN`, `[v=\\s]*${a2[o2.MAINVERSIONLOOSE]}${a2[o2.PRERELEASELOOSE]}?${a2[o2.BUILD]}?`), c2(`LOOSE`, `^${a2[o2.LOOSEPLAIN]}$`), c2(`GTLT`, `((?:<|>)?=?)`), c2(`XRANGEIDENTIFIERLOOSE`, `${a2[o2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), c2(`XRANGEIDENTIFIER`, `${a2[o2.NUMERICIDENTIFIER]}|x|X|\\*`), c2(`XRANGEPLAIN`, `[v=\\s]*(${a2[o2.XRANGEIDENTIFIER]})(?:\\.(${a2[o2.XRANGEIDENTIFIER]})(?:\\.(${a2[o2.XRANGEIDENTIFIER]})(?:${a2[o2.PRERELEASE]})?${a2[o2.BUILD]}?)?)?`), c2(`XRANGEPLAINLOOSE`, `[v=\\s]*(${a2[o2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a2[o2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a2[o2.XRANGEIDENTIFIERLOOSE]})(?:${a2[o2.PRERELEASELOOSE]})?${a2[o2.BUILD]}?)?)?`), c2(`XRANGE`, `^${a2[o2.GTLT]}\\s*${a2[o2.XRANGEPLAIN]}$`), c2(`XRANGELOOSE`, `^${a2[o2.GTLT]}\\s*${a2[o2.XRANGEPLAINLOOSE]}$`), c2(`COERCE`, `(^|[^\\d])(\\d{1,${n2}})(?:\\.(\\d{1,${n2}}))?(?:\\.(\\d{1,${n2}}))?(?:$|[^\\d])`), c2(`COERCERTL`, a2[o2.COERCE], true), c2(`LONETILDE`, `(?:~>?)`), c2(`TILDETRIM`, `(\\s*)${a2[o2.LONETILDE]}\\s+`, true), e2.tildeTrimReplace = `$1~`, c2(`TILDE`, `^${a2[o2.LONETILDE]}${a2[o2.XRANGEPLAIN]}$`), c2(`TILDELOOSE`, `^${a2[o2.LONETILDE]}${a2[o2.XRANGEPLAINLOOSE]}$`), c2(`LONECARET`, `(?:\\^)`), c2(`CARETTRIM`, `(\\s*)${a2[o2.LONECARET]}\\s+`, true), e2.caretTrimReplace = `$1^`, c2(`CARET`, `^${a2[o2.LONECARET]}${a2[o2.XRANGEPLAIN]}$`), c2(`CARETLOOSE`, `^${a2[o2.LONECARET]}${a2[o2.XRANGEPLAINLOOSE]}$`), c2(`COMPARATORLOOSE`, `^${a2[o2.GTLT]}\\s*(${a2[o2.LOOSEPLAIN]})$|^$`), c2(`COMPARATOR`, `^${a2[o2.GTLT]}\\s*(${a2[o2.FULLPLAIN]})$|^$`), c2(`COMPARATORTRIM`, `(\\s*)${a2[o2.GTLT]}\\s*(${a2[o2.LOOSEPLAIN]}|${a2[o2.XRANGEPLAIN]})`, true), e2.comparatorTrimReplace = `$1$2$3`, c2(`HYPHENRANGE`, `^\\s*(${a2[o2.XRANGEPLAIN]})\\s+-\\s+(${a2[o2.XRANGEPLAIN]})\\s*$`), c2(`HYPHENRANGELOOSE`, `^\\s*(${a2[o2.XRANGEPLAINLOOSE]})\\s+-\\s+(${a2[o2.XRANGEPLAINLOOSE]})\\s*$`), c2(`STAR`, `(<|>)?=?\\s*\\*`), c2(`GTE0`, `^\\s*>=\\s*0\\.0\\.0\\s*$`), c2(`GTE0PRE`, `^\\s*>=\\s*0\\.0\\.0-0\\s*$`);
  })), oe = n(((e2, t2) => {
    var n2 = [
      `includePrerelease`,
      `loose`,
      `rtl`
    ];
    t2.exports = (e3) => e3 ? typeof e3 == `object` ? n2.filter((t3) => e3[t3]).reduce((e4, t3) => (e4[t3] = true, e4), {}) : {
      loose: true
    } : {};
  })), se = n(((e2, t2) => {
    var n2 = /^[0-9]+$/, r2 = (e3, t3) => {
      let r3 = n2.test(e3), i2 = n2.test(t3);
      return r3 && i2 && (e3 = +e3, t3 = +t3), e3 === t3 ? 0 : r3 && !i2 ? -1 : i2 && !r3 ? 1 : e3 < t3 ? -1 : 1;
    };
    t2.exports = {
      compareIdentifiers: r2,
      rcompareIdentifiers: (e3, t3) => r2(t3, e3)
    };
  })), ce = n(((e2, t2) => {
    var n2 = F(), { MAX_LENGTH: r2, MAX_SAFE_INTEGER: i2 } = ie(), { re: a2, t: o2 } = ae(), s2 = oe(), { compareIdentifiers: c2 } = se();
    t2.exports = class e3 {
      constructor(t3, c3) {
        if (c3 = s2(c3), t3 instanceof e3) {
          if (t3.loose === !!c3.loose && t3.includePrerelease === !!c3.includePrerelease) return t3;
          t3 = t3.version;
        } else if (typeof t3 != `string`) throw TypeError(`Invalid Version: ${t3}`);
        if (t3.length > r2) throw TypeError(`version is longer than ${r2} characters`);
        n2(`SemVer`, t3, c3), this.options = c3, this.loose = !!c3.loose, this.includePrerelease = !!c3.includePrerelease;
        let l2 = t3.trim().match(c3.loose ? a2[o2.LOOSE] : a2[o2.FULL]);
        if (!l2) throw TypeError(`Invalid Version: ${t3}`);
        if (this.raw = t3, this.major = +l2[1], this.minor = +l2[2], this.patch = +l2[3], this.major > i2 || this.major < 0) throw TypeError(`Invalid major version`);
        if (this.minor > i2 || this.minor < 0) throw TypeError(`Invalid minor version`);
        if (this.patch > i2 || this.patch < 0) throw TypeError(`Invalid patch version`);
        l2[4] ? this.prerelease = l2[4].split(`.`).map((e4) => {
          if (/^[0-9]+$/.test(e4)) {
            let t4 = +e4;
            if (t4 >= 0 && t4 < i2) return t4;
          }
          return e4;
        }) : this.prerelease = [], this.build = l2[5] ? l2[5].split(`.`) : [], this.format();
      }
      format() {
        return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(`.`)}`), this.version;
      }
      toString() {
        return this.version;
      }
      compare(t3) {
        if (n2(`SemVer.compare`, this.version, this.options, t3), !(t3 instanceof e3)) {
          if (typeof t3 == `string` && t3 === this.version) return 0;
          t3 = new e3(t3, this.options);
        }
        return t3.version === this.version ? 0 : this.compareMain(t3) || this.comparePre(t3);
      }
      compareMain(t3) {
        return t3 instanceof e3 || (t3 = new e3(t3, this.options)), c2(this.major, t3.major) || c2(this.minor, t3.minor) || c2(this.patch, t3.patch);
      }
      comparePre(t3) {
        if (t3 instanceof e3 || (t3 = new e3(t3, this.options)), this.prerelease.length && !t3.prerelease.length) return -1;
        if (!this.prerelease.length && t3.prerelease.length) return 1;
        if (!this.prerelease.length && !t3.prerelease.length) return 0;
        let r3 = 0;
        do {
          let e4 = this.prerelease[r3], i3 = t3.prerelease[r3];
          if (n2(`prerelease compare`, r3, e4, i3), e4 === void 0 && i3 === void 0) return 0;
          if (i3 === void 0) return 1;
          if (e4 === void 0) return -1;
          if (e4 === i3) continue;
          return c2(e4, i3);
        } while (++r3);
      }
      compareBuild(t3) {
        t3 instanceof e3 || (t3 = new e3(t3, this.options));
        let r3 = 0;
        do {
          let e4 = this.build[r3], i3 = t3.build[r3];
          if (n2(`prerelease compare`, r3, e4, i3), e4 === void 0 && i3 === void 0) return 0;
          if (i3 === void 0) return 1;
          if (e4 === void 0) return -1;
          if (e4 === i3) continue;
          return c2(e4, i3);
        } while (++r3);
      }
      inc(e4, t3) {
        switch (e4) {
          case `premajor`:
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc(`pre`, t3);
            break;
          case `preminor`:
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc(`pre`, t3);
            break;
          case `prepatch`:
            this.prerelease.length = 0, this.inc(`patch`, t3), this.inc(`pre`, t3);
            break;
          case `prerelease`:
            this.prerelease.length === 0 && this.inc(`patch`, t3), this.inc(`pre`, t3);
            break;
          case `major`:
            (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case `minor`:
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case `patch`:
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case `pre`:
            if (this.prerelease.length === 0) this.prerelease = [
              0
            ];
            else {
              let e5 = this.prerelease.length;
              for (; --e5 >= 0; ) typeof this.prerelease[e5] == `number` && (this.prerelease[e5]++, e5 = -2);
              e5 === -1 && this.prerelease.push(0);
            }
            t3 && (c2(this.prerelease[0], t3) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [
              t3,
              0
            ]) : this.prerelease = [
              t3,
              0
            ]);
            break;
          default:
            throw Error(`invalid increment argument: ${e4}`);
        }
        return this.format(), this.raw = this.version, this;
      }
    };
  })), le = n(((e2, t2) => {
    var n2 = ce();
    t2.exports = (e3, t3, r2) => new n2(e3, r2).compare(new n2(t3, r2));
  })), ue = n(((e2, t2) => {
    var n2 = le();
    t2.exports = (e3, t3, r2) => n2(e3, t3, r2) >= 0;
  })), de = n(((e2, t2) => {
    var n2 = le();
    t2.exports = (e3, t3, r2) => n2(e3, t3, r2) <= 0;
  })), fe = n(((e2, t2) => {
    t2.exports = function(e3, t3) {
      if (e3 == null || e3.length === 0) return t3 == null || t3.length === 0 ? 0 : t3.length;
      if (t3 == null || t3.length === 0) return e3.length;
      for (var n2 = 0, r2 = 0, i2 = 0, a2 = 0, o2 = 5; n2 + r2 < e3.length && n2 + i2 < t3.length; ) {
        if (e3.charAt(n2 + r2) == t3.charAt(n2 + i2)) a2++;
        else {
          r2 = 0, i2 = 0;
          for (var s2 = 0; s2 < o2; s2++) {
            if (n2 + s2 < e3.length && e3.charAt(n2 + s2) == t3.charAt(n2)) {
              r2 = s2;
              break;
            }
            if (n2 + s2 < t3.length && e3.charAt(n2) == t3.charAt(n2 + s2)) {
              i2 = s2;
              break;
            }
          }
        }
        n2++;
      }
      return (e3.length + t3.length) / 2 - a2;
    };
  })), pe = n(((e2, t2) => {
    var n2 = /^(?:( )+|\t+)/;
    function r2(e3) {
      let t3 = 0, n3 = 0, r3 = 0;
      for (let [i2, [a2, o2]] of e3) (a2 > n3 || a2 === n3 && o2 > r3) && (n3 = a2, r3 = o2, t3 = i2);
      return t3;
    }
    t2.exports = (e3) => {
      if (typeof e3 != `string`) throw TypeError(`Expected a string`);
      let t3 = 0, i2, a2, o2 = /* @__PURE__ */ new Map();
      for (let r3 of e3.split(/\n/g)) {
        if (!r3) continue;
        let e4, s3, c3, l3, u3 = r3.match(n2);
        if (u3 === null) t3 = 0, i2 = ``;
        else {
          e4 = u3[0].length, s3 = u3[1] ? `s` : `t`, s3 !== i2 && (t3 = 0), i2 = s3, c3 = 0;
          let n3 = e4 - t3;
          t3 = e4, n3 === 0 ? c3++ : a2 = s3 + String(n3 > 0 ? n3 : -n3), l3 = o2.get(a2), l3 = l3 === void 0 ? [
            1,
            0
          ] : [
            ++l3[0],
            l3[1] + c3
          ], o2.set(a2, l3);
        }
      }
      let s2 = r2(o2), c2 = 0, l2, u2 = ``;
      return s2 !== 0 && (c2 = Number(s2.slice(1)), s2[0] === `s` ? (l2 = `space`, u2 = ` `.repeat(c2)) : (l2 = `tab`, u2 = `	`.repeat(c2))), {
        amount: c2,
        type: l2,
        indent: u2
      };
    };
  })), me = n(((e2) => {
    function t2(e3, t3, n2) {
      t3.split && (t3 = t3.split(`.`));
      for (var r2 = 0, i2 = t3.length, a2 = e3, o2, s2; r2 < i2 && (s2 = t3[r2++], !(s2 === `__proto__` || s2 === `constructor` || s2 === `prototype`)); ) a2 = a2[s2] = r2 === i2 ? n2 : typeof (o2 = a2[s2]) == typeof t3 ? o2 : t3[r2] * 0 != 0 || ~(`` + t3[r2]).indexOf(`.`) ? {} : [];
    }
    e2.dset = t2;
  })), he = n(((e2, t2) => {
    t2.exports = function(e3, t3) {
      for (var n2 = -1, r2 = []; (n2 = e3.indexOf(t3, n2 + 1)) !== -1; ) r2.push(n2);
      return r2;
    };
  })), ge = n(((e2, t2) => {
    function n2(e3, t3) {
      for (var n3 = 1, r3 = e3.length, i3 = e3[0], a2 = e3[0], o2 = 1; o2 < r3; ++o2) if (a2 = i3, i3 = e3[o2], t3(i3, a2)) {
        if (o2 === n3) {
          n3++;
          continue;
        }
        e3[n3++] = i3;
      }
      return e3.length = n3, e3;
    }
    function r2(e3) {
      for (var t3 = 1, n3 = e3.length, r3 = e3[0], i3 = e3[0], a2 = 1; a2 < n3; ++a2, i3 = r3) if (i3 = r3, r3 = e3[a2], r3 !== i3) {
        if (a2 === t3) {
          t3++;
          continue;
        }
        e3[t3++] = r3;
      }
      return e3.length = t3, e3;
    }
    function i2(e3, t3, i3) {
      return e3.length === 0 ? e3 : t3 ? (i3 || e3.sort(t3), n2(e3, t3)) : (i3 || e3.sort(), r2(e3));
    }
    t2.exports = i2;
  })), _e = n(((e2, t2) => {
    e2.__esModule = true, e2.default = i2;
    var n2 = `[\\x20\\t\\r\\n\\f]`, r2 = RegExp(`\\\\([\\da-f]{1,6}` + n2 + `?|(` + n2 + `)|.)`, `ig`);
    function i2(e3) {
      return e3.replace(r2, function(e4, t3, n3) {
        var r3 = `0x` + t3 - 65536;
        return r3 !== r3 || n3 ? t3 : r3 < 0 ? String.fromCharCode(r3 + 65536) : String.fromCharCode(r3 >> 10 | 55296, r3 & 1023 | 56320);
      });
    }
    t2.exports = e2.default;
  })), ve = n(((e2, t2) => {
    e2.__esModule = true, e2.default = n2;
    function n2(e3) {
      for (var t3 = [
        ...arguments
      ].slice(1); t3.length > 0; ) {
        var n3 = t3.shift();
        if (!e3[n3]) return;
        e3 = e3[n3];
      }
      return e3;
    }
    t2.exports = e2.default;
  })), ye = n(((e2, t2) => {
    e2.__esModule = true, e2.default = n2;
    function n2(e3) {
      for (var t3 = [
        ...arguments
      ].slice(1); t3.length > 0; ) {
        var n3 = t3.shift();
        e3[n3] || (e3[n3] = {}), e3 = e3[n3];
      }
    }
    t2.exports = e2.default;
  })), I = n(((e2, t2) => {
    e2.__esModule = true, e2.default = n2;
    function n2(e3) {
      for (var t3 = ``, n3 = e3.indexOf(`/*`), r2 = 0; n3 >= 0; ) {
        t3 += e3.slice(r2, n3);
        var i2 = e3.indexOf(`*/`, n3 + 2);
        if (i2 < 0) return t3;
        r2 = i2 + 2, n3 = e3.indexOf(`/*`, r2);
      }
      return t3 += e3.slice(r2), t3;
    }
    t2.exports = e2.default;
  })), be = n(((e2) => {
    e2.__esModule = true, e2.stripComments = e2.ensureObject = e2.getProp = e2.unesc = void 0, e2.unesc = t2(_e()).default, e2.getProp = t2(ve()).default, e2.ensureObject = t2(ye()).default, e2.stripComments = t2(I()).default;
    function t2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
  })), L = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = be();
    function r2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function i2(e3, t3, n3) {
      return t3 && r2(e3.prototype, t3), n3 && r2(e3, n3), e3;
    }
    var a2 = function e3(t3, n3) {
      if (typeof t3 != `object` || !t3) return t3;
      var r3 = new t3.constructor();
      for (var i3 in t3) if (t3.hasOwnProperty(i3)) {
        var a3 = t3[i3];
        i3 === `parent` && typeof a3 == `object` ? n3 && (r3[i3] = n3) : a3 instanceof Array ? r3[i3] = a3.map(function(t4) {
          return e3(t4, r3);
        }) : r3[i3] = e3(a3, r3);
      }
      return r3;
    };
    e2.default = (function() {
      function e3(e4) {
        e4 === void 0 && (e4 = {}), Object.assign(this, e4), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || ``, this.spaces.after = this.spaces.after || ``;
      }
      var t3 = e3.prototype;
      return t3.remove = function() {
        return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
      }, t3.replaceWith = function() {
        if (this.parent) {
          for (var e4 in arguments) this.parent.insertBefore(this, arguments[e4]);
          this.remove();
        }
        return this;
      }, t3.next = function() {
        return this.parent.at(this.parent.index(this) + 1);
      }, t3.prev = function() {
        return this.parent.at(this.parent.index(this) - 1);
      }, t3.clone = function(e4) {
        e4 === void 0 && (e4 = {});
        var t4 = a2(this);
        for (var n3 in e4) t4[n3] = e4[n3];
        return t4;
      }, t3.appendToPropertyAndEscape = function(e4, t4, n3) {
        this.raws || (this.raws = {});
        var r3 = this[e4], i3 = this.raws[e4];
        this[e4] = r3 + t4, i3 || n3 !== t4 ? this.raws[e4] = (i3 || r3) + n3 : delete this.raws[e4];
      }, t3.setPropertyAndEscape = function(e4, t4, n3) {
        this.raws || (this.raws = {}), this[e4] = t4, this.raws[e4] = n3;
      }, t3.setPropertyWithoutEscape = function(e4, t4) {
        this[e4] = t4, this.raws && delete this.raws[e4];
      }, t3.isAtPosition = function(e4, t4) {
        if (this.source && this.source.start && this.source.end) return !(this.source.start.line > e4 || this.source.end.line < e4 || this.source.start.line === e4 && this.source.start.column > t4 || this.source.end.line === e4 && this.source.end.column < t4);
      }, t3.stringifyProperty = function(e4) {
        return this.raws && this.raws[e4] || this[e4];
      }, t3.toString = function() {
        return [
          this.rawSpaceBefore,
          String(this.stringifyProperty(`value`)),
          this.rawSpaceAfter
        ].join(``);
      }, i2(e3, [
        {
          key: `rawSpaceBefore`,
          get: function() {
            var e4 = this.raws && this.raws.spaces && this.raws.spaces.before;
            return e4 === void 0 && (e4 = this.spaces && this.spaces.before), e4 || ``;
          },
          set: function(e4) {
            (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.before = e4;
          }
        },
        {
          key: `rawSpaceAfter`,
          get: function() {
            var e4 = this.raws && this.raws.spaces && this.raws.spaces.after;
            return e4 === void 0 && (e4 = this.spaces.after), e4 || ``;
          },
          set: function(e4) {
            (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.after = e4;
          }
        }
      ]), e3;
    })(), t2.exports = e2.default;
  })), R = n(((e2) => {
    e2.__esModule = true, e2.UNIVERSAL = e2.ATTRIBUTE = e2.CLASS = e2.COMBINATOR = e2.COMMENT = e2.ID = e2.NESTING = e2.PSEUDO = e2.ROOT = e2.SELECTOR = e2.STRING = e2.TAG = void 0, e2.TAG = `tag`, e2.STRING = `string`, e2.SELECTOR = `selector`, e2.ROOT = `root`, e2.PSEUDO = `pseudo`, e2.NESTING = `nesting`, e2.ID = `id`, e2.COMMENT = `comment`, e2.COMBINATOR = `combinator`, e2.CLASS = `class`, e2.ATTRIBUTE = `attribute`, e2.UNIVERSAL = `universal`;
  })), z = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = a2(L()), r2 = i2(R());
    function i2(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (e3 != null) {
        for (var n3 in e3) if (Object.prototype.hasOwnProperty.call(e3, n3)) {
          var r3 = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e3, n3) : {};
          r3.get || r3.set ? Object.defineProperty(t3, n3, r3) : t3[n3] = e3[n3];
        }
      }
      return t3.default = e3, t3;
    }
    function a2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function o2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function s2(e3, t3, n3) {
      return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), e3;
    }
    function c2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      c2(t3, e3);
      function t3(t4) {
        var n4 = e3.call(this, t4) || this;
        return n4.nodes || (n4.nodes = []), n4;
      }
      var n3 = t3.prototype;
      return n3.append = function(e4) {
        return e4.parent = this, this.nodes.push(e4), this;
      }, n3.prepend = function(e4) {
        return e4.parent = this, this.nodes.unshift(e4), this;
      }, n3.at = function(e4) {
        return this.nodes[e4];
      }, n3.index = function(e4) {
        return typeof e4 == `number` ? e4 : this.nodes.indexOf(e4);
      }, n3.removeChild = function(e4) {
        e4 = this.index(e4), this.at(e4).parent = void 0, this.nodes.splice(e4, 1);
        var t4;
        for (var n4 in this.indexes) t4 = this.indexes[n4], t4 >= e4 && (this.indexes[n4] = t4 - 1);
        return this;
      }, n3.removeAll = function() {
        for (var e4 = this.nodes, t4 = Array.isArray(e4), n4 = 0, e4 = t4 ? e4 : e4[Symbol.iterator](); ; ) {
          var r3;
          if (t4) {
            if (n4 >= e4.length) break;
            r3 = e4[n4++];
          } else {
            if (n4 = e4.next(), n4.done) break;
            r3 = n4.value;
          }
          var i3 = r3;
          i3.parent = void 0;
        }
        return this.nodes = [], this;
      }, n3.empty = function() {
        return this.removeAll();
      }, n3.insertAfter = function(e4, t4) {
        t4.parent = this;
        var n4 = this.index(e4);
        this.nodes.splice(n4 + 1, 0, t4), t4.parent = this;
        var r3;
        for (var i3 in this.indexes) r3 = this.indexes[i3], n4 <= r3 && (this.indexes[i3] = r3 + 1);
        return this;
      }, n3.insertBefore = function(e4, t4) {
        t4.parent = this;
        var n4 = this.index(e4);
        this.nodes.splice(n4, 0, t4), t4.parent = this;
        var r3;
        for (var i3 in this.indexes) r3 = this.indexes[i3], r3 <= n4 && (this.indexes[i3] = r3 + 1);
        return this;
      }, n3._findChildAtPosition = function(e4, t4) {
        var n4 = void 0;
        return this.each(function(r3) {
          if (r3.atPosition) {
            var i3 = r3.atPosition(e4, t4);
            if (i3) return n4 = i3, false;
          } else if (r3.isAtPosition(e4, t4)) return n4 = r3, false;
        }), n4;
      }, n3.atPosition = function(e4, t4) {
        if (this.isAtPosition(e4, t4)) return this._findChildAtPosition(e4, t4) || this;
      }, n3._inferEndPosition = function() {
        this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
      }, n3.each = function(e4) {
        this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
        var t4 = this.lastEach;
        if (this.indexes[t4] = 0, this.length) {
          for (var n4, r3; this.indexes[t4] < this.length && (n4 = this.indexes[t4], r3 = e4(this.at(n4), n4), r3 !== false); ) this.indexes[t4] += 1;
          if (delete this.indexes[t4], r3 === false) return false;
        }
      }, n3.walk = function(e4) {
        return this.each(function(t4, n4) {
          var r3 = e4(t4, n4);
          if (r3 !== false && t4.length && (r3 = t4.walk(e4)), r3 === false) return false;
        });
      }, n3.walkAttributes = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.ATTRIBUTE) return e4.call(t4, n4);
        });
      }, n3.walkClasses = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.CLASS) return e4.call(t4, n4);
        });
      }, n3.walkCombinators = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.COMBINATOR) return e4.call(t4, n4);
        });
      }, n3.walkComments = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.COMMENT) return e4.call(t4, n4);
        });
      }, n3.walkIds = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.ID) return e4.call(t4, n4);
        });
      }, n3.walkNesting = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.NESTING) return e4.call(t4, n4);
        });
      }, n3.walkPseudos = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.PSEUDO) return e4.call(t4, n4);
        });
      }, n3.walkTags = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.TAG) return e4.call(t4, n4);
        });
      }, n3.walkUniversals = function(e4) {
        var t4 = this;
        return this.walk(function(n4) {
          if (n4.type === r2.UNIVERSAL) return e4.call(t4, n4);
        });
      }, n3.split = function(e4) {
        var t4 = this, n4 = [];
        return this.reduce(function(r3, i3, a3) {
          var o3 = e4.call(t4, i3);
          return n4.push(i3), o3 ? (r3.push(n4), n4 = []) : a3 === t4.length - 1 && r3.push(n4), r3;
        }, []);
      }, n3.map = function(e4) {
        return this.nodes.map(e4);
      }, n3.reduce = function(e4, t4) {
        return this.nodes.reduce(e4, t4);
      }, n3.every = function(e4) {
        return this.nodes.every(e4);
      }, n3.some = function(e4) {
        return this.nodes.some(e4);
      }, n3.filter = function(e4) {
        return this.nodes.filter(e4);
      }, n3.sort = function(e4) {
        return this.nodes.sort(e4);
      }, n3.toString = function() {
        return this.map(String).join(``);
      }, s2(t3, [
        {
          key: `first`,
          get: function() {
            return this.at(0);
          }
        },
        {
          key: `last`,
          get: function() {
            return this.at(this.length - 1);
          }
        },
        {
          key: `length`,
          get: function() {
            return this.nodes.length;
          }
        }
      ]), t3;
    })(n2.default), t2.exports = e2.default;
  })), xe = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(z()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function o2(e3, t3, n3) {
      return t3 && a2(e3.prototype, t3), n3 && a2(e3, n3), e3;
    }
    function s2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      s2(t3, e3);
      function t3(t4) {
        var n4 = e3.call(this, t4) || this;
        return n4.type = r2.ROOT, n4;
      }
      var n3 = t3.prototype;
      return n3.toString = function() {
        var e4 = this.reduce(function(e5, t4) {
          return e5.push(String(t4)), e5;
        }, []).join(`,`);
        return this.trailingComma ? e4 + `,` : e4;
      }, n3.error = function(e4, t4) {
        return this._error ? this._error(e4, t4) : Error(e4);
      }, o2(t3, [
        {
          key: `errorGenerator`,
          set: function(e4) {
            this._error = e4;
          }
        }
      ]), t3;
    })(n2.default), t2.exports = e2.default;
  })), Se = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(z()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.SELECTOR, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), B = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = o2(m()), r2 = be(), i2 = o2(L()), a2 = R();
    function o2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function s2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function c2(e3, t3, n3) {
      return t3 && s2(e3.prototype, t3), n3 && s2(e3, n3), e3;
    }
    function l2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      l2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = a2.CLASS, n3._constructed = true, n3;
      }
      var i3 = t3.prototype;
      return i3.toString = function() {
        return [
          this.rawSpaceBefore,
          String(`.` + this.stringifyProperty(`value`)),
          this.rawSpaceAfter
        ].join(``);
      }, c2(t3, [
        {
          key: `value`,
          set: function(e4) {
            if (this._constructed) {
              var t4 = (0, n2.default)(e4, {
                isIdentifier: true
              });
              t4 === e4 ? this.raws && delete this.raws.value : ((0, r2.ensureObject)(this, `raws`), this.raws.value = t4);
            }
            this._value = e4;
          },
          get: function() {
            return this._value;
          }
        }
      ]), t3;
    })(i2.default), t2.exports = e2.default;
  })), Ce = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(L()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.COMMENT, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), V = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(L()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n4 = e3.call(this, t4) || this;
        return n4.type = r2.ID, n4;
      }
      var n3 = t3.prototype;
      return n3.toString = function() {
        return [
          this.rawSpaceBefore,
          String(`#` + this.stringifyProperty(`value`)),
          this.rawSpaceAfter
        ].join(``);
      }, t3;
    })(n2.default), t2.exports = e2.default;
  })), H = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = a2(m()), r2 = be(), i2 = a2(L());
    function a2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function o2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function s2(e3, t3, n3) {
      return t3 && o2(e3.prototype, t3), n3 && o2(e3, n3), e3;
    }
    function c2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      c2(t3, e3);
      function t3() {
        return e3.apply(this, arguments) || this;
      }
      var i3 = t3.prototype;
      return i3.qualifiedName = function(e4) {
        return this.namespace ? this.namespaceString + `|` + e4 : e4;
      }, i3.toString = function() {
        return [
          this.rawSpaceBefore,
          this.qualifiedName(this.stringifyProperty(`value`)),
          this.rawSpaceAfter
        ].join(``);
      }, s2(t3, [
        {
          key: `namespace`,
          get: function() {
            return this._namespace;
          },
          set: function(e4) {
            if (e4 === true || e4 === `*` || e4 === `&`) {
              this._namespace = e4, this.raws && delete this.raws.namespace;
              return;
            }
            var t4 = (0, n2.default)(e4, {
              isIdentifier: true
            });
            this._namespace = e4, t4 === e4 ? this.raws && delete this.raws.namespace : ((0, r2.ensureObject)(this, `raws`), this.raws.namespace = t4);
          }
        },
        {
          key: `ns`,
          get: function() {
            return this._namespace;
          },
          set: function(e4) {
            this.namespace = e4;
          }
        },
        {
          key: `namespaceString`,
          get: function() {
            if (this.namespace) {
              var e4 = this.stringifyProperty(`namespace`);
              return e4 === true ? `` : e4;
            } else return ``;
          }
        }
      ]), t3;
    })(i2.default), t2.exports = e2.default;
  })), we = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(H()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.TAG, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), Te = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(L()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.STRING, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), U = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(z()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n4 = e3.call(this, t4) || this;
        return n4.type = r2.PSEUDO, n4;
      }
      var n3 = t3.prototype;
      return n3.toString = function() {
        var e4 = this.length ? `(` + this.map(String).join(`,`) + `)` : ``;
        return [
          this.rawSpaceBefore,
          this.stringifyProperty(`value`),
          e4,
          this.rawSpaceAfter
        ].join(``);
      }, t3;
    })(n2.default), t2.exports = e2.default;
  })), W = n(((e2) => {
    e2.__esModule = true, e2.unescapeValue = _2, e2.default = void 0;
    var t2 = o2(m()), n2 = o2(_e()), r2 = o2(H()), i2 = R(), a2;
    function o2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function c2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function l2(e3, t3, n3) {
      return t3 && c2(e3.prototype, t3), n3 && c2(e3, n3), e3;
    }
    function u2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    var d2 = s().deprecate, f2 = /^('|")(.*)\1$/, p2 = d2(function() {
    }, `Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.`), h2 = d2(function() {
    }, `Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.`), g2 = d2(function() {
    }, `Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.`);
    function _2(e3) {
      var t3 = false, r3 = null, i3 = e3, a3 = i3.match(f2);
      return a3 && (r3 = a3[1], i3 = a3[2]), i3 = (0, n2.default)(i3), i3 !== e3 && (t3 = true), {
        deprecatedUsage: t3,
        unescaped: i3,
        quoteMark: r3
      };
    }
    function v2(e3) {
      if (e3.quoteMark !== void 0 || e3.value === void 0) return e3;
      g2();
      var t3 = _2(e3.value), n3 = t3.quoteMark, r3 = t3.unescaped;
      return e3.raws || (e3.raws = {}), e3.raws.value === void 0 && (e3.raws.value = e3.value), e3.value = r3, e3.quoteMark = n3, e3;
    }
    var y2 = (function(e3) {
      u2(n3, e3);
      function n3(t3) {
        var n4;
        return t3 === void 0 && (t3 = {}), n4 = e3.call(this, v2(t3)) || this, n4.type = i2.ATTRIBUTE, n4.raws = n4.raws || {}, Object.defineProperty(n4.raws, `unquoted`, {
          get: d2(function() {
            return n4.value;
          }, `attr.raws.unquoted is deprecated. Call attr.value instead.`),
          set: d2(function() {
            return n4.value;
          }, `Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.`)
        }), n4._constructed = true, n4;
      }
      var r3 = n3.prototype;
      return r3.getQuotedValue = function(e4) {
        e4 === void 0 && (e4 = {});
        var n4 = b2[this._determineQuoteMark(e4)];
        return (0, t2.default)(this._value, n4);
      }, r3._determineQuoteMark = function(e4) {
        return e4.smart ? this.smartQuoteMark(e4) : this.preferredQuoteMark(e4);
      }, r3.setValue = function(e4, t3) {
        t3 === void 0 && (t3 = {}), this._value = e4, this._quoteMark = this._determineQuoteMark(t3), this._syncRawValue();
      }, r3.smartQuoteMark = function(e4) {
        var r4 = this.value, i3 = r4.replace(/[^']/g, ``).length, a3 = r4.replace(/[^"]/g, ``).length;
        if (i3 + a3 === 0) {
          var o3 = (0, t2.default)(r4, {
            isIdentifier: true
          });
          if (o3 === r4) return n3.NO_QUOTE;
          var s2 = this.preferredQuoteMark(e4);
          if (s2 === n3.NO_QUOTE) {
            var c3 = this.quoteMark || e4.quoteMark || n3.DOUBLE_QUOTE, l3 = b2[c3];
            if ((0, t2.default)(r4, l3).length < o3.length) return c3;
          }
          return s2;
        } else if (a3 === i3) return this.preferredQuoteMark(e4);
        else if (a3 < i3) return n3.DOUBLE_QUOTE;
        else return n3.SINGLE_QUOTE;
      }, r3.preferredQuoteMark = function(e4) {
        var t3 = e4.preferCurrentQuoteMark ? this.quoteMark : e4.quoteMark;
        return t3 === void 0 && (t3 = e4.preferCurrentQuoteMark ? e4.quoteMark : this.quoteMark), t3 === void 0 && (t3 = n3.DOUBLE_QUOTE), t3;
      }, r3._syncRawValue = function() {
        var e4 = (0, t2.default)(this._value, b2[this.quoteMark]);
        e4 === this._value ? this.raws && delete this.raws.value : this.raws.value = e4;
      }, r3._handleEscapes = function(e4, n4) {
        if (this._constructed) {
          var r4 = (0, t2.default)(n4, {
            isIdentifier: true
          });
          r4 === n4 ? delete this.raws[e4] : this.raws[e4] = r4;
        }
      }, r3._spacesFor = function(e4) {
        var t3 = {
          before: ``,
          after: ``
        }, n4 = this.spaces[e4] || {}, r4 = this.raws.spaces && this.raws.spaces[e4] || {};
        return Object.assign(t3, n4, r4);
      }, r3._stringFor = function(e4, t3, n4) {
        t3 === void 0 && (t3 = e4), n4 === void 0 && (n4 = x2);
        var r4 = this._spacesFor(t3);
        return n4(this.stringifyProperty(e4), r4);
      }, r3.offsetOf = function(e4) {
        var t3 = 1, n4 = this._spacesFor(`attribute`);
        if (t3 += n4.before.length, e4 === `namespace` || e4 === `ns`) return this.namespace ? t3 : -1;
        if (e4 === `attributeNS` || (t3 += this.namespaceString.length, this.namespace && (t3 += 1), e4 === `attribute`)) return t3;
        t3 += this.stringifyProperty(`attribute`).length, t3 += n4.after.length;
        var r4 = this._spacesFor(`operator`);
        t3 += r4.before.length;
        var i3 = this.stringifyProperty(`operator`);
        if (e4 === `operator`) return i3 ? t3 : -1;
        t3 += i3.length, t3 += r4.after.length;
        var a3 = this._spacesFor(`value`);
        t3 += a3.before.length;
        var o3 = this.stringifyProperty(`value`);
        if (e4 === `value`) return o3 ? t3 : -1;
        t3 += o3.length, t3 += a3.after.length;
        var s2 = this._spacesFor(`insensitive`);
        return t3 += s2.before.length, e4 === `insensitive` && this.insensitive ? t3 : -1;
      }, r3.toString = function() {
        var e4 = this, t3 = [
          this.rawSpaceBefore,
          `[`
        ];
        return t3.push(this._stringFor(`qualifiedAttribute`, `attribute`)), this.operator && (this.value || this.value === ``) && (t3.push(this._stringFor(`operator`)), t3.push(this._stringFor(`value`)), t3.push(this._stringFor(`insensitiveFlag`, `insensitive`, function(t4, n4) {
          return t4.length > 0 && !e4.quoted && n4.before.length === 0 && !(e4.spaces.value && e4.spaces.value.after) && (n4.before = ` `), x2(t4, n4);
        }))), t3.push(`]`), t3.push(this.rawSpaceAfter), t3.join(``);
      }, l2(n3, [
        {
          key: `quoted`,
          get: function() {
            var e4 = this.quoteMark;
            return e4 === `'` || e4 === `"`;
          },
          set: function(e4) {
            h2();
          }
        },
        {
          key: `quoteMark`,
          get: function() {
            return this._quoteMark;
          },
          set: function(e4) {
            if (!this._constructed) {
              this._quoteMark = e4;
              return;
            }
            this._quoteMark !== e4 && (this._quoteMark = e4, this._syncRawValue());
          }
        },
        {
          key: `qualifiedAttribute`,
          get: function() {
            return this.qualifiedName(this.raws.attribute || this.attribute);
          }
        },
        {
          key: `insensitiveFlag`,
          get: function() {
            return this.insensitive ? `i` : ``;
          }
        },
        {
          key: `value`,
          get: function() {
            return this._value;
          },
          set: function(e4) {
            if (this._constructed) {
              var t3 = _2(e4), n4 = t3.deprecatedUsage, r4 = t3.unescaped, i3 = t3.quoteMark;
              if (n4 && p2(), r4 === this._value && i3 === this._quoteMark) return;
              this._value = r4, this._quoteMark = i3, this._syncRawValue();
            } else this._value = e4;
          }
        },
        {
          key: `attribute`,
          get: function() {
            return this._attribute;
          },
          set: function(e4) {
            this._handleEscapes(`attribute`, e4), this._attribute = e4;
          }
        }
      ]), n3;
    })(r2.default);
    e2.default = y2, y2.NO_QUOTE = null, y2.SINGLE_QUOTE = `'`, y2.DOUBLE_QUOTE = `"`;
    var b2 = (a2 = {
      "'": {
        quotes: `single`,
        wrap: true
      },
      '"': {
        quotes: `double`,
        wrap: true
      }
    }, a2[null] = {
      isIdentifier: true
    }, a2);
    function x2(e3, t3) {
      return `` + t3.before + e3 + t3.after;
    }
  })), Ee = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(H()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.UNIVERSAL, n3.value = `*`, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), De = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(L()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.COMBINATOR, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), G = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = i2(L()), r2 = R();
    function i2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function a2(e3, t3) {
      e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, e3.__proto__ = t3;
    }
    e2.default = (function(e3) {
      a2(t3, e3);
      function t3(t4) {
        var n3 = e3.call(this, t4) || this;
        return n3.type = r2.NESTING, n3.value = `&`, n3;
      }
      return t3;
    })(n2.default), t2.exports = e2.default;
  })), K = n(((e2, t2) => {
    e2.__esModule = true, e2.default = n2;
    function n2(e3) {
      return e3.sort(function(e4, t3) {
        return e4 - t3;
      });
    }
    t2.exports = e2.default;
  })), Oe = n(((e2) => {
    e2.__esModule = true, e2.combinator = e2.word = e2.comment = e2.str = e2.tab = e2.newline = e2.feed = e2.cr = e2.backslash = e2.bang = e2.slash = e2.doubleQuote = e2.singleQuote = e2.space = e2.greaterThan = e2.pipe = e2.equals = e2.plus = e2.caret = e2.tilde = e2.dollar = e2.closeSquare = e2.openSquare = e2.closeParenthesis = e2.openParenthesis = e2.semicolon = e2.colon = e2.comma = e2.at = e2.asterisk = e2.ampersand = void 0, e2.ampersand = 38, e2.asterisk = 42, e2.at = 64, e2.comma = 44, e2.colon = 58, e2.semicolon = 59, e2.openParenthesis = 40, e2.closeParenthesis = 41, e2.openSquare = 91, e2.closeSquare = 93, e2.dollar = 36, e2.tilde = 126, e2.caret = 94, e2.plus = 43, e2.equals = 61, e2.pipe = 124, e2.greaterThan = 62, e2.space = 32;
    var t2 = 39;
    e2.singleQuote = t2, e2.doubleQuote = 34, e2.slash = 47, e2.bang = 33, e2.backslash = 92, e2.cr = 13, e2.feed = 12, e2.newline = 10, e2.tab = 9, e2.str = t2, e2.comment = -1, e2.word = -2, e2.combinator = -3;
  })), ke = n(((e2) => {
    e2.__esModule = true, e2.default = f2, e2.FIELDS = void 0;
    var t2 = i2(Oe()), n2, r2;
    function i2(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (e3 != null) {
        for (var n3 in e3) if (Object.prototype.hasOwnProperty.call(e3, n3)) {
          var r3 = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e3, n3) : {};
          r3.get || r3.set ? Object.defineProperty(t3, n3, r3) : t3[n3] = e3[n3];
        }
      }
      return t3.default = e3, t3;
    }
    for (var a2 = (n2 = {}, n2[t2.tab] = true, n2[t2.newline] = true, n2[t2.cr] = true, n2[t2.feed] = true, n2), o2 = (r2 = {}, r2[t2.space] = true, r2[t2.tab] = true, r2[t2.newline] = true, r2[t2.cr] = true, r2[t2.feed] = true, r2[t2.ampersand] = true, r2[t2.asterisk] = true, r2[t2.bang] = true, r2[t2.comma] = true, r2[t2.colon] = true, r2[t2.semicolon] = true, r2[t2.openParenthesis] = true, r2[t2.closeParenthesis] = true, r2[t2.openSquare] = true, r2[t2.closeSquare] = true, r2[t2.singleQuote] = true, r2[t2.doubleQuote] = true, r2[t2.plus] = true, r2[t2.pipe] = true, r2[t2.tilde] = true, r2[t2.greaterThan] = true, r2[t2.equals] = true, r2[t2.dollar] = true, r2[t2.caret] = true, r2[t2.slash] = true, r2), s2 = {}, c2 = `0123456789abcdefABCDEF`, l2 = 0; l2 < c2.length; l2++) s2[c2.charCodeAt(l2)] = true;
    function u2(e3, n3) {
      var r3 = n3, i3;
      do {
        if (i3 = e3.charCodeAt(r3), o2[i3]) return r3 - 1;
        i3 === t2.backslash ? r3 = d2(e3, r3) + 1 : r3++;
      } while (r3 < e3.length);
      return r3 - 1;
    }
    function d2(e3, n3) {
      var r3 = n3, i3 = e3.charCodeAt(r3 + 1);
      if (!a2[i3]) if (s2[i3]) {
        var o3 = 0;
        do
          r3++, o3++, i3 = e3.charCodeAt(r3 + 1);
        while (s2[i3] && o3 < 6);
        o3 < 6 && i3 === t2.space && r3++;
      } else r3++;
      return r3;
    }
    e2.FIELDS = {
      TYPE: 0,
      START_LINE: 1,
      START_COL: 2,
      END_LINE: 3,
      END_COL: 4,
      START_POS: 5,
      END_POS: 6
    };
    function f2(e3) {
      var n3 = [], r3 = e3.css.valueOf(), i3 = r3.length, a3 = -1, o3 = 1, s3 = 0, c3 = 0, l3, d3, f3, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2;
      function C2(t3, n4) {
        if (e3.safe) r3 += n4, v2 = r3.length - 1;
        else throw e3.error(`Unclosed ` + t3, o3, s3 - a3, s3);
      }
      for (; s3 < i3; ) {
        switch (l3 = r3.charCodeAt(s3), l3 === t2.newline && (a3 = s3, o3 += 1), l3) {
          case t2.space:
          case t2.tab:
          case t2.newline:
          case t2.cr:
          case t2.feed:
            v2 = s3;
            do
              v2 += 1, l3 = r3.charCodeAt(v2), l3 === t2.newline && (a3 = v2, o3 += 1);
            while (l3 === t2.space || l3 === t2.newline || l3 === t2.tab || l3 === t2.cr || l3 === t2.feed);
            S2 = t2.space, p2 = o3, f3 = v2 - a3 - 1, c3 = v2;
            break;
          case t2.plus:
          case t2.greaterThan:
          case t2.tilde:
          case t2.pipe:
            v2 = s3;
            do
              v2 += 1, l3 = r3.charCodeAt(v2);
            while (l3 === t2.plus || l3 === t2.greaterThan || l3 === t2.tilde || l3 === t2.pipe);
            S2 = t2.combinator, p2 = o3, f3 = s3 - a3, c3 = v2;
            break;
          case t2.asterisk:
          case t2.ampersand:
          case t2.bang:
          case t2.comma:
          case t2.equals:
          case t2.dollar:
          case t2.caret:
          case t2.openSquare:
          case t2.closeSquare:
          case t2.colon:
          case t2.semicolon:
          case t2.openParenthesis:
          case t2.closeParenthesis:
            v2 = s3, S2 = l3, p2 = o3, f3 = s3 - a3, c3 = v2 + 1;
            break;
          case t2.singleQuote:
          case t2.doubleQuote:
            x2 = l3 === t2.singleQuote ? `'` : `"`, v2 = s3;
            do
              for (m2 = false, v2 = r3.indexOf(x2, v2 + 1), v2 === -1 && C2(`quote`, x2), h2 = v2; r3.charCodeAt(h2 - 1) === t2.backslash; ) --h2, m2 = !m2;
            while (m2);
            S2 = t2.str, p2 = o3, f3 = s3 - a3, c3 = v2 + 1;
            break;
          default:
            l3 === t2.slash && r3.charCodeAt(s3 + 1) === t2.asterisk ? (v2 = r3.indexOf(`*/`, s3 + 2) + 1, v2 === 0 && C2(`comment`, `*/`), d3 = r3.slice(s3, v2 + 1), _2 = d3.split(`
`), g2 = _2.length - 1, g2 > 0 ? (y2 = o3 + g2, b2 = v2 - _2[g2].length) : (y2 = o3, b2 = a3), S2 = t2.comment, o3 = y2, p2 = y2, f3 = v2 - b2) : l3 === t2.slash ? (v2 = s3, S2 = l3, p2 = o3, f3 = s3 - a3, c3 = v2 + 1) : (v2 = u2(r3, s3), S2 = t2.word, p2 = o3, f3 = v2 - a3), c3 = v2 + 1;
            break;
        }
        n3.push([
          S2,
          o3,
          s3 - a3,
          p2,
          f3,
          s3,
          c3
        ]), b2 && (b2 = (a3 = b2, null)), s3 = c3;
      }
      return n3;
    }
  })), Ae = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = w2(he()), r2 = w2(ge()), i2 = w2(xe()), a2 = w2(Se()), o2 = w2(B()), s2 = w2(Ce()), c2 = w2(V()), l2 = w2(we()), u2 = w2(Te()), d2 = w2(U()), f2 = C2(W()), p2 = w2(Ee()), m2 = w2(De()), h2 = w2(G()), g2 = w2(K()), _2 = C2(ke()), v2 = C2(Oe()), y2 = C2(R()), b2 = be(), x2, S2;
    function C2(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (e3 != null) {
        for (var n3 in e3) if (Object.prototype.hasOwnProperty.call(e3, n3)) {
          var r3 = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e3, n3) : {};
          r3.get || r3.set ? Object.defineProperty(t3, n3, r3) : t3[n3] = e3[n3];
        }
      }
      return t3.default = e3, t3;
    }
    function w2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    function T2(e3, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
      }
    }
    function E2(e3, t3, n3) {
      return t3 && T2(e3.prototype, t3), n3 && T2(e3, n3), e3;
    }
    var D2 = (x2 = {}, x2[v2.space] = true, x2[v2.cr] = true, x2[v2.feed] = true, x2[v2.newline] = true, x2[v2.tab] = true, x2), O2 = Object.assign({}, D2, (S2 = {}, S2[v2.comment] = true, S2));
    function k2(e3) {
      return {
        line: e3[_2.FIELDS.START_LINE],
        column: e3[_2.FIELDS.START_COL]
      };
    }
    function A2(e3) {
      return {
        line: e3[_2.FIELDS.END_LINE],
        column: e3[_2.FIELDS.END_COL]
      };
    }
    function j2(e3, t3, n3, r3) {
      return {
        start: {
          line: e3,
          column: t3
        },
        end: {
          line: n3,
          column: r3
        }
      };
    }
    function M2(e3) {
      return j2(e3[_2.FIELDS.START_LINE], e3[_2.FIELDS.START_COL], e3[_2.FIELDS.END_LINE], e3[_2.FIELDS.END_COL]);
    }
    function N2(e3, t3) {
      if (e3) return j2(e3[_2.FIELDS.START_LINE], e3[_2.FIELDS.START_COL], t3[_2.FIELDS.END_LINE], t3[_2.FIELDS.END_COL]);
    }
    function P2(e3, t3) {
      var n3 = e3[t3];
      if (typeof n3 == `string`) return n3.indexOf(`\\`) !== -1 && ((0, b2.ensureObject)(e3, `raws`), e3[t3] = (0, b2.unesc)(n3), e3.raws[t3] === void 0 && (e3.raws[t3] = n3)), e3;
    }
    e2.default = (function() {
      function e3(e4, t4) {
        t4 === void 0 && (t4 = {}), this.rule = e4, this.options = Object.assign({
          lossy: false,
          safe: false
        }, t4), this.position = 0, this.css = typeof this.rule == `string` ? this.rule : this.rule.selector, this.tokens = (0, _2.default)({
          css: this.css,
          error: this._errorGenerator(),
          safe: this.options.safe
        });
        var n3 = N2(this.tokens[0], this.tokens[this.tokens.length - 1]);
        this.root = new i2.default({
          source: n3
        }), this.root.errorGenerator = this._errorGenerator();
        var r3 = new a2.default({
          source: {
            start: {
              line: 1,
              column: 1
            }
          }
        });
        this.root.append(r3), this.current = r3, this.loop();
      }
      var t3 = e3.prototype;
      return t3._errorGenerator = function() {
        var e4 = this;
        return function(t4, n3) {
          return typeof e4.rule == `string` ? Error(t4) : e4.rule.error(t4, n3);
        };
      }, t3.attribute = function() {
        var e4 = [], t4 = this.currToken;
        for (this.position++; this.position < this.tokens.length && this.currToken[_2.FIELDS.TYPE] !== v2.closeSquare; ) e4.push(this.currToken), this.position++;
        if (this.currToken[_2.FIELDS.TYPE] !== v2.closeSquare) return this.expected(`closing square bracket`, this.currToken[_2.FIELDS.START_POS]);
        var n3 = e4.length, r3 = {
          source: j2(t4[1], t4[2], this.currToken[3], this.currToken[4]),
          sourceIndex: t4[_2.FIELDS.START_POS]
        };
        if (n3 === 1 && !~[
          v2.word
        ].indexOf(e4[0][_2.FIELDS.TYPE])) return this.expected(`attribute`, e4[0][_2.FIELDS.START_POS]);
        for (var i3 = 0, a3 = ``, o3 = ``, s3 = null, c3 = false; i3 < n3; ) {
          var l3 = e4[i3], u3 = this.content(l3), d3 = e4[i3 + 1];
          switch (l3[_2.FIELDS.TYPE]) {
            case v2.space:
              if (c3 = true, this.options.lossy) break;
              if (s3) {
                (0, b2.ensureObject)(r3, `spaces`, s3);
                var p3 = r3.spaces[s3].after || ``;
                r3.spaces[s3].after = p3 + u3;
                var m3 = (0, b2.getProp)(r3, `raws`, `spaces`, s3, `after`) || null;
                m3 && (r3.raws.spaces[s3].after = m3 + u3);
              } else a3 += u3, o3 += u3;
              break;
            case v2.asterisk:
              d3[_2.FIELDS.TYPE] === v2.equals ? (r3.operator = u3, s3 = `operator`) : (!r3.namespace || s3 === `namespace` && !c3) && d3 && (a3 && (a3 = ((0, b2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, ``)), o3 && (o3 = ((0, b2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = a3, ``)), r3.namespace = (r3.namespace || ``) + u3, (0, b2.getProp)(r3, `raws`, `namespace`) && (r3.raws.namespace += u3), s3 = `namespace`), c3 = false;
              break;
            case v2.dollar:
              if (s3 === `value`) {
                var h3 = (0, b2.getProp)(r3, `raws`, `value`);
                r3.value += `$`, h3 && (r3.raws.value = h3 + `$`);
                break;
              }
            case v2.caret:
              d3[_2.FIELDS.TYPE] === v2.equals && (r3.operator = u3, s3 = `operator`), c3 = false;
              break;
            case v2.combinator:
              if (u3 === `~` && d3[_2.FIELDS.TYPE] === v2.equals && (r3.operator = u3, s3 = `operator`), u3 !== `|`) {
                c3 = false;
                break;
              }
              d3[_2.FIELDS.TYPE] === v2.equals ? (r3.operator = u3, s3 = `operator`) : !r3.namespace && !r3.attribute && (r3.namespace = true), c3 = false;
              break;
            case v2.word:
              if (d3 && this.content(d3) === `|` && e4[i3 + 2] && e4[i3 + 2][_2.FIELDS.TYPE] !== v2.equals && !r3.operator && !r3.namespace) r3.namespace = u3, s3 = `namespace`;
              else if (!r3.attribute || s3 === `attribute` && !c3) a3 && (a3 = ((0, b2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, ``)), o3 && (o3 = ((0, b2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = o3, ``)), r3.attribute = (r3.attribute || ``) + u3, (0, b2.getProp)(r3, `raws`, `attribute`) && (r3.raws.attribute += u3), s3 = `attribute`;
              else if (!r3.value && r3.value !== `` || s3 === `value` && !c3) {
                var g3 = (0, b2.unesc)(u3), y3 = (0, b2.getProp)(r3, `raws`, `value`) || ``, x3 = r3.value || ``;
                r3.value = x3 + g3, r3.quoteMark = null, (g3 !== u3 || y3) && ((0, b2.ensureObject)(r3, `raws`), r3.raws.value = (y3 || x3) + u3), s3 = `value`;
              } else {
                var S3 = u3 === `i` || u3 === `I`;
                (r3.value || r3.value === ``) && (r3.quoteMark || c3) ? (r3.insensitive = S3, (!S3 || u3 === `I`) && ((0, b2.ensureObject)(r3, `raws`), r3.raws.insensitiveFlag = u3), s3 = `insensitive`, a3 && (a3 = ((0, b2.ensureObject)(r3, `spaces`, `insensitive`), r3.spaces.insensitive.before = a3, ``)), o3 && (o3 = ((0, b2.ensureObject)(r3, `raws`, `spaces`, `insensitive`), r3.raws.spaces.insensitive.before = o3, ``))) : (r3.value || r3.value === ``) && (s3 = `value`, r3.value += u3, r3.raws.value && (r3.raws.value += u3));
              }
              c3 = false;
              break;
            case v2.str:
              if (!r3.attribute || !r3.operator) return this.error(`Expected an attribute followed by an operator preceding the string.`, {
                index: l3[_2.FIELDS.START_POS]
              });
              var C3 = (0, f2.unescapeValue)(u3), w3 = C3.unescaped, T3 = C3.quoteMark;
              r3.value = w3, r3.quoteMark = T3, s3 = `value`, (0, b2.ensureObject)(r3, `raws`), r3.raws.value = u3, c3 = false;
              break;
            case v2.equals:
              if (!r3.attribute) return this.expected(`attribute`, l3[_2.FIELDS.START_POS], u3);
              if (r3.value) return this.error(`Unexpected "=" found; an operator was already defined.`, {
                index: l3[_2.FIELDS.START_POS]
              });
              r3.operator = r3.operator ? r3.operator + u3 : u3, s3 = `operator`, c3 = false;
              break;
            case v2.comment:
              if (s3) if (c3 || d3 && d3[_2.FIELDS.TYPE] === v2.space || s3 === `insensitive`) {
                var E3 = (0, b2.getProp)(r3, `spaces`, s3, `after`) || ``, D3 = (0, b2.getProp)(r3, `raws`, `spaces`, s3, `after`) || E3;
                (0, b2.ensureObject)(r3, `raws`, `spaces`, s3), r3.raws.spaces[s3].after = D3 + u3;
              } else {
                var O3 = r3[s3] || ``, k3 = (0, b2.getProp)(r3, `raws`, s3) || O3;
                (0, b2.ensureObject)(r3, `raws`), r3.raws[s3] = k3 + u3;
              }
              else o3 += u3;
              break;
            default:
              return this.error(`Unexpected "` + u3 + `" found.`, {
                index: l3[_2.FIELDS.START_POS]
              });
          }
          i3++;
        }
        P2(r3, `attribute`), P2(r3, `namespace`), this.newNode(new f2.default(r3)), this.position++;
      }, t3.parseWhitespaceEquivalentTokens = function(e4) {
        e4 < 0 && (e4 = this.tokens.length);
        var t4 = this.position, n3 = [], r3 = ``, i3 = void 0;
        do
          if (D2[this.currToken[_2.FIELDS.TYPE]]) this.options.lossy || (r3 += this.content());
          else if (this.currToken[_2.FIELDS.TYPE] === v2.comment) {
            var a3 = {};
            r3 && (r3 = (a3.before = r3, ``)), i3 = new s2.default({
              value: this.content(),
              source: M2(this.currToken),
              sourceIndex: this.currToken[_2.FIELDS.START_POS],
              spaces: a3
            }), n3.push(i3);
          }
        while (++this.position < e4);
        if (r3) {
          if (i3) i3.spaces.after = r3;
          else if (!this.options.lossy) {
            var o3 = this.tokens[t4], c3 = this.tokens[this.position - 1];
            n3.push(new u2.default({
              value: ``,
              source: j2(o3[_2.FIELDS.START_LINE], o3[_2.FIELDS.START_COL], c3[_2.FIELDS.END_LINE], c3[_2.FIELDS.END_COL]),
              sourceIndex: o3[_2.FIELDS.START_POS],
              spaces: {
                before: r3,
                after: ``
              }
            }));
          }
        }
        return n3;
      }, t3.convertWhitespaceNodesToSpace = function(e4, t4) {
        var n3 = this;
        t4 === void 0 && (t4 = false);
        var r3 = ``, i3 = ``;
        return e4.forEach(function(e5) {
          var a3 = n3.lossySpace(e5.spaces.before, t4), o3 = n3.lossySpace(e5.rawSpaceBefore, t4);
          r3 += a3 + n3.lossySpace(e5.spaces.after, t4 && a3.length === 0), i3 += a3 + e5.value + n3.lossySpace(e5.rawSpaceAfter, t4 && o3.length === 0);
        }), i3 === r3 && (i3 = void 0), {
          space: r3,
          rawSpace: i3
        };
      }, t3.isNamedCombinator = function(e4) {
        return e4 === void 0 && (e4 = this.position), this.tokens[e4 + 0] && this.tokens[e4 + 0][_2.FIELDS.TYPE] === v2.slash && this.tokens[e4 + 1] && this.tokens[e4 + 1][_2.FIELDS.TYPE] === v2.word && this.tokens[e4 + 2] && this.tokens[e4 + 2][_2.FIELDS.TYPE] === v2.slash;
      }, t3.namedCombinator = function() {
        if (this.isNamedCombinator()) {
          var e4 = this.content(this.tokens[this.position + 1]), t4 = (0, b2.unesc)(e4).toLowerCase(), n3 = {};
          t4 !== e4 && (n3.value = `/` + e4 + `/`);
          var r3 = new m2.default({
            value: `/` + t4 + `/`,
            source: j2(this.currToken[_2.FIELDS.START_LINE], this.currToken[_2.FIELDS.START_COL], this.tokens[this.position + 2][_2.FIELDS.END_LINE], this.tokens[this.position + 2][_2.FIELDS.END_COL]),
            sourceIndex: this.currToken[_2.FIELDS.START_POS],
            raws: n3
          });
          return this.position += 3, r3;
        } else this.unexpected();
      }, t3.combinator = function() {
        var e4 = this;
        if (this.content() === `|`) return this.namespace();
        var t4 = this.locateNextMeaningfulToken(this.position);
        if (t4 < 0 || this.tokens[t4][_2.FIELDS.TYPE] === v2.comma) {
          var n3 = this.parseWhitespaceEquivalentTokens(t4);
          if (n3.length > 0) {
            var r3 = this.current.last;
            if (r3) {
              var i3 = this.convertWhitespaceNodesToSpace(n3), a3 = i3.space, o3 = i3.rawSpace;
              o3 !== void 0 && (r3.rawSpaceAfter += o3), r3.spaces.after += a3;
            } else n3.forEach(function(t5) {
              return e4.newNode(t5);
            });
          }
          return;
        }
        var s3 = this.currToken, c3 = void 0;
        t4 > this.position && (c3 = this.parseWhitespaceEquivalentTokens(t4));
        var l3;
        if (this.isNamedCombinator() ? l3 = this.namedCombinator() : this.currToken[_2.FIELDS.TYPE] === v2.combinator ? (l3 = new m2.default({
          value: this.content(),
          source: M2(this.currToken),
          sourceIndex: this.currToken[_2.FIELDS.START_POS]
        }), this.position++) : D2[this.currToken[_2.FIELDS.TYPE]] || c3 || this.unexpected(), l3) {
          if (c3) {
            var u3 = this.convertWhitespaceNodesToSpace(c3), d3 = u3.space, f3 = u3.rawSpace;
            l3.spaces.before = d3, l3.rawSpaceBefore = f3;
          }
        } else {
          var p3 = this.convertWhitespaceNodesToSpace(c3, true), h3 = p3.space, g3 = p3.rawSpace;
          g3 || (g3 = h3);
          var y3 = {}, b3 = {
            spaces: {}
          };
          h3.endsWith(` `) && g3.endsWith(` `) ? (y3.before = h3.slice(0, h3.length - 1), b3.spaces.before = g3.slice(0, g3.length - 1)) : h3.startsWith(` `) && g3.startsWith(` `) ? (y3.after = h3.slice(1), b3.spaces.after = g3.slice(1)) : b3.value = g3, l3 = new m2.default({
            value: ` `,
            source: N2(s3, this.tokens[this.position - 1]),
            sourceIndex: s3[_2.FIELDS.START_POS],
            spaces: y3,
            raws: b3
          });
        }
        return this.currToken && this.currToken[_2.FIELDS.TYPE] === v2.space && (l3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(l3);
      }, t3.comma = function() {
        if (this.position === this.tokens.length - 1) {
          this.root.trailingComma = true, this.position++;
          return;
        }
        this.current._inferEndPosition();
        var e4 = new a2.default({
          source: {
            start: k2(this.tokens[this.position + 1])
          }
        });
        this.current.parent.append(e4), this.current = e4, this.position++;
      }, t3.comment = function() {
        var e4 = this.currToken;
        this.newNode(new s2.default({
          value: this.content(),
          source: M2(e4),
          sourceIndex: e4[_2.FIELDS.START_POS]
        })), this.position++;
      }, t3.error = function(e4, t4) {
        throw this.root.error(e4, t4);
      }, t3.missingBackslash = function() {
        return this.error(`Expected a backslash preceding the semicolon.`, {
          index: this.currToken[_2.FIELDS.START_POS]
        });
      }, t3.missingParenthesis = function() {
        return this.expected(`opening parenthesis`, this.currToken[_2.FIELDS.START_POS]);
      }, t3.missingSquareBracket = function() {
        return this.expected(`opening square bracket`, this.currToken[_2.FIELDS.START_POS]);
      }, t3.unexpected = function() {
        return this.error(`Unexpected '` + this.content() + `'. Escaping special characters with \\ may help.`, this.currToken[_2.FIELDS.START_POS]);
      }, t3.namespace = function() {
        var e4 = this.prevToken && this.content(this.prevToken) || true;
        if (this.nextToken[_2.FIELDS.TYPE] === v2.word) return this.position++, this.word(e4);
        if (this.nextToken[_2.FIELDS.TYPE] === v2.asterisk) return this.position++, this.universal(e4);
      }, t3.nesting = function() {
        if (this.nextToken && this.content(this.nextToken) === `|`) {
          this.position++;
          return;
        }
        var e4 = this.currToken;
        this.newNode(new h2.default({
          value: this.content(),
          source: M2(e4),
          sourceIndex: e4[_2.FIELDS.START_POS]
        })), this.position++;
      }, t3.parentheses = function() {
        var e4 = this.current.last, t4 = 1;
        if (this.position++, e4 && e4.type === y2.PSEUDO) {
          var n3 = new a2.default({
            source: {
              start: k2(this.tokens[this.position - 1])
            }
          }), r3 = this.current;
          for (e4.append(n3), this.current = n3; this.position < this.tokens.length && t4; ) this.currToken[_2.FIELDS.TYPE] === v2.openParenthesis && t4++, this.currToken[_2.FIELDS.TYPE] === v2.closeParenthesis && t4--, t4 ? this.parse() : (this.current.source.end = A2(this.currToken), this.current.parent.source.end = A2(this.currToken), this.position++);
          this.current = r3;
        } else {
          for (var i3 = this.currToken, o3 = `(`, s3; this.position < this.tokens.length && t4; ) this.currToken[_2.FIELDS.TYPE] === v2.openParenthesis && t4++, this.currToken[_2.FIELDS.TYPE] === v2.closeParenthesis && t4--, s3 = this.currToken, o3 += this.parseParenthesisToken(this.currToken), this.position++;
          e4 ? e4.appendToPropertyAndEscape(`value`, o3, o3) : this.newNode(new u2.default({
            value: o3,
            source: j2(i3[_2.FIELDS.START_LINE], i3[_2.FIELDS.START_COL], s3[_2.FIELDS.END_LINE], s3[_2.FIELDS.END_COL]),
            sourceIndex: i3[_2.FIELDS.START_POS]
          }));
        }
        if (t4) return this.expected(`closing parenthesis`, this.currToken[_2.FIELDS.START_POS]);
      }, t3.pseudo = function() {
        for (var e4 = this, t4 = ``, n3 = this.currToken; this.currToken && this.currToken[_2.FIELDS.TYPE] === v2.colon; ) t4 += this.content(), this.position++;
        if (!this.currToken) return this.expected([
          `pseudo-class`,
          `pseudo-element`
        ], this.position - 1);
        if (this.currToken[_2.FIELDS.TYPE] === v2.word) this.splitWord(false, function(r3, i3) {
          t4 += r3, e4.newNode(new d2.default({
            value: t4,
            source: N2(n3, e4.currToken),
            sourceIndex: n3[_2.FIELDS.START_POS]
          })), i3 > 1 && e4.nextToken && e4.nextToken[_2.FIELDS.TYPE] === v2.openParenthesis && e4.error(`Misplaced parenthesis.`, {
            index: e4.nextToken[_2.FIELDS.START_POS]
          });
        });
        else return this.expected([
          `pseudo-class`,
          `pseudo-element`
        ], this.currToken[_2.FIELDS.START_POS]);
      }, t3.space = function() {
        var e4 = this.content();
        this.position === 0 || this.prevToken[_2.FIELDS.TYPE] === v2.comma || this.prevToken[_2.FIELDS.TYPE] === v2.openParenthesis ? (this.spaces = this.optionalSpace(e4), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[_2.FIELDS.TYPE] === v2.comma || this.nextToken[_2.FIELDS.TYPE] === v2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(e4), this.position++) : this.combinator();
      }, t3.string = function() {
        var e4 = this.currToken;
        this.newNode(new u2.default({
          value: this.content(),
          source: M2(e4),
          sourceIndex: e4[_2.FIELDS.START_POS]
        })), this.position++;
      }, t3.universal = function(e4) {
        var t4 = this.nextToken;
        if (t4 && this.content(t4) === `|`) return this.position++, this.namespace();
        var n3 = this.currToken;
        this.newNode(new p2.default({
          value: this.content(),
          source: M2(n3),
          sourceIndex: n3[_2.FIELDS.START_POS]
        }), e4), this.position++;
      }, t3.splitWord = function(e4, t4) {
        for (var i3 = this, a3 = this.nextToken, s3 = this.content(); a3 && ~[
          v2.dollar,
          v2.caret,
          v2.equals,
          v2.word
        ].indexOf(a3[_2.FIELDS.TYPE]); ) {
          this.position++;
          var u3 = this.content();
          if (s3 += u3, u3.lastIndexOf(`\\`) === u3.length - 1) {
            var d3 = this.nextToken;
            d3 && d3[_2.FIELDS.TYPE] === v2.space && (s3 += this.requiredSpace(this.content(d3)), this.position++);
          }
          a3 = this.nextToken;
        }
        var f3 = (0, n2.default)(s3, `.`).filter(function(e5) {
          return s3[e5 - 1] !== `\\`;
        }), p3 = (0, n2.default)(s3, `#`).filter(function(e5) {
          return s3[e5 - 1] !== `\\`;
        }), m3 = (0, n2.default)(s3, `#{`);
        m3.length && (p3 = p3.filter(function(e5) {
          return !~m3.indexOf(e5);
        }));
        var h3 = (0, g2.default)((0, r2.default)([
          0
        ].concat(f3, p3)));
        h3.forEach(function(n3, r3) {
          var a4 = h3[r3 + 1] || s3.length, u4 = s3.slice(n3, a4);
          if (r3 === 0 && t4) return t4.call(i3, u4, h3.length);
          var d4, m4 = i3.currToken, g3 = m4[_2.FIELDS.START_POS] + h3[r3], v3 = j2(m4[1], m4[2] + n3, m4[3], m4[2] + (a4 - 1));
          if (~f3.indexOf(n3)) {
            var y3 = {
              value: u4.slice(1),
              source: v3,
              sourceIndex: g3
            };
            d4 = new o2.default(P2(y3, `value`));
          } else if (~p3.indexOf(n3)) {
            var b3 = {
              value: u4.slice(1),
              source: v3,
              sourceIndex: g3
            };
            d4 = new c2.default(P2(b3, `value`));
          } else {
            var x3 = {
              value: u4,
              source: v3,
              sourceIndex: g3
            };
            P2(x3, `value`), d4 = new l2.default(x3);
          }
          i3.newNode(d4, e4), e4 = null;
        }), this.position++;
      }, t3.word = function(e4) {
        var t4 = this.nextToken;
        return t4 && this.content(t4) === `|` ? (this.position++, this.namespace()) : this.splitWord(e4);
      }, t3.loop = function() {
        for (; this.position < this.tokens.length; ) this.parse(true);
        return this.current._inferEndPosition(), this.root;
      }, t3.parse = function(e4) {
        switch (this.currToken[_2.FIELDS.TYPE]) {
          case v2.space:
            this.space();
            break;
          case v2.comment:
            this.comment();
            break;
          case v2.openParenthesis:
            this.parentheses();
            break;
          case v2.closeParenthesis:
            e4 && this.missingParenthesis();
            break;
          case v2.openSquare:
            this.attribute();
            break;
          case v2.dollar:
          case v2.caret:
          case v2.equals:
          case v2.word:
            this.word();
            break;
          case v2.colon:
            this.pseudo();
            break;
          case v2.comma:
            this.comma();
            break;
          case v2.asterisk:
            this.universal();
            break;
          case v2.ampersand:
            this.nesting();
            break;
          case v2.slash:
          case v2.combinator:
            this.combinator();
            break;
          case v2.str:
            this.string();
            break;
          case v2.closeSquare:
            this.missingSquareBracket();
          case v2.semicolon:
            this.missingBackslash();
          default:
            this.unexpected();
        }
      }, t3.expected = function(e4, t4, n3) {
        if (Array.isArray(e4)) {
          var r3 = e4.pop();
          e4 = e4.join(`, `) + ` or ` + r3;
        }
        var i3 = /^[aeiou]/.test(e4[0]) ? `an` : `a`;
        return n3 ? this.error(`Expected ` + i3 + ` ` + e4 + `, found "` + n3 + `" instead.`, {
          index: t4
        }) : this.error(`Expected ` + i3 + ` ` + e4 + `.`, {
          index: t4
        });
      }, t3.requiredSpace = function(e4) {
        return this.options.lossy ? ` ` : e4;
      }, t3.optionalSpace = function(e4) {
        return this.options.lossy ? `` : e4;
      }, t3.lossySpace = function(e4, t4) {
        return this.options.lossy ? t4 ? ` ` : `` : e4;
      }, t3.parseParenthesisToken = function(e4) {
        var t4 = this.content(e4);
        return e4[_2.FIELDS.TYPE] === v2.space ? this.requiredSpace(t4) : t4;
      }, t3.newNode = function(e4, t4) {
        return t4 && (/^ +$/.test(t4) && (this.options.lossy || (this.spaces = (this.spaces || ``) + t4), t4 = true), e4.namespace = t4, P2(e4, `namespace`)), this.spaces && (this.spaces = (e4.spaces.before = this.spaces, ``)), this.current.append(e4);
      }, t3.content = function(e4) {
        return e4 === void 0 && (e4 = this.currToken), this.css.slice(e4[_2.FIELDS.START_POS], e4[_2.FIELDS.END_POS]);
      }, t3.locateNextMeaningfulToken = function(e4) {
        e4 === void 0 && (e4 = this.position + 1);
        for (var t4 = e4; t4 < this.tokens.length; ) if (O2[this.tokens[t4][_2.FIELDS.TYPE]]) {
          t4++;
          continue;
        } else return t4;
        return -1;
      }, E2(e3, [
        {
          key: `currToken`,
          get: function() {
            return this.tokens[this.position];
          }
        },
        {
          key: `nextToken`,
          get: function() {
            return this.tokens[this.position + 1];
          }
        },
        {
          key: `prevToken`,
          get: function() {
            return this.tokens[this.position - 1];
          }
        }
      ]), e3;
    })(), t2.exports = e2.default;
  })), je = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = r2(Ae());
    function r2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    e2.default = (function() {
      function e3(e4, t4) {
        this.func = e4 || function() {
        }, this.funcRes = null, this.options = t4;
      }
      var t3 = e3.prototype;
      return t3._shouldUpdateSelector = function(e4, t4) {
        return t4 === void 0 && (t4 = {}), Object.assign({}, this.options, t4).updateSelector === false ? false : typeof e4 != `string`;
      }, t3._isLossy = function(e4) {
        return e4 === void 0 && (e4 = {}), Object.assign({}, this.options, e4).lossless === false;
      }, t3._root = function(e4, t4) {
        return t4 === void 0 && (t4 = {}), new n2.default(e4, this._parseOptions(t4)).root;
      }, t3._parseOptions = function(e4) {
        return {
          lossy: this._isLossy(e4)
        };
      }, t3._run = function(e4, t4) {
        var n3 = this;
        return t4 === void 0 && (t4 = {}), new Promise(function(r3, i2) {
          try {
            var a2 = n3._root(e4, t4);
            Promise.resolve(n3.func(a2)).then(function(r4) {
              var i3 = void 0;
              return n3._shouldUpdateSelector(e4, t4) && (i3 = a2.toString(), e4.selector = i3), {
                transform: r4,
                root: a2,
                string: i3
              };
            }).then(r3, i2);
          } catch (e5) {
            i2(e5);
            return;
          }
        });
      }, t3._runSync = function(e4, t4) {
        t4 === void 0 && (t4 = {});
        var n3 = this._root(e4, t4), r3 = this.func(n3);
        if (r3 && typeof r3.then == `function`) throw Error(`Selector processor returned a promise to a synchronous call.`);
        var i2 = void 0;
        return t4.updateSelector && typeof e4 != `string` && (i2 = n3.toString(), e4.selector = i2), {
          transform: r3,
          root: n3,
          string: i2
        };
      }, t3.ast = function(e4, t4) {
        return this._run(e4, t4).then(function(e5) {
          return e5.root;
        });
      }, t3.astSync = function(e4, t4) {
        return this._runSync(e4, t4).root;
      }, t3.transform = function(e4, t4) {
        return this._run(e4, t4).then(function(e5) {
          return e5.transform;
        });
      }, t3.transformSync = function(e4, t4) {
        return this._runSync(e4, t4).transform;
      }, t3.process = function(e4, t4) {
        return this._run(e4, t4).then(function(e5) {
          return e5.string || e5.root.toString();
        });
      }, t3.processSync = function(e4, t4) {
        var n3 = this._runSync(e4, t4);
        return n3.string || n3.root.toString();
      }, e3;
    })(), t2.exports = e2.default;
  })), Me = n(((e2) => {
    e2.__esModule = true, e2.universal = e2.tag = e2.string = e2.selector = e2.root = e2.pseudo = e2.nesting = e2.id = e2.comment = e2.combinator = e2.className = e2.attribute = void 0;
    var t2 = p2(W()), n2 = p2(B()), r2 = p2(De()), i2 = p2(Ce()), a2 = p2(V()), o2 = p2(G()), s2 = p2(U()), c2 = p2(xe()), l2 = p2(Se()), u2 = p2(Te()), d2 = p2(we()), f2 = p2(Ee());
    function p2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    e2.attribute = function(e3) {
      return new t2.default(e3);
    }, e2.className = function(e3) {
      return new n2.default(e3);
    }, e2.combinator = function(e3) {
      return new r2.default(e3);
    }, e2.comment = function(e3) {
      return new i2.default(e3);
    }, e2.id = function(e3) {
      return new a2.default(e3);
    }, e2.nesting = function(e3) {
      return new o2.default(e3);
    }, e2.pseudo = function(e3) {
      return new s2.default(e3);
    }, e2.root = function(e3) {
      return new c2.default(e3);
    }, e2.selector = function(e3) {
      return new l2.default(e3);
    }, e2.string = function(e3) {
      return new u2.default(e3);
    }, e2.tag = function(e3) {
      return new d2.default(e3);
    }, e2.universal = function(e3) {
      return new f2.default(e3);
    };
  })), Ne = n(((e2) => {
    e2.__esModule = true, e2.isNode = i2, e2.isPseudoElement = l2, e2.isPseudoClass = u2, e2.isContainer = d2, e2.isNamespace = f2, e2.isUniversal = e2.isTag = e2.isString = e2.isSelector = e2.isRoot = e2.isPseudo = e2.isNesting = e2.isIdentifier = e2.isComment = e2.isCombinator = e2.isClassName = e2.isAttribute = void 0;
    var t2 = R(), n2, r2 = (n2 = {}, n2[t2.ATTRIBUTE] = true, n2[t2.CLASS] = true, n2[t2.COMBINATOR] = true, n2[t2.COMMENT] = true, n2[t2.ID] = true, n2[t2.NESTING] = true, n2[t2.PSEUDO] = true, n2[t2.ROOT] = true, n2[t2.SELECTOR] = true, n2[t2.STRING] = true, n2[t2.TAG] = true, n2[t2.UNIVERSAL] = true, n2);
    function i2(e3) {
      return typeof e3 == `object` && r2[e3.type];
    }
    function a2(e3, t3) {
      return i2(t3) && t3.type === e3;
    }
    var o2 = a2.bind(null, t2.ATTRIBUTE);
    e2.isAttribute = o2, e2.isClassName = a2.bind(null, t2.CLASS), e2.isCombinator = a2.bind(null, t2.COMBINATOR), e2.isComment = a2.bind(null, t2.COMMENT), e2.isIdentifier = a2.bind(null, t2.ID), e2.isNesting = a2.bind(null, t2.NESTING);
    var s2 = a2.bind(null, t2.PSEUDO);
    e2.isPseudo = s2, e2.isRoot = a2.bind(null, t2.ROOT), e2.isSelector = a2.bind(null, t2.SELECTOR), e2.isString = a2.bind(null, t2.STRING);
    var c2 = a2.bind(null, t2.TAG);
    e2.isTag = c2, e2.isUniversal = a2.bind(null, t2.UNIVERSAL);
    function l2(e3) {
      return s2(e3) && e3.value && (e3.value.startsWith(`::`) || e3.value === `:before` || e3.value === `:after`);
    }
    function u2(e3) {
      return s2(e3) && !l2(e3);
    }
    function d2(e3) {
      return !!(i2(e3) && e3.walk);
    }
    function f2(e3) {
      return o2(e3) || c2(e3);
    }
  })), Pe = n(((e2) => {
    e2.__esModule = true;
    var t2 = R();
    Object.keys(t2).forEach(function(n3) {
      n3 === `default` || n3 === `__esModule` || (e2[n3] = t2[n3]);
    });
    var n2 = Me();
    Object.keys(n2).forEach(function(t3) {
      t3 === `default` || t3 === `__esModule` || (e2[t3] = n2[t3]);
    });
    var r2 = Ne();
    Object.keys(r2).forEach(function(t3) {
      t3 === `default` || t3 === `__esModule` || (e2[t3] = r2[t3]);
    });
  })), Fe = n(((e2, t2) => {
    e2.__esModule = true, e2.default = void 0;
    var n2 = a2(je()), r2 = i2(Pe());
    function i2(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (e3 != null) {
        for (var n3 in e3) if (Object.prototype.hasOwnProperty.call(e3, n3)) {
          var r3 = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e3, n3) : {};
          r3.get || r3.set ? Object.defineProperty(t3, n3, r3) : t3[n3] = e3[n3];
        }
      }
      return t3.default = e3, t3;
    }
    function a2(e3) {
      return e3 && e3.__esModule ? e3 : {
        default: e3
      };
    }
    var o2 = function(e3) {
      return new n2.default(e3);
    };
    Object.assign(o2, r2), delete o2.__esModule, e2.default = o2, t2.exports = e2.default;
  })), Ie = n(((e2) => {
    function t2(e3) {
      return e3 && typeof e3 == `object` && `default` in e3 ? e3.default : e3;
    }
    Object.defineProperty(e2, `__esModule`, {
      value: true
    });
    var n2 = t2(y()), r2 = D(), i2 = t2(g()), a2 = t2(k()), o2 = t2(A()), s2 = t2(j()), c2 = t2(M()), l2 = t2(N()), u2 = t2(ne()), d2 = re(), f2 = t2(ue());
    de();
    var p2 = t2(fe()), m2 = t2(pe()), h2 = me(), _2 = t2(Fe());
    function v2(e3) {
      return Object.prototype.toString.call(e3) === `[object Object]`;
    }
    function b2(e3) {
      let t3 = {};
      for (let n3 in e3) n3.substr(0, 2) !== `__` && (t3[n3] = v2(e3[n3]) ? b2(e3[n3]) : e3[n3]);
      return t3;
    }
    function x2(e3, t3) {
      return e3.start.line === t3.start.line && e3.start.character === t3.start.character && e3.end.line === t3.end.line && e3.end.character === t3.end.character;
    }
    function S2(e3) {
      return e3.filter((e4, t3, n3) => n3.indexOf(e4) === t3);
    }
    function C2(e3) {
      return e3.filter((t3, n3) => n3 === e3.findIndex((e4) => x2(e4.range, t3.range)));
    }
    function w2(e3) {
      return Array.isArray(e3) ? e3 : [
        e3
      ];
    }
    function T2(e3) {
      return [].concat.apply([], e3);
    }
    function E2(e3, t3) {
      if (e3 === t3) return true;
      if (e3.length !== t3.length) return false;
      let n3 = e3.concat().sort(), r3 = t3.concat().sort();
      for (let e4 = 0; e4 < n3.length; ++e4) if (n3[e4] !== r3[e4]) return false;
      return true;
    }
    function O2(e3) {
      let t3 = function(e4, n3, r3) {
        if (e4 || n3) return n3 ? (t3(e4 + n3[0], n3.slice(1), r3), t3(e4, n3.slice(1), r3)) : r3.push(e4), r3;
      };
      return t3(``, e3, []);
    }
    function P2(e3, t3) {
      let r3 = e3.separator, i3 = (t3 = t3.replace(/^\./, ``)).split(r3);
      return i3.length === 1 ? true === n2(e3.classNames.classNames, [
        t3,
        `__info`,
        `__rule`
      ]) || Array.isArray(n2(e3.classNames.classNames, [
        t3,
        `__info`
      ])) ? [
        t3
      ] : null : [
        [
          t3
        ],
        ...O2(`123456789`.substr(0, i3.length - 1)).map((e4) => e4.split(``).map((e5) => parseInt(e5, 10))).map((e4) => {
          let t4 = [], n3 = 0;
          return e4.forEach((e5) => {
            t4.push(i3.slice(n3, e5).join(`-`)), n3 = e5;
          }), t4.push(i3.slice(n3).join(`-`)), t4;
        })
      ].find((t4) => !(true !== n2(e3.classNames.classNames, [
        ...t4,
        `__info`,
        `__rule`
      ]) && !Array.isArray(n2(e3.classNames.classNames, [
        ...t4,
        `__info`
      ]))));
    }
    function ee2(e3, t3) {
      if (t3 === void 0 && (t3 = 16), /^-?[0-9.]+rem$/.test(e3)) {
        let n3 = parseFloat(e3.substr(0, e3.length - 3));
        if (!isNaN(n3)) return n3 * t3 + `px`;
      }
    }
    function te2(e3) {
      return (e3 > 0n) - (e3 < 0n);
    }
    function F2(e3, t3) {
      let n3 = e3.modules.jit.generateRules.module(new Set(t3), e3.jitContext).sort((e4, t4) => {
        let [n4] = e4, [r4] = t4;
        return te2(n4 - r4);
      }), r3 = e3.modules.postcss.module.root({
        nodes: n3.map((e4) => {
          let [, t4] = e4;
          return t4;
        })
      });
      e3.modules.jit.expandApplyAtRules.module(e3.jitContext)(r3);
      let i3 = [];
      return r3.walkRules((e4) => {
        i3.push(e4);
      }), {
        root: r3,
        rules: i3
      };
    }
    async function ie2(e3, t3, n3) {
      let r3 = await e3.editor.getConfiguration(n3), i3 = t3.clone();
      return i3.walkAtRules(`defaults`, (e4) => {
        e4.remove();
      }), r3.tailwindCSS.showPixelEquivalents && i3.walkDecls((e4) => {
        let t4 = ee2(e4.value, r3.tailwindCSS.rootFontSize);
        t4 && (e4.value = `${e4.value}/* ${t4} */`);
      }), i3.toString().replace(/([^;{}\s])(\n\s*})/g, (e4, t4, n4) => `${t4};${n4}`).replace(/^(?:    )+/gm, (e4) => ` `.repeat(e4.length / 4 * r3.editor.tabSize));
    }
    function ae2(e3, t3, n3, r3) {
      return e3.modules.postcssSelectorParser.module((e4) => {
        e4.walkClasses((e5) => {
          e5.value === n3 && (e5.value = r3);
        });
      }).processSync(t3);
    }
    function oe2(e3, t3, n3) {
      let r3 = [
        ae2(e3, t3.selector, n3, `__placeholder__`)
      ], i3 = t3;
      for (; i3.parent && i3.parent.type !== `root`; ) i3 = i3.parent, i3.type === `atrule` && r3.unshift(`@${i3.name} ${i3.params}`);
      return r3;
    }
    var se2 = [
      `accent-color`,
      `caret-color`,
      `color`,
      `column-rule-color`,
      `background-color`,
      `border-color`,
      `border-top-color`,
      `border-right-color`,
      `border-bottom-color`,
      `border-left-color`,
      `fill`,
      `outline-color`,
      `stop-color`,
      `stroke`,
      `text-decoration-color`
    ];
    function ce2(e3) {
      if (typeof e3 != `string`) return null;
      let t3 = e3.toLowerCase();
      return t3 === `transparent` ? `transparent` : t3 === `currentcolor` ? `currentColor` : null;
    }
    var le2 = RegExp(`(?:^|\\s|\\(|,)(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\\(\\s*(-?[\\d.]+%?(\\s*[,/]\\s*|\\s+)+){2,3}\\s*([\\d.]+%?|var\\([^)]+\\))?\\)|transparent|currentColor|${Object.keys(i2).join(`|`)})(?:$|\\s|\\)|,)`, `gi`);
    function he2(e3) {
      return /(?:box|drop)-shadow/.test(e3) ? [] : Array.from((function(e4) {
        return e4.replace(/((?:rgb|hsl)a?\(\s*)var\([^,]+,\s*([^)]+)\)/gi, `$1$2`);
      })(e3).matchAll(le2), (e4) => {
        let t3 = e4[1].replace(/var\([^)]+\)/, `1`);
        return ce2(t3) ?? r2.parse(t3);
      }).filter(Boolean);
    }
    function ge2(e3) {
      let t3 = Object.keys(e3).filter((t4) => t4 !== `content` || e3[t4] !== `""` && e3[t4] !== `''` && e3[t4] !== `var(--tw-content)`);
      if (t3.length === 0) return null;
      let n3 = t3.filter((e4) => !e4.startsWith(`--`)), i3 = n3.length === 0;
      if (!i3 && n3.some((e4) => !se2.includes(e4))) return null;
      let a3 = (i3 ? t3 : n3).flatMap((t4) => w2(e3[t4]).flatMap(he2)), o3 = S2(a3.map((e4) => typeof e4 == `string` ? e4 : r2.formatRgb({
        ...e4,
        alpha: void 0
      })));
      if (o3.length !== 1) return null;
      let s3 = ce2(o3[0]);
      if (s3) return s3;
      let c3 = a3.filter((e4) => typeof e4 != `string`), l3 = S2(c3.map((e4) => e4.alpha ?? 1));
      return l3.length === 1 ? c3[0] : l3.length === 2 && l3.includes(0) ? c3.find((e4) => (e4.alpha ?? 1) !== 0) : null;
    }
    function _e2(e3, t3) {
      if (e3.jit) {
        if (e3.classNames) {
          let r5 = n2(e3.classNames.classNames, [
            t3,
            `__info`
          ]);
          if (r5 && r5.__rule) return ge2(b2(r5));
        }
        let { root: r4, rules: i4 } = F2(e3, [
          t3
        ]);
        if (i4.length === 0) return null;
        let a3 = {};
        return r4.walkDecls((e4) => {
          let t4 = a3[e4.prop];
          t4 ? Array.isArray(t4) ? t4.push(e4.value) : a3[e4.prop] = [
            t4,
            e4.value
          ] : a3[e4.prop] = e4.value;
        }), ge2(a3);
      }
      let r3 = P2(e3, t3);
      if (!r3) return null;
      let i3 = n2(e3.classNames.classNames, [
        ...r3,
        `__info`
      ]);
      return i3.__rule ? ge2(b2(i3)) : null;
    }
    function ve2(e3) {
      if (typeof e3 != `string`) return null;
      let t3 = e3.trim();
      return t3.toLowerCase() === `transparent` ? `transparent` : t3.toLowerCase() === `currentcolor` ? `currentColor` : !/^\s*(?:rgba?|hsla?)\s*\([^)]+\)\s*$/.test(t3) && !/^\s*#[0-9a-f]+\s*$/i.test(t3) && !Object.keys(i2).includes(t3) ? null : r2.parse(t3) ?? null;
    }
    var ye2 = r2.converter(`rgb`);
    function I2(e3) {
      let t3 = ye2(e3);
      return {
        red: t3.r,
        green: t3.g,
        blue: t3.b,
        alpha: t3.alpha ?? 1
      };
    }
    var be2 = `aspnetcorerazor.astro.astro-markdown.blade.django-html.edge.ejs.erb.gohtml.GoHTML.gohtmltmpl.haml.handlebars.hbs.html.HTML (Eex).HTML (EEx).html-eex.htmldjango.jade.leaf.liquid.markdown.mdx.mustache.njk.nunjucks.phoenix-heex.php.razor.slim.surface.twig`.split(`.`), L2 = [
      `css`,
      `less`,
      `postcss`,
      `sass`,
      `scss`,
      `stylus`,
      `sugarss`,
      `tailwindcss`
    ], R2 = [
      `javascript`,
      `javascriptreact`,
      `reason`,
      `rescript`,
      `typescript`,
      `typescriptreact`
    ];
    function z2(e3, t3) {
      let n3 = Object.keys(e3.editor.userLanguages).filter((t4) => R2.includes(e3.editor.userLanguages[t4]));
      return [
        ...R2,
        ...n3
      ].indexOf(t3.languageId) !== -1;
    }
    function xe2(e3, t3, n3) {
      let r3 = Y2(e3, t3, t3.getText({
        start: {
          line: 0,
          character: 0
        },
        end: n3
      }));
      return !!r3 && r3[r3.length - 1].type === `jsx`;
    }
    function Se2(e3, t3) {
      let n3 = Object.keys(e3.editor.userLanguages).filter((t4) => L2.includes(e3.editor.userLanguages[t4]));
      return [
        ...L2,
        ...n3
      ].indexOf(t3.languageId) !== -1;
    }
    function B2(e3, t3, n3) {
      if (Se2(e3, t3)) return true;
      if (Ue2(e3, t3) || We2(t3) || Ge2(t3) || z2(e3, t3)) {
        let r3 = Y2(e3, t3, t3.getText({
          start: {
            line: 0,
            character: 0
          },
          end: n3
        }));
        return !!r3 && r3[r3.length - 1].type === `css`;
      }
      return false;
    }
    function Ce2(e3, t3) {
      return e3.line === t3.start.line && e3.character >= t3.start.character ? !(e3.line === t3.end.line && e3.character > t3.end.character) : e3.line === t3.end.line && e3.character <= t3.end.character ? !(e3.line === t3.start.line && e3.character < t3.end.character) : e3.line > t3.start.line && e3.line < t3.end.line;
    }
    var V2 = (e3) => {
      let t3 = false, n3 = null, r3 = function() {
        return t3 || (t3 = (n3 = e3.apply(this, arguments), true)), n3;
      };
      return r3.isLazy = true, r3;
    }, H2 = () => ({
      doubleClassList: {
        arb: {
          match: RegExp(`(?<!\\\\)\\[`),
          push: `arbitrary`
        },
        lbrace: {
          match: RegExp(`(?<!\\\\)\\{`),
          push: `interpBrace`
        },
        rbrace: {
          match: RegExp(`(?<!\\\\)\\}`),
          pop: 1
        },
        end: {
          match: RegExp(`(?<!\\\\)"`),
          pop: 1
        },
        classlist: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      },
      singleClassList: {
        lbrace: {
          match: RegExp(`(?<!\\\\)\\{`),
          push: `interpBrace`
        },
        rbrace: {
          match: RegExp(`(?<!\\\\)\\}`),
          pop: 1
        },
        end: {
          match: RegExp(`(?<!\\\\)'`),
          pop: 1
        },
        classlist: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      },
      tickClassList: {
        lbrace: {
          match: RegExp(`(?<=(?<!\\\\)\\$)\\{`),
          push: `interpBrace`
        },
        rbrace: {
          match: RegExp(`(?<!\\\\)\\}`),
          pop: 1
        },
        end: {
          match: RegExp("(?<!\\\\)`"),
          pop: 1
        },
        classlist: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      },
      interpBrace: {
        startSingle: {
          match: RegExp(`(?<!\\\\)'`),
          push: `singleClassList`
        },
        startDouble: {
          match: RegExp(`(?<!\\\\)"`),
          push: `doubleClassList`
        },
        startTick: {
          match: RegExp("(?<!\\\\)`"),
          push: `tickClassList`
        },
        lbrace: {
          match: RegExp(`(?<!\\\\)\\{`),
          push: `interpBrace`
        },
        rbrace: {
          match: RegExp(`(?<!\\\\)\\}`),
          pop: 1
        },
        text: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      },
      interpSingle: {
        startDouble: {
          match: RegExp(`(?<!\\\\)"`),
          push: `doubleClassList`
        },
        startTick: {
          match: RegExp("(?<!\\\\)`"),
          push: `tickClassList`
        },
        single: {
          match: RegExp(`(?<!\\\\)'`),
          pop: 1
        },
        text: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      },
      interpDouble: {
        startSingle: {
          match: RegExp(`(?<!\\\\)'`),
          push: `singleClassList`
        },
        startTick: {
          match: RegExp("(?<!\\\\)`"),
          push: `tickClassList`
        },
        double: {
          match: RegExp(`(?<!\\\\)"`),
          pop: 1
        },
        text: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      },
      arbitrary: {
        arb: {
          match: RegExp(`(?<!\\\\)\\]`),
          pop: 1
        },
        space: {
          match: /\s/,
          pop: 1,
          lineBreaks: true
        },
        arb2: {
          match: RegExp(`[\\s\\S]`),
          lineBreaks: true
        }
      }
    }), we2 = V2(() => o2.states({
      main: {
        start1: {
          match: `"`,
          push: `doubleClassList`
        },
        start2: {
          match: `'`,
          push: `singleClassList`
        },
        start3: {
          match: `{`,
          push: `interpBrace`
        }
      },
      ...H2()
    })), Te2 = V2(() => o2.states({
      main: {
        lbrace: {
          match: `{`,
          push: `interpBrace`
        },
        single: {
          match: `'`,
          push: `interpSingle`
        },
        double: {
          match: `"`,
          push: `interpDouble`
        }
      },
      ...H2()
    }));
    function U2(e3, t3) {
      return {
        start: {
          line: (t3?.start.line || 0) + e3.start.line,
          character: (e3.end.line === 0 && t3?.start.character || 0) + e3.start.character
        },
        end: {
          line: (t3?.start.line || 0) + e3.end.line,
          character: (e3.end.line === 0 && t3?.start.character || 0) + e3.end.character
        }
      };
    }
    function W2(e3, t3, n3) {
      let r3 = typeof e3 == `string` ? e3 : e3.getText(n3);
      return t3 === `js` || t3 === `jsx` ? (function(e4) {
        De2 || (De2 = o2.states({
          main: {
            commentLine: /\/\/.*?$/,
            commentBlock: {
              match: /\/\*[^]*?\*\//,
              lineBreaks: true
            },
            stringDouble: /"(?:[^"\\]|\\.)*"/,
            stringSingle: /'(?:[^'\\]|\\.)*'/,
            stringBacktick: /`(?:[^`\\]|\\.)*`/,
            other: {
              match: /[^]/,
              lineBreaks: true
            }
          }
        }));
        let t4 = ``;
        De2.reset(e4);
        for (let e5 of De2) t4 += e5.type === `commentLine` ? ` `.repeat(e5.value.length) : e5.type === `commentBlock` ? e5.value.replace(/./g, ` `) : e5.value;
        return t4;
      })(r3) : r3.replace(t3 === `css` ? /\/\*.*?\*\//gs : /<!--.*?-->/gs, Ee2);
    }
    function Ee2(e3) {
      return e3.replace(/./gs, (e4) => e4 === `
` ? `
` : ` `);
    }
    var De2;
    function G2(e3, t3) {
      let n3, r3 = [];
      for (; (n3 = e3.exec(t3)) !== null; ) r3.push({
        ...n3
      });
      return r3;
    }
    function K2(e3) {
      let { classList: t3, range: n3, important: r3 } = e3, i3 = t3.split(/(\s+)/), a3 = [], o3 = 0;
      for (let e4 = 0; e4 < i3.length; e4++) {
        if (e4 % 2 == 0) {
          let s3 = q2(t3, o3), c3 = q2(t3, o3 + i3[e4].length);
          a3.push({
            className: i3[e4],
            classList: {
              classList: t3,
              range: n3,
              important: r3
            },
            relativeRange: {
              start: s3,
              end: c3
            },
            range: {
              start: {
                line: n3.start.line + s3.line,
                character: (c3.line === 0 ? n3.start.character : 0) + s3.character
              },
              end: {
                line: n3.start.line + c3.line,
                character: (c3.line === 0 ? n3.start.character : 0) + c3.character
              }
            }
          });
        }
        o3 += i3[e4].length;
      }
      return a3;
    }
    async function Oe2(e3, t3, n3, r3, i3) {
      return i3 === void 0 && (i3 = true), T2((await (async function(e4, t4, n4, r4, i4) {
        let a3;
        return i4 === void 0 && (i4 = true), a3 = r4 === `css` ? ke2(t4, n4) : await Me2(e4, t4, r4, n4), C2([
          ...a3,
          ...i4 ? await Ae2(e4, t4, n4) : []
        ]);
      })(e3, t3, n3, r3, i3)).map(K2));
    }
    function ke2(e3, t3) {
      let n3 = W2(e3, `css`, t3), r3 = G2(/(@apply\s+)(?<classList>[^;}]+?)(?<important>\s*!important)?\s*[;}]/g, n3), i3 = t3 ? t3.start : {
        line: 0,
        character: 0
      };
      return r3.map((e4) => {
        let t4 = q2(n3, e4.index + e4[1].length), r4 = q2(n3, e4.index + e4[1].length + e4.groups.classList.length);
        return {
          classList: e4.groups.classList,
          important: !!e4.groups.important,
          range: {
            start: {
              line: i3.line + t4.line,
              character: (r4.line === 0 ? i3.character : 0) + t4.character
            },
            end: {
              line: i3.line + r4.line,
              character: (r4.line === 0 ? i3.character : 0) + r4.character
            }
          }
        };
      });
    }
    async function Ae2(e3, t3, n3) {
      let r3 = (await e3.editor.getConfiguration(t3.uri)).tailwindCSS.experimental.classRegex;
      if (!Array.isArray(r3) || r3.length === 0) return [];
      let i3 = t3.getText(n3), a3 = [];
      for (let e4 = 0; e4 < r3.length; e4++) try {
        let o3, [c3, l3] = Array.isArray(r3[e4]) ? r3[e4] : [
          r3[e4]
        ], u3 = new s2(c3, `g`);
        for (; (o3 = u3.exec(i3)) !== null; ) {
          let e5 = t3.offsetAt(n3?.start || {
            line: 0,
            character: 0
          }) + o3.index[1], r4 = e5 + o3[1].length;
          if (l3) {
            let n4, r5 = new s2(l3, `g`);
            for (; (n4 = r5.exec(o3[1])) !== null; ) {
              let r6 = e5 + n4.index[1], i4 = r6 + n4[1].length;
              a3.push({
                classList: n4[1],
                range: {
                  start: t3.positionAt(r6),
                  end: t3.positionAt(i4)
                }
              });
            }
          } else a3.push({
            classList: o3[1],
            range: {
              start: t3.positionAt(e5),
              end: t3.positionAt(r4)
            }
          });
        }
      } catch {
      }
      return a3;
    }
    function je2(e3, t3) {
      let n3 = t3.filter((e4) => typeof e4 == `string`).flatMap((e4) => [
        e4,
        `\\[${e4}\\]`
      ]);
      return G2(new RegExp(`(?:\\s|:|\\()(ATTRS)\\s*=\\s*['"\`{]`.replace(`ATTRS`, n3.join(`|`)), `gi`), e3);
    }
    async function Me2(e3, t3, n3, r3) {
      let i3 = W2(t3, n3, r3), a3 = je2(i3, (await e3.editor.getConfiguration(t3.uri)).tailwindCSS.classAttributes), o3 = [];
      return a3.forEach((e4) => {
        let t4 = i3.substr(e4.index + e4[0].length - 1), n4 = e4[0][0] === `:` || e4[1].startsWith(`[`) && e4[1].endsWith(`]`) ? Te2() : we2();
        n4.reset(t4);
        let a4, s3 = [];
        try {
          for (let e5 of n4) e5.type === `classlist` || e5.type.startsWith(`arb`) ? a4 ? a4.value += e5.value : a4 = {
            value: e5.value,
            offset: e5.offset
          } : (a4 && s3.push({
            value: a4.value,
            offset: a4.offset
          }), a4 = void 0);
        } catch {
        }
        a4 && s3.push({
          value: a4.value,
          offset: a4.offset
        }), o3.push(...s3.map((t5) => {
          let { value: n5, offset: a5 } = t5;
          if (n5.trim() === ``) return null;
          let o4 = n5.match(/^\s*/), s4 = o4 === null ? 0 : o4[0].length, c3 = n5.match(/\s*$/), l3 = c3 === null ? 0 : -c3[0].length, u3 = q2(i3, e4.index + e4[0].length - 1 + a5 + s4), d3 = q2(i3, e4.index + e4[0].length - 1 + a5 + n5.length + l3);
          return {
            classList: n5.substr(s4, n5.length + l3),
            range: {
              start: {
                line: (r3?.start.line || 0) + u3.line,
                character: (d3.line === 0 && r3?.start.character || 0) + u3.character
              },
              end: {
                line: (r3?.start.line || 0) + d3.line,
                character: (d3.line === 0 && r3?.start.character || 0) + d3.character
              }
            }
          };
        }).filter((e5) => e5 !== null));
      }), o3;
    }
    async function Ne2(e3, t3) {
      if (Se2(e3, t3)) return ke2(t3);
      let n3 = Y2(e3, t3);
      return n3 ? C2(T2([
        ...await Promise.all(n3.filter((e4) => e4.type === `html` || e4.type === `jsx`).map((n4) => {
          let { type: r3, range: i3 } = n4;
          return Me2(e3, t3, r3 === `html` ? `html` : `jsx`, i3);
        })),
        ...n3.filter((e4) => e4.type === `css`).map((e4) => {
          let { range: n4 } = e4;
          return ke2(t3, n4);
        }),
        await Ae2(e3, t3)
      ])) : [];
    }
    function Pe2(e3, t3) {
      if (Se2(e3, t3)) return Ie2(t3);
      let n3 = Y2(e3, t3);
      return n3 ? T2(n3.filter((e4) => e4.type === `css`).map((e4) => {
        let { range: n4 } = e4;
        return Ie2(t3, n4);
      })) : [];
    }
    function Ie2(e3, t3) {
      let n3 = W2(e3, `css`, t3);
      return G2(/(?<prefix>[\s:;/*(){}])(?<helper>config|theme)(?<innerPrefix>\(\s*)(?<path>[^)]*?)\s*\)/g, n3).map((e4) => {
        let r3 = ``, i3 = e4.groups.path.replace(/['"]+$/, ``).replace(/^['"]+/, (e5) => (r3 = e5, ``)), a3 = i3.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/);
        a3 && (i3 = a3[1]), i3 = i3.replace(/['"]*\s*$/, ``);
        let o3 = e4.index + e4.groups.prefix.length + e4.groups.helper.length + e4.groups.innerPrefix.length;
        return {
          helper: e4.groups.helper === `theme` ? `theme` : `config`,
          path: i3,
          ranges: {
            full: U2({
              start: q2(n3, o3),
              end: q2(n3, o3 + e4.groups.path.length)
            }, t3),
            path: U2({
              start: q2(n3, o3 + r3.length),
              end: q2(n3, o3 + r3.length + i3.length)
            }, t3)
          }
        };
      });
    }
    function q2(e3, t3) {
      let { line: n3, col: r3 } = a2(e3 + `
`, t3);
      return {
        line: n3 - 1,
        character: r3 - 1
      };
    }
    var Le2 = [
      `text/html`,
      `text/x-template`,
      `text/x-handlebars-template`
    ], J2 = {
      text: {
        match: /[^]/,
        lineBreaks: true
      }
    }, Re2 = {
      main: {
        cssBlockStart: {
          match: /<style(?=[>\s])/,
          push: `cssBlock`
        },
        jsBlockStart: {
          match: `<script`,
          push: `jsBlock`
        },
        ...J2
      },
      cssBlock: {
        styleStart: {
          match: `>`,
          next: `style`
        },
        cssBlockEnd: {
          match: `/>`,
          pop: 1
        },
        attrStartDouble: {
          match: `"`,
          push: `attrDouble`
        },
        attrStartSingle: {
          match: `'`,
          push: `attrSingle`
        },
        interp: {
          match: `{`,
          push: `interp`
        },
        ...J2
      },
      jsBlock: {
        scriptStart: {
          match: `>`,
          next: `script`
        },
        jsBlockEnd: {
          match: `/>`,
          pop: 1
        },
        langAttrStartDouble: {
          match: `lang="`,
          push: `langAttrDouble`
        },
        langAttrStartSingle: {
          match: `lang='`,
          push: `langAttrSingle`
        },
        typeAttrStartDouble: {
          match: `type="`,
          push: `typeAttrDouble`
        },
        typeAttrStartSingle: {
          match: `type='`,
          push: `typeAttrSingle`
        },
        attrStartDouble: {
          match: `"`,
          push: `attrDouble`
        },
        attrStartSingle: {
          match: `'`,
          push: `attrSingle`
        },
        interp: {
          match: `{`,
          push: `interp`
        },
        ...J2
      },
      interp: {
        interp: {
          match: `{`,
          push: `interp`
        },
        end: {
          match: `}`,
          pop: 1
        },
        ...J2
      },
      langAttrDouble: {
        langAttrEnd: {
          match: `"`,
          pop: 1
        },
        lang: {
          match: /[^"]+/,
          lineBreaks: true
        }
      },
      langAttrSingle: {
        langAttrEnd: {
          match: `'`,
          pop: 1
        },
        lang: {
          match: /[^']+/,
          lineBreaks: true
        }
      },
      typeAttrDouble: {
        langAttrEnd: {
          match: `"`,
          pop: 1
        },
        type: {
          match: /[^"]+/,
          lineBreaks: true
        }
      },
      typeAttrSingle: {
        langAttrEnd: {
          match: `'`,
          pop: 1
        },
        type: {
          match: /[^']+/,
          lineBreaks: true
        }
      },
      attrDouble: {
        attrEnd: {
          match: `"`,
          pop: 1
        },
        ...J2
      },
      attrSingle: {
        attrEnd: {
          match: `'`,
          pop: 1
        },
        ...J2
      },
      style: {
        cssBlockEnd: {
          match: `</style>`,
          pop: 1
        },
        ...J2
      },
      script: {
        jsBlockEnd: {
          match: `<\/script>`,
          pop: 1
        },
        ...J2
      }
    }, ze2 = {
      ...Re2,
      main: {
        htmlBlockStart: {
          match: `<template`,
          push: `htmlBlock`
        },
        ...Re2.main
      },
      htmlBlock: {
        htmlStart: {
          match: `>`,
          next: `html`
        },
        htmlBlockEnd: {
          match: `/>`,
          pop: 1
        },
        attrStartDouble: {
          match: `"`,
          push: `attrDouble`
        },
        attrStartSingle: {
          match: `'`,
          push: `attrSingle`
        },
        interp: {
          match: `{`,
          push: `interp`
        },
        ...J2
      },
      html: {
        htmlBlockEnd: {
          match: `</template>`,
          pop: 1
        },
        nestedBlockStart: {
          match: `<template`,
          push: `nestedBlock`
        },
        ...J2
      },
      nestedBlock: {
        nestedStart: {
          match: `>`,
          next: `nested`
        },
        nestedBlockEnd: {
          match: `/>`,
          pop: 1
        },
        ...J2
      },
      nested: {
        nestedBlockEnd: {
          match: `</template>`,
          pop: 1
        },
        nestedBlockStart: {
          match: `<template`,
          push: `nestedBlock`
        },
        ...J2
      }
    }, Be2 = o2.states(Re2), Ve2 = o2.states(ze2), He2 = new c2({
      max: 25,
      maxAge: 1e3
    });
    function Y2(e3, t3, n3) {
      n3 === void 0 && (n3 = t3.getText());
      let r3 = `${t3.languageId}:${n3}`, i3 = He2.get(r3);
      if (i3 !== void 0) return i3;
      let a3 = z2(e3, t3), o3 = We2(t3) ? `none` : Ue2(e3, t3) || Ge2(t3) ? `html` : a3 ? `jsx` : null;
      if (o3 === null) return He2.set(r3, null), null;
      n3 = W2(n3, a3 ? `js` : `html`);
      let s3 = o3 === `none` ? Ve2 : Be2;
      s3.reset(n3);
      let c3 = o3, l3 = [
        {
          type: o3,
          range: {
            start: {
              line: 0,
              character: 0
            },
            end: void 0
          }
        }
      ], u3 = 0;
      try {
        for (let e4 of s3) {
          if (!e4.type.startsWith(`nested`)) if (e4.type.endsWith(`BlockStart`)) {
            let t4 = q2(n3, u3);
            l3[l3.length - 1].range.end || (l3[l3.length - 1].range.end = t4), c3 = e4.type.replace(/BlockStart$/, ``), l3.push({
              type: c3,
              range: {
                start: t4,
                end: void 0
              }
            });
          } else if (e4.type.endsWith(`BlockEnd`)) {
            let e5 = q2(n3, u3);
            l3[l3.length - 1].range.end = e5, l3.push({
              type: o3,
              range: {
                start: e5,
                end: void 0
              }
            });
          } else e4.type === `lang` ? l3[l3.length - 1].type = e4.text : e4.type === `type` && Le2.includes(e4.text) && (l3[l3.length - 1].type = `html`);
          u3 += e4.text.length;
        }
      } catch {
        return He2.set(r3, null), null;
      }
      return l3[l3.length - 1].range.end || (l3[l3.length - 1].range.end = q2(n3, u3)), He2.set(r3, l3), l3;
    }
    function Ue2(e3, t3) {
      let n3 = Object.keys(e3.editor.userLanguages).filter((t4) => be2.includes(e3.editor.userLanguages[t4]));
      return [
        ...be2,
        ...n3
      ].indexOf(t3.languageId) !== -1;
    }
    function We2(e3) {
      return e3.languageId === `vue`;
    }
    function Ge2(e3) {
      return e3.languageId === `svelte`;
    }
    function Ke2(e3, t3, n3) {
      let r3 = Y2(e3, t3, t3.getText({
        start: {
          line: 0,
          character: 0
        },
        end: n3
      }));
      return !!r3 && r3[r3.length - 1].type === `html`;
    }
    function qe2(e3) {
      return v2(e3) ? Object.keys(e3).length + ` values` : typeof e3 == `function` ? `\u0192` : u2(e3, {
        inlineCharacterLimit: 1 / 0,
        singleQuotes: false,
        transform: (e4, t3, n3) => typeof e4[t3] == `function` ? `\u0192` : n3
      });
    }
    function Je2(e3, t3, r3) {
      if (true !== t3.__rule && !Array.isArray(t3)) return null;
      if (Array.isArray(t3)) {
        let n3 = t3.map((t4) => Je2(e3, t4, r3)).filter(Boolean);
        return n3.length === 0 ? null : n3.join(`

`);
      }
      let i3 = ``, a3 = ` `.repeat(r3.editor.tabSize), o3 = n2(t3, `__context`, []), s3 = Object.keys(b2(t3));
      if (s3.length === 0) return null;
      for (let e4 = 0; e4 < o3.length; e4++) i3 += `${a3.repeat(e4)}${o3[e4]} {
`;
      let c3 = a3.repeat(o3.length), u3 = s3.reduce((e4, n3, i4) => `${e4}${i4 === 0 ? `` : `
`}${w2(t3[n3]).map((e5) => {
        let t4 = r3.tailwindCSS.showPixelEquivalents ? ee2(e5, r3.tailwindCSS.rootFontSize) : void 0;
        return `${c3 + a3}${n3}: ${e5}${t4 ? `/* ${t4} */` : ``};`;
      }).join(`
`)}`, ``);
      i3 += `${c3}${(function(e4, t4) {
        let n3 = t4.__pseudo.join(``);
        return `${t4.__scope ? t4.__scope + ` ` : ``}.${l2(e4)}${n3}`;
      })(e3, t3)} {
${u3}
${c3}}`;
      for (let e4 = o3.length - 1; e4 >= 0; e4--) i3 += a3.repeat(e4) + `
}`;
      return i3;
    }
    function X2(e3, t3) {
      let n3 = typeof t3 == `number` ? t3.toString().length : 8;
      return (`0`.repeat(n3) + e3).slice(-n3);
    }
    function Z2(e3, t3) {
      return !!e3.startsWith(`0.0.0-insiders`) || f2(e3, t3);
    }
    function Q2(e3, t3) {
      let n3 = 0, r3 = `https://tailwindcss-v0.netlify.app/docs/`;
      return Z2(e3, `0.99.0`) && (n3 = 1, r3 = `https://v1.tailwindcss.com/docs/`), Z2(e3, `1.99.0`) && (n3 = 2, r3 = `https://tailwindcss.com/docs/`), `${r3}${Array.isArray(t3) ? t3[n3] || t3[t3.length - 1] : t3}`;
    }
    function Ye2(e3, t3) {
      let r3 = Array.isArray(t3) ? t3 : P2(e3, t3);
      if (!r3) return null;
      let i3 = n2(e3.classNames.classNames, [
        ...r3,
        `__info`
      ]);
      return Array.isArray(i3) ? i3.map((e4) => ({
        source: e4.__source,
        pseudo: e4.__pseudo,
        scope: e4.__scope,
        context: e4.__context
      })) : {
        source: i3.__source,
        pseudo: i3.__pseudo,
        scope: i3.__scope,
        context: i3.__context
      };
    }
    function Xe2(e3, t3) {
      return e3.featureFlags.future.includes(t3) ? e3.config.future === `all` || n2(e3.config, [
        `future`,
        t3
      ], false) : !!e3.featureFlags.experimental.includes(t3) && (e3.config.experimental === `all` || n2(e3.config, [
        `experimental`,
        t3
      ], false));
    }
    function Ze2(e3, t3) {
      if (e3.jit) return {
        isApplyable: true
      };
      let n3 = Ye2(e3, t3);
      if (!n3) return null;
      if (Z2(e3.version, `2.0.0-alpha.1`) || Xe2(e3, `applyComplexClasses`)) return {
        isApplyable: true
      };
      let r3 = Array.isArray(t3) ? t3.join(e3.separator) : t3, i3;
      return Array.isArray(n3) ? i3 = `'@apply' cannot be used with '${r3}' because it is included in multiple rulesets.` : n3.source === `utilities` ? n3.context && n3.context.length > 0 ? i3 = n3.context.length === 1 ? `'@apply' cannot be used with '${r3}' because it is nested inside of an at-rule ('${n3.context[0]}').` : `'@apply' cannot be used with '${r3}' because it is nested inside of at-rules (${n3.context.map((e4) => `'${e4}'`).join(`, `)}).` : n3.pseudo && n3.pseudo.length > 0 && (i3 = n3.pseudo.length === 1 ? `'@apply' cannot be used with '${r3}' because its definition includes a pseudo-selector ('${n3.pseudo[0]}')` : `'@apply' cannot be used with '${r3}' because its definition includes pseudo-selectors (${n3.pseudo.map((e4) => `'${e4}'`).join(`, `)}).`) : i3 = `'@apply' cannot be used with '${r3}' because it is not a utility.`, i3 ? {
        isApplyable: false,
        reason: i3
      } : {
        isApplyable: true
      };
    }
    function Qe2(e3, t3) {
      let n3 = e3.variants.flatMap((e4) => e4.values.length ? e4.values.map((t4) => t4 === `DEFAULT` ? e4.name : `${e4.name}${e4.hasDash ? `-` : ``}${t4}`) : [
        e4.name
      ]), r3 = /* @__PURE__ */ new Set(), i3 = 0, a3 = (function(e4, t4) {
        let n4 = [], r4 = [], i4 = 0;
        for (let a4 = 0; a4 < e4.length; a4++) {
          let o3 = e4[a4];
          n4.length === 0 && o3 === t4[0] && (t4.length !== 1 && e4.slice(a4, a4 + t4.length) !== t4 || (r4.push(e4.slice(i4, a4)), i4 = a4 + t4.length)), o3 === `(` || o3 === `[` || o3 === `{` ? n4.push(o3) : (o3 === `)` && n4[n4.length - 1] === `(` || o3 === `]` && n4[n4.length - 1] === `[` || o3 === `}` && n4[n4.length - 1] === `{`) && n4.pop();
        }
        return r4.push(e4.slice(i4)), r4;
      })(t3, e3.separator);
      if (a3.length < 2) return {
        variants: Array.from(r3),
        offset: i3
      };
      a3 = a3.filter(Boolean);
      for (let t4 of a3) {
        if (!(n3.includes(t4) || e3.jit && (t4.includes(`[`) && t4.endsWith(`]`) || t4.includes(`/`)) && F2(e3, [
          `${t4}${e3.separator}[color:red]`
        ]).rules.length > 0)) break;
        r3.add(t4), i3 += t4.length + e3.separator.length;
      }
      return {
        variants: Array.from(r3),
        offset: i3
      };
    }
    function $e2(e3, t3, i3, a3, o3) {
      let s3 = t3.split(/[\s+]/), c3 = s3[s3.length - 1], l3, u3 = e3.separator, d3 = c3.split(u3), f3 = [], p3 = false, m3 = {
        ...i3,
        start: {
          ...i3.start,
          character: i3.end.character - c3.length
        }
      };
      if (e3.jit) {
        let { variants: t4, offset: s4 } = Qe2(e3, c3);
        if (o3 && (o3.triggerKind === 1 || o3.triggerKind === 2 && o3.triggerCharacter === `/`) && c3.includes(`/`)) {
          let t5, i4 = c3.split(`/`).slice(0, -1).join(`/`);
          if (e3.classListContainsMetadata) {
            var h3, g2;
            let n3 = i4.slice(s4);
            t5 = (h3 = e3.classList.find((e4) => Array.isArray(e4) && e4[0] === n3)) == null || (g2 = h3[1]) == null ? void 0 : g2.modifiers;
          } else {
            let { rules: r3 } = F2(e3, [
              i4 + `/[0]`
            ]);
            if (r3.length > 0) {
              let r4 = n2(e3.config, `theme.opacity`, {});
              v2(r4) || (r4 = {}), t5 = Object.keys(r4);
            }
          }
          if (t5) return nt2({
            isIncomplete: false,
            items: t5.map((t6, n3) => {
              let a4, o4 = `${i4}/${t6}`, s5 = 21, c4 = _e2(e3, o4);
              return c4 !== null && (s5 = 16, typeof c4 != `string` && (c4.alpha ?? 1) !== 0 && (a4 = r2.formatRgb(c4))), {
                label: o4,
                ...a4 ? {
                  documentation: a4
                } : {},
                kind: s5,
                sortText: X2(n3)
              };
            })
          }, {
            range: m3,
            data: e3.completionItemData
          }, e3.editor.capabilities.itemDefaults);
        }
        m3.start.character += s4;
        let l4 = c3.substr(s4).startsWith(`!`);
        l4 && (m3.start.character += 1);
        let d4 = [];
        if (!l4) {
          let r3 = function(t5) {
            return {
              kind: 9,
              data: {
                ...e3.completionItemData ?? {},
                _type: `variant`
              },
              command: t5.insertTextFormat === 2 ? void 0 : {
                title: ``,
                command: `editor.action.triggerSuggest`
              },
              sortText: `-` + X2(n3++),
              ...t5
            };
          };
          let n3 = 0;
          d4.push(...e3.variants.flatMap((n4) => {
            let a4 = [];
            if (n4.isArbitrary) a4.push(r3({
              label: `${n4.name}${n4.hasDash ? `-` : ``}[]${u3}`,
              insertTextFormat: 2,
              textEditText: `${n4.name}${n4.hasDash ? `-` : ``}[\${1}]${u3}\${0}`
            }));
            else if (!t4.includes(n4.name)) {
              let o4 = !Z2(e3.version, `2.99.0`), s5 = [
                ...t4,
                n4.name
              ];
              if (o4) {
                let t5 = e3.variants.map((e4) => {
                  let { name: t6 } = e4;
                  return t6;
                });
                s5 = s5.sort((e4, n5) => t5.indexOf(n5) - t5.indexOf(e4));
              }
              a4.push(r3({
                label: `${n4.name}${u3}`,
                detail: n4.selectors().join(`, `),
                textEditText: s5[s5.length - 1] + u3,
                additionalTextEdits: o4 && s5.length > 1 ? [
                  {
                    newText: s5.slice(0, s5.length - 1).join(u3) + u3,
                    range: {
                      start: {
                        ...i3.start,
                        character: i3.end.character - c3.length
                      },
                      end: {
                        ...m3.start,
                        character: m3.start.character
                      }
                    }
                  }
                ] : []
              }));
            }
            return n4.values.length && a4.push(...n4.values.filter((e4) => !t4.includes(`${n4.name}-${e4}`)).map((e4) => r3({
              label: e4 === `DEFAULT` ? `${n4.name}${u3}` : `${n4.name}${n4.hasDash ? `-` : ``}${e4}${u3}`,
              detail: n4.selectors({
                value: e4
              }).join(`, `)
            }))), a4;
          }));
        }
        return e3.classList ? nt2({
          isIncomplete: false,
          items: d4.concat(e3.classList.map((t5, n3) => {
            let i4, [a4, { color: o4 }] = t5, s5 = o4 ? 16 : 21;
            return o4 && typeof o4 != `string` && (i4 = r2.formatRgb(o4)), {
              label: a4,
              kind: s5,
              ...i4 ? {
                documentation: i4
              } : {},
              sortText: X2(n3, e3.classList.length)
            };
          }))
        }, {
          data: {
            ...e3.completionItemData ?? {},
            ...l4 ? {
              important: l4
            } : {},
            variants: t4
          },
          range: m3
        }, e3.editor.capabilities.itemDefaults) : nt2({
          isIncomplete: false,
          items: d4.concat(Object.keys(e3.classNames.classNames).filter((n3) => {
            let r3 = e3.classNames.classNames[n3];
            return t4.length === 0 ? r3.__info : r3.__info && ((e4) => Array.isArray(e4.__info) ? e4.__info.some((e5) => e5.__source === `utilities`) : e4.__info.__source === `utilities`)(r3);
          }).map((t5, n3, i4) => {
            let a4, o4 = 21, s5 = _e2(e3, t5);
            return s5 !== null && (o4 = 16, typeof s5 != `string` && (s5.alpha ?? 1) !== 0 && (a4 = r2.formatRgb(s5))), {
              label: t5,
              kind: o4,
              ...a4 ? {
                documentation: a4
              } : {},
              sortText: X2(n3, i4.length)
            };
          })).filter((e4) => e4 !== null && !(a3 && !a3(e4)))
        }, {
          range: m3,
          data: {
            ...e3.completionItemData ?? {},
            variants: t4,
            ...l4 ? {
              important: l4
            } : {}
          }
        }, e3.editor.capabilities.itemDefaults);
      }
      for (let t4 = d3.length - 1; t4 > 0; t4--) {
        let r3 = d3.slice(0, t4).filter(Boolean);
        if (l3 = n2(e3.classNames.classNames, r3), l3 !== void 0 && n2(l3, [
          `__info`,
          `__rule`
        ]) === void 0) {
          p3 = true, f3 = r3, m3 = {
            ...m3,
            start: {
              ...m3.start,
              character: m3.start.character + r3.join(u3).length + u3.length
            }
          };
          break;
        }
      }
      return nt2({
        isIncomplete: false,
        items: Object.keys(p3 ? l3 : e3.classNames.classNames).filter((e4) => e4 !== `__info`).filter((t4) => (function(e4, t5) {
          let r3 = n2(e4.classNames.classNames, [
            t5
          ]);
          return !!v2(r3) && !!e4.classNames.context[t5[t5.length - 1]] && (Object.keys(r3).filter((e5) => e5 !== `__info`).length > 0 || v2(r3.__info) && !r3.__info.__rule);
        })(e3, [
          ...f3,
          t4
        ])).map((t4, n3, r3) => ({
          label: t4 + u3,
          kind: 9,
          command: {
            title: ``,
            command: `editor.action.triggerSuggest`
          },
          sortText: `-` + X2(n3, r3.length),
          data: {
            ...e3.completionItemData ?? {},
            className: t4,
            variants: f3
          }
        })).concat(Object.keys(p3 ? l3 : e3.classNames.classNames).filter((t4) => n2(e3.classNames.classNames, [
          ...f3,
          t4,
          `__info`
        ])).map((t4, n3, i4) => {
          let a4, o4 = 21, s4 = _e2(e3, t4);
          return s4 !== null && (o4 = 16, typeof s4 != `string` && (s4.alpha ?? 1) !== 0 && (a4 = r2.formatRgb(s4))), {
            label: t4,
            kind: o4,
            ...a4 ? {
              documentation: a4
            } : {},
            sortText: X2(n3, i4.length)
          };
        })).filter((e4) => e4 !== null && !(a3 && !a3(e4)))
      }, {
        range: m3,
        data: {
          ...e3.completionItemData ?? {},
          variants: f3
        }
      }, e3.editor.capabilities.itemDefaults);
    }
    var et2 = /^(\d+\.?|\d*\.\d+)$/;
    function tt2(e3) {
      return et2.test(e3);
    }
    function nt2(e3, t3, n3) {
      let r3 = n3.includes(`data`), i3 = n3.includes(`editRange`);
      return {
        ...e3,
        ...r3 || i3 ? {
          itemDefaults: {
            ...r3 && t3.data ? {
              data: t3.data
            } : {},
            ...i3 && t3.range ? {
              editRange: t3.range
            } : {}
          }
        } : {},
        items: r3 && i3 ? e3.items : e3.items.map((e4) => {
          let { textEditText: n4, ...a3 } = e4;
          return {
            ...a3,
            ...r3 || !t3.data || a3.data ? {} : {
              data: t3.data
            },
            ...i3 || !t3.range ? n4 ? {
              textEditText: n4
            } : {} : {
              textEdit: {
                newText: n4 ?? a3.label,
                range: t3.range
              }
            }
          };
        })
      };
    }
    var rt2;
    function it2(t3) {
      return t3.code === e2.DiagnosticKind.CssConflict;
    }
    function at2(t3) {
      return t3.code === e2.DiagnosticKind.InvalidApply;
    }
    function ot(t3) {
      return t3.code === e2.DiagnosticKind.InvalidScreen;
    }
    function st(t3) {
      return t3.code === e2.DiagnosticKind.InvalidVariant;
    }
    function ct(t3) {
      return t3.code === e2.DiagnosticKind.InvalidConfigPath;
    }
    function lt(t3) {
      return t3.code === e2.DiagnosticKind.InvalidTailwindDirective;
    }
    function ut(t3) {
      return t3.code === e2.DiagnosticKind.RecommendedVariantOrder;
    }
    function dt(e3) {
      return e3.reduce((t3, n3, r3) => r3 === 0 ? n3 : e3.length > 1 && r3 === e3.length - 1 ? `${t3} and ${n3}` : `${t3}, ${n3}`, ``);
    }
    function ft(e3, t3) {
      let r3 = P2(e3, t3);
      if (!r3) return null;
      let i3 = n2(e3.classNames.classNames, [
        ...r3,
        `__info`
      ]);
      return Array.isArray(i3) ? i3.map(b2) : b2(i3);
    }
    async function pt(t3, n3, r3) {
      let i3 = r3.tailwindCSS.lint.cssConflict;
      if (i3 === `ignore`) return [];
      let a3 = [];
      return (await Ne2(t3, n3)).forEach((r4) => {
        let o3 = K2(r4);
        o3.forEach((r5, s3) => {
          if (t3.jit) {
            let { rules: c4 } = F2(t3, [
              r5.className
            ]);
            if (c4.length === 0) return;
            let l4 = c4.map((e3) => {
              let n4 = [];
              return e3.walkDecls((e4) => {
                let { prop: t4 } = e4;
                n4.push(t4);
              }), {
                context: oe2(t3, e3, r5.className),
                properties: n4
              };
            }), u4 = o3.filter((e3, t4) => t4 !== s3).filter((e3) => {
              let { rules: n4 } = F2(t3, [
                e3.className
              ]);
              if (n4.length !== c4.length) return false;
              for (let r6 = 0; r6 < n4.length; r6++) {
                let i4 = n4[r6], a4 = [];
                if (i4.walkDecls((e4) => {
                  let { prop: t4 } = e4;
                  a4.push(t4);
                }), !E2(l4[r6].properties, a4)) return false;
                let o4 = oe2(t3, i4, e3.className);
                if (!E2(l4[r6].context, o4)) return false;
              }
              return true;
            });
            if (u4.length === 0) return;
            a3.push({
              code: e2.DiagnosticKind.CssConflict,
              className: r5,
              otherClassNames: u4,
              range: r5.range,
              severity: i3 === `error` ? 1 : 2,
              message: `'${r5.className}' applies the same CSS properties as ${dt(u4.map((e3) => `'${e3.className}'`))}.`,
              relatedInformation: u4.map((e3) => ({
                message: e3.className,
                location: {
                  uri: n3.uri,
                  range: e3.range
                }
              }))
            });
            return;
          }
          let c3 = ft(t3, r5.className);
          if (!c3) return;
          let l3 = Object.keys(c3), u3 = Ye2(t3, r5.className), d3 = o3.filter((e3, t4) => t4 !== s3).filter((e3) => {
            let n4 = ft(t3, e3.className);
            if (!n4) return false;
            let r6 = Ye2(t3, e3.className);
            return E2(l3, Object.keys(n4)) && !Array.isArray(u3) && !Array.isArray(r6) && E2(u3.context, r6.context) && E2(u3.pseudo, r6.pseudo) && u3.scope === r6.scope;
          });
          d3.length !== 0 && a3.push({
            code: e2.DiagnosticKind.CssConflict,
            className: r5,
            otherClassNames: d3,
            range: r5.range,
            severity: i3 === `error` ? 1 : 2,
            message: `'${r5.className}' applies the same CSS ${l3.length === 1 ? `property` : `properties`} as ${dt(d3.map((e3) => `'${e3.className}'`))}.`,
            relatedInformation: d3.map((e3) => ({
              message: e3.className,
              location: {
                uri: n3.uri,
                range: e3.range
              }
            }))
          });
        });
      }), a3;
    }
    async function mt(t3, n3, r3) {
      let i3 = r3.tailwindCSS.lint.invalidApply;
      return i3 === `ignore` ? [] : (await Oe2(t3, n3, void 0, `css`, false)).map((n4) => {
        let r4 = Ze2(t3, n4.className);
        return r4 === null || true === r4.isApplyable ? null : {
          code: e2.DiagnosticKind.InvalidApply,
          severity: i3 === `error` ? 1 : 2,
          range: n4.range,
          message: r4.reason,
          className: n4
        };
      }).filter(Boolean);
    }
    function ht(e3, t3) {
      return t3.concat([]).sort((t4, n3) => p2(e3, t4) - p2(e3, n3))[0];
    }
    function gt(e3, t3) {
      return {
        start: {
          line: (t3?.start.line || 0) + e3.start.line,
          character: (e3.end.line === 0 && t3?.start.character || 0) + e3.start.character
        },
        end: {
          line: (t3?.start.line || 0) + e3.end.line,
          character: (e3.end.line === 0 && t3?.start.character || 0) + e3.end.character
        }
      };
    }
    function _t(t3, n3, r3) {
      let i3 = r3.tailwindCSS.lint.invalidScreen;
      if (i3 === `ignore`) return [];
      let a3 = [], o3 = [];
      if (Se2(t3, n3)) o3.push(void 0);
      else {
        let e3 = Y2(t3, n3);
        if (!e3) return [];
        o3.push(...e3.filter((e4) => e4.type === `css`).map((e4) => {
          let { range: t4 } = e4;
          return t4;
        }));
      }
      return o3.forEach((r4) => {
        let o4 = W2(n3, `css`, r4);
        G2(/(?:\s|^)@screen\s+(?<screen>[^\s{]+)/g, o4).forEach((n4) => {
          if (t3.screens.includes(n4.groups.screen)) return null;
          let s3 = `The screen '${n4.groups.screen}' does not exist in your theme config.`, c3 = [], l3 = ht(n4.groups.screen, t3.screens);
          l3 && (c3.push(l3), s3 += ` Did you mean '${l3}'?`), a3.push({
            code: e2.DiagnosticKind.InvalidScreen,
            range: gt({
              start: q2(o4, n4.index + n4[0].length - n4.groups.screen.length),
              end: q2(o4, n4.index + n4[0].length)
            }, r4),
            severity: i3 === `error` ? 1 : 2,
            message: s3,
            suggestions: c3
          });
        });
      }), a3;
    }
    function vt(t3, n3, r3) {
      let i3 = r3.tailwindCSS.lint.invalidVariant;
      if (i3 === `ignore` || Z2(t3.version, `2.99.0`)) return [];
      let a3 = [], o3 = [];
      if (Se2(t3, n3)) o3.push(void 0);
      else {
        let e3 = Y2(t3, n3);
        if (!e3) return [];
        o3.push(...e3.filter((e4) => e4.type === `css`).map((e4) => {
          let { range: t4 } = e4;
          return t4;
        }));
      }
      let s3 = t3.variants.flatMap((e3) => e3.values.length ? e3.values.map((t4) => t4 === `DEFAULT` ? e3.name : `${e3.name}${e3.hasDash ? `-` : ``}${t4}`) : [
        e3.name
      ]);
      return t3.jit && (s3.unshift(`responsive`), s3 = s3.filter((e3) => !t3.screens.includes(e3))), o3.forEach((t4) => {
        let r4 = W2(n3, `css`, t4);
        G2(/(?:\s|^)@variants\s+(?<variants>[^{]+)/g, r4).forEach((n4) => {
          let o4 = n4.groups.variants.split(/(\s*,\s*)/), c3 = n4.index + n4[0].length - n4.groups.variants.length;
          for (let n5 = 0; n5 < o4.length; n5 += 2) {
            let l3 = o4[n5].trim();
            if (s3.includes(l3)) continue;
            let u3 = `The variant '${l3}' does not exist.`, d3 = [], f3 = ht(l3, s3);
            f3 && (d3.push(f3), u3 += ` Did you mean '${f3}'?`);
            let p3 = c3 + o4.slice(0, n5).join(``).length;
            a3.push({
              code: e2.DiagnosticKind.InvalidVariant,
              range: gt({
                start: q2(r4, p3),
                end: q2(r4, p3 + l3.length)
              }, t4),
              severity: i3 === `error` ? 1 : 2,
              message: u3,
              suggestions: d3
            });
          }
        });
      }), a3;
    }
    (rt2 = e2.DiagnosticKind || (e2.DiagnosticKind = {})).CssConflict = `cssConflict`, rt2.InvalidApply = `invalidApply`, rt2.InvalidScreen = `invalidScreen`, rt2.InvalidVariant = `invalidVariant`, rt2.InvalidConfigPath = `invalidConfigPath`, rt2.InvalidTailwindDirective = `invalidTailwindDirective`, rt2.RecommendedVariantOrder = `recommendedVariantOrder`;
    var yt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bt = /\\(\\)?/g;
    function xt(e3) {
      let t3 = [];
      return e3.charCodeAt(0) === 46 && t3.push(``), e3.replace(yt, (e4, n3, r3, i3) => {
        t3.push(r3 ? i3.replace(bt, `$1`) : n3 || e4);
      }), t3;
    }
    function St(e3) {
      return typeof e3 == `string` ? e3 : e3.reduce((e4, t3, n3) => n3 === 0 ? t3 : t3.includes(`.`) ? `${e4}[${t3}]` : `${e4}.${t3}`, ``);
    }
    function Ct(e3, t3, r3) {
      r3 === void 0 && (r3 = []);
      let i3 = Array.isArray(t3) ? t3 : xt(t3), a3 = n2(e3.config, [
        ...r3,
        ...i3
      ]), o3 = [];
      function s3() {
        return O2(`123456789`.substr(0, i3.length - 1)).map((e4) => e4.split(``).map((e5) => parseInt(e5, 10))).map((e4) => {
          let t4 = [], n3 = 0;
          return e4.forEach((e5) => {
            t4.push(i3.slice(n3, e5).join(`.`)), n3 = e5;
          }), t4.push(i3.slice(n3).join(`.`)), t4;
        }).slice(1).find((t4) => Ct(e3, t4, r3).isValid);
      }
      if (a3 === void 0) {
        let a4 = `'${St(t3)}' does not exist in your theme config.`, c4 = [
          ...r3,
          ...i3.slice(0, i3.length - 1)
        ], l3 = n2(e3.config, c4);
        if (v2(l3)) {
          let t4 = ht(i3[i3.length - 1], Object.keys(l3).filter((t5) => Ct(e3, [
            ...c4,
            t5
          ]).isValid));
          t4 && (o3.push(St([
            ...i3.slice(0, i3.length - 1),
            t4
          ])), a4 += ` Did you mean '${o3[0]}'?`);
        } else {
          let e4 = s3();
          if (e4) return {
            isValid: false,
            reason: `${a4} Did you mean '${St(e4)}'?`,
            suggestions: [
              St(e4)
            ]
          };
        }
        return {
          isValid: false,
          reason: a4,
          suggestions: o3
        };
      }
      if (!(typeof a3 == `string` || typeof a3 == `number` || a3 instanceof String || a3 instanceof Number || Array.isArray(a3) || typeof a3 == `function`)) {
        let n3 = `'${St(t3)}' was found but does not resolve to a valid theme value.`;
        if (v2(a3)) {
          let t4 = Object.keys(a3).filter((t5) => Ct(e3, [
            ...i3,
            t5
          ], r3).isValid);
          t4.length && (o3.push(...t4.map((e4) => St([
            ...i3,
            e4
          ]))), n3 += ` Did you mean something like '${o3[0]}'?`);
        }
        return {
          isValid: false,
          reason: n3,
          suggestions: o3
        };
      }
      let c3 = true;
      for (let t4 = i3.length - 1; t4 >= 0; t4--) {
        let a4 = i3[t4], o4 = n2(e3.config, [
          ...r3,
          ...i3.slice(0, t4)
        ]);
        if (/^[0-9]+$/.test(a4)) {
          if (!v2(o4) && !Array.isArray(o4)) {
            c3 = false;
            break;
          }
        } else if (!v2(o4)) {
          c3 = false;
          break;
        }
      }
      if (!c3) {
        let e4 = `'${St(t3)}' does not exist in your theme config.`, n3 = s3();
        return n3 ? {
          isValid: false,
          reason: `${e4} Did you mean '${St(n3)}'?`,
          suggestions: [
            St(n3)
          ]
        } : {
          isValid: false,
          reason: e4,
          suggestions: []
        };
      }
      return {
        isValid: true,
        value: a3
      };
    }
    function wt(t3, n3, r3) {
      let i3 = r3.tailwindCSS.lint.invalidConfigPath;
      if (i3 === `ignore`) return [];
      let a3 = [];
      return Pe2(t3, n3).forEach((n4) => {
        let r4 = Ct(t3, n4.path, n4.helper === `theme` ? [
          `theme`
        ] : []);
        true !== r4.isValid && a3.push({
          code: e2.DiagnosticKind.InvalidConfigPath,
          range: n4.ranges.path,
          severity: i3 === `error` ? 1 : 2,
          message: r4.reason,
          suggestions: r4.suggestions
        });
      }), a3;
    }
    function Tt(t3, n3, r3) {
      let i3 = r3.tailwindCSS.lint.invalidTailwindDirective;
      if (i3 === `ignore`) return [];
      let a3 = [], o3 = [];
      if (Se2(t3, n3)) o3.push(void 0);
      else {
        let e3 = Y2(t3, n3);
        if (!e3) return [];
        o3.push(...e3.filter((e4) => e4.type === `css`).map((e4) => {
          let { range: t4 } = e4;
          return t4;
        }));
      }
      let s3, c3 = [
        `sass`,
        `sugarss`,
        `stylus`
      ];
      s3 = c3.includes(n3.languageId) || t3.editor && c3.includes(t3.editor.userLanguages[n3.languageId]) ? /(?:\s|^)@tailwind\s+(?<value>[^\r\n]+)/g : /(?:\s|^)@tailwind\s+(?<value>[^;]+)/g;
      let l3 = t3.jit && Z2(t3.version, `2.1.99`);
      return o3.forEach((r4) => {
        let o4 = W2(n3, `css`, r4), c4 = G2(s3, o4), u3 = [
          `utilities`,
          `components`,
          `screens`,
          Z2(t3.version, `1.0.0-beta.1`) ? `base` : `preflight`,
          l3 && `variants`
        ].filter(Boolean), d3 = u3;
        l3 && (d3 = d3.filter((e3) => e3 !== `screens`)), c4.forEach((t4) => {
          if (u3.includes(t4.groups.value)) return null;
          let n4 = `'${t4.groups.value}' is not a valid value.`, s4 = [];
          if (t4.groups.value === `preflight`) s4.push(`base`), n4 += ` Did you mean 'base'?`;
          else {
            let e3 = ht(t4.groups.value, d3);
            e3 && (s4.push(e3), n4 += ` Did you mean '${e3}'?`);
          }
          a3.push({
            code: e2.DiagnosticKind.InvalidTailwindDirective,
            range: gt({
              start: q2(o4, t4.index + t4[0].length - t4.groups.value.length),
              end: q2(o4, t4.index + t4[0].length)
            }, r4),
            severity: i3 === `error` ? 1 : 2,
            message: n4,
            suggestions: s4
          });
        });
      }), a3;
    }
    async function Et(t3, n3, r3) {
      if (!t3.jit || Z2(t3.version, `2.99.0`)) return [];
      let i3 = r3.tailwindCSS.lint.recommendedVariantOrder;
      if (i3 === `ignore`) return [];
      let a3 = [];
      return (await Ne2(t3, n3)).forEach((n4) => {
        K2(n4).forEach((n5) => {
          let { rules: r4 } = F2(t3, [
            n5.className
          ]);
          if (r4.length === 0) return;
          let { variants: o3, offset: s3 } = Qe2(t3, n5.className), c3 = [
            ...o3
          ].sort((e3, n6) => te2(t3.jitContext.variantOrder.get(n6) - t3.jitContext.variantOrder.get(e3)));
          (function(e3, t4) {
            if (e3 === t4) return true;
            if (e3.length !== t4.length) return false;
            for (let n6 = 0; n6 < e3.length; ++n6) if (e3[n6] !== t4[n6]) return false;
            return true;
          })(o3, c3) || a3.push({
            code: e2.DiagnosticKind.RecommendedVariantOrder,
            suggestions: [
              [
                ...c3,
                n5.className.substr(s3)
              ].join(t3.separator)
            ],
            range: n5.range,
            severity: i3 === `error` ? 1 : 2,
            message: `Variants are not in the recommended order, which may cause unexpected CSS output.`
          });
        });
      }), a3;
    }
    async function Dt(t3, n3, r3) {
      r3 === void 0 && (r3 = [
        e2.DiagnosticKind.CssConflict,
        e2.DiagnosticKind.InvalidApply,
        e2.DiagnosticKind.InvalidScreen,
        e2.DiagnosticKind.InvalidVariant,
        e2.DiagnosticKind.InvalidConfigPath,
        e2.DiagnosticKind.InvalidTailwindDirective,
        e2.DiagnosticKind.RecommendedVariantOrder
      ]);
      let i3 = await t3.editor.getConfiguration(n3.uri);
      return i3.tailwindCSS.validate ? [
        ...r3.includes(e2.DiagnosticKind.CssConflict) ? await pt(t3, n3, i3) : [],
        ...r3.includes(e2.DiagnosticKind.InvalidApply) ? await mt(t3, n3, i3) : [],
        ...r3.includes(e2.DiagnosticKind.InvalidScreen) ? _t(t3, n3, i3) : [],
        ...r3.includes(e2.DiagnosticKind.InvalidVariant) ? vt(t3, n3, i3) : [],
        ...r3.includes(e2.DiagnosticKind.InvalidConfigPath) ? wt(t3, n3, i3) : [],
        ...r3.includes(e2.DiagnosticKind.InvalidTailwindDirective) ? Tt(t3, n3, i3) : [],
        ...r3.includes(e2.DiagnosticKind.RecommendedVariantOrder) ? await Et(t3, n3, i3) : []
      ] : [];
    }
    function Ot(e3, t3) {
      let n3 = w2(t3), r3 = a2(e3 + `
`, {
        origin: 0
      }), i3 = [];
      n3.forEach((t4) => {
        let n4 = r3.toIndex(t4.start.line, t4.start.character), a3 = r3.toIndex(t4.end.line, t4.end.character);
        for (let t5 = n4 - 1; t5 >= 0 && /\s/.test(e3.charAt(t5)); t5--) n4 = t5;
        i3.push({
          start: n4,
          end: a3
        });
      }), i3.sort((e4, t4) => e4.start - t4.start);
      let o3 = ``, s3 = 0;
      return i3.forEach((t4) => {
        o3 += e3.substring(s3, t4.start), s3 = t4.end;
      }), o3 += e3.substring(s3), o3.trim();
    }
    var kt = /\s*!important\s*$/i, $ = {
      "box-flex": true,
      "box-flex-group": true,
      "column-count": true,
      flex: true,
      "flex-grow": true,
      "flex-positive": true,
      "flex-shrink": true,
      "flex-negative": true,
      "font-weight": true,
      "line-clamp": true,
      "line-height": true,
      opacity: true,
      order: true,
      orphans: true,
      "tab-size": true,
      widows: true,
      "z-index": true,
      zoom: true,
      "fill-opacity": true,
      "stroke-dashoffset": true,
      "stroke-opacity": true,
      "stroke-width": true
    };
    function At(e3, t3, n3, r3) {
      false !== n3 && n3 !== null && (t3 = t3.replace(/([A-Z])/g, `-$1`).replace(/^ms-/, `-ms-`).toLowerCase(), typeof n3 == `number` && (n3 = n3 === 0 || $[t3] ? n3.toString() : n3.toString() + `px`), t3 === `css-float` && (t3 = `float`), kt.test(n3) ? (n3 = n3.replace(kt, ``), e3.push(r3.decl({
        prop: t3,
        value: n3,
        important: true
      }))) : e3.push(r3.decl({
        prop: t3,
        value: n3
      })));
    }
    function jt(e3, t3, n3, r3) {
      var i3 = r3.atRule({
        name: t3[1],
        params: t3[3] || ``
      });
      typeof n3 == `object` && (i3.nodes = [], Mt(n3, i3, r3)), e3.push(i3);
    }
    function Mt(e3, t3, n3) {
      var r3, i3, a3, o3;
      for (r3 in e3) if (e3.hasOwnProperty(r3)) {
        if ((i3 = e3[r3]) == null) continue;
        if (r3[0] === `@`) {
          var s3 = r3.match(/@([^\s]+)(\s+([\w\W]*)\s*)?/);
          if (Array.isArray(i3)) for (o3 = 0; o3 < i3.length; o3++) jt(t3, s3, i3[o3], n3);
          else jt(t3, s3, i3, n3);
        } else if (Array.isArray(i3)) for (o3 = 0; o3 < i3.length; o3++) At(t3, r3, i3[o3], n3);
        else typeof i3 == `object` ? (Mt(i3, a3 = n3.rule({
          selector: r3
        }), n3), t3.push(a3)) : At(t3, r3, i3, n3);
      }
    }
    function Nt(e3) {
      return {
        start: {
          line: e3.start.line - 1,
          character: e3.start.column - 1
        },
        end: {
          line: e3.end.line - 1,
          character: e3.end.column
        }
      };
    }
    e2.completionsFromClassList = $e2, e2.culoriColorToVscodeColor = I2, e2.doCodeActions = async function(e3, t3) {
      if (!e3.enabled) return [];
      let r3 = await (async function(e4, t4, n3) {
        let r4 = e4.editor.documents.get(t4.textDocument.uri);
        if (!r4) return [];
        let i3 = await Dt(e4, r4, n3);
        return t4.context.diagnostics.map((e5) => i3.find((t5) => t5.code === e5.code && t5.message === e5.message && x2(t5.range, e5.range))).filter(Boolean);
      })(e3, t3, t3.context.diagnostics.map((e4) => e4.code).filter(Boolean));
      return Promise.all(r3.map((r4) => at2(r4) ? (async function(e4, t4, r5) {
        let i3 = e4.editor.documents.get(t4.textDocument.uri);
        if (!i3) return [];
        let a3, o3 = W2(i3, `css`), { postcss: s3 } = e4.modules, c3 = [], l3 = r5.className.classList.classList.split(/\s+/).length, u3 = P2(e4, r5.className.className), d3 = n2(e4.classNames.classNames, u3);
        if (Array.isArray(d3)) return [];
        if (!Se2(e4, i3)) {
          let t5 = Y2(e4, i3);
          if (!t5 || (a3 = t5.filter((e5) => e5.type === `css`).find((e5) => {
            let { range: t6 } = e5;
            return Ce2(r5.range.start, t6);
          })?.range, !a3)) return [];
          o3 = W2(i3, `css`, a3);
        }
        try {
          await s3.module([
            s3.module.plugin(``, (function(t5) {
              return t5 === void 0 && (t5 = {}), (t6) => {
                t6.walkRules((t7) => {
                  if (c3.length) return false;
                  t7.walkAtRules(`apply`, (n3) => {
                    let i4 = Nt(n3.source);
                    if (a3 && (i4 = gt(i4, a3)), !Ce2(r5.range.start, i4)) return;
                    let s4 = (function(e5, t8, n4, r6) {
                      r6 === void 0 && (r6 = false);
                      let i5 = t8[t8.length - 1], a4 = Ze2(e5, [
                        i5
                      ]);
                      if (a4 === null || false === a4.isApplyable) return null;
                      let o4 = Ye2(e5, t8);
                      if (Array.isArray(o4)) return null;
                      let s5 = o4.context, c4 = o4.pseudo, l4 = e5.classNames.context, u4 = [];
                      for (let n5 = 0; n5 < t8.length - 1; n5++) {
                        let r7 = t8[n5], i6 = l4[r7];
                        if (!i6) return null;
                        e5.screens.includes(r7) && (u4.push(`@screen ` + r7), s5 = s5.filter((e6) => !i6.includes(e6)));
                      }
                      u4.push(...s5);
                      let d5 = {};
                      for (let e6 = 1; e6 <= u4.length; e6++) h2.dset(d5, u4.slice(0, e6), {});
                      if ((n4 = (function(e6, t9) {
                        if (t9.length === 0) return e6;
                        let n5 = true, r7 = _2((e7) => {
                          T2(e7.split((e8) => true)).forEach((e8) => {
                            for (let r8 = e8.nodes.length - 1; r8 >= 0 && e8.nodes[r8].type === `pseudo`; r8--) if (t9.includes(e8.nodes[r8].value)) {
                              n5 = false;
                              break;
                            }
                            n5 && t9.forEach((t10) => {
                              e8.append(_2.pseudo({
                                value: t10
                              }));
                            });
                          });
                        }).processSync(e6);
                        return n5 ? r7 : null;
                      })(n4, c4)) === null) return null;
                      let f4 = {
                        [n4]: {
                          [`@apply ${i5}${r6 ? ` !important` : ``}`]: ``
                        }
                      };
                      return u4.length ? h2.dset(d5, u4, f4) : d5 = f4, (function(e6, t9) {
                        var n5 = t9.root();
                        return Mt(e6, n5, t9), n5;
                      })(d5, e5.modules.postcss);
                    })(e4, u3, t7.selector, r5.className.classList.important);
                    if (!s4) return false;
                    t7.after(s4.nodes);
                    let d4 = t7.next();
                    if (!d4) return false;
                    l3 === 1 ? n3.remove() : c3.push({
                      range: r5.className.classList.range,
                      newText: Ot(r5.className.classList.classList, r5.className.relativeRange)
                    });
                    let f3, p3 = Nt(t7.source);
                    a3 && (p3 = gt(p3, a3));
                    let g2 = m2(o3);
                    return c3.push({
                      range: p3,
                      newText: t7.toString() + (d4.raws.before || `

`) + d4.toString().replace(/\n\s*\n/g, `
`).replace(/(@apply [^;\n]+)$/gm, `$1;`).replace(/([^\s^]){$/gm, `$1 {`).replace(/^\s+/gm, (e5) => (f3 === void 0 && (f3 = e5), e5.replace(new RegExp(f3, `g`), g2.indent))).replace(/^(\s+)(.*?[^{}]\n)([^\s}])/gm, `$1$2$1$3`)
                    }), false;
                  });
                });
              };
            }))
          ]).process(o3, {
            from: void 0
          });
        } catch {
          return [];
        }
        return c3.length ? [
          {
            title: `Extract to new rule`,
            kind: `quickfix`,
            diagnostics: [
              r5
            ],
            edit: {
              changes: {
                [t4.textDocument.uri]: c3
              }
            }
          }
        ] : [];
      })(e3, t3, r4) : it2(r4) ? (async function(e4, t4, n3) {
        return [
          {
            title: `Delete ` + dt(n3.otherClassNames.map((e5) => `'${e5.className}'`)),
            kind: `quickfix`,
            diagnostics: [
              n3
            ],
            edit: {
              changes: {
                [t4.textDocument.uri]: [
                  {
                    range: n3.className.classList.range,
                    newText: Ot(n3.className.classList.classList, n3.otherClassNames.map((e5) => e5.relativeRange))
                  }
                ]
              }
            }
          }
        ];
      })(0, t3, r4) : ct(r4) || lt(r4) || ot(r4) || st(r4) || ut(r4) ? (function(e4, t4, n3) {
        return n3.suggestions.map((e5) => ({
          title: `Replace with '${e5}'`,
          kind: `quickfix`,
          diagnostics: [
            n3
          ],
          edit: {
            changes: {
              [t4.textDocument.uri]: [
                {
                  range: n3.range,
                  newText: e5
                }
              ]
            }
          }
        }));
      })(0, t3, r4) : [])).then(T2).then((e4) => {
        return t4 = (e5) => JSON.stringify(e5.edit), e4.filter((e5, n3, r4) => r4.map(t4).indexOf(t4(e5)) === n3);
        var t4;
      });
    }, e2.doComplete = async function(e3, t3, i3, a3) {
      return e3 === null ? {
        items: [],
        isIncomplete: false
      } : await (async function(e4, t4, n3, r3) {
        return B2(e4, t4, n3) ? (function(e5, t5, n4, r4) {
          let i4 = (function(e6, t6) {
            let n5 = G2(/@apply\s+(?<classList>[^;}]*)$/gi, t6);
            return n5.length === 0 ? null : n5[n5.length - 1];
          })(0, t5.getText({
            start: {
              line: Math.max(n4.line - 30, 0),
              character: 0
            },
            end: n4
          }));
          if (i4 === null) return null;
          let a4 = i4.groups.classList;
          return $e2(e5, a4, {
            start: {
              line: n4.line,
              character: n4.character - a4.length
            },
            end: n4
          }, (t6) => {
            if (t6.kind === 9) return Z2(e5.version, `2.0.0-alpha.1`) || Xe2(e5, `applyComplexClasses`);
            let n5 = t6.data?.variants ?? [], r5 = t6.data?.className ?? t6.label, i5 = Ze2(e5, [
              ...n5,
              r5
            ]);
            return i5 !== null && true === i5.isApplyable;
          }, r4);
        })(e4, t4, n3, r3) : Ke2(e4, t4, n3) || xe2(e4, t4, n3) ? (async function(e5, t5, n4, r4) {
          let i4 = t5.getText({
            start: t5.positionAt(Math.max(0, t5.offsetAt(n4) - 1e3)),
            end: n4
          }), a4 = je2(i4, (await e5.editor.getConfiguration(t5.uri)).tailwindCSS.classAttributes);
          if (a4.length === 0) return null;
          let o3 = a4[a4.length - 1], s3 = o3[0][0] === `:` || o3[1].startsWith(`[`) && o3[1].endsWith(`]`) ? Te2() : we2();
          s3.reset(i4.substr(o3.index + o3[0].length - 1));
          try {
            let t6 = Array.from(s3), i5 = t6[t6.length - 1];
            if (i5.type.startsWith(`start`) || i5.type === `classlist` || i5.type.startsWith(`arb`)) {
              let i6 = ``;
              for (let e6 = t6.length - 1; e6 >= 0 && (t6[e6].type === `classlist` || t6[e6].type.startsWith(`arb`)); e6--) i6 = t6[e6].value + i6;
              return $e2(e5, i6, {
                start: {
                  line: n4.line,
                  character: n4.character - i6.length
                },
                end: n4
              }, void 0, r4);
            }
          } catch {
          }
          return null;
        })(e4, t4, n3, r3) : null;
      })(e3, t3, i3, a3) || (function(e4, t4, i4) {
        if (!B2(e4, t4, i4)) return null;
        let a4 = t4.getText({
          start: {
            line: i4.line,
            character: 0
          },
          end: {
            line: i4.line,
            character: i4.character + 1
          }
        }), o3 = a4.substr(0, a4.length - 1).match(/[\s:;/*(){}](?<helper>config|theme)\(\s*['"]?(?<path>[^)'"]*)$/);
        if (o3 === null) return null;
        let s3, c3 = o3.groups.path.replace(/^['"]+/g, ``), l3 = c3.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]*))$/);
        if (l3 && (c3 = l3[1], s3 = l3[2]), s3 !== void 0) return null;
        let u3, d3 = o3.groups.helper === `config` ? e4.config : n2(e4.config, `theme`, {}), f3 = c3.split(/([\[\].]+)/), p3 = f3.filter((e5, t5) => t5 % 2 == 0), m3 = f3.filter((e5, t5) => t5 % 2 != 0), h3 = p3[p3.length - 1].length, g2 = m3.length ? m3[m3.length - 1] : null;
        if (p3.length === 1) u3 = d3;
        else for (let e5 = p3.length - 1; e5 > 0; e5--) {
          let t5 = n2(d3, p3.slice(0, e5));
          if (v2(t5)) {
            u3 = t5, h3 = f3.slice(2 * e5).reduce((e6, t6) => e6 + t6.length, 0), g2 = m3[e5 - 1];
            break;
          }
        }
        if (!u3) return null;
        let _3 = {
          start: {
            line: i4.line,
            character: i4.character - h3
          },
          end: i4
        };
        return nt2({
          isIncomplete: false,
          items: Object.keys(u3).sort((e5, t5) => {
            let n3 = tt2(e5), r3 = tt2(t5);
            return n3 && !r3 ? -1 : !n3 && r3 ? 1 : n3 && r3 ? parseFloat(e5) - parseFloat(t5) : 0;
          }).map((e5, t5, n3) => {
            let i5 = ve2(u3[e5]), o4 = e5.indexOf(`.`) !== -1 && g2 && g2.endsWith(`.`), s4 = a4.charAt(a4.length - 1) !== `]` && (o4 || g2 && g2.endsWith(`[`)), c4 = qe2(u3[e5]);
            return {
              label: e5,
              sortText: X2(t5, n3.length),
              commitCharacters: [
                !e5.includes(`.`) && `.`,
                !e5.includes(`[`) && `[`
              ].filter(Boolean),
              kind: i5 ? 16 : v2(u3[e5]) ? 9 : 10,
              detail: c4 === `0` || c4 === `transparent` ? c4 + ` ` : c4,
              ...i5 && typeof i5 != `string` && (i5.alpha ?? 1) !== 0 ? {
                documentation: r2.formatRgb(i5)
              } : {},
              ...s4 ? {
                textEditText: e5 + `]`
              } : {},
              additionalTextEdits: o4 ? [
                {
                  newText: `[`,
                  range: {
                    start: {
                      ..._3.start,
                      character: _3.start.character - 1
                    },
                    end: _3.start
                  }
                }
              ] : []
            };
          })
        }, {
          range: _3,
          data: {
            ...e4.completionItemData ?? {},
            _type: `helper`
          }
        }, e4.editor.capabilities.itemDefaults);
      })(e3, t3, i3) || (function(e4, t4, n3) {
        if (!B2(e4, t4, n3)) return null;
        let r3 = t4.getText({
          start: {
            line: n3.line,
            character: 0
          },
          end: n3
        }).match(/^\s*@(?<partial>[a-z]*)$/i);
        return r3 === null ? null : nt2({
          isIncomplete: false,
          items: [
            {
              label: `@tailwind`,
              documentation: {
                kind: `markdown`,
                value: `Use the \`@tailwind\` directive to insert Tailwind\u2019s \`base\`, \`components\`, \`utilities\` and \`${e4.jit && Z2(e4.version, `2.1.99`) ? `variants` : `screens`}\` styles into your CSS.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#tailwind`)})`
              }
            },
            {
              label: `@screen`,
              documentation: {
                kind: `markdown`,
                value: `The \`@screen\` directive allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#screen`)})`
              }
            },
            {
              label: `@apply`,
              documentation: {
                kind: `markdown`,
                value: `Use \`@apply\` to inline any existing utility classes into your own custom CSS.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#apply`)})`
              }
            },
            ...Z2(e4.version, `1.8.0`) ? [
              {
                label: `@layer`,
                documentation: {
                  kind: `markdown`,
                  value: `Use the \`@layer\` directive to tell Tailwind which "bucket" a set of custom styles belong to. Valid layers are \`base\`, \`components\`, and \`utilities\`.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#layer`)})`
                }
              }
            ] : [],
            ...Z2(e4.version, `2.99.0`) ? [] : [
              {
                label: `@variants`,
                documentation: {
                  kind: `markdown`,
                  value: `You can generate \`responsive\`, \`hover\`, \`focus\`, \`active\`, and other variants of your own utilities by wrapping their definitions in the \`@variants\` directive.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#variants`)})`
                }
              },
              {
                label: `@responsive`,
                documentation: {
                  kind: `markdown`,
                  value: `You can generate responsive variants of your own classes by wrapping their definitions in the \`@responsive\` directive.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#responsive`)})`
                }
              }
            ],
            ...Z2(e4.version, `3.2.0`) ? [
              {
                label: `@config`,
                documentation: {
                  kind: `markdown`,
                  value: `Use the \`@config\` directive to specify which config file Tailwind should use when compiling that CSS file.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#config`)})`
                }
              }
            ] : []
          ].map((e5) => ({
            ...e5,
            kind: 14
          }))
        }, {
          data: {
            ...e4.completionItemData ?? {},
            _type: `directive`
          },
          range: {
            start: {
              line: n3.line,
              character: n3.character - r3.groups.partial.length - 1
            },
            end: n3
          }
        }, e4.editor.capabilities.itemDefaults);
      })(e3, t3, i3) || (function(e4, t4, r3) {
        if (!B2(e4, t4, r3)) return null;
        let i4 = t4.getText({
          start: {
            line: r3.line,
            character: 0
          },
          end: r3
        }).match(/^\s*@screen\s+(?<partial>[^\s]*)$/i);
        if (i4 === null) return null;
        let a4 = n2(e4.config, [
          `screens`
        ], n2(e4.config, [
          `theme`,
          `screens`
        ], {}));
        return v2(a4) ? nt2({
          isIncomplete: false,
          items: Object.keys(a4).map((e5, t5) => ({
            label: e5,
            kind: 21,
            sortText: X2(t5)
          }))
        }, {
          data: {
            ...e4.completionItemData ?? {},
            _type: `screen`
          },
          range: {
            start: {
              line: r3.line,
              character: r3.character - i4.groups.partial.length
            },
            end: r3
          }
        }, e4.editor.capabilities.itemDefaults) : null;
      })(e3, t3, i3) || (function(e4, t4, n3) {
        if (!B2(e4, t4, n3) || Z2(e4.version, `2.99.0`)) return null;
        let r3 = t4.getText({
          start: {
            line: n3.line,
            character: 0
          },
          end: n3
        }).match(/^\s*@variants\s+(?<partial>[^}]*)$/i);
        if (r3 === null) return null;
        let i4 = r3.groups.partial.split(/\s*,\s*/);
        if (/\s+/.test(i4[i4.length - 1])) return null;
        let a4 = e4.variants.flatMap((e5) => e5.values.length ? e5.values.map((t5) => t5 === `DEFAULT` ? e5.name : `${e5.name}${e5.hasDash ? `-` : ``}${t5}`) : [
          e5.name
        ]), o3 = i4.slice(0, i4.length - 1);
        return e4.jit && (a4.unshift(`responsive`), a4 = a4.filter((t5) => !e4.screens.includes(t5))), nt2({
          isIncomplete: false,
          items: a4.filter((e5) => o3.indexOf(e5) === -1).map((e5, t5, n4) => ({
            label: e5,
            kind: 21,
            sortText: X2(t5, n4.length)
          }))
        }, {
          data: {
            ...e4.completionItemData ?? {},
            _type: `variant`
          },
          range: {
            start: {
              line: n3.line,
              character: n3.character - i4[i4.length - 1].length
            },
            end: n3
          }
        }, e4.editor.capabilities.itemDefaults);
      })(e3, t3, i3) || (function(e4, t4, n3) {
        if (!B2(e4, t4, n3)) return null;
        let r3 = t4.getText({
          start: {
            line: n3.line,
            character: 0
          },
          end: n3
        }).match(/^\s*@tailwind\s+(?<partial>[^\s]*)$/i);
        return r3 === null ? null : nt2({
          isIncomplete: false,
          items: [
            Z2(e4.version, `1.0.0-beta.1`) ? {
              label: `base`,
              documentation: {
                kind: `markdown`,
                value: `This injects Tailwind\u2019s base styles and any base styles registered by plugins.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#tailwind`)})`
              }
            } : {
              label: `preflight`,
              documentation: {
                kind: `markdown`,
                value: `This injects Tailwind\u2019s base styles, which is a combination of Normalize.css and some additional base styles.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#tailwind`)})`
              }
            },
            {
              label: `components`,
              documentation: {
                kind: `markdown`,
                value: `This injects Tailwind\u2019s component classes and any component classes registered by plugins.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#tailwind`)})`
              }
            },
            {
              label: `utilities`,
              documentation: {
                kind: `markdown`,
                value: `This injects Tailwind\u2019s utility classes and any utility classes registered by plugins.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#tailwind`)})`
              }
            },
            e4.jit && Z2(e4.version, `2.1.99`) ? {
              label: `variants`,
              documentation: {
                kind: `markdown`,
                value: `Use this directive to control where Tailwind injects the utility variants.

This directive is considered an advanced escape hatch and it is recommended to omit it whenever possible. If omitted, Tailwind will append these classes to the very end of your stylesheet by default.

[Tailwind CSS Documentation](${Q2(e4.version, `just-in-time-mode#variants-are-inserted-at-tailwind-variants`)})`
              }
            } : {
              label: `screens`,
              documentation: {
                kind: `markdown`,
                value: `Use this directive to control where Tailwind injects the responsive variations of each utility.

If omitted, Tailwind will append these classes to the very end of your stylesheet by default.

[Tailwind CSS Documentation](${Q2(e4.version, `functions-and-directives/#tailwind`)})`
              }
            }
          ].map((e5) => ({
            ...e5,
            kind: 21
          }))
        }, {
          data: {
            ...e4.completionItemData ?? {},
            _type: `@tailwind`
          },
          range: {
            start: {
              line: n3.line,
              character: n3.character - r3.groups.partial.length
            },
            end: n3
          }
        }, e4.editor.capabilities.itemDefaults);
      })(e3, t3, i3) || (function(e4, t4, n3) {
        if (!B2(e4, t4, n3)) return null;
        let r3 = t4.getText({
          start: {
            line: n3.line,
            character: 0
          },
          end: n3
        }).match(/^\s*@layer\s+(?<partial>[^\s]*)$/i);
        return r3 === null ? null : nt2({
          isIncomplete: false,
          items: [
            `base`,
            `components`,
            `utilities`
          ].map((e5, t5, n4) => ({
            label: e5,
            kind: 21,
            sortText: X2(t5, n4.length)
          }))
        }, {
          data: {
            ...e4.completionItemData ?? {},
            _type: `layer`
          },
          range: {
            start: {
              line: n3.line,
              character: n3.character - r3.groups.partial.length
            },
            end: n3
          }
        }, e4.editor.capabilities.itemDefaults);
      })(e3, t3, i3) || await (async function(e4, t4, n3) {
        if (!B2(e4, t4, n3) || !Z2(e4.version, `3.2.0`)) return null;
        let r3 = t4.getText({
          start: {
            line: n3.line,
            character: 0
          },
          end: n3
        }).match(/@config\s*(?<partial>'[^']*|"[^"]*)$/);
        if (!r3) return null;
        let i4 = r3.groups.partial.slice(1), a4 = i4.substring(0, i4.lastIndexOf(`/`)), o3 = i4.substring(i4.lastIndexOf(`/`) + 1);
        return nt2({
          isIncomplete: false,
          items: (await e4.editor.readDirectory(t4, a4 || `.`)).filter((e5) => {
            let [t5, n4] = e5;
            return n4.isDirectory || /\.c?js$/.test(t5);
          }).map((e5) => {
            let [t5, n4] = e5;
            return {
              label: n4.isDirectory ? t5 + `/` : t5,
              kind: n4.isDirectory ? 19 : 17,
              command: n4.isDirectory ? {
                command: `editor.action.triggerSuggest`,
                title: ``
              } : void 0
            };
          })
        }, {
          data: {
            ...e4.completionItemData ?? {},
            _type: `filesystem`
          },
          range: {
            start: {
              line: n3.line,
              character: n3.character - o3.length
            },
            end: n3
          }
        }, e4.editor.capabilities.itemDefaults);
      })(e3, t3, i3) || await (async function(e4, t4, n3, r3) {
        let i4 = (await e4.editor.getConfiguration(t4.uri)).tailwindCSS.experimental.classRegex;
        if (i4.length === 0) return null;
        let a4 = t4.offsetAt(n3), o3 = {
          start: t4.positionAt(Math.max(0, a4 - 1e3)),
          end: t4.positionAt(a4 + 1e3)
        }, c3 = t4.getText(o3);
        for (let a5 = 0; a5 < i4.length; a5++) try {
          let l3, [u3, d3] = Array.isArray(i4[a5]) ? i4[a5] : [
            i4[a5]
          ], f3 = new s2(u3, `g`);
          for (; (l3 = f3.exec(c3)) !== null; ) {
            let i5 = t4.offsetAt(o3.start) + l3.index[1], a6 = i5 + l3[1].length, c4 = t4.offsetAt(n3);
            if (c4 >= i5 && c4 <= a6) {
              let t5;
              if (d3) {
                let e5, n4 = new s2(d3, `g`);
                for (; (e5 = n4.exec(l3[1])) !== null; ) {
                  let n5 = i5 + e5.index[1], r4 = n5 + e5[1].length;
                  c4 >= n5 && c4 <= r4 && (t5 = e5[1].substr(0, c4 - n5));
                }
                if (t5 === void 0) throw Error();
              } else t5 = l3[1].substr(0, c4 - i5);
              return $e2(e4, t5, {
                start: {
                  line: n3.line,
                  character: n3.character - t5.length
                },
                end: n3
              }, void 0, r3);
            }
          }
        } catch {
        }
        return null;
      })(e3, t3, i3, a3) || (async function(e4, t4, n3) {
        if (true !== (await e4.editor.getConfiguration(t4.uri)).tailwindCSS.emmetCompletions) return null;
        let r3 = !z2(e4, t4) && Ke2(e4, t4, n3), i4 = z2(e4, t4) || xe2(e4, t4, n3), a4 = r3 ? `html` : i4 ? `jsx` : null;
        if (a4 === null) return null;
        let o3 = d2.extractAbbreviation(t4, n3, true);
        if (!o3 || !d2.isAbbreviationValid(a4, o3.abbreviation) || !(function(e5, t5) {
          let n4 = e5.getText({
            start: {
              line: 0,
              character: 0
            },
            end: {
              line: t5.start.line,
              character: t5.start.character
            }
          });
          if (n4.length > 500 && (n4 = n4.substr(n4.length - 500)), !n4.trim()) return true;
          let r4 = true, i5 = false, a5 = n4.length - 1;
          if (n4[a5] === `<`) return false;
          for (; a5 >= 0; ) {
            let e6 = n4[a5];
            if (a5--, i5 || !/\s/.test(e6)) if (e6 !== `?` || n4[a5] !== `<`) {
              if (/\s/.test(e6) && n4[a5] === `<`) a5--;
              else if (e6 === `<` || e6 === `>`) if (a5 >= 0 && n4[a5] === `\\`) a5--;
              else {
                if (e6 === `>`) {
                  if (a5 >= 0 && n4[a5] === `=`) continue;
                  break;
                }
                if (e6 === `<`) {
                  r4 = !i5;
                  break;
                }
              }
            } else a5--;
            else i5 = true;
          }
          return r4;
        })(t4, o3.abbreviationRange)) return null;
        if (i4) {
          let n4 = o3.abbreviation;
          if (n4.startsWith(`this.`)) return null;
          let r4 = await e4.editor.getDocumentSymbols(t4.uri);
          if (r4 && r4.find((e5) => n4 === e5.name || n4.startsWith(e5.name + `.`) && !/>|\*|\+/.test(n4))) return null;
        }
        let s3 = d2.doComplete(t4, n3, a4, {});
        if (!s3 || !s3.items || s3.items.length !== 1 || s3.items[0].label === `widows: ;`) return null;
        let c3 = s3.items[0].label.split(`.`);
        return c3.length < 2 ? null : $e2(e4, c3[c3.length - 1], {
          start: {
            line: n3.line,
            character: n3.character - c3[c3.length - 1].length
          },
          end: n3
        });
      })(e3, t3, i3);
    }, e2.doHover = async function(e3, t3, r3) {
      return await (async function(e4, t4, r4) {
        let i3 = await (async function(e5, t5, n3) {
          let r5 = [], i4 = t5.offsetAt(n3), a4 = {
            start: t5.positionAt(Math.max(0, i4 - 1e3)),
            end: t5.positionAt(i4 + 1e3)
          };
          return B2(e5, t5, n3) ? r5 = await Oe2(e5, t5, a4, `css`) : Ke2(e5, t5, n3) ? r5 = await Oe2(e5, t5, a4, `html`) : xe2(e5, t5, n3) && (r5 = await Oe2(e5, t5, a4, `jsx`)), r5.length === 0 ? null : r5.find((e6) => {
            let { range: t6 } = e6;
            return Ce2(n3, t6);
          }) || null;
        })(e4, t4, r4);
        if (i3 === null) return null;
        if (e4.jit) {
          let { root: n3, rules: r5 } = F2(e4, [
            i3.className
          ]);
          return r5.length === 0 ? null : {
            contents: {
              language: `css`,
              value: await ie2(e4, n3, t4.uri)
            },
            range: i3.range
          };
        }
        let a3 = P2(e4, i3.className);
        if (!a3) return null;
        if (B2(e4, t4, r4)) {
          let t5 = Ze2(e4, a3);
          if (t5 === null || false === t5.isApplyable) return null;
        }
        let o3 = await e4.editor.getConfiguration(t4.uri), s3 = Je2(i3.className, n2(e4.classNames.classNames, [
          ...a3,
          `__info`
        ]), o3);
        return s3 ? {
          contents: {
            language: `css`,
            value: s3
          },
          range: i3.range
        } : null;
      })(e3, t3, r3) || (function(e4, t4, n3) {
        if (!B2(e4, t4, n3)) return null;
        let r4 = Ie2(t4, {
          start: {
            line: n3.line,
            character: 0
          },
          end: {
            line: n3.line + 1,
            character: 0
          }
        });
        for (let t5 of r4) if (Ce2(n3, t5.ranges.path)) {
          let n4 = Ct(e4, t5.path, t5.helper === `theme` ? [
            `theme`
          ] : []), r5 = n4.isValid ? qe2(n4.value) : null;
          return r5 === null ? null : {
            contents: {
              kind: `markdown`,
              value: [
                "```plaintext",
                r5,
                "```"
              ].join(`
`)
            },
            range: t5.ranges.path
          };
        }
        return null;
      })(e3, t3, r3);
    }, e2.doValidate = Dt, e2.getColor = _e2, e2.getColorFromValue = ve2, e2.getDocumentColors = async function(e3, t3) {
      let r3 = [];
      return e3.enabled ? false === (await e3.editor.getConfiguration(t3.uri)).tailwindCSS.colorDecorators ? r3 : ((await Ne2(e3, t3)).forEach((t4) => {
        K2(t4).forEach((t5) => {
          let n3 = _e2(e3, t5.className);
          n3 !== null && typeof n3 != `string` && (n3.alpha ?? 1) !== 0 && r3.push({
            range: t5.range,
            color: I2(n3)
          });
        });
      }), Pe2(e3, t3).forEach((t4) => {
        let i3 = xt(t4.path), a3 = ve2(n2(e3.config, [
          ...t4.helper === `theme` ? [
            `theme`
          ] : [],
          ...i3
        ]));
        a3 && typeof a3 != `string` && (a3.alpha ?? 1) !== 0 && r3.push({
          range: t4.ranges.path,
          color: I2(a3)
        });
      }), C2(r3)) : r3;
    }, e2.isCssConflictDiagnostic = it2, e2.isInvalidApplyDiagnostic = at2, e2.isInvalidConfigPathDiagnostic = ct, e2.isInvalidScreenDiagnostic = ot, e2.isInvalidTailwindDirectiveDiagnostic = lt, e2.isInvalidVariantDiagnostic = st, e2.isRecommendedVariantOrderDiagnostic = ut, e2.resolveCompletionItem = async function(e3, t3) {
      var r3;
      if ([
        `helper`,
        `directive`,
        `variant`,
        `layer`,
        `@tailwind`,
        `filesystem`
      ].includes(t3.data?._type)) return t3;
      if (t3.data?._type === `screen`) {
        let r4 = n2(e3.config, [
          `theme`,
          `screens`
        ], n2(e3.config, [
          `screens`
        ], {}));
        return v2(r4) || (r4 = {}), t3.detail = (function(e4) {
          if (!e4) return;
          if (typeof e4 == `string`) return `@media (min-width: ${e4})`;
          if ((function(e5) {
            return v2(e5) && e5.raw !== void 0;
          })(e4)) return `@media ` + e4.raw;
          let t4 = (Array.isArray(e4) ? e4 : [
            e4
          ]).map((e5) => [
            typeof e5.min == `string` ? `(min-width: ${e5.min})` : null,
            typeof e5.max == `string` ? `(max-width: ${e5.max})` : null
          ].filter(Boolean).join(` and `)).join(`, `);
          return t4 ? `@media ` + t4 : void 0;
        })(r4[t3.label]), t3;
      }
      let i3 = t3.data?.className ?? t3.label;
      (r3 = t3.data) != null && r3.important && (i3 = `!` + i3);
      let a3 = t3.data?.variants ?? [];
      if (e3.jit) {
        if (t3.kind === 9 || t3.detail && t3.documentation) return t3;
        let { root: n3, rules: r4 } = F2(e3, [
          [
            ...a3,
            i3
          ].join(e3.separator)
        ]);
        return r4.length === 0 || (t3.detail || (t3.detail = r4.length === 1 ? await (async function(e4, t4, n4) {
          let r5 = await e4.editor.getConfiguration(void 0), i4 = [];
          return t4.walkDecls((e5) => {
            let { prop: t5, value: n5 } = e5, a4 = r5.tailwindCSS.showPixelEquivalents ? ee2(n5, r5.tailwindCSS.rootFontSize) : void 0;
            i4.push(`${t5}: ${n5}${a4 ? `/* ${a4} */` : ``};`);
          }), i4.join(` `);
        })(e3, r4[0]) : r4.length + ` rules`), t3.documentation || (t3.documentation = {
          kind: `markdown`,
          value: [
            "```css",
            await ie2(e3, n3),
            "```"
          ].join(`
`)
        })), t3;
      }
      let o3 = n2(e3.classNames.classNames, [
        ...a3,
        i3,
        `__info`
      ]);
      if (t3.kind === 9) t3.detail = e3.classNames.context[i3].join(`, `);
      else if (t3.detail = await (async function(e4, t4) {
        if (Array.isArray(t4)) return t4.length + ` rules`;
        if (true === t4.__rule) {
          let n3 = await e4.editor.getConfiguration();
          return (function(e5, t5) {
            let n4 = Object.keys(e5), r4 = n4.filter((e6) => !e6.startsWith(`--`));
            return n4.length !== r4.length && r4.length !== 0 && (n4 = r4), n4.map((n5) => w2(e5[n5]).map((e6) => {
              let r5 = t5.tailwindCSS.showPixelEquivalents ? ee2(e6, t5.tailwindCSS.rootFontSize) : void 0;
              return `${n5}: ${e6}${r5 ? `/* ${r5} */` : ``};`;
            }).join(` `)).join(` `);
          })(b2(t4), n3);
        }
        return null;
      })(e3, o3), !t3.documentation) {
        let n3 = await e3.editor.getConfiguration(), r4 = Je2([
          ...a3,
          i3
        ].join(`:`), o3, n3);
        r4 && (t3.documentation = {
          kind: `markdown`,
          value: [
            "```css",
            r4,
            "```"
          ].join(`
`)
        });
      }
      return t3;
    };
  })), q = n(((e2, t2) => {
    t2.exports = Ie();
  })), Le = t(f(), 1), J = t(v(), 1), Re = q(), ze = class e2 {
    constructor(e3, t2, n2, r2) {
      this._uri = e3, this._languageId = t2, this._version = n2, this._content = r2, this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e3) {
      if (e3) {
        let t2 = this.offsetAt(e3.start), n2 = this.offsetAt(e3.end);
        return this._content.substring(t2, n2);
      }
      return this._content;
    }
    update(t2, n2) {
      for (let n3 of t2) if (e2.isIncremental(n3)) {
        let e3 = Ue(n3.range), t3 = this.offsetAt(e3.start), r2 = this.offsetAt(e3.end);
        this._content = this._content.substring(0, t3) + n3.text + this._content.substring(r2, this._content.length);
        let i2 = Math.max(e3.start.line, 0), a2 = Math.max(e3.end.line, 0), o2 = this._lineOffsets, s2 = He(n3.text, false, t3);
        if (a2 - i2 === s2.length) for (let e4 = 0, t4 = s2.length; e4 < t4; e4++) o2[e4 + i2 + 1] = s2[e4];
        else s2.length < 1e4 ? o2.splice(i2 + 1, a2 - i2, ...s2) : this._lineOffsets = o2 = o2.slice(0, i2 + 1).concat(s2, o2.slice(a2 + 1));
        let c2 = n3.text.length - (r2 - t3);
        if (c2 !== 0) for (let e4 = i2 + 1 + s2.length, t4 = o2.length; e4 < t4; e4++) o2[e4] = o2[e4] + c2;
      } else if (e2.isFull(n3)) this._content = n3.text, this._lineOffsets = void 0;
      else throw Error(`Unknown change event received`);
      this._version = n2;
    }
    getLineOffsets() {
      return this._lineOffsets === void 0 && (this._lineOffsets = He(this._content, true)), this._lineOffsets;
    }
    positionAt(e3) {
      e3 = Math.max(Math.min(e3, this._content.length), 0);
      let t2 = this.getLineOffsets(), n2 = 0, r2 = t2.length;
      if (r2 === 0) return {
        line: 0,
        character: e3
      };
      for (; n2 < r2; ) {
        let i3 = Math.floor((n2 + r2) / 2);
        t2[i3] > e3 ? r2 = i3 : n2 = i3 + 1;
      }
      let i2 = n2 - 1;
      return e3 = this.ensureBeforeEOL(e3, t2[i2]), {
        line: i2,
        character: e3 - t2[i2]
      };
    }
    offsetAt(e3) {
      let t2 = this.getLineOffsets();
      if (e3.line >= t2.length) return this._content.length;
      if (e3.line < 0) return 0;
      let n2 = t2[e3.line];
      if (e3.character <= 0) return n2;
      let r2 = e3.line + 1 < t2.length ? t2[e3.line + 1] : this._content.length, i2 = Math.min(n2 + e3.character, r2);
      return this.ensureBeforeEOL(i2, n2);
    }
    ensureBeforeEOL(e3, t2) {
      for (; e3 > t2 && Y(this._content.charCodeAt(e3 - 1)); ) e3--;
      return e3;
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(e3) {
      let t2 = e3;
      return t2 != null && typeof t2.text == `string` && t2.range !== void 0 && (t2.rangeLength === void 0 || typeof t2.rangeLength == `number`);
    }
    static isFull(e3) {
      let t2 = e3;
      return t2 != null && typeof t2.text == `string` && t2.range === void 0 && t2.rangeLength === void 0;
    }
  }, Be;
  (function(e2) {
    function t2(e3, t3, n3, r3) {
      return new ze(e3, t3, n3, r3);
    }
    e2.create = t2;
    function n2(e3, t3, n3) {
      if (e3 instanceof ze) return e3.update(t3, n3), e3;
      throw Error(`TextDocument.update: document must be created by TextDocument.create`);
    }
    e2.update = n2;
    function r2(e3, t3) {
      let n3 = e3.getText(), r3 = Ve(t3.map(We), (e4, t4) => {
        let n4 = e4.range.start.line - t4.range.start.line;
        return n4 === 0 ? e4.range.start.character - t4.range.start.character : n4;
      }), i2 = 0, a2 = [];
      for (let t4 of r3) {
        let r4 = e3.offsetAt(t4.range.start);
        if (r4 < i2) throw Error(`Overlapping edit`);
        r4 > i2 && a2.push(n3.substring(i2, r4)), t4.newText.length && a2.push(t4.newText), i2 = e3.offsetAt(t4.range.end);
      }
      return a2.push(n3.substr(i2)), a2.join(``);
    }
    e2.applyEdits = r2;
  })(Be || (Be = {}));
  function Ve(e2, t2) {
    if (e2.length <= 1) return e2;
    let n2 = e2.length / 2 | 0, r2 = e2.slice(0, n2), i2 = e2.slice(n2);
    Ve(r2, t2), Ve(i2, t2);
    let a2 = 0, o2 = 0, s2 = 0;
    for (; a2 < r2.length && o2 < i2.length; ) t2(r2[a2], i2[o2]) <= 0 ? e2[s2++] = r2[a2++] : e2[s2++] = i2[o2++];
    for (; a2 < r2.length; ) e2[s2++] = r2[a2++];
    for (; o2 < i2.length; ) e2[s2++] = i2[o2++];
    return e2;
  }
  function He(e2, t2, n2 = 0) {
    let r2 = t2 ? [
      n2
    ] : [];
    for (let t3 = 0; t3 < e2.length; t3++) {
      let i2 = e2.charCodeAt(t3);
      Y(i2) && (i2 === 13 && t3 + 1 < e2.length && e2.charCodeAt(t3 + 1) === 10 && t3++, r2.push(n2 + t3 + 1));
    }
    return r2;
  }
  function Y(e2) {
    return e2 === 13 || e2 === 10;
  }
  function Ue(e2) {
    let t2 = e2.start, n2 = e2.end;
    return t2.line > n2.line || t2.line === n2.line && t2.character > n2.character ? {
      start: n2,
      end: t2
    } : e2;
  }
  function We(e2) {
    let t2 = Ue(e2.range);
    return t2 === e2.range ? e2 : {
      newText: e2.newText,
      range: t2
    };
  }
  var Ge = ``, Ke = `html`, qe = (e2, t2 = Ge, n2 = Ke) => Be.create(t2, n2, 1, e2);
  function Je(e2, t2 = `3.0.0`) {
    let n2 = x(e2), r2 = {
      version: t2,
      resolvedConfig: e2,
      enabled: true,
      modules: {
        postcss: {
          module: p,
          version: ``
        },
        postcssSelectorParser: {
          module: Le.default
        },
        jit: {
          createContext: {
            module: x
          },
          expandApplyAtRules: {
            module: w
          },
          generateRules: {
            module: S
          }
        }
      },
      classNames: {
        classNames: {},
        context: {}
      },
      jit: true,
      jitContext: n2,
      separator: e2.separator,
      screens: e2.theme?.screens ? Object.keys(e2.theme.screens) : [],
      variants: n2.getVariants(),
      editor: {
        userLanguages: {},
        capabilities: {
          configuration: true,
          diagnosticRelatedInformation: true,
          itemDefaults: []
        },
        async getConfiguration() {
          return {
            editor: {
              tabSize: 2
            },
            tailwindCSS: {
              emmetCompletions: false,
              classAttributes: [
                `class`,
                `className`,
                `ngClass`
              ],
              codeActions: true,
              hovers: true,
              suggestions: true,
              validate: true,
              colorDecorators: true,
              rootFontSize: 16,
              lint: {
                cssConflict: `warning`,
                invalidApply: `error`,
                invalidScreen: `error`,
                invalidVariant: `error`,
                invalidConfigPath: `error`,
                invalidTailwindDirective: `error`,
                recommendedVariantOrder: `warning`
              },
              showPixelEquivalents: true,
              includeLanguages: {},
              files: {
                exclude: []
              },
              experimental: {
                classRegex: [],
                configFile: {}
              }
            }
          };
        }
      }
    };
    return r2.classList = n2.getClassList().map((e3) => [
      e3,
      {
        color: (0, Re.getColor)(r2, e3)
      }
    ]), r2;
  }
  function X(e2, t2) {
    if (!e2?.includes(`rem`)) return e2;
    let n2 = [];
    (0, J.default)(e2).walk((e3) => {
      if (e3.type !== `word`) return true;
      let r3 = J.default.unit(e3.value);
      if (!r3 || r3.unit !== `rem` && r3.unit !== `rem;`) return false;
      let i2 = ` /* ${parseFloat(r3.number) * t2}px */`;
      return n2.push({
        content: i2,
        sourceEndIndex: e3.sourceEndIndex
      }), false;
    });
    let r2 = 0;
    return n2.forEach((t3) => {
      e2 = e2.slice(0, t3.sourceEndIndex + r2) + t3.content + e2.slice(t3.sourceEndIndex + r2), r2 += t3.content.length;
    }), e2;
  }
  var Z = [], Q = new BroadcastChannel(`windpress`), Ye = document.querySelector(`script#windpress\\:vfs[type="text/plain"]`);
  Ye && (Ze(), new MutationObserver(async () => {
    await Xe();
  }).observe(Ye, {
    characterData: true,
    subtree: true
  }));
  async function Xe() {
    let e2 = await T(h(Ye.textContent)), t2 = qe(`<div class=""></div>`);
    Z = (await (0, Re.doComplete)(Je(e2), t2, {
      character: 12,
      line: 0
    })).items.map((e3) => ({
      value: e3.label,
      color: typeof e3.documentation == `string` ? e3.documentation : null,
      isVariant: e3.data._type === `variant`
    })), Q.postMessage({
      source: `windpress/intellisense`,
      target: `any`,
      task: `windpress.code-editor.saved.done`
    });
  }
  await Xe();
  function Ze() {
    Q.addEventListener(`message`, async (e2) => {
      let t2 = e2.data;
      t2.source === `windpress/dashboard` && t2.target === `windpress/observer` && t2.task === `windpress.code-editor.saved` && await Xe();
    });
  }
  async function Qe(e2) {
    if (e2 === ``) return Z;
    let t2 = e2.split(`:`), n2 = t2.slice(0, -1).join(`:`), r2 = t2.pop(), i2 = ``;
    r2.startsWith(`!`) && (r2 = r2.slice(1), i2 = `!`);
    let a2 = false;
    if (r2.includes(`/`)) {
      let [e3, t3] = r2.split(`/`);
      t3 === `` ? (r2 = e3, a2 = t3) : isNaN(t3) || t3 < 0 || t3 > 100 ? r2 = [
        e3,
        t3
      ].join(`/`) : (r2 = e3, a2 = parseInt(t3));
    }
    let s2 = Z.filter((e3) => e3.value.includes(r2));
    if (a2 !== false) {
      let e3 = [], t3 = a2 === `` ? 5 : 1, n3 = a2 === `` || a2 > 9 ? 0 : Math.floor((a2 * 10 + 1) / 10) * 10, r3 = a2 === `` || a2 > 9 ? 100 : Math.ceil((a2 * 10 + 1) / 10) * 10;
      s2.forEach((i3) => {
        for (let a3 = n3; a3 <= r3; a3 += t3) e3.push({
          ...i3,
          value: i3.value + `/` + a3
        });
      }), s2 = e3;
    }
    return new o(s2, {
      keys: [
        `value`
      ],
      threshold: 0.4
    }).search(r2).map(({ item: e3 }) => ({
      value: [
        n2,
        (i2 ? `!` : ``) + e3.value
      ].filter(Boolean).join(`:`),
      color: e3.color
    }));
  }
  async function $e(e2) {
    let t2 = e2.split(/\s+/).filter((e3) => e3 !== `` && e3 !== `|`), n2 = x(await T(h(Ye.textContent))), r2 = t2.map((e3) => et(e3, n2)).filter((e3) => e3 !== null).map((e3) => X(e3, 16));
    return Array.isArray(r2) ? r2.join(` `) : r2;
  }
  function et(e2, t2) {
    if (e2 === null) return null;
    let { root: n2, rules: r2 } = tt([
      e2
    ], t2);
    return r2.length === 0 ? null : nt(n2);
  }
  function tt(e2, t2, n2 = () => true) {
    let r2 = S(new Set(e2), t2).sort(([e3], [t3]) => _(e3 - t3)), i2 = p.root({
      nodes: r2.map(([, e3]) => e3)
    });
    C(t2)(i2);
    let a2 = [];
    return i2.walkRules((e3) => {
      n2(e3) && a2.push(e3);
    }), {
      root: i2,
      rules: a2
    };
  }
  function nt(e2) {
    let t2 = e2.clone();
    return t2.walkAtRules(`defaults`, (e3) => {
      e3.remove();
    }), t2.toString().replace(/([^;{}\s])(\n\s*})/g, (e3, t3, n2) => `${t3};${n2}`);
  }
  function rt(e2, t2) {
    let n2 = e2.tailwindConfig.prefix;
    return typeof n2 == `function` ? n2(t2) : n2 + t2;
  }
  function it(e2, t2) {
    let n2 = /* @__PURE__ */ new Set([
      rt(t2, `group`),
      rt(t2, `peer`)
    ]), r2 = [];
    for (let i2 of e2) {
      let e3 = S(/* @__PURE__ */ new Set([
        i2
      ]), t2).sort(([e4], [t3]) => _(t3 - e4))[0]?.[0] ?? null;
      e3 === null && n2.has(i2) && (e3 = t2.layerOrder.components), r2.push([
        i2,
        e3
      ]);
    }
    return r2;
  }
  async function at(e2) {
    let t2 = h(Ye.textContent), n2 = e2.split(/\s+/).filter((e3) => e3 !== `` && e3 !== `|`), r2 = [], i2 = x(await T(t2)), a2 = (i2.getClassOrder ? i2.getClassOrder(n2) : it(n2, i2)).sort(([, e3], [, t3]) => e3 === t3 ? 0 : e3 === null ? -1 : t3 === null ? 1 : _(e3 - t3)).map(([e3]) => e3);
    return [
      ...r2,
      ...a2
    ].join(` `);
  }
  a(window, `windpress.module.classSorter.sort`, async (e2) => at(e2)), a(window, `windpress.module.classnameToCss.generate`, async (e2) => $e(e2)), a(window, `windpress.module.autocomplete.query`, (e2) => Qe(e2));
});
