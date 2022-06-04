/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/widgets/Card","sap/ui/integration/util/ManifestResolver"],function(C,M){"use strict";var S=C.extend("sap.ui.integration.util.SkeletonCard",{metadata:{library:"sap.ui.integration"}});S.prototype.resolveManifest=function(){return M.resolveCard(this);};S.prototype.isSkeleton=function(){return true;};S.prototype._createCard=function(s){return new S(s);};return S;});
