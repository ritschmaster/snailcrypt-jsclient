/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/requireAsync","sap/base/Log"],function(r,L){"use strict";var R={registry:function(){return r("sap/ui/fl/apply/_internal/changes/descriptor/Registration");},handleError:function(e){L.error(e);},processTexts:function(m,c){var M=JSON.stringify(m);Object.keys(c).forEach(function(t){if(c[t].value[""]){M=M.replace("{{"+t+"}}",c[t].value[""]);}else{L.error("Text change has to contain default language");}});return JSON.parse(M);}};var A={getRuntimeStrategy:function(){return R;}};return A;});
