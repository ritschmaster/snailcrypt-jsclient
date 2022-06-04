/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/fl/write/_internal/condenser/Utils"],function(C,a){"use strict";return{addToReconstructionMap:function(u,c){var A=C.byId(c.affectedControl);var s=A&&A.sParentAggregationName||c.targetAggregation;return a.getContainerElementIds(c.targetContainer,s).then(function(t){var b=a.getInitialUIContainerElementIds(u,c.targetContainer,c.targetAggregation,t);var i=b.indexOf(c.affectedControl);if(i>-1){b.splice(i,1);}});},simulate:function(c,o){c.splice(o.getTargetIndex(o.change),0,o.affectedControl);}};});
