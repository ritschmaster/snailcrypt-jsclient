/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Core"],function(a,C){"use strict";var T=a.TextDirection;var R={apiVersion:2};R.render=function(r,o){if(!o.aRBs){return;}var v=o.aRBs.filter(function(B){return B.getVisible();});var b=o.getColumns();var s=o.getTextDirection();var g=C.getConfiguration().getRTL();r.openStart("div",o).class("sapMRbG");if(b>1){if(b==v.length){r.class("sapMRbG1Row");}else{r.class("sapMRbGTab");}}if(o.getWidth()){r.style("width",o.getWidth());}if(o.getTooltip_AsString()){r.attr("title",o.getTooltip_AsString());}if(!g&&s!=T.Inherit){r.attr("dir",s.toLowerCase());}r.accessibilityState(o,{role:"radiogroup"});r.openEnd();for(var c=0;c<b;c++){if(b>1&&b!=v.length){r.openStart("div").class("sapMRbGCol").openEnd();}for(var i=c;i<v.length;i=i+b){r.renderControl(v[i]);}if(b>1&&b!=v.length){r.close("div");}}if(b>1&&b!=v.length){r.openStart("div").class("sapMRbGDummy").openEnd().close("div");}r.close("div");};return R;},true);
