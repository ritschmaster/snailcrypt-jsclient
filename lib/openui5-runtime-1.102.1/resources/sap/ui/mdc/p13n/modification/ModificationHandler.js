/*
* ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/ui/base/Object","sap/base/util/merge","sap/ui/core/util/reflection/JsControlTreeModifier"],function(B,m,J){"use strict";var M;var a=B.extend("sap.ui.mdc.p13n.modification.ModificationHandler");a.prototype.processChanges=function(c,o){return Promise.resolve();};a.prototype.waitForChanges=function(p,o){return Promise.resolve();};a.prototype.reset=function(p,o){return Promise.resolve();};a.prototype.isModificationSupported=function(p,o){return false;};a.getInstance=function(){if(!M){M=new a();}return M;};return a;});
