/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/m/OverflowToolbarRenderer","sap/m/BarInPageEnabler"],function(R,O,B){"use strict";var T=R.extend(O);T.apiVersion=2;T.renderBarContent=function(r,t){var o=false,i;t._getVisibleContent().forEach(function(c){i=c.isA("sap.tnt.ToolHeaderUtilitySeparator");if(!o&&i&&t._getOverflowButtonNeeded()){T.renderOverflowButton(r,t);o=true;}B.addChildClassTo(c,t);r.renderControl(c);});if(!o&&t._getOverflowButtonNeeded()){T.renderOverflowButton(r,t);}};return T;},true);
