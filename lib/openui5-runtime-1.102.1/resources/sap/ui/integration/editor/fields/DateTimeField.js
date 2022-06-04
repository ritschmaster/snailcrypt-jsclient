/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/editor/fields/BaseField","sap/m/DateTimePicker"],function(B,D){"use strict";var a=B.extend("sap.ui.integration.editor.fields.DateTimeField",{metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer()});a.prototype.initVisualization=function(c){var v=c.visualization;var o=c.formatter;if(c.value!==""){c.value=new Date(c.value);}if(!v){v={type:D,settings:{value:{path:"currentSettings>value",type:'sap.ui.model.type.DateTime',formatOptions:o},editable:c.editable,width:"100%",change:function(e){if(e.getParameters().valid){var s=e.getSource();s.getBinding("value").setValue(s.getDateValue().toISOString());s.getBinding("value").checkUpdate();}else{var s=e.getSource();s.getBinding("value").setValue("");s.getBinding("value").checkUpdate(true);}}}};}this._visualization=v;};return a;});
