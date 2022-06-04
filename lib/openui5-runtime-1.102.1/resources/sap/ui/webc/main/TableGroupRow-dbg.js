/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.TableGroupRow.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/TableGroupRow"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>TableGroupRow</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>sap.ui.webc.main.TableGroupRow</code> component represents a group row in the <code>sap.ui.webc.main.Table</code>.
	 *
	 * <h3>CSS Shadow Parts</h3>
	 *
	 * <ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br>
	 * The <code>sap.ui.webc.main.TableGroupRow</code> exposes the following CSS Shadow Parts:
	 * <ul>
	 *     <li>group-row - Used to style the native <code>tr</code> element.</li>
	 * </ul>
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.95.0
	 * @experimental Since 1.95.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.TableGroupRow
	 * @implements sap.ui.webc.main.ITableRow
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var TableGroupRow = WebComponent.extend("sap.ui.webc.main.TableGroupRow", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-table-group-row-ui5",
			interfaces: [
				"sap.ui.webc.main.ITableRow"
			],
			properties: {

				/**
				 * Defines the content of the control
				 */
				text: {
					type: "string",
					defaultValue: "",
					mapping: "textContent"
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return TableGroupRow;
});