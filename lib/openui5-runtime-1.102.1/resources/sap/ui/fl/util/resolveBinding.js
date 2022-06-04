/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/fl/Utils"],function(M,F){"use strict";var H=M.extend("sap.ui.fl.util.HelperControl",{metadata:{library:"sap.ui.fl",properties:{resolved:{type:"any"}}}});return function(v,r){if(!F.isBinding(v)){return undefined;}var V=F.getViewForControl(r);var c=V&&V.getController();var b=typeof v==="string"?M.bindingParser(v,c):Object.assign({},v);if(!b){return undefined;}var h=new H();var p=b.parts||[b];p.forEach(function(B){var m=B.model;if(m){h.setModel(r.getModel(m),m);h.setBindingContext(r.getBindingContext(m),m);}else{h.setModel(r.getModel());h.setBindingContext(r.getBindingContext());}});h.bindProperty("resolved",b);var R=h.getResolved();h.destroy();return R;};});
