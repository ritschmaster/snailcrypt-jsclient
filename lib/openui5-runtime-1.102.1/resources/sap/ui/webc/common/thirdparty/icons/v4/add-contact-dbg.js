sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "add-contact";
	const pathData = "M0 416V96q0-14 9.5-23T32 64h448q14 0 23 9t9 23v160h-32V96H32v320h224v32H32q-13 0-22.5-9.5T0 416zm256-32H64q0-54 24-75t72-21q-26 0-45-19t-19-45q0-27 19-45.5t45-18.5 45 18.5 19 45.5q0 26-19 45t-45 19q48 0 72 21t24 75zm48-224h96q16 0 16 16 0 6-4.5 11t-11.5 5h-96q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0 64h96q16 0 16 16 0 6-4.5 11t-11.5 5h-96q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm80 192h-96v-32h96v-96h32v96h96v32h-96v96h-32v-96z";
	const ltr = false;
	const accData = i18nDefaults.ICON_ADD_CONTACT;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV5 = { pathData, accData };

	return pathDataV5;

});
