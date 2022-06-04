/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";return R.extend("sap.m.P13nConditionPanelRenderer",{renderer:{apiVersion:2,render:function(r,c){r.openStart("section",c);r.class("sapMConditionPanel");r.openEnd();r.openStart("div");r.class("sapMConditionPanelContent");r.class("sapMConditionPanelBG");r.openEnd();c.getAggregation("content").forEach(function(C){r.renderControl(C);});r.close("div");r.close("section");}}});},true);
