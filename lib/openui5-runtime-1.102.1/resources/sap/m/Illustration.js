/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Control","./IllustrationRenderer","./IllustrationPool"],function(L,C,I,a){"use strict";var b=C.extend("sap.m.Illustration",{metadata:{library:"sap.m",properties:{set:{type:"string",defaultValue:null},media:{type:"string",defaultValue:null},type:{type:"string",defaultValue:null}},dnd:{draggable:true,droppable:false}}});b.CAN_NOT_BUILD_SYMBOL_MSG="Some of the Control's properties are missing. Can't build Symbol ID. No SVG will be displayed.";b.prototype.init=function(){this._sId=this.getId();};b.prototype.onBeforeRendering=function(){this._buildSymbolId();if(this._sSymbolId){a.loadAsset(this._sSymbolId,this._sId);}else{L.warning(b.CAN_NOT_BUILD_SYMBOL_MSG);}};b.prototype._buildSymbolId=function(){var s=this.getSet(),m=this.getMedia(),t=this.getType();this._sSymbolId="";if(s&&m&&t){this._sSymbolId=s+"-"+m+"-"+t;}};return b;});
