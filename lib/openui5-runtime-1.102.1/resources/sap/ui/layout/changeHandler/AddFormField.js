/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseAddViaDelegate"],function(B){"use strict";var A=B.createAddViaDelegateChangeHandler({addProperty:function(p){var i=p.innerControls;var m=p.modifier;var v=p.view;var a=p.appComponent;var c=p.change;var C=c.getContent();var I=C.newFieldIndex;var f=C.newFieldSelector;var o;var P;return Promise.resolve().then(function(){if(!i.layoutControl){return Promise.resolve().then(m.createControl.bind(m,"sap.ui.layout.form.FormElement",a,v,f)).then(function(b){o=b;return Promise.all([m.insertAggregation(o,"label",i.label,0,v),m.insertAggregation(o,"fields",i.control,0,v)]);});}o=i.control;return undefined;}).then(function(){P=c.getDependentControl("parentFormContainer",p);return m.insertAggregation(P,"formElements",o,I,v);}).then(function(){if(i.valueHelp){return m.insertAggregation(P,"dependents",i.valueHelp,0,v);}return undefined;});},aggregationName:"formElements",parentAlias:"parentFormContainer",fieldSuffix:"-field",supportsDefault:true});return A;},true);
