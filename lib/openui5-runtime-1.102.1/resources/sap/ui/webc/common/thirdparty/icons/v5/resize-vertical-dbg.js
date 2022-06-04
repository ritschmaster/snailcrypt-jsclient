sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "resize-vertical";
	const pathData = "M197.5 121q-8 8-18 8t-18-8-8-18 8-18l77-77q8-8 18-8t18 8l76 77q8 8 8 18t-8 18-17.5 8-17.5-8l-59-59zm118 271q8-8 17.5-8t17.5 8 8 17.5-8 17.5l-76 77q-8 8-18 8t-18-8l-77-77q-8-8-8-17.5t8-17.5 18-8 18 8l59 58zm-263-161q-12 0-19-7.5t-7-18.5q0-25 26-25h408q26 0 26 25 0 11-7 18.5t-19 7.5h-408zm408 51q26 0 26 25 0 26-26 26h-408q-26 0-26-26 0-25 26-25h408z";
	const ltr = false;
	const accData = i18nDefaults.ICON_RESIZE_VERTICAL;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV4 = { pathData, accData };

	return pathDataV4;

});
