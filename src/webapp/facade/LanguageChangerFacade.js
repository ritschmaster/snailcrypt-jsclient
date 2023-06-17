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
