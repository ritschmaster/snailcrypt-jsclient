/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_place:function(d){var p=this._super._place.apply(this,arguments),t=this;return this._oTargetHandler._chainNavigation(function(){return p.then(function(v){t._oTargetHandler.addNavigation({navigationIdentifier:t._oOptions._name,transition:t._oOptions.transition,transitionParameters:t._oOptions.transitionParameters,eventData:d,targetControl:v.control,aggregationName:t._oOptions.controlAggregation,view:v.view,preservePageInSplitContainer:t._oOptions.preservePageInSplitContainer,placeholderConfig:v.placeholderConfig,placeholderShown:v.placeholderShown});if(d){delete d.routeConfig;}return v;});},this._oOptions._name);},showPlaceholder:function(s){return this._oTargetHandler.showPlaceholder(s);},hidePlaceholder:function(){}};},true);
