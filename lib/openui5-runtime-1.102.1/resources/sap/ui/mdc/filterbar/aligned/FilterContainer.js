/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/filterbar/IFilterContainer','sap/ui/layout/AlignedFlowLayout'],function(I,A){"use strict";var F=I.extend("sap.ui.mdc.filterbar.aligned.FilterContainer");F.prototype.init=function(){I.prototype.init.apply(this,arguments);this.oLayout=new A();};F.prototype.addButton=function(c){this.oLayout.addEndContent(c);};F.prototype.insertFilterField=function(c,i){this.oLayout.insertContent(c,i);};F.prototype.removeFilterField=function(c){this.oLayout.removeContent(c);};F.prototype.getFilterFields=function(){return this.oLayout.getContent();};return F;});
