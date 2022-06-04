/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/library","./thirdparty/StandardListItem"],function(e,t,a){"use strict";var i=a.ValueState;var n=t.ListItemType;var s=e.extend("sap.ui.webc.main.StandardListItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-li-ui5",interfaces:["sap.ui.webc.main.IListItem"],properties:{accessibleName:{type:"string",defaultValue:""},additionalText:{type:"string"},additionalTextState:{type:"sap.ui.core.ValueState",defaultValue:i.None},description:{type:"string"},icon:{type:"string"},iconEnd:{type:"boolean",defaultValue:false},image:{type:"string"},selected:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:"",mapping:"textContent"},type:{type:"sap.ui.webc.main.ListItemType",defaultValue:n.Active}},events:{detailClick:{parameters:{}}}}});return s});