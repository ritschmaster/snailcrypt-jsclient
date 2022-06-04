/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../util/PropertyHelper"],function(P){"use strict";var a=P.extend("sap.ui.mdc.chart.PropertyHelper");a.prototype.prepareProperty=function(p){P.prototype.prepareProperty.apply(this,arguments);p.isAggregatable=function(){if(p){return p.isComplex()?false:p.aggregatable;}};};a.prototype.getAllAggregatableProperties=function(){return this.getProperties().filter(function(p){return p.isAggregatable();});};return a;});
