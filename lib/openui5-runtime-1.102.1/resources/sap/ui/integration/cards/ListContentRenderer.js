/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseContentRenderer","../library"],function(B,l){"use strict";var A=l.AttributesLayoutType;var L=B.extend("sap.ui.integration.cards.ListContentRenderer",{apiVersion:2});L.renderContent=function(r,o){r.renderControl(o.getAggregation("_content"));if(o.getAggregation("_legend")){r.renderControl(o.getAggregation("_legend"));}};L.getMinHeight=function(c,C,o){var m=o.getContentPageSize(c),i;if(!c||!c.item||!m){return this.DEFAULT_MIN_HEIGHT;}i=this.getItemMinHeight(c,C);return(m*i)+"rem";};L.getItemMinHeight=function(c,C){if(!c||!c.item){return 0;}var i=this.isCompact(C),t=c.item,I=i?1:1.125,v=i?1:1.625,a;if(t.icon&&!t.description){v=i?0:0.75;I=2;}if(t.description){v=2;I+=i?2:1.875;}if(t.attributes){v=2.25;a=t.attributes.length/2;if(t.attributesLayoutType===A.OneColumn){a=t.attributes.length;}a=Math.ceil(a);I+=a*1.5;}if(t.chart){I+=1;}if(t.actionsStrip){v=1;I+=i?3:3.75;}I+=v;return I;};return L;});
