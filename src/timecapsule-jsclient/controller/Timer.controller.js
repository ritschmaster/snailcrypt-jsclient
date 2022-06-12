sap.ui.define([
    "sap/base/strings/formatMessage",
    "sap/ui/core/library",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
	"timecapsule-jsclient/config",
	"timecapsule-jsclient/facade/TimecapsuleFacade"
], function (FormatMessage,
             CoreLibrary,
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

    return Controller.extend("timecapsule-jsclient.controller.Timer", {
        timecapsuleFacade: new TimecapsuleFacade(),

        updateTimerInterval: null,

        extractCipherFromURL: function() {
            var urlSearchParams = new URLSearchParams(window.location.search);
            var cipher = urlSearchParams.get('c');

            return cipher;
        },

        onInit: function() {
            this.decrypt();
        },

        decrypt: function() {
            var me = this;

            var cipher = me.extractCipherFromURL();
            if (cipher) {
                var timerLabel = me.byId('timerLabel');
                var decryptedLabel = me.byId('decryptedLabel');
                var decryptedTextArea = me.byId('decryptedTextArea');
                var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
                var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');

                me.timecapsuleFacade.decrypt(
                    cipher,
                    /**
                     * onSucess
                     */
                    function(cleartext, lockDate) {
                        decryptedDateTimePicker.setValue(lockDate);
                        decryptedTextArea.setValue(cleartext);


                        timerLabel.setText('Decryption key is released!');
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
            var me = this;

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

                var diffText = FormatMessage("{0} days, {1} hours, {2} minutes, {3} seconds left",
                                             [ diffDays, diffHours, diffMinutes, diffSeconds]);

                timerLabel.setText(diffText);
            } else {
                timerLabel.setText('Decryption key is released!');
                clearInterval(me.updateTimerInterval);
                me.decrypt();
            }
        }
    });
});
