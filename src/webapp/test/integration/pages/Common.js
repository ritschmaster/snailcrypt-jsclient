sap.ui.define([
    "sap/ui/test/Opa5"
], function(Opa5) {
    "use strict";

    return Opa5.extend("snailcrypt-jsclient.test.integration.pages.Common", {

        iStartTheApp: function() {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: 'snailcrypt-jsclient/test/integration/component/Main',
                    async: true
                }
            });
        },

        iTeardownTheApp: function() {
            this.iTeardownMyUIComponent();
        }
    });
});
