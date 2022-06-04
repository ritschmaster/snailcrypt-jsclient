/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.SuggestionGroupItem.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/SuggestionGroupItem"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>SuggestionGroupItem</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * The <code>sap.ui.webc.main.SuggestionGroupItem</code> is type of suggestion item, that can be used to split the <code>sap.ui.webc.main.Input</code> suggestions into groups.
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.95.0
	 * @experimental Since 1.95.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.SuggestionGroupItem
	 * @implements sap.ui.webc.main.IInputSuggestionItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var SuggestionGroupItem = WebComponent.extend("sap.ui.webc.main.SuggestionGroupItem", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-suggestion-group-item-ui5",
			interfaces: [
				"sap.ui.webc.main.IInputSuggestionItem"
			],
			properties: {

				/**
				 * Defines the text of the <code>sap.ui.webc.main.SuggestionGroupItem</code>.
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

	return SuggestionGroupItem;
});