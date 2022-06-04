/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/library","sap/base/Log","sap/ui/base/ManagedObject"],function(l,L,M){"use strict";var E=M.extend("sap.ui.integration.editor.Extension",{metadata:{library:"sap.ui.integration",properties:{formatters:{type:"object"}}}});E.prototype.init=function(){this._oEditorInterface=null;this._oEditor=null;};E.prototype.exit=function(){this._oEditorInterface=null;this._oEditor=null;};E.prototype.setFormatters=function(f){this.setProperty("formatters",f);if(!this._oEditor){return;}if(this._oEditor.getAggregation("_extension")!==this){L.error("Extension formatters must be set before the initialization of the editor. Do this inside Extension#init().");}};E.prototype.onEditorReady=function(){};E.prototype.getEditor=function(){return this._oEditorInterface;};E.prototype._setEditor=function(e,o){this._oEditor=e;this._oEditorInterface=o;};return E;});
