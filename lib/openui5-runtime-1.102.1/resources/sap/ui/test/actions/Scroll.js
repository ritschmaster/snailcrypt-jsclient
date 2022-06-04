/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/actions/Action"],function(A){"use strict";var S=A.extend("sap.ui.test.actions.Scroll",{metadata:{publicMethods:["executeOn"],properties:{x:{type:"int",defaultValue:0},y:{type:"int",defaultValue:0}}},init:function(){A.prototype.init.apply(this,arguments);},executeOn:function(c){var a;if(c.getScrollDelegate){a=c.getScrollDelegate().getContainerDomRef();}if(!a){a=this.$(c)[0];}this.oLogger.timestamp("opa.actions.scroll");this.oLogger.debug("Scroll in the control "+c);if(a){this._createAndDispatchScrollEvent(a,{x:this.getX(),y:this.getY()});}}});return S;});
