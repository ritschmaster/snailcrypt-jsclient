/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','sap/m/TokenizerRenderer','sap/m/library','sap/ui/core/Core'],function(R,T,l,C){"use strict";var E=l.EmptyIndicatorMode;var r=C.getLibraryResourceBundle("sap.m");var a=R.extend(T);a.apiVersion=2;a._renderIndicator=function(o,c){T._renderIndicator.apply(this,arguments);if(c.getEmptyIndicatorMode()!==E.Off&&c.getTokens().length==0){this._renderEmptyIndicator(o,c);}};a._renderTabIndex=function(o,c){o.attr("tabindex","-1");};a._renderIndicatorTabIndex=function(o,c){o.attr("tabindex","0");};a._renderEmptyIndicator=function(o,c){o.openStart("span");o.class("sapMEmptyIndicator");if(c.getEmptyIndicatorMode()===E.Auto){o.class("sapMEmptyIndicatorAuto");}o.openEnd();o.openStart("span");o.attr("aria-hidden",true);o.openEnd();o.text(r.getText("EMPTY_INDICATOR"));o.close("span");o.openStart("span");o.class("sapUiPseudoInvisibleText");o.openEnd();o.text(r.getText("EMPTY_INDICATOR_TEXT"));o.close("span");o.close("span");};return a;});
