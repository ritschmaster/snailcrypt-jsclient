/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/field/content/DefaultContent"],function(D){"use strict";var B=Object.assign({},D,{getDisplayMultiValue:function(){return[null];},getDisplayMultiLine:function(){return[null];},getEditMultiValue:function(){return[null];},getEditMultiLine:function(){return[null];},getUseDefaultFieldHelp:function(){return{name:"bool",oneOperatorSingle:true,oneOperatorMulti:true,single:true,multi:true};},createEditMultiValue:function(){throw new Error("sap.ui.mdc.field.content.BooleanContent - createEditMultiValue not defined!");},createEditMultiLine:function(){throw new Error("sap.ui.mdc.field.content.BooleanContent - createEditMultiLine not defined!");},createDisplayMultiValue:function(){throw new Error("sap.ui.mdc.field.content.BooleanContent - createDisplayMultiValue not defined!");},createDisplayMultiLine:function(){throw new Error("sap.ui.mdc.field.content.BooleanContent - createDisplayMultiLine not defined!");}});return B;});
