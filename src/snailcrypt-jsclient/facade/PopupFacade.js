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

    return me;
  };
});
