/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library'],function(l){"use strict";var B=l.BlockRowColorSets;var a={apiVersion:2};a.render=function(r,b){this.startLayout(r,b);this.addContent(r,b);this.endLayout(r);};a.startLayout=function(r,b){r.openStart("div",b).class("sapUiBlockLayout").class("sapUiBlockLayoutBackground"+b.getBackground());if(b.getKeepFontSize()){r.class("sapUiBlockLayoutKeepFontSize");}r.openEnd();};a.addContent=function(r,b){var c=b.getContent(),t=Object.keys(B).map(function(k){return B[k];}),n=t.length;c.forEach(function(o,i,R){var T=o.getRowColorSet()||t[i%n],C="sapUiBlockLayoutBackground"+T,p=(i&&R[i-1])||null;if(p&&p.hasStyleClass(C)){o.removeStyleClass(C);C+="Inverted";}if(C){o.addStyleClass(C);}r.renderControl(o);});};a.endLayout=function(r){r.close("div");};return a;},true);
