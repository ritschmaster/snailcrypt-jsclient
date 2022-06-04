sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "top-side-panel-layout";
	const pathData = "M0 512V0h512v512H0zm32-384h448V32H32v96zm128 32v320h320V160H160zM32 480h96V160H32v320z";
	const ltr = false;
	const collection = "business-suite";
	const packageName = "@ui5/webcomponents-icons-business-suite";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var topSidePanelLayout = { pathData };

	return topSidePanelLayout;

});
