/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/BindingParser"],function(B){"use strict";function i(I,a){var p;try{var e=I.replace(/{{([^{]*)}}/g,function(f,s){if(i(s)){return"${}";}throw"Invalid binding string";});p=B.complexParser(e);}catch(E){return false;}return a!==false?true:!!p;}return i;});
