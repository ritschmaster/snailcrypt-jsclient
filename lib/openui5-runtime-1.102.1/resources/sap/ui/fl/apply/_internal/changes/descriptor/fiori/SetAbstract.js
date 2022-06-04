/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";var S={applyChange:function(m,c){if(!c.getContent().hasOwnProperty("abstract")){throw new Error("No abstract in change content provided");}if(c.getContent().abstract!==false){throw new Error("The current change value of property abstract is '"+c.getContent().abstract+"'. Only allowed value for property abstract is boolean 'false'");}O.set(["sap.fiori","abstract"],c.getContent().abstract,m);return m;}};return S;});
