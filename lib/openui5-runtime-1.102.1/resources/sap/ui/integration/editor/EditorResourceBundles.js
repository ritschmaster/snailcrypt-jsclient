/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/LoaderExtensions","sap/base/i18n/ResourceBundle","sap/base/util/includes"],function(L,R,i){"use strict";var E=(function(){var _,a,b;L.loadResource("sap/ui/integration/editor/languages.json",{dataType:"json",failOnError:false,async:true}).then(function(o){a=o;});function c(){_=[];for(var p in a){var r;if(b){var f=[p];if(p.indexOf("-")>-1){f.push(p.substring(0,p.indexOf("-")));}if(!i(f,"en")){f.push("en");}r=R.create({url:b,async:false,locale:p,supportedLocales:f});}_[p]={"language":a[p],"resourceBundle":r};}return _;}return{getResourceBundleURL:function(){return b;},setResourceBundleURL:function(r){b=r;},getInstance:function(){if(!_){_=c();}return _;}};})();return E;});
