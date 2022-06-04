/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(C){"use strict";var Q={apiVersion:2};Q.render=function(r,q){r.openStart("div",q).class("sapMQuickViewCard").accessibilityState({label:{value:C.getLibraryResourceBundle("sap.m").getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});if(!q.getShowVerticalScrollBar()){r.class("sapMQuickViewCardNoScroll");}r.openEnd();r.renderControl(q.getNavContainer());r.close("div");};return Q;},true);
