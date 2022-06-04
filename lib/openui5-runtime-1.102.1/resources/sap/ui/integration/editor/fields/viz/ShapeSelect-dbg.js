/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/SegmentedButton",
	"sap/m/SegmentedButtonItem",
	"sap/ui/core/Core",
	"sap/base/util/merge",
	"sap/ui/core/theming/Parameters"
], function (
	Control, SegmentedButton, SegmentedButtonItem, Core, merge, Parameters
) {
	"use strict";

	/**
	 * @class
	 * @extends sap.ui.core.Control
	 * @alias sap.ui.integration.editor.fields.viz.ShapeSelect
	 * @author SAP SE
	 * @since 1.84.0
	 * @version 1.102.1
	 * @private
	 * @experimental since 1.84.0
	 * @ui5-restricted
	 */
	var ShapeSelect = Control.extend("sap.ui.integration.editor.fields.viz.ShapeSelect", {
		metadata: {
			library: "sap.ui.integration",
			properties: {
				value: {
					type: "string",
					defaultValue: "Circle"
				},
				editable: {
					type: "boolean",
					defaultValue: true
				}
			},
			aggregations: {
				_segmentedbutton: {
					type: "sap.m.SegmentedButton",
					multiple: false,
					visibility: "hidden"
				}
			}
		},
		renderer: function (oRm, oControl) {
			var oSegmentedButton = oControl.getAggregation("_segmentedbutton");
			oRm.openStart("div");
			oRm.addClass("sapUiIntegrationShapeSelect");
			oRm.writeElementData(oControl);
			oRm.openEnd();
			oRm.renderControl(oSegmentedButton);
			oRm.close("div");
		}
	});

	ShapeSelect.prototype.init = function () {
		this._oSegmentedButton = new SegmentedButton({
			items: [
				new SegmentedButtonItem({
					icon: "sap-icon://circle-task",
					key: "Circle"
				}),
				new SegmentedButtonItem({
					icon: "sap-icon://border",
					key: "Square"
				})
			]
		});
		this.setAggregation("_segmentedbutton", this._oSegmentedButton);
	};

	ShapeSelect.prototype.bindProperty = function (sProperty, oBindingInfo) {
		Control.prototype.bindProperty.apply(this, arguments);
		if (sProperty === "editable") {
			var oSegmentedButtonBindingInfo = merge({}, oBindingInfo);
			this._oSegmentedButton.bindProperty("enabled", oSegmentedButtonBindingInfo);
		}
		if (sProperty === "value") {
			var oSegmentedButtonBindingInfo = merge({}, oBindingInfo);
			this._oSegmentedButton.bindProperty("selectedKey", oSegmentedButtonBindingInfo);
		}
		return this;
	};

	return ShapeSelect;
});