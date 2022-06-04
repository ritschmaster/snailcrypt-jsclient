/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/ListItemBase","./GridListItemRenderer"],function(L){"use strict";var G=L.extend("sap.f.GridListItem",{metadata:{library:"sap.f",defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}}}});G.prototype.getContentAnnouncement=function(){return this.getContent().map(function(c){return L.getAccessibilityText(c);}).join(" ").trim();};return G;});
