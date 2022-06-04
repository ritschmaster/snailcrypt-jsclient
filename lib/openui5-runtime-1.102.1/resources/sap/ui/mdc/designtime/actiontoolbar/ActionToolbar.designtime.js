/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/ActionToolbar","../Util"],function(A,U){"use strict";var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");var d={description:"{description}",name:"{name}",aggregations:{},properties:{},actions:{settings:{name:r.getText("actiontoolbar.RTA_SETTINGS_NAME"),handler:function(c,p){return sap.ui.mdc.p13n.Engine.getInstance().getRTASettingsActionHandler(c,p,"actionsKey").then(function(C){return C;});},CAUTION_variantIndependent:true}}},a=[],b=[];return U.getDesignTime(A,b,a,d);});
