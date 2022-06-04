/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Element',"sap/ui/thirdparty/jquery",'./library'],function(E,q){"use strict";var L=E.extend("sap.ui.core.LayoutData",{metadata:{"abstract":true,library:"sap.ui.core"}});L.prototype.invalidate=function(){var p=this.getParent();if(p&&p.getMetadata().getName()=="sap.ui.core.VariantLayoutData"){p=p.getParent();}if(p){var l=p.getParent();if(l){var e=q.Event("LayoutDataChange");e.srcControl=p;l._handleEvent(e);}}};L.prototype.setLayoutData=function(l){return this;};return L;});
