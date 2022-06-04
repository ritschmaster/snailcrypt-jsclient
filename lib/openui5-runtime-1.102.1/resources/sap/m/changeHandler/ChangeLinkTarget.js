/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var C={};C.applyChange=function(c,o,p){var m=p.modifier;var a=c.getDefinition();var t=a.content;return Promise.resolve().then(m.getProperty.bind(m,o,"target")).then(function(P){var r={target:P};m.setProperty(o,"target",t);c.setRevertData(r);});};C.revertChange=function(c,o,p){var m=p.modifier;var r=c.getRevertData();var t=r.target;m.setProperty(o,"target",t);};C.completeChangeContent=function(c,s,p){};return C;});
