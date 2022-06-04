/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/EventProvider"],function(E){"use strict";var a="StateHandlerRegistry: This class is a singleton and should not be used without an AdaptationProvider. Please use 'sap.ui.mdc.p13n.Engine.getInstance().stateHandlerRegistry' instead";var s;var S=E.extend("sap.ui.mdc.p13n.modules.StateHandlerRegistry",{constructor:function(){if(s){throw Error(a);}E.call(this);}});S.prototype.attachChange=function(f){return E.prototype.attachEvent.call(this,"stateChange",f);};S.prototype.detachChange=function(f){return E.prototype.detachEvent.call(this,"stateChange",f);};S.prototype.fireChange=function(c){return E.prototype.fireEvent.call(this,"stateChange",{control:c});};S.getInstance=function(){if(!s){s=new S();}return s;};return S;});
