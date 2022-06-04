/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Change"],function(C){"use strict";var U=C.extend("sap.ui.fl.apply._internal.flexObjects.UpdatableChange",{metadata:{aggregations:{revertInfo:{type:"sap.ui.fl.apply._internal.flexObjects.RevertData",multiple:true,singularName:"revertInfo",defaultValue:[]}}}});U.prototype.popLatestRevertInfo=function(){var l=this.getRevertInfo().pop();this.removeRevertInfo(l);return l;};return U;});
