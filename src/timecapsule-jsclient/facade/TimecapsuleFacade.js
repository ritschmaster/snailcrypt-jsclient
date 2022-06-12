sap.ui.define([
	"timecapsule-jsclient/config"
], function (config) {
    "use strict";

    return function() {
        var me = this;

        me.getTimecapsuleURL = function() {
            return config.timecapsuleServerProtocol
                + "://"
                + config.timecapsuleServerDomain
                + ":"
                + config.timecapsuleServerPort
                + config.timecapsuleServerPath;
        };

        me.getTimecapsuleTimerURL = function(cipher) {
           var url = config.timecapsuleTimerProtocol
               + "://"
               + config.timecapsuleTimerDomain
               + ":"
               + config.timecapsuleTimerPort
               + config.timecapsuleTimerPath;

            if (cipher) {
                url += '?c=' + encodeURIComponent(cipher);
            }

            return url;
        }

        me.toTimecapsuleCipher = function(lockDate, cipher) {
            return btoa(lockDate) + ":" + cipher;
        };

        me.extractTimecapsuleCipherLockDate = function(timecapsuleCipher) {
            var cipherArray = timecapsuleCipher.split(':');
            if (cipherArray.length != 2) {
                throw 'Not a valid timecapsule string: date cannot be retrieved.'
            }

            var lockDate = null;
            try {
                lockDate = atob(cipherArray[0]);

                var datetime = new Date(lockDate);
                if (datetime.getTime() != datetime.getTime()) {
                    throw 'error';
                }
            } catch (exception) {
                throw 'Not a valid timecapsule string: date part is broken.'
            }

            return lockDate;
        };

        me.extractTimecapsuleCipherCipher = function(timecapsuleCipher) {
            var cipherArray = timecapsuleCipher.split(':');
            return cipherArray[1];
        };

        me.encrypt = function(cleartext,
                              lockDate,
                              onSuccess,
                              onEncryptionError,
                              onHttpError) {
            $.ajax({
                url: me.getTimecapsuleURL() + "keys",
                type: "POST",
                data: JSON.stringify({
                    "lock_date": lockDate
                }),
                contentType: 'application/json; charset=utf-8',
                success: function(key) {
                    if (key.public_key) {
                        var encrypter = new JSEncrypt();
                        encrypter.setPublicKey(key.public_key);
                        var cipher = encrypter.encrypt(cleartext);

                        var timecapsuleCipher = me.toTimecapsuleCipher(lockDate, cipher);

                        onSuccess(timecapsuleCipher);
                    } else {
                        onEncryptionError();
                    }
                },
                error: function(request, statusText, errorText) {
                    onHttpError(request);
                }
            });
        };

        me.decrypt = function(timecapsuleCipher,
                              onSuccess,
                              onCipherError,
                              onNotReleasedYet,
                              onHttpError) {
            var lockDate = null;
            try {
                lockDate = me.extractTimecapsuleCipherLockDate(timecapsuleCipher);
            } catch (exception) {
                onCipherError(exception);
            }

            if (lockDate) {
                var cipher = me.extractTimecapsuleCipherCipher(timecapsuleCipher);

                $.ajax({
                    url: me.getTimecapsuleURL() + "keys/lockdate/" + encodeURIComponent(lockDate),
                    type: "GET",
                    contentType: 'application/json; charset=utf-8',
                    success: function(key) {
                        if (key.private_key) {
                            var decrypter = new JSEncrypt();
                            decrypter.setPrivateKey(key.private_key);
                            var cleartext = decrypter.decrypt(cipher);

                            onSuccess(cleartext, lockDate);
                        } else {
                            onNotReleasedYet(lockDate);
                        }
                    },
                    error: function(request, statusText, errorText) {
                        onHttpError(request);
                    }
                });
            }
        }

        return me;
    }
});
