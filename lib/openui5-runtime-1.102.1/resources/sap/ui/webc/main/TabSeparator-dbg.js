/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.TabSeparator.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/TabSeparator"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>TabSeparator</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * The <code>sap.ui.webc.main.TabSeparator</code> represents a vertical line to separate tabs inside a <code>sap.ui.webc.main.TabContainer</code>.
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.TabSeparator
	 * @implements sap.ui.webc.main.ITab
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var TabSeparator = WebComponent.extend("sap.ui.webc.main.TabSeparator", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-tab-separator-ui5",
			interfaces: [
				"sap.ui.webc.main.ITab"
			]
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return TabSeparator;
});