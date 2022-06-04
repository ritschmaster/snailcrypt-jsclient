/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/field/FieldHelpBaseDelegate','sap/ui/model/FilterType'],function(F,a){"use strict";var b=Object.assign({},F);b.determineSearchSupported=function(p,f){};b.isSearchSupported=function(p,l){return false;};b.executeSearch=function(p,l,s){};b.adjustSearch=function(p,t,s){return s;};b.executeFilter=function(p,l,f,c,r){if(l.isA("sap.ui.model.json.JSONListBinding")){l.filter(f,a.Application);c();}else{l.attachEventOnce("dataReceived",c);l.initialize();l.filter(f,a.Application);l.getContexts(0,r);}};b.checkBindingsPending=function(p,B){return null;};b.checkListBindingPending=function(p,l){if(l&&(l.isSuspended()||l.getLength()===0)){return false;}return true;};return b;});
