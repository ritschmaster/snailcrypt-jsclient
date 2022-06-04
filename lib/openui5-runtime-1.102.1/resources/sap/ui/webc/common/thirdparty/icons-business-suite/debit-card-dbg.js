sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "debit-card";
	const pathData = "M467.5 128q18 0 30.5 13t12.5 30v266q0 19-12.5 31t-30.5 12h-422q-18 0-30.5-12T2.5 437V171q0-17 12.5-30t30.5-13h422zm0 64q0-8-5.5-14.5t-15.5-6.5h-380q-9 0-15 6.5t-6 14.5v224q0 10 6 15.5t15 5.5h380q21 0 21-21V192zm-28 151q7 0 7 6v35q0 7-7 7h-367q-7 0-7-7v-35q0-6 7-6h367z";
	const ltr = false;
	const collection = "business-suite";
	const packageName = "@ui5/webcomponents-icons-business-suite";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var debitCard = { pathData };

	return debitCard;

});
