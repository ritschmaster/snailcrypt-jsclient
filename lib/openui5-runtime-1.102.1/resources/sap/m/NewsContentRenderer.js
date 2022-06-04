/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var N={apiVersion:2};N.render=function(r,c){var t=c.getTooltip_AsString();if(typeof t!=="string"){t="";}r.openStart("div",c);r.attr("role","presentation");r.attr("aria-label",t);r.class("sapMNwC");if(c.hasListeners("press")){r.class("sapMPointer");r.attr("tabindex","0");}r.openEnd();r.openStart("div");r.class("sapMNwCCTxt");r.openEnd();r.renderControl(c._oContentText);r.close("div");r.openStart("div",c.getId()+"-subheader");r.class("sapMNwCSbh");r.openEnd();r.renderControl(c._oSubHeaderText);r.close("div");r.close("div");};return N;},true);
