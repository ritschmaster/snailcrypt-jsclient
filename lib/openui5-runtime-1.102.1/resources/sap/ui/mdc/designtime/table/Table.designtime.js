/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/mdc/p13n/Engine","sap/ui/mdc/Table","../Util"],function(E,T,U){"use strict";var d={name:"{name}",description:"{description}",actions:{settings:function(){return{handler:function(c,p){return E.getInstance().getRTASettingsActionHandler(c,p,c.getActiveP13nModes());}};}},properties:{},aggregations:{_content:{propagateMetadata:function(e){if(e.isA("sap.ui.mdc.ActionToolbar")){return{actions:{settings:{}}};}return{actions:"not-adaptable"};}}}};var a=["width","height","headerLevel","header","headerVisible","showRowCount","threshold","noDataText","enableExport","busyIndicatorDelay","enableColumnResize","showPasteButton","multiSelectMode"],A=["_content"];return U.getDesignTime(T,a,A,d);});
