/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var N={apiVersion:2};N.render=function(r,n){var b=n.mBindingInfos;r.openStart("div",n).class("sapFCardHeaderSideIndicator").class("sapFCardHeaderSideIndicatorState"+n.getState());if(b.title||b.number||b.unit){r.class("sapFCardHeaderItemBinded");}r.openEnd();var t=n.getAggregation("_title");if(t){t.addStyleClass("sapFCardHeaderSITitle");r.renderControl(t);}r.openStart("div").class("sapFCardHeaderSINumber");if(b.title||b.number||b.unit||b.state){r.class("sapFCardHeaderItemBinded");}r.openEnd();var o=n.getAggregation("_number");if(o){r.renderControl(o);}var u=n.getAggregation("_unit");if(u){r.renderControl(u);}r.close("div");r.close("div");};return N;},true);
