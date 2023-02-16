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
	"snailcrypt-jsclient/client/V1Client"
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

            var timerWarningText = me.byId('timerWarningText');
            timerWarningText.setVisible(false);

            var timerErrorText = me.byId('timerErrorText');
            timerErrorText.setVisible(false);
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
            var me = this;
            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            $.ajax({
                url: me.urlFacade.getSnailcryptURL() + "configs",
                type: "GET",
                success: function(configs) {
                    var configsText = ""
                    for (var i = 0; i < configs.length; i++) {
                        var fromStr =  DateFormat.getDateTimeInstance({
                            style: "medium"
                        }).format(new Date(configs[i].from));
                        var toStr =  DateFormat.getDateTimeInstance({
                            style: "medium"
                        }).format(new Date(configs[i].to));
                        var cronExprStr = cronstrue.toString(configs[i].type,
                                                             { locale: sap.ui.getCore().getConfiguration().getLanguage().substring(0, 2) });

                        configsText += "\n"
                            + oBundle.getText('main.expirationDateDeniedConstraint',
                                              [ fromStr,
                                                toStr,
                                                cronExprStr ]);
                    }

                    var lockDateStr = DateFormat.getDateTimeInstance({
                        style: "medium"
                    }).format(new Date(lockDate));
                    var tooGranularErrorDialog = new Dialog({
                        type: DialogType.Message,
                        title: oBundle.getText('main.expirationDateDeniedTitle'),
                        content: new Text({
                            text: oBundle.getText('main.expirationDateDeniedText',
                                                  [ lockDateStr ])
                                + configsText
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
                error: function(request, statusText, errorText) {
                    me.popupFacade.showUnknownErrorPopup();
                }
            });
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

        onExpertModeSwitchChanged: function(event) {
            var expertMode = event.getSource().getState();

            var mainGrid = this.byId("mainGrid");
            if (expertMode) {
                mainGrid.setGridTemplateColumns("1fr 1fr");
            } else {
                mainGrid.setGridTemplateColumns("1fr");
            }

            var expertModeOnlyComponents = this.getView().getControlsByFieldGroupId('expertOnlyFieldGroup').filter(e => e.isA("sap.m.VBox"));
            expertModeOnlyComponents.forEach(function (expertModeOnlyComponent) {
                expertModeOnlyComponent.setVisible(expertMode);
            });
        },

        onCookieMessageStripClose: function(event) {
            event.getSource().close();
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
                var timerWarningText = me.byId('timerWarningText');
                var timerErrorText = me.byId('timerErrorText');

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
                            timerErrorText.setVisible(true);
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
                                timerWarningText.setVisible(true);
                            } else {
                                /**
                                 * OK
                                 */
                                timerWarningText.setVisible(false);
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
