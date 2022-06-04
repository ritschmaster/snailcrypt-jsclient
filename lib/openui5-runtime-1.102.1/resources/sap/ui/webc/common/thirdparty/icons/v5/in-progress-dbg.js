sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "in-progress";
	const pathData = "M336.5 373q11 0 19-7.5t8-18.5-8-19l-72-72V133q0-12-7.5-19.5t-19.5-7.5-19.5 7.5-7.5 19.5v134q0 10 8 18l80 80q8 8 19 8zm80-373q34 0 57 22.5t23 57.5v320q0 34-23 57t-57 23h-320q-35 0-57.5-23t-22.5-57V80q0-35 22.5-57.5T96.5 0h320zm27 80q0-12-7.5-19.5T416.5 53h-320q-12 0-19.5 7.5T69.5 80v320q0 12 7.5 19.5t19.5 7.5h320q12 0 19.5-7.5t7.5-19.5V80z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
