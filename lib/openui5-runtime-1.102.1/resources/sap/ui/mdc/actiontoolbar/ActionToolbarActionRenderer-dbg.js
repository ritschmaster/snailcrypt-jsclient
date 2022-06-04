/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([], function() {
    "use strict";

	/**
	 * Form renderer.
	 * @namespace
	 */
	var ActionToolbarActionRenderer = {
		apiVersion: 2
	};

    /**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
	 * @param {sap.ui.mdc.actiontoolbar.ActionToolbarAction} oActionToolbarAction an object representation of the control that should be rendered
	 */
    ActionToolbarActionRenderer.render = function(rm, oActionToolbarAction) {
        var mAriaProps = { role: "form" };

        rm.openStart("div", oActionToolbarAction);

        rm.accessibilityState(oActionToolbarAction, mAriaProps);

        rm.openEnd();

        rm.renderControl(oActionToolbarAction.getAction());

        rm.close("div");
    };

    return ActionToolbarActionRenderer;

}, /* bExport= */ true);