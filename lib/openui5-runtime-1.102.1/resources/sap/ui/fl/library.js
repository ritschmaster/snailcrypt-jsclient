/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/_internal/preprocessors/RegistrationDelegator","sap/ui/fl/Utils","sap/ui/fl/Layer","sap/ui/fl/Scenario","sap/ui/fl/changeHandler/condenser/Classification","sap/ui/core/library","sap/m/library"],function(R,U,L,S,C){"use strict";var t=sap.ui.getCore().initLibrary({name:"sap.ui.fl",version:"1.102.1",controls:["sap.ui.fl.variants.VariantManagement","sap.ui.fl.util.IFrame"],dependencies:["sap.ui.core","sap.m"],designtime:"sap/ui/fl/designtime/library.designtime",extensions:{flChangeHandlers:{"sap.ui.fl.util.IFrame":"sap/ui/fl/util/IFrame"},"sap.ui.support":{diagnosticPlugins:["sap/ui/fl/support/Flexibility"],publicRules:true}}});t.condenser={Classification:C};t.Scenario=S;R.registerAll();function _(){var u=U.getUshellContainer();if(u){return u.getLogonSystem().isTrial();}return false;}if(_()){sap.ui.getCore().getConfiguration().setFlexibilityServices([{connector:"LrepConnector",url:"/sap/bc/lrep",layers:[]},{connector:"LocalStorageConnector",layers:[L.CUSTOMER,L.PUBLIC,L.USER]}]);}return t;});
