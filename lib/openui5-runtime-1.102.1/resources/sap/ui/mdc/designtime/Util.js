/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";function g(){return{actions:{},aggregations:{},description:"{description}",name:"{name}",properties:{}};}function e(a,k,d){var A=a.includes(k);var o=A&&d[k]||{};if(!Object.keys(o).length){o[k]={ignore:!A};Object.assign(d,o);}}return{getDesignTime:function(C,a,A,d){d=d?d:g();d.actions=d.actions?d.actions:{};d.properties=d.properties?d.properties:{};d.aggregations=d.aggregations?d.aggregations:{};var c=C.getMetadata(),a=a?a:[],A=A?A:[],b=Object.keys(c.getAllProperties()).concat(Object.keys(c.getAllPrivateProperties())),f=Object.keys(c.getAllAggregations()).concat(Object.keys(c.getAllPrivateAggregations()));b.forEach(function(p){e(a,p,d.properties);});f.forEach(function(s){e(A,s,d.aggregations);});return d;}};});
