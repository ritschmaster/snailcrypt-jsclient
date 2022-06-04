/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/rta/util/changeVisualization/ChangeVisualizationUtils"
], function(
	ChangeVisualizationUtils
) {
	"use strict";

	var SplitVisualization = {};

	/**
	 * Creates a localized description and button text for split changes based on the provided
	 * current element label
	 *
	 * @param {object} mPayload - Change visualization payload from the change handler
	 * @param {string} sLabel - Change handler label
	 * @returns {object} Localized description text and button text
	 */
	SplitVisualization.getDescription = function (mPayload, sLabel) {
		var oRtaResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");
		var sDescriptionText = oRtaResourceBundle.getText("TXT_CHANGEVISUALIZATION_CHANGE_SPLIT", ChangeVisualizationUtils.shortenString(sLabel));
		var sDescriptionTooltip = oRtaResourceBundle.getText("TXT_CHANGEVISUALIZATION_CHANGE_SPLIT", sLabel);
		var sButtonText = oRtaResourceBundle.getText("BTN_CHANGEVISUALIZATION_SHOW_DEPENDENT_CONTAINER_SPLIT");
		return { descriptionText: sDescriptionText, descriptionTooltip: sDescriptionTooltip, buttonText: sButtonText};
	};

	return SplitVisualization;
});