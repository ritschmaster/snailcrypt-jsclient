/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.uxap.ObjectPageSection.
sap.ui.define([
    "./ObjectPageSectionBase",
    "sap/ui/Device",
    "sap/m/Button",
	"sap/ui/core/ResizeHandler",
    "sap/ui/core/StashedControlSupport",
    "./ObjectPageSubSection",
    "./library",
    "sap/m/library",
    "./ObjectPageSectionRenderer"
], function(
	ObjectPageSectionBase,
	Device,
	Button,
	ResizeHandler,
	StashedControlSupport,
	ObjectPageSubSection,
	library,
	mobileLibrary,
	ObjectPageSectionRenderer
) {
	"use strict";

	// shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	/**
	 * Constructor for a new <code>ObjectPageSection</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * Top-level information container of an {@link sap.uxap.ObjectPageLayout}.
	 *
	 * The <code>ObjectPageSection</code>'s purpose is to aggregate subsections.
	 *
	 * <b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.
	 *
	 * @extends sap.uxap.ObjectPageSectionBase
	 *
	 * @constructor
	 * @public
	 * @alias sap.uxap.ObjectPageSection
	 * @since 1.26
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var ObjectPageSection = ObjectPageSectionBase.extend("sap.uxap.ObjectPageSection", /** @lends sap.uxap.ObjectPageSection.prototype */ {
		metadata: {

			library: "sap.uxap",
			properties: {

				/**
				 * Determines whether to display the Section title or not.
				 */
				showTitle: {type: "boolean", group: "Appearance", defaultValue: true},

				/**
				 * Determines whether the Section title is displayed in upper case.
				 */
				titleUppercase: {type: "boolean", group: "Appearance", defaultValue: true}
			},
			defaultAggregation: "subSections",
			aggregations: {

				/**
				 * The list of Subsections.
				 */
				subSections: {type: "sap.uxap.ObjectPageSubSection", multiple: true, singularName: "subSection"},

				_showHideAllButton: {type: "sap.m.Button", multiple: false, visibility: "hidden"},
				_showHideButton: {type: "sap.m.Button", multiple: false, visibility: "hidden"}
			},
			associations: {

				/**
				 * The most recently selected Subsection by the user.
				 */
				selectedSubSection: {type: "sap.uxap.ObjectPageSubSection", multiple: false}
			},
			designtime: "sap/uxap/designtime/ObjectPageSection.designtime"
		}
	});

	ObjectPageSection.MEDIA_RANGE = Device.media.RANGESETS.SAP_STANDARD;

	/**
	 * Returns the closest ObjectPageSection.
	 * @param  {sap.uxap.ObjectPageSectionBase} vSectionBase
	 * @returns {sap.uxap.ObjectPageSection} The closest ObjectPageSection
	 * @private
	 */
	ObjectPageSection._getClosestSection = function (vSectionBase) {
		var oSectionBase = (typeof vSectionBase === "string" && sap.ui.getCore().byId(vSectionBase)) || vSectionBase;
		return (oSectionBase instanceof ObjectPageSubSection) ? oSectionBase.getParent() : oSectionBase;
	};

	/**
	 * Retrieves the resource bundle for the <code>sap.uxap</code> library.
	 * @static
	 * @private
	 * @returns {Object} the resource bundle object
	 */
	ObjectPageSection._getLibraryResourceBundle = function() {
		return sap.ui.getCore().getLibraryResourceBundle("sap.uxap");
	};

	/**
	 * Returns the control name text.
	 *
	 * @override
	 * @return {string} control name text
	 * @protected
	 */
	ObjectPageSection.prototype.getSectionText = function (sValue) {
		return ObjectPageSection._getLibraryResourceBundle().getText("SECTION_CONTROL_NAME");
	};

	ObjectPageSection.prototype._expandSection = function () {
		ObjectPageSectionBase.prototype._expandSection.call(this)
			._updateShowHideAllButton(!this._thereAreHiddenSubSections());
	};

	ObjectPageSection.prototype.init = function () {
		ObjectPageSectionBase.prototype.init.call(this);
		this._sContainerSelector = ".sapUxAPObjectPageSectionContainer";
		this._onResizeRef = this._onResize.bind(this);
	};

	ObjectPageSection.prototype.exit = function () {
		this._detachMediaContainerWidthChange(this._updateImportance, this);

		if (this._iResizeHandlerId) {
			ResizeHandler.deregister(this._iResizeHandlerId);
			this._iResizeHandlerId = null;
		}
	};

	ObjectPageSection.prototype._onResize = function () {
		this._updateMultilineContent();
	};

	ObjectPageSection.prototype._getImportanceLevelToHide = function (oCurrentMedia) {
		var oObjectPage = this._getObjectPageLayout(),
			oMedia = oCurrentMedia || this._getCurrentMediaContainerRange(),
			bShowOnlyHighImportance = oObjectPage && oObjectPage.getShowOnlyHighImportance();

		return this._determineTheLowestLevelOfImportanceToShow(oMedia.name, bShowOnlyHighImportance);
	};

	ObjectPageSection.prototype._updateImportance = function (oCurrentMedia) {
		var oObjectPage = this._getObjectPageLayout(),
			sImportanceLevelToHide = this._getImportanceLevelToHide(oCurrentMedia),
			oHeaderDOM = this.bOutput && this.getDomRef("header");

		this.getSubSections().forEach(function (oSubSection) {
			oSubSection._applyImportanceRules(sImportanceLevelToHide);
		});

		this._applyImportanceRules(sImportanceLevelToHide);
		this._updateShowHideAllButton(false);

		oHeaderDOM && oHeaderDOM.classList.toggle("sapUxAPObjectPageSectionHeaderHidden", !this._isTitleVisible());
		oHeaderDOM && oHeaderDOM.setAttribute("aria-hidden", !this._isTitleVisible());

		if (oObjectPage && this.getDomRef()) {
			oObjectPage._requestAdjustLayout();
		}
	};

	ObjectPageSection.prototype._updateMultilineContent = function () {
		var aSubSections = this.getSubSections(),
			oFirstSubSection = aSubSections.find(function(oSubSection) {
				return oSubSection.getVisible();
			});

		if (oFirstSubSection && oFirstSubSection.getDomRef()) {
			var sTitleDomId = oFirstSubSection._getTitleDomId(),
				iTitleWidth,
				iActionsWidth,
				iHeaderWidth,
				bMultiLine,
				oFirstSubSectionTitle;

				// When there are more than one SubSections with no title, sTitleDomId=false.
				// However, we are not interested in this case anyway, as there is no promoted SubSection
				if (!sTitleDomId) {
					return;
				}

				oFirstSubSectionTitle = document.getElementById(oFirstSubSection._getTitleDomId());
				// Title is hidden for the first SubSection of the first Section
				iTitleWidth = oFirstSubSectionTitle ? oFirstSubSectionTitle.offsetWidth : 0;
				iActionsWidth = this.$().find(".sapUxAPObjectPageSubSectionHeaderActions").width();
				iHeaderWidth = this.$("header").width();
				bMultiLine = (iTitleWidth + iActionsWidth) > iHeaderWidth;

			oFirstSubSection._toggleMultiLineSectionContent(bMultiLine);
		}
	};

	ObjectPageSection.prototype._determineTheLowestLevelOfImportanceToShow = function (sMedia, bShowOnlyHighImportance) {
		if (bShowOnlyHighImportance || sMedia === "Phone") {
			return library.Importance.High;
		}
		if (sMedia === "Tablet") {
			return library.Importance.Medium;
		}

		return library.Importance.Low;
	};

	ObjectPageSection.prototype.connectToModels = function () {
		this.getSubSections().forEach(function (oSubSection) {
			oSubSection.connectToModels();
		});
	};

	ObjectPageSection.prototype._allowPropagationToLoadedViews = function (bAllow) {
		this.getSubSections().forEach(function (oSubSection) {
			oSubSection._allowPropagationToLoadedViews(bAllow);
		});
	};

	ObjectPageSection.prototype.onBeforeRendering = function () {
		ObjectPageSectionBase.prototype.onBeforeRendering.call(this);

		this._detachMediaContainerWidthChange(this._updateImportance, this);

		this._updateImportance();
	};

	ObjectPageSection.prototype.onAfterRendering = function () {
		this._updateMultilineContent();
		this._attachMediaContainerWidthChange(this._updateImportance, this);
		this._iResizeHandlerId = ResizeHandler.register(this, this._onResizeRef);
	};

	/**
	 * Determines if the <code>ObjectPageSection</code> title is visible.
	 * @private
	 * @returns {boolean}
	 */
	ObjectPageSection.prototype._isTitleVisible = function () {
		return (this.getShowTitle() && this._getInternalTitleVisible())
		|| this._getShouldDisplayExpandCollapseButton()
		|| this._getShouldDisplayShowHideAllButton();
	};

	/**
	 * set subsections focus rules
	 * @private
	 * @returns {*} this
	 */
	ObjectPageSection.prototype._setSubSectionsFocusValues = function () {
		var aSubSections = this._getVisibleSubSections() || [],
			sLastSelectedSubSectionId = this.getSelectedSubSection(),
			bPreselectedSection;

		if (aSubSections.length === 0) {
			return this;
		}

		if (aSubSections.length === 1) {
			aSubSections[0]._setToFocusable(false);
			return this;
		}

		aSubSections.forEach(function (oSubsection) {
			if (sLastSelectedSubSectionId === oSubsection.getId()) {
				oSubsection._setToFocusable(true);
				bPreselectedSection = true;
			} else {
				oSubsection._setToFocusable(false);
			}
		});

		if (!bPreselectedSection) {
			aSubSections[0]._setToFocusable(true);
		}

		return this;
	};

	ObjectPageSection.prototype._disableSubSectionsFocus = function () {
		var aSubSections = this.getSubSections() || [];

		aSubSections.forEach(function (oSubsection) {
			oSubsection._setToFocusable(false);
		});

		return this;
	};

	ObjectPageSection.prototype._thereAreHiddenSubSections = function () {
		return this.getSubSections().some(function (oSubSection) {
			return oSubSection._getIsHidden();
		});
	};

	ObjectPageSection.prototype._updateShowHideSubSections = function (bHide) {
		this.getSubSections().forEach(function (oSubSection) {
			if (bHide && oSubSection._shouldBeHidden()) {
				oSubSection._updateShowHideState(true);
			} else if (!bHide) {
				oSubSection._updateShowHideState(false);
			}
		});
	};

	ObjectPageSection.prototype._getShouldDisplayShowHideAllButton = function () {
		return this.getSubSections().some(function (oSubSection) {
			return oSubSection._shouldBeHidden();
		});
	};

	ObjectPageSection.prototype._getShouldDisplayExpandCollapseButton = function () {
		return this._getIsHidden();
	};

	ObjectPageSection.prototype._showHideContentAllContent = function () {
		var bShouldShowSubSections = this._thereAreHiddenSubSections();

		if (this._getIsHidden() && bShouldShowSubSections) {
			this._updateShowHideState(false);
		}

		this._updateShowHideSubSections(!bShouldShowSubSections);
		this._updateShowHideAllButton(bShouldShowSubSections);
	};

	ObjectPageSection.prototype._updateShowHideState = function (bHide) {
		if (this._getIsHidden() === bHide) {
			return this;
		}

		this._updateShowHideButton(bHide);
		this._getShowHideAllButton().setVisible(this._getShouldDisplayShowHideAllButton());

		return ObjectPageSectionBase.prototype._updateShowHideState.call(this, bHide);
	};

	ObjectPageSection.prototype._updateShowHideAllButton = function (bHide) {
		this._getShowHideAllButton()
			.setVisible(this._getShouldDisplayShowHideAllButton())
			.setText(this._getShowHideAllButtonText(bHide));
	};

	ObjectPageSection.prototype._getVisibleSubSections = function () {
		return this.getSubSections().filter(function (oSubSection) {
			return oSubSection.getVisible() && oSubSection._getInternalVisible();
		});
	};

	ObjectPageSection.prototype._getShowHideAllButton = function () {
		if (!this.getAggregation("_showHideAllButton")) {
			this.setAggregation("_showHideAllButton", new Button({
				visible: this._getShouldDisplayShowHideAllButton(),
				text: this._getShowHideAllButtonText(!this._thereAreHiddenSubSections()),
				press: this._showHideContentAllContent.bind(this),
				type: ButtonType.Transparent
			}).addStyleClass("sapUxAPSectionShowHideButton"), true); // this is called from the renderer, so suppress invalidate
		}

		return this.getAggregation("_showHideAllButton");
	};

	ObjectPageSection.prototype._getShowHideButtonText = function (bHide) {
		return ObjectPageSection._getLibraryResourceBundle().getText(bHide ? "HIDE" : "SHOW");
	};

	ObjectPageSection.prototype._getShowHideAllButtonText = function (bHide) {
		return ObjectPageSection._getLibraryResourceBundle().getText(bHide ? "HIDE_ALL" : "SHOW_ALL");
	};

	ObjectPageSection.prototype._updateShowHideButton = function (bHide) {
		this._getShowHideButton()
			.setVisible(this._shouldBeHidden())
			.setText(this._getShowHideButtonText(!bHide));
	};

	ObjectPageSection.prototype._getShowHideButton = function () {
		if (!this.getAggregation("_showHideButton")) {
			this.setAggregation("_showHideButton", new Button({
				visible: this._shouldBeHidden(),
				text: this._getShowHideButtonText(!this._getIsHidden()),
				press: this._showHideContent.bind(this),
				type: ButtonType.Transparent
			}).addStyleClass("sapUxAPSectionShowHideButton"), true); // this is called from the renderer, so suppress invalidate
		}

		return this.getAggregation("_showHideButton");
	};

	StashedControlSupport.mixInto(ObjectPageSection);

	return ObjectPageSection;
});
