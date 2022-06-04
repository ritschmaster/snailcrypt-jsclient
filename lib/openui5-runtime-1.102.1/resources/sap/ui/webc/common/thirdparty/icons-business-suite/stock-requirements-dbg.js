sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "stock-requirements";
	const pathData = "M0 111L92 0l91 111h-54v99H55v-99H0zm340 81v128H172V192h168zm-11 209h54v-99h74v99h55l-92 111z";
	const ltr = false;
	const collection = "business-suite";
	const packageName = "@ui5/webcomponents-icons-business-suite";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var stockRequirements = { pathData };

	return stockRequirements;

});
