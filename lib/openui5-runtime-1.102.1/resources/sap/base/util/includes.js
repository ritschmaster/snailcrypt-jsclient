/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/values"],function(v){"use strict";var i=function(c,V,f){if(typeof f!=='number'){f=0;}if(Array.isArray(c)||typeof c==='string'){if(f<0){f=(c.length+f)<0?0:c.length+f;}return c.includes(V,f);}else{return i(v(c),V,f);}};return i;});
