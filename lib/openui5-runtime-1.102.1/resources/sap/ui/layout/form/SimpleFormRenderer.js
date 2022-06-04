/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,c){c._bChangedByMe=true;r.openStart("div",c).class("sapUiSimpleForm").style("width",c.getWidth()).openEnd();var f=c.getAggregation("form");r.renderControl(f);r.close("div");c._bChangedByMe=false;};return S;},true);
