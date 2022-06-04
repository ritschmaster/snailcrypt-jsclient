/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/m/SelectList","sap/ui/core/Item"],function(_,S,I){"use strict";var a=_.extend("sap.ui.test.selectors._DropdownItem",{_generate:function(c,s){if(s.ancestor){var b=c.getKey();this._oLogger.debug("Control "+c+" with parent "+JSON.stringify(s.ancestor)+" has selection key "+b);return{ancestor:s.ancestor,properties:{key:b}};}else{this._oLogger.debug("Control "+c+" is not inside a supported dropdown");}},_isAncestorRequired:function(){return true;},_getAncestor:function(c){if(c instanceof I){var s=c.getParent();if(s&&s instanceof S){return s;}}}});return a;});
