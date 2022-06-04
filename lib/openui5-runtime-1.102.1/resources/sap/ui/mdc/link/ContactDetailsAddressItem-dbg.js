/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'sap/ui/core/Element'
], function(Element) {
	"use strict";

	/**
	 * Constructor for a new ContactDetailsAddressItem.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] initial settings for the new control
	 * @class Type for...
	 * @extends sap.ui.core.Element
	 * @version 1.102.1
	 * @constructor
	 * @private
	 * @since 1.56.0
	 * @alias sap.ui.mdc.link.ContactDetailsAddressItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var ContactDetailsAddressItem = Element.extend("sap.ui.mdc.link.ContactDetailsAddressItem", /** @lends sap.ui.mdc.link.ContactDetailsAddressItem.prototype */
	{
		metadata: {
			library: "sap.ui.mdc",
			properties: {
				street: {
					type: "string"
				},
				code: {
					type: "string"
				},
				locality: {
					type: "string"
				},
				region: {
					type: "string"
				},
				country: {
					type: "string"
				},
				types: {
					type: "sap.ui.mdc.ContactDetailsAddressType[]",
					defaultValue: []
				}
			}
		}
	});

	return ContactDetailsAddressItem;

});
