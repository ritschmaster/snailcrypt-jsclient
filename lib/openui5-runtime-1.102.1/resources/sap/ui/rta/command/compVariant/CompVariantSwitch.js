/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/BaseCommand"],function(B){"use strict";var C=B.extend("sap.ui.rta.command.CompVariantSwitch",{metadata:{library:"sap.ui.rta",properties:{sourceVariantId:{type:"string"},targetVariantId:{type:"string"}}}});C.prototype.execute=function(){this.getElement().activateVariant(this.getTargetVariantId());return Promise.resolve();};C.prototype.undo=function(){this.getElement().activateVariant(this.getSourceVariantId());return Promise.resolve();};return C;});
