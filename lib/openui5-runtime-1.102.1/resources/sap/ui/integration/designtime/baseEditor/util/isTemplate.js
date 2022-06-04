/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";function i(c,a){var p=c.sParentAggregationName;var P=c.getParent();if(a&&P===a){return false;}if(P&&p){var b=P.getBindingInfo(p);if(b&&c instanceof b.template.getMetadata().getClass()){return false;}else{return i(P,a);}}return true;}return i;});
