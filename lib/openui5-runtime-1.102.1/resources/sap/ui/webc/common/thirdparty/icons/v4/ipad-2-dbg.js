sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "ipad-2";
	const pathData = "M32 448q-13 0-22.5-9.5T0 416V96q0-14 9.5-23T32 64h448q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5H32zm64-32h352V96H96v320zM56 232q-10 0-17 7t-7 17 7 17 17 7q11 0 17.5-7t6.5-17-6.5-17-17.5-7z";
	const ltr = false;
	const accData = i18nDefaults.ICON_IPAD;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV5 = { pathData, accData };

	return pathDataV5;

});
