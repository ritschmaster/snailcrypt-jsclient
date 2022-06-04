/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var A={apiVersion:2};A.render=function(r,a){var m={role:"form"};r.openStart("div",a);r.accessibilityState(a,m);r.openEnd();r.renderControl(a.getAction());r.close("div");};return A;},true);
