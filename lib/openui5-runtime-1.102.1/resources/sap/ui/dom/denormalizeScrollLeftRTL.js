/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/util/_FeatureDetection"],function(_){"use strict";var d;if(_.initialScrollPositionIsZero()){d=function(n,o){return o.clientWidth+n-o.scrollWidth;};}else{d=function(n,o){return n;};}var D=function(n,o){if(o){return d(n,o);}};return D;});
