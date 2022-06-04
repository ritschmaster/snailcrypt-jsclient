/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./View","./TemplateViewRenderer","./ViewType","sap/base/Log"],function(V,T,a,L){"use strict";var b=V.extend("sap.ui.core.mvc.TemplateView",{metadata:{library:"sap.ui.core"},renderer:T});(function(){sap.ui.templateview=function(i,v){L.warning("sap.ui.core.mvc.TemplateView is deprecated. Use XMLView or JSView instead.");return sap.ui.view(i,v,a.Template);};b._sType=a.Template;b.prototype.getControllerName=function(){return this._sControllerName;};b._getViewUrl=function(t){return sap.ui.require.toUrl(t.replace(/\./g,"/"))+".view.tmpl";};b.prototype.initViewSettings=function(s){if(!s){throw new Error("mSettings must be given");}if(!s.viewName){throw new Error("No view name is given.");}this._oTemplate=sap.ui.template({id:this.getId(),src:b._getViewUrl(s.viewName)});this._sControllerName=this._oTemplate._sControllerName;this._oTemplate=this._oTemplate.createControl(undefined,undefined,this);this.addContent(this._oTemplate);};}());return b;});
