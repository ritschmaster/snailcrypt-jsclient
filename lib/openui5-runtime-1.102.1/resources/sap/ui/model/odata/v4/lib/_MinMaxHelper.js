/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_Cache","./_ConcatHelper"],function(_,a){"use strict";return{createCache:function(r,R,A,q){var m={},c,M,o=new Promise(function(b){M=b;});function h(b){var s,d={};function g(e){d[e]=d[e]||{};return d[e];}for(s in m){g(m[s].measure)[m[s].method]=b[s];}M(d);}c=_.create(r,R,q,true);a.enhanceCache(c,A,[h],m);c.getMeasureRangePromise=function(){return o;};return c;}};},false);
