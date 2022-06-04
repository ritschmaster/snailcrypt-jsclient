/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var R={apiVersion:2};R.render=function(r,a){r.openStart("div",a);r.class("sapUiTableAction");if(!a.getRow()){r.style("display","none");}if(!a.getVisible()){r.class("sapUiTableActionHidden");}var t=a.getTooltip_AsString();if(t){r.attr("title",t);}r.openEnd();var i=a.getAggregation("_icons");r.renderControl(i[0]);r.renderControl(i[1]);r.close("div");};return R;},true);
