/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/UIComponent"],function(U){"use strict";return U.extend("sap.ui.fl.variants.context.Component",{metadata:{manifest:"json"},getSelectedContexts:function(){var s=this.getModel("selectedContexts").getProperty("/selected");var S=s.map(function(r){return r.id;});return{role:S};},setSelectedContexts:function(s){var S=s.role.map(function(r){return{id:r,description:""};});var o=this.getModel("selectedContexts");o.setProperty("/selected",S);o.refresh(true);},hasErrorsAndShowErrorMessage:function(){return false;}});});
