/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/restricted/_isNil","sap/base/util/each","sap/base/util/isPlainObject","sap/base/util/isEmptyObject"],function(_,e,i,a){"use strict";function c(o){e(o,function(k,v){if(i(v)){c(v);}if(_(v)||Array.isArray(v)&&v.length===0||i(v)&&a(v)){delete o[k];}});}return c;});
