sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "sys-add";
	const pathData = "M0 256q0-53 20-100t55-81.5T156.5 20 256 0t100 20 81.5 54.5T492 156t20 100-20 99.5-54.5 81.5-81.5 55-100 20-99.5-20T75 437t-55-81.5T0 256zm256 224q47 0 87.5-17.5t71-48 48-71.5 17.5-87q0-47-17.5-87.5t-48-71-71-48T256 32q-46 0-87 17.5t-71.5 48-48 71T32 256q0 46 17.5 87t48 71.5 71.5 48 87 17.5zm-16-240V128h32v112h112v32H272v112h-32V272H128v-32h112z";
	const ltr = false;
	const collection = "SAP-icons";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV5 = { pathData };

	return pathDataV5;

});
