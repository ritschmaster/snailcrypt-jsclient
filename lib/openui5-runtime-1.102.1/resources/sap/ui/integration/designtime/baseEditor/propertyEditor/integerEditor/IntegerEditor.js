/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor","sap/ui/integration/designtime/baseEditor/propertyEditor/numberEditor/NumberEditor","sap/ui/core/format/NumberFormat"],function(B,N,a){"use strict";var I=N.extend("sap.ui.integration.designtime.baseEditor.propertyEditor.integerEditor.IntegerEditor",{invalidInputError:"BASE_EDITOR.INTEGER.INVALID_BINDING_OR_INTEGER",metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer().render});I.prototype.getDefaultValidators=function(){return Object.assign({},B.prototype.getDefaultValidators.call(this),{isInteger:{type:"isInteger"}});};I.configMetadata=Object.assign({},N.configMetadata,{typeLabel:{defaultValue:"BASE_EDITOR.TYPES.INTEGER"}});I.prototype.validateNumber=function(v){return N.prototype.validateNumber.call(this,v)&&Number.isInteger(v);};I.prototype.getFormatterInstance=function(){return a.getIntegerInstance();};return I;});
