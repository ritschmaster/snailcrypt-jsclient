/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/editor/fields/BaseField","sap/m/CheckBox"],function(B,C){"use strict";var a=B.extend("sap.ui.integration.editor.fields.BooleanField",{metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer()});a.prototype.initVisualization=function(c){var v=c.visualization;if(!v){v={type:C,settings:{selected:{path:'currentSettings>value'},editable:c.editable}};c.withLabel=true;}else if(v.type==="Switch"){v.type="sap/m/Switch";}this._visualization=v;};return a;});
