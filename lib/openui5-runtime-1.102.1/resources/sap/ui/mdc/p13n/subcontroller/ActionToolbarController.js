/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseController","sap/ui/mdc/p13n/panels/ActionToolbarPanel","sap/m/Column","sap/ui/mdc/p13n/P13nBuilder"],function(B,A,C,P){"use strict";var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");var a=B.extend("saps.ui.mdc.p13n.subcontroller.ActionToolbarController");a.prototype.getUISettings=function(){return{title:r.getText("actiontoolbar.RTA_TITLE")};};a.prototype.getAdaptationUI=function(p){var s=new A({showHeader:true});s.setEnableReorder(false);s.setFieldColumn(r.getText("actiontoolbar.RTA_COLUMN_HEADER"));var o=this.mixInfoAndState(p);s.setP13nData(o.items);this._oPanel=s;return Promise.resolve(s);};a.prototype.getDelta=function(p){var c=B.prototype.getDelta.apply(this,arguments);c.forEach(function(o){var s=o.changeSpecificData.changeType;if(s==="hideControl"||s==="unhideControl"){o.selectorElement=sap.ui.getCore().byId(o.changeSpecificData.content.name);delete o.changeSpecificData.content;}});return c;};a.prototype.mixInfoAndState=function(p){var i=this.getCurrentState();var I=P.arrayToMap(i);var o=P.prepareAdaptationData(p,function(m,b){var e=I[b.name];m.visible=!!e;m.position=e?e.position:-1;m.alignment=b.alignment;return b.visible;});P.sortP13nData({visible:"visible",position:"position"},o.items);o.items.forEach(function(b){delete b.position;});return o;};a.prototype.getChangeOperations=function(){return{add:"unhideControl",remove:"hideControl",move:"moveAction"};};return a;});