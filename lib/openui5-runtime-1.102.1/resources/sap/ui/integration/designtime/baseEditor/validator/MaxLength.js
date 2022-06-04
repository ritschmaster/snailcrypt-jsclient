/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/validator/IsValidBinding","sap/base/util/restricted/_isNil"],function(I,_){"use strict";return{async:false,errorMessage:{message:"BASE_EDITOR.VALIDATOR.MAX_LENGTH",placeholders:function(c){return[c.maxLength];}},validate:function(v,c){return _(v)||(typeof v==="string"&&v.length<=c.maxLength)||I.validate(v,{allowPlainStrings:false});}};});
