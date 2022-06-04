/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseController","sap/m/p13n/SelectionPanel"],function(B,S){"use strict";var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");var C=B.extend("sap.ui.mdc.p13n.subcontroller.ColumnController",{constructor:function(){B.apply(this,arguments);this._bResetEnabled=true;}});C.prototype.getUISettings=function(){return{title:r.getText("table.SETTINGS_COLUMN"),tabText:r.getText("p13nDialog.TAB_Column")};};C.prototype.model2State=function(){var i=[];this._oPanel.getP13nData(true).forEach(function(I){if(I.visible){i.push({name:I.name});}});return i;};C.prototype.getAdaptationUI=function(p){var s=new S({enableReorder:true,showHeader:true,enableCount:true,fieldColumn:r.getText("fieldsui.COLUMNS")});var a=this.mixInfoAndState(p);s.setP13nData(a.items);this._oPanel=s;return Promise.resolve(s);};C.prototype.getChangeOperations=function(){return{add:"addColumn",remove:"removeColumn",move:"moveColumn"};};return C;});
