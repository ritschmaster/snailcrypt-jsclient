/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/URLListValidator"],function(U){"use strict";return{"add":U.add,"delete":U._delete,"clear":U.clear,"entries":U.entries,"validate":U.validate,"_createEntry":function(p,h,a,b){return{protocol:p&&p.toUpperCase(),host:h&&h.toUpperCase(),port:a,path:b};}};});
