/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers"],function(L){"use strict";return function(i,f){var F,g,l;if(!Array.isArray(i)||!i.length){return;}f=f||{};F=f.items||[];g=f.groups||[];i.forEach(function(I){l=L.getListItem(I);if(!I.isA("sap.ui.core.SeparatorItem")&&l){l.setVisible(F.indexOf(I)!==-1);}});g.forEach(function(G){l=L.getListItem(G.header);l&&l.setVisible(G.visible);});};});
