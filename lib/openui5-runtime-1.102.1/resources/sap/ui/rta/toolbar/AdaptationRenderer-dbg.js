/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/rta/toolbar/BaseRenderer"
], function(
	BaseRenderer
) {
	"use strict";

	var AdaptationRenderer = BaseRenderer.extend("sap.ui.rta.toolbar.AdaptationRenderer");

	AdaptationRenderer.render = function (oRM, oControl) {
		oRM.addClass("sapUiRtaToolbarAdaptation");

		BaseRenderer.render(oRM, oControl);
	};

	return AdaptationRenderer;
});
