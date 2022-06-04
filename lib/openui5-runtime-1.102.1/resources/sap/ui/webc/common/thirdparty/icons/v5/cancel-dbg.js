sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "cancel";
	const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5q0 52-20 98.5T437 436t-81.5 55-99.5 20q-52 0-98.5-20T76 436t-55-81.5T1 256q0-53 20-99.5T76 75t81.5-55T256 0zM52 256q0 42 16 79t44 65 65 44 79 16q71 0 126-43L96 130q-44 55-44 126zm365 125q44-55 44-125 0-42-16-79.5T401 111t-65.5-44T256 51q-70 0-125 44z";
	const ltr = true;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
