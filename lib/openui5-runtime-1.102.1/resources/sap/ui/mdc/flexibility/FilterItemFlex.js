/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./ItemBaseFlex'],function(I){"use strict";var f=Object.assign({},I);f.findItem=function(m,F,n){return F.find(function(o){var s;if(m.targets==="jsControlTree"){s=o.getFieldPath();}else{s=o.getAttribute("conditions");if(s){var e,S=s.indexOf("/conditions/");if(S>=0){s=s.slice(S+12);e=s.indexOf("}");if(e>=0){s=s.slice(0,e);}}}}return s===n;});};f.beforeApply=function(c){if(c.applyConditionsAfterChangesApplied){c.applyConditionsAfterChangesApplied();}};f.addFilter=f.createAddChangeHandler();f.removeFilter=f.createRemoveChangeHandler();f.moveFilter=f.createMoveChangeHandler();return f;},true);
