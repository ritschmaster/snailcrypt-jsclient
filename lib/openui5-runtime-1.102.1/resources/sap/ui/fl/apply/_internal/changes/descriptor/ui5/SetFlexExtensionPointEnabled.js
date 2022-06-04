/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";var S={applyChange:function(m,c){if(!c.getContent().flexExtensionPointEnabled){throw new Error("No flexExtensionPointEnabled in change content provided");}O.set(["sap.ui5","flexExtensionPointEnabled"],c.getContent().flexExtensionPointEnabled,m);return m;}};return S;});
