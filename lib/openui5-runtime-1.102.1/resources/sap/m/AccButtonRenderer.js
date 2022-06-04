/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ButtonRenderer","sap/ui/core/Renderer"],function(B,R){"use strict";var A=R.extend(B);A.apiVersion=2;A.renderAccessibilityAttributes=function(r,c){if(c.getTabIndex()){r.attr("tabindex",c.getTabIndex());}if(c.getAriaHidden()){r.attr("aria-hidden",c.getAriaHidden());}if(c.getAriaHaspopup()){r.attr("aria-haspopup",c.getAriaHaspopup());}};return A;},true);
