/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BindingHelper","sap/base/util/merge","sap/ui/base/Object"],function(B,m,a){"use strict";var b=a.extend("sap.ui.integration.util.BaseFactory",{constructor:function(c){a.call(this);this._oCard=c;}});b.prototype.createBindingInfos=function(M){var r=m({},M),d=r.data;delete r.data;r=B.createBindingInfos(r,this._oCard.getBindingNamespaces());if(d){r.data=d;}return r;};return b;});
