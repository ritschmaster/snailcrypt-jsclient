/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ViewRenderer'],function(V){"use strict";var J={apiVersion:2};J.render=function(r,c){r.openStart("div",c);r.class("sapUiView");r.class("sapUiJSView");V.addDisplayClass(r,c);r.style("width",c.getWidth());r.style("height",c.getHeight());r.openEnd();c.getContent().forEach(r.renderControl,r);r.close("div");};return J;},true);
