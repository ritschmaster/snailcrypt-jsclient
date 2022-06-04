/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/base/Log","sap/base/util/isPlainObject"],function(E,L,i){"use strict";var S=E.extend("sap.m.SelectionDetailsItemLine",{metadata:{library:"sap.m",properties:{label:{type:"string",group:"Data"},value:{type:"any",group:"Data"},displayValue:{type:"string",defaultValue:null,group:"Data"},unit:{type:"string",defaultValue:null,group:"Data"},lineMarker:{type:"string",defaultValue:null,group:"Data"}}}});S.prototype._getValueToRender=function(){var v="",V=this.getValue();if(typeof V==="string"||V instanceof String){v=V;}else if(typeof V==="number"){v=V.toString();}else if(i(V)){if(V.day&&V.day.length>0){v=V.day;}if(V.time&&V.time.length>0){v=(v.length>0)?V.time+" "+v:V.time;}}else{L.warning("Value '"+V+"' is not supported. Expected type is a string, number or a plain object, including date and time properties of type string.");}return v;};return S;});
