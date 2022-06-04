/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/restricted/_uniq"],function(_){"use strict";return{async:false,errorMessage:"BASE_EDITOR.VALIDATOR.DUPLICATE_ENTRY",validate:function(v){return v===undefined||v.length===_(v).length;}};});
