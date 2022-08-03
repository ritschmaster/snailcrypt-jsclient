sap.ui.define([
	"timecapsule-jsclient/config",
	"timecapsule-jsclient/facade/urlFacade"
], function (config,
            UrlFacade) {
  "use strict";

  return function() {
    var me = this;

    me.urlFacade = new UrlFacade();

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

    me.plainTextChunkSize = 126;
    me.cipherTextChunkSize = 256;

    /**
     * @param publicKey A CryptoKey
     * @param plaintext A string representing the plain text.
     * @return An ArrayBuffer representing the cipher text.
     */
    me.encryptMessage = async function(publicKey, plaintext) {
      var encoder = new TextEncoder();
      var encoded = encoder.encode(plaintext);

      var cipherText = new ArrayBuffer(Math.ceil(plaintext.length / me.plainTextChunkSize) * me.cipherTextChunkSize);
      var cipherTextArr = new Uint8Array(cipherText);
      for (var i = 0; i * me.plainTextChunkSize < plaintext.length; i++) {
        console.log(encoded.slice(i * me.plainTextChunkSize,
                                                                               i * me.plainTextChunkSize + me.plainTextChunkSize))
        var cipherTextChunk = await window.crypto.subtle.encrypt({ name: "RSA-OAEP" },
                                                                 publicKey,
                                                                 encoded.slice(i * me.plainTextChunkSize,
                                                                               i * me.plainTextChunkSize + me.plainTextChunkSize));
        var cipherTextChunkArr = new Uint8Array(cipherTextChunk);
        console.log(cipherTextChunkArr);
        cipherTextArr.set(cipherTextChunkArr,
                          i * me.cipherTextChunkSize,
                          i * me.cipherTextChunkSize + me.cipherTextChunkSize + 1)
      }

      return cipherText;
    };

    /**
     * @param publicKey A CryptoKey
     * @param ciphertext An ArrayBuffer representing the ciphertext.
     * @return An Uint8Array representing the plain text.
     */
    me.decryptMessage = async function(privateKey, cipherText) {
      var cipherTextArr = new Uint8Array(cipherText);
      var plainText = new ArrayBuffer(cipherText.byteLength * me.cipherTextChunkSize);
      var plainTextArr = new Uint8Array(cipherText);
      var plainTextPointer = 0;
      var cipherTextChunk = new ArrayBuffer(me.cipherTextChunkSize);
      var cipherTextChunkArr = new Uint8Array(cipherTextChunk);
      for (var i = 0; i * me.cipherTextChunkSize < cipherTextArr.length; i++) {
        cipherTextChunkArr.set(cipherTextArr.slice(i * me.cipherTextChunkSize,
                                                   i * me.cipherTextChunkSize + me.cipherTextChunkSize),
                               0,
                               me.cipherTextChunkSize + 1);
        var plainTextChunk = await window.crypto.subtle.decrypt({ name: "RSA-OAEP" },
                                                                privateKey,
                                                                cipherTextChunk);
        var plainTextChunkArr = new Uint8Array(plainTextChunk);

        plainTextArr.set(plainTextChunkArr,
                         plainTextPointer,
                         plainTextPointer + plainTextChunkArr.length);

        plainTextPointer += plainTextChunkArr.length;
      }

      var plainTextFinal = new ArrayBuffer(plainTextPointer);
      var plainTextFinalArr = new Uint8Array(plainTextFinal);
      plainTextFinalArr.set(plainTextArr.slice(0,
                                               plainTextPointer),
                            0,
                            plainTextPointer + 1);

      return plainTextFinalArr;
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
        url: me.urlFacade.getTimecapsuleURL() + "keys",
        type: "POST",
        data: JSON.stringify({
          "lock_date": lockDate
        }),
        contentType: 'application/json; charset=utf-8',
        success: function(key) {
          if (key.public_key) {
            var importedPublicKeyPromise = me.importPublicKey(key.public_key);
            importedPublicKeyPromise.then(function(importedPublicKey) {
              var cipherTextPromise = me.encryptMessage(importedPublicKey, plaintext);
              cipherTextPromise.then(function(cipherText) {
                var cipherTextBase64 = me.arrayBufferToBase64(cipherText);
                var timecapsuleCipherText = me.toTimecapsuleCipher(lockDate, cipherTextBase64);
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
          url: me.urlFacade.getTimecapsuleURL() + "keys/lockdate/" + encodeURIComponent(lockDate),
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
