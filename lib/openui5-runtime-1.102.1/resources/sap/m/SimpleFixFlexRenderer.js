/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var S={apiVersion:2};S.render=function(r,c){var f=c.getFixContent();r.openStart('div',c);r.class('sapUiSimpleFixFlex');r.openEnd();if(f){r.renderControl(f.addStyleClass('sapUiSimpleFixFlexFixed'));}this.renderFlexContentContainer(r,c);r.close('div');};S.renderFlexContentContainer=function(r,c){var f=c.getFlexContent();r.openStart('div',c.getId()+"-flexContentContainer");r.class('sapUiSimpleFixFlexFlexContentContainer');r.openEnd();if(f){r.openStart('div');r.class('sapUiSimpleFixFlexFlexContent');r.openEnd();f.forEach(function(c){r.renderControl(c);});r.close('div');}r.close('div');};return S;},true);
