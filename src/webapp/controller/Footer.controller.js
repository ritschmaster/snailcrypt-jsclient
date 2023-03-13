sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
	"snailcrypt-jsclient/facade/PopupFacade"
], function (Controller,
             ResourceModel,
             PopupFacade) {
  "use strict";

  return Controller.extend("snailcrypt-jsclient.controller.Main", {
    popupFacade: null,

    onInit: function () {
	  var me = this;
		
      var i18nModel = new ResourceModel({
        bundleName: "snailcrypt-jsclient.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");

      this.popupFacade = new PopupFacade(this.getView().getModel("i18n").getResourceBundle());
      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    	this.setDarkMode();	
	  }
	  
	  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		if (event.matches) {
		  	this.setDarkMode();		
		} else {
			this.setLightMode();
		}
	  });
    },
    
    setLightMode: function() {
		sap.ui.getCore().applyTheme("sap_belize");	
	},
	
	setDarkMode: function() {
		sap.ui.getCore().applyTheme("sap_fiori_3_dark");		
	},

    onFooterImpressumtPressed: function () {
      this.popupFacade.showImpressumPopup();
    },

    onFooterPrivacyPolicyPressed: function () {
      this.popupFacade.showPrivacyPolicyPopup();
    },

    onFlagUKPressed: function() {
      sap.ui.getCore().getConfiguration().setLanguage("en");
    },

    onFlagDEPressed: function() {
      sap.ui.getCore().getConfiguration().setLanguage("de");
    },
    
    onLightModePressed: function() {
		this.setLightMode();	
	},
	
	onDarkModePressed: function() {
		this.setDarkMode();
	}
  });
});
