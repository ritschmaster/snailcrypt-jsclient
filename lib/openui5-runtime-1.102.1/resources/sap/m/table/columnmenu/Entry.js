/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var a=E.extend("sap.m.table.columnmenu.Entry",{metadata:{"abstract":true,library:"sap.m",properties:{visible:{type:"boolean",defaultValue:true}}}});a.prototype.getMenu=function(){var e=this.getParent();while(e){if(e.isA("sap.m.table.columnmenu.Menu")){return e;}e=e.getMenu();}return undefined;};a.prototype.getLabel=function(){if(this.getMetadata().hasProperty("label")){return this.getProperty("label");}throw new Error(this+" does not implement #getLabel");};a.prototype.getContent=function(){if(this.getMetadata().hasAggregation("content")){return this.getAggregation("content");}throw new Error(this+" does not implement #getContent");};return a;});
