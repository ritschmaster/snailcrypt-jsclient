/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/model/json/JSONModel","sap/ui/core/Core","sap/base/util/deepClone"],function(m,J,C,d){"use strict";var M={layers:{"admin":0,"content":5,"translation":10,"all":20},mergeManifestPathChanges:function(o,c){Object.keys(c).forEach(function(s){if(s.charAt(0)==="/"){var v=c[s];o.setProperty(s,v);}});},mergeDelta:function(o,c,s){var i=m({},o);if(typeof s==="undefined"){s="sap.card";}if(Array.isArray(c)&&c.length>0){var a;c.forEach(function(b){if(b.content){m(i[s],b.content);}else{a=a||new J(i);M.mergeManifestPathChanges(a,b);}});}return i;},mergeDesigntimeMetadata:function(D,c){var i=m({},D);c.forEach(function(o){var I=o.content.entityPropertyChange||[];I.forEach(function(a){var p=a.propertyPath;switch(a.operation){case"UPDATE":if(i.hasOwnProperty(p)){i[p]=a.propertyValue;}break;case"DELETE":delete i[p];break;case"INSERT":if(!i.hasOwnProperty(p)){i[p]=a.propertyValue;}break;default:break;}});});return i;}};return M;});
