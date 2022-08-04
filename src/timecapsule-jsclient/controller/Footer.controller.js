sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
	"timecapsule-jsclient/facade/PopupFacade"
], function (Controller,
             ResourceModel,
             PopupFacade) {
  "use strict";

  return Controller.extend("timecapsule-jsclient.controller.Main", {
    popupFacade: null,

    onInit: function () {
      var i18nModel = new ResourceModel({
        bundleName: "timecapsule-jsclient.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");

      this.popupFacade = new PopupFacade(this.getView().getModel("i18n").getResourceBundle());
    },

    onFooterImpressumtPressed: function () {
      this.popupFacade.showImpressumPopup();
    },

    onFooterPrivacyPolicyPressed: function () {
      this.popupFacade.showPrivacyPolicyPopup();
    }
  });
});
