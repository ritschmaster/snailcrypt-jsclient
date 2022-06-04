/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/write/_internal/condenser/Utils"],function(C){"use strict";return{addToReconstructionMap:function(u,c){return Promise.all([C.getContainerElementIds(c.sourceContainer,c.sourceAggregation),C.getContainerElementIds(c.targetContainer,c.targetAggregation)]).then(function(s){var S=s[0];var t=s[1];var a;var T;if(c.targetContainer===c.sourceContainer&&c.targetAggregation===c.sourceAggregation){a=C.getInitialUIContainerElementIds(u,c.targetContainer,c.targetAggregation,t);T=a.indexOf(c.affectedControl);C.shiftElement(a,T,c.sourceIndex);}else{a=C.getInitialUIContainerElementIds(u,c.targetContainer,c.targetAggregation,t);T=a.indexOf(c.affectedControl);a.splice(T,1);a=C.getInitialUIContainerElementIds(u,c.sourceContainer,c.sourceAggregation,S);a.splice(c.sourceIndex,0,c.affectedControl);}});},simulate:function(c,o,i){var a=o.affectedControl;var I=i.indexOf(a);C.extendElementsArray(c,I,undefined,a);var b=c.indexOf(a);var t=o.getTargetIndex(o.change);if(I===-1){c.splice(t,0,a);}else{c.splice(t,0,c.splice(b,1)[0]);}}};});
