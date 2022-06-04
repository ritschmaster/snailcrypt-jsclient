/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F={FESR_NAMESPACE:"http://schemas.sap.com/sapui5/extension/sap.ui.core.FESR/1",setSemanticStepname:function(e,E,s){var c=e.data("sap-ui-custom-settings");if(c===null){c={};}if(!c[this.FESR_NAMESPACE]){c[this.FESR_NAMESPACE]={};}c[this.FESR_NAMESPACE][E]=s;e.data("sap-ui-custom-settings",c);},getSemanticStepname:function(e,E){var c=e&&e.data("sap-ui-custom-settings")&&e.data("sap-ui-custom-settings")[this.FESR_NAMESPACE];if(!c){return;}return c[E];}};return F;});
