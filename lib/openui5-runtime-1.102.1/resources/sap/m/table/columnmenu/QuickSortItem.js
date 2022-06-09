/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./QuickActionItem","./QuickAction","sap/m/HBox","sap/m/ToggleButton","sap/ui/core/library"],function(Q,a,H,T,l){"use strict";var S=l.SortOrder;var b=Q.extend("sap.m.table.columnmenu.QuickSortItem",{metadata:{library:"sap.m",properties:{sortOrder:{type:"sap.ui.core.SortOrder",defaultValue:l.SortOrder.None}},aggregations:{quickAction:{type:"sap.m.table.columnmenu.QuickAction",multiple:false,visibility:"hidden"}}}});b.prototype._getAction=function(){var q=this.getAggregation("quickAction");var L=this._getLabel(this.getParent().getItems().length);if(q){q.setLabel(L);}else{q=new a({label:L,content:[this._createContent()]});}this.setAggregation("quickAction",q,true);return q;};b.prototype._getLabel=function(L){var B=sap.ui.getCore().getLibraryResourceBundle("sap.m");if(L===1){return B.getText("table.COLUMNMENU_QUICK_SORT");}else{return B.getText("table.COLUMNMENU_SORT_BY",this.getLabel());}};b.prototype._createContent=function(){var B=sap.ui.getCore().getLibraryResourceBundle("sap.m");return[new T({text:B.getText("table.COLUMNMENU_SORT_ASCENDING"),pressed:this.getSortOrder()===S.Ascending,press:[{item:this,sortOrder:S.Ascending},this._onSortChange,this]}),new T({text:B.getText("table.COLUMNMENU_SORT_DESCENDING"),pressed:this.getSortOrder()===S.Descending,press:[{item:this,sortOrder:S.Descending},this._onSortChange,this]})];};b.prototype._onSortChange=function(e,s){this.setSortOrder(e.getParameters().pressed?s.sortOrder:S.None,true);this.getParent().onChange(s.item);};b.prototype.setSortOrder=function(s){this.setProperty("sortOrder",s);var q=this.getAggregation("quickAction");if(q){var B=q.getContent();B[0].setPressed(s===S.Ascending);B[1].setPressed(s===S.Descending);}};return b;});