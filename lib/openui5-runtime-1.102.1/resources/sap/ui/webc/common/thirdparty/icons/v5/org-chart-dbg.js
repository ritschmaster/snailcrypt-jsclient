sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "org-chart";
	const pathData = "M484 341q28 0 28 28v113q0 13-7.5 21t-20.5 8H313q-13 0-20.5-8t-7.5-21V369q0-28 28-28h57v-57H143v57h57q28 0 28 28v113q0 13-7.5 21t-20.5 8H29q-13 0-20.5-8T1 482V369q0-28 28-28h57v-86q0-28 29-28h113v-57h-85q-28 0-28-28V28q0-28 28-28h227q28 0 28 28v114q0 28-28 28h-85v57h113q13 0 21 7.5t8 20.5v86h57zM171 113h171V57H171v56zm0 284H58v57h113v-57zm284 0H342v57h113v-57z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
