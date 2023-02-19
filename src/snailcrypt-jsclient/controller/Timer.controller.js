sap.ui.define([
    "sap/base/strings/formatMessage",
    "sap/ui/core/library",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
	"snailcrypt-jsclient/config",
	"snailcrypt-jsclient/facade/urlFacade",
	"snailcrypt-jsclient/facade/PopupFacade",
	"snailcrypt-jsclient/client/V1Client"
], function (FormatMessage,
             CoreLibrary,
             DateFormat,
             Controller,
             ResourceModel,
             MobileLibrary,
             Dialog,
             Button,
             Text,
             config,
             UrlFacade,
             PopupFacade,
             SnailcryptFacade) {
    "use strict";
    var ValueState = CoreLibrary.ValueState;
    var DialogType = MobileLibrary.DialogType;
    var ButtonType = MobileLibrary.ButtonType;

    return Controller.extend("snailcrypt-jsclient.controller.Timer", {
        urlFacade:  new UrlFacade(),
        popupFacade: null,
        snailcryptFacade: new SnailcryptFacade(),

        updateTimerInterval: null,

        extractCipherFromURL: function() {
            var urlSearchParams = new URLSearchParams(window.location.search);
            var cipher = urlSearchParams.get('c');

            return cipher;
        },

        onInit: function() {
            var i18nModel = new ResourceModel({
                bundleName: "snailcrypt-jsclient.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");

            this.popupFacade = new PopupFacade(this.getView().getModel("i18n").getResourceBundle());

            var appLink = this.byId('appLink');
            appLink.setHref(this.urlFacade.getSnailcryptAppURL());

            this.decrypt();
        },

        decrypt: function() {
            const me = this;

            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var cipher = me.extractCipherFromURL();
            if (cipher) {
                var messageAvailableLabel = me.byId('messageAvailableLabel');
                var decryptedLabel = me.byId('decryptedLabel');
                var decryptedTextArea = me.byId('decryptedTextArea');
                var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
                var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');

                me.snailcryptFacade.decrypt(
                    cipher,
                    /**
                     * onSucess
                     */
                    function(cleartext, lockDate) {
                        decryptedDateTimePicker.setValue(lockDate);
                        decryptedTextArea.setValue(cleartext);


                        messageAvailableLabel.setVisible(true);
                        decryptedLabel.setVisible(true);
                        decryptedTextArea.setVisible(true);
                    },
                    /**
                     * onCipherError
                     */
                    function(exceptionText) {
                        alert(exceptionText);
                    },
                    /**
                     * onNotReleasedYet
                     */
                    function(lockDate) {
                        decryptedDateTimePicker.setValue(lockDate);

                        me.updateTimerLabel();
                        me.updateTimerInterval = setInterval(function() { me.updateTimerLabel() }, 1000);
                    },
                    /**
                     * onHttpError
                     */
                    function(request) {
                        var error = request.responseJSON;
                        alert('http error: ' + error);
                    });

            } else {
                // TODO throw error
            }
        },

        updateTimerLabel: function() {
            const me = this;

            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var timerLabel = me.byId('timerLabel');
            var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');
            var decryptedDateTime = new Date(decryptedDateTimePicker.getValue());

            var nowDate = new Date();

            var diffSecondsTotal = (decryptedDateTime - nowDate) / 1000;

            if (diffSecondsTotal > 0) {
                var diffDays    = Math.floor(diffSecondsTotal / 60 / 60 / 24);
                var diffHours   = Math.floor((diffSecondsTotal
                                              - diffDays * 60 * 60 * 24)
                                             / 60 / 60 );
                var diffMinutes = Math.floor((diffSecondsTotal
                                              - diffDays * 60 * 60 * 24
                                              - diffHours * 60 * 60)
                                             / 60 );
                var diffSeconds = Math.floor((diffSecondsTotal
                                              - diffDays * 60 * 60 * 24
                                              - diffHours * 60 * 60
                                              - diffMinutes * 60));

                var diffText = oBundle.getText('timer.timeLeft',
                                               [ diffDays, diffHours, diffMinutes, diffSeconds]);

                timerLabel.setText(diffText);
            } else {
				/**
				 * Initialize and hide timer label
				 */
                timerLabel.setText('');
                timerLabel.setVisible(false);
                                
                clearInterval(me.updateTimerInterval);
                me.decrypt();
            }
        }
    });
});
