/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/m/Token','sap/ui/mdc/field/TokenDisplayRenderer'],function(T,a){"use strict";var b=T.extend("sap.ui.mdc.field.TokenDisplay",{metadata:{library:"sap.ui.mdc",properties:{_delimiter:{type:"string",defaultValue:"·",visibility:"hidden"}}},renderer:a});b.prototype.init=function(){T.prototype.init.apply(this,arguments);if(!this._oResourceBundle){this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");}this.setProperty("_delimiter",this._oResourceBundle.getText("field.SEPARATOR").trim());};b.prototype.getSelected=function(){return false;};b.prototype.focus=function(){return;};return b;});
