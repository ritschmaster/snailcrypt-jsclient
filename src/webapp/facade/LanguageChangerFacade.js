sap.ui.define([
], function (
) {
    "use strict";
 
    var LanguageChangerFacade = function () {
        const me = this;
        
        me.subscriptions = [ ];
        
        /**
         * @param language Is a 2 character string defining the language to change to.
         */
        me.changeLanguage = function(language) {
            var oldLanguage = sap.ui.getCore().getConfiguration().getLanguage();
            sap.ui.getCore().getConfiguration().setLanguage(language);
            
            for (var i = 0; i < me.subscriptions.length; i++) {
                me.subscriptions[i](oldLanguage, language);
            }
        };
        
        /**
         * @param subscriber Must be a function taking two arguments. The first one is the old language. The second one is the new language.
         */
        me.subscribe = function(subscriber) {
            me.subscriptions.push(subscriber);
        };
        
        me.unsubscribe = function(subscriber) {
            for (var i = 0; i < me.subscriptions.length; i++) {
                if (me.subscriptions[i] == subscriber) {
                    me.splice(i, 1);
                    return;
                }
            }
        }
        
        return me;
    };
    
    return {
        getInstance: function() {
            if (window.snailcryptLanguageChangerFacadeInstance == undefined) {
                window.snailcryptLanguageChangerFacadeInstance = new LanguageChangerFacade();
            }
            
            return window.snailcryptLanguageChangerFacadeInstance;
        }
    };
});
