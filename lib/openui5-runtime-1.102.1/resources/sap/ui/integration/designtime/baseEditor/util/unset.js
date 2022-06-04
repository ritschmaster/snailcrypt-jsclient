/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath","sap/base/util/isPlainObject","sap/base/util/isEmptyObject"],function(O,i,a){"use strict";function u(o,p,m){var c=p.slice(0,-1);var C=c.length>0?O.get(c,o):o;var k=p[p.length-1];if(Array.isArray(C)){C.splice(k,1);}else{delete C[k];}return(c.length>0&&!(m<=0)&&((Array.isArray(C)&&C.length===0)||(i(C)&&a(C)))?u(o,c,m?m-1:undefined):o);}return u;});
