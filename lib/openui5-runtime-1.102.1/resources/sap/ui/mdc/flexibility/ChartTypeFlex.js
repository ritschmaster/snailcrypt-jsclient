/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var c={};c.setChartType={layers:{USER:true},changeHandler:{createChange:function(p){if(!p.control){throw new Error("Invalid control. The existing control object is mandatory");}return{selectorElement:p.control,changeSpecificData:{changeType:"setChartType",content:{chartType:p.chartType}}};},completeChangeContent:function(C,s){},applyChange:function(C,o,p){var m=p.modifier;return Promise.resolve().then(m.getProperty.bind(m,o,"chartType")).then(function(O){C.setRevertData(O);m.setProperty(o,"chartType",C.getContent().chartType);});},revertChange:function(C,o,p){p.modifier.setProperty(o,"chartType",C.getRevertData());C.resetRevertData();}}};return c;});
