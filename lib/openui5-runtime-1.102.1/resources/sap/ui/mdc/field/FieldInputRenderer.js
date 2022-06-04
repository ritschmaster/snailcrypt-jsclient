/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','sap/m/InputRenderer','sap/ui/mdc/field/FieldInputRenderUtil'],function(R,I,F){"use strict";var a=R.extend(I);a.apiVersion=2;a.addOuterClasses=function(r,i){I.addOuterClasses.apply(this,arguments);r.class("sapUiMdcFieldInput");};a.getAriaRole=function(i){return F.getAriaRole.call(this,i,I);};a.getAccessibilityState=function(i){return F.getAccessibilityState.call(this,i,I);};a.writeInnerAttributes=function(r,i){return F.writeInnerAttributes.call(this,r,i,I);};return a;});
