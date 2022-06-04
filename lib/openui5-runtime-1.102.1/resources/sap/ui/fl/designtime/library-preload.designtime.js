//@ui5-bundle sap/ui/fl/designtime/library-preload.designtime.js
/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/fl/designtime/variants/VariantManagement.designtime',["sap/ui/fl/Utils"],function(f){"use strict";var s=function(v,d){var a=f.getAppComponentForControl(v);var c=v.getId();var m=a.getModel(f.VARIANT_MODEL_NAME);var V=a.getLocalId(c)||c;if(!m){return;}if(d){m.waitForVMControlInit(V).then(function(){m.setModelPropertiesForControl(V,d,v);m.checkUpdate(true);});}else{m.setModelPropertiesForControl(V,d,v);m.checkUpdate(true);}};return{annotations:{},properties:{showSetAsDefault:{ignore:false},manualVariantKey:{ignore:true},inErrorState:{ignore:false},editable:{ignore:false},modelName:{ignore:false},updateVariantInURL:{ignore:true},resetOnContextChange:{ignore:true},executeOnSelectionForStandardDefault:{ignore:false},displayTextForExecuteOnSelectionForStandardVariant:{ignore:false}},variantRenameDomRef:function(v){return v.getTitle().getDomRef("inner");},customData:{},tool:{start:function(v){var d=true;s(v,d);},stop:function(v){var d=false;s(v,d);}},actions:{controlVariant:function(v){var a=f.getAppComponentForControl(v);var c=v.getId();var m=a.getModel(f.VARIANT_MODEL_NAME);var V=a.getLocalId(c)||c;return{validators:["noEmptyText",{validatorFunction:function(n){var d=m._getVariantTitleCount(n,V)||0;return d===0;},errorMessage:sap.ui.getCore().getLibraryResourceBundle("sap.ui.fl").getText("VARIANT_MANAGEMENT_ERROR_DUPLICATE")}]};}}};});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/fl/designtime/library.designtime',[],function(){"use strict";return{};});
sap.ui.predefine('sap/ui/fl/designtime/util/IFrame.designtime',["sap/ui/rta/plugin/iframe/AddIFrameDialog","sap/m/library"],function(A){"use strict";
function e(i){var a=new A();var s=i.get_settings();var d;return A.buildUrlBuilderParametersFor(i).then(function(u){d={parameters:u,frameUrl:s.url,frameWidth:s.width,frameHeight:s.height,updateMode:true};return a.open(d);}).then(function(S){if(!S){return[];}var w;var h;if(S.frameWidth){w=S.frameWidth+S.frameWidthUnit;}else{w="100%";}if(S.frameHeight){h=S.frameHeight+S.frameHeightUnit;}else{h="100%";}return[{selectorControl:i,changeSpecificData:{changeType:"updateIFrame",content:{url:S.frameUrl,width:w,height:h}}}];});}
return{actions:{settings:function(){return{icon:"sap-icon://write-new",name:"CTX_EDIT_IFRAME",isEnabled:true,handler:e};},remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}};});
//# sourceMappingURL=library-preload.designtime.js.map