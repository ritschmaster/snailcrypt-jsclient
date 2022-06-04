/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/fl/write/_internal/connectors/BackendConnector","sap/ui/fl/initial/_internal/connectors/PersonalizationConnector"],function(m,B,I){"use strict";var P="/flex/personalization";var A="/v1";var F={isProductiveSystem:true};var a=m({},B,{layers:I.layers,ROUTES:{CHANGES:P+A+"/changes/",TOKEN:P+A+"/actions/getcsrftoken"},loadFeatures:function(){return Promise.resolve(F);}});a.initialConnector=I;return a;});
