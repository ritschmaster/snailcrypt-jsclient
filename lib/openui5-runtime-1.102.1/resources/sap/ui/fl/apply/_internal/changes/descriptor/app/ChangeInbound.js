/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/util/changePropertyValueByPath","sap/ui/fl/util/DescriptorChangeCheck"],function(c,D){"use strict";var S=["UPDATE","UPSERT"];var a=["title","subTitle","icon"];var C={applyChange:function(m,o){var b=m["sap.app"].crossNavigation;var d=o.getContent();D.checkEntityPropertyChange(d,a,S);if(b&&b.inbounds){var i=b.inbounds[d.inboundId];if(i){c(d.entityPropertyChange,i);}else{throw new Error("Nothing to update. Inbound with ID \""+d.inboundId+"\" does not exist.");}}else{throw new Error("sap.app/crossNavigation or sap.app/crossNavigation/inbounds sections have not been found in manifest.json");}return m;}};return C;});
