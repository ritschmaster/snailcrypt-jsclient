/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/PlanningCalendarLegend','sap/ui/unified/CalendarLegendItem','./PlanningCalendarInCardLegendRenderer','sap/ui/core/Core'],function(P,C,a,b){"use strict";var c=P.extend("sap.f.PlanningCalendarInCardLegend",{metadata:{library:"sap.m",properties:{visibleLegendItemsCount:{type:"int",group:"Data",defaultValue:2}}}});c.prototype.exit=function(){P.prototype.exit.call(this,arguments);if(this._oItemsLink){this._oItemsLink.destroy();this._oItemsLink=null;}};c.prototype._getMoreItemsText=function(i){if(!this._oItemsLink){var r=b.getLibraryResourceBundle("sap.f");this._oItemsLink=new C({text:r.getText("CALENDAR_LEGEND_MORE")+" ("+i+")"});}return this._oItemsLink;};return c;});
