/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../util/PropertyHelper"],function(P){"use strict";var a=P.extend("sap.ui.mdc.p13n.PropertyHelper",{constructor:function(p,e,o,E){var A=["filterable","sortable"];P.call(this,p,e,o,A,E);}});a.prototype.validateProperties=function(){};a.prototype.prepareProperty=function(p){P.prototype.prepareProperty.apply(this,arguments);p.label=p.label||p.name;};return a;});
