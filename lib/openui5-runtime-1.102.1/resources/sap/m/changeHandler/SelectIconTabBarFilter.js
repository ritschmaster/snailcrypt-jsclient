/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/library"],function(f){"use strict";var S={};S.applyChange=function(c,C,p){var m=p.modifier;var o=c.getDefinition();C._bFireSelectEvent=o.content.fireEvent;m.setProperty(C,"selectedKey",o.content.selectedKey);C._bFireSelectEvent=false;c.setRevertData({key:o.content.previousSelectedKey,fireEvent:o.content.fireEvent});};S.revertChange=function(c,C,p){var m=p.modifier;var r=c.getRevertData();C._bFireSelectEvent=r.fireEvent;m.setProperty(C,"selectedKey",r.key);C._bFireSelectEvent=false;c.resetRevertData();};S.completeChangeContent=function(c,s,p){};S.getCondenserInfo=function(c){return{affectedControl:c.getSelector(),classification:f.condenser.Classification.LastOneWins,uniqueKey:c.getContent().selectedKey};};return S;});
