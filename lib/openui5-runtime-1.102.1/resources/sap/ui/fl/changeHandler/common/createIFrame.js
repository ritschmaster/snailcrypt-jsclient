/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/util/IFrame"],function(){"use strict";return function(c,p,s){var m=p.modifier;var C=c.getDefinition();var v=p.view;var o=p.appComponent;var i={_settings:{}};["url","width","height"].forEach(function(I){var V=C.content[I];i[I]=V;i._settings[I]=V;});return Promise.resolve().then(function(){return m.createControl("sap.ui.fl.util.IFrame",o,v,s,i,false);});};});
