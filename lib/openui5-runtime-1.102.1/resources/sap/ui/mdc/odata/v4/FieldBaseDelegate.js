/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/field/FieldBaseDelegate","sap/ui/mdc/odata/v4/TypeUtil"],function(F,T){"use strict";var O=Object.assign({},F);O.getDataTypeClass=function(p,t){return T.getDataTypeClassName(t);};O.getBaseType=function(p,t,f,c){return T.getBaseType(t,f,c);};O.initializeTypeFromBinding=function(p,t,v){var r={};if(t&&(t.isA("sap.ui.model.odata.type.Unit")||t.isA("sap.ui.model.odata.type.Currency"))&&Array.isArray(v)&&v.length>2&&v[2]!==undefined){t.formatValue(v,"string");r.bTypeInitialized=true;r.mCustomUnits=v[2];}return r;};O.initializeInternalUnitType=function(p,t,o){if(o&&o.mCustomUnits!==undefined){t.formatValue([null,null,o.mCustomUnits],"string");}};O.enhanceValueForUnit=function(p,v,t){if(t&&t.bTypeInitialized&&v.length===2){v.push(t.mCustomUnits);return v;}};O.getDefaultFieldValueHelpDelegate=function(p){return{name:"sap/ui/mdc/odata/v4/FieldValueHelpDelegate",payload:{}};};O.getTypeUtil=function(p){return T;};return O;});
