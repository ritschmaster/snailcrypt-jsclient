/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var I=E.extend("sap.ui.mdc.filterbar.IFilterContainer");I.prototype.init=function(){E.prototype.init.apply(this,arguments);this.oLayout=null;};I.prototype.getInner=function(){return this.oLayout;};I.prototype.insertFilterField=function(c,i){};I.prototype.removeFilterField=function(c){};I.prototype.getFilterFields=function(){};I.prototype.exit=function(){E.prototype.exit.apply(this,arguments);if(this.oLayout){this.oLayout.destroy();this.oLayout=null;}};return I;});
