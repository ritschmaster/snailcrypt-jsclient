/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./BaseController'],function(B){"use strict";var C=B.extend("sap.ui.mdc.p13n.subcontroller.ChartTypeController",{constructor:function(){B.apply(this,arguments);this._bResetEnabled=true;}});C.prototype.getCurrentState=function(){return{properties:{chartType:this.getAdaptationControl().getChartType()}};};C.prototype.getStateKey=function(){return"supplementaryConfig";};C.prototype.getDelta=function(p){var t=p.changedState.type?p.changedState.type:p.changedState.properties.chartType;var c={selectorElement:p.control,changeSpecificData:{changeType:"setChartType",content:{chartType:t}}};return[c];};return C;});
