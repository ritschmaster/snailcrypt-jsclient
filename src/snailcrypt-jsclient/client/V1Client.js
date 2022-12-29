sap.ui.define([
	"snailcrypt-jsclient/config",
	"snailcrypt-jsclient/facade/urlFacade",
	"snailcrypt-jsclient/client/ClientVersion"
], function (config,
             UrlFacade,
             ClientVersion) {
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
      return forge.pki.publicKeyFromPem(pem);
    };

    /**
     * @param pem A string.
     * @return A Promise containing a CryptoKey which is the private key.
     */
    me.importPrivateKey = function(pem) {
	  return forge.pki.privateKeyFromPem(pem);
    };

    me.plainTextChunkSize = 126;

    /**
     * @param publicKey A CryptoKey
     * @param plaintext A string representing the plain text.
     * @return An ArrayBuffer representing the cipher text.
     */
    me.encryptMessage = function(publicKey, plaintext) {
      /**
       * The amount of bits divided by the length of bits in a byte lets us know
       * the size of the cipher text chunk in bytes
       */
      var cipherTextChunkSize = Math.ceil(publicKey.n.bitLength() / 8);

      var encoder = new TextEncoder();
      var encoded = encoder.encode(plaintext);
      
      var decoder = new TextDecoder();

      var cipherText = new ArrayBuffer(Math.ceil(plaintext.length / me.plainTextChunkSize) * cipherTextChunkSize);
      var cipherTextArr = new Uint8Array(cipherText);
      for (var i = 0; i * me.plainTextChunkSize < plaintext.length; i++) {      	      
      	var plaintextChunk = encoded.slice(i * me.plainTextChunkSize,
                                           i * me.plainTextChunkSize + me.plainTextChunkSize);
        var plaintextChunkStr = decoder.decode(plaintextChunk);
      
      	var cipherTextChunkStr = publicKey.encrypt(plaintextChunkStr,      								
												   'RSA-OAEP');
		var cipherTextChunkByteBuffer = forge.util.createBuffer(cipherTextChunkStr);												   

        var cipherTextChunkArr = new Uint8Array(new ArrayBuffer(cipherTextChunkSize));
		for (var j = 0; j < cipherTextChunkSize; j++) {
			cipherTextChunkArr[j] = cipherTextChunkByteBuffer.at(j);
		}

        cipherTextArr.set(cipherTextChunkArr,
                          i * cipherTextChunkSize,
                          i * cipherTextChunkSize + cipherTextChunkSize + 1)
      }

      return cipherText;
    };

    /**
     * @param publicKey A CryptoKey
     * @param ciphertext An ArrayBuffer representing the ciphertext.
     * @return An Uint8Array representing the plain text.
     */
    me.decryptMessage = function(privateKey, cipherText) {
	    var textEncoder = new TextEncoder();
    
      /**
       * The amount of bits divided by the length of bits in a byte lets us know
       * the size of the cipher text chunk in bytes
       */
      var cipherTextChunkSize = Math.ceil(privateKey.n.bitLength() / 8);

      var cipherTextArr = new Uint8Array(cipherText);
      var plainText = new ArrayBuffer(cipherText.byteLength * cipherTextChunkSize);
      var plainTextArr = new Uint8Array(cipherText);
      var plainTextPointer = 0;
      var cipherTextChunk = new ArrayBuffer(cipherTextChunkSize);
      var cipherTextChunkArr = new Uint8Array(cipherTextChunk);
      for (var i = 0; i * cipherTextChunkSize < cipherTextArr.length; i++) {
        cipherTextChunkArr.set(cipherTextArr.slice(i * cipherTextChunkSize,
                                                   i * cipherTextChunkSize + cipherTextChunkSize),
                               0,
                               cipherTextChunkSize + 1);
                               
		var plainTextChunkStr = privateKey.decrypt(cipherTextChunkArr, 'RSA-OAEP');
		var plainTextChunk = textEncoder.encode(plainTextChunkStr);
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

    me.toSnailcryptCipher = function(version, lockDate, cipher) {
      return version + ":" + btoa(lockDate) + ":" + cipher;
    };

    me.extractSnailcryptCipherLockDate = function(snailcryptCipher) {
      var cipherArray = snailcryptCipher.split(':');
      if (cipherArray.length != 3) {
        throw 'Not a valid snailcrypt string: date cannot be retrieved.'
      }

      var lockDate = null;
      try {
        lockDate = atob(cipherArray[1]);

        var datetime = new Date(lockDate);
        if (datetime.getTime() != datetime.getTime()) {
          throw 'error';
        }
      } catch (exception) {
        throw 'Not a valid snailcrypt string: date part is broken.'
      }

      return lockDate;
    };

    me.extractSnailcryptCipherCipher = function(snailcryptCipher) {
      var cipherArray = snailcryptCipher.split(':');
      return cipherArray[2];
    };

    me.encrypt = function(plaintext,
                          lockDate,
                          onSuccess,
                          onEncryptionError,
                          onHttpError) {
      $.ajax({
        url: me.urlFacade.getSnailcryptURL() + "keys",
        type: "POST",
        data: JSON.stringify({
          "lock_date": lockDate
        }),
        contentType: 'application/json; charset=utf-8',
        success: function(key) {
          if (key.public_key) {
            var importedPublicKey = me.importPublicKey(key.public_key);
            var ciphertext = me.encryptMessage(importedPublicKey, plaintext);
            var ciphertextBase64 = me.arrayBufferToBase64(ciphertext);
            var snailcryptCiphertext = me.toSnailcryptCipher(ClientVersion.V1, lockDate, ciphertextBase64);
            onSuccess(snailcryptCiphertext);
          } else {
            onEncryptionError();
          }
        },
        error: function(request, statusText, errorText) {
          onHttpError(request);
        }
      });
    };

    me.decrypt = function(snailcryptCipher,
                          onSuccess,
                          onCipherError,
                          onNotReleasedYet,
                          onHttpError) {
      var lockDate = null;
      try {
        lockDate = me.extractSnailcryptCipherLockDate(snailcryptCipher);
      } catch (exception) {
        onCipherError(exception);
      }

      if (lockDate) {
        var ciphertext = me.extractSnailcryptCipherCipher(snailcryptCipher);

        $.ajax({
          url: me.urlFacade.getSnailcryptURL() + "keys/lockdate/" + encodeURIComponent(lockDate),
          type: "GET",
          contentType: 'application/json; charset=utf-8',
          success: function(key) {
            if (key.private_key) {
              var importedPrivateKey = me.importPrivateKey(key.private_key);
              var plaintext = me.decryptMessage(importedPrivateKey,
                                                       me.base64ToArrayBuffer(ciphertext));
              var textDecoder = new TextDecoder();
              onSuccess(textDecoder.decode(plaintext), lockDate);
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
