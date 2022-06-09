/*
 * ! OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/dt/Plugin","sap/m/Menu","sap/m/MenuItem","sap/ui/dt/Util","sap/ui/dt/OverlayRegistry","sap/ui/dt/util/_createPromise","sap/ui/Device","sap/base/assert","sap/ui/events/KeyCodes"],function(P,M,a,D,O,_,b,c,K){"use strict";var C=P.extend("sap.ui.dt.plugin.ContextMenu",{metadata:{library:"sap.ui.dt",properties:{contextElement:{type:"object"},openOnClick:{type:"boolean",defaultValue:true}},events:{openedContextMenu:{},closedContextMenu:{}}}});var m="sapUiDtContextMenu";var d="sapUiDtContextMiniMenu";C.prototype.init=function(){this.oContextMenuControl=new M();this.oContextMenuControl.attachItemSelected(this._onItemSelected,this);this.oContextMenuControl.attachClosed(this._contextMenuClosed,this);this.oContextMenuControl.addStyleClass(m);this._aMenuItems=[];this._aGroupedItems=[];this._aSubMenus=[];};C.prototype.exit=function(){delete this._aMenuItems;if(this.oContextMenuControl){this.oContextMenuControl.destroy();}};C.prototype.addMenuItem=function(e,r,p){var f={menuItem:e,fromPlugin:!!r,bPersistOneTime:p};this._aMenuItems.push(f);};C.prototype.registerElementOverlay=function(o){o.attachBrowserEvent("click",this._openContextMenu,this);o.attachBrowserEvent("touchstart",this._openContextMenu,this);o.attachBrowserEvent("contextmenu",this._openContextMenu,this);o.attachBrowserEvent("keydown",this._onKeyDown,this);o.attachBrowserEvent("keyup",this._onKeyUp,this);};C.prototype.deregisterElementOverlay=function(o){o.detachBrowserEvent("click",this._openContextMenu,this);o.detachBrowserEvent("touchstart",this._openContextMenu,this);o.detachBrowserEvent("contextmenu",this._openContextMenu,this);o.detachBrowserEvent("keydown",this._onKeyDown,this);o.detachBrowserEvent("keyup",this._onKeyUp,this);};C.prototype.open=function(o,e,i,E){var s;function f(h,j){j.forEach(function(k,l){var t=typeof k.text==="function"?k.text(o):k.text;var q=typeof k.enabled==="function"?k.enabled(s):k.enabled;var T;if(!e){T=t;}h.addItem(new a({key:k.id,icon:k.icon,text:t,enabled:q}).setTooltip(T));if(k.submenu){f(h.getItems()[l],k.submenu);}});}this._bContextMenu=!!e;if(this._bContextMenu){this.oContextMenuControl.removeStyleClass(d);}else{this.oContextMenuControl.addStyleClass(d);}var n=o.getElement();if(this._fnCancelMenuPromise){if(this.getContextElement()===n){return;}this._fnCancelMenuPromise();delete this._fnCancelMenuPromise;}this.setContextElement(n);this.getDesignTime().getSelectionManager().attachChange(this._onSelectionChanged,this);s=this.getSelectedOverlays().filter(function(h){return h!==o;});s.unshift(o);this._aMenuItems=this._aMenuItems.filter(function(h){if(h.bPersistOneTime){h.bPersistOneTime=false;return true;}return!h.fromPlugin;});this.oContextMenuControl.destroyItems();var p=Promise.resolve();if(!i){var g=_(function(r,h){D.waitForSynced(this.getDesignTime())().then(r).catch(h);}.bind(this));this._fnCancelMenuPromise=g.cancel;p=g.promise.then(function(){this._aGroupedItems=[];this._aSubMenus=[];var h=[];var j=this.getDesignTime().getPlugins();j.forEach(function(l){var v=l.getMenuItems(s);if(!(v instanceof Promise)){v=Promise.resolve(v);}h.push(v);});var k=_(function(r,l){Promise.all(h).then(r).catch(l);});this._fnCancelMenuPromise=k.cancel;return k.promise;}.bind(this)).then(function(h){return h.reduce(function(j,k){return j.concat(k);});}).then(function(h){h.forEach(function(j){var k=typeof j.enabled==="function"?j.enabled(s):j.enabled;if(!k&&!e){return;}if(j.group!==undefined&&!e){this._addMenuItemToGroup(j);}else if(j.submenu!==undefined){this._addSubMenu(j);}else{this.addMenuItem(j,true);}}.bind(this));this._addItemGroupsToMenu();delete this._fnCancelMenuPromise;}.bind(this));}p.then(function(){var h=this._aMenuItems.map(function(j){return j.menuItem;});if(h.length>0){h=this._sortMenuItems(h);f(this.oContextMenuControl,h);this.oContextMenuControl.openAsContextMenu(E,o);}this.fireOpenedContextMenu();}.bind(this)).catch(function(h){throw D.createError("ContextMenu#open","An error occured during calling getMenuItems: "+h);});};C.prototype._sortMenuItems=function(e){return e.sort(function(f,s){if(!f.rank&&!s.rank){return 0;}if(!f.rank&&s.rank){return-1;}if(f.rank&&!s.rank){return 1;}return f.rank-s.rank;});};C.prototype._onItemSelected=function(e){this._ensureSelection(this._oCurrentOverlay);function f(o,e){var S=o.responsible||this.getSelectedOverlays()||[];c(S.length>0,"sap.ui.rta - Opening context menu, with empty selection - check event order");var p={};p.eventItem=e;p.contextElement=this.getContextElement();o.handler(S,p);}var s=e.getParameter("item").getKey();this._aMenuItems.some(function(g){var i=g.menuItem;if(s===g.menuItem.id){f.apply(this,[i,e]);return true;}else if(i.submenu){i.submenu.some(function(S){if(s===S.id){f.apply(this,[S,e]);return true;}}.bind(this));}},this);};C.prototype._onKeyUp=function(e){var o=O.getOverlay(e.currentTarget.id);if(e.keyCode===K.ENTER&&o.getIgnoreEnterKeyUpOnce()){o.setIgnoreEnterKeyUpOnce(false);e.stopPropagation();e.preventDefault();return;}if((e.keyCode===K.SPACE||e.keyCode===K.ENTER)&&(e.shiftKey===false)&&(e.altKey===false)&&(e.ctrlKey===false)){if(!this._checkForPluginLock()){this._openContextMenu(e);e.stopPropagation();e.preventDefault();}}if((e.keyCode===K.F10)&&(e.shiftKey===true)&&(e.altKey===false)&&(e.ctrlKey===false)){if(!this._checkForPluginLock()){this._openContextMenu(e);e.stopPropagation();e.preventDefault();}}};C.prototype._onKeyDown=function(e){var o=O.getOverlay(e.currentTarget.id);if((e.keyCode===K.SPACE)&&(e.shiftKey===false)&&(e.altKey===false)&&(e.ctrlKey===false)){if(o&&o.isSelectable()&&!this._checkForPluginLock()){o.setSelected(true);e.stopPropagation();e.preventDefault();}}};C.prototype._openContextMenu=function(e){var o=O.getOverlay(e.currentTarget.id);if(o&&o.isSelectable()&&o.getSelected()){this._oCurrentOverlay=o;var f=e.type==="contextmenu"||e.keyCode===K.F10;this.open(o,f,undefined,e);}};C.prototype._contextMenuClosed=function(){this.oContextMenuControl.removeStyleClass(d);this.fireClosedContextMenu();};C.prototype._onSelectionChanged=function(){this.getDesignTime().getSelectionManager().detachChange(this._onSelectionChanged,this);};C.prototype._ensureSelection=function(o){if(o&&!o.isSelected()){o.setSelected(true);}};C.prototype._checkForPluginLock=function(){if(b.os.ios){return false;}if(this.getDesignTime().getBusyPlugins().length){return true;}return false;};C.prototype._addMenuItemToGroup=function(e){var g=this._aGroupedItems.some(function(f){if(f.sGroupName===e.group){f.aGroupedItems.push(e);return true;}});if(!g){this._aGroupedItems.push({sGroupName:e.group,aGroupedItems:[e]});}};C.prototype._addSubMenu=function(e){e.submenu.forEach(function(s){if(!s.handler){s.handler=e.handler;}});this._aSubMenus.push({sSubMenuId:e.id,aSubMenuItems:e.submenu});this.addMenuItem(e,true);};C.prototype._addItemGroupsToMenu=function(){this._aGroupedItems.forEach(function(g){if(g.aGroupedItems.length===1){this.addMenuItem(g.aGroupedItems[0],true);}else{this.addMenuItem({id:g.sGroupName+"-groupItem",enabled:true,text:g.sGroupName,icon:g.aGroupedItems[0].icon,rank:g.aGroupedItems[0].rank,submenu:g.aGroupedItems},true);}}.bind(this));};return C;});