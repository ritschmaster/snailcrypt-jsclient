/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/write/connectors/BaseConnector","sap/ui/fl/initial/_internal/StorageUtils","sap/base/util/LoaderExtensions"],function(m,B,S,L){"use strict";var j;return m({},B,{layers:[],setJsonPath:function(i){j=i;},loadFlexData:function(p){var P=j||p.path;if(P){return L.loadResource({dataType:"json",url:P,async:true}).then(function(r){return Object.assign(S.getEmptyFlexDataResponse(),r);});}return Promise.resolve();},loadFeatures:function(p){var P=j||p.path;if(P){return L.loadResource({dataType:"json",url:P,async:true}).then(function(f,r){r.componentClassName=f;return r.settings||{};}.bind(null,p.flexReference));}return Promise.resolve({});}});});
