/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
    'sap/ui/mdc/p13n/Engine'
], function(Engine) {
	"use strict";

	/**
	 * @class Utility class for generic mdc xConfig handling by utilizing the
     * <code>sap.ui.mdc.p13n.Engine</code> and its <code>Modificationhandler</code>.
     * This class should be used to handle property changes that should be persisted
     * as flex changes for MDC control while enabling preprocessing via customdata.
	 *
	 * @author SAP SE
	 * @private
	 * @alias sap.ui.mdc.flexibility.AggregationConfigFlex
	 */
    var AggregationConfigFlex = {};

    var fConfigModified = function(oControl) {
        if (!oControl._bWaitForModificationChanges && oControl.isA) {
            oControl._bWaitForModificationChanges = true;
            Engine.getInstance().waitForChanges(oControl).then(function() {
                if (oControl._onModifications instanceof Function) {
                    oControl._onModifications();
                }
                delete oControl._bWaitForModificationChanges;
            });
        }
	};

    var fnQueueChange = function(oControl, fTask) {
		var fCleanupPromiseQueue = function(pOriginalPromise) {
			if (oControl._pQueue === pOriginalPromise){
				delete oControl._pQueue;
			}
		};

		oControl._pQueue = oControl._pQueue instanceof Promise ? oControl._pQueue.then(fTask) : fTask();
		oControl._pQueue.then(fCleanupPromiseQueue.bind(null, oControl._pQueue));

		return oControl._pQueue;
	};

    /**
     * Creates a changehandler specific to the provided aggregation and property name,
     * to enhance the xConfig object for a given mdc control instance.
     *
     * The enhanced object can be accesed using <code>Engine#readAggregationConfig</code>.
     *
     * @param {object} mMetaConfig A map describing the metadata structure that is affected by this changehandler
     * @param {object} mMetaConfig.aggregation The aggregation name (such as <code>columns</code> or <code>filterItemes</code>)
     * @param {object} mMetaConfig.property The property name (such as <code>width</code> or <code>label</code>)
     *
     * @returns {object} The created changehandler object
     */
    AggregationConfigFlex.createSetChangeHandler = function(mMetaConfig) {

        if (!mMetaConfig || !mMetaConfig.hasOwnProperty("aggregation") || !mMetaConfig.hasOwnProperty("property")) {
            throw new Error("Please provide a map containing the affected aggregation and property name!");
        }

        var sAffectedAggregation = mMetaConfig.aggregation;
        var sAffectedProperty = mMetaConfig.property;

        return {
            "changeHandler": {
                applyChange: function (oChange, oControl, mPropertyBag) {

                    return fnQueueChange(oControl, function(){
                        return Engine.getInstance().readXConfig(oControl, {
                            propertyBag: mPropertyBag
                        })
                        .then(function(oPriorAggregationConfig) {
                            var sOldValue = null;

                            if (oPriorAggregationConfig
                                && oPriorAggregationConfig.aggregations
                                && oPriorAggregationConfig.aggregations[sAffectedAggregation]
                                && oPriorAggregationConfig.aggregations[sAffectedAggregation][oChange.getContent().name]
                                && oPriorAggregationConfig.aggregations[sAffectedAggregation][oChange.getContent().name][sAffectedProperty]
                                ){
                                    sOldValue = oPriorAggregationConfig.aggregations[sAffectedAggregation][oChange.getContent().name][sAffectedProperty];
                            }

                            oChange.setRevertData({
                                name: oChange.getContent().name,
                                value: sOldValue
                            });

                            return Engine.getInstance().enhanceXConfig(oControl, {
                                controlMeta: {
                                    aggregation: sAffectedAggregation,
                                    property: sAffectedProperty
                                },
                                name: oChange.getContent().name,
                                value: oChange.getContent().value,
                                propertyBag: mPropertyBag
                            });
                        })
                        .then(function() {
                            fConfigModified(oControl);
                        });

                    });

                },
                completeChangeContent: function (oChange, mChangeSpecificInfo, mPropertyBag) {
                    // Not used, but needs to be there
                },
                revertChange: function (oChange, oControl, mPropertyBag) {
                    return Engine.getInstance().enhanceXConfig(oControl, {
                        controlMeta: {
                            aggregation: sAffectedAggregation,
                            property: sAffectedProperty
                        },
                        name: oChange.getRevertData().name,
                        value: oChange.getRevertData().value,
                        propertyBag: mPropertyBag
                    })
                    .then(function() {
                        oChange.resetRevertData();
                        fConfigModified(oControl);
                    });
                }
            },
            "layers": {
                "USER": true
            }
        };
    };

    return AggregationConfigFlex;

});
