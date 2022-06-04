/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var Q={apiVersion:2};Q.render=function(r,q){var p=q.getPageContent();r.openStart("div",q).class("sapMQuickViewPage").openEnd();if(p.header){r.renderControl(p.header);}r.renderControl(p.form);r.close("div");};return Q;},true);
