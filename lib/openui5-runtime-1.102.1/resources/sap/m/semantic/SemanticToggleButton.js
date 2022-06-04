/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/semantic/SemanticButton","sap/ui/events/KeyCodes","sap/m/ToggleButton","sap/m/semantic/SemanticOverflowToolbarToggleButton"],function(S,K,T,a){"use strict";var b=S.extend("sap.m.semantic.SemanticToggleButton",{metadata:{library:"sap.m","abstract":true,properties:{pressed:{type:"boolean",group:"Data",defaultValue:false}}}});b.prototype._getClass=function(c){return c&&c.constraints==="IconOnly"?a:T;};b.prototype._onPress=function(e){var p;if(this.getEnabled()){p=e.getParameter('pressed');this.setPressed(p);this.firePress({pressed:p});}};b.prototype._applyProperty=function(p,v,s){if(p==='pressed'){this._setPressed(v,s);}else{S.prototype._applyProperty.apply(this,arguments);}};b.prototype._setPressed=function(v,s){var t=this._getControl(),p=Boolean(v);if(t.getPressed()!==p){this._getControl().setPressed(p,s);}};b.prototype._createInstance=function(c){var i=new c({id:this.getId()+"-toggleButton"});i.attachEvent("press",this._onPress,this);return i;};return b;});
