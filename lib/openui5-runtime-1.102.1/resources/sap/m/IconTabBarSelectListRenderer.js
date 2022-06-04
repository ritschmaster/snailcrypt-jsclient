/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library"],function(c){"use strict";var I=c.IconColor;var a={apiVersion:2};a.render=function(r,s){var p=s._getParams(),i=s.getVisibleItems(),o=s._oIconTabHeader,t=s._checkTextOnly(),T=o.getVisibleTabFilters().length,n=p.fNestedItemPaddingLeft,e=false;var h=i.filter(function(b){return b.isA("sap.m.IconTabFilter");}).some(function(b){return b.getIconColor()!==I.Default;});s.checkIconOnly();var A=p.fAdditionalPadding;if(h&&A){n+=A;e=true;}this.renderList(r,i,s,o,t,n,e,T);};a.renderList=function(r,b,s,o,t,p,e,S){if(!b.length){return;}r.openStart("ul",s).attr("role","menu").class("sapMITBSelectList");if(t){r.class("sapMITBSelectListTextOnly");}r.openEnd();for(var i=0;i<b.length;i++){var d=b[i],f;if(o&&d.isA("sap.m.IconTabFilter")){f=o.getVisibleTabFilters().indexOf(d._getRealTab());}if(d.isA("sap.m.IconTabFilter")&&d._getRootTab()._getSelectList()===s){f=i;S=b.length;}var l=d._getNestedLevel()-2;if(e){l++;}if(s._bIsOverflow){l++;}d.renderInSelectList(r,s,f,S,p*l);}r.close("ul");};return a;},true);
