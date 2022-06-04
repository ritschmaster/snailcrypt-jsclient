/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.fiori.SideNavigationItem.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/SideNavigationItem"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>SideNavigationItem</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>sap.ui.webc.fiori.SideNavigationItem</code> is used within <code>sap.ui.webc.fiori.SideNavigation</code> only. Via the <code>sap.ui.webc.fiori.SideNavigationItem</code> you control the content of the <code>SideNavigation</code>.
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.fiori.SideNavigationItem
	 * @implements sap.ui.webc.fiori.ISideNavigationItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var SideNavigationItem = WebComponent.extend("sap.ui.webc.fiori.SideNavigationItem", {
		metadata: {
			library: "sap.ui.webc.fiori",
			tag: "ui5-side-navigation-item-ui5",
			interfaces: [
				"sap.ui.webc.fiori.ISideNavigationItem"
			],
			properties: {

				/**
				 * Defines if the item is expanded
				 */
				expanded: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the icon of the item. <br>
				 * <br>
				 *
				 *
				 * The SAP-icons font provides numerous options. <br>
				 * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
				 */
				icon: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines whether the subitem is selected
				 */
				selected: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the text of the item.
				 */
				text: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the <code>click</code> event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.
				 */
				wholeItemToggleable: {
					type: "boolean",
					defaultValue: false
				}
			},
			defaultAggregation: "items",
			aggregations: {

				/**
				 * If you wish to nest menus, you can pass inner menu items to the default slot.
				 */
				items: {
					type: "sap.ui.webc.fiori.ISideNavigationSubItem",
					multiple: true
				}
			},
			designtime: "sap/ui/webc/fiori/designtime/SideNavigationItem.designtime"
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return SideNavigationItem;
});