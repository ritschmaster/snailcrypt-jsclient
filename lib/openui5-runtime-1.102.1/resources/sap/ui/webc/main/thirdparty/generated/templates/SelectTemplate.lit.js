sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const i=(i,o,d)=>d?e.html`<div class="ui5-select-root ui5-input-focusable-element" id="${e.ifDefined(i._id)}-select" @click="${i._onclick}">${i.selectedOptionIcon?n(i,o,d):undefined}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${e.ifDefined(i.tabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${e.ifDefined(i.ariaLabelText)}" aria-describedby="${e.ifDefined(i.valueStateTextId)}" aria-disabled="${e.ifDefined(i.isDisabled)}" aria-required="${e.ifDefined(i.required)}" aria-expanded="${e.ifDefined(i._isPickerOpen)}" aria-roledescription="${e.ifDefined(i._ariaRoleDescription)}" @keydown="${i._onkeydown}" @keypress="${i._handleKeyboardNavigation}" @keyup="${i._onkeyup}" @focusin="${i._onfocusin}" @focusout="${i._onfocusout}">${e.ifDefined(i._text)}</div><${e.scopeTag("ui5-icon",o,d)} name="slim-arrow-down" input-icon ?pressed="${i._iconPressed}" dir="${e.ifDefined(i.effectiveDir)}"></${e.scopeTag("ui5-icon",o,d)}>${i.hasValueState?a(i):undefined}<slot name="formSupport"></slot></div>`:e.html`<div class="ui5-select-root ui5-input-focusable-element" id="${e.ifDefined(i._id)}-select" @click="${i._onclick}">${i.selectedOptionIcon?n(i,o,d):undefined}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${e.ifDefined(i.tabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${e.ifDefined(i.ariaLabelText)}" aria-describedby="${e.ifDefined(i.valueStateTextId)}" aria-disabled="${e.ifDefined(i.isDisabled)}" aria-required="${e.ifDefined(i.required)}" aria-expanded="${e.ifDefined(i._isPickerOpen)}" aria-roledescription="${e.ifDefined(i._ariaRoleDescription)}" @keydown="${i._onkeydown}" @keypress="${i._handleKeyboardNavigation}" @keyup="${i._onkeyup}" @focusin="${i._onfocusin}" @focusout="${i._onfocusout}">${e.ifDefined(i._text)}</div><ui5-icon name="slim-arrow-down" input-icon ?pressed="${i._iconPressed}" dir="${e.ifDefined(i.effectiveDir)}"></ui5-icon>${i.hasValueState?a(i):undefined}<slot name="formSupport"></slot></div>`;const n=(i,n,a)=>a?e.html`<${e.scopeTag("ui5-icon",n,a)} aria-hidden="true" class="ui5-select-option-icon" name="${e.ifDefined(i.selectedOptionIcon)}" dir="${e.ifDefined(i.effectiveDir)}"></${e.scopeTag("ui5-icon",n,a)}>`:e.html`<ui5-icon aria-hidden="true" class="ui5-select-option-icon" name="${e.ifDefined(i.selectedOptionIcon)}" dir="${e.ifDefined(i.effectiveDir)}"></ui5-icon>`;const a=(i,n,a)=>e.html`<span id="${e.ifDefined(i._id)}-valueStateDesc" class="ui5-hidden-text">${e.ifDefined(i.valueStateText)}</span>`;return i});