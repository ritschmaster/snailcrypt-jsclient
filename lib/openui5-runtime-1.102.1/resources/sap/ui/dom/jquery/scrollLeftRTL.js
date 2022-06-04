/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dom/denormalizeScrollLeftRTL","sap/ui/util/_FeatureDetection","sap/ui/thirdparty/jquery"],function(d,_,q){"use strict";var s;if(_.initialScrollPositionIsZero()){s=function(D){return D.scrollWidth+D.scrollLeft-D.clientWidth;};}else{s=function(D){return D.scrollLeft;};}var S=function(p){var D=this.get(0);if(D){if(p===undefined){return s(D);}else{D.scrollLeft=d(p,D);return this;}}};q.fn.scrollLeftRTL=S;return q;});
