/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils","sap/base/Log"],function(U,L){"use strict";function e(v){if(!v){return"";}return v;}return function(){var u=U.getUshellContainer();if(u){return U.getUShellService("UserInfo").then(function(o){if(!o){return{};}var a=o.getUser();if(!a){return{};}var E=e(a.getEmail());var d;if(E){d=e(/@(.*)/.exec(E)[1]);}else{d="";}return{fullName:e(a.getFullName()),firstName:e(a.getFirstName()),lastName:e(a.getLastName()),email:E,domain:d};}).catch(function(E){L.error("Unexpected exception when reading shell user info: "+E.toString());return{};});}return Promise.resolve({});};});
