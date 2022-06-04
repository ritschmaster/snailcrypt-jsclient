/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/validator/IsValidBinding"],function(I){"use strict";return{async:false,errorMessage:"BASE_EDITOR.VALIDATOR.FORBIDDEN_CUSTOM_VALUE",validate:function(v,c){if(Array.isArray(v)){var a=true;if(v.length>0){for(var i=0;i<v.length;i++){if(!(v[i]===undefined||(c.keys||[]).includes(v[i])||I.validate(v[i],{allowPlainStrings:false}))){a=false;break;}}}return a;}else{return v===undefined||(c.keys||[]).includes(v)||I.validate(v,{allowPlainStrings:false});}}};});
