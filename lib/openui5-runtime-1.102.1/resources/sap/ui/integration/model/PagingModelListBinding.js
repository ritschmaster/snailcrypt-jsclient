/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/json/JSONListBinding"],function(J){"use strict";var P=J.extend("sap.ui.integration.model.PagingModelListBinding",{});P.prototype.update=function(){J.prototype.update.call(this);if(this._iStartIndex!==undefined){this.aIndices=this.aIndices.slice(this._iStartIndex,this._iEndIndex);}};return P;});
