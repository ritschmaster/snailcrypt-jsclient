/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/validator/IsValidBinding"],function(I){"use strict";return{async:false,errorMessage:I.errorMessage,validate:function(v){return v===undefined||v.every(function(i){return I.validate(i);});}};});
