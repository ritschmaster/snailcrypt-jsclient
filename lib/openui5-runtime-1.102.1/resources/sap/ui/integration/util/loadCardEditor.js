/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";function l(){return new Promise(function(r,R){sap.ui.require(["sap/ui/integration/designtime/cardEditor/BASEditor"],r,R);});}return function(){return sap.ui.loader._.loadJSResourceAsync("sap-ui-integration-cardEditor.js").then(l).catch(l);};});
