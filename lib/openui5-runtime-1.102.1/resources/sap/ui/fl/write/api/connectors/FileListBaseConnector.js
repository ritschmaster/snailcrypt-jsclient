/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/initial/_internal/StorageUtils","sap/base/util/LoaderExtensions"],function(S,L){"use strict";return{getFileList:function(){return Promise.reject("not implemented");},layers:[],loadFlexData:function(p){return this.getFileList(p.reference).then(function(f){return Promise.all(f.map(function(u){return L.loadResource({dataType:"json",url:u,async:true});})).then(function(F){var g=S.getGroupedFlexObjects(F);return S.filterAndSortResponses(g);});});}};});
