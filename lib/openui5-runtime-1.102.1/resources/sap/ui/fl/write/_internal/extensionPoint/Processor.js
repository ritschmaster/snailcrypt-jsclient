/*!
* OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/ui/fl/apply/_internal/extensionPoint/Processor","sap/base/util/merge"],function(A,m){"use strict";function a(e,s){var E=m({defaultContent:[]},e);return A.registerExtensionPoint(E).then(A.createDefaultContent.bind(this,e,s,a,[])).then(A.addDefaultContentToExtensionPointInfo.bind(this,E,s));}var P={applyExtensionPoint:function(e){return a(e,false);}};return P;});
