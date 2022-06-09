/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./YearPickerRenderer","./CalendarDate","sap/ui/core/date/UniversalDate","sap/ui/unified/calendar/CalendarUtils"],function(R,Y,C,U,a){"use strict";var b=R.extend(Y);b.apiVersion=2;b.getAccessibilityState=function(){return{role:"grid",readonly:"true",multiselectable:false,roledescription:sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified").getText("YEAR_RANGE_PICKER")};};b.renderCells=function(r,y){var d=y.getProperty("_middleDate")?y.getProperty("_middleDate"):y._getDate(),s=new C(d,y.getPrimaryCalendarType()),f=new C(s,y.getPrimaryCalendarType()),m=a._minDate(y.getProperty("primaryCalendarType")).getYear(),M=a._maxDate(y.getProperty("primaryCalendarType")).getYear(),S,F="",c="",I=y.getId(),e=y.getColumns(),g=y.getYears(),w="",A,h,i;f.setYear(f.getYear()-Math.floor(y.getRangeSize()/2));f.setYear(f.getYear()-Math.floor(g/2)*y.getRangeSize());if(f.getYear()<m){f.setYear(m);}else if(f.getYear()>M-g){f.setYear(M-Math.floor(g)*y.getRangeSize()+1);}S=new C(f,y.getPrimaryCalendarType());S.setYear(S.getYear()+y.getRangeSize()-1);if(e>0){w=(100/e)+"%";}else{w=(100/g)+"%";}for(i=0;i<g;i++){h=y._oFormatYyyymmdd.format(f.toUTCJSDate(),true);A={role:"gridcell"};if(e>0&&i%e==0){r.openStart("div");r.accessibilityState(null,{role:"row"});r.openEnd();}r.openStart("div",I+"-y"+h);r.class("sapUiCalItem");if(!y._checkDateEnabled(f,S)){r.class("sapUiCalItemDsbl");A["disabled"]=true;}r.attr("tabindex","-1");r.attr("data-sap-year-start",h);r.style("width",w);r.accessibilityState(null,A);r.openEnd();if(a._isBetween(y._oDate,f,S,true)){y._iSelectedIndex=i;}F=y._oYearFormat.format(U.getInstance(f.toUTCJSDate(),f.getCalendarType()),true);c=y._oYearFormat.format(U.getInstance(S.toUTCJSDate(),S.getCalendarType()),true);r.text(F+" - "+c);r.close("div");if(e>0&&((i+1)%e==0)){r.close("div");}f.setYear(S.getYear()+1);S.setYear(S.getYear()+y.getRangeSize());}};return b;},true);