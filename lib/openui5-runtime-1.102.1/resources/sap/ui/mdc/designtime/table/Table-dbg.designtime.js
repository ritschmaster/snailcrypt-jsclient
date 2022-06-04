/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/mdc/p13n/Engine",
	"sap/ui/mdc/Table",
	"../Util"
], function (Engine, Table, Util) {
	"use strict";

	// initial structure of designTime object
	var oDesignTime = {
		name: "{name}",
		description: "{description}",
		actions: {
			settings: function () {
				//RTA expects the settings to be returned as function
				return {
					handler: function (oControl, mPropertyBag) {
						return Engine.getInstance().getRTASettingsActionHandler(oControl, mPropertyBag, oControl.getActiveP13nModes());
					}
				};
			}
		},
		properties: {},
		aggregations: {
			_content: {
				propagateMetadata: function(oElement) {
					if (oElement.isA("sap.ui.mdc.ActionToolbar")) {
						return {
							actions: {
								settings: {}
							}
						};
					}

					return {
						actions: "not-adaptable" // other controls within the conten aggregation will not be adaptable for RTA and Visual Editor
					};
				}
			}
		}
	};
	// array containing all allowed control properties. Update the aAllowedProperties to enable a property for DTA
	var aAllowedProperties = ["width", "height", "headerLevel",
			"header", "headerVisible", "showRowCount", "threshold",
			"noDataText", "enableExport", "busyIndicatorDelay","enableColumnResize",
			"showPasteButton", "multiSelectMode"],
		// array containing all allowed control aggregations. Update the aAllowedAggregations to enable an aggregation for DTA
		aAllowedAggregations = [
			"_content"
		];

	return Util.getDesignTime(Table, aAllowedProperties, aAllowedAggregations, oDesignTime);

});
