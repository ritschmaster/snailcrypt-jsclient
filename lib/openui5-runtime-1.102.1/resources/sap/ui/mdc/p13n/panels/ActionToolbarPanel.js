/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/p13n/SelectionPanel","sap/ui/model/Sorter"],function(S,a){"use strict";var A=S.extend("sap.ui.mdc.p13n.panels.ActionToolbarPanel",{metadata:{library:"sap.ui.mdc"},renderer:{apiVersion:2}});A.prototype._bindListItems=function(b){var t=this.getAggregation("_template");if(t){var g=function(c){return c.getProperty("alignment");};var s=new a({path:"alignment",descending:false,group:g});this._oListControl.bindItems(Object.assign({path:this.P13N_MODEL+">/items",sorter:s,key:"name",templateShareable:false,template:this.getAggregation("_template").clone()},b));}};return A;});
