/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./BaseController','sap/ui/mdc/p13n/P13nBuilder','sap/base/util/merge'],function(B,P,m){"use strict";var A=B.extend("sap.ui.mdc.p13n.subcontroller.AggregateController");A.prototype.getStateKey=function(){return"aggregations";};A.prototype.sanityCheck=function(c){var a=[];Object.keys(c).forEach(function(i){var o={name:i};if(c[i].hasOwnProperty("aggregated")){o["aggregated"]=c[i].aggregated;}a.push(o);});return a;};A.prototype.getDelta=function(p){p.existingState=this.sanityCheck(p.existingState);return B.prototype.getDelta.apply(this,arguments);};A.prototype.getAdaptationUI=function(p){return null;};A.prototype.getChangeOperations=function(){return{add:"addAggregate",remove:"removeAggregate"};};A.prototype._getPresenceAttribute=function(){return"aggregated";};A.prototype.mixInfoAndState=function(p){var e=this.getCurrentState();var o=P.prepareAdaptationData(p,function(i,a){var E=e[a.name];i.aggregated=!!E;return a.aggregatable;});return o;};return A;});
