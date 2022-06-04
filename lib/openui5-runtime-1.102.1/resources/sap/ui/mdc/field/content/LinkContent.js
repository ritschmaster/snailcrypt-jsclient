/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/field/content/DefaultContent"],function(D){"use strict";var L=Object.assign({},D,{getDisplay:function(){return["sap/m/Link"];},getDisplayMultiValue:function(){return[null];},getDisplayMultiLine:function(){return["sap/m/Link"];},getUseDefaultFieldHelp:function(){return false;},createDisplay:function(c,C,i){var a=C[0];var o=c.getConditionsType();var l=new a(i,{text:{path:"$field>/conditions",type:o},textAlign:"{$field>/textAlign}",textDirection:"{$field>/textDirection}",tooltip:"{$field>/tooltip}",press:c.getHandleContentPress(),wrapping:"{$field>/multipleLines}"});var f=c.getField().getFieldInfo();if(f){f.getDirectLinkHrefAndTarget().then(function(b){c.getMetadata()._oClass._updateLink(l,b);});}c.setAriaLabelledBy(l);c.setBoundProperty("text");return[l];},createDisplayMultiValue:function(){throw new Error("sap.ui.mdc.field.content.LinkContent - createDisplayMultiValue not defined!");},createDisplayMultiLine:function(c,C,i){return L.createDisplay(c,C,i);}});return L;});
