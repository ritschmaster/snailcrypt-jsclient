/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/f/CardRenderer"],function(F){"use strict";var M={TYPE:"/sap.card/type"};return F.extend("sap.ui.integration.widgets.CardRenderer",{apiVersion:2,renderContainerAttributes:function(r,c){F.renderContainerAttributes.apply(this,arguments);r.class("sapUiIntCard");var C=c._oCardManifest;if(C&&C.get(M.TYPE)&&C.get(M.TYPE).toLowerCase()==="analytical"){r.class("sapUiIntCardAnalytical");}if(c.getAggregation("_footer")){r.class("sapUiIntCardWithFooter");}},renderContentSection:function(r,c){var f=c.getAggregation("_filterBar");if(f){r.renderControl(f);}F.renderContentSection.apply(this,arguments);},renderFooterSection:function(r,c){var f=c.getAggregation("_footer");if(f){r.renderControl(f);}}});});
