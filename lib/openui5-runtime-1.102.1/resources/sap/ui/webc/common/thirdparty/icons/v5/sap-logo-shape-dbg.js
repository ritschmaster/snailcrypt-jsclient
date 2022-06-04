sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "sap-logo-shape";
	const pathData = "M509.476 113q8 17-5 32l-227 231q-10 8-20 8h-227q-13 0-21-7.5t-8-20.5V125q0-13 8-21t21-8h454q8 0 15.5 4.5t9.5 12.5z";
	const ltr = true;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
