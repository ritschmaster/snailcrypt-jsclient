/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/library","sap/ui/core/Renderer","sap/m/LinkRenderer"],function(l,R,L){"use strict";var a=R.extend(L);a.apiVersion=2;a.renderText=function(r,c){var i=c.getAggregation("_icon");if(i){r.renderControl(i);}L.renderText.apply(this,arguments);};return a;},true);
