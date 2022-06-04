/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element',"sap/ui/core/Control"],function(E,C){"use strict";var A=E.extend("sap.m.p13n.AbstractContainerItem",{metadata:{library:"sap.m",defaultAggregation:"content",properties:{key:{type:"string",defaultValue:null},text:{type:"string",defaultValue:null},icon:{type:"string",defaultValue:null}},aggregations:{content:{type:"sap.ui.core.Control",multiple:false}}}});A.prototype.exit=function(){E.prototype.exit.apply(this,arguments);if(this._oContent){this._oContent.destroy();this._oContent=null;}};A.prototype.setContent=function(c){this.setAggregation("content",c);if(c){this._oContent=c;}return this;};A.prototype.getContent=function(){return this._oContent;};return A;});
