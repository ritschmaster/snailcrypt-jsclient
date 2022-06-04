/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/core/Core","sap/ui/integration/util/BindingResolver"],function(M,C,B){"use strict";var a=M.extend("sap.ui.integration.cards.actions.BaseAction",{metadata:{library:"sap.ui.integration",properties:{config:{type:"object"},parameters:{type:"object"},actionHandler:{type:"object"}},associations:{card:{type:"sap.ui.integration.widgets.Card",multiple:false},source:{type:"sap.ui.base.EventProvider",multiple:false}}}});a.prototype.execute=function(){};a.prototype.getResolvedConfig=function(){var s=this.getSourceInstance(),b=s.getBindingContext(),c;if(b){c=s.getBindingContext().getPath();}return B.resolveValue(this.getConfig(),s,c);};a.prototype.getCardInstance=function(){return C.byId(this.getCard());};a.prototype.getSourceInstance=function(){return C.byId(this.getSource());};return a;});
