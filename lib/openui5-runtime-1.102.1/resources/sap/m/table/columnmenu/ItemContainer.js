/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/ItemBase"],function(I){"use strict";var a=I.extend("sap.m.table.columnmenu.ItemContainer",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.table.columnmenu.ItemBase"}}}});a.prototype.getEffectiveItems=function(){return this.getItems().reduce(function(i,o){return i.concat(o.getEffectiveItems());},[]);};return a;});
