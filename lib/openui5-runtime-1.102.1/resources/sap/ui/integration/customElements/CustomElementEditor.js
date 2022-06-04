/*!
* OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.require(["sap/ui/integration/editor/Editor","sap/ui/integration/customElements/CustomElementBase"],function(E,C){"use strict";var a=C.extend(E,{});a.prototype.getCurrentSettings=function(){return this._getControl().getCurrentSettings();};C.define("ui-integration-editor",a);});
