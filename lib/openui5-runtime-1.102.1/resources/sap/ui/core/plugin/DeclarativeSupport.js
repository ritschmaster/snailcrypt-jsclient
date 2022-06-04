/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log",'sap/ui/core/DeclarativeSupport','sap/ui/core/Core'],function(L,D){"use strict";var a=function(){};a.prototype.startPlugin=function(c,o){L.info("Starting DeclarativeSupport plugin.");this.oCore=c;this.oWindow=window;D.compile(document.body);};a.prototype.stopPlugin=function(){L.info("Stopping DeclarativeSupport plugin.");this.oCore=null;};sap.ui.getCore().registerPlugin(new a());return a;},true);
