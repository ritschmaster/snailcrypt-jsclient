/*
* ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/ui/mdc/p13n/Engine"],function(E){"use strict";var S={applyExternalState:function(c,s){var i=E.getInstance().internalizeKeys(c,s);return E.getInstance().applyState(c,i);},retrieveExternalState:function(c){return E.getInstance().retrieveState(c).then(function(e){return E.getInstance().externalizeKeys(c,e);});},diffState:function(c,o,n){return sap.ui.mdc.p13n.Engine.getInstance().diffState(c,E.getInstance().internalizeKeys(c,o),E.getInstance().internalizeKeys(c,n)).then(function(e){return E.getInstance().externalizeKeys(c,e);});},attachStateChange:function(l){E.getInstance().stateHandlerRegistry.attachChange(l);},detachStateChange:function(l){E.getInstance().stateHandlerRegistry.detachChange(l);}};return S;});
