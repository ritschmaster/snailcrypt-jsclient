/*!
* OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["./LinkWithIconRenderer","sap/ui/integration/library","sap/m/Link","sap/ui/core/Icon"],function(L,l,a,I){"use strict";var b=a.extend("sap.ui.integration.controls.LinkWithIcon",{metadata:{library:"sap.ui.integration",properties:{icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""}},aggregations:{_icon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"}}}});b.prototype.onBeforeRendering=function(){a.prototype.onBeforeRendering.apply(this,arguments);if(this.getIcon()){this._getIcon().setSrc(this.getIcon());}this.addStyleClass("sapUiIntCardLinkWithIcon");};b.prototype._getIcon=function(){var i=this.getAggregation("_icon");if(!i){i=new I();this.setAggregation("_icon",i);}return i;};return b;});
