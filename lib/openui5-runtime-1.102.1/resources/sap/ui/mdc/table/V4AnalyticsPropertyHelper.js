/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./PropertyHelper"],function(T){"use strict";var P=T.extend("sap.ui.mdc.table.V4AnalyticsPropertyHelper",{constructor:function(p,e,o){T.call(this,p,e,o,{defaultAggregate:{type:{contextDefiningProperties:{type:"PropertyReference[]"}}}});}});P.prototype.prepareProperty=function(p){T.prototype.prepareProperty.apply(this,arguments);p.aggregatable=p.extension.defaultAggregate!=null;p.getAggregatableProperties=function(){var a=p.isComplex()?p.getReferencedProperties():[p];return a.filter(function(p){return p.aggregatable;});};};P.prototype.getAggregatableProperties=function(){return this.getProperties().filter(function(p){return p.aggregatable;});};return P;});
