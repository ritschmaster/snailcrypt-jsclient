/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject",'sap/ui/test/matchers/Matcher',"sap/base/strings/capitalize"],function(M,a,c){"use strict";return a.extend("sap.ui.test.matchers.PropertyStrictEquals",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"},value:{type:"any"}}},constructor:function(s){if(s&&s.value){s.value=M.escapeSettingsValue(s.value);}a.prototype.constructor.call(this,s);},isMatching:function(C){var p=this.getName(),P=C["get"+c(p,0)];if(!P){this._oLogger.error("Control '"+C+"' does not have a property '"+p+"'");return false;}var v=P.call(C);var m=v===this.getValue();if(!m){this._oLogger.debug("Control '"+C+"' property '"+p+"' has value '"+v+"' but should have value '"+this.getValue()+"'");}return m;}});});
