/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/Button','sap/m/ButtonRenderer'],function(B,a){"use strict";var O=B.extend("sap.m.OverflowToolbarButton",{metadata:{interfaces:["sap.f.IShellBar","sap.m.IOverflowToolbarContent"]},renderer:a});O.prototype._getText=function(){if(this._bInOverflow){return B.prototype._getText.call(this);}return"";};O.prototype._getTooltip=function(){var t=B.prototype._getTooltip.call(this);if(this._bInOverflow){return this._getText()===t?"":t;}return t;};O.prototype._onBeforeEnterOverflow=function(){this._bInOverflow=true;};O.prototype._onAfterExitOverflow=function(){this._bInOverflow=false;};O.prototype.getOverflowToolbarConfig=function(){var c={canOverflow:true,propsUnrelatedToSize:["enabled","type"],autoCloseEvents:["press"]};c.onBeforeEnterOverflow=this._onBeforeEnterOverflow.bind(this);c.onAfterExitOverflow=this._onAfterExitOverflow.bind(this);return c;};return O;});
