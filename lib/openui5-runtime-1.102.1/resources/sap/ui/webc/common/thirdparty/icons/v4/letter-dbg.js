sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "letter";
	const pathData = "M480 64q14 0 23 9t9 23v320q0 13-9 22-9 10-23 10H32q-13 0-22-10-10-9-10-22V96q0-14 10-23 9-9 22-9h448zm0 32H32v320h448V96zm-32 80q0 16-16 16h-32q-6 0-11-5t-5-11v-32q0-16 16-16h32q16 0 16 16v32zm-176 48q16 0 16 16t-16 16H112q-6 0-11-5t-5-11q0-16 16-16h160zm-96 64q16 0 16 16t-16 16h-64q-6 0-11-5t-5-11q0-16 16-16h64z";
	const ltr = false;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV5 = { pathData };

	return pathDataV5;

});
