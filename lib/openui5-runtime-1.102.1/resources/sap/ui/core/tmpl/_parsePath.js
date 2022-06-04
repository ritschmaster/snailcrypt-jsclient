/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return function(p){var m,s=p.indexOf(">");if(s>0){m=p.substr(0,s);p=p.substr(s+1);}return{path:p,model:m};};});
