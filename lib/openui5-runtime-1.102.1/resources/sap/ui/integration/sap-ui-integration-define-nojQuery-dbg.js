/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// define jQuery for bundling sap-ui-integration-nojQuery.js
(function() {
	"use strict";
	/*global jQuery */
	sap["ui"].define("sap/ui/thirdparty/jquery", function() {
		return jQuery;
	});
	sap["ui"].define("sap/ui/thirdparty/jqueryui/jquery-ui-position", function() {
		return jQuery;
	});
})();