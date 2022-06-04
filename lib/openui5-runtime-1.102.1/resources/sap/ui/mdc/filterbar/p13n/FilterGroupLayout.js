/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control'],function(C){"use strict";var F=C.extend("sap.ui.mdc.filterbar.p13n.FilterGroupLayout",{renderer:{apiVersion:2,render:function(r,c){r.openStart("div",c);r.style("height","100%");r.openEnd();r.renderControl(c.getItems()[0]);r.close("div");}}});F.prototype._getFieldPath=function(){return this._sFieldPath;};F.prototype.setFilterField=function(f){this._oFilterField=f;this._sFieldPath=f.getFieldPath();};F.prototype.getAccessibilityInfo=function(){return{children:this.getItems()};};F.prototype.getItems=function(){var c=[];c.push(this._oFilterField);return c;};F.prototype.exit=function(){C.prototype.exit.apply(this,arguments);this._oFilterField=null;this._sFieldPath=null;};return F;});
