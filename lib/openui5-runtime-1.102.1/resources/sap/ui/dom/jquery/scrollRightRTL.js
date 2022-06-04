/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/util/_FeatureDetection","sap/ui/thirdparty/jquery"],function(_,q){"use strict";var s;if(_.initialScrollPositionIsZero()){s=function(d){return(-d.scrollLeft);};}else{s=function(d){return d.scrollWidth-d.scrollLeft-d.clientWidth;};}var S=function(){var d=this.get(0);if(d){return s(d);}};q.fn.scrollRightRTL=S;return q;});
