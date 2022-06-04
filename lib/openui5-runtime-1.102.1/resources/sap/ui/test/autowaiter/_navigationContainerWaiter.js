/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./WaiterBase"],function(E,W){"use strict";var N=W.extend("sap.ui.test.autowaiter._navigationContainerWaiter",{hasPending:function(){var n=sap.ui.require("sap/m/NavContainer");if(!n){return false;}function i(c){return c instanceof n;}return E.registry.filter(i).some(function(o){if(o._bNavigating){this._oHasPendingLogger.debug("The NavContainer "+o+" is currently navigating");}return o._bNavigating;}.bind(this));}});return new N();});
