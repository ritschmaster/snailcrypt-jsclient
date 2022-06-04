/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/InvisibleText'],function(I){"use strict";var F={getAriaRole:function(i,r){var a=i.getAriaAttributes();if(a.role){return a.role;}else{return r.getAriaRole.apply(this,arguments);}},getAccessibilityState:function(o,r){var a=o.getAriaAttributes();var A=r.getAccessibilityState.apply(this,arguments);if(a.aria){for(var s in a.aria){A[s]=a.aria[s];}}if(!a.valueHelpEnabled&&A.describedby){var v=I.getStaticId("sap.m","INPUT_VALUEHELP");var b=A.describedby.value.split(" ");var c="";for(var i=0;i<b.length;i++){var d=b[i];if(d!==v){c=c?c+" "+d:d;}}if(c){A.describedby.value=c;}else{delete A.describedby;}}return A;},writeInnerAttributes:function(r,i,R){R.writeInnerAttributes.apply(this,arguments);var a=i.getAriaAttributes();for(var A in a){if(A!=="aria"&&A!=="role"&&A!=="valueHelpEnabled"){r.attr(A,a[A]);}}}};return F;});
