/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/includes","sap/base/util/values","sap/base/util/restricted/_CancelablePromise"],function(i,v,_){"use strict";var V={};var o={};var l={};V.registerValidators=function(n){Object.keys(n).forEach(function(N){if(!this.hasValidator(N)){l[N]=new _(function(r,a,b){b(function(){delete l[N];});b.shouldReject=false;sap.ui.require([n[N]],r,a);});l[N].then(function(a){o[N]=a;delete l[N];});}}.bind(this));};V.ready=function(){return Promise.all(v(l));};V.deregisterValidator=function(n){if(o[n]){delete o[n];}if(l[n]){l[n].cancel();}};V.deregisterAllValidators=function(){Object.keys(l).forEach(function(n){this.deregisterValidator(n);}.bind(this));o={};};V.getValidator=function(n){var a=o[n];if(!a){throw new Error("Validator "+n+" was not registered.");}return a;};V.hasValidator=function(n){return i(Object.keys(o),n);};V.isRegistered=function(n){return i(Object.keys(l),n);};return V;});
