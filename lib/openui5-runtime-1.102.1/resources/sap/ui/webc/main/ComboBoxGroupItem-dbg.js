/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.ComboBoxGroupItem.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/ComboBoxGroupItem"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>ComboBoxGroupItem</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * The <code>ui5-combobox-group-item</code> is type of suggestion item, that can be used to split the <code>sap.ui.webc.main.ComboBox</code> suggestions into groups.
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.95.0
	 * @experimental Since 1.95.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.ComboBoxGroupItem
	 * @implements sap.ui.webc.main.IComboBoxItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var ComboBoxGroupItem = WebComponent.extend("sap.ui.webc.main.ComboBoxGroupItem", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-cb-group-item-ui5",
			interfaces: [
				"sap.ui.webc.main.IComboBoxItem"
			],
			properties: {

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

	return ComboBoxGroupItem;
});