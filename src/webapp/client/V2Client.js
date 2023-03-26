sap.ui.define([
	"snailcrypt-jsclient/client/ClientVersion",
	"snailcrypt-jsclient/client/V1Client"
], function (
	ClientVersion,
	V1Client
) {
	return function() {
		var superClass = new V1Client();
		var me = this;
		
		me.encrypt = function(plaintext,
	                          lockDate,
	                          hint,
	                          onSuccess,
	                          onEncryptionError,
	                          onHttpError) {
			superClass.encrypt(plaintext,
							   lockDate,
							   '',
							   function(cipher) {
								 var cipherArray = cipher.split(':');
								 cipherArray[0] = ClientVersion.V2;
								 cipherArray.push(btoa(hint));
								 var v2Cipher = cipherArray.join(':');
								   
								 onSuccess(v2Cipher);
							   },
							   onEncryptionError,
							   onHttpError);
		};
		
	    me.decrypt = function(snailcryptCipher,
							  onHint,
			                  onSuccess,
			                  onCipherError,
			                  onNotReleasedYet,
		                  	  onHttpError) {
			try {
				var hint = me.extractSnailcryptCipherHint(snailcryptCipher);
				onHint(true, hint)
			} catch (exception) {
				onCipherError(exception);				
				return;
			}
			
			var cipherArray = snailcryptCipher.split(':');
			cipherArray[0] = ClientVersion.V1;
			/**
			 * Delete last element (= the hint)
			 */
			cipherArray.splice(3, 1);
			var v1Cipher = cipherArray.join(':');
									
			superClass.decrypt(v1Cipher,
							   function () {										  
							   },
							   onSuccess,
							   onCipherError,
							   onNotReleasedYet,
							   onHttpError);
		};
		
		me.toSnailcryptCipher = function(lockDate, hint, cipher) {
	      return ClientVersion.V2 + ":" + btoa(lockDate) + ":" + cipher + ":" + hint;
	    };
	
	    me.extractSnailcryptCipherLockDate = function(snailcryptCipher) {
	      var cipherArray = snailcryptCipher.split(':');
	      if (cipherArray.length != 4) {
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
	      
	      if (cipherArray.length != 4) {
	        throw 'Not a valid snailcrypt string: cipher text cannot be retrieved.'
	      }
	      
	      return cipherArray[2];
	    };
	    
	    me.extractSnailcryptCipherHint = function(snailcryptCipher) {
		  var cipherArray = snailcryptCipher.split(':');
		  
		  if (cipherArray.length != 4) {
	        throw 'Not a valid snailcrypt string: hint cannot be retrieved.'
	      }
	      
	      return atob(cipherArray[3]);
		}
		
		return me;	
	};
});