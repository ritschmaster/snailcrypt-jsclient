sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ValueState"
], function (Controller, ValueState) {
    "use strict";
    return Controller.extend("timecapsule-jsclient.controller.App", {
        onEncryptionDateTimePickerChanged: function () {
            var encryptionDateTimePicker = this.byId("encryptionDateTimePicker");
            if (encryptionDateTimePicker.getValue()) {
                encryptionDateTimePicker.setValueState(ValueState.Success);
                encryptionDateTimePicker.closeValueStateMessage();
            }
        },

        onTextToBeEncrytedChanged: function() {
            var toBeEncryptedTextArea = this.byId("toBeEncryptedTextArea");
            if (toBeEncryptedTextArea.getValue()) {
                toBeEncryptedTextArea.setValueState(ValueState.Success);
                toBeEncryptedTextArea.closeValueStateMessage();
            }
        },

        onTextToBeDecryptedChanged: function () {
            var toBeDecryptedTextArea = this.byId("toBeDecryptedTextArea");
            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();
            }
        },

        onEncryptPressed: function () {
            var me = this;

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
            var encryptedLabel = this.byId('encryptedLabel');
            var encryptedTextArea = this.byId('encryptedTextArea');

            $.ajax({
                url: "http://localhost:8080/keys",
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
                        console.log("some error :(");
                    }
                },
                error: function(data) {
                    console.log("some error :(");
                }
            });
        },

        toTimecapsuleCipher: function(lockDate, cipher) {
            return btoa(lockDate) + "." + cipher;
        },

        extractTimecapsuleCipherLockDate: function(timecapsuleCipher) {
            var cipherArray = timecapsuleCipher.split('.');
            return atob(cipherArray[0]);
        },

        extractTimecapsuleCipherCipher: function(timecapsuleCipher) {
            var cipherArray = timecapsuleCipher.split('.');
            return cipherArray[1];
        },

        onDecryptPressed: function() {
            var me = this;

            var toBeDecryptedTextArea = this.byId("toBeDecryptedTextArea");
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
            var decryptedLabel = this.byId('decryptedLabel');
            var decryptedTextArea = this.byId('decryptedTextArea');

            $.ajax({
                url: "http://localhost:8080/keys/lockdate/" + encodeURIComponent(lockDate),
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
                        console.log("some error :(");
                    }
                },
                error: function(data) {
                    console.log("some error :(");
                }
            });

        }
    });
});
