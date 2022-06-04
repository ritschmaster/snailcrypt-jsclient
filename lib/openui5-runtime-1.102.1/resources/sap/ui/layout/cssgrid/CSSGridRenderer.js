/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={apiVersion:2};C.render=function(r,c){r.openStart("div",c).class("sapUiLayoutCSSGrid");if(c.getWidth()){r.style("width",c.getWidth());}c.getGridLayoutConfiguration().addGridStyles(r);r.openEnd();c.getItems().forEach(r.renderControl,r);r.close("div");};return C;});
