sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "border";
	const pathData = "M448 32q13 0 22.5 9t9.5 23v384q0 14-9.5 23t-22.5 9H64q-14 0-23-9t-9-23V64q0-14 9-23t23-9h384zm0 32H64v384h384V64z";
	const ltr = false;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV5 = { pathData };

	return pathDataV5;

});
