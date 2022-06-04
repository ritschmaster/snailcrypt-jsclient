/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/core/Core"],function(l,C){"use strict";var V=l.ValueColor;var M={apiVersion:2};M.render=function(r,m){var c=C.byId(m.getChart()),L=[],t=m.getAggregation("_titles");if(c){L=c._calculateChartData().map(function(d){return d.color;});}r.openStart("div",m).class("sapUiIntMicrochartLegend").openEnd();L.forEach(function(s,i){r.openStart("div").class("sapUiIntMicrochartLegendItem").openEnd();r.openStart("div");M.addColor(r,m,s);r.openEnd().close("div");r.renderControl(t[i]);r.close("div");});r.close("div");};M.addColor=function(r,m,c){if(V[c]){r.class("sapUiIntMicrochartLegendItem"+c);}else{var s=m._mLegendColors[c]||c;r.style("background",s);}};return M;},true);
