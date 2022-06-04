/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_ControlFinder","sap/ui/testrecorder/CommunicationBus","sap/ui/testrecorder/CommunicationChannels","sap/ui/testrecorder/interaction/Commands"],function(_,C,a,b){"use strict";return{execute:function(d){var r=_._getIdentifiedDOMElementId("#"+d.domElementId);C.publish(a.SELECT_CONTROL_IN_TREE,{rootElementId:r,interactionElementId:d.domElementId,action:b.ASSERT,assertion:d.assertion});}};});
