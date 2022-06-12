sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "timecapsule-jsclient.view.Main"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
