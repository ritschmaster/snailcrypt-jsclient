sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const t=(t,n,s)=>e.html`<div id="${e.ifDefined(t._id)}" class="ui5-tab-root"><slot name="${e.ifDefined(t._defaultSlotName)}"></slot>${e.repeat(t.tabs,(e,t)=>e._id||t,(e,t)=>i(e))}</div>`;const i=(t,i,n,s,a)=>e.html`<slot name="${e.ifDefined(t._effectiveSlotName)}"></slot>`;return t});