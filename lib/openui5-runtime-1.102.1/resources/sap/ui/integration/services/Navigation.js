/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./Service'],function(S){"use strict";var N=S.extend();N.prototype.navigate=function(c){};N.prototype.enabled=function(c){return Promise.resolve(false);};N.prototype.hidden=function(c){return Promise.resolve(false);};return N;});
