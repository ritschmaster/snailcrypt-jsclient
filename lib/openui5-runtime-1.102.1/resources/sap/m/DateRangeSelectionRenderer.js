/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./DatePickerRenderer'],function(R,D){"use strict";var a=R.extend(D);a.apiVersion=2;a.writeInnerValue=function(r,c){if(c._bValid){r.attr("value",c._formatValue(c.getDateValue(),c.getSecondDateValue()));}else{r.attr("value",c.getValue());}};a.getAccessibilityState=function(d){var A=D.getAccessibilityState.apply(this,arguments);A["roledescription"]=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_DATERANGEINPUT");return A;};return a;},true);
