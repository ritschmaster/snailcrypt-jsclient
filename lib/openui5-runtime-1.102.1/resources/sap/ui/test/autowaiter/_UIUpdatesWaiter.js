/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./WaiterBase"],function(W){"use strict";var U=W.extend("sap.ui.test.autowaiter._UIUpdatesWaiter",{hasPending:function(){var u=sap.ui.getCore().getUIDirty();if(u){this._oHasPendingLogger.debug("The UI needs rerendering");}return u;}});return new U();});
