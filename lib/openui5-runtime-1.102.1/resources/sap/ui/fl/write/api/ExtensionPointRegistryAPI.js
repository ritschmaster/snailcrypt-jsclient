/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/write/_internal/extensionPoint/Registry"],function(E){"use strict";var a={getExtensionPointInfo:function(p){return E.getExtensionPointInfo(p.name,p.view);},getExtensionPointInfoByViewId:function(p){return E.getExtensionPointInfoByViewId(p.viewId);},getExtensionPointInfoByParentId:function(p){return E.getExtensionPointInfoByParentId(p.parentId);}};return a;});
