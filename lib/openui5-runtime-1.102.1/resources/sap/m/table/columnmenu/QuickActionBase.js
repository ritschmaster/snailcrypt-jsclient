/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/Entry"],function(E){"use strict";var Q=E.extend("sap.m.table.columnmenu.QuickActionBase",{metadata:{"abstract":true,library:"sap.m"}});Q.prototype.getEffectiveQuickActions=function(){return[this];};Q.prototype.setVisible=function(v){if(this.getVisible()==v){return this;}this.setProperty("visible",v);this.getMenu()&&this.getMenu()._createQuickActionGrids();return this;};return Q;});
