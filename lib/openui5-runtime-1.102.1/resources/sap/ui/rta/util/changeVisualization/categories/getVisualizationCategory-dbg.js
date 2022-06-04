/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/rta/util/changeVisualization/categories/RenameVisualization",
	"sap/ui/rta/util/changeVisualization/categories/MoveVisualization",
	"sap/ui/rta/util/changeVisualization/categories/SplitVisualization"
], function(
	RenameVisualization,
	MoveVisualization,
	SplitVisualization
) {
	"use strict";

	var mCategories = {
		rename: RenameVisualization,
		move: MoveVisualization,
		split: SplitVisualization
	};

	return function(sCategoryName) {
		return mCategories[sCategoryName];
	};
});