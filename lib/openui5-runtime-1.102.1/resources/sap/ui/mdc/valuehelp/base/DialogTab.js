/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control'],function(C){"use strict";var D=C.extend("sap.ui.mdc.valuehelp.base.DialogTab",{metadata:{library:"sap.ui.mdc",properties:{content:{type:"object"}},events:{select:{parameters:{type:{type:"sap.ui.mdc.enum.SelectType"},conditions:{type:"object[]"}}},confirm:{parameters:{close:{type:"boolean"}}},cancel:{}}},renderer:{apiVersion:2,render:function(r,c){var o=c.getContent();if(o){r.renderControl(o);}}}});D.prototype.init=function(){C.prototype.init.apply(this,arguments);};D.prototype.exit=function(){if(this._displayContent){this._displayContent=null;}return C.prototype.exit.apply(this,arguments);};return D;});
