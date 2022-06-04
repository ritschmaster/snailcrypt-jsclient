/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/m/table/columnmenu/QuickActionBase"],function(E,Q){"use strict";var a=Q.extend("sap.m.table.columnmenu.QuickSort",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.QuickSortItem",multiple:true}},events:{change:{parameters:{key:{type:"string"},sortOrder:{type:"sap.ui.core.SortOrder"}}}}}});a.prototype.getEffectiveQuickActions=function(){var i=this.getItems();var e=[];i.forEach(function(I){e.push(I._getAction());},this);return e;};a.prototype.onChange=function(i){this.fireChange({item:i});this.getMenu().close();};return a;});
