/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./InputRenderer','sap/ui/core/Renderer',"sap/ui/core/Core"],function(I,R,C){"use strict";var M=R.extend(I);M.apiVersion=2;M.prependInnerContent=function(r,c){r.renderControl(c.getAggregation("tokenizer"));};M.addOuterClasses=function(r,c){I.addOuterClasses.apply(this,arguments);r.class("sapMMultiInput");if(c.getTokens().length>0){r.class("sapMMultiInputHasTokens");}};M.getAriaDescribedBy=function(c){var a=I.getAriaDescribedBy.apply(this,arguments),i=c.getAggregation("tokenizer")&&c.getAggregation("tokenizer").getTokensInfoId();if(a){a=a+" "+i;}else{a=i;}return a;};M.getAccessibilityState=function(c){var a=I.getAccessibilityState.apply(this,arguments),r=C.getLibraryResourceBundle("sap.m");a.roledescription=r.getText("MULTIINPUT_ARIA_ROLE_DESCRIPTION");return a;};return M;},true);
