/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/m/ListBaseRenderer"],function(R,L){"use strict";var G=R.extend(L);G.apiVersion=2;G.getNoDataAriaRole=function(){return"option";};G.renderContainerAttributes=function(r,c){L.renderContainerAttributes.apply(this,arguments);r.class("sapFGridList");};G.renderListStartAttributes=function(r,c){L.renderListStartAttributes.apply(this,arguments);this.renderGridAttributes(r,c);};G.renderGridAttributes=function(r,c){var g=c.getGridLayoutConfiguration();if(g){g.addGridStyles(r);}else{r.class("sapFGridListDefault");}if(c.isGrouped()){r.class("sapFGridListGroup");}};return G;},true);
