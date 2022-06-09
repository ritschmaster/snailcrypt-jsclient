sap.ui.define(["sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i){"use strict";const e=(e,l,c)=>i.html`<div class="ui5-tli-root" dir="${i.ifDefined(e.effectiveDir)}"><div class="${i.classMap(e.classes.indicator)}"><div class="ui5-tli-icon-outer">${e.icon?s(e,l,c):n()}</div></div><div class="ui5-tli-bubble" tabindex="${i.ifDefined(e._tabIndex)}" data-sap-focus-ref><div class="ui5-tli-title">${e.name?t(e,l,c):undefined}<span>${i.ifDefined(e.titleText)}</span></div><div class="ui5-tli-subtitle">${i.ifDefined(e.subtitleText)}</div>${e.textContent?a():undefined}<span class="${i.classMap(e.classes.bubbleArrowPosition)}"></span></div></div>`;const s=(e,s,n)=>n?i.html`<${i.scopeTag("ui5-icon",s,n)} class="ui5-tli-icon" name="${i.ifDefined(e.icon)}"></${i.scopeTag("ui5-icon",s,n)}>`:i.html`<ui5-icon class="ui5-tli-icon" name="${i.ifDefined(e.icon)}"></ui5-icon>`;const n=(e,s,n)=>i.html`<div class="ui5-tli-dummy-icon-container"></div>`;const t=(e,s,n)=>i.html`${e.nameClickable?l(e,s,n):c(e)}`;const l=(e,s,n)=>n?i.html`<${i.scopeTag("ui5-link",s,n)} @click="${e.onNamePress}" class="ui5-tli-title-name-clickable">${i.ifDefined(e.name)}&nbsp;</${i.scopeTag("ui5-link",s,n)}>`:i.html`<ui5-link @click="${e.onNamePress}" class="ui5-tli-title-name-clickable">${i.ifDefined(e.name)}&nbsp;</ui5-link>`;const c=(e,s,n)=>i.html`<span class="ui5-tli-title-name">${i.ifDefined(e.name)}&nbsp;</span>`;const a=(e,s,n)=>i.html`<div class="ui5-tli-desc"><slot></slot></div>`;return e});