import { t as e } from "./chunk-DcEfI0Mx.js";
var t = e(((e2, t2) => {
  (function(n, r) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r() : typeof define == `function` && define.amd ? define(r) : (n = typeof globalThis < `u` ? globalThis : n || self).dayjs = r();
  })(e2, (function() {
    var e3 = 1e3, t3 = 6e4, n = 36e5, r = `millisecond`, i = `second`, a = `minute`, o = `hour`, s = `day`, c = `week`, l = `month`, u = `quarter`, d = `year`, f = `date`, p = `Invalid Date`, m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: `en`, weekdays: `Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`), months: `January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`), ordinal: function(e4) {
      var t4 = [`th`, `st`, `nd`, `rd`], n2 = e4 % 100;
      return `[` + e4 + (t4[(n2 - 20) % 10] || t4[n2] || t4[0]) + `]`;
    } }, _ = function(e4, t4, n2) {
      var r2 = String(e4);
      return !r2 || r2.length >= t4 ? e4 : `` + Array(t4 + 1 - r2.length).join(n2) + e4;
    }, v = { s: _, z: function(e4) {
      var t4 = -e4.utcOffset(), n2 = Math.abs(t4), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (t4 <= 0 ? `+` : `-`) + _(r2, 2, `0`) + `:` + _(i2, 2, `0`);
    }, m: function e4(t4, n2) {
      if (t4.date() < n2.date()) return -e4(n2, t4);
      var r2 = 12 * (n2.year() - t4.year()) + (n2.month() - t4.month()), i2 = t4.clone().add(r2, l), a2 = n2 - i2 < 0, o2 = t4.clone().add(r2 + (a2 ? -1 : 1), l);
      return +(-(r2 + (n2 - i2) / (a2 ? i2 - o2 : o2 - i2)) || 0);
    }, a: function(e4) {
      return e4 < 0 ? Math.ceil(e4) || 0 : Math.floor(e4);
    }, p: function(e4) {
      return { M: l, y: d, w: c, d: s, D: f, h: o, m: a, s: i, ms: r, Q: u }[e4] || String(e4 || ``).toLowerCase().replace(/s$/, ``);
    }, u: function(e4) {
      return e4 === void 0;
    } }, y = `en`, b = {};
    b[y] = g;
    var x = `$isDayjsObject`, S = function(e4) {
      return e4 instanceof E || !(!e4 || !e4[x]);
    }, C = function e4(t4, n2, r2) {
      var i2;
      if (!t4) return y;
      if (typeof t4 == `string`) {
        var a2 = t4.toLowerCase();
        b[a2] && (i2 = a2), n2 && (b[a2] = n2, i2 = a2);
        var o2 = t4.split(`-`);
        if (!i2 && o2.length > 1) return e4(o2[0]);
      } else {
        var s2 = t4.name;
        b[s2] = t4, i2 = s2;
      }
      return !r2 && i2 && (y = i2), i2 || !r2 && y;
    }, w = function(e4, t4) {
      if (S(e4)) return e4.clone();
      var n2 = typeof t4 == `object` ? t4 : {};
      return n2.date = e4, n2.args = arguments, new E(n2);
    }, T = v;
    T.l = C, T.i = S, T.w = function(e4, t4) {
      return w(e4, { locale: t4.$L, utc: t4.$u, x: t4.$x, $offset: t4.$offset });
    };
    var E = (function() {
      function g2(e4) {
        this.$L = C(e4.locale, null, true), this.parse(e4), this.$x = this.$x || e4.x || {}, this[x] = true;
      }
      var _2 = g2.prototype;
      return _2.parse = function(e4) {
        this.$d = (function(e5) {
          var t4 = e5.date, n2 = e5.utc;
          if (t4 === null) return /* @__PURE__ */ new Date(NaN);
          if (T.u(t4)) return /* @__PURE__ */ new Date();
          if (t4 instanceof Date) return new Date(t4);
          if (typeof t4 == `string` && !/Z$/i.test(t4)) {
            var r2 = t4.match(m);
            if (r2) {
              var i2 = r2[2] - 1 || 0, a2 = (r2[7] || `0`).substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, a2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, a2);
            }
          }
          return new Date(t4);
        })(e4), this.init();
      }, _2.init = function() {
        var e4 = this.$d;
        this.$y = e4.getFullYear(), this.$M = e4.getMonth(), this.$D = e4.getDate(), this.$W = e4.getDay(), this.$H = e4.getHours(), this.$m = e4.getMinutes(), this.$s = e4.getSeconds(), this.$ms = e4.getMilliseconds();
      }, _2.$utils = function() {
        return T;
      }, _2.isValid = function() {
        return this.$d.toString() !== p;
      }, _2.isSame = function(e4, t4) {
        var n2 = w(e4);
        return this.startOf(t4) <= n2 && n2 <= this.endOf(t4);
      }, _2.isAfter = function(e4, t4) {
        return w(e4) < this.startOf(t4);
      }, _2.isBefore = function(e4, t4) {
        return this.endOf(t4) < w(e4);
      }, _2.$g = function(e4, t4, n2) {
        return T.u(e4) ? this[t4] : this.set(n2, e4);
      }, _2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _2.valueOf = function() {
        return this.$d.getTime();
      }, _2.startOf = function(e4, t4) {
        var n2 = this, r2 = !!T.u(t4) || t4, u2 = T.p(e4), p2 = function(e5, t5) {
          var i2 = T.w(n2.$u ? Date.UTC(n2.$y, t5, e5) : new Date(n2.$y, t5, e5), n2);
          return r2 ? i2 : i2.endOf(s);
        }, m2 = function(e5, t5) {
          return T.w(n2.toDate()[e5].apply(n2.toDate(`s`), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t5)), n2);
        }, h2 = this.$W, g3 = this.$M, _3 = this.$D, v2 = `set` + (this.$u ? `UTC` : ``);
        switch (u2) {
          case d:
            return r2 ? p2(1, 0) : p2(31, 11);
          case l:
            return r2 ? p2(1, g3) : p2(0, g3 + 1);
          case c:
            var y2 = this.$locale().weekStart || 0, b2 = (h2 < y2 ? h2 + 7 : h2) - y2;
            return p2(r2 ? _3 - b2 : _3 + (6 - b2), g3);
          case s:
          case f:
            return m2(v2 + `Hours`, 0);
          case o:
            return m2(v2 + `Minutes`, 1);
          case a:
            return m2(v2 + `Seconds`, 2);
          case i:
            return m2(v2 + `Milliseconds`, 3);
          default:
            return this.clone();
        }
      }, _2.endOf = function(e4) {
        return this.startOf(e4, false);
      }, _2.$set = function(e4, t4) {
        var n2, c2 = T.p(e4), u2 = `set` + (this.$u ? `UTC` : ``), p2 = (n2 = {}, n2[s] = u2 + `Date`, n2[f] = u2 + `Date`, n2[l] = u2 + `Month`, n2[d] = u2 + `FullYear`, n2[o] = u2 + `Hours`, n2[a] = u2 + `Minutes`, n2[i] = u2 + `Seconds`, n2[r] = u2 + `Milliseconds`, n2)[c2], m2 = c2 === s ? this.$D + (t4 - this.$W) : t4;
        if (c2 === l || c2 === d) {
          var h2 = this.clone().set(f, 1);
          h2.$d[p2](m2), h2.init(), this.$d = h2.set(f, Math.min(this.$D, h2.daysInMonth())).$d;
        } else p2 && this.$d[p2](m2);
        return this.init(), this;
      }, _2.set = function(e4, t4) {
        return this.clone().$set(e4, t4);
      }, _2.get = function(e4) {
        return this[T.p(e4)]();
      }, _2.add = function(r2, u2) {
        var f2, p2 = this;
        r2 = Number(r2);
        var m2 = T.p(u2), h2 = function(e4) {
          var t4 = w(p2);
          return T.w(t4.date(t4.date() + Math.round(e4 * r2)), p2);
        };
        if (m2 === l) return this.set(l, this.$M + r2);
        if (m2 === d) return this.set(d, this.$y + r2);
        if (m2 === s) return h2(1);
        if (m2 === c) return h2(7);
        var g3 = (f2 = {}, f2[a] = t3, f2[o] = n, f2[i] = e3, f2)[m2] || 1, _3 = this.$d.getTime() + r2 * g3;
        return T.w(_3, this);
      }, _2.subtract = function(e4, t4) {
        return this.add(-1 * e4, t4);
      }, _2.format = function(e4) {
        var t4 = this, n2 = this.$locale();
        if (!this.isValid()) return n2.invalidDate || p;
        var r2 = e4 || `YYYY-MM-DDTHH:mm:ssZ`, i2 = T.z(this), a2 = this.$H, o2 = this.$m, s2 = this.$M, c2 = n2.weekdays, l2 = n2.months, u2 = n2.meridiem, d2 = function(e5, n3, i3, a3) {
          return e5 && (e5[n3] || e5(t4, r2)) || i3[n3].slice(0, a3);
        }, f2 = function(e5) {
          return T.s(a2 % 12 || 12, e5, `0`);
        }, m2 = u2 || function(e5, t5, n3) {
          var r3 = e5 < 12 ? `AM` : `PM`;
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(h, (function(e5, r3) {
          return r3 || (function(e6) {
            switch (e6) {
              case `YY`:
                return String(t4.$y).slice(-2);
              case `YYYY`:
                return T.s(t4.$y, 4, `0`);
              case `M`:
                return s2 + 1;
              case `MM`:
                return T.s(s2 + 1, 2, `0`);
              case `MMM`:
                return d2(n2.monthsShort, s2, l2, 3);
              case `MMMM`:
                return d2(l2, s2);
              case `D`:
                return t4.$D;
              case `DD`:
                return T.s(t4.$D, 2, `0`);
              case `d`:
                return String(t4.$W);
              case `dd`:
                return d2(n2.weekdaysMin, t4.$W, c2, 2);
              case `ddd`:
                return d2(n2.weekdaysShort, t4.$W, c2, 3);
              case `dddd`:
                return c2[t4.$W];
              case `H`:
                return String(a2);
              case `HH`:
                return T.s(a2, 2, `0`);
              case `h`:
                return f2(1);
              case `hh`:
                return f2(2);
              case `a`:
                return m2(a2, o2, true);
              case `A`:
                return m2(a2, o2, false);
              case `m`:
                return String(o2);
              case `mm`:
                return T.s(o2, 2, `0`);
              case `s`:
                return String(t4.$s);
              case `ss`:
                return T.s(t4.$s, 2, `0`);
              case `SSS`:
                return T.s(t4.$ms, 3, `0`);
              case `Z`:
                return i2;
            }
            return null;
          })(e5) || i2.replace(`:`, ``);
        }));
      }, _2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _2.diff = function(r2, f2, p2) {
        var m2, h2 = this, g3 = T.p(f2), _3 = w(r2), v2 = (_3.utcOffset() - this.utcOffset()) * t3, y2 = this - _3, b2 = function() {
          return T.m(h2, _3);
        };
        switch (g3) {
          case d:
            m2 = b2() / 12;
            break;
          case l:
            m2 = b2();
            break;
          case u:
            m2 = b2() / 3;
            break;
          case c:
            m2 = (y2 - v2) / 6048e5;
            break;
          case s:
            m2 = (y2 - v2) / 864e5;
            break;
          case o:
            m2 = y2 / n;
            break;
          case a:
            m2 = y2 / t3;
            break;
          case i:
            m2 = y2 / e3;
            break;
          default:
            m2 = y2;
        }
        return p2 ? m2 : T.a(m2);
      }, _2.daysInMonth = function() {
        return this.endOf(l).$D;
      }, _2.$locale = function() {
        return b[this.$L];
      }, _2.locale = function(e4, t4) {
        if (!e4) return this.$L;
        var n2 = this.clone(), r2 = C(e4, t4, true);
        return r2 && (n2.$L = r2), n2;
      }, _2.clone = function() {
        return T.w(this.$d, this);
      }, _2.toDate = function() {
        return new Date(this.valueOf());
      }, _2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _2.toISOString = function() {
        return this.$d.toISOString();
      }, _2.toString = function() {
        return this.$d.toUTCString();
      }, g2;
    })(), D = E.prototype;
    return w.prototype = D, [[`$ms`, r], [`$s`, i], [`$m`, a], [`$H`, o], [`$W`, s], [`$M`, l], [`$y`, d], [`$D`, f]].forEach((function(e4) {
      D[e4[1]] = function(t4) {
        return this.$g(t4, e4[0], e4[1]);
      };
    })), w.extend = function(e4, t4) {
      return e4.$i || (e4.$i = (e4(t4, E, w), true)), w;
    }, w.locale = C, w.isDayjs = S, w.unix = function(e4) {
      return w(1e3 * e4);
    }, w.en = b[y], w.Ls = b, w.p = {}, w;
  }));
}));
export {
  t
};
