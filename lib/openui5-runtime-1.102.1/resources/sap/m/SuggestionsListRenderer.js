/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(C){"use strict";var S={apiVersion:2};S.render=function(r,s){r.openStart("ul",s).class("sapMSuL").class("sapMSelectList").style("width",s.getWidth()).style("max-width",s.getMaxWidth());r.accessibilityState({role:"listbox",multiselectable:false});r.openEnd();this.renderItems(r,s);r.close("ul");};S.renderItems=function(r,l){var s;var a=l.getSelectedItemIndex();try{s=C.byId(l.getParentInput()).getValue();}catch(e){s="";}l.getItems().forEach(function(i,b){i.render(r,i,s,b===a);});};return S;});
