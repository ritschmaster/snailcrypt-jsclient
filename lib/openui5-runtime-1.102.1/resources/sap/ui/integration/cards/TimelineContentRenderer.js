/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseContentRenderer"],function(B){"use strict";var T=B.extend("sap.ui.integration.cards.TimelineContentRenderer",{apiVersion:2});T.getMinHeight=function(c,C,o){var m=o.getContentPageSize(c);if(!m){return this.DEFAULT_MIN_HEIGHT;}var i=this.isCompact(C),I=i?4:5;return(m*I)+"rem";};return T;});
