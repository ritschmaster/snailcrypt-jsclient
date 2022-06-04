/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseAction","sap/ui/util/openWindow"],function(B,o){"use strict";var N=B.extend("sap.ui.integration.cards.actions.NavigationAction",{metadata:{library:"sap.ui.integration"}});N.prototype.execute=function(){var r=this.getResolvedConfig();if(r.service){return;}var p=this.getParameters(),u,t,P,s;if(p){P=p.url;s=p.target;}u=r.url||P;t=r.target||s||"_blank";if(u){this._openUrl(u,t);}};N.prototype._openUrl=function(u,t){o(u,t);};return N;});
