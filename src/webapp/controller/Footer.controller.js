/**
 * This file is part of snailcrypt-jsclient. For more information visit
 * https://www snailcrypt.com
 * Copyright (C) 2022-2023  Richard Bäck <richard.baeck@icloud.com>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
	"snailcrypt-jsclient/facade/PopupFacade",
    "snailcrypt-jsclient/facade/LanguageChangerFacade"
], function (Controller,
             ResourceModel,
             PopupFacade,
             LanguageChangerFacade) {
  "use strict";

  return Controller.extend("snailcrypt-jsclient.controller.Main", {
    popupFacade: null,
    languageChangerFacade: LanguageChangerFacade.getInstance(),

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
        this.languageChangerFacade.changeLanguage("en");
    },

    onFlagDEPressed: function() {
        this.languageChangerFacade.changeLanguage("de");
    },
    
    onLightModePressed: function() {
		this.setLightMode();	
	},
	
	onDarkModePressed: function() {
		this.setDarkMode();
	}
  });
});
