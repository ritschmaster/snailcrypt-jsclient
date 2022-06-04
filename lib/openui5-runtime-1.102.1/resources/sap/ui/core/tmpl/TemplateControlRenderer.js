/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var T={apiVersion:1};T.render=function(r,c){var s=c.isInline()||this.hasControlData;if(!s){r.openStart("div",c).openEnd();}var R=this.renderTemplate||c.getTemplateRenderer();if(R){R.apply(this,arguments);}if(!s){r.close("div");}};return T;},true);
