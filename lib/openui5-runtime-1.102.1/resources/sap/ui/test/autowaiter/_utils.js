/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/URI','sap/base/util/isPlainObject'],function(U,i){"use strict";function r(){var e=new Error();var s="No stack trace available";var u=new U().search(true);var F=["false",undefined].indexOf(u.opaFrameIEStackTrace)<0;if(e.stack){s=e.stack;}else if(F){try{throw e;}catch(b){s=b.stack;}}return s.replace(/^Error\s/,"");}function f(b){return"'"+b.toString().replace(/\"/g,'\'')+"'";}function a(A){try{return Array.prototype.map.call(A,b).join("; ");}catch(e){return"'"+A+"'";}function b(c){if(typeof c==="function"){return f(c);}if(Array.isArray(c)){var v=Array.prototype.map.call(c,b);return"["+v.join(", ")+"]";}if(i(c)){return JSON.stringify(c);}return"'"+c.toString()+"'";}}return{resolveStackTrace:r,functionToString:f,argumentsToString:a};},true);
