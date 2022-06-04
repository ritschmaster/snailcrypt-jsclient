/*!
* OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.require(["sap/ui/integration/designtime/editor/CardEditor","sap/ui/integration/customElements/CustomElementBase"],function(C,a){"use strict";var b=a.extend(C,{});b.prototype.getCurrentSettings=function(){return this._getControl().getCurrentSettings();};var d=["ui-integration-card"];a.define("ui-integration-card-editor",b,d);});
