/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var P={apiVersion:2};P.render=function(r,p){var c=p.getAggregation("_content");r.openStart("div",p);r.class("mdcbaseinfoPanel");r.openEnd();r.renderControl(c);r.close("div");};return P;});
