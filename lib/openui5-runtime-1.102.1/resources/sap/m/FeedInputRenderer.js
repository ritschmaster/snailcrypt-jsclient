/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");var F={apiVersion:2};F.render=function(R,c){var m=c.getId();R.openStart("div",c);R.class("sapMFeedInBase");R.attr("role","group");R.attr("aria-label",r.getText("FEED_INPUT_ARIA_LABEL"));R.openEnd();R.openStart("div",m+"-outerContainer");R.class("sapMFeedIn");if(!c.getShowIcon()){R.class("sapMFeedInNoIcon");}if(!c.getEnabled()){R.class("sapMFeedInDisabled");}R.openEnd();if(c.getShowIcon()){this._addImage(R,c,m);}R.openStart("div",m+"-container");R.class("sapMFeedInContainer");R.openEnd();var t=c._getTextArea();R.renderControl(t);R.renderControl(c._getPostButton());R.close("div");R.close("div");R.openStart("div",m+"-counterContainer");R.class("sapMFeedInCounter");R.openEnd();R.close("div");R.close("div");};F._addImage=function(R,c,m){R.openStart("figure",m+'-figure').class("sapMFeedInFigure");if(!c.getIcon()){R.class("sapMFeedListItemIsDefaultIcon");}R.openEnd();R.renderControl(c._getAvatar());R.close("figure");};return F;},true);
