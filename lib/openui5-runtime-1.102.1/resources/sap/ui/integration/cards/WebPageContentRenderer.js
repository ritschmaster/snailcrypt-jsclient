/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseContentRenderer","sap/ui/integration/util/BindingResolver"],function(B,a){"use strict";var P="2px";var W=B.extend("sap.ui.integration.cards.WebPageContentRenderer",{apiVersion:2,MIN_WEB_PAGE_CONTENT_HEIGHT:"150px"});W.renderContent=function(r,w){r.openStart("iframe",w.getId()+"-frame").class("sapUiIntWPCFrame");r.style("height","calc("+w.getMinHeight()+" - "+P+")").attr("src",w.getSrc()).attr("tabindex","0").attr("sandbox",w.getSandbox()).openEnd().close("iframe");};W.getMinHeight=function(c,C){if(c.minHeight){return a.resolveValue(c.minHeight,C);}return W.MIN_WEB_PAGE_CONTENT_HEIGHT;};return W;});
