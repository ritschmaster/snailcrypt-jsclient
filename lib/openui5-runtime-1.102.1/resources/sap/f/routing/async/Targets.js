/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{display:function(){var l,n;this._oLastDisplayedTarget=null;var p=this._super.display.apply(this,arguments);return p.then(function(v){if(this._oLastDisplayedTarget){l=this._getLevel(this._oLastDisplayedTarget);n=this._oLastDisplayedTarget._oOptions._name;}this._oTargetHandler.navigate({level:l,navigationIdentifier:n});return v;}.bind(this));},_displaySingleTarget:function(t){var T=this.getTarget(t.name);return this._super._displaySingleTarget.apply(this,arguments).then(function(v){if(T){this._oLastDisplayedTarget=T;}return v;}.bind(this));}};},true);
