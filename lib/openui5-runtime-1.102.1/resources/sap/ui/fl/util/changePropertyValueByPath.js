/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";function s(e,r){var p=e.propertyPath.split("/");var v=O.get(p,r);if(v&&e.operation==="INSERT"){throw new Error("Path has already a value. 'INSERT' operation is not appropriate.");}if(!v&&e.operation==="UPDATE"){throw new Error("Path does not contain a value. 'UPDATE' operation is not appropriate.");}O.set(p,e.propertyValue,r);}return function(c,r){if(Array.isArray(c)){c.forEach(function(e){s(e,r);});}else{s(c,r);}};});
