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
    "sap/ui/core/library",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/MessageBox",
    "sap/m/Text",
	"snailcrypt-jsclient/config",
	"snailcrypt-jsclient/facade/urlFacade",
	"snailcrypt-jsclient/facade/PopupFacade",
    "snailcrypt-jsclient/facade/LanguageChangerFacade",
	"snailcrypt-jsclient/facade/SnailcryptFacade"
], function (CoreLibrary,
             DateFormat,
             Controller,
             ResourceModel,
             MobileLibrary,
             Dialog,
             Button,
             MessageBox,
             Text,
             config,
             UrlFacade,
             PopupFacade,
             LanguageChangerFacade,
             SnailcryptFacade) {
    "use strict";
    var ValueState = CoreLibrary.ValueState;
    var DialogType = MobileLibrary.DialogType;
    var ButtonType = MobileLibrary.ButtonType;

    return Controller.extend("snailcrypt-jsclient.controller.Main", {
        urlFacade:  new UrlFacade(),
        popupFacade: null,
        languageChangerFacade: LanguageChangerFacade.getInstance(),
        snailcryptFacade: new SnailcryptFacade(),
        toBeEncryptedEditor: null,
        toBeEncryptedEditorHTMLBackup: null,
        decryptedEditor: null,
        decryptedEditorHTMLBackup: null,

        onInit: function () {
            const me = this;
            
            var i18nModel = new ResourceModel({
                bundleName: "snailcrypt-jsclient.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");

            this.popupFacade = new PopupFacade(this.getView().getModel("i18n").getResourceBundle());
            
            this.languageChangerFacade.subscribe(function(oldLanguage, newLanguage) {
                me.onChangeLanguage(oldLanguage, newLanguage);
            });
            this.onChangeLanguage(sap.ui.getCore().getConfiguration().getLanguage());
        },
        
        onChangeLanguage: function(oldLanguage, newLanguage) {
            const me = this;
            
            var oBundle = me.getView().getModel("i18n").getResourceBundle();
            
            if (me.toBeEncryptedEditor) {
                $('#to-be-encrypted-editor').first().removeClass(oldLanguage);
                $('#to-be-encrypted-editor').first().addClass(newLanguage);
                $('#to-be-encrypted-editor-editor .ql-editor').first().attr('data-placeholder', oBundle.getText('main.textToBeEncryptedPlaceholder'));
                $('#to-be-encrypted-editor-editor').classList;
            }
            
            if (me.decryptedEditor) {
                me.decryptedEditor.container.classList.remove(oldLanguage);
                me.decryptedEditor.container.classList.add(newLanguage);
            }
        },
        
        initToBeEncryptedEditor: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            
            var quillOptions = {
                placeholder: oBundle.getText('main.textToBeEncryptedPlaceholder'),
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ color: [] }, { background: [] }],
                        [{ script: 'sub' }, { script: 'super' }],
                        ['blockquote', 'code-block'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ]
                },
                formats: [
                    'header', 'bold', 'italic', 'underline', 'strike', 'color', 'background',
                    'script', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'link', 'image', 'video'
                ]
            };
            this.toBeEncryptedEditor = new Quill('#to-be-encrypted-editor-editor',
                                              quillOptions);
        },
        
        initDecryptedEditor: function() {
            var quillOptions = {
                theme: 'snow',
                readOnly: true,
                modules: {
                    toolbar: [ ],
                },
                formats: [
                    'header', 'bold', 'italic', 'underline', 'strike', 'color', 'background',
                    'script', 'blockquote', 'code-block', 'list', 'bullet', 'indent', 'link', 'image', 'video'
                ]
            };
            this.decryptedEditor = new Quill('#decrypted-editor-editor',
                                                 quillOptions);
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
            
            var timerLinkAsQrCodeButton = me.byId('timerLinkAsQrCodeButton');
            timerLinkAsQrCodeButton.setVisible(false);

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
            
            var toBeEncryptedHTML = this.byId('toBeEncryptedHTML');
            this.toBeEncryptedEditorHTMLBackup = this.toBeEncryptedEditor.root.innerHTML;
            
            var decryptedHTML = this.byId('decryptedHTML');
            
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
        
        onPlainTextSwitchChanged: function(event) {
            const me = this;
            
            var plainTextMode = event.getSource().getState();
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var plainTextSwitch = me.byId('plainTextSwitch');
            var toBeEncryptedTextArea = me.byId("toBeEncryptedTextArea");
            
            var toggleVisibility = function() {
                /******************************************************************
                 * Toggle all components associated with the rich text
                 *
                 * If the plain text mode is false, then the rich text mode is
                 * true and vice versa
                 */
                var richTextComponents = me.getView().getControlsByFieldGroupId('richTextFieldGroup').filter(e => e.isA("sap.m.VBox"));
                richTextComponents.forEach(function (richTextComponent) {
                    richTextComponent.setVisible(!plainTextMode);
                });
                
                /******************************************************************
                 * Toggle all components associated with the plain text
                 */
                var plainTextComponents = me.getView().getControlsByFieldGroupId('plainTextFieldGroup').filter(e => e.isA("sap.m.VBox"));
                plainTextComponents.forEach(function (plainTextComponent) {
                    plainTextComponent.setVisible(plainTextMode);
                });
            };
                                    
            if (plainTextMode) {
                /**************************************************************
                 * Check if there is a rich text available and also if it is
                 * not only plain text. In such case ask the user if the
                 * switch should be cancelled
                 */
                if (me.toBeEncryptedEditor.getText() != '\n'
                    && me.snailcryptFacade.strContainsHTMLTags(me.toBeEncryptedEditor.root.innerHTML)) {
                    
                    MessageBox.confirm(oBundle.getText('main.switchFromRichTextToPlainTextLossy'), {
                        actions: [ MessageBox.Action.OK,
                                   MessageBox.Action.CANCEL ],
                        onClose: function (answer) {
                            /**************************************************
                             * Exit out if not confirmed
                             */
                            if (answer != MessageBox.Action.OK) {
                                plainTextSwitch.setState(!plainTextMode);
                                return;
                            }
                            
                            toBeEncryptedTextArea.setValue(me.toBeEncryptedEditor.getText());
                            
                            /**************************************************
                             * Initialze the rich text
                             */
                            me.toBeEncryptedEditor.root.innerHTML = '';
                            
                            toggleVisibility();
                        }
                    });
                } else {
                    toBeEncryptedTextArea.setValue(me.toBeEncryptedEditor.getText());
                    
                    /**********************************************************
                     * Initialze the rich text
                     */
                    me.toBeEncryptedEditor.root.innerHTML = '';
                }
            } else {
                /**************************************************************
                 * Switching from plain text to rich text will not result in
                 * loss of information. Therefore we can simply copy the
                 * current text into the rich text editor.
                 */
                me.toBeEncryptedEditor.setText(toBeEncryptedTextArea.getValue());
            
                /**************************************************************
                 * Initialze the plain text
                 */
                toBeEncryptedTextArea.setValue('');
                
                toggleVisibility();
            }
        },
        
        onToBeEncryptedHTMLAfterRendering: function() {
            if (this.toBeEncryptedEditor == null) {
                this.initToBeEncryptedEditor();
            } else if (this.toBeEncryptedEditorHTMLBackup != null) {
                this.initToBeEncryptedEditor();
                this.toBeEncryptedEditor.root.innerHTML = this.toBeEncryptedEditorHTMLBackup;
                this.toBeEncryptedEditorHTMLBackup = null;
            }
        },

        onEncryptionDateTimePickerChanged: function () {
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
            var decryptedHintLabel = me.byId('decryptedHintLabel');
            var decryptedHintTextArea = me.byId('decryptedHintTextArea');            
            var decryptedLabel = me.byId('decryptedLabel');
            var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
            var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');
            var decryptedHTML = me.byId('decryptedHTML');
            var decryptedTextArea = me.byId('decryptedTextArea');
            
            decryptedHintLabel.setVisible(false);
            decryptedHintTextArea.setVisible(false);
            decryptedLabel.setVisible(false);
            decryptedDateTimeLabel.setVisible(false);
            decryptedDateTimePicker.setVisible(false);
            
            decryptedHTML.setVisible(false);
            
            if (toBeDecryptedTextArea.getValue()) {
                toBeDecryptedTextArea.setValueState(ValueState.Success);
                toBeDecryptedTextArea.closeValueStateMessage();
            }
            decryptedTextArea.setVisible(false);
        },

        onEncryptPressed: function () {
            const me = this;

            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var cleartext = '';
            var error = false;
            
            var plainTextSwitch = this.byId('plainTextSwitch');
            if (plainTextSwitch.getState()) {
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
                
                cleartext = toBeEncryptedTextArea.getValue();
            } else {
                cleartext = me.toBeEncryptedEditor.root.innerHTML;
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
            
            var hintToBeEncryptedTextArea = this.byId('hintToBeEncryptedTextArea');
            var hint = hintToBeEncryptedTextArea.getValue();

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
                var timerLinkAsQrCodeButton =  me.byId('timerLinkAsQrCodeButton');
                var timerWarningText = me.byId('timerWarningText');
                var timerErrorText = me.byId('timerErrorText');
                
                me.snailcryptFacade.encrypt(
                    cleartext,
                    lockDate,
                    hint,
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
                            timerLinkAsQrCodeButton.setVisible(true);

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
					 * onHint
					 */
					function(hintAvailable, hint) {
						if (hintAvailable) {
							var decryptedHintLabel = me.byId('decryptedHintLabel'); 
							var decryptedHintTextArea = me.byId('decryptedHintTextArea');
							
							decryptedHintTextArea.setValue(hint);
							
							decryptedHintLabel.setVisible(true);
							decryptedHintTextArea.setVisible(true);			
						} 	
					},
                    /**
                     * onSucess
                     */
                    function(cleartext, lockDate) {
                        var decryptedLabel = me.byId('decryptedLabel');
                        var decryptedHTML = me.byId('decryptedHTML');
                        var decryptedTextArea = me.byId('decryptedTextArea');
                        var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
                        var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');

                        decryptedDateTimePicker.setValue(lockDate);
                        
                        decryptedLabel.setVisible(true);
                        decryptedDateTimeLabel.setVisible(true);
                        decryptedDateTimePicker.setVisible(true);
                        
                        if (me.snailcryptFacade.strContainsHTMLTags(cleartext)) {
                            decryptedHTML.setVisible(true);
                            me.decryptedEditorHTMLBackup = cleartext;
                            
                            if (me.decryptedEditor != null) {
                                me.decryptedEditor.root.innerHTML = cleartext;
                            }
                        } else {
                            decryptedTextArea.setValue(cleartext);
                            decryptedTextArea.setVisible(true);
                        }
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
        
        onDecryptedHTMLAfterRendering: function() {
            this.initDecryptedEditor();
            this.decryptedEditor.root.innerHTML = this.decryptedEditorHTMLBackup;
        },

        onTimerLinkCopyPressed: function() {
            var timerLink = this.byId('timerLink');
            var href = timerLink.getHref();
            navigator.clipboard.writeText(href);
        },
        
        onTimerLinkAsQrCodeyPressed: function() {
			var timerLink = this.byId('timerLink');
            var href = timerLink.getHref();
            this.popupFacade.showTimerLinkAsQrCode(href);
		}
    });
});
