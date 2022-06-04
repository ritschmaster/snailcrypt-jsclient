sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "print";
	const pathData = "M511.5 333q0 32-22 54.5t-54 22.5h-26v76q0 26-25 26h-256q-25 0-25-26v-76h-26q-32 0-54.5-22.5T.5 333V205q0-32 22.5-54t54.5-22h26V26q0-25 25-25h256q25 0 25 25v103h26q32 0 54 22t22 54v128zm-51-128q0-25-25-25h-358q-25 0-25 25v128q0 25 25 25h26v-51q0-25 25-25h256q25 0 25 25v51h26q25 0 25-25V205zm-102 256V333h-204v128h204zm-204-409v77h204V52h-204zm230 179q0-26 25-26 26 0 26 26 0 25-26 25-25 0-25-25z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
