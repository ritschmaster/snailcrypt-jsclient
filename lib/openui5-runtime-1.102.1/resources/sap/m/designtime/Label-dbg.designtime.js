/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provide the Design Time Metadata for the sap.m.Label control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "LABEL_NAME",
				plural: "LABEL_NAME_PLURAL"
			},
			palette: {
				group: "DISPLAY",
				icons: {
					svg: "sap/m/designtime/Label.icon.svg"
				}
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				rename: {
					changeType: "rename",
					domRef: function (oControl) {
						return oControl.$()[0];
					}
				},
				reveal: {
					changeType: "unhideControl"
				}
			},
			templates: {
				create: "sap/m/designtime/Label.create.fragment.xml"
			}
		};
	});