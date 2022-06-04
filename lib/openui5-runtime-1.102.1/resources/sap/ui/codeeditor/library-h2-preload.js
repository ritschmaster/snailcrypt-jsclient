//@ui5-bundle sap/ui/codeeditor/library-h2-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/codeeditor/library',["sap/ui/core/Core","sap/ui/core/library"],function(){"use strict";var t=sap.ui.getCore().initLibrary({name:"sap.ui.codeeditor",dependencies:["sap.ui.core"],types:[],interfaces:[],controls:["sap.ui.codeeditor.CodeEditor"],elements:[],noLibraryCSS:false,version:"1.102.1"});return t;});
sap.ui.require.preload({
	"sap/ui/codeeditor/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"sap.ui.codeeditor","type":"library","embeds":[],"applicationVersion":{"version":"1.102.1"},"title":"UI5 library: sap.ui.codeeditor","description":"UI5 library: sap.ui.codeeditor","resources":"resources.json","offline":true,"openSourceComponents":[{"name":"ace","packagedWithMySelf":true,"version":"1.4.13"}]},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_hcb"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.102","libs":{"sap.ui.core":{"minVersion":"1.102.1"}}},"library":{"i18n":{"bundleUrl":"messagebundle.properties","supportedLocales":["","ar","bg","ca","cs","cy","da","de","el","en","en-GB","en-US-sappsd","en-US-saprigi","en-US-saptrc","es","es-MX","et","fi","fr","fr-CA","hi","hr","hu","id","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt","pt-PT","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh-CN","zh-TW"]},"content":{"controls":["sap.ui.codeeditor.CodeEditor"],"elements":[],"types":[],"interfaces":[]}}}}'
},"sap/ui/codeeditor/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/ui/codeeditor/CodeEditor.js":["sap/ui/codeeditor/js/ace/ace.js","sap/ui/codeeditor/js/ace/ext-beautify.js","sap/ui/codeeditor/js/ace/ext-language_tools.js","sap/ui/codeeditor/js/ace/mode-javascript.js","sap/ui/codeeditor/js/ace/mode-json.js","sap/ui/codeeditor/library.js","sap/ui/core/Control.js","sap/ui/core/Core.js","sap/ui/core/RenderManager.js","sap/ui/core/ResizeHandler.js","sap/ui/dom/includeStylesheet.js","sap/ui/thirdparty/jquery.js"],
"sap/ui/codeeditor/library.js":["sap/ui/core/Core.js","sap/ui/core/library.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map