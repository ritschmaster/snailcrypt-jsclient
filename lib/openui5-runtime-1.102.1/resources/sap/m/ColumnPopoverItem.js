/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var C=E.extend("sap.m.ColumnPopoverItem",{metadata:{library:"sap.m",properties:{visible:{type:"boolean",group:"Misc",defaultValue:true}}}});C.prototype._createButton=function(){throw new Error('Abstract function _create Button must be implemented in your Item (that extends this abstract object).');};return C;});
