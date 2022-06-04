/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/testrecorder/interaction/Commands"],function(B,C){"use strict";var p=null;var P=B.extend("sap.ui.testrecorder.codeSnippets.POMethodUtil",{constructor:function(){if(!p){B.apply(this,arguments);}else{return p;}}});P.prototype.getPOMethod=function(s,S){if(S&&S.formatAsPOMethod){var a=s.map(function(a){return a.replace(/^/gm,"    ");}).join("\n\n");return this._getMethodName(S)+": function () {\n"+a+"\n}";}else{return s.join("\n\n");}};P.prototype._getMethodName=function(s){if(s.multipleSnippets){switch(s.action){case C.PRESS:case C.ENTER_TEXT:return"iInteractWithTheControls";default:return"iAssertTheUIState";}}else{switch(s.action){case C.PRESS:return"iPressTheControl";case C.ENTER_TEXT:return"iEnterTextInTheControl";default:return"iAssertTheControlState";}}};p=new P();return p;});
