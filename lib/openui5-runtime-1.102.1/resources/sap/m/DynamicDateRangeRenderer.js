/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/InputBaseRenderer",'sap/ui/core/Renderer'],function(I,R){"use strict";var D={apiVersion:2};D.render=function(r,c){r.openStart("div",c);r.class("sapMDynamicDateRange");r.openEnd();r.renderControl(c._oInput);r.close("div");};return D;});
