/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/Tokenizer','sap/ui/mdc/field/TokenizerDisplayRenderer','sap/ui/events/KeyCodes','sap/m/library'],function(T,a,K,l){"use strict";var E=l.EmptyIndicatorMode;var b=T.extend("sap.ui.mdc.field.TokenizerDisplay",{metadata:{library:"sap.ui.mdc",properties:{emptyIndicatorMode:{type:"sap.m.EmptyIndicatorMode",group:"Appearance",defaultValue:E.Off}}},renderer:a});b.prototype.init=function(){T.prototype.init.apply(this,arguments);this.allowTextSelection(true);this.addStyleClass("sapUiMdcTokenizerDisplay");};b.prototype.onkeydown=function(e){T.prototype.onkeydown.call(this,e);if(!this.getEnabled()){return;}if(e.which===K.ENTER){if(this.getHiddenTokensCount()>0){this._handleNMoreIndicatorPress();}}};return b;});
