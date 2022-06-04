//@ui5-bundle sap/ui/webc/fiori/designtime/library-preload.designtime.js
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/NotificationListItem.designtime", [],function(){"use strict";return{name:{singular:"NOTIFICATION_LIST_ITEM_NAME",plural:"NOTIFICATION_LIST_ITEM_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/Page.designtime", [],function(){"use strict";return{name:{singular:"PAGE_NAME",plural:"PAGE_NAME_PLURAL"},aggregations:{header:{domRef:function(e){return e.getDomRef().querySelector("[ui5-bar][slot='header']")}},content:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-page-content-root")},actions:{move:"moveControls"}},footer:{domRef:function(e){return e.getDomRef().querySelector("[ui5-bar][slot='footer']")}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/SideNavigation.designtime", [],function(){"use strict";return{name:{singular:"SIDE_NAVIGATION_NAME",plural:"SIDE_NAVIGATION_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/SideNavigationItem.designtime", [],function(){"use strict";var e=function(e){return Array.from(e.getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-item-ui5")).find(function(t){return t.associatedItem===e.getDomRef()})};return{name:{singular:"SIDE_NAVIGATION_ITEM_NAME",plural:"SIDE_NAVIGATION_ITEM_PLURAL"},domRef:function(t){var r=Array.from(t.getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));var o=Array.from(t.getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[1].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));return r.find(function(r){return r.treeItem===e(t)})||o.find(function(r){return r.treeItem===e(t)})},actions:{rename:{changeType:"rename",domRef:function(t){var r=Array.from(t.getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));var o=Array.from(t.getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[1].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));return r.find(function(r){return r.treeItem===e(t)})||o.find(function(r){return r.treeItem===e(t)}).shadowRoot.querySelector(".ui5-li-title")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/SideNavigationSubItem.designtime", [],function(){"use strict";var e=function(e){return Array.from(e.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-item-ui5")).find(function(t){return t.associatedItem===e.getDomRef()})};return{name:{singular:"SIDE_NAVIGATION_SUB_ITEM_NAME",plural:"SIDE_NAVIGATION_ITEM_SUB_PLURAL"},domRef:function(t){var r=Array.from(t.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));return r.find(function(r){return r.treeItem===e(t)})},actions:{rename:{changeType:"rename",domRef:function(t){var r=Array.from(t.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));return r.find(function(r){return r.treeItem===e(t)}).shadowRoot.querySelector(".ui5-li-title")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/UploadCollection.designtime", [],function(){"use strict";return{name:{singular:"UPLOAD_COLLECTION_NAME",plural:"UPLOAD_COLLECTION_PLURAL"},aggregations:{items:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-uc-content")},actions:{move:{changeType:"moveControls"}}}}}});
/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine("sap/ui/webc/fiori/designtime/UploadCollectionItem.designtime", [],function(){"use strict";return{name:{singular:"UPLOAD_COLLECTION_ITEM_NAME",plural:"UPLOAD_COLLECTION_ITEM_NAME_PLURAL"},actions:{rename:{changeType:"renameUploadCollectionItem",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-uci-file-name")}},remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=library-preload.designtime.js.map
