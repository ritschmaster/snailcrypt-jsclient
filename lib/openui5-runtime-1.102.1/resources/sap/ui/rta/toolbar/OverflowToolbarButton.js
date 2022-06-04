/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/OverflowToolbarButton","sap/m/ButtonRenderer","sap/m/Button"],function(S,B,a){"use strict";var O=S.extend("sap.ui.rta.toolbar.OverflowToolbarButton",{metadata:{library:"sap.ui.rta",interfaces:["sap.m.IOverflowToolbarContent"],properties:{visibleIcon:{type:"string",defaultValue:""}}},renderer:B});O.prototype._onBeforeEnterOverflow=function(){S.prototype._onBeforeEnterOverflow.apply(this,arguments);this.setVisibleIcon(this.getIcon());this.setIcon("");};O.prototype._onAfterExitOverflow=function(){S.prototype._onAfterExitOverflow.apply(this,arguments);this.setIcon(this.getVisibleIcon());};O.prototype._getText=function(){if((this.getIcon()===""&&this.getVisibleIcon()==="")||this._bInOverflow){return a.prototype._getText.call(this);}return"";};O.prototype.getOverflowToolbarConfig=function(){return{canOverflow:true,onBeforeEnterOverflow:this._onBeforeEnterOverflow.bind(this),onAfterExitOverflow:this._onAfterExitOverflow.bind(this)};};return O;});
