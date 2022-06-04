/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Core","sap/ui/core/CommandExecution"],function(L,C,a){"use strict";var S=function(c,o){this.oControl=c;this.oConfig=o;};S.prototype._getShortcutText=function(){var t;if(this.oConfig.commandName){t=this._getShortcutHintFromCommandExecution(this.oControl,this.oConfig.commandName);}else if(this.oConfig.message){t=this.oConfig.message;}else if(this.oConfig.messageBundleKey){t=this._getShortcutHintFromMessageBundle(this.oControl,this.oConfig.messageBundleKey);}return t;};S.prototype._getShortcutHintFromCommandExecution=function(c,s){try{return a.find(c,s)._getCommandInfo().shortcut;}catch(e){L.error("Error on retrieving command shortcut. Command "+s+" was not found!");}};S.prototype._getShortcutHintFromMessageBundle=function(c,m){var r=C.getLibraryResourceBundle(c.getMetadata().getLibraryName());return r.getText(m);};return S;});
