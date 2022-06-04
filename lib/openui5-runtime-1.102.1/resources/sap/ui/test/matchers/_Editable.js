/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/test/matchers/Matcher','sap/ui/test/matchers/_Visitor'],function(M,_){"use strict";var v=new _();return M.extend("sap.ui.test.matchers._Editable",{isMatching:function(c){return!v.isMatching(c,function(C){if(!C.getEditable){return false;}var e=C.getEditable();if(!e){if(C===c){this._oLogger.debug("Control '"+c+"' is not editable");}else{this._oLogger.debug("Control '"+c+"' has a parent '"+C+"' that is not editable");}}return!e;}.bind(this));}});});
