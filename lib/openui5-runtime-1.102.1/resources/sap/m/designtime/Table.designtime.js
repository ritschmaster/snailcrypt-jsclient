/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var c=function(t){return!!(t&&t._hasTablePersoController&&t._hasTablePersoController());};return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/Table.icon.svg"}},aggregations:{columns:{propagateMetadata:function(e){if(e.isA("sap.m.Column")&&c(e.getParent())){return{actions:null};}},childNames:{singular:"COLUMN_NAME",plural:"COLUMN_NAME_PLURAL"},domRef:":sap-domref .sapMListTblHeader",actions:{move:function(C){return c(C.getParent())?null:"moveTableColumns";},add:{delegate:function(t){if(!c(t)){return{changeType:"addTableColumn",supportsDefaultDelegate:true};}}}}},items:{domRef:":sap-domref .sapMListItems"},contextMenu:{ignore:true}}};});
