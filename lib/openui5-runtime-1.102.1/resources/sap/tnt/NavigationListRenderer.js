/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(C){"use strict";var N={apiVersion:2};var r=C.getLibraryResourceBundle("sap.tnt");N.render=function(a,c){var b,g=c.getItems(),e=c.getExpanded(),v=[],h=false;g.forEach(function(d){if(d.getVisible()){v.push(d);if(d.getIcon()){h=true;}}});a.openStart("ul",c);var w=c.getWidth();if(w&&e){a.style("width",w);}a.class("sapTntNavLI");if(!e){a.class("sapTntNavLICollapsed");}if(!h){a.class("sapTntNavLINoIcons");}b=!e&&!c.hasStyleClass("sapTntNavLIPopup")?'menubar':'tree';a.attr("role",b);if(b==='menubar'){a.attr("aria-orientation","vertical");a.attr("aria-roledescription",r.getText("NAVIGATION_LIST_ITEM_ROLE_DESCRIPTION_MENUBAR"));}else{a.attr("aria-roledescription",r.getText("NAVIGATION_LIST_ITEM_ROLE_DESCRIPTION_TREE"));}a.openEnd();v.forEach(function(d){d.render(a,c);});a.close("ul");};return N;},true);
