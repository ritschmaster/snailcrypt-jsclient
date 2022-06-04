/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ViewRenderer'],function(V){"use strict";var T={apiVersion:2};T.render=function(r,c){r.openStart("div",c);r.class("sapUiView");r.class("sapUiTmplView");V.addDisplayClass(r,c);r.style("width",c.getWidth());r.style("height",c.getHeight());r.openEnd();r.renderControl(c._oTemplate);r.close("div");};return T;},true);
