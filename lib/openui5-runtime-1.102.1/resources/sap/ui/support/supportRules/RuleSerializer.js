/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./util/EvalUtils"],function(E){"use strict";return{serialize:function s(r){var a=function(k,v){if(typeof v==="function"){return v.toString();}else{return v;}};var b=JSON.stringify(r,a);return b;},deserialize:function(s,a){var r;if(typeof s==='string'){r=JSON.parse(s);}else{r=s;}if(!a&&r.check!==undefined){r.check=E.evalFunction(r.check);}return r;}};},true);
