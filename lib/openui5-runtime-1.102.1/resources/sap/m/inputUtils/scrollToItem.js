/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var s=function(i,p){var I=i&&i.getDomRef&&i.getDomRef(),P=p&&p.getDomRef&&p.getDomRef('cont');if(!P||!I){return;}var a=P.scrollTop,b=I.offsetTop,c=P.clientHeight,d=I.offsetHeight;if(a>b){P.scrollTop=b;}else if((b+d)>(a+c)){P.scrollTop=Math.ceil(b+d-c);}};return s;});
