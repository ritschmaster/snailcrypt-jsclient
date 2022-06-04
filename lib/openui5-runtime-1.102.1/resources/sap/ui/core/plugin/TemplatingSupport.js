/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log",'sap/ui/core/tmpl/Template','sap/ui/core/Core'],function(L){"use strict";var T=function(){};T.prototype.startPlugin=function(c,o){L.info("Starting TemplatingSupport plugin.");this.oCore=c;sap.ui.template();};T.prototype.stopPlugin=function(){L.info("Stopping TemplatingSupport plugin.");this.oCore=null;};sap.ui.getCore().registerPlugin(new T());return T;},true);
