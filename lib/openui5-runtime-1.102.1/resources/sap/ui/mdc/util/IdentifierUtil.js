/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/base/DataType'],function(D){"use strict";var I={replace:function(n){var t=D.getType("sap.ui.core.ID");if(!t.isValid(n)){n=n.replace(/[^A-Za-z0-9_.:]+/g,"__mdc__");if(!t.isValid(n)){n="__mdc__"+n;}}return n;},getFilterFieldId:function(f,k){return f.getId()+"--filter--"+I.replace(k);},getPropertyKey:function(p){return p.name;},getPropertyPath:function(p){return p.path;},getView:function(c){var v=null;if(c){var o=c.getParent();while(o){if(o.isA("sap.ui.core.mvc.View")){v=o;break;}o=o.getParent();}}return v;}};return I;});
