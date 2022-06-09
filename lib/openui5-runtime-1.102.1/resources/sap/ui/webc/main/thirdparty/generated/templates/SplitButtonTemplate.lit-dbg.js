sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => suffix ? litRender.html`<div class="ui5-split-button-root" role="group" tabindex=${litRender.ifDefined(context._tabIndex)} aria-labelledby="${litRender.ifDefined(context._id)}-invisibleTextDefault ${litRender.ifDefined(context._id)}-invisibleText" @focusout=${context._onFocusOut} @focusin=${context._onFocusIn} @keydown=${context._onKeyDown} @keyup=${context._onKeyUp}><${litRender.scopeTag("ui5-button", tags, suffix)} class="ui5-split-text-button" design="${litRender.ifDefined(context.design)}" dir=${litRender.ifDefined(context.effectiveDir)} icon="${litRender.ifDefined(context._textButtonIcon)}" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._textButtonActive}" @click="${context._fireClick}" @touchstart=${context._textButtonPress} @mousedown=${context._textButtonPress} @mouseup=${context._textButtonRelease} @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}><slot></slot></${litRender.scopeTag("ui5-button", tags, suffix)}><div class="ui5-split-arrow-button-wrapper" dir=${litRender.ifDefined(context.effectiveDir)}><${litRender.scopeTag("ui5-button", tags, suffix)} class="ui5-split-arrow-button" design="${litRender.ifDefined(context.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._arrowButtonActive}" aria-expanded="${litRender.ifDefined(context.accessibilityInfo.ariaExpanded)}" aria-haspopup="${litRender.ifDefined(context.accessibilityInfo.ariaHaspopup)}" @click="${context._fireArrowClick}" @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}></${litRender.scopeTag("ui5-button", tags, suffix)}></div><span id="${litRender.ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${litRender.ifDefined(context.accessibilityInfo.description)}${litRender.ifDefined(context.accessibilityInfo.keyboardHint)}${litRender.ifDefined(context.accessibleName)}</span><span id="${litRender.ifDefined(context._id)}-invisibleTextDefault" class="ui5-hidden-text">${litRender.ifDefined(context.textButtonAccText)}</span></div>` : litRender.html`<div class="ui5-split-button-root" role="group" tabindex=${litRender.ifDefined(context._tabIndex)} aria-labelledby="${litRender.ifDefined(context._id)}-invisibleTextDefault ${litRender.ifDefined(context._id)}-invisibleText" @focusout=${context._onFocusOut} @focusin=${context._onFocusIn} @keydown=${context._onKeyDown} @keyup=${context._onKeyUp}><ui5-button class="ui5-split-text-button" design="${litRender.ifDefined(context.design)}" dir=${litRender.ifDefined(context.effectiveDir)} icon="${litRender.ifDefined(context._textButtonIcon)}" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._textButtonActive}" @click="${context._fireClick}" @touchstart=${context._textButtonPress} @mousedown=${context._textButtonPress} @mouseup=${context._textButtonRelease} @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}><slot></slot></ui5-button><div class="ui5-split-arrow-button-wrapper" dir=${litRender.ifDefined(context.effectiveDir)}><ui5-button class="ui5-split-arrow-button" design="${litRender.ifDefined(context.design)}" icon="slim-arrow-down" tabindex="-1" ?disabled="${context.disabled}" ?active="${context._arrowButtonActive}" aria-expanded="${litRender.ifDefined(context.accessibilityInfo.ariaExpanded)}" aria-haspopup="${litRender.ifDefined(context.accessibilityInfo.ariaHaspopup)}" @click="${context._fireArrowClick}" @focusin=${context._setTabIndexValue} @focusout=${context._onFocusOut}></ui5-button></div><span id="${litRender.ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${litRender.ifDefined(context.accessibilityInfo.description)}${litRender.ifDefined(context.accessibilityInfo.keyboardHint)}${litRender.ifDefined(context.accessibleName)}</span><span id="${litRender.ifDefined(context._id)}-invisibleTextDefault" class="ui5-hidden-text">${litRender.ifDefined(context.textButtonAccText)}</span></div>`;

	return block0;

});