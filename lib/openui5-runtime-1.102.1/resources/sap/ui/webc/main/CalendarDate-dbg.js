/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.CalendarDate.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/CalendarDate"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>CalendarDate</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>sap.ui.webc.main.CalendarDate</code> component defines a calendar date to be used inside <code>sap.ui.webc.main.Calendar</code>
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias sap.ui.webc.main.CalendarDate
	 * @implements sap.ui.webc.main.ICalendarDate
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var CalendarDate = WebComponent.extend("sap.ui.webc.main.CalendarDate", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-date-ui5",
			interfaces: [
				"sap.ui.webc.main.ICalendarDate"
			],
			properties: {

				/**
				 * The date formatted according to the <code>formatPattern</code> property of the <code>sap.ui.webc.main.Calendar</code> that hosts the component
				 */
				value: {
					type: "string"
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return CalendarDate;
});