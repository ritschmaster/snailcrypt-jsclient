/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./ListBaseRenderer"],function(R,L){"use strict";var a=R.extend(L);a.apiVersion=2;a.getNoDataAriaRole=function(){return"option";};return a;},true);
