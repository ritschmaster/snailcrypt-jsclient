/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var N={apiVersion:2};N.render=function(r,n){var m=n.getAggregation("_mainIndicator"),s=n.getSideIndicators();r.openStart("div",n).class("sapFCardNumericIndicators").class("sapFCardNumericIndicatorsSideAlign"+n.getSideIndicatorsAlignment());if(n.getNumberSize()==="S"){r.class("sapMTileSmallPhone");}r.openEnd();if(m){r.openStart("div").class("sapFCardNumericIndicatorsMain").openEnd().renderControl(m).close("div");r.openStart("div").class("sapFCardNumericIndicatorsGap").openEnd().close("div");}if(s.length!==0){r.openStart("div").class("sapFCardNumericIndicatorsSide").openEnd();s.forEach(function(i){r.renderControl(i);});r.close("div");}r.close("div");};return N;});
