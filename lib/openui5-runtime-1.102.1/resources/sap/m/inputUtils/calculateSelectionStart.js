/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/inputUtils/selectionRange"],function(s){"use strict";var i=function(I,t){if(typeof I!="string"||I===""||typeof t!="string"||t===""){return false;}return I.toLowerCase().startsWith(t.toLowerCase());};var c=function(S,I,t,b){var a=S&&S.start!==S.end,d=i(I,t),e=!(d&&(a||b));return e?0:S.start;};return c;});
