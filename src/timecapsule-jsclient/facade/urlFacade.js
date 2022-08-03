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
    };
  }
});
