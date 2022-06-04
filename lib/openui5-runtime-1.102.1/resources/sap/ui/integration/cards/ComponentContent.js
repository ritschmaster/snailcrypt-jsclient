/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/cards/BaseContent","./ComponentContentRenderer","sap/ui/core/ComponentContainer","sap/ui/core/Component"],function(B,C,a,b){"use strict";var c=B.extend("sap.ui.integration.cards.ComponentContent",{metadata:{library:"sap.ui.integration"},renderer:C});b._fnOnInstanceCreated=function(i){var o=i.getComponentData();if(o&&o["__sapUiIntegration_card"]&&i.onCardReady){i.onCardReady(o["__sapUiIntegration_card"]);}};c.prototype.setConfiguration=function(o){B.prototype.setConfiguration.apply(this,arguments);o=this.getParsedConfiguration();if(!o){return;}var d=new a({manifest:o.componentManifest,async:true,settings:{componentData:{"__sapUiIntegration_card":this.getCardInstance()}},componentCreated:function(){this.fireEvent("_actionContentReady");this.fireEvent("_updated");}.bind(this),componentFailed:function(){this.fireEvent("_actionContentReady");this.handleError("Card content failed to create component");}.bind(this)});this.setAggregation("_content",d);};return c;});
