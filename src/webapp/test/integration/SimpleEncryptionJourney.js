sap.ui.define([
    "sap/ui/test/opaQunit",
    "snailcrypt-jsclient/test/integration/pages/App",
], function (
    opaTest
) {
    "use strict";

    opaTest('Should generate correct link for HTML text', function(Given, When, Then) {
        const htmlToBeEncrypted = '<p>Hello world</p>';
        
        Given.iStartTheApp();
        
//        When.onTheAppPage.iEnterHTMLToBeEncrypted(htmlToBeEncrypted);
        When.onTheAppPage.iEnterReleaseDate('2023-07-16 17:00:00');
        
//        Then.onTheAppPage.iShouldBeEncrypted(htmlToBeEncrypted);
    });
    
    opaTest('Should generate correct link for plain text', function(Given, When, Then) {
        const textToBeEncrypted = 'Hello world';
        const releaseDate = '2022-11-19T17:00:00+0100';
        
        Given.iStartTheApp();
        
        When.onTheAppPage.iSwitchExpertMode();
        When.onTheAppPage.iSwitchPlainText();
        When.onTheAppPage.iEnterTextToBeEncrypted(textToBeEncrypted);
        When.onTheAppPage.iEnterReleaseDate(releaseDate);
        When.onTheAppPage.iPressEncrypt();

        Then.onTheAppPage.iShouldBeEncrypted(textToBeEncrypted);
    });

});
