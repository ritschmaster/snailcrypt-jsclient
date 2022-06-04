/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/AggregationBaseDelegate"],function(A){"use strict";var F=Object.assign({},A);F.addItem=function(p,f,P){return Promise.resolve(null);};F.removeItem=function(p,f,P){return Promise.resolve(true);};F.addCondition=function(p,f,P){return Promise.resolve();};F.removeCondition=function(p,f,P){return Promise.resolve();};return F;});
