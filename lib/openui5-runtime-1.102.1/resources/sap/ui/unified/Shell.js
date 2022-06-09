/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ShellHeader','./ShellLayout','./library','./ShellRenderer'],function(S,a,l,b){"use strict";var c=a.extend("sap.ui.unified.Shell",{metadata:{library:"sap.ui.unified",deprecated:true,properties:{icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},showCurtain:{type:"boolean",group:"Appearance",defaultValue:null,deprecated:true},showCurtainPane:{type:"boolean",group:"Appearance",defaultValue:null,deprecated:true},searchVisible:{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{curtainContent:{type:"sap.ui.core.Control",multiple:true,singularName:"curtainContent"},curtainPaneContent:{type:"sap.ui.core.Control",multiple:true,singularName:"curtainPaneContent"},headItems:{type:"sap.ui.unified.ShellHeadItem",multiple:true,singularName:"headItem",forwarding:{idSuffix:"-header",aggregation:"headItems"}},headEndItems:{type:"sap.ui.unified.ShellHeadItem",multiple:true,singularName:"headEndItem",forwarding:{idSuffix:"-header",aggregation:"headEndItems"}},search:{type:"sap.ui.core.Control",multiple:false,forwarding:{idSuffix:"-header",aggregation:"search"}},user:{type:"sap.ui.unified.ShellHeadUserItem",multiple:false,forwarding:{idSuffix:"-header",aggregation:"user"}}}},renderer:b});c.prototype.init=function(){a.prototype.init.apply(this,arguments);this._header=new S(this.getId()+"-header");this.setHeader(this._header);};c.prototype.exit=function(){a.prototype.exit.apply(this,arguments);this._header.destroy();delete this._header;};c.prototype._getSearchWidth=function(){if(this._header===this.getHeader()&&this._header.getDomRef()){var s=this._header.$("hdr-center").children();if(s.length){return s.width();}}return-1;};c.prototype.setIcon=function(i){this.setProperty("icon",i,true);this._header.setLogo(i);return this;};c.prototype.getIcon=function(){return this._header.getLogo();};c.prototype.setSearchVisible=function(s){this.setProperty("searchVisible",s,true);this._header.setSearchVisible(s);return this;};c.prototype.getSearchVisible=function(){return this._header.getSearchVisible();};c.prototype.setHeader=function(h){return a.prototype.setHeader.apply(this,[h?h:this._header]);};c.prototype.destroyHeader=function(){if(this.getHeader()===this._header){return this;}return a.prototype.destroyHeader.apply(this,[]);};return c;});