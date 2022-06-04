/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/core/Core","sap/ui/core/IconPool"],function(M,C,I){"use strict";var a=M.extend("sap.ui.integration.formatters.IconFormatter",{metadata:{library:"sap.ui.integration",properties:{destinations:{type:"object"}},associations:{card:{type:"sap.ui.integration.widgets.Card",multiple:false}}}});a.prototype.formatSrc=function(u){if(!u){return u;}if(u.startsWith("data:")||I.isIconURI(u)){return u;}if(this.getDestinations().hasDestination(u)){return this.getDestinations().processString(u).then(function(r){return this._format(r);}.bind(this));}return this._format(u);};a.prototype._format=function(u){return this._getCardInstance().getRuntimeUrl(u);};a.prototype._getCardInstance=function(){return C.byId(this.getCard());};return a;});
