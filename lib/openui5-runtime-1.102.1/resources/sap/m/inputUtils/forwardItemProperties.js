/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/ListHelpers"],function(L){"use strict";var f=function(i,s){var I=i.item;var l=I.data(L.CSS_CLASS+"ListItem");var a;var p;var S;var d={text:"title",enabled:"visible",tooltip:"tooltip"};var b=i.propName;var c=i.propValue;if(!l){return;}if(d[b]){p=d[b];S="set"+p.charAt(0).toUpperCase()+p.slice(1);l[S](c);}if(b==="additionalText"){a=s?c:"";l.setInfo(a);}};return f;});
