/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";var C={applyChange:function(m,c){var o=c.getContent();var i=o.entityPropertyChange.operation==="UPSERT";var a=m["sap.ovp"].cards;var p=o.entityPropertyChange;if(Array.isArray(p)){throw Error("Expected value for oPropertyChange was an object");}if(!i){throw Error("This Operation is not supported");}if(o.cardId in a&&"propertyPath"in p){O.set([o.cardId,p.propertyPath],p.propertyValue,a);}else{throw Error("Change card settings was not found");}return m;}};return C;});
