/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/write/_internal/condenser/Utils"],function(C){"use strict";return{addToReconstructionMap:function(u,c){return C.getContainerElementIds(c.targetContainer,c.targetAggregation).then(function(t){var a=C.getInitialUIContainerElementIds(u,c.targetContainer,c.targetAggregation,t);if(a.length-1<c.sourceIndex){while(a.length-1<c.sourceIndex){var i=a.length;a.splice(a.length,0,C.PLACEHOLDER+i);}a[c.sourceIndex]=c.affectedControl;}else{a.splice(c.sourceIndex,0,c.affectedControl);}});},simulate:function(c,o,i){var I=c.indexOf(o.affectedControl);if(I===-1){var u=C.PLACEHOLDER+i.indexOf(o.affectedControl);I=c.indexOf(u);}if(I>-1){c.splice(I,1);}}};});
