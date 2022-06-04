/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/DelegateMediator"],function(D){"use strict";var a={registerDefaultDelegate:function(p){D.registerDefaultDelegate(p);},getDelegateForControl:function(p){return D.getDelegateForControl(p.control,p.modifier,p.modelType,p.supportsDefault);},getKnownDefaultDelegateLibraries:function(){return D.getKnownDefaultDelegateLibraries();},getRequiredLibrariesForDefaultDelegate:function(p){return D.getRequiredLibrariesForDefaultDelegate(p.delegateName,p.control,p.modelType);}};return a;});
