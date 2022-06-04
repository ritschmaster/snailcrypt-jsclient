/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers","sap/m/inputUtils/getTokenByItem"],function(L,g){"use strict";var f=function(i){var I=i.item;var p=i.propName;var a=i.propValue;var t=g(I);if(!t){return;}if(p==="enabled"){t.setVisible(a);}else if(t.getMetadata().hasProperty(p)){t.setProperty(p,a);}};return f;});
