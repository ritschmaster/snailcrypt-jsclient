/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/dt/ElementUtil",
	"sap/ui/dt/OverlayRegistry",
	"sap/base/util/isPlainObject"
],
function(
	ElementUtil,
	OverlayRegistry,
	isPlainObject
) {
	"use strict";

	var BindingsExtractor = {};

	/**
	 * Get all relevant binding paths and binding context paths for the element (from all properties)
	 *
	 * @param {sap.ui.core.Control} oElement - Starting point of the search
	 * @param {sap.ui.model.Model} oModel - Model for filtering irrelevant binding paths
	 * @param {sap.ui.core.Control} [oRelevantContainerElement] - if this element is given then only bindings from element related to the relevant container are considered
	 * @returns {{bindingPaths: Array, bindingContextPaths: Array}} - returns with all relevant bindingPaths and all bindingContextPaths for all properties of the element
	 *
	 * @private
	 */
	BindingsExtractor.collectBindingPaths = function(oElement, oModel, oRelevantContainerElement) {
		var mBindingsCollection = {
			bindingPaths: [],
			bindingContextPaths: []
		};
		var sAggregationName = oElement.sParentAggregationName;
		var oParent = oElement.getParent();
		var aBindings = BindingsExtractor.getBindings(oElement, oModel, undefined, undefined, oRelevantContainerElement);

		if (oParent) {
			var oDefaultAggregation = oParent.getMetadata().getAggregation();

			if (oDefaultAggregation) {
				var iPositionOfInvisibleElement = ElementUtil.getAggregation(oParent, sAggregationName).indexOf(oElement);
				var sParentDefaultAggregationName = oDefaultAggregation.name;
				var oBinding = oParent.getBindingInfo(sParentDefaultAggregationName);
				var oTemplate = oBinding && oBinding.template;

				if (oTemplate) {
					var oTemplateDefaultAggregation = oTemplate.getMetadata().getAggregation();

					if (oTemplateDefaultAggregation) {
						var sTemplateDefaultAggregationName = oTemplateDefaultAggregation.name;
						var oTemplateElement = ElementUtil.getAggregation(oTemplate, sTemplateDefaultAggregationName)[iPositionOfInvisibleElement];
						aBindings = aBindings.concat(BindingsExtractor.getBindings(oTemplateElement, null, true, undefined, oRelevantContainerElement));
					}
				}
			}
		}

		for (var i = 0, l = aBindings.length; i < l; i++) {
			if (aBindings[i].getPath) {
				var sBindingPath = aBindings[i].getPath();
				if (sBindingPath &&	mBindingsCollection.bindingPaths.indexOf(sBindingPath) === -1) {
					mBindingsCollection.bindingPaths.push(sBindingPath);
				}
			}
			if (aBindings[i].getContext && aBindings[i].getContext() && aBindings[i].getContext().getPath) {
				var sBindingContextPath = aBindings[i].getContext().getPath();
				if (sBindingContextPath && mBindingsCollection.bindingContextPaths.indexOf(sBindingContextPath) === -1) {
					mBindingsCollection.bindingContextPaths.push(sBindingContextPath);
				}
			}
			if (isPlainObject(aBindings[i])) {
				var sCurrentPath = aBindings[i].parts[0] && aBindings[i].parts[0].path;
				// Sometimes the binding does not contain a path
				if (sCurrentPath && mBindingsCollection.bindingPaths.indexOf(sCurrentPath) === -1) {
					mBindingsCollection.bindingPaths.push(sCurrentPath);
				}
			}
		}
		return mBindingsCollection;
	};

	function isElementRelatedToRelevantContainer(oElement, oRelevantContainerElement) {
		if (oRelevantContainerElement && oElement !== oRelevantContainerElement) {
			var oOverlay = OverlayRegistry.getOverlay(oElement);
			var oRelevantContainer = oOverlay && (oOverlay.getRelevantContainer() || oOverlay.getElement());
			return oRelevantContainer ? oRelevantContainer.getId() === oRelevantContainerElement.getId() : true;
		}
		return true;
	}

	/**
	 * Gets bindings for the whole hierarchy of children for a specified Element
	 * and filters out bindings which are not relevant (based on the parent model)
	 *
	 * @param {sap.ui.core.Control} oElement - Starting point of the search
	 * @param {sap.ui.model.Model} oParentDefaultModel - Model for filtering irrelevant binding paths
	 * @param {boolean} [vTemplate] - Whether we should consider provided element as a template
	 * @param {string} [sAggregationName] - if aggregation name is given then only for this aggregation bindings are returned, if not then all aggregations are considered
	 * @param {sap.ui.core.Control} [oRelevantContainerElement] - if this element is given then only bindings from element related to the relevant container are considered
	 * @returns {Array} - returns array with all relevant bindings for all properties of the element
	 *
	 * @private
	 */
	BindingsExtractor.getBindings = function(oElement, oParentDefaultModel, vTemplate, sAggregationName, oRelevantContainerElement) {
		var aBindings = [];
		if (isElementRelatedToRelevantContainer(oElement, oRelevantContainerElement)) {
			aBindings = (
				vTemplate
					? getBindingsFromTemplateProperties(oElement)
					: BindingsExtractor.getBindingsFromProperties(oElement, oParentDefaultModel)
			);
		}
		var aAggregationNames = sAggregationName ? [sAggregationName] : Object.keys(oElement.getMetadata().getAllAggregations());

		aAggregationNames.forEach(function (sAggregationNameInLoop) {
			aBindings = aBindings.concat(getBindingsForAggregation(oElement, oParentDefaultModel, vTemplate, sAggregationNameInLoop, oRelevantContainerElement));
		});

		return aBindings;
	};

	function getBindingsForAggregation(oElement, oParentDefaultModel, vTemplate, sAggregationName, oRelevantContainerElement) {
		var aBindings = [];
		var oTemplate;
		var bTemplate;
		// Getting children of the current aggregation and iterating through all of them
		var oBinding = oElement.getBindingInfo(sAggregationName);
		if (vTemplate !== false) {
			oTemplate = oBinding && oBinding.template;
			bTemplate = !!vTemplate;
		}
		var aElements = oTemplate ? [oTemplate] : ElementUtil.getAggregation(oElement, sAggregationName);

		aElements.forEach(function (oChildElement) {
			if (oChildElement.getMetadata) {
				if (isElementRelatedToRelevantContainer(oElement, oRelevantContainerElement)) {
					// Fetching bindings from Element and all children of Element
					aBindings = aBindings.concat(oTemplate || bTemplate
						? getBindingsFromTemplateProperties(oChildElement, oRelevantContainerElement)
						: BindingsExtractor.getBindingsFromProperties(oChildElement, oParentDefaultModel));
				}
				// For children, templates should not be evaluated (because the delegate also does not consider them)
				aBindings = aBindings.concat(
					BindingsExtractor.getBindings(oChildElement, oParentDefaultModel, false, undefined, oRelevantContainerElement)
				);
			}
		});

		return aBindings;
	}

	/**
	 * Fetches all bindings for a specified binding model
	 *
	 * @param {sap.ui.model.PropertyBinding} oBinding - Binding model to get paths from
	 * @param {sap.ui.model.odata.XX.ODataModel} oParentDefaultModel - Data model (XX = '', v2, v4...)
	 *
	 * @returns {Array} - Returns a flattened array of found bindings
	 *
	 * @private
	 */
	BindingsExtractor.flattenBindings = function(oBinding, oParentDefaultModel) {
		var aBindings = [];
		var sModelName = oBinding.getMetadata().getName();

		if (sModelName === "sap.ui.model.CompositeBinding") {
			oBinding.getBindings().forEach(function (oBinding) {
				aBindings = aBindings.concat(BindingsExtractor.flattenBindings(oBinding, oParentDefaultModel));
			});
		} else if (
			(
				sModelName === "sap.ui.model.odata.ODataPropertyBinding"
				|| sModelName === "sap.ui.model.odata.v2.ODataPropertyBinding"
				|| sModelName === "sap.ui.model.odata.v4.ODataPropertyBinding"
				|| sModelName === "sap.ui.model.json.JSONPropertyBinding"
				|| sModelName === "sap.ui.model.json.XMLPropertyBinding"
				|| sModelName === "sap.ui.model.resource.ResourcePropertyBinding"
			)
			&& oBinding.getModel() === oParentDefaultModel
			&& oBinding.isRelative()
			&& typeof oBinding.getPath === "function"
			&& oBinding.getPath()
		) {
			aBindings.push(oBinding);
		}

		return aBindings;
	};

	/**
	 * Fetches all bindings from template
	 *
	 * @param {object} mBinding - map of bindings from Control (mBindingsInfo)
	 * @returns {Array} - Returns a flattened array of found bindings
	 * @private
	 */
	function flattenBindingsFromTemplate(mBinding) {
		var aBindings = [];
		var aParts = mBinding.parts;

		// TODO: check if we need to filter bindings by modelName, relative indicator ("/")
		aParts.forEach(function (mPart) {
			aBindings.push({
				parts: [mPart]
			});
		});

		return aBindings;
	}

	/**
	 * Retrieving all bindings from all available properties for a specified element
	 *
	 * @param {sap.ui.core.Control} oElement - element to get bindings from
	 * @param {sap.ui.model.Model} oParentDefaultModel - parent model to filter irrelevant bindings
	 *
	 * @return {Array} - returns found bindings
	 *
	 * @private
	 */
	BindingsExtractor.getBindingsFromProperties = function(oElement, oParentDefaultModel) {
		var aPropertiesKeys = Object.keys(oElement.getMetadata().getAllProperties());

		return aPropertiesKeys
			// filter properties which are not bound
			.filter(oElement.getBinding.bind(oElement))
			.reduce(function (aBindings, sPropertyName) {
				return aBindings.concat(
					BindingsExtractor.flattenBindings(
						oElement.getBinding(sPropertyName),
						oParentDefaultModel
					)
				);
			}, []);
	};

	/**
	 * Retrieving all bindings from all available properties for a specified element of template
	 *
	 * @param {sap.ui.core.Control} oElement - element to get bindings from
	 * @return {Array} - returns found bindings
	 * @private
	 */
	function getBindingsFromTemplateProperties(oElement) {
		var aPropertiesKeys = Object.keys(oElement.getMetadata().getAllProperties());

		return aPropertiesKeys
			.filter(function (sPropertyName) {
				return sPropertyName in oElement.mBindingInfos;
			})
			.reduce(function (aBindings, sPropertyName) {
				return aBindings.concat(
					flattenBindingsFromTemplate(
						oElement.mBindingInfos[sPropertyName]
					)
				);
			}, []);
	}

	/**
	 * Retrieving context binding path from element
	 *
	 * @param {sap.ui.core.Control} oElement - element to get context binding paths from
	 * @return {boolean|string} - Returns the binding context path string from element. If not available <code>false</code> is returned.
	 * @private
	 */
	BindingsExtractor.getBindingContextPath = function(oElement) {
		if (oElement.getBindingContext() && oElement.getBindingContext().getPath) {
			return oElement.getBindingContext().getPath();
		}
		return undefined;
	};

	return BindingsExtractor;
}, true);