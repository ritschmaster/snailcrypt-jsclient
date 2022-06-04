/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/write/api/FeaturesAPI","sap/ui/fl/variants/context/Component","sap/ui/core/ComponentContainer"],function(F,C,a){"use strict";var c;var b={createComponent:function(p){return F.isContextSharingEnabled(p.layer).then(function(i){if(i){if(!c||c.bIsDestroyed){var o=new C("contextSharing");o.setSelectedContexts({role:[]});c=new a("contextSharingContainer",{component:o});}return c;}});}};return b;});
