/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/ComponentContainer',"sap/base/util/uid","sap/ui/thirdparty/jquery",'sap/ui/core/Component'],function(C,u,q,a){"use strict";var _=false,b=null,c=null;return{start:function(m){if(_){throw new Error("sap.ui.test.launchers.componentLauncher: Start was called twice without teardown. Only one component can be started at a time.");}var p=a.create(m);_=true;return p.then(function(o){var i=u();c=q('<div id="'+i+'" class="sapUiOpaComponent"></div>');q("body").append(c).addClass("sapUiOpaBodyComponent");b=new C({component:o,height:"100%",width:"100%"});b.placeAt(i);});},hasLaunched:function(){return _;},teardown:function(){if(!_){throw new Error("sap.ui.test.launchers.componentLauncher: Teardown was called before start. No component was started.");}b.destroy();c.remove();_=false;q("body").removeClass("sapUiOpaBodyComponent");}};},true);
