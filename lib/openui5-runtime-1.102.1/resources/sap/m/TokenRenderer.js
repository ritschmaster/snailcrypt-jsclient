/*!

* OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.

*/
sap.ui.define(["sap/ui/core/library","sap/ui/core/InvisibleText"],function(c,I){"use strict";var T=c.TextDirection;var a={apiVersion:2};a.render=function(r,C){var t=C._getTooltip(C,C.getEditable()&&C.getProperty("editableParent"));var d=C.getAggregation("deleteIcon");var A=[];var o={role:"option"};var p=C.getProperty("posinset");var s=C.getProperty("setsize");r.openStart("div",C).class("sapMToken");this._setAttributes(r,C);if(C.getSelected()){r.class("sapMTokenSelected");}if(p!==undefined){r.attr("aria-posinset",C.getProperty("posinset"));}if(s!==undefined){r.attr("aria-setsize",C.getProperty("setsize"));}if(!C.getEditable()){r.class("sapMTokenReadOnly");}if(C.getTruncated()){r.class("sapMTokenTruncated");}if(t){r.attr("title",t);}A.push(I.getStaticId("sap.m","TOKEN_ARIA_LABEL"));if(C.getEditable()&&C.getProperty("editableParent")){A.push(I.getStaticId("sap.m","TOKEN_ARIA_DELETABLE"));}r.attr("aria-selected",C.getSelected());o.describedby={value:A.join(" "),append:true};r.accessibilityState(C,o);r.openEnd();a._renderInnerControl(r,C);if(C.getEditable()&&d){r.renderControl(d);}r.close("div");};a._renderInnerControl=function(r,C){var t=C.getTextDirection();r.openStart("span").class("sapMTokenText");if(t!==T.Inherit){r.attr("dir",t.toLowerCase());}r.openEnd();var b=C.getText();if(b){r.text(b);}r.close("span");};a._setAttributes=function(r,C){r.attr("tabindex","-1");};return a;},true);
