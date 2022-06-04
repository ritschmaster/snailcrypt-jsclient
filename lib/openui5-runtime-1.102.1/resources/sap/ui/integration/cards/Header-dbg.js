/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/Core",
	"sap/base/util/isEmptyObject",
	"sap/f/cards/Header",
	"sap/f/cards/HeaderRenderer",
	"sap/m/library",
	"sap/ui/integration/util/BindingHelper",
	"sap/ui/model/json/JSONModel",
	"sap/ui/integration/util/LoadingProvider"
], function (
	Core,
	isEmptyObject,
	FHeader,
	FHeaderRenderer,
	mLibrary,
	BindingHelper,
	JSONModel,
	LoadingProvider
) {
	"use strict";

	// shortcut for sap.m.AvatarColor
	var AvatarColor = mLibrary.AvatarColor;

	/**
	 * Constructor for a new <code>Header</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * Displays general information in the header of the {@link sap.ui.integration.widgets.Card}.
	 * @extends sap.f.cards.Header
	 *
	 * @author SAP SE
	 * @version 1.102.1
	 *
	 * @constructor
	 * @private
	 * @since 1.77
	 * @alias sap.ui.integration.cards.Header
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var Header = FHeader.extend("sap.ui.integration.cards.Header", {

		constructor: function (mConfiguration, oActionsToolbar, oIconFormatter) {

			mConfiguration = mConfiguration || {};

			this._bIsEmpty = isEmptyObject(mConfiguration);

			var mSettings = {
				title: mConfiguration.title,
				titleMaxLines: mConfiguration.titleMaxLines,
				subtitle: mConfiguration.subTitle,
				subtitleMaxLines: mConfiguration.subTitleMaxLines,
				dataTimestamp: mConfiguration.dataTimestamp
			};

			if (mConfiguration.status && mConfiguration.status.text && !mConfiguration.status.text.format) {
				mSettings.statusText = mConfiguration.status.text;
			}

			if (mConfiguration.icon) {
				mSettings.iconSrc = mConfiguration.icon.src;
				mSettings.iconDisplayShape = mConfiguration.icon.shape;
				mSettings.iconInitials = mConfiguration.icon.text;
				mSettings.iconAlt = mConfiguration.icon.alt;
				mSettings.iconBackgroundColor = mConfiguration.icon.backgroundColor || (mConfiguration.icon.text ? AvatarColor.Accent6 : AvatarColor.Transparent);
			}

			if (mSettings.iconSrc) {
				mSettings.iconSrc = BindingHelper.formattedProperty(mSettings.iconSrc, function (sValue) {
					return oIconFormatter.formatSrc(sValue);
				});
			}

			mSettings.toolbar = oActionsToolbar;

			FHeader.call(this, mSettings);

			if (oActionsToolbar && oActionsToolbar.isA("sap.ui.integration.controls.ActionsToolbar")) {
				oActionsToolbar.attachVisibilityChange(this._handleToolbarVisibilityChange.bind(this));
			}
		},

		metadata: {
			library: "sap.ui.integration",

			aggregations: {
				/**
				 * The internally used LoadingProvider.
				 */
				_loadingProvider: { type: "sap.ui.core.Element", multiple: false, visibility: "hidden" }
			},
			associations: {
				/**
				 * Association with the parent Card that contains this filter.
				 */
				card: { type: "sap.ui.integration.widgets.Card", multiple: false }
			}
		},
		renderer: FHeaderRenderer
	});

	Header.prototype.init = function () {

		FHeader.prototype.init.call(this);

		this._bReady = false;

		this.setAggregation("_loadingProvider", new LoadingProvider());

		this._aReadyPromises = [];

		// So far the ready event will be fired when the data is ready. But this can change in the future.
		this._awaitEvent("_dataReady");
		this._awaitEvent("_actionHeaderReady");

		Promise.all(this._aReadyPromises).then(function () {
			this._bReady = true;
			this.fireEvent("_ready");
		}.bind(this));
	};

	Header.prototype.exit = function () {

		FHeader.prototype.exit.call(this);

		this._oServiceManager = null;
		this._oDataProviderFactory = null;

		if (this._oDataProvider) {
			this._oDataProvider.destroy();
			this._oDataProvider = null;
		}

		if (this._oActions) {
			this._oActions.destroy();
			this._oActions = null;
		}
	};

	/**
	 * @public
	 * @returns {boolean} If the header is ready or not.
	 */
	Header.prototype.isReady = function () {
		return this._bReady;
	};

	Header.prototype.isLoading = function () {
		var oLoadingProvider = this.getAggregation("_loadingProvider"),
			oCard = this.getCardInstance(),
			bCardLoading = oCard && oCard.isA("sap.ui.integration.widgets.Card") ? oCard.isLoading() : false;

		return !oLoadingProvider.isDataProviderJson() && (oLoadingProvider.getLoading() || bCardLoading);
	};

	Header.prototype._handleError = function (sLogMessage) {
		this.fireEvent("_error", { logMessage: sLogMessage });
	};

	Header.prototype._handleToolbarVisibilityChange = function (oEvent) {
		var bToolbarVisible = oEvent.getParameter("visible");

		if (this._bIsEmpty && this.getVisible() !== bToolbarVisible) {
			this.setVisible(bToolbarVisible);
		}
	};

	/**
	 * Await for an event which controls the overall "ready" state of the header.
	 *
	 * @private
	 * @param {string} sEvent The name of the event
	 */
	Header.prototype._awaitEvent = function (sEvent) {
		this._aReadyPromises.push(new Promise(function (resolve) {
			this.attachEventOnce(sEvent, function () {
				resolve();
			});
		}.bind(this)));
	};


	Header.prototype.setServiceManager = function (oServiceManager) {
		this._oServiceManager = oServiceManager;
		return this;
	};

	Header.prototype.setDataProviderFactory = function (oDataProviderFactory) {
		this._oDataProviderFactory = oDataProviderFactory;
		return this;
	};

	/**
	 * Sets a data settings to the header.
	 *
	 * @private
	 * @param {object} oDataSettings The data settings
	 */
	Header.prototype._setDataConfiguration = function (oDataSettings) {
		var oCard = this.getCardInstance(),
			sPath = "/",
			oModel;

		if (oDataSettings && oDataSettings.path) {
			sPath = oDataSettings.path;
		}

		this.bindObject(sPath);

		if (this._oDataProvider) {
			this._oDataProvider.destroy();
		}

		this._oDataProvider = oCard.getDataProviderFactory().create(oDataSettings, this._oServiceManager);

		this.getAggregation("_loadingProvider").setDataProvider(this._oDataProvider);

		if (oDataSettings && oDataSettings.name) {
			oModel = oCard.getModel(oDataSettings.name);
		} else if (this._oDataProvider) {
			oModel = new JSONModel();
			this.setModel(oModel);
		}

		if (this._oDataProvider) {
			this._oDataProvider.attachDataRequested(function () {
				this.showLoadingPlaceholders();
			}.bind(this));

			this._oDataProvider.attachDataChanged(function (oEvent) {
				oModel.setData(oEvent.getParameter("data"));
				this.onDataRequestComplete();
			}.bind(this));

			this._oDataProvider.attachError(function (oEvent) {
				this._handleError(oEvent.getParameter("message"));
				this.onDataRequestComplete();
			}.bind(this));

			this._oDataProvider.triggerDataUpdate();
		} else {
			this.fireEvent("_dataReady");
		}
	};

	Header.prototype.refreshData = function () {
		if (this._oDataProvider) {
			this._oDataProvider.triggerDataUpdate();
		}
	};

	/**
	 * @private
	 * @ui5-restricted
	 */
	Header.prototype.showLoadingPlaceholders = function () {
		this.getAggregation("_loadingProvider").setLoading(true);
	};

	/**
	 * @private
	 * @ui5-restricted
	 */
	Header.prototype.hideLoadingPlaceholders = function () {
		this.getAggregation("_loadingProvider").setLoading(false);
	};

	Header.prototype.onDataRequestComplete = function () {
		this.fireEvent("_dataReady");
		this.hideLoadingPlaceholders();
	};

	/**
	 * Gets the card instance of which this element is part of.
	 * @ui5-restricted
	 * @private
	 * @returns {sap.ui.integration.widgets.Card} The card instance.
	 */
	Header.prototype.getCardInstance = function () {
		return Core.byId(this.getCard());
	};

	return Header;
});
