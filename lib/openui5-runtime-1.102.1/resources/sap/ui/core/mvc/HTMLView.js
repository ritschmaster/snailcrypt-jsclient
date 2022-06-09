/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/thirdparty/jquery','./View','./HTMLViewRenderer','./ViewType','sap/base/util/merge','sap/ui/base/ManagedObject','sap/ui/core/DeclarativeSupport','sap/ui/model/resource/ResourceModel','sap/base/util/LoaderExtensions'],function(q,V,H,a,m,M,D,R,L){"use strict";var b=V.extend("sap.ui.core.mvc.HTMLView",{metadata:{library:"sap.ui.core"},renderer:H});b.create=function(o){var p=m({},o);p.type=a.HTML;return V.create(p);};sap.ui.htmlview=function(i,v){return sap.ui.view(i,v,a.HTML);};b._sType=a.HTML;b.asyncSupport=true;b._mTemplates={};b._mAllowedSettings={"viewName":true,"controller":true,"viewContent":true,"definition":true,"controllerName":true,"resourceBundleName":true,"resourceBundleUrl":true,"resourceBundleLocale":true,"resourceBundleAlias":true};b._getTemplate=function(t,o){var u=this._getViewUrl(t);var h=this._mTemplates[u];if(!h){h=this._loadTemplate(t,o);if(o&&o.async){var c=this;return h.then(function(_){c._mTemplates[u]=_;return Promise.resolve(_);});}else{this._mTemplates[u]=h;}}return o.async?Promise.resolve(h):h;};b.prototype.getControllerName=function(){return this._controllerName;};b._getViewUrl=function(t){return sap.ui.require.toUrl(t.replace(/\./g,"/"))+".view.html";};b._loadTemplate=function(t,o){var r=t.replace(/\./g,"/")+".view.html";return L.loadResource(r,o);};b.prototype.initViewSettings=function(s){if(!s){throw new Error("mSettings must be given");}if(s.viewName&&s.viewContent){throw new Error("View name and view content are given. There is no point in doing this, so please decide.");}else if(!s.viewName&&!s.viewContent){throw new Error("Neither view name nor view content is given. One of them is required.");}var t=this;function I(){t._oTemplate=document.createElement("div");if(typeof h==="string"){t._oTemplate.innerHTML=h;}else{var n=h;var f=document.createDocumentFragment();for(var i=0;i<n.length;i++){f.appendChild(n.item(i));}t._oTemplate.appendChild(f);}var o=t._oTemplate.getElementsByTagName("template")[0];var p=t.getMetadata().getAllProperties();if(o){q.each(o.attributes,function(d,A){var N=D.convertAttributeToSettingName(A.name,t.getId());var v=A.value;var P=p[N];if(!s[N]){if(P){s[N]=D.convertValueToType(D.getPropertyDataType(P),v);}else if(b._mAllowedSettings[N]){s[N]=v;}}});t._oTemplate=o;}if(t._oTemplate.content){var f=t._oTemplate.content;t._oTemplate=document.createElement("div");t._oTemplate.appendChild(f);}if(s.controllerName){t._controllerName=s.controllerName;}if((s.resourceBundleName||s.resourceBundleUrl)&&(!s.models||!s.models[s.resourceBundleAlias])){var c=new R({bundleName:s.resourceBundleName,bundleUrl:s.resourceBundleUrl,bundleLocale:s.resourceBundleLocale,async:s.async});var B=c.getResourceBundle();if(B instanceof Promise){return B.then(function(){t.setModel(c,s.resourceBundleAlias);});}t.setModel(c,s.resourceBundleAlias);}}var h=s.viewContent;if(!h){h=b._getTemplate(s.viewName,{async:s.async});}if(s.async){return h.then(function(_){h=_;return I();});}I();};b.prototype.onControllerConnected=function(c){var t=this;M.runWithPreprocessors(function(){D.compile(t._oTemplate,t);},{settings:this._fnSettingsPreprocessor});};b.prototype.exit=function(){this._oTemplate=null;V.prototype.exit.call(this);if(this._connectedControls){for(var i=0;i<this._connectedControls.length;i++){this._connectedControls[i].destroy();}this._connectedControls=null;}};b.prototype.connectControl=function(c){this._connectedControls=this._connectedControls||[];this._connectedControls.push(c);};return b;});