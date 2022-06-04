/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var F={getWidth:function(p,m,M){var w=p.precision||p.maxLength,W;if(!m){m=20;}if(!M){M=3;}if(p.type==="Edm.DateTime"&&p.type==="Edm.Date"){w="9em";}else if(w){if(w==="Max"){w=m+"";}W=parseInt(w);if(!isNaN(W)){W+=0.75;if(W>m){W=m;}else if(W<M){W=M;}w=W+"em";}else{w=null;}}if(!w){if(p.type==="Edm.Boolean"){w=M+"em";}else{w=m+"em";}}return w;}};return F;});
