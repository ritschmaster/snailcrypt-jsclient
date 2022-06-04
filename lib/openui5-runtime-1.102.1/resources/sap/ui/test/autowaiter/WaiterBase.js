/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/test/_OpaLogger","sap/ui/test/_ParameterValidator","sap/ui/thirdparty/jquery"],function(U,_,a,q){"use strict";var W=U.extend("sap.ui.test.autowaiter.WaiterBase",{constructor:function(){this._mConfig=this._getDefaultConfig();this._sName=this.getMetadata().getName();this._oLogger=_.getLogger(this._sName);this._oHasPendingLogger=_.getLogger(this._sName+"#hasPending");this._oConfigValidator=new a({errorPrefix:this._sName+"#extendConfig"});},hasPending:function(){return false;},isEnabled:function(){return this._mConfig.enabled;},extendConfig:function(c){if(!q.isEmptyObject(c)){this._oConfigValidator.validate({inputToValidate:c,validationInfo:this._getValidationInfo()});q.extend(this._mConfig,c);}},_getDefaultConfig:function(){return{enabled:true};},_getValidationInfo:function(){return{enabled:"bool"};}});return W;});
