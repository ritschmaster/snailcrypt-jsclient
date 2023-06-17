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
