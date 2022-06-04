/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/mdc/BaseDelegate','sap/ui/core/library'],function(B,c){"use strict";var A=Object.assign(B,{fetchProperties:function(C){return Promise.resolve([]);},addItem:function(p,C,P){return Promise.resolve();},removeItem:function(i,C,p){return Promise.resolve(true);},validateState:function(C,s){var v=c.MessageType.None;return{validation:v,message:undefined};}});return A;});
