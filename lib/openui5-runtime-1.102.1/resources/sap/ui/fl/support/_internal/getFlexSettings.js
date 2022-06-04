/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/registry/Settings"],function(S){"use strict";return function(){return S.getInstance().then(function(s){return Object.keys(s._oSettings).map(function(k){return{key:k,value:s._oSettings[k]};});});};});
