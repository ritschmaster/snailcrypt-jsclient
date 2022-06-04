/*
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/model/odata/ODataModel'],function(O){"use strict";return{parse:function(m,M){if(!this._index){this._index=0;}var u="/annotationhandler"+this._index++ +"/";var a=sap.ui.require("sap/ui/core/util/MockServer");var o=new a({rootUri:u,requests:[{method:"GET",path:new RegExp("\\$metadata"),response:function(x){x.respond(200,{"Content-Type":"application/xml;charset=utf-8"},M);}}]});o.start();var b={annotationURI:[u+"$metadata"],json:true};var c=new O(u,b);var A=c.getServiceAnnotations();o.destroy();return A;}};},true);
