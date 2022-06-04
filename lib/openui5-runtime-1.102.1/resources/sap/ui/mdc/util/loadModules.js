/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/SyncPromise","sap/base/assert"],function(S,a){"use strict";return function l(m){a(typeof m==="string"||Array.isArray(m),"vModulePaths"+" param either must be a single string or an array of strings. - sap.ui.mdc.util.loadModules");var M;if(typeof m==="string"){M=[m];}else{M=m;}var o=new Map();M.forEach(function(s){var v=sap.ui.require(s);o.set(s,v);});var n=M.filter(function(s){return o.get(s)===undefined;});if(n.length===0){var b=Array.from(o.values());return S.resolve(b);}return new S(function(r,c){function d(){var N=Array.from(arguments);n.forEach(function(s,i){o.set(s,N[i]);});var b=Array.from(o.values());r(b);}sap.ui.require(n,d,c);});};});
