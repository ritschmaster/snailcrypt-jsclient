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
  "sap/ui/core/HTML",
  "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
	"snailcrypt-jsclient/config",
	"snailcrypt-jsclient/facade/urlFacade"
], function (HTML,
             MobileLibrary,
             Dialog,
             Button,
             Text,
             config,
             UrlFacade) {
  "use strict";
  var DialogType = MobileLibrary.DialogType;
  var ButtonType = MobileLibrary.ButtonType;

  return function(oBundle) {
    var me = this;

    var urlFacade = new UrlFacade();

    me.showUnknownErrorPopup = function() {
      var unknownErrorDialog = new Dialog({
        type: DialogType.Message,
        title: oBundle.getText('popupFacade.unknownErrorTitle'),
        content: new Text({
          text: oBundle.getText('popupFacade.unknownErrorText')
        }),
        beginButton: new Button({
          type: ButtonType.Emphasized,
          text: oBundle.getText('popupFacade.buttonOK'),
          press: function () {
            unknownErrorDialog.close();
          }
        })
      });

      unknownErrorDialog.open();
    };

    me.showImpressumPopup = function() {
      $.ajax({
        url: urlFacade.getSnailcryptURL() + "impressum",
        type: "GET",
        headers: {
          'Accept-Language': sap.ui.getCore().getConfiguration().getLanguage().substring(0, 2)
        },
        success: function(impressumHTML) {
          var impressumDialog = new Dialog({
            type: DialogType.Message,
            title: oBundle.getText('popupFacade.impressumTitle'),
            content: new HTML({
              content: impressumHTML
            }),
            beginButton: new Button({
              type: ButtonType.Emphasized,
              text: oBundle.getText('popupFacade.buttonOK'),
              press: function () {
                impressumDialog.close();
              }
            })
          });

          impressumDialog.open();
        }
      });
    };

    me.showPrivacyPolicyPopup = function() {
      $.ajax({
        url: urlFacade.getSnailcryptURL() + "privacypolicy",
        type: "GET",
        headers: {
          'Accept-Language': sap.ui.getCore().getConfiguration().getLanguage().substring(0, 2)
        },
        success: function(privacyPolicyHTML) {
          var privacyPolicyDialog = new Dialog({
            type: DialogType.Message,
            title: oBundle.getText('popupFacade.privacyPolicyTitle'),
            content: new HTML({
              content: privacyPolicyHTML
            }),
            beginButton: new Button({
              type: ButtonType.Emphasized,
              text: oBundle.getText('popupFacade.buttonOK'),
              press: function () {
                privacyPolicyDialog.close();
              }
            }),
            afterOpen: function () {
              $('.impressum').click(function(event) {
                event.preventDefault();

                privacyPolicyDialog.close();

                me.showImpressumPopup();
              });
            }
          });

          privacyPolicyDialog.open();
        }
      });
    };
    
    me.showTimerLinkAsQrCode = function(timerLink) {
		window.QRCode.toDataURL(timerLink, function (error, url) {
			if (error) throw error
		
		  	var qrcodeDialog = new Dialog({
		        type: DialogType.Message,
		        title: oBundle.getText('popupFacade.timerLinkAsQrCodeTitle'),
		        content: new HTML({
	              content: "<img src=\"" + url + "\" />"
	            }),
		        beginButton: new Button({
		          type: ButtonType.Emphasized,
		          text: oBundle.getText('popupFacade.buttonClose'),
		          press: function () {
		            qrcodeDialog.close();
		          }
		        })
	        });					
	      	qrcodeDialog.open();
		});	
	};
	
	/**
	 * Showas a critical decryption error which effectively disables the entire application. 
	 */
	me.showUnableToExtractCipherFromURLErrorPopup = function(serverResponse) {
	  var errorDescription = oBundle.getText('popupFacade.unableToExtractCipherFromURLErrorText');
	  
	  if (serverResponse) {
		  errorDescription += '\n' 
		  + '\n'
		  + oBundle.getText('popupFacade.unableToExtractCipherFromURLErrorTitleFurtherDetails')
		  + '\n' + serverResponse;		  
	  }
		
      var unableToExtractCipherFromURLErrorPopup = new Dialog({
        type: DialogType.Message,
        title: oBundle.getText('popupFacade.unableToExtractCipherFromURLErrorTitle'),
        content: new Text({
          text: errorDescription
        }),
        escapeHandler: function() {
			/**
			 * Disable escaping as this is a critical error.
			 */
		}
      });

      unableToExtractCipherFromURLErrorPopup.open();
    };

    return me;
  };
});
