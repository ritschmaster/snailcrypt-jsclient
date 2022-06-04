/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";var S={applyChange:function(m,c){O.set(["sap.fiori","registrationIds"],c.getContent().registrationIds,m);return m;}};return S;});
