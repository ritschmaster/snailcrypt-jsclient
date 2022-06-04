/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/BaseCommand"],function(B){"use strict";var C=B.extend("sap.ui.rta.command.compVariant.CompVariantContent",{metadata:{library:"sap.ui.rta",properties:{variantId:{type:"string"},persistencyKey:{type:"string"},oldContent:{type:"object"},newContent:{type:"object"}}}});C.prototype.execute=function(){this.setOldContent(g.call(this));s.call(this,this.getNewContent());return Promise.resolve();};C.prototype.undo=function(){s.call(this,this.getOldContent());return Promise.resolve();};function s(c){var o={};var v=this.getElement();if(v.isPageVariant()){o[this.getPersistencyKey()]=c;v._applyVariantByPersistencyKey(this.getPersistencyKey(),o,"KEY_USER");}else{o=c;v._applyVariant(v._getPersoController(),o,"KEY_USER");}}function g(){var v=this.getElement();var o=v._getVariantContent(this.getVariantId());if(v.isPageVariant()){o=o&&o[this.getPersistencyKey()];}return o;}return C;});
