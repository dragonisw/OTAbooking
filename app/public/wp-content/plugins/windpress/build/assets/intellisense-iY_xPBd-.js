var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { o as e, t } from "./chunk-DcEfI0Mx.js";
import { a as n, i as r, n as i, t as a } from "./default-map-Cw3uSgAb.js";
import { a as o, i as s, l as c, n as l, o as u, r as d } from "./cssesc-DEUDTBaR.js";
import { n as f } from "./adobe-css-tools-DPH8i0dL.js";
import { n as p, t as m } from "./dlv.umd-BoFV71gt.js";
var h = t(((e26, t2) => {
  var n2 = u(), r2 = s(), i2 = o();
  t2.exports = class extends r2 {
    checkMissedSemicolon() {
    }
    comment(e27) {
      let t3 = new n2();
      this.init(t3, e27[2]);
      let r3 = this.input.fromOffset(e27[3]) || this.input.fromOffset(this.input.css.length - 1);
      t3.source.end = { column: r3.col, line: r3.line, offset: e27[3] + 1 };
      let i3 = e27[1].slice(2);
      if (i3.slice(-2) === `*/` && (i3 = i3.slice(0, -2)), /^\s*$/.test(i3)) t3.text = ``, t3.raws.left = i3, t3.raws.right = ``;
      else {
        let e28 = i3.match(/^(\s*)([^]*\S)(\s*)$/);
        t3.text = e28[2], t3.raws.left = e28[1], t3.raws.right = e28[3];
      }
    }
    createTokenizer() {
      this.tokenizer = i2(this.input, { ignoreErrors: true });
    }
    decl(e27) {
      e27.length > 1 && e27.some((e28) => e28[0] === `word`) && super.decl(e27);
    }
    doubleColon() {
    }
    endFile() {
      for (this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || ``) + this.spaces; this.current.parent; ) this.current = this.current.parent, this.current.raws.after = ``;
      this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    precheckMissedSemicolon(e27) {
      let t3 = this.colon(e27);
      if (t3 === false) return;
      let n3, r3;
      for (n3 = t3 - 1; n3 >= 0 && e27[n3][0] !== `word`; n3--) ;
      if (n3 === 0 || n3 < 0) return;
      for (r3 = n3 - 1; r3 >= 0; r3--) if (e27[r3][0] !== `space`) {
        r3 += 1;
        break;
      }
      let i3 = e27.slice(n3), a2 = e27.slice(r3, n3);
      e27.splice(r3, e27.length - r3), this.spaces = a2.map((e28) => e28[1]).join(``), this.decl(i3);
    }
    unclosedBracket() {
    }
    unexpectedClose() {
      this.current.raws.after += `}`;
    }
    unknownWord(e27) {
      this.spaces += e27.map((e28) => e28[1]).join(``);
    }
    unnamedAtrule(e27) {
      e27.name = ``;
    }
  };
})), g = e(t(((e26, t2) => {
  var { Input: n2 } = d(), r2 = h();
  t2.exports = function(e27, t3) {
    let i2 = new r2(new n2(e27, t3));
    return i2.parse(), i2.root;
  };
}))(), 1);
function ee(e26) {
  try {
    let r2 = function(t3) {
      t3 && t3.forEach((t4) => {
        if (t4.type === `atrule` && t4.name === `apply`) {
          if (t4.position) {
            let r3 = t4.position.start, a3 = t4.position.end;
            if (r3 && a3) {
              let t5 = i2(e26, r3.line - 1, r3.column - 1), o2 = i2(e26, a3.line - 1, a3.column - 1);
              t5 !== -1 && o2 !== -1 && n2.push({ start: t5, end: o2 });
            }
          }
        } else t4.type === `atrule` && t4.rules ? r2(t4.rules) : t4.type === `rule` && t4.selectors && (t4.selectors.forEach((r3) => {
          if (r3.includes(`@apply`) && t4.position) {
            let r4 = i2(e26, t4.position.start.line - 1, t4.position.start.column - 1), a3 = i2(e26, t4.position.end.line - 1, t4.position.end.column - 1);
            if (r4 !== -1 && a3 !== -1) {
              let t5 = e26.slice(r4, a3), i3 = /@apply\s+[^;{}]*[;}]?/g, o2;
              for (; (o2 = i3.exec(t5)) !== null; ) {
                let e27 = r4 + o2.index, t6 = r4 + o2.index + o2[0].length;
                n2.push({ start: e27, end: t6 });
              }
            }
          }
        }), t4.declarations && t4.declarations.forEach((t5) => {
          if (t5.type === `declaration` && t5.property && t5.property.startsWith(`@apply`) && t5.position) {
            let r3 = t5.position.start, a3 = t5.position.end;
            if (r3 && a3) {
              let t6 = i2(e26, r3.line - 1, r3.column - 1), o2 = i2(e26, a3.line - 1, a3.column - 1);
              t6 !== -1 && o2 !== -1 && n2.push({ start: t6, end: o2 });
            }
          }
        }));
      });
    }, i2 = function(e27, t3, n3) {
      let r3 = e27.split(`
`);
      if (t3 >= r3.length) return -1;
      let i3 = 0;
      for (let e28 = 0; e28 < t3; e28++) i3 += r3[e28].length + 1;
      return i3 += n3, i3 < e27.length ? i3 : -1;
    };
    let t2 = f(e26, { silent: true, source: `input.css` }), n2 = [];
    t2.stylesheet && t2.stylesheet.rules && r2(t2.stylesheet.rules), n2.sort((e27, t3) => t3.start - e27.start);
    let a2 = e26;
    for (let e27 of n2) a2 = a2.slice(0, e27.start) + a2.slice(e27.end);
    return a2;
  } catch (t2) {
    return console.warn(`CSS parsing failed, returning original content:`, t2), e26;
  }
}
async function _({ entrypoint: e26 = `/main.css`, volume: t2 = {}, ...a2 } = {}) {
  let o2 = { ...t2 }, s2 = false;
  return a2?.strict === true && (s2 = true, delete a2.strict), s2 || Object.keys(o2).forEach((e27) => {
    e27.endsWith(`.css`) && (o2[e27] = ee(o2[e27]));
  }), a2 = { entrypoint: e26, volume: o2, ...a2, parser: a2.strict ? g.default : null }, a2.volume[a2.entrypoint] = (await i(a2)).css, n(a2.volume[a2.entrypoint], { ...a2, loadModule: async (e27, t3, n2) => c(e27, t3, n2, a2.volume), loadStylesheet: async (e27, t3) => r(e27, t3, a2.volume) });
}
var te = 48, v = 57;
function ne(e26, t2) {
  let n2 = e26.length, r2 = t2.length, i2 = n2 < r2 ? n2 : r2;
  for (let n3 = 0; n3 < i2; n3++) {
    let r3 = e26.charCodeAt(n3), i3 = t2.charCodeAt(n3);
    if (r3 >= te && r3 <= v && i3 >= te && i3 <= v) {
      let a2 = n3, o2 = n3 + 1, s2 = n3, c2 = n3 + 1;
      for (r3 = e26.charCodeAt(o2); r3 >= te && r3 <= v; ) r3 = e26.charCodeAt(++o2);
      for (i3 = t2.charCodeAt(c2); i3 >= te && i3 <= v; ) i3 = t2.charCodeAt(++c2);
      let l2 = e26.slice(a2, o2), u2 = t2.slice(s2, c2), d2 = Number(l2) - Number(u2);
      if (d2) return d2;
      if (l2 < u2) return -1;
      if (l2 > u2) return 1;
      continue;
    }
    if (r3 !== i3) return r3 - i3;
  }
  return e26.length - t2.length;
}
var re = 92, ie = 123, ae = 125, oe = 40, se = 41, ce = 91, le = 93, ue = 34, de = 39, fe = new Uint8Array(256);
function pe(e26, t2) {
  let n2 = 0, r2 = [], i2 = 0, a2 = e26.length, o2 = t2.charCodeAt(0);
  for (let t3 = 0; t3 < a2; t3++) {
    let s2 = e26.charCodeAt(t3);
    if (n2 === 0 && s2 === o2) {
      r2.push(e26.slice(i2, t3)), i2 = t3 + 1;
      continue;
    }
    switch (s2) {
      case re:
        t3 += 1;
        break;
      case de:
      case ue:
        for (; ++t3 < a2; ) {
          let n3 = e26.charCodeAt(t3);
          if (n3 === re) {
            t3 += 1;
            continue;
          }
          if (n3 === s2) break;
        }
        break;
      case oe:
        fe[n2] = se, n2++;
        break;
      case ce:
        fe[n2] = le, n2++;
        break;
      case ie:
        fe[n2] = ae, n2++;
        break;
      case le:
      case ae:
      case se:
        n2 > 0 && s2 === fe[n2 - 1] && n2--;
        break;
    }
  }
  return r2.push(e26.slice(i2)), r2;
}
var y = (function(e26) {
  return e26[e26.Continue = 0] = `Continue`, e26[e26.Skip = 1] = `Skip`, e26[e26.Stop = 2] = `Stop`, e26[e26.Replace = 3] = `Replace`, e26[e26.ReplaceSkip = 4] = `ReplaceSkip`, e26[e26.ReplaceStop = 5] = `ReplaceStop`, e26;
})(y || {}), me = { Continue: { kind: y.Continue }, Skip: { kind: y.Skip }, Stop: { kind: y.Stop }, Replace: (e26) => ({ kind: y.Replace, nodes: Array.isArray(e26) ? e26 : [e26] }), ReplaceSkip: (e26) => ({ kind: y.ReplaceSkip, nodes: Array.isArray(e26) ? e26 : [e26] }), ReplaceStop: (e26) => ({ kind: y.ReplaceStop, nodes: Array.isArray(e26) ? e26 : [e26] }) };
function he(e26, t2) {
  typeof t2 == `function` ? ge(e26, t2) : ge(e26, t2.enter, t2.exit);
}
function ge(e26, t2 = () => me.Continue, n2 = () => me.Continue) {
  let r2 = { value: [e26, 0, null], prev: null }, i2 = { parent: null, depth: 0, path() {
    let e27 = [], t3 = r2;
    for (; t3; ) {
      let n3 = t3.value[2];
      n3 && e27.push(n3), t3 = t3.prev;
    }
    return e27.reverse(), e27;
  } };
  for (; r2 !== null; ) {
    let e27 = r2.value, a2 = e27[0], o2 = e27[1], s2 = e27[2];
    if (o2 >= a2.length) {
      r2 = r2.prev, --i2.depth;
      continue;
    }
    if (i2.parent = s2, o2 >= 0) {
      let n3 = a2[o2], s3 = t2(n3, i2) ?? me.Continue;
      switch (s3.kind) {
        case y.Continue:
          n3.nodes && n3.nodes.length > 0 && (i2.depth += 1, r2 = { value: [n3.nodes, 0, n3], prev: r2 }), e27[1] = ~o2;
          continue;
        case y.Stop:
          return;
        case y.Skip:
          e27[1] = ~o2;
          continue;
        case y.Replace:
          a2.splice(o2, 1, ...s3.nodes);
          continue;
        case y.ReplaceStop:
          a2.splice(o2, 1, ...s3.nodes);
          return;
        case y.ReplaceSkip:
          a2.splice(o2, 1, ...s3.nodes), e27[1] += s3.nodes.length;
          continue;
        default:
          throw Error(`Invalid \`WalkAction.${y[s3.kind] ?? `Unknown(${s3.kind})`}\` in enter.`);
      }
    }
    let c2 = ~o2, l2 = a2[c2], u2 = n2(l2, i2) ?? me.Continue;
    switch (u2.kind) {
      case y.Continue:
        e27[1] = c2 + 1;
        continue;
      case y.Stop:
        return;
      case y.Replace:
        a2.splice(c2, 1, ...u2.nodes), e27[1] = c2 + u2.nodes.length;
        continue;
      case y.ReplaceStop:
        a2.splice(c2, 1, ...u2.nodes);
        return;
      case y.ReplaceSkip:
        a2.splice(c2, 1, ...u2.nodes), e27[1] = c2 + u2.nodes.length;
        continue;
      default:
        throw Error(`Invalid \`WalkAction.${y[u2.kind] ?? `Unknown(${u2.kind})`}\` in exit.`);
    }
  }
}
function _e(e26) {
  return { kind: `word`, value: e26 };
}
function ve(e26, t2) {
  return { kind: `function`, value: e26, nodes: t2 };
}
function ye(e26) {
  return { kind: `separator`, value: e26 };
}
function be(e26) {
  let t2 = ``;
  for (let n2 of e26) switch (n2.kind) {
    case `word`:
    case `separator`:
      t2 += n2.value;
      break;
    case `function`:
      t2 += n2.value + `(` + be(n2.nodes) + `)`;
  }
  return t2;
}
var xe = 92, Se = 41, Ce = 58, we = 44, Te = 34, Ee = 61, De = 62, Oe = 60, ke = 10, Ae = 40, je = 39, Me = 47, Ne = 32, Pe = 9;
function Fe(e26) {
  e26 = e26.replaceAll(`\r
`, `
`);
  let t2 = [], n2 = [], r2 = null, i2 = ``, a2;
  for (let o2 = 0; o2 < e26.length; o2++) {
    let s2 = e26.charCodeAt(o2);
    switch (s2) {
      case xe:
        i2 += e26[o2] + e26[o2 + 1], o2++;
        break;
      case Me: {
        if (i2.length > 0) {
          let e27 = _e(i2);
          r2 ? r2.nodes.push(e27) : t2.push(e27), i2 = ``;
        }
        let n3 = _e(e26[o2]);
        r2 ? r2.nodes.push(n3) : t2.push(n3);
        break;
      }
      case Ce:
      case we:
      case Ee:
      case De:
      case Oe:
      case ke:
      case Ne:
      case Pe: {
        if (i2.length > 0) {
          let e27 = _e(i2);
          r2 ? r2.nodes.push(e27) : t2.push(e27), i2 = ``;
        }
        let n3 = o2, s3 = o2 + 1;
        for (; s3 < e26.length && (a2 = e26.charCodeAt(s3), !(a2 !== Ce && a2 !== we && a2 !== Ee && a2 !== De && a2 !== Oe && a2 !== ke && a2 !== Ne && a2 !== Pe)); s3++) ;
        o2 = s3 - 1;
        let c2 = ye(e26.slice(n3, s3));
        r2 ? r2.nodes.push(c2) : t2.push(c2);
        break;
      }
      case je:
      case Te: {
        let t3 = o2;
        for (let t4 = o2 + 1; t4 < e26.length; t4++) if (a2 = e26.charCodeAt(t4), a2 === xe) t4 += 1;
        else if (a2 === s2) {
          o2 = t4;
          break;
        }
        i2 += e26.slice(t3, o2 + 1);
        break;
      }
      case Ae: {
        let e27 = ve(i2, []);
        i2 = ``, r2 ? r2.nodes.push(e27) : t2.push(e27), n2.push(e27), r2 = e27;
        break;
      }
      case Se: {
        let e27 = n2.pop();
        if (i2.length > 0) {
          let t3 = _e(i2);
          e27?.nodes.push(t3), i2 = ``;
        }
        r2 = n2.length > 0 ? n2[n2.length - 1] : null;
        break;
      }
      default:
        i2 += String.fromCharCode(s2);
    }
  }
  return i2.length > 0 && t2.push(_e(i2)), t2;
}
({}).FEATURES_ENV, {}.FEATURES_ENV;
var Ie = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/;
RegExp(`^${Ie.source}$`), RegExp(`^${Ie.source}%$`), RegExp(`^${Ie.source}\\s*/\\s*${Ie.source}$`), RegExp(`^${Ie.source}(${`cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`).join(`|`)})$`), RegExp(`^${Ie.source}(${[`deg`, `rad`, `grad`, `turn`].join(`|`)})$`), RegExp(`^${Ie.source} +${Ie.source} +${Ie.source}$`);
function Le(e26) {
  let t2 = Number(e26);
  return Number.isInteger(t2) && t2 >= 0 && String(t2) === String(e26);
}
function Re(e26, t2) {
  if (t2 === null) return e26;
  let n2 = Number(t2);
  return Number.isNaN(n2) || (t2 = `${n2 * 100}%`), t2 === `100%` ? e26 : `color-mix(in oklab, ${e26} ${t2}, transparent)`;
}
var ze = { "--alpha": Be, "--spacing": Ve, "--theme": He, theme: Ue };
function Be(e26, t2, n2, ...r2) {
  let [i2, a2] = pe(n2, `/`).map((e27) => e27.trim());
  if (!i2 || !a2) throw Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  if (r2.length > 0) throw Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  return Re(i2, a2);
}
function Ve(e26, t2, n2, ...r2) {
  if (!n2) throw Error(`The --spacing(\u2026) function requires an argument, but received none.`);
  if (r2.length > 0) throw Error(`The --spacing(\u2026) function only accepts a single argument, but received ${r2.length + 1}.`);
  let i2 = e26.theme.resolve(null, [`--spacing`]);
  if (!i2) throw Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
  return `calc(${i2} * ${n2})`;
}
function He(e26, t2, n2, ...r2) {
  if (!n2.startsWith(`--`)) throw Error(`The --theme(\u2026) function can only be used with CSS variables from your theme.`);
  let i2 = false;
  n2.endsWith(` inline`) && (i2 = true, n2 = n2.slice(0, -7)), t2.kind === `at-rule` && (i2 = true);
  let a2 = e26.resolveThemeValue(n2, i2);
  if (!a2) {
    if (r2.length > 0) return r2.join(`, `);
    throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
  }
  if (r2.length === 0) return a2;
  let o2 = r2.join(`, `);
  if (o2 === `initial`) return a2;
  if (a2 === `initial`) return o2;
  if (a2.startsWith(`var(`) || a2.startsWith(`theme(`) || a2.startsWith(`--theme(`)) {
    let e27 = Fe(a2);
    return Ge(e27, o2), be(e27);
  }
  return a2;
}
function Ue(e26, t2, n2, ...r2) {
  n2 = We(n2);
  let i2 = e26.resolveThemeValue(n2);
  if (!i2 && r2.length > 0) return r2.join(`, `);
  if (!i2) throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
  return i2;
}
new RegExp(Object.keys(ze).map((e26) => `${e26}\\(`).join(`|`));
function We(e26) {
  if (e26[0] !== `'` && e26[0] !== `"`) return e26;
  let t2 = ``, n2 = e26[0];
  for (let r2 = 1; r2 < e26.length - 1; r2++) {
    let i2 = e26[r2], a2 = e26[r2 + 1];
    i2 === `\\` && (a2 === n2 || a2 === `\\`) ? (t2 += a2, r2++) : t2 += i2;
  }
  return t2;
}
function Ge(e26, t2) {
  he(e26, (e27) => {
    if (e27.kind === `function` && !(e27.value !== `var` && e27.value !== `theme` && e27.value !== `--theme`)) if (e27.nodes.length === 1) e27.nodes.push({ kind: `word`, value: `, ${t2}` });
    else {
      let n2 = e27.nodes[e27.nodes.length - 1];
      n2.kind === `word` && n2.value === `initial` && (n2.value = t2);
    }
  });
}
function Ke(e26) {
  return { __BARE_VALUE__: e26 };
}
var b = Ke((e26) => {
  if (Le(e26.value)) return e26.value;
}), qe = Ke((e26) => {
  if (Le(e26.value)) return `${e26.value}%`;
}), Je = Ke((e26) => {
  if (Le(e26.value)) return `${e26.value}px`;
}), Ye = Ke((e26) => {
  if (Le(e26.value)) return `${e26.value}ms`;
}), Xe = Ke((e26) => {
  if (Le(e26.value)) return `${e26.value}deg`;
}), Ze = Ke((e26) => {
  if (e26.fraction === null) return;
  let [t2, n2] = pe(e26.fraction, `/`);
  if (!(!Le(t2) || !Le(n2))) return e26.fraction;
}), Qe = Ke((e26) => {
  if (Le(Number(e26.value))) return `repeat(${e26.value}, minmax(0, 1fr))`;
});
({ ...Ze }, { ...Je }), { ...qe }, { ...b }, { ...qe }, { ...b }, { ...b }, { ...qe }, { ...qe }, { ...b }, { ...b }, { ...b }, { ...b }, { ...Qe }, { ...Qe }, { ...Xe }, { ...qe }, { ...b }, { ...qe }, { ...b }, { ...Je }, { ...Je }, { ...Je }, { ...Je }, { ...Xe }, { ...qe }, { ...qe }, { ...qe }, { ...Xe }, { ...b }, { ...Je }, { ...Je }, { ...Ye }, { ...Ye }, { ...b }, new a((e26) => {
  let t2 = Fe(e26), n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set([`~`, `>`, `+`, `-`, `*`, `/`]);
  return he(t2, (e27, i2) => {
    let a2 = i2.parent === null ? t2 : i2.parent.nodes ?? [];
    if (e27.kind === `word` && r2.has(e27.value)) {
      let t3 = a2.indexOf(e27) ?? -1;
      if (t3 === -1) return;
      let i3 = a2[t3 - 1];
      if (i3?.kind !== `separator` || i3.value !== ` `) return;
      let o2 = a2[t3 + 1];
      if (o2?.kind !== `separator` || o2.value !== ` `) return;
      let s2 = a2[t3 - 2];
      if (s2 && r2.has(s2.value)) return;
      let c2 = a2[t3 + 2];
      if (c2 && r2.has(c2.value)) return;
      n2.add(i3), n2.add(o2);
    } else if (e27.kind === `separator` && e27.value.length > 0 && e27.value.trim() === ``) (a2[0] === e27 || a2[a2.length - 1] === e27) && n2.add(e27);
    else if (e27.kind === `separator` && e27.value.trim() === `,`) e27.value = `,`;
    else if (e27.kind === `function` && e27.value.startsWith(`--`)) {
      let t3 = a2.indexOf(e27) ?? -1;
      if (t3 <= 0) return;
      let n3 = a2[t3 - 1];
      if (n3?.kind === `separator` && n3.value === `,`) return;
      let i3 = a2[t3 - 2];
      return i3 && !r2.has(i3.value) ? void 0 : me.ReplaceSkip({ kind: `function`, value: ``, nodes: [e27] });
    }
  }), n2.size > 0 && he(t2, (e27) => {
    if (n2.has(e27)) return n2.delete(e27), me.ReplaceSkip([]);
  }), $e(t2), be(t2);
}), new a((e26) => {
  let t2 = Fe(e26);
  return t2.length === 3 && t2[0].kind === `word` && t2[0].value === `&` && t2[1].kind === `separator` && t2[1].value === `:` && t2[2].kind === `function` && t2[2].value === `is` ? be(t2[2].nodes) : e26;
});
function $e(e26) {
  for (let t2 of e26) switch (t2.kind) {
    case `function`:
      if (t2.value === `url` || t2.value.endsWith(`_url`)) {
        t2.value = tt(t2.value);
        break;
      }
      if (t2.value === `var` || t2.value.endsWith(`_var`) || t2.value === `theme` || t2.value.endsWith(`_theme`)) {
        t2.value = tt(t2.value);
        for (let e27 = 0; e27 < t2.nodes.length; e27++) $e([t2.nodes[e27]]);
        break;
      }
      t2.value = tt(t2.value), $e(t2.nodes);
      break;
    case `separator`:
      t2.value = tt(t2.value);
      break;
    case `word`:
      (t2.value[0] !== `-` || t2.value[1] !== `-`) && (t2.value = tt(t2.value));
      break;
    default:
      et(t2);
  }
}
new a((e26) => {
  let t2 = Fe(e26);
  return t2.length === 1 && t2[0].kind === `function` && t2[0].value === `var`;
});
function et(e26) {
  throw Error(`Unexpected value: ${e26}`);
}
function tt(e26) {
  return e26.replaceAll(`_`, String.raw`\_`).replaceAll(` `, `_`);
}
var nt = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i;
new a((e26) => {
  let t2 = nt.exec(e26);
  if (!t2) return null;
  let n2 = t2.groups?.value;
  if (n2 === void 0) return null;
  let r2 = Number(n2);
  if (Number.isNaN(r2)) return null;
  let i2 = t2.groups?.unit;
  return i2 === void 0 ? [r2, null] : [r2, i2];
});
function rt(e26, t2 = `top`, n2 = `right`, r2 = `bottom`, i2 = `left`) {
  return it(`${e26}-${t2}`, `${e26}-${n2}`, `${e26}-${r2}`, `${e26}-${i2}`);
}
function it(e26 = `top`, t2 = `right`, n2 = `bottom`, r2 = `left`) {
  return { 1: [[e26, 0], [t2, 0], [n2, 0], [r2, 0]], 2: [[e26, 0], [t2, 1], [n2, 0], [r2, 1]], 3: [[e26, 0], [t2, 1], [n2, 2], [r2, 1]], 4: [[e26, 0], [t2, 1], [n2, 2], [r2, 3]] };
}
rt(`margin`), rt(`padding`), rt(`scroll-margin`), rt(`scroll-padding`), rt(`border`, `top-width`, `right-width`, `bottom-width`, `left-width`), rt(`border`, `top-style`, `right-style`, `bottom-style`, `left-style`), rt(`border`, `top-color`, `right-color`, `bottom-color`, `left-color`);
var at = (function(e26) {
  return e26[e26.None = 0] = `None`, e26[e26.RespectImportant = 1] = `RespectImportant`, e26;
})({});
function ot(e26, t2, { onInvalidCandidate: n2, respectImportant: r2 } = {}) {
  let i2 = /* @__PURE__ */ new Map(), a2 = [], o2 = /* @__PURE__ */ new Map();
  for (let r3 of e26) {
    if (t2.invalidCandidates.has(r3)) {
      n2?.(r3);
      continue;
    }
    let e27 = t2.parseCandidate(r3);
    if (e27.length === 0) {
      n2?.(r3);
      continue;
    }
    o2.set(r3, e27);
  }
  let s2 = at.None;
  (r2 ?? true) && (s2 |= at.RespectImportant);
  let c2 = t2.getVariantOrder();
  for (let [e27, r3] of o2) {
    let o3 = false;
    for (let n3 of r3) {
      let r4 = t2.compileAstNodes(n3, s2);
      if (r4.length !== 0) {
        o3 = true;
        for (let { node: t3, propertySort: o4 } of r4) {
          let r5 = 0n;
          for (let e28 of n3.variants) r5 |= 1n << BigInt(c2.get(e28));
          i2.set(t3, { properties: o4, variants: r5, candidate: e27 }), a2.push(t3);
        }
      }
    }
    o3 || n2?.(e27);
  }
  return a2.sort((e27, t3) => {
    let n3 = i2.get(e27), r3 = i2.get(t3);
    if (n3.variants - r3.variants !== 0n) return Number(n3.variants - r3.variants);
    let a3 = 0;
    for (; a3 < n3.properties.order.length && a3 < r3.properties.order.length && n3.properties.order[a3] === r3.properties.order[a3]; ) a3 += 1;
    return (n3.properties.order[a3] ?? 1 / 0) - (r3.properties.order[a3] ?? 1 / 0) || r3.properties.count - n3.properties.count || ne(n3.candidate, r3.candidate);
  }), { astNodes: a2, nodeSorting: i2 };
}
function st(e26, { replace: t2, recursive: n2 = true }) {
  let r2 = /* @__PURE__ */ new Set();
  for (let i2 = 0; i2 < e26.length; ++i2) {
    if (!e26.startsWith(`var(`, i2)) continue;
    let a2 = 0, o2 = null;
    for (let s2 = i2 + 4; i2 < e26.length; ++s2) if (e26[s2] === `(`) a2++;
    else if (e26[s2] === `)` && a2 > 0) a2--;
    else if (e26[s2] === `\\`) s2++;
    else if (e26[s2] === `,` && a2 === 0 && o2 === null) o2 = s2 + 1;
    else if (e26[s2] === `)` && a2 === 0) {
      let a3, c2;
      o2 === null ? (a3 = e26.slice(i2 + 4, s2), c2 = null) : (a3 = e26.slice(i2 + 4, o2 - 1), c2 = e26.slice(o2, s2));
      let l2 = t2({ kind: `css-variable`, name: a3, fallback: c2, range: { start: i2, end: s2 } });
      if (l2 !== null) {
        if (l2.includes(`var(${a3})`) || l2.includes(`var(${a3},`)) break;
        e26 = e26.slice(0, i2) + l2 + e26.slice(s2 + 1);
      }
      if (n2) {
        let e27 = `${i2}:${l2}`;
        r2.has(e27) || (r2.add(e27), --i2);
      }
      break;
    }
  }
  return e26;
}
function ct(e26, t2) {
  for (let n2 = 0; n2 < e26.length; ++n2) {
    if (!e26.startsWith(`calc(`, n2)) continue;
    let r2 = 0;
    for (let i2 = n2 + 5; i2 < e26.length; ++i2) if (e26[i2] === `(`) r2++;
    else if (e26[i2] === `)` && r2 > 0) r2--;
    else if (e26[i2] === `)` && r2 === 0) {
      let r3 = t2({ kind: `calc-expression`, value: e26.slice(n2 + 5, i2), range: { start: n2, end: i2 } });
      r3 !== null && (e26 = e26.slice(0, n2) + r3 + e26.slice(i2 + 1));
      break;
    }
  }
  return e26;
}
function lt(e26, t2) {
  let n2 = e26.theme.prefix ?? null;
  return n2 && t2.startsWith(`--${n2}`) && (t2 = `--${t2.slice(n2.length + 3)}`), t2 = t2.replaceAll(`\\.`, `.`), e26.resolveThemeValue?.(t2, true) ?? null;
}
var ut = class extends Error {
  constructor(e26, t2, n2, r2) {
    super(e26);
    __publicField(this, "sourceStart");
    __publicField(this, "sourceEnd");
    __publicField(this, "parserState");
    this.name = `ParseError`, this.sourceStart = t2, this.sourceEnd = n2, this.parserState = r2;
  }
}, dt = class extends ut {
  constructor(e26, t2, n2, r2, i2) {
    super(e26, t2, n2, r2);
    __publicField(this, "token");
    this.token = i2;
  }
}, ft = { UnexpectedNewLineInString: `Unexpected newline while consuming a string token.`, UnexpectedEOFInString: `Unexpected EOF while consuming a string token.`, UnexpectedEOFInComment: `Unexpected EOF while consuming a comment.`, UnexpectedEOFInURL: `Unexpected EOF while consuming a url token.`, UnexpectedEOFInEscapedCodePoint: `Unexpected EOF while consuming an escaped code point.`, UnexpectedCharacterInURL: `Unexpected character while consuming a url token.`, InvalidEscapeSequenceInURL: `Invalid escape sequence while consuming a url token.`, InvalidEscapeSequenceAfterBackslash: `Invalid escape sequence after "\\"` };
typeof globalThis < `u` && `structuredClone` in globalThis;
function x(...e26) {
  let t2 = ``;
  for (let n2 = 0; n2 < e26.length; n2++) t2 += e26[n2][1];
  return t2;
}
var pt = 13, S = 45, mt = 10, ht = 43, gt = 65533;
function _t(e26) {
  return e26.source.codePointAt(e26.cursor) === 60 && e26.source.codePointAt(e26.cursor + 1) === 33 && e26.source.codePointAt(e26.cursor + 2) === S && e26.source.codePointAt(e26.cursor + 3) === S;
}
function C(e26) {
  return e26 >= 48 && e26 <= 57;
}
function vt(e26) {
  return e26 >= 65 && e26 <= 90;
}
function yt(e26) {
  return e26 >= 97 && e26 <= 122;
}
function bt(e26) {
  return e26 >= 48 && e26 <= 57 || e26 >= 97 && e26 <= 102 || e26 >= 65 && e26 <= 70;
}
function xt(e26) {
  return yt(e26) || vt(e26);
}
function St(e26) {
  return xt(e26) || wt(e26) || e26 === 95;
}
function Ct(e26) {
  return St(e26) || C(e26) || e26 === S;
}
function wt(e26) {
  return e26 === 183 || e26 === 8204 || e26 === 8205 || e26 === 8255 || e26 === 8256 || e26 === 8204 || 192 <= e26 && e26 <= 214 || 216 <= e26 && e26 <= 246 || 248 <= e26 && e26 <= 893 || 895 <= e26 && e26 <= 8191 || 8304 <= e26 && e26 <= 8591 || 11264 <= e26 && e26 <= 12271 || 12289 <= e26 && e26 <= 55295 || 63744 <= e26 && e26 <= 64975 || 65008 <= e26 && e26 <= 65533 || e26 === 0 || !!Dt(e26) || e26 >= 65536;
}
function Tt(e26) {
  return e26 === mt || e26 === pt || e26 === 12;
}
function Et(e26) {
  return e26 === 32 || e26 === mt || e26 === 9 || e26 === pt || e26 === 12;
}
function Dt(e26) {
  return e26 >= 55296 && e26 <= 57343;
}
function Ot(e26) {
  return e26.source.codePointAt(e26.cursor) === 92 && !Tt(e26.source.codePointAt(e26.cursor + 1) ?? -1);
}
function kt(e26, t2) {
  return t2.source.codePointAt(t2.cursor) === S ? t2.source.codePointAt(t2.cursor + 1) === S || !!St(t2.source.codePointAt(t2.cursor + 1) ?? -1) || t2.source.codePointAt(t2.cursor + 1) === 92 && !Tt(t2.source.codePointAt(t2.cursor + 2) ?? -1) : !!St(t2.source.codePointAt(t2.cursor) ?? -1) || Ot(t2);
}
function At(e26) {
  return e26.source.codePointAt(e26.cursor) === ht || e26.source.codePointAt(e26.cursor) === S ? !!C(e26.source.codePointAt(e26.cursor + 1) ?? -1) || e26.source.codePointAt(e26.cursor + 1) === 46 && C(e26.source.codePointAt(e26.cursor + 2) ?? -1) : e26.source.codePointAt(e26.cursor) === 46 ? C(e26.source.codePointAt(e26.cursor + 1) ?? -1) : C(e26.source.codePointAt(e26.cursor) ?? -1);
}
function jt(e26) {
  return e26.source.codePointAt(e26.cursor) === 47 && e26.source.codePointAt(e26.cursor + 1) === 42;
}
function Mt(e26) {
  return e26.source.codePointAt(e26.cursor) === S && e26.source.codePointAt(e26.cursor + 1) === S && e26.source.codePointAt(e26.cursor + 2) === 62;
}
var w, T, Nt;
function Pt(e26) {
  switch (e26) {
    case w.OpenParen:
      return w.CloseParen;
    case w.CloseParen:
      return w.OpenParen;
    case w.OpenCurly:
      return w.CloseCurly;
    case w.CloseCurly:
      return w.OpenCurly;
    case w.OpenSquare:
      return w.CloseSquare;
    case w.CloseSquare:
      return w.OpenSquare;
    default:
      return null;
  }
}
function Ft(e26) {
  switch (e26[0]) {
    case w.OpenParen:
      return [w.CloseParen, `)`, -1, -1, void 0];
    case w.CloseParen:
      return [w.OpenParen, `(`, -1, -1, void 0];
    case w.OpenCurly:
      return [w.CloseCurly, `}`, -1, -1, void 0];
    case w.CloseCurly:
      return [w.OpenCurly, `{`, -1, -1, void 0];
    case w.OpenSquare:
      return [w.CloseSquare, `]`, -1, -1, void 0];
    case w.CloseSquare:
      return [w.OpenSquare, `[`, -1, -1, void 0];
    default:
      return null;
  }
}
function It(e26, t2) {
  for (t2.advanceCodePoint(2); ; ) {
    let n2 = t2.readCodePoint();
    if (n2 === void 0) {
      let n3 = [w.Comment, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, void 0];
      return e26.onParseError(new dt(ft.UnexpectedEOFInComment, t2.representationStart, t2.representationEnd, [`4.3.2. Consume comments`, `Unexpected EOF`], n3)), n3;
    }
    if (n2 === 42 && t2.source.codePointAt(t2.cursor) !== void 0 && t2.source.codePointAt(t2.cursor) === 47) {
      t2.advanceCodePoint();
      break;
    }
  }
  return [w.Comment, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, void 0];
}
function Lt(e26, t2) {
  let n2 = t2.readCodePoint();
  if (n2 === void 0) return e26.onParseError(new ut(ft.UnexpectedEOFInEscapedCodePoint, t2.representationStart, t2.representationEnd, [`4.3.7. Consume an escaped code point`, `Unexpected EOF`])), gt;
  if (bt(n2)) {
    let e27 = [n2], r2;
    for (; (r2 = t2.source.codePointAt(t2.cursor)) !== void 0 && bt(r2) && e27.length < 6; ) e27.push(r2), t2.advanceCodePoint();
    Et(t2.source.codePointAt(t2.cursor) ?? -1) && (t2.source.codePointAt(t2.cursor) === pt && t2.source.codePointAt(t2.cursor + 1) === mt && t2.advanceCodePoint(), t2.advanceCodePoint());
    let i2 = parseInt(String.fromCodePoint(...e27), 16);
    return i2 === 0 || Dt(i2) || i2 > 1114111 ? gt : i2;
  }
  return n2 === 0 || Dt(n2) ? gt : n2;
}
function Rt(e26, t2) {
  let n2 = [];
  for (; ; ) {
    let r2 = t2.source.codePointAt(t2.cursor) ?? -1;
    if (r2 === 0 || Dt(r2)) n2.push(gt), t2.advanceCodePoint(+(r2 > 65535) + 1);
    else if (Ct(r2)) n2.push(r2), t2.advanceCodePoint(+(r2 > 65535) + 1);
    else {
      if (!Ot(t2)) return n2;
      t2.advanceCodePoint(), n2.push(Lt(e26, t2));
    }
  }
}
function zt(e26, t2) {
  t2.advanceCodePoint();
  let n2 = t2.source.codePointAt(t2.cursor);
  if (n2 !== void 0 && (Ct(n2) || Ot(t2))) {
    let n3 = Nt.Unrestricted;
    kt(0, t2) && (n3 = Nt.ID);
    let r2 = Rt(e26, t2);
    return [w.Hash, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: String.fromCodePoint(...r2), type: n3 }];
  }
  return [w.Delim, `#`, t2.representationStart, t2.representationEnd, { value: `#` }];
}
function Bt(e26, t2) {
  let n2 = T.Integer;
  for (t2.source.codePointAt(t2.cursor) !== ht && t2.source.codePointAt(t2.cursor) !== S || t2.advanceCodePoint(); C(t2.source.codePointAt(t2.cursor) ?? -1); ) t2.advanceCodePoint();
  if (t2.source.codePointAt(t2.cursor) === 46 && C(t2.source.codePointAt(t2.cursor + 1) ?? -1)) for (t2.advanceCodePoint(2), n2 = T.Number; C(t2.source.codePointAt(t2.cursor) ?? -1); ) t2.advanceCodePoint();
  if (t2.source.codePointAt(t2.cursor) === 101 || t2.source.codePointAt(t2.cursor) === 69) {
    if (C(t2.source.codePointAt(t2.cursor + 1) ?? -1)) t2.advanceCodePoint(2);
    else {
      if (t2.source.codePointAt(t2.cursor + 1) !== S && t2.source.codePointAt(t2.cursor + 1) !== ht || !C(t2.source.codePointAt(t2.cursor + 2) ?? -1)) return n2;
      t2.advanceCodePoint(3);
    }
    for (n2 = T.Number; C(t2.source.codePointAt(t2.cursor) ?? -1); ) t2.advanceCodePoint();
  }
  return n2;
}
function Vt(e26, t2) {
  let n2;
  {
    let e27 = t2.source.codePointAt(t2.cursor);
    e27 === S ? n2 = `-` : e27 === ht && (n2 = `+`);
  }
  let r2 = Bt(0, t2), i2 = parseFloat(t2.source.slice(t2.representationStart, t2.representationEnd + 1));
  if (kt(0, t2)) {
    let a2 = Rt(e26, t2);
    return [w.Dimension, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: i2, signCharacter: n2, type: r2, unit: String.fromCodePoint(...a2) }];
  }
  return t2.source.codePointAt(t2.cursor) === 37 ? (t2.advanceCodePoint(), [w.Percentage, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: i2, signCharacter: n2 }]) : [w.Number, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: i2, signCharacter: n2, type: r2 }];
}
function Ht(e26) {
  for (; Et(e26.source.codePointAt(e26.cursor) ?? -1); ) e26.advanceCodePoint();
  return [w.Whitespace, e26.source.slice(e26.representationStart, e26.representationEnd + 1), e26.representationStart, e26.representationEnd, void 0];
}
(function(e26) {
  e26.Comment = `comment`, e26.AtKeyword = `at-keyword-token`, e26.BadString = `bad-string-token`, e26.BadURL = `bad-url-token`, e26.CDC = `CDC-token`, e26.CDO = `CDO-token`, e26.Colon = `colon-token`, e26.Comma = `comma-token`, e26.Delim = `delim-token`, e26.Dimension = `dimension-token`, e26.EOF = `EOF-token`, e26.Function = `function-token`, e26.Hash = `hash-token`, e26.Ident = `ident-token`, e26.Number = `number-token`, e26.Percentage = `percentage-token`, e26.Semicolon = `semicolon-token`, e26.String = `string-token`, e26.URL = `url-token`, e26.Whitespace = `whitespace-token`, e26.OpenParen = `(-token`, e26.CloseParen = `)-token`, e26.OpenSquare = `[-token`, e26.CloseSquare = `]-token`, e26.OpenCurly = `{-token`, e26.CloseCurly = `}-token`, e26.UnicodeRange = `unicode-range-token`;
})(w || (w = {})), (function(e26) {
  e26.Integer = `integer`, e26.Number = `number`;
})(T || (T = {})), (function(e26) {
  e26.Unrestricted = `unrestricted`, e26.ID = `id`;
})(Nt || (Nt = {}));
var Ut = class {
  constructor(e26) {
    __publicField(this, "cursor", 0);
    __publicField(this, "source", ``);
    __publicField(this, "representationStart", 0);
    __publicField(this, "representationEnd", -1);
    this.source = e26;
  }
  advanceCodePoint(e26 = 1) {
    this.cursor += e26, this.representationEnd = this.cursor - 1;
  }
  readCodePoint() {
    let e26 = this.source.codePointAt(this.cursor);
    if (e26 !== void 0) return this.cursor += 1, this.representationEnd = this.cursor - 1, e26;
  }
  unreadCodePoint(e26 = 1) {
    this.cursor -= e26, this.representationEnd = this.cursor - 1;
  }
  resetRepresentation() {
    this.representationStart = this.cursor, this.representationEnd = -1;
  }
};
function Wt(e26, t2) {
  let n2 = ``, r2 = t2.readCodePoint();
  for (; ; ) {
    let i2 = t2.readCodePoint();
    if (i2 === void 0) {
      let r3 = [w.String, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: n2 }];
      return e26.onParseError(new dt(ft.UnexpectedEOFInString, t2.representationStart, t2.representationEnd, [`4.3.5. Consume a string token`, `Unexpected EOF`], r3)), r3;
    }
    if (Tt(i2)) {
      t2.unreadCodePoint();
      let n3 = [w.BadString, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, void 0];
      return e26.onParseError(new dt(ft.UnexpectedNewLineInString, t2.representationStart, t2.source.codePointAt(t2.cursor) === pt && t2.source.codePointAt(t2.cursor + 1) === mt ? t2.representationEnd + 2 : t2.representationEnd + 1, [`4.3.5. Consume a string token`, `Unexpected newline`], n3)), n3;
    }
    if (i2 === r2) return [w.String, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: n2 }];
    if (i2 !== 92) i2 === 0 || Dt(i2) ? n2 += String.fromCodePoint(gt) : n2 += String.fromCodePoint(i2);
    else {
      if (t2.source.codePointAt(t2.cursor) === void 0) continue;
      if (Tt(t2.source.codePointAt(t2.cursor) ?? -1)) {
        t2.source.codePointAt(t2.cursor) === pt && t2.source.codePointAt(t2.cursor + 1) === mt && t2.advanceCodePoint(), t2.advanceCodePoint();
        continue;
      }
      n2 += String.fromCodePoint(Lt(e26, t2));
    }
  }
}
function Gt(e26) {
  return !(e26.length !== 3 || e26[0] !== 117 && e26[0] !== 85 || e26[1] !== 114 && e26[1] !== 82 || e26[2] !== 108 && e26[2] !== 76);
}
function Kt(e26, t2) {
  for (; ; ) {
    let n2 = t2.source.codePointAt(t2.cursor);
    if (n2 === void 0) return;
    if (n2 === 41) return void t2.advanceCodePoint();
    Ot(t2) ? (t2.advanceCodePoint(), Lt(e26, t2)) : t2.advanceCodePoint();
  }
}
function qt(e26, t2) {
  for (; Et(t2.source.codePointAt(t2.cursor) ?? -1); ) t2.advanceCodePoint();
  let n2 = ``;
  for (; ; ) {
    if (t2.source.codePointAt(t2.cursor) === void 0) {
      let r3 = [w.URL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: n2 }];
      return e26.onParseError(new dt(ft.UnexpectedEOFInURL, t2.representationStart, t2.representationEnd, [`4.3.6. Consume a url token`, `Unexpected EOF`], r3)), r3;
    }
    if (t2.source.codePointAt(t2.cursor) === 41) return t2.advanceCodePoint(), [w.URL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: n2 }];
    if (Et(t2.source.codePointAt(t2.cursor) ?? -1)) {
      for (t2.advanceCodePoint(); Et(t2.source.codePointAt(t2.cursor) ?? -1); ) t2.advanceCodePoint();
      if (t2.source.codePointAt(t2.cursor) === void 0) {
        let r3 = [w.URL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: n2 }];
        return e26.onParseError(new dt(ft.UnexpectedEOFInURL, t2.representationStart, t2.representationEnd, [`4.3.6. Consume a url token`, `Consume as much whitespace as possible`, `Unexpected EOF`], r3)), r3;
      }
      return t2.source.codePointAt(t2.cursor) === 41 ? (t2.advanceCodePoint(), [w.URL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: n2 }]) : (Kt(e26, t2), [w.BadURL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, void 0]);
    }
    let i2 = t2.source.codePointAt(t2.cursor);
    if (i2 === 34 || i2 === 39 || i2 === 40 || (r2 = i2 ?? -1) === 11 || r2 === 127 || 0 <= r2 && r2 <= 8 || 14 <= r2 && r2 <= 31) {
      Kt(e26, t2);
      let n3 = [w.BadURL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, void 0];
      return e26.onParseError(new dt(ft.UnexpectedCharacterInURL, t2.representationStart, t2.representationEnd, [`4.3.6. Consume a url token`, `Unexpected U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('), U+0028 LEFT PARENTHESIS (() or non-printable code point`], n3)), n3;
    }
    if (i2 === 92) {
      if (Ot(t2)) {
        t2.advanceCodePoint(), n2 += String.fromCodePoint(Lt(e26, t2));
        continue;
      }
      Kt(e26, t2);
      let r3 = [w.BadURL, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, void 0];
      return e26.onParseError(new dt(ft.InvalidEscapeSequenceInURL, t2.representationStart, t2.representationEnd, [`4.3.6. Consume a url token`, `U+005C REVERSE SOLIDUS (\\)`, `The input stream does not start with a valid escape sequence`], r3)), r3;
    }
    t2.source.codePointAt(t2.cursor) === 0 || Dt(t2.source.codePointAt(t2.cursor) ?? -1) ? (n2 += String.fromCodePoint(gt), t2.advanceCodePoint()) : (n2 += t2.source[t2.cursor], t2.advanceCodePoint());
  }
  var r2;
}
function Jt(e26, t2) {
  let n2 = Rt(e26, t2);
  if (t2.source.codePointAt(t2.cursor) !== 40) return [w.Ident, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: String.fromCodePoint(...n2) }];
  if (Gt(n2)) {
    t2.advanceCodePoint();
    let r2 = 0;
    for (; ; ) {
      let e27 = Et(t2.source.codePointAt(t2.cursor) ?? -1), i2 = Et(t2.source.codePointAt(t2.cursor + 1) ?? -1);
      if (e27 && i2) {
        r2 += 1, t2.advanceCodePoint(1);
        continue;
      }
      let a2 = e27 ? t2.source.codePointAt(t2.cursor + 1) : t2.source.codePointAt(t2.cursor);
      if (a2 === 34 || a2 === 39) return r2 > 0 && t2.unreadCodePoint(r2), [w.Function, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: String.fromCodePoint(...n2) }];
      break;
    }
    return qt(e26, t2);
  }
  return t2.advanceCodePoint(), [w.Function, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { value: String.fromCodePoint(...n2) }];
}
function Yt(e26) {
  return !(e26.source.codePointAt(e26.cursor) !== 117 && e26.source.codePointAt(e26.cursor) !== 85 || e26.source.codePointAt(e26.cursor + 1) !== ht || e26.source.codePointAt(e26.cursor + 2) !== 63 && !bt(e26.source.codePointAt(e26.cursor + 2) ?? -1));
}
function Xt(e26, t2) {
  t2.advanceCodePoint(2);
  let n2 = [], r2 = [], i2;
  for (; (i2 = t2.source.codePointAt(t2.cursor)) !== void 0 && n2.length < 6 && bt(i2); ) n2.push(i2), t2.advanceCodePoint();
  for (; (i2 = t2.source.codePointAt(t2.cursor)) !== void 0 && n2.length < 6 && i2 === 63; ) r2.length === 0 && r2.push(...n2), n2.push(48), r2.push(70), t2.advanceCodePoint();
  if (!r2.length && t2.source.codePointAt(t2.cursor) === S && bt(t2.source.codePointAt(t2.cursor + 1) ?? -1)) for (t2.advanceCodePoint(); (i2 = t2.source.codePointAt(t2.cursor)) !== void 0 && r2.length < 6 && bt(i2); ) r2.push(i2), t2.advanceCodePoint();
  if (!r2.length) {
    let e27 = parseInt(String.fromCodePoint(...n2), 16);
    return [w.UnicodeRange, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { startOfRange: e27, endOfRange: e27 }];
  }
  let a2 = parseInt(String.fromCodePoint(...n2), 16), o2 = parseInt(String.fromCodePoint(...r2), 16);
  return [w.UnicodeRange, t2.source.slice(t2.representationStart, t2.representationEnd + 1), t2.representationStart, t2.representationEnd, { startOfRange: a2, endOfRange: o2 }];
}
function Zt(e26, t2) {
  let n2 = Qt(e26, t2), r2 = [];
  for (; !n2.endOfFile(); ) r2.push(n2.nextToken());
  return r2.push(n2.nextToken()), r2;
}
function Qt(e26, t2) {
  let n2 = e26.css.valueOf(), r2 = e26.unicodeRangesAllowed ?? false, i2 = new Ut(n2), a2 = { onParseError: t2?.onParseError ?? $t };
  return { nextToken: function() {
    i2.resetRepresentation();
    let e27 = i2.source.codePointAt(i2.cursor);
    if (e27 === void 0) return [w.EOF, ``, -1, -1, void 0];
    if (e27 === 47 && jt(i2)) return It(a2, i2);
    if (r2 && (e27 === 117 || e27 === 85) && Yt(i2)) return Xt(0, i2);
    if (St(e27)) return Jt(a2, i2);
    if (C(e27)) return Vt(a2, i2);
    switch (e27) {
      case 44:
        return i2.advanceCodePoint(), [w.Comma, `,`, i2.representationStart, i2.representationEnd, void 0];
      case 58:
        return i2.advanceCodePoint(), [w.Colon, `:`, i2.representationStart, i2.representationEnd, void 0];
      case 59:
        return i2.advanceCodePoint(), [w.Semicolon, `;`, i2.representationStart, i2.representationEnd, void 0];
      case 40:
        return i2.advanceCodePoint(), [w.OpenParen, `(`, i2.representationStart, i2.representationEnd, void 0];
      case 41:
        return i2.advanceCodePoint(), [w.CloseParen, `)`, i2.representationStart, i2.representationEnd, void 0];
      case 91:
        return i2.advanceCodePoint(), [w.OpenSquare, `[`, i2.representationStart, i2.representationEnd, void 0];
      case 93:
        return i2.advanceCodePoint(), [w.CloseSquare, `]`, i2.representationStart, i2.representationEnd, void 0];
      case 123:
        return i2.advanceCodePoint(), [w.OpenCurly, `{`, i2.representationStart, i2.representationEnd, void 0];
      case 125:
        return i2.advanceCodePoint(), [w.CloseCurly, `}`, i2.representationStart, i2.representationEnd, void 0];
      case 39:
      case 34:
        return Wt(a2, i2);
      case 35:
        return zt(a2, i2);
      case ht:
      case 46:
        return At(i2) ? Vt(a2, i2) : (i2.advanceCodePoint(), [w.Delim, i2.source[i2.representationStart], i2.representationStart, i2.representationEnd, { value: i2.source[i2.representationStart] }]);
      case mt:
      case pt:
      case 12:
      case 9:
      case 32:
        return Ht(i2);
      case S:
        return At(i2) ? Vt(a2, i2) : Mt(i2) ? (i2.advanceCodePoint(3), [w.CDC, `-->`, i2.representationStart, i2.representationEnd, void 0]) : kt(0, i2) ? Jt(a2, i2) : (i2.advanceCodePoint(), [w.Delim, `-`, i2.representationStart, i2.representationEnd, { value: `-` }]);
      case 60:
        return _t(i2) ? (i2.advanceCodePoint(4), [w.CDO, `<!--`, i2.representationStart, i2.representationEnd, void 0]) : (i2.advanceCodePoint(), [w.Delim, `<`, i2.representationStart, i2.representationEnd, { value: `<` }]);
      case 64:
        if (i2.advanceCodePoint(), kt(0, i2)) {
          let e28 = Rt(a2, i2);
          return [w.AtKeyword, i2.source.slice(i2.representationStart, i2.representationEnd + 1), i2.representationStart, i2.representationEnd, { value: String.fromCodePoint(...e28) }];
        }
        return [w.Delim, `@`, i2.representationStart, i2.representationEnd, { value: `@` }];
      case 92: {
        if (Ot(i2)) return Jt(a2, i2);
        i2.advanceCodePoint();
        let e28 = [w.Delim, `\\`, i2.representationStart, i2.representationEnd, { value: `\\` }];
        return a2.onParseError(new dt(ft.InvalidEscapeSequenceAfterBackslash, i2.representationStart, i2.representationEnd, [`4.3.1. Consume a token`, `U+005C REVERSE SOLIDUS (\\)`, `The input stream does not start with a valid escape sequence`], e28)), e28;
      }
    }
    return i2.advanceCodePoint(), [w.Delim, i2.source[i2.representationStart], i2.representationStart, i2.representationEnd, { value: i2.source[i2.representationStart] }];
  }, endOfFile: function() {
    return i2.source.codePointAt(i2.cursor) === void 0;
  } };
}
function $t() {
}
function en(e26, t2) {
  let n2 = [];
  for (let e27 of t2) n2.push(e27.codePointAt(0));
  let r2 = tn(n2);
  r2[0] === 101 && nn(r2, 0, r2[0]);
  let i2 = String.fromCodePoint(...r2);
  e26[1] = `${e26[4].signCharacter === `+` ? e26[4].signCharacter : ``}${e26[4].value.toString()}${i2}`, e26[4].unit = t2;
}
function tn(e26) {
  let t2 = 0;
  e26[0] === S && e26[1] === S ? t2 = 2 : e26[0] === S && e26[1] ? (t2 = 2, St(e26[1]) || (t2 += nn(e26, 1, e26[1]))) : St(e26[0]) ? t2 = 1 : (t2 = 1, t2 += nn(e26, 0, e26[0]));
  for (let n2 = t2; n2 < e26.length; n2++) Ct(e26[n2]) || (n2 += nn(e26, n2, e26[n2]));
  return e26;
}
function nn(e26, t2, n2) {
  let r2 = n2.toString(16), i2 = [];
  for (let e27 of r2) i2.push(e27.codePointAt(0));
  let a2 = e26[t2 + 1];
  return t2 === e26.length - 1 || a2 && bt(a2) ? (e26.splice(t2, 1, 92, ...i2, 32), 1 + i2.length) : (e26.splice(t2, 1, 92, ...i2), i2.length);
}
var rn = Object.values(w);
function an(e26) {
  return !!Array.isArray(e26) && !(e26.length < 4) && !!rn.includes(e26[0]) && typeof e26[1] == `string` && typeof e26[2] == `number` && typeof e26[3] == `number`;
}
function E(e26) {
  if (!e26) return false;
  switch (e26[0]) {
    case w.Dimension:
    case w.Number:
    case w.Percentage:
      return true;
    default:
      return false;
  }
}
function on(e26) {
  if (!e26) return false;
  switch (e26[0]) {
    case w.Whitespace:
    case w.Comment:
      return true;
    default:
      return false;
  }
}
function sn(e26) {
  return !!e26 && e26[0] === w.Comma;
}
function cn(e26) {
  return !!e26 && e26[0] === w.Comment;
}
function ln(e26) {
  return !!e26 && e26[0] === w.Delim;
}
function D(e26) {
  return !!e26 && e26[0] === w.Dimension;
}
function O(e26) {
  return !!e26 && e26[0] === w.EOF;
}
function un(e26) {
  return !!e26 && e26[0] === w.Function;
}
function dn(e26) {
  return !!e26 && e26[0] === w.Ident;
}
function k(e26) {
  return !!e26 && e26[0] === w.Number;
}
function A(e26) {
  return !!e26 && e26[0] === w.Percentage;
}
function fn(e26) {
  return !!e26 && e26[0] === w.Whitespace;
}
function pn(e26) {
  return !!e26 && e26[0] === w.OpenParen;
}
function mn(e26) {
  return !!e26 && e26[0] === w.CloseParen;
}
function hn(e26) {
  return !!e26 && e26[0] === w.OpenSquare;
}
function gn(e26) {
  return !!e26 && e26[0] === w.OpenCurly;
}
var j;
function _n(e26) {
  let t2 = e26.slice();
  return (e27, n2, r2) => {
    let i2 = -1;
    for (let a2 = t2.indexOf(n2); a2 < t2.length && (i2 = e27.indexOf(t2[a2]), i2 === -1 || i2 < r2); a2++) ;
    return i2 === -1 || i2 === r2 && n2 === e27[r2] && (i2++, i2 >= e27.length) ? -1 : (t2 = e27.slice(), i2);
  };
}
function vn(e26, t2) {
  let n2 = t2[0];
  if (pn(n2) || gn(n2) || hn(n2)) {
    let n3 = Sn(e26, t2);
    return { advance: n3.advance, node: n3.node };
  }
  if (un(n2)) {
    let n3 = bn(e26, t2);
    return { advance: n3.advance, node: n3.node };
  }
  if (fn(n2)) {
    let n3 = Cn(e26, t2);
    return { advance: n3.advance, node: n3.node };
  }
  if (cn(n2)) {
    let n3 = Tn(e26, t2);
    return { advance: n3.advance, node: n3.node };
  }
  return { advance: 1, node: new P(n2) };
}
(function(e26) {
  e26.Function = `function`, e26.SimpleBlock = `simple-block`, e26.Whitespace = `whitespace`, e26.Comment = `comment`, e26.Token = `token`;
})(j || (j = {}));
var yn = class {
  constructor() {
    __publicField(this, "value", []);
  }
  indexOf(e26) {
    return this.value.indexOf(e26);
  }
  at(e26) {
    if (typeof e26 == `number`) return e26 < 0 && (e26 = this.value.length + e26), this.value[e26];
  }
  forEach(e26, t2) {
    if (this.value.length === 0) return;
    let n2 = _n(this.value), r2 = 0;
    for (; r2 < this.value.length; ) {
      let i2 = this.value[r2], a2;
      if (t2 && (a2 = { ...t2 }), false === e26({ node: i2, parent: this, state: a2 }, r2)) return false;
      if (r2 = n2(this.value, i2, r2), r2 === -1) break;
    }
  }
  walk(e26, t2) {
    this.value.length !== 0 && this.forEach(((t3, n2) => false !== e26(t3, n2) && (!(`walk` in t3.node) || !this.value.includes(t3.node) || false !== t3.node.walk(e26, t3.state)) && void 0), t2);
  }
}, M = class e2 extends yn {
  constructor(e26, t2, n2) {
    super();
    __publicField(this, "type", j.Function);
    __publicField(this, "name");
    __publicField(this, "endToken");
    this.name = e26, this.endToken = t2, this.value = n2;
  }
  getName() {
    return this.name[4].value;
  }
  normalize() {
    O(this.endToken) && (this.endToken = [w.CloseParen, `)`, -1, -1, void 0]);
  }
  tokens() {
    return O(this.endToken) ? [this.name, ...this.value.flatMap(((e26) => e26.tokens()))] : [this.name, ...this.value.flatMap(((e26) => e26.tokens())), this.endToken];
  }
  toString() {
    let e26 = this.value.map(((e27) => an(e27) ? x(e27) : e27.toString())).join(``);
    return x(this.name) + e26 + x(this.endToken);
  }
  toJSON() {
    return { type: this.type, name: this.getName(), tokens: this.tokens(), value: this.value.map(((e26) => e26.toJSON())) };
  }
  isFunctionNode() {
    return e2.isFunctionNode(this);
  }
  static isFunctionNode(t2) {
    return !!t2 && t2 instanceof e2 && t2.type === j.Function;
  }
};
function bn(e26, t2) {
  let n2 = [], r2 = 1;
  for (; ; ) {
    let i2 = t2[r2];
    if (!i2 || O(i2)) return e26.onParseError(new ut(`Unexpected EOF while consuming a function.`, t2[0][2], t2[t2.length - 1][3], [`5.4.9. Consume a function`, `Unexpected EOF`])), { advance: t2.length, node: new M(t2[0], i2, n2) };
    if (mn(i2)) return { advance: r2 + 1, node: new M(t2[0], i2, n2) };
    if (on(i2)) {
      let i3 = En(e26, t2.slice(r2));
      r2 += i3.advance, n2.push(...i3.nodes);
      continue;
    }
    let a2 = vn(e26, t2.slice(r2));
    r2 += a2.advance, n2.push(a2.node);
  }
}
var xn = class e3 extends yn {
  constructor(e26, t2, n2) {
    super();
    __publicField(this, "type", j.SimpleBlock);
    __publicField(this, "startToken");
    __publicField(this, "endToken");
    this.startToken = e26, this.endToken = t2, this.value = n2;
  }
  normalize() {
    if (O(this.endToken)) {
      let e26 = Ft(this.startToken);
      e26 && (this.endToken = e26);
    }
  }
  tokens() {
    return O(this.endToken) ? [this.startToken, ...this.value.flatMap(((e26) => e26.tokens()))] : [this.startToken, ...this.value.flatMap(((e26) => e26.tokens())), this.endToken];
  }
  toString() {
    let e26 = this.value.map(((e27) => an(e27) ? x(e27) : e27.toString())).join(``);
    return x(this.startToken) + e26 + x(this.endToken);
  }
  toJSON() {
    return { type: this.type, startToken: this.startToken, tokens: this.tokens(), value: this.value.map(((e26) => e26.toJSON())) };
  }
  isSimpleBlockNode() {
    return e3.isSimpleBlockNode(this);
  }
  static isSimpleBlockNode(t2) {
    return !!t2 && t2 instanceof e3 && t2.type === j.SimpleBlock;
  }
};
function Sn(e26, t2) {
  let n2 = Pt(t2[0][0]);
  if (!n2) throw Error(`Failed to parse, a mirror variant must exist for all block open tokens.`);
  let r2 = [], i2 = 1;
  for (; ; ) {
    let a2 = t2[i2];
    if (!a2 || O(a2)) return e26.onParseError(new ut(`Unexpected EOF while consuming a simple block.`, t2[0][2], t2[t2.length - 1][3], [`5.4.8. Consume a simple block`, `Unexpected EOF`])), { advance: t2.length, node: new xn(t2[0], a2, r2) };
    if (a2[0] === n2) return { advance: i2 + 1, node: new xn(t2[0], a2, r2) };
    if (on(a2)) {
      let n3 = En(e26, t2.slice(i2));
      i2 += n3.advance, r2.push(...n3.nodes);
      continue;
    }
    let o2 = vn(e26, t2.slice(i2));
    i2 += o2.advance, r2.push(o2.node);
  }
}
var N = class e4 {
  constructor(e26) {
    __publicField(this, "type", j.Whitespace);
    __publicField(this, "value");
    this.value = e26;
  }
  tokens() {
    return this.value;
  }
  toString() {
    return x(...this.value);
  }
  toJSON() {
    return { type: this.type, tokens: this.tokens() };
  }
  isWhitespaceNode() {
    return e4.isWhitespaceNode(this);
  }
  static isWhitespaceNode(t2) {
    return !!t2 && t2 instanceof e4 && t2.type === j.Whitespace;
  }
};
function Cn(e26, t2) {
  let n2 = 0;
  for (; ; ) {
    let e27 = t2[n2];
    if (!fn(e27)) return { advance: n2, node: new N(t2.slice(0, n2)) };
    n2++;
  }
}
var wn = class e5 {
  constructor(e26) {
    __publicField(this, "type", j.Comment);
    __publicField(this, "value");
    this.value = e26;
  }
  tokens() {
    return [this.value];
  }
  toString() {
    return x(this.value);
  }
  toJSON() {
    return { type: this.type, tokens: this.tokens() };
  }
  isCommentNode() {
    return e5.isCommentNode(this);
  }
  static isCommentNode(t2) {
    return !!t2 && t2 instanceof e5 && t2.type === j.Comment;
  }
};
function Tn(e26, t2) {
  return { advance: 1, node: new wn(t2[0]) };
}
function En(e26, t2) {
  let n2 = [], r2 = 0;
  for (; ; ) if (fn(t2[r2])) {
    let e27 = Cn(0, t2.slice(r2));
    r2 += e27.advance, n2.push(e27.node);
  } else {
    if (!cn(t2[r2])) return { advance: r2, nodes: n2 };
    n2.push(new wn(t2[r2])), r2++;
  }
}
var P = class e6 {
  constructor(e26) {
    __publicField(this, "type", j.Token);
    __publicField(this, "value");
    this.value = e26;
  }
  tokens() {
    return [this.value];
  }
  toString() {
    return this.value[1];
  }
  toJSON() {
    return { type: this.type, tokens: this.tokens() };
  }
  isTokenNode() {
    return e6.isTokenNode(this);
  }
  static isTokenNode(t2) {
    return !!t2 && t2 instanceof e6 && t2.type === j.Token;
  }
};
function Dn(e26, t2) {
  let n2 = { onParseError: t2?.onParseError ?? (() => {
  }) }, r2 = [...e26];
  O(r2[r2.length - 1]) && r2.push([w.EOF, ``, r2[r2.length - 1][2], r2[r2.length - 1][3], void 0]);
  let i2 = vn(n2, r2);
  if (O(r2[Math.min(i2.advance, r2.length - 1)])) return i2.node;
  n2.onParseError(new ut(`Expected EOF after parsing a component value.`, e26[0][2], e26[e26.length - 1][3], [`5.3.9. Parse a component value`, `Expected EOF`]));
}
function On(e26, t2) {
  let n2 = { onParseError: t2?.onParseError ?? (() => {
  }) }, r2 = [...e26];
  if (e26.length === 0) return [];
  O(r2[r2.length - 1]) && r2.push([w.EOF, ``, r2[r2.length - 1][2], r2[r2.length - 1][3], void 0]);
  let i2 = [], a2 = [], o2 = 0;
  for (; ; ) {
    if (!r2[o2] || O(r2[o2])) return a2.length && i2.push(a2), i2;
    if (sn(r2[o2])) {
      i2.push(a2), a2 = [], o2++;
      continue;
    }
    let t3 = vn(n2, e26.slice(o2));
    a2.push(t3.node), o2 += t3.advance;
  }
}
function kn(e26, t2, n2) {
  if (e26.length === 0) return;
  let r2 = _n(e26), i2 = 0;
  for (; i2 < e26.length; ) {
    let a2 = e26[i2], o2;
    if (n2 && (o2 = { ...n2 }), false === t2({ node: a2, parent: { value: e26 }, state: o2 }, i2)) return false;
    if (i2 = r2(e26, a2, i2), i2 === -1) break;
  }
}
function An(e26, t2, n2) {
  e26.length !== 0 && kn(e26, ((n3, r2) => false !== t2(n3, r2) && (!(`walk` in n3.node) || !e26.includes(n3.node) || false !== n3.node.walk(t2, n3.state)) && void 0), n2);
}
function jn(e26, t2) {
  for (let n2 = 0; n2 < e26.length; n2++) An(e26[n2], ((e27, n3) => {
    if (typeof n3 != `number`) return;
    let r2 = t2(e27.node);
    r2 && (Array.isArray(r2) ? e27.parent.value.splice(n3, 1, ...r2) : e27.parent.value.splice(n3, 1, r2));
  }));
  return e26;
}
function Mn(e26) {
  return xn.isSimpleBlockNode(e26);
}
function Nn(e26) {
  return M.isFunctionNode(e26);
}
function Pn(e26) {
  return N.isWhitespaceNode(e26);
}
function Fn(e26) {
  return wn.isCommentNode(e26);
}
function In(e26) {
  return Pn(e26) || Fn(e26);
}
function F(e26) {
  return P.isTokenNode(e26);
}
var Ln = /[A-Z]/g;
function I(e26) {
  return e26.replace(Ln, ((e27) => String.fromCharCode(e27.charCodeAt(0) + 32)));
}
var Rn = { cm: `px`, in: `px`, mm: `px`, pc: `px`, pt: `px`, px: `px`, q: `px`, deg: `deg`, grad: `deg`, rad: `deg`, turn: `deg`, ms: `s`, s: `s`, hz: `hz`, khz: `hz` }, zn = /* @__PURE__ */ new Map([[`cm`, (e26) => e26], [`mm`, (e26) => 10 * e26], [`q`, (e26) => 40 * e26], [`in`, (e26) => e26 / 2.54], [`pc`, (e26) => e26 / 2.54 * 6], [`pt`, (e26) => e26 / 2.54 * 72], [`px`, (e26) => e26 / 2.54 * 96]]), Bn = /* @__PURE__ */ new Map([[`deg`, (e26) => e26], [`grad`, (e26) => e26 / 0.9], [`rad`, (e26) => e26 / 180 * Math.PI], [`turn`, (e26) => e26 / 360]]), Vn = /* @__PURE__ */ new Map([[`deg`, (e26) => 0.9 * e26], [`grad`, (e26) => e26], [`rad`, (e26) => 0.9 * e26 / 180 * Math.PI], [`turn`, (e26) => 0.9 * e26 / 360]]), Hn = /* @__PURE__ */ new Map([[`hz`, (e26) => e26], [`khz`, (e26) => e26 / 1e3]]), Un = /* @__PURE__ */ new Map([[`cm`, (e26) => 2.54 * e26], [`mm`, (e26) => 25.4 * e26], [`q`, (e26) => 25.4 * e26 * 4], [`in`, (e26) => e26], [`pc`, (e26) => 6 * e26], [`pt`, (e26) => 72 * e26], [`px`, (e26) => 96 * e26]]), Wn = /* @__PURE__ */ new Map([[`hz`, (e26) => 1e3 * e26], [`khz`, (e26) => e26]]), Gn = /* @__PURE__ */ new Map([[`cm`, (e26) => e26 / 10], [`mm`, (e26) => e26], [`q`, (e26) => 4 * e26], [`in`, (e26) => e26 / 25.4], [`pc`, (e26) => e26 / 25.4 * 6], [`pt`, (e26) => e26 / 25.4 * 72], [`px`, (e26) => e26 / 25.4 * 96]]), Kn = /* @__PURE__ */ new Map([[`ms`, (e26) => e26], [`s`, (e26) => e26 / 1e3]]), qn = /* @__PURE__ */ new Map([[`cm`, (e26) => e26 / 6 * 2.54], [`mm`, (e26) => e26 / 6 * 25.4], [`q`, (e26) => e26 / 6 * 25.4 * 4], [`in`, (e26) => e26 / 6], [`pc`, (e26) => e26], [`pt`, (e26) => e26 / 6 * 72], [`px`, (e26) => e26 / 6 * 96]]), Jn = /* @__PURE__ */ new Map([[`cm`, (e26) => e26 / 72 * 2.54], [`mm`, (e26) => e26 / 72 * 25.4], [`q`, (e26) => e26 / 72 * 25.4 * 4], [`in`, (e26) => e26 / 72], [`pc`, (e26) => e26 / 72 * 6], [`pt`, (e26) => e26], [`px`, (e26) => e26 / 72 * 96]]), Yn = /* @__PURE__ */ new Map([[`cm`, (e26) => e26 / 96 * 2.54], [`mm`, (e26) => e26 / 96 * 25.4], [`q`, (e26) => e26 / 96 * 25.4 * 4], [`in`, (e26) => e26 / 96], [`pc`, (e26) => e26 / 96 * 6], [`pt`, (e26) => e26 / 96 * 72], [`px`, (e26) => e26]]), Xn = /* @__PURE__ */ new Map([[`cm`, (e26) => e26 / 4 / 10], [`mm`, (e26) => e26 / 4], [`q`, (e26) => e26], [`in`, (e26) => e26 / 4 / 25.4], [`pc`, (e26) => e26 / 4 / 25.4 * 6], [`pt`, (e26) => e26 / 4 / 25.4 * 72], [`px`, (e26) => e26 / 4 / 25.4 * 96]]), Zn = /* @__PURE__ */ new Map([[`deg`, (e26) => 180 * e26 / Math.PI], [`grad`, (e26) => 180 * e26 / Math.PI / 0.9], [`rad`, (e26) => e26], [`turn`, (e26) => 180 * e26 / Math.PI / 360]]), Qn = /* @__PURE__ */ new Map([[`ms`, (e26) => 1e3 * e26], [`s`, (e26) => e26]]), $n = /* @__PURE__ */ new Map([[`deg`, (e26) => 360 * e26], [`grad`, (e26) => 360 * e26 / 0.9], [`rad`, (e26) => 360 * e26 / 180 * Math.PI], [`turn`, (e26) => e26]]), er = /* @__PURE__ */ new Map([[`cm`, zn], [`mm`, Gn], [`q`, Xn], [`in`, Un], [`pc`, qn], [`pt`, Jn], [`px`, Yn], [`ms`, Kn], [`s`, Qn], [`deg`, Bn], [`grad`, Vn], [`rad`, Zn], [`turn`, $n], [`hz`, Hn], [`khz`, Wn]]);
function L(e26, t2) {
  if (!D(e26) || !D(t2)) return t2;
  let n2 = I(e26[4].unit), r2 = I(t2[4].unit);
  if (n2 === r2) return t2;
  let i2 = er.get(r2);
  if (!i2) return t2;
  let a2 = i2.get(n2);
  if (!a2) return t2;
  let o2 = a2(t2[4].value), s2 = [w.Dimension, ``, t2[2], t2[3], { ...t2[4], signCharacter: o2 < 0 ? `-` : void 0, type: Number.isInteger(o2) ? T.Integer : T.Number, value: o2 }];
  return en(s2, e26[4].unit), s2;
}
function tr(e26) {
  if (!D(e26)) return e26;
  let t2 = I(e26[4].unit), n2 = Rn[t2];
  if (t2 === n2) return e26;
  let r2 = er.get(t2);
  if (!r2) return e26;
  let i2 = r2.get(n2);
  if (!i2) return e26;
  let a2 = i2(e26[4].value), o2 = [w.Dimension, ``, e26[2], e26[3], { ...e26[4], signCharacter: a2 < 0 ? `-` : void 0, type: Number.isInteger(a2) ? T.Integer : T.Number, value: a2 }];
  return en(o2, n2), o2;
}
function nr(e26) {
  if (e26.length !== 2) return -1;
  let t2 = e26[0].value, n2 = e26[1].value;
  if (k(t2) && k(n2)) {
    let e27 = t2[4].value + n2[4].value;
    return new P([w.Number, e27.toString(), t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number }]);
  }
  if (A(t2) && A(n2)) {
    let e27 = t2[4].value + n2[4].value;
    return new P([w.Percentage, e27.toString() + `%`, t2[2], n2[3], { value: e27 }]);
  }
  if (D(t2) && D(n2) && (n2 = L(t2, n2), I(t2[4].unit) === I(n2[4].unit))) {
    let e27 = t2[4].value + n2[4].value;
    return new P([w.Dimension, e27.toString() + t2[4].unit, t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number, unit: t2[4].unit }]);
  }
  return -1;
}
function rr(e26) {
  if (e26.length !== 2) return -1;
  let t2 = e26[0].value, n2 = e26[1].value;
  if (k(t2) && k(n2)) {
    let e27 = t2[4].value / n2[4].value;
    return new P([w.Number, e27.toString(), t2[2], n2[3], { value: e27, type: Number.isInteger(e27) ? T.Integer : T.Number }]);
  }
  if (A(t2) && k(n2)) {
    let e27 = t2[4].value / n2[4].value;
    return new P([w.Percentage, e27.toString() + `%`, t2[2], n2[3], { value: e27 }]);
  }
  if (D(t2) && k(n2)) {
    let e27 = t2[4].value / n2[4].value;
    return new P([w.Dimension, e27.toString() + t2[4].unit, t2[2], n2[3], { value: e27, type: Number.isInteger(e27) ? T.Integer : T.Number, unit: t2[4].unit }]);
  }
  return -1;
}
function ir(e26) {
  return !!e26 && typeof e26 == `object` && `inputs` in e26 && Array.isArray(e26.inputs) && `operation` in e26;
}
function R(e26) {
  if (e26 === -1) return -1;
  let t2 = [];
  for (let n2 = 0; n2 < e26.inputs.length; n2++) {
    let r2 = e26.inputs[n2];
    if (F(r2)) {
      t2.push(r2);
      continue;
    }
    let i2 = R(r2);
    if (i2 === -1) return -1;
    t2.push(i2);
  }
  return e26.operation(t2);
}
function ar(e26) {
  if (e26.length !== 2) return -1;
  let t2 = e26[0].value, n2 = e26[1].value;
  if (k(t2) && k(n2)) {
    let e27 = t2[4].value * n2[4].value;
    return new P([w.Number, e27.toString(), t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number }]);
  }
  if (A(t2) && k(n2)) {
    let e27 = t2[4].value * n2[4].value;
    return new P([w.Percentage, e27.toString() + `%`, t2[2], n2[3], { value: e27 }]);
  }
  if (k(t2) && A(n2)) {
    let e27 = t2[4].value * n2[4].value;
    return new P([w.Percentage, e27.toString() + `%`, t2[2], n2[3], { value: e27 }]);
  }
  if (D(t2) && k(n2)) {
    let e27 = t2[4].value * n2[4].value;
    return new P([w.Dimension, e27.toString() + t2[4].unit, t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number, unit: t2[4].unit }]);
  }
  if (k(t2) && D(n2)) {
    let e27 = t2[4].value * n2[4].value;
    return new P([w.Dimension, e27.toString() + n2[4].unit, t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number, unit: n2[4].unit }]);
  }
  return -1;
}
function or(e26, t2) {
  for (let n2 = 0; n2 < e26.length; n2++) {
    let r2 = e26[n2];
    if (!F(r2)) continue;
    let i2 = r2.value;
    if (!dn(i2)) continue;
    let a2 = I(i2[4].value);
    switch (a2) {
      case `e`:
        e26.splice(n2, 1, new P([w.Number, Math.E.toString(), i2[2], i2[3], { value: Math.E, type: T.Number }]));
        break;
      case `pi`:
        e26.splice(n2, 1, new P([w.Number, Math.PI.toString(), i2[2], i2[3], { value: Math.PI, type: T.Number }]));
        break;
      case `infinity`:
        e26.splice(n2, 1, new P([w.Number, `infinity`, i2[2], i2[3], { value: 1 / 0, type: T.Number }]));
        break;
      case `-infinity`:
        e26.splice(n2, 1, new P([w.Number, `-infinity`, i2[2], i2[3], { value: -1 / 0, type: T.Number }]));
        break;
      case `nan`:
        e26.splice(n2, 1, new P([w.Number, `NaN`, i2[2], i2[3], { value: NaN, type: T.Number }]));
        break;
      default:
        if (t2.has(a2)) {
          let r3 = t2.get(a2);
          e26.splice(n2, 1, new P(r3));
        }
    }
  }
  return e26;
}
function sr(e26) {
  if (e26.length !== 1) return -1;
  let t2 = e26[0].value;
  return E(t2) ? e26[0] : -1;
}
function cr(e26, t2, n2) {
  return D(t2) ? lr(e26, t2[4].unit, n2) : A(t2) ? ur(e26, n2) : k(t2) ? z(e26, n2) : -1;
}
function lr(e26, t2, n2) {
  let r2 = e26.tokens();
  return { inputs: [new P([w.Dimension, n2.toString() + t2, r2[0][2], r2[r2.length - 1][3], { value: n2, type: Number.isInteger(n2) ? T.Integer : T.Number, unit: t2 }])], operation: sr };
}
function ur(e26, t2) {
  let n2 = e26.tokens();
  return { inputs: [new P([w.Percentage, t2.toString() + `%`, n2[0][2], n2[n2.length - 1][3], { value: t2 }])], operation: sr };
}
function z(e26, t2) {
  let n2 = e26.tokens();
  return { inputs: [new P([w.Number, t2.toString(), n2[0][2], n2[n2.length - 1][3], { value: t2, type: Number.isInteger(t2) ? T.Integer : T.Number }])], operation: sr };
}
function dr(e26, t2) {
  let n2 = t2.value;
  return k(n2) ? lr(e26, `rad`, Math.acos(n2[4].value)) : -1;
}
function fr(e26, t2) {
  let n2 = t2.value;
  return k(n2) ? lr(e26, `rad`, Math.asin(n2[4].value)) : -1;
}
function pr(e26, t2) {
  let n2 = t2.value;
  return k(n2) ? lr(e26, `rad`, Math.atan(n2[4].value)) : -1;
}
function mr(e26) {
  return D(e26) || k(e26);
}
function hr(e26) {
  if (e26.length === 0) return true;
  let t2 = e26[0];
  if (!E(t2)) return false;
  if (e26.length === 1) return true;
  if (D(t2)) {
    let n2 = I(t2[4].unit);
    for (let r2 = 1; r2 < e26.length; r2++) {
      let i2 = e26[r2];
      if (t2[0] !== i2[0] || n2 !== I(i2[4].unit)) return false;
    }
    return true;
  }
  for (let n2 = 1; n2 < e26.length; n2++) {
    let r2 = e26[n2];
    if (t2[0] !== r2[0]) return false;
  }
  return true;
}
function gr(e26, t2) {
  return !!E(e26) && (D(e26) ? e26[0] === t2[0] && I(e26[4].unit) === I(t2[4].unit) : e26[0] === t2[0]);
}
function _r(e26, t2, n2) {
  let r2 = t2.value;
  if (!mr(r2)) return -1;
  let i2 = L(r2, n2.value);
  return gr(r2, i2) ? lr(e26, `rad`, Math.atan2(r2[4].value, i2[4].value)) : -1;
}
function vr(e26, t2, n2) {
  let r2 = t2.value;
  return !E(r2) || !n2.rawPercentages && A(r2) ? -1 : cr(e26, r2, Math.abs(r2[4].value));
}
function yr(e26, t2, n2, r2, i2) {
  if (!F(t2) || !F(n2) || !F(r2)) return -1;
  let a2 = t2.value;
  if (!E(a2) || !i2.rawPercentages && A(a2)) return -1;
  let o2 = L(a2, n2.value);
  if (!gr(a2, o2)) return -1;
  let s2 = L(a2, r2.value);
  return gr(a2, s2) ? cr(e26, a2, Math.max(a2[4].value, Math.min(o2[4].value, s2[4].value))) : -1;
}
function br(e26, t2) {
  let n2 = t2.value;
  if (!mr(n2)) return -1;
  let r2 = n2[4].value;
  if (D(n2)) switch (n2[4].unit.toLowerCase()) {
    case `rad`:
      break;
    case `deg`:
      r2 = Bn.get(`rad`)(n2[4].value);
      break;
    case `grad`:
      r2 = Vn.get(`rad`)(n2[4].value);
      break;
    case `turn`:
      r2 = $n.get(`rad`)(n2[4].value);
      break;
    default:
      return -1;
  }
  return r2 = Math.cos(r2), z(e26, r2);
}
function xr(e26, t2) {
  let n2 = t2.value;
  return k(n2) ? z(e26, Math.exp(n2[4].value)) : -1;
}
function Sr(e26, t2, n2) {
  if (!t2.every(F)) return -1;
  let r2 = t2[0].value;
  if (!E(r2) || !n2.rawPercentages && A(r2)) return -1;
  let i2 = t2.map(((e27) => L(r2, e27.value)));
  if (!hr(i2)) return -1;
  let a2 = i2.map(((e27) => e27[4].value));
  return cr(e26, r2, Math.hypot(...a2));
}
function Cr(e26, t2, n2) {
  if (!t2.every(F)) return -1;
  let r2 = t2[0].value;
  if (!E(r2) || !n2.rawPercentages && A(r2)) return -1;
  let i2 = t2.map(((e27) => L(r2, e27.value)));
  if (!hr(i2)) return -1;
  let a2 = i2.map(((e27) => e27[4].value));
  return cr(e26, r2, Math.max(...a2));
}
function wr(e26, t2, n2) {
  if (!t2.every(F)) return -1;
  let r2 = t2[0].value;
  if (!E(r2) || !n2.rawPercentages && A(r2)) return -1;
  let i2 = t2.map(((e27) => L(r2, e27.value)));
  if (!hr(i2)) return -1;
  let a2 = i2.map(((e27) => e27[4].value));
  return cr(e26, r2, Math.min(...a2));
}
function Tr(e26, t2, n2) {
  let r2 = t2.value;
  if (!E(r2)) return -1;
  let i2 = L(r2, n2.value);
  if (!gr(r2, i2)) return -1;
  let a2;
  return a2 = i2[4].value === 0 ? NaN : Number.isFinite(r2[4].value) && (Number.isFinite(i2[4].value) || (i2[4].value !== 1 / 0 || r2[4].value !== -1 / 0 && !Object.is(0 * r2[4].value, -0)) && (i2[4].value !== -1 / 0 || r2[4].value !== 1 / 0 && !Object.is(0 * r2[4].value, 0))) ? Number.isFinite(i2[4].value) ? (r2[4].value % i2[4].value + i2[4].value) % i2[4].value : r2[4].value : NaN, cr(e26, r2, a2);
}
function Er(e26, t2, n2) {
  let r2 = t2.value, i2 = n2.value;
  return !k(r2) || !gr(r2, i2) ? -1 : z(e26, r2[4].value ** +i2[4].value);
}
function Dr(e26, t2, n2) {
  let r2 = t2.value;
  if (!E(r2)) return -1;
  let i2 = L(r2, n2.value);
  if (!gr(r2, i2)) return -1;
  let a2;
  return a2 = i2[4].value === 0 ? NaN : Number.isFinite(r2[4].value) ? Number.isFinite(i2[4].value) ? r2[4].value % i2[4].value : r2[4].value : NaN, cr(e26, r2, a2);
}
function Or(e26, t2, n2, r2, i2) {
  let a2 = n2.value;
  if (!E(a2) || !i2.rawPercentages && A(a2)) return -1;
  let o2 = L(a2, r2.value);
  if (!gr(a2, o2)) return -1;
  let s2;
  if (o2[4].value === 0) s2 = NaN;
  else if (Number.isFinite(a2[4].value) || Number.isFinite(o2[4].value)) if (!Number.isFinite(a2[4].value) && Number.isFinite(o2[4].value)) s2 = a2[4].value;
  else if (Number.isFinite(a2[4].value) && !Number.isFinite(o2[4].value)) switch (t2) {
    case `down`:
      s2 = a2[4].value < 0 ? -1 / 0 : Object.is(-0, 0 * a2[4].value) ? -0 : 0;
      break;
    case `up`:
      s2 = a2[4].value > 0 ? 1 / 0 : Object.is(0, 0 * a2[4].value) ? 0 : -0;
      break;
    default:
      s2 = Object.is(0, 0 * a2[4].value) ? 0 : -0;
  }
  else if (Number.isFinite(o2[4].value)) switch (t2) {
    case `down`:
      s2 = Math.floor(a2[4].value / o2[4].value) * o2[4].value;
      break;
    case `up`:
      s2 = Math.ceil(a2[4].value / o2[4].value) * o2[4].value;
      break;
    case `to-zero`:
      s2 = Math.trunc(a2[4].value / o2[4].value) * o2[4].value;
      break;
    default: {
      let e27 = Math.floor(a2[4].value / o2[4].value) * o2[4].value, t3 = Math.ceil(a2[4].value / o2[4].value) * o2[4].value;
      if (e27 > t3) {
        let n4 = e27;
        e27 = t3, t3 = n4;
      }
      let n3 = Math.abs(a2[4].value - e27), r3 = Math.abs(a2[4].value - t3);
      s2 = n3 === r3 ? t3 : n3 < r3 ? e27 : t3;
      break;
    }
  }
  else s2 = a2[4].value;
  else s2 = NaN;
  return cr(e26, a2, s2);
}
function kr(e26, t2, n2) {
  let r2 = t2.value;
  return !E(r2) || !n2.rawPercentages && A(r2) ? -1 : z(e26, Math.sign(r2[4].value));
}
function Ar(e26, t2) {
  let n2 = t2.value;
  if (!mr(n2)) return -1;
  let r2 = n2[4].value;
  if (D(n2)) switch (I(n2[4].unit)) {
    case `rad`:
      break;
    case `deg`:
      r2 = Bn.get(`rad`)(n2[4].value);
      break;
    case `grad`:
      r2 = Vn.get(`rad`)(n2[4].value);
      break;
    case `turn`:
      r2 = $n.get(`rad`)(n2[4].value);
      break;
    default:
      return -1;
  }
  return r2 = Math.sin(r2), z(e26, r2);
}
function jr(e26, t2) {
  let n2 = t2.value;
  return k(n2) ? z(e26, Math.sqrt(n2[4].value)) : -1;
}
function Mr(e26, t2) {
  let n2 = t2.value;
  if (!mr(n2)) return -1;
  let r2 = n2[4].value, i2 = 0, a2 = n2[4].value;
  if (D(n2)) switch (I(n2[4].unit)) {
    case `rad`:
      i2 = Zn.get(`deg`)(r2);
      break;
    case `deg`:
      i2 = r2, a2 = Bn.get(`rad`)(r2);
      break;
    case `grad`:
      i2 = Vn.get(`deg`)(r2), a2 = Vn.get(`rad`)(r2);
      break;
    case `turn`:
      i2 = $n.get(`deg`)(r2), a2 = $n.get(`rad`)(r2);
      break;
    default:
      return -1;
  }
  let o2 = i2 / 90;
  return a2 = i2 % 90 == 0 && o2 % 2 != 0 ? o2 > 0 ? 1 / 0 : -1 / 0 : Math.tan(a2), z(e26, a2);
}
function Nr(e26) {
  if (e26.length !== 2) return -1;
  let t2 = e26[0].value, n2 = e26[1].value;
  if (k(t2) && k(n2)) {
    let e27 = t2[4].value - n2[4].value;
    return new P([w.Number, e27.toString(), t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number }]);
  }
  if (A(t2) && A(n2)) {
    let e27 = t2[4].value - n2[4].value;
    return new P([w.Percentage, e27.toString() + `%`, t2[2], n2[3], { value: e27 }]);
  }
  if (D(t2) && D(n2) && (n2 = L(t2, n2), I(t2[4].unit) === I(n2[4].unit))) {
    let e27 = t2[4].value - n2[4].value;
    return new P([w.Dimension, e27.toString() + t2[4].unit, t2[2], n2[3], { value: e27, type: t2[4].type === T.Integer && n2[4].type === T.Integer ? T.Integer : T.Number, unit: t2[4].unit }]);
  }
  return -1;
}
function Pr(e26, t2) {
  if (t2.length === 1) {
    let n2 = t2[0];
    if (!n2 || !F(n2)) return -1;
    let r2 = n2.value;
    return k(r2) ? z(e26, Math.log(r2[4].value)) : -1;
  }
  if (t2.length === 2) {
    let n2 = t2[0];
    if (!n2 || !F(n2)) return -1;
    let r2 = n2.value;
    if (!k(r2)) return -1;
    let i2 = t2[1];
    if (!i2 || !F(i2)) return -1;
    let a2 = i2.value;
    return k(a2) ? z(e26, Math.log(r2[4].value) / Math.log(a2[4].value)) : -1;
  }
  return -1;
}
var Fr = /^none$/i;
function Ir(e26) {
  if (Array.isArray(e26)) {
    let t3 = e26.filter(((e27) => !(Pn(e27) && Fn(e27))));
    return t3.length === 1 && Ir(t3[0]);
  }
  if (!F(e26)) return false;
  let t2 = e26.value;
  return !!dn(t2) && Fr.test(t2[4].value);
}
function Lr(e26, t2, n2, r2, i2, a2) {
  let o2 = n2.value;
  if (!E(o2)) return -1;
  let s2 = L(o2, r2.value);
  if (!gr(o2, s2)) return -1;
  let c2, l2 = null;
  if (i2 && (l2 = L(o2, i2.value), !gr(o2, l2))) return -1;
  if (Number.isFinite(o2[4].value)) if (Number.isFinite(s2[4].value)) if (Number.isFinite(s2[4].value - o2[4].value)) if (l2 && !Number.isFinite(l2[4].value)) c2 = o2[4].value;
  else {
    let e27 = Rr(zr([t2, x(o2), x(s2), i2 ? `by ${i2.toString()}` : ``].join(`,`)), a2.randomSeed), n3 = o2[4].value, r3 = s2[4].value;
    if (n3 > r3 && ([n3, r3] = [r3, n3]), l2 && (l2[4].value <= 0 || Math.abs(n3 - r3) / l2[4].value > 1e10) && (l2 = null), l2) {
      let t3 = Math.abs(n3 - r3), i3 = e27();
      c2 = n3 + Math.floor(t3 / l2[4].value * i3) * l2[4].value;
    } else {
      let t3 = e27();
      c2 = Number((t3 * (r3 - n3) + n3).toFixed(5));
    }
  }
  else c2 = NaN;
  else c2 = NaN;
  else c2 = NaN;
  return cr(e26, o2, c2);
}
function Rr(e26 = 0.34944106645296036, t2 = 0.19228640875738723, n2 = 0.8784393832007205, r2 = 0.04850964319275053) {
  return () => {
    let i2 = ((e26 |= 0) + (t2 |= 0) | 0) + (r2 |= 0) | 0;
    return r2 = r2 + 1 | 0, e26 = t2 ^ t2 >>> 9, t2 = (n2 |= 0) + (n2 << 3) | 0, n2 = (n2 = n2 << 21 | n2 >>> 11) + i2 | 0, (i2 >>> 0) / 4294967296;
  };
}
function zr(e26) {
  let t2 = 0, n2 = 0, r2 = 0;
  t2 = ~t2;
  for (let i2 = 0, a2 = e26.length; i2 < a2; i2++) r2 = 255 & (t2 ^ e26.charCodeAt(i2)), n2 = Number(`0x` + `00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D`.substring(9 * r2, 9 * r2 + 8)), t2 = t2 >>> 8 ^ n2;
  return ~t2 >>> 0;
}
var Br = /* @__PURE__ */ new Map([[`abs`, function(e26, t2, n2) {
  return V(e26, t2, n2, vr);
}], [`acos`, function(e26, t2, n2) {
  return V(e26, t2, n2, dr);
}], [`asin`, function(e26, t2, n2) {
  return V(e26, t2, n2, fr);
}], [`atan`, function(e26, t2, n2) {
  return V(e26, t2, n2, pr);
}], [`atan2`, function(e26, t2, n2) {
  return Hr(e26, t2, n2, _r);
}], [`calc`, B], [`clamp`, function(e26, t2, n2) {
  let r2 = or([...e26.value.filter(((e27) => !In(e27)))], t2), i2 = [], a2 = [], o2 = [];
  {
    let e27 = i2;
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n3 = r2[t3];
      if (F(n3) && sn(n3.value)) {
        if (e27 === o2) return -1;
        if (e27 === a2) {
          e27 = o2;
          continue;
        }
        if (e27 === i2) {
          e27 = a2;
          continue;
        }
        return -1;
      }
      e27.push(n3);
    }
  }
  let s2 = Ir(i2), c2 = Ir(o2);
  if (s2 && c2) return B(H(a2), t2, n2);
  let l2 = R(B(H(a2), t2, n2));
  if (l2 === -1) return -1;
  if (s2) {
    let e27 = R(B(H(o2), t2, n2));
    return e27 === -1 ? -1 : wr((u2 = l2, d2 = e27, new M([w.Function, `min(`, -1, -1, { value: `min` }], [w.CloseParen, `)`, -1, -1, void 0], [u2, new P([w.Comma, `,`, -1, -1, void 0]), d2])), [l2, e27], n2);
  }
  if (c2) {
    let e27 = R(B(H(i2), t2, n2));
    return e27 === -1 ? -1 : Cr(qr(e27, l2), [e27, l2], n2);
  }
  var u2, d2;
  let f2 = R(B(H(i2), t2, n2));
  if (f2 === -1) return -1;
  let p2 = R(B(H(o2), t2, n2));
  return p2 === -1 ? -1 : yr(e26, f2, l2, p2, n2);
}], [`cos`, function(e26, t2, n2) {
  return V(e26, t2, n2, br);
}], [`exp`, function(e26, t2, n2) {
  return V(e26, t2, n2, xr);
}], [`hypot`, function(e26, t2, n2) {
  return Wr(e26, e26.value, t2, n2, Sr);
}], [`log`, function(e26, t2, n2) {
  return Wr(e26, e26.value, t2, n2, Pr);
}], [`max`, function(e26, t2, n2) {
  return Wr(e26, e26.value, t2, n2, Cr);
}], [`min`, function(e26, t2, n2) {
  return Wr(e26, e26.value, t2, n2, wr);
}], [`mod`, function(e26, t2, n2) {
  return Hr(e26, t2, n2, Tr);
}], [`pow`, function(e26, t2, n2) {
  return Hr(e26, t2, n2, Er);
}], [`random`, function(e26, t2, n2) {
  let r2 = e26.value.filter(((e27) => !In(e27))), i2 = ``, a2 = [], o2 = [];
  for (let e27 = 0; e27 < r2.length; e27++) {
    let t3 = r2[e27];
    if (!i2 && o2.length === 0 && F(t3) && dn(t3.value)) {
      let n3 = t3.value[4].value.toLowerCase();
      if (n3 === `per-element` || n3.startsWith(`--`)) {
        i2 = n3;
        let t4 = r2[e27 + 1];
        if (!F(t4) || !sn(t4.value)) return -1;
        e27++;
        continue;
      }
    }
    if (F(t3) && sn(t3.value)) {
      let t4 = r2[e27 + 1];
      if (o2.length > 0 && F(t4) && dn(t4.value)) {
        let n3 = t4.value[4].value.toLowerCase();
        if (n3 === `by` || n3.startsWith(`--`)) {
          a2.push(...r2.slice(e27 + 2));
          break;
        }
      }
    }
    o2.push(t3);
  }
  let s2 = Ur(o2, t2, n2);
  if (s2 === -1) return -1;
  let [c2, l2] = s2, u2 = null;
  return a2.length && (u2 = Vr(a2, t2, n2), u2 === -1) ? -1 : Lr(e26, i2, c2, l2, u2, n2);
}], [`rem`, function(e26, t2, n2) {
  return Hr(e26, t2, n2, Dr);
}], [`round`, function(e26, t2, n2) {
  let r2 = or([...e26.value.filter(((e27) => !In(e27)))], t2), i2 = ``, a2 = false, o2 = [], s2 = [];
  {
    let e27 = o2;
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n3 = r2[t3];
      if (!i2 && o2.length === 0 && s2.length === 0 && F(n3) && dn(n3.value)) {
        let e28 = n3.value[4].value.toLowerCase();
        if (Kr.has(e28)) {
          i2 = e28;
          continue;
        }
      }
      if (F(n3) && sn(n3.value)) {
        if (e27 === s2) return -1;
        if (e27 === o2 && i2 && o2.length === 0) continue;
        if (e27 === o2) {
          a2 = true, e27 = s2;
          continue;
        }
        return -1;
      }
      e27.push(n3);
    }
  }
  let c2 = R(B(H(o2), t2, n2));
  if (c2 === -1) return -1;
  a2 || s2.length !== 0 || s2.push(new P([w.Number, `1`, -1, -1, { value: 1, type: T.Integer }]));
  let l2 = R(B(H(s2), t2, n2));
  return l2 === -1 ? -1 : (i2 || (i2 = `nearest`), Or(e26, i2, c2, l2, n2));
}], [`sign`, function(e26, t2, n2) {
  return V(e26, t2, n2, kr);
}], [`sin`, function(e26, t2, n2) {
  return V(e26, t2, n2, Ar);
}], [`sqrt`, function(e26, t2, n2) {
  return V(e26, t2, n2, jr);
}], [`tan`, function(e26, t2, n2) {
  return V(e26, t2, n2, Mr);
}]]);
function B(e26, t2, n2) {
  let r2 = or([...e26.value.filter(((e27) => !In(e27)))], t2);
  if (r2.length === 1 && F(r2[0])) return { inputs: [r2[0]], operation: sr };
  let i2 = 0;
  for (; i2 < r2.length; ) {
    let e27 = r2[i2];
    if (Mn(e27) && pn(e27.startToken)) {
      let a2 = B(e27, t2, n2);
      if (a2 === -1) return -1;
      r2.splice(i2, 1, a2);
    } else if (Nn(e27)) {
      let a2 = Br.get(e27.getName().toLowerCase());
      if (!a2) return -1;
      let o2 = a2(e27, t2, n2);
      if (o2 === -1) return -1;
      r2.splice(i2, 1, o2);
    } else i2++;
  }
  if (i2 = 0, r2.length === 1 && ir(r2[0])) return r2[0];
  for (; i2 < r2.length; ) {
    let e27 = r2[i2];
    if (!e27 || !F(e27) && !ir(e27)) {
      i2++;
      continue;
    }
    let t3 = r2[i2 + 1];
    if (!t3 || !F(t3)) {
      i2++;
      continue;
    }
    let n3 = t3.value;
    if (!ln(n3) || n3[4].value !== `*` && n3[4].value !== `/`) {
      i2++;
      continue;
    }
    let a2 = r2[i2 + 2];
    if (!a2 || !F(a2) && !ir(a2)) return -1;
    n3[4].value === `*` ? r2.splice(i2, 3, { inputs: [e27, a2], operation: ar }) : n3[4].value === `/` ? r2.splice(i2, 3, { inputs: [e27, a2], operation: rr }) : i2++;
  }
  if (i2 = 0, r2.length === 1 && ir(r2[0])) return r2[0];
  for (; i2 < r2.length; ) {
    let e27 = r2[i2];
    if (!e27 || !F(e27) && !ir(e27)) {
      i2++;
      continue;
    }
    let t3 = r2[i2 + 1];
    if (!t3 || !F(t3)) {
      i2++;
      continue;
    }
    let n3 = t3.value;
    if (!ln(n3) || n3[4].value !== `+` && n3[4].value !== `-`) {
      i2++;
      continue;
    }
    let a2 = r2[i2 + 2];
    if (!a2 || !F(a2) && !ir(a2)) return -1;
    n3[4].value === `+` ? r2.splice(i2, 3, { inputs: [e27, a2], operation: nr }) : n3[4].value === `-` ? r2.splice(i2, 3, { inputs: [e27, a2], operation: Nr }) : i2++;
  }
  return r2.length === 1 && ir(r2[0]) ? r2[0] : -1;
}
function V(e26, t2, n2, r2) {
  let i2 = Vr(e26.value, t2, n2);
  return i2 === -1 ? -1 : r2(e26, i2, n2);
}
function Vr(e26, t2, n2) {
  let r2 = R(B(H(or([...e26.filter(((e27) => !In(e27)))], t2)), t2, n2));
  return r2 === -1 ? -1 : r2;
}
function Hr(e26, t2, n2, r2) {
  let i2 = Ur(e26.value, t2, n2);
  if (i2 === -1) return -1;
  let [a2, o2] = i2;
  return r2(e26, a2, o2, n2);
}
function Ur(e26, t2, n2) {
  let r2 = or([...e26.filter(((e27) => !In(e27)))], t2), i2 = [], a2 = [];
  {
    let e27 = i2;
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n3 = r2[t3];
      if (F(n3) && sn(n3.value)) {
        if (e27 === a2) return -1;
        if (e27 === i2) {
          e27 = a2;
          continue;
        }
        return -1;
      }
      e27.push(n3);
    }
  }
  let o2 = R(B(H(i2), t2, n2));
  if (o2 === -1) return -1;
  let s2 = R(B(H(a2), t2, n2));
  return s2 === -1 ? -1 : [o2, s2];
}
function Wr(e26, t2, n2, r2, i2) {
  let a2 = Gr(e26.value, n2, r2);
  return a2 === -1 ? -1 : i2(e26, a2, r2);
}
function Gr(e26, t2, n2) {
  let r2 = or([...e26.filter(((e27) => !In(e27)))], t2), i2 = [];
  {
    let e27 = [], a2 = [];
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n3 = r2[t3];
      F(n3) && sn(n3.value) ? (e27.push(a2), a2 = []) : a2.push(n3);
    }
    e27.push(a2);
    for (let r3 = 0; r3 < e27.length; r3++) {
      if (e27[r3].length === 0) return -1;
      let a3 = R(B(H(e27[r3]), t2, n2));
      if (a3 === -1) return -1;
      i2.push(a3);
    }
  }
  return i2;
}
var Kr = /* @__PURE__ */ new Set([`nearest`, `up`, `down`, `to-zero`]);
function H(e26) {
  return new M([w.Function, `calc(`, -1, -1, { value: `calc` }], [w.CloseParen, `)`, -1, -1, void 0], e26);
}
function qr(e26, t2) {
  return new M([w.Function, `max(`, -1, -1, { value: `max` }], [w.CloseParen, `)`, -1, -1, void 0], [e26, new P([w.Comma, `,`, -1, -1, void 0]), t2]);
}
function Jr(e26) {
  if (e26 === -1) return -1;
  if (Nn(e26)) return e26;
  let t2 = e26.value;
  return E(t2) && Number.isNaN(t2[4].value) ? k(t2) ? new M([w.Function, `calc(`, t2[2], t2[3], { value: `calc` }], [w.CloseParen, `)`, t2[2], t2[3], void 0], [new P([w.Ident, `NaN`, t2[2], t2[3], { value: `NaN` }])]) : D(t2) ? new M([w.Function, `calc(`, t2[2], t2[3], { value: `calc` }], [w.CloseParen, `)`, t2[2], t2[3], void 0], [new P([w.Ident, `NaN`, t2[2], t2[3], { value: `NaN` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Delim, `*`, t2[2], t2[3], { value: `*` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Dimension, `1` + t2[4].unit, t2[2], t2[3], { value: 1, type: T.Integer, unit: t2[4].unit }])]) : A(t2) ? new M([w.Function, `calc(`, t2[2], t2[3], { value: `calc` }], [w.CloseParen, `)`, t2[2], t2[3], void 0], [new P([w.Ident, `NaN`, t2[2], t2[3], { value: `NaN` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Delim, `*`, t2[2], t2[3], { value: `*` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Percentage, `1%`, t2[2], t2[3], { value: 1 }])]) : -1 : e26;
}
function Yr(e26) {
  if (e26 === -1) return -1;
  if (Nn(e26)) return e26;
  let t2 = e26.value;
  if (!E(t2) || Number.isFinite(t2[4].value) || Number.isNaN(t2[4].value)) return e26;
  let n2 = ``;
  return t2[4].value === -1 / 0 && (n2 = `-`), k(t2) ? new M([w.Function, `calc(`, t2[2], t2[3], { value: `calc` }], [w.CloseParen, `)`, t2[2], t2[3], void 0], [new P([w.Ident, n2 + `infinity`, t2[2], t2[3], { value: n2 + `infinity` }])]) : D(t2) ? new M([w.Function, `calc(`, t2[2], t2[3], { value: `calc` }], [w.CloseParen, `)`, t2[2], t2[3], void 0], [new P([w.Ident, n2 + `infinity`, t2[2], t2[3], { value: n2 + `infinity` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Delim, `*`, t2[2], t2[3], { value: `*` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Dimension, `1` + t2[4].unit, t2[2], t2[3], { value: 1, type: T.Integer, unit: t2[4].unit }])]) : new M([w.Function, `calc(`, t2[2], t2[3], { value: `calc` }], [w.CloseParen, `)`, t2[2], t2[3], void 0], [new P([w.Ident, n2 + `infinity`, t2[2], t2[3], { value: n2 + `infinity` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Delim, `*`, t2[2], t2[3], { value: `*` }]), new N([[w.Whitespace, ` `, t2[2], t2[3], void 0]]), new P([w.Percentage, `1%`, t2[2], t2[3], { value: 1 }])]);
}
function Xr(e26) {
  if (e26 === -1) return -1;
  if (Nn(e26)) return e26;
  let t2 = e26.value;
  return E(t2) && Object.is(-0, t2[4].value) && (t2[1] === `-0` || (A(t2) ? t2[1] = `-0%` : D(t2) ? t2[1] = `-0` + t2[4].unit : t2[1] = `-0`)), e26;
}
function Zr(e26, t2 = 13) {
  if (e26 === -1) return -1;
  if (t2 <= 0 || Nn(e26)) return e26;
  let n2 = e26.value;
  if (!E(n2) || Number.isInteger(n2[4].value)) return e26;
  let r2 = Number(n2[4].value.toFixed(t2)).toString();
  return k(n2) ? n2[1] = r2 : A(n2) ? n2[1] = r2 + `%` : D(n2) && (n2[1] = r2 + n2[4].unit), e26;
}
function Qr(e26) {
  return e26 === -1 ? -1 : (Nn(e26) || D(e26.value) && (e26.value = tr(e26.value)), e26);
}
function $r(e26, t2) {
  let n2 = e26;
  return t2?.toCanonicalUnits && (n2 = Qr(n2)), n2 = Zr(n2, t2?.precision), n2 = Xr(n2), t2?.censorIntoStandardRepresentableValues || (n2 = Jr(n2), n2 = Yr(n2)), n2;
}
function ei(e26) {
  let t2 = /* @__PURE__ */ new Map();
  if (!e26) return t2;
  for (let [n2, r2] of e26) if (an(r2)) t2.set(n2, r2);
  else if (typeof r2 == `string`) {
    let e27 = Qt({ css: r2 }), i2 = e27.nextToken();
    if (e27.nextToken(), !e27.endOfFile() || !E(i2)) continue;
    t2.set(n2, i2);
  }
  return t2;
}
function ti(e26, t2) {
  let n2 = ei(t2?.globals);
  return jn(e26, ((e27) => {
    if (!Nn(e27)) return;
    let r2 = Br.get(e27.getName().toLowerCase());
    if (!r2) return;
    let i2 = $r(R(r2(e27, n2, t2 ?? {})), t2);
    return i2 === -1 ? void 0 : i2;
  }));
}
new Set(Br.keys());
function ni(e26) {
  let t2 = Dn(Zt({ css: `calc(${e26})` }), {});
  if (!t2) return null;
  let n2 = ti([[t2]], { randomSeed: 1, precision: 6 })[0][0];
  return Nn(n2) && n2.name[1] === `calc(` ? null : x(...n2.tokens());
}
var ri = e(p()), U;
(function(e26) {
  e26.CustomMedia = `custom-media`, e26.GeneralEnclosed = `general-enclosed`, e26.MediaAnd = `media-and`, e26.MediaCondition = `media-condition`, e26.MediaConditionListWithAnd = `media-condition-list-and`, e26.MediaConditionListWithOr = `media-condition-list-or`, e26.MediaFeature = `media-feature`, e26.MediaFeatureBoolean = `mf-boolean`, e26.MediaFeatureName = `mf-name`, e26.MediaFeaturePlain = `mf-plain`, e26.MediaFeatureRangeNameValue = `mf-range-name-value`, e26.MediaFeatureRangeValueName = `mf-range-value-name`, e26.MediaFeatureRangeValueNameValue = `mf-range-value-name-value`, e26.MediaFeatureValue = `mf-value`, e26.MediaInParens = `media-in-parens`, e26.MediaNot = `media-not`, e26.MediaOr = `media-or`, e26.MediaQueryWithType = `media-query-with-type`, e26.MediaQueryWithoutType = `media-query-without-type`, e26.MediaQueryInvalid = `media-query-invalid`;
})(U || (U = {}));
var ii = /[A-Z]/g;
function W(e26) {
  return e26.replace(ii, ((e27) => String.fromCharCode(e27.charCodeAt(0) + 32)));
}
var ai = class e7 {
  constructor(e26) {
    __publicField(this, "type", U.MediaCondition);
    __publicField(this, "media");
    this.media = e26;
  }
  tokens() {
    return this.media.tokens();
  }
  toString() {
    return this.media.toString();
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    if (e26 === `media`) return this.media;
  }
  walk(e26) {
    return false !== e26({ node: this.media, parent: this }, `media`) && this.media.walk(e26);
  }
  toJSON() {
    return { type: this.type, media: this.media.toJSON() };
  }
  isMediaCondition() {
    return e7.isMediaCondition(this);
  }
  static isMediaCondition(t2) {
    return !!t2 && t2 instanceof e7 && t2.type === U.MediaCondition;
  }
}, oi = class e8 {
  constructor(e26, t2 = [], n2 = []) {
    __publicField(this, "type", U.MediaInParens);
    __publicField(this, "media");
    __publicField(this, "before");
    __publicField(this, "after");
    this.media = e26, this.before = t2, this.after = n2;
  }
  tokens() {
    return [...this.before, ...this.media.tokens(), ...this.after];
  }
  toString() {
    return x(...this.before) + this.media.toString() + x(...this.after);
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    if (e26 === `media`) return this.media;
  }
  walk(e26) {
    return false !== e26({ node: this.media, parent: this }, `media`) && (`walk` in this.media ? this.media.walk(e26) : void 0);
  }
  toJSON() {
    return { type: this.type, media: this.media.toJSON(), before: this.before, after: this.after };
  }
  isMediaInParens() {
    return e8.isMediaInParens(this);
  }
  static isMediaInParens(t2) {
    return !!t2 && t2 instanceof e8 && t2.type === U.MediaInParens;
  }
}, si = class e9 {
  constructor(e26, t2, n2, r2) {
    __publicField(this, "type", U.MediaQueryWithType);
    __publicField(this, "modifier");
    __publicField(this, "mediaType");
    __publicField(this, "and");
    __publicField(this, "media");
    this.modifier = e26, this.mediaType = t2, n2 && r2 && (this.and = n2, this.media = r2);
  }
  getModifier() {
    if (!this.modifier.length) return ``;
    for (let e26 = 0; e26 < this.modifier.length; e26++) {
      let t2 = this.modifier[e26];
      if (t2[0] === w.Ident) return t2[4].value;
    }
    return ``;
  }
  negateQuery() {
    let t2 = new e9([...this.modifier], [...this.mediaType], this.and, this.media);
    if (t2.modifier.length === 0) return t2.modifier = [[w.Ident, `not`, -1, -1, { value: `not` }], [w.Whitespace, ` `, -1, -1, void 0]], t2;
    for (let e26 = 0; e26 < t2.modifier.length; e26++) {
      let n2 = t2.modifier[e26];
      if (n2[0] === w.Ident && W(n2[4].value) === `not`) {
        t2.modifier.splice(e26, 1);
        break;
      }
      if (n2[0] === w.Ident && W(n2[4].value) === `only`) {
        n2[1] = `not`, n2[4].value = `not`;
        break;
      }
    }
    return t2;
  }
  getMediaType() {
    if (!this.mediaType.length) return ``;
    for (let e26 = 0; e26 < this.mediaType.length; e26++) {
      let t2 = this.mediaType[e26];
      if (t2[0] === w.Ident) return t2[4].value;
    }
    return ``;
  }
  tokens() {
    return this.and && this.media ? [...this.modifier, ...this.mediaType, ...this.and, ...this.media.tokens()] : [...this.modifier, ...this.mediaType];
  }
  toString() {
    return this.and && this.media ? x(...this.modifier) + x(...this.mediaType) + x(...this.and) + this.media.toString() : x(...this.modifier) + x(...this.mediaType);
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    if (e26 === `media`) return this.media;
  }
  walk(e26) {
    if (this.media) return false !== e26({ node: this.media, parent: this }, `media`) && this.media.walk(e26);
  }
  toJSON() {
    return { type: this.type, string: this.toString(), modifier: this.modifier, mediaType: this.mediaType, and: this.and, media: this.media };
  }
  isMediaQueryWithType() {
    return e9.isMediaQueryWithType(this);
  }
  static isMediaQueryWithType(t2) {
    return !!t2 && t2 instanceof e9 && t2.type === U.MediaQueryWithType;
  }
}, ci = class e10 {
  constructor(e26) {
    __publicField(this, "type", U.MediaQueryWithoutType);
    __publicField(this, "media");
    this.media = e26;
  }
  negateQuery() {
    let t2 = this.media;
    return t2.media.type === U.MediaNot ? new e10(new ai(t2.media.media)) : (t2.media.type === U.MediaConditionListWithOr && (t2 = new ai(new oi(t2, [[w.Whitespace, ` `, 0, 0, void 0], [w.OpenParen, `(`, 0, 0, void 0]], [[w.CloseParen, `)`, 0, 0, void 0]]))), new si([[w.Ident, `not`, 0, 0, { value: `not` }], [w.Whitespace, ` `, 0, 0, void 0]], [[w.Ident, `all`, 0, 0, { value: `all` }], [w.Whitespace, ` `, 0, 0, void 0]], [[w.Ident, `and`, 0, 0, { value: `and` }]], t2));
  }
  tokens() {
    return this.media.tokens();
  }
  toString() {
    return this.media.toString();
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    if (e26 === `media`) return this.media;
  }
  walk(e26) {
    return false !== e26({ node: this.media, parent: this }, `media`) && this.media.walk(e26);
  }
  toJSON() {
    return { type: this.type, string: this.toString(), media: this.media };
  }
  isMediaQueryWithoutType() {
    return e10.isMediaQueryWithoutType(this);
  }
  static isMediaQueryWithoutType(t2) {
    return !!t2 && t2 instanceof e10 && t2.type === U.MediaQueryWithoutType;
  }
}, li = class e11 {
  constructor(e26) {
    __publicField(this, "type", U.MediaQueryInvalid);
    __publicField(this, "media");
    this.media = e26;
  }
  negateQuery() {
    return new e11(this.media);
  }
  tokens() {
    return this.media.flatMap(((e26) => e26.tokens()));
  }
  toString() {
    return this.media.map(((e26) => e26.toString())).join(``);
  }
  walk(e26) {
    let t2 = false;
    if (this.media.forEach(((n2, r2) => {
      t2 || (false === e26({ node: n2, parent: this }, r2) || `walk` in n2 && false === n2.walk(e26)) && (t2 = true);
    })), t2) return false;
  }
  toJSON() {
    return { type: this.type, string: this.toString(), media: this.media };
  }
  isMediaQueryInvalid() {
    return e11.isMediaQueryInvalid(this);
  }
  static isMediaQueryInvalid(t2) {
    return !!t2 && t2 instanceof e11 && t2.type === U.MediaQueryInvalid;
  }
}, ui = class e12 {
  constructor(e26) {
    __publicField(this, "type", U.GeneralEnclosed);
    __publicField(this, "value");
    this.value = e26;
  }
  tokens() {
    return this.value.tokens();
  }
  toString() {
    return this.value.toString();
  }
  indexOf(e26) {
    return e26 === this.value ? `value` : -1;
  }
  at(e26) {
    if (e26 === `value`) return this.value;
  }
  walk(e26) {
    return false !== e26({ node: this.value, parent: this }, `value`) && (`walk` in this.value ? this.value.walk(e26) : void 0);
  }
  toJSON() {
    return { type: this.type, tokens: this.tokens() };
  }
  isGeneralEnclosed() {
    return e12.isGeneralEnclosed(this);
  }
  static isGeneralEnclosed(t2) {
    return !!t2 && t2 instanceof e12 && t2.type === U.GeneralEnclosed;
  }
}, di = class e13 {
  constructor(e26, t2) {
    __publicField(this, "type", U.MediaAnd);
    __publicField(this, "modifier");
    __publicField(this, "media");
    this.modifier = e26, this.media = t2;
  }
  tokens() {
    return [...this.modifier, ...this.media.tokens()];
  }
  toString() {
    return x(...this.modifier) + this.media.toString();
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    return e26 === `media` ? this.media : null;
  }
  walk(e26) {
    return false !== e26({ node: this.media, parent: this }, `media`) && this.media.walk(e26);
  }
  toJSON() {
    return { type: this.type, modifier: this.modifier, media: this.media.toJSON() };
  }
  isMediaAnd() {
    return e13.isMediaAnd(this);
  }
  static isMediaAnd(t2) {
    return !!t2 && t2 instanceof e13 && t2.type === U.MediaAnd;
  }
}, fi = class e14 {
  constructor(e26, t2, n2 = [], r2 = []) {
    __publicField(this, "type", U.MediaConditionListWithAnd);
    __publicField(this, "leading");
    __publicField(this, "list");
    __publicField(this, "before");
    __publicField(this, "after");
    this.leading = e26, this.list = t2, this.before = n2, this.after = r2;
  }
  tokens() {
    return [...this.before, ...this.leading.tokens(), ...this.list.flatMap(((e26) => e26.tokens())), ...this.after];
  }
  toString() {
    return x(...this.before) + this.leading.toString() + this.list.map(((e26) => e26.toString())).join(``) + x(...this.after);
  }
  indexOf(e26) {
    return e26 === this.leading ? `leading` : e26.type === `media-and` ? this.list.indexOf(e26) : -1;
  }
  at(e26) {
    return e26 === `leading` ? this.leading : typeof e26 == `number` ? (e26 < 0 && (e26 = this.list.length + e26), this.list[e26]) : void 0;
  }
  walk(e26) {
    if (false === e26({ node: this.leading, parent: this }, `leading`) || `walk` in this.leading && false === this.leading.walk(e26)) return false;
    let t2 = false;
    return this.list.forEach(((n2, r2) => {
      t2 || (false === e26({ node: n2, parent: this }, r2) || `walk` in n2 && false === n2.walk(e26)) && (t2 = true);
    })), !t2 && void 0;
  }
  toJSON() {
    return { type: this.type, leading: this.leading.toJSON(), list: this.list.map(((e26) => e26.toJSON())), before: this.before, after: this.after };
  }
  isMediaConditionListWithAnd() {
    return e14.isMediaConditionListWithAnd(this);
  }
  static isMediaConditionListWithAnd(t2) {
    return !!t2 && t2 instanceof e14 && t2.type === U.MediaConditionListWithAnd;
  }
}, pi = class e15 {
  constructor(e26, t2, n2 = [], r2 = []) {
    __publicField(this, "type", U.MediaConditionListWithOr);
    __publicField(this, "leading");
    __publicField(this, "list");
    __publicField(this, "before");
    __publicField(this, "after");
    this.leading = e26, this.list = t2, this.before = n2, this.after = r2;
  }
  tokens() {
    return [...this.before, ...this.leading.tokens(), ...this.list.flatMap(((e26) => e26.tokens())), ...this.after];
  }
  toString() {
    return x(...this.before) + this.leading.toString() + this.list.map(((e26) => e26.toString())).join(``) + x(...this.after);
  }
  indexOf(e26) {
    return e26 === this.leading ? `leading` : e26.type === `media-or` ? this.list.indexOf(e26) : -1;
  }
  at(e26) {
    return e26 === `leading` ? this.leading : typeof e26 == `number` ? (e26 < 0 && (e26 = this.list.length + e26), this.list[e26]) : void 0;
  }
  walk(e26) {
    if (false === e26({ node: this.leading, parent: this }, `leading`) || `walk` in this.leading && false === this.leading.walk(e26)) return false;
    let t2 = false;
    return this.list.forEach(((n2, r2) => {
      t2 || (false === e26({ node: n2, parent: this }, r2) || `walk` in n2 && false === n2.walk(e26)) && (t2 = true);
    })), !t2 && void 0;
  }
  toJSON() {
    return { type: this.type, leading: this.leading.toJSON(), list: this.list.map(((e26) => e26.toJSON())), before: this.before, after: this.after };
  }
  isMediaConditionListWithOr() {
    return e15.isMediaConditionListWithOr(this);
  }
  static isMediaConditionListWithOr(t2) {
    return !!t2 && t2 instanceof e15 && t2.type === U.MediaConditionListWithOr;
  }
};
function mi(e26) {
  return !!(e26.type === j.Token && e26.value[0] === w.Number || e26.type === j.Function && hi.has(W(e26.name[4].value)));
}
var hi = /* @__PURE__ */ new Set([`abs`, `acos`, `asin`, `atan`, `atan2`, `calc`, `clamp`, `cos`, `exp`, `hypot`, `log`, `max`, `min`, `mod`, `pow`, `rem`, `round`, `sign`, `sin`, `sqrt`, `tan`]);
function gi(e26) {
  return e26.type === j.Token && e26.value[0] === w.Dimension;
}
function _i(e26) {
  return e26.type === j.Token && e26.value[0] === w.Ident;
}
function vi(e26) {
  return e26.type === j.Function && W(e26.name[4].value) === `env`;
}
var yi = class e16 {
  constructor(e26, t2 = [], n2 = []) {
    __publicField(this, "type", U.MediaFeatureName);
    __publicField(this, "name");
    __publicField(this, "before");
    __publicField(this, "after");
    this.name = e26, this.before = t2, this.after = n2;
  }
  getName() {
    return this.name.value[4].value;
  }
  getNameToken() {
    return this.name.value;
  }
  tokens() {
    return [...this.before, ...this.name.tokens(), ...this.after];
  }
  toString() {
    return x(...this.before) + this.name.toString() + x(...this.after);
  }
  indexOf(e26) {
    return e26 === this.name ? `name` : -1;
  }
  at(e26) {
    if (e26 === `name`) return this.name;
  }
  toJSON() {
    return { type: this.type, name: this.getName(), tokens: this.tokens() };
  }
  isMediaFeatureName() {
    return e16.isMediaFeatureName(this);
  }
  static isMediaFeatureName(t2) {
    return !!t2 && t2 instanceof e16 && t2.type === U.MediaFeatureName;
  }
};
function bi(e26) {
  let t2 = -1;
  for (let n2 = 0; n2 < e26.length; n2++) {
    let r2 = e26[n2];
    if (r2.type !== j.Whitespace && r2.type !== j.Comment) {
      if (!_i(r2) || t2 !== -1) return false;
      t2 = n2;
    }
  }
  return t2 !== -1 && new yi(e26[t2], e26.slice(0, t2).flatMap(((e27) => e27.tokens())), e26.slice(t2 + 1).flatMap(((e27) => e27.tokens())));
}
var xi = class e17 {
  constructor(e26) {
    __publicField(this, "type", U.MediaFeatureBoolean);
    __publicField(this, "name");
    this.name = e26;
  }
  getName() {
    return this.name.getName();
  }
  getNameToken() {
    return this.name.getNameToken();
  }
  tokens() {
    return this.name.tokens();
  }
  toString() {
    return this.name.toString();
  }
  indexOf(e26) {
    return e26 === this.name ? `name` : -1;
  }
  at(e26) {
    if (e26 === `name`) return this.name;
  }
  toJSON() {
    return { type: this.type, name: this.name.toJSON(), tokens: this.tokens() };
  }
  isMediaFeatureBoolean() {
    return e17.isMediaFeatureBoolean(this);
  }
  static isMediaFeatureBoolean(t2) {
    return !!t2 && t2 instanceof e17 && t2.type === U.MediaFeatureBoolean;
  }
};
function Si(e26) {
  let t2 = bi(e26);
  return false === t2 ? t2 : new xi(t2);
}
var Ci = class e18 {
  constructor(e26, t2 = [], n2 = []) {
    __publicField(this, "type", U.MediaFeatureValue);
    __publicField(this, "value");
    __publicField(this, "before");
    __publicField(this, "after");
    Array.isArray(e26) && e26.length === 1 ? this.value = e26[0] : this.value = e26, this.before = t2, this.after = n2;
  }
  tokens() {
    return Array.isArray(this.value) ? [...this.before, ...this.value.flatMap(((e26) => e26.tokens())), ...this.after] : [...this.before, ...this.value.tokens(), ...this.after];
  }
  toString() {
    return Array.isArray(this.value) ? x(...this.before) + this.value.map(((e26) => e26.toString())).join(``) + x(...this.after) : x(...this.before) + this.value.toString() + x(...this.after);
  }
  indexOf(e26) {
    return e26 === this.value ? `value` : -1;
  }
  at(e26) {
    if (e26 === `value`) return this.value;
  }
  walk(e26) {
    return false !== e26({ node: this.value, parent: this }, `value`) && (`walk` in this.value ? this.value.walk(e26) : void 0);
  }
  toJSON() {
    return Array.isArray(this.value) ? { type: this.type, value: this.value.map(((e26) => e26.toJSON())), tokens: this.tokens() } : { type: this.type, value: this.value.toJSON(), tokens: this.tokens() };
  }
  isMediaFeatureValue() {
    return e18.isMediaFeatureValue(this);
  }
  static isMediaFeatureValue(t2) {
    return !!t2 && t2 instanceof e18 && t2.type === U.MediaFeatureValue;
  }
};
function wi(e26) {
  let t2 = -1, n2 = -1;
  for (let r2 = 0; r2 < e26.length; r2++) {
    let i2 = e26[r2];
    if (i2.type !== j.Whitespace && i2.type !== j.Comment) {
      if (t2 !== -1) return false;
      if (mi(i2)) {
        let i3 = Ti(e26.slice(r2));
        if (i3 !== -1) {
          t2 = i3[0] + r2, n2 = i3[1] + r2, r2 += i3[1] - i3[0];
          continue;
        }
        t2 = r2, n2 = r2;
      } else if (vi(i2)) t2 = r2, n2 = r2;
      else if (gi(i2)) t2 = r2, n2 = r2;
      else {
        if (!_i(i2)) return false;
        t2 = r2, n2 = r2;
      }
    }
  }
  return t2 !== -1 && new Ci(e26.slice(t2, n2 + 1), e26.slice(0, t2).flatMap(((e27) => e27.tokens())), e26.slice(n2 + 1).flatMap(((e27) => e27.tokens())));
}
function Ti(e26) {
  let t2 = -1, n2 = -1, r2 = Ei(e26);
  if (r2 === -1) return -1;
  t2 = r2[0], n2 = r2[1];
  for (let t3 = n2 + 1; t3 < e26.length; t3++) {
    let n3 = e26[t3];
    if (n3.type !== `whitespace` && n3.type !== `comment`) return -1;
  }
  return [t2, n2];
}
function Ei(e26) {
  let t2 = -1, n2 = -1;
  for (let r2 = 0; r2 < e26.length; r2++) {
    let i2 = e26[r2];
    if (i2.type !== `whitespace` && i2.type !== `comment`) {
      if (i2.type === `token`) {
        let e27 = i2.value;
        if (e27[0] === w.Delim && e27[4].value === `/`) {
          if (t2 === -1 || n2 !== -1) return -1;
          n2 = r2;
          continue;
        }
      }
      if (!mi(i2)) return -1;
      if (n2 !== -1) return [t2, r2];
      if (t2 !== -1) return -1;
      t2 = r2;
    }
  }
  return -1;
}
var Di = class e19 {
  constructor(e26, t2, n2) {
    __publicField(this, "type", U.MediaFeaturePlain);
    __publicField(this, "name");
    __publicField(this, "colon");
    __publicField(this, "value");
    this.name = e26, this.colon = t2, this.value = n2;
  }
  getName() {
    return this.name.getName();
  }
  getNameToken() {
    return this.name.getNameToken();
  }
  tokens() {
    return [...this.name.tokens(), this.colon, ...this.value.tokens()];
  }
  toString() {
    return this.name.toString() + x(this.colon) + this.value.toString();
  }
  indexOf(e26) {
    return e26 === this.name ? `name` : e26 === this.value ? `value` : -1;
  }
  at(e26) {
    return e26 === `name` ? this.name : e26 === `value` ? this.value : void 0;
  }
  walk(e26) {
    return false !== e26({ node: this.value, parent: this }, `value`) && this.value.walk(e26);
  }
  toJSON() {
    return { type: this.type, name: this.name.toJSON(), value: this.value.toJSON(), tokens: this.tokens() };
  }
  isMediaFeaturePlain() {
    return e19.isMediaFeaturePlain(this);
  }
  static isMediaFeaturePlain(t2) {
    return !!t2 && t2 instanceof e19 && t2.type === U.MediaFeaturePlain;
  }
};
function Oi(e26) {
  let t2 = [], n2 = [], r2 = null;
  for (let i3 = 0; i3 < e26.length; i3++) {
    let a3 = e26[i3];
    if (a3.type === j.Token) {
      let o2 = a3.value;
      if (o2[0] === w.Colon) {
        t2 = e26.slice(0, i3), n2 = e26.slice(i3 + 1), r2 = o2;
        break;
      }
    }
  }
  if (!t2.length || !n2.length || !r2) return false;
  let i2 = bi(t2);
  if (false === i2) return false;
  let a2 = wi(n2);
  return false !== a2 && new Di(i2, r2, a2);
}
var ki, Ai, ji;
function Mi(e26) {
  let t2 = -1;
  for (let n2 = 0; n2 < e26.length; n2++) {
    let r2 = e26[n2];
    if (r2.type === j.Token) {
      let e27 = r2.value;
      if (e27[0] === w.Delim) {
        if (e27[4].value === ji.EQ) {
          if (t2 !== -1) return [t2, n2];
          t2 = n2;
          continue;
        }
        if (e27[4].value === ki.LT) {
          t2 = n2;
          continue;
        }
        if (e27[4].value === Ai.GT) {
          t2 = n2;
          continue;
        }
      }
    }
    break;
  }
  return t2 !== -1 && [t2, t2];
}
function Ni(e26) {
  if (e26.length === 0 || e26.length > 2 || e26[0][0] !== w.Delim) return false;
  if (e26.length === 1) switch (e26[0][4].value) {
    case ji.EQ:
      return ji.EQ;
    case ki.LT:
      return ki.LT;
    case Ai.GT:
      return Ai.GT;
    default:
      return false;
  }
  if (e26[1][0] !== w.Delim || e26[1][4].value !== ji.EQ) return false;
  switch (e26[0][4].value) {
    case ki.LT:
      return ki.LT_OR_EQ;
    case Ai.GT:
      return Ai.GT_OR_EQ;
    default:
      return false;
  }
}
(function(e26) {
  e26.LT = `<`, e26.LT_OR_EQ = `<=`;
})(ki || (ki = {})), (function(e26) {
  e26.GT = `>`, e26.GT_OR_EQ = `>=`;
})(Ai || (Ai = {})), (function(e26) {
  e26.EQ = `=`;
})(ji || (ji = {}));
var Pi = class e20 {
  constructor(e26, t2, n2) {
    __publicField(this, "type", U.MediaFeatureRangeNameValue);
    __publicField(this, "name");
    __publicField(this, "operator");
    __publicField(this, "value");
    this.name = e26, this.operator = t2, this.value = n2;
  }
  operatorKind() {
    return Ni(this.operator);
  }
  getName() {
    return this.name.getName();
  }
  getNameToken() {
    return this.name.getNameToken();
  }
  tokens() {
    return [...this.name.tokens(), ...this.operator, ...this.value.tokens()];
  }
  toString() {
    return this.name.toString() + x(...this.operator) + this.value.toString();
  }
  indexOf(e26) {
    return e26 === this.name ? `name` : e26 === this.value ? `value` : -1;
  }
  at(e26) {
    return e26 === `name` ? this.name : e26 === `value` ? this.value : void 0;
  }
  walk(e26) {
    return false !== e26({ node: this.value, parent: this }, `value`) && (`walk` in this.value ? this.value.walk(e26) : void 0);
  }
  toJSON() {
    return { type: this.type, name: this.name.toJSON(), value: this.value.toJSON(), tokens: this.tokens() };
  }
  isMediaFeatureRangeNameValue() {
    return e20.isMediaFeatureRangeNameValue(this);
  }
  static isMediaFeatureRangeNameValue(t2) {
    return !!t2 && t2 instanceof e20 && t2.type === U.MediaFeatureRangeNameValue;
  }
}, Fi = class e21 {
  constructor(e26, t2, n2) {
    __publicField(this, "type", U.MediaFeatureRangeValueName);
    __publicField(this, "name");
    __publicField(this, "operator");
    __publicField(this, "value");
    this.name = e26, this.operator = t2, this.value = n2;
  }
  operatorKind() {
    return Ni(this.operator);
  }
  getName() {
    return this.name.getName();
  }
  getNameToken() {
    return this.name.getNameToken();
  }
  tokens() {
    return [...this.value.tokens(), ...this.operator, ...this.name.tokens()];
  }
  toString() {
    return this.value.toString() + x(...this.operator) + this.name.toString();
  }
  indexOf(e26) {
    return e26 === this.name ? `name` : e26 === this.value ? `value` : -1;
  }
  at(e26) {
    return e26 === `name` ? this.name : e26 === `value` ? this.value : void 0;
  }
  walk(e26) {
    return false !== e26({ node: this.value, parent: this }, `value`) && (`walk` in this.value ? this.value.walk(e26) : void 0);
  }
  toJSON() {
    return { type: this.type, name: this.name.toJSON(), value: this.value.toJSON(), tokens: this.tokens() };
  }
  isMediaFeatureRangeValueName() {
    return e21.isMediaFeatureRangeValueName(this);
  }
  static isMediaFeatureRangeValueName(t2) {
    return !!t2 && t2 instanceof e21 && t2.type === U.MediaFeatureRangeValueName;
  }
}, Ii = class e22 {
  constructor(e26, t2, n2, r2, i2) {
    __publicField(this, "type", U.MediaFeatureRangeValueNameValue);
    __publicField(this, "name");
    __publicField(this, "valueOne");
    __publicField(this, "valueOneOperator");
    __publicField(this, "valueTwo");
    __publicField(this, "valueTwoOperator");
    this.name = e26, this.valueOne = t2, this.valueOneOperator = n2, this.valueTwo = r2, this.valueTwoOperator = i2;
  }
  valueOneOperatorKind() {
    return Ni(this.valueOneOperator);
  }
  valueTwoOperatorKind() {
    return Ni(this.valueTwoOperator);
  }
  getName() {
    return this.name.getName();
  }
  getNameToken() {
    return this.name.getNameToken();
  }
  tokens() {
    return [...this.valueOne.tokens(), ...this.valueOneOperator, ...this.name.tokens(), ...this.valueTwoOperator, ...this.valueTwo.tokens()];
  }
  toString() {
    return this.valueOne.toString() + x(...this.valueOneOperator) + this.name.toString() + x(...this.valueTwoOperator) + this.valueTwo.toString();
  }
  indexOf(e26) {
    return e26 === this.name ? `name` : e26 === this.valueOne ? `valueOne` : e26 === this.valueTwo ? `valueTwo` : -1;
  }
  at(e26) {
    return e26 === `name` ? this.name : e26 === `valueOne` ? this.valueOne : e26 === `valueTwo` ? this.valueTwo : void 0;
  }
  walk(e26) {
    return false !== e26({ node: this.valueOne, parent: this }, `valueOne`) && (!(`walk` in this.valueOne) || false !== this.valueOne.walk(e26)) && false !== e26({ node: this.valueTwo, parent: this }, `valueTwo`) && (!(`walk` in this.valueTwo) || false !== this.valueTwo.walk(e26)) && void 0;
  }
  toJSON() {
    return { type: this.type, name: this.name.toJSON(), valueOne: this.valueOne.toJSON(), valueTwo: this.valueTwo.toJSON(), tokens: this.tokens() };
  }
  isMediaFeatureRangeValueNameValue() {
    return e22.isMediaFeatureRangeValueNameValue(this);
  }
  static isMediaFeatureRangeValueNameValue(t2) {
    return !!t2 && t2 instanceof e22 && t2.type === U.MediaFeatureRangeValueNameValue;
  }
};
function Li(e26) {
  let t2 = false, n2 = false;
  for (let r3 = 0; r3 < e26.length; r3++) {
    let i3 = e26[r3];
    if (i3.type === j.Token && i3.value[0] === w.Delim) {
      let i4 = Mi(e26.slice(r3));
      if (false !== i4) {
        if (false !== t2) {
          n2 = [i4[0] + r3, i4[1] + r3];
          break;
        }
        t2 = [i4[0] + r3, i4[1] + r3], r3 += i4[1];
      }
    }
  }
  if (false === t2) return false;
  let r2 = [e26[t2[0]].value];
  if (t2[0] !== t2[1] && r2.push(e26[t2[1]].value), false === n2) {
    let n3 = e26.slice(0, t2[0]), i3 = e26.slice(t2[1] + 1), a3 = bi(n3), o3 = bi(i3);
    if (!a3 && !o3) return false;
    if (a3 && !o3 || a3 && Ri.has(W(a3.getName()))) {
      let e27 = wi(i3);
      return !!e27 && new Pi(a3, r2, e27);
    }
    if (!a3 && o3 || o3 && Ri.has(W(o3.getName()))) {
      let e27 = wi(n3);
      return !!e27 && new Fi(o3, r2, e27);
    }
    return false;
  }
  let i2 = [e26[n2[0]].value];
  n2[0] !== n2[1] && i2.push(e26[n2[1]].value);
  let a2 = e26.slice(0, t2[0]), o2 = e26.slice(t2[1] + 1, n2[0]), s2 = e26.slice(n2[1] + 1), c2 = wi(a2), l2 = bi(o2), u2 = wi(s2);
  if (!c2 || !l2 || !u2) return false;
  {
    let e27 = Ni(r2);
    if (false === e27 || e27 === ji.EQ) return false;
    let t3 = Ni(i2);
    if (false === t3 || t3 === ji.EQ || !(e27 !== ki.LT && e27 !== ki.LT_OR_EQ || t3 !== Ai.GT && t3 !== Ai.GT_OR_EQ) || !(e27 !== Ai.GT && e27 !== Ai.GT_OR_EQ || t3 !== ki.LT && t3 !== ki.LT_OR_EQ)) return false;
  }
  return new Ii(l2, c2, r2, u2, i2);
}
var Ri = new Set(`any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.dynamic-range.environment-blending.forced-colors.grid.height.horizontal-viewport-segments.hover.inverted-colors.monochrome.nav-controls.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-data.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.vertical-viewport-segments.video-color-gamut.video-dynamic-range.width`.split(`.`)), zi = class e23 {
  constructor(e26, t2 = [], n2 = []) {
    __publicField(this, "type", U.MediaFeature);
    __publicField(this, "feature");
    __publicField(this, "before");
    __publicField(this, "after");
    this.feature = e26, this.before = t2, this.after = n2;
  }
  getName() {
    return this.feature.getName();
  }
  getNameToken() {
    return this.feature.getNameToken();
  }
  tokens() {
    return [...this.before, ...this.feature.tokens(), ...this.after];
  }
  toString() {
    return x(...this.before) + this.feature.toString() + x(...this.after);
  }
  indexOf(e26) {
    return e26 === this.feature ? `feature` : -1;
  }
  at(e26) {
    if (e26 === `feature`) return this.feature;
  }
  walk(e26) {
    return false !== e26({ node: this.feature, parent: this }, `feature`) && (`walk` in this.feature ? this.feature.walk(e26) : void 0);
  }
  toJSON() {
    return { type: this.type, feature: this.feature.toJSON(), before: this.before, after: this.after };
  }
  isMediaFeature() {
    return e23.isMediaFeature(this);
  }
  static isMediaFeature(t2) {
    return !!t2 && t2 instanceof e23 && t2.type === U.MediaFeature;
  }
};
function Bi(e26, t2 = [], n2 = []) {
  if (e26.startToken[0] !== w.OpenParen) return false;
  let r2 = Si(e26.value);
  if (false !== r2) return new zi(r2, t2, n2);
  let i2 = Oi(e26.value);
  if (false !== i2) return new zi(i2, t2, n2);
  let a2 = Li(e26.value);
  return false !== a2 && new zi(a2, t2, n2);
}
var Vi = class e24 {
  constructor(e26, t2) {
    __publicField(this, "type", U.MediaNot);
    __publicField(this, "modifier");
    __publicField(this, "media");
    this.modifier = e26, this.media = t2;
  }
  tokens() {
    return [...this.modifier, ...this.media.tokens()];
  }
  toString() {
    return x(...this.modifier) + this.media.toString();
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    if (e26 === `media`) return this.media;
  }
  walk(e26) {
    return false !== e26({ node: this.media, parent: this }, `media`) && this.media.walk(e26);
  }
  toJSON() {
    return { type: this.type, modifier: this.modifier, media: this.media.toJSON() };
  }
  isMediaNot() {
    return e24.isMediaNot(this);
  }
  static isMediaNot(t2) {
    return !!t2 && t2 instanceof e24 && t2.type === U.MediaNot;
  }
}, Hi = class e25 {
  constructor(e26, t2) {
    __publicField(this, "type", U.MediaOr);
    __publicField(this, "modifier");
    __publicField(this, "media");
    this.modifier = e26, this.media = t2;
  }
  tokens() {
    return [...this.modifier, ...this.media.tokens()];
  }
  toString() {
    return x(...this.modifier) + this.media.toString();
  }
  indexOf(e26) {
    return e26 === this.media ? `media` : -1;
  }
  at(e26) {
    if (e26 === `media`) return this.media;
  }
  walk(e26) {
    return false !== e26({ node: this.media, parent: this }, `media`) && this.media.walk(e26);
  }
  toJSON() {
    return { type: this.type, modifier: this.modifier, media: this.media.toJSON() };
  }
  isMediaOr() {
    return e25.isMediaOr(this);
  }
  static isMediaOr(t2) {
    return !!t2 && t2 instanceof e25 && t2.type === U.MediaOr;
  }
}, Ui, Wi;
function Gi(e26) {
  if (e26[0] !== w.Ident) return false;
  switch (W(e26[4].value)) {
    case Ui.Not:
      return Ui.Not;
    case Ui.Only:
      return Ui.Only;
    default:
      return false;
  }
}
function Ki(e26) {
  {
    let t2 = Yi(e26);
    if (false !== t2) return new ci(t2);
  }
  {
    let t2 = -1, n2 = -1, r2 = -1;
    for (let i3 = 0; i3 < e26.length; i3++) {
      let a3 = e26[i3];
      if (!Pn(a3) && !Fn(a3)) {
        if (F(a3)) {
          let o3 = a3.value;
          if (t2 === -1 && o3[0] === w.Ident && Gi(o3)) {
            t2 = i3;
            continue;
          }
          if (n2 === -1 && o3[0] === w.Ident && !Gi(o3)) {
            n2 = i3;
            continue;
          }
          if (r2 === -1 && o3[0] === w.Ident && W(o3[4].value) === `and`) {
            if (r2 = i3, false === Xi(e26.slice(i3 + 1))) return false;
            break;
          }
          return false;
        }
        return false;
      }
    }
    let i2 = [], a2 = [];
    t2 === -1 ? n2 !== -1 && (a2 = e26.slice(0, n2 + 1).flatMap(((e27) => e27.tokens()))) : (i2 = e26.slice(0, t2 + 1).flatMap(((e27) => e27.tokens())), n2 !== -1 && (a2 = e26.slice(t2 + 1, n2 + 1).flatMap(((e27) => e27.tokens()))));
    let o2 = Xi(e26.slice(Math.max(t2, n2, r2) + 1));
    return false === o2 ? new si(i2, [...a2, ...e26.slice(n2 + 1).flatMap(((e27) => e27.tokens()))]) : new si(i2, a2, e26.slice(n2 + 1, r2 + 1).flatMap(((e27) => e27.tokens())), o2);
  }
}
function qi(e26) {
  let t2 = false, n2 = [], r2 = -1, i2 = -1;
  for (let a2 = 0; a2 < e26.length; a2++) {
    if (t2) {
      let t3 = ea(e26.slice(a2));
      if (false !== t3) {
        a2 += t3.advance, n2.push(t3.node), i2 = a2;
        continue;
      }
    }
    let o2 = e26[a2];
    if (o2.type !== j.Whitespace && o2.type !== j.Comment) {
      if (t2 || false !== t2 || !Mn(o2) || (o2.normalize(), t2 = Qi(o2), false === t2)) return false;
      r2 = a2;
    }
  }
  return !(!t2 || !n2.length) && new pi(t2, n2, e26.slice(0, r2).flatMap(((e27) => e27.tokens())), e26.slice(i2 + 1).flatMap(((e27) => e27.tokens())));
}
function Ji(e26) {
  let t2 = false, n2 = [], r2 = -1, i2 = -1;
  for (let a2 = 0; a2 < e26.length; a2++) {
    if (t2) {
      let t3 = ta(e26.slice(a2));
      if (false !== t3) {
        a2 += t3.advance, n2.push(t3.node), i2 = a2;
        continue;
      }
    }
    let o2 = e26[a2];
    if (o2.type !== j.Whitespace && o2.type !== j.Comment) {
      if (t2 || false !== t2 || !Mn(o2) || (o2.normalize(), t2 = Qi(o2), false === t2)) return false;
      r2 = a2;
    }
  }
  return !(!t2 || !n2.length) && new fi(t2, n2, e26.slice(0, r2).flatMap(((e27) => e27.tokens())), e26.slice(i2 + 1).flatMap(((e27) => e27.tokens())));
}
function Yi(e26) {
  let t2 = $i(e26);
  if (false !== t2) return new ai(t2);
  let n2 = Ji(e26);
  if (false !== n2) return new ai(n2);
  let r2 = qi(e26);
  if (false !== r2) return new ai(r2);
  let i2 = Zi(e26);
  return false !== i2 && new ai(i2);
}
function Xi(e26) {
  let t2 = $i(e26);
  if (false !== t2) return new ai(t2);
  let n2 = Ji(e26);
  if (false !== n2) return new ai(n2);
  let r2 = Zi(e26);
  return false !== r2 && new ai(r2);
}
function Zi(e26) {
  let t2 = -1;
  for (let n3 = 0; n3 < e26.length; n3++) {
    let r3 = e26[n3];
    if (r3.type !== j.Whitespace && r3.type !== j.Comment) {
      if (!Mn(r3) || t2 !== -1) return false;
      t2 = n3;
    }
  }
  if (t2 === -1) return false;
  let n2 = e26[t2];
  if (n2.startToken[0] !== w.OpenParen) return false;
  n2.normalize();
  let r2 = [...e26.slice(0, t2).flatMap(((e27) => e27.tokens())), n2.startToken], i2 = [n2.endToken, ...e26.slice(t2 + 1).flatMap(((e27) => e27.tokens()))], a2 = Bi(n2, r2, i2);
  if (false !== a2) return new oi(a2);
  let o2 = Yi(n2.value);
  return false === o2 ? new oi(new ui(n2), e26.slice(0, t2).flatMap(((e27) => e27.tokens())), e26.slice(t2 + 1).flatMap(((e27) => e27.tokens()))) : new oi(o2, r2, i2);
}
function Qi(e26) {
  if (e26.startToken[0] !== w.OpenParen) return false;
  let t2 = Bi(e26, [e26.startToken], [e26.endToken]);
  if (false !== t2) return new oi(t2);
  let n2 = Yi(e26.value);
  return false === n2 ? new oi(new ui(e26)) : new oi(n2, [e26.startToken], [e26.endToken]);
}
function $i(e26) {
  let t2 = false, n2 = null;
  for (let r2 = 0; r2 < e26.length; r2++) {
    let i2 = e26[r2];
    if (i2.type !== j.Whitespace && i2.type !== j.Comment) {
      if (_i(i2)) {
        if (W(i2.value[4].value) === `not`) {
          if (t2) return false;
          t2 = true;
          continue;
        }
        return false;
      }
      if (!t2 || !Mn(i2)) return false;
      {
        i2.normalize();
        let t3 = Qi(i2);
        if (false === t3) return false;
        n2 = new Vi(e26.slice(0, r2).flatMap(((e27) => e27.tokens())), t3);
      }
    }
  }
  return n2 || false;
}
function ea(e26) {
  let t2 = false;
  for (let n2 = 0; n2 < e26.length; n2++) {
    let r2 = e26[n2];
    if (r2.type !== j.Whitespace && r2.type !== j.Comment) {
      if (_i(r2)) {
        if (W(r2.value[4].value) === `or`) {
          if (t2) return false;
          t2 = true;
          continue;
        }
        return false;
      }
      if (t2 && Mn(r2)) {
        r2.normalize();
        let t3 = Qi(r2);
        return false !== t3 && { advance: n2, node: new Hi(e26.slice(0, n2).flatMap(((e27) => e27.tokens())), t3) };
      }
      return false;
    }
  }
  return false;
}
function ta(e26) {
  let t2 = false;
  for (let n2 = 0; n2 < e26.length; n2++) {
    let r2 = e26[n2];
    if (r2.type !== j.Whitespace && r2.type !== j.Comment) {
      if (_i(r2)) {
        if (W(r2.value[4].value) === `and`) {
          if (t2) return false;
          t2 = true;
          continue;
        }
        return false;
      }
      if (t2 && Mn(r2)) {
        r2.normalize();
        let t3 = Qi(r2);
        return false !== t3 && { advance: n2, node: new di(e26.slice(0, n2).flatMap(((e27) => e27.tokens())), t3) };
      }
      return false;
    }
  }
  return false;
}
function na(e26, t2) {
  let n2 = On(e26, { onParseError: t2?.onParseError });
  return n2.map(((e27, r2) => {
    let i2 = Ki(e27);
    return i2 == 0 && true === t2?.preserveInvalidMediaQueries ? new li(n2[r2]) : i2;
  })).filter(((e27) => !!e27));
}
function ra(e26, t2) {
  let n2 = Qt({ css: e26 }, { onParseError: t2?.onParseError }), r2 = [];
  for (; !n2.endOfFile(); ) r2.push(n2.nextToken());
  return r2.push(n2.nextToken()), na(r2, t2);
}
(function(e26) {
  e26.Not = `not`, e26.Only = `only`;
})(Ui || (Ui = {})), (function(e26) {
  e26.All = `all`, e26.Print = `print`, e26.Screen = `screen`, e26.Tty = `tty`, e26.Tv = `tv`, e26.Projection = `projection`, e26.Handheld = `handheld`, e26.Braille = `braille`, e26.Embossed = `embossed`, e26.Aural = `aural`, e26.Speech = `speech`;
})(Wi || (Wi = {}));
function ia(e26, t2) {
  if (!t2[0]) return e26;
  t2.sort((e27, t3) => e27.end - t3.end || e27.start - t3.start);
  let n2 = ``, r2 = t2[0];
  n2 += e26.slice(0, r2.start), n2 += r2.replacement;
  for (let i2 = 1; i2 < t2.length; ++i2) {
    let a2 = t2[i2];
    n2 += e26.slice(r2.end, a2.start), n2 += a2.replacement, r2 = a2;
  }
  return n2 += e26.slice(r2.end), n2;
}
function aa(e26, t2) {
  return ia(e26, t2.map((e27) => ({ start: e27.index, end: e27.index, replacement: ` /* ${e27.value} */` })));
}
function oa(e26, t2, n2 = true) {
  return e26.includes(`rem`) && (0, ri.default)(e26).walk((r2) => {
    if (r2.type !== `word`) return true;
    let i2 = ri.default.unit(r2.value);
    if (!i2 || i2.unit !== `rem`) return false;
    if (n2) {
      let n3 = ` /* ${parseFloat(i2.number) * t2}px */`;
      return e26 = e26.slice(0, r2.sourceEndIndex) + n3 + e26.slice(r2.sourceEndIndex), false;
    }
    let a2 = `${parseFloat(i2.number) * t2}px`;
    return e26 = e26.slice(0, r2.sourceIndex) + a2 + e26.slice(r2.sourceEndIndex), false;
  }), e26;
}
function sa(e26) {
  let t2 = [];
  try {
    ra(e26).forEach((n2) => {
      n2.walk(({ node: n3 }) => {
        F(n3) && n3.type === `token` && n3.value[0] === `dimension-token` && (n3.value[4].type === `integer` || n3.value[4].type === `number`) && (n3.value[4].unit === `rem` || n3.value[4].unit === `em`) && t2.push({ index: e26.length - (e26.length - n3.value[3] - 1), value: `${n3.value[4].value * 16}px` });
      });
    });
  } catch {
  }
  return t2;
}
var ca = Object.assign(({ comments: e26, rootFontSize: t2 }) => ({ postcssPlugin: `plugin`, AtRule: { media(t3) {
  t3.params.includes(`em`) && e26.push(...sa(t3.params).map(({ index: e27, value: n2 }) => ({ index: e27 + t3.source.start.offset + `@media${t3.raws.afterName}`.length, value: n2 })));
} }, Declaration(n2) {
  n2.value.includes(`rem`) && (0, ri.default)(n2.value).walk((r2) => {
    if (r2.type !== `word`) return true;
    let i2 = ri.default.unit(r2.value);
    return !i2 || i2.unit !== `rem` || e26.push({ index: n2.source.start.offset + `${n2.prop}${n2.raws.between}`.length + r2.sourceEndIndex, value: `${parseFloat(i2.number) * t2}px` }), false;
  });
} }), { postcss: true }), la = (e26, t2) => {
  if (typeof e26 == `number`) {
    if (t2 === 3) return { mode: `rgb`, r: (e26 >> 8 & 15 | e26 >> 4 & 240) / 255, g: (e26 >> 4 & 15 | e26 & 240) / 255, b: (e26 & 15 | e26 << 4 & 240) / 255 };
    if (t2 === 4) return { mode: `rgb`, r: (e26 >> 12 & 15 | e26 >> 8 & 240) / 255, g: (e26 >> 8 & 15 | e26 >> 4 & 240) / 255, b: (e26 >> 4 & 15 | e26 & 240) / 255, alpha: (e26 & 15 | e26 << 4 & 240) / 255 };
    if (t2 === 6) return { mode: `rgb`, r: (e26 >> 16 & 255) / 255, g: (e26 >> 8 & 255) / 255, b: (e26 & 255) / 255 };
    if (t2 === 8) return { mode: `rgb`, r: (e26 >> 24 & 255) / 255, g: (e26 >> 16 & 255) / 255, b: (e26 >> 8 & 255) / 255, alpha: (e26 & 255) / 255 };
  }
}, ua = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, da = (e26) => la(ua[e26.toLowerCase()], 6), fa = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, pa = (e26) => {
  let t2;
  return (t2 = e26.match(fa)) ? la(parseInt(t2[1], 16), t2[1].length) : void 0;
}, G = `([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)`;
`${G}`;
var ma = `${G}%`;
`${G}`;
var ha = `(?:${G}%|${G})`, ga = `(?:${G}%|${G}|none)`, _a = `(?:${G}(deg|grad|rad|turn)|${G})`;
`${G}${G}`;
var va = `\\s*,\\s*`;
RegExp(`^` + ga + `$`);
var ya = RegExp(`^rgba?\\(\\s*${G}${va}${G}${va}${G}\\s*(?:,\\s*${ha}\\s*)?\\)$`), ba = RegExp(`^rgba?\\(\\s*${ma}${va}${ma}${va}${ma}\\s*(?:,\\s*${ha}\\s*)?\\)$`), xa = (e26) => {
  let t2 = { mode: `rgb` }, n2;
  if (n2 = e26.match(ya)) n2[1] !== void 0 && (t2.r = n2[1] / 255), n2[2] !== void 0 && (t2.g = n2[2] / 255), n2[3] !== void 0 && (t2.b = n2[3] / 255);
  else if (n2 = e26.match(ba)) n2[1] !== void 0 && (t2.r = n2[1] / 100), n2[2] !== void 0 && (t2.g = n2[2] / 100), n2[3] !== void 0 && (t2.b = n2[3] / 100);
  else return;
  return n2[4] === void 0 ? n2[5] !== void 0 && (t2.alpha = Math.max(0, Math.min(1, +n2[5]))) : t2.alpha = Math.max(0, Math.min(1, n2[4] / 100)), t2;
}, Sa = (e26, t2) => e26 === void 0 ? void 0 : typeof e26 == `object` ? e26.mode === void 0 ? t2 ? { ...e26, mode: t2 } : void 0 : e26 : Wa(e26), Ca = (e26 = `rgb`) => (t2) => (t2 = Sa(t2, e26)) === void 0 ? void 0 : t2.mode === e26 ? t2 : wa[t2.mode][e26] ? wa[t2.mode][e26](t2) : e26 === `rgb` ? wa[t2.mode].rgb(t2) : wa.rgb[e26](wa[t2.mode].rgb(t2)), wa = {}, Ta = {}, Ea = [], Da = {}, Oa = (e26) => e26, K = (e26) => (wa[e26.mode] = { ...wa[e26.mode], ...e26.toMode }, Object.keys(e26.fromMode || {}).forEach((t2) => {
  wa[t2] || (wa[t2] = {}), wa[t2][e26.mode] = e26.fromMode[t2];
}), e26.ranges || (e26.ranges = {}), e26.difference || (e26.difference = {}), e26.channels.forEach((t2) => {
  if (e26.ranges[t2] === void 0 && (e26.ranges[t2] = [0, 1]), !e26.interpolate[t2]) throw Error(`Missing interpolator for: ${t2}`);
  typeof e26.interpolate[t2] == `function` && (e26.interpolate[t2] = { use: e26.interpolate[t2] }), e26.interpolate[t2].fixup || (e26.interpolate[t2].fixup = Oa);
}), Ta[e26.mode] = e26, (e26.parse || []).forEach((t2) => {
  Aa(t2, e26.mode);
}), Ca(e26.mode)), ka = (e26) => Ta[e26], Aa = (e26, t2) => {
  if (typeof e26 == `string`) {
    if (!t2) throw Error(`'mode' required when 'parser' is a string`);
    Da[e26] = t2;
  } else typeof e26 == `function` && Ea.indexOf(e26) < 0 && Ea.push(e26);
}, ja = /[^\x00-\x7F]|[a-zA-Z_]/, Ma = /[^\x00-\x7F]|[-\w]/, q = { Function: `function`, Ident: `ident`, Number: `number`, Percentage: `percentage`, ParenClose: `)`, None: `none`, Hue: `hue`, Alpha: `alpha` }, J = 0;
function Na(e26) {
  let t2 = e26[J], n2 = e26[J + 1];
  return t2 === `-` || t2 === `+` ? /\d/.test(n2) || n2 === `.` && /\d/.test(e26[J + 2]) : t2 === `.` ? /\d/.test(n2) : /\d/.test(t2);
}
function Pa(e26) {
  if (J >= e26.length) return false;
  let t2 = e26[J];
  if (ja.test(t2)) return true;
  if (t2 === `-`) {
    if (e26.length - J < 2) return false;
    let t3 = e26[J + 1];
    return !!(t3 === `-` || ja.test(t3));
  }
  return false;
}
var Fa = { deg: 1, rad: 180 / Math.PI, grad: 9 / 10, turn: 360 };
function Ia(e26) {
  let t2 = ``;
  if ((e26[J] === `-` || e26[J] === `+`) && (t2 += e26[J++]), t2 += La(e26), e26[J] === `.` && /\d/.test(e26[J + 1]) && (t2 += e26[J++] + La(e26)), (e26[J] === `e` || e26[J] === `E`) && ((e26[J + 1] === `-` || e26[J + 1] === `+`) && /\d/.test(e26[J + 2]) ? t2 += e26[J++] + e26[J++] + La(e26) : /\d/.test(e26[J + 1]) && (t2 += e26[J++] + La(e26))), Pa(e26)) {
    let n2 = Ra(e26);
    return n2 === `deg` || n2 === `rad` || n2 === `turn` || n2 === `grad` ? { type: q.Hue, value: t2 * Fa[n2] } : void 0;
  }
  return e26[J] === `%` ? (J++, { type: q.Percentage, value: +t2 }) : { type: q.Number, value: +t2 };
}
function La(e26) {
  let t2 = ``;
  for (; /\d/.test(e26[J]); ) t2 += e26[J++];
  return t2;
}
function Ra(e26) {
  let t2 = ``;
  for (; J < e26.length && Ma.test(e26[J]); ) t2 += e26[J++];
  return t2;
}
function za(e26) {
  let t2 = Ra(e26);
  return e26[J] === `(` ? (J++, { type: q.Function, value: t2 }) : t2 === `none` ? { type: q.None, value: void 0 } : { type: q.Ident, value: t2 };
}
function Ba(e26 = ``) {
  let t2 = e26.trim(), n2 = [], r2;
  for (J = 0; J < t2.length; ) {
    if (r2 = t2[J++], r2 === `
` || r2 === `	` || r2 === ` `) {
      for (; J < t2.length && (t2[J] === `
` || t2[J] === `	` || t2[J] === ` `); ) J++;
      continue;
    }
    if (r2 === `,`) return;
    if (r2 === `)`) {
      n2.push({ type: q.ParenClose });
      continue;
    }
    if (r2 === `+`) {
      if (J--, Na(t2)) {
        n2.push(Ia(t2));
        continue;
      }
      return;
    }
    if (r2 === `-`) {
      if (J--, Na(t2)) {
        n2.push(Ia(t2));
        continue;
      }
      if (Pa(t2)) {
        n2.push({ type: q.Ident, value: Ra(t2) });
        continue;
      }
      return;
    }
    if (r2 === `.`) {
      if (J--, Na(t2)) {
        n2.push(Ia(t2));
        continue;
      }
      return;
    }
    if (r2 === `/`) {
      for (; J < t2.length && (t2[J] === `
` || t2[J] === `	` || t2[J] === ` `); ) J++;
      let e27;
      if (Na(t2) && (e27 = Ia(t2), e27.type !== q.Hue)) {
        n2.push({ type: q.Alpha, value: e27 });
        continue;
      }
      if (Pa(t2) && Ra(t2) === `none`) {
        n2.push({ type: q.Alpha, value: { type: q.None, value: void 0 } });
        continue;
      }
      return;
    }
    if (/\d/.test(r2)) {
      J--, n2.push(Ia(t2));
      continue;
    }
    if (ja.test(r2)) {
      J--, n2.push(za(t2));
      continue;
    }
    return;
  }
  return n2;
}
function Va(e26) {
  e26._i = 0;
  let t2 = e26[e26._i++];
  if (!t2 || t2.type !== q.Function || t2.value !== `color` || (t2 = e26[e26._i++], t2.type !== q.Ident)) return;
  let n2 = Da[t2.value];
  if (!n2) return;
  let r2 = { mode: n2 }, i2 = Ha(e26, false);
  if (!i2) return;
  let a2 = ka(n2).channels;
  for (let e27 = 0, t3, n3; e27 < a2.length; e27++) t3 = i2[e27], n3 = a2[e27], t3.type !== q.None && (r2[n3] = t3.type === q.Number ? t3.value : t3.value / 100, n3 === `alpha` && (r2[n3] = Math.max(0, Math.min(1, r2[n3]))));
  return r2;
}
function Ha(e26, t2) {
  let n2 = [], r2;
  for (; e26._i < e26.length; ) {
    if (r2 = e26[e26._i++], r2.type === q.None || r2.type === q.Number || r2.type === q.Alpha || r2.type === q.Percentage || t2 && r2.type === q.Hue) {
      n2.push(r2);
      continue;
    }
    if (r2.type === q.ParenClose) {
      if (e26._i < e26.length) return;
      continue;
    }
    return;
  }
  if (!(n2.length < 3 || n2.length > 4)) {
    if (n2.length === 4) {
      if (n2[3].type !== q.Alpha) return;
      n2[3] = n2[3].value;
    }
    return n2.length === 3 && n2.push({ type: q.None, value: void 0 }), n2.every((e27) => e27.type !== q.Alpha) ? n2 : void 0;
  }
}
function Ua(e26, t2) {
  e26._i = 0;
  let n2 = e26[e26._i++];
  if (!n2 || n2.type !== q.Function) return;
  let r2 = Ha(e26, t2);
  if (r2) return r2.unshift(n2.value), r2;
}
var Wa = (e26) => {
  if (typeof e26 != `string`) return;
  let t2 = Ba(e26), n2 = t2 ? Ua(t2, true) : void 0, r2, i2 = 0, a2 = Ea.length;
  for (; i2 < a2; ) if ((r2 = Ea[i2++](e26, n2)) !== void 0) return r2;
  return t2 ? Va(t2) : void 0;
};
function Ga(e26, t2) {
  if (!t2 || t2[0] !== `rgb` && t2[0] !== `rgba`) return;
  let n2 = { mode: `rgb` }, [, r2, i2, a2, o2] = t2;
  if (!(r2.type === q.Hue || i2.type === q.Hue || a2.type === q.Hue)) return r2.type !== q.None && (n2.r = r2.type === q.Number ? r2.value / 255 : r2.value / 100), i2.type !== q.None && (n2.g = i2.type === q.Number ? i2.value / 255 : i2.value / 100), a2.type !== q.None && (n2.b = a2.type === q.Number ? a2.value / 255 : a2.value / 100), o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var Ka = (e26) => e26 === `transparent` ? { mode: `rgb`, r: 0, g: 0, b: 0, alpha: 0 } : void 0, qa = (e26, t2, n2) => e26 + n2 * (t2 - e26), Ja = (e26) => {
  let t2 = [];
  for (let n2 = 0; n2 < e26.length - 1; n2++) {
    let r2 = e26[n2], i2 = e26[n2 + 1];
    r2 === void 0 && i2 === void 0 ? t2.push(void 0) : r2 !== void 0 && i2 !== void 0 ? t2.push([r2, i2]) : t2.push(r2 === void 0 ? [i2, i2] : [r2, r2]);
  }
  return t2;
}, Y = /* @__PURE__ */ ((e26) => (t2) => {
  let n2 = Ja(t2);
  return (t3) => {
    let r2 = t3 * n2.length, i2 = t3 >= 1 ? n2.length - 1 : Math.max(Math.floor(r2), 0), a2 = n2[i2];
    return a2 === void 0 ? void 0 : e26(a2[0], a2[1], r2 - i2);
  };
})(qa), X = (e26) => {
  let t2 = false, n2 = e26.map((e27) => e27 === void 0 ? 1 : (t2 = true, e27));
  return t2 ? n2 : e26;
}, Ya = { mode: `rgb`, channels: [`r`, `g`, `b`, `alpha`], parse: [Ga, pa, xa, da, Ka, `srgb`], serialize: `srgb`, interpolate: { r: Y, g: Y, b: Y, alpha: { use: Y, fixup: X } }, gamut: true, white: { r: 1, g: 1, b: 1 }, black: { r: 0, g: 0, b: 0 } }, Xa = (e26 = 0) => Math.abs(e26) ** (563 / 256) * Math.sign(e26), Za = (e26) => {
  let t2 = Xa(e26.r), n2 = Xa(e26.g), r2 = Xa(e26.b), i2 = { mode: `xyz65`, x: 0.5766690429101305 * t2 + 0.1855582379065463 * n2 + 0.1882286462349947 * r2, y: 0.297344975250536 * t2 + 0.6273635662554661 * n2 + 0.0752914584939979 * r2, z: 0.0270313613864123 * t2 + 0.0706888525358272 * n2 + 0.9913375368376386 * r2 };
  return e26.alpha !== void 0 && (i2.alpha = e26.alpha), i2;
}, Qa = (e26) => Math.abs(e26) ** (256 / 563) * Math.sign(e26), $a = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = { mode: `a98`, r: Qa(e26 * 2.0415879038107465 - t2 * 0.5650069742788597 - 0.3447313507783297 * n2), g: Qa(e26 * -0.9692436362808798 + t2 * 1.8759675015077206 + 0.0415550574071756 * n2), b: Qa(e26 * 0.0134442806320312 - t2 * 0.1183623922310184 + 1.0151749943912058 * n2) };
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, eo = (e26 = 0) => {
  let t2 = Math.abs(e26);
  return t2 <= 0.04045 ? e26 / 12.92 : (Math.sign(e26) || 1) * ((t2 + 0.055) / 1.055) ** 2.4;
}, to = ({ r: e26, g: t2, b: n2, alpha: r2 }) => {
  let i2 = { mode: `lrgb`, r: eo(e26), g: eo(t2), b: eo(n2) };
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, no = (e26) => {
  let { r: t2, g: n2, b: r2, alpha: i2 } = to(e26), a2 = { mode: `xyz65`, x: 0.4123907992659593 * t2 + 0.357584339383878 * n2 + 0.1804807884018343 * r2, y: 0.2126390058715102 * t2 + 0.715168678767756 * n2 + 0.0721923153607337 * r2, z: 0.0193308187155918 * t2 + 0.119194779794626 * n2 + 0.9505321522496607 * r2 };
  return i2 !== void 0 && (a2.alpha = i2), a2;
}, ro = (e26 = 0) => {
  let t2 = Math.abs(e26);
  return t2 > 31308e-7 ? (Math.sign(e26) || 1) * (1.055 * t2 ** (1 / 2.4) - 0.055) : e26 * 12.92;
}, io = ({ r: e26, g: t2, b: n2, alpha: r2 }, i2 = `rgb`) => {
  let a2 = { mode: i2, r: ro(e26), g: ro(t2), b: ro(n2) };
  return r2 !== void 0 && (a2.alpha = r2), a2;
}, ao = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = io({ r: e26 * 3.2409699419045226 - t2 * 1.537383177570094 - 0.4986107602930034 * n2, g: e26 * -0.9692436362808796 + t2 * 1.8759675015077204 + 0.0415550574071756 * n2, b: e26 * 0.0556300796969936 - t2 * 0.2039769588889765 + 1.0569715142428784 * n2 });
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, oo = { ...Ya, mode: `a98`, parse: [`a98-rgb`], serialize: `a98-rgb`, fromMode: { rgb: (e26) => $a(no(e26)), xyz65: $a }, toMode: { rgb: (e26) => ao(Za(e26)), xyz65: Za } }, Z = (e26) => (e26 %= 360) < 0 ? e26 + 360 : e26, so = (e26, t2) => e26.map((n2, r2, i2) => {
  if (n2 === void 0) return n2;
  let a2 = Z(n2);
  return r2 === 0 || e26[r2 - 1] === void 0 ? a2 : t2(a2 - Z(i2[r2 - 1]));
}).reduce((e27, t3) => !e27.length || t3 === void 0 || e27[e27.length - 1] === void 0 ? (e27.push(t3), e27) : (e27.push(t3 + e27[e27.length - 1]), e27), []), co = (e26) => so(e26, (e27) => Math.abs(e27) <= 180 ? e27 : e27 - 360 * Math.sign(e27)), Q = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], lo = Math.PI / 180, uo = 180 / Math.PI, fo = Q[3] * Q[4], po = Q[1] * Q[4], mo = Q[1] * Q[2] - Q[0] * Q[3], ho = ({ r: e26, g: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = (mo * n2 + e26 * fo - t2 * po) / (mo + fo - po), a2 = n2 - i2, o2 = (Q[4] * (t2 - i2) - Q[2] * a2) / Q[3], s2 = { mode: `cubehelix`, l: i2, s: i2 === 0 || i2 === 1 ? void 0 : Math.sqrt(a2 * a2 + o2 * o2) / (Q[4] * i2 * (1 - i2)) };
  return s2.s && (s2.h = Math.atan2(o2, a2) * uo - 120), r2 !== void 0 && (s2.alpha = r2), s2;
}, go = ({ h: e26, s: t2, l: n2, alpha: r2 }) => {
  let i2 = { mode: `rgb` };
  e26 = (e26 === void 0 ? 0 : e26 + 120) * lo, n2 === void 0 && (n2 = 0);
  let a2 = t2 === void 0 ? 0 : t2 * n2 * (1 - n2), o2 = Math.cos(e26), s2 = Math.sin(e26);
  return i2.r = n2 + a2 * (Q[0] * o2 + Q[1] * s2), i2.g = n2 + a2 * (Q[2] * o2 + Q[3] * s2), i2.b = n2 + a2 * (Q[4] * o2 + Q[5] * s2), r2 !== void 0 && (i2.alpha = r2), i2;
}, _o = (e26, t2) => {
  if (e26.h === void 0 || t2.h === void 0 || !e26.s || !t2.s) return 0;
  let n2 = Z(e26.h), r2 = Z(t2.h), i2 = Math.sin((r2 - n2 + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e26.s * t2.s) * i2;
}, vo = (e26, t2) => {
  if (e26.h === void 0 || t2.h === void 0) return 0;
  let n2 = Z(e26.h), r2 = Z(t2.h);
  return Math.abs(r2 - n2) > 180 ? n2 - (r2 - 360 * Math.sign(r2 - n2)) : r2 - n2;
}, yo = (e26, t2) => {
  if (e26.h === void 0 || t2.h === void 0 || !e26.c || !t2.c) return 0;
  let n2 = Z(e26.h), r2 = Z(t2.h), i2 = Math.sin((r2 - n2 + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e26.c * t2.c) * i2;
}, bo = (e26) => {
  let t2 = e26.reduce((e27, t3) => {
    if (t3 !== void 0) {
      let n3 = t3 * Math.PI / 180;
      e27.sin += Math.sin(n3), e27.cos += Math.cos(n3);
    }
    return e27;
  }, { sin: 0, cos: 0 }), n2 = Math.atan2(t2.sin, t2.cos) * 180 / Math.PI;
  return n2 < 0 ? 360 + n2 : n2;
}, xo = { mode: `cubehelix`, channels: [`h`, `s`, `l`, `alpha`], parse: [`--cubehelix`], serialize: `--cubehelix`, ranges: { h: [0, 360], s: [0, 4.614], l: [0, 1] }, fromMode: { rgb: ho }, toMode: { rgb: go }, interpolate: { h: { use: Y, fixup: co }, s: Y, l: Y, alpha: { use: Y, fixup: X } }, difference: { h: _o }, average: { h: bo } }, So = ({ l: e26, a: t2, b: n2, alpha: r2 }, i2 = `lch`) => {
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let a2 = Math.sqrt(t2 * t2 + n2 * n2), o2 = { mode: i2, l: e26, c: a2 };
  return a2 && (o2.h = Z(Math.atan2(n2, t2) * 180 / Math.PI)), r2 !== void 0 && (o2.alpha = r2), o2;
}, Co = ({ l: e26, c: t2, h: n2, alpha: r2 }, i2 = `lab`) => {
  n2 === void 0 && (n2 = 0);
  let a2 = { mode: i2, l: e26, a: t2 ? t2 * Math.cos(n2 / 180 * Math.PI) : 0, b: t2 ? t2 * Math.sin(n2 / 180 * Math.PI) : 0 };
  return r2 !== void 0 && (a2.alpha = r2), a2;
}, wo = 29 ** 3 / 3 ** 3, To = 6 ** 3 / 29 ** 3, $ = { X: 0.3457 / 0.3585, Y: 1, Z: 0.2958 / 0.3585 }, Eo = { X: 0.3127 / 0.329, Y: 1, Z: 0.3583 / 0.329 }, Do = (e26) => e26 ** 3 > To ? e26 ** 3 : (116 * e26 - 16) / wo, Oo = ({ l: e26, a: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = (e26 + 16) / 116, a2 = t2 / 500 + i2, o2 = i2 - n2 / 200, s2 = { mode: `xyz65`, x: Do(a2) * Eo.X, y: Do(i2) * Eo.Y, z: Do(o2) * Eo.Z };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, ko = (e26) => ao(Oo(e26)), Ao = (e26) => e26 > To ? Math.cbrt(e26) : (wo * e26 + 16) / 116, jo = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Ao(e26 / Eo.X), a2 = Ao(t2 / Eo.Y), o2 = Ao(n2 / Eo.Z), s2 = { mode: `lab65`, l: 116 * a2 - 16, a: 500 * (i2 - a2), b: 200 * (a2 - o2) };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, Mo = (e26) => {
  let t2 = jo(no(e26));
  return e26.r === e26.b && e26.b === e26.g && (t2.a = t2.b = 0), t2;
}, No = 26 / 180 * Math.PI, Po = Math.cos(No), Fo = Math.sin(No), Io = 100 / Math.log(139 / 100), Lo = ({ l: e26, c: t2, h: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = { mode: `lab65`, l: (Math.exp(e26 * 1 / Io) - 1) / 39e-4 }, a2 = (Math.exp(0.0435 * t2 * 1 * 1) - 1) / 0.075, o2 = a2 * Math.cos(n2 / 180 * Math.PI - No), s2 = a2 * Math.sin(n2 / 180 * Math.PI - No);
  return i2.a = o2 * Po - s2 / 0.83 * Fo, i2.b = o2 * Fo + s2 / 0.83 * Po, r2 !== void 0 && (i2.alpha = r2), i2;
}, Ro = ({ l: e26, a: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = t2 * Po + n2 * Fo, a2 = 0.83 * (n2 * Po - t2 * Fo), o2 = Math.sqrt(i2 * i2 + a2 * a2), s2 = { mode: `dlch`, l: Io / 1 * Math.log(1 + 39e-4 * e26), c: Math.log(1 + 0.075 * o2) / (0.0435 * 1 * 1) };
  return s2.c && (s2.h = Z((Math.atan2(a2, i2) + No) / Math.PI * 180)), r2 !== void 0 && (s2.alpha = r2), s2;
}, zo = (e26) => Lo(So(e26, `dlch`)), Bo = (e26) => Co(Ro(e26), `dlab`), Vo = { mode: `dlab`, parse: [`--din99o-lab`], serialize: `--din99o-lab`, toMode: { lab65: zo, rgb: (e26) => ko(zo(e26)) }, fromMode: { lab65: Bo, rgb: (e26) => Bo(Mo(e26)) }, channels: [`l`, `a`, `b`, `alpha`], ranges: { l: [0, 100], a: [-40.09, 45.501], b: [-40.469, 44.344] }, interpolate: { l: Y, a: Y, b: Y, alpha: { use: Y, fixup: X } } }, Ho = { mode: `dlch`, parse: [`--din99o-lch`], serialize: `--din99o-lch`, toMode: { lab65: Lo, dlab: (e26) => Co(e26, `dlab`), rgb: (e26) => ko(Lo(e26)) }, fromMode: { lab65: Ro, dlab: (e26) => So(e26, `dlch`), rgb: (e26) => Ro(Mo(e26)) }, channels: [`l`, `c`, `h`, `alpha`], ranges: { l: [0, 100], c: [0, 51.484], h: [0, 360] }, interpolate: { l: Y, c: Y, h: { use: Y, fixup: co }, alpha: { use: Y, fixup: X } }, difference: { h: yo }, average: { h: bo } };
function Uo({ h: e26, s: t2, i: n2, alpha: r2 }) {
  e26 = Z(e26 === void 0 ? 0 : e26), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.abs(e26 / 60 % 2 - 1), a2;
  switch (Math.floor(e26 / 60)) {
    case 0:
      a2 = { r: n2 * (1 + t2 * (3 / (2 - i2) - 1)), g: n2 * (1 + t2 * (3 * (1 - i2) / (2 - i2) - 1)), b: n2 * (1 - t2) };
      break;
    case 1:
      a2 = { r: n2 * (1 + t2 * (3 * (1 - i2) / (2 - i2) - 1)), g: n2 * (1 + t2 * (3 / (2 - i2) - 1)), b: n2 * (1 - t2) };
      break;
    case 2:
      a2 = { r: n2 * (1 - t2), g: n2 * (1 + t2 * (3 / (2 - i2) - 1)), b: n2 * (1 + t2 * (3 * (1 - i2) / (2 - i2) - 1)) };
      break;
    case 3:
      a2 = { r: n2 * (1 - t2), g: n2 * (1 + t2 * (3 * (1 - i2) / (2 - i2) - 1)), b: n2 * (1 + t2 * (3 / (2 - i2) - 1)) };
      break;
    case 4:
      a2 = { r: n2 * (1 + t2 * (3 * (1 - i2) / (2 - i2) - 1)), g: n2 * (1 - t2), b: n2 * (1 + t2 * (3 / (2 - i2) - 1)) };
      break;
    case 5:
      a2 = { r: n2 * (1 + t2 * (3 / (2 - i2) - 1)), g: n2 * (1 - t2), b: n2 * (1 + t2 * (3 * (1 - i2) / (2 - i2) - 1)) };
      break;
    default:
      a2 = { r: n2 * (1 - t2), g: n2 * (1 - t2), b: n2 * (1 - t2) };
  }
  return a2.mode = `rgb`, r2 !== void 0 && (a2.alpha = r2), a2;
}
function Wo({ r: e26, g: t2, b: n2, alpha: r2 }) {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.max(e26, t2, n2), a2 = Math.min(e26, t2, n2), o2 = { mode: `hsi`, s: e26 + t2 + n2 === 0 ? 0 : 1 - 3 * a2 / (e26 + t2 + n2), i: (e26 + t2 + n2) / 3 };
  return i2 - a2 !== 0 && (o2.h = (i2 === e26 ? (t2 - n2) / (i2 - a2) + (t2 < n2) * 6 : i2 === t2 ? (n2 - e26) / (i2 - a2) + 2 : (e26 - t2) / (i2 - a2) + 4) * 60), r2 !== void 0 && (o2.alpha = r2), o2;
}
var Go = { mode: `hsi`, toMode: { rgb: Uo }, parse: [`--hsi`], serialize: `--hsi`, fromMode: { rgb: Wo }, channels: [`h`, `s`, `i`, `alpha`], ranges: { h: [0, 360] }, gamut: `rgb`, interpolate: { h: { use: Y, fixup: co }, s: Y, i: Y, alpha: { use: Y, fixup: X } }, difference: { h: _o }, average: { h: bo } };
function Ko({ h: e26, s: t2, l: n2, alpha: r2 }) {
  e26 = Z(e26 === void 0 ? 0 : e26), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = n2 + t2 * (n2 < 0.5 ? n2 : 1 - n2), a2 = i2 - (i2 - n2) * 2 * Math.abs(e26 / 60 % 2 - 1), o2;
  switch (Math.floor(e26 / 60)) {
    case 0:
      o2 = { r: i2, g: a2, b: 2 * n2 - i2 };
      break;
    case 1:
      o2 = { r: a2, g: i2, b: 2 * n2 - i2 };
      break;
    case 2:
      o2 = { r: 2 * n2 - i2, g: i2, b: a2 };
      break;
    case 3:
      o2 = { r: 2 * n2 - i2, g: a2, b: i2 };
      break;
    case 4:
      o2 = { r: a2, g: 2 * n2 - i2, b: i2 };
      break;
    case 5:
      o2 = { r: i2, g: 2 * n2 - i2, b: a2 };
      break;
    default:
      o2 = { r: 2 * n2 - i2, g: 2 * n2 - i2, b: 2 * n2 - i2 };
  }
  return o2.mode = `rgb`, r2 !== void 0 && (o2.alpha = r2), o2;
}
function qo({ r: e26, g: t2, b: n2, alpha: r2 }) {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.max(e26, t2, n2), a2 = Math.min(e26, t2, n2), o2 = { mode: `hsl`, s: i2 === a2 ? 0 : (i2 - a2) / (1 - Math.abs(i2 + a2 - 1)), l: 0.5 * (i2 + a2) };
  return i2 - a2 !== 0 && (o2.h = (i2 === e26 ? (t2 - n2) / (i2 - a2) + (t2 < n2) * 6 : i2 === t2 ? (n2 - e26) / (i2 - a2) + 2 : (e26 - t2) / (i2 - a2) + 4) * 60), r2 !== void 0 && (o2.alpha = r2), o2;
}
var Jo = (e26, t2) => {
  switch (t2) {
    case `deg`:
      return +e26;
    case `rad`:
      return e26 / Math.PI * 180;
    case `grad`:
      return e26 / 10 * 9;
    case `turn`:
      return e26 * 360;
  }
}, Yo = RegExp(`^hsla?\\(\\s*${_a}${va}${ma}${va}${ma}\\s*(?:,\\s*${ha}\\s*)?\\)$`), Xo = (e26) => {
  let t2 = e26.match(Yo);
  if (!t2) return;
  let n2 = { mode: `hsl` };
  return t2[3] === void 0 ? t2[1] !== void 0 && t2[2] !== void 0 && (n2.h = Jo(t2[1], t2[2])) : n2.h = +t2[3], t2[4] !== void 0 && (n2.s = Math.min(Math.max(0, t2[4] / 100), 1)), t2[5] !== void 0 && (n2.l = Math.min(Math.max(0, t2[5] / 100), 1)), t2[6] === void 0 ? t2[7] !== void 0 && (n2.alpha = Math.max(0, Math.min(1, +t2[7]))) : n2.alpha = Math.max(0, Math.min(1, t2[6] / 100)), n2;
};
function Zo(e26, t2) {
  if (!t2 || t2[0] !== `hsl` && t2[0] !== `hsla`) return;
  let n2 = { mode: `hsl` }, [, r2, i2, a2, o2] = t2;
  if (r2.type !== q.None) {
    if (r2.type === q.Percentage) return;
    n2.h = r2.value;
  }
  if (i2.type !== q.None) {
    if (i2.type === q.Hue) return;
    n2.s = i2.value / 100;
  }
  if (a2.type !== q.None) {
    if (a2.type === q.Hue) return;
    n2.l = a2.value / 100;
  }
  return o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var Qo = { mode: `hsl`, toMode: { rgb: Ko }, fromMode: { rgb: qo }, channels: [`h`, `s`, `l`, `alpha`], ranges: { h: [0, 360] }, gamut: `rgb`, parse: [Zo, Xo], serialize: (e26) => `hsl(${e26.h === void 0 ? `none` : e26.h} ${e26.s === void 0 ? `none` : e26.s * 100 + `%`} ${e26.l === void 0 ? `none` : e26.l * 100 + `%`}${e26.alpha < 1 ? ` / ${e26.alpha}` : ``})`, interpolate: { h: { use: Y, fixup: co }, s: Y, l: Y, alpha: { use: Y, fixup: X } }, difference: { h: _o }, average: { h: bo } };
function $o({ h: e26, s: t2, v: n2, alpha: r2 }) {
  e26 = Z(e26 === void 0 ? 0 : e26), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.abs(e26 / 60 % 2 - 1), a2;
  switch (Math.floor(e26 / 60)) {
    case 0:
      a2 = { r: n2, g: n2 * (1 - t2 * i2), b: n2 * (1 - t2) };
      break;
    case 1:
      a2 = { r: n2 * (1 - t2 * i2), g: n2, b: n2 * (1 - t2) };
      break;
    case 2:
      a2 = { r: n2 * (1 - t2), g: n2, b: n2 * (1 - t2 * i2) };
      break;
    case 3:
      a2 = { r: n2 * (1 - t2), g: n2 * (1 - t2 * i2), b: n2 };
      break;
    case 4:
      a2 = { r: n2 * (1 - t2 * i2), g: n2 * (1 - t2), b: n2 };
      break;
    case 5:
      a2 = { r: n2, g: n2 * (1 - t2), b: n2 * (1 - t2 * i2) };
      break;
    default:
      a2 = { r: n2 * (1 - t2), g: n2 * (1 - t2), b: n2 * (1 - t2) };
  }
  return a2.mode = `rgb`, r2 !== void 0 && (a2.alpha = r2), a2;
}
function es({ r: e26, g: t2, b: n2, alpha: r2 }) {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.max(e26, t2, n2), a2 = Math.min(e26, t2, n2), o2 = { mode: `hsv`, s: i2 === 0 ? 0 : 1 - a2 / i2, v: i2 };
  return i2 - a2 !== 0 && (o2.h = (i2 === e26 ? (t2 - n2) / (i2 - a2) + (t2 < n2) * 6 : i2 === t2 ? (n2 - e26) / (i2 - a2) + 2 : (e26 - t2) / (i2 - a2) + 4) * 60), r2 !== void 0 && (o2.alpha = r2), o2;
}
var ts = { mode: `hsv`, toMode: { rgb: $o }, parse: [`--hsv`], serialize: `--hsv`, fromMode: { rgb: es }, channels: [`h`, `s`, `v`, `alpha`], ranges: { h: [0, 360] }, gamut: `rgb`, interpolate: { h: { use: Y, fixup: co }, s: Y, v: Y, alpha: { use: Y, fixup: X } }, difference: { h: _o }, average: { h: bo } };
function ns({ h: e26, w: t2, b: n2, alpha: r2 }) {
  if (t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0), t2 + n2 > 1) {
    let e27 = t2 + n2;
    t2 /= e27, n2 /= e27;
  }
  return $o({ h: e26, s: n2 === 1 ? 1 : 1 - t2 / (1 - n2), v: 1 - n2, alpha: r2 });
}
function rs(e26) {
  let t2 = es(e26);
  if (t2 === void 0) return;
  let n2 = t2.s === void 0 ? 0 : t2.s, r2 = t2.v === void 0 ? 0 : t2.v, i2 = { mode: `hwb`, w: (1 - n2) * r2, b: 1 - r2 };
  return t2.h !== void 0 && (i2.h = t2.h), t2.alpha !== void 0 && (i2.alpha = t2.alpha), i2;
}
function is(e26, t2) {
  if (!t2 || t2[0] !== `hwb`) return;
  let n2 = { mode: `hwb` }, [, r2, i2, a2, o2] = t2;
  if (r2.type !== q.None) {
    if (r2.type === q.Percentage) return;
    n2.h = r2.value;
  }
  if (i2.type !== q.None) {
    if (i2.type === q.Hue) return;
    n2.w = i2.value / 100;
  }
  if (a2.type !== q.None) {
    if (a2.type === q.Hue) return;
    n2.b = a2.value / 100;
  }
  return o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var as = { mode: `hwb`, toMode: { rgb: ns }, fromMode: { rgb: rs }, channels: [`h`, `w`, `b`, `alpha`], ranges: { h: [0, 360] }, gamut: `rgb`, parse: [is], serialize: (e26) => `hwb(${e26.h === void 0 ? `none` : e26.h} ${e26.w === void 0 ? `none` : e26.w * 100 + `%`} ${e26.b === void 0 ? `none` : e26.b * 100 + `%`}${e26.alpha < 1 ? ` / ${e26.alpha}` : ``})`, interpolate: { h: { use: Y, fixup: co }, w: Y, b: Y, alpha: { use: Y, fixup: X } }, difference: { h: vo }, average: { h: bo } }, os = 0.1593017578125, ss = 78.84375, cs = 0.8359375, ls = 18.8515625, us = 18.6875;
function ds(e26) {
  if (e26 < 0) return 0;
  let t2 = e26 ** (1 / ss);
  return 1e4 * (Math.max(0, t2 - cs) / (ls - us * t2)) ** (1 / os);
}
function fs(e26) {
  if (e26 < 0) return 0;
  let t2 = (e26 / 1e4) ** os;
  return ((cs + ls * t2) / (1 + us * t2)) ** +ss;
}
var ps = (e26) => Math.max(e26 / 203, 0), ms = ({ i: e26, t: t2, p: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = ds(e26 + 0.008609037037932761 * t2 + 0.11102962500302593 * n2), a2 = ds(e26 - 0.00860903703793275 * t2 - 0.11102962500302599 * n2), o2 = ds(e26 + 0.5600313357106791 * t2 - 0.32062717498731885 * n2), s2 = { mode: `xyz65`, x: ps(2.070152218389422 * i2 - 1.3263473389671556 * a2 + 0.2066510476294051 * o2), y: ps(0.3647385209748074 * i2 + 0.680566024947227 * a2 - 0.0453045459220346 * o2), z: ps(-0.049747207535812 * i2 - 0.0492609666966138 * a2 + 1.1880659249923042 * o2) };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, hs = (e26 = 0) => Math.max(e26 * 203, 0), gs = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  let i2 = hs(e26), a2 = hs(t2), o2 = hs(n2), s2 = fs(0.3592832590121217 * i2 + 0.6976051147779502 * a2 - 0.0358915932320289 * o2), c2 = fs(-0.1920808463704995 * i2 + 1.1004767970374323 * a2 + 0.0753748658519118 * o2), l2 = fs(0.0070797844607477 * i2 + 0.0748396662186366 * a2 + 0.8433265453898765 * o2), u2 = { mode: `itp`, i: 0.5 * s2 + 0.5 * c2, t: 1.61376953125 * s2 - 3.323486328125 * c2 + 1.709716796875 * l2, p: 4.378173828125 * s2 - 4.24560546875 * c2 - 0.132568359375 * l2 };
  return r2 !== void 0 && (u2.alpha = r2), u2;
}, _s = { mode: `itp`, channels: [`i`, `t`, `p`, `alpha`], parse: [`--ictcp`], serialize: `--ictcp`, toMode: { xyz65: ms, rgb: (e26) => ao(ms(e26)) }, fromMode: { xyz65: gs, rgb: (e26) => gs(no(e26)) }, ranges: { i: [0, 0.581], t: [-0.369, 0.272], p: [-0.164, 0.331] }, interpolate: { i: Y, t: Y, p: Y, alpha: { use: Y, fixup: X } } }, vs = 134.03437499999998, ys = 16295499532821565e-27, bs = (e26) => {
  if (e26 < 0) return 0;
  let t2 = (e26 / 1e4) ** os;
  return ((cs + ls * t2) / (1 + us * t2)) ** +vs;
}, xs = (e26 = 0) => Math.max(e26 * 203, 0), Ss = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 = xs(e26), t2 = xs(t2), n2 = xs(n2);
  let i2 = 1.15 * e26 - 0.15 * n2, a2 = 0.66 * t2 + 0.34 * e26, o2 = bs(0.41478972 * i2 + 0.579999 * a2 + 0.014648 * n2), s2 = bs(-0.20151 * i2 + 1.120649 * a2 + 0.0531008 * n2), c2 = bs(-0.0166008 * i2 + 0.2648 * a2 + 0.6684799 * n2), l2 = (o2 + s2) / 2, u2 = { mode: `jab`, j: 0.44 * l2 / (1 - 0.56 * l2) - ys, a: 3.524 * o2 - 4.066708 * s2 + 0.542708 * c2, b: 0.199076 * o2 + 1.096799 * s2 - 1.295875 * c2 };
  return r2 !== void 0 && (u2.alpha = r2), u2;
}, Cs = 134.03437499999998, ws = 16295499532821565e-27, Ts = (e26) => {
  if (e26 < 0) return 0;
  let t2 = e26 ** (1 / Cs);
  return 1e4 * ((cs - t2) / (us * t2 - ls)) ** (1 / os);
}, Es = (e26) => e26 / 203, Ds = ({ j: e26, a: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = (e26 + ws) / (0.44 + 0.56 * (e26 + ws)), a2 = Ts(i2 + 0.13860504 * t2 + 0.058047316 * n2), o2 = Ts(i2 - 0.13860504 * t2 - 0.058047316 * n2), s2 = Ts(i2 - 0.096019242 * t2 - 0.8118919 * n2), c2 = { mode: `xyz65`, x: Es(1.661373024652174 * a2 - 0.914523081304348 * o2 + 0.23136208173913045 * s2), y: Es(-0.3250758611844533 * a2 + 1.571847026732543 * o2 - 0.21825383453227928 * s2), z: Es(-0.090982811 * a2 - 0.31272829 * o2 + 1.5227666 * s2) };
  return r2 !== void 0 && (c2.alpha = r2), c2;
}, Os = (e26) => {
  let t2 = Ss(no(e26));
  return e26.r === e26.b && e26.b === e26.g && (t2.a = t2.b = 0), t2;
}, ks = (e26) => ao(Ds(e26)), As = { mode: `jab`, channels: [`j`, `a`, `b`, `alpha`], parse: [`--jzazbz`], serialize: `--jzazbz`, fromMode: { rgb: Os, xyz65: Ss }, toMode: { rgb: ks, xyz65: Ds }, ranges: { j: [0, 0.222], a: [-0.109, 0.129], b: [-0.185, 0.134] }, interpolate: { j: Y, a: Y, b: Y, alpha: { use: Y, fixup: X } } }, js = ({ j: e26, a: t2, b: n2, alpha: r2 }) => {
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.sqrt(t2 * t2 + n2 * n2), a2 = { mode: `jch`, j: e26, c: i2 };
  return i2 && (a2.h = Z(Math.atan2(n2, t2) * 180 / Math.PI)), r2 !== void 0 && (a2.alpha = r2), a2;
}, Ms = ({ j: e26, c: t2, h: n2, alpha: r2 }) => {
  n2 === void 0 && (n2 = 0);
  let i2 = { mode: `jab`, j: e26, a: t2 ? t2 * Math.cos(n2 / 180 * Math.PI) : 0, b: t2 ? t2 * Math.sin(n2 / 180 * Math.PI) : 0 };
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, Ns = { mode: `jch`, parse: [`--jzczhz`], serialize: `--jzczhz`, toMode: { jab: Ms, rgb: (e26) => ks(Ms(e26)) }, fromMode: { rgb: (e26) => js(Os(e26)), jab: js }, channels: [`j`, `c`, `h`, `alpha`], ranges: { j: [0, 0.221], c: [0, 0.19], h: [0, 360] }, interpolate: { h: { use: Y, fixup: co }, c: Y, j: Y, alpha: { use: Y, fixup: X } }, difference: { h: yo }, average: { h: bo } }, Ps = 29 ** 3 / 3 ** 3, Fs = 6 ** 3 / 29 ** 3, Is = (e26) => e26 ** 3 > Fs ? e26 ** 3 : (116 * e26 - 16) / Ps, Ls = ({ l: e26, a: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = (e26 + 16) / 116, a2 = t2 / 500 + i2, o2 = i2 - n2 / 200, s2 = { mode: `xyz50`, x: Is(a2) * $.X, y: Is(i2) * $.Y, z: Is(o2) * $.Z };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, Rs = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = io({ r: e26 * 3.1341359569958707 - t2 * 1.6173863321612538 - 0.4906619460083532 * n2, g: e26 * -0.978795502912089 + t2 * 1.916254567259524 + 0.03344273116131949 * n2, b: e26 * 0.07195537988411677 - t2 * 0.2289768264158322 + 1.405386058324125 * n2 });
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, zs = (e26) => Rs(Ls(e26)), Bs = (e26) => {
  let { r: t2, g: n2, b: r2, alpha: i2 } = to(e26), a2 = { mode: `xyz50`, x: 0.436065742824811 * t2 + 0.3851514688337912 * n2 + 0.14307845442264197 * r2, y: 0.22249319175623702 * t2 + 0.7168870538238823 * n2 + 0.06061979053616537 * r2, z: 0.013923904500943465 * t2 + 0.09708128566574634 * n2 + 0.7140993584005155 * r2 };
  return i2 !== void 0 && (a2.alpha = i2), a2;
}, Vs = (e26) => e26 > Fs ? Math.cbrt(e26) : (Ps * e26 + 16) / 116, Hs = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Vs(e26 / $.X), a2 = Vs(t2 / $.Y), o2 = Vs(n2 / $.Z), s2 = { mode: `lab`, l: 116 * a2 - 16, a: 500 * (i2 - a2), b: 200 * (a2 - o2) };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, Us = (e26) => {
  let t2 = Hs(Bs(e26));
  return e26.r === e26.b && e26.b === e26.g && (t2.a = t2.b = 0), t2;
};
function Ws(e26, t2) {
  if (!t2 || t2[0] !== `lab`) return;
  let n2 = { mode: `lab` }, [, r2, i2, a2, o2] = t2;
  if (!(r2.type === q.Hue || i2.type === q.Hue || a2.type === q.Hue)) return r2.type !== q.None && (n2.l = Math.min(Math.max(0, r2.value), 100)), i2.type !== q.None && (n2.a = i2.type === q.Number ? i2.value : i2.value * 125 / 100), a2.type !== q.None && (n2.b = a2.type === q.Number ? a2.value : a2.value * 125 / 100), o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var Gs = { mode: `lab`, toMode: { xyz50: Ls, rgb: zs }, fromMode: { xyz50: Hs, rgb: Us }, channels: [`l`, `a`, `b`, `alpha`], ranges: { l: [0, 100], a: [-125, 125], b: [-125, 125] }, parse: [Ws], serialize: (e26) => `lab(${e26.l === void 0 ? `none` : e26.l} ${e26.a === void 0 ? `none` : e26.a} ${e26.b === void 0 ? `none` : e26.b}${e26.alpha < 1 ? ` / ${e26.alpha}` : ``})`, interpolate: { l: Y, a: Y, b: Y, alpha: { use: Y, fixup: X } } }, Ks = { ...Gs, mode: `lab65`, parse: [`--lab-d65`], serialize: `--lab-d65`, toMode: { xyz65: Oo, rgb: ko }, fromMode: { xyz65: jo, rgb: Mo }, ranges: { l: [0, 100], a: [-125, 125], b: [-125, 125] } };
function qs(e26, t2) {
  if (!t2 || t2[0] !== `lch`) return;
  let n2 = { mode: `lch` }, [, r2, i2, a2, o2] = t2;
  if (r2.type !== q.None) {
    if (r2.type === q.Hue) return;
    n2.l = Math.min(Math.max(0, r2.value), 100);
  }
  if (i2.type !== q.None && (n2.c = Math.max(0, i2.type === q.Number ? i2.value : i2.value * 150 / 100)), a2.type !== q.None) {
    if (a2.type === q.Percentage) return;
    n2.h = a2.value;
  }
  return o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var Js = { mode: `lch`, toMode: { lab: Co, rgb: (e26) => zs(Co(e26)) }, fromMode: { rgb: (e26) => So(Us(e26)), lab: So }, channels: [`l`, `c`, `h`, `alpha`], ranges: { l: [0, 100], c: [0, 150], h: [0, 360] }, parse: [qs], serialize: (e26) => `lch(${e26.l === void 0 ? `none` : e26.l} ${e26.c === void 0 ? `none` : e26.c} ${e26.h === void 0 ? `none` : e26.h}${e26.alpha < 1 ? ` / ${e26.alpha}` : ``})`, interpolate: { h: { use: Y, fixup: co }, c: Y, l: Y, alpha: { use: Y, fixup: X } }, difference: { h: yo }, average: { h: bo } }, Ys = { ...Js, mode: `lch65`, parse: [`--lch-d65`], serialize: `--lch-d65`, toMode: { lab65: (e26) => Co(e26, `lab65`), rgb: (e26) => ko(Co(e26, `lab65`)) }, fromMode: { rgb: (e26) => So(Mo(e26), `lch65`), lab65: (e26) => So(e26, `lch65`) }, ranges: { l: [0, 100], c: [0, 150], h: [0, 360] } }, Xs = ({ l: e26, u: t2, v: n2, alpha: r2 }) => {
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.sqrt(t2 * t2 + n2 * n2), a2 = { mode: `lchuv`, l: e26, c: i2 };
  return i2 && (a2.h = Z(Math.atan2(n2, t2) * 180 / Math.PI)), r2 !== void 0 && (a2.alpha = r2), a2;
}, Zs = ({ l: e26, c: t2, h: n2, alpha: r2 }) => {
  n2 === void 0 && (n2 = 0);
  let i2 = { mode: `luv`, l: e26, u: t2 ? t2 * Math.cos(n2 / 180 * Math.PI) : 0, v: t2 ? t2 * Math.sin(n2 / 180 * Math.PI) : 0 };
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, Qs = (e26, t2, n2) => 4 * e26 / (e26 + 15 * t2 + 3 * n2), $s = (e26, t2, n2) => 9 * t2 / (e26 + 15 * t2 + 3 * n2), ec = Qs($.X, $.Y, $.Z), tc = $s($.X, $.Y, $.Z), nc = (e26) => e26 <= Fs ? Ps * e26 : 116 * Math.cbrt(e26) - 16, rc = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = nc(t2 / $.Y), a2 = Qs(e26, t2, n2), o2 = $s(e26, t2, n2);
  !isFinite(a2) || !isFinite(o2) ? i2 = a2 = o2 = 0 : (a2 = 13 * i2 * (a2 - ec), o2 = 13 * i2 * (o2 - tc));
  let s2 = { mode: `luv`, l: i2, u: a2, v: o2 };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, ic = (e26, t2, n2) => 4 * e26 / (e26 + 15 * t2 + 3 * n2), ac = (e26, t2, n2) => 9 * t2 / (e26 + 15 * t2 + 3 * n2), oc = ic($.X, $.Y, $.Z), sc = ac($.X, $.Y, $.Z), cc = ({ l: e26, u: t2, v: n2, alpha: r2 }) => {
  if (e26 === void 0 && (e26 = 0), e26 === 0) return { mode: `xyz50`, x: 0, y: 0, z: 0 };
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = t2 / (13 * e26) + oc, a2 = n2 / (13 * e26) + sc, o2 = $.Y * (e26 <= 8 ? e26 / Ps : ((e26 + 16) / 116) ** 3), s2 = { mode: `xyz50`, x: 9 * i2 * o2 / (4 * a2), y: o2, z: o2 * (12 - 3 * i2 - 20 * a2) / (4 * a2) };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, lc = { mode: `lchuv`, toMode: { luv: Zs, rgb: (e26) => Rs(cc(Zs(e26))) }, fromMode: { rgb: (e26) => Xs(rc(Bs(e26))), luv: Xs }, channels: [`l`, `c`, `h`, `alpha`], parse: [`--lchuv`], serialize: `--lchuv`, ranges: { l: [0, 100], c: [0, 176.956], h: [0, 360] }, interpolate: { h: { use: Y, fixup: co }, c: Y, l: Y, alpha: { use: Y, fixup: X } }, difference: { h: yo }, average: { h: bo } }, uc = { ...Ya, mode: `lrgb`, toMode: { rgb: io }, fromMode: { rgb: to }, parse: [`srgb-linear`], serialize: `srgb-linear` }, dc = { mode: `luv`, toMode: { xyz50: cc, rgb: (e26) => Rs(cc(e26)) }, fromMode: { xyz50: rc, rgb: (e26) => rc(Bs(e26)) }, channels: [`l`, `u`, `v`, `alpha`], parse: [`--luv`], serialize: `--luv`, ranges: { l: [0, 100], u: [-84.936, 175.042], v: [-125.882, 87.243] }, interpolate: { l: Y, u: Y, v: Y, alpha: { use: Y, fixup: X } } }, fc = ({ r: e26, g: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = Math.cbrt(0.412221469470763 * e26 + 0.5363325372617348 * t2 + 0.0514459932675022 * n2), a2 = Math.cbrt(0.2119034958178252 * e26 + 0.6806995506452344 * t2 + 0.1073969535369406 * n2), o2 = Math.cbrt(0.0883024591900564 * e26 + 0.2817188391361215 * t2 + 0.6299787016738222 * n2), s2 = { mode: `oklab`, l: 0.210454268309314 * i2 + 0.7936177747023054 * a2 - 0.0040720430116193 * o2, a: 1.9779985324311684 * i2 - 2.42859224204858 * a2 + 0.450593709617411 * o2, b: 0.0259040424655478 * i2 + 0.7827717124575296 * a2 - 0.8086757549230774 * o2 };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, pc = (e26) => {
  let t2 = fc(to(e26));
  return e26.r === e26.b && e26.b === e26.g && (t2.a = t2.b = 0), t2;
}, mc = ({ l: e26, a: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = (e26 + 0.3963377773761749 * t2 + 0.2158037573099136 * n2) ** 3, a2 = (e26 - 0.1055613458156586 * t2 - 0.0638541728258133 * n2) ** 3, o2 = (e26 - 0.0894841775298119 * t2 - 1.2914855480194092 * n2) ** 3, s2 = { mode: `lrgb`, r: 4.076741636075957 * i2 - 3.3077115392580616 * a2 + 0.2309699031821044 * o2, g: -1.2684379732850317 * i2 + 2.6097573492876887 * a2 - 0.3413193760026573 * o2, b: -0.0041960761386756 * i2 - 0.7034186179359362 * a2 + 1.7076146940746117 * o2 };
  return r2 !== void 0 && (s2.alpha = r2), s2;
}, hc = (e26) => io(mc(e26));
function gc(e26) {
  let t2 = 0.206, n2 = 0.03, r2 = (1 + t2) / (1 + n2);
  return 0.5 * (r2 * e26 - t2 + Math.sqrt((r2 * e26 - t2) * (r2 * e26 - t2) + 4 * n2 * r2 * e26));
}
function _c(e26) {
  let t2 = 0.206, n2 = 0.03;
  return (1 + t2) / (1 + n2), (e26 * e26 + t2 * e26) / (1.170873786407767 * (e26 + n2));
}
function vc(e26, t2) {
  let n2, r2, i2, a2, o2, s2, c2, l2;
  -1.88170328 * e26 - 0.80936493 * t2 > 1 ? (n2 = 1.19086277, r2 = 1.76576728, i2 = 0.59662641, a2 = 0.75515197, o2 = 0.56771245, s2 = 4.0767416621, c2 = -3.3077115913, l2 = 0.2309699292) : 1.81444104 * e26 - 1.19445276 * t2 > 1 ? (n2 = 0.73956515, r2 = -0.45954404, i2 = 0.08285427, a2 = 0.1254107, o2 = 0.14503204, s2 = -1.2684380046, c2 = 2.6097574011, l2 = -0.3413193965) : (n2 = 1.35733652, r2 = -915799e-8, i2 = -1.1513021, a2 = -0.50559606, o2 = 692167e-8, s2 = -0.0041960863, c2 = -0.7034186147, l2 = 1.707614701);
  let u2 = n2 + r2 * e26 + i2 * t2 + a2 * e26 * e26 + o2 * e26 * t2, d2 = 0.3963377774 * e26 + 0.2158037573 * t2, f2 = -0.1055613458 * e26 - 0.0638541728 * t2, p2 = -0.0894841775 * e26 - 1.291485548 * t2;
  {
    let e27 = 1 + u2 * d2, t3 = 1 + u2 * f2, n3 = 1 + u2 * p2, r3 = e27 * e27 * e27, i3 = t3 * t3 * t3, a3 = n3 * n3 * n3, o3 = 3 * d2 * e27 * e27, m2 = 3 * f2 * t3 * t3, h2 = 3 * p2 * n3 * n3, g2 = 6 * d2 * d2 * e27, ee2 = 6 * f2 * f2 * t3, _2 = 6 * p2 * p2 * n3, te2 = s2 * r3 + c2 * i3 + l2 * a3, v2 = s2 * o3 + c2 * m2 + l2 * h2, ne2 = s2 * g2 + c2 * ee2 + l2 * _2;
    u2 -= te2 * v2 / (v2 * v2 - 0.5 * te2 * ne2);
  }
  return u2;
}
function yc(e26, t2) {
  let n2 = vc(e26, t2), r2 = mc({ l: 1, a: n2 * e26, b: n2 * t2 }), i2 = Math.cbrt(1 / Math.max(r2.r, r2.g, r2.b));
  return [i2, i2 * n2];
}
function bc(e26, t2, n2, r2, i2, a2 = null) {
  a2 || (a2 = yc(e26, t2));
  let o2;
  if ((n2 - i2) * a2[1] - (a2[0] - i2) * r2 <= 0) o2 = a2[1] * i2 / (r2 * a2[0] + a2[1] * (i2 - n2));
  else {
    o2 = a2[1] * (i2 - 1) / (r2 * (a2[0] - 1) + a2[1] * (i2 - n2));
    {
      let a3 = n2 - i2, s2 = r2, c2 = 0.3963377774 * e26 + 0.2158037573 * t2, l2 = -0.1055613458 * e26 - 0.0638541728 * t2, u2 = -0.0894841775 * e26 - 1.291485548 * t2, d2 = a3 + s2 * c2, f2 = a3 + s2 * l2, p2 = a3 + s2 * u2;
      {
        let e27 = i2 * (1 - o2) + o2 * n2, t3 = o2 * r2, a4 = e27 + t3 * c2, s3 = e27 + t3 * l2, m2 = e27 + t3 * u2, h2 = a4 * a4 * a4, g2 = s3 * s3 * s3, ee2 = m2 * m2 * m2, _2 = 3 * d2 * a4 * a4, te2 = 3 * f2 * s3 * s3, v2 = 3 * p2 * m2 * m2, ne2 = 6 * d2 * d2 * a4, re2 = 6 * f2 * f2 * s3, ie2 = 6 * p2 * p2 * m2, ae2 = 4.0767416621 * h2 - 3.3077115913 * g2 + 0.2309699292 * ee2 - 1, oe2 = 4.0767416621 * _2 - 3.3077115913 * te2 + 0.2309699292 * v2, se2 = 4.0767416621 * ne2 - 3.3077115913 * re2 + 0.2309699292 * ie2, ce2 = oe2 / (oe2 * oe2 - 0.5 * ae2 * se2), le2 = -ae2 * ce2, ue2 = -1.2684380046 * h2 + 2.6097574011 * g2 - 0.3413193965 * ee2 - 1, de2 = -1.2684380046 * _2 + 2.6097574011 * te2 - 0.3413193965 * v2, fe2 = -1.2684380046 * ne2 + 2.6097574011 * re2 - 0.3413193965 * ie2, pe2 = de2 / (de2 * de2 - 0.5 * ue2 * fe2), y2 = -ue2 * pe2, me2 = -0.0041960863 * h2 - 0.7034186147 * g2 + 1.707614701 * ee2 - 1, he2 = -0.0041960863 * _2 - 0.7034186147 * te2 + 1.707614701 * v2, ge2 = -0.0041960863 * ne2 - 0.7034186147 * re2 + 1.707614701 * ie2, _e2 = he2 / (he2 * he2 - 0.5 * me2 * ge2), ve2 = -me2 * _e2;
        le2 = ce2 >= 0 ? le2 : 1e6, y2 = pe2 >= 0 ? y2 : 1e6, ve2 = _e2 >= 0 ? ve2 : 1e6, o2 += Math.min(le2, Math.min(y2, ve2));
      }
    }
  }
  return o2;
}
function xc(e26, t2, n2 = null) {
  n2 || (n2 = yc(e26, t2));
  let r2 = n2[0], i2 = n2[1];
  return [i2 / r2, i2 / (1 - r2)];
}
function Sc(e26, t2, n2) {
  let r2 = yc(t2, n2), i2 = bc(t2, n2, e26, 1, e26, r2), a2 = xc(t2, n2, r2), o2 = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n2 + t2 * (-2.19557347 + 1.75198401 * n2 + t2 * (-2.13704948 - 10.02301043 * n2 + t2 * (-4.24894561 + 5.38770819 * n2 + 4.69891013 * t2)))), s2 = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n2 + t2 * (0.40370612 + 0.90148123 * n2 + t2 * (-0.27087943 + 0.6122399 * n2 + t2 * (299215e-8 - 0.45399568 * n2 - 0.14661872 * t2)))), c2 = i2 / Math.min(e26 * a2[0], (1 - e26) * a2[1]), l2 = e26 * o2, u2 = (1 - e26) * s2, d2 = 0.9 * c2 * Math.sqrt(Math.sqrt(1 / (1 / (l2 * l2 * l2 * l2) + 1 / (u2 * u2 * u2 * u2))));
  return l2 = e26 * 0.4, u2 = (1 - e26) * 0.8, [Math.sqrt(1 / (1 / (l2 * l2) + 1 / (u2 * u2))), d2, i2];
}
function Cc(e26) {
  let t2 = e26.l === void 0 ? 0 : e26.l, n2 = e26.a === void 0 ? 0 : e26.a, r2 = e26.b === void 0 ? 0 : e26.b, i2 = { mode: `okhsl`, l: gc(t2) };
  e26.alpha !== void 0 && (i2.alpha = e26.alpha);
  let a2 = Math.sqrt(n2 * n2 + r2 * r2);
  if (!a2) return i2.s = 0, i2;
  let [o2, s2, c2] = Sc(t2, n2 / a2, r2 / a2), l2;
  if (a2 < s2) {
    let e27 = 0.8 * o2, t3 = 1 - e27 / s2;
    l2 = (a2 - 0) / (e27 + t3 * (a2 - 0)) * 0.8;
  } else {
    let e27 = s2, t3 = 0.2 * s2 * s2 * 1.25 * 1.25 / o2, n3 = 1 - t3 / (c2 - s2);
    l2 = 0.8 + 0.2 * ((a2 - e27) / (t3 + n3 * (a2 - e27)));
  }
  return l2 && (i2.s = l2, i2.h = Z(Math.atan2(r2, n2) * 180 / Math.PI)), i2;
}
function wc(e26) {
  let t2 = e26.h === void 0 ? 0 : e26.h, n2 = e26.s === void 0 ? 0 : e26.s, r2 = e26.l === void 0 ? 0 : e26.l, i2 = { mode: `oklab`, l: _c(r2) };
  if (e26.alpha !== void 0 && (i2.alpha = e26.alpha), !n2 || r2 === 1) return i2.a = i2.b = 0, i2;
  let a2 = Math.cos(t2 / 180 * Math.PI), o2 = Math.sin(t2 / 180 * Math.PI), [s2, c2, l2] = Sc(i2.l, a2, o2), u2, d2, f2, p2;
  n2 < 0.8 ? (u2 = 1.25 * n2, d2 = 0, f2 = 0.8 * s2, p2 = 1 - f2 / c2) : (u2 = 5 * (n2 - 0.8), d2 = c2, f2 = 0.2 * c2 * c2 * 1.25 * 1.25 / s2, p2 = 1 - f2 / (l2 - c2));
  let m2 = d2 + u2 * f2 / (1 - p2 * u2);
  return i2.a = m2 * a2, i2.b = m2 * o2, i2;
}
var Tc = { ...Qo, mode: `okhsl`, channels: [`h`, `s`, `l`, `alpha`], parse: [`--okhsl`], serialize: `--okhsl`, fromMode: { oklab: Cc, rgb: (e26) => Cc(pc(e26)) }, toMode: { oklab: wc, rgb: (e26) => hc(wc(e26)) } };
function Ec(e26) {
  let t2 = e26.l === void 0 ? 0 : e26.l, n2 = e26.a === void 0 ? 0 : e26.a, r2 = e26.b === void 0 ? 0 : e26.b, i2 = Math.sqrt(n2 * n2 + r2 * r2), a2 = i2 ? n2 / i2 : 1, o2 = i2 ? r2 / i2 : 1, [s2, c2] = xc(a2, o2), l2 = 0.5, u2 = 1 - l2 / s2, d2 = c2 / (i2 + t2 * c2), f2 = d2 * t2, p2 = d2 * i2, m2 = _c(f2), h2 = p2 * m2 / f2, g2 = mc({ l: m2, a: a2 * h2, b: o2 * h2 }), ee2 = Math.cbrt(1 / Math.max(g2.r, g2.g, g2.b, 0));
  t2 /= ee2, i2 = i2 / ee2 * gc(t2) / t2, t2 = gc(t2);
  let _2 = { mode: `okhsv`, s: i2 ? (l2 + c2) * p2 / (c2 * l2 + c2 * u2 * p2) : 0, v: t2 ? t2 / f2 : 0 };
  return _2.s && (_2.h = Z(Math.atan2(r2, n2) * 180 / Math.PI)), e26.alpha !== void 0 && (_2.alpha = e26.alpha), _2;
}
function Dc(e26) {
  let t2 = { mode: `oklab` };
  e26.alpha !== void 0 && (t2.alpha = e26.alpha);
  let n2 = e26.h === void 0 ? 0 : e26.h, r2 = e26.s === void 0 ? 0 : e26.s, i2 = e26.v === void 0 ? 0 : e26.v, a2 = Math.cos(n2 / 180 * Math.PI), o2 = Math.sin(n2 / 180 * Math.PI), [s2, c2] = xc(a2, o2), l2 = 0.5, u2 = 1 - l2 / s2, d2 = 1 - r2 * l2 / (l2 + c2 - c2 * u2 * r2), f2 = r2 * c2 * l2 / (l2 + c2 - c2 * u2 * r2), p2 = _c(d2), m2 = f2 * p2 / d2, h2 = mc({ l: p2, a: a2 * m2, b: o2 * m2 }), g2 = Math.cbrt(1 / Math.max(h2.r, h2.g, h2.b, 0)), ee2 = _c(i2 * d2), _2 = f2 * ee2 / d2;
  return t2.l = ee2 * g2, t2.a = _2 * a2 * g2, t2.b = _2 * o2 * g2, t2;
}
var Oc = { ...ts, mode: `okhsv`, channels: [`h`, `s`, `v`, `alpha`], parse: [`--okhsv`], serialize: `--okhsv`, fromMode: { oklab: Ec, rgb: (e26) => Ec(pc(e26)) }, toMode: { oklab: Dc, rgb: (e26) => hc(Dc(e26)) } };
function kc(e26, t2) {
  if (!t2 || t2[0] !== `oklab`) return;
  let n2 = { mode: `oklab` }, [, r2, i2, a2, o2] = t2;
  if (!(r2.type === q.Hue || i2.type === q.Hue || a2.type === q.Hue)) return r2.type !== q.None && (n2.l = Math.min(Math.max(0, r2.type === q.Number ? r2.value : r2.value / 100), 1)), i2.type !== q.None && (n2.a = i2.type === q.Number ? i2.value : i2.value * 0.4 / 100), a2.type !== q.None && (n2.b = a2.type === q.Number ? a2.value : a2.value * 0.4 / 100), o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var Ac = { ...Gs, mode: `oklab`, toMode: { lrgb: mc, rgb: hc }, fromMode: { lrgb: fc, rgb: pc }, ranges: { l: [0, 1], a: [-0.4, 0.4], b: [-0.4, 0.4] }, parse: [kc], serialize: (e26) => `oklab(${e26.l === void 0 ? `none` : e26.l} ${e26.a === void 0 ? `none` : e26.a} ${e26.b === void 0 ? `none` : e26.b}${e26.alpha < 1 ? ` / ${e26.alpha}` : ``})` };
function jc(e26, t2) {
  if (!t2 || t2[0] !== `oklch`) return;
  let n2 = { mode: `oklch` }, [, r2, i2, a2, o2] = t2;
  if (r2.type !== q.None) {
    if (r2.type === q.Hue) return;
    n2.l = Math.min(Math.max(0, r2.type === q.Number ? r2.value : r2.value / 100), 1);
  }
  if (i2.type !== q.None && (n2.c = Math.max(0, i2.type === q.Number ? i2.value : i2.value * 0.4 / 100)), a2.type !== q.None) {
    if (a2.type === q.Percentage) return;
    n2.h = a2.value;
  }
  return o2.type !== q.None && (n2.alpha = Math.min(1, Math.max(0, o2.type === q.Number ? o2.value : o2.value / 100))), n2;
}
var Mc = { ...Js, mode: `oklch`, toMode: { oklab: (e26) => Co(e26, `oklab`), rgb: (e26) => hc(Co(e26, `oklab`)) }, fromMode: { rgb: (e26) => So(pc(e26), `oklch`), oklab: (e26) => So(e26, `oklch`) }, parse: [jc], serialize: (e26) => `oklch(${e26.l === void 0 ? `none` : e26.l} ${e26.c === void 0 ? `none` : e26.c} ${e26.h === void 0 ? `none` : e26.h}${e26.alpha < 1 ? ` / ${e26.alpha}` : ``})`, ranges: { l: [0, 1], c: [0, 0.4], h: [0, 360] } }, Nc = (e26) => {
  let { r: t2, g: n2, b: r2, alpha: i2 } = to(e26), a2 = { mode: `xyz65`, x: 0.486570948648216 * t2 + 0.265667693169093 * n2 + 0.1982172852343625 * r2, y: 0.2289745640697487 * t2 + 0.6917385218365062 * n2 + 0.079286914093745 * r2, z: 0 * t2 + 0.0451133818589026 * n2 + 1.043944368900976 * r2 };
  return i2 !== void 0 && (a2.alpha = i2), a2;
}, Pc = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = io({ r: e26 * 2.4934969119414263 - t2 * 0.9313836179191242 - 0.402710784450717 * n2, g: e26 * -0.8294889695615749 + t2 * 1.7626640603183465 + 0.0236246858419436 * n2, b: e26 * 0.0358458302437845 - t2 * 0.0761723892680418 + 0.9568845240076871 * n2 }, `p3`);
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, Fc = { ...Ya, mode: `p3`, parse: [`display-p3`], serialize: `display-p3`, fromMode: { rgb: (e26) => Pc(no(e26)), xyz65: Pc }, toMode: { rgb: (e26) => ao(Nc(e26)), xyz65: Nc } }, Ic = (e26) => {
  let t2 = Math.abs(e26);
  return t2 >= 1 / 512 ? Math.sign(e26) * t2 ** (1 / 1.8) : 16 * e26;
}, Lc = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = { mode: `prophoto`, r: Ic(e26 * 1.3457868816471585 - t2 * 0.2555720873797946 - 0.0511018649755453 * n2), g: Ic(e26 * -0.5446307051249019 + t2 * 1.5082477428451466 + 0.0205274474364214 * n2), b: Ic(e26 * 0 + t2 * 0 + 1.2119675456389452 * n2) };
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, Rc = (e26 = 0) => {
  let t2 = Math.abs(e26);
  return t2 >= 16 / 512 ? Math.sign(e26) * t2 ** 1.8 : e26 / 16;
}, zc = (e26) => {
  let t2 = Rc(e26.r), n2 = Rc(e26.g), r2 = Rc(e26.b), i2 = { mode: `xyz50`, x: 0.7977666449006423 * t2 + 0.1351812974005331 * n2 + 0.0313477341283922 * r2, y: 0.2880748288194013 * t2 + 0.7118352342418731 * n2 + 899369387256e-16 * r2, z: 0 * t2 + 0 * n2 + 0.8251046025104602 * r2 };
  return e26.alpha !== void 0 && (i2.alpha = e26.alpha), i2;
}, Bc = { ...Ya, mode: `prophoto`, parse: [`prophoto-rgb`], serialize: `prophoto-rgb`, fromMode: { xyz50: Lc, rgb: (e26) => Lc(Bs(e26)) }, toMode: { xyz50: zc, rgb: (e26) => Rs(zc(e26)) } }, Vc = 1.09929682680944, Hc = 0.018053968510807, Uc = (e26) => {
  let t2 = Math.abs(e26);
  return t2 > Hc ? (Math.sign(e26) || 1) * (Vc * t2 ** 0.45 - (Vc - 1)) : 4.5 * e26;
}, Wc = ({ x: e26, y: t2, z: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = { mode: `rec2020`, r: Uc(e26 * 1.7166511879712683 - t2 * 0.3556707837763925 - 0.2533662813736599 * n2), g: Uc(e26 * -0.6666843518324893 + t2 * 1.6164812366349395 + 0.0157685458139111 * n2), b: Uc(e26 * 0.0176398574453108 - t2 * 0.0427706132578085 + 0.9421031212354739 * n2) };
  return r2 !== void 0 && (i2.alpha = r2), i2;
}, Gc = 1.09929682680944, Kc = 0.018053968510807, qc = (e26 = 0) => {
  let t2 = Math.abs(e26);
  return t2 < Kc * 4.5 ? e26 / 4.5 : (Math.sign(e26) || 1) * ((t2 + Gc - 1) / Gc) ** (1 / 0.45);
}, Jc = (e26) => {
  let t2 = qc(e26.r), n2 = qc(e26.g), r2 = qc(e26.b), i2 = { mode: `xyz65`, x: 0.6369580483012911 * t2 + 0.1446169035862083 * n2 + 0.1688809751641721 * r2, y: 0.262700212011267 * t2 + 0.6779980715188708 * n2 + 0.059301716469862 * r2, z: 0 * t2 + 0.0280726930490874 * n2 + 1.0609850577107909 * r2 };
  return e26.alpha !== void 0 && (i2.alpha = e26.alpha), i2;
}, Yc = { ...Ya, mode: `rec2020`, fromMode: { xyz65: Wc, rgb: (e26) => Wc(no(e26)) }, toMode: { xyz65: Jc, rgb: (e26) => ao(Jc(e26)) }, parse: [`rec2020`], serialize: `rec2020` }, Xc = 0.0037930732552754493, Zc = Math.cbrt(Xc), Qc = (e26) => Math.cbrt(e26) - Zc, $c = (e26) => {
  let { r: t2, g: n2, b: r2, alpha: i2 } = to(e26), a2 = Qc(0.3 * t2 + 0.622 * n2 + 0.078 * r2 + Xc), o2 = Qc(0.23 * t2 + 0.692 * n2 + 0.078 * r2 + Xc), s2 = Qc(0.2434226892454782 * t2 + 0.2047674442449682 * n2 + 0.5518098665095535 * r2 + Xc), c2 = { mode: `xyb`, x: (a2 - o2) / 2, y: (a2 + o2) / 2, b: s2 - (a2 + o2) / 2 };
  return i2 !== void 0 && (c2.alpha = i2), c2;
}, el = (e26) => (e26 + Zc) ** 3, tl = { mode: `xyb`, channels: [`x`, `y`, `b`, `alpha`], parse: [`--xyb`], serialize: `--xyb`, toMode: { rgb: ({ x: e26, y: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = el(e26 + t2) - Xc, a2 = el(t2 - e26) - Xc, o2 = el(n2 + t2) - Xc, s2 = io({ r: 11.031566904639861 * i2 - 9.866943908131562 * a2 - 0.16462299650829934 * o2, g: -3.2541473810744237 * i2 + 4.418770377582723 * a2 - 0.16462299650829934 * o2, b: -3.6588512867136815 * i2 + 2.7129230459360922 * a2 + 1.9459282407775895 * o2 });
  return r2 !== void 0 && (s2.alpha = r2), s2;
} }, fromMode: { rgb: $c }, ranges: { x: [-0.0154, 0.0281], y: [0, 0.8453], b: [-0.2778, 0.388] }, interpolate: { x: Y, y: Y, b: Y, alpha: { use: Y, fixup: X } } }, nl = { mode: `xyz50`, parse: [`xyz-d50`], serialize: `xyz-d50`, toMode: { rgb: Rs, lab: Hs }, fromMode: { rgb: Bs, lab: Ls }, channels: [`x`, `y`, `z`, `alpha`], ranges: { x: [0, 0.964], y: [0, 0.999], z: [0, 0.825] }, interpolate: { x: Y, y: Y, z: Y, alpha: { use: Y, fixup: X } } }, rl = { mode: `xyz65`, toMode: { rgb: ao, xyz50: (e26) => {
  let { x: t2, y: n2, z: r2, alpha: i2 } = e26;
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0), r2 === void 0 && (r2 = 0);
  let a2 = { mode: `xyz50`, x: 1.0479298208405488 * t2 + 0.0229467933410191 * n2 - 0.0501922295431356 * r2, y: 0.0296278156881593 * t2 + 0.990434484573249 * n2 - 0.0170738250293851 * r2, z: -0.0092430581525912 * t2 + 0.0150551448965779 * n2 + 0.7518742899580008 * r2 };
  return i2 !== void 0 && (a2.alpha = i2), a2;
} }, fromMode: { rgb: no, xyz50: (e26) => {
  let { x: t2, y: n2, z: r2, alpha: i2 } = e26;
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0), r2 === void 0 && (r2 = 0);
  let a2 = { mode: `xyz65`, x: 0.9554734527042182 * t2 - 0.0230985368742614 * n2 + 0.0632593086610217 * r2, y: -0.0283697069632081 * t2 + 1.0099954580058226 * n2 + 0.021041398966943 * r2, z: 0.0123140016883199 * t2 - 0.0205076964334779 * n2 + 1.3303659366080753 * r2 };
  return i2 !== void 0 && (a2.alpha = i2), a2;
} }, ranges: { x: [0, 0.95], y: [0, 1], z: [0, 1.088] }, channels: [`x`, `y`, `z`, `alpha`], parse: [`xyz`, `xyz-d65`], serialize: `xyz-d65`, interpolate: { x: Y, y: Y, z: Y, alpha: { use: Y, fixup: X } } }, il = { mode: `yiq`, toMode: { rgb: ({ y: e26, i: t2, q: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = { mode: `rgb`, r: e26 + 0.95608445 * t2 + 0.6208885 * n2, g: e26 - 0.27137664 * t2 - 0.6486059 * n2, b: e26 - 1.10561724 * t2 + 1.70250126 * n2 };
  return r2 !== void 0 && (i2.alpha = r2), i2;
} }, fromMode: { rgb: ({ r: e26, g: t2, b: n2, alpha: r2 }) => {
  e26 === void 0 && (e26 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0);
  let i2 = { mode: `yiq`, y: 0.29889531 * e26 + 0.58662247 * t2 + 0.11448223 * n2, i: 0.59597799 * e26 - 0.2741761 * t2 - 0.32180189 * n2, q: 0.21147017 * e26 - 0.52261711 * t2 + 0.31114694 * n2 };
  return r2 !== void 0 && (i2.alpha = r2), i2;
} }, channels: [`y`, `i`, `q`, `alpha`], parse: [`--yiq`], serialize: `--yiq`, ranges: { i: [-0.595, 0.595], q: [-0.522, 0.522] }, interpolate: { y: Y, i: Y, q: Y, alpha: { use: Y, fixup: X } } }, al = (e26, t2) => Math.round(e26 * (t2 = 10 ** t2)) / t2;
/* @__PURE__ */ ((e26 = 4) => (t2) => typeof t2 == `number` ? al(t2, e26) : t2)(2);
var ol = (e26) => Math.max(0, Math.min(1, e26 || 0)), sl = (e26) => Math.round(ol(e26) * 255), cl = Ca(`rgb`), ll = (e26) => {
  if (e26 === void 0) return;
  let t2 = sl(e26.r), n2 = sl(e26.g), r2 = sl(e26.b);
  return `#` + (1 << 24 | t2 << 16 | n2 << 8 | r2).toString(16).slice(1);
}, ul = (e26) => {
  if (e26 === void 0) return;
  let t2 = sl(e26.alpha === void 0 ? 1 : e26.alpha);
  return ll(e26) + (256 | t2).toString(16).slice(1);
}, dl = (e26) => ll(cl(e26)), fl = (e26) => ul(cl(e26)), pl = (e26) => e26 !== void 0 && (e26.r === void 0 || e26.r >= 0 && e26.r <= 1) && (e26.g === void 0 || e26.g >= 0 && e26.g <= 1) && (e26.b === void 0 || e26.b >= 0 && e26.b <= 1);
function ml(e26 = `rgb`) {
  let { gamut: t2 } = ka(e26);
  if (!t2) return (e27) => true;
  let n2 = Ca(typeof t2 == `string` ? t2 : e26);
  return (e27) => pl(n2(e27));
}
K(oo), K(xo), K(Vo), K(Ho), K(Go), K(Qo), K(ts), K(as), K(_s), K(As), K(Ns), K(Gs), K(Ks), K(Js), K(Ys), K(lc), K(uc), K(dc), K(Tc), K(Oc), K(Ac), K(Mc), K(Fc), K(Bc), K(Yc), K(Ya), K(tl), K(nl), K(rl), K(il), m();
function hl(e26, t2) {
  let n2 = [], r2 = [];
  t2.showPixelEquivalents && r2.push(ca({ comments: n2, rootFontSize: t2.rootFontSize })), r2.push(Tl({ comments: n2 }));
  try {
    l(r2).process(e26, { from: void 0 }).css;
  } catch {
    return e26;
  }
  return aa(e26, n2);
}
var gl = t(((e26, t2) => {
  t2.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
})), _l = e(gl()), vl = (function(e26) {
  return e26[e26.Continue = 0] = `Continue`, e26[e26.Skip = 1] = `Skip`, e26[e26.Stop = 2] = `Stop`, e26[e26.Replace = 3] = `Replace`, e26[e26.ReplaceSkip = 4] = `ReplaceSkip`, e26[e26.ReplaceStop = 5] = `ReplaceStop`, e26;
})(vl || {});
vl.Continue, vl.Skip, vl.Stop;
function yl(e26) {
  return typeof e26 == `string` ? (e26 = e26.toLowerCase(), e26 === `transparent` ? `transparent` : e26 === `currentcolor` ? `currentColor` : null) : null;
}
function bl(e26) {
  if (typeof e26 != `string`) return null;
  let t2 = e26.trim();
  return yl(t2) || (!/^\s*(?:rgba?|hsla?|(?:ok)?(?:lab|lch))\s*\([^)]+\)\s*$/.test(t2) && !/^\s*#[0-9a-f]+\s*$/i.test(t2) && !Object.keys(_l.default).includes(t2) ? null : Sl(t2));
}
function xl(e26) {
  return e26.alpha === void 0 || e26.alpha === 1 ? dl(e26) : fl(e26);
}
function Sl(e26) {
  try {
    return Wa(e26) ?? null;
  } catch (t2) {
    return console.error(`Error parsing color`, e26), console.error(t2), null;
  }
}
/* @__PURE__ */ new Set([...Object.keys(_l.default).map((e26) => e26.toLowerCase()), `transparent`, `currentcolor`]);
var Cl = [`rgb`, `rgba`, `hsl`, `hsla`, `lch`, `lab`, `oklch`, `oklab`];
function wl(e26) {
  let t2 = bl(e26);
  return !t2 || typeof t2 == `string` || !ml(`rgb`)(t2) ? e26 : xl(t2);
}
var Tl = Object.assign(({ comments: e26 }) => ({ postcssPlugin: `plugin`, Declaration(t2) {
  Cl.some((e27) => t2.value.includes(e27)) && (0, ri.default)(t2.value).walk((n2) => {
    if (n2.type !== `function` || n2.value === `var`) return true;
    if (!Cl.includes(n2.value)) return false;
    let r2 = n2.nodes.filter((e27) => e27.type === `word`).map((e27) => e27.value);
    if (r2.length < 3) return false;
    let i2 = `${n2.value}(${r2.join(` `)})`, a2 = wl(i2);
    return a2 === i2 || e26.push({ index: t2.source.start.offset + `${t2.prop}${t2.raws.between}`.length + n2.sourceEndIndex, value: a2 }), false;
  });
} }), { postcss: true });
function El(e26, t2, n2) {
  if (!t2.designSystem) return e26;
  let r2 = [], i2 = [];
  return e26 = ct(e26, (e27) => {
    let a2 = ni(st(e27.value, { replace({ name: e28 }) {
      if (!e28.startsWith(`--`)) return null;
      let n3 = lt(t2.designSystem, e28);
      return n3 === null ? null : (n3 = ct(n3, (e29) => ni(e29.value)), n3);
    } }));
    if (e27.value === a2 || !a2) return null;
    i2.push(e27.range);
    let o2 = oa(a2, n2.rootFontSize, false);
    if (o2 !== a2) return r2.push({ index: e27.range.end + 1, value: `${a2} = ${o2}` }), null;
    let s2 = wl(a2);
    return s2 === a2 ? (r2.push({ index: e27.range.end + 1, value: a2 }), null) : (r2.push({ index: e27.range.end + 1, value: `${a2} = ${s2}` }), null);
  }), e26 = st(e26, { recursive: false, replace({ name: e27, range: a2 }) {
    if (!e27.startsWith(`--`)) return null;
    for (let e28 of i2) if (e28.start <= a2.start && e28.end >= a2.end) return null;
    let o2 = lt(t2.designSystem, e27);
    if (o2 === null) return null;
    let s2 = oa(o2, n2.rootFontSize, false);
    if (s2 !== o2) return r2.push({ index: a2.end + 1, value: `${o2} = ${s2}` }), null;
    let c2 = wl(o2);
    return c2 === o2 ? (o2 = ct(o2, (e28) => {
      let t3 = ni(e28.value);
      return !t3 || t3 === e28.value ? null : `calc(${e28.value}) \u2248 ${t3}`;
    }), r2.push({ index: a2.end + 1, value: o2 }), null) : (r2.push({ index: a2.end + 1, value: `${o2} = ${c2}` }), null);
  } }), aa(e26, r2);
}
function Dl(e26) {
  return e26.getClassList().map((e27) => ({ kind: `utility`, selector: e27[0] }));
}
function Ol(e26) {
  return e26.getVariants().map((e27) => ({ kind: `variant`, selector: e27.name }));
}
function kl() {
  return [{ kind: `utility`, selector: `flex` }];
}
function Al(e26) {
  return e26.sort(([, e27], [, t2]) => e27 === t2 ? 0 : e27 === null ? -1 : t2 === null ? 1 : jl(e27 - t2)).map(([e27]) => e27);
}
function jl(e26) {
  return e26 > 0n ? 1 : e26 === 0n ? 0 : -1;
}
async function Ml(e26) {
  return Array.from(e26.theme.entries()).map((e27, t2) => {
    let n2 = e27[0], r2 = false, i2 = null, a2 = e27[1].value;
    if (typeof a2 == `string` && a2.includes(`rem`)) {
      let e28 = parseFloat(a2);
      isNaN(e28) || (i2 = `${e28 * 16}px`, r2 = true);
    }
    return { key: n2, value: r2 ? i2 : a2, index: t2 };
  });
}
async function Nl(e26, t2) {
  return Al(e26.getClassOrder(t2));
}
function Pl(e26) {
  return { enabled: true, v4: true, designSystem: e26, features: [] };
}
function Fl(e26 = {}) {
  return { showPixelEquivalents: e26.showPixelEquivalents ?? true, rootFontSize: e26.rootFontSize ?? 16, inspectPort: null, emmetCompletions: true, includeLanguages: {}, classAttributes: [`class`], classFunctions: [], suggestions: true, hovers: true, codeLens: true, codeActions: true, validate: true, colorDecorators: true, lint: { cssConflict: `warning`, invalidApply: `error`, invalidScreen: `error`, invalidVariant: `error`, invalidConfigPath: `error`, invalidTailwindDirective: `error`, invalidSourceDirective: `error`, recommendedVariantOrder: `warning`, usedBlocklistedClass: `warning` }, experimental: { classRegex: [], configFile: null }, files: { exclude: [] } };
}
async function Il(e26, t2) {
  let n2 = e26.candidatesToCss(t2), r2 = Pl(e26), i2 = Fl({ showPixelEquivalents: true, rootFontSize: 16 });
  return n2 = n2.map((e27) => {
    if (!e27) return e27;
    let t3 = El(e27, r2, i2);
    return t3 = hl(t3, i2), t3;
  }), n2;
}
function Ll(e26) {
  return Dl(e26).concat(Ol(e26).concat(kl())).filter((e27) => e27.selector !== `*`).map((t2) => {
    let n2 = ot([t2.selector], e26).astNodes.flatMap((e27) => `nodes` in e27 ? e27.nodes : []), r2 = e26.candidatesToCss([t2.selector]).at(0);
    return r2 && (r2 = r2.replaceAll(/([0-9.]+)rem/g, (e27, t3) => `${parseFloat(t3) * 16}px`)), r2 = r2?.replaceAll(/\\/g, ``), { ...t2, declarations: n2?.filter((e27) => e27.kind === `declaration`), css: r2 };
  }).sort((e27, t2) => e27.selector.startsWith(`-`) && !t2.selector.startsWith(`-`) ? 1 : !e27.selector.startsWith(`-`) && t2.selector.startsWith(`-`) ? -1 : ne(e27.selector, t2.selector));
}
function Rl(e26, t2) {
  let n2 = typeof t2 == `number` ? t2.toString().length : 8;
  return (`0`.repeat(n2) + e26).slice(-n2);
}
export {
  Rl as a,
  _ as c,
  Ml as i,
  Il as n,
  Nl as o,
  Ll as r,
  gl as s,
  jl as t
};
