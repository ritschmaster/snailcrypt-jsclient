/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/editor/fields/BaseField","sap/m/Input"],function(B,I){"use strict";var a=B.extend("sap.ui.integration.editor.fields.IntegerField",{metadata:{library:"sap.ui.integration"},renderer:B.getMetadata().getRenderer()});a.prototype.initVisualization=function(c){var v=c.visualization;var f=c.formatter;if(!v){v={type:I,settings:{value:{path:'currentSettings>value',type:'sap.ui.model.type.Integer',formatOptions:f},editable:c.editable,type:"Number",parseError:function(e){var C=e.getSource(),b=null;if(C.getValue()!==""){if(e.getParameters()&&e.getParameters().exception&&e.getParameters().exception.message){b=e.getParameters().exception.message;}else{b=e.getId();}C.getParent()._showValueState("error",b);}else{C.getParent()._showValueState("none","");}}}};}else if(v.type==="Slider"){v.type="sap/m/Slider";}this._visualization=v;};return a;});
