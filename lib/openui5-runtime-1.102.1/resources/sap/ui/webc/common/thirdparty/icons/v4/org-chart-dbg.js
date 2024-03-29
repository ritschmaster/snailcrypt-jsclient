sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "org-chart";
	const pathData = "M32 384q0-13 9.5-22.5T64 352h32v-32q0-17 9-32t23-23q14-9 32-9h80v-64h-80q-14 0-23-9t-9-23V64q0-13 9-22.5t23-9.5h192q14 0 23 9.5t9 22.5v96q0 14-9 23t-23 9h-80v64h80q19 0 32 9 14 8 23 23t9 32v32h32q14 0 23 9.5t9 22.5v64q0 14-9 23t-23 9H320q-13 0-22.5-9t-9.5-23v-64q0-13 9.5-22.5T320 352h64v-32q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v32h64q14 0 23 9.5t9 22.5v64q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448v-64zm320-224V64H160v96h192zm96 288v-64H320v64h128zM64 384v64h128v-64H64z";
	const ltr = false;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV5 = { pathData };

	return pathDataV5;

});
