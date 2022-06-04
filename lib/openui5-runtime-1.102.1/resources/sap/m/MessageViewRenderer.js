/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(C){"use strict";var M={apiVersion:2};var a="sapMMsgView";M.render=function(r,c){var R=C.getLibraryResourceBundle("sap.m");r.openStart("div",c);r.class(a);r.accessibilityState(c,{role:"region",label:R.getText("MESSAGE_VIEW_ARIA_LABEL")});r.openEnd();r.renderControl(c._navContainer);r.close("div");};return M;},true);
