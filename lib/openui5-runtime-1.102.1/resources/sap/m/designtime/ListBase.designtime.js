/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";function i(e){var p=e;while(p){if(p.isA("sap.m.ListBase")){var b=p.getBinding("items");if(b){return true;}return false;}p=p.getParent();}return false;}return{name:{singular:"LIST_BASE_NAME",plural:"LIST_BASE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/ListBase.icon.svg"}},aggregations:{items:{propagateMetadata:function(e){if(i(e)){return{actions:{remove:null,rename:null}};}},domRef:":sap-domref > .sapMListUl:not(.sapMGrowingList)",actions:{move:"moveControls"}},swipeContent:{domRef:":sap-domref > .sapMListSwp",ignore:true},headerToolbar:{domRef:":sap-domref > .sapMListHdrTBar"},infoToolbar:{domRef:":sap-domref .sapMListInfoTBar"},contextMenu:{ignore:true},noData:{ignore:true}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}};});
