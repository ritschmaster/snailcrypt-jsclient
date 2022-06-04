/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/Version"],function(V){"use strict";var S={applyChange:function(m,c){var C=new V(m["sap.ui5"].dependencies.minUI5Version);if(C.compareTo(c.getContent().minUI5Version)<=0){m["sap.ui5"].dependencies.minUI5Version=c.getContent().minUI5Version;}return m;}};return S;});
