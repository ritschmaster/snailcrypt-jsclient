/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Change"],function(C){"use strict";var a="$sap.ui.fl.changes";function g(m){var b=m&&m.getEntry&&m.getEntry(a)&&m.getEntry(a).descriptor||[];return b.map(function(c){return new C(c);});}var A={applyChanges:function(u,b,s){return s.registry().then(function(R){var c=b.map(function(o){return R[o.getChangeType()]&&R[o.getChangeType()]();});return Promise.all(c);}).then(function(c){c.forEach(function(o,i){try{var d=b[i];u=o.applyChange(u,d);if(!o.skipPostprocessing&&d.getTexts()){u=s.processTexts(u,d.getTexts());}}catch(e){s.handleError(e);}});return u;});},applyChangesIncludedInManifest:function(m,s){var d=g(m);var M=m.getJson();delete M[a];if(d.length>0){return this.applyChanges(M,d,s).then(function(){return;});}return Promise.resolve();}};return A;});
