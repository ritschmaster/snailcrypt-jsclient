/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ListItemBase','./library','./CustomListItemRenderer'],function(L,l,C){"use strict";var a=L.extend("sap.m.CustomListItem",{metadata:{library:"sap.m",defaultAggregation:"content",properties:{accDescription:{tpye:"string",group:"Behavior"}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}},designtime:"sap/m/designtime/CustomListItem.designtime"}});a.prototype.setAccDescription=function(A){this.setProperty("accDescription",A,true);return this;};a.prototype.getContentAnnouncement=function(){var A=this.getAccDescription();if(A){return A;}return this.getContent().map(function(c){return L.getAccessibilityText(c);}).join(" ").trim();};return a;});
