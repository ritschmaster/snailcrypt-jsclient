/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/integration/designtime/baseEditor/validator/IsValidBinding"],function(I){"use strict";return{async:false,errorMessage:"BASE_EDITOR.VALIDATOR.FAILED_PATTERN_TEST",validate:function(v,c){var m=c.modifiers||"";var r=new RegExp(c.pattern,m);var e=c.exactMatch!==false;if(v===undefined){return true;}var i;if(e){var M=v.match(r);i=M&&v===M[0];}else{i=r.test(v);}return i||I.validate(v,{allowPlainStrings:false});}};});
