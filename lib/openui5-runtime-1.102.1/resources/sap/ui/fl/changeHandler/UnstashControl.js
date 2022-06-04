/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/condenser/Classification"],function(C){"use strict";var U={};U.applyChange=function(c,o,p){var m=c.getContent();var M=p.modifier;var s=false;var u;return Promise.resolve().then(M.getStashed.bind(M,o)).then(function(P){c.setRevertData({originalValue:P});u=M.setStashed(o,s,p.appComponent)||o;if(m.parentAggregationName){var t=m.parentAggregationName;var T=M.getParent(u);return Promise.resolve().then(M.removeAggregation.bind(M,T,t,u)).then(M.insertAggregation.bind(M,T,t,u,m.index,p.view));}return undefined;}).then(function(){return u;});};U.revertChange=function(c,o,p){var r=c.getRevertData();p.modifier.setStashed(o,r.originalValue);c.resetRevertData();};U.completeChangeContent=function(c,s){var o=c.getDefinition();if(s.content){o.content=s.content;}};U.getCondenserInfo=function(c){return{affectedControl:c.getSelector(),classification:C.Reverse,uniqueKey:"stashed"};};return U;});
