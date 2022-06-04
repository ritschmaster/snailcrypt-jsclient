/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/Device','sap/ui/core/Control'],function(D,C){"use strict";var S=C.extend("sap.m.SelectDialogBase",{metadata:{library:"sap.m","abstract":true,properties:{},aggregations:{},events:{updateStarted:{parameters:{reason:{type:"string"},actual:{type:"int"},total:{type:"int"}}},updateFinished:{parameters:{reason:{type:"string"},actual:{type:"int"},total:{type:"int"}}},selectionChange:{parameters:{listItem:{type:"sap.m.ListItemBase"},listItems:{type:"sap.m.ListItemBase[]"},selected:{type:"boolean"},selectAll:{type:"boolean"}}}}},renderer:{apiVersion:2,render:function(){}}});S.prototype._setInitialFocus=function(){if(!D.system.desktop){return;}var i=this._oSearchField;if(this.getItems().length){i=this.getItems()[0];}this._oDialog.setInitialFocus(i);};return S;});
