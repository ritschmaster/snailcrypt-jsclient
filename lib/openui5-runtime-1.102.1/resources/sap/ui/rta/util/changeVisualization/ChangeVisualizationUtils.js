/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={};C.shortenString=function(s){if(!s){return null;}var S=s.length;if(S>60){var f=s.substring(0,27);var l=s.substring(S-27);s=f+"(...)"+l;}return s;};return C;});
