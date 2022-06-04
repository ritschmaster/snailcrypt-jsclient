/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./InputBaseRenderer','sap/ui/core/library'],function(R,I,c){"use strict";var D=R.extend(I);D.apiVersion=2;D.writeInnerValue=function(r,d){if(d._bValid||d._bOutOfAllowedRange){r.attr("value",d._formatValue(d.getDateValue()));}else{r.attr("value",d.getValue());}};D.writeInnerAttributes=function(r,d){r.attr("type","text");if(d._bMobile){r.attr("readonly","readonly");}};D.getAccessibilityState=function(d){var a=I.getAccessibilityState.apply(this,arguments);a["roledescription"]=sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("ACC_CTR_TYPE_DATEINPUT");a["autocomplete"]="none";a["haspopup"]=c.aria.HasPopup.Grid.toLowerCase();a["disabled"]=null;if(d._bMobile&&d.getEnabled()&&d.getEditable()){a["readonly"]=false;}return a;};D.addOuterClasses=function(r,C){if(C.getHideInput()){r.class("sapMDatePickerHiddenInput");}I.addOuterClasses.apply(this,arguments);};return D;},true);
