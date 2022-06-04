/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/base/util/ObjectPath"],function(m,O){"use strict";var s={};function c(r,p){var f=r.reduce(function(f,R){if(O.get(p,R)){return f.concat(O.get(p,R));}return f;},[]);var F=[];return f.filter(function(o){var b=o.fileName;var d=F.indexOf(b)!==-1;if(d){return false;}F.push(b);return true;});}function a(r){return r.reduce(function(u,R){return m({},u,R.ui2personalization);},{});}function _(r){return r.reduce(function(C,R){return R.cacheKey?C+=R.cacheKey:C;},"")||null;}s.merge=function(r){return{appDescriptorChanges:c(r,"appDescriptorChanges"),changes:c(r,"changes"),ui2personalization:a(r),comp:{variants:c(r,"comp.variants"),changes:c(r,"comp.changes"),defaultVariants:c(r,"comp.defaultVariants"),standardVariants:c(r,"comp.standardVariants")},variants:c(r,"variants"),variantChanges:c(r,"variantChanges"),variantDependentControlChanges:c(r,"variantDependentControlChanges"),variantManagementChanges:c(r,"variantManagementChanges"),cacheKey:_(r)};};return s;});
