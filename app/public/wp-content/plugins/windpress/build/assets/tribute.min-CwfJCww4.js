import { t as e } from "./chunk-DcEfI0Mx.js";
var t = e(((e2, t2) => {
  (function(n, r) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = r() : typeof define == `function` && define.amd ? define(r) : (n || (n = self)).Tribute = r();
  })(e2, (function() {
    function e3(e4, t4) {
      if (!(e4 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
    }
    function t3(e4, t4) {
      for (var n2 = 0; n2 < t4.length; n2++) {
        var r2 = t4[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e4, r2.key, r2);
      }
    }
    function n(e4, n2, r2) {
      return n2 && t3(e4.prototype, n2), r2 && t3(e4, r2), e4;
    }
    function r(e4, t4) {
      return (function(e5) {
        if (Array.isArray(e5)) return e5;
      })(e4) || (function(e5, t5) {
        if (!(typeof Symbol > `u` || !(Symbol.iterator in Object(e5)))) {
          var n2 = [], r2 = true, i2 = false, a2 = void 0;
          try {
            for (var o2, s2 = e5[Symbol.iterator](); !(r2 = (o2 = s2.next()).done) && (n2.push(o2.value), !t5 || n2.length !== t5); r2 = true) ;
          } catch (e6) {
            i2 = true, a2 = e6;
          } finally {
            try {
              r2 || s2.return == null || s2.return();
            } finally {
              if (i2) throw a2;
            }
          }
          return n2;
        }
      })(e4, t4) || (function(e5, t5) {
        if (e5) {
          if (typeof e5 == `string`) return i(e5, t5);
          var n2 = Object.prototype.toString.call(e5).slice(8, -1);
          if (n2 === `Object` && e5.constructor && (n2 = e5.constructor.name), n2 === `Map` || n2 === `Set`) return Array.from(n2);
          if (n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return i(e5, t5);
        }
      })(e4, t4) || (function() {
        throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })();
    }
    function i(e4, t4) {
      (t4 == null || t4 > e4.length) && (t4 = e4.length);
      for (var n2 = 0, r2 = Array(t4); n2 < t4; n2++) r2[n2] = e4[n2];
      return r2;
    }
    if (Array.prototype.find || (Array.prototype.find = function(e4) {
      if (this === null) throw TypeError(`Array.prototype.find called on null or undefined`);
      if (typeof e4 != `function`) throw TypeError(`predicate must be a function`);
      for (var t4, n2 = Object(this), r2 = n2.length >>> 0, i2 = arguments[1], a2 = 0; a2 < r2; a2++) if (t4 = n2[a2], e4.call(i2, t4, a2, n2)) return t4;
    }), window && typeof window.CustomEvent != `function`) {
      var a = function(e4, t4) {
        t4 || (t4 = { bubbles: false, cancelable: false, detail: void 0 });
        var n2 = document.createEvent(`CustomEvent`);
        return n2.initCustomEvent(e4, t4.bubbles, t4.cancelable, t4.detail), n2;
      };
      window.Event !== void 0 && (a.prototype = window.Event.prototype), window.CustomEvent = a;
    }
    var o = (function() {
      function t4(n2) {
        e3(this, t4), this.tribute = n2, this.tribute.events = this;
      }
      return n(t4, [{ key: `bind`, value: function(e4) {
        e4.boundKeydown = this.keydown.bind(e4, this), e4.boundKeyup = this.keyup.bind(e4, this), e4.boundInput = this.input.bind(e4, this), e4.addEventListener(`keydown`, e4.boundKeydown, false), e4.addEventListener(`keyup`, e4.boundKeyup, false), e4.addEventListener(`input`, e4.boundInput, false);
      } }, { key: `unbind`, value: function(e4) {
        e4.removeEventListener(`keydown`, e4.boundKeydown, false), e4.removeEventListener(`keyup`, e4.boundKeyup, false), e4.removeEventListener(`input`, e4.boundInput, false), delete e4.boundKeydown, delete e4.boundKeyup, delete e4.boundInput;
      } }, { key: `keydown`, value: function(e4, n2) {
        e4.shouldDeactivate(n2) && (e4.tribute.isActive = false, e4.tribute.hideMenu());
        var r2 = this;
        e4.commandEvent = false, t4.keys().forEach((function(t5) {
          t5.key === n2.keyCode && (e4.commandEvent = true, e4.callbacks()[t5.value.toLowerCase()](n2, r2));
        }));
      } }, { key: `input`, value: function(e4, t5) {
        e4.inputEvent = true, e4.keyup.call(this, e4, t5);
      } }, { key: `click`, value: function(e4, t5) {
        var n2 = e4.tribute;
        if (n2.menu && n2.menu.contains(t5.target)) {
          var r2 = t5.target;
          for (t5.preventDefault(), t5.stopPropagation(); r2.nodeName.toLowerCase() !== `li`; ) if (!(r2 = r2.parentNode) || r2 === n2.menu) throw Error(`cannot find the <li> container for the click`);
          n2.selectItemAtIndex(r2.getAttribute(`data-index`), t5), n2.hideMenu();
        } else n2.current.element && !n2.current.externalTrigger && (n2.current.externalTrigger = false, setTimeout((function() {
          return n2.hideMenu();
        })));
      } }, { key: `keyup`, value: function(e4, t5) {
        if (e4.inputEvent && (e4.inputEvent = false), e4.updateSelection(this), t5.keyCode !== 27) {
          if (!e4.tribute.allowSpaces && e4.tribute.hasTrailingSpace) return e4.tribute.hasTrailingSpace = false, e4.commandEvent = true, void e4.callbacks().space(t5, this);
          if (!e4.tribute.isActive) if (e4.tribute.autocompleteMode) e4.callbacks().triggerChar(t5, this, ``);
          else {
            var n2 = e4.getKeyCode(e4, this, t5);
            if (isNaN(n2) || !n2) return;
            var r2 = e4.tribute.triggers().find((function(e5) {
              return e5.charCodeAt(0) === n2;
            }));
            r2 !== void 0 && e4.callbacks().triggerChar(t5, this, r2);
          }
          e4.tribute.current.mentionText.length < e4.tribute.current.collection.menuShowMinLength || ((e4.tribute.current.trigger || e4.tribute.autocompleteMode) && false === e4.commandEvent || e4.tribute.isActive && t5.keyCode === 8) && e4.tribute.showMenuFor(this, true);
        }
      } }, { key: `shouldDeactivate`, value: function(e4) {
        if (!this.tribute.isActive) return false;
        if (this.tribute.current.mentionText.length === 0) {
          var n2 = false;
          return t4.keys().forEach((function(t5) {
            e4.keyCode === t5.key && (n2 = true);
          })), !n2;
        }
        return false;
      } }, { key: `getKeyCode`, value: function(e4, t5, n2) {
        var r2 = e4.tribute, i2 = r2.range.getTriggerInfo(false, r2.hasTrailingSpace, true, r2.allowSpaces, r2.autocompleteMode);
        return !!i2 && i2.mentionTriggerChar.charCodeAt(0);
      } }, { key: `updateSelection`, value: function(e4) {
        this.tribute.current.element = e4;
        var t5 = this.tribute.range.getTriggerInfo(false, this.tribute.hasTrailingSpace, true, this.tribute.allowSpaces, this.tribute.autocompleteMode);
        t5 && (this.tribute.current.selectedPath = t5.mentionSelectedPath, this.tribute.current.mentionText = t5.mentionText, this.tribute.current.selectedOffset = t5.mentionSelectedOffset);
      } }, { key: `callbacks`, value: function() {
        var e4 = this;
        return { triggerChar: function(t5, n2, r2) {
          var i2 = e4.tribute;
          i2.current.trigger = r2;
          var a2 = i2.collection.find((function(e5) {
            return e5.trigger === r2;
          }));
          i2.current.collection = a2, i2.current.mentionText.length >= i2.current.collection.menuShowMinLength && i2.inputEvent && i2.showMenuFor(n2, true);
        }, enter: function(t5, n2) {
          e4.tribute.isActive && e4.tribute.current.filteredItems && (t5.preventDefault(), t5.stopPropagation(), setTimeout((function() {
            e4.tribute.selectItemAtIndex(e4.tribute.menuSelected, t5), e4.tribute.hideMenu();
          }), 0));
        }, escape: function(t5, n2) {
          e4.tribute.isActive && (t5.preventDefault(), t5.stopPropagation(), e4.tribute.isActive = false, e4.tribute.hideMenu());
        }, tab: function(t5, n2) {
          e4.callbacks().enter(t5, n2);
        }, space: function(t5, n2) {
          e4.tribute.isActive && (e4.tribute.spaceSelectsMatch ? e4.callbacks().enter(t5, n2) : e4.tribute.allowSpaces || (t5.stopPropagation(), setTimeout((function() {
            e4.tribute.hideMenu(), e4.tribute.isActive = false;
          }), 0)));
        }, up: function(t5, n2) {
          if (e4.tribute.isActive && e4.tribute.current.filteredItems) {
            t5.preventDefault(), t5.stopPropagation();
            var r2 = e4.tribute.current.filteredItems.length, i2 = e4.tribute.menuSelected;
            r2 > i2 && i2 > 0 ? (e4.tribute.menuSelected--, e4.setActiveLi()) : i2 === 0 && (e4.tribute.menuSelected = r2 - 1, e4.setActiveLi(), e4.tribute.menu.scrollTop = e4.tribute.menu.scrollHeight);
          }
        }, down: function(t5, n2) {
          if (e4.tribute.isActive && e4.tribute.current.filteredItems) {
            t5.preventDefault(), t5.stopPropagation();
            var r2 = e4.tribute.current.filteredItems.length - 1, i2 = e4.tribute.menuSelected;
            r2 > i2 ? (e4.tribute.menuSelected++, e4.setActiveLi()) : r2 === i2 && (e4.tribute.menuSelected = 0, e4.setActiveLi(), e4.tribute.menu.scrollTop = 0);
          }
        }, delete: function(t5, n2) {
          e4.tribute.isActive && e4.tribute.current.mentionText.length < 1 ? e4.tribute.hideMenu() : e4.tribute.isActive && e4.tribute.showMenuFor(n2);
        } };
      } }, { key: `setActiveLi`, value: function(e4) {
        var t5 = this.tribute.menu.querySelectorAll(`li`), n2 = t5.length >>> 0;
        e4 && (this.tribute.menuSelected = parseInt(e4));
        for (var r2 = 0; r2 < n2; r2++) {
          var i2 = t5[r2];
          if (r2 === this.tribute.menuSelected) {
            i2.classList.add(this.tribute.current.collection.selectClass);
            var a2 = i2.getBoundingClientRect(), o2 = this.tribute.menu.getBoundingClientRect();
            if (a2.bottom > o2.bottom) {
              var s2 = a2.bottom - o2.bottom;
              this.tribute.menu.scrollTop += s2;
            } else if (a2.top < o2.top) {
              var c2 = o2.top - a2.top;
              this.tribute.menu.scrollTop -= c2;
            }
          } else i2.classList.remove(this.tribute.current.collection.selectClass);
        }
      } }, { key: `getFullHeight`, value: function(e4, t5) {
        var n2 = e4.getBoundingClientRect().height;
        if (t5) {
          var r2 = e4.currentStyle || window.getComputedStyle(e4);
          return n2 + parseFloat(r2.marginTop) + parseFloat(r2.marginBottom);
        }
        return n2;
      } }], [{ key: `keys`, value: function() {
        return [{ key: 9, value: `TAB` }, { key: 8, value: `DELETE` }, { key: 13, value: `ENTER` }, { key: 27, value: `ESCAPE` }, { key: 32, value: `SPACE` }, { key: 38, value: `UP` }, { key: 40, value: `DOWN` }];
      } }]), t4;
    })(), s = (function() {
      function t4(n2) {
        e3(this, t4), this.tribute = n2, this.tribute.menuEvents = this, this.menu = this.tribute.menu;
      }
      return n(t4, [{ key: `bind`, value: function(e4) {
        var t5 = this;
        this.menuClickEvent = this.tribute.events.click.bind(null, this), this.menuContainerScrollEvent = this.debounce((function() {
          t5.tribute.isActive && t5.tribute.hideMenu();
        }), 10, false), this.windowResizeEvent = this.debounce((function() {
          t5.tribute.isActive && t5.tribute.hideMenu();
        }), 10, false), this.tribute.range.getDocument().addEventListener(`MSPointerDown`, this.menuClickEvent, false), this.tribute.range.getDocument().addEventListener(`mousedown`, this.menuClickEvent, false), window.addEventListener(`resize`, this.windowResizeEvent), this.menuContainer ? this.menuContainer.addEventListener(`scroll`, this.menuContainerScrollEvent, false) : window.addEventListener(`scroll`, this.menuContainerScrollEvent);
      } }, { key: `unbind`, value: function(e4) {
        this.tribute.range.getDocument().removeEventListener(`mousedown`, this.menuClickEvent, false), this.tribute.range.getDocument().removeEventListener(`MSPointerDown`, this.menuClickEvent, false), window.removeEventListener(`resize`, this.windowResizeEvent), this.menuContainer ? this.menuContainer.removeEventListener(`scroll`, this.menuContainerScrollEvent, false) : window.removeEventListener(`scroll`, this.menuContainerScrollEvent);
      } }, { key: `debounce`, value: function(e4, t5, n2) {
        var r2, i2 = arguments, a2 = this;
        return function() {
          var o2 = a2, s2 = i2, c2 = n2 && !r2;
          clearTimeout(r2), r2 = setTimeout((function() {
            r2 = null, n2 || e4.apply(o2, s2);
          }), t5), c2 && e4.apply(o2, s2);
        };
      } }]), t4;
    })(), c = (function() {
      function t4(n2) {
        e3(this, t4), this.tribute = n2, this.tribute.range = this;
      }
      return n(t4, [{ key: `getDocument`, value: function() {
        var e4;
        return this.tribute.current.collection && (e4 = this.tribute.current.collection.iframe), e4 ? e4.contentWindow.document : document;
      } }, { key: `positionMenuAtCaret`, value: function(e4) {
        var t5, n2 = this.tribute.current, r2 = this.getTriggerInfo(false, this.tribute.hasTrailingSpace, true, this.tribute.allowSpaces, this.tribute.autocompleteMode);
        if (r2 !== void 0) {
          if (!this.tribute.positionMenu) return void (this.tribute.menu.style.cssText = `display: block;`);
          t5 = this.isContentEditable(n2.element) ? this.getContentEditableCaretPosition(r2.mentionPosition) : this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element, r2.mentionPosition), this.tribute.menu.style.cssText = `top: ${t5.top}px;
                                     left: ${t5.left}px;
                                     right: ${t5.right}px;
                                     bottom: ${t5.bottom}px;
                                     max-height: ${t5.maxHeight || 500}px;
                                     max-width: ${t5.maxWidth || 300}px;
                                     position: ${t5.position || `absolute`};
                                     display: block;`, t5.left === `auto` && (this.tribute.menu.style.left = `auto`), t5.top === `auto` && (this.tribute.menu.style.top = `auto`), e4 && this.scrollIntoView();
        } else this.tribute.menu.style.cssText = `display: none`;
      } }, { key: `selectElement`, value: function(e4, t5, n2) {
        var r2, i2 = e4;
        if (t5) for (var a2 = 0; a2 < t5.length; a2++) {
          if ((i2 = i2.childNodes[t5[a2]]) === void 0) return;
          for (; i2.length < n2; ) n2 -= i2.length, i2 = i2.nextSibling;
          i2.childNodes.length !== 0 || i2.length || (i2 = i2.previousSibling);
        }
        var o2 = this.getWindowSelection();
        (r2 = this.getDocument().createRange()).setStart(i2, n2), r2.setEnd(i2, n2), r2.collapse(true);
        try {
          o2.removeAllRanges();
        } catch {
        }
        o2.addRange(r2), e4.focus();
      } }, { key: `replaceTriggerText`, value: function(e4, t5, n2, r2, i2) {
        var a2 = this.getTriggerInfo(true, n2, t5, this.tribute.allowSpaces, this.tribute.autocompleteMode);
        if (a2 !== void 0) {
          var o2 = this.tribute.current, s2 = new CustomEvent(`tribute-replaced`, { detail: { item: i2, instance: o2, context: a2, event: r2 } });
          if (this.isContentEditable(o2.element)) {
            e4 += typeof this.tribute.replaceTextSuffix == `string` ? this.tribute.replaceTextSuffix : `\xA0`;
            var c2 = a2.mentionPosition + a2.mentionText.length;
            this.tribute.autocompleteMode || (c2 += a2.mentionTriggerChar.length), this.pasteHtml(e4, a2.mentionPosition, c2);
          } else {
            var l2 = this.tribute.current.element, u = typeof this.tribute.replaceTextSuffix == `string` ? this.tribute.replaceTextSuffix : ` `;
            e4 += u;
            var d = a2.mentionPosition, f = a2.mentionPosition + a2.mentionText.length + u.length;
            this.tribute.autocompleteMode || (f += a2.mentionTriggerChar.length - 1), l2.value = l2.value.substring(0, d) + e4 + l2.value.substring(f, l2.value.length), l2.selectionStart = d + e4.length, l2.selectionEnd = d + e4.length;
          }
          o2.element.dispatchEvent(new CustomEvent(`input`, { bubbles: true })), o2.element.dispatchEvent(s2);
        }
      } }, { key: `pasteHtml`, value: function(e4, t5, n2) {
        var r2, i2 = this.getWindowSelection();
        (r2 = this.getDocument().createRange()).setStart(i2.anchorNode, t5), r2.setEnd(i2.anchorNode, n2), r2.deleteContents();
        var a2 = this.getDocument().createElement(`div`);
        a2.innerHTML = e4;
        for (var o2, s2, c2 = this.getDocument().createDocumentFragment(); o2 = a2.firstChild; ) s2 = c2.appendChild(o2);
        r2.insertNode(c2), s2 && ((r2 = r2.cloneRange()).setStartAfter(s2), r2.collapse(true), i2.removeAllRanges(), i2.addRange(r2));
      } }, { key: `getWindowSelection`, value: function() {
        return this.tribute.collection.iframe ? this.tribute.collection.iframe.contentWindow.getSelection() : window.getSelection();
      } }, { key: `getNodePositionInParent`, value: function(e4) {
        if (e4.parentNode === null) return 0;
        for (var t5 = 0; t5 < e4.parentNode.childNodes.length; t5++) if (e4.parentNode.childNodes[t5] === e4) return t5;
      } }, { key: `getContentEditableSelectedPath`, value: function(e4) {
        var t5 = this.getWindowSelection(), n2 = t5.anchorNode, r2 = [];
        if (n2 != null) {
          for (var i2, a2 = n2.contentEditable; n2 !== null && a2 !== `true`; ) i2 = this.getNodePositionInParent(n2), r2.push(i2), (n2 = n2.parentNode) !== null && (a2 = n2.contentEditable);
          return r2.reverse(), { selected: n2, path: r2, offset: t5.getRangeAt(0).startOffset };
        }
      } }, { key: `getTextPrecedingCurrentSelection`, value: function() {
        var e4 = this.tribute.current, t5 = ``;
        if (this.isContentEditable(e4.element)) {
          var n2 = this.getWindowSelection().anchorNode;
          if (n2 != null) {
            var r2 = n2.textContent, i2 = this.getWindowSelection().getRangeAt(0).startOffset;
            r2 && i2 >= 0 && (t5 = r2.substring(0, i2));
          }
        } else {
          var a2 = this.tribute.current.element;
          if (a2) {
            var o2 = a2.selectionStart;
            a2.value && o2 >= 0 && (t5 = a2.value.substring(0, o2));
          }
        }
        return t5;
      } }, { key: `getLastWordInText`, value: function(e4) {
        var t5;
        return e4 = e4.replace(/\u00A0/g, ` `), (t5 = this.tribute.autocompleteSeparator ? e4.split(this.tribute.autocompleteSeparator) : e4.split(/\s+/))[t5.length - 1].trim();
      } }, { key: `getTriggerInfo`, value: function(e4, t5, n2, r2, i2) {
        var a2, o2, s2, c2 = this, l2 = this.tribute.current;
        if (this.isContentEditable(l2.element)) {
          var u = this.getContentEditableSelectedPath(l2);
          u && (a2 = u.selected, o2 = u.path, s2 = u.offset);
        } else a2 = this.tribute.current.element;
        var d = this.getTextPrecedingCurrentSelection(), f = this.getLastWordInText(d);
        if (i2) return { mentionPosition: d.length - f.length, mentionText: f, mentionSelectedElement: a2, mentionSelectedPath: o2, mentionSelectedOffset: s2 };
        if (d != null) {
          var p, m = -1;
          if (this.tribute.collection.forEach((function(e5) {
            var t6 = e5.trigger, r3 = e5.requireLeadingSpace ? c2.lastIndexWithLeadingSpace(d, t6) : d.lastIndexOf(t6);
            r3 > m && (m = r3, p = t6, n2 = e5.requireLeadingSpace);
          })), m >= 0 && (m === 0 || !n2 || /[\xA0\s]/g.test(d.substring(m - 1, m)))) {
            var h = d.substring(m + p.length, d.length);
            p = d.substring(m, m + p.length);
            var g = h.substring(0, 1), _ = h.length > 0 && (g === ` ` || g === `\xA0`);
            t5 && (h = h.trim());
            var v = r2 ? /[^\S ]/g : /[\xA0\s]/g;
            if (this.tribute.hasTrailingSpace = v.test(h), !_ && (e4 || !v.test(h))) return { mentionPosition: m, mentionText: h, mentionSelectedElement: a2, mentionSelectedPath: o2, mentionSelectedOffset: s2, mentionTriggerChar: p };
          }
        }
      } }, { key: `lastIndexWithLeadingSpace`, value: function(e4, t5) {
        for (var n2 = e4.split(``).reverse().join(``), r2 = -1, i2 = 0, a2 = e4.length; i2 < a2; i2++) {
          for (var o2 = i2 === e4.length - 1, s2 = /\s/.test(n2[i2 + 1]), c2 = true, l2 = t5.length - 1; l2 >= 0; l2--) if (t5[l2] !== n2[i2 - l2]) {
            c2 = false;
            break;
          }
          if (c2 && (o2 || s2)) {
            r2 = e4.length - 1 - i2;
            break;
          }
        }
        return r2;
      } }, { key: `isContentEditable`, value: function(e4) {
        return e4.nodeName !== `INPUT` && e4.nodeName !== `TEXTAREA`;
      } }, { key: `isMenuOffScreen`, value: function(e4, t5) {
        var n2 = window.innerWidth, r2 = window.innerHeight, i2 = document.documentElement, a2 = (window.pageXOffset || i2.scrollLeft) - (i2.clientLeft || 0), o2 = (window.pageYOffset || i2.scrollTop) - (i2.clientTop || 0), s2 = typeof e4.top == `number` ? e4.top : o2 + r2 - e4.bottom - t5.height, c2 = typeof e4.right == `number` ? e4.right : e4.left + t5.width, l2 = typeof e4.bottom == `number` ? e4.bottom : e4.top + t5.height, u = typeof e4.left == `number` ? e4.left : a2 + n2 - e4.right - t5.width;
        return { top: s2 < Math.floor(o2), right: c2 > Math.ceil(a2 + n2), bottom: l2 > Math.ceil(o2 + r2), left: u < Math.floor(a2) };
      } }, { key: `getMenuDimensions`, value: function() {
        var e4 = { width: null, height: null };
        return this.tribute.menu.style.cssText = `top: 0px;
                                 left: 0px;
                                 position: fixed;
                                 display: block;
                                 visibility; hidden;
                                 max-height:500px;`, e4.width = this.tribute.menu.offsetWidth, e4.height = this.tribute.menu.offsetHeight, this.tribute.menu.style.cssText = `display: none;`, e4;
      } }, { key: `getTextAreaOrInputUnderlinePosition`, value: function(e4, t5, n2) {
        var r2 = this.getDocument().createElement(`div`);
        r2.id = `input-textarea-caret-position-mirror-div`, this.getDocument().body.appendChild(r2);
        var i2 = r2.style, a2 = window.getComputedStyle ? getComputedStyle(e4) : e4.currentStyle;
        i2.whiteSpace = `pre-wrap`, e4.nodeName !== `INPUT` && (i2.wordWrap = `break-word`), i2.position = `absolute`, i2.visibility = `hidden`, `direction.boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing`.split(`.`).forEach((function(e5) {
          i2[e5] = a2[e5];
        }));
        var o2 = document.createElement(`span`);
        o2.textContent = e4.value.substring(0, t5), r2.appendChild(o2), e4.nodeName === `INPUT` && (r2.textContent = r2.textContent.replace(/\s/g, `\xA0`));
        var s2 = this.getDocument().createElement(`span`);
        s2.textContent = `&#x200B;`, r2.appendChild(s2);
        var c2 = this.getDocument().createElement(`span`);
        c2.textContent = e4.value.substring(t5), r2.appendChild(c2);
        var l2 = e4.getBoundingClientRect();
        r2.style.position = `fixed`, r2.style.left = l2.left + `px`, r2.style.top = l2.top + `px`, r2.style.width = l2.width + `px`, r2.style.height = l2.height + `px`, r2.scrollTop = e4.scrollTop;
        var u = s2.getBoundingClientRect();
        return this.getDocument().body.removeChild(r2), this.getFixedCoordinatesRelativeToRect(u);
      } }, { key: `getContentEditableCaretPosition`, value: function(e4) {
        var t5, n2 = this.getWindowSelection();
        (t5 = this.getDocument().createRange()).setStart(n2.anchorNode, e4), t5.setEnd(n2.anchorNode, e4), t5.collapse(false);
        var r2 = t5.getBoundingClientRect();
        return this.getFixedCoordinatesRelativeToRect(r2);
      } }, { key: `getFixedCoordinatesRelativeToRect`, value: function(e4) {
        var t5 = { position: `fixed`, left: e4.left, top: e4.top + e4.height }, n2 = this.getMenuDimensions(), r2 = e4.top, i2 = window.innerHeight - (e4.top + e4.height);
        i2 < n2.height && (r2 >= n2.height || r2 > i2 ? (t5.top = `auto`, t5.bottom = window.innerHeight - e4.top, i2 < n2.height && (t5.maxHeight = r2)) : r2 < n2.height && (t5.maxHeight = i2));
        var a2 = e4.left, o2 = window.innerWidth - e4.left;
        return o2 < n2.width && (a2 >= n2.width || a2 > o2 ? (t5.left = `auto`, t5.right = window.innerWidth - e4.left, o2 < n2.width && (t5.maxWidth = a2)) : a2 < n2.width && (t5.maxWidth = o2)), t5;
      } }, { key: `scrollIntoView`, value: function(e4) {
        var t5, n2 = this.menu;
        if (n2 !== void 0) {
          for (; t5 === void 0 || t5.height === 0; ) if ((t5 = n2.getBoundingClientRect()).height === 0 && ((n2 = n2.childNodes[0]) === void 0 || !n2.getBoundingClientRect)) return;
          var r2 = t5.top, i2 = r2 + t5.height;
          if (r2 < 0) window.scrollTo(0, window.pageYOffset + t5.top - 20);
          else if (i2 > window.innerHeight) {
            var a2 = window.pageYOffset + t5.top - 20;
            a2 - window.pageYOffset > 100 && (a2 = window.pageYOffset + 100);
            var o2 = window.pageYOffset - (window.innerHeight - i2);
            o2 > a2 && (o2 = a2), window.scrollTo(0, o2);
          }
        }
      } }, { key: `menuContainerIsBody`, get: function() {
        return this.tribute.menuContainer === document.body || !this.tribute.menuContainer;
      } }]), t4;
    })(), l = (function() {
      function t4(n2) {
        e3(this, t4), this.tribute = n2, this.tribute.search = this;
      }
      return n(t4, [{ key: `simpleFilter`, value: function(e4, t5) {
        var n2 = this;
        return t5.filter((function(t6) {
          return n2.test(e4, t6);
        }));
      } }, { key: `test`, value: function(e4, t5) {
        return this.match(e4, t5) !== null;
      } }, { key: `match`, value: function(e4, t5, n2) {
        n2 || (n2 = {}), t5.length;
        var r2 = n2.pre || ``, i2 = n2.post || ``, a2 = n2.caseSensitive && t5 || t5.toLowerCase();
        if (n2.skip) return { rendered: t5, score: 0 };
        e4 = n2.caseSensitive && e4 || e4.toLowerCase();
        var o2 = this.traverse(a2, e4, 0, 0, []);
        return o2 ? { rendered: this.render(t5, o2.cache, r2, i2), score: o2.score } : null;
      } }, { key: `traverse`, value: function(e4, t5, n2, r2, i2) {
        if (this.tribute.autocompleteSeparator && (t5 = t5.split(this.tribute.autocompleteSeparator).splice(-1)[0]), t5.length === r2) return { score: this.calculateScore(i2), cache: i2.slice() };
        if (!(e4.length === n2 || t5.length - r2 > e4.length - n2)) {
          for (var a2, o2, s2 = t5[r2], c2 = e4.indexOf(s2, n2); c2 > -1; ) {
            if (i2.push(c2), o2 = this.traverse(e4, t5, c2 + 1, r2 + 1, i2), i2.pop(), !o2) return a2;
            (!a2 || a2.score < o2.score) && (a2 = o2), c2 = e4.indexOf(s2, c2 + 1);
          }
          return a2;
        }
      } }, { key: `calculateScore`, value: function(e4) {
        var t5 = 0, n2 = 1;
        return e4.forEach((function(r2, i2) {
          i2 > 0 && (e4[i2 - 1] + 1 === r2 ? n2 += n2 + 1 : n2 = 1), t5 += n2;
        })), t5;
      } }, { key: `render`, value: function(e4, t5, n2, r2) {
        var i2 = e4.substring(0, t5[0]);
        return t5.forEach((function(a2, o2) {
          i2 += n2 + e4[a2] + r2 + e4.substring(a2 + 1, t5[o2 + 1] ? t5[o2 + 1] : e4.length);
        })), i2;
      } }, { key: `filter`, value: function(e4, t5, n2) {
        var r2 = this;
        return n2 || (n2 = {}), t5.reduce((function(t6, i2, a2, o2) {
          var s2 = i2;
          n2.extract && ((s2 = n2.extract(i2)) || (s2 = ``));
          var c2 = r2.match(e4, s2, n2);
          return c2 != null && (t6[t6.length] = { string: c2.rendered, score: c2.score, index: a2, original: i2 }), t6;
        }), []).sort((function(e5, t6) {
          return t6.score - e5.score || e5.index - t6.index;
        }));
      } }]), t4;
    })();
    return (function() {
      function t4(n2) {
        var r2, i2 = this, a2 = n2.values, u = a2 === void 0 ? null : a2, d = n2.loadingItemTemplate, f = d === void 0 ? null : d, p = n2.iframe, m = p === void 0 ? null : p, h = n2.selectClass, g = h === void 0 ? `highlight` : h, _ = n2.containerClass, v = _ === void 0 ? `tribute-container` : _, y = n2.itemClass, b = y === void 0 ? `` : y, x = n2.trigger, S = x === void 0 ? `@` : x, C = n2.autocompleteMode, ee = C !== void 0 && C, w = n2.autocompleteSeparator, T = w === void 0 ? null : w, E = n2.selectTemplate, D = E === void 0 ? null : E, O = n2.menuItemTemplate, k = O === void 0 ? null : O, A = n2.lookup, j = A === void 0 ? `key` : A, M = n2.fillAttr, N = M === void 0 ? `value` : M, P = n2.collection, F = P === void 0 ? null : P, I = n2.menuContainer, L = I === void 0 ? null : I, R = n2.noMatchTemplate, z = R === void 0 ? null : R, B = n2.requireLeadingSpace, V = B === void 0 || B, H = n2.allowSpaces, U = H !== void 0 && H, W = n2.replaceTextSuffix, te = W === void 0 ? null : W, G = n2.positionMenu, ne = G === void 0 || G, K = n2.spaceSelectsMatch, q = K !== void 0 && K, J = n2.searchOpts, Y = J === void 0 ? {} : J, X = n2.menuItemLimit, Z = X === void 0 ? null : X, Q = n2.menuShowMinLength, $ = Q === void 0 ? 0 : Q;
        if (e3(this, t4), this.autocompleteMode = ee, this.autocompleteSeparator = T, this.menuSelected = 0, this.current = {}, this.inputEvent = false, this.isActive = false, this.menuContainer = L, this.allowSpaces = U, this.replaceTextSuffix = te, this.positionMenu = ne, this.hasTrailingSpace = false, this.spaceSelectsMatch = q, this.autocompleteMode && (S = ``, U = false), u) this.collection = [{ trigger: S, iframe: m, selectClass: g, containerClass: v, itemClass: b, selectTemplate: (D || t4.defaultSelectTemplate).bind(this), menuItemTemplate: (k || t4.defaultMenuItemTemplate).bind(this), noMatchTemplate: (r2 = z, typeof r2 == `string` ? r2.trim() === `` ? null : r2 : typeof r2 == `function` ? r2.bind(i2) : z || function() {
          return `<li>No Match Found!</li>`;
        }.bind(i2)), lookup: j, fillAttr: N, values: u, loadingItemTemplate: f, requireLeadingSpace: V, searchOpts: Y, menuItemLimit: Z, menuShowMinLength: $ }];
        else {
          if (!F) throw Error(`[Tribute] No collection specified.`);
          this.autocompleteMode && console.warn(`Tribute in autocomplete mode does not work for collections`), this.collection = F.map((function(e4) {
            return { trigger: e4.trigger || S, iframe: e4.iframe || m, selectClass: e4.selectClass || g, containerClass: e4.containerClass || v, itemClass: e4.itemClass || b, selectTemplate: (e4.selectTemplate || t4.defaultSelectTemplate).bind(i2), menuItemTemplate: (e4.menuItemTemplate || t4.defaultMenuItemTemplate).bind(i2), noMatchTemplate: (function(e5) {
              return typeof e5 == `string` ? e5.trim() === `` ? null : e5 : typeof e5 == `function` ? e5.bind(i2) : z || function() {
                return `<li>No Match Found!</li>`;
              }.bind(i2);
            })(z), lookup: e4.lookup || j, fillAttr: e4.fillAttr || N, values: e4.values, loadingItemTemplate: e4.loadingItemTemplate, requireLeadingSpace: e4.requireLeadingSpace, searchOpts: e4.searchOpts || Y, menuItemLimit: e4.menuItemLimit || Z, menuShowMinLength: e4.menuShowMinLength || $ };
          }));
        }
        new c(this), new o(this), new s(this), new l(this);
      }
      return n(t4, [{ key: `triggers`, value: function() {
        return this.collection.map((function(e4) {
          return e4.trigger;
        }));
      } }, { key: `attach`, value: function(e4) {
        if (!e4) throw Error(`[Tribute] Must pass in a DOM node or NodeList.`);
        if (typeof jQuery < `u` && e4 instanceof jQuery && (e4 = e4.get()), e4.constructor === NodeList || e4.constructor === HTMLCollection || e4.constructor === Array) for (var t5 = e4.length, n2 = 0; n2 < t5; ++n2) this._attach(e4[n2]);
        else this._attach(e4);
      } }, { key: `_attach`, value: function(e4) {
        e4.hasAttribute(`data-tribute`) && console.warn(`Tribute was already bound to ` + e4.nodeName), this.ensureEditable(e4), this.events.bind(e4), e4.setAttribute(`data-tribute`, true);
      } }, { key: `ensureEditable`, value: function(e4) {
        if (t4.inputTypes().indexOf(e4.nodeName) === -1) {
          if (!e4.contentEditable) throw Error(`[Tribute] Cannot bind to ` + e4.nodeName);
          e4.contentEditable = true;
        }
      } }, { key: `createMenu`, value: function(e4) {
        var t5 = this.range.getDocument().createElement(`div`), n2 = this.range.getDocument().createElement(`ul`);
        return t5.className = e4, t5.appendChild(n2), this.menuContainer ? this.menuContainer.appendChild(t5) : this.range.getDocument().body.appendChild(t5);
      } }, { key: `showMenuFor`, value: function(e4, t5) {
        var n2 = this;
        if (!this.isActive || this.current.element !== e4 || this.current.mentionText !== this.currentMentionTextSnapshot) {
          this.currentMentionTextSnapshot = this.current.mentionText, this.menu || (this.menu = this.createMenu(this.current.collection.containerClass), e4.tributeMenu = this.menu, this.menuEvents.bind(this.menu)), this.isActive = true, this.menuSelected = 0, this.current.mentionText || (this.current.mentionText = ``);
          var i2 = function(e5) {
            if (n2.isActive) {
              var i3 = n2.search.filter(n2.current.mentionText, e5, { pre: n2.current.collection.searchOpts.pre || `<span>`, post: n2.current.collection.searchOpts.post || `</span>`, skip: n2.current.collection.searchOpts.skip, extract: function(e6) {
                if (typeof n2.current.collection.lookup == `string`) return e6[n2.current.collection.lookup];
                if (typeof n2.current.collection.lookup == `function`) return n2.current.collection.lookup(e6, n2.current.mentionText);
                throw Error(`Invalid lookup attribute, lookup must be string or function.`);
              } });
              n2.current.collection.menuItemLimit && (i3 = i3.slice(0, n2.current.collection.menuItemLimit)), n2.current.filteredItems = i3;
              var a2 = n2.menu.querySelector(`ul`);
              if (!i3.length) {
                var o2 = new CustomEvent(`tribute-no-match`, { detail: n2.menu });
                n2.current.element.dispatchEvent(o2), typeof n2.current.collection.noMatchTemplate == `function` && !n2.current.collection.noMatchTemplate() || !n2.current.collection.noMatchTemplate ? n2.hideMenu() : (typeof n2.current.collection.noMatchTemplate == `function` ? a2.innerHTML = n2.current.collection.noMatchTemplate() : a2.innerHTML = n2.current.collection.noMatchTemplate, n2.range.positionMenuAtCaret(t5));
                return;
              }
              a2.innerHTML = ``;
              var s2 = n2.range.getDocument().createDocumentFragment();
              i3.forEach((function(e6, t6) {
                var i4 = n2.range.getDocument().createElement(`li`);
                i4.setAttribute(`data-index`, t6), i4.className = n2.current.collection.itemClass, i4.addEventListener(`mousemove`, (function(e7) {
                  var t7 = r(n2._findLiTarget(e7.target), 2), i5 = (t7[0], t7[1]);
                  e7.movementY !== 0 && n2.events.setActiveLi(i5);
                })), n2.menuSelected === t6 && i4.classList.add(n2.current.collection.selectClass), i4.innerHTML = n2.current.collection.menuItemTemplate(e6), s2.appendChild(i4);
              })), a2.appendChild(s2), n2.range.positionMenuAtCaret(t5);
            }
          };
          typeof this.current.collection.values == `function` ? (this.current.collection.loadingItemTemplate && (this.menu.querySelector(`ul`).innerHTML = this.current.collection.loadingItemTemplate, this.range.positionMenuAtCaret(t5)), this.current.collection.values(this.current.mentionText, i2)) : i2(this.current.collection.values);
        }
      } }, { key: `_findLiTarget`, value: function(e4) {
        if (!e4) return [];
        var t5 = e4.getAttribute(`data-index`);
        return t5 ? [e4, t5] : this._findLiTarget(e4.parentNode);
      } }, { key: `showMenuForCollection`, value: function(e4, t5) {
        e4 !== document.activeElement && this.placeCaretAtEnd(e4), this.current.collection = this.collection[t5 || 0], this.current.externalTrigger = true, this.current.element = e4, e4.isContentEditable ? this.insertTextAtCursor(this.current.collection.trigger) : this.insertAtCaret(e4, this.current.collection.trigger), this.showMenuFor(e4);
      } }, { key: `placeCaretAtEnd`, value: function(e4) {
        if (e4.focus(), window.getSelection !== void 0 && document.createRange !== void 0) {
          var t5 = document.createRange();
          t5.selectNodeContents(e4), t5.collapse(false);
          var n2 = window.getSelection();
          n2.removeAllRanges(), n2.addRange(t5);
        } else if (document.body.createTextRange !== void 0) {
          var r2 = document.body.createTextRange();
          r2.moveToElementText(e4), r2.collapse(false), r2.select();
        }
      } }, { key: `insertTextAtCursor`, value: function(e4) {
        var t5, n2;
        (n2 = (t5 = window.getSelection()).getRangeAt(0)).deleteContents();
        var r2 = document.createTextNode(e4);
        n2.insertNode(r2), n2.selectNodeContents(r2), n2.collapse(false), t5.removeAllRanges(), t5.addRange(n2);
      } }, { key: `insertAtCaret`, value: function(e4, t5) {
        var n2 = e4.scrollTop, r2 = e4.selectionStart, i2 = e4.value.substring(0, r2), a2 = e4.value.substring(e4.selectionEnd, e4.value.length);
        e4.value = i2 + t5 + a2, r2 += t5.length, e4.selectionStart = r2, e4.selectionEnd = r2, e4.focus(), e4.scrollTop = n2;
      } }, { key: `hideMenu`, value: function() {
        this.menu && (this.menu.style.cssText = `display: none;`, this.isActive = false, this.menuSelected = 0, this.current = {});
      } }, { key: `selectItemAtIndex`, value: function(e4, t5) {
        if (typeof (e4 = parseInt(e4)) == `number` && !isNaN(e4)) {
          var n2 = this.current.filteredItems[e4], r2 = this.current.collection.selectTemplate(n2);
          r2 !== null && this.replaceText(r2, t5, n2);
        }
      } }, { key: `replaceText`, value: function(e4, t5, n2) {
        this.range.replaceTriggerText(e4, true, true, t5, n2);
      } }, { key: `_append`, value: function(e4, t5, n2) {
        if (typeof e4.values == `function`) throw Error(`Unable to append to values, as it is a function.`);
        e4.values = n2 ? t5 : e4.values.concat(t5);
      } }, { key: `append`, value: function(e4, t5, n2) {
        var r2 = parseInt(e4);
        if (typeof r2 != `number`) throw Error(`please provide an index for the collection to update.`);
        var i2 = this.collection[r2];
        this._append(i2, t5, n2);
      } }, { key: `appendCurrent`, value: function(e4, t5) {
        if (!this.isActive) throw Error(`No active state. Please use append instead and pass an index.`);
        this._append(this.current.collection, e4, t5);
      } }, { key: `detach`, value: function(e4) {
        if (!e4) throw Error(`[Tribute] Must pass in a DOM node or NodeList.`);
        if (typeof jQuery < `u` && e4 instanceof jQuery && (e4 = e4.get()), e4.constructor === NodeList || e4.constructor === HTMLCollection || e4.constructor === Array) for (var t5 = e4.length, n2 = 0; n2 < t5; ++n2) this._detach(e4[n2]);
        else this._detach(e4);
      } }, { key: `_detach`, value: function(e4) {
        var t5 = this;
        this.events.unbind(e4), e4.tributeMenu && this.menuEvents.unbind(e4.tributeMenu), setTimeout((function() {
          e4.removeAttribute(`data-tribute`), t5.isActive = false, e4.tributeMenu && e4.tributeMenu.remove();
        }));
      } }, { key: `isActive`, get: function() {
        return this._isActive;
      }, set: function(e4) {
        if (this._isActive != e4 && (this._isActive = e4, this.current.element)) {
          var t5 = new CustomEvent(`tribute-active-${e4}`);
          this.current.element.dispatchEvent(t5);
        }
      } }], [{ key: `defaultSelectTemplate`, value: function(e4) {
        return e4 === void 0 ? `${this.current.collection.trigger}${this.current.mentionText}` : this.range.isContentEditable(this.current.element) ? `<span class="tribute-mention">` + (this.current.collection.trigger + e4.original[this.current.collection.fillAttr]) + `</span>` : this.current.collection.trigger + e4.original[this.current.collection.fillAttr];
      } }, { key: `defaultMenuItemTemplate`, value: function(e4) {
        return e4.string;
      } }, { key: `inputTypes`, value: function() {
        return [`TEXTAREA`, `INPUT`];
      } }]), t4;
    })();
  }));
}));
export {
  t
};
