/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseFilter","sap/m/SearchField"],function(B,S){"use strict";var a=B.extend("sap.ui.integration.cards.filters.SearchFilter",{metadata:{library:"sap.ui.integration",aggregations:{_searchField:{type:"sap.m.SearchField",multiple:false,visibility:"hidden"}}},renderer:{apiVersion:2}});a.prototype.getField=function(){return this._getSearchField();};a.prototype.getValueForModel=function(){return{value:this._escapeDoubleQuotes(this._getSearchField().getValue())};};a.prototype._getSearchField=function(){var c=this.getAggregation("_searchField");if(!c){c=this._createSearchField();this.setAggregation("_searchField",c);}return c;};a.prototype._createSearchField=function(){var c=this.getConfig();var s=new S({value:c.value,placeholder:c.placeholder});var l=this.createLabel(c);if(l){s.addAriaLabelledBy(l);}s.attachChange(function(){this.setValue(this.getValueForModel());}.bind(this));return s;};a.prototype._escapeDoubleQuotes=function(v){return v.replaceAll("\"","\\\"");};return a;});
