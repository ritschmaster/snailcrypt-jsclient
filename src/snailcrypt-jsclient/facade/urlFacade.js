sap.ui.define([
	"snailcrypt-jsclient/config"
], function (config) {
  "use strict";

  return function() {
    var me = this;

    me.getSnailcryptURL = function() {
      return config.snailcryptServerProtocol
        + "://"
        + config.snailcryptServerDomain
        + ":"
        + config.snailcryptServerPort
        + config.snailcryptServerPath;
    };

    me.getSnailcryptTimerURL = function(cipher) {
      var url = config.snailcryptTimerProtocol
          + "://"
          + config.snailcryptTimerDomain
          + ":"
          + config.snailcryptTimerPort
          + config.snailcryptTimerPath;

      if (cipher) {
        url += '?c=' + encodeURIComponent(cipher);
      }

      return url;
    };
  }
});
