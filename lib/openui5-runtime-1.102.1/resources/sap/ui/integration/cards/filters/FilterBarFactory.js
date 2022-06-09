/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FilterBar","./SearchFilter","./SelectFilter","./DateRangeFilter","sap/ui/base/Object","sap/m/library","sap/m/HBox","sap/ui/layout/AlignedFlowLayout"],function(F,S,a,D,B,l,H,A){"use strict";var b=l.FlexWrap;var R=l.FlexRendertype;var c=B.extend("sap.ui.integration.util.FilterBarFactory",{metadata:{library:"sap.ui.integration"},constructor:function(C){B.call(this);this._oCard=C;}});c.prototype.create=function(f,m){var d=[],r=[],C,k,o,e,g=null;for(k in f){C=f[k];g=this._getClass(C.type);o=new g({card:this._oCard,key:k,config:C,value:{model:"filters",path:"/"+k}});m.setProperty("/"+k,o.getValueForModel());this._awaitEvent(r,o,"_ready");o._setDataConfiguration(C.data);d.push(o);}if(!d.length){return null;}if(d.length>1){e=new A({content:d,minItemWidth:"10rem",maxItemWidth:"20rem"});d.forEach(function(o){o.getField().setWidth("100%");});e.addStyleClass("sapFCardFilterBarAFLayout");}else{e=new H({wrap:b.Wrap,renderType:R.Bare,items:d});}e.addStyleClass("sapFCardFilterBarContent");var h=new F({content:e});Promise.all(r).then(function(){h.fireEvent("_filterBarDataReady");});return h;};c.prototype._awaitEvent=function(p,f,e){p.push(new Promise(function(r){f.attachEventOnce(e,function(){r();});}));};c.prototype._getClass=function(t){t=t||"select";switch(t.toLowerCase()){case"string":case"integer":case"select":return a;case"daterange":return D;case"search":return S;default:return undefined;}};return c;});