/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/util/Manifest","./Merger"],function(B,M){"use strict";var a=B.extend("sap.ui.integration.editor.Manifest");a.prototype.mergeDeltaChanges=function(m){return M.mergeDelta(m,this._aChanges,this._sSection);};return a;});
