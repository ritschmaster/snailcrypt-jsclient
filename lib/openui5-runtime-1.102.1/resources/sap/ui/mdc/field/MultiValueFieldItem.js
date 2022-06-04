/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var M=E.extend("sap.ui.mdc.field.MultiValueFieldItem",{metadata:{library:"sap.ui.mdc",properties:{key:{type:"any",byValue:true},description:{type:"string"}},defaultProperty:"key"}});M.prototype.bindProperty=function(n,b){if(n==="key"&&!b.formatter){b.targetType="raw";}E.prototype.bindProperty.apply(this,arguments);};return M;});
