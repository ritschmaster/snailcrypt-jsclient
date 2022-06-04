/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/fl/changeHandler/condenser/Classification"],function(L,C){"use strict";var P={};P.applyChange=function(c,o,p){var d=c.getDefinition();var s=d.content.property;var v=d.content.newBinding;var m=p.modifier;return Promise.resolve().then(m.getPropertyBindingOrProperty.bind(m,o,s)).then(function(O){c.setRevertData({originalValue:O});m.setPropertyBinding(o,s,v);});};P.revertChange=function(c,o,p){var r=c.getRevertData();if(r){var d=c.getDefinition();var s=d.content.property;var v=r.originalValue;var m=p.modifier;m.setPropertyBindingOrProperty(o,s,v);c.resetRevertData();}else{L.error("Attempt to revert an unapplied change.");}};P.completeChangeContent=function(c,s){var o=c.getDefinition();if(!s.content){throw new Error("oSpecificChangeInfo attribute required");}o.content=s.content;};P.getCondenserInfo=function(c){return{affectedControl:c.getSelector(),classification:C.LastOneWins,uniqueKey:c.getContent().property};};return P;},true);
