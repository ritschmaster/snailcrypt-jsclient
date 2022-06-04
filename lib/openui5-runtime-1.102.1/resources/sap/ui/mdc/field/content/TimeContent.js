/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/field/content/DefaultContent","sap/ui/mdc/field/content/DateContent"],function(D,a){"use strict";var T=Object.assign({},a,{getEditOperator:function(){return{"EQ":{name:"sap/m/TimePicker",create:this._createDatePickerControl}};},getEdit:function(){return D.getEdit.apply(this,arguments);},createEditMultiLine:function(){throw new Error("sap.ui.mdc.field.content.TimeContent - createEditMultiLine not defined!");},createEdit:function(c,C,i){return D.createEdit.apply(this,arguments);}});return T;});
