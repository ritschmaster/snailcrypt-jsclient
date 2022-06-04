/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var w=function(t,v){var i;if(typeof t!=="string"||typeof v!=="string"){return false;}if(v===""){return true;}while(t){if(t.toLowerCase().indexOf(v.toLowerCase())===0){return true;}i=t.indexOf(' ');if(i===-1){break;}t=t.substring(i+1);}return false;};return w;});
