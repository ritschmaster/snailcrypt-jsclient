/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./FlexBox','./library',"./VBoxRenderer"],function(F,l,V){"use strict";var a=l.FlexDirection;var b=F.extend("sap.m.VBox",{metadata:{library:"sap.m",designtime:"sap/m/designtime/VBox.designtime"}});b.prototype.init=function(){this.setDirection(a.Column);F.prototype.init.apply(this,arguments);};return b;});
