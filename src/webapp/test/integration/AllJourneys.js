sap.ui.define([
    "sap/ui/test/Opa5",
    "snailcrypt-jsclient/test/integration/pages/Common",
    "snailcrypt-jsclient/test/integration/SimpleEncryptionJourney",
    "snailcrypt-jsclient/test/integration/PlaintextEncryptionJourney"
], function(Opa5, Common) {
    "use strict";

    Opa5.extendConfig({
        arrangements: new Common(),
        autoWait: true
    });

});
