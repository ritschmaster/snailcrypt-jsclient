//@ui5-bundle sap/tnt/library-h2-preload.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/tnt/library',["sap/ui/core/library","sap/m/library"],function(){"use strict";var t=sap.ui.getCore().initLibrary({name:"sap.tnt",version:"1.102.1",dependencies:["sap.ui.core","sap.m"],designtime:"sap/tnt/designtime/library.designtime",types:["sap.tnt.RenderMode"],interfaces:["sap.tnt.IToolHeader"],controls:["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel"],elements:["sap.tnt.NavigationListItem"],extensions:{flChangeHandlers:{"sap.tnt.NavigationListItem":"sap/tnt/flexibility/NavigationListItem"}}});t.RenderMode={Narrow:"Narrow",Loose:"Loose"};return t;});
sap.ui.require.preload({
	"sap/tnt/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"sap.tnt","type":"library","embeds":[],"applicationVersion":{"version":"1.102.1"},"title":"SAPUI5 library with responsive controls.","description":"SAPUI5 library with responsive controls.","ach":"CA-UI5-CTR","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_hcb"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.102","libs":{"sap.ui.core":{"minVersion":"1.102.1"},"sap.m":{"minVersion":"1.102.1"}}},"library":{"i18n":{"bundleUrl":"messagebundle.properties","supportedLocales":["","ar","bg","ca","cs","cy","da","de","el","en","en-GB","en-US-sappsd","en-US-saprigi","en-US-saptrc","es","es-MX","et","fi","fr","fr-CA","hi","hr","hu","id","it","iw","ja","kk","ko","lt","lv","ms","nl","no","pl","pt","pt-PT","ro","ru","sh","sk","sl","sv","th","tr","uk","vi","zh-CN","zh-TW"]},"content":{"controls":["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel"],"elements":["sap.tnt.NavigationListItem"],"types":["sap.tnt.RenderMode"],"interfaces":["sap.tnt.IToolHeader"]}}}}'
},"sap/tnt/library-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"sap/tnt/InfoLabel.js":["sap/tnt/InfoLabelRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/Core.js","sap/ui/core/library.js"],
"sap/tnt/InfoLabelRenderer.js":["sap/base/Log.js","sap/tnt/library.js","sap/ui/core/IconPool.js","sap/ui/core/library.js"],
"sap/tnt/NavigationList.js":["sap/base/Log.js","sap/m/Popover.js","sap/tnt/NavigationListRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/Element.js","sap/ui/core/InvisibleText.js","sap/ui/core/delegate/ItemNavigation.js","sap/ui/thirdparty/jquery.js"],
"sap/tnt/NavigationListItem.js":["sap/tnt/NavigationList.js","sap/tnt/library.js","sap/ui/core/Core.js","sap/ui/core/Icon.js","sap/ui/core/IconPool.js","sap/ui/core/InvisibleText.js","sap/ui/core/Item.js","sap/ui/core/Renderer.js","sap/ui/core/library.js","sap/ui/dom/jquery/Aria.js","sap/ui/events/KeyCodes.js","sap/ui/thirdparty/jquery.js","sap/ui/util/defaultLinkTypes.js","sap/ui/util/openWindow.js"],
"sap/tnt/NavigationListRenderer.js":["sap/ui/core/Core.js"],
"sap/tnt/SideNavigation.js":["sap/tnt/SideNavigationRenderer.js","sap/tnt/library.js","sap/ui/core/Control.js","sap/ui/core/Icon.js","sap/ui/core/ResizeHandler.js","sap/ui/core/delegate/ScrollEnablement.js","sap/ui/core/theming/Parameters.js"],
"sap/tnt/SideNavigationRenderer.js":["sap/ui/core/Core.js"],
"sap/tnt/ToolHeader.js":["sap/m/OverflowToolbar.js","sap/m/OverflowToolbarAssociativePopover.js","sap/m/library.js","sap/tnt/ToolHeaderRenderer.js","sap/tnt/library.js","sap/ui/Device.js"],
"sap/tnt/ToolHeaderRenderer.js":["sap/m/BarInPageEnabler.js","sap/m/OverflowToolbarRenderer.js","sap/ui/core/Renderer.js"],
"sap/tnt/ToolHeaderUtilitySeparator.js":["sap/tnt/library.js","sap/ui/core/Control.js"],
"sap/tnt/ToolPage.js":["sap/tnt/ToolPageRenderer.js","sap/tnt/library.js","sap/ui/Device.js","sap/ui/base/ManagedObjectObserver.js","sap/ui/core/Control.js","sap/ui/core/ResizeHandler.js"],
"sap/tnt/ToolPageRenderer.js":["sap/ui/Device.js"],
"sap/tnt/designtime/NavigationListItem.create.fragment.xml":["sap/tnt/NavigationListItem.js","sap/ui/core/Fragment.js"],
"sap/tnt/flexibility/NavigationListItem.flexibility.js":["sap/ui/fl/changeHandler/BaseRename.js"],
"sap/tnt/library.js":["sap/m/library.js","sap/ui/core/library.js"]
}});
//# sourceMappingURL=library-h2-preload.js.map