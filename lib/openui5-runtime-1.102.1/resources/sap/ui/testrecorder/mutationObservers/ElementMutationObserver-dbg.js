/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/testrecorder/mutationObservers/MutationObserver"
], function (MutationObserver) {
	"use strict";

	var ElementMutationObserver = MutationObserver.extend("sap.ui.testrecorder.mutationObservers.ElementMutationObserver", {
		metadata: {
			library: "sap.ui.testrecorder"
		},
		_onObservation: function (aMutations) {
			if (this._isValidMutation(aMutations)) {
				this._fnObservationCb({
					domElementId: this._oTarget.id
				});
			}
		},
		_getOptions: function () {
			return {
				subtree: true,
				attributes: true
			};
		}
	});

	return ElementMutationObserver;
});
