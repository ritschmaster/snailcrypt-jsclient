/*!
* OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.require(["sap/ui/integration/widgets/Card","sap/ui/integration/customElements/CustomElementBase","sap/m/BadgeCustomData"],function(C,a,B){"use strict";var b=a.extend(C,{privateProperties:["width","height"],customProperties:{"badge":{set:function(c,v){c.addCustomData(new B({value:v}));}}}});b.prototype.refresh=function(){this._getControl().refresh();};b.prototype.loadDesigntime=function(){return this._getControl().loadDesigntime();};a.define("ui-integration-card",b);});
