/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/util/changeVisualization/ChangeVisualizationUtils"],function(C){"use strict";var S={};S.getDescription=function(p,l){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");var d=r.getText("TXT_CHANGEVISUALIZATION_CHANGE_SPLIT",C.shortenString(l));var D=r.getText("TXT_CHANGEVISUALIZATION_CHANGE_SPLIT",l);var b=r.getText("BTN_CHANGEVISUALIZATION_SHOW_DEPENDENT_CONTAINER_SPLIT");return{descriptionText:d,descriptionTooltip:D,buttonText:b};};return S;});
