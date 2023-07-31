sap.ui.define([
    "sap/ui/test/opaQunit",
    "snailcrypt-jsclient/test/integration/pages/App"
], function (
    opaTest
) {
    "use strict";

    opaTest('Should generate correct link for plain text', function(Given, When, Then) {
        const textToBeEncrypted = 'Hello world';
        const releaseDate = '2022-11-19T17:00:00+0100';
        const hint = '';
        
        Given.iStartTheApp();
       
        /**********************************************************************
         * This is needed to wait for the editor to build up. Otherwise the
         * app might break during the test.
         */
        When.onTheAppPage.iEnterHTMLToBeEncrypted('');
        
        /**********************************************************************
         * Perform the actual test
         */
         
        When.onTheAppPage.iSwitchExpertMode();
        When.onTheAppPage.iSwitchPlainText();
        When.onTheAppPage.iEnterTextToBeEncrypted(textToBeEncrypted);
        When.onTheAppPage.iEnterReleaseDate(releaseDate);
        When.onTheAppPage.iPressEncrypt();

        Then.onTheAppPage.iShouldBeEncrypted(textToBeEncrypted, releaseDate, hint);
        
        Then.iTeardownMyApp();
    });
});

