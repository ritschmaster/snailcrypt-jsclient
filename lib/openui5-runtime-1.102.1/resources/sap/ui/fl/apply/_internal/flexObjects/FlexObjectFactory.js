/* !
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath","sap/ui/fl/apply/_internal/flexObjects/FlexObject"],function(O,F){"use strict";var a={BASE_FLEX_OBJECT:F};function g(){return a.BASE_FLEX_OBJECT;}var b={};b.createFromFileContent=function(f){var n=Object.assign({},f);var c=g(n);if(!c){throw new Error("Unknown file type");}n.support=Object.assign({generator:"FlexObjectFactory.createFromFileContent"},n.support||{});var m=c.getMappingInfo();var C=c.mapFileContent(n,m);var p=Object.entries(C).reduce(function(P,d){O.set(d[0].split('.'),d[1],P);return P;},{});var o=new c(p);return o;};return b;});
