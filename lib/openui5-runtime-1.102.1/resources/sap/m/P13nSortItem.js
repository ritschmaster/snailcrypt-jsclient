/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','sap/ui/core/Item'],function(l,I){"use strict";var P=I.extend("sap.m.P13nSortItem",{metadata:{library:"sap.m",properties:{operation:{type:"string",group:"Misc",defaultValue:null},columnKey:{type:"string",group:"Misc",defaultValue:null}}}});P.prototype.setColumnKey=function(v){return this.setProperty("columnKey",v,true);};P.prototype.setOperation=function(v){return this.setProperty("operation",v,true);};return P;});
