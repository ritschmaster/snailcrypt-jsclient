/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/FakeLrepConnector","sap/ui/fl/write/_internal/connectors/SessionStorageConnector"],function(F,S){"use strict";return{enableFakeConnector:function(p){var j=p?p.sInitialComponentJsonPath:undefined;F.setFlexibilityServicesAndClearCache("SessionStorageConnector",j);},disableFakeConnector:function(){F.disableFakeConnector();},forTesting:{spyWrite:function(s,a){return F.forTesting.spyMethod(s,a,S,"write");},getNumberOfChanges:function(r){return F.forTesting.getNumberOfChanges(S,r);},clear:function(p){return F.forTesting.clear(S,p);},setStorage:function(n){F.forTesting.setStorage(S,n);},synchronous:{clearAll:function(){F.forTesting.synchronous.clearAll(window.sessionStorage);},getNumberOfChanges:function(r){return F.forTesting.synchronous.getNumberOfChanges(S.storage,r);}}}};},true);
