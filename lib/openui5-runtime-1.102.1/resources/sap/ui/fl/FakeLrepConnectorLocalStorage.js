/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/FakeLrepConnector","sap/ui/fl/write/_internal/connectors/LocalStorageConnector"],function(F,L){"use strict";return{enableFakeConnector:function(p){var j=p?p.sInitialComponentJsonPath:undefined;F.setFlexibilityServicesAndClearCache("LocalStorageConnector",j);},disableFakeConnector:function(){F.disableFakeConnector();},forTesting:{spyWrite:function(s,a){return F.forTesting.spyMethod(s,a,L,"write");},getNumberOfChanges:function(r){return F.forTesting.getNumberOfChanges(L,r);},synchronous:{clearAll:function(){F.forTesting.synchronous.clearAll(window.localStorage);},store:function(k,i){F.forTesting.synchronous.store(window.localStorage,k,i);}}}};},true);
