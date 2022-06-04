/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ItemBaseFlex'],function(I){"use strict";var c=Object.assign({},I);c.beforeAddItem=function(D,d,C,p,o){return D.addItem.call(D,d,C,p,o.role);};c.findItem=function(m,i,n){return i.reduce(function(p,o){return p.then(function(f){if(!f){return Promise.all([m.getProperty(o,"key"),m.getProperty(o,"name")]).then(function(P){if(P[0]===n||P[1]===n){return o;}});}return f;});},Promise.resolve());};c.addItem=c.createAddChangeHandler();c.removeItem=c.createRemoveChangeHandler();c.moveItem=c.createMoveChangeHandler();return c;});
