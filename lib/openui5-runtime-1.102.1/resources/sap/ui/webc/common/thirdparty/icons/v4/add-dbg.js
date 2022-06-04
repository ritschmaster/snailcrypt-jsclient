sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "add";
	const pathData = "M32 240q0-7 5-11.5t11-4.5h176V48q0-7 5-11.5t11-4.5h32q16 0 16 16v176h176q16 0 16 16v32q0 16-16 16H288v176q0 16-16 16h-32q-6 0-11-4.5t-5-11.5V288H48q-6 0-11-4.5T32 272v-32z";
	const ltr = false;
	const accData = i18nDefaults.ICON_ADD;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV5 = { pathData, accData };

	return pathDataV5;

});
