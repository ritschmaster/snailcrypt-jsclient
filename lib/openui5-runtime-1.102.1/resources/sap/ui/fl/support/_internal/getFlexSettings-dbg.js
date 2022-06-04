/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/registry/Settings"
], function(
	Settings
) {
	"use strict";

	/**
	 * Provides an object with the flex Settings.
	 *
	 * @namespace sap.ui.fl.support._internal.getFlexSettings
	 * @since 1.99
	 * @version 1.102.1
	 * @private
	 * @ui5-restricted sap.ui.fl.support.api.SupportAPI
	 */

	return function () {
		return Settings.getInstance().then(function (oSettings) {
			return Object.keys(oSettings._oSettings).map(function(sKey) {
				return {
					key: sKey,
					value: oSettings._oSettings[sKey]
				};
			});
		});
	};
});
