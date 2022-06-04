sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "shortcut";
	const pathData = "M341 247q-11 0-18.5-7t-7.5-19v-67l-67 67q-20 20-28.5 42t-8.5 45 9 45 25 39 38.5 27 49.5 10h6q11 0 18.5 7.5T365 455q0 12-7.5 19t-18.5 7h-6q-39 0-71.5-14.5t-55-38.5-35-55.5T159 308q0-32 12.5-64t39.5-59l68-68h-68q-11 0-18.5-7T185 91q0-11 7.5-18.5T211 65h130q12 0 19 7.5t7 18.5v130q0 26-26 26z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
