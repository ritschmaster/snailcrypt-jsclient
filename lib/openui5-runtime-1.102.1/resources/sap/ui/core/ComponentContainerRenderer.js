/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var C={apiVersion:2};C.render=function(r,c){var o=c.getComponentInstance();var w=c.getWidth();var h=c.getHeight();r.openStart("div",c);r.style("width",w);r.style("height",h);r.class("sapUiComponentContainer");r.openEnd();r.openStart("div",c.getId()+"-uiarea");if(w&&w!=="auto"){r.style("width","100%");}if(h&&h!=="auto"){r.style("height","100%");}r.openEnd();if(o){o.render(r);}r.close("div");r.close("div");};return C;},true);
