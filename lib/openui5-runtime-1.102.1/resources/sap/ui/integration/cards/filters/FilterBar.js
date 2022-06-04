/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control"],function(C){"use strict";var F=C.extend("sap.ui.integration.cards.filters.FilterBar",{metadata:{library:"sap.ui.integration",properties:{},aggregations:{content:{type:"sap.ui.core.Control",multiple:false}}},renderer:{apiVersion:2,render:function(r,f){r.openStart("div",f).class("sapFCardFilterBar").openEnd();r.renderControl(f.getContent());r.close("div");}}});F.prototype.showLoadingPlaceholders=function(){this._getFilters().forEach(function(f){f.showLoadingPlaceholders();});};F.prototype.hideLoadingPlaceholders=function(){this._getFilters().forEach(function(f){f.hideLoadingPlaceholders();});};F.prototype.refreshData=function(){this._getFilters().forEach(function(f){f.refreshData();});};F.prototype._getFilters=function(){var c=this.getContent();return c.getItems?c.getItems():c.getContent();};return F;});
