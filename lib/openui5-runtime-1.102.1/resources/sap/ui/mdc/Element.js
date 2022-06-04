/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/mdc/mixin/DelegateMixin","sap/ui/mdc/mixin/PropertyHelperMixin","sap/ui/mdc/mixin/AdaptationMixin"],function(C,D,P,A){"use strict";var E=C.extend("sap.ui.mdc.Element",{metadata:{library:"sap.ui.mdc",properties:{delegate:{type:"object",group:"Data"}}},renderer:C.renderer});D.call(E.prototype);A.call(E.prototype);P.call(E.prototype);return E;});
