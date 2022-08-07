sap.ui.define([
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
	"snailcrypt-jsclient/facade/SnailcryptFacade"
], function (CoreLibrary,
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

    return Controller.extend("snailcrypt-jsclient.controller.Main", {
        urlFacade:  new UrlFacade(),
        popupFacade: null,
        snailcryptFacade: new SnailcryptFacade(),

        onInit: function () {
            var i18nModel = new ResourceModel({
                bundleName: "snailcrypt-jsclient.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");

            this.popupFacade = new PopupFacade(this.getView().getModel("i18n").getResourceBundle());
        },

        initEncryptedData: function() {
            const me = this;

            var encryptedLabel = me.byId('encryptedLabel');
            encryptedLabel.setVisible(false);

            var encryptedTextArea = me.byId('encryptedTextArea');
            encryptedTextArea.setVisible(false);

            var timerTitle = me.byId('timerTitle');
            timerTitle.setVisible(false);

            var timerHelp1 = me.byId('timerHelp1');
            timerHelp1.setVisible(false);

            var timerHelp2 = me.byId('timerHelp2');
            timerHelp2.setVisible(false);

            var timerLinkLabel = me.byId('timerLinkLabel');
            timerLinkLabel.setVisible(false);

            var timerLink = me.byId('timerLink');
            timerLink.setVisible(false);

            var timerLinkCopyButton = me.byId('timerLinkCopyButton');
            timerLinkCopyButton.setVisible(false);

            var timerWarningLabel = me.byId('timerWarningLabel');
            timerWarningLabel.setVisible(false);

            var timerErrorLabel = me.byId('timerErrorLabel');
            timerErrorLabel.setVisible(false);
        },

        showLockDateInPastErrorMessage: function(lockDate) {
           var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var lockDateInPastErrorDialog = new Dialog({
                type: DialogType.Message,
                title: oBundle.getText('main.lockDateInPastTitle'),
                content: new Text({
                    text: oBundle.getText('main.lockDateInPastText',
                                          [ DateFormat.getDateTimeInstance({
                                              style: "short"
                                          }).format(new Date(lockDate)) ])
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: oBundle.getText('main.buttonOK'),
                    press: function () {
                        lockDateInPastErrorDialog.close();
                    }
                })
            });

            lockDateInPastErrorDialog.open();
        },

        showTooGranularErrorMessage: function(lockDate) {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var tooGranularErrorDialog = new Dialog({
                type: DialogType.Message,
                title: oBundle.getText('main.expirationDateDeniedTitle'),
                content: new Text({
                    text: oBundle.getText('main.expirationDateDeniedText',
                                          [ DateFormat.getDateTimeInstance({
                                              style: "short"
                                          }).format(new Date(lockDate)) ])
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: oBundle.getText('main.buttonOK'),
                    press: function () {
                        tooGranularErrorDialog.close();
                    }
                })
            });

            tooGranularErrorDialog.open();
        },

        showNotReleasedYetMessage: function(lockDate) {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var notAvailableYetDialog = new Dialog({
                type: DialogType.Message,
                title: oBundle.getText('main.notAvailableYetTitle'),
                content: new Text({
                    text: oBundle.getText('main.notAvailableYetText',
                                          [ DateFormat.getDateTimeInstance({
                                              style: "short"
                                          }).format(new Date(lockDate)) ])
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: oBundle.getText('main.buttonOK'),
                    press: function () {
                        notAvailableYetDialog.close();
                    }
                })
            });

            notAvailableYetDialog.open();
        },

        onCookieMessageStripClose: function(event) {
            even.getSource().close();
        },

        onEncryptionDateTimePickerChanged: function () {
            const me = this;

            var encryptionDateTimePicker = this.byId("encryptionDateTimePicker");
            if (encryptionDateTimePicker.getValue()) {
                encryptionDateTimePicker.setValueState(ValueState.Success);
                encryptionDateTimePicker.closeValueStateMessage();
            }
        },

        onTextToBeEncrytedChanged: function() {
            const me = this;

            var toBeEncryptedTextArea = this.byId("toBeEncryptedTextArea");
            if (toBeEncryptedTextArea.getValue()) {
                toBeEncryptedTextArea.setValueState(ValueState.Success);
                toBeEncryptedTextArea.closeValueStateMessage();
            }

            me.initEncryptedData();
        },

        onTextToBeDecryptedChanged: function () {
            const me = this;

            var toBeDecryptedTextArea = me.byId("toBeDecryptedTextArea");
            var decryptedLabel = me.byId('decryptedLabel');
            var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
            var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');
            var decryptedTextArea = me.byId('decryptedTextArea');

            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();
            }
            decryptedTextArea.setVisible(false);
            decryptedLabel.setVisible(false);
            decryptedDateTimeLabel.setVisible(false);
            decryptedDateTimePicker.setVisible(false);
        },

        onEncryptPressed: function () {
            const me = this;

            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var error = false;

            var toBeEncryptedTextArea = this.byId("toBeEncryptedTextArea");
            if (toBeEncryptedTextArea.getValue()) {
                toBeEncryptedTextArea.setValueState(ValueState.Success);
                toBeEncryptedTextArea.closeValueStateMessage();
            } else {
                toBeEncryptedTextArea.setValueState(ValueState.Error);
                toBeEncryptedTextArea.setValueStateText(oBundle.getText('main.obligatoryField'));
                toBeEncryptedTextArea.openValueStateMessage();
                error = true;
            }

            var encryptionDateTimePicker = this.byId("encryptionDateTimePicker");
            if (encryptionDateTimePicker.getValue().length > 0) {
                encryptionDateTimePicker.setValueState(ValueState.Success);
                encryptionDateTimePicker.closeValueStateMessage();
            } else {
                encryptionDateTimePicker.setValueState(ValueState.Error);
                encryptionDateTimePicker.setValueStateText(oBundle.getText('main.obligatoryField'));
                encryptionDateTimePicker.openValueStateMessage();
                error = true;
            }

            if (!error) {
                var lockDate = encryptionDateTimePicker.getValue();
                var encryptedLabel = me.byId('encryptedLabel');
                var encryptedTextArea = me.byId('encryptedTextArea');
                var timerTitle = me.byId('timerTitle');
                var timerHelp1 = me.byId('timerHelp1');
                var timerHelp2 = me.byId('timerHelp2');
                var timerLinkLabel = me.byId('timerLinkLabel');
                var timerLink = me.byId('timerLink');
                var timerLinkCopyButton = me.byId('timerLinkCopyButton');
                var timerWarningLabel = me.byId('timerWarningLabel');
                var timerErrorLabel = me.byId('timerErrorLabel');

                me.snailcryptFacade.encrypt(
                    toBeEncryptedTextArea.getValue(),
                    lockDate,
                    /**
                     * onSuccess
                     */
                    function(cipher) {
                        /**
                         * Place and show ecnrypted text
                         */
                        encryptedTextArea.setValue(cipher);
                        encryptedLabel.setVisible(true);
                        encryptedTextArea.setVisible(true);

                        /**
                         * Retrieve URL and show timer (label)
                         */
                        var href = me.urlFacade.getSnailcryptTimerURL(cipher);
                        timerTitle.setVisible(true);
                        timerHelp1.setVisible(true);
                        timerHelp2.setVisible(true);

                        if (href.length > 8000) {
                            /**
                             * Error: URL too long
                             */
                            timerErrorLabel.setVisible(true);
                        } else {
                            /**
                             * OK: Place URL and show it
                             */
                            timerLinkLabel.setVisible(true);

                            timerLink.setHref(href);
                            timerLink.setVisible(true);

                            timerLinkCopyButton.setVisible(true);

                            if (href.length > 2000) {
                                /**
                                 * Warning: URL might be too long
                                 */
                                timerWarningLabel.setVisible(true);
                            } else {
                                /**
                                 * OK
                                 */
                                timerWarningLabel.setVisible(false);
                            }
                        }
                    },
                    /**
                     * onEncryptionError
                     */
                    function() {
                        me.popupFacade.showUnknownErrorPopup();
                    },
                    /**
                     * onHttpError
                     */
                    function(request) {
                        var error = request.responseJSON;
                        if (error.code) {
                            switch (error.code) {
                            case 2:
                                me.showLockDateInPastErrorMessage(lockDate);
                                break;

                            case 5:
                                me.showTooGranularErrorMessage(lockDate);
                                break;

                            default:
                                    me.popupFacade.showUnknownErrorPopup();
                            }
                        } else {
                            me.popupFacade.showUnknownErrorPopup();
                        }
                    });
            }
        },

        onDecryptPressed: function() {
            const me = this;

            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var error = false;

            var toBeDecryptedTextArea = me.byId("toBeDecryptedTextArea");
            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();
            } else {
                toBeDecryptedTextArea.setValueState(ValueState.Error);
                toBeDecryptedTextArea.setValueStateText(oBundle.getText('main.obligatoryField'));
                toBeDecryptedTextArea.openValueStateMessage();
                error = true;
            }

            if (!error) {
                me.snailcryptFacade.decrypt(
                    toBeDecryptedTextArea.getValue(),
                    /**
                     * onSucess
                     */
                    function(cleartext, lockDate) {
                        var decryptedLabel = me.byId('decryptedLabel');
                        var decryptedTextArea = me.byId('decryptedTextArea');
                        var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
                        var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');

                        decryptedDateTimePicker.setValue(lockDate);
                        decryptedTextArea.setValue(cleartext);

                        decryptedLabel.setVisible(true);
                        decryptedTextArea.setVisible(true);
                        decryptedDateTimeLabel.setVisible(true);
                        decryptedDateTimePicker.setVisible(true);
                    },
                    /**
                     * onCipherError
                     */
                    function(exceptionText) {
                        toBeDecryptedTextArea.setValueState(ValueState.Error);
                        toBeDecryptedTextArea.setValueStateText(exceptionText);
                        toBeDecryptedTextArea.openValueStateMessage();
                    },
                    /**
                     * onNotReleasedYet
                     */
                    function(lockDate) {
                        me.showNotReleasedYetMessage(lockDate);
                    },
                    /**
                     * onHttpError
                     */
                    function(request) {
                        var error = request.responseJSON;
                        me.popupFacade.showUnknownErrorPopup();
                    });
            }
        },

        onTimerLinkCopyPressed: function() {
            var timerLink = this.byId('timerLink');
            var href = timerLink.getHref();
            navigator.clipboard.writeText(href);
        }
    });
});
