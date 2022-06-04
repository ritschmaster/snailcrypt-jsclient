/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Avatar"],function(a,e){"use strict";var t=e.AvatarColorScheme;var i=e.AvatarShape;var r=e.AvatarSize;var l=a.extend("sap.ui.webc.main.Avatar",{metadata:{library:"sap.ui.webc.main",tag:"ui5-avatar-ui5",interfaces:["sap.ui.webc.main.IAvatar"],properties:{accessibleName:{type:"string",defaultValue:""},colorScheme:{type:"sap.ui.webc.main.AvatarColorScheme",defaultValue:t.Accent6},icon:{type:"string",defaultValue:""},initials:{type:"string",defaultValue:""},interactive:{type:"boolean",defaultValue:false},shape:{type:"sap.ui.webc.main.AvatarShape",defaultValue:i.Circle},size:{type:"sap.ui.webc.main.AvatarSize",defaultValue:r.S}},defaultAggregation:"image",aggregations:{image:{type:"sap.ui.core.Control",multiple:false}},events:{click:{parameters:{}}}}});return l});