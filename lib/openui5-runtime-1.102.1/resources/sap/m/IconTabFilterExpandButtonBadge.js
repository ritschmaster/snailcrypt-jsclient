/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BadgeEnabler","sap/ui/core/Control","sap/ui/core/Core"],function(B,C,a){"use strict";var r=a.getLibraryResourceBundle("sap.m");var I=C.extend("sap.m.IconTabFilterExpandButtonBadge",{metadata:{library:"sap.m",interfaces:["sap.m.IBadge"]},renderer:{apiVersion:2,render:function(R,c){R.openStart("div",c).class("sapMITFExpandButtonBadge").openEnd().close("div");}}});B.call(I.prototype);I.prototype.init=function(){this.initBadgeEnablement({style:"Attention"});};I.prototype.getAriaLabelBadgeText=function(){return r.getText("ICONTABFILTER_SUB_ITEMS_BADGES");};I.prototype.onBadgeUpdate=function(){var p=this.getParent();p.onBadgeUpdate.apply(p,arguments);};return I;});
