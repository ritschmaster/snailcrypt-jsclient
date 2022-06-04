/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/field/FieldHelpBase'],function(F){"use strict";var C=F.extend("sap.ui.mdc.field.CustomFieldHelp",{metadata:{library:"sap.ui.mdc",properties:{},aggregations:{content:{type:"sap.ui.core.Control",multiple:false}},defaultAggregation:"content",events:{beforeOpen:{}}}});C.prototype._createPopover=function(){var p=F.prototype._createPopover.apply(this,arguments);if(p){p._getAllContent=function(){var f=this.getParent();if(f){var c=[];c.push(f.getContent());return c;}else{return this.getContent();}};}return p;};C.prototype.fireSelectEvent=function(c){this.close();this.fireSelect({conditions:c});};C.prototype.open=function(s){this.fireBeforeOpen();F.prototype.open.apply(this,arguments);};return C;});
