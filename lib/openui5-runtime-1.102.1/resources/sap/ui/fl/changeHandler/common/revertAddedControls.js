/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(U){"use strict";return function(c,C,p){var m=p.modifier;var o=c.getDefinition();var a=o.content.targetAggregation;var v=p.view||U.getViewForControl(C);var A=p.appComponent;var r=c.getRevertData()||[];var b=r.map(function(R){var s;if(typeof R==="string"){s=R;}else{s=R.id;a=a||R.aggregationName;}return m.bySelector(s,A,v)||v&&v.createId&&m.bySelector(v.createId(s));});var P=[];b.forEach(function(d){var f=function(){return Promise.resolve().then(m.removeAggregation.bind(m,C,a,d)).then(function(){if(d.destroy){d.destroy();}});};P.push(f);});return U.execPromiseQueueSequentially(P,true,true).then(function(){c.resetRevertData();return true;});};});
