/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/rta/command/FlexCommand"],function(F){"use strict";var C=F.extend("sap.ui.rta.command.Combine",{metadata:{library:"sap.ui.rta",properties:{newElementId:{type:"string"},source:{type:"any"},combineElements:{type:"any[]"}},associations:{},events:{}}});C.prototype._getChangeSpecificData=function(){var f=[];this.getCombineElements().forEach(function(o){f.push(o.getId());});var s={newElementId:this.getNewElementId(),changeType:this.getChangeType(),sourceControlId:this.getSource().getId(),combineElementIds:f};return s;};return C;});
