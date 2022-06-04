/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";L.setLogEntriesLimit(Infinity);var l=[];var d="DEBUG";var s=d;return{setLevel:function(n){n=n&&n.toUpperCase();if(n&&L.Level[n]){s=n;}l.forEach(function(c){L.setLevel(L.Level[s],c);});},getLogger:function(c){l.push(c);var a=L.getLogger(c,L.Level[s]);a.timestamp=function(m){if(console.timeStamp&&L.Level[this.getLevel()]>=L.Level[d]){console.timeStamp(m);}};return a;},getLevel:function(){return s;}};},true);
