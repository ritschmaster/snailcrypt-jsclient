/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseContentRenderer"],function(B){"use strict";var A=B.extend("sap.ui.integration.cards.AnalyticalContentRenderer",{apiVersion:2,MIN_ANALYTICAL_CONTENT_HEIGHT:"14rem"});A.getMinHeight=function(c,C){if(c.minHeight){return c.minHeight;}return A.MIN_ANALYTICAL_CONTENT_HEIGHT;};return A;});
