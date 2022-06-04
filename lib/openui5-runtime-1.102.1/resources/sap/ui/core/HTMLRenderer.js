/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./RenderManager'],function(R){"use strict";var a=R.RenderPrefixes;var H={apiVersion:2,render:function(r,c){r.openStart("div",a.Dummy+c.getId());r.style("display","none");r.openEnd();r.close("div");}};return H;},true);
