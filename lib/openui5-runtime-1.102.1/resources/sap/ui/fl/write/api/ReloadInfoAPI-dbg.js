/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/LayerUtils",
	"sap/ui/fl/Layer",
	"sap/ui/fl/Utils",
	"sap/ui/fl/write/api/Version",
	"sap/ui/fl/apply/_internal/flexState/ManifestUtils",
	"sap/ui/fl/write/api/VersionsAPI",
	"sap/ui/fl/write/api/FeaturesAPI",
	"sap/ui/fl/write/api/PersistenceWriteAPI",
	"sap/base/util/UriParameters"
], function(
	LayerUtils,
	Layer,
	Utils,
	Version,
	ManifestUtils,
	VersionsAPI,
	FeaturesAPI,
	PersistenceWriteAPI
) {
	"use strict";

	function isDraftAvailable(oReloadInfo) {
		var bUrlHasVersionParameter = !!Utils.getParameter(Version.UrlParameter, oReloadInfo.URLParsingService);
		if (bUrlHasVersionParameter) {
			return Promise.resolve(false);
		}

		return FeaturesAPI.isVersioningEnabled(oReloadInfo.layer).then(function(bVersioningAvailable) {
			return bVersioningAvailable && VersionsAPI.isDraftAvailable({
				control: oReloadInfo.selector,
				layer: oReloadInfo.layer
			});
		});
	}

	function areHigherLayerChangesAvailable(oReloadInfo) {
		var bUrlHasMaxLayerParameter = this.hasMaxLayerParameterWithValue({value: oReloadInfo.layer}, oReloadInfo.URLParsingService);
		var bUserLayer = oReloadInfo.layer === Layer.USER;
		if (bUserLayer || bUrlHasMaxLayerParameter) {
			return Promise.resolve(false);
		}

		return PersistenceWriteAPI.hasHigherLayerChanges({
			selector: oReloadInfo.selector,
			ignoreMaxLayerParameter: oReloadInfo.ignoreMaxLayerParameter,
			upToLayer: oReloadInfo.layer,
			includeCtrlVariants: oReloadInfo.includeCtrlVariants,
			includeDirtyChanges: true
		});
	}

	function isAllContextsAvailable(oReloadInfo) {
		var sContextsFromSession = getInfoContextsSession(oReloadInfo.selector);
		if (sContextsFromSession !== null) {
			return false; //already call flex/info and do not retrigger reload again
		}
		var mPropertyBag = {
			selector: oReloadInfo.selector,
			layer: oReloadInfo.layer
		};
		return PersistenceWriteAPI.getResetAndPublishInfo(mPropertyBag)
			.then(function (oResult) {
				setInfoSessionStorage(oResult, oReloadInfo.selector);
				return !oResult.allContextsProvided;
			});
	}

	function getInfoContextsSession(oControl) {
		var sFlexReference = ManifestUtils.getFlexReferenceForControl(oControl);
		var sParameter = sFlexReference || "true";
		var oFlexInfoSession = JSON.parse(window.sessionStorage.getItem("sap.ui.fl.info." + sParameter));
		return oFlexInfoSession && !oFlexInfoSession.allContextsProvided;
	}

	function setInfoSessionStorage(oInfo, oControl) {
		var sFlexReference = ManifestUtils.getFlexReferenceForControl(oControl);
		var sParameter = sFlexReference || "true";
		window.sessionStorage.setItem("sap.ui.fl.info." + sParameter, JSON.stringify(oInfo));
	}

	/**
	 * Provides an API to get information about reload behavior in case of a draft and/or personalization changes.
	 *
	 * @namespace sap.ui.fl.write.api.ReloadInfoAPI
	 * @since 1.78
	 * @private
	 * @ui5-restricted sap.ui.rta
	 */
	var ReloadInfoAPI = /** @lends sap.ui.fl.write.api.ReloadInfoAPI */{

		/**
		 * Checks if all contexts, personalization or drafts changes exist for controls.
		 *
		 * @param  {object} oReloadInfo - Contains the information needed to find a reason to reload
		 * @param  {sap.ui.fl.Layer} oReloadInfo.layer - Current layer
		 * @param  {sap.ui.core.Control} oReloadInfo.selector - Root control instance
		 * @param  {boolean} [oReloadInfo.ignoreMaxLayerParameter] - Indicates that personalization is to be checked without max layer filtering
		 * @param  {object} oReloadInfo.parsedHash - The parsed URL hash
		 *
		 * @returns {Promise<object>} Promise resolving to an object with the reload reasons
		 */
		getReloadReasonsForStart: function(oReloadInfo) {
			return Promise.all([
				areHigherLayerChangesAvailable.call(this, oReloadInfo),
				isDraftAvailable(oReloadInfo),
				isAllContextsAvailable(oReloadInfo)
			]).then(function(aReasons) {
				oReloadInfo.hasHigherLayerChanges = aReasons[0];
				oReloadInfo.isDraftAvailable = aReasons[1];
				oReloadInfo.allContexts = aReasons[2];
				return oReloadInfo;
			});
		},

		/**
		 * Remove flex info form session storage.
		 *
		 * @param  {object} oControl - Root control instance
		 */
		removeInfoSessionStorage: function(oControl) {
			var sFlexReference = ManifestUtils.getFlexReferenceForControl(oControl);
			var sParameter = sFlexReference || "true";
			window.sessionStorage.removeItem("sap.ui.fl.info." + sParameter);
		},

		/**
		 * Checks if the the <code>sap-ui-fl-version</code> parameter name with the given value is contained in the URL.
		 *
		 * @param  {object} oParameter - Object containing the parameter value to be checked
		 * @param  {string} oParameter.value - The parameter value to be checked
		 * @param  {sap.ushell.services.URLParsing} oURLParsingService - The Unified Shell's internal URL parsing service
		 * @returns {boolean} True if the parameter with the given value is in the URL
		 */
		hasVersionParameterWithValue: function(oParameter, oURLParsingService) {
			return Utils.hasParameterAndValue(Version.UrlParameter, oParameter.value, oURLParsingService);
		},

		/**
		 * Checks if the the <code>sap-ui-fl-max-layer</code> parameter name with the given value is contained in the URL.
		 *
		 * @param  {object} oParameter - Object containing the parameter value to be checked
		 * @param  {string} oParameter.value - The parameter value to be checked
		 * @param  {sap.ushell.services.URLParsing} oURLParsingService - The Unified Shell's internal URL parsing service
		 *
		 * @returns {boolean} <code>true</code> if the parameter with the given value is in the URL
		 */
		hasMaxLayerParameterWithValue: function(oParameter, oURLParsingService) {
			var sParameterName = LayerUtils.FL_MAX_LAYER_PARAM;
			return Utils.hasParameterAndValue(sParameterName, oParameter.value, oURLParsingService);
		},

		/**
		 * Standalone: Adds the <code>sap-ui-fl-version</code> parameter to the URL or removes it.
		 *
		 * @param  {object} oReloadInfo - Contains the information needed to add the correct URL parameters
		 * @param  {sap.ui.fl.Layer} oReloadInfo.layer - Current layer
		 * @param  {boolean} oReloadInfo.hasHigherLayerChanges - Indicates if higher layer changes exist
		 * @param  {boolean} oReloadInfo.isDraftAvailable - Indicates if a draft is available
		 * @param  {string} oReloadInfo.parameters - The URL parameters to be modified
		 * @param  {string} oReloadInfo.versionSwitch - Indicates if we are in a version switch scenario
		 * @param  {string} oReloadInfo.version - Version we want to switch to
		 * @param  {sap.ushell.services.URLParsing} oReloadInfo.URLParsingService - The Unified Shell's internal URL parsing service
		 * @param  {boolean} [oReloadInfo.onExit=false] - Indicates if we are in a save+exit case/flow to not add the version=0 parameter
		 *
		 * @returns {string} The modified URL
		 */
		handleUrlParametersForStandalone: function(oReloadInfo) {
			if (oReloadInfo.hasHigherLayerChanges) {
				oReloadInfo.parameters = Utils.handleUrlParameters(oReloadInfo.parameters, LayerUtils.FL_MAX_LAYER_PARAM, oReloadInfo.layer, oReloadInfo.URLParsingService);
			}

			// removes any version number set (original, draft, inactive and active versions)
			var oVersionRegExp = new RegExp("\&*" + Version.UrlParameter + "=-?\\d*\&?", "g");
			oReloadInfo.parameters = oReloadInfo.parameters.replace(oVersionRegExp, "");

			// startup reload due to draft
			if (oReloadInfo.isDraftAvailable && !oReloadInfo.onExit) {
				oReloadInfo.parameters = Utils.handleUrlParameters(oReloadInfo.parameters, Version.UrlParameter, Version.Number.Draft, oReloadInfo.URLParsingService);
			}

			if (oReloadInfo.versionSwitch) {
				oReloadInfo.parameters = Utils.handleUrlParameters(oReloadInfo.parameters, Version.UrlParameter, oReloadInfo.version, oReloadInfo.URLParsingService);
			}

			// clean up if the last parameter was removed
			if (oReloadInfo.parameters === "?") {
				oReloadInfo.parameters = "";
			}

			return oReloadInfo.parameters;
		},

		/**
		 * Adds parameters to the parsed hash to skip personalization changes and/or apply draft changes.
		 *
		 * @param  {object}  oReloadInfo - Contains the information needed to add the correct URL parameters
		 * @param  {boolean} oReloadInfo.hasHigherLayerChanges - Indicates if higher layer changes exist
		 * @param  {boolean} oReloadInfo.isDraftAvailable - Indicates if a draft is available
		 * @param  {sap.ui.fl.Layer} oReloadInfo.layer - Current layer
		 * @param  {sap.ui.fl.Selector} oReloadInfo.selector - Root control instance
		 * @param  {sap.ushell.services.URLParsing} oReloadInfo.URLParsingService - The Unified Shell's internal URL parsing service
		 *
		 * @returns {object} oParsedHash Adjusted parsed hash
		 */
		handleParametersOnStart: function(oReloadInfo) {
			var mParsedHash = Utils.getParsedURLHash(oReloadInfo.URLParsingService);
			mParsedHash.params = mParsedHash.params || {};

			if (oReloadInfo.hasHigherLayerChanges) {
				mParsedHash.params[LayerUtils.FL_MAX_LAYER_PARAM] = [oReloadInfo.layer];
			}
			if (oReloadInfo.isDraftAvailable) {
				mParsedHash.params[Version.UrlParameter] = [Version.Number.Draft];
			}
			return mParsedHash;
		},

		/**
		 * Checks if an initially available draft got activated during the current UI adaptation session.
		 *
		 * @param  {object}  oReloadInfo - Contains the information needed to check if the initial draft got activated
		 * @param  {sap.ui.fl.Layer} oReloadInfo.layer - Current layer
		 * @param  {sap.ui.fl.Selector} oReloadInfo.selector - Root control instance
		 * @param  {boolean} oReloadInfo.versioningEnabled - Indicates if versioning is enabled by the backend
		 * @param  {sap.ushell.services.URLParsing} oReloadInfo.URLParsingService - The Unified Shell's internal URL parsing service
		 * @returns {boolean} <code>true</code> if a draft got activated and had a draft initially when entering UI adaptation
		 */
		initialDraftGotActivated: function(oReloadInfo) {
			if (oReloadInfo.versioningEnabled) {
				var bUrlHasVersionParameter = this.hasVersionParameterWithValue({value: Version.Number.Draft}, oReloadInfo.URLParsingService);
				return !VersionsAPI.isDraftAvailable({
					control: oReloadInfo.selector,
					layer: oReloadInfo.layer
				}) && bUrlHasVersionParameter;
			}
			return false;
		},

		/**
		 * Determines if a reload on exit is needed and if yes - it returns what kind of reload should happen (CrossAppNavigation or hard reload).
		 *
		 * @param  {object} oReloadInfo - Contains the information needed to check if a reload on exit should happen
		 * @param  {sap.ui.fl.Layer} oReloadInfo.layer - Current layer
		 * @param  {boolean} oReloadInfo.isDraftAvailable - Indicates if a draft is available
		 * @param  {boolean} oReloadInfo.hasHigherLayerChanges - Indicates if higher layer changes exist
		 * @param  {boolean} oReloadInfo.changesNeedReload - Indicates if changes (e.g. app descriptor changes) need hard reload
		 * @param  {boolean} oReloadInfo.initialDraftGotActivated - Indicates if a draft got activated and had a draft initially when entering UI adaptation
		 * @param  {boolean} oReloadInfo.activeVersion - Indicates the current active version
		 * @param  {sap.ushell.services.URLParsing} oReloadInfo.URLParsingService - The Unified Shell's internal URL parsing service
		 *
		 * @returns {boolean} <code>true</code> if a draft got activated and had a draft initially when entering UI adaptation
		 */
		getReloadMethod: function(oReloadInfo) {
			var oRELOAD = {
				NOT_NEEDED: "NO_RELOAD",
				RELOAD_PAGE: "HARD_RELOAD",
				VIA_HASH: "CROSS_APP_NAVIGATION"
			};
			oReloadInfo.reloadMethod = oRELOAD.NOT_NEEDED;

			// TODO fix app descriptor handling and reload behavior
			// TODO move changesNeedReload near flexState; set flag when saving change that needs a reload
			oReloadInfo.isDraftAvailable = oReloadInfo.isDraftAvailable || ReloadInfoAPI.hasVersionParameterWithValue({value: Version.Number.Draft}, oReloadInfo.URLParsingService);

			oReloadInfo.hasVersionUrlParameter = !!Utils.getParameter(Version.UrlParameter, oReloadInfo.URLParsingService);

			if (oReloadInfo.activeVersion !== Version.Number.Original) {
				oReloadInfo.activeVersionNotSelected = oReloadInfo.activeVersion && !ReloadInfoAPI.hasVersionParameterWithValue({value: oReloadInfo.activeVersion}, oReloadInfo.URLParsingService);
			}
			oReloadInfo.hasHigherLayerChanges = ReloadInfoAPI.hasMaxLayerParameterWithValue({value: oReloadInfo.layer}, oReloadInfo.URLParsingService);
			oReloadInfo.initialDraftGotActivated = ReloadInfoAPI.initialDraftGotActivated(oReloadInfo);
			if (oReloadInfo.initialDraftGotActivated) {
				oReloadInfo.isDraftAvailable = false;
			}
			oReloadInfo.allContexts = getInfoContextsSession(oReloadInfo.selector);
			if (oReloadInfo.changesNeedReload
				|| oReloadInfo.isDraftAvailable
				|| oReloadInfo.hasHigherLayerChanges
				|| oReloadInfo.initialDraftGotActivated
				|| oReloadInfo.activeVersionNotSelected
				|| oReloadInfo.allContexts
			) {
				oReloadInfo.reloadMethod = oRELOAD.RELOAD_PAGE;
				// always try cross app navigation (via hash); we only need a hard reload because of appdescr changes (changesNeedReload = true)
				if (!oReloadInfo.changesNeedReload && Utils.getUshellContainer()) {
					oReloadInfo.reloadMethod = oRELOAD.VIA_HASH;
				}
			}
			this.removeInfoSessionStorage(oReloadInfo.selector);
			return oReloadInfo;
		}
	};
	return ReloadInfoAPI;
});