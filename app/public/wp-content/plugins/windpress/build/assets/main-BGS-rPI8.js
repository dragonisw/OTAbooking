import { t as e } from "./virtualRef-Ceo06-ig.js";
import { t } from "./logger-BvowV9fY.js";
import { t as n } from "./windpress-LvZ2N0sE.js";
var r = document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${n}
        </span>
    </button>
`), { getVirtualRef: i } = e({}, { persist: `windpress.ui.state` });
document.querySelector(`.uniTopPanel__rightCol`).prepend(r);
var a = document.querySelector(`#windpressbuilderius-settings-navbar`);
function o() {
  let e2 = i(`window.minimized`, false).value;
  i(`window.minimized`, false).value = !e2, e2 ? a.classList.add(`active`) : a.classList.remove(`active`);
}
a.addEventListener(`click`, (e2) => {
  o();
}), t(`Module loaded!`, { module: `settings` });
