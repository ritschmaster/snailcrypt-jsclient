/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var i={initials:function(v,l){var V=v.split(' '),l=!l?2:l,I='';V.forEach(function(e){I+=e.substring(0,1);});I=l===2?I.charAt(0)+I.charAt(I.length-1):I.substring(0,l);return I.toUpperCase();}};return i;});
