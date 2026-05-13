var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var e = class extends Error {
  constructor(e2, t2, n2, r2, i2) {
    super(`${e2}:${n2}:${r2}: ${t2}`);
    __publicField(this, "reason");
    __publicField(this, "filename");
    __publicField(this, "line");
    __publicField(this, "column");
    __publicField(this, "source");
    this.reason = t2, this.filename = e2, this.line = n2, this.column = r2, this.source = i2;
  }
}, t = class {
  constructor(e2, t2, n2) {
    __publicField(this, "start");
    __publicField(this, "end");
    __publicField(this, "source");
    this.start = e2, this.end = t2, this.source = n2;
  }
}, n;
(function(e2) {
  e2.stylesheet = `stylesheet`, e2.rule = `rule`, e2.declaration = `declaration`, e2.comment = `comment`, e2.container = `container`, e2.charset = `charset`, e2.document = `document`, e2.customMedia = `custom-media`, e2.fontFace = `font-face`, e2.host = `host`, e2.import = `import`, e2.keyframes = `keyframes`, e2.keyframe = `keyframe`, e2.layer = `layer`, e2.media = `media`, e2.namespace = `namespace`, e2.page = `page`, e2.startingStyle = `starting-style`, e2.supports = `supports`;
})(n || (n = {}));
var r = (e2, t2, n2) => {
  let r2 = n2, i2 = 1e4;
  do {
    let n3 = t2.map((t3) => e2.indexOf(t3, r2));
    n3.push(e2.indexOf(`\\`, r2));
    let a2 = n3.filter((e3) => e3 !== -1);
    if (a2.length === 0) return -1;
    let o2 = Math.min(...a2);
    if (e2[o2] !== `\\`) return o2;
    r2 = o2 + 2, i2--;
  } while (i2 > 0);
  throw Error(`Too many escaping`);
}, i = (e2, t2, n2) => {
  let a2 = n2, o2 = 1e4;
  do {
    let n3 = t2.map((t3) => e2.indexOf(t3, a2));
    n3.push(e2.indexOf(`(`, a2)), n3.push(e2.indexOf(`"`, a2)), n3.push(e2.indexOf(`'`, a2)), n3.push(e2.indexOf(`\\`, a2));
    let s2 = n3.filter((e3) => e3 !== -1);
    if (s2.length === 0) return -1;
    let c2 = Math.min(...s2);
    switch (e2[c2]) {
      case `\\`:
        a2 = c2 + 2;
        break;
      case `(`:
        {
          let t3 = i(e2, [`)`], c2 + 1);
          if (t3 === -1) return -1;
          a2 = t3 + 1;
        }
        break;
      case `"`:
        {
          let t3 = r(e2, [`"`], c2 + 1);
          if (t3 === -1) return -1;
          a2 = t3 + 1;
        }
        break;
      case `'`:
        {
          let t3 = r(e2, [`'`], c2 + 1);
          if (t3 === -1) return -1;
          a2 = t3 + 1;
        }
        break;
      default:
        return c2;
    }
    o2--;
  } while (o2 > 0);
  throw Error(`Too many escaping`);
}, a = /\/\*[^]*?(?:\*\/|$)/g;
function o(e2) {
  return e2 ? e2.trim() : ``;
}
function s(e2, t2) {
  let n2 = e2 && typeof e2.type == `string`, r2 = n2 ? e2 : t2;
  for (let t3 in e2) {
    let n3 = e2[t3];
    Array.isArray(n3) ? n3.forEach((e3) => {
      s(e3, r2);
    }) : n3 && typeof n3 == `object` && s(n3, r2);
  }
  return n2 && Object.defineProperty(e2, `parent`, { configurable: true, writable: true, enumerable: false, value: t2 || null }), e2;
}
var c = class {
  constructor(e2) {
    __publicField(this, "level", 0);
    __publicField(this, "indentation", `  `);
    __publicField(this, "compress", false);
    typeof e2?.indent == `string` && (this.indentation = e2?.indent), e2?.compress && (this.compress = true);
  }
  emit(e2, t2) {
    return e2;
  }
  indent(e2) {
    return this.level = this.level || 1, e2 ? (this.level += e2, ``) : Array(this.level).join(this.indentation);
  }
  visit(e2) {
    switch (e2.type) {
      case n.stylesheet:
        return this.stylesheet(e2);
      case n.rule:
        return this.rule(e2);
      case n.declaration:
        return this.declaration(e2);
      case n.comment:
        return this.comment(e2);
      case n.container:
        return this.container(e2);
      case n.charset:
        return this.charset(e2);
      case n.document:
        return this.document(e2);
      case n.customMedia:
        return this.customMedia(e2);
      case n.fontFace:
        return this.fontFace(e2);
      case n.host:
        return this.host(e2);
      case n.import:
        return this.import(e2);
      case n.keyframes:
        return this.keyframes(e2);
      case n.keyframe:
        return this.keyframe(e2);
      case n.layer:
        return this.layer(e2);
      case n.media:
        return this.media(e2);
      case n.namespace:
        return this.namespace(e2);
      case n.page:
        return this.page(e2);
      case n.startingStyle:
        return this.startingStyle(e2);
      case n.supports:
        return this.supports(e2);
    }
  }
  mapVisit(e2, t2) {
    let n2 = ``;
    t2 || (t2 = ``);
    for (let r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 += this.visit(e2[r2]), t2 && r2 < i2 - 1 && (n2 += this.emit(t2));
    return n2;
  }
  compile(e2) {
    return this.compress ? e2.stylesheet.rules.map(this.visit, this).join(``) : this.stylesheet(e2);
  }
  stylesheet(e2) {
    return this.mapVisit(e2.stylesheet.rules, `

`);
  }
  comment(e2) {
    return this.compress ? this.emit(``, e2.position) : this.emit(`${this.indent()}/*${e2.comment}*/`, e2.position);
  }
  container(e2) {
    return this.compress ? this.emit(`@container ${e2.container}`, e2.position) + this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : this.emit(`${this.indent()}@container ${e2.container}`, e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`
${this.indent(-1)}${this.indent()}}`);
  }
  layer(e2) {
    return this.compress ? this.emit(`@layer ${e2.layer}`, e2.position) + (e2.rules ? this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : `;`) : this.emit(`${this.indent()}@layer ${e2.layer}`, e2.position) + (e2.rules ? this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`
${this.indent(-1)}${this.indent()}}`) : `;`);
  }
  import(e2) {
    return this.emit(`@import ${e2.import};`, e2.position);
  }
  media(e2) {
    return this.compress ? this.emit(`@media ${e2.media}`, e2.position) + this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : this.emit(`${this.indent()}@media ${e2.media}`, e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`
${this.indent(-1)}${this.indent()}}`);
  }
  document(e2) {
    let t2 = `@${e2.vendor || ``}document ${e2.document}`;
    return this.compress ? this.emit(t2, e2.position) + this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : this.emit(t2, e2.position) + this.emit(`  {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`${this.indent(-1)}
}`);
  }
  charset(e2) {
    return this.emit(`@charset ${e2.charset};`, e2.position);
  }
  namespace(e2) {
    return this.emit(`@namespace ${e2.namespace};`, e2.position);
  }
  startingStyle(e2) {
    return this.compress ? this.emit(`@starting-style`, e2.position) + this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : this.emit(`${this.indent()}@starting-style`, e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`
${this.indent(-1)}${this.indent()}}`);
  }
  supports(e2) {
    return this.compress ? this.emit(`@supports ${e2.supports}`, e2.position) + this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : this.emit(`${this.indent()}@supports ${e2.supports}`, e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`
${this.indent(-1)}${this.indent()}}`);
  }
  keyframes(e2) {
    return this.compress ? this.emit(`@${e2.vendor || ``}keyframes ${e2.name}`, e2.position) + this.emit(`{`) + this.mapVisit(e2.keyframes) + this.emit(`}`) : this.emit(`@${e2.vendor || ``}keyframes ${e2.name}`, e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.keyframes, `
`) + this.emit(`${this.indent(-1)}}`);
  }
  keyframe(e2) {
    let t2 = e2.declarations;
    return this.compress ? this.emit(e2.values.join(`,`), e2.position) + this.emit(`{`) + this.mapVisit(t2) + this.emit(`}`) : this.emit(this.indent()) + this.emit(e2.values.join(`, `), e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(t2, `
`) + this.emit(`${this.indent(-1)}
${this.indent()}}
`);
  }
  page(e2) {
    if (this.compress) {
      let t3 = e2.selectors.length ? e2.selectors.join(`, `) : ``;
      return this.emit(`@page ${t3}`, e2.position) + this.emit(`{`) + this.mapVisit(e2.declarations) + this.emit(`}`);
    }
    let t2 = e2.selectors.length ? `${e2.selectors.join(`, `)} ` : ``;
    return this.emit(`@page ${t2}`, e2.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(e2.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
  }
  fontFace(e2) {
    return this.compress ? this.emit(`@font-face`, e2.position) + this.emit(`{`) + this.mapVisit(e2.declarations) + this.emit(`}`) : this.emit(`@font-face `, e2.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(e2.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
  }
  host(e2) {
    return this.compress ? this.emit(`@host`, e2.position) + this.emit(`{`) + this.mapVisit(e2.rules) + this.emit(`}`) : this.emit(`@host`, e2.position) + this.emit(` {
${this.indent(1)}`) + this.mapVisit(e2.rules, `

`) + this.emit(`${this.indent(-1)}
}`);
  }
  customMedia(e2) {
    return this.emit(`@custom-media ${e2.name} ${e2.media};`, e2.position);
  }
  rule(e2) {
    let t2 = e2.declarations;
    if (!t2.length) return ``;
    if (this.compress) return this.emit(e2.selectors.join(`,`), e2.position) + this.emit(`{`) + this.mapVisit(t2) + this.emit(`}`);
    let n2 = this.indent();
    return this.emit(e2.selectors.map((e3) => n2 + e3).join(`,
`), e2.position) + this.emit(` {
`) + this.emit(this.indent(1)) + this.mapVisit(t2, `
`) + this.emit(this.indent(-1)) + this.emit(`
${this.indent()}}`);
  }
  declaration(e2) {
    return this.compress ? this.emit(`${e2.property}:${e2.value}`, e2.position) + this.emit(`;`) : e2.property === `grid-template-areas` ? this.emit(this.indent()) + this.emit(e2.property + `: ` + e2.value.split(`
`).join(`
`.padEnd(22) + this.indent()), e2.position) + this.emit(`;`) : this.emit(this.indent()) + this.emit(`${e2.property}: ${e2.value}`, e2.position) + this.emit(`;`);
  }
}, l = (r2, c2) => {
  c2 || (c2 = {});
  let l2 = 1, u2 = 1;
  function d() {
    let e2 = { line: l2, column: u2 };
    return (n2) => (n2.position = new t(e2, { line: l2, column: u2 }, c2?.source || ``), v(), n2);
  }
  let f = [];
  function p(t2) {
    let n2 = new e(c2?.source || ``, t2, l2, u2, r2);
    if (!c2?.silent) throw n2;
    f.push(n2);
  }
  function m() {
    let e2 = /^{\s*/.exec(r2);
    return !!e2 && (_(e2), true);
  }
  function h() {
    let e2 = /^}/.exec(r2);
    return !!e2 && (_(e2), true);
  }
  function g() {
    let e2, t2 = [];
    for (v(), y(t2); r2.length && r2.charAt(0) !== `}` && (e2 = k() || A(), e2); ) t2.push(e2), y(t2);
    return t2;
  }
  function _(e2) {
    let t2 = e2[0];
    return (function(e3) {
      let t3 = e3.match(/\n/g);
      t3 && (l2 += t3.length);
      let n2 = e3.lastIndexOf(`
`);
      u2 = ~n2 ? e3.length - n2 : u2 + e3.length;
    })(t2), r2 = r2.slice(t2.length), e2;
  }
  function v() {
    let e2 = /^\s*/.exec(r2);
    e2 && _(e2);
  }
  function y(e2) {
    e2 || (e2 = []);
    let t2 = b();
    for (; t2; ) e2.push(t2), t2 = b();
    return e2;
  }
  function b() {
    let e2 = d();
    if (r2.charAt(0) !== `/` || r2.charAt(1) !== `*`) return;
    let t2 = /^\/\*[^]*?\*\//.exec(r2);
    return t2 ? (_(t2), e2({ type: n.comment, comment: t2[0].slice(2, -2) })) : p(`End of comment missing`);
  }
  function x() {
    let e2 = /^([^{]+)/.exec(r2);
    if (e2) return _(e2), ((e3, t2) => {
      let n2 = [], r3 = 0;
      for (; r3 < e3.length; ) {
        let a2 = i(e3, t2, r3);
        if (a2 === -1) return n2.push(e3.substring(r3)), n2;
        n2.push(e3.substring(r3, a2)), r3 = a2 + 1;
      }
      return n2;
    })(o(e2[0]).replace(a, ``), [`,`]).map((e3) => o(e3));
  }
  function S() {
    let e2 = d(), t2 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/.exec(r2);
    if (!t2) return;
    _(t2);
    let s2 = o(t2[0]), c3 = /^:\s*/.exec(r2);
    if (!c3) return p(`property missing ':'`);
    _(c3);
    let l3 = ``, u3 = i(r2, [`;`, `}`]);
    u3 !== -1 && (l3 = r2.substring(0, u3), _([l3]), l3 = o(l3).replace(a, ``));
    let f2 = e2({ type: n.declaration, property: s2.replace(a, ``), value: l3 }), m2 = /^[;\s]*/.exec(r2);
    return m2 && _(m2), f2;
  }
  function C() {
    let e2 = [];
    if (!m()) return p(`missing '{'`);
    y(e2);
    let t2 = S();
    for (; t2; ) e2.push(t2), y(e2), t2 = S();
    return h() ? e2 : p(`missing '}'`);
  }
  function w() {
    let e2 = [], t2 = d(), i2 = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/.exec(r2);
    for (; i2; ) {
      let t3 = _(i2);
      e2.push(t3[1]);
      let n2 = /^,\s*/.exec(r2);
      n2 && _(n2), i2 = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/.exec(r2);
    }
    if (e2.length) return t2({ type: n.keyframe, values: e2, declarations: C() || [] });
  }
  let T = O(`import`), E = O(`charset`), D = O(`namespace`);
  function O(e2) {
    let t2 = RegExp(`^@` + e2 + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
    return () => {
      let n2 = d(), i2 = t2.exec(r2);
      if (!i2) return;
      let a2 = _(i2), o2 = { type: e2 };
      return o2[e2] = a2[1].trim(), n2(o2);
    };
  }
  function k() {
    if (r2[0] === `@`) return (function() {
      let e2 = d(), t2 = /^@([-\w]+)?keyframes\s*/.exec(r2);
      if (!t2) return;
      let i2 = _(t2)[1], a2 = /^([-\w]+)\s*/.exec(r2);
      if (!a2) return p(`@keyframes missing name`);
      let o2 = _(a2)[1];
      if (!m()) return p(`@keyframes missing '{'`);
      let s2 = y(), c3 = w();
      for (; c3; ) s2.push(c3), s2 = s2.concat(y()), c3 = w();
      return h() ? e2({ type: n.keyframes, name: o2, vendor: i2, keyframes: s2 }) : p(`@keyframes missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@media *([^{]+)/.exec(r2);
      if (!t2) return;
      let i2 = o(_(t2)[1]);
      if (!m()) return p(`@media missing '{'`);
      let a2 = y().concat(g());
      return h() ? e2({ type: n.media, media: i2, rules: a2 }) : p(`@media missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@custom-media\s+(--\S+)\s+([^{;\s][^{;]*);/.exec(r2);
      if (!t2) return;
      let i2 = _(t2);
      return e2({ type: n.customMedia, name: o(i2[1]), media: o(i2[2]) });
    })() || (function() {
      let e2 = d(), t2 = /^@supports *([^{]+)/.exec(r2);
      if (!t2) return;
      let i2 = o(_(t2)[1]);
      if (!m()) return p(`@supports missing '{'`);
      let a2 = y().concat(g());
      return h() ? e2({ type: n.supports, supports: i2, rules: a2 }) : p(`@supports missing '}'`);
    })() || T() || E() || D() || (function() {
      let e2 = d(), t2 = /^@([-\w]+)?document *([^{]+)/.exec(r2);
      if (!t2) return;
      let i2 = _(t2), a2 = o(i2[1]), s2 = o(i2[2]);
      if (!m()) return p(`@document missing '{'`);
      let c3 = y().concat(g());
      return h() ? e2({ type: n.document, document: s2, vendor: a2, rules: c3 }) : p(`@document missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@page */.exec(r2);
      if (!t2) return;
      _(t2);
      let i2 = x() || [];
      if (!m()) return p(`@page missing '{'`);
      let a2 = y(), o2 = S();
      for (; o2; ) a2.push(o2), a2 = a2.concat(y()), o2 = S();
      return h() ? e2({ type: n.page, selectors: i2, declarations: a2 }) : p(`@page missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@host\s*/.exec(r2);
      if (!t2) return;
      if (_(t2), !m()) return p(`@host missing '{'`);
      let i2 = y().concat(g());
      return h() ? e2({ type: n.host, rules: i2 }) : p(`@host missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@font-face\s*/.exec(r2);
      if (!t2) return;
      if (_(t2), !m()) return p(`@font-face missing '{'`);
      let i2 = y(), a2 = S();
      for (; a2; ) i2.push(a2), i2 = i2.concat(y()), a2 = S();
      return h() ? e2({ type: n.fontFace, declarations: i2 }) : p(`@font-face missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@container *([^{]+)/.exec(r2);
      if (!t2) return;
      let i2 = o(_(t2)[1]);
      if (!m()) return p(`@container missing '{'`);
      let a2 = y().concat(g());
      return h() ? e2({ type: n.container, container: i2, rules: a2 }) : p(`@container missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@starting-style\s*/.exec(r2);
      if (!t2) return;
      if (_(t2), !m()) return p(`@starting-style missing '{'`);
      let i2 = y().concat(g());
      return h() ? e2({ type: n.startingStyle, rules: i2 }) : p(`@starting-style missing '}'`);
    })() || (function() {
      let e2 = d(), t2 = /^@layer *([^{;@]+)/.exec(r2);
      if (!t2) return;
      let i2 = o(_(t2)[1]);
      if (!m()) {
        let t3 = /^[;\s]*/.exec(r2);
        return t3 && _(t3), e2({ type: n.layer, layer: i2 });
      }
      let a2 = y().concat(g());
      return h() ? e2({ type: n.layer, layer: i2, rules: a2 }) : p(`@layer missing '}'`);
    })();
  }
  function A() {
    let e2 = d(), t2 = x();
    return t2 ? (y(), e2({ type: n.rule, selectors: t2, declarations: C() || [] })) : p(`selector missing`);
  }
  return s((function() {
    let e2 = g();
    return { type: n.stylesheet, stylesheet: { source: c2?.source, rules: e2, parsingErrors: f } };
  })());
}, u = (e2, t2) => new c(t2 || {}).compile(e2);
export {
  l as n,
  u as t
};
