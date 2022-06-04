/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','sap/m/MultiInputRenderer','sap/ui/mdc/field/FieldInputRenderUtil'],function(R,M,F){"use strict";var a=R.extend(M);a.apiVersion=2;a.addOuterClasses=function(r,m){M.addOuterClasses.apply(this,arguments);r.class("sapUiMdcFieldMultiInput");};a.getAriaRole=function(m){return F.getAriaRole.call(this,m,M);};a.getAccessibilityState=function(m){return F.getAccessibilityState.call(this,m,M);};a.writeInnerAttributes=function(r,m){return F.writeInnerAttributes.call(this,r,m,M);};return a;});
