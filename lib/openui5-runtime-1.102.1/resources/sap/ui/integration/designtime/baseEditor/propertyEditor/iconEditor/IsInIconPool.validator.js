/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/validator/IsValidBinding","sap/base/util/restricted/_isNil","sap/ui/core/IconPool"],function(I,_,a){"use strict";return{async:false,errorMessage:"BASE_EDITOR.VALIDATOR.NOT_AN_ICON",validate:function(v){return _(v)||(typeof v==="string"&&a.isIconURI(v)&&!!a.getIconInfo(v))||I.validate(v,{allowPlainStrings:false});}};});
