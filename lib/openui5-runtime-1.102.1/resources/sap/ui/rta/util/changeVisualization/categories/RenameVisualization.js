/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/util/changeVisualization/ChangeVisualizationUtils"],function(C){"use strict";var R={};R.getDescription=function(p,f){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");var k=p.originalLabel?"TXT_CHANGEVISUALIZATION_CHANGE_RENAME_FROM_TO":"TXT_CHANGEVISUALIZATION_CHANGE_RENAME_TO";var d=r.getText(k,[C.shortenString(p.newLabel)||f,C.shortenString(p.originalLabel)]);var D=r.getText(k,[p.newLabel||f,p.originalLabel]);return{descriptionText:d,descriptionTooltip:D};};return R;});
