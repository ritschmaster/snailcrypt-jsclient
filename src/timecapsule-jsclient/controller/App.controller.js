sap.ui.define([
    "sap/ui/core/library",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
	"timecapsule-jsclient/config"
], function (CoreLibrary,
             DateFormat,
             Controller,
             MobileLibrary,
             Dialog,
             Button,
             Text,
             config) {
    "use strict";
    var ValueState = CoreLibrary.ValueState;
    var DialogType = MobileLibrary.DialogType;
    var ButtonType = MobileLibrary.ButtonType;

    return Controller.extend("timecapsule-jsclient.controller.App", {
        timecapsuleURL:  function() {
            return config.timecapsuleServerProtocol
                + "://"
                + config.timecapsuleServerDomain
                + ":"
                + config.timecapsuleServerPort
                + config.timecapsuleServerPath;
        }

        initEncryptedData: function() {
            const me = this;


            var encryptedLabel = me.byId('encryptedLabel');
            encryptedLabel.setVisible(false);

            var encryptedTextArea = me.byId('encryptedTextArea');
            encryptedTextArea.setVisible(false);
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
            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();

                var timecapsuleCipher = toBeDecryptedTextArea.getValue();
                var lockDate = me.extractTimecapsuleCipherLockDate(timecapsuleCipher);

                var decryptedLabel = me.byId('decryptedLabel');
                decryptedLabel.setVisible(true);

                var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');
                decryptedDateTimePicker.setValue(lockDate);
                decryptedDateTimePicker.setVisible(true);
            }

            var decryptedTextArea = me.byId('decryptedTextArea');
            decryptedTextArea.setVisible(false);
        },

        onEncryptPressed: function () {
            const me = this;

            var toBeEncryptedTextArea = this.byId("toBeEncryptedTextArea");
            if (toBeEncryptedTextArea.getValue()) {
                toBeEncryptedTextArea.setValueState(ValueState.Success);
                toBeEncryptedTextArea.closeValueStateMessage();
            } else {
                toBeEncryptedTextArea.setValueState(ValueState.Error);
                toBeEncryptedTextArea.setValueStateText("Obligatory field");
                toBeEncryptedTextArea.openValueStateMessage();
            }

            var encryptionDateTimePicker = this.byId("encryptionDateTimePicker");
            if (encryptionDateTimePicker.getValue().length > 0) {
                encryptionDateTimePicker.setValueState(ValueState.Success);
                encryptionDateTimePicker.closeValueStateMessage();
            } else {
                encryptionDateTimePicker.setValueState(ValueState.Error);
                encryptionDateTimePicker.setValueStateText("Obligatory field");
                encryptionDateTimePicker.openValueStateMessage();
            }

            var lockDate = encryptionDateTimePicker.getValue();
            var encryptedLabel = me.byId('encryptedLabel');
            var encryptedTextArea = me.byId('encryptedTextArea');

            $.ajax({
                url: me.timecapsuleURL() + "keys",
                type: "POST",
                data: JSON.stringify({
                    "lock_date": lockDate
                }),
                contentType: 'application/json; charset=utf-8',
                success: function(key) {
                    if (key.public_key) {
                        var encrypter = new JSEncrypt();
                        encrypter.setPublicKey(key.public_key);
                        var cipher = encrypter.encrypt(toBeEncryptedTextArea.getValue());

                        var timecapsuleCipher = me.toTimecapsuleCipher(lockDate, cipher);

                        encryptedTextArea.setValue(timecapsuleCipher);

                        encryptedLabel.setVisible(true);
                        encryptedTextArea.setVisible(true);
                    } else {
                        alert("Received an error :(");
                    }
                },
                error: function(data) {
                    alert("Received an error :(");
                }
            });
        },

        toTimecapsuleCipher: function(lockDate, cipher) {
            return btoa(lockDate) + ":" + cipher;
        },

        extractTimecapsuleCipherLockDate: function(timecapsuleCipher) {
            var cipherArray = timecapsuleCipher.split(':');
            return atob(cipherArray[0]);
        },

        extractTimecapsuleCipherCipher: function(timecapsuleCipher) {
            var cipherArray = timecapsuleCipher.split(':');
            return cipherArray[1];
        },

        onDecryptPressed: function() {
            const me = this;

            var toBeDecryptedTextArea = me.byId("toBeDecryptedTextArea");
            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();
            } else {
                toBeDecryptedTextArea.setValueState(ValueState.Error);
                toBeDecryptedTextArea.setValueStateText("Obligatory field");
                toBeDecryptedTextArea.openValueStateMessage();
            }

            var timecapsuleCipher = toBeDecryptedTextArea.getValue();
            var lockDate = me.extractTimecapsuleCipherLockDate(timecapsuleCipher);
            var cipher = me.extractTimecapsuleCipherCipher(timecapsuleCipher);
            var decryptedLabel = me.byId('decryptedLabel');
            var decryptedTextArea = me.byId('decryptedTextArea');

            $.ajax({
                url: config.timecapsuleURL() + "keys/lockdate/" + encodeURIComponent(lockDate),
                type: "GET",
                contentType: 'application/json; charset=utf-8',
                success: function(key) {
                    if (key.private_key) {
                        var decrypter = new JSEncrypt();
                        decrypter.setPrivateKey(key.private_key);
                        var decryptedText = decrypter.decrypt(cipher);

                        decryptedTextArea.setValue(decryptedText);

                        decryptedLabel.setVisible(true);
                        decryptedTextArea.setVisible(true);
                    } else {
                        var cookieMessageDialog = new Dialog({
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
                                    cookieMessageDialog.close();
                                }
                            })
                        });

                        cookieMessageDialog.open();
                    }
                },
                error: function(data) {
                    alert("Received an error :(");
                }
            });

        }
    });
});
