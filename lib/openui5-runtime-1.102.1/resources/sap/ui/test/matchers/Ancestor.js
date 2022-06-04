/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/test/matchers/_Visitor"],function(L,_){"use strict";var l=L.getLogger("sap.ui.test.matchers.Ancestor");var v=new _();return function(a,d){return function(c){if(!a){l.debug("No ancestor was defined so no controls will be filtered.");return true;}var r=v.isMatching(c,function(C){if(C===c){return false;}if(typeof a==="string"){return C&&C.getId()===a;}return C===a;},d);l.debug("Control '"+c+(r?"' has ":"' does not have ")+(d?"direct ":"")+"ancestor '"+a);return r;};};},true);
