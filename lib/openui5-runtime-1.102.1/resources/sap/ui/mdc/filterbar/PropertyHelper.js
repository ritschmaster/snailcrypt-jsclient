/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["../util/PropertyHelper"],function(P){"use strict";var a=P.extend("sap.ui.mdc.filterbar.PropertyHelper",{constructor:function(p,e,o,E){var A=["required","hiddenFilter"];P.call(this,p,e,o,A,E);}});a.prototype.prepareProperty=function(p){if(!p.typeConfig){var o=this.getParent();if(o&&o._oDelegate){var t=o._oDelegate.getTypeUtil();try{p.typeConfig=t.getTypeConfig(p.dataType,p.formatOptions,p.constraints);}catch(e){}}}P.prototype.prepareProperty.apply(this,arguments);};return a;});
