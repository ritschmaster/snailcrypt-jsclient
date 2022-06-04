/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/HideControl","sap/ui/fl/changeHandler/UnhideControl"],function(H,U){"use strict";return{createChanges:function(d){return d.map(function(D){var c=sap.ui.getCore().byId(D.id);if(!c){throw new Error("Invalid 'id'. For the id "+D.id+" no existing control could be found");}return{selectorElement:c,changeSpecificData:{changeType:D.visible?"revealItem":"hideItem"}};});},revealItem:{layers:{USER:true},changeHandler:U},hideItem:{layers:{USER:true},changeHandler:H}};},true);
