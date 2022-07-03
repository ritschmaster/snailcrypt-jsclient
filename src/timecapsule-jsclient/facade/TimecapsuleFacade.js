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
    },

    /**
     * @param str A string.
     */
    me.str2ab = function(str) {
      const buf = new ArrayBuffer(str.length);
      const bufView = new Uint8Array(buf);
      for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
      }
      return buf;
    };

    /**
     * @param pem A string.
     * @return A Promise containing a CryptoKey which is the public key.
     */
    me.importPublicKey = function(pem) {
      // fetch the part of the PEM string between header and footer
      const pemHeader = '-----BEGIN PUBLIC KEY-----';
      const pemFooter = '-----END PUBLIC KEY-----';

      var pemContents = pem
          .replaceAll('\n', '')
          .replaceAll('\'', '');
      pemContents = pemContents.substring(pemHeader.length, pemContents.length - pemFooter.length);

      // base64 decode the string to get the binary data
      const binaryDerString = window.atob(pemContents);

      // convert from a binary string to an ArrayBuffer
      const binaryDer = me.str2ab(binaryDerString);

      return window.crypto.subtle.importKey(
        'spki',
        binaryDer,
        {
          name: 'RSA-OAEP',
          hash: 'SHA-512'
        },
        true,
        [ 'encrypt' ]
      );


    };

    /**
     * @param pem A string.
     * @return A Promise containing a CryptoKey which is the private key.
     */
    me.importPrivateKey = function(pem) {
      // fetch the part of the PEM string between header and footer
      const pemHeader = '-----BEGIN PRIVATE KEY-----';
      const pemFooter = '-----END PRIVATE KEY-----';

      var pemContents = pem
          .replaceAll('\n', '')
          .replaceAll('\'', '');
      pemContents = pemContents.substring(pemHeader.length, pemContents.length - pemFooter.length);

      // base64 decode the string to get the binary data
      const binaryDerString = window.atob(pemContents);

      // convert from a binary string to an ArrayBuffer
      const binaryDer = me.str2ab(binaryDerString);

      return window.crypto.subtle.importKey(
        'pkcs8',
        binaryDer,
        {
          name: 'RSA-OAEP',
          hash: 'SHA-512'
        },
        true,
        [ 'decrypt' ]
      );
    };

    /**
     * @param publicKey A CryptoKey
     * @param message A string
     */
    me.encryptMessage = function(publicKey, plaintext) {
      var encoder = new TextEncoder();
      let encoded = encoder.encode(plaintext);
      return window.crypto.subtle.encrypt(
        {
          name: "RSA-OAEP"
        },
        publicKey,
        encoded
      );
    };

    /**
     * @param publicKey A CryptoKey
     * @param ciphertext A string
     */
    me.decryptMessage = function(privateKey, ciphertext) {
      return window.crypto.subtle.decrypt(
        {
          name: "RSA-OAEP"
        },
        privateKey,
        ciphertext
      );
    };

    /**
     * @param buffer An ArrayBuffer
     * @return A string containing buffer in Base64 encoding.
     */
    me.arrayBufferToBase64 = function(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    };

    /**
     * @param base64 A Base64-encoded ArrayBuffer
     * @return An ArrayBuffer
     */
    me.base64ToArrayBuffer = function(base64) {
      var binary_string =  window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    };

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

    me.encrypt = function(plaintext,
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
            var importedPublicKeyPromise = me.importPublicKey(key.public_key);
            importedPublicKeyPromise.then(function(importedPublicKey) {
              var cipherPromise = me.encryptMessage(importedPublicKey, plaintext);
              cipherPromise.then(function(cipher) {
                var ciphertext = me.arrayBufferToBase64(cipher);
                var timecapsuleCipherText = me.toTimecapsuleCipher(lockDate, ciphertext);
                onSuccess(timecapsuleCipherText);
              });
            });
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
        var ciphertext = me.extractTimecapsuleCipherCipher(timecapsuleCipher);

        $.ajax({
          url: me.getTimecapsuleURL() + "keys/lockdate/" + encodeURIComponent(lockDate),
          type: "GET",
          contentType: 'application/json; charset=utf-8',
          success: function(key) {
            if (key.private_key) {
              var importedPrivateKeyPromise = me.importPrivateKey(key.private_key);
              importedPrivateKeyPromise.then(function (importedPrivateKey) {
                var decryptedPromise = me.decryptMessage(importedPrivateKey,
                                                         me.base64ToArrayBuffer(ciphertext));
                decryptedPromise.then(function(plaintext) {
                  var textDecoder = new TextDecoder();
                  onSuccess(textDecoder.decode(plaintext), lockDate);
                });
              });
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
