/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer','sap/ui/core/IconPool','sap/ui/mdc/enum/EditMode'],function(R,I,E){"use strict";var F=R.extend("sap.ui.mdc.field.FieldBaseRenderer");F=Object.assign(F,{apiVersion:2});F.render=function(r,f){var c=f._getContent();var w=f.getWidth();var C=f.getConditions();var e=f.getEditMode();var s=f.getShowEmptyIndicator()&&C.length===0&&e===E.Display&&!f.getContent()&&!f.getContentDisplay();r.openStart("div",f);r.class("sapUiMdcFieldBase");if(c.length>1){r.class("sapUiMdcFieldBaseMoreFields");}if(s){r.class("sapMShowEmpty-CTX");}r.style("width",w);r.openEnd();for(var i=0;i<c.length;i++){var o=c[i];r.renderControl(o);}r.close("div");};return F;});
