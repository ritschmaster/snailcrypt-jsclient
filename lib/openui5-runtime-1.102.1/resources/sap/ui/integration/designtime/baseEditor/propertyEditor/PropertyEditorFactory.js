/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/includes","sap/base/util/values"],function(i,v){"use strict";var P={};var l={};var p={};P.registerTypes=function(t){Object.keys(t).forEach(function(s){if(!l[s]){l[s]=new Promise(function(r,a){sap.ui.require([t[s]],r,a);}).then(function(o){p[o.getMetadata().getName()]=o;return o;});}});return Promise.all(v(l)).then(function(){return p;});};P.deregisterType=function(t){if(l[t]){delete l[t];}};P.deregisterAllTypes=function(){l={};};P.create=function(s){return new Promise(function(r,a){if(!s){a("No editor type was specified in the property configuration.");return;}if(!l[s]){a("Editor type was not registered");return;}l[s].then(function(b){return r(new b());}).catch(function(e){return a(e);});});};P.getByClassName=function(t){return p[t];};P.getTypes=function(){return Object.assign({},l);};P.hasType=function(s){return i(Object.keys(P.getTypes()),s);};return P;});
