/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/core/Core"],function(J,C){"use strict";var U={};U.TARGET_UI="targetUI";U.INITIAL_UI="initialUI";U.PLACEHOLDER="X";U.INDEX_RELEVANT="indexRelevant";U.NOT_INDEX_RELEVANT="notIndexRelevant";function g(s,t){return(Math.max(s,t)||0)+1;}U.getInitialUIContainerElementIds=function(u,c,a,b){if(!u[c]){u[c]={};}var m=u[c];if(!m[a]){m[a]={};}var d=m[a];if(!d[U.TARGET_UI]){d[U.TARGET_UI]=b;}if(!d[U.INITIAL_UI]){d[U.INITIAL_UI]=b.slice(0);}return d[U.INITIAL_UI];};U.getContainerElementIds=function(c,a){var o=C.byId(c);return Promise.resolve().then(J.getAggregation.bind(J,o,a)).then(function(b){return b.map(function(e){return e.getId();});});};U.initializeArrayWithPlaceholders=function(t,s){var l=g(s,t);return Array(l).fill(U.PLACEHOLDER).map(function(p,i){return p+i;});};U.extendArrayWithPlaceholders=function(e,s,t){var l=g(s,t);if(e.length<l){var u;for(var i=e.length;i<=l;i++){u=U.PLACEHOLDER+(e.length);e.splice(e.length,0,u);}}};U.extendElementsArray=function(e,s,t,a){U.extendArrayWithPlaceholders(e,s,t);var c=e.indexOf(a);var u=e.indexOf(U.PLACEHOLDER+s);if(c!==s&&s!==undefined){if(c>=0){U.shiftElement(e,c,s);}else if(u>-1){e[u]=a;}else if(U.isUnknown(e[s])){e[s]=a;}}};U.shiftElement=function(e,o,n){e.splice(n,0,e.splice(o,1)[0]);};U.isUnknown=function(v){if(v!==undefined&&v.indexOf(U.PLACEHOLDER)===0){var r=v.slice(1,v.length);var p=parseInt(r);if(isNaN(p)){return false;}return true;}return false;};return U;});