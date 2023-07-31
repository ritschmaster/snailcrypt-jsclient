sap.ui.define([
    "sap/ui/test/opaQunit",
    "snailcrypt-jsclient/test/integration/pages/App"
], function (
    opaTest
) {
    "use strict";

    opaTest('Should generate correct link for HTML text', function(Given, When, Then) {
        const htmlToBeEncrypted = '<p>Hello world</p>';
        const releaseDate = '2022-11-19T17:00:00+0100';
        const hint = '';
        
        Given.iStartTheApp();
        
        When.onTheAppPage.iEnterHTMLToBeEncrypted(htmlToBeEncrypted);
        When.onTheAppPage.iEnterReleaseDate(releaseDate);
        When.onTheAppPage.iPressEncrypt();
        
        Then.onTheAppPage.iShouldBeEncrypted(htmlToBeEncrypted, releaseDate, hint);
        
        Then.iTeardownMyApp();
    });
});
