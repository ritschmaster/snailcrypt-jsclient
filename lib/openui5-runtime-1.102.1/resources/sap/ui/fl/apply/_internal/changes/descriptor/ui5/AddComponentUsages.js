/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var A={applyChange:function(m,c){var C=c.getContent().componentUsages;if(!m["sap.ui5"]["componentUsages"]){m["sap.ui5"]["componentUsages"]={};}var M=m["sap.ui5"].componentUsages;Object.keys(C).forEach(function(s){if(M[s]){throw new Error("Component usage '"+s+"' already exists");}else{M[s]=C[s];}});return m;}};return A;});
