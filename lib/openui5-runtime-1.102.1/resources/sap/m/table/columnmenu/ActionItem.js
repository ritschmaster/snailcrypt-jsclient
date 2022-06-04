/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/ItemBase"],function(I){"use strict";var A=I.extend("sap.m.table.columnmenu.ActionItem",{metadata:{library:"sap.m",properties:{label:{type:"string"},icon:{type:"sap.ui.core.URI"}},events:{press:{}}}});A.prototype.onPress=function(e){e.preventDefault();this.firePress();};A.prototype.getContent=function(){return null;};return A;});
