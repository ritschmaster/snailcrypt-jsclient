/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/ItemContainer","sap/ui/mdc/table/menu/Item","sap/ui/core/Core"],function(I,a,C){"use strict";var b=I.extend("sap.ui.mdc.table.menu.ItemContainer",{metadata:{library:"sap.ui.mdc",associations:{table:{type:"sap.ui.mdc.Table"}}}});b.prototype.initializeItems=function(){var t=this.getTable();this.removeAllItems();if(t.isSortingEnabled()){this.addItem(new a({key:"Sort",icon:"sap-icon://sort"}));}if(t.isFilteringEnabled()){this.addItem(new a({key:"Filter",icon:"sap-icon://filter"}));}if(t.isGroupingEnabled()){this.addItem(new a({key:"Group",icon:"sap-icon://group-2"}));}if(t.getActiveP13nModes().includes("Column")){this.addItem(new a({key:"Column",icon:"sap-icon://table-column"}));}return Promise.all(this.getItems().map(function(i){return i.initializeContent();}));};b.prototype.hasItems=function(){return this.getEffectiveItems().length>0;};b.prototype.getTable=function(){return C.byId(this.getAssociation("table"));};return b;});
