/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/connectors/ObjectStorageUtils","sap/ui/fl/initial/_internal/StorageUtils"],function(O,S){"use strict";function l(p){var f=[];return O.forEachObjectInStorage(p,function(F){f.push(F.changeDefinition);}).then(function(){return f;});}var a={oStorage:undefined,layers:["ALL"],loadFlexData:function(p){return l({storage:this.oStorage,reference:p.reference}).then(function(f){var g=S.getGroupedFlexObjects(f);return S.filterAndSortResponses(g);});}};a.storage=a.oStorage;return a;});
