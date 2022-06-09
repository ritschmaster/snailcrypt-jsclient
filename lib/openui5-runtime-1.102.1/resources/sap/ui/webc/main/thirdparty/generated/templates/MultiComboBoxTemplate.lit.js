sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e){"use strict";const i=(i,t,u)=>u?e.html`<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="${e.ifDefined(i._id)}-hiddenText-nMore" class="ui5-hidden-text">${e.ifDefined(i._tokensCountText)}</span>${i.hasValueState?n(i):undefined}<${e.scopeTag("ui5-tokenizer",t,u)} slot="_beginContent" show-more class="ui5-multi-combobox-tokenizer" ?disabled="${i.disabled}" @ui5-show-more-items-press="${e.ifDefined(i._showFilteredItems)}" @ui5-token-delete="${e.ifDefined(i._tokenDelete)}" @focusout="${i._tokenizerFocusOut}" @focusin="${i._tokenizerFocusIn}" @click=${i._click} @keydown="${i._onTokenizerKeydown}" ?expanded="${i._tokenizerExpanded}">${e.repeat(i.items,(e,i)=>e._id||i,(e,n)=>o(e,n,i,t,u))}</${e.scopeTag("ui5-tokenizer",t,u)}><input id="ui5-multi-combobox-input" .value="${e.ifDefined(i.value)}" inner-input placeholder=${e.ifDefined(i._getPlaceholder)} ?disabled=${i.disabled} ?readonly=${i.readonly} value-state="${e.ifDefined(i.valueState)}" @input="${i._inputLiveChange}" @change=${i._inputChange} @keydown="${i._onkeydown}" @keyup="${i._onkeyup}" @click=${i._click} @focusin=${i.inputFocusIn} @focusout=${i.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${e.ifDefined(i.open)}" aria-autocomplete="both" aria-describedby="${e.ifDefined(i.ariaDescribedByText)}" aria-required="${e.ifDefined(i.required)}" />${i.icon?d():undefined}${!i.readonly?a(i,t,u):undefined}</div>`:e.html`<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="${e.ifDefined(i._id)}-hiddenText-nMore" class="ui5-hidden-text">${e.ifDefined(i._tokensCountText)}</span>${i.hasValueState?n(i):undefined}<ui5-tokenizer slot="_beginContent" show-more class="ui5-multi-combobox-tokenizer" ?disabled="${i.disabled}" @ui5-show-more-items-press="${e.ifDefined(i._showFilteredItems)}" @ui5-token-delete="${e.ifDefined(i._tokenDelete)}" @focusout="${i._tokenizerFocusOut}" @focusin="${i._tokenizerFocusIn}" @click=${i._click} @keydown="${i._onTokenizerKeydown}" ?expanded="${i._tokenizerExpanded}">${e.repeat(i.items,(e,i)=>e._id||i,(e,n)=>o(e,n,i,t,u))}</ui5-tokenizer><input id="ui5-multi-combobox-input" .value="${e.ifDefined(i.value)}" inner-input placeholder=${e.ifDefined(i._getPlaceholder)} ?disabled=${i.disabled} ?readonly=${i.readonly} value-state="${e.ifDefined(i.valueState)}" @input="${i._inputLiveChange}" @change=${i._inputChange} @keydown="${i._onkeydown}" @keyup="${i._onkeyup}" @click=${i._click} @focusin=${i.inputFocusIn} @focusout=${i.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${e.ifDefined(i.open)}" aria-autocomplete="both" aria-describedby="${e.ifDefined(i.ariaDescribedByText)}" aria-required="${e.ifDefined(i.required)}" />${i.icon?d():undefined}${!i.readonly?a(i,t,u):undefined}</div>`;const n=(i,n,o)=>e.html`<span id="${e.ifDefined(i._id)}-valueStateDesc" class="ui5-hidden-text">${e.ifDefined(i.valueStateText)}</span>`;const o=(i,n,o,d,a)=>e.html`${i.selected?t(i,n,o,d,a):undefined}`;const t=(i,n,o,t,d)=>d?e.html`<${e.scopeTag("ui5-token",t,d)} ?readonly="${o.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${e.ifDefined(i._id)}" part="token-${n}" text="${e.ifDefined(i.text)}"></${e.scopeTag("ui5-token",t,d)}>`:e.html`<ui5-token ?readonly="${o.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${e.ifDefined(i._id)}" part="token-${n}" text="${e.ifDefined(i.text)}"></ui5-token>`;const d=(i,n,o)=>e.html`<slot name="icon"></slot>`;const a=(i,n,o)=>o?e.html`<${e.scopeTag("ui5-icon",n,o)} name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${i.togglePopoverByDropdownIcon}" @mousedown="${i._onIconMousedown}" @focusin="${i._forwardFocusToInner}" ?pressed="${i.open}" dir="${e.ifDefined(i.effectiveDir)}" accessible-name="${e.ifDefined(i._iconAccessibleNameText)}"></${e.scopeTag("ui5-icon",n,o)}>`:e.html`<ui5-icon name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${i.togglePopoverByDropdownIcon}" @mousedown="${i._onIconMousedown}" @focusin="${i._forwardFocusToInner}" ?pressed="${i.open}" dir="${e.ifDefined(i.effectiveDir)}" accessible-name="${e.ifDefined(i._iconAccessibleNameText)}"></ui5-icon>`;return i});