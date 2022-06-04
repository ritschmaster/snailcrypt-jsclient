/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var I={apiVersion:2};I.render=function(r,c){r.openStart("div",c);r.class("sapMImageContent");var t=c.getTooltip_AsString();if(t){r.attr("title",t);}if(c.hasListeners("press")){r.class("sapMPointer");r.attr("tabindex","0");}r.openEnd();var C=c.getAggregation("_content");if(C){C.addStyleClass("sapMImageContentImageIcon");r.renderControl(C);}r.close("div");};return I;},true);
