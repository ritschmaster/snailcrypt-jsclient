/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/util/DataProvider"],function(D){"use strict";var E=D.extend("sap.ui.integration.util.ExtensionDataProvider",{metadata:{library:"sap.ui.integration"},constructor:function(c,e){D.call(this,c);this._oExtension=e;}});E.prototype.destroy=function(){D.prototype.destroy.apply(this,arguments);this._oExtension=null;};E.prototype.getData=function(){var e=this.getSettings().extension;if(!this._oExtension){return Promise.reject("The extension module is not loaded properly or doesn't export a correct value.");}if(!this._oExtension[e.method]){return Promise.reject("Extension doesn't implement "+e.method+" method.");}return this._oExtension[e.method].apply(this._oExtension,e.args);};return E;});
