/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseAction"],function(B){"use strict";var C=B.extend("sap.ui.integration.cards.actions.CustomAction",{metadata:{library:"sap.ui.integration"}});C.prototype.execute=function(){var c=this.getConfig();if(typeof c.action==="function"){c.action(this.getCardInstance(),this.getSourceInstance());}};return C;});
