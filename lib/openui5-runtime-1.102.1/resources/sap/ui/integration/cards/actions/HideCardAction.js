/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseAction","sap/m/Dialog"],function(B,D){"use strict";var H=B.extend("sap.ui.integration.cards.actions.HideCardAction",{metadata:{library:"sap.ui.integration"}});H.prototype.execute=function(){var c=this.getCardInstance(),d=c.getParent(),h=c.getHostInstance();if(h&&h.onHideCard){h.onHideCard(c);return;}if(d instanceof D){d.close();d.attachAfterClose(function(){c.destroy();});}else{c.destroy();}};return H;});
