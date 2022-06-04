/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/OverflowToolbarToggleButton","sap/m/ToggleButtonRenderer"],function(O,T){"use strict";var S=O.extend("sap.m.semantic.SemanticOverflowToolbarToggleButton",{metadata:{library:"sap.m"},renderer:T});S.prototype._getTooltip=function(){var t=O.prototype._getTooltip.call(this);if(!t&&!this._bInOverflow&&this.getText()){t=this.getText();}return t;};return S;});
