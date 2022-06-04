/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";L.setLogEntriesLimit(Infinity);var B={initSupportRules:function(s,d){sap.ui.require(["sap/ui/support/supportRules/Main","sap/ui/support/jQuery.sap.support"],function(M){if(s[0].toLowerCase()==="true"||s[0].toLowerCase()==="silent"){var h=d&&d.onReady&&typeof d.onReady==="function";if(!M._pluginStarted){if(h){M.attachEvent("ready",d.onReady);}M.startPlugin(s);}else{if(h){d.onReady();}}L.logSupportInfo(true);}});}};return B;});
