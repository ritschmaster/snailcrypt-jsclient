/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Text"],function(T){"use strict";var B={apiVersion:2};B.render=function(r,c){var C=c._getControlsForBreadcrumbTrail(),s=c._getSelect(),S=c._sSeparatorSymbol,d=c._getInvisibleText().getId(),a=c.getAriaLabelledBy().slice();r.openStart("nav",c);r.class("sapMBreadcrumbs");a.push(d);r.accessibilityState(null,{labelledby:{value:a.join(" "),append:true}});r.openEnd();r.openStart("ol");r.openEnd();if(s.getVisible()){this._renderControlInListItem(r,s,S,false,"sapMBreadcrumbsSelectItem");}C.forEach(function(o,i){this._renderControlInListItem(r,o,S,o instanceof T,undefined,i,C.length);},this);r.close("ol");r.close("nav");};B._renderControlInListItem=function(r,c,s,S,a,i,v){r.openStart("li");r.class("sapMBreadcrumbsItem");r.class(a);r.openEnd();r.renderControl(c);if(!S){r.openStart("span").class("sapMBreadcrumbsSeparator").openEnd().text(s).close("span");}r.close("li");};return B;},true);
