/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/message/MessageProcessor'],function(M){"use strict";var C=M.extend("sap.ui.core.message.ControlMessageProcessor",{constructor:function(){if(!C._instance){M.apply(this,arguments);C._instance=this;}return C._instance;},metadata:{}});C._instance=null;C.prototype.setMessages=function(m){this.mOldMessages=this.mMessages===null?{}:this.mMessages;this.mMessages=m||{};this.checkMessages();delete this.mOldMessages;};C.prototype.checkMessages=function(){var m,t,a=Object.assign({},this.mMessages);for(t in this.mOldMessages){if(!(t in a)){a[t]=[];}}for(t in a){var b,c,p=t.split('/');if(!p[0]){p.shift();}c=sap.ui.getCore().byId(p[0]);if(!c||c._bIsBeingDestroyed){return;}b=c.getBinding(p[1]);m=a[t]?a[t]:[];if(b){var d=b.getDataState();d.setControlMessages(m);b.checkDataState();}else{c.propagateMessages(p[1],m);}}};return C;});
