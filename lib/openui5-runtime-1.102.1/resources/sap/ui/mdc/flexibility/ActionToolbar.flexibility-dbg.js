/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'./ItemBaseFlex'
], function(ItemBaseFlex) {
	"use strict";

    var oActionFlex = Object.assign({}, ItemBaseFlex);
    oActionFlex.findItem = function(oModifier, aActions, sName) {
		return sap.ui.getCore().byId(sName);
	};

	return {
        "moveControls": "default",
        moveAction: oActionFlex.createMoveChangeHandler()
	};

});