/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var U={};U.getPersistencyKey=function(c){if(c){var v=c.getVariantManagement&&c.getVariantManagement()||c;if(v.getPersonalizableControlPersistencyKey){return v.getPersonalizableControlPersistencyKey();}return v.getPersistencyKey&&v.getPersistencyKey();}};return U;});
