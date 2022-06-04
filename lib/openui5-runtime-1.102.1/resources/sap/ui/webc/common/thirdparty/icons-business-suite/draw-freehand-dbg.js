sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "draw-freehand";
	const pathData = "M507 0v72h-72V0h72zm-69 100L101 447l-32-36L405 64zM77 440v72H5v-72h72z";
	const ltr = false;
	const collection = "business-suite";
	const packageName = "@ui5/webcomponents-icons-business-suite";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var drawFreehand = { pathData };

	return drawFreehand;

});
