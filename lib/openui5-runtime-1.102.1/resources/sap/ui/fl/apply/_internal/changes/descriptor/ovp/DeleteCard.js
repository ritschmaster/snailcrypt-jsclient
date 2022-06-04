/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var D={applyChange:function(m,c){var d=c.getContent();var o=m["sap.ovp"].cards;if(d.cardId in o){delete o[d.cardId];}else{throw Error("The card to be deleted was not found");}return m;}};return D;});
