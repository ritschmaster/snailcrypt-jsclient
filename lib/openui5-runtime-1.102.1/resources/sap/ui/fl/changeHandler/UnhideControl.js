/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/fl/changeHandler/condenser/Classification"],function(L,C){"use strict";var P="visible";var U={};U.applyChange=function(c,o,p){var m=p.modifier;return Promise.resolve().then(m.getProperty.bind(m,o,P)).then(function(O){c.setRevertData({originalValue:O});p.modifier.setVisible(o,true);});};U.revertChange=function(c,o,p){var r=c.getRevertData();if(r){p.modifier.setVisible(o,r.originalValue);c.resetRevertData();}else{L.error("Attempt to revert an unapplied change.");}};U.completeChangeContent=function(){};U.getCondenserInfo=function(c){return{affectedControl:c.getSelector(),classification:C.Reverse,uniqueKey:P};};return U;},true);
