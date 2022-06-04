sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "vertical-grip";
	const pathData = "M224 96V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z";
	const ltr = false;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV5 = { pathData };

	return pathDataV5;

});
