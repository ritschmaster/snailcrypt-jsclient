sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "fridge";
	const pathData = "M384.5 1q32 0 54 22t22 54v358q0 32-22 54.5t-54 22.5h-256q-32 0-54.5-22.5T51.5 435V77q0-32 22.5-54t54.5-22h256zm-256 51q-25 0-25 25v102h306V77q0-25-25-25h-256zm256 409q11 0 18-7.5t7-18.5V231h-306v204q0 11 7 18.5t18 7.5h256zm-205-307q-25 0-25-26v-25q0-26 25-26 26 0 26 26v25q0 26-26 26zm0 102q26 0 26 26v76q0 26-26 26-25 0-25-26v-76q0-26 25-26z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
