var e = /* @__PURE__ */ new Map();
function t(t2) {
  var n2 = e.get(t2);
  n2 && n2.destroy();
}
function n(t2) {
  var n2 = e.get(t2);
  n2 && n2.update();
}
var r = null;
typeof window > `u` ? ((r = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, r.update = function(e2) {
  return e2;
}) : ((r = function(t2, n2) {
  return t2 && Array.prototype.forEach.call(t2.length ? t2 : [t2], function(t3) {
    return (function(t4) {
      if (t4 && t4.nodeName && t4.nodeName === `TEXTAREA` && !e.has(t4)) {
        var n3, r2 = null, i2 = window.getComputedStyle(t4), a2 = (n3 = t4.value, function() {
          s({ testForHeightReduction: n3 === `` || !t4.value.startsWith(n3), restoreTextAlign: null }), n3 = t4.value;
        }), o = function(n4) {
          t4.removeEventListener(`autosize:destroy`, o), t4.removeEventListener(`autosize:update`, c), t4.removeEventListener(`input`, a2), window.removeEventListener(`resize`, c), Object.keys(n4).forEach(function(e2) {
            return t4.style[e2] = n4[e2];
          }), e.delete(t4);
        }.bind(t4, { height: t4.style.height, resize: t4.style.resize, textAlign: t4.style.textAlign, overflowY: t4.style.overflowY, overflowX: t4.style.overflowX, wordWrap: t4.style.wordWrap });
        t4.addEventListener(`autosize:destroy`, o), t4.addEventListener(`autosize:update`, c), t4.addEventListener(`input`, a2), window.addEventListener(`resize`, c), t4.style.overflowX = `hidden`, t4.style.wordWrap = `break-word`, e.set(t4, { destroy: o, update: c }), c();
      }
      function s(e2) {
        var n4, a3, o2 = e2.restoreTextAlign, c2 = o2 === void 0 ? null : o2, l = e2.testForHeightReduction, u = l === void 0 || l, d = i2.overflowY;
        if (t4.scrollHeight !== 0 && (i2.resize === `vertical` ? t4.style.resize = `none` : i2.resize === `both` && (t4.style.resize = `horizontal`), u && (n4 = (function(e3) {
          for (var t5 = []; e3 && e3.parentNode && e3.parentNode instanceof Element; ) e3.parentNode.scrollTop && t5.push([e3.parentNode, e3.parentNode.scrollTop]), e3 = e3.parentNode;
          return function() {
            return t5.forEach(function(e4) {
              var t6 = e4[0], n5 = e4[1];
              t6.style.scrollBehavior = `auto`, t6.scrollTop = n5, t6.style.scrollBehavior = null;
            });
          };
        })(t4), t4.style.height = ``), a3 = i2.boxSizing === `content-box` ? t4.scrollHeight - (parseFloat(i2.paddingTop) + parseFloat(i2.paddingBottom)) : t4.scrollHeight + parseFloat(i2.borderTopWidth) + parseFloat(i2.borderBottomWidth), i2.maxHeight !== `none` && a3 > parseFloat(i2.maxHeight) ? (i2.overflowY === `hidden` && (t4.style.overflow = `scroll`), a3 = parseFloat(i2.maxHeight)) : i2.overflowY !== `hidden` && (t4.style.overflow = `hidden`), t4.style.height = a3 + `px`, c2 && (t4.style.textAlign = c2), n4 && n4(), r2 !== a3 && (t4.dispatchEvent(new Event(`autosize:resized`, { bubbles: true })), r2 = a3), d !== i2.overflow && !c2)) {
          var f = i2.textAlign;
          i2.overflow === `hidden` && (t4.style.textAlign = f === `start` ? `end` : `start`), s({ restoreTextAlign: f, testForHeightReduction: true });
        }
      }
      function c() {
        s({ testForHeightReduction: true, restoreTextAlign: null });
      }
    })(t3);
  }), t2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], t), e2;
}, r.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], n), e2;
});
var i = r;
function a(e2, t2) {
  this.init(e2, t2);
}
a.instance = function(e2, t2) {
  return new a(e2, t2);
}, a.prototype = { ID: `hit`, init: function(e2, t2) {
  typeof e2 == `string` ? this.el = document.querySelector(e2) : this.el = e2, this.getType(t2) === `custom` ? (this.highlight = t2, this.generate()) : console.error(`valid config object not provided`);
}, getType: function(e2) {
  let t2 = typeof e2;
  if (!e2) return `falsey`;
  if (Array.isArray(e2)) return e2.length === 2 && typeof e2[0] == `number` && typeof e2[1] == `number` ? `range` : `array`;
  if (t2 === `object`) {
    if (e2 instanceof RegExp) return `regexp`;
    if (e2.hasOwnProperty(`highlight`)) return `custom`;
  } else if (t2 === `function` || t2 === `string`) return t2;
  return `other`;
}, generate: function() {
  this.el.classList.add(this.ID + `-input`, this.ID + `-content`), this.el.addEventListener(`input`, this.handleInput.bind(this)), this.el.addEventListener(`scroll`, this.handleScroll.bind(this)), this.highlights = document.createElement(`div`), this.highlights.classList.add(this.ID + `-highlights`, this.ID + `-content`), this.backdrop = document.createElement(`div`), this.backdrop.classList.add(this.ID + `-backdrop`), this.backdrop.append(this.highlights), this.container = document.createElement(`div`), this.container.classList.add(this.ID + `-container`), this.el.parentNode.insertBefore(this.container, this.el.nextSibling), this.container.append(this.backdrop), this.container.append(this.el), this.container.addEventListener(`scroll`, this.blockContainerScroll.bind(this)), this.handleInput();
}, handleInput: function() {
  let e2 = this.el.value, t2 = this.getRanges(e2, this.highlight), n2 = this.removeStaggeredRanges(t2), r2 = this.getBoundaries(n2);
  this.renderMarks(r2);
}, getRanges: function(e2, t2) {
  switch (this.getType(t2)) {
    case `array`:
      return this.getArrayRanges(e2, t2);
    case `function`:
      return this.getFunctionRanges(e2, t2);
    case `regexp`:
      return this.getRegExpRanges(e2, t2);
    case `string`:
      return this.getStringRanges(e2, t2);
    case `range`:
      return this.getRangeRanges(e2, t2);
    case `custom`:
      return this.getCustomRanges(e2, t2);
    default:
      if (t2) console.error(`unrecognized highlight type`);
      else return [];
  }
}, getArrayRanges: function(e2, t2) {
  let n2 = t2.map(this.getRanges.bind(this, e2));
  return Array.prototype.concat.apply([], n2);
}, getFunctionRanges: function(e2, t2) {
  return this.getRanges(e2, t2(e2));
}, getRegExpRanges: function(e2, t2) {
  let n2 = [], r2;
  for (; (r2 = t2.exec(e2), r2 !== null) && (n2.push([r2.index, r2.index + r2[0].length]), t2.global); ) ;
  return n2;
}, getStringRanges: function(e2, t2) {
  let n2 = [], r2 = e2.toLowerCase(), i2 = t2.toLowerCase(), a2 = 0;
  for (; a2 = r2.indexOf(i2, a2), a2 !== -1; ) n2.push([a2, a2 + i2.length]), a2 += i2.length;
  return n2;
}, getRangeRanges: function(e2, t2) {
  return [t2];
}, getCustomRanges: function(e2, t2) {
  let n2 = this.getRanges(e2, t2.highlight);
  return t2.className && n2.forEach(function(e3) {
    e3.className ? e3.className = t2.className + ` ` + e3.className : e3.className = t2.className;
  }), t2.blank && n2.forEach(function(e3) {
    e3.blank = t2.blank;
  }), n2;
}, removeStaggeredRanges: function(e2) {
  let t2 = [];
  return e2.forEach(function(e3) {
    t2.some(function(t3) {
      return (e3[0] > t3[0] && e3[0] < t3[1]) != (e3[1] > t3[0] && e3[1] < t3[1]);
    }) || t2.push(e3);
  }), t2;
}, getBoundaries: function(e2) {
  let t2 = [];
  return e2.forEach(function(e3) {
    t2.push({ type: `start`, index: e3[0], className: e3.className, blank: e3.blank }), t2.push({ type: `stop`, index: e3[1] });
  }), this.sortBoundaries(t2), t2;
}, sortBoundaries: function(e2) {
  e2.sort(function(e3, t2) {
    return e3.index === t2.index ? e3.type === `stop` && t2.type === `start` ? 1 : e3.type === `start` && t2.type === `stop` ? -1 : 0 : t2.index - e3.index;
  });
}, renderMarks: function(e2) {
  let t2 = this.el.value, n2 = t2;
  e2.forEach(function(e3, n3) {
    let r2;
    r2 = e3.type === `start` ? `{{hit-mark-start|` + n3 + `}}` : `{{hit-mark-stop}}`, t2 = t2.slice(0, e3.index) + r2 + t2.slice(e3.index);
  }), t2 = t2.replace(/\n({{hit-mark-stop}})?$/, `
$1`), t2 = t2.replace(/</g, `&lt;`).replace(/>/g, `&gt;`), t2 = t2.replace(/{{hit-mark-start\|(\d+)}}/g, function(t3, r2) {
    let i2 = e2[+r2].className;
    if (i2) {
      let t4 = `<mark class="` + i2 + `"`;
      if (i2 === `word`) {
        let i3 = n2.slice(e2[+r2].index, e2[r2 - 1].index);
        i3 = i3.replace(/"/g, `&quot;`), t4 += ` data-word="` + i3 + `"`;
      }
      return t4 + `>`;
    } else return `<mark>`;
  }), t2 = t2.replace(/{{hit-mark-stop}}/g, `</mark>`), t2 += `<mark class="placeholder"> \u26A1 windpress </mark>`, this.highlights.innerHTML = t2, this.el.dispatchEvent(new CustomEvent(`highlights-updated`));
}, handleScroll: function() {
  this.backdrop.scrollTop = this.el.scrollTop;
  let e2 = this.el.scrollLeft;
  e2 > 0 ? this.backdrop.style.transform = `translateX(` + -e2 + `px)` : this.backdrop.style.transform = ``;
}, blockContainerScroll: function() {
  this.container.scrollLeft = 0;
}, destroy: function() {
  this.container.parentElement.replaceChild(this.el, this.container), this.el.classList.remove(this.ID + `-content`, this.ID + `-input`);
} };
export {
  i as n,
  a as t
};
