/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/base/Log','sap/ui/mdc/enum/ConditionValidated'],function(L,C){"use strict";var a={createItemCondition:function(k,d,i,o,p){var v=C.NotValidated;var V=[k,d];if(d===null||d===undefined){V.pop();}else{v=C.Validated;}return this.createCondition("EQ",V,i,o,v,p);},createCondition:function(o,v,i,O,V,p){var c={operator:o,values:v,isEmpty:null,validated:V};if(i){c.inParameters=i;}if(O){c.outParameters=O;}if(p){c.payload=p;}return c;},_removeEmptyConditions:function(c){for(var i=c.length-1;i>-1;i--){if(c[i].isEmpty){c.splice(parseInt(i),1);}}return c;},_removeInitialFlags:function(c){for(var i=c.length-1;i>-1;i--){if(c[i].isInitial){delete c[i].isInitial;}}return c;}};return a;},true);
