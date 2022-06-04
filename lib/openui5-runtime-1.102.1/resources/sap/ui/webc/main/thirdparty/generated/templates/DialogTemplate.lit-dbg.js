sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<section style="${litRender.styleMap(context.styles.root)}" class="${litRender.classMap(context.classes.root)}" role="dialog" aria-modal="${litRender.ifDefined(context._ariaModal)}" aria-label="${litRender.ifDefined(context._ariaLabel)}" aria-labelledby="${litRender.ifDefined(context._ariaLabelledBy)}" @keydown=${context._onkeydown} @focusout=${context._onfocusout} @mouseup=${context._onmouseup} @mousedown=${context._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToLast}></span>${ context._displayHeader ? block1(context) : undefined }<div style="${litRender.styleMap(context.styles.content)}" class="${litRender.classMap(context.classes.content)}"  @scroll="${context._scroll}" part="content"><slot></slot></div>${ context.footer.length ? block4() : undefined }${ context._showResizeHandle ? block5(context, tags, suffix) : undefined }<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToFirst}></span></section> `;
	const block1 = (context, tags, suffix) => litRender.html`<header class="ui5-popup-header-root" id="ui5-popup-header" tabindex="${litRender.ifDefined(context._headerTabIndex)}" @keydown="${context._onDragOrResizeKeyDown}" @mousedown="${context._onDragMouseDown}" part="header">${ context.header.length ? block2() : block3(context) }</header>`;
	const block2 = (context, tags, suffix) => litRender.html`<slot name="header"></slot>`;
	const block3 = (context, tags, suffix) => litRender.html`<h2 id="ui5-popup-header-text" class="ui5-popup-header-text">${litRender.ifDefined(context.headerText)}</h2>`;
	const block4 = (context, tags, suffix) => litRender.html`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
	const block5 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${context._onResizeMouseDown}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>` : litRender.html`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${context._onResizeMouseDown}"></ui5-icon>`;

	return block0;

});
