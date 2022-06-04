/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseContentRenderer"],function(B){"use strict";var C=B.extend("sap.ui.integration.cards.ComponentContentRenderer",{apiVersion:2});C.getMinHeight=function(c,o){if(c.minHeight){return c.minHeight;}return B.getMinHeight.apply(this,arguments);};return C;});
