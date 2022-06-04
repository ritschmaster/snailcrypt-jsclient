/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/validator/IsValidBinding"],function(I){"use strict";return{async:false,errorMessage:"BASE_EDITOR.VALIDATOR.NOT_A_NUMBER",validate:function(v){return v===undefined||I.validate(v,{allowPlainStrings:false})||!isNaN(v);}};});
