/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','./InputBaseRenderer'],function(R,I){"use strict";var M=R.extend(I);M.apiVersion=2;M.getAccessibilityState=function(c){var r=sap.ui.getCore().getLibraryResourceBundle("sap.m"),C=r.getText("MASKINPUT_ROLE_DESCRIPTION"),a=I.getAccessibilityState.apply(this,arguments);a["roledescription"]=C;return a;};return M;},true);
