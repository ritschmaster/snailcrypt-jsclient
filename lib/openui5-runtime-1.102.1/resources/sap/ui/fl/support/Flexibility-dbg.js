/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.fl.support.Flexibility
sap.ui.define([
	"sap/base/util/each",
	"sap/ui/core/support/Plugin",
	"sap/ui/core/support/Support",
	"sap/ui/core/util/reflection/JsControlTreeModifier",
	"sap/ui/model/json/JSONModel",
	"sap/ui/fl/FlexController",
	"sap/ui/fl/ChangePersistenceFactory",
	"sap/ui/fl/support/apps/uiFlexibilityDiagnostics/helper/Extractor",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/Component"
], function(
	each,
	Plugin,
	Support,
	JsControlTreeModifier,
	JSONModel,
	FlexController,
	ChangePersistenceFactory,
	Extractor,
	XMLView,
	CoreComponent
) {
	"use strict";

	/**
	 * Creates an instance of <code>sap.ui.fl.support.Flexibility</code>.
	 * @class This class represents the plugin for the support tool functionality of UI5.
	 * This class is internal and all its functions must not be used by an application
	 *
	 * @abstract
	 * @extends sap.ui.core.support.Plugin
	 * @version 1.102.1
	 * @private
	 * @ui5-restricted
	 * @constructor
	 */
	var Flexibility = Plugin.extend("sap.ui.fl.support.Flexibility", {
		constructor: function (oSupportStub) {
			Plugin.apply(this, ["sapUiSupportFlexibility", "Flexibility", oSupportStub]);
			this._oStub = oSupportStub;

			if (this.runsAsToolPlugin()) {
				this._aEventIds = [
					this.getId() + "SetApps",
					this.getId() + "SetChangesMaps"
				];
			} else {
				this._aEventIds = [
					this.getId() + "GetApps",
					this.getId() + "GetChangesMaps"
				];
			}
		}
	});

	Flexibility.prototype.sDelimiter = ";";

	/**
	 * Creation of the support plugin.
	 * On the tool plugin site a rendering as well as a model creation for later data receiving is created.
	 *
	 * @param {sap.ui.core.support.Support} oSupportStub - Support instance created within the support window instantiation
	 */
	Flexibility.prototype.init = function (oSupportStub) {
		Plugin.prototype.init.apply(this, arguments);

		var sPanelInfoText = "<div class='sapUiSmallMargin'>The applications listed below have been handled by the sap.ui.fl library in this session.</div>" +
				"<div class='sapUiSmallMarginBegin'>You can download a file containing the data that has been applied to an application as well as " +
				"relevant runtime information, and then upload this file to the UI Flexibility Diagnostics application for further investigation.</div>" +
				"<div class='sapUiSmallMarginBegin'>The UI Flexibility Diagnostics application displays graphs and is only available with SAPUI5.</div>";

		if (oSupportStub.isToolStub()) {
			this.addStylesheet("sap/ui/fl/support/flexibility");
			this.oChangesModel = new JSONModel();
			this.oAppModel = new JSONModel();
			this.oToolSettings = new JSONModel({
				hideDependingChanges: false,
				panelInfoText: sPanelInfoText
			});
			this.oChangeDetails = new JSONModel();
			this._renderToolPlugin([]);

			Support.getStub().sendEvent(this.getId() + "GetApps", {});
		} else {
			// send data on initialization to the support panel
			this.onsapUiSupportFlexibilityGetApps();
		}
	};

	/**
	 * Rendering of the tool plugin side of the UI.
	 * This creates a plain html-rendered header as well as a view containing the hierarchy of the flexibility data:
	 * <ul>
	 * <li>hierarchical list of controls and their changes</li>
	 * <li>details view with information to selected changes</li>
	 * </ul>
	 *
	 * @private
	 */
	Flexibility.prototype._renderToolPlugin = function () {
		var _doPlainRendering = function () {
			var rm = sap.ui.getCore().createRenderManager();
			rm.write("<div id='" + this.getId() + "-FlexCacheArea' class='sapUiSizeCompact'></div>");
			rm.flush(this.$().get(0));
			rm.destroy();
		}.bind(this);

		var _initView = function () {
			this.oViewPromise = XMLView.create({
				viewName: "sap.ui.fl.support.diagnostics.Flexibility",
				viewData: {
					plugin: this
				}
			}).then(function(oView) {
				this.oView = oView;
				this.oView.placeAt(this.getId() + "-FlexCacheArea");
				this.oView.setModel(this.oAppModel, "flexApps");
				this.oView.setModel(this.oToolSettings, "flexToolSettings");
				this.oView.setModel(this.oChangesModel, "flexChanges");
				this.oView.setModel(this.oChangeDetails, "flexChangeDetails");
			}.bind(this));
		}.bind(this);

		_doPlainRendering();
		_initView();
	};

	/**
	 * Requests the data from the application side support plugin.
	 *
	 * @private
	 * @restricted sap.ui.fl.support
	 */
	Flexibility.prototype.onRefresh = function () {
		Support.getStub().sendEvent(this.getId() + "GetApps", {});
	};

	/**
	 * Collects a list of apps.
	 */
	Flexibility.prototype.onsapUiSupportFlexibilityGetApps = function () {
		var aApps = [];

		if (ChangePersistenceFactory._instanceCache) {
			each(ChangePersistenceFactory._instanceCache, function (sReference, oChangePersistanceInstance) {
				aApps.push({
					key: sReference,
					text: sReference,
					additionalText: this.getAppVariantHierarchy(sReference),
					data: Extractor.extractData(oChangePersistanceInstance)
				});
			}.bind(this));
		}

		this._oStub.sendEvent(this.getId() + "SetApps", aApps);
	};

	/**
	 * Parses all registered components and extracts <code>sap.ui5/appVariantHierarchy</code>.
	 * @param {string} sReference - Flex reference
	 * @returns {string} Joined app variant hierarchy and its app version
	 */
	Flexibility.prototype.getAppVariantHierarchy = function (sReference) {
		var oRegistry = CoreComponent.registry.all();
		var aAppDetails = [];
		Object.values(oRegistry).find(function(oComponent) {
			var sId = oComponent.getMetadata().getManifestEntry("/sap.app/id");
			var oUi5Node = oComponent.getMetadata().getManifestEntry("sap.ui5");
			if (sId === sReference) {
				oUi5Node.appVariantIdHierarchy.forEach(function(oHierarchy) {
					aAppDetails.push(oHierarchy.appVariantId + " (" + oHierarchy.version + ")" + (oHierarchy.layer ? " in layer " + oHierarchy.layer : ""));
				});
				return true;
			}
		});
		return aAppDetails.length ? "App variant based on:\n" + aAppDetails.join("\n") : "";
	};

	/**
	 * Collects data of changes.
	 *
	 * @param {sap.ui.base.Event} oEvent - Event sent from the tool side plugin to request changes
	 */
	Flexibility.prototype.onsapUiSupportFlexibilityGetChangesMaps = function (oEvent) {
		var sAppKey = oEvent.mParameters.appKey;
		var aAppParameters = sAppKey.split(this.sDelimiter);
		var sAppName = aAppParameters[0];
		this._getChangesMapForApp(sAppName);
	};

	/**
	 * Handler on tool plugin side; passes the received data from the application plugin tool to a model.
	 *
	 * @param {sap.ui.base.Event} oEvent - Event sent from the application side plugin with the applications
	 */
	Flexibility.prototype.onsapUiSupportFlexibilitySetApps = function (oEvent) {
		var mApps = oEvent.getParameters();
		this.oAppModel.setData(mApps);
	};

	/**
	 * Handler on tool plugin side; passes the received data from the application plugin tool to a model.
	 *
	 * @param {sap.ui.base.Event} oEvent - Event sent from the application side plugin with the changes
	 */
	Flexibility.prototype.onsapUiSupportFlexibilitySetChangesMaps = function (oEvent) {
		var mCacheEntries = oEvent.getParameters();
		this.oChangesModel.setData(mCacheEntries);
		// show all changes by expanding the tree after model update (which hides all sub-nodes)
		this.oView.byId("Tree").expandToLevel(1000);
	};

	Flexibility.prototype.exit = function () {
		Plugin.prototype.exit.apply(this, arguments);
	};

	/**
	 * Collects data of changes.
	 *
	 * @param {string} sAppName - Name of the application
	 *
	 * @private
	 */
	Flexibility.prototype._getChangesMapForApp = function (sAppName) {
		var mChangedControls = {};
		var mChanges = {};
		var aTreeNodes = [];
		var oChangePersistence = ChangePersistenceFactory.getChangePersistenceForComponent(sAppName);
		var mChangeFromPersistence = oChangePersistence._mChanges.mChanges;
		var mDependencies = oChangePersistence._mChangesInitial.mDependencies;

		function collectChangesData(mChanges, sControlId) {
			mChangedControls[sControlId] = [];
			var aChangesForControl = mChangeFromPersistence[sControlId];
			var oControl = sap.ui.getCore().byId(sControlId);
			var aAppliedChanges = [];
			var aFailedChangesJs = [];
			var aFailedChangesXml = [];
			if (oControl) {
				if (oControl.data(FlexController.appliedChangesCustomDataKey)) {
					aAppliedChanges = oControl.data(FlexController.appliedChangesCustomDataKey).split(",");
				}
				if (oControl.data(FlexController.failedChangesCustomDataKeyJs)) {
					aFailedChangesJs = oControl.data(FlexController.failedChangesCustomDataKeyJs).split(",");
				}
				if (oControl.data(FlexController.failedChangesCustomDataKeyXml)) {
					aFailedChangesXml = oControl.data(FlexController.failedChangesCustomDataKeyXml).split(",");
				}
			}

			mChangedControls[sControlId] = aChangesForControl.map(collectDataForSingleChange.bind(this, oControl, aAppliedChanges, aFailedChangesJs, aFailedChangesXml, mChanges));
		}

		function collectDataForSingleChange(oControl, aAppliedChanges, aFailedChangesJs, aFailedChangesXml, mChanges, oChange) {
			var oChangeDetails = {
				id: oChange.getId(),
				changeType: oChange.getChangeType(),
				selector: oChange.getSelector(),
				controlPresent: !!oControl,
				indexInAppliedChanges: undefined,
				indexOfFirstFailing: undefined,
				dependentControls: [], // filled later
				dependentChanges: [], // filled later
				someDirectDependingChangesFailed: false, // filled later
				someDirectDependingChangesNotApplied: false, // filled later
				isInSubTree: false // filled later
			};

			var aAllFailedChanges = aFailedChangesJs.concat(aFailedChangesXml);

			if (oChangeDetails.controlPresent && aAppliedChanges.indexOf(oChange.getId()) > -1) {
				oChangeDetails.indexInAppliedChanges = aAppliedChanges.indexOf(oChange.getId());
			}
			if (oChangeDetails.controlPresent && aFailedChangesJs.indexOf(oChange.getId()) > -1) {
				oChangeDetails.modifier = "JS";
				oChangeDetails.indexOfFirstFailing = aAllFailedChanges.indexOf(oChange.getId());
			}
			if (oChangeDetails.controlPresent && aFailedChangesXml.indexOf(oChange.getId()) > -1) {
				oChangeDetails.modifier = "XML";
				oChangeDetails.indexOfFirstFailing = aAllFailedChanges.indexOf(oChange.getId());
			}

			if (oChange._aDependentSelectorList) {
				var oAppComponent = Extractor.getAppComponentInstance(sAppName);
				oChangeDetails.dependentControls = oChange._aDependentSelectorList.map(function (oDependentSelector) {
					return {
						id: oDependentSelector.id,
						controlPresent: JsControlTreeModifier.bySelector(oDependentSelector, oAppComponent)
					};
				});
			}

			mChanges[oChange.getId()] = oChangeDetails;

			return oChangeDetails;
		}

		function setIsInSubTreeInformation(oChangeDetails, sKey, oDependency) {
			var aChangeIds = oDependency.dependencies;
			if (aChangeIds.indexOf(oChangeDetails.id) !== -1) {
				var bSameSelector = JSON.stringify(mChanges[sKey].selector) === JSON.stringify(oChangeDetails.selector);
				oChangeDetails.isInSubTree = oChangeDetails.isInSubTree || bSameSelector;
			}
		}

		function setDependentChangeRelatedInformation(sControlId, mChangesOnControl) {
			mChangesOnControl.forEach(function (oChangeDetails) {
				jQuery.each(mDependencies, setIsInSubTreeInformation.bind(this, oChangeDetails));

				oChangeDetails.allDependendingControlsPresent = oChangeDetails.dependentControls.every(function (mControl) {
					return mControl.controlPresent;
				});

				if (mDependencies[oChangeDetails.id] && mDependencies[oChangeDetails.id].dependencies) {
					mDependencies[oChangeDetails.id].dependencies.forEach(function (sDependentChangeId) {
						var oDependentChange = mChanges[sDependentChangeId];
						var bDependentChangeNotApplied = oDependentChange.indexInAppliedChanges === undefined;
						oDependentChange = mChanges[sDependentChangeId];
						oChangeDetails.someDirectDependingChangesNotApplied =
								oChangeDetails.someDirectDependingChangesNotApplied || bDependentChangeNotApplied;
						var bDependentChangeFailed = oDependentChange.indexOfFirstFailing === undefined;
						var bDependentChangesUnsuccessfulApplied = bDependentChangeFailed && bDependentChangeNotApplied;

						oChangeDetails.someDirectDependingChangesFailed = oChangeDetails.someDirectDependingChangesFailed
								|| bDependentChangeFailed;
						oChangeDetails.someDirectDependingChangesNotSuccessfulApplied =
								oChangeDetails.someDirectDependingChangesNotSuccessfulApplied || bDependentChangesUnsuccessfulApplied;
						oChangeDetails.dependentChanges.push(oDependentChange);
					});
				}

				oChangeDetails.isApplicable = !oChangeDetails.someDirectDependingChangesNotApplied &&
						oChangeDetails.controlPresent && oChangeDetails.allDependendingControlsPresent &&
						!oChangeDetails.someDirectDependingChangesNotApplied;

				oChangeDetails.isPossibleRootCause = oChangeDetails.isApplicable && oChangeDetails.indexInAppliedChanges === undefined;
			});
		}

		function fnCreateChangesNode(aChangesDetails) {
			aChangesDetails = aChangesDetails.filter(function (oChange) {
				return !aChangesDetails.some(function (oChangeInSameHierarchy) {
					return oChangeInSameHierarchy.dependentChanges.some(function (oDependentChange) {
						return oDependentChange.id === oChange.id;
					});
				});
			});

			return aChangesDetails.map(function (oChange) {
				return {
					id: oChange.id,
					text: oChange.changeType,
					nodes: oChange.dependentChanges ? fnCreateChangesNode(oChange.dependentChanges) : []
				};
			});
		}

		function createRootNodes(sControlId, aChangesDetails) {
			aTreeNodes.push({
				text: sControlId,
				nodes: fnCreateChangesNode(aChangesDetails)
			});
		}

		Object.keys(mChangeFromPersistence).forEach(collectChangesData.bind(this, mChanges));
		jQuery.each(mChangedControls, setDependentChangeRelatedInformation);
		jQuery.each(mChangedControls, createRootNodes);

		this._oStub.sendEvent(this.getId() + "SetChangesMaps", {
			changes: mChanges,
			tree: aTreeNodes
		});
	};

	return Flexibility;
});