sap.ui.define([
	"snailcrypt-jsclient/client/V1Client",
	"snailcrypt-jsclient/client/V2Client"
], function (
	V1Client,
	V2Client
) {
	return function() {
		const me = this;
		
		me.v1Client = new V1Client();
		me.v2Client = new V2Client();
		
		me.encrypt = function(plaintext,
	                          lockDate,
	                          hint,
	                          onSuccess,
	                          onEncryptionError,
	                          onHttpError) {
		  if (hint && hint.length > 0) {
		    me.v2Client.encrypt(plaintext,
		    					lockDate,
		    					hint,
		    					onSuccess,
		    					onEncryptionError,
		    					onHttpError);
		  } else {
			me.v1Client.encrypt(plaintext,
		    					lockDate,
		    					hint,
		    					onSuccess,
		    					onEncryptionError,
		    					onHttpError);
		  }
		};
		
	    me.decrypt = function(snailcryptCipher,
							  onHint,
			                  onSuccess,
			                  onCipherError,
			                  onNotReleasedYet,
		                  	  onHttpError) {
		  var cipherArray = snailcryptCipher.split(':');
	      if (cipherArray.length == 4) {
	      	me.v2Client.decrypt(snailcryptCipher,
	      						onHint,
	      						onSuccess,
	      						onCipherError,
	      						onNotReleasedYet,
	      						onHttpError) 
	      } else if (cipherArray.length == 3) {
		    me.v1Client.decrypt(snailcryptCipher,
		    					onHint,
		    					onSuccess,
		    					onCipherError,
		    					onNotReleasedYet,
		    					onHttpError)
		  } else {
			  onCipherError('Not a valid snailcrypt string');
		  }
		};
        
        me.strContainsHTMLTags = function(str) {
            var strContainsHTMLTags = /<\/?[a-z][\s\S]*>/i.test(str);
            
            return strContainsHTMLTags;
        };
		
		return me;	
	};
});
