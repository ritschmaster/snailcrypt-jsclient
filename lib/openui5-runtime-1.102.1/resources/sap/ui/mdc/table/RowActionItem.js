/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Element','../library','sap/ui/core/IconPool','sap/ui/core/Core'],function(E,l,I,C){"use strict";var R=l.RowAction;var a=E.extend("sap.ui.mdc.table.RowActionItem",{metadata:{library:"sap.ui.mdc",properties:{type:{type:"sap.ui.mdc.RowAction"},text:{type:"string"},icon:{type:"sap.ui.core.URI"},visible:{type:"boolean",defaultValue:true}},events:{press:{parameters:{bindingContext:{type:"sap.ui.model.Context"}}}}}});var t={navigationIcon:"navigation-right-arrow"};a.prototype._getText=function(){var T;if(this.getText()){T=this.getText();}else{var r=C.getLibraryResourceBundle("sap.ui.mdc");if(this.getType()===R.Navigation){T=r.getText("table.ROW_ACTION_ITEM_NAVIGATE");}}return T;};a.prototype._getIcon=function(){var i;if(this.getIcon()){i=this.getIcon();}else if(this.getType()===R.Navigation){i=I.getIconURI(t["navigationIcon"]);}return i;};return a;});
