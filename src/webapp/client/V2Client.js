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