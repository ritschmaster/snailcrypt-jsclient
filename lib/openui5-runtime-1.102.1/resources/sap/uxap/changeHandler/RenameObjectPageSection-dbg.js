/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/Utils",
	"sap/base/Log",
	"sap/ui/fl/changeHandler/BaseRename"
], function (
	Utils,
	Log,
	BaseRename
) {
	"use strict";

	/**
	 * ObjectPageSection Change Handler for Rename
	 *
	 * @constructor
	 * @alias sap.uxap.changeHandler.RenameObjectPageSection
	 * @author SAP SE
	 * @version 1.102.1
	 * @experimental Since 1.50
	 */

	var mRenameSettings = {
		propertyName: "title",
		changePropertyName: "newText",
		translationTextType: "XGRP"
	};

	var RenameObjectPageSection = BaseRename.createRenameChangeHandler(mRenameSettings);

	RenameObjectPageSection._getControlForRename = function (oControl, oModifier) {
		var aSubSections,
			vTitle;

		return Promise.resolve()
			.then(function() {
				return oModifier.getAggregation(oControl, "subSections");
			})
			.then(function(aSubSectionsLocal) {
				aSubSections = aSubSectionsLocal;

				if (aSubSections.length !== 1) {
					// if there are no or more than one sub sections, the following
					// code should not execute and oControl should be returned
					return [];
				}

				return Promise.all([oModifier.getPropertyBindingOrProperty(aSubSections[0], "title"),
					oModifier.getProperty(oModifier.getParent(oControl), "subSectionLayout")]);
			})
			.then(function(aProperties) {
				// due to specific logic in the Object Page Layout, the title of the Section is
				// taken from its SubSection in case it is only one no matter if the Section has title itself.
				vTitle = aProperties[0];

				if (aSubSections
					&& aSubSections.length === 1
					&& vTitle
					&& (typeof vTitle === "object") || (typeof vTitle === "string" && vTitle.trim() !== "")
					&& aProperties[1] === "TitleOnTop"
				) {
					return aSubSections[0];
				}
				return oControl;
			});
	};

	RenameObjectPageSection.applyChange = function (oChange, oControl, mPropertyBag) {
		var oModifier = mPropertyBag.modifier;
		var sPropertyName = mRenameSettings.propertyName;
		var oChangeDefinition = oChange.getDefinition();
		var sText = oChangeDefinition.texts[mRenameSettings.changePropertyName];
		var sValue = sText.value;
		return RenameObjectPageSection._getControlForRename(oControl, oModifier)
			.then(function(oControlToBeRenamed) {
				if (typeof sValue === "string" && sValue.trim() === "") {
					throw new Error("Change cannot be applied as ObjectPageSubSection's title cannot be empty: ["
						+ oChangeDefinition.layer + "]" + oChangeDefinition.namespace + "/" + oChangeDefinition.fileName + "." + oChangeDefinition.fileType);
				}

				if (oChangeDefinition.texts && sText && typeof (sValue) === "string") {
					return Promise.resolve()
						.then(function(){
							return oModifier.getPropertyBindingOrProperty(oControlToBeRenamed, sPropertyName);
						})
						.then(function(oBindingOrProperty) {
							oChange.setRevertData(oBindingOrProperty);
							oModifier.setPropertyBindingOrProperty(oControlToBeRenamed, sPropertyName, sValue);
							return true;
						});
				} else {
					Log.error("Change does not contain sufficient information to be applied: [" + oChangeDefinition.layer + "]" + oChangeDefinition.namespace + "/" + oChangeDefinition.fileName + "." + oChangeDefinition.fileType);
					//however subsequent changes should be applied
				}
			});
	};

	RenameObjectPageSection.revertChange = function (oChange, oControl, mPropertyBag) {
		var vOldText = oChange.getRevertData(),
			oModifier = mPropertyBag.modifier,
			sPropertyName = mRenameSettings.propertyName;
		return RenameObjectPageSection._getControlForRename(oControl, oModifier)
			.then(function(oControlToBeReverted){
				if (vOldText || vOldText === "") {
					oModifier.setPropertyBindingOrProperty(oControlToBeReverted, sPropertyName, vOldText);
					oChange.resetRevertData();
					return true;
				} else {
					Log.error("Change doesn't contain sufficient information to be reverted. Most Likely the Change didn't go through applyChange.");
				}
			});
	};


	return RenameObjectPageSection;
},
/* bExport= */true);
