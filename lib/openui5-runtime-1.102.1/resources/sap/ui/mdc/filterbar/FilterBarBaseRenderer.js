/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F={apiVersion:2};F.CSS_CLASS="sapUiMdcFilterBarBase";F.render=function(r,c){r.openStart("div",c);r.class(F.CSS_CLASS);r.openEnd();var i=c.getAggregation("layout")?c.getAggregation("layout").getInner():null;r.renderControl(i);r.close("div");};return F;},true);
