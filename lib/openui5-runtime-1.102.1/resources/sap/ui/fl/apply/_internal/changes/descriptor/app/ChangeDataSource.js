/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/util/changePropertyValueByPath","sap/ui/fl/util/DescriptorChangeCheck"],function(c,D){"use strict";var S=["UPDATE","UPSERT"];var a=["uri","settings/maxAge"];var C={applyChange:function(m,o){var d=m["sap.app"].dataSources;var b=o.getContent();D.checkEntityPropertyChange(b,a,S);if(d){var e=d[b.dataSourceId];if(e){c(b.entityPropertyChange,e);}else{throw new Error("Nothing to update. DataSource with ID \""+b.dataSourceId+"\" does not exist.");}}else{throw Error("No sap.app/dataSource found in manifest.json");}return m;}};return C;});
