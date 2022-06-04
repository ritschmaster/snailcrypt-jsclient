/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F={apiVersion:2};F.render=function(r,c){var s=c.getSubheader();var v=c.getValue();var t=c.getTooltip_AsString();if(typeof t!=="string"){t="";}r.openStart("div",c);r.attr("role","presentation");r.attr("aria-label",t);r.class("sapMFC");if(c.hasListeners("press")){r.attr("tabindex","0");r.class("sapMPointer");}r.openEnd();if(v){r.openStart("div",c.getId()+"-value");r.class("sapMFCValue");r.class(c.getValueColor());r.openEnd();var C=c.getTruncateValueTo();if(v.length>=C&&(v[C-1]==="."||v[C-1]===",")){r.text(v.substring(0,C-1));}else if(v){r.text(v.substring(0,C));}else{r.text("");}r.close("div");}r.openStart("div");r.class("sapMFCCTxt");r.openEnd();r.renderControl(c._oContentText);r.close("div");r.openStart("div",c.getId()+"-subheader");r.class("sapMFCSbh");r.openEnd();r.text(s);r.close("div");r.close("div");};return F;},true);
