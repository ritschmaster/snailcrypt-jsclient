sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "add-document";
	const pathData = "M474 77q25 0 25 25 0 26-25 26h-51v51q0 12-7.5 19t-18.5 7-18.5-7-7.5-19v-51h-51q-25 0-25-26 0-25 25-25h51V26q0-12 7.5-19T397 0t18.5 7 7.5 19v51h51zm-77 179q11 0 18.5 7t7.5 19v204q0 11-7.5 18.5T397 512H39q-11 0-18.5-7.5T13 486V179q0-10 8-18L174 8q8-8 18-8h51q26 0 26 26 0 25-26 25h-41l-10 10v67q0 21-15 36t-36 15H74l-10 10v272h307V282q0-12 7.5-19t18.5-7z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
