/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Component","sap/ui/fl/ChangePersistenceFactory","sap/ui/fl/apply/_internal/changes/FlexCustomData","sap/ui/fl/support/apps/uiFlexibilityDiagnostics/helper/Extractor","sap/ui/fl/Utils"],function(C,a,F,E,U){"use strict";return function(){return U.getUShellService("AppLifeCycle").then(function(A){var c;if(A){c=A.getCurrentApplication().componentInstance;}else{var b=C.registry.filter(function(e){return e.getManifestObject().getRawJson()["sap.app"].type==="application";});if(b.length===1){c=b[0];}}if(c){var o=c.oContainer.getComponentInstance();var d=a.getChangePersistenceForControl(o);return E.extractData(d);}return{};});};});
