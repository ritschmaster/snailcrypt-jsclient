/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/valuehelp/base/Content','sap/ui/mdc/enum/ConditionValidated'],function(C,a){"use strict";var L=C.extend("sap.ui.mdc.valuehelp.base.ListContent",{metadata:{library:"sap.ui.mdc",properties:{caseSensitive:{type:"boolean",defaultValue:false},useFirstMatch:{type:"boolean",group:"Behavior",defaultValue:true},useAsValueHelp:{type:"boolean",group:"Behavior",defaultValue:true}},aggregations:{inParameters:{type:"sap.ui.mdc.field.InParameter",group:"Data",multiple:true},outParameters:{type:"sap.ui.mdc.field.OutParameter",group:"Data",multiple:true}},events:{}}});L.prototype.init=function(){C.prototype.init.apply(this,arguments);this._oObserver.observe(this,{properties:["caseSensitive"]});};L.prototype._observeChanges=function(c){if(c.name==="caseSensitive"){this._handleFilterValueUpdate(c);}C.prototype._observeChanges.apply(this,arguments);};L.prototype.getCount=function(c){var b=0;for(var i=0;i<c.length;i++){var o=c[i];if(o.isEmpty!==true&&o.validated===a.Validated){b++;}}return b;};return L;});
