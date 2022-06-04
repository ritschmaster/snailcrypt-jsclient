/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var D={apiVersion:2};D.render=function(r,c){r.openStart("div",c);r.class("sapMDTI");var w=c.getWidth();if(w){r.style("width",w);}r.openEnd();var p=c.getAggregation("_picker");if(p){r.renderControl(p);}r.close("div");};return D;},true);
