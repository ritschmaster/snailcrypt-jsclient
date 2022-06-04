/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var V={apiVersion:2};V.render=function(r,c){r.openStart("div",c);r.class("sapUiView");V.addDisplayClass(r,c);r.style("width",c.getWidth());r.style("height",c.getHeight());r.openEnd();c.getContent().forEach(r.renderControl,r);r.close("div");};V.addDisplayClass=function(r,c){if(c.getDisplayBlock()||(c.getWidth()==="100%"&&c.getHeight()==="100%")){r.class("sapUiViewDisplayBlock");}};return V;},true);
