/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'./SortFlex', './ColumnFlex', './ConditionFlex', './GroupFlex', './AggregateFlex', './AggregationConfigFlex'
], function(SortFlex, ColumnFlex, ConditionFlex, GroupFlex, AggregateFlex, AggregationConfigFlex) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		addColumn: ColumnFlex.createAddChangeHandler(),
		removeColumn: ColumnFlex.createRemoveChangeHandler(),
		moveColumn: ColumnFlex.createMoveChangeHandler(),
		removeSort: SortFlex.removeSort,
		addSort: SortFlex.addSort,
		moveSort: SortFlex.moveSort,
		addCondition: ConditionFlex.addCondition,
		removeCondition: ConditionFlex.removeCondition,
		removeGroup: GroupFlex.removeGroup,
		addGroup: GroupFlex.addGroup,
		moveGroup: GroupFlex.moveGroup,
		removeAggregate: AggregateFlex.removeAggregate,
		addAggregate: AggregateFlex.addAggregate,
		setColumnWidth: AggregationConfigFlex.createSetChangeHandler({
			aggregation: "columns",
			property: "width"
		})
	};

});