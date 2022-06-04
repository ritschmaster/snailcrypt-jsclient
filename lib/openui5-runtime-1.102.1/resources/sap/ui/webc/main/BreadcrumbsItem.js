/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/BreadcrumbsItem"],function(e,t){"use strict";var a=e.extend("sap.ui.webc.main.BreadcrumbsItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-breadcrumbs-item-ui5",interfaces:["sap.ui.webc.main.IBreadcrumbsItem"],properties:{accessibleName:{type:"string",defaultValue:undefined},href:{type:"string",defaultValue:""},target:{type:"string",defaultValue:undefined},text:{type:"string",defaultValue:"",mapping:"textContent"}}}});return a});