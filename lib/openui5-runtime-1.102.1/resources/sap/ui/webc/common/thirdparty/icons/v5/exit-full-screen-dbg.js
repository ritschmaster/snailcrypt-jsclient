sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "exit-full-screen";
	const pathData = "M466.5 149q11 0 18.5 7.5t7.5 18.5-7.5 18-18.5 7h-127q-11 0-18.5-7t-7.5-18V47q0-11 7.5-18.5t18.5-7.5 18 7.5 7 18.5v66l70-70q8-8 19-8 10 0 18 8t8 18-8 18l-71 70h66zm-255-77q11 0 18 7.5t7 18.5-7 18-18 7h-77v77q0 11-7 18.5t-18 7.5-18.5-7.5-7.5-18.5V98q0-11 7.5-18.5t18.5-7.5h102zm204 205q11 0 18.5 7t7.5 18v103q0 11-7.5 18t-18.5 7h-102q-11 0-18.5-7t-7.5-18 7.5-18.5 18.5-7.5h77v-77q0-11 7-18t18-7zm-230 25q11 0 18.5 7.5t7.5 18.5v128q0 11-7.5 18t-18.5 7-18-7-7-18v-66l-71 70q-7 7-18 7t-18-7q-8-8-8-18t8-18l71-71h-67q-11 0-18-7t-7-18 7-18.5 18-7.5h128z";
	const ltr = false;
	const accData = i18nDefaults.ICON_EXIT_FULL_SCREEN;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV4 = { pathData, accData };

	return pathDataV4;

});
