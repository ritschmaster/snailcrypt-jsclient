/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Change"],function(C){"use strict";return function(p){var c=p.storageResponse.changes.appDescriptorChanges||[];var a=c.map(function(o){return new C(o);});return{appDescriptorChanges:a};};});
