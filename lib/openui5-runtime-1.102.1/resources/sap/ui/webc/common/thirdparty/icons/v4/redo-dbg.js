sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "redo";
	const pathData = "M297.5 343q-9-9-9-22.5t9-22.5l75-74h-180q-23 0-42 9.5t-32.5 25-18 31.5-4.5 29q0 10 2 20 7 35 35 56t63 21h253q13 0 22.5 9.5t9.5 22.5q0 14-9.5 23t-22.5 9h-256q-35 0-66-14t-53-38-32-52.5-10-56.5q0-7 1-15 3-31 18-57.5T88 201t51.5-30 60-11h172l-74-73q-10-10-10-23t10-22q9-10 22-10t23 10l129 128q8 9 8 22.5t-8 22.5l-128 128q-10 10-23 10t-23-10z";
	const ltr = false;
	const accData = i18nDefaults.ICON_REDO;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV5 = { pathData, accData };

	return pathDataV5;

});
