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
	"snailcrypt-jsclient/facade/SnailcryptFacade"
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
        decryptedEditor: null,
        decryptedEditorHTMLBackup: null,

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

        decrypt: function() {
            const me = this;

            var oBundle = this.getView().getModel("i18n").getResourceBundle();

            var cipher = me.extractCipherFromURL();
            if (cipher) {
                var messageAvailableLabel = me.byId('messageAvailableLabel');
                var hintLabel = me.byId('hintLabel');
                var hintTextArea = me.byId('hintTextArea');
                var decryptedLabel = me.byId('decryptedLabel');
                var decryptedHTML = me.byId('decryptedHTML');
                var decryptedTextArea = me.byId('decryptedTextArea');
                var decryptedDateTimeLabel = me.byId('decryptedDateTimeLabel');
                var decryptedDateTimePicker = me.byId('decryptedDateTimePicker');

                me.snailcryptFacade.decrypt(
                    cipher,
                    /**
					 * onHint
					 */
					function(hintAvailable, hint) {
						if (hintAvailable) {
							hintTextArea.setValue(hint);
							
							hintLabel.setVisible(true);
							hintTextArea.setVisible(true);
						} 	
					},
                    /**
                     * onSucess
                     */
                    function(cleartext, lockDate) {
                        decryptedDateTimePicker.setValue(lockDate);

                        messageAvailableLabel.setVisible(true);
                        decryptedLabel.setVisible(true);
                        
                        if (me.snailcryptFacade.strContainsHTMLTags(cleartext)) {
                            decryptedHTML.setVisible(true);
                            me.decryptedEditorHTMLBackup = cleartext;
                        } else {
                            decryptedTextArea.setValue(cleartext);
                            decryptedTextArea.setVisible(true);
                        }
                    },
                    /**
                     * onCipherError
                     */
                    function(exceptionText) {
                        me.popupFacade.showUnableToExtractCipherFromURLErrorPopup(exceptionText);
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
                me.popupFacade.showUnableToExtractCipherFromURLErrorPopup();
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
        },
        
        onDecryptedHTMLAfterRendering: function() {
            if (this.decryptedEditor == null) {
                this.initDecryptedEditor();
                this.decryptedEditor.root.innerHTML = this.decryptedEditorHTMLBackup;
            }
        }
    });
});
