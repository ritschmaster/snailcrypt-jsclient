/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/BindingParser","sap/ui/integration/util/BindingHelper"],function(B,a){"use strict";var b=[["ESCAPED_BINDING_START",/\\{/g,"\\{"],["ESCAPED_BINDING_END",/\\}/g,"\\}"],["BINDING_START",/{/g,"{"],["BINDING_END",/}/g,"}"]];var J={};J.createJsonWithBindingInfos=function(v,l){if(!v){return v;}var j=this._createBindableJson(v),c=a.createBindingInfos(j,l);if(typeof c==="string"){c=this._escape(c);}return c;};J._createBindableJson=function(v){var r;r=JSON.stringify(v,function(k,V){if(typeof V==="string"){return this._encodeBindingString(V);}return V;}.bind(this));r=this._escape(r);r=this._decodeBindingString(r);return r;};J._escape=function(v){return B.complexParser.escape(v);};J._encodeBindingString=function(v){b.forEach(function(c){var C=c[0],r=c[1];v=v.replace(r,C);});return v;};J._decodeBindingString=function(v){b.forEach(function(c){var C=c[0],s=c[2];v=v.replace(new RegExp(C,"g"),s);});return v;};return J;});
