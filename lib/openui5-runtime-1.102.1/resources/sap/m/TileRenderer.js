/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var T={apiVersion:2};T.render=function(r,c){var t,v;r.openStart("div",c);r.attr("tabindex","0");r.class("sapMTile");r.class("sapMPointer");if(c._invisible){r.style("visibility","hidden");}var s=c.getTooltip_AsString();if(s){r.attr("title",s);}if(c.getParent()&&c.getParent().isA("sap.m.TileContainer")){t=c.getParent();v=t._getVisibleTiles();r.accessibilityState(c,{role:"option",posinset:t._indexOfVisibleTile(c,v)+1,setsize:v.length});}r.openEnd();r.openStart("div",c.getId()+"-remove");r.class(c.getRemovable()?"sapMTCRemove":"sapMTCNoRemove");r.openEnd().close("div");r.openStart("div").class("sapMTileContent").openEnd();this._renderContent(r,c);r.close("div").close("div");};T._renderContent=function(r,c){};return T;},true);
