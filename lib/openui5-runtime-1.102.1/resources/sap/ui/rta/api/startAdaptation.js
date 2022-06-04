/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/util/adaptationStarter","sap/ui/fl/Layer","sap/ui/fl/LayerUtils","sap/base/util/merge"],function(a,L,b,m){"use strict";function c(l){if(!b.isValidLayer(l)){throw new Error("An invalid layer is passed");}}function s(o,l,d,e,f){var D={flexSettings:{developerMode:false,layer:L.CUSTOMER}};o=m(D,o);return Promise.resolve().then(c.bind(this,o.flexSettings.layer)).then(a.bind(this,o,l,d,e,f));}return s;});
