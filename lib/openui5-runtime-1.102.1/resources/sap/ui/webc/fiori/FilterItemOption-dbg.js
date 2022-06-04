/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.fiori.FilterItemOption.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/FilterItemOption"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>FilterItemOption</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * <h3>Usage</h3>
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.97.0
	 * @experimental Since 1.97.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.fiori.FilterItemOption
	 * @implements sap.ui.webc.fiori.IFilterItemOption
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var FilterItemOption = WebComponent.extend("sap.ui.webc.fiori.FilterItemOption", {
		metadata: {
			library: "sap.ui.webc.fiori",
			tag: "ui5-filter-item-option-ui5",
			interfaces: [
				"sap.ui.webc.fiori.IFilterItemOption"
			],
			properties: {

				/**
				 * Defines whether the option is selected
				 */
				selected: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the text of the component.
				 */
				text: {
					type: "string",
					defaultValue: ""
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return FilterItemOption;
});