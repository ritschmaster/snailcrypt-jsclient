/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge"],function(m){"use strict";var D={isKeyUser:false,isKeyUserTranslationEnabled:false,isVariantSharingEnabled:false,isPublicFlVariantEnabled:false,isVariantPersonalizationEnabled:true,isAtoAvailable:false,isAtoEnabled:false,versioning:{},isProductiveSystem:true,isPublicLayerAvailable:false,isZeroDowntimeUpgradeRunning:false,system:"",client:""};function _(r){var v={};var V=!!r.features.isVersioningEnabled;r.layers.forEach(function(l){v[l]=V;});return v;}return{mergeResults:function(r){var R=D;r.forEach(function(o){Object.keys(o.features).forEach(function(k){if(k!=="isVersioningEnabled"){R[k]=o.features[k];}});R.versioning=m(R.versioning,_(o));});return R;}};});
