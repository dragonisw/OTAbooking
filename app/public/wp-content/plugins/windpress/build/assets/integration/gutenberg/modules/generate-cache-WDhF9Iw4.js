import { t as e } from "../../../logger-BvowV9fY.js";
import { t } from "../../../windpress-anR1TjG4.js";
import { t as n } from "../../../useDarkMode-Dh2jjpNo.js";
var r = `windpressGenerateCacheOnSave`, i = `windpress/gutenberg`, a = () => React.createElement(t, { width: 20, height: 20, "aria-hidden": `true`, focusable: `false` }), o = () => React.createElement(`svg`, { xmlns: `http://www.w3.org/2000/svg`, width: `16`, height: `16`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `2`, strokeLinecap: `round`, strokeLinejoin: `round` }, React.createElement(`circle`, { cx: `12`, cy: `12`, r: `4` }), React.createElement(`path`, { d: `M12 2v2` }), React.createElement(`path`, { d: `M12 20v2` }), React.createElement(`path`, { d: `m4.93 4.93 1.41 1.41` }), React.createElement(`path`, { d: `m17.66 17.66 1.41 1.41` }), React.createElement(`path`, { d: `M2 12h2` }), React.createElement(`path`, { d: `M20 12h2` }), React.createElement(`path`, { d: `m6.34 17.66-1.41 1.41` }), React.createElement(`path`, { d: `m19.07 4.93-1.41 1.41` })), s = () => React.createElement(`svg`, { xmlns: `http://www.w3.org/2000/svg`, width: `16`, height: `16`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: `2`, strokeLinecap: `round`, strokeLinejoin: `round` }, React.createElement(`path`, { d: `M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z` })), c = () => React.createElement(`svg`, { xmlns: `http://www.w3.org/2000/svg`, width: `16`, height: `16`, viewBox: `0 0 24 24` }, React.createElement(`g`, { fill: `none`, stroke: `currentColor`, strokeLinecap: `round`, strokeLinejoin: `round`, strokeWidth: `2` }, React.createElement(`path`, { d: `M12 17v4m10-8.693V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693M8 21h8` }), React.createElement(`circle`, { cx: `19`, cy: `6`, r: `3` })));
function l() {
  let { set: e2 } = wp.data.useDispatch(wp.preferences.store), t2 = wp.data.useSelect((e3) => e3(wp.preferences.store).get(i, r) ?? true, []), l2 = (t3) => {
    e2(i, r, t3);
  }, { theme: u2, applyTheme: d2 } = n();
  return React.createElement(React.Fragment, null, React.createElement(wp.editor.PluginSidebarMoreMenuItem, { target: `windpress-settings`, icon: React.createElement(a, null) }, wp.i18n.__(`WindPress`, `windpress`)), React.createElement(wp.editor.PluginSidebar, { name: `windpress-settings`, title: wp.i18n.__(`WindPress Settings`, `windpress`), icon: React.createElement(a, null) }, React.createElement(wp.components.PanelBody, { title: wp.i18n.__(`Appearance`, `windpress`), initialOpen: true }, React.createElement(wp.components.PanelRow, null, React.createElement(`div`, { style: { width: `100%` } }, React.createElement(`div`, { style: { marginBottom: `8px`, fontSize: `11px`, fontWeight: `500`, textTransform: `uppercase`, color: `#1e1e1e` } }, wp.i18n.__(`Theme`, `windpress`)), React.createElement(`div`, { style: { display: `flex`, width: `100%`, gap: 0 } }, React.createElement(wp.components.Button, { icon: React.createElement(o, null), variant: `secondary`, onClick: () => d2(`light`), style: { flex: 1, justifyContent: `center`, gap: `4px`, borderTopRightRadius: 0, borderBottomRightRadius: 0, marginRight: `-1px`, backgroundColor: u2 === `light` ? `var(--wp-admin-theme-color)` : void 0, color: u2 === `light` ? `#fff` : void 0, borderColor: u2 === `light` ? `var(--wp-admin-theme-color)` : void 0 } }, wp.i18n.__(`Light`, `windpress`)), React.createElement(wp.components.Button, { icon: React.createElement(s, null), variant: `secondary`, onClick: () => d2(`dark`), style: { flex: 1, justifyContent: `center`, gap: `4px`, borderRadius: 0, marginRight: `-1px`, backgroundColor: u2 === `dark` ? `var(--wp-admin-theme-color)` : void 0, color: u2 === `dark` ? `#fff` : void 0, borderColor: u2 === `dark` ? `var(--wp-admin-theme-color)` : void 0 } }, wp.i18n.__(`Dark`, `windpress`)), React.createElement(wp.components.Button, { icon: React.createElement(c, null), variant: `secondary`, onClick: () => d2(`system`), style: { flex: 1, justifyContent: `center`, gap: `4px`, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, backgroundColor: u2 === `system` ? `var(--wp-admin-theme-color)` : void 0, color: u2 === `system` ? `#fff` : void 0, borderColor: u2 === `system` ? `var(--wp-admin-theme-color)` : void 0 } }, wp.i18n.__(`System`, `windpress`)))))), React.createElement(wp.components.PanelBody, { title: wp.i18n.__(`Cache Generation`, `windpress`), initialOpen: true }, React.createElement(wp.components.PanelRow, null, React.createElement(wp.components.ToggleControl, { label: wp.i18n.__(`Generate cache on save`, `windpress`), help: wp.i18n.__(`Automatically regenerate Tailwind CSS cache when saving posts. This ensures your Tailwind classes are compiled immediately after saving.`, `windpress`), checked: t2, onChange: l2 })))));
}
function u() {
  wp.plugins.registerPlugin(`windpress-settings`, { render: l, icon: React.createElement(a, null) });
}
var d = `windpressGenerateCacheOnSave`, f = `windpress/gutenberg`;
function p() {
  wp.data.dispatch(wp.preferences.store).setDefaults(f, { [d]: true }), u();
}
function m() {
  try {
    let { get: e2 } = wp.data.select(wp.preferences.store);
    return e2(f, d) ?? true;
  } catch {
    return true;
  }
}
function h() {
  p();
}
h();
var g = new BroadcastChannel(`windpress`);
(function() {
  let t2 = window.fetch;
  window.fetch = function(n2, r2) {
    let i2 = typeof n2 == `string` ? n2 : n2.url;
    if (!m()) return t2.apply(this, arguments);
    if ((r2?.method === `POST` || r2?.method === `PUT`) && (i2.includes(`/wp/v2/posts/`) || i2.includes(`/wp/v2/pages/`) || i2.includes(`/wp/v2/wp_template/`) || i2.includes(`/wp/v2/wp_template_part/`))) {
      let n3 = t2.apply(this, arguments);
      return n3.then((t3) => {
        t3.ok && (e(`Post saved, generating cache...`, { module: `generate-cache` }), g.postMessage({ task: `generate-cache`, source: `windpress/integration`, target: `windpress/compiler`, data: { kind: `incremental`, incremental: { providers: [`gutenberg`] } } }));
      }).catch((t3) => {
        e(`Error saving post`, { module: `generate-cache`, error: t3 });
      }), n3;
    }
    return t2.apply(this, arguments);
  };
})(), e(`Module loaded!`, { module: `generate-cache` });
