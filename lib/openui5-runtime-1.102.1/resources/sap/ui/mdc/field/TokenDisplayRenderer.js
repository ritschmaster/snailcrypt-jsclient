/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','sap/m/TokenRenderer'],function(R,T){"use strict";var a=R.extend(T);a.apiVersion=2;a._setAttributes=function(r,c){T._setAttributes(r,c);r.attr("delimiter",c.getProperty("_delimiter"));};return a;});
