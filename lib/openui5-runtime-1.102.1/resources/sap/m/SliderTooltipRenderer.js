/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer',"sap/ui/core/Core"],function(R,C){"use strict";var S={apiVersion:2};S.CSS_CLASS="sapMSliderTooltip";S.render=function(r,c){r.openStart("div",c).class(S.CSS_CLASS);if(!c.getEditable()){r.class(S.CSS_CLASS+"NonEditableWrapper");}if(c.getWidth()){r.style("width",c.getWidth());}r.openEnd();this.renderTooltipElement(r,c);r.close("div");};S.renderTooltipElement=function(r,c){var o=C.getLibraryResourceBundle("sap.m");r.voidStart("input",c.getId()+"-input").class(S.CSS_CLASS+"Input");if(!c.getEditable()){r.class(S.CSS_CLASS+"NonEditable");}r.attr("aria-label",o.getText("SLIDER_INPUT_LABEL"));r.accessibilityState(c).attr("tabindex","-1").attr("value",c.getValue()).attr("type","number").attr("step",c.getStep()).voidEnd();};return S;},true);
