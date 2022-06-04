/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/changes/descriptor/ApplyUtil","sap/base/util/ObjectPath"],function(A,O){"use strict";var a={applyChange:function(m,c){var M=c.getContent().modelId;var i=A.formatBundleName(m["sap.app"].id,c.getTexts().i18n);var o=m["sap.ui5"].models[M];if(o){if(o.type&&o.type==="sap.ui.model.resource.ResourceModel"){if(!(o.settings&&o.settings.enhanceWith)){O.set("settings.enhanceWith",[],o);}var e=o.settings.enhanceWith;e.push({bundleName:i});}}return m;},skipPostprocessing:true};return a;});
