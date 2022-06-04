/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/semantic/SemanticControl','sap/m/Button','sap/m/semantic/SemanticOverflowToolbarButton',"sap/ui/thirdparty/jquery"],function(S,B,a,q){"use strict";var b=S.extend("sap.m.semantic.SemanticButton",{metadata:{library:"sap.m","abstract":true,properties:{enabled:{type:"boolean",group:"Behavior",defaultValue:true}},events:{press:{}}}});b.prototype._getControl=function(){var c,C,n,o=this._getConfiguration();if(!o){return null;}c=this.getAggregation('_control');if(!c){C=this._getClass(o);n=this._createInstance(C);n.applySettings(o.getSettings());if(typeof o.getEventDelegates==="function"){n.addEventDelegate(o.getEventDelegates(n));}this.setAggregation('_control',n,true);c=this.getAggregation('_control');}return c;};b.prototype._getClass=function(c){return c&&c.constraints==="IconOnly"?a:B;};b.prototype._createInstance=function(c){return new c({id:this.getId()+"-button",press:q.proxy(this.firePress,this)});};return b;});
