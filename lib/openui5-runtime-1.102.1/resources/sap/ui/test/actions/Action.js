/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/ManagedObject','sap/ui/qunit/QUnitUtils','sap/ui/test/Opa5','sap/ui/Device',"sap/ui/thirdparty/jquery","sap/ui/test/_OpaLogger"],function(M,Q,O,D,q,_){"use strict";return M.extend("sap.ui.test.actions.Action",{metadata:{properties:{idSuffix:{type:"string"}},publicMethods:["executeOn"]},executeOn:function(){return true;},$:function(c){var a;var e="";if(this.getIdSuffix()){a=c.$(this.getIdSuffix());e=a.length?"":"DOM representation of control '"+c+"' has no element with user-provided ID suffix '"+this.getIdSuffix()+"'";}else{var A=this._getAdapter(c);if(A){a=c.$(A);e=a.length?"":"DOM representation of control '"+c+"' has no element with ID suffix '"+A+"' which is the default adapter for '"+this.getMetadata().getName()+"'";}if(!a||!a.length){a=q(c.getFocusDomRef());if(!a.length){a=c.$();if(!a.length){e+="DOM representation of control '"+c+"' has no focus DOM reference";}}}}if(a.length){this.oLogger.info("Found a DOM reference for the control '"+c+"'. Executing '"+this.getMetadata().getName()+"' on the DOM element with ID '"+a[0].id+"'");return a;}else{this.oLogger.error(e);throw new Error(e);}},getUtils:function(){return O.getUtils()||Q;},init:function(){this.controlAdapters={};this.oLogger=_.getLogger(this.getMetadata().getName());},dropPosition:{BEFORE:"BEFORE",AFTER:"AFTER",CENTER:"CENTER"},_getAdapter:function(c){var g=function(m){var a=this.controlAdapters[m.getName()];if(a){if(typeof a==="function"){return a(c);}if(typeof a==="string"){return a;}}var p=m.getParent();if(p){return g(p);}return null;}.bind(this);return g(c.getMetadata());},_tryOrSimulateFocusin:function(d,c){var o=d[0];var f=false;var i=this._isFocused(o);var I=D.browser.firefox&&D.browser.version>=60;if(i||I){f=true;}else{d.trigger("focus");var w=this._isFocused(o);f=!w;}if(f){this.oLogger.debug("Control "+c+" could not be focused - maybe you are debugging?");this._createAndDispatchFocusEvent("focusin",o);this._createAndDispatchFocusEvent("focus",o);this._createAndDispatchFocusEvent("activate",o);}if(!this._isFocused(o)){this.oLogger.trace("Control "+c+" could not be focused-in correctly. This may lead to lost interactions with the control");}},_simulateFocusout:function(d){this._createAndDispatchFocusEvent("focusout",d);this._createAndDispatchFocusEvent("blur",d);this._createAndDispatchFocusEvent("deactivate",d);},_createAndDispatchMouseEvent:function(n,d,s,a,c,C,i){var l=0;var m;m=new MouseEvent(n,{bubbles:true,cancelable:true,identifier:1,target:d,radiusX:1,radiusY:1,rotationAngle:0,button:l,type:n,shiftKey:s,altKey:a,ctrlKey:c,clientX:C,clientY:i});d.dispatchEvent(m);},_createAndDispatchFocusEvent:function(n,d){var f,b=["focusin","focusout","activate","deactivate"].indexOf(n)!==-1;f=new FocusEvent(n,{type:n,target:d,curentTarget:d,bubbles:b});d.dispatchEvent(f);this.oLogger.info("Dispatched focus event: '"+n+"'");},_createAndDispatchDragEvent:function(n,d,o){var c=this._getEventCoordinates(d,o);var a=new DataTransfer();var b;b=new DragEvent(n,{type:n,eventPhase:3,bubbles:true,cancelable:true,defaultPrevented:false,composed:true,returnValue:true,cancelBubble:false,target:d,toElement:d,srcElement:d,radiusX:1,radiusY:1,rotationAngle:0,clientX:c.x,clientY:c.y,dataTransfer:a});d.dispatchEvent(b);},_createAndDispatchScrollEvent:function(d,o){if(o.x!=null){d.scrollLeft=o.x;}if(o.y!=null){d.scrollTop=o.y;}var s=new Event("scroll",{bubbles:false,cancelBubble:false,cancelable:false,composed:false,currentTarget:null,defaultPrevented:false,eventPhase:0,isTrusted:true,returnValue:true,target:d,srcElement:d,type:"scroll"});d.dispatchEvent(s);},_getEventCoordinates:function(d,o){var $=q(d);var a=$.offset();var c={x:a.left+$.outerWidth()/2,y:a.top+$.outerHeight()/2};if(!o){return c;}switch(o.position){case this.dropPosition.BEFORE:return{x:a.left,y:a.top};case this.dropPosition.AFTER:return{x:a.left+$.outerWidth(),y:a.top+$.outerHeight()};case this.dropPosition.CENTER:default:return c;}},_isFocused:function(d){var i=d===document.activeElement;var b=!document.hasFocus||document.hasFocus();var I=!!(d.type||d.href||~d.tabIndex);return i&&b&&I;}});});