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

    me.getSnailcryptAppURL = function(cipher) {
      var url = config.snailcryptAppProtocol
          + "://"
          + config.snailcryptAppDomain
          + ":"
          + config.snailcryptAppPort
          + config.snailcryptAppPath;

      if (cipher) {
        url += '?c=' + encodeURIComponent(cipher);
      }

      return url;
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
