/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/BaseCommand","sap/ui/fl/Utils","sap/ui/fl/write/api/LocalResetAPI"],function(B,F,L){"use strict";var a=B.extend("sap.ui.rta.command.LocalReset",{metadata:{library:"sap.ui.rta",properties:{currentVariant:{type:"string"},changeType:{type:"string"},jsOnly:{type:"boolean"}},associations:{},events:{}}});a.prototype.prepare=function(f){var c=this.getElement();this._oAppComponent=F.getAppComponentForControl(c);this._aAffectedChanges=L.getNestedUIChangesForControl(c,{layer:f.layer,currentVariant:this.getCurrentVariant()});return Promise.resolve(true);};a.prototype.execute=function(){return L.resetChanges(this._aAffectedChanges,this._oAppComponent);};a.prototype.undo=function(){return L.restoreChanges(this._aAffectedChanges,this._oAppComponent);};return a;});
