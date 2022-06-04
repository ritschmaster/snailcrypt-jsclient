/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./SinglePlanningCalendarView','sap/ui/core/LocaleData','sap/ui/unified/calendar/CalendarDate','sap/ui/unified/calendar/CalendarUtils'],function(l,S,L,C,a){"use strict";var b=S.extend("sap.m.SinglePlanningCalendarWeekView",{metadata:{library:"sap.m"}});b.prototype.getEntityCount=function(){return 7;};b.prototype.getScrollEntityCount=function(){return 7;};b.prototype.calculateStartDate=function(s){var c=C.fromLocalJSDate(s),o=a._getFirstDateOfWeek(c),d=o.toLocalJSDate(),O=d.getDay(),r=this.getFirstDayOfWeek(),e;if(r===-1){e=L.getInstance(sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale());r=e.getFirstDayOfWeek();}d.setDate(d.getDate()-O+r);return d;};return b;});
