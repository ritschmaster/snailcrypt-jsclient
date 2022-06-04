/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var O={apiVersion:2};O.render=function(r,c){var i=c._getInnerControl(),I=c._isIconVisible()&&!c._isTextVisible(),o;r.openStart("span",c);r.class("sapMObjectMarker");r.openEnd();if(i){i.setIconOnly(I);if(c.hasListeners("press")){o=i._getIconAggregation();if(I&&o&&!o.hasListeners("press")){o.attachPress(c._firePress,c);}}}r.renderControl(i);r.close("span");};return O;},true);
