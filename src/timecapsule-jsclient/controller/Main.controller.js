sap.ui.define([
    "sap/ui/core/library",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
	"timecapsule-jsclient/config",
	"timecapsule-jsclient/facade/TimecapsuleFacade"
], function (CoreLibrary,
             DateFormat,
             Controller,
             MobileLibrary,
             Dialog,
             Button,
             Text,
             config,
             TimecapsuleFacade) {
    "use strict";
    var ValueState = CoreLibrary.ValueState;
    var DialogType = MobileLibrary.DialogType;
    var ButtonType = MobileLibrary.ButtonType;

    return Controller.extend("timecapsule-jsclient.controller.Main", {
        timecapsuleFacade: new TimecapsuleFacade(),

        initEncryptedData: function() {
            const me = this;


            var encryptedLabel = me.byId('encryptedLabel');
            encryptedLabel.setVisible(false);

            var encryptedTextArea = me.byId('encryptedTextArea');
            encryptedTextArea.setVisible(false);

            var timerLink = me.byId('timerLink');
            timerLink.setVisible(false);
        },

        showUnknownErrorMessage: function() {
            var unknownErrorDialog = new Dialog({
                type: DialogType.Message,
                title: "Error",
                content: new Text({
                    text: "An unknown/unexpected error occurred."
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: "OK",
                    press: function () {
                        unknownErrorDialog.close();
                    }
                })
            });

            unknownErrorDialog.open();
        },

        showTooGranularErrorMessage: function(lockDate) {
            var notAvailableYetDialog = new Dialog({
                type: DialogType.Message,
                title: "Expiration date denied",
                content: new Text({
                    text: "The timecapsule server's configuration does not allow a requested expiration date at "
                        + DateFormat.getDateTimeInstance({
                            style: "short"
                        }).format(new Date(lockDate))
                        + "!"
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: "OK",
                    press: function () {
                        notAvailableYetDialog.close();
                    }
                })
            });

            notAvailableYetDialog.open();
        },

        showNotReleasedYetMessage: function(lockDate) {
            var notAvailableYetDialog = new Dialog({
                type: DialogType.Message,
                title: "Not available yet",
                content: new Text({
                    text: "The key to decrypt your message has not been released yet. You have to wait until "
                        + DateFormat.getDateTimeInstance({
                            style: "short"
                        }).format(new Date(lockDate))
                        + "!"
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: "OK",
                    press: function () {
                        notAvailableYetDialog.close();
                    }
                })
            });

            notAvailableYetDialog.open();
        },

        onInit: function() {
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

            var error = false;

            var toBeEncryptedTextArea = this.byId("toBeEncryptedTextArea");
            if (toBeEncryptedTextArea.getValue()) {
                toBeEncryptedTextArea.setValueState(ValueState.Success);
                toBeEncryptedTextArea.closeValueStateMessage();
            } else {
                toBeEncryptedTextArea.setValueState(ValueState.Error);
                toBeEncryptedTextArea.setValueStateText("Obligatory field");
                toBeEncryptedTextArea.openValueStateMessage();
                error = true;
            }

            var encryptionDateTimePicker = this.byId("encryptionDateTimePicker");
            if (encryptionDateTimePicker.getValue().length > 0) {
                encryptionDateTimePicker.setValueState(ValueState.Success);
                encryptionDateTimePicker.closeValueStateMessage();
            } else {
                encryptionDateTimePicker.setValueState(ValueState.Error);
                encryptionDateTimePicker.setValueStateText("Obligatory field");
                encryptionDateTimePicker.openValueStateMessage();
                error = true;
            }

            if (!error) {
                var lockDate = encryptionDateTimePicker.getValue();
                var encryptedLabel = me.byId('encryptedLabel');
                var encryptedTextArea = me.byId('encryptedTextArea');
                var timerLink = me.byId('timerLink');
                var timerWarningLabel = me.byId('timerWarningLabel');

                me.timecapsuleFacade.encrypt(
                    toBeEncryptedTextArea.getValue(),
                    lockDate,
                    /**
                     * onSuccess
                     */
                    function(cipher) {
                        var href = me.timecapsuleFacade.getTimecapsuleTimerURL(cipher);

                        encryptedTextArea.setValue(cipher);
                        timerLink.setHref(href);

                        encryptedLabel.setVisible(true);
                        encryptedTextArea.setVisible(true);
                        timerLink.setVisible(true);

                        if (href.length > 2000) {
                            timerWarningLabel.setVisible(true);
                        } else {
                            timerWarningLabel.setVisible(false);
                        }
                    },
                    /**
                     * onEncryptionError
                     */
                    function() {
                        me.showUnknownErrorMessage();
                    },
                    /**
                     * onHttpError
                     */
                    function(request) {
                        var error = request.responseJSON;
                        if (error.code) {
                            switch (error.code) {
                            case 5:
                                me.showTooGranularErrorMessage(lockDate);
                                break;

                            default:
                                me.showUnknownErrorMessage();
                            }
                        } else {
                            me.showUnknownErrorMessage();
                        }
                    });
            }
        },

        onDecryptPressed: function() {
            const me = this;

            var error = false;

            var toBeDecryptedTextArea = me.byId("toBeDecryptedTextArea");
            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();
            } else {
                toBeDecryptedTextArea.setValueState(ValueState.Error);
                toBeDecryptedTextArea.setValueStateText("Obligatory field");
                toBeDecryptedTextArea.openValueStateMessage();
                error = true;
            }

            if (!error) {
                me.timecapsuleFacade.decrypt(
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
                        me.showUnknownErrorMessage();
                    });
            }
        }
    });
});
