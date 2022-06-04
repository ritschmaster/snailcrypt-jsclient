/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ItemBaseFlex'],function(I){"use strict";var a=Object.assign({},I);a.findItem=function(m,A,n){return sap.ui.getCore().byId(n);};return{"moveControls":"default",moveAction:a.createMoveChangeHandler()};});
