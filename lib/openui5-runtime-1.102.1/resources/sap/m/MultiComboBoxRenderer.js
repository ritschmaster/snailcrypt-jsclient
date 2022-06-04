/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ComboBoxBaseRenderer','./ComboBoxTextFieldRenderer','sap/ui/core/Renderer','sap/ui/core/Core'],function(C,a,R,b){"use strict";var M=R.extend(C);M.apiVersion=2;M.CSS_CLASS_MULTICOMBOBOX="sapMMultiComboBox";M.addOuterClasses=function(r,c){C.addOuterClasses.apply(this,arguments);r.class(M.CSS_CLASS_MULTICOMBOBOX);if(c.getProperty("hasSelection")){r.class("sapMMultiComboBoxHasToken");}};M.getAriaDescribedBy=function(c){var A=a.getAriaDescribedBy.apply(this,arguments),t=c.getAggregation("tokenizer"),i=t&&t.getTokensInfoId();return(A||"")+" "+i;};M.getAccessibilityState=function(c){var A=C.getAccessibilityState.apply(this,arguments),r=b.getLibraryResourceBundle("sap.m");A.roledescription=r.getText("MULTICOMBOBOX_ARIA_ROLE_DESCRIPTION");return A;};M.prependInnerContent=function(r,c){r.renderControl(c.getAggregation("tokenizer"));};return M;},true);
