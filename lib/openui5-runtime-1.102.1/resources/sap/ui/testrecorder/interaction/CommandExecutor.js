/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/testrecorder/interaction/Commands","sap/ui/testrecorder/interaction/Highlight","sap/ui/testrecorder/interaction/Press","sap/ui/testrecorder/interaction/EnterText","sap/ui/testrecorder/interaction/Assert"],function(C,H,P,E,A){"use strict";return{execute:function(c,d){switch(c){case"HIGHLIGHT":H.execute(d.domElementId);break;case"PRESS":P.execute(d.domElementId);break;case"ENTER_TEXT":E.execute(d.domElementId);break;case"ASSERT":A.execute(d);break;default:throw new Error("Command "+c+" is not known! Known commands are: "+Object.keys(C));}}};});
