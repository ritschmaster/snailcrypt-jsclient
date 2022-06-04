/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var A={applyChange:function(m,c){var n=c.getContent();var o=m["sap.ovp"].cards;if("card"in n&&Object.keys(n.card).length>0&&!(Object.keys(n.card)in o)){Object.assign(o,n.card);}else{throw Error("No new card found");}return m;}};return A;});
