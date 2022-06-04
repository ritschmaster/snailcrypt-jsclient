/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/library"],function(l){"use strict";var A={apiVersion:2};A.render=function(r,a){var t=a.getTooltip_AsString();r.openStart("div",a).class("sapFAvatarGroupItem").class("sapFAvatarGroupItem"+a._sAvatarDisplaySize);if(a._getInteractive()&&a._getGroupType()==="Individual"){r.attr("tabindex",0);}if(t){r.attr("title",t);}r.openEnd();r.renderControl(a._getAvatar());r.close("div");};return A;},true);
