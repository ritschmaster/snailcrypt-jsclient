/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/editor/fields/BaseField","sap/m/Input"],function(B,I){"use strict";var N=B.extend("sap.ui.integration.editor.fields.NumberField",{metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer()});N.prototype.initVisualization=function(c){var v=c.visualization;var f=c.formatter;if(!v){v={type:I,settings:{value:{path:'currentSettings>value',type:'sap.ui.model.type.Float',formatOptions:f},editable:c.editable,type:"Number"}};}this._visualization=v;};return N;});
