/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var M={apiVersion:2};M.render=function(r,m){r.openStart("div",m);r.class("sapMTCMenu");r.openEnd();this.renderQuickActions(r,m);this.renderItems(r,m);r.close("div");};M.renderQuickActions=function(r,m){if(m._getAllEffectiveQuickActions().length===0){return;}r.openStart("div");if(m._oItemsContainer){if(m._oItemsContainer.getCurrentViewKey()==="$default"){r.class("sapMTCMenuQAList");}else{r.class("sapMTCMenuQAListHidden");}}else{r.class("sapMTCMenuQAList");}r.openEnd();r.renderControl(m._oForm);r.close("div");};M.renderItems=function(r,m){if(m._getAllEffectiveItems().length===0){return;}r.openStart("div");r.class("sapMTCMenuContainerWrapper");r.openEnd();r.renderControl(m._oItemsContainer);r.close("div");};return M;});
