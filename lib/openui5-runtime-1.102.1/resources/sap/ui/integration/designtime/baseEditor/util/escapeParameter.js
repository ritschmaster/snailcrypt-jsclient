/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/isPlainObject","sap/base/util/each"],function(i,e){"use strict";return function(a,v){v=v||function(){return true;};var A=Array.from(a);var s=typeof A[0]!=="string"&&A[0]!==undefined?0:1;if(i(A[s])){var S=Object.assign({},A[s]);e(S,function(k,V){if(i(V)&&v(V,k)){S[k]=Object.assign({},V,{ui5object:true});}});A[s]=S;}return A;};});
