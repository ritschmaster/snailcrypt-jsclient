/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var P=E.extend("sap.ui.mdc.link.PanelItem",{metadata:{library:"sap.ui.mdc",designtime:"sap/ui/mdc/designtime/link/PanelItem.designtime",properties:{text:{type:"string"},description:{type:"string"},href:{type:"string"},target:{type:"string",defaultValue:undefined},icon:{type:"string"},visible:{type:"boolean",defaultValue:true},visibleChangedByUser:{type:"boolean"}}}});P.prototype.getJson=function(){return{id:this.getId(),text:this.getText(),description:this.getDescription(),href:this.getHref(),icon:this.getIcon(),target:this.getTarget(),visible:this.getVisible(),visibleChangedByUser:this.getVisibleChangedByUser()};};return P;});
