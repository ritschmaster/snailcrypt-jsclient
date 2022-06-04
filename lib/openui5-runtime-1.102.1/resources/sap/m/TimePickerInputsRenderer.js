/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var T={apiVersion:2};T.render=function(r,c){var C=c.getAggregation("_inputs"),s=c.getAggregation("_buttonAmPm"),S=c._getTimeSeparators(c._getDisplayFormatPattern()),a,i;if(C){if(s){C.push(s);}r.openStart("div",c);r.class("sapMTPInputsContainer");r.attr("role","application");r.attr("aria-roledescription",c._getAriaRoleDescription());r.openEnd();for(i=0;i<C.length;i++){r.renderControl(C[i]);if(i<C.length-1){a=S.shift();if(!a){a=" ";}r.openStart("span");r.attr("aria-hidden","true");r.openEnd();r.text(a);r.close("span");}}r.renderControl(c._getCurrentTimeButton());r.close("div");}};return T;},true);
