/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(D){"use strict";var T={apiVersion:2};T.render=function(r,c){r.openStart("div",c);r.class("sapMTPClocksContainer");r.openEnd();this.renderButtons(r,c);this.renderClocks(r,c);r.close("div");};T.renderButtons=function(r,c){var b=c.getAggregation("_buttons"),s=c.getAggregation("_buttonAmPm"),S=c._getTimeSeparators(c._getDisplayFormatPattern()),a,i;if(b){if(s){b.push(s);}r.openStart("div");r.class("sapMTPCButtons");r.openEnd();for(i=0;i<b.length;i++){r.renderControl(b[i]);if(i<b.length-1){a=S.shift();if(!a){a=" ";}r.openStart("span");r.attr("aria-hidden","true");r.openEnd();r.text(a);r.close("span");}}r.renderControl(c._getCurrentTimeButton());r.close("div");}};T.renderClocks=function(r,c){var C=c.getAggregation("_clocks"),i;if(C){r.openStart("div");r.class("sapMTPCClocks");r.attr("role","img");r.attr("aria-label",c._getAriaLabel());r.openEnd();for(i=0;i<C.length;i++){if(i===c._getActiveClock()){C[i].addStyleClass("sapMTPCActive");}r.renderControl(C[i]);}r.close("div");}};return T;},true);
