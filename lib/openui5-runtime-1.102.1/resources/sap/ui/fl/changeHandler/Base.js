/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/LoaderExtensions"],function(L){"use strict";var B={setTextInChange:function(c,k,t,T){if(!c.texts){c.texts={};}if(!c.texts[k]){c.texts[k]={};}c.texts[k].value=t;c.texts[k].type=T;},instantiateFragment:function(c,p){var m=c.getModuleName();if(!m){return Promise.reject(new Error("The module name of the fragment is not set. This should happen in the backend"));}var v=p.viewId?p.viewId+"--":"";var P=c.getProjectId()||"";var f=(c.getExtensionPointInfo&&c.getExtensionPointInfo()&&c.getExtensionPointInfo().fragmentId)||"";var s=P&&f?".":"";var i=v+P+s+f;var M=p.modifier;var V=p.view;return Promise.resolve().then(function(){var F=L.loadResource(m,{dataType:"text"});return M.instantiateFragment(F,i,V).catch(function(e){throw new Error("The following XML Fragment could not be instantiated: "+F+" Reason: "+e.message);});});},markAsNotApplicable:function(n,a){var r={message:n};if(!a){throw r;}return Promise.reject(r);}};return B;},true);
