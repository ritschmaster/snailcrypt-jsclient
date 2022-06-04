/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library',"./ObjectPageDynamicHeaderContentRenderer","sap/base/Log","sap/f/DynamicPageHeader"],function(l,O,L,D){"use strict";var a=D.extend("sap.uxap.ObjectPageDynamicHeaderContent",{metadata:{interfaces:["sap.uxap.IHeaderContent"],library:"sap.uxap"}});a.createInstance=function(c,v,C,p,s){return new a({content:c,visible:v,pinnable:p,id:s});};a.prototype.supportsPinUnpin=function(){return true;};a.prototype.supportsChildPageDesign=function(){return false;};a.prototype.supportsAlwaysExpanded=function(){return false;};a.prototype.setContentDesign=function(d){};a.prototype.setVisible=function(v){this.getParent()&&this.getParent().toggleStyleClass("sapUxAPObjectPageLayoutNoHeaderContent",!v);return this.setProperty("visible",v);};return a;});
