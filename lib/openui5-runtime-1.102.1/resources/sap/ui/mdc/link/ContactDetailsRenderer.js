/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={apiVersion:2};C.render=function(r,c){var o=c.getAggregation("_content");r.openStart("div",c);r.openEnd();r.renderControl(o);r.close("div");};return C;});
