/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/util/changeVisualization/ChangeVisualizationUtils","sap/ui/core/util/reflection/JsControlTreeModifier"],function(C,J){"use strict";var M={};M.getDescription=function(p,l,P){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.rta");var d=r.getText("TXT_CHANGEVISUALIZATION_CHANGE_MOVE_WITHIN",C.shortenString(l));var D=r.getText("TXT_CHANGEVISUALIZATION_CHANGE_MOVE_WITHIN",l);var b;var a=P.appComponent;var s=(p.sourceParentContainer&&J.getControlIdBySelector(p.sourceParentContainer,a));var t=(p.targetParentContainer&&J.getControlIdBySelector(p.targetParentContainer,a));if(s!==t){b=r.getText("BTN_CHANGEVISUALIZATION_SHOW_DEPENDENT_CONTAINER_MOVE");d=r.getText("TXT_CHANGEVISUALIZATION_CHANGE_MOVE",C.shortenString(l));D=r.getText("TXT_CHANGEVISUALIZATION_CHANGE_MOVE",l);}return{descriptionText:d,descriptionTooltip:D,buttonText:b};};return M;});
