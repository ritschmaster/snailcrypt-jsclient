/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers"],function(L){"use strict";var f=function(i,I,v,F,b,a){var g=[],c=[];I=I&&L.getEnabledItems(I);I.forEach(function(o){if(o.isA("sap.ui.core.SeparatorItem")){g.push({header:o,visible:false});}else if(!F||a.call(i,v,o,b)){if(g.length){g[g.length-1].visible=true;}c.push(o);}});return{items:c,groups:g};};return f;});
