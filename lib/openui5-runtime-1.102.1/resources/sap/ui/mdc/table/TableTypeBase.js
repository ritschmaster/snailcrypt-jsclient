/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var T=E.extend("sap.ui.mdc.table.TableTypeBase",{metadata:{library:"sap.ui.mdc",properties:{}}});T.prototype.setProperty=function(p,v,s){E.prototype.setProperty.call(this,p,v,true);var t=this.getRelevantTable();if(t){this.updateRelevantTableProperty(t,p,v);}return this;};T.prototype.updateRelevantTableProperty=function(t,p,v){};T.prototype.getRelevantTable=function(){var t=this.getParent();if(t&&t.isA("sap.ui.mdc.Table")){t=t._oTable;}else{t=null;}return t;};T.prototype.updateTableSettings=function(a){var p=Object.assign({},a,this.getMetadata().getProperties()),P,t=this.getRelevantTable();if(t){for(P in p){this.updateRelevantTableProperty(t,P,this.getProperty(P));}}};T.getSelectionMode=function(t){var s=t.getSelectionMode();switch(s){case"Single":s=t._bMobileTable?"SingleSelectLeft":"Single";break;case"Multi":s=t._bMobileTable?"MultiSelect":"MultiToggle";break;default:s="None";}return s;};return T;});
