/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var r=function(R,c){var I=c.getId();var s=I+"-animation";var b=["-leftBox","-middleBox","-rightBox"];R.openStart('div',s);R.class("sapUiLocalBusyIndicatorAnimation");R.openEnd();for(var i=0;i<b.length;i++){R.openStart('div',I+b[i]);R.class("sapUiLocalBusyIndicatorBox");R.openEnd();R.close("div");}R.close("div");};var L={apiVersion:2};L.render=function(R,c){R.openStart("div",c);R.class("sapUiLocalBusyIndicator");R.openEnd();r(R,c);R.close("div");};return L;},true);
