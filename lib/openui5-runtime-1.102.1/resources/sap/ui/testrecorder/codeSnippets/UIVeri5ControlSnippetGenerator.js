/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/testrecorder/codeSnippets/ControlSnippetGenerator","sap/ui/testrecorder/interaction/Commands"],function(C,a){"use strict";var U=C.extend("sap.ui.testrecorder.codeSnippets.UIVeri5ControlSnippetGenerator",{});U.prototype._generate=function(d){var b="element(by.control("+this._getSelectorAsString(d.controlSelector)+"))";var s=this._getSelectorWithAssertion(b,d.assertion);return s+this._getActionAsString(d.action)+";";};U.prototype._getActionAsString=function(A){switch(A){case a.PRESS:return".click()";case a.ENTER_TEXT:return'.sendKeys("test")';default:return"";}};U.prototype._getSelectorWithAssertion=function(s,A){if(A){var m;if(!A.expectedValue||A.expectedValue==="false"){m=".toBeFalsy()";}else if(A.propertyType==="boolean"){m=".toBeTruthy()";}else{var e=this._escapeQuotes(A.expectedValue);m='.toEqual("'+e+'")';}return'expect('+s+'.asControl().getProperty("'+A.propertyName+'"))'+m;}else{return s;}};return new U();});
