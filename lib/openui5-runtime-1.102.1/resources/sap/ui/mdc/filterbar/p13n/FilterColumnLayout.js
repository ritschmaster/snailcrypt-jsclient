/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/ColumnListItem','sap/m/ColumnListItemRenderer','sap/m/Label'],function(C,a,L){"use strict";var F=C.extend("sap.ui.mdc.filterbar.p13n.FilterColumnLayout",{metadata:{library:"sap.ui.mdc"},renderer:a});F.prototype._getFieldPath=function(){return this._sFieldPath;};F.prototype.setFilterField=function(f){this._sLabel=f.getLabel();this._oFilterField=f;this._sFieldPath=f.getFieldPath();};F.prototype.getCells=function(){var c=[];var l=new L({text:this._sLabel});l.setParent(this);c.push(l);c.push(this._oFilterField);return c;};F.prototype.exit=function(){C.prototype.exit.apply(this,arguments);this._oFilterField=null;this._sFieldPath=null;};return F;});
