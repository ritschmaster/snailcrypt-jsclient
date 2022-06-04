/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/includes"],function(i){"use strict";return{async:false,errorMessage:"BASE_EDITOR.VALIDATOR.DUPLICATE_KEY",validate:function(v,c){return(c.currentKey===undefined||!i(c.keys,v)||v===undefined||v===c.currentKey);}};});
