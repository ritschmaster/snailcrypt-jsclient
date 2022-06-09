sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const s=(s,o,l)=>l?e.html`<${e.scopeTag("ui5-popover",o,l)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${e.classMap(s.classes.popoverValueState)}" style="${e.styleMap(s.styles.popoverHeader)}">${s._valueStateMessageInputIcon?t(s,o,l):undefined}${s.shouldDisplayDefaultValueStateMessage?a(s):i(s)}</div></${e.scopeTag("ui5-popover",o,l)}>`:e.html`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${e.classMap(s.classes.popoverValueState)}" style="${e.styleMap(s.styles.popoverHeader)}">${s._valueStateMessageInputIcon?t(s,o,l):undefined}${s.shouldDisplayDefaultValueStateMessage?a(s):i(s)}</div></ui5-popover>`;const t=(s,t,a)=>a?e.html`<${e.scopeTag("ui5-icon",t,a)} class="ui5-input-value-state-message-icon" name="${e.ifDefined(s._valueStateMessageInputIcon)}"></${e.scopeTag("ui5-icon",t,a)}>`:e.html`<ui5-icon class="ui5-input-value-state-message-icon" name="${e.ifDefined(s._valueStateMessageInputIcon)}"></ui5-icon>`;const a=(s,t,a)=>e.html`${e.ifDefined(s.valueStateText)}`;const i=(s,t,a)=>e.html`${e.repeat(s.valueStateMessageText,(e,s)=>e._id||s,(e,s)=>o(e))}`;const o=(s,t,a,i,o)=>e.html`${e.ifDefined(s)}`;return s});