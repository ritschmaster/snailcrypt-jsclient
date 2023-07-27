sap.ui.require([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/actions/Press",
    "sap/ui/test/matchers/PropertyStrictEquals",
    "snailcrypt-jsclient/facade/SnailcryptFacade",
    "snailcrypt-jsclient/test/integration/pages/Common"
], function(
    Opa5,
    EnterText,
    Press,
    PropertyStrictEquals,
    SnailcryptFacade,
    Common
) {
    "use strict";
   
    const mainView = 'snailcrypt-jsclient.view.Main';
   
    /**************************************************************************
     * General elements
     */
    const exportModeSwitchId = 'exportModeSwitch';
   
    /**************************************************************************
     * Encryption elements
     */
    const plainTextSwitchId = 'plainTextSwitch';
    const toBeEncryptedHTMLId = 'toBeEncryptedHTML';
    const toBeEncryptedTextAreaId = 'toBeEncryptedTextArea';
    const encryptedTextAreaId = 'encryptedTextArea';
    const encryptionDateTimePickerId = 'encryptionDateTimePicker';
    const encryptButtonId = 'encryptButton';
    
    /**************************************************************************
     * Decryption elements
     */
    const decryptButtonId = 'decryptButton';
    
    /**************************************************************************
     * Helper functions
     */
    var snailcryptFacade = new SnailcryptFacade();
    
    Opa5.createPageObjects({
        onTheAppPage: {
            baseClass: Common,
            
            actions: {
                iSwitchExpertMode: function() {
                    return this.waitFor({
                        viewName: mainView,
                        id: exportModeSwitchId,
                        actions: new Press(),
                        errorMessage: "Expert mode could not be pressed"
                    })
                },
                    
                iSwitchPlainText: function() {
                    return this.waitFor({
                        viewName: mainView,
                        id: plainTextSwitchId,
                        actions: new Press(),
                        errorMessage: "Plain text mode could not be pressed"
                    })
                },
                
                iEnterHTMLToBeEncrypted: function(htmlToBeEncrypted) {
                    return this.waitFor({
                        viewName: mainView,
                        id: toBeEncryptedHTMLId,
                        actions: function () {
                            $('#to-be-encrypted-editor .ql-editor').html(htmlToBeEncrypted);
                        },
                        errorMessage: "The HTML cannot be entered"
                    });
                },
                
                iEnterTextToBeEncrypted: function(textToBeEncrypted) {
                    return this.waitFor({
                        viewName: mainView,
                        id: toBeEncryptedTextAreaId,
                        actions: new EnterText({ text: textToBeEncrypted }),
                        errorMessage: "The text cannot be entered"
                    });
                },
                
                iEnterReleaseDate: function(date) {
                    return this.waitFor({
                        viewName: mainView,
                        id: encryptionDateTimePickerId,
                        actions: function(encryptionDateTimePicker) {
                            encryptionDateTimePicker.setValue(date);
                        },
                        errorMessage: "The date cannot be entered"
                    })
                },
                
                iPressEncrypt: function() {
                    return this.waitFor({
                        viewName: mainView,
                        id: encryptButtonId,
                        actions: new Press(),
                        errorMessage: 'Cannot click the "Encrypt" button.'
                    })
                },
                
                iPressDecrypt: function() {
                    return this.waitFor({
                        viewName: mainView,
                        id: decryptButtonId,
                        actions: new Press(),
                        errorMessage: 'Cannot click the "Decrypt" button.'
                    })
                },
            },
                                   
            assertions: {
                iShouldBeEncrypted: function(textToBeEncrypted) {
                    var encryptedText = 'test';
                    
                    return this.waitFor({
                        viewName: mainView,
                        id: encryptedTextAreaId,
                        matchers: new PropertyStrictEquals({
                            name: "value",
                            value: encryptedText
                        }),
                        success: function() {
                            Opa5.assert.ok(true, 'The string has been encrypted correctly');
                        },
                        errorMessage: 'The string has not been encrypted correctly'
                    });
                }
            }
        }
    });
});
